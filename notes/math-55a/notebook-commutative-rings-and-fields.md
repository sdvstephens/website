---
course: math-55a
chapter: 2
section: N17
title: Commutative Rings and Fields
source-pages: 4-6
---

:::definition Commutative rings
A **commutative ring** is a set $R$ with two operations, $+$ and $\times$, such that:

1. $(R, +)$ is an abelian group with identity $0 \in R$;
2. $(R, \times)$ is a commutative semigroup with identity $1 \in R$:
   - $1a = a1 = a$ for all $a \in R$,
   - $a(bc) = (ab)c$ for all $a, b, c \in R$,
   - $ab = ba$ for all $a, b \in R$;
3. $a(b + c) = ab + ac$ for all $a, b, c \in R$ (distributive law).
:::

:::definition Fields
A **field** $K$ is a commutative ring such that for all $a \neq 0$ there exists $b = a^{-1}$ with $ab = 1$. So a commutative ring, but with inverses, such that $(K \setminus \{0\}, \times)$ is an abelian group, not just a semigroup.
:::

:::remark Remarks (on rings and fields)
- Ring axioms ⟹ cancellation law (for $+$).
- The trivial ring $R = \{0\}$ is such that $1 = 0$, and it is the only case where this is true (it is NOT a field).
- In a field, $ab = 0 \Rightarrow a = 0$ or $b = 0$. This doesn’t need to be true in a ring, though.
- In a field ⟹ cancellation laws for $+$ AND $\times$.
:::

:::definition Ring/field homomorphisms
A ring or field **homomorphism** is a map $\varphi : R \to S$ that respects the operations:
$$\begin{aligned} \varphi(a + b) &= \varphi(a) + \varphi(b) \quad (\Rightarrow \varphi(0) = 0,\ \varphi(-a) = -\varphi(a)), \\ \varphi(ab) &= \varphi(a)\varphi(b), \\ \varphi(1_R) &= 1_S. \end{aligned}$$
(Because $\varphi(ab) = \varphi(a)\varphi(b)$: when $ab = 0$, then $\varphi(ab) = \varphi(0) = 0$.)
:::

:::definition Ring of polynomials
Given a field $K$, the “RoP” (ring of polynomials) in one formal variable $x$ is
$$K[x] \coloneqq \{a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n \mid a_i \in K,\ n \in \NN\}.$$
:::
