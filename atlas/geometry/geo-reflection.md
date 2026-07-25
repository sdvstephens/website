Hold your left hand up to a mirror and the reflection is unmistakably a *right* hand — same size,
same shape, but somehow turned inside out. Fold a piece of paper along a crease and press an inked dot
through: it prints a twin on the far side, the same distance from the crease. The crease seems to
control everything about where the twin lands. What is the exact relationship between a point, its
mirror twin, and the fold line — and why does the mirror swap left for right?

## Discovery

Fix a line $\ell$ in the plane and imagine folding the whole plane along $\ell$, so each point $P$
lands on a twin $P'$ on the other side.

1. Fold the plane along $\ell$ and watch a point $P$ off the line come down onto $P'$. Folding matches
   the two half-planes edge to edge along $\ell$. Compare the distance from $P$ to the line $\ell$
   with the distance from $P'$ to $\ell$. What must be true of the two distances?
2. Draw the segment $\overline{PP'}$ joining a point to its twin. The fold that carries $P$ onto $P'$
   pivots along $\ell$. What angle does $\overline{PP'}$ make with the crease $\ell$, and where along
   $\overline{PP'}$ does $\ell$ cross it? Combining this with step $1$, name the one special line that
   $\ell$ is for the segment $\overline{PP'}$.
3. Take a point that lies *on* $\ell$ itself and fold. Where does it go?
4. Set up coordinates with $\ell$ as the $x$-axis. A point $(x,y)$ above the axis folds down to a twin
   the same distance below. Using what step $1$ says about distances to the line, write the
   coordinates of the image of $(x,y)$.
5. Label a triangle's vertices in clockwise order and press it through the fold. Read the three image
   vertices in the *same* named order ($A'\to B'\to C'$). Does the path still run clockwise, or has
   the fold reversed it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **reflection** over a line $\ell$ (the **line of reflection**) sends each point $P$ to the point
$P'$ such that **$\ell$ is the perpendicular bisector of the segment $\overline{PP'}$**; points on
$\ell$ are fixed. It is an **isometry** that **reverses orientation** — a clockwise-labeled figure
becomes counterclockwise, which is the mirror's left-for-right swap.

In coordinates:
- over the $x$-axis: $(x,y)\mapsto(x,\ -y)$,
- over the $y$-axis: $(x,y)\mapsto(-x,\ y)$,
- over the line $y=x$: $(x,y)\mapsto(y,\ x)$.

Because all distances are preserved, a reflected figure is congruent to the original.

### Proof

**The characterization.** By construction the reflection places $P'$ so that $\ell$ meets
$\overline{PP'}$ at right angles through its midpoint — that is precisely the statement that $\ell$ is
the perpendicular bisector of $\overline{PP'}$ (`geo-perpendicular-bisector`). A point $P$ on $\ell$
is its own twin, since the fold pins the crease.

**Distances are preserved.** Let $P,Q$ be any two points with reflections $P',Q'$ over $\ell$. We
show $P'Q'=PQ$. Let $M$ be the midpoint of $\overline{PP'}$ and $N$ the midpoint of
$\overline{QQ'}$; both $M$ and $N$ lie on $\ell$, and $\ell\perp PP'$, $\ell\perp QQ'$.

Consider first the right triangles formed by dropping to the axis. Set up coordinates with $\ell$ as
the $x$-axis (any line can be so placed). Then, by the distance characterization, reflection sends
$P=(x_1,y_1)$ to $P'=(x_1,-y_1)$ and $Q=(x_2,y_2)$ to $Q'=(x_2,-y_2)$: the foot on $\ell$ keeps the
$x$-coordinate and the signed height flips. The horizontal span of $\overline{P'Q'}$ is
$x_2-x_1$, the same as for $\overline{PQ}$; its vertical span is
$$(-y_2)-(-y_1) = -(y_2-y_1),$$
which has the same magnitude as the vertical span $y_2-y_1$ of $\overline{PQ}$. Since distance depends
only on the magnitudes of the two spans,
$$P'Q' = \sqrt{(x_2-x_1)^2 + \big(-(y_2-y_1)\big)^2} = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} = PQ.$$
So every distance is preserved and the reflection is an isometry; applied to a triangle, all three
sides are preserved, so $\triangle PQR\cong\triangle P'Q'R'$ by SSS.

**Orientation is reversed.** The vertical span changed sign while the horizontal span did not; the
signed test that distinguishes clockwise from counterclockwise vertex order is built from these spans
and flips sign when exactly one of them is negated. Hence a clockwise-labeled triangle becomes
counterclockwise — the reflection reverses orientation, unlike a slide or a turn. $\blacksquare$

### Worked Instance

Reflect $P=(3,2)$ over the $x$-axis. The rule $(x,y)\mapsto(x,-y)$ gives
$$P' = (3,\ -2).$$
Check the characterization: $\overline{PP'}$ runs from $(3,2)$ to $(3,-2)$, a vertical segment whose
midpoint is $(3,0)$ — a point on the $x$-axis — and the segment is perpendicular to the axis. So the
$x$-axis is indeed the perpendicular bisector of $\overline{PP'}$, and $P$, $P'$ sit the same distance
($2$ units) from the line, matching the Hook's fold.

Reflect the same point over the line $y=x$: the rule $(x,y)\mapsto(y,x)$ swaps the coordinates, so
$(3,2)\mapsto(2,3)$. A triangle labeled clockwise, once reflected, reads counterclockwise — the
left-hand/right-hand flip.

### Pitfalls

- **Reflection flips orientation.** This is the one basic rigid motion that reverses clockwise and
  counterclockwise. Translations and rotations preserve orientation; a reflection does not. A figure
  and its mirror image have opposite "handedness."
- **The line is the *perpendicular* bisector.** $\ell$ must meet $\overline{PP'}$ at a right angle
  *and* through its midpoint. A line through the midpoint at a slant, or a perpendicular crossing off
  center, is not the mirror.
- **Points on $\ell$ are fixed.** Anything already on the line of reflection stays put; only points
  off the line move.
- **Over $y=x$ the coordinates swap.** $(x,y)\mapsto(y,x)$, a genuine swap with no sign change — do
  not confuse it with the quarter-turn rule $(x,y)\mapsto(-y,x)$, which swaps *and* changes a sign.

:::
:::

## Connections

Reflection is the third basic rigid motion of `geo-congruence-def`, the "flip," and it is the one that
*reverses* orientation — the feature that separates a figure from its mirror twin. Its defining
property is pure `geo-perpendicular-bisector`: the mirror line is the perpendicular bisector of every
point-to-image segment, so the locus theorem there is the engine of this node. It shares the
coordinate-tracking method of `geo-translation`. Together, translations, rotations, and reflections
generate every isometry of the plane, and composing two reflections recovers a rotation or a
translation. Recognition trigger: a mirror image, a fold, a "flip over a line," left-versus-right
handedness, or a coordinate rule that negates or swaps a coordinate.

## History

The mirror flip is the most primitive isometry of all, and a remarkable fact — that every rigid motion of the plane is a composition of at most three reflections — places it at the foundation of transformation geometry. Though mirror symmetry was exploited informally since antiquity, its formal role emerged with Felix Klein's *Erlangen Program* (1872) and the group-theoretic view of geometry it inspired. Reflections reverse orientation, distinguishing them from rotations and translations, and their compositions were shown to generate the entire isometry group. Mathematicians pursued this reduction because expressing every motion through reflections yields the cleanest possible axioms for congruence.
