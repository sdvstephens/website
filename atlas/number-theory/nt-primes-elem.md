$7$ has exactly two positive divisors, $1$ and $7$. $6$ has four: $1, 2, 3, 6$. And $1$ has just
one. That three-way split — the two-divisor **primes**, the many-divisor **composites**, and the
lonely $1$ — is the first real sorting of the integers. Why is $1$ deliberately barred from the
primes?

## Discovery

1. For each of $2, 3, 4, 5, 6, 7, 8, 9$, list every positive divisor. Group the numbers by how many
   divisors they have. Which counts actually occur, and which numbers land in the "exactly two"
   group?
2. To decide whether $91$ is in that "exactly two" group you could test every divisor up to $91$ —
   but that is wasteful. If $91 = d \cdot e$ with $d \le e$, how large is the *smaller* factor $d$
   allowed to be? Push the inequality $d \le e$ against $d \cdot e = 91$ and see what ceiling drops
   on $d$.
3. Suppose we *did* crown $1$ a prime. Look at $12 = 2 \cdot 2 \cdot 3$ and start inserting factors
   of $1$: $12 = 1 \cdot 2 \cdot 2 \cdot 3 = 1 \cdot 1 \cdot 2 \cdot 2 \cdot 3 = \cdots$. How many
   "prime factorizations" would $12$ suddenly have?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **prime** is an integer $p \gt 1$ whose only positive divisors are $1$ and $p$ (exactly two). A
**composite** is an integer $n \gt 1$ with a positive divisor other than $1$ and $n$ (so at least
three divisors). The number $1$ is **neither** — it has a single divisor. **Trial division:** an
integer $n \gt 1$ is prime exactly when no integer $d$ with $2 \le d \le \sqrt{n}$ divides it; if a
factor is going to exist, one of them is already at or below $\sqrt{n}$.

### Proof

*The $\sqrt{n}$ ceiling.* Suppose $n \gt 1$ is composite, so $n = d \cdot e$ with $1 \lt d \le e
\lt n$ (take $d$ the smaller of the two factors). Then
$$d^2 = d \cdot d \le d \cdot e = n, \qquad \text{so}\qquad d \le \sqrt{n}.$$
Thus every composite has a divisor $d$ with $2 \le d \le \sqrt{n}$. Contrapositive: if no integer in
$2 \le d \le \sqrt{n}$ divides $n$, then $n$ has no nontrivial factorization at all, i.e. $n$ is
prime. This halts trial division at $\sqrt{n}$ instead of $n$.

*Why $1$ is excluded.* If $1$ were counted as prime, then from any factorization we could splice in
arbitrarily many factors of $1$ — $12 = 2^2 \cdot 3 = 1 \cdot 2^2 \cdot 3 = 1^2 \cdot 2^2 \cdot 3 =
\cdots$ — giving infinitely many "prime factorizations" of the same number. Barring $1$ is exactly
what lets factorization be *unique* (the theorem of `nt-prime-factorization-elem`). $\blacksquare$

### Worked Instance

Is $91$ prime? Here $\sqrt{91} \approx 9.5$, so test $d = 2, 3, 4, 5, 6, 7, 8, 9$. All fail until
$d = 7$: $91 = 7 \cdot 13$, so $91$ is **composite**. Is $97$ prime? $\sqrt{97} \lt 10$, so it is
enough to test the primes $2, 3, 5, 7$ up to $10$: $97$ is odd, has digit sum $16$ (not a multiple
of $3$), does not end in $0$ or $5$, and $97 = 7 \cdot 13 + 6$ so $7 \nmid 97$. No divisor at or
below $\sqrt{97}$, so $97$ is **prime** — four checks instead of ninety-five.

### Pitfalls

- **$1$ is not prime, and not composite.** It is a category of its own; calling it prime breaks
  unique factorization.
- **$2$ is prime** — the only even prime. "Prime means odd" is false at its very first case.
- **Test up to $\sqrt{n}$ *inclusive*.** Perfect squares hide their factor exactly at $\sqrt{n}$
  (e.g. $49 = 7 \cdot 7$); stopping just below it misses them.
- **No small factor means prime.** If nothing in $2 \le d \le \sqrt{n}$ divides $n$, you are done —
  there is no need to keep testing larger candidates, because their partner factor would already
  have shown up below $\sqrt{n}$.

:::
:::

## Connections

Primes are defined by counting divisors, so they sit directly on divisibility (`nt-divisibility-
elem`). They are the atoms the next node builds with: every integer above $1$ is a product of primes
in one way (`nt-prime-factorization-elem`), and once that factorization is in hand, counting
divisors (`nt-divisors-count-elem`) becomes pure bookkeeping. Recognition trigger: any "is this
number prime?", "how many divisors?", or "break it into building blocks" starts here, and trial
division to $\sqrt{n}$ is the first tool to reach for.

## History

Primes were singled out by the Greeks: Euclid, around $300$ BC, defined them in Book VII of the *Elements* and proved in Book IX that there are infinitely many, one of the most celebrated arguments in all of mathematics. A century or so later Eratosthenes of Cyrene devised his "sieve," the systematic crossing-out that still bears his name and remains the intuition behind trial division. The insistence that $1$ not count as prime is a modern refinement, settled only in the nineteenth and early twentieth centuries once Gauss's *Disquisitiones Arithmeticae* ($1801$) had made unique factorization the central fact that the convention is designed to protect. Primes mattered because Euclid recognized them as the indivisible building blocks of every integer, and that role has only grown — from Euler and Gauss's analytic study of their distribution to their modern use in cryptography. The simple question "is this number prime?" has thus driven number theory for over two thousand years.
