Add up the numbers of friends each person in a room has, and the total is always even — no matter
who is friends with whom. The reason is not about parity of individuals but about counting the
same collection of friendships from two different angles and insisting the two counts agree.

## Discovery

1. Consider the identity $\displaystyle\sum_{k=0}^{n} k\binom{n}{k} = n\,2^{\,n-1}$. Rather than
   manipulate it, invent a *set of objects* it could be counting. Try: pairs $(S, x)$ where $S$
   is a subset of $\{1,\dots,n\}$ and $x$ is a chosen "leader" *inside* $S$.
2. Count those pairs by first choosing $S$ (of some size $k$) and then a leader within it. Summing
   over the size $k$, what expression do you get? (This should reproduce the left side.)
3. Count the *same* pairs the other way: first choose the leader $x$ from all $n$ elements, then
   build the rest of $S$ from the remaining elements freely. What expression results?
4. Both counts enumerate the identical set of pairs, so they must be equal. Which identity have
   you just proved, and what made the proof work without any algebra?
5. State the underlying principle in one sentence: what do you get whenever you count one finite
   set of objects in two different ways?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Double counting.** If a single finite set of objects is counted in two different ways, the two
counts are equal. Formally, for a set $R \subseteq X \times Y$ of "incidences,"
$$\sum_{x \in X} \#\{\,y : (x,y)\in R\,\} = |R| = \sum_{y\in Y} \#\{\,x : (x,y)\in R\,\},$$
i.e. summing row counts and summing column counts of the same $0$–$1$ incidence table give the same
total. This is the finite, elementary shadow of Fubini's theorem, and it turns many identities and
existence results into a matter of counting one thing two ways.

### Proof

Let $R\subseteq X\times Y$ be a finite set of ordered pairs (incidences). Define the indicator
$a_{x,y} = 1$ if $(x,y)\in R$ and $0$ otherwise, so $|R| = \sum_{x\in X}\sum_{y\in Y} a_{x,y}$.
A finite double sum may be evaluated in either order, since addition is commutative and
associative:
$$\sum_{x\in X}\Big(\sum_{y\in Y} a_{x,y}\Big) = \sum_{(x,y)} a_{x,y} = \sum_{y\in Y}\Big(\sum_{x\in X} a_{x,y}\Big).$$
The inner sum $\sum_{y} a_{x,y}$ is the number of $y$ paired with a fixed $x$ (its "row count"),
and $\sum_{x} a_{x,y}$ is the number of $x$ paired with a fixed $y$ (its "column count"). Hence the
sum of row counts equals the sum of column counts, both equal to $|R|$. $\blacksquare$

### Worked Instance

Prove $\sum_{k=0}^{n} k\binom{n}{k} = n\,2^{\,n-1}$ by counting leader-in-committee pairs
$(S,x)$ with $x\in S\subseteq\{1,\dots,n\}$.

*By committee first:* a committee of size $k$ can be chosen in $\binom{n}{k}$ ways and its leader
in $k$ ways, so the total is $\sum_{k=0}^{n} k\binom{n}{k}$.

*By leader first:* pick the leader in $n$ ways, then each of the other $n-1$ people is
independently in or out of the committee, giving $2^{\,n-1}$ ways. Total $n\,2^{\,n-1}$.

Both count the same pairs, so $\sum_{k} k\binom{n}{k} = n\,2^{\,n-1}$. $\blacksquare$

### Pitfalls

- Both counts must enumerate **exactly the same objects**. If the two descriptions secretly count
  different sets (e.g. ordered vs. unordered, or with a hidden overlap), the equality is false.
- **Order of choices matters within a count but must be consistent.** In the worked instance,
  "committee then leader" and "leader then rest" both build the pair $(S,x)$ — verify each really
  produces every valid pair once.
- Double counting proves an equality of *counts*; it does not, by itself, construct a bijection.
  It is a lighter tool than a bijective proof and often easier when a natural "two viewpoints"
  object exists.
- When counts are inequalities in disguise (e.g. an averaging/extremal argument), you compare a
  total to $|X|$ times an average — keep track of whether you need equality or a bound.

:::
:::

## Connections

Prereqs: combinations (`comb-perms-combs`), the objects usually being counted. Double counting is
the engine behind the handshake lemma (`comb-handshake`, degrees summed = twice the edges) and
Burnside's orbit-counting formula (`comb-burnside`, fixed points counted two ways). It is the
close cousin of bijective proofs (`comb-bijective`): a bijection matches two sets, double counting
tallies one set two ways. Recognition trigger: an identity or extremal claim about a total that
you can compute "by rows" and "by columns" — set up the incidence structure and equate.
