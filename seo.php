<?php
/**
 * seo.php — search-engine crawlers only (.htaccess routes them here).
 *
 * Emits a lightweight text rendering of the page alongside the same
 * metadata index.php serves, so indexing doesn't depend on JavaScript.
 * Page metadata itself lives in meta.php — edit it there, not here.
 */

require_once __DIR__ . '/meta.php';

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$path = rtrim($path, '/');
if ($path === '') {
    $path = '/';
}

$m   = sss_meta($path);
$esc = static fn($s): string => htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?= $esc($m['title']) ?></title>
  <meta name="description" content="<?= $esc($m['desc']) ?>">
  <meta name="author" content="S. D. V. Stephens">
  <link rel="canonical" href="<?= $esc($m['url']) ?>">
  <meta property="og:type" content="<?= $esc($m['type']) ?>">
  <meta property="og:site_name" content="S. D. V. Stephens">
  <meta property="og:title" content="<?= $esc($m['title']) ?>">
  <meta property="og:description" content="<?= $esc($m['desc']) ?>">
  <meta property="og:url" content="<?= $esc($m['url']) ?>">
  <meta name="twitter:card" content="<?= $esc($m['card']) ?>">
  <meta name="twitter:title" content="<?= $esc($m['title']) ?>">
  <meta name="twitter:description" content="<?= $esc($m['desc']) ?>">
<?php if (!empty($m['image'])): ?>
  <meta property="og:image" content="<?= $esc($m['image']) ?>">
  <meta name="twitter:image" content="<?= $esc($m['image']) ?>">
<?php endif; ?>
</head>
<body>
<?php if ($m['body'] !== ''): ?>
  <?= $m['body'] ?>
<?php else: ?>
  <h1><?= $esc($m['title']) ?></h1>
  <p><?= $esc($m['desc']) ?></p>
<?php endif; ?>
  <p><a href="<?= $esc($m['url']) ?>">View on samuel-stephens.com</a></p>
</body>
</html>
