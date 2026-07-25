Peel the paper label off a soup can in one clean strip and lay it flat: a perfect rectangle, no
curve left in it. Now snip the paper cone of a party hat up one side and press it down: not a
rectangle but a fan — a slice of a bigger disk. Two round solids, two curved skins, and yet each
unrolls into a flat shape you already know how to measure. What were the dimensions of that
rectangle, and how big is that fan?

## Discovery

You may use the volume of a prism $V = B h$ (`geo-prisms`), the circle circumference
$C = 2\pi r$ (`geo-arc-circumference`), the disk area $\pi r^2$, and the pyramid volume
$\tfrac13 B h$ as an established fact.

1. A **cylinder** is a "prism" whose base is a disk of radius $r$, with height $h$. Treating it
   like any prism, write its volume as (base area) times height, in terms of $r$ and $h$.
2. Peel the cylinder's curved wall off and roll it flat. It becomes a rectangle. One side of that
   rectangle wraps once around the base circle; the other side runs from bottom rim to top rim.
   What are the rectangle's two side lengths in terms of $r$ and $h$, and hence its area?
3. A **cone** is the round cousin of a pyramid: one apex over a disk base of radius $r$, height
   $h$. Standing it beside a pyramid of the *same base area and height* and slicing both
   horizontally, argue by equal cross-sections what fraction of $\pi r^2 h$ the cone's volume must
   be. Write the cone's volume in terms of $r$ and $h$.
4. Cut the cone's curved skin up one straight slant line and flatten it. It opens into a
   **sector** of a disk whose radius is the cone's slant length $\ell$ (the apex-to-rim distance),
   and whose curved edge — once the base circle — has length equal to the base circumference.
   That curved edge length is what, in terms of $r$? The sector is what fraction of a full disk of
   radius $\ell$? Multiply that fraction by the full disk's area $\pi \ell^2$ to get the sector's
   area. Finally, relate $\ell$ to $r$ and $h$ using the right triangle formed by the height, a
   base radius, and the slant.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let a cylinder and a cone each have base radius $r$ and height $h$ (perpendicular apex-to-base or
rim-to-rim distance). Let $\ell = \sqrt{r^2 + h^2}$ be the cone's **slant height**. Then:

- **Cylinder.**
  $$V = \pi r^2 h, \qquad L = 2\pi r\,h,$$
  where $L$ is the lateral (curved-wall) area; the total surface adds the two disk bases,
  $\text{SA} = 2\pi r^2 + 2\pi r h$.
- **Cone.**
  $$V = \tfrac13 \pi r^2 h, \qquad L = \pi r \ell,$$
  with $\ell = \sqrt{r^2 + h^2}$; the total surface adds the one disk base,
  $\text{SA} = \pi r^2 + \pi r \ell$.

The cone carries the same $\tfrac13$ factor as a pyramid. The slant height $\ell$ governs the
lateral area but never the volume.

### Proof

**Cylinder volume.** A cylinder is a prism whose base is a disk of area $\pi r^2$. By the prism
volume result (`geo-prisms`, itself Cavalieri against a box), $V = B h = \pi r^2 h$. This needs no
new idea: horizontal slices are all congruent disks of area $\pi r^2$, so the base-times-height
rule applies verbatim.

**Cylinder lateral area.** Cut the curved wall along a vertical line and unroll it. Because the
wall met the base along the full circle, the unrolled edge has length equal to the circumference
$2\pi r$; the perpendicular side is the height $h$. The flattened wall is a genuine rectangle
(the cut edges were straight and the wall had uniform height), so $L = (2\pi r)(h) = 2\pi r h$.

**Cone volume.** Stand a cone of base area $\pi r^2$ and height $h$ beside a pyramid of the same
base area $\pi r^2$ and the same height $h$. By the cross-section-scaling of solids, each slice at
height $y$ above the base has area $B\left(\tfrac{h-y}{h}\right)^2$ with $B = \pi r^2$ for both —
the cone's slice is a disk shrunk by $\tfrac{h-y}{h}$, the pyramid's is its base shrunk by the
same factor, and equal base areas give equal slice areas at every height. By **Cavalieri's
principle** the two solids have equal volume, and the pyramid's is $\tfrac13 B h$, so
$$V_{\text{cone}} = \tfrac13 \pi r^2 h.$$

**Cone lateral area.** Cut the curved skin along one slant line and flatten it into a sector of a
disk of radius $\ell$ (every point of the rim is slant distance $\ell$ from the apex). The
sector's curved edge, formerly the base circle, has length $2\pi r$. A full disk of radius $\ell$
has circumference $2\pi \ell$, so the sector is the fraction $\dfrac{2\pi r}{2\pi \ell} = \dfrac{r}{\ell}$
of a full disk. The full disk has area $\pi \ell^2$, so
$$L = \frac{r}{\ell}\cdot \pi \ell^2 = \pi r \ell.$$
Equivalently, a sector's area is half its arc length times its radius:
$L = \tfrac12(2\pi r)(\ell) = \pi r \ell$.

**Slant height.** The height $h$ (apex to base center), a base radius $r$, and the slant $\ell$
(apex to rim) form a right triangle with legs $h, r$ and hypotenuse $\ell$. By the Pythagorean
relation, $\ell^2 = r^2 + h^2$, so $\ell = \sqrt{r^2 + h^2}$. $\blacksquare$

### Worked Instance

**A cylinder.** Radius $r = 3$, height $h = 10$:
$$V = \pi r^2 h = \pi \cdot 9 \cdot 10 = 90\pi, \qquad L = 2\pi r h = 2\pi\cdot 3\cdot 10 = 60\pi.$$
The soup-can label of the Hook is a rectangle $2\pi r = 6\pi$ around by $h = 10$ tall, area
$60\pi$ — exactly the lateral area.

**A cone.** Radius $r = 3$, height $h = 4$. The slant is
$$\ell = \sqrt{r^2 + h^2} = \sqrt{9 + 16} = \sqrt{25} = 5.$$
Then the party-hat fan has area
$$L = \pi r \ell = \pi\cdot 3\cdot 5 = 15\pi,$$
a sector of a radius-$5$ disk covering the fraction $\tfrac{r}{\ell} = \tfrac{3}{5}$ of it. The
volume is
$$V = \tfrac13 \pi r^2 h = \tfrac13 \pi\cdot 9\cdot 4 = 12\pi,$$
one third of the $36\pi$ cylinder on the same base and height.

### Pitfalls

- **The cone carries $\tfrac13$; the cylinder does not.** A cylinder is a prism ($V = \pi r^2 h$);
  a cone is a pyramid's round cousin ($V = \tfrac13 \pi r^2 h$). Swapping the factor is the most
  common error.
- **Slant $\ell$ is not the height $h$.** For lateral area of a cone use $\ell = \sqrt{r^2 + h^2}$,
  strictly larger than $h$; for volume use $h$. Feeding $\ell$ into the volume, or $h$ into
  $\pi r \ell$, is a classic mix-up.
- **Lateral versus total surface.** The cone's $\pi r \ell$ is only the curved skin; the total
  adds the base disk, $\pi r^2 + \pi r \ell$. The cylinder's $2\pi r h$ omits the two ends;
  total is $2\pi r^2 + 2\pi r h$.
- **Square the radius, not the diameter.** The area factor is $\pi r^2$; using the diameter in
  place of $r$ inflates every result fourfold.

:::
:::

## Connections

Cylinders and cones are the round limits of `geo-prisms` and pyramids: a cylinder is a prism with
a disk base, so $V = \pi r^2 h$ directly; a cone matches a pyramid slice-for-slice under
**Cavalieri's principle**, inheriting the $\tfrac13$. The lateral areas come from unrolling curved
skins into flat shapes measured with the circumference $C = 2\pi r$ of `geo-arc-circumference`.
The slant height $\ell = \sqrt{r^2 + h^2}$ is a Pythagorean right triangle standing inside the
cone. From here the same cross-section bookkeeping — a cylinder with a cone removed — meets the
hemisphere in `geo-spheres`. Recognition trigger: any round solid with a circular cross-section
(pipe, can, funnel, ice-cream cone), and the reminder to keep straight which formula wears the
$\tfrac13$ and whether a length is the height $h$ or the slant $\ell$.

## History

The Greeks understood cylinders and cones as the round analogues of prisms and pyramids: Euclid's *Elements* Book XII (c. 300 BCE), building on Eudoxus of Cnidus, proved that a cone is one-third of the cylinder sharing its base and height. Archimedes of Syracuse (c. 250 BCE) prized these solids so highly that he asked for a cylinder circumscribing a sphere to be carved on his tomb, commemorating his discovery of their volume ratio. Apollonius of Perga (c. 200 BCE) studied the cone further in his *Conics*, slicing it to generate the ellipse, parabola, and hyperbola. Unrolling a cone's curved lateral surface into a flat circular sector is a later, elementary refinement of these classical results.
