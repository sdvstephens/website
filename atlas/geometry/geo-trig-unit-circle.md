The right-triangle sine and cosine only speak of acute angles — there is no $120^\circ$ inside a right
triangle, and certainly no $180^\circ$. Yet a ball thrown, a wheel spun, a pendulum swung all sweep past
$90^\circ$ without pausing, and we would like $\cos 120^\circ$ or $\sin 210^\circ$ to *mean* something. How
do you keep the sine and cosine you already trust for acute angles, yet stretch them to every angle a ray
can point?

## Discovery

Work in the coordinate plane. Draw the circle of radius $1$ centred at the origin. For an angle $\theta$,
shoot a ray from the origin that starts along the positive $x$-axis and rotates **counterclockwise** by
$\theta$; call the point where this **terminal ray** crosses the circle $P$.

1. Suppose first that $\theta$ is acute. Drop a perpendicular from $P$ to the $x$-axis, forming a right
   triangle with the origin, whose hypotenuse is the radius of length $1$. Using the right-triangle
   definitions from `geo-trig-right-triangles`, write the two legs of this triangle — the horizontal one and
   the vertical one — in terms of $\cos\theta$ and $\sin\theta$. Then read off the $x$- and $y$-coordinates
   of $P$.
2. Your answer to step 1 describes $P$ purely by coordinates. Now rotate the ray past $90^\circ$, so $P$
   moves into the second quadrant, where no right triangle holds the angle $\theta$ itself. You want a
   *definition* of $\cos\theta$ and $\sin\theta$ for this $\theta$ that agrees with step 1 whenever
   $\theta$ happens to be acute. What is the simplest rule that reads $\cos\theta$ and $\sin\theta$ straight
   off the point $P$, and would reproduce step 1 exactly in the acute case?
3. With that coordinate rule in hand, walk the point $P$ once around the circle. In each of the four
   quadrants, decide the sign ($+$ or $-$) of $P$'s $x$-coordinate and of its $y$-coordinate, and hence the
   sign of $\cos\theta$ and $\sin\theta$ there. Record the pattern quadrant by quadrant.
4. The point $P=(x,y)$ lies on the circle of radius $1$ centred at the origin. Recall from
   `geo-analytic-circles` the equation such a circle satisfies. Substitute your coordinate expressions for
   $x$ and $y$ from step 2. What identity in $\cos\theta$ and $\sin\theta$ drops out, and where have you seen
   it before?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For **any** angle $\theta$, let $P$ be the point where the terminal ray at angle $\theta$ (measured
counterclockwise from the positive $x$-axis) meets the **unit circle** $x^2+y^2=1$. Define
$$\cos\theta=x\text{-coordinate of }P,\qquad \sin\theta=y\text{-coordinate of }P,$$
so that $P=(\cos\theta,\sin\theta)$. This **unit-circle definition** agrees with the right-triangle
definition for acute $\theta$, and now assigns a value to $\sin\theta$ and $\cos\theta$ for every angle —
obtuse, straight, reflex, or negative.

- **Signs by quadrant.** In quadrant I both are positive; in II, $\cos\theta\lt 0$ and $\sin\theta\gt 0$; in
  III both are negative; in IV, $\cos\theta\gt 0$ and $\sin\theta\lt 0$.
- **Reference angle.** The value of $\sin\theta$ or $\cos\theta$ equals, up to sign, the value at the acute
  angle $\theta_{\text{ref}}$ between the terminal ray and the $x$-axis; the quadrant supplies the sign.
- **Pythagorean identity, always.** Since $P$ lies on $x^2+y^2=1$,
  $$\cos^2\theta+\sin^2\theta=1$$
  for every $\theta$ — it is literally the equation of the unit circle.

### Proof

**Consistency with the acute definition.** Let $\theta$ be acute and let $P=(x,y)$ be the point where the
terminal ray meets the unit circle; since $\theta$ is between $0^\circ$ and $90^\circ$, $P$ lies in the
first quadrant, so $x\gt 0$ and $y\gt 0$. Drop the perpendicular from $P$ to the $x$-axis, meeting it at
$Q=(x,0)$. The triangle $OPQ$ (with $O$ the origin) has a right angle at $Q$, hypotenuse $OP$ of length $1$
(a radius of the unit circle), horizontal leg $OQ$ of length $x$ adjacent to the angle $\theta$ at $O$, and
vertical leg $QP$ of length $y$ opposite $\theta$. By the right-triangle definitions
(`geo-trig-right-triangles`),
$$\cos\theta=\frac{\text{adj}}{\text{hyp}}=\frac{x}{1}=x,\qquad
\sin\theta=\frac{\text{opp}}{\text{hyp}}=\frac{y}{1}=y.$$
So for acute $\theta$ the coordinates of $P$ are exactly $(\cos\theta,\sin\theta)$: the coordinate rule
reproduces the old definition. Extending that same rule "$\cos\theta,\sin\theta$ are the coordinates of $P$"
to all $\theta$ is therefore a genuine extension — it changes nothing where the old definition already
applied, and it fills in every other angle.

**The Pythagorean identity for all $\theta$.** By construction $P=(\cos\theta,\sin\theta)$ lies on the unit
circle, whose equation is $x^2+y^2=1$ (`geo-analytic-circles`: the circle of radius $1$ centred at the
origin). Substituting $x=\cos\theta$ and $y=\sin\theta$ gives
$$\cos^2\theta+\sin^2\theta=1,$$
which holds for every angle $\theta$, since every terminal point lies on that one circle. The signs by
quadrant follow immediately: the coordinate axes split the plane into four quadrants, and the signs of the
coordinates $x=\cos\theta$ and $y=\sin\theta$ are precisely the sign conventions of those quadrants. $\blacksquare$

### Worked Instance

Take $\theta=120^\circ$. Its terminal ray lands in quadrant II, making a reference angle of
$180^\circ-120^\circ=60^\circ$ with the negative $x$-axis. So the coordinates match those at $60^\circ$ in
magnitude, with quadrant-II signs ($x\lt 0$, $y\gt 0$):
$$\cos 120^\circ=-\cos 60^\circ=-\tfrac12,\qquad \sin 120^\circ=+\sin 60^\circ=\tfrac{\sqrt3}{2}.$$
Check: $\left(-\tfrac12\right)^2+\left(\tfrac{\sqrt3}{2}\right)^2=\tfrac14+\tfrac34=1$, on the unit circle.

Two more. For $\theta=150^\circ$ (quadrant II, reference angle $30^\circ$): $\sin 150^\circ=\sin 30^\circ=\tfrac12$.
For $\theta=180^\circ$ the terminal ray points along the negative $x$-axis, meeting the circle at
$(-1,0)$, so $\cos 180^\circ=-1$ and $\sin 180^\circ=0$ — values no acute right triangle could ever have
produced, now perfectly well-defined.

### Pitfalls

- **Get the quadrant signs right.** A positive reference-angle value can turn negative: $\cos 120^\circ$ is
  $-\tfrac12$, not $+\tfrac12$. Always ask which quadrant the terminal ray lands in before fixing the sign.
- **Reference angle is not the angle.** The reference angle is the acute angle to the $x$-axis; it gives the
  *size* of the value, but $\theta$ itself (via its quadrant) gives the *sign*. Reporting $\sin 210^\circ$
  as $+\tfrac12$ forgets that $210^\circ$ sits in quadrant III.
- **The Pythagorean identity is the circle.** $\cos^2\theta+\sin^2\theta=1$ is not a separate fact to
  memorize on top of the unit circle — it *is* the equation $x^2+y^2=1$. If you can picture the circle you
  already hold the identity.
- **Direction and starting line are conventions.** Angles are measured counterclockwise from the positive
  $x$-axis. Measuring clockwise flips the sign of $\sin\theta$; starting from a different axis shifts every
  value.

:::
:::

## Connections

The unit circle sits on `geo-trig-right-triangles` (which it must reproduce for acute angles) and on
`geo-analytic-circles` (whose equation $x^2+y^2=1$ *is* the Pythagorean identity). By defining $\sin$ and
$\cos$ for every angle it removes the "acute only" restriction, which is exactly what
`geo-law-sines-cosines` needs to handle obtuse triangles, where an angle can exceed $90^\circ$. Recognition
trigger: any angle outside the range $0^\circ$ to $90^\circ$, anything periodic or rotating, or a problem
that wants $\cos$ or $\sin$ of a right, obtuse, or reflex angle.

## History

Extending sine and cosine from acute angles to every angle, by placing a point on a circle of radius $1$, is a modern reconceptualization of the ancient ratios. Indian and Islamic astronomers already handled angles beyond the right triangle, but the clean coordinate picture — where $\cos\theta$ and $\sin\theta$ are the coordinates of a point turning around the unit circle — belongs to the analytic geometry of the 17th century and was made central by Leonhard Euler in the 18th. Euler treated the trigonometric functions analytically, linking them to the exponential function and freeing them from any particular triangle. This viewpoint lets the functions accept negative and obtuse angles, full turns, and eventually any real number, which the older chord tables could not naturally express.
