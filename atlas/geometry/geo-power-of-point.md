Pick any point $P$ and any circle. Draw a line through $P$ that cuts the circle at two points, and
multiply the two distances from $P$ to those points. Now draw a *completely different* line through
$P$ that also cuts the circle, and multiply again. You get the same number. Rotate the line however
you like — the product never budges. What quantity of the pair $(P, \text{circle})$ is this frozen
product measuring?

## Discovery

Fix a point $P$ and a circle of radius $R$ centered at $O$. Let a line through $P$ meet the circle at
$X$ and $Y$.

1. First take a special line: the one through $P$ and the center $O$. It meets the circle at the two
   ends of a diameter. Let $d = OP$. Write the two distances $PX$ and $PY$ along this line in terms of
   $d$ and $R$, treating $P$ outside the circle ($d \gt R$) first. What is the product $PX\cdot PY$?
2. Now suppose $P$ is *inside* the circle ($d \lt R$). Along the diameter through $P$, what are the two
   distances, and what is their product now? Compare its form to step 1. If you allow *signed*
   lengths (positive one way, negative the other along the line), can you write both cases with one
   formula?
3. Take a *general* chord through $P$, meeting the circle at $X$ and $Y$, not through the center. Draw
   the two chords $XX'$... instead, use the inscribed angle theorem: for a second chord through $P$
   meeting the circle at $Z, W$, find a pair of equal angles among $\angle PXW$, $\angle PZY$ (angles
   subtending the same arc). Which two triangles among $PXW$, $PZY$ share two equal angles?
4. From the similar triangles in step 3, write the proportion of corresponding sides, and cross-multiply.
   What equality between products of distances falls out — and does it match the constant from steps
   1–2?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $P$ be a point and $\omega$ a circle of radius $R$ centered at $O$, with $d = OP$. Define the
**power of $P$ with respect to $\omega$** as
$$\operatorname{pow}(P) = d^2 - R^2.$$
For *any* line through $P$ meeting $\omega$ at points $X$ and $Y$, the signed product of directed
lengths satisfies
$$\overline{PX}\cdot\overline{PY} = d^2 - R^2,$$
a constant independent of the line. Consequences:

- **$P$ outside ($d \gt R$):** for two secants through $P$, $PX\cdot PY = PZ\cdot PW$; and if one line
  is tangent at $T$, then $PT^2 = PX\cdot PY$ (secant–tangent).
- **$P$ inside ($d \lt R$):** for two chords crossing at $P$, $PX\cdot PY = PZ\cdot PW$ (intersecting
  chords). Here the power is negative; the unsigned products are equal.

### Proof

Let the line through $P$ meet $\omega$ at $X$ and $Y$. Let $M$ be the midpoint of chord $XY$; since
$OM \perp XY$, triangle $OMP$ (or $OMX$) is right-angled at $M$.

**Signed-length computation.** Introduce signed lengths along the line with $P$ as origin, so
$\overline{PX}$ and $\overline{PY}$ carry signs according to direction. Let $M$ be the chord midpoint;
then $\overline{PX} = \overline{PM} - MX$ and $\overline{PY} = \overline{PM} + MX$ (with $MX = MY$ the
half-chord). Hence
$$\overline{PX}\cdot\overline{PY} = \overline{PM}^2 - MX^2.$$
By the Pythagorean theorem in right triangle $OMX$, $MX^2 = R^2 - OM^2$. By the Pythagorean theorem in
right triangle $OMP$, $\overline{PM}^2 = OP^2 - OM^2 = d^2 - OM^2$. Subtract:
$$\overline{PX}\cdot\overline{PY} = (d^2 - OM^2) - (R^2 - OM^2) = d^2 - R^2.$$
The term $OM^2$ cancels, so the product is $d^2 - R^2$, independent of the chosen line. $\blacksquare$

*Alternative (similar triangles).* For two chords through $P$ meeting $\omega$ at $X, Y$ and $Z, W$,
the inscribed-angle theorem gives $\angle YXW = \angle YZW$ (subtending arc $YW$) and the angle at $P$
is common (or vertical), so $\triangle PXW \sim \triangle PZY$; then $\tfrac{PX}{PZ} = \tfrac{PW}{PY}$,
i.e. $PX\cdot PY = PZ\cdot PW$. The tangent case is the limit $Z \to W = T$, giving $PT^2 = PX\cdot
PY$.

### Worked Instance

A point $P$ lies outside a circle. A secant from $P$ enters the circle at $X$ and exits at $Y$, with
$PX = 3$ and $XY = 5$, so $PY = 3 + 5 = 8$. A tangent from $P$ touches the circle at $T$. Find $PT$.

By the secant–tangent case, $PT^2 = PX\cdot PY = 3\cdot 8 = 24$, so $PT = 2\sqrt{6}$.

Now resolve the Hook's invariance: a second secant from the same $P$ cuts the circle at $Z$ and $W$
with $PZ = 4$. Then $PZ\cdot PW = 24$ forces $PW = 6$, so the far intersection sits $6$ from $P$ no
matter that the line is different — the product $24 = \operatorname{pow}(P)$ is the frozen quantity,
equal to $d^2 - R^2$ for this $P$ and circle.

### Pitfalls

- **Sign of the power tells you inside vs. outside.** $\operatorname{pow}(P) = d^2 - R^2$ is positive
  outside, zero on the circle, negative inside. The *unsigned* product of lengths equals
  $|d^2 - R^2|$; keep track of which case you are in.
- In the secant–tangent relation it is $PT^2$ (tangent length squared) $= PX\cdot PY$ — do not use $PT$
  unsquared.
- $PX\cdot PY$ multiplies the distances to *both* intersection points, i.e. $PX\cdot PY$ where
  $PY = PX + XY$ for a secant, not $PX\cdot XY$. Using the chord length instead of the far distance is
  the classic slip.
- For the intersecting-chords case the point is *inside*; matching it against the *outside* secant
  picture (or vice versa) mismatches which segments to multiply.

:::
:::

## Connections

Prereqs: the Law of Cosines / Pythagorean relations (`geo-law-sines-cosines`) drive the clean
midpoint proof, and similar triangles (`geo-similar-triangles`) give the alternative. Power of a point
is the unifying statement behind the "intersecting chords," "two secants," and "secant–tangent"
theorems — one invariant $d^2 - R^2$ instead of three memorized rules. It underlies the radical axis,
inversive geometry, and many Olympiad circle problems. Recognition trigger: a point outside or inside
a circle with lines cutting the circle, tangent lengths, or a product of two segment lengths you are
asked to show is constant or equal to another such product.
