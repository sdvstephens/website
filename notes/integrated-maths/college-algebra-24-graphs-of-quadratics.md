---
course: integrated-maths
chapter: 8
section: 24
title: Graphs of Quadratics
source-pages: 1-4
---

For $f(x) = ax^2 + bx + c$: if $a > 0$ the parabola opens up, and if $a < 0$ it opens down.

![Two parabolas: the one labelled a>0 opens upward, the one labelled a<0 opens downward](/notes/integrated-maths/figures/r2-parabola-direction.svg)

- **$y$-intercept:** $(0, c)$.
- **$x$-intercepts:** solve $ax^2 + bx + c = 0$.
- **Vertex:** $\left(-\dfrac{b}{2a},\ f\!\left(-\dfrac{b}{2a}\right)\right)$, or complete the square for **vertex form**.

:::example
Graph $f(x) = 2x^2 + 8x + 5$.

:::solution
1. **Vertex:** $(-2, -3)$, since $\dfrac{-8}{2(2)} = \dfrac{-8}{4} = -2$ and $f(-2) = -3$.
2. **$y$-intercept:** $(0, 5)$, since $f(0) = 5$.
3. **$x$-intercepts:** solve $2x^2 + 8x + 5 = 0$:
$$
x = \frac{-8 \pm \sqrt{(8)^2 - 4(2)(5)}}{2(2)} = \frac{-8 \pm \sqrt{64 - 40}}{4} \longrightarrow \frac{-8 \pm \sqrt{24}}{4},
$$
so $x_1 \approx -3.22$ and $x_2 \approx -0.78$.

**Vertex form, by completing the square** (X: top $4$, sides $2$ and $2$, bottom $4$):
$$
\begin{aligned}
f(x) &= 2x^2 + 8x + 5\\
f(x) &= 2(x^2 + 4x + 4) - 8 + 5\\
f(x) &= +2(x+2)^2 - 3.
\end{aligned}
$$
Reading it off: the $+$ in front means the parabola opens **up**, the $2$ makes it **narrow**, $(x+2)$ shifts it **left 2**, and $-3$ shifts it **down 3**.

The $x$-intercepts from vertex form:
$$
\begin{aligned}
2(x+2)^2 - 3 &= 0\\
2(x+2)^2 &= 3\\
x + 2 &= \pm\sqrt{\tfrac32}\\
x &= \pm\sqrt{\tfrac32} - 2\\
x &= \pm\frac{\sqrt6}{2} - 2.
\end{aligned}
$$

![Graph of f(x) = 2x^2 + 8x + 5: an upward parabola with vertex (-2,-3), y-intercept (0,5) and x-intercepts near -3.22 and -0.78](/notes/integrated-maths/figures/r2-graph-2x2p8xp5.svg)
:::
:::

:::example
Graph $g(x) = -2x^2 - 4x + 2$.

:::solution
1. **Vertex:** $(-1, 4)$. Using $\left(-\tfrac{b}{2a}, f\!\left(-\tfrac{b}{2a}\right)\right)$:
$$
\frac{-(-4)}{2(-2)} = \frac{4}{-4} = -1 \longrightarrow -2(-1)^2 - 4(-1) + 2 = 4.
$$
Completing the square instead (X: top $2$, sides $1$ and $1$, bottom $1$):
$$
\begin{aligned}
-2x^2 - 4x + 2 &= 0\\
-2(x^2 + 2x - 1) &= 0\\
-2(x+1)^2 + 4 &= 0,
\end{aligned}
$$
so the graph is shifted left $1$ and up $4$.

2. **$y$-intercept:** $(0, 2)$.
3. **$x$-intercepts:** $x_1 = -1 + \sqrt2 \approx 0.41$ and $x_2 = -1 - \sqrt2 \approx -2.41$. For $-2x^2 - 4x + 2 = 0$ the X (top $-4$, bottom $-4$) does not factor nicely, so use the formula:
$$
x = \frac{-(-4) \pm \sqrt{(-4)^2 - 4(-2)(2)}}{2(-2)} = \frac{4 \pm \sqrt{32}}{-4} = \frac{4 \pm 4\sqrt2}{-4} = -1 \pm \sqrt2.
$$
Checking: $\sqrt2 - 1 \approx 0.41$ and $-\sqrt2 - 1 \approx -2.41$. From vertex form:
$$
-2(x+1)^2 + 4 = 0 \implies (x+1)^2 = \frac{-4}{-2} = 2 \implies x = \pm\sqrt2 - 1.
$$

![Graph of g(x) = -2x^2 - 4x + 2: a downward parabola with vertex (-1,4), y-intercept (0,2) and x-intercepts near -2.41 and 0.41](/notes/integrated-maths/figures/r2-graph-m2x2m4xp2.svg)
:::
:::

:::example
Graph $f(x) = -4x^2 - 4x - 1$.

:::solution
For the vertex: $\dfrac{-(-4)}{2(-4)} = \dfrac{4}{-8} = -\dfrac12$, and
$$
-4\left(-\tfrac12\right)^2 - 4\left(-\tfrac12\right) - 1 = -1 + 2 - 1 = 0.
$$
1. **Vertex:** $\left(-\tfrac12, 0\right)$.
2. **$y$-intercept:** $(0, -1)$.
3. **$x$-intercept:** $x = -\tfrac12$ (the vertex sits on the $x$-axis).

![Graph of f(x) = -4x^2 - 4x - 1: a narrow downward parabola touching the x-axis at its vertex (-1/2, 0) and passing through (0,-1) and (-1,-1)](/notes/integrated-maths/figures/r2-graph-m4x2m4xm1.svg)
:::
:::

:::example
Graph $g(x) = 3x^2 + 2x + 5$.

:::solution
- **Vertex:** $-\dfrac{2}{2(3)} = -\dfrac13 \longrightarrow 3\left(-\tfrac13\right)^2 + 2\left(-\tfrac13\right) + 5 = \tfrac13 - \tfrac23 + 5 = \tfrac{14}{3}$, so the vertex is $\left(-\tfrac13, \tfrac{14}{3}\right)$.
- **$x$-intercepts:** **none**.
- **$y$-intercept:** $(0, 5)$.

![Graph of g(x) = 3x^2 + 2x + 5: an upward parabola with vertex (-1/3, 14/3) and y-intercept (0,5), lying entirely above the x-axis](/notes/integrated-maths/figures/r2-graph-3x2p2xp5.svg)
:::
:::

:::example
Find a parabola with a vertex of $(1, -5)$ and a $y$-intercept of $-3$.

:::solution
Find the function in the form $f(x) = a(x+h)^2 + k$. We know the $y$-intercept is $-3$, $f(1) = -5$, and $-\tfrac{b}{2a} = 1$.

The vertex $(1, -5)$ gives $(x-1)^2 - 5$ (with $a = 1$ this has $b = -2$). To get the right $y$-intercept, put in $(0, -3)$:
$$
\begin{aligned}
a(0-1)^2 - 5 &= -3\\
a - 5 &= -3\\
a &= 2.
\end{aligned}
$$
So
$$
\begin{aligned}
f(x) &= 2(x-1)^2 - 5\\
&= 2(x^2 - 2x + 1) - 5\\
&= 2x^2 - 4x + 2 - 5\\
&= 2x^2 - 4x - 3.
\end{aligned}
$$
:::
:::
