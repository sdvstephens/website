---
course: math-55b
chapter: 2
section: 7
title: Compact Subsets of Euclidean Space
date: 2026-02-09
lecturer: Denis Auroux
source-pages: 1-4
---

:::note Recall
- $X$ is **compact** if every open cover $(U_i)_{i\in I}$ of $X$ admits a **finite subcover**, i.e. there are $i_1,\dots,i_n$ such that $X = U_{i_1}\cup\dots\cup U_{i_n}$.
- $[0,1]\subset\RR$ is compact.
:::

:::theorem
If $X$ is compact and $f\colon X\to Y$ is continuous, then $f(X)\subset Y$ (with the subspace topology) is compact.
:::

(Remark: an open cover of $f(X)\subset Y$ with the subspace topology $\iff$ $U_i\subset Y$ open, $\bigcup_{i\in I} U_i\supset f(X)$.)

:::proof
Let $\bigcup_{i\in I} U_i$ be an open cover of $f(X)$. Then $\bigcup_{i\in I} f^{-1}(U_i)$ is an open cover of $X$, hence there are $i_1,\dots,i_n$ such that $f^{-1}(U_{i_1})\cup\dots\cup f^{-1}(U_{i_n}) = X$. So for all $x\in X$, $f(x)\in U_{i_1}\cup\dots\cup U_{i_n}$, i.e. $f(X)\subset U_{i_1}\cup\dots\cup U_{i_n}$, a finite subcover.
:::

Taking $Y = \RR$, once we know subsets of $\RR$ ($\RR^n$) are compact iff closed and bounded, this gives the extreme value theorem.

:::theorem
$X$ compact, $F\subset X$ closed $\Rightarrow$ $F$ is compact.
:::

:::proof
Given an open cover of $F$, i.e. $U_i\subset X$ open with $\bigcup_{i\in I} U_i\supset F$, let $V = X - F$, which is open: then $\{U_i,\ i\in I\}\cup\{V\}$ is an open cover of $X$, hence there is a finite subcover. Discarding $V$, this gives a finite subcover for $F$.
:::

The converse is true in Hausdorff spaces!

:::theorem
$X$ Hausdorff, $K\subset X$ compact $\Rightarrow$ $K$ is closed in $X$.
:::

:::proof
We show that $X - K$ is open. Let $x\in X - K$. Since $X$ is Hausdorff, for every $y\in K$ there are disjoint open subsets $U_y\ni x$, $V_y\ni y$.

Now $K\subset\bigcup_{y\in K} V_y$ is an open cover, so by compactness there are $y_1,\dots,y_n$ such that $K\subset V_{y_1}\cup\dots\cup V_{y_n}$.

Let $U = U_{y_1}\cap\dots\cap U_{y_n}\ni x$, which is open. Then $U\cap(V_{y_1}\cup\dots\cup V_{y_n}) = \emptyset$, so $U\cap K = \emptyset$.

Hence: for all $x\in X - K$, there is an open $U\ni x$ such that $U\subset X - K$.

![A compact set K covered by neighborhoods of y1, y2, y3, and a point x with matching disjoint neighborhoods](/notes/math-55b/figures/a2-hausdorff-point-compact.svg)
:::

(If we tried this for an arbitrary subset of $X$, we’d find that $\bigcap_{y\in K} U_y$ isn’t a neighborhood of $x$ anymore. Compactness lets us reduce an infinite process to a finite one.)

:::remark
We’ve actually shown more: $X$ Hausdorff, $K\subset X$ compact, $x\in X - K$ $\Rightarrow$ there exist disjoint open subsets $U\ni x$, $V\supset K$, $U\cap V = \emptyset$. I.e.: we can separate points from compact subsets!
:::

:::remark
When $X$ isn’t Hausdorff, $K\subset X$ compact $\not\Rightarrow$ $K$ closed in $X$: e.g. $X = \RR$ with the finite complement topology: *any* subset $K\subset X$ is compact. Indeed, a nonempty open subset contains all but finitely many points, so given an open cover it is easy to find a finite subcover: take one nonempty $U_i$, with finite complement $\{p_1,\dots,p_k\}$, then take $U_{i_j}$ containing $p_j$ for $j = 1,\dots,k$.
:::

Another instance of compactness allowing us to intersect infinitely many opens (or rather, reduce to a finite intersection) is the **tube lemma**:

:::proposition Tube lemma
Let $X$ be a topological space, $Y$ a compact topological space, $x_0\in X$. If $N\subset X\times Y$ is open and $\{x_0\}\times Y\subset N$, then there exists a neighborhood $U$ of $x_0$ in $X$ such that $U\times Y\subset N$.
:::

![The tube lemma: a vertical strip U × Y around x0 inside the open set N](/notes/math-55b/figures/a2-tube-lemma.svg)

:::proof
For all $y\in Y$, $(x_0, y)\in N$ open, so there is a basis open set $U_y\times V_y$, $U_y$ a neighborhood of $x_0$ in $X$, $V_y$ a neighborhood of $y$ in $Y$, such that $(x_0,y)\in U_y\times V_y\subset N$.

Now $\bigcup_{y\in Y} V_y = Y$ is an open cover. (Remark: $\big(\bigcap_{y\in Y} U_y\big)\times Y\subset N$, but $\bigcap_{y\in Y} U_y$ is not open!)

Since $Y$ is compact, there are $y_1,\dots,y_n\in Y$ such that $Y = V_{y_1}\cup\dots\cup V_{y_n}$. Let $U = U_{y_1}\cap\dots\cap U_{y_n}$. Then $U$ is a neighborhood of $x_0$ in $X$, and $U\times Y\subset\bigcup_{i=1}^n U_{y_i}\times V_{y_i}\subset N$.
:::

As a consequence:

:::theorem
$X, Y$ compact $\Rightarrow$ $X\times Y$ is compact.
:::

:::proof
Let $\{A_\alpha\}$ be an open cover of $X\times Y$. For any given $x\in X$, $\{x\}\times Y$ is compact, so there is a finite subcollection $A_{x,1},\dots,A_{x,n(x)}$ which suffices to cover $\{x\}\times Y$.

$A_{x,1}\cup\dots\cup A_{x,n(x)}$ is open, so by the tube lemma there is a neighborhood $U_x\ni x$ in $X$ such that $A_{x,1}\cup\dots\cup A_{x,n(x)}\supset U_x\times Y$. Now $X$ is compact, and $\{U_x\}_{x\in X}$ form an open cover, so there are $x_1,\dots,x_k\in X$ such that $X = U_{x_1}\cup\dots\cup U_{x_k}$.

Now $A_{x_i,j}$, $1\le i\le k$, $1\le j\le n(x_i)$, is a finite subcover for $X\times Y$.
:::

## Compact subsets of $\RR^n$

:::theorem
$K\subset\RR^n$ is compact iff $K$ is closed and bounded.
:::

:::proof
- If $K\subset\RR^n$ is compact then it is closed (by the theorem above: $\RR^n$ is Hausdorff) and bounded: $K\subset\bigcup_{r>0} B_r(0)$ is an open cover, so there is a finite subcover, so there is $R>0$ such that $K\subset B_R(0)$.
- If $K\subset\RR^n$ is closed and bounded, then it’s a closed subset of $[-R,R]^n$ for some $R>0$. $[-R,R]^n$ is a finite product of compact sets ($[-R,R]\simeq[0,1]$), hence compact; and a closed subset of a compact space is compact.
:::

:::remark
- Closed and bounded are necessary conditions for compactness of a subspace of any metric space (HW!), but in “most” metric spaces, closed + bounded $\not\Rightarrow$ compact.
- There are easy counterexamples (find one for HW!). More interesting: let $V$ be *any* infinite-dimensional vector space with a norm, $d(v,v') = \|v - v'\|$. E.g. $\mathcal{F} = C^0([a,b],\RR)$, continuous functions with the sup norm $d(f,g) = \sup|f-g|$ (uniform topology). Then $\overline{B} = \{v\in V \mid \|v\|\le 1\}$ is closed and bounded but never compact. (The proof uses sequential compactness.) (Don’t use this for Munkres 26.4.)
:::

## Applications of compactness

We now look at applications of compactness. We’ve seen:

:::theorem
If $X$ is compact and $f\colon X\to Y$ is continuous, then $f(X)\subset Y$ (with the subspace topology) is compact.
:::

:::corollary Extreme value theorem
$X$ compact (nonempty), $f\colon X\to\RR$ continuous $\Rightarrow$ $f$ attains its max and min.
:::

:::example
Let $(X,d)$ be a metric space, $A\subset X$ nonempty, $x\in X$. Define

$$d(x,A) = \inf\{d(x,a) \mid a\in A\}\ge 0$$

(the **distance** of $x$ to the subset $A$). If $A$ is compact then the inf is always achieved! See HW3 Problem 1 = Munkres 27.2.

Similarly, the **diameter** of a bounded subset is $\diam(A) = \sup\{d(x,y) \mid x,y\in A\}$. The sup is attained for $A$ compact ($d\colon A\times A\to\RR$ is continuous, so achieves its max).
:::

Another corollary:

:::corollary
If $X$ is compact and $Y$ is Hausdorff, then any continuous bijection $f\colon X\to Y$ is a homeomorphism.
:::

:::proof
We need to check $f^{-1}$ is continuous as well (so $U\subset X$ open $\iff$ $f(U)\subset Y$ open).

$U\subset X$ open $\Rightarrow$ $X - U$ closed, hence compact $\Rightarrow$ $f(X - U) = Y - f(U)$ compact. Since $Y$ is Hausdorff, this implies $Y - f(U)$ is closed, i.e. $f(U)$ is open in $Y$.
:::

(We’ve seen that without such assumptions a continuous bijection need not be a homeomorphism, e.g. $[0,2\pi)\to S^1$, $t\mapsto(\cos t, \sin t)$.)

## The Lebesgue number lemma and uniform continuity

In metric spaces, compactness implies *uniform* estimates.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 8](/notes/math-55b/08-compactness-in-metric-spaces)
:::lemma Lebesgue number lemma
Let $(X,d)$ be a compact metric space and $(U_i)_{i\in I}$ an open cover of $X$. Then there is $\delta>0$ such that any subset of diameter $<\delta$ is entirely contained in a single open $U_i$.
:::

:::proof
By compactness, we can assume $(U_i)$ is a finite cover $= U_1\cup\dots\cup U_n$. The function

$$f(x) = \frac1n\sum_{i=1}^n d(x, X - U_i)$$

is continuous (check: distance to a subset is a continuous function), so it achieves its min, which is therefore $>0$ (for every $x\in X$ there is $i$ such that $x\in U_i$, and then $d(x, X - U_i)>0$, as $X - U_i$ is a closed set, hence compact). Hence there is $\delta>0$ such that $f(x)\ge\delta$ for all $x\in X$. Thus for every $x\in X$ there is $U_i$ such that $d(x, X - U_i)\ge\delta$, i.e. $B_\delta(x)\subset U_i$. Since a subset of diameter $<\delta$ is contained in a ball of radius $\delta$, the result follows.
:::

This is the magic of compactness!

Noncompact counterexamples (where there is no Lebesgue number):

- $\RR = \bigcup$ intervals with overlaps of lengths $\to 0$, e.g. $\bigcup_{n\in\ZZ}(n, n+1+\eps_n)$ with $\eps_n\to 0$.

- $\RR^2 = U_1\cup U_2$, with $U_1$ containing the hyperbola $xy = 1$, $U_2$ containing the $x$-axis, and the distance between the two curves $\to 0$:

![The plane covered by an open set around the hyperbola xy = 1 and an open set around the x-axis](/notes/math-55b/figures/a2-lebesgue-counterexample.svg)

**Uniform continuity**

This only makes sense for metric spaces! There is no notion of uniform size of neighborhood without a metric.

:::definition
$f\colon (X,d_X)\to(Y,d_Y)$ is **uniformly continuous** if for all $\eps>0$ there is $\delta>0$ such that for all $p,q\in X$, $d_X(p,q)<\delta\Rightarrow d_Y(f(p),f(q))<\eps$.
:::

(Compare with continuity: the *same* $\delta$ must work for every $p$!)

:::theorem
If $X$ and $Y$ are metric spaces, $f\colon X\to Y$ is continuous, and $X$ is compact, then $f$ is uniformly continuous.
:::

:::proof
Take $\eps>0$, and consider the open cover of $Y$ by balls of radius $\frac\eps2$ (so if $f(p), f(q)$ land in the same ball, they’re less than $\eps$ apart). Then $X = \bigcup_{y\in Y} f^{-1}(B_{\eps/2}(y))$ is an open cover, so by the Lebesgue number lemma there is $\delta>0$ such that if $d_X(p,q)<\delta$ then $p$ and $q$ lie in the same element of the cover, hence $d_Y(f(p),f(q))<\eps$.
:::

**Alternative notions of compactness**

:::definition
- $X$ is **limit point compact** if every infinite subset of $X$ has a limit point.
- $X$ is **sequentially compact** if every sequence $\{p_n\}$ in $X$ has a convergent subsequence.
:::

:::example
In $\RR$, $\{\frac1n,\ n\ge 1\}\cup\ZZ_+$ has a limit point ($0$), and the sequence $1, 2, \frac12, 3, \frac13, 4, \frac14, \dots$ has a convergent subsequence ($\frac12, \frac13, \frac14,\dots$); so does $0,1,0,1,0,1,\dots$ (e.g. the subsequence $0,0,\dots$).

*But* $\ZZ\subset\RR$ has no limit point and the sequence $1,2,3,\dots$ doesn’t have a convergent subsequence, so $\RR$ is neither limit point compact nor sequentially compact.
:::

:::theorem
$X$ is compact $\Rightarrow$ $X$ is limit point compact.
:::

:::proof
Assume $X$ is not limit point compact, i.e. there is an infinite $A\subset X$ with no limit point. Since $A$ contains all of its limit points (there are none), $A$ is closed in $X$, hence compact. However, for all $a\in A$, $a$ isn’t a limit point, so there is a neighborhood $U_a\ni a$ such that $U_a\cap A = \{a\}$. $(U_a)_{a\in A}$ is now an infinite open cover of $A$, without any finite subcover, since each $a\in A$ only belongs to $U_a$ and not to any other element of the cover. Contradiction.
:::

Next time we’ll see:

- **Theorem.** $X$ sequentially compact $\Rightarrow$ $X$ limit point compact.
- **Theorem.** For a metric space $(X,d)$: $X$ compact $\iff$ $X$ limit point compact $\iff$ $X$ sequentially compact.
:::
