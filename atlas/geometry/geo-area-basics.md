Cover a floor with $1$-metre square tiles and the number of tiles you use *is* the floor's area.
But a triangular garden takes no whole number of square tiles — they never fit the slanted edge.
So what does "area" even mean for a shape with no square in sight, and why does one tidy rule handle
the rectangle, the leaning parallelogram, and the triangle all at once?

## Discovery

Fix a unit of length, and call a $1\times 1$ square (side one unit) a **unit square**; its area is
$1$ by decree. Area will always mean "how many unit squares' worth."

1. Take a rectangle $b$ units wide and $h$ units tall, with $b$ and $h$ whole numbers. Cover it
   exactly with unit squares in a grid — $h$ rows, each row a line of squares. Count the squares by
   counting rows and the squares per row. What is the total, in terms of $b$ and $h$?
2. Now a **parallelogram**: a slanted box with a horizontal bottom side of length $b$ and vertical
   distance $h$ between that bottom side and the (parallel) top side. Drop a vertical cut from a top
   corner straight down to the base line; this slices off a right triangle at one end. Slide that
   triangle horizontally to the *other* end, where it fits exactly against the slanted edge. What
   ordinary shape have you just formed, and what are its width and height? Conclude the
   parallelogram's area.
3. Now a **triangle** with base $b$ and height $h$ (the perpendicular distance from the apex to the
   base line). Make a second copy of it, rotate the copy a half-turn ($180^\circ$), and glue it to
   the original along a shared side. What shape is the union, and what are its base and height?
   Since the two triangles are congruent copies filling that shape with no overlap, what fraction of
   its area is one triangle — and so what is the triangle's area?
4. A triangle can look "tipped over." Take base $b$ on a horizontal line and let the apex sit
   directly above a point *outside* the segment of length $b$ (an obtuse triangle). Is the height
   still the perpendicular distance from the apex to the base *line*? Redo the doubling of step $3$
   in your head and check that the area rule you found does not change.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix a unit square as the unit of area. Then:
- **Rectangle.** A rectangle with base $b$ and height $h$ has area
  $$A_{\text{rect}} = bh.$$
- **Parallelogram.** A parallelogram with base $b$ and corresponding height $h$ (the perpendicular
  distance between the base and its parallel opposite side) has area
  $$A_{\text{par}} = bh.$$
- **Triangle.** A triangle with base $b$ and corresponding height $h$ (the perpendicular distance
  from the opposite vertex to the line of the base) has area
  $$A_{\triangle} = \tfrac12 bh.$$

Here the **base** is any chosen side, and the **height** (or **altitude**) is measured
*perpendicular* to that base — not along a slanted edge. The same base–height product runs through
all three shapes.

### Proof

Everything reduces to the rectangle, whose area is a count of unit squares, and then to
cut-and-rearrange dissections that preserve area (moving a rigid piece changes neither its shape nor
its size, so the total tally of covered area is unchanged).

**Rectangle.** For whole $b,h$, tile the rectangle with unit squares: $h$ rows, each holding $b$
squares side by side. The total number of unit squares is $b$ added $h$ times, which is the product
$bh$ (`ari-multiplication` as repeated addition / an array count). Thus $A_{\text{rect}}=bh$. (For
non-whole $b,h$ the same array count holds with fractional tiles; approximating by finer and finer
grids gives the identical formula $bh$ in the limit.)

**Parallelogram.** Let the parallelogram have base $b$ on a line $\ell$ and its opposite side on the
parallel line $\ell'$ at perpendicular distance $h$. From one endpoint of the top side drop the
perpendicular to $\ell$; this segment, of length $h$, cuts a right triangle off one end of the
parallelogram. Translate that triangle horizontally by the length of the base until its slanted edge
lands on the parallelogram's other slanted edge — they are parallel and equal, so the fit is exact.
The figure is now a rectangle with the same base $b$ (the base line is unchanged) and height $h$
(the distance between $\ell$ and $\ell'$). Cutting and sliding a rigid piece preserves total area, so
$$A_{\text{par}} = A_{\text{rect}} = bh.$$

**Triangle.** Let the triangle be $ABC$ with base $\overline{BC}=b$ and apex $A$ at perpendicular
distance $h$ from line $BC$. Make a congruent copy $A'B'C'$, rotate it $180^\circ$ about the midpoint
of a side, and place it so the two copies share that side; the union is a parallelogram with base $b$
and height $h$ (the rotation sends the base to the parallel opposite side at distance $h$). The two
congruent triangles tile this parallelogram with no gap or overlap, so each is exactly half of it:
$$A_{\triangle} = \tfrac12 A_{\text{par}} = \tfrac12 bh.$$

**Obtuse case.** If the foot of the altitude falls outside the base segment, the same doubling still
produces a parallelogram of base $b$ and height $h$ (height is measured to the base *line*, which
extends as far as needed), and the triangle is again half of it. The formula $\tfrac12 bh$ is
insensitive to where the foot lands. $\blacksquare$

### Worked Instance

Resolve the Hook's triangular garden. Say it has a base of $b=10$ m along a wall and its far corner
stands $h=6$ m from the wall, measured perpendicular to it. No whole number of square tiles fits the
slant, yet
$$A_{\triangle} = \tfrac12 bh = \tfrac12 \cdot 10 \cdot 6 = 30 \text{ m}^2.$$
Double the garden into a parallelogram (two copies) — a $10$-by-$6$ slanted box of area
$10\cdot 6 = 60$ m$^2$ — then shear that box straight into a $10$-by-$6$ rectangle of the same
$60$ m$^2$, tileable by exactly $60$ unit squares. The triangle is half of that: $30$ m$^2$. One
base–height product, carried from square tiles to the slanted garden by cutting and sliding.

### Pitfalls

- **Height is perpendicular, not slant.** In a leaning parallelogram or triangle, $h$ is the
  perpendicular distance to the base line, *not* the length of a tilted side. Multiplying base by a
  slanted edge overstates the area.
- **The height must match the chosen base.** A triangle has three base–height pairs; if you pick a
  side as base, you must use the altitude drawn to *that* side.
- **Don't drop the $\tfrac12$.** A triangle is half its doubling parallelogram; $bh$ (no half) is the
  parallelogram's area, twice the triangle's.
- **Units are squared.** Area is unit squares, so metres times metres gives m$^2$; forgetting to
  square the unit is a units error even when the number is right.
- **Base and height need not lie inside the figure.** For an obtuse triangle the altitude's foot can
  fall outside the base segment; the formula still uses the perpendicular distance to the base line.

:::
:::

## Connections

Area basics stand on two prereqs: **multiplication** as an array/repeated-addition count
(`ari-multiplication`), which turns a tiling into a product $bh$, and **segment length**
(`geo-segments-rays`), which gives meaning to "base" and to the perpendicular "height." From the
single product $bh$ grow a remarkable number of results: sliding an apex without changing area
(`geo-same-base-altitude`), the area proof of the Pythagorean theorem
(`geo-pythagorean-theorem`), the equal-area splitting by a median (`geo-medians-centroid`), the area
of any polygon by triangulation (`geo-polygon-area`), and Heron's formula (`geo-heron-elem`).
Recognition trigger: any request for a region's size, any "count the squares," or any figure you can
cut and rearrange into a rectangle is an area-basics problem — and whenever you see "base" reach at
once for the *perpendicular* height that matches it.

## History

Rules for the area of rectangles and triangles were recorded long before proofs existed: the Egyptian Rhind Mathematical Papyrus (c. 1650 BC, copied from older material) works such problems for land and grain, and Babylonian tablets do the same for surveying and taxation. Euclid gave the results their logical foundation in Books I and II of the *Elements* (c. 300 BC), where instead of multiplying numbers he compared regions directly — his propositions I.35 through I.41 relate parallelograms and triangles sharing a base and parallels, so that "area" means equality of figures rather than a computed value. This geometric conception of area as a magnitude, kept separate from number, reflects the Greek reluctance to treat lengths and products as ordinary arithmetic. Only much later, with the fusion of algebra and geometry, did the familiar formula base-times-height become the default. The base-halved-times-height rule for a triangle follows because any triangle is half of a parallelogram on the same base.
