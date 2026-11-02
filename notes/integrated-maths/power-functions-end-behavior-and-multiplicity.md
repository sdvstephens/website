---
course: integrated-maths
chapter: 10
section: 10.2
title: Power Functions, End Behavior and Multiplicity
---

The simplest polynomials are the single powers $ax^n$. Their shapes describe what any polynomial does far from the origin, and the multiplicity of each zero describes what the graph does where it meets the $x$-axis.

## Power functions

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

## End behavior

The **leading term** decides what the graph does as $x \to \pm\infty$.

:::example
$f(x) = 3x^5 - 2x^2 + 1$.

:::solution
The leading term is $3x^5$, so $f(x) \approx 3x^5$ as $x \to \pm\infty$: down on the left, up on the right. In the middle is where the things happen.
:::
:::

:::example
$g(x) = -2x^3 - 5x^4 + 7$.

:::solution
Reorder: $-5x^4 - 2x^3 + 7$. The leading term is $-5x^4$, so $g(x) \approx -5x^4$ when $x \to \infty$ and $x \to -\infty$: both ends go down, with the interesting part in the middle.
:::
:::

![End behavior sketches: f(x) = 3x^5 - 2x^2 + 1 falls to the left and rises to the right with wiggles in the middle; g(x) = -5x^4 - 2x^3 + 7 falls on both ends with a bump in the middle](/notes/integrated-maths/figures/r2-end-behavior.svg)

:::note
If a polynomial has degree $n$, then there will be **at most** $n - 1$ turning points (local max/min).
:::

:::note
**All** polynomials create continuous curves.
:::

## Multiplicity

A factor can repeat. $(x-1)^3$ has roots $1$, $1$, and $1$ $\iff$ $1$ is a triple root of $(x-1)^3$ $\iff$ the root $1$ of $(x-1)^3$ has **multiplicity** $3$.

:::example
Find the zeros of $f(x) = 7(x)^2(x-2)\left(x+\tfrac12\right)^4(x+3)^5 = 0$ and their multiplicities.

:::solution
Here $7x^2 = 7(x)^2$.

| Factor | Zero | Repeats | Multiplicity |
|---|---|---|---|
| $x^2 = 0$ | $x = 0$ | 2 times | $2$ (even) |
| $(x-2) = 0$ | $x = 2$ | 1 time | $1$ (odd) |
| $\left(x+\tfrac12\right)^4 = 0$ | $x = -\tfrac12$ | 4 times | $4$ (even) |
| $(x+3)^5 = 0$ | $x = -3$ | 5 times | $5$ (odd) |

These are all $x$-intercepts. Adding up the multiplicities, $n = 12$ in $a_n x^n$: multiplying out the leading parts, $7 \cdot x^2 \cdot x^1 \cdot x^4 \cdot x^5 = 7x^{12}$, so we know the end behavior is that of $7x^{12}$.

(Aside: the leading $7$ is not a zero. Something like $0x^3 = 0$ can’t be solved by dividing, since that gives $\tfrac00$, which does not exist.)
:::
:::

All roots/zeros **intersect** the $x$-axis, **but**:

- If a root has **even multiplicity**, the graph will **bounce // touch**, and **never** cross.
- If a root has **odd multiplicity**, the graph will **cross**.

For example, at $x = 2$ (multiplicity $1$ above), look just to either side: $1.9999 - 2 = -0.0001$, so the graph is **below** the axis, and $2.0001 - 2 = +0.0001$, so it is **above**: **crossing**.

![Left: two curves touching the x-axis and turning back (even multiplicity: bounce or touch, never cross). Right: a curve crossing the x-axis at x = 2, with a zoomed number line marking 1.9999, 2 and 2.0001 (odd multiplicity: cross)](/notes/integrated-maths/figures/r2-mult-touch-cross.svg)
