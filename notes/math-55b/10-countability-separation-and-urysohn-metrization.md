---
course: math-55b
chapter: 3
section: 10
title: Countability, Separation and Urysohn Metrization
date: 2026-02-18
lecturer: Denis Auroux
source-pages: 1-6
---

## Countability axioms (§30)

:::definition
$X$ is **first-countable** if $\forall x\in X$, $\exists$ a countable basis of neighborhoods at $x$, i.e. $\exists\,U_1,U_2,\dots$ open $\ni x$ such that every neighborhood $V\ni x$ contains one of the $U_n$.
:::

:::example
Metric spaces are first-countable: at $x\in X$, take $U_n=B_{1/n}(x)$.
:::

In a first-countable space, $x\in\overline A\iff\exists$ a sequence $x_n\in A$ with $x_n\to x$. (Otherwise only $\Leftarrow$ holds.)

:::definition
$X$ is **second-countable** if its topology has a countable basis.
:::

:::example
$\RR^n$ is second-countable, e.g. basis $\{B_r(x)\mid x\in\QQ^n,\ r\in\QQ_+\}$ or $\{\prod(a_i,b_i)\mid a_i,b_i\in\QQ\}$.

$\RR^\omega$ with the product topology is second-countable (basis = products of a finite number of $(a_i,b_i)$, $a_i<b_i\in\QQ$, where all remaining factors are $\RR$), while the uniform topology isn’t (because there exist uncountably many disjoint open subsets: the balls of radius $1/2$ centered at the points of $\{0,1\}^\omega$).
:::

Second-countable $\Rightarrow$ $\exists$ a countable dense subset (e.g. take one point in each basis open set!). The converse holds for metric spaces (take balls of radius $\frac1n$ around points of the dense subset) but is false in general: $\RR_\ell$ is first-countable and has a countable dense subset, but $\nexists$ a countable basis (so $\RR_\ell$ isn’t metrizable; HW4).

## Regular and normal spaces (§31–32)

Recall: $X$ is Hausdorff := we can separate points: $\forall x\ne y$, $\exists\,U\ni x$, $V\ni y$ disjoint open. ($\Rightarrow T_1$: $\{x\}$ is closed $\forall x\in X$.)

Stronger separation axioms:

:::definition
Suppose one-point subsets $\{x\}\subset X$ are closed ($T_1$). Then say:
- $X$ is **regular** if $\forall x\in X$, $\forall B\subset X$ closed disjoint from $x$, $\exists$ disjoint open sets $U\ni x$, $V\supset B$.
- $X$ is **normal** if $\forall A,B\subset X$ disjoint closed subsets, $\exists$ disjoint open sets $U\supset A$, $V\supset B$.
:::

$$\text{Metrizable}\ \Longrightarrow\ \text{Normal }(T_4)\ \Longrightarrow\ \text{Regular }(T_3)\ \Longrightarrow\ \text{Hausdorff }(T_2)\ \Longrightarrow\ T_1$$

(The first implication: will see.)

![Normal, regular and Hausdorff separation pictures](/notes/math-55b/figures/a3-separation-axioms.svg)

:::example
$\RR_\ell$ is normal but not metrizable; $\RR_\ell^2$ is regular but not normal. See Munkres §31 for these and more.
:::

:::theorem
- regular + second-countable $\Rightarrow$ normal (won’t prove)
- Hausdorff + compact $\Rightarrow$ normal (cf. HW2, Munkres 26.5)
:::

:::theorem
Metric spaces are normal.
:::

:::proof
Let $A,B$ be disjoint closed subsets of $(X,d)$.

![Balls around a in A and b in B](/notes/math-55b/figures/a3-metric-normal-balls.svg)

$\forall a\in A$, $\exists\,\varepsilon_a>0$ such that $B_{\varepsilon_a}(a)\subset X-B$. $\forall b\in B$, $\exists\,\varepsilon_b>0$ such that $B_{\varepsilon_b}(b)\subset X-A$. Let
$$U=\bigcup_{a\in A}B_{\varepsilon_a/2}(a)\supset A,\qquad V=\bigcup_{b\in B}B_{\varepsilon_b/2}(b)\supset B$$
(clearly open: unions of balls). We claim $U\cap V=\emptyset$. Indeed, if $z\in U\cap V$ then $\exists\,a\in A$, $b\in B$ such that $z\in B_{\varepsilon_a/2}(a)\cap B_{\varepsilon_b/2}(b)$. So
$$d(a,b)\le d(a,z)+d(z,b)<\frac{\varepsilon_a}2+\frac{\varepsilon_b}2\le\max(\varepsilon_a,\varepsilon_b).$$
But this is a contradiction (e.g. if $d(a,b)<\varepsilon_a$ then $B_{\varepsilon_a}(a)\not\subset X-B$!).
:::

We can now ask which topological spaces are metrizable. We’ve seen: metrizable $\Rightarrow$ first-countable and normal ($\not\Leftarrow$; counterexample: $\RR_\ell$).

:::theorem Urysohn metrization theorem
If $X$ is regular and has a countable basis, then it is metrizable.
:::

(The first condition is necessary; the second one is stronger than needed. The Nagata–Smirnov theorem gives a sharper criterion but is more technical to state and prove.)

## Urysohn’s lemma

Urysohn’s lemma is the key ingredient in the proof of the metrization theorem.

:::theorem Urysohn’s lemma
Let $X$ be a normal space and $A,B$ disjoint closed subsets. Then $\exists$ continuous $f:X\to[0,1]$ such that $f(x)=0$ $\forall x\in A$ and $f(x)=1$ $\forall x\in B$.
:::

Idea:

1. Construct open sets $U_q$ $\forall q\in[0,1]\cap\QQ$ such that $A\subset U_0\subset\dots\subset U_1=X-B$, and moreover $p<q\Rightarrow\overline{U_p}\subset U_q$. Also set $U_q=X$ for $q>1$.
2. Define $f(x)=\inf\{q\in\QQ\mid x\in U_q\}$, and show $f$ is continuous.

Step 1 uses the following reformulation of normality:

:::lemma
$X$ is normal $\Rightarrow$ $\forall A$ closed, $\forall U\supset A$ open, $\exists$ open $V$ such that $A\subset V$ and $\overline V\subset U$. (In fact $\iff$.)
:::

![A closed set A inside an open set V whose closure lies in U](/notes/math-55b/figures/a3-shrink-lemma.svg)

:::proof
$A$ and $B=X-U$ are disjoint closed sets, so since $X$ is normal, $\exists\,V\supset A$, $V'\supset B$ open such that $V\cap V'=\emptyset$. Moreover, $X-V'$ is closed and $V\subset X-V'$, so $\overline V\subset X-V'$. So
$$A\subset V\subset\overline V\subset X-V'\subset X-B=U.$$
:::

### Proof of Urysohn’s lemma

:::proof
**Step 1.** Given $A$ and $B$ disjoint closed, let $U_1=X-B$, and let $U_0$ be open such that $A\subset U_0\subset\overline{U_0}\subset U_1$.

Next, we construct $U_q$, $q\in(0,1)\cap\QQ$, such that $p<q\Rightarrow\overline{U_p}\subset U_q$, by induction. Choose a labelling of $[0,1]\cap\QQ=\{q_0,q_1,q_2,q_3,\dots\}$ by an infinite sequence such that $q_0=0$ and $q_1=1$ (could e.g. continue: $\frac12,\frac13,\frac23,\dots$).

Assuming $U_{q_0},\dots,U_{q_n}$ have already been chosen, we construct $U_{q_{n+1}}$ using the above lemma: let
$$q_k=\max\big(\{q_0,\dots,q_n\}\cap[0,q_{n+1})\big),\qquad q_\ell=\min\big(\{q_0,\dots,q_n\}\cap(q_{n+1},1]\big),$$
so $q_k<q_{n+1}<q_\ell$ and none of the rationals already considered lie in between. Then by the induction hypothesis, $\overline{U_{q_k}}\subset U_{q_\ell}$, hence using normality $\exists$ open $V$ such that $\overline{U_{q_k}}\subset V\subset\overline V\subset U_{q_\ell}$; let $U_{q_{n+1}}=V$.

By induction, we construct in this way all the $U_q$‘s, and indeed $p<q\Rightarrow\overline{U_p}\subset U_q$.

![Nested open sets U_0, U_1/3, U_1/2, U_2/3, U_1 around A](/notes/math-55b/figures/a3-urysohn-nested.svg)

We also set $U_q=\emptyset$ if $q<0$ and $U_q=X$ if $q>1$ (still true: $p<q\Rightarrow\overline{U_p}\subset U_q$!).

**Step 2.** Define $f(x)=\inf Q_x$, where $Q_x=\{q\in\QQ\mid x\in U_q\}$.

Since $U_{<0}=\emptyset$ and $U_{>1}=X$, we have $\QQ\cap(1,\infty)\subset Q_x\subset[0,\infty)$, so $f(x)\in[0,1]$ $\forall x\in X$. Also, $x\in A\subset U_0\Rightarrow f(x)=0$, and $x\in B\Rightarrow x\notin U_1=X-B\Rightarrow Q_x=\QQ\cap(1,\infty)$ and $f(x)=1$.

So it only remains to show that $f:X\to[0,1]$ is continuous! For this, observe:

- $x\in\overline{U_q}\Rightarrow f(x)\le q$: indeed, if $x\in\overline{U_q}$ then $x\in U_{q'}$ $\forall q'>q$, so $Q_x\supset\QQ\cap(q,\infty)$.
- $x\notin U_q\Rightarrow f(x)\ge q$: indeed, if $x\notin U_q$ then $Q_x\subset\QQ\cap(q,\infty)$.

Now given an open interval $(c,d)$, we show $f^{-1}((c,d))$ is open in $X$. Assume $x_0\in f^{-1}((c,d))$, and let $p,q\in\QQ$ such that $c<p<f(x_0)<q<d$.

![The point x_0 lies in U_q but outside the closure of U_p](/notes/math-55b/figures/a3-urysohn-continuity.svg)

By the above observation, $x_0\in U_q$ and $x_0\notin\overline{U_p}$. So $V=U_q\cap(X-\overline{U_p})$ is open, and a neighborhood of $x_0$. Moreover,
$$x\in V\ \Rightarrow\ \begin{cases}x\notin U_p,&\text{so }f(x)\ge p,\\ x\in\overline{U_q},&\text{so }f(x)\le q.\end{cases}$$
Hence $V\subset f^{-1}([p,q])\subset f^{-1}((c,d))$, i.e. $f^{-1}((c,d))$ contains neighborhoods of its points.
:::

## Proof of the metrization theorem

Now we prove the metrization theorem, namely that if $X$ is normal and has a countable basis, then $X$ is metrizable. We actually do this by embedding $X$ as a subspace of a metric space, namely $[0,1]^\omega$ with the product topology or the uniform topology; in fact both come from metrics.

For the product topology:
$$d\big((x_n),(y_n)\big)=\sup_n\Big\{\tfrac1n|y_n-x_n|\Big\}\ \ \Rightarrow\ \ B_\varepsilon\big((x_n)\big)=\prod_n\big((x_n-n\varepsilon,\,x_n+n\varepsilon)\cap[0,1]\big).$$
Key point: for $n>\varepsilon^{-1}$ this factor is all of $[0,1]$.

:::lemma Step 1
There exists a countable collection of continuous functions $f_n:X\to[0,1]$ such that $\forall x_0\in X$, $\forall$ neighborhood $U\ni x_0$, $\exists\,n$ such that $f_n(x_0)>0$ and $f_n\equiv0$ on $X-U$.
:::

:::proof
This follows from Urysohn’s lemma, but we need to be careful so that countably many functions suffice.

Let $\mathcal B=\{B_n\}$ be a countable basis for $X$. If $x_0\in U$ open, then $\exists\,B_n\in\mathcal B$ such that $x_0\in B_n\subset U$. But then, since $X$ is normal, $\exists\,V$ open such that $x_0\in V\subset\overline V\subset B_n$, and $\exists\,B_m\in\mathcal B$ such that $x_0\in B_m\subset V$, so that
$$x_0\in\overline{B_m}\subset B_n\subset U.$$
So: for every $(m,n)\in\ZZ_+\times\ZZ_+$ such that $\overline{B_m}\subset B_n$, apply Urysohn’s lemma to get $g_{m,n}:X\to[0,1]$ such that $g_{m,n}=1$ on $\overline{B_m}$ and $0$ on $X-B_n$. This countable collection of functions has the stated property.
:::

:::lemma Step 2
The map
$$F:X\to[0,1]^\omega\ \text{(product topology)},\qquad x\mapsto F(x)=(f_1(x),f_2(x),\dots)$$
is an embedding, i.e. continuous, injective, and $X$ is homeomorphic to $F(X)\subset[0,1]^\omega$.
:::

(So the topology on $X$ is defined by the metric $d|_{F(X)}$, QED.)

:::proof
- $F$ is continuous in the product topology because each component $f_1,f_2,\dots$ is continuous $X\to[0,1]$.
- $F$ is injective, since
$$x\ne y\ \Rightarrow\ \exists\,U\ni x,\ V\ni y\text{ disjoint open}\ \Rightarrow\ \exists\,m,n\text{ such that }\begin{cases}f_n(x)>0,\ f_n=0\text{ outside of }U\text{ (hence at }y),\\ f_m(y)>0,\ f_m=0\text{ outside of }V\text{ (hence at }x).\end{cases}$$
- Finally, we must show that $F$ is a homeomorphism $X\to Z=F(X)\subset[0,1]^\omega$. Since $F$ is a continuous bijection $X\to Z$, it only remains to prove: $U\subset X$ open $\Rightarrow F(U)\subset Z$ is open.

  For this, let $U\subset X$ be any open set, and $x_0\in U$. Then $\exists\,n$ such that $f_n(x_0)>0$ and $f_n=0$ outside of $U$. Let
  $$V_n=\pi_n^{-1}\big((0,\infty)\big)\cap Z=\{z=(z_1,z_2,\dots)\in Z\mid z_n>0\},$$
  which is open in $Z$. Then $x_0\in F^{-1}(V_n)\subset U$ (since $f_n(x_0)>0$, and $f_n(x)>0\Rightarrow x\in U$), hence $F(x_0)\in V_n\subset F(U)$, with $V_n$ open in $Z$. This is true $\forall x_0\in U$ ($\iff\forall F(x_0)\in F(U)$), so we conclude that $F(U)$ is open.

Hence $F:X\to Z$ is a homeomorphism, and $X$ is homeomorphic to a metric space!
:::

## Gluing and quotients (§22)

One good way to build interesting topological spaces is by “gluing” together simpler spaces.

:::example
![Gluing an interval into a circle, and a square into a cylinder and then a torus](/notes/math-55b/figures/a3-gluing-examples.svg)
:::

The construction underlying this is the quotient topology.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 12](/notes/math-55b/12-the-quotient-topology)
:::definition
Let $X$ be a topological space, $A$ a set, $f:X\to A$ a surjective map. The **quotient topology** on $A$ is defined by:
$$U\subset A\text{ is open}\iff f^{-1}(U)\subset X\text{ is open}.$$
:::

(Exercise: check this is a topology on $A$, in fact the finest topology for which $f$ is continuous.)

:::definition
A map $f:X\to Y$ between topological spaces is called a **quotient map** if $f$ is surjective and $U\subset Y$ is open $\iff f^{-1}(U)\subset X$ is open (i.e. the topology on $Y$ is the quotient topology induced by $f:X\to Y$).
:::

Typically, we start from an equivalence relation $\sim$ on $X$, define $A$ to be the set of equivalence classes $A=X/{\sim}$, and define $f:X\to X/{\sim}=A$, $x\mapsto[x]$. Conversely, given any surjective map $f:X\to A$, we can define an equivalence relation on $X$ by $x\sim x'\iff f(x)=f(x')$, and then $X/{\sim}=A$.

:::example
$S^1\simeq[0,1]$ with $0$ glued to $1$: set $0\sim1$, so $\{0,1\}$ is one equivalence class (all others are just $\{x\}$). The quotient map is
$$f:[0,1]\to S^1,\qquad t\mapsto(\cos2\pi t,\sin2\pi t).$$

![Neighborhoods of 0 and 1 in [0,1] map to an arc around (1,0); for g on [0,1), the image of [0,epsilon) is not open](/notes/math-55b/figures/a3-circle-quotient.svg)

(Check! Away from the end points, $f$ is a homeomorphism $(0,1)\xrightarrow{\sim}S^1-\{(1,0)\}$, so we only need to check at $0$ and $1$. The point is: $U\ni(1,0)$ open in $S^1\iff f^{-1}(U)\supset\{0,1\}$ open in $[0,1]$.)

Versus: $g=f|_{[0,1)}:[0,1)\to S^1$ is not a quotient map! $V=g([0,\varepsilon))$ is not open in $S^1$, versus $g^{-1}(V)=[0,\varepsilon)$ open in $[0,1)$; we want iff!
:::

:::example
Let $X_1,\dots,X_n$ be topological spaces, each $X_i\simeq S^1$; pick one point $x_i\in X_i$ $\forall i$, and let $A$ be the quotient space of $\bigsqcup X_i$ by the equivalence relation $x_i\sim x_j$ $\forall i,j$ (glue the $X_i$ at their base points). This is called the **wedge** of the circles $X_1,\dots,X_n$.

![Three circles glued at their base points into a wedge](/notes/math-55b/figures/a3-wedge-three-circles.svg)
:::

There is a useful characterization of continuous maps from a quotient space: if $A=X/{\sim}$ and $f:X\to Y$ is a map such that $x\sim x'\Rightarrow f(x)=f(x')$, then we can define $\bar f:X/{\sim}\to Y$ by $\bar f([x])=f(x)$.

![Commutative triangle f = f-bar composed with p](/notes/math-55b/figures/a3-quotient-triangle-p.svg)

:::theorem
If $f:X\to Y$ is a continuous map and $x\sim x'\Rightarrow f(x)=f(x')$, then, equipping $X/{\sim}$ with the quotient topology, $\bar f:X/{\sim}\to Y$ is a continuous map.
:::

:::proof
Let $p:X\to X/{\sim}$, $x\mapsto[x]$ be the quotient map, and recall $\bar f([x])=f(x)$ (independent of the choice of $x\in[x]$). So $\bar f\circ p=f$. Hence: $\forall U\subset Y$ open, $f^{-1}(U)=p^{-1}(\bar f^{-1}(U))\subset X$ is open. By definition of the quotient topology ($V\subset X/{\sim}$ open $\iff p^{-1}(V)\subset X$ open), we conclude that $\bar f^{-1}(U)\subset X/{\sim}$ is open.
:::

(And conversely, since $p:X\to X/{\sim}$ is continuous. So: $\bar f$ continuous $\iff$ $f=\bar f\circ p$ continuous.)

:::example
$X=\RR^{n+1}-\{0\}$; define an equivalence relation $x\sim y$ iff $x,y$ lie on the same line through the origin, i.e. $x=\alpha y$ for some $\alpha\in\RR$, $\alpha\ne0$. This is an equivalence relation. The quotient space is **projective $n$-space**, $\RR\PP^n=X/{\sim}$ with the quotient topology (“the space of lines through $0$ in $\RR^{n+1}$“).
:::

If $Y$ is another topological space, then a continuous map $\bar f:\RR\PP^n\to Y$ is the same thing as a continuous map $f:\RR^{n+1}-\{0\}\to Y$ such that $f(\alpha x)=f(x)$ $\forall\alpha\in\RR-\{0\}$, $\forall x\in X$. (More about $\RR\PP^n$ on the HW.)

:::example Quotients of the unit square
Various quotients of the unit square $X=[0,1]^2$: let the edges be $A=\{0\}\times[0,1]$, $A'$, $B$, $B'$.

![The unit square with edges A (left), A’ (right), B (bottom), B’ (top)](/notes/math-55b/figures/a3-square-edges.svg)

(1) Gluing $A$ to $A'$ by $(0,t)\sim(1,t)$, we get a cylinder.

![Gluing the left and right edges of the square gives a cylinder](/notes/math-55b/figures/a3-quotient-cylinder.svg)

A neighborhood of a point on the gluing line corresponds to two neighborhoods of $(0,t)\in A$ and $(1,t)\in A'$ in $X$.

(2) If instead we glue $A$ to $A'$ by $(0,t)\sim(1,1-t)$, we get a **Möbius band**!

![Gluing the left and right edges with a flip gives a Mobius band](/notes/math-55b/figures/a3-quotient-mobius.svg)

(3) Gluing $A$ to $A'$ via $(0,t)\sim(1,t)$ *and* $B$ to $B'$ by $(s,0)\sim(s,1)$ gives us the torus.

![Gluing both pairs of opposite edges gives the torus](/notes/math-55b/figures/a3-quotient-torus.svg)

(4) Gluing $(0,t)\sim(1,t)$ and $(s,0)\sim(1-s,1)$, however, gives the **Klein bottle**, which cannot be embedded in $\RR^3$ (we can draw a picture that self-intersects).

![Gluing with one pair of edges flipped gives the Klein bottle](/notes/math-55b/figures/a3-quotient-klein.svg)
:::
:::
