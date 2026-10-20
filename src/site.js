// site.js: the keyboard layer. Every page works without it; this adds the
// Neovim conventions from the live site on top of ordinary links.
//
//   j / k        scroll            gg / G       top / bottom
//   [ / ]        previous / next page in a sequence (posts, note sections)
//   /            search every page (titles, headings, text)
//   :            command line (:help lists commands)
//   Space        leader menu (which-key style): e explorer, g goto, y yank, o open, …
//   ?            help page          Esc          close whatever is open
(() => {
  'use strict';
  const doc = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduce ? 'auto' : 'smooth';
  const EMAIL = 'samuelstephens2004@gmail.com';
  const session = {
    get: (k) => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) { /* private mode */ } },
    del: (k) => { try { sessionStorage.removeItem(k); } catch (e) { /* private mode */ } },
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const focusPage = () => $('#main')?.focus({ preventScroll: true });

  // ------------------------------------------------------------ theme
  const toggle = $('.theme-toggle');
  const theme = () => doc.dataset.theme || 'dark';
  function setTheme(t) {
    doc.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch (e) { /* private mode */ }
    if (toggle) {
      toggle.textContent = t === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} theme`);
    }
    const frame = $('iframe.giscus-frame');
    if (frame) frame.contentWindow.postMessage({ giscus: { setConfig: { theme: `gruvbox_${t}` } } }, 'https://giscus.app');
  }
  const toggleTheme = () => setTheme(theme() === 'dark' ? 'light' : 'dark');
  if (toggle) {
    toggle.hidden = false;
    setTheme(theme());
    toggle.addEventListener('click', toggleTheme);
  }

  // ------------------------------------------------------------ modeline
  const modeEl = $('.modeline .mode');
  const posEl = $('.modeline .pos');
  function setMode(m) {
    if (!modeEl) return;
    modeEl.textContent = m;
    modeEl.className = 'mode ' + m.toLowerCase();
  }
  function updatePos() {
    if (!posEl) return;
    const max = doc.scrollHeight - innerHeight;
    const y = scrollY;
    posEl.textContent = max <= 4 ? 'All' : y <= 4 ? 'Top' : y >= max - 4 ? 'Bot' : Math.round((y / max) * 100) + '%';
  }
  addEventListener('scroll', updatePos, { passive: true });
  addEventListener('resize', updatePos);
  updatePos();

  // ------------------------------------------------------------ toast, clipboard
  let toastTimer;
  function toast(msg) {
    let el = $('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.append(el);
    }
    el.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.remove(), 3000);
  }
  function copy(text, done) {
    if (!navigator.clipboard) { toast(text); return; }
    navigator.clipboard.writeText(text).then(() => toast(done), () => toast(text));
  }
  const pageUrl = () => $('link[rel="canonical"]')?.href || location.href;
  function sectionNow() {
    let current = null;
    for (const h of document.querySelectorAll('.main h2[id], .main h3[id]')) {
      if (h.getBoundingClientRect().top < 140) current = h; else break;
    }
    return current;
  }

  // ------------------------------------------------------------ navigation helpers
  const go = (u) => () => { location.href = u; };
  const open = (u) => () => window.open(u, '_blank', 'noopener');
  const pageDown = () => scrollBy({ top: innerHeight * 0.85, behavior });
  const zen = () => { doc.classList.toggle('zen'); toast(doc.classList.contains('zen') ? 'Zen mode on, :zen or Esc to exit' : 'Zen mode off'); };
  function latest() {
    loadIndex().then((idx) => {
      const post = idx.filter((p) => p.k === 'blog' && p.d).sort((a, b) => b.d.localeCompare(a.d))[0];
      if (post) location.href = post.u; else toast('No blog posts yet');
    });
  }
  function quit() {
    window.close();
    setTimeout(() => toast('E37: this tab was not opened by the site, so it cannot close itself'), 120);
  }

  // ------------------------------------------------------------ palette (shared by : and /)
  let palette = null;
  function closePalette() {
    if (!palette) return;
    palette.el.remove();
    palette.restore?.focus?.();
    palette = null;
    setMode('NORMAL');
  }
  function openPalette(kind) {
    closePalette();
    closeLeader();
    const el = document.createElement('div');
    el.className = 'palette';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', kind === 'search' ? 'Search' : 'Command line');
    el.innerHTML = `<div class="palette-input"><span class="prompt">${kind === 'search' ? '/' : ':'}</span>
<input type="text" autocomplete="off" spellcheck="false" aria-label="${kind === 'search' ? 'Search the site' : 'Command'}"
 placeholder="${kind === 'search' ? 'search titles, headings and text' : 'command (try help, cv, latest)'}" role="combobox" aria-expanded="true" aria-controls="palette-list"></div>
<ul class="palette-results" id="palette-list" role="listbox"></ul>
<p class="palette-hint">${kind === 'search' ? '↑↓ choose, Enter open, Esc close' : 'Enter runs, Tab completes, Esc closes'}</p>`;
    document.body.append(el);
    const input = $('input', el);
    palette = { el, kind, input, list: $('ul', el), items: [], sel: 0, restore: document.activeElement };
    setMode(kind === 'search' ? 'SEARCH' : 'COMMAND');
    input.addEventListener('input', () => (kind === 'search' ? renderSearch() : renderCommands()));
    input.addEventListener('keydown', onPaletteKey);
    input.focus();
    if (kind === 'search') loadIndex().then(renderSearch);
    else renderCommands();
  }
  function renderList(items, row) {
    palette.items = items;
    palette.sel = 0;
    palette.list.innerHTML = items.map((it, i) =>
      `<li role="option" id="pal-${i}" aria-selected="${i === 0}">${row(it)}</li>`).join('');
    palette.input.setAttribute('aria-activedescendant', items.length ? 'pal-0' : '');
  }
  function moveSel(d) {
    const n = palette.items.length;
    if (!n) return;
    palette.list.children[palette.sel]?.setAttribute('aria-selected', 'false');
    palette.sel = (palette.sel + d + n) % n;
    const li = palette.list.children[palette.sel];
    li.setAttribute('aria-selected', 'true');
    li.scrollIntoView({ block: 'nearest' });
    palette.input.setAttribute('aria-activedescendant', li.id);
  }
  function onPaletteKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closePalette(); return; }
    if (e.key === 'ArrowDown' || (e.ctrlKey && e.key === 'n')) { e.preventDefault(); moveSel(1); return; }
    if (e.key === 'ArrowUp' || (e.ctrlKey && e.key === 'p')) { e.preventDefault(); moveSel(-1); return; }
    if (e.key === 'Tab' && palette.kind === 'command' && palette.items.length) {
      e.preventDefault();
      palette.input.value = palette.items[palette.sel].name + ' ';
      renderCommands();
      return;
    }
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (palette.kind === 'search') {
      const hit = palette.items[palette.sel];
      if (hit) location.href = hit.u;
      return;
    }
    const raw = palette.input.value.trim();
    const typed = raw.split(/\s+/)[0]?.toLowerCase() || '';
    const picked = !COMMANDS[typed] && palette.items[palette.sel] ? palette.items[palette.sel].name : typed;
    closePalette();
    run(picked ? picked + raw.slice(typed.length) : '');
  }

  // ------------------------------------------------------------ search
  let index = null;
  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch('/search.json').then((r) => r.json()).then((d) => (index = d)).catch(() => (index = []));
  }
  function subseq(q, s) {
    let i = 0;
    for (const ch of s) if (ch === q[i]) i++;
    return i === q.length;
  }
  function score(item, q) {
    const t = item.t.toLowerCase();
    if (t === q) return 100;
    if (t.startsWith(q)) return 80;
    if (t.includes(q)) return 60;
    if (item.h.some((h) => h.toLowerCase().includes(q))) return 40;
    if (subseq(q, t)) return 30;
    if (item.x.toLowerCase().includes(q)) return 20;
    return 0;
  }
  function renderSearch() {
    if (!palette) return;
    const q = palette.input.value.trim().toLowerCase();
    if (!q || !index) { renderList([], () => ''); return; }
    const hits = index.map((it) => ({ it, s: score(it, q) })).filter((h) => h.s > 0)
      .sort((a, b) => b.s - a.s || (b.it.d || '').localeCompare(a.it.d || '')).slice(0, 12).map((h) => h.it);
    renderList(hits, (it) => {
      const where = it.h.find((h) => h.toLowerCase().includes(q));
      return `<a href="${it.u}"><span class="k">${esc(it.k)}</span><span class="t">${esc(it.t)}</span><span class="x">${esc(where ? '§ ' + where : it.x)}</span></a>`;
    });
  }

  // ------------------------------------------------------------ commands
  const COMMANDS = {
    h: [go('/'), 'home'], home: [go('/'), 'home'],
    a: [go('/about'), 'about'], about: [go('/about'), 'about'],
    r: [go('/research'), 'research'], research: [go('/research'), 'research'],
    b: [go('/blog/'), 'blog'], blog: [go('/blog/'), 'blog'],
    p: [go('/poems/'), 'poems'], poems: [go('/poems/'), 'poems'],
    n: [go('/notes/'), 'lecture notes'], notes: [go('/notes/'), 'lecture notes'],
    m: [go('/music'), 'music'], music: [go('/music'), 'music'],
    hw: [go('/homework/'), 'homework'], homework: [go('/homework/'), 'homework'],
    e: [go('/educational'), 'educational'], edu: [go('/educational'), 'educational'],
    educational: [go('/educational'), 'educational'], t: [go('/educational'), 'educational'],
    technical: [go('/educational'), 'educational'],
    ex: [() => toggleExplorer(), 'file explorer'], explore: [() => toggleExplorer(), 'file explorer'],
    help: [go('/help'), 'keybindings and commands'], '?': [go('/help'), 'keybindings and commands'],
    cv: [open('/sdvscv.pdf'), 'CV (PDF)'], resume: [open('/sdvscv.pdf'), 'CV (PDF)'],
    email: [() => copy(EMAIL, 'Email copied to clipboard'), 'copy email address'],
    mail: [go('mailto:' + EMAIL), 'open mail client'],
    gh: [open('https://github.com/sdvstephens'), 'GitHub'], github: [open('https://github.com/sdvstephens'), 'GitHub'],
    yt: [open('https://youtube.com/@Vichaama'), 'YouTube'], youtube: [open('https://youtube.com/@Vichaama'), 'YouTube'],
    lb: [open('https://letterboxd.com/Vichaama/'), 'Letterboxd'], letterboxd: [open('https://letterboxd.com/Vichaama/'), 'Letterboxd'],
    source: [open('https://github.com/sdvstephens'), 'site source'],
    ls: [() => toast('Routes: / /about /research /blog /notes /music /homework /educational'), 'list routes'],
    latest: [latest, 'most recent blog post'],
    zen: [zen, 'minimal reading mode'],
    set: [(arg) => {
      const m = arg.match(/^(?:bg|background)=(light|dark)$/);
      if (m) setTheme(m[1]); else toast('Usage: :set bg=light or :set bg=dark');
    }, 'set bg=light|dark'],
    version: [() => toast('samuel-stephens.com v2 preview, built with vim and misery'), 'site version'],
    echo: [(arg) => toast(arg || ''), 'print a message'],
    q: [quit, 'close tab'], quit: [quit, 'close tab'],
  };
  // Unlisted, as on the live site: the HTML CV.
  const HIDDEN = { 'cv-html': open('/sdvscvhtml'), cvhtml: open('/sdvscvhtml') };
  function run(line) {
    const [cmd = '', ...rest] = line.trim().split(/\s+/);
    const name = cmd.toLowerCase();
    if (!name) return;
    if (COMMANDS[name]) COMMANDS[name][0](rest.join(' '));
    else if (HIDDEN[name]) HIDDEN[name]();
    else toast(`E492: Not an editor command: ${cmd}`);
  }
  function renderCommands() {
    const q = palette.input.value.trim().split(/\s+/)[0]?.toLowerCase() || '';
    const seen = new Set();
    const items = Object.entries(COMMANDS)
      .filter(([k]) => k.startsWith(q) && k !== '?')
      .filter(([, v]) => (seen.has(v[1]) ? false : seen.add(v[1])))
      .slice(0, 9)
      .map(([k, v]) => ({ name: k, desc: v[1] }));
    renderList(q && COMMANDS[q] ? items.filter((i) => i.name === q).concat(items.filter((i) => i.name !== q)) : items,
      (it) => `<a href="#" onclick="return false"><span class="k">:${esc(it.name)}</span><span class="t">${esc(it.desc)}</span></a>`);
  }

  // ------------------------------------------------------------ explorer
  // A sidebar in the manner of neo-tree. On wide screens it docks beside the
  // page and stays open as you move between pages (sessionStorage remembers
  // it, with the folders you opened); on narrower screens it slides over the
  // page. Its keys work while it has focus; click the page to give focus back.
  const ICON = {
    dir: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.75 3.25h4.1l1.4 1.5h7v8.5H1.75z"/></svg>',
    dirOpen: '<svg viewBox="0 0 16 16" aria-hidden="true"><path class="line" d="M1.75 13.25V3.25h4.1l1.4 1.5h5.5v1.75"/><path d="M1.75 13.25l2.2-6.25h10.3l-2.2 6.25z"/></svg>',
    file: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.75 1.75h5.5l3 3v9.5h-8.5z"/><path class="line" d="M9.25 1.75v3h3"/></svg>',
    home: '<svg viewBox="0 0 16 16" aria-hidden="true"><path class="line" d="M1.75 7.75 8 2.25l6.25 5.5"/><path d="M3.5 6.5v7.25h9V6.5"/></svg>',
  };
  const DOCK_MIN = 1300;
  const docked = () => innerWidth >= DOCK_MIN;
  const here = location.pathname.replace(/\/$/, '') || '/';
  const norm = (u) => (u || '').replace(/\/$/, '') || (u ? '/' : '');
  let ex = null;

  function typeOf(n) {
    if (n.c) return 'dir';
    if (n.n === 'home') return 'home';
    const m = n.n.match(/\.([a-z]+)$/);
    return m ? m[1] : 'file';
  }
  function prepare(tree) {
    const walk = (nodes, parent) => {
      let count = 0;
      for (const n of nodes) {
        n.id = (parent ? parent.id + '/' : '') + n.n.replace(/\/$/, '');
        n.parent = parent;
        n.here = !!n.u && !n.u.includes('#') && norm(n.u) === here;
        if (n.c) { n.count = walk(n.c, n); count += n.count; } else count++;
      }
      return count;
    };
    walk(tree, null);
    return tree;
  }
  function eachNode(fn) {
    const walk = (ns) => { for (const n of ns) { fn(n); if (n.c) walk(n.c); } };
    if (ex.tree) walk(ex.tree);
  }
  function find(id) {
    let hit = null;
    if (id) eachNode((n) => { if (!hit && n.id === id) hit = n; });
    return hit;
  }
  function buildExplorer() {
    const el = document.createElement('nav');
    el.className = 'explorer';
    el.setAttribute('aria-label', 'Site explorer');
    el.hidden = true;
    el.innerHTML = `<div class="ex-head"><span class="ex-title">explorer</span><span class="ex-root">~/stephens</span>
<button class="ex-close" type="button" aria-label="Close explorer">×</button></div>
<div class="ex-filter" hidden><span class="prompt">/</span><input type="text" autocomplete="off" spellcheck="false" aria-label="Filter files" placeholder="filter"></div>
<div class="ex-tree" role="tree" tabindex="0" aria-label="Site pages"></div>
<div class="ex-foot"><span><kbd>j</kbd><kbd>k</kbd> move</span><span><kbd>l</kbd><kbd>h</kbd> fold</span><span><kbd>⏎</kbd> open</span><span><kbd>/</kbd> filter</span><span><kbd>W</kbd> collapse</span><span><kbd>q</kbd> close</span></div>`;
    document.body.append(el);
    ex = {
      el, list: $('.ex-tree', el), filterBox: $('.ex-filter', el), input: $('.ex-filter input', el),
      tree: null, rows: [], cursor: null, filter: '',
      open: new Set(JSON.parse(session.get('ex-dirs') || '[]')),
    };
    $('.ex-close', el).addEventListener('click', closeExplorer);
    ex.list.addEventListener('keydown', explorerKey);
    ex.list.addEventListener('click', (e) => {
      const row = e.target.closest('.ex-row');
      if (!row) return;
      const n = find(row.dataset.id);
      if (!n) return;
      // Modified clicks open files in a new tab as usual.
      if (!n.c && (e.metaKey || e.ctrlKey || e.shiftKey)) return;
      e.preventDefault();
      ex.cursor = n.id;
      // The chevron folds a folder; the name opens its page.
      if (n.c && (e.target.closest('.ex-chev') || !n.u)) { toggleDir(n); draw(); }
      else if (n.u) location.href = n.u;
    });
    ex.input.addEventListener('input', () => { ex.filter = ex.input.value.trim(); draw(); });
    ex.input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); clearFilter(); ex.list.focus(); }
      else if (e.key === 'ArrowDown' || e.key === 'Tab') { e.preventDefault(); ex.list.focus(); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const q = ex.filter.toLowerCase();
        const hit = ex.rows.find((r) => !r.n.c && r.n.u && r.n.n.toLowerCase().includes(q)) || ex.rows.find((r) => r.n.u);
        if (hit) location.href = hit.n.u;
      }
    });
    addEventListener('pagehide', () => session.set('ex-scroll', String(ex.list.scrollTop)));

    const fill = (json) => {
      ex.tree = prepare(JSON.parse(json));
      let start = null;
      eachNode((n) => { if (!start && n.here) start = n; });
      // Open the folders on the way to this page, and this page if it is a folder.
      if (start) {
        for (let p = start.c ? start : start.parent; p; p = p.parent) ex.open.add(p.id);
        ex.cursor = start.id;
      }
      draw();
      const y = +session.get('ex-scroll');
      if (y) ex.list.scrollTop = y;
      ex.list.querySelector('.cursor')?.scrollIntoView({ block: 'nearest' });
    };
    const cached = session.get('ex-tree');
    if (cached) fill(cached);
    fetch('/tree.json').then((r) => r.text()).then((text) => {
      if (text !== cached) { session.set('ex-tree', text); fill(text); }
    }).catch(() => { if (!cached) ex.list.innerHTML = '<p class="ex-empty">Could not load the site tree.</p>'; });
  }
  function visibleRows() {
    const out = [];
    const q = ex.filter.toLowerCase();
    const keep = (n) => !q || n.n.toLowerCase().includes(q) || (!!n.c && n.c.some(keep));
    const walk = (nodes, depth) => {
      for (const n of nodes) {
        if (!keep(n)) continue;
        out.push({ n, depth });
        if (n.c && (q || ex.open.has(n.id))) walk(n.c, depth + 1);
      }
    };
    if (ex.tree) walk(ex.tree, 0);
    return out;
  }
  function highlight(name) {
    const i = ex.filter ? name.toLowerCase().indexOf(ex.filter.toLowerCase()) : -1;
    if (i < 0) return esc(name);
    const j = i + ex.filter.length;
    return esc(name.slice(0, i)) + '<mark>' + esc(name.slice(i, j)) + '</mark>' + esc(name.slice(j));
  }
  function draw() {
    if (!ex.tree) return;
    ex.rows = visibleRows();
    if (!ex.rows.some((r) => r.n.id === ex.cursor)) ex.cursor = ex.rows[0]?.n.id;
    ex.list.innerHTML = ex.rows.map(({ n, depth }, i) => {
      const type = typeOf(n);
      const isOpen = !!n.c && (!!ex.filter || ex.open.has(n.id));
      const cls = ['ex-row', 'is-' + type, n.m && 'muted', n.here && 'here', n.id === ex.cursor && 'cursor'].filter(Boolean).join(' ');
      const icon = n.c ? (isOpen ? ICON.dirOpen : ICON.dir) : type === 'home' ? ICON.home : ICON.file;
      return `<a class="${cls}" id="ex-r-${i}" role="treeitem" aria-level="${depth + 1}"${n.c ? ` aria-expanded="${isOpen}"` : ''}${n.here ? ' aria-current="page"' : ''} data-id="${esc(n.id)}" href="${n.u || '#'}" tabindex="-1" style="--depth:${depth}">`
        + `<span class="ex-chev">${n.c ? (isOpen ? '▾' : '▸') : ''}</span><span class="ex-icon">${icon}</span><span class="ex-name">${highlight(n.n)}</span>`
        + (n.c ? `<span class="ex-count">${n.count}</span>` : '') + '</a>';
    }).join('') || '<p class="ex-empty">No matches</p>';
    const cur = ex.list.querySelector('.cursor');
    if (cur) { ex.list.setAttribute('aria-activedescendant', cur.id); cur.scrollIntoView({ block: 'nearest' }); }
    session.set('ex-dirs', JSON.stringify([...ex.open]));
  }
  function toggleDir(n, force) {
    const want = force ?? !ex.open.has(n.id);
    if (want) ex.open.add(n.id); else ex.open.delete(n.id);
  }
  function clearFilter() {
    ex.filter = '';
    ex.input.value = '';
    ex.filterBox.hidden = true;
    draw();
  }
  function setBackdrop(on) {
    let b = $('.ex-backdrop');
    if (on && !b) {
      b = document.createElement('div');
      b.className = 'ex-backdrop';
      b.addEventListener('mousedown', closeExplorer);
      document.body.append(b);
    } else if (!on && b) b.remove();
  }
  function openExplorer({ focus = true } = {}) {
    if (!ex) buildExplorer();
    ex.el.hidden = false;
    doc.classList.add('ex-open');
    setBackdrop(!docked());
    if (docked()) session.set('ex', '1');
    if (focus) ex.list.focus({ preventScroll: true });
  }
  function closeExplorer() {
    if (!ex || ex.el.hidden) return;
    const hadFocus = ex.el.contains(document.activeElement);
    ex.el.hidden = true;
    doc.classList.remove('ex-open');
    setBackdrop(false);
    session.del('ex');
    if (hadFocus) focusPage();
  }
  // Space e and :ex open and focus it; focus it if open; close it if it already has focus.
  function toggleExplorer() {
    if (!ex || ex.el.hidden) openExplorer();
    else if (ex.el.contains(document.activeElement)) closeExplorer();
    else ex.list.focus({ preventScroll: true });
  }
  addEventListener('resize', () => { if (ex && !ex.el.hidden) setBackdrop(!docked()); });
  // The header button is the way in on a phone, where there is no Space key.
  const exButton = $('.ex-toggle');
  if (exButton) {
    exButton.hidden = false;
    exButton.addEventListener('click', () => (ex && !ex.el.hidden ? closeExplorer() : openExplorer()));
    const sync = () => exButton.setAttribute('aria-expanded', String(doc.classList.contains('ex-open')));
    new MutationObserver(sync).observe(doc, { attributes: true, attributeFilter: ['class'] });
    sync();
  }
  if (doc.classList.contains('ex-open')) openExplorer({ focus: false });

  let exLast = { key: '', at: 0 };
  function explorerKey(e) {
    if (wk || e.metaKey || e.ctrlKey || e.altKey) return;
    const at = ex.rows.findIndex((r) => r.n.id === ex.cursor);
    const n = ex.rows[at]?.n;
    const move = (i) => { ex.cursor = ex.rows[Math.max(0, Math.min(ex.rows.length - 1, i))]?.n.id; draw(); };
    const now = Date.now();
    const twice = exLast.key === e.key && now - exLast.at < 400;
    exLast = { key: e.key, at: now };
    switch (e.key) {
      case 'j': case 'ArrowDown': move(at + 1); break;
      case 'k': case 'ArrowUp': move(at - 1); break;
      case 'g': if (twice) move(0); break;
      case 'G': move(ex.rows.length - 1); break;
      case 'l': case 'ArrowRight':
        if (n?.c && !ex.open.has(n.id) && !ex.filter) { toggleDir(n, true); draw(); } else if (n?.c) move(at + 1);
        break;
      case 'h': case 'ArrowLeft':
        if (n?.c && ex.open.has(n.id) && !ex.filter) { toggleDir(n, false); draw(); } else if (n?.parent) { ex.cursor = n.parent.id; draw(); }
        break;
      case 'Enter': case 'o':
        if (n?.u) location.href = n.u; else if (n?.c) { toggleDir(n); draw(); }
        break;
      case 'W': ex.open.clear(); if (n) { let p = n; while (p.parent) p = p.parent; ex.cursor = p.id; } draw(); break;
      case 'E': eachNode((x) => { if (x.c) ex.open.add(x.id); }); draw(); break;
      case '/': ex.filterBox.hidden = false; ex.input.focus(); break;
      case 'q': closeExplorer(); break;
      case 'Escape':
        if (ex.filter) clearFilter();
        else if (docked()) focusPage();
        else closeExplorer();
        break;
      default: return; // Space, :, ? and the rest still reach the page handler
    }
    e.preventDefault();
    e.stopPropagation();
  }

  // ------------------------------------------------------------ leader (which-key)
  // Space opens a panel listing what the next key does. Groups (+goto, +yank,
  // +open) open a second level; Backspace goes back up, Esc closes. It stays
  // until you choose, and every entry can also be clicked.
  const group = (label, items) => ({ label, items });
  const LEADER = group('leader', [
    ['e', 'explorer', toggleExplorer],
    ['/', 'search', () => openPalette('search')],
    [':', 'command line', () => openPalette('command')],
    ['t', 'light / dark theme', toggleTheme],
    ['z', 'zen mode', zen],
    ['?', 'help', go('/help')],
    [' ', 'page down', pageDown],
    ['g', 'goto', group('goto', [
      ['h', 'home', go('/')],
      ['a', 'about', go('/about')],
      ['r', 'research', go('/research')],
      ['b', 'blog', go('/blog/')],
      // Only once a poem is published (the header link appears then too).
      ...($('.primary a[href="/poems/"]') ? [['p', 'poems', go('/poems/')]] : []),
      ['n', 'notes', go('/notes/')],
      ['m', 'music', go('/music')],
      ['w', 'homework', go('/homework/')],
      ['d', 'educational', go('/educational')],
      ['l', 'latest post', latest],
    ])],
    ['y', 'yank', group('yank', [
      ['y', 'link to this page', () => copy(pageUrl(), 'Copied link to this page')],
      ['s', 'link to this section', () => {
        const h = sectionNow();
        copy(pageUrl() + (h ? '#' + h.id : ''), h ? `Copied link to “${h.textContent.trim()}”` : 'Copied link to this page');
      }],
      ['m', 'markdown link', () => copy(`[${document.title}](${pageUrl()})`, 'Copied Markdown link')],
      ['e', 'email address', () => copy(EMAIL, 'Email copied to clipboard')],
    ])],
    ['o', 'open', group('open', [
      ['c', 'CV (PDF)', open('/sdvscv.pdf')],
      ['g', 'GitHub', open('https://github.com/sdvstephens')],
      ['y', 'YouTube', open('https://youtube.com/@Vichaama')],
      ['l', 'Letterboxd', open('https://letterboxd.com/Vichaama/')],
      ['s', 'site source', open('https://github.com/sdvstephens')],
    ])],
  ]);
  const keyLabel = (k) => (k === ' ' ? 'SPC' : k);
  let wk = null;
  function openLeader() {
    closeLeader();
    const el = document.createElement('div');
    el.className = 'which-key';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Leader key menu');
    document.body.append(el);
    wk = { el, stack: [{ key: ' ', g: LEADER }] };
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-k]');
      if (b) trigger(b.dataset.k);
      else if (e.target.closest('.wk-back')) back();
      else if (e.target.closest('.wk-esc')) closeLeader();
    });
    drawLeader();
    setMode('LEADER');
  }
  function drawLeader() {
    const { g } = wk.stack.at(-1);
    const path = wk.stack.map((s) => `<kbd>${esc(keyLabel(s.key))}</kbd>`).join('<span class="wk-sep">➜</span>');
    const items = g.items.map(([k, desc, target]) => `<button type="button" class="wk-item" data-k="${esc(k)}">`
      + `<kbd class="wk-key">${esc(keyLabel(k))}</kbd><span class="wk-arrow">➜</span>`
      + `<span class="wk-desc${target.items ? ' is-group' : ''}">${target.items ? '+' : ''}${esc(desc)}</span></button>`).join('');
    wk.el.innerHTML = `<div class="wk-grid">${items}</div>
<div class="wk-foot"><span class="wk-path">${path}${wk.stack.length > 1 ? `<span class="wk-name">+${esc(g.label)}</span>` : ''}</span>
<span class="wk-hint">${wk.stack.length > 1 ? '<button type="button" class="wk-back"><kbd>⌫</kbd> back</button>' : ''}<button type="button" class="wk-esc"><kbd>esc</kbd> close</button></span></div>`;
  }
  function trigger(k) {
    const item = wk.stack.at(-1).g.items.find(([key]) => key === k);
    if (!item) { closeLeader(); return; }
    const target = item[2];
    if (target.items) { wk.stack.push({ key: k, g: target }); drawLeader(); return; }
    closeLeader();
    target();
  }
  function back() {
    if (wk.stack.length > 1) { wk.stack.pop(); drawLeader(); } else closeLeader();
  }
  function closeLeader() {
    if (!wk) return;
    wk.el.remove();
    wk = null;
    setMode('NORMAL');
  }
  function leaderKey(e) {
    if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(e.key)) return;
    e.preventDefault();
    if (e.key === 'Escape') closeLeader();
    else if (e.key === 'Backspace') back();
    else trigger(e.key);
  }

  // ------------------------------------------------------------ keys
  let last = { key: '', at: 0 };
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    if (wk) { leaderKey(e); return; }
    const t = e.target;
    if (t.closest?.('input, textarea, select, [contenteditable=""], [contenteditable="true"]')) return;
    if (palette) return;
    if (e.key === ' ' && e.shiftKey) return;
    const now = Date.now();
    const twice = last.key === e.key && now - last.at < 400;
    last = { key: e.key, at: now };
    switch (e.key) {
      case ' ':
        if (t.closest?.('a, button, summary')) return;
        e.preventDefault(); openLeader(); break;
      case 'j': scrollBy({ top: 110, behavior }); break;
      case 'k': scrollBy({ top: -110, behavior }); break;
      case 'g': if (twice) scrollTo({ top: 0, behavior }); break;
      case 'G': scrollTo({ top: doc.scrollHeight, behavior }); break;
      case '/': e.preventDefault(); openPalette('search'); break;
      case ':': e.preventDefault(); openPalette('command'); break;
      case '?': location.href = '/help'; break;
      case '[': $('.prev-next a.prev')?.click(); break;
      case ']': $('.prev-next a.next')?.click(); break;
      case 'Escape':
        if (doc.classList.contains('zen')) doc.classList.remove('zen');
        else if (ex && !docked()) closeExplorer();
        break;
      default:
    }
  });
  document.addEventListener('mousedown', (e) => {
    if (palette && !palette.el.contains(e.target)) closePalette();
    if (wk && !wk.el.contains(e.target)) closeLeader();
  });

  // ------------------------------------------------------------ contents rail
  // Mark the section being read in a page's contents list (the about page).
  const tocLinks = [...document.querySelectorAll('.rail .toc-list a[href^="#"]')];
  const targets = tocLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if (targets.length) {
    const markToc = () => {
      let current = targets[0];
      for (const t of targets) if (t.getBoundingClientRect().top < innerHeight * 0.3) current = t;
      for (const a of tocLinks) {
        if (a.getAttribute('href') === '#' + current.id) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      }
    };
    addEventListener('scroll', markToc, { passive: true });
    markToc();
  }

  // ------------------------------------------------------------ 404
  const missing = $('.missing-path');
  if (missing) missing.textContent = location.pathname;

  // ------------------------------------------------------------ comments
  // Giscus loads when the comments come into view, not on page load.
  const slot = $('.giscus[data-repo]');
  if (slot && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((en) => en.isIntersecting)) return;
      io.disconnect();
      const s = document.createElement('script');
      s.src = 'https://giscus.app/client.js';
      const attrs = {
        repo: slot.dataset.repo, 'repo-id': slot.dataset.repoId, category: slot.dataset.category,
        'category-id': slot.dataset.categoryId, mapping: 'pathname', strict: '1',
        'reactions-enabled': '1', 'emit-metadata': '0', 'input-position': 'bottom',
        theme: `gruvbox_${theme()}`, lang: 'en', loading: 'lazy',
      };
      for (const [k, v] of Object.entries(attrs)) s.setAttribute('data-' + k, v);
      s.crossOrigin = 'anonymous';
      s.async = true;
      slot.append(s);
    }, { rootMargin: '400px' });
    io.observe(slot);
  }
})();
