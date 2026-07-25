$10! = 3628800$ ends in exactly two zeros. Two trailing zeros mean $100 = 10^2$ divides it — so
somewhere inside the product $1\cdot 2\cdots 10$ hide two factors of $5$ (and more than enough
$2$s). How many times does a prime $p$ divide $n!$, and can you count it without ever multiplying
out the factorial?

## Discovery

1. Among $1, 2, \dots, 10$, which numbers are divisible by $5$? Which by $25 = 5^2$? Total up the
   factors of $5$ that these contribute to $10!$, and predict how many zeros $10!$ ends in. Check
   against $3628800$.
2. Now count factors of $2$ in $8!$. List which of $1, \dots, 8$ contribute at least one factor of
   $2$, which contribute a *second* (multiples of $4$), which a *third* (multiples of $8$). Sum the
   contributions.
3. Generalize the bookkeeping. To count the factors of a prime $p$ in $n!$, how many of $1,\dots,n$
   are divisible by $p$? by $p^2$? by $p^3$? Explain what each multiple of $p^k$ contributes and how
   to fold the counts into one total.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a prime $p$ and integer $n \ge 1$, the exponent of $p$ in the prime factorization of $n!$ is
$$v_p(n!) = \sum_{k \ge 1} \#\{\, j : 1 \le j \le n,\ p^k \mid j \,\}
= \sum_{k \ge 1} \left\lfloor \frac{n}{p^k} \right\rfloor,$$
a finite sum (the terms vanish once $p^k \gt n$). In particular the number of **trailing zeros** of
$n!$ in base $10$ is $v_5(n!)$, since $5$ is the scarcer of the primes $2$ and $5$. This count is
**Legendre's formula**.

### Proof

Since $n! = 1\cdot 2\cdots n$ and exponents of a fixed prime **add** across a product (unique
factorization, `nt-prime-factorization-elem`),
$$v_p(n!) = \sum_{j=1}^{n} v_p(j),$$
where $v_p(j)$ is the exponent of the prime $p$ (`nt-primes-elem`) in $j$. Now the key identity:
$v_p(j)$ counts the powers of $p$ dividing $j$, i.e.
$$v_p(j) = \#\{\, k \ge 1 : p^k \mid j \,\},$$
because $p^k \mid j$ exactly for $k = 1, 2, \dots, v_p(j)$. Substitute and switch the order of the
two sums:
$$v_p(n!) = \sum_{j=1}^{n} \#\{k \ge 1 : p^k \mid j\}
= \sum_{k \ge 1} \#\{\, j \le n : p^k \mid j \,\}.$$
The inner count is the number of multiples of $p^k$ up to $n$, which is $\lfloor n/p^k\rfloor$. Once
$p^k \gt n$ the count is $0$, so the sum is finite. $\blacksquare$

### Worked Instance

Resolve the Hook. Factors of $5$ in $10!$: multiples of $5$ in $1,\dots,10$ are $5, 10$ (two of
them); multiples of $25$: none. Total $v_5(10!) = 2$, so $10!$ ends in exactly two zeros — matching
$3628800$. Factors of $2$ in $10!$: multiples of $2$ give $5$, of $4$ give $2$, of $8$ give $1$, of
$16$ give $0$, so $v_2(10!) = 5 + 2 + 1 = 8$. Thus $10! = 2^8 \cdot 5^2 \cdot (\text{odd, }5\text{-free})$,
and the trailing zeros number $\min(8, 2) = 2$ — the $5$s, being scarcer, set the count.

### Pitfalls

- **Count the higher powers too.** A number like $25$ contributes *two* $5$s; stopping at multiples
  of $p$ undercounts. The layered sum $\lfloor n/p\rfloor + \lfloor n/p^2\rfloor + \cdots$ captures
  the extras.
- **This is not double counting.** A $j$ divisible by exactly $p^a$ is counted once in each of the
  layers $k = 1, \dots, a$ — a total of $a$, which is precisely $v_p(j)$. That overlap is the point.
- **Trailing zeros follow the $5$s, not the $2$s.** In $n!$ twos are plentiful; the number of $10$s
  you can form is limited by the fewer fives.
- **The prime matters.** Exponents add cleanly across a product only for a *prime*; "how many times
  does $6$ divide $n!$" must be split into its primes $2$ and $3$ first.

:::
:::

## Connections

This node counts prime powers in $n!$ from the ground up — exponents adding across a product (unique
factorization, `nt-prime-factorization-elem`) and primes as the atoms being counted
(`nt-primes-elem`) — and the swap-the-sums identity *is* Legendre's formula, handed on at the
competition level (`nt-legendre`) once the floor function is in play. The same
count-each-power-separately idea underlies Kummer's carry theorem and $p$-adic valuations.
Recognition trigger: "how many zeros does $n!$ end in," "highest power of $p$ dividing $n!$," or "for
what $n$ does $p^k \mid n!$" — layer the multiples of $p, p^2, p^3, \dots$.

## History

The question of exactly which power of a prime divides a factorial — and hence how many zeros end a factorial in a given base — was answered cleanly by Adrien-Marie Legendre in his *Essai sur la théorie des nombres* ($1798$). Legendre's formula counts the multiples of $p$, then $p^2$, then $p^3$, and so on, up to $n$, capturing every factor the prime contributes. The reasoning had roots in earlier work on binomial coefficients and their integrality, a concern going back to the combinatorial studies of Pascal and others. Legendre's result was later recast in terms of the digit sum of $n$ in base $p$, a neat identity that connects to Kummer's theorem on binomial coefficients. It mattered because factorials sit inside binomial coefficients and permutation counts everywhere, so knowing their prime content underlies much of combinatorics and number theory.
