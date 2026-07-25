Five distinct trophies sit on a shelf. Swap any two and it's a different display. How many displays
are there? And if the shelf held only three spots, how many ways could you fill them from the five
trophies, order mattering? The answers, $120$ and $60$, both come from one idea: fill positions one at
a time, watching the pool shrink.

## Discovery

1. Line up all $5$ distinct trophies in $5$ shelf positions, left to right. The leftmost position can
   hold any trophy; once it's placed, how many remain for the second position; then the third; and so
   on? Multiply the position-counts (multiplication principle) to get the number of full displays.
2. Now the shelf has only $3$ positions, still drawing from the $5$ trophies. Fill position one, then
   two, then three, each time noting how many trophies are still available. How many ordered
   three-trophy displays result?
3. Generalize step $1$: for $n$ distinct objects in $n$ positions, write the product of the shrinking
   counts. Then generalize step $2$: for an ordered selection filling $k$ of $n$ positions, write the
   product — how many factors does it have, and what is the last (smallest) factor?
4. Multiply the step-$3$ arrangement product for $k$ positions by the product $(n-k)(n-k-1)\cdots 1$.
   What familiar full product from step $3$ do you obtain, and therefore how can the $k$-position
   count be written as a ratio of two such full products?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Permutations.** From $n$ distinct objects:

- The number of **orderings** of all $n$ (a *permutation*) is the **factorial**
  $$n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1,$$
  with the convention $0! = 1$.
- The number of **ordered arrangements of $k$** of the objects (positions distinguishable, no repeats)
  is
  $$P(n,k) = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!},$$
  a product of exactly $k$ shrinking factors. In particular $P(n,n) = n!$ and $P(n,0) = 1$.

### Proof

Build an arrangement as a sequence of stages, one per position. For a full ordering of $n$ objects,
position $1$ has $n$ available objects; after placing it, position $2$ has $n-1$; position $3$ has
$n-2$; and so on until the last position has just $1$. At every stage the *number* of remaining
objects depends only on how many positions are already filled, not on which specific objects were
used, so the multiplication principle applies and the count is
$$n(n-1)(n-2)\cdots 1 = n!.$$

For an ordered arrangement of $k$ objects, stop after $k$ stages: the counts are
$n, n-1, \dots, n-k+1$ (the $k$-th stage has $n-(k-1)$ objects left), giving
$$P(n,k) = n(n-1)\cdots(n-k+1).$$
To rewrite this as a ratio, multiply and divide by the product of the *unused* counts:
$$P(n,k) = n(n-1)\cdots(n-k+1) \cdot \frac{(n-k)(n-k-1)\cdots 1}{(n-k)(n-k-1)\cdots 1}
= \frac{n!}{(n-k)!},$$
since the numerator is now the full product $n!$ and the denominator is $(n-k)!$. The convention
$0! = 1$ makes $P(n,n) = n!/0! = n!$ come out right. $\blacksquare$

### Worked Instance

The Hook. All five trophies: $5! = 5\cdot 4\cdot 3\cdot 2\cdot 1 = 120$ displays. Three of the five,
order mattering:
$$P(5,3) = 5 \cdot 4 \cdot 3 = 60 = \frac{5!}{2!} = \frac{120}{2}.$$
The ratio form says it cleanly: filling $3$ positions is the full $5!$ ordering with the $2!$ orderings
of the two *unused* trophies factored out.

How many ways can $8$ runners finish a race with a gold, silver, and bronze awarded? Order matters and
no runner takes two medals, so it's $P(8,3) = 8\cdot 7\cdot 6 = 336$.

### Pitfalls

- **Order matters here — that is the whole premise.** Permutations count arrangements where swapping
  two objects gives a *different* outcome. If order is irrelevant, you are overcounting and need a
  different tool.
- **$0! = 1$, not $0$.** It is a convention that keeps $P(n,n) = n!/0! = n!$ and later formulas
  consistent; treating it as $0$ makes ratios blow up.
- **Count the factors, not the endpoints.** $P(n,k)$ has exactly $k$ factors running $n, n-1, \dots$
  down to $n-k+1$. A common slip is stopping at $n-k$ (one factor too many).
- **Distinct objects, no repetition.** These formulas assume the objects are distinguishable and each
  is used at most once. Repeats or identical objects need different counting.

:::
:::

## Connections

Permutations are the multiplication principle (`comb-multiplication-principle`) applied to a shrinking
pool, and they introduce the factorial that pervades combinatorics. The very next step notices that
when order should *not* matter, $P(n,k)$ overcounts by a fixed factor — that repair is overcounting
(`comb-overcounting`), which turns $P(n,k)$ into the combination $\binom{n}{k}$
(`comb-combinations-elem`). Recognition trigger: "how many ways to *arrange* / order / rank / seat"
distinct things — a permutation, counted as a product of shrinking factors.

## History

The counting of arrangements has a strikingly early and cross-cultural history. The Arab grammarian al-Khalīl ibn Aḥmad ($8$th century) enumerated permutations of Arabic root letters to catalogue possible words, and Indian mathematicians from Bhāskara II ($12$th century) onward computed arrangement counts. A decisive step came from Levi ben Gershon in $1321$, who gave a genuine proof that $n$ objects can be ordered in $n!$ ways. The factorial notation $n!$ itself was introduced by Christian Kramp in $1808$. Permutations matter as the first place the multiplication principle is put to systematic work, and as the ordered count from which combinations are later carved.
