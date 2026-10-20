# samuel-stephens.com

Source for [samuel-stephens.com](https://samuel-stephens.com): Markdown and JSON content built into a static site. Every page is a finished HTML file with its math already typeset; JavaScript only adds the keyboard layer (`:`, `/`, Space, `j`/`k`, the explorer).

The single-page version this replaced is the commit tagged `spa-final`.

## Working on it

```sh
npm install        # once
npm run dev        # build, serve at http://localhost:4321, rebuild and reload on save
npm run build      # build dist/ for upload
```

`npm run dev` also builds pages meant only for you: `/_audit`, `/_suggestions` (if those files exist locally) and layout samples such as the sample poem. `npm run build` leaves them out.

## Layout

```
blog/        posts (*.md) and posts.json
notes/       one folder per course: course.json, sections (*.md), figures
homework/    one folder per course: assignments.json, write-ups, pdf/tex downloads
courses/     courses.json, the Educational page
music/       music.json
poems/       one poem per file; see poems/README.md
pages/       home, about, research and help (HTML); about-infobox.json
films/       films.json (no page at present)
static/      copied into the site as-is: .htaccess, fonts, portrait, favicons, CV
src/         markdown.mjs (Markdown and TeX), templates.mjs, site.css, site.js, math.css
build.mjs    everything above → dist/
serve.mjs    local server with the same URL rules as the live .htaccess
scripts/     rebuild-posts.py (posts.json from frontmatter), generate_sitemap.py (runs the build),
             build-cv-html.py (static/sdvscvhtml.html), latex_to_md.py, split_sections.py, extract_chemfig.py
```

## Writing

- **Posts:** `blog/<slug>.md` with frontmatter (`title`, `date`, `excerpt`, `tags`; `draft: true` to hold one back). `scripts/rebuild-posts.py` regenerates `posts.json`; the publish scripts run it for you.
- **Notes:** a section is `notes/<course>/<slug>.md`, listed in that course's `course.json`. Boxes are `:::definition`, `:::theorem`, `:::proposition`, `:::lemma`, `:::corollary`, `:::example`, `:::exercise`, `:::remark`, `:::note`, `:::proof`, `:::solution`, closed by `:::`, nestable, with an optional title after the name (`:::definition Valency`). Math is `$…$` and `$$…$$`, with the same macros as before.
- **Poems:** see `poems/README.md`.
- **About:** `pages/about.html`, and the infobox in `pages/about-infobox.json`.

The build prints a warning for every TeX error, missing file, post missing from `posts.json`, and internal link that points nowhere.

## Publishing

The Neovim commands (`:BlogPublish`, `:NotePublish`, `:SiteSync`, `:HwPublish`, …) and the scripts in `~/.config/blog-publish` and `~/.config/note-publish` build the site and upload `dist/` with `lftp mirror --only-newer`. The build rewrites a file only when its content changes, so a publish uploads just the pages that changed. The server's `analytics/` folder is never touched.

The Adobe Caslon `.woff2` files are licensed and gitignored; they live in `static/assets/fonts/` on this machine only.
