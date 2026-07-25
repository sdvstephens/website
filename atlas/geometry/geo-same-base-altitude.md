Pin down the base of a triangle and let its top vertex glide along a rail parallel to that base.
The triangle stretches, leans, turns from tall-and-narrow to squat-and-slanted — and yet a hidden
quantity never so much as flickers. Which one, and why is it frozen while the shape changes wildly?

## Discovery

Work with the triangle area rule $\tfrac12 bh$ from `geo-area-basics`, where $h$ is the
*perpendicular* distance from the apex to the base line.

1. Draw a fixed base segment $\overline{BC}$ on a horizontal line $\ell$, and a second line $m$
   parallel to $\ell$. Put the apex $A$ anywhere on $m$, forming $\triangle ABC$. As you slide $A$
   along $m$ to a new spot $A'$, does the perpendicular distance from the apex to $\ell$ change?
   What does that say about the height used in the area formula for $\triangle ABC$ versus
   $\triangle A'BC$?
2. From step $1$, compare the areas of $\triangle ABC$ and $\triangle A'BC$ directly through
   $\tfrac12 bh$. What is their relationship?
3. Now keep a *single* apex $A$ but change the base. Put two segments $\overline{BC}$ and
   $\overline{CD}$ end to end on the same line $\ell$, and join both to $A$. The two triangles
   $\triangle ABC$ and $\triangle ACD$ share the apex $A$. What one length serves as the height for
   *both* of them? Using $\tfrac12 bh$ for each, form the ratio of their areas and simplify.
4. Combine the two ideas: two triangles whose bases lie on one line and whose apexes lie on a second
   line parallel to it. If their bases have lengths $b_1$ and $b_2$, what is the ratio of their
   areas — regardless of where along the top line each apex sits?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Same base, equal altitude.** Two triangles that share a base (or have equal bases on the same
line) and whose opposite vertices lie on a line parallel to that base have **equal area**. In
particular, sliding the apex of a triangle along a line parallel to its base leaves the area
unchanged.

**Ratio form.** Two triangles with bases $b_1, b_2$ on the same line and apexes on a common parallel
line (equivalently, sharing an apex with bases on one line) have areas in the ratio of their bases:
$$\frac{[\triangle_1]}{[\triangle_2]} = \frac{b_1}{b_2}.$$
The same statements hold for parallelograms on the same base between the same parallels. (Here
$[\,\cdot\,]$ denotes area.)

### Proof

Both parts read straight off the triangle area formula $[\triangle]=\tfrac12 bh$
(`geo-area-basics`), once we pin down what $b$ and $h$ are.

**Equal area.** Let $\triangle ABC$ and $\triangle A'BC$ share base $\overline{BC}$ of length $b$ on
a line $\ell$, with apexes $A, A'$ both on a line $m \parallel \ell$. The height of each triangle is
the perpendicular distance from its apex to $\ell$. Since $A$ and $A'$ lie on $m$, and $m$ is
everywhere the same perpendicular distance from $\ell$ (that constant gap is exactly what
"parallel" means), both heights equal that gap $h$. Hence
$$[\triangle ABC] = \tfrac12 b h = [\triangle A'BC].$$
Sliding the apex along $m$ only moves $A$ to another point of $m$, so the area is invariant.

**Ratio form.** Let $\triangle_1$ and $\triangle_2$ have bases $b_1, b_2$ on the same line $\ell$ and
apexes on a common parallel line $m$, at perpendicular distance $h$ from $\ell$. Each triangle's
height is that same $h$, so
$$\frac{[\triangle_1]}{[\triangle_2]} = \frac{\tfrac12 b_1 h}{\tfrac12 b_2 h} = \frac{b_1}{b_2},$$
the common factor $\tfrac12 h$ cancelling. The shared-apex phrasing is the special case where the
apex line $m$ is the single point $A$ lifted to a parallel: both triangles $\triangle ABC$,
$\triangle ACD$ take their height as the one perpendicular from $A$ to $\ell$, giving
$[\triangle ABC]/[\triangle ACD] = BC/CD$.

For parallelograms the identical argument uses $[\text{par}] = bh$ instead of $\tfrac12 bh$; the
height is again the constant gap between the two parallels, so equal bases between the same parallels
give equal areas, and unequal bases give the base ratio. $\blacksquare$

### Worked Instance

A **median** of a triangle joins a vertex to the midpoint of the opposite side. Take
$\triangle ABC$ and let $M$ be the midpoint of $\overline{BC}$, so the median $\overline{AM}$ splits
$\triangle ABC$ into $\triangle ABM$ and $\triangle ACM$. These two triangles share the apex $A$, and
their bases $\overline{BM}$ and $\overline{MC}$ lie on the one line $BC$ with $BM = MC$ (midpoint).
By the ratio form,
$$\frac{[\triangle ABM]}{[\triangle ACM]} = \frac{BM}{MC} = 1,$$
so the median cuts the triangle into two pieces of equal area — a fact you now get for free, with no
mention of the median's length. And the Hook's frozen quantity is the area: as the apex glides along
the parallel rail, base and height both stay put in $\tfrac12 bh$, so the area cannot budge even as
the triangle contorts.

### Pitfalls

- **Parallel is what matters, not congruence.** The apexes need only lie on a line parallel to the
  base; the triangles are generally *not* congruent, only equal in area.
- **Equal area is not equal shape.** A short-wide and a tall-thin triangle over the same base between
  the same parallels have the same area and very different side lengths and angles.
- **Bases must be on the *same* line for the ratio form.** The clean ratio $b_1/b_2$ needs a shared
  height; that requires the bases collinear and the apexes on one parallel (or a shared apex).
- **Height is perpendicular distance to the base line.** Even when the apex slides far sideways, use
  the perpendicular gap between the parallels, not a slanted segment.

:::
:::

## Connections

This theorem is `geo-area-basics` pushed one step: because area is $\tfrac12 bh$, freezing $b$ and
$h$ freezes the area even as the shape shears. Its ratio form — "same height, so areas scale like
the bases" — is a workhorse. It powers `geo-medians-centroid` (medians bisect area, and the centroid
splits the triangle into equal-area pieces) and underlies the area proof of the Basic Proportionality
Theorem behind similar triangles. Recognition trigger: a figure with a line parallel to a base, a
vertex free to slide, triangles sharing a base or an apex, or a request to compare two areas by their
bases — reach for "same height, so the areas are in the ratio of the bases."

## History

The principle that figures on the same base and between the same parallels have equal area is captured in Euclid's *Elements* I.35–I.38 (c. 300 BC), a cluster of propositions that lets a slanted parallelogram be sheared into an upright one without changing its area. The deeper engine behind such area comparisons is the method of exhaustion developed by Eudoxus of Cnidus in the fourth century BC and deployed brilliantly by Archimedes. The same shearing idea resurfaced in the seventeenth century as Bonaventura Cavalieri's principle of indivisibles, which compares regions by their cross-sections and was a crucial stepping-stone toward the integral calculus. Thus a modest fact about triangles sliding along a base sits on a direct historical line from Euclid to Newton and Leibniz. It is the geometric heart of why area depends only on base and height, not on how a figure leans.
