---
course: integrated-maths
chapter: 8
section: 26
title: Quadratic Applications
status: incomplete
source-pages: 1-2
---

## Revenue

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

## Area

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

## Height

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
