---
course: integrated-maths
chapter: 11
section: 11.2
title: Arithmetic Series
---

Next we add up the terms of an arithmetic sequence. The scratch work below is where the formula for the sum comes from.

:::remark Scratch work for the next problem
Summing $5 + \cdots + 107$ (common difference $6$). First tries: pairing, $\frac{107-5}{2} = \frac{102}{2} = 51$ and $(107 + 5)(8) + 51 = 896 + 51 = 947$; then $(2a + dn)\frac{n}{2}$ with $n = 17$:
$$\frac{\big(2(5) + 6(17)\big)(17)}{2} = \frac{(10 + 102)(17)}{2} = 112 \cdot \frac{17}{2} = 56 \cdot 17 = 952.$$
Fixing the formula: the $n$th term is $d(n-1) + a$, so the sum is
$$\frac{n\big(a + (d(n-1) + a)\big)}{2} = \frac{n\big(2a + d(n-1)\big)}{2},$$
which gives
$$n\left(\frac{2a + (n-1)d}{2}\right) \implies \frac{2(5) + (17)(6)}{2}(18) = (56)(18) = 1008.$$
Pairing again, $a = 5 + \cdots + 107$ and $2a = 112 + \cdots + 112$; $a = 952 - 51 = 901$?

:::

:::problem
$5 + \cdots + 107$.

:::solution
$d = 6$, $a = 5$, $n = 18$, so
$$\frac{n(a_0 + a_n)}{2} = 18\left(\frac{112}{2}\right) = 1008.$$
By the formula $\frac{n\big(2a + (n-1)d\big)}{2}$:
$$18\left(\frac{2(5) + (17)(6)}{2}\right) = 18\left(\frac{112}{2}\right) = 1008. \checkmark$$
:::
:::

:::problem
The page numbers $1 + 2 + \cdots + n$ of a book are added up, with one page number $m$ counted twice, and the total is $1986$. Which page was counted twice?

:::solution
$$1986 = \frac{n(n+1)}{2} + m \implies 1986 - m = \frac{n(n+1)}{2}.$$
$$\frac{63(64)}{2} = 2016, \qquad \frac{62(63)}{2} = 1953.$$
$$1986 - 1953 = m = 33,$$
therefore page $33$.

This is the only one, since $1 \leq m \leq n$, and $n = 61 \implies 1 \leq 95 \leq 61$, which cannot be, and $n = 63 \implies 1 \leq -30 \leq 63$, which cannot be either.
:::
:::

:::problem
Find all $k \in \ZZ$ such that $46 + 44 + 42 + \cdots + k = 510$.

:::solution
$k = 510 - (46 + \cdots)$. With $n$ terms, $2a + (n-1)d = 92 - 2n + 2$, so the sum is
$$\frac{n(94 - 2n)}{2} = 47n - n^2 = 510,$$
$$n^2 - 47n + 510 = 0.$$
Since $17 \cdot 3 \cdot 5 \cdot 2 = 510$, try $-17$ and $-30$: $(n - 17)(n - 30) = 0$.

$n = 17$: the 17th term is $(-2)(16) + 46 = -32 + 46 = 14$.

$n = 30$: the 30th term is $(-2)(29) + 46 = -12$.

$$k \in \{-12, 14\}$$
:::
:::

:::problem
Let $a_1, a_2, a_3, \dots$ be in AP with $d = 1$, and let
$$S_1 = a_1 + \cdots + a_{98}, \qquad S_2 = a_2 + a_4 + \cdots + a_{98}.$$
If $S_1 = 137$, what is $S_2$?

:::solution
$$S_1 - S_2 = \frac{98(2a_1 + 97)}{2} - \frac{49\big(2a_2 + (48)(2)\big)}{2} = \frac{98(2a_1 + 97)}{2} - \frac{49(2a_2 + 96)}{2}.$$
The numerator is $196a_1 + 9506 - 98a_2 - 4704 = 196a_1 - 98a_2 + 4802$, all over $2$, giving $98a_1 - 49a_2 + 2401$. So:
$$S_1 - S_2 = 98a_1 - 49a_2 + 2401.$$
If $S_1 = 137$, then
$$\frac{98(2a_1 + 97)}{2} = 137 \implies 98a_1 + 4753 = 137 \implies 98a_1 = -4616 \implies a_1 = -\frac{2308}{49}.$$
$$\begin{aligned}
137 - S_2 &= -4616 - 49a_2 + 2401\\
137 - S_2 &= -2215 - 49a_2,
\end{aligned}$$
$$a_2 = -\frac{2308}{49} + \frac{49}{49} = -\frac{2259}{49},$$
$$\implies 137 - S_2 = -2215 + 2259 = 44 \implies 137 - 44 = S_2 \implies S_2 = 93.$$

:::
:::

:::example
The sum of the first $r$ terms of an AP is $x$ and the sum of the first $s$ terms is $y$, where $\frac{x}{y} = \frac{r^2}{s^2}$ for all $r, s$. Find the ratio of the 8th term to the 23rd term.

:::solution
WLOG let $r > s$ (for simplicity). The sums:

| terms | sum |
|---|---|
| $1$ | $a$ |
| $2$ | $2a + d$ |
| $3$ | $3a + 3d$ |
| $4$ | $4a + 6d$ |

$$\frac{3a + 3d}{2a + d} = \frac94 \implies 12a + 12d = 18a + 9d \implies 3d = 6a \implies d = 2a.$$
$$\frac{2a + d}{a} = 4 \implies 2a + d = 4a.$$
The sum of the first $n$ terms:
$$\frac{n\big(2a + d(n-1)\big)}{2} = \frac{n(2a + dn - d)}{2} = \frac{2na + dn^2 - dn}{2} = \frac{2na + dn(n-1)}{2},$$
so for $n = 8$: $\frac{16a + 8d(7)}{2} = \frac{16a + 56d}{2} \to 8a + 28d$, and
$$\frac{8a + 28d}{23a + 253d} = \frac{64a}{529a} = \frac{64}{529}.$$
In general,
$$\frac{r^2}{s^2} = \frac{r\big(2a + d(r-1)\big)}{s\big(2a + d(s-1)\big)} \implies \frac{r}{s} = \frac{2a + d(r-1)}{2a + d(s-1)} = \frac{2a + dr - d}{2a + ds - d},$$
$$\begin{aligned}
2ar + drs - dr &= 2as + drs - ds\\
2ar + ds &= 2as + dr\\
2ar - 2as &= dr - ds\\
2a(r - s) - d(r - s) &= 0\\
(2a - d)(r - s) &= 0,
\end{aligned}$$
so $2a - d = 0 \to 2a = d$, or $r - s = 0 \to r = s$.

Then
$$a + 2a(8 - 1) = 15a, \qquad a + 2a(23 - 1) = 45a, \qquad \frac{15a}{45a} = \boxed{\frac13}.$$
:::
:::

## Exercises

:::exercise
$639 + 631 + 623 + \cdots + (-97) = \ ?$

:::solution
$$-8(n-1) + 639 = -97 \implies -8n + 647 = -97 \implies -8n = -744 \implies n = 93.$$
So there are $93$ terms, and the sum is
$$\frac{93\big(2(639) - 8(92)\big)}{2} = 25203.$$

:::
:::

:::exercise
:::solution
$$\frac{13\big(2(5) + (2)(12)\big)}{2} = 13(34)\left(\frac12\right) = 13(17) = 221.$$
:::
:::

:::exercise
Let $n \in \ZZ_{>0}$. Find the sum of the $n$ smallest odd positive integers, and calculate it for $> 100$.

:::solution
Say $n = 10$:
$$\frac{10\big(2(1) + (9)(2)\big)}{2} \to \frac{n\big(2 + 2(n-1)\big)}{2}.$$

For $> 100$:
$$\frac{n\big(202 + 2(n-1)\big)}{2}.$$
:::
:::

:::exercise
Let $a$ and $b$ be positive integers with $a \leq b$. Find the sum of the positive integers from $a$ to $b$, inclusive, in terms of $a$ and $b$.

:::solution
If only $a, b$: since $d(n-1) + a$ is the $n$th term, $d + a$ is the 2nd term, so $d = b - a$ and
$$\frac{2\big(2(a) + (b - a)(1)\big)}{2} = a + b.$$
In general,
$$\frac{n\big(2a + (b - a)(n-1)\big)}{2} = a + b:$$
$$2an + bn - an \to n(2a + b - a) = n(a + b), \qquad \frac{2(a + b)}{a + b} = n.$$

:::
:::

:::remark Correction
This only recovers the two-term case. For the integers from $a$ to $b$ the common difference is $1$, not $b - a$, and there are $b - a + 1$ terms, so the sum is
$$\frac{(b - a + 1)(a + b)}{2}.$$
:::

:::exercise
For all $n$, the sum $\sum^n$ of the first $n$ terms of a certain AP is $2n + 3n^2$. Find a formula for the $n$th term.

:::solution
$$\begin{aligned}
n = 1:&\quad a = 2n + 3n^2 \to a = 2 + 3 = 5,\\
n = 2:&\quad 2a + d = 16 \to d = 6.
\end{aligned}$$
So the $n$th term is given by $6n - 1$.

For fun, the other way:
$$n(2 + 3n) = \frac{n(4 + 6n)}{2},$$
so
$$2a + d(n-1) = 4 + 6n, \qquad 2a + dn - d = 6n + 4,$$
and $d = 6$, $2(a) - 6 = 4$, $a = \frac{10}{2} \to 5$.
:::
:::
