Pin two nails $A$ and $B$ into a circular tabletop and a third nail $P$ anywhere on the rim. Sight the
angle $\angle APB$ that the two fixed nails subtend at your eye $P$. Now slide $P$ all the way around the
rim on the same side and keep re-measuring. The angle never budges — every vantage point on that arc
sees $A$ and $B$ at the identical opening. Meanwhile an observer standing at the *center* sees them at a
wider angle. What ties the rim-angle to the center-angle, and why does moving along the arc leave the
rim-angle frozen?

## Discovery

Call the angle at the center $O$ subtending chord $\overline{AB}$ the **central angle**
$\angle AOB$; define the **measure of arc** $AB$ to be that central angle. An angle $\angle APB$ with
its vertex $P$ *on* the circle, subtending the same arc, is an **inscribed angle**. All of $O$, $A$,
$B$, $P$ lie on the circle of radius $r$, so $OA = OB = OP = r$.

1. Start with the friendly special case: place $P$ so that one side of the inscribed angle, say
   $\overline{PB}$, runs straight through the center — i.e. $\overline{PB}$ is a diameter, and $O$ lies
   on side $PB$. Look at triangle $\triangle OPA$. Which two of its sides are equal, and what does that
   force about its two base angles $\angle OPA$ and $\angle OAP$?
2. In that same triangle, $\angle AOB$ is the angle at $O$ measured on the *other* side of $O$ from
   $\angle AOP$ — it is exterior to $\triangle OPA$ at vertex $O$, along the straight line $POB$. Using
   that a straight angle at $O$ is $180^\circ$, or the exterior-angle relation, write $\angle AOB$ in
   terms of the two equal base angles from step 1. Then compare $\angle AOB$ with the single inscribed
   angle $\angle OPA = \angle APB$.
3. You now have the special case (one side a diameter). For the general position of $P$, draw the
   diameter *through $P$*, from $P$ through $O$ to the far point $D$ of the circle. This splits the
   inscribed angle $\angle APB$ into $\angle APD$ and $\angle DPB$, and splits the central angle
   $\angle AOB$ into $\angle AOD$ and $\angle DOB$. If the diameter $\overline{PD}$ falls *between* rays
   $\overline{PA}$ and $\overline{PB}$, apply step 2's finding to each half separately, then add. What
   relation between $\angle APB$ and $\angle AOB$ results?
4. Handle the remaining picture: when the diameter $\overline{PD}$ falls *outside* the angle (both $A$
   and $B$ on the same side of line $PD$), you must *subtract* the two halves instead of adding them.
   Redo step 3 with a subtraction and confirm you reach the same relation.
5. Push one consequence out. Let $\overline{AB}$ itself be a diameter, so the central angle
   $\angle AOB$ is a straight angle, $180^\circ$. What does the relation from step 3 then say about
   *every* inscribed angle $\angle APB$ standing on a diameter?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The Inscribed Angle Theorem.** An inscribed angle is half the central angle subtending the same arc.
Equivalently, an inscribed angle equals half the measure of its intercepted arc:
$$\angle APB = \tfrac12\,\angle AOB = \tfrac12\,(\text{arc } AB).$$

Two corollaries fall straight out:

- **Same arc, same angle.** All inscribed angles subtending the same arc are equal (each is half that
  arc), which is why the sliding nail $P$ never changed the opening.
- **Thales' Theorem.** An angle inscribed in a semicircle is a right angle: if $\overline{AB}$ is a
  diameter and $P$ is any other point of the circle, then $\angle APB = 90^\circ$ (half of the
  straight-angle arc $180^\circ$).

Here "arc $AB$" means the arc *not* containing $P$ (the one the angle opens onto); its measure is its
central angle.

### Proof

Let the circle have center $O$ and radius $r$, with inscribed angle $\angle APB$ subtending arc $AB$
(the arc away from $P$). Since $OA = OP = r$, triangle $\triangle OAP$ is isosceles, and likewise
$\triangle OBP$; by the Isosceles Triangle Theorem their base angles are equal. Three cases cover every
position of $P$ relative to the center.

**Case 1: $O$ lies on a side of the angle (one side is a diameter).** Say $O$ lies on
$\overline{PB}$, so $\overline{PB}$ is a diameter. In isosceles $\triangle OAP$, $\angle OPA =
\angle OAP$; call each $\beta$, so $\angle APB = \beta$. The angle $\angle AOB$ and the angle
$\angle AOP$ are supplementary along the straight line $POB$, so $\angle AOP = 180^\circ - \angle AOB$.
The angles of $\triangle OAP$ sum to $180^\circ$:
$$\angle AOP + \beta + \beta = 180^\circ \implies (180^\circ - \angle AOB) + 2\beta = 180^\circ
\implies \angle AOB = 2\beta.$$
Hence $\angle APB = \beta = \tfrac12\,\angle AOB$. (Equivalently, $\angle AOB$ is the exterior angle of
$\triangle OAP$ at $O$, equal to the sum $\beta + \beta$ of the two remote interior angles.)

**Case 2: $O$ lies inside the angle.** Draw the diameter from $P$ through $O$ to the opposite point $D$.
Ray $\overline{PD}$ lies between $\overline{PA}$ and $\overline{PB}$, splitting the angle:
$\angle APB = \angle APD + \angle DPB$. Each piece has one side through the center $D$–line, so Case 1
applies to each: $\angle APD = \tfrac12\,\angle AOD$ and $\angle DPB = \tfrac12\,\angle DOB$. Since
$\overline{PD}$ also lies between $\overline{OA}$ and $\overline{OB}$, we have
$\angle AOB = \angle AOD + \angle DOB$ by the Angle Addition Postulate. Adding,
$$\angle APB = \tfrac12\,\angle AOD + \tfrac12\,\angle DOB = \tfrac12(\angle AOD + \angle DOB)
= \tfrac12\,\angle AOB.$$

**Case 3: $O$ lies outside the angle.** Again draw the diameter $\overline{PD}$. Now $\overline{PD}$
lies *outside* $\angle APB$: both $A$ and $B$ are on the same side of line $PD$, so one of the two
sub-angles contains the other, and
$\angle APB = \angle DPB - \angle DPA$ (taking $\overline{PA}$ between $\overline{PD}$ and
$\overline{PB}$). By Case 1, $\angle DPB = \tfrac12\,\angle DOB$ and $\angle DPA = \tfrac12\,\angle DOA$,
while correspondingly $\angle AOB = \angle DOB - \angle DOA$. Subtracting,
$$\angle APB = \tfrac12\,\angle DOB - \tfrac12\,\angle DOA = \tfrac12(\angle DOB - \angle DOA)
= \tfrac12\,\angle AOB.$$

In all three cases $\angle APB = \tfrac12\,\angle AOB$, i.e. half the intercepted arc. The corollaries
follow: any two inscribed angles on the same arc equal half the one central angle, hence each other; and
if $\overline{AB}$ is a diameter then $\angle AOB = 180^\circ$, so $\angle APB = 90^\circ$. $\blacksquare$

### Worked Instance

Suppose the central angle $\angle AOB = 100^\circ$, so arc $AB$ measures $100^\circ$. Every point $P$ on
the far arc sees
$$\angle APB = \tfrac12\cdot 100^\circ = 50^\circ,$$
and the value is the same for all such $P$ — the frozen angle of the Hook.

**Thales in action.** Let $\overline{AB}$ be a diameter of a circle and $P$ any other point on it. Then
$\angle APB = \tfrac12\cdot 180^\circ = 90^\circ$: the triangle $\triangle APB$ is right-angled at $P$.
So if you want a right angle at a movable point, put its two rays through the ends of a diameter — a
carpenter's trick for testing right angles.

### Pitfalls

- **"Same arc" is required.** Two inscribed angles are equal only when they subtend the *same* arc.
  Angles standing on the two *different* arcs cut by a chord are supplementary, not equal.
- **Factor of two, and which way.** The inscribed angle is *half* the central angle: inscribed
  $= \tfrac12\,$central, so central $= 2\times$inscribed. Halving when you should double (or the reverse)
  is the classic slip.
- **The vertex must be ON the circle.** The theorem measures angles whose vertex sits on the circle. A
  vertex inside or outside obeys different rules (the half-sum / half-difference laws come later).
- **Major vs. minor arc.** The intercepted arc is the one the angle *opens onto* — the arc not
  containing the vertex. Reading the other arc's measure gives the supplement's double; always take the
  arc the angle faces.

:::
:::

## Connections

This theorem is the hinge of circle geometry, built from two earlier tools: equal radii make the key
triangles isosceles (`geo-isosceles-triangle`), and the counting of angles runs on degree measure and
angle addition (`geo-angle-measure`). Its half-arc principle powers everything about angles meeting a
circle: chords, secants, and tangents that cross inside, outside, or on the circle
(`geo-angles-in-circles`); the perpendicularity of a tangent, reached through the right angle it forces
(`geo-tangent-lines`); and the similar triangles behind the Power of a Point
(`geo-power-of-a-point-elem`). Recognition trigger: a vertex on a circle, a "moving point that sees a
fixed chord," or a right angle you want to conjure — draw a diameter and reach for the half-arc rule.

## History

The special case that an angle inscribed in a semicircle is a right angle is traditionally credited to Thales of Miletus (c. 600 BCE), among the earliest named results in Greek mathematics. The general inscribed-angle theorem — that an inscribed angle is half the central angle subtending the same arc — appears as Proposition 20 in Book III of Euclid's *Elements* (c. 300 BCE), which organized circle geometry into rigorous deductive form. These geometers were motivated by building all of plane geometry from a small set of axioms, and circles were central to Greek compass-and-straightedge constructions. The theorem's power is that it converts a fact about one fixed center into a fact about *every* point on the arc, a leverage later geometers returned to again and again.
