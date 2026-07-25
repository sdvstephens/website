Draw two cards from a deck, keeping the first. The chance the first is an ace is $\tfrac{4}{52}$. But
once an ace is gone, the deck has changed: the chance the *second* is an ace is now $\tfrac{3}{51}$, not
$\tfrac{4}{52}$. When one event reshapes the odds of the next, you can't just multiply the original
probabilities. Conditioning is how you update.

## Discovery

1. From a full $52$-card deck, what is the probability the first card drawn is an ace? Now *suppose*
   that first card was an ace and you set it aside. How many cards remain, how many aces among them, and
   so what is the probability the second card is also an ace?
2. Combine the two stages: multiply "the first is an ace" by "the second is an ace *given* the first
   was." What does this product represent, in words?
3. Look at the "given" quantity from step $1$ as a fresh probability computed in a *shrunken* world.
   When you are told event $A$ happened, which outcomes are still possible, and how would you compute
   the probability of $B$ among only those? Write it as a ratio of counts.
4. Turn your step-$3$ ratio of counts into a ratio of *probabilities* (divide numerator and denominator
   by the size of the original sample space). What formula for "the probability of $B$ given $A$"
   emerges?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Conditional probability.** The probability of $B$ **given** that $A$ has occurred, written
$P(B \mid A)$, is the probability of $B$ computed within the reduced world where $A$ is known to hold.
For $P(A) \gt 0$,
$$P(B \mid A) = \frac{P(A \text{ and } B)}{P(A)},$$
and in an equally likely space this is $P(B \mid A) = \dfrac{|A \cap B|}{|A|}$. Rearranging gives the
**general multiplication rule**:
$$P(A \text{ and } B) = P(A)\, P(B \mid A).$$
When $A$ and $B$ are independent, $P(B \mid A) = P(B)$ and this collapses to the product rule
$P(A)P(B)$; conditioning is the correction for *dependence*.

### Proof

Work in a finite equally likely sample space $S$ with $P(X) = |X|/|S|$. Being *told* that $A$ occurred
discards every outcome outside $A$: the possible outcomes shrink from $S$ to $A$, and among these the
ones in which $B$ also holds are exactly $A \cap B$. Since the outcomes were equally likely and we have
only removed some, those remaining in $A$ stay equally likely, so the probability of $B$ in the reduced
world is
$$P(B \mid A) = \frac{|A \cap B|}{|A|}.$$
Divide numerator and denominator by $|S|$:
$$P(B \mid A) = \frac{|A \cap B|/|S|}{|A|/|S|} = \frac{P(A \text{ and } B)}{P(A)},$$
valid because $P(A) = |A|/|S| \gt 0$. Multiplying through by $P(A)$ gives
$P(A \text{ and } B) = P(A)\,P(B \mid A)$. If $A$ and $B$ are independent, knowing $A$ leaves $B$'s
proportion unchanged, so $P(B \mid A) = P(B)$ and the rule becomes $P(A)P(B)$. $\blacksquare$

### Worked Instance

The Hook. $P(\text{first ace}) = \tfrac{4}{52} = \tfrac{1}{13}$. Given an ace was drawn and kept, $51$
cards remain with $3$ aces, so $P(\text{second ace} \mid \text{first ace}) = \tfrac{3}{51} = \tfrac{1}{17}$.
By the general multiplication rule,
$$P(\text{both aces}) = \frac{4}{52}\cdot\frac{3}{51} = \frac{12}{2652} = \frac{1}{221}.$$
Contrast independence: *with* replacement (shuffle the ace back), the second draw sees a full deck
again, $P(\text{second ace}) = \tfrac{4}{52}$, and "both aces" would be $\left(\tfrac{4}{52}\right)^2 =
\tfrac{1}{169}$ — a different, larger number. The gap is exactly the effect of dependence.

### Pitfalls

- **The condition shrinks the sample space.** $P(B \mid A)$ is computed among the outcomes in $A$ only,
  with denominator $|A|$ (or $P(A)$), not $|S|$. Using the full space ignores the given information.
- **$P(B \mid A) \ne P(A \mid B)$ in general.** Conditioning is directional; swapping which event is
  "given" changes the answer. Confusing the two is a notorious error.
- **Without replacement means dependent.** Sequential draws from a shrinking pool are dependent — update
  the counts at each stage. Only replacement (or truly separate experiments) restores independence.
- **Order the conditioning to match the story.** $P(A \text{ and } B) = P(A)\,P(B\mid A)$ takes the
  events in the order they happen; condition the later event on the earlier one.

:::
:::

## Connections

Conditional probability generalizes the multiplication rule (`comb-probability-multiplication`) from
independent to *dependent* events: $P(A \text{ and } B) = P(A)P(B \mid A)$ specializes to $P(A)P(B)$
exactly when knowing $A$ tells you nothing about $B$. It underlies tree diagrams, sampling without
replacement, Bayes-style updating, and the probabilistic method built on expectation
(`comb-linearity-expectation`). Recognition trigger: a "given that…," a sequential draw from a changing
pool, or any "and" where the first event alters the second's odds — condition and multiply.

## History

Conditional probability — the chance of one event given another — was formalized in the $18$th century. The Reverend Thomas Bayes gave the pivotal result relating $P(A \mid B)$ and $P(B \mid A)$ in an essay published posthumously in $1763$ by his friend Richard Price. Pierre-Simon Laplace independently developed and greatly extended the idea, applying it across astronomy and statistics around $1800$. The concept was later grounded rigorously within Kolmogorov's axioms ($1933$). Conditional probability matters because it is how evidence updates belief — the mathematical basis of inference, diagnosis, and learning from data.
