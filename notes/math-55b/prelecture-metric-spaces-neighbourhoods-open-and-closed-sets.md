---
course: math-55b
chapter: 1
section: P1
title: Metric Spaces: Neighbourhoods, Open and Closed Sets
source-pages: 1-12
---

:::note
Topology concerns itself with “qualitative properties” that are invariant (unchanging) under “continuous deformation.”
:::

- Example: “Is a single piece connected?” A sphere vs. a torus:

![A sphere next to a torus](/notes/math-55b/figures/b3-sphere-torus.svg)

- Example: the extreme value theorem and the mean value theorem, for $f\colon [a,b]\to\RR$.

Point-set topology gives us the language for both real analysis and algebraic topology.

WTF is a “compact” topological space?

:::definition Definition 1.1
A **metric space** $(X,d)$ is a set $X$ together with a function $d\colon X\times X\to\RR_{\geq 0}$, called the **distance function** (it gives the distance between any pair of points as a real number), satisfying the following conditions:

1. for any two points $p,q\in X$, $d(p,q)=0 \iff p=q$;
2. for any two points $p,q\in X$, $d(p,q)=d(q,p)$; and
3. the triangle inequality holds: for any three points $p,q,r\in X$,
$$d(p,r)\leq d(p,q)+d(q,r).$$
:::

:::example
Let $X=\RR^n$ (i.e. $d\colon\RR^n\times\RR^n\to\RR_{\geq 0}$) with distance function
$$d\big((x_1,\dots,x_n),(y_1,\dots,y_n)\big)=\sqrt{\sum_{i=1}^n (y_i-x_i)^2}.$$
:::

## Neighbourhoods, limit points, open and closed sets

:::definition
Let $X$ be a metric space. Let all of the following be subsets (and elements) of $X$.

**(a)** A **neighborhood** of $p$ is a set $N_r(p)$ consisting of all points $q$ such that $d(p,q)<r$, for some $r>0$. The number $r$ is called the **radius** of $N_r(p)$.

**(b)** A point $p$ is a **limit point** of the set $E$ if every neighborhood of $p$ contains a point $q\neq p$ such that $q\in E$. *”A limit point of a set $E$ is a point which, if you draw any neighborhood around it, contains a point in $E$ other than itself.”*

**(c)** If $p\in E$ and $p$ is not a limit point of $E$, then $p$ is an **isolated point** of $E$. *”If you have a point in $E$ with a neighborhood (with radius $r$ small enough) that contains no other point in $E$ (i.e. a neighborhood with no other point(s) of $E$), then that point is an isolated point.”*

**(d)** $E$ is **closed** if every limit point of $E$ is a point of $E$. *”If every point all of whose neighborhoods contain points of $E$ is in $E$ (i.e. there is no limit point of $E$ outside of $E$), then $E$ is closed.”*

**(e)** A point $p$ is an **interior point** of $E$ if there is a neighborhood $N$ of $p$ such that $N\subset E$. *”If a point $p$ has a nbhd in $E$, then $p$ is an interior point.”*

**(f)** $E$ is **open** if every point of $E$ is an interior point of $E$. *”If every point in $E$ has a nbhd in $E$, then $E$ is open.”*

**(g)** The **complement** of $E$ (denoted $E^c$) is the set of all points $p\in X$ such that $p\notin E$. *”The complement of $E$ is the set of all points not in $E$.”*

**(h)** $E$ is **perfect** if $E$ is closed and if every point of $E$ is a limit point of $E$. *”If every point of $E$ is a limit point of $E$ and all limit points of $E$ are in $E$ (i.e. no limit point of $E$ exists outside of $E$), then $E$ is perfect.”*

**(i)** $E$ is **bounded** if there exists a real number $M$ and a point $q\in X$ such that $d(p,q)<M$ for all $p\in E$. *”$E$ is bounded if there is a max distance that you can travel from any point in $E$ without leaving $E$.”*

**(j)** $E$ is **dense** in $X$ if every point of $X$ is a limit point of $E$, or a point of $E$, or both. *”If every point in $X$ either is a point in $E$ or has a point of $E$ (other than itself) in every nbhd, then $E$ is dense in $X$.”*

:::

:::note
In $\RR$, neighborhoods are segments, and in $\RR^2$ neighborhoods are interiors of circles.
:::

:::definition
A **segment** is the set of all $x\in\RR$ such that $a<x<b$. Denoted $(a,b)$.
:::

:::definition
An **interval** is the set of all $x\in\RR$ such that $a\leq x\leq b$. Denoted $[a,b]$.
:::

:::definition
A **$k$-cell** is the set of all points $x=(x_1,\dots,x_k)\in\RR^k$ that satisfy the inequalities $a_i\leq x_i\leq b_i$ with $1\leq i\leq k$, for real numbers $a_i<b_i$.
:::

:::note
A 1-cell is an interval, a 2-cell is a rectangle, and so on.
:::

:::definition
If $x\in\RR^k$ and $r>0$, the **open** (or **closed**) **ball** $B$ with center $x$ and radius $r$ is the set of all $y\in\RR^k$ such that $|y-x|<r$ (or $|y-x|\leq r$).
:::

:::theorem
Every neighborhood is an open set.
:::

:::proof
All points of a neighborhood are contained within an open ball with radius $r>0$. The definition of an open set is that all points in $E$ (in this case $N_r(p)$) are interior points.

So consider a neighborhood $E=N_r(p)$ and let $q\in E$ be any point. There is an $h>0$ such that $d(p,q)=r-h$ (i.e. there is a distance within the neighborhood $<r$). For all points $s$ such that $d(q,s)<h$, we have
$$d(p,s)\leq d(q,s)+d(q,p)<h+(r-h)=r,$$
so that $s\in E$. Thus $q$ is an interior point of $E$.

![The neighbourhood N_r(p) with a point q at distance r-h from p and the smaller neighbourhood N_h(q) inside it](/notes/math-55b/figures/b3-nbhd-open.svg)

Pick an $s$ within $h$ of $q$: since $d(q,p) = r-h$ and $d(q,s)<h$, the side from $s$ to $p$ is $<r$.

:::

:::theorem
If $p$ is a limit point of a set $E$, then every neighborhood of $p$ contains infinitely many points of $E$.
:::

:::proof
If $p$ is a limit point then, by definition, no matter what $r>0$ we choose, there exists a point $q\in E$ (in $N_r(p)$, with $q\neq p$). We need to show that there are infinitely many such $q$. If there are infinitely many neighborhoods around $p$ that each contain an element of $E$, and we take only those points $q$ of $N_r(p)$ (elements of $E$) that are NOT in $N_{h_i}(p)$, with each sequential $h_i<r$ and $h_1>h_2>h_3>\cdots$, then, by definition, each $N_{h_i}(p)$ must have a $q_i$, but $N_{h_1}(p)\supset N_{h_2}(p)\supset N_{h_3}(p)\supset\cdots$; thus there exist infinitely many elements in any given $N_{h_i}(p)$, and thus in any $N_r(p)$.

**Take 2:** Let $p$ be a limit point with a neighborhood with radius $r>0$ given by $N_r(p)$. We know that no matter the size of $r$, by definition of a limit point, we are promised a point $q\in E$. Let $N_r(p)=N_{h_1}(p)$. Now let each $h_{i>1}<r$ and $h_i>h_{i+1}$ for all $i\in\ZZ_{\geq 0}$. Let each $h_{i+1}$ be given by $h_{i+1}<d(p,q_i)$ for each $q_i\in E$ such that … *(unfinished)*

**Take 3:** Let $p$ be a limit point of $E$. Take $N_r(p)=N_{h_1}(p)$, and radii such that $h_{i+1}<d(p,q_i)$ for each $q_i\in E$, with $i\in\ZZ_{\geq 0}$. Since there exist infinitely many $N_{h_i}(p)$, there, too, exist infinitely many $q_i$ in any $N_{h_i}(p)$, and thus in any $N_r(p)$.

**Take 4:** Let $p$ be a limit point of $E$. We show there exist infinitely many points of $E$ in $N_r(p)$ (the neighborhood of $p$ with radius $r$).

*Step 1:* $N_r(p)=N_{h_1}(p)$. By the limit point definition there exists a $q_1\in E\cap N_{h_1}(p)$ such that $q_1\neq p$.

*Step 2:* Let each $N_{h_{i+1}}(p)$ be such that $h_{i+1}<d(p,q_i)$, where $h_i$ is the radius, for all $i\in\ZZ_{\geq 0}$. Since $q_i\notin N_{h_{i+1}}(p)$, $q_{i+1}\neq q_i$; thus $q_{i+1}$ is new.

Each radius is chosen to exclude all previous points ($q_i$), forcing all new points ($q_{i+1}$) to be distinct.

**Take 5:** Let $p$ be a limit point of $E$. Let $N_r(p)$ be any neighborhood of $p$.

We define $h_1=r$. By the limit point definition there exists $q_1\in E\cap N_{h_1}(p)$ such that $q_1\neq p$. For each $i\geq 1$ we set $h_{i+1}<d(p,q_i)$. By the limit point definition, there exists $q_{i+1}\in E\cap N_{h_{i+1}}(p)$ such that $q_{i+1}\neq p$. Since $h_{i+1}<d(p,q_i)$, we have $q_i\notin N_{h_{i+1}}(p)$. And since $h_1>h_2>h_3>\cdots$, the neighborhoods are nested: $N_{h_1}(p)\supset N_{h_2}(p)\supset N_{h_3}(p)\supset\cdots$. Thus, once $q_j$ is excluded from $N_{h_{j+1}}(p)$, it remains excluded from all subsequent neighborhoods. Thus $q_{i+1}$ is distinct from all $q_i$. This construction produces infinitely many distinct points $q_1,q_2,q_3,\dots$ in $E\cap N_r(p)$.
:::

:::corollary
A finite set has no limit points.
:::

## Examples

Let all of the following be subsets of $\RR^2$, i.e. $\CC$.

:::example
$\{z\in\CC \mid |z|<1\}=\{z\in\CC\mid d(z,0)<1\}$.

This is open. This is not closed. This is not perfect. This is bounded.
:::

:::example
$\{z\in\CC\mid |z|\leq 1\}=\{z\in\CC\mid d(z,0)\leq 1\}$.

This is not open. This is closed. This is perfect. This is bounded.
:::

:::example
A non-empty finite set.

This is not open. This is closed. This is not perfect. This is bounded. Being closed is vacuously satisfied, since there is no limit point of our non-empty finite set.
:::

## Complements, unions and intersections

:::theorem
Let $\{E_\alpha\}$ be a finite or infinite collection of sets $E_\alpha$. Then
$$\Big(\bigcup_\alpha E_\alpha\Big)^c=\bigcap_\alpha \big(E_\alpha^c\big).$$
:::

:::theorem
A set is open if and only if its complement is closed.
:::

:::theorem
A set is closed if and only if its complement is open.
:::

:::theorem
**(a)** For any collection $\{G_\alpha\}$ of open sets, $\bigcup_\alpha G_\alpha$ is open.

**(b)** For any collection $\{F_\alpha\}$ of closed sets, $\bigcap_\alpha F_\alpha$ is closed.

**(c)** For any finite collection $G_1,\dots,G_n$ of open sets, $\bigcap_{i=1}^n G_i$ is open.

**(d)** For any finite collection $F_1,\dots,F_n$ of closed sets, $\bigcup_{i=1}^n F_i$ is closed.
:::

## Closure

:::definition
If $X$ is a metric space, if $E\subset X$, and if $E'$ denotes the set of all limit points of $E$ in $X$, then the **closure** of $E$ is the set $\ol{E}=E\cup E'$.
:::

:::theorem
If $X$ is a metric space and $E\subset X$, then

**(a)** $\ol{E}$ is closed;

**(b)** $E=\ol{E}$ if and only if $E$ is closed;

**(c)** $\ol{E}\subset F$ for every closed set $F\subset X$ such that $E\subset F$.

By (a) and (c), $\ol{E}$ is the smallest closed subset of $X$ that contains $E$.
:::

:::theorem
Let $E$ be a nonempty set of real numbers which is bounded above. Let $y=\sup E$. Then $y\in\ol{E}$. Hence $y\in E$ if $E$ is closed.
:::

:::theorem
Suppose $Y\subset X$. A subset $E$ of $Y$ is open relative to $Y$ if and only if $E=Y\cap G$ for some open subset $G\subset X$.
:::
