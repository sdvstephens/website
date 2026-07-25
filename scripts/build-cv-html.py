#!/usr/bin/env python3
"""
build-cv-html.py — turn the Claude artifact CV export into a standalone,
gruvbox-themed page served at /sdvscvhtml.

The export depends on ./support.js, ./doc-page.js and ds/classical.css, none of
which exist on the server. Worse, it hides its own content behind
`doc-page:not(:defined){visibility:hidden}`, so dropping it in as-is renders a
blank page. This extracts the markup and supplies the ~11 design-system CSS
variables it references, mapped onto the site's gruvbox palette.

Usage:
  ./build-cv-html.py [path/to/export.dc.html]
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "sdvscvhtml.html"
DEFAULT_SRC = (
    pathlib.Path.home()
    / "Downloads"
    / "CV and résumé restructuring"
    / "Samuel Stephens CV.dc.html"
)

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
  <span>Updated July 2026</span>
</div>
</body>
</html>
"""


def main() -> int:
    src = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    if not src.is_file():
        print("error: source not found: %s" % src, file=sys.stderr)
        return 2

    raw = src.read_text(encoding="utf-8")

    match = re.search(r"<doc-page[^>]*>(.*)</doc-page>", raw, re.S)
    if not match:
        print("error: no <doc-page> block found — is this a .dc.html export?", file=sys.stderr)
        return 1

    content = match.group(1)

    # The footer lives in a slot the custom element would have positioned;
    # without doc-page.js it would render inline at the top, so drop it and
    # let the template supply its own footer.
    content = re.sub(r'<div slot="footer".*?</div>\s*', "", content, count=1, flags=re.S)

    content = content.strip()
    if not content:
        print("error: extracted content was empty", file=sys.stderr)
        return 1

    # Nothing from the artifact runtime should survive into the static page.
    for pattern, label in (
        (r"<script", "script tag"),
        (r"doc-page", "doc-page element"),
        (r"<x-dc", "x-dc wrapper"),
        (r"<helmet", "helmet block"),
    ):
        if re.search(pattern, content, re.I):
            print("warning: %s still present in extracted content" % label, file=sys.stderr)

    OUT.write_text(TEMPLATE.replace("__CONTENT__", content), encoding="utf-8")
    print("wrote %s (%d bytes) from %s" % (OUT.name, OUT.stat().st_size, src.name))
    return 0


if __name__ == "__main__":
    sys.exit(main())
