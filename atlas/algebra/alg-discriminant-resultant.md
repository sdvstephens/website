When does $x^2 + bx + c$ have a **repeated** root — without solving for the root? The answer,
$b^2 - 4c = 0$, is a single polynomial in the coefficients. There is one such quantity for every
degree, and a cousin that detects when *two different* polynomials share a root.

## Discovery

1. A monic quadratic $x^2 - (r_1 + r_2)x + r_1 r_2$ has a double root exactly when $r_1 = r_2$,
   i.e. when $(r_1 - r_2)^2 = 0$. Expand $(r_1 - r_2)^2$ and rewrite it using $s = r_1 + r_2$ and
   $p = r_1 r_2$. Now use Vieta ($s = -b$, $p = c$) to express it in the coefficients $b, c$.
2. For a cubic with roots $r_1, r_2, r_3$, what single product of squared root-differences vanishes
   exactly when *some* two roots coincide? Write it as a product over pairs.
3. Two polynomials $P$ and $Q$ share a common root iff they have a common factor. If $P(x) =
   a\prod(x - r_i)$ and $Q(x) = b\prod(x - s_j)$, form a product over all pairs $(i,j)$ that is
   zero exactly when some $r_i = s_j$. What product of differences $r_i - s_j$ does the job?
4. The discriminant of $P$ should be expressible via $P$ and its derivative $P'$ (whose roots are
   the critical points). Why should "$P$ and $P'$ share a root" be equivalent to "$P$ has a
   repeated root"? (Recall multiplicity and the Factor Theorem.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a polynomial $P(x) = a_n\prod_{i=1}^{n}(x - r_i)$, the **discriminant** is
$$\Delta(P) = a_n^{2n-2}\prod_{1 \le i \lt j \le n}(r_i - r_j)^2,$$
which vanishes **iff** $P$ has a repeated root. For two polynomials $P(x) = a_n\prod_i(x - r_i)$
and $Q(x) = b_m\prod_j(x - s_j)$, the **resultant** is
$$\operatorname{Res}(P, Q) = a_n^{m} b_m^{n}\prod_{i,j}(r_i - s_j) = a_n^m \prod_i Q(r_i) = (-1)^{nm} b_m^n \prod_j P(s_j),$$
which vanishes **iff** $P$ and $Q$ have a common root. The two are linked by $\Delta(P) =
\dfrac{(-1)^{n(n-1)/2}}{a_n}\operatorname{Res}(P, P')$. Both are polynomials in the coefficients
(computable without finding roots, e.g. via the Sylvester determinant). For the quadratic
$ax^2 + bx + c$, $\Delta = b^2 - 4ac$.

### Proof

**Resultant equals $a_n^m\prod_i Q(r_i)$.** Substitute the factorization $Q(x) = b_m\prod_j(x -
s_j)$ into $\prod_i Q(r_i)$:
$$a_n^m \prod_i Q(r_i) = a_n^m \prod_i b_m\prod_j (r_i - s_j) = a_n^m b_m^{n}\prod_{i,j}(r_i - s_j),$$
since the product over $i$ contributes $b_m$ once per root $r_i$ (there are $n$ of them). This is
$\operatorname{Res}(P,Q)$ by definition, and the symmetry $\prod_{i,j}(r_i - s_j) = (-1)^{nm}
\prod_{i,j}(s_j - r_i)$ gives the alternate form. It is $0$ iff some factor $r_i - s_j = 0$, i.e.
$P$ and $Q$ share a root. Being a symmetric polynomial in the $r_i$ and in the $s_j$ separately, by
the fundamental theorem of symmetric polynomials it is a polynomial in the elementary symmetric
functions of each — hence (via Vieta) a polynomial in the coefficients of $P$ and $Q$.

**Discriminant detects repeated roots.** $\Delta(P) = a_n^{2n-2}\prod_{i\lt j}(r_i - r_j)^2$ is
$0$ iff $r_i = r_j$ for some $i \ne j$, i.e. iff $P$ has a repeated root. To connect with $P'$: if
$r$ is a root of multiplicity $\ge 2$, write $P(x) = (x - r)^2 H(x)$; then $P'(x) = 2(x-r)H(x) +
(x-r)^2 H'(x) = (x-r)\big[2H(x) + (x-r)H'(x)\big]$, so $P'(r) = 0$ — $P$ and $P'$ share the root
$r$. Conversely a simple root $r$ (multiplicity $1$) has $P(x) = (x-r)G(x)$ with $G(r)\ne 0$, so
$P'(r) = G(r) \ne 0$. Thus $P$ has a repeated root iff $\gcd(P, P')$ is nonconstant iff
$\operatorname{Res}(P, P') = 0$, matching $\Delta(P) = 0$; comparing leading factors gives
$\Delta(P) = (-1)^{n(n-1)/2}\operatorname{Res}(P,P')/a_n$. $\blacksquare$

### Worked Instance

Quadratic $ax^2 + bx + c$ with roots $r_1, r_2$: by Vieta $r_1 + r_2 = -b/a$, $r_1 r_2 = c/a$. Then
$$(r_1 - r_2)^2 = (r_1 + r_2)^2 - 4r_1 r_2 = \frac{b^2}{a^2} - \frac{4c}{a} = \frac{b^2 - 4ac}{a^2},$$
so $\Delta = a^{2n-2}(r_1 - r_2)^2 = a^{2}\cdot\dfrac{b^2 - 4ac}{a^2} = b^2 - 4ac$ — the familiar
discriminant, recovered from roots. Common-root example: do $P = x^2 - 3x + 2$ and $Q = x^2 - 1$
share a root? Compute $\operatorname{Res}(P,Q) = \prod_i Q(r_i)$ over roots $r_i = 1, 2$ of $P$
(here $a_n = 1$): $Q(1)\cdot Q(2) = (1 - 1)(4 - 1) = 0\cdot 3 = 0$. So **yes** — indeed $x = 1$ is
common.

### Pitfalls

- The discriminant carries the power $a_n^{2n-2}$ of the leading coefficient; forgetting it makes
  it non-polynomial in the coefficients for non-monic $P$.
- Sign/normalization conventions vary between sources (some define $\Delta = \prod(r_i - r_j)^2$
  without $a_n$, or absorb a sign). State your convention; the *vanishing* condition is
  convention-independent.
- Resultant is **not** symmetric in $P, Q$ up to sign only: $\operatorname{Res}(P,Q) = (-1)^{nm}
  \operatorname{Res}(Q,P)$ — keep track of that factor.

:::
:::

## Connections

Prereqs: Vieta's formulas (to turn root-difference products into coefficient expressions). The
discriminant/resultant let you eliminate a variable (resultants underlie polynomial system
solving), detect repeated roots (calculus, differential equations), and compute in number theory
(discriminants of number fields). They anticipate the Sylvester matrix and the Vandermonde
determinant. Recognition trigger: "repeated root?", "common root?", or "eliminate a variable
between two polynomial equations."
