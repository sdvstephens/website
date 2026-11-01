---
course: integrated-maths
chapter: 8
section: 4
title: Finding Domain
source-pages: 1
---

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
