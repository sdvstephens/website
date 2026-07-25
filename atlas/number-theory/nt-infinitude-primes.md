Multiply the first few primes and add one: $2\cdot 3\cdot 5\cdot 7 + 1 = 211$, which is prime. And $2\cdot 3\cdot 5 + 1 = 31$, prime. This "product plus one" trick keeps handing back a prime nobody used. Could it ever run out of new primes?

## Discovery

Suppose, for contradiction, that there are only finitely many primes: $p_1, p_2, \dots, p_k$ is the complete list.
1. Form the number $N = p_1 p_2 \cdots p_k + 1$. Is $N \gt 1$? By the Fundamental Theorem of Arithmetic, must $N$ have at least one prime factor?
2. Pick any prime $q$ dividing $N$. By your assumption, $q$ is on the list, so $q = p_i$ for some $i$. Then $q$ divides the product $p_1\cdots p_k$. Compute $N - p_1\cdots p_k$. What does $q$ divide, and what is that value?
3. A prime dividing $1$ — is that possible? What has gone wrong, and what must you conclude about the assumption in step 0?
4. Now a variant. Look at primes of the form $4m+3$ (i.e. $\equiv 3\pmod 4$): $3, 7, 11, 19, 23,\dots$. Suppose only finitely many exist: $q_1,\dots,q_k$ (excluding the prime $2$ and, say, working with the odd ones). Consider $N = 4\,q_1 q_2\cdots q_k - 1$. What is $N \bmod 4$?
5. Every odd prime is $\equiv 1$ or $\equiv 3 \pmod 4$. If *every* prime factor of your $N$ were $\equiv 1\pmod 4$, what would $N$ be mod $4$? Does that match step 4? Conclude that $N$ has a prime factor $\equiv 3\pmod 4$, and show it cannot be any $q_i$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Euclid's theorem.** There are infinitely many primes. Moreover (a refinement in the same spirit): there are infinitely many primes congruent to $3$ modulo $4$. (The analogous statement for primes $\equiv 1\pmod 4$ is also true but needs a different, quadratic-residue argument.)

### Proof

**Infinitely many primes.** Suppose not: let $p_1,\dots,p_k$ be *all* the primes. Set $N = p_1p_2\cdots p_k + 1$. Since $N \ge 2+1 = 3 \gt 1$, by the Fundamental Theorem of Arithmetic $N$ has a prime divisor $q$. By assumption $q = p_i$ for some $i$, so $q \mid p_1\cdots p_k$. But $q\mid N$ as well, hence $q \mid \bigl(N - p_1\cdots p_k\bigr) = 1$. No prime divides $1$ — contradiction. Therefore the list of primes cannot be finite. $\blacksquare$

**Infinitely many primes $\equiv 3\pmod 4$.** Suppose only finitely many primes are $\equiv 3\pmod4$; call them $q_1,\dots,q_k$. Set
$$N = 4\,q_1 q_2\cdots q_k - 1.$$
Then $N \equiv -1 \equiv 3 \pmod 4$, and $N \ge 3$, so $N$ has a prime factorization. $N$ is odd, so every prime factor is odd, hence $\equiv 1$ or $\equiv 3 \pmod 4$. If every prime factor were $\equiv 1\pmod 4$, their product would be $\equiv 1\pmod 4$ (since $1\cdot 1\equiv 1$), contradicting $N\equiv 3\pmod 4$. So $N$ has a prime factor $q\equiv 3\pmod 4$. This $q$ must be some $q_j$ from the list; but then $q_j \mid 4q_1\cdots q_k$ and $q_j\mid N$, so $q_j\mid\bigl(4q_1\cdots q_k - N\bigr) = 1$, impossible. Hence there are infinitely many primes $\equiv 3\pmod4$. $\blacksquare$

### Worked Instance

The Hook's numbers illustrate the mechanism (though not the theorem's claim about *the* next prime). Take the "list" $\{2,3,5,7\}$ and form $N = 2\cdot3\cdot5\cdot7 + 1 = 211$. Any prime factor of $211$ is forced to lie *outside* $\{2,3,5,7\}$: indeed $211$ is itself prime, a witness that the four-element list was incomplete. For the mod-$4$ variant, take the list $\{3,7\}$: $N = 4\cdot 3\cdot 7 - 1 = 83$, and $83 \equiv 3\pmod 4$ is prime — a new prime $\equiv 3\pmod 4$ beyond $\{3,7\}$.

### Pitfalls

- $N = p_1\cdots p_k + 1$ need **not** itself be prime in general (famously $2\cdot3\cdot5\cdot7\cdot11\cdot13 + 1 = 30031 = 59\cdot 509$). The proof only needs $N$ to have *a* prime factor not on the list — do not claim $N$ is prime.
- The argument is a proof by contradiction about the whole (assumed finite) list, not a formula generating primes.
- In the mod-$4$ variant, use $4q_1\cdots q_k - 1$ (which is $\equiv 3$), not $+1$; and the key fact is that a product of numbers all $\equiv 1\pmod 4$ stays $\equiv 1\pmod 4$.
- The mirror claim for primes $\equiv 1\pmod 4$ does *not* yield to this trick (a product of primes $\equiv 3$ can be $\equiv 1$), and needs a quadratic-residue argument instead.

:::
:::

## Connections

Prereqs: the Fundamental Theorem of Arithmetic (every $N\gt1$ has a prime factor — the pivot of both proofs). This is the archetypal proof by contradiction in number theory and the seed of Dirichlet's theorem (infinitely many primes in any arithmetic progression $a+md$ with $\gcd(a,d)=1$). Recognition trigger: "show there are infinitely many primes with property $P$" — try building a number forced to have a new prime of that type. The $\equiv 1\pmod 4$ case previews quadratic residues.
