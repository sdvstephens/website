---
course: math-55a
chapter: 4
section: N25
title: Midterm Review: Generalized Eigenspaces, Bilinear Forms and Inner Products
status: incomplete
source-pages: 1-3
---

## Generalized eigenspaces and Jordan form

For $\varphi : V \to V$,
$$\operatorname{gker}\varphi = \bigcup_{n \in \NN} \ker \varphi^n, \qquad V_\lambda \coloneqq \operatorname{gker}(\varphi - \lambda I).$$

:::proposition
Over $\CC$,
$$V = \bigoplus_{\lambda} V_\lambda,$$
with $\lambda$ running over the eigenvalues of $\varphi$.
:::

:::proposition
$$V = \operatorname{gker}\varphi \oplus \operatorname{Im}\varphi^{n}, \qquad n = \dim V.$$
:::

$(\varphi - \lambda I)^k v$: $v$ is a [generalized eigen]vector.

Decompose into vector spaces: yay, because proof by induction ⟹ Jordan blocks.

:::theorem
For $\varphi : V \to V$ there exists a basis such that
$$\mathcal{M}(\varphi) = \begin{pmatrix} J_1 & 0 & 0 \\ 0 & \ddots & 0 \\ 0 & 0 & J_m \end{pmatrix}, \qquad J_i = \begin{pmatrix} \lambda_i & 1 & & \\ & \lambda_i & \ddots & \\ & & \ddots & 1 \\ & & & \lambda_i \end{pmatrix}.$$
:::

## Bilinear form review

A **bilinear form** is $B : V \times V \to k$, $(v, w) \mapsto B(v, w)$, linear in each slot for all $u, v \in V$ and all $a, b \in k$.

In coordinates, $v \sim \begin{bmatrix} \vdots \end{bmatrix} = x$ and $w \sim \begin{bmatrix} \vdots \end{bmatrix} = y$, and
$$B(v, w) = x^t M y, \qquad M = (a_{ij}), \quad a_{ij} = B(e_i, e_j).$$

Bilinear forms correspond to $\Hom(V, V^*)$:
$$\{\text{bilinear forms}\} \longleftrightarrow \Hom(V, V^*), \qquad B \longmapsto \varphi_B : V \to\ ??$$

:::definition
$B$ is **nondegenerate** if $\varphi_B$ is an isomorphism; equivalently, for all $v \in V$ with $v \neq 0$ there exists $w \in V$ with $B(v, w) \neq 0$.
:::

:::definition
$B$ is **symmetric** if $B(v, w) = B(w, v)$.

- **Skew-symmetric** (alternating): $B(v, w) = -B(w, v)$.
- **Positive definite**: for all $v \in V$, $B(v, v) \geq 0$, and $B(v, v) > 0$ for all $v \neq 0$.
:::

The **orthogonal** of $S \subset V$ is
$$S^\perp \coloneqq \{w \in V \mid B(v, w) = 0 \ \forall v \in S\}.$$

An **inner product** $\langle \cdot, \cdot \rangle$ in an $\RR$-vector space $V$ is a positive definite symmetric bilinear form.

:::definition
For a $\CC$-vector space $V$, a **Hermitian** (?) form is a conjugate-symmetric, sesquilinear, positive definite form $H : V \times V \to \CC$:
$$H(u, v) = \overline{H(v, u)}.$$
We write $H(\cdot, \cdot) = \langle \cdot, \cdot \rangle$.
:::

:::definition Orthonormal
$e_i$ is **orthonormal** if
$$\langle e_i, e_j \rangle = \delta_{ij} = \begin{cases} 1 & \text{if } i = j, \\ 0 & \text{if } i \neq j. \end{cases}$$
:::

:::proposition
Let $V$ be an inner product space (with Hermitian inner product). Then:

1. $V = S \oplus S^\perp$;
2. ??? on orthonormal [bases];
3. $|\langle u, v \rangle| \leq \|u\| \, \|v\|$, and one can use this to show …
:::

:::definition Adjoint
The **adjoint** of $T : V \to V$ is the unique linear operator $T^*$ such that for all $u, v \in V$,
$$\langle Tu, v \rangle = \langle u, T^* v \rangle.$$
:::

## Exercises from Axler

### Chapter 2

:::exercise Axler 2.A.12
Suppose …
:::

### Chapter 6

:::exercise Axler 6.A.2
Suppose $A \in \mathcal{L}(V)$, and define $\langle \cdot, \cdot \rangle_1$ by $\langle u, v \rangle_1 = \langle Au, Av \rangle$ for all $u, v \in V$. Show that $\langle \cdot, \cdot \rangle_1$ is an inner product on $V$ if and only if $A$ is injective.

:::solution
- Positive definite: for all $v \in V$ …
- Symmetric: …
:::
:::
