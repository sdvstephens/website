To split $\dfrac{3x + 1}{(x-1)(x+2)}$ into pieces you can sum or integrate, you *assume* it equals
$\dfrac{A}{x-1} + \dfrac{B}{x+2}$ and go hunting for $A$ and $B$. To factor $x^4 + 4$, you *assume* it
is $(x^2 + ax + b)(x^2 + cx + d)$ and solve for the letters. Both times you conjure unknown
coefficients from thin air — and both times it works. Why is guessing the *form* and solving for the
numbers a legitimate proof technique rather than a lucky trick?

## Discovery

1. Posit $x^4 + 4 = (x^2 + ax + b)(x^2 + cx + d)$. Expand the right side and collect it by powers of
   $x$. Then demand the two sides agree: equate the coefficient of $x^3$, of $x^2$, of $x^1$, and of
   $x^0$. Solve the resulting system for $a, b, c, d$ (symmetry $a = -c$ helps).
2. Posit $\dfrac{3x+1}{(x-1)(x+2)} = \dfrac{A}{x-1} + \dfrac{B}{x+2}$. Multiply through by
   $(x-1)(x+2)$ to clear denominators, obtaining a polynomial identity. Find $A, B$ two ways — by
   matching coefficients of $x$ and the constant, and by substituting the strategic values $x = 1$
   and $x = -2$. Do they agree?
3. Both methods lean on one principle: if two polynomials are *equal for all $x$*, their coefficients
   must match. State that principle, and connect it to the fact that a nonzero polynomial of degree
   $\le n$ cannot have more than $n$ roots.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Method of undetermined coefficients.** To find an expression of a *known form* — a factorization,
a partial-fraction decomposition, or any polynomial identity — write the form with literal unknown
coefficients (an *ansatz*), expand, and impose equality, either by **matching coefficients of like
powers** or by **substituting enough values of $x$**. This yields a system of equations whose
solution pins down the coefficients.

Its engine is the **Identity Theorem for polynomials**: if two polynomials of degree $\le n$ agree at
more than $n$ points (in particular, for all $x$ over an infinite field like $\RR$ or $\CC$), they are
identical — equal coefficient by coefficient. So coefficient-matching gives *necessary and sufficient*
conditions: a solution to the system exists iff the assumed form is achievable, and then it is unique.

### Proof

*Identity Theorem.* Let $f, g$ be polynomials of degree $\le n$ agreeing at $n+1$ distinct points
$x_0, \dots, x_n$. Then $h = f - g$ has degree $\le n$ and vanishes at all $n+1$ points. A nonzero
polynomial of degree $\le n$ has at most $n$ roots (its complete factorization over $\CC$ supplies at
most $n$ linear factors). Having $n+1 \gt n$ roots forces $h \equiv 0$, so $f = g$ identically; two
identical polynomials have equal coefficients in every degree. Over an infinite field, agreeing "for
all $x$" supplies more than $n$ points automatically.

*Validity of the method.* Suppose we seek an identity $L(x) = R(x; \mathbf{c})$ where $R$ depends
linearly (in the partial-fraction and identity cases) on unknown coefficients $\mathbf{c} =
(c_1, \dots, c_m)$, and both sides have degree $\le n$. By the Identity Theorem, $L = R$ as functions
iff their coefficient vectors coincide — a system of $n+1$ linear equations in $\mathbf{c}$. Solving
that linear system (the tool of [alg-linear-systems-elem]) is therefore *equivalent* to finding the
identity: consistency of the system certifies the form is attainable, and its unique solution gives
the coefficients. Substituting $n+1$ distinct values of $x$ produces an equivalent square system, by
the same theorem. (In the factoring case the system is nonlinear in $a,b,c,d$, but the same
coefficient-matching supplies necessary conditions, solved by elimination.) $\blacksquare$

### Worked Instance

*Factoring* $x^4 + 4$ (the Sophie Germain identity). Assume $x^4 + 4 = (x^2 + ax + b)(x^2 + cx + d)$.
Expanding and matching:
$$x^3:\ a + c = 0,\quad x^2:\ b + d + ac = 0,\quad x^1:\ ad + bc = 0,\quad x^0:\ bd = 4.$$
From $a + c = 0$, $c = -a$. Then $x^1$ gives $ad - ab = a(d - b) = 0$; taking $a \ne 0$ forces
$d = b$, so $bd = b^2 = 4$, $b = d = 2$. Finally $x^2$: $2 + 2 - a^2 = 0$, so $a^2 = 4$, $a = 2$
(and $c = -2$). Thus
$$x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2),$$
which multiplies back to $x^4 + (2 - 4 + 2)x^2 + 4 = x^4 + 4$. ✓

*Partial fractions.* From $\dfrac{3x+1}{(x-1)(x+2)} = \dfrac{A}{x-1} + \dfrac{B}{x+2}$, clearing
denominators gives $3x + 1 = A(x+2) + B(x-1)$. Substituting $x = 1$: $4 = 3A$, so $A = \tfrac43$.
Substituting $x = -2$: $-5 = -3B$, so $B = \tfrac53$. Matching coefficients instead: $A + B = 3$ and
$2A - B = 1$ give the same $A = \tfrac43$, $B = \tfrac53$.

### Pitfalls

- **Guess the right form.** For distinct linear factors, one constant per factor; a *repeated* factor
  $(x-c)^2$ needs $\dfrac{A}{x-c} + \dfrac{B}{(x-c)^2}$; an irreducible quadratic factor needs a *linear*
  numerator $\dfrac{Ax+B}{x^2+px+q}$. A too-simple ansatz has no solution.
- **Match the degree.** A proper partial fraction needs $\deg(\text{numerator}) \lt \deg(\text{denominator})$;
  if not, divide first ([alg-poly-division]) and decompose the remainder.
- **Enough equations.** $m$ unknowns need $m$ independent conditions; matching every power (or
  substituting enough distinct $x$) supplies them. Fewer leaves the system underdetermined.
- **The Identity Theorem needs infinitely many points** (an infinite field). Over a finite field two
  different polynomials can agree everywhere, so "match coefficients" can fail there.
- **Substitution values are a shortcut, not magic:** choosing $x$ equal to a root of a factor zeroes
  out terms, but you still need as many independent equations as unknowns.

:::
:::

## Connections

This method turns "I know the shape but not the numbers" into a solvable **linear system**
([alg-linear-systems-elem]); the coefficient-matching it formalizes is the algebraic cousin of the
bookkeeping in **polynomial division** ([alg-poly-division]), and proper form often requires dividing
first. It is the workhorse of partial fractions (hence telescoping sums and integration), of clever
factorizations (Sophie Germain, sum/difference of powers), and — under the name "ansatz" — of solving
linear recurrences and differential equations. Recognition trigger: "decompose into partial
fractions," "factor into quadratics," or any problem where the *form* of the answer is known and only
its constants are unknown.
