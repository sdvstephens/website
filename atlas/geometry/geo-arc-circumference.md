Wrap a string snugly around a soup can and mark where it meets itself; then lay the string flat and
measure it. Do the same for a dinner plate, a coin, a bicycle wheel. Now, for each one, divide that
wrapped length by the distance straight across the object. The soup can, the coin, the wheel — wildly
different sizes — all hand back the *same* number, a hair past $3$. Why would rolling around the edge
always be that one fixed multiple of the width, no matter how big the circle?

## Discovery

A **circle** is all the points in a plane at one fixed distance $r$ (the **radius**) from a center
point. A **chord** joins two points of the circle; the longest chord passes through the center and is
a **diameter** $d$, made of two radii laid end to end. An **arc** is a piece of the circle between two
of its points, and the **central angle** of an arc is the angle it makes at the center.

1. Take three circles of different sizes. For each, wrap a string once around (that wrapped length is
   the **circumference** $C$) and separately measure the diameter $d$ straight across. Record the
   ratio $C/d$ for each circle. Do the three ratios come out equal, close to equal, or unrelated?
2. You found one repeating number. It is not $3$, and it is not $3.2$; measured carefully it begins
   $3.14159\ldots$ and never settles into a repeating block. Give this constant a permanent name — the
   Greek letter reserved for it — and write $C/d$ in terms of that letter.
3. A diameter is two radii ($d = 2r$). Rewrite the circumference from step 2 first using $d$, then
   using $r$ instead. Two forms, same length.
4. Now zoom in on just part of the rim. A full trip around the circle is a central angle of
   $360^\circ$. An **arc** cut off by a central angle of $\theta^\circ$ is the fraction $\theta/360$
   of the whole trip. Write the length of that arc as that fraction of the circumference from step 3.
5. Test the fraction on a case you can picture: a central angle of $90^\circ$ carves off what portion
   of the circle, and so what portion of the circumference? What about $180^\circ$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For **every** circle the ratio of circumference to diameter is one and the same constant, written
$\pi = 3.14159\ldots$ (an irrational number). Hence the circumference is
$$C = \pi d = 2\pi r.$$
The distance $\pi$ is *defined* to be this universal ratio $C/d$; it does not depend on which circle
you pick.

An **arc** with central angle $\theta^\circ$ is the fraction $\dfrac{\theta}{360}$ of the full circle,
so its **arc length** is
$$\text{arc length} = \frac{\theta}{360}\cdot 2\pi r.$$
A full circle ($\theta = 360^\circ$) returns the whole circumference; a semicircle ($\theta = 180^\circ$)
gives half of it.

### Proof

The claim with content is that $C/d$ is the *same* for all circles; once that is granted, calling the
common value $\pi$ and reading off $C = \pi d = 2\pi r$ is just naming and substitution, and the arc
formula is proportionality.

**All circles are similar.** Fix any circle of radius $R$ centered at a point $O$. Compare it with the
**unit circle** of radius $1$ centered at $O$. The map that sends each point $P$ to the point $P'$ on
ray $\overrightarrow{OP}$ with $OP' = R\cdot OP$ is a scaling (dilation) centered at $O$ with factor
$R$: it multiplies *every* distance between points by $R$. It carries the unit circle exactly onto the
radius-$R$ circle, because a point at distance $1$ from $O$ moves to distance $R$ from $O$. So the
radius-$R$ circle is a scaled copy of the unit circle with scale factor $R$.

**Perimeter scales by the same factor as radius.** A scaling by factor $R$ multiplies every length by
$R$. The circumference is a length built along the circle — approximate it as closely as you like by
an inscribed many-sided polygon, whose perimeter is a sum of chord lengths; scaling multiplies each
chord by $R$, hence multiplies the whole polygon's perimeter by $R$, and in the limit multiplies the
circumference by $R$. Writing $C_1$ for the unit circle's circumference and $d_1 = 2$ for its diameter,
the radius-$R$ circle has circumference $C = R\cdot C_1$ and diameter $d = R\cdot d_1 = 2R$. Therefore
$$\frac{C}{d} = \frac{R\,C_1}{R\,d_1} = \frac{C_1}{d_1},$$
the factor $R$ cancels, and the ratio is the *same number* for every circle. Define that number to be
$\pi$. Then $C/d = \pi$ gives $C = \pi d$, and $d = 2r$ gives $C = 2\pi r$.

**Arc length.** Arc length depends only on the central angle in the sense that equal central angles at
the same center cut off equal arcs (rotating the circle about its center by the angle between them maps
one arc onto the other, preserving length), and arcs add: adjoining a $\theta_1$-arc and a
$\theta_2$-arc end to end yields a $(\theta_1+\theta_2)$-arc whose length is the sum. A quantity that
adds when angles add and gives $0$ at angle $0$ is proportional to the angle, so arc length
$= k\theta$ for a constant $k$. Setting $\theta = 360^\circ$ must return the full circumference
$2\pi r$, forcing $k = \dfrac{2\pi r}{360}$. Hence a $\theta^\circ$ arc has length
$\dfrac{\theta}{360}\cdot 2\pi r$. $\blacksquare$

### Worked Instance

Take a circle of radius $7$. Its diameter is $d = 2\cdot 7 = 14$, so
$$C = \pi d = 14\pi = 2\pi\cdot 7 = 14\pi \approx 43.98.$$
Now a $90^\circ$ arc of this circle. Since $90^\circ$ is $\tfrac{90}{360} = \tfrac14$ of a full turn,
the arc is a quarter of the circumference:
$$\frac{90}{360}\cdot 2\pi\cdot 7 = \frac14\cdot 14\pi = \frac{14\pi}{4} = \frac{7\pi}{2}\approx 10.996.$$
Resolving the Hook: the soup can, coin, and wheel each returned $C/d \approx 3.14159$ because that
ratio is the fixed constant $\pi$ for *all* circles — the wrapping length is always $\pi$ times the
width.

### Pitfalls

- **Circumference $2\pi r$ vs. area $\pi r^2$.** The distance around is $2\pi r$ (a length, one factor
  of $r$); the space inside is $\pi r^2$ (an area, two factors of $r$). Grabbing the wrong one is the
  single most common circle error.
- **Radius vs. diameter.** $C = 2\pi r = \pi d$. If a problem gives the diameter, do *not* also double
  it: for $d = 14$, $C = 14\pi$, not $28\pi$. Halve to a radius or use $\pi d$ directly, never both.
- **The $\theta/360$ fraction.** An arc is $\dfrac{\theta}{360}$ of the circle, not $\dfrac{\theta}{180}$
  or $\dfrac{\theta}{2\pi}$. A full circle is $360^\circ$; check that $\theta = 360^\circ$ returns the
  whole circumference.
- **Keep $\pi$ symbolic unless asked.** $14\pi$ is exact; $43.98$ is rounded. Do not replace $\pi$ by
  $3.14$ mid-calculation and then treat the result as exact.

:::
:::

## Connections

This node turns a circle from a shape you can see into lengths you can compute, resting only on the
idea of a fixed distance from a center (`geo-points-lines-planes`) and on ratio (`ari-ratio`), whose
constancy is the entire discovery — the number $\pi$. The similar-circles argument here is the same
scaling logic that governs `geo-similarity-def`. Directly downstream, cutting the disk into thin
sectors converts this perimeter into the area $\pi r^2$ (`geo-circle-area`), and wrapping a circle
through space builds the lateral surfaces of `geo-cylinders-cones`. Recognition trigger: anything
"around" a round object — a rolling wheel, a running track's curved ends, a fraction of a pie's
crust — is circumference or arc length, so reach for $2\pi r$ and the $\theta/360$ slice.

## History

The constant $\pi$ has been chased since antiquity: Babylonian and Egyptian scribes used approximations like $3$ and $\tfrac{256}{81}$ around 1800 BCE. The decisive advance was made by Archimedes of Syracuse (c. 250 BCE), whose *Measurement of a Circle* trapped the circumference between inscribed and circumscribed regular polygons, proving $3\tfrac{10}{71}<\pi<3\tfrac17$ and confirming that circumference is proportional to diameter. His motivation was to make an unruly curved length computable by straight-edged bounds — the first rigorous grip on $\pi$. Arc length as a fraction of the full circle is a natural corollary once central angles are measured, formalized by later Greek and Islamic geometers. The symbol $\pi$ itself is far younger, adopted in the early 18th century and popularized by Leonhard Euler.
