The equation $x^2 - y^2 = 2024$ has exactly a handful of positive-integer solutions, while
$x^2 + y^2 = 2023$ has none at all — and you can settle both without trying a single value of
$x$. One equation you crack by *factoring*, the other you kill by looking at *remainders*. These
are two of the three moves that solve most integer equations you will ever meet.

## Discovery

Work in integers throughout. Do not look for a formula; look for *moves*.

1. **Factoring a difference.** Take $x^2 - y^2 = N$. Rewrite the left side as a product of two
   integer factors. If you know the factor pairs of $N$, how does each pair pin down a candidate
   $(x,y)$? What parity condition must the two factors share for $x,y$ to come out as integers?
2. **Manufacturing a factorization (SFFT).** Now take an equation with a stray linear term, say
   $xy + 3x + 2y = 18$. It does not factor as written. Add a *single well-chosen constant* to
   both sides so that the left becomes a product $(x+a)(y+b)$. Which constant, and what does the
   equation become?
3. **Bounding.** Consider $\dfrac1x + \dfrac1y + \dfrac1z = 1$ in positive integers with
   $x \le y \le z$. Since $x$ is the smallest, how large can $\dfrac1x$ be, and how small? Turn
   those two facts into a finite range of possible values of $x$. Once $x$ is chosen, repeat the
   idea to trap $y$. Why does the whole search terminate?
4. **A congruence obstruction.** List the possible remainders of a perfect square modulo $4$. Now
   ask: what remainders modulo $4$ can $x^2 + y^2$ possibly leave? Compare against
   $2023 \bmod 4$. What does the mismatch let you conclude — before any search?
5. Look back at steps 1–4. Each *removed* possibilities in a different way: by turning an equation
   into a divisor problem, by forcing a product, by trapping a variable in a finite interval, or
   by exhibiting an impossibility mod $m$. State, in your own words, when you would reach for
   each.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

There is no single algorithm for Diophantine equations, but three strategies solve the vast
majority of competition problems, and a strong solver runs through them in order.

- **Factoring / SFFT.** Move everything to one side and factor. A product of integers equal to a
  fixed $N$ forces each factor to be a divisor of $N$, reducing the equation to finitely many
  divisor cases. **Simon's Favorite Factoring Trick (SFFT)**, a folklore name (not a formal
  theorem), is the completion identity
  $$xy + bx + ay + ab = (x+a)(y+b),$$
  used to coax a linear-plus-product expression into a genuine product.
- **Bounding / size.** Use inequalities (often after ordering the variables $x \le y \le \cdots$)
  to confine each variable to a finite range, then finish by a bounded search. Symmetry plus an
  extremal variable is the usual entry point.
- **Modular obstruction.** Reduce the equation modulo a well-chosen $m$. If the two sides can
  never agree mod $m$, there are **no** solutions. The workhorse facts are that squares are
  $\equiv 0$ or $1 \pmod 4$ (so $x^2+y^2 \not\equiv 3 \pmod 4$) and $\equiv 0,1,4,7 \pmod 8$;
  cubes are $\equiv 0, \pm 1 \pmod 9$.

### Proof

We justify the three engines and the facts they rely on.

**Factoring reduces to divisors.** If $F(x,y) = \prod_k f_k(x,y) = N$ with each $f_k$ an
integer-valued expression, then every $f_k$ divides $N$. Since $N \ne 0$ has finitely many
divisors, there are finitely many assignments of values to the $f_k$, each a small linear system
for $(x,y)$. The SFFT identity is a direct expansion:
$$(x+a)(y+b) = xy + bx + ay + ab,$$
so adding $ab$ to $xy + bx + ay$ completes the product; matching the linear coefficients tells you
which $a,b$ to use.

**Bounding terminates.** Suppose the variables are ordered $x_1 \le x_2 \le \dots \le x_n$ and the
equation forces $g(x_1) \ge c$ for some strictly monotone $g$ (e.g. from
$n\cdot\frac{1}{x_1} \ge \sum \frac1{x_i} = 1$ we get $x_1 \le n$). Then $x_1$ lies in a finite
set; fixing it produces an equation in one fewer variable with the same structure, and induction
on the number of variables ends the search.

**Squares modulo $4$.** Every integer is $2k$ or $2k+1$. Then $(2k)^2 = 4k^2 \equiv 0$ and
$(2k+1)^2 = 4(k^2+k)+1 \equiv 1 \pmod 4$. Hence a square is $\equiv 0$ or $1 \pmod 4$, and a sum of
two squares is $\equiv 0+0,\,0+1,\,1+1 \equiv 0,1,2 \pmod 4$ — never $3$. Thus any $N \equiv 3
\pmod 4$ is not a sum of two squares. (The same casework mod $8$ gives squares $\equiv 0,1,4$, a
sharper filter.) $\blacksquare$

### Worked Instance

**Resolve the Hook.**

*Factoring.* $x^2 - y^2 = (x-y)(x+y) = 2024$. Since $x-y$ and $x+y$ have the same parity and their
product is even, both are even; write $x-y = 2a$, $x+y = 2b$ with $0 \lt a \le b$ and
$ab = 506 = 2\cdot 11\cdot 23$. The divisors of $506$ are $1,2,11,22,23,46,253,506$, giving four
unordered pairs $(a,b)$ with $a \le b$:
$$(1,506),\ (2,253),\ (11,46),\ (22,23),$$
each yielding a positive solution $x = a+b,\ y = b-a$ (and $y \gt 0$ since $a \lt b$ in every
pair):
$$(x,y) = (507,505),\ (255,251),\ (57,35),\ (45,1).$$
So $x^2 - y^2 = 2024$ has exactly **four** positive-integer solutions.

*Modular obstruction.* $2023 = 4\cdot 505 + 3 \equiv 3 \pmod 4$. A sum of two squares is never
$\equiv 3 \pmod 4$, so $x^2 + y^2 = 2023$ has **no** integer solutions. No search needed.

### Pitfalls

- **Parity in difference-of-squares.** $x-y$ and $x+y$ always share parity; a factor pair of
  opposite parity gives non-integer $x,y$ and must be discarded. When $N \equiv 2 \pmod 4$,
  *no* valid split exists.
- **SFFT sign slips.** To factor $xy - 3x + 2y$ you must add $-6$ (giving $(x+2)(y-3)$); match the
  linear coefficients carefully, and re-expand to check.
- **Forgetting a divisor case (including negatives).** If the problem allows all integers, factor
  pairs may be negative; enumerate every divisor pair, not just the "obvious" ones.
- **Bounding needs the ordering.** The trap $x_1 \le n$ comes from $x_1$ being the *smallest*
  variable; without ordering, $\frac{1}{x}$ need not be the largest term.
- **A congruence proves absence, not presence.** Passing the mod-$m$ test does not create a
  solution; it only fails to rule one out. Choose $m$ where the equation is most constrained
  (often $4$, $8$, $9$, or a prime dividing a coefficient).

:::
:::

## Connections

Prereqs: linear Diophantine equations (`nt-linear-diophantine`) for the "reduce to a divisor
system" mindset, SFFT (`alg-sfft`) as the completion identity, and congruences
(`nt-congruence-intro`) for the modular filter. These strategies feed directly into Pell's
equation, Vieta jumping (a bounding/descent hybrid), and the two-squares theorem (the converse of
the mod-$4$ obstruction). Recognition trigger: an equation over $\ZZ$ with more unknowns than
equations — first try to factor (or force a factorization by SFFT), then bound the variables by
ordering them, then look for a modulus where the two sides can never match. A constant presence on
the Putnam, USAMO, and IMO number-theory problems.

## History

"Diophantine" honors Diophantus of Alexandria (c. 200–284 AD), whose *Arithmetica* collected
methods for finding rational and integer solutions of polynomial equations — though he sought
particular solutions, not the general theory. Pierre de Fermat famously annotated a Latin edition
of the *Arithmetica* in the 1630s, and his marginal claims (including the Last Theorem) launched
the modern subject; the factoring and descent ideas here are direct descendants of Fermat's
method of infinite descent. The modular-obstruction viewpoint matured into the local–global
principle of Hensel and Hasse in the early twentieth century, formalizing "check every modulus"
as testing solvability over the $p$-adic numbers. The name "Simon's Favorite Factoring Trick" is
pure folklore, coined on the Art of Problem Solving forums around 2000 after user Simon Rubinstein-
Salzedo popularized the completion move; it encodes a technique far older than its whimsical name.
