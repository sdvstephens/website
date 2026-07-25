Find a number that is $12$ less than its own square. Both $4$ and $-3$ work — check them:
$4^2 - 12 = 4$ and $(-3)^2 - 12 = -3$. A first-degree demand like "a number $5$ more than
another" pins down a single answer; why does dragging in a *square* suddenly hand back two
answers at once? And is the count always two — could a squared demand ever have exactly one
answer, or none at all?

## Discovery

1. Translate the Hook's demand into an equation, then move every term to the left so the right
   side is $0$. Do the same for two more demands: "a number whose square is $6$ times the number
   minus $9$," and "a number whose square equals $-1$." Write all three equations with $0$ alone
   on the right, and in each one circle the highest power of the unknown that appears.
2. For each of the three equations from step $1$, hunt for the real numbers that satisfy it — try
   small integers, and reason about whether a number could possibly qualify. For each equation,
   record *how many* real solutions you can justify it having. Do not assume the three counts are
   equal.
3. Line the three equations up. Each has the shape $\square\,x^2 + \square\,x + \square = 0$ once
   you allow a coefficient of $0$ on a missing term. For each equation, name the three numbers
   filling those boxes. What single structural feature do all three share that makes them "the
   same kind of equation"?
4. Take $f(x) = x^2 - x - 12$. Compute $f(x)$ at $x = -4,-3,-2,-1,0,1,2,3,4,5$ and plot the ten
   points. Describe the shape of the curve they trace, and mark every place it meets the
   horizontal axis. Compare those crossing points with the solutions you found in step $2$ for the
   first equation. Then sketch the curves for the other two equations the same way and compare
   *their* axis-crossings with their solution counts.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **quadratic expression** in $x$ is one that can be written in the **standard form**
$$ax^2 + bx + c, \qquad a \neq 0,$$
where $a, b, c$ are constants (the **coefficients**) and $a$ — the **leading coefficient** — is
nonzero. The nonzero $x^2$ term is what makes it quadratic: the **degree** (highest power of $x$)
is exactly $2$. Setting a quadratic expression equal to $0$ gives a **quadratic equation**
$ax^2 + bx + c = 0$; its solutions are the **roots**.

The condition $a \neq 0$ is essential: if $a = 0$ the expression collapses to the linear
$bx + c$, a different creature with a single root. Graphed, $y = ax^2 + bx + c$ is a **parabola**
— a symmetric U-shaped curve, opening upward when $a \gt 0$ and downward when $a \lt 0$ — and the
real roots of the equation are exactly the $x$-values where this parabola meets the $x$-axis.

Over the real numbers a quadratic equation has **at most two** roots, and every count in
$\{0, 1, 2\}$ actually occurs: a parabola can cross the axis twice, just touch it once, or miss it
entirely. (The one-root case is a parabola tangent to the axis; we defer the test that predicts
the count in advance.)

### Proof

The substantive claim is the ceiling of **two**; that each of the counts $0,1,2$ is realized we
then exhibit.

*At most two real roots.* Let $a \neq 0$ and suppose $r$ is any real root of
$ax^2 + bx + c = 0$, so $ar^2 + br + c = 0$, giving $c = -ar^2 - br$. Substitute this value of
$c$ into the expression and regroup:
$$ax^2 + bx + c = ax^2 + bx - ar^2 - br = a(x^2 - r^2) + b(x - r).$$
Now $x^2 - r^2 = (x-r)(x+r)$ and $x - r$ share the factor $(x-r)$; pulling it out (distribution,
read backward),
$$ax^2 + bx + c = (x - r)\big(a(x+r) + b\big) = (x - r)(ax + ar + b).$$
Expanding the right side confirms it: $(x-r)(ax + ar + b) = ax^2 + arx + bx - arx - ar^2 - br =
ax^2 + bx + c$, using $c = -ar^2 - br$. So *every* root $r$ furnishes this factorization.

Let $s$ be any root at all. Then $(s - r)(as + ar + b) = 0$. The real numbers have no zero
divisors — a product is $0$ only if a factor is $0$ — so either $s - r = 0$, i.e. $s = r$, or
$as + ar + b = 0$, i.e.
$$s = -r - \frac{b}{a}$$
(here $a \neq 0$ lets us divide). Thus apart from $r$ itself there is **at most one** other value
a root can take, namely $-r - b/a$. Any list of distinct roots therefore has at most two
entries. $\blacksquare$

*Each count occurs (by exhibit).* $x^2 - x - 12 = 0$ has the two roots $4$ and $-3$
($16 - 4 - 12 = 0$, $9 + 3 - 12 = 0$). $x^2 - 6x + 9 = 0$ has the single root $3$, since
$x^2 - 6x + 9 = (x-3)^2$ (expand to check) vanishes only at $x = 3$. And $x^2 + 1 = 0$ demands
$x^2 = -1$, impossible for a real $x$ because a real square satisfies $x^2 \geq 0$; so it has no
real root. All three counts are attained.

### Worked Instance

Resolve the Hook. "$12$ less than its square" is $x^2 - 12 = x$, i.e. in standard form
$$x^2 - x - 12 = 0 \qquad (a=1,\ b=-1,\ c=-12).$$
Its factorization $(x-4)(x+3) = 0$ (expand: $x^2 - x - 12$, confirmed) meets the axis at $x = 4$
and $x = -3$ — the two answers the Hook promised, and the two points where the parabola
$y = x^2 - x - 12$ dips below and climbs back through the $x$-axis.

The two companions behave differently. "Square is $6$ times the number minus $9$" is
$x^2 = 6x - 9$, i.e. $x^2 - 6x + 9 = 0 = (x-3)^2$: the parabola $y=(x-3)^2$ rests its lowest point
exactly *on* the axis at $x = 3$, so there is one root, $x = 3$. "Square equals $-1$" is
$x^2 + 1 = 0$: the parabola $y = x^2 + 1$ floats a full unit above the axis and never touches it,
so there is no real root. One demand involving a square, three different answer-counts — settling
the Hook's second question: no, it is not always two.

### Pitfalls

- **$a \neq 0$ or it is not quadratic.** If the $x^2$ term vanishes you have a *linear* equation
  with (generically) one solution, not the degree-two object; the whole two-root story depends on a
  genuine $ax^2$ term.
- **Reach standard form before reading $a,b,c$.** From $x^2 = x + 12$ you cannot read
  $c = 12$; you must first move everything to one side, $x^2 - x - 12 = 0$, so in fact $c = -12$.
  Coefficients are only meaningful once one side is $0$.
- **"No real solution" is not "no solution."** $x^2 + 1 = 0$ has no *real* root because real
  squares are $\geq 0$; a wider number system restores roots later. Over the reals, though, none
  means none.
- **A double root is one number, honestly counted once.** $(x-3)^2 = 0$ has the single solution
  $x = 3$; saying "two solutions, both $3$" is bookkeeping for later, not two distinct answers.
- **Degree is the *highest* power present.** An $x^3$ term makes the equation cubic, not
  quadratic, even if an $x^2$ also appears; "quadratic" means degree exactly $2$.

:::
:::

## Connections

A quadratic is the distributive law's first genuinely new equation: multiply two linear factors
(`alg-distribution-factoring`) and a degree-two expression appears, its $x^2$ built from the
squaring of `ari-squares`. This node is the on-ramp to the three ways of cracking it. When the
roots are tidy, run the multiplication backward and **factor the quadratic**
(`alg-factoring-quadratics`); when they are not, manufacture a perfect square by **completing the
square** (`alg-completing-square`), which in turn powers the quadratic formula. The parabola here
is the graph you will later locate by its vertex, and the "at most two roots" ceiling is the
degree-$2$ case of the general fact that a degree-$n$ polynomial has at most $n$ roots. Recognition
trigger: any equation whose highest power is a single $x^2$ — an area equalling a shifted length, a
number tied to its own square, a product of two unknown-shifted lengths — is a quadratic in
disguise.

## History

Quadratic problems are among the oldest in mathematics. Babylonian scribes, nearly four thousand years ago, solved them by procedures equivalent to completing the square, and Euclid's *Elements* (around $300$ BC) handled them geometrically through the "application of areas." The Indian mathematician Brahmagupta, in $628$ AD, gave an explicit general rule for the roots and, remarkably, accepted negative and zero solutions. Al-Khwarizmi, around $820$, classified quadratics into standard types and solved each by completing the square, laying the groundwork for algebra as a discipline. The unified symbolic treatment, in which any quadratic is $ax^2 + bx + c = 0$, came with Viète and Descartes. It mattered because quadratics are the simplest equations whose curves bend — the first step beyond straight-line algebra — and they model everything from projectile motion to areas and optimization.
