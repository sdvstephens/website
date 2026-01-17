---
course: math-55a
chapter: 3
section: 3.2
title: Group Actions and Symmetry
---

# Section 3.2: Group Actions and Symmetry

The notion of a group "acting" on a set is perhaps the single most important concept connecting abstract algebra to the rest of mathematics. When we study symmetries of geometric objects, solutions to polynomial equations, or even the structure of groups themselves, we are studying group actions. This section develops the theory systematically—pay close attention, as these ideas will reappear throughout when we discuss representation theory (where groups act on vector spaces via linear maps).

## Group actions

:::definition
**Group action:** A ***(left) group action*** of a group $G$ on a set $X$ is a map $G \times X \to X$, written $(g, x) \mapsto g \cdot x$, satisfying:

1. $e \cdot x = x$ for all $x \in X$ (identity acts trivially);
2. $(gh) \cdot x = g \cdot (h \cdot x)$ for all $g, h \in G$ and $x \in X$ (compatibility).

We say $G$ ***acts on*** $X$, or that $X$ is a ***$G$-set***.
:::

:::note
There is an equivalent, perhaps more illuminating, formulation: a group action is a homomorphism $\rho : G \to \operatorname{Sym}(X)$, where $\operatorname{Sym}(X)$ is the group of all bijections $X \to X$. Given an action, define $\rho(g)(x) = g \cdot x$; the axioms ensure each $\rho(g)$ is a bijection (with inverse $\rho(g^{-1})$) and that $\rho$ is a homomorphism. Conversely, any such homomorphism defines an action. This perspective is crucial: *group actions are the same as representations of $G$ into symmetric groups*.
:::

:::example
**Fundamental examples of group actions:**

1. **Left multiplication:** $G$ acts on itself by $g \cdot h = gh$. This action is always faithful (only $e$ acts trivially) and transitive (any element can be sent to any other).
2. **Conjugation:** $G$ acts on itself by $g \cdot h = ghg^{-1}$. The kernel is $Z(G)$, the center.
3. **Conjugation on subgroups:** $G$ acts on the set of its subgroups by $g \cdot H = gHg^{-1}$. Normal subgroups are precisely the fixed points!
4. **Coset action:** If $H \subset G$, then $G$ acts on $G/H$ (left cosets) by $g \cdot (aH) = (ga)H$.
5. **Linear actions:** $\operatorname{GL}_n(\mathbb{R})$ acts on $\mathbb{R}^n$ by matrix multiplication. This is the prototype for representation theory.
:::

:::definition
**Orbits and stabilizers:** Let $G$ act on $X$. For $x \in X$:

1. The ***orbit*** of $x$ is $G \cdot x = \{g \cdot x : g \in G\} \subseteq X$.
2. The ***stabilizer*** (or ***isotropy group***) of $x$ is $G_x = \operatorname{Stab}_G(x) = \{g \in G : g \cdot x = x\} \subseteq G$.
:::

:::proposition
**Stabilizers are subgroups:** For any $x \in X$, the stabilizer $G_x$ is a subgroup of $G$.

:::proof
Identity: $e \cdot x = x$, so $e \in G_x$. Closure: if $g, h \in G_x$, then $(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x$, so $gh \in G_x$. Inverses: if $g \in G_x$, then $x = e \cdot x = (g^{-1}g) \cdot x = g^{-1} \cdot (g \cdot x) = g^{-1} \cdot x$, so $g^{-1} \in G_x$.
:::
:::

:::proposition
**Orbits partition $X$:** The orbits of a group action form a partition of $X$. Define $x \sim y$ iff $y = g \cdot x$ for some $g \in G$; this is an equivalence relation whose equivalence classes are exactly the orbits.

:::proof
Reflexivity: $x = e \cdot x$, so $x \sim x$. Symmetry: if $y = g \cdot x$, then $x = g^{-1} \cdot y$, so $y \sim x$ implies $x \sim y$. Transitivity: if $y = g \cdot x$ and $z = h \cdot y$, then $z = h \cdot (g \cdot x) = (hg) \cdot x$, so $x \sim z$.
:::
:::

The following theorem is one of the most useful results in all of group theory. It connects the size of an orbit to the index of a stabilizer.

:::theorem
**Orbit-Stabilizer Theorem:** Let $G$ act on $X$ and let $x \in X$. There is a bijection between the orbit $G \cdot x$ and the set of left cosets $G/G_x$, given by $g \cdot x \mapsto gG_x$. In particular, if $G$ is finite,

$$|G \cdot x| = [G : G_x] = \frac{|G|}{|G_x|}.$$

:::proof
Define $\varphi : G/G_x \to G \cdot x$ by $\varphi(gG_x) = g \cdot x$.

**Well-defined:** If $gG_x = hG_x$, then $h = gk$ for some $k \in G_x$, so $h \cdot x = (gk) \cdot x = g \cdot (k \cdot x) = g \cdot x$.

**Injective:** If $g \cdot x = h \cdot x$, then $h^{-1}g \cdot x = x$, so $h^{-1}g \in G_x$, giving $gG_x = hG_x$.

**Surjective:** Every element of $G \cdot x$ has the form $g \cdot x = \varphi(gG_x)$.
:::
:::

:::example
Consider $S_4$ acting on $\{1,2,3,4\}$ in the natural way. Take $x = 1$. The orbit is $S_4 \cdot 1 = \{1,2,3,4\}$ (any element can be sent to any other). The stabilizer is $(S_4)_1 = \{\sigma \in S_4 : \sigma(1) = 1\}$, which consists of all permutations of $\{2,3,4\}$, so $(S_4)_1 \cong S_3$ and $|(S_4)_1| = 6$. Check: $|S_4 \cdot 1| = 4 = 24/6 = |S_4|/|(S_4)_1|$. ✓
:::

## Cayley's theorem and applications

:::theorem
**Cayley's Theorem:** Every group $G$ is isomorphic to a subgroup of $\operatorname{Sym}(G)$. If $|G| = n$, then $G$ embeds into $S_n$.

:::proof
Consider the left multiplication action of $G$ on itself: $g \cdot h = gh$. This gives a homomorphism $\rho : G \to \operatorname{Sym}(G)$ where $\rho(g)$ is the bijection $h \mapsto gh$.

**Injectivity:** If $\rho(g) = \rho(g')$, then for all $h \in G$, $gh = g'h$. Taking $h = e$: $g = g'$. Thus $\ker(\rho) = \{e\}$, so $\rho$ is injective.

By the First Isomorphism Theorem, $G \cong \operatorname{Im}(\rho) \subset \operatorname{Sym}(G)$. If $|G| = n$, then $\operatorname{Sym}(G) \cong S_n$.
:::
:::

:::note
Cayley's theorem is simultaneously profound and useless. Profound: every abstract group is "really" a permutation group; the group axioms capture exactly the structure of bijection composition. Useless: the embedding is almost always far larger than necessary. $S_n$ has order $n!$, so embedding a group of order $n$ into $S_n$ wastes enormous space. Better embeddings come from finding smaller faithful actions.
:::

:::proposition
**Improved Cayley embedding:** Let $H \subset G$ with $[G:H] = n$. The action of $G$ on $G/H$ gives a homomorphism $\rho : G \to S_n$ with $\ker(\rho) = \bigcap_{g \in G} gHg^{-1}$, the largest normal subgroup of $G$ contained in $H$.

:::proof
The action $g \cdot (aH) = (ga)H$ is well-defined (check!). The kernel consists of all $g$ fixing every coset: $gaH = aH$ for all $a$, i.e., $a^{-1}ga \in H$ for all $a$, i.e., $g \in aHa^{-1}$ for all $a$. Thus $\ker(\rho) = \bigcap_{a \in G} aHa^{-1}$.
:::
:::

:::example
**Exercises:** Let $G$ be a group of order $2p$ where $p$ is an odd prime.

1. Prove that $G$ has a unique subgroup of order $p$, which is therefore normal.
2. Conclude that $G \cong \mathbb{Z}/2p$ or $G \cong D_p$ (the dihedral group of order $2p$).

:::solution
**(1)** By Cauchy's theorem (or direct counting), $G$ has an element $a$ of order $p$, so $H = \langle a \rangle$ is a subgroup of order $p$. Since $[G:H] = 2$, we have $H \trianglelefteq G$ (index 2 subgroups are always normal: $G = H \sqcup gH = H \sqcup Hg$ for any $g \notin H$, so $gH = Hg$).

For uniqueness: suppose $K$ is another subgroup of order $p$. Since $|H| = |K| = p$ is prime, $H \cap K$ is a subgroup of both with order dividing $p$, so $|H \cap K| \in \{1, p\}$. If $|H \cap K| = p$, then $H = K$. Otherwise, $H \cap K = \{e\}$, and if $H \neq K$, then $HK$ is a subgroup (since $H \trianglelefteq G$) of order $|H||K|/|H \cap K| = p^2 > 2p = |G|$, contradiction.

**(2)** Let $H = \langle a \rangle \cong \mathbb{Z}/p$ be the unique subgroup of order $p$. Pick $b \in G \setminus H$; then $b$ has order 2 (if $|b| = p$, then $b \in H$ by uniqueness; if $|b| = 2p$, then $G = \langle b \rangle$ is cyclic and $G \cong \mathbb{Z}/2p$).

Assume $|b| = 2$. Since $H \trianglelefteq G$, conjugation by $b$ gives an automorphism of $H \cong \mathbb{Z}/p$. We have $bab^{-1} = a^k$ for some $k$. Since $b^2 = e$: $a = b^2 a b^{-2} = b(bab^{-1})b^{-1} = ba^kb^{-1} = (bab^{-1})^k = a^{k^2}$, so $k^2 \equiv 1 \pmod{p}$, giving $k \equiv \pm 1 \pmod{p}$.

If $k \equiv 1$: then $bab^{-1} = a$, so $ab = ba$, and $G = \langle a, b \rangle$ is abelian of order $2p$ with $|a| = p, |b| = 2$, so $G \cong \mathbb{Z}/p \times \mathbb{Z}/2 \cong \mathbb{Z}/2p$.

If $k \equiv -1$: then $bab^{-1} = a^{-1}$, i.e., $ba = a^{-1}b$. This is exactly the dihedral relation! We have $G = \langle a, b : a^p = b^2 = e, \, bab^{-1} = a^{-1} \rangle \cong D_p$.
:::
:::