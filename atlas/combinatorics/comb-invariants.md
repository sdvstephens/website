Tile an $8\times 8$ board with $2\times 1$ dominoes — easy. Now cut off two opposite corners,
leaving $62$ squares, and try again with $31$ dominoes. It is impossible, and no amount of clever
placement will ever work. A single number, unchanged by every domino you place, proves the whole
infinity of attempts must fail.

## Discovery

1. Color the $8\times 8$ board like a checkerboard, black and white alternating. How many black
   and how many white squares are there? Now cut off two *opposite* corners: they share a color —
   which one, and what are the two color counts on the mutilated board?
2. A single $2\times 1$ domino, placed anywhere, covers how many black and how many white squares?
   Is that split ever anything other than one-and-one?
3. Track the quantity (uncovered black squares) minus (uncovered white squares) as you lay
   dominoes one at a time. By how much does each domino change it? What does that say about
   whether the quantity can ever reach $0$, starting from the mutilated board's value?
4. Conclude something about the mutilated board without trying a single arrangement. What made the
   argument work — which feature of the colored count did every legal move preserve?
5. Name the general tool: a quantity that **never changes** under the allowed moves (or one that
   only ever moves in **one direction**). How does each type let you rule out a target
   configuration or prove a process terminates?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **invariant** is a quantity attached to the states of a process that is *unchanged* by every
allowed move. If two states have different invariant values, no sequence of moves connects them —
so an invariant proves certain configurations are **unreachable** (impossibility) without
searching. A **monovariant** (semi-invariant) is a quantity that changes *monotonically* — say
never increases — under every move; if it is also bounded and takes values in a discrete set, the
process must **terminate** (it cannot decrease forever). The archetypal invariant is a **parity**
or a **coloring count**, as with the mutilated checkerboard: the black-minus-white balance of
uncovered squares is invariant under domino placement, and its nonzero value forbids a complete
tiling.

### Proof

We prove the mutilated-board impossibility via a coloring invariant. Checkerboard-color the
$8\times 8$ board: $32$ black and $32$ white squares. Two opposite corners share a color (the
corners of a checkerboard alternate around the boundary, and *opposite* corners are two apart in
each coordinate, hence the same color); removing them leaves, say, $30$ of that color and $32$ of
the other. Define $I = (\text{uncovered squares of the majority color}) - (\text{uncovered of the
minority color})$. Initially $I = 32 - 30 = 2$. Every $2\times 1$ domino covers two adjacent
squares, which on a checkerboard are always one black and one white, so placing a domino decreases
each color's uncovered count by exactly $1$, leaving $I$ **unchanged**. A complete tiling would
leave $0$ uncovered squares of each color, i.e. $I = 0$. But $I$ is invariant at $2 \ne 0$, so no
sequence of domino placements reaches the fully-tiled state. Hence the mutilated board cannot be
tiled. $\blacksquare$

### Worked Instance

The mutilated $8\times 8$ board (resolving the Hook): with two opposite corners removed, the
invariant $I = 2 \ne 0$, while a full tiling requires $I = 0$; since every domino preserves $I$,
completion is impossible — settled without examining any arrangement. *Monovariant contrast:*
consider $n$ numbers on a board where a move erases two numbers $a,b$ and writes $a+b$; the count
of numbers strictly decreases by $1$ each move, a monovariant bounded below by $1$, so after
exactly $n-1$ moves the process must halt with a single number — termination guaranteed by
monotonicity.

### Pitfalls

- An invariant proves **impossibility**, never possibility: equal invariant values are *necessary*
  for reachability but not sufficient. Matching invariants do not guarantee a path exists.
- Choose an invariant that is genuinely **preserved by every legal move**; a quantity that most
  moves preserve but one move changes is worthless. Check all move types.
- **Parity/coloring** are the first invariants to try, but not the only ones — sums mod $k$,
  products of signs, and positional colorings all serve. The creativity is in the choice.
- For a **monovariant**, termination needs both monotonicity *and* a bound in a discrete
  (well-ordered) range; a quantity that decreases but through infinitely many values (e.g. real
  numbers shrinking toward a limit) need not terminate.

:::
:::

## Connections

Prereqs: parity arguments (`found-parity`), the simplest and most common invariant. This is the
counting/tiling-flavored treatment; the general strategy — including cleverer conserved quantities
and monovariants for termination proofs — is developed in `meta-invariants`, and the coloring
technique specifically in `meta-coloring-parity`. It stands beside the pigeonhole
(`comb-pigeonhole`) and extremal (`comb-extremal`) principles as a way to force conclusions without
brute search. Recognition trigger: a process with allowed moves where you must show some end state
is impossible, or that the process must stop — hunt for a quantity the moves leave fixed (or push
one way).
