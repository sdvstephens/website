Rule two perfectly parallel lines across a page, then slash a third line diagonally through both. Eight
angles spring up — four at the top crossing, four at the bottom. Measure the top-right angle: $68^\circ$.
Now measure the bottom-right angle in the very same position. It is $68^\circ$ too. Slide the diagonal
to any new slant and the matched positions keep agreeing. What is special about the lines being
*parallel* that pins these far-apart angles together?

## Discovery

1. Draw two parallel lines $m$ (upper) and $n$ (lower), then a transversal $t$ cutting both. At the
   upper crossing, four angles form; using vertical angles and linear pairs, express all four in terms
   of a single measure $x$. At the lower crossing, do the same with its own measure $y$. How many
   *distinct* numbers appear at each crossing?
2. Imagine sliding the entire upper crossing straight down along $t$ — the transversal is fixed and the
   parallel lines keep their direction — until the upper crossing lands exactly on the lower one. Which
   angle of the top lands on which angle of the bottom? For the whole slid picture to sit flush on the
   lower crossing, what relation must hold between $x$ and $y$?
3. Grant that relation. Pick the two angles that lie *between* the lines and on *opposite* sides of
   $t$ (the "alternate interior" pair), express each using $x$ or $y$, and compare them. Then pick the
   two angles between the lines on the *same* side of $t$, and add them. What two facts have you just
   forced?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

First the axiom that makes it all work.

**The Parallel Postulate (Playfair's form).** Through a point not on a given line there passes
*exactly one* line parallel to it. Equivalently, and in the form we use here: *if two parallel lines
are cut by a transversal, each pair of corresponding angles is equal.* This is an **axiom** — it cannot
be proved from the other postulates, and it is exactly what distinguishes Euclidean geometry.

Let a transversal cut two parallel lines. Name the pairs by position:
- **Corresponding angles** — same position at the two crossings (the "F" pattern): **equal**.
- **Alternate interior angles** — between the lines, opposite sides of the transversal (the "Z"
  pattern): **equal**.
- **Co-interior (same-side interior) angles** — between the lines, same side of the transversal (the
  "C" pattern): **supplementary**, summing to $180^\circ$.

**The converses hold too.** If a transversal makes a pair of corresponding angles equal (or alternate
interior angles equal, or co-interior angles supplementary), then the two lines are **parallel**.

### Proof

Let transversal $t$ meet the parallel lines $m$ and $n$ at points $A$ (on $m$) and $B$ (on $n$).

*Corresponding angles.* Equal by the Parallel Postulate in the form stated above — this is the adopted
axiom, so we take it as given.

*Alternate interior angles.* Let $\angle 1$ be an interior angle at $A$, and let $\angle 2$ be the
interior angle at $B$ alternate to it (other side of $t$). At $B$, let $\angle 3$ be the angle
*corresponding* to $\angle 1$. By the postulate,
$$\angle 3 = \angle 1.$$
But $\angle 3$ and $\angle 2$ sit opposite each other at the crossing $B$ — they are vertical angles —
so $\angle 2 = \angle 3$. Chaining the two equalities,
$$\angle 2 = \angle 3 = \angle 1,$$
so the alternate interior angles are equal.

*Co-interior angles.* Keep $\angle 1$ (interior at $A$) and let $\angle 4$ be the co-interior angle at
$B$ on the *same* side of $t$. At $B$, the alternate angle $\angle 2$ and this same-side angle $\angle 4$
are adjacent along the straight line $n$, forming a linear pair:
$$\angle 2 + \angle 4 = 180^\circ.$$
Since $\angle 2 = \angle 1$ from the previous part, substitution gives
$$\angle 1 + \angle 4 = 180^\circ,$$
so the co-interior angles are supplementary.

*The converse.* Suppose the transversal $t$ makes a pair of corresponding angles equal, one at $A$ (on
line $m$) and one at $B$ (on line $n$). By Playfair's axiom there is exactly one line $m'$ through $A$
parallel to $n$. By the forward theorem, $m'$ makes with $t$ a corresponding angle equal to $n$'s —
hence equal to the one $m$ makes. Two lines through the single point $A$ that make the *same* angle with
$t$ on the same side must be the same line, because an angle at $A$ determines its ray uniquely. So
$m' = m$, and therefore $m \parallel n$. The alternate-interior and co-interior converses follow by
first converting them to the corresponding-angle case using vertical angles or the linear pair, exactly
as above. $\blacksquare$

### Worked Instance

The page from the Hook: two parallel lines, a transversal, the top-right angle measured $68^\circ$. Call
it $\angle A$ (a corresponding position at the top). By the postulate the bottom-right angle in the same
position is its corresponding angle, so it is $68^\circ$ — matching the measurement. Now sweep the rest:
the angle beside $\angle A$ on the straight top line is its linear-pair partner, $180^\circ - 68^\circ =
112^\circ$; the angle vertical to $\angle A$ is $68^\circ$. The alternate interior angle to $\angle A$ is
$68^\circ$ (the "Z"), and the co-interior angle on $\angle A$'s side is $112^\circ$, since $68^\circ +
112^\circ = 180^\circ$ (the "C"). All eight angles are now either $68^\circ$ or $112^\circ$, arranged so
that every corresponding and alternate pair matches and every co-interior pair sums to a straight angle —
which is precisely the structural lock the parallel lines imposed.

### Pitfalls

- **Parallel is not optional.** Corresponding/alternate equality and co-interior supplementarity require
  the two lines to be *parallel*. On non-parallel lines these relations fail; that failure is exactly what
  the converse detects to *prove* parallelism.
- **Co-interior angles are supplementary, not equal.** Same-side interior angles add to $180^\circ$; only
  the alternate (opposite-side) interior angles are equal. Confusing "same side" with "alternate" flips the
  rule.
- **The postulate is an axiom, not a theorem.** You cannot derive equal corresponding angles from angle
  measure alone — it is an independent assumption. Dropping or altering it gives non-Euclidean geometries
  where triangle angles no longer sum to $180^\circ$.
- **Don't confuse interior with exterior.** "Interior" angles lie *between* the two parallel lines; the
  ones outside also come in matched pairs, but the named theorems (alternate *interior*, co-*interior*)
  are about the between-the-lines angles.

:::
:::

## Connections

This node sits on **geo-angle-measure** (straight angles, adjacent-angle addition) and on
**geo-proof-intro** (it is the atlas's first result that openly *adopts an axiom* and then reasons about
converses). The equality of vertical angles, proved just upstream, is the hinge that turns the
corresponding-angle axiom into the alternate-interior and co-interior facts. It unlocks
**geo-triangle-angle-sum**, whose proof drops a line parallel to one side and reads off alternate interior
angles, and **geo-quadrilaterals**, where parallel sides propagate these angle relations around a figure.
Recognition trigger: the moment you see parallel marks and a line crossing them, label the eight angles
with just two values and let corresponding/alternate/co-interior carry equalities across the gap.

## History

The angles formed when a transversal cuts two parallel lines are the subject of Euclid's *Elements* Book I, especially Propositions $27$–$29$ ($c.$ $300$ BCE), where equality of alternate and corresponding angles is tied to parallelism. Proposition $29$ is the first in the *Elements* to invoke Euclid's famous fifth postulate, the "parallel postulate," whose awkwardness troubled mathematicians for over two thousand years. Repeated failed attempts to prove it from the other axioms led, in the $1820$s–$30$s, to the independent discovery of non-Euclidean geometry by Nikolai Lobachevsky and János Bolyai, with Carl Friedrich Gauss having explored it privately. These angle relations matter because they are where the parallel postulate quietly enters school geometry — the hinge on which Euclidean space, and its alternatives, turn.
