On graph paper, mark $(1,2)$ and $(4,6)$ and stretch a string taut between them. The string cuts
across the grid at a slant, crossing no clean row of squares — yet its length is exactly $5$, a whole
number. Two arbitrary points, a slanted gap, and out pops a tidy answer. What arithmetic on the four
coordinates produces the straight-line distance?

## Discovery

Let the two points be $(x_1,y_1)$ and $(x_2,y_2)$.

1. From $(x_1,y_1)$ walk horizontally until you are directly below or above $(x_2,y_2)$; you arrive at
   the corner point $(x_2,y_1)$. This is a purely horizontal move. Write the length of that horizontal
   segment in terms of the coordinates.
2. From that corner $(x_2,y_1)$, walk straight up or down to $(x_2,y_2)$. This is a purely vertical
   move meeting the first at a right angle. Write the length of that vertical segment in terms of the
   coordinates.
3. The two segments from steps $1$ and $2$ are the legs of a right triangle; the taut string from
   $(x_1,y_1)$ to $(x_2,y_2)$ is its hypotenuse. Using only those two leg lengths, write an expression
   for the length of the slanted string.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The distance formula.** The distance between points $(x_1,y_1)$ and $(x_2,y_2)$ in the coordinate
plane is
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$
It is symmetric in the two points: swapping them changes each difference's sign, which the squaring
erases, so the distance is the same either way.

*(Companion fact: the **midpoint** of the segment joining them is the coordinatewise average
$\left(\tfrac{x_1+x_2}{2},\,\tfrac{y_1+y_2}{2}\right)$.)*

### Proof

Given $(x_1,y_1)$ and $(x_2,y_2)$, introduce the corner point $C=(x_2,y_1)$. The segment from
$(x_1,y_1)$ to $C$ is horizontal — both endpoints share the $y$-value $y_1$ — so its length is the
gap in the $x$-coordinates, $|x_2 - x_1|$. The segment from $C$ to $(x_2,y_2)$ is vertical — both
share the $x$-value $x_2$ — so its length is $|y_2 - y_1|$. A horizontal segment meets a vertical
segment at a right angle, so triangle with vertices $(x_1,y_1)$, $C$, $(x_2,y_2)$ has its right angle
at $C$, and the segment from $(x_1,y_1)$ to $(x_2,y_2)$ is the hypotenuse.

By the Pythagorean theorem (`geo-pythagorean-theorem`), the hypotenuse length $d$ satisfies
$$d^2 = |x_2 - x_1|^2 + |y_2 - y_1|^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2,$$
since squaring a real number kills any sign, so the absolute values are unnecessary once squared.
Distances are nonnegative, so taking the nonnegative square root,
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$
If the two points coincide, both differences are $0$ and $d=0$, as it should be; if they share a row
or a column, one leg has length $0$ and the formula reduces to a single coordinate gap. $\blacksquare$

### Worked Instance

The Hook: from $(1,2)$ to $(4,6)$,
$$d = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5.$$
The slant is a $3$-$4$-$5$ right triangle laid on the grid — horizontal leg $3$, vertical leg $4$,
hypotenuse $5$. Subtracting in the other order changes nothing: $(1-4)^2 = (-3)^2 = 9$ and
$(2-6)^2 = (-4)^2 = 16$, same sum. The midpoint of the segment is
$\left(\tfrac{1+4}{2},\tfrac{2+6}{2}\right) = \left(\tfrac52, 4\right)$.

### Pitfalls

- **It is not $|x_2-x_1| + |y_2-y_1|$.** That "city-block" sum overcounts: for $(1,2)$ to $(4,6)$ it
  gives $3+4=7$, but the straight-line distance is $5$. You need the square root of the sum of
  *squares*, not the sum of the gaps.
- **Don't forget the square root.** $(x_2-x_1)^2 + (y_2-y_1)^2$ is the *square* of the distance; the
  distance itself is its square root.
- **Order of subtraction is free.** $x_2-x_1$ or $x_1-x_2$ — both square to the same thing. But be
  consistent within each coordinate and don't mix a difference with an unsquared term.
- **Both differences get squared.** A common slip is squaring only one. Every leg is squared before
  adding.

:::
:::

## Connections

This is the Pythagorean theorem (`geo-pythagorean-theorem`) transcribed into coordinates
(`def-coordinate-plane`): the horizontal and vertical gaps are legs, the segment is the hypotenuse. It
is the engine behind the circle equation (distance to a center) and it directly unlocks
`geo-distance-point-line`, the shortest distance from a point to a line. Recognition trigger: any
"how far apart are these two points," any radius or side length read from coordinates, or any check of
whether points are equidistant — reach for the square root of the sum of squared differences.

## History

The distance formula $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ is simply the Pythagorean theorem — proved in Euclid's *Elements* Book I (c. 300 BCE) and known far earlier to Babylonian scribes — expressed in the coordinate framework of Descartes and Fermat (c. 1637). Once points carry numerical coordinates, the horizontal and vertical gaps become the legs of a right triangle and the straight-line distance becomes its hypotenuse. This synthesis is exactly what analytic geometry was built to achieve: turning a geometric measurement into an algebraic computation. The formula then generalizes seamlessly to three and more dimensions, a flexibility the purely synthetic Greek approach could not easily match.
