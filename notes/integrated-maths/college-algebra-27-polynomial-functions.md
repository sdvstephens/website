---
course: integrated-maths
chapter: 8
section: 27
title: Polynomial Functions
source-pages: 1-2
---

A **polynomial function** has the form
$$
f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_2 x^2 + a_1 x + a_0,
$$
written with the exponents descending from left to right.

- **Leading term:** $a_n x^n$.
- **Constant term:** $a_0$.
- **Degree:** $n$ (the largest exponent in the polynomial).
- **Domain:** all real numbers.

:::note
The exponents are **all** non-negative integers. Order by descending exponents when regarding polynomials.
:::

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
