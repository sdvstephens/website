Multiply the two neighbors of $20$: $19 \times 21 = 399$, which is just one short of $20^2 = 400$.
Step out symmetrically — $18 \times 22 = 396$, four short; $17 \times 23 = 391$, nine short. The
shortfalls are $1, 4, 9$: perfect squares, in order. A product of two "spread" numbers keeps landing
below the square of their midpoint by an exact square. Why?

## Discovery

1. Compute $19\times 21$, $18\times 22$, and $17\times 23$. For each, subtract the product from
   $400$ and write the shortfall beside the amount each factor was moved off $20$.
2. Look at your three rows. Find a rule that produces the shortfall from the offset alone, exact and
   not approximate. Then predict $15\times 25$ before multiplying, and check it.
3. Switch to letters. Take a square of side $a$ and slice a smaller $b\times b$ square out of one
   corner. The remaining $L$-shaped region (a *gnomon*) has area $a^2 - b^2$. Cut the gnomon into
   two rectangles with a single straight cut.
4. Slide one of those two rectangles so that it butts against the other and forms a single new
   rectangle with no gap or overlap. Read off that rectangle's two side lengths in terms of $a$ and
   $b$, and hence write its area as a product.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Difference of squares.** For all numbers $a, b$,
$$a^2 - b^2 = (a - b)(a + b).$$
A difference of two squares always factors into the product of their **difference** and their
**sum**. Equivalently, $(a-b)$ and $(a+b)$ — called **conjugates** — multiply to $a^2 - b^2$, with
the cross terms cancelling. Note the asymmetry with the previous identity: a *difference* of squares
factors, but a *sum* of squares $a^2 + b^2$ does **not** factor over the integers (or reals).

### Proof

Expand the claimed factorization by the distributive law and watch the middle terms annihilate:
$$(a - b)(a + b) = a(a + b) - b(a + b) = (a^2 + ab) - (ba + b^2).$$
By commutativity $ba = ab$, so $+ab$ and $-ab$ cancel exactly:
$$(a - b)(a + b) = a^2 + ab - ab - b^2 = a^2 - b^2.$$
Reading the equality from right to left gives the factorization as stated; the identity holds for
all $a, b$ since only the ring laws were used.

The dissection is the same fact. The gnomon left after removing a $b\times b$ corner from an
$a\times a$ square has area $a^2 - b^2$. Cut it into a strip of width $a - b$ and full height $a$
(area $(a-b)a$) and a strip of height $b$ and width $a - b$ (area $(a-b)b$). Both strips have the
same width $a - b$; stacking them along that common width forms one rectangle of width $a - b$ and
height $a + b$, whose area $(a-b)(a+b)$ equals the gnomon's $a^2 - b^2$. $\blacksquare$

### Worked Instance

The Hook resolves in one line. With midpoint $20$ and offset $1$, write $19 = 20 - 1$ and
$21 = 20 + 1$; these are conjugates, so
$$19 \times 21 = (20 - 1)(20 + 1) = 20^2 - 1^2 = 400 - 1 = 399.$$
The shortfall is $b^2$, the square of the offset — hence $1, 4, 9$ for offsets $1, 2, 3$, and
$15\times 25 = 20^2 - 5^2 = 400 - 25 = 375$. The identity is equally a factoring tool. To factor
$x^2 - 49$, read $a = x$, $b = 7$: $x^2 - 49 = (x - 7)(x + 7)$. It also cracks large integers:
$851 = 900 - 49 = 30^2 - 7^2 = (30 - 7)(30 + 7) = 23 \times 37$, a factorization found with no
trial division at all.

### Pitfalls

- **A sum of squares does not factor.** $a^2 + b^2 \ne (a+b)(a-b)$ and has no factorization over the
  integers or reals; only the *difference* splits. Applying the identity to a sum is a classic slip.
- **Both terms must genuinely be squares.** $x^2 - 12$ is a difference of squares only if you allow
  $12 = (\sqrt{12})^2$: over the integers it does not factor this way, though over the reals it is
  $(x - \sqrt{12})(x + \sqrt{12})$. Know your number system.
- **Mind hidden squares and coefficients.** $9x^2 - 25 = (3x)^2 - 5^2 = (3x - 5)(3x + 5)$; the
  leading coefficient's square root goes inside, so it is $3x$, not $9x$.
- **Do not confuse it with the binomial square.** $a^2 - b^2$ factors as $(a-b)(a+b)$; the trinomial
  $a^2 - 2ab + b^2$ is $(a-b)^2$. Different identities — one has a middle term, the other does not.

:::
:::

## Connections

The counterpart to the **binomial square**: where $(a\pm b)^2$ *builds* a trinomial with a middle
term, difference of squares *destroys* the middle term by pairing conjugates. It is the base case of
the general power factorization $a^n - b^n = (a-b)(a^{n-1} + \cdots + b^{n-1})$, the first tool in
**factoring quadratics**, and the engine behind **Simon's Favorite Factoring Trick**, where a
constant is added to force a factorable form. Conjugates reappear when rationalizing denominators
like $\tfrac{1}{\sqrt 2 - 1}$ and throughout competition number theory. Recognition trigger: any
"(something)$^2$ minus (something)$^2$", any product of two numbers straddling a round value, or any
integer you can write as one square minus another.

## History

The factorization $a^2 - b^2 = (a+b)(a-b)$ appears, like its companion the square of a sum, in Euclid's *Elements*, Book II (around $300$ BC), proved geometrically by rearranging the region left when a small square is removed from a larger one. The Greeks read it as a statement about areas of rectangles and gnomons. It was used computationally throughout the Islamic and Renaissance traditions, and Fermat exploited exactly this identity in his seventeenth-century factorization method, which finds a factor of an odd number by writing it as a difference of two squares. With symbolic algebra the identity became a routine factoring tool. It mattered because it is often the very first factoring pattern a student learns, and because "recognize a difference of squares" remains a reflex that simplifies expressions and reveals hidden structure across algebra.
