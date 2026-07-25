Roll a fair die many times and average the numbers you get. The average settles near $3.5$ — a value
the die can never actually show. That $3.5$ is the die's *expected value*: not a prediction of any one
roll, but the long-run average, computed by weighting each possible outcome by how likely it is.

## Discovery

1. A fair die shows $1$ through $6$, each with probability $\tfrac16$. If you added up the six faces and
   split the total evenly, what number would you get? Write this as a sum where each face is multiplied
   by $\tfrac16$.
2. Now bias the situation: a spinner lands on "$10$ points" with probability $\tfrac14$ and on "$2$
   points" with probability $\tfrac34$. You can't just average $10$ and $2$, because they aren't equally
   likely. How should you combine the values and their probabilities to get the long-run average score?
3. Look at what you did in steps $1$ and $2$: each *value* was multiplied by its *probability*, and the
   results were added. Write this as a single general expression for a quantity taking values $x_1,
   \dots, x_m$ with probabilities $p_1, \dots, p_m$.
4. Check your formula against a sure thing: if a quantity always equals $7$ (probability $1$), what does
   your expression give? Does that match intuition?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Expected value.** A random quantity $X$ that takes values $x_1, x_2, \dots, x_m$ with probabilities
$p_1, p_2, \dots, p_m$ (where $p_1 + \cdots + p_m = 1$) has **expected value**
$$E[X] = x_1 p_1 + x_2 p_2 + \cdots + x_m p_m = \sum_{i=1}^{m} x_i\, p_i.$$
It is the **probability-weighted average** of the values — each outcome pulls the average toward itself
in proportion to its likelihood. When all $m$ outcomes are equally likely ($p_i = \tfrac1m$), this is
just the ordinary mean $\tfrac1m\sum x_i$. The expected value need not be an attainable value of $X$.

### Proof

The formula is the definition of expectation; its two claimed properties are what need checking.

**Equally likely reduces to the mean.** If each of the $m$ values has probability $p_i = \tfrac1m$,
then
$$E[X] = \sum_{i=1}^m x_i\cdot\frac1m = \frac{1}{m}\sum_{i=1}^m x_i,$$
the arithmetic mean — so expectation genuinely generalizes "average."

**It matches the long-run average.** Suppose over $N$ trials outcome $x_i$ occurs $N_i$ times. The
observed average is $\dfrac{1}{N}\sum_i x_i N_i = \sum_i x_i\cdot\dfrac{N_i}{N}$. As trials accumulate,
the relative frequency $\dfrac{N_i}{N}$ approaches the probability $p_i$, so the observed average
approaches $\sum_i x_i p_i = E[X]$. Thus expectation is the value the running average tends to.

**A constant.** If $X = c$ always (so one outcome has probability $1$), then $E[X] = c\cdot 1 = c$: a
sure quantity's expectation is itself. Each product $x_i p_i$ is a value scaled by a probability
fraction, and summing these weighted pieces is what "weighted average" means. $\blacksquare$

### Worked Instance

The Hook. A fair die:
$$E[X] = 1\cdot\tfrac16 + 2\cdot\tfrac16 + \cdots + 6\cdot\tfrac16 = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5.$$
The die never shows $3.5$; it is the balance point of the six equally likely faces.

The biased spinner:
$$E = 10\cdot\tfrac14 + 2\cdot\tfrac34 = \tfrac{10}{4} + \tfrac{6}{4} = \tfrac{16}{4} = 4,$$
much closer to $2$ than to $10$ because the low value is three times as likely. Expectation also decides
fair games: if a lottery ticket costs $3$ dollars and pays $10$ dollars with probability $\tfrac14$ (and
nothing otherwise), the expected payout is $10\cdot\tfrac14 = 2.5$ dollars, less than the $3$-dollar
cost — a losing bet on average.

### Pitfalls

- **Weight by probability, don't just average the values.** For unequal probabilities, the plain mean of
  the outcomes is wrong; multiply each value by *its* probability first.
- **The expected value may be unattainable.** $3.5$ is not a die face. Expectation is a long-run average,
  not a forecast of a single trial.
- **Probabilities must sum to $1$.** If your listed outcomes don't cover everything (weights not summing
  to $1$), the weighted sum isn't a valid expectation — find the missing outcomes.
- **Include *every* outcome, even zero-value ones.** "Nothing happens" with its probability still belongs
  in the sum (contributing $0$); omitting it or mis-weighting the rest skews the average.

:::
:::

## Connections

Expected value weights the outcomes of classical probability (`comb-probability-intro`) by their
chances, each product a value times a probability fraction (`ari-fraction-multiply`), and averages them.
Its decisive next step is *linearity* — $E[X + Y] = E[X] + E[Y]$ even for dependent $X, Y$ — which turns
hard expectations into sums of easy ones (`comb-linearity-expectation`) and powers the probabilistic
method. Expectation also underlies fair-game and decision analysis. Recognition trigger: "on average,"
"expected," "in the long run," or a game with random payoffs — multiply each value by its probability and
add.

## History

The idea of expected value — the long-run average payoff — was introduced by Christiaan Huygens in $1657$, in the first printed treatise on probability, building directly on the $1654$ Pascal–Fermat analysis of the "problem of points." Huygens took expectation, rather than probability, as his fundamental notion, defining the fair price of a gamble. Jacob Bernoulli and later writers made expectation central to the theory. It matters because it compresses a whole distribution of outcomes into a single, decision-guiding number — the ancestor of everything from insurance pricing to the modern theory of games.
