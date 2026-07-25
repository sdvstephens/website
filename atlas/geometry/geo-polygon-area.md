A field is a trapezoid: its two parallel fences run $40$ m and $60$ m, set $30$ m apart. There is no one
rectangle and no one triangle whose area you can just read off — the shape is neither. Yet a single clean
number, $1500$ square metres, is waiting inside it, and the same trick that extracts it will hand you the
area of a regular hexagonal tile from nothing but its side length. What is the trick?

## Discovery

Bring two facts: a triangle's area is $\tfrac12(\text{base})(\text{height})$, and any polygon can be cut
into triangles whose areas add.

1. Let $ABCD$ be a trapezoid with $AB \parallel DC$, parallel-side lengths $b_1 = AB$ and $b_2 = DC$, and
   perpendicular distance $h$ between the two parallel lines. Draw the diagonal $\overline{AC}$; it splits
   the trapezoid into two triangles. For each triangle, identify its base (one of the parallel sides) and
   argue that its height is $h$. Write each triangle's area.
2. Add the two areas from step 1 and factor out what is common. Express the trapezoid's area using only
   $b_1$, $b_2$, and $h$.
3. Take a regular $n$-gon with center $O$. Draw the $n$ segments from $O$ to the vertices. How many
   triangles appear, and why are they all congruent? Identify each triangle's base (a side of the polygon)
   and its height — the perpendicular from $O$ to a side, which has its own name, the **apothem**.
4. Sum the $n$ triangle areas from step 3. Call the common apothem $a$, and notice that the $n$ equal
   bases laid end to end are just the perimeter $P$. Simplify the total into a formula in $a$ and $P$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Decomposition.** The area of any polygon equals the sum of the areas of the triangles in *any*
triangulation of it; the total does not depend on how you cut.

**Trapezoid.** A trapezoid with parallel sides $b_1, b_2$ and height $h$ (the perpendicular distance
between them) has area
$$A = \tfrac12 (b_1 + b_2)\, h,$$
the *average* of the parallel sides times the height. It degenerates correctly: $b_1 = b_2$ recovers the
parallelogram $bh$, and $b_2 = 0$ recovers the triangle $\tfrac12 b_1 h$.

**Regular polygon.** A regular polygon with apothem $a$ (perpendicular from center to a side) and
perimeter $P$ has area
$$A = \tfrac12\, a\, P.$$

### Proof

**Trapezoid.** In $ABCD$ with $AB \parallel DC$, the diagonal $\overline{AC}$ cuts the figure into
$\triangle ABC$ and $\triangle ACD$. Take $AB$ as the base of $\triangle ABC$: its opposite vertex $C$ lies
on the line through $D, C$, which is parallel to $AB$ and distance $h$ from it, so the height of
$\triangle ABC$ is $h$, giving area $\tfrac12 b_1 h$. Take $DC$ as the base of $\triangle ACD$: its
opposite vertex $A$ lies on the line through $A, B$, again distance $h$ from line $DC$, so its height is
also $h$, giving area $\tfrac12 b_2 h$. The two triangles tile the trapezoid without overlap, so
$$A = \tfrac12 b_1 h + \tfrac12 b_2 h = \tfrac12 (b_1 + b_2)\, h.$$

**Regular polygon.** Let the regular $n$-gon have center $O$, side length $s$, and vertices
$V_1,\ldots,V_n$. The segments $\overline{OV_1},\ldots,\overline{OV_n}$ are all equal (a regular polygon
is inscribed in a circle about $O$), and each central angle $\angle V_iOV_{i+1}$ equals $\tfrac{360^\circ}{n}$.
Hence the $n$ triangles $\triangle OV_iV_{i+1}$ are congruent by Side-Angle-Side (two equal radii and the
equal included central angle), and in particular each has the same apothem $a$ as the height onto its base
$V_iV_{i+1}$ of length $s$. Each triangle has area $\tfrac12 s\, a$, and there are $n$ of them tiling the
polygon, so
$$A = n \cdot \tfrac12 s\, a = \tfrac12 a\,(n s) = \tfrac12\, a\, P,$$
since the $n$ sides of length $s$ sum to the perimeter $P = n s$. $\blacksquare$

### Worked Instance

The trapezoidal field: $b_1 = 40$, $b_2 = 60$, $h = 30$, so
$$A = \tfrac12 (40 + 60)(30) = \tfrac12 (100)(30) = 1500 \text{ m}^2,$$
resolving the Hook. Now a regular hexagon of side $s = 6$. Its apothem is $a = \tfrac{s}{2}\sqrt{3} =
3\sqrt{3}$ and its perimeter $P = 6\cdot 6 = 36$, so
$$A = \tfrac12 (3\sqrt{3})(36) = 54\sqrt{3}.$$
Cross-check by the other decomposition: a regular hexagon is six equilateral triangles of side $6$, each
of area $\tfrac{\sqrt3}{4}\cdot 6^2 = 9\sqrt3$, and $6 \cdot 9\sqrt3 = 54\sqrt3$ — the two cuttings agree,
as the decomposition principle promises.

### Pitfalls

- **The trapezoid height is the perpendicular distance between the parallel sides**, not the length of a
  slanted leg. Using a leg overstates the area.
- **In $\tfrac12(b_1+b_2)h$, the $b_1, b_2$ are the two *parallel* sides**, never the non-parallel legs.
- **Apothem versus circumradius.** The apothem $a$ reaches the *midpoint of a side* (perpendicular to it);
  the circumradius reaches a *vertex*. The apothem is the shorter one, and $\tfrac12 aP$ needs the apothem.
- **$\tfrac12 aP$ requires regularity** — equal sides and a common apothem. An irregular polygon has no
  single apothem; fall back to triangulating and adding.
- **Units are squared.** Areas carry square units; a stray linear unit signals a dropped factor.

:::
:::

## Connections

This node applies `geo-area-basics` (triangle and rectangle area, and that dissected pieces add) through
the counting frame of `geo-polygon-angles` (the same "cut into triangles" reflex, now measuring area
rather than summing angles, and using the regular polygon's equal central angles). The trapezoid formula
is the workhorse behind the area of any figure with two parallel edges — and, taken to the limit, behind
the trapezoidal rule for integration. The apothem formula $\tfrac12 aP$ previews the circle: as $n\to\infty$
the apothem becomes the radius and $\tfrac12 aP$ becomes $\tfrac12 r\cdot 2\pi r = \pi r^2$. Recognition
trigger: an area with slanted sides but no ready formula — cut it into triangles or trapezoids of known
dimensions and add.

## History

Finding the area of a many-sided figure by cutting it into triangles is an ancient technique, rooted in the land-surveying of Egypt and Babylon and made rigorous in Euclid's *Elements* (c. 300 BC), where every rectilinear area is reduced to triangles and rectangles. Heron of Alexandria's *Metrica* (first century AD) collected practical rules for the areas of regular polygons and irregular plots, serving the needs of surveyors and engineers. The triangulation idea proved astonishingly durable: the modern surveyor's formula, often called the shoelace formula, computes a polygon's area directly from the coordinates of its vertices and was made explicit by Albrecht Meister in 1769 and by Gauss. That any simple polygon can be triangulated at all was long taken for granted but only carefully proved in the twentieth century. From temple plots to computer graphics, decomposing a polygon into triangles remains the standard route to its area.
