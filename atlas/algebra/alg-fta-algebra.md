We invented $i$ to give $x^2 + 1$ its two missing roots. But does the invention ever stop? To root
$x^4 + 1$, or $x^7 - x + 3$, must we keep bolting on new numbers — or does $\CC$, built from a single
$i$, already contain a root of *every* polynomial you can write down?

## Discovery

Take as given the deep fact — proved with analysis, not algebra — that **every nonconstant polynomial
with complex coefficients has at least one complex root**. Build on it.

1. Let $P$ be a complex polynomial of degree $n \ge 1$. It has some root $r_1$. Use the Factor
   Theorem together with polynomial division to write $P(x) = (x - r_1)\,Q_1(x)$. What is $\deg Q_1$?
   Now if $\deg Q_1 \ge 1$, apply the given fact to $Q_1$ and repeat. After how many extractions does
   the leftover become a constant, and what shape has $P$ taken?
2. From that factored form, count the roots of $P$ (allowing a factor $x - r$ to repeat). Could a
   degree-$n$ polynomial possibly have *more* than $n$ distinct roots? Argue from the factorization.
3. Suppose now $P$ has **real** coefficients and $r$ is a *non-real* root. Show $\bar r$ is also a
   root (use $\overline{P(r)} = P(\bar r)$ for real coefficients). Multiply the two factors
   $(x - r)(x - \bar r)$ and check the result has real coefficients. What does this force the real
   factorization of $P$ to look like?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Fundamental Theorem of Algebra.** Every polynomial of degree $n \ge 1$ with complex coefficients
has a root in $\CC$; equivalently, $\CC$ is **algebraically closed**. The existence of a single root
is the analytic core, taken here as given.

**Complete factorization (consequence).** A degree-$n$ complex polynomial factors as
$$P(x) = a_n \prod_{i=1}^{n} (x - r_i), \qquad r_i \in \CC,$$
so it has exactly $n$ roots counted with multiplicity, and no more than $n$ distinct roots.

**Real factorization (consequence).** A polynomial with real coefficients factors over $\RR$ into
real linear factors and real *irreducible quadratic* factors (each $x^2 + px + q$ with
$p^2 - 4q \lt 0$), because non-real roots occur in conjugate pairs $r, \bar r$ and
$(x - r)(x - \bar r) = x^2 - 2\operatorname{Re}(r)\,x + |r|^2$ is a real quadratic.

### Proof

The existence of one complex root is assumed. Everything else is algebra.

*Complete factorization.* Induct on $n = \deg P$. For $n = 1$, $P(x) = a_1 x + a_0 = a_1(x -
(-a_0/a_1))$ already has the form. For $n \ge 1$, existence gives a root $r_1$; by the Factor Theorem
$(x - r_1) \mid P$, and polynomial division yields $P(x) = (x - r_1)Q(x)$ with $\deg Q = n - 1$ and
leading coefficient $a_n$. By the inductive hypothesis $Q(x) = a_n \prod_{i=2}^n (x - r_i)$, so
$P(x) = a_n \prod_{i=1}^n (x - r_i)$. Thus $P$ has $n$ roots with multiplicity.

*At most $n$ distinct roots.* If $c$ is any root, then $0 = P(c) = a_n\prod (c - r_i)$; since $\CC$
has no zero divisors and $a_n \ne 0$, some factor $c - r_i = 0$, i.e. $c = r_i$. So every root is one
of the $r_i$, giving at most $n$ distinct values. (In particular a nonzero polynomial of degree
$\le n$ with more than $n$ roots must be the zero polynomial.)

*Real factorization.* Let $P$ have real coefficients and suppose $r$ is a non-real root. Because the
coefficients are real, conjugation commutes with evaluation: $P(\bar r) = \overline{P(r)} = \bar 0 =
0$, so $\bar r$ is a root, and $\bar r \ne r$ since $r \notin \RR$. Their combined factor is
$$(x - r)(x - \bar r) = x^2 - (r + \bar r)x + r\bar r = x^2 - 2\operatorname{Re}(r)\,x + |r|^2,$$
which has real coefficients; its discriminant $4\operatorname{Re}(r)^2 - 4|r|^2 = -4\operatorname{Im}(r)^2
\lt 0$, so it is irreducible over $\RR$. Grouping every non-real conjugate pair this way and keeping
the real roots as linear factors expresses $P$ over $\RR$ as claimed. $\blacksquare$

### Worked Instance

Factor $x^4 + 1$. Over $\CC$: the roots solve $x^4 = -1 = e^{i\pi}$, giving the four values
$x = e^{i(\pi + 2k\pi)/4}$ for $k = 0,1,2,3$, i.e.
$$\tfrac{\sqrt2}{2}(1 + i),\ \ \tfrac{\sqrt2}{2}(-1 + i),\ \ \tfrac{\sqrt2}{2}(-1 - i),\ \
\tfrac{\sqrt2}{2}(1 - i),$$
two conjugate pairs. Over $\RR$: pair each root with its conjugate. The pair
$\tfrac{\sqrt2}{2}(1 \pm i)$ has real part $\tfrac{\sqrt2}{2}$ and modulus $1$, giving the quadratic
$x^2 - \sqrt2\,x + 1$; the other pair gives $x^2 + \sqrt2\,x + 1$. Hence
$$x^4 + 1 = (x^2 - \sqrt2\,x + 1)(x^2 + \sqrt2\,x + 1),$$
which multiplies back to $x^4 + (2 - 2)x^2 + 1 = x^4 + 1$. ✓ So $\CC$ needed no further enlargement:
one $i$ sufficed.

### Pitfalls

- **"$n$ roots" counts multiplicity.** $x^2 - 2x + 1 = (x-1)^2$ has one distinct root of multiplicity
  two; it still contributes two factors.
- **FTA delivers *complex* roots, not real ones.** $x^2 + 1$ has no real root; its two roots are
  $\pm i$. "Has a root" always means over $\CC$.
- **Existence, not a formula.** FTA guarantees roots exist; it gives no radical formula, and indeed
  none exists in general for degree $\ge 5$. Locating roots still needs other tools.
- **Irreducible over $\RR$ means the quadratic factor stays**: $x^2 + px + q$ with $p^2 - 4q \lt 0$
  does not split further over the reals, only over $\CC$.

:::
:::

## Connections

This is the capstone of the polynomial strand: it uses **complex numbers** ([alg-complex-numbers]) as
the arena where roots always exist, and it turns the **root-locating machinery**
([alg-poly-roots-bounds], and the division and factor theorems beneath it) into a clean structural
statement. The conjugate-pair argument is the same phenomenon named in the Conjugate Root Theorem; the
irreducible-quadratic picture underlies partial fractions and real integration. Recognition trigger:
"factor completely over $\CC$ (or $\RR$)," "how many roots does this have," or any claim that a
degree-$n$ identity holding at $n+1$ points must hold identically.
