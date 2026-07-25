Among all rectangles with perimeter $40$, one encloses more area than any other — a $10 \times 10$
square, area $100$. No calculus enters, and you never test a single competing rectangle. How can a
quadratic hand you its own largest value with certainty?

## Discovery

Let $f(x) = ax^2 + bx + c$ with $a \ne 0$.

1. Complete the square on $f$: pull the factor $a$ out of the first two terms, complete the square
   inside, and absorb the correction back out. Write $f(x)$ in the form $a(x - h)^2 + k$, expressing
   $h$ and $k$ in terms of $a, b, c$. (Do not yet interpret them.)
2. In the form $a(x - h)^2 + k$, the only place $x$ appears is inside the squared bracket. A real
   square is never negative. Using just that fact, determine the smallest (or largest) value the term
   $a(x - h)^2$ can take, distinguishing the cases $a \gt 0$ and $a \lt 0$, and the exact value of $x$
   that achieves it.
3. Combine steps 1 and 2: state the extreme value of $f$ and where it occurs, and say which of "max"
   or "min" you get from the sign of $a$. Then apply this to the Hook — a rectangle of perimeter $40$
   has sides $x$ and $20 - x$; write its area as a quadratic in $x$ and read off the maximum.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Vertex form and the extreme value.** Every quadratic $f(x) = ax^2 + bx + c$ ($a \ne 0$) can be
written as
$$f(x) = a\,(x - h)^2 + k, \qquad h = -\frac{b}{2a}, \qquad k = c - \frac{b^2}{4a} = f(h).$$
The point $(h, k)$ is the **vertex** of the parabola. Because $(x - h)^2 \ge 0$ with equality only at
$x = h$:

- if $a \gt 0$, $f$ has a **minimum** value $k$, attained uniquely at $x = h$ (parabola opens up);
- if $a \lt 0$, $f$ has a **maximum** value $k$, attained uniquely at $x = h$ (parabola opens down).

So the single number $h = -b/2a$ locates the optimum and $k = f(h)$ is its value — an exact,
calculus-free optimizer for any quadratic quantity.

### Proof

Starting from $f(x) = ax^2 + bx + c$ with $a \ne 0$, factor $a$ from the variable terms and complete
the square:
$$f(x) = a\left(x^2 + \frac{b}{a}x\right) + c
= a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) - a\cdot\frac{b^2}{4a^2} + c
= a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right).$$
This is $a(x - h)^2 + k$ with $h = -\tfrac{b}{2a}$ and $k = c - \tfrac{b^2}{4a}$; substituting $x = h$
confirms $f(h) = k$. The identity holds for all $x$, so it is a genuine rewriting of $f$.

Now $(x - h)^2 \ge 0$ for every real $x$, with equality iff $x = h$. If $a \gt 0$ then
$a(x - h)^2 \ge 0$, so $f(x) = a(x - h)^2 + k \ge k$, with equality exactly at $x = h$; hence $k$ is
the minimum, attained only there. If $a \lt 0$ then $a(x - h)^2 \le 0$, so $f(x) \le k$ with equality
only at $x = h$; hence $k$ is the maximum. In either case the extremum is unique because
$(x - h)^2 = 0$ forces $x = h$. $\blacksquare$

### Worked Instance

The Hook: a rectangle with perimeter $40$ has sides $x$ and $20 - x$ (since $2x + 2(20 - x) = 40$),
and area
$$A(x) = x(20 - x) = -x^2 + 20x.$$
Here $a = -1 \lt 0$, so $A$ has a **maximum**. The vertex is at $x = h = -\tfrac{b}{2a} =
-\tfrac{20}{2(-1)} = 10$, and
$$A(10) = -100 + 200 = 100.$$
The largest area is $100$, at $x = 10$, i.e. the $10 \times 10$ square — exactly the Hook's claim, and
certain because every other $x$ gives $A(x) = -(x - 10)^2 + 100 \lt 100$. A second example, a minimum:
$f(x) = 2x^2 - 12x + 5$ has $h = \tfrac{12}{4} = 3$ and $k = f(3) = 18 - 36 + 5 = -13$, so its least
value is $-13$ at $x = 3$.

### Pitfalls

- **The sign of $a$ decides max vs. min.** Opening up ($a \gt 0$) gives a minimum; opening down
  ($a \lt 0$) gives a maximum. Reversing these is the classic slip.
- **$h = -b/2a$, mind the minus.** The vertex $x$-coordinate carries a leading minus sign; for
  $-x^2 + 20x$ it is $-20/(2\cdot(-1)) = 10$, not $-10$.
- **The extreme value is $k = f(h)$, not $h$.** The optimizing *input* is $h$; the optimal *output*
  is $k$. Report whichever the problem asks for — a common mix-up.
- **Constraints can cut off the vertex.** If $x$ is restricted to an interval not containing $h$, the
  extremum on that interval is at an endpoint; the vertex formula gives the *unconstrained* optimum.
- **Do not forget to factor $a$ before completing the square.** Completing the square on
  $2x^2 - 12x + 5$ without first pulling out the $2$ mishandles the $k$ term.

:::
:::

## Connections

This is **completing the square** ([alg-completing-square]) turned into an optimizer: the same
rewriting that solves quadratics exposes the vertex, and the "$(x-h)^2 \ge 0$" step is the trivial
inequality doing all the work. It underlies **quadratic inequalities** ([alg-quadratic-inequalities])
(where the vertex fixes the sign pattern) and reappears whenever a competition problem hides a
quadratic in disguise. Recognition trigger: "maximize/minimize a product or area," "the largest value
of a quadratic expression," or any single-variable optimization with a squared term — reach for the
vertex before any calculus.

## History

Finding extrema of quadratic quantities predates the calculus that later subsumed it. The isoperimetric
insight that a square encloses the most area for a given perimeter goes back to Greek geometry, and
Pierre de Fermat's method of *adequality* in the 1630s produced maxima and minima of polynomial
expressions by a technique that anticipated the derivative. The algebraic route used here — complete
the square, then invoke that a real square is nonnegative — rests on completing the square, a move
mastered by the Babylonians and codified by al-Khwarizmi around 820. Casting the result as "vertex
form" of a parabola is a modern coordinate-geometry framing, natural only after Descartes married
algebra to curves in 1637. The enduring appeal is that it delivers a *proven* optimum, not an
approximate one, with nothing more than the fact that squares are never negative.
