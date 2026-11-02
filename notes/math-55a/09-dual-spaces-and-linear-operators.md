---
course: math-55a
chapter: 3
section: 9
title: Dual Spaces and Linear Operators
date: 2025-09-22
lecturer: Denis Auroux
source-pages: 1-4
---

## Quotient spaces

Let $V$ be a vector space over a field $k$, $U\subset V$ a subspace.

:::definition
The **quotient space** $V/U = \{v+U\}$ is the space of cosets of $U$ in $V$, with addition $(v+U)+(w+U) = (v+w)+U$ and scalar multiplication $a(v+U) = av+U$.
:::

The linear map
$$q : V\to V/U, \qquad v\mapsto v+U$$
is surjective, with kernel $U$. Hence we get an exact sequence
$$0\to U\to V\to V/U\to 0.$$
By the dimension formula ($\dim\ker q+\dim\Img q = \dim V$), we have
$$\dim(V/U) = \dim V-\dim U.$$

:::remark
1. Given a linear map $\varphi: V\to W$, if $U\subset\ker\varphi$ (i.e. $\varphi|_U = 0$), then $\varphi$ factors through $V/U$, i.e. there exists $\bar\varphi: V/U\to W$ such that $\varphi = \bar\varphi\circ q$:

   ![Commutative triangle: phi from V to W factors as q from V to V/U followed by phi-bar from V/U to W](/notes/math-55a/figures/e3-quotient-factorization.svg)

   (Define $\bar\varphi(v+U) = \varphi(v)$; this is independent of the choice of $v$ in the coset.) Conversely, given $\bar\varphi\in\Hom(V/U,W)$, $\varphi = \bar\varphi\circ q: V\to W$ has $U\subset\ker\varphi$. Hence
   $$\{\varphi\in\Hom(V,W)\mid U\subset\ker\varphi\}\cong\Hom(V/U,W).$$
2. There is a bijection
   $$\{\text{subspaces of } V \text{ containing } U\}\longleftrightarrow\{\text{subspaces of } V/U\},$$
   $$W\subset V\ (W\supset U)\longmapsto W/U = \{w+U \mid w\in W\}.$$
   Conversely, $\overline{W}\subset V/U\longmapsto q^{-1}(\overline{W})\subset V$ (and $U = q^{-1}(0)\subset q^{-1}(\overline{W})$ since $0\in\overline{W}$).
:::

## Dual spaces

Let $V$ be a vector space over a field $k$.

:::definition
The **dual vector space** is the space of **linear functionals** on $V$, i.e. linear maps $V\to k$:
$$V^* = \Hom(V,k) = \{\text{linear maps } \ell: V\to k\}.$$
:::

:::example
If $V = k^n = \{(x_1,\dots,x_n)\mid x_i\in k\}$, any tuple $(a_1,\dots,a_n)$, $a_i\in k$, determines a map
$$\ell_a: k^n\to k,\qquad \ell_a(x_1,\dots,x_n) = \sum a_ix_i .$$
Conversely, let $e_i$ be the standard basis of $k^n$. Given $\ell: k^n\to k$, let $a_i = \ell(e_i)$; then
$$\ell(x_1,\dots,x_n) = \ell\Big(\sum x_ie_i\Big) = \sum a_ix_i,$$
i.e. $\ell = \ell_a$. So
$$(k^n)^* = \{(a_1,\dots,a_n)\mid a_i\in k\}\cong k^n .$$
:::

More generally, given a *finite-dimensional* $V$ and a basis $\{e_1,\dots,e_n\}$, any linear map $\ell: V\to k$ is determined by the values $\ell(e_i)$, so we get an isomorphism
$$V^*\simeq k^n,\qquad \ell\mapsto\big(\ell(e_1),\dots,\ell(e_n)\big).$$
Equivalently, we get a basis of $V^*$ consisting of the linear functionals $e_1^*,\dots,e_n^*$ such that $e_i^*(e_i) = 1$ and $e_i^*(e_j) = 0$ for $j\ne i$. (Then $\ell = \sum_{i=1}^n\ell(e_i)\,e_i^*$!) This is called the **dual basis**!

However, there is *not* a natural map $V\to V^*$, despite the above about bases. Each element $e_i^*$ of the dual basis depends not just on $e_i$, but on *all* the $e_j$’s. There’s no such thing as “the dual of a vector”.

On the other hand, we do have a natural map (“evaluation”)
$$\mathrm{ev} : V\longrightarrow (V^*)^*,\qquad v\longmapsto \mathrm{ev}_v : V^*\to k,\ \ \ell\mapsto\ell(v).$$

If $V$ is finite-dimensional, then by working in the basis $\{e_1,\dots,e_n\}$, the dual basis $\{e_1^*,\dots,e_n^*\}$, and the double dual basis $\{e_1^{**},\dots,e_n^{**}\}$, we see that $e_i^{**}(e_j^*) = e_j^*(e_i)$ ✓, and so $\mathrm{ev}(e_i) = e_i^{**}$; hence $\mathrm{ev}$ is an isomorphism. Thus:

:::proposition
If $V$ is finite-dimensional, then
$$V\xrightarrow{\ \cong\ }V^{**},\qquad v\mapsto\big(\ell\mapsto\ell(v)\big)$$
is an isomorphism.
:::

When $V$ is infinite-dimensional, $\mathrm{ev}: V\to V^{**}$ is injective, but *not* an isomorphism! The reason is: assume $V$ has a basis $\{e_i\}_{i\in I}$, so every element of $V$ is uniquely $\sum_{i\in I}x_ie_i$ with only finitely many nonzero $x_i$ ($V\simeq\bigoplus_{i\in I}k\cdot e_i$). Then for all $(a_i)_{i\in I}\in\prod_{i\in I}k$,
$$\ell_a : V\to k,\qquad \sum x_ie_i\mapsto\sum x_ia_i$$
is a well-defined element of $V^*$, characterized by $\ell_a(e_i) = a_i$ for all $i\in I$.

So $V^*\simeq\prod_{i\in I}k$, which is larger, and the linear functionals $e_i^*$ ($a_i = 1$, $a_j = 0$ for all $j\ne i$) do not span $V^*$. (We can complete them to a basis via Zorn’s lemma.) A similar enlargement happens again when passing from $V^*$ to $V^{**}$.

## Annihilators

:::definition
The **annihilator** of a subspace $U\subset V$ is
$$\operatorname{Ann}(U) = \{\ell: V\to k \mid \ell|_U = 0\}\subset V^* .$$
(This is a subspace of $V^*$.)
:::

- The restriction map $V^*\to U^*$, $\ell\mapsto\ell|_U$, is surjective with kernel $\operatorname{Ann}(U)$, so we have an exact sequence
  $$0\to\operatorname{Ann}(U)\to V^*\to U^*\to 0, \qquad \ell\mapsto\ell|_U .$$
  This in turn implies $V^*/\operatorname{Ann}(U)\simeq U^*$.
- Also, we’ve seen above that $\{\ell\in\Hom(V,k)\mid U\subset\ker\ell\}\simeq\Hom(V/U,k)$. Hence
  $$\operatorname{Ann}(U)\simeq(V/U)^* .$$
- Either way, this implies
  $$\dim\operatorname{Ann}(U) = \dim V-\dim U .$$

## The transpose of a linear map

:::definition
Given a linear map $\varphi: V\to W$, the **transpose**, or **dual**, of $\varphi$, $\varphi^*: W^*\to V^*$, is defined as follows: given a linear functional $\ell: W\to k$, composing with $\varphi: V\to W$ gives a linear map $\ell\circ\varphi: V\to k$. Thus
$$\varphi^* : W^*\longrightarrow V^*,\qquad \ell\longmapsto\varphi^*(\ell)\coloneqq\ell\circ\varphi .$$
(Check: $\varphi^*$ is linear.)
:::

Check:

- Given a basis $(e_i)$ of $V$, elements of $V$ are represented by column vectors $X$, and elements of $V^* = \Hom(V,k)$ are represented by row vectors $Y$. Applying a linear functional $\ell\in V^*$ to a vector $v\in V$ corresponds to $YX\in k$.
- If $\mathcal{M}(\varphi,(e_i),(f_j)) = A$, then
  $$\mathcal{M}(\varphi^*,(f_j^*),(e_i^*)) = A^T,\ \text{the transpose matrix.}$$
  This is because: given $\ell\in W^*$ and $v\in V$, $\ell(\varphi(v)) = (\varphi^*(\ell))(v) = YAX$, so $\varphi^*$, viewed as an operation on row vectors, is $Y\mapsto YA$. Meanwhile the dual bases give a description of elements of $V^*$, $W^*$ by column vectors, which are the transposes of the row vectors. The claim then follows since $\varphi^*\ell$ as a column vector is $(YA)^T = A^TY^T$.

:::proposition
(In the finite-dimensional case)
- $\varphi$ is injective iff $\varphi^*$ is surjective;
- $\varphi$ is surjective iff $\varphi^*$ is injective.
:::

This follows from:

:::proposition
1. $\ker(\varphi^*) = \operatorname{Ann}(\Img\varphi)$ $\big({=}\{\ell\in W^*\mid\ell|_{\Img\varphi} = 0\}\big)$.
2. $\Img(\varphi^*) = \operatorname{Ann}(\ker\varphi)$, assuming finite dimension.
:::

:::proof
1. $\ell\in\operatorname{Ann}(\Img\varphi)\iff\ell(\varphi(v)) = 0\ \forall v\in V\iff\varphi^*(\ell) = \ell\circ\varphi = 0\iff\ell\in\ker\varphi^*$.
2. If $\ell' = \varphi^*(\ell)\in\Img(\varphi^*)$, then $\ell' = \ell\circ\varphi$, so $\ell'|_{\ker\varphi} = 0$. So $\Img(\varphi^*)\subset\operatorname{Ann}(\ker\varphi)$. The dimension formula and (1) imply $\rank(\varphi^*) = \rank(\varphi)$, hence the inclusion is an equality.
:::

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L10}}
**Linear operators**

A **linear operator** on $V$ (aka **endomorphism** of $V$) is a linear map $\varphi: V\to V$.

**Notation:** $\End(V) = \Hom(V,V)$.

- When using a basis to express $\varphi\in\Hom(V,V)$ by a (square) matrix, we want to use the same basis on each side: $A = \mathcal{M}(\varphi,(e_i),(e_i))$ transforms by $P^{-1}AP$.
- New thing: we can *compose* linear operators with each other, $\varphi\psi = \varphi\circ\psi: V\to V$, or with themselves, $\varphi^n = \varphi\circ\cdots\circ\varphi$, or even apply polynomials:
  $$p = \sum a_nx^n\ \rightsquigarrow\ p(\varphi) = \sum a_n\varphi^n : V\to V .$$
  So $\Hom(V,V)$ is a (noncommutative) **ring**.
- Given vector spaces $V_1,V_2$ and linear operators $\varphi_i: V_i\to V_i$, we can define
  $$\varphi = \varphi_1\oplus\varphi_2 : V_1\oplus V_2\to V_1\oplus V_2,$$
  an operator on $V = V_1\oplus V_2$. The operator $\varphi$ leaves the subspaces $V_1,V_2\subset V$ **invariant**: $\varphi(V_i)\subset V_i$; and working in a basis of $V$ such that $e_1,\dots,e_m\in V_1$, $e_{m+1},\dots,e_n\in V_2$, the matrix of $\varphi$ is **block diagonal**:
  $$\left(\begin{array}{c|c}\varphi_1 & 0\\ \hline 0 & \varphi_2\end{array}\right).$$
  Conversely, if $V = V_1\oplus V_2$ and $\varphi(V_i)\subset V_i$, then $\varphi$ is of this form.

  More generally, if we only assume $\varphi: V\to V$ and $V_1\subset V$ is invariant ($\varphi(V_1)\subset V_1$) but not necessarily $V_2$, then the matrix of $\varphi$ would be **block triangular**:
  $$\left(\begin{array}{c|c}\varphi|_{V_1} & *\\ \hline 0 & *\end{array}\right).$$

So: a typical way to study $\varphi: V\to V$ is to look for *invariant subspaces*.

- If $U\subset V$ is invariant and $\dim U = 1$ (so $U = k\cdot v$ for some $v\in V$), then necessarily $\varphi(v) = \lambda v$ for some $\lambda\in k$.

:::definition
An **eigenvector** of $\varphi: V\to V$ is a vector $v\in V$, $v\ne 0$, such that $\varphi(v) = \lambda v$ for some $\lambda\in k$. $\lambda$ is called the **eigenvalue** corresponding to $v$.
:::

- If we can find a basis of $V$ consisting of eigenvectors of $\varphi$, then we have **diagonalized** $\varphi$, i.e. found a basis $v_1,\dots,v_n$ where its matrix is **diagonal**:
  $$\varphi(v_i) = \lambda_iv_i,\qquad \begin{pmatrix}\lambda_1 & & 0\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}.$$
  This is the best outcome, but not always possible!

:::example
$V = \RR^2$. The matrix $\begin{pmatrix}\lambda & 0\\ 0 & \mu\end{pmatrix}$ has eigenvectors $(1,0)$ and $(0,1)$ (or any multiples) with eigenvalues $\lambda$ and $\mu$.

However, $\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$ has only one eigenvector $(1,0)$ (up to scaling!), with eigenvalue $1$: it is *not* diagonalizable.

$\begin{pmatrix}0 & -1\\ 1 & 0\end{pmatrix}$ doesn’t even have any eigenvectors (see homework).
:::
:::
