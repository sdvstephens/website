---
course: integrated-maths
chapter: 10
section: 10.1
title: Polynomials and Polynomial Functions
---

This page sets out what a polynomial is, the names for its parts, and some first computations with coefficients.

:::definition Polynomials and polynomial functions
$P(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_0$ is a **polynomial function** $P(x)$, and the right-hand side is the **polynomial**. Each summand ($a_ix^i$) is called a **term**. When the highest power of $x$ is $0$, the polynomial is a **constant** (e.g. $P(x) = 9 = 9x^0$); the **zero polynomial** is the constant $0$. All others are **nonzero**. $\deg f$ is the **degree** of the polynomial function $f(x)$: the highest power of $x$ in it.

Written with the exponents descending from left to right,
$$
f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_2 x^2 + a_1 x + a_0
$$
has

- **Leading term:** $a_n x^n$.
- **Constant term:** $a_0$.
- **Domain:** all real numbers.

| Degree | Name |
|:---:|:---|
| 0 | constant |
| 1 | linear |
| 2 | quadratic |
| 3 | cubic |
| 4 | quartic |

| Number of terms | Name |
|:---:|:---|
| 1 | monomial |
| 2 | binomial |
| 3 | trinomial |
:::

:::note
The exponents are **all** non-negative integers. Order by descending exponents when regarding polynomials.
:::

In each example below, decide whether the function is a polynomial and, where it is, find its degree, leading term and constant term.

:::example
Find the degree, leading term and constant term of $f(x) = 5x^2 + 4x^4$.

:::solution
Reorder: $4x^4 + 5x^2$. Remember, this is $4x^4 + 0x^3 + 5x^2 + 0x + 0$. So the degree is $4$, the leading term is $4x^4$, and the constant term is $0$.
:::
:::

:::example
Find the degree, leading term and constant term of $g(x) = 3 - \tfrac12 x$.

:::solution
Reorder: $-\tfrac12 x + 3x^0 = -\tfrac12 x + 3$. The degree is $1$, the leading term is $-\tfrac12 x$, and the constant term is $3$.

:::
:::

:::example
$h(x) = 9x^0$.

:::solution
Degree $= 0$: this is a constant function, which is a polynomial of degree $0$.

:::
:::

:::example
$f(x) = 0$.

:::solution
**No degree.**
:::
:::

:::example
$F(x) = x^{3/2} - 2x - 1$.

:::solution
**Not** a polynomial: the exponent $\tfrac32$ is not an integer.
:::
:::

:::example
$G(x) = 1 - \dfrac4x$.

:::solution
$G(x) = 1 - 4x^{-1}$, so it is **not** a polynomial (negative exponent).
:::
:::

:::example
$f(x) = 9x^4 - \pi x^2 + \tfrac12$.

:::solution
A polynomial, already in order :)
:::
:::

:::example
$g(x) = \dfrac{x^2 - 5}{x^4}$.

:::solution
$$
\frac{1}{x^4}\cdot(x^2 - 5) \implies x^{-4}(x^2 - 5) = x^{-2} - 5x^{-4} = \frac{1}{x^2} - \frac{5}{x^4},
$$
so it is **not** a polynomial.
:::
:::

:::example
$h(x) = \dfrac{3x^2 - 1}{7}$.

:::solution
$h(x) = \tfrac37 x^2 - \tfrac17$, which is a polynomial.
:::
:::

:::example
$G(x) = 2\sqrt{x}\left(\sqrt{x} + 1\right)$.

:::solution
$G(x) = 2x + 2\sqrt{x}$, so it is **not** a polynomial.
:::
:::

:::example
$F(x) = 2x^3(x^2 - 1)(x - 1)^2$.

:::solution
$$
\begin{aligned}
F(x) &= (x^3 - x^2 - x + 1)(2x^3)(x - 1)\\
&= (2x^6 - 2x^5 - 2x^4 + 2x^3)(x - 1)\\
&= 2x^7 - 2x^6 - 2x^5 + 2x^4 - 2x^6 + 2x^5 + 2x^4 - 2x^3\\
&= 2x^7 - 4x^6 + 4x^4 - 2x^3,
\end{aligned}
$$
which is a polynomial.

:::
:::

## Working with coefficients

:::problem
Suppose $(3x-1)^7 = a_7x^7 + a_6x^6 + \cdots + a_0$. Find $\displaystyle\sum_{i=0}^{7} a_i$.

:::solution
So $a_0 = -1$, since $(-1)^7 = -1$. Additionally, $a_7 = 3^7 = (3^2)^3 \cdot 3 = 2187$.

Expanding the first few powers:
$$\begin{aligned}
(3x-1)(3x-1) &= 9x^2 - 6x + 1,\\
(9x^2 - 6x + 1)(3x - 1) &= 27x^3 - 27x^2 + 9x - 1.
\end{aligned}$$
The sums of the coefficients of $(3x-1)^n$ go
$$n = 1 \to 2, \quad 2 \to 4, \quad 3 \to 8, \quad 4 \to 16, \quad 5 \to 32, \quad 6 \to 64, \quad 7 \to 128,$$
so
$$\sum_{i=0}^{7} a_i = 128.$$

Oh wait: the sum of the coefficients is the value at $x = 1$, which is $(3 - 1)^7 = 2^7 = 128$ :/
:::
:::

:::example
$ax^3 + bx^2 + cx + d = (x^2 + 2x - 8)(x - 3) - (x - 2)(x^2 + 5x + 4)$ for all $x$. Find $a + b + c + d$.

:::solution
$$\begin{aligned}
&(x^3 - x^2 - 14x + 24) - (x^3 + 3x^2 - 6x - 8)\\
&= x^3 - x^3 - x^2 - 3x^2 - 14x + 6x + 24 + 8\\
&= -4x^2 - 8x + 32,
\end{aligned}$$
so $a = 0$, $b = -4$, $c = -8$, $d = 32$. Therefore
$$a + b + c + d = 0 + (-4) + (-8) + 32 = 20.$$
:::
:::

## Exercises

:::exercise
Find the degree of $f(g(x))$, given that $f$ and $g$ are polynomials such that $\deg f = m$ and $\deg g = n$, with $m, n \in \ZZ^+$.

:::solution
Let $g(x) = a_nx^n + \cdots + a_0$ and $f(x) = b_mx^m + \cdots + b_0$, with $a_i, b_i \in \RR$. Then the leading term is given by
$$f(g(x)) = b_m\big(g(x)\big)^m + \cdots + b_0 = b_m(a_nx^n + \cdots + a_0)^m + \cdots + b_0.$$
WLOG let all $a_i$ with $i \neq n$ be $0$, and $a_n = 1$, so that
$$f(g(x)) = b_m(x^n)^m + \cdots + b_0.$$
Ah, so now we see we have a leading term of $b_mx^{nm}$, therefore of degree $nm$. Thus
$$\deg f(g(x)) = \deg f \cdot \deg g = nm.$$
:::
:::
