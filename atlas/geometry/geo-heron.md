A triangle with sides $13$, $14$, $15$ has an area that is a whole number: exactly $84$. No angle
was given, no height was measured — only the three side lengths. How can the area be extracted
from the sides alone, with no trigonometry left showing?

## Discovery

Let a triangle have sides $a, b, c$ opposite angles $A, B, C$.

1. From `geo-law-sines-cosines`, the area is $[\triangle] = \tfrac12 bc\sin A$. Square it:
   $[\triangle]^2 = \tfrac14 b^2 c^2 \sin^2 A$. Rewrite $\sin^2 A$ as $1 - \cos^2 A =
   (1-\cos A)(1+\cos A)$.
2. The Law of Cosines gives $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$. Substitute this into both
   $1 - \cos A$ and $1 + \cos A$ from step 1. Put each over the common denominator $2bc$. What are
   the two numerators?
3. Multiply everything out. You should be staring at $[\triangle]^2 = \dfrac{1}{16}\big((b+c)^2 -
   a^2\big)\big(a^2 - (b-c)^2\big)$. Factor each of those two brackets as a difference of squares.
   How many linear factors appear, and what are they?
4. Introduce $s = \tfrac12(a+b+c)$, the semiperimeter. Express each of the four linear factors from
   step 3 in terms of $s$, $a$, $b$, $c$. (For instance, $b + c - a = 2(s - a)$.) What does
   $[\triangle]^2$ become?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a triangle with sides $a, b, c$ and semiperimeter $s = \dfrac{a+b+c}{2}$, the area is
$$[\triangle] = \sqrt{s(s-a)(s-b)(s-c)}.$$
The area depends only on the side lengths. (Attributed to Heron of Alexandria; also spelled
"Hero's formula.")

### Proof

Start from the two facts of `geo-law-sines-cosines`: $[\triangle] = \tfrac12 bc\sin A$ and
$\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$. Square the area:
$$16[\triangle]^2 = 4b^2c^2\sin^2 A = 4b^2c^2(1 - \cos^2 A) = 4b^2c^2(1-\cos A)(1+\cos A).$$
Substitute $\cos A$:
$$1 - \cos A = \frac{2bc - b^2 - c^2 + a^2}{2bc} = \frac{a^2 - (b-c)^2}{2bc}, \qquad
1 + \cos A = \frac{2bc + b^2 + c^2 - a^2}{2bc} = \frac{(b+c)^2 - a^2}{2bc}.$$
Therefore
$$16[\triangle]^2 = 4b^2c^2\cdot \frac{a^2 - (b-c)^2}{2bc}\cdot \frac{(b+c)^2 - a^2}{2bc}
= \big(a^2 - (b-c)^2\big)\big((b+c)^2 - a^2\big).$$
Factor each difference of squares:
$$a^2 - (b-c)^2 = (a - b + c)(a + b - c), \qquad (b+c)^2 - a^2 = (b + c - a)(b + c + a).$$
With $s = \tfrac12(a+b+c)$ we have $a+b+c = 2s$, $-a+b+c = 2(s-a)$, $a-b+c = 2(s-b)$, and
$a+b-c = 2(s-c)$. Hence
$$16[\triangle]^2 = 2(s-b)\cdot 2(s-c)\cdot 2(s-a)\cdot 2s = 16\,s(s-a)(s-b)(s-c),$$
so $[\triangle]^2 = s(s-a)(s-b)(s-c)$. Taking the positive square root (an area is nonnegative)
gives $[\triangle] = \sqrt{s(s-a)(s-b)(s-c)}$. $\blacksquare$

### Worked Instance

For the $13$–$14$–$15$ triangle of the Hook, $s = \tfrac12(13+14+15) = 21$. Then
$$s - a = 21 - 13 = 8, \quad s - b = 21 - 14 = 7, \quad s - c = 21 - 15 = 6,$$
so
$$[\triangle] = \sqrt{21\cdot 8\cdot 7\cdot 6} = \sqrt{7056} = 84.$$
The area is exactly $84$, straight from the three sides.

### Pitfalls

- $s$ is the *semi*perimeter (half the perimeter), not the perimeter. Halving is the step most
  often dropped.
- All four factors $s, s-a, s-b, s-c$ must be positive; if any $s - x \le 0$, the "triangle" is
  degenerate or nonexistent (the triangle inequality has failed). A negative radicand signals bad
  data, not a complex area.
- The formula gives area from sides only — do not reintroduce an angle or altitude midway.
- Compute the product *before* taking the root; rounding each factor's root separately loses
  the clean value.

:::
:::

## Connections

Prereqs: the area formula $\tfrac12 bc\sin A$ and the Law of Cosines (`geo-law-sines-cosines`) —
Heron is essentially those two facts multiplied and factored. It is the tool of choice whenever a
triangle is given by its three sides and you want the area (or, combined with $[\triangle] = rs$
and $[\triangle] = \tfrac{abc}{4R}$, the inradius or circumradius). Recognition trigger: three side
lengths and a request for area, especially when the sides are integers and a clean answer is
expected (Heronian triangles).
