#!/usr/bin/env node
// serve.mjs: local server for the site. No dependencies. Nothing here uploads
// anything; it only answers on this computer (127.0.0.1).
//
// Resolves URLs the way the Apache rules in deploy/htaccess.example do:
//   /path/      → path/index.html
//   /path       → path (a file), else path.html, else 301 to /path/
//   anything else → 404.html with status 404 (a real 404, not the home page)
//
//   node serve.mjs              serve dist/ (the build that gets uploaded) on http://localhost:4321
//   node serve.mjs --watch      serve the preview build (build.mjs --preview), rebuild it when the
//                               content folders, src/ or static/ change, and update open pages:
//                               a page reloads in place, or moves to the page of the file you
//                               saved (add ?stay to the address to keep a tab where it is)
//   /__open?file=blog/x.md      redirect to the page that file makes (for editor commands)
//   POST /__buffer?file=blog/x.md   (with --watch) preview this text in place of the saved file,
//                               until the file is saved; DELETE drops it. Neovim's :SiteDev
//                               sends unsaved buffers this way, so the preview follows typing.
//   PORT=8080 node serve.mjs

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 4321;
const WATCH = process.argv.includes('--watch');
// The preview build goes to the same folder as in build.mjs (PREVIEW_DIR).
const DIST = WATCH || process.argv.includes('--preview')
  ? path.join(os.tmpdir(), 'samuel-stephens.com-preview') : path.join(ROOT, 'dist');
// Unsaved editor text, by path relative to the repo (build.mjs reads it in the preview).
const UNSAVED = path.join(os.tmpdir(), 'samuel-stephens.com-unsaved');
const WATCHED = ['blog', 'notes', 'homework', 'courses', 'music', 'poems', 'pages', 'research', 'src', 'static'];
let onSourceChange = null; // set once this copy is the one watching

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.mp3': 'audio/mpeg', '.md': 'text/markdown; charset=utf-8',
};
const clients = new Set();
// After each build the server sends the address of the page made by the file
// that was saved ("reload" when there is none, "failed" when the build broke).
const RELOAD = `<script>(()=>{
if(/[?&]stay\\b/.test(location.search))sessionStorage.setItem('stay','1');
const bar=(t)=>{let b=document.getElementById('__preview');if(!b){b=document.createElement('div');b.id='__preview';b.style.cssText='position:fixed;z-index:99999;left:0;right:0;bottom:0;padding:.4em .8em;font:13px/1.4 ui-monospace,monospace;background:#cc241d;color:#fbf1c7';document.body.append(b)}b.textContent=t};
const es=new EventSource('/__reload');
es.onmessage=(e)=>{const d=e.data;
if(d==='failed')return bar('Preview build failed: see the terminal. The page shows the last good build.');
const here=location.pathname.replace(/\\/$/,'')||'/';
if(d!=='reload'&&d!==here&&!sessionStorage.getItem('stay'))location.href=d;
else location.reload()};
es.onerror=()=>bar('Preview server stopped. Start it again with npm run dev.');
es.onopen=()=>{const b=document.getElementById('__preview');if(b)b.remove()};
})()</script>`;

function isFile(p) { try { return fs.statSync(p).isFile(); } catch { return false; } }

function resolve(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const abs = path.join(DIST, clean);
  if (!abs.startsWith(DIST)) return { status: 403 };
  if (urlPath.endsWith('/')) return isFile(path.join(abs, 'index.html')) ? { file: path.join(abs, 'index.html') } : { status: 404 };
  if (isFile(abs)) return { file: abs };
  if (isFile(abs + '.html')) return { file: abs + '.html' };
  if (isFile(path.join(abs, 'index.html'))) return { redirect: urlPath + '/' };
  return { status: 404 };
}

function send(res, status, file, extraHead = {}) {
  const type = TYPES[path.extname(file)] || 'application/octet-stream';
  let body = fs.readFileSync(file);
  if (WATCH && type.startsWith('text/html')) body = Buffer.from(body.toString().replace('</body>', RELOAD + '</body>'));
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache', ...extraHead });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/__reload' && WATCH) {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  if (url.pathname === '/__buffer' && onSourceChange) { buffer(req, res, url); return; }
  if (url.pathname === '/__open') {
    const to = pageFor(url.searchParams.get('file') || '') || '/';
    res.writeHead(302, { Location: to }); res.end(); return;
  }
  const r = resolve(url.pathname);
  if (r.redirect) { res.writeHead(301, { Location: r.redirect + url.search }); res.end(); log(req, 301); return; }
  if (r.file) { send(res, 200, r.file); log(req, 200); return; }
  const notFound = path.join(DIST, '404.html');
  if (isFile(notFound)) send(res, r.status || 404, notFound); else { res.writeHead(r.status || 404); res.end('Not found'); }
  log(req, r.status || 404);
});
function log(req, status) {
  if (status !== 200) console.log(`${status} ${req.url}`);
}

// An editor's unsaved text for one source file. The custom header keeps web
// pages from posting here (a browser can't send it to another site unasked).
function buffer(req, res, url) {
  const rel = path.normalize(url.searchParams.get('file') || '').replaceAll(path.sep, '/');
  const ok = req.headers['x-preview-buffer'] === '1' && !rel.startsWith('..') && !path.isAbsolute(rel)
    && (WATCHED.includes(rel.split('/')[0]) || ['AUDIT.md', 'SUGGESTIONS.md'].includes(rel))
    && isFile(path.join(ROOT, rel));
  if (!ok) { res.writeHead(400); res.end(); return; }
  const dest = path.join(UNSAVED, rel);
  if (req.method === 'DELETE') {
    const had = isFile(dest);
    fs.rmSync(dest, { force: true });
    res.writeHead(204); res.end();
    if (had) onSourceChange(rel);
    return;
  }
  if (req.method !== 'POST') { res.writeHead(405); res.end(); return; }
  const chunks = [];
  let size = 0;
  req.on('data', (c) => { size += c.length; if (size <= 20e6) chunks.push(c); });
  req.on('end', () => {
    if (size > 20e6) { res.writeHead(413); res.end(); return; }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.concat(chunks));
    res.writeHead(204); res.end();
    onSourceChange(rel);
  });
}

// The page a source file makes, from the map the preview build writes.
function pageFor(file) {
  try {
    const map = JSON.parse(fs.readFileSync(path.join(DIST, '__sources.json'), 'utf8'));
    const rel = path.normalize(file).replace(/^(\.\/)+/, '');
    return map[rel] || map[path.relative(ROOT, path.resolve(ROOT, rel))] || null;
  } catch { return null; }
}

// With --watch: build the preview, then rebuild it whenever a source file is saved.
// Only one copy watches and serves; a second copy (say VS Code and Neovim both
// started one) waits and takes over if the first one stops.
function watch() {
  let timer = null;
  let building = false;
  let again = false;
  let saved = null; // the last source file saved
  const build = (onDone) => {
    building = true;
    const file = saved;
    const child = spawn(process.execPath, [path.join(ROOT, 'build.mjs'), '--preview'],
      { stdio: 'inherit', env: { ...process.env, SSS_PREVIEW_UNSAVED: UNSAVED } });
    child.on('exit', (code) => {
      building = false;
      if (onDone) onDone(code);
      else {
        const msg = code !== 0 ? 'failed' : (file && pageFor(file)) || 'reload';
        for (const c of clients) c.write(`data: ${msg}\n\n`);
      }
      if (again) { again = false; rebuild(); }
    });
  };
  const rebuild = () => {
    if (building) { again = true; return; }
    console.log(`rebuilding: ${saved} changed${isFile(path.join(UNSAVED, saved || '')) ? ' (unsaved)' : ''}`);
    build();
  };
  // Editors save through temporary files (Neovim's 4913 and file~, swap files);
  // those alone don't start a build.
  const noise = (name) => /(^|\/)(4913|\.DS_Store|\.#.*|.*~|.*\.sw[a-p]|.*\.tmp)$/.test(name);
  const changed = (rel) => {
    if (!rel || noise(rel)) return;
    saved = rel;
    clearTimeout(timer); timer = setTimeout(rebuild, 150);
  };
  // A file saved on disk replaces any unsaved text held for it.
  const savedOnDisk = (rel) => {
    if (rel) fs.rmSync(path.join(UNSAVED, rel), { force: true });
    changed(rel);
  };
  fs.rmSync(UNSAVED, { recursive: true, force: true });
  onSourceChange = changed;
  console.log('building the preview…');
  build((code) => {
    if (code !== 0) console.log('the preview build failed (see above); fix it and save to try again');
    console.log(`serving the preview at http://localhost:${PORT}  (rebuilt when you save; nothing is uploaded)`);
    for (const dir of WATCHED) {
      const p = path.join(ROOT, dir);
      if (fs.existsSync(p)) fs.watch(p, { recursive: true }, (_, name) => savedOnDisk(name && `${dir}/${String(name).replaceAll(path.sep, '/')}`));
    }
    for (const f of ['build.mjs', 'AUDIT.md', 'SUGGESTIONS.md']) {
      const p = path.join(ROOT, f);
      if (fs.existsSync(p)) fs.watch(p, () => savedOnDisk(f));
    }
  });
}

let waiting = false;
server.on('error', (e) => {
  if (e.code !== 'EADDRINUSE') throw e;
  if (!waiting) console.log(`already served at http://localhost:${PORT} by another window; this one takes over if that one stops`);
  waiting = true;
  setTimeout(() => server.listen(PORT, '127.0.0.1'), 2000);
});
server.on('listening', () => {
  if (WATCH) watch();
  else console.log(`serving dist/ at http://localhost:${PORT}`);
});
server.listen(PORT, '127.0.0.1');
