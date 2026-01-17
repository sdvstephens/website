---
course: math-55a
chapter: 2
section: 2.3
title: "Constructions: Products and Sums"
---

# Section 2.3: Constructions: Products and Sums

How do we build new groups from existing ones?

## Direct products

:::definition
**Direct product:** Given groups $G$ and $H$, the ***direct product*** $G \times H$ is the Cartesian product with componentwise operation:

$$(a, b) \cdot (a', b') = (aa', bb').$$

Identity is $(e_G, e_H)$, inverse of $(a, b)$ is $(a^{-1}, b^{-1})$.
:::

:::proposition
**Direct product is a group:** The direct product $G \times H$ satisfies all group axioms. Moreover, $|G \times H| = |G| \cdot |H|$ (for finite groups).

:::proof
**Associativity:** $((a,b)(a',b'))(a'',b'') = (aa',bb')(a'',b'') = (aa'a'', bb'b'')$. Similarly, $(a,b)((a',b')(a'',b'')) = (a,b)(a'a'',b'b'') = (aa'a'', bb'b'')$. Equal by associativity in $G$ and $H$.

**Identity:** $(e_G, e_H)(a,b) = (e_Ga, e_Hb) = (a,b)$, and similarly on the right.

**Inverses:** $(a,b)(a^{-1},b^{-1}) = (aa^{-1}, bb^{-1}) = (e_G, e_H)$.
:::
:::

:::example
We have $\mathbb{Z}/2 \times \mathbb{Z}/3 \cong \mathbb{Z}/6$ (since $\gcd(2,3) = 1$), but $\mathbb{Z}/2 \times \mathbb{Z}/2 \not\cong \mathbb{Z}/4$ (the former has no element of order 4).
:::

This generalizes to arbitrary (even infinite) collections of groups.

:::definition
**Arbitrary direct products:** For a family of groups $\{G_i\}_{i \in I}$, the ***direct product*** is:

$$\prod_{i \in I} G_i = \{(a_i)_{i \in I} : a_i \in G_i\}$$

with componentwise operations.
:::

:::definition
**Direct sum:** The ***direct sum*** (for abelian groups) is the subgroup:

$$\bigoplus_{i \in I} G_i = \{(a_i)_{i \in I} \in \prod_{i \in I} G_i : a_i = e_{G_i} \text{ for all but finitely many } i\}.$$
:::

:::note
For finite index sets, $\prod = \bigoplus$. For infinite sets, they differ crucially.
:::

:::example
**Power series vs polynomials:** Taking $G_i = (\mathbb{R}, +)$ for all $i \in \mathbb{N}$:

$$\prod_{i=0}^{\infty} \mathbb{R} \cong \mathbb{R}[[x]] \quad \text{(formal power series under addition)}$$

$$\bigoplus_{i=0}^{\infty} \mathbb{R} \cong \mathbb{R}[x] \quad \text{(polynomials under addition)}$$

A power series $\sum_{i=0}^\infty a_i x^i$ can have infinitely many nonzero terms; a polynomial cannot.
:::

:::example
**Exercises:**

1. Prove that $\mathbb{Z}/m \times \mathbb{Z}/n \cong \mathbb{Z}/mn$ if and only if $\gcd(m, n) = 1$.
2. Find all groups of order 4 up to isomorphism.
3. Prove that $G \times H \cong H \times G$ for any groups $G, H$.

:::solution
**(1)** ($\Leftarrow$) Assume $\gcd(m,n) = 1$. The element $(1, 1) \in \mathbb{Z}/m \times \mathbb{Z}/n$ has order $\operatorname{lcm}(m, n) = mn$ (since the order of $(a, b)$ is $\operatorname{lcm}(\operatorname{ord}(a), \operatorname{ord}(b))$). Thus $\mathbb{Z}/m \times \mathbb{Z}/n$ contains an element of order $mn = |G|$, so it's cyclic, hence $\cong \mathbb{Z}/mn$.

($\Rightarrow$) If $d = \gcd(m, n) > 1$, then for any $(a, b) \in \mathbb{Z}/m \times \mathbb{Z}/n$, we have $\frac{mn}{d} \cdot (a, b) = (\frac{mn}{d} a, \frac{mn}{d} b) = (0, 0)$ since $m \mid \frac{mn}{d}$ and $n \mid \frac{mn}{d}$. So every element has order dividing $\frac{mn}{d} < mn$, meaning no element has order $mn$. But $\mathbb{Z}/mn$ has an element of order $mn$, so they're not isomorphic.

**(2)** Let $G$ have order 4. Every element has order dividing 4, so orders are 1, 2, or 4.

*Case 1:* $G$ has an element $a$ of order 4. Then $G = \{e, a, a^2, a^3\} = \langle a \rangle \cong \mathbb{Z}/4$.

*Case 2:* Every non-identity element has order 2. Then $G = \{e, a, b, c\}$ with $a^2 = b^2 = c^2 = e$. What is $ab$? It's not $e$ (else $a = b^{-1} = b$), not $a$ (else $b = e$), not $b$ (else $a = e$). So $ab = c$. Similarly $ba = c$ (check: $(ab)(ba) = a(bb)a = a^2 = e$, so $ba = (ab)^{-1} = ab$ since $ab$ has order 2). So $G$ is abelian, and $G \cong \mathbb{Z}/2 \times \mathbb{Z}/2$ (Klein four-group).

**(3)** Define $\varphi : G \times H \to H \times G$ by $\varphi(g, h) = (h, g)$. This is clearly a bijection. It's a homomorphism: $\varphi((g_1, h_1)(g_2, h_2)) = \varphi(g_1g_2, h_1h_2) = (h_1h_2, g_1g_2) = (h_1, g_1)(h_2, g_2) = \varphi(g_1, h_1)\varphi(g_2, h_2)$.
:::
:::