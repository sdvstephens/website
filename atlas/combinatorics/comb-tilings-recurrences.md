Count the ways to tile a $1\times n$ strip using $1\times 1$ squares and $1\times 2$ dominoes:
for $n = 1,2,3,4,5$ you get $1, 2, 3, 5, 8$. Those are the Fibonacci numbers — and they appear
not by coincidence but because the *last tile* forces a choice with exactly two branches.

## Discovery

1. Let $T_n$ be the number of tilings of a $1\times n$ strip by squares and dominoes. Find
   $T_1$, $T_2$, and $T_3$ by listing tilings directly.
2. Take any tiling of the $1\times n$ strip and look only at the tile covering the **last** cell
   (the right end). What are the two possibilities for that tile, and how much of the strip does
   each one leave uncovered to its left?
3. Each of those two possibilities reduces the problem to tiling a *shorter* strip whose length
   you found in (2). The two cases cover every tiling and never overlap (a tiling has one
   definite last tile). Which counting rule lets you combine the two case counts, and what
   equation relating $T_n$ to shorter $T$'s results?
4. Pin down the small cases needed to launch that equation. What are $T_1$ and $T_2$, and why do
   you need *two* starting values rather than one?
5. Compare your equation and starting values to the Fibonacci rule. What is the exact
   relationship between $T_n$ and the Fibonacci numbers?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $T_n$ be the number of tilings of a $1\times n$ strip with $1\times 1$ squares and
$1\times 2$ dominoes. Then
$$T_n = T_{n-1} + T_{n-2}\quad(n \ge 3), \qquad T_1 = 1,\ T_2 = 2.$$
Hence $T_n = F_{n+1}$, where $F_1 = F_2 = 1$ and $F_{n} = F_{n-1}+F_{n-2}$ are the Fibonacci
numbers. More broadly, **any** combinatorial structure whose configurations split into disjoint
cases according to a "first (or last) move," each reducing to a smaller instance of the same
problem, yields a linear recurrence — this "condition on the first move" is the general method,
of which tilings are the archetype.

### Proof

Classify each tiling of the $1\times n$ strip by the tile covering its rightmost cell; the two
cases are disjoint and exhaustive since every tiling has a unique last tile.

*Case 1: the last cell is covered by a square.* Removing that square leaves a tiling of the
$1\times(n-1)$ strip, and this removal is a bijection between such tilings and all tilings of the
$1\times(n-1)$ strip. So this case contributes $T_{n-1}$.

*Case 2: the last two cells are covered by a domino.* Removing it leaves a tiling of the
$1\times(n-2)$ strip, again a bijection. This case contributes $T_{n-2}$.

By the addition principle over the two disjoint cases, $T_n = T_{n-1}+T_{n-2}$ for $n\ge 3$.
Direct enumeration gives $T_1 = 1$ (one square) and $T_2 = 2$ (two squares, or one domino). These
match $F_2$ and $F_3$; since $T$ and the shifted Fibonacci sequence share both the recurrence and
two consecutive initial values, they agree everywhere, so $T_n = F_{n+1}$. $\blacksquare$

### Worked Instance

Compute $T_5$: with $T_1=1,\ T_2=2$,
$$T_3 = T_2+T_1 = 3,\quad T_4 = T_3+T_2 = 5,\quad T_5 = T_4+T_3 = 8,$$
matching the Hook's $1,2,3,5,8$ and indeed $F_2,F_3,F_4,F_5,F_6$. So a $1\times 5$ strip has $8$
square-and-domino tilings, and $T_5 = F_6 = 8$.

### Pitfalls

- **Two initial values are mandatory** for a second-order recurrence; one is not enough to
  determine the sequence. Compute $T_1$ and $T_2$ honestly by listing.
- **Indexing/offset with Fibonacci is delicate.** Because conventions for $F_n$ differ, verify the
  shift ($T_n = F_{n+1}$ here) against a couple of small cases rather than assuming.
- The cases must be **disjoint and exhaustive**. Conditioning on the last tile works because every
  tiling has exactly one last tile; a sloppy split (e.g. by "whether a domino appears") can
  double-count or miss tilings.
- The recurrence counts *configurations*, not a closed form. To get an explicit $T_n$ you still
  need to solve the recurrence (a later topic); the structural argument only produces the relation.

:::
:::

## Connections

Prereqs: the addition principle (`comb-add-mult`) — the recurrence is just "add the disjoint
first-move cases." This node is the combinatorial birthplace of the Fibonacci numbers (elaborated
in `ser-fibonacci`) and of linear recurrences generally (`ser-linear-recurrences` gives closed
forms). Generating functions (`comb-generating-functions`) package such recurrences into a single
rational function. Recognition trigger: a counting problem where fixing the "first (or last)
piece" cleanly reduces to one or more smaller copies of the same problem — write down the
recurrence before reaching for a formula.
