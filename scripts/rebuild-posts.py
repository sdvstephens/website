#!/usr/bin/env python3
"""
rebuild-posts.py - regenerate blog/posts.json from post frontmatter.

The site renders its blog index from blog/posts.json. Creating a .md file
and syncing it uploads the post but never registers it, so the post is
live-but-invisible. This script keeps the index in sync with the folder.

Merge strategy (never loses hand-curated data):
  1. frontmatter field, if present and non-empty
  2. else the existing posts.json entry for that slug
  3. else derived (first "# " heading, file mtime) with a warning

Posts with "draft: true" in frontmatter are excluded from the index.

Usage:
  ./rebuild-posts.py            rewrite posts.json
  ./rebuild-posts.py --check    report drift, write nothing, exit 1 if stale
  ./rebuild-posts.py --quiet    only print on change or error
"""

import argparse
import datetime as dt
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BLOG_DIR = os.path.join(os.path.dirname(HERE), "blog")
POSTS_JSON = os.path.join(BLOG_DIR, "posts.json")

FRONTMATTER_RE = re.compile(r"\A---[ \t]*\r?\n(.*?)\r?\n---[ \t]*\r?\n", re.S)


def unquote(value):
    """Strip matching surrounding quotes from a frontmatter scalar."""
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
        return value[1:-1].strip()
    return value


def parse_frontmatter(text):
    """Return a dict of the leading YAML-ish frontmatter block (may be empty)."""
    match = FRONTMATTER_RE.match(text)
    if not match:
        return {}
    fields = {}
    for line in match.group(1).splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or ":" not in stripped:
            continue
        key, _, value = stripped.partition(":")
        fields[key.strip().lower()] = unquote(value)
    return fields


def first_heading(text):
    """First markdown H1 in the body, used as a title fallback."""
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None


def split_tags(value):
    """'personal, politics' -> ['personal', 'politics']"""
    if isinstance(value, list):
        return [str(t).strip() for t in value if str(t).strip()]
    return [t.strip() for t in str(value).split(",") if t.strip()]


def is_true(value):
    return str(value).strip().lower() in ("true", "yes", "1", "on")


def load_existing():
    """Existing index as {slug: entry}, plus the original slug order."""
    if not os.path.exists(POSTS_JSON):
        return {}, []
    try:
        with open(POSTS_JSON, encoding="utf-8") as handle:
            data = json.load(handle)
    except (OSError, ValueError) as exc:
        print("  ! could not read existing posts.json (%s)" % exc, file=sys.stderr)
        print("  ! rebuilding from frontmatter only", file=sys.stderr)
        return {}, []
    if not isinstance(data, list):
        return {}, []
    entries = {p["slug"]: p for p in data if isinstance(p, dict) and "slug" in p}
    return entries, [p["slug"] for p in data if isinstance(p, dict) and "slug" in p]


def build_entry(path, slug, existing, warnings):
    """Build one index entry, preferring frontmatter then existing then derived."""
    with open(path, encoding="utf-8") as handle:
        text = handle.read()

    front = parse_frontmatter(text)
    old = existing.get(slug, {})

    if is_true(front.get("draft", "")):
        return None

    title = front.get("title") or old.get("title") or first_heading(text) or slug
    excerpt = front.get("excerpt") or old.get("excerpt") or ""

    date = front.get("date") or old.get("date")
    if not date:
        date = dt.date.fromtimestamp(os.path.getmtime(path)).isoformat()
        warnings.append("%s: no date in frontmatter, used file mtime (%s)" % (slug, date))

    if front.get("tags"):
        tags = split_tags(front["tags"])
    else:
        tags = old.get("tags") or []

    if not front:
        warnings.append("%s: no frontmatter, kept existing index values" % slug)

    return {"slug": slug, "title": title, "date": str(date), "excerpt": excerpt, "tags": tags}


def rebuild():
    """Return (entries, warnings, drafts) built from the blog folder."""
    existing, prior_order = load_existing()
    warnings, drafts, entries = [], [], []

    for path in sorted(glob.glob(os.path.join(BLOG_DIR, "*.md"))):
        slug = os.path.splitext(os.path.basename(path))[0]
        entry = build_entry(path, slug, existing, warnings)
        if entry is None:
            drafts.append(slug)
        else:
            entries.append(entry)

    # Stable two-pass sort: newest first, ties keep their previous relative order.
    position = {slug: i for i, slug in enumerate(prior_order)}
    entries.sort(key=lambda e: position.get(e["slug"], len(position)))
    entries.sort(key=lambda e: e["date"], reverse=True)
    return entries, warnings, drafts


def diff(old_order, entries, existing):
    """Human-readable summary of what changed."""
    new_slugs = [e["slug"] for e in entries]
    added = [s for s in new_slugs if s not in old_order]
    removed = [s for s in old_order if s not in new_slugs]
    changed = [
        e["slug"] for e in entries
        if e["slug"] in existing and existing[e["slug"]] != e
    ]
    return added, removed, changed


def main():
    parser = argparse.ArgumentParser(description="Rebuild blog/posts.json from post frontmatter.")
    parser.add_argument("--check", action="store_true", help="report drift without writing")
    parser.add_argument("--quiet", action="store_true", help="only print on change or error")
    args = parser.parse_args()

    if not os.path.isdir(BLOG_DIR):
        print("error: blog directory not found: %s" % BLOG_DIR, file=sys.stderr)
        return 2

    existing, prior_order = load_existing()
    entries, warnings, drafts = rebuild()
    added, removed, changed = diff(prior_order, entries, existing)
    stale = bool(added or removed or changed)

    for note in warnings:
        print("  ! %s" % note)
    for slug in drafts:
        print("  - %s (draft, excluded)" % slug)
    for slug in added:
        print("  + %s (added to index)" % slug)
    for slug in removed:
        print("  - %s (no .md file, dropped)" % slug)
    for slug in changed:
        print("  ~ %s (updated)" % slug)

    if args.check:
        print("posts.json is stale" if stale else "posts.json is up to date")
        return 1 if stale else 0

    if not stale:
        if not args.quiet:
            print("posts.json already up to date (%d posts)" % len(entries))
        return 0

    with open(POSTS_JSON, "w", encoding="utf-8") as handle:
        json.dump(entries, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    print("posts.json rebuilt: %d posts" % len(entries))
    return 0


if __name__ == "__main__":
    sys.exit(main())
