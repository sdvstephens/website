---
course: math-55b
chapter: 2
section: N10
title: Connected Spaces
source-pages: 20-23
---

:::definition Connected
A topological space is **connected** if it cannot be separated into a disjoint union $X=U\cup V$ with $U,V$ disjoint nonempty open sets.
:::

![Two separate blobs U and V: a space that is not connected](/notes/math-55b/figures/b1-disconnected.svg)

Connected $\iff$ the only subsets that are open and closed at the same time are $\emptyset$ and $X$.

A separation: $U\cup V=X$, $U,V\subset X$, with
$$U\cap\overline{V}=\emptyset,\qquad \overline{U}\cap V=\emptyset,$$
“super disjoint”. This means $V=X-\overline{U}$, so $U$ is closed; and $U=X-\overline{V}$, so $V$ is closed. (Additionally $U=\overline{U}$, $V=\overline{V}$.)

:::proposition
A subset $E\subset\RR$, with the subspace topology of the usual topology of $\RR$, is connected iff it has “no gaps”:
$$\forall x,y\in E,\quad x<z<y\implies z\in E.$$
So the connected subspaces of $\RR$ are the intervals of all kinds (open/closed/half-open, finite/semi-infinite/all of $\RR$).
:::

:::proof
If there exist $x<z<y$ with $x,y\in E$ and $z\notin E$, then
$$E=\big(E\cap(-\infty,z)\big)\cup\big(E\cap(z,\infty)\big),$$
where $E\cap(-\infty,z)\ni x$ is open in $E$ and $E\cap(z,\infty)\ni y$ is open in $E$. Thus $E$ is not connected (find two opens and split it).

Conversely, assume $x<z<y$ with $x,y\in E$ implies $z\in E$, and assume $E$ is not connected, so $E=U\cup V$, $U\cap V=\emptyset$, $x\in U$, $y\in V$, with $U,V$ open in $E$. We know $[x,y]\subset E$.

![An interval U containing x next to an interval V containing y, with the segment from x to y inside E](/notes/math-55b/figures/b1-interval-proof.svg)

Assume $x<y$. We want the largest thing in the interval still in $U$: let $z=\sup([x,y]\cap U)$. Then $z\in[x,y]\subset E$, so $z\in U$ or $z\in V$.

First assume $z\in V$. Since $V$ is open in $E$, there is $\varepsilon>0$ such that $(z-\varepsilon,z+\varepsilon)\cap E\subset V$, the $\varepsilon$-ball around $z$ in $E$. But then there is no element of $[x,y]\cap U$ between $z-\varepsilon$ and $z$, so $\sup([x,y]\cap U)\le z-\varepsilon$, a contradiction.

So $z\in U$, hence $z<y$. $U$ is open in $E$, so there is $\varepsilon>0$ such that $(z-\varepsilon,z+\varepsilon)\cap E\subset U$. This contains elements $>z$ (any $z+\delta<\min(z+\varepsilon,y)$, $\delta>0$ small), which lie in $[x,y]\cap U$. This contradicts $\sup([x,y]\cap U)=z$.
:::

:::theorem
If $f\colon X\to Y$ is a continuous map and $X$ is connected, then the subspace $f(X)\subset Y$ is connected.
:::

:::proof
Consider $f$ as a map $X\to f(X)$. Assume otherwise. If $U\cup V=f(X)$ is a separation of $f(X)$, then $f^{-1}(U)\cup f^{-1}(V)=X$ is a separation of $X$. (Here $U=U'\cap f(X)$, $V=V'\cap f(X)$ with $U',V'\subset Y$ open, and $f^{-1}(U')=f^{-1}(U)$.)
:::

$\Longrightarrow$ IVT (the intermediate value theorem).

:::note Fact
$A,B\subset X$ connected for the subspace topology $\not\Longrightarrow A\cap B$ connected.
:::

![An annulus split into overlapping halves A and B whose intersection is two separate pieces](/notes/math-55b/figures/b1-annulus.svg)

Here $A\cup B$ is connected.

:::theorem
Let $A_i\subset X$, $i\in I$, be connected subspaces which all contain some given point $p\in X$, so $\bigcap\{A_i\}\neq\emptyset$. Then $Y=\bigcup\{A_i\}$ is connected.
:::

![Three overlapping connected sets sharing a common point p](/notes/math-55b/figures/b1-common-point.svg)

:::proof
Look at the lecture notes for the proof.
:::

:::theorem
The product of two connected spaces is itself connected.
:::

:::proof
Fix $(x_0,y_0)\in X\times Y$. For all $x\in X$, let
$$A_x=(X\times\{y_0\})\cup(\{x\}\times Y).$$
$X\times\{y_0\}$ is homeomorphic to $X$, therefore connected; $\{x\}\times Y$ is homeomorphic to $Y$, therefore connected. Both contain $(x,y_0)$, so $A_x$ is connected.

![The cross-shaped set A_x in the square X x Y](/notes/math-55b/figures/b1-product-connected.svg)

Then
$$\bigcup_{x\in X}A_x=X\times Y,$$
where the $A_x$ are connected and all contain $(x_0,y_0)$. So $X\times Y$ is connected.
:::

:::theorem
If all $X_i$ are connected, then $\prod_{i\in I}X_i$ with the product topology is connected.
:::
