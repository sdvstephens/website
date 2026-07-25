Take any number not divisible by $7$, say $3$, and raise it to the $6$th power: $3^6 = 729 = 7\cdot 104 + 1$. Try $5^6 = 15625 = 7\cdot 2232 + 1$. Every base coprime to $7$ lands on remainder $1$ after the $6$th power. Why $6$, and why always $1$?

## Discovery

Fix a prime $p = 7$ and a base $a = 3$.
1. Write out the six nonzero residues mod $7$: $1,2,3,4,5,6$. Now multiply each by $a=3$ and reduce mod $7$: compute $3\cdot 1, 3\cdot 2, \dots, 3\cdot 6 \pmod 7$. List the six results.
2. Compare the multiset you just produced with the original list $\{1,2,3,4,5,6\}$. What do you notice about the collection of values (not their order)?
3. Multiply all six original residues together to get a number $P \pmod 7$. Now multiply all six *scaled* residues together. Factor out one copy of $a$ from each of the six factors — how many copies of $a$ come out, and what is left inside?
4. You now have $P \equiv a^{?}\cdot P \pmod 7$. Since $P$ is a product of nonzero residues mod a prime, is $P$ invertible mod $7$? Cancel it. What congruence for a power of $a$ remains?
5. Restate your finding for a general prime $p$ and any $a$ with $p \nmid a$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $p$ be prime. Then for every integer $a$,
$$a^p \equiv a \pmod p.$$
Equivalently, if $p \nmid a$ then $a^{p-1} \equiv 1 \pmod p$. This is **Fermat's Little Theorem** (not to be confused with Fermat's *Last* Theorem, an unrelated statement about $x^n+y^n=z^n$).

### Proof

Assume first $p \nmid a$. Consider the $p-1$ nonzero residues $1, 2, \dots, p-1$ modulo $p$, and multiply each by $a$:
$$a\cdot 1,\ a\cdot 2,\ \dots,\ a\cdot(p-1) \pmod p.$$
None of these is $\equiv 0$, since $p$ is prime and divides neither $a$ nor any factor $1,\dots,p-1$. Moreover they are pairwise distinct: if $a i \equiv a j \pmod p$, then multiplying by the inverse $a^{-1}$ (which exists because $\gcd(a,p)=1$) gives $i \equiv j \pmod p$. So the $p-1$ products are $p-1$ distinct nonzero residues — they are a permutation of $1,2,\dots,p-1$.

Taking the product of all of them two ways,
$$\prod_{k=1}^{p-1}(a k) \equiv \prod_{k=1}^{p-1} k \pmod p,$$
and factoring $a$ out of each of the $p-1$ factors on the left,
$$a^{\,p-1}\prod_{k=1}^{p-1} k \equiv \prod_{k=1}^{p-1} k \pmod p.$$
The product $\prod_{k=1}^{p-1} k = (p-1)!$ is a product of nonzero residues mod the prime $p$, hence invertible; cancelling it gives $a^{p-1} \equiv 1 \pmod p$. Multiplying by $a$ yields $a^p \equiv a \pmod p$.

If instead $p \mid a$, then $a \equiv 0$ and $a^p \equiv 0 \equiv a \pmod p$ directly. So $a^p \equiv a \pmod p$ holds for all $a$. $\blacksquare$

### Worked Instance

Return to the Hook with $p = 7$, so $p - 1 = 6$. For any $a$ coprime to $7$, the theorem gives $a^6 \equiv 1 \pmod 7$ — explaining why $3^6, 5^6, \dots$ all leave remainder $1$. As a computation, find $2^{100} \bmod 7$. Since $2^6 \equiv 1$, write $100 = 6\cdot 16 + 4$, so
$$2^{100} = (2^6)^{16}\cdot 2^4 \equiv 1^{16}\cdot 16 \equiv 16 \equiv 2 \pmod 7.$$

### Pitfalls

- The exponent that returns $1$ is $p-1$, not $p$. The "$a^p \equiv a$" form hides this; keep both forms straight.
- The clean $a^{p-1}\equiv 1$ form requires $p \nmid a$. If $p \mid a$, only $a^p \equiv a$ (both sides $0$) survives.
- $p$ must be **prime**. For composite $n$, $a^{n-1}\equiv 1 \pmod n$ can fail even when $\gcd(a,n)=1$ (e.g. $2^{14} \not\equiv 1 \pmod{15}$). The right generalization to composite moduli is Euler's theorem.
- The theorem gives a congruence, not that $a^{p-1}=1$; and $p-1$ need not be the *smallest* exponent returning $1$ (that is the order).

:::
:::

## Connections

Prereqs: modular arithmetic and modular inverses — the proof is a permutation-of-units argument, and cancellation is exactly invertibility. Fermat's Little Theorem is the engine behind fast exponentiation mod $p$, primality tests (Fermat/Miller–Rabin), and it unlocks Euler's theorem (the composite-modulus generalization), the order of an element (the smallest working exponent), and Wilson's theorem. Recognition trigger: any "compute $a^{\text{huge}} \bmod p$" with $p$ prime, or a claim that a large power is $\equiv 1$.
