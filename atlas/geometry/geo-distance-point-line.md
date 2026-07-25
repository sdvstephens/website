The origin sits off to the side of the line $3x + 4y - 10 = 0$. How close does the line come to it?
Not along any old direction — the *shortest* gap, straight across. The answer turns out to be exactly
$2$, and it falls out of the three coefficients $3$, $4$, $-10$ alone, without ever locating the point
on the line where the closest approach happens. What formula reads distance straight off an equation?

## Discovery

Write the line as $Ax + By + C = 0$, and let the outside point be $(x_0,y_0)$.

1. The shortest route from a point to a line runs *perpendicular* to the line. First find a direction
   perpendicular to the line. The line $Ax+By+C=0$ has slope $-\tfrac{A}{B}$ (solve for $y$). Consider
   the arrow $(A,B)$: what is its slope, and what is the product of its slope with the line's slope?
   Conclude how $(A,B)$ sits relative to the line.
2. Starting at $(x_0,y_0)$, step along the perpendicular direction $(A,B)$ by an unknown multiple $t$,
   landing at the point $(x_0 + tA,\; y_0 + tB)$. For this landing point (the *foot* of the
   perpendicular) to lie on the line, it must satisfy $Ax + By + C = 0$. Substitute its coordinates
   into the line equation and write the resulting equation in $t$; then solve it for $t$.
3. The distance you want is the length of that perpendicular step from $(x_0,y_0)$ to the foot. The
   step is the vector $(tA, tB)$. Using the distance formula (or the length of $(tA,tB)$), write the
   length of the step in terms of $t$, $A$, and $B$. Then substitute your $t$ from step $2$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Distance from a point to a line.** The distance from the point $(x_0,y_0)$ to the line
$Ax + By + C = 0$ (with $A,B$ not both $0$) is
$$d = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}.$$
The numerator is the line's left-hand side evaluated at the point (in absolute value); the
denominator normalizes by the length of the coefficient vector $(A,B)$. The point lies *on* the line
exactly when the numerator is $0$, giving distance $0$.

### Proof

**The vector $(A,B)$ is perpendicular to the line.** Rewriting $Ax + By + C = 0$ as
$y = -\tfrac{A}{B}x - \tfrac{C}{B}$ (for $B\ne 0$) shows the line has slope $-\tfrac{A}{B}$. The arrow
$(A,B)$ has slope $\tfrac{B}{A}$. Their product is
$$\left(-\frac{A}{B}\right)\cdot\frac{B}{A} = -1,$$
so by the perpendicular criterion (`geo-analytic-lines`) the direction $(A,B)$ is perpendicular to the
line. (If $B=0$ the line is vertical, $x=-\tfrac{C}{A}$, and $(A,0)$ points horizontally, again
perpendicular; if $A=0$ the line is horizontal and $(0,B)$ points vertically. So $(A,B)$ is normal to
the line in every case.)

**Locate the foot.** From $(x_0,y_0)$ move along this perpendicular by a scalar multiple $t$, reaching
$P=(x_0 + tA,\; y_0 + tB)$. This point is on the line precisely when
$$A(x_0 + tA) + B(y_0 + tB) + C = 0.$$
Expanding, $Ax_0 + By_0 + C + t(A^2 + B^2) = 0$, so
$$t = -\frac{A x_0 + B y_0 + C}{A^2 + B^2},$$
which is well defined because $A^2 + B^2 \gt 0$ (not both $A,B$ zero). Since the segment from
$(x_0,y_0)$ to $P$ is perpendicular to the line, $P$ is the closest point of the line to $(x_0,y_0)$:
any other point $Q$ on the line makes a right triangle with legs $(x_0,y_0)P$ and $PQ$, whose
hypotenuse $(x_0,y_0)Q$ is strictly longer than the leg $(x_0,y_0)P$.

**Measure the step.** The displacement from $(x_0,y_0)$ to $P$ is $(tA, tB)$; by the distance formula
(`geo-distance-formula`) its length is
$$d = \sqrt{(tA)^2 + (tB)^2} = \sqrt{t^2(A^2 + B^2)} = |t|\,\sqrt{A^2 + B^2}.$$
Substituting the value of $t$,
$$d = \frac{|A x_0 + B y_0 + C|}{A^2 + B^2}\cdot\sqrt{A^2 + B^2}
    = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}},$$
using $\dfrac{\sqrt{A^2+B^2}}{A^2+B^2} = \dfrac{1}{\sqrt{A^2+B^2}}$. $\blacksquare$

### Worked Instance

The Hook: distance from $(0,0)$ to $3x + 4y - 10 = 0$. Here $A=3$, $B=4$, $C=-10$, and
$(x_0,y_0)=(0,0)$:
$$d = \frac{|3\cdot 0 + 4\cdot 0 - 10|}{\sqrt{3^2 + 4^2}}
    = \frac{|-10|}{\sqrt{25}} = \frac{10}{5} = 2.$$
So the line's closest approach to the origin is exactly $2$. As a check, the foot uses
$t = -\dfrac{3\cdot0+4\cdot0-10}{25} = \dfrac{10}{25} = \dfrac{2}{5}$, landing at
$\left(\tfrac{6}{5},\tfrac{8}{5}\right)$, whose distance to the origin is
$\sqrt{(\tfrac65)^2 + (\tfrac85)^2} = \sqrt{\tfrac{36+64}{25}} = \sqrt{4} = 2$ — agreeing.

### Pitfalls

- **Get the line into $Ax+By+C=0$ form first.** From $y = mx + b$, rewrite as $mx - y + b = 0$, so
  $A=m$, $B=-1$, $C=b$. Plugging coordinates into the wrong arrangement gives a wrong numerator.
- **Keep the absolute value.** $A x_0 + B y_0 + C$ can be negative; distance is nonnegative, so the
  bars are essential.
- **Divide by $\sqrt{A^2+B^2}$, not $A+B$.** The normalizer is the length of $(A,B)$, a square root
  of a sum of squares — not the plain sum of the coefficients.
- **Both $A,B$ zero is not a line.** The formula needs $A^2+B^2\gt 0$; otherwise there is no line.

:::
:::

## Connections

This caps the analytic-geometry line by fusing `geo-analytic-lines` (the perpendicular/normal
direction $(A,B)$) with `geo-distance-formula` (the length of the perpendicular step). The trick —
step along the normal by an unknown multiple and solve for where you hit the line — is the prototype
for projecting a point onto a subspace, reappearing throughout linear algebra and optimization.
Recognition trigger: any "how far is this point from that line," any clearance or margin computation,
or any request for the shortest distance to a straight boundary — put the line in $Ax+By+C=0$ form and
evaluate.

## History

The formula $\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$ for the distance from a point to a line is a product of the analytic geometry launched by Descartes and Fermat (c. 1637) and matured by 18th- and 19th-century mathematicians who developed the coordinate treatment of lines and planes. It answers a naturally geometric question — the shortest, perpendicular drop from a point to a line — with a single compact algebraic expression. The numerator measures how far the point fails to satisfy the line's equation, and the denominator normalizes by the length of the coefficient vector. Such normalized linear forms became standard as vector methods entered geometry, and they generalize directly to the distance from a point to a plane in space.
