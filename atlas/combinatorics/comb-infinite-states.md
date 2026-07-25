Two players take turns rolling one die; the first to roll a six wins, and the first player goes first.
The game could, in principle, run forever. Yet the first player's winning chance is a clean $6/11$ —
found either by summing an unending series or by noticing the game repeats itself.

## Discovery

1. Players $A$ and $B$ alternately roll a fair die, $A$ first; the first six wins. $A$ wins outright on
   the opening roll with probability $\tfrac16$. For $A$ to instead win on his *second* turn, what has
   to happen on the first three rolls (two misses by $A$ and $B$, then $A$'s six), and with what
   probability?
2. Write $A$'s total winning probability as an infinite sum, one term for each round in which $A$ could
   win. Look at the ratio of each term to the one before it — is it constant, and what is it?
3. Sum that geometric series to get $\Pr[A\text{ wins}]$.
4. Now avoid the series. After $A$ and $B$ both miss once — probability $(\tfrac56)^2$ — the position is
   identical to the start, with $A$ to roll. Let $p=\Pr[A\text{ wins}]$ and write a one-line equation
   expressing $p$ in terms of itself; solve it and compare with step $3$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Infinite-state technique.** When a probabilistic process can continue over infinitely many rounds,
compute the target probability either by

- **summing a geometric series** over the round in which the event first occurs, or
- **exploiting self-similarity**: if after a full "no-decision" cycle (probability $r$) the position
  resets, then $p=a+rp$, whence $p=\dfrac{a}{1-r}$,

where $a$ is the probability of succeeding within the first cycle. The two agree because
$a+ar+ar^2+\cdots=\dfrac{a}{1-r}$ for $|r| \lt 1$. For the alternating die game,
$$\Pr[A\text{ wins}]=\frac{1/6}{1-(5/6)^2}=\frac{6}{11},\qquad \Pr[B\text{ wins}]=\frac{5}{11}.$$

### Proof

Let $q=\tfrac56$ be a single miss and $a=\tfrac16$ a single six. Player $A$ wins exactly when the first
six appears on an odd roll (rolls $1,3,5,\dots$): this needs an even number $2j$ of misses followed by
$A$'s six, with probability $q^{2j}a$ for $j=0,1,2,\dots$. These events are disjoint, so
$$\Pr[A\text{ wins}]=\sum_{j=0}^{\infty} q^{2j}a=a\sum_{j=0}^{\infty}(q^2)^j=\frac{a}{1-q^2},$$
using the geometric-series sum with ratio $q^2=(5/6)^2 \lt 1$ (so the series converges). Plugging in,
$\dfrac{1/6}{1-25/36}=\dfrac{1/6}{11/36}=\dfrac{6}{11}$.

**Self-similarity check.** $A$ wins in one of two disjoint ways: he rolls a six immediately
(probability $a$), or both players miss (probability $q^2$) and the game restarts with $A$ to move
(conditional win probability $p$ again). Hence $p=a+q^2p$, giving $p=\dfrac{a}{1-q^2}=\dfrac{6}{11}$,
the same value. Since the game ends with probability $1$ (the chance of no six in $2n$ rolls is
$q^{2n}\to0$), $\Pr[B\text{ wins}]=1-\tfrac{6}{11}=\tfrac{5}{11}$. $\blacksquare$

### Worked Instance

The Hook, tabulated. $A$'s winning terms are $\tfrac16,\ \tfrac16(\tfrac56)^2,\ \tfrac16(\tfrac56)^4,\dots$
$$\Pr[A\text{ wins}]=\tfrac16\cdot\frac{1}{1-25/36}=\tfrac16\cdot\frac{36}{11}=\frac{6}{11}\approx0.545.$$
It exceeds $\tfrac12$, as it should — moving first is an advantage. And
$\tfrac{6}{11}+\tfrac{5}{11}=1$, confirming the game almost surely ends.

### Pitfalls

- **Check $|r| \lt 1$ before summing.** The geometric collapse $\frac{a}{1-r}$ is only valid when the
  per-cycle continuation probability is strictly below $1$; otherwise the process may never terminate.
- **A "cycle" must return to the *same* state.** The self-similar equation $p=a+rp$ needs the reset
  position to be genuinely identical (same player to move, same options); a shifted position needs its
  own variable.
- **Include the miss probabilities in $r$.** For the alternating game the reset requires *both* players
  to miss, so $r=q^2$, not $q$; using $q$ conflates one turn with a full cycle.
- **Verify total probability is $1$.** If wins-plus-losses fall short of $1$, some outcome (an infinite
  no-decision run) has positive probability and the model needs care.

:::
:::

## Connections

This extends first-step analysis (`comb-states-random-walks`) from finitely many states to a process
with unboundedly many rounds, closed either by the geometric-series formula (`ser-arith-geom`) or by a
self-similar equation — two faces of $\sum ar^j=\frac{a}{1-r}$. The same idea evaluates expected
durations and repeated-trial contests. Recognition trigger: "they keep going until someone succeeds" or
"the position resets after a failed round" — sum over rounds, or write $p=a+rp$.
