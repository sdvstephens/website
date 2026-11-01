---
course: integrated-maths
chapter: 8
section: 25
title: Quadratic Inequalities
source-pages: 1
---

:::example
Solve $2x^2 < 5x + 3$.

:::solution
$$
2x^2 - 5x - 3 < 0.
$$
X: top $-5$, bottom $-6$, sides $1$ and $-\tfrac62$. So
$$
(2x+1)(x-3) < 0 \implies \left\{x \;\middle|\; -\tfrac12 < x < 3\right\} = \left(-\tfrac12, 3\right).
$$
:::
:::

:::example
Solve $x(x+1) > 20$.

:::solution
$$
x^2 + x - 20 > 0.
$$
X: top $1$, bottom $-20$, sides $5$ and $-4$. So
$$
(x+5)(x-4) > 0 \implies (-\infty, -5) \cup (4, \infty).
$$
The parabola dips below the axis between $-5$ and $4$, so it is positive outside them.

![Number line with an upward parabola crossing it at -5 and 4; the rays to the left of -5 and to the right of 4 are marked, with open circles at -5 and 4](/notes/integrated-maths/figures/r2-ineq-x2px-20.svg)
:::
:::

:::example
Solve $x^2 - 3x - 10 \le 0$.

:::solution
First solve the equation:
$$
x^2 - 3x - 10 = 0 \implies (x-5)(x+2) = 0 \implies x = 5,\ x = -2.
$$
Testing each region of the number line: false to the left of $-2$, true between $-2$ and $5$, false to the right of $5$. So
$$
\{x \mid -2 \le x \le 5\} = [-2, 5].
$$

![Number line with -2 and 5 marked; the regions are labelled F, T, F from left to right, an upward parabola dips below the line between -2 and 5, and the closed interval from -2 to 5 is marked](/notes/integrated-maths/figures/r2-ineq-x2m3xm10.svg)
:::
:::

:::example
Solve $4x^2 + 9 < 6x$.

:::solution
$\varnothing$: **no solution.**

Rearranged, the inequality is $4x^2 - 6x + 9 < 0$, and
$$
x = \frac{-(-6) \pm \sqrt{(-6)^2 - 4(4)(9)}}{2(4)} = \frac{6 \pm \sqrt{36 - 144}}{8} = \frac{6 \pm \sqrt{-108}}{8} = \frac{6 \pm 3i\sqrt{12}}{8},
$$
using the factor tree $108 = 9 \cdot 12 = 3 \cdot 3 \cdot 2 \cdot 6 = 3 \cdot 3 \cdot 2 \cdot 3 \cdot 2$, so $\sqrt{108} = 3\sqrt{12}$.

There are no real roots and the parabola $4x^2 - 6x + 9$ opens up (it is sketched as a “U”), so it is never below $0$.
:::
:::
