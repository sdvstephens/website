---
course: math-55a
chapter: 2
section: 7
title: Bases, Dimension, and Matrices of Linear Maps
date: 2025-09-17
lecturer: Denis Auroux
source-pages: A07 1-5
---

## Span, linear independence, basis

Let $V$ be a vector space over $k$.

:::definition Span
Given $v_1, \dots, v_n \in V$, the **span** of $v_1, \dots, v_n$ is the smallest subspace of $V$ which contains $v_1, \dots, v_n$. Concretely,
$$\operatorname{span}(v_1, \dots, v_n) = \{a_1 v_1 + \dots + a_n v_n \mid a_i \in k\}.$$
Say $v_1, \dots, v_n$ **span $V$** if $\operatorname{span}(v_1, \dots, v_n) = V$.
:::

:::definition Linear independence
We say $v_1, \dots, v_n \in V$ are **linearly independent** if
$$a_1 v_1 + \dots + a_n v_n = 0 \implies a_1 = a_2 = \dots = a_n = 0.$$
:::

:::definition Basis
$(v_1, \dots, v_n)$ are a **basis** of $V$ if they are linearly independent and span $V$.
:::

Then any element of $V$ can be expressed *uniquely* as $\sum a_i v_i$ for some $a_i \in k$.

Equivalently, given $v_1, \dots, v_n \in V$, we have a linear map
$$\phi : k^n \longrightarrow V, \qquad (a_1, \dots, a_n) \longmapsto \sum a_i v_i,$$
and

- $v_1, \dots, v_n$ are linearly independent $\iff$ $\phi$ is injective;
- $v_1, \dots, v_n$ span $V$ $\iff$ $\phi$ is surjective;
- $v_1, \dots, v_n$ are a basis $\iff$ $\phi$ is bijective.

:::example
$(1,0)$ and $(0,1)$ are a basis of $k^2$. So are $(1,1)$ and $(1,-1)$ for *most* fields $k$. (What if $\operatorname{char}(k) = 2$?)
:::

:::note
We will see soon: if $V$ has a basis with $n$ elements, then every basis of $V$ has $n$ elements. We say the **dimension** of $V$ is $\dim(V) = n$.
:::

More generally, let $V$ be a vector space over $k$ and $S \subset V$ a subset (not necessarily finite).

:::definition Span, independence, basis for arbitrary subsets
- $\operatorname{span}(S)$ = the smallest subspace of $V$ containing $S$
$$= \{a_1 v_1 + \dots + a_n v_n \mid n \in \NN,\ a_1, \dots, a_n \in k,\ v_1, \dots, v_n \in S\}$$
(all *finite* linear combinations of elements of $S$).
- The elements of $S$ are **linearly independent** if there are no *finite* linear relations: for all $n \ge 1$, all $a_1, \dots, a_n \in k$, and all distinct elements $v_1, \dots, v_n$ of $S$,
$$a_1 v_1 + \dots + a_n v_n = 0 \implies a_1 = \dots = a_n = 0.$$
- $S$ is a **basis** of $V$ if its elements are linearly independent and span $V$.
:::

:::example
- $\{1, x, x^2, x^3, \dots\}$ is a basis of $k[x]$.
- Does $k[[x]]$ have a basis? What is it?
:::

## Linear maps

:::definition Linear map
Let $V, W$ be vector spaces over $k$. A **homomorphism** of vector spaces, or **linear map**, $\varphi : V \to W$, is any map that is compatible with the operations:
$$\varphi(u + v) = \varphi(u) + \varphi(v), \qquad \varphi(\lambda v) = \lambda \varphi(v) \qquad \forall \lambda \in k,\ \forall u, v \in V.$$
:::

:::proposition
The set of linear maps $V \to W$ is itself a vector space over $k$, denoted $\Hom(V, W)$.
:::

:::proof
Given $\varphi, \psi \in \Hom(V, W)$ and $\lambda \in k$, define
$$\begin{cases} \varphi + \psi & \text{by } (\varphi + \psi)(v) = \varphi(v) + \psi(v) \quad \forall v \in V, \\ \lambda\varphi & \text{by } (\lambda\varphi)(v) = \lambda \cdot \varphi(v). \end{cases}$$
One can check that

- $\varphi + \psi$ and $\lambda\varphi$ defined in this way are linear maps (so we do have operations $+, \cdot$ on $\Hom(V, W)$);
- these operations on $\Hom(V, W)$ satisfy the axioms of a vector space.

(Rather boring, but worth checking if you’re not sure!)
:::

We’ll soon see: if $\dim(V) = n$ and $\dim(W) = m$, then $\dim(\Hom(V, W)) = mn$. (In bases for $V$ and $W$, linear maps become $m \times n$ matrices!)

### The notions depend on the field

The notions of basis, dimension, linearity do depend on the coefficient field $k$!

:::example
$\CC$ is a vector space over itself (of dimension 1; $\{1\}$ is a basis). It is also a vector space over $\RR$ (of dimension 2, with basis $\{1, i\}$).
:::

If $V, W$ are $\CC$-vector spaces, hence also $\RR$-vector spaces, any $\CC$-linear map is also $\RR$-linear, but the converse isn’t true: $\Hom_\CC(V, W) \subsetneq \Hom_\RR(V, W)$.

For example, complex conjugation
$$\CC \longrightarrow \CC, \qquad z = a + bi \longmapsto \bar z = a - bi$$
is $\RR$-linear: $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$ and $\overline{az} = a\bar z$ for all $a \in \RR$; but it is *not* $\CC$-linear ($\overline{iz} \ne i\bar z$).

## Bases and dimension

Say $V$ is **finite-dimensional** if there exists a finite set that spans $V$.

:::lemma
If $\{v_1, \dots, v_m\}$ spans $V$, then a subset of $\{v_1, \dots, v_m\}$ is a basis.
:::

:::proof
If the $\{v_i\}$ are linearly independent, they form a basis. Otherwise, there is some linear relation $\sum a_i v_i = 0$, with the $a_i$ not all zero. This can be solved for $v_i$ = a linear combination of the others if $a_i \ne 0$. So remove $v_i$: $\{v_j \mid j \ne i\}$ still spans $V$. Continue removing elements until the remaining ones are linearly independent.
:::

Thus, every finite-dimensional vector space has a basis.

:::lemma
If $\{v_1, \dots, v_m\}$ are linearly independent, there exists a basis of $V$ which contains $\{v_1, \dots, v_m\}$.
:::

:::proof
Let $\{w_1, \dots, w_r\}$ be a spanning set for $V$. By induction we enlarge $\{v_1, \dots, v_m\}$ to a basis of
$$W_j = \operatorname{span}(\{v_1, \dots, v_m, w_1, \dots, w_j\}) \subset V$$
for each $j = 0, \dots, r$.

For $j = 0$: $\{v_1, \dots, v_m\}$ is a basis of $W_0$.

Assume $\{v_1, \dots, v_m, w_{i_1}, \dots, w_{i_k}\}$ is a basis of $W_{j-1} = \operatorname{span}(\{v_1, \dots, v_m, w_1, \dots, w_{j-1}\})$. If $w_j \in W_{j-1}$, then we already have a basis of $W_j = W_{j-1}$. Otherwise, $\{v_1, \dots, v_m, w_{i_1}, \dots, w_{i_k}, w_j\}$ are linearly independent (why?) and span $W_j$.

This ends with a basis of $W_r = V$ (since $\{w_1, \dots, w_r\}$ span).
:::

:::theorem
If $\{v_1, \dots, v_m\}$ and $\{w_1, \dots, w_n\}$ are bases of $V$, then $m = n$ (same number of elements).
:::

:::proof
- We claim there exists $j \in \{1, \dots, n\}$ such that $\{v_1, \dots, v_{m-1}, w_j\}$ is a basis.

  Indeed, $\{v_1, \dots, v_{m-1}\}$ are linearly independent, but don’t span $V$ (else $v_m \in \operatorname{span}\{v_1, \dots, v_{m-1}\}$ gives a linear relation $\sum_{i=1}^{m-1} a_i v_i - v_m = 0$). So there exists $j$ such that $w_j \notin \operatorname{span}\{v_1, \dots, v_{m-1}\}$ (else $w_1, \dots, w_n$ can’t span all of $V$).

  Now $\{v_1, \dots, v_{m-1}, w_j\}$ are linearly independent (why?), but using all the $v$’s, we can write $w_j = \sum_{i=1}^m a_i v_i$ (necessarily $a_m \ne 0$). So
  $$v_m = \frac{1}{a_m}\Big(w_j - \sum_{i=1}^{m-1} a_i v_i\Big) \in \operatorname{span}(\{v_1, \dots, v_{m-1}, w_j\}),$$
  and this implies $\{v_1, \dots, v_{m-1}, w_j\}$ span $V$, hence are a basis.
- Repeat this process to exchange one $v$ for one $w$ each time. (We don’t use the same $w$ twice, since the new $w$ we pick has to be independent of the rest of our basis.)

We end up with only $w$’s, and get an $m$-element subset of $\{w_1, \dots, w_n\}$ that is also a basis. Necessarily this is all of $\{w_1, \dots, w_n\}$, and $m = n$.
:::

:::definition Dimension
The **dimension** of $V$ is the cardinality of any basis.
:::

Given a basis $(v_1, \dots, v_n)$ of $V$, we get a linear map
$$\varphi : k^n \longrightarrow V, \qquad (x_1, \dots, x_n) \longmapsto \sum x_i v_i.$$
Linear independence $\iff$ $\varphi$ injective, and spanning $V$ $\iff$ $\varphi$ surjective, so $\varphi$ is an isomorphism!

Every finite-dimensional vector space over $k$ is $\cong k^n$ for $n = \dim V$, and a basis gives a specific *choice* of such an isomorphism. We represent $v = \sum x_i v_i$ by a **column vector** $\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 8](/notes/math-55a/08-matrices-direct-sums-and-quotient-spaces)
**Matrices of linear maps**

Given bases $(v_1, \dots, v_n)$ of $V$ and $(w_1, \dots, w_m)$ of $W$, we can represent a linear map $\varphi \in \Hom(V, W)$ by an $m \times n$ **matrix** $A \in \mathcal M_{m,n}$. This amounts to:

$$\begin{CD}
V @>{\varphi}>> W \\
@A{\text{basis}}A{\simeq}A @A{\simeq}A{\text{basis}}A \\
k^n @>{A}>> k^m
\end{CD} \qquad (\star)$$

Write
$$A = (a_{ij})_{\substack{1 \le i \le m \ (\text{rows}) \\ 1 \le j \le n\ (\text{columns})}} = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ a_{21} & & \\ \vdots & & \\ a_{m1} & \cdots & a_{mn} \end{pmatrix},$$
with $A : k^n \to k^m$ given by multiplication with column vectors: $\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} \mapsto A \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$.

**Notation:** $A = \mathcal M(\varphi, (v), (w))$, **the matrix of $\varphi$** in the given bases.

The entries of $A$ are characterized by
$$\varphi(v_j) = \sum_{i=1}^m a_{ij} w_i,$$
i.e. the *columns* of $A$ give the components of $\varphi(v_1), \dots, \varphi(v_n)$ in the basis $\{w_1, \dots, w_m\}$.

Representing any element $x \in V$ as $x = \sum_{i=1}^n x_i v_i \leftrightarrow$ the column vector $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$, and similarly for $y = \varphi(x) \in W$, $y = \sum y_i w_i \leftrightarrow Y = \begin{pmatrix} y_1 \\ \vdots \\ y_m \end{pmatrix} = AX$.

To be very explicit:
$$\varphi\Big(\sum_j x_j v_j\Big) = \sum_j x_j \varphi(v_j) = \sum_{i,j} x_j a_{ij} w_i = \sum_i \Big(\sum_j a_{ij} x_j\Big) w_i.$$

As a memory aid, the isomorphism $k^n \xrightarrow{\sim} V$ given by the basis can be written symbolically as multiplication of row and column vectors:
$$(v_1 \ \cdots \ v_n) \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \sum x_i v_i$$
(⚠ the $v_i$ aren’t numbers!!), and then
$$\varphi\big((v_1 \ \cdots \ v_n) X\big) = (w_1 \ \cdots \ w_m)\, AX$$
(compare $(\star)$ above).

This construction gives an isomorphism between the vector spaces $\Hom(V, W)$ and $\mathcal M_{m,n}$! (Linear maps $\leftrightarrow$ matrices.) In particular $\dim \Hom(V, W) = \dim \mathcal M_{m,n} = mn$.

**Direct sums and products of vector spaces**

Given vector spaces $V$ and $W$,
$$V \oplus W = V \times W = \{(v, w) \mid v \in V,\ w \in W\}$$
(with componentwise operations).

Similarly, given $n$ vector spaces, $V_1 \oplus \dots \oplus V_n = V_1 \times \dots \times V_n = \{(v_1, \dots, v_n) \mid v_i \in V_i\}$.

But for an infinite collection $(V_i)_{i \in I}$, we have two different constructions:
$$\bigoplus_{i \in I} V_i = \{(v_i)_{i \in I} \mid v_i \in V_i, \text{ only finitely many } v_i \ne 0\} \quad \text{vs.} \quad \prod_{i \in I} V_i = \{(v_i)_{i \in I} \mid v_i \in V_i\}.$$

:::example
$$\bigoplus_{n \in \NN} k \simeq k[x] \quad \text{vs.} \quad \prod_{n \in \NN} k \simeq k[[x]] \text{ (formal power series)}.$$
:::

**Sums and direct sums of subspaces**

Returning to the finite case…

:::definition Sum, independence, direct sum
Given subspaces $W_1, \dots, W_n \subset V$ of some vector space $V$:

- the **span** of $W_1, \dots, W_n$ is $W_1 + \dots + W_n = \{w_1 + \dots + w_n \mid w_i \in W_i\} \subset V$. Say the $W_i$ **span** $V$ if $W_1 + \dots + W_n = V$;
- the $W_i$ are **independent** if $w_1 + \dots + w_n = 0$, $w_i \in W_i \implies w_i = 0$ for all $i$;
- if the $W_i$ are independent and span $V$, say we have a **direct sum decomposition** $V = W_1 \oplus \dots \oplus W_n$, i.e. every element of $V$ can be written uniquely as $w_1 + \dots + w_n$ with $w_i \in W_i$.
:::

Relation to the previous notion: for each $i$ we have an inclusion map $W_i \hookrightarrow V$. These assemble into a linear map
$$\varphi : \bigoplus W_i \longrightarrow V, \qquad (w_1, \dots, w_n) \longmapsto \sum w_i.$$
$W_1, \dots, W_n$ span $V$ $\iff$ $\varphi$ is surjective; they are independent $\iff$ $\varphi$ is injective. If both hold, then $\varphi$ is an isomorphism $\bigoplus W_i \xrightarrow{\sim} V$ and we have a direct sum decomposition.

In this case $\dim(V) = \sum \dim(W_i)$ (get a basis of $V$ by taking the union of bases of $W_1, \dots, W_n$).

:::proposition Case of two subspaces
- $W_1, W_2$ are independent iff $W_1 \cap W_2 = \{0\}$. (Because $w_1 + w_2 = 0$ iff $w_1 = -w_2 \in W_1 \cap W_2$.)
- $\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)$. (We’ll see this soon.)
- $V = W_1 \oplus W_2$ iff $W_1 \cap W_2 = 0$ and $\dim W_1 + \dim W_2 = \dim V$.
:::

Also note: given a subspace $W \subset V$, there exists another subspace $W'$ such that $W \oplus W' = V$. ($W'$ is definitely not unique!) To find $W'$: take a basis $\{w_1, \dots, w_r\}$ of $W$, complete it to a basis $\{w_1, \dots, w_r, w'_1, \dots, w'_s\}$ of $V$, and let $W' = \operatorname{span}(w'_1, \dots, w'_s)$.

**Rank and the dimension formula**

Given finite-dimensional vector spaces $V$ and $W$ and a linear map $\varphi : V \to W$,

- $\ker(\varphi) = \{v \in V \mid \varphi(v) = 0\} \subset V$ and
- $\operatorname{Im}(\varphi) = \{w \in W \mid \exists v \in V \text{ such that } \varphi(v) = w\} \subset W$

are subspaces of $V$ and $W$.

:::definition Rank
$\dim(\operatorname{Im}\varphi)$ is called the **rank** of $\varphi$.
:::

:::theorem
$$\dim \ker(\varphi) + \dim \operatorname{Im}(\varphi) = \dim V.$$
:::

Proof: next time.
:::
