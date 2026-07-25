Open a laptop from shut to flat. The two panels never change length, and the hinge never
moves — yet something plainly *grows* as you lift the lid. Whatever that growing quantity is,
it depends on the two panels and the hinge but on nothing about how long the panels are. What
exactly is changing?

## Discovery

You have rays: an object with one endpoint that runs off forever in a chosen direction.

1. Two rays share a single common endpoint. Sketch three different ways they can be arranged:
   nearly folded on top of each other, spread to a wide "V," and swung right around to point
   opposite ways. In each picture, name what the two rays have in common and what makes the
   pictures *different* from one another. Which shared piece never moves?
2. In your wide-"V" picture, grab one ray and shrink it — imagine sliding its far end inward
   so the ray covers less page (pretend, for a moment, it were only a short segment). Does the
   *spread* between the two rays change? What does this tell you the figure "remembers" about
   the rays and what it *ignores*?
3. Stand on the common endpoint and rotate to face along the first ray, then turn until you
   face along the second. Two different arrangements from step 1 required different *amounts of
   turning* to get from one ray to the other. Describe that "amount of turning" as the thing
   the figure is really capturing — without yet attaching any number to it.
4. Your "V" cuts the plane into two regions: the pocket the turn sweeps *through*, and
   everything else. Give a test that decides, for a point in the plane, which region it is in.
   (Hint: think about whether a short walk from the point can reach *both* rays without
   crossing either.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **angle** is the figure formed by two rays that share a common endpoint. The shared
endpoint is the **vertex**; the two rays are the **sides**. We write the angle with the vertex
letter in the middle: $\angle ABC$ has vertex $B$, with sides $\overrightarrow{BA}$ and
$\overrightarrow{BC}$; when no confusion is possible it may be abbreviated $\angle B$.

Because the sides are *rays*, an angle depends only on the vertex and the two directions —
**not** on any length. Sliding a point along a side, or replacing a side by a longer or shorter
ray in the same direction, leaves the angle unchanged. Intuitively an angle records the
**amount of turning** needed to rotate one side about the vertex until it lies along the other;
this "amount of turning" is what the next node will pin down with a number (its *measure*).

An angle (whose sides are not opposite rays) separates the rest of the plane into two regions:
the **interior**, the region swept between the sides, and the **exterior**, everything else. A
point $P$ is in the interior when it lies on the near side of *both* sides — it can be joined to
a point of each side by a short path that crosses neither side.

### Proof

An angle is a *definition*, so what we establish is that the definition is well-posed — that
the naming and the interior/exterior split are unambiguous.

**Naming is well-defined.** The symbol $\angle ABC$ refers to the pair of rays
$\overrightarrow{BA}$, $\overrightarrow{BC}$. A ray is determined by its endpoint together with
any second point on it (from the ray's definition), so $A$ may be *any* point of the first side
other than $B$, and $C$ any point of the second side other than $B$: different such choices name
the *same* two rays, hence the same angle. This is exactly why length is irrelevant — the label
only fixes the vertex and the two directions. The middle letter must be the vertex, since it is
the one point both sides share. $\blacksquare$

**The interior is a genuine region, independent of point choice.** Take the two sides
$\overrightarrow{BA}$ and $\overrightarrow{BC}$, not opposite rays. Each side lies on a full line
through $B$; each such line splits the plane into two half-planes. The interior is the
intersection of the half-plane (of line $\overleftrightarrow{BA}$) that contains $C$ with the
half-plane (of line $\overleftrightarrow{BC}$) that contains $A$. This intersection is defined
purely by the two lines and the sides' directions, not by *which* points $A,C$ were chosen along
them (any other choice lies in the same half-planes), so the interior is well-defined. A point in
it can reach both sides without crossing either — matching the walking test — while any exterior
point fails at least one half-plane condition. $\blacksquare$

### Worked Instance

The laptop. The hinge is the vertex $B$; the two panels point along the sides
$\overrightarrow{BA}$ (screen) and $\overrightarrow{BC}$ (keyboard). Closing the lid brings the
screen's direction toward the keyboard's — a *small* turn, a narrow angle; opening it flat swings
the screen almost opposite the keyboard — a *large* turn, a wide angle. The panel lengths never
enter: a tablet with the same hinge and the same lid-tilt has the *same* angle though its panels
are smaller, because $\angle ABC$ depends only on the vertex and the two directions. The growing
quantity from the Hook is precisely the angle — the amount of turning at the hinge — and the next
node gives it a number so "narrow" and "wide" become $30^\circ$ and $170^\circ$.

### Pitfalls

- **Angle size does not depend on side length.** Drawing the rays longer does not make
  $\angle ABC$ "bigger." Only the directions and vertex matter; length is exactly what the
  ray-definition throws away.
- **The middle letter is the vertex.** $\angle ABC$ has vertex $B$, not $A$ or $C$. Writing
  $\angle BAC$ names a *different* angle (vertex $A$). Get the middle letter wrong and you have
  named the wrong figure.
- **$\angle B$ is only safe when unambiguous.** If several angles share vertex $B$, the
  one-letter name is undefined; use three letters to say which two rays you mean.
- **Sides are rays, not segments.** A drawn angle shows short strokes, but the sides extend
  without end; the interior likewise stretches out unboundedly between them.
- **No measure yet.** "Amount of turning" is the *idea*; this node deliberately attaches no
  degrees. Do not smuggle in "$90^\circ$" or "right angle" before the measure node defines them.

:::
:::

## Connections

This node takes the **rays** built from segments and joins two at a shared endpoint to create the
angle — the plane's basic measure of *turning*, as segments were its measure of *reach*. Deliberately
it stops at the qualitative idea; the very next node, **angle measure**, attaches degrees, defines
right/acute/obtuse, and gives an Angle Addition Postulate that mirrors the segment addition you already
met. Angles are also half of what it means for figures to match: **congruence** will ask that both
segments *and* angles agree. Recognition trigger: whenever two rays, edges, or directions meet at a
point and the question is about their *spread* or *turn* — not their length — you are looking at an
angle.

## History

The concept of angle was given its classical definition by Euclid in Book I of the *Elements* ($c.$ $300$ BCE), as the inclination to one another of two lines meeting at a point. Greek geometers before him — Thales, Pythagoras, and others — reasoned about angles, but Euclid fixed the vocabulary of right, acute, and obtuse angles that we still use. Debate over what an angle "really is" — a magnitude, a rotation, or a region — continued for centuries and was clarified only within later rigorous foundations such as Hilbert's ($1899$). The definition matters because the angle is the basic measure of turning and of the relation between two directions, underlying trigonometry, rotation, and nearly all of geometry.
