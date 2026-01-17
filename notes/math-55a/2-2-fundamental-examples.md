---
course: math-55a
chapter: 2
section: 2.2
title: Fundamental Examples
---

# Section 2.2: Fundamental Examples

## Integers and modular arithmetic

:::example
**The integers:** The set $(\mathbb{Z}, +)$ is an abelian group with identity $0$ and inverse $-n$ for each $n$. This is the prototypical infinite cyclic group.
:::

:::example
**Integers mod $n$:** $\mathbb{Z}/n\mathbb{Z} = \{0, 1, 2, \ldots, n-1\}$ with addition mod $n$:

$$a + b \coloneqq \begin{cases}
    a + b & \text{if } a + b < n \\
    a + b - n & \text{if } a + b \ge n.
\end{cases}$$

Identity is $0$, inverse of $a$ is $n - a$ (mod $n$). This is an abelian group of order $n$.
:::

:::proposition
**Units mod $n$:** The set $(\mathbb{Z}/n\mathbb{Z})^\times = \{a \in \mathbb{Z}/n\mathbb{Z} : \gcd(a, n) = 1\}$ forms a group under multiplication mod $n$. Its order is $\varphi(n)$, Euler's totient function.

:::proof
**Closure:** If $\gcd(a, n) = \gcd(b, n) = 1$, then $\gcd(ab, n) = 1$ (if a prime $p$ divides both $ab$ and $n$, it divides $a$ or $b$, contradicting coprimality).

**Identity:** $1$ is coprime to $n$.

**Inverses:** If $\gcd(a, n) = 1$, then by Bézout's identity, $\exists r, s$ with $ra + sn = 1$. Thus $ra \equiv 1 \pmod{n}$, so $r$ is a multiplicative inverse.
:::
:::

## Multiplicative groups of fields

:::example
**Multiplicative groups:** $\mathbb{Q}^* = \mathbb{Q} \setminus \{0\}$, $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$, and $\mathbb{C}^* = \mathbb{C} \setminus \{0\}$ are abelian groups under multiplication, with identity $1$ and inverse $1/x$.
:::

:::example
**The circle group:** The unit circle $S^1 = \{z \in \mathbb{C} : |z| = 1\}$ is a group under multiplication. It is isomorphic to $\mathbb{R}/\mathbb{Z}$ via $t \mapsto e^{2\pi i t}$. This is a *compact* abelian group and plays a fundamental role in Fourier analysis and representation theory.
:::

:::example
**Roots of unity:** For each $n \ge 1$, the $n$th roots of unity $\mu_n = \{z \in \mathbb{C} : z^n = 1\} = \{e^{2\pi i k/n} : k = 0, 1, \ldots, n-1\}$ form a cyclic group of order $n$ under multiplication. We have $\mu_n \cong \mathbb{Z}/n\mathbb{Z}$.
:::

## Symmetric and permutation groups

:::definition
**Permutation group:** A ***permutation*** of a set $X$ is a bijection $\sigma : X \to X$. The set of all permutations of $X$ forms a group $\operatorname{Sym}(X)$ under composition, with identity $\operatorname{id}_X$ and inverse $\sigma^{-1}$.
:::

:::definition
**Symmetric group:** The ***symmetric group*** on $n$ letters is $S_n = \operatorname{Sym}(\{1, 2, \ldots, n\})$. It has order $n!$ and is non-abelian for $n \ge 3$.
:::

:::example
**Symmetries of a triangle:** $S_3$ can be visualized as symmetries of an equilateral triangle: 3 rotations (including identity) and 3 reflections.

Labeling vertices $1, 2, 3$, rotations give permutations $e, (123), (132)$ and reflections give $(12), (13), (23)$. Thus $|S_3| = 6$.
:::

## Matrix groups

:::definition
**General linear group:** The ***general linear group*** $\operatorname{GL}_n(\mathbb{F})$ is the group of invertible $n \times n$ matrices over a field $\mathbb{F}$, under matrix multiplication. A matrix is invertible iff its determinant is nonzero.
:::

:::definition
**Special linear group:** The ***special linear group*** $\operatorname{SL}_n(\mathbb{F}) = \{A \in \operatorname{GL}_n(\mathbb{F}) : \det(A) = 1\}$ is a subgroup of $\operatorname{GL}_n(\mathbb{F})$.
:::

:::note
Matrix groups are our first examples of *Lie groups*—groups that are also smooth manifolds. They are central to representation theory: a representation of $G$ is a homomorphism $\rho : G \to \operatorname{GL}_n(\mathbb{F})$, making $G$ act on $\mathbb{F}^n$ by linear transformations. This perspective unifies group theory with linear algebra.
:::

:::example
**Non-abelian example:** In $\operatorname{GL}_2(\mathbb{R})$, let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$. Then:

$$AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \neq \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = BA.$$

So $\operatorname{GL}_2(\mathbb{R})$ is non-abelian.
:::