Slide down a diagonal of Pascal's triangle — $1, 3, 6, 10$ — and add as you go: $1+3+6+10 = 20$. That
total is sitting right there in the triangle, one step below and beside where the diagonal stopped.
The diagonal plus its landing spot trace the shape of a hockey stick. Why does a slanted sum always
land on a single binomial coefficient?

## Discovery

1. In Pascal's triangle, add along the diagonal $\binom{2}{2} + \binom{3}{2} + \binom{4}{2}$. Compute
   the sum, then hunt for that exact number elsewhere in the triangle. Which single entry $\binom{?}{?}$
   equals it, and where does it sit relative to the last diagonal entry?
2. Try a second diagonal: $\binom{1}{1} + \binom{2}{1} + \binom{3}{1} + \binom{4}{1}$. Again find the
   single entry equal to the sum. Does the same positional pattern as step $1$ hold?
3. Set up a choosing story. Count the $(r+1)$-element subsets of $\{1, 2, \dots, n+1\}$ by classifying
   each subset according to its **largest** element. If the largest element is some value, how many
   ways are there to choose the *rest* of the subset, and from how many smaller numbers?
4. Let the largest element range over all its possible values and add the counts from step $3$ with
   the addition principle. What total do you get, and how does it match the pattern from steps $1$–$2$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The hockey-stick identity.** For integers $0 \le r \le n$,
$$\sum_{i=r}^{n} \binom{i}{r} = \binom{r}{r} + \binom{r+1}{r} + \cdots + \binom{n}{r} = \binom{n+1}{r+1}.$$
A run of binomial coefficients down a diagonal of Pascal's triangle (top number increasing, bottom
number fixed at $r$) sums to the single coefficient $\binom{n+1}{r+1}$ — the entry one row below and
one place beyond the last term. Drawn on the triangle, the summed diagonal and its answer form the
"hockey stick." (The name is folklore, not a formal title.)

### Proof

Count the $(r+1)$-element subsets of $\{1, 2, \dots, n+1\}$ two ways.

**Directly**, there are $\binom{n+1}{r+1}$ such subsets.

**By largest element**, classify each $(r+1)$-subset by its greatest member $m$. Since a subset of
size $r+1$ has a largest element at least $r+1$ (it needs $r$ smaller members below it) and at most
$n+1$, we have $m \in \{r+1, r+2, \dots, n+1\}$. Once $m$ is fixed as the maximum, the remaining $r$
members must be chosen from the strictly smaller numbers $\{1, 2, \dots, m-1\}$, and there are
$\binom{m-1}{r}$ ways to do so. These classes (one per value of $m$) are disjoint — a subset has one
largest element — and exhaustive, so the addition principle gives
$$\binom{n+1}{r+1} = \sum_{m=r+1}^{n+1} \binom{m-1}{r}.$$
Reindex with $i = m-1$ (so $i$ runs from $r$ to $n$):
$$\binom{n+1}{r+1} = \sum_{i=r}^{n} \binom{i}{r}. \qquad \blacksquare$$
*(Alternatively, telescope Pascal's rule $\binom{i+1}{r+1} = \binom{i}{r} + \binom{i}{r+1}$ from
$i=r$ upward; the largest-element story is the cleaner picture.)*

### Worked Instance

The Hook. The diagonal $1, 3, 6, 10$ is $\binom{2}{2}, \binom{3}{2}, \binom{4}{2}, \binom{5}{2}$
(bottom fixed at $2$), so with $r = 2$ and $n = 5$,
$$\binom{2}{2} + \binom{3}{2} + \binom{4}{2} + \binom{5}{2} = \binom{6}{3} = 20.$$
Indeed $1 + 3 + 6 + 10 = 20$, and $\binom{6}{3}$ sits one row down and one step over — the head of the
stick.

A direct application: how many ways can a running total reach exactly... consider the sum
$\binom{5}{5} + \binom{6}{5} + \cdots + \binom{10}{5}$. By the identity with $r = 5$, $n = 10$, it
collapses to $\binom{11}{6} = 462$ — six terms replaced by one lookup.

### Pitfalls

- **The bottom index is fixed; the top runs.** The summed terms are $\binom{i}{r}$ with $r$ constant
  and $i$ increasing. A common error is letting the bottom index move instead.
- **Start the sum at $\binom{r}{r}$.** The diagonal begins at top number $r$ (value $1$), not at $0$;
  terms $\binom{i}{r}$ with $i \lt r$ are $0$ and only pad the sum.
- **The answer's indices both shift up by one.** The sum is $\binom{n+1}{r+1}$, not $\binom{n}{r+1}$ or
  $\binom{n+1}{r}$. Miscount here and you land on the wrong entry.
- **It's a diagonal, not a row.** The hockey-stick sum runs down a slanted line of the triangle;
  don't confuse it with the horizontal row sum, which gives $2^n$.

:::
:::

## Connections

The hockey-stick identity is a diagonal companion to Pascal's triangle (`comb-pascal-elem`) and its
horizontal row-sum, both proved by counting two ways. Its "classify by the extreme element" trick — here,
the maximum — recurs across olympiad combinatorics and probability. It also gives closed forms for sums
of figurate numbers (triangular, tetrahedral) and feeds identities used with the binomial theorem
(`comb-binomial-pascal`). Recognition trigger: a sum of binomial coefficients marching down a diagonal
(top index increasing, bottom fixed) — collapse it to one coefficient.

## History

The hockey-stick (or "Christmas-stocking") identity — summing a diagonal of Pascal's triangle to reach a single entry deeper in — is a property of the triangle whose components were understood by the medieval and early-modern writers who studied that array, from al-Karajī and Omar Khayyām to Pascal himself in the $1650$s. Pascal's *Traité du triangle arithmétique* proved many such diagonal-sum relations while establishing the triangle's additive structure. The identity has no single celebrated discoverer; it is a corollary of the same additive rule the array is built on. Its memorable name is modern and informal, from the shape the summed cells trace. It matters as a clean example of how one structural rule of the triangle generates a whole family of summation formulas.
