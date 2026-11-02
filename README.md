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
cv/          cv.tex, the CV's LaTeX source (the PDF and web CV are built from it)
static/      copied into the site as-is: .htaccess, fonts, portrait, favicons, CV
src/         markdown.mjs (Markdown and TeX), templates.mjs, site.css, site.js, math.css
build.mjs    everything above → dist/
serve.mjs    local server with the same URL rules as the live .htaccess
scripts/     rebuild-posts.py (posts.json from frontmatter), generate_sitemap.py (runs the build),
             book-to-notes.py and book-figures.py (a LaTeX book → notes; see below),
             build-cv.py (cv/cv.tex → static/sdvscv.pdf and static/sdvscvhtml.html),
             latex_to_md.py, split_sections.py, extract_chemfig.py
```

## Writing

- **Posts:** `blog/<slug>.md` with frontmatter (`title`, `date`, `excerpt`, `tags`; `draft: true` to hold one back). `scripts/rebuild-posts.py` regenerates `posts.json`; the publish scripts run it for you.
- **Notes:** a section is `notes/<course>/<slug>.md`, listed in that course's `course.json`. Boxes are `:::definition`, `:::theorem`, `:::proposition`, `:::lemma`, `:::corollary`, `:::example`, `:::exercise`, `:::question`, `:::remark`, `:::note`, `:::proof`, `:::solution`, closed by `:::`, nestable, with an optional title after the name (`:::definition Valency`) and an optional fixed number (`:::definition{2.4.2}`); numbered boxes get an anchor (`#definition-2-4-2`). `:::lede` is an unlabelled opening paragraph. Math is `$…$` and `$$…$$`, with the same macros as before.
- **A book as notes:** the book pages of `notes/math-55a` are generated from the LaTeX of *Studies in Algebra and Group Theory*; the course mixes them with Professor Auroux's lectures and my notebooks. Edit the TeX, then

  ```sh
  npm run book                     # = the two commands below, with the source folder from course.json
  python3 scripts/book-to-notes.py ~/Documents/university/<book folder> --course math-55a
  python3 scripts/book-figures.py --course math-55a
  ```

  The first writes one page per `\section` (and an `N.0` page when a lecture has numbered material before its first section, as the PDF does), `course.json`, and the TikZ sources; numbering matches the PDF (Definition 2.4.2, Question 1, …) and is written into the Markdown as `:::definition{2.4.2} Title`. The second draws each `tikzpicture`/`tikzcd` with pdflatex and turns it into an SVG that uses the site's colours, so figures follow the light/dark theme; it needs `pdftocairo` (`brew install poppler`) and skips figures whose source has not changed. Figure descriptions for screen readers are in `notes/math-55a/figures/figures.json`. Keys you add to `course.json` by hand (`book`, `sectionTitles` for a section's title override, `description`) survive a rerun. When `course.json` has `"bookSource"` in place of `"book"` (55a does), the course keeps its own chapters: the script only refreshes the title and slug of each section marked `"from": "book", "bookNumber": "2.4"`, warns about book sections that aren't placed in a chapter, and leaves every other page alone. Don't edit the generated `.md` files; they say so at the top.
- **Lecture notes** (`notes/critical-theory`): a section's frontmatter can carry `date:`, `song:` and `song-url:` (the music for the day, shown under the title and linked to the recording), and `status: readings` for a lecture that has readings but no notes yet. `:::readings` is the readings box and `:::outline Title` a folded outline (the handout). A course's `course.json` can set `"chapterLabel": "week"`, and `notes/<course>/index.md`, if present, introduces the course on its contents page.
- **Outlines and progress:** in `course.json`, a section with `"planned": true` needs no file; it shows in the contents, greyed, as still to be written. A chapter's `"part"` groups chapters under a heading (Basic Mathematics, Integrated Maths I, …), a section's `"part"` groups sections inside a chapter (the 55b notebooks), and `"sectionLabel"` names what the count counts ("lectures", "sections"). A section's frontmatter `status: incomplete` marks notes that stop partway ("in progress"). A section with `"locked": true`, in a course whose `course.json` has `"lock": {"sha256": "…", "message": "…"}`, shows a password box in place of the text (the SHA-256 of the password, e.g. `printf %s 'pw' | shasum -a 256`); it is a light lock done in the browser, the text is still in the page, and locked pages stay out of search, the sitemap and search engines. Remove `locked` (or the course's `lock`) and publish to open them. **Original PDFs:** a section's `"original": "lecture-01.pdf"` links the PDF it was transcribed from (Math 55a and 55b: Professor Auroux's handwritten notes), behind a light password: the course's `"originals": {"sha256": "…", "label": "…"}` holds the password's SHA-256, and `notes/<course>/originals/` holds the PDFs and a file `.password` with the password itself, all out of git. The build publishes the PDFs in a folder named from the password (`originals-` plus the first 24 hex digits of SHA-256 of `originals:<password>`), so the link appears only once the reader types it. `"originalOpen": true` means the file is in `readings/` and open to everyone (the 55a review sheets). `:::problem{6.35}` is a numbered problem box with the book's own number; `:::outline Title` folds anything (the 55b lectures fold the pages the professor didn't reach that day).
- **Pronunciation:** `[[de:*Geist*|GUYST]]` prints the word with a sounds-like spelling after it (language code, word, respelling). Use it once per course, the first time a foreign word or name appears.
- **Handout quotations:** with `"quotes": "shown"` in `access.json`, each quotation in `readings/quotes.json` becomes a callout after the paragraph or list item that cites it ("Quotation 3"); a `[[quote:ID]]` line puts one exactly there. With quotes hidden, the markers vanish.
- **Course readings elsewhere:** `notes/math-55b/readings/` (review-session notes and handouts by the course staff) works the same way, with its own `access.json`; everything there is shown, and it stays out of git too.
- **Protected readings:** `notes/critical-theory/readings/` holds the course PDFs, the handout quotations (`quotes.json`) and the password file (`.htpasswd`, made with `htpasswd -cB notes/critical-theory/readings/.htpasswd reader`); the whole folder stays out of git. `notes/critical-theory/access.json` says, document by document, whether a PDF is `"hidden"` (password) or `"shown"` (public), and whether the quotations are woven into the pages. The build writes the folder's `.htaccess` from it and marks hidden links as locked; change a value and publish.
- **Poems:** see `poems/README.md`.
- **About:** `pages/about.html`, and the infobox in `pages/about-infobox.json`.
- **CV:** edit `cv/cv.tex`, then `npm run cv`. That compiles the PDF with xelatex into `static/sdvscv.pdf` and writes the same content as the web CV, `static/sdvscvhtml.html`, so the two always match (`python3 scripts/build-cv.py --no-pdf` redoes only the web page). The fonts come from TeX Live by file name, so nothing needs installing. The site build adds a hash of the PDF to every link to `/sdvscv.pdf`, so readers get the new CV as soon as it is published.

The build prints a warning for every TeX error, missing file, post missing from `posts.json`, and internal link that points nowhere.

## Publishing

The Neovim commands (`:BlogPublish`, `:NotePublish`, `:SiteSync`, `:HwPublish`, …) and the scripts in `~/.config/blog-publish` and `~/.config/note-publish` build the site and upload `dist/` with `lftp mirror --only-newer`. The build rewrites a file only when its content changes, so a publish uploads just the pages that changed. The server's `analytics/` folder is never touched.

The Adobe Caslon `.woff2` files are licensed and gitignored; they live in `static/assets/fonts/` on this machine only.
