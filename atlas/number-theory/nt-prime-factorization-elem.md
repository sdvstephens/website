$60 = 2^2 \cdot 3 \cdot 5$. Break it a different way — $60 = 6 \cdot 10$ or $60 = 4 \cdot 15$ — and
after you finish splitting you always arrive back at two $2$s, one $3$, one $5$. Two claims hide in
that stubbornness: every number above $1$ breaks into primes *at all*, and it does so in only *one*
way.

## Discovery

1. Take $n = 60$. If it is not prime, write it as a product of two smaller factors, each greater
   than $1$. Keep splitting any factor that is still composite. Does the factor tree ever end, and
   what does the bottom row consist of?
2. Argue that the splitting *must* stop. Every factor you produce is a positive integer greater than
   $1$ and strictly smaller than the number you split. What property of the positive integers forbids
   an endless chain of ever-smaller factors?
3. You now believe every $n \gt 1$ is *some* product of primes. The sharper question: could one
   number have two genuinely different prime lists? Split $60$ two ways — via $6 \cdot 10$ and via
   $4 \cdot 15$ — carry each down to primes, and compare the final multisets.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Every integer $n \gt 1$ is a product of primes, and that factorization is unique up to the order
of the factors.** Collecting equal primes into powers, each $n \gt 1$ has exactly one standard form
$$n = p_1^{e_1} p_2^{e_2} \cdots p_m^{e_m}, \qquad p_1 \lt p_2 \lt \cdots \lt p_m,\ \ e_i \ge 1,$$
with the $p_i$ distinct primes. This is the elementary Fundamental Theorem of Arithmetic.

### Proof

*Existence, by strong induction on $n$.* Claim: every integer $n \ge 2$ is a product of primes.
Base: $n = 2$ is prime, a product of one prime. Inductive step: fix $n \gt 2$ and assume every
integer $k$ with $2 \le k \lt n$ is a product of primes. If $n$ is prime, it is a one-factor product
and we are done. Otherwise $n$ is composite, so $n = ab$ with $1 \lt a, b \lt n$. Both $a$ and $b$
fall in the range $[2, n-1]$, so by the induction hypothesis each is a product of primes; stringing
those two products together writes $n = ab$ as a product of primes. By strong induction the claim
holds for all $n \ge 2$. (The factor tree of the Discovery terminates for the same reason strong
induction is legal: there is no infinite strictly decreasing chain of integers $\ge 2$ — the
well-ordering face of `prim-induction`.)

*Uniqueness.* This rests on **Euclid's lemma**: if a prime $p$ divides a product $ab$, then $p \mid
a$ or $p \mid b$ (proved from the Euclidean algorithm in `found-fta`), which extends by induction to
any number of factors: if $p \mid a_1 a_2 \cdots a_k$ then $p$ divides some $a_i$. Suppose, for
contradiction, some integer above $1$ had two different prime factorizations, and let $N$ be the
smallest such. Write
$$N = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s.$$
Then $p_1 \mid N = q_1 \cdots q_s$, so by the extended lemma $p_1 \mid q_j$ for some $j$; since $q_j$
is prime and $p_1 \gt 1$, we get $p_1 = q_j$. Cancel this matched prime from both sides, leaving
$N/p_1 \lt N$ with two factorizations. Were those two different, $N/p_1$ would be a smaller
counterexample than $N$ — impossible. So they agree, and restoring $p_1 = q_j$ makes the two
factorizations of $N$ agree too, contradicting the choice of $N$. Hence factorization is unique up to
order. $\blacksquare$

### Worked Instance

Resolve the Hook. Splitting $60 = 6 \cdot 10 = (2 \cdot 3)(2 \cdot 5) = 2^2 \cdot 3 \cdot 5$; the
other tree $60 = 4 \cdot 15 = (2 \cdot 2)(3 \cdot 5) = 2^2 \cdot 3 \cdot 5$. Same primes, same
exponents. Uniqueness says this is forced: any prime dividing $60$ must appear in *every*
factorization, so after matching and cancelling the two $2$s, the $3$, and the $5$, nothing is left
to rearrange — no tree can smuggle in a stray prime.

### Pitfalls

- **Existence is the easy half; uniqueness is the content.** Uniqueness needs Euclid's lemma —
  without it, "factorization into irreducibles" can genuinely branch (as in $\ZZ[\sqrt{-5}]$, where
  $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$).
- **$1$ is deliberately not prime.** If it were, factorizations could be padded with $1$s and
  uniqueness would collapse. The theorem starts at $n \gt 1$.
- **"Unique up to order" is the right phrasing.** $12 = 2 \cdot 2 \cdot 3 = 3 \cdot 2 \cdot 2$ are
  the *same* factorization, not two; only the *multiset* of primes is claimed to be unique.
- **Strong, not ordinary, induction for existence.** Splitting $n = ab$ hands you two smaller
  factors that can be anywhere below $n$, so you need the hypothesis for *all* smaller numbers, not
  just $n - 1$.

:::
:::

## Connections

Existence rests on primes (`nt-primes-elem`) as building blocks and on induction (`prim-induction`)
to guarantee the splitting halts; uniqueness borrows Euclid's lemma from the Euclidean-algorithm
track (`found-fta`, which proves the full theorem over $\ZZ$). Once every number has one prime
signature, everything downstream reads off it: the divisor count $\prod(e_i + 1)$ in `nt-divisors-
count-elem`, the exponent of a prime in $n!$ (`nt-legendre`), and prime-by-prime comparison of gcd
and lcm. Recognition trigger: any argument that reasons "compare the two sides prime-by-prime" is
leaning on unique factorization.

## History

That every integer above $1$ factors into primes in essentially one way is so intuitive that it was used long before it was proved. Euclid came close in Book VII of the *Elements* (about $300$ BC), establishing the crucial lemma that if a prime divides a product it divides one of the factors — the real content behind uniqueness — but he never stated the full theorem. It was Carl Friedrich Gauss who, in his landmark *Disquisitiones Arithmeticae* of $1801$, first gave the Fundamental Theorem of Arithmetic a clean statement and rigorous proof, recognizing that uniqueness needed to be argued and not assumed. Gauss's precision revealed why $1$ must be barred from the primes and why the theorem can fail in more exotic number systems — a discovery that later drove Kummer and Dedekind to invent ideal numbers and modern algebra. It mattered because unique factorization is the bedrock on which divisor-counting, gcd and lcm formulas, and much of number theory ultimately rest.
