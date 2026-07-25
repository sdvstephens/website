Quick: what is $103 \times 97$? Most people reach for pencil. But $103 \times 97 = (100+3)(100-3) = 100^2 - 3^2 = 10000 - 9 = 9991$, done in your head. What identity made those cross-terms vanish?

## Discovery

1. Expand the product $(a - b)(a + b)$ by multiplying everything out: four terms. Write all four. Which two of them cancel, and why?
2. After the cancellation, what single expression remains? You have just found what $(a-b)(a+b)$ equals in expanded form.
3. Read the identity *backwards*: given a difference of two squares like $a^2 - b^2$, you can rewrite it as a product. Apply this to $x^2 - 9$: identify $b$ so that $9 = b^2$, then factor.
4. For the mental-math trick: to compute $103 \times 97$, notice both factors are the same distance from $100$. Set $a = 100$ and find the $b$ so that $103 = a + b$ and $97 = a - b$. Then the product is $a^2 - b^2$ — evaluate it. Why does this beat multiplying directly?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For all numbers $a$ and $b$,
$$a^2 - b^2 = (a - b)(a + b).$$
Read left to right it **factors** a difference of squares; read right to left it **multiplies** two numbers symmetric about a center $a$ (their average) with half-spread $b$, turning a product into $a^2 - b^2$. It is the simplest of the power-factorization identities and the workhorse behind a great deal of mental arithmetic and algebraic simplification.

### Proof

Expand the right-hand side by the distributive law:
$$(a - b)(a + b) = a\cdot a + a\cdot b - b\cdot a - b\cdot b = a^2 + ab - ab - b^2.$$
The two middle terms $+ab$ and $-ab$ are equal in magnitude and opposite in sign (multiplication commutes, so $ab = ba$), hence cancel. What remains is
$$a^2 - b^2.$$
Thus $(a-b)(a+b) = a^2 - b^2$ as an identity, valid for all $a, b$ (integers, reals, or elements of any commutative ring, since only commutativity and distributivity were used). $\blacksquare$

### Worked Instance

**Mental multiplication.** $103 \times 97$: both factors sit at distance $3$ from $100$, so $a = 100$, $b = 3$, giving $103\times 97 = (100+3)(100-3) = 100^2 - 3^2 = 10000 - 9 = 9991$ — the Hook, resolved in one line.

**Factoring.** $x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)$. And a two-step case: $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4) = (x-2)(x+2)(x^2+4)$, applying the identity twice.

**Number theory flavor.** $99991 = 100000 - 9 = 10^5 - 3^2$ is not a difference of squares, but $2021 = 45^2 - 4^2 = (45-4)(45+4) = 41\cdot 49$ is — so it factors, revealing $2021 = 41\cdot 49 = 43^2 - 22^2$... more cleanly, $2021 = 43\cdot 47 = 45^2 - 2^2$, exhibiting a factorization by spotting it as a difference of squares.

### Pitfalls

- Only the *difference* factors this way. $a^2 + b^2$ does **not** factor over the real numbers (it needs complex numbers); do not write $(a+b)(a-b)$ for a sum.
- Both terms must genuinely be squares. To factor $x^2 - 5$, write $5 = (\sqrt5)^2$: $x^2 - 5 = (x-\sqrt5)(x+\sqrt5)$ — fine over reals, but there is no *integer* factorization.
- Sign care reading backwards: $a^2 - b^2 = (a-b)(a+b)$, not $(a-b)^2$ (that is $a^2 - 2ab + b^2$, a different identity).
- The mental trick needs the two factors *equidistant* from a center; $a$ is their average $\tfrac{(a+b)+(a-b)}{2}$ and $b$ is half their difference.

:::
:::

## Connections

Prereqs: place value / basic algebra. This is the seed of the whole family of power factorizations (`alg-power-factorizations`): $a^n - b^n$ always has $(a-b)$ as a factor, of which $a^2 - b^2$ is the first nontrivial instance, and it feeds Simon's Favorite Factoring Trick and Vieta-style manipulations. Recognition trigger: a subtraction of two perfect squares (in algebra *or* in a factoring/mental-math problem) — split it into (difference)(sum) at once.

## History

The factorization $a^2-b^2=(a-b)(a+b)$ is an ancient algebraic identity, present geometrically in Greek mathematics and used extensively by Islamic algebraists such as al-Karaji (c. 1000). Fibonacci exploited differences of squares in his work on congruent numbers (Liber Quadratorum, 1225), and the identity is central to Fermat's method of factoring integers by expressing them as a difference of two squares in the seventeenth century. It converts a subtraction into a product, which is why it is a workhorse in factoring, mental arithmetic, and number theory. The result is old enough to have no single discoverer, but its systematic algebraic use dates to the medieval Islamic and Renaissance European traditions. ANABASIS presents it as a fundamental factoring identity.
