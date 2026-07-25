A disease strikes $1$ person in $1000$. A test catches $99\%$ of sick people and wrongly flags only
$1\%$ of healthy people — it sounds nearly perfect. You test positive. The chance you are actually sick
is not $99\%$; it is about $9\%$. The rarity of the disease overwhelms the accuracy of the test, and
Bayes' theorem is the machine that computes the true number.

## Discovery

1. From conditional probability you can write $P(A\cap B)$ two ways: by conditioning on $A$, and by
   conditioning on $B$. Write both expressions, set them equal, and solve for $P(A\mid B)$ in terms of
   $P(B\mid A)$, $P(A)$, and $P(B)$.
2. Often $P(B)$ is not handed to you. If $A$ and its complement $A^{c}$ cover all cases, express $P(B)$
   using $P(B\mid A)$, $P(A)$, $P(B\mid A^{c})$, and $P(A^{c})$. (This is the law of total probability.)
3. Set up the disease problem. Let $D$ mean "has the disease" and $+$ mean "tests positive," with
   $P(D)=0.001$, $P(+\mid D)=0.99$, and $P(+\mid D^{c})=0.01$. First compute $P(+)$ from step $2$, then
   compute $P(D\mid +)$ from step $1$.
4. Look at your denominator $P(+)$. Which of its two pieces is larger, and why does that make
   $P(D\mid+)$ so much smaller than the test's $99\%$ accuracy?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Bayes' theorem.** For events with $P(B)\gt0$,
$$P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B)}.$$
When the denominator is unknown, expand it by the **law of total probability** over a partition
$A_1,\dots,A_n$ of the sample space:
$$P(B)=\sum_{i=1}^{n}P(B\mid A_i)\,P(A_i),\qquad\text{so}\qquad
P(A_k\mid B)=\frac{P(B\mid A_k)P(A_k)}{\sum_{i}P(B\mid A_i)P(A_i)}.$$
In words: the **posterior** $P(A\mid B)$ combines the **likelihood** $P(B\mid A)$ with the **prior**
$P(A)$, normalized by the total probability of the evidence $B$. The **base rate** $P(A)$ cannot be
ignored — it can dominate the answer.

### Proof

By the general multiplication rule (conditional probability), for $P(A),P(B)\gt0$,
$$P(A\cap B)=P(A)\,P(B\mid A)=P(B)\,P(A\mid B).$$
Equating the two right-hand sides and dividing by $P(B)\gt0$ gives
$P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$. For the total-probability denominator, let
$A_1,\dots,A_n$ partition the space (disjoint, union everything). Then $B=\bigcup_i (B\cap A_i)$ is a
disjoint union, so by additivity $P(B)=\sum_i P(B\cap A_i)=\sum_i P(B\mid A_i)P(A_i)$. Substituting
yields the normalized form. $\blacksquare$

### Worked Instance

The Hook, with partition $\{D,D^{c}\}$. First the evidence probability:
$$P(+)=P(+\mid D)P(D)+P(+\mid D^{c})P(D^{c})=0.99(0.001)+0.01(0.999)=0.00099+0.00999=0.01098.$$
Then Bayes:
$$P(D\mid +)=\frac{P(+\mid D)P(D)}{P(+)}=\frac{0.00099}{0.01098}\approx0.0902.$$
So a positive test raises your disease probability from $0.1\%$ to only about $9\%$. The denominator is
dominated by the $0.00999$ of false positives — because healthy people are $999$ times as common, their
$1\%$ error rate produces far more positives than the sick $0.099\%$. That is the base-rate effect.

### Pitfalls

- **$P(A\mid B)\ne P(B\mid A)$.** Confusing the test's accuracy $P(+\mid D)$ with the answer
  $P(D\mid+)$ is the classic "prosecutor's fallacy"; Bayes converts one into the other.
- **Never drop the base rate $P(A)$.** A rare condition makes even an accurate test's positives mostly
  false; the prior sits in both numerator and denominator and cannot be waved away.
- **The partition must be exhaustive and disjoint.** The law of total probability needs the $A_i$ to
  cover every case with no overlap; a missing case corrupts $P(B)$.
- **Normalize by the *total* evidence.** The denominator is $P(B)$ over *all* hypotheses, not just
  $P(B\mid A)$; forgetting the false-positive term inflates the posterior.

:::
:::

## Connections

Bayes' theorem is conditional probability (`comb-conditional-probability`) read *backwards*: it inverts
$P(\text{evidence}\mid\text{cause})$ into $P(\text{cause}\mid\text{evidence})$, normalized by total
probability. It is the engine of the Monty Hall paradox (`comb-monty-hall`), medical-test reasoning,
spam filters, and all of Bayesian statistics. Recognition trigger: "given an observed result, how likely
is the underlying cause?" — especially when a base rate is small and an accuracy figure tempts you to
answer with the likelihood instead of the posterior.
