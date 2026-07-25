How many length-$n$ strings of $0$'s and $1$'s contain no two $1$'s in a row? For $n=1,2,3,4$ the counts
are $2,3,5,8$ — the Fibonacci numbers, marching in. You never list all the strings; you notice how a
good string of length $n$ is built from shorter good strings, and the recurrence writes itself.

## Discovery

1. Let $a_n$ be the number of length-$n$ binary strings with no two adjacent $1$'s. Split these strings
   by their **last symbol**. If the string ends in $0$, chopping that $0$ leaves a shorter good string —
   of what length, and how many are there? If it ends in $1$, what must the symbol just before it be,
   and after removing that forced ending what shorter count remains?
2. Combine the two disjoint cases from step $1$ into a single recurrence for $a_n$. Then compute the two
   smallest values $a_1$ and $a_2$ directly, so the recurrence has something to stand on.
3. A different object, same move: count the ways $c_n$ to climb a staircase of $n$ steps taking strides
   of $1$ or $2$ steps. Condition on the size of the **first** stride. What recurrence for $c_n$ do the
   two choices produce?
4. State the general recipe you used twice: to count size-$n$ objects, pick a feature (a first or last
   piece, a largest part, one removable element) whose removal yields a smaller instance, and arrange
   the cases so they are disjoint and cover everything. What two properties must the cases have for the
   counts to simply add?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Counting with recursion.** To count objects of size $n$, condition on a single structural choice
(the first or last piece, the largest part, a corner element) that splits the objects into disjoint,
exhaustive classes, each in bijection with a smaller counting problem. Summing the class sizes (addition
principle) yields a recurrence; small base cases start it, and evaluation or a closed form finishes it.

For the two running examples the recurrence is the same shape:
$$a_n=a_{n-1}+a_{n-2}\quad(a_1=2,\ a_2=3),\qquad c_n=c_{n-1}+c_{n-2}\quad(c_1=1,\ c_2=2),$$
both Fibonacci sequences (shifted), giving $a_n=F_{n+2}$ and $c_n=F_{n+1}$.

### Proof

**No-two-$1$'s strings satisfy $a_n=a_{n-1}+a_{n-2}$.** Partition the good length-$n$ strings by last
symbol:

- *Ends in $0$.* Deleting the final $0$ gives a good length-$(n-1)$ string, and appending a $0$ to any
  good length-$(n-1)$ string keeps it good (no new adjacency involves a $0$). This is a bijection, so
  there are $a_{n-1}$ such strings.
- *Ends in $1$.* To avoid "$11$," the symbol before the final $1$ must be $0$, so the string ends in
  "$01$." Deleting that "$01$" gives a good length-$(n-2)$ string, and appending "$01$" to any good
  length-$(n-2)$ string keeps it good. This is a bijection, so there are $a_{n-2}$ such strings.

The two classes are disjoint (a string ends in exactly one symbol) and exhaustive, so by the addition
principle $a_n=a_{n-1}+a_{n-2}$. Direct enumeration gives $a_1=2$ (`0`,`1`) and $a_2=3$
(`00`,`01`,`10`), which anchor the recurrence. $\blacksquare$

The stair-climbing count is identical with "first stride $1$" ($c_{n-1}$ ways to finish) and "first
stride $2$" ($c_{n-2}$ ways), giving $c_n=c_{n-1}+c_{n-2}$.

### Worked Instance

The Hook: $a_1=2$, $a_2=3$, then $a_3=a_2+a_1=5$ and $a_4=a_3+a_2=8$ — Fibonacci. Check $a_3=5$ by hand:
the length-$3$ good strings are `000, 001, 010, 100, 101` — exactly $5$, while `011, 110, 111` are
excluded for containing `11`. The recurrence reproduces the count without listing at every stage.

### Pitfalls

- **Cases must be disjoint *and* exhaustive.** If the classes overlap you double-count; if they miss a
  configuration you undercount. Splitting by "the last symbol" is safe because it is exactly one thing.
- **Check the removal is a bijection.** Deleting the boundary piece must be reversible (append it back)
  and must always land in the smaller *valid* set; otherwise the class size is not the smaller count.
- **Get enough base cases.** A depth-$2$ recurrence needs two starting values; supplying only $a_1$
  leaves $a_2$ (and everything after) undetermined.
- **Index carefully.** "Ends in $01$" removes *two* symbols, mapping to size $n-2$, not $n-1$; a
  mis-indexed term shifts the whole sequence.

:::
:::

## Connections

Counting with recursion generalizes the tiling recurrences (`comb-tilings-recurrences`) into a universal
tactic: find a boundary choice that peels off a piece and leaves a smaller instance. It feeds directly
into linear-recurrence solving and generating functions (where the recurrence becomes an algebraic
equation for the counting series), and its disjoint-exhaustive discipline is casework made rigorous.
Recognition trigger: "count the configurations of size $n$" where an object visibly ends in, starts
with, or contains a removable piece — condition on that piece and let the smaller counts add.
