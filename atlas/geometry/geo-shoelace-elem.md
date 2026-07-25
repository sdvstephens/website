Give me three corners — $(0,0)$, $(4,0)$, $(0,3)$ — and no ruler, no drawing, no altitude to measure.
Can you still name the triangle's area exactly? It is $6$, and there is a single arithmetic pattern
in the six coordinates that spits it out for *any* three corners, however tilted. What is the
pattern, and why does it always land on the true area?

## Discovery

Take a triangle with vertices $(x_1,y_1)$, $(x_2,y_2)$, $(x_3,y_3)$, listed in order as you walk
around it. All the coordinates below are positive to start, so you can picture the triangle sitting
above the $x$-axis.

1. Look at one directed edge, from $(x_1,y_1)$ to $(x_2,y_2)$. Drop a vertical segment from each
   endpoint down to the $x$-axis. The edge, the two verticals, and the piece of axis between them
   bound a trapezoid whose two parallel (vertical) sides have lengths $y_1$ and $y_2$ and whose width
   is the horizontal run $x_2 - x_1$. Using the area of a trapezoid (average of parallel sides times
   width), write the *signed* area under this edge, keeping the run $x_2 - x_1$ with its sign so that
   moving left contributes negatively.
2. Do the same for all three directed edges in order — from $(x_1,y_1)$ to $(x_2,y_2)$, then to
   $(x_3,y_3)$, then back to $(x_1,y_1)$ — and add the three signed trapezoid areas. Watch which
   terms recur with opposite signs as you go around and cancel. Write what the total sum simplifies
   to after the cancellation.
3. Regroup the surviving sum by collecting the terms multiplied by each of $x_1$, $x_2$, $x_3$. Write
   the grouped expression, and decide what to do about its overall sign (it may come out negative if
   you circled the triangle one way rather than the other) and about any leftover factor.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The shoelace formula (triangle case).** A triangle with vertices $(x_1,y_1)$, $(x_2,y_2)$,
$(x_3,y_3)$ has area
$$[\triangle] = \tfrac12\left|\, x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\,\right|.$$
Equivalently, writing the vertices cyclically ($x_4=x_1$, $y_4=y_1$),
$$[\triangle] = \tfrac12\left|\sum_{i=1}^{3}\left(x_i y_{i+1} - x_{i+1} y_i\right)\right|.$$
The absolute value removes the dependence on which way you circled the triangle; the same "cross and
subtract, then sum" pattern extends to any polygon by listing its vertices in order (unlocking
`geo-shoelace`). A value of $0$ inside the bars means the three points are collinear (no triangle).

### Proof

Walk around the triangle in the vertex order, and for each directed edge measure the signed area of
the trapezoid dropped from that edge to the $x$-axis. For the edge from $(x_i,y_i)$ to
$(x_{i+1},y_{i+1})$ (indices taken cyclically, so the third edge returns to the first vertex), the
trapezoid has parallel vertical sides $y_i$ and $y_{i+1}$ and signed width $x_{i+1}-x_i$; by the
trapezoid area rule (`geo-area-basics`, the average of the parallel sides times the width) its signed
area is
$$T_i = \tfrac12\,(x_{i+1}-x_i)\,(y_i + y_{i+1}).$$
Keeping the width signed makes $T_i$ positive when the edge moves rightward and negative when it moves
leftward, so that summing around the closed loop adds the region under the "lower" edges and subtracts
it back off under the "upper" edges, leaving exactly the enclosed area (up to sign). Summing over the
three edges,
$$S = \sum_{i=1}^{3} T_i = \tfrac12\sum_{i=1}^{3}\left(x_{i+1}y_i + x_{i+1}y_{i+1} - x_i y_i - x_i y_{i+1}\right).$$
The terms $x_{i+1}y_{i+1} - x_i y_i$ telescope around the closed cycle and sum to $0$ (each
$x_j y_j$ appears once with $+$ and once with $-$). What remains is
$$S = \tfrac12\sum_{i=1}^{3}\left(x_{i+1}y_i - x_i y_{i+1}\right) = -\tfrac12\sum_{i=1}^{3}\left(x_i y_{i+1} - x_{i+1} y_i\right).$$
Expanding the surviving sum and regrouping by $x_1,x_2,x_3$,
$$\sum_{i=1}^{3}\left(x_i y_{i+1} - x_{i+1} y_i\right)
  = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2).$$
The quantity $S$ is the enclosed area carried with a sign: positive if the vertices were listed
counterclockwise, negative if clockwise. Since area is nonnegative, the triangle's area is $|S|$:
$$[\triangle] = \tfrac12\left|\,x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\,\right|.$$
If the three points are collinear they enclose no region, the signed trapezoids cancel completely, and
the bracket is $0$, correctly reporting area $0$. Finally, the derivation used no assumption that the
coordinates are positive: shifting the whole triangle upward by a constant $c$ replaces every $y_i$ by
$y_i + c$, and in each difference $y_{i+1}-y_i$ the constant cancels, so the formula is unchanged and
holds for triangles anywhere in the plane. $\blacksquare$

### Worked Instance

The Hook: vertices $(0,0)$, $(4,0)$, $(0,3)$, taken in that order. With $(x_1,y_1)=(0,0)$,
$(x_2,y_2)=(4,0)$, $(x_3,y_3)=(0,3)$,
$$x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0\,(0-3) + 4\,(3-0) + 0\,(0-0) = 12,$$
so
$$[\triangle] = \tfrac12\,|12| = 6.$$
This is a right triangle with legs $4$ and $3$ along the axes, base-times-height giving
$\tfrac12\cdot 4\cdot 3 = 6$ — the shoelace agrees with `geo-area-basics`, but needed only the
coordinates. Listing the same vertices the other way, $(0,0),(0,3),(4,0)$, yields $-12$ inside the
bars; the absolute value still returns $6$.

### Pitfalls

- **Keep the $\tfrac12$ and the absolute value.** The bracket is *twice* the signed area; halve it,
  and take the magnitude, or you report double the area or a negative "area."
- **Go around consistently.** List the vertices in a single rotational order (all clockwise or all
  counterclockwise). Jumping order scrambles the cross terms and corrupts the sum.
- **A zero result means collinear, not an error.** If the bracket is $0$, the three points lie on one
  line and there is no triangle — the formula is telling you so.
- **Cross-multiply the right pairs.** Each term pairs an $x$ with the *next* vertex's $y$ minus the
  *previous* vertex's $y$; mismatching the indices is the classic shoelace slip.

:::
:::

## Connections

The shoelace formula fuses `geo-area-basics` (area as trapezoids, and the base-height check) with
`geo-analytic-lines` (edges as directed segments in coordinates), turning a triangle's area into pure
coordinate arithmetic. The telescoping trapezoid argument generalizes verbatim to any simple polygon —
list the vertices in order and sum the cross terms — which is the content of `geo-shoelace`. The signed
version is also a collinearity test: the bracket vanishes exactly when the points fail to form a
triangle. Recognition trigger: an area asked for from coordinates alone, a polygon with known
vertices, or a check of whether three points are collinear.

## History

The shoelace or surveyor's formula, which computes a polygon's area from the coordinates of its vertices, was published by the German mathematician Albrecht Ludwig Friedrich Meister in 1769 and is often associated with Carl Friedrich Gauss, who applied it in geodesy. It arose from the practical needs of surveying — finding land areas from measured corner positions — where triangulating by hand was laborious. The formula packages the signed areas of triangles into a single alternating sum of coordinate cross-products, whose criss-crossing pattern gives the "shoelace" name. It sits squarely in the analytic-geometry tradition, extracting a geometric magnitude directly from coordinates.
