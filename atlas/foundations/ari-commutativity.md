A cashier rings up a $7$-dollar item then a $4$-dollar item; you'd have paid the same total if they'd
scanned in the reverse order. Everyone "knows" order doesn't matter — but the definitions of $+$
and $\times$ were lopsided (count on from the *first* number; make *rows* of the first number).
Why does the lopsidedness vanish in the answer?

## Discovery

1. Take $7$ pebbles and $4$ pebbles. Pool them and count. Now pool them again but tip the $4$-bag
   in first and the $7$-bag second, and count. Record both totals side by side.
2. Here is a way to see step $1$ without trusting the count. Put the two bags' pebbles in a single
   row and draw a line between the group of $7$ and the group of $4$. What changes about the whole
   row if you slide the line's two sides past each other — does the *set* of pebbles change at all?
3. Now a rectangle of dots, $3$ rows of $5$. Count it as "$3$ fives." Then turn the page $90^\circ$
   so rows become columns and count it as "$5$ threes." You have not added or removed a dot — what
   must be true of the two products you just wrote?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Commutativity.** For all natural numbers $a,b$,
$$a + b = b + a \qquad\text{and}\qquad ab = ba.$$
The order of the addends does not affect the sum; the order of the factors does not affect the
product. (Not every operation is commutative — subtraction and division are not — so this is a
genuine property of $+$ and $\times$, not a triviality.)

### Proof

Both halves are "count one object two ways," made rigorous.

*Addition.* Let $A$ be a collection of $a$ objects and $B$ a disjoint collection of $b$ objects.
The sum $a+b$ is the size of the pool $A\cup B$, and $b+a$ is the size of the pool $B\cup A$. But
$A\cup B$ and $B\cup A$ are the *same set* of objects — union does not depend on the order we name
the two parts — so they have the same size. A fixed finite collection has exactly one count (two
counts pair off one-to-one, so by trichotomy they are equal). Hence $a+b=b+a$.

*Multiplication.* Consider the rectangular array $R$ with $a$ dots along each row and $b$ rows.
Counting row by row gives $b$ copies of $a$, i.e. the array's size is one product; counting the
*same* array column by column gives $a$ copies of $b$, i.e. its size is the other product. Concretely
each dot sits at a unique position (row $i$, column $j$) with $1\le i\le b$ and $1\le j\le a$, and
this pairing is a perfect matching between "dots" and "positions" whichever way we sweep. So the two
sweeps count one and the same set of dots and must agree:
$$ab = (\text{dots in } R) = ba.$$
Since a finite set has a single size, the two products are equal. $\blacksquare$

*(Alternative: both laws also follow by induction from the Peano recursions for $+$ and
$\times$; the counting proof is the honest picture and needs no separate lemmas.)*

### Worked Instance

The Hook: $7+4$ counts the pooled pile one way, $4+7$ the other, but it is one pile of pebbles, so
$7+4=11=4+7$. And a $3\times 5$ grid of tiles holds $15$ tiles read as "$3$ rows of $5$"
($5+5+5$) or as "$5$ columns of $3$" ($3+3+3+3+3$); the tiles never moved, so $3\cdot5=15=5\cdot3$.
Commutativity is why a mental-math trick like "$5\times 18 = 18\times 5 = 90$" is allowed:
whichever factor is easier to skip-count by, you may put second.

### Pitfalls

- **Commutativity is special, not universal.** $7-4\ne 4-7$ and $8\div 2\ne 2\div 8$. Do not carry
  "order doesn't matter" over to subtraction or division.
- **It does not say $ab=a+b$.** Reordering within one operation is free; swapping operations is a
  different (false) claim.
- **The array must be a *full* rectangle.** A ragged arrangement (rows of unequal length) is not
  $a\cdot b$ and the two-way count can fail; commutativity is a statement about complete arrays.
- **"Obvious" is not a proof.** The definitions of $+$ and $\times$ single out the first input; the
  content here is showing the asymmetry cancels.

:::
:::

## Connections

The first structural law of arithmetic, resting on how $+$ and $\times$ were built and on
counting a set two ways. With associativity it lets you reorder and regroup any sum or product
freely; it is one of the ring axioms that $\ZZ$ (and later $\QQ,\RR$) will satisfy. Recognition
trigger: any time you rearrange addends or factors for convenience — "$4\times 25$ is easier as
$25\times 4$" — you are invoking commutativity.

## History

That order does not matter when adding or multiplying was used unquestioningly for thousands of years — merchants and surveyors never doubted that $3+5=5+3$. The word "commutative" itself was coined much later, by the French mathematician François-Joseph Servois in 1814, as algebraists began isolating the abstract *properties* of operations rather than just computing with them. In the nineteenth century this became urgent: William Rowan Hamilton's discovery of the quaternions in 1843 produced a genuine multiplication in which $ab\ne ba$, showing that commutativity is a real assumption, not a logical necessity. Grassmann, Dedekind, and Peano then *proved* commutativity of natural-number addition and multiplication by induction from the successor axioms. This mattered because it separated the operations that happen to commute from the deeper structural laws, and it opened the door to the whole zoo of non-commutative algebras — matrices, transformations, and quantum observables — that dominate modern mathematics.
