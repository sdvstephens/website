A calendar page runs from day $23$ to day $71$ of the year. Quick: how many days is that? Almost
everyone's first instinct is "$71-23=48$," and almost everyone is wrong by exactly one. Why does
subtraction miss a day, and which day does it forget?

## Discovery

1. Write out every integer from $5$ to $9$ and count them by hand. Then compute $9-5$. Compare the
   two numbers — do they agree?
2. Take the list $5,6,7,8,9$ and subtract $4$ from *every* entry. What new list do you get, and what
   is its largest entry? A list that starts at $1$ is easy to count — its last entry *is* its length.
3. Redo step $2$ in general: start from the integers $a,a+1,\dots,b$ and subtract $a-1$ from each.
   What is the first entry of the shifted list, and what is the last entry, written in terms of $a$
   and $b$?
4. Test the smallest case: how many integers are there "from $a$ to $a$"? Check that your shifting
   recipe from step $3$ gives that same answer.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Counting consecutive integers.** For integers $a \le b$, the number of integers in the inclusive
list $a, a+1, a+2, \dots, b$ is
$$b - a + 1.$$
The "$+1$" is the day subtraction forgets: it counts the starting endpoint, which $b-a$ (a
*difference*, i.e. a number of *gaps*) leaves out. This is the fencepost principle — a straight fence
with $n$ gaps between posts has $n+1$ posts.

### Proof

Define the shift $f(k) = k - (a-1)$, which subtracts the fixed amount $a-1$ from each integer $k$ in
the list. Applied to the endpoints, $f(a) = a-(a-1) = 1$ and $f(b) = b-(a-1) = b-a+1$. Since $f$ adds
the same constant to nothing and only shifts, it sends the consecutive block $a, a+1, \dots, b$ onto
the consecutive block $1, 2, \dots, b-a+1$ without collisions or gaps: $f$ is strictly increasing
(if $k \lt k'$ then $f(k) \lt f(k')$), so it is a one-to-one correspondence between the two lists.
Corresponding lists have the same size, and a list of the form $1,2,\dots,n$ has exactly $n$ entries
by the meaning of counting. Here $n = b-a+1$, so the original list has $b-a+1$ integers.

The smallest case confirms the count: from $a$ to $a$ the formula gives $a-a+1 = 1$, the single
integer $a$. $\blacksquare$

### Worked Instance

The Hook: days $23$ through $71$ inclusive number
$$71 - 23 + 1 = 49$$
days, not $48$. Subtraction counts the $48$ *steps* from day $23$ to day $71$; the missing unit is
day $23$ itself, the post at the near end of the fence.

A slightly harder instance: how many *even* integers lie between $10$ and $40$ inclusive? List them
as $10, 12, \dots, 40$; dividing each by $2$ turns this into the consecutive list $5, 6, \dots, 20$,
which has $20 - 5 + 1 = 16$ entries. Reindexing to a consecutive block is the whole trick.

### Pitfalls

- **The classic off-by-one.** $b - a$ counts *gaps between* the integers; the count of integers is
  one more, $b-a+1$. Forgetting the $+1$ is the single most common counting slip.
- **Inclusive vs. exclusive.** "Between $a$ and $b$" is ambiguous. Integers *strictly* between (both
  endpoints excluded) number $b-a-1$; with one endpoint included, $b-a$. Always pin down which
  endpoints you keep.
- **Evenly spaced but not step $1$.** For an arithmetic list $a, a+d, \dots, b$ with common step $d$,
  first divide out the spacing: the count is $\frac{b-a}{d}+1$. Applying $b-a+1$ directly (with
  $d\ne 1$) overcounts.
- **Descending lists.** If you wrote the range as $b$ down to $a$, the count is still $b-a+1$; use
  the larger endpoint minus the smaller.

:::
:::

## Connections

This is the atom under every counting argument: whenever a case boils down to "how many values can
this take," you are counting a consecutive list. It rests only on subtraction (`ari-subtraction`) and
addition (`ari-addition`). It feeds directly into the addition principle (`comb-addition-principle`),
where each disjoint case is itself a list to be counted, and it silently powers arithmetic-series
sums and range-counting throughout. Recognition trigger: any "how many integers from … to …," any
"how many terms in this evenly spaced list" — reach for $b-a+1$ and check the fencepost.

## History

Counting ordered lists is the oldest kind of enumeration on record. Piṅgala's analysis of Sanskrit prosody (by about the $2$nd century BCE) effectively counted all sequences of long and short syllables, and his commentator Halāyudha ($10$th century) tabulated the results. Enumerating sequences of outcomes was also implicit in the early games of chance studied by Gerolamo Cardano in the $16$th century and made rigorous by Pascal and Fermat in $1654$. The modern habit of treating "a list of choices, one slot at a time" as the atomic counting act belongs to the combinatorics pedagogy that grew out of that tradition. It matters because nearly every harder count — permutations, combinations, probabilities — is built by first learning to count lists cleanly.
