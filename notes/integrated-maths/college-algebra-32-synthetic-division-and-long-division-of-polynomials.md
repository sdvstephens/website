---
course: integrated-maths
chapter: 8
section: 32
title: Synthetic Division and Long Division of Polynomials
source-pages: 1-2
---

:::theorem Factor Theorem
If, upon division, you get a remainder of $0$, your divisor is a factor of your dividend.
:::

For numbers: $48 \div 6 = 8$ with remainder $0$, so $6 \cdot 8 = 48$: both $6$ and $8$ are factors of the original dividend $48$.

## Rational Zeros Theorem

:::example
$f(x) = 2x^3 - x^2 + 2x - 3$; $x = 1$, i.e. $x - 1 = 0$. Is the $x$-value a root?

:::solution
$$
f(1) = 2(1)^3 - (1)^2 + 2(1) - 3 = 2 - 1 + 2 - 3 = \boxed{0}
$$
Thus $x = 1$ is a root. That means that $0$ is the remainder when you divide by the factor that $x = 1$ creates, $(x - 1)$.

**Long division.** Divide the first terms, then multiply the result by the $(x-1)$ and subtract:
$$
\begin{aligned}
&\phantom{-(}2x^3 - x^2 + 2x - 3\\
-&(2x^3 - 2x^2) &&\tfrac{2x^3}{x} = 2x^2,\quad 2x^2(x-1) = 2x^3 - 2x^2\\
&\phantom{-(2x^3}\;\,0 + x^2 + 2x - 3\\
-&(x^2 - x) &&\tfrac{x^2}{x} = x,\quad x(x-1) = x^2 - x\\
&\phantom{-(2x^3 - x^2 +}\;\,0 + 3x - 3\\
-&(3x - 3) &&\tfrac{3x}{x} = 3\\
&\phantom{-(2x^3 - x^2 + 2x - 3}\;\,\boxed{0}
\end{aligned}
$$
The quotient is $2x^2 + x + 3$. If you do not end with $0$, then you did something **wrong**! So
$$
f(x) = (x-1)(2x^2 + x + 3).
$$

**Synthetic division** (only when dividing by $x - c$, that is, when $x = c$ is a root you are testing). Bring down the first coefficient, multiply it by $1$, add to the next coefficient, and repeat:
$$
\begin{array}{r|rrrr}
1 & 2 & -1 & 2 & -3\\
  &   & 2 & 1 & 3\\
\hline
  & 2 & 1 & 3 & \boxed{0}
\end{array}
$$
The last number is the remainder. The bottom row gives $2x^2 + x + 3$, so $f(x) = (2x^2 + x + 3)(x - 1)$.
:::
:::

:::example
$g(x) = 3x^6 + 82x^3 + 27$; $x = -3$.

:::solution
**Synthetic division** (fill in zeros for the missing powers):
$$
\begin{array}{r|rrrrrrr}
-3 & 3 & 0 & 0 & 82 & 0 & 0 & 27\\
   &   & -9 & 27 & -81 & -3 & 9 & -27\\
\hline
   & 3 & -9 & 27 & 1 & -3 & 9 & \boxed{0}
\end{array}
$$
which gives $3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9$, and $g(-3) = 0$.

**Long division:**
$$
\begin{aligned}
&3x^6 + 0x^5 + 0x^4 + 82x^3 + 0x^2 + 0x + 27\\
-&(3x^6 + 9x^5) &&\tfrac{3x^6}{x} = 3x^5,\quad 3x^5(x+3) = 3x^6 + 9x^5\\
&\quad 0 - 9x^5 + 0x^4 + 82x^3\\
-&(-9x^5 - 27x^4) &&\tfrac{-9x^5}{x} = -9x^4,\quad -9x^4(x+3) = -9x^5 - 27x^4\\
&\quad 0 + 27x^4 + 82x^3 + 0x^2 + 0x + 27\\
-&(27x^4 + 81x^3)\\
&\quad 0 + x^3 + 0x^2 + 0x + 27\\
-&(x^3 + 3x^2)\\
&\quad 0 - 3x^2 + 0x + 27\\
-&(-3x^2 - 9x) &&\tfrac{-3x^2}{x} = -3x,\quad -3x(x+3) = -3x^2 - 9x\\
&\quad 0 + 9x + 27\\
-&(9x + 27) &&9(x+3) = 9x + 27\\
&\quad \boxed{0}
\end{aligned}
$$
So the quotient is $3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9$, and
$$
g(x) = (x+3)(3x^5 - 9x^4 + 27x^3 + x^2 - 3x + 9).
$$
:::
:::
