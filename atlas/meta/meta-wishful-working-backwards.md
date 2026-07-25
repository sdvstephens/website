You have jugs of $3$ and $5$ litres, a tap, and a drain, and you must measure exactly $4$
litres. Trying moves forward from two empty jugs is a maze. But suppose the $5$-jug already
*holds* $4$. What is the very last move that could have produced that? Chase the "last move"
backwards and the puzzle almost solves itself.

## Discovery

1. You want the $5$-litre jug to end with exactly $4$ litres. It cannot fill to $4$ from the tap
   (the tap fills to $5$). So the $4$ must have appeared by *removing* $1$ litre from a full
   $5$-jug. How could a jug come to be short by exactly $1$ litre?
2. To pour off exactly $1$ litre from the $5$-jug into the $3$-jug, the $3$-jug must have room for
   exactly $1$ litre at that moment — i.e. it must already contain $2$ litres. So the new
   sub-goal is: *get $2$ litres into the $3$-jug.* Notice you have replaced the target $4$ by a
   smaller target $2$.
3. Apply the same reversal to "$2$ litres in the $3$-jug". The $3$-jug holds $2$ exactly when a
   full $3$-jug has had $1$ litre poured out — or when it received $2$ from somewhere. Push one
   more step back and describe a state you could actually reach from *empty jugs* in one or two
   forward moves.
4. Now read your chain of sub-goals from the bottom up. You have a forward recipe. Write it out
   as an ordered list of pour/fill/empty operations and check it delivers $4$.
5. Reflect on the mechanism. At each step you asked a fixed question about the *goal*, not the
   start. What was that question, and why did it shrink the problem each time?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Working backwards** (with its companion **wishful thinking**) is the discovery move: instead
of pushing forward from the hypotheses, *start from the desired conclusion and ask what would
immediately yield it* — "what is the last step?", or "if only I had $X$, I'd be done; can I get
$X$?" Repeatedly replacing a goal by a simpler *sufficient* sub-goal produces a chain that,
reversed, is the solution. It applies whenever the endpoint is more constrained than the start
(construction and reachability puzzles, "prove inequality $A \ge B$" where you massage the
target, geometric constructions, algebraic identities you verify by reducing to something
obvious). The one hazard: each backward step must be a step you can later run *forward* — a
backward step is only legitimate if it is **reversible**, i.e. the sub-goal genuinely *implies*
(or can be turned into) the goal.

### Proof

Why is working backwards a *sound* method and not just a hopeful one? Model a problem as a set
of states with allowed transitions; a "solution" is a path from a start state $s$ to a goal
state $g$. Forward search explores paths out of $s$; backward search explores paths into $g$.

**Soundness.** Suppose we build a backward chain $g = g_0 \leftarrow g_1 \leftarrow \dots
\leftarrow g_m$, where "$g_{i} \leftarrow g_{i+1}$" means *"from a state satisfying $g_{i+1}$
there is an allowed move reaching a state satisfying $g_i$."* If our start $s$ satisfies $g_m$,
then concatenating the moves $g_m \to g_{m-1} \to \dots \to g_0 = g$ is a legal forward path
from $s$ to $g$. So a backward chain that lands on the start is *automatically* a valid forward
solution. This is the whole content of the method: **a reversible backward chain is a forward
proof read in reverse.**

**Where it can fail — and the guard.** The step "$g_i \leftarrow g_{i+1}$" must assert a
*sufficient* condition: satisfying $g_{i+1}$ must *guarantee* you can reach $g_i$. If you instead
only note a *necessary* condition ("if I'm at $g_i$, I must have passed through $g_{i+1}$"), the
arrow points the wrong way and the reversed chain is not a valid construction. Concretely, in the
jug puzzle each backward step was reversible: "$3$-jug has $2$ litres" genuinely lets you pour
$1$ into a full $5$-jug to make $4$, because pouring is an allowed move and the arithmetic of
capacities works out. Every link, run forward, is a legal action — so the reversed chain is a
bona fide algorithm.

**In the inequality setting** the same guard appears as: you may transform the *goal*
$A \ge B$ into an equivalent, obviously-true statement *only through reversible (iff)
manipulations* — adding to both sides, multiplying by a known-positive quantity, squaring
non-negatives. Then the true statement, run backwards through those equivalences, re-derives
$A \ge B$. A one-way step (e.g. squaring when a side's sign is unknown) breaks reversibility and
voids the proof. $\blacksquare$

### Worked Instance

Resolving the Hook. The backward chain from the Discovery:

- **Goal:** $5$-jug holds $4$. Last move: pour from full $5$-jug into a $3$-jug that has room for
  $1$ — so the $3$-jug held $2$.
- **Sub-goal:** $3$-jug holds $2$. This arises after emptying the $3$-jug and pouring $2$ from a
  $5$-jug that held $2$ — so the $5$-jug held $2$.
- **Sub-goal:** $5$-jug holds $2$. This arises by filling the $5$-jug and pouring $3$ into an
  empty $3$-jug, leaving $2$. Reachable from empty jugs directly.

Reading bottom-up gives the forward recipe: (1) fill the $5$-jug; (2) pour into the $3$-jug until
full, leaving $2$ in the $5$-jug; (3) empty the $3$-jug; (4) pour the $2$ litres into the
$3$-jug; (5) fill the $5$-jug again; (6) top up the $3$-jug from the $5$-jug — it needs only $1$
litre — leaving exactly $\boxed{4}$ in the $5$-jug. Every step was a legal action, so the reversed
chain is a genuine solution.

### Pitfalls

- **Confusing necessary with sufficient.** Backward steps must run forward. "If done, then $X$"
  (necessary) does not give a construction; you need "$X$ suffices to finish" (sufficient).
- **Irreversible algebra.** Squaring, taking reciprocals across sign changes, or multiplying by a
  possibly-negative quantity breaks the iff. Only reversible moves let the target-manipulation
  become a proof.
- **Never reconnecting to the start.** A backward chain is worthless until it reaches a state you
  can actually begin from. Working backwards must *meet* the hypotheses.
- **Writing the final solution backwards.** Discover backwards, but *present* forwards — graders
  want the logic in implication order.

:::
:::

## Connections

Prereqs: **meta-small-cases** (a small case often shows you what the goal-shape is before you
reverse it). Wishful thinking is the engine behind many inequality proofs (manipulate the
target — see **ineq-normalization**), geometric constructions, and reachability puzzles;
"working backwards" is also the mental model for **meta-substitution-normalization** ("if only
the sum were $1$…"). Recognition trigger: the conclusion is more specific than the hypotheses,
or you catch yourself thinking "if only I had $X$, I'd be done." Ubiquitous on construction and
process problems across AMC/AIME/Putnam.
