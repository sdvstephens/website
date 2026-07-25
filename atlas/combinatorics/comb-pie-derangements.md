Four people check their hats and get them back in a random order. How often does *nobody* get
their own hat? Out of the $24$ ways to hand the hats back, exactly $9$ leave everyone
mismatched. Push the count of people up and the *fraction* with nobody matched barely
moves — it hovers near $0.3679$. Where does that stubborn number come from?

## Discovery

1. Fix $n$ people (positions $1,\dots,n$) and think of a return of hats as a permutation
   $\sigma$, where $\sigma(i)=i$ means person $i$ got their own hat. Let $A_i$ be the set of
   permutations with $\sigma(i)=i$. Write "at least one person gets their own hat" as a union of
   the $A_i$, and write the number of permutations with *no* fixed point as $n!$ minus the size of
   that union.
2. Compute $|A_i|$: if position $i$ is pinned to itself, the remaining $n-1$ positions are free —
   how many such permutations? Then $|A_i\cap A_j|$ for a fixed pair, and in general the size of an
   intersection of $k$ of the sets $A_{i_1},\dots,A_{i_k}$.
3. Inclusion–exclusion needs, for each $k$, the number of $k$-fold intersections times their common
   size. How many ways are there to choose the $k$ pinned positions, and what does each intersection
   contribute? Assemble the alternating sum for $|A_1\cup\cdots\cup A_n|$.
4. Subtract that union from $n!$ and simplify the result to a single alternating sum. Then divide the
   whole thing by $n!$: which familiar infinite series do the resulting terms match as $n$ grows?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **derangement** of $\{1,\dots,n\}$ is a permutation with no fixed point. Their count is
$$D_n \;=\; n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}
\;=\; n! - \binom{n}{1}(n-1)! + \binom{n}{2}(n-2)! - \cdots + (-1)^n\binom{n}{n}0!,$$
with $D_0=1,\ D_1=0,\ D_2=1,\ D_3=2,\ D_4=9,\ D_5=44,\dots$ (also written $!n$, the *subfactorial*).
Two consequences: $D_n$ is the nearest integer to $n!/e$, and the probability that a random
permutation is a derangement is $D_n/n! \to 1/e \approx 0.3679$. The recurrences
$D_n=(n-1)(D_{n-1}+D_{n-2})$ and $D_n = nD_{n-1}+(-1)^n$ also hold.

### Proof

Count permutations of $\{1,\dots,n\}$ with no fixed point by inclusion–exclusion. For a set
$T\subseteq\{1,\dots,n\}$ let $A_T=\bigcap_{i\in T}A_i$ be the permutations fixing every position in
$T$. Fixing the $|T|=k$ positions in $T$ leaves the other $n-k$ positions to be permuted freely, so
$|A_T|=(n-k)!$, depending only on $k$. There are $\binom{n}{k}$ sets $T$ of size $k$. By
inclusion–exclusion, the number of permutations fixing **no** point is
$$D_n=\sum_{T}(-1)^{|T|}|A_T|=\sum_{k=0}^{n}(-1)^k\binom{n}{k}(n-k)!
=\sum_{k=0}^{n}(-1)^k\frac{n!}{k!(n-k)!}(n-k)!=n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}.$$
Since $\sum_{k=0}^{\infty}(-1)^k/k! = e^{-1}$ and the tail $\left|\sum_{k>n}(-1)^k/k!\right| \lt 1/n!$
for $n\ge1$, we get $\left|D_n-n!/e\right| \lt 1$, so $D_n$ is the nearest integer to $n!/e$.
$\blacksquare$

### Worked Instance

The Hook has $n=4$:
$$D_4 = 4!\left(1-1+\tfrac12-\tfrac16+\tfrac1{24}\right)=24-24+12-4+1=9.$$
So $9$ of the $24$ returns leave everyone hatless-of-their-own, a probability
$9/24=0.375$, already close to $1/e\approx0.3679$. At $n=5$, $D_5=44$ and $44/120\approx0.3667$;
the fraction is pinned near $1/e$ from the start.

### Pitfalls

- **$D_1=0$, not $1$.** One person can only receive their own hat, so no derangement exists;
  the formula gives $1!(1-1)=0$.
- **The signs alternate.** Dropping a sign turns the alternating sum into nonsense; the pattern is
  $+,-,+,-,\dots$ ending at $(-1)^n$.
- **$n!/e$ is an approximation, the sum is exact.** Report $D_n$ as the integer sum (or the rounded
  $n!/e$), never $n!/e$ itself, which is irrational for $n\ge1$.
- **Probability tends to $1/e$, not $0$.** Intuition says "surely nobody matches gets rarer," but the
  chance settles at $\approx0.368$ and stays there.

:::
:::

## Connections

Derangements are the flagship application of inclusion–exclusion (`comb-pie`): the events "person $i$
is fixed" overlap, and the alternating correction is exactly the sign pattern of $e^{-1}$. The same
machinery counts surjections, Euler's totient, and objects avoiding a family of forbidden patterns.
The count also drops out of the indicator method (`comb-constructive-expectation`), where the
*expected* number of fixed points is $1$ for every $n$. Recognition trigger: "how many arrangements
avoid *all* of these forbidden matchings?" — set up $A_i$ for each forbidden match and alternate.
