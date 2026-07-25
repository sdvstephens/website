Pick any integer $n$ and multiply it by its neighbor: $n(n+1)$. It's always even — try $7\cdot 8 = 56$,
try $(-3)(-2) = 6$. Push further: any *three* consecutive integers multiply to a multiple of $6$,
any *four* to a multiple of $24$. Where do $2, 6, 24$ come from, and does the pattern go on forever?

## Discovery

1. Among any two consecutive integers $n, n+1$, exactly one is even (parity alternates). What does
   that tell you about the factor of $2$ in $n(n+1)$?
2. Now look at $2, 6, 24$. Compute $2!$, $3!$, $4!$. What sequence are the divisors matching?
3. Here's a bridge. The binomial coefficient $\binom{m}{k} = \dfrac{m(m-1)\cdots(m-k+1)}{k!}$ counts
   the number of $k$-element subsets of an $m$-element set. Since it counts something, it is a
   *nonnegative integer*. What does the numerator $m(m-1)\cdots(m-k+1)$ have to be, relative to $k!$,
   for that fraction to come out to a whole number?
4. The numerator $m(m-1)\cdots(m-k+1)$ is a product of $k$ consecutive integers (running downward
   from $m$). Turn the observation from step 3 into a divisibility claim about *any* run of $k$
   consecutive integers. What about runs that include negative integers or a zero — do they cause
   trouble?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The product of any $k$ consecutive integers is divisible by $k!$. That is, for every integer $n$
and every integer $k \ge 1$,
$$k! \ \big|\ n(n+1)(n+2)\cdots(n+k-1).$$
In particular $2 \mid n(n+1)$, $\ 6 \mid n(n+1)(n+2)$, and $\ 24 \mid n(n+1)(n+2)(n+3)$.

### Proof

**Positive case via binomial coefficients.** Suppose first that all $k$ consecutive integers are
positive; write the top one as $m = n+k-1$, so the product is $m(m-1)\cdots(m-k+1)$. Then
$$\binom{m}{k} = \frac{m(m-1)\cdots(m-k+1)}{k!}$$
is the number of $k$-element subsets of an $m$-element set, hence a nonnegative integer. Therefore
$k!$ divides the numerator $m(m-1)\cdots(m-k+1)$, which is exactly our product of $k$ consecutive
integers.

**Handling zero and negatives.** If the run of $k$ consecutive integers contains $0$, the product
is $0$, which is divisible by $k!$ trivially. If the run is entirely negative, factor out a sign
from each term: a product of $k$ consecutive negative integers equals $(-1)^k$ times a product of
$k$ consecutive positive integers, and the positive case already gives divisibility by $k!$; the
sign $(-1)^k$ does not affect divisibility. A run straddling $0$ contains $0$ and is covered by the
zero case. This exhausts all placements of the run on the integer line. $\blacksquare$

### Worked Instance

Take $k = 4$ and the run $5, 6, 7, 8$. The product is $5\cdot 6\cdot 7\cdot 8 = 1680$, and indeed
$$\binom{8}{4} = \frac{8\cdot 7\cdot 6\cdot 5}{4!} = \frac{1680}{24} = 70,$$
a whole number — so $24 \mid 1680$. The Hook's constants are now explained: two consecutive integers
are divisible by $2! = 2$, three by $3! = 6$, four by $4! = 24$, and the pattern continues with
$k!$ for every $k$ because $\binom{m}{k}$ is always an integer.

### Pitfalls

- The divisor is $k!$, **not** $k$. Three consecutive integers give a multiple of $6$, not merely
  of $3$.
- $k!$ is the *guaranteed* divisor, not always the largest one: $2\cdot 3\cdot 4 = 24$ is divisible
  by $24$, far more than the guaranteed $6$. The theorem is a floor, not an exact value.
- The consecutive integers must be genuinely consecutive. $2\cdot 4\cdot 6$ (an arithmetic run with
  common difference $2$) is a different problem and $6$ need not divide it in the same way.
- Don't forget negatives and zero: they're handled by a sign factor and the trivial $0$ case, not
  by the binomial argument directly.

:::
:::

## Connections

Prereqs: unique factorization (to make sense of "divisible" cleanly) and parity (the $k=2$ base
case, seen directly). The proof secretly previews binomial coefficients and Pascal's triangle, which
it unlocks. It also sets up Legendre's formula, the sharp tool for the exact power of a prime in a
factorial or binomial coefficient. Recognition trigger: a product of several consecutive integers,
or a factorial ratio you must show is an integer.

## History

Facts about consecutive integers — that among any $k$ of them exactly one is divisible by $k$, that their product is divisible by $k!$, and so on — belong to the elementary number theory that grew from Euclid and matured with Fermat, Euler, and Gauss. The observation that the product of consecutive integers is always divisible by the corresponding factorial is essentially the statement that binomial coefficients are integers, a fact known combinatorially since at least the medieval study of the arithmetic triangle by mathematicians in India, Persia, and China, and in Europe through Pascal (1654). Such results have no single author; they are part of the shared inheritance of arithmetic. They are prized because they yield slick proofs of divisibility and parity claims. ANABASIS collects these consecutive-integer facts as reusable tools.
