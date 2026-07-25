To find where a symmetric expression is extremal, here is a bold move: nudge two of the
variables toward each other while keeping their sum fixed, and show the expression only improves.
Keep nudging and the variables collapse to equality — where you can just compute. When does this
"smoothing" step actually help, and why does it pin down the extremum?

## Discovery

1. Take a symmetric sum $F(a, b, c) = f(a) + f(b) + f(c)$ with $a + b + c$ fixed. Replace the
   pair $(a, b)$ by $\left(\frac{a+b}{2}, \frac{a+b}{2}\right)$, keeping their sum. If $f$ is
   **convex**, compare $f(a) + f(b)$ with $2f\!\left(\frac{a+b}{2}\right)$. Which is larger, and
   which direction does the replacement move $F$?
2. So for convex $f$, does averaging two variables *raise* or *lower* $F$? Where — at equal
   variables or at a spread-out boundary — would the minimum of $F$ then sit?
3. Now the constraint might be $abc = 1$ instead of a fixed sum. If you replace $(a,b)$ by
   $(\sqrt{ab}, \sqrt{ab})$ (fixing the product), what monotone substitution ($x = \ln a$, say)
   turns this back into a "fixed-sum" smoothing? Sketch it.
4. State the general principle: to minimize a symmetric convex-type expression under a symmetric
   constraint, in which direction do you smooth, and what configuration do you smooth toward?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Smoothing principle.** Let $F$ be symmetric in $a_1, \dots, a_n$ and suppose that, holding a
symmetric constraint fixed (e.g. $\sum a_i$ or $\prod a_i$), replacing any two unequal variables
by two that are *closer together* (e.g. both equal to their average, or both to their geometric
mean) moves $F$ monotonically in one direction. Then the extremum in that direction is attained
when all variables are **equal** (or, if the smoothing pushes the other way, at a **boundary**
where variables split to extremes). Convexity of the underlying single-variable function
determines the direction: for convex $f$, $f(a) + f(b) \ge 2f\!\left(\frac{a+b}{2}\right)$, so
averaging *decreases* $\sum f$.

### Proof

The core lemma is the two-point convexity fact (a special case of Jensen): if $f$ is convex on
an interval and $a, b$ lie in it, then
$$f(a) + f(b) \;\ge\; 2\,f\!\left(\frac{a+b}{2}\right),$$
with equality iff $a = b$. (Proof: convexity gives $f\!\left(\frac{a+b}{2}\right) \le
\frac{f(a)+f(b)}{2}$; multiply by $2$.) Hence for $F = \sum_i f(a_i)$ with $\sum a_i$ fixed,
replacing any two coordinates by their common average keeps the constraint and does not increase
$F$; each such step strictly decreases $F$ unless the two were already equal. Because the values
lie in a compact set and $F$ is continuous, the infimum is attained; at the minimizer no
smoothing step can strictly help, so all coordinates must be equal. Therefore the minimum of
$\sum f(a_i)$ subject to fixed $\sum a_i$ is at $a_1 = \cdots = a_n$. For a product constraint,
apply the substitution $a_i = e^{t_i}$ so $\prod a_i$ fixed becomes $\sum t_i$ fixed, reducing to
the sum case. $\blacksquare$

### Worked Instance

Show that for positive reals with $a + b + c = 3$, $\ a^2 + b^2 + c^2 \ge 3$. Here
$f(x) = x^2$ is convex. Smoothing any two variables to their average keeps $a+b+c = 3$ and does
not increase $\sum a_i^2$ (by the two-point lemma), so the *minimum* of $\sum a_i^2$ is at
$a = b = c = 1$, giving $1 + 1 + 1 = 3$. Hence $a^2 + b^2 + c^2 \ge 3$, equality at $a=b=c=1$.
(Because $f$ is convex, smoothing lowers the sum, so equal variables give the floor.)

### Pitfalls

- Direction is everything: for **convex** $f$, smoothing toward equality *decreases* $\sum f$,
  so equal variables give the **minimum**; the maximum sits at the boundary. For **concave** $f$
  it flips. Do not assume "equal variables" is always the answer.
- You must keep the **constraint fixed** during the smoothing step; averaging that changes
  $\sum a_i$ (or $\prod a_i$) proves nothing.
- Convergence needs an argument: cite compactness/continuity so the extremum is actually
  *attained* at the fully-smoothed point, not merely approached.

:::
:::

## Connections

Prereqs: Jensen's inequality — the two-point convexity fact is exactly Jensen for $n=2$, and
smoothing repeats it to drive variables together. It shares the "reduce to the boundary/equal
case" philosophy with the tangent-line trick and complements SOS on symmetric problems.
Recognition trigger: a symmetric inequality under a symmetric constraint where you suspect the
extremum is at all-equal (or all-but-one-equal) — nudge two variables together and watch the
expression move. Common on hard olympiad inequalities.
