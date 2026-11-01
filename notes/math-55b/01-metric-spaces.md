---
course: math-55b
chapter: 1
section: 1
title: Metric Spaces
date: 2026-01-26
lecturer: Denis Auroux
source-pages: 1-5
---

:::readings Review sessions and handouts
- Lillian MacArthur, [Week 1 review: metric and topological spaces](/notes/math-55b/readings/review-week-1-metric-and-topological-spaces.pdf)
- Joe Harris, revised by Denis Auroux, [Metric spaces](/notes/math-55b/readings/harris-auroux-metric-spaces.pdf)
:::

## About the course

The first half of the course is topology plus real analysis: (1) point-set topology, i.e. topological spaces (including some pieces of analysis); (2) an introduction to algebraic topology: fundamental groups; (3) a bit more real analysis. Then we move on to complex analysis. Books you should have: Munkres, *Topology*, 2nd ed.; Ahlfors, *Complex Analysis*, 3rd ed.; recommended: Rudin, *Principles of Mathematical Analysis*.

## What is topology?

Unlike geometry, which concerns quantitative information about spaces (distances, volumes, …), topology concerns itself with qualitative properties that are invariant under continuous deformation. E.g.: is it connected (a single piece)? Simply connected? (A sphere vs. a torus.)

Point-set topology also gives a *language* (topological spaces, open and closed sets, compactness, …) both for algebraic topology (which associates algebraic invariants to spaces, e.g. the fundamental group) and for analysis.

:::example
The extreme value theorem says: if $f:[a,b]\to\RR$ is continuous, then $f$ achieves its max and min at some points of $[a,b]$.

This is in fact true for any continuous $f:X\to\RR$ whenever $X$ is a *compact* topological space, and is a special instance of the following theorem.
:::

:::theorem
If $f:X\to Y$ is a continuous mapping between topological spaces, and $X$ is compact, then $f(X)$ is compact.
:::

## Metric spaces

Since the general notion of topological space is quite abstract, let’s start with a more familiar class of examples: **metric spaces** (cf. handout; also Rudin, beginning of Chapters 2, 3, 4).

:::definition
A **metric space** $(X,d)$ is a set $X$ together with a **distance** function $d:X\times X\to\RR_{\ge 0}$ such that:

1. for $p,q\in X$, $d(p,q)=0\iff p=q$;
2. for $p,q\in X$, $d(p,q)=d(q,p)$;
3. for $p,q,r\in X$, $d(p,r)\le d(p,q)+d(q,r)$ (triangle inequality).
:::

:::example
$X=\RR^n$ with the Euclidean distance $d(x,y)=\left(\sum_{i=1}^n (y_i-x_i)^2\right)^{1/2}$.
:::

:::example
If $Y\subset X$ then $(Y,d|_Y)$ is a metric space (“induced metric”).
:::

:::example
Different metrics on $\RR^n$:
$$
d_1(x,y)=\sum_{i=1}^n |y_i-x_i|,\qquad d_\infty(x,y)=\max_i\,|y_i-x_i|.
$$

![The distances d, d_1 and d_infinity between two points x and y in the plane](/notes/math-55b/figures/a1-metrics-comparison.svg)
:::

:::exercise
Check that $(\RR^n,d_1)$ and $(\RR^n,d_\infty)$ are metric spaces. What do balls look like?
:::

:::definition
Let $(X,d)$ be a metric space, $p\in X$, $r>0$. The **open ball** of radius $r$ around $p$ (or **neighborhood**) is
$$
B_r(p)=\{q\in X\mid d(p,q)<r\}.
$$
:::

Here’s a more general notion:

:::definition
$U\subset X$ is **open** if $\forall p\in U$, $\exists r>0$ such that $B_r(p)\subset U$.
:::

![An open set U containing a ball B_r(p) around each of its points p](/notes/math-55b/figures/a1-open-set.svg)

:::proposition (HW!)
Open balls are open; so are arbitrary unions and *finite* intersections of open sets.
:::

- In fact, open sets are unions of open balls! ($U=\bigcup_{p\in U}B_{r(p)}(p)$.)
- This is useful for a general discussion of continuity.

## Continuity

:::definition
Let $(X,d_X)$, $(Y,d_Y)$ be metric spaces. $f:X\to Y$ is **continuous** if $\forall p\in X$, $\forall\eps>0$, $\exists\delta>0$ such that
$$
d_X(p,x)<\delta\implies d_Y(f(p),f(x))<\eps.
$$
:::

![Continuity: some delta-ball around p is mapped into the given epsilon-ball around f(p)](/notes/math-55b/figures/a1-continuity.svg)

:::theorem
$f:X\to Y$ is continuous iff $\forall U\subset Y$ open, $f^{-1}(U)\subset X$ is open.
:::

:::proof
- Assume $f$ is continuous, let $U\subset Y$ be open, and let $p\in f^{-1}(U)$, i.e. $f(p)\in U$. Since $U$ is open, $\exists\eps>0$ such that $B_\eps(f(p))\subset U$. By continuity, $\exists\delta>0$ such that $d_X(p,x)<\delta\implies f(x)\in B_\eps(f(p))\subset U$. Hence $B_\delta(p)\subset f^{-1}(U)$. So $f^{-1}(U)$ is open.
- Conversely, assume $U$ open $\implies f^{-1}(U)$ open. Fix $p\in X$, $\eps>0$. $B_\eps(f(p))$ is open in $Y$, so $f^{-1}(B_\eps(f(p)))\ni p$ is open in $X$. Hence $\exists\delta>0$ such that $B_\delta(p)\subset f^{-1}(B_\eps(f(p)))$. This means
$$
d_X(p,x)<\delta\implies x\in f^{-1}(B_\eps(f(p)))\implies f(x)\in B_\eps(f(p)).\ \checkmark
$$
:::

(Our first $\eps$–$\delta$ proof, but not our last!)

## Sequences and limits

We can also talk about sequences and their limits.

:::definition
A sequence $p_1,p_2,\dots$ in $(X,d)$ **converges** to a **limit** $p\in X$ (write $p_n\to p$ or $\lim_{n\to\infty}p_n=p$) if $\forall\eps>0$ $\exists N$ such that $\forall n\ge N$, $d(p_n,p)<\eps$.
:::

The limit is unique if it exists. Here the $p_n$ get closer to $p$! Compare with sequences whose terms get closer to each other:

:::definition
A sequence $p_1,p_2,\dots$ in $X$ is **Cauchy** if $\forall\eps>0$ $\exists N$ such that $\forall m,n\ge N$, $d(p_n,p_m)<\eps$.
:::

:::exercise
If a sequence converges then it is Cauchy, but not necessarily vice versa.
:::

A metric space is **complete** if every Cauchy sequence converges.

:::example
$\RR$ is complete, but $\QQ$ (with the induced metric) isn’t complete.
:::

The notion of Cauchy sequence is specific to metric spaces, but really useful for real analysis.

:::example
$e=\sum_{k=0}^\infty\frac{1}{k!}$. If we take this to be the *definition* of $e$, we can’t prove directly that $x_n=\sum_{k=0}^n\frac{1}{k!}$ converges to $e$; instead, use the Cauchy criterion to show that the limit exists.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 2](/notes/math-55b/02-topologies-bases-subspaces-and-products)
**Interlude: what is $\RR$?**

Answer: it’s an ordered field (i.e. $+,-,\times,/$ and $<$ compatible with the usual rules) with the **least upper bound property**: every nonempty subset $E\subset\RR$ that admits an upper bound ($\exists M\in\RR$ such that $\forall x\in E$, $x\le M$) has a *least* upper bound $\sup(E)\in\RR$ (i.e. $\sup(E)$ is an upper bound, and every upper bound for $E$ is $\ge\sup(E)$).

The l.u.b. property is equivalent to completeness of $\RR$; any ordered field with this property is isomorphic to $(\RR,+,\times,<)$. Constructions of $\RR$ from $\QQ$ involve adding the missing elements (irrationals) so that the l.u.b. property / completeness holds; the elements of $\RR$ end up being either the sups of certain subsets of $\QQ$ (see e.g. Rudin) or the limits of Cauchy sequences in $\QQ$ (see HW).

**Back to limits of sequences**

:::proposition
If $p_n\to p$, then every open subset $U\ni p$ contains $p_n$ for all but finitely many $n$.
:::

:::proof
$U\ni p$, $U$ open $\implies\exists\eps>0$ such that $B_\eps(p)\subset U$. So $\exists N$ such that $n\ge N\implies p_n\in B_\eps(p)\subset U$.
:::

This will be the definition of limit outside the metric case.

**Closed sets**

:::definition
$Z\subset X$ is **closed** if its complement $X\setminus Z$ is open.
:::

**Warning:** most subsets of $X$ are neither open nor closed!! And… $\emptyset$ and $X$ are *both*!

:::proposition
If $Z\subset X$ is closed, then for every sequence $\{p_n\}$ in $Z$ which converges to a limit $p\in X$, we have $p\in Z$.
:::

:::proof
By contradiction. Assume $\exists\{p_n\}\subset Z$ and $p\in X\setminus Z$ with $p_n\to p$. Then $\forall U\ni p$ open, $U$ contains $p_n$ for all but finitely many $n$. However, if $Z$ is closed then $X\setminus Z\ni p$ is open, but does not contain $p_n$ for any $n$ (since $p_n\in Z$). This is a contradiction.
:::

(The converse is true in metric spaces and in nice enough topological spaces: “first countable”.)

**Topological spaces**

Our goal will be to reformulate/generalize all this in the context of **topological spaces**, i.e. sets equipped with a **topology** which may or may not come from a metric.

:::definition
A **topology** $\mcT$ on a set $X$ is a collection of subsets of $X$, which we’ll declare to be the **open sets** in $X$. It needs to satisfy the axioms:

- $\emptyset\in\mcT$, $X\in\mcT$;
- any union of elements of $\mcT$ is in $\mcT$;
- the intersection of finitely many elements of $\mcT$ is in $\mcT$.
:::

**Why bother?** One answer: many natural topologies do not come from a metric! E.g., in analysis:

- On the space of (bounded) functions $f:X\to\RR$, the uniform convergence topology ($f_n\to f$ iff $\sup_x|f_n(x)-f(x)|\to0$) comes from a metric ($d(f,g)=\sup_x|f(x)-g(x)|$), but pointwise convergence ($f_n\to f$ iff $\forall x\in X$, $f_n(x)\to f(x)$) doesn’t (“product topology”).
- The $C^\infty$ topology on smooth functions $\RR\to\RR$ doesn’t come from a metric either.

And on the other hand, a metric contains extraneous information for topology. E.g. $(\RR^n,d)$, $(\RR^n,d_1)$, $(\RR^n,d_\infty)$ have the same open sets, hence the same topology.
:::
