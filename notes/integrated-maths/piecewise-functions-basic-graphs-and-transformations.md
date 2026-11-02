---
course: integrated-maths
chapter: 8
section: 8.4
title: Piecewise Functions, Basic Graphs and Transformations
---

Graphing functions defined in pieces, the basic graphs to know by heart, and how shifts, stretches and reflections move them.

## Piecewise functions

:::example
$$f(x) = \begin{cases} x^3, & x < 1 \\ 3x - 2, & x \ge 1 \end{cases}$$

:::solution
$$f(-1) = -1 \;\; (-1,-1), \qquad f(0) = 0 \;\; (0,0), \qquad f(1) = 1 \;\; (1,1), \qquad f(3) = 7 \;\; (3,7).$$

![Graph of the piecewise function x^3 for x < 1 and 3x - 2 for x >= 1](/notes/integrated-maths/figures/r1-piecewise-1.svg)

The dotted line at $x = 1$ is **not** a vertical asymptote; it marks where the rule switches from $x^3$ to $3x - 2$.
:::
:::

:::example
$$f(x) = \begin{cases} x^2, & x < 0 \\ 2, & x = 0 \\ 2x + 1, & x > 0 \end{cases}$$

:::solution
$$f(-2) = 4 \;\; (-2,4), \qquad f(0) = 2 \;\; (0,2), \qquad f(2) = 5 \;\; (2,5).$$

![Graph of the piecewise function x^2 for x < 0, 2 at x = 0, 2x + 1 for x > 0](/notes/integrated-maths/figures/r1-piecewise-2.svg)
:::
:::

:::example
$$f(x) = \begin{cases} x + 3, & -4 \le x < -2 \\ -2x - 3, & x \ge -2 \end{cases}$$

:::solution
![Graph of the piecewise function x + 3 on [-4,-2) and -2x - 3 for x >= -2](/notes/integrated-maths/figures/r1-piecewise-3.svg)
:::
:::

## Functions you need to know

![The eight basic graphs: constant, x^2, x, |x|, x^3, square root, cube root and 1/x](/notes/integrated-maths/figures/r1-parent-functions.svg)

For $f(x) = \dfrac1x$: the $y$-axis is a **vertical asymptote** and the $x$-axis is a **horizontal asymptote**.

## Shifts, stretches and reflections

![Graphs of x^2 + 3, |x + 2|, (x + 1)^3 - 1 and sqrt(x - 2) + 3](/notes/integrated-maths/figures/r1-transformations-shifts.svg)

| | Formula | Effect |
|---|---|---|
| **Vertical** | $f(x) + k$ | shift up |
| | $f(x) - k$ | shift down |
| **Horizontal** | $f(x+h)$ | shift left |
| | $f(x-h)$ | shift right |

**Vertical stretch/compression**: $y = a f(x)$.

- $a > 1$: stretch: the graph grows and narrows.
- $0 < a < 1$: compression: the graph shrinks and widens.

**Horizontal stretch/compression**: $y = f(ax)$.

- $a > 1$: horizontal compression: the graph narrows.
- $0 < a < 1$: horizontal stretch: the graph widens.

**Reflection**:

- $y = -f(x)$ reflects on the $x$-axis.
- $y = f(-x)$ reflects on the $y$-axis.

Examples: $f(x) = 2x^2$, with key points $(1,2)$, $(0,0)$, $(-1,2)$; $f(x) = (3x)^2$; $f(x) = -\sqrt[3]{x}$; $f(x) = \frac12 x^3$, with key points $\left(1,\frac12\right)$, $(0,0)$, $\left(-1,-\frac12\right)$; and $f(x) = \sqrt{-x}$.

![Graphs of 2x^2, -cbrt(x), (1/2)x^3 and sqrt(-x)](/notes/integrated-maths/figures/r1-transformations-stretch.svg)

:::note
Things within parentheses have **counter-intuitive** effects. Ex: $f(x+h)$ shifts **left**, and $f(x) = (5x)^2$ shrinks horizontally and narrows.
:::

## Combining transformations

Several transformations at once, applied to the key points of the basic graph.

:::example
$$f(x) = -\frac12\,|x - 3| + 2$$

:::solution
The transformations of $|x|$:

1. Up 2 units.
2. Right 3 units.
3. Vertical compression $\left(\frac12\right)$.
4. Reflection about the $x$-axis.

Key points (multiply each $y$ by $-\frac12$):

$$(1,1) \to \left(1,-\tfrac12\right), \qquad (0,0) \to (0,0), \qquad (-1,1) \to \left(-1,-\tfrac12\right).$$

Then shift right 3 units and up 2 units:

![Graph of -(1/2)|x - 3| + 2 with vertex (3,2)](/notes/integrated-maths/figures/r1-transform-abs.svg)
:::
:::

:::example
$$g(x) = -\frac13(x+1)^3 - 1$$

:::solution
1. Down 1.
2. Left 1.
3. Vertical compression.
4. Reflection about the $x$-axis.

Key points:

$$(-1,-1) \to \left(-1,\tfrac13\right), \qquad (0,0) \to (0,0), \qquad (1,1) \to \left(1,-\tfrac13\right).$$

![Graph of -(1/3)(x + 1)^3 - 1, centred at (-1,-1)](/notes/integrated-maths/figures/r1-transform-cubic.svg)
:::
:::

:::example
$$f(x) = \frac{3}{x-2} + 1$$

:::solution
1. Up 1.
2. Right 2.
3. Vertical stretch.

Key points:

$$(-1,-1) \to (-1,-3) \to (1,-2), \qquad (1,1) \to (1,3) \to (3,4).$$

The VA at $x = 0$ moves to $x = 2$, and the HA at $y = 0$ moves to $y = 1$.

![Graph of 3/(x - 2) + 1 with asymptotes x = 2 and y = 1](/notes/integrated-maths/figures/r1-transform-reciprocal.svg)
:::
:::

:::example
$$g(x) = 2\sqrt{1-x} + 3$$

:::solution
Rewrite as $g(x) = 2\sqrt{-(x-1)} + 3$.

1. Up 3.
2. Right 1.
3. Vertical stretch.
4. Reflection about the $y$-axis.

Key points:

$$(0,0) \to (0,0) \to (1,3), \qquad (1,1) \to (-1,2) \to (0,5).$$

![Graph of 2 sqrt(1 - x) + 3, starting at (1,3) and running left](/notes/integrated-maths/figures/r1-transform-sqrt.svg)
:::
:::
