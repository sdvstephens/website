The polynomial $x^3 - 4x^2 + x + 6$ has an integer root, and you could hunt for it by testing
$0, \pm 1, \pm 2, \pm 3, \dots$ forever. But its constant term is $6$, and it turns out you never
need to test any integer that fails to divide $6$. Why should the *last* coefficient alone fence off
where every whole-number root can hide?

## Discovery

Let $P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ have **integer** coefficients, and
suppose an **integer** $r$ satisfies $P(r) = 0$.

1. Write out the equation $P(r) = 0$ in full, then isolate the constant term $a_0$ on one side by
   itself, moving every other term to the opposite side.
2. Look at the side that now holds all the non-constant terms. Every one of them contains at least
   one factor of $r$. Pull that common factor out front, leaving a bracket. What kind of number — in
   particular, is it an integer? — sits inside that bracket, given that all the $a_k$ and $r$ are
   integers?
3. You have written $a_0$ as $r$ times an integer. Translate that single equation into a divisibility
   statement relating $r$ and $a_0$. What does it forbid about which integers $r$ can possibly be
   roots of $P$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Integer Root Theorem.** If $P(x) = a_n x^n + \cdots + a_1 x + a_0$ has integer coefficients and an
integer $r$ is a root, i.e. $P(r) = 0$, then $r \mid a_0$: every integer root divides the constant
term. (When $a_0 = 0$ the statement is vacuous — $r = 0$ is then a root and every integer divides
$0$.) Consequently the *only* candidates for integer roots are the finitely many divisors of $a_0$,
positive and negative, so an infinite search collapses to a short checklist. This is the whole-number
special case of the Rational Root Theorem ([alg-rational-root]), but it needs nothing beyond
integer divisibility to prove.

### Proof

Let $P$ have integer coefficients and let $r \in \ZZ$ satisfy $P(r) = 0$:
$$a_n r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0.$$
Isolate the constant term:
$$a_0 = -\left(a_n r^n + a_{n-1} r^{n-1} + \cdots + a_1 r\right)
= -r\left(a_n r^{n-1} + a_{n-1} r^{n-2} + \cdots + a_1\right).$$
Every $a_k$ and $r$ is an integer, so the bracket
$m := a_n r^{n-1} + a_{n-1} r^{n-2} + \cdots + a_1$ is an integer. Thus $a_0 = -r m = r(-m)$ with
$-m \in \ZZ$, which is precisely the statement $r \mid a_0$. $\blacksquare$

### Worked Instance

Return to the Hook, $P(x) = x^3 - 4x^2 + x + 6$, with $a_0 = 6$. The divisors of $6$ are
$\pm 1, \pm 2, \pm 3, \pm 6$ — eight candidates instead of infinitely many. Test them (synthetic
substitution is quickest):
$$P(1) = 1 - 4 + 1 + 6 = 4, \quad P(-1) = -1 - 4 - 1 + 6 = 0.$$
So $r = -1$ is a root, and indeed $-1 \mid 6$. Dividing out $x + 1$ gives
$P(x) = (x + 1)(x^2 - 5x + 6) = (x + 1)(x - 2)(x - 3)$, whose other roots $2, 3$ also divide $6$ —
consistent with the theorem. A non-example sharpens the point: $x^2 - x - 1$ has $a_0 = -1$, whose
only divisors are $\pm 1$; since $P(1) = -1$ and $P(-1) = 1$ are both nonzero, $P$ has **no** integer
root at all (its roots are the irrational golden ratio and its conjugate).

### Pitfalls

- **Integer coefficients are required.** The theorem assumes every $a_k \in \ZZ$. For
  $x^2 - \tfrac12 x - \tfrac12$ the reasoning breaks, even though it has the integer root $1$; clear
  denominators first.
- **It restricts, it does not guarantee.** Dividing $a_0$ is *necessary*, not sufficient: a divisor
  of $a_0$ may fail to be a root (as $P(1) = 4 \ne 0$ above). You still must test the candidates.
- **Include negative divisors.** Roots can be negative; the divisor $-1$ was the actual root in the
  worked instance. Testing only positive divisors misses half the candidates.
- **The leading coefficient is irrelevant here.** Only $a_0$ governs *integer* roots; the general
  Rational Root Theorem brings in $a_n$ for the fractional candidates.
- **$a_0 = 0$ is a special case.** Then $x$ is a factor, $r = 0$ is a root, and the divisibility
  condition is vacuous — factor out the largest power of $x$ first.

:::
:::

## Connections

This is the cheapest root-finder in the toolbox: it turns "does this polynomial have a whole-number
root?" into checking a finite list of divisors, then verifying with the Factor Theorem
([alg-remainder-factor]) or synthetic substitution ([alg-synthetic-division]). It is the tip of the
**Rational Root Theorem** ([alg-rational-root]), which extends the same isolate-and-divide idea to
candidate fractions $p/q$ with $p \mid a_0$ and $q \mid a_n$. Recognition trigger: a polynomial with
integer coefficients that you suspect factors nicely — start by listing the divisors of the constant
term.

## History

The result is the humblest member of a family of "rational root" facts that grew out of the study of
polynomial equations from the sixteenth century onward, as algebraists like Cardano and Viète learned
to search systematically for roots rather than by luck. Its natural home is the Rational Root Theorem,
which is a corollary of Gauss's Lemma on the factorization of integer polynomials, published in Carl
Friedrich Gauss's *Disquisitiones Arithmeticae* (1801). The integer case, however, requires only the
divisibility argument used above and was folklore among earlier problem-solvers well before Gauss
supplied the general machinery; no single mathematician is credibly credited with "inventing" it. Its
lasting value is pedagogical and practical: it is usually the first tool a student reaches for when
asked to factor an unfamiliar integer polynomial by hand.
