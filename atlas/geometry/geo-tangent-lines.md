Rest a straightedge against the rim of a coin so it grazes the coin at a single point and no more. Draw
the radius out to that grazing point. The straightedge and the radius always meet in a perfect square
corner — try it at any point of the coin and the right angle appears every time. And if you sight two
such grazing lines from one spot off to the side, the two touch-lines coming from your eye are always
exactly the same length. Why must a grazing line stand square to the radius, and why do the two lines
from an outside point match to the millimeter?

## Discovery

A line meeting a circle at two points is a **secant**; the segment between those points is a chord. A
**tangent** is the borderline case that meets the circle at exactly one point, the **point of
tangency**. The circle has center $O$ and radius $r$.

1. Take a secant that cuts the circle at two points and slowly rotate/slide it so those two crossing
   points drift toward each other. In the limiting instant they merge into a single point — the tangent.
   At that instant, how many points does the line share with the circle?
2. From the center $O$, consider all the segments to points of the tangent line. Every point of the
   tangent except the touch point lies *outside* the circle, hence farther than $r$ from $O$, while the
   touch point is exactly $r$ from $O$. So among all segments from $O$ to the line, the radius to the
   touch point is the **shortest**. Recall what is always true of the shortest segment from a point to a
   line — what angle must it make with the line? Conclude the angle between the radius and the tangent.
3. Now stand at an external point $P$ and draw a tangent touching at $T$. Using the right angle from
   step 2, name the right triangle $\triangle OTP$ and identify its hypotenuse. If $OP = d$ and the
   radius is $r$, write the tangent length $PT$ using the Pythagorean Theorem.
4. From the same external point $P$ there is a *second* tangent, touching at a different point $T'$.
   Compare the two right triangles $\triangle OTP$ and $\triangle OT'P$: they share the hypotenuse
   $\overline{OP}$, and $OT = OT' = r$. What does that force about the lengths $PT$ and $PT'$? State the
   congruence criterion you used.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let a circle have center $O$ and radius $r$.

- **Radius–tangent perpendicularity.** A tangent line is perpendicular to the radius drawn to the point
  of tangency: if the tangent touches at $T$, then $\overline{OT} \perp$ (tangent line). Conversely, the
  line through $T$ perpendicular to $\overline{OT}$ is tangent there.
- **Tangent length.** From an external point $P$ at distance $d = OP$ from the center, the length of a
  tangent segment to the circle is
  $$PT = \sqrt{d^2 - r^2}.$$
- **Two Tangents Theorem.** The two tangent segments drawn from an external point $P$ to a circle are
  equal in length: $PT = PT'$ (and $\overline{OP}$ bisects the angle between them).

### Proof

Let the circle have center $O$, radius $r$, and let a tangent line $\ell$ touch it at $T$.

**Perpendicularity.** Every point of $\ell$ other than $T$ lies outside the circle (a tangent meets the
circle only at $T$), hence is at distance greater than $r$ from $O$, while $OT = r$. So $\overline{OT}$
is the shortest segment from $O$ to any point of $\ell$. The shortest segment from a point to a line is
the perpendicular one: if the foot of the perpendicular from $O$ to $\ell$ were a point $F \ne T$, then
$\triangle OFT$ would be right-angled at $F$ with hypotenuse $\overline{OT}$, forcing $OF \lt OT = r$ and
placing $F$ inside the circle — impossible, since $F$ lies on $\ell$ and every point of $\ell$ but $T$ is
outside. Hence the foot is $T$ itself, and $\overline{OT} \perp \ell$. Conversely, if a line through $T$
is perpendicular to $\overline{OT}$, then for any other point $X$ on it $\triangle OTX$ is right-angled at
$T$, so $OX \gt OT = r$ and $X$ is outside the circle; the line meets the circle only at $T$ and is
tangent.

**Tangent length.** Let $P$ be external, $OP = d \gt r$, with tangent touching at $T$. By
perpendicularity $\angle OTP = 90^\circ$, so $\triangle OTP$ is right-angled at $T$ with hypotenuse
$\overline{OP}$ (the side opposite the right angle) and legs $OT = r$, $PT$. The Pythagorean Theorem
gives $OT^2 + PT^2 = OP^2$, i.e. $r^2 + PT^2 = d^2$, so
$$PT = \sqrt{d^2 - r^2}$$
(the radicand is positive because $d \gt r$).

**Two tangents equal.** Let the two tangents from $P$ touch at $T$ and $T'$. Both $\triangle OTP$ and
$\triangle OT'P$ are right-angled (at $T$ and $T'$ respectively), share the hypotenuse $\overline{OP}$,
and have legs $OT = OT' = r$. Two right triangles with equal hypotenuse and one equal leg are congruent
by the Hypotenuse–Leg (HL) criterion, so $\triangle OTP \cong \triangle OT'P$. By corresponding parts,
$PT = PT'$ and $\angle TPO = \angle T'PO$, the latter saying $\overline{OP}$ bisects the angle between the
two tangents. $\blacksquare$

### Worked Instance

An external point $P$ sits at distance $d = 13$ from the center of a circle of radius $r = 5$. The tangent
length is
$$PT = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12.$$
So each tangent from $P$ grazes the circle $12$ units away — and because the two tangents from $P$ are
equal, the second one is also exactly $12$. The right triangle $\triangle OTP$ is the familiar
$5$-$12$-$13$ triangle, standing on the radius $\overline{OT}$ that meets the tangent squarely, exactly as
the Hook's grazing straightedge met the coin's radius.

### Pitfalls

- **Perpendicular only *at* the point of contact.** The tangent is perpendicular to the radius drawn to
  the touch point $T$, not to any other radius. Pairing the tangent with the wrong radius destroys the
  right angle.
- **The two tangents are equal — not "tangent equals radius."** From an external point, $PT = PT'$; this
  says nothing about $r$. Do not confuse the equal *tangent* segments with the radius.
- **Hypotenuse is $OP$, not the tangent.** In $\triangle OTP$ the right angle is at $T$, so the
  hypotenuse is $\overline{OP}$ (opposite the right angle). The tangent length is a *leg*:
  $PT = \sqrt{d^2 - r^2}$, subtracting, never $\sqrt{d^2 + r^2}$.
- **Tangent touches, secant crosses.** A tangent meets the circle at one point; a secant at two. An
  external point admits tangents only when $d \gt r$; if $d = r$ the point is on the circle, and if
  $d \lt r$ it is inside, with no tangent through it.

:::
:::

## Connections

Tangent lines mark the boundary between secants (two crossings) and misses (none), and the right angle
they force with the radius is the workhorse. The perpendicularity leans on the shortest-distance idea and
turns, via the Pythagorean Theorem (`geo-pythagorean-theorem`), into the tangent length
$\sqrt{d^2 - r^2}$; the right angle is exactly the Thales configuration lurking in `geo-inscribed-angles`
(a tangent is the limit of a secant, and its perpendicular radius the limit of a diameter's inscribed
right angle). The equal-tangents fact seeds the tangent case of the Power of a Point
(`geo-power-of-a-point-elem`), where $PT^2 = PA\cdot PB$. Recognition trigger: a line grazing a circle, a
belt or road tangent to a circular arc, or "the length from an outside point to where it just touches" —
draw the radius to the touch point and put a right angle there.

## History

That a tangent meets a circle's radius at a right angle, and that the two tangents drawn from an external point have equal length, are theorems from Book III of Euclid's *Elements* (Propositions 16 through 18, c. 300 BCE). Euclid defined a tangent as a line touching the circle without crossing it and deduced its perpendicularity to the radius as a cornerstone of circle geometry. The Greeks pursued tangency because it governed constructions and the study of how curves touch — a driving question soon extended by Apollonius of Perga (c. 200 BCE), whose *Conics* carried tangent ideas to the ellipse, parabola, and hyperbola. The equal-tangent-length fact still underlies inscribed-circle constructions taught today.
