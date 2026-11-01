---
course: math-55a
chapter: 4
section: 17
title: Hermitian Inner Products, the Complex Spectral Theorem, and Classifying Bilinear Forms
date: 2025-10-10
lecturer: Denis Auroux
source-pages: A17-1, A17-2, A17-3, A17-4, A17-5
---

:::readings Review sessions and handouts
- Christoph von Pezold, [Week 6 review, part 1: bilinear forms, orthogonality and inner products](/notes/math-55a/readings/review-week-6-part-1.pdf)
- Iz Chen, [Week 6 review, part 2: orthogonal and self-adjoint operators](/notes/math-55a/readings/review-week-6-part-2.pdf)
:::

We’ve studied real inner product spaces and seen that a self-adjoint or orthogonal operator can be expressed in a particularly simple form (diagonal, resp. block diagonal) in a well-chosen orthonormal basis.

## Hermitian inner products

Now on to the analogue of all this for complex vector spaces: **Hermitian inner products**.

As previously noted, a bilinear form on a complex vector space $V\times V\to\CC$ can’t be positive definite, since $b(iv,iv)=-b(v,v)$. *Solution:* abandon $\CC$-linearity in one of the two variables, and only require “conjugate linear”.

:::definition
A **Hermitian form** on a complex vector space $V$ is $H:V\times V\to\CC$ such that $H$ is **sesquilinear**:

- $H(u+v,w)=H(u,w)+H(v,w)$, $\ H(u,v+w)=H(u,v)+H(u,w)$;
- $H(u,\lambda v)=\lambda H(u,v)$, however $H(\lambda u,v)=\bar\lambda H(u,v)$ (conjugate: $\overline{a+ib}=a-ib$);

and $H$ is **conjugate-symmetric**: $H(u,v)=\overline{H(v,u)}$.
:::

:::note
**Caution:** this is as in Artin. Axler has $\bar\lambda$ for the *second* input.
:::

Conjugate symmetry $\implies H(u,u)\in\RR$.

:::definition
A **Hermitian inner product** is a positive definite (conjugate-symmetric) Hermitian form, i.e. $H(u,u)\geq 0$ for all $u$, and $H(u,u)=0\iff u=0$.
:::

:::remark
$\varphi_H:V\to V^*$, $u\mapsto H(u,\cdot)$, is now a *complex antilinear* map $V\to V^*$! ($\varphi(\lambda u)=\bar\lambda\varphi(u)$.)
:::

Still, various things carry over from the real case:

- $H$ positive definite $\implies$ $H$ nondegenerate (i.e. $\ker\varphi_H=0$).
- Given a subspace $W\subset V$, its orthogonal $W^\perp=\{v\in V\mid H(v,w)=0\ \forall w\in W\}$ is also a subspace, and $V=W\oplus W^\perp$. ($\CC$-antilinearity doesn’t affect $W^\perp$ being a $\CC$-subspace; positive definite implies $W\cap W^\perp=\{0\}$.)

:::definition
An **orthonormal basis** of $V$ with a Hermitian inner product is a basis $\{e_i\}$ such that
$$H(e_i,e_j)=\delta_{ij}=\begin{cases}1&\text{if } i=j\\0&\text{else.}\end{cases}$$
:::

:::theorem
$V$ admits an orthonormal basis.
:::

Same proof as in the real case (by induction on $\dim V$: first pick $v_1$ with $\|v_1\|^2=H(v_1,v_1)=1$, then take an orthonormal basis $v_2,\dots,v_n$ of $\operatorname{span}(v_1)^\perp$) (or Gram–Schmidt…).

:::corollary
Every finite-dimensional Hermitian inner product space is isomorphic to $\CC^n$ with the standard Hermitian inner product,
$$H(z,w)=\sum_j\bar z_jw_j.$$
:::

In matrix form: $H(z,w)=z^*w$, where $z^*=\bar z^T=(\bar z_1\ \cdots\ \bar z_n)$ is the conjugate transpose.

:::example Not-quite-example (Fourier series)
Let $V=C^\infty(S^1,\CC)$, the infinitely differentiable functions $S^1=\RR/\ZZ\to\CC$ ($\leftrightarrow$ 1-periodic functions $\RR\to\CC$). Define
$$\langle f,g\rangle=\int_{S^1}\overline{f(t)}\,g(t)\,dt.$$
Then the functions $f_n(t)=e^{2\pi int}$ are orthogonal, $\langle f_n,f_m\rangle=\delta_{m,n}$.

$\{f_n\}_{n\in\ZZ}$ is not a basis of $V$; their span $W\subset V$ is the space of trigonometric polynomials. We can think of Fourier series as orthogonal projection onto $W$. (This will make more sense with some analysis… or even better, Hilbert spaces.)
:::

## Adjoint, self-adjoint, unitary, normal

:::definition
Let $V$ be a complex vector space, $H$ a Hermitian inner product, $T:V\to V$.

- The **adjoint** of $T$ is $T^*:V\to V$ such that $H(T^*v,w)=H(v,Tw)$ for all $v,w$ ($\iff H(Tv,w)=H(v,T^*w)$ for all $v,w$).
- $T$ is **self-adjoint** if $T^*=T$, i.e. $H(v,Tw)=H(Tv,w)$ for all $v,w\in V$.
- $T$ is **unitary** if $H(Tv,Tw)=H(v,w)$ for all $v,w\in V$, i.e. $T^*=T^{-1}$.
- $T$ is **normal** if $TT^*=T^*T$.
:::

- Unitary operators form a **subgroup** $U(V,H)\subset\Aut(V)$ ($U(n)\subset GL(n,\CC)$). Note $U(1)\simeq S^1$ (multiplication by any complex number of norm 1).
- **Note:** in an orthonormal basis, $\mathcal M(T^*)=\mathcal M(T)^*\ \big(=\overline{\mathcal M(T)}^t\big)$.
  This is because $H(Tv,w)=(Mv)^*w=v^*M^*w=H(v,T^*w)$ for all $v$.
  (Equivalently: the $ij$-entry of $\mathcal M(T)$ is the $e_i$-component of $Te_j$, i.e.
  $$H(e_i,Te_j)=H(T^*e_i,e_j)=\overline{H(e_j,T^*e_i)}=\text{conjugate of the } ji\text{-entry of }\mathcal M(T^*).)$$

So: self-adjoint complex operators are described by **Hermitian matrices**, $a_{ij}=\overline{a_{ji}}$.

## The complex spectral theorem

:::theorem The complex spectral theorem
Let $V$ be a finite-dimensional complex vector space, $H:V\times V\to\CC$ a Hermitian inner product, and $T:V\to V$ self-adjoint ($T^*=T$) or unitary ($T^*=T^{-1}$) or normal ($TT^*=T^*T$). Then there exists an orthonormal basis consisting of eigenvectors of $T$, i.e. $T$ is diagonalizable in an orthonormal basis, with eigenvalues $\in\RR$ if self-adjoint / $\in S^1$ (unit circle) if unitary.
:::

:::proof
Let $v_1\in V$ be an eigenvector (it exists since $\CC$ is algebraically closed), $Tv_1=\lambda_1v_1$, $\|v_1\|=1$.

*Claim 1:* $v_1$ is also an eigenvector of $T^*$, $T^*v_1=\bar\lambda_1v_1$. Indeed (writing $\lambda=\lambda_1$),
$$\begin{aligned}
\|(T^*-\bar\lambda)v_1\|^2&=H\big((T^*-\bar\lambda)v_1,(T^*-\bar\lambda)v_1\big)\\
&=H\big(v_1,(T-\lambda)(T^*-\bar\lambda)v_1\big)&&(\text{since }(T-\lambda)^*=T^*-\bar\lambda)\\
&=H\big(v_1,(T^*-\bar\lambda)\underbrace{(T-\lambda)v_1}_{0}\big)&&(T,T^*\text{ commute}\implies\text{so do }T-\lambda,\ T^*-\bar\lambda)\\
&=0.
\end{aligned}$$

*Claim 2:* $W=\operatorname{span}(v_1)^\perp$ is invariant under $T$ and $T^*$. Indeed, $w\in W\implies$
$$\begin{aligned}
H(Tw,v_1)&=H(w,T^*v_1)=\bar\lambda H(w,v_1)=0\implies Tw\in W,\\
H(T^*w,v_1)&=H(w,Tv_1)=\lambda H(w,v_1)=0\implies T^*w\in W,
\end{aligned}$$
and $(T_{|W})^*=(T^*)_{|W}$ ($H(w_1,Tw_2)=H(T^*w_1,w_2)$ for all $w_1,w_2\in W$ ✓).

So, proof by induction: take $\{v_1\}\cup\{\text{orthonormal basis of } W=v_1^\perp \text{ diagonalizing } T_{|W}\}$.
:::

## Back to nondegenerate symmetric bilinear forms

Back to (not necessarily definite) **nondegenerate symmetric bilinear forms**:

Suppose $V$ is a finite-dimensional vector space over $k$ and $B:V\times V\to k$ is a nondegenerate symmetric bilinear form. Can we classify such $B$?

:::remark
$Q(v)=B(v,v):V\to k$ is something called a **quadratic form**. We can recover $B$ from $Q$ if $\operatorname{char}(k)\neq 2$:
$$B(u,v)=\tfrac12\big(Q(u+v)-Q(u)-Q(v)\big).$$
:::

**Classification approach:** find some vector $v$ such that $B(v,v)\neq 0$, and then look at $\operatorname{span}(v)^\perp$
($\operatorname{span}(v)^\perp=\ker(\varphi_B(v):V\to k)$, so $V=\operatorname{span}(v)\oplus\operatorname{span}(v)^\perp$ when $B(v,v)\neq0$).
Then study $B_{|\operatorname{span}(v)^\perp}$…

:::proposition
Over $\CC$, any nondegenerate symmetric bilinear form admits a basis $e_1,\dots,e_n$ such that
$$B(e_i,e_j)=\delta_{ij}=\begin{cases}0& i\neq j\\1&i=j.\end{cases}$$
:::

:::note
**Caution:** Hermitian forms are what most “normal” people care about, however.
:::

:::proof
- Since $B(u,v)\neq0\implies$ one of $B(u,u)$, $B(v,v)$, $B(u+v,u+v)$ is nonzero, $B$ nonzero implies the existence of $v$ such that $B(v,v)\neq0$.
- Let $e_1=B(v,v)^{-1/2}v$. Then consider $\operatorname{span}(e_1)^\perp=W$. We have $\operatorname{span}(e_1)\cap\operatorname{span}(e_1)^\perp=\{0\}$ since $B(e_1,e_1)\neq0$, and $\dim W=\dim\ker B(e_1,\cdot)=\dim V-1\implies V=\operatorname{span}(e_1)\oplus W$.
- The restriction of $B$ to $W$ is nondegenerate because the matrix of $B$ in the basis $\{e_1,\text{some basis of }W\}$,
  $$\left(\begin{array}{c|c}1&0\\\hline 0&B_{|W}\end{array}\right),$$
  is invertible (rank $n$) iff $B_{|W}$ is invertible (rank $n-1$).
- Complete the proof by induction on dimension (assuming the result holds in dimension $n-1$, take $e_1$ + a basis of $W$ such that $B_{|W}(e_j,e_k)=\delta_{jk}$).
:::

:::proposition
Over $\RR$, any nondegenerate symmetric bilinear form admits a basis such that
$$B(e_i,e_j)=\begin{cases}0&i\neq j\\\pm1&i=j,\end{cases}$$
i.e. we can assume
$$B\Big(\sum_{i=1}^nx_ie_i,\sum_{i=1}^ny_ie_i\Big)=\sum_{i=1}^kx_iy_i-\sum_{i=k+1}^nx_iy_i,\qquad
B=\begin{pmatrix}I_k&0\\0&-I_{n-k}\end{pmatrix}.$$
:::

We say $B$ has **signature** $(k,n-k)$. (The case $(n,0)$ = positive definite.)
($k$ = the maximal dimension of a subspace $W$ such that $B_{|W}$ is positive definite, $n-k$ = the maximal dimension of a subspace such that $B_{|W}$ is negative definite.)

:::proof
Same as in the complex case, except we can’t always scale to $B(e_1,e_1)=1$; instead we can only force $B(e_1,e_1)=\pm1$.
:::

Over $\QQ$, things get *much* harder: number theory enters!

:::example
$B=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, $Q(v)=B(v,v)=v_1^2+v_2^2$. There is no $v=(v_1,v_2)\in\QQ^2$ such that $B(v,v)=v_1^2+v_2^2=3$:
clearing denominators, we get $n_1^2+n_2^2=3m^2$ with $n_1,n_2,m\in\ZZ$ with no common factor (in particular not all even). However $n_1^2+n_2^2\equiv0,1,2\bmod 4$ and $3m^2\equiv0,3\bmod4$, so necessarily all are even: contradiction.

Whereas $B'=\begin{pmatrix}2&0\\0&1\end{pmatrix}$ does have $v$ such that $B'(v,v)=3$ ($v=(1,1)$).
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 18](/notes/math-55a/18-symplectic-forms-and-tensor-products)
**The skew-symmetric case**

What about the **skew-symmetric** case? (Suppose $\operatorname{char}(k)\neq2$.)

We can still find a “**standard basis**” for $V$ a finite-dimensional vector space with $B:V\times V\to k$ a nondegenerate skew-symmetric bilinear form (a.k.a. a **symplectic form**), but the process is slightly different since $B(v,v)=0$ for all $v\in V$.

Instead: pick any nonzero $e_1\in V$; since $B$ is nondegenerate, $B(e_1,\cdot):V\to k$ is nonzero, so there exists $f_1\in V$ such that $B(e_1,f_1)\neq0$, and we can make it $=1$ by scaling $f_1$.
Now we find $\operatorname{span}(e_1,f_1)\cap\operatorname{span}(e_1,f_1)^\perp=\{0\}$ (if $v=ae_1+bf_1$ has $B(v,e_1)=B(v,f_1)=0$ then $a=b=0$), so
$$V=\operatorname{span}(e_1,f_1)\oplus\operatorname{span}(e_1,f_1)^\perp.$$
Then study the restriction of $B$ to the latter subspace (induction on dimension).

:::proposition
Let $V$ be finite-dimensional over $k$, $\operatorname{char}(k)\neq2$, and $B$ a nondegenerate skew-symmetric bilinear form $V\times V\to k$. Then $\dim V$ is even, and $V$ has a basis $(e_1,f_1,\dots,e_n,f_n)$ such that
$$B(e_i,e_j)=B(f_i,f_j)=0,\qquad B(e_i,f_j)=\delta_{ij}=-B(f_j,e_i),$$
i.e. the matrix of $B$ is block diagonal:
$$\begin{pmatrix}
\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}&&\\
&\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}&\\
&&\ddots
\end{pmatrix}.$$
:::

The group of linear transformations preserving $B$ is called the **symplectic group** $Sp(V,B)\simeq Sp(2n,k)$.

**Next time:** tensor product & multilinear algebra. This gives us a way to think of bilinear (or *multilinear*) maps $V_1\times V_2\to W$ as linear maps from a new vector space $V_1\otimes V_2$.
:::
