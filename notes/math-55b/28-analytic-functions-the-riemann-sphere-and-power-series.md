---
course: math-55b
chapter: 7
section: 28
title: Analytic Functions: the Riemann Sphere and Power Series
date: 2026-04-08
lecturer: Denis Auroux
source-pages: 1-5
---

## Recall

A function $f\colon U\to\CC$, with $U\subset\CC$ open, is **analytic** if there is a complex derivative at every point of $U$,

$$f'(z)=\lim_{h\to0}\frac{f(z+h)-f(z)}{h}$$

(i.e. $f(z+h)=f(z)+hf'(z)+o(|h|)$).

:::proposition
$f$ is analytic $\iff$ $f$ is differentiable and $Df\in\left\{\begin{pmatrix}a&-b\\ b&a\end{pmatrix}:\ a,b\in\RR\right\}$ (the matrix of multiplication by $f'(z)=a+ib$; rescale + rotate: conformal transformations)

$\iff$

$$\pd{f}{\bar z}\defeq\frac12\left(\pd{f}{x}+i\,\pd{f}{y}\right)=0\qquad\text{(Cauchy–Riemann equation).}$$
:::

And then

$$\pd{f}{z}\defeq\frac12\left(\pd{f}{x}-i\,\pd{f}{y}\right)=f'(z).$$

## The miracle

Even though analyticity only requires the existence of a complex derivative, it has many far-reaching consequences, which we’ll see and prove in the next few classes. Among these:

1. If $f\colon U\to\CC$ is analytic then it has derivatives to all orders! (Unlike the real case, where e.g. $f(x)=x^{7/3}$ is only $C^2$, not $C^\infty$.)
2. The Taylor series expansion of $f$ at any point $z_0\in U$ is convergent and equal to $f$ over a disc $B_r(z_0)\subset U$; in particular $f(z_0+h)$ can be expressed as a power series in $h$! (Unlike $f(x)=\exp(-1/x^2)$, which has all derivatives zero at $x=0$, so its Taylor series converges to $0$, not $f$.)
3. Local determination: if $f,g\colon U\to\CC$ are analytic, $U$ is connected, and $f=g$ over any subset of $U$ that has a limit point (e.g. a small ball, or a small real interval, or …), then $f=g$ on all of $U$!!!

… and more! But first let’s see examples and work out basic properties.

## Examples

### Polynomials

Polynomials $\CC[z]$,

$$P(z)=\sum_{k=0}^n a_kz^k=a_n\prod_{i=1}^n(z-\alpha_i),$$

are analytic, and the complex derivative is the usual derivative. (This follows from the usual rules of differentiation, which hold in the complex case too.)

By contrast, a polynomial in 2 variables $P(x,y)$ can be rewritten as a polynomial in $z,\bar z$ (set $x=\frac{z+\bar z}{2}$, $y=\frac{z-\bar z}{2i}$): $\CC[x,y]\simeq\CC[z,\bar z]$. Check:

$$\pd{}{z}\left(z^k\bar z^\ell\right)=kz^{k-1}\bar z^\ell,\qquad\pd{}{\bar z}\left(z^k\bar z^\ell\right)=\ell z^k\bar z^{\ell-1},$$

so such a polynomial is analytic iff there are no $\bar z$‘s in the expression.

### Rational functions

Rational functions $\CC(z)$:

$$f(z)=\frac{P(z)}{Q(z)}=c\,\frac{\prod(z-\alpha_i)}{\prod(z-\beta_j)}$$

(removing common factors, we assume $\alpha_i\neq\beta_j$ for all $i,j$). This function has **zeros** at the $\alpha_i$ and **poles** at the $\beta_j$. The **order** of a zero or pole is the multiplicity of the root $\alpha_i$ or $\beta_j$ in $P$ or $Q$. Rational functions are analytic on their domain of definition $\CC-\{\text{poles}\}$.

They are also conveniently viewed as functions on the **Riemann sphere**

$$S=\CC\cup\{\infty\}\qquad(=\text{the one-point compactification of }\CC),$$

with values in $S$. Namely, $f(z)=\frac{P(z)}{Q(z)}$ has a unique extension to a continuous map $S\to S$, under which poles $\mapsto\infty$ and

$$\infty\mapsto\lim_{z\to\infty}\frac{P(z)}{Q(z)}\in\CC\cup\{\infty\},$$

and at $z=\infty$ we have

$$\begin{cases}\text{a zero of order }\deg Q-\deg P&\text{if }\deg Q>\deg P,\\ \text{a pole of order }\deg P-\deg Q&\text{if }\deg P>\deg Q.\end{cases}$$

So as a map $S\to S$,

$$\#\text{poles (with multiplicities)}=\#\text{zeros (with multiplicities)}=\max(\deg P,\deg Q)=:\deg(f).$$

:::note
For every $c\in S$, the equation $f(z)=c$ also has exactly $\deg(f)$ solutions (with multiplicities). This is because for $c\in\CC$, $\deg(f-c)=\deg(f)$. (The roots of $f-c$ are those of $P-cQ$ …)
:::

:::example
- $f(z)=z^2$ has a zero of order 2 at $z=0$ and a pole of order 2 at $z=\infty$.
- $f(z)=\frac{z}{z^2-1}$ has zeros of order 1 at $z=0$ and $\infty$, and poles of order 1 at $z=\pm1$.
:::

:::note
The statement that rational functions are analytic maps $S\to S$ can be understood near $z=\infty$ by working via the change of coordinates $z=\frac1w$: $f(z)$ is analytic near $z=\infty$ if $f\left(\frac1w\right)$ is analytic near $w=0$. Similarly, near infinite values (poles), consider $\frac1f$.

In fancier language, $S$ is a **Riemann surface**, i.e. it has an open cover by two subsets $S-\{\infty\}\simeq\CC$ (coordinate $z$) and $S-\{0\}$, also $\simeq\CC$ (coordinate $w$), and the change of coordinates $z=1/w$ is analytic, so we can define analytic functions $S\to S$ as functions whose expressions in these coordinates are analytic. But … we don’t need all this to study rational functions.
:::

### Alternative viewpoint (why “sphere”?)

We can identify $S$ with the unit sphere in $\RR^3$ by **stereographic projection** $S^2\to\CC\cup\infty$:

$$\begin{aligned}(x,y,z)&\longmapsto\frac{x+iy}{1-z}\quad\text{if }z<1,\qquad x^2+y^2+z^2=1,\\ (0,0,1)&\longmapsto\infty.\end{aligned}$$

![Stereographic projection from the north pole of the unit sphere onto the equatorial plane](/notes/math-55b/figures/a8-stereographic.svg)

**Fact:** this is a conformal map $S^2\xrightarrow{\sim}\CC\cup\infty$ (i.e. it preserves angles).

So … rational functions $f(z)=\frac{P(z)}{Q(z)}$ determine conformal maps $S^2\to S^2$ ($\deg(f)$-to-1) ($\leftrightarrow$ analytic functions $S\to S$) … and in fact *all* conformal maps $S\to S$ are given by rational functions! (Can’t prove yet.)

### Fractional linear transformations

:::example Fractional linear transformations
The special case $\deg(f)=1$ is of particular interest: **fractional linear transformations** (a.k.a. **Möbius transformations**)

$$f(z)=\frac{az+b}{cz+d},\qquad\det\begin{pmatrix}a&b\\ c&d\end{pmatrix}\neq0\quad\text{(else common root).}$$

These are homeomorphisms $S\to S$: the automorphisms of the Riemann sphere. They form a group under composition! ($\leftrightarrow$ multiplication of matrices $\begin{pmatrix}a&b\\ c&d\end{pmatrix}$!)
:::

:::example
$f(z)=\frac1z$ maps $0\leftrightarrow\infty$, and maps $S^1$ to itself by $e^{i\theta}\mapsto e^{-i\theta}$ (it swaps the hemispheres of $S^2$).
:::

:::example
$f(z)=i\,\frac{1-z}{1+z}$ maps the unit disk $D=\{|z|<1\}$ to the upper half plane $H=\{\operatorname{Im}z>0\}$ by an analytic diffeomorphism, and maps $S^1\to\RR\cup\infty$.

![The map f sends the lower hemisphere D of the Riemann sphere to the hemisphere H, with -1 to infinity, 1 to 0, i to 1 and 0 to i](/notes/math-55b/figures/a8-disk-to-half-plane.svg)

Why: for $z\in S^1$, the vectors $1+z$ (from $-1$ to $z$) and $1-z$ (from $z$ to $1$) meet at a right angle, and

$$\arg\left(\frac{1-z}{1+z}\right)\in\left(-\frac\pi2,\frac\pi2\right)\iff z\in D.$$

![The vectors 1+z and 1-z for z on the unit circle, meeting at a right angle](/notes/math-55b/figures/a8-thales.svg)
:::

The analytic isomorphism $D\simeq H$ is important and useful in various areas of geometry.

One way to understand the relation between $z\mapsto\frac{az+b}{cz+d}$ and $\begin{pmatrix}a&b\\ c&d\end{pmatrix}$ is to note that

$$\CC\PP^1=(\CC^2-0)\big/(z_1,z_2)\sim(\lambda z_1,\lambda z_2)\ \ \forall\lambda\in\CC^*\ \xrightarrow{\ \sim\ }\ S,$$

the set of 1-dimensional $\CC$-subspaces of $\CC^2$, via

$$\begin{aligned}[z_1,z_2]&\mapsto z_1/z_2,\\ \text{with inverse}\quad z\in\CC&\mapsto[z,1],\\ \infty&\mapsto[1,0],\end{aligned}$$

and $\begin{pmatrix}a&b\\ c&d\end{pmatrix}$ maps $[z,1]\mapsto[az+b,cz+d]$.

- Since $\lambda\cdot\mathrm{Id}$ acts by $\mathrm{Id}$, we find $\Aut(S)\simeq PGL(2,\CC)\simeq SL(2,\CC)/\pm I$.
- $\Aut(S)$ acts simply transitively on triples of distinct points in $S$: for all distinct $a_1,a_2,a_3\in S$ and all distinct $b_1,b_2,b_3\in S$, there is a unique $f\in\Aut(S)$ such that $f(a_i)=b_i$.

### Power series

The main class of examples: **power series**

$$f(z)=\sum_{n=0}^\infty a_nz^n\quad(\text{centered at }z=0)\qquad\left(\text{or }\sum_{n=0}^\infty a_n(z-z_0)^n\text{ centered at }z_0\right).$$

Recall the **radius of convergence** $R\in[0,\infty]$, defined by

$$\frac1R=\limsup|a_n|^{1/n}.$$

- For $|z|<R$, the series converges (absolutely: $\sum|a_n||z|^n$ converges) by the root test: $\limsup\left(|a_nz^n|^{1/n}\right)=\frac{|z|}{R}<1$, so we can compare with a geometric series.
- For $|z|>R$ the series diverges; for $|z|=R$ it depends …
- Convergence is uniform over smaller discs $\ol{D}_r=\{|z|\le r\}$ for all $r<R$. This is by the Weierstrass M-test: $\sup_{z\in\ol D_r}|a_nz^n|=|a_n|r^n$, and $\sum|a_n|r^n$ converges ($r<R$), so $\sum a_nz^n$ converges uniformly on $\ol D_r$.

  (This is because of the uniform Cauchy criterion for the partial sums $s_n=\sum_{k=0}^n a_kz^k$: for $n>m\ge N$,
  $$\sup_{z\in\ol D_r}|s_n(z)-s_m(z)|=\sup_{\ol D_r}\left|\sum_{m+1}^na_kz^k\right|\le\sum_{m+1}^n|a_k|r^k\le\sum_{N+1}^\infty|a_k|r^k\xrightarrow[N\to\infty]{}0.)$$
- Hence $f(z)=\sum_{n=0}^\infty a_nz^n$ is continuous over $D_R=\{|z|<R\}$.
- The series $g(z)=\sum_{n=0}^\infty na_nz^{n-1}$ has the same radius of convergence as $f$; the partial sums $s_n(z)$ are analytic, and $s_n\to f$, $s_n'\to g$ uniformly on $\ol D_r$ for all $r<R$.

:::theorem
$f(z)=\sum_{n=0}^\infty a_nz^n$ is analytic on $D_R$ and $f'(z)=g(z)=\sum_{n=0}^\infty na_nz^{n-1}$.
:::

:::proof
We work on the smaller disk $D_r$ ($r<R$) where uniform convergence holds; $D_R=\bigcup_{r<R}D_r$. We’ve already seen that, for real functions of 1 real variable, if $s_n\to f$ and $s_n'\to g$ uniformly, then $f'=g$. Unfortunately the proof used the mean value theorem, which doesn’t hold here. But for power series there’s an easier proof using mean value inequalities, thanks to … bounds on $s_n''$, which also converges uniformly on $\ol D_r$; hence there is a uniform bound $|s_n''(z)|\le M$ for all $n\in\NN$ and $z\in\ol D_r$.

So: for $z,z+h\in D_r$, mean value inequalities (for $s_n'(z+th)$, $t\in[0,1]$) give first $|s_n'(z+th)-s_n'(z)|\le Mt|h|$, and so

$$\left|s_n(z+h)-s_n(z)-s_n'(z)h\right|\le\tfrac12M|h|^2.$$

Taking the limit as $n\to\infty$ we get $|f(z+h)-f(z)-g(z)h|\le\frac12M|h|^2$, so $f'(z)=g(z)$.
:::

:::example
$$\sum_{n=0}^\infty z^n=\frac1{1-z}$$

has $R=1$. For $|z|=1$ the series is always divergent (the terms don’t $\to0$), but the right-hand side makes sense as soon as $z\neq1$.

There are in fact expressions as power series over any disc not containing the pole $z=1$. E.g., around $z_0=-1$:

$$\frac1{1-z}=\frac1{2-(z+1)}=\sum_{n=0}^\infty\frac{(z+1)^n}{2^{n+1}},\qquad R=2;$$

around $z_0=2$:

$$\frac1{1-z}=\frac{-1}{1+(z-2)}=\sum_{n=0}^\infty(-1)^{n+1}(z-2)^n,\qquad R=1;$$

…

![Discs of convergence around -1 (radius 2) and around 2 (radius 1), each reaching the pole at 1](/notes/math-55b/figures/a8-continuation-discs.svg)
:::

Starting from $\sum z^n$, this process of extending past the disc of convergence is called **analytic continuation**; here it yields a rational function defined on $\CC-\{1\}$. Similarly for all rational functions (on $\CC-\{\text{poles}\}$)! (E.g. use partial fractions + the case of $\frac1{(z-a)^k}$.) (But some power series have more serious divergences on $\partial D_R$ and can’t be continued.)

### The exponential

:::definition
$$\exp(z)=\sum_{n=0}^\infty\frac{z^n}{n!},$$

with $R=\infty$: it converges for all $z\in\CC$.
:::

By algebraic manipulations, $\exp(z+w)=\exp(z)\exp(w)$. In particular $e^{-z}=\frac1{e^z}$, and $e^z\neq0$ for all $z\in\CC$. For $x,y\in\RR$, $e^{x+iy}=e^xe^{iy}$ has $|\cdot|=e^x$ and $\arg=y$.

- Define
  $$\cos(z)=\frac{e^{iz}+e^{-iz}}{2}=1-\frac{z^2}{2!}+\frac{z^4}{4!}-\cdots,\qquad\sin(z)=\frac{e^{iz}-e^{-iz}}{2i},\quad\dots$$
  and the usual properties follow (watch out if $z\notin\RR$! $\cos(iy)=\cosh(y)$ …).
- $\exp'(z)=\exp(z)\neq0$, so $\exp$ is a local diffeomorphism near each point! Globally, $\exp\colon\CC\to\CC^*$ is the universal covering map!

:::outline Notes not reached in this lecture, covered at the start of [Lecture 29](/notes/math-55b/29-cauchy-s-theorem-and-the-integral-formula)
**Logarithms and powers**

What about the logarithm? For $w\in\CC^*$, we want to define $\log(w)=z$ such that $e^z=w$. Such a $z$ exists, but isn’t unique: we can add integer multiples of $2\pi i$. $\operatorname{Re}\log(w)$ is well defined though, and equal to $\log|w|$ (for the usual $\log$ on $\RR_+$).

In general “$\log(w)=\log|w|+i\arg(w)$“ is not well defined and continuous on $\CC^*$; but it’s OK over simply connected subsets of $\CC^*$ (we can’t go around $0$, so $\arg$ is well defined). This is consistent with what we’ve seen about the lifting problem for

![Lifting the inclusion of U into C-star through exp](/notes/math-55b/figures/a8-log-lift.svg)

The same issue comes up with defining $z^a$ for $a\notin\ZZ$: we would like to define it as $z^a=\exp(a\log z)$, but this only works on suitable domains. E.g. $\sqrt z$ is multivalued ($\pm\sqrt z$) and we can’t define a continuous function on a domain that encloses the origin.

There are still power series expressions away from the origin. E.g.:

$$\log(1+z)=z-\frac{z^2}2+\frac{z^3}3-\cdots,\qquad\sqrt{1+z}=1+\frac z2-\frac{z^2}8+\cdots\qquad(R=1).$$

**Path integrals**

Next we consider **path integrals** of **complex 1-forms** $\omega=f(z)\,dz$: given a continuous function $f\colon U\to\CC$ and a (piecewise) differentiable path $\gamma\colon[0,1]\to U$,

$$\int_\gamma f(z)\,dz=\int_0^1f(\gamma(t))\,\gamma'(t)\,dt$$

(or: pick points $z_i=\gamma(t_i)$ along the path, with $\diam\gamma([t_i,t_{i+1}])<\eps$; then $\int=\lim_{\eps\to0}\sum_if(z_i)(z_{i+1}-z_i)$).

:::example
For a path $\gamma$ from $a$ to $b$:

$$\int_\gamma z^n\,dz=\int_0^1\gamma(t)^n\gamma'(t)\,dt=\frac1{n+1}\left(b^{n+1}-a^{n+1}\right).$$
:::

For a power series $f(z)=\sum a_nz^n$, if $\gamma$ is entirely contained in the disc of convergence, it follows that

$$\int_\gamma f(z)\,dz=F(b)-F(a),\qquad\text{where }F(z)=\sum\frac{a_n}{n+1}z^{n+1}:$$

indeed $F'=f$, and so the equality follows from the fundamental theorem of calculus.

In general, a 1-form on $\RR^2$ need not be exact, and path integrals need not be path-independent.

Miracle / key result:

:::theorem Cauchy’s theorem
Let $D\subset\CC$ be a bounded region with piecewise smooth boundary, and $f(z)$ analytic on $U$ open $\supset\ol D$. Then

$$\int_{\partial D}f(z)\,dz=0.$$
:::
:::
