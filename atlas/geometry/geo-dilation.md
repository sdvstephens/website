Stand near a wall and shine a flashlight through a small triangle cut from cardboard; its shadow on
the wall is a bigger triangle of exactly the same shape. Move the cardboard twice as far from the
lamp and the shadow doubles in every dimension, yet not one of its angles changes. Something is
pushing every point *away from a single center* by the same factor. Why does that push always produce
a look-alike copy, and by exactly how much do its lengths, and its area, grow?

## Discovery

Fix a center $O$ and a positive number $k$. Send each point $P$ to the point $P'$ on ray $OP$ whose
distance from $O$ is $k$ times as large: $OP' = k\cdot OP$.

1. Pick a segment $\overline{PQ}$ that does not pass through $O$, and push both endpoints out by the
   factor $k$ to get $P'$ and $Q'$. Look at the two triangles $\triangle OPQ$ and $\triangle OP'Q'$.
   Compare $OP'$ with $OP$, and $OQ'$ with $OQ$. What do the sides through $O$ have in common as
   ratios, and what single angle do the two triangles share at $O$?
2. From step $1$, decide whether $\triangle OPQ$ and $\triangle OP'Q'$ are similar, and name the
   criterion. Once you have the similarity, what is the ratio $P'Q'/PQ$ of the third sides?
3. Similar triangles have equal corresponding angles. Use this to say what a dilation does to the
   angles of a figure, and — recalling how area behaves under scaling from `geo-similarity-def` — what
   it does to the area.
4. Now put $O$ at the origin and let $P=(x,y)$. Pushing $P$ out along ray $OP$ to $k$ times its
   distance stretches both its horizontal and vertical spans from $O$ by the same factor $k$. Write
   the coordinates of the image $P'$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **dilation** with center $O$ and scale factor $k$ (a nonzero real number) sends each point $P$ to
the point $P'$ on line $OP$ with
$$OP' = |k|\cdot OP,$$
taken on the *same* side of $O$ as $P$ when $k\gt 0$, and on the *opposite* side (through $O$) when
$k\lt 0$. About the origin its coordinate rule is
$$(x,y)\ \mapsto\ (kx,\ ky).$$
The image is **similar** to the original with scale factor $|k|$:
- **angles are preserved**,
- **lengths are multiplied by $|k|$**,
- **area is multiplied by $k^2$**.

A dilation is **not an isometry** unless $|k|=1$. (When $k=1$ it is the identity; when $k=-1$ it is a
$180^\circ$ rotation about $O$, a point reflection.)

### Proof

**A segment scales by $|k|$, and angles are preserved.** Take $O$ as center, factor $k$, and a
segment $\overline{PQ}$ with $O$, $P$, $Q$ not collinear. The images satisfy $OP'=|k|\,OP$ and
$OQ'=|k|\,OQ$ along the appropriate rays, so
$$\frac{OP'}{OP} = \frac{OQ'}{OQ} = |k|.$$
The two triangles $\triangle OPQ$ and $\triangle OP'Q'$ share the angle at $O$: when $k\gt 0$ the rays
$OP',OQ'$ coincide with $OP,OQ$, so the included angle is literally the same; when $k\lt 0$ both rays
reverse through $O$, and the resulting angle is vertical to $\angle POQ$, hence equal to it. Two pairs
of sides in the common ratio $|k|$ with equal included angles give
$$\triangle OPQ \sim \triangle OP'Q'$$
by SAS-similarity (`geo-similarity-def`). Therefore the third sides are in the same ratio,
$$\frac{P'Q'}{PQ} = |k| \quad\Longrightarrow\quad P'Q' = |k|\cdot PQ,$$
and corresponding angles are equal, so the angle a figure makes at each vertex is unchanged. (If $O$,
$P$, $Q$ are collinear, then $P'$, $Q'$ stay on that same line at scaled signed positions, and
$P'Q'=|k|\,PQ$ follows directly from the definition.)

**Area scales by $k^2$.** A whole polygon dilates edge by edge: every length is multiplied by $|k|$
and every angle is preserved, so the image polygon is similar to the original with scale factor $|k|$.
By the area law for similar figures (`geo-similarity-def`), area is multiplied by the *square* of the
scale factor, $|k|^2 = k^2$.

**Coordinate rule and the isometry case.** Placing $O$ at the origin, the point $P=(x,y)$ has
horizontal span $x$ and vertical span $y$ from $O$; pushing to $|k|$ times the distance along ray $OP$
multiplies each span by $k$ (the sign of $k$ handles the same-side/opposite-side choice at once),
giving $P'=(kx,ky)$. Distances are preserved exactly when the multiplier $|k|=1$; for any other $k$
lengths genuinely change, so a dilation is an isometry only in the case $|k|=1$. $\blacksquare$

### Worked Instance

Dilate the triangle $A=(1,0)$, $B=(3,0)$, $C=(1,2)$ by $k=2$ about the origin. The rule
$(x,y)\mapsto(2x,2y)$ gives
$$A'=(2,0),\qquad B'=(6,0),\qquad C'=(2,4).$$
This is a right triangle with legs along and up from $A$. Original legs: $AB=2$ and $AC=2$, so
perimeter $= 2+2+\sqrt{2^2+2^2} = 4+2\sqrt{2}$ and area $=\tfrac12\cdot2\cdot2 = 2$. Image legs:
$A'B'=4$ and $A'C'=4$, so perimeter $=4+4+\sqrt{4^2+4^2} = 8+4\sqrt{2}$ and area
$=\tfrac12\cdot4\cdot4 = 8$. The perimeter doubled (factor $k=2$) and the area quadrupled (factor
$k^2=4$), exactly the shadow's growth in the Hook.

A negative factor flips the picture through the center: dilating any point by $k=-1$ about the origin
sends $(x,y)\mapsto(-x,-y)$, which is the $180^\circ$ rotation about $O$ — a point reflection that
preserves length ($|k|=1$) while sending each point to the far side of $O$.

### Pitfalls

- **The center matters.** A dilation is defined about a specific point $O$. "Scale by $2$" is
  incomplete until you name the center; the same factor about a different center lands the figure
  elsewhere. Only the center itself is fixed.
- **Area scales by $k^2$, not $k$.** Doubling every length ($k=2$) quadruples the area. This is the
  most common scaling slip, inherited straight from `geo-similarity-def`.
- **Negative $k$ sends points to the far side of $O$.** For $k\lt 0$, $P'$ lies on the ray *opposite*
  $OP$, at distance $|k|\,OP$. The length ratio uses $|k|$; the sign only records which side.
- **A dilation is not an isometry unless $|k|=1$.** For $|k|\ne 1$ lengths change, so the image is
  similar but *not* congruent to the original. Do not treat a scaling as a rigid motion.

:::
:::

## Connections

Dilation is the transformation that *creates* similarity: it is `geo-similarity-def` made dynamic,
producing from any figure a scaled copy whose angles hold and whose lengths carry the factor $|k|$ (and
area $k^2$). Unlike the rigid motions `geo-translation`, `geo-rotation`, and `geo-reflection`, it
changes size, so it is the one basic transformation that is generally *not* an isometry — the boundary
case $|k|=1$ is exactly where it rejoins them ($k=1$ the identity, $k=-1$ a half-turn). Composing a
dilation with an isometry gives a *similarity transformation*, the general map behind "same shape,
different size." Recognition trigger: a scaling about a center, a shadow or projection from a point, a
"blow up/shrink by a factor," or a coordinate rule $(x,y)\mapsto(kx,ky)$.

## History

Scaling a figure from a center — enlarging or shrinking while preserving shape — rests on the Greek theory of proportion and similar figures developed by Eudoxus and recorded in Book VI of Euclid's *Elements* (c. 300 BCE); Thales of Miletus is said to have measured a pyramid's height by similar triangles even earlier. The transformation itself, called a *homothety* or central similarity, was named and studied in the 19th century by geometers such as Michel Chasles as part of the projective and transformational reworking of the subject. Its place among the standard transformations was cemented by Felix Klein's *Erlangen Program* (1872), where similarities form the group of a geometry coarser than the rigid one. Unlike an isometry, a dilation multiplies every length by a fixed ratio, changing size but never proportion.
