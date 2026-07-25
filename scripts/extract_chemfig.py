#!/usr/bin/env python3
"""
Extract chemfig structures from LaTeX and convert to SVG.
Usage: python3 extract_chemfig.py input.tex output_dir/
"""

import re
import os
import sys
import subprocess
import tempfile
import shutil

STANDALONE_TEMPLATE = r"""
\documentclass[crop,tikz,margin=2pt]{standalone}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb}
\usepackage[version=4]{mhchem}
\usepackage{chemfig}
\usepackage{xcolor}

\definecolor{bg}{HTML}{1d2021}
\definecolor{fg}{HTML}{ebdbb2}

\begin{document}
\pagecolor{bg}
\color{fg}
%CONTENT%
\end{document}
"""

def extract_chemfigs(tex_content):
    """Extract all chemfig commands."""
    structures = []
    pattern = r'\\chemfig\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}'
    
    for i, match in enumerate(re.finditer(pattern, tex_content)):
        structures.append({'id': i + 1, 'content': match.group(0)})
    return structures


def compile_to_svg(chemfig_content, output_path, structure_id):
    """Compile a single chemfig to SVG."""
    with tempfile.TemporaryDirectory() as tmpdir:
        # Create standalone .tex file
        tex_content = STANDALONE_TEMPLATE.replace('%CONTENT%', chemfig_content)
        tex_path = os.path.join(tmpdir, 'structure.tex')
        pdf_path = os.path.join(tmpdir, 'structure.pdf')
        
        with open(tex_path, 'w') as f:
            f.write(tex_content)
        
        # Compile to PDF
        result = subprocess.run(
            ['pdflatex', '-interaction=nonstopmode', 'structure.tex'],
            cwd=tmpdir, capture_output=True, text=True
        )
        
        if not os.path.exists(pdf_path):
            print(f"  ERROR compiling structure {structure_id}")
            print(result.stderr[:500] if result.stderr else result.stdout[:500])
            return False
        
        # Convert to SVG using inkscape
        svg_name = f"chemfig-{structure_id:03d}.svg"
        svg_path = os.path.join(output_path, svg_name)
        
        subprocess.run([
            'inkscape', pdf_path,
            '--export-type=svg',
            f'--export-filename={svg_path}'
        ], capture_output=True)
        
        if os.path.exists(svg_path):
            print(f"  Created: {svg_name}")
            return True
        return False


def main():
    if len(sys.argv) < 3:
        print("Usage: python3 extract_chemfig.py input.tex output_dir/")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_dir = sys.argv[2]
    
    os.makedirs(output_dir, exist_ok=True)
    
    with open(input_file, 'r') as f:
        content = f.read()
    
    structures = extract_chemfigs(content)
    print(f"Found {len(structures)} chemfig structures")
    
    success = 0
    for s in structures:
        if compile_to_svg(s['content'], output_dir, s['id']):
            success += 1
    
    print(f"\nConverted {success}/{len(structures)} structures to SVG")
    print(f"Output directory: {output_dir}")

if __name__ == '__main__':
    main()
