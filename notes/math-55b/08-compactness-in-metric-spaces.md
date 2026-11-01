---
course: math-55b
chapter: 2
section: 8
title: Compactness in Metric Spaces
date: 2026-02-11
lecturer: Denis Auroux
source-pages: 1-4
---

Last time we saw a number of foundational results about compactness. In metric spaces, compactness implies *uniform* estimates.

:::lemma Lebesgue number lemma
Let $(X,d)$ be a compact metric space and $(U_i)_{i\in I}$ an open cover of $X$. Then there is $\delta>0$ such that any subset of diameter $<\delta$ is entirely contained in a single open $U_i$.
:::

This uses the notion of distance to a subset: recall that given $x\in X$, $A\subset X$, we define

$$d(x,A) = \inf\{d(x,a) \mid a\in A\}.$$

Since $a\mapsto d(x,a)$ is continuous, when $A$ is compact the inf is achieved, by the extreme value theorem. Moreover, $x\mapsto d(x,A)$ is continuous (the triangle inequality gives $|d(x,A) - d(y,A)|\le d(x,y)$).

:::proof Proof of the Lebesgue number lemma
By compactness, we can assume $(U_i)$ is a finite cover $= U_1\cup\dots\cup U_n$. The function

$$f(x) = \frac1n\sum_{i=1}^n d(x, X - U_i)$$

is continuous (check: distance to a subset is a continuous function of $x$, as above), so it achieves its min, which is therefore $>0$ (for every $x\in X$ there is $i$ such that $x\in U_i$, and then $d(x, X - U_i)>0$, as $X - U_i$ is a closed set, hence compact). Hence there is $\delta>0$ such that $f(x)\ge\delta$ for all $x\in X$. Thus for every $x\in X$ there is $U_i$ such that $d(x, X - U_i)\ge\delta$, i.e. $B_\delta(x)\subset U_i$. Since a subset of diameter $<\delta$ is contained in a ball of radius $\delta$, the result follows.
:::

This is the magic of compactness!

Noncompact counterexamples (where there is no Lebesgue number):

- $\RR = \bigcup$ intervals with overlaps of lengths $\to 0$, e.g. $\bigcup_{n\in\ZZ}(n, n+1+\eps_n)$ with $\eps_n\to 0$.

- $\RR^2 = U_1\cup U_2$, with $U_1$ containing the hyperbola $xy = 1$, $U_2$ containing the $x$-axis, and the distance between the two curves $\to 0$:

![The plane covered by an open set around the hyperbola xy = 1 and an open set around the x-axis](/notes/math-55b/figures/a2-lebesgue-counterexample.svg)

## Uniform continuity

This only makes sense for metric spaces! There is no notion of uniform size of neighborhood without a metric.

:::definition
$f\colon (X,d_X)\to(Y,d_Y)$ is **uniformly continuous** if for all $\eps>0$ there is $\delta>0$ such that for all $p,q\in X$, $d_X(p,q)<\delta\Rightarrow d_Y(f(p),f(q))<\eps$.
:::

(Compare with continuity: the *same* $\delta$ must work for every $p$!)

:::theorem
If $X$ and $Y$ are metric spaces, $f\colon X\to Y$ is continuous, and $X$ is compact, then $f$ is uniformly continuous.
:::

:::proof
Take $\eps>0$, and consider the open cover of $Y$ by balls of radius $\frac\eps2$ (so if $f(p), f(q)$ land in the same ball, they’re less than $\eps$ apart). Then $X = \bigcup_{y\in Y} f^{-1}(B_{\eps/2}(y))$ is an open cover, so by the Lebesgue number lemma there is $\delta>0$ such that if $d_X(p,q)<\delta$ then $p$ and $q$ lie in the same element of the cover, hence $d_Y(f(p),f(q))<\eps$.
:::

## Alternative notions of compactness

:::definition
- $X$ is **compact** if every open cover $(U_i)_{i\in I}$ of $X$ has a finite subcover.
- $X$ is **limit point compact** if every infinite subset of $X$ has a limit point.
- $X$ is **sequentially compact** if every sequence $\{p_n\}$ in $X$ has a convergent subsequence.
:::

:::example
In $\RR$, $\{\frac1n,\ n\ge 1\}\cup\ZZ_+$ has a limit point ($0$), and the sequence $1, 2, \frac12, 3, \frac13, 4, \frac14, \dots$ has a convergent subsequence ($\frac12, \frac13, \frac14,\dots$).

*But* $\ZZ\subset\RR$ has no limit point and the sequence $1,2,3,\dots$ doesn’t have a convergent subsequence, so $\RR$ is neither limit point compact nor sequentially compact.
:::

:::theorem
$X$ is compact $\Rightarrow$ $X$ is limit point compact.
:::

:::proof
Assume $X$ is not limit point compact, i.e. there is an infinite $A\subset X$ with no limit point. Since $A$ contains all of its limit points (there are none), $A$ is closed in $X$, hence compact. However, for all $a\in A$, $a$ isn’t a limit point, so there is a neighborhood $U_a\ni a$ such that $U_a\cap A = \{a\}$. $(U_a)_{a\in A}$ is now an infinite open cover of $A$, without any finite subcover, since each $a\in A$ only belongs to $U_a$ and not to any other element of the cover. Contradiction.
:::

:::theorem
$X$ sequentially compact $\Rightarrow$ $X$ limit point compact.
:::

:::proof
Given an infinite subset $A\subset X$, pick a sequence of distinct points of $A$ and take a convergent subsequence: this gives a sequence $\{a_n\}$ in $A$, $a_n\neq a_m$ for all $n\neq m$, converging to some limit $a\in X$. Then every neighborhood of $a$ contains $a_n$ for all large $n$, hence infinitely many points of $A$, including some $\neq a$. So $a$ is a limit point of $A$.
:::

The converse implications don’t hold in general, but in metric spaces the 3 notions agree:

:::theorem
For a metric space $(X,d)$: $X$ compact $\iff$ $X$ limit point compact $\iff$ $X$ sequentially compact.
:::

:::proof
- **Compact $\Rightarrow$ limit point compact:** already done (for all topological spaces).
- **Limit point compact $\Rightarrow$ sequentially compact:** suppose $X$ is a metric space and limit point compact, and consider a sequence $x_1, x_2, \dots$ in $X$. If $\{x_1, x_2,\dots\}$ is finite, then there is $x\in X$ such that $x_n = x$ for infinitely many $n$, which gives a subsequence that converges to $x$.

  Otherwise, $\{x_1,x_2,\dots\}$ is infinite, so it has a limit point $a$. So: for all $r>0$ there is $n$ such that $0<d(a,x_n)<r$. First choose $n_1\in\NN$ such that $x_{n_1}\in B_1(a)$; then inductively, given $n_1,\dots,n_{k-1}$, let

  $$\delta_k = \min\{d(x_i,a) \mid i\le n_{k-1} \text{ and } x_i\neq a\} > 0, \qquad r_k = \min\left(\tfrac1k, \delta_k\right).$$

  Then take $n_k$ such that $0<d(a,x_{n_k})<r_k$. By construction, $n_k>n_{k-1}$ and $d(a,x_{n_k})<\frac1k$. So $x_{n_1}, x_{n_2},\dots$ is a subsequence converging to $a$.
- **Sequentially compact $\Rightarrow$ compact:** this is the hardest part. First we show two lemmas.
:::

:::lemma Covering by ε-balls
If a metric space $X$ is sequentially compact, then for every $\eps>0$, $X$ can be covered by finitely many open balls of radius $\eps$.
:::

(As we expect if $X$ is to be compact: $X = \bigcup_{x\in X} B_\eps(x)$ should have a finite subcover!)

:::proof
Assume not, and choose $x_1\in X$; then inductively choose $x_n\in X - \bigcup_{i=1}^{n-1} B_\eps(x_i)$. This yields a sequence in $X$, which by sequential compactness must have a convergent subsequence. But this is impossible, since no two terms of the sequence are within $\eps$ of each other! Contradiction.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 9](/notes/math-55b/09-completeness-and-compactifications)
:::lemma Lebesgue numbers
If a metric space $X$ is sequentially compact, then every open cover has a Lebesgue number (there is $\delta>0$ such that any subset of diameter $<\delta$ is entirely in one $U_i$).
:::

(We’ve seen this holds for compact metric spaces, so it should hold!)

:::proof
Suppose there is an open cover $(U_i)_{i\in I}$ with no Lebesgue number, i.e. for every $n\ge 1$ there is $C_n\subset X$ with diameter $<\frac1n$ which isn’t contained in any single $U_i$. Take $x_n\in C_n$.

By sequential compactness, there is a subsequence $(x_{n_k})$ of $(x_n)$ that converges to some $a\in X$. Now $a\in U_{i_0}$ for some $i_0\in I$, and so there is $\eps>0$ such that $B_\eps(a)\subset U_{i_0}$. Take $k$ sufficiently large so that $\frac1{n_k}<\frac\eps2$ *and* $d(x_{n_k},a)<\frac\eps2$.

Since $C_{n_k}$ has diameter $<\frac\eps2$, $C_{n_k}\subset B_{\eps/2}(x_{n_k})\subset B_\eps(a)\subset U_{i_0}$, contradiction.
:::

(Remark: this proof illustrates how arguments using sequential compactness are often more intuitive than those involving open covers: “if some property fails to hold uniformly, take a sequence of points where things get worse, extract a convergent subsequence, and see what goes wrong at the limit.”)

Now we can prove **sequentially compact $\Rightarrow$ compact**:

:::proof
Given an open cover $X = \bigcup_{i\in I} U_i$, by the Lebesgue numbers lemma there is $\delta>0$ such that every subset of diameter $<\delta$ is entirely inside a single $U_i$. Fix $\eps\in(0,\frac\delta2)$: by the ε-ball lemma, $X$ is covered by finitely many $\eps$-balls. Each of these has diameter $\le 2\eps<\delta$, so is contained in some $U_i$. This gives a finite subcover, replacing each $\eps$-ball by one $U_i$ containing it (and discarding the rest of the $U_i$‘s).
:::

**Completeness**

:::theorem
Every compact metric space $(X,d)$ is **complete**, i.e. every Cauchy sequence converges.
:::

:::proof
Let $(x_n)$ be a Cauchy sequence. By sequential compactness there is a subsequence $x_{n_k}\to x\in X$. Now for all $\eps>0$ there is $N$ such that for all $m,n\ge N$, $d(x_m,x_n)<\frac\eps2$, and there is $n_k\ge N$ such that $d(x_{n_k},x)<\frac\eps2$. Hence for all $n\ge N$, $d(x_n,x)\le d(x_n,x_{n_k}) + d(x_{n_k},x)<\eps$.
:::

:::corollary
$\RR$, $\RR^n$ (with the usual distances) are complete.
:::

:::proof
Every Cauchy sequence is bounded, hence contained in a compact subset, hence convergent.
:::

:::corollary
$\RR^X = \{\text{functions } X\to\RR\}$ with the uniform metric is complete.
:::

:::proof
Given a Cauchy sequence $\{f_n\}$ (i.e. for all $\eps>0$ there is $N$ such that $m,n\ge N\Rightarrow\sup|f_n - f_m|<\eps$): for all $x\in X$, $\{f_n(x)\}$ is a Cauchy sequence in $\RR$ ($|f_n(x) - f_m(x)|\le\sup|f_n - f_m|<\eps$), hence converges to some limit $f(x)$ (i.e. we have a pointwise limit).

Now: given $\eps>0$, take $N$ such that $m,n\ge N\Rightarrow\sup_x|f_n(x) - f_m(x)|<\eps$. Then for all $n\ge N$ and all $x\in X$,

$$|f_n(x) - f(x)| = \lim_{m\to\infty}|f_n(x) - f_m(x)|\le\eps,$$

i.e. for all $n\ge N$, $\sup|f_n - f|\le\eps$, which implies $f_n\to f$ uniformly.
:::

(When $X$ is a topological space, we’ve seen that uniform limits of continuous functions are continuous, so we also have completeness of $C^0(X,\RR) = \{\text{continuous functions}\}\subset\RR^X$, uniform topology. More generally: closed subsets of complete metric spaces are complete!)

**Compactification**

:::definition
A **compactification** of a (Hausdorff) topological space $X$ is a compact (Hausdorff) space $Y$ with an inclusion $i\colon X\hookrightarrow Y$ which is an embedding (i.e. a homeomorphism onto its image, i.e. the topology on $X$ = the subspace topology of $i(X)\subset Y$), with $X$ open and dense in $Y$ ($\overline{X} = Y$).
:::

:::example
$\RR^n\rightsquigarrow\RR^n\cup\{\infty\}$ as in HW2; this is in fact homeomorphic to $S^n$ (the unit sphere in $\RR^{n+1}$).

This is not the only option: e.g. $(0,1)\simeq\RR$ compactifies to $[0,1]$ or $S^1$, and $(0,1)\times(0,1)\simeq\RR^2$ to e.g. $[0,1]\times[0,1]$, $S^2$, or the torus ($\simeq S^1\times S^1$):

![Compactifications of the open interval (segment, circle) and of the open square (closed square, sphere, torus)](/notes/math-55b/figures/a2-compactifications.svg)
:::

The **one-point compactification**, if it exists, is unique.

Let $Y = X\cup\{\infty\}$ (add a new point). The requirements of a compactification imply:

- a subset $U\subset X$ is open in $Y$ iff it is open in $X$ (subspace topology $= \mathcal{T}_X$);
- a subset $V$ containing $\infty$ is open in $Y$ iff $Y - V$ is closed, hence compact (we want $Y$ compact), and a subset of $X$ (since $\infty\in V$).

So:

:::definition
$$\mathcal{T}_Y = \{U\subset X \text{ open}\}\cup\{Y - K \mid K\subset X \text{ compact}\}.$$
:::

:::theorem
For $X$ Hausdorff, $\mathcal{T}_Y$ is a topology on $Y = X\cup\{\infty\}$, and $Y$ is a compactification of $X$ (in particular, $Y$ is compact), *except* that $\overline{X} = Y$ fails when $X$ is compact!
:::

Proof: next time.

*However:* even if $X$ is Hausdorff, it doesn’t follow that $Y$ is Hausdorff. We’ll see a criterion next time.
:::
