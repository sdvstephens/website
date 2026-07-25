Take an $8\times 8$ chessboard and cut off two *opposite corner* squares, leaving $62$ squares.
You have $31$ dominoes, each covering two adjacent squares. Try to tile the mutilated board.
You will fail every time. Is it just bad luck, or is it impossible — and how could you *prove*
impossibility without checking every arrangement?

## Discovery

1. Color the full $8\times 8$ board like a chessboard: alternating black and white, adjacent
   squares differing in color. How many black and how many white squares does the full board
   have?
2. A domino covers two *adjacent* squares. On this coloring, what colors do the two squares under
   any single domino always have? (Check a horizontal and a vertical placement.)
3. Suppose $31$ dominoes tiled some region. Counting by color, how many black and how many white
   squares must that region contain? Express the relationship between #black and #white forced by
   *any* domino tiling.
4. Now the two removed opposite corners. On a chessboard, opposite corners share a color — which
   one? After removing them, recount black and white squares on the mutilated board.
5. Compare the color counts of the mutilated board (step 4) against the constraint any domino
   tiling must satisfy (step 3). What contradiction appears — and why does it settle
   impossibility for *all* arrangements at once?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **coloring argument** proves a covering/tiling **impossibility** by assigning a color (or a
number) to each cell so that *every allowed tile covers a fixed, balanced pattern of colors*.
If the region's color counts violate the balance every tiling must produce, no tiling exists —
regardless of arrangement. **Parity** is the two-color special case: color with $\{0,1\}$ (or
black/white) and argue about the *evenness* of a count. The technique applies to
domino/polyomino tilings, to "cover the board with pieces of shape $X$" problems, and more
broadly to any covering where a well-chosen coloring makes each piece's contribution rigid.
The governing idea: **a coloring is an invariant** — the color-count balance is preserved by
each tile, so a region failing that balance cannot be built from the tiles. Caution: the
coloring must be chosen so that *every* orientation/placement of a tile has the *same* color
signature; a coloring under which a tile's color-count varies proves nothing.

### Proof

Why does a coloring mismatch rigorously rule out *all* tilings? The argument is a counting
invariance, then a contradiction.

**The tile balance is an invariant.** Fix the standard chessboard coloring, and for a domino let
its *signature* be the multiset of colors it covers. Because adjacent squares always differ in
color, *every* domino — horizontal or vertical, anywhere — covers exactly one black and one white
square. So if a region $R$ is partitioned into $k$ dominoes, summing signatures gives
$$\#\{\text{black in } R\} = k = \#\{\text{white in } R\},$$
i.e. **any domino-tileable region has equal black and white counts.** This equality is forced by
the tiles alone; it is the invariant.

**The mutilated board violates it.** The full $8\times 8$ board has $32$ black and $32$ white
squares. The two removed corners are diagonally opposite, hence the *same* color — say both
black. The mutilated board therefore has $32 - 2 = 30$ black and $32$ white squares:
$$\#\text{black} = 30 \ne 32 = \#\text{white}.$$

**Contradiction.** If any tiling by $31$ dominoes existed, the invariant would force
$\#\text{black} = \#\text{white}$ on the mutilated board. But $30 \ne 32$. No tiling can exist.
Crucially this dispatches *every* possible arrangement simultaneously: we never enumerated
placements — we showed a numerical obstruction that *no* placement can overcome, because each
domino's contribution to the balance is fixed. $\blacksquare$

### Worked Instance

Resolving the Hook. Color the $8\times 8$ board as a chessboard. Every domino covers one black
and one white square, so $31$ dominoes cover $31$ black and $31$ white — equal counts. The
removed opposite corners are the same color (both black), leaving $30$ black and $32$ white on
the mutilated board. Since $30 \ne 32$, the balance a tiling requires is impossible, so the
mutilated board **cannot** be tiled by dominoes. (Contrast: remove one black and one white
square instead — Gomory's theorem says such a board *is* always tileable, showing the coloring
count is exactly the obstruction.)

### Pitfalls

- **A coloring that doesn't fix the tile's signature.** The whole method dies unless *every*
  placement/orientation of a tile has the *same* color count. Design the coloring around the tile.
- **Coloring proves impossibility, not possibility.** A balanced count is *necessary*, not
  sufficient. Passing the color test does not guarantee a tiling exists (you then need a
  construction).
- **Only two colors when more are needed.** Some pieces (e.g. straight trominoes, T-tetrominoes)
  require a $3$- or $4$-coloring or a weighted coloring; a checkerboard alone won't catch them.
- **Miscounting the removed cells' colors.** The key fact in the Hook is that *opposite* corners
  share a color. Adjacent corners differ — a different problem entirely.

:::
:::

## Connections

Prereqs: **found-parity** — parity is the two-color coloring. A coloring is a special
**invariant** (see **meta-invariants**): the color balance is a conserved quantity, so this node
is the tiling-specialized face of that method. It powers polyomino problems in
**comb-invariants** and tiling recurrences (**comb-tilings-recurrences**). Recognition trigger:
"can this region be tiled/covered by these pieces?" — especially when a tiling *seems* impossible;
reach for a coloring whose count each piece respects. A recurring AMC/AIME and olympiad theme.
