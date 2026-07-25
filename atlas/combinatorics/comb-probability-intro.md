Roll a fair die. "The probability of an even number is $\tfrac12$" feels obvious — but where does the
$\tfrac12$ come from? You quietly counted: three even faces out of six equally likely faces. Every
probability of a fair setup is secretly a counting problem wearing a fraction.

## Discovery

1. List all the outcomes of one roll of a fair die. Which of them show an even number? Form the
   fraction (even outcomes) over (all outcomes) and simplify.
2. Now flip two fair coins and write down every possible result as an ordered pair (first coin, second
   coin). How many results are there in total, and how many show *exactly one* head? Form the
   corresponding fraction.
3. In both steps, why is it fair to just count and divide? State the assumption you are making about
   the individual outcomes that makes each one "worth the same."
4. What fraction do you get for an event that *no* outcome satisfies, and for one that *every* outcome
   satisfies? What is the smallest and largest a "favorable over total" fraction can be?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Classical probability.** Consider an experiment with a finite set of outcomes — the **sample space**
$S$ — in which every outcome is **equally likely**. An **event** is a subset $E \subseteq S$ (the
outcomes we call "favorable"). Its probability is
$$P(E) = \frac{|E|}{|S|} = \frac{\text{number of favorable outcomes}}{\text{number of total outcomes}}.$$
This is a number with $0 \le P(E) \le 1$: the impossible event has probability $0$, the certain event
has probability $1$. Computing a probability is thus *two* counting problems — favorable, and total —
divided.

### Proof

The formula is a definition, but its stated properties are forced facts. The **equally likely**
assumption is what licenses counting: if each of the $|S|$ outcomes carries the same share of certainty
and the total certainty is $1$, then each outcome carries $1/|S|$, and an event of $|E|$ outcomes
carries $|E| \cdot \dfrac{1}{|S|} = \dfrac{|E|}{|S|}$ — the "$a$ copies of one $b$-th" reading of a
fraction.

The bounds follow from $E \subseteq S$. Since a subset cannot be larger than the whole,
$0 \le |E| \le |S|$; dividing the finite counts by the positive number $|S|$ preserves the inequalities,
so $0 \le P(E) \le 1$. The extremes are the empty event $E = \varnothing$ with $|E| = 0$, giving
$P = 0$, and the whole space $E = S$ with $|E| = |S|$, giving $P = 1$. Thus every classical probability
lands in $[0,1]$, with the endpoints exactly the impossible and certain events. $\blacksquare$

### Worked Instance

The Hook: a die's sample space is $\{1,2,3,4,5,6\}$, $|S| = 6$; the even event is $\{2,4,6\}$, $|E| = 3$;
so $P(\text{even}) = \tfrac{3}{6} = \tfrac12$.

Two fair coins: the sample space of ordered outcomes is $\{HH, HT, TH, TT\}$, so $|S| = 4$ (the
multiplication principle: $2$ outcomes per coin). "Exactly one head" is $\{HT, TH\}$, $|E| = 2$, giving
$$P(\text{exactly one head}) = \frac{2}{4} = \frac12.$$
The subtle point is the sample space: listing outcomes as "zero, one, or two heads" would be *three*
outcomes that are **not** equally likely, and dividing there would give a wrong $\tfrac13$. Choosing an
equally likely sample space is the whole game.

### Pitfalls

- **Outcomes must be equally likely.** The favorable-over-total rule applies only to a sample space of
  equally likely outcomes. "One head" and "two heads" are not equally likely, so you cannot count over
  them directly.
- **Count the right sample space.** Distinguish the coins/dice (use ordered outcomes) so that each
  listed outcome truly has the same chance. Collapsing symmetric outcomes too early breaks equal
  likelihood.
- **Favorable is a subset of total.** The numerator counts outcomes *within* the same sample space as
  the denominator — never a count from a differently described space.
- **Probability is unitless and in $[0,1]$.** An answer above $1$ or below $0$ signals a miscount, not
  a rare event.

:::
:::

## Connections

Classical probability turns every fair-chance question into two counts over a favorable set and a
sample space — so all of elementary counting (`comb-multiplication-principle` and its kin) is the
machinery, and a fraction (`ari-fraction-meaning`) is the output. It is the base for the complement and
addition rules (`comb-probability-rules`), the multiplication rule for independent events
(`comb-probability-multiplication`), and, weighted by outcome values, expected value
(`comb-expected-value-elem`). Recognition trigger: "what is the probability that…" in a fair,
finite setup — count the favorable outcomes, count the equally likely total, divide.

## History

Probability as a mathematical subject was born in $1654$, in the correspondence between Blaise Pascal and Pierre de Fermat over the "problem of points" — how to divide the stakes of an interrupted gambling game fairly. Gerolamo Cardano had written a gambler's handbook, the *Liber de Ludo Aleae*, decades earlier (published posthumously in $1663$), but the Pascal–Fermat exchange gave the field its rigorous start. Christiaan Huygens turned their ideas into the first printed treatise on probability in $1657$. The subject matured through Jacob Bernoulli's *Ars Conjectandi* ($1713$) and beyond. It matters as the mathematics of uncertainty itself — grown, remarkably, from a question about gambling.
