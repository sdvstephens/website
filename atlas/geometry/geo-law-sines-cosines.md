A triangle has two sides of length $5$ and $7$ meeting at a $60^\circ$ angle. You never measured
the third side, yet it is already forced — and so is every other angle, and the area, and the
radius of the circle through all three corners. One angle and two sides pin down the whole
figure. What is the machinery that reads those hidden lengths off?

## Discovery

Let a triangle have vertices $A, B, C$, with side lengths $a = BC$, $b = CA$, $c = AB$ opposite
the respective vertices. Drop the altitude from $C$ to side $AB$; call its foot $H$ and its
length $h$.

1. Using right triangle $AHC$, write $h$ in terms of $b$ and angle $A$. Using right triangle
   $BHC$, write the same $h$ in terms of $a$ and angle $B$. Set the two expressions equal. What
   relation between $a$, $b$, $\sin A$, $\sin B$ pops out?
2. The choice of which vertex to drop the altitude from was arbitrary. Drop it from a different
   vertex and repeat. How far does the relation from step 1 extend across all three sides?
3. Now for the third side. Keep the altitude from $C$ with foot $H$ on line $AB$. Write the two
   segments $AH$ and $HB$ using $b\cos A$ and the total length $c$. Then apply the Pythagorean
   theorem to right triangle $BHC$, writing $a^2 = h^2 + HB^2$ with $h = b\sin A$. Expand, and
   use $\sin^2 A + \cos^2 A = 1$. What single equation in $a, b, c, \cos A$ survives?
4. In step 3, set $A = 90^\circ$. What familiar theorem is the special case? What does the
   equation say the extra term $-2bc\cos A$ is correcting for when $A \neq 90^\circ$?
5. Return to step 1's altitude $h = b\sin A$. The area of the triangle is $\tfrac12 (\text{base})
   (\text{height}) = \tfrac12 c\,h$. Rewrite the area using two sides and their included angle.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For any triangle with sides $a, b, c$ opposite angles $A, B, C$:

**Law of Sines.**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R,$$
where $R$ is the circumradius (the common ratio equals the diameter of the circumscribed circle).

**Law of Cosines.**
$$a^2 = b^2 + c^2 - 2bc\cos A,$$
and cyclically for $b^2$ and $c^2$. When $A = 90^\circ$ this is the Pythagorean theorem.

**Area.** The triangle's area is
$$[\triangle ABC] = \tfrac12\, bc\sin A = \tfrac12\, ca\sin B = \tfrac12\, ab\sin C.$$

### Proof

Place the triangle with side lengths $a=BC$, $b=CA$, $c=AB$ opposite $A, B, C$.

**Law of Cosines.** Assume first that the foot $H$ of the altitude from $C$ lies on segment $AB$
(angles $A, B$ acute). Its height is $h = b\sin A$, and $AH = b\cos A$, so $HB = c - b\cos A$.
Right triangle $BHC$ gives
$$a^2 = h^2 + HB^2 = (b\sin A)^2 + (c - b\cos A)^2 = b^2\sin^2 A + c^2 - 2bc\cos A + b^2\cos^2 A.$$
Since $\sin^2 A + \cos^2 A = 1$, this collapses to $a^2 = b^2 + c^2 - 2bc\cos A$. If $A$ is obtuse,
$H$ falls outside the segment and $\cos A \lt 0$; then $AH = b|\cos A| = -b\cos A$ and
$HB = c + b|\cos A| = c - b\cos A$, so the identical algebra holds. If $A = 90^\circ$, then
$\cos A = 0$ and the statement is $a^2 = b^2 + c^2$. All cases give the same formula.

**Area.** With base $AB = c$ and height $h = b\sin A$, the area is
$[\triangle ABC] = \tfrac12 c\,h = \tfrac12\, bc\sin A$. The same altitude construction from the
other vertices gives the cyclic forms; equating them proves each equals the others.

**Law of Sines.** From the three area expressions, $\tfrac12 bc\sin A = \tfrac12 ca\sin B$, so
dividing by $\tfrac12 abc$ gives $\dfrac{\sin A}{a} = \dfrac{\sin B}{b}$; cyclically all three are
equal, hence $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$.

It remains to identify this common ratio with $2R$. Let $O$ be the circumcenter and draw the
diameter $BD$ through $B$, with $D$ on the circle. Then $\angle BCD = 90^\circ$ (angle in a
semicircle), and $\angle BDC = \angle BAC = A$ (both subtend chord $BC$ by the inscribed-angle
theorem). In right triangle $BCD$, $\sin(\angle BDC) = \dfrac{BC}{BD} = \dfrac{a}{2R}$, so
$\dfrac{a}{\sin A} = 2R$. $\blacksquare$

### Worked Instance

Resolve the Hook: sides $b = 5$ and $c = 7$ meet at angle $A = 60^\circ$. The Law of Cosines
gives the third side:
$$a^2 = 5^2 + 7^2 - 2\cdot 5\cdot 7\cos 60^\circ = 25 + 49 - 70\cdot\tfrac12 = 39,$$
so $a = \sqrt{39} \approx 6.24$. The area is $[\triangle] = \tfrac12\cdot 5\cdot 7\sin 60^\circ
= \tfrac{35}{2}\cdot\tfrac{\sqrt3}{2} = \tfrac{35\sqrt3}{4} \approx 15.16$. The circumradius follows
from the Law of Sines: $2R = \dfrac{a}{\sin A} = \dfrac{\sqrt{39}}{\sqrt3/2} = \dfrac{2\sqrt{39}}
{\sqrt3} = 2\sqrt{13}$, so $R = \sqrt{13}$. Everything was forced by two sides and one angle.

### Pitfalls

- Sides and angles must be *opposite* each other: in $a^2 = b^2 + c^2 - 2bc\cos A$, angle $A$ sits
  opposite side $a$ and *between* sides $b$ and $c$. Pairing the wrong angle is the classic error.
- The Law of Sines is ambiguous for "SSA" data: $\sin A = \sin(180^\circ - A)$, so a given sine can
  correspond to an acute or an obtuse angle. Check which is geometrically possible (the ambiguous
  case).
- Sign of the cosine term: for obtuse $A$, $\cos A \lt 0$, so $-2bc\cos A \gt 0$ and $a^2 \gt b^2
  + c^2$. Do not force $\cos A$ to be positive.
- The common ratio in the Law of Sines is $2R$, the *diameter*, not $R$.

:::
:::

## Connections

Prereqs: the angle-addition / Pythagorean identity $\sin^2+\cos^2=1$ (`tc-angle-addition`). These
three laws are the workhorses of computational triangle geometry: they turn partial data (some
sides, some angles) into everything else. The Law of Cosines directly unlocks Heron's formula
(`geo-heron`) and the power of a point (`geo-power-of-point`); the area form $\tfrac12 ab\sin C$
and the circumradius relation reappear throughout Olympiad geometry. Recognition trigger: any
triangle where you are given a mix of sides and angles and asked for a missing length, angle,
area, or circumradius.
