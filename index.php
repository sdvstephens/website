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

header('Content-Type: text/html; charset=UTF-8');
echo $html;
