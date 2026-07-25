Colour every edge of the complete graph on $n$ vertices either red or blue. Can you always avoid a
monochromatic clique on $k$ vertices — a group of $k$ people all of whose pairwise edges share one
colour? For $n$ not too large compared with $2^{k/2}$, the answer is yes, and here is the strange
part: you can *prove such a colouring exists without ever exhibiting one*. Flip a coin for each
edge and let expectation do the work.

## Discovery

Let $X$ be a non-negative random variable — often a *count* of "bad" substructures in a random
object.

1. **Averages have neighbours on both sides.** If $X$ takes finitely many values with mean
   $\mathbb{E}[X]$, must there be an outcome with $X \le \mathbb{E}[X]$? Must there be one with
   $X \ge \mathbb{E}[X]$? Justify both from the definition of the average.
2. **The zero trick.** Suppose $X$ counts bad substructures, so $X$ is a non-negative *integer*. If
   $\mathbb{E}[X] \lt 1$, what can you conclude about the existence of an outcome with $X = 0$?
   (Think about what $X \ge 1$ everywhere would force the average to be.)
3. **Set up the Ramsey count.** Colour each of the $\binom n2$ edges of $K_n$ red/blue independently
   and uniformly. For a fixed set $S$ of $k$ vertices, compute the probability that all
   $\binom k2$ edges inside $S$ receive the same colour. Now let $X$ be the number of monochromatic
   $k$-subsets; using linearity of expectation over all $\binom nk$ subsets, write $\mathbb{E}[X]$.
4. **Force $\mathbb{E}[X] \lt 1$.** For which $n$ (in terms of $k$) is your $\mathbb{E}[X]$ below
   $1$? Combine with step 2 to state what kind of colouring must then exist.
5. **Salvage when the mean is not below $1$.** Suppose instead $\mathbb{E}[X] = m \ge 1$. Take an
   outcome with $X \le m$ and *delete one vertex from each bad substructure*. How many vertices
   survive, and what property does the surviving object have?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **probabilistic method** proves that an object with a desired property *exists* by placing a
probability distribution on a family of candidates and showing the good ones have positive
probability — without constructing any explicit example. Two staple forms:

- **First moment / positive probability.** If a random object has property $\mathcal P$ with
  probability $\gt 0$, some object has $\mathcal P$. Equivalently, if $X \ge 0$ is an
  integer-valued random variable (a defect count) with $\mathbb{E}[X] \lt 1$, then
  $\Pr[X = 0] \gt 0$, so some outcome is defect-free. Also, some outcome has $X \le \mathbb{E}[X]$
  and some has $X \ge \mathbb{E}[X]$.
- **Deletion method.** If $\mathbb{E}[X] = m$, there is an outcome with at most $m$ defects; deleting
  one element per defect leaves a defect-free substructure of size at least (original size) $- m$.

A headline consequence is a lower bound on the diagonal **Ramsey number** $R(k,k)$ (the least $N$
such that *every* red/blue colouring of $K_N$ contains a monochromatic $K_k$):
$$R(k,k) \gt \left\lfloor 2^{k/2}\right\rfloor \qquad (k \ge 3).$$

### Proof

**The basic principles.** Let $X$ take values $x_1, \dots, x_M$ with probabilities $p_1, \dots,
p_M$. Then $\mathbb{E}[X] = \sum_i p_i x_i$ is a weighted average, so it cannot exceed
$\max_i x_i$ nor fall below $\min_i x_i$; hence some outcome has $X \ge \mathbb{E}[X]$ and some has
$X \le \mathbb{E}[X]$. If moreover $X$ is a non-negative integer and $\mathbb{E}[X] \lt 1$, then $X$
cannot be $\ge 1$ on every outcome (that would give $\mathbb{E}[X] \ge 1$), so $\Pr[X = 0] \gt 0$.

**Ramsey lower bound.** Colour the $\binom n2$ edges of $K_n$ independently, each red or blue with
probability $\tfrac12$. Fix a $k$-subset $S$ of vertices; the event "$S$ is monochromatic" needs its
$\binom k2$ internal edges to agree, which happens with probability $2 \cdot 2^{-\binom k2} =
2^{1-\binom k2}$ (two colours, then all remaining edges forced). Let $X$ count monochromatic
$k$-subsets and let $A_S$ be the indicator of "$S$ monochromatic." By linearity of expectation,
$$\mathbb{E}[X] = \sum_{|S| = k} \mathbb{E}[A_S] = \binom nk\, 2^{1 - \binom k2}.$$
Now take $n = \lfloor 2^{k/2}\rfloor$, so $n \le 2^{k/2}$. Using $\binom nk \le \dfrac{n^k}{k!} \le
\dfrac{2^{k^2/2}}{k!}$,
$$\mathbb{E}[X] \le \frac{2^{k^2/2}}{k!}\cdot 2^{1 - k(k-1)/2}
= \frac{2^{\,1 + k/2}}{k!},$$
since the exponent is $\tfrac{k^2}{2} + 1 - \tfrac{k(k-1)}{2} = 1 + \tfrac k2$. For every $k \ge 3$
this is $\lt 1$ (at $k = 3$ it is $2^{2.5}/6 \approx 0.94$, and $2^{1+k/2}/k!$ decreases as $k$
grows). By the zero trick, some colouring of $K_n$ has $X = 0$ — no monochromatic $K_k$ at all.
Therefore $R(k,k) \gt n = \lfloor 2^{k/2}\rfloor$. $\blacksquare$

**Deletion method.** With $\mathbb{E}[X] = m$, choose (by the first principle) an outcome with
$X \le m$ bad substructures. Remove one vertex from each; at most $m$ vertices are deleted, leaving
$\ge n - m$ vertices with *no* bad substructure surviving — every defect lost at least one of its
members. This trades a slightly smaller object for a guaranteed-clean one, often improving crude
first-moment bounds by a constant factor. $\blacksquare$

### Worked Instance

**Resolve the Hook, concretely.** For $k = 4$, $\mathbb{E}[X] = \binom n4\, 2^{1 - 6} = \binom n4 /
32$. This is $\lt 1$ whenever $\binom n4 \lt 32$, e.g. for $n = 6$ ($\binom 64 = 15$). So there is a
red/blue colouring of $K_6$ with no monochromatic $K_4$, proving $R(4,4) \gt 6$ — a valid bound
obtained with no explicit colouring in hand (the true value is $R(4,4) = 18$; the method is honest
but not tight here).

**A second, cut-flavoured instance (linearity in action).** Every graph $G$ with $m$ edges contains
a bipartite subgraph with at least $m/2$ edges. Randomly place each vertex into part $A$ or part $B$
with probability $\tfrac12$, independently. For an edge $uv$, the indicator that it is "cut" (endpoints
in different parts) has expectation $\tfrac12$. By linearity, the expected number of cut edges is
$\sum_{uv} \tfrac12 = m/2$. By the first principle some partition achieves at least the mean, i.e.
$\ge m/2$ cut edges — and those cut edges form a bipartite subgraph. Existence, again, with no
construction.

### Pitfalls

- **The zero trick needs an integer count.** $\mathbb{E}[X] \lt 1$ gives a defect-free outcome only
  because $X$ is a non-negative *integer*; for a general real $X$, $\mathbb{E}[X] \lt 1$ says
  nothing about $\Pr[X=0]$.
- **Positive probability, not certainty.** The method shows *some* object works; it does not make a
  random object work with high probability, nor produce one explicitly.
- **Linearity ignores dependence.** $\mathbb{E}[\sum A_S] = \sum \mathbb{E}[A_S]$ holds even though
  the events $A_S$ overlap heavily; do not "correct" for dependence in the *expectation* (you would
  for a variance).
- **Deletion changes the size, not just the count.** After deletion the guaranteed clean structure
  has $\ge n - \mathbb{E}[X]$ elements — remember to subtract the deleted ones.
- **Non-constructive.** A probabilistic existence proof often gives no efficient algorithm to *find*
  the object; derandomization (e.g. the method of conditional expectations) is a separate step.

:::
:::

## Connections

Prereq: linearity of expectation and indicator variables (`comb-linearity-expectation`), the engine
that turns a global count into a sum of easy local expectations. The probabilistic method extends to
the second-moment method (variance controls concentration), the Lovász Local Lemma (existence when
bad events are only *locally* dependent), and alteration/deletion refinements. Recognition trigger:
"show there exists a structure avoiding all defects," especially when direct construction is hard and
the defects are countable — put a random object down and compute an expectation. A Putnam and IMO
favourite for existence claims, and pervasive across modern combinatorics and theoretical computer
science.

## History

The method was crystallized by Paul Erdős, whose 1947 paper giving the Ramsey lower bound
$R(k,k) \gt 2^{k/2}$ is usually cited as its birth — a single coin-flipping argument settling a
problem that had resisted construction. Precursors existed: in 1943 Tibor Szele used averaging to
prove the existence of tournaments with many Hamiltonian paths, and even Sylvester and others had
brushed against averaging arguments. Erdős returned to the idea again and again over five decades,
elevating it into a philosophy — "you don't need to build the object, you only need to show a random
one works." The canonical modern reference is *The Probabilistic Method* by Noga Alon and Joel
Spencer (first edition 1992), and a landmark refinement is the Lovász Local Lemma of László Lovász
and Erdős (1975). The method mattered because it revealed that randomness is a *constructive tool for
proving existence*, reshaping combinatorics, number theory, and computer science.
