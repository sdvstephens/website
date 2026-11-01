---
course: math-55b
chapter: 7
section: 29
title: Cauchy’s Theorem and the Integral Formula
date: 2026-04-10
lecturer: Denis Auroux
source-pages: 1-5
---

## Last time

$$\exp(z)=\sum_{n=0}^\infty\frac{z^n}{n!}.$$

- $\exp'(z)=\exp(z)\neq0$ (since $\exp(-z)\cdot\exp(z)=1$), so $\exp$ is a local diffeomorphism near each point! Globally, $\exp\colon\CC\to\CC^*$ is the universal covering map!

### Logarithms and powers

What about the logarithm? For $w\in\CC^*$, we want to define $\log(w)=z$ such that $e^z=w$. Such a $z$ exists, but isn’t unique: we can add integer multiples of $2\pi i$. $\operatorname{Re}\log(w)$ is well defined though, and equal to $\log|w|$ (for the usual $\log$ on $\RR_+$).

In general “$\log(w)=\log|w|+i\arg(w)$“ is not well defined and continuous on $\CC^*$; but it’s OK over simply connected subsets of $\CC^*$ (we can’t go around $0$, so $\arg$ is well defined). This is consistent with what we’ve seen about the lifting problem for

![Lifting the inclusion of U into C-star through exp](/notes/math-55b/figures/a8-log-lift.svg)

The same issue comes up with defining $z^a$ for $a\notin\ZZ$: we would like to define it as $z^a=\exp(a\log z)$, but this only works on suitable domains. E.g. $\sqrt z$ is multivalued ($\pm\sqrt z$) and we can’t define a continuous function on a domain that encloses the origin.

There are still power series expressions away from the origin. E.g.:

$$\log(1+z)=z-\frac{z^2}2+\frac{z^3}3-\cdots,\qquad\sqrt{1+z}=1+\frac z2-\frac{z^2}8+\cdots\qquad(R=1).$$

## Path integrals and Cauchy’s theorem

Now we consider **path integrals** of **complex 1-forms** $\omega=f(z)\,dz$: given a continuous function $f\colon U\to\CC$ and a (piecewise) differentiable path $\gamma\colon[0,1]\to U$,

$$\int_\gamma f(z)\,dz=\int_0^1f(\gamma(t))\,\gamma'(t)\,dt$$

(or: pick points $z_i=\gamma(t_i)$ along the path, with $\diam\gamma([t_i,t_{i+1}])<\eps$; then $\int=\lim_{\eps\to0}\sum_if(z_i)(z_{i+1}-z_i)$).

:::example
For a path $\gamma$ from $a$ to $b$:

$$\int_\gamma z^n\,dz=\int_0^1\gamma(t)^n\gamma'(t)\,dt=\frac1{n+1}\left(b^{n+1}-a^{n+1}\right).$$
:::

For a power series $f(z)=\sum a_nz^n$, if $\gamma$ is entirely contained in the disc of convergence, it follows that

$$\int_\gamma f(z)\,dz=F(b)-F(a),\qquad\text{where }F(z)=\sum\frac{a_n}{n+1}z^{n+1}:$$

indeed $F'=f$, and so the equality follows from the fundamental theorem of calculus.

In general, a 1-form on $\RR^2$ need not be exact, and path integrals need not be path-independent. One of the miracles is that things are much simpler in the analytic setting.

Key result:

:::theorem Cauchy’s theorem
Let $D\subset\CC$ be a bounded region with piecewise smooth boundary, and $f(z)$ analytic on $U$ open $\supset\ol D$. Then

$$\int_{\partial D}f(z)\,dz=0.$$
:::

:::proof Proof assuming $f'$ is continuous
The 1-form $\omega=f(z)\,dz$ is $C^1$, and

$$d\omega=df\wedge dz=f'(z)\,dz\wedge dz=0.$$

Stokes’ theorem then gives $\int_{\partial D}\omega=\int_Dd\omega=0$.

(Let’s check this more carefully, just to be safe: $\omega=f(z)\,dz=f(z)\,dx+if(z)\,dy$, so

$$d\omega=\left(-\pd fy+i\,\pd fx\right)dx\wedge dy=0$$

by Cauchy–Riemann.)
:::

We’ll see later how to show that $f$ analytic $\Rightarrow$ $f'$ continuous. In the meantime we add the continuity of $f'$ to our working assumptions.

This holds not just for a simply connected region bounded by a simple closed curve! We can also allow holes in the region $D$, e.g. around points where $f$ isn’t defined.

:::example
![A region D between a closed curve gamma and a small circle C_r around z_0, inside an open set U](/notes/math-55b/figures/a8-cauchy-hole.svg)

Let $f$ be analytic on $U-\{z_0\}$, and $\gamma$ enclosing $z_0$ as shown. Then

$$\int_\gamma f(z)\,dz=\int_{C_r=S^1(z_0,r)}f(z)\,dz$$

(by Cauchy’s theorem: $\partial D=\gamma-C_r$).
:::

Now assume $f$ is analytic on $U-\{z_0\}$ *and* $\lim_{z\to z_0}(z-z_0)f(z)=0$ (e.g. it’s enough for $f$ to be bounded near $z_0$). Then

$$\left|\int_{C_r}f(z)\,dz\right|\le\sup_{z\in C_r}|f(z)|\cdot\operatorname{length}(C_r)=2\pi r\sup_{z\in C_r}|f(z)|=2\pi\sup_{z\in C_r}|(z-z_0)f(z)|.$$

Since this quantity $\to0$ as $r\to0$, and the path integral is independent of $r$, we get:

:::theorem “Improved Cauchy”
Cauchy’s theorem ($\int_{\partial D}f(z)\,dz=0$) remains true under the weaker assumption that $f$ is defined and analytic in $D-\{z_0\}$, $z_0\in\operatorname{int}(D)$, and $\lim_{z\to z_0}(z-z_0)f(z)=0$.
:::

However, we can’t get rid of all assumptions about the behavior of $f$ at $z_0$.

:::example
With $z=z_0+re^{i\theta}$:

$$\int_{S^1(z_0,r)}(z-z_0)^n\,dz=\int_0^{2\pi}\left(re^{i\theta}\right)^n\,ire^{i\theta}\,d\theta=\begin{cases}0&\text{if }n\neq-1,\\ 2\pi i&\text{if }n=-1,\end{cases}$$

or the same for any $\gamma$ going once around $z_0$, by Cauchy! (Cf. the fundamental theorem / the multivalued nature of $\log$.)
:::

## Cauchy’s integral formula

Using this, we get to **Cauchy’s integral formula**:

:::theorem Cauchy’s integral formula
Let $D\subset\CC$ be a bounded region with piecewise smooth boundary $\gamma$, $f(z)$ analytic on an open domain containing $\ol D$, and $z_0\in\operatorname{int}(D)$. Then

$$\boxed{f(z_0)=\frac1{2\pi i}\int_\gamma\frac{f(z)\,dz}{z-z_0}}\qquad(\ast)$$
:::

:::proof
Since $\int_\gamma\frac{dz}{z-z_0}=2\pi i$, the formula is equivalent to

$$\frac1{2\pi i}\int_\gamma\frac{f(z)-f(z_0)}{z-z_0}\,dz=0.$$

The differentiability of $f$ at $z_0$ implies: as $z\to z_0$, $\frac{f(z)-f(z_0)}{z-z_0}\to f'(z_0)$, and in particular

$$(z-z_0)\,\frac{f(z)-f(z_0)}{z-z_0}\to0$$

(+ it is analytic for $z\neq z_0$). The result thus follows from improved Cauchy.
:::

:::proof Alternative proof
Cauchy’s theorem gives

$$\frac1{2\pi i}\int_\gamma\frac{f(z)\,dz}{z-z_0}=\frac1{2\pi i}\int_{S^1(z_0,r)}\frac{f(z)\,dz}{z-z_0}=\frac1{2\pi}\int_0^{2\pi}f\left(z_0+re^{i\theta}\right)d\theta\xrightarrow[r\to0]{}f(z_0).$$
:::

This is magical: the values of $f$ at *every point* inside a closed curve $\gamma$ can be determined by calculating path integrals on $\gamma$!! (Assuming $f$ is defined and analytic everywhere in the enclosed region, of course.) In this version, to emphasize that we can vary the point of evaluation, one usually rewrites $(\ast)$ as

$$f(z)=\frac1{2\pi i}\int_\gamma\frac{f(w)\,dw}{w-z}\qquad\forall z\in\operatorname{int}(D),\ \partial D=\gamma.$$

Next we’ll do even better ($\Rightarrow$ all derivatives exist!!):

$$\boxed{\frac{f^{(n)}(z)}{n!}=\frac1{2\pi i}\int_\gamma\frac{f(w)\,dw}{(w-z)^{n+1}}}\qquad(\ast\ast)$$

:::remark
If $f$ is given by a power series near $z_0$, $f(z)=\sum_{k=0}^\infty a_k(z-z_0)^k$ with $a_k=\frac{f^{(k)}(z_0)}{k!}$, then for $\gamma=S^1(z_0,r)$ a small circle ($r<$ radius of convergence), uniform convergence of the series implies

$$\frac1{2\pi i}\int_{S^1(z_0,r)}\frac{f(w)\,dw}{(w-z_0)^{n+1}}=\sum_{k=0}^\infty\frac{a_k}{2\pi i}\int_{S^1(z_0,r)}\frac{(w-z_0)^k}{(w-z_0)^{n+1}}\,dw=a_n=\frac{f^{(n)}(z_0)}{n!}\ \checkmark$$

(by the calculation above, the integral is $0$ for $k\neq n$ and $2\pi i$ for $k=n$), and Cauchy implies $\int_\gamma=\int_{S^1(z_0,r)}$.

But the problem is … we haven’t shown yet that analytic functions are power series! In fact the proof uses Cauchy’s formula … so instead we have to work.
:::

:::proposition
Suppose $\varphi(w)$ is continuous on $\gamma=\partial D$. Then for all $n\ge1$,

$$g_n(z)=\int_\gamma\frac{\varphi(w)\,dw}{(w-z)^n}$$

is analytic in the interior of $D$, and

$$g_n'(z)=n\int_\gamma\frac{\varphi(w)\,dw}{(w-z)^{n+1}}=n\,g_{n+1}(z).$$
:::

:::proof
We first prove that $g_n$ is continuous on $\operatorname{int}(D)$. Fix $z_0\in\operatorname{int}(D)$ with $B_{2\delta}(z_0)\subset D$, and let $z\in B_\delta(z_0)$ (so $z$ and $z_0$ are farther than $\delta$ away from all points of $\gamma$). Calculate:

$$\frac1{(w-z)^n}-\frac1{(w-z_0)^n}=\sum_{k=1}^n\frac1{(w-z)^{n-k}(w-z_0)^{k-1}}\left(\frac1{w-z}-\frac1{w-z_0}\right)=\sum_{k=1}^n\frac{z-z_0}{(w-z)^{n+1-k}(w-z_0)^k}.$$

So:

$$\begin{aligned}g_n(z)-g_n(z_0)&=\int_\gamma\varphi(w)\left(\frac1{(w-z)^n}-\frac1{(w-z_0)^n}\right)dw\\ &=(z-z_0)\int_\gamma\varphi(w)\left(\sum_{k=1}^n\frac1{(w-z)^{n+1-k}(w-z_0)^k}\right)dw.\end{aligned}$$

Since each term in the sum has $|\cdot|\le\frac1{\delta^{n+1}}$, this implies

$$|g_n(z)-g_n(z_0)|\le|z-z_0|\cdot\left(\sup_{w\in\gamma}|\varphi(w)|\right)\cdot\frac{n}{\delta^{n+1}}\operatorname{length}(\gamma).$$

Taking $z\to z_0$, this inequality proves that $g_n$ is continuous at $z_0$, i.e. $g_n$ is continuous on $\operatorname{int}(D)$. Moreover,

$$\frac{g_n(z)-g_n(z_0)}{z-z_0}=\sum_{k=1}^n\int_\gamma\frac{\varphi(w)}{(w-z)^{n+1-k}(w-z_0)^k}\,dw.\qquad(\dagger)$$

The continuity result, now applied to $\frac{\varphi(w)}{(w-z_0)^k}$, shows that the terms in the right-hand side are continuous functions of $z\in\operatorname{int}(D)$; hence the right-hand side of $(\dagger)$ is continuous, and its limit at $z=z_0$ equals

$$n\int_\gamma\frac{\varphi(w)}{(w-z_0)^{n+1}}\,dw=n\,g_{n+1}(z_0).$$

This gives the existence of

$$g_n'(z_0)=\lim_{z\to z_0}\frac{g_n(z)-g_n(z_0)}{z-z_0}=\lim_{z\to z_0}\left(\text{rhs of }(\dagger)\right)=n\,g_{n+1}(z_0).$$

This holds for all $z_0\in\operatorname{int}(D)$, hence $g_n$ is analytic as claimed and $g_n'(z)=n\,g_{n+1}(z)$.
:::

Now if $f$ is analytic in $U\supset\ol D$ (+ $f'$ continuous), then by Cauchy’s integral formula,

$$2\pi i\,f(z)=\int_\gamma\frac{f(w)\,dw}{w-z}$$

is the expression denoted $g_1(z)$ in the proposition, for $\varphi=f|_\gamma$.

:::corollary
The proposition then shows that $f$ is infinitely differentiable, all its derivatives are analytic, and $2\pi i\,f^{(n)}(z)=n!\,g_{n+1}(z)$, i.e.

$$\frac{f^{(n)}(z)}{n!}=\frac1{2\pi i}\int_\gamma\frac{f(w)\,dw}{(w-z)^{n+1}}.$$
:::

This also lets us lift the extra assumption we’ve made so far in all proofs using Cauchy’s theorem, that $f'$ is continuous.

:::proposition
If $f$ is analytic then $f'$ is continuous.
:::

:::proof
If $f$ is analytic in a disc $D\ni z_0$, define

$$F(z)=\int_{z_0}^zf(w)\,dw,$$

where we choose a path consisting of horizontal and vertical line segments. We don’t have the full strength of Stokes’ theorem (we don’t know that $f'$ is continuous), but we claim it holds for rectangles: $\int_{\partial R}f(w)\,dw=0$ for a rectangle $R$ (see below).

Given this, our definition of $F$ makes sense and doesn’t depend on the path. We claim $F$ is analytic and $F'=f$. Indeed:

$$F(z+h)-F(z)=\int_\gamma f(w)\,dw,$$

where $\gamma$ goes horizontally from $z$ to $z+\operatorname{Re}h$, then vertically up to $z+h$. Using continuity of $f$, as $h\to0$ we have $\sup_{w\in\gamma}|f(w)-f(z)|\to0$, hence $F(z+h)-F(z)=hf(z)+o(|h|)$, hence $F'(z)=f(z)$.

So now $F$ is analytic with continuous derivative $F'=f$, so we can apply Cauchy’s integral formula and the above argument to $F$, so $F$ has derivatives to all orders. In particular $F''(z)=f'(z)$ is continuous.
:::

### Cauchy’s theorem on rectangles (without assuming $f'$ continuous)

:::proof
Assume $R=R_0$ is a rectangle, $f$ is analytic, and

$$I=\int_{\partial R}f(z)\,dz\neq0.$$

Cut $R$ into 4 equal rectangles; then $\int_{\partial R}$ is the sum of the 4 path integrals around them, so there exists $R_1\subset R_0$ with $\diam(R_1)=\frac{\diam(R_0)}2$ such that

$$\left|\int_{\partial R_1}f(z)\,dz\right|\ge\frac14|I|.$$

Repeat this process: $R_0\supset R_1\supset R_2\supset\cdots$ with $\diam(R_n)=\frac{\diam(R_0)}{2^n}$ and

$$\left|\int_{\partial R_n}f(z)\,dz\right|\ge\frac1{4^n}|I|.$$

Then $\bigcap_{n\in\NN}R_n=\{z_0\}$ (a decreasing sequence of nonempty closed subsets in a compact space has a nonempty intersection: else the complements would be an open cover without a finite subcover).

But now $f(z)=f(z_0)+f'(z_0)(z-z_0)+r(z)$ with $r(z)=o(|z-z_0|)$, so

$$\left|\int_{\partial R_n}f(z)\,dz\right|=\left|\int_{\partial R_n}r(z)\,dz\right|\le\operatorname{length}(\partial R_n)\cdot\sup_{\partial R_n}|r(z)|=o\!\left(\frac1{4^n}\right).$$

Contradiction.
:::

## Consequences: Cauchy’s bound and entire functions

Returning to Cauchy’s integral formula for derivatives:

:::theorem
$f(z)$ analytic on $U\subset\CC$ $\Rightarrow$ $f$ has derivatives to all orders in $U$, all derivatives are analytic, and for $z\in\operatorname{int}(D)\subset\ol D\subset U$,

$$\frac{f^{(n)}(z)}{n!}=\frac1{2\pi i}\int_{\partial D}\frac{f(w)\,dw}{(w-z)^{n+1}}.$$
:::

From this we get, by bounding the integral in the right-hand side:

:::theorem Cauchy’s bound
If $f$ is analytic in $U\supset\ol{B_R(z_0)}$, then

$$\left|\frac{f^{(n)}(z_0)}{n!}\right|\le\frac1{R^n}\sup_{w\in S^1(z_0,R)}|f(w)|.$$
:::

(By considering $r<R$, $r\to R$, the result still holds under the weaker assumption that $f$ is continuous on $\ol{B_R(z_0)}$ and analytic in $B_R(z_0)$.)

Cauchy’s bound has important consequences for **entire functions**, i.e. functions analytic on all of $\CC$.

:::corollary
If $f$ is analytic on all of $\CC$ (“entire function”) and bounded, then $f$ is constant.
:::

:::proof
Apply Cauchy’s bound with $R\to\infty$ to get $f'=0$.
:::

:::corollary
A nonconstant entire function $f\colon\CC\to\CC$ has dense image: $\ol{f(\CC)}=\CC$.
:::

:::proof
If $c\notin\ol{f(\CC)}$, then there is $\eps>0$ such that $|f(z)-c|\ge\eps$ for all $z\in\CC$, and then $\frac1{f(z)-c}$ is a bounded entire function, hence constant.
:::
