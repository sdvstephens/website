Shuffle a deck of $n$ cards labeled $1$ to $n$; how many land in their own position on average?
The answer is exactly $1$ — whether the deck has $5$ cards or $5$ million. A quantity that looks like
it should depend wildly on $n$ collapses to a constant, because you never compute a single messy
probability — you add up tiny ones.

## Discovery

1. Take a uniformly random permutation of $\{1,\dots,n\}$ and let $X$ be its number of fixed points.
   Instead of finding the distribution of $X$, write $X=X_1+X_2+\cdots+X_n$ where each $X_i$ records a
   single yes/no fact about position $i$. What is $X_i$, and what values can it take?
2. A variable that is $1$ when an event happens and $0$ otherwise has a very simple expected value.
   Compute $\mathbb{E}[X_i]=\Pr[\sigma(i)=i]$, then combine the pieces using linearity of expectation.
   What is $\mathbb{E}[X]$?
3. Turn expectation into a *count*. If $X$ counts something over each of $N$ equally likely objects,
   then the total of $X$ across all objects is $N\cdot\mathbb{E}[X]$. Use this to count the total
   number of fixed points summed over all $n!$ permutations — first via your $\mathbb{E}[X]$, then by a
   direct argument, and check they agree.
4. Now a case where the pieces are *not* independent: drop $n$ balls independently into $n$ boxes and
   let $Y$ be the number of empty boxes. Write $Y$ as a sum of one indicator per box, compute each
   indicator's expectation, and combine. Does the dependence between boxes affect the calculation?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The indicator method.** To find the expected value (or total count) of a quantity $X$ that tallies
how many events from a family occur, write $X=\sum_j \mathbf{1}_{A_j}$ as a sum of **indicator random
variables**, where $\mathbf{1}_{A_j}=1$ if event $A_j$ happens and $0$ otherwise. Since
$\mathbb{E}[\mathbf{1}_{A_j}]=\Pr[A_j]$, linearity of expectation gives
$$\mathbb{E}[X]=\sum_j \Pr[A_j],$$
**with no independence assumption needed.** Two payoffs: (i) hard expectations become sums of easy
single-event probabilities; (ii) since $\sum_{\text{objects}} X = N\cdot\mathbb{E}[X]$ over $N$ equally
likely objects, the same identity *counts* incidences. (The existence half of the probabilistic method
also rides on this: some outcome achieves at least the average.)

### Proof

An indicator $\mathbf{1}_A$ takes value $1$ on $A$ and $0$ off it, so
$\mathbb{E}[\mathbf{1}_A]=1\cdot\Pr[A]+0\cdot\Pr[A^c]=\Pr[A]$. If $X=\sum_{j=1}^{m}\mathbf{1}_{A_j}$,
linearity of expectation (which holds for *any* random variables, dependent or not) gives
$$\mathbb{E}[X]=\sum_{j=1}^{m}\mathbb{E}[\mathbf{1}_{A_j}]=\sum_{j=1}^{m}\Pr[A_j].$$
For the counting form, let the sample space be $N$ equally likely objects $\omega$ with
$\mathbb{E}[X]=\frac1N\sum_\omega X(\omega)$; rearranging, $\sum_\omega X(\omega)=N\,\mathbb{E}[X]$,
i.e. the total incidence count equals $N$ times the average. $\blacksquare$

### Worked Instance

**Fixed points.** For a random permutation, $X_i=\mathbf{1}[\sigma(i)=i]$ has
$\Pr[\sigma(i)=i]=\frac{(n-1)!}{n!}=\frac1n$, so
$$\mathbb{E}[X]=\sum_{i=1}^{n}\frac1n=1,$$
independent of $n$ — the Hook. Counting form: the total number of fixed points over all $n!$
permutations is $n!\cdot1=n!$, matching the direct count $\sum_{i=1}^n(n-1)!=n\cdot(n-1)!=n!$.

**Empty boxes.** Drop $n$ balls independently and uniformly into $n$ boxes; let
$Z_i=\mathbf{1}[\text{box }i\text{ empty}]$. Each ball misses box $i$ with probability $1-\tfrac1n$, so
$\Pr[Z_i=1]=(1-\tfrac1n)^n$ and $\mathbb{E}[\#\text{empty}]=n\left(1-\tfrac1n\right)^n\to n/e$. The
boxes are dependent, yet linearity ignores that entirely.

### Pitfalls

- **Linearity needs no independence.** $\mathbb{E}[X+Y]=\mathbb{E}[X]+\mathbb{E}[Y]$ always; do not
  waste effort checking independence for a *sum*. (Independence is only needed for products/variance.)
- **Indicators are $0/1$, so $\mathbb{E}[\mathbf{1}_A]=\Pr[A]$ exactly** — not the count of favorable
  outcomes. Divide by the sample-space size.
- **Choose the right granularity.** Split $X$ into the simplest events whose individual probabilities
  you can read off (one per position, per pair, per box); a clumsy decomposition defeats the method.
- **Average is not achievable-on-the-nose.** $\mathbb{E}[X]=1$ fixed point on average does *not* mean
  every permutation has one; it means the mean is $1$.

:::
:::

## Connections

This is linearity of expectation (`comb-linearity-expectation`) turned into a general-purpose lever:
decompose, take single-event probabilities, add. It computes the mean number of fixed points that
underlies derangements (`comb-pie-derangements`), counts inversions/ascents/records, and powers the
probabilistic method (an event of positive probability, or a value at least the average, must be
realizable). Recognition trigger: "expected number of ..." or "on average, how many ..." — never find
the full distribution; break the count into indicators and sum their probabilities.
