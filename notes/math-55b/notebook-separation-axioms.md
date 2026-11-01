---
course: math-55b
chapter: 3
section: N16
title: Separation Axioms
source-pages: 34
---

:::definition Separation axioms
- $X$ is **Hausdorff** ($T_2$ property) if for all points $x \neq y$ there are open sets $U \ni x$, $V \ni y$ with $U \cap V = \emptyset$.
- $X$ is **$T_1$** if $\{x\}$ is closed for every $x$; equivalently, for all $x \neq y$ there is an open $V \ni y$ with $V \cap \{x\} = \emptyset$.
- $X$ is **regular** ($T_3$) if it is $T_1$ and for all $x \in X$ and all closed $B \subset X$ with $x \notin B$, there are open $U \ni x$, $V \supset B$ with $U \cap V = \emptyset$.
- $X$ is **normal** ($T_4$) if it is $T_1$ and for all closed $A, B \subset X$ with $A \cap B = \emptyset$, there are open $U \supset A$, $V \supset B$ with $U \cap V = \emptyset$.
:::

![The four separation properties T1, T2, T3, T4 pictured with points, closed sets and disjoint open sets](/notes/math-55b/figures/b2-separation-axioms.svg)

$$\text{metrizable} \Rightarrow \text{normal } (T_4) \Rightarrow \text{regular } (T_3) \Rightarrow T_1$$

:::example
$\RR_\ell$ (the lower limit topology) is normal but not metrizable. $\RR_\ell \times \RR_\ell$ is regular but not normal. (Munkres §31.)
:::
