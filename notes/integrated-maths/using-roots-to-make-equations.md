---
course: integrated-maths
chapter: 10
section: 10.16
title: Using Roots to Make Equations
---

If $r$ is a root of a polynomial, the equation $f(r) = 0$ lets high powers of $r$ be rewritten in terms of lower ones. Together with Vieta’s formulas, this evaluates expressions in the roots without finding the roots.

:::problem
Let $r$ be a root of $x^2 - x + 7$. Find $r^3 + 6r + \pi$.
:::solution
Let $r_1 = r$. $r^3 = r^2 - 7r$. Also $r_1 + r_2 = 1$ and $r_1r_2 = 7$, from $(x - r_1)(x - r_2)$:
$$r_2 = 1 - r_1 \Rightarrow r_1(1 - r_1) = 7 \Rightarrow r_1 - r_1^2 = 7 \Rightarrow r_1^2 - r_1 + 7 = 0,$$
oops lol.
$$r^3 = r^2 - 7r \to r^2 = r - 7 \to r^2 - r + 7 = 0 \;\checkmark$$
So
$$\begin{aligned}
r^3 + 6r + \pi &\to r^2 - 7r + 6(r^2 + 7) + \pi\\
&\to (r - 7) - 7r + 6(r - 7) + 42 + \pi\\
&= r - 7 - 7r + 6r - 42 + 42 + \pi = \boxed{-7 + \pi}.
\end{aligned}$$
:::
:::

:::problem
Find the sum of the 20th powers of the roots of $z^{20} - 19z + 2$.
:::solution
Let $r_1$ be a root. So
$$r_1^{20} - 19r_1 + 2 = 0 \to r_1^{20} = 19r_1 - 2.$$
$$r_1^{20} - r_1^{20} + 19z - 2$$

$$r_1^{21} - 19r_1^2 + 2r_1$$

Then (on a later page):
$$r_1^{20} - 19r_1 + 2 = 0, \qquad r_1^{20} = 19r_1 - 2,$$
$$19r_1 - 2 + 19r_2 - 2 + \cdots + 19r_{20} - 2 = 19(r_1 + r_2 + \cdots + r_{20}) - 2(20),$$
and $r_1 + r_2 + \cdots + r_{20} = 0$ because $a_{n-1} = 0$, so the sum is
$$19(0) - 40 = \boxed{-40}.$$
:::
:::

:::problem
Let $a, b, c$ be the roots of $x^3 + 3x^2 - 24x + 1 = 0$ (they are real). Prove that $\sqrt[3]a + \sqrt[3]b + \sqrt[3]c = 0$.
:::solution
$\sqrt[3]a = f(a)$? We have $(x - a)(x - b)(x - c) = x^3 + 3x^2 - 24x + 1$, so
$$a^3 + 3a^2 - 24a + 1 = 0, \qquad a^3 = -3a^2 + 24a - 1, \qquad \sqrt[3]a = \bigl(-(3a^2 - 24a + 1)\bigr)^{1/9}.$$

Or:
$$a = \frac{a^3 + 3a^2 + 1}{24} \to \sqrt[3]a = \frac{\sqrt[3]{a^3 + 3a^2 + 1}}{\sqrt[3]{24}} = \frac{\sqrt[3]{a^3 + 3a^2 + 1}}{2\sqrt[3]3}.$$

Instead:
$$(x + 1)^3 - 27x = 0 \iff f(x) = 0 \Rightarrow x = \frac{-(x + 1)^3}{-27} = \left(\frac{x + 1}{3}\right)^3.$$
So since $a, b, c$ are roots, $a = \left(\frac{a + 1}{3}\right)^3$, so $\sqrt[3]a = \frac{a + 1}{3}$. Then
$$\sqrt[3]a + \sqrt[3]b + \sqrt[3]c = \frac{a + 1}{3} + \frac{b + 1}{3} + \frac{c + 1}{3} = \frac{a + b + c + 3}{3}.$$
$a + b + c = -\frac{a_{n-1}}{a_n}$, so $-3 = a + b + c$, therefore $\frac{a + b + c + 3}{3} = 0$. $\square$
:::
:::

:::example
$x^2 - 3cx - 8d = 0$ has roots $a, b$, and $x^2 - 3ax - 8b = 0$ has roots $c, d$. Find $a + b + c + d$.
:::solution
$$3c = a + b, \qquad 3a = c + d, \qquad -8d = ab, \qquad -8b = cd.$$
$a^2 - 3ca - 8d = 0$:

- $a^2 - (a + b)a - 8d = 0 \Rightarrow a^2 - a^2 - ba - 8d = 0$ ✗
- $a^2 - 3ca + ab = 0 \to a(a - 3c + b) = 0$ ✗
- $(3c - b)^2 - 3c(3c - b) + (3c - b)b$: $\;9c^2 - 6bc + b^2 - 9c^2 + 3cb + 3cb - b^2 = 0$ ✗

:::
:::

:::example
$\frac{2003}{2004}x + 1 + \frac1x = 0$.
:::solution
$$\frac{2003}{2004}x^2 + x + 1 = 0,$$
so $r_1 + r_2 = -\frac{2004}{2003}$ and $r_1r_2 = \frac{2004}{2003}$, and
$$\frac1{r_1} + \frac1{r_2} = \frac{r_2 + r_1}{r_1r_2} = \boxed{-1}.$$

:::
:::

:::example
Let $x \in \RR$ with $x^3 + 4x = 8$. What is the value of $x^7 + 64x^2$?

:::solution
$a^3 + 4a - 8 = 0$, and $x^7 + 64x^2 = x(x^6 + 2^6x)$.
$$(x^3 + 4x - 8)(x^3 + 4x - 8) = x^6 + 8x^4 - 16x^3 + 16x^2 - 64x + 64$$
$$= (x^6 - 64x) + 8x^4 - 16x^3 + 16x^2 + 64$$

:::
:::solution Second attempt
$x^3 + 4x - 8 = 0$, so $rst = 8$. Trying $x = 2$: $8 + 4(2) - 8$. Candidates: $1, 2, 4, 8$.
$$x^6 + 64x - 64 + \cdots$$
*(unfinished)*
:::
:::

:::example Diagonal of a box
$x^3 - 4x^2 + 5x - 19 = 0$ has roots $r, s, t$. Find the length of the interior diagonal of a box with sides $r, s, t$.

:::solution
By Vieta,
$$r + s + t = 4, \qquad rst = 19, \qquad rs + rt + st = 5.$$
So the volume is $V = 19$, and $2(rs + rt + st) = 10$ is the surface area.

Expanding $(r + s + t)(r + s + t)$ gives $r^2 + s^2 + t^2$ plus $rs + rt$, $sr + st$, $tr + ts$, that is, plus $2(rs + rt + st)$. So
$$r^2 + s^2 + t^2 + 2(rs + rt + st) = 16 \implies r^2 + s^2 + t^2 = 6.$$

![Box with edges r, s, t, face diagonal b and space diagonal d](/notes/integrated-maths/figures/s8-box-diagonal.svg)

Let $t \geq r \geq s$. The diagonal $b$ of the $s \times t$ face has $s^2 + t^2 = b^2$, and then the interior diagonal $d$ has $b^2 + r^2 = d^2$. So
$$s^2 + t^2 + r^2 = b^2 + r^2 = d^2, \qquad 6 = b^2 + r^2 = d^2,$$
$$\boxed{d = \sqrt6}.$$
:::
:::

:::problem
Consider all lines that meet the graph of $y = 2x^4 + 7x^3 + 3x - 5$ in four distinct points $(x_i, y_i)$, $i \in \{1, \dots, 4\}$. Show that
$$\frac{x_1 + x_2 + x_3 + x_4}{4}$$
is independent of the line and find its value.

:::solution
![A W-shaped curve crossed by two lines, each meeting it in four points](/notes/integrated-maths/figures/s8-quartic-lines.svg)

Let’s look at the line that intersects at $y = 0$. For that line, the $x_i$ are the roots of $2x^4 + 7x^3 + 3x - 5 = 0$, so
$$\frac{x_1 + x_2 + x_3 + x_4}{4} = \frac{-7/2}{4} = -\frac78.$$
And at height $-\frac78$:
$$-\frac78 = 2x^4 + 7x^3 + 3x - 5 \implies 0 = 2x^4 + 7x^3 + 3x - \frac{33}{8}.$$

:::
:::

## Exercises

:::exercise
Let $t$ be a root of $f(x) = x^3 - x + 2$. Evaluate $t^6 - t^2 + 4t$.
:::solution
$f(t) = t^3 - t + 2 = 0 \Rightarrow t^3 = t - 2$, so
$$(t - 2)(t - 2) - t^2 + 4t \to t^2 - 4t + 4 - t^2 + 4t = \boxed{4}.$$
:::
:::

:::exercise
Let $r$ be a root of $x^2 + 7x + 17 = 0$.
:::solution
$r^2 + 7r + 17 = 0$, so $r = \frac{-r^2 - 17}{7} = -\frac{r^2 + 17}{7}$.

(a) $(r + 3)(r + 4) = r^2 + 7r + 12$, so
$$r^2 + 7r + 17 = (r + 3)(r + 4) + 5 = 0.$$
So $(r + 3)(r + 4) = (r^2 + 7r + 17) - 5 = 0 - 5 = \boxed{-5}$.

(b) $(r - 2)(r + 9) = r^2 + 7r - 18$, so $f(r) = (r - 2)(r + 9) + 35$. So $(r - 2)(r + 9) = 0 - 35$, so $\boxed{-35}$.

(c)
$$\begin{aligned}
(r - 1)(r + 2)(r + 8)(r + 5) &= \bigl[(r + 2)(r + 5)\bigr]\bigl[(r - 1)(r + 8)\bigr]\\
&= (r^2 + 7r + 10)(r^2 + 7r - 8) = \bigl(f(r) - 7\bigr)\bigl(f(r) - 25\bigr)\\
&= (-7)(-25) = \boxed{175}.
\end{aligned}$$
:::
:::

:::exercise
Find the sum of the 20th powers of the roots of $z^{20} - 19z^2 + 2 = 0$.
:::solution
$$r_i^{20} - 19r_i^2 + 2 = 0, \qquad r_i^{20} = 19r_i^2 - 2,$$
$$19r_1^2 + 19r_2^2 + \cdots + 19r_{20}^2 - 2(20) = 19\left(\sum_{i=1}^{20} r_i^2\right) - 2(20).$$
$-19z^2 = -2 - z^{20} \to z^2 = \frac{z^{20} + 2}{19}$, so
$$\sum_{i=1}^{20} r_i^2 = \frac{(r_1^{20} + \cdots + r_{20}^{20}) + 2(20)}{19}.$$
:::
:::
