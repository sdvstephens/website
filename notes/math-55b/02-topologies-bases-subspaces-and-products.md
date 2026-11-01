---
course: math-55b
chapter: 1
section: 2
title: Topologies, Bases, Subspaces and Products
date: 2026-01-28
lecturer: Denis Auroux
source-pages: 1-4
---

:::remark Recall
- A **metric space** $(X,d)$ is a set with a distance function $d:X\times X\to\RR_{\ge0}$ such that (1) $d(p,q)=0$ iff $p=q$; (2) $d(p,q)=d(q,p)$; (3) $d(p,r)\le d(p,q)+d(q,r)$.
- **Open balls**: $B_r(p)=\{x\in X\mid d(p,x)<r\}$. $U\subset X$ is **open** iff $\forall p\in U$ $\exists r>0$ such that $B_r(p)\subset U$.
- $f:X\to Y$ is **continuous** $\iff\forall p\in X$ $\forall\eps>0$ $\exists\delta>0$ such that $f(B_\delta(p))\subset B_\eps(f(p))$
  $\iff\forall U\subset Y$ open, $f^{-1}(U)\subset X$ is open. This will be the definition outside of the metric case.
- **Limits of sequences**: $p_n\to p$ in $(X,d)$ if $\forall\eps>0$ $\exists N$ such that $n\ge N\implies d(p_n,p)<\eps$.
  $p_n\to p\iff$ every open subset $U\ni p$ contains $p_n$ for all but finitely many $n$. This will be the definition of limit outside the metric case.
:::

### Interlude: what is $\RR$?

Answer: it’s an ordered field (i.e. $+,-,\times,/$ and $<$ compatible with the usual rules) with the **least upper bound property**: every nonempty subset $E\subset\RR$ that admits an upper bound ($\exists M\in\RR$ such that $\forall x\in E$, $x\le M$) has a *least* upper bound $\sup(E)\in\RR$ (i.e. $\sup(E)$ is an upper bound, and every upper bound for $E$ is $\ge\sup(E)$).

The l.u.b. property is equivalent to completeness of $\RR$; any ordered field with this property is isomorphic to $(\RR,+,\times,<)$. Constructions of $\RR$ from $\QQ$ involve adding the missing elements (irrationals) so that the l.u.b. property / completeness holds; the elements of $\RR$ end up being either the sups of certain subsets of $\QQ$ (see e.g. Rudin) or the limits of Cauchy sequences in $\QQ$ (see HW).

## Topological spaces

We will now reformulate/generalize the above notions in the context of **topological spaces**, i.e. sets equipped with a **topology** which may or may not come from a metric.

:::definition
A **topological space** is a set $X$ together with a collection $\mcT\subset\mcP(X)$, the **open sets** in $X$, such that:

- $\emptyset\in\mcT$, $X\in\mcT$;
- arbitrary unions of open sets are open;
- finite intersections of open sets are open.
:::

**Why bother?** One answer: many natural topologies do not come from a metric! E.g., in analysis:

- On the space of (bounded) functions $f:X\to\RR$, the uniform convergence topology ($f_n\to f$ iff $\sup_x|f_n(x)-f(x)|\to0$) comes from a metric ($d(f,g)=\sup_x|f(x)-g(x)|$), but pointwise convergence ($f_n\to f$ iff $\forall x\in X$, $f_n(x)\to f(x)$) doesn’t (“product topology”).
- The $C^\infty$ topology on smooth functions $\RR\to\RR$ doesn’t come from a metric either.

And on the other hand, a metric contains extraneous information for topology. E.g. $(\RR^n,d)$, $(\RR^n,d_1)$, $(\RR^n,d_\infty)$ have the same open sets, hence the same topology.

:::definition
- $f:X\to Y$ is **continuous** if $\forall U\subset Y$, $U$ open $\implies f^{-1}(U)\subset X$ is open.
- A sequence $\{p_n\}$ in $X$ **converges** to a **limit** $p$ ($p_n\to p$) if $\forall U\ni p$ open, $\exists N\in\NN$ such that $n\ge N\implies p_n\in U$.
:::

:::example
- If $(X,d)$ is a metric space, then $\mcT=\{U\subset X\mid\forall p\in U\ \exists\eps>0\text{ such that }B_\eps(p)\subset U\}$ is the **metric topology**.
- The **discrete topology**: $\mcT=\mcP(X)$ (every subset is open and closed). This is in fact a metric topology: set $d(x,y)=1$ $\forall x\ne y$. (E.g. the usual topology on $\ZZ\subset\RR$.)
:::

These abstract definitions imply basic facts about continuity, such as:

:::proposition
- If $f:X\to Y$ is continuous and $p_n\to p$ in $X$, then $f(p_n)\to f(p)$ in $Y$.
- $f:X\to Y$ and $g:Y\to Z$ continuous $\implies g\circ f:X\to Z$ continuous.
:::

:::exercise
Check this.
:::

### Finer and coarser topologies

Given two topologies $\mcT,\mcT'$ on $X$, if $\mcT\subset\mcT'$ we say $\mcT'$ is **finer** and $\mcT$ is **coarser**. The finest topology on $X$ is the discrete one (all points are isolated), while the coarsest is $\{\emptyset,X\}$ (“one big clump”).

- The finer topology $\mcT'$ has more open sets; it’s easier for functions $X\to Y$ to be continuous with respect to $\mcT'$ than $\mcT$ (every function from a discrete set is continuous).
- It’s harder for sequences to converge in $\mcT'$. E.g. on a discrete set, convergent sequences must be constant after finitely many terms; while for $\mcT=\{\emptyset,X\}$ every sequence converges to every point of $X$; in particular the limit isn’t unique!

## Bases

Keeping track of all the open sets is cumbersome. In metric spaces we started with open balls and got a characterization of open sets in terms of these. The analogous notion for a general topology is that of **basis**.

:::definition
Assume $\mcB\subset\mcP(X)$ is a collection of subsets of $X$ such that

1. $\bigcup_{B\in\mcB}B=X$;
2. if $B_1,B_2\in\mcB$ and $x\in B_1\cap B_2$, then $\exists B'\in\mcB$ such that $x\in B'\subset B_1\cap B_2$.

Then we say $\mcB$ is a **basis** and **generates** the topology $\mcT$ = arbitrary unions of elements of $\mcB$. Equivalently: $U\in\mcT\iff\forall x\in U$ $\exists B\in\mcB$ such that $x\in B\subset U$.
:::

![Two overlapping basis sets B_1 and B_2 and a smaller basis set B’ around a point x of their intersection](/notes/math-55b/figures/a1-basis-intersection.svg)

:::exercise
Check: (1) the two characterizations of $\mcT$ are equivalent; (2) $\mcT$ is a topology.
:::

:::remark
Unlike bases in linear algebra, bases in topology can contain redundant info; a better analogy is with generating sets. E.g. the metric topology is generated by any of:

- all open sets;
- open balls $B_r(x)$, $x\in X$, $r>0$;
- open balls $B_{1/n}(x)$, $x\in X$;
- or just open balls $B_{1/n}(y)$, $y\in Y\subset X$, where $Y$ is a dense subset (every nonempty open set intersects $Y$), e.g. $\QQ\subset\RR$.

So for example the usual topology on $\RR$ or $\RR^n$ actually admits a countable basis!
:::

## Making new topological spaces: subspaces, products

:::definition
Let $(X,\mcT_X)$ be a topological space and $Y\subset X$ any subset. The **subspace topology** on $Y$ is
$$
\mcT_Y=\{U\cap Y\mid U\in\mcT_X\}.
$$
(Verify: this satisfies the axioms of a topology.)
:::

**Warning:** it’s important when stating “$U$ is open” to be clear: as a subset of what space? E.g. $Y$ is always open as a subset of itself! $(0,1)\subset\RR\subset\RR^2$ is open in $\RR$ but not in $\RR^2$.

![The interval (0,1) on the real line inside the plane, cut out by an open disc U](/notes/math-55b/figures/a1-interval-in-plane.svg)

The subspace topology is the coarsest topology on $Y$ that makes the inclusion $Y\hookrightarrow X$ continuous (HW). Also, if $\mcT_X$ comes from a metric $d$ on $X$, then $\mcT_Y$ comes from $d|_Y:Y\times Y\hookrightarrow X\times X\xrightarrow{d}\RR_{\ge0}$.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 3](/notes/math-55b/03-limit-points-and-hausdorff-spaces)
:::definition
Let $(X,\mcT_X)$, $(Y,\mcT_Y)$ be topological spaces. The **product topology** on $X\times Y$ is the topology generated by the basis
$$
\mcB=\{U\times V\mid U\subset X\text{ open},\ V\subset Y\text{ open}\}.
$$
:::

(Check that $\mcB$ is a basis. Why isn’t $\mcB$ already a topology?)

![Two open rectangles U_1 x V_1 and U_2 x V_2 in X x Y whose intersection is again a rectangle](/notes/math-55b/figures/a1-product-basis.svg)

- When $X,Y$ are metric spaces, this is also a metric topology, defined e.g. by
$$
d^\infty_{X\times Y}((x_1,y_1),(x_2,y_2))=\max\big(d_X(x_1,x_2),\,d_Y(y_1,y_2)\big)
$$
(check! Key observation: $B^{X\times Y}_r((x,y))=B^X_r(x)\times B^Y_r(y)$). Or in fact
$$
d^2_{X\times Y}=\sqrt{d_X(x_1,x_2)^2+d_Y(y_1,y_2)^2},\qquad d^1_{X\times Y}=d_X(x_1,x_2)+d_Y(y_1,y_2)
$$
define the same topology on $X\times Y$ (see HW for the case of $\RR^2$). So this gives the usual topology on $\RR^n$.
- In general, it’s the coarsest topology on $X\times Y$ such that the projection maps $p_1:X\times Y\to X$ and $p_2:X\times Y\to Y$ are continuous (HW!). Also: $(x_n,y_n)\to(x,y)$ iff $x_n\to x$ and $y_n\to y$.
- Similarly for finite products $X_1\times\dots\times X_n$. For infinite products there are several different natural topologies; see next week.

**Homeomorphisms**

What is the correct notion of two topological spaces being “the same”?

:::definition
$X,Y$ are **homeomorphic** if there exist continuous maps $f:X\to Y$ and $g:Y\to X$ such that $f\circ g=\id_Y$, $g\circ f=\id_X$.

Equivalently, a **homeomorphism** $f:X\to Y$ is a continuous bijection such that $f^{-1}$ is continuous. I.e., a bijection $X\leftrightarrow Y$ under which $\mcT_X\leftrightarrow\mcT_Y$.
:::

:::remark
- A continuous bijection need not be a homeomorphism. E.g. take $X$ with two topologies, $\mcT'$ strictly finer than $\mcT$. Then $\id_X:(X,\mcT')\to(X,\mcT)$ is a bijection, continuous since $U\in\mcT\implies\id^{-1}(U)=U\in\mcT'$, but not a homeomorphism.
- Say a metric space $(X,d)$ is **bounded** if $\diam(X)=\sup\{d(p,q)\mid p,q\in X\}<\infty$. This is *not* a topological property: e.g. $f:(-\frac\pi2,\frac\pi2)\to\RR$, $x\mapsto\tan x$ is a homeomorphism ($\tan$ and $\arctan$ are continuous), so $\RR$ is homeomorphic to $(-\frac\pi2,\frac\pi2)$ (or any open interval in $\RR$).

![Graph of tan x on the interval from minus pi over 2 to pi over 2](/notes/math-55b/figures/a1-tan-graph.svg)
:::

**Closed sets**

:::definition
A subset $A$ of a topological space $X$ is **closed** if $X\setminus A$ is open.
:::

**Warning:** subsets can be both closed and open, e.g. $\emptyset$ and $X$, or neither (e.g. $[0,1)$ or $\QQ$ in $\RR$).

The axioms of open sets imply:

- $\emptyset$, $X$ are closed;
- arbitrary intersections of closed sets are closed;
- finite unions of closed sets are closed.

:::definition
Let $A\subset X$ be any subset. We define:

1. the **closure** of $A$: $\overline{A}$ = the smallest closed set containing $A$ $=\bigcap_{F\supset A,\ F\text{ closed}}F$ ($\overline{A}\supset A$, and $\overline{A}$ is closed since it’s an intersection of closed sets);
2. the **interior** of $A$: $\operatorname{int}(A)$ = the largest open set contained in $A$ $=\bigcup_{U\subset A,\ U\text{ open}}U$ (open);
3. the **boundary** of $A$: $\partial A=\overline{A}\setminus\operatorname{int}(A)$.
:::

![A set A with a hair attached, its closure, its interior and its boundary](/notes/math-55b/figures/a1-closure-interior-boundary.svg)

:::example
$A=[0,1)\subset\RR$, usual topology $\implies\overline{A}=[0,1]$, $\operatorname{int}(A)=(0,1)$, $\partial A=\{0,1\}$.
:::

:::remark
- $A$ is closed iff $\overline{A}=A$; open iff $\operatorname{int}(A)=A$.
- $\overline{X\setminus A}=X\setminus\operatorname{int}(A)$ and $\operatorname{int}(X\setminus A)=X\setminus\overline{A}$. $\quad(\ast)$
:::

:::definition
Say $U\subset X$ is a **neighborhood** of $p\in X$ if $U$ is open and $p\in U$.
:::

:::proposition
1. $p\in\operatorname{int}(A)$ iff $A$ contains a neighborhood of $p$.
2. $p\in\overline{A}$ iff every neighborhood of $p$ intersects $A$ nontrivially.
:::

:::proof
Check this! (1) follows from the definitions: $p\in\operatorname{int}(A)\iff\exists U$ open such that $p\in U\subset A$.

(2) follows from (1) and $(\ast)$: $p\in\overline{A}\iff p\notin\operatorname{int}(X\setminus A)\iff\forall U\ni p$ open, $A\cap U\ne\emptyset$.
:::

:::definition
Say $A$ is **dense** if $\overline{A}=X$ (i.e. every nonempty open subset of $X$ intersects $A$ nontrivially).
:::

:::example
$\QQ$ is dense in $\RR$ (for the usual topology).
:::
:::
