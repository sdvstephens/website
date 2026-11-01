---
course: math-55b
chapter: 1
section: N8
title: Hausdorff Spaces
source-pages: 12-13
---

**Hausdorff space**: ($\Rightarrow$ a sequence converges to at most one limit.)

:::example Finite complement topology
Take $\RR$ with the finite complement topology: the opens are $\emptyset$ and $\RR-\{\text{finite set}\}$. Let $a_i\in\RR$, $i\ge1$, all be distinct. For all $x\in X$ and all $U\ni x$, the neighborhood contains all but a finite number of the $a_i$, so $a_i\to x$.
:::

So in this topology the sequence converges to every point.

:::definition Hausdorff
$X$ is **Hausdorff** if for all $x_1\neq x_2$ there exist neighborhoods $U_1\ni x_1$, $U_2\ni x_2$ which are disjoint from each other: $U_1\cap U_2=\emptyset$.
:::

![Disjoint neighborhoods U1 and U2 of two distinct points](/notes/math-55b/figures/b1-hausdorff.svg)

:::example
Metric spaces are Hausdorff: take $r\le\frac12 d(x_1,x_2)$; then $B_r(x_1)$ and $B_r(x_2)$ are disjoint.
:::

:::example Finite complement topology, continued
The finite complement topology on $\RR$ is not Hausdorff.
:::

- If $X$ is Hausdorff and $Y\subset X$, then the subspace topology on $Y$ is Hausdorff.
- If $X,Y$ are Hausdorff, then $X\times Y$ is Hausdorff.

:::theorem
If $X$ is Hausdorff, then every sequence in $X$ converges to at most one limit.
:::

$$\cdots\longrightarrow\cdots\longrightarrow\text{Hausdorff}\longrightarrow\text{metric spaces}\longrightarrow\cdots$$
$$\xrightarrow{\qquad\qquad\qquad\text{“niceness”}\qquad\qquad\qquad}$$
