Set a square-based pyramid inside the smallest box that just contains it — same square floor, same
height. The pyramid clearly holds *less* than the box; it tapers to a point while the box stays
full to the lid. But how much less? A half seems the natural guess, the way a triangle is half its
box in flat land. Slice a real cube apart the right way, though, and three identical pyramids fall
out of it — not two. Where does that stubborn *third* come from?

## Discovery

A **pyramid** has one polygon **base** and an **apex** joined to every base vertex by triangular
faces; its **height** is the perpendicular distance from apex to the base plane. You may use prism
volume $V = B h$ (`geo-prisms`) and the fact that scaling a plane figure's lengths by $r$ scales
its area by $r^2$.

1. Take a cube of edge $s$ and mark one corner vertex $O$. From $O$, build three pyramids: each
   has apex $O$ and takes as its base one of the three cube faces that do **not** touch $O$. Check
   that these three pyramids are congruent and that together they fill the cube with no gaps or
   overlaps. What fraction of the cube is one pyramid? Using the cube's volume $s^3 = (\text{base
   face area})\times(\text{cube edge})$, write one pyramid's volume in terms of its base area
   $s^2$ and its height $s$.
2. Does that fraction depend on the pyramid being square, or on the apex sitting above a corner?
   Slice a general pyramid of base area $B$ and height $h$ by a horizontal plane at height $y$
   above the base. The slice is a shrunken copy of the base, scaled by the linear factor
   $\tfrac{h-y}{h}$. Write the slice's area in terms of $B$, $h$, $y$.
3. Stand two pyramids side by side: same base area $B$, same height $h$, but different base
   shapes and the apex over a different spot. Using step $2$, compare their slice areas at each
   common height $y$. If every matched pair of slices has equal area, what do you conclude about
   their volumes? Combine this with the fraction from step $1$ to state one pyramid's volume in
   terms of $B$ and $h$ alone.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a pyramid with base area $B$ and height $h$ (the perpendicular distance from apex to the base
plane),
$$V = \tfrac13 B h.$$
The volume depends only on the base area and the height — not on the base's shape and not on where
the apex sits above the base. A pyramid fills exactly one third of the prism (or box) built on the
same base with the same height.

Two heights not to confuse: the **height** $h$ is the perpendicular apex-to-base distance used for
volume; the **slant height** is the distance from the apex down the middle of a lateral face to
the base edge, and it is used only for lateral surface area, not for volume.

### Proof

**The one-third factor from a cube dissection.** Take a cube of edge $s$ and a vertex $O$. The
three cube faces not containing $O$ each serve as the base of a pyramid with apex $O$. These
three pyramids are congruent: a rotation of the cube about its main diagonal through $O$ by
$120^\circ$ permutes the three faces cyclically and carries each pyramid onto the next. They also
tile the cube — every point of the cube lies in exactly one of them, since the three faces meet
the apex's opposite structure without overlap. Three congruent pieces filling the cube means each
is one third of it:
$$V_{\text{pyr}} = \tfrac13 s^3.$$
For each such pyramid the base is a cube face of area $B = s^2$ and the height is the cube edge
$h = s$ (the apex $O$ sits a perpendicular distance $s$ from the opposite face). Thus
$V_{\text{pyr}} = \tfrac13 s^3 = \tfrac13 (s^2)(s) = \tfrac13 B h$ in this special case.

**Extension to every base and apex by Cavalieri.** Recall **Cavalieri's principle**: solids with
equal cross-sectional area at every height have equal volume. Slice a pyramid of base area $B$ and
height $h$ by the horizontal plane at height $y$ above the base ($0 \le y \le h$). The cross-
section is similar to the base, scaled from the apex; a point at height $y$ is a fraction
$\tfrac{h-y}{h}$ of the way from apex-level down to the base, so the slice is the base scaled by
the linear factor $\tfrac{h-y}{h}$, and its area is
$$B\left(\frac{h-y}{h}\right)^2,$$
because area scales as the square of the linear factor. This expression depends only on $B$, $h$,
and $y$ — not on the base's shape or the apex's horizontal position. Hence any two pyramids with
the same base area $B$ and the same height $h$ have equal cross-sections at every height, so by
Cavalieri they have equal volume. The dissected cube supplies one pyramid whose volume is
$\tfrac13 B h$; every pyramid of the same base area and height shares that volume, so
$$V = \tfrac13 B h$$
for all pyramids. $\blacksquare$

### Worked Instance

**A square pyramid.** Base $6 \times 6$, so $B = 36$; height $h = 10$ (apex perpendicular distance
$10$ above the base). Then
$$V = \tfrac13 B h = \tfrac13 \cdot 36 \cdot 10 = \tfrac{360}{3} = 120.$$
The prism on the same base with the same height would hold $B h = 360$; the pyramid holds exactly
one third of it, resolving the Hook — not a half, but a third, the very fraction the cube
dissection forced.

**Height versus slant.** Suppose that same pyramid's apex is directly over the center of the base.
The slant height (apex down the middle of a triangular face to the base edge) is
$\sqrt{h^2 + 3^2} = \sqrt{100 + 9} = \sqrt{109}$, using the half-side $3$. That slant height would
feed a lateral-surface-area computation — but it plays no role in the volume, which used only the
perpendicular height $10$.

### Pitfalls

- **The factor is $\tfrac13$, not $\tfrac12$.** A triangle is half its box in the plane, but a
  pyramid is one *third* of its prism in space. The cube-into-three-pyramids picture is the reason.
- **Height is the perpendicular apex-to-base distance, not a slant edge.** The lateral edges and
  the slant height are longer than $h$; using either in $\tfrac13 B h$ overstates the volume.
- **Slant height is only for lateral surface area.** Keep it entirely out of the volume formula.
- **Shape and apex position do not matter for volume.** Two pyramids with equal base area and
  equal height have equal volume even if one is a slanted spike and the other stands straight;
  volume sees only $B$ and $h$.

:::
:::

## Connections

Pyramids sit one step past `geo-prisms`: the same Cavalieri lever that made an oblique prism match
a right one now transfers the cube's dissected third onto *every* base and apex. The result
$V = \tfrac13 B h$ is the polygonal template for the cone in `geo-cylinders-cones`, whose
$\tfrac13\pi r^2 h$ is this formula with a circular base. The cross-section-scaling idea
(area shrinks as $\left(\tfrac{h-y}{h}\right)^2$) is the recurring engine of solid volumes.
Recognition trigger: any solid that tapers from a flat base to a single apex — a tent, a spire, a
tetrahedron — is a pyramid, and "one third base times height" is the first tool to reach for, with
slant height reserved strictly for surface area.

## History

The striking factor of one-third in a pyramid's volume was, according to Archimedes, first conjectured by Democritus (c. 400 BCE), but a rigorous proof awaited Eudoxus of Cnidus, whose method of exhaustion Euclid recorded in Book XII of the *Elements* (Propositions 5 through 7, c. 300 BCE). The difficulty was real: unlike a prism, a pyramid cannot be cut into finitely many pieces that reassemble into a box — a fact later made precise as Hilbert's third problem and settled by Max Dehn in 1900. The Greeks were driven to invent exhaustion precisely because this curve-free but still infinitary problem resisted elementary dissection. Bonaventura Cavalieri's principle, in the 17th century, supplied the intuitive slice-by-slice argument that this node echoes.
