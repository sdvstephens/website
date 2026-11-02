---
course: integrated-maths
chapter: 10
section: 10.5
title: Synthetic Division
---

When the divisor is $x - a$, long division can be cut down to arithmetic on the coefficients alone.

*(Also known as **Ruffini’s rule**.)*

Consider $P(x)/q(x)$, where $q(x) = x - a$ and $P(x) = b_mx^m + \cdots + b_0$. Then **synthetic division** is given by
$$
\begin{array}{r|rrrr}
a & b_m & b_{m-1} & \cdots & b_0 \\ \hline
 & & & &
\end{array}
$$
Note this is $a$, not “$-a$”.

Consider $x^3 + 7x^2 - x + 11$ divided by $x - 5$:
$$
\begin{array}{r|rrrrl}
5 & 1 & 7 & -1 & 11 & \leftarrow \bigstar \\
 & & & & & \leftarrow \bigcirc \\ \hline
 & & & & & \leftarrow \square
\end{array}
$$
Each shape denotes a row.

\* This only works when the divisor is $1x - a$, i.e. its leading coefficient is $1$.

Filling it in: bring down the $1$; multiply by $5$ and write the product under the next coefficient; add down the column; repeat.

![Synthetic division of x^3+7x^2-x+11 by x-5: bring down 1, multiply by 5, add down each column](/notes/integrated-maths/figures/s3-synthetic-division.svg)

$$
\begin{array}{r|rrrr}
5 & 1 & 7 & -1 & 11 \\
 & & 5 & 60 & 295 \\ \hline
 & 1 & 12 & 59 & 306
\end{array}
$$
$\Longleftrightarrow$ the long division $x - 5\;\big)\;x^3 + 7x^2 - x + 11$ from before: quotient $1x^2 + 12x + 59$, remainder $306$.

:::problem
Divide $x^3 - 3x^2 + 5x - 2$ by $x + 5$.

:::solution
By long division:
$$
\begin{array}{rrrrr}
 & & x^2 & {}-8x & {}+45 \\ \cline{2-5}
x + 5\;\big) & x^3 & {}-3x^2 & {}+5x & {}-2 \\
 & -(x^3 & {}+5x^2) & & \\ \cline{2-3}
 & & -8x^2 & {}+5x & {}-2 \\
 & & -(-8x^2 & {}-40x) & \\ \cline{3-4}
 & & & 45x & {}-2 \\
 & & & -(45x & {}+225) \\ \cline{4-5}
 & & & & -227
\end{array}
$$
By synthetic division (note $x + 5 = x - (-5)$):
$$
\begin{array}{r|rrrr}
-5 & 1 & -3 & 5 & -2 \\
 & & -5 & 40 & -225 \\ \hline
 & 1 & -8 & 45 & -227
\end{array}
\qquad\Longrightarrow\qquad x^2 - 8x + 45, \quad r = -227.
$$
:::
:::

:::problem
Divide $2x - 7$ into $f(x) = 4x^2 - 6x + 9$.

:::solution
So
$$\frac{4x^2 - 6x + 9}{2\left(x - \tfrac72\right)} \;\Longrightarrow\;
\begin{array}{r|rrr}
\tfrac72 & 2 & -3 & \tfrac92 \\
 & & 7 & 14 \\ \hline
 & 2 & 4 & \tfrac{37}{2}
\end{array}$$
(dividing $\tfrac12 f(x) = 2x^2 - 3x + \tfrac92$ by $x - \tfrac72$). So we have $2x + 4$, $r = \tfrac{37}{2}$.

Let’s test!
$$\left(2x + 4 + \frac{37/2}{x - 7/2}\right)\left(x - \frac72\right) = 2x^2 - 7x + 4x - 14 + \frac{37}{2} = 2x^2 - 3x - 14 + \frac{37}{2};$$
multiplying by $2$, we get
$$4x^2 - 6x - 28 + 37 = 4x^2 - 6x + 9. \;\checkmark$$
So $f(x) = (2x - 7)(2x + 4) + 37$: dividing $f(x)$ by $2x - 7$ gives quotient $2x + 4$ and remainder $37$.

:::
:::

:::problem
Use synthetic division:

(a) $(x^3 - x + 7)/(x + 3)$;

(b) $(3y^4 - 4y^3 + 5y^2 - 11y + 2)/(2 + 3y)$.

:::solution
(a)
$$
\begin{array}{r|rrrr}
-3 & 1 & 0 & -1 & 7 \\
 & & -3 & 9 & -24 \\ \hline
 & 1 & -3 & 8 & -17
\end{array}
\qquad\Longrightarrow\qquad x^2 - 3x + 8, \quad r = -17.
$$

(b) $2 + 3y = 3\left(\tfrac23 + y\right)$, so divide by $y + \tfrac23$ and then by $3$:
$$
\begin{array}{r|rrrrr}
-\tfrac23 & 3 & -4 & 5 & -11 & 2 \\
 & & -2 & 4 & -6 & \tfrac{34}{3} \\ \hline
 & 3 & -6 & 9 & -17 & \tfrac{40}{3}
\end{array}
$$
This gives quotient $y^3 - 2y^2 + 3y - \tfrac{17}{3}$ and remainder $\tfrac{40}{3}$. Check:
$$\begin{aligned}
&\left(y^3 - 2y^2 + 3y - \frac{17}{3} + \frac{40/3}{2 + 3y}\right)(2 + 3y)\\
&= 2y^3 + 3y^4 - 4y^2 - 6y^3 + 6y + 9y^2 - \frac{34}{3} - 17y + \frac{40}{3}\\
&= 3y^4 - 4y^3 + 5y^2 + 6y - 17y + \frac63\\
&= 3y^4 - 4y^3 + 5y^2 - 11y + 2. \;\checkmark
\end{aligned}$$
:::
:::

## Exercises

:::exercise
Divide $x^3 + 4x^2 - 5x + 19$ by $x + 3$.

:::solution
$$
\begin{array}{r|rrrr}
-3 & 1 & 4 & -5 & 19 \\
 & & -3 & -3 & 24 \\ \hline
 & 1 & 1 & -8 & 43
\end{array}
\qquad r = 43, \quad q(x) = x^2 + x - 8.
$$
:::
:::

:::exercise
Divide $x^5 - 23x^3 + 11x^2 - 14x + 20$ by $x + 5$.

:::solution
$$
\begin{array}{r|rrrrrr}
-5 & 1 & 0 & -23 & 11 & -14 & 20 \\
 & & -5 & 25 & -10 & -5 & 95 \\ \hline
 & 1 & -5 & 2 & 1 & -19 & 115
\end{array}
$$
$$r = 115, \qquad q(x) = x^4 - 5x^3 + 2x^2 + x - 19.$$

:::
:::

:::exercise
Divide $4x^4 - 10x^3 + 14x^2 + 7x - 19$ by $2x - 1$.

:::solution
$2x - 1 = 2\left(x - \tfrac12\right)$:
$$
\begin{array}{r|rrrrr}
\tfrac12 & 4 & -10 & 14 & 7 & -19 \\
 & & 2 & -4 & 5 & 6 \\ \hline
 & 4 & -8 & 10 & 12 & -13
\end{array}
$$
Dividing the quotient row by $2$:
$$q(x) = 2x^3 - 4x^2 + 5x + 6, \qquad r = -13.$$

:::
:::

:::exercise
Divide $3z^3 - 4z^2 - 14z + 3$ by $3z + 5 = 3\left(z + \tfrac53\right)$.

:::solution
$$
\begin{array}{r|rrrr}
-\tfrac53 & 3 & -4 & -14 & 3 \\
 & & -5 & 15 & -\tfrac53 \\ \hline
 & 3 & -9 & 1 & \tfrac43
\end{array}
$$
($3 = \tfrac93$, so $\tfrac93 - \tfrac53 = \tfrac43$.) Dividing the quotient row by $3$:
$$q(z) = z^2 - 3z + \frac13, \qquad r = \frac43.$$
:::
:::

:::exercise
Divide $x^4 + 3x^3 - x^2 + 7x - 1$ by $2 - x$.

:::solution
$2 - x = -(x - 2)$, so divide by $x - 2$ and negate the quotient:
$$
\begin{array}{r|rrrrr}
2 & 1 & 3 & -1 & 7 & -1 \\
 & & 2 & 10 & 18 & 50 \\ \hline
 & 1 & 5 & 9 & 25 & 49
\end{array}
$$
$$q(x) = -x^3 - 5x^2 - 9x - 25, \qquad r = 49.$$

:::
:::

:::exercise
*(The statement isn’t copied in the notes: it shows a synthetic division of $x^3 + 3x^2 - 7x + 5$ by $2x - 3$ that went wrong.)*

:::solution
Write $2x - 3 = 2\left(x - \tfrac32\right)$:
$$
\begin{array}{r|rrrr}
\tfrac32 & 1 & 3 & -7 & 5 \\
 & & \tfrac32 & \tfrac{27}{4} & -\tfrac38 \\ \hline
 & 1 & \tfrac92 & -\tfrac14 & \tfrac{37}{8}
\end{array}
$$
$$q(x) = \frac12x^2 + \frac94x - \frac18, \qquad r = \frac{37}{8}.$$
He forgot to turn $2x - 3$ into $2\left(x - \tfrac32\right)$.
:::
:::
