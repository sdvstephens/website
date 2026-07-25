A cup-shaped curve has a stubborn property: the midpoint of any chord sits *above* the curve.
Take $f(x) = x^2$ at $x = 1$ and $x = 3$; the chord's midpoint is at height
$\frac{1 + 9}{2} = 5$, but the curve at the midpoint $x = 2$ is only $4$. Above by $1$. Does the
same gap persist for *every* weighted average, not just the midpoint?

## Discovery

1. Call $f$ **convex** if its graph lies below every chord: for $x_1, x_2$ and $t \in [0,1]$,
   $f(tx_1 + (1-t)x_2) \le t f(x_1) + (1-t) f(x_2)$. Draw a chord of $f(x) = x^2$ and verify this
   for $t = \frac13$. Which side is bigger, "$f$ of the average" or "average of the $f$'s"?
2. Extend from two points to three. Given weights summing to $1$, group two of the three points
   into a single weighted point, apply the two-point definition, then apply it again to combine
   with the third. What inequality relating $f\left(\sum w_i x_i\right)$ and $\sum w_i f(x_i)$
   do you reach for three points?
3. What does the general $n$-point statement become when all weights are equal, $w_i = 1/n$?
4. Now specialize $f(x) = -\ln x$ (which is convex on $x \gt 0$) with equal weights. Rewrite the
   resulting inequality without logarithms. Which famous inequality have you just recovered?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $f$ be convex on an interval $I$. For points $x_1, \dots, x_n \in I$ and nonnegative weights
$w_1, \dots, w_n$ with $\sum w_i = 1$,
$$f\!\left(\sum_{i=1}^n w_i x_i\right) \;\le\; \sum_{i=1}^n w_i f(x_i).$$
For a **concave** $f$ the inequality reverses. Equality holds iff all the $x_i$ with positive
weight are equal, or $f$ is affine on the relevant range. ("$f$ of the mean $\le$ mean of the
$f$.")

### Proof

Induct on $n$. The base $n = 2$ is the definition of convexity. Assume the claim for $n - 1$
points. Given weights $w_1, \dots, w_n$ summing to $1$ with $w_n \lt 1$, set
$W = w_1 + \cdots + w_{n-1} = 1 - w_n \gt 0$ and let $y = \sum_{i=1}^{n-1} \frac{w_i}{W} x_i$ be
the weighted mean of the first $n-1$ points (their weights $\frac{w_i}{W}$ sum to $1$). Then
$\sum_{i=1}^n w_i x_i = W y + w_n x_n$, and the two-point convexity gives
$$f\!\left(W y + w_n x_n\right) \le W f(y) + w_n f(x_n).$$
By the inductive hypothesis applied to $y$, $f(y) \le \sum_{i=1}^{n-1} \frac{w_i}{W} f(x_i)$, so
$$f\!\left(\sum_{i=1}^n w_i x_i\right) \le W \sum_{i=1}^{n-1} \frac{w_i}{W} f(x_i) + w_n f(x_n)
= \sum_{i=1}^n w_i f(x_i).$$
Equality forces every two-point step to be tight, which for strictly convex $f$ means all the
weighted points coincide. $\blacksquare$

### Worked Instance

Recover AM–GM. The function $f(x) = -\ln x$ is convex on $(0, \infty)$ (its second derivative
$1/x^2 \gt 0$). With equal weights $w_i = 1/n$ and positive $x_i = a_i$, Jensen reads
$$-\ln\!\left(\frac{1}{n}\sum a_i\right) \le \frac1n \sum (-\ln a_i) = -\ln\!\left(\prod a_i\right)^{1/n}.$$
Multiplying by $-1$ flips it: $\ln\!\left(\frac1n\sum a_i\right) \ge \ln\!\left(\prod a_i\right)^{1/n}$,
and exponentiating gives $\frac1n\sum a_i \ge \left(\prod a_i\right)^{1/n}$ — AM–GM, equality iff
all $a_i$ equal.

### Pitfalls

- Get the direction right: for **convex** $f$, $f(\text{mean}) \le \text{mean of } f$. For
  **concave** $f$ (like $\ln$, $\sqrt{\cdot}$), it reverses. A sign slip here inverts the whole
  conclusion.
- The weights must be **nonnegative and sum to $1$**. Arbitrary coefficients do not give a valid
  weighted mean.
- Convexity is required on the whole interval containing the points; a function convex on part
  of its domain and concave elsewhere (like $x^3$ on $\RR$) does not qualify globally.

:::
:::

## Connections

Prereqs: AM–GM (which Jensen generalizes via $-\ln$) — but Jensen is far broader, turning *any*
convex function into an inequality. It is the parent of weighted AM–GM, the tangent-line trick,
and smoothing/mixing-variables arguments, and it powers proofs across the power-mean family.
Recognition trigger: a sum $\sum f(x_i)$ of a single convex/concave function with a constraint on
$\sum x_i$. A staple of olympiad and Putnam inequalities.
