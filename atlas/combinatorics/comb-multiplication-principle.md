You own $3$ shirts and $4$ pairs of pants and wear one of each. There are $12$ possible outfits — and
you multiplied without thinking. But *why* multiply? The addition principle only knows how to add
disjoint cases. Where does a product come from?

## Discovery

1. Call the shirts $R, G, B$ and the pants $1, 2, 3, 4$. Fix the shirt as $R$ and list every complete
   outfit that uses it. How many are there? Now do the same with the shirt fixed as $G$, and again as
   $B$.
2. The full set of outfits splits into the three groups from step $1$ — "outfits with shirt $R$,"
   "with shirt $G$," "with shirt $B$." Are these three groups disjoint, and do they cover every
   outfit? What does the addition principle then say the total is?
3. Rewrite the sum from step $2$ as a single arithmetic operation between the number of shirts and the
   number of pants. Which operation collapses "the same count, added once per shirt"?
4. Now suppose the choices interact: you have $3$ shirts, but a formal shirt forbids sneakers so its
   number of allowed shoe options differs from a casual shirt's. Does your step-$3$ shortcut still
   compute the total, or does the argument from step $2$ break? Say precisely which hypothesis fails.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The multiplication principle (product rule).** Suppose an object is built by a sequence of stages,
where stage $1$ can be done in $n_1$ ways, and — *no matter how the earlier stages turned out* — stage
$i$ can be done in $n_i$ ways. Then the number of complete objects is the product
$$n_1 \cdot n_2 \cdots n_k.$$
The crucial hypothesis is that the *number* of options at each stage does not depend on the earlier
choices (the specific options may change; only their count must stay fixed). When it holds, disjoint
addition over the first stage collapses into a product.

### Proof

Argue by induction on the number of stages $k$. For $k=1$ the count is $n_1$, which is the empty
product's lone factor.

For the inductive step, partition the set $S$ of all completed objects according to the outcome of
stage $1$: let $A_j$ be the objects whose first stage came out as its $j$-th option, for
$j = 1, \dots, n_1$. These $n_1$ classes are pairwise disjoint (an object has one first-stage outcome)
and cover $S$, so the addition principle gives $|S| = |A_1| + \cdots + |A_{n_1}|$.

Within any one class $A_j$, the first stage is now frozen, and completing the object means carrying
out stages $2, \dots, k$, which by hypothesis have $n_2, \dots, n_k$ options *regardless* of that
frozen first choice. By the induction hypothesis (a $(k-1)$-stage build), $|A_j| = n_2 \cdots n_k$,
the *same* value for every $j$. Summing $n_1$ equal terms is multiplication:
$$|S| = \underbrace{n_2\cdots n_k + \cdots + n_2\cdots n_k}_{n_1 \text{ terms}} = n_1 \cdot (n_2 \cdots n_k) = n_1 n_2 \cdots n_k.$$
The step "sum of $n_1$ equal copies $= n_1$ times the copy" is precisely the meaning of
multiplication, and it needs the per-class count to be constant — which is where "the option count
does not depend on earlier choices" is used. $\blacksquare$

### Worked Instance

The Hook: outfits split into $3$ shirt-classes, each holding $4$ pants-completions, so
$4 + 4 + 4 = 3 \cdot 4 = 12$. Multiplication *is* the collapse of that threefold sum.

A longer build: how many $3$-letter "words" (any letters, repeats allowed) can be formed from the
$26$-letter alphabet? Three stages, each with $26$ options independent of the others, so
$26 \cdot 26 \cdot 26 = 26^3 = 17576$. If instead the three letters must be *distinct*, the option
counts still don't depend on *which* letters were used, only on how many remain: $26$, then $25$,
then $24$, giving $26 \cdot 25 \cdot 24 = 15600$. The counts shrink, but each stage's count is fixed
once you know the stage number — so the product rule still applies.

### Pitfalls

- **Only the *count* must be independent, not the options themselves.** In "distinct letters," the
  available letters change each stage, yet the *number* available ($26, 25, 24$) is determined by the
  stage alone. That is enough.
- **When the count itself depends on the past, do not multiply.** If a formal shirt allows $2$ shoe
  choices and a casual shirt allows $4$, there is no single "shoe count." Split into cases and add
  instead.
- **Multiply for "and," add for "or."** Sequential choices that must *all* happen combine by product;
  mutually exclusive alternatives combine by sum. Mixing these up is the archetypal counting error.
- **Watch double-use of an object.** The product rule assumes the stages are genuinely separate
  decisions; if choosing an object in stage $1$ removes it from stage $2$, account for that in the
  stage-$2$ count (as in "distinct letters").

:::
:::

## Connections

With the addition principle (`comb-addition-principle`), from which it is derived, this is one of the
two pillars of counting: *add* disjoint cases, *multiply* independent stages. It leans on
multiplication as repeated addition (`ari-multiplication`). Nearly everything downstream is built on
it: permutations (`comb-permutations-elem`) are staged products $n(n-1)(n-2)\cdots$, and probability
of independent events (`comb-probability-multiplication`) multiplies for the same reason. Recognition
trigger: a decision made in *stages* where each stage's number of options is settled — string the
stage-counts together with a product.

## History

Like its companion the sum rule, the product rule for counting has deep and multicultural roots. Its earliest systematic use is often credited to Piṅgala (India, by roughly the $3$rd–$2$nd century BCE), whose study of long and short syllables in Sanskrit metre amounts to counting binary strings and yields powers of two. Medieval scholars pushed further: the Arab linguist al-Khalīl ibn Aḥmad ($8$th century) enumerated arrangements of letters, and Bhāskara II handled products of independent choices. As with the sum rule, the idea gained modern precision through the $17$th-century probability of Pascal and Fermat and the systematization of Jacob Bernoulli. Its lasting importance is conceptual: recognizing that independent, sequential choices *multiply* — while mutually exclusive alternatives *add* — is the fork on which all elementary counting turns.
