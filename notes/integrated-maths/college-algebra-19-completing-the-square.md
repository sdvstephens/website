---
course: integrated-maths
chapter: 8
section: 19
title: Completing the Square
source-pages: 1-2
---

:::example
Solve $x^2 - 6x + 9 = 0$.

:::solution
X: top $-6$, bottom $9$, sides $-3$ and $-3$. So
$$
(x-3)(x-3) = (x-3)^2 = 0, \qquad \boxed{x = 3}.
$$
But if we write $x^2 - 6x + 9 - 9 = 0$, the X is the same (top $-6$, sides $-3$ and $-3$, bottom $9$): the $x^2 - 6x + 9$ part is still the square $(x-3)^2$.
:::
:::

:::example
Solve $f(x) = x^2 + 4x - 3 = 0$.

:::solution
$$
\begin{aligned}
0 &= x^2 + 4x - 3\\
0 &= x^2 + 4x + 4 - 4 - 3 &&\text{(X: top } 4\text{, sides } 2, 2\text{, bottom } 4\text{)}\\
0 &= (x+2)^2 - 4 - 3\\
\pm\sqrt{7} &= x + 2\\
x &= \pm\sqrt{7} - 2,
\end{aligned}
$$
so $x_1 = \sqrt{7} - 2$ and $x_2 = -\sqrt{7} - 2$.

With the quadratic formula instead:
$$
x = \frac{-4 \pm \sqrt{(4)^2 - 4(1)(-3)}}{2(1)} = \frac{-4 \pm \sqrt{28}}{2} = -2 \pm \sqrt{7}.
$$
:::
:::

:::example
Solve $h(x) = 5x^2 - 10x + 2 = 0$.

:::solution
X: top $-10$, sides $-5$ and $-5$, bottom $25$. Factoring $5$ out of the first part:
$$
\begin{aligned}
5(x^2 - 2x + 1) - 5 + 2 &= 0\\
5\big((x-1)^2\big) &= +3\\
(x-1)^2 &= +\tfrac{3}{5} \implies x = \pm\sqrt{\tfrac{3}{5}} + 1.
\end{aligned}
$$
:::
:::

:::example
Solve $g(x) = x^2 - 3x + 1 = 0$.

:::solution
X: top $-3$, sides $-\tfrac32$ and $-\tfrac32$.
$$
\begin{aligned}
x^2 - 3x + \tfrac94 - \tfrac94 + 1 &= 0\\
\left(x - \tfrac32\right)^2 - \tfrac94 + 1 &= 0\\
x - \tfrac32 = \pm\sqrt{\tfrac54} \implies x = \pm\sqrt{\tfrac54} + \tfrac32 &\implies x = \tfrac32 \pm \tfrac{\sqrt5}{2}\\
&\implies x = \frac{3 \pm \sqrt5}{2},
\end{aligned}
$$
so $x_1 = \dfrac{3 + \sqrt5}{2}$ and $x_2 = \dfrac{3 - \sqrt5}{2}$.
:::
:::

**Anything can be turned into a square**, because adding and subtracting the same number changes nothing:
$$
7 + 2 - 2 = 7.
$$

![X diagram with b on top, b/2 on both sides and a times c on the bottom, labelled “= perfect square”](/notes/integrated-maths/figures/r2-perfect-square-x.svg)

:::example
Solve $g(x) = x^2 + \tfrac23 x - \tfrac13 = 0$.

:::solution
X: top $\tfrac23$, sides $\tfrac13$ and $\tfrac13$, bottom $\tfrac19$.
$$
\begin{aligned}
x^2 + \tfrac23 x + \tfrac19 - \tfrac19 - \tfrac39 = 0 &\implies \left(x + \tfrac13\right)^2 - \tfrac49 = 0\\
x + \tfrac13 = \pm\sqrt{\tfrac49} \implies x = \pm\sqrt{\tfrac49} - \tfrac13 &\implies x = \pm\tfrac23 - \tfrac13,
\end{aligned}
$$
so $x_1 = \tfrac13$ and $x_2 = -1$.
:::
:::

:::example
Solve $f(x) = 3x^2 + x - \tfrac12 = 0$.

:::solution
**Quadratic formula directly:**
$$
x = \frac{-1 \pm \sqrt{(1)^2 - 4(3)\left(-\tfrac12\right)}}{2(3)} = \frac{-1 \pm \sqrt7}{6}.
$$

**Completing the square:** X: top $\tfrac13$, sides $\tfrac16$ and $\tfrac16$, bottom $\tfrac1{36}$. Adding $\tfrac1{36}$ inside the bracket adds $3 \cdot \tfrac1{36} = \tfrac1{12}$, so subtract $\tfrac1{12}$ outside:
$$
\begin{aligned}
3\left(x^2 + \tfrac13 x + \tfrac1{36}\right) - \tfrac1{12} - \tfrac12 &= 0\\
3\left(x + \tfrac16\right)^2 &= \tfrac7{12}\\
x + \tfrac16 &= \pm\sqrt{\tfrac7{36}}\\
x &= \pm\frac{\sqrt7}{6} - \frac16\\
x &= \frac{-1 \pm \sqrt7}{6}.
\end{aligned}
$$

**Clearing the fraction first:** multiply both sides by $2$:
$$
2\left(3x^2 + x - \tfrac12\right) = 0\,(2) \implies 6x^2 + 2x - 1 = 0,
$$
$$
x = \frac{-2 \pm \sqrt{(2)^2 - 4(6)(-1)}}{2(6)} = \frac{-2 \pm \sqrt{28}}{12} = \frac{-2 \pm 2\sqrt7}{12} = \frac{-1 \pm \sqrt7}{6},
$$
using $28 = 7 \cdot 4$.
:::
:::

:::example
Solve $h(x) = -2x^2 + 5x - 7 = 0$.

:::solution
X: top $-\tfrac52$, sides $-\tfrac54$ and $-\tfrac54$, bottom $+\tfrac{25}{16}$. Adding $\tfrac{25}{16}$ inside the bracket adds $-2 \cdot \tfrac{25}{16} = -\tfrac{25}{8}$, so add $\tfrac{25}{8}$ outside:
$$
\begin{aligned}
-2x^2 + 5x - 7 &= 0\\
-2\left(x^2 - \tfrac52 x + \tfrac{25}{16}\right) + \tfrac{25}{8} - 7 &= 0\\
-2\left(x - \tfrac54\right)^2 &= \tfrac{31}{8}\\
\left(x - \tfrac54\right)^2 &= -\tfrac{31}{16}\\
x - \tfrac54 &= \pm\sqrt{-\tfrac{31}{16}} = \pm\frac{\sqrt{31}}{4}\,i\\
x &= \pm\frac{\sqrt{31}}{4}\,i + \frac54 = \frac{5 \pm i\sqrt{31}}{4}.
\end{aligned}
$$

:::
:::
