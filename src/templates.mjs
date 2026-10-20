// templates.mjs: the one page layout, plus small shared fragments.
//
// Every page is a three-track grid: a left rail for marginalia (dates,
// section numbers, a page's contents), the text column, and an optional
// right aside (the about-page infobox). The text column sits in the same
// place on every page, so moving between pages never shifts the reading
// edge. See src/site.css for the tracks.

import { escapeHtml as esc } from './markdown.mjs';

export const SITE = {
  name: 'S. D. V. Stephens',
  base: 'https://samuel-stephens.com',
  tagline: 'Neurobioengineering, Mathematical Physics, Philosophy, Cognitive Science',
  github: 'https://github.com/sdvstephens',
  youtube: 'https://youtube.com/@Vichaama',
  giscus: {
    repo: 'sdvstephens/website', repoId: 'R_kgDOQop0kg',
    category: 'General', categoryId: 'DIC_kwDOQop0ks4CzyZd',
  },
  // The same two trackers the single-page site had: Google Analytics, and
  // Open Web Analytics (self-hosted in /analytics on the server). They run
  // only on these hosts, so `npm run dev` and other local previews are never
  // counted.
  analytics: {
    hosts: ['samuel-stephens.com', 'www.samuel-stephens.com'],
    ga: 'G-6MV89TNBW4',
    owa: { base: 'https://samuel-stephens.com/analytics/', siteId: '0b9ed5433ec7e3ae64dd39370d72bf91' },
  },
};

function analyticsTag() {
  const a = SITE.analytics;
  if (!a || (!a.ga && !a.owa)) return '';
  const ga = a.ga ? `window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${a.ga}');`
    + `var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=${a.ga}';document.head.appendChild(g);` : '';
  const owa = a.owa ? `window.owa_baseUrl='${a.owa.base}';window.owa_cmds=window.owa_cmds||[];owa_cmds.push(['setSiteId','${a.owa.siteId}'],['trackPageView'],['trackClicks']);`
    + `var o=document.createElement('script');o.async=true;o.src=owa_baseUrl+'modules/base/dist/owa.tracker.js';document.head.appendChild(o);` : '';
  return `\n<script>(function(){if(${JSON.stringify(a.hosts)}.indexOf(location.hostname)<0)return;${ga}${owa}})();</script>`;
}

// Primary navigation. Homework and Educational move to the footer: both
// are close to empty today (see AUDIT.md), and five items fit one row on a phone.
export const NAV = [
  ['/about', 'about'],
  ['/research', 'research'],
  ['/blog/', 'blog'],
  ['/notes/', 'notes'],
  ['/music', 'music'],
];

export function layout(p, assets) {
  const title = p.title === SITE.name ? SITE.name : `${p.title} — ${SITE.name}`;
  const desc = p.description || SITE.tagline;
  const navItems = NAV.map(([href, label]) => {
    const current = p.section && href.replace(/\/$/, '') === '/' + p.section;
    return `<li><a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a></li>`;
  }).join('');
  const image = p.image ? `
<meta property="og:image" content="${SITE.base}${p.image}">
<meta name="twitter:image" content="${SITE.base}${p.image}">` : '';

  return `<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="author" content="${SITE.name}">
<link rel="canonical" href="${p.canonical}">
<meta property="og:type" content="${p.ogType || 'website'}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${p.canonical}">
<meta name="twitter:card" content="${p.image ? 'summary_large_image' : 'summary'}">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">${image}${p.noindex ? '\n<meta name="robots" content="noindex">' : ''}
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="alternate" type="application/atom+xml" title="${SITE.name}: blog" href="/blog/feed.xml">
<link rel="preload" href="/assets/fonts/ACaslonPro-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/NYIrvin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css?v=${assets.css}">${p.hasMath ? `\n<link rel="stylesheet" href="/assets/math.css?v=${assets.math}">` : ''}
<script>try{var d=document.documentElement,t=localStorage.getItem('theme');if(t)d.dataset.theme=t;if(sessionStorage.getItem('ex')==='1'&&innerWidth>=1300)d.classList.add('ex-open')}catch(e){}</script>
<script src="/assets/site.js?v=${assets.js}" defer></script>${analyticsTag()}
</head>
<body data-path="${esc(p.file || '')}"${p.bodyClass ? ` class="${p.bodyClass}"` : ''}>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead frame">
  <a class="wordmark" href="/"${p.path === '/' ? ' aria-current="page"' : ''}>${SITE.name}</a>
  <nav class="primary" aria-label="Site"><ul>${navItems}</ul></nav>
  <span class="tools"><button class="ex-toggle" type="button" hidden aria-label="File explorer" aria-expanded="false">files</button><button class="theme-toggle" type="button" hidden>light</button></span>
</header>
<div class="page frame${p.layout ? ' layout-' + p.layout : ''}${p.head ? ' has-head' : ''}">
${p.rail ? `<aside class="rail" aria-label="${esc(p.railLabel || 'On this page')}">${p.rail}</aside>\n` : ''}${p.head ? `<header class="page-head">${p.head}</header>\n` : ''}${p.aside ? `<aside class="aside">${p.aside}</aside>\n` : ''}<main id="main" class="main" tabindex="-1">
${p.body}
</main>
</div>
<footer class="colophon frame">
  <ul class="more">
    <li><a href="/homework/">homework</a></li>
    <li><a href="/educational">educational</a></li>
    <li><a href="/sdvscv.pdf">cv (pdf)</a></li>
    <li><a href="${SITE.github}" rel="me">github</a></li>
    <li><a href="${SITE.youtube}" rel="me">youtube</a></li>
    <li><a href="/help">help</a></li>
  </ul>
  <p class="keys">Keyboard: <kbd>:</kbd> commands, <kbd>/</kbd> search, <kbd>?</kbd> help.</p>
</footer>
<div class="modeline" aria-hidden="true">
  <span class="mode">NORMAL</span><span class="file">~/stephens/${esc(p.file || '')}</span>
  <span class="spacer"></span><span>utf-8</span><span class="pos">Top</span>
</div>
</body>
</html>
`;
}

/** Ledger: index values in the rail column, entries in the text column. */
export function ledger(rows, cls = '') {
  return `<ol class="ledger${cls ? ' ' + cls : ''}">${rows.map((r) => `
  <li${r.muted ? ' class="muted"' : ''}><span class="idx">${r.idx || ''}</span><div class="entry">${r.html}</div></li>`).join('')}
</ol>`;
}

export function tagLinks(tags, current = null) {
  return tags.map((t) => {
    const href = `/blog/tags/${tagSlug(t)}`;
    return `<a class="tag" href="${href}"${t === current ? ' aria-current="page"' : ''}>${esc(t)}</a>`;
  }).join(' ');
}
export const tagSlug = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function prevNext(prev, next, { prevLabel = 'Previous', nextLabel = 'Next' } = {}) {
  if (!prev && !next) return '';
  const cell = (item, label, cls) => item
    ? `<a class="${cls}" href="${item.href}" rel="${cls}"><span class="pn-label">${label}</span><span class="pn-title">${item.title}</span></a>`
    : '<span></span>';
  return `<nav class="prev-next" aria-label="${prevLabel} and ${nextLabel.toLowerCase()}">${cell(prev, prevLabel, 'prev')}${cell(next, nextLabel, 'next')}</nav>`;
}
