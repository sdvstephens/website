Roll two fair dice. The probability both show a six is $\tfrac{1}{36}$ — and $\tfrac16 \times \tfrac16$
is exactly $\tfrac{1}{36}$. Flip a coin and roll a die: "heads and a five" comes out $\tfrac12 \times
\tfrac16 = \tfrac{1}{12}$. When one event has no bearing on another, their "and" is a product. Why does
multiplying the separate chances give the joint chance?

## Discovery

1. Roll two distinguishable fair dice and write the sample space as ordered pairs. How many pairs are
   there in total (multiplication principle), and how many have *both* dice showing a six? Form the
   probability of "both sixes."
2. Break that probability apart: what is $P(\text{first die is }6)$ on its own, and
   $P(\text{second die is }6)$ on its own? Compare their product with your answer to step $1$.
3. Consider a general two-stage experiment where the first stage has favorable event $A$ and the
   second has favorable event $B$, and the second stage's chances *do not depend* on how the first came
   out. Count the favorable pairs (both $A$ and $B$) and the total pairs, each with the multiplication
   principle, then divide.
4. State the condition on $A$ and $B$ under which your step-$3$ factorization is valid — what must be
   true about how one event affects the other?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Multiplication rule for independent events.** Two events $A$ and $B$ are **independent** if the
occurrence of one does not change the probability of the other. For independent events,
$$P(A \text{ and } B) = P(A) \cdot P(B).$$
More generally, for events $A_1, A_2, \dots, A_m$ that are mutually independent,
$$P(A_1 \text{ and } A_2 \text{ and } \cdots \text{ and } A_m) = P(A_1)\,P(A_2)\cdots P(A_m).$$
Independence is the hypothesis: without it, the joint probability need not factor (that is the realm of
conditional probability).

### Proof

Model two independent experiments by the product sample space: an outcome is an ordered pair
$(s_1, s_2)$ with $s_1$ from the first experiment's space $S_1$ and $s_2$ from the second's space
$S_2$. If each experiment has equally likely outcomes and neither influences the other, then every pair
is equally likely, and by the multiplication principle the total number of pairs is $|S_1|\cdot|S_2|$.

Let $A$ be an event of the first experiment, favored by $|A|$ outcomes of $S_1$, and $B$ an event of the
second, favored by $|B|$ outcomes of $S_2$. The joint event "$A$ and $B$" consists of pairs $(s_1, s_2)$
with $s_1 \in A$ and $s_2 \in B$; by the multiplication principle there are $|A|\cdot|B|$ of them.
Therefore
$$P(A \text{ and } B) = \frac{|A|\cdot|B|}{|S_1|\cdot|S_2|} = \frac{|A|}{|S_1|}\cdot\frac{|B|}{|S_2|}
= P(A)\cdot P(B).$$
The factorization of the count is exactly the multiplication principle, and it is valid precisely
because the second experiment's outcomes and their count do not depend on the first — i.e. because $A$
and $B$ are independent. The extension to $m$ events follows by the same product-space argument (or by
induction). $\blacksquare$

### Worked Instance

The Hook. Two dice: $|S| = 6\cdot 6 = 36$; "both sixes" is the single pair $(6,6)$, so probability
$\tfrac{1}{36}$. Independently, $P(\text{first }6) = \tfrac16$ and $P(\text{second }6) = \tfrac16$, and
$\tfrac16\cdot\tfrac16 = \tfrac1{36}$ agrees.

Chained independence: what is the probability a fair coin lands heads *three times in a row*? Each flip
is independent with $P(H) = \tfrac12$, so
$$P(HHH) = \tfrac12\cdot\tfrac12\cdot\tfrac12 = \tfrac18.$$
Combined with the complement rule, "at least one head in three flips" is
$1 - P(TTT) = 1 - \tfrac18 = \tfrac78$.

### Pitfalls

- **Multiply only when independent.** If one event changes the other's odds — e.g. drawing cards
  *without* replacement — the events are dependent and you must use conditional probability, not a plain
  product.
- **Independent is not the same as mutually exclusive.** Mutually exclusive events *can't* co-occur (so
  their "and" has probability $0$); independent events typically *can*. Don't conflate the two rules.
- **"And" multiplies, "or" adds.** Joint occurrence of independent events is a product; a union of
  exclusive events is a sum. Matching the wrong rule to the connective is the classic slip.
- **Check independence, don't assume it.** Physical separation (different dice, different flips)
  usually gives independence; sampling from the same shrinking pool usually does not.

:::
:::

## Connections

The multiplication rule is the multiplication principle (`comb-multiplication-principle`) carried into
probability (`comb-probability-intro`): independent choices multiply their counts, hence their chances.
It handles "and" the way the addition rule handles "or." When independence fails — the second event's
odds shift given the first — the honest generalization is conditional probability
(`comb-conditional-probability`), where $P(A \text{ and } B) = P(A)\,P(B \mid A)$. Recognition trigger:
"and" joining events from separate, non-interfering experiments — multiply their probabilities.

## History

The rule that independent events combine by multiplying their probabilities was used implicitly from the earliest days of the subject, in the $1650$s work of Pascal, Fermat, and Huygens. Abraham de Moivre stated and exploited it clearly in *The Doctrine of Chances* ($1718$), where the notion of statistical independence is made explicit. The rule is the probabilistic echo of the counting multiplication principle: independent choices multiply. Its careful formulation, and the definition of independence it rests on, were later folded into Kolmogorov's axiomatic treatment ($1933$). It matters because independence is what lets a complex chance event be decomposed into simple factors.
