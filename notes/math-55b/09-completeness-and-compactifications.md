---
course: math-55b
chapter: 3
section: 9
title: Completeness and Compactifications
date: 2026-02-13
lecturer: Denis Auroux
source-pages: 1-5
---

## Recap: compactness in metric spaces

:::definition
- $X$ is **compact** if every open cover $(U_i)_{i\in I}$ of $X$ has a finite subcover.
- $X$ is **limit point compact** if every infinite subset of $X$ has a limit point.
- $X$ is **sequentially compact** if every sequence $\{p_n\}$ in $X$ has a convergent subsequence.
:::

:::theorem
For metric spaces, the 3 notions are equivalent.
:::

We proved this except for a lemma (Lemma 2) which remained to prove:

:::lemma Lebesgue numbers
If $X$ is a sequentially compact metric space, then every open cover has a Lebesgue number ($\exists\,\delta>0$ such that any subset of diameter $<\delta$ is entirely in one $U_i$).
:::

(We’ve seen this hold for compact metric spaces, so it should hold!)

:::proof
Suppose there exists an open cover $(U_i)_{i\in I}$ with no Lebesgue number, i.e. $\forall n\ge1$ $\exists\,C_n\subset X$ with diameter $<\frac1n$ which isn’t contained in any single $U_i$. Take $x_n\in C_n$.

By sequential compactness, there exists a subsequence $(x_{n_k})$ of $(x_n)$ that converges to some $a\in X$. Now $a\in U_{i_0}$ for some $i_0\in I$, and so $\exists\,\varepsilon>0$ such that $B_\varepsilon(a)\subset U_{i_0}$. Take $k$ sufficiently large so that $\frac1{n_k}<\frac\varepsilon2$ and $d(x_{n_k},a)<\frac\varepsilon2$. Since $C_{n_k}$ has diameter $<\frac\varepsilon2$,
$$C_{n_k}\subset B_{\varepsilon/2}(x_{n_k})\subset B_\varepsilon(a)\subset U_{i_0},$$
contradiction.
:::

:::remark
This proof illustrates how arguments using sequential compactness are often more intuitive than those involving open covers: “if some property fails to hold uniformly, take a sequence of points where things get worse, extract a convergent subsequence, and see what goes wrong at the limit.”
:::

## Completeness

:::theorem
Every compact metric space $(X,d)$ is **complete**, i.e. every Cauchy sequence converges.
:::

:::proof
Let $(x_n)$ be a Cauchy sequence. By sequential compactness there exists a subsequence $x_{n_k}\to x\in X$. Now $\forall\varepsilon>0$ $\exists N$ such that $\forall m,n\ge N$, $d(x_m,x_n)<\frac\varepsilon2$, and $\exists\,n_k\ge N$ such that $d(x_{n_k},x)<\frac\varepsilon2$. Hence $\forall n\ge N$,
$$d(x_n,x)\le d(x_n,x_{n_k})+d(x_{n_k},x)<\varepsilon.$$
:::

:::corollary
$\RR$, $\RR^n$ (with the usual distances) are complete.
:::

:::proof
Every Cauchy sequence is bounded, hence contained in a compact subset, hence convergent.
:::

:::corollary
$\RR^X=\{\text{functions }X\to\RR\}$ with the uniform metric is complete.
:::

:::proof
Given a Cauchy sequence $\{f_n\}$ (i.e. $\forall\varepsilon>0$ $\exists N$ such that $m,n\ge N\Rightarrow\sup|f_n-f_m|<\varepsilon$): $\forall x\in X$, $\{f_n(x)\}$ is a Cauchy sequence in $\RR$ (since $|f_n(x)-f_m(x)|\le\sup|f_n-f_m|<\varepsilon$), hence converges to some limit $f(x)$ (i.e. we have a pointwise limit).

Now: given $\varepsilon>0$, take $N$ such that $m,n\ge N\Rightarrow\sup_x|f_n(x)-f_m(x)|<\varepsilon$. Then $\forall n\ge N$, $\forall x\in X$,
$$|f_n(x)-f(x)|=\lim_{m\to\infty}|f_n(x)-f_m(x)|\le\varepsilon,$$
i.e. $\forall n\ge N$, $\sup|f_n-f|\le\varepsilon$, which implies $f_n\to f$ uniformly.
:::

:::note
When $X$ is a topological space, we’ve seen that uniform limits of continuous functions are continuous, so we also have completeness of $C^0(X,\RR)=\{\text{continuous functions}\}\subset\RR^X$ (uniform topology). More generally: closed subsets of complete metric spaces are complete!
:::

## Compactification (Munkres §29)

:::definition
A **compactification** of a (Hausdorff) topological space $X$ is a compact (Hausdorff) space $Y$ with an inclusion $i:X\hookrightarrow Y$ which is an embedding (i.e. a homeomorphism onto its image, i.e. the topology on $X$ is the subspace topology of $i(X)\subset Y$), with $X$ open and dense in $Y$ ($\overline X=Y$).
:::

:::example
$\RR^n\rightsquigarrow\RR^n\cup\{\infty\}$ as in HW2; this is in fact homeomorphic to $S^n$ (the unit sphere in $\RR^{n+1}$).

This is not the only option: e.g. $(0,1)\simeq\RR$ compactifies to $[0,1]$ or to $S^1$; and $(0,1)\times(0,1)\simeq\RR^2$ compactifies e.g. to $[0,1]\times[0,1]$, to $S^2$, or to the torus ($\simeq S^1\times S^1$).

![Compactifications of the open interval and of the open square](/notes/math-55b/figures/a3-compactifications.svg)
:::

### The one-point compactification

The **one-point compactification**, if it exists, is unique.

Let $Y=X\cup\{\infty\}$ (add a new point). The requirements of a compactification imply:

- a subset $U\subset X$ is open in $Y$ iff it is open in $X$ (subspace topology $=\mathcal T_X$);
- a subset $V$ containing $\infty$ is open in $Y$ iff $Y-V$ is closed, hence compact (we want $Y$ compact), and a subset of $X$ (since $\infty\in V$).

So we define:

:::definition
$$\mathcal T_Y=\{U\subset X\text{ open}\}\cup\{Y-K\mid K\subset X\text{ compact}\}.$$
:::

:::theorem
$\mathcal T_Y$ is a topology on $Y=X\cup\{\infty\}$, and $Y$ is a compactification of $X$ (in particular, $Y$ is compact), *except*: $\overline X=Y$ fails when $X$ is compact! Also, $X$ Hausdorff doesn’t necessarily imply $Y$ Hausdorff.
:::

:::proof
- Axioms of a topology: case by case for $U$‘s and $(Y-K)$‘s. Arbitrary unions and finite intersections of a single type of open set are still of the same type (note: $\bigcap(Y-K_i)=Y-\bigcup K_i$, and a finite union of compact subsets of $X$ is compact). Moreover,
$$\begin{aligned}U\cap(Y-K)&=U\cap(X-K)\quad\text{open in }X,\\ U\cup(Y-K)&=Y-\big(K\cap(X-U)\big),\end{aligned}$$
where $K\cap(X-U)$ is closed in $K$, hence compact. ✓

- $Y$ is compact: if $(A_i)_{i\in I}$ is an open cover of $Y$, then $\infty\in A_{i_0}=Y-K$ for some $i_0\in I$, and now the $(A_i\cap K)$ form an open cover of $K$, so $\exists\,i_1,\dots,i_n$ such that $A_{i_1}\cup\dots\cup A_{i_n}\supset K$. Thus $Y=A_{i_0}\cup(A_{i_1}\cup\dots\cup A_{i_n})$ is a finite subcover.
:::

However, this $Y$ is not always Hausdorff! One-point compactifications are only useful if Hausdorff.

:::definition
$X$ is **locally compact** if $\forall x\in X$, $\exists\,K\subset X$ compact which contains a neighborhood of $x$.
:::

:::example
$\RR$ is locally compact ($x\in\RR\Rightarrow x\in\operatorname{int}([x-1,x+1])$), and so is $\RR^n$. $\RR^\NN$ isn’t (for any of the usual topologies). Neither is $\QQ$ with the usual topology (as a subspace of $\RR$).
:::

:::theorem
The one-point compactification $Y=X\cup\{\infty\}$ is Hausdorff iff $X$ is locally compact and Hausdorff.
:::

:::proof
- $X$ Hausdorff $\iff$ we can separate points of $X\subset Y$ by open subsets (in $X$ or in $Y$).
- $X$ locally compact $\iff$ $\forall x\in X$ $\exists$ open sets $U\ni x$ and $Y-K\ni\infty$ such that $U\subset K$, i.e. $U\cap(Y-K)=\emptyset$ $\iff$ we can separate points of $X$ from $\infty$ by open subsets in $Y$.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 10](/notes/math-55b/10-countability-separation-and-urysohn-metrization)
**Countability axioms (§30)**

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

**Regular and normal spaces (§31–32)**

Recall: $X$ is Hausdorff := we can separate points: $\forall x\ne y$, $\exists\,U\ni x$, $V\ni y$ disjoint open (aka $T_2$). ($\Rightarrow T_1$: $\{x\}$ is closed $\forall x\in X$.)

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
- regular + second-countable $\Rightarrow$ normal
- Hausdorff + compact $\Rightarrow$ normal
:::

We won’t prove this, cf. Munkres §32. We did see, when proving that compact subsets of Hausdorff spaces are closed, that compact + Hausdorff $\Rightarrow$ regular; normal was on HW2 (Munkres 26.5).

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

**Urysohn’s lemma**

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

**Proof of Urysohn’s lemma**

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

Next we will prove the metrization theorem, namely that if $X$ is normal and has a countable basis, then $X$ is metrizable.
:::
