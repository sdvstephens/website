On an island live $13$ red, $15$ green, and $17$ blue chameleons. Whenever two chameleons of *different*
colors meet, both change to the *third* color. The islanders want every chameleon to end up the same color.
They try meeting after meeting, and it never quite works. Is monochrome unreachable — always?

## Discovery

1. Track the single quantity $(r - g) \bmod 3$, where $r,g,b$ are the current populations. What is its value
   at the start, $r=13,\ g=15$?
2. A red–green meeting sends $(r,g,b) \mapsto (r-1,\,g-1,\,b+2)$; a red–blue meeting sends
   $(r,g,b)\mapsto(r-1,\,g+2,\,b-1)$; a green–blue meeting sends $(r,g,b)\mapsto(r+2,\,g-1,\,b-1)$. For each
   of the three meeting types, by how much does $(r-g)$ change *modulo $3$*?
3. In any state where all chameleons share one color, two of $r,g,b$ are $0$ and the third is the total. What
   is $(r-g)\bmod 3$ at each such all-one-color state?
4. Line up step 1's value, the change from step 2, and step 3's requirement. Can a monochrome state ever be
   reached?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The invariance principle.** When a problem describes a *process* — an algorithm grinding to an output, a
solitaire of moves, a two-player game — the first strategic move is to **hunt for an invariant**: a quantity
that *every* legal step leaves unchanged (or shifts by a fixed, choice-independent amount). An invariant
partitions states into classes; states in different classes are mutually unreachable, so it settles "can we
get from here to there?" at a glance. In a game, a quantity preserved by *one* player's moves but broken by
the other's identifies a set of safe positions and hands that player a winning strategy. The whole art is the
*search*: given any process, ask what is conserved.

This is the heuristic stance built on top of **meta-invariants** (which supplies the underlying reachability
and termination theorems). The emphasis here is the *first-move discipline* for algorithm- and game-flavored
problems: before computing anything, look for what cannot change.

### Proof

Why does spotting an invariant settle these questions?

**Reachability.** Let $\Phi$ be a function on states with $\Phi(s') = \Phi(s)$ for every legal move
$s \to s'$. By induction on the number of moves, every state reachable from $s_0$ has $\Phi = \Phi(s_0)$: true
after $0$ moves, and if it holds after $n$ moves then the $(n{+}1)$-th move preserves $\Phi$. Contrapositive:
if $\Phi(t) \ne \Phi(s_0)$, then $t$ is unreachable from $s_0$, and (by symmetry of the argument) $s_0$ is
unreachable from $t$ — the two lie in different classes. This is exactly the Hook: $\Phi=(r-g)\bmod 3$ is
unchanged by every meeting, so states with different $\Phi$-values cannot be linked.

**Games.** In an alternating game, call a set $W$ of positions a *winning invariant set* for the player-to-move
if (i) every terminal loss for the opponent lies in $W$, and (ii) from any position in $W$ that player has a
move landing the opponent in a position from which *every* reply returns to $W$. Then, by induction on the
game's (finite) length, the player who can always re-enter $W$ never runs out of moves before the opponent
does, and wins. The invariant is membership in $W$: the player preserves "opponent faces a $W$-position," and
the opponent cannot escape it. $\blacksquare$

### Worked Instance

**Resolving the Hook.** Let $\Phi = (r-g)\bmod 3$. At the start $r-g = 13-15 = -2 \equiv 1 \pmod 3$. Each
meeting changes $r-g$ by $0$, $-3$, or $+3$ — all $\equiv 0 \pmod 3$ — so $\Phi \equiv 1$ forever. A
monochrome state has two populations equal to $0$ and one equal to $45$; in every case $r-g \in \{45,\,-45,\,0\}
\equiv 0 \pmod 3$. Since $1 \ne 0$, no monochrome state is reachable: the islanders can never make all
chameleons one color.

**A game.** From a pile of $2024$ coins, two players alternately remove $1$, $2$, or $3$ coins; the player
taking the last coin wins. Who should win? Track $(\text{pile size}) \bmod 4$. The invariant a winner
maintains is "leave the opponent a pile $\equiv 0 \pmod 4$": whatever the opponent removes ($1,2,3$), you
remove $4$ minus that, restoring a multiple of $4$ and marching the pile down through $\dots,8,4,0$. Since
$2024 \equiv 0 \pmod 4$ *already*, the first player is stuck handing the second player a multiple of $4$; the
**second player wins** by this strategy.

### Pitfalls

- **Check every move type.** The chameleon invariant must survive all three meeting kinds; a quantity
  preserved by only some moves is not invariant.
- **Invariant equal $\ne$ reachable.** Matching $\Phi$-values is necessary, not sufficient: it does not by
  itself prove a target is reachable, only that differing values forbid it.
- **Game invariants must be re-enterable.** For a winning strategy the safe set must be one the player can
  always step back into, from *any* opponent reply — verify closure, not just the seed position.
- **Mod-choice matters.** The right modulus (here $3$ for chameleons, $4$ for the coin game) is part of the
  discovery; the wrong one conserves nothing useful.

:::
:::

## Connections

Prereq: **meta-invariants**, which proves the reachability and termination facts this principle deploys; here
they are recast as a *search heuristic* for algorithm and game problems. Its cousins are **meta-coloring-proofs**
(a coloring is a counting invariant) and **meta-monovariants** ideas for termination, and it feeds **comb-invariants**
and combinatorial game theory (Nim, Sprague–Grundy). Recognition trigger: any "repeatedly apply this rule /
who wins / can this configuration arise?" problem — before calculating, ask what quantity every move leaves
alone. A staple of the Putnam and of olympiad combinatorics.

## History

The label *invariance principle* was popularized by Arthur Engel, who opened his 1998 *Problem-Solving
Strategies* with it, distilling a heuristic long practiced in the Soviet and Eastern-European olympiad
tradition where "find the invariant" was a training refrain. Its intellectual root is the physicist's
conservation law, given its deepest form by Emmy Noether's 1918 theorem tying conserved quantities to
symmetries. Individual puzzles that crystallize the idea are older folklore: the color-changing chameleons
circulated widely in competition circles, and the famous $15$-puzzle — whose unsolvable positions were
explained by a parity invariant by William Johnson and William Story in 1879 after Sam Loyd's craze — is the
archetypal "reachability by invariant" result. Engel's contribution was pedagogical: turning a scattered habit
into a named, teachable first move.
