---
course: integrated-maths
chapter: 9
section: 6
title: Polynomial Division
source-pages: 63-90, 91-92
---

## Polynomials

:::definition Polynomials and polynomial functions
$P(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_0$ is a **polynomial function** $P(x)$, and the right-hand side is the **polynomial**. Each summand ($a_ix^i$) is called a **term**. When the highest power of $x$ is $0$, the polynomial is a **constant** (e.g. $P(x) = 9 = 9x^0$); the **zero polynomial** is the constant $0$. All others are **nonzero**. $\deg f$ is the **degree** of the polynomial function $f(x)$: the highest power of $x$ in it.

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

:::problem{6.3}
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

:::exercise{6.1.4}
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

:::problem{6.4}
Suppose $a, b, c \in \RR$ are such that $(2x^2 + 3x + 7)(ax^2 + bx + c) = 2x^4 + 11x^3 + 9x^2 + 13x - 35$.

(a) Use the coefficient of $x^4$ to find $a$.

(b) Use the coefficient of $x^3$ to find $b$.

(c) Find $c$.

:::solution
(a) We know $(2x^2)(ax^2) = 2x^4$, so $a = 1$.

(b) $(2x^2)(bx) + (3x)(ax^2) = 11x^3$. Since $a = 1$, this is $(2x^2)(bx) + 3x^3 = 11x^3$, so $b = 4$.

(c) We now have $(2x^2 + 3x + 7)(x^2 + 4x + c) = 2x^4 + 11x^3 + 9x^2 + 13x - 35$, so $7c = -35$, therefore $c = -5$.

Let’s check this by expanding:
$$(2x^2 + 3x + 7)(x^2 + 4x - 5) = 2x^4 + 11x^3 + 9x^2 + 13x - 35. \;\checkmark$$
:::
:::

:::problem{6.5}
Let $g_1(x) = \dfrac{x^3 + 7x^2 - x + 11}{x - 5}$, so $(x - 5)g_1(x) = x^3 + 7x^2 - x + 11$.

(a) What must the highest term of $g_1(x)$ be? Why?

(b) Let $g_2(x) = g_1(x) - x^2$, so that we have $\dfrac{x^3 + 7x^2 - x + 11}{x - 5} = g_2(x) + x^2$. Find $(x - 5)g_2(x)$ by multiplying this equation by $(x - 5)$. Find the highest degree term of $g_2(x)$.

(c) Let $g_2(x) = ax + g_3(x)$, where $ax$ is the highest degree term of $g_2(x)$ from part (b), so we have $\dfrac{x^3 + 7x^2 - x + 11}{x - 5} = x^2 + ax + g_3(x)$. Find $g_3(x)$.

(d) Combine the previous parts to write $\dfrac{x^3 + 7x^2 - x + 11}{x - 5} = q(x) + \dfrac{r}{x - 5}$, with $q(x) \in \PP[x]$ (a polynomial) and $r \in \RR$.

:::solution
(a) $x^2$ must be the highest term, since when $\deg f = n$ and $\deg g = m$, $\deg(fg) = n + m$. Therefore, as $(x - 5)$ has degree $1$, $g_1(x)$ must have degree $2$.

(b) Multiplying by $(x - 5)$:
$$x^3 + 7x^2 - x + 11 = (x - 5)g_2(x) + (x - 5)x^2 = (x - 5)g_2(x) + x^3 - 5x^2,$$
so
$$(x - 5)g_2(x) = 12x^2 - x + 11.$$
Therefore $\deg g_2(x) = 1$, with highest term $12x$.

(c) Multiply out $\big(x^2 + ax + g_3(x)\big)(x - 5)$ and compare with $x^3 + 7x^2 - x + 11$. The $x$ terms give $g_3(x) - 5a = -1$, and with $a = 12$ this is $g_3(x) - 60 = -1$, so the highest term of $g_3(x)$ is $59$. But then the constant terms don’t match: $-5 \cdot 59 \neq 11$. Hmmm.

(d) Let $g_3(x) = 59$. Then
$$(x^2 + 12x + 59)(x - 5) = x^3 - 5x^2 + 12x^2 - 60x + 59x - 295,$$
so $r = 295$? (Let’s double check!)
$$x^3 - x^3 + 7x^2 - 12x^2 + 5x^2 - x + 60x - 59x + 295 + 11 = r \;\Rightarrow\; r = 306.$$
So
$$\frac{x^3 + 7x^2 - x + 11}{x - 5} = x^2 + 12x + 59 + \frac{306}{x - 5},$$
i.e., $q(x) = x^2 + 12x + 59$ and $r = 306$.
:::
:::

:::note Polynomial division in general
In general, for polynomial division we have
$$\frac{f(x)}{d(x)} = q(x) + \frac{r(x)}{d(x)}, \qquad f, d, q, r \in \PP[x].$$
So $f(x) = q(x)d(x) + r(x)$, where either $r(x) = 0$ or $\deg r < \deg d$, which means $\deg f = \deg(qd)$.

:::

## Long Division of Polynomials

Using the previous example:

$$
\begin{array}{rrrrr}
 & & x^2 & {}+12x & {}+59 \\ \cline{2-5}
x - 5\;\big) & x^3 & {}+7x^2 & {}-x & {}+11 \\
 & -(x^3 & {}-5x^2) & & \\ \cline{2-3}
 & & 12x^2 & {}-x & {}+11 \\
 & & -(12x^2 & {}-60x) & \\ \cline{3-4}
 & & & 59x & {}+11 \\
 & & & -(59x & {}-295) \\ \cline{4-5}
 & & & & 306
\end{array}
$$

At each step:

- $x^2(x - 5) = x^3 - 5x^2$. We use $x^2$ since $x^3$ is the highest term: $(x - 5)m = x^3 - 5m \Rightarrow m = x^2$.
- $12x(x - 5) = 12x^2 - 60x$.
- $59(x - 5) = 59x - 295$.

Therefore
$$(x^3 + 7x^2 - x + 11) \div (x - 5) = x^2 + 12x + 59 + \frac{306}{x - 5}.$$

:::problem{6.6}
Divide $3x^2 + 3x - 7$ by $x + 6$.

:::solution
$$
\begin{array}{rrrr}
 & & 3x & {}-15 \\ \cline{2-4}
x + 6\;\big) & 3x^2 & {}+3x & {}-7 \\
 & -(3x^2 & {}+18x) & \\ \cline{2-3}
 & & -15x & {}-7 \\
 & & -(-15x & {}-90) \\ \cline{3-4}
 & & & 83
\end{array}
\qquad\Longrightarrow\qquad 3x - 15 + \frac{83}{x + 6} = \frac{3x^2 + 3x - 7}{x + 6}.
$$

:::
:::

:::problem{6.7}
*(The statement isn’t copied in the notes: it shows someone’s long division of $6x^4 - 7x^3 + 22x^2 - 24x - 13$ by $2x - 1$ that contains a mistake.)*

:::solution
He could tell he made a mistake since $6x^3(2x - 1) \neq 6x^4 + \cdots$.

Corrected: $3x^3(2x - 1) = 6x^4 - 3x^3$, so the first term of the quotient is $3x^3$.
$$
\begin{array}{rrrrrr}
 & & 3x^3 & {}-2x^2 & {}+10x & {}-7 \\ \cline{2-6}
2x - 1\;\big) & 6x^4 & {}-7x^3 & {}+22x^2 & {}-24x & {}-13 \\
 & -6x^4 & {}+3x^3 & & & \\ \cline{2-3}
 & & -4x^3 & {}+22x^2 & {}-24x & {}-13 \\
 & & +4x^3 & {}-2x^2 & & \\ \cline{3-4}
 & & & 20x^2 & {}-24x & {}-13 \\
 & & & -20x^2 & {}+10x & \\ \cline{4-5}
 & & & & -14x & {}-13 \\
 & & & & +14x & {}-7 \\ \cline{5-6}
 & & & & & -20
\end{array}
$$
So the answer is $3x^3 - 2x^2 + 10x - 7 - \dfrac{20}{2x - 1}$. Check:
$$\begin{aligned}
\left(3x^3 - 2x^2 + 10x - 7 - \frac{20}{2x - 1}\right)(2x - 1) &= 6x^4 - 3x^3 - 4x^3 + 2x^2 + 20x^2 - 10x - 14x + 7 - 20\\
&= 6x^4 - 7x^3 + 22x^2 - 24x - 13. \;\checkmark
\end{aligned}$$
:::
:::

:::problem{6.8}
*(The statement isn’t copied in the notes: it shows a mistaken long division of $x^4 - 3x^3 + 7x - 1$ by $x^2 - 3x + 5$.)*

:::solution
He could tell because $x(x^2 + \cdots) \neq x^4 + \cdots$. Corrected:
$$
\begin{array}{rrrrrr}
 & & & x^2 & & {}-5 \\ \cline{2-6}
x^2 - 3x + 5\;\big) & x^4 & {}-3x^3 & & {}+7x & {}-1 \\
 & -x^4 & {}+3x^3 & {}-5x^2 & & \\ \cline{2-4}
 & & & -5x^2 & {}+7x & {}-1 \\
 & & & +5x^2 & {}-15x & {}+25 \\ \cline{4-6}
 & & & & -8x & {}+24
\end{array}
$$
So
$$\frac{x^4 - 3x^3 + 7x - 1}{x^2 - 3x + 5} = x^2 - 5 + \frac{-8x + 24}{x^2 - 3x + 5} = x^2 - 5 - \frac{8x - 24}{x^2 - 3x + 5}.$$

:::
:::

:::problem{6.9}
Suppose $d(x), f(x), q_i(x), r_i(x) \in \PP[x]$. We divide $d(x)$ into $f(x)$: $f(x) = d(x)q_1(x) + r_1(x)$, where either $r_1(x) = 0$ or $\deg r_1 < \deg d$. Now also let $q_2(x), r_2(x)$ be such that $f(x) = d(x)q_2(x) + r_2(x)$, where $r_2(x) = 0$ or $\deg r_2 < \deg d$. We show that $r_1 = r_2$ and $q_1 = q_2$.

:::solution
$$\begin{aligned}
f(x) - f(x) = 0 \;&\Rightarrow\; d(x)q_1(x) + r_1(x) - \big(d(x)q_2(x) + r_2(x)\big) = 0\\
&\Rightarrow\; d(x)\big(q_1(x) - q_2(x)\big) + r_1(x) - r_2(x) = 0\\
&\Rightarrow\; d(x)\big(q_1(x) - q_2(x)\big) = r_2(x) - r_1(x).
\end{aligned}$$
Now assume $q_1(x) - q_2(x) \neq 0$. Then the left side is of degree $\geq \deg d$, but then $r_2(x) - r_1(x)$ must be such that $\deg\big(r_2(x) - r_1(x)\big) \geq \deg d$, which cannot be, since
$$\deg\big(r_2(x) - r_1(x)\big) \leq \max\big[\deg r_1(x), \deg r_2(x)\big]$$
and both $r_2(x), r_1(x)$ are such that $\deg r_i(x) < \deg d$. This contradicts $\deg\big(r_2(x) - r_1(x)\big) \geq \deg d$. Therefore $q_1(x) - q_2(x)$ cannot be nonzero, so
$$d(x)\big(q_1(x) - q_2(x)\big) = r_2(x) - r_1(x) \;\Rightarrow\; d(x)\cdot(0) = 0,$$
so $r_2(x) - r_1(x) = 0 \Rightarrow r_2(x) = r_1(x)$, and $q_1(x) - q_2(x) = 0 \Rightarrow q_1(x) = q_2(x)$.
:::
:::

### Exercises

:::exercise{6.2.1}
Divide:
(a) $x^2 - 19x + 17$ by $x + 7$;
(b) $3x^4 + 13x^2 - 9x + 122$ by $x^2 + x + 4$;
(c) $4x^3 + 2x - 1$ by $2x + 3$;
(d) $19x^5$ by $x - 1$.

:::solution
(a)
$$
\begin{array}{rrrr}
 & & x & {}-26 \\ \cline{2-4}
x + 7\;\big) & x^2 & {}-19x & {}+17 \\
 & -x^2 & {}-7x & \\ \cline{2-3}
 & & -26x & {}+17 \\
 & & +26x & {}+182 \\ \cline{3-4}
 & & & 199
\end{array}
\qquad\Longrightarrow\qquad \frac{x^2 - 19x + 17}{x + 7} = x - 26 + \frac{199}{x + 7}.
$$

(b)
$$
\begin{array}{rrrrrr}
 & & & 3x^2 & {}-3x & {}+4 \\ \cline{2-6}
x^2 + x + 4\;\big) & 3x^4 & & {}+13x^2 & {}-9x & {}+122 \\
 & -3x^4 & {}-3x^3 & {}-12x^2 & & \\ \cline{2-4}
 & & -3x^3 & {}+x^2 & {}-9x & {}+122 \\
 & & +3x^3 & {}+3x^2 & {}+12x & \\ \cline{3-5}
 & & & 4x^2 & {}+3x & {}+122 \\
 & & & -4x^2 & {}-4x & {}-16 \\ \cline{4-6}
 & & & & -x & {}+106
\end{array}
$$
$$\Longrightarrow\quad 3x^2 - 3x + 4 + \frac{-x + 106}{x^2 + x + 4} = 3x^2 - 3x + 4 - \frac{x - 106}{x^2 + x + 4}.$$

(c)
$$
\begin{array}{rrrrr}
 & & 2x^2 & {}-3x & {}+\tfrac{11}{2} \\ \cline{2-5}
2x + 3\;\big) & 4x^3 & & {}+2x & {}-1 \\
 & -4x^3 & {}-6x^2 & & \\ \cline{2-3}
 & & -6x^2 & {}+2x & {}-1 \\
 & & +6x^2 & {}+9x & \\ \cline{3-4}
 & & & 11x & {}-1 \\
 & & & -11x & {}-\tfrac{33}{2} \\ \cline{4-5}
 & & & & -\tfrac{35}{2}
\end{array}
\qquad\Longrightarrow\qquad 2x^2 - 3x + \frac{11}{2} - \frac{35}{2(2x + 3)}.
$$

(d)
$$
\begin{array}{rrrrrrr}
 & & 19x^4 & {}+19x^3 & {}+19x^2 & {}+19x & {}+19 \\ \cline{2-7}
x - 1\;\big) & 19x^5 & & & & & \\
 & -19x^5 & {}+19x^4 & & & & \\ \cline{2-3}
 & & 19x^4 & & & & \\
 & & -19x^4 & {}+19x^3 & & & \\ \cline{3-4}
 & & & 19x^3 & & & \\
 & & & -19x^3 & {}+19x^2 & & \\ \cline{4-5}
 & & & & 19x^2 & & \\
 & & & & -19x^2 & {}+19x & \\ \cline{5-6}
 & & & & & 19x & \\
 & & & & & -19x & {}+19 \\ \cline{6-7}
 & & & & & & 19
\end{array}
$$
$$\Longrightarrow\quad 19x^4 + 19x^3 + 19x^2 + 19x + 19 + \frac{19}{x - 1}.$$

:::
:::

:::exercise{6.2.2}
Find $c$ such that $r = 0$ for $\dfrac{x^3 + cx^2 + 4x - 21}{x - 3}$.

:::solution
$$
\begin{array}{rrrrr}
 & & x^2 & {}+x & {}+7 \\ \cline{2-5}
x - 3\;\big) & x^3 & {}+cx^2 & {}+4x & {}-21 \\
 & -(x^3 & {}-3x^2) & & \\ \cline{2-3}
 & & (3 + c)x^2 & {}+4x & {}-21 \\
 & & -(1x^2 & {}-3x) & \\ \cline{3-4}
 & & & 7x & {}-21 \\
 & & & -(7x & {}-21) \\ \cline{4-5}
 & & & & 0
\end{array}
$$
After the first step the $x^2$ coefficient is $3 + c$; taking $3 + c = 1$, the next quotient term is $x$, and what is left, $7x - 21 = 7(x - 3)$, divides exactly, so $r = 0$. So
$$\boxed{c = -2}.$$
:::
:::

:::exercise{6.2.3}
Divide $x^3 + 3x^2 + ax + 13$ by $x^2 + 3x - 2$, and find $a$.

:::solution
$$
\begin{array}{rrrrr}
 & & & x & \\ \cline{2-5}
x^2 + 3x - 2\;\big) & x^3 & {}+3x^2 & {}+ax & {}+13 \\
 & -x^3 & {}-3x^2 & {}+2x & \\ \cline{2-4}
 & & & (a + 2)x & {}+13
\end{array}
$$
Since $(a + 2)x + 13$ has degree less than $\deg(x^2 + 3x - 2) = 2$, the division stops here: the remainder is $(a + 2)x + 13$. For no $x$ term to be left in the remainder, we need $\boxed{a = -2}$, and then the remainder is the constant $13$.

:::
:::

## Synthetic Division on $\PP[x]$

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

:::problem{6.10}
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

:::problem{6.11}
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

:::problem{6.12}
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

### Exercises

:::exercise{6.3.1}
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

:::exercise{6.3.2}
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

:::exercise{6.3.4}
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

:::exercise{6.3.5}
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

:::exercise{6.3.6}
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

:::exercise{6.3.7}
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

## Remainder Theorem

:::problem{6.13}
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

:::problem{6.14}
Prove the remainder theorem.

:::solution
Suppose $q(x)$ and $r(x)$ are the quotient and remainder, respectively, when the polynomial $f(x)$ is divided by $x - a$, $a \in \RR$.

Note that $\deg r(x) < \deg(x - a) = 1$, therefore $\deg r(x) = 0$ (or $r = 0$). Note too that
$$\frac{f(x)}{x - a} = q(x) + \frac{r(x)}{x - a} \iff f(x) = (x - a)q(x) + r(x).$$
Ah! So now it is clear to see that when $x = a$ (the zero of $x - a$) the term $(x - a)q(x)$ is $0$. Thus $f(a) = r(a)$. Since $\deg r(x) = 0$, $r$ is a constant, so $r(a)$ is that constant. Thus the remainder when the polynomial $f(x)$ is divided by $x - a$ is $r = f(a)$.
:::
:::

:::problem{6.15}
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

:::problem{6.16}
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

:::problem{6.17}
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

:::problem{6.18}
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

:::problem{6.19}
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

:::exercise{6.4.1}
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

:::exercise{6.4.2}
$\dfrac{y^2 + my + 2}{y - 1} = f_1(y) + \dfrac{R_1}{y - 1}$ and $\dfrac{y^2 + my + 2}{y + 1} = f_2(y) + \dfrac{R_2}{y + 1}$, with $R_1 = R_2$. Find $m$.

:::solution
$$\begin{aligned}
P(-1) &= 1 - m + 2 = 3 - m,\\
P(1) &= 1 + m + 2 = 3 + m.
\end{aligned}$$
$3 - m = 3 + m$, so $0 = 2m$, and $m = 0$.
:::
:::

:::exercise{6.4.3}
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

:::exercise{6.4.4}
$\dfrac{f(x)}{d(x)} = q(x) + \dfrac{r(x)}{d(x)}$. Show that if $x = a$ is a root of $d(x)$, then $r(a) = f(a)$.

:::solution
So if $x = a$ is a root of $d(x)$, setting $x = a$ in $f(x) = q(x)d(x) + r(x)$ gives
$$f(a) = q(a)d(a) + r(a) = q(a)\cdot 0 + r(a) \;\Rightarrow\; f(a) = r(a).$$

:::
:::

:::exercise{6.4.5}
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

:::problem{6.37}
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

:::problem{6.36}
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

:::problem{6.35}
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
