$2^{11} - 1 = 2047$ is *not* prime — it factors as $23 \cdot 89$. But how could anyone see
that without trial division? The exponent $11$ hides no useful splitting, yet $2^{15}-1$ almost
begs to be factored. The difference is a single algebraic identity.

## Discovery

1. Expand the product $(a - b)(a^2 + ab + b^2)$ fully and collect terms. What survives?
2. Now expand $(a - b)(a^3 + a^2 b + a b^2 + b^3)$. Then try
   $(a-b)(a^4 + a^3 b + a^2 b^2 + a b^3 + b^4)$. What pattern do the results follow?
3. Guess the general product $(a-b)\big(a^{n-1} + a^{n-2}b + \cdots + b^{n-1}\big)$ and verify by
   asking which terms cancel telescopically.
4. Substitute $b \mapsto -b$ into your general identity. When $n$ is **odd**, what does $a^n -
   (-b)^n$ become, and what does the long second factor become? When $n$ is **even**, what goes
   wrong with this substitution as a factorization of $a^n + b^n$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For every integer $n \ge 1$,
$$a^n - b^n = (a - b)\big(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \cdots + a b^{n-2} + b^{n-1}\big).$$
When $n$ is **odd**, replacing $b$ by $-b$ gives
$$a^n + b^n = (a + b)\big(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \cdots - a b^{n-2} + b^{n-1}\big).$$
There is **no** analogous factorization of $a^n + b^n$ over the reals into a product with an
$(a+b)$ factor when $n$ is even (e.g. $a^2 + b^2$ is irreducible over $\RR$).

### Proof

Let $S = \sum_{k=0}^{n-1} a^{n-1-k} b^{k}$. Then
$$(a-b)S = a\sum_{k=0}^{n-1} a^{n-1-k}b^k - b\sum_{k=0}^{n-1} a^{n-1-k}b^k
= \sum_{k=0}^{n-1} a^{n-k}b^k - \sum_{k=0}^{n-1} a^{n-1-k}b^{k+1}.$$
Reindex the second sum with $j = k+1$, so it becomes $\sum_{j=1}^{n} a^{n-j}b^{j}$. Subtracting,
every middle term $a^{n-j}b^{j}$ with $1 \le j \le n-1$ appears once with $+$ and once with $-$
and cancels; only $j=0$ from the first sum ($a^n$) and $j=n$ from the second ($b^n$) survive:
$$(a-b)S = a^n - b^n.$$
For odd $n$, put $b \mapsto -b$. Since $n$ is odd, $(-b)^n = -b^n$, so the left side is $a^n +
b^n$; the first factor $a-(-b) = a+b$; and in $S$ the term $a^{n-1-k}(-b)^k = (-1)^k a^{n-1-k}b^k$
alternates sign. The even-$n$ case fails because then $(-b)^n = +b^n$ makes the left side $a^n -
b^n$ again, giving nothing new. $\blacksquare$

### Worked Instance

$2^{11} - 1$: here $a=2, b=1, n=11$. The factor $a - b = 1$ is useless, but $11$ is prime, so the
sole nontrivial split comes from a different route — write $2^{11}-1$ and test small primes; it is
$23 \cdot 89$. Contrast $2^{15}-1$: since $15 = 3 \cdot 5$, we can group the exponent. Using
$a^{15}-1 = (a^5)^3 - 1 = (a^5 - 1)\big((a^5)^2 + a^5 + 1\big)$ with $a=2$ gives
$(32-1)(1024+32+1) = 31 \cdot 1057 = 31 \cdot 7 \cdot 151$. The identity turns a $5$-digit number
into primes with no trial division. Whenever $d \mid n$, $a^d - b^d \mid a^n - b^n$, which is
exactly why $2^n - 1$ is composite whenever $n$ is.

### Pitfalls

- The long factor has **$n$ terms**, running from $a^{n-1}$ down to $b^{n-1}$ — off-by-one on the
  number of terms is the classic slip.
- The alternating-sign form is for $a^n + b^n$ **only when $n$ is odd**. Do not write $a^4 + b^4 =
  (a+b)(\ldots)$; it is false over $\RR$.
- $a^n + b^n$ for even $n$ can sometimes factor by *other* tricks (e.g. Sophie Germain for $a^4 +
  4b^4$), but never via a real linear factor $a+b$.

:::
:::

## Connections

Prereqs: difference of squares (the $n=2$ case). These identities are the algebraic engine behind
factoring $2^n - 1$ (Mersenne numbers), $a^n + b^n$ divisibility, and later the cyclotomic
viewpoint. They set up Simon's Favorite Factoring Trick (rearranging into a product) and Vieta's
formulas (products of roots). Recognition trigger: any expression $a^n \pm b^n$, or a "prove
$X \mid Y$" where both are powers minus one.
