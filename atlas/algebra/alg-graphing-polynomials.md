The graph of $y = (x - 1)^2(x + 2)$ *touches* the $x$-axis at $x = 1$ and bounces back up, but
*crosses* straight through at $x = -2$. Same picture, two roots, two utterly different local
behaviors. What in the algebra decides whether a curve kisses the axis or slices through it?

## Discovery

Let $P$ be a polynomial with real coefficients, already factored over the reals as far as possible,
with a positive leading coefficient for now.

1. For very large positive $x$, and separately for very large negative $x$, which single term of
   $P(x) = a_n x^n + \cdots$ dwarfs all the others in size? Using only that dominant term, decide
   whether $P(x) \to +\infty$ or $-\infty$ at each far end, and notice how the answer depends on the
   parity of $n$ (even vs. odd degree). This is the **end behavior**.
2. Suppose $P(x) = (x - r)^m\,g(x)$ where $g(r) \ne 0$, so $r$ is a root of **multiplicity** $m$.
   Just to the left and just to the right of $x = r$, the factor $g$ keeps a fixed sign (it is nonzero
   and does not suddenly jump), so the sign change of $P$ is controlled entirely by $(x - r)^m$. Work
   out how $(x - r)^m$ changes sign as $x$ passes through $r$, distinguishing $m$ even from $m$ odd,
   and translate that into "crosses the axis" versus "touches and turns back."
3. Between two neighboring real roots, $P$ has no root at all, so it never reaches $0$ there. Argue
   why $P$ therefore cannot switch between positive and negative on that whole interval — hence keeps
   one constant sign — and describe how to fill in a full sign chart from the end behavior plus the
   crossing/touching data at each root.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

To sketch a real polynomial $P$ of degree $n$ with leading coefficient $a_n$:

- **End behavior** is set by the leading term $a_n x^n$. If $n$ is even, both ends go the same way
  ($+\infty$ if $a_n \gt 0$, $-\infty$ if $a_n \lt 0$). If $n$ is odd, the ends go opposite ways
  (down-left/up-right if $a_n \gt 0$, the reverse if $a_n \lt 0$).
- **Roots and multiplicity.** By the Fundamental Theorem of Algebra ([alg-fta-algebra]), $P$ has $n$
  complex roots with multiplicity; the real ones are where the graph meets the axis. At a root of
  **odd** multiplicity the graph **crosses** the axis; at a root of **even** multiplicity it
  **touches** and turns back without crossing (with an inflection-like flattening as $m$ grows).
- **Sign chart.** Between consecutive real roots $P$ keeps a constant sign; the sign flips exactly at
  odd-multiplicity roots and is preserved across even-multiplicity roots. Anchoring the chart to the
  known end behavior determines the sign on every interval.

Together these pin down the shape: where the curve is above or below the axis, how it meets each
root, and where it heads at the two extremes — enough for a faithful sketch (turning points aside,
which need calculus).

### Proof

*End behavior.* For $x \ne 0$, factor out the leading term:
$P(x) = a_n x^n\big(1 + \tfrac{a_{n-1}}{a_n}\tfrac1x + \cdots + \tfrac{a_0}{a_n}\tfrac1{x^n}\big)$.
As $|x| \to \infty$ each $1/x^k \to 0$, so the bracket $\to 1$ and $P(x)$ has the same sign and
growth as $a_n x^n$. Since $x^n \gt 0$ for all $x \ne 0$ when $n$ is even, both ends share the sign
of $a_n$; when $n$ is odd, $x^n$ flips sign with $x$, so the two ends have opposite signs.

*Local behavior at a root.* Write $P(x) = (x - r)^m g(x)$ with $g(r) \ne 0$ (possible because $r$ has
multiplicity exactly $m$). Since $g$ is a polynomial, it is continuous and $g(r) \ne 0$, so on a
small interval around $r$ the factor $g$ keeps the constant sign of $g(r)$. On that interval the sign
of $P$ equals $\operatorname{sign}\big((x-r)^m\big)\cdot\operatorname{sign}(g(r))$. Now $(x - r)^m$ is
positive on both sides of $r$ when $m$ is even (an even power is nonnegative, and nonzero for
$x \ne r$), so $P$ keeps one sign and merely touches $0$ at $r$; when $m$ is odd, $(x - r)^m$ is
negative for $x \lt r$ and positive for $x \gt r$, so $P$ changes sign — it crosses.

*Constant sign between roots.* Suppose $P$ took a positive value and a negative value at two points
$a \lt b$ lying strictly between consecutive real roots. As a polynomial, $P$ is continuous, so by the
Intermediate Value Theorem it would attain $0$ somewhere in $(a, b)$ — a real root strictly between
two *consecutive* real roots, contradicting consecutiveness. Hence $P$ has one constant sign on each
such interval, and the sign flips precisely at the odd-multiplicity roots identified above.
$\blacksquare$

### Worked Instance

Sketch $y = (x - 1)^2(x + 2)$ from the Hook. Degree $n = 3$ (odd) with leading coefficient $+1$
(expand the leading terms: $x^2 \cdot x = x^3$), so the end behavior is down on the left, up on the
right. Roots: $x = 1$ with multiplicity $2$ (even → touch) and $x = -2$ with multiplicity $1$ (odd →
cross). Sign chart with critical points $-2, 1$:
$$x \lt -2:\ (-)^2(-) \lt 0; \qquad -2 \lt x \lt 1:\ (-)^2(+) \gt 0; \qquad x \gt 1:\ (+)^2(+) \gt 0.$$
So the curve rises from $-\infty$, crosses upward at $x = -2$, stays positive, dips down to *touch*
the axis at $x = 1$ without crossing (sign stays positive on both sides), and climbs to $+\infty$ —
exactly the "bounce at $1$, slice at $-2$" the Hook asked about.

### Pitfalls

- **Even multiplicity touches, odd multiplicity crosses.** Reversing these is the classic error; tie
  it to how $(x - r)^m$ behaves, not to memory.
- **End behavior is parity, not sign, of the degree — plus the leading sign.** Even degree gives
  same-direction ends; odd degree gives opposite ends. Both then bend according to
  $\operatorname{sign}(a_n)$.
- **Only real roots appear on the graph.** Complex roots contribute to the degree count (via the FTA)
  but never touch the $x$-axis; a degree-$4$ curve can meet the axis $0$, $2$, or $4$ times.
- **Multiplicities must sum to the degree** (counting complex roots). If your real roots' multiplicities
  fall short of $n$, the remaining roots are non-real conjugate pairs — do not force extra crossings.
- **Sketch $\ne$ exact turning points.** Sign and end behavior give the shape, but the precise
  locations of local maxima/minima require calculus, not the sign chart.

:::
:::

## Connections

This node fuses three earlier facts into a picture: the **Fundamental Theorem of Algebra**
([alg-fta-algebra]) guarantees the roots exist and count to the degree, **root bounds and rational
roots** ([alg-poly-roots-bounds]) locate them, and the **function** viewpoint ([alg-function-intro])
turns a formula into a curve. The same sign-chart machinery, extended to allow the sign to blow up at
zeros of a denominator, drives **rational functions** ([alg-rational-functions]) and
**rational inequalities**. Recognition trigger: "sketch the graph," "how many times does it cross the
axis," or "on which intervals is $P(x) \gt 0$."

## History

Curve sketching by algebraic reasoning matured alongside coordinate geometry: after Descartes and
Fermat linked equations to curves in the 1630s, Isaac Newton undertook a systematic classification of
cubic curves in his *Enumeratio linearum tertii ordinis* (1704), cataloguing their shapes and
branches. The precise language of multiplicity rests on the Fundamental Theorem of Algebra, argued
with increasing rigor through the eighteenth century and given its first widely accepted proof by
Gauss in 1799. The clean "crosses at odd multiplicity, touches at even multiplicity" dictum and the
sign-chart method are twentieth-century pedagogical distillations rather than named theorems, built on
the Intermediate Value Theorem that Bernard Bolzano and Augustin-Louis Cauchy placed on firm ground in
the early nineteenth century. What was once delicate analysis of individual curves is now a routine
recipe precisely because those foundations were secured.
