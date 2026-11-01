---
course: math-55b
chapter: 2
section: 6
title: Path-Connectedness and Compact Spaces
date: 2026-02-06
lecturer: Denis Auroux
source-pages: 1-4
---

Last time: $X$ is **connected** if there is no separation $X = U\cup V$ with $U, V$ disjoint nonempty open subsets.

## Path-connectedness

:::definition
Let $X$ be a topological space, $x, y\in X$. A **path** from $x$ to $y$ is a continuous map $f\colon [a,b]\to X$ (where $[a,b]$ has the subspace topology of the standard $\RR$) such that $f(a) = x$ and $f(b) = y$.
:::

:::definition
$X$ is **path-connected** if every pair of points in $X$ can be joined by a path.
:::

![An annulus X with two different paths from x to y](/notes/math-55b/figures/a2-two-paths.svg)

:::note
The relation $x\sim y \iff x$ and $y$ can be connected by a path is an **equivalence relation**, i.e.

1. $x\sim x$ (constant path $f(t) = x$);
2. $x\sim y \iff y\sim x$ (backwards path $f(-t)$);
3. $x\sim y$ and $y\sim z \Rightarrow x\sim z$ (**concatenate** paths: $f = \begin{cases} f_1(t) & t\in[a,c]\\ f_2(t) & t\in[c,b]\end{cases}$).
:::

The equivalence classes are called the **path components** of $X$. (Will return to these in algebraic topology!)

:::theorem
If $X$ is path-connected then $X$ is connected.
:::

:::proof
Assume not, i.e. $X = U\sqcup V$ disjoint open, $x\in U$, $y\in V$. Pick a path $f\colon [a,b]\to X$ connecting $x$ to $y$. Then $[a,b] = f^{-1}(U)\sqcup f^{-1}(V)$ are open subsets (containing $a$ and $b$ respectively). This contradicts the connectedness of $[a,b]$.
:::

The converse is false in general, but true for nice enough spaces, e.g. CW-complexes.

:::example The “topologist’s sine curve”
Let

$$S = \underbrace{\{(x,y) \mid y = \sin(\tfrac1x),\ x>0\}}_{\eqqcolon S_0} \cup \{(0,0)\}\subset\RR^2.$$

![Graph of sin(1/x) for x > 0 together with the origin](/notes/math-55b/figures/a2-sine-curve.svg)

The “main” part $S_0$ is connected, since it’s the image of $\RR_+$ (connected) under the continuous map $x\mapsto (x, \sin\frac1x)$.

Hence $S$ is connected: if $S = U\cup V$ disjoint open, then $S_0 = (U\cap S_0)\cup(V\cap S_0)$ is disjoint and open, so one of them (e.g. $V\cap S_0$) is empty. Then $V\subset S - S_0 = \{(0,0)\}$. But $\{(0,0)\}$ is not open in $S$, so in fact $V = \emptyset$.

But $S$ is not path-connected: there is no continuous

$$f\colon [0,1]\to S,\quad t\mapsto (x(t), y(t)) \quad\text{such that}\quad f(0) = (0,0),\ f(1) = (\tfrac1\pi, 0),$$

because the intermediate value property for $x(t)$ gives a sequence $t_n\searrow t_0$ such that $x(t_n)\to 0$ and $y(t_n) = 1$, so $\lim_{n\to\infty} f(t_n) = (0,1) \neq f(t_0) = (0,0)$. (Cf. Munkres, end of §24.)
:::

However, for nice enough spaces the two notions are equivalent. For example:

:::theorem
$A\subset\RR^n$ open $\Rightarrow$ $A$ is connected iff $A$ is path-connected.
:::

:::proof
Assume $A$ open in $\RR^n$: then the path components of $A$ (i.e. equivalence classes for the equivalence relation “can be joined by a continuous path in $A$”) are *open*. Indeed, if $x\in A$ then there is $r>0$ such that $B_r(x)\subset A$, and any two points of $B_r(x)$ can be connected inside $A$ by a straight line segment. So all of $B_r(x)$ is in the same path component. Now: if $A$ is not path-connected then

$$A = (\text{one path component})\cup\Big(\bigcup \text{all other path components}\Big)$$

gives a separation (while we’ve already seen that if $A$ is path-connected then $A$ is connected).
:::

This implies similar results for other classes of spaces, e.g. topological manifolds and CW-complexes.

For these kinds of spaces, path components are also **connected components**, i.e. they give a partition of $X$ into disjoint connected open (and closed) subsets. Such a partition only exists if $X$ is **locally connected**, i.e. the topology has a basis consisting of connected open subsets. (Counterexample: $\QQ\subset\RR$ isn’t locally connected: each point of $\QQ$ is its own path component, but these aren’t open.)

## Compactness (Munkres §26–…)

Compactness is a “finiteness/boundedness” property of nice topological spaces such as closed bounded intervals $[a,b]\subset\RR$, or more generally, closed bounded subsets of $\RR^n$.

E.g.: any continuous map $f\colon K\to\RR$ with $K$ compact achieves its maximum and minimum.

The definition isn’t very intuitive.

:::definition
An **open cover** of a topological space $X$ is a collection of open subsets $(U_i)_{i\in I}$ such that $\bigcup_{i\in I} U_i = X$.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 7](/notes/math-55b/07-compact-subsets-of-euclidean-space)
:::definition
$X$ is **compact** if *every* open cover $(U_i)_{i\in I}$ of $X$ admits a **finite subcover**, i.e. there are $i_1,\dots,i_n$ such that $X = U_{i_1}\cup\dots\cup U_{i_n}$.
:::

Showing a space is *not* compact is much easier than showing it is!

:::example
$\RR$ is not compact: the open cover $\RR = \bigcup_{n\in\ZZ}(n-1, n+1)$ has no finite subcover.

Neither is $(0,1]$ with the subspace topology: $(0,1] = \bigcup_{n\in\NN}(\frac1n, 1]$ has no finite subcover.
:::

:::example
$X = \{0\}\cup\{\frac1n,\ n\in\ZZ_+\}$ is compact: given *any* open cover $X = \bigcup_{i\in I} U_i$, let $i_0$ be such that $0\in U_{i_0}$; then $U_{i_0}$ also contains $\frac1n$ for all large $n\ge N$, hence $U_{i_1},\dots,U_{i_N}$ containing $1, \frac12, \dots, \frac1N$, together with $U_{i_0}$, give a finite subcover.
:::

:::theorem
If $X$ is compact and $f\colon X\to Y$ is continuous, then $f(X)\subset Y$ (with the subspace topology) is compact.
:::

(Remark: an open cover of $f(X)\subset Y$ with the subspace topology $\iff$ $U_i\subset Y$ open, $\bigcup_{i\in I} U_i\supset f(X)$.)

:::proof
Let $\bigcup_{i\in I} U_i$ be an open cover of $f(X)$. Then $\bigcup_{i\in I} f^{-1}(U_i)$ is an open cover of $X$, hence there are $i_1,\dots,i_n$ such that $f^{-1}(U_{i_1})\cup\dots\cup f^{-1}(U_{i_n}) = X$. So for all $x\in X$, $f(x)\in U_{i_1}\cup\dots\cup U_{i_n}$, i.e. $f(X)\subset U_{i_1}\cup\dots\cup U_{i_n}$, a finite subcover.
:::

Once we know subsets of $\RR^n$ are compact iff closed and bounded, taking $Y = \RR$, this gives the extreme value theorem. To get started on this right away:

:::theorem
$[0,1]$ (with the subspace topology $\subset\RR$) is compact.
:::

:::proof
Let $\{U_i\}_{i\in I}$ be an open cover of $[0,1]$. Let

$$A = \{x\in[0,1] \mid \text{there is a finite subcover } U_{i_1}\cup\dots\cup U_{i_n}\supset[0,x]\}.$$

$A\neq\emptyset$ (it contains $0$). We want to show $1\in A$. Let $a = \sup(A)\in[0,1]$.

- First we show $a\in A$: there is $i_0$ such that $a\in U_{i_0}$; since $U_{i_0}$ is open, there is $\eps>0$ such that $B_\eps(a)\subset U_{i_0}$. On the other hand $a = \sup A$, so there is $x\in A$ with $x>a-\eps$, and a finite subcover $[0,x]\subset U_{i_1}\cup\dots\cup U_{i_n}$. Therefore $[0,a]\subset U_{i_1}\cup\dots\cup U_{i_n}\cup U_{i_0}$, and $a\in A$.
- Next, assume $a<1$: since $a\in A$, there are $i_1,\dots,i_n$ such that $[0,a]\subset U_{i_1}\cup\dots\cup U_{i_n}$, which is open, so there is $\eps>0$ such that $B_\eps(a)\subset U_{i_1}\cup\dots\cup U_{i_n}$. Hence $U_{i_1}\cup\dots\cup U_{i_n}$ covers $[0,x]$ for some $x>a$ (e.g. $x = a+\frac\eps2$ if this is $\le 1$, else $1$), which contradicts $\sup(A) = a$.
- So $a = 1\in A$: there is a finite subcover.

![Open intervals covering [0,1] up to a, and an interval of radius epsilon around a](/notes/math-55b/figures/a2-interval-cover.svg)
:::

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

:::example
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

:::theorem
$X, Y$ compact $\Rightarrow$ $X\times Y$ is compact.
:::

:::proof
Let $\{A_\alpha\}$ be an open cover of $X\times Y$. For any given $x\in X$, $\{x\}\times Y$ is compact, so there is a finite subcollection $A_{x,1},\dots,A_{x,n(x)}$ which suffices to cover $\{x\}\times Y$.

$A_{x,1}\cup\dots\cup A_{x,n(x)}$ is open, so by the tube lemma there is a neighborhood $U_x\ni x$ in $X$ such that $A_{x,1}\cup\dots\cup A_{x,n(x)}\supset U_x\times Y$. Now $X$ is compact, and $\{U_x\}_{x\in X}$ form an open cover, so there are $x_1,\dots,x_k\in X$ such that $X = U_{x_1}\cup\dots\cup U_{x_k}$.

Now $A_{x_i,j}$, $1\le i\le k$, $1\le j\le n(x_i)$, is a finite subcover for $X\times Y$.
:::

We now have all the ingredients needed to prove:

:::theorem
$K\subset\RR^n$ is compact iff $K$ is closed and bounded.
:::
:::
