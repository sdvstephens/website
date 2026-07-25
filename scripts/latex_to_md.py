#!/usr/bin/env python3
"""
Convert LaTeX biology lecture to Markdown with MathJax support.
Replaces chemfig with SVG references, keeps \ce{} for mhchem.
"""

import re
import os

def convert_latex_to_md(tex_content, figures_path="/notes/biology/figures"):
    md = tex_content
    
    # Remove preamble and document wrapper
    md = re.sub(r'\\documentclass.*?\\begin\{document\}', '', md, flags=re.DOTALL)
    md = re.sub(r'\\end\{document\}', '', md)
    md = re.sub(r'\\input\{[^}]+\}', '', md)
    md = re.sub(r'\\course\{[^}]+\}', '', md)
    
    # Remove \lecture command, extract title
    lecture_match = re.search(r'\\lecture\{\d+\}\{([^}]+)\}', md)
    lecture_title = lecture_match.group(1) if lecture_match else "Lecture"
    md = re.sub(r'\\lecture\{\d+\}\{[^}]+\}', '', md)
    
    # Convert sections
    md = re.sub(r'\\section\{([^}]+)\}', r'## \1', md)
    md = re.sub(r'\\subsection\{([^}]+)\}', r'### \1', md)
    md = re.sub(r'\\subsubsection\{([^}]+)\}', r'#### \1', md)
    
    # Convert text formatting
    md = re.sub(r'\\textbf\{([^}]+)\}', r'**\1**', md)
    md = re.sub(r'\\emph\{([^}]+)\}', r'*\1*', md)
    md = re.sub(r'\\textit\{([^}]+)\}', r'*\1*', md)
    md = re.sub(r'\\underline\{([^}]+)\}', r'<u>\1</u>', md)
    
    # Convert definition boxes
    def convert_dfn(match):
        title = match.group(1)
        content = match.group(2)
        return f'\n:::definition {title}\n{content}\n:::\n'
    md = re.sub(r'\\dfn\{([^}]+)\}\{([^}]+)\}', convert_dfn, md)
    
    # Convert notes
    def convert_nt(match):
        content = match.group(1)
        return f'\n:::note\n{content}\n:::\n'
    md = re.sub(r'\\nt\{([^}]+)\}', convert_nt, md)
    
    # Convert itemize
    def convert_itemize(match):
        content = match.group(1)
        items = re.split(r'\\item\s*', content)
        result = '\n'
        for item in items:
            item = item.strip()
            if item:
                result += f'- {item}\n'
        return result
    md = re.sub(r'\\begin\{itemize\}(.*?)\\end\{itemize\}', convert_itemize, md, flags=re.DOTALL)
    
    # Convert enumerate
    def convert_enumerate(match):
        content = match.group(1)
        items = re.split(r'\\item\s*', content)
        result = '\n'
        num = 1
        for item in items:
            item = item.strip()
            if item:
                result += f'{num}. {item}\n'
                num += 1
        return result
    md = re.sub(r'\\begin\{enumerate\}(.*?)\\end\{enumerate\}', convert_enumerate, md, flags=re.DOTALL)
    
    # Convert center environments to just the content
    md = re.sub(r'\\begin\{center\}(.*?)\\end\{center\}', r'\1', md, flags=re.DOTALL)
    
    # Convert tabular to simple text (basic conversion)
    md = re.sub(r'\\begin\{tabular\}\{[^}]*\}', '', md)
    md = re.sub(r'\\end\{tabular\}', '', md)
    md = re.sub(r'\\\\', '\n', md)
    md = re.sub(r'\\hline', '', md)
    md = re.sub(r'&', ' | ', md)
    
    # Track chemfig counter for replacement
    chemfig_counter = [0]
    def replace_chemfig(match):
        chemfig_counter[0] += 1
        return f'![Structure {chemfig_counter[0]}]({figures_path}/chemfig-{chemfig_counter[0]:03d}.svg)'
    
    # Replace chemfig with SVG references
    md = re.sub(r'\\chemfig\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}', replace_chemfig, md)
    
    # Keep \ce{} but wrap in $ for MathJax
    md = re.sub(r'(?<!\$)\\ce\{([^}]+)\}(?!\$)', r'$\\ce{\1}$', md)
    
    # Convert inline math that's not already wrapped
    # (LaTeX \( \) to $ $)
    md = re.sub(r'\\\(', r'$', md)
    md = re.sub(r'\\\)', r'$', md)
    
    # Convert display math \[ \] to $$ $$
    md = re.sub(r'\\\[', r'$$', md)
    md = re.sub(r'\\\]', r'$$', md)
    
    # Remove remaining LaTeX commands that don't translate
    md = re.sub(r'\\quad', ' ', md)
    md = re.sub(r'\\qquad', '  ', md)
    md = re.sub(r'\\,', ' ', md)
    md = re.sub(r'\\;', ' ', md)
    md = re.sub(r'\\!', '', md)
    md = re.sub(r'\\hspace\{[^}]*\}', ' ', md)
    md = re.sub(r'\\vspace\{[^}]*\}', '', md)
    md = re.sub(r'\\noindent', '', md)
    md = re.sub(r'\\par\b', '\n\n', md)
    md = re.sub(r'\\clearpage', '', md)
    md = re.sub(r'\\newpage', '', md)
    md = re.sub(r'\\smallskip', '', md)
    md = re.sub(r'\\medskip', '', md)
    md = re.sub(r'\\bigskip', '', md)
    md = re.sub(r'\\\\(?:\[[^\]]*\])?', '\n', md)
    md = re.sub(r'~', ' ', md)
    md = re.sub(r'---', '—', md)
    md = re.sub(r'--', '–', md)
    md = re.sub(r"``", '"', md)
    md = re.sub(r"''", '"', md)
    
    # Clean up extra whitespace
    md = re.sub(r'\n{3,}', '\n\n', md)
    md = md.strip()
    
    return md, lecture_title

if __name__ == '__main__':
    import sys
    if len(sys.argv) < 2:
        print("Usage: python3 latex_to_md.py input.tex")
        sys.exit(1)
    
    with open(sys.argv[1], 'r') as f:
        content = f.read()
    
    md, title = convert_latex_to_md(content)
    print(md)
