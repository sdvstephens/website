---
course: math-55a
chapter: 3
section: N21
title: Linear Maps, Duality and Eigenvectors
source-pages: m55a-4
---

## Coordinates

A vector $v = \sum x_j v_j \in V$ is represented by the column $x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$.

How is $\varphi \in \Hom(V, W)$ represented?? Change of basis? (Open questions in the notes.)

## Direct sums

$V \cong W_1 \oplus \dots \oplus W_n$ if the $W_i$ span $V$ (for every $v \in V$ there exist $w_i \in W_i$ such that $v = w_1 + \dots + w_n$) and are independent. Then
$$
\varphi : \bigoplus W_i \to V, \qquad (w_i) \mapsto \sum w_i
$$
is an isomorphism.

$V = W_1 \oplus W_2 \iff W_1 \cap W_2 = \{0\}$ and $\dim W_1 + \dim W_2 = \dim V$, i.e.
$$
\dim V = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2) = \dim W_1 + \dim W_2.
$$

:::theorem Nullity–rank
$$
\dim V = \underbrace{\dim(\ker \varphi)}_{\operatorname{nullity}(\varphi) \,=\, \operatorname{null}(\varphi)} + \underbrace{\dim(\Img \varphi)}_{\rank(\varphi)}.
$$
:::

## Duality

:::definition Dual space
The **dual** of $V$ is $V^* = \Hom(V, K)$.
:::

:::definition Dual basis
Let $(e_i)$ be a finite ordered basis of $V$. Then the **dual basis** $(e_i^*)$ of $V^*$ consists of the $e_i^*$ such that
$$
e_i^*(e_j) = \delta_{ij} = \begin{cases} 1 & i = j, \\ 0 & \text{else.} \end{cases}
$$
When $i \neq j$ they are “orthogonal”, so $e_i^*$ “sees” no $e_j$; when $i = j$ they are aligned together.
:::

The map
$$
V \to V^{**}, \qquad v \mapsto \mathrm{ev}_v = \big( V^* \to K,\ \ell \mapsto \ell(v) \big)
$$
is an isomorphism if $\dim V < \infty$ (finite-dimensional $V$), and injective if $\dim V = \infty$.

:::definition Annihilator
For $U \subseteq V$, the **annihilator** of $U$ is
$$
\operatorname{Ann}(U) = \{ \ell \in V^* \mid \ell(u) = 0 \ \forall u \in U \}, \qquad \dim(\operatorname{Ann}(U)) = n - \dim U.
$$
:::

:::example
For $e_1^*, e_2^*, e_3^*$ on $K^3$, $e_1^*(v)$ is the $e_1$-coordinate of $v$: $e_1^*(x, y, z) = x$.
:::

With $I$ the identity matrix, in suitable bases
$$
\mathcal{M}(\varphi) = \left( \begin{array}{c|c} I_{\rank} & 0 \\ \hline 0 & 0 \end{array} \right),
$$
where the top block of rows corresponds to $\Img \varphi$ and the right block of columns to $\ker \varphi$.

:::definition Transpose
The **transpose** of $\varphi : V \to W$ is $\varphi^t : W^* \to V^*$, $\varphi^t(\ell) = \ell \circ \varphi$.
:::

If $\dim < \infty$:
$$
\ker \varphi^t = \operatorname{Ann}(\Img \varphi), \qquad \Img \varphi^t = \operatorname{Ann}(\ker \varphi),
$$
and
$$
\mathcal{M}\big(\varphi^t, (f_j^*), (e_i^*)\big) = \mathcal{M}(\varphi)^T.
$$

## Quotients, invariant subspaces and eigenvectors

Quotient: $U \subset V \Rightarrow$ cosets.

:::definition Invariant subspace
For $\varphi \in \Hom(V, V)$, a subspace $W \subseteq V$ is **invariant** if $\varphi(W) \subset W$, i.e. $\{\varphi(w) \mid w \in W\} \subseteq W \subseteq V$.
:::

:::definition Eigenspace
The **eigenspaces** of $\varphi$ are $\ker(\varphi - \lambda I)$.
:::

Consider a basis of eigenvectors $v_i \in V$, with $v_i \neq 0$, so $\varphi(v_i) = \lambda_i v_i$. Let $W \subseteq V$ be $\operatorname{span}(v)$; then $\varphi(v)$ is some scalar times $v$, i.e. $\varphi(v) = \lambda v$ for some $\lambda \in K$.

The generalized kernel is $\operatorname{gker} \varphi = \ker \varphi^N$ for all $N \geq \dim V$.

Let’s find all eigenvectors for $\varphi$! Then
$$
\varphi(v) = \lambda v \implies \varphi(v) - \lambda v = 0 \implies \varphi(v) - \lambda I(v) = 0 \implies (\varphi - \lambda I)(v) = 0,
$$
so $v \neq 0$ is an eigenvector for $\lambda \iff v \in \ker(\varphi - \lambda I)$.

## Nilpotent maps

:::definition Nilpotent
$N : V \to V$ is **nilpotent** if $N^k = 0$ for some $k \geq 1$.
:::

:::example
On $\RR^2$, let $N(x, y) = (y, 0)$, with matrix $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$. Then
$$
N^2(x, y) = N(y, 0) = (0, 0)\ \checkmark
$$
So $N^2 = 0$, and the index of nilpotency is $2$.
:::

## Orbit counting

$$
|S/G| = \frac{1}{|G|} \sum_{g \in G} |\operatorname{Fix}(g)|.
$$
