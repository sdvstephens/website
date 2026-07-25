<?php
/**
 * meta.php — single source of truth for per-page link-preview metadata.
 *
 * Used by index.php (serves every visitor, human or crawler) and by
 * seo.php (search-engine crawlers, which also get a text body).
 *
 * Why this exists: link-preview crawlers do not run JavaScript, so an SPA
 * that sets its title client-side always previews as the generic homepage.
 * Apple Messages in particular fetches with a plain Safari user-agent, so
 * user-agent sniffing cannot catch it. Serving correct tags to everyone is
 * the only reliable fix.
 */

function sss_meta(string $path): array {
    $base     = 'https://samuel-stephens.com';
    $site     = 'S. D. V. Stephens';
    $portrait = "$base/sdvs.jpg";
    $tagline  = 'Neurobioengineering, Mathematical Physics, Philosophy, Cognitive Science';

    // Only these keep the large portrait card.
    $portraitPages = ['/', '/about', '/educational'];

    $m = [
        'title' => $site,
        'desc'  => $tagline,
        'image' => null,
        'card'  => 'summary',
        'type'  => 'website',
        'url'   => $base . ($path === '/' ? '/' : $path),
        'body'  => '',
    ];

    $static = [
        '/'            => ["About — $site", 'Researcher and mathematician working in neurobioengineering, mathematical physics, and philosophy.'],
        '/about'       => ["About — $site", 'Researcher and mathematician working in neurobioengineering, mathematical physics, and philosophy.'],
        '/educational' => ["Educational — $site", 'Mathematics lectures, notes, and problem sets.'],
        '/research'    => ["Research — $site", 'CICADAS framework for causal inference in critical care, polyadic algebraic structures, and more.'],
        '/blog'        => ["Blog — $site", 'Writings on mathematics, philosophy, and miscellany.'],
        '/films'       => ["Films — $site", 'A ranked film canon and a live Letterboxd diary.'],
        '/music'       => ["Music — $site", 'Listening preferences: contemporary classical, spectralism, minimalism, and adjacent threads.'],
        '/notes'       => ["Lecture Notes — $site", 'Mathematics and science lecture notes.'],
        '/homework'    => ["Homework — $site", 'Problem sets and solutions for mathematics courses.'],
    ];

    // The homepage keeps the bare site name rather than "About — ...".
    if ($path === '/') {
        $m['title'] = $site;
        $m['desc']  = $tagline;
    } elseif (isset($static[$path])) {
        $m['title'] = $static[$path][0];
        $m['desc']  = $static[$path][1];
    }

    // Blog post: /blog/<slug>
    if (preg_match('#^/blog/([a-z0-9-]+)$#', $path, $hit)) {
        $posts = @json_decode((string) @file_get_contents(__DIR__ . '/blog/posts.json'), true);
        foreach (is_array($posts) ? $posts : [] as $p) {
            if (($p['slug'] ?? null) === $hit[1]) {
                $m['title'] = $p['title'];
                $m['desc']  = ($p['excerpt'] ?? '') !== '' ? $p['excerpt'] : $p['title'];
                $m['type']  = 'article';
                $m['body']  = '<h1>' . htmlspecialchars($p['title']) . '</h1>'
                            . '<p>' . htmlspecialchars($m['desc']) . '</p>'
                            . '<p>Published ' . htmlspecialchars($p['date'] ?? '') . '</p>';
                break;
            }
        }
    }

    // Notes course: /notes/<course>
    if (preg_match('#^/notes/([a-z0-9-]+)$#', $path, $hit)) {
        $c = @json_decode((string) @file_get_contents(__DIR__ . "/notes/{$hit[1]}/course.json"), true);
        if (is_array($c) && isset($c['title'])) {
            $m['title'] = $c['title'] . " — Notes";
            $m['desc']  = 'Lecture notes for ' . $c['title'];
            $body = '<h1>' . htmlspecialchars($c['title']) . '</h1>';
            foreach ($c['chapters'] ?? [] as $ch) {
                $body .= '<h2>Chapter ' . htmlspecialchars((string) ($ch['number'] ?? ''))
                       . ': ' . htmlspecialchars($ch['title'] ?? '') . '</h2>';
            }
            $m['body'] = $body;
        }
    }

    // Notes section: /notes/<course>/<section>
    if (preg_match('#^/notes/([a-z0-9-]+)/([a-z0-9-]+)$#', $path, $hit)) {
        $c = @json_decode((string) @file_get_contents(__DIR__ . "/notes/{$hit[1]}/course.json"), true);
        foreach ((is_array($c) ? $c['chapters'] ?? [] : []) as $ch) {
            foreach ($ch['sections'] ?? [] as $s) {
                if (($s['slug'] ?? null) === $hit[2]) {
                    $m['title'] = $s['title'] . ' — ' . ($c['title'] ?? 'Notes');
                    $m['desc']  = 'Section ' . ($s['number'] ?? '') . ': ' . $s['title']
                                . ' from ' . ($c['title'] ?? '');
                    break 2;
                }
            }
        }
    }

    // Homework course: /homework/<course>
    if (preg_match('#^/homework/([a-z0-9-]+)$#', $path, $hit)) {
        $d = @json_decode((string) @file_get_contents(__DIR__ . "/homework/{$hit[1]}/assignments.json"), true);
        if (is_array($d) && isset($d['title'])) {
            $m['title'] = $d['title'];
            $m['desc']  = 'Problem sets for ' . $d['title'];
        }
    }

    // Homework assignment: /homework/<course>/<assignment>
    if (preg_match('#^/homework/([a-z0-9-]+)/([a-z0-9-]+)$#', $path, $hit)) {
        $d = @json_decode((string) @file_get_contents(__DIR__ . "/homework/{$hit[1]}/assignments.json"), true);
        foreach ((is_array($d) ? $d['assignments'] ?? [] : []) as $a) {
            if (($a['slug'] ?? null) === $hit[2]) {
                $m['title'] = $a['title'] . ' — ' . ($d['title'] ?? '');
                $m['desc']  = $a['title'] . ' for ' . ($d['title'] ?? '');
                break;
            }
        }
    }

    // Portrait card only on the three designated pages; everything else gets a
    // plain text card so blog posts lead with their own title, not a photo.
    if (in_array($path, $portraitPages, true)) {
        $m['image'] = $portrait;
        $m['card']  = 'summary_large_image';
    }

    // Append the site name to sub-page titles that don't already carry it.
    if ($m['title'] !== $site && strpos($m['title'], $site) === false) {
        $m['title'] .= " — $site";
    }

    return $m;
}
