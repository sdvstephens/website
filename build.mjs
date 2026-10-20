#!/usr/bin/env node
// build.mjs: the content folders (blog/, notes/, homework/, courses/, music/,
// poems/, pages/) + static/ + src/ → dist/, a plain static site.
//
// Every route becomes a real HTML file with its text, title and link-preview
// tags already in it. That replaces index.php, meta.php, seo.php and the
// crawler user-agent rule: there is one version of each page for everyone.
//
// dist/ is updated in place: a file is rewritten only when its bytes change,
// so unchanged files keep their modification time and the FTP sync
// (`lftp mirror --only-newer`) uploads only what actually changed.
//
// Output naming mirrors the live URLs exactly:
//   a route with child pages  → route/index.html   (served as /route/)
//   any other route           → route.html         (served as /route)
// This is the same is-a-directory rule meta.php and generate_sitemap.py use
// for canonical URLs, so links and canonicals do not change.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  renderMarkdown, renderNotes, renderVerse, frontmatter, plainText, escapeHtml as esc,
  mathStyleSheet, mathWarnings, setSource, addHeadingIds, headingsOf,
} from './src/markdown.mjs';
import { layout, ledger, tagLinks, tagSlug, prevNext, SITE, NAV } from './src/templates.mjs';

// `node build.mjs --preview` (what `npm run dev` runs) also builds the pages
// meant only for you: /_audit, /_suggestions, and layout samples such as
// poems/_sample-*.md. A plain `node build.mjs` is the site to deploy.
const PREVIEW = process.argv.includes('--preview');

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const C = (...p) => path.join(ROOT, ...p);
// Build in the system temp folder, then copy changed files into dist/. Building
// inside ~/Documents and renaming folders there makes iCloud Drive leave
// "dist 2", "dist 3"… behind.
const FINAL = path.join(ROOT, 'dist');
const DIST = fs.mkdtempSync(path.join(os.tmpdir(), 'sss-build-'));
const read = (...p) => fs.readFileSync(C(...p), 'utf8');
const readJSON = (...p) => JSON.parse(read(...p));
const exists = (...p) => fs.existsSync(C(...p));
const TODAY = new Date().toISOString().slice(0, 10);
const t0 = Date.now();

const warnings = [];
const warn = (m) => warnings.push(m);

if (!exists('blog', 'posts.json')) {
  console.error(`blog/posts.json not found in ${ROOT}`);
  process.exit(1);
}

const pages = [];
const page = (p) => { pages.push({ inSitemap: true, ...p }); return p; };
const stripLeadingH1 = (html) => html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/, '');
const isStubText = (html) => /^content coming soon\.?$/i.test(plainText(stripLeadingH1(html)));

// =============================================================== blog
const postIndex = exists('blog', 'posts.json') ? readJSON('blog', 'posts.json') : [];
const posts = [];
for (const entry of postIndex) {
  if (!exists('blog', `${entry.slug}.md`)) { warn(`blog/${entry.slug}.md listed in posts.json but missing`); continue; }
  const src = read('blog', `${entry.slug}.md`);
  const fm = frontmatter(src).data;
  if (/^(true|yes|1|on)$/i.test(fm.draft || '')) continue;
  setSource(`blog/${entry.slug}.md`);
  const html = stripLeadingH1(renderMarkdown(src));
  if (!plainText(html)) warn(`blog/${entry.slug}.md has a title but no text (published empty)`);
  posts.push({ ...entry, tags: entry.tags || [], html, href: `/blog/${entry.slug}` });
}
posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
// A .md file that posts.json doesn't list is never shown (the original's
// "live but invisible" case). Say so; scripts/rebuild-posts.py fixes it.
for (const f of fs.readdirSync(C('blog')).filter((f) => f.endsWith('.md'))) {
  if (!postIndex.some((p) => `${p.slug}.md` === f)) warn(`blog/${f} is not in posts.json (run scripts/rebuild-posts.py)`);
}
const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();

function postRows(list) {
  const byYear = new Map();
  for (const p of list) {
    const y = (p.date || '').slice(0, 4) || 'undated';
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y).push(p);
  }
  return [...byYear].map(([year, items]) => `<h2 class="year"><span>${year}</span></h2>\n` + ledger(items.map((p) => ({
    idx: `<time datetime="${p.date}">${(p.date || '').slice(5)}</time>`,
    html: `<a class="entry-title" href="${p.href}">${p.title}</a>` +
      (p.excerpt && p.excerpt.trim().toLowerCase() !== p.title.trim().toLowerCase()
        ? `<p class="excerpt">${p.excerpt}</p>` : ''),
  })))).join('\n');
}
const blogHead = (current) => `<h1 class="display">Blog</h1>
<p class="standfirst">Writings on mathematics, philosophy, and miscellany.</p>
<nav class="tag-list" aria-label="Filter by tag"><a class="tag" href="/blog/"${current ? '' : ' aria-current="page"'}>all</a> ${tagLinks(allTags, current)}</nav>`;

page({
  path: '/blog', file: 'blog/', section: 'blog', layout: 'ledger', title: 'Blog',
  description: 'Writings on mathematics, philosophy, and miscellany.',
  body: `${blogHead(null)}\n${postRows(posts)}`,
});
for (const tag of allTags) {
  page({
    path: `/blog/tags/${tagSlug(tag)}`, file: `blog/tags/${tagSlug(tag)}`, section: 'blog', layout: 'ledger',
    title: `${tag} — Blog`, description: `Blog posts tagged ${tag}.`, noindex: true, inSitemap: false,
    body: `${blogHead(tag)}\n${postRows(posts.filter((p) => p.tags.includes(tag)))}`,
  });
}
posts.forEach((p, i) => {
  const newer = posts[i - 1];
  const older = posts[i + 1];
  page({
    path: p.href, file: `blog/${p.slug}.md`, section: 'blog', title: p.title, ogType: 'article',
    description: p.excerpt || p.title, date: p.date, layout: 'post',
    railLabel: 'Post details',
    rail: `<p class="meta"><time datetime="${p.date}">${p.date}</time></p>
<p class="meta tags">${tagLinks(p.tags)}</p>
<p class="meta back"><a href="/blog/">all posts</a></p>`,
    body: `<article class="post">
<h1 class="post-title">${p.title}</h1>
<div class="prose">${p.html}</div>
</article>
${prevNext(newer && { href: newer.href, title: newer.title }, older && { href: older.href, title: older.title }, { prevLabel: 'Newer', nextLabel: 'Older' })}
<section class="comments" id="comments" aria-labelledby="comments-h">
<h2 id="comments-h">Comments</h2>
<div class="giscus" data-repo="${SITE.giscus.repo}" data-repo-id="${SITE.giscus.repoId}" data-category="${SITE.giscus.category}" data-category-id="${SITE.giscus.categoryId}"></div>
<noscript><p class="muted">Comments are hosted on GitHub Discussions through Giscus and need JavaScript.</p></noscript>
</section>`,
    search: plainText(p.html),
  });
});

// =============================================================== notes
const noteCourses = exists('notes', 'courses.json') ? readJSON('notes', 'courses.json') : [];
const notes = [];
for (const c of noteCourses) {
  const course = exists('notes', c.slug, 'course.json') ? readJSON('notes', c.slug, 'course.json') : { chapters: [] };
  const sections = [];
  for (const ch of course.chapters || []) {
    for (const s of ch.sections || []) {
      const file = `notes/${c.slug}/${s.slug}.md`;
      if (!exists('notes', c.slug, `${s.slug}.md`)) { warn(`${file} listed in course.json but missing`); continue; }
      setSource(file);
      const { html } = renderNotes(read('notes', c.slug, `${s.slug}.md`), { section: s.number });
      const body = stripLeadingH1(html);
      sections.push({ ...s, chapter: ch, file, html: body, stub: isStubText(html), href: `/notes/${c.slug}/${s.slug}` });
    }
  }
  notes.push({ ...c, title: course.title || c.title, chapters: course.chapters || [], sections });
}

function notesTree(course, currentSlug) {
  return `<p class="rail-head"><a href="/notes/${course.slug}/">${course.title}</a></p>
<ol class="toc-tree">${course.chapters.map((ch) => `
  <li><span class="toc-ch"><span class="num">${ch.number}</span> ${ch.title}</span>
    <ol>${course.sections.filter((s) => s.chapter === ch).map((s) => {
      const label = `<span class="num">${s.number}</span> ${s.title}`;
      if (s.slug === currentSlug) return `<li><a href="${s.href}" aria-current="page">${label}</a></li>`;
      if (s.stub) return `<li class="stub"><span title="Content coming soon">${label}</span></li>`;
      return `<li><a href="${s.href}">${label}</a></li>`;
    }).join('')}</ol>
  </li>`).join('')}
</ol>`;
}

const written = (n) => n.sections.filter((s) => !s.stub).length;
const activeCourses = notes.filter((n) => n.sections.length);
const plannedCourses = notes.filter((n) => !n.sections.length);
page({
  path: '/notes', file: 'notes/', section: 'notes', layout: 'ledger', title: 'Lecture Notes',
  description: 'Mathematics and science lecture notes.',
  body: `<h1 class="display">Lecture Notes</h1>
<p class="standfirst">Mathematics and science lecture notes, inspired by Paul's Online Notes.</p>
${ledger(activeCourses.map((n) => ({
    idx: `<span title="${written(n)} of ${n.sections.length} sections written">${written(n)}/${n.sections.length}</span>`,
    html: `<a class="entry-title" href="/notes/${n.slug}/">${n.title}</a><p class="excerpt">${n.description || ''}</p>`,
  })))}
${plannedCourses.length ? `<h2 class="group">Planned</h2>
${ledger(plannedCourses.map((n) => ({ muted: true, html: `<a class="entry-title" href="/notes/${n.slug}">${n.title}</a><p class="excerpt">${n.description || ''}</p>` })))}` : ''}`,
});

for (const n of notes) {
  page({
    path: `/notes/${n.slug}`, file: `notes/${n.slug}/`, section: 'notes', layout: 'ledger',
    title: `${n.title} — Notes`, description: `Lecture notes for ${n.title}`,
    noindex: !n.sections.length, inSitemap: n.sections.length > 0,
    body: `<p class="crumbs"><a href="/notes/">notes</a> /</p>
<h1 class="display">${n.title}</h1>
${n.description ? `<p class="standfirst">${n.description}</p>` : ''}
${n.sections.length ? `<p class="count">${written(n)} of ${n.sections.length} sections written</p>` : '<p>Notes coming soon.</p>'}
${n.chapters.map((ch) => `<h2 class="chapter"><span class="idx">${ch.number}</span>${ch.title}</h2>
${ledger(n.sections.filter((s) => s.chapter === ch).map((s) => ({
    idx: s.number, muted: s.stub,
    html: s.stub ? `<span class="entry-title">${s.title}</span>` : `<a class="entry-title" href="${s.href}">${s.title}</a>`,
  })))}`).join('\n')}`,
  });

  // Previous/next skip unwritten sections, so reading never lands on a stub.
  for (const s of n.sections) {
    const at = n.sections.indexOf(s);
    const before = n.sections.slice(0, at).filter((x) => !x.stub).at(-1);
    const after = n.sections.slice(at + 1).find((x) => !x.stub);
    page({
      path: s.href, file: s.file, section: 'notes', layout: 'notes',
      title: `${s.title} — ${n.title}`, description: `Section ${s.number}: ${s.title} from ${n.title}`,
      noindex: s.stub, inSitemap: !s.stub, railLabel: `${n.title} contents`,
      rail: notesTree(n, s.slug),
      body: `<p class="crumbs"><a href="/notes/">notes</a> / <a href="/notes/${n.slug}/">${n.title}</a> / chapter ${s.chapter.number}: ${s.chapter.title}</p>
<article class="note">
<h1 class="note-title"><span class="num">${s.number}</span> ${s.title}</h1>
<div class="prose">${s.html}</div>
</article>
${prevNext(before && { href: before.href, title: `${before.number} ${before.title}` }, after && { href: after.href, title: `${after.number} ${after.title}` })}`,
      search: s.stub ? '' : plainText(s.html),
      headings: headingsOf(s.html),
    });
  }
}

// =============================================================== homework
const hwCourses = exists('homework', 'courses.json') ? readJSON('homework', 'courses.json') : [];
const hw = hwCourses.map((c) => ({
  ...c,
  data: exists('homework', c.slug, 'assignments.json') ? readJSON('homework', c.slug, 'assignments.json') : { title: c.title, assignments: [] },
}));
page({
  path: '/homework', file: 'homework/', section: 'homework', layout: 'ledger', title: 'Homework',
  description: 'Problem sets and solutions for mathematics courses.',
  body: `<h1 class="display">Homework</h1>
<p class="standfirst">Problem sets, essays, and other coursework.</p>
${ledger(hw.map((c) => ({
    idx: `${c.data.assignments.length}`, muted: !c.data.assignments.length,
    html: `<a class="entry-title" href="/homework/${c.slug}">${c.title}</a><p class="excerpt">${c.description}</p>
<p class="count">${c.type === 'essays' ? 'essays' : 'problem sets'}</p>`,
  })))}`,
});
for (const c of hw) {
  const list = c.data.assignments;
  const dl = (a) => {
    const f = a.files || {};
    return [f.pdf && `<a href="/homework/${c.slug}/${f.pdf}">pdf</a>`, f.tex && `<a href="/homework/${c.slug}/${f.tex}">tex</a>`].filter(Boolean).join(' ') || '';
  };
  page({
    path: `/homework/${c.slug}`, file: `homework/${c.slug}/`, section: 'homework', layout: 'ledger',
    title: c.data.title || c.title, description: `Problem sets for ${c.data.title || c.title}`,
    noindex: !list.length, inSitemap: list.length > 0,
    body: `<p class="crumbs"><a href="/homework/">homework</a> /</p>
<h1 class="display">${c.data.title || c.title}</h1>
${list.length ? ledger(list.map((a) => ({
      idx: a.date || '',
      html: (a.hasWriteup ? `<a class="entry-title" href="/homework/${c.slug}/${a.slug}">${a.title}</a>` : `<span class="entry-title">${a.title}</span>`) +
        (dl(a) ? `<p class="count">${dl(a)}</p>` : ''),
    }))) : '<p>No assignments yet.</p>'}`,
  });
  list.forEach((a, i) => {
    if (!a.hasWriteup || !exists('homework', c.slug, `${a.slug}.md`)) return;
    setSource(`homework/${c.slug}/${a.slug}.md`);
    const { html } = renderNotes(read('homework', c.slug, `${a.slug}.md`));
    const prev = list.slice(0, i).filter((x) => x.hasWriteup).at(-1);
    const next = list.slice(i + 1).find((x) => x.hasWriteup);
    page({
      path: `/homework/${c.slug}/${a.slug}`, file: `homework/${c.slug}/${a.slug}.md`, section: 'homework',
      title: `${a.title} — ${c.data.title}`, description: `${a.title} for ${c.data.title}`,
      body: `<p class="crumbs"><a href="/homework/">homework</a> / <a href="/homework/${c.slug}/">${c.data.title}</a></p>
<article class="note"><h1 class="note-title">${a.title}</h1>${dl(a) ? `<p class="count">${dl(a)}</p>` : ''}
<div class="prose">${stripLeadingH1(html)}</div></article>
${prevNext(prev && { href: `/homework/${c.slug}/${prev.slug}`, title: prev.title }, next && { href: `/homework/${c.slug}/${next.slug}`, title: next.title })}`,
      search: plainText(html),
    });
  });
}

// =============================================================== educational
const edu = exists('courses', 'courses.json') ? readJSON('courses', 'courses.json') : { departments: [] };
const courseId = (n) => 'course-' + n.replace(/\./g, '-');
page({
  path: '/educational', file: 'educational/', section: 'educational', layout: 'ledger', title: 'Educational',
  description: 'Mathematics lectures, notes, and problem sets.',
  body: `<h1 class="display">Educational Content</h1>
<p class="standfirst">Mathematics lectures, notes, and problem sets. Course numbering inspired by MIT.</p>
<p>Video content on <a href="${SITE.youtube}">YouTube (@Vichaama)</a>.</p>
${edu.departments.map((d) => `<h2 class="chapter"><span class="idx">${d.code}</span>${d.name}</h2>
${ledger(d.courses.map((c) => ({
    idx: `<span id="${courseId(c.number)}">${c.number}</span>`, muted: c.status !== 'active',
    html: `<span class="entry-title">${c.title}</span> <span class="status status-${c.status}">${c.status}</span>
<p class="excerpt">${c.description}</p>${c.materials.length ? `<ul class="materials">${c.materials.map((m) =>
      `<li><a href="${m.url}">${m.title}</a> <span class="count">${m.type}</span></li>`).join('')}</ul>` : ''}`,
  })))}`).join('\n')}`,
});

// =============================================================== music
const music = exists('music', 'music.json') ? readJSON('music', 'music.json') : { sections: [] };
const PLACEHOLDER = /^(placeholder|example\b)/i;
const SAMPLE_NOTES = new Set(['placeholder', 'one or two sentences on what the piece is doing.', 'performer, venue, occasion.']);
const localOk = (u) => !u || !u.startsWith('/') || fs.existsSync(C(u.replace(/^\/+/, ''))) || fs.existsSync(path.join(ROOT, 'static', u));
const musicSections = [];
for (const sec of music.sections || []) {
  const items = [];
  for (const it of sec.items || []) {
    const name = it.title || it.name || '';
    if (PLACEHOLDER.test(name)) { warn(`music.json: skipped placeholder item "${name}" in ${sec.title}`); continue; }
    const item = { ...it };
    if (item.note && SAMPLE_NOTES.has(item.note.trim().toLowerCase())) { warn(`music.json: dropped sample note on "${name}"`); delete item.note; }
    for (const k of ['score', 'audio']) {
      if (item[k] && !localOk(item[k])) { warn(`music.json: "${name}" ${k} ${item[k]} does not exist; link omitted`); delete item[k]; }
      if (item[k] && /example\.com/.test(item[k])) delete item[k];
    }
    items.push(item);
  }
  if (items.length) musicSections.push({ title: sec.title, items });
}
page({
  path: '/music', file: 'music.md', section: 'music', layout: 'ledger', title: 'Music',
  description: 'Original work, arrangements, and the pieces I keep returning to.',
  body: `<h1 class="display">Music</h1>
${music.intro ? `<p class="standfirst">${music.intro}</p>` : ''}
${musicSections.map((s) => `<h2 class="group">${s.title}</h2>
${ledger(s.items.map((it) => {
    const name = it.title || it.name;
    const meta = [it.instrumentation, it.duration].filter(Boolean).join(', ');
    const local = it.audio && it.audio.startsWith('/');
    const links = [it.score && `<a href="${it.score}">score</a>`, it.audio && !local && `<a href="${it.audio}">listen</a>`].filter(Boolean).join(' ');
    return {
      idx: it.year || '',
      html: `<span class="entry-title work">${name}</span>${it.composer ? ` <span class="by">${it.composer}</span>` : ''}
${meta ? `<p class="count">${meta}</p>` : ''}${it.note ? `<p class="excerpt">${it.note}</p>` : ''}${links ? `<p class="count">${links}</p>` : ''}${local ? `<audio controls preload="none" src="${it.audio}"></audio>` : ''}`,
    };
  }))}`).join('\n')}`,
});

// =============================================================== poems
// poems/<slug>.md, one poem per file. See poems/README.md.
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function longDate(d) {
  const m = String(d || '').match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
  if (!m) return String(d || '');
  return [m[3] ? +m[3] : '', m[2] ? MONTHS[+m[2] - 1] : '', m[1]].filter(Boolean).join(' ');
}
const poems = [];
if (exists('poems')) {
  for (const f of fs.readdirSync(C('poems')).filter((f) => f.endsWith('.md') && f !== 'README.md').sort()) {
    const sample = f.startsWith('_');
    if (sample && !PREVIEW) continue;
    setSource(`poems/${f}`);
    const v = renderVerse(read('poems', f));
    const d = v.data;
    if (/^(true|yes|1|on)$/i.test(d.draft || '')) continue;
    if (!v.lines) { warn(`poems/${f} has no lines`); continue; }
    const slug = f.replace(/\.md$/, '');
    poems.push({
      slug, sample, file: `poems/${f}`, href: `/poems/${slug}`,
      title: d.title || v.firstLine, written: d.written || '', year: String(d.written || '').slice(0, 4),
      place: d.place || '', epigraph: d.epigraph || '', epigraphSource: d['epigraph-source'] || '',
      dedication: d.dedication || '', collection: d.collection || '', author: d.author || '',
      order: d.order !== undefined && d.order !== '' ? +d.order : null,
      html: v.html, lines: v.lines, firstLine: v.firstLine,
    });
  }
}
// Your own order when you give one (`order: 1`, `order: 2`…), newest first otherwise.
poems.sort((a, b) => (a.order ?? 1e9) - (b.order ?? 1e9) || b.written.localeCompare(a.written) || a.title.localeCompare(b.title));
const published = poems.filter((p) => !p.sample);

if (poems.length) {
  NAV.splice(NAV.findIndex(([h]) => h === '/blog/') + 1, 0, ['/poems/', 'poems']);
  const groups = [];
  for (const p of poems) {
    let g = groups.find((x) => x.name === p.collection);
    if (!g) groups.push(g = { name: p.collection, items: [] });
    g.items.push(p);
  }
  const row = (p) => ({
    idx: p.year,
    muted: p.sample,
    html: `<a class="entry-title" href="${p.href}">${p.title}</a>${p.sample ? ' <span class="status">layout sample</span>' : ''}`
      + (p.firstLine && p.firstLine.toLowerCase() !== plainText(p.title).toLowerCase() ? `<p class="excerpt">${esc(p.firstLine)}</p>` : ''),
  });
  const firstLines = [...poems].sort((a, b) => a.firstLine.localeCompare(b.firstLine));
  page({
    path: '/poems', file: 'poems/', section: 'poems', layout: 'ledger', title: 'Poems',
    description: 'Poems by S. D. V. Stephens.', noindex: !published.length, inSitemap: published.length > 0,
    body: `<h1 class="display">Poems</h1>
${groups.map((g) => (g.name ? `<h2 class="group">${g.name}</h2>\n` : '') + ledger(g.items.map(row))).join('\n')}
${poems.length >= 2 ? `<h2 class="group">Index of first lines</h2>
<ul class="first-lines">${firstLines.map((p) => `<li><a href="${p.href}">${esc(p.firstLine)}</a></li>`).join('')}</ul>` : ''}`,
  });
  poems.forEach((p, i) => {
    const prev = poems[i - 1];
    const next = poems[i + 1];
    const when = [p.place, longDate(p.written)].filter(Boolean).join(', ');
    page({
      path: p.href, file: p.file, section: 'poems', layout: 'poem', title: p.title, ogType: 'article',
      description: p.firstLine, date: /^\d{4}-\d{2}-\d{2}$/.test(p.written) ? p.written : undefined,
      noindex: p.sample, inSitemap: !p.sample,
      body: `${p.sample ? `<p class="sample-note">Layout sample: a public-domain poem by ${esc(p.author || 'another poet')}, shown so you can see how a poem is set. It appears only in preview builds; delete <code>${p.file}</code> to remove it.</p>\n` : ''}<p class="crumbs"><a href="/poems/">poems</a> /${p.collection ? ` ${esc(p.collection)}` : ''}</p>
<article class="poem">
<h1 class="poem-title">${p.title}</h1>
${p.sample && p.author ? `<p class="poem-author">${esc(p.author)}</p>` : ''}${p.dedication ? `<p class="dedication">${p.dedication}</p>` : ''}${p.epigraph ? `<blockquote class="epigraph"><p>${p.epigraph}</p>${p.epigraphSource ? `<footer>—${p.epigraphSource}</footer>` : ''}</blockquote>` : ''}
<div class="verse">
${p.html}
</div>
${when ? `<p class="poem-date">${when}</p>` : ''}
</article>
${prevNext(prev && { href: prev.href, title: prev.title }, next && { href: next.href, title: next.title })}`,
      search: plainText(p.html),
    });
  });
}

// =============================================================== hand-written pages
function extractDiv(html, opening) {
  const start = html.indexOf(opening);
  if (start < 0) return [null, html];
  const re = /<\/?div\b[^>]*>/g;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[0][1] === '/' ? -1 : 1;
    if (depth === 0) {
      const end = m.index + m[0].length;
      return [html.slice(start, end), html.slice(0, start) + html.slice(end)];
    }
  }
  return [null, html];
}
// Infobox from pages/about-infobox.json: a header, the portrait, then
// groups of label/value rows, like a Wikipedia infobox.
function infoboxHtml(box) {
  const img = box.image && box.image.src === '/sdvs.jpg'
    ? `<img src="/img/sdvs-480.jpg" srcset="/img/sdvs-480.jpg 480w, /img/sdvs-960.jpg 960w" sizes="(max-width: 640px) 90vw, 18rem" width="480" height="480" alt="${esc(box.image.alt || '')}">`
    : box.image ? `<img src="${box.image.src}" alt="${esc(box.image.alt || '')}">` : '';
  const value = (v) => Array.isArray(v) ? `<ul>${v.map((x) => `<li>${x}</li>`).join('')}</ul>` : v;
  return `<section class="infobox" aria-label="Summary">
<header class="ib-head"><p class="ib-title">${box.title}</p>${box.subtitle ? `<p class="ib-sub">${box.subtitle}</p>` : ''}</header>
${img ? `<figure class="ib-figure">${img}${box.image.caption ? `<figcaption>${box.image.caption}</figcaption>` : ''}</figure>` : ''}
<div class="ib-body">${box.sections.map((s) => `
${s.heading ? `<h3 class="ib-heading">${s.heading}</h3>` : ''}<dl class="ib-group">${s.rows.map((r) => `
  <div class="ib-row${r.muted ? ' is-muted' : ''}"><dt>${r.label}</dt><dd>${value(r.value)}</dd></div>`).join('')}
</dl>`).join('')}
</div>
</section>`;
}

const tidyLinks = (h) => h
  .replace(/<a href="#" class="category-tag">([^<]*)<\/a>/g, '<span class="category-tag">$1</span>')
  .replace(/target="_blank"(?! rel)/g, 'target="_blank" rel="noopener"');

{
  let about = tidyLinks(read('pages', 'about.html'));
  let infobox, toc;
  [infobox, about] = extractDiv(about, '<div class="infobox');
  [toc, about] = extractDiv(about, '<div class="toc">');
  if (exists('pages', 'about-infobox.json')) infobox = infoboxHtml(readJSON('pages', 'about-infobox.json'));
  else if (infobox) {
    infobox = infobox.replace(/<img src="\/sdvs\.jpg"([^>]*)>/,
      '<img src="/img/sdvs-480.jpg" srcset="/img/sdvs-480.jpg 480w, /img/sdvs-960.jpg 960w" sizes="15rem" width="480" height="480"$1>');
  }
  if (toc) toc = toc.replace(/<div class="toc-title">([^<]*)<\/div>/, '<p class="rail-head">$1</p>');
  // The name heading goes above the infobox on narrow screens, so it is lifted
  // out of the body into the page head.
  const h1 = about.match(/^\s*<h1>([\s\S]*?)<\/h1>/);
  if (h1) about = about.slice(h1[0].length);
  page({
    path: '/about', file: 'about.md', section: 'about', layout: 'about', title: 'About', image: '/img/sdvs-1200.jpg',
    description: 'Researcher and mathematician working in neurobioengineering, mathematical physics, and philosophy.',
    railLabel: 'Contents', rail: toc || '', aside: infobox || '',
    head: h1 ? `<h1 class="display">${h1[1]}</h1>` : '',
    body: `<div class="prose">${addHeadingIds(about)}</div>`,
  });
}
page({
  path: '/research', file: 'research.tex', section: 'research', title: 'Research',
  description: 'CICADAS framework for causal inference in critical care, polyadic algebraic structures, and more.',
  body: `<div class="prose">${read('pages', 'research.html').replace(/^\s*<h1>/, '<h1 class="display">')}</div>`,
});
page({
  path: '/help', file: 'help.txt', title: 'Help', description: 'Keyboard commands for this site.', inSitemap: false,
  body: `<div class="prose help">${read('pages', 'help.html').replace(/^\s*<h1>/, '<h1 class="display">')}</div>`,
});

// Home: the hand-written welcome, then a contents page and the latest posts.
{
  const homeHtml = read('pages', 'home.html').replace(/^\s*<h1>/, '<h1 class="display home-name">');
  const contents = [
    ['/about', 'About', 'about.md'],
    ['/research', 'Research', 'research.tex'],
    ['/blog/', 'Blog', 'blog/'],
    ...(poems.length ? [['/poems/', 'Poems', 'poems/']] : []),
    ['/notes/', 'Notes', 'notes/'],
    ['/music', 'Music', 'music.md'],
    ['/homework/', 'Homework', 'homework/'],
    ['/educational', 'Educational', 'educational/'],
  ];
  page({
    path: '/', file: 'home', title: SITE.name, image: '/img/sdvs-1200.jpg', layout: 'home', bodyClass: 'home',
    description: SITE.tagline,
    body: `<div class="prose">${homeHtml}</div>
<section class="contents" aria-labelledby="contents-h">
<h2 id="contents-h">Contents</h2>
<ol class="leaders">${contents.map(([href, label, file]) => `
  <li><a href="${href}"><span class="label">${label}</span><span class="dots" aria-hidden="true"></span><span class="file is-${file.endsWith('/') ? 'dir' : file.split('.').pop()}">${file}</span></a></li>`).join('')}
</ol>
</section>
<section class="recent" aria-labelledby="recent-h">
<h2 id="recent-h">Recent posts</h2>
${ledger(posts.slice(0, 5).map((p) => ({ idx: `<time datetime="${p.date}">${p.date}</time>`, html: `<a class="entry-title" href="${p.href}">${p.title}</a>` })))}
</section>`,
  });
}

// The audit renders inside the preview so it can be read next to the pages it
// describes. Not in the sitemap, not linked from the site.
for (const [file, route, title] of [['AUDIT.md', '/_audit', 'Site audit'], ['SUGGESTIONS.md', '/_suggestions', 'Suggestions']]) {
  if (!PREVIEW || !fs.existsSync(path.join(ROOT, file))) continue;
  setSource(file);
  const html = renderMarkdown(fs.readFileSync(path.join(ROOT, file), 'utf8'));
  page({
    path: route, file, title, noindex: true, inSitemap: false, layout: 'audit',
    // Caslon, not Irvin: Irvin's hyphen is a swung dash, wrong in a domain name.
    body: `<div class="prose audit">${html.replace(/^\s*<h1/, '<h1 class="post-title"')}</div>`,
  });
}

// =============================================================== output paths
const routes = new Set(pages.map((p) => p.path));
const isDir = (r) => r === '/' || [...routes].some((x) => x !== r && x.startsWith(r + '/'));
for (const p of pages) {
  p.dir = isDir(p.path);
  p.out = p.path === '/' ? 'index.html' : p.dir ? `${p.path.slice(1)}/index.html` : `${p.path.slice(1)}.html`;
  p.url = p.path === '/' ? '/' : p.dir ? p.path + '/' : p.path;
  p.canonical = SITE.base + p.url;
  p.hasMath = p.body.includes('<mjx-container');
}

// Every internal href must resolve to a page or a file. Checked here so a
// broken link fails loudly at build time instead of becoming a soft 404.
const staticFiles = new Set();
const walk = (dir, base = '') => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(dir, e.name), `${base}/${e.name}`);
    else staticFiles.add(`${base}/${e.name}`);
  }
};
walk(path.join(ROOT, 'static'));
for (const sub of ['notes', 'homework', 'music']) walk(C(sub), `/${sub}`);
const known = new Set(pages.flatMap((p) => [p.path, p.url]));
for (const p of pages) {
  for (const [, href] of p.body.matchAll(/href="(\/[^"#?]*)/g)) {
    const h = href.length > 1 ? href.replace(/\/$/, '') || '/' : href;
    if (!known.has(h) && !known.has(href) && !staticFiles.has(href) && !href.startsWith('/img/') && !href.startsWith('/assets/')) {
      warn(`${p.path}: link to ${href} has no page or file`);
    }
  }
}

// =============================================================== assets
const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 8);
const write = (rel, data) => {
  const f = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
};
const copyDir = (from, to) => {
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, path.join(DIST, to), { recursive: true, filter: (s) => !s.endsWith('.DS_Store') });
};

const css = fs.readFileSync(path.join(ROOT, 'src', 'site.css'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'src', 'site.js'), 'utf8');
const mathCss = mathStyleSheet() + '\n' + fs.readFileSync(path.join(ROOT, 'src', 'math.css'), 'utf8');
const assets = { css: hash(css), js: hash(js), math: hash(mathCss) };
write('assets/site.css', css);
write('assets/site.js', js);
write('assets/math.css', mathCss);
copyDir(path.join(ROOT, 'node_modules', 'mathjax-full', 'es5', 'output', 'chtml', 'fonts', 'woff-v2'), 'assets/mathjax/woff-v2');
for (const w of [400, 600]) {
  const f = path.join(ROOT, 'node_modules', '@fontsource', 'jetbrains-mono', 'files', `jetbrains-mono-latin-${w}-normal.woff2`);
  if (fs.existsSync(f)) fs.copyFileSync(f, path.join(DIST, 'assets', `jetbrains-mono-${w}.woff2`));
}
copyDir(path.join(ROOT, 'static'), '.');
if (!fs.existsSync(path.join(DIST, 'assets', 'fonts', 'ACaslonPro-Regular.woff2'))) {
  warn('Adobe Caslon Pro woff2 files missing from static/assets/fonts (they are gitignored in the original); pages fall back to Iowan/Palatino/Georgia');
}

// Figures and downloads that sit next to the Markdown sources.
for (const sub of ['notes', 'homework', 'music']) {
  fs.cpSync(C(sub), path.join(DIST, sub), {
    recursive: true,
    filter: (s) => fs.statSync(s).isDirectory() || !/\.(md|json)$|\.DS_Store$/.test(s),
  });
}

// Portrait: the original is 1688 px and 1 MB, shown at 200 px. Resize once.
const imgCache = path.join(ROOT, '.cache', 'img');
fs.mkdirSync(imgCache, { recursive: true });
for (const w of [480, 960, 1200]) {
  const out = path.join(imgCache, `sdvs-${w}.jpg`);
  const src = path.join(ROOT, 'static', 'sdvs.jpg');
  if (!fs.existsSync(src)) break;
  if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs) {
    try {
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', '-Z', String(w), src, '--out', out], { stdio: 'ignore' });
    } catch {
      fs.copyFileSync(src, out);
      warn('sips not available; portrait copied at full size');
    }
  }
}
copyDir(imgCache, 'img');

// =============================================================== pages
for (const p of pages) write(p.out, layout(p, assets));

write('404.html', layout({
  path: '/404', file: '404', title: 'Not found', noindex: true, canonical: SITE.base + '/404',
  body: `<div class="prose"><h1 class="display">404</h1>
<p>No file at <code class="missing-path">this address</code>.</p>
<p><a href="/">Return home</a>, or press <kbd>/</kbd> to search.</p></div>`,
}, assets));

// =============================================================== indexes
const sitemap = pages.filter((p) => p.inSitemap && !p.noindex);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((p) => `  <url><loc>${p.canonical}</loc><lastmod>${p.date || TODAY}</lastmod></url>`).join('\n')}
</urlset>
`);

const updated = posts[0]?.date || TODAY;
write('blog/feed.xml', `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE.name}: blog</title>
  <link href="${SITE.base}/blog/feed.xml" rel="self"/>
  <link href="${SITE.base}/blog/"/>
  <id>${SITE.base}/blog/</id>
  <updated>${updated}T00:00:00Z</updated>
  <author><name>${SITE.name}</name></author>
${posts.map((p) => `  <entry>
    <title>${esc(p.title)}</title>
    <link href="${SITE.base}${p.href}"/>
    <id>${SITE.base}${p.href}</id>
    <updated>${p.date}T00:00:00Z</updated>
    ${p.excerpt ? `<summary>${esc(p.excerpt)}</summary>` : ''}
    <content type="html">${esc(p.html.replace(/<mjx-container[\s\S]*?<\/mjx-container>/g, '[math]'))}</content>
${p.tags.map((t) => `    <category term="${esc(t)}"/>`).join('\n')}
  </entry>`).join('\n')}
</feed>
`);

// Search: titles, headings and a text excerpt per page, fetched on first `/`.
const kind = (p) => p.path.startsWith('/blog/') ? 'blog' : p.path.startsWith('/poems/') ? 'poem' : p.path.startsWith('/notes/') ? 'notes' : p.path.startsWith('/homework/') ? 'homework' : 'page';
write('search.json', JSON.stringify(pages
  .filter((p) => !p.noindex || p.path === '/help')
  .filter((p) => !p.path.startsWith('/blog/tags/') && p.path !== '/_audit')
  .map((p) => ({
    t: p.title, u: p.url, k: kind(p), d: p.date || undefined,
    h: (p.headings || headingsOf(p.body)).map((h) => h.text).slice(0, 30),
    x: (p.search ?? plainText(p.body)).slice(0, 220),
  }))));

// Explorer tree (Space e), the same layout as the live site's file explorer.
const tree = [
  { n: 'home', u: '/' },
  { n: 'about.md', u: '/about' },
  { n: 'research.tex', u: '/research' },
  { n: 'blog/', u: '/blog/', c: posts.map((p) => ({ n: `${p.slug}.md`, u: p.href })) },
  ...(poems.length ? [{ n: 'poems/', u: '/poems/', c: poems.map((p) => ({ n: `${p.slug}.md`, u: p.href, m: p.sample ? 1 : undefined })) }] : []),
  { n: 'music.md', u: '/music' },
  { n: 'notes/', u: '/notes/', c: notes.map((n) => ({
    n: `${n.slug}/`, u: n.sections.length ? `/notes/${n.slug}/` : `/notes/${n.slug}`, m: n.sections.length ? undefined : 1,
    c: n.chapters.map((ch) => ({ n: `ch${ch.number}/`, c: n.sections.filter((s) => s.chapter === ch).map((s) => ({ n: `${s.slug}.md`, u: s.href, m: s.stub ? 1 : undefined })) })),
  })) },
  { n: 'homework/', u: '/homework/', c: hw.map((c) => ({ n: `${c.slug}/`, u: `/homework/${c.slug}`, m: c.data.assignments.length ? undefined : 1, c: [] })) },
  { n: 'educational/', u: '/educational', c: edu.departments.flatMap((d) => d.courses.map((c) => ({ n: `${c.number}.tex`, u: `/educational#${courseId(c.number)}`, m: c.status === 'active' ? undefined : 1 }))) },
  { n: 'help.txt', u: '/help' },
];
write('tree.json', JSON.stringify(tree));

// =============================================================== dist/
// Copy what changed from the temp build into dist/, leave identical files
// untouched (their mtimes are what the FTP sync compares), and remove files
// that are no longer produced.
const listFiles = (dir, base = '') => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const rel = base ? `${base}/${e.name}` : e.name;
    return e.isDirectory() ? listFiles(path.join(dir, e.name), rel) : [rel];
  });
};
const built = listFiles(DIST);
const keep = new Set(built);
let changed = 0;
for (const rel of built) {
  const from = path.join(DIST, rel);
  const to = path.join(FINAL, rel);
  const next = fs.readFileSync(from);
  if (fs.existsSync(to) && fs.statSync(to).size === next.length && fs.readFileSync(to).equals(next)) continue;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, next);
  changed++;
}
let removed = 0;
for (const rel of listFiles(FINAL)) {
  if (!keep.has(rel)) { fs.rmSync(path.join(FINAL, rel)); removed++; }
}
// Drop folders left empty by removals.
const pruneEmpty = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      const sub = path.join(dir, e.name);
      pruneEmpty(sub);
      if (!fs.readdirSync(sub).length) fs.rmdirSync(sub);
    }
  }
};
if (fs.existsSync(FINAL)) pruneEmpty(FINAL);
fs.rmSync(DIST, { recursive: true, force: true });

// =============================================================== report
const unique = [...new Set([...warnings, ...mathWarnings])];
console.log(`built ${pages.length + 1} pages into dist/ in ${Date.now() - t0} ms${PREVIEW ? ' (preview: includes /_audit, /_suggestions and samples)' : ''}; ${changed} files changed, ${removed} removed`);
console.log(`  ${posts.length} posts, ${published.length} poems, ${notes.reduce((a, n) => a + written(n), 0)} written note sections, ${pages.filter((p) => p.hasMath).length} pages with math`);
if (unique.length) {
  console.log(`  ${unique.length} content warning${unique.length > 1 ? 's' : ''}:`);
  for (const w of unique) console.log(`  ! ${w}`);
}
