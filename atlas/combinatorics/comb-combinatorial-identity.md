Compute $\binom{6}{2}$ and $\binom{6}{4}$: both are $15$. Compute $\binom{10}{3}$ and $\binom{10}{7}$:
both are $120$. The binomial coefficients mirror themselves. And there's a second pattern hiding: each
count seems to be the sum of two smaller ones. Neither is a coincidence — each is a story about
choosing.

## Discovery

1. Compute $\binom{7}{2}$ and $\binom{7}{5}$ from the formula, and write both results side by side.
2. To choose a $2$-element subset of a $7$-element set, you decide who is *in*. But deciding who is
   *in* also decides who is *out*. If you must leave out $5$ elements, describe the exact
   correspondence between "$2$-subsets you pick" and "$5$-subsets you leave behind." What does that say
   about the two counts in step $1$?
3. Now a different split. Among all $k$-element subsets of $\{1, 2, \dots, n\}$, focus on the specific
   element $n$: a subset either contains $n$ or it doesn't. Count each kind by describing what's left
   to choose from the other $n-1$ elements. How many elements must you still pick in each kind?
4. Combine your two counts from step $3$ using the addition principle. What equation relates
   $\binom{n}{k}$ to two binomial coefficients with top number $n-1$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Two combinatorial identities.** For integers $0 \le k \le n$:

- **Symmetry:**
  $$\binom{n}{k} = \binom{n}{n-k}.$$
- **Pascal's rule (recurrence):** for $1 \le k \le n-1$,
  $$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$

Both are equalities of *counts*, and each has a one-line proof as a story about choosing, rather than
by grinding factorials. Pascal's rule expresses each coefficient through two smaller ones and is the
engine of Pascal's triangle.

### Proof

**Symmetry, by a bijection.** Let $U$ be an $n$-element set. Choosing a $k$-subset $A \subseteq U$ to
*keep* is the same act as choosing its complement $U \setminus A$, a subset of size $n-k$, to
*discard*. The map $A \mapsto U \setminus A$ sends each $k$-subset to an $(n-k)$-subset; it is
reversible (apply it again to recover $A$, since $U \setminus (U\setminus A) = A$), so it is a
one-to-one correspondence between the $k$-subsets and the $(n-k)$-subsets. Corresponding collections
have equal size, hence $\binom{n}{k} = \binom{n}{n-k}$.

**Pascal's rule, by casework.** Count the $k$-subsets of $\{1, 2, \dots, n\}$ by splitting on the
single element $n$:

- Subsets that *contain* $n$: the element $n$ is fixed as a member, so the remaining $k-1$ members must
  be chosen from the other $n-1$ elements, giving $\binom{n-1}{k-1}$ subsets.
- Subsets that *omit* $n$: all $k$ members come from the other $n-1$ elements, giving $\binom{n-1}{k}$
  subsets.

These two cases are disjoint (a subset either has $n$ or lacks it, never both) and exhaustive, so by
the addition principle the total number of $k$-subsets is
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}. \qquad \blacksquare$$
*(Both can also be checked by factorials — e.g. symmetry from $k!(n-k)! = (n-k)!\,k!$ — but the
choosing stories explain* why *the equalities hold.)*

### Worked Instance

Symmetry resolves the Hook: $\binom{6}{2} = \binom{6}{4}$ because choosing which $2$ of $6$ to include
is choosing which $4$ to exclude; both equal $15$. In practice symmetry saves labor — compute
$\binom{20}{18}$ as $\binom{20}{2} = \dfrac{20\cdot 19}{2} = 190$ rather than multiplying eighteen
factors.

Pascal's rule lets coefficients be built by addition alone. To get $\binom{5}{2}$ without the formula:
$$\binom{5}{2} = \binom{4}{1} + \binom{4}{2} = 4 + 6 = 10,$$
and each of those can be broken down further the same way, bottoming out at $\binom{m}{0} =
\binom{m}{m} = 1$.

### Pitfalls

- **Symmetry needs $0 \le k \le n$.** The complement bijection assumes $A$ is an actual subset;
  outside that range both sides are $0$ by convention, which is consistent but not what the picture
  proves.
- **Pascal's rule shifts the top number down by one.** It is $\binom{n-1}{k-1} + \binom{n-1}{k}$, both
  with top $n-1$; a common error is leaving one of them at top $n$.
- **Mind the boundaries of the recurrence.** For $k = 0$ or $k = n$ the split degenerates (one case is
  empty); the recurrence is stated for $1 \le k \le n-1$, with the edges pinned by
  $\binom{n}{0} = \binom{n}{n} = 1$.
- **A combinatorial proof must exhibit a genuine bijection or partition.** "The numbers happen to
  match" is evidence, not proof; name the map or the cases.

:::
:::

## Connections

These identities give $\binom{n}{k}$ (`comb-combinations-elem`) its internal structure. Pascal's rule
is precisely the addition law that builds Pascal's triangle (`comb-pascal-elem`) row from row, and the
"tell a choosing story" method here is the template for every combinatorial proof — including the
hockey-stick identity and the binomial theorem downstream. The v1 node `comb-perms-combs` reuses this
symmetry as folklore. Recognition trigger: an equation between binomial coefficients — before touching
factorials, ask "what are both sides *counting*?" and look for a bijection or a one-element split.

## History

Proving an identity by counting one set two different ways — "double counting," or the bijective method — is a style of argument as old as combinatorics but sharpened in the modern era. Pascal already reasoned this way about his triangle in $1654$, and the tradition runs through Leonhard Euler and later combinatorialists. In the $20$th century the bijective and double-counting philosophy was championed explicitly, notably in the work and teaching of mathematicians such as Gian-Carlo Rota. The approach matters because it replaces opaque algebra with transparent counting: if two expressions count the same collection, they must be equal, and the *reason* is visible. It is the aesthetic core of enumerative combinatorics.
