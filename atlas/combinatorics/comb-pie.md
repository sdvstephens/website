In a class of $30$, suppose $18$ take French and $15$ take Spanish. How many take at least one
language? You cannot answer yet — and the reason is that $18+15=33$ already exceeds the class.
The students taking *both* got counted twice, and correcting that double count is the whole idea.

## Discovery

1. Draw two overlapping circles $A$ (French) and $B$ (Spanish). Shade $A\cup B$. If you add
   $|A|+|B|$, which region of the picture gets covered twice?
2. Write a correct formula for $|A\cup B|$ that fixes the double count. Test it: with $|A|=18$,
   $|B|=15$, and $6$ students in both, what is $|A\cup B|$?
3. Add a third circle $C$. Start by adding $|A|+|B|+|C|$. Each pairwise overlap is now
   double-counted, so subtract $|A\cap B|+|A\cap C|+|B\cap C|$. But look at the triple overlap
   $A\cap B\cap C$: how many times was it added, and how many times just subtracted? What is its
   net count, and what must you do to fix it?
4. Track a single element sitting in exactly $m$ of the sets. Across the alternating
   add-pairs-subtract-triples-add pattern, how many times is it counted at level $j$ (in
   intersections of $j$ sets)? Sum the signed contributions and show the net is exactly $1$.
   (The identity $\sum_{j}(-1)^{j}\binom{m}{j}=0$ for $m\ge 1$ is the engine — recall it from the
   binomial theorem.)
5. State the general formula for $|A_1\cup\dots\cup A_n|$ as a signed sum over all intersections.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For finite sets $A_1,\dots,A_n$,
$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{i}|A_i| - \sum_{i\lt j}|A_i\cap A_j| + \sum_{i\lt j\lt k}|A_i\cap A_j\cap A_k| - \dots + (-1)^{n-1}\left|A_1\cap\dots\cap A_n\right|,$$
i.e. $\displaystyle \left|\bigcup_i A_i\right| = \sum_{\varnothing \ne S \subseteq \{1,\dots,n\}} (-1)^{|S|-1}\Big|\bigcap_{i\in S} A_i\Big|.$
Equivalently, counting elements avoiding *all* the sets inside a universe $U$:
$$\Big|\,\overline{A_1}\cap\dots\cap\overline{A_n}\,\Big| = |U| - \sum_i |A_i| + \sum_{i\lt j}|A_i\cap A_j| - \dots + (-1)^n |A_1\cap\dots\cap A_n|.$$

### Proof

Count the contribution of an arbitrary element $x$ to both sides. If $x$ lies in none of the
$A_i$, it contributes $0$ to the left side and $0$ to every term on the right. Otherwise let $m
\ge 1$ be the number of sets containing $x$. On the left, $x$ contributes $1$. On the right, $x$
appears in an intersection $\bigcap_{i\in S}A_i$ exactly when $S$ is a subset of those $m$ sets,
i.e. for $\binom{m}{j}$ subsets of each size $j$, each carrying sign $(-1)^{j-1}$. So $x$'s total
right-side contribution is
$$\sum_{j=1}^{m} (-1)^{j-1}\binom{m}{j} = -\sum_{j=1}^{m}(-1)^{j}\binom{m}{j} = -\Big(\underbrace{\textstyle\sum_{j=0}^{m}(-1)^j\binom{m}{j}}_{=\,(1-1)^m=0} - \binom{m}{0}\Big) = -(0-1) = 1.$$
Every element contributes equally to both sides, so the sides are equal. The complement form
follows by subtracting the union from $|U|$. $\blacksquare$

### Worked Instance

French/Spanish with $|A|=18$, $|B|=15$, both $=6$: at least one language is
$|A\cup B| = 18 + 15 - 6 = 27$, so $30-27 = 3$ students take neither. A three-set example:
count integers in $\{1,\dots,100\}$ divisible by $2$, $3$, or $5$. With
$|A_2|=50,|A_3|=33,|A_5|=20$, pairwise $|A_6|=16,|A_{10}|=10,|A_{15}|=6$, triple $|A_{30}|=3$,
$$50+33+20-(16+10+6)+3 = 74,$$
so $100-74 = 26$ integers up to $100$ are divisible by none of $2,3,5$.

### Pitfalls

- **Signs alternate**, starting with $+$ on the singletons: add odd-size intersections, subtract
  even-size ones. Dropping the last term or misjudging its sign is the usual mistake.
- You need the sizes of the **intersections**, not the individual sets alone. If overlaps are hard
  to compute, PIE may not be the easiest route.
- Do not confuse $|A\cup B|$ with $|A|+|B|$; the two agree *only* when the sets are disjoint (then
  it degenerates to the plain addition principle).
- For "none of the properties" problems, use the complement form starting from $|U|$; forgetting
  the universe term $|U|$ is a common slip.

:::
:::

## Connections

Prereqs: the addition principle (`comb-add-mult`) — inclusion–exclusion *is* the sum rule made
correct when cases overlap. It powers derangement counts, Euler's totient via prime factors, and
"surjection" counts. The same alternating-sign bookkeeping appears in the probabilistic method and
linearity of expectation (`comb-linearity-expectation`), and the binomial identity
$\sum_j(-1)^j\binom{m}{j}=0$ driving the proof comes from `comb-binomial-pascal`. Recognition
trigger: "count things satisfying *at least one* / *none* of several conditions," especially when
the conditions overlap in computable ways.
