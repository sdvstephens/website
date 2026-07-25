A triangle with sides $13$, $14$, $15$ has area exactly $84$ — a clean whole number. Nobody handed you a
height or an angle, only the three edge lengths, yet the area came out pinned to a single value. Three
sticks of fixed lengths can be joined into only one triangle (up to flipping), so its area *must* be
determined by those three numbers alone. What is the formula that reads the area straight off the sides?

## Discovery

Let a triangle have sides $a$, $b$, $c$. Aim: get its area from $a,b,c$ with no angle in hand.

1. To use the area rule $\tfrac12(\text{base})(\text{height})$ you need a height. Drop the altitude of
   length $h$ from the vertex opposite side $a$ down onto side $a$, meeting it at a foot that splits $a$
   into two pieces $p$ and $q$ with $p+q=a$. The two sub-triangles created are right triangles. Write the
   Pythagorean relation for each one — one involves the side $c$, the other the side $b$ — each linking
   $h$ to $p$ or $q$.
2. You now have two equations sharing the unknown $h$. Subtract one from the other to eliminate $h^2$
   entirely. Factor the resulting difference of squares $p^2-q^2$. Combined with $p+q=a$, solve for the
   single unknown $p$ (the foot's position) in terms of $a,b,c$.
3. With $p$ known, go back and solve for $h^2$ from one of the step-$1$ equations. Then the area is
   $\tfrac12 a h$, so the *squared* area is $\tfrac14 a^2 h^2$. Write $\text{(area)}^2$ purely in terms
   of $a,b,c$ (still unsimplified is fine).
4. The expression in step $3$ is begging to be factored. Repeatedly use the difference-of-squares pattern
   $X^2-Y^2=(X-Y)(X+Y)$ to break it into a product of four linear factors in $a,b,c$. Then set
   $s=\tfrac{a+b+c}{2}$ and rewrite each factor in terms of $s$. What clean product emerges?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Heron's Formula.** A triangle with side lengths $a$, $b$, $c$ and **semiperimeter**
$$s = \frac{a+b+c}{2}$$
has area
$$\text{Area} = \sqrt{\,s(s-a)(s-b)(s-c)\,}.$$
The area depends only on the three sides — no angle, no separately measured height. Each factor $s-a$,
$s-b$, $s-c$ is positive precisely because each side is shorter than the sum of the other two (the
triangle inequality), so the quantity under the root is positive for any genuine triangle.

### Proof

Let the triangle have sides $a,b,c$. Drop the altitude $h$ from the vertex opposite side $a$ to the line
of side $a$, and let the foot divide $a$ into $p$ (adjacent to side $c$) and $q$ (adjacent to side $b$),
with $p+q=a$. The two right sub-triangles give, by the Pythagorean Theorem,
$$c^2 = h^2 + p^2, \qquad b^2 = h^2 + q^2 .$$

Subtract the second from the first to eliminate $h^2$:
$$c^2 - b^2 = p^2 - q^2 = (p+q)(p-q) = a(p-q),$$
so $p-q = \dfrac{c^2-b^2}{a}$. Together with $p+q=a$, adding the two equations gives $2p = a +
\dfrac{c^2-b^2}{a}$, hence
$$p = \frac{a^2 + c^2 - b^2}{2a}, \qquad\text{so}\qquad ap = \frac{a^2+c^2-b^2}{2}.$$

Now $h^2 = c^2 - p^2$, and the area is $\tfrac12 a h$, so
$$\text{Area}^2 = \frac14 a^2 h^2 = \frac14 a^2(c^2 - p^2) = \frac14\left[(ac)^2 - (ap)^2\right],$$
using $a^2 c^2 = (ac)^2$ and $a^2 p^2 = (ap)^2$. Substitute $ap = \tfrac{a^2+c^2-b^2}{2}$ and factor the
difference of squares:
$$(ac)^2 - (ap)^2 = \left(ac - \tfrac{a^2+c^2-b^2}{2}\right)\left(ac + \tfrac{a^2+c^2-b^2}{2}\right)
= \frac{\bigl(2ac - a^2 - c^2 + b^2\bigr)}{2}\cdot\frac{\bigl(2ac + a^2 + c^2 - b^2\bigr)}{2}.$$
Inside the first factor $2ac - a^2 - c^2 = -(a-c)^2$, so it is $b^2 - (a-c)^2$; inside the second,
$a^2 + 2ac + c^2 = (a+c)^2$, so it is $(a+c)^2 - b^2$. Each is again a difference of squares:
$$b^2-(a-c)^2 = (b-a+c)(b+a-c), \qquad (a+c)^2 - b^2 = (a+c-b)(a+c+b).$$
Therefore
$$\text{Area}^2 = \frac14\cdot\frac14\,(a+b+c)(-a+b+c)(a-b+c)(a+b-c)
= \frac{1}{16}(a+b+c)(-a+b+c)(a-b+c)(a+b-c).$$
Finally set $s=\tfrac{a+b+c}{2}$. Then $a+b+c = 2s$, $-a+b+c = 2(s-a)$, $a-b+c = 2(s-b)$, and
$a+b-c = 2(s-c)$, so the four factors multiply to $16\,s(s-a)(s-b)(s-c)$, and
$$\text{Area}^2 = \frac{1}{16}\cdot 16\,s(s-a)(s-b)(s-c) = s(s-a)(s-b)(s-c).$$
Taking the nonnegative square root, $\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$. $\blacksquare$

*(The algebra survives an obtuse triangle: there the foot falls outside side $a$, making one of $p,q$
larger than $a$, but the equations $c^2=h^2+p^2$, $b^2=h^2+q^2$ with signed $p,q$ still hold and the same
identity results.)*

### Worked Instance

The Hook's $13$-$14$-$15$ triangle. Take $a=14$, $b=13$, $c=15$. The semiperimeter is
$$s = \frac{13+14+15}{2} = \frac{42}{2} = 21 .$$
Then $s-a = 21-14 = 7$, $s-b = 21-13 = 8$, $s-c = 21-15 = 6$, so
$$\text{Area} = \sqrt{21\cdot 7\cdot 8\cdot 6} = \sqrt{7056} = 84 .$$
Exactly $84$, from the three sides alone. As a sanity check by altitude: with base $a=14$,
$p = \tfrac{a^2+c^2-b^2}{2a} = \tfrac{196+225-169}{28} = \tfrac{252}{28} = 9$, so
$h = \sqrt{c^2-p^2} = \sqrt{225-81} = \sqrt{144} = 12$, and $\tfrac12\cdot 14\cdot 12 = 84$ — agreeing.

### Pitfalls

- **The semiperimeter is *half* the perimeter.** $s=\tfrac{a+b+c}{2}$, not $a+b+c$. Forgetting the factor
  of $\tfrac12$ throws off all four terms and quadruples-and-worse the answer.
- **Square-root the whole product once, at the end.** The area is $\sqrt{s(s-a)(s-b)(s-c)}$, a single
  root over the product — not a sum or product of separate roots of the factors.
- **A negative under the root means no triangle.** If some $s-a\le 0$, the "sides" violate the triangle
  inequality and cannot form a triangle; a real area requires all three factors positive.
- **Match $s-a$ to the side you subtract, consistently.** The labels can be assigned in any order, but $a$
  in $s-a$ must be the same length you used in $s$; mixing a relabeled side into one factor corrupts the
  product.

:::
:::

## Connections

Heron's formula is `geo-pythagorean-theorem` applied twice — once to each right sub-triangle carved out by
an altitude — fused with the area rule $\tfrac12(\text{base})(\text{height})$ from `geo-area-basics`; the
"count/compute two ways then equate" and the difference-of-squares factoring are its whole engine. It lets
you find area with no angle and no drawn height, which is exactly what makes it a workhorse in
competition geometry (often paired with the circumradius or inradius formulas). Recognition trigger: all
three sides of a triangle are known and the area is wanted, especially when no height or angle is given
and the sides look chosen to make $s(s-a)(s-b)(s-c)$ a perfect square.

## History

The formula giving a triangle's area from its three sides alone is named for Heron of Alexandria, the first-century AD engineer and inventor whose *Metrica* contains the earliest surviving proof, worked through on a triangle with sides $13$, $14$, $15$. Historians suspect the result was known earlier to Archimedes in the third century BC, since Arab commentators such as al-Biruni attribute an equivalent statement to him, but no text of his survives to confirm it. Heron's proof is a marvel of classical ingenuity, using the incircle and a chain of cyclic-quadrilateral arguments rather than any trigonometry. What makes the formula remarkable is that it needs no angle and no altitude — three lengths suffice to pin down the area, matching the rigidity already guaranteed by SSS congruence. It remains a favorite example of how much can be squeezed from purely elementary data.
