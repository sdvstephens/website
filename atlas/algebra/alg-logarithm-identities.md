Before pocket calculators, multiplying two seven-digit numbers meant looking each up in a table,
*adding* the two entries, and looking the sum back up. Multiplication became addition. The trick was
the logarithm — but why should $\log$ of a product turn into a *sum*?

## Discovery

Fix a base $b \gt 0$, $b \ne 1$, so that $y = \log_b x$ is exactly the inverse of $x = b^y$: the log
answers "to what power must I raise $b$ to get $x$?"

1. Let $M = b^p$ and $N = b^q$, so that $p = \log_b M$ and $q = \log_b N$. Compute the product $MN$
   using the exponent law for multiplying powers of the same base. Then apply $\log_b$ to your
   expression for $MN$ and read off $\log_b(MN)$ in terms of $p$ and $q$ — i.e. in terms of
   $\log_b M$ and $\log_b N$.
2. Repeat the maneuver for a quotient $M/N$ and for a power $M^r$ (real $r$), each time writing the
   quantity as a single power of $b$ using an exponent law, then taking $\log_b$. State the resulting
   identity in each case.
3. Now suppose your table only lists logarithms in base $10$, but you need $\log_2 7$. Set
   $y = \log_2 7$, rewrite it as an exponential equation $2^y = 7$, and take $\log_{10}$ of both
   sides. Solve for $y$. What formula converts a logarithm in one base into logarithms in another?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For base $b \gt 0$, $b \ne 1$ and positive arguments $M, N$ (and any real $r$):
$$\log_b(MN) = \log_b M + \log_b N, \qquad \log_b\!\left(\frac{M}{N}\right) = \log_b M - \log_b N,
\qquad \log_b(M^r) = r\log_b M.$$
Together with the boundary values $\log_b 1 = 0$ and $\log_b b = 1$, these are the **log laws**. The
**change-of-base formula** converts between bases: for any admissible base $c$,
$$\log_b x = \frac{\log_c x}{\log_c b}.$$
The product law is the engine that turns multiplication into addition; the power law turns
exponentiation into multiplication; change of base lets a single table (or a calculator's $\ln$ and
$\log_{10}$) compute logarithms to *any* base.

### Proof

Throughout, use that $\log_b$ and $b^{(\cdot)}$ are mutually inverse and that $\log_b$ is one-to-one,
so $b^u = b^v \iff u = v$.

*Product.* Let $p = \log_b M$, $q = \log_b N$, i.e. $M = b^p$, $N = b^q$. By the exponent law
$b^p b^q = b^{p+q}$,
$$MN = b^p b^q = b^{p+q}.$$
Applying $\log_b$ (the inverse of $b^{(\cdot)}$) gives $\log_b(MN) = p + q = \log_b M + \log_b N$.

*Quotient.* With the same $p, q$, $\dfrac{M}{N} = \dfrac{b^p}{b^q} = b^{p-q}$, so
$\log_b(M/N) = p - q = \log_b M - \log_b N$.

*Power.* With $p = \log_b M$, the exponent law $(b^p)^r = b^{pr}$ gives $M^r = b^{pr}$, so
$\log_b(M^r) = pr = r\log_b M$.

*Change of base.* Let $y = \log_b x$, so $b^y = x$. Apply $\log_c$ to both sides and use the power law
just proved: $\log_c(b^y) = y\log_c b = \log_c x$. Since $b \ne 1$ gives $\log_c b \ne 0$, divide:
$$y = \frac{\log_c x}{\log_c b}, \qquad\text{i.e.}\qquad \log_b x = \frac{\log_c x}{\log_c b}.
\qquad \blacksquare$$

### Worked Instance

The Hook, made concrete: to multiply $M = 128$ by $N = 32$ via addition, note $128 = 2^7$ and
$32 = 2^5$, so
$$\log_2(128 \cdot 32) = \log_2 128 + \log_2 32 = 7 + 5 = 12,$$
whence $128 \cdot 32 = 2^{12} = 4096$ — the multiplication done as the addition $7 + 5$. Change of
base in action: to find $\log_2 7$ from base-$10$ values,
$$\log_2 7 = \frac{\log_{10} 7}{\log_{10} 2} \approx \frac{0.8451}{0.3010} \approx 2.807.$$
Check: $2^{2.807} \approx 7$. ✓ And combining laws, $\log_b\frac{x^3\sqrt{y}}{z} = 3\log_b x +
\tfrac12\log_b y - \log_b z$.

### Pitfalls

- **$\log(M + N)$ is not $\log M + \log N$.** The product law addresses $\log(MN)$; there is *no* law
  that simplifies the logarithm of a sum. This is the single most common error.
- **Arguments must be positive.** $\log_b M$ requires $M \gt 0$; identities like
  $\log_b(M^2) = 2\log_b M$ can silently change domains (the left side allows $M \lt 0$ via $M^2 \gt 0$,
  the right does not) — restrict carefully.
- **The power law needs the exponent outside.** $\log_b(M^r) = r\log_b M$, but $(\log_b M)^r$ is
  entirely different; the exponent belongs to $M$, not to the whole log.
- **Change of base divides, not subtracts.** $\log_b x = \dfrac{\log_c x}{\log_c b}$ — a quotient of
  logs, never $\log_c x - \log_c b$.
- **Base $b \ne 1$ and $b \gt 0$.** With $b = 1$ every power is $1$ and the log is undefined; the
  change-of-base denominator $\log_c b$ would be $0$.

:::
:::

## Connections

These identities are the exponent laws viewed through the inverse function ([alg-exponentials-logs]):
each log law is one exponent law with $\log_b$ wrapped around it. They convert multiplicative structure
into additive structure — the reason logarithms linearize growth, tame products in **inequalities**
(e.g. taking $\log$ before applying AM–GM), and appear whenever an unknown sits in an exponent.
Recognition trigger: an equation with the variable in an exponent, a product or power inside a
logarithm to split apart, or a log in an inconvenient base to convert.

## History

Logarithms were invented to do exactly what the Hook describes: replace laborious multiplication with
addition. John Napier published the first table in *Mirifici Logarithmorum Canonis Descriptio* (1614)
after two decades of computation, motivated by the crushing arithmetic faced by astronomers; the Swiss
clockmaker Jost Bürgi developed the idea independently around the same time. Henry Briggs, in
collaboration with Napier, recast the tables to base $10$ (common logarithms) in 1617, making them
practical for everyday calculation. The identities themselves — product to sum, power to product —
were the whole point of the tables, and they governed the slide rule and centuries of hand computation
until electronic calculators. Leonhard Euler later clarified in the eighteenth century that the
logarithm is simply the inverse of the exponential function, the viewpoint from which every log law
falls out of an exponent law.
