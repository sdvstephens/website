Push two pins into a corkboard and ask a simple question: which points of the board are the
*same* distance from both pins? One such point is obvious — the spot exactly between them. But there
are others, and if you mark every point you find, they do not scatter. They line up dead straight.
Why should "equidistant from two pins" trace a perfectly straight line, and which line is it?

## Discovery

Two points $A$ and $B$. Call a point *balanced* if it is the same distance from each: $PA = PB$.

1. Let $M$ be the midpoint of $\overline{AB}$. Is $M$ balanced? Now find a balanced point *off*
   the line $AB$ — the apex of a triangle with two equal sides is one. Plot three or four balanced
   points and eyeball the shape they form.
2. Take *any* balanced point $P$ (so $PA = PB$), and join $P$ to the midpoint $M$ of
   $\overline{AB}$. Look at the two triangles $\triangle PMA$ and $\triangle PMB$. Which three
   pairs of sides are equal? Name the congruence criterion that applies. Once the triangles are
   congruent, what does that force about the two angles $\angle PMA$ and $\angle PMB$ — and, since
   $A$, $M$, $B$ are in a line, what must each of those angles measure?
3. Now run it the other way. Let $Q$ be any point on the line through $M$ that is perpendicular to
   $\overline{AB}$. Compare $\triangle QMA$ and $\triangle QMB$: which two sides and which included
   angle match? Name the criterion, and read off what it says about $QA$ versus $QB$.
4. Steps 2 and 3 push in opposite directions — one starts from "balanced," the other from "on that
   perpendicular line." Fuse them into a single *if and only if* statement: exactly which points
   are balanced with respect to $A$ and $B$?
5. Add a third pin $C$, forming a triangle. A point balanced for $A$ and $B$ lies on one special
   line; a point balanced for $B$ and $C$ lies on another. Suppose a single point $O$ lies on
   *both*. Write what $O$'s distances to $A$, $B$, $C$ then satisfy — and decide whether $O$ is
   forced to lie on the third special line as well.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **perpendicular bisector** of a segment $\overline{AB}$ is the line that is perpendicular to
$\overline{AB}$ and passes through its midpoint.

**Perpendicular Bisector Locus Theorem.** A point $P$ satisfies $PA = PB$ *if and only if* $P$
lies on the perpendicular bisector of $\overline{AB}$. (So the perpendicular bisector *is* the set
of all points equidistant from the two endpoints — nothing more, nothing less.)

**Corollary (the circumcenter).** The three perpendicular bisectors of the sides of a triangle
$ABC$ meet at a single point $O$, called the **circumcenter**. This point is equidistant from all
three vertices, $OA = OB = OC$, so it is the center of the unique circle passing through $A$, $B$,
$C$ (the **circumscribed circle**), whose radius is that common distance.

### Proof

We prove both directions of the locus theorem, then read off the concurrency.

**On the bisector $\Rightarrow$ balanced.** Let $\ell$ be the perpendicular bisector of
$\overline{AB}$, with $M$ the midpoint. Take $Q$ on $\ell$. If $Q = M$, then $QA = MA = MB = QB$ by
the definition of midpoint. Otherwise compare $\triangle QMA$ and $\triangle QMB$: side $QM$ is
common, $MA = MB$ (midpoint), and $\angle QMA = \angle QMB = 90^\circ$ (because $\ell \perp AB$).
By SAS, $\triangle QMA \cong \triangle QMB$, so corresponding sides give $QA = QB$.

**Balanced $\Rightarrow$ on the bisector.** Suppose $PA = PB$. If $P$ lies on line $AB$ itself,
then $PA = PB$ forces $P = M$, which is on $\ell$. Otherwise let $M$ be the midpoint of
$\overline{AB}$ and compare $\triangle PMA$ and $\triangle PMB$: $PA = PB$ (given), $MA = MB$
(midpoint), and $PM$ is common. By SSS, $\triangle PMA \cong \triangle PMB$, so $\angle PMA =
\angle PMB$. Since $A$, $M$, $B$ are collinear, these two angles are supplementary,
$\angle PMA + \angle PMB = 180^\circ$; being equal, each is $90^\circ$. Thus $PM \perp AB$ through
$M$, so $P$ lies on the perpendicular bisector $\ell$.

The two implications together give the *if and only if*.

**Concurrency of the three perpendicular bisectors.** Let $\ell_{AB}$, $\ell_{BC}$, $\ell_{CA}$ be
the perpendicular bisectors of the three sides. The lines $\ell_{AB}$ and $\ell_{BC}$ are not
parallel: $\ell_{AB} \perp AB$ and $\ell_{BC} \perp BC$, so if they were parallel then $AB \parallel
BC$, impossible since $A$, $B$, $C$ are not collinear. Hence $\ell_{AB}$ and $\ell_{BC}$ meet at a
point $O$. Because $O \in \ell_{AB}$, the locus theorem gives $OA = OB$; because $O \in \ell_{BC}$,
it gives $OB = OC$. Therefore $OA = OC$, and by the *other* direction of the locus theorem $O$ lies
on $\ell_{CA}$ as well. All three perpendicular bisectors pass through $O$, and $OA = OB = OC$ is
the circumradius. $\blacksquare$

### Worked Instance

Return to the pins as vertices of a triangle: $A = (0,0)$, $B = (6,0)$, $C = (0,8)$ — a right
triangle with the right angle at $A$. The perpendicular bisector of the horizontal side
$\overline{AB}$ is the vertical line $x = 3$ (perpendicular to $AB$, through its midpoint
$(3,0)$). The perpendicular bisector of the vertical side $\overline{AC}$ is the horizontal line
$y = 4$. They cross at the circumcenter $O = (3,4)$.

Check the promise $OA = OB = OC$:
$$OA = \sqrt{3^2 + 4^2} = 5, \quad OB = \sqrt{3^2 + 4^2} = 5, \quad OC = \sqrt{3^2 + 4^2} = 5.$$
All three equal $5$, the circumradius. Notice $O = (3,4)$ is exactly the midpoint of the hypotenuse
$\overline{BC}$ (from $(6,0)$ to $(0,8)$) — the circumcenter of a right triangle always lands on the
hypotenuse's midpoint, and the hypotenuse is a diameter of the circumscribed circle.

### Pitfalls

- **Both conditions are required.** The perpendicular bisector must be perpendicular *and* pass
  through the midpoint. A line through the midpoint that tilts, or a perpendicular that meets
  $\overline{AB}$ off-center, is not it.
- **The locus theorem is an *iff*.** You need both directions: every balanced point is on the line,
  and every point on the line is balanced. Using only one direction proves half the claim.
- **The circumcenter need not be inside the triangle.** For an acute triangle it is inside; for a
  right triangle it sits *on* the hypotenuse (at its midpoint); for an obtuse triangle it lies
  *outside*. Do not assume it is interior.
- **Two bisectors already pin the point.** Once two perpendicular bisectors meet at $O$, the third
  is forced through $O$ — it is a consequence, not a fresh condition you must separately impose.
- **Circumcenter is not the centroid or incenter.** "Equidistant from the vertices" is the
  perpendicular-bisector center; do not confuse it with the balance point or the
  equidistant-from-sides center.

:::
:::

## Connections

This node rests on `geo-congruence-def` — SAS and SSS are the entire engine of the locus proof — and
on the proof habits of `geo-proof-intro` (proving an *iff* as two separate implications). It is the
first of the classical triangle centers: the circumcenter joins the incenter (`geo-angle-bisector`,
built from the *angle* bisector locus), the centroid (`geo-medians-centroid`), and the orthocenter
(`geo-altitudes-orthocenter`) — and that last proof reuses this very concurrency result, turning a
triangle's altitudes into the perpendicular bisectors of a larger triangle. Recognition trigger:
whenever a problem says "equidistant from two points," asks for a point (or center) the same
distance from several vertices, or wants the circle through three given points, reach for the
perpendicular bisector.

## History

Constructing the perpendicular bisector of a segment is one of Euclid's foundational operations, arising from *Elements* I.10 (bisecting a segment) and I.11 (erecting a perpendicular), both c. 300 BC and both carried out with only compass and straightedge. Euclid's constructions implicitly capture the locus property — that the bisector is exactly the set of points equidistant from the two endpoints — though the Greeks framed it through equal triangles rather than as a locus. This equidistance property is what makes the perpendicular bisector the tool for locating the circumcenter of a triangle, the point equally far from all three vertices, treated in *Elements* IV. The same idea reappears wherever a "midline of fairness" is needed, from the circumscribed circle of antiquity to the Voronoi diagrams of modern computational geometry. Its endurance shows how a simple compass construction can encode a deep characterization by distance.
