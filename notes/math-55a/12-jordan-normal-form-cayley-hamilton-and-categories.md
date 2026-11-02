---
course: math-55a
chapter: 3
section: 12
title: Jordan Normal Form, Cayley–Hamilton, and Categories
date: 2025-09-29
lecturer: Denis Auroux
source-pages: 1-4
---

## Where we are

**Last time:** $V$ finite-dimensional over $k$, $\varphi : V \to V$ a linear operator. Then:

- the eigenspaces $\ker(\varphi - \lambda)$ are linearly independent, but need not span $V$ (if they do, there exists a basis of eigenvectors, hence $\varphi$ is diagonalizable);
- to do better, we introduced the **generalized eigenspaces** $V_\lambda = \ker(\varphi - \lambda)^n$, which also are linearly independent invariant subspaces for $\varphi$, and we proved: if $k$ is algebraically closed, then
$$V = \bigoplus_{\lambda \text{ eigenvalue}} V_\lambda \qquad \left(\Rightarrow \exists \text{ basis such that } M(\varphi) = \begin{pmatrix} \varphi|_{V_{\lambda_1}} & & & 0 \\ & \varphi|_{V_{\lambda_2}} & & \\ & & \ddots & \\ 0 & & & \varphi|_{V_{\lambda_\ell}} \end{pmatrix}\right);$$
- we’ll now see: there exists a basis of $V_\lambda$ such that the matrix of $\varphi|_{V_\lambda}$ is a direct sum of **Jordan blocks**
$$\begin{pmatrix} \lambda & 1 & & 0 \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ 0 & & & \lambda \end{pmatrix}.$$

Combining with last week’s results, we get the Jordan normal form.

:::theorem Jordan normal form
Let $V$ be a finite-dimensional vector space over $k$ algebraically closed (e.g. $\CC$), and $\varphi \in \Hom(V,V)$. Then there exists a basis of $V$ in which the matrix of $\varphi$ is block-diagonal, with each block a **Jordan block**
$$\begin{pmatrix} \lambda & 1 & & 0 \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ 0 & & & \lambda \end{pmatrix}.$$
:::

:::remark
- A size 1 Jordan block is $(\lambda)$, size 2 is $\begin{pmatrix} \lambda & 1 \\ 0 & \lambda \end{pmatrix}$, … $\varphi$ is diagonalizable $\iff$ all the blocks have size 1.
- The values of $\lambda$ that appear are exactly the eigenvalues of $\varphi$. There may be several blocks with the same $\lambda$; their direct sum is the generalized eigenspace $V_\lambda$.
- Proof: we’ve seen $V = \bigoplus V_\lambda$ (generalized eigenspaces); $\varphi|_{V_\lambda} - \lambda I$ is nilpotent ($(\varphi|_{V_\lambda} - \lambda)^n = 0$). We’ll now see that nilpotent operators decompose into nilpotent Jordan blocks,
$$\varphi|_{V_\lambda} - \lambda I = \bigoplus \begin{pmatrix} 0 & 1 & & \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ & & & 0 \end{pmatrix}, \quad \text{so} \quad \varphi|_{V_\lambda} = \bigoplus \begin{pmatrix} \lambda & 1 & & \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ & & & \lambda \end{pmatrix},$$
hence the result.
:::

:::proposition
Let $\varphi : V \to V$ be nilpotent (i.e. there exists $m$ such that $\varphi^m = 0$). Then there exists a basis of $V$ of the form
$$\{v_{1,1}, \dots, v_{1,m_1};\ v_{2,1}, \dots, v_{2,m_2};\ \dots;\ v_{\ell,1}, \dots, v_{\ell,m_\ell}\} \qquad (\ell \geq 1,\ m_1, \dots, m_\ell \geq 1,\ m_1 + \dots + m_\ell = \dim V)$$
such that $\varphi(v_{i,j}) = v_{i,j-1}$ if $j > 1$ and $\varphi(v_{i,1}) = 0$, i.e. $M(\varphi)$ is a direct sum of nilpotent Jordan blocks
$$\begin{pmatrix} 0 & 1 & & 0 \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ 0 & & & 0 \end{pmatrix}$$
(of sizes $m_1, \dots, m_\ell$).
:::

:::proof
Recall $0 \subset \ker\varphi \subset \ker\varphi^2 \subset \dots \subset \ker\varphi^m = V$. Assume this is the smallest $m$, i.e. $\varphi^m = 0$ but $\varphi^{m-1} \neq 0$.

**Claim.** If a subspace $U \subset \ker(\varphi^{k+1})$ satisfies $\ker(\varphi^k) \cap U = \{0\}$ ($k \geq 1$), then $\varphi|_U$ is injective, $\varphi(U) \subset \ker(\varphi^k)$, and $\ker(\varphi^{k-1}) \cap \varphi(U) = \{0\}$.

Indeed: for all $v \in U$, $v \neq 0$, we have $\varphi^k(v) \neq 0$ and $\varphi^{k+1}(v) = 0$. In particular $\varphi(v) \neq 0$, i.e. $\ker(\varphi|_U) = \{0\}$: injective. Also, $\varphi^k(\varphi(v)) = 0 \Rightarrow \varphi(v) \in \ker\varphi^k$, and $\varphi^{k-1}(\varphi(v)) = \varphi^k(v) \neq 0 \Rightarrow \varphi(v) \notin \ker\varphi^{k-1}$.

**First step:** let $U_m$ be such that $\ker(\varphi^m) = V = \ker(\varphi^{m-1}) \oplus U_m$, and pick a basis $(v_{1,m}, \dots, v_{k_m,m})$ of $U_m$. [These will yield Jordan blocks of size $m$!] (E.g.: start from a basis of $\ker\varphi^{m-1}$, extend to a basis of $V$ by adding vectors $v_{1,m}, \dots, v_{k_m,m}$, and let $U_m$ be their span.)

Now by the claim, $v_{1,m-1} = \varphi(v_{1,m}), \dots, v_{k_m,m-1} = \varphi(v_{k_m,m})$ are linearly independent, and their span is $\subset \ker(\varphi^{m-1})$ but independent of $\ker(\varphi^{m-2})$.

Start from a basis of $\ker(\varphi^{m-2})$, add $v_{1,m-1}, \dots, v_{k_m,m-1}$, and complete to a basis of $\ker(\varphi^{m-1})$ by adding some other vectors $v_{k_m+1,m-1}, \dots, v_{k_{m-1},m-1}$ (if needed: we could have $k_{m-1} = k_m$). (These will yield blocks of size $m-1$.)

Let $U_{m-1} = \operatorname{span}(v_{1,m-1}, \dots, v_{k_{m-1},m-1})$. Then $\ker(\varphi^{m-1}) = \ker(\varphi^{m-2}) \oplus U_{m-1}$.

And so on: given $U_j = \operatorname{span}(v_{1,j}, \dots, v_{k_j,j})$ with $\ker\varphi^j = \ker\varphi^{j-1} \oplus U_j$, take $v_{i,j-1} = \varphi(v_{i,j})$ for $1 \leq i \leq k_j$ and extend by adding vectors as needed to build $U_{j-1}$. This eventually gives a basis of $V = U_1 \oplus \dots \oplus U_m$, and rearranging it as $(v_{1,1}, \dots, v_{1,m}, v_{2,1}, \dots)$ we get the result.
:::

## Characteristic polynomial, minimal polynomial

Let $k$ be algebraically closed, $\varphi : V \to V$, and $V = \bigoplus_{i=1}^{\ell} V_{\lambda_i}$ with $V_{\lambda_i}$ the generalized eigenspaces. Call

- $n_i = \dim V_{\lambda_i}$ the **multiplicity** of $\lambda_i$ ($\sum n_i = \dim V$);
- $m_i$ = the nilpotence order of $(\varphi|_{V_{\lambda_i}} - \lambda_i \id)$, i.e. the smallest $m_i$ such that $V_{\lambda_i} = \ker(\varphi - \lambda_i I)^{m_i}$; this is the size of the largest Jordan block in $\varphi|_{V_{\lambda_i}}$.

From the above: $m_i \leq n_i$, and $\varphi$ is diagonalizable iff all $m_i = 1$.

:::definition
The **characteristic polynomial** of $\varphi$ is
$$\chi_\varphi(x) = \prod_{i=1}^{\ell} (x - \lambda_i)^{n_i}.$$
:::

The usual definition, once we have defined the determinant, is
$$\chi_\varphi(x) = \det(xI - \varphi).$$
Manifestly, in a basis where $M(\varphi)$ is triangular (or Jordan),
$$M(xI - \varphi) = \begin{pmatrix} x - \lambda_1 & & * \\ & \ddots & \\ 0 & & x - \lambda_n \end{pmatrix}$$
and this is the same thing (but we can use **any** basis to calculate $\det$).

The significance is: given the matrix $A$ of $\varphi$ in any basis, we can calculate $\chi(x) = \det(xI - A) \in k[x]$ and solve for its roots = the eigenvalues; their multiplicities = the dimensions of the generalized eigenspaces. (This also works over non-algebraically closed $k$, without any guarantee that $\chi(x)$ has any roots.)

:::definition
The **minimal polynomial** of $\varphi$ is
$$\mu_\varphi(x) = \prod_{i=1}^{\ell} (x - \lambda_i)^{m_i}.$$
:::

**Significance:** $(\varphi - \lambda_i)^k = 0$ on the generalized eigenspace $V_{\lambda_i}$ iff $k \geq m_i$, and it is invertible on the other generalized eigenspaces. So $\mu_\varphi(\varphi)$ is the simplest polynomial expression in $\varphi$ that is zero on all the $V_{\lambda_i}$’s, hence on $\bigoplus V_{\lambda_i} = V$. Hence:

:::proposition
$\mu_\varphi(\varphi) = 0$, and for all $p \in k[x]$, $p(\varphi) = 0 \in \Hom(V,V)$ iff $\mu_\varphi$ divides $p$.
:::

Since the nilpotence order $m_i$ is always $\leq \dim V_{\lambda_i} = n_i$, $\mu_\varphi$ divides $\chi_\varphi$, so:

:::theorem Cayley–Hamilton
$\chi_\varphi(\varphi) = 0$.
:::

(This is also true over non-algebraically closed $k$, by passing to the algebraic closure.)

## A word about operators on finite-dimensional $\RR$-vector spaces

Let $V$ be a real vector space (of dimension $n$), $\varphi : V \to V$ a linear operator. Since $\RR$ is not algebraically closed, $\varphi$ might not have eigenvalues, and we can’t put $\varphi$ in triangular or Jordan form.

**Yet:** every real operator has an invariant subspace of dimension 1 or 2.

**Approach:** work over $\CC$, which is algebraically closed. How do we do this?

:::definition
The **complexification** of $V$ is $V_\CC = V \times V = \{v + iw \mid v, w \in V\}$, with addition
$$(v_1 + iw_1) + (v_2 + iw_2) = (v_1 + v_2) + i(w_1 + w_2)$$
and scalar multiplication
$$(a + ib)(v + iw) = (av - bw) + i(bv + aw), \qquad a, b \in \RR.$$
:::

- This is a $\CC$-vector space of dimension $n$: if $(e_1, \dots, e_n)$ is a basis of $V$ over $\RR$, then $e_1 \,(= e_1 + i0), \dots, e_n$ is also a basis of $V_\CC$ over $\CC$.
- Given $\varphi : V \to V$ $\RR$-linear, we can extend it to $\varphi_\CC : V_\CC \to V_\CC$ $\CC$-linear simply by $\varphi_\CC(v + iw) = \varphi(v) + i\varphi(w)$. Choosing a basis $(e_1, \dots, e_n)$ as above, the matrix of $\varphi_\CC$ is the **same** as that of $\varphi$ ($\varphi_\CC(e_j + i0) = \varphi(e_j) + i0$).

But now… $\varphi_\CC$ is guaranteed to have an eigenvector! (And generalized eigenspaces, and a Jordan form, …)

Let $\mathbf{v} = v + iw$ be an eigenvector of $\varphi_\CC$ for the eigenvalue $\lambda \in \CC$, $\varphi_\CC(\mathbf{v}) = \lambda\mathbf{v}$. There are two cases:

- If $\lambda \in \RR$, then $\varphi_\CC(v + iw) = \varphi(v) + i\varphi(w) = \lambda v + i\lambda w$, so $v = \operatorname{Re}(\mathbf{v})$ and $w = \operatorname{Im}(\mathbf{v})$ are eigenvectors of $\varphi$ with the same eigenvalue $\lambda$ (if they are nonzero; one of them is). (Warning: the multiplicity of $\lambda$ for $\varphi$ has no reason to be even.)
- If $\lambda = a + ib \notin \RR$, then
$$\varphi_\CC(v + iw) = (a + ib)(v + iw) \;\Rightarrow\; \varphi_\CC(v - iw) = (a - ib)(v - iw)$$
(compare real and imaginary parts!), i.e. $\bar{\mathbf{v}} = v - iw$ is an eigenvector of $\varphi_\CC$ with eigenvalue $\bar\lambda$. It follows that $v$ and $w$ are linearly independent, and span a 2-dimensional invariant subspace $U \subset V$:
$$\begin{aligned} \varphi(v) &= av - bw \\ \varphi(w) &= bv + aw \end{aligned} \qquad M(\varphi|_U, (v,w)) = \begin{pmatrix} a & b \\ -b & a \end{pmatrix}.$$

(One could further study block triangular decompositions of $\varphi$ etc. starting from $\varphi_\CC$.)

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L14}}
**Interlude: the language of categories**

(Then we’ll return to (bi)linear algebra.)

:::definition
A **category** is a collection of **objects**, plus for each pair of objects a collection of **morphisms** $\Mor(A,B)$, and an operation called **composition** of morphisms,
$$\Mor(A,B) \times \Mor(B,C) \to \Mor(A,C), \qquad (f, g) \mapsto g \circ f,$$
such that

1. every object $A$ has an **identity** morphism $\id_A \in \Mor(A,A)$ such that for all $f \in \Mor(A,B)$, $f \circ \id_A = \id_B \circ f = f$;
2. composition is **associative**: $(f \circ g) \circ h = f \circ (g \circ h)$.
:::

:::example
1. The category of sets, $\Mor(A,B)$ = all maps $A \to B$.
2. $\mathrm{Vect}_k$: finite-dimensional vector spaces over $k$, linear maps.
3. Groups, group homomorphisms.
4. Topological spaces, continuous maps.
:::

:::definition
$f \in \Mor(A,B)$ is an **isomorphism** if there exists $g \in \Mor(B,A)$ (the inverse isomorphism) such that $g \circ f = \id_A$ and $f \circ g = \id_B$.
:::

**Check:**

- the inverse of $f$, if it exists, is unique;
- $\id_A$ is an isomorphism; $f$ iso $\Rightarrow$ $f^{-1}$ iso; $f, g$ isos $\Rightarrow$ $g \circ f$ iso.

So the **automorphisms** of $A$, $\Aut(A) = \{\text{isomorphisms } A \to A\} \subset \Mor(A,A)$, form a **group**.

- Isomorphic objects have isomorphic automorphism groups: an isomorphism $f \in \Mor(A,B)$ determines an isomorphism of groups $c_f : \Aut(A) \to \Aut(B)$, $g \mapsto f \circ g \circ f^{-1}$.

:::example
1. In Sets, $A$ a finite set with $n$ elements $\Rightarrow$ $\Aut(A) = \{\text{bijections } A \to A\} \cong \mathfrak{S}_n$.
2. $V$ an $n$-dimensional vector space over $k$ $\Rightarrow$ $\Aut(V) \cong GL_n(k)$, the invertible $n \times n$ matrices.
:::
:::
