---
course: math-55a
chapter: 2
section: 2.1
title: The Group Axioms
---

# Section 2.1: The Group Axioms

Groups are the central object of abstract algebra, capturing the essence of symmetry and invertible operations. The definition is deceptively simple—three axioms—yet groups appear everywhere: in geometry (symmetries), number theory (modular arithmetic), topology (fundamental groups), physics (gauge theories), and even chemistry (molecular symmetries). This lecture develops the foundations rigorously.

:::definition
**Groups:** A ***group*** is a set $G$ together with a map

$$m : G \times G \to G$$

called a ***law of composition*** (also ***binary operation***). Writing $ab$ for $m(a,b)$, the law of composition must satisfy three axioms:

1. **Associativity:** $\forall a,b,c \in G, \, (ab)c = a(bc)$.
2. **Identity:** $\exists e \in G$ such that $ea = ae = a$ for all $a \in G$.
3. **Inverses:** $\forall a \in G, \, \exists b \in G$ such that $ab = ba = e$.

We write $(G, m)$ or simply $G$ for the group, and call $|G|$ the ***order*** of $G$.
:::

The axioms have immediate but important consequences that we now prove carefully.

:::proposition
**Uniqueness of identity:** The identity element $e$ is unique.

:::proof
Suppose $e$ and $e'$ are both identities. Then $e = ee'$ (since $e'$ is an identity) and $ee' = e'$ (since $e$ is an identity). Thus $e = e'$.
:::
:::

:::proposition
**Uniqueness of inverses:** For each $a \in G$, the inverse is unique. We denote it $a^{-1}$ (or $-a$ in additive notation).

:::proof
Suppose $b$ and $c$ are both inverses of $a$, so $ab = ba = e$ and $ac = ca = e$. Then:

$$b = be = b(ac) = (ba)c = ec = c.$$
:::
:::

:::proposition
**Cancellation laws:** In a group $G$:

1. **Left cancellation:** $ab = ac \implies b = c$.
2. **Right cancellation:** $ba = ca \implies b = c$.

:::proof
For left cancellation: if $ab = ac$, multiply both sides on the left by $a^{-1}$: $a^{-1}(ab) = a^{-1}(ac)$, so $(a^{-1}a)b = (a^{-1}a)c$, giving $eb = ec$, i.e., $b = c$. Right cancellation is similar.
:::
:::

:::proposition
**Inverse of products:** For all $a, b \in G$: $(ab)^{-1} = b^{-1}a^{-1}$. Note the reversal of order!

:::proof
We verify $(ab)(b^{-1}a^{-1}) = e$: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$. Similarly for the other side.
:::
:::

:::proposition
**Inverse of inverse:** For all $a \in G$: $(a^{-1})^{-1} = a$.

:::proof
By definition, $a^{-1}$ satisfies $a \cdot a^{-1} = e$. This says $a$ is an inverse of $a^{-1}$, so by uniqueness, $(a^{-1})^{-1} = a$.
:::
:::

:::note
It is customary to use additive notation ($+$, $0$, $-a$) for abelian groups and multiplicative notation ($\cdot$, $1$ or $e$, $a^{-1}$) in general. This does *not* mean that multiplication implies non-commutativity!
:::

## Group variants and related structures

Groups sit in a hierarchy of algebraic structures with fewer or more axioms.

:::definition
**Abelian groups:** A group $G$ is ***abelian*** (or ***commutative***) if $ab = ba$ for all $a, b \in G$.
:::

:::definition
**Monoid:** A ***monoid*** is a set with an associative binary operation and an identity element, but inverses are not required. Example: $(\mathbb{N}, +)$ with identity 0, or $(\mathbb{Z}, \times)$ with identity 1.
:::

:::definition
**Semigroup:** A ***semigroup*** is a set with an associative binary operation—no identity or inverses required. Example: $(\mathbb{Z}_{>0}, +)$.
:::

:::note
There's a pattern here: Group = Monoid + Inverses = Semigroup + Identity + Inverses. Category theory provides a unifying framework: a group is a category with one object where every morphism is invertible; a monoid is a category with one object (morphisms need not be invertible).
:::