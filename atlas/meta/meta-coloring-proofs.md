Take an ordinary $8\times 8$ board and pry off the two squares at diagonally opposite corners, leaving
$62$ squares. You hold $31$ dominoes, each covering two edge-adjacent squares. Cover the board. Every
attempt jams near the end with one square stranded far from its partner. Is that just clumsy play, or is
something forbidding it?

## Discovery

1. Color the $62$-square board in the ordinary black/white checkerboard pattern. Count the black squares
   and the white squares *separately*, remembering that the two removed corners were a matched diagonal
   pair. Are the two totals equal?
2. Now drop a single domino anywhere on the board, horizontally or vertically, in any position. How many
   black squares and how many white squares does that one domino always cover?
3. If $31$ dominoes tiled the whole board, the black squares covered and the white squares covered are each
   forced to a definite number. Write down what those two numbers would have to be, using step 2. Set them
   beside your counts from step 1. What conclusion is unavoidable?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Coloring argument (impossibility by a color invariant).** To prove that a region cannot be tiled by a
given set of pieces — or, more generally, that a configuration cannot be reached by a given set of moves —
assign to each cell a *color* from a small palette so that **every legal piece, in every position and
orientation, covers a fixed color-signature**: the same count of each color no matter where it lands. Then
in any tiling by $m$ pieces the number of cells of each color is forced to be $m$ times the per-piece count.
If the region's *actual* color counts cannot be written that way — with one single value of $m$ across all
colors — no tiling exists.

The black/white checkerboard is the first instance (a $2$-coloring). When two colors cannot separate a
piece from its rotations, use a **mod-$k$ coloring**: color cell $(i,j)$ by $(i+j)\bmod k$, or by column
index $\bmod k$, tuned so the target piece still has a fixed signature. Coloring gives a *necessary*
obstruction: it can prove impossibility, never possibility.

### Proof

Why is the recipe valid? It is a counting invariant in disguise.

Fix a palette of colors $1,2,\dots,k$ and suppose every legal piece covers exactly $c_j$ cells of color $j$,
*independent of where and how it is placed*. Let the region contain $N_j$ cells of color $j$. Any tiling
uses some number $m$ of pieces, and each contributes exactly $c_j$ cells of color $j$, so the tiling covers
exactly $m\,c_j$ cells of color $j$. But a tiling covers every cell once, so
$$N_j = m\,c_j \qquad \text{for every color } j,$$
with **one and the same** $m$. If there is no nonnegative integer $m$ satisfying all $k$ equations
simultaneously, a tiling is impossible. $\blacksquare$

*The Hook, concretely.* On the checkerboard the two diagonally opposite corners share a color, so removing
them deletes two squares of the *same* color: the board has $32$ of one color and $30$ of the other. Every
domino covers exactly one square of each color ($c_{\text{black}}=c_{\text{white}}=1$), so $31$ dominoes
cover $31$ black and $31$ white. But $31\ne 32$ and $31\ne 30$: no value of $m=31$ reconciles both counts,
so no tiling exists.

### Worked Instance

**Resolving the Hook.** Black squares: $32$. White squares: $30$. A domino always covers one of each. If
$31$ dominoes tiled the mutilated board they would cover $31$ black and $31$ white squares — but the board
offers $32$ and $30$. The mismatch is fatal: the tiling cannot exist, no matter how cleverly you play.

**A mod-$k$ example where two colors fail.** Can a $10\times 10$ board be tiled by $1\times 4$ tiles? Here a
checkerboard is useless (a $1\times4$ tile covers two of each color, always balanced). Instead color cell
$(i,j)$ with $(i+j)\bmod 4$, using $i,j\in\{0,\dots,9\}$. A horizontal or vertical $1\times 4$ tile covers
four consecutive cells, so it hits each of the four colors $\{0,1,2,3\}$ exactly once — a fixed signature
$c_0=c_1=c_2=c_3=1$. Counting the board, the four color classes have sizes $25,26,25,24$. A tiling would use
$m=100/4=25$ tiles and thus cover exactly $25$ cells of *each* color — impossible, since color $1$ has $26$
cells and color $3$ has $24$. So no such tiling exists.

### Pitfalls

- **Signature must be fixed for every orientation.** If a piece can cover different color-counts depending
  on placement, the argument collapses. Verify all rotations/reflections.
- **A matching coloring proves nothing.** If your chosen colors *do* balance out into a consistent $m$, you
  have not proved a tiling exists — coloring is a necessary condition only.
- **Wrong palette.** The checkerboard cannot see obstructions that a mod-$3$ or mod-$4$ coloring exposes.
  Choose $k$ and the coloring so the target piece has a rigid, informative signature.

:::
:::

## Connections

Prereqs: **meta-coloring-parity** (the $2$-color, mod-$2$ seed) and **comb-add-mult** (counting cells by
class). This is the process-agnostic sibling of **meta-invariants**: a coloring is just an invariant that
counts colors, so impossibility follows the same "forced count" logic. It leans on **comb-pigeonhole** when
the surviving counts must collide, and generalizes to **tiling groups** in advanced combinatorics.
Recognition trigger: any tiling, covering, or "can these pieces fill/reach this?" question — especially one
that resists direct search. Reach for a coloring whose pieces all wear the same colors. Perennial on the
Putnam, AMC/AIME, and olympiad combinatorics.

## History

The mutilated-chessboard puzzle was posed by the philosopher Max Black in his 1946 book *Critical Thinking*
and spread widely after Martin Gardner featured it and after Solomon Golomb and others used it to showcase
the parity-coloring idea; the crisp domino argument is often credited to Ralph Gomory, whose Hamiltonian-cycle
version makes the impossibility vivid. Coloring arguments as a general impossibility tool are older folklore
in recreational and olympiad mathematics, with mod-$k$ colorings appearing throughout Soviet-era problem
collections and codified as a named technique in Arthur Engel's *Problem-Solving Strategies* (1998). The deep
theory behind "which regions can be tiled" was later built by N. G. de Bruijn (on bricks and boxes) and by
John Conway and Jeffrey Lagarias, who introduced tiling groups in 1990 to explain exactly when such coloring
obstructions are complete. What began as a party puzzle thus seeded a genuine chapter of combinatorics.
