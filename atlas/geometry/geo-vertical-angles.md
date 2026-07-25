Two straight roads cross. Standing at the intersection you can see four angles fanning out around
your feet. Nudge one road so its crossing angle reads $53^\circ$ — glance across the intersection at
the angle directly opposite, and it reads $53^\circ$ too, every single time. Change the tilt and the
pair still match. Why should two angles that never touch be locked together?

## Discovery

1. Draw two straight lines crossing at a point $O$. Going around $O$, label the four angles
   $\angle 1, \angle 2, \angle 3, \angle 4$ in order. Give $\angle 1$ a measure, say $a$ degrees.
   Angles $\angle 1$ and $\angle 2$ are next to each other and their outer edges form one of the two
   straight lines. Using what a straight line does to angle measures, write an equation connecting
   $a$ and $\angle 2$.
2. Now look at $\angle 2$ and $\angle 3$: they are also side by side, and their outer edges form the
   *other* straight line. Write the equation connecting $\angle 2$ and $\angle 3$.
3. You now have two equations. Use them to pin down $\angle 3$ in terms of $a$ alone, then set your
   answer beside $\angle 1$. Is the match between opposite angles a lucky accident of your drawing,
   or was it forced the moment you wrote the two straight-line equations?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Linear pair.** When a ray stands on a line, the two adjacent angles it forms are
**supplementary** — they sum to $180^\circ$. (Two angles are *supplementary* when their measures add
to $180^\circ$.)

**Vertical angles.** When two lines cross, they form two pairs of **vertical angles** — the angles
opposite each other at the crossing (aka *vertically opposite angles*). **Vertical angles are
equal.** With the labels above, $\angle 1 = \angle 3$ and $\angle 2 = \angle 4$, while each adjacent
pair such as $\angle 1, \angle 2$ is a linear pair summing to $180^\circ$.

### Proof

Two facts, in order. Take two lines crossing at $O$, with angles $\angle 1, \angle 2, \angle 3,
\angle 4$ labelled in rotational order.

*Linear pair.* The outer edges of $\angle 1$ and $\angle 2$ point in exactly opposite directions —
together they make one straight line through $O$, and the shared middle ray splits the straight
angle into these two pieces. A straight angle measures $180^\circ$, and the measure of the whole is
the sum of the two adjacent parts, so
$$\angle 1 + \angle 2 = 180^\circ.$$
The identical argument along each of the four adjacent pairs gives
$\angle 2 + \angle 3 = 180^\circ$, and so on.

*Vertical angles.* From the two linear pairs just found,
$$\angle 1 + \angle 2 = 180^\circ \qquad\text{and}\qquad \angle 2 + \angle 3 = 180^\circ.$$
The right-hand sides are equal, so the left-hand sides are equal:
$\angle 1 + \angle 2 = \angle 2 + \angle 3$. Subtract the common $\angle 2$ from both sides:
$$\angle 1 = \angle 3.$$
Thus the opposite angles $\angle 1$ and $\angle 3$ are equal. Repeating with the pair
$\angle 2 + \angle 3 = 180^\circ$ and $\angle 3 + \angle 4 = 180^\circ$ gives $\angle 2 = \angle 4$.
Both pairs of vertical angles are therefore equal — because each pair shares a common supplement, and
two angles supplementary to the *same* angle must be equal. $\blacksquare$

### Worked Instance

The crossing roads: let $\angle 1 = 53^\circ$. Its linear-pair partner is
$\angle 2 = 180^\circ - 53^\circ = 127^\circ$. The angle directly opposite $\angle 1$ is its vertical
angle $\angle 3$, and $\angle 3 = 180^\circ - \angle 2 = 180^\circ - 127^\circ = 53^\circ$ — matching
$\angle 1$ exactly, as the theorem promised. The fourth angle is $\angle 4 = \angle 2 = 127^\circ$. So
the four angles read $53^\circ, 127^\circ, 53^\circ, 127^\circ$ around the crossing: two matched
pairs, opposite equals opposite. Tilt the road to any new angle $a$ and the same computation yields
$a, 180^\circ - a, a, 180^\circ - a$. The lock is structural, not lucky.

### Pitfalls

- **Vertical means opposite, not adjacent.** "Vertical" here has nothing to do with up-and-down; it
  labels the *across-the-crossing* pair. The two angles that are side by side are the linear pair, and
  those are supplementary, not equal (unless both are $90^\circ$).
- **Equal vs. supplementary.** Vertical angles are *equal*; a linear pair is *supplementary*. Mixing
  these — e.g. subtracting from $180^\circ$ when you should just copy the measure — is the classic
  slip.
- **You need two full lines.** Vertical angles arise only when two *straight* lines cross. Two rays
  meeting at a common endpoint (not extended into full lines) do not make vertical angles.
- **A linear pair needs a straight base.** If the two outer rays do not form a straight line, the two
  adjacent angles need not sum to $180^\circ$.

:::
:::

## Connections

This node rests directly on **geo-angle-measure**: the only inputs are that a straight angle is
$180^\circ$ and that adjacent angles add. From those two facts, the linear-pair relation and the
equality of vertical angles fall out by cancelling a shared supplement — the first genuine *angle
chase* in the atlas. It unlocks **geo-parallel-lines-angles**, where a transversal creates several
crossings at once and vertical angles become one of the two levers (with the parallel postulate) that
relate all eight angles. Recognition trigger: whenever two lines cross and you know one of the four
angles, reach for this to fill in the other three instantly — matched opposite, supplementary
neighbour.

## History

That two intersecting lines make equal vertical (opposite) angles is one of the oldest recorded theorems. The commentator Proclus, drawing on Eudemus, attributes its proof to Thales of Miletus ($6$th century BCE), making it among the very first mathematical facts ever *proved* rather than merely observed. Euclid gave it a formal place as Proposition $15$ of Book I of the *Elements* ($c.$ $300$ BCE), deriving it from the fact that the angles on a straight line sum to two right angles. Its historical importance is outsized: it is a classic first example of deductive proof, showing that a simple, intuitively obvious claim can and should be *demonstrated*. It matters pedagogically as an early rung on the ladder from seeing to proving.
