Draw a right triangle. From the right-angle corner, run a single segment to the **midpoint of the
hypotenuse** and measure it. Now measure the hypotenuse and halve it. The two numbers agree — exactly. Try a
tall skinny right triangle, then a squat one: still exact, every time. The figure as drawn offers no hint
why the corner should sit at precisely half the hypotenuse's length from its midpoint. Stare at the three
given segments as long as you like and nothing moves. The picture is missing something.

## Discovery

Let $\triangle ABC$ have its right angle at $C$, hypotenuse $AB$, and let $M$ be the midpoint of $AB$. We
want to understand the segment $CM$.

1. The three sides you were given lead nowhere on their own. So *add* to the figure. The right angle at $C$
   is one corner of a would-be rectangle. Draw the two segments needed to complete $\triangle ABC$ into a
   rectangle: one parallel to $CA$ through $B$, one parallel to $CB$ through $A$. Name the new fourth corner
   $D$. Which four points are the rectangle's vertices, and which two segments are its diagonals?
2. In your rectangle, one diagonal is the original hypotenuse $AB$; the other is the new segment $CD$. Recall
   what is true of the two diagonals of a rectangle — how their lengths compare, and where they cross. State
   both properties.
3. The point where the diagonals cross lies on $AB$. Using step 2, identify exactly which point of $AB$ it
   is. How does it relate to $M$, and how does it relate to the segment $CD$?
4. Put the pieces together: express $CM$ as a fraction of $CD$ using where the crossing point sits on $CD$,
   then replace $CD$ by $AB$ using the equal-diagonals fact. What does $CM$ come out to, in terms of $AB$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The technique — the auxiliary line.** When a figure as drawn gives no foothold, *add* a well-chosen
segment: an altitude, a parallel, a diagonal, an extension of a side, or a segment to a midpoint. The right
extra line manufactures new congruent or similar triangles, or new equal angles, that were invisible before —
turning a stuck problem into a routine one. The art is choosing *which* line, and the guide is: draw the line
that completes a familiar figure (a rectangle, an isosceles triangle, a parallelogram) or that creates a
triangle you can prove congruent to another.

**The lemma it unlocked here.** In a right triangle, the **median to the hypotenuse equals half the
hypotenuse**: with the right angle at $C$, hypotenuse $AB$, and $M$ the midpoint of $AB$,
$$CM=\tfrac12\,AB.$$
Equivalently, the midpoint of the hypotenuse is equidistant from all three vertices, $MA=MB=MC$ — so a right
triangle's hypotenuse is a diameter of a circle through all three vertices.

### Proof

Complete $\triangle ABC$ (right angle at $C$) to the rectangle $ACBD$: draw through $A$ the line parallel to
$CB$ and through $B$ the line parallel to $CA$; they meet at a point $D$, and the quadrilateral with vertices
in order $A,C,B,D$ has right angles at all four corners with $CA=BD$ and $CB=AD$ (opposite sides of a
rectangle). Its diagonals are $AB$ (the hypotenuse) and $CD$. Let them meet at $P$.

**The diagonals are equal.** Compare $\triangle ACB$ and $\triangle DBC$. In $\triangle ACB$ the right angle
is at $C$, with legs $CA$ and $CB$ and hypotenuse $AB$. In $\triangle DBC$ the right angle is at $B$ (a corner
of the rectangle), with legs $BD=CA$ and $BC$ and hypotenuse $CD$. The two triangles have leg $=CA$, an
included right angle, and the shared leg $CB$ — so by SAS they are congruent (`geo-congruence-def`), and by
CPCTC their hypotenuses are equal: $AB=CD$.

**The diagonals bisect each other.** Opposite sides $CA$ and $BD$ are parallel and equal. Consider
$\triangle PCA$ and $\triangle PDB$, where $P$ is the intersection of the diagonals. Since $CA\parallel BD$,
the transversal $AB$ makes $\angle PAC=\angle PBD$ and the transversal $CD$ makes $\angle PCA=\angle PDB$
(alternate interior angles); and $CA=BD$. By ASA, $\triangle PCA\cong\triangle PDB$, so $PA=PB$ and $PC=PD$.
Thus $P$ is the midpoint of *both* diagonals. In particular $P$ is the midpoint of $AB$, which is $M$; and
$P=M$ is the midpoint of $CD$.

**Conclusion.** Since $M$ is the midpoint of $CD$, $CM=\tfrac12\,CD$. Since $CD=AB$,
$$CM=\tfrac12\,CD=\tfrac12\,AB.$$
And because $M$ is the midpoint of $AB$, $MA=MB=\tfrac12\,AB=CM$, so $M$ is equidistant from $A,B,C$.
$\blacksquare$

### Worked Instance

The same move — add a segment to create congruent triangles — cracks a different classic: **the base angles
of an isosceles triangle are equal.** Let $\triangle ABC$ have $AB=AC$; we must show $\angle B=\angle C$. As
drawn, the two base angles are just... there, with no bridge between them. Add the auxiliary line: draw the
median from the apex $A$ to the midpoint $M$ of the base $BC$.

This splits $\triangle ABC$ into $\triangle ABM$ and $\triangle ACM$. Now
$$AB=AC\ (\text{given}),\qquad BM=CM\ (M\text{ is the midpoint}),\qquad AM=AM\ (\text{shared}),$$
so $\triangle ABM\cong\triangle ACM$ by SSS. By CPCTC the corresponding angles at $B$ and $C$ are equal:
$\angle B=\angle C$. One segment, drawn to a midpoint, produced two congruent halves and the result fell out.
(The same altitude, viewed as the perpendicular from $A$, would give it by SAS instead — either extra line
works.)

### Pitfalls

- **Do not draw a line that assumes the conclusion.** If you must prove two segments equal, you may *not*
  begin "draw the point $M$ so that $MA=MB=MC$" — that smuggles in what you are trying to show. Introduce the
  line by an unambiguous rule (a midpoint, a perpendicular, a parallel) and *derive* the equality.
- **A single line cannot satisfy incompatible demands.** You may not order up one segment that is "both
  perpendicular to $BC$ *and* passes through two other given points" unless you have checked such a segment
  can exist. Over-specifying an auxiliary line — perpendicular here, through there, bisecting a third thing —
  usually describes a line that isn't there. Impose only conditions a real line can meet, then prove the rest.
- **Add the fewest lines that do the job.** Each extra segment multiplies the figure's clutter. Aim for the
  one line (or two) that completes a familiar figure or produces a provable congruence, not a thicket of
  constructions you cannot control.
- **Justify that the completed figure is what you claim.** "Complete to a rectangle" earns its right angles
  and equal sides only because the added lines were drawn *parallel* to the legs; state that, don't assume it.

:::
:::

## Connections

This technique rests on the deductive discipline of `geo-proof-intro` (every added line still owes a
justification) and on `geo-congruence-def`/CPCTC (the congruent triangles the extra line creates are how you
harvest equal parts). The auxiliary line is the single most common move in olympiad and AMC geometry: the
median-to-hypotenuse lemma proved here reappears whenever a right angle and a midpoint sit together, and the
"complete the figure" idea drives countless constructions — dropping an altitude for area or the Pythagorean
theorem, drawing a diagonal to split a quadrilateral, extending a side to build a parallel. Recognition
trigger: the given figure "has nothing in it," a midpoint or right angle begs to be joined to something, or a
proof needs two far-apart parts to become corresponding parts of one pair of congruent triangles.

## History

Adding a well-chosen auxiliary line to a figure is less a theorem than a method, and it is as old as Greek geometry itself: Euclid's *Elements* (c. 300 BCE) repeatedly draws extra segments — dropping a perpendicular, joining two points, extending a side — to unlock a proof. The technique embodies the constructive spirit of classical geometry, in which the diagram is not fixed but built up as the reasoning demands. In the 20th century the mathematician George Pólya, in *How to Solve It*, elevated such moves into a general problem-solving heuristic, urging students to introduce auxiliary elements that connect the known to the unknown. The art lies in seeing which invisible line makes hidden congruences or parallels suddenly appear.
