At any gathering, some pairs of people are friends and some are not (friendship is mutual). Count, for each
person, how many friends they have. Claim: the number of people who have an *odd* number of friends is always
*even* — at a family dinner, in a company of $10{,}000$, anywhere. Why should the parity of one person's
friend-count know anything about everyone else's?

## Discovery

1. Form the set $P$ of all *ordered* pairs $(x,y)$ with $x$ and $y$ friends and $x\ne y$. Count $|P|$ by first
   choosing the person $x$, then choosing a friend $y$ of $x$. Write $|P|$ in terms of the friend-counts
   $d(x)$.
2. Count the *same* set $P$ a second way: group its pairs by the underlying unordered friendship $\{x,y\}$.
   How many ordered pairs does each friendship contribute? So $|P|$ is what multiple of the number $F$ of
   friendships?
3. Set your two expressions for $|P|$ equal. What does that say about the parity of $\sum_x d(x)$?
4. Split $\sum_x d(x)$ into the even-$d$ people and the odd-$d$ people. Given step 3, what is forced about how
   many odd-$d$ people there are?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Double counting (the two-way-counting mindset).** To prove an identity, a divisibility, or an existence or
bound, choose one cleverly-built finite set $S$ and **count $|S|$ in two different ways**. Since $|S|$ is a
single number, the two answers *must be equal* — and that forced equality is your theorem. Equivalently:
arrange the incidences as a $0/1$ (or integer) matrix and sum its entries by **rows** and by **columns**; the
two totals agree. This is the finite "Fubini principle."

The mindset is cross-domain: the set you count can live in combinatorics (handshakes, committees), number
theory (divisor pairs, lattice points), algebra (monomials), or geometry (incidences of points and lines).
The creative act is *choosing what to count* so that both tallies are computable and their equality is the
statement you want.

### Proof

Why is "count it twice" a proof and not a coincidence? Because the cardinality of a finite set is well-defined
— independent of the order or grouping used to enumerate it.

Make it precise with an **incidence matrix**. Suppose the objects being counted are the $1$-entries of a
matrix $M = (M_{ij})$ with $i$ ranging over one index set and $j$ over another. Let $r_i = \sum_j M_{ij}$ be
the $i$-th row sum and $c_j = \sum_i M_{ij}$ the $j$-th column sum. Summing all entries by rows first, then
by columns,
$$\sum_i r_i = \sum_i \sum_j M_{ij} = \sum_j \sum_i M_{ij} = \sum_j c_j,$$
the middle equality being the finite interchange of summation. So "total counted by rows" $=$ "total counted
by columns." Every double-counting argument is this identity with a well-chosen $M$: rows are one way of
grouping the counted incidences, columns the other. $\blacksquare$

### Worked Instance

**Resolving the Hook (handshake lemma).** Let $P$ be the ordered friend-pairs. Counting by the first person,
$|P| = \sum_x d(x)$. Counting by unordered friendship, each of the $F$ friendships gives two ordered pairs, so
$|P| = 2F$. Hence $\sum_x d(x) = 2F$ is **even**. Splitting the sum into even and odd terms, the even-$d$
contributions are even, so the odd-$d$ contributions must sum to an even number; a sum of odd numbers is even
only when there is an *even count* of them. Therefore the number of people with an odd number of friends is
even. $\blacksquare$

**A clean identity.** Prove $k\binom{n}{k} = n\binom{n-1}{k-1}$ by counting pairs (committee of size $k$
chosen from $n$ people, with one member marked as chair). Choosing the committee first, then its chair, gives
$\binom{n}{k}\cdot k$. Choosing the chair first (from all $n$), then the other $k-1$ members from the
remaining $n-1$, gives $n\cdot\binom{n-1}{k-1}$. Same set of (committee, chair) pairs, so
$k\binom{n}{k} = n\binom{n-1}{k-1}$.

### Pitfalls

- **Both tallies must count the *same* set.** If the two enumerations quietly count different things, the
  equality is meaningless. Pin down $S$ first.
- **Ordered vs. unordered.** Mismatched conventions produce a stray factor (usually $2$ or $k!$). Decide once
  whether pairs are ordered and stay consistent.
- **Multiplicity.** Each element must be counted the *same* number of times by both methods (ideally once).
  Overcounting on one side only corrupts the identity.
- **Existence needs a gap, not equality.** For existence/bound arguments (pigeonhole-flavored), you compare
  two counts to force a collision; make sure the inequality — not just equality — is what you extract.

:::
:::

## Connections

Prereq: **comb-double-counting**, the combinatorial home of the technique; this node lifts it into a
cross-domain proof reflex. It underlies **comb-handshake** (the degree-sum lemma), pairs naturally with
**comb-pigeonhole** for existence arguments, and reappears as **la-secretly-linear-algebra** when the
incidence matrix is studied over a field. In number theory it yields identities like
$\sum_{d\mid n}\varphi(d)=n$ and Fermat's little theorem via counting necklaces. Recognition trigger: a target
identity or divisibility with a symmetric, "two roles" flavor — count the pairs (object, feature) once per
role. Common on the Putnam and olympiad combinatorics.

## History

Counting a quantity two ways is as old as arithmetic, but its rise to a *named principle* traces to graph
theory's birth: Leonhard Euler's 1736 analysis of the Königsberg bridges contains the degree-sum (handshake)
lemma, the prototypical double count. Nineteenth- and twentieth-century combinatorics turned the habit into a
workhorse — Cauchy, Sylvester, and later Paul Erdős wielded "counting in two ways" to prove extremal and
number-theoretic results with startling economy. The tidy matrix formulation ("sum the entries by rows and by
columns") is sometimes called the *Fubini principle* for finite sets, by analogy with Fubini's theorem for
interchanging integrals. The technique carries no single discoverer's name precisely because it is a
reasoning pattern rather than a theorem; competition trainers such as Arthur Engel and Paul Zeitz elevated it
to an explicit, teachable mindset.
