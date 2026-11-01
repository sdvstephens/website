---
course: integrated-maths
chapter: 13
section: I 3.8
title: Upper Bound of a Set, Maximum Element, Least Upper Bound (Supremum)
source-pages: apostol-12, apostol-13
---

Suppose $x \le B$ for every $x \in S$. Then $B$ is an **upper bound** of $S$, and $S$ is **bounded above**. This also means that for every $y \ge B$, $y$ is also an upper bound of $S$. If moreover $B \in S$, then $B$ is the **maximum element** or largest member of $S$. There can only be at most ONE such $B \in S$. We write this as $\max S = B$. Thus: $B = \max S$ if $B \in S$ and $x \le B$ for all $x \in S$. A set with no upper bound is called **unbounded above** (example: the set of all real numbers, $\RR$, has no $\max \RR$).

:::example
1. $S_1 = \RR^+$: $\max S_1$ DNE (does not exist), and $\max S_1 \notin S_1$.
2. $S_2 = \{x \mid 0 \le x \le 1\}$: $\max S_2 = 1$, and $\max S_2 \in S_2$.
3. $T = \{x \mid 0 \le x < 1\}$: $\sup T = 1$, but $\sup T \notin T$. (Does $\lim_{x \to 1} x \in T$?)
:::

$\sup T \neq \max T$: $\sup T$ is $1$, while $\max T$ would be $\lim_{x \to 1} x$.

:::remark Correction
The set $T$ has no maximum element, so $\max T$ does not exist. The number $\lim_{x \to 1} x = 1$ is $\sup T$, and it is not in $T$. The correct statement is that $T$ has a supremum but no maximum.
:::

![Two number lines. Left: the closed interval S from 0 to 1 with a filled dot at 1 marked max S, and the hatched region to the right of 1 marked upper bounds. Right: the interval T from 0 to 1 with an open dot at 1 marked least upper bound or sup T, and the hatched upper bounds to its right](/notes/integrated-maths/figures/q1-ap-sup-max.svg)

The least upper bound is known as the **supremum**.

:::theorem Theorem I.26
Two different numbers cannot both be least upper bounds for the same set.
:::

:::proof
Say we have two least upper bounds $B$ and $C$. Since $B$ is a least upper bound, $B \le C$. Then since $C$ too is a least upper bound, we have $B \ge C$. Thus $B \not> C$ and $B \not< C$, so $B = C$.
:::

We can now write, for a set $S$, $B = \sup S$.
