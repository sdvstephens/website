From each corner of a triangle draw the segment to the midpoint of the far side. Three such
segments — and instead of forming a little triangle in the middle where they cross, all three stab
through one single point. Balance a cardboard triangle on a pin at that point and it hangs level.
Even stranger: that point sits not halfway up each segment but at a fixed two-thirds of the way from
the corner. Why one common point, and why always two-thirds?

## Discovery

A **median** joins a vertex to the midpoint of the opposite side.

1. In $\triangle ABC$ let $M$ be the midpoint of $\overline{BC}$; draw the median $\overline{AM}$.
   Triangles $ABM$ and $ACM$ share the vertex $A$. What do their bases $BM$ and $MC$ satisfy, and
   what single altitude from $A$ serves *both* triangles? Using area $= \tfrac12 bh$, compare
   $[ABM]$ and $[ACM]$.
2. Now let $M$ be the midpoint of $\overline{BC}$ and $N$ the midpoint of $\overline{AC}$. Compare
   $\triangle CMN$ with $\triangle CBA$: the angle at $C$ is shared, and the two sides enclosing it
   are each halved. Which similarity criterion fits? Read off what it says about the length $MN$
   relative to $AB$, and about the direction of $\overline{MN}$ relative to $\overline{AB}$.
3. Draw two medians: $\overline{AM}$ (with $M$ the midpoint of $\overline{BC}$) and $\overline{BN}$
   (with $N$ the midpoint of $\overline{AC}$). Let them cross at $G$. Using the segment
   $\overline{MN}$ and the parallelism from step 2, find a pair of similar triangles that contain
   $G$ — look at $\triangle GMN$ against $\triangle GAB$. What is their ratio, and therefore in what
   ratio does $G$ divide each of $\overline{AM}$ and $\overline{BN}$?
4. Step 3 located a crossing point on two of the three medians. Now bring in the third median (from
   $C$ to the midpoint of $\overline{AB}$). Repeat the step-3 argument for a *different* pair of
   medians and explain why the point it produces on $\overline{AM}$ has to be the *same* point $G$
   you already found.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **median** of a triangle joins a vertex to the midpoint of the opposite side.

- **Equal-area halves.** A median divides the triangle into two triangles of equal area.
- **Concurrency at the centroid.** The three medians of a triangle meet at a single point $G$, the
  **centroid** (also the triangle's center of mass / balance point).
- **The $2:1$ ratio.** The centroid divides each median in the ratio $2:1$ measured from the
  vertex: if $M$ is the midpoint of the side opposite $A$, then $AG : GM = 2 : 1$.

### Proof

**A median halves the area.** With $M$ the midpoint of $\overline{BC}$, triangles $ABM$ and $ACM$
have equal bases $BM = MC$ and share the perpendicular distance from $A$ to line $BC$ as their
common height. By area $= \tfrac12 bh$, $[ABM] = [ACM]$ (each is half of $[ABC]$).

**Midsegment lemma.** Let $N$, $M$ be the midpoints of $\overline{AC}$, $\overline{BC}$. Triangles
$CNM$ and $CAB$ share $\angle C$, and $\tfrac{CN}{CA} = \tfrac{CM}{CB} = \tfrac12$. By SAS
similarity, $\triangle CNM \sim \triangle CAB$ with ratio $\tfrac12$. Hence $NM = \tfrac12 AB$, and
$\angle CNM = \angle CAB$, which (as corresponding angles on transversal $AC$) forces
$MN \parallel AB$.

**The $2:1$ ratio.** Let medians $\overline{AM}$ and $\overline{BN}$ meet at $G$. By the midsegment
lemma, $MN \parallel AB$ and $MN = \tfrac12 AB$. Since $MN \parallel AB$, transversal $AM$ gives
$\angle GMN = \angle GAB$ and transversal $BN$ gives $\angle GNM = \angle GBA$ (alternate interior
angles). By AA, $\triangle GMN \sim \triangle GAB$, with ratio $\tfrac{MN}{AB} = \tfrac12$.
Corresponding sides then give $\tfrac{GM}{GA} = \tfrac{GN}{GB} = \tfrac12$, that is
$$AG : GM = 2 : 1 \quad\text{and}\quad BG : GN = 2 : 1.$$

**Concurrency.** Let the third median run from $C$ to the midpoint $P$ of $\overline{AB}$, and let
it meet $\overline{AM}$ at $G'$. Apply the identical argument with the midsegment $\overline{MP}$
(where $M$, $P$ are midpoints of $\overline{BC}$, $\overline{AB}$, so $MP \parallel AC$ and
$MP = \tfrac12 AC$): comparing $\triangle G'MP \sim \triangle G'AC$ yields $AG' : G'M = 2 : 1$. But
there is only one point of segment $\overline{AM}$ dividing it $2:1$ from $A$, so $G' = G$.
Therefore the third median also passes through $G$: all three medians are concurrent at the
centroid. $\blacksquare$

### Worked Instance

Take $A = (0,0)$, $B = (6,0)$, $C = (0,9)$. The midpoint of $\overline{BC}$ is $M = (3, 4.5)$, so
the median $\overline{AM}$ runs from $(0,0)$ to $(3,4.5)$. The point two-thirds of the way from $A$
to $M$ is
$$G = A + \tfrac{2}{3}(M - A) = \left(\tfrac23 \cdot 3,\ \tfrac23 \cdot 4.5\right) = (2, 3).$$
Notice this equals the average of the three vertices, $\big(\tfrac{0+6+0}{3}, \tfrac{0+0+9}{3}\big)
= (2,3)$ — the centroid is the mean of the vertices, which is exactly why it is the balance point.
Confirm the third median passes through it: the median from $B = (6,0)$ to the midpoint of
$\overline{AC}$, namely $N = (0, 4.5)$, is parametrized by $(6 - 6t,\ 4.5t)$; setting $6 - 6t = 2$
gives $t = \tfrac23$, and then $4.5 \cdot \tfrac23 = 3$, landing on $(2,3) = G$. The Hook's two
mysteries — one crossing point, always two-thirds — are both settled.

### Pitfalls

- **The $2:1$ is measured from the vertex.** The long piece touches the vertex: $AG : GM = 2:1$, so
  $GM : GA = 1 : 2$. Reversing the order is the classic slip.
- **A median goes to the midpoint of a side** — not to the foot of an altitude and not to where an
  angle bisector lands. These three cevians coincide only in special (isosceles/equilateral)
  triangles.
- **Centroid vs. the other centers.** The centroid is the average of the vertices and always lies
  inside the triangle; it is distinct from the circumcenter, incenter, and orthocenter.
- **"Halves the area" is about a single median.** One median cuts the triangle into two equal areas.
  (Taken together, the three medians cut it into six small triangles of equal area — a stronger fact
  — but a single median only guarantees the two-way split.)
- **Length ratio, not area ratio.** "The centroid divides the median $2:1$" is a statement about
  lengths along the median, not about areas.

:::
:::

## Connections

This node uses `geo-similarity-def` (SAS and AA similarity, and the midsegment they generate) and
`geo-area-basics` (the $\tfrac12 bh$ formula and equal-height area ratios); the sliding-area result
of `geo-same-base-altitude` is the same equal-area idea in disguise. The centroid takes its place
beside the circumcenter (`geo-perpendicular-bisector`), the incenter (`geo-angle-bisector`), and the
orthocenter (`geo-altitudes-orthocenter`); remarkably, three of these — centroid, circumcenter,
orthocenter — turn out to be collinear on the Euler line. Recognition trigger: midpoints of sides in
a figure, a request for a balance point or center of mass, or any appearance of a $2:1$ split along
a cevian.

## History

That a triangle's three medians meet in a single point was known to the Greeks, and the deepest early insight came from Archimedes in the third century BC, who identified that point as the triangle's center of gravity in his work *On the Equilibrium of Planes*. Reasoning physically about how a triangular plate balances, Archimedes established that the centroid divides each median in the ratio $2:1$, the vertex portion being twice the far portion. This fusion of geometry and mechanics was characteristic of his method, treating shapes as if they had weight. The purely geometric proof of concurrency is straightforward once one uses similar triangles or coordinates, but Archimedes' balance argument gave the point its enduring physical meaning. To this day the centroid is the point at which a uniform triangular lamina hangs level.
