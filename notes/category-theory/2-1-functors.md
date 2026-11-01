---
course: category-theory
chapter: 2
section: 2.1
title: Functors
status: incomplete
source-pages: 12
---

:::definition Functor
Let $\mcA$ and $\mcB$ be categories. A **functor** $F\colon\mcA\to\mcB$ consists of a function $\mathrm{ob}(\mcA)\to\mathrm{ob}(\mcB)$, written $A\mapsto F(A)$, and for each $A,A'\in\mcA$ a function $\mcA(A,A')\to\mcB\bigl(F(A),F(A')\bigr)$, written $f\mapsto F(f)$, which satisfy the following axioms:

1. $F(f'\circ f)=F(f')\circ F(f)$ whenever $A\xrightarrow{f}A'\xrightarrow{f'}A''$ in $\mcA$;
2. $F(1_A)=1_{F(A)}$ whenever $A\in\mcA$.
:::

:::remark
The definition of a functor is such that, from each string $A_0\xrightarrow{f_1}\cdots\xrightarrow{f_n}A_n$ of maps in $\mcA$ (with $n\ge 0$), it is possible to construct exactly one map $F(A_0)\to F(A_n)$ in $\mcB$. For example, given maps
$$A_0\xrightarrow{\ f_1\ }A_1\xrightarrow{\ f_2\ }A_2\xrightarrow{\ f_3\ }A_3\xrightarrow{\ f_4\ }A_4$$
in $\mcA$, we can construct maps
$$F(A_0)\ \underset{F(1_{A_4})F(f_4)F(f_3f_2)F(f_1)}{\overset{F(f_4f_3)F(f_2f_1)}{\rightrightarrows}}\ F(A_4)$$
in $\mcB$; by the axioms these are implied to be equal.
:::
