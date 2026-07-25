The roots of $x^2 - 5x + 6$ are $2$ and $3$. Their sum is $5$; their product is $6$ — the very
coefficients, one of them flipped in sign, staring back at you. Is that a fluke of this tidy
example, or can you read a quadratic's sum-of-roots and product-of-roots straight off its
coefficients, without ever finding the roots?

## Discovery

1. Suppose a monic quadratic $x^2 + bx + c$ has roots $r$ and $s$. Then it factors as
   $(x - r)(x - s)$. Expand that product and collect like terms. Read off the coefficient of $x$
   and the constant term, each expressed through $r$ and $s$.
2. Set your expansion equal to $x^2 + bx + c$ and match coefficients. What equation ties $b$ to
   $r$ and $s$? What equation ties $c$ to $r$ and $s$? Watch the sign carefully.
3. Confirm it a second, independent way. By the quadratic formula the two roots are
   $\dfrac{-b + \sqrt{b^2 - 4c}}{2}$ and $\dfrac{-b - \sqrt{b^2 - 4c}}{2}$. Add them and watch the
   radical cancel; multiply them and use $(p+q)(p-q) = p^2 - q^2$. Check both outcomes against
   step 2.
4. Drop "monic": let the quadratic be $ax^2 + bx + c$ with $a \ne 0$ and roots $r, s$, factoring as
   $a(x - r)(x - s)$. Expand and match again. How are $r + s$ and $rs$ related to $a, b, c$ now?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Vieta's formulas for the quadratic.** Let $ax^2 + bx + c$ ($a \ne 0$) have roots $r$ and $s$
(counted with multiplicity, over $\CC$). Then
$$r + s = -\frac{b}{a}, \qquad rs = \frac{c}{a}.$$
In the monic case $x^2 + bx + c$: $r + s = -b$ and $rs = c$. The sum of the roots is *minus* the
(normalized) linear coefficient; the product is the (normalized) constant term. Turned around, a
monic quadratic with prescribed roots is $x^2 - (\text{sum})x + (\text{product})$ — so you can build
a quadratic from its roots, or extract symmetric functions of the roots, without solving anything.

### Proof

Let $a \ne 0$ and set $\Delta = b^2 - 4ac$. By the quadratic formula the roots are
$$r = \frac{-b + \sqrt{\Delta}}{2a}, \qquad s = \frac{-b - \sqrt{\Delta}}{2a}$$
(valid over $\CC$: if $\Delta \lt 0$, read $\sqrt{\Delta}$ as a complex square root, and $r, s$ are
the conjugate pair; if $\Delta = 0$ then $r = s = -\frac{b}{2a}$).

*Sum.* Adding cancels the radical:
$$r + s = \frac{(-b + \sqrt{\Delta}) + (-b - \sqrt{\Delta})}{2a} = \frac{-2b}{2a} = -\frac{b}{a}.$$

*Product.* Multiplying is a difference of squares:
$$rs = \frac{(-b + \sqrt{\Delta})(-b - \sqrt{\Delta})}{(2a)^2} = \frac{(-b)^2 - (\sqrt{\Delta})^2}{4a^2}
= \frac{b^2 - \Delta}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{4ac}{4a^2} = \frac{c}{a}.$$
Setting $a = 1$ gives $r + s = -b$ and $rs = c$. Both identities hold in every case above,
including $\Delta = 0$ (where $r = s$, so $r + s = -\frac{b}{a}$ and $rs = \left(\frac{b}{2a}\right)^2
= \frac{b^2}{4a^2} = \frac{c}{a}$, the last equality being exactly $\Delta = 0$). $\blacksquare$

*(Alternative: expand the factorization $ax^2 + bx + c = a(x-r)(x-s) = ax^2 - a(r+s)x + ars$ and
match coefficients — $b = -a(r+s)$, $c = ars$ — which is the Discovery route.)*

### Worked Instance

The Hook resolves instantly: for $x^2 - 5x + 6$, $r + s = -(-5) = 5$ and $rs = 6$; the roots are the
two numbers with sum $5$ and product $6$, namely $2$ and $3$ — no square roots needed.

**Building a quadratic from its roots.** Find a monic quadratic with roots $2 + \sqrt 3$ and
$2 - \sqrt 3$. Their sum is $4$ and their product is $(2)^2 - (\sqrt 3)^2 = 4 - 3 = 1$, so the
quadratic is $x^2 - (4)x + (1) = x^2 - 4x + 1$ — precisely the Hook equation from
[alg-quadratic-formula], now assembled from its roots without touching the formula.

**A symmetric function without solving.** For the roots of $2x^2 - 3x - 5$, compute $r^2 + s^2$.
Vieta gives $r + s = -\frac{-3}{2} = \frac{3}{2}$ and $rs = \frac{-5}{2}$. Then
$$r^2 + s^2 = (r+s)^2 - 2rs = \frac{9}{4} - 2\!\left(-\frac{5}{2}\right) = \frac{9}{4} + 5 = \frac{29}{4}.$$
Check against the actual roots: $2x^2 - 3x - 5 = (2x - 5)(x + 1)$ has roots $\frac{5}{2}$ and $-1$,
and $\frac{25}{4} + 1 = \frac{29}{4}$.

### Pitfalls

- **The sum carries a minus.** $r + s = -\frac{b}{a}$ (monic: $-b$), *not* $+b$. Forgetting the
  sign is the single most common error.
- **Divide by $a$ when non-monic.** $r + s = -\frac{b}{a}$ and $rs = \frac{c}{a}$; using $-b$ and
  $c$ for a quadratic whose leading coefficient is not $1$ is wrong.
- **Building a quadratic: negate the sum.** From roots you get $x^2 - (\text{sum})x + (\text{product})$;
  the coefficient of $x$ is $-(\text{sum})$, so a sum of $4$ gives $-4x$, not $+4x$.
- **Roots are counted with multiplicity, over $\CC$.** A double root contributes to both $r+s$ and
  $rs$ twice; a complex-conjugate pair still has a *real* sum and product ($-\frac{b}{a}$,
  $\frac{c}{a}$).

:::
:::

## Connections

This is the degree-2 face of a general law: expand $a(x-r)(x-s)$ and match, or add and multiply the
$\pm$ pair of the quadratic formula ([alg-quadratic-formula]) — either way the roots' sum and
product are pinned to the coefficients. The prereq of factoring a quadratic supplies the
$(x-r)(x-s)$ picture; the same coefficient-matching, run at every degree, is **Vieta's formulas**
in full ([alg-vieta]), where sum and product generalize to the elementary symmetric polynomials.
Recognition trigger: a problem wanting a *symmetric* function of the roots — sum, product, sum of
squares, sum of reciprocals — without asking you to find the roots, or asking you to *construct* a
quadratic with given roots.

## History

The relations tying a quadratic's roots to its coefficients — that the roots sum to $-b/a$ and multiply to $c/a$ — are named for François Viète, who around $1590$ became the first to perceive and exploit these connections systematically, a natural consequence of his pioneering use of letters for coefficients. Viète, cautious about negative numbers, saw the pattern only partially; Albert Girard, in his *Invention nouvelle en l'algèbre* ($1629$), stated the relations for higher-degree polynomials fully, including the symmetric functions of all the roots. The idea reached its mature form with the theory of symmetric polynomials developed by Newton and later Lagrange in the eighteenth century, which underpins Galois's analysis of solvability. Vieta's formulas mattered because they let one extract information about roots — their sum, product, and more — without ever finding the roots themselves, a shortcut ubiquitous in competition mathematics and a first glimpse of the deep symmetry between roots and coefficients.
