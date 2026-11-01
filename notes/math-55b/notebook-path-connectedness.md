---
course: math-55b
chapter: 2
section: N11
title: Path-Connectedness
source-pages: 24-25, 26
---

*Lecture 6.*

:::definition Path
Let $X$ be a topological space and $x,y\in X$. A **path** from $x$ to $y$ is a continuous map $f\colon[a,b]\to X$ (with $[a,b]$ a subspace of $\RR$) such that $f(a)=x$, $f(b)=y$.
:::

![A path f from the interval [a,b] into X, running from x to y](/notes/math-55b/figures/b1-path.svg)

:::definition Path-connected
$X$ is **path-connected** if any two points $x,y$ can be joined by a path.
:::

:::note
Define $x\sim y$ by: there exists a path from $x$ to $y$. Claim: this is an equivalence relation.
:::

- Constant path: $f(t)=x$.
- Backwards path.
- **Concatenated paths** (“pasting lemma”):
$$f=\begin{cases}f_1(t)&t\in[a,c]\\ f_2(t)&t\in[c,b].\end{cases}$$

![A path f1 from x to y followed by a path f2 from y to z](/notes/math-55b/figures/b1-concatenation.svg)

The equivalence classes are the path-connected components. (We’ll return to this in algebraic topology.)

:::theorem
If $X$ is path-connected, then $X$ is connected.
:::

:::proof
Assume $X$ is not connected but is path-connected. So $X=U\cup V$ with $U\cap V=\emptyset$. Let $x\in U$, $y\in V$, and let $f\colon[a,b]\to X$ be a path from $x$ to $y$.

![A path from x in U to y in V, and the interval [a,b] split into the preimages of U and V](/notes/math-55b/figures/b1-path-connected-proof.svg)

Well, we know intervals are connected, and
$$[a,b]=f^{-1}(U)\cup f^{-1}(V),$$
with $a\in f^{-1}(U)$ and $b\in f^{-1}(V)$, a separation of $[a,b]$: contradiction.
:::

:::note Margin question
$\RR^2$ connected but not path-connected?

:::

The converse is false in general, but true for nice enough spaces (e.g. CW spaces).

:::example The “topologist’s sine curve”
$$S_0=\big\{(x,y)\in\RR^2\mid x>0,\ y=\sin\big(\tfrac1x\big)\big\},\qquad S=\{(0,0)\}\cup S_0.$$

![Graph of sin(1/x) for x > 0 together with the origin](/notes/math-55b/figures/b1-topologist-sine.svg)

$S_0$ is the image of $\RR_{>0}$ (which is connected) under the continuous map $x\mapsto\big(x,\sin\big(\tfrac1x\big)\big)$, therefore $S_0$ is a connected subspace of $\RR^2$.

**Claim:** $S$ is connected. If $S=U\cup V$ with $U,V$ disjoint and open, then
$$S_0=(S_0\cap U)\cup(S_0\cap V),$$
both open in the subspace topology. $S_0$ is connected, so one of them is empty (they cannot both be). Without loss of generality $V\cap S_0=\emptyset$ and $U\cap S_0=S_0$. Then
$$V\subset S-S_0=\{(0,0)\},$$
which is not open in $S$, so $V=\emptyset$.
:::

We claim that $S$ is not path-connected.

:::proof
Take a path in $S$ from $(\tfrac{1}{\pi}, 0)$ to $(0,0)$, $f: t \mapsto (x(t), y(t))$. By the IVT, $x(t)$ takes every value in $[0, \tfrac{1}{\pi}]$, so the image of the path contains the points
$$f(t_n) = \left(\frac{1}{2n\pi + \pi/2},\ 1\right), \qquad n = 1, 2, 3, \dots$$

By compactness (pass to a convergent subsequence $t_{n_k} \to t_0$) there is $t_0$ with $f(t_0) = \lim f(t_{n_k}) = (0,1)$, which is not a point of $S$. Contradiction.
:::

:::theorem
Let $A \subset \RR^n$ be open. Then $A$ is connected iff $A$ is path-connected.
:::

:::proof
Assume $A$ is open in $\RR^n$. Then the path components of $A$ are **open**. Indeed, if $x \in A$ then there is $r > 0$ such that $B_r(x) \subset A$. Any two points of $B_r(x)$ can be joined by a path inside $B_r(x)$ (e.g. a straight line), so $B_r(x)$ is contained in the path component of $x$.

![An open set A containing a ball around x; two points of the ball are joined by a straight segment](/notes/math-55b/figures/b2-ball-in-open-set.svg)

If $A$ is *not* path-connected, then
$$A = (\text{one path component}) \sqcup \Big(\bigcup \text{all other path components}\Big)$$
is a separation, so $A$ is not connected.
:::

:::remark
Similarly for manifolds and CW complexes (something with $k$-cells?). For such spaces, the path components are also the connected components of $X$, i.e. they partition $X$ into disjoint connected (nonempty) open subsets.
:::
