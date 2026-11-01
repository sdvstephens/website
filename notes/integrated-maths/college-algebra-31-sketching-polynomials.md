---
course: integrated-maths
chapter: 8
section: 31
title: Sketching Polynomials
source-pages: 1-3
---

To sketch a polynomial: (1) the leading term, which gives the degree, the max number of turning points and the end behavior; (2) the $y$-intercept; (3) the $x$-intercepts with their multiplicities.

:::example
$h(x) = -2(x-7)^1\left(x+\tfrac12\right)^2(x+4)^3(x^2+9)^2$.

:::solution
The zeros are $x = 7$, $x = -\tfrac12$, $x = -4$, and $x = \pm 3i$ (not real numbers). The exponents add up to $1 + 2 + 3 + 4 = 10$ (the $(x^2+9)^2$ contributes $x^4$), so the end behavior is $\approx -2x^{10}$.

1. **Leading term:** $-2x^{10}$.
   - **Degree:** $10$.
   - **Max turning points:** $9$.
   - **End behavior:** like $-2x^{10}$: down on both ends.
2. **$y$-intercept:** $(0, 18144)$. Remember: this is obtained via $h(0) = -2(0-7)\cdots$, that is,
$$
h(0) = -2(-7)\left(\tfrac12\right)^2(4)^3(9)^2 = 18144.
$$
3. **$x$-intercepts:** $(7, 0)$ with multiplicity $1$, so it **crosses**; $\left(-\tfrac12, 0\right)$ with multiplicity $2$, so it **bounces**; $(-4, 0)$ with multiplicity $3$, so it **crosses**.
:::
:::

:::note
Max turning points $= n - 1$, where $a_n x^n$ is the leading term.
:::

:::example
Sketch $f(x) = x^2(x-3)$.

:::solution
1. Leading term $x^3$.
   - **Degree:** $3$.
   - **Max turning points:** $2$.
   - **End behavior:** down on the left, up on the right.
2. **$y$-intercept:** $(0, 0)$.
3. **$x$-intercepts:** $(0, 0)$ with multiplicity $2$, so it **bounces**; $(3, 0)$ with multiplicity $1$, so it **crosses**.

Two more points: $(1, -2)$ and $(2, -4)$.

![Graph of f(x) = x^2(x-3): it rises from the lower left, touches the x-axis at the origin and turns back down, passes through (1,-2) and (2,-4), then crosses the x-axis at 3 and rises](/notes/integrated-maths/figures/r2-sketch-x2xm3.svg)
:::
:::

:::example
Sketch $f(x) = -2(x+2)(x-2)^3$.

:::solution
The leading term is $-2 \cdot x^1 \cdot x^3 = -2x^4$.

1. **Leading term:** $-2x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** down on both ends.
2. **$y$-intercept:** $(0, 32)$.
3. **$x$-intercepts:** $-2$ with multiplicity $1$, so it **crosses**; $2$ with multiplicity $3$, so it **crosses** (flattening as it does).

![Graph of f(x) = -2(x+2)(x-2)^3: it rises from the lower left, crosses the x-axis at -2, peaks near x = -1, passes through (0,32), flattens as it crosses the x-axis at 2, and falls to the lower right](/notes/integrated-maths/figures/r2-sketch-m2xp2xm2cubed.svg)

:::
:::

:::example
Sketch $h(x) = (x+4)^2(1-x)$.

:::solution
Rewrite: $h(x) = -(x+4)^2(x-1)$.

1. **Leading term:** $-x^3$.
   - **Degree:** $3$.
   - **Max turning points:** $2$.
   - **End behavior:** up on the left, down on the right.
2. **$y$-intercept:** $(0, 16)$.
3. **$x$-intercepts:** $(-4, 0)$ and $(1, 0)$. The zero $-4$ has multiplicity $2$, so it **bounces**; $1$ has multiplicity $1$, so it **crosses**.

![Graph of h(x) = -(x+4)^2(x-1): it comes down from the upper left, touches the x-axis at -4 and turns back up, passes through (0,16), then crosses the x-axis at 1 and falls](/notes/integrated-maths/figures/r2-sketch-mxp4sqxm1.svg)
:::
:::

:::example
$f(x) = -5x(x^2 - 4)(x+3)$.

:::solution
Factor: $f(x) = -5x(x-2)(x+2)(x+3)$.

1. Leading term $-5x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** down on both ends.
2. **$y$-intercept:** $(0, 0)$.
3. **$x$-intercepts:** $(2, 0)$, $(-2, 0)$, $(-3, 0)$, $(0, 0)$, each with multiplicity $1$, so the graph **crosses** at all four.

:::
:::

:::example
$g(x) = 2(x-1)^2(x^2 - 16)$.

:::solution
Factor: $g(x) = 2(x-1)^2(x+4)(x-4)$.

1. Leading term $2x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** up on both ends.
2. **$y$-intercept:** $(0, -32)$, since $2(-1)^2(4)(-4) = 2 \cdot 1 \cdot 4 \cdot (-4) = -32$.
3. **$x$-intercepts:** $(1, 0)$ with multiplicity $2$, so it **bounces**; $(-4, 0)$ and $(4, 0)$ with multiplicity $1$, so it **crosses**.

:::
:::
