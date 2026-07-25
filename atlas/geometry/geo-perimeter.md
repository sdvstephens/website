You want to fence a garden. The fence follows the edge of the plot exactly once, all the way
around, back to where you started. How many metres of fence you buy depends only on that trip
around the edge — not on how big the enclosed field is, not on its shape's cleverness, just the
length of the walk. A long thin plot and a fat square plot can swallow the same amount of fence.
What single number captures that walk?

## Discovery

Picture an ant that starts at one corner of a plot, crawls along the boundary, and stops the
instant it first returns to its starting corner — never retracing, never cutting across.

1. The plot is a four-cornered rectangle with corners in order $A,B,C,D$, its side lengths
   $\overline{AB},\overline{BC},\overline{CD},\overline{DA}$. The ant walks $A\to B\to C\to D\to A$.
   Write the total distance it crawls as a single expression built from those four side lengths.
2. In a rectangle, opposite sides are equal: say the two long sides each measure $l$ and the two
   short sides each measure $w$. Rewrite the total distance from step $1$ using only $l$ and $w$,
   and then compress it so the numbers $l$ and $w$ each appear as *few* times as possible.
3. Now the plot is a triangle with corners $A,B,C$ and side lengths $a,b,c$. Send the ant around
   $A\to B\to C\to A$ and write its total distance.
4. Now the plot is a regular $n$-gon — $n$ corners, and every one of its sides has the *same*
   length $s$. Send the ant all the way around and write its total distance as compactly as you
   can, using $n$ and $s$.
5. A plot is an "L" — a six-sided rectilinear shape. Reading around it the horizontal runs are
   $7,\ ?,\ 4$ and the vertical runs are $3,\ ?,\ 5$ (the two "$?$" sides are unlabelled). Using
   the fact that the leftmost vertical run must equal the sum of the other two verticals, and the
   bottom horizontal run must equal the sum of the other two horizontals, recover the two missing
   side lengths, then total all six to get the ant's trip.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **perimeter** of a polygon is the total length of its boundary: the sum of the lengths of all
its sides. If a polygon has sides of lengths $s_1, s_2, \dots, s_n$, then
$$P = s_1 + s_2 + \cdots + s_n.$$
Three specializations follow immediately:
- **Rectangle** with length $l$ and width $w$: $\;P = 2(l+w)$.
- **Triangle** with sides $a,b,c$: $\;P = a+b+c$.
- **Regular $n$-gon** with side length $s$: $\;P = ns$.

Perimeter is a length (measured in the same units as the sides), and it depends only on the side
lengths, never on the enclosed area.

### Proof

The boundary of a polygon is a closed chain of segments that meet only at the vertices; no two
sides overlap along any stretch of positive length. So the boundary is *partitioned* into its
sides. By the additivity of length along a segment path (segment addition, `geo-segments-rays`),
the length of the whole boundary is the sum of the lengths of the pieces:
$$P = s_1 + s_2 + \cdots + s_n. $$

For a rectangle, the four sides come in two equal pairs — two of length $l$ and two of length $w$ —
so
$$P = l + w + l + w = (l+l)+(w+w) = 2l + 2w = 2(l+w),$$
where regrouping and pairing use only the commutativity and associativity of addition
(`ari-addition`). For a triangle the sum is simply $a+b+c$, with no pairs to combine. For a regular
$n$-gon all $n$ sides equal $s$, so the sum is $n$ copies of $s$ added together, i.e. $ns$. In every
case the perimeter is a bare sum of the sides, and equal sides may be collected. $\blacksquare$

### Worked Instance

Back to the garden fence. Suppose the plot is a rectangle $18$ m long and $12$ m wide. Then
$$P = 2(l+w) = 2(18+12) = 2\cdot 30 = 60 \text{ m of fence}.$$
Notice the shape-blindness the Hook promised: a rectangle $29$ m by $1$ m has $P = 2(29+1)=60$ m
too — the same fence encloses a wildly thinner field. And the L-shaped plot from Discovery step $5$:
the unlabelled vertical is the full-height left side, so it equals the sum of the other two
verticals, $3+5=8$; the unlabelled horizontal is the full-width bottom side, so it equals the sum of
the other two horizontals, $7+4=11$. Totalling all six sides,
$$P = 3 + 5 + 8 + 7 + 4 + 11 = 38 \text{ m},$$
the ant's full trip around the boundary — a number about the edge, saying nothing about the interior.

### Pitfalls

- **Perimeter is not area.** Perimeter measures the *edge* (a length); area measures the *inside*
  (a length squared). Two shapes can share a perimeter and have utterly different areas.
- **Do not forget a side.** The perimeter of a rectangle is $2(l+w)$, not $l+w$; both the length
  and the width occur *twice*.
- **Only regular polygons collapse to $ns$.** If the sides are unequal you must add them
  individually — $ns$ silently assumes every side equals $s$.
- **Rectilinear ("staircase") shapes still have all their sides.** In an L-shape the two "notch"
  edges count; deduce hidden side lengths from the fact that parallel runs on opposite sides must
  match up.

:::
:::

## Connections

Perimeter rests on two prereqs: the meaning of a **segment length** and its additivity along a
path (`geo-segments-rays`), and the grouping laws of **addition** (`ari-addition`) that let you
collect equal sides into products like $2(l+w)$ and $ns$. It is the length counterpart of area:
`geo-polygon-area` measures the two-dimensional inside, while perimeter measures the
one-dimensional edge, and keeping the two apart is a lifelong discipline. Recognition trigger:
any "how much fencing / trim / border / edging," any "distance once around," or any figure where
you must total the boundary — including deducing hidden sides of a staircase shape — is a perimeter
computation.

## History

Measuring the distance around a field is among the oldest of all mathematical acts, predating deductive geometry by millennia. Egyptian surveyors known as *harpedonaptae*, or "rope-stretchers," used knotted cords to lay out and re-measure field boundaries after each Nile flood, a practice Herodotus in the fifth century BC identified as the very origin of geometry — the word itself meaning "earth measurement." Babylonian scribes likewise computed the lengths of bounded plots for taxation and construction on clay tablets. When Euclid systematized geometry around 300 BC he took such linear measurement as given and built figures from segments whose lengths simply add, so perimeter never needed a theorem, only a definition. The concept's humble, practical roots are a reminder that geometry grew from the needs of farmers and builders before it became an axiomatic science.
