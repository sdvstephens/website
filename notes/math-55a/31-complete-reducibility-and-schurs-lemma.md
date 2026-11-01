---
course: math-55a
chapter: 9
section: 31
title: Complete Reducibility and Schur’s Lemma
date: 2025-11-14
lecturer: Denis Auroux
source-pages: A31-1–A31-4
---

## Representations

**Recall.**

:::definition
A **representation** of a group $G$ is a vector space $V$ (usually finite-dimensional; we mostly consider $k=\CC$) + an action of $G$ on $V$ by linear operators, i.e. $G\times V\to V$ such that for all $g\in G$, $g:V\to V$ is a linear map.

Equivalently: a homomorphism $\rho:G\to GL(V)$, the group of invertible linear operators $V\to V$.
:::

:::definition
- A **subrepresentation** is a subspace $W\subset V$ which is invariant under $G$, i.e. $gW=W$ for all $g\in G$.
- A representation is **irreducible** if it has no nontrivial subrepresentations.
:::

:::example
If $G\cong\ZZ/n$ is a cyclic group, then a representation of $G$ is a vector space $V$ together with $\varphi=\rho(1):V\to V$ such that $\varphi^n=\id_V$.
:::

We need linear algebra to prove:

:::lemma
Let $V$ be a finite-dimensional $\CC$-vector space and $\varphi:V\to V$ of finite order, $\varphi^n=\id$. Then $\varphi$ is diagonalizable.
:::

Returning to $G=\ZZ/n$: invariant subspaces of $\varphi=\rho(1)$ are also invariant for $\varphi^k=\rho(k)$, hence subrepresentations; in a basis which diagonalizes $\varphi$, each $e_i$ is an eigenvector for not only $\varphi$ but also all $\rho(k)=\varphi^k$, so $\operatorname{span}(e_i)$ is a 1-dimensional subrepresentation.

$\implies$ $V$ splits into a direct sum of 1-dimensional (irreducible) representations $V_i=\operatorname{span}(e_i)$, for $(e_i)$ a basis of eigenvectors of $\varphi$, each given by a homomorphism
$$\ZZ/n\to\CC^*=GL_1(\CC),\qquad 1\mapsto\lambda=e^{2\pi ik/n}.$$
There are $n$ distinct irreducible representations ($\leftrightarrow$ the complex $n$-th roots of 1), and every complex representation of $\ZZ/n$ is a direct sum of some number of copies of each of these.

- Now, if $V$ is a $\CC$-representation of a finite abelian group $G$, $\rho:G\to GL(V)$, with $G\cong\ZZ/m_1\times\cdots\times\ZZ/m_r$, the $G$-action is equivalent to the data of $\varphi_1,\dots,\varphi_r:V\to V$ such that $\varphi_i^{m_i}=\id_V$ and which pairwise commute, $\varphi_i\varphi_j=\varphi_j\varphi_i$ (then $\sum a_ie_i\mapsto\prod\varphi_i^{a_i}$, with $e_i$ the generators of the factors $\ZZ/m_i$).

  By the lemma each $\varphi_i$ is diagonalizable, and by the homework, commuting diagonalizable operators are *simultaneously* diagonalizable. In fact: the eigenspaces of $\varphi_i$ are invariant under all $\varphi_j$, and the restriction of $\varphi_j$ to an eigenspace of $\varphi_i$ is of finite order, hence diagonalizable by the lemma. Proceed by induction on $r$.

  This shows that $V$ splits into a $\bigoplus$ of 1-dimensional subrepresentations. Those now correspond to homomorphisms $G\to GL_1(\CC)\cong\CC^*$.

:::definition
For $G$ a finite abelian group, define its **dual** $\wh G=\Hom(G,\CC^*)$.
:::

This is an abelian group using pointwise multiplication: if $\rho,\rho':G\to\CC^*$ are homomorphisms, then so is
$$\rho\rho':G\to\CC^*,\qquad g\mapsto\rho(g)\rho'(g).$$
(⚠ This uses the fact that $\CC^*$ is abelian $\implies(\rho\rho')(g_1g_2)=(\rho\rho')(g_1)(\rho\rho')(g_2)$.)

Concretely, for $G=\ZZ/n$, $\wh G\cong\ZZ/n$ as well, via $\rho\mapsto\rho(1)\in\{e^{2\pi ik/n}\}\cong\ZZ/n$, though there is no canonical map $G\to\wh G$.

Similarly, $G=\ZZ/m_1\times\cdots\times\ZZ/m_r\implies\wh G\cong$ the same ($\rho$ is determined by the images of the generators of $G$, which are roots of 1 in $\CC^*$).

This completes the classification of (complex) representations of finite abelian groups!

## Homomorphisms of representations

:::definition
Given two representations $V,W$ of $G$, a **homomorphism of representations** $\varphi:V\to W$ is a linear map $\varphi:V\to W$ that is **equivariant**, i.e. compatible with the group actions:
$$\varphi(gv)=g\varphi(v)\quad\forall v\in V,\ \forall g\in G.$$
:::

We denote the set of homomorphisms of representations ($G$-equivariant linear maps) by $\Hom_G(V,W)$ (as opposed to all linear maps, $\Hom(V,W)$).

## New representations from old

We can make new representations out of old ones. In particular:

- If $V,W$ are two representations of $G$ and $\varphi\in\Hom_G(V,W)$, then $\ker(\varphi)$ and $\im(\varphi)$ are preserved by $G$, hence are subrepresentations of $V$ and $W$.
($v\in\ker\varphi\implies\varphi(gv)=g\varphi(v)=g\cdot0=0$, so $gv\in\ker\varphi$.)

- If $W\subset V$ is a subrepresentation, then $V/W$ is also a representation (since $g(W)=W$, $g\in G$ maps cosets to cosets: $g(v+W)=gv+W$).

- $V,W$ representations of $G\implies V\oplus W$ is also a representation ($g(v,w)=(gv,gw)$), and so is $V\otimes W$ ($g(v\otimes w)=gv\otimes gw$, extended by linearity).

- $\Hom(V,W)$ (*all* linear maps) is also a $G$-representation, but this requires care: given $\varphi:V\to W$, what can we expect of $g(\varphi):V\to W$?

**Answer:** if $\varphi(v)=w$, then $g(\varphi)(gv)=gw$. So:
$$g(\varphi)=g\circ\varphi\circ g^{-1}\in\Hom(V,W),$$
where the first $g$ is the action of $g$ on $W$ and $g^{-1}$ is the action of $g^{-1}$ on $V$.
(Check: $(gh)(\varphi)=g(h(\varphi))$ ✓.)

Comparing with the above: given $\varphi\in\Hom(V,W)$,
$$\varphi\in\Hom_G(V,W)\ (G\text{-equivariant})\iff g(\varphi)=\varphi\quad\forall g\in G.$$

Specializing to $V^*=\Hom(V,k)$, where $k$ can be equipped with the **trivial representation** (every $g\in G$ acts by $\id$): the **dual representation** of $V$ is $V^*$ with $g(\ell)=\ell\circ g^{-1}$, i.e. $g$ acts on $V^*$ by ${}^t(g^{-1})$, the transpose of the action of $g^{-1}$ on $V$.

Then the isomorphism $V^*\otimes W\cong\Hom(V,W)$ is an isomorphism of representations (i.e. a $G$-equivariant isomorphism): $g(\ell\otimes w)=(\ell\circ g^{-1})\otimes gw$ does map $v\mapsto\ell(g^{-1}v)\,gw$.

## Complete reducibility

:::theorem
Let $V$ be any representation of a finite group $G$ (over $\CC$, or $k$ of characteristic 0), and suppose $W\subset V$ is an invariant subspace (i.e., a subrepresentation). Then there exists another invariant subspace $U\subset V$ such that $V=U\oplus W$ (as a direct sum of representations).
:::

:::corollary
Any finite-dimensional representation of a finite group decomposes into a direct sum of irreducibles.
:::

Two proofs of the theorem. The first one uses:

:::lemma
If $V$ is a $\CC$-representation of a finite group $G$, then there exists a positive definite Hermitian inner product on $V$ which is preserved by $G$:
$$H(gv,gw)=H(v,w)\quad\forall g,v,w,$$
i.e. all the linear operators $g:V\to V$ are **unitary**.
:::

:::proof Proof of the lemma
Let $H_0$ be any Hermitian inner product on $V$, and use the averaging trick to set
$$H(v,w)=\frac1{|G|}\sum_{g\in G}H_0(gv,gw).$$
Then $H$ is still Hermitian and positive definite (hence an inner product), and $H(gv,gw)=H(v,w)$.
:::

:::proof Proof of the theorem
Equip $V$ with a $G$-invariant Hermitian inner product $H$ as in the lemma. Then if $g(W)=W$, $g$ unitary $\implies g(W^\perp)=W^\perp$. So $U=W^\perp$ is a complementary invariant subspace.
:::

:::proof Alternative proof
Choose any complementary subspace $U_0\subset V$ such that $V=U_0\oplus W$. Let $\pi_0:V\to W$ be the projection onto $W$ with kernel $U_0$ ($\pi_0|_{U_0}=0$, $\pi_0|_W=\id$). Define
$$\pi(v)=\frac1{|G|}\sum_{g\in G}g\,\pi_0(g^{-1}v)\in W.$$
Then $\pi:V\to W$ is a homomorphism of representations (i.e. $G$-equivariant: $g\pi g^{-1}=\pi$ for all $g$), so $U=\ker\pi$ is an invariant subspace.

Since $\pi|_W=\id$, $\pi$ is surjective and $V=U\oplus W$ (dimension/rank formula and $U\cap W=\{0\}$).
:::

:::remark Remarks
- The proof fails if $\operatorname{char}(k)\neq0$ (more specifically, if $\operatorname{char}(k)=p$ divides $|G|$). This is one of the reasons that **modular representations** (= over fields of characteristic $>0$) are more complicated.
- It also fails if $G$ is infinite (and doesn’t carry a finite invariant measure), as we can’t use the averaging trick. (Averaging works for compact Lie groups such as $S^1$, $SO(n)$, ….)
:::

:::example
$G=\ZZ$ or $\RR$ acting on $\CC^2$ by $t\mapsto\begin{pmatrix}1&t\\0&1\end{pmatrix}$. Then the first factor $\CC\times0$ is invariant under $G$, but there is no complementary invariant subspace.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 32](/notes/math-55a/32-schurs-lemma-and-the-representations-of-s-3)
**Schur’s lemma**

**Goal:** given $G$, find its irreducible representations, and describe how others decompose into irreducibles.

:::lemma Schur’s Lemma
- If $V,W$ are irreducible representations of $G$, and $\varphi:V\to W$ is any homomorphism of representations, then either $\varphi=0$ or $\varphi$ is an isomorphism.
- Over $k=\CC$: if $V$ is irreducible and $\varphi:V\to V$ is a homomorphism of representations, then $\varphi$ is a multiple of the identity.
:::

:::proof
- Given $\varphi:V\to W$, $\ker(\varphi)$ is an invariant subspace of $V$, i.e. a subrepresentation. Since $V$ is irreducible, either $\ker(\varphi)=0$ ($\varphi$ injective) or $\ker(\varphi)=V$ ($\varphi=0$). Similarly, $\im(\varphi)\subset W$ is invariant, hence either zero ($\varphi=0$) or $W$ ($\varphi$ surjective). Hence either $\varphi=0$ or $\varphi$ is an isomorphism.
- Over $k=\CC$, any $\varphi:V\to V$ has an eigenvalue $\lambda$. Then $\varphi-\lambda I:V\to V$ is also equivariant and has nonzero kernel, hence $\varphi-\lambda I=0$ by the above. Thus $\varphi=\lambda I$.
:::

:::example
Let $V$ be an irreducible representation of $G$, and $h\in Z(G)$, the center of $G$ ($h$ commutes with all $g\in G$). Then the action of $h:V\to V$ satisfies $h(gv)=g\,h(v)$ for all $g\in G$: so $h$ is equivariant, i.e. $h\in\Hom_G(V,V)=\CC\cdot\id$ by Schur’s lemma $\implies$ $h$ acts by a multiple of $\id$.

In particular, if $G$ is abelian and $V$ is irreducible, then every element of $G$ acts by a multiple of $\id$; this gives another proof that irreducible representations of finite abelian groups are 1-dimensional.
:::

(Next time: irreducible representations of $S_3$.)
:::
