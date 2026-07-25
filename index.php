<?php
/**
 * index.php — serves the SPA with correct per-page link-preview metadata.
 *
 * Every visitor gets this: humans receive the normal single-page app (the
 * JavaScript is untouched), and link-preview crawlers receive real <title>
 * and og: tags for the specific URL instead of the generic homepage ones.
 * This removes any dependence on user-agent sniffing.
 *
 * Falls back to serving index.html verbatim if anything goes wrong.
 */

require_once __DIR__ . '/meta.php';

$html = @file_get_contents(__DIR__ . '/index.html');
if ($html === false) {
    http_response_code(500);
    exit('Site temporarily unavailable.');
}

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$path = rtrim($path, '/');
if ($path === '') {
    $path = '/';
}

$m = sss_meta($path);
$esc = static fn($s): string => htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');

// Build the replacement metadata block.
$block  = "<!-- META:START -->\n";
$block .= '  <title>' . $esc($m['title']) . "</title>\n";
$block .= '  <meta name="description" content="' . $esc($m['desc']) . "\">\n";
$block .= '  <meta name="author" content="S. D. V. Stephens">' . "\n";
$block .= '  <meta property="og:type" content="' . $esc($m['type']) . "\">\n";
$block .= '  <meta property="og:site_name" content="S. D. V. Stephens">' . "\n";
$block .= '  <meta property="og:title" content="' . $esc($m['title']) . "\">\n";
$block .= '  <meta property="og:description" content="' . $esc($m['desc']) . "\">\n";
$block .= '  <meta property="og:url" content="' . $esc($m['url']) . "\">\n";
$block .= '  <meta name="twitter:card" content="' . $esc($m['card']) . "\">\n";
$block .= '  <meta name="twitter:title" content="' . $esc($m['title']) . "\">\n";
$block .= '  <meta name="twitter:description" content="' . $esc($m['desc']) . "\">\n";
if (!empty($m['image'])) {
    $block .= '  <meta property="og:image" content="' . $esc($m['image']) . "\">\n";
    $block .= '  <meta name="twitter:image" content="' . $esc($m['image']) . "\">\n";
}
$block .= '  <!-- META:END -->';

// Splice by marker position (no regex, so no escaping surprises).
$start = strpos($html, '<!-- META:START');
$end   = strpos($html, '<!-- META:END -->');
if ($start !== false && $end !== false && $end > $start) {
    $html = substr($html, 0, $start) . $block . substr($html, $end + strlen('<!-- META:END -->'));
}

// Keep the canonical link in step with the requested URL.
$html = str_replace(
    '<link rel="canonical" href="https://samuel-stephens.com/">',
    '<link rel="canonical" href="' . $esc($m['url']) . '">',
    $html
);

// --- Cache validators ----------------------------------------------------
// A static index.html got Last-Modified/ETag from Apache for free, so back
// navigation was a cheap 304 or a bfcache restore. A PHP response gets none
// of that unless we set it, which means every back/forward press re-downloads
// ~120 KB and re-runs the whole SPA bootstrap — a multi-second blank screen.
// Deliberately NOT using no-store, which would disable the bfcache entirely.
$sources = [__DIR__ . '/index.html', __DIR__ . '/meta.php', __DIR__ . '/blog/posts.json'];
$lastMod = 0;
foreach ($sources as $src) {
    $stamp = @filemtime($src);
    if ($stamp && $stamp > $lastMod) {
        $lastMod = $stamp;
    }
}
if ($lastMod === 0) {
    $lastMod = time();
}

$etag = '"' . md5($html) . '"';

header('Content-Type: text/html; charset=UTF-8');
header('ETag: ' . $etag);
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $lastMod) . ' GMT');
header('Cache-Control: public, max-age=0, must-revalidate');

// Honour conditional requests so a revalidation costs ~0 bytes.
// mod_deflate rewrites outgoing ETags as "abc-gzip", and the browser sends
// that back verbatim, so normalise before comparing or every revalidation
// would miss and return a full body. If-None-Match may also list several
// tags, and may mark them weak with a W/ prefix.
$normalise = static function (string $tag): string {
    $tag = trim($tag);
    $tag = preg_replace('/^W\//i', '', $tag);
    return (string) preg_replace('/-(gzip|br|deflate)"$/i', '"', $tag);
};

$ifNoneMatch     = trim($_SERVER['HTTP_IF_NONE_MATCH'] ?? '');
$ifModifiedSince = $_SERVER['HTTP_IF_MODIFIED_SINCE'] ?? '';

$etagMatches = false;
if ($ifNoneMatch !== '') {
    foreach (explode(',', $ifNoneMatch) as $candidate) {
        if ($normalise($candidate) === $normalise($etag)) {
            $etagMatches = true;
            break;
        }
    }
}

$isFresh = $etagMatches
    || ($ifNoneMatch === '' && $ifModifiedSince !== '' && @strtotime($ifModifiedSince) >= $lastMod);

if ($isFresh) {
    http_response_code(304);
    exit;
}

header('Content-Length: ' . strlen($html));
echo $html;
