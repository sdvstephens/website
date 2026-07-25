Draw a right triangle whose legs are exactly $3$ and $4$ units. Measure the slanted side — the one
across from the right angle. It comes out to $5$, dead on, every time. Try legs $6$ and $8$: the slant
is $10$. Legs $5$ and $12$: the slant is $13$. The two short sides seem to *dictate* the long one
through some fixed arithmetic. What is the rule, and why can the legs never fail to pin down the
hypotenuse?

## Discovery

Let a right triangle have legs $a$ and $b$ and hypotenuse $c$ (the side opposite the right angle).

1. Take **four identical copies** of this triangle and pack them into the corners of a big square
   whose side is $a+b$, each triangle turned so its legs run along the big square's edges and its
   hypotenuse faces inward. The four hypotenuses fence off a tilted quadrilateral in the middle.
   Using the fact that the two acute angles of a right triangle add to $90^\circ$, work out each
   interior angle of that middle quadrilateral, and the length of each of its sides. What kind of
   figure is it?
2. Now find the area of the big $(a+b)$-by-$(a+b)$ square **two different ways**: first as one whole
   square, and then as the sum of its parts — the four triangles plus the middle figure from step $1$.
   Write down both expressions. Do not simplify yet.
3. The two areas in step $2$ count the same region, so set them equal and expand. Cancel whatever
   appears on both sides. What single equation relating $a$, $b$, and $c$ survives?
4. Here is a second road to the same place. In the original triangle, drop a perpendicular from the
   right-angle vertex straight to the hypotenuse, splitting it into two pieces $p$ and $q$ with
   $p+q=c$. Each of the two small triangles you created shares an angle with the original. Identify
   which small triangle is similar to the whole, and write the proportion it gives you. From those
   proportions express $a^2$ and $b^2$ in terms of $c$, $p$, $q$, then add them. What do you get?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The Pythagorean Theorem.** In a right triangle with legs $a$ and $b$ and hypotenuse $c$,
$$a^2 + b^2 = c^2 .$$
The square built on the hypotenuse has exactly the combined area of the squares built on the two legs.
Consequently $c=\sqrt{a^2+b^2}$, and each leg is recovered by $a=\sqrt{c^2-b^2}$.

**The converse holds too.** If a triangle has sides $a$, $b$, $c$ with $a^2+b^2=c^2$, then the angle
opposite $c$ is a right angle — the triangle is right. So $a^2+b^2=c^2$ is not merely a consequence of
a right angle; it is *equivalent* to one.

### Proof

**Proof 1 (area rearrangement).** Arrange four copies of the right triangle inside a square of side
$a+b$ as in the Discovery, each leg along an edge. At every corner of the big square, one leg of length
$a$ meets one leg of length $b$, so the four hypotenuses bound a middle quadrilateral of side $c$. At
each vertex of that middle quadrilateral, the straight edge of the big square is split into the two
acute angles of a triangle, which sum to $90^\circ$; the remaining angle is $180^\circ-90^\circ =
90^\circ$. All four sides equal $c$ and all four angles are right, so the middle figure is a square of
area $c^2$.

Count the big square's area two ways. Directly it is $(a+b)^2 = a^2 + 2ab + b^2$. As parts it is the
four triangles, each of area $\tfrac12 ab$, plus the inner square:
$$4\cdot\tfrac12 ab + c^2 = 2ab + c^2 .$$
The region is the same, so $a^2 + 2ab + b^2 = 2ab + c^2$. Subtracting $2ab$ from both sides,
$$a^2 + b^2 = c^2 .$$

**Proof 2 (similarity).** In right triangle $\triangle ABC$ with the right angle at $C$, let the legs be
$a=BC$ and $b=CA$ and the hypotenuse $c=AB$. Drop the altitude from $C$, meeting $AB$ at $H$, and set
$p=HB$, $q=AH$, so $p+q=c$.

Triangles $\triangle CBH$ and $\triangle ABC$ are both right-angled ($\angle CHB = \angle BCA = 90^\circ$)
and share $\angle B$, so by AA they are similar; matching hypotenuse-to-shorter-leg,
$\dfrac{BC}{AB}=\dfrac{HB}{BC}$, hence $a^2 = c\cdot p$. Likewise $\triangle ACH$ and $\triangle ABC$
share $\angle A$ and a right angle, so $\dfrac{CA}{AB}=\dfrac{AH}{CA}$, giving $b^2 = c\cdot q$. Adding,
$$a^2 + b^2 = c\,p + c\,q = c(p+q) = c\cdot c = c^2 .$$

**The converse.** Suppose a triangle $\triangle ABC$ has sides $a$, $b$, $c$ with $a^2+b^2=c^2$. Build a
*separate* right triangle $\triangle A'B'C'$ with a right angle at $C'$ and legs $a$ and $b$. By the
forward theorem its hypotenuse $h$ satisfies $h^2 = a^2+b^2 = c^2$, and since lengths are nonnegative,
$h=\sqrt{c^2}=c$. Now $\triangle ABC$ and $\triangle A'B'C'$ have all three pairs of sides equal, so by
SSS they are congruent. Congruent triangles have equal corresponding angles, so the angle of
$\triangle ABC$ opposite $c$ equals the right angle of $\triangle A'B'C'$. Hence $\triangle ABC$ is
right. $\blacksquare$

### Worked Instance

Legs $3$ and $4$: $c = \sqrt{3^2+4^2} = \sqrt{9+16} = \sqrt{25} = 5$ — the Hook's $3$-$4$-$5$ triangle,
now forced rather than measured. Legs $5$ and $12$: $c=\sqrt{25+144}=\sqrt{169}=13$.

Not every hypotenuse is a whole number. Legs $2$ and $3$ give $c=\sqrt{2^2+3^2}=\sqrt{13}=3.60555\ldots$,
a genuine length that lands between $3$ and $4$ (since $3^2=9\lt 13\lt 16=4^2$). Running the theorem
backward finds a leg: if the hypotenuse is $10$ and one leg is $6$, the other is
$\sqrt{10^2-6^2}=\sqrt{100-36}=\sqrt{64}=8$.

Converse check: is the triangle with sides $9$, $40$, $41$ right? Test the longest side as candidate
hypotenuse: $9^2+40^2 = 81+1600 = 1681 = 41^2$. Yes — so the angle opposite the side $41$ is exactly
$90^\circ$.

### Pitfalls

- **The hypotenuse must be isolated.** $a^2+b^2=c^2$ holds only when $c$ is the side *opposite the right
  angle*. In $\sqrt{c^2-b^2}$ you subtract a leg from the hypotenuse, never two legs from each other.
- **The square root does not distribute over addition.** $c=\sqrt{a^2+b^2}$, not $a+b$. For legs $3,4$
  that is $\sqrt{25}=5$, whereas $3+4=7$; the straight path beats the two legs, as it must.
- **Check the *largest* side for the converse.** To test whether $a^2+b^2=c^2$, $c$ has to be the
  longest side; comparing the wrong pair will falsely reject a right triangle.
- **Right angle only.** The plain relation $a^2+b^2=c^2$ is exclusive to right triangles. For other
  triangles the correct statement carries an extra term (the Law of Cosines); do not force the bare
  form onto a non-right triangle.

:::
:::

## Connections

This rests on two prereqs at once: counting area two ways (`geo-area-basics`) drives the rearrangement
proof, while the scale-factor logic of `geo-similarity-def` drives the altitude proof, and
`ari-square-root` turns the squared relation into an actual length. From here the theorem branches
widely: the fixed ratios of the `geo-special-right-triangles` ($45$-$45$-$90$ and $30$-$60$-$90$) are
just Pythagoras applied to symmetric triangles; whole-number solutions are the `geo-pythagorean-triples`;
the same altitude-splitting reappears in `geo-heron-elem` to extract a triangle's area from its sides,
and again in `geo-altitudes-orthocenter`; and the inequality relatives feed `geo-triangle-inequality`.
Recognition trigger: a right angle plus two known sides and a third unknown, "find the distance between
two points," or any request to test whether an angle is exactly $90^\circ$.

## History

The Pythagorean theorem is among the oldest and most-proved results in mathematics. The Babylonian tablet Plimpton 322 (c. 1800 BC) already lists Pythagorean triples, a millennium before Pythagoras (c. 570–495 BC), to whom Greek tradition credits the first proof; the Indian Baudhāyana Śulba Sūtra and the Chinese Zhoubi Suanjing state it independently. Euclid proved it as *Elements* I.47. Hundreds of distinct proofs are known — including one by U.S. President James Garfield in 1876.
