Add the first four cubes: $1 + 8 + 27 + 64 = 100$. That is $10^2$, and $10 = 1+2+3+4$.
Add the first five cubes and you get $225 = 15^2$, with $15 = 1+2+3+4+5$. A pile of cubes
keeps landing on a perfect square. Whose square?

## Discovery

1. First attack $\sum_{k=1}^{n} k^2$. Consider the telescoping quantity $(k+1)^3 - k^3$.
   Expand it — what polynomial in $k$ do you get?
2. Sum your expansion from $k=1$ to $n$. The left side telescopes to a single simple value;
   the right side splits into $\sum k^2$, $\sum k$, and $\sum 1$. Write that equation out.
3. You already know $\sum k$ and $\sum 1$. Solve the equation for $\sum k^2$.
4. Now the cubes. Tabulate $\sum_{k=1}^{n} k^3$ for $n = 1,2,3,4$ and compare each to
   $\bigl(\sum_{k=1}^{n} k\bigr)^2$. Form a conjecture.
5. To prove the conjecture, look at the *increment*: what is $\bigl(\sum_{k=1}^{n} k\bigr)^2 -
   \bigl(\sum_{k=1}^{n-1} k\bigr)^2$? Factor it as a difference of squares and simplify. Does
   the increment equal $n^3$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

$$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad
\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2 = \left(\sum_{k=1}^{n} k\right)^2.$$
The second identity — a sum of cubes is the square of a sum — is sometimes called
**Nicomachus's theorem**.

### Proof

**Squares (telescoping).** Sum the identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$ over
$k = 1,\dots,n$. The left side telescopes to $(n+1)^3 - 1$. Hence
$$(n+1)^3 - 1 = 3\sum_{k=1}^n k^2 + 3\sum_{k=1}^n k + \sum_{k=1}^n 1
= 3\sum_{k=1}^n k^2 + 3\cdot\frac{n(n+1)}{2} + n.$$
Solving, $3\sum k^2 = (n+1)^3 - 1 - \tfrac{3n(n+1)}{2} - n$. Expanding gives
$3\sum k^2 = n^3 + \tfrac32 n^2 + \tfrac12 n = \tfrac{n(2n^2+3n+1)}{2} = \tfrac{n(n+1)(2n+1)}{2}$,
so $\sum k^2 = \dfrac{n(n+1)(2n+1)}{6}$.

**Cubes (induction on the increment).** Let $T_n = \sum_{k=1}^n k = \tfrac{n(n+1)}{2}$. We show
$\sum_{k=1}^n k^3 = T_n^2$. It holds for $n=1$ ($1 = 1^2$). For the step, compute the increment
$$T_n^2 - T_{n-1}^2 = (T_n - T_{n-1})(T_n + T_{n-1}) = n\cdot\frac{n(n+1)+(n-1)n}{2}
= n\cdot\frac{n\,(2n)}{2} = n^3.$$
So $T_n^2 = T_{n-1}^2 + n^3$; assuming $T_{n-1}^2 = \sum_{k=1}^{n-1}k^3$ gives
$T_n^2 = \sum_{k=1}^{n}k^3$. By induction the identity holds for all $n$. $\blacksquare$

### Worked Instance

For $n=4$: $\sum k^2 = \tfrac{4\cdot5\cdot9}{6} = 30$, matching $1+4+9+16$. And
$\sum k^3 = T_4^2 = 10^2 = 100$, matching $1+8+27+64$ — the Hook. The pile of cubes lands on
$\bigl(\sum k\bigr)^2$ because each new cube $n^3$ is exactly the increment $T_n^2 - T_{n-1}^2$.

### Pitfalls

- $\bigl(\sum k\bigr)^2 \ne \sum k^2$ — the square of the sum (cubes formula) is not the sum of
  the squares. Keep the two identities distinct.
- The squares numerator is $n(n+1)(2n+1)$; the middle factor is $2n+1$, not $2n-1$ or $n+1$.
- The telescoping trick uses $(k+1)^3 - k^3$ to reach $\sum k^2$ — you go up one power to
  extract the sum you want.

:::
:::

## Connections

Prereqs: sum of the first $n$ odds ($=n^2$), the earliest closed-form power sum. The telescoping
method here — sum a difference to collapse it — is the seed of the whole telescoping thread
(`alg-telescoping`, `ser-telescoping-pf`, `ser-creative-telescoping`). Bumping the exponent one
step at a time is Faulhaber's ladder, and finite differences (`alg-finite-differences`) mechanize
it. Recognition trigger: a sum of a fixed power of $k$ — reach for a telescoping difference one
degree higher.
