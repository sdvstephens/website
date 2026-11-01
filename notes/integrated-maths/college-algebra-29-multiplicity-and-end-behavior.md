---
course: integrated-maths
chapter: 8
section: 29
title: Multiplicity and End Behavior
source-pages: 1
---

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
