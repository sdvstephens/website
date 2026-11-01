---
course: integrated-maths
chapter: 13
section: I 3.11
title: Fundamental Properties of the Supremum and Infimum
source-pages: apostol-14, apostol-15
---

:::theorem Theorem I.32
Let $h$ be a given positive number and let $S$ be a set of real numbers.

(a) If $S$ has a supremum, then for some $x \in S$ we have $x > \sup S - h$.

(b) If $S$ has an infimum, then for some $x \in S$ we have $x < \inf S + h$.
:::

(This establishes that the $\inf S$ and $\sup S$ can be changed by some sufficiently large $h \in S$.)

:::remark Correction
The theorem says that for every $h > 0$ there is a point of $S$ within distance $h$ of $\sup S$ (when the supremum exists), and likewise a point within $h$ of $\inf S$. The number $h$ is an arbitrary positive real number; it does not have to be large or to belong to $S$, and small $h$ is the interesting case.
:::

:::proof
If we had $x \le \sup S - h$ for all $x \in S$, then $\sup S - h$ would be an upper bound for $S$ smaller than its least upper bound. Therefore we must have $x > \sup S - h$ for at least one $x \in S$. This proves (a). The proof for (b) is similar.
:::

:::theorem Theorem I.33 (Additive property)
Given nonempty subsets $A$ and $B$ of $\RR$, let $C$ denote the set
$$
C = \{a + b \mid a \in A,\ b \in B\}.
$$
(a) If each of $A$ and $B$ has a supremum, then $C$ has a supremum and $\sup C = \sup A + \sup B$.

(b) If each of $A$ and $B$ has an infimum, then $C$ has an infimum and $\inf C = \inf A + \inf B$.
:::

:::proof
Assume each of $A$ and $B$ has a supremum. If $c \in C$, then $c = a + b$, where $a \in A$ and $b \in B$. Therefore $c \le \sup A + \sup B$; so $\sup A + \sup B$ is an upper bound for $C$. This shows that $C$ has a supremum and that
$$
\sup C \le \sup A + \sup B.
$$
Now let $n$ be any positive integer. By Theorem I.32 (with $h = 1/n$) there is an $a$ in $A$ and a $b$ in $B$ such that
$$
a > \sup A - \frac{1}{n}, \qquad b > \sup B - \frac{1}{n}.
$$
Adding these inequalities, we obtain
$$
a + b > \sup A + \sup B - \frac{2}{n}, \qquad \text{or} \qquad \sup A + \sup B < a + b + \frac{2}{n} \le \sup C + \frac{2}{n},
$$
since $a + b \le \sup C$. Therefore we have shown that
$$
\sup C \le \sup A + \sup B < \sup C + \frac{2}{n}
$$
for every integer $n \ge 1$. By Theorem I.31, we must have $\sup C = \sup A + \sup B$. This proves (a), and the proof of (b) is similar.
:::

:::theorem Theorem I.34
Given two nonempty subsets $S$ and $T$ of $\RR$ such that $s \le t$ for every $s$ in $S$ and every $t$ in $T$. Then $S$ has a supremum and $T$ has an infimum, and they satisfy $\sup S \le \inf T$.
:::

:::proof
Each $t$ in $T$ is an upper bound for $S$. Therefore $S$ has a supremum which satisfies the inequality $\sup S \le t$ for all $t$ in $T$. Hence $\sup S$ is a lower bound for $T$, so $T$ has an infimum which cannot be less than $\sup S$. In other words, we have $\sup S \le \inf T$, as asserted.
:::
