Pin a photograph to a corkboard through a single tack and spin it a quarter turn. Every point of the
photo sweeps along its own arc, yet the picture arrives intact — same size, same shape, nothing
squashed. A corner that started at "$3$ right, $1$ up" from the tack lands somewhere new. Where,
exactly? And why does spinning around one fixed pin never distort the figure at all?

## Discovery

Rotate about the origin $O=(0,0)$. Picture grabbing each point and swinging it around $O$ through the
same turn, counterclockwise.

1. Take a single point $P$ at distance $r$ from $O$. As you spin $P$ around $O$, its distance to $O$
   is the length of the rigid "spoke" from the pin to the point. What happens to that distance as $P$
   travels — and so what curve does $P$ ride on?
2. In one rotation, does every point turn through the same angle, or do points farther from $O$ turn
   through a bigger angle? State the angle each point turns through in a single quarter turn.
3. Now pin down the quarter turn ($90^\circ$ counterclockwise) with two test points. The point
   $(1,0)$ sits one unit east of $O$; swing it a quarter turn counterclockwise and read off its new
   coordinates. Do the same for $(0,1)$, one unit north. From just these two landings, propose a rule
   that sends a general $(x,y)$ to its image under the quarter turn.
4. Read the vertices of a triangle in order and note whether the path turns clockwise or
   counterclockwise. Spin the whole triangle a quarter turn and read the image vertices in the same
   order. Did the sense of the turn survive, or reverse?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **rotation** about a center $O$ through a directed angle $\theta$ sends each point $P$ to the point
$P'$ on the circle centered at $O$ through $P$, reached by turning the spoke $OP$ through the angle
$\theta$. It is an **isometry** that **preserves orientation** (clockwise stays clockwise).

About the origin, the three quarter-multiples have clean coordinate rules:
- $90^\circ$ counterclockwise: $(x,y)\mapsto(-y,\ x)$,
- $180^\circ$: $(x,y)\mapsto(-x,\ -y)$,
- $270^\circ$ counterclockwise (equivalently $90^\circ$ clockwise): $(x,y)\mapsto(y,\ -x)$.

Because it preserves all distances, a rotated figure is congruent to the original.

### Proof

**Every point keeps its distance to the center.** By definition, the image $P'$ of a rotation about
$O$ lies on the circle centered at $O$ through $P$. So $OP' = OP$: the distance from any point to the
center is unchanged.

**All distances are preserved.** Let $P,Q$ be any two points with images $P',Q'$ under the rotation
by $\theta$ about $O$. From the previous paragraph $OP=OP'$ and $OQ=OQ'$. Consider the angles
$\angle POQ$ and $\angle P'OQ'$ at the center. Each point turns through the *same* angle $\theta$, so
ray $OP'$ is ray $OP$ turned by $\theta$ and ray $OQ'$ is ray $OQ$ turned by $\theta$; the angle
between the two image spokes therefore equals the angle between the two original spokes,
$\angle P'OQ' = \angle POQ$ (`geo-angle-measure`). Now compare $\triangle OPQ$ and $\triangle OP'Q'$:
$OP=OP'$, $OQ=OQ'$, and the included angles are equal. By SAS the triangles are congruent, so the
third sides match: $P'Q' = PQ$. Every distance is preserved, so the rotation is an isometry and its
image is congruent to the original. (Points $O$, $P$, $Q$ collinear is the degenerate case: then
$P',Q'$ lie on the equally-turned line at the same signed positions, and $P'Q'=PQ$ directly.)

**The $90^\circ$ rule.** A quarter turn counterclockwise carries the eastward unit point $(1,0)$ to
the northward unit point $(0,1)$, and the northward point $(0,1)$ to the westward point $(-1,0)$. A
rotation is completely determined by where it sends two independent points, because any point $(x,y)$
is located by its spans along the two axis directions and the rotation carries those directions
rigidly to their images. Sending the east direction $(1,0)\mapsto(0,1)$ and the north direction
$(0,1)\mapsto(-1,0)$, the point $(x,y)$ — which is $x$ steps east plus $y$ steps north — maps to
$x\,(0,1) + y\,(-1,0) = (-y,\ x)$. Applying this rule twice gives the $180^\circ$ rule
$(x,y)\mapsto(-y,x)\mapsto(-x,-y)$, and three times gives the $270^\circ$ rule
$(x,y)\mapsto(-x,-y)\mapsto(y,-x)$.

**Orientation is preserved.** The map $(x,y)\mapsto(-y,x)$ (and its iterates) sends the
counterclockwise-ordered axis directions east-then-north to north-then-west, still a
counterclockwise pair; a turn rotates the whole frame rigidly without flipping it, so the sense of
any vertex order is carried along unchanged. $\blacksquare$

### Worked Instance

Rotate $P=(3,1)$ by $90^\circ$ counterclockwise about the origin. The rule $(x,y)\mapsto(-y,x)$ gives
$$P' = (-1,\ 3).$$
Check the spoke length both times:
$$OP = \sqrt{3^2+1^2} = \sqrt{10},\qquad OP' = \sqrt{(-1)^2+3^2} = \sqrt{10}.$$
The distance to the center is preserved — $P$ rode a circle of radius $\sqrt{10}$ to its new home, as
the Hook demanded. A half turn would instead send $P$ to $(-3,-1)$, and a $270^\circ$ turn to
$(1,-3)$; all three sit at distance $\sqrt{10}$ from $O$.

### Pitfalls

- **The center matters.** A rotation is defined about a specific point. Turning "by $90^\circ$" is
  meaningless until you say *around what* — the same angle about a different center lands the figure
  somewhere else entirely.
- **Direction matters.** Always specify clockwise or counterclockwise. The $90^\circ$ counterclockwise
  rule $(x,y)\mapsto(-y,x)$ differs from the $90^\circ$ clockwise rule $(x,y)\mapsto(y,-x)$; mixing
  them flips a sign.
- **A quarter turn swaps coordinates *and* changes a sign.** $(x,y)\mapsto(-y,x)$ is not a bare swap
  $(y,x)$ (that is a reflection over $y=x$) and not a bare sign change. It does both.
- **Rotations preserve orientation.** Unlike a reflection, a turn never converts clockwise to
  counterclockwise. If the vertex order reverses, you did not rotate.

:::
:::

## Connections

Rotation is the second rigid motion behind `geo-congruence-def`, the "turn" that (with slides and
flips) makes figures congruent. Its proof leans on `geo-angle-measure` — equal turns give equal
central angles, feeding SAS — and it inherits the coordinate-tracking method of `geo-translation`.
Rotations and translations together generate all *orientation-preserving* isometries of the plane;
adding the orientation-reversing `geo-reflection` completes the picture. Recognition trigger: a figure
spun about a fixed point, a "quarter/half turn," clock-hand motion, or any problem asking for the
image of coordinates under a $90^\circ$, $180^\circ$, or $270^\circ$ turn about the origin.

## History

Turning a figure about a fixed center is a rigid motion whose systematic theory belongs to the modern era. Leonhard Euler (18th century) studied rotations deeply, proving among other things that any rotation of a sphere fixes an axis — Euler's rotation theorem — and introducing the angles that still bear his name. The broader viewpoint arrived with Felix Klein's *Erlangen Program* (1872), which cast geometry as the study of transformation groups; rotations, together with translations, generate the direct isometries that preserve both distance and orientation. Klein sought one organizing principle for all of geometry, and rotations exemplify it as the symmetries that fix a single point while sweeping through an angle.
