"How many ways can you make $25$ cents from pennies, nickels, and dimes?" There is no clean formula
to plug into — the coins interact. Yet the answer is a definite number, reachable by a completely
mechanical habit: freeze one quantity, count what's left, and repeat. That habit is the workhorse of
elementary counting.

## Discovery

1. To make $25$ cents, suppose you use exactly $2$ dimes. How much value remains to be made from
   nickels and pennies, and how many ways can you make *that* remainder? (Once you fix how many
   nickels, the pennies are forced.)
2. Now suppose you use exactly $1$ dime, then exactly $0$ dimes. For each, count the ways to finish
   with nickels and pennies, exactly as in step $1$.
3. Look at your three groups — "$2$ dimes," "$1$ dime," "$0$ dimes." Could any single way of making
   $25$ cents belong to two of these groups at once? Could a valid way belong to *none*?
4. Given your answers to step $3$, what operation combines the three counts into the total, and which
   principle licenses it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Casework.** To count a finite set of possibilities that has no one-shot formula, choose a feature
(a "case variable") and split the possibilities into cases according to its value, so that the cases
are

- **mutually exclusive** — no possibility falls into two cases, and
- **exhaustive** — every possibility falls into some case.

Count each case separately (each is meant to be easier than the whole), then **add** the case counts.
The art is entirely in choosing a case variable that makes the pieces easy and keeps them a genuine
partition. This is not a new law; it is the deliberate, repeated use of the addition principle.

### Proof

Let $S$ be the set to be counted and let the chosen case variable take values $v_1, \dots, v_k$;
define $A_i$ to be the possibilities in $S$ whose case variable equals $v_i$. "Exhaustive" means
every element of $S$ has *some* value $v_i$, so $A_1 \cup \cdots \cup A_k = S$; "mutually exclusive"
means an element cannot have two different values at once, so the $A_i$ are pairwise disjoint.
Together these say the $A_i$ partition $S$, and the addition principle gives exactly
$$|S| = |A_1| + |A_2| + \cdots + |A_k|.$$
Hence adding the case counts returns the true total. The two hypotheses are both load-bearing: drop
disjointness and a possibility counted in two cases is added twice (overcount); drop exhaustiveness
and a possibility in no case is never added (undercount). Correct casework is precisely a valid
partition. $\blacksquare$

### Worked Instance

The Hook, by cases on the number of dimes $d$ (which can only be $0, 1, 2$, since $3$ dimes already
exceed $25$ cents). With $d$ dimes fixed, the remaining value is $25 - 10d$ cents, to be made from
nickels and pennies; once the number of nickels $n$ is chosen ($0 \le n \le \lfloor (25-10d)/5\rfloor$)
the pennies are forced, so the number of ways is that many nickel-counts, an inclusive list:

- $d = 2$: remainder $5$, nickels $0$ to $1$, giving $1 - 0 + 1 = 2$ ways.
- $d = 1$: remainder $15$, nickels $0$ to $3$, giving $3 - 0 + 1 = 4$ ways.
- $d = 0$: remainder $25$, nickels $0$ to $5$, giving $5 - 0 + 1 = 6$ ways.

The three cases are disjoint (a way has one dime-count) and exhaustive, so the total is
$2 + 4 + 6 = 12$ ways. Notice how choosing *dimes* as the case variable — the coarsest, most
constraining coin — kept each case a plain list count.

### Pitfalls

- **Overlapping cases double-count.** If two cases can describe the same possibility, you add it
  twice. Check that your case variable takes exactly one value per possibility.
- **Missing cases undercount.** Make sure the case values you listed truly cover everything —
  including boundary values like "$0$ of something."
- **A bad case variable explodes the work.** Casework is only as good as the split; pick the feature
  that most constrains the rest (here, dimes, the largest coin). A poor choice buries you in
  sub-cases.
- **Silent overlap inside a case.** Each individual case must itself be counted without double-use;
  the nested "choose nickels, pennies forced" step must stay a clean list, not another hidden overlap.

:::
:::

## Connections

Casework is the applied face of the addition principle (`comb-addition-principle`): the principle says
*that* disjoint counts add; casework is the discipline of *engineering* a good disjoint split.
Individual cases are usually finished with the multiplication principle or a list count. When the
cases you want *do* overlap, the repair is inclusion–exclusion (`comb-pie`); when it's easier to count
what you *don't* want, use complementary counting (`comb-complementary-counting`). Recognition
trigger: a count with no direct formula and a natural "it depends on how many/which…" — freeze that
feature, count, and add.

## History

Reasoning by exhaustive cases is as old as deductive mathematics itself; Euclid's *Elements* ($c.$ $300$ BCE) already splits proofs into cases. In counting specifically, the method came into its own with the $1654$ Pascal–Fermat correspondence on the "problem of points," where dividing the possibilities into disjoint scenarios and summing them resolved a puzzle that had defeated earlier writers, including Luca Pacioli and Cardano. Jacob Bernoulli's *Ars Conjectandi* ($1713$) leaned heavily on such case analysis. The technique rests logically on the addition principle: cases must be mutually exclusive and exhaustive, a discipline modern texts emphasize. Casework matters because it converts an intractable whole into a partition of manageable, honestly disjoint parts.
