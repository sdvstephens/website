// markdown.mjs: Markdown + TeX rendering, done once at build time.
//
// The live site ships marked.js and MathJax (≈300 KB) to every visitor and
// renders in the browser. Here the same two libraries run in Node, so pages
// arrive finished: no flash of raw $…$, no layout shift, readable without JS.
//
// Math delimiters, macros and TeX packages match the live MathJax config.

import { marked } from 'marked';
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';

marked.setOptions({ gfm: true, breaks: false });

// ---------------------------------------------------------------- macros
// Copied from the MathJax config in the original index.html.
const op = (n) => `\\operatorname{${n}}`;
const MACROS = {
  dom: op('dom'), ran: op('ran'), im: op('im'), Img: op('Im'), img: op('im'),
  ker: op('ker'), Ker: op('Ker'), coker: op('coker'), Coker: op('Coker'),
  rank: op('rank'), nullity: op('null'), Tr: op('Tr'), tr: op('tr'), pr: op('pr'),
  id: op('id'), Hom: op('Hom'), Mor: op('Mor'), End: op('End'), Aut: op('Aut'),
  Inn: op('Inn'), Sym: op('Sym'), Stab: op('Stab'), Tor: op('Tor'), Ext: op('Ext'),
  Spec: op('Spec'), Gal: op('Gal'), GL: op('GL'), SL: op('SL'), Syl: op('Syl'),
  sgn: op('sgn'), sign: op('sign'), ord: op('ord'), diam: op('diam'), diag: op('diag'),
  lcm: op('lcm'), cis: op('cis'), Lap: '\\mathcal{L}', Var: op('Var'), Cov: op('Cov'),
  E: op('E'), ev: op('ev'), ext: op('ext'), pred: op('pred'),
  argmin: '\\operatorname*{arg\\,min}', argmax: '\\operatorname*{arg\\,max}',
  RR: '\\mathbb{R}', NN: '\\mathbb{N}', ZZ: '\\mathbb{Z}', QQ: '\\mathbb{Q}', CC: '\\mathbb{C}',
  FF: '\\mathbb{F}', PP: '\\mathbb{P}', HH: '\\mathbb{H}', EE: '\\mathbb{E}', On: '\\mathrm{On}',
  inv: '^{-1}', eps: '\\epsilon', veps: '\\varepsilon', lm: '\\lambda', del: '\\partial',
  ol: ['\\overline{#1}', 1], ul: ['\\underline{#1}', 1], wt: ['\\widetilde{#1}', 1],
  wh: ['\\widehat{#1}', 1], bs: ['\\boldsymbol{#1}', 1],
  liff: '\\leftrightarrow', lthen: '\\rightarrow', surjto: '\\twoheadrightarrow',
  injto: '\\hookrightarrow', taking: ['\\xrightarrow{#1}', 1],
  defeq: '\\overset{\\mathrm{def}}{=}', coloneqq: '\\mathrel{\\vcenter{:}}=',
  dang: '\\measuredangle', ray: ['\\overrightarrow{#1}', 1], seg: ['\\overline{#1}', 1],
  arc: ['\\wideparen{#1}', 1],
  cycsum: '\\sum_{\\mathrm{cyc}}', symsum: '\\sum_{\\mathrm{sym}}',
  cycprod: '\\prod_{\\mathrm{cyc}}', symprod: '\\prod_{\\mathrm{sym}}',
  od: ['\\frac{\\mathrm{d} #1}{\\mathrm{d} #2}', 2],
  oD: ['\\frac{\\mathrm{d}^{#1} #2}{\\mathrm{d} {#3}^{#1}}', 3],
  pd: ['\\frac{\\partial #1}{\\partial #2}', 2],
  pD: ['\\frac{\\partial^{#1} #2}{\\partial {#3}^{#1}}', 3],
  half: '\\frac{1}{2}', dps: ['\\displaystyle{#1}', 1], lt: '\\left', rt: '\\right',
  exs: '\\exists', charin: '\\text{ char }',
  kb: '\\mathfrak{b}', kg: '\\mathfrak{g}', kh: '\\mathfrak{h}', kn: '\\mathfrak{n}',
  ku: '\\mathfrak{u}', kz: '\\mathfrak{z}', km: '\\mathfrak{m}', kp: '\\mathfrak{p}',
  kq: '\\mathfrak{q}', gl: '\\mathfrak{gl}', slie: '\\mathfrak{sl}',
  // From ~/university/preamble.tex: slanted ≤ ≥, and a few the book uses.
  leq: '\\leqslant', geq: '\\geqslant', opname: ['\\operatorname{#1}', 1],
  llbracket: '\\mathopen{[\\![}', rrbracket: '\\mathclose{]\\!]}',
  xlongrightarrow: ['\\xrightarrow{#1}', 1], dg: '^\\circ', lub: '\\text{lub}',
  Lie: '\\unicode{xA3}', rchi: '\\chi',
};
for (const L of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  MACROS['mc' + L] = `\\mathcal{${L}}`;
  MACROS['mf' + L] = `\\mathfrak{${L}}`;
  MACROS['bb' + L] = `\\mathbb{${L}}`;
}
for (const l of 'abcdefghijklmnopqrstuvwxyz') MACROS['mf' + l] = `\\mathfrak{${l}}`;
for (const L of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') { MACROS['s' + L] = `{\\mathscr{${L}}}`; MACROS['bm' + L] = `\\boldsymbol{${L}}`; }
for (const l of 'abcdefghijklmnopqrstuvwxyz') MACROS['bm' + l] = `\\boldsymbol{${l}}`;

// ---------------------------------------------------------------- MathJax
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const packages = AllPackages.filter((p) => !['bussproofs', 'colorv2', 'autoload', 'require'].includes(p));
const tex = new TeX({ packages, macros: MACROS, formatError: (jax, err) => jax.formatError(err) });
const chtml = new CHTML({ fontURL: '/assets/mathjax/woff-v2', adaptiveCSS: true });
const mjdoc = mathjax.document('', { InputJax: tex, OutputJax: chtml });

export const mathWarnings = [];
let currentSource = '';
export function setSource(name) { currentSource = name; }

function renderTex(src, display) {
  try {
    const node = mjdoc.convert(src, { display, em: 20, ex: 8.3, containerWidth: 33 * 20 });
    const html = adaptor.outerHTML(node);
    if (html.includes('data-mjx-error') || html.includes('<mjx-merror')) {
      mathWarnings.push(`${currentSource}: TeX error in ${display ? '$$' : '$'}${src.trim().slice(0, 60)}${display ? '$$' : '$'}`);
    }
    return html;
  } catch (e) {
    mathWarnings.push(`${currentSource}: ${e.message}`);
    return `<code class="tex-error">${escapeHtml(src)}</code>`;
  }
}

/** CSS for every glyph used across the build. Call after all pages render. */
export function mathStyleSheet() {
  return adaptor.textContent(chtml.styleSheet(mjdoc));
}

// ---------------------------------------------------------------- helpers
export function escapeHtml(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const FRONT = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n/;
/** Same tolerant key: value parser as scripts/rebuild-posts.py. */
export function frontmatter(text) {
  const m = text.match(FRONT);
  const data = {};
  if (!m) return { data, body: text };
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i < 0 || line.trim().startsWith('#')) continue;
    let v = line.slice(i + 1).trim();
    if (v.length >= 2 && v[0] === v.at(-1) && `"'`.includes(v[0])) v = v.slice(1, -1);
    data[line.slice(0, i).trim().toLowerCase()] = v;
  }
  return { data, body: text.slice(m[0].length) };
}

// Tokens survive marked untouched (letters and digits only).
const tok = (kind, i) => `MDTOK${kind}${i}X`;

/**
 * Pull code and math out of the source before Markdown sees it.
 * Code is stashed first so a `$` inside a code span stays literal
 * (the live site's MathJax skipped <code> for the same reason).
 */
function protect(md) {
  const code = [];
  const math = [];
  md = md.replace(/^(```|~~~)[^\n]*\n[\s\S]*?\n\1[ \t]*$/gm, (m) => tok('C', code.push(m) - 1));
  md = md.replace(/`[^`\n]+`/g, (m) => tok('C', code.push(m) - 1));
  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => tok('D', math.push(t) - 1));
  md = md.replace(/(^|[^\\$])\$([^$\n]+?)\$/g, (_, pre, t) => pre + tok('I', math.push(t) - 1));
  md = md.replace(/MDTOKC(\d+)X/g, (_, i) => code[+i]);
  return { md, math };
}

function restoreMath(html, math) {
  // A display formula alone in a paragraph should not sit inside <p>.
  html = html.replace(/<p>\s*MDTOKD(\d+)X\s*<\/p>/g, (_, i) => renderTex(math[+i], true));
  // Inline math with punctuation against it ("$M$," "($x$)") stays on one
  // line with it; browsers otherwise may start a line with the comma.
  html = html.replace(/([(\[‘“]*)MDTOKI(\d+)X([.,;:!?)\]’”]*)/g, (m, pre, i, post) =>
    (pre || post ? `<span class="nb">${pre}${renderTex(math[+i], false)}${post}</span>` : renderTex(math[+i], false)));
  return html.replace(/MDTOK([DI])(\d+)X/g, (_, kind, i) => renderTex(math[+i], kind === 'D'));
}

/**
 * Rows like `**Carbon**  |  **Hydrogen**  |  **Oxygen**`, one per paragraph,
 * are how latex_to_md.py writes a tabular. Markdown has no table there (no
 * |---| line), so the live site shows literal pipes. Two or more such rows
 * with the same cell count become a borderless grid.
 */
function pipeGrids(md) {
  // `[-6pt]` on its own line is a leftover of LaTeX's `\\[-6pt]` row spacing.
  md = md.replace(/^[ \t]*\[-?\d+(?:\.\d+)?(?:pt|em|ex|mm)\][ \t]*$/gm, '');
  // Whitespace-only lines count as blank, as they do in Markdown.
  const blocks = md.split(/\n(?:[ \t]*\n)+/);
  const isRow = (b) => !b.trim().includes('\n') && / \| /.test(b) && !/^\s*\|?\s*:?-{3,}/.test(b) && !b.trim().startsWith('<');
  const cells = (b) => b.trim().split(/\s+\|\s+/).map((c) => c.trim());
  const outBlocks = [];
  for (let i = 0; i < blocks.length; i++) {
    if (!isRow(blocks[i])) { outBlocks.push(blocks[i]); continue; }
    const n = cells(blocks[i]).length;
    let j = i;
    while (j + 1 < blocks.length && isRow(blocks[j + 1]) && cells(blocks[j + 1]).length === n) j++;
    if (j === i || n < 2) { outBlocks.push(blocks[i]); continue; }
    const rows = blocks.slice(i, j + 1).map((b) =>
      '<tr>' + cells(b).map((c) => `<td>${marked.parseInline(c)}</td>`).join('') + '</tr>');
    outBlocks.push(`<div class="grid-wrap"><table class="grid">${rows.join('')}</table></div>`);
    i = j;
  }
  return outBlocks.join('\n\n');
}

/** Blog posts and plain pages. */
export function renderMarkdown(src, { grids = false } = {}) {
  const { body } = frontmatter(src);
  let { md, math } = protect(body);
  if (grids) md = pipeGrids(md);
  return addHeadingIds(restoreMath(marked.parse(md), math));
}

// ---------------------------------------------------------------- notes
// Containers:  :::definition [Title] … :::   (nestable; a bare ::: closes the
// innermost). The live site matched these with a chain of regexes, which
// dropped titles on everything but :::example (":::definition Valency"
// rendered as literal text). A stack handles nesting and titles uniformly.
const KINDS = {
  definition: { label: 'Definition', numbered: true },
  theorem: { label: 'Theorem', numbered: true },
  proposition: { label: 'Proposition', numbered: true },
  lemma: { label: 'Lemma', numbered: true },
  corollary: { label: 'Corollary', numbered: true },
  example: { label: 'Example', numbered: true },
  exercise: { label: 'Exercise', numbered: true },
  question: { label: 'Question', numbered: true },
  remark: { label: 'Remark', numbered: false },
  note: { label: 'Note', numbered: false },
  proof: { label: 'Proof', numbered: false },
  solution: { label: 'Solution', numbered: false },
  lede: { label: '', numbered: false },
};

/**
 * @param {string} src   Markdown with ::: containers
 * @param {object} opts  { section: '2.1' } numbers boxes 2.1.1, 2.1.2, … in reading order
 *
 * A box may carry its own number, `:::definition{2.4.2} Title`, as the
 * notes generated from a LaTeX book do (scripts/book-to-notes.py); those
 * are used as written and never recounted.
 */
export function renderNotes(src, { section = '' } = {}) {
  const { body } = frontmatter(src);
  const { md, math } = protect(body);
  const boxes = [];
  let counter = 0;
  const stack = [{ kind: 'root', lines: [] }];
  const OPEN = /^:::([a-z]+)(?:\{([^}]*)\})?[ \t]*(.*)$/;

  const boxHtml = (f, inner) => {
    const k = KINDS[f.kind];
    if (f.kind === 'solution') {
      return `<details class="solution"><summary>Show solution</summary>${inner}</details>`;
    }
    if (f.kind === 'lede') return `<div class="lede">${inner}</div>`;
    const num = f.number ? ` ${f.number}` : '';
    let head;
    if (f.kind === 'proof' && f.title) {
      // "Proof of Sylow's First Theorem", "Proof 2 (Gram–Schmidt)", or a topic: "Proof (Irreducibility of V)"
      const t = marked.parseInline(f.title);
      head = `<span class="box-label">${/^proofs?\b/i.test(f.title) ? t : `Proof (${t})`}.</span> `;
    } else {
      const title = f.title ? ` <span class="box-title">(${marked.parseInline(f.title)})</span>` : '';
      head = `<span class="box-label">${k.label}${num}${title}.</span> `;
    }
    // Run the label into the first paragraph, as a printed textbook does.
    let html = /^\s*<p>/.test(inner) ? inner.replace(/^\s*<p>/, `<p>${head}`) : `<p>${head}</p>${inner}`;
    if (f.kind === 'proof') {
      html = /<\/p>\s*$/.test(html)
        ? html.replace(/<\/p>\s*$/, ' <span class="qed" aria-label="end of proof">∎</span></p>')
        : html + '<p class="qed-line"><span class="qed" aria-label="end of proof">∎</span></p>';
    }
    const id = f.number ? ` id="${f.kind}-${f.number.replace(/\./g, '-')}"` : '';
    return `<div class="box box-${f.kind}"${id}>${html}</div>`;
  };
  const close = () => {
    const f = stack.pop();
    const inner = marked.parse(pipeGrids(f.lines.join('\n')));
    boxes.push(boxHtml(f, inner));
    stack.at(-1).lines.push('', tok('B', boxes.length - 1), '');
  };

  for (const line of md.split('\n')) {
    const open = line.match(OPEN);
    if (open && KINDS[open[1]]) {
      const frame = { kind: open[1], title: open[3].trim(), lines: [] };
      if (open[2]) frame.number = open[2].trim();
      else if (KINDS[open[1]].numbered && section) frame.number = `${section}.${++counter}`;
      stack.push(frame);
      continue;
    }
    if (/^:::\s*$/.test(line) && stack.length > 1) { close(); continue; }
    stack.at(-1).lines.push(line);
  }
  while (stack.length > 1) close();

  const restoreBoxes = (h) => h
    .replace(/<p>\s*MDTOKB(\d+)X\s*<\/p>/g, (_, i) => restoreBoxes(boxes[+i]))
    .replace(/MDTOKB(\d+)X/g, (_, i) => restoreBoxes(boxes[+i]));
  let html = addHeadingIds(restoreMath(restoreBoxes(marked.parse(pipeGrids(stack[0].lines.join('\n')))), math));
  // `<!-- list:paren-roman -->` before a list: LaTeX's enumerate[(i)] labels.
  html = html.replace(/<!-- list:([a-z-]+) -->\s*<ol>/g, '<ol class="$1">');
  return { html, headings: headingsOf(html) };
}

// ---------------------------------------------------------------- verse
/**
 * A poem: every source line is a line of verse, a blank line is a stanza
 * break, leading spaces are indentation (two spaces = 1em), and inline
 * Markdown (*italic*, **bold**) works within a line. Nothing is joined or
 * reflowed. Every fifth line carries its number for the margin.
 */
export function renderVerse(src) {
  const { data, body } = frontmatter(src);
  const text = body.replace(/\r/g, '').replace(/^\s*\n/, '').replace(/\s+$/, '');
  let n = 0;
  let first = '';
  const stanzas = text ? text.split(/\n[ \t]*\n/) : [];
  const html = stanzas.map((st) => '<p class="stanza">' + st.split('\n').map((line) => {
    const lead = line.match(/^[ \t]*/)[0].replace(/\t/g, '    ').length;
    const content = line.trim();
    n++;
    if (!first) first = plainText(marked.parseInline(content));
    const style = lead ? ` style="--indent:${(lead / 2).toFixed(1).replace(/\.0$/, '')}em"` : '';
    const num = n % 5 === 0 ? ` data-n="${n}"` : '';
    return `<span class="l"${style}${num}>${marked.parseInline(content) || '&nbsp;'}</span>`;
  }).join('\n') + '</p>').join('\n');
  return { data, html, lines: n, firstLine: first };
}

/** A one-line title that may contain $…$ math and *emphasis*, as HTML. */
export function renderTitle(src = '') {
  if (!/[$*_`]/.test(src)) return src;
  const { md, math } = protect(String(src));
  return restoreMath(marked.parseInline(md), math);
}

/**
 * The same title as plain text, for <title>, meta descriptions and search:
 * "$\mathrm{SL}_2(\ZZ)$ and $S_5$" → "SL₂(ℤ) and S₅".
 */
const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', n: 'ₙ', k: 'ₖ', i: 'ᵢ', j: 'ⱼ', p: 'ₚ' };
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', n: 'ⁿ', '-': '⁻', '*': '*' };
const SYM = {
  ZZ: 'ℤ', QQ: 'ℚ', RR: 'ℝ', CC: 'ℂ', NN: 'ℕ', FF: '𝔽', HH: 'ℍ', supset: '⊃', subset: '⊂', subseteq: '⊆',
  times: '×', otimes: '⊗', oplus: '⊕', to: '→', cong: '≅', le: '≤', leq: '≤', ge: '≥', geq: '≥', infty: '∞',
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', lambda: 'λ', mu: 'μ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ',
  phi: 'φ', varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω', Gamma: 'Γ', Delta: 'Δ', Lambda: 'Λ', Sigma: 'Σ', Omega: 'Ω',
  in: '∈', cdot: '·', ldots: '…', cdots: '⋯', mid: '|', ast: '∗', star: '⋆', rtimes: '⋊', ltimes: '⋉',
};
export function plainTitle(src = '') {
  return String(src).replace(/\$([^$]+)\$/g, (_, m) => {
    let t = m
      .replace(/\\(?:mathrm|operatorname|mathbf|mathit|mathsf|text|textrm)\{([^{}]*)\}/g, '$1')
      .replace(/\\mathfrak\{([^{}]*)\}/g, '$1')
      .replace(/\\mathbb\{([A-Z])\}/g, (_, L) => SYM[L + L] || L)
      .replace(/\\([A-Za-z]+)/g, (_, c) => (c in SYM ? SYM[c] : c in MACROS && typeof MACROS[c] === 'string' && /^\\operatorname\{/.test(MACROS[c]) ? MACROS[c].slice(14, -1) : c))
      .replace(/_\{([^{}]*)\}|_(.)/g, (_, a, b) => [...(a ?? b)].map((ch) => SUB[ch] ?? ch).join(''))
      .replace(/\^\{([^{}]*)\}|\^(.)/g, (_, a, b) => [...(a ?? b)].map((ch) => SUP[ch] ?? ch).join(''))
      .replace(/[{}]/g, '').replace(/\\[,;! ]/g, ' ');
    return t.replace(/\s+/g, ' ').trim();
  }).replace(/[*_`]/g, '');
}

/** Give h2/h3 ids (for links and the search index). */
export function addHeadingIds(html) {
  const seen = new Map();
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (m, level, inner) => {
    let id = slugify(inner.replace(/<mjx-container[\s\S]*?<\/mjx-container>/g, '').replace(/<[^>]+>/g, '')) || 'section';
    const n = seen.get(id) || 0;
    seen.set(id, n + 1);
    if (n) id += '-' + n;
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
}
export function headingsOf(html) {
  const out = [];
  html.replace(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g, (_, level, id, inner) => {
    out.push({ level: +level, id, text: plainText(inner) });
  });
  return out;
}
export function slugify(s) {
  return String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
export function plainText(html) {
  return html.replace(/<mjx-container[\s\S]*?<\/mjx-container>/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
}
