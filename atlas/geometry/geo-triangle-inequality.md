Hand someone three rods — $3$ cm, $4$ cm, and $10$ cm — and ask them to pin the ends into a triangle. They
cannot. The two short rods, even swung out perfectly straight, span only $7$ cm across the gap the $10$ cm
rod insists on. Swap the $10$ for a $6$ and it snaps together at once. Somewhere between $6$ and $10$ lies
a sharp cutoff between a triple that closes into a triangle and one that never will. What exactly is that
cutoff?

## Discovery

Use only lengths, betweenness on a line, and the idea that a genuine triangle needs its three corners not
to be collinear.

1. Lay the $10$ cm rod flat as a base from $A$ to $B$. Hinge the $3$ cm rod at $A$ and the $4$ cm rod at
   $B$. Swing both inward until they lie flat along $AB$, pointing at each other — the farthest their free
   tips can reach. Compute the distance still separating the two tips in that flattest reach. Can they ever
   touch?
2. Keep the same $3$ cm and $4$ cm rods but shorten the base to $AB = 6$. In the flattest reach now, do
   the tips fall short, meet, or overlap? If there is overlap, can you lift the rods slightly off the line
   into a real corner $C$ above the base?
3. Compare the two experiments. What quantity built from the two hinged rods must you weigh against the
   base to predict whether a corner $C$ can form? Write the deciding inequality (base versus the pair).
4. A triangle deserves the name only if the test in step 3 passes with *each* of the three sides taken as
   the base in turn. Using side lengths $a = BC$, $b = CA$, $c = AB$, write down all three inequalities you
   obtain this way.
5. Now stop measuring and prove it. In a real triangle $ABC$, compare the straight trip from $B$ to $A$
   along side $\overline{BA}$ with the detour $B \to C \to A$. Argue, on general grounds, why the detour
   can never be shorter — and pin down the one situation in which the two trips could tie.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The triangle inequality.** In any triangle with side lengths $a, b, c$, each side is strictly less than
the sum of the other two:
$$a \lt b + c, \qquad b \lt c + a, \qquad c \lt a + b.$$
Equivalently, the sum of any two sides exceeds the third. Geometrically: the straight segment is the
shortest path between its endpoints, so any detour through a third point is longer.

**Reverse form.** Each side is greater than the positive difference of the other two:
$$a \gt |b - c|, \qquad b \gt |c - a|, \qquad c \gt |a - b|.$$

**Degenerate boundary.** Equality $a = b + c$ occurs exactly when the three points are collinear with the
middle one between the others — a flattened, zero-area "triangle." Strict inequality holds precisely when
the three vertices are non-collinear.

**Existence test.** Three positive lengths form a (non-degenerate) triangle if and only if each is less
than the sum of the other two — equivalently, the *largest* is less than the sum of the other two (the
other two inequalities are then automatic).

### Proof

Let $\triangle ABC$ have sides $a = BC$, $b = CA$, $c = AB$; we prove $c \lt a + b$, and the others follow
by relabeling.

Extend $\overline{BC}$ beyond $C$ to a point $D$ with $CD = CA = b$. By betweenness on the line through
$B, C, D$,
$$BD = BC + CD = a + b.$$
Triangle $ACD$ is isosceles with $CA = CD$, so its base angles are equal:
$\angle CDA = \angle CAD$. Now the ray $\overrightarrow{AC}$ lies inside $\angle BAD$ (since $C$ is between
$B$ and $D$ as seen from $A$), so
$$\angle BAD = \angle BAC + \angle CAD \gt \angle CAD = \angle CDA = \angle BDA.$$
Thus in $\triangle ABD$ the angle at $A$ exceeds the angle at $D$. In any triangle the greater side lies
opposite the greater angle, so the side opposite $\angle BAD$ exceeds the side opposite $\angle BDA$:
$$BD \gt AB, \quad\text{that is,}\quad a + b \gt c.$$
Relabeling the vertices gives $b + c \gt a$ and $c + a \gt b$.

**Reverse form.** From $a \lt b + c$ we get $b \gt a - c$; from $b \lt a + c$... more directly, rearrange
$c \lt a + b$ into $a \gt c - b$ and $b \lt a + c$ into $a \gt b - c$. Together $a$ exceeds both $b - c$ and
$c - b$, hence $a \gt |b - c|$, and symmetrically for the others.

**Degenerate case.** If $C$ lies on segment $\overline{AB}$ between $A$ and $B$, then by segment addition
$AC + CB = AB$, i.e. $b + a = c$: equality, the flat case. If the three points are non-collinear the
construction above forces the strict inequality. So equality holds *iff* the points are collinear with the
middle one between the others.

**Existence test.** If a triangle exists the three inequalities hold, as just proved. Conversely, if
$x, y, z \gt 0$ satisfy each being less than the sum of the other two, hinge rods $y$ and $z$ at the ends
of base $x$: at full extension the tips span $y + z \gt x$, so the tips reach past each other, and by
continuity they coincide at some intermediate opening above the line, forming a genuine corner. It
suffices to check the largest against the sum of the other two, since if $z$ is largest then
$x \lt y + z$ and $y \lt x + z$ hold automatically. $\blacksquare$

### Worked Instance

The Hook. Rods $3, 4, 10$: the largest is $10$, and $3 + 4 = 7 \lt 10$, so the test fails — no triangle,
matching the $10 - 7 = 3$ cm gap the tips could never close. Rods $3, 4, 6$: the largest is $6$, and
$3 + 4 = 7 \gt 6$, while $4 + 6 \gt 3$ and $3 + 6 \gt 4$ hold trivially, so a triangle exists. The reverse
form also fences the base in: the third side must exceed $|4 - 3| = 1$ and fall below $4 + 3 = 7$, so any
base strictly between $1$ and $7$ closes — $6$ qualifies, $10$ does not.

A Pythagorean check makes the boundary concrete. The right triangle $3, 4, 5$ is genuine, and indeed
$3^2 + 4^2 = 5^2$ with $3 + 4 = 7 \gt 5 \gt 1 = |4 - 3|$. Picture the hinge at $B$ opening from $0^\circ$
to $180^\circ$: the third side grows continuously from $|4 - 3| = 1$ (rods folded flat, same direction)
up to $4 + 3 = 7$ (rods straightened flat, opposite directions), passing through $5$ at the right angle.
Every value strictly between $1$ and $7$ is a legal third side, and the two endpoints are exactly the
degenerate, zero-area configurations the inequality forbids.

### Pitfalls

- **Check the largest side against the sum of the other two.** That one inequality decides it; a triple can
  pass a lucky pair-check yet fail on the longest side.
- **Strict versus non-strict.** A genuine triangle needs $a + b \gt c$ *strictly*; $a + b = c$ is the flat,
  collinear, zero-area degenerate, not a triangle.
- **The reverse form uses the *absolute* difference.** The side exceeds $|b - c|$, not $b - c$ (which may
  be negative and would make the bound vacuous).
- **All three inequalities are true, but only the largest side's is binding.** Writing just one at random
  can miss the failing case.
- **"Two sides summing to exactly the third" is impossible for a real triangle** — that is the boundary you
  are ruling out, not an allowed shape.

:::
:::

## Connections

This theorem rests on `geo-segments-rays` (betweenness and segment addition, which pin down the extended
side $BD = a + b$ and the collinear degenerate case) and touches `geo-pythagorean-theorem` for concrete
right-triangle checks and the hinge picture where the third side sweeps from $|b-c|$ to $b+c$. It is the
metric backbone of geometry and analysis alike: it defines what a *distance* (metric) must satisfy, powers
estimates like $|x + y| \le |x| + |y|$, and underlies "shortest path" arguments from reflection problems to
the calculus of variations. Recognition trigger: any question about whether given lengths *can* form a
triangle, any bound on an unknown side, or any claim that a straight route beats a detour — reach for
"each side less than the sum of the other two."

## History

The statement that any two sides of a triangle exceed the third is Euclid's *Elements* I.20 (c. 300 BC). Proclus, writing in the fifth century AD, records that the Epicureans mocked this proposition as self-evident even to a donkey, which knows to walk straight to its food rather than along two sides of a triangle. Euclid nonetheless insisted on a proof, and his careful demonstration is a signature example of the Greek refusal to accept even the obvious without deduction. Far from trivial, the inequality is the geometric expression that the straight path is the shortest between two points, and its abstract form — $d(x,z) \le d(x,y) + d(y,z)$ — became one of the three defining axioms of a metric space in the early twentieth century work of Maurice Fréchet and Felix Hausdorff. What the ancients found almost too plain to state thus became a cornerstone of modern analysis.
