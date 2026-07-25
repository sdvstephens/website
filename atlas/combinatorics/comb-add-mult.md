A diner offers $3$ soups and $4$ mains. If you want *either* a soup *or* a main, you have
$7$ choices; if you want *both* a soup *and* a main, you have $12$. Same two numbers, but one
problem adds and the other multiplies. Everything in counting hangs on telling those two
situations apart.

## Discovery

1. You will pick one item from a menu of $3$ soups $\{s_1,s_2,s_3\}$ *or* one from $4$ mains
   $\{m_1,m_2,m_3,m_4\}$, but not both. List every possible single choice. How many are there?
2. Now you order a full meal: one soup *and* one main. Write a few of these as pairs like
   $(s_1,m_3)$. Organize them in a $3\times 4$ grid. How many cells does the grid have?
3. In problem 1, could any soup accidentally equal any main — could one option be counted in
   both piles? What must be true about the two menus for your count in (1) to be exactly the
   sum $3+4$?
4. In problem 2, suppose after choosing a soup you could pick a *dessert* too, from $2$ options.
   How many soup-and-dessert-and-main meals are there? What arithmetic operation did adding a
   third independent stage force on you?
5. State two rules: one for "choose from this pile *or* that pile," one for "make this choice
   *then* that choice." Name the exact condition each rule needs to be valid.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Addition principle (rule of sum).** If a set of outcomes splits into disjoint cases
$A_1,\dots,A_k$ (no outcome lies in two cases), then the total count is
$$|A_1 \cup \dots \cup A_k| = |A_1| + \dots + |A_k|.$$
**Multiplication principle (rule of product).** If an outcome is built by a sequence of $k$
independent stages, where stage $i$ can be completed in $n_i$ ways *no matter how the earlier
stages went*, then the number of outcomes is
$$n_1 \cdot n_2 \cdots n_k.$$
The sum rule requires **disjointness**; the product rule requires that each stage's count
be **independent of the previous choices**.

### Proof

**Sum rule.** Since the cases are pairwise disjoint, listing every element of $A_1$, then every
element of $A_2$, and so on, names each outcome exactly once and names nothing twice. The length
of that list is therefore $|A_1| + \dots + |A_k|$, which is the definition of the union's size
when the sets are disjoint.

**Product rule.** Induct on the number of stages $k$. For $k=1$ the count is $n_1$, trivially.
Suppose the first $k$ stages produce exactly $n_1\cdots n_k$ partial outcomes. By hypothesis,
each such partial outcome can be extended by stage $k+1$ in exactly $n_{k+1}$ ways, and different
partial outcomes with different extensions give different final outcomes. So the final outcomes
partition into $n_1\cdots n_k$ disjoint groups of size $n_{k+1}$ each; by the sum rule their total
is $(n_1\cdots n_k)\cdot n_{k+1}$. This completes the induction. $\blacksquare$

### Worked Instance

Back to the diner. **Or:** soups and mains are disjoint menus, so "one soup or one main" is
$3 + 4 = 7$ by the sum rule. **And:** a meal is the two-stage process "pick a soup, then pick a
main"; the number of mains ($4$) does not depend on which soup you chose, so the product rule
gives $3 \cdot 4 = 12$. Adding an independent dessert stage with $2$ options multiplies again:
$3 \cdot 4 \cdot 2 = 24$ full meals.

### Pitfalls

- The sum rule is **wrong when the cases overlap**. If some items count as both a soup and a
  salad, $3+4$ double-counts them; you need inclusion–exclusion instead.
- The product rule is **wrong when a stage's option count depends on earlier choices**. "Pick a
  first digit, then a *different* second digit" has $10$ then $9$ options — still a product, but
  only because $9$ holds regardless of *which* first digit you took. If the count itself changed
  case by case, split into cases first.
- "And" does not always mean multiply and "or" does not always mean add — translate to
  disjoint-cases / independent-stages, not to the English words.

:::
:::

## Connections

Prereqs: none — this is the root of counting. Everything downstream is a disciplined application
of these two rules: permutations and combinations (`comb-perms-combs`) are the product rule with
bookkeeping, inclusion–exclusion (`comb-pie`) is the sum rule repaired for overlaps, pigeonhole
(`comb-pigeonhole`) and the extremal principle (`comb-extremal`) count to force a conclusion, and
structural recurrences (`comb-tilings-recurrences`) split a configuration into disjoint first
moves and add. Recognition trigger: whenever you must count, first ask "disjoint cases (add) or
independent stages (multiply)?"
