Seat $4$ friends around a round table. In a row there would be $4! = 24$ arrangements, but at a round
table a seating and its rotation are the *same* — so $24$ is too big. It turns out each genuine
circular seating hides inside that $24$ exactly the same number of times. Count the duplicates, divide
them out, and the overcount becomes an exact count.

## Discovery

1. Seat the $4$ friends $A, B, C, D$ in a straight row. How many orderings are there?
2. At a round table, rotating everyone one seat clockwise gives the *same* circular seating. Take one
   fixed circular seating and rotate it through all its positions: how many of the row-orderings from
   step $1$ describe that one circular seating?
3. Every circular seating is represented the *same* number of times (your step-$2$ count) among the
   step-$1$ orderings. If a total count includes each real object the same number of times, what
   single operation recovers the number of real objects?
4. State the general rule you just used, as a relationship between "the naive total," "the number of
   times each true object is counted," and "the true count."

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The division principle.** Suppose a counting method produces a total $N$, but in doing so it counts
each element of the set you actually want *exactly $d$ times*, for the *same* $d$ every time. Then the
true number of distinct objects is
$$\frac{N}{d}.$$
This is the standard cure for **overcounting**: deliberately count in a way that's easy but
duplicative (often because of a symmetry — rotations, reflections, or relabelings of identical items),
determine the fixed multiplicity $d$, and divide it out. The key hypothesis is that $d$ is *constant*
across all objects.

### Proof

Let $S$ be the set of distinct objects wanted, and let the naive method enumerate a list $L$ of $N$
tokens. By hypothesis each object $s \in S$ corresponds to exactly $d$ tokens of $L$. Group the tokens
by which object they represent: this partitions $L$ into $|S|$ groups, one per object, each of size
exactly $d$. The groups are disjoint (a token represents one object) and cover $L$ (every token
represents some object), so by the addition principle
$$N = |L| = \underbrace{d + d + \cdots + d}_{|S| \text{ groups}} = d \cdot |S|.$$
Because $d \ne 0$, dividing gives $|S| = N/d$. The step "sum of $|S|$ equal groups of size $d$ equals
$d\,|S|$" is multiplication, and inverting it is division — which is why the constancy of $d$ is
essential: unequal group sizes cannot be undone by a single division. $\blacksquare$

### Worked Instance

The Hook. Naively seat $4$ friends in order: $N = 4! = 24$ tokens. Each circular seating can be
rotated into $4$ different row-orderings (rotate by $0, 1, 2, 3$ seats), and $d = 4$ for *every*
seating. So the number of distinct circular seatings is
$$\frac{4!}{4} = \frac{24}{4} = 6.$$

A second instance: how many distinct arrangements of the letters of "NOON"? If the two $N$'s and two
$O$'s were all distinct, there would be $4! = 24$ orderings; but swapping the identical $N$'s
($2!$ ways) or the identical $O$'s ($2!$ ways) changes nothing, so each real arrangement is counted
$2! \cdot 2! = 4$ times. Dividing,
$$\frac{4!}{2!\,2!} = \frac{24}{4} = 6.$$
Both problems are the same move: an easy overcount, divided by its constant multiplicity.

### Pitfalls

- **The multiplicity must be constant.** Dividing by $d$ is valid only if *every* object is
  overcounted the same number of times. If some objects have extra symmetry (fewer distinct
  rotations, say), a single division is wrong — split into cases first.
- **Count the duplicates carefully.** For a round table of $n$, rotations give $d = n$; if reflections
  (flipping the table) also count as identical, $d = 2n$. Read the problem for exactly which
  duplicates to merge.
- **Divide, don't subtract.** Overcounting inflates by a *factor*, so the correction is division, not
  subtraction. Subtracting the duplicates is a classic mismatch.
- **Identical objects overcount too.** Repeated letters or indistinguishable items are a symmetry:
  divide by the factorial of each repeat count.

:::
:::

## Connections

Overcounting completes the "big three" counting moves — add (`comb-addition-principle`), multiply
(`comb-multiplication-principle`), divide (here) — and it is division (`ari-division`) inverting the
overcount produced by permutations (`comb-permutations-elem`). Its headline application is
combinations (`comb-combinations-elem`): unordered selections are ordered selections
$P(n,k)$ overcounted by the $k!$ orderings of each chosen set. Recognition trigger: an easy count that
treats as different things the problem calls the same (rotations, reflections, identical items, or
"order doesn't matter") — find the constant multiplicity and divide.

## History

The division principle — deliberately overcounting, then dividing by the redundancy — is the engine behind counting combinations. Medieval mathematicians used it implicitly: Levi ben Gershon (Gersonides), in his *Maasei Choshev* ($1321$), proved formulas for permutations and combinations by exactly this correction. The Arab mathematician al-Khalīl and later Islamic scholars had counted arrangements with similar reasoning. Recognizing that $\binom{n}{k}$ arises from ordered counts divided by $k!$ — because order was counted but should not have been — is the conceptual heart of the permutations-to-combinations step. Modern combinatorics elevates "count with a symmetry, then divide by its size" into a general tool, later formalized in Burnside-type counting.
