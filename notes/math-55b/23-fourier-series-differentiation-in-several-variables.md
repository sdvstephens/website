---
course: math-55b
chapter: 6
section: 23
title: Fourier Series; Differentiation in Several Variables
date: 2026-03-27
lecturer: Denis Auroux
source-pages: 1-4
---

## Fourier series

We consider continuous $2\pi$-periodic functions $f:\RR\to\CC$ with complex values, or equivalently functions on $S^1 = \RR/2\pi\ZZ$, with $L^2$ inner product

$$
\langle f,g\rangle = \frac{1}{2\pi}\int_0^{2\pi}\overline{f(x)}\,g(x)\,dx.
$$

The complex exponentials $e_n(x) = e^{inx}$, $n\in\ZZ$, satisfy $\langle e_i,e_j\rangle = \delta_{ij}$ (orthonormality).

:::definition
The **Fourier coefficients** of $f$ are

$$
c_n(f) = \langle e_n,f\rangle = \frac{1}{2\pi}\int_0^{2\pi}e^{-inx}f(x)\,dx.
$$

The **Fourier series** of $f$ is then $\displaystyle\sum_{n\in\ZZ}c_ne_n = \sum_{-\infty}^{\infty}c_n(f)\,e^{inx}$.
:::

:::question
(Fourier, Dirichlet, Fejér, …) Does the Fourier series accurately represent $f$? (E.g. does it converge? To $f$?)
:::

:::definition
**Trigonometric polynomials** = the vector space of *finite* linear combinations of the $e_n$ (including the real and imaginary parts $\cos(nx)$, $\sin(nx)$).
:::

Clearly this is an algebra, contains $\mathrm{Re}(\dots)$ and $\mathrm{Im}(\dots)$, and separates points of $S^1$, which is compact. Hence by Stone–Weierstrass, real/complex trigonometric polynomials are **dense** in $(C^0(S^1),\|\cdot\|_\infty)$ (real/$\CC$-valued)… hence also in the $L^2$ norm, since

$$
\|f\|_{L^2} = \left(\frac{1}{2\pi}\int|f|^2\,dx\right)^{1/2}\le\sup|f|.
$$

The **$n$th Fourier sum**

$$
f_n = s_n(f) = \sum_{-n}^{n}c_k\,e^{ikx} = \sum_{-n}^{n}\langle e_k,f\rangle\,e_k
$$

(if $f$ is $\RR$-valued then so is $f_n$) is the orthogonal projection of $f$ onto $V_n = \mathrm{span}(e_{-n},\dots,e_n)$ for $\langle\cdot,\cdot\rangle$. Indeed:

$$
\langle e_j,f_n\rangle = \sum_{k=-n}^{n}c_k\langle e_j,e_k\rangle = c_j = \langle e_j,f\rangle,\quad\text{so}\quad\langle e_j,f-f_n\rangle = 0\quad\forall\,-n\le j\le n.
$$

Thus: $\forall g\in V_n$, $\|f-f_n\|_{L^2}\le\|f-g\|_{L^2}$, i.e. $f_n$ is the point of $V_n$ closest to $f$ for $\|\cdot\|_{L^2}$. (This follows from $(f-f_n)\perp V_n$:

$$
f-g = \underbrace{(f-f_n)}_{\perp V_n}+\underbrace{(f_n-g)}_{\in V_n}\implies\|f-g\|^2 = \|f-f_n\|^2+\|f_n-g\|^2\ge\|f-f_n\|^2.\text{)}
$$

:::theorem Parseval
Let $f\in C^0(S^1)$, $c_n = \langle e_n,f\rangle$ its Fourier coefficients, $f_n = \sum_{-n}^{n}c_ke_k$ the partial sums.

1. $f_n\to f$ in $L^2$, i.e. $\|f_n-f\|_{L^2}^2 = \frac{1}{2\pi}\int|f(x)-f_n(x)|^2\,dx\to0$ as $n\to\infty$.
2. $\displaystyle\sum_{n\in\ZZ}|c_n|^2 = \|f\|_{L^2}^2 = \frac{1}{2\pi}\int_0^{2\pi}|f(x)|^2\,dx$ (in particular $\sum|c_n|^2$ converges, so $c_n\to0$ as $|n|\to\infty$).
:::

:::proof
(1) Since the trigonometric polynomials $=\bigcup_nV_n$ are dense in $(C^0(S^1),\|\cdot\|_{L^2})$, $\forall\eps>0$ $\exists N$ such that $\exists g\in V_N$ with $\|f-g\|_{L^2}<\eps$. Now for $n\ge N$, $g\in V_N\subset V_n$ and $f_n$ is the closest point to $f$, so $\|f-f_n\|_{L^2}\le\|f-g\|_{L^2}<\eps$. This shows $f_n\to f$ in $L^2$.

(2) Since $f_n\in V_n$ and $f-f_n\in V_n^\perp$, $\|f\|_{L^2}^2 = \|f_n\|_{L^2}^2+\|f-f_n\|_{L^2}^2$, where

$$
\|f_n\|_{L^2}^2 = \Big\|\sum_{-n}^{n}c_ke_k\Big\|^2 = \sum_{-n}^{n}|c_k|^2
$$

by orthonormality, and $\|f-f_n\|_{L^2}^2\to0$ by the first part.
:::

:::corollary
If $f,g\in C^0(S^1)$ have the same Fourier series then $\frac{1}{2\pi}\int|f-g|^2\,dx = \sum|c_n(f)-c_n(g)|^2 = 0$, hence $f=g$.
:::

The fact that $f_n\to f$ in $L^2$ is the best approximation (in $L^2$ norm) of $f$ by trigonometric polynomials, and that trigonometric polynomials are dense in $\|\cdot\|_\infty$ (so $\exists$ trigonometric polynomials $\to f$ uniformly), makes one hope that $f_n\to f$ uniformly, or at least pointwise… alas not!

:::remark Fact
$\exists f\in C^0(S^1)$ such that the Fourier series of $f$ does not converge ($s_n(f)(0)$ unbounded!) (but the example is hard to construct).
:::

:::theorem Dirichlet
If $f$ is $C^1$ then $f_n = s_n(f)\to f$ uniformly.
:::

The proof uses convolution—redefine, for periodic functions,

$$
(f*g)(x) = \frac{1}{2\pi}\int_0^{2\pi}f(t)\,g(x-t)\,dt,
$$

and note

$$
c_n\,e_n(x) = \frac{1}{2\pi}\left(\int f(t)\,e^{-int}\,dt\right)e^{inx} = (f*e_n)(x).
$$

So:

$$
s_n(f) = \sum_{-n}^{n}c_ke_k = f*\Big(\sum_{-n}^{n}e_k\Big) = f*D_n,
$$

where

$$
D_n(x) = \sum_{-n}^{n}e^{ikx} = \frac{e^{i(n+\frac12)x}-e^{-i(n+\frac12)x}}{e^{ix/2}-e^{-ix/2}} = \frac{\sin\big((n+\frac12)x\big)}{\sin\big(\frac x2\big)}
$$

is the **Dirichlet kernel**. Dirichlet’s proof studies this convolution for $f\in C^1$ to prove uniform convergence. (See HW8 for another proof.)

The fact that convergence can sometimes fail makes it remarkable that $\forall f\in C^0$, $f$ can be recovered from the partial sums $s_n(f) = f_n = \sum_{-n}^{n}c_ke^{ikx}$…

:::theorem Fejér
If $f\in C^0(S^1)$ then

$$
\frac{s_0(f)+\dots+s_{n-1}(f)}{n}
$$

converges uniformly to $f$.
:::

The reason is that this process amounts to convolution with the **Fejér kernel** $F_n = \frac{D_0+\dots+D_{n-1}}{n}$, which actually approximates the identity (in the sense seen last time), unlike $D_n$. (See HW8.)

## Differentiation in several variables

:::definition
$U\subset\RR^n$ open; $f:U\to\RR^m$ is **differentiable** at $x\in U$ if $\exists$ a linear map $L:\RR^n\to\RR^m$ such that

$$
\lim_{v\to0}\frac{|f(x+v)-f(x)-Lv|}{|v|} = 0
$$

(also write: $f(x+v) = f(x)+Lv+o(|v|)$, where $o(|v|)$ means $\ll|v|$, i.e. $(\dots)/|v|\to0$).

The **differential** of $f$ at $x$ is then $Df(x) = L\in\Hom(\RR^n,\RR^m)$, aka $f'(x)$ or $df(x)$.
:::

- Conceptually, the input of $Df(x)$ is a **tangent vector** to $U$ at $x$, and the output $Df(x)v$ is a tangent vector at $f(x)$.
- Natural norm on $\Hom(\RR^n,\RR^m)$: the **operator norm** $\|L\| = \sup_{v\ne0}\frac{|Lv|}{|v|}$ $\big(=\sup\{|Lv| : |v|\le1\}\big)$.
- Say $f\in C^1(U,\RR^m)$ if $f$ is differentiable $\forall x\in U$ and $Df:U\to\Hom(\RR^n,\RR^m)$ is continuous.
- As a matrix, the entries of $Df(x)$ are the **partial derivatives** $\frac{\partial f_i}{\partial x_j}$ = the derivative of $f_i$ as a function of $x_j$ (keeping the other $x_k$ constant); then $(Df(x)v)_i = \sum_j\frac{\partial f_i}{\partial x_j}v_j$. (Proof: take $v\parallel e_j$ in the definition of the differential.)

:::theorem
$f\in C^1(U,\RR^m)$ iff $\forall i,j$, $\frac{\partial f_i}{\partial x_j}$ exists and is continuous.
:::

$\Rightarrow$ is clear, but $\Leftarrow$ is more subtle: the existence of the $\frac{\partial f_i}{\partial x_j}$ does not imply the differentiability, or even the continuity, of $f$!

:::example
$f(x,y) = \dfrac{x^3}{x^2+y^2}$, $f(0,0) = 0$. Then $f(x,0) = x$, so $\frac{\partial f}{\partial x}(0,0) = 1$, and $f(0,y) = 0$, so $\frac{\partial f}{\partial y}(0,0) = 0$. So if $Df(0)$ exists, it maps $(v_1,v_2)\mapsto v_1$. However $f(t,t) = \frac t2\ne t+o(|t|)$!
:::

:::proof Proof of $\Leftarrow$
Enough to consider $f = f_i:U\to\RR$, one component at a time. Applying the mean value theorem successively, for $x\in U$ and $v\in\RR^n$ such that $B_{|v|}(x)\subset U$:

$$
\begin{aligned}
f(x_1+v_1,\dots,x_n+v_n) &= f(x_1+v_1,\dots,x_{n-1}+v_{n-1},x_n)+\frac{\partial f}{\partial x_n}(x_1+v_1,\dots,x_{n-1}+v_{n-1},y_n)\,v_n\\
&\qquad\text{for some }y_n\in(x_n,x_n+v_n),\text{ by the mean value theorem for }\partial f/\partial x_n\\
&= \dots\qquad\text{(apply the mean value theorem to }\partial f/\partial x_{n-1},\dots,\partial f/\partial x_1\text{ successively)}\\
&= f(x_1,\dots,x_n)+\sum_{j=1}^{n}\frac{\partial f}{\partial x_j}(x_1+v_1,\dots,x_{j-1}+v_{j-1},y_j,x_{j+1},\dots,x_n)\,v_j,
\end{aligned}
$$

with $y_j\in(x_j,x_j+v_j)$. All these points are within distance $|v|$ of $x$, so using continuity of $\partial f/\partial x_j$ we get that for $|v|\to0$ this is well approximated (within $o(|v|)$) by $f(x)+\sum_j\frac{\partial f}{\partial x_j}(x)\,v_j$. Hence $f$ is differentiable and $Df(x) = \left(\frac{\partial f}{\partial x_1}\ \cdots\ \frac{\partial f}{\partial x_n}\right)$, which depends continuously on $x$.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 24](/notes/math-55b/24-the-inverse-and-implicit-function-theorems)
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

:::proof
Let $u$ = unit vector in the direction of $f(b)-f(a)$, $v$ = unit vector in the direction of $b-a$, and let $g(t) = \langle u,f(a+tv)\rangle$. Then $g'(t) = \langle u,Df(a+tv)\,v\rangle$, so $|g'(t)|\le\|Df(a+tv)\|$. The result then follows from the single-variable mean value inequality for $g$ on $[0,|b-a|]$.
:::

**Higher-order derivatives**

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

**Local behavior and diffeomorphisms**

Because of the local approximation $f(x+v) = f(x)+Df(x)v+r(v)$, the behavior of $Df(x)$ governs that of $f$ near $x$. In particular:

- if $Df(x)$ is injective then $f$ is injective on a (sufficiently small) neighborhood of $x$;
- if $Df(x)$ is surjective then $f$ maps a neighborhood of $x$ surjectively onto a neighborhood of $f(x)$.

When both hold, $f$ is a local diffeomorphism, by the **inverse function theorem**.

:::definition
A map $f:U\to V$ between open subsets of $\RR^n$ is a **diffeomorphism** if it is a homeomorphism and both $f$ and $f^{-1}$ are $C^1$.
:::
:::
