A recipe wants $\tfrac{11}{4}$ cups of flour. Nobody measures eleven-quarters; they scoop $2$ full
cups and then $\tfrac34$ more — "$2\tfrac34$." The two names describe the identical amount. How do
you pass between the pile-of-quarters name and the whole-cups-plus-leftover name, and why is
$2\tfrac34$ not $2\times\tfrac34$?

## Discovery

1. You have $\tfrac{11}{4}$, i.e. eleven quarter-cups. Bundle them into full cups: $4$ quarters make
   a whole cup. How many whole cups can you make, and how many quarter-cups are left over? Write the
   amount as "(whole cups) and (leftover quarters)."
2. Which operation on $11$ and $4$ produced your "how many wholes" and "how many left over" in step
   $1$? Name it and write the two numbers it gives.
3. Go the other way. Take $2\tfrac34$ and rebuild the single pile of quarters: how many quarters are
   in $2$ whole cups, and how many more does the $\tfrac34$ add? Write the total as one fraction over
   $4$.
4. A mixed number like $2\tfrac34$ silently means "$2$ *plus* $\tfrac34$." Test what would go wrong
   if it meant "$2$ *times* $\tfrac34$" instead: compute both and compare to your step-$3$ pile.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Mixed numbers and improper fractions are the same amount, two ways.** An **improper fraction**
$\tfrac ab$ (with $a\ge b\gt 0$) names an amount $\ge 1$ as a single pile of $b$-ths. A **mixed
number** $q\tfrac rb$ names it as a whole number $q$ **plus** a proper fraction $\tfrac rb$:
$$q\,\frac rb \;=\; q + \frac rb .$$
Convert improper $\to$ mixed by division with remainder: $a = qb + r$ with $0\le r\lt b$ gives
$$\frac ab = q\,\frac rb, \qquad q = a\div b \text{ (quotient)}, \quad r = \text{remainder}.$$
Convert mixed $\to$ improper by $q\tfrac rb = \tfrac{qb + r}{b}$. The juxtaposition in $q\tfrac rb$
means **addition**, never multiplication — the one place in arithmetic where writing two things side
by side does not mean "times."

### Proof

Both directions are one identity, $q\tfrac rb = q + \tfrac rb$, read forward and backward, anchored
by division with remainder.

*Improper $\to$ mixed.* Divide $a$ by $b$: there are unique integers $q,r$ with $a=qb+r$ and
$0\le r\lt b$ (division with remainder). Then, splitting the pile,
$$\frac ab = \frac{qb+r}{b} = \frac{qb}{b} + \frac rb = q + \frac rb = q\,\frac rb,$$
using $\tfrac{qb}{b}=q$ and the like-denominator split of a sum. Because $0\le r\lt b$, the tail
$\tfrac rb$ is a *proper* fraction, so this is the genuine "whole part plus leftover." 

*Mixed $\to$ improper.* Reverse it: give $q$ the common denominator $b$ and add,
$$q\,\frac rb = q + \frac rb = \frac{qb}{b} + \frac rb = \frac{qb+r}{b}.$$
The two conversions are inverse because $a=qb+r$ is exactly the numerator produced. Finally,
$q\tfrac rb$ *must* mean $q+\tfrac rb$, not $q\cdot\tfrac rb$: for $2\tfrac34$ the addition gives
$2+\tfrac34=\tfrac{11}4$, matching the pile of eleven quarters, whereas the product would give
$2\cdot\tfrac34=\tfrac64=\tfrac32$, a different, smaller amount. $\blacksquare$

### Worked Instance

The Hook's $\tfrac{11}{4}$: divide $11$ by $4$ to get quotient $2$, remainder $3$ (since
$11 = 2\cdot 4 + 3$), so $\tfrac{11}{4} = 2\tfrac34$ — two full cups and three quarter-cups.
Reversing: $2\tfrac34 = \tfrac{2\cdot 4 + 3}{4} = \tfrac{11}{4}$. And the meaning matters:
$2\tfrac34 = 2 + \tfrac34 = \tfrac{11}{4} = 2.75$ of a cup, not $2\cdot\tfrac34 = \tfrac32 = 1.5$.

### Pitfalls

- **$q\tfrac rb$ is $q + \tfrac rb$, not $q\cdot\tfrac rb$.** This is the sole place juxtaposition
  means addition; in algebra $2x$ means $2\cdot x$, so watch the switch.
- **Multiply the *denominator* by the whole part.** For $q\tfrac rb$ the new numerator is $qb+r$;
  forgetting the $\times b$ (e.g. writing $q+r$ over $b$) is a standard error.
- **The remainder rides the original denominator.** In $\tfrac{11}{4}=2\tfrac34$, the leftover $3$ is
  still out of $4$, not out of $2$.
- **For arithmetic, improper is usually friendlier.** Multiply and divide as improper fractions;
  convert to mixed only for a final human-readable answer.

:::
:::

## Connections

Mixed numbers rest on the meaning of a fraction and on addition (a whole plus a proper part), with
the conversion powered by division with remainder. They are the human-facing form of an amount above
one, while improper fractions are the compute-facing form used inside multiplication, division, and
decimals. Recognition trigger: an "and a bit" measurement, or a final answer larger than one that a
reader must picture, wants the mixed-number name.

## History

Writing a quantity as a whole number plus a fraction, like $2\tfrac13$, mirrors the most natural way people measure — a number of full units and a leftover part. The Romans used a duodecimal system of fractional units (the *uncia* and its relatives) that amounted to mixed quantities, and medieval European commercial arithmetic, dealing in currencies, weights, and measures with many subunits, relied heavily on mixed forms. The notation and handling of mixed numbers were systematized as Hindu–Arabic numerals and fraction notation spread through Fibonacci's *Liber Abaci* (1202) and later reckoning manuals. The recognition that a mixed number is simply a compact name for an improper fraction — $2\tfrac13 = \tfrac73$ — reflects the same equivalence-class understanding of rationals formalized in the nineteenth century. This mattered mostly for practical computation and measurement, and it survives today wherever human-readable quantities beat raw improper fractions.
