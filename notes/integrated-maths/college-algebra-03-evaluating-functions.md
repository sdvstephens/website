---
course: integrated-maths
chapter: 8
section: 3
title: Evaluating Functions
source-pages: 1
---

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
