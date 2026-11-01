---
course: math-55a
chapter: 1
section: N8
title: Lecture 1 and 2 Review: Functions, Cardinality and Groups
source-pages: m55a-9
---

## Lecture 1 review

:::definition Injective, surjective, bijective
A function $f : A \to B$ is
- **injective** (one-to-one, $\hookrightarrow$) $\iff$ $f(x) = f(y)$ implies $x = y$;
- **surjective** (onto, $\twoheadrightarrow$) $\iff$ for all $b \in B$ there exists $x \in A$ such that $f(x) = b$;
- **bijective** (one-to-one correspondence) $\iff$ injective and surjective.
:::

### Main definitions

:::definition Groups, monoids, semigroups
- **Group**: a set $G$ with a binary operation $G \times G \to G$ given by some operation ($+, \times, \cdot, \circ, m$, etc.), with identity ($e$), inverses ($a^{-1}$) and associativity.
- **Monoid**: the same, sans inverses.
- **Semigroup**: the same, sans identity.
- **Abelian**: the same, with commutativity.
:::

:::definition Isomorphism
$A \cong B \iff A$ and $B$ have the same group structure.
:::

:::definition Symmetric group
Given $n$ elements, $S_n = \operatorname{Perm}(\{1, \dots, n\})$.
:::

:::definition Permutation groups
$\operatorname{Perm}(A)$: the bijections $f : A \to A$, with composition ($a \circ b$).
:::

:::definition Product groups
$G \times H = \{ (g, h) \mid g \in G, h \in H \}$ with $(g, h) \cdot (g', h') = (gg', hh')$. Order: $mn = |G \times H|$, where $m = |G|$, $n = |H|$.
:::

## Lecture 2 review

:::definition Cardinality
$S$ and $T$ have the same **cardinality** $\iff |S| = |T| \iff$ there is a bijection $S \leftrightarrow T$. Also
- $|S| \geq |T| \iff$ there exists a surjection $S \twoheadrightarrow T$;
- $|S| \leq |T| \iff$ there exists an injection $S \hookrightarrow T$.
:::

:::theorem Schröder–Bernstein
If there exist injections $f : S \hookrightarrow B$ and $g : B \hookrightarrow S$, then there exists a bijection $h : S \leftrightarrow B$, so $|S| = |B|$.
:::

### TRY TO PROVE: $|\NN| = |\ZZ| = |\QQ| = |\NN \times \NN|$

Scratch work (no finished proof on the page):

- Maps $\NN \times \NN \to \NN$ and $\NN \to \NN \times \NN$: for every $(a, b)$ there should exist $n \in \NN$ such that $f(a, b) = n$; $f(a, b) = f(n)$, $f(n) = f(a, b)$.
- Arrays of numbers:

| | | | | | | |
|---|---|---|---|---|---|---|
| 2 | 3 | 5 | 7 | 11 | 13 | 17 |
| 1 | 3 | 5 | 7 | 11 | 13 | 17 |
| 2 | 6 | 10 | 14 | 22 | 26 | 34 |
| 4 | 12 | 20 | | | | |
| 8 | | | | | | |

and

| | | | | | |
|---|---|---|---|---|---|
| 1 | 3 | 5 | 7 | 9 | 11 |
| 2 | 6 | 10 | 14 | 18 | 22 |
| 4 | | | | | |
| 8 | | | | | |

- $(2n + 1)(2n)$, and $4n^2 + 2n = 2(2n^2 + n) = 2n(2n + 1)$.
- $n \mapsto 1, n, n^2, n^3$; $n^2(\cdots) + ? = 0$; $x_1 = a$, $x_2 = b$:
$$
\begin{aligned}
(x-1)(x-0) &= x^2 - x\\
(x-1)(x-1) &= x^2 - 2x + 1\\
(x-2)(x-1) &= x^2 - 3x + 2\\
(x-1)(x-2) &= x^2 - 3x + 2\\
(x-3)(x-1) &= x^2 - 4x + 3\\
(x-2)(x-3) &= x^2 - 5x + 6
\end{aligned}
$$
- $3 \mapsto x^2 + \cdots$, $1 \mapsto p[x]_1$, $2 \mapsto p[x]_2$, …
- $2^n + m$, $(0, 1)$, $n(n+1)$, $\dfrac{2^n}{m}(m + 1)$, $2^n (m + 1) m^{-1}$, $x^2 - x + 1$.
