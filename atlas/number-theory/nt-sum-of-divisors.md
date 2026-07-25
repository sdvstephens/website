Add up the divisors of $12$: $1 + 2 + 3 + 4 + 6 + 12 = 28$. Now notice $12 = 2^2 \cdot 3$, and watch
this: $(1 + 2 + 4)(1 + 3) = 7 \cdot 4 = 28$. The sum of divisors factors into a product of little
sums, one per prime — just as the *count* of divisors did. Where does that product come from?

## Discovery

1. List the divisors of $12$ and add them. Separately, expand the product $(1 + 2 + 4)(1 + 3)$ by
   the distributive law — write out all four products *before* you simplify. Do those four products
   match the list of divisors?
2. Explain why the expansion of $(1 + 2 + 2^2)(1 + 3)$ generates each divisor of $12 = 2^2\cdot 3$
   exactly once. Match a general divisor $2^a 3^b$ to one term of the expansion.
3. For a single prime power $p^e$, the relevant factor is $1 + p + p^2 + \cdots + p^e$. Using the
   exponent laws, rewrite that sum in closed form (a geometric sum). Then assemble the sum of
   divisors of a general $n = p_1^{e_1}\cdots p_k^{e_k}$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

If $n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$ is the prime factorization into distinct primes, the
**sum of the positive divisors** of $n$ is
$$\sigma(n) = \prod_{i=1}^{k}\big(1 + p_i + p_i^2 + \cdots + p_i^{e_i}\big)
= \prod_{i=1}^{k} \frac{p_i^{\,e_i + 1} - 1}{p_i - 1}.$$
Each prime contributes the geometric sum of its allowed powers; multiplying these across the primes
gives $\sigma(n)$.

### Proof

*The divisors are the mixed products.* By unique factorization (`nt-prime-factorization-elem`), the
positive divisors of $n$ are exactly the numbers $p_1^{f_1}\cdots p_k^{f_k}$ with $0 \le f_i \le
e_i$, each arising once. Expand the product
$$\prod_{i=1}^{k}\big(1 + p_i + \cdots + p_i^{e_i}\big)$$
by the distributive law: a term of the expansion is formed by choosing one summand $p_i^{f_i}$ from
each factor and multiplying, giving $p_1^{f_1}\cdots p_k^{f_k}$ with each $0 \le f_i \le e_i$. The
choices range independently over all such tuples, so the expansion is the sum of *all* divisors, each
exactly once. Hence the product equals $\sigma(n)$.

*Closed form per prime.* For a single prime, telescoping gives
$$(p - 1)\big(1 + p + \cdots + p^e\big) = (p + p^2 + \cdots + p^{e+1}) - (1 + p + \cdots + p^e)
= p^{e+1} - 1$$
(using $p\cdot p^f = p^{f+1}$, `ari-exponent-laws`). Since $p \ge 2$, $p - 1 \ne 0$, so
$1 + p + \cdots + p^e = \dfrac{p^{e+1} - 1}{p - 1}$. Substituting each factor gives the closed-form
product. $\blacksquare$

### Worked Instance

Resolve the Hook: $12 = 2^2\cdot 3$, so
$$\sigma(12) = (1 + 2 + 4)(1 + 3) = 7 \cdot 4 = 28,$$
matching $1 + 2 + 3 + 4 + 6 + 12$. No listing needed for bigger numbers: $200 = 2^3 \cdot 5^2$ gives
$$\sigma(200) = (1 + 2 + 4 + 8)(1 + 5 + 25) = 15 \cdot 31 = 465,$$
and the closed form agrees, $\dfrac{2^4 - 1}{1}\cdot \dfrac{5^3 - 1}{4} = 15 \cdot \dfrac{124}{4} =
15\cdot 31 = 465$.

### Pitfalls

- **Multiply the prime-power sums; do not add them.** $\sigma(n)$ is a *product* of the geometric
  sums, one per prime — adding them is a common wrong turn.
- **Include $1$ and $n$.** Both are divisors; the term $1$ (all $f_i = 0$) and the term $n$ (all
  $f_i = e_i$) already sit inside the expansion.
- **Factor into primes first.** The formula reads off the *prime* factorization; applying it to a
  non-prime form like $12 = 2\cdot 6$ miscounts.
- **The geometric closed form needs $p \ne 1$.** True for every prime ($p \ge 2$), so $p - 1 \ge 1$
  and the division is legitimate.

:::
:::

## Connections

The sum-of-divisors function is unique factorization (`nt-prime-factorization-elem`) plus a geometric
series, the additive twin of the divisor *count* $\prod(e_i + 1)$: same "one choice per prime"
skeleton, but the choices are summed via the exponent laws (`ari-exponent-laws`) instead of merely
counted. This is why $\sigma$ is multiplicative on coprime parts, and it is the gateway to perfect
and abundant numbers ($\sigma(n)$ versus $2n$). Recognition trigger: "sum of the divisors,"
"$\sigma(n)$," or "for how much do the factors of $n$ add up" — factor, then multiply the geometric
sums.

## History

Summing a number's divisors is bound up with one of the oldest obsessions in mathematics: perfect numbers, those equal to the sum of their proper divisors, studied by the Pythagoreans and by Euclid, who in Book IX of the *Elements* (about $300$ BC) gave a rule generating them. Nicomachus catalogued the related classes of abundant and deficient numbers around $100$ AD. The divisor-sum function, now written $\sigma(n)$, was studied intensively by Leonhard Euler in the eighteenth century, who proved its multiplicative property, derived the prime-power formula, and established the form of all even perfect numbers, completing Euclid's line of thought. Descartes and Fermat had earlier traded results on the topic, and amicable pairs added to the fascination. It mattered as a showcase of how prime factorization yields tidy formulas, and it remains tied to famous open questions about odd perfect numbers.
