---
course: math-55a
chapter: 5
section: N26
title: Tensor Products
source-pages: 1-2
---

Given two vector spaces $V, W$, we form $V \otimes W$.

> $\otimes$ linearizes diffeomorphisms of 4D manifolds for space-time: linearization = yay?

A bilinear map $\alpha : V \times W \to U$ factors as
$$V \times W \xrightarrow{\ \beta\ } V \otimes W \xrightarrow{\ \tilde\alpha\ } U, \qquad \alpha = \tilde\alpha \circ \beta,$$
with $\tilde\alpha$ linear. (Preserve structure because ??)

![Commutative triangle: beta from V x W to V tensor W, alpha-tilde from V tensor W to U, and alpha from V x W to U](/notes/math-55a/figures/n2-tensor-universal-property.svg)

:::theorem
$$(V \otimes W)^* = V^* \otimes W^*$$
for finite-dimensional $V, W$.
:::

:::proof Proof outline
DO LATER.
:::

:::theorem
$$(V \oplus W) \otimes U = (V \otimes U) \oplus (W \otimes U).$$
:::

:::proof
Take $\alpha : V \times W \to U$ and $\tilde\alpha : V \otimes W \to U$ … NO.
:::
