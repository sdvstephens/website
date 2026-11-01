---
course: math-55b
chapter: 5
section: 19
title: Sequences, Series and Power Series
date: 2026-03-11
lecturer: Denis Auroux
source-pages: 1-4
---

## Real analysis!

References: Rudin, *Principles of Mathematical Analysis* (Chapter 4 on continuity as review; Chapter 3 on sequences and series in $\RR^d$; the beginnings of Chapters 7 and 8 on sequences and series of functions and power series; then the start of Chapter 5 on differentiation), and McMullen’s Math 55b notes (Section 3 as review, then Section 4 and the start of Section 5).

The basic object of real analysis is functions $f:\RR\to\RR$ (or defined on a subset of $\RR$, the **domain** of $f$), together with

- their continuity, differentiability, integrals, …
- sequences and series of functions.

## Review: real functions

- **Continuity** at $x$: $\big(\forall\eps>0\ \exists\delta$ such that $\forall y,\ |x-y|<\delta\Rightarrow|f(x)-f(y)|<\eps\big)\iff \lim_{t\to x}f(t)=f(x)$.

  More general limits: $\lim_{x\to\infty}f(x)$, $\lim_{t\to x,\,t<x}f(t)$, …; infinite limits and limits at infinity can be understood as taking place in the compactification $\RR\cup\{\pm\infty\}$, or explicitly, e.g. $\lim_{x\to0,\,x>0}f(x)=\infty$ means $\forall M>0\ \exists\delta$ such that $\forall x,\ 0<x<\delta\Rightarrow f(x)>M$.

- Things we’ve already seen, using compactness and connectedness of $[a,b]\subset\RR$:
  - continuous functions $f:[a,b]\to\RR$ are **uniformly continuous** (the same $\delta$ works at all $x$). Continuity is $(\forall\eps\ \forall x\ \exists\delta\ /\ \forall y,\ |x-y|<\delta\Rightarrow|f(x)-f(y)|<\eps)$; uniform continuity is $(\forall\eps\ \exists\delta\ /\ \forall x,y,\ |x-y|<\delta\Rightarrow|f(x)-f(y)|<\eps)$.
  - **intermediate value theorem**: $f([a,b])$ is connected, so it contains all reals between $f(a)$ and $f(b)$.
  - **extreme value theorem**: $f([a,b])$ is compact, so it is bounded and contains its inf and sup.

- Two topologies on **spaces of functions** so far (here $\RR\to\RR$, but similarly for $\RR^n\to\RR^m$):
  - $f_n\to f$ **pointwise** if $\forall x$, $f_n(x)\to f(x)$ in $\RR$ ($=$ product topology);
  - $f_n\to f$ **uniformly** if $\|f_n-f\|_\infty:=\sup_x|f_n(x)-f(x)|\to0$ ($=$ uniform topology).

  We’ve seen: if the $f_n$ are continuous and $f_n\to f$ uniformly, then $f$ is continuous (Lecture 4). Also, spaces of functions $\RR\to\RR$, $[a,b]\to\RR$ ($\RR^n\to\RR^m$) with the uniform topology are **complete** metric spaces, and $C^0$ (continuous functions) is a closed subspace, hence complete as well (but… unless we restrict to bounded functions, $\sup|f-g|$ isn’t quite a metric).

  Analysis considers many different spaces of functions (bounded, integrable, continuous, differentiable) and topologies (often but not always metrics) on them.

- Beyond polynomials and a few other explicit examples, many functions are defined using limits of sequences or series. A key example (also for complex analysis!):

:::definition
**Power series** are expressions of the form
$$
f(x)=\sum_{n=0}^\infty a_nx^n
$$
for some coefficients $a_n\in\RR$.
:::

(Writing this expression doesn’t in itself guarantee the series converges for any $x\neq0$!) We’ll want to understand convergence (pointwise, uniformly over certain subsets of $\RR$, …), so basic facts about real sequences and series in $\RR$ come in handy.

## More review: sequences and series in $\RR$

- $\RR$ is complete, so a sequence in $\RR$ converges iff it is Cauchy.
- Compactness of $[-M,M]$ implies every bounded sequence in $\RR$ has convergent subsequences.
- A monotonic sequence (e.g. $a_n\le a_{n+1}$) converges iff it is bounded (and then $\lim_{n\to\infty}a_n=\sup\{a_n\}$).
- We sometimes write $a_n\to+\infty$ or $-\infty$; this can be interpreted as convergence in the compactification $\RR\cup\{\pm\infty\}$. Such a sequence is still said to diverge.
- If $(a_n)$ is bounded then $M_n=\sup\{a_k,\ k\ge n\}$ is decreasing, and
$$
\limsup a_n:=\lim M_n=\text{largest limit of a convergent subsequence of }(a_n).
$$
Similarly $\liminf$.

:::example
$a_n=\sin(\sqrt n\,\pi)$ and $a_n=(-1)^n\left(1+\frac1n\right)$ both have $\limsup=1$, $\liminf=-1$.
:::

Recall a **series** $\sum a_n$ converges iff its **partial sums** $s_n=\sum_{k=0}^na_k$ form a convergent sequence, and then we write $\sum_{n=0}^\infty a_n$ for the limit.

- If $\sum a_n$ converges then $a_n\to0$ (by the Cauchy criterion for $(s_n)$: $|s_n-s_{n-1}|\to0$), but not vice versa ($\sum\frac1n$ diverges even though $\frac1n\to0$).
- For $a_n\ge0$, $\sum a_n$ converges iff the partial sums are bounded (since $s_n$ is increasing).
- Hence (**comparison criterion**): if $0\le a_n\le b_n$, then
$$
\sum b_n\text{ convergent}\Rightarrow\sum a_n\text{ convergent},\qquad \sum a_n\text{ divergent}\Rightarrow\sum b_n\text{ divergent}.
$$
- The **geometric series**: $\displaystyle\sum_{n=0}^\infty x^n=\frac1{1-x}$ if $|x|<1$ (it does not converge if $|x|\ge1$; in fact the terms $\not\to0$!).
- $\displaystyle\sum_{n=1}^\infty\frac1{n^\alpha}$ converges iff $\alpha>1$. The proof is a variant of the comparison argument: the block $2^k<n\le2^{k+1}$ has $2^k$ terms, each between $\frac1{(2^{k+1})^\alpha}$ and $\frac1{(2^k)^\alpha}$, so
$$
\frac{2^k}{(2^{k+1})^\alpha}\le\sum_{n=2^k+1}^{2^{k+1}}\frac1{n^\alpha}\le\frac{2^k}{(2^k)^\alpha},
\qquad\text{so}\qquad
2^{-\alpha}\sum_{k=0}^m2^{(1-\alpha)k}\le\sum_{n=2}^{2^{m+1}}\frac1{n^\alpha}\le\sum_{k=0}^m2^{(1-\alpha)k},
$$
a geometric series! Hence the partial sums are bounded iff $2^{1-\alpha}<1$. (My margin note beside that inequality: “where tf did this come from”.)
- $\displaystyle e=\lim_{n\to\infty}\left(1+\frac1n\right)^n=\sum_{k=0}^\infty\frac1{k!}$. (The equality comes from applying the binomial theorem to $\left(1+\frac1n\right)^n$ and showing that for fixed $k$, $\binom nk\left(\frac1n\right)^k$ increases with $n$ and $\to\frac1{k!}$ as $n\to\infty$.)

  $e$ is irrational: denoting the partial sum $\sum_{k=0}^n\frac1{k!}=\frac{p_n}{n!}$, we have $e-\frac{p_n}{n!}\in\left(0,\frac1{n!}\right)$, so $e$ isn’t an integer multiple of $\frac1{n!}$ for any $n$, so it is not rational.

:::definition
A series is **absolutely convergent** if $\sum|a_n|$ converges.
:::

If $\sum|a_n|$ converges then $\sum a_n$ converges (using Cauchy: $|s_n-s_m|=\left|\sum_{m+1}^na_k\right|\le\sum_{m+1}^n|a_k|$), but not vice versa, e.g. **alternating series**: if
$$
\begin{cases}a_n\text{ has the same sign as }(-1)^n,\\ |a_n|\text{ decreasing with }n,\\ a_n\to0,\end{cases}
$$
then $\sum a_n$ converges! (Proof: the odd and even partial sums increase and decrease towards a common limit.)

:::example
$$
1-\frac12+\frac13-\frac14+\frac15-\dots=\log2,\qquad 1-\frac13+\frac15-\frac17+\frac19-\dots=\arctan(1)=\frac\pi4.
$$
:::

Absolutely convergent series can be safely rearranged ($\sum a_{\varphi(n)}=\sum a_n$), multiplied, etc.; others, not always.

:::theorem Root test
If $\limsup|a_n|^{1/n}<1$ then $\sum a_n$ converges (absolutely) (comparison with a geometric series). If $\limsup|a_n|^{1/n}>1$ then it diverges ($a_n\not\to0$).
:::

This is used to great effect for power series!

## Power series

:::definition
The **radius of convergence** of $\sum a_nx^n$ is
$$
R=\frac1{\limsup\left(|a_n|^{1/n}\right)}\in[0,\infty].
$$
:::

:::theorem
- $\sum a_nx^n$ converges pointwise for all $x\in\CC$ such that $|x|<R$;
- the convergence is uniform on $\ol{B_r(0)}=\{x\ /\ |x|\le r\}$ for all $r<R$ (but not necessarily on $B_R(0)$);
- thus $f(x)=\sum a_nx^n$ is continuous over $B_R(0)=\{|x|<R\}$;
- the series diverges whenever $|x|>R$; at $|x|=R$ it may converge or diverge.
:::

:::proof
- Root test: $\limsup|a_nx^n|^{1/n}=|x|\limsup|a_n|^{1/n}=\frac{|x|}R$, so the series converges for $|x|<R$ and diverges for $|x|>R$.
- Uniform convergence: if $|x|\le r$ then
$$
\left|f(x)-\sum_0^na_kx^k\right|=\left|\sum_{n+1}^\infty a_kx^k\right|\le\underbrace{\sum_{n+1}^\infty|a_k|r^k}_{\eps_n}.
$$
The series $\sum|a_n|r^n$ converges by the root test, so $\eps_n\to0$, and
$$
\sup\left\{\left|f(x)-\sum_0^na_kx^k\right|,\ |x|\le r\right\}\le\eps_n\to0,
$$
which is uniform convergence.
- The partial sums are continuous, so $f$ is continuous on $\{|x|\le r\}$ by uniform convergence, hence continuous on $\bigcup_{r<R}\ol{B_r}=B_R(0)$.
:::

:::example
- $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{x^n}n=\log(1+x)$ for $|x|<1$ ($n^{1/n}\to1$, so $R=1$). It converges at $x=1$ (alternating series) and diverges at $-1$.
- $\displaystyle\sum_{n=0}^\infty\frac{x^n}{n!}=\exp(x)$ converges everywhere (uniformly over bounded subsets). ($R=\infty$: indeed $n!>\left(\frac n2\right)^{n/2}$, so $(n!)^{1/n}>\left(\frac n2\right)^{1/2}\to\infty$.)
:::

Power series form a ring (we can add and multiply them); facts about sums and products of numerical series imply that, where convergent, the sum/product as series is indeed equal to the sum/product as functions.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 20](/notes/math-55b/20-differentiation-taylor-s-theorem-and-the-riemann-integral)
<!-- REPEAT-BEGIN: from here to REPEAT-END, the professor's notes repeat this material verbatim at the start of Lecture 20 (L20 pages 1-2, which add one sentence about analytic functions). It is transcribed in both sections; drop one copy if the site should not repeat it. -->

**Differentiation in one variable**

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
:::

<!-- REPEAT-END -->
:::
