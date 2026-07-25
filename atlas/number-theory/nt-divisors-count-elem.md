How many positive divisors does $12$ have? Listing them — $1, 2, 3, 4, 6, 12$ — gives six. But $12 =
2^2 \cdot 3$, and $6 = (2 + 1)(1 + 1)$. That looks like the exponents, each nudged up by one and
multiplied. Where does that product come from, and does it save you from ever listing divisors again?

## Discovery

1. Write $12 = 2^2 \cdot 3$. A positive divisor of $12$ can be built only from the primes $2$ and
   $3$. How many $2$s may it carry — could it use zero, one, two, or more? How many $3$s? List the
   allowed counts for each prime.
2. Read each divisor as a choice: (how many $2$s, how many $3$s). Count the choices for the $2$s,
   count the choices for the $3$s, and combine them. How many combinations arise, and do they match
   your six divisors of $12$?
3. Now $n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$. For a single prime $p_i$, how many exponents may a
   divisor legally use? How do you fold the per-prime counts into one total across all $k$ primes?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

If $n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$ is the prime factorization into distinct primes, the
number of positive divisors of $n$ is
$$d(n) = (e_1 + 1)(e_2 + 1)\cdots(e_k + 1) = \prod_{i=1}^{k} (e_i + 1).$$
Each prime $p_i$ contributes a factor $e_i + 1$ — the count of exponents $0, 1, \dots, e_i$ a divisor
may assign to it.

### Proof

*Which numbers are the divisors.* Let $n = p_1^{e_1} \cdots p_k^{e_k}$. Claim: the positive divisors
of $n$ are exactly the numbers
$$m = p_1^{f_1} p_2^{f_2} \cdots p_k^{f_k}, \qquad 0 \le f_i \le e_i \ \text{for each } i.$$
If each $0 \le f_i \le e_i$, then $n/m = p_1^{e_1 - f_1} \cdots p_k^{e_k - f_k}$ has non-negative
integer exponents (by the exponent law $p^{e}/p^{f} = p^{e-f}$), so $n/m$ is an integer and $m \mid
n$. Conversely, if $m \mid n$, then by unique factorization (`nt-prime-factorization-elem`) $m$'s
primes are among $p_1, \dots, p_k$, say $m = p_1^{f_1} \cdots p_k^{f_k}$; and comparing the
factorization of $n = m \cdot (n/m)$ prime-by-prime forces $f_i \le e_i$ (the exponent of $p_i$ in
$m$ cannot exceed its exponent in $n$).

*Counting the choices.* By uniqueness, distinct exponent tuples $(f_1, \dots, f_k)$ give distinct
divisors, and every divisor is exactly one such tuple. Each $f_i$ ranges over
$\{0, 1, \dots, e_i\}$, which has $e_i + 1$ values, and the choices are independent across the $k$
primes. By the multiplication principle the number of tuples — hence divisors — is
$(e_1 + 1)(e_2 + 1)\cdots(e_k + 1)$. $\blacksquare$

### Worked Instance

The Hook: $12 = 2^2 \cdot 3^1$, so $d(12) = (2 + 1)(1 + 1) = 3 \cdot 2 = 6$, matching the list
$1, 2, 3, 4, 6, 12$. No listing needed for larger numbers: $72 = 2^3 \cdot 3^2$ gives
$$d(72) = (3 + 1)(2 + 1) = 4 \cdot 3 = 12,$$
and $1000 = 2^3 \cdot 5^3$ gives $d(1000) = (3 + 1)(3 + 1) = 16$ — instant, straight off the
exponents.

### Pitfalls

- **Add one to each exponent, then multiply.** It is $\prod (e_i + 1)$, not $\prod e_i$; the "$+1$"
  is the divisor's option to use *zero* copies of that prime.
- **Factor into primes first.** The formula reads exponents off the *prime* factorization; applying
  it to a non-prime-power form (like treating $12$ as $2 \cdot 6$) double-counts or miscounts.
- **Use distinct primes only.** $2^2 \cdot 3$ has two prime bases; do not split a repeated prime into
  separate factors of the product.
- **The count includes $1$ and $n$.** Choosing all $f_i = 0$ gives the divisor $1$; all $f_i = e_i$
  gives $n$. Both are genuine divisors and are already inside $\prod(e_i + 1)$.

:::
:::

## Connections

Counting divisors reads straight off unique factorization (`nt-prime-factorization-elem`) — the
prime signature is the raw material — and leans on the exponent laws (`ari-exponent-laws`) to check
that $p^{f} \mid p^{e}$ exactly when $f \le e$. The same "choose an exponent per prime" idea powers
the sum-of-divisors function and the fact that these functions are multiplicative, and it is the
combinatorial cousin of Legendre's exponent-counting (`nt-legendre`). Recognition trigger: any "how
many divisors / factors does $n$ have?" or "for how many $d$ does $d \mid n$?" is answered by
factoring and forming $\prod(e_i + 1)$.

## History

Counting a number's divisors is an old pastime that the Pythagoreans and Nicomachus (around $100$ AD) pursued through their classification of perfect, abundant, and deficient numbers. Turning that counting into a formula, however, had to wait for unique factorization to be firmly in place, which Gauss delivered in the *Disquisitiones Arithmeticae* ($1801$). Once every number is written as a product of prime powers, the count of divisors becomes pure combinatorics — a matter of independent choices of exponents — and the divisor function, often written $\tau(n)$ or $d(n)$, took its place among the multiplicative functions studied intensively by Euler, Dirichlet, and later analytic number theorists. Its average behavior became a famous problem, the Dirichlet divisor problem, still not fully resolved. For the beginner it mattered as the first payoff of prime factorization: a question that seems to require listing every divisor collapses to a quick calculation on the exponents.
