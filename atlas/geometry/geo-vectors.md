Take any quadrilateral — bent, non-convex, however ugly — and mark the midpoint of each of its four
sides. Connect those midpoints in order. You always get a parallelogram. Chasing this with slopes and
coordinates is a slog; with one idea — treating each point as an *arrow from the origin* and adding
arrows — it collapses to a single line.

## Discovery

Assign to each point $P$ a **position vector** $\vec{P}$ (the arrow from a fixed origin to $P$). The
segment from $P$ to $Q$ is the vector $\vec{Q} - \vec{P}$.

1. Let a quadrilateral have vertices with position vectors $\vec{A}, \vec{B}, \vec{C}, \vec{D}$. The
   midpoint of a segment $PQ$ has position vector $\tfrac12(\vec{P} + \vec{Q})$. Write the four side
   midpoints $M_{AB}, M_{BC}, M_{CD}, M_{DA}$.
2. To show $M_{AB}M_{BC}M_{CD}M_{DA}$ is a parallelogram, it suffices to show one pair of opposite
   sides is equal *as vectors* (same length, same direction). Compute the vector
   $M_{BC} - M_{AB}$ and the vector $M_{DA} - M_{CD}$. What do you notice?
3. Recall the dot product $\vec{u}\cdot\vec{v} = |\vec u||\vec v|\cos\theta$, where $\theta$ is the
   angle between the arrows. When is $\vec{u}\cdot\vec{v} = 0$? Use this to state, purely in dot-product
   language, the condition that segment $PQ$ is perpendicular to segment $RS$.
4. Consider three points $A, B, C$ and the point $G = \tfrac13(\vec A + \vec B + \vec C)$. Show that
   $G$ lies on the segment from $A$ to the midpoint of $BC$, and find the ratio in which it divides
   that segment. What special point of the triangle is $G$?
5. Reflect: in step 2 you never chose an origin. Why did the answer not depend on where the origin
   sits, even though every position vector does?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Represent points by **position vectors** from an arbitrary origin. Then:

- **Midpoint:** the midpoint of $PQ$ is $\tfrac12(\vec P + \vec Q)$.
- **Centroid:** the centroid of triangle $ABC$ is $G = \tfrac13(\vec A + \vec B + \vec C)$, and it
  divides each median in ratio $2:1$ from the vertex.
- **Dot product & perpendicularity:** $\vec u \cdot \vec v = |\vec u|\,|\vec v|\cos\theta$; two nonzero
  vectors are perpendicular **iff** $\vec u \cdot \vec v = 0$. Hence $PQ \perp RS \iff (\vec Q - \vec
  P)\cdot(\vec S - \vec R) = 0$.
- **Origin-independence:** any relation built only from *differences* of position vectors (like $\vec
  Q - \vec P$) is unchanged if the origin moves, so conclusions about shapes are frame-free.

### Proof

**Midpoint and centroid.** The midpoint of $PQ$ is equidistant along the segment: $\vec M = \vec P +
\tfrac12(\vec Q - \vec P) = \tfrac12(\vec P + \vec Q)$. For the centroid, let $M = \tfrac12(\vec B +
\vec C)$ be the midpoint of $BC$. The point dividing $AM$ in ratio $2:1$ from $A$ is
$$\vec A + \tfrac23(\vec M - \vec A) = \tfrac13\vec A + \tfrac23\vec M = \tfrac13\vec A + \tfrac13(\vec
B + \vec C) = \tfrac13(\vec A + \vec B + \vec C) = G.$$
By symmetry of the expression under permuting $A, B, C$, the same point $G$ lies on all three
medians, each divided $2:1$; so $G$ is their common point, the centroid.

**Perpendicularity.** By definition $\vec u\cdot\vec v = |\vec u||\vec v|\cos\theta$. For nonzero
$\vec u, \vec v$, this vanishes iff $\cos\theta = 0$ iff $\theta = 90^\circ$. Thus $PQ\perp RS$ iff
$(\vec Q - \vec P)\cdot(\vec S - \vec R) = 0$.

**Origin-independence.** Shift the origin by a constant vector $\vec t$: every position vector becomes
$\vec P + \vec t$. A difference $\vec Q - \vec P$ becomes $(\vec Q + \vec t) - (\vec P + \vec t) = \vec
Q - \vec P$, unchanged. Since midpoints-as-differences, dot products of differences, and centroids
(whose defining relations reduce to differences) are all built from such differences, every geometric
conclusion is independent of the origin. $\blacksquare$

### Worked Instance

Resolve the Hook (Varignon's theorem): the midpoints of the sides of quadrilateral $ABCD$ form a
parallelogram. The side midpoints are
$$M_{AB} = \tfrac12(\vec A + \vec B),\ M_{BC} = \tfrac12(\vec B + \vec C),\ M_{CD} = \tfrac12(\vec C +
\vec D),\ M_{DA} = \tfrac12(\vec D + \vec A).$$
Then
$$M_{BC} - M_{AB} = \tfrac12(\vec C - \vec A), \qquad M_{DA} - M_{CD} = \tfrac12(\vec A - \vec C) =
-\tfrac12(\vec C - \vec A).$$
So $\overrightarrow{M_{AB}M_{BC}} = -\overrightarrow{M_{CD}M_{DA}} = \overrightarrow{M_{DA}M_{CD}}$;
equivalently $\overrightarrow{M_{AB}M_{BC}} = \overrightarrow{M_{DA}M_{CD}}$, one pair of opposite
sides equal and parallel. A quadrilateral with a pair of equal, parallel opposite sides is a
parallelogram. (Both are parallel to diagonal $AC$, half its length.) No coordinates, no origin
choice. $\blacksquare$

### Pitfalls

- A position vector depends on the origin; a *difference* of two of them does not. Build conclusions
  from differences, or your "proof" secretly depends on where you drew the origin.
- $\vec u\cdot\vec v = 0$ means perpendicular *only* for nonzero vectors — the zero vector is
  orthogonal to everything vacuously, which is usually a degenerate case to flag.
- The dot product tests perpendicularity, not parallelism. Parallel means $\vec u = \lambda\vec v$
  for a scalar $\lambda$ (or, in the plane, the "cross" component $u_1 v_2 - u_2 v_1 = 0$).
- Equal *vectors* means same length AND same direction; showing only equal lengths does not give a
  parallelogram.

:::
:::

## Connections

Prereqs: coordinate bashing (`geo-coordinate-bashing`) — vectors are coordinates freed from a fixed
grid, so the same computations become shorter and origin-independent. The dot product handles lengths
and perpendicularity; scalar multiples handle collinearity and ratios. This method excels at
centroids, midpoint configurations, concurrency, and any "perpendicular" or "ratio along a segment"
claim. Recognition trigger: midpoints, centroids, "show these two segments are perpendicular/parallel,"
or a ratio in which a point divides a segment — reach for position vectors and the dot product.
