---
course: integrated-maths
chapter: 8
section: 8.2
title: Functions: Definition, Notation and Domain
---

What a function is, how to tell whether a relation is one, and how to evaluate a function, find its domain and combine it with others.

## Functions

$$y = f(x)$$

Here $y$ is the **dependent variable** and $x$ is the **independent variable**.

:::definition
A **function** is a relationship that matches 1 input to 1 output.

- **Input**: usually the $x$-values.
- **Output**: the $y$ or $f(x)$ values.

An input **never** gives more than 1 output.
:::

For example, matching work hours to pay:

![Mapping diagram from work hours to pay, with the arrow from 30 to 310 crossed out](/notes/integrated-maths/figures/r1-work-hours-mapping.svg)

The dashed arrow from $30$ to $310$ is crossed out: $30$ already goes to $490$, and an input can’t have a second output.

:::note
- **Domain**: $\{25, 53, 30, 40\}$, the set of inputs ($x$’s).
- **Range**: $\{500, 310, 490\}$, the set of outputs ($y$’s).

D: input. R: output.
:::

$$S = \{(-2,16),\ (-1,4),\ (0,3),\ (1,4)\}$$

is a **function**: $x$ does not repeat.

$$R = \{(-2,5),\ (3,9),\ (5,0),\ (-2,6)\}$$

is a **non-function**: $x$ does repeat ($x = -2$ appears twice; that’s the bad one).

Solving each equation for $y$:

- $y = -7x + 5$: **function**.
- $2x - 4y = 8 \;\to\; -4y = 8 - 2x \;\to\; y = \dfrac{8}{-4} - \dfrac{2x}{-4} \;\to\; y = \dfrac12 x - 2$: **function**.
- $2x^2 + 3y^2 = 1 \;\to\; 3y^2 = -2x^2 + 1 \;\to\; y = \pm\sqrt{\dfrac{-2x^2+1}{3}}$: **non-function** (the $\pm$ is the problem).
- $xy + 2y = 3x - 1 \;\to\; y(x+2) = 3x - 1 \;\to\; y = \dfrac{3x-1}{x+2}$: **function**.
- $x^2 - 4y^2 = 1 \;\to\; -4y^2 = 1 - x^2 \;\to\; y = \pm\sqrt{\dfrac{1-x^2}{-4}}$: **non-function**.
- $y = 2x^2 - 5x + 4$: **function**.
- $y = \pm\sqrt{3-2x}$: **non-function**.

## The vertical line test

For $f(x)$’s, **1 input** gives **1 output**. A vertical line picks out one input, so it can’t hit the graph of a function more than once.

![Vertical line test on six pictures: axes, a line, a parabola, a sideways parabola, a circle and a vertical line](/notes/integrated-maths/figures/r1-vertical-line-test.svg)

- (a) Output axis vertical, input axis horizontal; a vertical line stands over one input.
- (b) A line: sweep vertical lines left and right, and each hits it once: **function**.
- (c) A parabola: **function**.
- (d) A sideways parabola: vertical lines hit it twice: **non-function**.
- (e) A circle: **non-function**.
- (f) A vertical line: **non-function**.

## Evaluating functions

In function notation, $y = -7x + 5$ becomes $f(x) = -7x + 5$, and $y = \frac32 x - 1$ becomes $g(x) = \frac32 x - 1$.

To evaluate $f(x)$ for $x = 2$:

$$f(2) = -7(2) + 5 = -9,$$

which gives the point $(2,-9)$.

:::example
$h(x) = -2x^2 + x - 1$

:::solution
$$h(-1) = -4 \quad\to\quad (-1,-4)$$

$$h(-x) = -2x^2 - x - 1$$

$$\begin{aligned}
h(x+1) &= -2(x+1)^2 + (x+1) - 1 \\
&= -2(x^2 + 2x + 1) + x + 1 - 1 \\
&= -2x^2 - 4x - 2 + x + 1 - 1 \\
&= -2x^2 - 3x - 2
\end{aligned}$$
:::
:::

:::example
$f(x) = \sqrt{x^2 - 3x}$

:::solution
$$f(5) = \sqrt{10} \quad\to\quad (5,\sqrt{10})$$

$$f(0) = \sqrt{0} = 0 \quad\to\quad (0,0)$$

$$f(2x) = \sqrt{4x^2 - 6x}$$

$$f(x+k) = \sqrt{(x+k)^2 - 3(x+k)} = \sqrt{x^2 + 2xk + k^2 - 3x - 3k}$$

$$f(1) = \sqrt{(1)^2 - 3(1)} = \sqrt{-2} = \text{DNE}$$

under our real domain (it’s a complex #).
:::
:::

:::example
$g(x) = \dfrac{2x+1}{x-5}$

:::solution
$$g(0) = -\frac15 \quad\to\quad \left(0,-\frac15\right)$$

$$g(x^2) = \frac{2x^2+1}{x^2-5}$$

$$g(5) = \frac{11}{0} = \text{DNE}$$

$$-g(x) = -\frac{2x+1}{x-5}$$
:::
:::

## Difference quotient

:::definition
The **difference quotient** is
$$\frac{f(x+h) - f(x)}{h}.$$
:::

![Line through the points at heights f(x) and f(x+h), a horizontal distance h apart](/notes/integrated-maths/figures/r1-difference-quotient.svg)

:::example
Find the difference quotient of $f(x) = x^2 + 1$.

:::solution
$$f(x+h) = (x+h)^2 + 1 = x^2 + 2xh + h^2 + 1$$

$$\begin{aligned}
\frac{f(x+h) - f(x)}{h} &= \frac{(x^2 + 2xh + h^2 + 1) - (x^2 + 1)}{h} \\
&= \frac{x^2 + 2xh + h^2 + 1 - x^2 - 1}{h} \\
&= \frac{2xh + h^2}{h} \\
&= 2x + h
\end{aligned}$$
:::
:::

## Finding the domain

:::definition
The **domain** is the set of inputs of a function that give a **real** number output.
:::

Three problem areas:

1. **Square roots** $\sqrt{\phantom{x}}$: the inside must be **nonnegative** (positive or $0$).
2. **Denominators**: **cannot** equal $0$.
3. **Logs**, which you will learn later.

:::example
$f(x) = \sqrt{5 - 4x}$

:::solution
We need $5 - 4x \ge 0$:

$$-4x \ge -5 \quad\to\quad \frac{-4x}{-4} \le \frac{-5}{-4} \quad\to\quad x \le \frac54.$$

Domain: $\left\{x \mid x \le \frac54\right\}$, or $D: \left(-\infty, \frac54\right]$.
:::
:::

:::example
$g(t) = \dfrac{5t}{t^3 - 16t}$

:::solution
We need $t^3 - 16t \ne 0$. Find where it is $0$:

$$t^3 - 16t = 0 \quad\to\quad t(t^2 - 16) = 0 \quad\to\quad t(t-4)(t+4) = 0,$$

so $t = 4$, $t = -4$, or $t = 0$. Thus

$$D: \{t \mid \text{all real numbers except } t = 0,\ t = 4,\ t = -4\},$$

or $D: (-\infty,-4) \cup (-4,0) \cup (0,4) \cup (4,\infty)$.
:::
:::

:::example
$f(x) = 3x^2 - 2x + 4$

:::solution
$D: \{x \mid \text{all real numbers}\}$, or $(-\infty,\infty)$.
:::
:::

:::example
$g(x) = \dfrac{5}{\sqrt{x-8}}$

:::solution
$$x - 8 > 0 \quad\to\quad x > 8$$

$D: \{x \mid x > 8\}$, or $D: (8,\infty)$.
:::
:::

:::example
$h(x) = \dfrac{\sqrt{3x-15}}{x-4}$

:::solution
We need $x \ne 4$ and $x \ge 5$.

$$D: \{x \mid x \ge 5 \text{ and } x \ne 4\} \;\to\; \{x \mid x \ge 5\},$$

or $D: [5,\infty)$.
:::
:::

:::example
$h(x) = \dfrac{\sqrt{3x-12}}{x-4}$

:::solution
We need $x \ge 4$ and $x \ne 4$, so $D: \{x \mid x > 4\}$.
:::
:::

:::example
$h(x) = \dfrac{\sqrt{3x-9}}{x-4}$

:::solution
We need $x \ge 3$ and $x \ne 4$, so

$$D: \{x \mid x \ge 3 \text{ and } x \ne 4\},$$

or $[3,4) \cup (4,\infty)$.
:::
:::

## Operations on functions

Sums, differences, products and quotients of two functions, with the domain of each.

:::example
$f(x) = \dfrac{2x+3}{3x-2}$, $\quad g(x) = \dfrac{4x}{3x-2}$

:::solution
Both have $D: \left\{x \mid x \ne \frac23\right\}$, since $3x - 2 \ne 0 \to x \ne \frac23$.

$$(f+g)(x) = \frac{6x+3}{3x-2}, \qquad D: \left\{x \mid x \ne \tfrac23\right\}$$

$$(f-g)(x) = \frac{-2x+3}{3x-2}, \qquad D: \left\{x \mid x \ne \tfrac23\right\}$$

$$(f\cdot g)(x) = \left(\frac{2x+3}{3x-2}\right)\left(\frac{4x}{3x-2}\right) \to \frac{8x^2+12x}{(3x-2)^2}, \qquad D: \left\{x \mid x \ne \tfrac23\right\}$$

since $(3x-2)^2 = (3x-2)(3x-2) = 0$ only when $3x - 2 = 0$, i.e. $x = \frac23$.

$$(f/g)(x) = \frac{\;\dfrac{2x+3}{3x-2}\;}{\dfrac{4x}{3x-2}} = \left(\frac{2x+3}{3x-2}\right)\left(\frac{3x-2}{4x}\right) = \frac{2x+3}{4x}$$

$$D: \left\{x \mid x \ne \tfrac23 \text{ and } x \ne 0\right\}$$
:::
:::

:::example
$f(x) = \sqrt{x+3}$, $\quad g(x) = \dfrac5x$

:::solution
$f$ has $D: \{x \mid x \ge -3\}$ and $g$ has $D: \{x \mid x \ne 0\}$.

$$(f+g)(x) = \sqrt{x+3} + \frac5x, \qquad D: \{x \mid x \ge -3 \text{ and } x \ne 0\}$$

$$(f-g)(x) = \sqrt{x+3} - \frac5x, \qquad D: \{x \mid x \ge -3 \text{ and } x \ne 0\}$$

$$(f\cdot g)(x) = \left(\sqrt{x+3}\right)\left(\frac5x\right) = \frac{5\sqrt{x+3}}{x}, \qquad D: \{x \mid x \ge -3 \text{ and } x \ne 0\}$$

$$(f/g)(x) = \frac{\sqrt{x+3}}{\;\dfrac5x\;} = \sqrt{x+3}\left(\frac x5\right) = \frac{x\sqrt{x+3}}{5}, \qquad D: \{x \mid x \ge -3 \text{ and } x \ne 0\}$$
:::
:::
