You are told a cubic has roots $2$, $-1$, and $3$ and passes through the point $(0, 12)$. There is
exactly one such cubic — no guessing, no solving a system. Given only *where a polynomial vanishes*,
can you write the polynomial down directly?

## Discovery

Suppose you want a polynomial whose roots are prescribed numbers $r_1, r_2, \dots, r_k$ (a list, so
repeats are allowed).

1. The Factor Theorem says $r$ is a root of a polynomial exactly when a certain linear expression
   divides it. Write that linear expression for a single prescribed root $r_1$, then for each $r_i$ in
   turn. Form the smallest-degree polynomial you can guarantee is divisible by *all* of them at once,
   and state its degree.
2. Take your product from step 1 and expand it for the concrete list $r_1 = 2, r_2 = -1, r_3 = 3$.
   Read the constant term and the coefficient of $x^2$ off the expansion, and compare them to
   $r_1 r_2 r_3$ and to $r_1 + r_2 + r_3$. What relationship do you see between the coefficients of
   the built polynomial and symmetric combinations of the chosen roots?
3. The polynomial in step 1 is monic. Multiply it by a nonzero constant $a$. Does scaling by $a$
   change *which* numbers are roots? Given one extra condition — that the polynomial take a specified
   value at some non-root point, say $P(0) = 12$ — how many choices of $a$ survive, and how do you
   find it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Construction from roots.** Given numbers $r_1, \dots, r_n$ (with multiplicity, i.e. repeats
allowed) and any nonzero constant $a$, the polynomial
$$P(x) = a\,(x - r_1)(x - r_2)\cdots(x - r_n)$$
has degree $n$, leading coefficient $a$, and its roots are exactly $r_1, \dots, r_n$ with the stated
multiplicities. Conversely, every degree-$n$ polynomial with those roots and that leading coefficient
equals this one, so the polynomial is **unique once its roots and one more datum** (the leading
coefficient, or one value $P(x_0)$ at a non-root) are fixed. Expanding the product recovers **Vieta's
relations** ([alg-vieta]): up to the factor $a$, the coefficient of $x^{n-k}$ is
$(-1)^k$ times the $k$-th elementary symmetric function of the roots. For real coefficients, non-real
roots must be supplied in conjugate pairs, since $(x - z)(x - \bar z) = x^2 - 2\operatorname{Re}(z)x
+ |z|^2$ is real.

### Proof

*The construction has the claimed roots.* By the degree-of-a-product rule, $\deg P = n$ and the
leading coefficient is $a \cdot 1 \cdots 1 = a$. For each $i$, substituting $x = r_i$ makes the factor
$(x - r_i)$ vanish, so $P(r_i) = 0$; thus every $r_i$ is a root. If a number $s$ is not in the list,
then every factor $(s - r_i) \ne 0$ and $a \ne 0$, so $P(s) \ne 0$ (a product of nonzero reals — or
complexes — is nonzero); hence the roots are *exactly* the listed numbers, with multiplicity equal to
how often each appears.

*Uniqueness.* Suppose $P$ and $\tilde P$ both have degree $n$, leading coefficient $a$, and the same
root list. By the Factor Theorem each $(x - r_i)$ divides $P$; since these linear factors are pairwise
associate-free (repeats accounted for by multiplicity), their product $(x - r_1)\cdots(x - r_n)$
divides $P$, and it has the same degree $n$ as $P$, so $P = c\,(x - r_1)\cdots(x - r_n)$ for a
constant $c$; matching leading coefficients gives $c = a$. The identical argument gives
$\tilde P = a\,(x - r_1)\cdots(x - r_n) = P$.

*Vieta.* Expanding $\prod_{i=1}^n (x - r_i) = \sum_{k=0}^n (-1)^k e_k(r_1,\dots,r_n)\,x^{n-k}$, where
$e_k$ is the $k$-th elementary symmetric polynomial, is exactly the statement of Vieta's formulas;
multiplying through by $a$ scales every coefficient. $\blacksquare$

### Worked Instance

Build the Hook's cubic: roots $2, -1, 3$ and $P(0) = 12$. Start monic:
$$(x - 2)(x + 1)(x - 3) = (x - 2)(x^2 - 2x - 3) = x^3 - 4x^2 + x + 6.$$
This is the same polynomial met in the integer-root node, with $P(0) = 6$. To force $P(0) = 12$,
scale by $a$: we need $a \cdot 6 = 12$, so $a = 2$, giving
$$P(x) = 2(x - 2)(x + 1)(x - 3) = 2x^3 - 8x^2 + 2x + 12.$$
Check: $P(0) = 12$ ✓, and the roots are unchanged at $2, -1, 3$ because scaling never moves a zero.
As a Vieta cross-check on the monic version, the sum of roots $2 + (-1) + 3 = 4$ equals
$-(\text{coeff of } x^2) = 4$, and the product $2\cdot(-1)\cdot 3 = -6$ equals
$(-1)^3 \cdot (\text{constant}) = -6$. ✓

### Pitfalls

- **A root list alone does not fix the polynomial** — only its roots *and* leading coefficient (or one
  value) do. Infinitely many polynomials share the roots $2, -1, 3$; they differ by the scalar $a$.
- **Sign of the factor.** A root at $r = -1$ contributes $(x - (-1)) = (x + 1)$, not $(x - 1)$; the
  factor subtracts the root.
- **Multiplicity via repeated factors.** A double root at $r$ needs $(x - r)^2$; writing $(x - r)$
  once produces a simple root and the wrong polynomial.
- **Real coefficients force conjugate pairs.** To keep coefficients real you cannot include $2 + i$
  without also including $2 - i$; otherwise the expanded polynomial has non-real coefficients.
- **Scaling preserves roots, shifts values.** Multiplying by $a$ leaves every root fixed but rescales
  $P(x_0)$; use the extra condition to solve $a\cdot(\text{monic value}) = \text{target}$.

:::
:::

## Connections

This is the Factor Theorem ([alg-remainder-factor]) run *forwards* — instead of extracting a factor
from a known polynomial, you assemble a polynomial from prescribed factors — and expanding the product
is precisely **Vieta's formulas** ([alg-vieta]) read as a construction. The one-extra-condition idea
generalizes: fixing a polynomial by its values at several points is **Lagrange interpolation**
([alg-lagrange-interpolation]). Recognition trigger: "find the polynomial with roots …," "the monic
polynomial whose zeros are …," or any problem that hands you roots and asks for coefficients.

## History

The link between a polynomial's roots and its coefficients was first stated in generality by Albert
Girard in his *Invention nouvelle en l'algèbre* (1629), who wrote down the relations now bundled under
Vieta's name — François Viète having earlier explored special cases in the 1590s. Girard also boldly
asserted that a degree-$n$ equation has $n$ roots (counting repeated and "impossible" complex ones), a
claim only fully justified once the Fundamental Theorem of Algebra was proved by Gauss in 1799.
Reading these relations backwards, to *build* a polynomial from a chosen root list, is the everyday
inverse move and is not attributed to any one person; it is simply the factor theorem applied in
reverse. The technique became indispensable in the theory of equations and later in interpolation,
where prescribing behavior at points rather than roots leads directly to the formulas of Lagrange and
Newton in the eighteenth century.
