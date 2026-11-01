---
course: math-55a
chapter: 2
section: N19
title: Span and Linear Independence
status: incomplete
source-pages: 6-7
---

## Linear combinations

A vector is a **linear combination** of $(v_1, \dots, v_m)$ if it can be written as
$$a_1 v_1 + \dots + a_m v_m$$
for some $a_i \in \FF$. But if there are no $a_i$ (no solutions), then it is not a linear combination.

:::example
$(17, -4, 2)$ is a linear combination of $(2, 1, -3)$ and $(1, -2, 4)$ in $\RR^3$ because $v_3 = a_1 v_1 + a_2 v_2$:
$$(17, -4, 2) = a_1 (2, 1, -3) + a_2 (1, -2, 4).$$
:::

:::exercise Axler 2A.12
Suppose $v_1, \dots, v_m$ is linearly independent in $V$ and $w \in V$. Prove that if $v_1 + w, \dots, v_m + w$ is linearly dependent, then $w \in \operatorname{span}(v_1, \dots, v_m)$.

:::solution
- Do know: linear independence [of $v_1, \dots, v_m$] in $V$.
- Don’t know: $\operatorname{span}(v_1, \dots, v_m)$.
- **WTS:** $v_1 + w, \dots, v_m + w$ is linearly dependent $\Rightarrow w \in \operatorname{span}(v_1, \dots, v_m)$.
:::
:::
