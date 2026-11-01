---
course: math-55a
chapter: 1
section: N6
title: Cosets, Lagrange’s Theorem and Normal Subgroups
date: 2025-09-10
source-pages: math55-09
---

## Cosets

:::definition Left coset
Given a subgroup $K$ of a group $G$ and $a \in G$, the set $aK = \{ ak : k \in K \} \subset G$ is the **left coset** of $K$ containing $a$.
:::

- The relation $a \sim b \iff a^{-1}b \in K$ is an equivalence relation on $G$, whose equivalence classes are the left cosets.
- The quotient set (the set of left cosets) is denoted $G/K$. We have
$$
G = \bigsqcup_{aK \in G/K} aK \qquad (\textstyle\bigsqcup \text{ is a disjoint union}).
$$

:::proof
That $\sim$ is an equivalence relation:
- $a^{-1}a = e \in K$, therefore $a \sim a$.
- If $a \sim b$, then $a^{-1}b \in K$, so $(a^{-1}b)^{-1} = b^{-1}a \in K$, therefore $b \sim a$.
- If $a \sim b$ and $b \sim c$, then $a^{-1}b, b^{-1}c \in K$, so $(a^{-1}b)(b^{-1}c) = a^{-1}c \in K$, therefore $a \sim c$.

That the classes are the left cosets: observe
$$
b \in aK \iff \exists k \in K \text{ such that } ak = b \iff \exists k \in K \text{ such that } k = a^{-1}b \iff a^{-1}b \in K \iff a \sim b,
$$
hence meow.
:::

:::example
The cosets of $n\ZZ \subset \ZZ$ are $[a] = a + n\ZZ$ = the congruence classes mod $n$ ($a \sim b \iff -a + b \in n\ZZ \iff a \equiv b \bmod n$). So
$$
\ZZ/n\ZZ = \{ \text{congruence classes mod } n \} \cong \ZZ/n.
$$
:::

:::definition Index
The **index** of the subgroup $K$ is the number of cosets, $(G : K) = |G/K|$.
:::

## Lagrange’s theorem

:::theorem
When $G$ is a finite group, each coset has $|aK| = |K|$. Thus $G = \bigsqcup aK$ implies
$$
|G| = |G/K| \cdot |K|.
$$
:::

:::corollary Lagrange’s Theorem
If $K$ is a subgroup of a finite group $G$, then $|K|$ divides $|G|$.
:::

:::corollary
For all $a \in G$, the order of $a$ (the minimal $n > 0$ with $a^n = e$) equals $|\langle a \rangle|$, which divides $|G|$.
:::

:::corollary
If $|G| = p$, where $p$ is prime, then $G \cong \ZZ/p$.
:::

:::proof
Let $a \in G$ with $a \neq e$. Then $a$ has order $p$, therefore $\langle a \rangle$ generates all of $G$: $G = \{ e, a, \dots, a^{p-1} \}$, and $G \xrightarrow{\ \sim\ } \ZZ/p$ via $a^k \mapsto k \bmod p$.
:::

## Right cosets vs. left cosets

$$
\text{left coset: } aK = \{ ak : k \in K \}, \qquad \text{right coset: } Ka = \{ ka : k \in K \},
$$
$$
L:\ a \sim b \iff a^{-1}b \in K, \qquad R:\ a \sim b \iff ba^{-1} \in K.
$$
Also let $aKa^{-1}$: this is a subgroup of $G$ (conjugation by $a$).

(“Awooga”: Auroux when he sees $\ZZ/n$.)

:::definition Normal subgroup
$K \subset G$ is a **normal subgroup** if it is a subgroup and $aK = Ka$ for all $a \in G$ ($\iff \sim_L$ and $\sim_R$ are equal, i.e. $a^{-1}b \in K \iff ba^{-1} \in K$).

Equivalently: $aKa^{-1} = K$ for all $a \in G$ (from $aK = Ka$, right-multiply by $a^{-1}$), i.e. $K$ is closed under conjugation by all elements of $G$.
:::

## Group structure on $G/K$

- For $n\ZZ \subset \ZZ$, the set of cosets $\ZZ/n\ZZ$ inherits a group structure because $\sim$ is compatible with $+$: $(a + n\ZZ) + (b + n\ZZ) = (a + b + n\ZZ)$, so $[a] + [b] = [a + b]$.
- In general, trying to define a group structure on $G/K$ by $(aK)(bK) = (abK)$ does NOT work. The issue: assume $a \sim a'$ ($\iff aK = a'K \iff a^{-1}a' \in K$), and the same with $b$. Does it then follow that $ab \sim a'b'$, i.e. $abK = a'b'K$? Girl, of course not (proof by “prof said”).

:::example
Let $G = D_4$ and consider the subgroup $H = \{ e, \mu \}$. Notice $e \sim \mu$ (i.e. $eH = \mu H = H$) (????). Then $\rho \sim \rho$, but does it follow that $\mu\rho \sim e\rho = \rho$? Nope! We have $\rho H = \{ \rho, \rho\mu \}$, while $\mu \circ \rho \neq \rho \circ \mu$ (the notes check this by drawing where each sends a labelled square), so $\mu\rho \notin \rho H$.
:::

**However!** The property holds when $K \subset G$ is the kernel of some homomorphism $\varphi : G \to H$, $\ker(\varphi) = \{ g \in G : \varphi(g) = e_H \} = K$:
$$
\varphi(a^{-1}b) = e_H \iff a^{-1}b \in K \iff a \sim b.
$$
Being in the same coset = having the same $\varphi(a)$: $aK = \varphi^{-1}(\{\varphi(a)\})$.

- If $a \sim a'$ and $b \sim b'$, then $\varphi(a) = \varphi(a')$ and $\varphi(b) = \varphi(b')$, so $\varphi(ab)$ is $\varphi(a)\varphi(b)$, which is $\varphi(a')\varphi(b') = \varphi(a'b')$; hence $ab \sim a'b'$. So we can define a group operation on $G/K$ by $(aK)(bK) = (abK)$. In fact we have a bijection
$$
\bar\varphi : G/K \xrightarrow{\ \sim\ } \Img(\varphi) \subset H, \qquad aK \mapsto \varphi(a).
$$
This is a group isomorphism! $\bar\varphi((aK)(bK)) = \bar\varphi(abK) = \varphi(a)\varphi(b) = \bar\varphi(aK)\,\bar\varphi(bK)$.

### Examples of normal subgroups

- Any subgroup of an abelian group is normal.
- In $D_4$, $H = \{ e, \mu \}$ is NOT normal ($\rho\mu \neq \mu\rho$).

:::theorem
Given a group $G$ and a subgroup $K \subset G$, the following are equivalent:
1. There exists a group homomorphism $\varphi : G \to H$ with $\ker(\varphi) = K$.
2. $K$ is a normal subgroup.
3. $G/K$ has a group structure given by $(aK)(bK) = (abK)$.
:::

:::proof
(i) $\Rightarrow$ (ii) (we have already seen (i) $\Rightarrow$ (iii)). Suppose $K = \ker(\varphi)$. We want to compare right and left cosets ($aK \overset{?}{=} Ka$). For all $a, b \in G$,
$$
\begin{aligned}
\varphi(a) = \varphi(b) &\iff \varphi(a)^{-1}\varphi(b) = e_H \iff \varphi(a^{-1}b) = e_H \iff a^{-1}b \in K \iff b \in aK \\
&\iff \varphi(b)\varphi(a)^{-1} = e_H \iff \varphi(ba^{-1}) = e_H \iff ba^{-1} \in K \iff b \in Ka,
\end{aligned}
$$
so $Ka = aK$, and $K$ is normal.

(ii) $\Rightarrow$ (iii). Assume $K$ is normal. Then $a^{-1}a' \in K$ and $b^{-1}b' \in K \overset{?}{\implies} (ab)^{-1}(a'b') \in K$: trivial.
:::
