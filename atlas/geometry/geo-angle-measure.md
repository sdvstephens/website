A clock's hands at $3{:}00$ make a crisp square corner; at $6{:}00$ they stretch into a
straight line. Somewhere between, at $4{:}00$, the hands make a fatter corner than at $3{:}00$
but not yet a straight one. If a square corner is "worth" a certain amount and a straight line
is worth exactly twice as much, what is the corner at $4{:}00$ worth — and how would you *know*,
rather than guess?

## Discovery

An angle records an amount of turning (from the previous node). We now attach numbers to that
turning so angles can be *added* like lengths were.

1. A ray swung all the way around until it points backward — a **straight angle** — is the
   benchmark "half turn." Agree to call its measure $180$ units (call the unit a *degree*, so a
   straight angle is $180^\circ$). Now fold a straight angle so its two sides land exactly on top
   of each other by turning through equal amounts; what measure must each of the two equal angles
   have? Give the number and your reason.
2. From a point on a line, draw a ray straight up so the two angles on either side look equal —
   this is the angle called a **right angle** from step 1. Take that right angle and split it with
   a third ray into two smaller angles. If one measures $37^\circ$, what does the other measure,
   and what equation did you use?
3. Now the general rule behind step 2. Ray $\overrightarrow{OB}$ lies in the interior of
   $\angle AOC$, cutting it into $\angle AOB$ and $\angle BOC$. State the equation relating
   $m\angle AOB$, $m\angle BOC$, and $m\angle AOC$. Then use it with $m\angle AOC = 180^\circ$
   (a straight angle) and $m\angle AOB = 110^\circ$ to find $m\angle BOC$.
4. Give short names to the two special totals you keep hitting: two angles whose measures sum to
   a right angle, and two whose measures sum to a straight angle. Then decide: when two angles
   sit side by side and their non-shared sides form a straight line (a **linear pair**), which of
   the two totals must their measures make, and why?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Degree measure.** To each angle we assign a real number, its **measure** $m\angle ABC$,
lying in $0^\circ \lt m\angle ABC \lt 180^\circ$ for an ordinary angle, fixed by the
**Protractor Postulate**: rays from a point $O$ on one side of a line correspond to the numbers
$0^\circ$ through $180^\circ$ so that the measure of an angle is the positive difference of its
two sides' numbers. A **straight angle** (opposite rays) measures $180^\circ$; a **right angle**
measures $90^\circ$. An angle is **acute** if its measure is less than $90^\circ$ and **obtuse**
if it is between $90^\circ$ and $180^\circ$.

**Angle Addition Postulate.** If ray $\overrightarrow{OB}$ lies in the interior of
$\angle AOC$, then
$$m\angle AOB + m\angle BOC = m\angle AOC.$$
Such angles $\angle AOB$ and $\angle BOC$ (sharing vertex and side $\overrightarrow{OB}$, with
non-overlapping interiors) are **adjacent**.

Two angles are **complementary** if their measures sum to $90^\circ$, and **supplementary** if
their measures sum to $180^\circ$. A **linear pair** is two adjacent angles whose non-shared
sides are opposite rays; the sides of a linear pair form a straight angle, so:

- **Linear Pair Theorem.** The angles of a linear pair are supplementary.

### Proof

Degree measure and the two postulates (Protractor, Angle Addition) are the governing axioms;
we prove the consequences.

**A right angle is $90^\circ$.** A right angle was fixed as one of two *equal* adjacent angles
whose outer sides form a straight angle. Call their common measure $x$. Their outer sides are
opposite rays, so together the two angles make a straight angle of measure $180^\circ$; by the
Angle Addition Postulate their measures add:
$$x + x = 180^\circ \implies 2x = 180^\circ \implies x = 90^\circ.$$
So each is a right angle of $90^\circ$. $\blacksquare$

**Splitting a right angle.** If a ray splits a $90^\circ$ angle into two adjacent angles and one
measures $37^\circ$, the Angle Addition Postulate gives $37^\circ + m = 90^\circ$, so
$m = 53^\circ$. The two are complementary — that is what "sum to a right angle" means.

**Linear Pair Theorem.** Let $\angle AOB$ and $\angle BOC$ be a linear pair: adjacent, with
$\overrightarrow{OA}$ and $\overrightarrow{OC}$ opposite rays. Opposite rays form a straight
angle, so $m\angle AOC = 180^\circ$. Ray $\overrightarrow{OB}$ lies in the interior of the
straight angle $\angle AOC$, so by the Angle Addition Postulate
$$m\angle AOB + m\angle BOC = m\angle AOC = 180^\circ.$$
Hence the two measures sum to $180^\circ$: the angles are supplementary. $\blacksquare$

### Worked Instance

The clock. A square corner is a right angle, $90^\circ$; a straight line of the hands is a
straight angle, $180^\circ$ — exactly twice, as the Hook demanded. At $3{:}00$ the hands are
$90^\circ$ apart. At $4{:}00$ the hour and minute hands span $4$ of the $12$ hour-marks, and the
full turn around the clock face is $360^\circ$ ($=2\times 180^\circ$, two straight angles), so each
hour-mark is $360^\circ/12 = 30^\circ$; four of them give $4 \times 30^\circ = 120^\circ$ — a fat,
obtuse corner, wider than $90^\circ$ but short of $180^\circ$, known exactly, not guessed. And a
quick check of the postulates: the angle from $12$ to $4$ ($120^\circ$) plus the angle from $4$
back around to $12$ the short way through $3$… more simply, $\angle$ from $12$ to $3$ ($90^\circ$)
plus $\angle$ from $3$ to $4$ ($30^\circ$) is $120^\circ$ by Angle Addition — the pieces sum to
the whole, just as segment lengths did.

### Pitfalls

- **A straight angle is $180^\circ$, not $360^\circ$.** The full turn is $360^\circ$; a straight
  angle (a half turn, opposite rays) is $180^\circ$. Confusing the two doubles or halves every
  answer.
- **Addition needs the ray to be *interior*.** $m\angle AOB + m\angle BOC = m\angle AOC$ holds
  only when $\overrightarrow{OB}$ is *inside* $\angle AOC$. If $B$ is outside, the pieces do not
  add to that whole — the angle analogue of the segment "betweenness" requirement.
- **Complementary vs. supplementary.** Complementary sums to $90^\circ$, supplementary to
  $180^\circ$. A common mix-up: "$c$" for *corner* ($90^\circ$) can help, but memorize which is
  which — swapping them is the classic slip.
- **Linear pair vs. merely supplementary.** Every linear pair is supplementary, but two angles can
  be supplementary without being adjacent or forming a straight line (e.g. two separate angles of
  $100^\circ$ and $80^\circ$). "Linear pair" adds the geometric condition of opposite outer rays.
- **Measure is a number; the angle is a figure.** Write $m\angle ABC = 90^\circ$, not
  $\angle ABC = 90^\circ$, mirroring the segment/length distinction $\overline{AB}$ vs. $AB$.

:::
:::

## Connections

This node hands the qualitative **angle** a number, exactly as segment length made reach
quantitative — and the **Angle Addition Postulate** is the deliberate twin of the Segment Addition
Postulate, right down to the "interior/between" condition, drawing on ordinary **addition**. The
special sums unlocked here (complementary, supplementary, the Linear Pair Theorem) are the workhorses
of everything next: **vertical angles** are proved equal by subtracting a shared supplement,
**parallel-line** angle relationships are stated in these degree terms, and an **angle bisector** is
defined by splitting a measure in half. Recognition trigger: any problem giving angle values, asking
for a missing angle around a point or on a line, or naming angles "complementary/supplementary" is
running on the Protractor and Angle Addition postulates.

## History

Measuring angles in degrees is an inheritance from ancient Babylonian astronomy, whose base-$60$ (sexagesimal) number system led to dividing the full turn into $360$ parts — a choice tied to the roughly $360$-day year and to convenient divisibility. Greek astronomers such as Hipparchus and Ptolemy adopted and spread the degree in their star catalogues. Much later, radian measure — angle as arc length on a unit circle — emerged as the natural unit for analysis; the term "radian" was coined by James Thomson in $1873$, though the underlying idea was used earlier by Roger Cotes and Leonhard Euler. Angle measurement matters because it turns the qualitative idea of "turning" into number, making trigonometry and calculus possible.
