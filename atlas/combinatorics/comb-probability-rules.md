Flip a fair coin four times. "What's the probability of at least one head?" Chasing "one head, or two,
or three, or four" is a slog — but the *opposite*, "no heads at all," is a single easy outcome. The
complement rule turns that slog into $1$ minus one tiny number. And its sibling, the addition rule,
tells you exactly when you may add two probabilities for an "or."

## Discovery

1. In a finite equally likely sample space $S$, an event $E$ has favorable count $|E|$ and its
   complement $E^c$ has count $|E^c|$. Using the fact that these two counts make up all of $|S|$, write
   $P(E) + P(E^c)$ as a single number. What must $P(E^c)$ equal?
2. Take two events $A$ and $B$ that share *no* outcome (mutually exclusive). Count the outcomes in "$A$
   or $B$" in terms of $|A|$ and $|B|$, then divide by $|S|$. What does $P(A \cup B)$ equal?
3. Now let $A$ and $B$ *overlap*. Count "$A$ or $B$" again — what goes wrong if you simply add $|A|$ and
   $|B|$, and what single correction fixes it? Translate the corrected count into probabilities.
4. Reconcile: check that your step-$3$ formula reduces to your step-$2$ formula exactly when the
   overlap is empty.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Two rules.** In a finite equally likely sample space:

- **Complement rule:**
  $$P(E^c) = 1 - P(E).$$
- **Addition rule (mutually exclusive):** if $A \cap B = \varnothing$ (they cannot both happen),
  $$P(A \cup B) = P(A) + P(B).$$
- **General addition rule:** for any events $A, B$,
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B).$$

The complement rule is the probability face of "count the opposite"; the general addition rule is the
two-set inclusion–exclusion, dividing everything by $|S|$.

### Proof

Work in the equally likely space $S$, where $P(X) = |X|/|S|$ for any event $X$.

**Complement rule.** The events $E$ and $E^c$ partition $S$ (disjoint and covering), so by the addition
principle $|E| + |E^c| = |S|$. Dividing by $|S|$,
$$P(E) + P(E^c) = \frac{|E|}{|S|} + \frac{|E^c|}{|S|} = \frac{|S|}{|S|} = 1,$$
hence $P(E^c) = 1 - P(E)$.

**Addition rule, disjoint case.** If $A \cap B = \varnothing$, then $A$ and $B$ partition $A \cup B$, so
$|A \cup B| = |A| + |B|$; dividing by $|S|$ gives $P(A \cup B) = P(A) + P(B)$.

**General addition rule.** For arbitrary $A, B$, counting $A \cup B$ by adding $|A|$ and $|B|$ counts
every outcome of the overlap $A \cap B$ twice — once in each set — so
$$|A \cup B| = |A| + |B| - |A \cap B|.$$
Dividing by $|S|$ yields $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. When $A \cap B = \varnothing$ the
correction $P(A \cap B) = 0$ vanishes, recovering the disjoint case. $\blacksquare$

### Worked Instance

The Hook. Four fair flips give $|S| = 2^4 = 16$ equally likely ordered outcomes. "At least one head"
is the complement of "no heads," and "no heads" is the single outcome $TTTT$, so $P(\text{no heads}) =
\tfrac{1}{16}$. By the complement rule,
$$P(\text{at least one head}) = 1 - \frac{1}{16} = \frac{15}{16}.$$

An "or" with overlap: draw one card from a $52$-card deck. Let $A = $ "a heart" ($P(A) = \tfrac{13}{52}$)
and $B = $ "a face card" ($P(B) = \tfrac{12}{52}$). These overlap in the heart face cards J, Q, K of
hearts, $P(A \cap B) = \tfrac{3}{52}$. So
$$P(\text{heart or face card}) = \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} = \frac{11}{26}.$$
Adding $13$ and $12$ without subtracting the $3$ shared cards would overcount.

### Pitfalls

- **Add only when mutually exclusive.** $P(A) + P(B)$ counts the "or" correctly *only* if $A$ and $B$
  can't both occur. Otherwise subtract $P(A \cap B)$.
- **The complement must be the exact negation.** The opposite of "at least one" is "none," not "exactly
  one." Getting the complement wrong dooms the $1 - P$ shortcut.
- **"At least" screams complement.** When a direct computation fans out into many cases, check whether
  the complement is a single clean event.
- **Overlap subtracted once, not twice.** In the general rule you remove the shared part exactly once;
  subtracting it from each of $P(A)$ and $P(B)$ is a double-correction error.

:::
:::

## Connections

These rules are the classical probability definition (`comb-probability-intro`) fed through set
counting: the complement rule is complementary counting (`comb-complementary-counting`) divided by
$|S|$, and the general addition rule is two-set inclusion–exclusion, which grows into the full
principle (`comb-pie`). They pair with the multiplication rule for independent events
(`comb-probability-multiplication`) to handle "and." Recognition trigger: "at least / at most" (reach
for the complement) or "$A$ or $B$" (addition rule — first ask whether $A$ and $B$ can co-occur).

## History

The basic rules of probability — that chances lie between $0$ and $1$ and that disjoint events add — emerged with the subject's founding by Pascal, Fermat, and Huygens in the $1650$s, and were used freely by Jacob Bernoulli and Abraham de Moivre. For a long time these rules were taken as intuitively obvious rather than stated as axioms. That changed in $1933$, when Andrey Kolmogorov gave probability a rigorous measure-theoretic foundation in his *Grundbegriffe der Wahrscheinlichkeitsrechnung*, casting the addition rule as an axiom of countable additivity. The rules matter because they are the small, consistent core from which every probability computation follows.
