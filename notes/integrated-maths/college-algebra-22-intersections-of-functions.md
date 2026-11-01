---
course: integrated-maths
chapter: 8
section: 22
title: Intersections of Functions
source-pages: 1
---

:::example
Find the intersections of $f(x) = x^2 + 6x + 3$ and $g(x) = 3$.

:::solution
$$
\begin{aligned}
x^2 + 6x + 3 &= 3\\
x^2 + 6x &= 0
\end{aligned}
$$
$$
x = \frac{-6 \pm \sqrt{(6)^2 - 4(1)(0)}}{2(1)} = \frac{-6 \pm 6}{2(1)},
\qquad
\frac{-6 + 6}{2} = 0 = x_1, \quad \frac{-6 - 6}{2} = -6 = x_2.
$$
At $x = 0$ and $x = -6$ the functions meet at $(0, 3)$ and $(-6, 3)$.
:::
:::

:::example
Find the intersections of $f(x) = -2x^2 + 1$ and $g(x) = 3x + 2$.

:::solution
$$
\begin{aligned}
-2x^2 + 1 &= 3x + 2\\
-2x^2 - 3x - 1 &= 0
\end{aligned}
$$
$$
x = \frac{+3 \pm \sqrt{(-3)^2 - 4(-2)(-1)}}{2(-2)} = \frac{3 \pm \sqrt1}{-4} = \frac{3 \pm 1}{-4},
$$
using $9 - 8 = 1$. So $x = \frac{3+1}{-4} = -1$ or $x = \frac{3-1}{-4} = -\frac12$.

Checking the $y$-values:
- $x = -1$: $-2(-1)^2 + 1 = -1$ and $3(-1) + 2 = -3 + 2 = -1$.
- $x = -\tfrac12$: $-2\left(-\tfrac12\right)^2 + 1 = -\tfrac12 + 1 = \tfrac12$ and $3\left(-\tfrac12\right) + 2 = -\tfrac32 + \tfrac42 = \tfrac12$.

The intersections are $(-1, -1)$ and $\left(-\tfrac12, \tfrac12\right)$.
:::
:::

:::example
Find the intersections of $f(x) = x^2 - x + 1$ and $g(x) = 2x^2 - 3x - 14$.

:::solution
$$
\begin{aligned}
x^2 - x + 1 &= 2x^2 - 3x - 14\\
x^2 - 2x - 15 &= 0 \implies (x-5)(x+3) = 0
\end{aligned}
$$
(X: top $-2$, bottom $-15$, sides $-5$ and $3$), so $x_1 = 5$ and $x_2 = -3$.

Check $x = 5$: $f(5) = 25 - 5 + 1 = 21$ and $g(5) = 50 - 15 - 14 = 50 - 29 = 21$.
:::
:::

:::note
If finding the intersection of two functions, then set the functions equal.
:::
