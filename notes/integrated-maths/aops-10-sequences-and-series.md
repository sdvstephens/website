---
course: integrated-maths
chapter: 9
section: 10
title: Sequences and Series
status: incomplete
source-pages: 143-146, 212-215, 219-222, 223-234
---

## 10.1 Arithmetic Sequences

:::definition
An **arithmetic sequence** (or **arithmetic progression**) is a sequence where the difference between any two consecutive terms is the same, or, more formally: an **AP** is a sequence such that $a_{i+1} - a_i = d$ for all $i$.
:::

Starting from $5$: $5 + (n-1)d$, and with $d = 7$ this is $7n - 7 + 5 = 7n - 2$. In general, $dn + (a - d)$ is the $n$th term finder. So $7(717) - 2 = 5017$.

:::problem{10.3}
If $a, b, c$ are in AP, then for any $k$, $ak, bk, ck$ is also in AP.

:::solution
Say $a, b, c$ are in AP $\Rightarrow c - b = b - a$. Now see $ck - bk = k(c - b)$, but $c - b = b - a$, so $k(c - b) = k(b - a)$. $\therefore ak, bk, ck$ are in AP.
:::
:::

:::problem{10.4}
An arithmetic sequence has $a_0 = 42$, $a_n = -138$, $d = -10$.

:::solution
So for term $k$: $-10k + 52$. To find $k = n$ (i.e. the max $k$):
$$-138 = -10k + 52 \to -190 = -10k \to 19 = k.$$
So $-138$ is the 19th term in the sequence.
:::
:::

:::problem{10.5}
The first four terms of a sequence are $x + y$, $x - y$, $xy$, $\frac xy$. Find the fifth term.

:::solution
$$\frac xy - xy = xy - (x - y) = x - y - (x + y)$$
$$\frac xy - xy = xy - x + y = -2y \implies x(y - 1) = -3y.$$

The fifth term is $d(5) + (a_0 - d)$:
$$-2y(5) + (x + y) - (-2y) = -10y + x + y + 2y = x - 7y.$$

Now $x = -\dfrac{3y}{y-1}$, and $\frac xy - xy = -2y$:
$$-\frac{3y}{y-1}\left(\frac1y\right) - \left(-\frac{3y}{y-1}\right)y = \frac{-3y}{y(y-1)} + \frac{3y^2}{y-1} = \frac{y(-3 + 3y^2)}{y(y-1)},$$
so
$$\frac{-3 + 3y^2}{y - 1} = -2y \implies -3 + 3y^2 = (y-1)(-2y) \to 3y^2 - 3 = -2y^2 + 2y \to 5y^2 - 2y - 3 = 0,$$
$$y = \frac{2 \pm \sqrt{4 - 4(5)(-3)}}{10} = \frac{2 \pm 8}{10} \to 1 \text{ or } -\frac35.$$

With $y = -\frac35$: $x = -\dfrac{3y}{y-1} = \dfrac{9/5}{-8/5} = -\dfrac98$, and the fifth term is
$$x - 7y = -\frac98 + \frac{21}5 = \frac{-45 + 168}{40} = \boxed{\frac{123}{40}}.$$

**Take 2.** $x + y,\ x - y,\ xy,\ \frac xy$:
$$x - y - x - y = xy - x + y \implies -3y = x(y - 1) \to -\frac{3y}{y-1} = x.$$
$$\frac xy - xy = \frac{-3y}{y(y-1)} - \left(\frac{-3y}{y-1}\right)y = \frac{-3y}{y(y-1)} + \frac{3y^2}{y-1} \to \frac{3y^2 - 3}{y - 1}.$$

**Take 3.**

1. $x - y - x - y = -2y$
2. $\frac xy - xy = x\left(y^{-1} - y\right) = x\left(\frac{1 - y^2}{y}\right)$

$$x - y - 2y = xy \to x - 3y = xy \to -3y = xy - x = x(y - 1)$$
$$x + y - 6y = \frac xy \to x - 5y = \frac xy \to yx - 5y^2 = x \to$$
$$-5y^2 - x + yx = 0 \to -5y^2 - x(1 - y) = 0 \to$$

$$5y^2 + x(1 - y) = 0 \to 5y^2 + 3y = 0 \quad \therefore y = 0,\ y = -\frac35.$$
So
$$x = \frac{3\left(-\frac35\right)}{1 + \frac35} \to -\frac95\left(\frac58\right) = -\frac98.$$
$-2y = d$. So
$$a_5 = -\frac98 - 7\left(-\frac35\right) = -\frac98 + \frac{21}5 = \frac{123}{40}.$$
It’s what I originally had :/
:::
:::

:::problem{10.6}
$64x^3 - 144x^2 + 92x - 15$, with roots in arithmetic progression.

:::solution
Divisors: $15$: $1, 3, 5, 15$; $64$: $1, 2, 4, 8, 16, 32, 64$. Candidates like $\frac{15}{64}$, $\frac34$, $\frac54$, $\frac{15}{16}$, $\frac32$, …

$$\begin{array}{r|rrrr}
\tfrac32 & 64 & -144 & 92 & -15 \\
 & & 96 & -72 & 30 \\ \hline
 & 64 & -48 & 20 & 15
\end{array}$$

$\exists\, r_i \in \left(1, \tfrac32\right)$.

Call the roots $r - d$, $r$, $r + d$ (or $a$, $a + d$, $a + 2d$). Then
$$3a + 3d = \frac{144}{64} = \frac{12^2}{8^2} = \frac{3^2}{2^2} = \frac94.$$
$r_1 + r_2 + r_3 = \frac94$, and with $r$, $r + d$, $r - d$:
$$3r = \frac94 \implies r = \frac9{12} = \frac34.$$
And
$$r(r - d)(r + d) = r(r^2 - d^2) = r^3 - rd^2 = \frac{15}{64}.$$
:::
:::

## Arithmetic Sequences

:::problem{10.1}
An arithmetic progression has $5$ as its 1st term and $40$ as its 6th term.

:::solution
Common difference:
$$\frac{40-5}{6-1} = \frac{35}{5} = 7,$$
so CD $= 7$ and the $n$th term is $7(n-1) + 5$; the 717th term is $7(716) + 5 = 5017$.
:::
:::

:::problem{10.2}
The $n$th term of an AP with first term $a$ and common difference $d$.

:::solution
$$d(n-1) + a.$$
:::
:::

:::problem{10.3}
Prove that if $a, b, c$ are in AP, then for all $k \in \RR$, $ak, bk, ck$ are also in arithmetic progression.

:::solution
In an AP, consecutive terms $a_i, b_i$ differ by the common difference: $b - a = d$, and $b_i - a_i = d$ for all $i$. So note that for any $a_i, b_i$ with $a_ik, b_ik$:
$$b_ik - a_ik = k(b_i - a_i) = kd,$$
so consecutive terms differ by $kd$ for all $i$.

:::
:::

:::problem{10.4}
An AP has first and last terms of $42$ and $-138$, with $d = -10$.

:::solution
If there are $k$ terms,
$$-10(k-1) + 42 = -138 \implies k - 1 = \frac{-180}{-10} = 18 \implies k = 19.$$
So there are $19$ terms.
:::
:::

:::problem{10.5}
The first four terms of an AP are, in order, $x+y$, $x-y$, $xy$, $\dfrac{x}{y}$. What’s the 5th term?

:::solution
The $n$th term is $d(n-1) + a$.

The common difference:
$$(x-y) - (x+y) = d \implies -2y = d \implies y = \frac{d}{-2}.$$
Also, from the last two terms,
$$\frac{x}{y} - xy = d \implies \frac{x - xy^2}{y} = d, \qquad x\left(\frac1y - y\right) = x\left(\frac{1-y^2}{y}\right) = d.$$
The third and fourth terms give
$$\begin{aligned}
-2y(2) + x + y &= xy \implies -4y + x + y = xy \implies -3y + x = xy,\\
-2y(3) + x + y &= \frac{x}{y} \implies -5y + x = \frac{x}{y}.
\end{aligned}$$
So the terms are $x+y,\ x-y,\ -3y+x,\ -5y+x$:
$$\begin{aligned}
-2y(0) + x + y &= x + y,\\
-2y(1) + x + y &= x - y,\\
-2y(2) + x + y &= -3y + x,\\
-2y(3) + x + y &= -5y + x,\\
-2y(4) + x + y &= \ ?
\end{aligned}$$
and $\frac{x}{y} - xy = -2y$.

So $d = -2y$, with
$$-2y(2) + (x+y) = -3y + x = xy, \qquad -2y(3) + (x+y) = -5y + x = \frac{x}{y}.$$
From $-3y + x = xy$:
$$-3y = xy - x = x(y-1) \implies x = \frac{-3y}{y-1} = \frac{3y}{1-y}.$$
(Solving the same equation for $y$ instead: $-3y - xy = -x$, so $3y + xy = x$, $y(3+x) = x$, $y = \frac{x}{3+x}$.)

Now put $x = \frac{3y}{1-y}$ into $-5y + x = \frac{x}{y}$ (multiplied through by $y$, this reads $5y^2 + (1-y)x = 0$):
$$5y^2 + (1-y)\frac{3y}{1-y} = 0 \implies 5y^2 + 3y = 0.$$
Dividing out the root $0$:
$$\begin{array}{r|rrr} 0 & 5 & 3 & 0\\ & & 0 & 0\\ \hline & 5 & 3 & 0 \end{array}$$
leaves $5y + 3$, so $y = -\frac35$ and
$$x = \frac{3\left(-\frac35\right)}{1 - \left(-\frac35\right)} = -\frac98.$$
The 5th term is the 4th term plus $d$:
$$x - 5y + (-2)\left(-\tfrac35\right) = \left(-\tfrac98\right) - 5\left(-\tfrac35\right) - 2\left(-\tfrac35\right) = \frac{21}{5} - \frac98 = \boxed{\frac{123}{40}}.$$
:::
:::

:::example Roots in arithmetic progression
Solve $64x^3 - 144x^2 + 92x - 15 = 0$, given that its roots are in AP.

:::solution
Candidates for rational roots: numerator from $1, 3, 5, 15$ and denominator from $1, 2, 4, 8, 16, 32, 64$.

Writing the roots as $a, a+d, a+2d$, their sum is
$$3a + 3d = \frac94 \implies a + d = \frac{9}{12},$$
which is one root.

Or call the roots $r,\ r+d,\ r-d$. Then
$$r + (r + d) + (r - d) = 3r = \frac94 \implies r = \frac{9}{12} = \frac34.$$
So, from the product of the roots,
$$r(r+d)(r-d) = \frac34\left(\left(\frac34\right)^2 - d^2\right) = \frac{15}{64} \implies d = \pm\frac12,$$
and the roots are
$$\boxed{\tfrac14,\ \tfrac34,\ \tfrac54}.$$
:::
:::

:::problem{10.7}
Let $a, b, c$ be in AP. Prove that:

(a) $2b = a + c$, and

(b) $a^2 - bc$, $b^2 - ac$, and $c^2 - ab$ are in AP.

:::solution
(a) $a, b, c$ in AP $\implies b - a = c - b \implies 2b = a + c$. ✓

(b) Since $\frac{a+c}{2} = b$, and we wish to show $a^2 - bc$, $b^2 - ac$ and $c^2 - ab$ are in AP, we must show that
$$(c^2 - ab) - (b^2 - ac) = (b^2 - ac) - (a^2 - bc),$$
that is,
$$a^2 + 2ac + c^2 = 2b^2 + ab + bc \implies (a+c)^2 = b(2b + a + c).$$
By $b = \frac{a+c}{2}$,
$$\left(\frac{a+c}{2}\right)\left(2\cdot\frac{a+c}{2} + a + c\right) = \frac12(a+c)(2a+2c) = (a+c)^2.$$
So, proof: $(a+c)^2 = b(2a + 2c) = 2b^2 + ab + bc \implies a^2 + 2ac + c^2 = 2b^2 + ab + bc \implies (c^2 - ab) - (b^2 - ac) = (b^2 - ac) - (a^2 - bc)$, as desired. Thus $a^2 - bc$, $b^2 - ac$, $c^2 - ab$ are in AP.
:::
:::

### Exercises

:::exercise{10.1.1}
For $n = 4$, an (infinite) AP has the value $203$. For $n = 13$, the value is $167$. What is the smallest value of $n$ such that the $n$th term is negative?

:::solution
The $n$th term is $d(n-1) + a_0$, or equally $d(n-2) + a_1$, counting from the next term. Here
$$d = \frac{-36}{9} = -4.$$
Counting from the 4th term:
$$\begin{aligned}
-4(n-4) + 203 &< 0\\
-4n + 16 + 203 &< 0\\
-4n + 219 &< 0\\
-4n &< -219\\
n &> \frac{54(4) + 3}{4},
\end{aligned}$$
so the first such $n$ is $55$.

Check:
$$-4(54 - 4) + 203 = -200 + 203 = 3, \qquad -4(55 - 4) + 203 = -204 + 203 = -1.$$
$$\boxed{n = 55}$$
:::
:::

:::exercise{10.1.2}
In an AP, $n = 5 \mapsto 10$ and $n = 10 \mapsto 4$.

(a) $n = 20 \mapsto\ ?$

:::solution
$d = -\frac65$, so the $n$th term is $-\frac65(n-5) + 10 \to -\frac{6n}{5} + 16$?

(a) $4 - 6 - 6 = \boxed{-8}$.
:::
:::

:::exercise{10.1.3}
Show that if $b$ is the average of $a$ and $c$, then $a, b, c$ are in AP.

:::solution
Given: $b = \frac{a+c}{2} \implies 2b = a + c \implies b - a = c - b$, therefore they are in AP.
:::
:::

:::exercise{10.1.4}
:::solution
Let $b - a = c - b$ and add $k$ to each term, so we have $a + k$, $b + k$, $c + k$:
$$\begin{aligned}
(b + k) - (a + k) &= (c + k) - (b + k)\\
b - a - k + k &= c - k + k - b\\
b - a &= c - b.
\end{aligned}$$
:::
:::

:::exercise{10.1.5}
:::solution
$$113,\ 125,\ 137,\ 149,\ 161,\ 173.$$
:::
:::

:::exercise{10.1.6}
Find all $k$ such that $x^4 - (3k+4)x^2 + k^2 = 0$ has $4$ roots in $\RR$ in AP.

:::solution
Call the roots $r - n,\ r,\ r + n,\ r + 2n$. Their sum is $0$:
$$4r + 2n = 0 \implies 2r + n = 0 \implies n = -2r.$$
The sum of the products two at a time is $-3k - 4$:
$$(r-n)(r+n) + (r-n)r + (r-n)(r+2n) + r(r+n) + r(r+2n) + (r+n)(r+2n) = 3r^2 + 3r^2 - 3n^2 + 6nr + 2n^2.$$
The product of the roots is $k^2$:
$$k^2 = a(a+n)(a+2n)(a+3n) \quad\text{or}\quad (r-n)r(r+n)(r+2n),$$
$$(r^2 - n^2)(r^2 + 2rn) = r^4 + 2r^3n - n^2r^2 - 2rn^3 = k^2.$$

Again, with the roots $a - d,\ a,\ a + d,\ (a+d) + d$ (so $a = (a+d) - d$). The sum:
$$(a + d) + (a - d) + (a + 2d) + a = 4a + 2d = 0 \implies d = -\frac{4a}{2} = -2a.$$
The products two at a time:
$$(a+d)(a-d) + (a+d)(a+2d) + (a+d)a + \big((a+d)+d\big)\big((a+d)-d\big) + (a-d)a + (a-d)(a+2d),$$
so
$$\begin{aligned}
-3k - 4 &= 6a^2 + 6ad - d^2\\
&= 6a^2 + 6a(-2a) - (-2a)^2\\
&= 6a^2 - 12a^2 - 4a^2\\
-3k - 4 &= -10a^2,
\end{aligned}$$
$$-3k = -10a^2 + 4, \qquad k = \frac{2(5a^2 - 2)}{3}.$$

The product:
$$\begin{aligned}
k^2 &= (a + d)(a - d)\big((a + d) + d\big)\big((a + d) - d\big)\\
&= (a^2 - d^2)\big((a + d)^2 - d^2\big)\\
&= (a^2 - d^2)(a^2 + 2ad)\\
&= a^4 + 2a^3d - a^2d^2 - 2ad^3,
\end{aligned}$$
and with $d = -2a$:
$$a^4 + 2a^3(-2a) - a^2(-2a)^2 - 2a(-2a)^3 = a^4 - 4a^4 - 4a^4 + 16a^4 = 9a^4 = k^2, \qquad \pm 3a^2 = k\,?$$
Also $a$ is a root:
$$a^4 - (3k + 4)a^2 + k^2 = 0.$$
And the products three at a time:
$$(a^2 - d^2)(a + 2d) + (a^2 - d^2)a + (a + 2d)a(a + d) + (a + 2d)a(a - d).$$
:::
:::

## Arithmetic Series

:::remark Scratch work toward Problem 10.9
Summing $5 + \cdots + 107$ (common difference $6$). First tries: pairing, $\frac{107-5}{2} = \frac{102}{2} = 51$ and $(107 + 5)(8) + 51 = 896 + 51 = 947$; then $(2a + dn)\frac{n}{2}$ with $n = 17$:
$$\frac{\big(2(5) + 6(17)\big)(17)}{2} = \frac{(10 + 102)(17)}{2} = 112 \cdot \frac{17}{2} = 56 \cdot 17 = 952.$$
Fixing the formula: the $n$th term is $d(n-1) + a$, so the sum is
$$\frac{n\big(a + (d(n-1) + a)\big)}{2} = \frac{n\big(2a + d(n-1)\big)}{2},$$
which gives
$$n\left(\frac{2a + (n-1)d}{2}\right) \implies \frac{2(5) + (17)(6)}{2}(18) = (56)(18) = 1008.$$
Pairing again, $a = 5 + \cdots + 107$ and $2a = 112 + \cdots + 112$; $a = 952 - 51 = 901$?

:::

:::problem{10.9}
$5 + \cdots + 107$.

:::solution
$d = 6$, $a = 5$, $n = 18$, so
$$\frac{n(a_0 + a_n)}{2} = 18\left(\frac{112}{2}\right) = 1008.$$
By the formula $\frac{n\big(2a + (n-1)d\big)}{2}$:
$$18\left(\frac{2(5) + (17)(6)}{2}\right) = 18\left(\frac{112}{2}\right) = 1008. \checkmark$$
:::
:::

:::problem{10.11}
The page numbers $1 + 2 + \cdots + n$ of a book are added up, with one page number $m$ counted twice, and the total is $1986$. Which page was counted twice?

:::solution
$$1986 = \frac{n(n+1)}{2} + m \implies 1986 - m = \frac{n(n+1)}{2}.$$
$$\frac{63(64)}{2} = 2016, \qquad \frac{62(63)}{2} = 1953.$$
$$1986 - 1953 = m = 33,$$
therefore page $33$.

This is the only one, since $1 \leq m \leq n$, and $n = 61 \implies 1 \leq 95 \leq 61$, which cannot be, and $n = 63 \implies 1 \leq -30 \leq 63$, which cannot be either.
:::
:::

:::problem{10.12}
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

:::problem{10.13}
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

### Exercises

:::exercise{10.2.1}
$639 + 631 + 623 + \cdots + (-97) = \ ?$

:::solution
$$-8(n-1) + 639 = -97 \implies -8n + 647 = -97 \implies -8n = -744 \implies n = 93.$$
So there are $93$ terms, and the sum is
$$\frac{93\big(2(639) - 8(92)\big)}{2} = 25203.$$

:::
:::

:::exercise{10.2.2}
:::solution
$$\frac{13\big(2(5) + (2)(12)\big)}{2} = 13(34)\left(\frac12\right) = 13(17) = 221.$$
:::
:::

:::exercise{10.2.3}
Let $n \in \ZZ_{>0}$. Find the sum of the $n$ smallest odd positive integers, and calculate it for $> 100$.

:::solution
Say $n = 10$:
$$\frac{10\big(2(1) + (9)(2)\big)}{2} \to \frac{n\big(2 + 2(n-1)\big)}{2}.$$

For $> 100$:
$$\frac{n\big(202 + 2(n-1)\big)}{2}.$$
:::
:::

:::exercise{10.2.4}
Let $a$ and $b$ be positive integers with $a \leq b$. Find the sum of the positive integers from $a$ to $b$, inclusive, in terms of $a$ and $b$.

:::solution
If only $a, b$: since $d(n-1) + a$ is the $n$th term, $d + a$ is the 2nd term, so $d = b - a$ and
$$\frac{2\big(2(a) + (b - a)(1)\big)}{2} = a + b.$$
In general,
$$\frac{n\big(2a + (b - a)(n-1)\big)}{2} = a + b:$$
$$2an + bn - an \to n(2a + b - a) = n(a + b), \qquad \frac{2(a + b)}{a + b} = n.$$

:::
:::

:::exercise{10.2.6}
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

## Geometric Sequences

:::definition
A **geometric sequence** (or geometric progression) is a sequence where each term, after the first, is $r$ (a ratio) times the previous term.
:::

:::problem{10.14}
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

:::problem{10.15}
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

:::problem{10.16}
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
