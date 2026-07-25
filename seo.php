<?php
/**
 * SEO shim for samuel-stephens.com
 * Serves bot-friendly HTML with proper meta tags.
 * Humans never see this — .htaccess routes only bots here.
 */

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = rtrim($path, '/') ?: '/';
$base = 'https://samuel-stephens.com';
$img  = "$base/sdvs.jpg";
$site = 'S. D. V. Stephens';

// Defaults
$title = $site;
$desc  = 'Neurobioengineering, Mathematical Physics, Philosophy, Cognitive Science';
$body  = '';

// Static pages
$static = [
  '/'         => ['title' => $site, 'desc' => $desc],
  '/about'    => ['title' => "About — $site", 'desc' => 'Researcher and mathematician working in neurobioengineering, mathematical physics, and philosophy.'],
  '/research' => ['title' => "Research — $site", 'desc' => 'CICADAS framework for causal inference in critical care, polyadic algebraic structures, and more.'],
  '/blog'     => ['title' => "Blog — $site", 'desc' => 'Writings on mathematics, philosophy, and miscellany.'],
  '/films'    => ['title' => "Films — $site", 'desc' => 'A ranked film canon and a live Letterboxd diary.'],
  '/music'    => ['title' => "Music — $site", 'desc' => 'Listening preferences: contemporary classical, spectralism, minimalism, and adjacent threads.'],
  '/notes'    => ['title' => "Lecture Notes — $site", 'desc' => 'Mathematics and science lecture notes.'],
  '/homework' => ['title' => "Homework — $site", 'desc' => 'Problem sets and solutions for mathematics courses.'],
  '/educational' => ['title' => "Educational — $site", 'desc' => 'Mathematics lectures, notes, and problem sets.'],
];

if (isset($static[$path])) {
  $title = $static[$path]['title'];
  $desc  = $static[$path]['desc'];
}

// Dynamic: blog posts
if (preg_match('#^/blog/([a-z0-9-]+)$#', $path, $m)) {
  $slug = $m[1];
  $json = @file_get_contents(__DIR__ . '/blog/posts.json');
  if ($json) {
    $posts = json_decode($json, true);
    foreach ($posts as $p) {
      if ($p['slug'] === $slug) {
        $title = $p['title'] . " — $site";
        $desc  = $p['excerpt'] ?? $p['title'];
        $body  = "<h1>{$p['title']}</h1><p>{$desc}</p><p>Published {$p['date']}</p>";
        break;
      }
    }
  }
}

// Dynamic: notes course
if (preg_match('#^/notes/([a-z0-9-]+)$#', $path, $m)) {
  $slug = $m[1];
  $json = @file_get_contents(__DIR__ . "/notes/$slug/course.json");
  if ($json) {
    $course = json_decode($json, true);
    $title = $course['title'] . " — Notes — $site";
    $desc  = "Lecture notes for " . $course['title'];
    $body  = "<h1>{$course['title']}</h1>";
    foreach ($course['chapters'] ?? [] as $ch) {
      $body .= "<h2>Chapter {$ch['number']}: {$ch['title']}</h2><ul>";
      foreach ($ch['sections'] ?? [] as $s) {
        $body .= "<li>Section {$s['number']}: {$s['title']}</li>";
      }
      $body .= "</ul>";
    }
  }
}

// Dynamic: notes section
if (preg_match('#^/notes/([a-z0-9-]+)/([a-z0-9-]+)$#', $path, $m)) {
  $courseSlug = $m[1];
  $sectionSlug = $m[2];
  $json = @file_get_contents(__DIR__ . "/notes/$courseSlug/course.json");
  if ($json) {
    $course = json_decode($json, true);
    foreach ($course['chapters'] ?? [] as $ch) {
      foreach ($ch['sections'] ?? [] as $s) {
        if ($s['slug'] === $sectionSlug) {
          $title = $s['title'] . " — " . $course['title'] . " — $site";
          $desc  = "Section {$s['number']}: {$s['title']} from {$course['title']}";
          break 2;
        }
      }
    }
  }
}

// Dynamic: homework course
if (preg_match('#^/homework/([a-z0-9-]+)$#', $path, $m)) {
  $slug = $m[1];
  $json = @file_get_contents(__DIR__ . "/homework/$slug/assignments.json");
  if ($json) {
    $data = json_decode($json, true);
    $title = $data['title'] . " — $site";
    $desc  = "Problem sets for " . $data['title'];
    $body  = "<h1>{$data['title']}</h1><ul>";
    foreach ($data['assignments'] ?? [] as $a) {
      $body .= "<li>{$a['title']}</li>";
    }
    $body .= "</ul>";
  }
}

// Dynamic: homework assignment
if (preg_match('#^/homework/([a-z0-9-]+)/([a-z0-9-]+)$#', $path, $m)) {
  $courseSlug = $m[1];
  $assignSlug = $m[2];
  $json = @file_get_contents(__DIR__ . "/homework/$courseSlug/assignments.json");
  if ($json) {
    $data = json_decode($json, true);
    foreach ($data['assignments'] ?? [] as $a) {
      if ($a['slug'] === $assignSlug) {
        $title = $a['title'] . " — " . $data['title'] . " — $site";
        $desc  = $a['title'] . " for " . $data['title'];
        break;
      }
    }
  }
}

// Sanitize for HTML output
$title = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
$desc  = htmlspecialchars($desc, ENT_QUOTES, 'UTF-8');
$canon = htmlspecialchars($base . $path, ENT_QUOTES, 'UTF-8');

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?= $title ?></title>
  <meta name="description" content="<?= $desc ?>">
  <meta name="author" content="S. D. V. Stephens">
  <link rel="canonical" href="<?= $canon ?>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= $title ?>">
  <meta property="og:description" content="<?= $desc ?>">
  <meta property="og:image" content="<?= $img ?>">
  <meta property="og:url" content="<?= $canon ?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= $title ?>">
  <meta name="twitter:description" content="<?= $desc ?>">
  <meta name="twitter:image" content="<?= $img ?>">
</head>
<body>
  <h1><?= $title ?></h1>
  <p><?= $desc ?></p>
  <?= $body ?>
  <p><a href="<?= $canon ?>">View on samuel-stephens.com</a></p>
</body>
</html>
