Fermat says $a^{p-1}\equiv 1$ for a prime modulus. But what about $a^{?}\equiv 1 \pmod{10}$? Try $3^4 = 81 \equiv 1$, $7^4 = 2401 \equiv 1$, $9^4 \equiv 1 \pmod{10}$. The magic exponent is $4$, not $9$. What counts $4$?

## Discovery

Work modulo $n = 10$.
1. List the residues $1,2,\dots,9$ and cross out any that share a common factor with $10$. How many survive? Call that count $\varphi(10)$.
2. Take one surviving residue $a = 3$ and multiply the surviving list by $a$, reducing mod $10$: compute $3r \bmod 10$ for each surviving $r$. Do you land back inside the surviving set, or can you fall out of it? (Check: could $3r$ ever share a factor with $10$?)
3. Argue that $r \mapsto ar$ is a bijection from the surviving set to itself (why is it injective?). Conclude that the multiset of scaled values equals the original set.
4. Multiply all surviving residues to get $P$, and multiply all scaled ones. Factor $a$ out of each factor — how many copies come out? Since $P$ is a product of residues coprime to $10$, is $P$ invertible mod $10$? Cancel it. What congruence for a power of $a$ appears?
5. State the exponent in terms of your count from step 1, for a general modulus $n$ and any $a$ coprime to $n$. Then check: for prime $n=p$, what does your count equal, and which theorem do you recover?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Define **Euler's totient** $\varphi(n)$ as the number of integers in $\{1,2,\dots,n\}$ that are coprime to $n$. Then **Euler's theorem**: if $\gcd(a,n)=1$,
$$a^{\varphi(n)} \equiv 1 \pmod n.$$
For $n=p$ prime, $\varphi(p)=p-1$, recovering Fermat's Little Theorem. For a prime power, $\varphi(p^k)=p^k-p^{k-1}$, and $\varphi$ is multiplicative: $\varphi(mn)=\varphi(m)\varphi(n)$ when $\gcd(m,n)=1$, giving $\varphi(n)=n\prod_{p\mid n}\bigl(1-\tfrac1p\bigr)$.

### Proof

Let $U = \{\,r : 1 \le r \le n,\ \gcd(r,n)=1\,\}$, so $|U| = \varphi(n)$. Fix $a$ with $\gcd(a,n)=1$, and consider the map $r \mapsto ar \bmod n$ on $U$.

*The map lands in $U$.* If $\gcd(r,n)=1$ and $\gcd(a,n)=1$, then $\gcd(ar,n)=1$, and reduction mod $n$ preserves the gcd, so $ar \bmod n \in U$.

*The map is injective.* If $ar \equiv ar' \pmod n$, multiply by $a^{-1}$ (which exists since $\gcd(a,n)=1$) to get $r \equiv r' \pmod n$, hence $r = r'$ in $U$.

An injection from the finite set $U$ to itself is a bijection, so $\{ar \bmod n : r \in U\}$ is a permutation of $U$. Taking products over $U$ two ways,
$$\prod_{r \in U} (ar) \equiv \prod_{r \in U} r \pmod n \quad\Longrightarrow\quad a^{\varphi(n)}\prod_{r\in U} r \equiv \prod_{r\in U} r \pmod n.$$
The product $\prod_{r\in U} r$ is a product of residues each coprime to $n$, hence itself coprime to $n$ and therefore invertible mod $n$. Cancelling it gives $a^{\varphi(n)}\equiv 1 \pmod n$. $\blacksquare$

### Worked Instance

Back to the Hook: $\varphi(10)=\bigl|\{1,3,7,9\}\bigr|=4$, so $a^4\equiv 1 \pmod{10}$ for every $a$ coprime to $10$ — hence $3^4,7^4,9^4\equiv 1$. As a bigger computation, find the last two digits of $7^{803}$, i.e. $7^{803}\bmod 100$. Here $\varphi(100)=100\bigl(1-\tfrac12\bigr)\bigl(1-\tfrac15\bigr)=40$, and $\gcd(7,100)=1$, so $7^{40}\equiv 1$. Reduce the exponent: $803 = 40\cdot 20 + 3$, so
$$7^{803}\equiv 7^{3}=343\equiv 43 \pmod{100}.$$
The last two digits are $43$.

### Pitfalls

- Euler's theorem needs $\gcd(a,n)=1$. Without coprimality it can fail (e.g. $2^{\varphi(10)}=2^4=16\equiv 6 \pmod{10}$, not $1$).
- $\varphi(n)$ counts integers coprime to $n$, including $1$; it is *not* $n-1$ except when $n$ is prime.
- $\varphi$ is multiplicative only across **coprime** factors: $\varphi(4\cdot 6)\ne \varphi(4)\varphi(6)$ since $\gcd(4,6)\ne 1$. Use $\varphi(p^k)=p^k-p^{k-1}$ per prime power.
- $\varphi(n)$ need not be the smallest exponent with $a^e\equiv 1$; the least such $e$ (the order) always divides $\varphi(n)$ but can be strictly smaller.

:::
:::

## Connections

Prereqs: Fermat's Little Theorem, whose permutation-of-residues proof this generalizes from the prime residues to the *units* mod $n$. Euler's theorem is the backbone of RSA (encryption uses exponents mod $\varphi(n)$), of computing orders, and of many "last $k$ digits of $a^{\text{huge}}$" problems. It unlocks quadratic residues (Euler's criterion) and the study of the group of units $(\ZZ/n\ZZ)^\times$. Recognition trigger: "compute $a^{\text{big}} \bmod n$" with $n$ composite and $\gcd(a,n)=1$, or any appearance of $\varphi(n)$.
