---
course: math-55a
chapter: 4
section: 15
title: Inner Product Spaces, Orthogonal and Self-Adjoint Operators
date: 2025-10-06
lecturer: Denis Auroux
source-pages: 1-5
---

## Recall: bilinear forms

- A **bilinear form** $b : V \times V \to k$ corresponds to $\varphi_b \in \Hom(V, V^*)$,
$$\varphi_b(v) = b(v, \cdot) = \big(V \to k,\ w \mapsto b(v,w)\big).$$
This gives an isomorphism $B(V) \simeq \Hom(V, V^*)$.
- $b$ is **nondegenerate** if $\varphi_b$ is an isomorphism.
- In a basis $(e_1, \dots, e_n)$, represent $b$ by a matrix $A$ with entries $a_{ij} = b(e_i, e_j)$:
$$b\Big(\sum x_i e_i, \sum y_j e_j\Big) = \sum a_{ij} x_i y_j = X^T A Y.$$
$b$ is symmetric iff $A$ is symmetric ($a_{ij} = a_{ji}$), and nondegenerate iff $A$ is invertible.

:::definition
If $S \subset V$ is a subspace of a vector space equipped with a bilinear form $b : V \times V \to k$, we define its **orthogonal complement**
$$S^\perp = \{v \in V \mid b(v,w) = 0 \ \forall w \in S\}.$$
This is a vector subspace.
:::

Warning: this is most intuitive if $b$ is symmetric or skew. Otherwise we have to worry about “left-orthogonal” vs. “right-orthogonal” to $S$.

:::lemma
If $b$ is nondegenerate then $\dim S^\perp = \dim V - \dim S$ (else $\geq$).
:::

:::proof
$$S^\perp = \ker\big(V \to S^*,\ v \mapsto \varphi_b(v)|_S\big),$$
where this map is the composition of $\varphi_b : V \to V^*$ and the restriction $r : V^* \twoheadrightarrow S^*$, $\ell \mapsto \ell|_S$. By the rank theorem, $\dim S^\perp = \dim V - \rank(r \circ \varphi_b)$. If $b$ is nondegenerate then $\varphi_b$ is an isomorphism and $r$ is surjective, so $\rank(r \circ \varphi_b) = \dim S^* = \dim S$; in general $\leq$.
:::

:::example
- $V = \RR^n$ with the standard dot product $b(v,w) = \sum_{i=1}^n v_i w_i$: then $V = S \oplus S^\perp$, the “usual” orthogonal complement, because $S \cap S^\perp = \{0\}$ (see below) and $\dim S + \dim S^\perp = \dim V$.
- But for $b : k^2 \times k^2 \to k$,
$$b((x_1,x_2),(y_1,y_2)) = x_1 y_2 - x_2 y_1 \qquad \text{(skew-symmetric, nondegenerate)},$$
if $S \subset k^2$ is the 1-dimensional subspace spanned by any nonzero vector $v$, then $S^\perp = S$!! (Because $b(v,w) = 0 \iff \det(v,w) = 0 \iff w \in k \cdot v = S$.)
:::

## Inner product spaces

:::definition
An **inner product space** is a vector space $V$ over $\RR$ together with a **symmetric**, **definite positive** bilinear form $\langle \cdot, \cdot \rangle : V \times V \to \RR$.
:::

**Symmetric:** $\langle u, v \rangle = \langle v, u \rangle$. **Definite positive:** $\langle u, u \rangle \geq 0$ for all $u \in V$, and $\langle u, u \rangle = 0$ iff $u = 0$.

This definition only makes sense over an **ordered** field, so that “$\langle u, u \rangle \geq 0$” makes sense. In practice this means $\RR$. We can’t do this over $\CC$ (we’ll see a workaround: Hermitian forms).

- Let $\varphi : V \to V^*$, $v \mapsto \langle v, \cdot \rangle$, be the linear map corresponding to $\langle \cdot, \cdot \rangle$. Then $\langle \cdot, \cdot \rangle$ definite positive $\Rightarrow$ $\varphi$ is injective (since for all $v \neq 0$, $\varphi(v) \neq 0$! $\varphi(v)(v) > 0$) $\Rightarrow$ (assuming $\dim V < \infty$) $\varphi$ is an **iso** $V \xrightarrow{\sim} V^*$, i.e. $\langle \cdot, \cdot \rangle$ is **nondegenerate**. (The converse is false: $\langle \cdot, \cdot \rangle$ nondegenerate $\not\Rightarrow$ positive.)

:::proposition
$V$ a finite-dimensional inner product space, $S \subset V$ a subspace $\Rightarrow$ $V = S \oplus S^\perp$.
:::

:::proof
- We’ve seen: $\langle \cdot, \cdot \rangle$ is nondegenerate, so $\dim S^\perp = \dim V - \dim S$.
- Since $\langle \cdot, \cdot \rangle$ is positive definite, $v \in S \cap S^\perp \Rightarrow \langle v, v \rangle = 0 \Rightarrow v = 0$. So $S \cap S^\perp = \{0\}$. Since the dimensions add up to $\dim V$, this implies $S \oplus S^\perp = V$.
:::

:::definition
- The **norm** of a vector is $\|v\| = \sqrt{\langle v, v \rangle}$.
- $v, w \in V$ are **orthogonal** if $\langle v, w \rangle = 0$.
:::

**Observe:** $\|v - w\|^2 = \langle v - w, v - w \rangle = \|v\|^2 + \|w\|^2 - 2\langle v, w \rangle$.

- If $v$ and $w$ are orthogonal then $\|v - w\|^2 = \|v\|^2 + \|w\|^2$ (Pythagorean theorem).
- In general, by analogy with the law of triangles, we define the **angle** between 2 vectors,
$$\measuredangle(v,w) = \cos^{-1}\left(\frac{\langle v, w \rangle}{\|v\|\,\|w\|}\right).$$
This only makes sense if $|\langle v, w \rangle| \leq \|v\|\,\|w\|$?

:::theorem Cauchy–Schwarz inequality
For all $u, v \in V$, $|\langle u, v \rangle| \leq \|u\|\,\|v\|$.
:::

:::proof
The inequality is unaffected by scaling, so we can assume $\|u\| = 1$. Decompose $v$ along $V = S \oplus S^\perp$ where $S = \operatorname{span}(u) \subset V$. Explicitly, $v = v_1 + v_2$, with $v_1 = \langle v, u \rangle u \in \operatorname{span}(u)$ and $v_2 = v - \langle v, u \rangle u$ orthogonal to $u$. Then $v_1 \perp v_2$, so
$$\|v\|^2 = \|v_1\|^2 + \|v_2\|^2 \geq \|v_1\|^2 = \langle v, u \rangle^2.$$
This is the desired inequality for $\|u\| = 1$.
:::

## Orthonormal bases

:::definition
Let $V$ be finite-dimensional over $\RR$ with inner product $\langle \cdot, \cdot \rangle$. A basis $v_1, \dots, v_n$ of $V$ is said to be **orthonormal** if
$$\langle v_i, v_j \rangle = \begin{cases} 1 & i = j \quad (\text{i.e. } \|v_i\| = 1) \\ 0 & i \neq j \quad (\text{i.e. } v_i \perp v_j). \end{cases}$$
:::

In such a basis, $(V, \langle \cdot, \cdot \rangle) \cong (\RR^n \text{ with the standard dot product})$.

:::theorem
Every finite-dimensional inner product space (over $\RR$) has an orthonormal basis.
:::

:::proof Proof 1
By induction on $\dim(V)$: choose $v \neq 0 \in V$, and let $v_1 = \frac{v}{\|v\|}$, so $\|v_1\| = 1$. Then let $S = \operatorname{span}(v_1)$, so $V = S \oplus S^\perp$. Let $v_2, \dots, v_n$ be an orthonormal basis for $S^\perp$ (the restriction of $\langle \cdot, \cdot \rangle$ to $S^\perp$ is an inner product!). Then $v_1, \dots, v_n$ is an orthonormal basis for $V$ (check!).
:::

:::proof Proof 2
Start with any basis $w_1, \dots, w_n$ of $V$ and use the **Gram–Schmidt process**. First set $v_1 = \frac{w_1}{\|w_1\|}$. Then take $w_2 - \langle w_2, v_1 \rangle v_1$, which is $\perp v_1$ (and nonzero by independence of the $w_i$), and set
$$v_2 = \frac{w_2 - \langle w_2, v_1 \rangle v_1}{\|w_2 - \langle w_2, v_1 \rangle v_1\|},$$
and so on: set
$$v_j = \frac{w_j - \sum_{i=1}^{j-1} \langle w_j, v_i \rangle v_i}{\big\|w_j - \sum_{i=1}^{j-1} \langle w_j, v_i \rangle v_i\big\|}.$$
Then $(v_1, \dots, v_n)$ is an orthonormal basis.
:::

So: every finite-dimensional inner product space over $\RR$ is isomorphic (as an inner product space, not just as a vector space) to the standard $\RR^n$, $n = \dim V$.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 16](/notes/math-55a/16-adjoints-the-spectral-theorem-and-orthogonal-operators)
**Operators on inner product spaces**

Let $(V, \langle \cdot, \cdot \rangle)$ be an inner product space. There are two special classes of linear operators on $V$ of interest to us.

:::definition
Say $T : V \to V$ is an **orthogonal operator** if it respects the inner product, i.e. $\langle Tu, Tv \rangle = \langle u, v \rangle$ for all $u, v \in V$.
:::

(In other terms, $T$ “preserves lengths and angles”.)

**Remarks.**

1. Orthogonal operators map orthonormal bases to orthonormal bases!
$$\langle Te_i, Te_j \rangle = \langle e_i, e_j \rangle = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{otherwise.} \end{cases}$$
In particular, orthogonal operators are always invertible!
2. If $T$ is orthogonal then $T^{-1}$ is orthogonal:
$$\langle T^{-1}u, T^{-1}v \rangle = \langle T(T^{-1}u), T(T^{-1}v) \rangle = \langle u, v \rangle \quad \forall u, v,$$
where the first equality is because $T$ is orthogonal. If $T_1, T_2$ are orthogonal then so is $T_1 T_2$ (check!).

:::proposition
Hence: orthogonal operators form a **subgroup** of $\Aut(V)$.
:::

3. If $M$ is the matrix representing $T$ in an orthonormal basis, then $M^T M = I$. Indeed: the entries of $M^T M$ are the dot products of the columns of $M$!
$$(M^T M)_{ij} = \sum_k M^T_{ik} M_{kj} = \sum_k M_{ki} M_{kj} = \langle M(e_i), M(e_j) \rangle = \langle e_i, e_j \rangle.$$

**Adjoint operator**

:::definition
Let $T : V \to V$ be a linear operator on an inner product space $(V, \langle \cdot, \cdot \rangle)$. There exists a unique linear operator $T^* : V \to V$, called the **adjoint** of $T$, such that
$$\langle v, T(w) \rangle = \langle T^*(v), w \rangle \quad \forall v, w \in V.$$
:::

Indeed: given $v \in V$, the linear functional
$$V \to \RR, \qquad w \mapsto \langle v, T(w) \rangle$$
is, using nondegeneracy of $\langle \cdot, \cdot \rangle$, given by the inner product of $w$ with some element of $V$, which we call $T^*(v)$; then check this has linear dependence on $v$.

**Equivalently:** $\langle \cdot, \cdot \rangle$ defines an isomorphism $\varphi : V \xrightarrow{\sim} V^*$. Then $T^*$ is the composition
$$\begin{aligned} V \xrightarrow{\ \varphi\ } V^* &\xrightarrow{\ T^t\ } V^* \xrightarrow{\ \varphi^{-1}\ } V \\ v \longmapsto \langle v, \cdot \rangle &\longmapsto \langle v, T(\cdot) \rangle = \langle T^*(v), \cdot \rangle \longmapsto T^*(v). \end{aligned}$$

:::definition
$T : V \to V$ is **self-adjoint** if $T^* = T$ (i.e. $\langle v, Tw \rangle = \langle Tv, w \rangle$ for all $v, w$).
:::

In an orthonormal basis $(e_1, \dots, e_n)$ of $V$, $\langle v, w \rangle = v^t w$ (the transpose gives a row vector; $w$ is a column vector). So if the matrix of $T$ is $M$ and that of $T^*$ is $N$,
$$\left.\begin{aligned} \langle v, T(w) \rangle &= v^t M w \\ \langle T^*(v), w \rangle &= (Nv)^t w = v^t N^t w \end{aligned}\right\} \Rightarrow \text{comparing: } N^t = M, \text{ so } N = M^t.$$

:::proposition
Hence: $M(T^*) = M(T)^t$ in an orthonormal basis; $T$ is self-adjoint $\iff$ $M(T)$ is **symmetric**.
:::

Note that self-adjoint operators ($\sim$ symmetric matrices) need not be invertible. For example $0$ is a self-adjoint operator…

:::proposition
If $T$ is self-adjoint and $S \subset V$ is an invariant subspace ($T(S) \subset S$), then $S^\perp$ is also an invariant subspace ($T(S^\perp) \subset S^\perp$).
:::

:::proof
Let $v \in S^\perp$. Then for all $w \in S$, $T(w) \in S$, so
$$\langle Tv, w \rangle = \langle v, Tw \rangle = 0,$$
where the first equality is because $T^* = T$ and the second because $v \in S^\perp$, $Tw \in S$. Since $\langle Tv, w \rangle = 0$ for all $w \in S$, we get $Tv \in S^\perp$.
:::

:::theorem The spectral theorem for real self-adjoint operators
If $T : V \to V$ is self-adjoint then $T$ is diagonalizable, with real eigenvalues. Even more, $T$ can be diagonalized in an orthonormal basis of $(V, \langle \cdot, \cdot \rangle)$!
:::

The proof (to be seen next time) uses the following key observation:

:::lemma
If $T$ is self-adjoint then for all $a \in \RR_+$ (i.e. $a > 0$), $T^2 + a$ is invertible.
:::

:::proof
For all $v \in V - \{0\}$,
$$\begin{aligned} \langle (T^2 + a)v, v \rangle &= \langle T^2 v, v \rangle + a\langle v, v \rangle \\ &= \langle Tv, Tv \rangle + a\langle v, v \rangle = \|Tv\|^2 + a\|v\|^2 > 0. \end{aligned}$$
So $(T^2 + a)v \neq 0$. Hence $\ker(T^2 + a) = 0$.
:::

:::corollary
If $p \in \RR[x]$ is a quadratic without real roots and $T^* = T$, then $p(T)$ is invertible.
:::

:::proof
It is enough to show $T^2 + bT + c$ is invertible whenever $b^2 - 4c < 0$. Write
$$T^2 + bT + c = \Big(T + \frac{b}{2}\Big)^2 + a, \qquad a = c - \frac{b^2}{4} > 0,$$
where $T + \frac{b}{2}$ is self-adjoint; so by the lemma (applied to $T + \frac{b}{2}$) this is invertible.
:::
:::
