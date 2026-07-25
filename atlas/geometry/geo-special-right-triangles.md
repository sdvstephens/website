A square floor tile has sides $1$ metre. Snap a chalk line across its diagonal and you have cut it into
two right triangles — but how long is that chalk line? And an equilateral triangle, all sides $1$,
sliced down the middle: how tall is it? Both cuts produce right triangles whose side lengths seem to
involve the same handful of stubborn irrational numbers, over and over, no matter the tile's size.

## Discovery

1. Cut a square of side $s$ along a diagonal. Look at one of the two triangles: name its two legs and
   the angle between them, and explain why its other two angles are equal to each other. Using those
   facts, list the three angles of this triangle.
2. That triangle is right, with both legs equal to $s$. Apply the Pythagorean relation to find the
   length of its hypotenuse (the diagonal) in terms of $s$. Write the ratio leg $:$ leg $:$ hypotenuse.
3. Now take an equilateral triangle of side $s$ — all three angles equal, summing to $180^\circ$, so
   each is what? Drop a perpendicular from one vertex to the opposite side. Argue why this perpendicular
   splits the base into two equal pieces, and give the length of each piece.
4. The perpendicular from step $3$ creates a right triangle whose hypotenuse is $s$ and whose shorter
   leg you just found. Use the Pythagorean relation to compute its longer leg (the height). Then list
   the three angles of this right triangle, and write the ratio shortest $:$ longer leg $:$ hypotenuse.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Two right triangles have side ratios fixed once and for all by their angles.

- **The $45$-$45$-$90$ triangle** (an isosceles right triangle — half of a square). If each leg is $s$,
  the hypotenuse is $s\sqrt2$:
  $$\text{legs} : \text{hypotenuse} \;=\; s : s : s\sqrt2 \;=\; 1 : 1 : \sqrt2 .$$
- **The $30$-$60$-$90$ triangle** (half of an equilateral triangle). Opposite the $30^\circ$,
  $60^\circ$, $90^\circ$ angles the sides run in the ratio
  $$s : s\sqrt3 : 2s \;=\; 1 : \sqrt3 : 2 ,$$
  where $s$ is the shortest side (opposite $30^\circ$), $s\sqrt3$ is the longer leg (opposite
  $60^\circ$), and $2s$ is the hypotenuse (opposite $90^\circ$).

Because the ratios are fixed, knowing any one side of such a triangle gives all three immediately, with
no further use of the Pythagorean computation.

### Proof

**The $45$-$45$-$90$ triangle.** An isosceles right triangle has a right angle and two equal legs; its
other two angles are equal (base angles opposite equal sides) and together with the $90^\circ$ sum to
$180^\circ$, so each is $45^\circ$. Let each leg be $s$. By the Pythagorean Theorem the hypotenuse is
$$\sqrt{s^2+s^2} = \sqrt{2s^2} = s\sqrt2 ,$$
giving the ratio $1 : 1 : \sqrt2$. (It is exactly the square-diagonal cut: a square of side $s$ has
diagonal $s\sqrt2$.)

**The $30$-$60$-$90$ triangle.** Start from an equilateral triangle of side $s$; each angle is
$\tfrac{180^\circ}{3}=60^\circ$. Drop the altitude from the apex to the base. This altitude is also the
perpendicular bisector of the base: the two triangles it forms share the altitude, share the full side
$s$ as their hypotenuses, and each has a right angle at the foot, so they are congruent (they are mirror
images), whence the base is split into two equal halves of length $\tfrac{s}{2}$. One half-triangle then
has hypotenuse $s$ and shorter leg $\tfrac{s}{2}$. Its angles are the $60^\circ$ retained at the base
vertex, the right angle at the foot, and — since the altitude also bisects the $60^\circ$ apex angle by
the mirror symmetry — a $30^\circ$ at the apex, so $30^\circ, 60^\circ, 90^\circ$. Its longer leg (the height) is
$$\sqrt{s^2-\left(\tfrac{s}{2}\right)^2} = \sqrt{s^2-\tfrac{s^2}{4}} = \sqrt{\tfrac{3s^2}{4}}
= \tfrac{s\sqrt3}{2}.$$
Scaling all three sides $\tfrac{s}{2} : \tfrac{s\sqrt3}{2} : s$ by $\tfrac{2}{s}$ gives $1:\sqrt3:2$.
$\blacksquare$

### Worked Instance

A square tile of side $1$ m has diagonal $1\cdot\sqrt2 = \sqrt2 \approx 1.414$ m — that is the chalk
line from the Hook. If instead the tile were $5$ m on a side, the diagonal would be $5\sqrt2\approx
7.07$ m.

An equilateral triangle of side $1$ has height $\tfrac{1\cdot\sqrt3}{2}=\tfrac{\sqrt3}{2}\approx 0.866$,
resolving the second Hook question; a side-$6$ equilateral triangle has height $\tfrac{6\sqrt3}{2}=3\sqrt3
\approx 5.196$.

Reading a $30$-$60$-$90$ triangle from a single side: if the side opposite $60^\circ$ is $10$, then
$s\sqrt3=10$ gives $s=\tfrac{10}{\sqrt3}=\tfrac{10\sqrt3}{3}$, so the shortest side is $\tfrac{10\sqrt3}{3}$
and the hypotenuse is $2s=\tfrac{20\sqrt3}{3}$ — all three sides from one, no square roots recomputed.

### Pitfalls

- **In the $30$-$60$-$90$, the sides do not run $1:2:3$.** The ratio is $1:\sqrt3:2$; the middle side is
  $\sqrt3\approx1.73$ times the shortest, not $2$ times.
- **Match each side to its opposite angle.** The shortest side faces $30^\circ$, the $\sqrt3$ side faces
  $60^\circ$, and the hypotenuse (longest) faces $90^\circ$. Pairing them wrongly scrambles the ratio.
- **$\sqrt2$ is the $45$-triangle's number; $\sqrt3$ is the $30$-$60$ triangle's.** Confusing them puts
  a diagonal where a height belongs.
- **The hypotenuse is $2s$, not $s\sqrt3$.** In the $30$-$60$-$90$ the longest side is twice the
  shortest; $s\sqrt3$ is the *longer leg*, which is still less than the hypotenuse.

:::
:::

## Connections

Both triangles are `geo-pythagorean-theorem` applied to a shape with built-in symmetry: cut a square and
the theorem hands you $\sqrt2$; cut an equilateral triangle and it hands you $\sqrt3$. Memorizing the two
ratios turns many later length computations into one-step scalings rather than fresh square-root
extractions, which is why they recur throughout trigonometry (they are the exact values behind
$\sin 30^\circ$, $\cos 45^\circ$, and their kin) and in countless contest figures. Recognition trigger:
an angle of $45^\circ$, $30^\circ$, or $60^\circ$ inside a right triangle, an isosceles right triangle,
or any diagonal of a square or altitude of an equilateral triangle.

## History

The fixed ratios of the $45$-$45$-$90$ and $30$-$60$-$90$ triangles are direct consequences of the Pythagorean theorem applied to the most symmetric cases, and both were implicit in Greek geometry from Euclid onward (c. 300 BC). The $45$-$45$-$90$ triangle is half a square, so its hypotenuse-to-leg ratio is the diagonal of a unit square, $\sqrt{2}$ — the very length whose irrationality the Pythagoreans discovered and, by legend, tried to keep secret in the fifth century BC. The $30$-$60$-$90$ triangle is half an equilateral triangle, which is how Euclid analyzes such figures. These special triangles became computational cornerstones of ancient astronomy: Hipparchus and later Ptolemy, in his second-century *Almagest*, tabulated chord lengths that amount to trigonometric values, with these exact ratios among the anchor points. Their tidy closed forms are why they still open every trigonometry course.
