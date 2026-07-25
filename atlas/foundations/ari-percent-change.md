A stock rises $10\%$ then falls $10\%$ — back to where it started? No: it ends *lower*. And a coat
marked up $20\%$ then discounted $20\%$ does not return to its original price. Percent changes refuse
to simply add or cancel. Why does "$+10\%$ then $-10\%$" not undo itself?

## Discovery

1. A price of $50$ dollars rises by $20\%$. Compute the increase ($20\%$ of $50$) and the new price.
   Now notice: the new price is the old price *plus* $20\%$ of it. Write the new price as a single
   multiple of $50$ — i.e. $50$ times what number?
2. From step $1$, a $20\%$ increase multiplies by some fixed factor. What is that factor? What factor
   does a $20\%$ *decrease* multiply by? State both as decimals.
3. Now do two changes in a row: take $100$ dollars, raise it $10\%$, then cut the result $10\%$.
   Use the multipliers from step $2$'s pattern ($1.10$ then $0.90$). What is the final amount, and is
   it above, below, or equal to $100$?
4. Explain step $3$'s outcome through the multipliers: multiply $1.10\times 0.90$. Is the product
   $1$? What does its value say about whether "$+10\%$ then $-10\%$" restores the start?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Percent change is multiplication by a factor.** Increasing a quantity by $p\%$ multiplies it by
$$1 + \frac{p}{100},$$
and decreasing by $p\%$ multiplies it by $1 - \tfrac{p}{100}$. So a $20\%$ rise is $\times 1.20$, a
$20\%$ cut is $\times 0.80$. The **percent change** from old value $V_0$ to new value $V_1$ is
$$\frac{V_1 - V_0}{V_0}\times 100\% ,$$
the change as a fraction of the *original*. **Successive** percent changes **multiply** their
factors, they do not add: a $+p\%$ followed by a $-p\%$ gives
$$\left(1+\tfrac{p}{100}\right)\left(1-\tfrac{p}{100}\right) = 1 - \frac{p^2}{100^2} \lt 1,$$
so it ends *below* the start (unless $p=0$). This is why up-then-down by the same percent loses
ground, and why percent changes are not reversible by the opposite percent.

### Proof

*Change as a multiplier.* Increasing $V_0$ by $p\%$ adds $\tfrac{p}{100}V_0$, giving
$$V_1 = V_0 + \frac{p}{100}V_0 = V_0\left(1+\frac{p}{100}\right)$$
by the distributive law — a single factor times $V_0$. Decreasing subtracts instead, giving factor
$1-\tfrac{p}{100}$. Rearranging, the percent change is $\tfrac{V_1-V_0}{V_0}\times 100\%$, the
increment measured against the original base.

*Successive changes multiply.* Applying factor $f_1$ then $f_2$ to $V_0$ yields $(f_1 V_0)\,f_2 =
(f_1 f_2)V_0$ by associativity — one net factor $f_1 f_2$. For $+p\%$ then $-p\%$,
$$f_1 f_2 = \left(1+\frac{p}{100}\right)\left(1-\frac{p}{100}\right) = 1 - \left(\frac{p}{100}\right)^2,$$
by the difference-of-squares expansion. Since $\left(\tfrac{p}{100}\right)^2 \gt 0$ for $p\ne 0$, the
net factor is strictly less than $1$, so the final value is below $V_0$. The changes did not add to
$0\%$; their *factors multiplied* to something under $1$. The asymmetry is that each percent is taken
of a *different* base — the rise is $p\%$ of $V_0$, but the fall is $p\%$ of the larger $V_1$, so the
fall removes more than the rise added. $\blacksquare$

### Worked Instance

The Hook: $100$ dollars up $10\%$ is $100\times 1.10 = 110$; then down $10\%$ is $110\times 0.90 =
99$ dollars — a dollar short of the start. The multipliers explain it: $1.10\times 0.90 = 0.99 =
1 - (0.10)^2$, a net $1\%$ loss. The reason in words: the $10\%$ drop is taken of $110$ (so it
removes $11$), while the $10\%$ rise was only $10$; taking the same percent of a bigger base costs
more. A markup-then-discount coat behaves identically: $\times 1.20$ then $\times 0.80 = 0.96$, a
$4\%$ net loss.

### Pitfalls

- **Successive percents multiply, never add.** $+10\%$ then $-10\%$ is $\times 0.99$ (a $1\%$ loss),
  not $0\%$; do not sum the percentages.
- **Each percent is of *its own* base.** The second change applies to the *already-changed* amount, a
  different starting number.
- **Percent change is measured against the *original*.** From $50$ to $60$ is a $\tfrac{10}{50}=20\%$
  increase; from $60$ back to $50$ is a $\tfrac{10}{60}\approx 16.7\%$ decrease — different bases,
  different percents.
- **A $p\%$ increase is undone by a *smaller* percent decrease**, not the same $p\%$; $\times 1.25$ is
  reversed by $\times 0.8$ (a $20\%$ cut), not a $25\%$ cut.

:::
:::

## Connections

Percent change turns "increase/decrease by $p\%$" into multiplication by $1\pm\tfrac p{100}$, using
the distributive law to fold base-plus-part into one factor and difference of squares to expose the
up-then-down loss. Chaining factors (associativity) explains successive discounts, tax-on-tip,
compound growth, and inflation. Recognition trigger: "increased/decreased by ___$\%$," "after a ___
markup then ___ off," or any multi-step percent scenario wants multipliers, not added percents.

## History

Measuring change as a percentage of a starting value grew directly out of the commercial mathematics of interest, profit, and loss that dominated Renaissance reckoning books, such as those descending from Fibonacci's *Liber Abaci* (1202) and the printed arithmetics of fifteenth- and sixteenth-century Italy. The compounding of percentage change — interest upon interest — was studied by Jacob Bernoulli in the late seventeenth century, whose analysis of continuous compounding led him to the number $e$. As statistics and economics matured in the nineteenth and twentieth centuries, percentage change became the standard language for growth rates, inflation, and index numbers. A recurring subtlety, understood by careful practitioners, is that percentage changes do not simply add: a rise then an equal-percentage fall does not return to the start. This mattered because percentage change is the everyday grammar of finance, economics, and any discussion of growth or decline.
