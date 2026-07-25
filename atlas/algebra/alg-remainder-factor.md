To find the remainder when $x^{100} - 3x + 1$ is divided by $x - 2$, you could do long division of
a hundred-degree polynomial — or you could plug in a single number and be done in one line.

## Discovery

1. Divide any polynomial $P(x)$ by the linear $x - c$. By the division algorithm for polynomials,
   $P(x) = (x - c)Q(x) + R$. Why must the remainder $R$ be a *constant* (degree $0$), not a
   polynomial in $x$?
2. In that identity, substitute $x = c$. The term $(x - c)Q(x)$ does what? So what is $R$ equal to,
   in terms of $P$?
3. Now suppose $c$ happens to be a **root**, $P(c) = 0$. What does step 2 say the remainder is? And
   what does that make $x - c$ with respect to $P(x)$?
4. Test the converse: if $x - c$ divides $P(x)$ exactly (remainder $0$), what does substituting
   $x = c$ tell you about $P(c)$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Remainder Theorem.** For a polynomial $P(x)$ over a field (or commutative ring) and a constant
$c$, the remainder upon dividing $P(x)$ by $(x - c)$ is exactly $P(c)$:
$$P(x) = (x - c)Q(x) + P(c).$$
**Factor Theorem.** Consequently, $(x - c) \mid P(x)$ **if and only if** $P(c) = 0$. That is, $c$
is a root of $P$ exactly when $(x - c)$ is a factor.

### Proof

By polynomial division by the monic linear $(x - c)$, there exist a unique quotient $Q(x)$ and
remainder $R(x)$ with
$$P(x) = (x - c)\,Q(x) + R(x), \qquad \deg R \lt 1,$$
so $R(x)$ is a constant $R$. Substituting $x = c$ makes the first term $(c - c)Q(c) = 0$, leaving
$P(c) = R$. Hence the remainder equals $P(c)$, proving the Remainder Theorem. For the Factor
Theorem: $(x-c) \mid P(x)$ means the remainder is $0$, and by the Remainder Theorem the remainder
is $P(c)$; so $(x-c)\mid P(x) \iff P(c) = 0$. Both directions follow at once. $\blacksquare$

### Worked Instance

Remainder of $P(x) = x^{100} - 3x + 1$ on division by $x - 2$: just evaluate
$$P(2) = 2^{100} - 3\cdot 2 + 1 = 2^{100} - 5.$$
No long division needed. As a factoring example: is $x - 1$ a factor of $x^5 - 4x^2 + 3x$? Compute
$P(1) = 1 - 4 + 3 = 0$, so **yes**, $x - 1$ divides it. Dividing out gives $x^5 - 4x^2 + 3x =
x(x-1)(x^3 + x^2 + x - 3)$, and testing $x = 1$ again in the cubic ($1 + 1 + 1 - 3 = 0$) peels off
another factor $(x - 1)$.

### Pitfalls

- The divisor must be $(x - c)$; to divide by $(x + c)$, use root $c = -c$, i.e. evaluate at
  $x = -c$. Sign slips here are common.
- For a divisor with leading coefficient, e.g. $(ax - b)$, the relevant root is $x = b/a$:
  $P(b/a)$ is the remainder (after accounting for the leading coefficient if you want the quotient
  monic).
- The Factor Theorem detects *whether* $c$ is a root but not its **multiplicity**; a repeated root
  requires checking $P'(c) = 0$ as well.

:::
:::

## Connections

Prereqs: none beyond polynomial division. This is the root—factor dictionary that everything
downstream depends on: the Rational Root Theorem (which candidate $c$ to test), the Conjugate Root
Theorem (roots come in pairs), Lagrange interpolation, finite differences, functional equations,
and Descartes' rule all build on it. Recognition trigger: "find the remainder mod a linear," or
"show $x - c$ is a factor," or "one root is known — reduce the degree."
