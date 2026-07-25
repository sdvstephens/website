A $25\%$ discount, a test score of $80\%$, a $5\%$ tax — percents are everywhere, and they all
secretly mean "out of $100$." $25\%$ of something is just $\tfrac{25}{100}$ of it. Why standardize on
$100$, and how does that one choice make percents translate instantly to fractions and decimals?

## Discovery

1. The word "percent" splits as "per cent" — per hundred. So $25\%$ means "$25$ per $100$." Write
   $25\%$ as a fraction with denominator $100$, then as a decimal using place value.
2. Reduce your fraction from step $1$ to lowest terms. What simple fraction is $25\%$? Do the same for
   $50\%$ and $10\%$.
3. To take "$25\%$ *of* $60$," recall that "of" means multiply. Using the fraction or decimal form
   from step $1$, compute $25\%$ of $60$. 
4. Go backwards: a fraction like $\tfrac35$ — what percent is it? Rewrite it with denominator $100$
   (what do you multiply top and bottom by?), then read off the percent. Why does denominator $100$
   make "what percent" a single renaming?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Percent means per-hundred.** The symbol $\%$ is shorthand for $\times\tfrac1{100}$:
$$p\% = \frac{p}{100} = p\times 0.01 .$$
So a percent is simply a fraction with denominator $100$ (equivalently, hundredths as a decimal).
Three interchangeable forms: $25\% = \tfrac{25}{100} = \tfrac14 = 0.25$. To compute "**$p\%$ of $N$**"
(the word *of* being multiplication), evaluate $\tfrac{p}{100}\cdot N$. To express a fraction or
decimal **as** a percent, rename it over $100$ (or multiply by $100$ and append $\%$): $\tfrac35 =
\tfrac{60}{100} = 60\%$. The fixed denominator $100$ is what makes percents a common yardstick for
comparing proportions.

### Proof

Everything rests on the definition $\% = \times\tfrac1{100}$ together with the meaning of a fraction.

*Percent $\to$ fraction/decimal.* By definition $p\% = p\cdot\tfrac1{100} = \tfrac{p}{100}$, a
fraction with denominator $100$; since $\tfrac1{100}=0.01$ (two decimal places, hundredths), also
$p\% = p\times 0.01$, i.e. the decimal with $p$ in the hundredths. Reducing $\tfrac{p}{100}$ by
$\gcd(p,100)$ gives its lowest-terms fraction (e.g. $\tfrac{25}{100}=\tfrac14$).

*"$p\%$ of $N$."* "Of" is multiplication, so $p\%$ of $N$ is $\tfrac{p}{100}\cdot N = \tfrac{pN}{100}$.

*Fraction $\to$ percent.* To write $\tfrac ab$ as a percent, find the equivalent fraction with
denominator $100$: multiply top and bottom by $\tfrac{100}{b}$ (when $b\mid 100$, an integer), giving
$\tfrac ab = \tfrac{a\cdot 100/b}{100} = \left(\tfrac{100a}{b}\right)\%$. In general
$\tfrac ab = \tfrac ab\cdot 100\% = \tfrac{100a}{b}\%$, since $100\% = \tfrac{100}{100}=1$ and
multiplying by $1$ preserves value — this is why "multiply by $100$ and add $\%$" is exact, not a
trick. $\blacksquare$

### Worked Instance

The Hook's $25\%$: $\tfrac{25}{100} = \tfrac14 = 0.25$, so $25\%$ off means paying $\tfrac34$. Then
$25\%$ of $60$ dollars is $\tfrac14\cdot 60 = 15$ dollars — the discount is $15$, and the sale price
$60-15=45$ dollars. Going the other way, a test with $\tfrac35$ correct converts to a percent by
renaming over $100$: $\tfrac35 = \tfrac{3\cdot 20}{5\cdot 20} = \tfrac{60}{100} = 60\%$. Same
proportion, expressed on the per-hundred yardstick everyone shares.

### Pitfalls

- **$\%$ is $\times\tfrac1{100}$, so shift *two* decimal places.** $7\% = 0.07$, not $0.7$; and
  $0.4 = 40\%$, not $4\%$.
- **"Percent of" is multiplication.** $20\%$ of $50$ is $\tfrac{20}{100}\cdot 50 = 10$, not
  $50 - 20$ or $50\div 20$.
- **A percent needs a base.** "$25\%$" alone is meaningless until you say $25\%$ *of what*; $25\%$ of
  $80$ ($=20$) differs from $25\%$ of $200$ ($=50$).
- **Percents can exceed $100$.** $150\% = \tfrac{150}{100} = 1.5$; there is no cap at $100\%$.

:::
:::

## Connections

Percents are fractions pinned to denominator $100$ (equivalently hundredths), so they inherit
everything from fractions and decimals and convert freely among all three forms. The fixed base $100$
makes them a universal comparison scale for discounts, taxes, scores, and probabilities, and they set
up percent change and successive percents. Recognition trigger: any "$\%$," "out of a hundred," or
"per cent" is a hundredths-fraction you can compute with directly.

## History

"Percent" means literally "per hundred," and the idea long predates the word: Roman emperors levied taxes such as the *centesima rerum venalium*, a $1/100$ duty on goods sold, making hundredths a natural fiscal unit. As commerce flourished in late-medieval and Renaissance Italy, merchants routinely computed interest, profit, and tax in parts per hundred, and fifteenth-century Italian and later manuals abbreviated "per cento" in ways that evolved into the modern "%" sign by the seventeenth century. The choice of a hundred as the base owes much to its convenience within the decimal Hindu–Arabic system. Percentages were thus born from banking and trade rather than pure mathematics. This mattered because expressing a fraction as a percent gives a common, intuitive scale for comparing proportions — of populations, probabilities, concentrations, and interest — and it remains the most widely used quantitative language in everyday public life.
