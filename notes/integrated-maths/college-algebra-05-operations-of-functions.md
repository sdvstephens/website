---
course: integrated-maths
chapter: 8
section: 5
title: Operations of Functions
source-pages: 1
---

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
