Add up $\dfrac{1}{1\cdot2} + \dfrac{1}{2\cdot3} + \dfrac{1}{3\cdot4} + \cdots + \dfrac{1}{99\cdot100}$.
Ninety-nine fractions, and yet the answer is a single clean fraction — because almost every term
secretly cancels the next one.

## Discovery

1. Look at one term $\dfrac{1}{k(k+1)}$. Find constants $A, B$ so that $\dfrac{1}{k(k+1)} =
   \dfrac{A}{k} + \dfrac{B}{k+1}$. (Clear denominators and match.) What are $A$ and $B$?
2. Rewrite the whole sum $\sum_{k=1}^{n}\dfrac{1}{k(k+1)}$ using your two-fraction form for each
   term. Write out the first three and last two terms explicitly. Which terms appear twice with
   opposite signs?
3. After the cancellation, only a few terms at the ends survive. Which ones? Write the closed form
   for the sum of $n$ terms.
4. Now the multiplicative analogue: consider $\prod_{k=2}^{n}\Big(1 - \dfrac1k\Big)$. Rewrite each
   factor as a **ratio** $\dfrac{k-1}{k}$. Which numerators cancel which denominators, and what
   single ratio remains?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A sum **telescopes** if its terms can be written as consecutive differences $t_k = f(k+1) - f(k)$;
then
$$\sum_{k=m}^{n} \big(f(k+1) - f(k)\big) = f(n+1) - f(m),$$
so the entire sum collapses to two boundary values. Dually, a product telescopes if each factor is
a ratio $t_k = \dfrac{g(k+1)}{g(k)}$, giving
$$\prod_{k=m}^{n} \frac{g(k+1)}{g(k)} = \frac{g(n+1)}{g(m)}.$$
The whole skill is recognizing (or engineering, e.g. via partial fractions) the summand as a
difference or the factor as a ratio.

### Proof

**Sum.** Expand $\sum_{k=m}^{n}\big(f(k+1) - f(k)\big)$ term by term:
$$\big(f(m+1) - f(m)\big) + \big(f(m+2) - f(m+1)\big) + \cdots + \big(f(n+1) - f(n)\big).$$
Every interior value $f(m+1), f(m+2), \dots, f(n)$ occurs once with a $+$ sign and once with a $-$
sign in adjacent terms, so all interior values cancel. Only $-f(m)$ (from the first bracket) and
$+f(n+1)$ (from the last) remain, giving $f(n+1) - f(m)$.
**Product.** Take logarithms, or argue directly: $\prod_{k=m}^{n}\frac{g(k+1)}{g(k)} =
\frac{g(m+1)}{g(m)}\cdot\frac{g(m+2)}{g(m+1)}\cdots\frac{g(n+1)}{g(n)}$; each $g(k)$ for
$m \lt k \le n$ appears once in a numerator and once in a denominator and cancels, leaving
$\frac{g(n+1)}{g(m)}$ (assuming no $g(k) = 0$). $\blacksquare$

### Worked Instance

$\displaystyle\sum_{k=1}^{99}\frac{1}{k(k+1)}$. Partial fractions give
$\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac1{k+1}$, so with $f(k) = -\tfrac1k$ this is $f(k+1) - f(k)$.
Telescoping:
$$\sum_{k=1}^{99}\Big(\frac1k - \frac1{k+1}\Big) = \frac11 - \frac1{100} = \frac{99}{100}.$$
Product example: $\displaystyle\prod_{k=2}^{n}\Big(1 - \frac1k\Big) = \prod_{k=2}^{n}\frac{k-1}{k}
= \frac{1}{2}\cdot\frac{2}{3}\cdots\frac{n-1}{n} = \frac{1}{n}$.

### Pitfalls

- Get the direction of the difference right: $\dfrac1k - \dfrac1{k+1}$ (positive) telescopes to a
  positive leftover; writing it backwards flips the sign of the answer.
- Track **exactly** which boundary terms survive — index shifts by one are the usual error. Write
  out the first and last two terms to be safe.
- For products, a zero factor (some $g(k) = 0$) breaks the cancellation; and don't forget factors
  can leave *two* leftover pieces if the ratio skips (e.g. $g(k+2)/g(k)$ leaves two on each end).

:::
:::

## Connections

Prereqs: the first taste of telescoping (Gauss-pairing-style cancellation). This generalizes into
telescoping via partial fractions, creative telescoping, and Abel summation (the discrete
integration-by-parts). It mirrors the Fundamental Theorem of Calculus: a sum of differences equals
the difference of endpoints. Recognition trigger: a sum whose term factors, or is a difference of
consecutive-looking pieces, or a product of consecutive ratios.
