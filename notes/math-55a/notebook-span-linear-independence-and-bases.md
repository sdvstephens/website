---
course: math-55a
chapter: 2
section: N20
title: Span, Linear Independence and Bases
source-pages: 1
---

:::definition Span
Given a vector space $V$ over $k$ and $v_1, \dots, v_n \in V$, the **span** of $v_1, \dots, v_n$ is the smallest subspace of $V$ which contains $v_1, \dots, v_n$. We write (via the Aussonderungsaxiom) that $v_1, \dots, v_n$ **span** $V$ if
$$\operatorname{span}(v_1, \dots, v_n) = V,$$
where
$$\operatorname{span}(v_1, \dots, v_n) \coloneqq \{a_1 v_1 + \dots + a_n v_n \mid a_i \in k\}.$$
:::

:::note Notation
For the rest of the notes we let $v_1, \dots, v_n \equiv v_{\ldots}$, and $(v_1 \; \cdots \; v_n) \equiv v_{\cdots}$ (the same vectors written as a row).
:::

:::definition Linear independence
If
$$a_1 v_1 + \dots + a_n v_n = 0 \implies a_1 = a_2 = \dots = a_n = 0,$$
then $v_{\ldots} \in V$ is **linearly independent**.
:::

Equivalently, in terms of the linear map $\phi : k^n \to V$, $(a_1, \dots, a_n) \mapsto a_1 v_1 + \dots + a_n v_n$:

| | |
|---|---|
| $v_{\ldots}$ linearly independent | $\iff \phi$ injective ($\hookrightarrow$) |
| $v_{\ldots}$ span $V$ | $\iff \phi$ surjective ($\twoheadrightarrow$) |

:::definition Basis
$v_{\ldots}$ are a **basis** of $V$ if $\phi$ is bijective. So for any element $v \in V$ there exist unique $a_i \in k$ such that $v = \sum a_i v_i$.
:::

:::theorem
If $V$ has a basis with $n$ elements, then every basis of $V$ has $n$ elements. So $\dim(V) = n$.
:::

## Arbitrary sets of vectors

For a subset $S \subseteq V$, $\operatorname{span}(S)$ is the smallest vector subspace of $V$ containing $S$:
$$\operatorname{span}(S) = \{a_1 v_1 + \dots + a_k v_k \mid k \in \NN,\ a_i \in k,\ v_i \in S\}.$$

The elements of $S$ are **linearly independent** if there are no nontrivial finite linear relations:
$$a_1 v_1 + \dots + a_k v_k = 0 \quad (a_i \in k,\ v_i \in S) \implies a_1 = \dots = a_k = 0.$$

If the elements of $S$ are linearly independent and $\operatorname{span}(S) = V$, then $S$ is a basis of $V$.

:::example
$\{1, x, x^2, x^3, \dots\}$ is a basis of $k[x]$.
:::

:::question
Does $k[[x]]$ have a basis?
:::

## Change of basis

WE CAN CHANGE BASIS!! To go from $v_{\cdots}$ to $v'_{\cdots}$, write
$$v'_j = \sum_{i=1}^n P_{ij} v_i.$$
This gives an $n \times n$ matrix $P$, with $j$th column giving the components of $v'_j$ in the basis $v_{\cdots}$. So
$$v'_{\cdots} = v_{\cdots} P.$$
(BUT WE WANT TO AVOID THIS.)
