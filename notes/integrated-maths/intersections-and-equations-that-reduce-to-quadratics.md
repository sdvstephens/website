---
course: integrated-maths
chapter: 9
section: 9.5
title: Intersections and Equations That Reduce to Quadratics
---

Many equations that are not quadratic at first sight become quadratic equations after a rearrangement or a change of variable. Two common cases are finding where two graphs meet and substituting a new variable for a repeated expression.

## Intersections of functions

:::note
If finding the intersection of two functions, then set the functions equal.
:::

:::example
Find the intersections of $f(x) = x^2 + 6x + 3$ and $g(x) = 3$.

:::solution
$$
\begin{aligned}
x^2 + 6x + 3 &= 3\\
x^2 + 6x &= 0
\end{aligned}
$$
$$
x = \frac{-6 \pm \sqrt{(6)^2 - 4(1)(0)}}{2(1)} = \frac{-6 \pm 6}{2(1)},
\qquad
\frac{-6 + 6}{2} = 0 = x_1, \quad \frac{-6 - 6}{2} = -6 = x_2.
$$
At $x = 0$ and $x = -6$ the functions meet at $(0, 3)$ and $(-6, 3)$.
:::
:::

:::example
Find the intersections of $f(x) = -2x^2 + 1$ and $g(x) = 3x + 2$.

:::solution
$$
\begin{aligned}
-2x^2 + 1 &= 3x + 2\\
-2x^2 - 3x - 1 &= 0
\end{aligned}
$$
$$
x = \frac{+3 \pm \sqrt{(-3)^2 - 4(-2)(-1)}}{2(-2)} = \frac{3 \pm \sqrt1}{-4} = \frac{3 \pm 1}{-4},
$$
using $9 - 8 = 1$. So $x = \frac{3+1}{-4} = -1$ or $x = \frac{3-1}{-4} = -\frac12$.

Checking the $y$-values:
- $x = -1$: $-2(-1)^2 + 1 = -1$ and $3(-1) + 2 = -3 + 2 = -1$.
- $x = -\tfrac12$: $-2\left(-\tfrac12\right)^2 + 1 = -\tfrac12 + 1 = \tfrac12$ and $3\left(-\tfrac12\right) + 2 = -\tfrac32 + \tfrac42 = \tfrac12$.

The intersections are $(-1, -1)$ and $\left(-\tfrac12, \tfrac12\right)$.
:::
:::

:::example
Find the intersections of $f(x) = x^2 - x + 1$ and $g(x) = 2x^2 - 3x - 14$.

:::solution
$$
\begin{aligned}
x^2 - x + 1 &= 2x^2 - 3x - 14\\
x^2 - 2x - 15 &= 0 \implies (x-5)(x+3) = 0
\end{aligned}
$$
(X: top $-2$, bottom $-15$, sides $-5$ and $3$), so $x_1 = 5$ and $x_2 = -3$.

Check $x = 5$: $f(5) = 25 - 5 + 1 = 21$ and $g(5) = 50 - 15 - 14 = 50 - 29 = 21$.
:::
:::

## Solving with substitutions

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

## Exercises

:::exercise
(a) $3x^4 + 26 = 19x^2$

(b) $x + \dfrac{679}{x} = 104$

(c) $\sqrt{x^2 + x - 7} = \sqrt{x - 3}$
:::solution
**(a)** $3x^4 - 19x^2 + 26 = 0$. Let $x^2 = u \Rightarrow 3u^2 - 19u + 26$. Recall $(x + p)(x + q) = pq + x(p + q) + x^2$.

By the formula,
$$u = \frac{19 \pm \sqrt{19^2 - 4(3)(26)}}{6} = \frac{19 \pm \sqrt{361 - 312}}{6} = \frac{19 \pm \sqrt{49}}{6} = \frac{19 \pm 7}{6} \;\to\; \frac{12}{6} = 2,\quad \frac{26}{6} = \frac{13}{3}.$$

Or: $3\left(u^2 - \frac{19}{3}u + \frac{26}{3}\right)$ needs $pq = \frac{26}{3}$ and $p + q = \frac{19}{3}$. Splitting the middle term,
$$3u^2 - 19u + 26 = 3u^2 - 6u - 13u + 26 = 3u(u - 2) - 13(u - 2) = (3u - 13)(u - 2),$$
which gives the factor $(3x^2 - 13)$.

Let’s restart to make it clean:
$$3x^4 - 19x^2 + 26 = 0 \;\xrightarrow{\;u = x^2\;}\; 3u^2 - 19u + 26 = 0$$
$$\Rightarrow 3u(u - 2) - 13(u - 2) = (3u - 13)(u - 2) = 0$$
$$(3x^2 - 13)(x^2 - 2) = 0 \;\Rightarrow\; 3x^2 - 13 = 0 \text{ or } x^2 - 2 = 0.$$
$x^2 - 2 = 0 \to x = \pm\sqrt2$, and
$$3x^2 - 13 = 0 \to 3x^2 = 13 \to x^2 = \frac{13}{3} \to x = \pm\sqrt{\frac{13}{3}} = \pm\frac{\sqrt{13}}{\sqrt3} = \pm\frac{\sqrt{39}}{3}.$$

**(b)** $x + \dfrac{679}{x} = 104 \iff x^2 - 104x + 679 = 0$, and $(x - 7)(x - 97) = 0$ (using $104 = 2^3\cdot 13$), so $x = 7$ and $x = 97$.

**(c)** $\sqrt{x^2 + x - 7} = \sqrt{x - 3}$. Wait, ur stupid, duh:
$$x^2 + x - 7 = x - 3 \;\to\; x^2 - 4 = 0 \;\Rightarrow\; x^2 = 4 \;\to\; x = \pm 2.$$

:::
:::

:::exercise
Find $x$ if $y = \frac{8}{x^2+4}$ and $x+y = 2$.

:::solution
Substituting $x = 2-y$:
$$y = \frac{8}{(2-y)^2+4} \;\to\; y = \frac{8}{y^2-4y+8} \;\to\; y^3-4y^2+8y = 8,$$
and $y^3-4y^2+8y-8 = (y-2)(y^2-2y+4) = 0$, where $y^2-2y+4$ has no real roots. So $y = 2$ and $\boxed{x = 0}$.

:::
:::

:::exercise
Find all ordered pairs $(x,y)$ with $x,y\in\CC$ such that $x+y = \frac92$ and $2x^2y^2-13xy+18 = 0$.

:::solution
Let $xy = m$, so $2m^2-13m+18 = 0$:
$$m = \frac{13\pm\sqrt{169-4(2)(18)}}{4} = \frac{13\pm5}{4} \;\Rightarrow\; m = 2 \text{ or } m = \tfrac92.$$
So either $xy = \frac92$, which means $x+y = xy$, or $xy = 2$, which means $x+y = \frac{9}{xy}$, i.e. $x^2y+xy^2 = 9$.

$$x+y = xy \iff x+y = \tfrac92 \iff xy = \tfrac92.$$
With $y = \frac92-x$:
$$x+\tfrac92-x = x\left(\tfrac92-x\right) \;\Rightarrow\; \tfrac92 = \tfrac{9x}{2}-x^2 \;\Rightarrow\; x^2-\tfrac92x+\tfrac92 = 0 \;\Rightarrow\; \left(x-\tfrac62\right)\left(x-\tfrac32\right) = 0,$$
so $x = \frac62$ or $x = \frac32$ (check: $\frac62\cdot\frac32 = \frac{18}{4} = \frac92$).

Substitute each value of $x$ back into $2x^2y^2 - 13xy + 18 = 0$.

If $x = \tfrac62 = 3$:
$$\begin{aligned}
2\left(\tfrac62\right)^2y^2 - 13\left(\tfrac62\right)y + 18 &= 0\\
18y^2 - 39y + 18 &= 0\\
3(6y^2 - 13y + 6) = 0 \;\Rightarrow\; 6y^2 - 13y + 6 &= 0,
\end{aligned}$$
so
$$y = \frac{13 \pm \sqrt{169 - 4(36)}}{2(6)} = \frac{13 \pm 5}{12}, \qquad y \in \left\{\tfrac32, \tfrac23\right\}.$$

If $x = \tfrac32$:
$$\begin{aligned}
2\left(\tfrac32\right)^2y^2 - 13\left(\tfrac32\right)y + 18 &= 0\\
\tfrac92y^2 - \tfrac{39}{2}y + 18 = 0 \;\Rightarrow\; 9y^2 - 39y + 36 &= 0,
\end{aligned}$$
so
$$y = \frac{39 \pm \sqrt{1521 - 4(9)(36)}}{18} = \frac{39 \pm \sqrt{1521 - 1296}}{18} = \frac{39 \pm 15}{18},$$
giving $y = \tfrac{54}{18} = 3$ or $y = \tfrac{24}{18} = \tfrac43$.

Checks: $xy = 2$: $\tfrac32\left(\tfrac43\right) = 2$ ✓, and $xy = \tfrac92$: $\tfrac32(3) = \tfrac92$ ✓. But $x + y = \tfrac92$ has to hold too: $\tfrac32 + 3 = \tfrac92$ ✓, while $\tfrac32 + \tfrac43 = \tfrac{17}{6} \neq \tfrac92$. So from these substitutions only $(x, y) = \left(\tfrac32, 3\right)$ and $\left(3, \tfrac32\right)$ survive. The case $xy = 2$ makes $x$ and $y$ the roots of $t^2 - \tfrac92t + 2 = 0$, i.e. $2t^2 - 9t + 4 = (2t - 1)(t - 4) = 0$, which gives $\left(\tfrac12, 4\right)$ and $\left(4, \tfrac12\right)$.

**Final answer:**
$$(x, y) \in \left\{\left(\tfrac32, 3\right), \left(3, \tfrac32\right), \left(\tfrac12, 4\right), \left(4, \tfrac12\right)\right\}.$$
YAY

:::
:::

:::exercise
Find all $x$ such that $\dfrac{x-a}{b}+\dfrac{x-b}{a} = \dfrac{b}{x-a}+\dfrac{a}{x-b}$, with $a,b\in\RR$.

:::solution
$$\frac{x-a}{b}-\frac{b}{x-a}+\frac{x-b}{a}-\frac{a}{x-b} = 0 \;\Rightarrow\; \frac{(x-a)^2-b^2}{b(x-a)}+\frac{(x-b)^2-a^2}{a(x-b)} = 0.$$
Both terms vanish (they become like $\frac bb$ and $\frac aa$ on each side) when $x-a = b$ and $x-b = a$:
$$(x-a)+(x-b) = b+a \;\Rightarrow\; 2x-a-b = b+a \;\Rightarrow\; 2x = 2a+2b \;\Rightarrow\; x = a+b,$$
with $x\neq a$, $x\neq b$ (and $a\neq0$, $b\neq0$).

Clearing denominators: the numerators become $(x^2-2ax+a^2-b^2)\,a(x-b)$ and $(x^2-2bx+b^2-a^2)\,b(x-a)$, with
$$(x^2-2ax+a^2-b^2)\,a(x-b) = (x^3-bx^2-2ax^2+2abx+a^2x-a^2b-b^2x+b^3)\,a.$$

Another try: set the numerators’ sum to zero,
$$\big((x-a)^2-b^2+(x-b)^2-a^2\big)\big(ab(x-a)(x-b)\big) = 0,\qquad x\neq a,\ x\neq b,$$
where $ab(x-a)(x-b) = \big(x^2+ab-x(a+b)\big)ab$. Then
$$(x-a)^2-b^2+(x-b)^2-a^2 = 0 \;\Rightarrow\; x^2-2ax+a^2+x^2-2bx+b^2-a^2-b^2 = 0 \;\Rightarrow\; 2x^2-2x(a+b) = 0 \;\Rightarrow\; x^2-x(a+b) = 0,$$
$$\left(x-\frac{a+b}{2}\right)^2 = \frac{(a+b)^2}{4} \;\Rightarrow\; x-\frac{a+b}2 = \pm\frac{a+b}{2} \;\Rightarrow\; x = \frac{2(a+b)}{2} = a+b \text{ or } x = 0.$$
Factoring the sum of the numerators instead gives $(x-a-b)\,2x = 0$, so $(x-a-b)x = 0$, $x^2-ax-bx = 0$: again $x = 0$ or $x = a+b$.

Properly, factor out $(x-a-b)$ from both numerators:
$$(x-b-a)\left[\frac{x-a+b}{b(x-a)}+\frac{x+a-b}{a(x-b)}\right] = 0.$$
The bracket vanishes when
$$(x-a+b)\,a(x-b)+(x+a-b)\,b(x-a) = 0,$$
$$\begin{aligned}
&ax^2-a^2x+abx-abx+a^2b-ab^2\\
+\;&bx^2-b^2x+abx-abx+b^2a-ba^2,
\end{aligned}$$
so $x^2(a+b)-x(a^2+b^2)+a^2b-ab^2+b^2a-ba^2 = x^2(a+b)-x(a^2+b^2) = 0$, i.e. $x\big(x(a+b)-(a^2+b^2)\big) = 0$, and besides $x = 0$,
$$x(a+b) = a^2+b^2 \;\Rightarrow\; x = \frac{a^2+b^2}{a+b}.$$
So the solutions are $x = 0$, $x = a+b$, and $x = \dfrac{a^2+b^2}{a+b}$.
:::
:::

:::exercise
Let $r_n$ be the real roots of $\big(2+(2+(2+(2+x)^2)^2)^2\big)^2 = 15129$. Find $\sum_n r_n$.

:::solution
$15129 = 3^2\cdot1681$.

Let $g(x) = (2+x)^2$ (zero at $x = -2,-2$). Then $g(g(x)) = \big(2+(2+x)^2\big)^2$, and the left side is $g(g(g(g(x)))) = \cdots$.
$$g(g(x)) = 2^2+2(2)(2+x)^2+\big((2+x)^2\big)^2 = 4+4(2+x)^2+(x^2+4x+4)^2,$$
where
$$(x^2+4x+4)^2 = x^4+4x^3+4x^2+4x^3+16x^2+16x+4x^2+16x+16,$$
so
$$4+4x^2+16x+16+x^4+8x^3+24x^2+32x+16,$$
$$g(g(x)) = x^4+8x^3+28x^2+48x+36 = x^2(x^2+8x+16)-16x^2+28x^2+48x+36 = x^2(x+4)^2-16x^2+4(7x^2+12x+9).$$
:::
:::
