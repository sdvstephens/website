---
course: math-55a
chapter: 3
section: 10
title: Eigenvectors and Upper-Triangular Matrices
date: 2025-09-24
lecturer: Denis Auroux
source-pages: 1-4
---

## Linear operators

A **linear operator** on $V$ (aka **endomorphism** of $V$) is a linear map $\varphi: V\to V$.

**Notation:** $\End(V) = \Hom(V,V)$.

- When using a basis to express $\varphi\in\Hom(V,V)$ by a (square) matrix, we want to use the same basis on each side: $A = \mathcal{M}(\varphi,(e_i),(e_i))$ transforms by $P^{-1}AP$.
- We can *compose* linear operators with each other, $\varphi\psi = \varphi\circ\psi: V\to V$, or with themselves, $\varphi^n = \varphi\circ\cdots\circ\varphi$, or even apply polynomials:
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

## Eigenvectors and eigenvalues

If $U\subset V$ is invariant and $\dim U = 1$ (so $U = k\cdot v$ for some $v\in V$), then necessarily $\varphi(v) = \lambda v$ for some $\lambda\in k$.

:::definition
An **eigenvector** of $\varphi: V\to V$ is a vector $v\in V$, $v\ne 0$, such that $\varphi(v) = \lambda v$ for some $\lambda\in k$. $\lambda$ is called the **eigenvalue** corresponding to $v$.
:::

If we can find a basis of $V$ consisting of eigenvectors of $\varphi$, then we have **diagonalized** $\varphi$, i.e. found a basis $v_1,\dots,v_n$ where its matrix is **diagonal**:
$$\varphi(v_i) = \lambda_iv_i,\qquad \begin{pmatrix}\lambda_1 & & 0\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}.$$
This is the best outcome, but not always possible!

:::example
$V = \RR^2$. The matrix $\begin{pmatrix}\lambda & 0\\ 0 & \mu\end{pmatrix}$ has eigenvectors $(1,0)$ and $(0,1)$ (or any multiples) with eigenvalues $\lambda$ and $\mu$.

However, $\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$ has only one eigenvector $(1,0)$ (up to scaling!), with eigenvalue $1$: it is *not* diagonalizable.

$\begin{pmatrix}0 & -1\\ 1 & 0\end{pmatrix}$ doesn’t even have any eigenvectors (see HW4, Problem 1).
:::

:::proposition
Eigenvectors of $\varphi: V\to V$ with distinct eigenvalues are linearly independent.
:::

:::proof
Assume $v_1,\dots,v_\ell$ are eigenvectors with $\varphi(v_i) = \lambda_iv_i$, the $\lambda_i$ all distinct. Assume there is a linear relation $a_1v_1+\cdots+a_\ell v_\ell = 0$ with the $a_i$ not all zero, and that this has the *fewest* ($\ge 2$) possible nonzero $a_i$ of any such relation. Then
$$\varphi\Big(\sum a_iv_i\Big) = \sum a_i\varphi(v_i) = \sum a_i\lambda_iv_i = 0,$$
another linear relation! $a_1\lambda_1v_1+\cdots+a_\ell\lambda_\ell v_\ell = 0$.

Fix $i$ such that $a_i\ne 0$, and subtract ($\lambda_i$ times the first relation):
$$a_1(\lambda_1-\lambda_i)v_1+\cdots+a_\ell(\lambda_\ell-\lambda_i)v_\ell = 0.$$
This is a linear relation where the coefficient of $v_i$ is now zero, but all other nonzero coefficients (at least one) remain nonzero (since $\lambda_j-\lambda_i\ne 0$). This contradicts the minimality assumption.
:::

:::corollary
The number of distinct eigenvalues of $\varphi\in\Hom(V,V)$ is at most $n = \dim V$, and if equality holds then $\varphi$ is diagonalizable.
:::

## Algebraically closed fields

:::definition
A field $k$ is **algebraically closed** if every nonconstant polynomial $p\in k[x]$ has a root in $k$, i.e. there exists $\alpha\in k$ such that $p(\alpha) = 0$.
:::

If so, then by the division algorithm for polynomials, we can write $p = (x-\alpha)q$, and repeating, we get
$$p = c(x-\alpha_1)\cdots(x-\alpha_d)\qquad(d = \deg p,\ \alpha_i\in k).$$

- **Fundamental theorem of algebra:** $\CC$ is algebraically closed. (The proof is *not* pure algebra; we’ll discuss it in Math 55b.)
- If $k$ is not algebraically closed, then there exists an algebraically closed field $\bar k\supset k$, constructed from $k$ by adjoining roots of polynomials in $k[x]$. E.g. $\overline{\RR} = \CC$, whereas
  $$\overline{\QQ} = \{\text{all roots of polynomial equations with } \QQ\text{-coefficients}\}\subset\CC$$
  (fact: polynomials in $\overline{\QQ}[x]$ have roots in $\overline{\QQ}$).

:::theorem
If $k$ is algebraically closed and $V$ a finite-dimensional vector space over $k$, then any linear operator $\varphi: V\to V$ has an eigenvector, i.e. there exist $v\in V-\{0\}$ and $\lambda\in k$ such that $\varphi(v) = \lambda v$.
:::

:::proof
Let $n = \dim V$, and take any nonzero vector $v\in V$. Then the $n+1$ vectors $v,\varphi(v),\dots,\varphi^n(v)$ must be linearly dependent. So there exist $a_0,\dots,a_n\in k$ (not all zero) such that
$$a_0v+a_1\varphi(v)+\cdots+a_n\varphi^n(v) = 0.$$
Since $k$ is algebraically closed, we can factor the polynomial $\sum a_ix^i$, hence
$$a_0+a_1\varphi+\cdots+a_n\varphi^n = c(\varphi-\lambda_1)\cdots(\varphi-\lambda_d),\qquad c\ne 0,\ \lambda_i\in k$$
(!! the product here is composition of operators, but this is legit !!).

Now $(\varphi-\lambda_1)\cdots(\varphi-\lambda_d): V\to V$ has a nontrivial kernel ($\ni v$), which implies that at least one of the $\varphi-\lambda_i$ is not an isomorphism; hence there exist $i\in\{1,\dots,d\}$ and $w\in V-\{0\}$ such that $w\in\ker(\varphi-\lambda_i)$, i.e. $\varphi(w) = \lambda_iw$.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 11](/notes/math-55a/11-generalized-eigenspaces-and-jordan-normal-form)
**Upper-triangular form**

:::corollary
Given $\varphi: V\to V$ over an algebraically closed field $k$, there exists a basis $(v_1,\dots,v_n)$ of $V$ in which the matrix of $\varphi$ is **upper-triangular**,
$$\begin{pmatrix}\lambda_1 & & *\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$$
(i.e. each subspace $V_k = \operatorname{span}(v_1,\dots,v_k)\subset V$ is invariant).
:::

:::proof
Induction on $\dim V$.

- If $\dim V = 1$, then any nonzero vector $v_0$ gets mapped to a multiple of itself ✓ (any $1\times 1$ matrix is triangular).
- Assume the result is true for dimension $n$, and consider $\varphi: V\to V$ with $\dim V = n+1$. Since $k$ is algebraically closed, $\varphi$ has at least one eigenvector $v_0\in V$, $\varphi(v_0) = \lambda v_0$. Let $V_0 = \operatorname{span}(v_0)$, and let $U = V/V_0$, with $q: V\to U$ the quotient map (i.e. work “mod $v_0$”). Since $\varphi(V_0)\subset V_0$, $(q\circ\varphi)|_{V_0} = 0$, so $q\circ\varphi$ factors through $V/V_0 = U$. So there exists $\bar\varphi: U\to U$ such that
  $$\begin{CD}
  V @>{\varphi}>> V\\
  @V{q}VV @VV{q}V\\
  U @>{\bar\varphi}>> U
  \end{CD}$$
  commutes (intuitively, $\bar\varphi = $ “$\varphi$ mod $v_0$”).

  Since $\dim U = \dim V-\dim V_0 = n$, by the induction hypothesis there exists a basis $u_1,\dots,u_n$ of $U$ such that $\bar\varphi(u_i)\in\operatorname{span}(u_1,\dots,u_i)$. Let $v_i\in V$ be such that $q(v_i) = u_i$ (i.e. $u_i = v_i+V_0$). (Note: $v_1+V_0,\dots,v_n+V_0$ span $V/V_0$ $\Rightarrow$ $(v_0,v_1,\dots,v_n)$ span $V$, hence are a basis.) Then
  $$q(\varphi(v_i)) = \bar\varphi(u_i)\in\operatorname{span}(u_1,\dots,u_i)$$
  $$\Rightarrow\ \varphi(v_i)\in\operatorname{span}(v_1,\dots,v_i)+V_0 = \operatorname{span}(v_0,v_1,\dots,v_i).$$
  (In fact, in the basis $(v_0,v_1,\dots,v_n)$,
  $$\mathcal{M}(\varphi) = \left(\begin{array}{c|c}\lambda & *\\ \hline \begin{matrix}0\\ \vdots\\ 0\end{matrix} & \mathcal{M}(\bar\varphi)\end{array}\right).)$$
:::

Now suppose we have $\varphi: V\to V$ and a basis $(v_1,\dots,v_n)$ of $V$ such that $\mathcal{M}(\varphi) = A$ is upper-triangular, i.e. each $V_i = \operatorname{span}(v_1,\dots,v_i)$ is an invariant subspace of $\varphi$. Denote by $\lambda_i = a_{ii}$ the diagonal entries of $A$.

:::lemma
$\varphi$ is invertible iff all the diagonal entries of $A$ are nonzero.
:::

:::proof
- If all $\lambda_i$ are nonzero, then $\varphi$ is surjective (hence an isomorphism) since
  $$\begin{aligned}
  \varphi(v_1) &= \lambda_1v_1, \ \lambda_1\ne 0, &&\text{so } v_1\in\Img\varphi,\\
  \varphi(v_2) &= \lambda_2v_2+a_{12}v_1, \ \lambda_2\ne 0, &&\text{so } v_2 = \tfrac{1}{\lambda_2}\big(\varphi(v_2)-a_{12}v_1\big)\in\Img\varphi,
  \end{aligned}$$
  etc. $\Rightarrow$ $v_i\in\Img\varphi$ for all $i$.
- If $\lambda_i = 0$, then $\varphi(V_i)\subset V_{i-1}$, so $\varphi|_{V_i}$ has nontrivial kernel (since $\rank\varphi|_{V_i}\le\dim V_{i-1}<\dim V_i$); hence $\ker\varphi\ne 0$, and $\varphi$ is not invertible.
:::

:::corollary
The following are equivalent:
1. $\lambda$ is an eigenvalue of $\varphi$;
2. $\varphi-\lambda$ is not invertible;
3. $\lambda = \lambda_i$ for some diagonal entry of any upper-triangular matrix $A$ representing $\varphi$.
:::

((1) $\iff$ (2) since eigenvectors $=\ker(\varphi-\lambda)$, and (2) $\iff$ (3) by applying the lemma to $\varphi-\lambda$ and the matrix $A-\lambda I$.)

**Next goal:** further study of invariant subspaces and eigenvalues for linear operators over an algebraically closed $k$, especially $\CC$: *generalized eigenspaces* and *Jordan normal form*. (This is Axler ch. 8; we’ll return to the skipped chapters 6 and 7 soon.)
:::
