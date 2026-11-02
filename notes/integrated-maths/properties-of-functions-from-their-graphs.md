---
course: integrated-maths
chapter: 8
section: 8.3
title: Properties of Functions from Their Graphs
---

What can be read off a graph: values, intercepts, domain and range, symmetry, where the function rises and falls, its extrema, and its average rate of change.

## Points, intercepts, domain and range

![Graph of f on [-6,11] with labelled points, the line y = 2, and the sign of f marked on the x-axis](/notes/integrated-maths/figures/r1-features-graph.svg)

- Find $f(0) = 5$; $(0,5)$.
- $f(-6) = -3$; $(-6,-3)$.
- Is $f(3)$ pos/neg? **Positive**. $f(8)$: **negative**.
- For what $x$ is $f(x) = 0$? $\{-4, 6, 10\}$; $x = -4, 6, 10$. (That’s finding all the $x$-intercepts.)
- For what $x$ is $f(x) > 0$? $-4 < x < 6$ and $10 < x \le 11$, so $f(x) > 0$ on $(-4,6) \cup (10,11]$.
- For what $x$ is $f(x) < 0$? $-6 \le x < -4$ and $6 < x < 10$, so $f(x) < 0$ on $[-6,-4) \cup (6,10)$.

- Domain: $[-6,11]$, $D: \{x \mid -6 \le x \le 11\}$.
- Range: $[-3,5]$, $R: \{y \mid -3 \le y \le 5\}$.

- $x$-intercepts: $(-4,0)$, $(6,0)$, $(10,0)$.
- $y$-intercepts: $(0,5)$.
- How many times does $y = 2$ cross the graph? **Twice**: once at $x = -3$ and once at $x = 5$.
- For what $x$ does $f(x) = 3$? $(-2,3)$ and $(4,3)$, so $x = -2, 4$.
- For what $x$ does $f(x) = -3$? $(-6,-3)$ and $(8,-3)$, so $x = -6, 8$.

![Four graphs (a) to (d) for reading off domain and range](/notes/integrated-maths/figures/r1-domain-range-graphs.svg)

- (a) $D: \{x \mid -\pi \le x \le \pi\}$, $[-\pi,\pi]$. $R: \{y \mid -1 \le y \le 1\}$, $[-1,1]$.
- (b) $D: \{x \mid \text{all real numbers}\}$, $(-\infty,\infty)$. $R: \{y \mid 0 < y < \infty\}$, $(0,\infty)$.
- (c) $D: \{x \mid 0 \le x < 4\}$, $[0,4)$. $R: \{y \mid 0 \le y < 5\}$, $[0,5)$.
- (d) $D: \{x \mid 0 < x < 7\}$, $(0,7)$. $R: \{y \mid -\infty < y < 12\}$, $(-\infty,12)$.

The same questions for a function given by a formula:

:::example
$f(x) = \dfrac{x+2}{x-6}$

:::solution
1. $f(1) = -\frac35$; $\left(1,-\frac35\right)$.
2. $f(x) = 2$: find $x$.
   $$\frac{x+2}{x-6} = 2 \;\to\; x + 2 = 2(x-6) \;\to\; x + 2 = 2x - 12 \;\to\; 14 = x.$$
   Check: $\dfrac{14+2}{14-6} = \dfrac{16}{8} = 2$ ✓, so the point is $(14,2)$.
3. Domain: $\{x \mid x \ne 6\}$, $(-\infty,6) \cup (6,\infty)$.
4. $x$-int: set $f(x) = 0$: $\dfrac{x+2}{x-6} = 0 \to x = -2 \to (-2,0)$.
5. $y$-int: set $x = 0$: $f(0) = \dfrac{2}{-6} = -\dfrac13 \to \left(0,-\frac13\right)$.
:::
:::

## Even and odd functions

:::definition
- **Even**: symmetric about the **$y$-axis**: $f(x) = f(-x)$.
- **Odd**: symmetric about the **origin**: $-f(x) = f(-x)$.
:::

![Four graphs: (a) even, (b) odd, (c) neither, (d) odd](/notes/integrated-maths/figures/r1-even-odd-graphs.svg)

- (a) **Even** $f(x)$: reflect across the $y$-axis $=$ even. $D: [-4,4]$, $R: [0,3]$.
- (b) **Odd** $f(x)$: rotate $180^\circ$ $=$ odd. $D: (-\infty,\infty)$, $R: (-\infty,\infty)$.

- (c) **Neither**. $D: (-\infty,\infty)$, $R: (0,\infty)$.
- (d) **Odd** $f(x)$: rotate $180^\circ$. $D: (-\infty,0) \cup (0,\infty)$, $R: (-\infty,0) \cup (0,\infty)$.

:::note
**Even** $f(x)$ make **opposite** inputs have the **same** outputs (ex: $f(1) = 2$ and $f(-1) = 2$).

**Odd** $f(x)$ make **opposite** inputs have the **opposite** outputs (ex: $f(1) = 2$ and $f(-1) = -2$).
:::

:::example
$f(x) = 2x^4 - x^2$

:::solution
$$f(-x) = 2(-x)^4 - (-x)^2 = 2x^4 - x^2,$$

so $f(-x) = f(x)$: **even function**.
:::
:::

:::example
$F(x) = \dfrac{x^2+3}{x^2-1}$

:::solution
$$F(-x) = \frac{x^2+3}{x^2-1} = F(x):$$

**even function**.
:::
:::

:::example
$g(x) = \dfrac{x}{x^2-1}$

:::solution
$$g(-x) = \frac{-x}{x^2-1} = -\frac{x}{x^2-1} = -g(x):$$

**odd function**.
:::
:::

:::example
$G(x) = \sqrt{x}$

:::solution
**Neither.** $\sqrt{x} = 2$ for an input like $x = 4$, but then $\sqrt{-x}$ is a complex # / DNE, so $G(-x)$ can’t equal $G(x)$ or $-G(x)$.
:::
:::

:::example
$h(x) = 3x^3 + 5$

:::solution
$$h(-x) = 3(-x)^3 + 5 = -3x^3 + 5.$$

**But**: $-3x^3 + 5 \to -(3x^3 - 5)$, which is not $-h(x) = -(3x^3 + 5)$ either. Thus **neither**. With numbers:

$$3(2)^3 + 5 = 24 + 5 = 29, \qquad 3(-2)^3 + 5 = -24 + 5 = -19.$$
:::
:::

:::example
$H(x) = \dfrac{-x^3}{3x^2-9}$

:::solution
$$H(x) = \frac{-x^3}{3x^2-9} \to -\frac{x^3}{3x^2-9}$$

$$H(-x) = \frac{-(-x)^3}{3x^2-9} \to +\frac{x^3}{3x^2-9} = -H(x),$$

so $H$ is an **odd function**.
:::
:::

## Increasing and decreasing

:::definition
**Increasing**: for $x_1 < x_2$, $f(x_1) < f(x_2)$. From left to right, the graph **climbs**.

**Decreasing**: for $x_1 < x_2$, $f(x_1) > f(x_2)$. From left to right, the graph **falls**.
:::

:::note
These are all given by **open** intervals on the **$x$-axis**.

- No $\ge, \le, =$; only $<, >$.
- No $[\ ,\ ]$; only $(\ ,\ )$.
:::

![Four graphs (a) to (d) with their rising and falling stretches marked on the x-axis](/notes/integrated-maths/figures/r1-incr-decr-graphs.svg)

- (a) Falling on $(-4,-3)$, rising on $(-3,0)$, falling on $(0,3)$, rising on $(3,4)$.
  INC: $(-3,0) \cup (3,4)$. DEC: $(-4,-3) \cup (0,3)$.
  These are **not coordinates**: they are intervals.
- (b) INC: $(-2,2)$. DEC: $(-\infty,-2) \cup (2,\infty)$.

- (c) INC: $(-2,0) \cup (2,\infty)$. DEC: $(-\infty,-2) \cup (0,2)$.
- (d) INC: $(0,\infty)$. DEC: N/A (no fall).

## Extrema

:::definition Local/relative max
On an open interval around $c$, if $f(x) \le f(c)$, then $c$ is a **local max**.

It is where the function changes from **increasing to decreasing**.
:::

:::definition Local/relative min
On an open interval around $c$, if $f(x) \ge f(c)$, then $c$ is a **local min**.

It is where the function changes from **decreasing to increasing**.
:::

:::note
Local min and max **never** occur at endpoints.
:::

:::definition
**Absolute maximum**: the highest output on the graph.

**Absolute minimum**: the lowest output on the graph.
:::

:::note
Every continuous function on a closed interval $[\ ,\ ]$ will have an abs. max and an abs. min.

Abs. max and min **can** occur at endpoints.
:::

![Two graphs (a) and (b) for finding local and absolute extrema](/notes/integrated-maths/figures/r1-extrema-graphs-1.svg)

| Graph | LMIN | LMAX | AMIN | AMAX |
|---|---|---|---|---|
| (a) | $-1$ at $(-1,-1)$ | $5$ at $(3,5)$ | $-1$ at $(-1,-1)$ | $5$ at $(3,5)$ |
| (b) (not a cont. function) | none | none | $-3$ at $(0,-3)$ | none |

For (b): remember LMIN and LMAX **cannot** be at endpoints.

![Four more graphs (c) to (f) for finding local and absolute extrema](/notes/integrated-maths/figures/r1-extrema-graphs-2.svg)

| Graph | LMIN | LMAX | AMIN | AMAX |
|---|---|---|---|---|
| (c) | $2$ at $(-1,2)$ | $4$ at $(2,4)$ | $1$ at $(5,1)$ | $5$ at $(-4,5)$ |
| (d) | $1$ at $(-1,1)$ | $4$ at $(2,4)$ | none | $4$ at $(2,4)$ |
| (e) | $0$ at $(-2,0)$ **and** $1$ at $(3,1)$ | $5$ at $(0,5)$ | $0$ at $(-2,0)$ | none |
| (f) | none | none | none | none |

For (d): AMIN is none because the graph goes to $-\infty$, but $-\infty$ is not a value it reaches.

## Average rate of change

:::definition
$$\text{Avg. rate of change} = \frac{f(b) - f(a)}{b - a}$$
:::

:::note
The avg. R.O.C. is really just **slope**.
:::

![Secant line through (a, f(a)) and (b, f(b)) on an increasing curve, with run b - a and rise f(b) - f(a)](/notes/integrated-maths/figures/r1-avg-rate-of-change.svg)

:::example
$f(x) = x^2 - 2x$. Find the avg. R.O.C. from $x = 3$ to $x = 5$.

:::solution
We need $(3,\,?)$ and $(5,\,?)$, so plug into $f(x)$:

$$(3)^2 - 2(3) = 9 - 6 = 3, \qquad (5)^2 - 2(5) = 25 - 10 = 15.$$

This gives $(3,3)$ and $(5,15)$, with $a = 3$, $f(a) = 3$, $b = 5$, $f(b) = 15$. Then

$$\text{Avg. R.O.C.} = \frac{(15) - (3)}{(5) - (3)} = \frac{12}{2} = \boxed{6}.$$

Thus the avg. rate of change is $6$ $\left(\dfrac{\text{distance}}{\text{time}}\right)$.

Additionally, with $y - y_1 = m(x - x_1)$:

$$y - 3 = 6(x - 3) \;\to\; y = 6x - 15.$$
:::
:::
