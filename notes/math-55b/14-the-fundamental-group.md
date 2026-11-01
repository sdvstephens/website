---
course: math-55b
chapter: 4
section: 14
title: The Fundamental Group
date: 2026-02-27
lecturer: Denis Auroux
source-pages: 1-5
---

**Recall:** composition of paths $f,g:I\to X$ with $f(1)=g(0)$:
$$(f*g)(s)=\begin{cases} f(2s) & s\le\tfrac12\\ g(2s-1) & s\ge\tfrac12.\end{cases}$$
On path-homotopy classes, $[f]*[g]=[f*g]$ is associative, has identity (the constant path) and inverses ($[f]^{-1}=[\bar f]$, where $\bar f(s)=f(1-s)$ is the reverse path).

To define the **fundamental group** we consider **loops**, i.e. paths from a fixed **base point** $x_0\in X$ to itself.

:::definition Fundamental group
The set of path-homotopy classes of loops based at $x_0$, with the operation $*$ (composition), is called the **fundamental group** of $X$, denoted $\pi_1(X,x_0)$.
:::

## Dependence on the base point

If $x_0,x_1$ are in the same path-component of $X$, let $\alpha$ be a path from $x_0$ to $x_1$. Then for any loop $f$ based at $x_0$, we get a loop at $x_1$ by taking $\bar\alpha*f*\alpha$,

![A loop f at x0 and a path alpha from x0 to x1 with its reverse alpha-bar](/notes/math-55b/figures/a4-change-basepoint.svg)

and so we get a map
$$\begin{aligned}\hat\alpha:\pi_1(X,x_0)&\longrightarrow\pi_1(X,x_1)\\ [f]&\longmapsto[\bar\alpha*f*\alpha]=[\bar\alpha]*[f]*[\alpha].\end{aligned}$$

:::proposition
$\hat\alpha:\pi_1(X,x_0)\to\pi_1(X,x_1)$ is a **group isomorphism**.
:::

:::proof
- If $a,b\in\pi_1(X,x_0)$, then
$$\begin{aligned}\hat\alpha(a*b)&=[\bar\alpha]*(a*b)*[\alpha]\\ &=[\bar\alpha]*a*[\alpha]*[\bar\alpha]*b*[\alpha]\qquad\text{(using associativity and inverses)}\\ &=\hat\alpha(a)*\hat\alpha(b).\end{aligned}$$

So $\hat\alpha$ is a group homomorphism.
- Let $\beta=\bar\alpha$, the reverse path from $x_1$ to $x_0$. Then $\hat\beta:\pi_1(X,x_1)\to\pi_1(X,x_0)$. We claim $\hat\beta$ and $\hat\alpha$ are inverses of each other. Indeed, for $a\in\pi_1(X,x_0)$,
$$\begin{aligned}\hat\beta(\hat\alpha(a))=\hat\beta\big([\bar\alpha]*a*[\alpha]\big)&=[\bar\beta]*[\bar\alpha]*a*[\alpha]*[\beta]\\ &=[\alpha]*[\bar\alpha]*a*[\alpha]*[\bar\alpha]=a.\end{aligned}$$
Hence $\hat\beta\circ\hat\alpha=\id$ (and similarly $\hat\alpha\circ\hat\beta=\id$ as well), so $\hat\alpha$ is an isomorphism.
:::

:::corollary
If $X$ is path-connected, then $\pi_1(X,x_0)$ is independent of $x_0$ up to isomorphism.
:::

:::remark
When $\alpha$ is a loop at $x_0$, we get an **automorphism** $\hat\alpha$ of $\pi_1(X,x_0)$. This is in fact an inner automorphism, namely conjugation by $[\alpha]$: $a\mapsto[\alpha]^{-1}*a*[\alpha]$.
:::

## Induced homomorphisms

:::definition Induced homomorphism (Definition/Proposition)
A continuous map $h:(X,x_0)\to(Y,y_0)$ induces a **group homomorphism**
$$h_*:\pi_1(X,x_0)\to\pi_1(Y,y_0)\quad\text{defined by}\quad h_*([f])=[h\circ f].$$
:::

$$\begin{CD} I @>{f}>> X @>{h}>> Y\end{CD}\qquad\text{(the composite is } h\circ f\text{)}$$

![The interval I mapped by f to a loop at x0 in X, then by h to a loop at y0 in Y](/notes/math-55b/figures/a4-induced-map.svg)

Check:

- If $f\simeq_p f'$ via $F$, then $h\circ f\simeq_p h\circ f'$ via $h\circ F$. So $h_*$ is well-defined.
- $h\circ(f*g)=(h\circ f)*(h\circ g)$ (composition with $h$ is compatible with concatenation). So $h_*$ is a group homomorphism: $h_*([f]*[g])=h_*([f])*h_*([g])$.

### $\pi_1$ as a functor

Consider the category of **pointed topological spaces**:

- objects $=$ a topological space plus a choice of base point, $(X,x_0)$;
- morphisms $=$ continuous maps preserving base points: $f:(X,x_0)\to(Y,y_0)$ means $f:X\to Y$ is continuous and such that $f(x_0)=y_0$.

A **functor** from this category to that of groups is an assignment of a group to each pointed topological space, and a group homomorphism to each map of pointed spaces, compatible with composition.

:::proposition
Given $(X,x_0)\xrightarrow{h}(Y,y_0)\xrightarrow{k}(Z,z_0)$,
$$(k\circ h)_*=k_*\circ h_*:\pi_1(X,x_0)\to\pi_1(Z,z_0).$$
Hence $\pi_1$ is a **functor** (it maps the composition $k\circ h$ to the composition $k_*\circ h_*$).
:::

(This is just $(k\circ h)\circ f=k\circ(h\circ f)$.)

This implies:

:::corollary
If $h:(X,x_0)\to(Y,y_0)$ is a homeomorphism, then $h_*$ is an isomorphism.
:::

But we can do better!

**Recall:**

- A **retraction** of $X$ onto a subset $A\overset{i}{\hookrightarrow}X$ is $r:X\to A$ such that $r|_A=\id_A$, i.e. $r\circ i=\id_A$. Then, taking a base point $a_0\in A$,
$$\pi_1(A,a_0)\underset{r_*}{\overset{i_*}{\rightleftarrows}}\pi_1(X,a_0),\qquad r_*\circ i_*=\id\implies \ker(i_*)=\{1\},$$
i.e. $i_*$ is **injective**.
- A **deformation retraction**: assume moreover that $i\circ r:X\to X$ is homotopic to $\id_X$ by a homotopy that fixes $A$. Then we claim $i_*,r_*$ are inverse isomorphisms $\pi_1(A,a_0)\cong\pi_1(X,a_0)$.
- More generally, recall a **homotopy equivalence** is $X\underset{g}{\overset{f}{\rightleftarrows}}Y$ such that $f\circ g\simeq\id_Y$ and $g\circ f\simeq\id_X$.

:::theorem
Homotopy equivalences induce isomorphisms $f_*:\pi_1(X,x_0)\xrightarrow{\ \sim\ }\pi_1(Y,f(x_0))$.
:::

This follows from the fact that homotopic maps induce the same homomorphisms on $\pi_1$:

:::proposition
1. Let $h,k:X\to Y$ be homotopic via a homotopy $H:X\times I\to Y$ such that $H(x_0,t)=y_0$ for all $t$. Then $h_*=k_*:\pi_1(X,x_0)\to\pi_1(Y,y_0)$.
2. If the homotopy $H$ doesn’t fix base points, let $\alpha$ be the path $y_0\to y_1$ defined by $\alpha(t)=H(x_0,t)=y_t$. Then
$$h_*:\pi_1(X,x_0)\to\pi_1(Y,y_0)\quad\text{and}\quad k_*:\pi_1(X,x_0)\to\pi_1(Y,y_1)$$
are related by the isomorphism $\hat\alpha:\pi_1(Y,y_0)\to\pi_1(Y,y_1)$: $\;k_*=\hat\alpha\circ h_*$.
:::

:::proof
1. Given a loop $f:I\to X$ based at $x_0$, consider
$$\begin{aligned} I\times I&\xrightarrow{\ f\times\id\ }X\times I\xrightarrow{\ H\ }Y\\ (s,t)&\longmapsto (f(s),t)\longmapsto H(f(s),t).\end{aligned}$$
$H\circ(f\times\id):I\times I\to Y$ gives a path homotopy (based at $y_0$) $h\circ f\simeq_p k\circ f$; hence $h_*([f])=k_*([f])$.
2. Now consider $F:I\times I\to X\times I$ defined by concatenating
   - the path $(x_0,1)\to(x_0,t)$,
   - the loop $f$ in $X\times\{t\}$,
   - the path $(x_0,t)\to(x_0,1)$.

   Then $H\circ F$ is a path homotopy in $(Y,y_1)$ from $\bar\alpha*(h\circ f)*\alpha$ to $e*(k\circ f)*e$.

![The path homotopy F in the cylinder X x I and its image under H in Y, where the base point moves along alpha from y0 to y1](/notes/math-55b/figures/a4-homotopy-basepoint.svg)
:::

:::proof Proof of the theorem
If $(X,x_0)\xrightarrow{f}(Y,y_0)\xrightarrow{g}(X,x_1)$ are homotopy inverses, $g\circ f\simeq\id_X$, then by the proposition,

![The chain pi_1(X,x0) to pi_1(Y,y0) to pi_1(X,x1) to pi_1(Y,y1) via f_*, g_*, f^1_*, with the composites (g o f)_* and (f o g)_*](/notes/math-55b/figures/a4-pi1-chain.svg)

$(g\circ f)_*=\hat\alpha$ for some path $\alpha:x_0\rightsquigarrow x_1$, so this is an isomorphism. Hence $f_*$ is injective and $g_*$ is surjective.

Similarly, $(f\circ g)_*$ is an isomorphism $\pi_1(Y,y_0)\to\pi_1(Y,y_1)$, so $g_*$ is injective and $f^1_*$ is surjective (here $f^1_*$ is the map induced by $f$ with base point $x_1$).

Hence $g_*$ is an isomorphism, and $f_*=(g_*)^{-1}\circ\hat\alpha$ is also an isomorphism.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 15](/notes/math-55b/15-covering-spaces-and-path-lifting)
**Covering spaces**

At some point we’d like to show $\pi_1(S^1)\cong\ZZ$. We’ll do this by introducing a key tool for the study of $\pi_1$: the notion of **covering spaces**.

:::definition Evenly covered
Let $p:E\to B$ be a continuous surjective map. We say $p$ **evenly covers** an open subset $U\subset B$ if
$$p^{-1}(U)=\bigcup_{\alpha\in A}V_\alpha,$$
where the $V_\alpha\subset E$ are disjoint open subsets, and for each $\alpha\in A$, $p|_{V_\alpha}:V_\alpha\to U$ is a homeomorphism. The $V_\alpha$ are called **slices**.
:::

![A stack of disjoint slices forming p^{-1}(U), each mapped homeomorphically onto U](/notes/math-55b/figures/a4-evenly-covered.svg)

(Equivalently: there is a homeomorphism $\varphi:p^{-1}(U)\xrightarrow{\ \sim\ }U\times A$, with $A$ given the discrete topology, such that $p|_{p^{-1}(U)}=\mathrm{pr}_1\circ\varphi$:
$$\begin{CD} p^{-1}(U) @>{\varphi}>{\simeq}> U\times A\\ @V{p}VV @VV{\mathrm{pr}_1}V\\ U @= U\end{CD}$$
We say the diagram of maps **commutes**.)

:::definition Covering space
If every point of $B$ has a neighborhood which is evenly covered by $p$, we say $E$ is a **covering space** of $B$ and $p$ is a **covering map**. $B$ is called the **base** of the covering.
:::

:::example
If $X$ is any topological space and $A$ a set with the discrete topology, then $p_1:X\times A\to X$ is a covering map.

![Copies of X stacked as X x A, projecting onto X](/notes/math-55b/figures/a4-trivial-covering.svg)
:::

:::example
$p:\RR\to S^1$, $p(t)=(\cos t,\sin t)$, is a covering map! E.g. take $U=\{(x,y)\in S^1\mid x>0\}$ (or any arc of the circle). Then
$$p^{-1}(U)=\bigsqcup_{n\in\ZZ}\left(2\pi n-\frac\pi2,\,2\pi n+\frac\pi2\right),$$
and $p$ is a homeomorphism on each slice.

![The real line as a helix over the circle, with the preimage of the right half-circle U in red](/notes/math-55b/figures/a4-helix-covering.svg)
:::

:::example
Consider $S^1=\{z\in\CC \mid |z|=1\}$. Then $p:S^1\to S^1$, $z\mapsto z^n$ (so $e^{i\theta}\mapsto e^{in\theta}$), is an $n$-fold covering.

![A circle drawn as a doubled loop covering a circle twice by z -> z^2](/notes/math-55b/figures/a4-squaring-covering.svg)
:::

:::theorem
If $p:E\to B$ and $q:E'\to B'$ are covering maps, then $p\times q:E\times E'\to B\times B'$ is a covering map.
:::

:::proof
Given $(b,b')\in B\times B'$, let $U\ni b$ and $U'\ni b'$ be neighborhoods such that $p^{-1}(U)=\bigsqcup V_\alpha$ and $q^{-1}(U')=\bigsqcup V'_\beta$ (slices). Then
$$(p\times q)^{-1}(U\times U')=p^{-1}(U)\times q^{-1}(U')=\bigsqcup_{\alpha,\beta}V_\alpha\times V'_\beta,$$
a union of open slices homeomorphic to $U\times U'$.
:::

:::example
Consider the torus $S^1\times S^1$: since $\RR$ covers $S^1$, $\RR^2$ covers $S^1\times S^1$.

![A square grid in the plane mapping by p x p onto the torus](/notes/math-55b/figures/a4-torus-covering.svg)
:::

If $p:E\to B$ is a covering and $B_0\subset B$ a subspace, then by restriction we get a covering $p^{-1}(B_0)\to B_0$.

:::example
Let $b\in S^1$ be a base point on the circle, and let $B_0=(b\times S^1)\cup(S^1\times b)\subset S^1\times S^1$. Then $B_0$ is the “figure eight space” $S^1\vee S^1$.

![A longitude and a meridian on the torus meeting at (b,b), whose union is the figure eight](/notes/math-55b/figures/a4-torus-wedge.svg)

Then we have a covering $(p\times p)^{-1}(B_0)\to B_0$, where
$$(p\times p)^{-1}(B_0)=(\RR\times 2\pi\ZZ)\cup(2\pi\ZZ\times\RR)\subset\RR^2.$$
The horizontal lines map to one circle and the vertical lines map to the other.

![The grid of horizontal and vertical lines through multiples of 2pi mapping onto the figure eight](/notes/math-55b/figures/a4-grid-wedge-covering.svg)
:::

**Lifting**

:::definition Lifting
Given a continuous map $p:E\to B$, a **lifting** of a continuous map $f:X\to B$ is a map $\tilde f:X\to E$ such that $p\circ\tilde f=f$, i.e. the diagram

![Commutative triangle with f from X to B, p from E to B, and the dashed lift f-tilde from X to E](/notes/math-55b/figures/a4-lifting-triangle.svg)

commutes.
:::

If $p:E\to B$ is a covering map, then we can locally lift: namely, if $f(X)\subset U\subset B$ and $U$ is evenly covered, then we can lift $f$ to one of the sheets.

**Key point:** if $p:E\to B$ is a covering, then paths and path homotopies in $B$ *always* lift.

:::example
Consider $p:\RR\to S^1$, $p(x)=(\cos x,\sin x)$, and the path $f(s)=(\cos\pi s,\sin\pi s)$, $f:I\to S^1$. This has infinitely many possible lifts to paths in $\RR$, depending on where $0$ gets lifted to.

![The upper half-circle path in S^1 and its lifts to the segments [-2pi,-pi], [0,pi], [2pi,3pi] of the real line](/notes/math-55b/figures/a4-half-circle-lift.svg)
:::

:::theorem Path lifting
Let $p:E\to B$ be a covering map, $f:[0,1]\to B$ a path starting at $f(0)=b$, and $e\in p^{-1}(b)$. Then there exists a **unique** lift $\tilde f:[0,1]\to E$ such that $\tilde f(0)=e$.
:::

:::proof
Cover $B$ by open sets $U_\alpha$ which are evenly covered by $p$. Then the preimages $f^{-1}(U_\alpha)$ are an open cover of $[0,1]$, which is compact, so there exists a Lebesgue number $\delta>0$ such that for all $x$, $(x,x+\delta)\subset f^{-1}(U_\alpha)$ for some $\alpha$. Hence we can find a finite subdivision $0=s_0<s_1<\dots<s_n=1$ such that each $f([s_i,s_{i+1}])$ lies inside one of the $U_\alpha$.

Define $\tilde f(0)=e$. Assume we have defined $\tilde f(s)$ for $s\in[0,s_i]$. Then we define $\tilde f(s)$ for $s\in[s_i,s_{i+1}]$ as follows. Recall $f([s_i,s_{i+1}])\subset U$ for some $U$ which is evenly covered by $p$, $p^{-1}(U)=\bigsqcup$ slices. Let $V$ be the slice which contains $\tilde f(s_i)$. The map $p|_V:V\to U$ is a homeomorphism, so it has a continuous inverse, and we can define
$$\tilde f(s)=p|_V^{-1}(f(s))\quad\text{for } s\in[s_i,s_{i+1}],$$
which extends $\tilde f$ continuously over $[s_i,s_{i+1}]$. Repeating the process, we obtain a continuous lift $\tilde f:[0,1]\to E$.

$\tilde f$ is unique since for each $s_i$ there was a unique slice containing $\tilde f(s_i)$ and a unique way to lift $f|_{[s_i,s_{i+1}]}$ into it.
:::

:::theorem Homotopy lifting
Let $F:I\times I\to B$ be continuous with $F(0,0)=b$, $p:E\to B$ a covering map, and $e\in p^{-1}(b)$. Then there exists a unique lift $\tilde F:I\times I\to E$ such that $\tilde F(0,0)=e$.
:::

:::proof
The proof is exactly the same: subdivide $I\times I$ into squares of side length $<\delta$ which map into open subsets of $B$ that are evenly covered; then construct the lift $\tilde F$ one square at a time.
:::
:::
