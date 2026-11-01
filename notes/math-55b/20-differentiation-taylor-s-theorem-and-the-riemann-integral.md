---
course: math-55b
chapter: 5
section: 20
title: Differentiation, Taylor’s Theorem and the Riemann Integral
date: 2026-03-13
lecturer: Denis Auroux
source-pages: 1-4
---

<!-- REPEAT-BEGIN: from here to REPEAT-END repeats the end of Lecture 19 (L19 pages 3-4), with one added sentence on analytic functions at the end. It is transcribed in both sections; drop one copy if the site should not repeat it. -->

## Differentiation in one variable

(Rudin Chapter 5 $=$ McMullen §5.)

:::definition
$f:[a,b]\to\RR$ is **differentiable** at $x$ if
$$
\lim_{t\to x}\frac{f(t)-f(x)}{t-x}=:f'(x)\text{ exists},
$$
i.e. $\forall\eps\ \exists\delta$ such that $0<|t-x|<\delta\Rightarrow\left|\frac{f(t)-f(x)}{t-x}-f'(x)\right|<\eps$.
:::

:::proposition
$f$ differentiable at $x\Rightarrow f$ continuous at $x$. (The converse is false, e.g. $|x|$ at $0$.)
:::

:::proof
$$
f(t)-f(x)=\frac{f(t)-f(x)}{t-x}\cdot(t-x),
$$
where the first factor $\to f'(x)$ as $t\to x$ and the second $\to0$ as $t\to x$; since multiplication is continuous, $f(t)-f(x)\to f'(x)\cdot0=0$.
:::

The usual rules of calculation hold: derivatives of $f+g$, $fg$, …; the **chain rule** $(f\circ g)'(x)=f'(g(x))\cdot g'(x)$ (see Rudin p. 104–105).

:::example
- $f(x)=x\sin\frac1x$ ($x\ne0$), $f(0)=0$. For $x\neq0$, $f'(x)=\sin\left(\frac1x\right)-\frac1x\cos\left(\frac1x\right)$. $f$ is continuous but not differentiable at $0$ ($\nexists\lim_{x\to0}\frac{f(x)}x$).

![Graph of x sin(1/x) oscillating between the lines y = x and y = -x](/notes/math-55b/figures/a6-x-sin-inv-x.svg)

- $g(x)=x^2\sin\frac1x$, $g(0)=0$: $g$ is differentiable ($g'(0)=0$) but $g'$ is not continuous at $0$.

![Graph of x^2 sin(1/x) oscillating between the parabolas y = x^2 and y = -x^2](/notes/math-55b/figures/a6-x2-sin-inv-x.svg)

- $\displaystyle f(x)=\sum_{n=1}^\infty\frac1{n^2}\sin(n!\,x)$ is continuous (the series converges uniformly, since $\sum\frac1{n^2}$ converges) and nowhere differentiable! (See also Rudin 7.18 for a related example.)
:::

:::theorem Mean value theorem
$f:[a,b]\to\RR$ differentiable $\Rightarrow\exists c\in(a,b)$ such that $f(b)-f(a)=f'(c)\,(b-a)$.
:::

This follows logically from easier results:

1. If $f:[a,b]\to\RR$ has a local max (or min) at $x\in(a,b)$ (i.e. a max of $f|_{(x-\delta,x+\delta)}$) and $f$ is differentiable at $x$, then $f'(x)=0$. (Because $\frac{f(t)-f(x)}{t-x}$ is $\ge0$ for $t\in(x-\delta,x)$ and $\le0$ for $t\in(x,x+\delta)$: take the limit as $t\to x$ from the left and from the right.)
2. If $f:[a,b]\to\RR$ is differentiable and $f(a)=f(b)$, then $\exists c\in(a,b)$ such that $f'(c)=0$. This is clear if $f$ is constant; otherwise look at the max or min of $f$ over $[a,b]$ and apply (1).
3. The mean value theorem: apply (2) to $g(x)=f(x)-\frac{f(b)-f(a)}{b-a}\,x$.

:::corollary Mean value inequality
If $m\le f'(x)\le M$ for all $x\in(a,b)$, then $m(b-a)\le f(b)-f(a)\le M(b-a)$.
:::

Generalization:

:::theorem Taylor’s theorem
Let $f:[a,b]\to\RR$ be $n$ times differentiable. The degree $(n-1)$ **Taylor polynomial** of $f$ at $a$ is
$$
P(x)=\sum_{k=0}^{n-1}\frac{f^{(k)}(a)}{k!}(x-a)^k.
$$
Then $\exists c\in(a,b)$ such that
$$
f(b)=P(b)+\frac{f^{(n)}(c)}{n!}(b-a)^n.
$$
:::

:::proof
- Subtracting $P(x)$ from both sides, we can reduce to the case $f(a)=f'(a)=\dots=f^{(n-1)}(a)=0$ (and $P=0$).
- Let $g(x)=f(x)-f(b)\dfrac{(x-a)^n}{(b-a)^n}$. Then $g(b)=g(a)=0$, and we still have $g'(a)=\dots=g^{(n-1)}(a)=0$.
- Now: the mean value theorem for $g$: $g(a)=g(b)=0\Rightarrow\exists x_1\in(a,b)$ such that $g'(x_1)=0$. The mean value theorem for $g'$: $g'(a)=g'(x_1)=0\Rightarrow\exists x_2\in(a,x_1)$ such that $g''(x_2)=0$. And so on until $\exists c=x_n\in(a,x_{n-1})$ such that $g^{(n)}(c)=0$, i.e.
$$
f^{(n)}(c)-\frac{n!\,f(b)}{(b-a)^n}=0.
$$
:::

:::remark
- We can compare $f(x)$ to $P(x)$ by applying the theorem to $[a,x]$ instead!
- As with the mean value inequality: a bound $|f^{(n)}|\le M$ gives a bound $|f(x)-P(x)|\le\dfrac{M(x-a)^n}{n!}$ over $[a,b]$.
:::

:::remark
There exist nonzero functions whose Taylor polynomials are all zero! E.g. $f(x)=\exp\left(-\frac1{x^2}\right)$, $f(0)=0$: $f\in C^\infty$ (all derivatives exist) and $f^{(k)}(0)=0$ for all $k$, so the Taylor polynomials are all zero! The Taylor series of $f$ at $0$ converges, but $\neq f$! (In other examples, it can also have $R=0$, i.e. never be convergent for $x\neq a$.)

Most $C^\infty$ functions aren’t **analytic**, i.e. can’t be written as power series.
:::

<!-- REPEAT-END -->

## Spaces of $C^k$ functions

Let
$$
C^k([a,b],\RR)=\{k\text{-times differentiable functions with }f^{(k)}\text{ continuous}\},\qquad\text{with}\quad\|f\|_{C^k}=\sum_{j=0}^k\|f^{(j)}\|_\infty.
$$

:::theorem
If $f_n\in C^1$, $f_n\to f$ pointwise, and $f_n'\to g$ uniformly, then $f\in C^1$ and $f'=g$ (and $f_n\to f$ uniformly).
:::

:::proof
Fix $x\neq y\in[a,b]$. The mean value theorem gives
$$
(\ast)\qquad\frac{f_n(y)-f_n(x)}{y-x}=f_n'(c_n)\quad\text{for some }c_n\in[x,y]\text{ or }[y,x].
$$
The left-hand side $\to\dfrac{f(y)-f(x)}{y-x}$ as $n\to\infty$.

For the right-hand side: $(c_n)$ has a subsequence $(c_{n_k})$ converging to some $c\in[x,y]$. Since $f_n'$ is continuous, the uniform limit $g$ is continuous; we claim $f_{n_k}'(c_{n_k})\to g(c)$. Indeed: fix $\eps>0$, let $\delta$ be such that $|t-c|<\delta\Rightarrow|g(t)-g(c)|<\frac\eps2$, and let $N$ be such that $n\ge N\Rightarrow\sup|f_n'-g|<\frac\eps2$ and $n_k\ge N\Rightarrow|c_{n_k}-c|<\delta$. Then for $n_k\ge N$,
$$
|f_{n_k}'(c_{n_k})-g(c)|\le|f_{n_k}'(c_{n_k})-g(c_{n_k})|+|g(c_{n_k})-g(c)|<\eps.
$$
Hence, returning to $(\ast)$ and taking the limit as $n\to\infty$: $\exists c\in[x,y]$ such that
$$
\frac{f(y)-f(x)}{y-x}=g(c).
$$
We now take the limit as $y\to x$: the right-hand side $\to g(x)$, using continuity of $g$ and the fact that $|c-x|\le|y-x|$ (check this!). Hence $f$ is differentiable at $x$ and $f'(x)=g(x)$ (and since $g$ is continuous, $f\in C^1$).

Finally, the mean value inequality gives
$$
|f_n(x)-f(x)|\le\underbrace{|f_n(a)-f(a)|}_{\to0}+\underbrace{|x-a|}_{\le(b-a)}\ \underbrace{\sup|f_n'-f'|}_{\to0\text{ since }f_n'\to g\text{ uniformly}},
$$
a uniform bound, so $\sup|f_n-f|\to0$.
:::

:::corollary
$C^k([a,b],\RR)$ is a complete metric space.
:::

:::proof
Using completeness of $C^0$ (uniform topology): if $(f_n)$ is Cauchy in $C^1$, then $f_n$ and $f_n'$ are Cauchy in $C^0$, so there exist uniform limits $f,g\in C^0$, and by the theorem $f\in C^1$ and $f'=g$. Now $f_n\to f$ and $f_n'\to f'$ uniformly, so $f_n\to f$ in $C^1$. This proves the case $k=1$. Repeat the same argument for successive derivatives for $k>1$.
:::

:::corollary
If $f(x)=\sum a_nx^n$ is a power series with radius of convergence $R$, then $f(x)$ is $C^\infty$ over $(-R,R)$, and $f'(x)=\sum na_nx^{n-1}$.
:::

:::proof
$f=\sum a_nx^n$ and $g=\sum na_nx^{n-1}$ have the same radius of convergence, so the partial sums for both converge uniformly over compact subsets of $(-R,R)$; hence $f\in C^1$ and $f'=g$. Repeat for successive derivatives ($g\in C^1$, so $f\in C^2$, …).
:::

<!-- REPEAT-BEGIN: from here to REPEAT-END, the professor's notes repeat this material at the start of Lecture 21 (L21 pages 1-2, with two small corrections). It is transcribed in both sections; drop one copy if the site should not repeat it. -->

## Integration

(The Riemann integral; see Math 114 for the Lebesgue integral and much more.)

:::outline Notes not reached in this lecture, covered at the start of [Lecture 21](/notes/math-55b/21-the-riemann-integral-and-the-arzel-ascoli-theorem)
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

Let $s,S$ be the step functions taking the values $s_i,S_i$ on $[x_i,x_{i+1})$. Then $s\le f\le S$ on $[a,b]$, so $I(s)\le I_-(f)$ and $I(S)\ge I_+(f)$; moreover, $S_i-s_i<\eps$ for all $i$, so $I(S)-I(s)<\eps(b-a)$. Hence
$$
I_+(f)-I_-(f)<\eps(b-a)\quad\forall\eps>0\ \Rightarrow\ I_+(f)=I_-(f),\quad f\in\mathcal R([a,b]).
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

<!-- REPEAT-END -->
:::
