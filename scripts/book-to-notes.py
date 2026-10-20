#!/usr/bin/env python3
"""
book-to-notes.py: turn a LaTeX lecture book into site notes.

    python3 scripts/book-to-notes.py ~/Documents/university/<book folder> \\
        --course math-55a [--pdf path/to/book.pdf]

Reads master.tex (for the order of \\input{lecture_XX}) and each lecture
file, and writes, for the course folder notes/<course>/:

    <section-slug>.md      one page per \\section (plus an N.0 page when a
                           lecture has numbered material before its first
                           \\section, as the PDF numbers it N.0.k)
    course.json            chapters and sections; other keys you add by
                           hand (title, description, book, sectionTitles)
                           are kept when the script runs again
    figures/src/*.tex      every tikzpicture / tikzcd, for
                           scripts/book-figures.py to draw

Numbering follows the PDF exactly: definitions, theorems, propositions,
lemmas, corollaries, examples and exercises each count separately within a
section (Definition 2.4.2, Proposition 2.4.3), questions count within a
lecture (Question 1, 2, ...). The numbers are written into the Markdown
(:::definition{2.4.2} Title) so the site never has to recount.

Edit the TeX and run this again; the generated .md files say so at the top.
Standard library only.
"""

import argparse
import json
import os
import re
import shutil
import sys
import unicodedata

# ---------------------------------------------------------------- config
BOXES = {
    # macro: (kind, takes a title argument)
    'dfn': ('definition', True),
    'thm': ('theorem', True),
    'mprop': ('proposition', True),
    'mlemma': ('lemma', True),
    'cor': ('corollary', True),
    'ex': ('example', True),
    'mer': ('exercise', True),
    'qs': ('question', True),
    'pf': ('proof', True),
    'nt': ('note', False),
}
SECTION_COUNTED = {'definition', 'theorem', 'proposition', 'lemma', 'corollary', 'example', 'exercise'}
LIST_STYLES = {'(1)': 'paren-decimal', '(i)': 'paren-roman', '(a)': 'paren-alpha',
               '(A)': 'paren-upper-alpha', '(I)': 'paren-upper-roman',
               'i.': 'lower-roman', 'a.': 'lower-alpha', 'a)': 'alpha-paren'}

# Text-mode commands that produce a fixed string.
SYMBOLS = {
    'ldots': '…', 'dots': '…', 'textellipsis': '…', 'S': '§', 'P': '¶', 'checkmark': '✓',
    'textasciitilde': '~', 'textbackslash': '\\\\', 'textendash': '–', 'textemdash': '—',
    'ss': 'ß', 'ae': 'æ', 'oe': 'œ', 'AE': 'Æ', 'OE': 'Œ', 'o': 'ø', 'O': 'Ø', 'aa': 'å',
    'quad': '\u2003', 'qquad': '\u2003\u2003', 'enspace': '\u2002', 'LaTeX': 'LaTeX', 'TeX': 'TeX',
}
# Commands that vanish in running text (layout, spacing, size).
DROP = {'qedhere', 'pagebreak', 'newpage', 'clearpage', 'noindent', 'indent', 'hfill', 'vfill',
        'medskip', 'bigskip', 'smallskip', 'centering', 'small', 'footnotesize', 'tiny', 'scriptsize',
        'large', 'Large', 'LARGE', 'huge', 'Huge', 'normalsize', 'par', 'linebreak', 'nolinebreak',
        'protect', 'relax', 'leavevmode', 'maketitle', 'tableofcontents', 'bfseries', 'itshape',
        'normalfont', 'rmfamily', 'sffamily', 'ttfamily', 'selectfont', 'displaystyle'}
# Commands whose arguments are dropped entirely.
DROP_WITH_ARGS = {'label': 1, 'vspace': 1, 'hspace': 1, 'addcontentsline': 3, 'pdfbookmark': 2,
                  'course': 1, 'input': 1, 'include': 1, 'setlength': 2, 'phantomsection': 0}
ACCENTS = {"'": '\u0301', '`': '\u0300', '^': '\u0302', '"': '\u0308', '~': '\u0303',
           '=': '\u0304', '.': '\u0307', 'c': '\u0327', 'v': '\u030c', 'u': '\u0306', 'H': '\u030b'}

warnings = []


def warn(msg):
    warnings.append(msg)


# ---------------------------------------------------------------- scanning
def strip_comments(s):
    """Remove % comments the way TeX does (the newline goes too)."""
    out = []
    for line in s.split('\n'):
        m = re.search(r'(?<!\\)%', line)
        if m:
            out.append(line[:m.start()])
            out.append('\x00JOIN\x00')
        else:
            out.append(line)
            out.append('\n')
    s = ''.join(out)
    # A comment eats its newline; a line that was only a comment disappears.
    s = re.sub(r'\x00JOIN\x00[ \t]*', '', s)
    return s


def read_group(s, i):
    """s[i] == '{'. Return (content, index after the closing brace)."""
    assert s[i] == '{', s[i:i + 30]
    depth = 0
    j = i
    while j < len(s):
        c = s[j]
        if c == '\\':
            j += 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
        j += 1
    raise ValueError('unbalanced braces near: ' + s[i:i + 60])


def read_optarg(s, i):
    """If s[i:] starts (after spaces) with [ ... ], return (content, j); else (None, i)."""
    j = i
    while j < len(s) and s[j] in ' \t':
        j += 1
    if j < len(s) and s[j] == '[':
        depth = 0
        k = j
        while k < len(s):
            c = s[k]
            if c == '\\':
                k += 2
                continue
            if c in '[{':
                depth += 1
            elif c in ']}':
                depth -= 1
                if depth == 0:
                    return s[j + 1:k], k + 1
            k += 1
    return None, i


def skip_space(s, i, newlines=True):
    while i < len(s) and (s[i] in ' \t' or (newlines and s[i] == '\n')):
        i += 1
    return i


def read_arg(s, i):
    """Read one mandatory argument (braced group or single token)."""
    i = skip_space(s, i)
    if i >= len(s):
        return '', i
    if s[i] == '{':
        return read_group(s, i)
    if s[i] == '\\':
        m = re.match(r'\\([A-Za-z]+|.)', s[i:])
        return m.group(0), i + len(m.group(0))
    return s[i], i + 1


def read_cmd(s, i):
    """s[i] == '\\'. Return (name, index after name)."""
    m = re.match(r'\\([A-Za-z]+\*?|.)', s[i:])
    if not m:
        return '', i + 1
    name = m.group(1)
    j = i + len(m.group(0))
    return name, j


def find_end(s, i, env):
    """Index of the matching \\end{env} starting the search at i (handles nesting)."""
    depth = 1
    pat = re.compile(r'\\(begin|end)\{' + re.escape(env) + r'\}')
    for m in pat.finditer(s, i):
        depth += 1 if m.group(1) == 'begin' else -1
        if depth == 0:
            return m.start(), m.end()
    raise ValueError(f'no \\end{{{env}}}')


def find_math_close(s, i, close):
    """Find the closing delimiter of math opened just before i."""
    j = i
    while j < len(s):
        if s.startswith(close, j):
            return j
        if s[j] == '\\':
            if s.startswith(close, j):
                return j
            j += 2
            continue
        j += 1
    raise ValueError(f'unclosed math {close!r} near ' + s[i - 10:i + 50])


def split_top(s, sep_regex):
    """Split s on a regex, but only at brace depth 0 and outside environments."""
    parts, depth, last, j = [], 0, 0, 0
    env_depth = 0
    pat = re.compile(sep_regex)
    while j < len(s):
        c = s[j]
        if c == '\\':
            if s.startswith('\\begin{', j):
                env_depth += 1
            elif s.startswith('\\end{', j):
                env_depth -= 1
            elif depth == 0 and env_depth == 0:
                m = pat.match(s, j)
                if m:
                    parts.append(s[last:j])
                    last = m.end()
                    j = m.end()
                    continue
            j += 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
        elif depth == 0 and env_depth == 0 and c in '&':
            m = pat.match(s, j)
            if m:
                parts.append(s[last:j])
                last = m.end()
                j = m.end()
                continue
        j += 1
    parts.append(s[last:])
    return parts


# ---------------------------------------------------------------- slugs
def slugify(t, maxwords=8):
    t = re.sub(r'\$[^$]*\$', lambda m: math_words(m.group(0)), t)
    t = re.sub(r'[–—]', ' ', t)
    t = unicodedata.normalize('NFKD', t).encode('ascii', 'ignore').decode()
    t = re.sub(r"['’]", '', t.lower())
    words = re.findall(r'[a-z0-9]+', t)
    return '-'.join(words[:maxwords])


def math_words(m):
    m = m.strip('$')
    m = re.sub(r'\\(mathrm|operatorname|mathbf|mathcal|mathbb|text)\{([^}]*)\}', r'\2', m)
    m = re.sub(r'\\([A-Za-z]+)', lambda x: {'ZZ': 'Z', 'QQ': 'Q', 'RR': 'R', 'CC': 'C', 'NN': 'N'}.get(x.group(1), x.group(1)), m)
    return ' ' + re.sub(r'[^A-Za-z0-9]+', ' ', m) + ' '


# ---------------------------------------------------------------- converter
class Book:
    def __init__(self, course):
        self.course = course
        self.figures = []          # (name, env, source)
        self.items = []            # numbered boxes, for checking against the PDF

    # --- state set per lecture/section
    def start_lecture(self, n, src_name):
        self.chapter = n
        self.src_name = src_name
        self.questions = 0
        self.fig_in_chapter = 0
        self.start_section('0')

    def start_section(self, sec):
        self.section = sec
        self.counters = {}

    # --- numbering
    def number(self, kind):
        if kind == 'question':
            self.questions += 1
            return str(self.questions)
        if kind in SECTION_COUNTED:
            self.counters[kind] = self.counters.get(kind, 0) + 1
            return f'{self.chapter}.{self.section}.{self.counters[kind]}'
        return ''

    # ============================================================ blocks
    def blocks(self, s):
        """Convert text-mode TeX to a list of Markdown block strings."""
        out = []
        para = []

        def flush():
            t = ''.join(para)
            para.clear()
            t = finish_inline(t)
            if t:
                out.append(t)

        i = 0
        n = len(s)
        while i < n:
            c = s[i]
            if c == '\n':
                k = skip_space(s, i + 1, newlines=False)
                if k < n and s[k] == '\n':
                    flush()
                    i = k + 1
                    continue
                para.append(' ')
                i += 1
                continue
            if c == '\\':
                name, j = read_cmd(s, i)
                if name == 'begin':
                    env, j = read_group(s, j)
                    end_start, end_end = find_end(s, j, env)
                    body = s[j:end_start]
                    res = self.environment(env, body, s, j, end_end)
                    if res is None:
                        i = end_end
                        continue
                    kind, value, i = res
                    if kind == 'inline':
                        para.append(value)
                    else:
                        flush()
                        out.extend(value)
                    continue
                if name in BOXES:
                    flush()
                    md, i = self.box(name, s, j)
                    out.append(md)
                    continue
                if name in ('subsection', 'subsection*', 'subsubsection', 'subsubsection*'):
                    title, i = read_arg(s, j)
                    flush()
                    out.append(self.heading(name, title))
                    continue
                if name == '(':
                    k = find_math_close(s, j, '\\)')
                    para.append(inline_math(s[j:k]))
                    i = k + 2
                    continue
                if name == '[':
                    k = find_math_close(s, j, '\\]')
                    body = s[j:k]
                    i = k + 2
                    if '\\begin{tikzcd}' in body:
                        flush()
                        out.append(self.figure('tikzcd', body.strip()))
                        continue
                    para.append(display_math(body))
                    continue
                if name == 'par':
                    flush()
                    i = j
                    continue
                text, i = self.inline_cmd(name, s, j)
                para.append(text)
                continue
            if c == '$':
                if s.startswith('$$', i):
                    k = s.index('$$', i + 2)
                    para.append(display_math(s[i + 2:k]))
                    i = k + 2
                else:
                    k = find_math_close(s, i + 1, '$')
                    para.append(inline_math(s[i + 1:k]))
                    i = k + 1
                continue
            if c == '{':
                inner, i = read_group(s, i)
                para.append(self.inline(inner))
                continue
            text, i = self.inline_char(s, i)
            para.append(text)
        flush()
        return out

    def md(self, s):
        """Convert a chunk of text-mode TeX to Markdown (blocks joined)."""
        return '\n\n'.join(self.blocks(s))

    # ============================================================ inline
    def inline(self, s):
        """Text-mode TeX known to be inline (titles, groups, table cells)."""
        parts = []
        i, n = 0, len(s)
        while i < n:
            c = s[i]
            if c == '\\':
                name, j = read_cmd(s, i)
                if name == '(':
                    k = find_math_close(s, j, '\\)')
                    parts.append(inline_math(s[j:k]))
                    i = k + 2
                    continue
                if name == '[':
                    k = find_math_close(s, j, '\\]')
                    parts.append(display_math(s[j:k]))
                    i = k + 2
                    continue
                if name == 'begin':
                    env, j2 = read_group(s, j)
                    e0, e1 = find_end(s, j2, env)
                    if env in ('align*', 'align', 'equation*', 'equation', 'gather*', 'gather'):
                        parts.append(display_math(f'\\begin{{{env}}}{s[j2:e0]}\\end{{{env}}}'))
                    else:
                        parts.append(' '.join(self.blocks(s[i:e1])))
                    i = e1
                    continue
                text, i = self.inline_cmd(name, s, j)
                parts.append(text)
                continue
            if c == '$':
                if s.startswith('$$', i):
                    k = s.index('$$', i + 2)
                    parts.append(display_math(s[i + 2:k]))
                    i = k + 2
                else:
                    k = find_math_close(s, i + 1, '$')
                    parts.append(inline_math(s[i + 1:k]))
                    i = k + 1
                continue
            if c == '{':
                inner, i = read_group(s, i)
                parts.append(self.inline(inner))
                continue
            if c == '\n':
                parts.append(' ')
                i += 1
                continue
            text, i = self.inline_char(s, i)
            parts.append(text)
        return ''.join(parts)

    def inline_char(self, s, i):
        c = s[i]
        if c == '~':
            return '\u00a0', i + 1
        if c == '-':
            if s.startswith('---', i):
                return '—', i + 3
            if s.startswith('--', i):
                return '–', i + 2
            return '-', i + 1
        if c == '`':
            if s.startswith('``', i):
                return '“', i + 2
            return '‘', i + 1
        if c == "'":
            if s.startswith("''", i):
                return '”', i + 2
            return '’', i + 1
        if c == '"':
            return '”', i + 1
        if c == '&':
            return '&amp;', i + 1
        if c in '*_[]<>#|':
            return '\x00ESC' + c + '\x00', i + 1
        if c == '}':
            return '', i + 1
        return c, i + 1

    def inline_cmd(self, name, s, j):
        """Handle a text-mode command; return (markdown, index after it)."""
        if name in ('textbf', 'textit', 'emph', 'underline', 'text', 'mbox', 'textrm', 'textsf',
                    'textnormal', 'textup', 'textsl', 'textsc', 'texttt'):
            arg, j = read_arg(s, j)
            inner = self.inline(arg) if not arg.startswith('\\') or arg in ('\\{', '\\}') else self.inline(arg)
            return wrap(name, inner), j
        if name == 'texorpdfstring':
            a, j = read_arg(s, j)
            _, j = read_arg(s, j)
            return self.inline(a), j
        if name in SYMBOLS:
            return SYMBOLS[name], swallow_braces(s, j)
        if name in DROP:
            return '', swallow_braces(s, j) if name not in ('par',) else j
        if name in DROP_WITH_ARGS:
            for _ in range(DROP_WITH_ARGS[name]):
                _, j = read_arg(s, j)
            return '', j
        if name == '\\':
            _, j = read_optarg(s, j)
            return '\x00BR\x00', j
        if name in (',', ';', ':', '>'):
            return '\u2009', j
        if name in (' ', '\n'):
            return ' ', j
        if name in ('!', '/', '@', '-'):
            return '', j
        if name in '{}':
            return name, j
        if name in '&%$#_':
            return {'&': '&amp;', '#': '\x00ESC#\x00', '_': '\x00ESC_\x00', '$': '&#36;'}.get(name, name), j
        if name in ACCENTS:
            arg, j = read_arg(s, j)
            base = self.inline(arg) if arg else ''
            if base:
                return unicodedata.normalize('NFC', base[0] + ACCENTS[name] + base[1:]), j
            return '', j
        if name == 'i':
            return 'ı', j
        if name == 'today':
            return self.today, j
        if name in ('cite', 'ref', 'eqref', 'cref', 'Cref', 'autoref'):
            arg, j = read_arg(s, j)
            warn(f'{self.src_name}: \\{name}{{{arg}}} has no target on the site')
            return arg, j
        if name == 'href':
            url, j = read_arg(s, j)
            txt, j = read_arg(s, j)
            return f'[{self.inline(txt)}]({url})', j
        if name == 'url':
            url, j = read_arg(s, j)
            return f'<{url}>', j
        if name in ('lecture', 'section', 'part', 'part*', 'section*'):
            warn(f'{self.src_name}: unexpected \\{name} inside a block')
            arg, j = read_arg(s, j)
            return self.inline(arg), j
        warn(f'{self.src_name}: unknown text command \\{name}')
        return '', j

    # ============================================================ environments
    def environment(self, env, body, s, j, end):
        """Return (kind, value, next index) with kind 'inline' or 'blocks', or None."""
        if env in ('itemize', 'enumerate', 'description'):
            opt, k = read_optarg(body, 0)
            return 'blocks', [self.list_md(env, opt, body[k:] if opt is not None else body)], end
        if env == 'center':
            inner = self.blocks(body)
            if len(inner) == 1 and (inner[0].startswith('![') or inner[0].startswith('<div class="table-wrap">')):
                return 'blocks', inner, end
            return 'blocks', ['<div class="center">', *inner, '</div>'], end
        if env == 'tabular':
            spec, k = read_arg(body, 0)
            return 'blocks', [self.table(spec, body[k:])], end
        if env in ('tikzpicture', 'tikzcd'):
            return 'blocks', [self.figure(env, f'\\begin{{{env}}}{body}\\end{{{env}}}')], end
        if env in ('align*', 'align', 'equation*', 'equation', 'gather*', 'gather', 'multline*'):
            return 'inline', display_math(f'\\begin{{{env}}}{body}\\end{{{env}}}'), end
        if env == 'solution':
            return 'blocks', [self.solution(body)], end
        if env in ('quote', 'quotation'):
            return 'blocks', ['\n'.join('> ' + l if l else '>' for l in self.md(body).split('\n'))], end
        if env == 'document':
            return 'blocks', self.blocks(body), end
        warn(f'{self.src_name}: unknown environment {env}; kept its text')
        return 'blocks', self.blocks(body), end

    def solution(self, body):
        inner = self.md(body)
        return f':::solution\n{inner}\n:::'

    # ============================================================ boxes
    def box(self, name, s, j):
        kind, titled = BOXES[name]
        title = ''
        if titled:
            title_tex, j = read_arg(s, j)
            title = finish_inline(self.inline(title_tex)).strip()
        content_tex, j = read_arg(s, j)
        num = self.number(kind)
        content = self.md(content_tex)
        if kind == 'proof':
            title = proof_title(title, content)
            if title.startswith('\x00SUB'):
                sub, content = title[4:].split('\x00', 1)
                title = sub
        # A solution environment right after a question or exercise belongs to it.
        nested = ''
        if kind in ('question', 'exercise'):
            k = skip_space(s, j)
            if s.startswith('\\begin{solution}', k):
                e0, e1 = find_end(s, k + len('\\begin{solution}'), 'solution')
                nested = '\n\n' + self.solution(s[k + len('\\begin{solution}'):e0])
                j = e1
        if num:
            self.items.append({'kind': kind, 'number': num, 'title': plain(title),
                               'section': f'{self.chapter}.{self.section}'})
        head = f':::{kind}' + (f'{{{num}}}' if num else '') + (f' {title}' if title and kind != 'note' else '')
        return f'{head}\n{content}{nested}\n:::', j

    def heading(self, name, title_tex):
        title = finish_inline(self.inline(title_tex)).strip()
        if name == 'subsection':
            self.subsection = getattr(self, 'subsection', 0) + 1
            return f'## <span class="num">{self.chapter}.{self.section}.{self.subsection}</span> {title}'
        if name == 'subsubsection':
            return f'### {title}'
        return f'## {title}'

    # ============================================================ lists
    def list_md(self, env, opt, body):
        ordered = env == 'enumerate'
        style = LIST_STYLES.get((opt or '').strip()) if opt else None
        if opt and not style and ordered:
            warn(f'{self.src_name}: enumerate label {opt!r} shown as 1. 2. 3.')
        items = split_items(body)
        lines = []
        if style:
            lines.append(f'<!-- list:{style} -->')
            lines.append('')
        for idx, (label, item) in enumerate(items, 1):
            marker = f'{idx}. ' if ordered else '- '
            blocks = self.blocks(item)
            if label is not None and env == 'description':
                blocks = [f'**{finish_inline(self.inline(label))}** ' + (blocks[0] if blocks else '')] + blocks[1:]
            if not blocks:
                blocks = ['']
            pad = ' ' * len(marker)
            first = True
            for b in blocks:
                blines = b.split('\n')
                if first:
                    lines.append(marker + blines[0])
                    lines.extend((pad + l) if l else '' for l in blines[1:])
                    first = False
                else:
                    lines.append('')
                    lines.extend((pad + l) if l else '' for l in blines)
        return '\n'.join(lines)

    # ============================================================ tables
    def table(self, spec, body):
        cols = re.sub(r'@\{[^}]*\}|p\{[^}]*\}|\s', '', spec)
        stub = bool(re.match(r'^[lcr]\|', cols))
        aligns = [c for c in cols if c in 'lcr']
        rows, head_rows = [], None
        chunks = re.split(r'\\\\(?:\[[^\]]*\])?', body)
        for ch in chunks:
            if '\\hline' in ch:
                before, _, after = ch.partition('\\hline')
                if before.strip():
                    rows.append(before)
                if head_rows is None:
                    head_rows = len(rows)
                ch = after.replace('\\hline', '')
            if ch.strip():
                rows.append(ch)
        html = ['<div class="table-wrap"><table class="tex-table' + (' has-stub' if stub else '') + '">']

        def row_html(r, header):
            cells = split_top(r, r'&')
            out = []
            for ci, cell in enumerate(cells):
                txt = finish_inline(self.inline(cell.strip()), html=True)
                align = aligns[ci] if ci < len(aligns) else 'c'
                cls = {'l': 'l', 'c': 'c', 'r': 'r'}[align]
                tag = 'th' if header or (stub and ci == 0) else 'td'
                scope = ' scope="col"' if header else (' scope="row"' if tag == 'th' else '')
                out.append(f'<{tag}{scope} class="{cls}">{txt}</{tag}>')
            return '<tr>' + ''.join(out) + '</tr>'

        if head_rows:
            html.append('<thead>' + ''.join(row_html(r, True) for r in rows[:head_rows]) + '</thead>')
        html.append('<tbody>' + ''.join(row_html(r, False) for r in rows[head_rows or 0:]) + '</tbody>')
        html.append('</table></div>')
        return ''.join(html)

    # ============================================================ figures
    def figure(self, env, src):
        self.fig_in_chapter += 1
        name = f'fig-{self.chapter}-{self.section}-{len([f for f in self.figures if f[3] == (self.chapter, self.section)]) + 1}'
        self.figures.append((name, env, src.strip(), (self.chapter, self.section)))
        return f'![{name}](/notes/{self.course}/figures/{name}.svg)'


# ---------------------------------------------------------------- helpers
def swallow_braces(s, j):
    """Eat an empty {} after a command like \\ldots{}."""
    if s.startswith('{}', j):
        return j + 2
    return j


def split_items(body):
    """Split a list body on top-level \\item; return [(optional label, text)]."""
    parts = split_top(body, r'\\item\b')
    items = []
    for p in parts[1:]:
        label, k = read_optarg(p, 0)
        items.append((label, p[k:] if label is not None else p))
    return items


def wrap(cmd, inner):
    if cmd in ('text', 'mbox', 'textrm', 'textsf', 'textnormal', 'textup'):
        return inner
    stripped = inner.strip()
    if not stripped:
        return inner
    lead = inner[:len(inner) - len(inner.lstrip())]
    trail = inner[len(inner.rstrip()):]
    tag = {'textbf': 'B', 'textit': 'I', 'emph': 'I', 'textsl': 'I', 'underline': 'U',
           'textsc': 'SC', 'texttt': 'TT'}[cmd]
    return f'{lead}\x00{tag}+\x00{stripped}\x00{tag}-\x00{trail}'


PUNCT = set('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~“”‘’–—…')


def finish_inline(t, html=False):
    """Resolve placeholders, collapse whitespace, pick safe emphasis markup."""
    t = re.sub(r'[ \t\n]+', ' ', t).strip()
    # emphasis: markdown where CommonMark will read it as intended, else HTML
    md_delim = {'B': '**', 'I': '*', 'BI': '***'}
    html_tag = {'B': 'strong', 'I': 'em', 'U': 'u', 'SC': 'span class="sc"', 'TT': 'code', 'BI': 'strong'}
    # \textbf{\emph{x}} and \emph{\textbf{x}} are one bold-italic run
    for _ in range(3):
        t = re.sub(r'\x00B\+\x00\x00I\+\x00((?:(?!\x00[BI][+-]\x00).)*?)\x00I-\x00\x00B-\x00', '\x00BI+\x00\\1\x00BI-\x00', t, flags=re.S)
        t = re.sub(r'\x00I\+\x00\x00B\+\x00((?:(?!\x00[BI][+-]\x00).)*?)\x00B-\x00\x00I-\x00', '\x00BI+\x00\\1\x00BI-\x00', t, flags=re.S)

    def visible(x):
        x = re.sub(r'\x00(?:BI|B|I|U|SC|TT)[+-]\x00', '', x)
        x = re.sub(r'\x00ESC(.)\x00', r'\1', x)
        x = re.sub(r'\x00MATH[ID]\d+\x00', 'M', x)
        return x.replace('\x00BR\x00', ' ')

    def resolve(m):
        tag, inner = m.group(1), m.group(2)
        before = visible(t_cur[:m.start()])[-1:] if m.start() else ''
        after = visible(t_cur[m.end():])[:1]
        inner_vis = visible(inner)
        use_md = (not html and tag in md_delim
                  and not (inner_vis[:1] in PUNCT and before.isalnum())
                  and not (inner_vis[-1:] in PUNCT and after.isalnum())
                  and before not in ('*',) and after not in ('*',))
        if use_md:
            return md_delim[tag] + inner + md_delim[tag]
        if tag == 'BI':
            return f'<strong><em>{inner}</em></strong>'
        name = html_tag[tag]
        return f'<{name}>{inner}</{name.split()[0]}>'

    pat = re.compile(r'\x00(BI|B|I|U|SC|TT)\+\x00((?:(?!\x00\1[+-]\x00).)*?)\x00\1-\x00', re.S)
    for _ in range(10):
        t_cur = t
        new = pat.sub(resolve, t)
        if new == t:
            break
        t = new
    t = t.replace('\x00BR\x00', '<br>')
    t = re.sub(r'\x00ESC(.)\x00', lambda m: {'<': '&lt;', '>': '&gt;'}.get(m.group(1), '\\' + m.group(1)) if not html
               else {'<': '&lt;', '>': '&gt;'}.get(m.group(1), m.group(1)), t)
    t = re.sub(r'\x00MATHI(\d+)\x00', lambda m: '$' + MATH[int(m.group(1))] + '$', t)
    t = re.sub(r'\x00MATHD(\d+)\x00', lambda m: '$$' + MATH[int(m.group(1))] + '$$', t)
    return t


MATH = []


def fix_math(m):
    m = re.sub(r'\\qedhere\b', '', m)
    m = re.sub(r'\\label\{[^}]*\}', '', m)
    return m


def inline_math(m):
    m = fix_math(m)
    m = re.sub(r'\s*\n\s*', ' ', m).strip()
    MATH.append(m)
    return f'\x00MATHI{len(MATH) - 1}\x00'


def display_math(m):
    m = fix_math(m).strip()
    m = re.sub(r'\\begin\{(align|gather|multline)\*?\}', lambda x: '\\begin{' + ('aligned' if x.group(1) == 'align' else 'gathered') + '}', m)
    m = re.sub(r'\\end\{(align|gather|multline)\*?\}', lambda x: '\\end{' + ('aligned' if x.group(1) == 'align' else 'gathered') + '}', m)
    m = re.sub(r'\\begin\{equation\*?\}|\\end\{equation\*?\}', '', m)
    # Keep the source lines, but no blank lines (they would end a Markdown paragraph).
    m = re.sub(r'\n[ \t]*\n+', '\n', m)
    MATH.append(m)
    return f'\x00MATHD{len(MATH) - 1}\x00'


def plain(md):
    t = re.sub(r'\$\$?([^$]+)\$\$?', r'\1', md)
    t = re.sub(r'<[^>]+>|\*+|\\', '', t)
    return t.strip()


def proof_title(title, content):
    """Label for a proof box. "Proof" alone may be followed by a one-line
    subtitle paragraph (\\pf{Proof}{Uniqueness of identity \\n\\n ...})."""
    if title and title != 'Proof':
        return title
    paras = content.split('\n\n')
    first = paras[0].strip()
    if (len(paras) > 1 and 0 < len(plain(first)) <= 80 and not re.search(r'[.:;?!,]$', plain(first))
            and not first.startswith(('(', '1.', '- ', ':::', '$$', '<', '**')) and '\n' not in first):
        rest = '\n\n'.join(paras[1:])
        sub = first
        if not re.match(r'(?i)proofs?\b', plain(sub)):
            sub = f'Proof ({sub})'
        return '\x00SUB' + sub + '\x00' + rest
    return ''


# ---------------------------------------------------------------- lectures
def lecture_parts(tex):
    """Split a lecture body into (intro, [(kind, title, body)]) at top level."""
    pieces = []
    pat = re.compile(r'\\(section|part)\*?\s*\{')
    pos, depth, i = 0, 0, 0
    marks = []
    while i < len(tex):
        c = tex[i]
        if c == '\\':
            m = pat.match(tex, i)
            if m and depth == 0:
                title, end = read_group(tex, m.end() - 1)
                marks.append((i, end, m.group(1), title))
                i = end
                continue
            i += 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
        i += 1
    intro = tex[:marks[0][0]] if marks else tex
    for k, (start, end, kind, title) in enumerate(marks):
        stop = marks[k + 1][0] if k + 1 < len(marks) else len(tex)
        pieces.append((kind, title, tex[end:stop]))
    return intro, pieces


def has_numbered(tex):
    return bool(re.search(r'\\(dfn|thm|mprop|mlemma|cor|ex|mer|qs|subsection)\b', tex))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('src', nargs='?', help='folder with master.tex and lecture_XX.tex (default: "source" in course.json "book")')
    ap.add_argument('--course', default='math-55a')
    ap.add_argument('--site', default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    ap.add_argument('--pdf', help='the compiled book, copied next to the notes for download')
    ap.add_argument('--keep-old', action='store_true', help='do not delete .md files no longer generated')
    ap.add_argument('--items', help='also write every numbered box (kind, number, title) to this JSON file')
    args = ap.parse_args()

    out_dir = os.path.join(args.site, 'notes', args.course)
    os.makedirs(out_dir, exist_ok=True)
    course_path = os.path.join(out_dir, 'course.json')
    old = json.load(open(course_path)) if os.path.exists(course_path) else {}
    src = args.src or old.get('book', {}).get('source')
    if not src:
        sys.exit('give the folder with master.tex, or set "book": {"source": "..."} in course.json')
    src = os.path.expanduser(src)
    old_slugs = {s['number']: (s['slug'], s['title']) for ch in old.get('chapters', []) for s in ch.get('sections', [])}
    section_titles = old.get('sectionTitles', {})

    master = strip_comments(open(os.path.join(src, 'master.tex'), encoding='utf-8').read())
    inputs = re.findall(r'\\input\{(lecture_[^}]+)\}', master)
    if not inputs:
        sys.exit('master.tex has no \\input{lecture_XX}')

    book = Book(args.course)
    book.today = old.get('book', {}).get('date', '')
    chapters, pages = [], []

    for inp in inputs:
        fname = inp if inp.endswith('.tex') else inp + '.tex'
        raw = open(os.path.join(src, fname), encoding='utf-8').read()
        tex = strip_comments(raw)
        m = re.search(r'\\begin\{document\}(.*)\\end\{document\}', tex, re.S)
        tex = m.group(1) if m else tex
        lm = re.search(r'\\lecture\s*\{(\d+)\}\s*\{', tex)
        if not lm:
            warn(f'{fname}: no \\lecture{{N}}{{Title}}; skipped')
            continue
        n = int(lm.group(1))
        title_tex, after = read_group(tex, lm.end() - 1)
        # The preamble defines \lecture with three arguments and ignores the
        # third, so TeX swallows whatever comes next: a paragraph break, or the
        # first character of the text (lecture 3's stray "." disappears this way).
        k = skip_space(tex, after, newlines=False)
        if tex.startswith('\n', k):
            k2 = skip_space(tex, k + 1, newlines=False)
            if not tex.startswith('\n', k2):
                _, after = read_arg(tex, k2)
        else:
            _, after = read_arg(tex, k)
        body = tex[after:]
        book.start_lecture(n, fname)
        ch_title = finish_inline(book.inline(title_tex)).strip()
        intro, parts = lecture_parts(body)
        sections = []
        part_label = None

        def emit(number, title, content_md, extra=None):
            prev = old_slugs.get(number)
            new_slug = f"{number.replace('.', '-')}-{slugify(title)}".strip('-')
            slug = prev[0] if prev and slugify(prev[1]).split('-')[:2] == slugify(title).split('-')[:2] else new_slug
            entry = {'number': number, 'slug': slug, 'title': title}
            if part_label:
                entry['part'] = part_label
            sections.append(entry)
            pages.append((slug, number, title, n, fname, content_md))

        # material before the first \section
        book.subsection = 0
        intro_md = ''
        if intro.strip():
            if has_numbered(intro):
                first_sub = re.match(r'\s*\\subsection\*?\s*\{', intro)
                title = section_titles.get(f'{n}.0')
                if not title and first_sub:
                    title = finish_inline(book.inline(read_group(intro, first_sub.end() - 1)[0])).strip()
                title = title or ch_title
                content = book.md(intro)
                emit(f'{n}.0', title, content)
            else:
                intro_md = book.md(intro)

        sec_no = 0
        for kind, title_tex, content_tex in parts:
            if kind == 'part':
                # \part*{I. Commutative Ring Theory} \addcontentsline{toc}{section}{Part I: ...}
                acl = re.search(r'\\addcontentsline\{[^}]*\}\{[^}]*\}\{((?:[^{}]|\{[^{}]*\})*)\}', content_tex)
                part_label = finish_inline(book.inline(acl.group(1) if acl else title_tex)).strip()
                if content_tex.strip() and re.sub(r'\\addcontentsline\{[^}]*\}\{[^}]*\}\{(?:[^{}]|\{[^{}]*\})*\}', '', content_tex).strip():
                    warn(f'{fname}: text between \\part and the next \\section was dropped')
                continue
            sec_no += 1
            number = f'{n}.{sec_no}'
            book.start_section(str(sec_no))
            book.subsection = 0
            title = section_titles.get(number) or finish_inline(book.inline(title_tex)).strip()
            content = book.md(content_tex)
            if sec_no == 1 and intro_md:
                content = f':::lede\n{intro_md}\n:::\n\n{content}'
            emit(number, title, content)

        chapters.append({'number': n, 'title': ch_title, 'sections': sections})

    # "Lecture 3" in bold → a link to that chapter's first page
    first_page = {ch['number']: ch['sections'][0]['slug'] for ch in chapters if ch['sections']}

    def link_lectures(md):
        return re.sub(r'\*\*Lecture (\d+)\*\*', lambda m: f'[**Lecture {m.group(1)}**](/notes/{args.course}/{first_page[int(m.group(1))]})'
                      if int(m.group(1)) in first_page else m.group(0), md)

    # ---- write
    written = set()
    for slug, number, title, chno, fname, content in pages:
        path = os.path.join(out_dir, slug + '.md')
        fm = (f'---\n# Generated by scripts/book-to-notes.py from {fname}. Edit the TeX and run it again.\n'
              f'course: {args.course}\nchapter: {chno}\nsection: {number}\ntitle: {title}\n---\n\n')
        text = fm + link_lectures(content).rstrip() + '\n'
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        written.add(slug + '.md')
    if not args.keep_old:
        for f in os.listdir(out_dir):
            if f.endswith('.md') and f not in written:
                os.remove(os.path.join(out_dir, f))
                print(f'removed {f} (no longer in the book)')

    course = {k: v for k, v in old.items() if k != 'chapters'}
    course.setdefault('slug', args.course)
    course['chapters'] = chapters
    with open(course_path, 'w', encoding='utf-8') as f:
        json.dump(course, f, indent=2, ensure_ascii=False)
        f.write('\n')

    # Figure sources; book-figures.py redraws only the ones whose source changed.
    fig_dir = os.path.join(out_dir, 'figures', 'src')
    os.makedirs(fig_dir, exist_ok=True)
    keep = set()
    for name, env, srcx, _ in book.figures:
        keep.add(name)
        path = os.path.join(fig_dir, name + '.tex')
        if not os.path.exists(path) or open(path, encoding='utf-8').read() != srcx + '\n':
            with open(path, 'w', encoding='utf-8') as f:
                f.write(srcx + '\n')
    for f in os.listdir(fig_dir):
        if f.endswith('.tex') and f[:-4] not in keep:
            os.remove(os.path.join(fig_dir, f))
            svg = os.path.join(out_dir, 'figures', f[:-4] + '.svg')
            if os.path.exists(svg):
                os.remove(svg)

    if args.pdf:
        dest = os.path.join(out_dir, course.get('book', {}).get('pdf') or 'book.pdf')
        shutil.copyfile(os.path.expanduser(args.pdf), dest)

    if args.items:
        with open(os.path.expanduser(args.items), 'w') as f:
            json.dump(book.items, f, indent=1, ensure_ascii=False)

    print(f'{len(chapters)} chapters, {len(pages)} pages, {len(book.items)} numbered items, {len(book.figures)} figures → notes/{args.course}/')
    if warnings:
        print(f'{len(warnings)} warnings:')
        for w in dict.fromkeys(warnings):
            print('  ! ' + w)


if __name__ == '__main__':
    main()
