Draw any two chords of a circle so they cross at an interior point $P$. Each chord is sliced by $P$ into
two pieces. Multiply the two pieces of the first chord; multiply the two pieces of the second. The two
products come out identical — and they stay identical no matter how you swing the chords, as long as they
still pass through that one point $P$. Some number seems attached to the point $P$ itself, indifferent to
which chords you draw through it. What is that number, and why is it loyal to the point rather than the
chords?

## Discovery

A **chord** joins two points of a circle; a **secant** from an external point crosses the circle at two
points. Recall two tools: inscribed angles on the *same* arc are equal, and two triangles with two pairs
of equal angles are similar (AA), giving proportional sides.

1. Let chords $\overline{AB}$ and $\overline{CD}$ cross at an interior point $P$. Join the endpoints
   *crosswise* to form two triangles: $\triangle PAC$ and $\triangle PDB$. Look at the angles at $P$ in
   these two triangles. What is the relationship between $\angle APC$ and $\angle DPB$, and why?
2. Now the angles at the circle. The angle $\angle CAP$ ($= \angle CAB$) and the angle $\angle BDP$
   ($= \angle BDC$) are both inscribed angles. Which arc does each intercept, and what does that say
   about whether they are equal?
3. Using the angle facts from steps 1 and 2, decide which pairing makes $\triangle PAC$ similar to
   $\triangle PDB$. Write the similarity with vertices *in matching order*.
4. From that similarity, write the proportion relating the sides $PA$, $PC$, $PD$, $PB$. Then clear the
   fraction (cross-multiply) to get a relation among the four segment lengths. Which products end up
   equal?
5. Slide the external version. If instead $P$ is *outside* the circle and two secants from $P$ meet it at
   $A, B$ and at $C, D$, join endpoints crosswise again and hunt for the same two equal inscribed angles
   plus a *shared* angle at $P$. Does the same product relation survive? Then push one secant until its
   two crossing points merge into a single tangent point $T$: what does $PA \cdot PB$ become when
   $A = B = T$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Power of a Point.** Fix a point $P$ and a circle. Any line through $P$ meeting the circle at two points
$X, Y$ yields the *same* product $PX \cdot PY$ (of unsigned lengths), a number determined by $P$ and the
circle alone. Concretely:

- **Two chords (interior $P$).** If chords $\overline{AB}$ and $\overline{CD}$ meet at an interior point
  $P$, then
  $$PA \cdot PB = PC \cdot PD.$$
- **Two secants (exterior $P$).** If two secants from an external point $P$ meet the circle at $A, B$ and
  at $C, D$ (each product taken as the *whole* distances from $P$), then
  $$PA \cdot PB = PC \cdot PD.$$
- **Tangent and secant (exterior $P$).** If a tangent from $P$ touches at $T$ and a secant meets the
  circle at $A, B$, then
  $$PT^2 = PA \cdot PB.$$

The common product is the **power of the point** $P$ with respect to the circle.

### Proof

We use inscribed angles and AA similarity. Lengths below are unsigned.

**Interior case.** Let chords $\overline{AB}$, $\overline{CD}$ meet at interior point $P$. Form
$\triangle PAC$ and $\triangle PDB$. At $P$, the angles $\angle APC$ and $\angle DPB$ are vertical angles,
hence equal. At the circle, $\angle CAB$ (that is, $\angle PAC$) and $\angle CDB$ (that is, $\angle PDB$
seen at $D$, i.e. $\angle BDC$) are both inscribed angles intercepting arc $BC$, so they are equal:
$\angle PAC = \angle PDB$. Two pairs of equal angles give, by AA,
$$\triangle PAC \sim \triangle PDB,$$
with correspondence $P \leftrightarrow P$, $A \leftrightarrow D$, $C \leftrightarrow B$. Matching
sides are proportional:
$$\frac{PA}{PD} = \frac{PC}{PB}.$$
Cross-multiplying, $PA \cdot PB = PC \cdot PD$.

**Exterior (two secants) case.** Let secants from external $P$ meet the circle at $A, B$ (with $A$ nearer
$P$, so the order on the line is $P, A, B$) and at $C, D$ (with $C$ nearer $P$, order $P, C, D$). Form
$\triangle PAD$ and $\triangle PCB$. They share the angle at $P$ (it is the one angle between the two
secant lines). For the second pair, compare $\angle PAD$ and $\angle PCB$. Since $A$ lies between $P$ and
$B$, rays $\overline{AP}$ and $\overline{AB}$ are opposite, so $\angle PAD$ and $\angle DAB$ form a linear
pair: $\angle PAD = 180^\circ - \angle DAB$. Likewise $C$ lies between $P$ and $D$, so
$\angle PCB = 180^\circ - \angle BCD$. But $\angle DAB$ and $\angle BCD$ are inscribed angles both
intercepting arc $DB$, hence equal; therefore $\angle PAD = \angle PCB$. By AA,
$$\triangle PAD \sim \triangle PCB, \qquad \frac{PA}{PC} = \frac{PD}{PB},$$
so cross-multiplying gives $PA \cdot PB = PC \cdot PD$.

**Tangent–secant case.** Let the tangent from $P$ touch at $T$ and the secant meet the circle at $A$
(near) and $B$ (far). Form $\triangle PTA$ and $\triangle PBT$. They share the angle at $P$. The
tangent–chord angle $\angle PTA$ equals half of arc $TA$, and the inscribed angle $\angle TBA$
($= \angle PBT$) also equals half of arc $TA$; so $\angle PTA = \angle PBT$. By AA,
$$\triangle PTA \sim \triangle PBT, \qquad \frac{PT}{PB} = \frac{PA}{PT},$$
whence $PT^2 = PA \cdot PB$. This is exactly the two-secant relation in the limit where the second secant
becomes tangent, its two intersection points $C, D$ merging into $T$ (so $PC \cdot PD \to PT^2$).
$\blacksquare$

### Worked Instance

**Interior chords.** Two chords cross at an interior point $P$. On the first chord the two pieces are
$PA = 3$ and $PB = 4$, so the power of $P$ is
$$PA \cdot PB = 3 \cdot 4 = 12.$$
On the second chord one piece is $PC = 2$; the other must satisfy $PC \cdot PD = 12$, so
$$2 \cdot PD = 12 \implies PD = 6.$$
Any chord through $P$ will split into two pieces multiplying to $12$ — the number belongs to $P$, as the
Hook promised.

**Tangent and secant.** From an external point $P$, a tangent touches at $T$ and a secant meets the circle
at $A$ (near) and $B$ (far) with $PA = 4$ and $AB = 5$, so $PB = PA + AB = 9$. Then
$$PT^2 = PA \cdot PB = 4 \cdot 9 = 36 \implies PT = 6.$$
The tangent from $P$ has length $6$.

### Pitfalls

- **Use the whole secant lengths from $P$.** In the exterior case each factor is the *entire* distance
  from $P$ to a crossing point ($PA$ and $PB$), not just the external part $PA$ or the chord piece $AB$.
  Multiplying $PA$ by $AB$ is the classic wrong move.
- **Pair the segments correctly.** Interior: multiply the two pieces *of the same chord*, then equate
  across chords. Do not cross-multiply pieces from different chords.
- **The tangent case squares one length.** $PT^2 = PA \cdot PB$: the tangent length appears squared
  because its two "crossing points" coincide at $T$. Writing $PT = PA \cdot PB$ (unsquared) is wrong.
- **Interior vs. exterior product interpretation.** The equal-products *statement* looks the same inside
  and outside, but inside the factors are the two chord pieces on opposite sides of $P$, while outside
  both factors are measured the same direction from $P$. Draw the figure before assigning lengths.

:::
:::

## Connections

Power of a Point is the length-counterpart of the circle angle laws: the same crossing chords, secants,
and tangents that produced half-sum/half-difference *angles* (`geo-angles-in-circles`) now produce equal
*products* of lengths, both traced back to inscribed angles (`geo-inscribed-angles`) turned into similar
triangles (`geo-similarity-def`). The tangent case reuses the tangent–chord angle and the equal-tangents
picture from `geo-tangent-lines`. This elementary form is the gateway to the signed, coordinate-free
treatment in `geo-power-of-point`, where the power becomes $OP^2 - r^2$ with a sign distinguishing inside
from outside. Recognition trigger: two chords or secants through one point with three of the four segment
lengths known, a tangent length sought from a secant, or the phrase "product of the parts" around a
circle.

## History

The intersecting-chords and secant relations were proved by Euclid in Book III of the *Elements* (Propositions 35 through 37, c. 300 BCE), who showed that the products of the segments are equal. For two millennia these lived as separate theorems until the Swiss geometer Jakob Steiner, in the early 19th century, unified them under a single quantity he named the *power of a point* — a signed number measuring how far a point sits from a circle. Steiner and his contemporaries were remaking geometry into a more general, projective science, seeking patterns that the earlier piecemeal results had missed. The name captures the striking fact that one number governs chords, secants, and tangents alike.
