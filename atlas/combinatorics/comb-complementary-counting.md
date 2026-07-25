"How many integers from $1$ to $999$ contain at least one digit $7$?" Counting them head-on means
juggling "exactly one $7$," "exactly two," "all three" — a tangle. But the numbers with *no* $7$ at
all are effortless to count. When the thing you want is messy but its opposite is clean, count the
opposite.

## Discovery

1. Write every integer from $0$ to $999$ as a three-digit string (so $5$ is $005$, and $42$ is $042$).
   Using the multiplication principle, how many such strings are there in total?
2. Now count only the strings that contain *no* digit equal to $7$: each of the three positions may
   be which digits, and how many? What is the count?
3. Every string either contains at least one $7$ or contains no $7$ — never both, and always one.
   What does the addition principle say about how "at least one $7$" and "no $7$" relate to the total
   from step $1$?
4. Use step $3$ to get the count of strings with at least one $7$ *without* ever counting them
   directly. (The string $000$ isn't a number from $1$ to $999$ — check it has no $7$, so it doesn't
   disturb the tally.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Complementary counting.** To count a subset $A$ of a finite universe $U$, it is often easier to
count its **complement** $A^c = U \setminus A$ (the elements of $U$ *not* in $A$) and subtract:
$$|A| = |U| - |A^c|.$$
Reach for this whenever "$A$" is described by "at least one," "at most," "not all," or another
condition whose negation is simpler and cleaner to count. The universe $U$ must be a well-defined,
easily counted whole, and $A, A^c$ must be exactly the "wanted" and "unwanted" halves of it.

### Proof

The universe splits into the wanted set and the unwanted set: $U = A \cup A^c$, and no element is both
in $A$ and not in $A$, so $A \cap A^c = \varnothing$. Thus $A$ and $A^c$ partition $U$ into two
disjoint cases, and the addition principle gives
$$|U| = |A| + |A^c|.$$
Subtracting $|A^c|$ from both sides yields $|A| = |U| - |A^c|$. The only requirements are that $U$ be
finite (so the counts are numbers) and that $A^c$ genuinely be *everything in $U$ that is not in $A$*
— getting the universe or the complement slightly wrong is what breaks the method, not the algebra.
$\blacksquare$

### Worked Instance

The Hook. Take $U$ to be all three-digit strings $000$ through $999$; by the multiplication principle
$|U| = 10 \cdot 10 \cdot 10 = 1000$. Let $A$ be the strings with at least one $7$ and $A^c$ those with
no $7$. Each position of an $A^c$ string may be any of the nine non-seven digits, so — multiplication
principle again — $|A^c| = 9 \cdot 9 \cdot 9 = 729$. Therefore
$$|A| = 1000 - 729 = 271.$$
Since the excluded string $000$ contains no $7$, the integers $1$ to $999$ with at least one $7$ also
number $271$. Counting the tidy "no $7$" complement replaced a three-way casework with one
subtraction.

### Pitfalls

- **Define the universe first, exactly.** $|U|$ must be a clean, correct total. A wrong universe
  poisons the subtraction.
- **The complement must be the *precise* negation.** The opposite of "at least one $7$" is "*no* $7$,"
  not "exactly one non-$7$" or "at most one $7$." Negate the condition carefully.
- **"At least one" is the classic trigger.** Direct counts of "at least one …" almost always overlap
  across sub-cases; the complement "none" is a single clean count. When you see "at least," think
  complement.
- **Don't subtract overlapping pieces.** Complementary counting works because wanted and unwanted are
  disjoint *and* exhaust $U$. If your "complement" shares elements with $A$, the subtraction is
  invalid.

:::
:::

## Connections

Complementary counting is a two-case specialization of casework (`comb-casework`) and rides directly
on the addition principle (`comb-addition-principle`), while the universe and complement are usually
sized with the multiplication principle (`comb-multiplication-principle`). Its probability twin is the
complement rule $P(A) = 1 - P(A^c)$ (`comb-probability-rules`), the same idea divided by $|U|$.
Recognition trigger: the words "at least," "at most," "not all," or any condition whose *negation*
collapses a messy multi-case count into one clean subtraction.

## History

Counting the complement — tallying what you do not want and subtracting — is a natural twin of the addition principle and of the probabilistic "complement rule." The idea is implicit in the earliest probability: Cardano, and then Pascal and Fermat in $1654$, repeatedly found it easier to compute the chance of *not* winning. Abraham de Moivre's *Doctrine of Chances* ($1718$) made such complementary reasoning routine. As a stated counting move — "wanted equals everything minus unwanted" — it is a staple of modern competition and textbook combinatorics. Its power is practical: the complement of a messy "at least one" condition is often a single clean case.
