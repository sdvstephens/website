The equation $x^2 - x - 6 = 0$ has two neat solutions, but the inequality $x^2 - x - 6 \gt 0$ answers
with *two separated rays*, $x \lt -2$ or $x \gt 3$ — a gap in the middle where the expression dips
negative. Why does the solution set fracture, and how do the factors tell you exactly where the
expression is positive and where it is negative, without testing endless points?

## Discovery

1. Factor $x^2 - x - 6 = (x-3)(x+2)$. A product of two numbers is positive exactly when the two share
   a sign, and negative when they differ. Determine the set of $x$ on which $x - 3$ is positive
   (versus negative), the same for $x + 2$, and combine to say where the product is positive.
2. Build a **sign line**: mark the two roots $-2$ and $3$, which cut the number line into three
   intervals. In each interval, record the sign of $x + 2$, the sign of $x - 3$, and hence the sign
   of their product. Read off the solution of $\gt 0$ and, separately, of $\lt 0$.
3. Generalize to a product $(x - r_1)(x - r_2)\cdots(x - r_k)$ with distinct real roots
   $r_1 \lt \cdots \lt r_k$. Argue that the product keeps one sign on each interval between consecutive
   roots, and describe how the sign changes (or not) as $x$ crosses a root. Then examine a *repeated*
   factor $(x - r)^2$: does the product's sign flip as $x$ passes $r$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

To solve a factored polynomial or quadratic inequality:

1. **Move everything to one side** so it reads (expression) $\gtrless 0$, and **factor** into real
   linear (and irreducible-quadratic) factors.
2. The real roots are the **boundary points**; they partition the number line into open intervals, and
   the expression has a **constant sign on each interval** (it can change sign only at a root).
3. **Determine each interval's sign** by testing one point, or by *alternation*: across a simple
   (odd-multiplicity) root the sign **flips**; across an even-multiplicity root such as $(x-r)^2$ it
   does **not**.
4. **Read off** the intervals of the desired sign, then include or exclude each boundary point
   according to strict ($\lt, \gt$) versus non-strict ($\le, \ge$).

For a quadratic $ax^2 + bx + c$ with $a \ne 0$: this matches the parabola picture — if $a \gt 0$ the
expression is negative *between* the roots and positive outside; if $a \lt 0$ the reverse.

### Proof

*Constant sign on root-free intervals.* Write the (real) factorization $P(x) = a\prod_{i}(x - r_i)^{m_i}$.
On an open interval $I$ containing no root, each factor $x - r_i$ has constant sign (it is positive for
$x \gt r_i$, negative for $x \lt r_i$, and never $0$ on $I$), so each power $(x - r_i)^{m_i}$ has
constant sign, and their product with the constant $a$ has constant sign throughout $I$. Thus $P$
cannot change sign except possibly at a root — the roots are the only sign-change candidates.

*Alternation.* Compare two adjacent intervals sharing the root $r_j$. Crossing $r_j$ flips the sign of
the single factor $(x - r_j)$ (from negative to positive), while every other factor $x - r_i$
($i \ne j$) keeps its sign near $r_j$ (it is not zero there). Hence the sign of $(x - r_j)^{m_j}$
changes by $(-1)^{m_j}$: if $m_j$ is **odd** the factor — and so $P$ — reverses sign; if $m_j$ is
**even**, $(x - r_j)^{m_j} \ge 0$ on both sides and $P$ keeps its sign. This proves the flip/no-flip
rule and, for distinct simple roots, the strict alternation of signs across the line.

*Parabola link.* For $ax^2 + bx + c = a(x - r_1)(x - r_2)$ with $r_1 \lt r_2$: on $(r_1, r_2)$ the
factors $(x - r_1) \gt 0$ and $(x - r_2) \lt 0$ give product $\lt 0$, so $P$ has the sign of $-a$
there and the sign of $+a$ outside — exactly "opposite $a$ between the roots." $\blacksquare$

### Worked Instance

Solve $x^2 - x - 6 \gt 0$. Factor: $(x-3)(x+2) \gt 0$, roots $-2, 3$. Sign line:

| interval | $x+2$ | $x-3$ | product |
|---|---|---|---|
| $x \lt -2$ | $-$ | $-$ | $+$ |
| $-2 \lt x \lt 3$ | $+$ | $-$ | $-$ |
| $x \gt 3$ | $+$ | $+$ | $+$ |

The product is positive on $x \lt -2$ and $x \gt 3$, so the solution is $x \lt -2$ or $x \gt 3$
(open, since strict) — resolving the Hook.

A non-strict, repeated-root case: solve $(x - 1)^2 (x + 2) \le 0$. Roots $1$ (double) and $-2$
(simple). For $x \lt -2$: $(+)(-) \lt 0$; for $-2 \lt x \lt 1$: $(+)(+) \gt 0$; for $x \gt 1$:
$(+)(+) \gt 0$ — no flip at the double root $1$. So the expression is $\le 0$ on $x \le -2$
(including $-2$ where it equals $0$) together with the isolated point $x = 1$ (where $(x-1)^2 = 0$).
Solution: $x \le -2$ or $x = 1$.

### Pitfalls

- **Never divide the inequality by $x$** (or any factor of unknown sign): it may be negative, flipping
  the inequality, and it discards the case that factor is $0$. Move everything to one side and factor
  instead.
- **Flip the inequality only when multiplying/dividing by a negative** number — the one rule inherited
  from [alg-linear-inequality-elem].
- **Even powers do not flip the sign.** A factor $(x - r)^2$ touches zero without changing sign; treat
  its root as a possible isolated solution (for $\le, \ge$), not a sign change.
- **Endpoints: strict excludes, non-strict includes** the roots. $\gt 0$ omits the roots; $\ge 0$
  keeps them.
- **Mind the sign of $a$.** For $a \lt 0$ (a downward parabola) the "between the roots" region is where
  the expression is positive; don't quote the $a \gt 0$ pattern blindly.
- **Irreducible quadratic factors keep a constant sign** (that of $a$) and never contribute a boundary
  — factor them out and ignore for the sign line.

:::
:::

## Connections

This upgrades **factoring quadratics** ([alg-factoring-quadratics]) and the sign-flip rule of
**linear inequalities** ([alg-linear-inequality-elem]) into a method for whole factored expressions,
and it is the elementary engine behind rational-inequality problems (same sign line, with denominator
roots as excluded boundaries) and the discriminant's "always positive/negative" tests. The alternation
argument recurs wherever a product's sign matters — Descartes' rule, root separation, and the trivial
inequality's "square is nonnegative." Recognition trigger: a polynomial or rational expression compared
to $0$, "for which $x$ is this positive," or any inequality you can factor and read off a sign line.
