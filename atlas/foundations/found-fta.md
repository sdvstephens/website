Factor $60$ into primes and you get $2^2\cdot 3\cdot 5$. Try again, harder — split it differently,
in a different order, using any tree you like. You always land back on two $2$s, one $3$, one $5$.
Why can't a number sneak out with two genuinely different prime factorizations?

## Discovery

1. Take any integer $n \gt 1$. If $n$ is prime, it is already "a product of primes" (one factor).
   If not, $n = ab$ with $1 \lt a,b \lt n$. Argue that repeating this split must terminate. What
   guarantees you cannot keep splitting forever?
2. So every $n \gt 1$ is *some* product of primes. The hard part is uniqueness. Recall Euclid's
   lemma (a consequence of the Euclidean algorithm): if a prime $p$ divides $ab$, then $p \mid a$
   or $p \mid b$. Extend it: if $p \mid a_1 a_2 \cdots a_k$, what can you say about the $a_i$?
3. Now suppose some number had two prime factorizations,
   $p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$. The prime $p_1$ divides the left side, hence the
   right. Using step 2, what must $p_1$ equal?
4. Cancel that matched pair from both sides. What kind of argument does "keep cancelling matched
   primes" set up, and what does it force about $r$ vs. $s$ and about the full lists?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Fundamental Theorem of Arithmetic.** Every integer $n \gt 1$ can be written as a product of
primes, and this factorization is unique up to the order of the factors. Equivalently, there is
exactly one way to write
$$n = p_1^{e_1} p_2^{e_2} \cdots p_m^{e_m}, \qquad p_1 \lt p_2 \lt \cdots \lt p_m,\ e_i \ge 1,$$
with the $p_i$ distinct primes and each $e_i \ge 1$.

### Proof

**Existence.** Induct on $n$. The base $n = 2$ is prime. For $n \gt 2$, either $n$ is prime (done),
or $n = ab$ with $1 \lt a,b \lt n$. By the induction hypothesis $a$ and $b$ are each products of
primes, so $n = ab$ is too. The process terminates because each factor is a positive integer
strictly less than $n$, and there is no infinite strictly-decreasing sequence of positive integers.

**Euclid's lemma, extended.** If a prime $p$ divides a product $a_1 a_2 \cdots a_k$, then $p$
divides some $a_i$. Proof by induction on $k$: for $k=1$ it is immediate; for $k \gt 1$, write the
product as $a_1\cdot(a_2\cdots a_k)$. By Euclid's lemma $p \mid a_1$ or $p \mid a_2\cdots a_k$; in
the second case the induction hypothesis finishes it.

**Uniqueness.** Suppose, for contradiction, that some integer greater than $1$ has two prime
factorizations. Among all such integers pick the smallest, $N$, and write
$$N = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s.$$
The prime $p_1$ divides $N = q_1 q_2 \cdots q_s$, so by the extended Euclid's lemma $p_1 \mid q_j$
for some $j$. But $q_j$ is prime, so its only divisors are $1$ and $q_j$; since $p_1 \gt 1$ we get
$p_1 = q_j$. Cancel this common prime from both sides:
$$\frac{N}{p_1} = p_2 \cdots p_r = q_1 \cdots \widehat{q_j} \cdots q_s,$$
where the hat means $q_j$ is omitted. Now $N/p_1 \lt N$ has two prime factorizations. If they were
genuinely different, $N/p_1$ would be a smaller counterexample than $N$, contradicting minimality;
so they must coincide. Reattaching the cancelled $p_1 = q_j$, the two factorizations of $N$
coincide as well — contradicting that $N$ had two different ones. Hence no such $N$ exists, and
factorization is unique up to order. $\blacksquare$

### Worked Instance

Return to $60$. Existence: $60 = 6\cdot 10 = (2\cdot 3)(2\cdot 5) = 2^2\cdot 3\cdot 5$. Try the
other tree: $60 = 4\cdot 15 = (2\cdot 2)(3\cdot 5) = 2^2\cdot 3\cdot 5$. The uniqueness proof says
this is forced: any prime dividing $60$ — say we start peeling with $2$ — must appear in *every*
factorization, so after matching and cancelling all the $2$s, $3$, and $5$, nothing is left over
and no rearrangement can produce a stray prime. That is why every tree collapses to $2^2\cdot 3\cdot 5$.

### Pitfalls

- Existence is the *easy* half; the theorem's real content is **uniqueness**, and uniqueness needs
  Euclid's lemma. Without it (e.g. in $\ZZ[\sqrt{-5}]$, where $6 = 2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$)
  factorization into "irreducibles" can genuinely fail to be unique.
- $1$ is deliberately *not* a prime. If it were, $6 = 2\cdot 3 = 1\cdot 2\cdot 3 = 1^2\cdot 2\cdot 3$
  would give infinitely many "factorizations," wrecking uniqueness.
- "Unique up to order" is essential: $12 = 2\cdot 2\cdot 3 = 3\cdot 2\cdot 2$ are the same
  factorization, not two.

:::
:::

## Connections

Prereqs: the Euclidean algorithm, which delivers Euclid's lemma — the engine of uniqueness. This
theorem is the bedrock under nearly all of number theory: it lets you define $v_p(n)$ (the exponent
of $p$ in $n$), compare $\gcd$/$\lcm$ prime-by-prime, and count divisors. It unlocks Legendre's
formula, the "$k$ consecutive integers" divisibility results, and Euclid's proof that primes are
infinite. Recognition trigger: any argument that reasons "compare the two sides prime-by-prime" is
leaning on unique factorization.

## History

The fundamental theorem of arithmetic — that every integer greater than 1 factors uniquely into primes — has its roots in Euclid's Elements (c. 300 BC), which proves the key lemma that if a prime divides a product it divides one of the factors (Euclid's lemma, Book VII) and establishes results close to unique factorization in Book IX. The Greeks, however, did not state the theorem in full generality. Its first complete and explicit statement and proof are due to Carl Friedrich Gauss in the Disquisitiones Arithmeticae (1801), who recognized that uniqueness needed careful proof and could fail in other number systems. This theorem justifies why primes are the "atoms" of the integers and underlies virtually all of elementary number theory. Its later failure in some rings of algebraic integers spurred Kummer and Dedekind to invent ideal theory. ANABASIS treats it as the structural cornerstone of arithmetic.
