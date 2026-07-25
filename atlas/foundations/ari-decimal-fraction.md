The label $0.375$ and the fraction $\tfrac38$ are the same number in two costumes. One direction
feels obvious — read the decimal's place value — but going from $\tfrac38$ back to $0.375$ takes an
actual division. Why do these two conversions run in opposite directions, and does every fraction
even *have* a terminating decimal?

## Discovery

1. Read $0.375$ straight off its place values as a single fraction over a power of ten (what power,
   and what numerator?). Then reduce it to lowest terms. What fraction did you land on?
2. Now go the other way with $\tfrac38$. Recall $\tfrac ab$ *means* $a\div b$. Carry out
   $3\div 8$ as a long division, appending decimal zeros to the $3$ (i.e. $3.000\ldots$) until the
   remainder hits $0$. Write the decimal you get.
3. Try $\tfrac13$ the same way: divide $1\div 3$ with decimal zeros. Does the remainder ever reach
   $0$? Describe what the digits do instead — and hence why not every fraction terminates.
4. Compare the two fractions that terminated ($\tfrac38$, and $\tfrac{375}{1000}$ before reducing)
   with $\tfrac13$. Factor each *reduced* denominator into primes. What prime factors appear in the
   terminating ones that do *not* appear in $\tfrac13$'s denominator?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Decimal $\leftrightarrow$ fraction conversion.**
- **Decimal $\to$ fraction (terminating):** a decimal with $n$ digits after the point equals its
  digits (as a whole number) over $10^n$, then reduced. E.g. $0.375 = \tfrac{375}{1000} = \tfrac38$.
- **Fraction $\to$ decimal:** compute $a\div b$ by long division, extending the dividend with decimal
  zeros. The process either **terminates** (a remainder of $0$) or **repeats** (a remainder recurs,
  cycling the digits forever).
- **Which fractions terminate:** a fraction in lowest terms $\tfrac ab$ has a terminating decimal
  **exactly when the only prime factors of $b$ are $2$ and $5$** (the primes of $10$). Otherwise its
  decimal repeats. So $\tfrac38$ (denominator $8=2^3$) terminates, but $\tfrac13$ does not.

### Proof

*Decimal $\to$ fraction.* A terminating decimal with $n$ digits after the point is, by place value,
$\sum_{k=1}^n d_k 10^{-k} = \tfrac{N}{10^n}$ where $N$ is the integer formed by those digits. This is
already a fraction; reduce by $\gcd(N,10^n)$. So *every* terminating decimal is rational.

*Fraction $\to$ decimal, and why it terminates or repeats.* Long division of $a$ by $b$ produces at
each step a remainder $r$ with $0\le r\lt b$. There are only $b$ possible remainders. If some
remainder is $0$, the division stops — a terminating decimal. If $0$ never occurs, then within at
most $b$ steps a remainder must *repeat* (pigeonhole: more steps than possible nonzero remainders),
and once a remainder recurs the following digits recur identically forever — a repeating decimal.
Either way the result is a definite decimal expansion.

*The $2$-and-$5$ criterion.* Suppose $\tfrac ab$ is in lowest terms. If $\tfrac ab$ terminates with
$n$ places, then $\tfrac ab = \tfrac{N}{10^n}$, so $a\cdot 10^n = N\cdot b$, meaning $b$ divides
$10^n = 2^n5^n$; as $b$ shares no factor with $a$, every prime of $b$ divides $2^n5^n$, so $b$'s only
primes are $2$ and $5$. Conversely, if $b = 2^x5^y$, multiply top and bottom by whichever of $2$ or
$5$ is short to reach a denominator $2^m5^m = 10^m$ (with $m=\max(x,y)$): then $\tfrac
ab=\tfrac{a\cdot k}{10^m}$ is a terminating decimal. So termination $\iff$ $b$'s primes $\subseteq
\{2,5\}$. $\blacksquare$

### Worked Instance

The Hook: $0.375 = \tfrac{375}{1000}$; since $\gcd(375,1000)=125$, this reduces to
$\tfrac{375\div125}{1000\div125} = \tfrac38$. Backward, $\tfrac38 = 3\div 8$: long division gives
$0.375$ (remainders $30\to 6$, $60\to 4$, $40\to 0$ — it stops), and indeed $8=2^3$ has only the
prime $2$, so termination was guaranteed. By contrast $\tfrac13 = 1\div 3 = 0.333\ldots$ never
terminates: the remainder is stuck at $1$ forever, and $3$ is a prime outside $\{2,5\}$.

### Pitfalls

- **The denominator is the power of ten, not $10$.** $0.375$ is $\tfrac{375}{1000}$ (three places,
  $10^3$), not $\tfrac{375}{10}$.
- **Reduce after converting.** $\tfrac{375}{1000}$ is correct but not final; lowest terms $\tfrac38$
  is the expected answer.
- **Not every fraction terminates.** $\tfrac13, \tfrac16, \tfrac17$ repeat; only $2$s and $5$s in the
  reduced denominator permit a clean stop.
- **Check the denominator *after* reducing.** $\tfrac{6}{12}$ looks like it has the prime $3$, but it
  reduces to $\tfrac12$, which terminates ($0.5$); use the lowest-terms denominator for the test.

:::
:::

## Connections

Conversion joins the two faces of a rational number: decimals are power-of-ten fractions (read off
directly), while a general fraction becomes a decimal only through division. The remainder-cycling
argument here is the doorway to repeating decimals, and the $2$-and-$5$ criterion previews prime
factorization's grip on base-ten. Recognition trigger: any need to move between $0.\text{something}$
and $\tfrac ab$ form — for comparison, for percents, or for exactness — is this conversion.

## History

The equivalence between a terminating decimal and an ordinary fraction — that $0.75$ *is* $\tfrac34$ — is the conceptual heart of Simon Stevin's *De Thiende* (1585), which first argued that fractions with denominators of ten, a hundred, and so on could replace all common fractions in computation. Stevin's insight rested on the older Hindu–Arabic place-value system, extended rightward past the units place. That a fraction $a/b$ yields a *terminating* decimal exactly when $b$'s only prime factors are $2$ and $5$ — the primes dividing the base ten — was clarified as number theory matured through Euler and Gauss. The driving motivation was computational convenience for trade and science. This mattered because it wove fractions and decimals into a single system, and because understanding *which* fractions terminate (and which repeat) is the gateway to the structure of the rationals inside the decimal world.
