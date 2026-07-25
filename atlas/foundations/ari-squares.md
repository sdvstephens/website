$1, 4, 9, 16, 25,\dots$ — the numbers you can lay out as a perfect square of tiles. Stare at the
*gaps* between them: $3, 5, 7, 9,\dots$, the odd numbers in order. Why should building the next
square always cost exactly the next odd number of tiles?

## Discovery

1. Arrange tiles in a $3$-by-$3$ square and count them. Then a $4$-by-$4$ square. In general, a
   number that tiles into an $a$-by-$a$ square is what product of $a$ with itself? Write it.
2. Start from an $a$-by-$a$ square and grow it to $(a{+}1)$-by-$(a{+}1)$ by adding one new row
   along the bottom and one new column along the right (they overlap in a single corner tile).
   Count *only the added tiles* in terms of $a$. Simplify.
3. Read off the sequence of "growth costs" from step $2$ for $a=0,1,2,3,\dots$. What kind of
   numbers are they, and how does that explain the gaps $3,5,7,9$ noticed in the Hook?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **square** of a number $a$ is $a$ times itself,
$$a^2 := a\cdot a,$$
read "$a$ squared." A natural number is a **perfect square** (or **square number**) when it equals
$a^2$ for some $a\in\NN$: $0,1,4,9,16,25,\dots$ Geometrically $a^2$ is the tile-count of an
$a\times a$ square, which is why the name is spatial. Consecutive squares differ by an odd number:
$$(a+1)^2 - a^2 = 2a+1,$$
so the gaps run $1,3,5,7,\dots$ and each square is a running sum of odd numbers,
$1+3+5+\cdots+(2a-1) = a^2$.

### Proof

We establish the growth law and the odd-sum identity from the array picture.

*The gap is $2a+1$.* Grow an $a\times a$ square to $(a+1)\times(a+1)$. The new tiles form an L:
a bottom row of $a+1$ tiles and a right column of $a$ *further* tiles (the corner already counted
in the row). By addition the L holds $(a+1)+a$ tiles. Algebraically, using the distributive law,
$$(a+1)^2 = (a+1)(a+1) = (a+1)a + (a+1) = a^2 + a + a + 1 = a^2 + (2a+1),$$
so $(a+1)^2 - a^2 = 2a+1$, an odd number for every $a\in\NN$.

*Each square is a sum of consecutive odds.* We climb from $0^2=0$ using the gap law repeatedly:
$$a^2 = \sum_{k=0}^{a-1}\big((k+1)^2 - k^2\big) = \sum_{k=0}^{a-1}(2k+1) = 1+3+5+\cdots+(2a-1),$$
a telescoping sum in which every intermediate square cancels. Hence the first $a$ odd numbers add
to $a^2$. $\blacksquare$

### Worked Instance

$5^2 = 5\cdot5 = 25$. Growing the $5\times5$ square to $6\times6$ costs $2\cdot5+1 = 11$ tiles, and
indeed $6^2 = 36 = 25 + 11$. The Hook resolved: the gaps $1\to4\to9\to16\to25$ are
$3,5,7,9 = 2a+1$ for $a=1,2,3,4$, always the next odd number — and reading the odds forward,
$1+3+5+7+9 = 25 = 5^2$, a square is exactly a staircase of odd L-shapes.

### Pitfalls

- **$a^2$ is $a\cdot a$, not $a\cdot2$ or $2a$.** "$5$ squared" is $25$, not $10$; squaring
  multiplies a number by *itself*, doubling adds it to itself.
- **Squares are never negative (over the reals).** $a^2\ge0$ always, and $(-a)^2=a^2$ by the sign
  rule $(-)(-)= +$; two numbers can share a square.
- **"Perfect square" is a property of a number, not a size of tile.** $12$ is not a perfect square
  (no $a\times a$ layout); $16$ is.
- **Units square too.** A $3\,\text{cm}\times3\,\text{cm}$ square is $9\,\text{cm}^2$, not
  $9\,\text{cm}$ — the geometric root of "square units."

:::
:::

## Connections

The first exponent: squaring is the two-factor case of repeated multiplication, and the array
becomes a literal square. It generalizes to $a^n$ (higher exponents) and the exponent laws, and the
odd-number and telescoping ideas here reappear in figurate numbers and finite sums. Recognition
trigger: any "area of a square," "$a$ of each of $a$," or "$a\cdot a$" is a square; a running sum of
odds is secretly building one.

## History

Squaring is among the most ancient of mathematical ideas, literally tied to the area of a square figure: the Babylonians (c. 1800 BCE) tabulated squares and used them to multiply via the identity $ab=\tfrac{(a+b)^2-(a-b)^2}{4}$, and "square numbers" $1,4,9,16,\dots$ were a central object of Pythagorean number theory (c. 500 BCE), who arranged pebbles into square arrays. The very word "square" for the second power reflects this geometric origin, preserved in Greek and Latin usage. Squares underlie the Pythagorean theorem and the Greek theory of areas in Euclid's *Elements*. The notation $x^2$ came far later, promoted by René Descartes in his *La Géométrie* (1637). Squaring mattered because it was the gateway to the study of perfect squares, quadratic relationships, and ultimately the square root and the discovery of irrational numbers.
