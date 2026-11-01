---
course: math-55b
chapter: 1
section: P3
title: Limits of Functions
source-pages: 17-18
---

:::definition
Let $X$ and $Y$ be metric spaces; suppose $E\subset X$, $f$ maps $E$ into $Y$, and $p$ is a limit point of $E$. We write $f(x)\to q$ as $x\to p$, or
$$\lim_{x\to p}f(x)=q,$$
if there exists $q\in Y$ with the following property: for every $\eps>0$ there exists $\delta>0$ such that
$$d_Y\big(f(x),q\big)<\eps$$
for all points $x\in E$ for which $0<d_X(x,p)<\delta$. Here $d_X$ and $d_Y$ refer to distances in $X$ and $Y$, respectively. If $X$ and/or $Y$ are replaced by $\RR^n$ (euclidean space), then $d_X$, $d_Y$ are replaced by absolute differences, or norms of differences.

*”Given a function that maps the sequence that converges at $p$ in $E$ to a point in $Y$ called $q$, we define the following notation: $\lim_{x\to p}f(x)=q$.”*
:::

:::theorem
Let $X$, $Y$, $E$, $f$, and $p$ be as in the previous definition. Then
$$\lim_{x\to p}f(x)=q\iff\lim_{n\to\infty}f(p_n)=q$$
for every sequence $\{p_n\}$ in $E$ such that $p_n\neq p$, $\lim_{n\to\infty}p_n=p$.
:::

:::corollary
If $f$ has a limit at $p$, the limit is unique.
:::

:::definition
Suppose we have two complex functions, $f$ and $g$, both defined on $E$. By $f+g$ we mean the function which assigns to each point $x$ of $E$ the number $f(x)+g(x)$. Similarly we define the **difference** $f-g$, the **product** $fg$, and the **quotient** $f/g$ of the two functions, with the understanding that the quotient is defined only at those points $x$ of $E$ at which $g(x)\neq 0$.
:::
