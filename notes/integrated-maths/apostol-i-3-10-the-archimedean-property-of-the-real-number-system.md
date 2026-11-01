---
course: integrated-maths
chapter: 13
section: I 3.10
title: The Archimedean Property of the Real-Number System
source-pages: apostol-13, apostol-14
---

We must encounter consequences of the completeness axiom (Axiom 10).

:::theorem Theorem I.28
The set $P$ of positive integers $\{1, 2, 3, \dots\}$ is unbounded above.
:::

:::proof
Assume $P$ is bounded above. Since $P \neq \varnothing$, by Axiom 10 $P$ must have a least upper bound ($\sup P$), say $m$. The number $m - 1$ cannot be an upper bound of $P$, as it is less than $m$. So there must be at least one integer $n$ in $P$ such that $n > m - 1$. Thus $n + 1 > m$. But since $n + 1$ is in $P$ and $n + 1 > m$, we arrive at a contradiction.
:::

:::corollary Theorem I.29 / Corollary I.1
For every real $x$, there must be a positive integer $n$ such that $n > x$.
:::

:::proof
If there were no $n > x$, then $P$ would be bounded by $x$. However, by Theorem I.28 we know that $P$ is unbounded, so this cannot be.
:::

:::corollary Theorem I.30 / Corollary I.2
If $x > 0$ and if $y$ is an arbitrary real number, there exists a positive integer $n$ such that $nx > y$.
:::

:::proof
$nx > y \Leftrightarrow n > y/x$. Substitute $y/x$ for $x$ in Theorem I.29.
:::

Theorem I.30 is commonly known as the **Archimedean property** of the real number system. This, for the layman, means that any line, no matter how long, can be covered by a finite number of smaller lines. In other words, a small ruler, used enough times, can cover any given distance, no matter how large. However, there are “non-Archimedean geometries” in which this axiom is rejected. From this property we can formulate a theorem which will be useful in integral calculus.

:::theorem Theorem I.31
If three real numbers $a$, $x$ and $y$ satisfy the inequalities
$$
a \le x \le a + \frac{y}{n}
$$
for every integer $n \ge 1$, then $x = a$.
:::

(I am confused about this... is $y/n$ an infinitesimal???)

:::proof
If $x > a$, Theorem I.30 tells us that there is a positive integer $n$ satisfying $n(x - a) > y$. This contradicts Theorem I.14. Hence we cannot have $x > a$, so $x = a$.

(↑ What?? How??)
:::

:::remark Correction
The contradiction is with the hypothesis $a \le x \le a + y/n$ (displayed as (I.14) in Apostol), and Theorem I.14 is a different result. Indeed $n(x - a) > y$ gives $x > a + y/n$, which contradicts $x \le a + y/n$. Hence $x > a$ is impossible, and $x = a$.
:::
