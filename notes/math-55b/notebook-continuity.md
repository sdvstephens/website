---
course: math-55b
chapter: 1
section: N2
title: Continuity
source-pages: 3-4
---

:::definition Continuity
Given two metric spaces $(X,d_X)$ and $(Y,d_Y)$, a map $f\colon X\to Y$ (defined everywhere) is **continuous** if for every $p\in X$ and every $\varepsilon>0$ there is $\delta>0$ such that
$$d_X(p,x)<\delta\implies d_Y(f(p),f(x))<\varepsilon.$$

Equivalently,
$$f(B_\delta(p))\subset B_\varepsilon(f(p))\iff B_\delta(p)\subset f^{-1}\big(B_\varepsilon(f(p))\big).$$
:::

![The map f sends the delta-ball around p into the epsilon-ball around f(p)](/notes/math-55b/figures/b1-continuity.svg)

:::theorem
A function $f\colon X\to Y$ is continuous if and only if for every open subset $S$ of $Y$, $f^{-1}(S)\subset X$ is open.
:::

:::proof
Assume $f\colon X\to Y$ is continuous, and let $S\subset Y$ be open. Pick some point $p\in f^{-1}(S)$. Then $f(p)\in S$, which is open, so there is an open ball, $\varepsilon>0$, such that $B_\varepsilon(f(p))\subset S$. Since $f$ is continuous, there is $\delta>0$ such that
$$f(B_\delta(p))\subset B_\varepsilon(f(p))\subset S,$$
therefore $B_\delta(p)\subset f^{-1}(S)$. So $f^{-1}(S)$ is open.

Now assume that $S$ open implies $f^{-1}(S)$ is open in $X$. Pick $p\in X$, $\varepsilon>0$. Let $S=B_\varepsilon(f(p))$, open in $Y$. So $S$ is open, therefore $f^{-1}(S)$ is open in $X$, and it contains $p$. Hence there is $\delta>0$ such that $B_\delta(p)\subset f^{-1}(S)$, so
$$f(B_\delta(p))\subset S=B_\varepsilon(f(p)).$$
:::
