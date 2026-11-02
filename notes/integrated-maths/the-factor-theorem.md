---
course: integrated-maths
chapter: 10
section: 10.7
title: The Factor Theorem
---

When the remainder on dividing by $x - a$ is $0$, the divisor is a factor. This page proves that, uses it to test and factor polynomials, and looks at how the roots of a factor relate to the roots of the polynomial it divides.

:::problem
Let $f(x) = 6x^3 - tx^2 + 7x - 12$, where $t$ is a constant such that $f(x)$ is divisible by $x - 2$. Find $t$.

:::solution
$$f(2) = 6(2)^3 - t(2)^2 + 7(2) - 12 = 48 - 4t + 14 - 12 = 50 - 4t.$$
If $x - 2 \mid f(x)$, then $2$ is a root of $f(x)$, therefore $f(2) = 0$. So
$$0 = 50 - 4t \implies t = 12.5 = \tfrac{25}{2}.$$
:::
:::

:::problem
Let $p(x)$ be a polynomial.

**(a)** Show that if $x - a$ is a factor of $p(x)$, then $p(a) = 0$.

:::solution
If $x - a$ is a factor of $p(x)$, then $x - a \mid p(x)$ such that $r(x) = 0$. By the remainder theorem, note
$$p(x)/(x-a) = q(x) + 0 \implies p(x) = q(x)(x - a) \implies p(a) = q(a)(a - a) = 0.$$
Thus $p(a) = 0$.
:::

**(b)** Show that if $p(a) = 0$, then $x - a$ is a factor of $p(x)$.

:::solution
Divide $p(x)$ by $g(x) = x - a$: $p(x) = q(x)g(x) + r(x)$, and since $g$ is linear, $r$ is of order $0$, i.e. a constant. If $p(a) = 0$, then by the remainder theorem
$$0 = p(a) = q(a)(a - a) + r = r,$$
so $r = 0$. Thus $x - a$ is a factor of $p(x)$.

:::
:::

:::theorem Factor Theorem
For $p(x) \in \RR[x]$, $x - a \mid p(x)$ iff $p(a) = 0$.
:::

:::proof
If $x - a \mid p(x)$, then $p(x) = (x - a)q(x)$, so $p(a) = 0$. If $a$ is a root of $p(x)$, then $p(a) = 0$; since by the remainder theorem the remainder of $p(x)/(x - a)$ is $p(a)$, but $p(a) = 0$, the remainder is $0$. Thus $x - a$ is a factor of $p(x)$.
:::

:::remark
In words: if, upon division, you get a remainder of $0$, your divisor is a factor of your dividend. For numbers: $48 \div 6 = 8$ with remainder $0$, so $6 \cdot 8 = 48$: both $6$ and $8$ are factors of the original dividend $48$.
:::

:::example
$f(x) = 2x^3 - x^2 + 2x - 3$; $x = 1$, i.e. $x - 1 = 0$. Is the $x$-value a root?

:::solution
$$
f(1) = 2(1)^3 - (1)^2 + 2(1) - 3 = 2 - 1 + 2 - 3 = \boxed{0}
$$
Thus $x = 1$ is a root. That means that $0$ is the remainder when you divide by the factor that $x = 1$ creates, $(x - 1)$.

**Long division.** Divide the first terms, then multiply the result by the $(x-1)$ and subtract:
$$
\begin{aligned}
&\phantom{-(}2x^3 - x^2 + 2x - 3\\
-&(2x^3 - 2x^2) &&\tfrac{2x^3}{x} = 2x^2,\quad 2x^2(x-1) = 2x^3 - 2x^2\\
&\phantom{-(2x^3}\;\,0 + x^2 + 2x - 3\\
-&(x^2 - x) &&\tfrac{x^2}{x} = x,\quad x(x-1) = x^2 - x\\
&\phantom{-(2x^3 - x^2 +}\;\,0 + 3x - 3\\
-&(3x - 3) &&\tfrac{3x}{x} = 3\\
&\phantom{-(2x^3 - x^2 + 2x - 3}\;\,\boxed{0}
\end{aligned}
$$
The quotient is $2x^2 + x + 3$. If you do not end with $0$, then you did something **wrong**! So
$$
f(x) = (x-1)(2x^2 + x + 3).
$$

**Synthetic division** (only when dividing by $x - c$, that is, when $x = c$ is a root you are testing). Bring down the first coefficient, multiply it by $1$, add to the next coefficient, and repeat:
$$
\begin{array}{r|rrrr}
1 & 2 & -1 & 2 & -3\\
  &   & 2 & 1 & 3\\
\hline
  & 2 & 1 & 3 & \boxed{0}
\end{array}
$$
The last number is the remainder. The bottom row gives $2x^2 + x + 3$, so $f(x) = (2x^2 + x + 3)(x - 1)$.
:::
:::

:::example
$g(x) = 3x^6 + 82x^3 + 27$; $x = -3$.

:::solution
**Synthetic division** (fill in zeros for the missing powers):
$$
\begin{array}{r|rrrrrrr}
-3 & 3 & 0 & 0 & 82 & 0 & 0 & 27\\
   &   & -9 & 27 & -81 & -3 & 9 & -27\\
\hline
   & 3 & -9 & 27 & 1 & -3 & 9 & \boxed{0}
\end{array}
$$
which gives $3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9$, and $g(-3) = 0$.

**Long division:**
$$
\begin{aligned}
&3x^6 + 0x^5 + 0x^4 + 82x^3 + 0x^2 + 0x + 27\\
-&(3x^6 + 9x^5) &&\tfrac{3x^6}{x} = 3x^5,\quad 3x^5(x+3) = 3x^6 + 9x^5\\
&\quad 0 - 9x^5 + 0x^4 + 82x^3\\
-&(-9x^5 - 27x^4) &&\tfrac{-9x^5}{x} = -9x^4,\quad -9x^4(x+3) = -9x^5 - 27x^4\\
&\quad 0 + 27x^4 + 82x^3 + 0x^2 + 0x + 27\\
-&(27x^4 + 81x^3)\\
&\quad 0 + x^3 + 0x^2 + 0x + 27\\
-&(x^3 + 3x^2)\\
&\quad 0 - 3x^2 + 0x + 27\\
-&(-3x^2 - 9x) &&\tfrac{-3x^2}{x} = -3x,\quad -3x(x+3) = -3x^2 - 9x\\
&\quad 0 + 9x + 27\\
-&(9x + 27) &&9(x+3) = 9x + 27\\
&\quad \boxed{0}
\end{aligned}
$$
So the quotient is $3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9$, and
$$
g(x) = (x+3)(3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9).
$$
:::
:::

:::problem
$f(x) = x^4 + ax^3 + bx^2 + cx + d$ has roots $1, 3, 5, 7$. Find $a, b, c, d$.

:::solution
$$\begin{aligned}
f(x) &= (x-1)(x-3)(x-5)(x-7) \\
&= (x^2 - 4x + 3)(x^2 - 12x + 35) \qquad (\text{so } d = 3 \cdot 35 = 105) \\
&= x^4 - 16x^3 + 86x^2 - 176x + 105,
\end{aligned}$$
so $a = -16$, $b = 86$, $c = -176$, $d = 105$.

Unneeded, but the other way: $f(1) = f(3) = f(5) = f(7) = 0$, so
$$\begin{aligned}
f(1) &= 1 + a + b + c + d = 0 &&\leadsto a + b + c + d = -1, \\
f(3) &= 81 + 27a + 9b + 3c + d = 0 &&\leadsto 27a + 9b + 3c + d = -81 \quad (81 = 9^2), \\
f(5) &= 625 + 125a + 25b + 5c + d = 0 &&\leadsto 125a + 25b + 5c + d = -625 \quad (625 = 25^2), \\
f(7) &= 7^4 + 343a + 49b + 7c + d = 0 &&\leadsto 343a + 49b + 7c + d = -7^4 \quad (7^4 = 49^2).
\end{aligned}$$
Using $d = -1 - a - b - c$:
$$-81 = 27a + 9b + 3c + (-1 - a - b - c) \implies -80 = 26a + 8b + 2c \implies -40 = 13a + 4b + c.$$
So $c = -40 - 13a - 4b$, and then $d = -1 - a - b - c = 39 + 12a + 3b$, so
$$-625 = 125a + 25b - 200 - 65a - 20b + 39 + 12a + 3b \implies -464 = 72a + 8b \implies -58 = 9a + b,$$
and with $a = -16$: $-58 = 9(-16) + b$, so $b = 86$.

:::
:::

:::problem
Let $g(x), f(x) \in \RR[x]$ with $\deg f, \deg g > 0$.

**(a)** If $g(x)$ is a factor of $f(x)$, then must every root of $g(x)$ also be a root of $f(x)$?

:::solution
Let $1 < \deg g < \deg f$ such that $g \mid f$. Now for the roots $r_i \in \CC$ of $g$ we have
$$g(x) = a_nx^n + \dots + a_0 = m(x - r_1)(x - r_2)\cdots(x - r_n).$$

So we substitute the factored form for $g(x)$:
$$\frac{f(x)}{g(x)} = q(x) + \frac{r(x)}{g(x)} \implies f(x) = q(x)\,m(x - r_1)\cdots(x - r_n) + r(x),$$
and by the remainder theorem we know that $f(a) = r(a)$ at a root $a$ of $g$. Note that if $\alpha_i$ is the $x$ for any $x - r_i = 0$, then
$$f(\alpha_i) = q(\alpha_i)\,m(\alpha_i - r_1)\cdots(0)\cdots(\alpha_i - r_n) + r(\alpha_i) = r(\alpha_i).$$
Ah! But for $g$ to divide $f$, $r(\alpha_i)$ must be $0$, thus $f(\alpha_i) = 0$ for all root solutions $\alpha_i$ to $g$. Thus every $\alpha_i$ is, by definition, a root of $f$.
:::

:::solution Second attempt
If $g \mid f$, then $r(x) = 0$, which by our previous proof means either $\deg g = 1$ or $\deg g > 1$. If $\deg g = 1$, then trivial. If $\deg g > 1$, then $q(a)g(a)$, where $a$ is any root of $g(x)$, always is $0$. Now if $(x - a) \mid g$ for any $a$, then $f(a) = 0$ for all such $a$:
$$f(a) = q(a)g(a) + r(a) = q(a) \cdot 0 + 0 = 0,$$
since by the remainder theorem $g \mid f \implies r = 0$.

:::

**(b)** If every root of $g(x)$ is a root of $f(x)$, then must $g \mid f$ evenly?

:::solution
Let $g(x) = (x-1)^2$ and $f(x) = x(x-1)$. Then every root of $g$ is a root of $f$, but
$$\frac{f(x)}{g(x)} = \frac{x}{x-1}$$
is not evenly divided.
:::
:::

:::theorem
For all $p(x) \in \RR[x]$, $p(x) = a_nx^n + \dots + a_0$ with roots $r_i$, $i \in \{1, \dots, n\}$, we have
$$p(x) = a_n(x - r_1)\cdots(x - r_n).$$
:::

Back to part (a) of the problem above on the roots of a factor: if $g(x) \mid f(x)$, then $f(x) = g(x)q(x)$. Therefore if $r$ is a root of $g$, $f(r) = 0 \cdot q(r)$, so $f(r) = 0$, which by the factor theorem means $x - r \mid f(x)$. Thus all roots of $g(x)$ divide $f$.

:::remark
If $g(x)$ is a factor of $f(x)$, then for every root $r$ of $g(x)$, $x - r$ **must** divide $f(x)$. **But** if $x - r$ divides $f(x)$ for every root $r$ of $g(x)$, $g(x)$ does **not** necessarily divide $f(x)$.
:::

Observe: $g(x) = (x-1)^2$, $f(x) = x(x-1)$:
$$\frac{x(x-1)}{(x-1)^2} = \frac{x}{x-1}, \qquad \text{but} \qquad \frac{x(x-1)}{x-1} = x \quad \text{and} \quad \frac{x(x-1)}{x-1} = x.$$

:::problem
Let $p(x) = 3x^4 + 5x^3 - 49x^2 + 11x + 30$ and note that $p(-2/3) = p(3) = 0$.

**(a)** Find two linear factors of $p(x)$. Divide $p(x)$ by one of these factors. Why are the roots of the quotient also roots of $p(x)$?

:::solution
Since $p(-2/3) = p(3) = 0$, $\left(x + \frac{2}{3}\right)$ and $(x - 3)$ are factors of $p(x)$. The roots of the quotient are the remaining roots of $p(x)$, since $\left(x + \frac{2}{3}\right)(x - 3)q(x) = p(x)$, and like we showed, if $q(x) \mid p(x)$, the roots of $q(x)$ divide $p(x)$. So!

NOTE: $\left(x + \frac{2}{3}\right) \cong (3x + 2)$.

Dividing by $(x - 3)$:
$$\begin{array}{r|rrrrr}
3 & 3 & 5 & -49 & 11 & 30 \\
  &   & 9 & 42 & -21 & -30 \\ \hline
  & 3 & 14 & -7 & -10 & 0
\end{array} \implies 3x^3 + 14x^2 - 7x - 10.$$

Dividing by $\left(x + \frac{2}{3}\right)$:
$$\begin{array}{r|rrrrr}
-\frac{2}{3} & 3 & 5 & -49 & 11 & 30 \\
  &   & -2 & -2 & 34 & -30 \\ \hline
  & 3 & 3 & -51 & 45 & 0
\end{array} \implies 3x^3 + 3x^2 - 51x + 45.$$

Then dividing that by $(x - 3)$:
$$\begin{array}{r|rrrr}
3 & 3 & 3 & -51 & 45 \\
  &   & 9 & 36 & -45 \\ \hline
  & 3 & 12 & -15 & 0
\end{array} \implies 3x^2 + 12x - 15,$$
and $3(x^2 + 4x - 5) = 0 \iff (x + 5)(x - 1) = 0$.

So
$$p(x) = 3(x - 3)\left(x + \tfrac{2}{3}\right)(x + 5)(x - 1).$$

Now to verify:
$$\boxed{(x + 5)(x - 1)(x - 3)(3x + 2)}$$
(the $3$ in $3x + 2$ comes from the $3$ in $3(x^2 + 4x - 5)$). The constant term: $(5)(-1) = -5$, $-5(-3) = 15$, $15(2) = 30$. And
$$(x^2 + 4x - 5)(3x^2 - 7x - 6) = 3x^4 + 5x^3 - 49x^2 + 11x + 30 \ \checkmark$$
since the $x^3$ coefficient is $-7 + 12 = 5$ and the $x^2$ coefficient is $-28 - 6 - 15 = -49$.
:::
:::

## Exercises

:::exercise
For what values of $a$ is $x + 2$ a factor of $x^4 - 2x^3 + ax^2 - ax + 7$?

:::solution
$$p(-2) = 16 + 16 + 4a + 2a + 7 \implies 6a = -39 \implies a = -\frac{39}{6} = -\frac{13}{2}.$$
$$\boxed{a = -\tfrac{13}{2}}$$
:::
:::

:::exercise
How can we quickly tell that $x - 1$ is a factor of $x^5 + 6x^4 - 7x^3 + 2x - 2$ without using long $\RR[x]$ division?

:::solution
Plug in $1$: $1 + 6 - 7 + 2 - 2 = 0$. Since the result is $0$, $x - 1$ is a factor of $p(x)$ by the factor theorem.
:::
:::

:::exercise
Let $f(x) = 6x^4 + 19x^3 - 36x^2 - 49x + 60$. One root is $-\frac{5}{3}$. Find all roots.

:::solution
$$\begin{array}{r|rrrrr}
-\frac{5}{3} & 6 & 19 & -36 & -49 & 60 \\
  &   & -10 & -15 & 85 & -60 \\ \hline
  & 6 & 9 & -51 & 36 & 0
\end{array} \implies f(x) = \left(x + \tfrac{5}{3}\right)(6x^3 + 9x^2 - 51x + 36)$$
$$\implies f(x) = 3\left(x + \tfrac{5}{3}\right)(2x^3 + 3x^2 - 17x + 12).$$

Try $x = \frac{3}{2}$ in the cubic:
$$2 \cdot \frac{27}{8} + 3 \cdot \frac{18}{8} - 17 \cdot \frac{12}{8} + 12 = \frac{2 \cdot 27 + 3 \cdot 18 - 17(12)}{8} + 12 = 0.$$
(On the side: $\frac{x}{2}(y)z = 12 \Rightarrow xyz = 24$.)

$$\begin{array}{r|rrrr}
\frac{3}{2} & 2 & 3 & -17 & 12 \\
  &   & 3 & 9 & -12 \\ \hline
  & 2 & 6 & -8 & 0
\end{array} \implies 2x^2 + 6x - 8 = 2(x^2 + 3x - 4) \to 2(x + 4)(x - 1).$$

So
$$f(x) = 6\left(x + \tfrac{5}{3}\right)(x + 4)\left(x - \tfrac{3}{2}\right)(x - 1),$$
and the roots are $-\frac{5}{3}, -4, \frac{3}{2}, 1$.

Check: $\left(x + \frac{5}{3}\right)(x + 4) = x^2 + \frac{5}{3}x + \frac{12}{3}x + \frac{20}{3}$, and times $6$ this is $6x^2 + 10x + 24x + 40 = 6x^2 + 34x + 40$. Also $(x - 1)\left(x - \frac{3}{2}\right) = x^2 - \frac{3}{2}x - \frac{2}{2}x + \frac{3}{2} = x^2 - \frac{5}{2}x + \frac{3}{2}$. Then
$$(6x^2 + 34x + 40)\left(x^2 - \tfrac{5}{2}x + \tfrac{3}{2}\right) = \left\{\begin{aligned}
&6x^4 - 15x^3 + 9x^2 \\
&\quad + 34x^3 - 85x^2 + 51x \\
&\quad + 40x^2 - 100x + 60
\end{aligned}\right\} = 6x^4 + 19x^3 - 36x^2 - 49x + 60 \ \checkmark$$
:::
:::

:::exercise
Suppose $f(x)$ and $q(x)$ are polynomials such that $f(x) = (x - a)q(x)$. Must it be true that $f(x) = 0 \implies q(x) = 0$?

:::solution
If $f(x) = 0$, then
$$\begin{cases} q(x) = 0, \text{ done;} \\ \quad \text{or} \\ (x - a) = 0. \end{cases}$$
:::
:::

:::exercise
$p(x) = 3x^3 - 20x^2 + kx + 12$ is divisible by $x - 3$ for some constant $k$. Factor $p(x)$.

:::solution
So $p(3) = 81 - 180 + 3k + 12 = 0 \implies 3k = 87 \implies k = 29$.
$$\begin{array}{r|rrrr}
3 & 3 & -20 & 29 & 12 \\
  &   & 9 & -33 & -12 \\ \hline
  & 3 & -11 & -4 & 0
\end{array} \implies 3x^2 - 11x - 4,$$
whose roots are
$$\frac{11 \pm \sqrt{121 + 16(3)}}{6} = \frac{11 \pm 13}{6} = 4, \ -\frac{1}{3}.$$
$$\boxed{\text{So: } (3x + 1)(x - 4)(x - 3)}: \quad x = -\tfrac{1}{3}, 4, 3.$$
:::
:::

:::exercise
Let $p(x) = x^3 + 2kx^2 + k^2x + k - 4$. For which $k$ is $2$ a root?

:::solution
Synthetic division by $2$:
$$\begin{array}{c|cccc}
2 & 1 & 2k & k^2 & k-4\\
 & & 2 & 2(2+2k) & 8(1+k) + 2k^2\\ \hline
 & 1 & 2+2k & 4(1+k) + k^2 & 0
\end{array}$$
For the remainder to be $0$ we need $(k - 4) + 2k^2 + 8(1+k) = 0$, so $2k^2 + 8k + 8 = -(k - 4)$, so
$$2k^2 + 9k + 4 = 0 \implies k = \frac{-9 \pm \sqrt{9^2 - 4(2)(4)}}{4} = \frac{-9 \pm 7}{4} = -\frac12 \text{ or } -4.$$

Directly, $p(2) = 8 + 2(4)k + k^2(2) + k - 4 = 4 + 9k + 2k^2 = (2k + 1)(k + 4)$, so
$$k = -\frac12,\ -4.$$
:::
:::
