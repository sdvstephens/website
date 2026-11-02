---
course: math-55a
chapter: 1
section: 1
title: Groups, Subgroups and Homomorphisms
date: 2025-09-03
lecturer: Denis Auroux
source-pages: A01-1–A01-4
---

:::readings Review sessions and handouts
- Lillian MacArthur, [Proofwriting basics for Math 55](/notes/math-55a/readings/proofwriting-basics.pdf)
:::

## Course content

The course covers: (1) group theory (roughly Artin, chapter 2); (2) fields and vector spaces, linear and multilinear algebra (Axler); (3) more group theory (Artin, chapters 6–7); (4) an introduction to representation theory (Artin and Fulton–Harris). You should have Artin, *Algebra* (2nd edition), and Axler, *Linear Algebra Done Right*.

## Groups

**Groups** are an abstract structure that models the common features of concrete objects such as

- numbers,
- permutations,
- linear transformations,
- symmetries.

:::definition
A **group** $G$ consists of a set $S$ together with a **law of composition**, i.e. a map
$$
m : S \times S \to S, \qquad (a,b) \mapsto a\cdot b \quad (\text{sometimes } a * b, \dots)
$$
satisfying the following axioms:

1. there exists an **identity element** $e \in S$ such that $\forall a \in S$, $ae = ea = a$. ($\forall$ means “for all”.)
   [Note: $e$ is unique! If $e, e'$ both act as identity, then $e = ee' = e'$.]
2. **inverses** exist: $\forall a \in S$, $\exists b \in S$ such that $ab = ba = e$. Write $b = a^{-1}$. ($\exists$ means “there exists”.)
3. **associativity**: $\forall a, b, c \in S$, $(ab)c = a(bc)$. [So we can write just $abc$.]
:::

:::remark
- Associativity (together with inverses) implies the **cancellation law**: $\forall a, b, c \in S$, $ab = ac \Rightarrow b = c$.
  (Proof: $ab = ac \Rightarrow a^{-1}(ab) = a^{-1}(ac) \Rightarrow eb = ec$ by associativity and the inverse axiom, so $b = c$.)
- Technically the group is the pair $(S, m)$, but in real life we’ll just write $G$ for the set and talk of elements of $G$.
:::

:::definition Variants
- If we omit the second axiom (inverses), we have a **monoid**. If we also omit the first (identity) and only keep associativity, we have a **semigroup**.
- If we have a group whose law is **commutative**, i.e. $ab = ba$ for all $a, b$, we say that $G$ is **abelian** (and may denote the operation $+$ instead).
:::

## Examples of groups

:::example The trivial group
$G = \{e\}$, with $e \cdot e = e$.

(Usually not an interesting example. Don’t give this as the answer to a HW problem asking for an example.)
:::

:::example Number systems
$(\ZZ, +)$ (the integers), or $\QQ$, $\RR$, $\CC$ (rationals, reals, complex numbers) with addition. Identity: $0$. Inverse: $-x$.

But the natural numbers $(\NN, +)$ only form a monoid!
:::

:::example A group with two elements?
If $|G| = 2$, let $e$ be the identity and $x$ the other element. Necessarily $e \cdot e = e$, $e \cdot x = x$, $x \cdot e = x$. What about $x \cdot x$?

We can think of

- $\{0, 1\}$, or $\{\text{even}, \text{odd}\}$, with addition mod 2 ($1 + 1 = 0$);
- $\{+1, -1\}$ with multiplication.
:::

:::question
Come up with an example of a group with 8 elements. Convince yourself it is a group. Can you find another example?
:::

:::example Integers mod $n$
$\ZZ/n = \{0, 1, \dots, n-1\}$ with group law given by **addition mod $n$**:
$$
(a, b) \mapsto \begin{cases} a + b & \text{if } a + b \le n - 1, \\ a + b - n & \text{otherwise} \end{cases}
$$
(denote this by $+$). This is a finite group with $n$ elements. (We’ll see a better definition soon.)

Similarly, $\RR/\ZZ$: $S = [0, 1) \subset \RR$ with addition
$$
(a, b) \mapsto \begin{cases} a + b & \text{if } a + b < 1, \\ a + b - 1 & \text{otherwise.} \end{cases}
$$
:::

:::example Nonzero numbers under multiplication
$\QQ^* = \QQ \setminus \{0\}$, $\RR^*$, $\CC^*$ with multiplication. Identity: $1$. Inverse: $1/x$.

Inside $\CC^*$, the **unit circle** $S^1 = \{ z \in \CC \mid |z| = 1 \}$ is also a group for multiplication.

These are still abelian. (Aside: the nonzero quaternions form a nonabelian multiplicative group.)
:::

:::example Symmetries and permutations
Recall that $f : A \to B$ is

- **injective** (one-to-one) if $\forall x, y \in A$, $x \neq y \Rightarrow f(x) \neq f(y)$;
- **surjective** (onto) if $\forall b \in B$, $\exists x \in A$ such that $f(x) = b$;
- **bijective** if it is injective and surjective.

A **permutation** of a set $A$ is a bijection $f : A \to A$. The set of permutations of $A$, with operation $=$ composition, is a group, $\operatorname{Perm}(A)$. (Why?)

The **symmetric group** on $n$ elements is $S_n = \operatorname{Perm}(\{1, \dots, n\})$.

$S_3$ has a geometric interpretation if we think of the **symmetries** of an equilateral triangle: the rotations which preserve it (3, including the identity) and the reflections (3 of those).

![An equilateral triangle with its three axes of reflection drawn dashed through each vertex and the midpoint of the opposite side, a rotation arrow around the centre, and small double arrows at the vertices indicating the reflections](/notes/math-55a/figures/e1-triangle-symmetries.svg)

Symmetries permute the vertices, and every permutation of the set of vertices arises from exactly one symmetry (and the composition laws agree). So $S_3$ also occurs as the group of symmetries of $\triangle$.

(Other groups arise from symmetries of other geometric figures in $\RR^2$ and $\RR^3$.)
:::

:::example Groups of matrices
$$
GL_n(\RR) = \{\text{invertible } n \times n \text{ matrices with real coefficients}\}
$$
with matrix multiplication: the “**general linear group**”. Also
$$
SL_n(\RR) = \{ n \times n \text{ real matrices with determinant } 1 \},
$$
the “**special linear group**”. Also $GL_n(\CC)$, $SL_n(\CC)$ for matrices with complex coefficients… or with $\QQ$ or $\ZZ/n$ coefficients!
:::

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L02}}
**Products of groups**

:::definition
Given two groups $G, H$, the **product group** is
$$
G \times H = \{ (g, h) \mid g \in G,\ h \in H \}
$$
with composition law $(g, h) \cdot (g', h') = (gg', hh')$.
:::

- If $G, H$ are finite, of **order** $m = |G|$ and $n = |H|$, then $G \times H$ is a finite group of order $mn$.
- Similarly for a product of $n$ groups.

:::example
$\ZZ^n = \{ (a_1, \dots, a_n) \mid a_i \in \ZZ \}$, with
$$
(a_1, \dots, a_n) + (b_1, \dots, b_n) = (a_1 + b_1, \dots, a_n + b_n).
$$
(Similarly $\QQ^n$, $\RR^n$, $\CC^n$ with componentwise addition.)
:::

Given infinitely many groups $G_1, G_2, G_3, \dots$, there are two different notions:

- the **direct product** $\displaystyle\prod_{i=1}^\infty G_i = \{ (a_1, a_2, a_3, \dots) \mid a_i \in G_i \}$;
- the **direct sum** $\displaystyle\bigoplus_{i=1}^\infty G_i = \{ (a_1, a_2, a_3, \dots) \mid a_i \in G_i, \text{ all but finitely many are the identity} \}$.

:::example
Consider $G_0 = G_1 = \dots = (\RR, +)$, and denote $(a_0, a_1, a_2, \dots)$ by $\sum a_i x^i$. Then
$$
\prod_{i=0}^\infty \RR = \RR[[x]], \quad \text{formal power series } \sum_{i=0}^\infty a_i x^i \text{ (with addition)},
$$
$$
\bigoplus_{i=0}^\infty \RR = \RR[x], \quad \text{polynomials } \sum_{\text{finite}} a_i x^i.
$$
:::

**Subgroups and homomorphisms**

:::definition
A **subgroup** $H$ of a group $G$ is a *non-empty*(!) subset $H \subset G$ which is closed under composition ($a, b \in H \Rightarrow ab \in H$) and inversion ($a \in H \Rightarrow a^{-1} \in H$). Since $H \neq \emptyset$, these 2 conditions imply $e \in H$. So $H$ (with the same operation) is a group in its own right.
:::

We say $H$ is a **proper subgroup** if $H \subsetneq G$.

:::definition
Given two groups $G, H$, a **homomorphism** $\varphi : G \to H$ is a map which respects the composition law: $\forall a, b \in G$, $\varphi(ab) = \varphi(a)\varphi(b)$.

(This implies $\varphi(e_G) = e_H$ and $\varphi(a^{-1}) = \varphi(a)^{-1}$.)

An **isomorphism** is a bijective homomorphism. (If $G$ and $H$ are isomorphic, then they are secretly the “same” group, even if the elements and the law may have different names.)
:::

:::question
Among the examples seen so far, which groups are isomorphic to each other? Or to subgroups of other groups?
:::

:::example Subgroups
- $(\ZZ, +) \subset (\QQ, +) \subset (\RR, +) \subset (\CC, +)$.
- $(\QQ^*, \times) \subset (\RR^*, \times) \subset (\CC^*, \times) \supset (S^1, \times)$.
- $\{e\} \subset G$, the trivial subgroup.
- $\ZZ/n$, $\CC^*$, and $GL(2, \RR)$??
- $H_i \subset G_i \Rightarrow H_1 \times \dots \times H_n \subset G_1 \times \dots \times G_n$.
- $\bigoplus G_i \subset \prod G_i$.
:::
:::
