You know a cubic has roots summing to $6$, pairwise-summing to $11$, multiplying to $6$. What is
$r_1^3 + r_2^3 + r_3^3$? And $r_1^4 + r_2^4 + r_3^4$? There is a machine that grinds out every one
of these power sums from the same three numbers, forever.

## Discovery

1. Let $p_k = r_1^k + \cdots + r_n^k$ (the $k$-th **power sum**) and let $e_k$ be the elementary
   symmetric polynomials. Compute $p_1$ directly in terms of $e_1$.
2. Expand $e_1 p_1 = (\sum r_i)(\sum r_j)$. It contains the "diagonal" terms $\sum r_i^2$ and the
   "off-diagonal" cross terms. Express those cross terms using $e_2$, and thereby write $p_2$ using
   $e_1$ and $e_2$.
3. Try to get $p_3$. Multiply and combine $e_1 p_2$, $e_2 p_1$, and $e_3$ so that the unwanted
   mixed monomials cancel and only $\sum r_i^3$ survives. What linear combination works?
4. Look at the three relations for $p_1, p_2, p_3$ side by side. There is one recurrence pattern
   with alternating signs and a special final term for each $k$. Conjecture the general rule.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $p_k = \sum_i r_i^k$ and let $e_0 = 1, e_1, e_2, \dots$ be the elementary symmetric
polynomials of $r_1, \dots, r_n$ (set $e_k = 0$ for $k \gt n$). Then for $k \ge 1$,
$$p_k = e_1 p_{k-1} - e_2 p_{k-2} + \cdots + (-1)^{k-2} e_{k-1} p_1 + (-1)^{k-1} k\, e_k,$$
i.e. $\displaystyle p_k = \sum_{i=1}^{k-1} (-1)^{i-1} e_i\, p_{k-i} + (-1)^{k-1} k\, e_k$. For
$k \gt n$ the final term vanishes and the recurrence is purely
$p_k = \sum_{i=1}^{n} (-1)^{i-1} e_i\, p_{k-i}$. Combined with Vieta (which supplies the $e_k$ from
a polynomial's coefficients), this computes all power sums of the roots.

### Proof

Let $P(x) = \prod_{i=1}^{n}(x - r_i) = \sum_{j=0}^{n} (-1)^j e_j\, x^{n-j}$ (Vieta, monic). Its
logarithmic derivative gives
$$\frac{P'(x)}{P(x)} = \sum_{i=1}^{n} \frac{1}{x - r_i}.$$
For $|x| \gt \max_i |r_i|$, expand each term as a geometric series:
$$\frac{1}{x - r_i} = \frac{1}{x}\cdot\frac{1}{1 - r_i/x} = \sum_{m \ge 0} \frac{r_i^m}{x^{m+1}}.$$
Summing over $i$, $\displaystyle \frac{P'(x)}{P(x)} = \sum_{m \ge 0} \frac{p_m}{x^{m+1}}$ with
$p_0 = n$. Hence $P'(x) = P(x)\sum_{m\ge 0} p_m x^{-m-1}$. Write $P(x) = \sum_{j\ge 0}(-1)^j e_j
x^{n-j}$ and $P'(x) = \sum_{j\ge 0}(-1)^j (n-j) e_j x^{n-j-1}$. Equate the coefficient of
$x^{n-k-1}$ on both sides. On the left it is $(-1)^k (n-k) e_k$. On the right, the product
contributes $\sum_{j=0}^{k} (-1)^j e_j\, p_{k-j}$ (taking $x^{n-j}$ from $P$ and $x^{-(k-j)-1}$ from
the power-sum series). Thus
$$(-1)^k (n-k) e_k = \sum_{j=0}^{k} (-1)^j e_j\, p_{k-j} = (-1)^k k e_k + \sum_{j=0}^{k-1}(-1)^j e_j p_{k-j},$$
using $p_0 = n$ in the $j=k$ term, which contributes $(-1)^k e_k\cdot n$. Isolating: moving that
term over, $(-1)^k(n-k)e_k - (-1)^k n e_k = -(-1)^k k e_k = \sum_{j=1}^{k-1}(-1)^j e_j p_{k-j} +
(-1)^0 e_0 p_k$. Since $e_0 = 1$, solving for $p_k$ yields
$$p_k = -\sum_{j=1}^{k-1}(-1)^j e_j p_{k-j} + (-1)^{k-1} k e_k = \sum_{j=1}^{k-1}(-1)^{j-1} e_j p_{k-j} + (-1)^{k-1} k e_k,$$
which is exactly the claimed identity (and for $k \gt n$, $e_k = 0$ kills the last term).
$\blacksquare$

### Worked Instance

Roots of $x^3 - 6x^2 + 11x - 6$: Vieta gives $e_1 = 6, e_2 = 11, e_3 = 6$. Then
$$p_1 = e_1 = 6,$$
$$p_2 = e_1 p_1 - 2e_2 = 6\cdot 6 - 2\cdot 11 = 14,$$
$$p_3 = e_1 p_2 - e_2 p_1 + 3e_3 = 6\cdot 14 - 11\cdot 6 + 3\cdot 6 = 84 - 66 + 18 = 36.$$
The roots are $1,2,3$, and indeed $1^3 + 2^3 + 3^3 = 36$. Push once more (now $k = 4 \gt n = 3$, so
no final term): $p_4 = e_1 p_3 - e_2 p_2 + e_3 p_1 = 6\cdot 36 - 11\cdot 14 + 6\cdot 6 = 216 - 154
+ 36 = 98 = 1 + 16 + 81$.

### Pitfalls

- The special last term $(-1)^{k-1} k\, e_k$ carries the factor $k$ and only appears while
  $k \le n$; forgetting the $k$ (writing just $e_k$) is the most common error.
- Signs alternate: $+e_1 p_{k-1} - e_2 p_{k-2} + \cdots$. Keep the $(-1)^{i-1}$ straight.
- $p_0 = n$ (the number of variables), not $1$; this matters if you extend the recurrence downward.

:::
:::

## Connections

Prereqs: Vieta's formulas (source of the $e_k$). Newton's identities convert between two bases of
symmetric functions — power sums $p_k$ and elementary symmetric $e_k$ — and feed directly into
trace/determinant-as-symmetric-functions of eigenvalues in linear algebra. Recognition trigger: a
problem asking for $\sum r_i^k$ for specific $k$, or a system giving you $\sum r_i, \sum r_i^2,
\dots$ and wanting the polynomial.
