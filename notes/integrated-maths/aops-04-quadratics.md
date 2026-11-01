---
course: integrated-maths
chapter: 9
section: 4
title: Quadratics
source-pages: 1-4, 10-30, 31-60, 61-62
---

## 4.1 Factoring Quadratics

:::problem{4.2}
The equation $x^2 - 12x - 540 = 0$ has two integer roots.

(a) How can we tell from the coefficients that both roots are divisible by $6$?

(b) Find the roots of $x^2 - 12x - 540$.

:::note Scratch work
Write a polynomial as $a_dx^d + \dots + a_0$ and let $(p_1'x + p_1)\cdots(p_d'x + p_d)$ be its factored form. Then
$$a_d = p_1'\cdots p_d', \qquad a_0 = p_1\cdots p_d,$$
so $p_i' \mid a_d$ and $p_i \mid a_0$. Since $a_d = 1$ for $x^2 - 12x - 540$, every $p_i' = 1$, and $540 = 6\cdot 90$, so some $p_i = 6$.

In $x^2 - 12x - 540 = 0$, the $x^2$ cannot be odd.

If $p + q = b$ and $pq = c$, then
$$p + \frac cp = b \;\Rightarrow\; \frac{p^2}{p} + \frac cp = \frac{p^2 + c}{p} = b \;\Rightarrow\; p^2 + c = bp \;\Rightarrow\; c = bp - p^2 = p(b - p).$$

Factor pairs of $540 = 6\cdot 90 = 6\cdot(3^2\cdot 2\cdot 5)$ with both factors even:
$$6\cdot 90,\qquad 54\cdot 10,\qquad 18\cdot 30,\qquad 270\cdot 2.$$
These are the only possible ones because both factors need to be even, and only $6\cdot 90$ and $18\cdot 30$ have both factors divisible by $6$.

With $b = -12$ and $c = -540$: $-540 = p(-12 - p)$. Let’s work mod $6$: $b \equiv 0 \pmod 6$, so $c \equiv p(-p)$, and $c \equiv 0 \pmod 6$, so
$$0 \equiv -p^2 \pmod 6,$$
so $p^2$ is a multiple of $6$. Since $6 \mid p^2$: $3 \mid p^2 \Rightarrow 3 \mid p$ and $2 \mid p^2 \Rightarrow 2 \mid p$.

Let $k = p_1p_2$. If $k \mid q$ then $p_1 \mid q$ and $p_2 \mid q$; and if $q \mid x^2$ with $q$ a product of distinct primes, then $q \mid x$. So $k \mid x^2 \Rightarrow p_1 \mid x$ and $p_2 \mid x$. Then $p + q = -12$ and $6 \mid p$.

:::

:::solution
**(a)** First we notice that the roots must be even since, if they are odd, the equation will not be zero, since $-12x - 540$ is even.

Next we know that
$$(x+p)(x+q) = x^2 + px + qx + pq = x^2 + (p+q)x + pq.$$
So then $p + q = b$ and $pq = c$, where $b, c$ are such that $x^2 + bx + c = x^2 - 12x - 540$. So we have:
$$p + q = b,\quad pq = c \;\Rightarrow\; p + \frac cp = b \;\Rightarrow\; c = bp - p^2 \;\Rightarrow\; c = p(b - p).$$
Now note that we have to show divisibility by $6$, so let us work mod $6$ (i.e. $6 \equiv 0 \pmod 6$). Since both $c = -540$ and $b = -12$ are divisible by $6$, $c \equiv 0 \pmod 6$ and $b \equiv 0 \pmod 6$. This means that:
$$\begin{aligned}
c &\equiv p(0 - p) \pmod 6\\
\Rightarrow\; 0 &\equiv p(0 - p) \pmod 6\\
\Rightarrow\; 0 &\equiv -p^2 \pmod 6\\
\Rightarrow\; -p^2 &\text{ is divisible by } 6.
\end{aligned}$$
Now since $6$ is the product of $2$ distinct primes, by Euclid’s Lemma we have $6 \mid p$.

Finally, since $6 \mid p$ and $q = -12 - p$, then $6 \mid q$.

**(b)** I know that both integer roots are divisible by $6$. I also know that they must both be even. So $540 = 6\cdot(3^2\cdot 2\cdot 5)$; in order to have both factors be divisible by $6$:
$$540 = 6\cdot(6\cdot 3\cdot 5) \;\Rightarrow\; \text{either } 6\cdot 90 \text{ or } 18\cdot 30,$$
and clearly $18\cdot 30$ is the only combination that satisfies $p + q = -12$. Thus the roots are $-18$ and $+30$.
:::
:::

:::problem{4.3}
(a) $3t^2 + 11t + 10 = 0$

(b) $2x^2 - 7x - 15 = 0$

(c) $36y^2 - 25 = 0$

(d) $9t^2 - 2t + 5 = 25 - 90t$
:::solution
(a) Roots: $-\frac53$, $-2$.

(b) Roots: $-\frac32$, $+5$.

(c) $36y^2 - 25 = 6^2y^2 - 5^2 = (6y + 5)(6y - 5)$, so the roots are $\pm\frac56$.

(d) $9t^2 - 2t + 5 = 25 - 90t \Rightarrow 9t^2 + 88t - 20 = 0$, roots: $+\frac29$, $-10$.
:::
:::

:::problem{4.4}
(a) Factor $6x^2 + x - 15$.

(b) Find $\frac xy$ if $6x^2 + xy = 15y^2$.
:::solution
(a) The constant splits as $(-3)(5)$ or $(3)(-5)$. By the quadratic formula,
$$\frac{-1 \pm \sqrt{1^2 - 4(6)(-15)}}{2(6)} = \frac{-1 \pm \sqrt{361}}{12} = \frac{-1 \pm 19}{12}.$$

:::
:::

:::problem{4.2} Another solution
$x^2 - 12x - 540$ has $2$ integer roots. How can we tell they are both divisible by $6$?
:::solution
Given $(x + p)(x + q) = x^2 + (p+q)x + pq$: since $-12x$ and $-540$ are even, $-12x + (-540)$ is even, so $x^2$ must be even for $x^2 + (p+q)x + pq = 0$. So the whole thing is divisible by $2$.

Notice that $x^2 = 12x + 540$, and $3 \mid 12x$ and $3 \mid 540$, so $3 \mid 12x + 540$; since $3 \mid 12x + 540$, then $3 \mid x^2$. So $3 \mid x^2$, $2 \mid x^2$, $6 \mid x^2$ and $6 \mid 12x + 540$, so $6 \mid (x+p)(x+q)$.

Now let $p = 6p'$ and $q = 6q'$, so $6p' + 6q' = -12$ and $6p'\cdot 6q' = -540$. So $p' + q' = -2$ and $p'q' = -15$, so now we solve the system of equations:
$$p' + q' = -2,\quad p'q' = -15 \;\to\; p' = -2 - q' \;\to\; (-2 - q')q' = -2q' - q'^2 = -15,$$
$$q'^2 + 2q' - 15 = (q' - 3)(q' + 5) = 0 \;\Rightarrow\; q' = 3 \text{ or } q' = -5,\qquad p' = -\frac{15}{q'}.$$
Then $6(3) = 18$ and $6(-5) = -30$, so
$$x^2 - 12x - 540 = (x + 18)(x - 30).$$
:::
:::

:::problem{4.4} Part (b) again
Find $\frac xy$ such that $6x^2 + xy - 15y^2 = 0$.
:::solution
Let $r = \frac xy$, so $x = ry$:
$$6(ry)^2 + (ry)y - 15y^2 = 6r^2y^2 + ry^2 - 15y^2 = y^2(6r^2 + r - 15) = 0.$$
$y^2$ cannot be $0$, so $6r^2 + r - 15$ has to be $0$:
$$6r^2 + r - 15 = 0 \;\to\; r = \frac{-1 \pm \sqrt{1^2 - 4(6)(-15)}}{2(6)} = \frac{-1 \pm 19}{12} \;\to\; \frac{18}{12} = \frac32 \quad\text{or}\quad -\frac{20}{12} = -\frac{10}{6} = -\frac53.$$
So $r_1 = \frac32$, $r_2 = -\frac53$.
:::
:::

:::problem{4.5}
How many integers $x$ satisfy the equation $(x^2 - x - 1)^{x + 2} = 1$?
:::solution
If $a^b = 1$, either $b = 0$, or $a = 1$, or $a = -1$ and $b = 2n$ is even.

**Case 1:** $b = 0$: $x + 2 = 0 \to x = -2$. ✓

**Case 2:** $a = 1$: $x^2 - x - 1 = 1 \to x^2 - x - 2 = 0 \to (x - 2)(x + 1) = 0 \to x = 2,\ x = -1$.

**Case 3:** $a = -1$, $b = 2n$:
$$x^2 - x - 1 = -1 \quad\text{and}\quad x + 2 = 2n \;\to\; x = 2n - 2 = 2(n - 1).$$
$x^2 - x = x(x - 1) = 0$, so $x = 0$ or $x = 1$.

- $x = 0$: $0 = 2(n - 1) = 2n - 2$, so $2 = 2n$ and $n = 1$; here $x + 2 = 2$. ✓
- $x = 1$: $1 = 2n - 2$, so $3 = 2n$ and $n = \frac32$, not an integer. (Directly: $1^2 - 1 - 1 = -1$ and the exponent is $1 + 2 = 3$, so the power is $-1$.) So $x = 1$ is out.

So $x = 0$, $x = -2$, $x = 2$, $x = -1$.
:::
:::

### Exercises

:::exercise{4.1.2}
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

:::exercise{4.1.3}
Find $\frac ab$ if $a^2 + 4b^2 = 4ab$.
:::solution
Let $\frac ab = r$. Then $(a)^2 + (2b)^2 = 4ab$ becomes $(rb)^2 + (2b)^2 = 4rb^2$, i.e. $r^2b^2 + 4b^2 = 4rb^2$, so $4b^2 = 4rb^2 - r^2b^2 = b^2(4r - r^2)$. Set aside for now: $r^2 - 4r + 4$.

Restart: $a^2 + 4b^2 = 4ab$ with $r = \frac ab$, so $rb = a$:
$$(rb)^2 + 4b^2 = 4rb^2 \;\Rightarrow\; r^2b^2 + 4b^2 = 4rb^2 \;\Rightarrow\; b^2(r^2 + 4) = 4rb^2,$$
Cancelling $b^2$:
$$r^2 - 4r + 4 = 0 \;\to\; (r - 2)(r - 2) = 0 \;\to\; r = 2.$$
So $r = \frac ab = 2$ for all such $a, b$.
:::
:::

:::exercise{4.1.4}
$3x(2x - 3y) = -5y(2x - 3y)$
:::solution
$$3x(2x - 3y) + 5y(2x - 3y) = (3x + 5y)(2x - 3y) = 0.$$
From $2x - 3y = 0$: $\frac xy = \frac32$. From $3x = -5y$: $\frac{3x}{3y} = \frac{-5y}{3y}$, so $\frac xy = -\frac53$.
:::
:::

:::exercise{4.1.5}
$x^4 - 11x^3 + 24x^2 = 4x^2 - 44x + 96$
:::solution
Moving everything over: $x^4 - 11x^3 + 24x^2 - 4x^2 + 44x - 96 = 0$, i.e.
$$x^4 - 11x^3 + 20x^2 + 44x - 96 = 0,$$
$$x^2(x^2 - 11x) + (20x^2 + 44x - 96) = 0,\qquad x^2(x^2 - 11x) + 4(5x^2 + 11x - 24).$$
Instead, keep the original sides:
$$x^4 - 11x^3 + 24x^2 = 4x^2 - 44x + 96 \;\Rightarrow\; x^2(x^2 - 11x + 24) = 4(x^2 - 11x + 24),$$
$$(x^2 - 4)(x^2 - 11x + 24) = 0.$$
$x^2 - 4 = 0$ gives $x = \pm 2$, and $x^2 - 11x + 24 = (x - 8)(x - 3) = 0$ gives $x = 8$, $x = 3$. Total: $x = 2, -2, 8, 3$.
:::
:::

## 4.2 Relating Roots and Coefficients

$x^2 - 7x + 10$: the roots are $x = 5, 2$.

:::problem{4.6}
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

:::problem{4.7}
Find the sum and the product of the roots of each equation: $x^2 - 13x + 36 = 0$ and $-2006x^2 = 2007x + 1977$.
:::solution
Well, $r + s = -\frac ba$ and $rs = \frac ca$, so we have:

1. $r + s = -\dfrac{(-13)}{1} = 13$ and $rs = \dfrac{36}{1} = 36$.
2. $r + s = -\dfrac{2007}{2006}$ and $rs = \dfrac{1977}{2006}$.
:::
:::

:::problem{4.8}
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

:::problem{4.9}
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

:::problem{4.10}
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

## 4.3 Completing the Square

:::problem{4.11}
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

:::problem{4.13} MEOW!!!!!!!!!
Write in the form $a(x + p)^2 + q$:

(a) $x^2 + 8x + 2$

(b) $-6x^2 - 18x - 7$
:::solution
From 4.11,
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

:::problem{4.14}
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

:::example Completing the square in $ax^2 + bx + c = 0$
:::solution
$$ax^2 + bx + c \;\to\; a\left(x^2 + \frac ba x\right) + c.$$
Completing the square inside the bracket:
$$x^2 + \frac ba x + \frac{\left(\frac ba\right)^2}{4} = x^2 + \frac ba x + \frac{b^2}{4a^2} = \left(x + \frac{b}{2a}\right)^2,$$
so $a\left(x^2 + \frac ba x\right) \to a\left(x + \frac{b}{2a}\right)^2 + \cdots$. Then
$$a\left(x^2 + \frac ba x + \frac{b^2}{4a^2}\right) - \frac{b^2}{4a^2}(a) + c = 0$$
$$\Rightarrow\; a\left(x + \frac{b}{2a}\right)^2 - \frac{ab^2 - 4a^2c}{4a^2} = 0 \;\Rightarrow\; a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a} = 0,$$
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} = \frac{b^2 - 4ac}{(2a)^2},\qquad x + \frac{b}{2a} = \pm\sqrt{\frac{b^2 - 4ac}{(2a)^2}},$$
$$x = -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a},\qquad\text{i.e.}\qquad x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.\ \checkmark$$

:::
:::

$x^2 - 5x + 6 = 0 \to x = \dfrac{5 \pm \sqrt{25 - 4(6)}}{2} = \dfrac{5 \pm 1}{2} \to x = 3,\ x = 2 \to (x - 2)(x - 3)$.

:::problem{4.16}
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

:::problem{4.17}
$a + b = 6$ and $ab = -19$.
:::solution
$$(6 - b)b = -19 \;\to\; 6b - b^2 = -19 \;\to\; -(b^2 - 6b) = -19,$$
$$-(b^2 - 6b + 9) = -19 - 9 \;\to\; -(b - 3)^2 = -28 \;\to\; (b - 3)^2 = 28,$$
$$b - 3 = \pm\sqrt{28} \;\to\; b = 3 \pm \sqrt{28} = \boxed{3 \pm 2\sqrt7}\quad(4\cdot 7 = 28).$$
Check:
$$3 + 2\sqrt7 + 3 - 2\sqrt7 = 6,\qquad \left(3 + 2\sqrt7\right)\left(3 - 2\sqrt7\right) = 3^2 - \left(2\sqrt7\right)^2 = 9 - 28 = -19.\ \checkmark$$
:::
:::

:::problem{4.18}
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

## Section 4.3

:::exercise{4.3.1}
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

:::exercise{4.3.3}
Find $n\in\RR^+$ such that $n = \frac1n+8$.

:::solution
Squaring gives $n^2 = \left(\frac1n+8\right)^2$. Alternatively, $n-8 = \frac1n$, so
$$n^2-8n-1 = 0 \;\Rightarrow\; (n-4)^2-17 = 0 \;\Rightarrow\; (n-4)^2 = 17 \;\Rightarrow\; n-4 = \pm\sqrt{17} \;\Rightarrow\; n = \pm\sqrt{17}+4,$$
so (since $n>0$) $n = \sqrt{17}+4$.
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

:::example Nature of the roots
:::solution
Discriminants: the first is negative, so no real roots; the second is $75 = 5^2\cdot 3$, with $\sqrt{75} = 5\sqrt3$, so two (irrational) roots; for the last, $1+4(462) = 1848+1 = 1849 = 43^2$, a perfect square.

The roots are, in order: nonreal, irrational, rational, rational.
:::
:::

## Section 4.4

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

:::remark
For rational roots: $b^2-4ac = 0$ or a perfect square.
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

:::problem{4.21}
Find all $x,y\in\RR$ such that $y = 2tx-t^2$ for some $t\in\RR$.

:::solution
$-t^2+2tx-y = 0$ has a real solution $t$, so its discriminant is nonnegative:
$$(2x)^2-4(-1)(-y)\ge0 \;\Rightarrow\; 4x^2-4y\ge0 \;\Rightarrow\; x^2-y\ge0 \;\Rightarrow\; x^2\ge y.$$
Check with $x = 4$, $y = 3$: $-t^2+8t-3$ has discriminant $64-4(-1)(-3) = 52 \ge 0$. ✓

Answer: all $x,y\in\RR$ such that $x^2\ge y$.
:::
:::

### Exercises

:::exercise{4.4.1}
:::solution
$6-\sqrt5\,i$:
$$(x-(6+\sqrt5\,i))(x-(6-\sqrt5\,i)) \to x^2-12x+41,$$
using $(-6-\sqrt5\,i)+(-6+\sqrt5\,i) = -12$ and $(6+\sqrt5\,i)(6-\sqrt5\,i) = 36+5 = 41$. ✓
:::
:::

:::exercise{4.4.2}
Find all $a$ such that $ax^2-5x+9 = 0$ has only one distinct root.

:::solution
If the double root is $r$, then by Vieta $ar^2 = 9$ and $a\cdot2r = 5$, so $ar = \frac52$. Then
$$\tfrac52(r) = 9 \;\Rightarrow\; r = \tfrac{18}{5},\qquad a\cdot\tfrac{18}{5} = \tfrac52 \;\Rightarrow\; a = \tfrac{25}{36}.$$
Or, with the discriminant:
$$25-4a(9) = 0 \;\Rightarrow\; 25-36a = 0 \;\Rightarrow\; a = \tfrac{25}{36}.$$
Both work.

:::
:::

:::exercise{4.4.5}
Given that one root of $2x^2+rx+s$, with $r,s\in\RR$, is $3+2i$, find $s$.

:::solution
The other root is $3-2i$, so $\frac s2 = (3+2i)(3-2i) = 13$ and $s = 26$.

:::
:::

:::exercise{4.4.6}
$x = K^2(x-1)(x-2)$. Find all $K$ such that both roots $r_1,r_2$ are real.

:::solution
When $x = 0,1,2$, the factors vanish. So, trying $x = 0$: $0 = K^2(-1)(-2) \Rightarrow 0 = 2K^2 \Rightarrow K = 0$. Trying $x = 1$: $1 = K^2(0)(-1)$; from $x-K^2 = 0$, $1-K^2 = 0 \Rightarrow 1 = K^2 \Rightarrow K = \pm1$.

In fact every real $K$ works: expanding, $K^2x^2-(3K^2+1)x+2K^2 = 0$, with discriminant
$$(3K^2+1)^2-8K^4 = K^4+6K^2+1 > 0,$$
so the roots are always real (for $K = 0$ the equation is just $x = 0$).

:::
:::

## Problems 4.25–4.44

:::example
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

:::problem{4.25}
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

:::problem{4.27}
Find $x$ if $x\in\RR_{\ge0}$ and $x-1$ is the reciprocal of $x+\frac12$.

:::solution
$$x-1 = \frac{1}{x+\frac12} \;\to\; (x-1)\left(x+\tfrac12\right) = 1 \;\to\; x^2-\tfrac12x-\tfrac12-1 \;\to\; x^2-\tfrac12x-\tfrac32 = 0,$$
$$x = \frac{\frac12\pm\sqrt{\frac14-4\left(-\frac32\right)}}{2} = \frac{\frac12\pm\frac52}{2},$$
so $x = -1\in\RR_{<0}$ or $\boxed{x = \tfrac32}\in\RR_{>0}$.

:::
:::

:::problem{4.31}
What is the domain of $f(x) = \dfrac{x+7}{\frac1x+\frac1{x^2-6}}$?

:::solution
We need $x\neq0,\pm\sqrt6$. Then
$$\frac1x+\frac1{x^2-6} = \frac{(x^2-6)+x}{x(x^2-6)},$$
so
$$f(x) = \frac{x+7}{1}\left(\frac{x(x^2-6)}{(x^2-6)+x}\right) \to \frac{x(x^2-6)(x+7)}{x^2+x-6},$$
where $x^2-6 = (x+\sqrt6)(x-\sqrt6)$ and $x^2+x-6 = (x+3)(x-2)$. So also $x\neq-3,2$:
$$\operatorname{Dom} f = \{x\in\RR \mid x\notin\{0,\pm\sqrt6,-3,2\}\}.$$

:::
:::

:::problem{4.32}
The roots $a,b$ of $x^2-mx+2 = 0$ satisfy $a+b = m$, $ab = 2$; and for $x^2-px+q = 0$, $\left(a+\frac1b\right)+\left(b+\frac1a\right) = p$ and $\left(a+\frac1b\right)\left(b+\frac1a\right) = q$. Solve for $q$.

:::solution
$$ab+\left(\tfrac1b\right)b+\left(\tfrac1a\right)a+\frac1{ab} = q \;\Rightarrow\; 2+ab+\frac1{ab} \;\Rightarrow\; 2+2+\frac12 \;\Rightarrow\; \boxed{\tfrac92 = q}.$$
For fun:
$$a+b+\frac{a+b}{ab} = m+\frac m2 = \frac{2m+m}{2} = \frac32m = p,$$
so the two equations are $x^2-\frac32mx+\frac92 = 0$ and $x^2-mx+2 = 0$.

:::
:::

:::example
Find all $x$ such that $6x^2+5x<4$.

:::solution
$6\left(x^2+\frac56x\right)<4$. Completing the square, $x^2+\frac56x+\frac{25/36}{4} = x^2+\frac56x+\frac{25}{144}$, so
$$\left(x+\tfrac5{12}\right)^2-\tfrac{25}{144}<\tfrac46 \;\Rightarrow\; \left(x+\tfrac5{12}\right)^2<\tfrac{96}{144}+\tfrac{25}{144} = \tfrac{121}{144} = \tfrac{11^2}{12^2}.$$
Taking square roots, $\sqrt{\left(x+\frac5{12}\right)^2}<\sqrt{\frac{11^2}{12^2}}$, so $\left|x+\frac5{12}\right|<\frac{11}{12}$:
$$-\tfrac{11}{12}<x+\tfrac5{12}<\tfrac{11}{12} \;\Rightarrow\; -\tfrac43<x<\tfrac12.$$
(Equivalently, $x+\frac5{12}<\pm\frac{11}{12}$ gives $x<\frac{\pm11-5}{12}$: $x<\frac6{12} = \frac12$ and $x>-\frac{16}{12} = -\frac43$.)
:::
:::

:::problem{4.37}
Find $x$ if $y = \frac{8}{x^2+4}$ and $x+y = 2$.

:::solution
Substituting $x = 2-y$:
$$y = \frac{8}{(2-y)^2+4} \;\to\; y = \frac{8}{y^2-4y+8} \;\to\; y^3-4y^2+8y = 8,$$
and $y^3-4y^2+8y-8 = (y-2)(y^2-2y+4) = 0$, where $y^2-2y+4$ has no real roots. So $y = 2$ and $\boxed{x = 0}$.

:::
:::

:::problem{4.38}
:::solution
Price $50$ (value at a given $x$: $50+x$); $20000$ tickets per game; each one-dollar increase loses 100 tickets, so the tickets sold are
$$f(x) = 20000-100x = -100(x-200),$$
which is $0$ at $x = 200$. At $x = 0$ the revenue is $1000000$. We want
$$1000000 < f(x)(50+x) = (20000-100x)(50+x) = 100(200-x)(50+x) = 100(-x^2+150x+10000),$$
$$10000 < -x^2+150x+10000 \;\Rightarrow\; 0 < -x^2+150x \;\Rightarrow\; x(x-150)<0 \;\Rightarrow\; \boxed{0<x<150}.$$

:::
:::

:::problem{4.39}
Find all $x$ such that $x^2+50x-2079\ge0$.

:::solution
$$x^2+625+50x\ge2079+625 \;\Rightarrow\; (x+25)^2\ge2704 \;\Rightarrow\; |x+25|\ge52 \;\Rightarrow\; x+25\le-52 \text{ or } x+25\ge52,$$
so $\boxed{x\le-77 \text{ or } x\ge27}$.

:::
:::

:::problem{4.40}
Let $P(x)$ be a quadratic polynomial such that $P(0) = -1$, $P(1) = 9$, $P(2) = 25$. Find $P(-1)$.

:::solution First attempt
$P(x) = ax^2+bx+c$, so $c = -1$. Completing the square, $P(x) = a\left(x+\frac b{2a}\right)^2-\frac{b^2}{4a}+c$. By Vieta, $-b = ar_1+ar_2$ and $c = r_1r_2a$. From $P(1) = 9$: $a+b+c = 9 \Rightarrow a+b = 10$, and also
$$a\left(1+\tfrac b{2a}\right)^2-\tfrac{b^2}{4a}-1 = 9,$$
where $\left(1+\frac b{2a}\right)^2 = 1^2+\frac{b^2}{(2a)^2}+2\left(\frac b{2a}\right) = 1+\frac{b^2}{2^2a^2}+\frac ba$, so
$$a+\frac{b^2}{4a}+b-\frac{b^2}{4a}-1 = 9,$$
which only gives back $a+b = 10$.

:::

:::solution Take 2
We know $P(0) = -1$, $P(2) = 25$, $P(1) = 9$, and want $P(-1)$. $P(x) = ax^2+bx+c$ for some $a,b,c\in\CC$.

$P(0) = -1 \Rightarrow c = -1 \Rightarrow -1 = r_1r_2a$. We also know $-b = (r_1+r_2)a$; together,
$$b = \frac{r_1+r_2}{r_1r_2}.$$
Now since $P(1) = 9 \Rightarrow a+b+c = 9 \Rightarrow a+b = 10$.

(Overthinking it.)

$$a(4)+b(2)-1 = 25 \;\Rightarrow\; 4a+2b = 26 \;\Rightarrow\; 2a+b = 13.$$
From $a+b = 10$, $b = 10-a$, so $2a+10-a = 13 \Rightarrow a+10 = 13 \Rightarrow a = 3$ and $b = 7$.

Check: $P(1) = a+b+c = 3+7+(-1) = 9$, and $P(2) = 12+14-1 = 26-1 = 25$ :)

So $P(x) = 3x^2+7x-1$, and at $-1$: $3-7-1 = \boxed{-5}$.
:::
:::

:::problem{4.41}
Find all $x\in\RR$ such that $(x^2-5x+5)^{x^2-9x+20} = 1$.

:::solution
$x^2-9x+20 = 0 \to (x-5)(x-4) = 0 \to x = 5,\ x = 4$: $x^2-5x+5$ can be anything (nonzero) if $x^2-9x+20 = 0$.

The base can also be $1$: $x^2-5x+5 = 1 \to x^2-5x+4 = (x-1)(x-4) = 0 \to x = 1, 4$. Or the base can be $-1$ with an even exponent: $x^2-5x+5 = -1 \to x^2-5x+6 = (x-2)(x-3) = 0$, and the exponent is $6$ at $x = 2$ and $2$ at $x = 3$, both even. So
$$\boxed{x\in\{1,2,3,4,5\}}.$$

:::
:::

:::problem{4.43}
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

:::problem{4.44}
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

## Further problems

:::example
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

:::example
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

:::example
Find $a,b$ such that $b-a$ is as small as possible and the entire graph of the equation $y = \dfrac{1-x^2}{1+x^2}$ lies within $a\le y\le b$.

:::solution
$$y = \frac{1-x^2}{1+x^2} = \frac{1^2-x^2}{1+x^2} = \frac{(1+x)(1-x)}{1+x^2},$$
and $x\neq i$ (the denominator never vanishes for real $x$). So
$$y(1+x^2) = (1-x)(1+x),$$
and $(1-x)(1+x)\to0$ …
:::
:::

:::example
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

:::example
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

:::example
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

:::example
Find all ordered pairs $(x,y)$ with $x,y\in\CC$ such that $x+y = \frac92$ and $2x^2y^2-13xy+18 = 0$.

:::solution
Let $xy = m$, so $2m^2-13m+18 = 0$:
$$m = \frac{13\pm\sqrt{169-4(2)(18)}}{4} = \frac{13\pm5}{4} \;\Rightarrow\; m = 2 \text{ or } m = \tfrac92.$$
So either $xy = \frac92$, which means $x+y = xy$, or $xy = 2$, which means $x+y = \frac{9}{xy}$, i.e. $x^2y+xy^2 = 9$.

$$x+y = xy \iff x+y = \tfrac92 \iff xy = \tfrac92.$$
With $y = \frac92-x$:
$$x+\tfrac92-x = x\left(\tfrac92-x\right) \;\Rightarrow\; \tfrac92 = \tfrac{9x}{2}-x^2 \;\Rightarrow\; x^2-\tfrac92x+\tfrac92 = 0 \;\Rightarrow\; \left(x-\tfrac62\right)\left(x-\tfrac32\right) = 0,$$
so $x = \frac62$ or $x = \frac32$ (check: $\frac62\cdot\frac32 = \frac{18}{4} = \frac92$).
:::
:::

:::solution
*(Solution continued.)* Substitute each value of $x$ back into $2x^2y^2 - 13xy + 18 = 0$.

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

:::example
Let $a, b \in \RR$ with $0 < a < b$ and $a^2 + b^2 = 6ab$. Find $\dfrac{a+b}{a-b}$.

:::solution
We have $a^2 - 6ab + b^2 = 0$. In the denominator, $(a-b)^2 = a^2 - 2ab + b^2 = (a^2 + b^2) - 2ab = 4ab$, and in the numerator $(a+b)^2 = (a^2 + b^2) + 2ab = 8ab$. So
$$\left(\frac{a+b}{a-b}\right)^2 = \frac{a^2 + 2ab + b^2}{a^2 - 2ab + b^2} = \frac{6ab + 2ab}{(a^2 + b^2) - 2ab} = \frac{8ab}{4ab} = 2.$$
Since $0 < a < b$, $a + b > 0$ and $a - b < 0$, so
$$\frac{a+b}{a-b} = \boxed{-\sqrt2}.$$

:::
:::
