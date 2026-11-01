---
course: math-55b
chapter: 4
section: N19
title: Homotopy
source-pages: 41-42
---

Homotopy is the notion of continuous deformation, parametrized by $I = [0,1]$ (the “time” variable in the homotopy).

:::definition
Let $f, g: X \to Y$ be two continuous maps. A **homotopy** between $f$ and $g$ is a continuous map $H: X \times I \to Y$ such that $H(x,0) = f(x)$ and $H(x,1) = g(x)$ for all $x \in X$. If this exists, then we say $f$ and $g$ are **homotopic** and write $f \simeq g$. If $f$ is homotopic to a constant map, we say it is **nullhomotopic**. (All this: a family of continuous maps that vary over time.)
:::

![A homotopy H from the square X × I to Y; the bottom edge goes to f, the top edge to g, and the vertical segment over x to a path from f(x) to g(x)](/notes/math-55b/figures/b2-homotopy.svg)

Paths in $X$ are continuous maps $f: I \to X$, so in particular we can compare two paths $f, g: I \to X$.
