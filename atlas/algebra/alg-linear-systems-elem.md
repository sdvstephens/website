The system $x + y = 2$ and $x + y = 5$ demands a pair of numbers whose sum is *both* $2$ and $5$ — no
pair can comply. Yet trade the second equation for $2x + 2y = 4$, and now *every* solution of the
first works too. A pair of linear equations can land in wildly different situations. How many
genuinely different outcomes are even possible?

## Discovery

1. Run elimination on each of these three systems and record only what the *last line* reads —
   either a definite value for a variable, or a bare numerical statement:
   - (A) $x + y = 3,\quad x - y = 1$;
   - (B) $x + y = 2,\quad x + y = 5$;
   - (C) $x + y = 2,\quad 2x + 2y = 4$.
2. For each system, draw its two lines in the plane. Describe in words how the pair of lines sits:
   do they cross, run alongside each other without meeting, or lie exactly on top of one another?
3. Line up each algebraic ending from step 1 with its geometric picture from step 2 and with a count
   of solutions. Then make the general claim: for two genuine lines, could there be a *fourth* kind
   of outcome beyond the ones you found? Argue why or why not.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Trichotomy of a two-equation linear system.** A system of two linear equations in $x, y$ (each a
genuine line) has **exactly one** of these outcomes:

| solutions | geometry | elimination ends in |
|---|---|---|
| **exactly one** | lines cross at a single point | a definite value, e.g. $x = 2$ |
| **none** | distinct parallel lines | a false statement, e.g. $0 = 3$ |
| **infinitely many** | one line, counted twice (coincident) | a true statement, $0 = 0$ |

Writing the system as $a_1 x + b_1 y = c_1$, $a_2 x + b_2 y = c_2$, the deciding quantity is
$$D = a_1 b_2 - a_2 b_1.$$
If $D \ne 0$ the solution is unique. If $D = 0$ the lines are parallel: the system has infinitely
many solutions when the two equations are proportional (constants included) and **no** solution
otherwise. A system with at least one solution is **consistent**; one with none is **inconsistent**.

### Proof

Eliminate $x$: multiply the first equation by $a_2$, the second by $a_1$, and subtract:
$$a_2(a_1 x + b_1 y) - a_1(a_2 x + b_2 y) = a_2 c_1 - a_1 c_2
\ \Longrightarrow\ (a_2 b_1 - a_1 b_2)\,y = a_2 c_1 - a_1 c_2,$$
that is, since $a_2 b_1 - a_1 b_2 = -D$,
$$D\,y = a_1 c_2 - a_2 c_1. \tag{$\ast$}$$
Symmetrically, eliminating $y$ gives
$$D\,x = c_1 b_2 - c_2 b_1. \tag{$\ast\ast$}$$

**Case $D \ne 0$.** Equations $(\ast)$ and $(\ast\ast)$ force
$$x = \frac{c_1 b_2 - c_2 b_1}{D}, \qquad y = \frac{a_1 c_2 - a_2 c_1}{D},$$
a single candidate pair. It genuinely solves the system: because the elimination steps are reversible
linear combinations (each equation is recoverable from the two derived ones, $D \ne 0$), this pair
satisfies both originals. So there is *exactly one* solution — geometrically the two lines, having
unequal slopes, cross once.

**Case $D = 0$.** Now $(\ast)$ becomes $0 = a_1 c_2 - a_2 c_1$ and $(\ast\ast)$ becomes
$0 = c_1 b_2 - c_2 b_1$. These are *necessary* conditions on any solution.
- **If** $a_1 c_2 - a_2 c_1 \ne 0$ or $c_1 b_2 - c_2 b_1 \ne 0$, then a required condition reads
  $0 = (\text{nonzero})$ — impossible. **No solution.** Together with $D = 0$ (equal slopes) the
  lines are parallel and distinct.
- **If** both $a_1 c_2 - a_2 c_1 = 0$ and $c_1 b_2 - c_2 b_1 = 0$, then, with $D = 0$, all three
  $2\times 2$ minors of the augmented array with rows $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$
  vanish, so its two rows are proportional. The two equations are then scalar
  multiples of each other and describe the *same* line. **Infinitely many solutions** — every point
  of that line.

Since $D$ is either zero or not, and when zero the consistency condition either holds or fails, these
three outcomes are mutually exclusive and exhaustive. No fourth case exists. $\blacksquare$

### Worked Instance

The Hook. System (B): $x + y = 2$, $x + y = 5$. Subtract: $0 = 3$ — false, so **no solution**; here
$D = 1\cdot1 - 1\cdot1 = 0$ and $a_1 c_2 - a_2 c_1 = 1\cdot5 - 1\cdot2 = 3 \ne 0$, parallel lines of
slope $-1$ with intercepts $2$ and $5$. System (C): $x + y = 2$, $2x + 2y = 4$. Now $D = 1\cdot2 -
2\cdot1 = 0$, and $a_1 c_2 - a_2 c_1 = 1\cdot4 - 2\cdot2 = 0$, $c_1 b_2 - c_2 b_1 = 2\cdot2 - 4\cdot1
= 0$: the equations are proportional (the second is twice the first), one line, **infinitely many
solutions**. And System (A): $x+y=3,\ x-y=1$ gives $2x = 4$, $x = 2$, $y = 1$ — the lone crossing
point. Three systems, the three possible fates.

### Pitfalls

- **$0 = 0$ means infinitely many, not zero.** A terminal $0 = 0$ says the equations agree
  everywhere on a line — the *most* solutions possible, not "no solution" and not "$x = 0$."
- **$0 = (\text{nonzero})$ means none.** A false numeric ending is a contradiction, so the system is
  inconsistent; it is not "$x$ equals that number."
- **"Infinitely many" is still just one line.** The solutions fill a single line, not the whole
  plane; you must state them, e.g. as $\{(t,\, 2 - t) : t \in \RR\}$.
- **$D = 0$ alone is undecided.** A zero determinant only says the lines are parallel; whether they
  coincide (infinitely many) or stay apart (none) hinges on the *constants*. Always check consistency.
- **More equations need not mean no solutions**, and two equations need not have one — parallel
  distinct lines have none despite being a perfectly ordinary $2\times2$ system.

:::
:::

## Connections

Completes the arc begun with two-variable equations: a single equation is a line, a second equation
usually cuts it to a point, but the exceptions — parallel and coincident lines — are exactly the
"none" and "infinitely many" cases. The determinant $D = a_1 b_2 - a_2 b_1$ is the seed of the
general determinant and of the rank conditions that govern solvability of large linear systems in
linear algebra. Recognition trigger: the moment elimination collapses to a pure number statement
($0 = 0$ or $0 = 5$) rather than a value, you are reading off the "infinitely many" or "none" verdict.

## History

Solving several linear equations at once is one of the oldest problems in mathematics to be treated with a general method. The Chinese *Nine Chapters on the Mathematical Art*, compiled around $200$ BC to $100$ AD, presents its *fangcheng* rule, which arranges coefficients in a rectangular array and reduces them by column operations — essentially Gaussian elimination, two millennia before Gauss. European mathematicians rediscovered and formalized these ideas: Leibniz introduced determinants around $1693$, Cramer published his rule in $1750$, and Gauss systematized elimination in the early $1800$s while computing orbits. The whole subject was later reorganized around matrices by Cayley and Sylvester in the mid-nineteenth century, founding linear algebra. It mattered because systems of linear equations model everything from mixtures and balances to networks and economies, and their solution is one of the most-performed computations in all of science.
