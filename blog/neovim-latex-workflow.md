# My Neovim + LaTeX Workflow

Taking lecture notes in real-time requires speed. Handwriting is fast but unsearchable. Typing is searchable but slow for mathematics. My solution: Neovim with aggressive snippet expansion.

## The Setup

- **Neovim** with LazyVim as base configuration
- **VimTeX** for LaTeX compilation and viewing
- **UltiSnips** for snippet expansion
- **Custom Python CLI tools** for document management

## Key Snippets

The magic is in the snippets. When I type `mk` and hit Tab, I get inline math mode:

```
mk → $|$
```

For display math:

```
dm → \[|\]
```

Fractions are automatic:

```
// → \frac{|}{}
```

## Real-time Compilation

VimTeX compiles on save with `latexmk -pvc` running in the background. The PDF viewer (Zathura) auto-refreshes, and SyncTeX lets me jump between source and output.

## The Result

I can transcribe a professor writing on a blackboard in real-time, complete with diagrams (via TikZ snippets) and proper mathematical notation. The notes are searchable, version-controlled, and beautifully typeset.

The full setup is on my [GitHub](https://github.com/sdvstephens/uni).
