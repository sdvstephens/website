Stand in the corner of a room. Two walls meet you along a single vertical crease, the floor
meets each wall along a horizontal crease, and the three creases all rush into one corner
point. Now look up: the top edge of the left wall and the bottom edge of the right wall never
touch and never run parallel — they lean past each other like two planes' worth of missed
appointment. In the flat world of a page, two lines that never meet must be parallel. In a room
that is suddenly false. What new rules does space play by?

## Discovery

You may assume only the plane incidence facts: two distinct points lie on exactly one line; a
line with two points in a plane lies wholly in that plane; three noncollinear points lie in
exactly one plane.

1. A single point in space: how many flat planes can be spun through it? Add a second point and
   ask again — a plane may now pivot only about the line joining them, so how many planes still
   pass through both? Add a *third* point, placed off that line, and hold a stiff card against
   all three. At which point count does the card stop tilting and spinning, so that exactly one
   plane is pinned? Now repeat with the three points placed *in a row*: does the card lock, or
   can it still spin? State the condition on three points that fixes one and only one plane.
2. Two distinct planes — two endless flat sheets — share a single point $P$. Slide along one
   sheet away from $P$; the sheets are flat and unbounded, so argue they cannot pull apart after
   only one shared point. If they share a second point $Q$ as well, what must both planes contain
   (use "a line with two points in a plane lies in that plane")? And could they share a point off
   the line $PQ$ without becoming the *same* plane? Describe exactly the set of points two
   distinct planes share.
3. Take a cube. Pick the front-top edge and the right-vertical edge. Check: do these two edges,
   extended to full lines, ever meet? Are they parallel (do they lie in one common plane)? If a
   pair of lines is *neither* intersecting *nor* parallel, invent a name for it and confirm no
   such pair can exist inside a single flat plane.
4. A line $m$ pierces a plane $\mathcal P$ at a point $O$. You want to certify that $m$ leans
   *equally away* from the whole sheet — perpendicular to every line of $\mathcal P$ through $O$.
   Checking infinitely many lines is hopeless. How few lines of $\mathcal P$ through $O$ do you
   suspect you must test to force perpendicularity to *all* of them? Try to picture why one line
   is too few and guess the smallest number that could suffice.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Space is governed by the plane incidence facts of `geo-points-lines-planes` together with three
consequences special to three dimensions:

- **Three noncollinear points determine a plane.** Any three points not on a common line lie in
  exactly one plane; three *collinear* points do not — infinitely many planes contain them.
- **Two distinct planes that meet, meet in a line.** If two different planes share even one
  point, their full set of shared points is an entire line (never just a point, never a whole
  plane's worth unless they coincide).
- **Perpendicular to a plane.** A line $m$ through a point $O$ of a plane $\mathcal P$ is
  **perpendicular to $\mathcal P$** when it is perpendicular to *every* line of $\mathcal P$
  through $O$. It suffices to check **two distinct lines**: if $m \perp a$ and $m \perp b$ for
  two different lines $a,b$ of $\mathcal P$ meeting at $O$, then $m \perp \mathcal P$.
- **Skew lines exist.** Two lines in space are **skew** when they neither intersect nor lie in a
  common plane (hence are not parallel). Skew pairs occur only in three or more dimensions; in a
  single plane every two lines either meet or are parallel.

### Proof

**Three noncollinear points determine a plane.** This is the space incidence axiom promoted in
`geo-points-lines-planes`: existence and uniqueness of a plane through three noncollinear points.
If instead the three points are collinear, they lie on a line $\ell$; any plane containing two
points of $\ell$ contains all of $\ell$, and a plane may be rotated about $\ell$ into infinitely
many positions, each still containing $\ell$ and hence all three points. So collinear triples fix
no unique plane.

**Two distinct planes meet in a line.** Let $\mathcal P_1 \ne \mathcal P_2$ share a point. First,
the shared set cannot contain three noncollinear points $A,B,C$: those three would determine a
*unique* plane, forcing $\mathcal P_1 = \mathcal P_2$, contrary to assumption. So every shared
point lies on one line — the shared points are collinear. It remains to see the shared set is a
*whole* line, not fewer points. Two planes meeting at a point share, by the space incidence
axiom, a second point (a plane is unbounded and flat, so two crossing sheets run along a common
crease); call two shared points $A,B$. The line $AB$ has two points in $\mathcal P_1$, so
$AB \subseteq \mathcal P_1$; likewise $AB \subseteq \mathcal P_2$. Thus $AB$ lies in the shared
set, and since the shared set is contained in a line, it equals the line $AB$. Two distinct
planes therefore intersect in exactly a line.

**Two perpendiculars force the plane.** Let $m$ meet $\mathcal P$ at $O$ with $m \perp a$ and
$m \perp b$, where $a,b$ are distinct lines of $\mathcal P$ through $O$. Let $\ell$ be *any* line
of $\mathcal P$ through $O$; we show $m \perp \ell$. Pick $P$ on $m$ and let $P'$ be the point of
$m$ with $O$ the midpoint of $PP'$. Choose a line in $\mathcal P$ that crosses $a$, $\ell$, $b$ at
three points $A$, $C$, $B$ respectively (a transversal through the fan of lines at $O$, with $C$
between $A$ and $B$). Because $m \perp a$ and $O$ is the midpoint of $PP'$, the point $A$ lies on
the perpendicular bisector of segment $PP'$, so $PA = P'A$; identically $PB = P'B$. Then
$\triangle PAB \cong \triangle P'AB$ by SSS (sides $PA=P'A$, $PB=P'B$, and shared $AB$), so the
angles at $A$ match: $\angle PAC = \angle P'AC$. Now $\triangle PAC \cong \triangle P'AC$ by SAS
($PA = P'A$, shared $AC$, equal included angles), giving $PC = P'C$. Finally, in
$\triangle PP'C$ the point $C$ is equidistant from $P$ and $P'$, and $O$ is the midpoint of
$PP'$, so the median $CO$ is also the altitude: $CO \perp PP'$. Since $CO$ lies along $\ell$ and
$PP'$ along $m$, we get $\ell \perp m$. As $\ell$ was arbitrary, $m \perp \mathcal P$.

**Skew lines exist.** Existence is settled by exhibiting a pair. On a cube $ABCD\,A'B'C'D'$ (top
face $A'B'C'D'$ over base $ABCD$), take line $AB$ along the base and line $CC'$ up a vertical
edge. They do not intersect: every point of $AB$ has the height of the base, while every point of
$CC'$ except $C$ is strictly above the base, and $C \notin AB$. They are not parallel: parallel
lines share a plane, but a plane containing $AB$ and the point $C'$ would contain the three
noncollinear points $A,B,C'$ and hence be a single determined plane, which cannot also contain
$C$ (that would place four of the cube's vertices in one plane, false for these four). With no
common plane and no common point, $AB$ and $CC'$ are skew. In a single plane no such pair exists:
two coplanar lines either meet or, sharing no point, are parallel. $\blacksquare$

### Worked Instance

**Counting planes.** Four points sit in space, no three of them collinear and not all four
coplanar (think of the four corners of a tripod-and-apex). Every choice of three determines
exactly one plane, and the four planes are distinct because no fourth point lies on the plane of
the other three. So the number of planes is $\binom{4}{3} = 4$ — the four faces of a tetrahedron.
If instead all four points were coplanar, all those triples would name the *same* plane, and the
count would collapse to $1$.

**A skew pair on a cube.** Resolve the Hook. Label the cube's base $ABCD$ and top $A'B'C'D'$. The
front-top edge $A'B'$ and the right-vertical edge $CC'$ never meet: $A'B'$ rides at the top
height along the front, while $CC'$ climbs the back-right corner, and no point is common. Nor are
they parallel: a plane holding both would hold $A',B',C,C'$, but $A'B'$ lies in the top face and
$CC'$ pierces down to the base, so no single flat sheet contains both. They are skew — exactly the
"missed appointment" of two room edges that are neither crossing nor parallel.

### Pitfalls

- **Skew is not parallel.** Parallel lines share a plane and keep a constant gap; skew lines share
  *no* plane. "Never meet" forces "parallel" only inside one plane, never in space.
- **Perpendicular to a plane means perpendicular to every line in it.** A line can be
  perpendicular to *one* line of a plane while leaning across the sheet; you must hit two distinct
  lines through the foot to certify perpendicularity to the whole plane. Two is enough — but one
  is not.
- **Collinear points do not determine a plane.** Three points fix a unique plane only when they
  are noncollinear. Three in a row leave a plane free to spin about their line.
- **"Meet in a line," not "in a point."** Two distinct planes that touch at all do so along an
  entire line. There is no way for two flat unbounded sheets to share exactly one point.

:::
:::

## Connections

This node lifts the incidence machinery of `geo-points-lines-planes` off the page and into space,
adding the two facts that build every later solid: three noncollinear points pin a unique plane,
and a line is perpendicular to a plane once it is perpendicular to two lines through its foot.
Those are precisely the ingredients for measuring a solid's "height" perpendicular to a base,
which powers `geo-prisms` and `geo-pyramids` downstream. Skew lines are the first genuinely
three-dimensional phenomenon — no analogue exists in plane geometry — and they reappear whenever
edges of a polyhedron are compared. Recognition trigger: any question about how planes and lines
sit relative to one another in space, "is this line perpendicular to that face," or "do these two
edges meet."

## History

Euclid devoted Books XI through XIII of the *Elements* (c. 300 BCE) to solid geometry, laying down the incidence rules for points, lines, and planes in space that this node treats. He extended the plane's axioms into three dimensions in order to reach the crowning classification of the regular polyhedra. The Greeks had no single word for *skew* lines — non-parallel lines that never meet, a genuinely three-dimensional phenomenon — which received systematic attention only much later as descriptive and analytic geometry matured in the 18th and 19th centuries. Solid incidence geometry stayed largely synthetic until coordinates, introduced by Descartes and Fermat, finally gave planes their algebraic equations.
