From each vertex of a triangle drop a straight plumb line, perpendicular to the opposite side.
Nothing about the setup suggests cooperation — three different vertices, three different sides, three
independent perpendiculars. Yet all three lines pierce one common point. Tilt the triangle until it
turns obtuse and the meeting point flees *outside* the triangle entirely, but the three lines still
insist on meeting. Why must three perpendiculars, aimed at three different targets, always agree on
a single point?

## Discovery

An **altitude** of a triangle is the perpendicular from a vertex to the line containing the opposite
side.

1. Draw an acute triangle $ABC$ and construct all three altitudes. Do the three segments seem to
   share a common point? Now redraw with an *obtuse* triangle: to drop the altitude from an acute
   vertex you must extend the opposite side to reach the foot. Do the three altitude *lines* still
   appear to meet at one point, and does that point sit inside or outside the triangle?
2. Here is the move that tames the problem. Through $A$ draw the line parallel to $\overline{BC}$,
   through $B$ the line parallel to $\overline{CA}$, and through $C$ the line parallel to
   $\overline{AB}$. These three lines bound a larger triangle $A'B'C'$, arranged so that the side of
   $A'B'C'$ through $A$ is parallel to $\overline{BC}$, and so on. Hunt for parallelograms in this
   picture (for instance one with corners $A$, $B$, $C$ and a corner of the big triangle) and use
   them to pin down *where on the big triangle's side* each original vertex sits.
3. The altitude from $A$ is perpendicular to $\overline{BC}$. Given how the big triangle's side
   $\overline{B'C'}$ is directed, what is the altitude's direction relative to $\overline{B'C'}$?
   Combine that with what step 2 told you about $A$'s position on $\overline{B'C'}$: which special
   line of triangle $A'B'C'$ does the altitude from $A$ coincide with?
4. The same reasoning brands all three altitudes as lines of that same special type for triangle
   $A'B'C'$. Recall from `geo-perpendicular-bisector` that lines of that type are *guaranteed* to
   pass through one common point. What does that force about the three altitudes of $\triangle ABC$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **altitude** of a triangle is the perpendicular segment (or line) from a vertex to the line
containing the opposite side; the point where it meets that line is the **foot**.

**Concurrency at the orthocenter.** The three altitudes of a triangle — extended to full lines when
necessary — pass through a single point $H$, the **orthocenter**.

**Where $H$ lives.** For an *acute* triangle the orthocenter is inside; for a *right* triangle it
is exactly the right-angle vertex; for an *obtuse* triangle it lies outside the triangle.

### Proof

Through each vertex draw the line parallel to the opposite side: line $\ell_A$ through $A$ parallel
to $BC$, line $\ell_B$ through $B$ parallel to $CA$, line $\ell_C$ through $C$ parallel to $AB$.
These bound a triangle $A'B'C'$; name its vertices by the intersections
$$B' = \ell_C \cap \ell_A, \qquad C' = \ell_A \cap \ell_B,$$
so that side $\overline{B'C'}$ lies along $\ell_A$ (through $A$, parallel to $BC$).

*Claim: $A$ is the midpoint of $\overline{B'C'}$.* Consider quadrilateral $ABCB'$. Its side
$\overline{B'A}$ lies on $\ell_A \parallel BC$, and its side $\overline{CB'}$ lies on $\ell_C
\parallel AB$; so $B'A \parallel BC$ and $CB' \parallel AB$, making $ABCB'$ a parallelogram, whence
$B'A = BC$. Likewise consider quadrilateral $ACBC'$: side $\overline{C'A}$ lies on $\ell_A \parallel
BC$ and side $\overline{BC'}$ lies on $\ell_B \parallel CA$, so $ACBC'$ is a parallelogram and
$C'A = CB = BC$. Thus $B'A = C'A = BC$, and since $B'$, $A$, $C'$ all lie on the line $\ell_A$ with
$B'$ and $C'$ on opposite sides of $A$, the point $A$ is the midpoint of $\overline{B'C'}$. The same
argument shows $B$ is the midpoint of $\overline{C'A'}$ and $C$ the midpoint of $\overline{A'B'}$.

Now the altitude from $A$ is perpendicular to $\overline{BC}$; since $\overline{B'C'} \parallel BC$,
this altitude is also perpendicular to $\overline{B'C'}$, and it passes through $A$, the midpoint of
$\overline{B'C'}$. Therefore the altitude from $A$ *is* the perpendicular bisector of side
$\overline{B'C'}$ of triangle $A'B'C'$. Identically, the altitudes from $B$ and $C$ are the
perpendicular bisectors of $\overline{C'A'}$ and $\overline{A'B'}$. By the concurrency of a
triangle's perpendicular bisectors (`geo-perpendicular-bisector`), these three lines meet at one
point — the circumcenter of $A'B'C'$ — which is therefore the common point of the three altitudes of
$\triangle ABC$. Call it the orthocenter $H$.

*Right-triangle case.* If $\angle C = 90^\circ$, the two legs $\overline{CA}$ and $\overline{CB}$
are themselves altitudes (each is perpendicular to the other side through a vertex), and they meet
at $C$; the third altitude also passes through $C$, so $H = C$. $\blacksquare$

### Worked Instance

Take $A = (0,0)$, $B = (4,0)$, $C = (1,3)$. Two altitudes locate $H$:

- Side $\overline{AB}$ lies on the $x$-axis, so the altitude from $C$ is the vertical line $x = 1$.
- Side $\overline{BC}$ runs from $(4,0)$ to $(1,3)$ with slope $-1$, so the altitude from $A$ has
  slope $1$: the line $y = x$.

They cross at $H = (1,1)$. Check the third altitude: $\overline{CA}$ has slope $3$, so the altitude
from $B = (4,0)$ has slope $-\tfrac13$, giving $y = -\tfrac13(x-4)$; at $x = 1$ this is
$y = -\tfrac13(-3) = 1$, so it too passes through $(1,1)$. Concurrency confirmed.

Now pin down the right angle with the **Pythagorean theorem**. The altitude from $A$ (the line
$y = x$) meets side $\overline{BC}$ (the line $x + y = 4$) at the foot $F = (2,2)$. Compute
$$AF = \sqrt{2^2 + 2^2} = \sqrt8, \quad BF = \sqrt{(4-2)^2 + (0-2)^2} = \sqrt8, \quad AB = 4.$$
Then $AF^2 + BF^2 = 8 + 8 = 16 = 4^2 = AB^2$. By the converse of the Pythagorean theorem,
$\angle AFB = 90^\circ$, so $\overline{AF} \perp \overline{BC}$ — verifying that this cevian really
is an altitude, exactly as the perpendicularity demanded.

### Pitfalls

- **Altitudes target the *line* of a side.** For an obtuse triangle the foot can land beyond the
  segment, so you must extend the side; two of the three feet then sit outside the triangle.
- **The orthocenter is not always inside.** Inside for acute, *at the right-angle vertex* for right,
  and *outside* for obtuse. Never assume it is interior the way the centroid is.
- **Concurrency is of the altitude *lines*.** In an obtuse triangle the altitude segments do not all
  cross inside; it is their extensions that meet at $H$.
- **Altitude $\ne$ median $\ne$ angle bisector.** All three are cevians from a vertex, but the
  altitude is the perpendicular one; they coincide only in isosceles or equilateral triangles.
- **The word "altitude" is overloaded.** It names both the perpendicular segment/line and its length
  (the triangle's height in $\tfrac12 bh$). Keep straight which you mean.

:::
:::

## Connections

This node uses `geo-angle-measure` (perpendicularity as a $90^\circ$ angle and the parallel-line
angle relations) and `geo-pythagorean-theorem` (its converse verifies right angles at the feet in
the worked instance). Its proof leans on the perpendicular-bisector concurrency of
`geo-perpendicular-bisector`, turning altitudes into perpendicular bisectors of a scaled-up
triangle — a beautiful example of solving a problem by *enlarging* it. The orthocenter rounds out
the four classical centers alongside the circumcenter, incenter (`geo-angle-bisector`), and centroid
(`geo-medians-centroid`); the orthocenter $H$, centroid $G$, and circumcenter $O$ then align on the
famous Euler line. Recognition trigger: perpendiculars dropped from vertices, mentions of a
triangle's "height," or right angles at the feet of cevians.

## History

Unlike the centroid and circumcenter, the concurrency of a triangle's three altitudes is not proved in Euclid's *Elements*, though the result was known in antiquity — a proposition equivalent to it appears in the *Book of Lemmas* attributed to Archimedes in the third century BC. The point received little attention for centuries and was not even given a standard name until the nineteenth century, when English geometers such as W. H. Besant popularized the term "orthocentre." Its modern fame stems from Leonhard Euler's 1765 discovery that in any triangle the orthocenter, centroid, and circumcenter lie on a single straight line — the Euler line — with the centroid dividing the segment in a fixed $2:1$ ratio. Later still came the nine-point circle, which passes through the feet of the altitudes and other notable points, drawing the orthocenter into a rich web of triangle geometry. What Euclid left aside thus became a centerpiece of the flourishing triangle geometry of the 1800s.
