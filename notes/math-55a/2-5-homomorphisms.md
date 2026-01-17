---
course: math-55a
chapter: 2
section: 2.5
title: Homomorphisms
---

# Section 2.5: Homomorphisms

:::definition
**Homomorphism:** A ***homomorphism*** $\varphi : G \to H$ between groups is a map satisfying

$$\varphi(ab) = \varphi(a)\varphi(b) \quad \text{for all } a, b \in G.$$
:::

:::proposition
**Basic properties of homomorphisms:** Let $\varphi : G \to H$ be a homomorphism.

1. $\varphi(e_G) = e_H$.
2. $\varphi(a^{-1}) = \varphi(a)^{-1}$ for all $a \in G$.
3. $\varphi(a^n) = \varphi(a)^n$ for all $n \in \mathbb{Z}$.
4. If $K \le G$, then $\varphi(K) \le H$.
5. If $L \le H$, then $\varphi^{-1}(L) \le G$.

:::proof
**(1)** $\varphi(e_G) = \varphi(e_G e_G) = \varphi(e_G)\varphi(e_G)$. Multiply both sides by $\varphi(e_G)^{-1}$: $e_H = \varphi(e_G)$.

**(2)** $\varphi(a)\varphi(a^{-1}) = \varphi(aa^{-1}) = \varphi(e_G) = e_H$. So $\varphi(a^{-1})$ is the inverse of $\varphi(a)$.

**(3)** For $n > 0$: induction. For $n = 0$: part (1). For $n < 0$: $\varphi(a^n) = \varphi((a^{-1})^{-n}) = \varphi(a^{-1})^{-n} = (\varphi(a)^{-1})^{-n} = \varphi(a)^n$.

**(4)** For $\varphi(a), \varphi(b) \in \varphi(K)$ (with $a, b \in K$): $\varphi(a)\varphi(b)^{-1} = \varphi(a)\varphi(b^{-1}) = \varphi(ab^{-1}) \in \varphi(K)$ since $ab^{-1} \in K$.

**(5)** For $a, b \in \varphi^{-1}(L)$: $\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1} \in L$ (since $L \le H$), so $ab^{-1} \in \varphi^{-1}(L)$.
:::
:::

:::note
The homomorphism condition can be expressed as a *commutative diagram*: the two paths $G \times G \xrightarrow{m_G} G \xrightarrow{\varphi} H$ and $G \times G \xrightarrow{\varphi \times \varphi} H \times H \xrightarrow{m_H} H$ give the same result. This diagrammatic perspective is fundamental to category theory.
:::

:::definition
**Types of homomorphisms:** Let $\varphi : G \to H$ be a homomorphism.

1. $\varphi$ is a ***monomorphism*** (or ***embedding***) if it's injective.
2. $\varphi$ is an ***epimorphism*** if it's surjective.
3. $\varphi$ is an ***isomorphism*** if it's bijective. We write $G \cong H$.
4. An isomorphism $G \to G$ is called an ***automorphism***. The set of all automorphisms of $G$, denoted $\operatorname{Aut}(G)$, forms a group under composition.
:::

:::example
**Important homomorphisms:**

1. **Reduction mod $n$:** $\pi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$, $\pi(a) = a \mod n$. Surjective, kernel $n\mathbb{Z}$.
2. **Quotient mod $n$:** If $n \mid m$, then $\mathbb{Z}/m\mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$, $a \mapsto a \mod n$. Example: last-two-digits to last-digit, $\mathbb{Z}/100 \to \mathbb{Z}/10$.
3. **Determinant:** $\det : \operatorname{GL}_n(\mathbb{R}) \to \mathbb{R}^*$. Homomorphism since $\det(AB) = \det(A)\det(B)$. Kernel is $\operatorname{SL}_n(\mathbb{R})$.
4. **Exponential:** $\exp : (\mathbb{R}, +) \to (\mathbb{R}_{>0}, \times)$, $x \mapsto e^x$. Isomorphism with inverse $\ln$.
5. **Complex exponential:** $\exp : (\mathbb{R}, +) \to (S^1, \times)$, $t \mapsto e^{2\pi i t}$. Surjective, kernel $\mathbb{Z}$. Induces $\mathbb{R}/\mathbb{Z} \cong S^1$.
:::

## Isomorphisms and invariants

:::definition
**Isomorphic groups:** Groups $G$ and $H$ are ***isomorphic***, written $G \cong H$, if there exists an isomorphism $\varphi : G \to H$. Isomorphic groups are "the same" for all group-theoretic purposes.
:::

What properties are preserved by isomorphisms? These are called *invariants*.

:::proposition
**Isomorphism invariants:** If $G \cong H$, then:

1. $|G| = |H|$ (same order);
2. $G$ is abelian iff $H$ is abelian;
3. $G$ is cyclic iff $H$ is cyclic;
4. For each $n$, $G$ and $H$ have the same number of elements of order $n$;
5. For each $n$, $G$ and $H$ have the same number of subgroups of order $n$.

:::proof
Let $\varphi : G \xrightarrow{\sim} H$ be an isomorphism.

**(1)** Bijections preserve cardinality.

**(2)** If $G$ is abelian and $h_1, h_2 \in H$, write $h_i = \varphi(g_i)$. Then $h_1 h_2 = \varphi(g_1)\varphi(g_2) = \varphi(g_1 g_2) = \varphi(g_2 g_1) = \varphi(g_2)\varphi(g_1) = h_2 h_1$.

**(3)** If $G = \langle a \rangle$, then $H = \varphi(G) = \varphi(\langle a \rangle) = \langle \varphi(a) \rangle$.

**(4)** $\operatorname{ord}(\varphi(a)) = \operatorname{ord}(a)$ since $\varphi(a)^n = \varphi(a^n) = e_H \iff a^n = e_G$.

**(5)** $\varphi$ induces a bijection between subgroups of $G$ and subgroups of $H$.
:::
:::

:::example
**Non-isomorphic groups of same order:** $\mathbb{Z}/4$ and $\mathbb{Z}/2 \times \mathbb{Z}/2$ both have order 4, but:

- $\mathbb{Z}/4$ has an element of order 4 (namely, 1);
- $\mathbb{Z}/2 \times \mathbb{Z}/2$ has no element of order 4 (all non-identity elements have order 2).

So they're not isomorphic. These are the only groups of order 4 up to isomorphism.
:::

:::example
**All groups of order 2 are isomorphic:** If $|G| = 2$, write $G = \{e, x\}$. Then $x \ne e$, so $x^2 \ne x$ (else $x = e$). Thus $x^2 = e$, and $G = \langle x \rangle \cong \mathbb{Z}/2$.
:::

:::example
**Exercises:**

1. Prove that $\operatorname{Aut}(\mathbb{Z}/n\mathbb{Z}) \cong (\mathbb{Z}/n\mathbb{Z})^\times$.
2. Find $\operatorname{Aut}(\mathbb{Z})$.
3. Prove that if $\varphi : G \to H$ is an isomorphism, then $\varphi^{-1} : H \to G$ is also an isomorphism.
4. Prove that "is isomorphic to" is an equivalence relation on groups.

:::solution
**(1)** An automorphism $\varphi$ of $\mathbb{Z}/n$ is determined by $\varphi(1)$, since $\varphi(k) = k\varphi(1)$. We need $\varphi(1)$ to generate $\mathbb{Z}/n$, i.e., $\gcd(\varphi(1), n) = 1$, i.e., $\varphi(1) \in (\mathbb{Z}/n)^\times$. Conversely, any $a \in (\mathbb{Z}/n)^\times$ defines an automorphism $\varphi_a : k \mapsto ka$. The map $a \mapsto \varphi_a$ is an isomorphism $(\mathbb{Z}/n)^\times \to \operatorname{Aut}(\mathbb{Z}/n)$ (check it's a homomorphism and bijection).

**(2)** An automorphism of $\mathbb{Z}$ is determined by $\varphi(1)$. We need $\langle \varphi(1) \rangle = \mathbb{Z}$, so $\varphi(1) = \pm 1$. Thus $\operatorname{Aut}(\mathbb{Z}) = \{\operatorname{id}, -\operatorname{id}\} \cong \mathbb{Z}/2$.

**(3)** $\varphi^{-1}$ is a bijection. For $h_1, h_2 \in H$, let $g_i = \varphi^{-1}(h_i)$. Then $\varphi^{-1}(h_1 h_2) = \varphi^{-1}(\varphi(g_1)\varphi(g_2)) = \varphi^{-1}(\varphi(g_1 g_2)) = g_1 g_2 = \varphi^{-1}(h_1)\varphi^{-1}(h_2)$.

**(4)** Reflexive: $\operatorname{id}_G : G \to G$ is an isomorphism. Symmetric: if $\varphi : G \to H$ is an isomorphism, so is $\varphi^{-1} : H \to G$ by part (3). Transitive: if $\varphi : G \to H$ and $\psi : H \to K$ are isomorphisms, so is $\psi \circ \varphi : G \to K$.
:::
:::