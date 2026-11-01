---
course: integrated-maths
chapter: 8
section: 8
title: Properties of Functions: Even/Odd
source-pages: 1-2
---

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
