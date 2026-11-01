---
course: math-55b
chapter: 1
section: N4
title: What Is ℝ? The Least Upper Bound Property
source-pages: 15-16
---

## What is $\RR$?

Grown-up answer: it is an **ordered** field (with $<,>,=,\ge,\le$) with the **least upper bound property**.

$\CC$ is not an ordered field, because in an ordered field $a^2>0$ (for $a\neq0$), but this is not true for complex numbers.

:::definition Least upper bound property
Every nonempty subset $E\subset\RR$ that admits an upper bound ($\exists M$ such that $\forall x\in E$, $x\le M$) has a **least upper bound** $\sup(E)\in\RR$:

1. it’s an upper bound: for all $x\in E$, $x\le\sup(E)$;
2. it’s the smallest one: for all $y$, $y<\sup(E)\implies y$ is not an upper bound, i.e. there is $x\in E$ such that $x>y$.
:::

$\sup\big((0,\sqrt2)\cap\QQ\big)=\sqrt2\in\RR$, but $\sqrt2\notin\QQ$. Therefore $\QQ$ does not have the least upper bound property, and so not every Cauchy sequence converges in $\QQ$ (they approach $\sqrt2$, for example, but do not arrive in $\QQ$).

The L.U.B. property is equivalent to the **completeness** of $\RR$ with the usual distance: every Cauchy sequence converges ($\forall\varepsilon$, $\exists N$ such that $\forall m,n\ge N$, $|p_n-p_m|<\varepsilon$).

Any ordered field with the least upper bound property is isomorphic to $\RR$, i.e. there is only one field with the least upper bound property up to isomorphism.

One may construct $\RR$ from $\QQ$ by adding the missing elements: either via **Dedekind cuts**, as sups of certain subsets of $\QQ$, or as limits of Cauchy sequences in $\QQ$ (this is the completion of the metric space $\QQ$).

## Topological spaces

:::definition Topological space
A **topological space** is a set $X$ with a **topology**, i.e. the data of a collection $\mcT\subset\mcP(X)$, the **open sets** in $X$, such that

- $\emptyset\in\mcT$, $X\in\mcT$;
- arbitrary unions of open sets are open;
- the intersection of finitely many open sets is open.
:::
