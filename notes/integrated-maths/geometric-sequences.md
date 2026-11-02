---
course: integrated-maths
chapter: 11
section: 11.3
title: Geometric Sequences
status: incomplete
---

Now each term is a fixed multiple of the one before it.

:::definition
A **geometric sequence** (or geometric progression) is a sequence where each term, after the first, is $r$ (a ratio) times the previous term.
:::

:::problem
The first term of a geometric sequence is $a$, with common ratio $r$.

:::solution
| term | value |
|---|---|
| $1$ | $a$ |
| $2$ | $ar$ |
| $3$ | $ar^2$ |
| $4$ | $ar^3$ |

Therefore $ar^{n-1}$ is the $n$th term, and
$$a + ar + ar^2 + ar^3 = a(1 + r + r^2 + r^3), \qquad \text{in general } a\sum_{i=0}^{n-1} r^i.$$

:::
:::

:::problem
The first term of a geometric progression is $12$ and the 4th term is $24$. Find the 10th term.

:::solution
| term | value |
|---|---|
| $1$ | $12$ |
| $2$ | $12r$ |
| $3$ | $12r^2$ |
| $4$ | $12r^3$ |

$$12r^3 = 24, \qquad r^3 = 2 \to r = \sqrt[3]{2},$$
$$12\left(2^{1/3}\right)^{n-1} \to (12)(2)^{\frac{n-1}{3}}, \qquad (12)\,2^{9/3} = 12(8) = 96.$$

Given that $ar^{n-1}$ is the $n$th term of a geometric progression: $a = 12$, $ar^3 = 24 \to r^3 = 2 \to r = \sqrt[3]{2}$, so the 10th term is $96 = 2^3(12)$.
:::
:::

:::problem
**Geometric mean.** Given $n$ positive numbers $x_1, \dots, x_n$, their geometric mean is $\left(\prod_{i=1}^{n} x_i\right)^{1/n}$. Show that if $a, r \in \RR_{>0}$, then for the sequence $ar^{n-1}$ the GM of the terms of the sequence is equal to the GM of the first term and the last term.

:::solution
So $\big(a(ar^{n-1})\big)^{1/2}$ is the GM of the first and last term:
$$\left(a^2r^{n-1}\right)^{1/2} = a\,r^{\frac{n-1}{2}}.$$

The terms and the GM of the first $n$ of them:

| $n$ | term | GM of the first $n$ terms |
|---|---|---|
| $1$ | $ar^0$ | $a^{1/1}$ |
| $2$ | $ar^1$ | $\big(a^1(ar)\big)^{1/2} = (a^2r)^{1/2} = ar^{1/2}$ |
| $3$ | $ar^2$ | $\big(a(ar)(ar^2)\big)^{1/3} = (a^3r^3)^{1/3} = ar$ |
| $4$ | $ar^3$ | $\big((a)(ar)(ar^2)(ar^3)\big)\ \ldots$ |
| $\vdots$ | | |
:::
:::
