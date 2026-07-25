Cut any triangle out of paper — scalene, obtuse, needle-thin, it makes no difference. Tear off its three
corners and lay them side by side, tip to tip, so their points all meet at one spot. Every time, the three
torn corners fan out into a perfectly flat edge — a straight line, no overlap, no gap. A right-triangle
corner and two slivers, or three near-equal wedges: the flat edge always closes exactly. What forces three
angles that started life in totally different triangles to fit a straight line so precisely?

## Discovery

1. Draw a triangle $ABC$. Through the top vertex $A$, draw a line $\ell$ **parallel to the opposite side**
   $\overline{BC}$. Along the straight line $\ell$, three angles now sit at $A$: the angle of the triangle
   at $A$ in the middle, and one wedge on each side between $\ell$ and the sides $\overline{AB}$,
   $\overline{AC}$. What do the three angles at $A$, taken together along $\ell$, add up to?
2. Treat side $\overline{AB}$ as a transversal cutting the two parallel lines $\ell$ and $\overline{BC}$.
   Which angle of the triangle — at $B$ or at $C$ — is forced equal to the left wedge at $A$, and by which
   parallel-line relation? Then use side $\overline{AC}$ as a transversal to identify the right wedge at $A$
   the same way.
3. You now know each of the three angles gathered at $A$: the middle one is the triangle's angle at $A$, and
   from step 2 the two wedges *are* two other angles of the triangle. Substitute those identities into the
   total you found in step 1. What number do the triangle's three interior angles come to?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Triangle Angle Sum Theorem.** In any triangle, the three interior angles add to a straight angle:
$$\angle A + \angle B + \angle C = 180^\circ.$$
This holds for *every* triangle in the Euclidean plane, and it is a direct consequence of the Parallel
Postulate — change that axiom and the sum changes with it.

### Proof

Let $ABC$ be any triangle. Through $A$ draw the line $\ell$ parallel to $\overline{BC}$; such a line exists
and is unique by Playfair's axiom. The line $\ell$ passes through $A$ in two opposite rays, and the two
sides $\overline{AB}$, $\overline{AC}$ leave $A$ into the region on the $\overline{BC}$ side. So along the
straight line $\ell$ the point $A$ carries three consecutive angles: a left wedge, the triangle's angle
$\angle A$ in the middle, and a right wedge. Because they together fill the straight angle on one side of
$\ell$,
$$\angle(\text{left wedge}) + \angle A + \angle(\text{right wedge}) = 180^\circ. \tag{1}$$

Now identify the wedges. Line $\overline{AB}$ is a transversal cutting the parallel lines $\ell$ and
$\overline{BC}$. The left wedge (between $\ell$ and $\overline{AB}$, on one side of the transversal) and the
triangle's angle $\angle B$ (between $\overline{BC}$ and $\overline{BA}$, on the other side, between the
parallels) are **alternate interior angles**, so
$$\angle(\text{left wedge}) = \angle B. \tag{2}$$
Likewise $\overline{AC}$ is a transversal of the same two parallels, and the right wedge and $\angle C$ are
alternate interior angles, so
$$\angle(\text{right wedge}) = \angle C. \tag{3}$$

Substituting (2) and (3) into (1),
$$\angle B + \angle A + \angle C = 180^\circ,$$
that is $\angle A + \angle B + \angle C = 180^\circ$. Since $ABC$ was an arbitrary triangle, the sum is
$180^\circ$ for every triangle. $\blacksquare$

### Worked Instance

The torn corners resolved: laying the three corners tip-to-tip is exactly rebuilding equation (1) — the
angles gather along the straight line $\ell$ through $A$, and the alternate-interior identities (2), (3)
say the two outer torn corners are copies of $\angle B$ and $\angle C$. Their flat edge is the straight
angle, so the three must total $180^\circ$; that is why they close with no gap.

Concretely, in a triangle with $\angle A = 50^\circ$ and $\angle B = 60^\circ$, the third angle is forced:
$$\angle C = 180^\circ - 50^\circ - 60^\circ = 70^\circ.$$
And an equilateral triangle must have $\angle A = \angle B = \angle C = \tfrac{180^\circ}{3} = 60^\circ$ —
the theorem determines all its angles at once.

### Pitfalls

- **It is Euclidean-only.** The sum is $180^\circ$ *because* of the Parallel Postulate. On a sphere a
  triangle's angles exceed $180^\circ$; the theorem is not a universal truth but a consequence of the flat
  plane's axiom.
- **You must draw the line through a vertex parallel to the opposite side.** A common failed attempt drops
  an arbitrary line; only the parallel-to-the-opposite-side construction makes the wedges alternate interior
  angles.
- **Interior angles only.** The $180^\circ$ total is for the three *interior* angles. Exterior angles are a
  separate (though related) count.
- **Degrees, and only three angles.** The result is about a triangle's three angles; do not try to apply the
  bare "$180^\circ$" to a quadrilateral or to angles measured in other units without converting.

:::
:::

## Connections

This is the payoff of **geo-parallel-lines-angles**: its entire content is one auxiliary parallel line plus
the alternate-interior-angle equality, making it the archetypal *angle chase with an added line*. It
immediately unlocks **geo-exterior-angle** (an exterior angle equals $180^\circ$ minus the adjacent
interior, hence the sum of the two remote ones), and it is the engine behind **geo-polygon-angles** (split a
polygon into triangles), **geo-asa-aas-congruence** (knowing two angles fixes the third), and
**geo-aa-similarity** (two equal angle pairs force the third to match). Recognition trigger: whenever a
triangle's angles appear and you are one measurement short, remember the three always spend exactly
$180^\circ$ between them.

## History

That a triangle's angles sum to two right angles was already known to the Pythagoreans of the fifth century BC, and later commentators such as Proclus (fifth century AD) credit their school with an early proof drawn by ruling a line through one vertex parallel to the opposite side. Aristotle repeatedly cites the fact as a model of necessary geometric truth, showing it was textbook knowledge by the fourth century BC. Euclid gave the canonical demonstration in *Elements* I.32 around 300 BC, deriving it from his theory of parallels. Because the proof leans on the parallel postulate, the result is not a mere accident of measurement but a consequence of Euclid's specific assumptions about flat space. Two millennia later, when Gauss, Bolyai, and Lobachevsky replaced that postulate, the angle sum ceased to be $180^\circ$, revealing exactly how much of ordinary geometry rides on this one theorem.
