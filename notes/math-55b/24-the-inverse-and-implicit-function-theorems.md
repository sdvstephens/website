---
course: math-55b
chapter: 6
section: 24
title: The Inverse and Implicit Function Theorems
date: 2026-03-30
lecturer: Denis Auroux
source-pages: 1-4
---

:::readings Review sessions and handouts
- Christoph von Pezold, [Week 9 review: inverse and implicit functions, integration, differential forms](/notes/math-55b/readings/review-week-9-inverse-functions-and-forms.pdf)
:::

## Recall

- $f:U\subset\RR^n\to\RR^m$ is differentiable at $x$ if $\exists Df(x)\in\Hom(\RR^n,\RR^m)$ such that $f(x+v) = f(x)+Df(x)v+o(|v|)$.
- $f\in C^1(U,\RR^m)$ if $f$ is everywhere differentiable and $Df:U\to\Hom(\RR^n,\RR^m)$ is continuous.
- As a matrix, the entries in $Df(x)$ are the partial derivatives $\partial f_i/\partial x_j$.
- Operator norm: $\|Df(x)\| = \sup_{v\ne0}\frac{|Df(x)v|}{|v|}$.

## Rules of differentiation

Usual rules of differentiation hold; in particular:

:::theorem Chain rule
If $g$ is differentiable at $x\in\RR^n$ and $f$ is differentiable at $g(x)\in\RR^m$, then $f\circ g$ is differentiable at $x$ and

$$
D(f\circ g)(x) = Df(g(x))\circ Dg(x).
$$
:::

:::proof
$g(x+v) = g(x)+\underbrace{Dg(x)v+r(v)}_{=w}$ where $r(v) = o(|v|)$ (i.e. $\lim\frac{|r(v)|}{|v|} = 0$), so

$$
\begin{aligned}
f\circ g(x+v) = f(g(x)+w) &= f(g(x))+Df(g(x))\,w+o(|w|)\\
&= f(g(x))+Df(g(x))\,Dg(x)\,v+o(|v|).
\end{aligned}
$$
:::

The mean value theorem doesn’t hold: e.g. $f:\RR\to\RR^2$, $t\mapsto(\cos t,\sin t)$ has $f(2\pi) = f(0)\ne f(0)+2\pi f'(t)$ $\forall t\in[0,2\pi]$. However we have the **mean value inequality**:

:::theorem Mean value inequality
$f:U\to\RR^m$ differentiable at every point of the line segment $[a,b] = \{tb+(1-t)a \mid t\in[0,1]\}$ $\Rightarrow$

$$
|f(b)-f(a)|\le|b-a|\cdot\sup_{x\in[a,b]}\|Df(x)\|.
$$
:::

(This follows from the single-variable case by considering $f(tb+(1-t)a)$ on $[0,1]$.)

### Higher-order derivatives

$f$ is $C^2$ if $Df:U\to\Hom(\RR^n,\RR^m)\simeq\RR^{n\times m}$ is $C^1$, etc. The main important fact about higher partial derivatives is:

:::proposition
If the $\frac{\partial^2f}{\partial x_i\partial x_j}$ exist and are continuous, then $\dfrac{\partial^2f}{\partial x_i\partial x_j} = \dfrac{\partial^2f}{\partial x_j\partial x_i}$.
:::

:::proof
Enough to consider the case of $f(x,y)$. For $h$ and $k$ small, $\ne0$, consider

$$
\frac{1}{hk}\Big(f(x+h,y+k)-f(x+h,y)-f(x,y+k)+f(x,y)\Big).
$$

Writing this in terms of $g(x,y) = \frac{f(x,y+k)-f(x,y)}{k}$, this is $\frac1h\big(g(x+h,y)-g(x,y)\big)$, so by the mean value theorem for $\frac{\partial g}{\partial x}$, $\exists h_1\in(0,h)$ such that this equals

$$
\frac{\partial g}{\partial x}(x+h_1,y) = \frac1k\left(\frac{\partial f}{\partial x}(x+h_1,y+k)-\frac{\partial f}{\partial x}(x+h_1,y)\right).
$$

In turn, by the mean value theorem for $\frac{\partial}{\partial y}\big(\frac{\partial f}{\partial x}\big)$, $\exists k_1\in(0,k)$ such that this equals $\frac{\partial}{\partial y}\big(\frac{\partial f}{\partial x}\big)(x+h_1,y+k_1)$.

Doing the same calculation in the opposite order shows it also equals $\frac{\partial}{\partial x}\big(\frac{\partial f}{\partial y}\big)(x+h_2,y+k_2)$ for some $h_2\in(0,h)$, $k_2\in(0,k)$. Since these 2nd derivatives are continuous by assumption, taking limits as $h,k\to0$ gives the result.
:::

Hence: the **Hessian** matrix $H = \left(\frac{\partial^2f}{\partial x_i\partial x_j}\right)$ is symmetric, and should be interpreted as a symmetric bilinear form on tangent vectors. If $f\in C^2$ then

$$
f(x+v) = f(x)+Df(x)\cdot v+\tfrac12H(x)(v,v)+o(|v|^2)
$$

(and so on, Taylor!).

## The inverse function theorem

Because of the local approximation $f(x+v) = f(x)+Df(x)v+r(v)$, the behavior of $Df(x)$ governs that of $f$ near $x$. In particular:

- if $Df(x)$ is injective then $f$ is injective on a (sufficiently small) neighborhood of $x$;
- if $Df(x)$ is surjective then $f$ maps a neighborhood of $x$ surjectively onto a neighborhood of $f(x)$.

When both hold, $f$ is a local diffeomorphism, by the **inverse function theorem**.

:::definition
A map $f:U\to V$ between open subsets of $\RR^n$ is a **diffeomorphism** if it is a homeomorphism and both $f$ and $f^{-1}$ are $C^1$.
:::

:::theorem Inverse function theorem
Let $p\in E\subset\RR^n$ open, $f:E\to\RR^n$ $C^1$, and suppose $Df(p):\RR^n\to\RR^n$ is an isomorphism (i.e. $\det Df(p)\ne0$). Then $f$ is a **local diffeomorphism** at $p$, i.e. $\exists$ a neighborhood $U\ni p$ such that $f$ is a diffeomorphism between $U\subset E$ and $f(U)\subset\RR^n$.
:::

The proof uses two main ingredients:

1. The mean value inequality: $\sup\|Df\|\le M\Rightarrow|f(b)-f(a)|\le M|b-a|$.
2. The **contraction mapping principle**: $X$ a complete metric space, $\varphi:X\to X$ a contraction ($d(\varphi(x),\varphi(y))\le\alpha\,d(x,y)$ for some $\alpha<1$) $\Rightarrow$ $\varphi$ has a unique fixed point.

:::proof Proof of the contraction mapping principle
*Existence:* let $x_0\in X$, set $x_{n+1} = \varphi(x_n)$; then $d(x_n,x_{n+1})\le\alpha\,d(x_{n-1},x_n)$, so $d(x_n,x_{n+1})\le\alpha^n\,d(x_0,x_1)$, so $(x_n)$ is Cauchy, hence converges to some $x\in X$. Moreover $x_{n+1} = \varphi(x_n)\to\varphi(x)$, but $\lim_{n\to\infty}x_{n+1} = \lim_{n\to\infty}x_n = x$, hence $\varphi(x) = x$.

*Uniqueness:* if $\varphi(x) = x$ and $\varphi(y) = y$ then $d(\varphi(x),\varphi(y)) = d(x,y)\le\alpha\,d(x,y)$, so $x = y$.
:::

:::proof Proof of the inverse function theorem
After a linear change of variables, we can assume $p = 0$, $f(0) = 0$, $Df(0) = \mathrm{Id}$.

Since $f\in C^1$, $Df$ is continuous, so $\exists$ a ball $B_r(0)$ such that $\|Df(x)-I\|\le\frac12$ for $|x|\le r$.

Now, given $y_0\in\RR^n$, let $\varphi(x) = x+(y_0-f(x))$. (“The next guess using Newton’s method to find $x_0$ such that $f(x_0) = y_0$, given $f(x)$, using $Df\approx I$.”)

**Key observation:** $\varphi(x) = x$ iff $f(x) = y_0$, and for $|x|\le r$ we have $\|D\varphi(x)\| = \|I-Df(x)\|\le\frac12$.

Assume $|y_0|<\frac r2$. Since $\varphi(0) = y_0$ and $\|D\varphi\|\le\frac12$ for $|x|\le r$, the mean value inequality gives, for $|x_i|\le r$, $|\varphi(x_1)-\varphi(x_2)|\le\frac12|x_1-x_2|$, and also

$$
|\varphi(x)|\le|y_0|+\frac{|x|}{2}<r.\qquad(*)
$$

So $\varphi$ is a contracting map from $\overline{B_r(0)}$ to itself, hence $\exists!$ fixed point $x_0\in B_r(0)$ (by $(*)$, $|x_0| = |\varphi(x_0)|<r$). Thus

$$
\forall y_0\in B_{r/2}(0),\ \exists!\,x_0\in B_r(0)\text{ such that }f(x_0) = y_0.\qquad(**)
$$

Now let $V = B_{r/2}(0)$ and $U = f^{-1}(V)\cap B_r(0)$; then $U$, $V$ are open ($f$ is continuous) and $f|_U:U\to V$ is a bijection by $(**)$. Let $g:V\to U$ be the inverse map.

**Claim:** $g$ is differentiable and $Dg(y) = Df(x)^{-1}$, where $x = g(y)$ ($y = f(x)$).

*Proof of the claim.* Fix $y_0\in V$, $x_0 = g(y_0)\in U$, and let $\varphi(x) = x+(y_0-f(x))$ as above, with $\varphi(x_0) = x_0$. For $w\in\RR^n$ small (so $|y_0+w|<\frac r2$), write $g(y_0+w) = x_0+v$, so $f(x_0+v) = y_0+w$. Then

$$
\varphi(x_0+v) = (x_0+v)+\big(y_0-(y_0+w)\big) = x_0+v-w,\quad\text{vs.}\quad\varphi(x_0) = x_0.
$$

But we’ve shown $\varphi$ is contracting: $|\varphi(x_0+v)-\varphi(x_0)| = |v-w|\le\frac12|v|$. Hence $|w|\ge\frac12|v|$ by the triangle inequality, i.e. $|v|\le2|w|$.

Given $\eps>0$, $\exists\delta$ such that $|v|<\delta\Rightarrow|f(x_0+v)-f(x_0)-Df(x_0)v|<\frac\eps2|v|$. So for $|w|<\frac\delta2$,

$$
\big|(y_0+w)-y_0-Df(x_0)v\big|<\frac\eps2|v|\le\eps|w|.
$$

Applying $Df(x_0)^{-1}$: for $|w|<\frac\delta2$,

$$
\big|Df(x_0)^{-1}w-v\big|\le\|Df(x_0)^{-1}\|\,\big|w-Df(x_0)v\big|<\eps\,\|Df(x_0)^{-1}\|\,|w|.
$$

Recalling $v = g(y_0+w)-g(y_0)$, this yields $g(y_0+w) = g(y_0)+Df(x_0)^{-1}w+o(|w|)$, proving the claim. $\square$

The continuity of $Dg = (Df)^{-1}\circ g$ then follows from the continuity of $Df$ and of $g$ itself.
:::

## The implicit function theorem

:::theorem Implicit function theorem
$\RR^n\times\RR^m\supset E$ open, $f:E\to\RR^m$, $(x,y)\mapsto f(x,y)$, continuously differentiable ($C^1$).

Write $Df(x,y):\RR^n\oplus\RR^m\to\RR^m$ as $Df_x\oplus Df_y$, where $Df_x:\RR^n\to\RR^m$ (first $n$ variables) and $Df_y:\RR^m\to\RR^m$ (last $m$ variables).

Assume $f(x_0,y_0) = 0$ and $Df_y$ is invertible ($\det Df_y\ne0$) at $(x_0,y_0)\in E$. Then $\exists$ open $U\ni x_0$, $V\ni y_0$ such that $\forall x\in U$ $\exists!\,y = g(x)\in V$ such that $f(x,y) = 0$.

Moreover, $g:U\to V$ defined by $f(x,g(x)) = 0$ $\forall x\in U$ is differentiable, and $Dg = -(Df_y)^{-1}Df_x$.
:::

:::proof
This follows from the inverse function theorem by considering

$$
F:\RR^{n+m}\supset E\to\RR^{n+m},\quad F(x,y) = (x,f(x,y)),\qquad DF(x_0,y_0) = \left(\begin{array}{c|c}I&0\\\hline Df_x&Df_y\end{array}\right)\ \text{invertible }\checkmark
$$

This has an inverse $G$ over a neighborhood of $F(x_0,y_0) = (x_0,0)$. Near $(x_0,y_0)$,

$$
f(x,y) = 0\iff F(x,y) = (x,0)\iff(x,y) = G(x,0).
$$

So we let $g(x)$ = the second component of $G(x,0)$.
:::

Given a differentiable $f:\RR^{n+m}\to\RR^m$, and a point at which $Df$ is surjective, we can always find a subset of coordinates $(x_i)_{i\in I}$ ($I\subset\{1,\dots,m+n\}$, $|I| = m$) such that the corresponding part of $Df$ is invertible $\Rightarrow$ we can apply the implicit function theorem to describe the zero set of $f$ by equations $(x_i)_{i\in I} = g(x_j,\ j\notin I)$.

In particular, a **hypersurface** $S\subset\RR^n$ = a closed subset which is locally the zero set of a differentiable real-valued function $f$ with $Df\ne0$. Using the implicit function theorem, $S$ can be locally described as the graph $x_j = g(x_i,\ i\ne j)$ of some differentiable $g:\RR^{n-1}\to\RR$. E.g. a differentiable curve in $\RR^2$ is locally a graph $x = f(y)$ or $y = f(x)$.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 26](/notes/math-55b/26-change-of-variables-and-differential-forms)
**Iterated and Riemann integrals in several variables**

$f$ a continuous function on an $n$-cell $D = [a_1,b_1]\times\dots\times[a_n,b_n]\subset\RR^n$ $\Rightarrow$ we can define

$$
\int_Df = \int_Df\,dx_1\dots dx_n = \int_Df\,|dx|
$$

(why $|dx|$? clearer after differential forms) either

1. as an iterated integral:
   $$
   \int_{a_1}^{b_1}\left(\int_{a_2}^{b_2}\cdots\left(\int_{a_n}^{b_n}f(x_1,\dots,x_n)\,dx_n\right)\cdots dx_2\right)dx_1,
   $$
   or in any order;
2. as a Riemann integral: split $D$ into small cubes $Q_i$, and bound $f$ between the piecewise constant functions $s = s_i = \min f(Q_i)$ on $\mathrm{int}(Q_i)$ and $S = S_i = \max f(Q_i)$ on $\mathrm{int}(Q_i)$, giving the estimate
   $$
   \sum s_i\,\mathrm{vol}(Q_i)\le\int_Df\,|dx|\le\sum S_i\,\mathrm{vol}(Q_i).
   $$
   If $f$ is continuous, hence uniformly continuous, then $\sup|S-s|\to0$ as $\diam(Q_i)\to0$, so this defines the integral uniquely.

**Fubini’s theorem** says: for continuous $f$, the iterated integrals for different orders of integration are all equal.

If $f$ is only piecewise continuous, integrability still holds if the regions of $D$ where $f$ is continuous are sufficiently regular—e.g. delimited by smooth hypersurfaces. Specifically: when decomposing $D$ into small cubes $Q_i$, we want

$$
\sum_{f|_{Q_i}\text{ not }C^0}\mathrm{vol}(Q_i)\longrightarrow0
$$

as one subdivides further. Over such cubes, $(S_i-s_i)$ doesn’t $\to0$ as the step size $\to0$, but if vol $\to0$ we still have $\int_D(S-s)\,|dx| = \sum(S_i-s_i)\,\mathrm{vol}(Q_i)\to0$.

Thus we can define integrals over regions of $\RR^n$ delimited by hypersurfaces, either by

- extending $f$ by $0$ outside of the given region, and integrating the resulting piecewise continuous function, or
- using changes of coordinates (via the implicit function theorem) to make the region of integration an $n$-cell. This requires change of variables…
:::
