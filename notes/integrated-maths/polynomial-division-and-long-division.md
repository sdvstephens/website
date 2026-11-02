---
course: integrated-maths
chapter: 10
section: 10.4
title: Polynomial Division and Long Division
---

Dividing one polynomial by another gives a quotient and a remainder, as with integers. This page builds the process up from matching coefficients and then sets it out as long division.

:::problem
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

:::problem
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

## Long division of polynomials

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

:::problem
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

:::problem
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

:::problem
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

:::problem
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

## Exercises

:::exercise
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

:::exercise
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

:::exercise
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
