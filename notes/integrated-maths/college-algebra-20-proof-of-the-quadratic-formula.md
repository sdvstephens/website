---
course: integrated-maths
chapter: 8
section: 20
title: Proof of the Quadratic Formula
source-pages: 1-2
---

:::theorem Quadratic Formula
For $f(x) = ax^2 + bx + c$ (with $a \neq 0$), the solutions of $ax^2 + bx + c = 0$ are
$$
\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$
:::

:::proof
Start from $ax^2 + bx + c = 0$; its X has $b$ on top and $ac$ on the bottom. Factor out $a$:
$$
a\left(x^2 + \frac{bx}{a} + \frac{c}{a}\right) = 0.
$$
Inside the bracket the X has $\tfrac{b}{a}$ on top, $\tfrac{b}{2a}$ and $\tfrac{b}{2a}$ on the sides, and $\left(\tfrac{b}{2a}\right)^2$ on the bottom, so complete the square with $\tfrac{b^2}{4a^2}$:
$$
\begin{aligned}
a\left(x^2 + \frac{bx}{a} + \frac{b^2}{4a^2}\right) - \frac{b^2}{4a} + c &= 0\\
a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c &= 0\\
a\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a}\\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2}\\
x + \frac{b}{2a} &= \pm\sqrt{\frac{b^2 - 4ac}{4a^2}}\\
x &= \frac{\pm\sqrt{b^2 - 4ac}}{2a} - \frac{b}{2a}\\
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
\end{aligned}
$$
:::

## Alternative proof

:::proof
Again $f(x) = ax^2 + bx + c$ and $ax^2 + bx + c = 0$. Divide by $a$ and complete the square right away (X: top $\tfrac{b}{a}$, sides $\tfrac{b}{2a}$ and $\tfrac{b}{2a}$, bottom $\tfrac{b^2}{4a^2}$):
$$
\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) - \frac{b^2}{4a^2} + \frac{c}{a} = 0.
$$
Then
$$
\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{4ac}{4a^2} = \frac{b^2 - 4ac}{4a^2},
$$
$$
x + \frac{b}{2a} = \frac{\pm\sqrt{b^2 - 4ac}}{2a} \implies x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
$$
:::
