An inscribed angle, vertex *on* the circle, reads exactly half of one arc. But slide that vertex off the
rim — let two chords cross deep *inside* the circle, or let two lines from a point *outside* cut across
it — and the tidy "half of one arc" breaks. Now two arcs are in play at once. Somehow the angle at the
crossing still only cares about those two arcs, combining them in one fixed way inside and a different
fixed way outside. What are the two rules, and why does merely moving the vertex flip a plus into a
minus?

## Discovery

A **chord** joins two points of a circle; a **secant** is a line through two points of it; a **tangent**
touches at exactly one point. An arc "**intercepted**" by an angle is a piece of the circle caught
between its two sides. Recall the one fact you already own: an inscribed angle (vertex on the circle)
equals half its intercepted arc.

1. **Inside.** Two chords $\overline{AC}$ and $\overline{BD}$ cross at a point $P$ *inside* the circle,
   forming $\angle APB$. Draw the extra chord $\overline{AD}$, making triangle $\triangle APD$. The
   angle $\angle APB$ is exterior to $\triangle APD$ at $P$. Recall that an exterior angle of a triangle
   equals the sum of the two remote interior angles. Name those two remote interior angles $\angle PDA$
   and $\angle PAD$ as *inscribed* angles, and say which arc each one intercepts.
2. Replace each remote angle from step 1 by half of its intercepted arc, then add. Which two arcs appear,
   and is $\angle APB$ half their sum or half their difference?
3. **Outside.** Now two secants leave a point $P$ *outside* the circle, one crossing at $A$ then $B$,
   the other at $C$ then $D$ (with $A$, $C$ the near points, $B$, $D$ the far points). The angle at $P$
   is $\angle APC$. Draw chord $\overline{AD}$ to make triangle $\triangle PAD$. Extend side
   $\overline{PA}$ out to the far point $B$: the angle $\angle BAD$ is then exterior to $\triangle PAD$
   at $A$, so it equals the sum of the two remote interior angles $\angle APD$ (the angle at $P$ you
   want) and $\angle ADP$. Solve that relation for the angle at $P$: is it a sum or a difference of the
   other two angles?
4. Turn the two angles in step 3 (other than the one at $P$) into halves of their intercepted arcs. Which
   two arcs appear, and is $\angle P$ half their sum or half their difference? Compare with step 2.
5. **Tangent meets chord.** Let a tangent touch at $T$ and a chord $\overline{TA}$ leave that same point.
   Imagine the tangent as the limit of a secant $\overline{TB}$ whose second crossing $B$ slides around
   to merge with $T$. As $B \to T$, what single arc does the vanishing secant's angle come to intercept,
   and so what should the tangent–chord angle equal?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let arcs be measured by their central angles. For an angle whose vertex is formed by chords, secants, or
tangents of a circle, its size depends only on the intercepted arcs:

- **Vertex inside (two chords).** The angle equals **half the sum** of the two arcs it and its vertical
  angle intercept:
  $$\angle = \tfrac12(\text{arc}_1 + \text{arc}_2).$$
- **Vertex outside (two secants, two tangents, or a secant and a tangent).** The angle equals **half the
  difference** of the far and near intercepted arcs:
  $$\angle = \tfrac12(\text{arc}_{\text{far}} - \text{arc}_{\text{near}}).$$
- **Vertex on the circle (tangent–chord).** The angle equals **half** its single intercepted arc — the
  same rule as an inscribed angle, extended to the case where one side is a tangent.

The vertex's position — inside, outside, or on the circle — selects the rule (sum, difference, or half of
one arc). The inscribed angle is the boundary case sitting exactly between the sum and difference laws.

### Proof

Throughout, "arc $XY$" denotes the measure (central angle) of the indicated arc, and we use the
Inscribed Angle Theorem: an angle with vertex on the circle equals half its intercepted arc. We also use
that an exterior angle of a triangle equals the sum of the two remote interior angles (a consequence of
the $180^\circ$ angle sum).

**Interior case.** Let chords $\overline{AC}$ and $\overline{BD}$ meet at $P$ inside the circle. Adjoin
chord $\overline{AD}$, forming $\triangle APD$. The angle $\angle APB$ is exterior to $\triangle APD$ at
the vertex $P$ (it is the supplement of $\angle APD$ along line $APC$), so it equals the sum of the two
remote interior angles:
$$\angle APB = \angle PDA + \angle PAD = \angle ADB + \angle DAC.$$
Now $\angle ADB$ is an inscribed angle intercepting arc $AB$, so $\angle ADB = \tfrac12\,\text{arc }AB$;
and $\angle DAC$ is an inscribed angle intercepting arc $DC$, so $\angle DAC = \tfrac12\,\text{arc }DC$.
Therefore
$$\angle APB = \tfrac12\,\text{arc }AB + \tfrac12\,\text{arc }DC = \tfrac12(\text{arc }AB + \text{arc }DC),$$
half the sum of the two arcs intercepted by the vertical pair of angles at $P$.

**Exterior case.** Let two secants from an external point $P$ meet the circle at $A$ (near) and $B$
(far) along one line, and at $C$ (near) and $D$ (far) along the other; the angle at $P$ is $\angle APC$.
The far arc is $BD$ (between the far points) and the near arc is $AC$ (between the near points). Adjoin
chord $\overline{AD}$, forming $\triangle PAD$. Since $P$, $A$, $B$ are collinear in that order, ray
$\overline{AB}$ extends side $\overline{PA}$ beyond $A$, so $\angle BAD$ is the exterior angle of
$\triangle PAD$ at $A$, equal to the sum of the two remote interior angles:
$$\angle BAD = \angle APD + \angle ADP,$$
where $\angle APD = \angle APC$ is the target angle. Solving,
$$\angle APC = \angle BAD - \angle ADP.$$
Now $\angle BAD$ is an inscribed angle with vertex $A$ and sides through $B$ and $D$, intercepting the
far arc $BD$, so $\angle BAD = \tfrac12\,\text{arc }BD$. And $\angle ADP = \angle ADC$ (since $P$, $C$,
$D$ are collinear, ray $\overline{DP}$ contains $C$), an inscribed angle with vertex $D$ and sides
through $A$ and $C$, intercepting the near arc $AC$, so $\angle ADP = \tfrac12\,\text{arc }AC$.
Substituting,
$$\angle APC = \tfrac12\,\text{arc }BD - \tfrac12\,\text{arc }AC = \tfrac12(\text{arc }BD - \text{arc }AC),$$
half the far arc minus the near arc. (The tangent–tangent and secant–tangent versions are identical, with
a tangent point playing the role of two merged intersection points.)

**Tangent–chord case.** Let the tangent touch at $T$ and chord $\overline{TA}$ leave $T$; let $\angle$
be the angle between them on the side of the intercepted arc $TA$. Take a secant $\overline{TB}$ close to
the tangent and let $B$ slide along the circle toward $T$. The chord-pair angle $\angle ATB$ is inscribed
and equals $\tfrac12\,\text{arc }AB$. As $B \to T$, the secant $\overline{TB}$ approaches the tangent line
at $T$, arc $AB$ approaches arc $AT$ (the arc cut off by the chord on that side), and $\angle ATB$
approaches the tangent–chord angle. Passing to the limit,
$$\text{tangent–chord angle} = \tfrac12\,\text{arc }TA. \qquad \blacksquare$$

### Worked Instance

**Inside.** Two chords cross inside a circle; the two arcs intercepted by the pair of vertical angles at
the crossing measure $40^\circ$ and $80^\circ$. The angle at the crossing is
$$\tfrac12(40^\circ + 80^\circ) = \tfrac12\cdot 120^\circ = 60^\circ.$$

**Outside.** Two secants from an external point intercept a far arc of $70^\circ$ and a near arc of
$20^\circ$. The angle at the external vertex is
$$\tfrac12(70^\circ - 20^\circ) = \tfrac12\cdot 50^\circ = 25^\circ.$$
Same two-arc data, opposite combination — the plus became a minus purely because the vertex moved from
inside to outside, exactly the Hook's puzzle.

### Pitfalls

- **Sum inside, difference outside.** Vertex inside the circle: half the *sum*. Vertex outside: half the
  *difference* (far arc minus near arc). Swapping these is the headline error.
- **Pick the right two arcs.** Inside, the two arcs are those intercepted by the angle *and its vertical
  partner* (opposite sides of the crossing). Outside, they are the *far* and *near* arcs both caught
  between the two lines — not any other arcs of the circle.
- **The vertex's location chooses the law.** On the circle: half of one arc (inscribed / tangent–chord).
  Inside: half-sum. Outside: half-difference. Identify where the vertex sits *before* choosing a formula.
- **Difference order.** Outside, subtract the *near* arc from the *far* arc; reversing the order gives a
  negative (impossible) angle and signals you flipped them.

:::
:::

## Connections

Every rule here is the Inscribed Angle Theorem (`geo-inscribed-angles`) applied to a cleverly drawn
auxiliary triangle, with the exterior-angle relation converting one angle into a sum or difference of
inscribed angles. Together the on/inside/outside trichotomy completes the catalogue of angles a circle
can make. It feeds directly into the length relationships of the Power of a Point (`geo-power-of-point`),
where the *same* configurations of chords, secants, and tangents yield equal products of segment lengths.
Recognition trigger: two lines cutting a circle and an angle at their meeting point — locate the vertex
(in, out, or on), find the two intercepted arcs, and apply half-sum, half-difference, or half-of-one.

## History

The half-sum and half-difference rules for angles made by chords, secants, and tangents are direct descendants of Euclid's *Elements*, Book III (c. 300 BCE), which catalogued how lines cutting a circle create angles. Euclid and his Greek successors treated these cases synthetically, without algebra, motivated by the compass-and-straightedge program of classical geometry. The unifying view — that every such angle is half the sum or half the difference of the intercepted arcs — was refined by later commentators and became a fixture of the synthetic-geometry curriculum. The organizing idea is simply the inscribed-angle theorem pushed to its limits, as the vertex slides from inside the circle to its boundary and then outside.
