---
course: math-55b
chapter: 5
section: 22
title: Convolution and the Stone–Weierstrass Theorem
date: 2026-03-25
lecturer: Denis Auroux
source-pages: 1-5
---

## The Stone–Weierstrass theorem

:::theorem Weierstrass
Polynomials are dense in $C^0([a,b])$, i.e. $\forall f\in C^0([a,b])$ there exist polynomials $P_n$ such that $P_n\to f$ uniformly on $[a,b]$.
:::

Key tool: **convolution**.

:::definition
The **convolution** of $f$ and $g$ is
$$
(f*g)(x)=\int_{s+t=x}f(s)g(t)\,dt=\int_{-\infty}^\infty f(x-t)g(t)\,dt=\int_{-\infty}^\infty f(s)g(x-s)\,ds.
$$
:::

This is well-defined if e.g. $f$ and $g$ are piecewise $C^0$ and one of them is **compactly supported** (i.e. $0$ outside some $[-M,M]$), to avoid improper integrals.

**Principle**: “$f*g$ inherits the best properties of $f$ and $g$.” This is because
$$
(\ast)\qquad(f*g)(x+h)-(f*g)(x)=\int f(x-t)\big(g(t+h)-g(t)\big)\,dt
$$
is bounded by
$$
\Big(\underbrace{\int|f|\,dt}_{=\|f\|_{L^1}}\Big)\cdot\Big(\sup_t|g(t+h)-g(t)|\Big)
$$
(over the relevant intervals, per compact support).

- If $g$ is $C^0$, then uniform continuity (over a compact interval) gives $\lim_{h\to0}\big(\sup|g(t+h)-g(t)|\big)=0$ (i.e. $|g(t+h)-g(t)|<\eps$ for all $t$ when $|h|<\delta$), so $f*g$ is continuous.
- If $g$ is $C^1$ (continuously differentiable) then $f*g$ is $C^1$ and $(f*g)'=f*g'$.

  Indeed, $(\ast)$ gives
$$
\frac{(f*g)(x+h)-(f*g)(x)}h-(f*g')(x)=\int f(x-t)\bigg(\underbrace{\frac{g(t+h)-g(t)}h}_{=g'(c)\text{ for some }c\in(t,t+h)}-g'(t)\bigg)\,dt\to0\ \text{ as }h\to0,
$$
  using the mean value theorem: the integrand involves $g'(c)-g'(t)$, which $\to0$ uniformly as $h\to0$ by uniform continuity of $g'$ on the interval of integration.
- Hence if $g$ is $C^\infty$ then $f*g$ is $C^\infty$!! (Even if $f$ isn’t even continuous.)
- And… if $g$ is a polynomial of degree $d$ then so is $f*g$! E.g. because $g^{(d+1)}=0$, so $(f*g)^{(d+1)}=f*g^{(d+1)}=0$; or more directly: $g(x)=\sum_{k=0}^da_kx^k$ gives
$$
(f*g)(x)=\sum_{k=0}^da_k\int f(t)(x-t)^k\,dt=\sum_{k=0}^d\sum_{l=0}^k(-1)^l\binom kla_kx^{k-l}\underbrace{\int f(t)t^l\,dt}_{\text{constant}},
$$
  manifestly a polynomial in $x$.

### Approximate identities

:::definition
A sequence of functions $K_n$ **approximates the identity** if
- $K_n\ge0$,
- $\int K_n\,dx=1$,
- $\forall\delta>0$, $\displaystyle\int_{|x|\ge\delta}K_n\,dx\to0$.
:::

:::theorem
If $f$ is compactly supported and continuous and $K_n$ is an approximate identity, then $f*K_n\to f$ uniformly.
:::

:::proof
$$
(f*K_n)(x)-f(x)=\int\big(f(x-t)-f(x)\big)K_n(t)\,dt=\int_{|t|\le\delta}+\int_{|t|\ge\delta}.
$$
Estimate each term as follows. Given $\eps>0$, uniform continuity of $f$ on its support gives $\delta$ (independent of $x$) such that $|t|<\delta\Rightarrow|f(x-t)-f(x)|<\frac\eps2$. Then
$$
\left|\int_{-\delta}^\delta\big(f(x-t)-f(x)\big)K_n(t)\,dt\right|\le\frac\eps2\int_{-\delta}^\delta K_n(t)\,dt\le\frac\eps2
$$
(independently of $x$), while
$$
\left|\int_{|t|\ge\delta}\big(f(x-t)-f(x)\big)K_n(t)\,dt\right|\le2\|f\|_\infty\int_{|x|\ge\delta}K_n\,dt\xrightarrow[n\to\infty]{}0,
$$
which becomes $<\frac\eps2$ for $n$ sufficiently large, $n\ge N$ (independent of $x$!). So $\exists N$ such that $\forall x$, $|(f*K_n)(x)-f(x)|<\eps$ for all $n\ge N$.
:::

:::example
$K_n(x)=c_n(1-x^2)^n$ for $|x|\le1$, $0$ elsewhere, where $c_n>0$ is chosen so that $\int_{-1}^1K_n\,dx=1$.

![Bell-shaped graph of K_n on [-1,1] with peak c_n and width about 1/sqrt(n)](/notes/math-55b/figures/a6-bump-kernel.svg)

**Claim**: $K_n$ is an approximate identity.
:::solution
- For $|x|\le\frac1{\sqrt{2n}}$, $(1-x^2)^n\ge1-nx^2\ge\frac12$ (the first inequality by convexity), so
$$
\int_{-1}^1(1-x^2)^n\,dx\ge\int_{-1/\sqrt{2n}}^{1/\sqrt{2n}}\frac12\,dx=\frac1{\sqrt{2n}},\qquad\text{hence }c_n\le\sqrt{2n}.
$$

![Graph of (1-t)^n on [0,1] lying above its tangent line 1 - nt](/notes/math-55b/figures/a6-convexity.svg)

- For $|x|\ge\delta$, $(1-x^2)^n\le(1-\delta^2)^n$, so
$$
\int_{|x|\ge\delta}K_n\,dx\le2c_n(1-\delta^2)^n\le2\sqrt{2n}\,(1-\delta^2)^n\xrightarrow[n\to\infty]{}0.
$$
:::
:::

:::theorem Weierstrass
$\forall f\in C^0([a,b])$ there exist polynomials $P_n$ such that $P_n\to f$ uniformly.
:::

:::proof
- By a linear change of variables, we can assume $[a,b]=[0,1]$.
- Subtracting a degree 1 polynomial from $f$, we can assume $f(0)=f(1)=0$. Then extend $f$ to $\RR$ by $f(x)=0$ if $x\notin[0,1]$.
- Now let $K_n(x)$ be as above, and $p_n=f*K_n$. Then $K_n$ is an approximate identity and $f$ is $C^0$ and compactly supported, so $p_n\to f$ uniformly.
- $p_n$ is a polynomial of degree $2n$ on $[0,1]$, because, given that $f=0$ outside $[0,1]$, the formula $(f*K_n)(x)=\int f(x-t)K_n(t)\,dt$ for $x\in[0,1]$ doesn’t involve the values of $K_n$ outside $[-1,1]$, and $K_n|_{[-1,1]}$ is polynomial.
:::

Stone’s theorem generalizes this to other families of functions.

:::definition
$\mathcal A\subset C^0(K)$ is an **algebra** if $f,g\in\mathcal A\Rightarrow f+g\in\mathcal A$, $cf\in\mathcal A$, $fg\in\mathcal A$.

$\mathcal A$ **separates points** if $\forall a\neq b\in K$, $\exists f,g\in\mathcal A$ such that $f(a)=1$, $f(b)=0$, $g(a)=0$, $g(b)=1$. ($0$ and $1$ are arbitrary: this is equivalent to $\mathcal A\to\RR^2$, $f\mapsto(f(a),f(b))$ being surjective for all $a\neq b$.)

For complex-valued functions, we further assume $\mathcal A$ is **conjugation-invariant**, i.e. $f\in\mathcal A\Rightarrow\bar f\in\mathcal A$ (equivalently: $\operatorname{Re}f\in\mathcal A$, $\operatorname{Im}f\in\mathcal A$).
:::

:::theorem Stone
Let $K$ be a compact metric space and $\mathcal A\subset C^0(K)$ an algebra which separates points (and is conjugation-invariant in the $\CC$ case). Then $\mathcal A$ is dense in $(C^0(K),\|\cdot\|_\infty)$.
:::

(Weierstrass is the special case $K=[a,b]$, $\mathcal A=$ polynomials.)

:::proof
- $\ol{\mathcal A}$ (the uniform closure of $\mathcal A$) is an algebra ($f_n\to f$, $g_n\to g\Rightarrow f+g=\lim(f_n+g_n)$, $fg=\lim(f_ng_n)$), so it is enough to show: the assumptions plus $\mathcal A$ closed imply $\mathcal A=C^0(K)$.
- Given $f\in\mathcal A$: since $\mathcal A$ is an algebra and closed, $P(f)\in\mathcal A$ for every polynomial $P$ such that $P(0)=0$. By Weierstrass, $|x|$ is a uniform limit of polynomials on $[-M,M]$, so $|f|\in\ol{\mathcal A}=\mathcal A$. Hence
$$
f,g\in\mathcal A\Rightarrow\max(f,g)=\frac{f+g+|f-g|}2\in\mathcal A,
$$
and the same for $\min(f,g)$.
- Now: given $f\in C^0(K)$ and $\eps>0$, we want to show $\exists h\in\mathcal A$ such that $\sup|h-f|\le\eps$ (so $f\in\ol{\mathcal A}=\mathcal A$).

  Given $x\in K$: for all $y\neq x$ there is $g_y\in\mathcal A$ such that $g_y(x)=f(x)$ and $g_y(y)=f(y)$ ($\mathcal A$ separates points). There is an open $U_y\ni y$ such that $g_y>f-\eps$ on $U_y$; and $K$ compact implies $\exists y_1,\dots,y_n$ such that $U_{y_1}\cup\dots\cup U_{y_n}=K$. Then $h_x:=\max(g_{y_1},\dots,g_{y_n})\in\mathcal A$ satisfies
$$
\begin{cases}h_x>f-\eps\text{ everywhere},\\ h_x(x)=f(x).\end{cases}
$$
  By the same argument, $\exists x_1,\dots,x_m$ such that $k=\min(h_{x_1},\dots,h_{x_m})$ satisfies $|k-f|<\eps$ everywhere. (There is an open $V_x\ni x$ such that $h_x<f+\eps$ on $V_x$; $K$ compact implies $\exists x_1,\dots,x_m$ such that $V_{x_1}\cup\dots\cup V_{x_m}=K$.)
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 23](/notes/math-55b/23-fourier-series-differentiation-in-several-variables)
**Fourier series**

We consider continuous $2\pi$-periodic functions $f:\RR\to\CC$ with complex values, or equivalently functions on $S^1\simeq\RR/2\pi\ZZ$, with the $L^2$ inner product
$$
\langle f,g\rangle=\frac1{2\pi}\int_0^{2\pi}\overline{f(x)}\,g(x)\,dx.
$$
The complex exponentials $e_n(x)=e^{inx}$, $n\in\ZZ$, satisfy $\langle e_i,e_j\rangle=\delta_{ij}$: orthonormality.

:::definition
The **Fourier coefficients** of $f$ are
$$
c_n(f)=\langle e_n,f\rangle=\frac1{2\pi}\int_0^{2\pi}e^{-inx}f(x)\,dx.
$$
The **Fourier series** of $f$ is
$$
\sum_{n\in\ZZ}c_ne_n=\sum_{-\infty}^\infty c_n(f)\,e^{inx}.
$$
:::

:::question
(Fourier, Dirichlet, Fejér, …) Does the Fourier series accurately represent $f$? (E.g. does it converge? To $f$?)
:::

:::definition
**Trigonometric polynomials** are the vector space of *finite* linear combinations of the $e_n$.
:::

Clearly this is an algebra, complex conjugation-invariant, and it separates points of $S^1$, which is compact. Hence by Stone–Weierstrass, trigonometric polynomials are **dense** in $(C^0(S^1),\|\cdot\|_\infty)$… hence also in the $L^2$ norm, since
$$
\|f\|_{L^2}=\left(\frac1{2\pi}\int|f|^2\,dx\right)^{1/2}\le\sup|f|.
$$

The **$n$th Fourier sum**
$$
f_n=s_n(f)=\sum_{-n}^nc_ke^{ikx}=\sum_{-n}^n\langle e_k,f\rangle e_k
$$
is the orthogonal projection of $f$ onto $V_n=\operatorname{span}(e_{-n},\dots,e_n)$ for $\langle\cdot,\cdot\rangle$. Indeed:
$$
\langle e_j,f_n\rangle=\sum_{k=-n}^nc_k\langle e_j,e_k\rangle=c_j=\langle e_j,f\rangle,\qquad\text{so}\qquad\langle e_j,f-f_n\rangle=0\quad\forall\,-n\le j\le n.
$$
Thus for all $g\in V_n$, $\|f-f_n\|_{L^2}\le\|f-g\|_{L^2}$: $f_n$ is the point of $V_n$ closest to $f$ for $\|\cdot\|_{L^2}$. (This follows from $(f-f_n)\perp V_n$:
$$
(f-g)=\underbrace{(f-f_n)}_{\perp V_n}+\underbrace{(f_n-g)}_{\in V_n}\ \Rightarrow\ \|f-g\|^2=\|f-f_n\|^2+\|f_n-g\|^2\ge\|f-f_n\|^2.)
$$

:::theorem Parseval
Let $f\in C^0(S^1)$, $c_n=\langle e_n,f\rangle$ its Fourier coefficients, and $f_n=\sum_{-n}^nc_ke_k$ the partial sums. Then:

1. $f_n\to f$ in $L^2$, i.e. $\|f_n-f\|_{L^2}^2=\frac1{2\pi}\int|f(x)-f_n(x)|^2\,dx\to0$ as $n\to\infty$.
2. $\displaystyle\sum_{n\in\ZZ}|c_n|^2=\|f\|_{L^2}^2=\frac1{2\pi}\int_0^{2\pi}|f(x)|^2\,dx$ (in particular $\sum|c_n|^2$ converges, so $c_n\to0$ as $|n|\to\infty$).
:::

:::proof
(1) Since the trigonometric polynomials $=\bigcup_nV_n$ are dense in $(C^0(S^1),\|\cdot\|_{L^2})$, $\forall\eps>0\ \exists N$ such that $\exists g\in V_N$ with $\|f-g\|_{L^2}<\eps$. Now for $n\ge N$, $g\in V_N\subset V_n$ and $f_n$ is the closest point to $f$, so $\|f-f_n\|_{L^2}\le\|f-g\|_{L^2}<\eps$. This shows $f_n\to f$ in $L^2$.

(2) Since $f_n\in V_n$ and $f-f_n\in V_n^\perp$, $\|f\|_{L^2}^2=\|f_n\|_{L^2}^2+\|f-f_n\|_{L^2}^2$, where $\|f_n\|_{L^2}^2=\left\|\sum_{-n}^nc_ke_k\right\|^2=\sum_{-n}^n|c_k|^2$ by orthonormality, and $\|f-f_n\|_{L^2}^2\to0$ by the first part.
:::

:::corollary
If $f,g\in C^0(S^1)$ have the same Fourier series, then $\frac1{2\pi}\int|f-g|^2\,dx=\sum|c_n(f)-c_n(g)|^2=0$, hence $f=g$.
:::

The fact that $f_n\to f$ in $L^2$ is the best approximation (in the $L^2$ norm) of $f$ by trigonometric polynomials, and that trigonometric polynomials are dense in $\|\cdot\|_\infty$ (so there are trigonometric polynomials $\to f$ uniformly), makes one hope that $f_n\to f$ uniformly, or at least pointwise… alas not!

**Fact**: there exists $f\in C^0(S^1)$ such that the Fourier series of $f$ does not converge ($s_n(f)(0)$ unbounded!). (But the example is hard to construct.)

:::theorem Dirichlet
If $f$ is $C^1$ then $f_n=s_n(f)\to f$ uniformly.
:::

The proof uses convolution, redefined for periodic functions as
$$
(f*g)(x)=\frac1{2\pi}\int_0^{2\pi}f(t)g(x-t)\,dt,
$$
and noting that
$$
c_ne_n(x)=\frac1{2\pi}\left(\int f(t)e^{-int}\,dt\right)e^{inx}=(f*e_n)(x).
$$
So
$$
s_n(f)=\sum_{-n}^nc_ke_k=f*\Big(\sum_{-n}^ne_k\Big)=f*D_n,
$$
where
$$
D_n(x)=\sum_{-n}^ne^{ikx}=\frac{e^{i(n+\frac12)x}-e^{-i(n+\frac12)x}}{e^{ix/2}-e^{-ix/2}}=\frac{\sin\left(n+\frac12\right)x}{\sin\left(\frac x2\right)}
$$
is the **Dirichlet kernel**. Dirichlet’s proof studies this convolution for $f\in C^1$ to prove uniform convergence.

The fact that convergence can sometimes fail makes it remarkable that for all $f\in C^0$, $f$ can be recovered from the partial sums $s_n(f)=f_n=\sum_{-n}^nc_ke^{ikx}$…

:::theorem Fejér
If $f\in C^0(S^1)$ then
$$
\frac{s_0(f)+\dots+s_{n-1}(f)}n
$$
converges uniformly to $f$.
:::

The reason is that this process amounts to convolution with the **Fejér kernel** $F_n=\dfrac{D_0+\dots+D_{n-1}}n$, which actually approximates the identity (in the sense seen above), unlike $D_n$.
:::
