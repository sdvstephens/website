---
course: integrated-maths
chapter: 9
section: 9.4
title: The Quadratic Formula and the Discriminant
---

Completing the square on the general quadratic $ax^2 + bx + c$, with letters in place of numbers, gives a formula for its roots.

## The quadratic formula

:::theorem Quadratic Formula
For $f(x) = ax^2 + bx + c$ (with $a \neq 0$), the solutions of $ax^2 + bx + c = 0$ are
$$
\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$
:::

:::exercise Prove the quadratic formula
Show that if $a \neq 0$, the solutions of $ax^2 + bx + c = 0$ are $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

:::solution
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
:::

The number $b^2 - 4ac$ under the square root is called the **discriminant**.

For instance, $x^2 - 5x + 6 = 0 \to x = \dfrac{5 \pm \sqrt{25 - 4(6)}}{2} = \dfrac{5 \pm 1}{2} \to x = 3,\ x = 2 \to (x - 2)(x - 3)$.

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

:::problem
(a) $x^2 + 4x + 7 = 0$

(b) $3x^2 - 10x - 24 = 0$

(c) $x^2 - (11 - 2i)x + 23 - 11i = 0$
:::solution
**(a)**
$$x = \frac{-4 \pm \sqrt{4^2 - 4(7)}}{2} = \frac{2\left(-2 \pm \sqrt3\, i\right)}{2} = -2 \pm \sqrt3\, i.$$
By completing the square:
$$x^2 + 4x + 4 + 7 - 4 \;\to\; (x + 2)^2 + 3 = 0 \;\to\; x + 2 = \pm\sqrt3\, i \;\to\; x = -2 \pm \sqrt3\, i.$$

**(b)**
$$x = \frac{10 \pm \sqrt{100 - 4(3)(-24)}}{6} = \frac{10 \pm \sqrt{388}}{6}.$$
By completing the square:
$$3\left(x^2 - \frac{10}{3}x + \frac{\left(\frac{10}{3}\right)^2}{4}\right) - 24 - 3\cdot\frac{100}{36} = 3\left(x - \frac{10}{6}\right)^2 - 24 - \frac{100}{12} = 3\left(x - \frac{10}{6}\right)^2 - \frac{97}{3} = 0,$$
$$\left(x - \frac{10}{6}\right)^2 = \frac{97}{9},\qquad x = \frac{10}{6} \pm \frac{\sqrt{97}}{3} = \frac{5 \pm \sqrt{97}}{3}.$$

**(c)**
$$x = \frac{(11 - 2i) \pm \sqrt{(11 - 2i)^2 - 4(1)(23 - 11i)}}{2}.$$
Here $(11 - 2i)^2 = 11^2 - 44i + 4i^2 = 117 - 44i$ and $4(23 - 11i) = 92 - 44i$, so the discriminant is $117 - 44i - 92 + 44i = 25$:
$$x = \frac{(11 - 2i) \pm \sqrt{117 - 92}}{2} = \frac{(11 - 2i) \pm 5}{2} \;\to\; \frac{16 - 2i}{2} = 8 - i,\quad \frac{6 - 2i}{2} = 3 - i.$$
By completing the square:
$$\left(x - \frac{11 - 2i}{2}\right)^2 = -23 + 11i + \frac{117 - 44i}{4},$$
$$\pm\sqrt{\frac{-92 + 44i + 117 - 44i}{4}} = x - \frac{11 - 2i}{2} \;\to\; \pm\frac52 = x - \frac{11 - 2i}{2} \;\to\; x = \frac{(11 - 2i) \pm 5}{2}.\ \checkmark$$
:::
:::

## The discriminant

In the examples above, a discriminant of $0$ gave a single root and a negative discriminant gave two nonreal roots. The problems below use the discriminant to tell what kind of roots a quadratic has without solving it.

:::example Nature of the roots
:::solution
Discriminants: the first is negative, so no real roots; the second is $75 = 5^2\cdot 3$, with $\sqrt{75} = 5\sqrt3$, so two (irrational) roots; for the last, $1+4(462) = 1848+1 = 1849 = 43^2$, a perfect square.

The roots are, in order: nonreal, irrational, rational, rational.
:::
:::

:::remark
For rational roots: $b^2-4ac = 0$ or a perfect square.
:::

:::problem
Find all $x,y\in\RR$ such that $y = 2tx-t^2$ for some $t\in\RR$.

:::solution
$-t^2+2tx-y = 0$ has a real solution $t$, so its discriminant is nonnegative:
$$(2x)^2-4(-1)(-y)\ge0 \;\Rightarrow\; 4x^2-4y\ge0 \;\Rightarrow\; x^2-y\ge0 \;\Rightarrow\; x^2\ge y.$$
Check with $x = 4$, $y = 3$: $-t^2+8t-3$ has discriminant $64-4(-1)(-3) = 52 \ge 0$. ✓

Answer: all $x,y\in\RR$ such that $x^2\ge y$.
:::
:::

### Finding a quadratic from one root

:::example A real quadratic with root $3+2i$
:::solution
We want $a,b,c\in\RR$, $a\neq0$, such that $r_1 = 3+2i$ is a root of $ax^2+bx+c$. By Vieta,
$$r_1+r_2 = -\frac ba,\qquad r_1r_2 = \frac ca,$$
so $c = ar_1r_2 = a(3+2i)r_2$ and $b = -a(3+2i)-ar_2$ (from $ar_1+ar_2 = -b$). Let $a = 1$: then
$$c = (3+2i)r_2,\qquad b = -(3+2i)-r_2,\quad\text{i.e. } r_2 = -b-(3+2i).$$
Plugging in $x = 3+2i$ (the $bx$ term is $b(3+2i)$):
$$(3+2i)^2+b(3+2i)+c = 9+12i-4+3b+2bi+c = 5+12i+3b+2bi+c = 0.$$
In factored form, $(x-(3+2i))(x+m) = x^2+\big(-(3+2i)x+xm\big)-m(3+2i)$.

An attempt to eliminate $c$ gave $3b+bi = -5-6i$, i.e. $b(3+i) = -5-6i$, so
$$b = \frac{-5-6i}{3+i} = \frac{(-5-6i)(3-i)}{10} = \frac{-15+5i-18i-6}{10},$$
which is not real.

But $b\in\RR$, and nonreal roots mean $b^2-4ac<0$. With $a = 1$ we have $r_1r_2 = c$, and the only way this is true (with $b,c$ real) is if $r_2 = \ol{r_1}$.

With $r_2 = \ol{r_1} = 3-2i$: $c = (3+2i)r_2 = 9+4 = 13$. Since $c = 13$ and $r_2 = 3-2i$,
$$r_1+r_2 = (3-2i)+(3+2i) = 6 = -b,$$
so the quadratic is
$$x^2-6x+13.$$

Check:
$$\begin{aligned}
(x-(3+2i))(x-(3-2i)) &= x^2-(3+2i)x-(3-2i)x+(3+2i)(3-2i)\\
&= x^2-(3x+2xi+3x-2xi)+13 = x^2-6x+13,
\end{aligned}$$
and completing the square, $x^2-6x+9+13-9 = (x-3)^2+4 = 0$, so $x-3 = \pm2i$ and $x = 3\pm2i$.
:::
:::

:::example A quadratic with root $-3+2\sqrt7$
:::solution
$$(x-(-3+2\sqrt7))(x-r_2) = x^2+(3-2\sqrt7)x-r_2x+(-3+2\sqrt7)r_2.$$
Attempt: evaluate the $x$-terms $(3-2\sqrt7)x-r_2x$ at $x = -3+2\sqrt7$:
$$(3-2\sqrt7)(-3+2\sqrt7)-r_2(-3+2\sqrt7),\qquad (3-2\sqrt7)(-3+2\sqrt7) = -9+6\sqrt7+6\sqrt7-4(7) = -37+12\sqrt7,$$
which led to $r_2 = \dfrac{3(-7+4\sqrt7)}{-3+2\sqrt7}$ and, multiplying through by the conjugate,
$$(-7+4\sqrt7)(-3-2\sqrt7) = 21+14\sqrt7-12\sqrt7-8\cdot7 = -35+2\sqrt7 = r_2.$$
Testing this:
$$\begin{aligned}
(x-(-3+2\sqrt7))(x-(-35+2\sqrt7)) &= (x+(3-2\sqrt7))(x+(35-2\sqrt7))\\
&= x^2+(35-2\sqrt7)x+(3-2\sqrt7)x+(3-2\sqrt7)(35-2\sqrt7),
\end{aligned}$$
whose $x$-coefficient is $(38-4\sqrt7)$, not rational. So the other root should be the conjugate,
$$-3-2\sqrt7.$$

:::
:::

## Exercises

:::exercise
$f\left(\frac x3\right) = x^2+x+1$. Find $\sum z$ over the $z$ for which $f(3z) = 7$.

:::solution
$f(x) = 9x^2+3x+1$, since
$$f\left(\tfrac x3\right) = 9\left(\tfrac{x^2}{9}\right)+3\left(\tfrac x3\right)+1 = x^2+x+1.$$
Then
$$f(3z) = 9(3z)^2+3(3z)+1 = 7 \;\Rightarrow\; 81z^2+9z+1 = 7 \;\Rightarrow\; 81z^2+9z-6 = 0 \;\Rightarrow\; 3(27z^2+3z-2) = 0.$$
By the quadratic formula on $27z^2+3z-2$ (with $9+216 = 225 = 15^2$):
$$z = \frac{-3\pm\sqrt{9-4(27)(-2)}}{2(27)} = \frac{-3\pm3\cdot5}{2\cdot3^3} = \frac{-1\pm5}{2\cdot3^2},$$
so $z = \frac{-1+5}{18} = \frac4{18} = \frac29$ or $z = -\frac6{18} = -\frac13$.
:::
:::

:::exercise
Find $x$ if $x\in\RR_{\ge0}$ and $x-1$ is the reciprocal of $x+\frac12$.

:::solution
$$x-1 = \frac{1}{x+\frac12} \;\to\; (x-1)\left(x+\tfrac12\right) = 1 \;\to\; x^2-\tfrac12x-\tfrac12-1 \;\to\; x^2-\tfrac12x-\tfrac32 = 0,$$
$$x = \frac{\frac12\pm\sqrt{\frac14-4\left(-\frac32\right)}}{2} = \frac{\frac12\pm\frac52}{2},$$
so $x = -1\in\RR_{<0}$ or $\boxed{x = \tfrac32}\in\RR_{>0}$.

:::
:::

:::exercise
:::solution
$6-\sqrt5\,i$:
$$(x-(6+\sqrt5\,i))(x-(6-\sqrt5\,i)) \to x^2-12x+41,$$
using $(-6-\sqrt5\,i)+(-6+\sqrt5\,i) = -12$ and $(6+\sqrt5\,i)(6-\sqrt5\,i) = 36+5 = 41$. ✓
:::
:::

:::exercise
Find all $a$ such that $ax^2-5x+9 = 0$ has only one distinct root.

:::solution
If the double root is $r$, then by Vieta $ar^2 = 9$ and $a\cdot2r = 5$, so $ar = \frac52$. Then
$$\tfrac52(r) = 9 \;\Rightarrow\; r = \tfrac{18}{5},\qquad a\cdot\tfrac{18}{5} = \tfrac52 \;\Rightarrow\; a = \tfrac{25}{36}.$$
Or, with the discriminant:
$$25-4a(9) = 0 \;\Rightarrow\; 25-36a = 0 \;\Rightarrow\; a = \tfrac{25}{36}.$$
Both work.

:::
:::

:::exercise
Given that one root of $2x^2+rx+s$, with $r,s\in\RR$, is $3+2i$, find $s$.

:::solution
The other root is $3-2i$, so $\frac s2 = (3+2i)(3-2i) = 13$ and $s = 26$.

:::
:::

:::exercise
$x = K^2(x-1)(x-2)$. Find all $K$ such that both roots $r_1,r_2$ are real.

:::solution
When $x = 0,1,2$, the factors vanish. So, trying $x = 0$: $0 = K^2(-1)(-2) \Rightarrow 0 = 2K^2 \Rightarrow K = 0$. Trying $x = 1$: $1 = K^2(0)(-1)$; from $x-K^2 = 0$, $1-K^2 = 0 \Rightarrow 1 = K^2 \Rightarrow K = \pm1$.

In fact every real $K$ works: expanding, $K^2x^2-(3K^2+1)x+2K^2 = 0$, with discriminant
$$(3K^2+1)^2-8K^4 = K^4+6K^2+1 > 0,$$
so the roots are always real (for $K = 0$ the equation is just $x = 0$).

:::
:::

:::exercise
Find $a,b$ such that $b-a$ is as small as possible and the entire graph of the equation $y = \dfrac{1-x^2}{1+x^2}$ lies within $a\le y\le b$.

:::solution
$$y = \frac{1-x^2}{1+x^2} = \frac{1^2-x^2}{1+x^2} = \frac{(1+x)(1-x)}{1+x^2},$$
and $x\neq i$ (the denominator never vanishes for real $x$). So
$$y(1+x^2) = (1-x)(1+x),$$
and $(1-x)(1+x)\to0$ …
:::
:::
