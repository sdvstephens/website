---
course: integrated-maths
chapter: 8
section: 23
title: Solving with Substitutions
source-pages: 1-2
---

:::example
Solve $g(x) = (3x+4)^2 - 6(3x+4) + 9 = 0$.

:::solution
For a substitution to work, the two expressions in brackets **must be the same** (here both are $3x+4$), and the exponent on the first **must be 2 times** the exponent on the next (here $2$ and $1$). Let
$$
u = 3x + 4.
$$
Then $u^2 - 6u + 9 = 0$, and
$$
u = \frac{6 \pm \sqrt{(-6)^2 - 4(1)(9)}}{2(1)} = \frac{6 \pm \sqrt{36 - 36}}{2} = \frac{6}{2} = 3.
$$

So $u = 3$, which means
$$
3x + 4 = 3 \implies \boxed{x = -\tfrac13}
$$
:::
:::

:::example
Solve $f(x) = 3x^4 - 2x^2 - 1 = 0$.

:::solution
Let $u = x^2$:
$$
\begin{aligned}
3x^4 - 2x^2 - 1 &= 0\\
3(x^2)^2 - 2(x^2) - 1 &= 0\\
3u^2 - 2u - 1 &= 0.
\end{aligned}
$$
X: top $-2$, bottom $-3$, sides $\tfrac{-3}{3}$ and $1$ (which gives $\tfrac13$). So
$$
(u-1)(3u+1) = 0 \implies u_1 = 1, \quad u_2 = -\tfrac13.
$$
Back to $x$:
$$
\begin{aligned}
x^2 = 1 &\implies x = \pm\sqrt1 \implies x_1 = -1,\ x_2 = 1,\\
x^2 = -\tfrac13 &\implies x = \pm\sqrt{-\tfrac13} \implies x_3 = i\,\frac{\sqrt3}{3},\ x_4 = -i\,\frac{\sqrt3}{3}.
\end{aligned}
$$

Let’s say instead we had $u = \dfrac{-1 + \sqrt3}{2}$. Then
$$
x^2 = \frac{-1 + \sqrt3}{2} \implies x = \pm\sqrt{\frac{-1 + \sqrt3}{2}} = \pm\sqrt{\frac{\sqrt3 - 1}{2}},
$$
which is real, since $\sqrt3 > 1$.

:::
:::

:::example
Solve $x^{2/3} - 7x^{1/3} + 10 = 0$.

:::solution
Let $u = x^{1/3}$:
$$
\begin{aligned}
\left(x^{1/3}\right)^2 - 7x^{1/3} + 10 &= 0\\
u^2 - 7u + 10 &= 0 \qquad \text{(X: top } -7\text{, bottom } 10\text{, sides } -5, -2\text{)}\\
(u-5)(u-2) &= 0 \implies u = 5,\ u = 2.
\end{aligned}
$$
So
$$
x^{1/3} = 5 \implies x_1 = 125, \qquad x^{1/3} = 2 \implies x_2 = 8.
$$
Check $x = 125$: $\sqrt[3]{125^2} - 7\left(\sqrt[3]{125}\right) + 10 = 0$? Since $\sqrt[3]{15{,}625} = 25$, this is $25 - 7(5) + 10 = 25 - 35 + 10 = 25 - 25 = 0$. $\checkmark$
:::
:::

:::example
Solve $x + \sqrt{x} - 20 = 0$.

:::solution
Let $u = x^{1/2}$:
$$
\begin{aligned}
\left(x^{1/2}\right)^2 + x^{1/2} - 20 &= 0\\
u^2 + u - 20 &= 0 \qquad \text{(X: top } 1\text{, bottom } -20\text{, sides } 5, -4\text{)}\\
(u+5)(u-4) &= 0 \implies u_1 = -5,\ u_2 = 4.
\end{aligned}
$$
So
$$
x^{1/2} = -5 \implies x_1 = 25\ \text{(false solution)}, \qquad x^{1/2} = 4 \implies \boxed{x_2 = 16}
$$
$x_1 = 25$ is a **false solution**: $\sqrt{x}$ can never equal $-5$, and squaring $x^{1/2} = -5$ to get $x = (-5)^2 = 25$ hides this ($\sqrt{25} = 5$).

:::
:::

:::example
Solve $-2y^{-2} - 11y^{-1} + 40 = 0$.

:::solution
Rewritten: $-\dfrac{2}{y^2} - \dfrac{11}{y^1} + 40 = 0$. Let $u = y^{-1}$:
$$
\begin{aligned}
-2y^{-2} - 11y^{-1} + 40 &= 0\\
-2\left(y^{-1}\right)^2 - 11\left(y^{-1}\right)^1 + 40 &= 0\\
-2u^2 - 11u + 40 &= 0.
\end{aligned}
$$
$$
u = \frac{-(-11) \pm \sqrt{(-11)^2 - 4(-2)(40)}}{2(-2)} = \frac{11 \pm \sqrt{121 + 320}}{-4} = \frac{11 \pm \sqrt{441}}{-4} = \frac{11 \pm 21}{-4},
$$
so
$$
u_1 = -\frac{11}{4} - \frac{21}{4} = -\frac{32}{4} = -8, \qquad u_2 = -\frac{11}{4} + \frac{21}{4} = \frac{10}{4} = \frac52.
$$
Back to $y$:
$$
\begin{aligned}
y^{-1} = -8 &\implies \frac1y = -8 \implies 1 = -8y \implies y_1 = -\frac18,\\
y^{-1} = \frac52 &\implies \frac1y = \frac52 \implies 1 = \frac{5y}{2} \implies y_2 = \frac25.
\end{aligned}
$$
:::
:::
