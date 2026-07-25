To solve $\dfrac{x - 1}{x + 2} \ge 0$ it is tempting to "multiply both sides by $x + 2$" and be done.
But $x + 2$ is sometimes positive and sometimes negative, and multiplying an inequality by a negative
number flips it. How do you solve an inequality when you cannot even tell which way the sign of your
own multiplier points?

## Discovery

1. Multiplying an inequality by a quantity of unknown sign is illegal — it may or may not flip the
   inequality. Instead, treat $\dfrac{x - 1}{x + 2}$ as a single quantity and ask directly: a fraction
   is positive when its numerator and denominator have the *same* sign, negative when they *differ*.
   Find the two special values of $x$ where the numerator is $0$ and where the denominator is $0$, and
   mark them on a number line.
2. These marked points cut the line into open intervals. On each interval, pick any convenient test
   number and determine the sign of $x - 1$ and of $x + 2$ separately, then the sign of their quotient.
   Record a sign for each interval. Why is one sign per interval enough — that is, why can the sign of
   the quotient not change *within* an interval that contains none of the marked points?
3. Now assemble the solution to $\dfrac{x-1}{x+2} \ge 0$. Decide, at each marked point, whether it
   should be *included* or *excluded*, treating the numerator-zero and the denominator-zero
   differently. What distinguishes the two kinds of marked point when the inequality is "$\ge$"
   rather than strict?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Sign-chart method for rational inequalities.** To solve an inequality of the form
$\dfrac{P(x)}{Q(x)} \gtrless 0$ (with $\gtrless$ one of $\lt, \le, \gt, \ge$):

1. **Rearrange to one side.** Move everything to one side and combine into a single quotient
   $\dfrac{P(x)}{Q(x)}$ compared to $0$. (Never cross-multiply by a variable expression.)
2. **Critical points.** Find all zeros of $P$ and all zeros of $Q$; these are the only places the
   quotient can change sign. Mark them on a number line.
3. **Test each interval.** Between consecutive critical points the quotient has one constant sign;
   determine it by a single test value (or by counting how many factors are negative). Track sign
   flips: the quotient reverses sign across a critical point of **odd** multiplicity and keeps its sign
   across one of **even** multiplicity.
4. **Endpoints.** Include zeros of the **numerator** when the inequality is non-strict ($\le, \ge$);
   **always exclude** zeros of the **denominator** (the expression is undefined there, whatever the
   inequality).

The solution is the union of intervals whose sign matches the inequality, adjusted at the endpoints by
step 4.

### Proof

The method rests on two facts. First, the sign of a quotient of nonzero reals is the product of the
signs of numerator and denominator: $\operatorname{sign}(P/Q) = \operatorname{sign}(P)\cdot
\operatorname{sign}(Q)$ wherever $Q \ne 0$. So the quotient is positive iff $P, Q$ agree in sign and
negative iff they disagree.

Second, *constancy of sign between critical points.* Suppose $c_1 \lt c_2$ are consecutive critical
points (consecutive zeros of $P$ or $Q$, with none strictly between). On the open interval
$(c_1, c_2)$ neither $P$ nor $Q$ vanishes, so the quotient $R(x) = P(x)/Q(x)$ is defined and
continuous there. If $R$ took a positive value at some $a$ and a negative value at some $b$ in
$(c_1, c_2)$, then by the Intermediate Value Theorem $R$ would equal $0$ somewhere between $a$ and $b$
— forcing $P = 0$ there — contradicting that no critical point lies strictly inside $(c_1, c_2)$. Hence
$R$ has one constant sign on each such interval, which a single test value reveals.

Across a critical point $c$ where a factor $(x - c)^m$ appears (in $P$ or $Q$), that factor flips sign
iff $m$ is odd (as in the graphing/multiplicity analysis), so the whole quotient flips sign at $c$ iff
$c$ has odd multiplicity and keeps its sign iff even. Finally, at a numerator zero $R = 0$, which
satisfies a non-strict inequality (so include it); at a denominator zero $R$ is undefined (so exclude
it always). These are exactly steps 3–4. $\blacksquare$

### Worked Instance

Solve $\dfrac{x - 1}{x + 2} \ge 0$ from the Hook. Critical points: numerator zero at $x = 1$,
denominator zero at $x = -2$. Test the three intervals:
$$x \lt -2:\ \frac{(-)}{(-)} \gt 0; \qquad -2 \lt x \lt 1:\ \frac{(-)}{(+)} \lt 0;
\qquad x \gt 1:\ \frac{(+)}{(+)} \gt 0.$$
We want $\ge 0$, so the positive intervals $(-\infty, -2)$ and $(1, \infty)$. Endpoints: include
$x = 1$ (numerator zero, and $\tfrac{0}{3} = 0 \ge 0$ holds); exclude $x = -2$ (denominator zero,
undefined). Solution:
$$x \lt -2 \quad\text{or}\quad x \ge 1, \qquad\text{i.e.}\quad (-\infty, -2) \cup [1, \infty).$$
A harder case, $\dfrac{x}{x - 3} \le 2$: rearrange to one side —
$\dfrac{x}{x-3} - 2 = \dfrac{x - 2(x - 3)}{x - 3} = \dfrac{-x + 6}{x - 3} \le 0$. Critical points
$x = 6$ (numerator) and $x = 3$ (denominator). Signs of $\tfrac{-x+6}{x-3}$: for $x \lt 3$,
$\tfrac{(+)}{(-)} \lt 0$; for $3 \lt x \lt 6$, $\tfrac{(+)}{(+)} \gt 0$; for $x \gt 6$,
$\tfrac{(-)}{(+)} \lt 0$. Want $\le 0$: intervals $(-\infty, 3)$ and $[6, \infty)$, including $6$
(numerator zero) and excluding $3$. Solution $(-\infty, 3) \cup [6, \infty)$.

### Pitfalls

- **Never cross-multiply by a variable expression.** Multiplying $\dfrac{x-1}{x+2} \ge 0$ by $x + 2$
  is invalid because $x + 2$ can be negative and flip the inequality — the whole reason the method
  exists. Always move to one side and compare to $0$.
- **Denominator zeros are always excluded**, regardless of $\lt/\le$; the expression is undefined
  there. Only *numerator* zeros can be included, and only for non-strict inequalities.
- **Rearrange before charting.** For $\dfrac{x}{x-3} \le 2$ you must subtract $2$ and re-combine;
  charting $\dfrac{x}{x-3}$ against $2$ directly loses the critical point at $x = 6$.
- **Multiplicity controls sign flips.** A repeated factor $(x - c)^2$ does *not* flip the sign across
  $c$; treating every critical point as a flip mislabels intervals.
- **Watch strictness at numerator zeros only.** Switching between $\lt$ and $\le$ changes whether
  numerator zeros are in or out; it never affects denominator zeros.

:::
:::

## Connections

This extends the sign-chart logic of **quadratic inequalities** ([alg-quadratic-inequalities]) to
quotients, where the new wrinkle is that denominator zeros are excluded rather than included, and it
leans on the structure of **rational functions** ([alg-rational-functions]) — their zeros and poles are
exactly the critical points. The same continuity-plus-IVT argument governs polynomial sign charts.
Recognition trigger: an inequality with a variable in a denominator, or any "$\ge 0$ / $\le 0$"
comparison of a fraction — resist cross-multiplying and chart the sign instead.

## History

The systematic study of where an expression is positive or negative rests on the Intermediate Value
Theorem, which Bernard Bolzano (1817) and Augustin-Louis Cauchy (1820s) established rigorously, and on
the closely related theory of counting real roots that Jacques Charles François Sturm developed in
1829. The "sign chart" or "table of signs" itself is not a named theorem but a pedagogical bookkeeping
device, standardized in twentieth-century analysis and precalculus teaching (it is especially central
in the French *tableau de signes* tradition). Its power is that it replaces the dangerous move of
multiplying by an expression of unknown sign with a safe, mechanical procedure grounded in continuity.
The rule "exclude the poles" simply records that a rational function is undefined where its denominator
vanishes — a fact as old as the notion of division itself.
