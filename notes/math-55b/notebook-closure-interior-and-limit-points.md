---
course: math-55b
chapter: 1
section: N7
title: Closure, Interior and Limit Points
source-pages: 9-12
---

## Closed sets

:::definition Closed set
$Z\subset X$ is **closed** if $X-Z$ is open.
:::

So:

- $\emptyset$ and $X$ are closed;
- arbitrary intersections of closed sets are closed;
- finite unions of closed sets are closed.

:::note
Most sets are neither open nor closed.
:::

## Closure

:::definition Closure
For $A\subset X$ any subset, the **closure** of $A$, $\overline{A}$, is the smallest closed set containing $A$:
$$\overline{A}=\bigcap_{\substack{F\supset A\\ F\text{ closed}}}F.$$
:::

If $A$ is a disk without its edge, then $\overline{A}$ is the disk with its edge:

![A disk without its edge and its closure, the disk with its edge](/notes/math-55b/figures/b1-closure.svg)

## Interior

:::definition Interior
The **interior** of $A$ ($\operatorname{int}(A)$ or $\mathring{A}$) is the largest open set contained in $A$:
$$\operatorname{int}(A)=\bigcup_{\substack{U\subset A\\ U\text{ open}}}U.$$
:::

- $x\in\operatorname{int}(A)\iff$ there is an open $U\ni x$ such that $U\subset A$.
- $x\in\overline{A}\iff$ for all open $U\ni x$, $U\cap A\neq\emptyset$ (i.e. $U\not\subset X-A$).

$$\overline{X-A}=X-\operatorname{int}(A),\qquad \operatorname{int}(X-A)=X-\overline{A}.$$

## Boundary

:::definition Boundary
The **boundary** of $A$ is $\partial A$ or $\operatorname{bd}(A)=\overline{A}-\operatorname{int}(A)$.
:::

![The interior of a disk (hatched, dashed edge) and its boundary (the circle)](/notes/math-55b/figures/b1-interior-boundary.svg)

$x\in\partial A\iff$ every open set in $X$ containing $x$ meets both $A$ and $X-A$.

## Dense sets

:::definition Dense
A subset $A$ is **dense** in $X$ if $\overline{A}=X$, i.e. every nonempty open $U\subset X$ has $U\cap A\neq\emptyset$.

:::

:::example
$\QQ\subset\RR$ and $\QQ^c\subset\RR$ are dense.
:::

## Limit points

:::definition Limit point
$x\in X$ is a **limit point** of a subset $A\subset X$ if for all open $U\ni x$ (called a **neighborhood** of $x$, so some open set around $x$),
$$U\cap(A-\{x\})\neq\emptyset.$$
:::

![Limit points of A, inside and on the edge of A, and an isolated point which is not a limit point](/notes/math-55b/figures/b1-limit-points.svg)

If $x\in A$ is not a limit point, then $x$ is an **isolated point** of $A$.

Recall $x\in\overline{A}\iff$ for all open $U\ni x$, $U\cap A\neq\emptyset$.

:::proposition
$\overline{A}=A\cup\{\text{limit points of }A\}$.
:::

(The two definitions match for $x\notin A$.)

:::remark
$A$ is closed $\iff\overline{A}=A$, and $A$ is open $\iff\operatorname{int}(A)=A$.
:::

:::corollary
$A$ is closed $\iff A$ contains all its limit points.
:::

## Limit points and sequences

Limit of a sequence: $p_n\to p$ in $X$ if for every neighborhood $U$ of $p$ there exists $N\in\NN$ such that $n\ge N\implies p_n\in U$.

**Facts.** Let $p\in X$.

- If there is a sequence $\{p_n\}$ in $A\subset X$ such that $p_n\to p$, then $p\in\overline{A}$.
- If there is a sequence $\{p_n\}$ in $A\subset X$ such that $p_n\to p$ **and** $p_n\neq p$ for infinitely many $n$, then $p$ is a limit point of $A$.

Conversely, in a metric space: if $p\in\overline{A}$ (resp. $p$ is a limit point of $A$), then for all $n>0$ there exists $p_n\in B_{1/n}(p)\cap A$ (resp. with $p_n\neq p$), and then $p_n\to p$.

![Nested balls of radius 1/n around p, each containing a point p_n of A](/notes/math-55b/figures/b1-nested-balls.svg)
