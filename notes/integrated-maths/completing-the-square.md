---
course: integrated-maths
chapter: 9
section: 9.3
title: Completing the Square
---

Completing the square rewrites a quadratic as a multiple of a perfect square plus a constant. Once a quadratic equation is in that form, the square root method solves it.

## Making a perfect square

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

:::problem
Suppose $k$ is a constant. In terms of $k$, what must be added to $x^2 + kx$ to produce a quadratic that is the square of a binomial?
:::solution
First, two squares:
$$(x + 4)^2 = (x + 4)(x + 4) = x^2 + 2(4)x + 16 = x^2 + 8x + 16,$$
$$(4t + 5)^2 = (4t)^2 + 2(4t\cdot 5) + 25 = 16t^2 + 40t + 25.$$
Now $x^2 + kx \to \frac12 k$; compare $(x + n)^2$. In general
$$(a + bx)^2 = a^2 + (bx)^2 + 2(ab)x,$$
so to get $x^2 + kx$, take $(a + bx)^2 - a^2$. (From $b^2x^2 + 2abx$: let $b = 1$, giving $x^2 + 2ax$; let $a = mk$ with $m \in \RR$, giving $x^2 + 2mkx$, so $m = \frac12$.) So
$$\left(x + \frac k2\right)^2 - a^2 \;\Rightarrow\; a = \frac12 k,\quad a^2 = \frac{k^2}{4},$$
$$\Rightarrow\; x^2 + kx = \left(x + \frac k2\right)^2 - \frac{k^2}{4}.$$
Check:
$$-\frac{k^2}{4} + \left(x + \frac k2\right)\left(x + \frac k2\right) = x^2 + \frac k2 x + \frac k2 x + \frac{k^2}{4} - \frac{k^2}{4} = x^2 + kx.$$
:::
:::

**Anything can be turned into a square**, because adding and subtracting the same number changes nothing:
$$
7 + 2 - 2 = 7.
$$

![X diagram with b on top, b/2 on both sides and a times c on the bottom, labelled “= perfect square”](/notes/integrated-maths/figures/r2-perfect-square-x.svg)

:::problem MEOW!!!!!!!!!
Write in the form $a(x + p)^2 + q$:

(a) $x^2 + 8x + 2$

(b) $-6x^2 - 18x - 7$
:::solution
As found above,
$$x^2 + kx = \left(x + \frac k2\right)^2 - \frac{k^2}{4},\qquad\text{i.e.}\qquad x^2 + kx + \left(\frac k2\right)^2 = \left(x + \frac k2\right)^2.$$

**(a)** $(x + 4)^2 = x^2 + 8x + 16$, so
$$x^2 + 8x + 2 = x^2 + 8x + 16 - 16 + 2 = (x + 4)^2 - 14.$$
Scratch along the way: $(a + bx)^2 = a^2 + (bx)^2 + 2(ab)x$; matching the constant $2$ instead, $\left(x + \frac{2\sqrt2}{2}\right)^2 = (x + \sqrt2)^2 = x^2 + 2(\sqrt2)x + 2 = x^2 + \sqrt8\,x + 2$; and asking for $kx + \frac{k^2}{4} = 8x + 2$, i.e. $4kx + k^2 = 32x + 8$. Also $c_1 = c_2 \pm q$, $c_1 - c_2 = q$.

**(b)** $-6x^2 - 18x - 7 = -6(x^2 + 3x) - 7$, and $x^2 + 3x = \left(x + \frac32\right)^2 - \frac94$. First pass:
$$-6\left(x^2 + 3x + \frac94\right) - \frac94 - 7 \;\to\; -6\left(x + \frac32\right)^2 - \frac94 - \frac{28}{4} = -6\left(x + \frac32\right)^2 - \frac{37}{4}.$$
Expanding to check: $x^2 + 2\cdot\frac32 x + \frac{3^2}{2^2}$, so $-6\left(x + \frac32\right)^2 = -6x^2 - 18x - \frac{6(9)}{4} = -6x^2 - 18x - \frac{27}{2}$. Forgot the $\times 6$:
$$-6x^2 - 18x - 7 = -6x^2 - 18x - \frac{27}{2} + \frac{27}{2} - 7,$$
$$\boxed{-6x^2 - 18x - 7 = -6\left(x + \frac32\right)^2 + \frac{13}{2}}$$
since $\frac{27}{2} - \frac{14}{2} = \frac{13}{2}$; check: $\frac{13}{2} - \frac{27}{2} = -\frac{14}{2} = -7$. (In decimals: $-13.5 + 6.5 = -7$.)
:::
:::

:::problem
Suppose $f(x) = x + \sqrt x$ and $g(x) = x + \frac14$. We find $g(f(g(f(g(f(7))))))$.

(a) Express $g(f(x))$ as the square of a binomial.
:::solution
**(a)** $g(f(x)) = x + \sqrt x + \frac14 = x^1 + x^{1/2} + \frac14$. Let $x + \sqrt x + \frac14 = a$, so $x + \sqrt x = a - \frac14$. Trying values:
$$x = 1:\ 1 + 1 + \frac14 = 2 + \frac14 = \frac94,\qquad x = 4:\ 4 + 2 + \frac14 = \frac{25}{4},$$
and then $\frac{49}{4}, \frac{81}{4}, \dots$ ($1 \mapsto 3$, $4 \mapsto 5$, $9 \mapsto 7$, $16 \mapsto 9$: with $\sqrt x = n$, $n \mapsto 2n + 1$).

Attempts: set $x + \sqrt x + \frac14 = \frac{m^2}{4}$, i.e. $4(x + \sqrt x) + 1 = m^2$; write $\left(x + \sqrt x + \frac{m^2}{4}\right) + \frac14 - \frac{m^2}{4}$; or $\left(x + \frac m2\right)^2 = \frac{1 - m^2}{4}$. (Also considered Vieta: $r_1r_2 = c$, $r_1 + r_2 = -b$.)

Since $x^2 + kx + \frac{k^2}{4} = \left(x + \frac k2\right)^2$, and $g(f(x)) = x + \sqrt x + \frac14$:
$$\left(\sqrt x + \frac12\right)^2 = x + \sqrt x + \frac14.$$
(Matching $(m + n)^2$: $m^2 = x \to m = \pm\sqrt x$; $n^2 = \frac14 \to n = \pm\frac12$; $2mn = 2\sqrt x\cdot\frac12 = \sqrt x$.)

Let $h(x) = g(f(x))$, so $g(f(g(f(g(f(7)))))) = h(h(h(7)))$:
$$h(7) = \left(\sqrt7 + \frac12\right)^2,\qquad h(h(7)) = \left(\sqrt{h(7)} + \frac12\right)^2,$$
$$\begin{aligned}
h(h(h(7))) &= \left(\sqrt{\left(\sqrt{h(7)} + \tfrac12\right)^2} + \frac12\right)^2 = \left(\sqrt{h(7)} + \frac12 + \frac12\right)^2 = \left(\sqrt{h(7)} + 1\right)^2\\
&= \left(\sqrt{\left(\sqrt7 + \tfrac12\right)^2} + 1\right)^2 = \left(\sqrt7 + \frac12 + 1\right)^2 = \left(\sqrt7 + \frac32\right)^2\\
&= 7 + \frac32\left(\sqrt7\right)(2) + \frac{3^2}{2^2} = 3\sqrt7 + 7 + \frac94 = 3\sqrt7 + \frac{37}{4}.
\end{aligned}$$
:::
:::

## Solving equations by completing the square

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

:::problem
(a) $t^2 - 4t = 18$

(b) $4y^2 + 24y = -37$
:::solution
**(a)** Add $\frac{16}{4} = 4$:
$$t^2 - 4t + 4 = 18 + 4 \;\to\; (t - 2)^2 = 22 \;\to\; (t - 2)^2 - 22 = 0.$$
So $(t - 2)^2 = 22$, $t - 2 = \pm\sqrt{22}$, and $t = 2 \pm \sqrt{22}$. With the formula:
$$\frac{4 \pm \sqrt{16 + 4(18)}}{2} = \frac{4 \pm \sqrt{88}}{2} = \frac{2\left(2 \pm \sqrt{22}\right)}{2} = 2 \pm \sqrt{22}.$$

**(b)**
$$4y^2 + 24y = -37 \;\to\; 4(y^2 + 6y) = -37 \;\to\; 4(y^2 + 6y + 9) = -37 + 36$$
$$\to\; 4(y + 3)^2 = -1 \;\to\; y + 3 = \pm\sqrt{-\frac14} = \pm\sqrt{\frac14}\,(i) = \pm\frac12 i,$$
$$y = -3 \pm \frac12 i.$$
Again: $4y^2 + 24y = -37 \to 4(y + 3)^2 - 36 = -37$; adding $36$, $4y^2 + 24y + 36 = -37 + 36$, so $4(y^2 + 6y + 9) = -1$, $4(y + 3)^2 = -1$, $\sqrt{-\frac14} = y + 3$, $y = -3 \pm \frac12 i$. With the formula:
$$\frac{-24 \pm \sqrt{24^2 - 4(4)(37)}}{2\cdot 4} = \frac{-24 \pm \sqrt{-16}}{2\cdot 4} = \frac{-24 \pm 4i}{2\cdot 4} = \frac{4(-6 \pm i)}{2\cdot 4} = -\frac62 \pm \frac i2 = -3 \pm \frac12 i.$$

:::
:::

:::example
Solve $\sqrt5\,x^2-(8\sqrt5+10)x+(20\sqrt5+40) = 0$.

:::solution
Factor $\sqrt5$ out of the first two terms:
$$\sqrt5\left(x^2-\frac{(8\sqrt5+10)\sqrt5}{5}\,x\right)+(20\sqrt5+40) = 0,
\qquad
\sqrt5\left(x^2-\frac{40+10\sqrt5}{5}\,x\right)+\cdots$$
and $\frac{40+10\sqrt5}{5}x = (8+2\sqrt5)x$; half the coefficient is $4+\sqrt5$. To complete the square on $x^2-(8+2\sqrt5)x$ we need
$$\frac{(8+2\sqrt5)^2}{4} = \frac{64+4(5)+2(8)(2\sqrt5)}{4} = \frac{84+32\sqrt5}{4} = 21+8\sqrt5.$$
So
$$\begin{aligned}
\sqrt5\big(x-(4+\sqrt5)\big)^2-(21\sqrt5+40)+20\sqrt5+40 &= 0\\
\sqrt5\big(x-(4+\sqrt5)\big)^2-\sqrt5 &= 0\\
\big(x-(4+\sqrt5)\big)^2 &= 1\\
x-(4+\sqrt5) = \pm1 \;\Rightarrow\; x &= 4+\sqrt5\pm1,
\end{aligned}$$
that is, $x = 5+\sqrt5$ or $x = 3+\sqrt5$.

:::
:::

:::problem
$a + b = 6$ and $ab = -19$.
:::solution
$$(6 - b)b = -19 \;\to\; 6b - b^2 = -19 \;\to\; -(b^2 - 6b) = -19,$$
$$-(b^2 - 6b + 9) = -19 - 9 \;\to\; -(b - 3)^2 = -28 \;\to\; (b - 3)^2 = 28,$$
$$b - 3 = \pm\sqrt{28} \;\to\; b = 3 \pm \sqrt{28} = \boxed{3 \pm 2\sqrt7}\quad(4\cdot 7 = 28).$$
Check:
$$3 + 2\sqrt7 + 3 - 2\sqrt7 = 6,\qquad \left(3 + 2\sqrt7\right)\left(3 - 2\sqrt7\right) = 3^2 - \left(2\sqrt7\right)^2 = 9 - 28 = -19.\ \checkmark$$
:::
:::

## Exercises

:::exercise
Complete the square of the following quadratics.

:::solution
(a) $x^2+8x \;\to\; x^2+8x+16-16 \;\to\; (x+4)^2-16$

(b) $y^2-6y+1 \;\to\; y^2-6y+9-8 \;\to\; (y-3)^2-8$

(c) $2z^2+20z+3 \;\to\; 2(z^2+10z)+3 \;\to\; 2(z^2+10z+25)-50+3 \;\to\; 2(z+5)^2-47$

(d)
$$\begin{aligned}
9x^2+\tfrac12x+\tfrac43 &\to 9\left(x^2+\tfrac1{18}x\right)+\tfrac43
\to 9\left(x^2+\tfrac1{18}x+\tfrac{(1/18)^2}{4}\right)-\tfrac{9}{1296}+\tfrac43\\
&\to 9\left(x+\tfrac1{36}\right)^2-\tfrac{1}{144}+\tfrac43
\to 9\left(x+\tfrac1{36}\right)^2+\tfrac{191}{144},
\end{aligned}$$
since $\frac43-\frac1{144} = \frac{192-1}{144} = \frac{191}{144}$.

:::
:::

:::exercise
Find $n\in\RR^+$ such that $n = \frac1n+8$.

:::solution
Squaring gives $n^2 = \left(\frac1n+8\right)^2$. Alternatively, $n-8 = \frac1n$, so
$$n^2-8n-1 = 0 \;\Rightarrow\; (n-4)^2-17 = 0 \;\Rightarrow\; (n-4)^2 = 17 \;\Rightarrow\; n-4 = \pm\sqrt{17} \;\Rightarrow\; n = \pm\sqrt{17}+4,$$
so (since $n>0$) $n = \sqrt{17}+4$.
:::
:::

:::exercise
Find all $x,y\in\RR$ such that $x^2+y = 12 = y^2+x$.

:::solution
$x^2+y = 12$ and $y^2+x = 12$, so
$$x^2+y = y^2+x \;\Rightarrow\; x^2-x = y^2-y \;\Rightarrow\; x(x-1) = y(y-1).$$
Completing the square, $x^2-x+\frac14 = y^2-y+\frac14$, so $\left(x-\frac12\right)^2 = \left(y-\frac12\right)^2$ and $x-\frac12 = \pm\left(y-\frac12\right)$: either $x = y$ or $x+y = 1$.

If $x = y$: $x^2+x = 12$, so $\left(x+\frac12\right)^2-\frac14 = 12$, $\left(x+\frac12\right)^2 = \frac{48}4+\frac14 = \frac{49}{4}$, $x+\frac12 = \pm\frac{\sqrt{49}}{\sqrt4} = \pm\frac72$, so $x = 3$ or $x = -4$, with $y = x$ (check: $9+3 = 12$ and $16-4 = 12$).

If $x+y = 1$: $x^2+1-x = 12$, $x^2-x-11 = 0$, $x = \frac{1\pm3\sqrt5}{2}$ and $y = 1-x = \frac{1\mp3\sqrt5}{2}$.

Another route: $x = 12-y^2$ in $x(x-1) = y(y-1)$ gives
$$(12-y^2)(11-y^2) = y(y-1) \;\Rightarrow\; 132+y^4-23y^2 = y^2-y \;\Rightarrow\; y^4-24y^2+y+132 = 0.$$
With $u = y^2$: $u^2-24u = -y-132$, so
$$(u-12)^2 = -y-132+\frac{6^2\cdot4^2}{4} = -y-132+144,\qquad (y^2-12)^2 = -y+12,$$
i.e. $(y^2-12)(y^2-12)+y-12 = 0$, together with $x^2+y = 12$.

So
$$(x,y)\in\left\{(3,3),\ (-4,-4),\ \left(\tfrac{1+3\sqrt5}{2},\tfrac{1-3\sqrt5}{2}\right),\ \left(\tfrac{1-3\sqrt5}{2},\tfrac{1+3\sqrt5}{2}\right)\right\}.$$

:::
:::

:::exercise
Find all $x_n\in\RR$:
$$\begin{aligned}
2x_1 &= x_5^2-23\\
4x_2 &= x_1^2+7\\
6x_3 &= x_2^2+14\\
8x_4 &= x_3^2+23\\
10x_5 &= x_4^2+34
\end{aligned}$$

:::solution
First manipulations: $x_1^2 = 4x_2-7$, so $x_1 = \pm\sqrt{4x_2-7}$; $4x_1 = 2x_5^2-46$; $4x_2 = x_1^2+7$; $2x_1-x_1^2$.

Adding all five equations:
$$\begin{aligned}
2x_1+4x_2+6x_3+8x_4+10x_5 &= 2(x_1+2x_2+3x_3+4x_4+5x_5)\\
&= x_5^2-23+x_1^2+7+x_2^2+14+x_3^2+23+x_4^2+34\\
&= x_5^2+x_1^2+x_2^2+x_3^2+x_4^2+55,
\end{aligned}$$
so
$$(x_1^2-2x_1)+(x_2^2-4x_2)+\cdots+55 = 0.$$
Completing each square:
$$(x_1-1)^2-1+(x_2-2)^2-4+(x_3-3)^2-9+(x_4-4)^2-16+(x_5-5)^2-25+55 = 0,$$
and $-55+55 = 0$, so
$$(x_1-1)^2+(x_2-2)^2+(x_3-3)^2+(x_4-4)^2+(x_5-5)^2 = 0.$$
Since all are squared, all $(x_n-c)^2\ge0$, but since they are added, each has to be $0$, so
$$x_1 = 1,\quad x_2 = 2,\quad x_3 = 3,\quad x_4 = 4,\quad x_5 = 5.$$

To verify, we plug into the equations:

| Equation | Check |
|---|---|
| $2x_1 = x_5^2-23$ | $2(1) = 25-23 = 2$ ✓ |
| $4x_2 = x_1^2+7$ | $4(2) = 1+7 = 8$ ✓ |
| $6x_3 = x_2^2+14$ | $6(3) = 4+14 = 18$ ✓ |
| $8x_4 = x_3^2+23$ | $8(4) = 9+23 = 32$ ✓ |
| $10x_5 = x_4^2+34$ | $10(5) = 16+34 = 50$ ✓ |

So $x_n\mapsto n$ for all $n\in\{1,\dots,5\}$.
:::
:::
