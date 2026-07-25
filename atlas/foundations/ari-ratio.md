A paint mix uses blue and yellow in the ratio $2:3$. Whether you pour $2$ cups and $3$ cups or
$20$ cups and $30$ cups, the green comes out the same shade. A ratio pins down a *relationship*, not
an amount. How can $2:3$ and $20:30$ describe the identical mixture, and how does a two-number
comparison behave like a single fraction?

## Discovery

1. In a $2:3$ blue-to-yellow mix, group the paint into "batches," each batch being $2$ blue $+$ $3$
   yellow. If you make $5$ batches, how much blue and how much yellow is that? Write the blue and
   yellow totals, and their comparison. Did the *relationship* between blue and yellow change?
2. From step $1$, express "how much blue *per* unit of yellow" as a single number by dividing blue by
   yellow. Do this for $2:3$ and for $20:30$. Do you get the same number?
3. A ratio $a:b$ also tells you what fraction of the *whole* mixture each color is. Out of every
   batch of $2:3$, how many parts total, and so what fraction of the mix is blue? Write blue's share
   and yellow's share of the total.
4. Test scale-invariance directly: multiply both sides of $2:3$ by any whole number $k$ to get
   $2k:3k$. Using the fraction from step $2$, argue why the "blue per yellow" number is unchanged for
   every $k$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Ratios.** A **ratio** $a:b$ compares two quantities by division, recording how many units of the
first correspond to $b$ units of the second. Its value is the fraction
$$a:b \;\longleftrightarrow\; \frac ab,$$
so a ratio behaves exactly like a fraction: $a:b = ka:kb$ for any $k\ne 0$ (**scale-invariance** —
the same relationship in bigger or smaller batches), and it reduces to **lowest terms**
$\tfrac{a}{\gcd(a,b)}:\tfrac{b}{\gcd(a,b)}$. A ratio is *part-to-part*; to get each part's share of
the *whole*, divide by the total number of parts: in $a:b$, the first is $\tfrac{a}{a+b}$ of the
total and the second is $\tfrac{b}{a+b}$. Ratios extend to more terms, e.g. $a:b:c$.

### Proof

The claims are that a ratio is faithfully a fraction, is scale-invariant, and splits the whole as
stated.

*Ratio as fraction, scale-invariant.* "$a$ of the first for every $b$ of the second" is the
comparison $a\div b = \tfrac ab$ by the meaning of a fraction (division/equal-grouping). Scaling both
quantities by $k$ makes $ka$ and $kb$, and
$$\frac{ka}{kb} = \frac ab$$
by equivalent fractions ($\times\tfrac kk=1$). So $a:b$ and $ka:kb$ have the same value — the
relationship is unchanged by working in larger or smaller batches, and dividing by $\gcd(a,b)$ gives
its lowest-terms form.

*Shares of the whole.* Split the mixture into batches of $a+b$ parts, $a$ of the first kind and $b$
of the second. In any number $n$ of batches there are $na$ of the first and $n(a+b)$ parts total, so
the first kind's fraction of the whole is
$$\frac{na}{n(a+b)} = \frac{a}{a+b},$$
independent of $n$, and likewise the second is $\tfrac{b}{a+b}$. These shares add to
$\tfrac{a}{a+b}+\tfrac{b}{a+b}=\tfrac{a+b}{a+b}=1$, accounting for the whole. $\blacksquare$

### Worked Instance

The Hook: blue$:$yellow $=2:3$. Its value is $\tfrac23$ (blue per yellow), and $20:30$ reduces by
$\gcd(20,30)=10$ to $2:3$ — same value $\tfrac23$, same green. Shares of the whole: total parts
$2+3=5$, so blue is $\tfrac25$ of the mixture and yellow $\tfrac35$. Hence to make $5$ liters of
paint you use $\tfrac25\cdot 5 = 2$ liters blue and $\tfrac35\cdot 5 = 3$ liters yellow; to make
$100$ liters, $40$ blue and $60$ yellow — the ratio holds while the amounts scale.

### Pitfalls

- **Part-to-part vs. part-to-whole.** In $2:3$, blue is $\tfrac23$ of the *yellow* but only $\tfrac25$
  of the *total*. Do not use $\tfrac23$ as blue's share of the mixture.
- **Both terms scale together.** $2:3$ becomes $20:30$, not $20:3$; multiply every term by the same
  $k$.
- **Order matters.** $2:3$ (blue:yellow) is not $3:2$; the first term names the first quantity.
- **A ratio has no units of its own.** $2:3$ is a pure comparison; the $2$ and $3$ must be measured in
  the *same* unit before forming it (two cups to three cups, not two cups to three gallons).

:::
:::

## Connections

A ratio is a fraction used as a *comparison*, inheriting equivalence and reduction from fractions and
division. It is the raw material for proportions (setting two ratios equal), unit conversion
(ratios equal to $1$), rates, and percents (a ratio to $100$). Recognition trigger: any "for every,"
"per," "mix in the proportion," or "$a$ to $b$" is a ratio you can convert to a fraction and scale.

## History

Ratio is one of the oldest and most philosophically charged ideas in mathematics. The Pythagoreans (c. 500 BCE) built a worldview on whole-number ratios, especially the ratios governing musical harmony, until the discovery of incommensurable magnitudes shattered the belief that all ratios are ratios of integers. The Greek response was Eudoxus' magnificent theory of proportion, preserved in Book V of Euclid's *Elements* (c. 300 BCE), which defined equality of ratios for *any* magnitudes, commensurable or not — a definition so rigorous it anticipated Dedekind's nineteenth-century construction of the reals. Ratios drove Greek geometry, Ptolemaic astronomy, and Renaissance art's theory of proportion. This mattered because the concept of ratio is the seed of proportion, similarity, trigonometry, slope, and rates of change — and because grappling with irrational ratios first forced mathematics beyond the whole numbers.
