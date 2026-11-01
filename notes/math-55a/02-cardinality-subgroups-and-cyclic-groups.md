---
course: math-55a
chapter: 1
section: 2
title: Cardinality, Subgroups and Cyclic Groups
date: 2025-09-05
lecturer: Denis Auroux
source-pages: A02-1–A02-4
---

## Set theory interlude

Recall that a map of sets $f : S \to T$ is

- **injective** if $\forall a, b \in S$, $f(a) = f(b) \Rightarrow a = b$ (or: $a \neq b \Rightarrow f(a) \neq f(b)$). Write $f : S \hookrightarrow T$.
- **surjective** if $\forall c \in T$, $\exists a \in S$ such that $f(a) = c$. Write $f : S \twoheadrightarrow T$.
- a **bijection** $f : S \xrightarrow{\sim} T$ if both hold.

:::definition
Say two sets $S, T$ have the **same cardinality** if there exists a bijection $f : S \to T$, and write $|S| = |T|$. If there exists an injection $f : S \hookrightarrow T$, then write $|S| \le |T|$.
:::

This notation is legit thanks to the **Schröder–Bernstein theorem**:

:::theorem Schröder–Bernstein
If there exist injective maps $f : S \hookrightarrow T$ and $g : T \hookrightarrow S$, then $|S| = |T|$.
:::

(See Halmos, *Naive Set Theory*, p. 88 for a proof: build a bijection $S \xrightarrow{\sim} T$ by using $f$ on a subset of $S$ and $g^{-1}$ on the rest.)

:::example
$\NN$, $\ZZ$, $\QQ$ all have the same cardinality; these are called **countably infinite**.

E.g. construct a bijection $\NN \to \ZZ$ by setting
$$
f(n) = \begin{cases} n/2 & \text{if } n \text{ even}, \\ -(n+1)/2 & \text{if } n \text{ odd}. \end{cases}
$$
For $\QQ$, first understand how to enumerate $\NN \times \NN$ = pairs of integers.
:::

On the other hand, $\RR$ is **uncountable**, using **Cantor’s diagonal argument**: no map $f : \NN \to \RR$ can be surjective, because: write the decimal or binary expansions
$$
\begin{aligned}
f(0) &= \mathbf{a_{00}}.a_{01}a_{02}a_{03}\dots \\
f(1) &= a_{10}.\mathbf{a_{11}}a_{12}a_{13}\dots \\
f(2) &= a_{20}.a_{21}\mathbf{a_{22}}a_{23}\dots \\
f(3) &= a_{30}.a_{31}a_{32}\mathbf{a_{33}}\dots \\
&\ \ \vdots
\end{aligned}
$$
Then let $y = b_0.b_1b_2b_3\dots$, where we choose $b_j \neq a_{jj}$ for each $j$ (going down the diagonal). Looking at the $j$-th digit, $y \neq f(j)$ for all $j \in \NN$, so $f$ can’t be surjective.

The same argument shows there are arbitrarily large cardinals: given a set $S$, let
$$
\mathcal{P}(S) = \{\text{subsets of } S\} \quad (\text{"power set of } S\text{"}).
$$
It is in bijection with $\{0,1\}^S = \{\text{maps } f : S \to \{0,1\}\}$, via $f \mapsto f^{-1}(1)$, with inverse
$$
A \mapsto \left( \mathbf{1}_A : x \mapsto \begin{cases} 1 & \text{if } x \in A, \\ 0 & \text{if } x \notin A \end{cases} \right).
$$
If $S$ is finite, $|S| = n$, then $|\mathcal{P}(S)| = 2^n$. What if $S$ is infinite?

:::theorem
If $S$ is infinite, then $|\mathcal{P}(S)| > |S|$.
:::

:::proof (Cantor)
Given $f : S \to \mathcal{P}(S)$, let $A = \{ x \in S \mid x \notin f(x) \}$. Assume $A = f(a)$ for some $a \in S$. Then $a \in A$ iff $a \notin f(a) = A$, a contradiction. So $A \notin f(S)$, and there is no surjection. $\square$
:::

(This is just the diagonal argument again. Do you see how?)

## Back to groups

Recall:

:::definition
A **group** $G$ is a set with an operation $G \times G \to G$, $(a, b) \mapsto a \cdot b$, such that

1. **identity**: $\exists e \in G$ such that $\forall a \in G$, $ae = ea = a$;
2. **inverse**: $\forall a \in G$, $\exists b \ (= a^{-1}) \in G$ such that $ab = ba = e$;
3. **associativity**: $\forall a, b, c \in G$, $(ab)c = a(bc)$.
:::

We’ve seen various examples last time.

## Products

Given two groups $G, H$, the **product group** is $G \times H = \{ (g, h) \mid g \in G,\ h \in H \}$ with composition law $(g, h) \cdot (g', h') = (gg', hh')$.

- If $G, H$ are finite, of **order** $m = |G|$ and $n = |H|$, then $G \times H$ is a finite group of order $mn$.
- Similarly for a product of $n$ groups. Example: $\ZZ^n = \{ (a_1, \dots, a_n) \mid a_i \in \ZZ \}$, with $(a_1, \dots, a_n) + (b_1, \dots, b_n) = (a_1 + b_1, \dots, a_n + b_n)$. (Similarly $\QQ^n$, $\RR^n$, $\CC^n$ with componentwise addition.)
- Given infinitely many groups $G_1, G_2, G_3, \dots$, there are two different notions:
  - the **direct product** $\prod_{i=1}^\infty G_i = \{ (a_1, a_2, a_3, \dots) \mid a_i \in G_i \}$;
  - the **direct sum** $\bigoplus_{i=1}^\infty G_i = \{ (a_1, a_2, a_3, \dots) \mid a_i \in G_i, \text{ all but finitely many are the identity} \}$.

:::example
Consider $G_0 = G_1 = \dots = (\RR, +)$, and denote $(a_0, a_1, a_2, \dots)$ by $\sum a_i x^i$. Then $\prod_{i=0}^\infty \RR = \RR[[x]]$, the formal power series $\sum_{i=0}^\infty a_i x^i$ (with addition), and $\bigoplus_{i=0}^\infty \RR = \RR[x]$, the polynomials $\sum_{\text{finite}} a_i x^i$.
:::

## Subgroups

:::definition
A **subgroup** $H$ of a group $G$ is a *non-empty*(!) subset $H \subset G$ which is closed under composition ($a, b \in H \Rightarrow ab \in H$) and inversion ($a \in H \Rightarrow a^{-1} \in H$). These conditions imply $e \in H$. So $H$ (with the same operation) is also a group.

Say $H$ is a **proper subgroup** if $H \subsetneq G$.
:::

:::example
- $(\ZZ, +) \subset (\QQ, +) \subset (\RR, +) \subset (\CC, +)$.
- $(\QQ^*, \times) \subset (\RR^*, \times) \subset (\CC^*, \times) \supset (S^1, \times)$.
- $\{e\} \subset G$, the trivial subgroup.
- $H_i \subset G_i \Rightarrow H_1 \times \dots \times H_n \subset G_1 \times \dots \times G_n$.
- $\bigoplus G_i \subset \prod G_i$.
:::

:::proposition
If $H, H' \subset G$ are two subgroups, then $H \cap H'$ is also a subgroup.
:::

:::proof
- $e \in H \cap H'$, so it is nonempty.
- If $a, b \in H \cap H'$, then $ab \in H$ and $ab \in H'$, so $ab \in H \cap H'$.
- Likewise for inverses. $\square$
:::

Similarly for more than two subgroups (even infinitely many). (However, $H \cup H'$ is almost never a subgroup. Why?)

## Homomorphisms

:::definition
Given two groups $G, H$, a **homomorphism** $\varphi : G \to H$ is a map which respects the composition law: $\forall a, b \in G$, $\varphi(ab) = \varphi(a)\varphi(b)$.

(This implies $\varphi(e_G) = e_H$ and $\varphi(a^{-1}) = \varphi(a)^{-1}$.)
:::

:::remark
A pedantic way to state $\varphi(ab) = \varphi(a)\varphi(b)$ is by a **commutative diagram**:
$$
\begin{CD}
G \times G @>{\varphi \times \varphi}>> H \times H \\
@V{m_G}VV @VV{m_H}V \\
G @>{\varphi}>> H
\end{CD}
$$
“Commutative diagram” means that the two paths from $G \times G$ to $H$ give the same map: it doesn’t matter if we multiply first or apply $\varphi$ first.
:::

- An **isomorphism** is a bijective homomorphism (two isomorphic groups are “secretly the same”).
- An **automorphism** is an isomorphism $G \to G$.

:::example Isomorphisms
All groups of order 2 are isomorphic! $S_2 = (\{\mathrm{id}, (1\,2)\}, \circ) \cong (\{\pm 1\}, \times) \cong (\ZZ/2, +)$, because the multiplication table is always
$$
\begin{array}{c|cc}
m & e & x \\ \hline
e & e & x \\
x & x & e
\end{array}
$$

- $(\RR, +) \xrightarrow[\exp]{\sim} (\RR_{>0}, \times)$, and $(\RR/\ZZ, +) \xrightarrow[\exp(2\pi i t)]{\sim} (S^1, \times)$.
- $S_3 \cong$ symmetries of $\triangle$ (permutations of the vertices).
:::

:::example Homomorphisms
- $\ZZ \twoheadrightarrow \ZZ/n$, $a \mapsto a \bmod n$ (the remainder of Euclidean division by $n$).
- If $n \mid m$, $\ZZ/m \twoheadrightarrow \ZZ/n$ similarly (e.g. $\ZZ/100 \to \ZZ/10$: last 2 digits $\mapsto$ last digit).
- The determinant $GL_n(\RR) \to (\RR^*, \times)$ ($\det(AB) = \det(A)\det(B)$).
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 3](/notes/math-55a/03-equivalence-relations-and-cosets)
:::definition Kernel
The **kernel** of a group homomorphism $\varphi : G \to H$ is
$$
\ker(\varphi) = \{ a \in G \mid \varphi(a) = e_H \}.
$$
:::

:::proposition
- $\ker(\varphi)$ is a subgroup of $G$ (check that it contains $e_G$, products, inverses).
- $\varphi$ is injective iff $\ker(\varphi) = \{e_G\}$ (using: $\varphi(a) = \varphi(b) \Leftrightarrow a^{-1}b \in \ker\varphi$).
:::

:::definition Image
The **image** of a group homomorphism $\varphi : G \to H$ is
$$
\operatorname{Im}(\varphi) = \varphi(G) = \{ b \in H \mid \exists a \in G \text{ such that } \varphi(a) = b \}.
$$
This is a subgroup of $H$. $\varphi$ is surjective iff $\operatorname{Im}(\varphi) = H$.
:::

:::remark
If $\varphi$ is injective, then $G$ is isomorphic to the subgroup $\operatorname{Im}(\varphi) \subset H$. (The isomorphism is given by the map $G \to \operatorname{Im}(\varphi)$, $a \mapsto \varphi(a)$.)
:::

**Subgroups of $\ZZ$**

Given $a \in \ZZ_{>0}$, $\ZZ a = \{ na \mid n \in \ZZ \} \subset \ZZ$ is a subgroup.

:::proposition
All nontrivial subgroups of $(\ZZ, +)$ are of this form.
:::

:::proof
This follows from the Euclidean algorithm. Given a nontrivial subgroup $\{0\} \neq H \subset \ZZ$, there exists $a \in H$ such that $a > 0$. Let $a_0$ be the smallest positive element of $H$. Given any $b \in H$, $b = qa_0 + r$ for some $q \in \ZZ$ and $0 \le r < a_0$ (the remainder). Since $b \in H$ and $qa_0 \in H$, $r \in H$. Since $r < a_0$, by definition of $a_0$, $r$ must be zero. Hence $b \in \ZZ a_0$; so $H \subset \ZZ a_0$, and conversely $\ZZ a_0 \subset H$, so $H = \ZZ a_0$. $\square$
:::

So every subgroup of $\ZZ$ is **generated** by a single element $a_0$, in the sense we will now explain.

:::question
Given a (nonempty) subset $S \subset G$, what is the smallest subgroup of $G$ which contains $S$? This is denoted $\langle S \rangle$ and called the **subgroup generated by $S$**.
:::

**Answer:** look at all subgroups of $G$ which contain $S$ (there’s at least $G$ itself!) and take their intersection:
$$
\langle S \rangle = \bigcap_{\substack{S \subset H \subset G \\ \text{subgroup}}} H.
$$

**More useful answer:** $\langle S \rangle$ must contain all products of elements of $S$ and their inverses, and these form a subgroup of $G$, so
$$
\langle S \rangle = \{ a_1 \cdots a_k \mid a_i \in S \cup S^{-1}\ \forall\, 1 \le i \le k \}.
$$

:::definition
A group is **cyclic** if it is generated by a single element.
:::

(Examples: $\ZZ$, $\ZZ/n$. These are in fact the only cyclic groups up to isomorphism.)

:::example
$$
SL_2(\ZZ) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \;\middle|\; a, b, c, d \in \ZZ \text{ and } ad - bc = 1 \right\}
$$
can be generated by two elements! [Exercise! Fairly hard without a hint.]
:::

:::example
Let $a \in G$ be any element in a group $G$. Then the map $\varphi : \ZZ \to G$, $n \mapsto a^n$ is a homomorphism, with image $\langle a \rangle$, the cyclic subgroup generated by $a$.
:::

:::definition
The **order** of $a \in G$ is the smallest positive $k$ such that $a^k = e$, if it exists. Else, say $a$ has **infinite order**.
:::

:::note
Do not confuse the order of $a \in G$ with the order of $G$ ($= |G|$). Though, $\operatorname{order}(a) = |\langle a \rangle|$.
:::

If $a$ has infinite order, then the powers of $a$ are all distinct, $\varphi : n \mapsto a^n$ is injective, and $\langle a \rangle$ is isomorphic to $\ZZ$. If $a$ has finite order $k$, then $\ker(\varphi) = \ZZ k$, and $\langle a \rangle = \{ a^n \mid n = 0, \dots, k-1 \}$ is isomorphic to $\ZZ/k$. (This completes the classification of cyclic groups, by the way.)

:::example
$$
\ZZ/6 \xrightarrow{\sim} \ZZ/2 \times \ZZ/3, \qquad a \mapsto (a \bmod 2,\ a \bmod 3)
$$
(observe: $(1,1) \in \ZZ/2 \times \ZZ/3$ has order 6, so it generates).

Similarly, $\gcd(m, n) = 1 \Rightarrow \ZZ/m \times \ZZ/n \cong \ZZ/mn$. But $\ZZ/2 \times \ZZ/2 \not\cong \ZZ/4$: $x + x = 0$ for all $x$, versus $1 + 1 \neq 0$.
:::
:::
