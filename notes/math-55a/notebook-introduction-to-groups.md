---
course: math-55a
chapter: 1
section: N2
title: Introduction to Groups
date: 2025-09-03
source-pages: math55-04
---

## Course content

1. (A bit of) group theory: Artin Ch. 2 (2nd ed.).
2. Field theory + vector spaces + linear algebra + multilinear algebra: Axler (4th ed.).
3. More group theory: Artin Ch. 6–7.
4. Intro to representation theory: Artin + Fulton–Harris.

## Groups

A group is a binary operation plus the group axioms:
1. identity element;
2. inverse element;
3. associativity.

It is an abstract concept for operations on things. Operations: addition, composition, …; “things”: numbers, functions, ….

:::definition Group
A **group** $G$ consists of a set $S$ (or $G$) with an operation (law of composition), i.e. a map
$$
m : S \times S \to S, \qquad (a, b) \mapsto m(a, b) = p, \quad a, b, p \in S,
$$
written $m(a, b) = a * b$ or $ab$ or $a \times b$, …, satisfying the **group axioms**:
1. there exists an identity element $e$ such that $ae = ea = a$ for all $a \in S$;
2. for all $a \in S$ there exists $a^{-1}$ such that $aa^{-1} = a^{-1}a = e$;
3. associativity: for all $a, b, c \in S$, $(ab)c = a(bc)$.
:::

:::remark
1. The axioms imply the **cancellation law**, i.e. for all $a, b, c \in S$, $ab = ac \Rightarrow b = c$.
2. We write $G = (S, *)$.
3. Generalizations: if we omit the second axiom (inverses), it is a **monoid**.
4. If we omit the first axiom (identity), it is a **semigroup**.
5. If we have a group which is commutative, it is an **abelian group**. When this is the case we use $a + b$ instead of $a \cdot b$, $a * b$, etc., by convention.
:::

## Examples

:::example
0. The trivial group $G = \{e\}$, with operation $e \cdot e = e$.
1. $(\ZZ, +)$, $(\QQ, +)$, $(\RR, +)$, $(\CC, +)$.
2. Groups with two elements. If $|G| = 2$, let $e$ be the identity; there exists $x$, and $x$ is its own inverse, since $e \cdot e = e$, $xe = x$, $ex = x$, $xx = e$. Think $\{0, 1\}$ (even, odd) with $+ \bmod 2$, or $\{\pm 1\}$ under multiplication ($xx = e$). All of these groups are isomorphic to each other.
3. $\ZZ/n = \{0, 1, \dots, n-1\}$ with operation $+$ (addition mod $n$):
$$
(a, b) \mapsto \begin{cases} a + b & \text{if } a + b < n, \\ a + b - n & \text{else.} \end{cases}
$$
Similarly $\RR/\ZZ = [0, 1) \subset \RR$, with $(a, b) \mapsto a + b$ if $a + b < 1$ and $a + b - 1$ else, also under addition.
4. Nonzero numbers with multiplication: $\QQ^*, \RR^*, \CC^*$ with multiplication (identity $1$, inverse $\frac{1}{x}$). The unit circle
$$
S^1 = \{ z \in \CC : |z| = 1 \} = \{ e^{i\theta} : \theta \in \RR \}
$$
is a subgroup of $\CC^*$.

(Margin: quaternions?)
:::

## Symmetries and permutations (the big boy)

:::definition Injective, surjective, bijective
- $f : A \to B$ is **injective** (one-to-one) if for all $x, y \in A$, $x \neq y \Rightarrow f(x) \neq f(y)$; or, $f(x) = f(y) \Rightarrow x = y$ (each element of $B$ is hit by at most one $x \in A$).
- $f : A \to B$ is **surjective** (onto) if for all $b \in B$ there exists $a \in A$ such that $f(a) = b$.
- $f : A \to B$ is **bijective** (one-to-one correspondence) if it is injective and surjective.
:::

:::definition Permutation
A **permutation** of $A$ is a bijection $A \to A$. The set of permutations of $A$, with composition, is a group, $\operatorname{Perm}(A)$.
- Identity: $\id : A \to A$, $a \mapsto a$.
- Inverses come from the inverse mapping?
- Note: composition is associative.
:::

:::definition Symmetric group
The **symmetric group** $S_n = \operatorname{Perm}(\{1, \dots, n\})$ is the symmetric group on $n$ elements.
:::

:::example
$S_3 = \operatorname{Perm}(\{a, b, c\}) \cong D_3$: $S_3$ has the symmetries of an equilateral triangle. These are the identity, the rotations by $120^\circ$ and $240^\circ$, and the reflections across the three axes.

![Equilateral triangle with vertices a, b, c, its three reflection axes dashed, and a 120 degree rotation arrow at the centre](/notes/math-55a/figures/n3-triangle-symmetries.svg)

As arrangements of $1, 2, 3$:
$$
\{1,2,3\} \to \{3,1,2\} \to \{2,3,1\} \to \{3,2,1\} \to \{2,1,3\} \to \{1,3,2\}.
$$
:::

:::example Groups of invertible matrices
$$
GL_n(\RR) = \{ \text{invertible } n \times n \text{ matrices with real entries} \},
$$
the **general linear group**; likewise $GL_n(\CC)$, …, $GL_n(\ZZ/2)$, … etc.
:::
