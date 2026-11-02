---
course: integrated-maths
chapter: 8
section: 8.1
title: Solving Equations and Inequalities
---

To solve a single equation or inequality, isolate the variable. With several unknowns, substitute one equation into another until only one variable is left.

## Isolation

:::problem
(a) $3r - 2 + 2r = 7 - r + 3$

(b) $\dfrac{2t}{3} + 7 = 3(t - 9)$
:::solution
(a) $3r - 2 + 2r = 7 - r + 3 \to 6r = 12 \to r = 2$.

(b) $\dfrac{2t}{3} + 7 = 3(t - 9) \to \dfrac{2t}{3} = 3t - 34 \to 2t = 9t - 102 \to t = \dfrac{102}{7}$.
:::
:::

:::problem
(a) $2 - 4x \ge 10$

(b) $7 - 3t < 5 - 2t$

(c) $3 - 3x < 4x + 7 \le 8 - x$
:::solution
(a) $2 - 4x \ge 10 \to -2 \ge x$.

(b) $7 - 3t < 5 - 2t \to 2 < t$.

(c) $3 - 3x < 4x + 7 \le 8 - x \to -\frac47 < x \le \frac15$.
:::
:::

:::problem
Compute and solve: $2x^2 + 5 = x^2 + 18$.
:::solution
$2x^2 + 5 = x^2 + 18 \to x^2 = 13 \to x = \pm\sqrt{13}$.
:::
:::

:::problem
Compute and solve:
$$\frac{1}{\sqrt{z - 3} - 1} + 2 = \frac{3}{\sqrt{z - 3} - 1}.$$
:::solution
Moving the first fraction across, $2 = \dfrac{2}{\sqrt{z-3} - 1}$, so
$$2\left(\sqrt{z - 3} - 1\right) = 2 \;\to\; \sqrt{z - 3} = 2 \;\to\; z - 3 = 4 \;\to\; z = 7.$$
:::
:::

:::problem
Find all $c \in \RR$ such that
$$\frac{3}{2 - \frac1x} = c$$
has no solution for $x$.
:::solution
$$\frac3c = 2 - \frac1x \;\to\; -\frac3c + 2 = \frac1x \;\to\; x = \frac{1}{-\frac3c + 2} = \left(-\frac3c + 2\right)^{-1} = \left(\frac{2c - 3}{c}\right)^{-1} = \frac{c}{2c - 3}.$$
No solution is when $2c - 3 = 0$, i.e. $c = \frac32$.

Also $x = \frac12$ causes division by $0$ in the original equation. So set
$$\frac{c}{2c - 3} = \frac12 \;\to\; \frac{2c - 3}{2c} = 1 \;\to\; 2c - 3 = 2c \;\to\; -3 \neq 0:$$
no solution, so there are no values of $c$ for which $x = \frac12$. Note $x = 0$ is also not a solution.

So $c = 0$ and $c = \frac32$ are the two values which give no solution.
:::
:::

## Substitution and systems of equations

:::problem
$$\begin{cases}
x + y + z = 12\\
5x = z + y\\
z = 3x + y - 2
\end{cases}$$
:::solution
Substitute the third equation into the second:
$$5x = 3x + y - 2 + y \;\Rightarrow\; 2x = 2y - 2 \;\Rightarrow\; x = y - 1.$$
Then $z = 3(y - 1) + y - 2 = 3y - 3 + y - 2 = 4y - 5$, and the first equation becomes
$$(y - 1) + y + (4y - 5) = 2y - 1 + 4y - 5 = 12 \;\Rightarrow\; 6y = 18 \;\Rightarrow\; y = 3.$$
With $y = 3$ the system is
$$x + 3 + z = 12,\qquad 5x = z + 3,\qquad z = 3x + 1.$$
From $5x = z + 3$: $-z = -5x + 3$, so $z = 5x - 3$. Then $3x + 1 = 5x - 3$, so $2x = 4$, $x = 2$, and $z = 7$.
:::
:::

:::example
$$xy^2 = 10^8,\qquad \frac{x^3}{y} = 10^{10}.$$
:::solution
Idea: choose $A$, $B$ so that $(xy^2)^A\left(\dfrac{x^3}{y}\right)^B$ only has one variable.

Or substitute: from the first equation $x = \dfrac{10^8}{y^2}$, so
$$\left(\frac{10^8}{y^2}\right)^3\cdot\frac1y = \frac{10^{24}}{y^6\,y} = \frac{10^{24}}{y^7} = 10^{10}.$$
So the power of $10$ in $y^7$ is $24 - 10 = 14 = 7\cdot 2$, i.e. $y^7 = (10^2)^7$ and $y = 10^2$. Then
$$x = \frac{10^8}{(10^2)^2} = 10^4,$$
and indeed $\dfrac{(10^4)^3}{10^2} = \dfrac{10^{12}}{10^2} = 10^{10}$. So $x = 10^4$, $y = 10^2$.
:::
:::

:::problem
Win ratio $= \dfrac{\text{matches won}}{\text{matches total}} = \dfrac wt$. At the start of the weekend $\dfrac wt = \dfrac12$. Over the weekend: $4$ matches, $3$ won and $1$ lost. At the end, $\dfrac wt > \dfrac{503}{1000}$. What is the largest number of matches won before the weekend began?
:::solution
$t = 2w$, and
$$\frac wt = \frac{500}{1000},\qquad \frac{w + 3}{2w + 4} > \frac{503}{1000} > \frac wt = \frac{500}{1000}.$$
:::
:::

## Exercises

:::exercise
Find all $a$ such that $\dfrac{2 - b}{3 - b} = 5a$ has no solution for $b$.
:::solution
$$2 - b = 15a - 5ab \;\Rightarrow\; 2 - b + 5ab = 15a \;\Rightarrow\; 5ab - b = 15a - 2 \;\Rightarrow\; b(5a - 1) = 15a - 2 \;\Rightarrow\; b = \frac{15a - 2}{5a - 1}.$$
$$5a - 1 = 0 \;\Rightarrow\; \boxed{a = \tfrac15}.$$
:::
:::

:::exercise
Solve $3x^2 + x - 7 = 2x^2 + 6x - 13$.

:::solution
$$x^2 - 5x + 6 = 0 \implies (x - 3)(x - 2) = 0 \implies x = 3,\ x = 2.$$
Then $3(3)^2 + 3 - 7 = 27 - 7 + 3 = 23$ and $3(2)^2 + 2 - 7 = 7$, giving the points $(3, 23)$ and $(2, 7)$. Check: $2(3)^2 + 6(3) - 13 = 18 + 5 = 23$ and $2(2)^2 + 6(2) - 13 = 8 + 12 - 13 = 7$.
:::
:::

:::exercise
Solve $\sqrt{x+3} + \dfrac{3}{\sqrt{x+3}} = 4$.

:::solution
$$\frac{\left(\sqrt{x+3}\right)^2}{\sqrt{x+3}} + \frac{3}{\sqrt{x+3}} = \frac{x + 3 + 3}{\sqrt{x+3}} = \frac{x+6}{\sqrt{x+3}}\cdot\frac{\sqrt{x+3}}{\sqrt{x+3}} = \frac{\sqrt{x+3}\,(x+6)}{x+3}.$$
Setting this equal to $4$ and squaring:
$$\left(\sqrt{x+3}\,(x+6)\right)^2 = (4x + 12)^2 \implies (x+3)(x+6)^2 = 16x^2 + 96x + 144 = 4(4x+12)(x+3).$$
Cancelling $x + 3$:
$$x^2 + 12x + 36 = 16x + 48 \implies x^2 - 4x - 12 = 0 \implies (x - 6)(x + 2) = 0,$$
so $x = 6$ or $x = -2$.
:::
:::

:::exercise
A fraction $\dfrac{x}{y}$, with $x, y$ relatively prime and positive, satisfies $1.10\left(\dfrac{x}{y}\right) = \dfrac{x + 1}{y + 1}$.
:::solution
$$\begin{aligned}
1.10\left(\frac{x}{y}\right) = \frac{x + 1}{y + 1} &\implies \frac{11x}{10y} = \frac{x + 1}{y + 1} \implies 11x(y + 1) = (x + 1)10y \\
&\implies 11xy + 11x = 10xy + 10y \implies xy = 10y - 11x \\
&\implies xy - 10y = -11x \implies y(x - 10) = -11x,
\end{aligned}$$
so
$$y = -\frac{11x}{x - 10} = \frac{11x}{10 - x}.$$

Another attempt:
$$(x - 1)(x - 10) = (x + 1)(x - 10) \implies x^2 - 11x + 10 = x^2 - 9x - 10 \implies 20 = 2x \implies x = 10.$$
:::
:::

:::exercise A count on a $12$-gon
:::solution
On a $12$-gon: for every $2$ vertices there exist $10$ possibilities; for every vertex there exist $11$ possible connections; $12 \cdot 11 \cdot 10$.
:::
:::
