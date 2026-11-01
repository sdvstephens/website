---
course: math-55a
chapter: 1
section: N11
title: Problem set: inverses and subgroups
status: incomplete
source-pages: p 1-2
---

:::exercise 1
Let $f:X\to Y$ be a map of sets. A function $g:Y\to X$ is called the **left** (resp. **right**) **inverse** of $f$ if $g\circ f=\id_X$ (resp. $f\circ g=\id_Y$).

(a) Show that $f$ admits a right inverse if and only if $f$ is onto. Show that in general a right inverse is not unique.

(b) Show that $f$ admits a left inverse if and only if $f$ is one-to-one.
:::solution
**(a)** We divide into $\Rightarrow$ and $\Leftarrow$.

CASE 1: $f:X\twoheadrightarrow Y$ $\implies$ there is $g:Y\to X$ with $f\circ g=\id_Y$. Since for all $y$ there is an $x$ with $f(x)=y$, let $g(y)=x$ for such an $x$. Then in $f(g(y))$ we can swap $x$ for $g(y)$, so we get $f(x)$, which we saw was $y$.

CASE 2: $f\circ g=\id_Y\implies f(g(y))=y$ for all $y\in Y$. But note $g(y)$ must be some $x$, so really $f(x)=y$ shows that for all $y$ there is an $x$ with $f(x)=f(g(y))=y$, which is the definition of surjectivity. $\blacksquare$

**(b)** This is once again divided into two cases:

CASE: $f:X\hookrightarrow Y\iff$ …
:::
:::

:::exercise
Let $G$ be a group and let $x_1,\dots,x_n\in G$. Show that
$$(x_1x_2\cdots x_n)^{-1}=x_n^{-1}x_{n-1}^{-1}\cdots x_1^{-1}.$$
:::solution
$G$ is not abelian (if it were, this would be trivial). Say $x_1\cdots x_n=m$; well, $m\in G$ and $m^{-1}$ exists. $m^{-1}$ must be some product in $G$.

Need a different approach!!

$$(x_1x_2x_3)^{-1}=x_3^{-1}x_2^{-1}x_1^{-1},\qquad x_1\big(x_2(x_3x_3^{-1})x_2^{-1}\big)x_1^{-1}.$$

Assume that $(x_1\cdots x_n)^{-1}=x_n^{-1}x_{n-1}^{-1}\cdots x_1^{-1}$ did not hold. Additionally, let $G$ be a non-abelian group. Then $(x_1\cdots x_n)^{-1}(x_1\cdots x_n)=e$. In order to guarantee that this results in $e$, it must be abelian: $x_1\cdots x_nx_1^{-1}\cdots x_n^{-1}$ does not necessarily equal $e$ unless each pair of $x_i$’s are next to each other.

Show $\prod_{i=1}^n n_in_i^{-1}=e$?

By induction. Base: $(x_1)(x_1^{-1})\to x_1x_1^{-1}=e$ ✓.

Assume it holds for $n$; we show it for $n+1$. So $(x_1\cdots x_n)(x_1\cdots x_n)^{-1}=e$ and $(x_1\cdots x_n)^{-1}=x_n^{-1}\cdots x_1^{-1}$. Now, by associativity,
$$(x_1\cdots x_nx_{n+1})\big(x_{n+1}^{-1}x_n^{-1}\cdots x_1^{-1}\big)=(x_1\cdots x_n)\big(x_{n+1}x_{n+1}^{-1}\big)(x_n^{-1}\cdots x_1^{-1}).$$
Well, $x_{n+1}x_{n+1}^{-1}=e$ and $mm^{-1}=e$ (with $m=x_1\cdots x_n$), so this is $e$. So $x_{n+1}^{-1}x_n^{-1}\cdots x_1^{-1}$ is the inverse of $x_1\cdots x_{n+1}$. $\blacksquare$

:::
:::

:::exercise 5
Show that a group $G$ cannot be the union of two proper subgroups.
:::solution
Plan for #5: show that there must exist one element without an inverse.

Examples tried: $S_4$, $A_4$, $K_4$, so $S_4\supsetneq A_4\supsetneq K_4$. Since $K_4\trianglelefteq A_4$, $K_4$ is not a proper subgroup?

$\ZZ/6$: $\ZZ/3\cup\ZZ/2$ uses different operations, so it does not count. In $\ZZ/6=\{0,1,2,3,4,5\}$ the inverses are $0,5,4,3,2,1$ respectively. Trying $\{0,2,4\}$ and $\{0,1,5\}$: the union $\{0,1,2,4,5\}$.
:::
:::

Progress report: #1 95% done, #2 75% done, #3 66% done, #4 100% done, #5 plan made.

:::exercise 6
Any finite group of even order contains an $x\in G$ such that $x\neq e$ but $x^2=e$.
:::solution
Maybe a proof by contradiction, with $|G|=2m$.
:::
:::
