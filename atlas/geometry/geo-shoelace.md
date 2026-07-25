Give me the corners of a polygon as coordinates — $(0,0)$, $(4,0)$, $(4,3)$, $(0,3)$ — and I will
hand you its area with no picture, no base-times-height, just multiply-and-subtract down two columns
and take half. For that square the answer is $12$, and the same crank works for a wildly irregular
$100$-gon. How can plain coordinates know the area of a shape you never drew?

## Discovery

Start with a triangle whose vertices are $P_1 = (x_1, y_1)$, $P_2 = (x_2, y_2)$, $P_3 = (x_3, y_3)$.

1. A useful building block: for two points $P = (x_1, y_1)$ and $Q = (x_2, y_2)$, the quantity
   $\tfrac12(x_1 y_2 - x_2 y_1)$ is the *signed* area of triangle $OPQ$ with $O$ the origin. Convince
   yourself of the magnitude by taking $P = (b, 0)$ and $Q = (0, h)$: what does the formula give, and
   does it match $\tfrac12 bh$?
2. Now take a triangle $P_1 P_2 P_3$ not touching the origin. Think of it as $OP_1P_2$ plus
   $OP_2P_3$ plus $OP_3P_1$, each a signed triangle from the origin, traversed around the boundary.
   Add the three signed areas from step 1. Write the sum for $\triangle P_1P_2P_3$.
3. What does "signed" buy you? Reverse the order of the vertices (go clockwise instead of
   counterclockwise) and recompute. How does the sign of the result change, and why does taking an
   absolute value at the end fix it?
4. Generalize to a polygon $P_1 P_2 \dots P_n$: the same telescoping sum of origin-triangles around
   the boundary. Write the area as a single sum over consecutive vertex pairs (with indices wrapping
   $P_{n+1} = P_1$).

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a simple polygon with vertices $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ listed in order around
the boundary (and $x_{n+1} := x_1$, $y_{n+1} := y_1$), the area is
$$A = \frac{1}{2}\left| \sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i) \right|.$$
The signed version (drop the absolute value) is positive for counterclockwise orientation and
negative for clockwise. Also called Gauss's area formula or the surveyor's formula; the name
"shoelace" comes from the criss-cross pattern of the products $x_i y_{i+1}$ and $x_{i+1} y_i$.

### Proof

Define the **signed area from the origin** of an ordered pair $P = (x_1,y_1)$, $Q = (x_2, y_2)$ as
$[OPQ] = \tfrac12(x_1 y_2 - x_2 y_1)$. This is the standard signed area of triangle $OPQ$ (positive
when $O, P, Q$ turn counterclockwise); its magnitude is $\tfrac12$ the parallelogram spanned by
$\vec{OP}, \vec{OQ}$.

**Claim.** For a polygon with vertices $P_1, \dots, P_n$ in order, the signed area is
$$S = \sum_{i=1}^n [OP_iP_{i+1}] = \frac12\sum_{i=1}^n (x_i y_{i+1} - x_{i+1} y_i), \qquad P_{n+1}=P_1.$$

To see this, decompose the polygon's (signed) area into the signed triangles $OP_iP_{i+1}$ swept as
the boundary is traversed. As the directed edge $P_iP_{i+1}$ moves along the boundary, the triangle
$OP_iP_{i+1}$ contributes $+$ area where the edge advances counterclockwise about $O$ and $-$ area
where it retreats. Summing over all edges, every region of the plane is counted with net multiplicity
$+1$ if inside the counterclockwise polygon and $0$ if outside: a point interior to the polygon is
enclosed by exactly one net counterclockwise wind of the boundary, while a point outside nets to
zero. (This is the planar case of the divergence/shoelace identity; formally, each interior point's
winding number is $1$ and each exterior point's is $0$.) Hence $S$ equals the enclosed area with sign
given by orientation.

Taking absolute value removes the orientation sign:
$$A = |S| = \frac12\left|\sum_{i=1}^n (x_i y_{i+1} - x_{i+1} y_i)\right|.$$
Reversing the vertex order negates every term $x_i y_{i+1} - x_{i+1} y_i$, hence negates $S$ but not
$|S|$, so the area is well defined regardless of traversal direction. $\blacksquare$

### Worked Instance

Resolve the Hook's harder cousin — an irregular quadrilateral with vertices, in order,
$(1,1), (4,1), (5,3), (2,4)$. Lay out the shoelace sum (wrap back to the first vertex):
$$\sum (x_i y_{i+1} - x_{i+1} y_i) = (1\cdot 1 - 4\cdot 1) + (4\cdot 3 - 5\cdot 1) + (5\cdot 4 - 2\cdot
3) + (2\cdot 1 - 1\cdot 4).$$
Term by term: $(1 - 4) + (12 - 5) + (20 - 6) + (2 - 4) = -3 + 7 + 14 - 2 = 16$. So
$$A = \tfrac12|16| = 8.$$
For the Hook's square $(0,0),(4,0),(4,3),(0,3)$: the sum is $(0 - 0)+(12 - 0)+(12 - 0)+(0 - 0) = 24$,
and $A = \tfrac12\cdot 24 = 12$, matching $4\times 3$.

### Pitfalls

- **Vertices must be in order** around the boundary (all clockwise or all counterclockwise). Feeding
  them in a scrambled order computes the area of a different, self-intersecting figure.
- Do not forget to **wrap around**: the last term pairs $P_n$ with $P_1$. Dropping the closing edge is
  the most common mistake.
- The absolute value and the factor $\tfrac12$ are both essential — the raw sum is *twice* the signed
  area.
- The formula assumes a **simple** polygon (non-self-intersecting). For a self-crossing polygon the
  signed sum still means something (a weighted winding-number area) but is not the naive enclosed
  area.
- Each product criss-crosses: it is $x_i y_{i+1} - x_{i+1} y_i$, not $x_i y_i - x_{i+1} y_{i+1}$.

:::
:::

## Connections

Prereqs: coordinate bashing (`geo-coordinate-bashing`) — once a figure is on axes, the shoelace
formula reads its area straight off the vertex list, no altitudes needed. The signed terms $x_i
y_{i+1} - x_{i+1} y_i$ are $2\times 2$ determinants, tying this to cross products and (later)
determinant-based area and Pick's theorem for lattice polygons. Recognition trigger: a polygon given
by coordinates (especially lattice points) with a request for its area, or any area problem where
placing coordinates is natural and the boundary is a known list of vertices.
