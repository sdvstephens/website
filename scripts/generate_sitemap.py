#!/usr/bin/env python3
"""
Generate sitemap.xml from blog/posts.json, notes/courses.json,
homework/courses.json, and their nested content.

Usage: python3 generate_sitemap.py [site_dir]
       Defaults to ~/Documents/GitHub/samuel-stephens.com
"""

import json
import os
import sys
from datetime import date

SITE_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser(
    "~/Documents/GitHub/samuel-stephens.com"
)
BASE = "https://samuel-stephens.com"
TODAY = date.today().isoformat()

urls = []

def add(path, lastmod=TODAY, freq="monthly", priority="0.5"):
    # Route names that are also real directories (/blog, /notes, /notes/biology,
    # ...) get a 301 from Apache's DirectorySlash adding a trailing slash.
    # Emit the post-redirect URL so the sitemap lists canonical destinations
    # rather than a set of redirects, and so it agrees with the <link rel=
    # "canonical"> that meta.php generates using the same is-a-directory test.
    if path != "/" and os.path.isdir(os.path.join(SITE_DIR, path.lstrip("/"))):
        path = path + "/"
    urls.append((path, lastmod, freq, priority))

# Static pages
add("/", TODAY, "monthly", "1.0")
add("/about", TODAY, "monthly", "0.9")
add("/research", TODAY, "monthly", "0.8")
add("/blog", TODAY, "weekly", "0.8")
add("/films", TODAY, "monthly", "0.6")
add("/music", TODAY, "monthly", "0.6")
add("/notes", TODAY, "weekly", "0.8")
add("/homework", TODAY, "weekly", "0.7")
add("/educational", TODAY, "monthly", "0.7")

# Blog posts
try:
    with open(os.path.join(SITE_DIR, "blog/posts.json")) as f:
        posts = json.load(f)
    for p in posts:
        add(f"/blog/{p['slug']}", p.get("date", TODAY), "yearly", "0.6")
except Exception as e:
    print(f"Warning: blog/posts.json: {e}", file=sys.stderr)

# Notes courses and sections
try:
    with open(os.path.join(SITE_DIR, "notes/courses.json")) as f:
        courses = json.load(f)
    for c in courses:
        add(f"/notes/{c['slug']}", TODAY, "monthly", "0.6")
        cpath = os.path.join(SITE_DIR, f"notes/{c['slug']}/course.json")
        if os.path.exists(cpath):
            with open(cpath) as f:
                cd = json.load(f)
            for ch in cd.get("chapters", []):
                for s in ch.get("sections", []):
                    add(f"/notes/{c['slug']}/{s['slug']}", TODAY, "monthly", "0.5")
except Exception as e:
    print(f"Warning: notes: {e}", file=sys.stderr)

# Homework courses and assignments
try:
    with open(os.path.join(SITE_DIR, "homework/courses.json")) as f:
        courses = json.load(f)
    for c in courses:
        add(f"/homework/{c['slug']}", TODAY, "monthly", "0.5")
        apath = os.path.join(SITE_DIR, f"homework/{c['slug']}/assignments.json")
        if os.path.exists(apath):
            with open(apath) as f:
                ad = json.load(f)
            for a in ad.get("assignments", []):
                if a.get("hasWriteup"):
                    add(f"/homework/{c['slug']}/{a['slug']}", a.get("date", TODAY), "yearly", "0.5")
except Exception as e:
    print(f"Warning: homework: {e}", file=sys.stderr)

# Generate XML
xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for path, lastmod, freq, priority in urls:
    xml += f"  <url>\n"
    xml += f"    <loc>{BASE}{path}</loc>\n"
    xml += f"    <lastmod>{lastmod}</lastmod>\n"
    xml += f"    <changefreq>{freq}</changefreq>\n"
    xml += f"    <priority>{priority}</priority>\n"
    xml += f"  </url>\n"
xml += "</urlset>\n"

out = os.path.join(SITE_DIR, "sitemap.xml")
with open(out, "w") as f:
    f.write(xml)

print(f"Generated {out} ({len(urls)} URLs)")
