---
course: math-55a
chapter: 1
section: N4
title: Cardinality, Products, Subgroups and Homomorphisms
date: 2025-09-05
source-pages: math55-06
---

## Set theory review

- Hook right arrow (injective): we may write $f : S \hookrightarrow T$.
- Surjective: we may write $f : S \twoheadrightarrow T$.
- Bijective: $f : S \xrightarrow{\ \sim\ } T$.

:::definition Cardinality
We say $S$ and $T$ have the **same cardinality** if there exists a bijection $f : S \xrightarrow{\sim} T$, and write $|S| = |T|$. If there exists an injection $S \hookrightarrow T$, $|S| \leq |T|$.
:::

:::theorem Schröder–Bernstein
If there exist injective $f : S \hookrightarrow T$ and $g : T \hookrightarrow S$, then there exists a bijection $S \xrightarrow{\sim} T$, so $|S| = |T|$. (Full proof: Halmos p. 88.)
:::

For $|\NN| = |\ZZ|$, notice: send $m \mapsto q$, where $q \in \ZZ^+$, if $m = 2n$, and $m \mapsto p$, where $p \in \ZZ^-$, if $m = 2n + 1$.

$\NN, \ZZ, \QQ$: countably infinite.

:::theorem $\RR$ is uncountable
No map $f : \NN \to \RR$ can be surjective.
:::

:::proof
Cantor’s diagonal argument: use the binary or decimal expansion. Write
$$
\begin{aligned}
f(0) &= a_{00}\, a_{01}\, a_{02} \cdots \\
f(1) &= a_{10}\, a_{11}\, a_{12} \cdots \\
f(2) &= a_{20}\, a_{21}\, a_{22} \cdots \\
&\ \ \vdots
\end{aligned}
$$
Let $y = b_0 b_1 b_2 \cdots$ where $b_j \neq a_{jj}$ for all $j$ (along the diagonal). Then $y \neq f(n)$ for all $n$.
:::

> “Real mathematicians don’t care about the axiom of choice, get over it!” (Prof. Auroux, 2025)

Using the same diagonal argument we know there are arbitrarily large cardinals. Easy algorithm for finding them: take any set $S$ and find $\mathcal{P}(S)$; then $|\mathcal{P}(S)| \geq |S|$, where
$$
\mathcal{P}(S) \cong \{0, 1\}^S = \{ \text{maps } S \xrightarrow{f} \{0, 1\} \}
$$
(margin: confused; wtf Cantor). If $|S| = n$ is finite, $|\mathcal{P}(S)| = 2^n$. If $|S|$ is infinite, $|\mathcal{P}(S)| > |S|$ (proof by Cantor):

:::proof
Given $f : S \to \mathcal{P}(S)$, we show it cannot be surjective. Let
$$
A = \{ x \in S : x \notin f(x) \}, \qquad A \in \mathcal{P}(S).
$$
Then for any $x \in S$, $x \in A \iff x \notin f(x)$, so $A \neq f(x)$.
:::

## Back to group theory

(Products of countably infinite sets, say $S$, have the same cardinality as $\RR$: $|S^{\NN}| = |\RR|$.)

:::definition Product of groups
Given groups $G = (G, *)$ and $H = (H, *)$,
$$
G \times H = \{ (g, h) : g \in G,\ h \in H \}
$$
with $(g, h) \cdot (g', h') = (g * g', h * h')$, where $\cdot$ is the operation on $G \times H$ and the two $*$ are the operations of $G$ and of $H$. If $|G| = m$, $|H| = n$, then $|G \times H| = nm$.
:::

Products of more than 2 groups: $(\ZZ, +) \rightsquigarrow \ZZ^d = \{ (a_1, \dots, a_d) : a_i \in \ZZ\ \forall i = 1, \dots, d \}$.

Given infinitely many groups $G_1, G_2, \dots$ (margin: understand more):

:::definition Direct product, direct sum
$$
\text{direct product: } \prod_{i=1}^{\infty} G_i = \{ (a_1, a_2, \dots) \mid a_i \in G_i \},
$$
$$
\text{direct sum: } \bigoplus_{i=1}^{\infty} G_i = \{ (a_1, a_2, \dots) \mid a_i \in G_i\ \forall i,\ \text{all but finitely many } a_i \text{ are identity elements} \}.
$$
(Margin: this is why we don’t use $\Sigma$.)
:::

:::example
Consider $G_0 = G_1 = \dots = (\RR, +)$ and denote $(a_0, a_1, \dots)$ by $a_0 + a_1 x + a_2 x^2 + \dots \to \sum a_i x^i$: finitely many terms give polynomials, infinitely many give power series. So
$$
\prod_{i \geq 0} \RR \cong \RR[[x]], \text{ formal power series } \sum_{i=0}^{\infty} a_i x^i, \qquad\text{and}\qquad \bigoplus_{i \geq 0} \RR = \RR[x], \text{ polynomials } \sum_{i=0}^{d} a_i x^i.
$$
:::

## Subgroups

:::definition Subgroup
A **subgroup** $H$ of a group $G$ is a non-empty subset of the set $G$ which is closed under the operation (law of composition), $a, b \in H \Rightarrow ab \in H$, and closed under inversion, $a \in H \Rightarrow a^{-1} \in H$. These two properties imply $e \in H$: notice $aa^{-1} \in H$ and $aa^{-1} = e$. $H$ with the restricted operation of $G$ is a group. Say $H$ is a **proper subgroup** if $H \subsetneq G$. Say $H$ is the **trivial subgroup** if $H = \{e\}$.
:::

:::proposition
If $H, H' \subset G$ are subgroups, then $H \cap H'$ is also a subgroup of $G$.
:::

(Margin: if you take the intersection of all subgroups, does it result in the trivial subgroup?)

## Homomorphisms

:::definition Homomorphism
Given groups $G$ and $H$, a **homomorphism** $\varphi : G \to H$ is a map which respects the operation (law of composition): for $a, b \in G$,
$$
\varphi(\underbrace{ab}_{\text{op. } G}) = \underbrace{\varphi(a)\varphi(b)}_{\text{op. } H}.
$$
This implies $\varphi(e_G) = e_H$ and $\varphi(a^{-1}) = \varphi(a)^{-1}$.
:::

:::remark
A pedantic way to state $\varphi(ab) = \varphi(a)\varphi(b)$ is by using a **commutative diagram**:
$$
\begin{CD}
G \times G @>{\varphi \times \varphi}>> H \times H \\
@V{*_G}VV @VV{*_H}V \\
G @>{\varphi}>> H
\end{CD}
\qquad\qquad
\begin{CD}
(a, b) @>>> (\varphi(a), \varphi(b)) \\
@VVV @VVV \\
a *_G b @>>> \varphi(a *_G b) = \varphi(a) *_H \varphi(b)
\end{CD}
$$
Going around either way gives the same element: the two results are equal.
:::

:::definition Isomorphism
An **isomorphism** is a bijective homomorphism.
:::

:::example
- All groups of order 2 are isomorphic to each other: $(S_2 = \{ e, (12) \}, \circ) \cong (\{\pm 1\}, \times) \cong (\ZZ_2, +)$.
- $(\RR, +) \xrightarrow[\exp]{\ \sim\ } (\RR_+, \times)$.
- $S_3 = \operatorname{Perm}(\{1, 2, 3\}) \cong D_3$ (the symmetries of a triangle with vertices labelled $1, 2, 3$).
- $GL(n, \RR) \xrightarrow{\ \det\ } (\RR^*, \cdot)$.
- $\ZZ \twoheadrightarrow \ZZ_n$, $a \mapsto a \bmod n$ (homomorphism but not isomorphism).
- If $n \mid m$, $\ZZ_m \twoheadrightarrow \ZZ_n$; think $\ZZ_{100} \twoheadrightarrow \ZZ_{10}$ (homomorphism, not isomorphism).
:::

:::definition Kernel
The **kernel** of a group homomorphism $\varphi : G \to H$ is the set of all elements of $G$ which go to the identity element of $H$:
$$
\ker(\varphi) = \{ a \in G : \varphi(a) = e_H \}.
$$
It is a subgroup of $G$.
:::

- $\varphi$ is injective $\iff \ker(\varphi) = \{e_G\}$:
$$
\varphi(a) = \varphi(b) \iff \varphi(a)^{-1}\varphi(b) = e_H \overset{\text{homom.}}{\iff} \varphi(a^{-1}b) = e_H \iff a^{-1}b \in \ker(\varphi).
$$
Therefore the kernel also shows the “difference” of two elements which map to the same element (identity).
