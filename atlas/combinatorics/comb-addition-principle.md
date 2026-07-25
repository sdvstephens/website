A menu offers $4$ soups and $3$ salads, and you want exactly one starter. You did not need a lesson
to say "$7$ choices." But change the wording — "how many ways to pick one dish that is a soup *or* a
salad" — and the same answer $7$ is now doing real work. When is adding the two counts the *right*
move, and when does it silently double-count?

## Discovery

1. Suppose the soups are $\{$tomato, leek, miso, corn$\}$ and the salads are $\{$green, caesar,
   cobb$\}$. List every single starter you could order and count them. Does any dish appear on both
   menus?
2. Now imagine the chef renames "corn soup" to also be sold as a "corn salad," so one item sits on
   *both* menus. Re-list the distinct starters and count again. Compared with adding $4+3$, what went
   wrong, and by how much?
3. State the condition on the two menus (in the language of sets) under which "count each menu, then
   add" gives the exact number of distinct starters. What must be true of their overlap?
4. Push to more than two menus: if a diner may pick one item from any of soups, salads, or $2$
   desserts, and no item appears on two menus, what count do you predict — and what fact from steps
   $1$–$3$ are you leaning on?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The addition principle (sum rule).** If a finite set $S$ is split into subsets
$A_1, A_2, \dots, A_k$ that are *pairwise disjoint* (no two share an element) and *cover* $S$ (every
element of $S$ lies in one of them) — that is, the $A_i$ *partition* $S$ — then
$$|S| = |A_1| + |A_2| + \cdots + |A_k|.$$
In counting language: if a choice falls into several **mutually exclusive** cases, the number of
possibilities is the *sum* of the counts of the cases. The disjointness hypothesis is not decoration:
if two cases overlap, plain addition counts the shared items twice.

### Proof

Take $k=2$ first: $S = A_1 \cup A_2$ with $A_1 \cap A_2 = \varnothing$. List the elements of $A_1$ as
a block $x_1, \dots, x_m$ (so $|A_1| = m$) and the elements of $A_2$ as a block
$y_1, \dots, y_n$ (so $|A_2| = n$). Concatenate the two blocks into one list
$$x_1, \dots, x_m, y_1, \dots, y_n.$$
By extensionality no element of $A_1$ equals an element of $A_2$ (disjointness), so no entry repeats;
and since $A_1 \cup A_2 = S$, every element of $S$ appears exactly once. Thus this is a repetition-free
listing of $S$, and reading its length off — a consecutive list of $m+n$ positions — gives
$|S| = m + n = |A_1| + |A_2|$.

For general $k$, group $A_1, \dots, A_k$ as $A_1$ together with the union $B = A_2 \cup \cdots \cup A_k$.
The pieces $A_2, \dots, A_k$ are pairwise disjoint and disjoint from $A_1$, so $A_1 \cap B = \varnothing$;
the two-set case gives $|S| = |A_1| + |B|$, and induction on $k$ gives
$|B| = |A_2| + \cdots + |A_k|$. Substituting completes the sum. Should two cases overlap, an element
of $A_i \cap A_j$ is listed once in each block, so the concatenation repeats it and the sum
*overshoots* by the size of the overlap — which is exactly why disjointness is required.
$\blacksquare$

### Worked Instance

The Hook, done right. With no shared dish, the soups $A_1$ (size $4$) and salads $A_2$ (size $3$) are
disjoint, so the number of one-dish starters is $|A_1| + |A_2| = 4 + 3 = 7$.

Once "corn" sits on both menus, the sets overlap in one item, so the raw sum $4+3=7$ counts corn
twice; the true number of *distinct* starters is $7 - 1 = 6$. The fix — subtract the overlap — is the
first case of inclusion–exclusion, and it is exactly the failure mode the disjointness hypothesis
rules out.

A cleaner instance: how many integers from $1$ to $100$ are multiples of $4$ *or* multiples of $25$?
Multiples of $4$: the list $4, 8, \dots, 100$ has $25$ entries; multiples of $25$: $25, 50, 75, 100$,
$4$ entries. These cases are *not* disjoint ($100$ is both), so the addition principle does not apply
directly — you must first split off the overlap. Recognizing that is the whole point.

### Pitfalls

- **Disjointness is mandatory.** Adding overlapping cases double-counts the shared elements. Before
  you add, verify no possibility falls into two cases at once.
- **"Or" hides a trap.** Everyday "or" is often inclusive; "$A$ or $B$" may allow both. Only when
  "both" is impossible does $|A|+|B|$ count the "or."
- **Cases must also cover everything.** If your cases miss some possibilities, the sum *undercounts*.
  A valid casework split must be both non-overlapping and exhaustive — a genuine partition.
- **Adding when you should multiply.** Sequential *independent* choices ("first a soup, *then* a
  drink") combine by multiplying, not adding. Addition is for choosing *one* item among alternatives;
  see the multiplication principle.

:::
:::

## Connections

The sum rule is the backbone of *casework* (`comb-casework`): break a hard count into disjoint, easy
sub-counts and add. It rests on set membership and disjointness (`prim-set`) and on counting each
case as a list (`comb-count-lists`). Paired with the multiplication principle
(`comb-multiplication-principle`) it forms the two-move core of all elementary counting, and its
overlap-correction grows up into inclusion–exclusion. Complementary counting
(`comb-complementary-counting`) is the two-case version "wanted plus unwanted equals everything."
Recognition trigger: a count that naturally splits into "type A *or* type B, never both" — add the
cases.

## History

The sum rule is so elementary that no single person "discovered" it, yet its promotion into a named principle tracks the birth of systematic combinatorics. Enumerative questions are ancient: Jain mathematicians in India counted combinations of objects, and Bhāskara II ($12$th century) worked arrangement problems long before Europe. The demand for airtight counting sharpened in $1654$, when Blaise Pascal and Pierre de Fermat exchanged letters on gambling — the "problem of points" — and founded probability theory in the process. Jacob Bernoulli's *Ars Conjectandi* ($1713$) then gathered such counting rules into a coherent framework. Treating "count each case, then add" as an explicitly stated principle, with the disjointness hypothesis called out by name, is largely a refinement of $20$th-century textbook tradition. What makes it matter is precisely that stated hypothesis: it is the first guard against the double-counting that inclusion–exclusion later learned to correct.
