---
course: integrated-maths
chapter: 8
section: 28
title: Power Functions
source-pages: 1-3
---

A **power function** has the form $f(x) = ax^n$.

![Graphs of f(x)=x, f(x)=x^2, f(x)=x^3 (with x^5 dashed in blue) and f(x)=x^4, each with the points at x = -1, 0, 1 marked](/notes/integrated-maths/figures/r2-power-functions.svg)

$f(x) = x$ and $f(x) = x^3$ show the shape for all odd $n$; $f(x) = x^2$ and $f(x) = x^4$ show the shape for all even $n$. The blue dashed curve on the $x^3$ graph visualizes $f(x) = x^5$.

| | $f(x) = x^n$, $n$ odd | $f(x) = x^n$, $n$ even |
|---|---|---|
| Key points | $(-1,-1)$, $(0,0)$, $(1,1)$ | $(-1,1)$, $(0,0)$, $(1,1)$ |
| Domain | all real numbers | all real numbers |
| Range | $(-\infty, \infty)$ | $[0, \infty)$ or $(-\infty, 0]$ |
| Symmetry | **odd**: symmetric about the origin | **even**: symmetric about the $y$-axis |

![The key points for x^n: for n odd, (-1,-1), (0,0) and (1,1); for n even, (-1,1), (0,0) and (1,1)](/notes/integrated-maths/figures/r2-power-keypoints.svg)

:::remark
The higher $n$ in $x^n$, the more dramatic the curve is (the more flat it becomes near the origin).
:::

:::example
Graph $G(x) = 3(x+2)^5 - 3$.

:::solution
Key points of $x^5$, stretched by $3$:
$$
(-1,-1) \to (-1,-3), \qquad (0,0) \to (0,0), \qquad (1,1) \to (1,3).
$$
Then the graph is shifted left $2$ and down $3$, so the centre point lands at $(-2,-3)$ and the graph crosses the $x$-axis at $(-1, 0)$.

At $x = 0$: $3(32) - 3 = 93$, giving the point $(0, 93)$.

:::
:::

:::example
Graph $F(x) = 3 - (x-2)^4$.

:::solution
Key points of $x^4$, reflected over the $x$-axis, then shifted right $2$ and up $3$:
$$
\begin{aligned}
(-1, 1) &\to (-1, -1) \to (1, 2),\\
(0, 0) &\to (0, 0) \to (2, 3),\\
(1, 1) &\to (1, -1) \to (3, 2).
\end{aligned}
$$

![Graphs of G(x) = 3(x+2)^5 - 3, flattening at (-2,-3) and crossing the x-axis at (-1,0), and F(x) = 3 - (x-2)^4, a downward U shape with peak (2,3) passing through (1,2) and (3,2)](/notes/integrated-maths/figures/r2-power-transformed.svg)
:::
:::

:::example
Sketch $f(x) = 2x$, $f(x) = -x^3$, $f(x) = -3x^2$ and $f(x) = 7x^4$.

:::solution
![Sketches: 2x is a line through the origin; -x^3 falls from upper left to lower right, flattening at the origin; -3x^2 is a downward parabola with vertex at the origin; 7x^4 is a narrow, flat-bottomed upward U at the origin](/notes/integrated-maths/figures/r2-power-sketches.svg)
:::
:::
