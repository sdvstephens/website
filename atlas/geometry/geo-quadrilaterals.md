Pin four rods into a four-bar frame so that opposite rods stay parallel, then push one corner.
The frame leans and sags, springing from tall-and-thin to short-and-wide — yet reach for a ruler and
the rod *across* from each rod always reads the same length, and the two crossing diagonals always
slice each other at one shared midpoint. Nobody measured anything to arrange that. It falls out of the
single instruction "keep opposite sides parallel." Why should parallel force *equal*?

## Discovery

A **quadrilateral** is a four-sided closed figure $ABCD$, with opposite sides $AB, DC$ and $AD, BC$.
Suppose both pairs are parallel: $AB \parallel DC$ and $AD \parallel BC$. Keep only the transversal
angle facts and triangle congruence in hand.

1. Draw the diagonal $\overline{AC}$. It is a transversal cutting the parallel pair $AB, DC$; name the
   pair of equal angles it makes at $A$ and at $C$. That same diagonal also cuts the parallel pair
   $AD, BC$ — name the second pair of equal angles.
2. Triangles $ABC$ and $CDA$ share the side $\overline{AC}$. Using the two angle equalities from
   step 1 together with that shared side, argue the two triangles are congruent. State the vertex
   correspondence you are using ($A\leftrightarrow C$, $B\leftrightarrow D$, $C\leftrightarrow A$).
3. From the congruence in step 2, read off which of the quadrilateral's sides must be equal, and which
   of its corner angles must be equal. (Just list them; do not combine yet.)
4. Draw both diagonals; let them meet at $P$. Find two triangles that each contain a *half* of a
   diagonal and that you can prove congruent using a side already shown equal in step 3 plus the
   transversal angles at $A$ and $C$. What does their congruence say about how $P$ splits each diagonal?
5. Reverse the reasoning. Forget "parallel"; suppose only that *both pairs of opposite sides are equal
   in length*. Draw $\overline{AC}$ and find a congruence — which criterion applies now, with three
   known sides? Then explain how a pair of equal alternate angles lets you *recover* that opposite
   sides are parallel.
6. Take any quadrilateral at all and draw one diagonal. How many triangles does it cut the figure into?
   Given that each triangle's three angles total a straight angle, what must the four corner angles add
   up to?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The quadrilateral family** (each a special case of the last):
- **Trapezoid** — at least one pair of parallel sides.
- **Parallelogram** — *both* pairs of opposite sides parallel.
- **Rectangle** — a parallelogram with a right angle (forcing all four right).
- **Rhombus** — a parallelogram with all four sides equal.
- **Square** — both at once. In set terms, $\text{square} = \text{rectangle} \cap \text{rhombus}
  \subset \text{parallelogram} \subset \text{trapezoid}$.

**Parallelogram properties.** In any parallelogram:
1. opposite sides are equal;
2. opposite angles are equal, and consecutive angles are supplementary (sum $180^\circ$);
3. the diagonals bisect each other.

**A converse.** If both pairs of opposite sides of a quadrilateral are equal, then it is a
parallelogram.

**Angle sum.** The interior angles of any simple quadrilateral sum to $360^\circ$.

### Proof

Let $ABCD$ be a parallelogram: $AB \parallel DC$ and $AD \parallel BC$.

**Opposite sides and angles.** Draw diagonal $\overline{AC}$. As a transversal of $AB \parallel DC$ it
gives alternate interior angles $\angle BAC = \angle DCA$; as a transversal of $AD \parallel BC$ it
gives $\angle DAC = \angle BCA$. Triangles $ABC$ and $CDA$ share side $\overline{AC}$, so by
Angle-Side-Angle (using $\angle BAC = \angle DCA$, the shared side $AC$, and $\angle BCA = \angle DAC$),
$$\triangle ABC \cong \triangle CDA.$$
Corresponding parts give $AB = CD$ and $BC = DA$ — opposite sides equal — and $\angle B = \angle D$.
For the other pair of corner angles, add the two angle equalities:
$\angle A = \angle BAC + \angle DAC = \angle DCA + \angle BCA = \angle C$. So opposite angles are equal.
Consecutive angles: $AD \parallel BC$ cut by transversal $AB$ makes $\angle A$ and $\angle B$
co-interior, hence $\angle A + \angle B = 180^\circ$.

**Diagonals bisect each other.** Draw both diagonals, meeting at $P$. In triangles $ABP$ and $CDP$:
$AB = CD$ (just proved); $\angle BAP = \angle DCP$ and $\angle ABP = \angle CDP$ (alternate interior
angles of $AB \parallel DC$ cut by $\overline{AC}$ and $\overline{BD}$). By Angle-Side-Angle,
$\triangle ABP \cong \triangle CDP$, so $AP = CP$ and $BP = DP$: $P$ is the midpoint of each diagonal.

**Converse.** Suppose only that $AB = CD$ and $BC = DA$. Draw $\overline{AC}$. Triangles $ABC$ and
$CDA$ have $AB = CD$, $BC = DA$, and the shared side $AC = CA$, so by Side-Side-Side,
$\triangle ABC \cong \triangle CDA$. Then $\angle BAC = \angle DCA$; these are alternate interior angles
for lines $AB, DC$ cut by transversal $\overline{AC}$, and equal alternate angles force
$AB \parallel DC$. Likewise $\angle BCA = \angle DAC$ forces $BC \parallel AD$. Both pairs parallel:
$ABCD$ is a parallelogram.

**Angle sum.** In any simple quadrilateral $ABCD$, a diagonal (say $\overline{AC}$ lying inside) cuts
it into $\triangle ABC$ and $\triangle ACD$. The four corner angles are partitioned exactly among these
two triangles' angles, and each triangle's angles total $180^\circ$, so the corner angles total
$180^\circ + 180^\circ = 360^\circ$. $\blacksquare$

### Worked Instance

Resolve the four-bar frame. Let $ABCD$ be a parallelogram with $\angle A = 70^\circ$, $AB = 8$,
$BC = 5$. By opposite angles, $\angle C = 70^\circ$; by supplementary consecutive angles,
$\angle B = \angle D = 110^\circ$ — every corner is pinned the moment one is. By opposite sides,
$CD = 8$ and $DA = 5$, so the "rod across from each rod" indeed matches and the perimeter is
$8+5+8+5 = 26$ no matter how the frame is flexed. Push a vertex and $\angle A$ changes, but the *pairs*
$\angle A=\angle C$, $\angle B=\angle D$ ride along together and the diagonals keep crossing at their
common midpoint $P$ (each diagonal split into two equal halves). The rigidity of the rulered lengths is
not luck: it is Side-Angle-Side and alternate angles doing their work behind the linkage.

### Pitfalls

- **The trapezoid convention is ambiguous.** "At least one pair of parallel sides" (inclusive) makes
  every parallelogram a trapezoid; some texts say "exactly one pair" (exclusive), excluding
  parallelograms. State which you mean.
- **The converse needs *both* pairs equal.** One pair of opposite sides equal *and parallel* also forces
  a parallelogram, but one pair equal while the *other* pair is parallel does **not** — that can be an
  isosceles trapezoid.
- **Don't confuse the diagonal facts.** In a *parallelogram* the diagonals *bisect each other*; equal
  diagonals is the mark of a *rectangle*; perpendicular diagonals the mark of a *rhombus*. Three
  different properties.
- **Opposite angles equal is a parallelogram fact, not a general one.** A random quadrilateral has no
  such equality.
- **The $360^\circ$ sum needs a *simple* (non-self-intersecting) quadrilateral**, and a diagonal that
  lies inside; a "crossed" quadrilateral breaks the triangulation argument.

:::
:::

## Connections

This node stands on `geo-parallel-lines-angles` (the alternate- and co-interior-angle facts that a
diagonal transversal unlocks) and `geo-congruence-def` (the ASA and SSS criteria and CPCTC that turn
equal angles into equal sides). It is the launch point for `geo-polygon-angles`, where the diagonal-into-
triangles trick generalizes from four sides to $n$, and for `geo-polygon-area`, where the same
decomposition turns a shape into triangles of known area. Recognition trigger: any figure labelled a
parallelogram, rhombus, rectangle, or square — reach for "opposite sides/angles equal, diagonals bisect"
before computing — and any request to *prove* a quadrilateral is a parallelogram, which almost always
reduces to a diagonal and one triangle congruence.

## History

Euclid's *Elements* (c. 300 BC) already names and classifies four-sided figures in the definitions of Book I, distinguishing squares, oblongs (rectangles), rhombi, and rhomboids (parallelograms), and lumping the rest as trapezia. The parallelogram results in propositions I.33–I.34 — that opposite sides and angles are equal and each diagonal halves the figure — anchor the whole later theory. Greek geometry had no single word matching the modern "quadrilateral," and the classification scheme was refined over centuries; even today British and American usage disagree on "trapezoid" versus "trapezium," a lingering echo of the ambiguous ancient term. Because any quadrilateral splits into two triangles along a diagonal, its properties reduce to triangle facts, which is why the family sits just downstream of the congruence theorems. The tidy hierarchy of special quadrilaterals remains one of the first classifications students meet.
