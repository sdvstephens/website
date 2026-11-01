---
course: math-55a
chapter: 4
section: N23
title: Functors
date: 2025-09-17
source-pages: math55-11
---

(Notebook topic: Misc.)

## Functors

Consider the objects of categories $\mathcal{C}$ and $\mathcal{D}$.

:::definition Functor
A **functor** consists of a map
$$
F : \operatorname{Ob}(\mathcal{C}) \to \operatorname{Ob}(\mathcal{D}),
$$
which takes every $A \in \operatorname{Ob}(\mathcal{C})$ and assigns an object $B \in \operatorname{Ob}(\mathcal{D})$ (think sets $\to$ groups), and, for every $P, Q \in \operatorname{Ob}(\mathcal{C})$, a map on morphisms
$$
\Mor_{\mathcal{C}}(P, Q) \to \Mor_{\mathcal{D}}(F(P), F(Q)),
$$
i.e. every $\phi : P \to Q$ is mapped to an $F(\phi) : F(P) \to F(Q)$ (think like: set unions $\to$ cartesian group products), which all must respect
$$
F(\alpha \circ \beta) = F(\alpha) \circ F(\beta) \qquad\text{and}\qquad F(\id_A) = \id_{F(A)}.
$$
:::

:::definition Contravariant functor
A **contravariant functor** $F : \mathcal{C} \to \mathcal{D}$ is one such that each $\phi : P \to Q$ (for all $P, Q \in \mathcal{C}$) maps to
$$
F(\phi) : F(Q) \to F(P),
$$
which reverses the morphism. Therefore, for all $\alpha, \beta$, $F(\alpha \circ \beta) = F(\beta) \circ F(\alpha)$.
:::

:::example Duality
For $V$ a vector space over $K$, $V^* = \Hom(V, K)$, whose elements are linear maps $V \to K$. This gives
$$
F : \mathrm{Vect}_K \to \mathrm{Vect}_K
$$
such that a linear map $A \to B$ maps to $F(\text{linear map}) : F(B) \to F(A)$, with $F(\alpha \circ \beta) = F(\beta) \circ F(\alpha)$.
:::

“Decorated sets” $\equiv$ rings, groups, vector spaces, topological spaces, etc.

## Forgetful functors

Given some decorated sets $\mathcal{C}$, we can do
$$
F : \mathcal{C} \to \mathcal{C}\text{'s underlying set}
$$
(thereby losing structure and operations).

:::example
$F : (\ZZ/n, +) \to \ZZ/n$, or $F : S_n \to \{ e, \sigma, \sigma^2, \dots, \sigma\mu, \sigma^2\mu, \dots \}$.
:::
