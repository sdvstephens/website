To square $103$ in your head you might reach for $100^2 = 10000$ and $3^2 = 9$, and guess
$10009$. The real answer is $10609$ — there is an extra $600$ sitting in the middle that came
from nowhere obvious. Square $52$ the same lazy way and you undershoot by exactly $200$; square
$61$ and you miss by $120$. Where do these surplus chunks come from, and can you predict them?

## Discovery

1. Compute $103^2$ exactly (long multiplication is fine). Separately compute $100^2 + 3^2$.
   Subtract the second from the first and record the leftover.
2. Do the same bookkeeping for two more: $52^2$ against $50^2 + 2^2$, and $61^2$ against
   $60^2 + 1^2$. Write down each leftover next to the two parts (here $(100,3)$, $(50,2)$,
   $(60,1)$) that produced it.
3. Stare at your three (parts, leftover) rows. Find a single arithmetic recipe that turns the two
   parts into the leftover — one that reproduces all three lines at once. Do not settle until your
   recipe is exact, not approximate.
4. Now build the picture behind the recipe. Draw a square whose side is $a+b$. Make one horizontal
   cut and one vertical cut, each at distance $a$ from a corner, splitting the big square into four
   rectangles. Label the area of every piece in terms of $a$ and $b$, then write the total area two
   ways: as the side squared, and as the sum of the four pieces.
5. Repeat step 4's dissection reasoning for a *shrink* instead of a stretch: start from a square of
   side $a$ and remove an $L$-shaped border to leave a square of side $a-b$. Express the leftover
   area $(a-b)^2$ by subtracting the border pieces from $a^2$, and see which sign the cross piece
   carries.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Square of a binomial.** For all numbers $a, b$,
$$(a+b)^2 = a^2 + 2ab + b^2, \qquad (a-b)^2 = a^2 - 2ab + b^2.$$
The expansion is never just "square each term": a **cross term** (or **middle term**) $\pm 2ab$
always appears, positive when the binomial is a sum and negative when it is a difference, while the
two squared terms $a^2$ and $b^2$ stay positive in both. A trinomial of the shape
$a^2 \pm 2ab + b^2$ is called a **perfect-square trinomial** precisely because it is one of these.

### Proof

Both identities follow from the distributive law alone; the area picture is the same statement read
off a dissected square.

Write the square as a product and distribute twice. Using $x^2 = x\cdot x$ and then distributing
$(a+b)$ over the sum, and distributing again:
$$(a+b)^2 = (a+b)(a+b) = a(a+b) + b(a+b) = (a^2 + ab) + (ba + b^2).$$
By commutativity of multiplication $ba = ab$, so the two copies of $ab$ combine:
$$(a+b)^2 = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2.$$

For the difference, the cleanest route is to reuse the sum identity with $-b$ in place of $b$.
Since $(-b)^2 = b^2$ and $2a(-b) = -2ab$,
$$(a-b)^2 = \big(a + (-b)\big)^2 = a^2 + 2a(-b) + (-b)^2 = a^2 - 2ab + b^2.$$
(Directly: $(a-b)(a-b) = a(a-b) - b(a-b) = (a^2 - ab) - (ba - b^2) = a^2 - 2ab + b^2$, where the
final $-(-b^2) = +b^2$ is the one sign that must be tracked carefully.)

Geometrically, a square of side $a+b$ dissected at distance $a$ splits into an $a\times a$ square
($a^2$), a $b\times b$ square ($b^2$), and two congruent $a\times b$ rectangles ($ab$ each). The
whole equals the sum of its non-overlapping parts, so $(a+b)^2 = a^2 + 2ab + b^2$ — the two
rectangles *are* the middle term. $\blacksquare$

### Worked Instance

Back to the Hook. Write $103 = 100 + 3$, so with $a = 100$, $b = 3$,
$$103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10000 + 600 + 9 = 10609.$$
The mysterious surplus $600$ is exactly the cross term $2ab = 2(100)(3)$ — the two $100\times 3$
rectangles flanking the corner square. The other predictions fall out the same way: $52^2 =
50^2 + 2(50)(2) + 2^2 = 2500 + 200 + 4 = 2704$ (the leftover $200$ is $2ab$), and $61^2 =
60^2 + 2(60)(1) + 1^2 = 3600 + 120 + 1 = 3721$. The identity run backward is just as useful: seeing
$x^2 + 10x + 25$, recognize $2ab = 10x$ with $a = x$, forcing $b = 5$ and $b^2 = 25$, so the
trinomial is the perfect square $(x+5)^2$.

### Pitfalls

- **The cross term is the whole point.** $(a+b)^2 \ne a^2 + b^2$. Forgetting $2ab$ is the single
  most common algebra error; the numeric surplus in the Hook is precisely the damage it does.
- **The middle sign flips, the end signs do not.** In $(a-b)^2$ the cross term is $-2ab$, but $b^2$
  stays $+b^2$ (a negative times a negative). Writing $(a-b)^2 = a^2 - 2ab - b^2$ is wrong.
- **The coefficient is $2$, not $1$.** Two congruent rectangles, not one — $2ab$, never just $ab$.
- **Squaring is not linear over sums or scalars either.** $(2a+b)^2$ has cross term $2(2a)(b) = 4ab$
  and first term $(2a)^2 = 4a^2$; you must square the coefficient too, not carry it along.

:::
:::

## Connections

This is the first and most-used binomial expansion, and it reads both directions. Forward it
multiplies out $(a\pm b)^2$; backward it recognizes a perfect-square trinomial $a^2 \pm 2ab + b^2$,
the pattern that drives **factoring quadratics** and, more deeply, **completing the square** —
where you deliberately manufacture the missing $b^2$ to force a perfect square and solve any
quadratic. It sits beside the **difference of squares** $a^2 - b^2 = (a-b)(a+b)$; the two together
are the workhorses of elementary factoring. Recognition trigger: any squared sum or difference, any
mental square of a number near a round one, or any trinomial whose outer terms are perfect squares
and whose middle term is twice the product of their roots.

## History

The identity $(a+b)^2 = a^2 + 2ab + b^2$ was first known as a fact about areas: Euclid's *Elements*, Book II, Proposition $4$ (around $300$ BC), proves it by dissecting a square of side $a+b$ into two smaller squares and two equal rectangles. This "geometric algebra" was how the Greeks, lacking symbols, expressed algebraic identities. Islamic and Indian mathematicians used the relation freely in computation, and it underlies al-Khwarizmi's completing-the-square method for quadratics. With the symbolic notation of Viète and Descartes it became the familiar formula, and the general pattern for higher powers was organized by Pascal's triangle and Newton's binomial theorem in the seventeenth century. It mattered as the most basic nontrivial expansion in algebra — the tool behind completing the square, and the first case of the binomial expansions pervasive throughout mathematics.
