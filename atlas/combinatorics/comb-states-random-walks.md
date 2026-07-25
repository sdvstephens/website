Flip a fair coin until you see two heads in a row. It feels like it should take about four flips —
but the true average is $6$. And a gambler making fair dollar bets, starting with $k$ dollars, quitting
at $0$ or at $N$, reaches $N$ first with probability exactly $k/N$. Both facts fall out of one move:
name the states, then condition on the very next step.

## Discovery

1. Flip a fair coin until the first Head; let $e$ be the expected number of flips. Condition on the
   first flip. With probability $\tfrac12$ you finish in one flip; with probability $\tfrac12$ you have
   spent one flip and are, in every relevant sense, back where you started. Write a single equation
   that $e$ must satisfy, then solve it.
2. Now flip until two Heads in a row. Track a "state" for how much progress you have: state $0$ means
   the last flip was not a useful Head, state $1$ means you already have one Head pending. Let $e_0,e_1$
   be the expected remaining flips from each state. Condition each on the next flip and write two
   equations; do not solve yet — just set them up.
3. Solve your two equations for $e_0$ (the answer starts in state $0$). What number do you get?
4. A gambler with $k$ dollars ($0 \lt k \lt N$) makes fair $1$-dollar bets, stopping at $0$ or $N$.
   Let $p_k$ be the probability of hitting $N$ before $0$. Condition on the first bet to relate $p_k$
   to $p_{k-1}$ and $p_{k+1}$, state the boundary values $p_0$ and $p_N$, and solve the resulting
   recurrence for $p_k$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**First-step analysis (the state method).** Model a random process by a set of *states*. Attach one
unknown to each state — an expected value $e_s$ or an absorption probability $p_s$ — and condition on
the first transition to express each unknown in terms of its neighbors. This produces a linear system
(finite) or a recurrence (structured), which you solve using the boundary/absorbing states.

Two landmark outputs:

- Expected flips for the first Head is $2$; for two Heads in a row (HH) it is $6$.
- **Fair gambler's ruin.** With absorbing barriers at $0$ and $N$ and fair steps,
  $$p_k=\frac{k}{N}\qquad(0\le k\le N).$$

### Proof

**Justification of first-step analysis.** Let $T$ be the outcome of the first step, partitioning the
sample space. By the law of total expectation (a direct consequence of conditional probability),
$\mathbb{E}[X]=\sum_t \Pr[T=t]\,\mathbb{E}[X\mid T=t]$, and likewise
$\Pr[A]=\sum_t\Pr[T=t]\Pr[A\mid T=t]$. Because the process is *memoryless at a state* — its future law
depends only on the current state — each conditional term $\mathbb{E}[X\mid T=t]$ or $\Pr[A\mid T=t]$
equals ($1$ step, if counting) plus the same quantity evaluated at the state reached. Substituting the
state-unknowns for these gives the governing equations.

**Gambler's ruin.** Conditioning on the fair first bet, for $0 \lt k \lt N$,
$$p_k=\tfrac12 p_{k-1}+\tfrac12 p_{k+1},\qquad p_0=0,\ p_N=1.$$
Rearranged, $p_{k+1}-p_k=p_k-p_{k-1}$: consecutive differences are all equal, so $p_k$ is an arithmetic
(linear) function of $k$. With $p_0=0$ and $p_N=1$ the line is $p_k=k/N$. $\blacksquare$

### Worked Instance

**Two heads in a row.** From state $0$, one flip lands H (to state $1$) or T (back to state $0$), each
with probability $\tfrac12$; from state $1$, an H finishes and a T drops back to state $0$:
$$e_0=1+\tfrac12 e_1+\tfrac12 e_0,\qquad e_1=1+\tfrac12\cdot0+\tfrac12 e_0.$$
The first gives $\tfrac12 e_0=1+\tfrac12 e_1$, i.e. $e_0=2+e_1$. Substituting into the second,
$e_1=1+\tfrac12(2+e_1)=2+\tfrac12 e_1$, so $e_1=4$ and $e_0=6$. The expected number of flips is
$\boxed{6}$ — the Hook. (First Head alone: $e=1+\tfrac12 e\Rightarrow e=2$.)

### Pitfalls

- **Define states finely enough to be memoryless.** For HH you need to remember "one Head pending";
  a single "not done" state loses information and gives a wrong equation.
- **Count the step you just took.** Expected-value equations carry a $+1$ for the flip/bet spent
  before transitioning; forgetting it undercounts.
- **Set the boundary values first.** $p_0=0$, $p_N=1$ (or "$0$ further flips once finished") anchor the
  system; without them the recurrence has infinitely many solutions.
- **Fairness gives a *linear* profile.** $p_k=k/N$ is special to the *fair* walk; a biased walk yields
  an exponential profile instead, so don't reuse $k/N$ when steps are unequal.

:::
:::

## Connections

First-step analysis is conditional probability (`comb-conditional-probability`) applied to a labeled
state space, the workhorse for expected waiting times and absorption probabilities. When the states are
infinite it merges with geometric series (`comb-infinite-states`); when the "randomness" is replaced by
an adversary choosing moves, the same state graph becomes a game analysis (`comb-strategy-games`).
Recognition trigger: "expected number of steps until ..." or "probability of reaching A before B" —
draw the states, condition on the first move, solve the system.
