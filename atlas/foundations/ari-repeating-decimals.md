Long division of $1\div 3$ never stops: $0.3333\ldots$ forever. Yet this endless decimal equals the
tidy fraction $\tfrac13$. Even stranger, $0.9999\ldots$ turns out to be *exactly* $1$, not merely
close. How can an infinite string of digits collapse into a plain fraction?

## Discovery

1. Call the repeating decimal $x = 0.3333\ldots$, one digit repeating. Multiply $x$ by $10$. Write
   $10x$ as a decimal and line it up under $x$ — what do you notice about the tails after the point?
2. Subtract $x$ from $10x$. The infinite tails match, so they cancel. What whole number is left on the
   right, and what expression in $x$ is left on the left? Solve the resulting equation for $x$.
3. Now a two-digit block: $y = 0.\overline{27} = 0.272727\ldots$. Which power of ten shifts the block
   exactly one full period so the tails align — $10y$ or $100y$? Multiply, subtract $y$, and solve.
4. Apply the same machine to $z = 0.\overline{9} = 0.9999\ldots$: multiply by $10$, subtract, solve.
   What fraction — and hence what familiar number — does $z$ equal?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Every repeating decimal is a fraction (the shift trick).** If a decimal repeats a block of $k$
digits, multiply it by $10^k$ to shift the repeating tail exactly one full period, then **subtract**
the original: the infinite tails cancel, leaving a finite equation you solve for the value. In
general, a purely repeating decimal $0.\overline{d_1\cdots d_k}$ equals
$$0.\overline{d_1 d_2\cdots d_k} = \frac{d_1 d_2\cdots d_k}{\underbrace{99\cdots9}_{k}},$$
the repeating block over $k$ nines (reduce afterward). Combined with the earlier direction, this
proves: **a number is rational exactly when its decimal terminates or repeats.** A surprising
special case: $0.\overline{9} = 1$ exactly — the same number wearing two decimal names.

### Proof

Let $x = 0.\overline{d_1\cdots d_k}$, a decimal whose digits repeat with period $k$ from the point.
Write $B = d_1 d_2\cdots d_k$ for the block read as a $k$-digit integer.

Multiplying by $10^k$ shifts every digit $k$ places left, moving the decimal point past exactly one
full copy of the block:
$$10^k x = B.\overline{d_1\cdots d_k} = B + x,$$
because the digits *after* the point in $10^k x$ are again $d_1 d_2\cdots$ repeating — an identical
tail to $x$. (This is the key: same period, same tail.) Subtract $x$:
$$10^k x - x = B \;\Longrightarrow\; (10^k - 1)x = B \;\Longrightarrow\; x = \frac{B}{10^k - 1} = \frac{B}{\underbrace{99\cdots9}_{k}}.$$
So $x$ is a ratio of integers — rational. Together with the fact that every rational's long division
terminates or repeats (bounded remainders must cycle), a real number is rational **iff** its decimal
terminates or eventually repeats. For a decimal that repeats only after some non-repeating front,
first multiply by a power of ten to move the point to the start of the repeating part, then run the
same trick. $\blacksquare$

### Worked Instance

The Hook's $x=0.\overline{3}$: $10x = 3.\overline{3}$, so $10x - x = 3$, giving $9x = 3$ and
$x = \tfrac39 = \tfrac13$. The two-digit case $y = 0.\overline{27}$: $100y = 27.\overline{27}$, so
$100y - y = 27$, i.e. $99y = 27$ and $y = \tfrac{27}{99} = \tfrac{3}{11}$. And the startling one:
$z = 0.\overline{9}$ gives $10z - z = 9$, so $9z = 9$ and $z = 1$. The endless $0.999\ldots$ is not
"just below" $1$; it *is* $1$, since the shift trick admits no other value.

### Pitfalls

- **Match the power of ten to the block length.** A $2$-digit repeat needs $\times 100$, not
  $\times 10$; the shift must align a *whole* period or the tails won't cancel.
- **$0.\overline{9} = 1$, exactly.** There is no gap; both are names for the same point. Similarly
  $0.4\overline{9} = 0.5$.
- **Handle a non-repeating front separately.** For $0.1\overline{6}$, shift past the $1$ first
  ($\times 10$ to reach $1.\overline6$, or set up two shifts) before subtracting.
- **Reduce the final fraction.** $\tfrac{27}{99}$ is right but not finished; $\tfrac{3}{11}$ is lowest
  terms.

:::
:::

## Connections

The shift trick completes the decimal–fraction correspondence: terminating *or* repeating decimals
are precisely the rationals, closing the loop opened by long division's cycling remainders. It leans
on decimal place value (each $\times 10^k$ shifts $k$ places) and on solving a linear equation via
division. Recognition trigger: an overline or "$\ldots$" marking a repeating block — or the puzzle
of $0.\overline9$ — calls for multiply-by-$10^k$-and-subtract.

## History

The discovery that some fractions produce endlessly repeating decimals, like $\tfrac13 = 0.333\ldots$, followed naturally once decimal fractions took hold after Stevin (1585). The eighteenth-century systematic study of these repetends is largely the work of John Wallis, who discussed periodic decimals, and above all Carl Friedrich Gauss, whose *Disquisitiones Arithmeticae* (1801) connected the length of a decimal's period to the order of $10$ modulo the denominator — a deep result in number theory. Mathematicians established that a number is rational precisely when its decimal expansion eventually repeats (a terminating decimal being one that repeats zeros), giving a clean decimal test for rationality. The famous identity $0.999\ldots = 1$ emerges from the same theory and has puzzled students ever since. This mattered because repeating decimals draw a sharp line between the rationals and the irrationals, whose expansions never settle into any pattern.
