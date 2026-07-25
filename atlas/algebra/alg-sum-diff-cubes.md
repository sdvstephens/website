Add two cubes and something tidy keeps happening: $3^3 + 2^3 = 35 = 5 \times 7$, and that $5$ is
just $3 + 2$. Again: $4^3 + 1^3 = 65 = 5 \times 13$, and $5 = 4 + 1$. Every time, the *sum of the two
roots* divides the sum of their cubes cleanly — and the other factor is no accident either. What is
it, and does subtracting cubes behave the same way?

## Discovery

1. Compute $3^3 + 2^3$, $4^3 + 1^3$, and $5^3 + 2^3$. Divide each by the sum of its two roots
   (that is, by $a + b$) and record the quotient beside the pair $(a, b)$ that made it.
2. Each quotient is built from $a$ and $b$. Find one formula in $a$ and $b$ that yields all three
   quotients exactly. As a check, predict the quotient for $6^3 + 1^3$ from your formula before
   dividing, then verify.
3. Test your formula structurally, not just numerically: multiply $(a + b)$ by the quadratic you
   found and expand everything. Confirm the product collapses back to $a^3 + b^3$, and note which
   pairs of terms cancel to make that happen.
4. Now do the whole investigation for a *difference*. Compute $4^3 - 2^3$, $5^3 - 3^3$, and
   $5^3 - 1^3$; divide each by $a - b$; find the quadratic quotient. Set your two quadratic
   quotients side by side (the one from sums, the one from differences) and describe precisely how
   their middle terms differ.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Sum and difference of cubes.** For all numbers $a, b$,
$$a^3 + b^3 = (a + b)\,(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)\,(a^2 + ab + b^2).$$
Each cubic splits into a **linear factor** carrying the same sign as the original ($a + b$ or
$a - b$) times a **quadratic factor** $a^2 \mp ab + b^2$. The governing rule is the **opposite-sign
pattern**: the middle term of the quadratic takes the *reverse* sign of the binomial — sum of cubes
gives $-ab$, difference of cubes gives $+ab$. The quadratic's outer terms $a^2$ and $b^2$ are always
positive, and the cross term's coefficient is $1$, not $2$.

### Proof

Expand each right-hand side by the distributive law and collect; the linear factor spreads across
three terms, and two cancelling pairs leave only the cubes.

For the sum of cubes:
$$(a + b)(a^2 - ab + b^2) = a(a^2 - ab + b^2) + b(a^2 - ab + b^2).$$
Distributing each piece,
$$= (a^3 - a^2b + ab^2) + (a^2b - ab^2 + b^3).$$
Now $-a^2b$ cancels $+a^2b$, and $+ab^2$ cancels $-ab^2$, leaving
$$(a + b)(a^2 - ab + b^2) = a^3 + b^3.$$

For the difference of cubes:
$$(a - b)(a^2 + ab + b^2) = a(a^2 + ab + b^2) - b(a^2 + ab + b^2) = (a^3 + a^2b + ab^2) - (a^2b + ab^2 + b^3).$$
Here $+a^2b$ cancels $-a^2b$ and $+ab^2$ cancels $-ab^2$, leaving
$$(a - b)(a^2 + ab + b^2) = a^3 - b^3.$$
In each case the surviving terms are exactly the two cubes, so both identities hold for all $a, b$
by the ring laws alone. The opposite-sign pattern is forced by the cancellation: the linear factor's
sign and the quadratic's middle sign must disagree so that the two mixed pairs annihilate. $\blacksquare$

### Worked Instance

The Hook is now transparent. With $a = 3$, $b = 2$,
$$3^3 + 2^3 = (3 + 2)(3^2 - 3\cdot 2 + 2^2) = 5\,(9 - 6 + 4) = 5 \times 7 = 35.$$
So $a + b = 5$ divides $a^3 + b^3$ because it is literally a factor, and the cofactor $7$ is
$a^2 - ab + b^2$. In symbolic factoring the identities are read right off the exponents: to factor
$x^3 + 8$, recognize $8 = 2^3$, so $a = x$, $b = 2$ and
$$x^3 + 8 = (x + 2)(x^2 - 2x + 4).$$
For a difference, $x^3 - 27 = x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$ — same roots, but the binomial sign
flips to $-$ and the quadratic's middle term flips to $+3x$, exactly the opposite-sign pattern.

### Pitfalls

- **The middle sign is opposite the binomial's.** Sum of cubes pairs $(a+b)$ with $a^2 - ab + b^2$;
  difference pairs $(a-b)$ with $a^2 + ab + b^2$. Matching the signs (writing $a^2 + ab + b^2$ for a
  sum) is the standard mistake.
- **The cross term coefficient is $1$, not $2$.** The quadratic factor is $a^2 - ab + b^2$, *not*
  $a^2 - 2ab + b^2$. In particular $a^2 - ab + b^2 \ne (a - b)^2$ — it is not a perfect square, and
  (for real $a,b$ not both zero) it never even equals zero.
- **A sum of cubes factors, unlike a sum of squares.** $a^2 + b^2$ has no real factorization, but
  $a^3 + b^3$ does. Do not assume the "sums don't factor" habit from squares carries to cubes.
- **Spot hidden cubes and coefficients.** $27x^3 - 1 = (3x)^3 - 1^3 = (3x - 1)(9x^2 + 3x + 1)$; the
  cube root $3x$ goes inside, and its square $9x^2$ opens the quadratic.

:::
:::

## Connections

The cubic analogue of **difference of squares**, and the next case of the general power
factorization $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \cdots + b^{n-1})$ — the theme that
**power factorizations** develops for all $n$, where the sum-of-cubes form corresponds to odd $n$
allowing an $a + b$ factor too. The opposite-sign pattern and the "SOAP" mnemonic (Same,
Opposite, Always Positive, for the three signs $a \pm b$, $\mp ab$, $+b^2$) are how these are held
in memory. The quadratic factor $a^2 - ab + b^2$ resurfaces in roots of unity and in factoring
$a^3 + b^3 + c^3 - 3abc$. Recognition trigger: any sum or difference of two perfect cubes — a
variable cubed plus a constant cube, or a numeric $a^3 \pm b^3$ you want to factor without dividing.

## History

The factorizations $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$ belong to the Renaissance flowering of symbolic algebra, when Italian mathematicians were wrestling intensely with cubes. The sixteenth-century contest to solve the cubic equation — the work of Scipione del Ferro, Niccolò Tartaglia, and Gerolamo Cardano, whose *Ars Magna* ($1545$) published the solution — depended on manipulating cubic expressions, and identities of this kind were part of that toolkit. The clean symbolic statements crystallized once Viète and Descartes had established letter-algebra around $1600$. These factorizations generalize the difference of squares and foreshadow the full pattern for $a^n - b^n$. They mattered as standard factoring tools and as stepping stones toward the theory of polynomial roots and, eventually, the cyclotomic factorizations at the heart of higher algebra.
