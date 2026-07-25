Twenty-one stones sit on the table. Two players alternate removing one, two, or three stones, and
whoever takes the last stone wins. With best play the *first* player always wins — but only if the
opening move is exactly right. The secret is a single number the winner keeps restoring: a multiple of
four.

## Discovery

1. A pile of $n$ stones; players alternate removing $1$, $2$, or $3$; the player who takes the last
   stone wins. Play out the smallest piles by hand. For each $n\in\{0,1,2,3,4,5\}$, decide whether the
   player *about to move* wins or loses when both sides play perfectly.
2. State the recursive rule you used. A position is a loss for the mover exactly when *every* legal
   move hands the opponent a position of which type; it is a win for the mover exactly when *some*
   legal move hands the opponent a position of which type?
3. Look at the losing-for-the-mover piles from step $1$. What arithmetic property do their sizes share?
   Conjecture which $n$ are losing positions.
4. Prove the conjecture is a genuine invariant: show that from a losing position every legal move
   *breaks* the property, and from any non-losing position *some* legal move *restores* it. What
   explicit winning strategy does this hand the player who faces a non-losing pile?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Classify every position of a two-player, perfect-information game with no draws:

- a **P-position** (Previous player wins, i.e. the player *to move* loses), and
- an **N-position** (Next player — the mover — wins).

The recursive law: a position is a **P-position iff every move leads to an N-position**, and an
**N-position iff some move leads to a P-position**; terminal positions where the mover cannot move are
P-positions (under "last move wins"). The winning strategy is to *always move to a P-position*.

For the subtraction game "remove $1$, $2$, or $3$, last stone wins," the P-positions are exactly the
multiples of $4$:
$$n\text{ is a loss for the mover}\iff n\equiv0\pmod 4.$$

### Proof

Work by strong induction on $n$, proving that $n\equiv0\pmod4$ are precisely the P-positions.

*Base.* $n=0$: the mover cannot move and has lost, so $0$ (a multiple of $4$) is a P-position.

*Invariant, two directions.* Suppose the claim holds for all piles smaller than $n$.

- If $n\equiv0\pmod4$ and $n \gt 0$: any legal move removes $1$, $2$, or $3$, leaving
  $n-1,n-2,$ or $n-3$, none divisible by $4$. By the inductive hypothesis each is an N-position, so
  *every* move from $n$ leads to an N-position; hence $n$ is a P-position.
- If $n\not\equiv0\pmod4$: write $n\equiv r\pmod4$ with $r\in\{1,2,3\}$. Removing $r$ stones (a legal
  move, since $1\le r\le3$) leaves $n-r\equiv0\pmod4$, a P-position by hypothesis; so *some* move from
  $n$ reaches a P-position, and $n$ is an N-position.

This is exactly the P/N recursion, so the induction closes. The strategy is explicit: from
$n\not\equiv0$, remove $n\bmod4$ stones to leave a multiple of $4$; the opponent is then forced off the
multiple of $4$, and you restore it every turn until you take the last stone. $\blacksquare$

### Worked Instance

The Hook: $n=21$. Since $21=4\cdot5+1$, we have $21\equiv1\pmod4$ — an N-position, so the first player
wins. The correct opening is to remove $1$ stone, leaving $20\equiv0\pmod4$. Whatever the opponent
removes ($1$, $2$, or $3$), the first player removes $4$ minus that, keeping the pile at a multiple of
$4$: $20\to16\to12\to8\to4\to0$. The first player takes the last stone.

### Pitfalls

- **Fix the winning convention first.** "Last move wins" (normal play) makes the empty pile a
  P-position; "last move *loses*" (misère play) flips small cases and can change the answer.
- **P means the mover *loses*.** The labels track the player *to move*, so a P-position is *bad* for
  the person whose turn it is — a common sign flip.
- **The invariant must be two-sided.** You must show both that P-positions only move to N-positions
  *and* that every N-position can reach some P-position; proving one direction is not a strategy.
- **The modulus depends on the move set.** "Remove $1$–$3$" gives mod $4$; "remove $1$–$k$" gives mod
  $k+1$; a different allowed set needs its P-positions recomputed, not copied.

:::
:::

## Connections

Strategy games marry the invariant mindset (`comb-invariants`) — a quantity the winner preserves — with
the state-graph thinking of first-step analysis (`comb-states-random-walks`), except the "transitions"
are chosen adversarially rather than at random, so backward induction replaces averaging. This is the
gateway to Nim and the Sprague–Grundy theory of impartial games. Recognition trigger: a two-player,
alternating, no-chance, no-draw game — hunt for the invariant (often a residue or an XOR) that
characterizes the positions from which the mover is doomed, and always move onto it.
