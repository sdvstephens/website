The matrix built from powers of $2, 3, 5$ —
$$V=\begin{pmatrix}1&1&1\\2&3&5\\4&9&25\end{pmatrix}$$
— has determinant $(3-2)(5-2)(5-3) = 1\cdot 3\cdot 2 = 6$. No cofactor arithmetic needed: the determinant is just the product of all the pairwise *gaps* between the numbers $2,3,5$. Why is a $3\times 3$ (or $n\times n$) determinant secretly a product of differences?

## Discovery

Let $x_1,\dots,x_n$ be scalars and form the **Vandermonde matrix** $V$ with $(i,j)$ entry $x_j^{\,i-1}$ (so column $j$ is $(1, x_j, x_j^2,\dots,x_j^{n-1})^{\mathsf T}$). Study $D=\det V$.

1. First, a structural observation: if two of the $x_j$ are equal, say $x_a = x_b$, what happens to $\det V$, and why? (Think about the columns.)
2. So $\det V$, viewed as a polynomial in the variables $x_1,\dots,x_n$, vanishes whenever $x_a = x_b$. By the factor theorem (for polynomials), what factor must $\det V$ therefore contain for each pair $a \lt b$? List all such factors.
3. Count the total degree of the product of all those factors $\prod_{a\lt b}(x_b - x_a)$. Separately, count the degree of $\det V$ as a polynomial (look at the Leibniz sum: each term is a product of one entry per column — what's the max total degree?). Compare.
4. Two polynomials of the same degree, one dividing the other — so they agree up to a constant. Pin the constant: find the coefficient of the "diagonal" monomial $x_2^1 x_3^2\cdots x_n^{n-1}$ (i.e. $\prod_j x_j^{j-1}$) on both sides. What is the constant?
5. Conclude the closed form for $\det V$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For the Vandermonde matrix
$$V = \begin{pmatrix} 1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ x_1^2 & x_2^2 & \cdots & x_n^2 \\ \vdots & & & \vdots \\ x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}\end{pmatrix},$$
the determinant is
$$\det V = \prod_{1 \le i \lt j \le n} (x_j - x_i).$$
In particular $\det V \neq 0$ **iff the $x_j$ are all distinct**. Consequences:
- **Polynomial interpolation is uniquely solvable:** given distinct nodes $x_1,\dots,x_n$ and any target values $y_1,\dots,y_n$, there is a unique degree-$\le n-1$ polynomial through them (the linear system for the coefficients has invertible Vandermonde matrix).
- Distinct powers/geometric data give linearly independent rows — a workhorse for showing $\{1, x, x^2,\dots\}$-type systems are non-degenerate.

### Proof

Treat $D(x_1,\dots,x_n) = \det V$ as a polynomial in the $x_j$ over $\mathbb F$ and induct on $n$; we give the clean factor-theorem argument.

**$D$ vanishes when two nodes coincide.** If $x_a = x_b$ ($a\neq b$), then columns $a$ and $b$ of $V$ are identical (both equal $(1,x_a,\dots,x_a^{n-1})^{\mathsf T}$), so $\det V = 0$ by the alternating property of the determinant.

**Factor extraction.** Regard $D$ as a polynomial in $x_b$ with the other variables as parameters. It vanishes at $x_b = x_a$, so by the factor theorem $(x_b - x_a) \mid D$ in $\mathbb F[x_1,\dots,x_n]$. Since $\mathbb F[x_1,\dots,x_n]$ is a UFD and the linear polynomials $\{x_j - x_i : i\lt j\}$ are pairwise non-associate irreducibles, their product divides $D$:
$$\prod_{i\lt j}(x_j - x_i) \ \big|\ D.$$

**Degree match.** The number of pairs is $\binom{n}{2}$, and each factor $x_j - x_i$ has degree $1$, so $\prod_{i\lt j}(x_j-x_i)$ has total degree $\binom{n}{2} = \tfrac{n(n-1)}{2}$. On the other side, expand $D$ by the Leibniz formula: each term is $\pm\prod_{i} x_{\sigma(i)}^{\,i-1}$, of degree $\sum_{i=1}^n (i-1) = 0+1+\cdots+(n-1) = \tfrac{n(n-1)}{2}$. So $D$ has total degree $\tfrac{n(n-1)}{2}$ as well. A polynomial divisible by a polynomial of equal degree is a *constant multiple* of it: $D = c\prod_{i\lt j}(x_j - x_i)$.

**Constant.** Compare the coefficient of the monomial $\prod_{j=1}^n x_j^{\,j-1} = x_1^0 x_2^1 x_3^2\cdots x_n^{n-1}$. In $\det V$, this monomial arises only from the identity permutation in the Leibniz sum (taking entry $x_j^{\,j-1}$ from column $j$, row $j$), with sign $\operatorname{sgn}(\mathrm{id})=+1$: coefficient $1$. In $\prod_{i\lt j}(x_j - x_i)$, to build $x_2^1 x_3^2\cdots x_n^{n-1}$ we must, from each factor $(x_j - x_i)$, pick the *larger*-index variable $x_j$ every time; that yields $\prod_{i\lt j} x_j = \prod_{j}x_j^{\,(\#\{i : i\lt j\})} = \prod_j x_j^{\,j-1}$ with coefficient $(+1)^{\binom n2}=1$. So $c=1$.

Therefore $D = \prod_{1\le i\lt j\le n}(x_j - x_i)$. And $D\neq 0$ iff no factor vanishes iff all $x_j$ are distinct. $\blacksquare$

### Worked Instance

Resolve the Hook with $x_1=2, x_2=3, x_3=5$:
$$\det V = \prod_{i\lt j}(x_j - x_i) = (x_2-x_1)(x_3-x_1)(x_3-x_2) = (3-2)(5-2)(5-3) = 1\cdot 3\cdot 2 = 6.$$
Cross-check by cofactors: $\det\begin{pmatrix}1&1&1\\2&3&5\\4&9&25\end{pmatrix} = 1(3\cdot25-5\cdot9) - 1(2\cdot25-5\cdot4) + 1(2\cdot9-3\cdot4) = (75-45)-(50-20)+(18-12) = 30-30+6 = 6.$ Agreement, with the product form making the *sign and structure* transparent — it is manifestly nonzero precisely because $2,3,5$ are distinct.

**Interpolation payoff:** to fit a quadratic $a + bx + cx^2$ through $(2,y_1),(3,y_2),(5,y_3)$, solve $V^{\mathsf T}\mathbf c = \mathbf y$; since $\det V = 6\neq 0$, the fit exists and is unique for *any* target values.

### Pitfalls

- **Orientation/sign of the difference.** The standard closed form is $\prod_{i\lt j}(x_j - x_i)$ (larger index minus smaller). Reversing to $(x_i - x_j)$ multiplies by $(-1)^{\binom n2}$ — a sign error for $n\ge 2$. Fix the convention.
- **Row vs. column powers.** Some texts put the powers along rows, some along columns, and some use entry $x_i^{\,j-1}$ (transposed). The determinant is the same up to the transpose invariance $\det V=\det V^{\mathsf T}$, but the *matrix* differs — state which layout you mean.
- **Distinctness is the whole point.** $\det V = 0 \iff$ two nodes coincide. If any $x_a = x_b$, interpolation through the corresponding points is ill-posed.
- **Don't confuse the Vandermonde determinant with the discriminant.** The discriminant of a polynomial with roots $x_i$ is $\prod_{i\lt j}(x_i-x_j)^2 = (\det V)^2$ — the *square*. The Vandermonde is the "square root," and it carries a sign.
- The degree-count step needs the ground ring to be an integral domain (so degrees add and the factor theorem applies); over a field this is automatic.

:::
:::

## Connections

Prereqs: determinants (the alternating/multilinear properties do all the work) and Vieta's formulas (the differences of roots and the discriminant connection). The Vandermonde determinant is the engine behind **Lagrange interpolation**, proofs that power functions are linearly independent, and the discriminant $\prod_{i\lt j}(x_i-x_j)^2$. Recognition trigger: any matrix whose columns (or rows) are successive powers of some values, any "does a unique interpolating polynomial exist" question, or any product-of-pairwise-differences that appears in a determinant.
