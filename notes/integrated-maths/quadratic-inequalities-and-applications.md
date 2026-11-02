---
course: integrated-maths
chapter: 9
section: 9.7
title: Quadratic Inequalities and Applications
status: incomplete
---

A quadratic inequality is solved by finding where the parabola lies above or below the $x$-axis. The same ideas, together with the vertex, answer maximum problems about revenue, area and height.

## Quadratic inequalities

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

Completing the square gives a second way to solve an inequality: it turns the quadratic into a bound on an absolute value, as the first two exercises at the end of this page do.

## Applications

### Revenue

**Revenue:** $R(x) = x \cdot P$, where $x$ is the number of items sold and $P$ is the price.

:::example
The price is $P = -\tfrac13 x + 100$. Find the maximum revenue and the price for maximum revenue.

:::solution
$$
R(x) = x\left(-\tfrac13 x + 100\right) = -\tfrac13 x^2 + 100x.
$$
For instance, $R(100) = -\tfrac13(100)^2 + 100^2 = 6{,}666.67$ dollars.

**Domain.** We need $R(x) \ge 0$:
$$
\begin{aligned}
-\tfrac13 x^2 + 100x &\ge 0\\
-x\left(\tfrac13 x - 100\right) &\ge 0,
\end{aligned}
$$
which is zero at $x = 0$ and at $\tfrac13 x - 100 = 0 \implies \tfrac13 x = 100 \implies x = 300$. The parabola opens down, so it is non-negative between these:
$$
\boxed{D: [0, 300]}
$$
This means we do not want to produce more than $300$ items or less than $0$ items, to have positive revenue.

**Max revenue.** The vertex is $\left(-\tfrac{b}{2a}, R\!\left(-\tfrac{b}{2a}\right)\right)$ with $R(x) = -\tfrac13 x^2 + 100x$:
$$
-\frac{100}{2\left(-\tfrac13\right)} = \frac{-100}{-\tfrac23} = \frac{300}{2} = 150 \longrightarrow R(150) = 7500\text{ dollars},
$$
so the vertex is $(150, 7500)$.

![Downward parabola R(x) crossing the x-axis at 0 and 300, with vertex (150, 7500)](/notes/integrated-maths/figures/r2-revenue-parabola.svg)

The price at max revenue is $P(150) = 50$ dollars.
:::
:::

### Area

:::example
Fence for a rectangular area: find the max area available with $3000$ ft of perimeter.

:::solution
![A rectangle with height labelled x and width labelled y](/notes/integrated-maths/figures/r2-fence-rectangle.svg)

**Constraint:**
$$
3000 = 2x + 2y \implies 1500 = x + y \implies y = 1500 - x.
$$
This is the **limiting / constraint equation**.

**Area:** $A = x \cdot y$ is the **maximizing equation**. Substituting the constraint,
$$
A = x(1500 - x) \implies A = 1500x - x^2.
$$
The vertex is at
$$
\left(\frac{-1500}{2(-1)},\ A(x)\right) = \big(750,\ A(750)\big),
$$
where
$$
A(750) = -(750)^2 + 1500(750) = -562{,}500 + 1{,}125{,}000 = 562{,}500.
$$

Thus the vertex is $(750, 562{,}500)$: the maximum area is $562{,}500$ ft² at $x = 750$.

![Downward parabola A(x) = 1500x - x^2 crossing the x-axis at 0 and 1500, with vertex (750, 562,500)](/notes/integrated-maths/figures/r2-area-parabola.svg)
:::
:::

### Height

:::example
$h(x) = \dfrac{-32x^2}{(2000)^2} + x$.

:::solution
Setting
$$
\frac{-32x^2}{(2000)^2} + x = 0
$$
gives where it **lands**. The coefficient $\dfrac{-32}{(2000)^2}$ on $x^2$ gives the max height, at the vertex
$$
\left(\frac{-1}{2\left(\frac{-32}{(2000)^2}\right)},\ \ldots\right).
$$
:::
:::

## Exercises

:::exercise
Find all $x$ such that $6x^2+5x<4$.

:::solution
$6\left(x^2+\frac56x\right)<4$. Completing the square, $x^2+\frac56x+\frac{25/36}{4} = x^2+\frac56x+\frac{25}{144}$, so
$$\left(x+\tfrac5{12}\right)^2-\tfrac{25}{144}<\tfrac46 \;\Rightarrow\; \left(x+\tfrac5{12}\right)^2<\tfrac{96}{144}+\tfrac{25}{144} = \tfrac{121}{144} = \tfrac{11^2}{12^2}.$$
Taking square roots, $\sqrt{\left(x+\frac5{12}\right)^2}<\sqrt{\frac{11^2}{12^2}}$, so $\left|x+\frac5{12}\right|<\frac{11}{12}$:
$$-\tfrac{11}{12}<x+\tfrac5{12}<\tfrac{11}{12} \;\Rightarrow\; -\tfrac43<x<\tfrac12.$$
(Equivalently, $x+\frac5{12}<\pm\frac{11}{12}$ gives $x<\frac{\pm11-5}{12}$: $x<\frac6{12} = \frac12$ and $x>-\frac{16}{12} = -\frac43$.)
:::
:::

:::exercise
Find all $x$ such that $x^2+50x-2079\ge0$.

:::solution
$$x^2+625+50x\ge2079+625 \;\Rightarrow\; (x+25)^2\ge2704 \;\Rightarrow\; |x+25|\ge52 \;\Rightarrow\; x+25\le-52 \text{ or } x+25\ge52,$$
so $\boxed{x\le-77 \text{ or } x\ge27}$.

:::
:::

:::exercise
:::solution
Price $50$ (value at a given $x$: $50+x$); $20000$ tickets per game; each one-dollar increase loses 100 tickets, so the tickets sold are
$$f(x) = 20000-100x = -100(x-200),$$
which is $0$ at $x = 200$. At $x = 0$ the revenue is $1000000$. We want
$$1000000 < f(x)(50+x) = (20000-100x)(50+x) = 100(200-x)(50+x) = 100(-x^2+150x+10000),$$
$$10000 < -x^2+150x+10000 \;\Rightarrow\; 0 < -x^2+150x \;\Rightarrow\; x(x-150)<0 \;\Rightarrow\; \boxed{0<x<150}.$$

:::
:::
