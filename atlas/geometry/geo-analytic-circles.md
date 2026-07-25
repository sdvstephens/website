Here is an equation with no circle in sight: $x^2 + y^2 - 4x + 6y - 3 = 0$. Yet every point $(x,y)$
that satisfies it lies on a perfect circle — a specific center, a specific radius, hidden in the
scramble of terms. How does a tangle of squares and linear terms secretly name a round curve, and how
would you pry the center and radius back out?

## Discovery

A circle of radius $r$ centered at $(h,k)$ is the set of points at distance exactly $r$ from
$(h,k)$.

1. Let $(x,y)$ be any point on such a circle. Draw the horizontal segment from $(x,y)$ to the point
   directly beside the center, and the vertical segment from there to the center $(h,k)$; together
   with the radius they form a right triangle whose legs are horizontal and vertical. Write the
   length of the horizontal leg and the length of the vertical leg, each in terms of $x,y,h,k$.
2. The radius from $(h,k)$ out to $(x,y)$ is the hypotenuse of that right triangle, with length $r$.
   Apply the Pythagorean theorem to the triangle in step $1$ and write the equation the three lengths
   must satisfy. (Note the legs get squared — decide whether their absolute-value signs still
   matter.)
3. Now run it backward on a scramble: $x^2 + y^2 - 4x + 6y - 3 = 0$. Group the $x$-terms together and
   the $y$-terms together. For the $x$-group $x^2 - 4x$, what single number must you add to make it a
   perfect square $(x - \text{something})^2$? Do the same for the $y$-group $y^2 + 6y$. Keep the
   equation balanced by adding those same numbers to the other side, and read off what the result
   tells you.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **circle** of center $(h,k)$ and radius $r>0$ has the equation
$$(x - h)^2 + (y - k)^2 = r^2.$$
A point $(x,y)$ lies on the circle if and only if it satisfies this equation.

Any equation of the form
$$x^2 + y^2 + Dx + Ey + F = 0$$
can be returned to standard form by **completing the square** in $x$ and in $y$:
$$\left(x + \tfrac{D}{2}\right)^2 + \left(y + \tfrac{E}{2}\right)^2 = \tfrac{D^2}{4} + \tfrac{E^2}{4} - F,$$
so the center is $\left(-\tfrac{D}{2},\,-\tfrac{E}{2}\right)$ and the radius is
$r = \sqrt{\tfrac{D^2}{4} + \tfrac{E^2}{4} - F}$, provided the right-hand side is positive.

### Proof

**Standard form.** Let $(x,y)$ be an arbitrary point. Build the right triangle with a horizontal leg
from $(x,y)$ to $(h,y)$ and a vertical leg from $(h,y)$ to $(h,k)$; the corner at $(h,y)$ is a right
angle since one leg is horizontal and the other vertical. The horizontal leg has length $|x-h|$ and
the vertical leg $|y-k|$. The segment from $(x,y)$ to the center $(h,k)$ is the hypotenuse, so by the
Pythagorean theorem (`geo-pythagorean-theorem`) its length $d$ satisfies
$$d^2 = |x-h|^2 + |y-k|^2 = (x-h)^2 + (y-k)^2,$$
the absolute values disappearing under squaring. (If $(x,y)$ shares the center's row or column one leg
has length $0$ and the relation still holds, reading as a single squared coordinate difference.) The
point lies on the circle exactly when its distance to the center is $r$, that is $d=r$, equivalently
$d^2 = r^2$ since both are nonnegative. Hence $(x,y)$ is on the circle iff
$(x-h)^2 + (y-k)^2 = r^2$.

**Completing the square.** Start from $x^2 + y^2 + Dx + Ey + F = 0$ and regroup:
$$(x^2 + Dx) + (y^2 + Ey) = -F.$$
Because $x^2 + Dx = \left(x + \tfrac{D}{2}\right)^2 - \tfrac{D^2}{4}$ and likewise
$y^2 + Ey = \left(y + \tfrac{E}{2}\right)^2 - \tfrac{E^2}{4}$ (expand the squares to check the cross
terms $D x$ and $E y$), substituting gives
$$\left(x + \tfrac{D}{2}\right)^2 + \left(y + \tfrac{E}{2}\right)^2 = \tfrac{D^2}{4} + \tfrac{E^2}{4} - F.$$
This is standard form with $h = -\tfrac{D}{2}$, $k = -\tfrac{E}{2}$, and $r^2$ equal to the
right-hand side. If that right-hand side is positive it is a genuine circle of radius its square
root; if it is $0$ the "circle" is the single center point; if it is negative no real point satisfies
the equation. $\blacksquare$

### Worked Instance

**Build one.** Center $(2,-1)$, radius $5$. Here $h=2$, $k=-1$, $r=5$, so
$$(x-2)^2 + (y-(-1))^2 = 5^2,\qquad\text{i.e.}\qquad (x-2)^2 + (y+1)^2 = 25.$$
Note the sign flip: $k=-1$ makes $y-k = y+1$.

**Unscramble one (the Hook).** Take $x^2 + y^2 - 4x + 6y - 3 = 0$. Group and complete:
$$(x^2 - 4x) + (y^2 + 6y) = 3.$$
For $x^2-4x$ add $\left(\tfrac{-4}{2}\right)^2 = 4$; for $y^2+6y$ add $\left(\tfrac{6}{2}\right)^2 = 9$.
Add both to each side:
$$(x^2 - 4x + 4) + (y^2 + 6y + 9) = 3 + 4 + 9,\qquad (x-2)^2 + (y+3)^2 = 16.$$
So the hidden circle has center $(2,-3)$ and radius $\sqrt{16} = 4$.

### Pitfalls

- **Sign flips in the center.** The equation reads $(x-h)^2+(y-k)^2$. A center of $(2,-3)$ gives
  $(x-2)^2 + (y+3)^2$ — the $-3$ becomes $+3$ inside. Read the center by *negating* the numbers you
  see added to $x$ and $y$.
- **The right side is $r^2$, not $r$.** $(x-2)^2+(y+1)^2 = 25$ has radius $5$, not $25$. Take the
  square root to get the radius.
- **A non-positive constant is a warning.** After completing the square, if the right-hand side is
  negative there is no real circle; if it is exactly $0$ the graph is a single point.
- **Add the completing constants to *both* sides.** Completing the square adds
  $\tfrac{D^2}{4}$ and $\tfrac{E^2}{4}$; those must be added to the other side too, or the equation is
  no longer balanced and the radius comes out wrong.

:::
:::

## Connections

Built directly on `geo-pythagorean-theorem` (the distance to the center is a hypotenuse) and on
`geo-analytic-lines` (equations of curves in the plane), this turns the circle into pure algebra. It
opens the door to `geo-trig-unit-circle`, the circle $x^2+y^2=1$ on which cosine and sine are read off
as coordinates. Completing the square is the same maneuver that solves quadratics, here doing
geometric work. Recognition trigger: any equation with $x^2$ and $y^2$ appearing with equal
coefficients and no $xy$ term is a circle in disguise — complete the square to find its center and
radius.

## History

The equation $(x-h)^2+(y-k)^2=r^2$ expresses Euclid's circle in the coordinate language invented by René Descartes and Pierre de Fermat around 1637. What Greek geometry treated as the locus of points equidistant from a center, analytic geometry rewrote as a single algebraic relation, with the distance formula supplying the translation. Descartes and Fermat were seeking a general algebraic method for geometric problems, and the circle was among the first curves they cast into equations. Completing the square — a technique from the algebra of al-Khwarizmi in 9th-century Baghdad — is what recovers the center and radius from a circle's expanded equation, uniting two great mathematical traditions.
