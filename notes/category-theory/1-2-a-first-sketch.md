---
course: category-theory
chapter: 1
section: 1.2
title: A First Sketch: Categories, Functors and the Hom-Functor
source-pages: 2
---

:::theorem
$$\mathrm{Nat}\bigl(\Hom(C,-),F\bigr)\cong F(C)$$
if $F$ is a functor from a category $\mcC$ to $\mathbf{Set}$ (and $C$ is an object of $\mcC$).
:::

A morphism generally implies structure.

:::remark
Wait, why is the morphism for topological spaces homeomorphism? Is it because the continuity morphism is more basic?
:::

**Category** (object $\to$ object):

![Four objects with identity loops, arrows f, g, h and composites g∘f and h∘g](/notes/category-theory/figures/c1-composition.svg)

A category (objects, and morphisms between them) can itself be treated as an object with morphisms: a **functor** is a morphism from one category to another,
$$\text{Category}\xrightarrow{\ \text{functor (morphism)}\ }\text{Category}.$$

A functor $F$ from $\mcC$ to $\mcD$ sends each arrow of $\mcC$ to an arrow of $\mcD$:
$$\mcC\ni\bigl(x\xrightarrow{\ f\ }y\bigr)\quad\overset{F}{\longmapsto}\quad\bigl(F(x)\xrightarrow{\ F(f)\ }F(y)\bigr)\in\mcD,$$
that is, $x\mapsto F(x)$ and $(f\colon x\to y)\mapsto F(f)$.

A **natural transformation** goes from one functor to another:

![Two functors F and G from C to D with a natural transformation α from F to G](/notes/category-theory/figures/c1-natural-transformation.svg)

$\mathbf{Set}$ = the category of sets.

**Hom-functor:**

![A category C with three arrows from a to b, sent by the hom-functor to the set C(a,b) in Set](/notes/category-theory/figures/c1-hom-functor.svg)
