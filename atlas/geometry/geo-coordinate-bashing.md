The three medians of *any* triangle meet at a single point — always, no matter how skewed the
triangle. You could hunt for a slick synthetic argument, or you could nail the triangle to a grid,
turn "the medians concur" into three equations, and just check they share a solution. Sometimes the
fastest proof is to stop reasoning about shapes and start computing.

## Discovery

Take the claim: *the three medians of a triangle meet at one point.* Let the triangle be $ABC$.

1. You get to place the axes wherever you like — the theorem is about a shape, and a shape does not
   care where the origin is. Put one vertex at the origin and another on the positive $x$-axis:
   $A = (0,0)$ and $B = (2c, 0)$. Let the third be a free point $C = (2d, 2e)$. Why is it legitimate
   to fix $A$ and $B$ this way without loss of generality, and why is doubling the coordinates
   ($2c, 2d, 2e$) a convenience rather than a restriction?
2. A median goes from a vertex to the midpoint of the opposite side. Compute the midpoint of each
   side using the midpoint formula $\big(\tfrac{x_1+x_2}{2}, \tfrac{y_1+y_2}{2}\big)$. Write down
   the three midpoints $M_A, M_B, M_C$ opposite $A, B, C$.
3. Parametrize the median from $A$ to $M_A$ as $A + t(M_A - A)$ for $t \in [0,1]$. Do the same for
   the median from $B$. Solve for the $t$ (and the corresponding parameter on $B$'s median) where
   the two meet. What point comes out?
4. Now evaluate the third median (from $C$) and check whether the point from step 3 lies on it. Does
   the meeting point have a memorable form in terms of $A$, $B$, $C$?
5. Reflect on the method itself: which features made this problem "coordinate-friendly"? What would
   have made coordinates a *bad* choice (think: many circles, or angles that are not right angles)?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Coordinate bashing** is the technique of proving a synthetic geometric fact by assigning
coordinates to the points, translating the hypotheses and conclusion into algebra (distances,
slopes, midpoints, line and circle equations), and verifying the conclusion by computation. The key
enabling principle:

> A geometric statement is invariant under translation, rotation, and reflection (and often
> scaling). So you may **choose the coordinate frame freely** — placing points at the origin, on an
> axis, or symmetrically — to kill as many unknown coordinates as possible before computing.

The core translations are: the distance formula $|PQ| = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$; the
midpoint $\big(\tfrac{x_1+x_2}{2}, \tfrac{y_1+y_2}{2}\big)$; collinearity/lines via slope; and
perpendicularity via slopes multiplying to $-1$.

### Proof

We justify the method's central license — *choosing the frame is free* — and demonstrate it on the
median problem.

**Why the frame is free.** A rigid motion (translation, rotation, reflection) is a bijection of the
plane that preserves all distances and angles. If a statement is phrased purely in terms of
distances, angles, collinearity, and incidence, then it holds for a configuration if and only if it
holds for the image configuration under any rigid motion. Given any triangle, some rigid motion
carries one chosen vertex to the origin and one chosen side onto the positive $x$-axis. Hence proving
the statement for the moved triangle proves it for the original. If the statement is also
scale-invariant, a dilation lets us fix one more length. This is what "without loss of generality"
means in coordinate proofs.

**Demonstration (medians concur).** Set $A = (0,0)$, $B = (2c,0)$, $C = (2d,2e)$; every triangle is
congruent to one in this position. The side midpoints are
$$M_A = \left(c + d,\ e\right)\ (\text{mid }BC), \quad
M_B = (d, e)\ (\text{mid }CA), \quad M_C = (c, 0)\ (\text{mid }AB).$$
The point
$$G = \left(\frac{0 + 2c + 2d}{3},\ \frac{0 + 0 + 2e}{3}\right) = \left(\frac{2(c+d)}{3},\ \frac{2e}{3}\right)$$
lies on all three medians. Check the median from $A$: the point $A + \tfrac23(M_A - A) = \tfrac23(c+d,
e) = G$. Check from $B$: $B + \tfrac23(M_B - B) = (2c,0) + \tfrac23(d - 2c, e) = \big(2c + \tfrac23 d -
\tfrac43 c, \tfrac23 e\big) = \big(\tfrac{2c + 2d}{3}, \tfrac{2e}{3}\big) = G$. Check from $C$:
$C + \tfrac23(M_C - C) = (2d, 2e) + \tfrac23(c - 2d, -2e) = \big(2d + \tfrac23 c - \tfrac43 d, 2e -
\tfrac43 e\big) = \big(\tfrac{2c + 2d}{3}, \tfrac{2e}{3}\big) = G$. All three medians pass through
$G$, so they concur (at the point two-thirds of the way down each median). $\blacksquare$

### Worked Instance

Prove synthetically-flavored fact by bashing: *the diagonals of a parallelogram bisect each other.*
Place the parallelogram $PQRS$ with $P = (0,0)$, $Q = (p, 0)$, $S = (q, r)$; the fourth vertex is
forced by the parallelogram condition $R = Q + S - P = (p + q, r)$. The midpoint of diagonal $PR$ is
$\big(\tfrac{p+q}{2}, \tfrac{r}{2}\big)$. The midpoint of diagonal $QS$ is $\big(\tfrac{p+q}{2},
\tfrac{r}{2}\big)$. They are the same point, so the diagonals cross at their common midpoint — each
bisects the other. The clever frame (one vertex at the origin, one side on the axis) reduced four
unknown vertices to three free numbers and made the computation a two-line check.

### Pitfalls

- Do not over-specify the frame. Placing $A=(0,0)$ and $B$ on the $x$-axis is free; also demanding
  $C = (0,h)$ would secretly assume the triangle is right-angled or isosceles — a hidden loss of
  generality. Fix only what a rigid motion (plus, if allowed, a scaling) genuinely lets you fix.
- Coordinate proofs of statements that mention only distances/angles are valid; but if you *scale*,
  make sure the statement is scale-invariant (areas and ratios usually are; specific numeric
  lengths are not).
- Circles and non-right angles turn into ugly algebra. Coordinates shine for midpoints,
  perpendiculars, and parallel lines; they bog down when many circles or arbitrary angles appear —
  reach for synthetic or trigonometric tools there.
- Perpendicular via slope product $= -1$ fails silently for vertical lines (undefined slope); handle
  that case separately or use the dot-product test.

:::
:::

## Connections

Prereqs: none beyond basic algebra and the plane's coordinate structure. Coordinate bashing is the
gateway to `geo-vectors` (which replaces coordinate pairs by position vectors and reads the same
computations more compactly) and to `geo-shoelace` (area of a polygon straight from vertex
coordinates). It is a *meta*-tool: when a synthetic problem resists, reaching for axes converts it to
guaranteed-terminating algebra. Recognition trigger: midpoints, medians, perpendiculars, parallels,
or "prove three lines/points are concurrent/collinear" — especially when no clean synthetic idea
appears and the figure has few circles.
