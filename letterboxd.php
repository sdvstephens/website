<?php
// letterboxd.php — cached proxy for the Letterboxd diary RSS feed.
// Username is read from films/films.json ("letterboxd" key) so it lives in one place.
// Letterboxd has no public API; the RSS feed is the sanctioned read surface.
// Cache: 6h in the system temp dir, with stale-on-error fallback.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=1800');

$TTL = 6 * 3600;
$cacheFile = sys_get_temp_dir() . '/ss_letterboxd_cache.json';

function respond($data) {
    echo json_encode($data);
    exit;
}

$cfgPath = __DIR__ . '/films/films.json';
if (!is_readable($cfgPath)) respond(['error' => 'no-config', 'films' => []]);

$cfg = json_decode(file_get_contents($cfgPath), true);
$user = isset($cfg['letterboxd']) ? $cfg['letterboxd'] : '';

// Tight allowlist on the username: it is interpolated into a URL.
if (!preg_match('/^[A-Za-z0-9_]{1,32}$/', $user)) {
    respond(['error' => 'no-username', 'films' => []]);
}

// Serve fresh cache if present.
if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < $TTL) {
    readfile($cacheFile);
    exit;
}

$url = "https://letterboxd.com/{$user}/rss/";
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_MAXREDIRS      => 3,
    CURLOPT_TIMEOUT        => 8,
    CURLOPT_USERAGENT      => 'samuel-stephens.com feed cache (+https://samuel-stephens.com)',
]);
$xmlRaw = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($xmlRaw === false || $code !== 200) {
    // Stale cache beats nothing.
    if (is_readable($cacheFile)) { readfile($cacheFile); exit; }
    respond(['error' => 'fetch-failed', 'films' => []]);
}

libxml_use_internal_errors(true);
$xml = simplexml_load_string($xmlRaw);
if ($xml === false || !isset($xml->channel)) {
    if (is_readable($cacheFile)) { readfile($cacheFile); exit; }
    respond(['error' => 'parse-failed', 'films' => []]);
}

$out = ['updated' => gmdate('c'), 'user' => $user, 'films' => []];

foreach ($xml->channel->item as $item) {
    $lb = $item->children('https://letterboxd.com');
    // Diary/review entries carry filmTitle; list activity does not — skip lists.
    if (!isset($lb->filmTitle)) continue;

    $out['films'][] = [
        'title'   => (string) $lb->filmTitle,
        'year'    => (string) $lb->filmYear,
        'rating'  => isset($lb->memberRating) ? (float) $lb->memberRating : null,
        'watched' => isset($lb->watchedDate) ? (string) $lb->watchedDate : '',
        'rewatch' => isset($lb->rewatch) && (string) $lb->rewatch === 'Yes',
        'link'    => (string) $item->link,
    ];
    if (count($out['films']) >= 10) break;
}

$json = json_encode($out);
@file_put_contents($cacheFile, $json, LOCK_EX);
echo $json;
