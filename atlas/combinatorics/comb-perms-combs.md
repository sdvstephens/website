How many ways can $5$ runners finish a race (all orders count)? And how many ways can a coach
pick a $3$-person relay squad from those $5$ (order irrelevant)? One answer is $120$, the other
is $10$. The gap between them — a factor of exactly $6$ — is the whole story of this node.

## Discovery

1. Line up $5$ distinct runners in a row. Fill the first place, then the second, and so on,
   using the multiplication principle. How many complete orderings are there?
2. Now do it for choosing an *ordered* top-$3$ (gold, silver, bronze) from the $5$: first place,
   then second, then third. How many ordered triples?
3. Take one *unordered* set of $3$ runners, say $\{A,B,C\}$. How many different ordered triples
   (gold–silver–bronze arrangements) does that single set produce?
4. Every unordered $3$-set generates the same number of ordered triples you found in (3). Use
   this to convert your ordered-triple count from (2) into the number of *unordered* $3$-sets.
   Which operation undoes the overcount?
5. Generalize: from $n$ distinct objects, write a formula for the number of ordered selections
   of $k$, and a formula for the number of unordered selections of $k$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

From $n$ distinct objects:
- The number of **permutations** of all $n$ is $n! = n(n-1)\cdots 2\cdot 1$.
- The number of **ordered** selections (arrangements) of $k$ is
  $$P(n,k) = \frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1).$$
- The number of **unordered** selections (combinations) of $k$ is the binomial coefficient
  $$\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{P(n,k)}{k!}.$$
By convention $0! = 1$, so $\binom{n}{0}=\binom{n}{n}=1$, and $\binom{n}{k}=0$ when $k \lt 0$ or
$k \gt n$.

### Proof

**Permutations.** Building an ordering as a sequence of independent stages, the first position
has $n$ choices, the second $n-1$ (one object used up), and so on down to $1$. The multiplication
principle gives $n(n-1)\cdots 1 = n!$. The same argument stopped after $k$ stages gives
$P(n,k)=n(n-1)\cdots(n-k+1)=\dfrac{n!}{(n-k)!}$.

**Combinations.** Count ordered $k$-selections two ways. Directly, there are $P(n,k)$. Indirectly,
build an ordered selection in two stages: first choose the underlying $k$-element set (call the
number of these $C$), then arrange it in order. Each $k$-set can be ordered in $k!$ ways, and
this $k!$ does not depend on *which* set was chosen, so the product rule gives $C\cdot k!$ ordered
selections. Equating, $C\cdot k! = P(n,k)$, hence
$$C = \binom{n}{k} = \frac{P(n,k)}{k!} = \frac{n!}{k!\,(n-k)!}.\qquad \blacksquare$$

### Worked Instance

Five runners. Orderings of all five: $5! = 120$. Unordered relay squads of $3$:
$$\binom{5}{3} = \frac{5!}{3!\,2!} = \frac{120}{6\cdot 2} = 10.$$
The ordered top-$3$ count is $P(5,3)=5\cdot 4\cdot 3 = 60$, and indeed $60 = 10 \cdot 3!$: each
of the $10$ squads accounts for $3! = 6$ podium orderings, which is the factor of $6$ promised in
the Hook.

### Pitfalls

- **Order matters vs. not** is the entire decision. Podium (order matters) → $P(n,k)$; committee
  (order irrelevant) → $\binom{n}{k}$. Deciding wrong is the most common counting error.
- $\binom{n}{k}$ is symmetric: $\binom{n}{k}=\binom{n}{n-k}$ (choosing who's in = choosing who's
  out). Use the smaller $k$ to compute.
- Do not confuse $P(n,k)$ with $\binom{n}{k}$; they differ by the factor $k!$.
- These formulas assume **distinct** objects and selection **without repetition**. Repeated
  objects or repetition allowed need different tools (multinomials, stars and bars).

:::
:::

## Connections

Prereqs: the multiplication principle (`comb-add-mult`), used twice — once to build orderings,
once to convert ordered to unordered. This node introduces $\binom{n}{k}$, whose algebraic life
begins in the binomial theorem and Pascal's rule (`comb-binomial-pascal`). The "count it two
ways" move in the proof is the seed of double counting (`comb-double-counting`) and bijective
proofs (`comb-bijective`), and relaxing "distinct, no repetition" leads to stars and bars
(`comb-stars-bars`). Recognition trigger: any "how many ways to arrange/choose" question — first
settle whether order matters.
