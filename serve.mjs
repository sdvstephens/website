#!/usr/bin/env node
// serve.mjs: local preview server for dist/. No dependencies.
//
// Resolves URLs the way the Apache rules in deploy/htaccess.example do:
//   /path/      → dist/path/index.html
//   /path       → dist/path (a file), else dist/path.html, else 301 to /path/
//   anything else → dist/404.html with status 404 (a real 404, not the home page)
//
//   node serve.mjs              serve on http://localhost:4321
//   node serve.mjs --watch      also rebuild when the content folders, src/ or static/ change,
//                               and reload open pages after each build
//   PORT=8080 node serve.mjs

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT) || 4321;
const WATCH = process.argv.includes('--watch');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.mp3': 'audio/mpeg', '.md': 'text/markdown; charset=utf-8',
};
const clients = new Set();
const RELOAD = '<script>new EventSource("/__reload").onmessage=()=>location.reload()</script>';

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

server.listen(PORT, '127.0.0.1', () => {
  console.log(`serving dist/ at http://localhost:${PORT}${WATCH ? '  (watching for changes)' : ''}`);
});

if (WATCH) {
  let timer = null;
  let building = false;
  let again = false;
  const rebuild = () => {
    if (building) { again = true; return; }
    building = true;
    const child = spawn(process.execPath, [path.join(ROOT, 'build.mjs'), '--preview'], { stdio: 'inherit' });
    child.on('exit', (code) => {
      building = false;
      if (code === 0) for (const c of clients) c.write('data: reload\n\n');
      if (again) { again = false; rebuild(); }
    });
  };
  for (const dir of ['blog', 'notes', 'homework', 'courses', 'music', 'poems', 'pages', 'src', 'static']) {
    const p = path.join(ROOT, dir);
    if (fs.existsSync(p)) fs.watch(p, { recursive: true }, () => { clearTimeout(timer); timer = setTimeout(rebuild, 150); });
  }
  for (const f of ['build.mjs', 'AUDIT.md', 'SUGGESTIONS.md']) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p)) fs.watch(p, () => { clearTimeout(timer); timer = setTimeout(rebuild, 150); });
  }
}
