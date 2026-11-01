---
course: integrated-maths
chapter: 8
section: 21
title: The Quadratic Formula
source-pages: 1-3
---

For the polynomial equation $ax^2 + bx + c = 0$, use
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
$$

:::example
Solve $f(x) = 3x^2 - 5x + 1 = 0$.

:::solution
$$
x = \frac{+5 \pm \sqrt{(-5)^2 - 4(3)(1)}}{2(3)} = \frac{5 \pm \sqrt{25 - 12}}{6} = \frac{5 \pm \sqrt{13}}{6},
$$
so
$$
\boxed{x_1 = \frac{5 + \sqrt{13}}{6}, \qquad x_2 = \frac{5 - \sqrt{13}}{6}}
$$
:::
:::

:::example
Solve $g(x) = 3x(x+2) - 1 = 0$.

:::solution
Expanding: $3x^2 + 6x - 1 = 0$.
$$
x = \frac{-6 \pm \sqrt{(6)^2 - 4(3)(-1)}}{2(3)} = \frac{-6 \pm \sqrt{48}}{6} = \frac{-6 \pm 4\sqrt3}{6},
$$
so
$$
\boxed{x_1 = \frac{-6 - 4\sqrt3}{6}, \qquad x_2 = \frac{-6 + 4\sqrt3}{6}}
$$
:::
:::

:::example
Solve $h(x) = 3x^2 + x - \tfrac12 = 0$.

:::solution
$$
x = \frac{-1 \pm \sqrt{(1)^2 - 4(3)\left(-\tfrac12\right)}}{2(3)} = \frac{-1 \pm \sqrt7}{6},
$$
so
$$
x_1 = \frac{-1 + \sqrt7}{6}, \qquad x_2 = \frac{-1 - \sqrt7}{6}.
$$

:::
:::

:::example
Solve $f(x) = \tfrac18 x^2 - \tfrac14 x - 2 = 0$.

:::solution
**Directly:**
$$
x = \frac{-\left(-\tfrac14\right) \pm \sqrt{\left(-\tfrac14\right)^2 - 4\left(\tfrac18\right)(-2)}}{2\left(\tfrac18\right)} \longrightarrow \frac{+\tfrac14 \pm \sqrt{\tfrac1{16} + 1}}{\tfrac14},
$$
where $\sqrt{\tfrac1{16} + 1} = \sqrt{\tfrac{17}{16}} = \tfrac{\sqrt{17}}{4}$. So
$$
x = \frac{\tfrac14 \pm \tfrac{\sqrt{17}}{4}}{\tfrac14} = 1 \pm \sqrt{17},
\qquad
\boxed{x_1 = 1 + \sqrt{17}, \quad x_2 = 1 - \sqrt{17}}
$$

**Clearing fractions first:** multiply both sides by $8$:
$$
8\left(\tfrac18 x^2 - \tfrac14 x - 2\right) = 0\,(8) \implies x^2 - 2x - 16 = 0,
$$
$$
x = \frac{2 \pm \sqrt{(-2)^2 - 4(1)(-16)}}{2(1)} = \frac{2 \pm \sqrt{68}}{2} = \frac{2 \pm 2\sqrt{17}}{2},
$$
so $x = 1 \pm \sqrt{17}$: $x_1 = 1 + \sqrt{17}$ and $x_2 = 1 - \sqrt{17}$.
:::
:::

:::example
Solve $f(x) = 9x^2 - 6x + 1 = 0$.

:::solution
$$
x = \frac{+6 \pm \sqrt{(-6)^2 - 4(9)(1)}}{2(9)} = \frac{6 \pm \sqrt{36 - 36}}{18} = \frac{6 \pm \sqrt0}{18} = \frac{6}{18} = \frac39 = \boxed{\frac13}
$$
:::
:::

:::example
Solve $g(x) = -4x^2 - x - 4 = 0$.

:::solution
**Factoring out $-1$ first:** $-1(4x^2 + x + 4) = 0\,(-1)$, so $4x^2 + x + 4 = 0$ and
$$
x = \frac{-1 \pm \sqrt{(1)^2 - 4(4)(4)}}{2(4)} = \frac{-1 \pm \sqrt{-63}}{8}.
$$

**Directly:**
$$
x = \frac{1 \pm \sqrt{(-1)^2 - 4(-4)(-4)}}{2(-4)} = \frac{1 \pm \sqrt{1 - 64}}{-8} = \frac{1 \pm \sqrt{-63}}{-8} = -\frac{1 \pm 3i\sqrt7}{8},
$$
so
$$
x_1 = -\frac{1 + 3i\sqrt7}{8}, \qquad x_2 = -\frac{1 - 3i\sqrt7}{8}.
$$
:::
:::
