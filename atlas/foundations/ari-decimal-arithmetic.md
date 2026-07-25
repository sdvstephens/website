The price $3.7$ dollars and the price $3.70$ dollars are the same, yet $3.7$ and $3.07$ are wildly
different. A single digit's *position* after the dot changes its worth tenfold. Why does sliding a
digit one place right cut its value to a tenth, and how does that make lining up the decimal points
the whole secret to adding decimals?

## Discovery

1. Whole-number place value: in $253$, the $2$ is worth $2\cdot 10^2$, the $5$ is $5\cdot 10^1$, the
   $3$ is $3\cdot 10^0$ — each step *left* multiplies the place by $10$. Continue the pattern
   *rightward past the units digit*: if the units place is $10^0=1$, what must the next place to its
   right be worth, and the one after that? Write the first three places after the point as fractions.
2. Using step $1$, read $0.7$ and $0.07$ each as a single fraction (a numerator over a power of ten).
   Which is bigger, and by what factor?
3. Add $0.7 + 0.07$ by first rewriting both over a *common* power of ten, then combining. What common
   denominator did you use, and how does that explain "line up the decimal points and add"?
4. Test the leading-and-trailing-zero question: is $3.7$ the same amount as $3.70$? Write each as a
   fraction over a power of ten and compare. What about $3.7$ versus $3.07$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Decimals are fractions with denominators that are powers of ten.** The digit $k$ places to the
right of the decimal point carries the weight $10^{-k}=\tfrac1{10^k}$: tenths, hundredths,
thousandths, and so on. A decimal is the sum of its digits times their place values, e.g.
$$3.74 = 3 + \frac7{10} + \frac4{100} = \frac{374}{100}.$$
Consequences:
- Each step right divides the place value by $10$ (each step left multiplies by $10$).
- **Trailing zeros after the point don't change value:** $3.7 = 3.70 = \tfrac{37}{10}=\tfrac{370}{100}$.
- To **add or subtract**, align the points (a common power-of-ten denominator) and combine digit by
  digit, carrying/borrowing exactly as with whole numbers.

### Proof

Everything follows from continuing place value past the units digit and from the common-denominator
rule for adding fractions.

*Place values are powers of ten.* Whole-number places, right to left, are $10^0,10^1,10^2,\dots$,
each ten times the one to its right — equivalently, each step *right* divides by $10$. Continuing the
same rule past $10^0=1$ forces the next places to be $10^{-1}=\tfrac1{10}$, $10^{-2}=\tfrac1{100}$,
$\dots$, the tenths, hundredths, and so on. So a decimal $d_1d_2\cdots$ after the point equals
$\sum_k d_k\cdot 10^{-k}$, a sum of digit-multiples of unit fractions with power-of-ten denominators;
putting all over $10^n$ (for $n$ digits) writes it as a single fraction $\tfrac{N}{10^n}$.

*Trailing zeros.* Appending a zero multiplies top and bottom by $10$: $\tfrac{37}{10} =
\tfrac{370}{100}$, an equivalent fraction, so $3.7 = 3.70$. A zero *between* the point and a digit is
different — it shifts that digit into a smaller place, changing the value ($3.07=\tfrac{307}{100}\ne
3.70$).

*Aligned addition.* To add two decimals, write both over the same power of ten $10^n$ (pad the
shorter with trailing zeros — legal, by the previous paragraph). They now have a common denominator,
so add numerators: this is precisely "line up the points and add the columns," with tens carried
because $10$ units of one place make one of the next. $\blacksquare$

### Worked Instance

The Hook: $0.7 = \tfrac7{10}$ and $0.07 = \tfrac7{100}$ — a tenfold gap from the one-place shift.
Their sum: rewrite $0.7 = 0.70 = \tfrac{70}{100}$, so $0.70 + 0.07 = \tfrac{77}{100} = 0.77$, which
is exactly what lining up the points and adding columns gives. And $3.7 = \tfrac{37}{10} =
\tfrac{370}{100} = 3.70$ (same amount), whereas $3.07 = \tfrac{307}{100}$ is genuinely less than
$3.70$ because its $7$ sits in the hundredths place, not the tenths.

### Pitfalls

- **Trailing zeros are free; interior zeros are not.** $0.5 = 0.50$, but $0.5 \ne 0.05$: a zero after
  the point *before* a digit demotes it a place.
- **Align points, not right ends, to add.** Add $1.2 + 0.35$ as $1.20 + 0.35 = 1.55$; right-justifying
  the digits ($1.2$ under $0.35$ misaligned) corrupts place values.
- **More digits does not mean bigger.** $0.9 \gt 0.1234$; compare place by place from the left, not by
  digit count.
- **The point separates $10^0$ from $10^{-1}$.** There is no "oneths" place; the units digit sits just
  *left* of the point.

:::
:::

## Connections

Decimals are just base-ten fractions, so they inherit place value (powers of ten, hence the exponent
node) and the meaning of a fraction, and their addition is the common-denominator rule in disguise.
They set up rounding, conversion between decimals and fractions, repeating decimals, and percents
(hundredths). Recognition trigger: any figure with a decimal point — money, measurements, averages —
is a power-of-ten fraction you can reason about exactly.

## History

Decimal *place value* is ancient — the Hindu–Arabic numeral system with zero, developed in India by the time of Brahmagupta (628 CE) and transmitted to Europe by al-Khwārizmī and Fibonacci (1202) — but extending it to the right of the units, into tenths and hundredths, came much later. The Persian mathematician al-Kāshī used decimal fractions in the fifteenth century, but their decisive introduction to Europe was Simon Stevin's booklet *De Thiende* ("The Tenth," 1585), which argued that all computation could be done with decimals and even foresaw decimal coinage and measures. The modern decimal point notation was popularized soon after, notably by John Napier in the early seventeenth century. Stevin's motive was frankly practical: to spare merchants and engineers the pain of fractions. This mattered because decimal arithmetic made calculation with non-integers uniform and mechanical, paving the way for logarithm tables, the metric system, and modern computation.
