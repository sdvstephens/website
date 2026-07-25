On a blackboard sit the numbers $1, 2, 3, \dots, 20$. Repeatedly erase any two, say $a$ and $b$,
and write $a + b - 1$ in their place. After $19$ such moves one number remains. Try it a few
times — you keep getting the same final number. Can it be otherwise?

## Discovery

1. Do two short runs of the process on the smaller board $\{1,2,3,4\}$, making *different*
   choices of which pair to combine each time. Record the single number you end with. Same or
   different?
2. A move replaces $a, b$ by $a + b - 1$. Track the *sum* of all numbers on the board. By exactly
   how much does the sum change in one move? Is that change the same regardless of *which* pair you
   picked?
3. So the sum is not constant — but it changes by a *fixed, predictable* amount each move.
   Starting from sum $\Sigma_0$ on the board $\{1,\dots,20\}$ and knowing the number of moves,
   what is the sum after all moves? (One number remains, so "the final sum" is that number.)
4. Compute the guaranteed final value for $\{1, \dots, 20\}$. Verify it against your small-board
   experiments in step 1 (with the count adjusted).
5. Reflect on the mechanism. You found a quantity whose value at the end was *forced*, independent
   of the choices made along the way. What property of the quantity, with respect to a single
   move, made the endpoint choice-independent?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **invariant** is a quantity attached to the states of a process that *does not change* (or
changes by a fixed, choice-independent amount) under every allowed move. A **monovariant** is a
quantity that changes *monotonically* (always increases, or always decreases) under every move.
The **invariant/monovariant method** is: to reason about a process — is a target state
reachable? must the process terminate? what is the forced outcome? — *find a quantity controlled
by every move*, then compare its value at the start and at the claimed end.

- An **invariant** proves **impossibility/forced-outcome**: if a quantity is unchanged by every
  move but differs between the start and a target state, that target is unreachable; if it is
  forced to a single value, the outcome is determined regardless of choices.
- A **monovariant** proves **termination**: a quantity that strictly decreases at each step and is
  bounded below by a discrete floor cannot decrease forever, so the process must halt.

It applies to any "repeatedly apply a move" problem — token/board games, rewriting systems,
chip-firing, sorting processes. The classic seed is **parity**: an invariant taking values in
$\{0,1\}$. Caution: a genuine invariant must be checked *for every allowed move*, not just the
convenient ones.

### Proof

Why do these two templates actually prove what they claim?

**Invariants prove unreachability / forced outcome.** Let $\Phi$ be a function on states such
that every allowed move $s \to s'$ satisfies $\Phi(s') = \Phi(s) + c$ for a *fixed* constant $c$
(the case $c = 0$ is a strict invariant). By induction on the number of moves $k$, any state
reachable from $s_0$ in $k$ moves has $\Phi = \Phi(s_0) + kc$. Hence if a target state $t$ is
reached in $k$ moves, then necessarily $\Phi(t) = \Phi(s_0) + kc$. Contrapositive: if no $k$
gives $\Phi(t) = \Phi(s_0) + kc$ (e.g. $c = 0$ and $\Phi(t) \ne \Phi(s_0)$), then $t$ is
unreachable. And if the number of moves to termination is *fixed* (as when each move reduces the
count of objects by one), $\Phi$ at the end is a *single determined value* — the outcome cannot
depend on the choices. This is exactly the Hook: with $c$ the per-move change of the sum and the
move-count fixed, the final number is forced.

*Concretely for the Hook.* A move sends the board sum $\Sigma$ to $\Sigma - a - b + (a+b-1) =
\Sigma - 1$. So $\Phi = \Sigma$ decreases by exactly $c = -1$ every move, *whatever pair is
chosen*. Starting from $\Sigma_0 = 1 + 2 + \dots + 20 = \tfrac{20\cdot 21}{2} = 210$ and making
exactly $19$ moves (each reduces the count of numbers by one, from $20$ to $1$), the final lone
number is $210 - 19 = 191$, independent of all choices.

**Monovariants prove termination.** Let $\Psi$ be integer-valued (or valued in a well-ordered
set), bounded below by some $m$, with $\Psi(s') \lt \Psi(s)$ for every allowed move $s \to s'$.
Suppose, for contradiction, the process ran forever, producing states $s_0, s_1, s_2, \dots$.
Then $\Psi(s_0) \gt \Psi(s_1) \gt \Psi(s_2) \gt \cdots$ is a strictly decreasing infinite
sequence of integers all $\ge m$. But a strictly decreasing sequence of integers bounded below is
impossible: it would eventually drop below $m$. Contradiction. Hence the process terminates after
finitely many moves. (This is well-ordering of $\mathbb{N}$ in disguise — the same principle
behind infinite descent.) $\blacksquare$

### Worked Instance

Resolving the Hook. Track the board sum $\Sigma$. Each move $a, b \mapsto a + b - 1$ changes
$\Sigma$ by $-1$, regardless of the pair chosen — so $\Sigma$ is a "changes by a fixed amount"
invariant. Initial sum: $1 + 2 + \dots + 20 = 210$. Exactly $19$ moves occur (each drops the
count of numbers by $1$, ending at one number). Therefore the final number is
$$210 - 19 = \boxed{191},$$
no matter which pairs were combined or in what order. The experiments in Discovery step 1, run on
$\{1,2,3,4\}$ (sum $10$, three moves), likewise all end at $10 - 3 = 7$.

### Pitfalls

- **Checking only some moves.** An invariant must be verified for *every* allowed move. Miss one
  move type and the "invariant" may not be invariant.
- **Invariant unchanged but proving nothing.** For impossibility you need the invariant to
  *differ* between start and target. If it agrees, you have learned nothing (it does not prove
  reachability).
- **Monovariant not bounded / not strictly monotone.** Termination needs a strict decrease *and*
  a floor (or a well-ordered range). A quantity that can plateau, or decrease without bound, fails.
- **Real-valued monovariants.** Strictly decreasing reals can go forever (e.g. $1, \tfrac12,
  \tfrac14, \dots$). Use an integer (or well-ordered) monovariant for termination.

:::
:::

## Connections

Prereqs: **found-parity** — the simplest invariant, a mod-$2$ quantity. The method is the
process-theoretic side of **meta-coloring-parity** (a coloring is an invariant coloring-count) and
shares its engine, well-ordering, with **meta-extremal** and infinite descent
(**meta-contradiction**). It is developed combinatorially in **comb-invariants**. Recognition
trigger: any "repeatedly apply this move" problem asking *is this reachable?*, *must it stop?*, or
*what is the forced result?* — search for a quantity every move controls. A perennial on olympiads
and the Putnam.
