Bisect the top angle of a triangle and let the bisecting ray shoot down to the far side, splitting
it into two pieces. When the two upper sides are unequal, the two pieces come out unequal too — yet
they are not random. Their lengths are locked, in a fixed proportion, to something you already knew
about the triangle before you drew a single line. What decides how the far side gets shared?

## Discovery

The **bisector** of an angle is the ray from the vertex that splits it into two equal angles. Two
threads run through this node: how the bisector sits relative to the two *arms* of the angle, and
how it cuts the *opposite side* of a triangle.

1. Draw an angle with vertex $O$ and two arms. Put a point $P$ on the bisecting ray, and drop the
   perpendicular from $P$ to each arm, with feet $X$ and $Y$. Look at right triangles
   $\triangle OXP$ and $\triangle OYP$: which angle at $O$ do they share (and why), which angles are
   right, and which side is common to both? Name the congruence criterion, then read off what it
   says about the two distances $PX$ and $PY$.
2. Reverse it. Take a point $Q$ *inside* the angle whose perpendicular distances to the two arms are
   equal, $QX' = QY'$. Compare the two right triangles again — a shared hypotenuse $OQ$, a right
   angle each, and the equal legs. What congruence lets you conclude, and what does it say about the
   two angles at $O$: is $OQ$ the bisector?
3. Combine steps 1 and 2 into a single *if and only if*: which points inside an angle are
   equidistant from its two arms?
4. Now a triangle $ABC$. A point on the bisector of $\angle A$ is equidistant from which two sides?
   A point on the bisector of $\angle B$ is equidistant from which two? If one point lies on both
   bisectors, list its distances to all three sides — and decide whether it must lie on the bisector
   of $\angle C$ too.
5. Switch to the far-side question. In $\triangle ABC$ let the bisector of $\angle A$ meet
   $\overline{BC}$ at $D$. For a concrete triangle with $AB \ne AC$, measure $BD$ and $DC$, form the
   ratio $\tfrac{BD}{DC}$, and compare it with $\tfrac{AB}{AC}$. Conjecture the relationship. (To
   prove your guess, try drawing through $C$ the line parallel to the bisector $AD$, meeting line
   $AB$ at a point $E$, and go hunting for equal angles.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Angle Bisector Locus Theorem.** A point inside an angle is equidistant from the two arms (sides)
of the angle *if and only if* it lies on the angle's bisector. (Distance to an arm means the
*perpendicular* distance.)

**Corollary (the incenter).** The three angle bisectors of a triangle $ABC$ meet at a single point
$I$, the **incenter**. It is equidistant from all three sides, so it is the center of the unique
circle tangent to all three sides from inside (the **inscribed circle**), whose radius is that
common distance.

**Angle Bisector Theorem.** In $\triangle ABC$, the bisector of $\angle A$ meets $\overline{BC}$ at
a point $D$ that divides the opposite side in the ratio of the two adjacent sides:
$$\frac{BD}{DC} = \frac{AB}{AC}.$$

### Proof

**Locus, on the bisector $\Rightarrow$ equidistant.** Let $P$ be on the bisector of the angle at
$O$, with $X$, $Y$ the feet of the perpendiculars to the two arms. In $\triangle OXP$ and
$\triangle OYP$: $\angle XOP = \angle YOP$ (bisector), $\angle OXP = \angle OYP = 90^\circ$, and
$OP$ is common. Two angles and a non-included side match, so by AAS $\triangle OXP \cong
\triangle OYP$, giving $PX = PY$.

**Locus, equidistant $\Rightarrow$ on the bisector.** Suppose $Q$ inside the angle has $QX = QY$
(feet $X$, $Y$ on the two arms), with right angles at $X$ and $Y$. The right triangles $\triangle
OXQ$ and $\triangle OYQ$ share the hypotenuse $OQ$ and have equal legs $QX = QY$; by the
Pythagorean relation the remaining legs satisfy $OX = \sqrt{OQ^2 - QX^2} = \sqrt{OQ^2 - QY^2} = OY$,
so all three sides match and $\triangle OXQ \cong \triangle OYQ$ (SSS, or HL directly). Hence
$\angle XOQ = \angle YOQ$, so $OQ$ bisects the angle. The two directions give the *iff*.

**Incenter.** The bisectors of $\angle A$ and $\angle B$ meet at a point $I$ (they are not parallel,
lying inside the triangle). Since $I$ is on the bisector of $\angle A$, its distances to sides $AB$
and $AC$ are equal; since $I$ is on the bisector of $\angle B$, its distances to $AB$ and $BC$ are
equal. Chaining these, the distances to $AC$ and $BC$ are equal, so by the locus theorem $I$ lies on
the bisector of $\angle C$ as well. All three bisectors pass through $I$, whose common distance to
the three sides is the inradius.

**Angle Bisector Theorem.** Let $AD$ bisect $\angle A$ with $D$ on $\overline{BC}$. Through $C$ draw
the line parallel to $AD$, meeting line $AB$ (extended beyond $A$) at $E$. Because $AD \parallel CE$:
- with transversal $BE$, the angles $\angle BAD$ and $\angle AEC$ are corresponding, so
  $\angle BAD = \angle AEC$;
- with transversal $AC$, the angles $\angle DAC$ and $\angle ACE$ are alternate interior, so
  $\angle DAC = \angle ACE$.

Since $AD$ bisects $\angle A$, we have $\angle BAD = \angle DAC$, hence $\angle AEC = \angle ACE$.
A triangle with two equal base angles is isosceles, so $\triangle ACE$ has $AE = AC$. Now in
$\triangle BCE$ the line $AD$ is parallel to side $CE$ and cuts side $BE$ at $A$ and side $BC$ at
$D$; by the Basic Proportionality (Thales) Theorem,
$$\frac{BD}{DC} = \frac{BA}{AE}.$$
Substituting $AE = AC$ gives $\dfrac{BD}{DC} = \dfrac{AB}{AC}$. $\blacksquare$

### Worked Instance

Resolve the Hook. Take $\triangle ABC$ with $AB = 6$, $AC = 4$, and base $BC = 7$ (a genuine
triangle, since $6 + 4 \gt 7$). The bisector of $\angle A$ hits $\overline{BC}$ at $D$. By the Angle
Bisector Theorem,
$$\frac{BD}{DC} = \frac{AB}{AC} = \frac{6}{4} = \frac{3}{2}.$$
So $BD$ and $DC$ are in ratio $3:2$ and together make $7$. Writing $BD = 3t$, $DC = 2t$ gives
$5t = 7$, so $t = 1.4$, hence
$$BD = 3(1.4) = 4.2, \qquad DC = 2(1.4) = 2.8.$$
The longer piece $BD = 4.2$ sits against the longer adjacent side $AB = 6$ — exactly the "locking"
the Hook promised: the split is dictated by the ratio $6:4$ of the sides meeting at $A$.

### Pitfalls

- **Match the piece to the near side.** The bisector theorem reads $\tfrac{BD}{DC} = \tfrac{AB}{AC}$
  — the piece $BD$ *touching* $B$ pairs with side $AB$ *ending at* $B$. Flipping one ratio inverts
  the answer.
- **Distance means perpendicular distance.** "Equidistant from the two sides of an angle" is about
  the perpendicular drops to each arm, not slant distances or distances to a vertex.
- **The incenter is always inside.** Unlike the circumcenter, the incenter never leaves the
  triangle — it is the point at positive equal distance from all three sides. Do not confuse it with
  the circumcenter (perpendicular bisectors, equidistant from *vertices*).
- **A bisector is not a median.** The angle bisector of $\angle A$ splits $\overline{BC}$ in the
  ratio $AB:AC$, which equals $1{:}1$ (a true bisection of the side) only when $AB = AC$.
- **Internal versus external bisector.** The theorem as stated is for the *internal* bisector; the
  external bisector of $\angle A$ divides $\overline{BC}$ *externally* in the same ratio.

:::
:::

## Connections

This node uses `geo-angle-measure` (equal angles, right angles, the parallel-line angle relations)
and `geo-similarity-def` (the Basic Proportionality Theorem that converts a parallel cut into the
final ratio). It is the twin of `geo-perpendicular-bisector`: swap "equidistant from two *points*"
for "equidistant from two *lines*," and the circumcenter becomes the incenter. Together with
`geo-medians-centroid` and `geo-altitudes-orthocenter` it completes the four classical centers. The
Angle Bisector Theorem itself is a workhorse in olympiad and AMC problems, often paired with the
Law of Cosines or mass points. Recognition trigger: a bisector cutting the opposite side (think
ratio of adjacent sides), or any demand for a point equidistant from two lines or from all three
sides of a triangle.

## History

Bisecting an angle with compass and straightedge is *Elements* I.9 (c. 300 BC), among the first constructions Euclid teaches, and like the perpendicular bisector it encodes a locus — the set of points equidistant from the two sides of the angle. Euclid returned to angle bisectors in Book VI with the angle-bisector theorem (VI.3), which states that the bisector of a triangle's angle divides the opposite side in the ratio of the adjacent sides, a result built on his theory of proportion. The equidistance property makes the three internal bisectors of a triangle meet at the incenter, the center of the inscribed circle constructed in Book IV. That angles can be bisected but, as the ancient trisection problem showed and Pierre Wantzel proved impossible in 1837, generally cannot be trisected by the same tools, marks the sharp limits of Greek construction. The bisector thus sits at the boundary between what compass and straightedge can and cannot do.
