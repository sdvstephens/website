#!/usr/bin/env python3
"""Split the converted markdown into section files."""

import re
import os

# Read the full converted markdown
with open('/tmp/lecture_01_full.md', 'r') as f:
    content = f.read()

# Remove the comment header
content = re.sub(r'^%.*\n', '', content, flags=re.MULTILINE)
content = content.strip()

# Define section splits based on ## headers
sections = [
    {
        'slug': '1-1-cells',
        'title': 'Cells: The Building Blocks of Life',
        'start': '## Cells: The Building Blocks of Life',
        'end': '## Atoms and the Key Elements of Life'
    },
    {
        'slug': '1-2-atoms-and-bonds',
        'title': 'Atoms and Chemical Bonds',
        'start': '## Atoms and the Key Elements of Life',
        'end': '## A first look at water'
    },
    {
        'slug': '1-3-water',
        'title': 'Water',
        'start': '## A first look at water',
        'end': '## Macromolecules Characterize Living Things'
    },
    {
        'slug': '1-4-macromolecules',
        'title': 'Macromolecules',
        'start': '## Macromolecules Characterize Living Things',
        'end': '## Carbohydrates'
    },
    {
        'slug': '1-5-carbohydrates',
        'title': 'Carbohydrates',
        'start': '## Carbohydrates',
        'end': '## Lipids'
    },
    {
        'slug': '1-6-lipids',
        'title': 'Lipids',
        'start': '## Lipids',
        'end': '## Proteins'
    },
    {
        'slug': '1-7-proteins',
        'title': 'Proteins',
        'start': '## Proteins',
        'end': '## Nucleic Acids Are Informational Macromolecules'
    },
    {
        'slug': '1-8-nucleic-acids',
        'title': 'Nucleic Acids',
        'start': '## Nucleic Acids Are Informational Macromolecules',
        'end': None  # End of file
    }
]

output_dir = '/Users/stephens1/Documents/GitHub/samuel-stephens.com/notes/biology'

for i, section in enumerate(sections):
    start_idx = content.find(section['start'])
    if start_idx == -1:
        print(f"Warning: Could not find start of {section['slug']}")
        continue
    
    if section['end']:
        end_idx = content.find(section['end'])
        if end_idx == -1:
            section_content = content[start_idx:]
        else:
            section_content = content[start_idx:end_idx]
    else:
        section_content = content[start_idx:]
    
    # Clean up the section content
    section_content = section_content.strip()
    
    # Add frontmatter
    frontmatter = f"""---
title: "{section['title']}"
section: "{section['slug'].split('-')[0]}.{section['slug'].split('-')[1]}"
---

"""
    
    final_content = frontmatter + section_content
    
    # Write to file
    filepath = os.path.join(output_dir, f"{section['slug']}.md")
    with open(filepath, 'w') as f:
        f.write(final_content)
    
    print(f"Created: {section['slug']}.md ({len(section_content)} chars)")

print("\nDone!")
