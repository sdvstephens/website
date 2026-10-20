# Poems

One poem per file: `poems/<slug>.md`. The file name becomes the address, so `the-harbour.md` is served at `/poems/the-harbour`.

```
---
title: The Harbour
written: 2026-03-14
place: Boston
collection:
epigraph:
epigraph-source:
dedication:
order:
draft: true
---
First line of the poem
second line, exactly as it should appear
    an indented line (two spaces of indent = 1em)

A blank line starts a new stanza.
*Italic* and **bold** work inside a line.
```

Every field is optional.

- `title`: if left out, the first line is used.
- `written`: `2026`, `2026-03` or `2026-03-14`. Shown at the foot as "Boston, 14 March 2026", and the year sits beside the title on the index.
- `collection`: poems with the same collection are grouped under that heading on the index.
- `order`: a number, to set the order on the index yourself. Without it, newest first.
- `draft: true`: not built at all. Keep any poem you may submit to a magazine as a draft: many count a poem posted on a personal site as already published, and an unlisted page is still public.

Lines are never joined or reflowed. A line too long for the screen wraps with a hanging indent. Every fifth line is numbered in the margin on wide screens.

The poems link appears in the header and on the home page once at least one poem is published (not a draft).

Files whose names start with `_` are layout samples: built by `npm run dev`, never by `npm run build`.
