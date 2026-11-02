---
course: integrated-maths
chapter: 10
section: 10.12
title: The Fundamental Theorem of Algebra and the Identity Theorem
---

A polynomial of degree $n$ has at most $n$ roots. This page states the Fundamental Theorem of Algebra and uses that count to show when a polynomial must be zero and when two polynomials must be equal.

:::theorem Fundamental Theorem of Algebra
Every one-variable polynomial of degree $n$ has at most $n$ roots in $\RR$ and *exactly* $n$ roots in $\CC$, counted with multiplicity.
:::

:::problem
Let $f(x)$ be a polynomial of degree $n > 0$. Show that the graphs of $y = c$ and $y = f(x)$ cannot intersect at more than $n$ points.

:::solution
Given that the polynomial is of degree $n$, we can factor it into $(x - r_1)\cdots(x - r_n) \Rightarrow \exists\ n$ total zeros.

For $y = c$, either $f(m) > c$, $f(m) < c$, or $f(m) = c$.

If $f(m_1) > c$, then for $f(m_2)$ to become less than $c$ at some point, it must cross $c$. $\therefore \exists$ a point such that $f(x) = c$. So $f(x) - c = 0$, and since $c$ is constant, $\therefore \deg\big(f(x) - c\big) = \deg\big(f(x)\big) = n$.
:::
:::

## Algebraic applications of the Fundamental Theorem

:::problem
Suppose $f(x)$ is a polynomial such that $f(x) = a_nx^n + \cdots + a_0$ and there are at least $n+1$ different values of $x$ for which $f(x) = 0$.

**(a)** If $a_n \neq 0$, then what does the Fundamental Theorem of Algebra (FTA) tell us about the number of different values of $x$ for which $f(x) = 0$?

:::solution
**(a)** FTA tells us there exists a max of $n$ roots for a polynomial of degree $n$, but this contradicts our premise. Thus our premise cannot be.

**(b)** If there are $n+1$ different values for which $f(x) = 0$, then $f(x)$ sends all $x$ to zero, so the function is $f(x) = 0$.
:::
:::

:::note Trick!!
If $f(x)$ is a polynomial of degree at most $n$ and there are $n+1$ different values for which $f(x) = 0$, then $f(x)$ is the zero polynomial, i.e.
$$f(x) = 0 \ \ \forall x \iff a_n = a_{n-1} = \cdots = a_0 = 0.$$
:::

:::problem
Let $f(x)$ be of degree $2$ with $f(2) = 4$, $f(3) = 9$ and $f(4) = 16$.

**(a)** Let $g(x) = f(x) - x^2$. What is the max degree of $g$?

:::solution
**(a)** The max is $2$, if $f(x)$ has $a_n \neq 1$.

**(b)** We have
$$g(2) = 4 - 2^2 = 4 - 4 = 0,\qquad g(3) = 9 - 9 = 0,\qquad g(4) = 16 - 16 = 0.$$
So we have $3$ values of $x$ for which $g(x) = 0$, but $g(x)$ has max degree $2$, so $g(x)$ must be the zero function. Thus $0 = f(x) - x^2$, so $x^2 = f(x)$.
:::
:::

:::problem
Let $p_1(x)$ and $p_2(x)$ be in $\RR[x]$ with degree at most $n$. Show that if $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then $p_1(x) = p_2(x)$ for all $x$.

:::solution
Consider $P(x) = p_1(x) - p_2(x)$. Each $p_i(x)$ has degree at most $n$, so $P(x)$ is of degree at most $n$. So $P(x)$ has a max of $n$ roots. So if $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then for $n+1$ distinct values of $x$ we have $p_1(x) - p_2(x) = 0$. But $p_1(x) - p_2(x) = P(x)$, which can be $0$ at most $n$ times, which is a contradiction. So $P(x)$ must be the zero function. If $P(x)$ is the zero function then $P(x) = 0$ for all $x$, so for all $x$,
$$0 = p_1(x) - p_2(x) \implies p_1(x) = p_2(x). \qquad\blacksquare$$
:::
:::

:::theorem The Identity Theorem
If $p_1(x)$ and $p_2(x)$ are polynomials of at most degree $n$ and $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then $p_1(x) = p_2(x)$ for all $x$.
:::

:::problem
**(a)** Consider the system of equations:
$$\begin{aligned}
&\text{(EQ1)} & a_1 + 8a_2 + 27a_3 + 64a_4 &= 1\\
&\text{(EQ2)} & 8a_1 + 27a_2 + 64a_3 + 125a_4 &= 27\\
&\text{(EQ3)} & 27a_1 + 64a_2 + 125a_3 + 216a_4 &= 125\\
&\text{(EQ4)} & 64a_1 + 125a_2 + 216a_3 + 343a_4 &= 343.
\end{aligned}$$
These equations determine $a_1, a_2, a_3, a_4$. Show that
$$a_1m^3 + a_2(m+1)^3 + a_3(m+2)^3 + a_4(m+3)^3 = (2m-1)^3 \quad \text{for all } m.$$
Additionally, prove that $a_1 + a_2 + a_3 + a_4 = 8$ and $64a_1 + 27a_2 + 8a_3 + a_4 = 729$.

:::solution
Let $A(m) = \alpha_1(m) - \alpha_2(m)$, where
$$\alpha_1(m) = a_1m^3 + a_2(m+1)^3 + \cdots + a_4(m+3)^3 \quad\text{and}\quad \alpha_2(m) = (2m-1)^3.$$
We show $A(m)$ is the zero function. See that $(2m-1)^3 = 1, 27, 125, 343$ for the values $m = 1, 2, 3, 4$, respectively.

Note that $A(m)$ is at most degree $3$, since $\deg(\alpha_2(m)) = 3 = \deg(\alpha_1(m))$. Then there are at most $3$ values for which $\alpha_2(m) = \alpha_1(m)$. Ah! But consider $m = 1, 2, 3, 4$. (EQ1), (EQ2), (EQ3), (EQ4) give these values for $\alpha_1(m)$, but we just saw that $\alpha_2(m)$ also equals $1, 27, 125, 343$ for $m = 1, 2, 3, 4$. Thus the only explanation is that $A(m)$ is the zero function, since $A(1) = 0$, $A(2) = 0$, $A(3) = 0$ and $A(4) = 0$. Thus $0 = \alpha_1(m) - \alpha_2(m)$ for all $m$, so
$$\alpha_1(m) = \alpha_2(m) \quad \text{for all } m.$$

For the second part, we let $(2m-1)^3 = 8$, so $2m - 1 = 2$, so $2m = 3$, so $m = \frac32$. Then
$$\begin{aligned}
\alpha_1\!\left(\tfrac32\right) &= a_1\left(\tfrac32\right)^3 + a_2\left(\tfrac32 + \tfrac22\right)^3 + a_3\left(\tfrac32 + \tfrac42\right)^3 + a_4\left(\tfrac32 + \tfrac62\right)^3\\
&= a_1\frac{27}{8} + a_2\frac{125}{8} + a_3\frac{343}{8} + a_4\frac{729}{8}\\
&= \frac18\left(27a_1 + 125a_2 + 343a_3 + 729a_4\right).
\end{aligned}$$

Scratch: other values of $m$ give other relations. With $(m-1)^3 = m^3 - 3m^2 + 3m - 1$:
$$\begin{aligned}
m = 0:&\quad a_2 + 8a_3 + 27a_4 = -1,\\
m = -1:&\quad -a_1 + a_3 + 8a_4 = -27,
\end{aligned}$$
and $8 \cdot \text{(EQ1)}$ reads $8a_1 + 8(8)a_2 + (8)(27)a_3 + (8)(64)a_4 = 8$.

**Take 2.**

**WTS:** $a_1 + a_2 + a_3 + a_4 = 8$ AND $64a_1 + 27a_2 + 8a_3 + a_4 = 729$.

**What we know:**
$$a_1m^3 + a_2(m+1)^3 + a_3(m+2)^3 + a_4(m+3)^3 = (2m-1)^3 = 8m^3 - 12m^2 + 6m - 1.$$

Expanding the left side,
$$a_1m^3 + a_2(m^3 + 3m^2 + 3m + 1) + a_3(m^3 + 6m^2 + 12m + 8) + a_4(m^3 + 9m^2 + 27m + 27)$$

$$= (a_1 + a_2 + a_3 + a_4)m^3 + (3a_2 + 6a_3 + 9a_4)m^2 + (3a_2 + 12a_3 + 27a_4)m + (a_2 + 8a_3 + 27a_4).$$

Comparing the $m^3$ terms, $(a_1 + a_2 + a_3 + a_4)m^3 = 8m^3$, so $a_1 + \cdots + a_4 = 8$.

For the second identity: $m = -4$.

:::
:::

:::problem
There exists a unique $P(x) \in \RR[x]$ with $P(x) = 7x^7 + c_1x^6 + c_2x^5 + \cdots + c_7$, where $c_i \in \RR$, such that $P(1) = 1$, $P(2) = 2$, $\ldots$, $P(7) = 7$. What is $P(0)$?

:::solution
Consider the function that results from the difference between $P(x)$ and $x$. The roots of such a function are clearly $1$ through $7$. So for $P(x) - x = \mcP(x)$ we have
$$a(x-1)(x-2)\cdots(x-7) = P(x) - x,$$
where $a \in \RR$. Given that $a(x^7 \pm \cdots) = 7x^7 + \cdots + c_7 - x$, we see that $a$ must be $7$. So our polynomial is
$$P(x) = 7(x-1)\cdots(x-7) + x.$$
For $P(0)$ it is immediately clear that $c_7$ will be the only surviving term, so
$$P(0) = 7(-1)(-2)(-3)\cdots(-7) = -7(7!) = -35280.$$
:::
:::

:::note Trick!!
If $f(x)$ is an unknown polynomial of degree $n$ and you know $n$ values that can be modeled as a function $g(x)$ (e.g. $\frac1n, 1, 5, n^2, n^2 + 2n + 1, \ldots$), then you can construct a new function $h(x) := f(x) - g(x)$, where $h(x)$ can be manipulated to produce a polynomial that can give you $f(x)$.
:::

:::problem
Let $g(x), f(x) \in \RR[x]$. Earlier we showed that $g(x)$ is not necessarily a factor of $f(x)$ if every root of $g(x)$ is a root of $f(x)$ (we did this by counterexample: $g(x) = (x-1)^2$ but $f(x) = x(x-1)$). What if $g(x)$ was restricted to not have any multiple roots? Must $g(x)$ then be a factor of $f(x)$?

:::solution
*First attempt.* We can represent this with a function (we essentially ask if the image of $g$ is necessarily in $f$ for some function $h$). Let $h(x) := f(x) - g(x)$. If $f = g$, it’s trivial. If $f \neq g$, then $f(r_i) = g(r_i) \iff 0 = 0$, since every root $r_i$ of $g$ is a root of $f$. So, given that $g$ has no multiple roots, we have
$$h(x) = g(x)\left(\frac{f(x)}{g(x)} - 1\right).$$
Given that $h(x)$ is a polynomial, it’s obviously bijective.

![Two mapping diagrams. Top: g has distinct linear factors (x minus r1) through (x minus rn), each sent by f to a matching factor of f, and h is labelled bijective. Bottom: g has a repeated factor (x minus r1) squared, and both copies are sent to the single factor (x minus r1) of f](/notes/integrated-maths/figures/s6-root-correspondence.svg)

Scratch: $f - g = g\left(\frac{f}{g} - 1\right)$. Trying examples:
$$\begin{aligned}
(x-1)(x-2) - (x-1) &= (x-1)\big((x-2) - 1\big) = (x-1)(x-3),\\
(x-1)(x-2) - (x-1)^2 &= (x-1)\big((x-2) - (x-1)\big) = (x-1)(x - x - 2 + 1) = (x-1)(-1) = -(x-1) = 1 - x,\\
x(x-1) - (x-1)^2 &= (x-1)\big(x - (x-1)\big) = (x-1)(1).
\end{aligned}$$

*Second attempt.* If, in $\frac{f}{g}$, $g$ has no multiple roots, then there exists a one-to-one correspondence between each root of $g$ and a root of $f$, so $g$ evenly divides $f$, so $g$ is a factor of $f$.

*Third attempt.* Write $f = qg + r$ with $r = 0$ or $\deg r < \deg g$.

Let $\deg g = n$, so that it has $n$ roots. Let those roots be given by $s_i$. Since $g(s_i) = 0$ for each $i$ with $1 \le i \le n$, we have
$$f(s_i) = q(s_i)g(s_i) + r(s_i) = q(s_i)(0) + r(s_i) = r(s_i) \quad\text{for } 1 \le i \le n.$$
But $f(s_i) = 0$, so $r(s_i) = 0$. So $r(s_i) = 0$ for all $1 \le i \le n$, which means $r(x)$ has at least $n$ roots, since each $s_i$ is distinct. Ah! But $\deg r < \deg g$ if $r \neq 0$, so $r(x)$ must be zero for all $x$, so
$$g(x) \mid f(x).$$
:::
:::

## Exercises

:::exercise
(a) $x^4 - 8x^2 + 16 = 0$

:::solution
**(a)** Clearly a root is $2$, and another is $-2$, since $2^4 - 2^5 = 2^4(1 - 2) = 16(-1) = -16$. So
$$\begin{array}{r|rrrrr}
2 & 1 & 0 & -8 & 0 & 16 \\
 & & 2 & 4 & -8 & -16 \\ \hline
 & 1 & 2 & -4 & -8 & 0
\end{array}
\qquad
\begin{array}{r|rrrr}
-2 & 1 & 2 & -4 & -8 \\
 & & -2 & 0 & 8 \\ \hline
 & 1 & 0 & -4 & 0
\end{array}$$
$$\implies (x + 2)(x - 2)(x^2 - 4) \implies (x + 2)^2(x - 2)^2.$$

Only factors are $\{1, 2, 16\}$.

:::
:::

:::exercise
**(a)** Show that if $f \in \RR[x]$ is of degree $4$ with $f(0) = f(1) = f(2) = f(3) = 1$ and $f(4) = 0$, then $f(5)$ must be $-4$.

:::solution
$f(0) = 1 \iff a_0 = 1$; $f(4) = 0 \iff f(x) = a(x-4)(x-r_2)(x-r_3)(x-r_4)$.

:::
:::

:::exercise
Let $P(x) \in \RR[x]$ with $\deg(P(x)) = 1996$. If $P(n) = \frac1n$ for $n = 1, 2, \ldots, 1997$, compute $P(1998)$.
:::
