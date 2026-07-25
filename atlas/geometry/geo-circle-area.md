You already know the *rim* of a radius-$7$ circle measures $14\pi$. But how much *paint* does the disk
inside it swallow? A rectangle's area is base times height, plain and countable; a circle has no
straight sides to multiply. Yet there is a clean answer, and it hides a surprise — enlarge a pizza's
radius by a factor of $3$ and it does not hold three times the cheese. So what does the interior of a
circle actually amount to?

## Discovery

An arc of a circle already has length $\tfrac{\theta}{360}\cdot 2\pi r$. Here we chase the region *inside*.

1. Slice the disk from the center like a pizza into a large even number of thin, equal wedges
   (**sectors**), say $16$ of them, then $64$, then more. Each wedge is nearly a slim triangle: two
   straight radius-edges and a slightly curved outer crust. As the wedges get thinner, does that curved
   crust look more like a straight segment or less?
2. Peel the wedges apart and lay them in a row, points alternately up and down, interlocking like teeth
   so they pack into a long strip roughly the shape of a parallelogram (approaching a rectangle as the
   wedges thin out). The strip's two long edges are made entirely of the crust-arcs. How much total
   crust sits along the *top* edge — what fraction of the whole circumference — and so what is the
   length of that top edge?
3. Each wedge stands as tall as its straight edge. What is the height of the strip in terms of the
   circle's radius?
4. Multiply the base you found in step 2 by the height from step 3 to get the strip's area. Since the
   strip is just the disk rearranged, that product is the disk's area. Simplify it.
5. Finally, a **sector** is a $\theta^\circ$ wedge, the fraction $\theta/360$ of the disk. Using the
   disk area from step 4, write the sector's area.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A circle (disk) of radius $r$ has **area**
$$[\text{circle}] = \pi r^2.$$
A **sector** with central angle $\theta^\circ$ is the fraction $\dfrac{\theta}{360}$ of the disk, so
its area is
$$[\text{sector}] = \frac{\theta}{360}\,\pi r^2.$$
Note the contrast with circumference: the *boundary* carries one factor of $r$ (as $2\pi r$), but the
*area* carries two (as $\pi r^2$), so area grows with the *square* of the radius.

### Proof

Cut the disk into $n$ congruent sectors by $n$ equally spaced radii, $n$ even. Each sector has two
straight sides of length $r$ and a circular crust of arc length $\dfrac{1}{n}\cdot 2\pi r$ (an equal
$n$th of the circumference).

Rearrange the $n$ sectors alternately point-up and point-down, interlocking, into a single strip. The
crusts fall into two groups: half of them ($n/2$ sectors) contribute their arcs to the top boundary and
half to the bottom. So the top boundary has total length
$$\frac{n}{2}\cdot\frac{2\pi r}{n} = \pi r,$$
and likewise the bottom, while the slanted straight sides of length $r$ form the two ends. The figure is
therefore close to a parallelogram of base $\pi r$ and slant-height $r$.

Now let $n\to\infty$. As the sectors get thin, each crust-arc flattens toward a straight segment and
each sector's straight sides become nearly perpendicular to the base, so the strip tends to a
**rectangle** of base $\pi r$ and height $r$. The top and bottom lengths stay exactly $\pi r$ at every
$n$ (the computation above used no approximation), and the height tends to $r$; the rearrangement never
creates or destroys area, so the disk's area equals the limiting rectangle's area:
$$[\text{circle}] = (\pi r)\cdot r = \pi r^2.$$

For a sector of central angle $\theta^\circ$: the disk splits into non-overlapping sectors whose angles
sum to $360^\circ$, and congruent sectors (equal angles) have equal area, so area is proportional to
central angle. The whole disk ($\theta = 360^\circ$) has area $\pi r^2$, hence a $\theta^\circ$ sector
has area $\dfrac{\theta}{360}\,\pi r^2$. $\blacksquare$

### Worked Instance

A radius-$7$ circle has area
$$\pi\cdot 7^2 = 49\pi \approx 153.9.$$
Its rim was $14\pi$; the interior is $49\pi$ — different powers of $7$, as promised.

A $90^\circ$ sector of it (a quarter disk) has area $\dfrac{90}{360}\,\pi\cdot 7^2 = \tfrac14\cdot 49\pi
= \dfrac{49\pi}{4}$.

**Annulus (washer) by subtraction.** A flat ring lies between an outer circle of radius $7$ and an inner
circle of radius $4$ sharing the same center. Its area is the big disk minus the hole:
$$\pi\cdot 7^2 - \pi\cdot 4^2 = 49\pi - 16\pi = 33\pi \approx 103.7.$$
The Hook's pizza: tripling the radius multiplies the area by $3^2 = 9$, not by $3$ — nine times the
cheese, because area scales as the square of the radius.

### Pitfalls

- **$\pi r^2$ is $\pi\cdot r^2$, not $(\pi r)^2$.** Square only the radius, then multiply by $\pi$. For
  $r=7$ that is $49\pi\approx 153.9$, whereas $(\pi\cdot 7)^2 = 49\pi^2\approx 483.6$ is a different,
  wrong number.
- **Radius, not diameter.** Area uses $r$. Given a diameter $14$, halve it first: $r=7$ and area
  $49\pi$. Feeding the diameter in as $\pi\cdot 14^2 = 196\pi$ overcounts by a factor of $4$.
- **Area scales as $r^2$, length as $r$.** Doubling the radius doubles the circumference but quadruples
  the area; do not scale area by the plain radius ratio.
- **Sector fraction, not arc formula.** Sector *area* is $\tfrac{\theta}{360}\pi r^2$; do not
  accidentally use $\tfrac{\theta}{360}\cdot 2\pi r$, which is the arc *length* along its curved edge.

:::
:::

## Connections

This node completes the circle's two headline measurements: `geo-arc-circumference` gave the boundary
$2\pi r$, and the very same $\pi$ now governs the interior $\pi r^2$, with the sector dissection turning
that perimeter into area. It leans on measuring area by rearrangement (`geo-area-basics`), the "cut and
recombine, area is preserved" principle. Downstream, spinning a disk through space and summing such
slices leads to the surface area and volume relations of `geo-spheres`. Recognition trigger: any request
for the space *inside* a round region — a pizza, a circular pond, a pie slice (sector), a washer or
track infield (subtracted circles) — is $\pi r^2$, and the moment a radius is scaled, remember area
carries the square.

## History

Archimedes of Syracuse (c. 250 BCE) settled the disk's area in his short treatise *Measurement of a Circle*, proving that a disk equals a right triangle whose two legs are the radius and the circumference — that is, area $=\tfrac12\cdot r\cdot 2\pi r=\pi r^2$. His method of exhaustion, squeezing the disk between inscribed and circumscribed polygons whose areas he could compute, anticipated integral calculus by nearly two thousand years. He was driven to reduce a curved region to something as tractable as a triangle, a hallmark of turning the infinite into the finite. The intuitive "cut into thin sectors and rearrange into a strip" argument used in this node is a much later teaching device, but it faithfully captures Archimedes' idea. Euler's later notation gave the constant its now-universal name $\pi$.
