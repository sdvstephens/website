---
course: math-55b
chapter: 3
section: 12
title: The Quotient Topology
date: 2026-02-23
lecturer: Denis Auroux
source-pages: 1-5
---

## Quotient topology (§22)

Goal: given a topological space $X$ and an equivalence relation $\sim$ on $X$, the set of equivalence classes $A=X/{\sim}$ comes with a surjective map $q:X\to X/{\sim}$, $x\mapsto[x]$. (Think of it as “gluing together” the points of $X$ within each equivalence class.) We can then make the set $A$ into a topological space by equipping it with the following topology.

:::definition
Given a surjective map $q:X\twoheadrightarrow A$ (e.g. $A=X/{\sim}$), the **quotient topology** on $A$ has
$$U\subset A\text{ open}\iff q^{-1}(U)\subset X\text{ open}.\qquad(\star)$$
:::

(Exercise: check this is a topology on $A$, in fact the finest topology for which $q$ is continuous.)

Relatedly: given topological spaces $X$ and $A$, a continuous surjective map $q:X\twoheadrightarrow A$ is a **quotient map** if the topology on $A$ is the quotient topology determined by $\mathcal T_X$ and $q$, i.e. if $(\star)$ holds.

:::example
$S^1\simeq[0,1]$ with $0$ glued to $1$: set $0\sim1$, so $\{0,1\}$ is one equivalence class (all others are just $\{x\}$). The quotient map is
$$f:[0,1]\to S^1,\qquad t\mapsto(\cos2\pi t,\sin2\pi t).$$

![Neighborhoods of 0 and 1 in [0,1] map to an arc around p_0; for g on [0,1), the image of [0,epsilon) is not open](/notes/math-55b/figures/a3-circle-quotient.svg)

(Check! Away from the end points, $f$ is a homeomorphism $(0,1)\xrightarrow{\sim}S^1-\{p_0\}$, so we only need to check at $0$ and $1$. The point is: $U\ni p_0$ open in $S^1\iff f^{-1}(U)\supset\{0,1\}$ open in $[0,1]$.)

Versus: $g=f|_{[0,1)}:[0,1)\to S^1$ is not a quotient map! $V=g([0,\varepsilon))$ is not open in $S^1$, versus $g^{-1}(V)=[0,\varepsilon)$ open in $[0,1)$; we want iff!
:::

:::example
Let $X=[0,1]\times[0,1]$ and set $(0,t)\sim(1,1-t)$ $\forall t\in[0,1]$; we get the **Möbius band**.

![Gluing the left and right edges with a flip gives a Mobius band; a neighborhood U of a point on the gluing line](/notes/math-55b/figures/a3-quotient-mobius.svg)

A set $U\subset X/{\sim}$ containing $p=[(0,t)]$ is open $\iff$ $q^{-1}(U)\subset X$, which contains $(0,t)$ and $(1,1-t)$ (and “matching” portions of the vertical edges), is open in $X$.

Similarly, the torus:

![Torus from the square; the four corners glue to one point](/notes/math-55b/figures/a3-quotient-torus-corners.svg)

and the Klein bottle:

![Klein bottle from the square](/notes/math-55b/figures/a3-quotient-klein.svg)

And $S^1\sqcup S^1\rightsquigarrow$ the **wedge of two circles** (“figure 8 space”):

![Two circles glued at a point give the figure 8](/notes/math-55b/figures/a3-wedge-two-circles.svg)
:::

If $f:X\to Y$ is a map such that $x\sim x'\Rightarrow f(x)=f(x')$, then we can define $\bar f:X/{\sim}\to Y$ by $\bar f([x])=f(x)$, and then $f=\bar f\circ q$.

![Commutative triangle f = f-bar composed with q](/notes/math-55b/figures/a3-quotient-triangle-q.svg)

Set-theoretically, there is a bijection
$$\{f:X\to Y\mid x\sim x'\Rightarrow f(x)=f(x')\}\ \xleftrightarrow{\ 1-1\ }\ \{\bar f:X/{\sim}\to Y\}.$$

:::theorem
Equipping $X/{\sim}$ with the quotient topology, the above gives a bijection
$$\{f:X\to Y\text{ continuous}\mid x\sim x'\Rightarrow f(x)=f(x')\}\ \xleftrightarrow{\ 1-1\ }\ \{\bar f:X/{\sim}\to Y\text{ continuous}\},$$
i.e.: $\bar f:X/{\sim}\to Y$ is continuous $\iff$ $f=\bar f\circ q$ is continuous.
:::

:::proof
Let $q:X\to X/{\sim}$, $x\mapsto[x]$ be the quotient map, and recall $\bar f([x])=f(x)$ (independent of the choice of $x\in[x]$); so $\bar f\circ q=f$.

Assume $f$ is continuous. Then $\forall U\subset Y$ open, $f^{-1}(U)=q^{-1}(\bar f^{-1}(U))\subset X$ is open. By definition of the quotient topology ($V\subset X/{\sim}$ open $\iff q^{-1}(V)\subset X$ open), we conclude that $\bar f^{-1}(U)\subset X/{\sim}$ is open. So $\bar f$ is continuous.

Converse: since $q:X\to X/{\sim}$ is continuous, if $\bar f$ is continuous then $\bar f\circ q=f$ is continuous.
:::

:::example
$X=\RR^{n+1}-\{0\}$; define an equivalence relation $x\sim y$ iff $x,y$ lie on the same line through the origin, i.e. $x=\alpha y$ for some $\alpha\in\RR$, $\alpha\ne0$. This is an equivalence relation. The quotient space is **projective $n$-space**, $\RR\PP^n=X/{\sim}$ with the quotient topology (“the space of lines through $0$ in $\RR^{n+1}$“).

- A neighborhood of $[x]\in\RR\PP^n$ (the equivalence class of $x\in X$, i.e. the line through $0$ and $x$) corresponds to a “cone-like” open set in $\RR^{n+1}-\{0\}$ containing this line and all nearby lines through $0$.

![A double cone of lines around the line through 0 and x](/notes/math-55b/figures/a3-rp-cone.svg)

- A continuous map $\bar f:\RR\PP^n\to Y$ is the same thing as a continuous map $f:\RR^{n+1}-\{0\}\to Y$ such that $f(\alpha x)=f(x)$ $\forall\alpha\in\RR-\{0\}$, $\forall x\in X$. (More about $\RR\PP^n$ on HW4.)
:::

## Homotopy (Munkres §51)

Homotopy = a notion of continuous deformation, parametrized by $I=[0,1]$.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 13](/notes/math-55b/13-homotopy-and-products-of-paths)
:::definition
Let $f,g:X\to Y$ be two continuous maps. A **homotopy** between $f$ and $g$ is a continuous map $H:X\times I\to Y$ (the factor $I$ is the “time” variable in the homotopy) such that
$$H(x,0)=f(x),\qquad H(x,1)=g(x)\qquad\forall x\in X.$$
If this exists, then we say $f$ and $g$ are **homotopic** and write $f\simeq g$. If $f$ is homotopic to a constant map, we say it is **nullhomotopic**.
:::

We’ll want to study **paths** in topological spaces, i.e. $f:[0,1]\to X$ continuous, $f(0)=x_0$, $f(1)=x_1$. The above notion is not useful for paths if we don’t fix the end points $x_0$ and $x_1$ (see HW5). A better notion: **homotopy of paths** only considers homotopies which keep the end points in place.

![f and g are homotopic paths; h is not homotopic to f or g](/notes/math-55b/figures/a3-path-homotopy.svg)

Here $f\simeq_p g$ are homotopic paths, and $h$ is not homotopic to $f$ and $g$.

:::definition
Two paths $f,g:I\to X$ from $x_0$ to $x_1$ are **(path) homotopic** if $\exists$ a continuous $H:I\times I\to X$ such that
$$H(s,0)=f(s),\quad H(s,1)=g(s)\quad\text{(homotopy)}$$
and
$$H(0,t)=x_0,\quad H(1,t)=x_1\quad\text{(fix end points)},$$
so that $\forall t\in[0,1]$, $f_t=H|_{I\times\{t\}}$ is a path from $x_0$ to $x_1$. Such $H$ is a **path homotopy**, and we write $f\simeq_p g$.
:::

:::lemma
$\simeq$ and $\simeq_p$ are equivalence relations.
:::

:::proof
- Clearly $f\simeq f$ (constant homotopy $H(x,t)=f(x)$).
- If $f\simeq g$ with homotopy $F(x,t)$, then the **reverse homotopy** $G(x,t)=F(x,1-t)$ gives $g\simeq f$.
- Assume $f\simeq g$ with homotopy $F(x,t)$ and $g\simeq h$ with homotopy $G(x,t)$. Then the **concatenation** of these is $H:X\times[0,1]\to Y$ defined by
$$H(x,t)=\begin{cases}F(x,2t)&\text{if }t\in[0,\frac12],\\ G(x,2t-1)&\text{if }t\in[\frac12,1].\end{cases}$$
These two formulas agree at $t=\frac12$ ($F(x,1)=g(x)=G(x,0)$), so $H$ is well-defined and continuous (cf. the “pasting lemma”, Thm 18.3), and gives a homotopy $f\simeq h$.
- In the case of path homotopies, we can check that the above constructions preserve the requirements $F(0,t)=x_0$ and $F(1,t)=x_1$, so they yield path homotopies.
:::

:::example
(1) If $f,g$ are paths in $\RR^n$ (or any convex subset of $\RR^n$) from $x_0$ to $x_1$, we can define the **straight-line homotopy**
$$F(s,t)=(1-t)f(s)+tg(s).$$

![Straight-line homotopy between paths f and g](/notes/math-55b/figures/a3-straight-line-homotopy.svg)

For each $s$, this connects $f(s)$ to $g(s)$ by a straight line segment. We conclude: $f\simeq_p g$ always!

(2) In the punctured plane $X=\RR^2-\{(0,0)\}$, let $f,g$ be paths from $(-1,0)$ to $(1,0)$ such that $f$ stays in the upper half plane $\{(x,y)\mid y\ge0\}$ and $g$ stays in the lower half plane $\{y\le0\}$.

![Paths f above and g below the puncture at the origin](/notes/math-55b/figures/a3-punctured-plane-paths.svg)

Then there is no path homotopy between $f$ and $g$ in $X$ (we’ll prove this rigorously later).

:::

**Homotopy equivalence**

:::definition
Spaces $X,Y$ are **homotopy equivalent** if $\exists\,f:X\to Y$, $g:Y\to X$ such that $f\circ g\simeq\id_Y$ and $g\circ f\simeq\id_X$ (homotopic, vs. exact inverses, which would make them homeomorphic).
:::

(Check: this is an equivalence relation.)

Many of the simplest examples arise from deformation retractions:

:::definition
- Given $A\subset X$, a **retraction** is a map $r:X\to A$ such that $r|_A=\id_A$, or equivalently, denoting by $i:A\hookrightarrow X$ the inclusion, $r\circ i=\id_A$.
- Say $r:X\to A$ is a **deformation retraction** if additionally $i\circ r:X\to A\hookrightarrow X$ is homotopic to $\id_X$ by a homotopy that fixes $A$.
:::

It then follows that $A\underset{r}{\overset{i}{\rightleftarrows}}X$ is a homotopy equivalence.

:::example
$\RR^n$ (or a convex subset of $\RR^n$) deformation retracts onto $\{0\}$: $\{0\}\underset{r}{\overset{i}{\rightleftarrows}}\RR^n$, $r:x\mapsto0$. Check: $i\circ r=$ the zero map is homotopic to $\id_{\RR^n}$ by $H(x,t)=tx$. (We say $\RR^n$ is **contractible**.)
:::

:::example
$\RR^2-\{0\}$ is not contractible, but it deformation retracts to $S^1$ by $S^1\underset{r}{\overset{i}{\rightleftarrows}}\RR^2-\{0\}$, $r:x\mapsto\frac{x}{|x|}$ (in this case, $i\circ r(x)=\frac{x}{|x|}\simeq\id$ by the straight-line homotopy).

![The punctured plane retracting radially onto the unit circle](/notes/math-55b/figures/a3-retract-punctured-plane.svg)

By the same argument, the cylinder $S^1\times I$ and the Möbius band deformation retract onto the “middle” $S^1$ by sliding points of $[0,1]$ to the midpoint. (Check: this is consistent with the twisted gluing of $I\times I$, $(0,y)\sim(1,1-y)$.)

![Cylinder and Mobius band retracting onto their middle circles](/notes/math-55b/figures/a3-retract-cylinder-mobius.svg)

Hence they are homotopy equivalent to $S^1$ (and to each other, and to $\RR^2-\{0\}$).
:::

:::example
$\RR^2-\{p,q\}$ deformation retracts onto the wedge of two $S^1$‘s, $S^1\vee S^1$ (“figure 8” space), or also onto the “theta graph” (homotopy equivalent to the figure 8, not homeomorphic!).

![The plane minus p and q retracts onto a figure 8 or onto a theta graph](/notes/math-55b/figures/a3-figure-eight-theta.svg)
:::

**Products of paths and the fundamental groupoid**

We now focus on paths and path homotopy as a way to define an algebraic invariant of topological spaces (up to homotopy equivalence): the **fundamental group**. A group needs a multiplication?

:::definition
If $f$ is a path from $x$ to $y$ and $g$ is a path from $y$ to $z$, define a path $f\ast g$ from $x$ to $z$ by running through first $f$, then $g$ (twice as fast):
$$(f\ast g)(s)=\begin{cases}f(2s)&\text{if }s\in[0,\frac12],\\ g(2s-1)&\text{if }s\in[\frac12,1].\end{cases}$$
:::

![A path f from x to y followed by a path g from y to z](/notes/math-55b/figures/a3-path-concatenation.svg)

This product is well-defined on path-homotopy classes, as long as $f(1)=g(0)$: if $f\simeq_p f'$ and $g\simeq_p g'$ then $f\ast g\simeq_p f'\ast g'$, using the homotopy
$$(F\ast G)(s,t)=\begin{cases}F(2s,t)&s\le\frac12,\\ G(2s-1,t)&s\ge\frac12.\end{cases}$$
Picture:

![The square split into F on the left and G on the right](/notes/math-55b/figures/a3-concatenation-homotopy.svg)

So we define $[f]\ast[g]=[f\ast g]$.

:::proposition Claim
This operation is associative, and has identity and inverses.
:::

:::remark
$\rightsquigarrow$ the “**fundamental groupoid**” of $X$: the category with objects = points of $X$ and $\Mor(x,y)=\{\text{path-homotopy classes of paths }x\to y\}$.
- category: composition is associative, and there exist identity morphisms $x\to x$;
- groupoid: all morphisms have inverses.
:::

:::proof
**Identity.** Given $x\in X$, consider the constant path $e_x:I\to X$, $e_x(s)=x$ $\forall s$, and let $\id_x=[e_x]$. We claim that if $f$ is any path from $x$ to $y$, then $[f]\ast\id_y=\id_x\ast[f]=[f]$.

Indeed, there are explicit homotopies $f\simeq_p(f\ast e_y)$, and similarly $(e_x\ast f)\simeq_p f$:
$$F(s,t)=\begin{cases}f\!\left(\dfrac{s}{1-t/2}\right)&s\in[0,1-\frac t2],\\ y&s\in[1-\frac t2,1].\end{cases}$$

![The homotopy from f to f * e_y on the unit square](/notes/math-55b/figures/a3-identity-homotopy.svg)

**Inverse.** Given a path $f$ from $x$ to $y$, define the **reverse path** $\bar f(s)=f(1-s)$ from $y$ to $x$. Then $[\bar f]$ is inverse to $[f]$, namely $e_x\simeq_p f\ast\bar f$ and $e_y\simeq_p\bar f\ast f$. Indeed:
$$F(s,t)=\begin{cases}f(2ts)&s\in[0,\frac12],\\ f(2t(1-s))&s\in[\frac12,1].\end{cases}$$

![The constant path at x deforming into f followed by its reverse](/notes/math-55b/figures/a3-inverse-homotopy.svg)

For given $t$, this runs forward along $f$ from $f(0)=x$ to $f(t)$ at $s=\frac12$, then backwards to $f(0)=x$ at $s=1$. For $t=0$ we get $e_x$; for $t=1$, $f\ast\bar f$. (Similarly for $e_y\simeq_p\bar f\ast f$.)

**Associativity.** Given paths $f,g,h$ with $f(1)=g(0)$ and $g(1)=h(0)$, we claim $(f\ast g)\ast h\simeq_p f\ast(g\ast h)$. Both run along $f$, then $g$, then $h$, but with different parametrizations. The homotopy comes from adjusting for this:

![The associativity homotopy on the unit square](/notes/math-55b/figures/a3-associativity-homotopy.svg)

Let
$$F(s,t)=\begin{cases}f\!\left(\dfrac{4s}{1+t}\right)&s\in[0,\frac{1+t}4],\\[2mm] g\big(4s-(1+t)\big)&s\in[\frac{1+t}4,\frac{2+t}4],\\[2mm] h\!\left(\dfrac{4s-(2+t)}{2-t}\right)&s\in[\frac{2+t}4,1].\end{cases}$$
:::
:::
