#!/usr/bin/env python3
"""
build-cv.py: build the CV from its LaTeX source, cv/cv.tex, into

  static/sdvscv.pdf        the PDF (xelatex, run twice)
  static/sdvscvhtml.html   the same CV as a gruvbox web page, served at /sdvscvhtml

and the one-page résumé, cv/resume.tex, into static/sdvsresume.pdf.

Edit cv/cv.tex only; both outputs are generated from it, so they always agree.

Usage:
  python3 scripts/build-cv.py            # PDF and HTML
  python3 scripts/build-cv.py --no-pdf   # HTML only (no TeX needed)

The PDF needs xelatex and the Cormorant Garamond and Latin Modern fonts from
TeX Live; cv.tex loads them by file name, so they don't have to be installed
system-wide. Then run the site build as usual (node build.mjs), which stamps
the CV links with a hash of the PDF so browsers fetch the new one.

The HTML converter understands only what the CV uses: \\section*,
\\subsection*, tablist items, itemize, paragraphs, \\href, \\textbf, \\textit,
\\textsc, \\small, \\texttt, \\enquote, \\textsuperscript, accents, dashes and
ties. Anything else stops the build with an "unknown macro" error.
"""

import datetime
import html
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "cv" / "cv.tex"
PDF_OUT = ROOT / "static" / "sdvscv.pdf"
RESUME_SRC = ROOT / "cv" / "resume.tex"
RESUME_OUT = ROOT / "static" / "sdvsresume.pdf"
HTML_OUT = ROOT / "static" / "sdvscvhtml.html"

# Links shown in the web CV's header that the PDF leaves out.
EXTRA_LINKS = [
    ("https://github.com/sdvstephens", "github.com/sdvstephens"),
    ("https://www.linkedin.com/in/stephenss/", "linkedin.com/in/stephenss"),
]

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Curriculum Vitae \u2014 S. D. V. Stephens</title>
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  /* gruvbox dark \u2014 same palette as samuel-stephens.com */
  --bg-hard:#1d2021; --bg:#282828; --bg1:#3c3836; --bg2:#504945; --bg3:#665c54;
  --fg:#ebdbb2; --fg0:#fbf1c7; --fg2:#d5c4a1; --fg3:#bdae93; --fg4:#a89984;
  --blue:#83a598; --aqua:#8ec07c; --yellow:#fabd2f; --orange:#fe8019; --gray:#928374;

  /* the export's design-system variables, mapped onto gruvbox */
  --color-text:var(--fg);
  --color-divider:var(--bg2);
  --color-neutral-700:var(--fg4);
  --color-neutral-800:var(--fg3);
  --color-accent-700:var(--blue);
  --color-accent-800:var(--aqua);
  --font-heading:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  --font-body:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  --space-1:4px; --space-2:8px; --space-6:28px;
}
* { box-sizing:border-box; }
body {
  margin:0; background:var(--bg); color:var(--fg);
  font:400 14.5px/1.6 var(--font-body);
  -webkit-font-smoothing:antialiased;
}
.cv-shell { max-width:820px; margin:0 auto; padding:36px 28px 64px; }
a { color:var(--color-accent-700); text-decoration:none; }
a:hover { color:var(--color-accent-800); text-decoration:underline; }
p { margin:0 0 6px; }
ul { margin:4px 0 0; padding-left:18px; }
li { margin-bottom:3px; }
.cv-topbar {
  display:flex; justify-content:space-between; align-items:center;
  max-width:820px; margin:0 auto; padding:14px 28px;
  border-bottom:1px solid var(--bg1);
  font:400 12px/1 var(--font-heading); letter-spacing:.12em;
  text-transform:uppercase; color:var(--fg4);
}
.cv-topbar a { color:var(--fg4); }
.cv-topbar a:hover { color:var(--yellow); text-decoration:none; }
.cv-footer {
  max-width:820px; margin:0 auto; padding:18px 28px 40px;
  display:flex; justify-content:space-between; gap:20px;
  border-top:1px solid var(--bg2);
  font:400 12px/1.4 var(--font-heading); letter-spacing:.1em; color:var(--fg4);
}
@media (max-width:600px) {
  .cv-shell { padding:24px 16px 48px; }
  .cv-topbar, .cv-footer { padding-left:16px; padding-right:16px; }
}
/* A CV gets printed. Fall back to ink-friendly light styling on paper. */
@media print {
  :root {
    --color-text:#1a1815; --color-divider:#c9c4bc;
    --color-neutral-700:#5a554e; --color-neutral-800:#38342f;
    --color-accent-700:#1a1815; --color-accent-800:#1a1815;
  }
  body { background:#fff; color:#1a1815; }
  .cv-topbar, .cv-footer { display:none; }
  .cv-shell { max-width:none; padding:0; }
  a { color:#1a1815; text-decoration:none; }
}
</style>
</head>
<body>
<div class="cv-topbar">
  <a href="/">&#8592; samuel-stephens.com</a>
  <span>Curriculum Vitae</span>
</div>
<div class="cv-shell">
__CONTENT__
</div>
<div class="cv-footer">
  <span>Samuel D. V. Stephens &mdash; Curriculum Vitae</span>
  <span>Updated __UPDATED__</span>
</div>
</body>
</html>
"""


S_H2 = ("margin:var(--space-6) 0 var(--space-2);padding-bottom:var(--space-1);"
        "border-bottom:1px solid var(--color-divider);font:600 17px/1.2 var(--font-heading);"
        "letter-spacing:.16em;text-transform:uppercase;color:var(--color-text);text-align:left")
S_SUB = ("font:600 14px var(--font-heading);letter-spacing:.12em;text-transform:uppercase;"
         "color:var(--color-accent-700);text-align:left;margin:{m}")
S_GRID = "display:grid;grid-template-columns:76px 1fr;gap:0 18px;margin-bottom:11px"
S_DATE = ("font:400 13px/1.75 var(--font-body);font-feature-settings:'tnum';"
          "color:var(--color-neutral-700);text-align:left")
S_ORG = ("font:600 16.5px/1.25 var(--font-heading);letter-spacing:.05em;"
         "text-transform:uppercase;text-align:left")
S_ROLE = "font-style:italic;color:var(--color-neutral-800)"


def strip_comments(s):
    return re.sub(r"(?<!\\)%.*", "", s)


def group(s, i):
    """s[i] == '{'; return (content, index after the matching brace)."""
    depth = 0
    for j in range(i, len(s)):
        if s[j] == "{":
            depth += 1
        elif s[j] == "}":
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
    raise ValueError("unbalanced braces: " + s[i:i + 60])


WRAP = {"textbf": ("<strong>", "</strong>"), "textit": ("<em>", "</em>"),
        "emph": ("<em>", "</em>"), "texttt": ("<code>", "</code>"),
        "textsc": ("", ""), "small": ("", ""), "enquote": ("\u201c", "\u201d"),
        "textsuperscript": ("<sup>", "</sup>")}
ACC = {"'": {"E": "É", "e": "é", "a": "á", "o": "ó", "i": "í", "u": "ú"},
       "`": {"e": "è", "a": "à"}, '"': {"o": "ö", "u": "ü"}}


def inline(s):
    out, i = [], 0
    while i < len(s):
        c = s[i]
        if c == "\\":
            m = re.match(r"\\([A-Za-z]+)\s*", s[i:])
            if m:
                name = m.group(1)
                j = i + m.end()
                if name == "href":
                    url, j = group(s, j)
                    txt, j = group(s, j)
                    out.append('<a href="%s">%s</a>' % (html.escape(url), inline(txt)))
                elif name in WRAP:
                    if j < len(s) and s[j] == "{":
                        body, j = group(s, j)
                        a, b = WRAP[name]
                        out.append(a + inline(body) + b)
                elif name == "LaTeX":
                    out.append("LaTeX")
                    if s[j:j + 2] == "{}":
                        j += 2
                elif name == "tab":
                    if s[j:j + 2] == "{}":
                        j += 2
                else:
                    raise ValueError("unknown macro \\" + name)
                i = j
                continue
            nxt = s[i + 1:i + 2]
            if nxt in ACC:
                m = re.match(r"\\.\{?([A-Za-z])\}?", s[i:])
                out.append(ACC[nxt][m.group(1)])
                i += m.end()
                continue
            if nxt in "#&%_$":
                out.append(html.escape(nxt)); i += 2; continue
            if nxt in " ,":
                out.append(" "); i += 2; continue
            raise ValueError("unhandled escape " + s[i:i + 10])
        if s.startswith("---", i):
            out.append("—"); i += 3; continue
        if s.startswith("--", i):
            out.append("–"); i += 2; continue
        if s.startswith("``", i):
            out.append("\u201c"); i += 2; continue
        if s.startswith("''", i):
            out.append("\u201d"); i += 2; continue
        if c == "~":
            out.append("&nbsp;"); i += 1; continue
        if c in "{}":
            i += 1; continue
        out.append(html.escape(c, quote=False))
        i += 1
    return re.sub(r"\s+", " ", "".join(out)).strip()


def split_lines(body):
    return [p.strip() for p in re.split(r"\\\\(?:\[[^\]]*\])?", body) if p.strip()]


def render_tablist(block):
    items = re.split(r"\\item\[([^\]]*)\]", block)[1:]
    out = []
    for date, body in zip(items[0::2], items[1::2]):
        lines = split_lines(body)
        cells = []
        if len(lines) == 1:
            cells.append(inline(lines[0]))
        else:
            for k, ln in enumerate(lines):
                txt = inline(ln)
                if k == 0 and "\\textsc" in ln:
                    cells.append('<div style="%s">%s</div>' % (S_ORG, txt))
                elif k == 0:
                    cells.append('<div>%s</div>' % txt)
                elif k == 1 and re.match(r"(\\small\{)?\\textit", ln):
                    cells.append('<div style="%s">%s</div>' % (S_ROLE, txt))
                else:
                    cells.append('<div style="margin-top:3px">%s</div>' % txt)
        out.append('  <div style="%s">\n    <div style="%s">%s</div>\n    <div>%s</div>\n  </div>'
                   % (S_GRID, S_DATE, inline(date), "\n      ".join(cells)))
    return "\n".join(out)


def render_itemize(block):
    items = [x.strip() for x in re.split(r"\\item\b", block)[1:]]
    lis = "\n".join("    <li>%s</li>" % inline(x) for x in items)
    return '  <ul style="margin:0 0 10px;padding-left:15px">\n%s\n  </ul>' % lis



def header_html(tex):
    """The name block: affiliation lines (first minipage) and contact lines (second)."""
    blocks = re.findall(r"\\begin\{minipage\}(?:\[[^\]]*\])?\{[^}]*\}(.*?)\\end\{minipage\}", tex, re.S)
    if len(blocks) < 2:
        raise ValueError("expected two minipages (affiliation, contact) in the header")
    def lines(block):
        block = block.replace("\\raggedleft{}", "")
        return [inline(x) for x in split_lines(block)]
    affil = "".join("\n        <div>%s</div>" % x for x in lines(blocks[0]))
    contact = lines(blocks[1]) + ['<a href="%s">%s</a>' % (u, html.escape(t)) for u, t in EXTRA_LINKS]
    contact = "".join("\n      <div>%s</div>" % x for x in contact)
    name = re.search(r"\\newcommand\{\\myname\}\{([^}]*)\}", tex).group(1)
    return ('''<div style="font:400 14.5px/1.55 var(--font-body);color:var(--color-text);text-align:left">

  <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:28px;flex-wrap:wrap;border-bottom:1px solid var(--color-text);padding-bottom:10px">
    <div>
      <h1 style="margin:0 0 6px;font:400 40px/1.05 var(--font-heading);letter-spacing:-0.015em">%s</h1>
      <div style="font:400 13.5px/1.5 var(--font-body);color:var(--color-neutral-800);text-align:left">%s
      </div>
    </div>
    <div style="text-align:right;font:400 12.5px/1.7 var(--font-body);color:var(--color-neutral-800);white-space:nowrap">%s
    </div>
  </div>
''' % (inline(name), affil, contact))


def body_html(tex):
    tex = tex[tex.index(r"\section*{Education}"):tex.index(r"\begin{center}")]
    toks = re.split(r"(\\section\*\{[^}]*\}|\\subsection\*\{[^}]*\}|"
                    r"\\begin\{tablist\}.*?\\end\{tablist\}|\\begin\{itemize\}.*?\\end\{itemize\})",
                    tex, flags=re.S)
    parts, after_h2 = [], False
    for t in toks:
        t = t.strip()
        if not t:
            continue
        if t.startswith(r"\section*"):
            parts.append('\n  <h2 style="%s">%s</h2>' % (S_H2, inline(t[10:-1])))
            after_h2 = True
            continue
        if t.startswith(r"\subsection*"):
            m = "0 0 8px" if after_h2 else "16px 0 8px"
            parts.append('  <div style="%s">%s</div>' % (S_SUB.format(m=m), inline(t[13:-1])))
            after_h2 = False
            continue
        after_h2 = False
        if t.startswith(r"\begin{tablist}"):
            parts.append(render_tablist(t[len(r"\begin{tablist}"):-len(r"\end{tablist}")]))
        elif t.startswith(r"\begin{itemize}"):
            parts.append(render_itemize(t[len(r"\begin{itemize}"):-len(r"\end{itemize}")]))
        else:
            parts.append('  <p style="margin:0 0 8px">%s</p>' % inline(t))
    return "\n".join(parts)


def build_html(tex):
    content = header_html(tex) + body_html(tex) + "\n\n</div>"
    updated = datetime.date.today().strftime("%B %Y")
    page = TEMPLATE.replace("__CONTENT__", content).replace("__UPDATED__", updated)
    HTML_OUT.write_text(page, encoding="utf-8")
    print("wrote %s (%d bytes)" % (HTML_OUT.relative_to(ROOT), len(page.encode())))


def build_pdf(src, out):
    if not shutil.which("xelatex"):
        sys.exit("error: xelatex not found; install TeX Live, or run with --no-pdf")
    with tempfile.TemporaryDirectory() as tmp:
        shutil.copy(src, pathlib.Path(tmp) / "doc.tex")
        for _ in range(2):
            r = subprocess.run(["xelatex", "-interaction=nonstopmode", "-halt-on-error", "doc.tex"],
                               cwd=tmp, capture_output=True, text=True)
            if r.returncode != 0:
                log = (pathlib.Path(tmp) / "doc.log").read_text(errors="replace")
                errs = [l for l in log.splitlines() if l.startswith("!")]
                sys.exit("error: xelatex failed on %s:\n  " % src.name + "\n  ".join(errs[:5] or log.splitlines()[-15:]))
        shutil.copy(pathlib.Path(tmp) / "doc.pdf", out)
    print("wrote %s (%d bytes)" % (out.relative_to(ROOT), out.stat().st_size))


def main():
    tex = strip_comments(SRC.read_text(encoding="utf-8"))
    build_html(tex)
    if "--no-pdf" not in sys.argv[1:]:
        build_pdf(SRC, PDF_OUT)
        if RESUME_SRC.exists():
            build_pdf(RESUME_SRC, RESUME_OUT)


if __name__ == "__main__":
    main()
