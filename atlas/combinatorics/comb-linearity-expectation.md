Seat $n$ people who came with hats around a table, hand the hats back at random, and ask: on
average, how many people get their *own* hat? The answer is exactly $1$ — for every $n$, whether
$n$ is $5$ or $5$ million. That stubborn constant falls out of a principle so simple it feels like
cheating: you never compute a single probability of the messy joint event.

## Discovery

1. For an event $A$, define its **indicator** random variable $X_A$, equal to $1$ if $A$ happens
   and $0$ if not. Compute $\mathbb{E}[X_A]$ — the average value of $X_A$ — in terms of the
   probability $\mathbb{P}(A)$. (Just average $1$ and $0$ weighted by their chances.)
2. Suppose a total count $X$ can be written as a sum of indicators $X = X_1 + X_2 + \dots + X_m$,
   one per event. **Linearity of expectation** says $\mathbb{E}[X] = \sum_i \mathbb{E}[X_i]$
   *even if the events overlap or depend on each other*. Take it as given and combine it with (1):
   express $\mathbb{E}[X]$ as a sum of probabilities.
3. Apply this to the hats. Let $X_i = 1$ if person $i$ gets their own hat. What is
   $\mathbb{P}(X_i = 1)$ for a single person, by symmetry? Now sum over all $n$ people using (2).
   What is the average number of correct hats?
4. Notice what you did *not* have to do: you never computed the probability that, say, persons $3$
   and $7$ *both* get their hats while others don't. Why does linearity let you ignore all that
   dependence?
5. State the leverage this gives for *existence*: if the average value of a quantity over some
   random choice is $\mu$, what can you always guarantee about the best (or worst) single outcome?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Linearity of expectation.** For any random variables $X_1,\dots,X_m$ on the same probability
space,
$$\mathbb{E}\!\left[\sum_{i=1}^{m} X_i\right] = \sum_{i=1}^{m} \mathbb{E}[X_i],$$
*with no independence assumption*. For an indicator $X_A$ of an event $A$,
$\mathbb{E}[X_A] = \mathbb{P}(A)$, so a count that is a sum of indicators has expected value equal
to the sum of the individual probabilities. **Probabilistic method (first moment).** If a quantity
$X$ has average value $\mathbb{E}[X] = \mu$ over a random choice, then *some* outcome achieves
$X \ge \mu$ and *some* outcome achieves $X \le \mu$ — because a value can never be strictly on one
side of its own average. This turns "the average is good" into "a good example *exists*," a
non-constructive existence proof.

### Proof

**Indicator expectation.** By definition $\mathbb{E}[X_A] = 1\cdot\mathbb{P}(X_A=1) +
0\cdot\mathbb{P}(X_A=0) = \mathbb{P}(A)$.

**Linearity.** Work over a finite probability space with outcomes $\omega$ of probability
$p(\omega)$. For each outcome, $\big(\sum_i X_i\big)(\omega) = \sum_i X_i(\omega)$, a finite sum of
numbers. Then
$$\mathbb{E}\Big[\sum_i X_i\Big] = \sum_{\omega} p(\omega)\sum_i X_i(\omega) = \sum_i \sum_{\omega} p(\omega)X_i(\omega) = \sum_i \mathbb{E}[X_i],$$
where swapping the two finite sums is valid because addition is commutative and associative; no
independence is used.

**First-moment existence.** Suppose, for contradiction, that $X(\omega) \lt \mu$ for *every*
outcome $\omega$. Then $\mathbb{E}[X] = \sum_\omega p(\omega)X(\omega) \lt \mu\sum_\omega p(\omega)
= \mu$, contradicting $\mathbb{E}[X]=\mu$. So some outcome has $X\ge\mu$; the symmetric argument
gives some outcome with $X\le\mu$. $\blacksquare$

### Worked Instance

The hats (resolving the Hook): a uniformly random permutation returns hats. Let $X_i = 1$ if person
$i$ gets their own hat, and $X = \sum_{i=1}^n X_i$ the number of correct returns. By symmetry each
person is equally likely to receive any hat, so $\mathbb{P}(X_i=1) = \tfrac1n$, hence
$\mathbb{E}[X_i] = \tfrac1n$. By linearity,
$$\mathbb{E}[X] = \sum_{i=1}^{n}\mathbb{E}[X_i] = n\cdot\frac1n = 1,$$
for *every* $n$ — no need for the dependencies among the $X_i$ (they are strongly dependent, yet
linearity ignores that). A first-moment corollary: since the average number of fixed points is
$1$, there is always at least one permutation with $\ge 1$ fixed point (trivially true) and at
least one with $\le 1$.

### Pitfalls

- **Linearity needs no independence** — that is its whole power. But $\mathbb{E}[XY]=
  \mathbb{E}[X]\mathbb{E}[Y]$ *does* need independence; do not confuse the two. Only sums split
  freely.
- The first-moment method proves **existence, not construction**: it guarantees an outcome meeting
  the average without telling you which one.
- Set up indicators for the **right events**, and get each single probability correct (often by
  symmetry). An error in one $\mathbb{P}(X_i)$ propagates to the whole sum.
- $\mathbb{E}[X]\ge\mu$ guarantees an outcome with $X\ge\mu$, but says nothing about *how likely*
  such an outcome is; for that you need concentration/variance tools, not linearity alone.

:::
:::

## Connections

Prereqs: inclusion–exclusion (`comb-pie`), which computes exact probabilities of "at least one"
events (e.g. the *distribution* of fixed points / derangements) where linearity gives only the
average — the two are complementary, one exact-and-laborious, one averaged-and-effortless.
Linearity of expectation and the first-moment method open extremal graph theory existence proofs
(large cuts, tournaments with many properties) and combine with variance for the second-moment
method. Recognition trigger: "find the average/expected number of ..." or "prove a configuration
with at least/at most $\mu$ of something exists" — write the count as a sum of indicators and add
the easy pieces.
