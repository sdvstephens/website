---
course: integrated-maths
chapter: 9
section: 9.2
title: Relating Roots and Coefficients
---

The sum and the product of the roots of a quadratic can be read off from its coefficients without solving the equation: if $ax^2 + bx + c$ has roots $r$ and $s$, then $r + s = -\frac ba$ and $rs = \frac ca$. These relations are **Vieta’s formulas**; the solutions on this page and later ones cite them as “Vieta”.

For example, $x^2 - 7x + 10$: the roots are $x = 5, 2$.

:::problem
Let $ax^2 + bx + c$ have roots $r$ and $s$.

(a) Show that $ax^2 + bx + c = a(x - r)(x - s)$ for all $x$.

(b) Find $r + s$ in terms of $a$ and $b$.

(c) Find $rs$ in terms of $c$ and $a$.
:::solution
**(a)** $ax^2 + bx + c = a\left(x^2 + \frac ba x + \frac ca\right)$, and
$$a\left(x^2 + \frac ba x + \frac ca\right) = a(x - r)(x - s).$$
$a$ cannot be $0$, so cancel it:
$$x^2 + \frac ba x + \frac ca = (x - r)(x - s) = x^2 - (r + s)x + sr,$$
$$\frac ba x + \frac ca = -(r + s)x + sr \;\Rightarrow\; \frac{bx + c}{a} = -(r + s)x + sr \;\Rightarrow\; bx + c = -a(r + s)x + asr,$$
so $-(r + s) = \frac ba$ and $sr = \frac ca$. Since $bx + c = a(-(r + s)x + sr)$,
$$ax^2 + a\big(-(r + s)x + sr\big) = ax^2 + a\left(\frac ba x + \frac ca\right) = ax^2 + bx + c.$$
Alternatively: $ax^2 + bx + c = ax^2 - a(r + s)x + ars \Rightarrow a = a,\ b = -a(r + s),\ c = ars$.

**(b)** $r + s = -\dfrac ba$.

**(c)** $rs = \dfrac ca$.
:::
:::

:::problem
Find the sum and the product of the roots of each equation: $x^2 - 13x + 36 = 0$ and $-2006x^2 = 2007x + 1977$.
:::solution
Well, $r + s = -\frac ba$ and $rs = \frac ca$, so we have:

1. $r + s = -\dfrac{(-13)}{1} = 13$ and $rs = \dfrac{36}{1} = 36$.
2. $r + s = -\dfrac{2007}{2006}$ and $rs = \dfrac{1977}{2006}$.
:::
:::

:::problem
Let $s, r$ be the roots of $x^2 - px + q = 0$.

(a) Relate $r + s$, $sr$, $r$, $s$ to $p$ and $q$.
:::solution
**(a)** $s + r = p$ and $sr = q$, so $s = p - r$ and $r = p - s$; also $s = \frac qr$ and $r = \frac qs$ (for nonzero roots). Then
$$r = \frac{q}{p - r} \;\to\; r(p - r) = q \;\to\; pr - r^2 = q \;\to\; r^2 - pr = -q.$$
So $r^2 - pr = -q$, the same as $x^2 - px = -q$ (that is, $pr - r^2 = -x^2 + px$ at $x = r$). Likewise
$$s = \frac{q}{p - s} \;\to\; s^2 - ps = -q.$$
Adding,
$$r^2 - pr + s^2 - ps = -2q \;\to\; r^2 + s^2 = -2q + pr + ps.$$

Next, $r^2 + s^2$ in terms of $p, q$. Since
$$x^2 - px + q = (x - r)(x - s) = x^2 - rx - sx + rs,$$
$r + s = p$ and $rs = q$. So we want $r^2 + s^2$ in terms of $rs$ and $r + s$. Trying products:
$$rs(r + s) = r^2s + rs^2 = r(rs + s^2),$$
$$(r + s)(r^2 + s^2) = r^3 + s^2r + sr^2 + s^3 = r(r^2 + sr) + s(s^2 + sr),$$
$$r^2s^2(r + s) = r^3s^2 + r^2s^3.$$
Squaring the sum: $(r + s)^2 = r^2 + 2rs + s^2 = r^2 + s^2 + 2sr$, so $(r + s)^2 - 2sr = r^2 + s^2$, and
$$\boxed{r^2 + s^2 = p^2 - 2q}.$$
:::
:::

:::problem
Find $a, b \in \RR$ if $a + 2i$ and $b - 5i$ are the roots of $x^2 + (-4 + 3i)x + (13 + i) = 0$.
:::solution
$$a + b - 3i = 4 - 3i \quad\text{and}\quad (a + 2i)(b - 5i) = 13 + i.$$
So $a + b = 4$, and
$$ab + 2bi - 5ai + 10 = 13 + i \;\Rightarrow\; ab + 2bi - 5ai = 3 + i.$$
With $a = 4 - b$:
$$(4 - b)b + 2bi - 5i(4 - b) = 4b - b^2 + 2bi - 20i + 5bi,$$
$$4b - b^2 + 7bi - 20i = 3 + i \;\Rightarrow\; 4b - b^2 + 7bi = 3 + 21i.$$
Real parts: $4b - b^2 = 3 \to b^2 - 4b + 3 = 0 \to b = \dfrac{4 \pm \sqrt{16 - 4(3)}}{2} = 2 \pm 1$, so $b = 3$ or $b = 1$ (check: $12 - 9 = 3$ ✓, $4 - 1 = 3$ ✓).

Imaginary parts: $7bi = 21i \to b = 3$.

So $b = 3$ and $a = 4 - b = 1$.

:::
:::

:::problem
Given that the sum of the zeros, the product of the zeros and the sum of the coefficients of $f(x) = ax^2 + bx + c$ are equal, show that all three of these quantities must be equal to $a$.
:::solution
$f(x) = ax^2 + bx + c = a(x - r)(x - s)$, with
$$r + s = -\frac ba,\qquad rs = \frac ca = -\frac ba = r + s = a + b + c.$$
Then
$$-\frac ba = \frac ca \;\to\; -b = c,\qquad a + b + c = a + b + (-b) = a,$$
so $a + b + c = a$.
:::
:::

:::example
Roots $r$, $s$ of $a(b - c)x^2 + b(c - a)x + c(a - b) = 0$, one of which is $1$.

:::solution
$r + s = -\frac ba \to ar + as = -b$. Here
$$r + s = -\frac{b(c - a)}{a(b - c)},\qquad rs = \frac{c(a - b)}{a(b - c)}.$$
With $s = 1$:
$$r = -\frac{b(c - a)}{a(b - c)} - 1 = \frac{-b(c - a) - a(b - c)}{a(b - c)} = \frac{-bc + ab - ab + ac}{a(b - c)} = \frac{c(a - b)}{a(b - c)}.$$

Also tried: $a(x + m)(x + n) = ax^2 + bx + c$, so $(x + m)(x + n) = x^2 + \frac ba x + \frac ca$.
:::
:::

## Exercises

:::exercise
$r_1^2+r_2^2 = 10$, where $r_1,r_2$ are the roots of $x^2+2hx = 3$. Find $|h|$.

:::solution
By Vieta, $-2h = r_1+r_2$ and $-3 = r_1r_2$.

Then $r_1r_2(r_1+r_2) = r_1^2r_2+r_1r_2^2 = 6h$.

Substituting for $r_2$ (and using $r_2^2 = 10-r_1^2$):
$$r_1^2+\left(\frac3{r_1}\right)^2 = 10 \;\Rightarrow\; r_1^2+\frac9{r_1^2} = 10 \;\Rightarrow\; r_1^4+9-10r_1^2 = 0 \;\Rightarrow\; r_1^4-10r_1^2 = -9$$
$$\Rightarrow\; r_1^2(r_1^2-10) = -9 \;\Rightarrow\; -r_1^2r_2^2 = -9 \;\Rightarrow\; r_1^2r_2^2 = 9.$$

Now $\sqrt{h^2} = |h|$, and from $-2h = r_1+r_2$,
$$4h^2 = r_1^2+r_2^2+2r_1r_2 = 10+2(-3) = 4,$$
so $h^2 = 1 \Rightarrow h = \pm1$, and $|\pm1| = \boxed{1}$.

:::
:::

:::exercise
The roots $a,b$ of $x^2-mx+2 = 0$ satisfy $a+b = m$, $ab = 2$; and for $x^2-px+q = 0$, $\left(a+\frac1b\right)+\left(b+\frac1a\right) = p$ and $\left(a+\frac1b\right)\left(b+\frac1a\right) = q$. Solve for $q$.

:::solution
$$ab+\left(\tfrac1b\right)b+\left(\tfrac1a\right)a+\frac1{ab} = q \;\Rightarrow\; 2+ab+\frac1{ab} \;\Rightarrow\; 2+2+\frac12 \;\Rightarrow\; \boxed{\tfrac92 = q}.$$
For fun:
$$a+b+\frac{a+b}{ab} = m+\frac m2 = \frac{2m+m}{2} = \frac32m = p,$$
so the two equations are $x^2-\frac32mx+\frac92 = 0$ and $x^2-mx+2 = 0$.

:::
:::

:::exercise
:::solution
The roots satisfy $r_1-\frac1{r_1} = a-\frac1a$, i.e. $\frac{r_1^2-1}{r_1} = \frac{a^2-1}{a}$, so $a(r_1^2-1) = (a^2-1)r_1$. So $r_1 = a$ and $r_2 = -\frac1a$: indeed $r_1r_2 = a\left(-\frac1a\right) = -1$ and $r_1+r_2 = a-\frac1a$.

By the quadratic formula,
$$x = \frac{(a-\frac1a)\pm\sqrt{(a-\frac1a)^2+4}}{2},$$
where
$$\left(a-\tfrac1a\right)^2+4 = a^2+\tfrac{1^2}{a^2}+2(a)\left(-\tfrac1a\right)+4 = a^2+\tfrac1{a^2}-2+4 = \frac{a^4+2a^2+1}{a^2} = \left(\frac{a^2+1}{a}\right)^2,$$
so $x = \frac12\left[\left(a-\frac1a\right)\pm\left(a+\frac1a\right)\right]$, i.e. $x = a$ or $x = -\frac1a$.

**Answer:** $a = r_1$, $-\frac1a = r_2$.

:::
:::

:::exercise
If $\dfrac{x^2-bx}{ax-c} = \dfrac{m-1}{m+1}$ has solutions for $x$ such that each solution is the negative of the other, find $m$ in terms of $a$ and $b$.

:::solution First attempt
$$(x^2-bx)(m+1) = (m-1)(ax-c)$$
$$mx^2+x^2-bmx-bx = max-mc-ax+c$$
$$x^2(m+1)+x(a-ma-b-bm)+c(m-1) = 0.$$
We want $r_1 = -r_2$. By Vieta,
$$r_1+r_2 = -\frac{a-ma-b-bm}{m+1} = 0,\qquad r_1r_2 = \frac{c(m-1)}{m+1}.$$

:::

:::solution Second attempt
We want $r_a = -r_b$ for the roots $r_n$ in $x$, with $m\neq-1$; find $m$ in terms of $a,b$.
$$(m+1)(x^2-bx) = (m-1)(ax-c).$$
Also $ax-c\neq0$, i.e. $ax\neq c$, $x\neq\frac ca$.

If the roots are $\pm r_1$, the quadratic is a multiple of $(x+r_1)(x-r_1)$, with no $x$ term: it should look like $x^2(m+1)+c(m-1) = 0$, i.e. $x^2+\frac{c(m-1)}{m+1} = 0$.

Expanding,
$$mx^2-mbx+x^2-bx-max+mc+ax-c = 0,$$
$$x^2(m+1)-mbx-bx-max+ax+c(m-1) = 0,$$
so the $x$-term is $x(-mb-b-ma+a)$, and its coefficient $B = -mb-b-ma+a$ must be $0$. By Vieta,
$$r_1r_2 = \frac{c(m-1)}{m+1},\qquad r_1+r_2 = -\frac{-mb-b-ma+a}{m+1}.$$
$r_1+r_2 = 0$ gives $-mb-b-ma+a = 0$, so $-ma-mb = b-a$, i.e. $-m(a+b) = b-a$, and
$$m = -\frac{b-a}{a+b} = \frac{-b+a}{a+b},\qquad \text{so}\quad m = \frac{a-b}{a+b}.$$
Also $-r_1^2 = \frac{c(m-1)}{m+1}$, so $r_1 = \frac{c(m-1)}{r_2(m+1)} = \pm\sqrt{-\frac{c(m-1)}{m+1}}$.
:::
:::

:::exercise
Find all $m$ for which the zeros of $2x^2-mx-8$ differ by $m-1$.

:::solution
$$r_1r_2 = \frac{-8}{2} = -4,\qquad r_1+r_2 = \frac m2,\qquad r_1+m-1 = r_2 \iff r_1 = r_2-m+1.$$
(So $r_1(r_1+m-1) = -4$, i.e. $r_1^2+r_1(m-1)+4 = 0$.) Then
$$r_1+r_1+m-1 = \frac m2 \;\Rightarrow\; 2r_1+m-1 = \frac m2,$$
and $r_1 = -4/r_2$. Doubling,
$$4r_1+2(m-1) = m \;\Rightarrow\; 4r_1+2m-2-m = 0 \;\Rightarrow\; 4r_1+m-2 = 0,$$
and with $m = 2(r_1+r_2)$:
$$4r_1+2r_1+2r_2-2 = 0 \;\Rightarrow\; 6r_1+2r_2-2 = 0 \;\Rightarrow\; 3r_1+r_2 = 1.$$
(Equivalently, $m = r_2-r_1+1$ and $2(r_1+r_2) = m$ give $2r_1+2r_2 = r_2-r_1+1$, so $3r_1+r_2 = 1$, i.e. $r_2 = 1-3r_1$.)

Substituting $r_2 = -4/r_1$:
$$\frac{3r_1^2}{r_1}+\frac{-4}{r_1} = 1 \;\Rightarrow\; 3r_1^2-4-r_1 = 0 \;\Rightarrow\; 3r_1^2-r_1-4 = 0,$$
$$r_1 = \frac{1\pm\sqrt{1+4(3)(4)}}{2(3)} = \frac{1\pm\sqrt{49}}{6},\qquad r_1 = \frac{1+7}{6} = \frac43 \quad\text{or}\quad r_1 = \frac{1-7}{6} = -1.$$
For $r_1 = \frac43$: $\frac43r_2 = -4$, so $r_2 = -3$; for $r_1 = -1$: $r_2 = 4$.

Checks of $r_1 = r_2-m+1$ with $m = 2r_1+2r_2$: $-1 = 4-2(-1)-2(4)+1 = 4+2-8+1 = -1$ ✓, and $-3-2\left(\frac43\right)-2(-3)+1 = 4-\frac83 = \frac{12}3-\frac83 = \frac43$ ✓.

Labelling the pairs $r_{11} = \frac43$, $r_{21} = -3$ and $r_{12} = -1$, $r_{22} = 4$: from $r_1+r_2 = \frac m2$, $2r_1+2r_2 = m$, so
$$2r_{11}+2r_{21} = 2\left(\tfrac43\right)+2(-3) = -\tfrac{10}3 = m_1,\qquad 2r_{12}+2r_{22} = 2(-1)+2(4) = 6 = m_2.$$
$$m\in\left\{-\tfrac{10}3,\ 6\right\},\quad\text{with roots}\quad \begin{cases}\frac43,\ -3 & \text{if } m = -\frac{10}3,\\[2pt] -1,\ 4 & \text{if } m = 6.\end{cases}$$
:::
:::
