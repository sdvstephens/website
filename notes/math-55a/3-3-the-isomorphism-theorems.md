---
course: math-55a
chapter: 3
section: 3.3
title: The Isomorphism Theorems
---

# Section 3.3: The Isomorphism Theorems

The isomorphism theorems are the structural backbone of group theory. They describe how quotients, subgroups, and homomorphisms interact. These results will reappear essentially unchanged when we study rings, modules, and vector spaces—they are instances of a more general phenomenon that category theory makes precise.

## Kernels, images, and the First Isomorphism Theorem

:::definition
**Kernel:** The ***kernel*** of a group homomorphism $\varphi : G \to H$ is 
$$\ker(\varphi) = \{g \in G : \varphi(g) = e_H\} = \varphi^{-1}(\{e_H\}).$$
:::

:::definition
**Image:** The ***image*** of a group homomorphism $\varphi : G \to H$ is 
$$\img(\varphi) = \varphi(G) = \{h \in H : \exists g \in G, \, \varphi(g) = h\}.$$
:::

:::proposition
**Basic properties of kernels and images:** Let $\varphi : G \to H$ be a homomorphism.

1. $\ker(\varphi)$ is a normal subgroup of $G$.
2. $\img(\varphi)$ is a subgroup of $H$ (not necessarily normal).
3. $\varphi$ is injective $\iff \ker(\varphi) = \{e_G\}$.
4. $\varphi(g_1) = \varphi(g_2) \iff g_1^{-1}g_2 \in \ker(\varphi) \iff g_1 \ker(\varphi) = g_2 \ker(\varphi)$.

:::proof
**(1)** First, $\ker(\varphi)$ is a subgroup: $\varphi(e) = e$, so $e \in \ker(\varphi)$; if $\varphi(a) = \varphi(b) = e$, then $\varphi(ab) = ee = e$; if $\varphi(a) = e$, then $\varphi(a^{-1}) = \varphi(a)^{-1} = e^{-1} = e$. For normality: if $k \in \ker(\varphi)$, then $\varphi(gkg^{-1}) = \varphi(g)\varphi(k)\varphi(g)^{-1} = \varphi(g) \cdot e \cdot \varphi(g)^{-1} = e$.

**(2)** Subgroup: $e = \varphi(e) \in \img(\varphi)$; if $\varphi(a), \varphi(b) \in \img(\varphi)$, then $\varphi(a)\varphi(b) = \varphi(ab) \in \img(\varphi)$; $\varphi(a)^{-1} = \varphi(a^{-1}) \in \img(\varphi)$.

**(3)** If $\ker(\varphi) = \{e\}$ and $\varphi(g_1) = \varphi(g_2)$, then $\varphi(g_1^{-1}g_2) = e$, so $g_1^{-1}g_2 = e$, giving $g_1 = g_2$. Conversely, if $\varphi$ is injective and $k \in \ker(\varphi)$, then $\varphi(k) = e = \varphi(e)$, so $k = e$.

**(4)** $\varphi(g_1) = \varphi(g_2) \iff \varphi(g_1)^{-1}\varphi(g_2) = e \iff \varphi(g_1^{-1}g_2) = e \iff g_1^{-1}g_2 \in \ker(\varphi)$. The last equivalence with cosets is the definition of coset equality.
:::
:::

:::theorem
**First Isomorphism Theorem:** Let $\varphi : G \to H$ be a homomorphism. Then:

1. $\ker(\varphi) \trianglelefteq G$;
2. The map $\bar{\varphi} : G/\ker(\varphi) \to H$ defined by $\bar{\varphi}(g \cdot \ker(\varphi)) = \varphi(g)$ is a well-defined injective homomorphism;
3. $\img(\bar{\varphi}) = \img(\varphi)$, so $G/\ker(\varphi) \cong \img(\varphi)$.

In slogan form: *the image of a homomorphism is isomorphic to the domain modulo the kernel.*

:::proof
Part (1) was proved above. For (2): $\bar{\varphi}$ is well-defined because $g_1\ker(\varphi) = g_2\ker(\varphi)$ implies $\varphi(g_1) = \varphi(g_2)$ by property (4). It's a homomorphism: $\bar{\varphi}(g_1K \cdot g_2K) = \bar{\varphi}(g_1g_2K) = \varphi(g_1g_2) = \varphi(g_1)\varphi(g_2) = \bar{\varphi}(g_1K)\bar{\varphi}(g_2K)$ (writing $K = \ker(\varphi)$). It's injective: $\bar{\varphi}(gK) = e \implies \varphi(g) = e \implies g \in K \implies gK = K$.

For (3): $\img(\bar{\varphi}) = \{\bar{\varphi}(gK) : g \in G\} = \{\varphi(g) : g \in G\} = \img(\varphi)$. Since $\bar{\varphi}$ is an injective homomorphism onto $\img(\varphi)$, it's an isomorphism $G/\ker(\varphi) \xrightarrow{\sim} \img(\varphi)$.
:::
:::


:::note
The First Isomorphism Theorem is sometimes called the "fundamental theorem of homomorphisms." It says that every homomorphism $\varphi : G \to H$ factors as $G \twoheadrightarrow G/\ker(\varphi) \xrightarrow{\sim} \img(\varphi) \hookrightarrow H$: a surjection, followed by an isomorphism, followed by an inclusion. This factorization is unique and natural—in the categorical sense, which you'll see later.
:::

## The Second and Third Isomorphism Theorems

:::theorem
**Second Isomorphism Theorem (Diamond Theorem):** Let $G$ be a group, $H \subset G$ a subgroup, and $N \trianglelefteq G$ a normal subgroup. Then:

1. $HN = \{hn : h \in H, n \in N\}$ is a subgroup of $G$;
2. $H \cap N \trianglelefteq H$;
3. $H / (H \cap N) \cong HN / N$.

:::proof
**(1)** $HN$ is a subgroup: $e = e \cdot e \in HN$. For closure: $(h_1n_1)(h_2n_2) = h_1(n_1h_2)n_2$. Since $N$ is normal, $n_1h_2 = h_2n_3$ for some $n_3 \in N$, so $(h_1n_1)(h_2n_2) = h_1h_2n_3n_2 \in HN$. For inverses: $(hn)^{-1} = n^{-1}h^{-1} = h^{-1}(h n^{-1} h^{-1}) \in HN$ since $hn^{-1}h^{-1} \in N$ by normality.

**(2)** $H \cap N$ is a subgroup of $H$ (intersection of subgroups). For normality in $H$: if $x \in H \cap N$ and $h \in H$, then $hxh^{-1} \in H$ (since $H$ is a subgroup) and $hxh^{-1} \in N$ (since $N \trianglelefteq G$), so $hxh^{-1} \in H \cap N$.

**(3)** Define $\varphi : H \to HN/N$ by $\varphi(h) = hN$. This is a homomorphism: $\varphi(h_1h_2) = h_1h_2N = (h_1N)(h_2N) = \varphi(h_1)\varphi(h_2)$.

*Surjectivity:* Any element of $HN/N$ has the form $hnN = hN$ (since $n \in N$), which equals $\varphi(h)$.

*Kernel:* $\ker(\varphi) = \{h \in H : hN = N\} = \{h \in H : h \in N\} = H \cap N$.

By the First Isomorphism Theorem, $H/(H \cap N) = H/\ker(\varphi) \cong \img(\varphi) = HN/N$.
:::
:::

:::note
The name "Diamond Theorem" comes from the lattice diagram: draw $G$ at top, $HN$ below it, $H$ and $N$ below $HN$ on left and right, and $H \cap N$ at the bottom. The isomorphism $H/(H \cap N) \cong HN/N$ says the "left edge" quotient equals the "right edge" quotient. This is a manifestation of a general principle called the *modular law* in lattice theory.
:::


:::theorem
**Third Isomorphism Theorem:** Let $G$ be a group and $N \subset M$ be normal subgroups of $G$ (so $N \trianglelefteq G$ and $M \trianglelefteq G$ with $N \subset M$). Then:

1. $M/N \trianglelefteq G/N$;
2. $(G/N) / (M/N) \cong G/M$.

:::proof
**(1)** Elements of $G/N$ are cosets $gN$; elements of $M/N$ are cosets $mN$ for $m \in M$. We verify $M/N \trianglelefteq G/N$: for $gN \in G/N$ and $mN \in M/N$, we have $(gN)(mN)(gN)^{-1} = gmg^{-1}N$. Since $M \trianglelefteq G$, $gmg^{-1} \in M$, so $gmg^{-1}N \in M/N$.

**(2)** Define $\pi : G/N \to G/M$ by $\pi(gN) = gM$.

*Well-defined:* If $g_1N = g_2N$, then $g_1^{-1}g_2 \in N \subset M$, so $g_1M = g_2M$.

*Homomorphism:* $\pi(g_1N \cdot g_2N) = \pi(g_1g_2N) = g_1g_2M = (g_1M)(g_2M) = \pi(g_1N)\pi(g_2N)$.

*Surjective:* For any $gM \in G/M$, we have $\pi(gN) = gM$.

*Kernel:* $\ker(\pi) = \{gN : gM = M\} = \{gN : g \in M\} = M/N$.

By the First Isomorphism Theorem, $(G/N)/\ker(\pi) = (G/N)/(M/N) \cong \img(\pi) = G/M$.
:::
:::

:::note
The Third Isomorphism Theorem says "quotients of quotients are quotients": $(G/N)/(M/N) \cong G/M$. The $N$'s "cancel." This is exactly what you'd hope for, and it's a sign that quotient groups are a natural and well-behaved construction.
:::

## The Correspondence Theorem

The final structural theorem describes the relationship between subgroups of a quotient and subgroups of the original group.

:::theorem
**Correspondence Theorem (Fourth Isomorphism Theorem):** Let $N \trianglelefteq G$ and $\pi : G \to G/N$ be the canonical projection. There is a bijection

$$\{\text{subgroups of } G \text{ containing } N\} \longleftrightarrow \{\text{subgroups of } G/N\}$$

given by $H \mapsto H/N = \pi(H)$ with inverse $\bar{H} \mapsto \pi^{-1}(\bar{H})$. Moreover:

1. $H_1 \subset H_2 \iff H_1/N \subset H_2/N$, and $[H_2 : H_1] = [H_2/N : H_1/N]$;
2. $H \trianglelefteq G \iff H/N \trianglelefteq G/N$.

:::proof
Given $H \supset N$, we have $H/N = \{hN : h \in H\}$, which is a subgroup of $G/N$. Given a subgroup $\bar{H} \subset G/N$, define $H = \pi^{-1}(\bar{H}) = \{g \in G : gN \in \bar{H}\}$. This contains $N$ (since $eN = N \in \bar{H}$) and is a subgroup.

These operations are inverses: starting with $H \supset N$, we get $$\pi^{-1}(H/N) = \{g : gN \in H/N\} = \{g : gN = hN \text{ for some } h \in H\}$$$$= \{g : g \in hN \text{ for some } h \in H\} = HN = H$$ (since $N \subset H$).

Starting with $\bar{H} \subset G/N$: $\pi(\pi^{-1}(\bar{H})) = \{gN : gN \in \bar{H}\} = \bar{H}$.

**(1)** $H_1 \subset H_2 \implies H_1/N \subset H_2/N$ is clear. Conversely, if $H_1/N \subset H_2/N$ and $h \in H_1$, then $hN \in H_1/N \subset H_2/N$, so $hN = h'N$ for some $h' \in H_2$, giving $h \in h'N \subset H_2$. The index statement follows since the correspondence preserves cosets.

**(2)** If $H \trianglelefteq G$, then for $gN \in G/N$ and $hN \in H/N$: $(gN)(hN)(gN)^{-1} = ghg^{-1}N \in H/N$ since $ghg^{-1} \in H$. Conversely, if $H/N \trianglelefteq G/N$, then for $g \in G, h \in H$: $ghg^{-1}N = (gN)(hN)(gN)^{-1} \in H/N$, so $ghg^{-1} \in H$.
:::
:::
