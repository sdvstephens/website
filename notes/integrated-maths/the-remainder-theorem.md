---
course: integrated-maths
chapter: 10
section: 10.6
title: The Remainder Theorem
---

The remainder on dividing $f(x)$ by $x - a$ is the value $f(a)$. This page finds that pattern, proves it, and uses it to find remainders on division by divisors of higher degree and to answer some questions about divisibility.

:::problem
Let $f(x) = x^4 - 3x^3 + 7x^2 - x + 5$.

(a) Find the remainder of $f(x)/(x - 3)$.

(b) Find $f(3)$.

:::solution
(a)
$$
\begin{array}{r|rrrrr}
3 & 1 & -3 & 7 & -1 & 5 \\
 & & 3 & 0 & 21 & 60 \\ \hline
 & 1 & 0 & 7 & 20 & 65
\end{array}
\qquad r = 65.
$$

(b) $f(3) = 3^4 - 3(3^3) + 7(3^2) - 3 + 5 = 63 - 3 + 5 = 65$.

So it looks like the value of $f$ at the divisor’s zero/root is equal to the remainder.
:::
:::

:::problem
Prove the remainder theorem.

:::solution
Suppose $q(x)$ and $r(x)$ are the quotient and remainder, respectively, when the polynomial $f(x)$ is divided by $x - a$, $a \in \RR$.

Note that $\deg r(x) < \deg(x - a) = 1$, therefore $\deg r(x) = 0$ (or $r = 0$). Note too that
$$\frac{f(x)}{x - a} = q(x) + \frac{r(x)}{x - a} \iff f(x) = (x - a)q(x) + r(x).$$
Ah! So now it is clear to see that when $x = a$ (the zero of $x - a$) the term $(x - a)q(x)$ is $0$. Thus $f(a) = r(a)$. Since $\deg r(x) = 0$, $r$ is a constant, so $r(a)$ is that constant. Thus the remainder when the polynomial $f(x)$ is divided by $x - a$ is $r = f(a)$.
:::
:::

:::problem
Use synthetic division to find $f(7)$ for $f(x) = x^4 - 6x^3 - 9x^2 + 20x + 7$.

:::solution
$$
\begin{array}{r|rrrrr}
7 & 1 & -6 & -9 & 20 & 7 \\
 & & 7 & 7 & -14 & 42 \\ \hline
 & 1 & 1 & -2 & 6 & 49
\end{array}
$$
$r = 49$, therefore $f(7) = 49$. Directly:
$$\begin{aligned}
7^4 - 6(7)^3 - 9(7)^2 + 20(7) + 7 &= 7\big(7^3 - 6(7)^2 - 9(7) + 20 + 1\big)\\
&= 7(49 - 63 + 21) = 7(70 - 63) = 7 \cdot 7 = 49. \;\checkmark
\end{aligned}$$
:::
:::

:::problem
Find the remainder when $2x^{10} - 3ix^8 + (1 + i)x + 1$ is divided by $x - i$.

:::solution
Synthetic division with $i$, on the coefficients $2, 0, -3i, 0, 0, 0, 0, 0, 0, 1 + i, 1$ (laid out vertically; each product is $i$ times the previous result):

| Power | Coefficient | $+\;i \times$ previous | Result |
|:---:|:---:|:---:|:---:|
| $x^{10}$ | $2$ | | $2$ |
| $x^9$ | $0$ | $2i$ | $2i$ |
| $x^8$ | $-3i$ | $-2$ | $-2 - 3i$ |
| $x^7$ | $0$ | $3 - 2i$ | $3 - 2i$ |
| $x^6$ | $0$ | $2 + 3i$ | $2 + 3i$ |
| $x^5$ | $0$ | $-3 + 2i$ | $-3 + 2i$ |
| $x^4$ | $0$ | $-2 - 3i$ | $-2 - 3i$ |
| $x^3$ | $0$ | $3 - 2i$ | $3 - 2i$ |
| $x^2$ | $0$ | $2 + 3i$ | $2 + 3i$ |
| $x$ | $1 + i$ | $-3 + 2i$ | $-2 + 3i$ |
| $1$ | $1$ | $-3 - 2i$ | $-2 - 2i$ |

So $r = -2 - 2i$, and
$$\begin{aligned}
q(x) = 2x^9 &+ 2ix^8 + (-2 - 3i)x^7 + (3 - 2i)x^6 + (2 + 3i)x^5\\
&+ (-3 + 2i)x^4 + (-2 - 3i)x^3 + (3 - 2i)x^2 + (2 + 3i)x + (-2 + 3i).
\end{aligned}$$

Check with the remainder theorem:
$$2i^{10} - 3i \cdot i^8 + (1 + i)i + 1 = 2i^2 - 3i + i - 1 + 1 = -2 - 2i. \;\checkmark$$

:::
:::

:::problem
Let $f(x) = x^{10} - 2x^5 + 3$.

(a) Divide by $x - 2$.

(b) Find $f(2)$.

:::solution
(a)
$$
\begin{array}{r|rrrrrrrrrrr}
2 & 1 & 0 & 0 & 0 & 0 & -2 & 0 & 0 & 0 & 0 & 3 \\
 & & 2 & 4 & 8 & 16 & 32 & 60 & 120 & 240 & 480 & 960 \\ \hline
 & 1 & 2 & 4 & 8 & 16 & 30 & 60 & 120 & 240 & 480 & 963
\end{array}
$$
so the remainder is $963$.

(b) Plugging in the zero $2$ of $x - 2$:
$$f(2) = 2^{10} - 2(2)^5 + 3 = 2^{10} - 2^6 + 3 = 2^6(2^4 - 1) + 3 = 2^6(15) + 3 = 963.$$
:::
:::

:::problem
Let $P(x)$ be a polynomial such that when $P(x)$ is divided by $x - 19$ the remainder is $99$, and when $P(x)$ is divided by $x - 99$ the remainder is $19$. We find the remainder when $P(x)$ is divided by $(x - 19)(x - 99)$.

:::solution
$P(99) = 19$ and $P(19) = 99$.
$$\frac{P(x)}{(x - 19)(x - 99)} = q(x) + \frac{r(x)}{(x - 19)(x - 99)} \;\Rightarrow\; \deg r(x) < \deg\big((x - 19)(x - 99)\big) = 2,$$
so $\deg r(x) \leq 1$.

We have
$$\begin{aligned}
P(x) &= q_1(x)(x - 19) + r_1(x), & r_1(x) &= 99,\\
P(x) &= q_2(x)(x - 99) + r_2(x), & r_2(x) &= 19,
\end{aligned}$$
so $P(19) = 99$ and $P(99) = 19$. Also
$$P(x) = q(x)(x - 19)(x - 99) + r(x), \qquad r(x) = ax + b.$$
At $x = 19$ and $x = 99$ only $r$ survives:
$$\begin{aligned}
P(19) &= a(19) + b = 99,\\
P(99) &= a(99) + b = 19.
\end{aligned}$$
Subtracting, $a(19) - a(99) = 99 - 19$, so $-80a = 80$, $-a = 1$, $a = -1$. Then $b = 19 - a(99)$: $-99 + b = 19$, so $b = 118$. The remainder is
$$\boxed{-x + 118}.$$
:::
:::

:::problem
Find the remainder when $x^{81} + x^{49} + x^{25} + x^9 + x$ is divided by $x^3 - x$.

:::solution
$$\frac{x^{81} + x^{49} + x^{25} + x^9 + x}{x^3 - x} = q(x) + \frac{r(x)}{x^3 - x}.$$
The exponents are odd squares: $x^{9^2}, x^{7^2}, x^{5^2}, x^{3^2}, x^{1^2}$.

$x^3 - x = x(x^2 - 1) = x(x + 1)(x - 1)$, with zeros $0, -1, 1$. Call the dividend $P(x)$; at these zeros
$$P(0) = 0, \qquad P(-1) = -5, \qquad P(1) = 5.$$
The remainder has degree less than $3$, so $r(x) = ax^2 + bx + c$, and
$$\begin{aligned}
P(-1) &= a - b + c = -5,\\
P(0) &= c = 0,\\
P(1) &= a + b + c = 5.
\end{aligned}$$
So $a - b = -5$ and $a + b = 5$. From the first, $a = b - 5$; then $b - 5 + b = 5$, $2b = 10$, $b = 5$, and $a = 0$. Hence
$$r(x) = 5x.$$

:::
:::

:::problem
Find the remainder when $P(x) = x^{81} + x^{49} + x^{25} + x^9 + x$ is divided by $x^3 + x$.

:::solution
$x^3 + x = x(x^2 + 1)$, so
$$P(x) = Q(x)\,x(x^2 + 1) + r(x),$$
and the first term is $0$ at the zeros of the divisor. $\deg r(x) < \deg d(x) = 3$, so $r(x) = ax^2 + bx + c$. The zeros: $x = 0$, and $x^2 + 1 = 0 \Rightarrow x^2 = -1 \Rightarrow x = \pm i$.

Since $81, 49, 25, 9 \equiv 1 \pmod 4$ (the powers of $i$ cycle $i, -1, -i, 1$), every term of $P(i)$ is $i$ and every term of $P(-i)$ is $-i$:
$$\begin{aligned}
P(0) &= 0 = c,\\
P(i) &= 5i = a(i)^2 + bi = -a + bi,\\
P(-i) &= -5i = a(-i)^2 + b(-i) = -a - bi.
\end{aligned}$$
From $5i = -a + bi$, $a = bi - 5i$. Then $-5i = -a - bi$ gives $-5i + bi - 5i = -bi$, so $-10i = -2bi$ and $5 = b$. So $a = 0$, and
$$ax^2 + bx + c \;\to\; 0x^2 + 5x + 0 = \boxed{5x}.$$
:::
:::

:::problem
Find $P(x) \in \RR[x]$ such that $\deg P = 5$, $P(x) - 1$ is divisible by $(x - 1)^3$, and $P(x)$ is itself divisible by $x^3$.

:::solution
**Take 1.** $P(1) - 1 = 0$ and $P(0) = 0$. The quotient $q(x)$ of $P(x) - 1$ by $(x - 1)^3$ has $\deg q(x) < 5$; actually
$$\deg q(x) = \deg P - \deg(x - 1)^3 = \deg P - \deg x^3 = 2,$$
so it is some $ax^2 + bx + c$. Write $P_*(x) \coloneqq P(x) - 1$.

Since $x^3 \mid P(x)$, try $P(x) = (ax^2 + bx)x^3 = ax^5 + bx^4$ (the $x^3$ factor makes $P(0) = 0$ automatic). Then $P(1) - 1 = a + b - 1 = 0$, so $a = 1 - b$: for instance $(a, b) = (2, -1)$, $(1, 0)$ or $(-1, 2)$. For $-x^5 + 2x^4$: $-(1)^5 + 2(1) - 1 = 0$ ✓, but its quotient $-x^2 + 2x$ ✗; and for $x^5$, synthetic division of $x^5 - 1$ by $x - 1$ gives $1, 1, 1, 1, 1 \mid 0$. The condition $P(1) = 1$ alone only makes $P(x) - 1$ divisible by $x - 1$, not by $(x - 1)^3$.

**Take 2.** Since $x^3 \mid P$, $P(x) = ax^5 + bx^4 + cx^3$. Since $\deg(P - 1) = 5$ and $(x - 1)^3 \mid P(x) - 1$, the quotient has $\deg q = 2$:
$$\begin{aligned}
P(x) - 1 &= (\alpha x^2 + \beta x + \gamma)(x - 1)^3\\
&= (\alpha x^2 + \beta x + \gamma)(x^3 - 3x^2 + 3x - 1)\\
&= \alpha x^5 + (\beta - 3\alpha)x^4 + (3\alpha - 3\beta + \gamma)x^3 + (-\alpha + 3\beta - 3\gamma)x^2 + (3\gamma - \beta)x - \gamma.
\end{aligned}$$
So, comparing with $ax^5 + bx^4 + cx^3 - 1$:
$$\begin{aligned}
a &= \alpha\\
b &= \beta - 3\alpha\\
c &= 3\alpha - 3\beta + \gamma\\
0 &= -\alpha + 3\beta - 3\gamma\\
0 &= 3\gamma - \beta\\
-1 &= -\gamma
\end{aligned}$$
$3\gamma = \beta$, $\gamma = 1$, so $\beta = 3$, and $\alpha = 9 - 3 = 6$. Then
$$a = 6, \qquad b = 3 - 18 = -15, \qquad c = 18 - 9 + 1 = 10.$$
$$P(x) - 1 = 6x^5 - 15x^4 + 10x^3 - 1, \quad\text{therefore}\quad \boxed{P(x) = 6x^5 - 15x^4 + 10x^3}.$$
:::
:::

:::problem
Let $P(x) = (x-1)(x-2)(x-3)$. For how many polynomials $Q(x)$ does there exist $R(x) \in \RR[x]$ with $\deg R = 3$ such that $P(Q(x)) = P(x)R(x)$?

:::solution
$P(x) = (x-1)(x-2)(x-3)$, so $P(1) = P(2) = P(3) = 0$.

Let $P(Q(x)) \coloneqq \mathbb{H}(x)$. So
$$\mathbb{H}(x) = P(x)R(x) + r(x),$$
where the remainder $r(x)$ must be $0$; here $\mathbb{H}$ has degree $6$, $P$ has degree $3$, and $R$ has degree $3$.

Recall, for $\deg f = n$ and $\deg g = m$:
$$\begin{cases} \deg\big(f(g(x))\big) = nm, \qquad \deg(fg) = n + m, \\ \deg(f+g) \le \max\big(\deg f, \deg g\big). \end{cases}$$

$Q(x)$ must be at most a quadratic: $Q(x) = ax^2 + bx + c$.

Expanding $P$: $(x-1)(x-2) = x^2 - 2x - x + 2 = x^2 - 3x + 2$, and
$$(x^2 - 3x + 2)(x - 3) = x^3 - 3x^2 - 3x^2 + 9x + 2x - 6,$$
so we need
$$\mathbb{H}(x) = (x^3 - 6x^2 + 11x - 6)R(x), \qquad R(x) = \alpha x^3 + \beta x^2 + \gamma x + \mu.$$

That is, $\dfrac{\mathbb{H}(x)}{P(x)} = R(x)$, and
$$\begin{aligned}
\mathbb{H}(x) &= (x^3 - 6x^2 + 11x - 6)(\alpha x^3 + \beta x^2 + \gamma x + \mu) \\
&= \big(Q(x) - 1\big)\big(Q(x) - 2\big)\big(Q(x) - 3\big).
\end{aligned}$$

Writing $\mathbb{H}(x) = a_{\mathbb{H}}x^6 + b_{\mathbb{H}}x^5 + \dots + g_{\mathbb{H}}$, the coefficients are

| power | coefficient of $\mathbb{H}$ |
|---|---|
| $x^6$ | $a_{\mathbb{H}} = \alpha$ |
| $x^5$ | $b_{\mathbb{H}} = \beta - 6\alpha$ |
| $x^4$ | $c_{\mathbb{H}} = \gamma + 11\alpha - 6\beta$ |
| $x^3$ | $d_{\mathbb{H}} = \mu - 6\alpha + 11\beta - 6\gamma$ |
| $x^2$ | $e_{\mathbb{H}} = -6\mu - 6\beta + 11\gamma$ |
| $x^1$ | $f_{\mathbb{H}} = 11\mu - 6\gamma$ |
| $x^0$ | $g_{\mathbb{H}} = -6\mu$ |

and on the other side, with $Q(x) = Ax^2 + Bx + C$,
$$\begin{aligned}
ax^6 + bx^5 + cx^4 + dx^3 + ex^2 + fx + g &= \mathbb{H}(x) \\
&= (Ax^2 + Bx + C)^3 - 6(Ax^2 + Bx + C)^2 + 11(Ax^2 + Bx + C) - 6.
\end{aligned}$$
:::
:::

## Exercises

:::exercise
$g(x) = 2x^6 - x^4 + 4x^2 - 8$. Find $r(x)$ when $g(x)$ is divided by $f(x)$ for each of the following $f(x)$’s:

(a) $x + 1$; (b) $x - 1$; (c) $x + 3$; (d) $x - 3$; (e) $x^2 + 4x + 3$; (f) $x^2 - 4x + 3$.

:::solution
(a) $x + 1 \to g(-1) = 2 - 1 + 4 - 8 = -3$.

(b) $x - 1 \to g(1) = 2 - 1 + 4 - 8 = -3$.

(c) $x + 3 \to g(-3) = 2(3)^6 - 3^4 + 4(3)^2 - 8 = 1458 - 81 + 36 - 8 = 1405$.

(d) $x - 3 \to g(3) = 1405$, the same ($g$ has only even powers).

(e) $x^2 + 4x + 3 = (x + 3)(x + 1)$. With $r(x) = ax + b$:
$$\begin{aligned}
g(-1) &= -a + b = -3,\\
g(-3) &= -3a + b = 1405,
\end{aligned}$$
so $-3a - 3 + a = 1405$, $-2a = 1408$, $a = -704$, and $b = -3 + a = -707$:
$$r(x) = -704x - 707.$$

(f) $x^2 - 4x + 3 = (x - 3)(x - 1)$. With $r(x) = ax + b$:
$$\begin{aligned}
g(1) &= a + b = -3,\\
g(3) &= 3a + b = 1405,
\end{aligned}$$
so $3a - 3 - a = 1405$, $2a = 1408$, $a = 704$, and $b = -3 - 704 = -707$:
$$r(x) = 704x - 707.$$

:::
:::

:::exercise
$\dfrac{y^2 + my + 2}{y - 1} = f_1(y) + \dfrac{R_1}{y - 1}$ and $\dfrac{y^2 + my + 2}{y + 1} = f_2(y) + \dfrac{R_2}{y + 1}$, with $R_1 = R_2$. Find $m$.

:::solution
$$\begin{aligned}
P(-1) &= 1 - m + 2 = 3 - m,\\
P(1) &= 1 + m + 2 = 3 + m.
\end{aligned}$$
$3 - m = 3 + m$, so $0 = 2m$, and $m = 0$.
:::
:::

:::exercise
Find $r(x)$ for $x^{100}$ divided by $(x - 1)(x - 2)$.

:::solution
With $f(x) = x^{100}$: $f(1) = 1$ and $f(2) = 2^{100}$.
$$f(x) = q(x)(x - 1)(x - 2) + r(x), \qquad r(x) = ax + b.$$
$$\begin{aligned}
1 &= a + b \;\Rightarrow\; 1 - a = b,\\
2^{100} &= 2a + b = 2a + 1 - a \;\Rightarrow\; a + 1 = 2^{100} \;\Rightarrow\; a = 2^{100} - 1,\\
b &= 1 - (2^{100} - 1) = 1 - 2^{100} + 1 = 2 - 2^{100}.
\end{aligned}$$
Therefore
$$r(x) = (2^{100} - 1)x + 2 - 2^{100}.$$
:::
:::

:::exercise
$\dfrac{f(x)}{d(x)} = q(x) + \dfrac{r(x)}{d(x)}$. Show that if $x = a$ is a root of $d(x)$, then $r(a) = f(a)$.

:::solution
So if $x = a$ is a root of $d(x)$, setting $x = a$ in $f(x) = q(x)d(x) + r(x)$ gives
$$f(a) = q(a)d(a) + r(a) = q(a)\cdot 0 + r(a) \;\Rightarrow\; f(a) = r(a).$$

:::
:::

:::exercise
Find the remainder when $x^{100} - 4x^{98} + 5x + 6$ is divided by $x^3 - 2x^2 - x + 2$.

:::solution
Factor the divisor:
$$x^3 - 2x^2 - x + 2 = x^2(x - 2) - x + 2 = x^2(x - 2) - 1(x - 2) = (x^2 - 1)(x - 2),$$
and $x^2 - 1 = 0 \Rightarrow x^2 = 1 \Rightarrow x = \pm1$. So the zeros are $2, 1, -1$.

$\deg r(x) < 3$, so $r(x) = ax^2 + bx + c$ and
$$P(x) = q(x)(x^3 - 2x^2 - x + 2) + ax^2 + bx + c.$$
$$\begin{aligned}
P(2) &= a(2)^2 + b(2) + c = 4a + 2b + c = 2^{100} - (2^2)2^{98} + 5(2) + 6 = 16,\\
P(1) &= a + b + c = 1 - 4 + 5 + 6 = 8,\\
P(-1) &= a - b + c = 1 - 4 - 5 + 6 = -2.
\end{aligned}$$
Since $16 = 2 \cdot 8$: $4a + 2b + c = 2a + 2b + 2c$, so $2a - c = 0$, i.e. $2a = c$. With $b = 8 - c - a$, the third equation gives
$$a - (8 - c - a) + 2a = -2 \;\Rightarrow\; 3a - 8 + c + a = -2 \;\Rightarrow\; 4a + c - 8 = -2 \;\Rightarrow\; 6a = 6 \;\Rightarrow\; a = 1,$$
so $c = 2$, and $2 + 1 + b = 8$ gives $b = 5$:
$$\boxed{r(x) = x^2 + 5x + 2}.$$
:::
:::
