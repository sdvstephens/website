A club of $5$ must send a $3$-person delegation — no titles, just three names on a list. If it were
gold/silver/bronze there'd be $60$ ordered outcomes, but a delegation is a plain *set*: $\{A,B,C\}$ is
the same delegation however you read the names. The right count is $10$. That drop from $60$ to $10$ is
one clean division away.

## Discovery

1. Using permutations, count the *ordered* ways to pick $3$ of the $5$ members for a first, second,
   and third seat. How many ordered triples is that?
2. Fix one particular delegation, the set $\{A, B, C\}$. How many of the ordered triples from step $1$
   are just this same three-member set in some order? (Order the three members among themselves.)
3. Does every delegation give the same number of ordered triples as $\{A,B,C\}$ did in step $2$? Given
   that, which single operation from overcounting turns your step-$1$ ordered count into the number of
   *delegations*?
4. Generalize to choosing $k$ from $n$: write the ordered-selection count, write how many times each
   unordered $k$-set is thereby counted, and combine them into a formula for the number of $k$-element
   subsets.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Combinations.** The number of ways to choose an **unordered** $k$-element subset from $n$ distinct
objects is the **binomial coefficient**
$$\binom{n}{k} = \frac{P(n,k)}{k!} = \frac{n!}{k!\,(n-k)!},$$
read "$n$ choose $k$." It counts *selections where order does not matter and there is no repetition*.
By convention $\binom{n}{0} = \binom{n}{n} = 1$ (there is one way to choose nothing, and one way to
choose everything), and $\binom{n}{k} = 0$ when $k \lt 0$ or $k \gt n$.

### Proof

Count the *ordered* $k$-selections of the $n$ objects two ways.

**Directly**, an ordered selection fills $k$ distinguishable seats without repeats, so by permutations
there are $P(n,k) = \dfrac{n!}{(n-k)!}$ of them.

**By stages**, build an ordered selection as: first choose the underlying $k$-element *set* (let the
number of these unknowns be $C = \binom{n}{k}$), then arrange that set into the $k$ seats. Each chosen
$k$-set can be ordered in $k!$ ways, and this $k!$ is the *same* for every set — it does not depend on
which $k$ objects were picked. By the multiplication principle the number of ordered selections is
$C \cdot k!$.

The two counts are of the same objects, so
$$C \cdot k! = P(n,k) \quad\Longrightarrow\quad \binom{n}{k} = C = \frac{P(n,k)}{k!} = \frac{n!}{k!\,(n-k)!}.$$
Equivalently this is the division principle: ordered selections overcount each unordered set exactly
$k!$ times, so divide by $k!$. The conventions follow by reading the formula at the edges:
$\binom{n}{0} = n!/(0!\,n!) = 1$ and $\binom{n}{n} = n!/(n!\,0!) = 1$. $\blacksquare$

### Worked Instance

The Hook. Ordered triples from $5$: $P(5,3) = 5\cdot 4\cdot 3 = 60$. Each delegation of $3$ can be
ordered in $3! = 6$ ways, so
$$\binom{5}{3} = \frac{60}{3!} = \frac{60}{6} = 10.$$
The factor of $6$ is exactly the overcount: gold/silver/bronze distinguishes the $6$ orderings that a
title-free delegation lumps together.

A hand of $5$ cards from a standard $52$-card deck (order irrelevant) numbers
$$\binom{52}{5} = \frac{52\cdot 51\cdot 50\cdot 49\cdot 48}{5!} = \frac{311875200}{120} = 2598960.$$
Compute the shrinking numerator $P(52,5)$, then divide by $5!$ to strip the order.

### Pitfalls

- **Order matters or not — decide first.** Committees, subsets, hands, and "choose" problems are
  unordered ($\binom{n}{k}$). Podiums, passwords, and rankings are ordered ($P(n,k)$). Choosing the
  wrong one is *the* combinatorics mistake.
- **Divide by $k!$, not by $k$.** The overcount is all $k!$ orderings of the chosen set, not merely
  $k$. Dividing by $k$ is a frequent slip.
- **No repetition, distinct objects.** $\binom{n}{k}$ counts subsets — each object in or out, once.
  "Choose with repetition" (multisets) is a different formula (stars and bars).
- **Edge conventions.** $\binom{n}{0}=1$ and $\binom{n}{k}=0$ for $k \gt n$; these keep later identities
  consistent, so don't reflexively call an "impossible" choice count undefined.

:::
:::

## Connections

Combinations are permutations (`comb-permutations-elem`) with order divided out by overcounting
(`comb-overcounting`) — the payoff of the division principle. The symbol $\binom{n}{k}$ now takes on a
life of its own: its symmetry and recurrence are proved as combinatorial identities
(`comb-combinatorial-identity`), and stacking the coefficients builds Pascal's triangle
(`comb-pascal-elem`), which in turn drives the binomial theorem. Recognition trigger: "how many ways to
*choose* / select a group / form a committee / deal a hand" where order is irrelevant — reach for
$\binom{n}{k}$.

## History

Selecting $k$ objects from $n$ without regard to order is among the oldest enumerative problems, appearing in Indian medicine and prosody and in Chinese and Islamic mathematics. Levi ben Gershon's *Maasei Choshev* ($1321$) proved the combination formula rigorously, deriving it from permutations by dividing out the orderings. The numbers themselves — the binomial coefficients — were tabulated across many cultures (see Pascal's triangle). The now-universal notation $\binom{n}{k}$ was introduced by Andreas von Ettingshausen in $1826$. Combinations matter because they are the count of *unordered* selections, the quantity that governs the binomial theorem, probability, and much of the rest of combinatorics.
