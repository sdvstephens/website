$x^2 + 6x + 9$ is a perfect square — it is $(x+3)^2$. But $x^2 + 6x + 7$ is not, and it misses
by exactly $2$; while $x^2 + 6x + 10$ overshoots by exactly $1$. All three carry the same
$x^2 + 6x$; only the lonely constant decides whether the trinomial folds up into a square. What
constant makes $x^2 + 6x + \square$ a perfect square — and once you can name it, can you solve
$x^2 + 6x + 7 = 0$ even though no whole-number factoring will crack it?

## Discovery

1. The square-of-binomial identity is $(x + t)^2 = x^2 + 2tx + t^2$. Line up $x^2 + 6x$ against
   the opening $x^2 + 2tx$ of a perfect square. What must $t$ be so that $2tx$ equals $6x$? With
   that $t$ fixed, what is $t^2$ — the constant the square carries?
2. Replay step $1$ with a general middle coefficient: line $x^2 + bx$ against $x^2 + 2tx$. Solve
   for $t$ in terms of $b$, then write the completing constant $t^2$ in terms of $b$.
3. Now $x^2 + 6x + 7$ carries the constant $7$, not the one your square wants. Insert the square's
   constant by adding *and* subtracting it: write $x^2 + 6x + 7$ as
   $x^2 + 6x + (\text{that constant}) - (\text{that constant}) + 7$. Fold the first three terms
   into a single $(x + t)^2$ and combine the leftover numbers. What $(x + t)^2 + (\text{number})$
   form do you get?
4. Set your form from step $3$ equal to $0$. Isolate the squared term on one side, then undo the
   square by taking a square root of both sides — and account for the fact that a square has two
   real square roots. Solve for $x$. How many solutions appear, and where does the $\pm$ come from?
5. A leading coefficient breaks the trick, which needs the $x^2$ coefficient to be $1$. Take
   $2x^2 + 12x + 7$ and factor the $2$ out of the $x^2$ and $x$ terms only, leaving
   $2(x^2 + 6x) + 7$. Complete the square inside the parentheses, then multiply back through. What
   $a(x + t)^2 + (\text{number})$ form results?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Completing the square.** For any constants $b, c$,
$$x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + \left(c - \frac{b^2}{4}\right).$$
The recipe: take **half the linear coefficient, square it** — that number $(b/2)^2 = b^2/4$ is the
constant a perfect square wants — then add and subtract it to fold $x^2 + bx$ into
$(x + b/2)^2$, sweeping the mismatch into a lone constant $c - b^2/4$. This is the square-of-binomial
identity `alg-square-of-binomial` run *backward*.

For a leading coefficient $a \neq 0$, first factor $a$ from the variable terms:
$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right).$$
This is **vertex form** $a(x - h)^2 + k$ with $h = -\dfrac{b}{2a}$ and $k = c - \dfrac{b^2}{4a}$;
the parabola $y = ax^2+bx+c$ has its vertex at $(h, k)$.

**Solving.** Completing the square converts any quadratic into $(x + b/2)^2 = b^2/4 - c$; take
square roots of both sides — with a $\pm$, since a square has two real roots — to solve. Unlike
factoring, this never relies on the roots being tidy, so it cracks every quadratic and, applied to
the general $ax^2+bx+c=0$, manufactures the quadratic formula.

### Proof

*The identity.* Expand the claimed right side with the square-of-binomial identity:
$$\left(x + \frac{b}{2}\right)^2 = x^2 + 2\cdot x \cdot \frac{b}{2} + \left(\frac{b}{2}\right)^2
= x^2 + bx + \frac{b^2}{4}.$$
Add $c - b^2/4$:
$$\left(x + \frac{b}{2}\right)^2 + \left(c - \frac{b^2}{4}\right)
= x^2 + bx + \frac{b^2}{4} + c - \frac{b^2}{4} = x^2 + bx + c,$$
the $b^2/4$ terms cancelling. The equality holds for every $x$, so it is an identity.

*The leading-coefficient form.* With $a \neq 0$, factor $a$ from the variable terms and apply the
identity just proved to the inside (its linear coefficient is $b/a$):
$$ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c
= a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c
= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c.$$
Expanding the middle expression back returns $ax^2+bx+c$, confirming it.

*Solving and the solution count.* From $x^2 + bx + c = 0$ and the identity,
$$\left(x + \frac{b}{2}\right)^2 = \frac{b^2}{4} - c.$$
Call the right side $D$. A real square is $\geq 0$ and, for $D \geq 0$, the real solutions of
$w^2 = D$ are exactly $w = \pm\sqrt{D}$; for $D \lt 0$ there are none, since no real square is
negative. Hence:
- if $D \gt 0$, two roots $x = -\dfrac{b}{2} \pm \sqrt{D}$;
- if $D = 0$, one root $x = -\dfrac{b}{2}$;
- if $D \lt 0$, no real root.

This reproduces, and now *explains*, the trichotomy of `alg-quadratic-intro`: the count is decided
by the sign of $D = b^2/4 - c$ after the square is isolated. $\blacksquare$

### Worked Instance

Resolve the Hook. For $x^2 + 6x + 7$, half of $6$ is $3$ and $3^2 = 9$, so add and subtract $9$:
$$x^2 + 6x + 7 = (x^2 + 6x + 9) - 9 + 7 = (x + 3)^2 - 2.$$
That names the Hook's "miss": the perfect square $x^2+6x+9 = (x+3)^2$, and $7$ falls $2$ short, so
the trinomial is $(x+3)^2 - 2$. To solve $x^2 + 6x + 7 = 0$, isolate and root:
$$(x+3)^2 = 2 \ \Rightarrow\ x + 3 = \pm\sqrt{2} \ \Rightarrow\ x = -3 \pm \sqrt{2}.$$
Two irrational roots — no rational factoring could have found them, yet completing the square
delivers them cleanly.

The companions confirm the pattern. $x^2 + 6x + 10 = (x+3)^2 + 1$ (the Hook's "overshoot by $1$");
solving $(x+3)^2 = -1$ has no real solution, since a real square is never negative. And the
leading-coefficient case: $2x^2 + 12x + 7 = 2(x^2 + 6x) + 7 = 2[(x+3)^2 - 9] + 7 = 2(x+3)^2 - 11$,
so the parabola $y = 2x^2+12x+7$ has vertex $(-3, -11)$.

### Pitfalls

- **In an expression, add *and* subtract; in an equation, add to *both* sides.** You cannot simply
  add $(b/2)^2$ to $x^2 + bx + c$ — that changes it. Either add and subtract it (expression) or add
  it to both sides of the equation (balancing).
- **It is $(b/2)^2 = b^2/4$, not $b^2$ or $b/2$.** Halve first, *then* square. Squaring before
  halving, or forgetting to square, is the standard error.
- **A leading coefficient must be factored from both variable terms first.** For $2x^2+12x+7$,
  pull the $2$ from $2x^2$ and $12x$ only, not from the $7$; then complete inside. Completing
  before factoring the $2$ corrupts the constant.
- **The square root introduces $\pm$.** $(x+3)^2 = 2$ gives $x+3 = \pm\sqrt2$; dropping the
  negative branch silently discards a root.
- **Watch the sign carried into the binomial.** With $b$ negative, $b/2$ is negative:
  $x^2 - 8x + \ldots$ completes to $(x - 4)^2 + \ldots$, not $(x+4)^2$.

:::
:::

## Connections

Completing the square is `alg-square-of-binomial` inverted: instead of expanding $(x+t)^2$, you
*manufacture* the missing $t^2$ to force a perfect square, then peel it off with a square root.
Where `alg-factoring-quadratics` needs lucky roots, this method is universal, which is why running
it on the general $ax^2 + bx + c = 0$ produces the **quadratic formula** (`alg-quadratic-formula`)
— the completed square $(x + b/2a)^2 = (b^2 - 4ac)/4a^2$ is the formula one root-extraction away.
The vertex form $a(x-h)^2 + k$ it yields is the graphing tool that locates a parabola's turning
point and its max or min, and the sign of the isolated constant $D = b^2/4 - c$ is what secretly
governed the two/one/none trichotomy of `alg-quadratic-intro`. Recognition trigger: a quadratic
that refuses to factor, any request for a vertex, maximum, or minimum, or any need to solve
$(\text{linear})^2 = \text{constant}$ — reach for the square you can complete.

## History

Completing the square is the technique that gave algebra its name. Babylonian mathematicians used a geometric version four thousand years ago, literally completing a square figure to solve quadratic problems. The method was systematized by Muhammad ibn Musa al-Khwarizmi around $820$ in Baghdad, whose treatise titled with the phrase *al-jabr* ("restoration," the root of "algebra") solved each type of quadratic by adding the term needed to form a perfect square, and who accompanied his recipes with geometric justifications. Later algebraists, once armed with the symbolic notation of Viète and Descartes, performed the same completion on letters rather than numbers. That symbolic completion, done once and for all, is precisely what yields the quadratic formula. It mattered as both a solving method and a structural tool — rewriting a quadratic to reveal its vertex, its symmetry, and ultimately the general formula for its roots.
