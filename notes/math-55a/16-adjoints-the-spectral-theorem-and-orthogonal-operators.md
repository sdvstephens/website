---
course: math-55a
chapter: 4
section: 16
title: Adjoints, the Spectral Theorem, and Orthogonal Operators
date: 2025-10-08
lecturer: Denis Auroux
source-pages: A16-1, A16-2, A16-3, A16-4, A16-5
---

**Recall.** A (finite-dimensional!) **inner product space** is an $\RR$-vector space $V$ together with a symmetric positive definite bilinear form $\langle\cdot,\cdot\rangle : V\times V\to\RR$:

$$\langle u,v\rangle=\langle v,u\rangle,\qquad \langle u,u\rangle>0\ \ \forall u\neq 0$$

(and then we set $\|u\|^2=\langle u,u\rangle$, etc.).

We’ve seen that there exists an orthonormal basis:

$$\langle e_i,e_j\rangle=\begin{cases}1 & i=j\\ 0 & i\neq j\end{cases}\qquad (\|e_i\|=1,\ e_i\perp e_j\ \forall i\neq j),$$

so $(V,\langle\cdot,\cdot\rangle)\cong(\RR^n,\text{dot product})$:

$$\Big\langle \sum x_ie_i,\sum y_je_j\Big\rangle=\sum x_iy_i=X^TY\quad\text{for } X=\begin{pmatrix}x_1\\ \vdots\\ x_n\end{pmatrix},\ Y=\begin{pmatrix}y_1\\ \vdots\\ y_n\end{pmatrix}.$$

## Operators on inner product spaces

Let $(V,\langle\cdot,\cdot\rangle)$ be an inner product space.

:::definition
Say $T:V\to V$ is an **orthogonal operator** if it respects the inner product, i.e.
$$\langle Tu,Tv\rangle=\langle u,v\rangle\quad\forall u,v\in V.$$
:::

(In other terms, $T$ “preserves lengths and angles”.)

:::remark Remarks
1. Orthogonal operators map orthonormal bases to orthonormal bases!
   $$\langle Te_i,Te_j\rangle=\langle e_i,e_j\rangle=\begin{cases}1 & \text{if } i=j\\ 0&\text{otherwise.}\end{cases}$$
   In particular, orthogonal operators are always invertible!

2. If $T$ is orthogonal then $T^{-1}$ is orthogonal:
   $$\langle T^{-1}u,T^{-1}v\rangle\underset{T\text{ orthogonal}}{=}\langle T(T^{-1}u),T(T^{-1}v)\rangle=\langle u,v\rangle\quad\forall u,v.$$
   If $T_1,T_2$ are orthogonal then so is $T_1T_2$ (check!).
   Hence: **orthogonal operators form a subgroup of $\Aut(V)$.**

3. If $M$ is the matrix representing $T$ in an orthonormal basis, then $M^TM=I$.
   Indeed, the entries of $M^TM$ are the dot products of the columns of $M$!
   $$(M^TM)_{ij}=\sum_k M^T_{ik}M_{kj}=\sum_k M_{ki}M_{kj}=\langle M(e_i),M(e_j)\rangle=\langle e_i,e_j\rangle.$$
:::

## Adjoint operator

:::definition
Let $T:V\to V$ be a linear operator on an inner product space $(V,\langle\cdot,\cdot\rangle)$. There exists a unique linear operator $T^*:V\to V$, called the **adjoint** of $T$, such that
$$\langle v,T(w)\rangle=\langle T^*(v),w\rangle\quad\forall v,w\in V.$$
:::

Indeed: given $v\in V$, the linear functional
$$V\to\RR,\qquad w\mapsto\langle v,T(w)\rangle$$
is, using nondegeneracy of $\langle\cdot,\cdot\rangle$, given by the inner product of $w$ with some element of $V$, which we call $T^*(v)$; then check this has linear dependence on $v$.

Equivalently: $\langle\cdot,\cdot\rangle$ defines an isomorphism $\varphi:V\xrightarrow{\ \sim\ }V^*$. Then $T^*$ is the composition

$$\begin{aligned}
V\ \xrightarrow{\ \varphi\ }\ &V^*\ \xrightarrow{\ T^t\ }\ V^*\ \xrightarrow{\ \varphi^{-1}\ }\ V\\
v\ \longmapsto\ &\langle v,\cdot\rangle\ \longmapsto\ \langle v,T(\cdot)\rangle=\langle T^*(v),\cdot\rangle\ \longmapsto\ T^*(v).
\end{aligned}$$

:::proposition
1. $\ker(T^*)=\im(T)^\perp$;
2. $\im(T^*)=\ker(T)^\perp$.
:::

:::proof
(1) $T^*u=0\iff\langle T^*u,v\rangle=0\ \forall v\in V\iff\langle u,Tv\rangle=0\ \forall v\in V\iff u\perp\im T$. Similarly for (2).
:::

:::definition
$T:V\to V$ is **self-adjoint** if $T^*=T$ (i.e. $\langle v,Tw\rangle=\langle Tv,w\rangle$ for all $v,w$).
:::

In an orthonormal basis $(e_1,\dots,e_n)$ of $V$, $\langle v,w\rangle=v^tw$ (the transpose gives a row vector, $w$ is a column vector). So if the matrix of $T$ is $M$ and that of $T^*$ is $N$,

$$\left.\begin{aligned}
\langle v,T(w)\rangle&=v^tMw\\
\langle T^*(v),w\rangle&=(Nv)^tw=v^tN^tw
\end{aligned}\right\}\implies\text{comparing: } N^t=M,\ \text{so } N=M^t.$$

Hence: **$\mathcal M(T^*)=\mathcal M(T)^t$ in an orthonormal basis; $T$ is self-adjoint $\iff$ $\mathcal M(T)$ is symmetric.**

Note that self-adjoint operators ($\sim$ symmetric matrices) need not be invertible. For example $0$ is a self-adjoint operator…

:::proposition
If $T$ is self-adjoint and $S\subset V$ is an invariant subspace ($T(S)\subset S$), then $S^\perp$ is also an invariant subspace ($T(S^\perp)\subset S^\perp$).
:::

:::proof
Let $v\in S^\perp$. Then for all $w\in S$, $T(w)\in S$, so
$$\langle Tv,w\rangle\underset{(T^*=T)}{=}\langle v,Tw\rangle\underset{(v\in S^\perp,\ Tw\in S)}{=}0.$$
Since $\langle Tv,w\rangle=0$ for all $w\in S$, we get $Tv\in S^\perp$.
:::

:::theorem The spectral theorem for real self-adjoint operators
If $T:V\to V$ is self-adjoint then $T$ is diagonalizable, with real eigenvalues. Even more, $T$ can be diagonalized in an orthonormal basis of $(V,\langle\cdot,\cdot\rangle)$!
:::

The proof uses the following key observation:

:::lemma
If $T$ is self-adjoint then for all $a\in\RR_+$, $T^2+a$ is invertible.
:::

:::proof
For all $v\in V-\{0\}$,
$$\begin{aligned}
\langle (T^2+a)v,v\rangle&=\langle T^2v,v\rangle+a\langle v,v\rangle\\
&=\langle Tv,Tv\rangle+a\langle v,v\rangle=\|Tv\|^2+a\|v\|^2>0.
\end{aligned}$$
So $(T^2+a)v\neq 0$. Hence $\ker(T^2+a)=0$.
:::

:::corollary
If $p\in\RR[x]$ is a quadratic without real roots and $T^*=T$, then $p(T)$ is invertible.
:::

:::proof
It is enough to show $T^2+bT+c$ is invertible whenever $b^2-4c<0$. Write
$$T^2+bT+c=\Big(T+\frac b2\Big)^2+a,\qquad a=c-\frac{b^2}{4}>0,\quad T+\frac b2\ \text{self-adjoint},$$
so by the lemma (applied to $T+\frac b2$) this is invertible.
:::

:::proof Proof of the spectral theorem
- First we show the existence of an eigenvector. Pick $v\in V$, $v\neq 0$. Since $v,Tv,\dots,T^nv\in V$ are linearly dependent ($n=\dim V$), there exists a (nonconstant) polynomial such that $(a_nT^n+\dots+a_0)v=0$.
  This doesn’t factor into degree 1 factors over $\RR$ like it would over $\CC$, but it factors into linear and quadratic factors:
  $$\prod_i(T-\lambda_i)\ \prod_j(T^2+b_jT+c_j)\ v=0,$$
  where the $\lambda_i$ are the real roots, and the $T^2+b_jT+c_j$ are irreducible (no real roots), coming from pairs of complex conjugate roots.
  At least one of these operators must have a nontrivial kernel (else their product is invertible, but $v\mapsto 0$!). By the previous corollary, each $T^2+b_jT+c_j$ is invertible, so in fact some $T-\lambda_i$ must have a nontrivial kernel, hence an eigenvector!

- Now, diagonalization: we know there’s an eigenvector $v_1\in V$ with eigenvalue $\lambda_1\in\RR$; scaling $v_1$ if needed we may assume $\|v_1\|=1$.
  Then $S=\operatorname{span}(v_1)\subset V$ is an invariant subspace, hence (by the proposition above) so is $S^\perp$.
  By induction, using the inner product on $S^\perp$ induced by restricting $\langle\cdot,\cdot\rangle$ and observing $T_{|S^\perp}$ is still self-adjoint, there is a basis of $S^\perp$, $(v_2,\dots,v_n)$ (orthonormal if we wish), such that each $v_j$ is an eigenvector of $T$.
  Then $(v_1,\dots,v_n)$ is a basis of $V$ in which $T$ diagonalizes, and we can assume it is orthonormal.
:::

So:
$$\boxed{T\ \text{self-adjoint}\ \leadsto\ \mathcal M(T)=\begin{pmatrix}\lambda_1&&0\\&\ddots&\\0&&\lambda_n\end{pmatrix}\ \text{in a suitable orthonormal basis.}}$$

:::remark
This also implies: eigenvectors of $T$ for distinct eigenvalues are orthogonal! But we already knew this, because
$$Tv=\lambda v,\ Tw=\mu w\implies\lambda\langle v,w\rangle=\langle Tv,w\rangle=\langle v,Tw\rangle=\mu\langle v,w\rangle,$$
so $\lambda\neq\mu\implies v\perp w$.
:::

## Structure of orthogonal transformations

Next: is there an analogous structure result for **orthogonal transformations**??

$$T:V\to V\ \text{orthogonal}\iff\langle Tu,Tv\rangle=\langle u,v\rangle\ \forall u,v\iff T^*=T^{-1}.$$

- In dimension 1: $T$ is multiplication by a scalar, so $T$ orthogonal $\iff T=\pm I$.
- In dimension 2: $T$ orthogonal $\iff$ $T$ is a rotation or a reflection.
  (Given an orthonormal basis $(e_1,e_2)$, $Te_1$ is any unit vector in the unit circle $\{v\in V\mid \|v\|=1\}=\{\cos\theta\,e_1+\sin\theta\,e_2\}$; $Te_2$ is also a unit vector and $\perp Te_1$, so there are 2 possibilities:)
  $$\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}=\text{rotation by }\theta,\qquad
  \begin{pmatrix}\cos\theta&\sin\theta\\ \sin\theta&-\cos\theta\end{pmatrix}=\text{reflection}.$$
  Rotations (other than by $0$ or $\pi$) have no eigenvectors.  Reflections have eigenvalues $\pm1$, with two orthogonal eigenspaces.

**Notation.** For $(V,\langle\cdot,\cdot\rangle)$, we have subgroups
$$SO(V)\subset O(V)\subset GL(V),$$
where $GL(V)$ = invertible linear operators $T:V\to V$; $O(V)$ = orthogonal ones; and $SO(V)$ = the subgroup of orientation-preserving orthogonal transformations: those with $\det=+1$. (In dimension 1: $SO=\{+I\}$; in dimension 2: rotations.)

Since $(V,\langle\cdot,\cdot\rangle)\simeq(\RR^n,\text{std})$ by choosing an orthonormal basis, we usually write $O(\RR^n)=O(n)$, $SO(\RR^n)=SO(n)$.

$SO(n)$ has index 2 in $O(n)$:
$$1\to SO(n)\to O(n)\xrightarrow{\ \det\ }\{\pm1\}\cong\ZZ/2\to 1.$$
$SO(2)\simeq S^1$ (rotations $\leftrightarrow$ angles).

**Recall:** $T:V\to V$ linear operator $\implies$ there exists an invariant subspace $W\subset V$ of dimension 1 or 2. And if $T$ is orthogonal for $\langle\cdot,\cdot\rangle$, then it maps $W^\perp$ to $(T(W))^\perp=W^\perp$.

:::theorem
If $T:V\to V$ is an orthogonal operator on a finite-dimensional inner product space, then $V$ decomposes into a direct sum of orthogonal invariant subspaces
$$V=\bigoplus V_i,\qquad V_i\perp V_j\ \forall i\neq j\ (\text{i.e. } V_i\subset V_j^\perp),\qquad T(V_i)=V_i,$$
of $\dim V_i\in\{1,2\}$, and

- if $\dim V_i=1$ then $T_{|V_i}=\pm I$;
- if $\dim V_i=2$ then $T_{|V_i}$ is either a rotation or a reflection.

(In the latter case, we can further decompose into $\pm1$ eigenspaces, so we can replace reflections by 1-dimensional blocks.)
:::

This gives a very nice way to think about an individual transformation as built from reflections and rotations on individual subspaces, but it’s pretty useless for understanding the composition of two orthogonal transformations (whose invariant subspaces are unrelated).

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L17}}
**Hermitian inner products**

Now on to the analogue of all this for complex vector spaces: **Hermitian inner products**.

As previously noted, a bilinear form on a complex vector space $V\times V\to\CC$ can’t be positive definite, since $b(iv,iv)=-b(v,v)$. Solution: abandon $\CC$-linearity in one of the two variables, and only require “conjugate linear”.

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
:::
