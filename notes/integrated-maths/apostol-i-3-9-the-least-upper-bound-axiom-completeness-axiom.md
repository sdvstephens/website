---
course: integrated-maths
chapter: 13
section: I 3.9
title: The Least-Upper-Bound Axiom (Completeness Axiom)
source-pages: apostol-13
---

:::definition Axiom 10
Every nonempty set $S$ of real numbers which is bounded above has a supremum; that is, there is a real number $B$ such that $B = \sup S$.
:::

Moreover, $\sup S$ does not need to be in $S$: $\sup S \in S$ only when $\sup S = \max S$.

Similar to $\sup S$ we have $\inf S$ (the **infimum**), or the **greatest lower bound**, and $\min S$ is similar to $\max S$: $\min S$ is the minimum element in $S$.

:::example
$$
S = \left\{ \left(1 + \tfrac{1}{n}\right)^n \;\middle|\; n = 1, 2, 3, \dots \right\} = \left\{ 2, \tfrac{9}{4}, \tfrac{64}{27}, \tfrac{625}{256}, \tfrac{7776}{3125}, \dots \right\},
$$
since, for example,
$$
\left(1 + \tfrac{1}{4}\right)^4 = \left(\tfrac{5}{4}\right)^4 = \tfrac{625}{256}, \qquad \left(1 + \tfrac{1}{5}\right)^5 = \left(\tfrac{6}{5}\right)^5 = \tfrac{7776}{3125}.
$$
Then $\sup S = 2.718\ldots = e$ and $\inf S = 2$.
:::
