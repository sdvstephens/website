The graph of $\dfrac{x^2 - 1}{x - 1}$ is a straight line with a single point punched out; the graph of
$\dfrac{x}{x - 1}$ instead rockets to infinity beside $x = 1$ and flattens toward the level $y = 1$
far away. Same kind of formula, wildly different behavior. What in the algebra decides between a
harmless *hole* and a runaway *wall* — and what sets the far-off level a graph settles toward?

## Discovery

1. Write a rational function as $R = \dfrac{P}{Q}$ in **lowest terms** (numerator and denominator
   share no common factor). At a real number $c$ with $Q(c) = 0$ but $P(c) \ne 0$, consider inputs
   creeping toward $c$: the numerator stays near $P(c) \ne 0$ while the denominator shrinks to $0$.
   What happens to $|R(x)|$, and what feature does the graph grow there?
2. Suppose instead $P$ and $Q$ share a factor $(x - c)$. Cancel it to get a reduced function $\tilde R$
   that agrees with $R$ everywhere both are defined. At $x = c$, is the *original* $R$ defined? What
   does the graph do at that one input, and what are its coordinates (use $\tilde R(c)$)?
3. For behavior as $x \to \pm\infty$, use polynomial division to write $R = S(x) + \dfrac{\text{rem}}{Q(x)}$
   with $\deg(\text{rem}) \lt \deg Q$. Compare $\deg P$ to $\deg Q$ in the three cases $\deg P \lt \deg
   Q$, $\deg P = \deg Q$, $\deg P = \deg Q + 1$. In each, what does $R$ approach for large $|x|$, and
   what is $S(x)$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $R = \dfrac{P}{Q}$ be a rational function.

- **Reduce to lowest terms first.** After cancelling every common factor:
  - a real zero $c$ of the (reduced) denominator gives a **vertical asymptote** $x = c$, where
    $|R(x)| \to \infty$;
  - a factor $(x - c)$ cancelled from both $P$ and $Q$ gives a **hole** (removable point) at
    $\big(c, \tilde R(c)\big)$, where $\tilde R$ is the reduced function — $R$ itself is undefined
    there.
- **End behavior**, via division $R = S(x) + \dfrac{\text{rem}}{Q}$:
  - $\deg P \lt \deg Q$: **horizontal asymptote** $y = 0$;
  - $\deg P = \deg Q$: **horizontal asymptote** $y = \dfrac{\text{lead}(P)}{\text{lead}(Q)}$;
  - $\deg P = \deg Q + 1$: **slant (oblique) asymptote** $y = S(x)$, a line;
  - $\deg P \gt \deg Q + 1$: no linear asymptote (polynomial-like growth $S(x)$).

### Proof

Assume $R = P/Q$ in lowest terms.

*Vertical asymptotes.* Let $Q(c) = 0$, $P(c) \ne 0$. Since $Q$ is a polynomial, $Q(x) = (x-c)^m
Q_1(x)$ with $Q_1(c) \ne 0$ and $m \ge 1$. Near $c$, $|P(x)|$ stays above some $\delta \gt 0$ and
$|Q_1(x)|$ stays below some $M$, while $|x - c|^m \to 0$; hence
$|R(x)| = \dfrac{|P(x)|}{|x-c|^m |Q_1(x)|} \ge \dfrac{\delta}{M\,|x-c|^m} \to \infty$ as $x \to c$. So
the line $x = c$ is a vertical asymptote. (Lowest terms guarantees $P(c) \ne 0$, so no cancellation
rescues the blow-up.)

*Holes.* If $(x - c)$ divided both $P$ and $Q$, write $P = (x-c)P_1$, $Q = (x-c)Q_1$. For $x \ne c$,
$R(x) = \dfrac{P_1(x)}{Q_1(x)} = \tilde R(x)$, so the graphs of $R$ and $\tilde R$ coincide off $c$;
but $R(c)$ is undefined (division by $Q(c) = 0$) while $\tilde R(c) = P_1(c)/Q_1(c)$ exists whenever
$Q_1(c) \ne 0$. Thus the graph is that of $\tilde R$ with the single point $\big(c, \tilde R(c)\big)$
removed — a hole.

*End behavior.* Division gives $R(x) = S(x) + \dfrac{r(x)}{Q(x)}$ with $\deg r \lt \deg Q = d$. Write
$r(x)/Q(x)$; for $|x|$ large its magnitude is at most $\dfrac{C|x|^{d-1}}{c_0|x|^{d}} = \dfrac{C}{c_0
|x|} \to 0$ (bounding numerator above and the leading behavior of $Q$ below). Hence $R(x) - S(x) \to
0$, so $R$ approaches $S$. If $\deg P \lt \deg Q$ then $S = 0$ (horizontal asymptote $y = 0$); if
$\deg P = \deg Q$ then $S$ is the constant $\text{lead}(P)/\text{lead}(Q)$; if $\deg P = \deg Q + 1$
then $S$ is linear, a slant asymptote. $\blacksquare$

### Worked Instance

Resolve the Hook. $\dfrac{x^2 - 1}{x - 1} = \dfrac{(x-1)(x+1)}{x-1} = x + 1$ for $x \ne 1$: the shared
factor cancels, so there is a **hole** at $(1, 2)$ and no asymptote — a line with one point missing.
By contrast $\dfrac{x}{x-1}$ is already in lowest terms; the denominator vanishes at $x = 1$ with
$P(1) = 1 \ne 0$, a **vertical asymptote** $x = 1$. Division gives $\dfrac{x}{x-1} = 1 + \dfrac{1}{x-1}$,
so as $|x| \to \infty$ the remainder term dies and $R \to 1$: **horizontal asymptote** $y = 1$.

A slant case: $\dfrac{x^2 + 1}{x} = x + \dfrac1x$. Vertical asymptote $x = 0$; and $x + \tfrac1x \to x$
for large $|x|$, so the **slant asymptote** is $y = x$.

### Pitfalls

- **Reduce before reading vertical asymptotes.** A denominator zero that *also* zeros the numerator is
  a hole, not a wall. Cancel common factors first, then inspect the reduced denominator.
- **A hole's height uses the reduced function**, $\tilde R(c)$, not the plugged-in original (which is
  undefined). For $\tfrac{x^2-1}{x-1}$ the hole is at $y = 1 + 1 = 2$.
- **Horizontal asymptotes can be crossed.** Unlike a vertical asymptote, the graph may touch or cross
  its horizontal/slant asymptote at finite $x$; the asymptote governs only the far-away trend.
- **Equal degrees give the ratio of leading coefficients**, not $1$ and not $0$: for
  $\tfrac{2x^2+1}{x^2-x}$ the horizontal asymptote is $y = 2$.
- **Degree gap $\ge 2$ has no line to approach** — the graph grows like the polynomial quotient $S(x)$.

:::
:::

## Connections

Rational functions are where **polynomial division** ([alg-poly-division]) pays off as *analysis*: the
quotient $S(x)$ is the end-behavior skeleton and the remainder the vanishing correction. The
domain-and-graph discipline of **[alg-function-intro]** — natural domain, forbidden inputs, the
hole in $\tfrac{x^2-9}{x-3}$ — is exactly the removable-singularity story told here systematically.
Downstream, partial fractions decompose these functions for summation and integration. Recognition
trigger: a ratio of polynomials, "find the asymptotes," "is there a hole," or end-behavior questions
as $x \to \pm\infty$.
