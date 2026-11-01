---
course: integrated-maths
chapter: 8
section: 18
title: Quadratics: Factoring
source-pages: 1
---

The small “X” drawn beside each problem is a factoring aid: the number on top is the sum $b$, the number on the bottom is the product $ac$, and the two numbers on the sides multiply to the bottom and add to the top. When $a \neq 1$, each side number is divided by $a$, and the reduced fraction $\tfrac{p}{q}$ gives the factor $(qx + p)$.

![Two X diagrams: for x^2+7x+6 the sides are 6 and 1; for 3x^2+5x+2 the sides are 3/3 and 2/3, giving the factors (x+1) and (3x+2)](/notes/integrated-maths/figures/r2-x-method.svg)

:::example
Solve $f(x) = x^2 + 7x + 6 = 0$.

:::solution
X: $6 \cdot 1 = 6$ and $6 + 1 = 7$. So
$$
(x+6)(x+1) = 0 \implies x_1 = -6, \quad x_2 = -1.
$$
Checking by grouping:
$$
\begin{aligned}
x^2 + x + 6x + 6 &= 0\\
x(x+1) + 6(x+1) &= 0\\
(x+6)(x+1) &= 0.
\end{aligned}
$$
**2 real solutions.**
:::
:::

:::example
Solve $g(x) = 3x(x-4) - 36 = 0$.

:::solution

$$
3x^2 - 12x - 36 = 3(x^2 - 4x - 12) \longrightarrow x^2 - 4x - 12.
$$
X: top $-4$, bottom $-12$, sides $-6$ and $2$. So
$$
(x-6)(x+2) = 0 \implies x_1 = 6, \quad x_2 = -2.
$$
**2 real solutions.**
:::
:::

:::example
Solve $f(x) = -12x + 9 + 4x^2 = 0$.

:::solution
Rearranged: $4x^2 - 12x + 9 = 0$. X: top $-12$, bottom $36$, sides $-6$ and $-6$; dividing each by $4$ gives $-\tfrac{6}{4} = -\tfrac{3}{2}$. So
$$
(4x - 6)\left(x - \tfrac{3}{2}\right) = 0 \longrightarrow x_1 = \tfrac{3}{2}, \quad x_2 = \tfrac{3}{2} \implies x = \tfrac{3}{2}.
$$
Expanding back: $4x^2 - 6x - 6x + \tfrac{18}{2} = 4x^2 - 12x + 9$, since $\tfrac{18}{2} = 9$.

Check $x = \tfrac32$: $\left(\tfrac32\right)\left(\tfrac32\right) = \tfrac94$, so
$$
4\cdot\tfrac94 - 12\left(\tfrac32\right) + 9 = 9 - \tfrac{36}{2} + 9 = 9 - 18 + 9, \qquad -18 + 18 = 0. \checkmark
$$
**1 real solution.**
:::
:::

:::example
Solve $g(x) = x^2 - 5 = 0$.

:::solution
$$
x^2 - \left(\pm\sqrt{5}\right)^2 = 0, \qquad x^2 = 5, \qquad x = \pm\sqrt{5}\ ?
$$
So $x_1 = \sqrt{5}$ and $x_2 = -\sqrt{5}$.
:::
:::

:::example
Solve $h(x) = -2x^2 - 5x + 12 = 0$.

:::solution
X: top $-5$, bottom $(-2)(12) = -24$, sides $-8$ and $3$; dividing each by $-2$ gives $\tfrac{-8}{-2} = 4$ and $\tfrac{3}{-2}$. So
$$
(x+4)(-2x+3) = 0 \implies x_1 = -4, \quad x_2 = \tfrac{3}{2}.
$$
:::
:::

:::example
Solve $g(x) = 3x^2 + 2 + 5x = 0$.

:::solution
Rearranged: $3x^2 + 5x + 2$. X: top $5$, bottom $6$, sides $3$ and $2$; dividing by $3$ gives $\tfrac33 \to (x+1)$ and $\tfrac23 \to (3x+2)$. Splitting the middle term:
$$
\begin{aligned}
3x^2 + 3x + 2x + 2 &= 0\\
3x(x+1) + 2(x+1) &= 0\\
(3x+2)(x+1) &= 0,
\end{aligned}
$$
so $3x + 2 = 0$ or $x + 1 = 0$: $x_1 = -1$, $x_2 = -\tfrac{2}{3}$. **2 real solutions.**
:::
:::
