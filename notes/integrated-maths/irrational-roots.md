---
course: integrated-maths
chapter: 10
section: 10.13
title: Irrational Roots
---

Some roots are irrational. This page proves that $\sqrt2$ is irrational, shows how to tell that a polynomial has an irrational root, and builds polynomials with rational coefficients from irrational roots by pairing each root with its conjugate.

:::problem
Prove that $\sqrt2$ is irrational.

:::solution
Let $p, q \in \ZZ_{>0}$ be coprime such that $\sqrt2 = \frac pq$, that is to say, $\sqrt2$ can be represented rationally. Thus
$$2 = \frac{p^2}{q^2} \implies 2q^2 = p^2,$$
so $p$ is even by definition. But if $p = 2r$, $r \in \ZZ_{>0}$, then
$$\sqrt2 = \frac{2r}{q} \implies 2 = \frac{(2r)^2}{q^2} \implies 2q^2 = 4r^2 \implies q^2 = 2r^2,$$
ah! This cannot be, since we assumed $p, q$ were coprime! Thus we have a contradiction, and there is no rational representation of $\sqrt2$.
:::
:::

:::problem
Prove that if $p, q \in \QQ$, then $\frac pq \in \QQ$ (given that $q \neq 0$).

:::solution
Let $p = \frac{p_1}{p_2}$ and $q = \frac{q_1}{q_2}$, with $p_i, q_i \in \ZZ$ and $p_i, q_i \neq 0$. Then
$$\frac pq = \frac{p_1}{p_2}\left(\frac{q_2}{q_1}\right) = \frac{p_1q_2}{p_2q_1},$$
and since $p_i, q_i \in \ZZ$, their products are in $\ZZ$, so $\frac pq \in \QQ$.
:::
:::

:::remark
Similar to complex conjugate notation ($\overline{a+bi} = a - bi$), we have radical conjugate notation: $\underline{a + b\sqrt c} = a - b\sqrt c$. (This is non-standard, however.)
:::

:::problem
Let $f(x) = x^3 - x - 2$. Show that there are no rational roots and that there exists at least one irrational root.

:::solution
By the Rational Root Theorem, if rational roots exist then $r_i \in \pm\{1, 2\}$.

$$f(-1) = -2,\qquad f(1) = -2,\qquad f(-2) = -8,\qquad f(2) = 4.$$
$f(0) = -2$ and $f(2) = 4$, so there exists a real root there. But as we just showed, this root cannot be rational.
:::
:::

:::problem
Find a polynomial with rational coefficients that has $2 - \sqrt3$ and $3 + 2\sqrt5$ as roots.

:::solution
Clearly such a polynomial must be of degree at least $4$:
$$\big(x - (2-\sqrt3)\big)\big(x - (2+\sqrt3)\big)\big(x - (3+2\sqrt5)\big)\big(x - (3-2\sqrt5)\big).$$
The first pair gives
$$x^2 - \big[(2-\sqrt3) + (2+\sqrt3)\big]x + (2-\sqrt3)(2+\sqrt3) = x^2 - 4x + 1,$$
and the second pair gives $x^2 - 6x - 11$. So
$$(x^2 - 4x + 1)(x^2 - 6x - 11) = x^4 - 10x^3 + 14x^2 + 38x - 11,$$
so $P(x) = x^4 - 10x^3 + 14x^2 + 38x - 11$.

:::
:::

:::problem
Prove there exists $p(x) = a_nx^n + \cdots + a_0$ such that $a_i \in \QQ$ for all $i$ and there is a root $r_i \in \QQ^c$ with $r_i = \sqrt{3 + \sqrt7}$.

:::solution
First try, with the quadratic formula:
$$\sqrt{3 + \sqrt7} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$
There is a factor of $2a$ to divide out, which leaves something of the form $\sqrt{\frac{b^2}{4} - ac}$. Matching, $4(3) = b^2 \Rightarrow b = \pm\sqrt{12}$, and $-ac = \sqrt7$ (that is, $-4ac = \sqrt{28}$). This cannot be, since we need $a_i \in \QQ$ for all $i$.

Instead, multiply out conjugates:
$$\begin{aligned}
\left(x - \sqrt{3+\sqrt7}\right)\left(x + \sqrt{3+\sqrt7}\right) &= x^2 - (3 + \sqrt7),\\
\big(x^2 - (3+\sqrt7)\big)\big(x^2 - (3-\sqrt7)\big) &= (x^2 - 3 - \sqrt7)(x^2 - 3 + \sqrt7)\\
&= (x^2 - 3)^2 - (\sqrt7)^2,
\end{aligned}$$
so
$$p(x) = x^4 - 6x^2 + 2.$$
Its factors are $\left(x - \sqrt{3+\sqrt7}\right)\left(x + \sqrt{3+\sqrt7}\right)\left(x \pm \sqrt{3-\sqrt7}\right)$, so $\left(x \pm \sqrt{3 \pm \sqrt7}\right)$.
:::
:::

:::problem
Let $g(x) = 4x^4 - 16x^2 + 15$. Find all roots and factor.

:::solution
By the Rational Root Theorem,
$$r_i \in \pm\left\{1, 3, 5, 15, \tfrac14, \tfrac34, \tfrac54, \tfrac{15}{4}, \tfrac12, \tfrac32, \tfrac52, \tfrac{15}{2}\right\}.$$
Since $x^2(4x^2 - 16) = -15$, we need $4x^2 < 16$, so $x < 2$. So the root cannot be in $+\left\{3, 5, 15, \tfrac{15}{4}, \tfrac52, \tfrac{15}{2}\right\}$, and we now have
$$1, -1, -3, -5, -15, \tfrac14, -\tfrac14, \tfrac34, -\tfrac34, \tfrac54, -\tfrac54, -\tfrac{15}{4}, \pm\tfrac12, \pm\tfrac32, -\tfrac52, -\tfrac{15}{2}.$$

$g(0) = 15$. An educated guess, since $2^4 = 16$, is $-\frac32$:
$$g\left(-\tfrac32\right) = 4\cdot\frac{81}{16} - 16\cdot\frac94 + 15 = \frac{81}{4} - \frac{144}{4} + \frac{60}{4} = -\frac34,$$
so there exists a root between $0$ and $-\frac32$. Next, $g(-1) = 4 - 16 + 15 = 3$, so $\exists\, r_i \in \left(-\frac32, -1\right)$. $-\frac54$ seems possible:
$$g\left(-\tfrac54\right) = 4\cdot\frac{5^4}{4^4} - 16\left(\frac{25}{16}\right) + 15 = \frac{625}{64} - \frac{1600}{64} + \frac{960}{64} = \frac{1585}{64} - \frac{1600}{64} = -\frac{15}{64},$$
so $\exists\, r_i \in \left(-\frac54, -1\right)$, but it must be irrational.

Let’s try $-\frac{15}{2}$, tracking signs in synthetic division:
$$\begin{array}{r|rrrrr}
-\tfrac{15}{2} & 4 & 0 & -16 & 0 & 15\\
 & & -30 & 225 & - & +\\ \hline
 & 4 & -30 & 209 & - & +
\end{array}$$
So $\exists\, r_i \in \left(-\frac{15}{2}, -\frac32\right)$.

Now let $x' = x^2$. Then
$$4x'^2 - 16x' + 15 = (2x' - 3)(2x' - 5).$$
(By the quadratic formula, $x' = \frac{16 \pm \sqrt{16^2 - 4(4)(15)}}{8}$, with $256 - 240 = 16$.)

So
$$g(x) = (2x^2 - 3)(2x^2 - 5) = 4\left(x^2 - \tfrac32\right)\left(x^2 - \tfrac52\right).$$
From $x^2 - \frac32 = 0$, $x = \pm\frac{\sqrt6}{2}$; from $x^2 - \frac52 = 0$, $x = \pm\frac{\sqrt{10}}{2}$.
:::
:::

## Exercises

:::exercise
Let $p(x) = 2x^3 - x^2 - 5x + 3$.
:::solution
Note $p(0) = 3$ and $p(1) = -1$, so there is a root between $0$ and $1$. But $p\left(\tfrac12\right) = \tfrac12$, thus the root is irrational.
:::
:::

:::exercise
$r = \sqrt2 + \sqrt3$ is a root of $x^4 - 10x^2 + 1 = 0$.
:::solution
So try $1$: $f(1) = 1 - 10 + 1 = -8$ ✗. Also $f(-1) = 1 - 10 + 1 = -8$ and $f(0) = 1$. So there is a root $r_i \in (0, 1)$ and another between $-1$ and $0$.

For $\sqrt2 + \sqrt3$: let $z = x^2$, so $z^2 - 10z + 1 = 0$, which gives
$$z = \frac{10 \pm \sqrt{100 - 4}}{2} = \frac{10 \pm \sqrt{2^5\cdot 3}}{2} = 5 \pm 2\sqrt6.$$
So those are the two roots for $z = x^2$:
$$\bigl(x^2 - (5 + 2\sqrt6)\bigr)\bigl(x^2 - (5 - 2\sqrt6)\bigr),$$
and the first factor gives
$$x = \pm\frac{\sqrt{20 + 8\sqrt6}}{2} = \pm\frac{2\sqrt{5 + 2\sqrt6}}{2} = \pm\sqrt{5 + 2\sqrt6}.$$
(Side scratch: the quadratic formula $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$; $b^2 = 20$, $\sqrt{20} = 2\sqrt5$.)
:::
:::
