---
course: math-55a
chapter: 3
section: 3.1
title: Quotient Groups
---

# Section 3.1: Quotient Groups

Consider $\mathbb{Z}/n$. Under the equivalence relation congruence mod $n$ we can take the sum of the various subsets that mod $n$ partitions $\mathbb{Z}$ into as the law of composition given by $(a + n\mathbb{Z}) + (b + n\mathbb{Z}) = a + b + n\mathbb{Z}$. Notice that we can let $T$ be the set of equivalence classes under mod $n$, and thus we have a homomorphic map from $\mathbb{Z} \to T$. Finally, $T = \mathbb{Z}/n$.

Why stop at integers? What if we want to make congruence mod $H$ where $H$ is a subgroup $H \subset G$? Under what cases, given that we *can* make mod $H$ equivalence classes (we will define this in a bit) is the quotient map $G \to T$ a homomorphism? This question is the question of quotient groups, and its answer—normality—is of note and importance to much of group theory (i.e. it is foundational material).

## Congruence mod $H$ and cosets

For any two elements $a, b \in G$ we define $a \sim b \iff ab^{-1} \in H$, this is to say that $a \in bH$. We thus have $a \sim a$ since $e \in H$, $a \sim b \implies ab^{-1} \in H$, and $ba^{-1} = (ab^{-1})^{-1} \in H$, thus $b \sim a$. Finally, $a \sim b, b \sim c$ meaning that $ab^{-1}$ and $bc^{-1}$ are both in $H$, so $ac^{-1} = (ab^{-1})(bc^{-1}) \in H$ since $H$ is closed under the group operation, thus $a \sim c$ and transitivity holds. We have shown congruence mod $H$ is indeed an equivalence relation.

:::definition
**Cosets:** Given a subgroup $H \subset G$ and an element $a \in G$, the ***left coset*** of $H$ containing $a$ is the set $aH = \{ah \mid h \in H\}$. Similarly, the ***right coset*** is $Ha = \{ha \mid h \in H\}$. The equivalence classes under congruence mod $H$ are precisely the left cosets of $H$.
:::

:::proposition
**Cosets partition $G$:** The left cosets of $H$ form a partition of $G$. Every element $g \in G$ belongs to exactly one coset, namely $gH$, and two cosets $aH, bH$ are either identical or disjoint.

:::proof
This follows immediately from the fact that cosets are equivalence classes: $g \in gH$ since $g = ge$ and $e \in H$. For disjointness, suppose $aH \cap bH \neq \emptyset$, so there exists $c \in aH \cap bH$. Then $c = ah_1 = bh_2$ for some $h_1, h_2 \in H$, which gives $a = bh_2h_1^{-1} \in bH$. For any $ah \in aH$, we have $ah = bh_2h_1^{-1}h \in bH$, so $aH \subseteq bH$. By symmetry $bH \subseteq aH$, thus $aH = bH$.
:::
:::

Here is the key observation that makes quotient theory work: all cosets have the same size!

:::proposition
**Cosets are equinumerous:** For any $a \in G$, the map $\lambda_a : H \to aH$ given by $h \mapsto ah$ is a bijection. In particular, $|aH| = |H|$ for all $a \in G$.

:::proof
Surjectivity is immediate from the definition of $aH$. For injectivity, suppose $ah_1 = ah_2$. Left-multiplying by $a^{-1}$ gives $h_1 = h_2$. (This is just left-translation, which is always a bijection in a group—a fact we will revisit when discussing group actions.)
:::
:::

:::theorem
**Lagrange's Theorem:** Let $G$ be a finite group and $H \subset G$ a subgroup. Then $|H|$ divides $|G|$, and the quotient $|G|/|H| = [G:H]$ equals the number of distinct left cosets of $H$ in $G$.

:::proof
The left cosets of $H$ partition $G$ into disjoint subsets, each of cardinality $|H|$. If there are $k$ distinct cosets, then $|G| = k \cdot |H|$, so $|H| \mid |G|$ and $k = [G:H]$.
:::
:::

:::definition
**Index:** The ***index*** of a subgroup $H$ in $G$, denoted $[G:H]$, is the number of distinct left cosets of $H$ in $G$. For finite groups, $[G:H] = |G|/|H|$.
:::

:::note
Lagrange's theorem has immediate corollaries: the order of any element divides $|G|$ (since $\langle g \rangle$ is a subgroup), and groups of prime order are cyclic (the only subgroups have order 1 or $p$). The converse of Lagrange is false in general: $A_4$ has order 12 but no subgroup of order 6. However, for abelian groups and more generally for solvable groups, partial converses exist—a theme we'll explore later.
:::

A question naturally arises then: when is $G/H$ a group? If we try to define $(aH)(bH) = abH$, we need this to be *well-defined*, meaning if $aH = a'H$ and $bH = b'H$, then $abH = a'b'H$. This does *not* always work!

:::example
Consider $G = S_3$ and $H = \{e, (12)\}$. We have three left cosets: $H = \{e, (12)\}$, $(13)H = \{(13), (132)\}$, and $(23)H = \{(23), (123)\}$. Take representatives $a = (13)$ and $a' = (132)$ from the same coset; both satisfy $aH = a'H = (13)H$. Now take $b = (23)$. We compute:

- $ab = (13)(23) = (132)$, so $abH = (132)H = (13)H$
- $a'b = (132)(23) = (13)$, so $a'bH = (13)H$

Okay, this worked! But now try $b = (13)$ and $b' = (132)$ (same coset), with $a = (23)$:

- $ab = (23)(13) = (123)$, so $abH = (123)H = (23)H$
- $ab' = (23)(132) = (12)$, so $ab'H = (12)H = H$

Disaster! We got $(23)H \neq H$, so coset multiplication is not well-defined for this $H$.
:::

What went wrong? The issue is that $H = \{e, (12)\}$ is not "symmetric" enough—left cosets and right cosets differ. For instance, $(13)H = \{(13), (132)\}$ but $H(13) = \{(13), (123)\}$.

## Normal subgroups and quotient groups

:::definition
**Normal subgroup:** A subgroup $N \subset G$ is ***normal*** (written $N \trianglelefteq G$) if any of the following equivalent conditions hold:

1. $gNg^{-1} = N$ for all $g \in G$ (conjugation preserves $N$);
2. $gN = Ng$ for all $g \in G$ (left cosets equal right cosets);
3. $gNg^{-1} \subseteq N$ for all $g \in G$ (one inclusion suffices);
4. $N$ is the kernel of some homomorphism $\varphi : G \to H$.
:::

:::proof
**Equivalence of normality conditions:**

(1) $\Rightarrow$ (2): If $gNg^{-1} = N$, then $gN = Ng$ by right-multiplying by $g$.

(2) $\Rightarrow$ (3): If $gN = Ng$, then for $n \in N$, we have $gn \in gN = Ng$, so $gn = n'g$ for some $n' \in N$, giving $gng^{-1} = n' \in N$.

(3) $\Rightarrow$ (1): We have $gNg^{-1} \subseteq N$ by assumption. For the reverse, take $n \in N$. We want $n \in gNg^{-1}$, i.e., $g^{-1}ng \in N$. But applying (3) with $g^{-1}$: $g^{-1}N(g^{-1})^{-1} = g^{-1}Ng \subseteq N$, so $g^{-1}ng \in N$.

(4) $\Rightarrow$ (1): If $N = \ker(\varphi)$, then for $n \in N$ and $g \in G$: $\varphi(gng^{-1}) = \varphi(g)\varphi(n)\varphi(g)^{-1} = \varphi(g) e_H \varphi(g)^{-1} = e_H$, so $gng^{-1} \in \ker(\varphi) = N$.

(1) $\Rightarrow$ (4): This is the content of the next theorem—every normal subgroup is a kernel!
:::

:::theorem
**Quotient groups exist for normal subgroups:** If $N \trianglelefteq G$, then $G/N$ is a group under the operation $(aN)(bN) = abN$, called the ***quotient group***. The map $\pi : G \to G/N$ given by $\pi(g) = gN$ is a surjective homomorphism (the ***canonical projection***) with $\ker(\pi) = N$.

:::proof
**Well-definedness:** Suppose $aN = a'N$ and $bN = b'N$, so $a' = an_1$ and $b' = bn_2$ for some $n_1, n_2 \in N$. Then $a'b' = an_1bn_2 = a(n_1b)n_2$. Since $N$ is normal, $n_1b = bn_3$ for some $n_3 \in N$ (because $bN = Nb$ implies $n_1 \in Nb$, so $n_1 = bn_3$). Thus $a'b' = abn_3n_2 \in abN$, so $a'b'N = abN$.

**Group axioms:** Associativity: $(aN \cdot bN) \cdot cN = abN \cdot cN = (ab)cN = a(bc)N = aN \cdot bcN = aN \cdot (bN \cdot cN)$. Identity: $eN = N$ satisfies $N \cdot aN = eaN = aN$. Inverses: $(aN)^{-1} = a^{-1}N$ since $aN \cdot a^{-1}N = aa^{-1}N = N$.

**The projection:** $\pi(ab) = abN = aN \cdot bN = \pi(a)\pi(b)$, so $\pi$ is a homomorphism. Surjectivity is clear. Finally, $\ker(\pi) = \{g \in G : gN = N\} = \{g \in G : g \in N\} = N$.
:::
:::

:::example
**Exercises:** Let $G$ be a group and $Z(G) = \{z \in G : zg = gz \text{ for all } g \in G\}$ the center of $G$.

1. Prove that $Z(G) \trianglelefteq G$.
2. Prove that if $G/Z(G)$ is cyclic, then $G$ is abelian.
3. Find $Z(D_4)$ and describe $D_4/Z(D_4)$.

:::solution
**(1)** We verify normality via condition (1). For any $z \in Z(G)$ and $g \in G$, we have $gzg^{-1} = zgg^{-1} = z \in Z(G)$ (using that $z$ commutes with everything). Thus $gZ(G)g^{-1} \subseteq Z(G)$ for all $g$, so $Z(G) \trianglelefteq G$.

**(2)** Suppose $G/Z(G) = \langle aZ(G) \rangle$ is cyclic. Then every element of $G$ has the form $a^k z$ for some $k \in \mathbb{Z}$ and $z \in Z(G)$. Take any two elements $g = a^i z_1$ and $h = a^j z_2$. Then:

$$gh = a^i z_1 a^j z_2 = a^i a^j z_1 z_2 = a^{i+j} z_1 z_2$$

(since $z_1$ commutes with $a^j$ and $z_2$), and similarly $hg = a^{j+i} z_2 z_1 = a^{i+j} z_1 z_2 = gh$ (since $z_1, z_2$ commute with everything and with each other). Thus $G$ is abelian.

**(3)** Recall $D_4 = \{e, r, r^2, r^3, s, sr, sr^2, sr^3\}$ with $r^4 = s^2 = e$ and $srs = r^{-1}$. For $z \in Z(D_4)$, we need $zr = rz$ and $zs = sz$.

For rotations: $r^k \in Z(D_4)$ requires $sr^k = r^ks$. We have $sr^k = r^{-k}s$ (by induction using $srs = r^{-1}$), so $r^{-k}s = r^ks$, giving $r^{2k} = e$, so $k \in \{0, 2\}$. Thus $e, r^2$ are central among rotations.

For reflections: $sr^j \in Z(D_4)$ requires $r(sr^j) = (sr^j)r$, i.e., $rsr^j = sr^{j+1}$. But $rsr^j = r \cdot r^{-j}s = r^{1-j}s$, so we need $r^{1-j}s = sr^{j+1}$, giving $r^{1-j} = r^{-(j+1)} = r^{-j-1}$, so $r^{2} = e$, contradiction since $r$ has order 4. No reflections are central.

Therefore $Z(D_4) = \{e, r^2\} \cong \mathbb{Z}/2$. The quotient $D_4/Z(D_4)$ has order $8/2 = 4$. The cosets are $\{e, r^2\}, \{r, r^3\}, \{s, sr^2\}, \{sr, sr^3\}$. This is $\cong \mathbb{Z}/2 \times \mathbb{Z}/2$ (the Klein four-group), not $\mathbb{Z}/4$, since every non-identity element has order 2 in the quotient.
:::
:::

As a final remark before moving onto our next topic, I wish to introduce the concept of simple groups. Simply put, no pun intended, a simple group is a group that cannot be decomposed into further normal subgroups other than the trivial subgroup and itself.

:::definition
**Simple groups:** We say a group is ***simple*** if it has no normal subgroups other than itself and the trivial subgroup.
:::