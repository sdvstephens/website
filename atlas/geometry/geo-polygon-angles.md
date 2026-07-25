Walk once around the outside of a city block shaped like any convex polygon, turning at each corner to
face along the next wall. By the time you are back where you started you are pointing exactly the way you
began — you have turned through one full revolution, no more and no less, whether the block has five
corners or fifty. And each interior corner of a regular pentagon measures exactly $108^\circ$, a regular
octagon exactly $135^\circ$. Where do these precise numbers come from, and why is the total turn always
the same?

## Discovery

A **convex polygon** has $n$ vertices and $n$ sides, with no corner pushed inward. You may use just one
fact: the three angles of any triangle sum to $180^\circ$.

1. Take a convex pentagon ($n=5$). From one chosen vertex, draw the diagonals to every non-adjacent
   vertex. Count the triangles the pentagon is cut into. Do the same for a hexagon ($n=6$) and a
   heptagon ($n=7$), and find the rule relating the triangle count to $n$.
2. Every one of those triangles contributes $180^\circ$, and — because all the diagonals fan out from a
   *single* vertex — the triangles' angles reassemble the polygon's interior angles with none left out
   and none counted twice. Using your count from step 1, write the polygon's total interior angle as a
   formula in $n$.
3. Now specialize to a **regular** polygon, where all $n$ interior angles are equal. From the total in
   step 2, what is one interior angle?
4. At each vertex, the interior angle and the **exterior angle** (the amount you turn to continue along
   the boundary) together make a straight angle. Add the exterior angles over all $n$ vertices, and use
   your step-2 total to simplify. What single number results — and does it mention $n$ at all?
5. For a regular polygon, get one exterior angle straight from step 4, then check it equals $180^\circ$
   minus your step-3 interior angle.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a **convex $n$-gon**:
$$\text{sum of interior angles} = (n-2)\cdot 180^\circ.$$
Taking one exterior angle per vertex,
$$\text{sum of exterior angles} = 360^\circ,$$
independent of $n$. For a **regular** $n$-gon (all sides and all angles equal), each interior angle is
$$\frac{(n-2)\cdot 180^\circ}{n}, \qquad \text{and each exterior angle is } \frac{360^\circ}{n}.$$

### Proof

**Interior sum by triangulation.** Label the vertices $V_1, V_2, \ldots, V_n$ in order around a convex
$n$-gon. From $V_1$ draw the diagonals $\overline{V_1V_3}, \overline{V_1V_4}, \ldots, \overline{V_1V_{n-1}}$.
Because the polygon is convex, each such diagonal lies inside, and consecutive ones bound the triangles
$$\triangle V_1V_2V_3,\ \triangle V_1V_3V_4,\ \ldots,\ \triangle V_1V_{n-1}V_n,$$
of which there are exactly $n-2$ (the triangles use the vertices $V_2,\ldots,V_{n-1}$ as their "middle"
apex, one each). These triangles partition the polygon's interior, and their angles partition the
polygon's interior angles: at $V_2$ and at $V_n$ a single triangle supplies the whole corner angle, while
at $V_1$ and at each $V_k$ ($3 \le k \le n-1$) the corner angle is split among the triangles meeting there,
with no overlap or gap. Since each triangle contributes $180^\circ$,
$$\text{sum of interior angles} = (n-2)\cdot 180^\circ.$$

**Exterior sum.** At each vertex the interior and exterior angles are supplementary, summing to
$180^\circ$. Over all $n$ vertices,
$$\text{(sum interior)} + \text{(sum exterior)} = 180^\circ \cdot n.$$
Substituting the interior sum,
$$\text{sum exterior} = 180^\circ n - (n-2)\cdot 180^\circ = 180^\circ n - 180^\circ n + 360^\circ = 360^\circ.$$

**Regular case.** If all $n$ interior angles are equal, each is the total divided by $n$, namely
$\dfrac{(n-2)\cdot 180^\circ}{n}$; likewise each exterior angle is $\dfrac{360^\circ}{n}$. $\blacksquare$

### Worked Instance

The Hook's numbers. A regular pentagon has $n=5$: interior angle $\dfrac{(5-2)\cdot180^\circ}{5} =
\dfrac{540^\circ}{5} = 108^\circ$. A regular octagon has $n=8$: $\dfrac{6\cdot180^\circ}{8} =
\dfrac{1080^\circ}{8} = 135^\circ$. The full-revolution walk is the exterior-angle sum: for the pentagon
each turn is $\dfrac{360^\circ}{5} = 72^\circ$, and five turns make $5\cdot72^\circ = 360^\circ$ — one
complete rotation, exactly as felt on the walk, and $108^\circ + 72^\circ = 180^\circ$ checks the pair.
For the tiling question, a regular hexagon ($n=6$) has interior angle $\dfrac{4\cdot180^\circ}{6} =
120^\circ$; three hexagons meeting at a point fill $3\cdot120^\circ = 360^\circ$ with no gap, which is
why honeycombs tile the plane.

### Pitfalls

- **It's $(n-2)$, not $(n-1)$ or $n$.** The commonest error is miscounting the triangles: a diagonal fan
  from one vertex yields $n-2$ of them, not $n$.
- **The $360^\circ$ exterior total counts one exterior angle per vertex**, taken consistently (all
  turning the same way). Adding both exterior angles at each vertex, or mixing directions, ruins it.
- **The single-angle formulas need a *regular* polygon.** $\dfrac{(n-2)180^\circ}{n}$ is one angle only
  when all angles are equal; for an irregular polygon you know only the *sum*.
- **Interior versus exterior.** $\dfrac{(n-2)180^\circ}{n}$ is the interior angle; $\dfrac{360^\circ}{n}$
  is the exterior. They are supplementary, not equal.
- **Convex assumption.** For a non-convex (reflex-cornered) polygon the interior *sum* $(n-2)180^\circ$
  still holds for a simple polygon, but the tidy exterior-angle picture needs signed turns.

:::
:::

## Connections

This theorem grows straight out of `geo-triangle-angle-sum`: the whole result is triangulation plus
$180^\circ$ per triangle, exactly the diagonal trick met for the quadrilateral in `geo-quadrilaterals`
(the $n=4$ case gives $360^\circ$). It feeds `geo-polygon-area`, where the same "cut into triangles"
instinct measures area instead of angles, and it certifies which regular polygons tile the plane (only
those whose interior angle divides $360^\circ$). Recognition trigger: any problem naming a pentagon,
hexagon, or "$n$-gon," asking for a corner angle, a turn total, or whether shapes fit around a point —
reach for $(n-2)180^\circ$ inside and $360^\circ/n$ outside.

## History

The rule that the interior angles of a convex $n$-gon sum to $(n-2)\cdot 180^\circ$ is a direct generalization of Euclid's triangle angle sum (*Elements* I.32, c. 300 BC), obtained by cutting the polygon into $n-2$ triangles from one vertex. Euclid himself noted the companion fact, recorded in a corollary to I.32, that the exterior angles of any convex polygon always total $360^\circ$ no matter how many sides it has — a beautifully invariant result. Proclus in the fifth century AD discussed these angle sums in his commentary on Euclid. The exterior-angle version has an appealing physical reading: walking once around the polygon's boundary, one turns through exactly one full revolution. This idea generalizes to the "total turning" of smooth curves and eventually to the Gauss–Bonnet theorem, linking an elementary polygon fact to the curvature of surfaces.
