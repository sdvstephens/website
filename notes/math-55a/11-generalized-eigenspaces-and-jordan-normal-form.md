---
course: math-55a
chapter: 3
section: 11
title: Generalized Eigenspaces and Jordan Normal Form
date: 2025-09-26
lecturer: Denis Auroux
source-pages: 1-5
---

## Recap: eigenvectors and triangular form

Last time, we talked about linear operators $\varphi: V\to V$, their invariant subspaces ($U\subset V$ such that $\varphi(U)\subset U$), and eigenvectors ($v\ne 0$ such that $\varphi(v) = \lambda v$, i.e. $v\in\ker(\varphi-\lambda I)$).

Over any field:

- eigenvectors need not exist; eigenvectors for distinct $\lambda$ are linearly independent;
- if there exist $n = \dim V$ distinct eigenvalues, then $\varphi$ is diagonalizable: there exists a basis such that $\mathcal{M}(\varphi) = \begin{pmatrix}\lambda_1 & & 0\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$.

We saw:

:::proposition
If $k$ is algebraically closed (e.g. $\CC$) and $V$ a finite-dimensional vector space over $k$, then any linear operator $\varphi: V\to V$ has an eigenvector.
:::

:::corollary
Given $\varphi: V\to V$ over an algebraically closed field $k$, there exists a basis $(v_1,\dots,v_n)$ of $V$ in which the matrix of $\varphi$ is upper-triangular,
$$\begin{pmatrix}\lambda_1 & & *\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$$
(i.e. $\varphi(v_i)\in\operatorname{span}(v_1,\dots,v_i)$; each subspace $V_k = \operatorname{span}(v_1,\dots,v_k)\subset V$ is invariant).
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

Now suppose we have $\varphi: V\to V$ and a basis $(v_1,\dots,v_n)$ of $V$ such that $\mathcal{M}(\varphi) = A$ is upper-triangular, and denote by $\lambda_i = a_{ii}$ the diagonal entries of $A$.

:::lemma
$\varphi$ is invertible iff all the diagonal entries of $A$ are nonzero.
:::

:::proof
(Seen last time.)

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

**Next goal:** further study of invariant subspaces and eigenvalues for linear operators over an algebraically closed $k$, especially $\CC$: *Jordan normal form*. (This is Axler ch. 8; we’ll return to the skipped chapters 6 and 7 soon.)

## Generalized kernels

First we talk about *generalized eigenspaces*. Recall $\ker(\varphi) = \{v\in V\mid\varphi(v) = 0\}$.

:::definition
The **generalized kernel** of $\varphi$ is
$$\operatorname{gker}(\varphi) = \{v\in V\mid\exists m>0 \text{ such that } \varphi^m(v) = 0\}.$$
:::

These are all the vectors that are eventually sent to $0$ by repeatedly applying $\varphi$.

Observe:

- $0\subset\ker\varphi\subset\ker(\varphi^2)\subset\cdots$ (since $\varphi^m(v) = 0\Rightarrow\varphi^{m+1}(v) = 0$, ...);
- if $\ker(\varphi^m) = \ker(\varphi^{m+1})$, then the sequence remains constant after that!

(Proof: $\varphi^{m+2}(v) = \varphi^{m+1}(\varphi(v)) = 0\iff\varphi(v)\in\ker\varphi^{m+1} = \ker\varphi^m\iff\varphi^m(\varphi(v)) = \varphi^{m+1}(v) = 0$. So $\ker(\varphi^{m+1}) = \ker(\varphi^{m+2})$.)

Since the sequence stops increasing after at most $n = \dim V$ steps,
$$\operatorname{gker}(\varphi) = \ker\varphi^n .$$

:::example
$\varphi: k^2\to k^2$, $e_1\mapsto 0$, $e_2\mapsto e_1$, i.e. $\begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}$. Then $\ker(\varphi) = k\cdot e_1$, but $\ker(\varphi^2) = \operatorname{gker}(\varphi) = k^2$.
:::

:::lemma
If $\operatorname{gker}(\varphi) = \ker(\varphi^m)$, then $V = \ker(\varphi^m)\oplus\Img(\varphi^m)$.
:::

:::proof
If $v = \varphi^m(u)\in\Img(\varphi^m)\cap\ker(\varphi^m)$, then $\varphi^m(v) = \varphi^{2m}(u) = 0\Rightarrow u\in\ker\varphi^{2m} = \ker\varphi^m$ (using $\ker\varphi^m = \operatorname{gker}$), so $v = \varphi^m(u) = 0$. Hence $\Img(\varphi^m)\cap\ker(\varphi^m) = \{0\}$. By the dimension formula, $\Img\oplus\ker = V$.
:::

:::definition
Say $\varphi$ is **nilpotent** if there exists $m>0$ such that $\varphi^m = 0$, i.e. $\operatorname{gker}(\varphi) = V$.
:::

## Generalized eigenspaces

Now we can do the same thing to eigenspaces:

:::definition
$v\in V$ is a **generalized eigenvector** with generalized eigenvalue $\lambda$ if $v\in\operatorname{gker}(\varphi-\lambda I)$, i.e. there exists $m>0$ such that $(\varphi-\lambda I)^mv = 0$. Call $\operatorname{gker}(\varphi-\lambda I)$ the **generalized eigenspace**.
:::

:::definition
The **multiplicity** of the eigenvalue $\lambda$ is the dimension of the generalized eigenspace
$$V_\lambda = \operatorname{gker}(\varphi-\lambda I)\quad\big({=}\ker(\varphi-\lambda I)^n\big).$$
:::

In a basis where the matrix of $\varphi$ is triangular, this is the number of times $\lambda$ appears on the diagonal! (This will be clearer later...)

:::proposition Invariant splitting
$V_\lambda = \ker(\varphi-\lambda I)^n$ and $W_\lambda = \Img(\varphi-\lambda I)^n$ are invariant subspaces of $\varphi$, and $V = V_\lambda\oplus W_\lambda$.
:::

:::proof
- Let $v\in V_\lambda$; then $(\varphi-\lambda I)^nv = 0$, hence $\varphi(\varphi-\lambda I)^nv = 0$. But $\varphi-\lambda I$ commutes with $\varphi$, so this implies $(\varphi-\lambda I)^n\varphi v = 0$, hence $\varphi(v)\in V_\lambda$.
- If $v = (\varphi-\lambda I)^nu\in W_\lambda$, then $\varphi(v) = \varphi(\varphi-\lambda I)^nu = (\varphi-\lambda I)^n\varphi(u)\in\Img(\varphi-\lambda I)^n = W_\lambda$.
- The lemma above, applied to $\varphi-\lambda I$, says $V = \ker(\varphi-\lambda I)^n\oplus\Img(\varphi-\lambda I)^n$.
:::

:::proposition Independence of generalized eigenspaces
The subspaces $V_\lambda\subset V$ are independent: $\sum v_i = 0$, $v_i\in V_{\lambda_i}$ $\Rightarrow$ $v_i = 0$ for all $i$.
:::

:::proof
Assume $\sum_{i=1}^\ell v_i = 0$, $v_i\in V_{\lambda_i}$, the $\lambda_i$ distinct. We’ll show $v_1 = 0$ (same for the others).

If $v_1\ne 0$, let $k\ge 0$ be the largest integer such that $(\varphi-\lambda_1I)^kv_1 = w\ne 0$ (but $(\varphi-\lambda_1I)^{k+1}v_1 = 0$, so $\varphi(w) = \lambda_1w$).

Observe:
$$(\varphi-\lambda_\ell I)^n\cdots(\varphi-\lambda_2I)^n(\varphi-\lambda_1I)^k\big(\underbrace{v_1+\cdots+v_\ell}_{=0}\big) = 0$$
is the sum of
$$(\varphi-\lambda_\ell I)^n\cdots(\varphi-\lambda_2I)^nw = \prod_{j=2}^\ell(\lambda_1-\lambda_j)^n\,w\ne 0$$
and
$$(\varphi-\lambda_\ell I)^n\cdots(\varphi-\lambda_2I)^n(\varphi-\lambda_1I)^kv_j = 0\quad\forall j\ge 2$$
(because the operators $(\varphi-\lambda I)$ commute, and $(\varphi-\lambda_jI)^nv_j = 0$).

Contradiction; hence $v_1 = 0$, and similarly $v_i = 0$ for all $i$.
:::

:::theorem
If $k$ is algebraically closed, $V$ a finite-dimensional vector space over $k$, and $\varphi: V\to V$, then $V$ decomposes into the direct sum of the generalized eigenspaces $V_\lambda$ of $\varphi$:
$$V = \bigoplus V_\lambda .$$
:::

:::proof
By induction on $\dim V$! (The result is clear for $\dim V = 1$.) Assume the result holds up to dimension $n-1$, and consider the case $\dim V = n$.

We’ve seen before: $k$ algebraically closed $\Rightarrow$ $\varphi$ has at least one eigenvalue $\lambda_1$. Let
$$V_{\lambda_1} = \operatorname{gker}(\varphi-\lambda_1I) = \ker\big((\varphi-\lambda_1I)^n\big),\qquad U = W_{\lambda_1} = \Img(\varphi-\lambda_1I)^n .$$
By the invariant splitting proposition above, $V_{\lambda_1}$ and $U$ are invariant subspaces, and $V = V_{\lambda_1}\oplus U$.

Since $\dim U<\dim V$, induction implies that $U$ decomposes into generalized eigenspaces for $\varphi|_U$:
$$U = U_{\lambda_2}\oplus\cdots\oplus U_{\lambda_\ell},$$
where $\lambda_2,\dots,\lambda_\ell$ are the eigenvalues of $\varphi|_U$ ($\iff$ eigenvalues of $\varphi$ with an eigenvector in $U$), and
$$U_{\lambda_j} = \ker(\varphi|_U-\lambda_jI)^n = \ker(\varphi-\lambda_jI)^n\cap U = V_{\lambda_j}\cap U .$$
Moreover, $\varphi|_U$ doesn’t have $\lambda_1$ as an eigenvalue (since $\ker(\varphi-\lambda_1I)^n\cap U = 0$), so $\lambda_1\notin\{\lambda_2,\dots,\lambda_\ell\}$.

Now $U_{\lambda_j}\subset\ker(\varphi-\lambda_jI)^n = V_{\lambda_j}$, and
$$V = V_{\lambda_1}\oplus U = V_{\lambda_1}\oplus U_{\lambda_2}\oplus\cdots\oplus U_{\lambda_\ell}.$$
Since the generalized eigenspaces $V_{\lambda_j}$ contain $U_{\lambda_j}$ for all $j\ge 2$, we find that $V_{\lambda_1},\dots,V_{\lambda_\ell}$ span $V$; and they are independent by the independence proposition, hence
$$V = V_{\lambda_1}\oplus V_{\lambda_2}\oplus\cdots\oplus V_{\lambda_\ell}$$
(and in fact $V_{\lambda_j} = U_{\lambda_j}$ for all $j\ge 2$; in other terms, $\Img(\varphi-\lambda_iI)^n = \bigoplus_{j\ne i}\ker(\varphi-\lambda_jI)^n$).
:::

- The decomposition $V = \bigoplus V_{\lambda_i}$ gives us bases in which $\varphi$ is given by a block diagonal matrix
  $$\begin{pmatrix}\varphi|_{V_{\lambda_1}} & & & 0\\ & \varphi|_{V_{\lambda_2}} & & \\ & & \ddots & \\ 0 & & & \varphi|_{V_{\lambda_\ell}}\end{pmatrix}.$$
- Moreover, $\varphi|_{V_{\lambda_i}}$ can be represented by a triangular matrix in a suitable basis for $V_{\lambda_i}$ (using the theorem seen last time), and since its only eigenvalue is $\lambda_i$, the diagonal entries are all $\lambda_i$! So
  $$\varphi\sim\begin{pmatrix}
  \begin{bmatrix}\lambda_1 & & *\\ & \ddots & \\ 0 & & \lambda_1\end{bmatrix} & & & 0\\
  & \begin{bmatrix}\lambda_2 & & *\\ & \ddots & \\ 0 & & \lambda_2\end{bmatrix} & & \\
  & & \ddots & \\
  0 & & & \begin{bmatrix}\lambda_\ell & & *\\ & \ddots & \\ 0 & & \lambda_\ell\end{bmatrix}
  \end{pmatrix}.$$
- We can do more with the blocks $\begin{pmatrix}\lambda_i & & *\\ & \ddots & \\ 0 & & \lambda_i\end{pmatrix}$, but this requires further study of *nilpotent operators* (note: $\varphi|_{V_{\lambda_i}}-\lambda_iI$ is nilpotent!).

## Nilpotent operators

:::definition
$\varphi: V\to V$ is **nilpotent** if there exists $m\in\NN$ such that $\varphi^m = 0$, i.e. $\operatorname{gker}(\varphi) = V$ ($\iff\varphi^n = 0$ for $n = \dim V$).
:::

**Goal:** find a “nice” basis of $V$ for a nilpotent operator $\varphi: V\to V$.

Observe: if $\dim V = 2$, there are 2 cases: either $\varphi = 0$, or $\varphi^2 = 0$ but $\varphi\ne 0$. In the second case, let $v\notin\ker\varphi$; then $\varphi(v) = u\in\ker\varphi$, so $u,v$ are independent and form a basis, in which $\mathcal{M}(\varphi) = \begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}$.

Jordan’s method generalizes this to higher dimensions:

:::proposition
There exists a basis of $V$
$$\big\{\varphi^{m_1}(v_1),\varphi^{m_1-1}(v_1),\dots,v_1,\ \dots,\ \varphi^{m_k}(v_k),\dots,v_k\big\},\qquad\text{where }\varphi^{m_i+1}(v_i) = 0\ \forall i,$$
in which
$$\mathcal{M}(\varphi) = \begin{pmatrix}
\begin{bmatrix}0 & 1 & & 0\\ & 0 & \ddots & \\ & & \ddots & 1\\ 0 & & & 0\end{bmatrix} & & & 0\\
& \begin{bmatrix}0 & 1 & & 0\\ & \ddots & \ddots & \\ 0 & & & 0\end{bmatrix} & & \\
& & \ddots & \\
0 & & & \begin{bmatrix}0 & 1 & & 0\\ & \ddots & \ddots & \\ 0 & & & 0\end{bmatrix}
\end{pmatrix},$$
block diagonal, built from **nilpotent Jordan blocks**
$$\begin{pmatrix}0 & 1 & & 0\\ & 0 & \ddots & \\ & & \ddots & 1\\ 0 & & & 0\end{pmatrix}$$
(each basis element $\mapsto$ the previous one, first basis element $\mapsto 0$).
:::

:::proof
Recall $0\subset\ker\varphi\subset\ker\varphi^2\subset\cdots\subset\ker\varphi^m = V$. Assume this is the smallest $m$, i.e. $\varphi^m = 0$ but $\varphi^{m-1}\ne 0$.

**Claim:** if a subspace $U\subset\ker(\varphi^{k+1})$ satisfies $\ker(\varphi^k)\cap U = \{0\}$ ($k\ge 1$), then $\varphi|_U$ is injective, $\varphi(U)\subset\ker(\varphi^k)$, and $\ker(\varphi^{k-1})\cap\varphi(U) = \{0\}$.

Indeed: for all $v\in U$, $v\ne 0$, we have $\varphi^k(v)\ne 0$ and $\varphi^{k+1}(v) = 0$. In particular $\varphi(v)\ne 0$, i.e. $\ker(\varphi|_U) = \{0\}$: injective. Also, $\varphi^k(\varphi(v)) = 0\Rightarrow\varphi(v)\in\ker\varphi^k$, and $\varphi^{k-1}(\varphi(v)) = \varphi^k(v)\ne 0\Rightarrow\varphi(v)\notin\ker\varphi^{k-1}$.

**First step:** let $U_m$ be such that $\ker(\varphi^m) = V = \ker(\varphi^{m-1})\oplus U_m$, and pick a basis $(v_{m,1},\dots,v_{m,k_m})$ of $U_m$ [these will yield Jordan blocks of size $m$!]. (E.g. start from a basis of $\ker\varphi^{m-1}$, extend to a basis of $V$ by adding vectors $v_{m,1},\dots,v_{m,k_m}$, and let $U_m$ be their span.)

Now by the claim, $v_{m-1,1} = \varphi(v_{m,1}),\dots,v_{m-1,k_m} = \varphi(v_{m,k_m})$ are linearly independent, and their span is contained in $\ker(\varphi^{m-1})$ but independent of $\ker(\varphi^{m-2})$. Start from a basis of $\ker(\varphi^{m-2})$, add $v_{m-1,1},\dots,v_{m-1,k_m}$, and complete to a basis of $\ker(\varphi^{m-1})$ by adding some other vectors $v_{m-1,k_m+1},\dots,v_{m-1,k_{m-1}}$ if needed (we could have $k_{m-1} = k_m$). (These will yield blocks of size $m-1$.) Let $U_{m-1} = \operatorname{span}(v_{m-1,1},\dots,v_{m-1,k_{m-1}})$. Then $\ker(\varphi^{m-1}) = \ker(\varphi^{m-2})\oplus U_{m-1}$.

And so on: given $U_j = \operatorname{span}(v_{j,1},\dots,v_{j,k_j})$ with $\ker\varphi^j = \ker\varphi^{j-1}\oplus U_j$, take $v_{j-1,i} = \varphi(v_{j,i})$ for $1\le i\le k_j$, and extend by adding vectors as needed to build $U_{j-1}$. This eventually gives a basis of $V = U_1\oplus\cdots\oplus U_m$, and rearranging it as $(v_{1,1},\dots,v_{m,1},v_{1,2},\dots)$ we get the result.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 12](/notes/math-55a/12-jordan-normal-form-cayley-hamilton-and-categories)
**Jordan normal form**

We now combine our results to arrive at the Jordan normal form:

:::theorem Jordan normal form
Let $V$ be a finite-dimensional vector space over an algebraically closed field $k$ (e.g. $\CC$), and $\varphi\in\Hom(V,V)$. Then there exists a basis of $V$ in which the matrix of $\varphi$ is block-diagonal, with each block a **Jordan block**
$$\begin{pmatrix}\lambda & 1 & & 0\\ & \lambda & \ddots & \\ & & \ddots & 1\\ 0 & & & \lambda\end{pmatrix}.$$
:::

:::remark
- A size 1 Jordan block is $(\lambda)$; size 2: $\begin{pmatrix}\lambda & 1\\ 0 & \lambda\end{pmatrix}$; ... $\varphi$ is diagonalizable $\iff$ all the blocks have size 1.
- The values of $\lambda$ that appear are exactly the eigenvalues of $\varphi$. There may be several blocks with the same $\lambda$; their direct sum is the generalized eigenspace $V_\lambda$.
- Proof: we’ve seen $V = \bigoplus V_\lambda$ (generalized eigenspaces); now $\varphi|_{V_\lambda}-\lambda I$ is nilpotent, so it can be decomposed into nilpotent Jordan blocks,
  $$\varphi|_{V_\lambda}-\lambda I = \bigoplus\begin{pmatrix}0 & 1 & & \\ & \ddots & \ddots & \\ & & & 1\\ & & & 0\end{pmatrix},\qquad\text{so}\qquad\varphi|_{V_\lambda} = \bigoplus\begin{pmatrix}\lambda & 1 & & \\ & \ddots & \ddots & \\ & & & 1\\ & & & \lambda\end{pmatrix}.$$
:::
:::
