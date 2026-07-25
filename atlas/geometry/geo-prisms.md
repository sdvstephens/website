Pour sugar cubes into a shoebox until it is packed full. If the floor of the box holds a neat
$12$ cubes and you can stack $5$ layers, you never actually count all the cubes one by one — you
just know there are $60$. Now shove the whole stack sideways so it leans like a pushed-over deck
of cards. Not a single cube left the box; the height and the floor are unchanged. Did the amount
inside change? And why should a *slanted* stack hold exactly as much as an upright one?

## Discovery

A **prism** is a solid with two congruent, parallel polygon **bases** joined by flat sides. You
may use area formulas (`geo-area-basics`) and the fact that a solid's height is measured
perpendicular to its base (`geo-planes-3d`).

1. Take a rectangular box with whole-number dimensions: length $\ell$, width $w$, height $h$.
   Fill it with $1\times 1\times 1$ unit cubes. Count the cubes in the bottom layer by covering
   the floor rectangle — how many? Then count how many such layers stack to the top. Multiply to
   get the total number of unit cubes, and rewrite that total as (floor area) times (height).
   What is the box's volume in terms of $\ell, w, h$, and separately in terms of its base area
   and height?
2. Now the "pushed deck." Slice the upright box and a leaning (oblique) prism of the *same base
   and same height* into a great many thin horizontal sheets. Consider one sheet at a chosen
   height in each solid. Every sheet is a copy of the base, so compare the *area* of the upright
   solid's sheet with the area of the leaning solid's sheet at that same height. If every matched
   pair of sheets has equal area, what can you conclude about the two solids' total volumes? Does
   leaning change anything?
3. Replace the rectangular base with a triangular one, keeping the two bases parallel and
   congruent. Redo the sheet argument of step $2$ against an upright box whose base has the *same
   area* as the triangle. What is the triangular prism's volume in terms of its base area and
   height?
4. For an upright (right) prism, imagine peeling the side walls off and rolling them flat onto a
   table. Each wall is a rectangle as tall as the prism. Laid end to end, their widths add up to
   what measurement of the base outline, and their common height is what? Express the total side
   ("lateral") area, then the whole surface area including the two bases.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **prism** consists of two congruent parallel polygon bases joined by parallelograms (its
lateral faces); it is a **right prism** when those faces are rectangles perpendicular to the
bases, and **oblique** otherwise. Let $B$ be the base area and $h$ the height (the perpendicular
distance between the two base planes). Then:

- **Volume.** $$V = B\,h.$$ For a rectangular box with edges $\ell, w, h$ this is
  $V = \ell w h$. The formula holds for *any* base shape and for oblique prisms alike — only $B$
  and $h$ matter, never the lean.
- **Surface area.** $$\text{SA} = 2B + L,$$ where $L$ is the **lateral area** (the side walls).
  For a right prism with base perimeter $p$, $$L = p\,h,$$ so $\text{SA} = 2B + p\,h$.

Volume is counted in cubic units; area in square units.

### Proof

**Box volume by cube count.** For whole $\ell, w, h$, fill the box with unit cubes. The bottom
layer tiles the floor rectangle, an array of $\ell$ by $w$ unit squares, so it holds $\ell w$
cubes (the rectangle-area count of `geo-area-basics`). The box stacks $h$ identical such layers,
so the total is $\ell w$ added $h$ times, namely $\ell w h$ cubes, each of volume $1$. Hence
$V = \ell w h = (\ell w)\,h = B h$. For non-whole dimensions the identical array count holds with
fractional cubes, and refining to finer and finer cubes gives the same product $\ell w h$ in the
limit.

**General and oblique prisms by Cavalieri.** We use **Cavalieri's principle**: if two solids can
be placed so that every plane parallel to a fixed base plane cuts them in cross-sections of equal
area, then the two solids have equal volume. Justification in brief: approximate each solid by a
stack of thin slabs; slabs of equal cross-sectional area and equal thickness have equal volume,
so the stacks total to the same volume, and the approximation becomes exact as the slabs thin.

Take any prism with base area $B$ and height $h$. Every horizontal plane between the two base
planes meets the prism in a cross-section congruent to the base — because the lateral edges all
run parallel, each slice is a translated copy of the base — so each cross-section has area $B$.
Stand a right rectangular box of the same base area $B$ and same height $h$ beside it; every
horizontal slice of the box also has area $B$. The two solids thus have equal cross-sections at
every height, so by Cavalieri they have equal volume. The box's volume is $B h$ from the cube
count, so the prism's volume is $B h$ as well — regardless of base shape or of any lean. In
particular a triangular prism of base area $B$ and height $h$ has volume $B h$.

**Surface area.** The two bases contribute $2B$. For a right prism the lateral faces are
rectangles, each as tall as the height $h$ and as wide as one edge of the base. Unrolling them
into a single long rectangle of height $h$, the total width is the sum of the base edges, which
is the base perimeter $p$; its area is $p h$. Hence $L = p h$ and $\text{SA} = 2B + p h$.
$\blacksquare$

### Worked Instance

**The shoebox.** A box $3 \times 4 \times 5$ has base area $B = 3 \cdot 4 = 12$ and height
$h = 5$, so
$$V = B h = 12 \cdot 5 = 60,$$
matching the $60$ sugar cubes of the Hook — floor of $12$, stacked $5$ high. Shear the stack into
a leaning prism with the same $3\times 4$ base and the same height $5$: every horizontal slice is
still a $3\times 4$ rectangle of area $12$, so by Cavalieri the volume is still $60$. The lean
moved sugar sideways but added none.

**A triangular prism.** Let the base be a triangle of area $B = 6$ (say legs $3$ and $4$, area
$\tfrac12\cdot 3\cdot 4 = 6$) and let the prism be $h = 10$ tall. Then
$$V = B h = 6 \cdot 10 = 60.$$
Its two triangular bases contribute $2B = 12$ to the surface; the lateral area is the base
perimeter times the height. With legs $3,4$ and hypotenuse $5$ the perimeter is $p = 12$, so
$L = p h = 12 \cdot 10 = 120$ and $\text{SA} = 12 + 120 = 132$.

### Pitfalls

- **Height is perpendicular to the base, not along a slant edge.** In an oblique prism the tilted
  side edges are *longer* than the height; the volume uses the perpendicular distance between the
  base planes, never the slant length.
- **Cubic units for volume, square units for area.** $V$ counts unit cubes ($\text{m}^3$);
  surface area counts unit squares ($\text{m}^2$). Reporting a volume in $\text{m}^2$ is a units
  error even when the number is right.
- **Lateral area is not total surface area.** $L = ph$ covers only the side walls; the full
  surface adds the two bases, $\text{SA} = 2B + ph$. Forgetting the bases (or double-counting
  them) is the classic slip.
- **The lateral formula $L = ph$ is for right prisms.** An oblique prism's slanted faces are
  parallelograms whose areas need their own slant heights; the tidy $ph$ assumes rectangular
  walls.

:::
:::

## Connections

Prisms extend the flat area formulas of `geo-area-basics` into space, using the perpendicular
"height to a base" made precise in `geo-planes-3d`. The engine here is **Cavalieri's principle**:
equal cross-sections at every height force equal volume, the same lever that will next pin the
$\tfrac13$ factor for `geo-pyramids` and the volumes of `geo-cylinders-cones`. The box cube-count
$V = \ell w h$ is the seed; every later solid is measured by comparing its slices to a prism's.
Recognition trigger: any solid with a uniform cross-section along its length — a beam, a rod, a
coin viewed as a short cylinder — is a prism problem, and "volume = base area times height" is the
first tool to reach for.

## History

Formulas for the volume of boxes and prisms as base area times height reach back to Euclid's *Elements*, Books XI and XII (c. 300 BCE), and further still to the practical geometry of Egyptian and Babylonian surveyors who computed granary and earthwork volumes. Euclid proved that prisms on equal bases with equal heights have equal volume, using the method of exhaustion to handle the oblique case rigorously. The original motivation was thoroughly practical — taxation, construction, storage — before the Greeks axiomatized it. Cavalieri's principle, articulated by Bonaventura Cavalieri in the 17th century, later gave the cleanest justification that shearing a prism sideways leaves its volume unchanged.
