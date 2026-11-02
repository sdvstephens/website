---
course: integrated-maths
chapter: 11
section: 11.1
title: Arithmetic Sequences
---

We start with the simplest kind of sequence: one that changes by the same amount at every step.

:::definition
An **arithmetic sequence** (or **arithmetic progression**) is a sequence where the difference between any two consecutive terms is the same, or, more formally: an **AP** is a sequence such that $a_{i+1} - a_i = d$ for all $i$.
:::

:::problem
An arithmetic progression has $5$ as its 1st term and $40$ as its 6th term.

:::solution
Common difference:
$$\frac{40-5}{6-1} = \frac{35}{5} = 7,$$
so CD $= 7$ and the $n$th term is $7(n-1) + 5$; the 717th term is $7(716) + 5 = 5017$.

Or, starting from $5$: $5 + (n-1)d$, and with $d = 7$ this is $7n - 7 + 5 = 7n - 2$. So $7(717) - 2 = 5017$.
:::
:::

:::problem
The $n$th term of an AP with first term $a$ and common difference $d$.

:::solution
$$d(n-1) + a.$$
Multiplied out: in general, $dn + (a - d)$ is the $n$th term finder.
:::
:::

:::problem
Prove that if $a, b, c$ are in AP, then for all $k \in \RR$, $ak, bk, ck$ are also in arithmetic progression.

:::solution
Say $a, b, c$ are in AP $\Rightarrow c - b = b - a$. Now see $ck - bk = k(c - b)$, but $c - b = b - a$, so $k(c - b) = k(b - a)$. $\therefore ak, bk, ck$ are in AP.

The same goes for a whole AP. In an AP, consecutive terms $a_i, b_i$ differ by the common difference: $b - a = d$, and $b_i - a_i = d$ for all $i$. So note that for any $a_i, b_i$ with $a_ik, b_ik$:
$$b_ik - a_ik = k(b_i - a_i) = kd,$$
so consecutive terms differ by $kd$ for all $i$.
:::
:::

:::problem
An AP has first and last terms of $42$ and $-138$, with $d = -10$.

:::solution
If there are $k$ terms,
$$-10(k-1) + 42 = -138 \implies k - 1 = \frac{-180}{-10} = 18 \implies k = 19.$$
So there are $19$ terms.

With the other form of the $n$th term, $dn + (a - d)$, term $k$ is $-10k + 52$. To find $k = n$ (i.e. the max $k$):
$$-138 = -10k + 52 \to -190 = -10k \to 19 = k.$$
So $-138$ is the 19th term in the sequence.
:::
:::

:::problem
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

**Another way**, setting the consecutive differences equal:
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
:::
:::

:::example Roots in arithmetic progression
Solve $64x^3 - 144x^2 + 92x - 15 = 0$, given that its roots are in AP.

:::solution
Candidates for rational roots: numerator from $1, 3, 5, 15$ and denominator from $1, 2, 4, 8, 16, 32, 64$, like $\frac{15}{64}$, $\frac34$, $\frac54$, $\frac{15}{16}$, $\frac32$, … Testing $\frac32$:

$$\begin{array}{r|rrrr}
\tfrac32 & 64 & -144 & 92 & -15 \\
 & & 96 & -72 & 30 \\ \hline
 & 64 & -48 & 20 & 15
\end{array}$$

$\exists\, r_i \in \left(1, \tfrac32\right)$.

Writing the roots as $a, a+d, a+2d$, their sum is
$$3a + 3d = \frac{144}{64} = \frac{12^2}{8^2} = \frac{3^2}{2^2} = \frac94 \implies a + d = \frac{9}{12},$$
which is one root.

Or call the roots $r,\ r+d,\ r-d$. Then
$$r + (r + d) + (r - d) = 3r = \frac94 \implies r = \frac{9}{12} = \frac34.$$
So, from the product of the roots,
$$r(r+d)(r-d) = \frac34\left(\left(\frac34\right)^2 - d^2\right) = \frac{15}{64} \implies d = \pm\frac12,$$
and the roots are
$$\boxed{\tfrac14,\ \tfrac34,\ \tfrac54}.$$
:::
:::

:::problem
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

## Exercises

:::exercise
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

:::exercise
In an AP, $n = 5 \mapsto 10$ and $n = 10 \mapsto 4$.

(a) $n = 20 \mapsto\ ?$

:::solution
$d = -\frac65$, so the $n$th term is $-\frac65(n-5) + 10 \to -\frac{6n}{5} + 16$?

(a) $4 - 6 - 6 = \boxed{-8}$.
:::
:::

:::exercise
Show that if $b$ is the average of $a$ and $c$, then $a, b, c$ are in AP.

:::solution
Given: $b = \frac{a+c}{2} \implies 2b = a + c \implies b - a = c - b$, therefore they are in AP.
:::
:::

:::exercise
:::solution
Let $b - a = c - b$ and add $k$ to each term, so we have $a + k$, $b + k$, $c + k$:
$$\begin{aligned}
(b + k) - (a + k) &= (c + k) - (b + k)\\
b - a - k + k &= c - k + k - b\\
b - a &= c - b.
\end{aligned}$$
:::
:::

:::exercise
:::solution
$$113,\ 125,\ 137,\ 149,\ 161,\ 173.$$
:::
:::

:::exercise
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
