Given a polynomial's values at just three points — say $P(1) = 2$, $P(2) = 3$, $P(4) = 12$ — you
can reconstruct the *entire* degree-$2$ polynomial, and there is exactly one that fits. No solving
a linear system: a single closed formula writes it down.

## Discovery

1. You want a polynomial that equals $1$ at the point $x_0$ and $0$ at all the other chosen points
   $x_1, \dots, x_n$. Using the Factor Theorem, build a polynomial that **vanishes** at every
   $x_j$ with $j \ne 0$. What is the simplest such product?
2. Your product from step 1 is zero at the right places but probably not $1$ at $x_0$. Divide by a
   constant to fix its value at $x_0$ to be exactly $1$. What constant?
3. You now have "indicator" polynomials $\ell_i(x)$, one for each node, with $\ell_i(x_j) = 1$ if
   $i = j$ and $0$ otherwise. How do you combine them with the target values $y_i = P(x_i)$ to get
   a polynomial hitting every $y_i$?
4. Two polynomials of degree $\le n$ agreeing at $n+1$ points — consider their difference. Using
   the Factor Theorem, how many roots does the difference have, and what forces it to be zero?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Given $n+1$ distinct nodes $x_0, \dots, x_n$ and target values $y_0, \dots, y_n$, there is a
**unique** polynomial $P$ of degree $\le n$ with $P(x_i) = y_i$ for all $i$, namely
$$P(x) = \sum_{i=0}^{n} y_i\, \ell_i(x), \qquad \ell_i(x) = \prod_{\substack{0 \le j \le n \\ j \ne i}} \frac{x - x_j}{x_i - x_j}.$$
Each **Lagrange basis polynomial** $\ell_i$ satisfies $\ell_i(x_j) = \delta_{ij}$ (namely $1$ if
$i = j$, else $0$). Uniqueness follows from the Factor Theorem.

### Proof

**The formula interpolates.** Fix $i$. The numerator of $\ell_i$ is $\prod_{j \ne i}(x - x_j)$,
which vanishes at every node $x_j$ with $j \ne i$, so $\ell_i(x_j) = 0$ for $j \ne i$. At $x = x_i$
the numerator equals $\prod_{j\ne i}(x_i - x_j)$, which is exactly the denominator, so
$\ell_i(x_i) = 1$. Hence $\ell_i(x_j) = \delta_{ij}$, and
$$P(x_j) = \sum_{i=0}^{n} y_i\, \ell_i(x_j) = \sum_{i=0}^{n} y_i\,\delta_{ij} = y_j.$$
Each $\ell_i$ has degree $n$ (a product of $n$ linear factors), so $\deg P \le n$.

**Uniqueness.** Suppose $P$ and $\tilde P$ both have degree $\le n$ and agree at all $n+1$ nodes.
Then $D = P - \tilde P$ has degree $\le n$ and $D(x_i) = 0$ for $n+1$ distinct $x_i$. By the Factor
Theorem, $(x - x_0)(x - x_1)\cdots(x - x_n) \mid D$; but that divisor has degree $n+1 \gt \deg D$,
which is impossible unless $D \equiv 0$. Hence $P = \tilde P$. $\blacksquare$

### Worked Instance

Fit a polynomial through $(1, 2), (2, 3), (4, 12)$. With $x_0=1, x_1=2, x_2=4$:
$$\ell_0(x) = \frac{(x-2)(x-4)}{(1-2)(1-4)} = \frac{(x-2)(x-4)}{3}, \quad
\ell_1(x) = \frac{(x-1)(x-4)}{(2-1)(2-4)} = \frac{(x-1)(x-4)}{-2},$$
$$\ell_2(x) = \frac{(x-1)(x-2)}{(4-1)(4-2)} = \frac{(x-1)(x-2)}{6}.$$
So $P(x) = 2\ell_0 + 3\ell_1 + 12\ell_2$. Evaluate the combination:
$$P(x) = \frac{2}{3}(x-2)(x-4) - \frac{3}{2}(x-1)(x-4) + 2(x-1)(x-2).$$
Expanding and collecting, $P(x) = \tfrac{7}{6}x^2 - \tfrac{9}{2}x + \tfrac{16}{3}$. Check:
$P(1) = \tfrac76 - \tfrac92 + \tfrac{16}{3} = 2$, $P(2) = 3$, $P(4) = 12$.

### Pitfalls

- The nodes $x_i$ must be **distinct**, or a denominator $x_i - x_j$ is zero.
- $\deg P \le n$, not necessarily $= n$: if the data happen to lie on a lower-degree polynomial,
  the top coefficients cancel (interpolating a line through $3$ collinear points gives degree $1$).
- Getting the denominator wrong is the classic slip: it is $\prod_{j\ne i}(x_i - x_j)$, evaluated
  at the *node* $x_i$, not at $x$.

:::
:::

## Connections

Prereqs: the Factor Theorem (both to build the basis and to prove uniqueness). Lagrange
interpolation is the constructive twin of finite differences, underlies the Chinese Remainder
Theorem's polynomial analogue, error-correcting codes, and Gaussian quadrature. Recognition
trigger: "a polynomial of degree $\le n$ takes known values at $n+1$ points — find it, or find its
value elsewhere."
