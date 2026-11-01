---
course: math-55b
chapter: 5
section: 21
title: The Riemann Integral and the Arzelà–Ascoli Theorem
date: 2026-03-23
lecturer: Denis Auroux
source-pages: 1-4
---

## Integration in one real variable

The definite integral of continuous functions is a **linear operator**
$$
I_a^b:C^0([a,b])\to\RR,\qquad f\mapsto I_a^b(f)=\int_a^bf\,dx,
$$
for each $a<b\in\RR$ (linear: $\int_a^b(f+g)\,dx=\int_a^bf+\int_a^bg$ and $\int_a^bcf\,dx=c\int_a^bf\,dx$), satisfying the axioms:

1. If $f\ge0$ then $\int_a^bf\,dx\ge0$ (so if $f\ge g$ then $\int_a^bf\,dx\ge\int_a^bg\,dx$).
2. If $a<c<b$ then $\int_a^bf\,dx=\int_a^cf\,dx+\int_c^bf\,dx$.
3. $\int_a^b1\,dx=b-a$.

In fact, such a linear map is **unique**; the difference between different theories of integration is in how much more general functions we allow ourselves to integrate.

The Riemann integral starts from **step functions**: $s:[a,b]\to\RR$ such that $\exists\,a=x_0<x_1<\dots<x_n=b$ such that $s(x)$ is constant over each $(x_{i-1},x_i)$, $s(x)=s_i$ (the values at the $x_i$ don’t matter). Then 2) and 3) suggest we must have
$$
I(s)=\int_a^bs(x)\,dx=\sum_{i=1}^ns_i(x_i-x_{i-1}).
$$
This definition of the integral for step functions satisfies the required axioms.

Next: if $s\le f\le S$ for $s,S$ step functions, then
$$
(\star)\qquad\int_a^bs\,dx\le\int_a^bf\,dx\le\int_a^bS\,dx.
$$
In particular, if $f:[a,b]\to\RR$ is bounded, then fixing $a=x_0<x_1<\dots<x_n=b$, we can take $s_i=\inf f([x_{i-1},x_i])$ and $S_i=\sup f([x_{i-1},x_i])$, giving the **lower and upper Riemann sums** of $f$ for the given partition of $[a,b]$. Refining (i.e. subdividing further) gives better bounds on $f$:
$$
\int s\,dx\le\int s'\,dx\le\int f\,dx\le\int S\,dx.
$$

![A function f squeezed between coarse step functions s and S, with a finer lower step function s’ between s and f](/notes/math-55b/figures/a6-riemann-refine.svg)

The **lower and upper Riemann integrals**:
$$
I_-(f)=\sup\left\{\int_a^bs\,dx\ \middle/\ s\le f\text{ on }[a,b],\ s\text{ step function}\right\},\qquad
I_+(f)=\inf\left\{\int_a^bS\,dx\ \middle/\ S\ge f\text{ on }[a,b],\ S\text{ step function}\right\}.
$$
For all bounded $f:[a,b]\to\RR$, $I_-(f)\le I_+(f)$.

:::definition
$f$ is **Riemann integrable**, $f\in\mathcal R([a,b])$, if $I_+(f)=I_-(f)$; we then set $\int_a^bf\,dx=I_\pm(f)$.
:::

:::theorem
Continuous functions are Riemann integrable.
:::

:::proof
The key ingredient is **uniform continuity**: $\forall\eps>0\ \exists\delta$ such that for $x,y\in[a,b]$, $|x-y|<\delta\Rightarrow|f(x)-f(y)|<\eps$. (Recall: this is proved by applying the Lebesgue number lemma to the open cover $[a,b]\subset\bigcup_{c\in\RR}f^{-1}((c,c+\eps))$: $\exists\delta>0$ such that $|x-y|=\diam(\{x,y\})<\delta\Rightarrow\exists c$ such that $\{x,y\}\subset f^{-1}((c,c+\eps))$.)

Thus: given $\eps>0$, take $\delta$ as in uniform continuity, and split $a=x_0<x_1<\dots<x_n=b$ such that $x_{i+1}-x_i<\delta$ for all $i$. Then $s_i=\min f([x_i,x_{i+1}])$ and $S_i=\max f([x_i,x_{i+1}])$ (attained) satisfy $S_i-s_i<\eps$ for all $i$, and $s_i\le f\le S_i$ on $[x_i,x_{i+1}]$.

![A continuous function over a partition with mesh less than delta; on each subinterval the max and min of f differ by less than epsilon](/notes/math-55b/figures/a6-uniform-steps.svg)

Let $s,S$ be the step functions taking the values $s_i,S_i$ on $[x_i,x_{i+1})$. Then $s\le f\le S$ on $[a,b]$, so $I(s)\le I_-(f)$ and $I(S)\ge I_+(f)$; moreover, $S_i-s_i\le\eps$ for all $i$, so $I(S)-I(s)\le\eps(b-a)$. Hence
$$
I_+(f)-I_-(f)\le\eps(b-a)\quad\forall\eps>0\ \Rightarrow\ I_+(f)=I_-(f),\quad f\in\mathcal R([a,b]).
$$
:::

:::remark
- Piecewise continuous functions are also integrable, and so are some stranger functions (see Rudin, and see the homework). However, for example,
$$
f(x)=\begin{cases}1&\text{if }x\in\QQ\\0&\text{if }x\notin\QQ\end{cases}
$$
is not Riemann integrable ($I_-(f)=0$, $I_+(f)=b-a$).

  The Lebesgue integral allows more general decompositions into “measurable” subsets (rather than just sub-intervals) and allows more general functions to be integrated (including unbounded functions, which are never Riemann integrable). (E.g. for Riemann integration, $\int_0^x\frac1{\sqrt t}\,dt=2\sqrt x$ only makes sense as an “improper integral”, i.e. $\lim_{\eps\to0}\int_\eps^x$, whereas Lebesgue can handle this and worse.)

- In fact, Lebesgue gave a characterization of exactly which functions are Riemann integrable: $f\in\mathcal R([a,b])$ iff $f$ is bounded on $[a,b]$ and the set $E$ of points where $f$ is discontinuous has **Lebesgue measure 0**, which means: $\forall\eps>0$ there exists an at most countable collection $(I_i)$ of open intervals such that $E\subset\bigcup I_i$ and $\sum\operatorname{length}(I_i)<\eps$.

- It is easy to check (do it!) that $\mathcal R([a,b])$ is a vector space, and $I:\mathcal R([a,b])\to\RR$ is linear and satisfies the above axioms.
:::

:::theorem Fundamental theorem of calculus
If $f$ is continuous on $[a,b]$ then $F(x)=\int_a^xf(t)\,dt$ is differentiable and $F'=f$.
:::

:::proof
$$
\frac1h\big(F(x+h)-F(x)\big)=\frac1h\int_x^{x+h}f(t)\,dt\xrightarrow[h\to0]{}f(x),
$$
using continuity of $f$ at $x$ to estimate the integral for $h\to0$.
:::

## Integration and convergence

:::theorem
$I:C^0([a,b])\to\RR$ is continuous with respect to the uniform topology: if $f_n\to f$ uniformly then $\int_a^bf_n\,dx\to\int_a^bf\,dx$. In fact,
$$
\left|\int f\,dx-\int g\,dx\right|\le\int|f-g|\,dx\le(b-a)\sup|f-g|.
$$
:::

On the other hand, pointwise convergence isn’t enough:

:::example
Let $f_n$ be the tent function below, of height $2n$ over $[0,\frac1n]$ and $0$ on $[\frac1n,1]$. Then $f_n\to0$ pointwise, but
$$
\int_0^1f_n\,dx=1\not\to\int_0^10\,dx=0.
$$

![Tent function of height 2n supported on [0, 1/n]](/notes/math-55b/figures/a6-tent.svg)
:::

## $L^p$ norms

Besides $\|f\|_\infty=\sup|f|$, we have other norms on the vector space $C^0([a,b],\RR)$, defining **coarser** topologies (with respect to which integration is still a continuous functional), namely
$$
\|f\|_1=\int_a^b|f(x)|\,dx,\qquad\text{and also}\qquad\|f\|_p=\left(\int_a^b|f(x)|^p\,dx\right)^{1/p}\quad\forall p\ge1.
$$
(The triangle inequality follows from Hölder’s inequality, cf. homework.)

These are called the **$L^p$ norms**. Since $\|f\|_p\le(b-a)^{1/p}\|f\|_\infty$, balls for $\|\cdot\|_p$ contain balls for $\|\cdot\|_\infty$, and the topologies defined by these metrics are coarser than the uniform topology (and $L^p$ is coarser than $L^{p'}$ for $p<p'$, using Hölder’s inequality).

$(C^0([a,b]),\|\cdot\|_p)$ isn’t complete; its completion is the Lebesgue space $L^p([a,b])$ (Math 114!).

:::example
Let $f_n$ be $0$ for $x\le0$, linear from $0$ to $1$ on $[0,\frac1n]$, and $1$ for $x\ge\frac1n$. Then $(f_n)$ is Cauchy in the $L^1$ norm; in fact it converges in $L^1$ to its pointwise limit $f$ ($0$ for $x\le0$, $1$ for $x>0$), which is in $\mathcal R$:
$$
\int_0^1|f_n-f|\,dx=\frac1{2n}\to0,
$$
but $f\notin C^0$.

![Left: the ramp function f_n rising from 0 at x = 0 to 1 at x = 1/n. Right: its pointwise limit, the step function f](/notes/math-55b/figures/a6-ramp-step.svg)
:::

$L^1$ is quite natural, but so is $L^2$, which comes from an inner product
$$
\langle f,g\rangle_{L^2}=\int_a^bfg\,dx\qquad\left(\Rightarrow\|f\|_{L^2}=\sqrt{\langle f,f\rangle}\right).
$$
(Cauchy–Schwarz, $\langle f,g\rangle\le\|f\|_{L^2}\|g\|_{L^2}$, is a special case of Hölder’s inequality.)

## Compactness in $C^0$: the Arzelà–Ascoli theorem

We now return to $\|\cdot\|_\infty$ (the uniform topology) and various results about $C^0([a,b])$.

Closed and bounded subsets of $(C^0([a,b]),\|\cdot\|_\infty)$ aren’t compact. (In fact, the closed unit ball of an infinite-dimensional normed vector space is *never* compact, by Riesz’s theorem.)

:::example
Let $f_n$ on $[a,b]$ (with $a<0<\frac1n<b$) be $0$ for $x\le0$, linear from $0$ to $1$ on $[0,\frac1n]$, and $1$ for $x\ge\frac1n$. Then $\|f_n\|_\infty=1$, but there is no uniformly convergent subsequence.

![The ramp function f_n on [a,b], rising from 0 at x = 0 to 1 at x = 1/n](/notes/math-55b/figures/a6-ramp-ab.svg)

(Even worse, $f_n=\sin(nx)$ doesn’t even have a pointwise convergent subsequence on any interval.)
:::

So… what kinds of subsets of $(C^0([a,b]),\|\cdot\|_\infty)$ are compact ($\iff$ sequentially compact)? The Arzelà–Ascoli theorem gives the answer: we need $\{f_n\}$ uniformly bounded, plus **equicontinuity**.

:::definition
A family of functions $\mathcal F\subset C^0(K)$, $K$ a compact metric space (e.g. $[a,b]$), is **equicontinuous** if
$$
\forall\eps>0\ \exists\delta>0\text{ such that }\forall f\in\mathcal F,\ \forall x,y\in K,\quad d(x,y)<\delta\Rightarrow d(f(x),f(y))<\eps.
$$
Here $\delta$ is independent of $x\in K$ (uniform continuity) *and* of $f\in\mathcal F$ (equicontinuity).
:::

:::proposition
If $f_n\to f\in C^0(K)$ uniformly, then $\{f_n\}$ is bounded in $\|\cdot\|_\infty$ ($\exists M$ such that $\forall n$, $\|f_n\|_\infty\le M$) and equicontinuous.
:::

:::proof
Given $\eps>0$, $\exists N$ such that $n\ge N\Rightarrow\|f_n-f\|_\infty<\frac\eps3$. $f$ is uniformly continuous ($K$ compact); let $\delta>0$ be such that $d(x,y)<\delta\Rightarrow|f(x)-f(y)|<\frac\eps3$. Then for all $n\ge N$, $d(x,y)<\delta\Rightarrow|f_n(x)-f_n(y)|<\eps$ (using the triangle inequality). Since $f_1,\dots,f_N$ are also uniformly continuous, decreasing $\delta$ if needed we can ensure this also holds for $n<N$, thus proving equicontinuity.
:::

So: equicontinuity is necessary for sequential compactness of subsets of $(C^0(K),\|\cdot\|_\infty)$.

:::theorem Arzelà–Ascoli
If a sequence $f_n\in C^0(K)$ is uniformly bounded and equicontinuous, then it has a uniformly convergent subsequence. Hence a subset of $(C^0(K),\|\cdot\|_\infty)$ is compact iff it is closed, bounded, and equicontinuous.
:::

:::proof
(Of the first statement.)

- $K$ is a compact metric space, so there is a countable dense subset $A=\{x_1,x_2,\dots\}\subset K$ (cover $K$ by finitely many $\frac1n$-balls for every $n$, and take all the centers).
- There is a subsequence of $\{f_n\}$ that converges pointwise at $x_1$ (since $\{f_n(x_1)\}$ is bounded). There is a sub-subsequence which also converges pointwise at $x_2$, etc. **Diagonal process**: let $f_{n_k}$ be the $k$-th term of the $k$-th subsequence; then $f_{n_k}$ converges pointwise at all points of $A$.
- Now we prove $(f_{n_k})$ is uniformly Cauchy (hence uniformly convergent), using equicontinuity. Given $\eps>0$, let $\delta>0$ be such that $\forall n_k,\ \forall x,y,\ d(x,y)<\delta\Rightarrow|f_{n_k}(x)-f_{n_k}(y)|<\frac\eps3$ (equicontinuity). Let $A'\subset A$ be a *finite* subset such that $\bigcup_{x_i\in A'}B_\delta(x_i)\supset K$ (compactness of $K$). Let $N$ be such that
$$
n_k,n_l\ge N\Rightarrow|f_{n_k}(x_i)-f_{n_l}(x_i)|<\frac\eps3\quad\forall x_i\in A'
$$
(pointwise Cauchy, plus finiteness of $A'$). Then $\forall x\in K$, $\exists x_i\in A'$ such that $d(x_i,x)<\delta$, so for all $n_k,n_l\ge N$,
$$
\begin{aligned}
|f_{n_k}(x)-f_{n_l}(x)|&\le|f_{n_k}(x)-f_{n_k}(x_i)|+|f_{n_k}(x_i)-f_{n_l}(x_i)|+|f_{n_l}(x_i)-f_{n_l}(x)|\\
&<\frac\eps3+\frac\eps3+\frac\eps3=\eps.
\end{aligned}
$$
Hence $n_k,n_l\ge N\Rightarrow\|f_{n_k}-f_{n_l}\|_\infty\le\eps$: $(f_{n_k})$ is Cauchy in $\|\cdot\|_\infty$, hence converges.
:::

:::example
Let $(f_n)\in C^1([a,b])$ be a bounded sequence in the $C^1$ norm (i.e. $\sup|f_n|\le M$, $\sup|f_n'|\le M$). Then $(f_n)$ is equicontinuous (using the mean value inequality), so it has a subsequence that converges in $C^0$.

The closure of the unit ball for the $C^0$ norm isn’t compact in $C^0$; the closure of the unit ball for the $C^1$ norm isn’t compact in $C^1$; but the $C^0$-closure of the $C^1$-unit ball *is* compact in $C^0$!
:::
