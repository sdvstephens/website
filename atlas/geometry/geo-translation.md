Take a triangle drawn on graph paper and nudge every corner exactly $5$ squares right and $2$
squares down. The new triangle looks identical to the old one — same size, same tilt, just parked
somewhere else on the page. Nothing seems to have bent or stretched. Why does moving *every* point by
the *same* amount leave the figure so completely untouched, and what single instruction captures the
move?

## Discovery

Work in the coordinate plane. Fix one pair of numbers $(a,b)$ and agree to send every point $(x,y)$
to the new point $(x+a,\,y+b)$ — the same $(a,b)$ added to everyone.

1. Start with a triangle whose vertices are $P=(x_1,y_1)$, $Q=(x_2,y_2)$, $R=(x_3,y_3)$. Apply the
   rule to all three, getting $P'$, $Q'$, $R'$. Write down the coordinates of each image vertex.
2. Look at side $\overline{PQ}$. Its horizontal span is the difference $x_2-x_1$ and its vertical
   span is $y_2-y_1$. Now compute the horizontal span $x_2'-x_1'$ and vertical span $y_2'-y_1'$ of
   the image side $\overline{P'Q'}$, substituting the coordinates from step $1$. What happens to the
   constant $a$ in the horizontal difference, and to $b$ in the vertical difference?
3. The length of a segment is built from exactly those two spans (horizontal and vertical). Using
   your finding in step $2$, decide how $P'Q'$ compares to $PQ$. Repeat the reasoning for the other
   two sides. What does this force about the two triangles?
4. Read the vertices of the original triangle in order $P\to Q\to R$ and note whether that path turns
   clockwise or counterclockwise. Do the same for $P'\to Q'\to R'$. Did the sense of the turn change?
5. Now slide a second time: after the first move by $(a,b)$, apply another move by $(c,d)$ to every
   image point. Track where a single point $(x,y)$ ends up after both moves. What one pair of numbers,
   used in a single slide, would carry $(x,y)$ to that same final spot?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **translation** by the vector $(a,b)$ is the map of the plane
$$(x,y)\ \mapsto\ (x+a,\ y+b),$$
which shifts every point by the same horizontal amount $a$ and vertical amount $b$. It is a
**slide**: no turning, no flipping.

- **A translation is an isometry** (a distance-preserving map): for any two points $P,Q$, the image
  segment satisfies $P'Q' = PQ$.
- **The image is congruent to the original.** Since every distance is preserved, a translated figure
  is congruent to the figure it came from (`geo-congruence-def`), and its orientation
  (clockwise/counterclockwise vertex order) is unchanged.
- **Translations compose by adding vectors.** Translating by $(a,b)$ and then by $(c,d)$ is the
  single translation by $(a+c,\ b+d)$.

### Proof

**Distances are preserved.** Let $P=(x_1,y_1)$ and $Q=(x_2,y_2)$ be any two points, with images
$P'=(x_1+a,\ y_1+b)$ and $Q'=(x_2+a,\ y_2+b)$. The horizontal span of the image segment is
$$(x_2+a)-(x_1+a) = x_2-x_1,$$
and the vertical span is
$$(y_2+b)-(y_1+b) = y_2-y_1.$$
The added constants $a$ and $b$ cancel in each difference, so the image segment has exactly the same
horizontal and vertical spans as the original. The distance between two points is determined by those
two spans alone, so
$$P'Q' = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} = PQ.$$
Thus the translation preserves every distance: it is an isometry.

**The image is congruent.** Apply this to a triangle $\triangle PQR$ with image $\triangle P'Q'R'$.
Each side is preserved: $P'Q'=PQ$, $Q'R'=QR$, $R'P'=RP$. All three pairs of corresponding sides are
equal, so by SSS congruence $\triangle PQR \cong \triangle P'Q'R'$. The same holds for any polygon by
triangulating it, or directly since every pairwise distance is preserved. Orientation is preserved
because each coordinate difference $x_2-x_1$ and $y_2-y_1$ keeps its sign; the signed test for
clockwise-versus-counterclockwise order is built from those very differences, so its sign — the sense
of the turn — cannot flip.

**Composition adds vectors.** Apply the translation by $(a,b)$ to $(x,y)$, obtaining
$(x+a,\ y+b)$; then apply the translation by $(c,d)$:
$$(x+a,\ y+b)\ \mapsto\ \big((x+a)+c,\ (y+b)+d\big) = (x+a+c,\ y+b+d).$$
Regrouping, this is $\big(x+(a+c),\ y+(b+d)\big)$, which is exactly the translation by the single
vector $(a+c,\ b+d)$. Since $(x,y)$ was arbitrary, the two slides together equal that one slide.
$\blacksquare$

### Worked Instance

Translate the triangle $P=(1,1)$, $Q=(4,3)$, $R=(2,5)$ by the vector $(5,-2)$. Adding $(5,-2)$ to
each vertex:
$$P'=(6,-1),\qquad Q'=(9,1),\qquad R'=(7,3).$$
Check side $\overline{PQ}$ against $\overline{P'Q'}$. Original:
$$PQ = \sqrt{(4-1)^2+(3-1)^2} = \sqrt{9+4} = \sqrt{13}.$$
Image:
$$P'Q' = \sqrt{(9-6)^2+(1-(-1))^2} = \sqrt{3^2+2^2} = \sqrt{9+4} = \sqrt{13}.$$
The length is unchanged, exactly as the Hook promised — the slide relocated the triangle without
altering it. Reading $P\to Q\to R$ counterclockwise, the image $P'\to Q'\to R'$ still runs
counterclockwise: no flip occurred. And translating $P'$ further by $(1,2)$ lands it at $(7,1)$, the
same place a single slide by $(5+1,\,-2+2) = (6,0)$ takes $P=(1,1)$.

### Pitfalls

- **Every point moves by the *same* vector.** A translation adds one fixed $(a,b)$ to all points; it
  is not a stretch where far-away points move more. If different points shift by different amounts,
  it is not a translation.
- **A slide has no turn and no flip.** Translations preserve orientation. If the vertex order
  reverses (clockwise becomes counterclockwise), you have reflected, not translated.
- **Congruent, not rescaled.** The image is the same size as the original — lengths are preserved, not
  multiplied by a factor. Do not confuse a slide with an enlargement.
- **Order of coordinates in the vector.** The vector $(a,b)$ means "$a$ across, $b$ up"; swapping them
  slides in a different direction, just as $(x,y)$ and $(y,x)$ name different points.

:::
:::

## Connections

Translation is the gentlest of the rigid motions promised by `geo-congruence-def`: it realizes the
"slide" that makes two figures congruent, and its proof lives entirely in the coordinate machinery of
`def-coordinate-plane`, where a shift is just adding a constant to each coordinate. It is the launch
point for the other transformations — `geo-rotation` (turns about a center), `geo-reflection` (flips
across a line), and `geo-dilation` (scalings about a center) — each of which is analyzed the same way:
track what happens to coordinates, then read off the effect on distance, orientation, and size.
Recognition trigger: any "shift every point by the same amount," "move the figure without turning it,"
or a problem where a vector $(a,b)$ is added uniformly to a set of points.

## History

Sliding a figure without turning it is the simplest rigid motion, and while the Greeks used "superposition" informally to argue congruence, transformations became objects of study in their own right only much later. Leonhard Euler, in the 18th century, analyzed rigid motions of the plane and space algebraically, and it was Felix Klein's *Erlangen Program* of 1872 that reorganized all of geometry around groups of transformations, with translations as the most basic symmetries. Klein's motivation was to unify the many competing geometries of his day by asking, for each, which transformations leave its properties unchanged. In this view a translation is defined cleanly by a single displacement vector — the language that coordinate geometry made natural.
