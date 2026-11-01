---
course: integrated-maths
chapter: 13
section: I 3.4
title: The Order Axioms
source-pages: apostol-10
---

These $3$ axioms allow us to establish “ordering.” This allows us to tell if one real number ($\RR$) is larger or smaller than another. We want a new axiom of “positiveness” and then define “less than” or “more than” in axiomatic-positiveness terms. Let us say that there is a subset $\RR^+$ of $\RR$ ($\RR^+ \subset \RR$) called the set of **positive numbers**.

:::definition Axiom 7
If $x$ and $y$ are in $\RR^+$, so are $x + y$ and $xy$.
:::

:::definition Axiom 8
For every real $x \neq 0$, either $x \in \RR^+$ or $-x \in \RR^+$, but not both.
:::

:::definition Axiom 9
$0 \notin \RR^+$.
:::

:::definition
**Less than**, **greater than**, **less than or equal to**, **greater than or equal to**, respectively:

| | |
|---|---|
| $x < y$ | $y - x$ is positive |
| $y > x$ | $x < y$ |
| $x \le y$ | either $x < y$ or $x = y$ |
| $y \ge x$ | $x \le y$ |
:::

$x > 0$ if $x$ is positive, and $x < 0$ if $x$ is negative. If $x \ge 0$, $x$ is **nonnegative**, and if $x \le 0$, $x$ is **nonpositive**. “$x < y$ and $y < z$” can be rewritten as $x < y < z$. These axioms and definitions result in more theorems:

:::theorem Theorem I.16 (Trichotomy law)
For arbitrary real numbers $a$ and $b$, exactly one of the three relations $a < b$, $b < a$, $a = b$ holds.
:::

:::theorem Theorem I.17 (Transitive law)
If $a < b$ and $b < c$, then $a < c$.
:::

:::theorem Theorem I.18
If $a < b$, then $a + c < b + c$.
:::

:::theorem Theorem I.19
If $a < b$ and $c > 0$, then $ac < bc$.
:::

:::theorem Theorem I.20
If $a \neq 0$, then $a^2 > 0$.
:::

:::theorem Theorem I.21
$1 > 0$.
:::

:::theorem Theorem I.22
If $a < b$ and $c < 0$, then $ac > bc$.
:::

:::theorem Theorem I.23
If $a < b$, then $-a > -b$. In particular, if $a < 0$, then $-a > 0$.
:::

:::theorem Theorem I.24
If $ab > 0$, then both $a$ and $b$ are positive or both are negative.
:::

:::theorem Theorem I.25
If $a < c$ and $b < d$, then $a + b < c + d$.
:::

Proofs of Theorems I.16–I.25: Apostol, Vol. I, p. 21.

(Scratch for Theorem I.25: $a + (b < d) < c + (d > b)$.)
