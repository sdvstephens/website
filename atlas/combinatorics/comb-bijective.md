A set with $n$ elements has $\binom{n}{0}+\binom{n}{1}+\dots+\binom{n}{n}$ subsets when you sort
them by size — and exactly $2^n$ subsets when you don't bother. These must be equal. You can grind
through the algebra, or you can *pair each subset with a binary string* and read the equality off
in one line.

## Discovery

1. Fix a $3$-element set $\{a,b,c\}$. To each subset assign a length-$3$ string of $0$'s and
   $1$'s: put a $1$ in position $x$ if $x$ is in the subset, else $0$. Write the string for
   $\{a,c\}$ and the subset for the string $011$.
2. Is this assignment reversible? Given any binary string of length $3$, can you recover exactly
   one subset — and does every string arise from some subset? Check that nothing is missed and
   nothing is hit twice.
3. Count the binary strings of length $n$ directly (each position independently $0$ or $1$).
   Since the assignment pairs strings with subsets one-for-one, what does that tell you about the
   number of subsets — *without* summing any binomial coefficients?
4. Here is the principle you just used: if you can build a rule matching the objects of set $X$
   with the objects of set $Y$ so that the matching is reversible, what can you conclude about
   $|X|$ and $|Y|$? Exactly which two properties must the matching have?
5. Try a second one. Pair each $k$-subset of an $n$-set with its complement (the $n-k$ elements
   left out). Convince yourself this pairing is reversible, and read off an identity relating
   $\binom{n}{k}$ and $\binom{n}{n-k}$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The bijection principle.** If there exists a bijection $f: X \to Y$ between two finite sets —
a rule that is *injective* (no two elements of $X$ map to the same element of $Y$) and
*surjective* (every element of $Y$ is hit) — then $|X| = |Y|$. A **bijective proof** of a counting
identity $L = R$ exhibits a set counted by $L$, a set counted by $R$, and an explicit bijection
between them, so the equality is *seen* rather than computed. This is often the cleanest possible
proof and, unlike algebra, it explains *why* the two sides count the same thing.

### Proof

That a bijection forces equal cardinality is the defining property of finite counting: to say
$|X| = m$ is to say there is a bijection between $X$ and $\{1,\dots,m\}$. Given a bijection
$f:X\to Y$ and a bijection $g:Y\to\{1,\dots,m\}$ witnessing $|Y|=m$, the composite $g\circ f:
X\to\{1,\dots,m\}$ is a bijection (a composition of bijections is a bijection: injective because
each factor is, surjective because each factor is). Hence $|X|=m=|Y|$.

*Illustration — subsets vs. binary strings.* Let $X$ be the subsets of $\{1,\dots,n\}$ and $Y$ the
binary strings of length $n$. Define $f(S)$ to be the string with a $1$ in position $i$ iff
$i\in S$. This is injective (different subsets differ in membership of some $i$, hence in that bit)
and surjective (any string is $f$ of the subset of positions holding a $1$). So the number of
subsets equals $|Y|=2^n$ by the multiplication principle. $\blacksquare$

### Worked Instance

The Hook identity $\sum_{k=0}^{n}\binom{n}{k}=2^n$: the left side counts subsets grouped by size
$k$ (there are $\binom{n}{k}$ of size $k$), the right side counts them via the subset-to-string
bijection ($2$ choices per position, $n$ positions). Same set of subsets, two counts, so the sides
are equal — no algebra. Likewise the complement bijection $S \mapsto \{1,\dots,n\}\setminus S$
pairs $k$-subsets with $(n-k)$-subsets reversibly, proving $\binom{n}{k}=\binom{n}{n-k}$.

### Pitfalls

- A bijective proof needs **both** directions checked: injective (nothing collides) *and*
  surjective (nothing is left out). Exhibiting only a one-way map proves an inequality
  ($|X|\le|Y|$ or $\ge$), not equality.
- The map must be **well defined**: every input produces a genuine, valid output of the target
  type. It is easy to write a "bijection" that occasionally lands outside $Y$.
- A slick formula-manipulation can *verify* an identity but does not give a bijective *proof*; the
  point of the latter is the explicit correspondence, which often generalizes where algebra
  stalls.
- An involution (a bijection that is its own inverse) is a common special case — handy, but you
  still must confirm it hits everything.

:::
:::

## Connections

Prereqs: permutations and combinations (`comb-perms-combs`), the objects being matched. Bijective
proofs are the philosophical backbone of stars and bars (`comb-stars-bars`, distributions ↔ star
rows) and reach their showcase in the Catalan numbers (`comb-catalan`), where the same count is
seen as paths, parenthesizations, and triangulations. The two-count viewpoint borders on double
counting (`comb-double-counting`), which counts one set two ways rather than matching two sets.
Recognition trigger: an identity where both sides "obviously count something" — build the
dictionary between the two somethings.
