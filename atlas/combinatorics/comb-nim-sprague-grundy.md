Three piles of stones — $3$, $5$, and $7$ — sit on the table. Two players alternate; a move is to
remove any positive number of stones from a single pile; whoever takes the last stone wins. One of
the two players can force a win no matter what the other does. Which one — and what is the winning
first move? The answer is decided not by the totals but by the *binary digits* of the pile sizes.

## Discovery

Assume **normal play**: the player who cannot move (faces the empty position) loses. Call a position
a $P$-position if the *previous* player (the one who just moved) can force a win, and an $N$-position
if the *next* player (about to move) can.

1. **One pile.** With a single nonempty pile, what should the player to move do, and who wins?
   Classify the one-pile positions as $P$ or $N$.
2. **Two equal piles.** Suppose the two piles are equal, say $(k,k)$. The player to move disturbs
   the balance; can the opponent always restore it? Describe the opponent's response and decide who
   wins. Now suppose the piles are unequal, $(a,b)$ with $a \ne b$: can the player to move create a
   balanced position? Who wins?
3. **Hunt for the invariant.** Write each pile size in binary and, for each bit position, count
   whether the number of piles with a $1$ in that position is even or odd. Compute this
   "parity-per-column" fingerprint for several positions you already know to be $P$ (from steps 1–2)
   and several you know to be $N$. What distinguishes the $P$-positions?
4. **Prove the two halves.** Let $s$ be the bitwise-XOR of the pile sizes (the column-parity
   fingerprint read as a number). Show: (a) from any position with $s \ne 0$ there is a move to a
   position with XOR $0$; (b) from any position with $s = 0$, every move lands on XOR $\ne 0$. What
   do (a) and (b), together with the terminal position, tell you?
5. **Beyond Nim.** For a general impartial game (both players have the same moves), define, for each
   position, the smallest non-negative integer that is *not* the value of any position reachable in
   one move. Compute this number for a few small games. Conjecture how it relates to $P$-positions,
   and how the value of several games played *at once* combines.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Write $a \oplus b$ for the **nim-sum**: bitwise addition of binary representations without carrying
(equivalently, bitwise XOR). Define $\operatorname{mex}(S)$, the **minimum excludant** of a set
$S \subseteq \{0,1,2,\dots\}$, as the least non-negative integer not in $S$.

- **Bouton's theorem (Nim).** A Nim position $(a_1, \dots, a_k)$ is a $P$-position (a loss for the
  player to move) if and only if $a_1 \oplus a_2 \oplus \cdots \oplus a_k = 0$.
- **Sprague–Grundy theorem.** Every position $x$ of a finite impartial game under normal play has a
  **Grundy value**
  $$g(x) = \operatorname{mex}\{\, g(y) : y \text{ reachable from } x \text{ in one move}\,\},$$
  and $x$ is a $P$-position if and only if $g(x) = 0$. Moreover a position is equivalent to a single
  Nim pile of $g(x)$ stones, and the Grundy value of a **sum** of independent games (move in exactly
  one component) is the nim-sum of the components' Grundy values:
  $$g(G_1 + G_2 + \cdots + G_n) = g(G_1) \oplus g(G_2) \oplus \cdots \oplus g(G_n).$$

### Proof

**Bouton's theorem.** The terminal position $(0,\dots,0)$ has nim-sum $0$ and is a loss for the
player to move, consistent with "$P \iff$ XOR $0$." It remains to prove the two closure claims.

*From XOR $= 0$, every move breaks it.* Suppose $a_1 \oplus \cdots \oplus a_k = 0$ and a player
changes pile $i$ from $a_i$ to $a_i' \ne a_i$. The new nim-sum is
$$(a_1\oplus\cdots\oplus a_k)\oplus a_i \oplus a_i' = 0 \oplus a_i \oplus a_i' = a_i \oplus a_i',$$
which is nonzero because $a_i' \ne a_i$. So no move preserves XOR $0$.

*From XOR $= s \ne 0$, some move reaches $0$.* Let $d$ be the position of the highest set bit of
$s$. Since that bit of $s$ is $1$, an odd number of piles have a $1$ there; pick such a pile $a_i$.
Then $a_i \oplus s \lt a_i$: the two agree above bit $d$, and at bit $d$ the value drops from $1$ to
$0$. Move pile $i$ to $a_i' = a_i \oplus s$ (legal, since $a_i' \lt a_i$). The new nim-sum is
$s \oplus a_i \oplus a_i' = s \oplus a_i \oplus (a_i \oplus s) = 0$.

By these two facts, the player facing XOR $\ne 0$ can always hand the opponent XOR $0$, and the
opponent is forced to return XOR $\ne 0$; since pile sizes strictly decrease, the game ends, and the
player who kept giving away XOR $0$ makes the last move. Hence XOR $0$ positions are exactly the
losses for the mover. $\blacksquare$

**Sprague–Grundy.** Existence of $g$ is by well-founded recursion: positions form a finite acyclic
"can move to" digraph, so $g(x) = \operatorname{mex}\{g(y)\}$ is defined by working up from terminal
positions (where the option set is empty and $\operatorname{mex}\varnothing = 0$).

*Claim: $x$ is a $P$-position iff $g(x)=0$.* If $g(x) = 0$, then $0$ is excluded from the option
values, so every option $y$ has $g(y) \ne 0$ — an $N$-position by induction; the mover can only hand
the opponent $N$-positions, so $x$ is a $P$-position. If $g(x) = m \gt 0$, then by definition of mex
every value $0,1,\dots,m-1$ *is* achieved by some option; in particular some option $y$ has
$g(y) = 0$, a $P$-position, so the mover wins by going there — $x$ is an $N$-position. Since $g = 0$
matches exactly the $P$-positions, a game with Grundy value $g$ behaves, with respect to who wins,
like a single Nim pile of size $g$ (whose Grundy value is $g$, as $\operatorname{mex}\{0,1,\dots,
g-1\} = g$).

*The sum rule.* It suffices to prove $g(G + H) = g(G) \oplus g(H)$ for two components (then iterate).
Let $a = g(G)$, $b = g(H)$, and $c = a \oplus b$. We show the position $(G,H)$ has Grundy value $c$
by verifying the two mex requirements. First, *no option of $(G,H)$ has Grundy value $c$*: a move
alters exactly one component, changing $a$ to some $a' \ne a$ (or $b$ to $b' \ne b$); by induction
the new Grundy value is $a' \oplus b$ (resp. $a \oplus b'$), and $a' \oplus b = a \oplus b = c$ would
force $a' = a$, contradiction. Second, *every value $0 \le t \lt c$ is the Grundy value of some
option*: pick the highest bit where $t$ and $c$ differ; since $t \lt c$ that bit is $1$ in $c$ and
$0$ in $t$. As $c = a \oplus b$, that bit is set in exactly one of $a, b$, say $a$; then
$t \oplus b \lt a$ (same leading-bit argument as in Bouton), so by induction (the Grundy value $a$
component can move to a sub-position of value $t \oplus b$) there is a move in $G$ producing Grundy
value $t \oplus b$, and the combined position then has value $(t\oplus b)\oplus b = t$. Thus the
option values are exactly a set whose mex is $c$, so $g(G+H) = c = a \oplus b$. Applying Bouton to the
equivalent Nim piles of sizes $g(G_i)$ finishes the general sum. $\blacksquare$

### Worked Instance

**Resolve the Hook: piles $(3,5,7)$.** In binary, $3 = 011_2$, $5 = 101_2$, $7 = 111_2$. Nim-sum:
$$3 \oplus 5 \oplus 7 = 011 \oplus 101 \oplus 111 = 001_2 = 1 \ne 0.$$
The nim-sum is nonzero, so this is an $N$-position: **the first player wins.** To find the winning
move, $s = 1$; its highest (only) set bit is bit $0$. Choose a pile whose bit $0$ is set — pile $3$
works, and $3 \oplus 1 = 2 \lt 3$. Move that pile from $3$ to $2$, leaving $(2,5,7)$:
$$2 \oplus 5 \oplus 7 = 010 \oplus 101 \oplus 111 = 000_2 = 0.$$
Now the opponent faces XOR $0$ and is lost; mirror them back to XOR $0$ every turn to win.

### Pitfalls

- **Normal vs. misère play.** Bouton's rule is for *normal* play (last move wins). In **misère**
  Nim (last move *loses*) the winning strategy differs and only diverges when all piles are size
  $\le 1$; do not blindly apply XOR $0$.
- **Nim-sum is XOR, not addition.** $3 \oplus 5 = 6$, not $8$. Carrying is exactly what you must
  *not* do.
- **The sum rule uses XOR of Grundy values, not mex.** Mex defines a *single* game's value; combining
  independent games is nim-addition of those values.
- **$\operatorname{mex}\varnothing = 0$.** A terminal position has no options, so its Grundy value is
  $0$ — it is a loss for the mover, as it should be.
- **Only impartial games.** Sprague–Grundy needs both players to share the same move set; partizan
  games (like most of chess or checkers) are governed by the richer Conway theory, not a single
  integer value.

:::
:::

## Connections

Prereq: strategy games and $P/N$-position analysis (`comb-strategy-games`). Nim is the universal
impartial game: Sprague–Grundy says *every* such game is secretly a Nim pile, so nim-values, XOR, and
the mex recursion analyze staircase Nim, Turning Turtles, Green Hackenbush, subtraction games, and
countless olympiad "who wins?" problems. Recognition trigger: two players, alternating, symmetric
moves, last move decides — compute Grundy values and take nim-sums. Appears on the Putnam and in
olympiad game theory; the pairing/mirroring idea also echoes invariance arguments.

## History

Nim was given its complete mathematical theory by Charles L. Bouton, a Harvard instructor, in his
1901–1902 *Annals of Mathematics* paper "Nim, a Game with a Complete Mathematical Theory," where the
binary-XOR criterion first appeared; the name likely derives from the archaic English "nim" (to
steal) or the German imperative *nimm!* ("take!"). The leap from this one game to *all* impartial
games was made independently by Roland Sprague (1935) and Patrick Michael Grundy (1939), each showing
that every position carries a single Nim-equivalent value — the theorem now bearing both their names.
John Horton Conway vastly generalized the picture in *On Numbers and Games* (1976), embedding
impartial games in the surreal numbers, and the encyclopedic *Winning Ways for Your Mathematical
Plays* (Berlekamp, Conway, Guy, 1982) turned the subject into a sprawling, playful discipline. The
theory mattered because it revealed that a whole universe of superficially different games collapses
to arithmetic in base two.
