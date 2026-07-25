Mile marker $12$ and mile marker $37$ sit on the same straight highway; you pass a rest
stop somewhere between them. Without leaving your seat you can already say the rest stop is
more than $12$ and less than $37$ — and that the two legs of your drive, whatever the rest
stop's marker, must add back to exactly $25$ miles. How does the road *know* the pieces sum
to the whole?

## Discovery

A line is infinite in both directions. You want to name finite and one-ended pieces of it,
and to measure along it.

1. Take a line through points $A$ and $B$. Describe, in words, the set of points you would
   keep if you wanted *only* the stretch from $A$ to $B$ with both ends included. Then
   describe the set you keep if you start at $A$, pass through $B$, and refuse to ever stop —
   keeping everything on the $B$-side of $A$. You have carved out two different objects from
   one line; say precisely how their point-sets differ.
2. Put three distinct points $A$, $B$, $C$ on a line so that $B$ falls *between* the other
   two. Assign each point a milepost number and compute the three distances $AB$, $BC$, $AC$
   as positive gaps. What single equation always ties the three numbers together? Now slide
   $B$ outside the pair (so $A$ is between $B$ and $C$) and test whether your equation still
   holds as written — or whether the roles must be relabelled.
3. Using the equation from step 2, suppose you only know $AC = 25$ and that $B$ is between
   $A$ and $C$ with $AB = 12$. Find $BC$ without any picture. What did "between" let you do
   that mere "on the line" would not?
4. Now demand a point $M$ between $A$ and $C$ that splits the trip into two *equal* legs.
   Write the two conditions $M$ must satisfy, and use them plus your addition equation to
   pin down $AM$ purely in terms of $AC$. Could there be a second such point?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

On a line through distinct points $A$ and $B$:

- The **segment** $\overline{AB}$ is $A$, $B$, and all points **between** them — a finite
  piece with two **endpoints**. Its **length** (or **distance**) is the nonnegative number
  $AB$, with $AB = 0$ exactly when $A=B$ and $AB = BA$ always.
- The **ray** $\overrightarrow{AB}$ starts at the **endpoint** $A$, passes through $B$, and
  continues without end on that side — infinite in one direction only.
- **Betweenness.** For distinct collinear points, $B$ is **between** $A$ and $C$ when $B$
  lies on segment $\overline{AC}$ (strictly inside).

**Segment Addition Postulate.** If $B$ is between $A$ and $C$, then
$$AB + BC = AC.$$
The **midpoint** of $\overline{AC}$ is the point $M$ between $A$ and $C$ with $AM = MC$;
equivalently $AM = MC = \tfrac12 AC$. Every segment has exactly one midpoint. A point,
segment, or ray with its measurements is what makes a line *quantitative*.

### Proof

We take distance and the betweenness/addition relation as the governing (ruler/order) axioms
and prove the derived facts they force.

**Solving for a piece.** If $B$ is between $A$ and $C$, then $AB+BC=AC$ by the Segment
Addition Postulate, so $BC = AC - AB$. With $AC=25$, $AB=12$ this gives $BC = 13$ — a number
fixed with no drawing, because betweenness supplies the additive relation that mere collinearity
does not.

**The midpoint exists, is unique, and halves the segment.** Let $M$ be a midpoint of
$\overline{AC}$: by definition $M$ is between $A$ and $C$ and $AM = MC$. Betweenness gives
$AM + MC = AC$, and substituting $MC = AM$ yields $2\,AM = AC$, so
$$AM = MC = \tfrac12 AC.$$
That determines the *distance* $AM$ uniquely as half the length. For uniqueness of the
*point*: on the segment, distance from $A$ increases steadily from $0$ (at $A$) to $AC$ (at
$C$) — the ruler axiom lets us coordinatize the line so each point of $\overline{AC}$
corresponds to exactly one value $AM\in[0,AC]$. The requirement $AM=\tfrac12 AC$ singles out
one such value, hence one point. So the midpoint exists and is unique. $\blacksquare$

### Worked Instance

The highway. Mileposts give $A=12$, $C=37$, so $AC = 37-12 = 25$ miles. The rest stop is a
point $B$ between them, so by the Segment Addition Postulate $AB + BC = AC = 25$: wherever the
rest stop sits, the two legs sum to $25$ miles — the road "knows" because betweenness *is* the
statement that the parts pool to the whole. If the rest stop is at milepost $24$, then
$AB = 24-12 = 12$ and $BC = 37-24 = 13$, and indeed $12+13 = 25$. The exact middle of the drive
is the midpoint $M$ with $AM = \tfrac12(25) = 12.5$ miles, i.e. milepost $12 + 12.5 = 24.5$.

### Pitfalls

- **Segment vs. ray vs. line.** $\overline{AB}$ is finite (two ends), $\overrightarrow{AB}$
  is half-infinite (one end, the *first* letter), and the line $\overleftrightarrow{AB}$ is
  fully infinite. The order of letters in a ray matters: $\overrightarrow{AB}$ and
  $\overrightarrow{BA}$ start at different endpoints and point opposite ways.
- **$\overline{AB}$ is a set of points; $AB$ is a number.** Do not write "$\overline{AB} =
  5$." The bar names the geometric segment; the bare letters name its length.
- **Addition needs betweenness.** $AB+BC=AC$ holds only when $B$ is between $A$ and $C$. If
  $C$ is between $A$ and $B$ instead, the correct equation is $AC+CB=AB$; blindly adding the
  two nearest labels is the classic error.
- **Distance is nonnegative and symmetric.** $AB=BA\ge 0$; there is no "negative length"
  here (signed lengths come later, with orientation).
- **The midpoint lies on the segment.** A point equidistant from $A$ and $C$ but *off* the
  line (there are many) is not the midpoint; the midpoint must also be *between* $A$ and $C$.

:::
:::

## Connections

Built directly on points, lines, and planes, this node carves the infinite line into a
*finite* segment and a *one-ended* ray, and turns incidence into arithmetic through length and
the Segment Addition Postulate — your first place where a geometric "whole equals sum of
parts" meets ordinary addition. That additive template returns almost verbatim when angles get
a measure (the Angle Addition Postulate) and when segments bound figures with **perimeter** and
**area**. Rays are the raw material of the next node: an **angle** is literally two rays sharing
an endpoint. Recognition trigger: any problem that says one point is "between" two others, asks
for a length split, or names a "midpoint" is running on segment addition.

## History

Segments and rays — finite and half-infinite pieces of a line — descend directly from Euclid's *Elements* ($c.$ $300$ BCE), whose definitions and second postulate speak of producing a finite straight line as far as one wishes. Euclid, however, relied on intuition for when one point lies "between" two others. That notion of betweenness was made rigorous only in the late $19$th century: Moritz Pasch ($1882$) first isolated the order axioms, and David Hilbert incorporated them into his *Foundations of Geometry* ($1899$). With betweenness in hand, segment and ray become precisely definable. They matter as the first carving of the infinite line into the bounded, directed objects the rest of geometry actually uses.
