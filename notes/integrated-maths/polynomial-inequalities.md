---
course: integrated-maths
chapter: 10
section: 10.11
title: Polynomial Inequalities
---

To solve a polynomial inequality, find the roots, factor, and check the sign of each factor on the intervals between the roots.

:::problem
Solve $x^3 + 5x^2 - 16x - 80 \le 0$.

:::solution
$80 = 2^4 \cdot 5 \implies \pm(1, 2, 4, 8, 16, 5, 10, 20, 40, 80)$ are the possible rational roots.

$(x^3 + 5x^2 - 16x) \le 80$. Given $-80 < 0$, and $xyz = 80$ for the roots $x, y, z$, either $2$ roots are negative and $1$ positive, or **all** roots are positive.

Let’s try $f(5) = 2(125) - 160 = 90$, and $-5$: $f(-5) = -125 + 125 + 80 - 80 = 0$. YAY!
$$\begin{array}{r|rrrr}
-5 & 1 & 5 & -16 & -80 \\
   &   & -5 & 0 & 80 \\ \hline
   & 1 & 0 & -16 & 0
\end{array} \qquad x^2 - 16 = (x + 4)(x - 4).$$
So $x^3 + 5x^2 - 16x - 80 = (x + 4)(x - 4)(x + 5)$.

| $x \in$ | $x - 4$ | $x + 4$ | $x + 5$ | $f(x)$ | |
|---|---|---|---|---|---|
| $> 4$ | $+$ | $+$ | $+$ | $+$ | |
| $(-4, 4)$ | $-$ | $+$ | $+$ | $-$ | $\to -4 < x < 4$ |
| $(-5, -4)$ | $-$ | $-$ | $+$ | $+$ | |
| $< -5$ | $-$ | $-$ | $-$ | $-$ | $\to x < -5$ |

$$x \in (-\infty, -5] \cup [-4, 4]. \ \checkmark$$
:::
:::

:::problem
Find all $r$ such that $12r^4 - 16r^3 > 41r^2 - 69r + 18$.

:::solution
$$f(r) = 12r^4 - 16r^3 - 41r^2 + 69r - 18 > 0.$$
Let’s first find the roots ($f = 0$), trying integers first.

$a_0$: $\pm\{1, 2, 3, 6, 9, 18\}$; $a_n$: $\pm\{1, 2, 3, 4, 6, 12\}$.

$f(1)$: $12 + 69 = 81$ and $-(16 + 41 + 18) = -75$, so $f(1) \ne 0$. So $f(1) = +$ and $f(0) = -$, so $\exists\, r_i \in (0, 1)$.

Try $\frac12, \frac13, \frac14, \frac16$:
$$\begin{array}{r|rrrrr}
\tfrac13 & 12 & -16 & -41 & 69 & -18 \\
 & & 4 & -4 & -15 & 18 \\ \hline
 & 12 & -12 & -45 & 54 & 0
\end{array}$$
$$\left(x - \tfrac13\right)(12x^3 - 12x^2 - 45x + 54) = 3\left(x - \tfrac13\right)(4x^3 - 4x^2 - 15x + 18).$$

Candidates: $\pm\{1, 2, 4\}$ under $\pm\{1, 2, 3, 6, 9, 18\}$, i.e. $\frac14, \frac34, \frac32, \frac94, \frac92$:
$$\begin{array}{r|rrrr}
\tfrac32 & 4 & -4 & -15 & 18 \\
 & & 6 & 3 & -18 \\ \hline
 & 4 & 2 & -12 & 0
\end{array}$$
$$4x^2 + 2x - 12 \to 2(2x^2 + x - 6), \qquad x = \frac{-1 \pm 7}{4} \to \begin{cases} -\frac84 = -2, \\[2pt] \frac64 = \frac32. \end{cases}$$

So we need
$$12\left(x - \tfrac13\right)\left(x - \tfrac32\right)^2(x + 2) > 0.$$

Roots $\frac13$, $\frac32$, $-2$:

| interval | sign | |
|---|---|---|
| $-\infty < x < -2$ | $+$ | ✓ |
| $-2 < x < \frac13$ | $-$ | |
| $\frac13 < x < \frac32$ | $+$ | ✓ |
| $\frac32 < x < \infty$ | $+$ | ✓ |

$$x \in (-\infty, -2) \cup \left(\tfrac13, \tfrac32\right) \cup \left(\tfrac32, \infty\right).$$
:::
:::

## Exercises

:::exercise
**(a)** $t^3 + 10t^2 + 17t > 28$

:::solution
$$\begin{array}{r|rrrr}
1 & 1 & 10 & 17 & -28 \\
  &   & 1 & 11 & 28 \\ \hline
  & 1 & 11 & 28 & 0
\end{array} \to t^2 + 11t + 28,$$
so the inequality is $(t - 1)(t + 7)(t + 4) > 0$.

| $t$ | $t - 1$ | $t + 7$ | $t + 4$ | $f(t)$ | |
|---|---|---|---|---|---|
| $> 1$ | $+$ | $+$ | $+$ | $+$ | $\checkmark$ |
| $-4 < t < 1$ | $-$ | $+$ | $+$ | $-$ | $\times$ |
| $-7 < t < -4$ | $-$ | $+$ | $-$ | $+$ | $\checkmark$ |
| $< -7$ | $-$ | $-$ | $-$ | $-$ | $\times$ |

$$t \in (-7, -4) \cup (1, \infty). \ \checkmark$$
:::

**(b)** $r^2(6r + 12 - r^2) \le 5(14r + 15)$

:::solution
$$\frac{r^2(6r + 12 - r^2)}{14r + 15} \le 5 \quad \hookrightarrow \quad \frac{6r^3 + 12r^2 - r^4}{14\left(r + \frac{15}{14}\right)} \le 5 \quad \to \quad 6r^3 + 12r^2 - r^4 - 5(14r + 15) \le 0,$$

where $-5(14r + 15) = -70r - 75$:
$$-r^4 + 6r^3 + 12r^2 - 70r - 75, \quad \text{so } r \in \pm\{1, 3, 5, 15, 25, 75\}.$$

$f(5) = 0$, so
$$\begin{array}{r|rrrrr}
5 & -1 & 6 & 12 & -70 & -75 \\
  &    & -5 & 5 & 85 & 75 \\ \hline
  & -1 & 1 & 17 & 15 & 0
\end{array} \implies -r^3 + r^2 + 17r + 15.$$
$f(-1) = 0$, so
$$\begin{array}{r|rrrr}
-1 & -1 & 1 & 17 & 15 \\
   &    & 1 & -2 & -15 \\ \hline
   & -1 & 2 & 15 & 0
\end{array} \implies -r^2 + 2r + 15 = -(r^2 - 2r - 15) \hookrightarrow -(r - 5)(r + 3).$$

$$f(r) = -(r - 5)^2(r + 1)(r + 3), \qquad \text{roots: } 5, 5, -1, -3.$$
Testing signs: between $-3$ and $-1$, $+$; below $-3$, $-$; at $6$, $-$. So
$$r \in (-\infty, -3] \cup [-1, \infty).$$
:::

**(c)** $r^4 + r^3 + 5r^2 - 13r - 18 \le 0$

:::solution
Possible roots: $\pm\{1, 2, 3, 6, 9, 18\}$. $f(2) = 0$, so
$$\begin{array}{r|rrrrr}
2 & 1 & 1 & 5 & -13 & -18 \\
  &   & 2 & 6 & 22 & 18 \\ \hline
  & 1 & 3 & 11 & 9 & 0
\end{array} \implies
\begin{array}{r|rrrr}
-1 & 1 & 3 & 11 & 9 \\
   &   & -1 & -2 & -9 \\ \hline
   & 1 & 2 & 9 & 0
\end{array}$$
and $r^2 + 2r + 9$ has roots
$$\frac{-2 \pm \sqrt{4 - 4(9)}}{2} \to \frac{-2 \pm 4\sqrt{2}\,i}{2} = -1 \pm 2\sqrt{2}\,i,$$
so
$$f(r) = (r - 2)(r + 1)\big(r - (-1 + 2\sqrt{2}\,i)\big)\big(r - (-1 - 2\sqrt{2}\,i)\big) \hookrightarrow r \in [-1, 2].$$

:::
:::
