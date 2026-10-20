#!/usr/bin/env python3
"""
book-figures.py: draw the TikZ figures of a LaTeX book as theme-aware SVG.

    python3 scripts/book-figures.py --course math-55a [--only fig-2-4-1]

Reads notes/<course>/figures/src/*.tex (written by book-to-notes.py), and
for each one compiles a standalone page with pdflatex, converts it with
pdftocairo, and writes notes/<course>/figures/<name>.svg.

The SVG is made for inlining (build.mjs puts it straight into the page):
  - colours become the site's CSS variables, so a figure follows the
    light/dark theme: black → var(--ink), white → var(--ground),
    gray → var(--muted), blue/red/green → var(--blue)/var(--red)/var(--green),
    and tints such as blue!15 → the same variable at low opacity;
  - ids are prefixed with the figure name, so several figures can share a page;
  - the size is in em (10 pt of TeX = 1em), so it scales with the text;
  - role="img" and a <title> from figures/figures.json describe it for
    screen readers.

Needs pdflatex (with tikz, tikz-cd and the braids library) and pdftocairo
(poppler: `brew install poppler` on macOS). Unchanged figures are skipped.
"""

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

PREAMBLE = r"""\documentclass[border=1.5pt]{standalone}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb,mathtools}
\usepackage{xcolor}
\usepackage{tikz,tikz-cd}
\usetikzlibrary{braids,calc,arrows.meta,positioning,intersections,angles,quotes,patterns,backgrounds}
\newcommand{\RR}{\mathbb{R}}\newcommand{\ZZ}{\mathbb{Z}}\newcommand{\QQ}{\mathbb{Q}}
\newcommand{\CC}{\mathbb{C}}\newcommand{\NN}{\mathbb{N}}
\newcommand{\id}{\mathrm{id}}\newcommand{\ol}{\overline}
\newcommand{\surjto}{\twoheadrightarrow}\newcommand{\injto}{\hookrightarrow}
\DeclareMathOperator{\Img}{Im}\DeclareMathOperator{\Ker}{Ker}
\begin{document}
"""

# Base colours TikZ figures use, mapped to theme variables.
BASES = {
    (0, 0, 1): 'var(--blue)', (1, 0, 0): 'var(--red)', (0, 1, 0): 'var(--green)',
    (0, 1, 1): 'var(--aqua)', (1, 0, 1): 'var(--purple)', (1, 1, 0): 'var(--yellow)',
    (1, 0.5, 0): 'var(--orange)', (0.75, 0.5, 0.25): 'var(--orange)', (0.5, 0, 0.5): 'var(--purple)',
}


def parse_rgb(v):
    m = re.match(r'rgb\(\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)', v)
    if m:
        return tuple(float(x) / 100 for x in m.groups())
    m = re.match(r'#([0-9a-fA-F]{6})$', v)
    if m:
        h = m.group(1)
        return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    return None


def theme_colour(v):
    """Return (css colour, opacity multiplier) for an SVG colour value."""
    rgb = parse_rgb(v)
    if rgb is None:
        return v, 1.0
    r, g, b = rgb
    if max(rgb) - min(rgb) < 0.02:           # greys
        if r < 0.25:
            return 'var(--ink)', 1.0
        if r > 0.97:
            return 'var(--ground)', 1.0
        if r > 0.8:
            return 'var(--rule-strong)', 1.0
        return 'var(--muted)', 1.0
    m = min(rgb)
    if m > 0.02 and max(rgb) > 0.98:          # a tint: X!p mixed with white
        p = 1 - m
        base = tuple((c - m) / p for c in rgb)
    else:
        p = 1.0
        base = rgb
    best = min(BASES, key=lambda k: sum((a - b) ** 2 for a, b in zip(k, base)))
    # Tints are pale on white; on a dark ground they need more weight to show.
    return BASES[best], (min(1.0, p * 1.8) if p < 1 else 1.0)


def themify(svg, name, alt):
    svg = re.sub(r'<\?xml[^>]*\?>\s*', '', svg)
    # ids → name-prefixed ids
    ids = set(re.findall(r'\bid="([^"]+)"', svg))
    for i in sorted(ids, key=len, reverse=True):
        new = f'{name}-{i}'
        svg = svg.replace(f'id="{i}"', f'id="{new}"').replace(f'"#{i}"', f'"#{new}"').replace(f'url(#{i})', f'url(#{new})')

    def tag(m):
        t = m.group(0)
        style = []
        for attr in ('fill', 'stroke'):
            am = re.search(rf'\s{attr}="([^"]+)"', t)
            if not am or am.group(1) in ('none', 'transparent') or am.group(1).startswith('url('):
                continue
            colour, k = theme_colour(am.group(1))
            t = t.replace(am.group(0), '')
            style.append(f'{attr}:{colour}')
            om = re.search(rf'\s{attr}-opacity="([\d.]+)"', t)
            op = float(om.group(1)) if om else 1.0
            if om:
                t = t.replace(om.group(0), '')
            if op * k < 0.999:
                style.append(f'{attr}-opacity:{op * k:.3g}')
        if style:
            t = re.sub(r'\s*(/?>)$', f' style="{";".join(style)}"\\1', t)
        return t

    svg = re.sub(r'<(?!svg\b|/)[a-zA-Z]+\b[^>]*>', tag, svg)

    m = re.search(r'<svg\b[^>]*>', svg)
    head = m.group(0)
    w = float(re.search(r'width="([\d.]+)(?:pt)?"', head).group(1))
    h = float(re.search(r'height="([\d.]+)(?:pt)?"', head).group(1))
    new_head = re.sub(r'\s(width|height)="[^"]*"', '', head)
    new_head = new_head.replace('<svg', f'<svg role="img" aria-labelledby="{name}-title" class="tex-svg" '
                                       f'style="width:{w / 10:.2f}em;aspect-ratio:{w:.2f}/{h:.2f}"', 1)
    svg = svg.replace(head, new_head + f'<title id="{name}-title">{esc(alt)}</title>', 1)
    # tidy: drop the blank lines and indentation pdftocairo leaves
    svg = re.sub(r'>\s+<', '><', svg).strip()
    return svg + '\n'


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('--course', default='math-55a')
    ap.add_argument('--site', default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    ap.add_argument('--only', help='one figure name')
    ap.add_argument('--force', action='store_true')
    args = ap.parse_args()

    for tool in ('pdflatex', 'pdftocairo'):
        if not shutil.which(tool):
            sys.exit(f'{tool} not found' + (' (brew install poppler)' if tool == 'pdftocairo' else ''))

    fig_dir = os.path.join(args.site, 'notes', args.course, 'figures')
    src_dir = os.path.join(fig_dir, 'src')
    meta_path = os.path.join(fig_dir, 'figures.json')
    meta = json.load(open(meta_path)) if os.path.exists(meta_path) else {}
    stamp_path = os.path.join(src_dir, '.stamps.json')
    stamps = json.load(open(stamp_path)) if os.path.exists(stamp_path) else {}

    names = sorted(f[:-4] for f in os.listdir(src_dir) if f.endswith('.tex'))
    if args.only:
        names = [args.only]
    done = 0
    for name in names:
        body = open(os.path.join(src_dir, name + '.tex'), encoding='utf-8').read()
        alt = meta.get(name, {}).get('alt', 'Diagram')
        key = hashlib.sha1((PREAMBLE + body + alt + open(__file__).read()).encode()).hexdigest()
        out = os.path.join(fig_dir, name + '.svg')
        if not args.force and stamps.get(name) == key and os.path.exists(out):
            continue
        with tempfile.TemporaryDirectory() as tmp:
            with open(os.path.join(tmp, 'fig.tex'), 'w', encoding='utf-8') as f:
                f.write(PREAMBLE + body + '\n\\end{document}\n')
            r = subprocess.run(['pdflatex', '-interaction=nonstopmode', '-halt-on-error', 'fig.tex'],
                               cwd=tmp, capture_output=True, text=True)
            if r.returncode != 0:
                err = [l for l in r.stdout.split('\n') if l.startswith('!')]
                print(f'  ! {name}: pdflatex failed: {err[:3]}')
                continue
            subprocess.run(['pdftocairo', '-svg', 'fig.pdf', 'fig.svg'], cwd=tmp, check=True)
            svg = open(os.path.join(tmp, 'fig.svg'), encoding='utf-8').read()
        with open(out, 'w', encoding='utf-8') as f:
            f.write(themify(svg, name, alt))
        stamps[name] = key
        done += 1
        print(f'  {name}.svg')
    with open(stamp_path, 'w') as f:
        json.dump(stamps, f, indent=1)
    print(f'{done} figure(s) drawn, {len(names) - done} unchanged')


if __name__ == '__main__':
    main()
