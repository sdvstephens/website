The expression $a^3 + b^3 + c^3 - 3abc$ vanishes the instant you set $a + b + c = 0$ — try
$a = 1, b = -1, c = 0$ and it collapses to $0$. That is suspicious: an expression that dies whenever
$a + b + c = 0$ ought to *contain* $a + b + c$ as a factor. Can the one-variable "root implies factor"
theorem be promoted to several variables, so that a vanishing condition hands you a factor for free?

## Discovery

Recall the single-variable Factor Theorem: $(x - r)$ divides a polynomial $P(x)$ exactly when
$P(r) = 0$. Its proof is just polynomial division: dividing $P(x)$ by $x - r$ leaves a constant
remainder equal to $P(r)$.

1. Consider $P(a, b) = a^2 - b^2$, viewed as a polynomial *in the single variable $a$*, with $b$
   treated as a constant coefficient. What value of $a$ (an expression in $b$) makes $P = 0$? Apply
   the single-variable factor theorem, with "$r$" now being that expression in $b$, to name a linear
   factor of $P$.
2. Generalize the mechanism. Let $P(x, y_1, \dots, y_k)$ be a polynomial, and let $g(y_1,\dots,y_k)$
   be some expression in the *other* variables. Divide $P$, as a polynomial in $x$ alone, by the
   monic linear divisor $x - g$. What is the degree of the remainder in $x$, and therefore what kind
   of object (in the remaining variables) is it? Express the remainder as a substitution into $P$.
3. Suppose that substituting $x = g$ makes $P$ vanish *identically* — as the zero polynomial in the
   remaining variables. Using step 2, what does that force the remainder to be, and hence what factor
   of $P$ have you found? Test the idea on the Hook by choosing which variable to solve for so that
   "$a + b + c = 0$" becomes "one variable $=$ an expression in the others."

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Multivariable Factor Theorem.** Let $P$ be a polynomial in variables $x, y_1, \dots, y_k$ with
coefficients in a field (or any integral domain), regarded as a polynomial in $x$ whose coefficients
are polynomials in $y_1, \dots, y_k$. Let $g(y_1, \dots, y_k)$ be a polynomial in the other variables.
Then
$$(x - g)\ \text{divides}\ P \quad\Longleftrightarrow\quad P\big(g, y_1, \dots, y_k\big) = 0
\ \text{as a polynomial in } y_1, \dots, y_k.$$
Equivalently, if substituting $x = g$ makes $P$ identically zero, then $x - g$ is a factor of $P$. More
symmetrically: if a polynomial $P$ in several variables vanishes whenever a linear relation
$L = x - g = 0$ holds identically, then $L \mid P$. This is the exact several-variable analogue of
"root $\Rightarrow$ factor," and it is the standard first move for factoring symmetric expressions:
spot a vanishing condition, extract the corresponding factor.

### Proof

Work in the ring $R = \FF[y_1, \dots, y_k]$ (polynomials in the other variables over the field), and
view $P$ as a polynomial in $x$ with coefficients in $R$: $P \in R[x]$. The divisor $x - g$ is
**monic** in $x$ (leading coefficient $1 \in R$), so the division algorithm applies over the ring
$R[x]$ even though $R$ is not a field — monic divisors permit division with remainder in any commutative
ring. Thus there exist $Q \in R[x]$ and a remainder $S \in R[x]$ with
$$P = (x - g)\,Q + S, \qquad \deg_x S \lt \deg_x(x - g) = 1,$$
so $\deg_x S \le 0$: the remainder $S$ is free of $x$, i.e. $S \in R$ is a polynomial in the other
variables alone.

Substitute $x = g$ into the identity. The factor $(x - g)$ becomes $0$, so
$$P(g, y_1, \dots, y_k) = (g - g)\,Q + S = S.$$
Hence $S = P(g, y_1, \dots, y_k)$, the result of the substitution.

$(\Leftarrow)$ If $P(g, \dots) = 0$ identically, then $S = 0$, so $P = (x - g)Q$ and $(x - g) \mid P$.
$(\Rightarrow)$ If $(x - g) \mid P$, write $P = (x - g)T$; substituting $x = g$ gives $P(g, \dots) = 0$.
Both directions hold, proving the equivalence. $\blacksquare$

### Worked Instance

Factor $P = a^3 + b^3 + c^3 - 3abc$ from the Hook. Solve the vanishing condition $a + b + c = 0$ for
one variable, say $a = -(b + c) =: g(b, c)$, and view $P$ as a polynomial in $a$. Substitute $a = g$:
$$P(g, b, c) = (-(b+c))^3 + b^3 + c^3 - 3(-(b+c))bc = -(b+c)^3 + b^3 + c^3 + 3bc(b + c).$$
Expand $(b + c)^3 = b^3 + 3b^2c + 3bc^2 + c^3$, so
$$P(g, b, c) = -b^3 - 3b^2c - 3bc^2 - c^3 + b^3 + c^3 + 3b^2c + 3bc^2 = 0.$$
The substitution kills $P$ identically, so by the theorem $a - g = a + b + c$ divides $P$. Dividing (or
matching degrees: $P$ is degree $3$, the factor degree $1$, leaving a symmetric quadratic) yields the
classic identity
$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca).$$
Sanity check at $a = b = c$: the second factor is $a^2+b^2+c^2-ab-bc-ca = 3a^2 - 3a^2 = 0$, matching
that $P = 3a^3 - 3a^3 = 0$ there as well.

### Pitfalls

- **The vanishing must be identical, not at one point.** $P(g, \dots) = 0$ has to hold as a polynomial
  identity in the remaining variables — for *all* values — not merely at a single numerical choice.
  One lucky zero does not give a factor.
- **Solve the condition for a variable first.** A relation like $a + b + c = 0$ must be turned into
  "$a = -(b+c)$" so that the divisor is genuinely $x - g$ with $g$ in the *other* variables; then
  substitute for that one variable.
- **The divisor must be monic in the chosen variable.** The proof uses that $x - g$ has leading
  coefficient $1$ in $x$, which is what lets division work over the coefficient *ring*. A factor like
  $2a - b$ should be normalized (or the variable chosen so the factor is monic).
- **Degree bookkeeping across variables.** After extracting $x - g$, the cofactor lives in all the
  variables; do not assume it is univariate. Match total degrees to find it.
- **Integral domain needed for "no other roots" style conclusions.** The factor extraction itself is
  fine over any commutative ring for a monic divisor, but cancelling factors later uses that the
  coefficient domain has no zero divisors.

:::
:::

## Connections

This is the **Factor Theorem** ([alg-remainder-factor]) lifted from one variable to many by running the
division algorithm over a polynomial coefficient ring, and it is the workhorse behind the
**sum/difference-of-powers factorizations** ([alg-power-factorizations]) and countless symmetric-function
identities. It is the reason a symmetric expression that vanishes on $a = b$, or on $a + b + c = 0$,
"must" contain $(a - b)$ or $(a + b + c)$. Recognition trigger: a multivariable (often symmetric)
expression asked to be factored — hunt for a substitution that makes it vanish identically, and read off
the factor.

## History

The single-variable factor theorem is a corollary of the remainder theorem attributed to René Descartes
in *La Géométrie* (1637), who used "root implies factor" to analyze equations. Extending division and
factorization to polynomials in several variables was central to eighteenth- and nineteenth-century
*elimination theory*, the study of when systems of polynomial equations have common solutions, advanced
by Étienne Bézout (whose 1779 work on elimination bears his name) and later by Leopold Kronecker. The
crisp statement that a monic linear factor $x - g$ can be divided out over a coefficient *ring* — not
just a field — is a fact of modern commutative algebra, clarified in the structural program of Emmy
Noether in the early twentieth century. As a problem-solving tool, though, the theorem is older folklore
among competition and classical algebraists, who long used "it vanishes when $a = b$, so $(a - b)$ is a
factor" to tame symmetric expressions long before it was formalized.
