#!/usr/bin/env python3
"""
generate_sitemap.py - kept so :SitemapGenerate in Neovim still works.

The sitemap is now written by the site build (dist/sitemap.xml), from the same
pages it builds, so it can't drift from them. This runs that build.

Usage: python3 generate_sitemap.py [site_dir]
"""

import os
import subprocess
import sys

SITE_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

result = subprocess.run(["node", "build.mjs"], cwd=SITE_DIR, capture_output=True, text=True)
sys.stdout.write(result.stdout)
sys.stderr.write(result.stderr)
if result.returncode == 0:
    print("Sitemap written to dist/sitemap.xml")
sys.exit(result.returncode)
