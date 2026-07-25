A basket of eggs leaves remainder $2$ when counted by threes, $3$ when counted by fives, and $2$ when counted by sevens. There is exactly one such count below $105$ — namely $23$ — and the "below $105$" is no coincidence: $105 = 3\cdot 5\cdot 7$. Why does one modulus, the product, pin the answer down exactly?

## Discovery

Consider the pair of conditions $x\equiv 2\pmod 3$ and $x\equiv 3\pmod 5$.
1. List all $x$ in $\{0,1,\dots,14\}$ with $x\equiv 2\pmod 3$. Separately list those with $x\equiv 3\pmod 5$. How many values satisfy *both*?
2. You are working mod $15 = 3\cdot 5$. Among the $15$ residues $0,\dots,14$, how many satisfied the first condition alone? The second alone? If the two conditions were "independent," how many should satisfy both — and does that match step 1?
3. Try to build a solution directly. Find a number $e_3$ that is $\equiv 1\pmod 3$ and $\equiv 0\pmod 5$ (hint: it is a multiple of $5$). Find $e_5\equiv 0\pmod 3$, $\equiv 1\pmod 5$. Now form $2\,e_3 + 3\,e_5$ and reduce mod $15$. Does it satisfy both original congruences?
4. Suppose $x$ and $y$ both solve the pair. What can you say about $x - y$ modulo $3$ and modulo $5$? Since $\gcd(3,5)=1$, what does that force about $x-y$ modulo $15$? Conclude how many solutions exist mod $15$.
5. Generalize to moduli $m$ and $n$ with $\gcd(m,n)=1$: how many solutions mod $mn$, and how would you construct one?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Chinese Remainder Theorem.** Let $m_1,\dots,m_k$ be pairwise coprime positive integers with product $M=\prod m_i$. Then for any targets $a_1,\dots,a_k$, the system
$$x\equiv a_1\pmod{m_1},\quad \dots,\quad x\equiv a_k\pmod{m_k}$$
has a solution, and it is **unique modulo $M$**. Equivalently, the map
$$\ZZ/M\ZZ \;\longrightarrow\; \ZZ/m_1\ZZ\times\cdots\times\ZZ/m_k\ZZ,\qquad x\bmod M\ \mapsto\ (x\bmod m_1,\dots,x\bmod m_k)$$
is a **ring isomorphism**.

### Proof

It suffices to prove existence and uniqueness for two coprime moduli $m,n$; the general case follows by induction, folding the first two congruences into one modulo $m_1m_2$ (again coprime to the rest).

**Existence.** Since $\gcd(m,n)=1$, by Bézout / modular inverses there is an integer $n'$ with $n\,n'\equiv 1\pmod m$, and an $m'$ with $m\,m'\equiv 1\pmod n$. Set
$$x = a\,(n\,n') + b\,(m\,m').$$
Modulo $m$: the second term has a factor $m$, so $x\equiv a\,(n\,n')\equiv a\cdot 1 = a\pmod m$. Modulo $n$: the first term has a factor $n$, so $x\equiv b\,(m\,m')\equiv b\cdot 1 = b\pmod n$. Thus $x$ solves both.

**Uniqueness.** If $x$ and $y$ both solve the system, then $m\mid(x-y)$ and $n\mid(x-y)$. Since $\gcd(m,n)=1$, we get $mn\mid(x-y)$ (a coprime pair both dividing a number forces their product to divide it, by unique factorization). Hence $x\equiv y\pmod{mn}$: the solution is unique mod $mn$.

**Isomorphism.** The reduction map $\ZZ/M\ZZ \to \prod \ZZ/m_i\ZZ$ respects $+$ and $\times$ (reduction is a ring homomorphism in each coordinate). Existence says it is *surjective*; both sides have exactly $M=\prod m_i$ elements, so a surjection between equal finite sets is a bijection. A bijective ring homomorphism is an isomorphism. $\blacksquare$

### Worked Instance

Solve the Hook: $x\equiv 2\pmod 3,\ x\equiv 3\pmod 5,\ x\equiv 2\pmod 7$, with $M=105$.
Build $e_i$ that are $1$ at coordinate $i$ and $0$ elsewhere:
- $e_3 = 35\,t$ with $35\,t\equiv 1\pmod 3$: $35\equiv 2$, and $2\cdot 2=4\equiv 1$, so $t=2$, $e_3=70$.
- $e_5 = 21\,t$ with $21\,t\equiv 1\pmod 5$: $21\equiv 1$, so $t=1$, $e_5=21$.
- $e_7 = 15\,t$ with $15\,t\equiv 1\pmod 7$: $15\equiv 1$, so $t=1$, $e_7=15$.

Then $x \equiv 2\cdot 70 + 3\cdot 21 + 2\cdot 15 = 140 + 63 + 30 = 233 \equiv 233 - 2\cdot 105 = 23 \pmod{105}$. So $x\equiv 23\pmod{105}$ — exactly the count from the Hook, and unique below $105$.

### Pitfalls

- **Pairwise coprime is required.** With a shared factor (e.g. moduli $4$ and $6$), a system may have no solution or a solution unique only mod $\lcm$, not mod the product.
- Uniqueness is **modulo the product $M$**, not a single value: there are infinitely many integer solutions, all congruent mod $M$.
- In the construction, the inverse for coordinate $i$ is the inverse of $M/m_i$ *modulo $m_i$* — do not invert modulo the wrong modulus.
- CRT also splits *multiplicative* structure: $(\ZZ/M\ZZ)^\times\cong\prod(\ZZ/m_i\ZZ)^\times$, which is why $\varphi$ is multiplicative — but this needs coprimality too.

:::
:::

## Connections

Prereqs: modular inverses (the construction inverts $M/m_i$ mod $m_i$; existence rides on Bézout). CRT is the great "divide and conquer" of number theory: solve a problem prime-power by prime-power, then glue. It underlies the multiplicativity of $\varphi$ and other arithmetic functions, fast modular computation, RSA decryption speedups, and counting solutions of congruences. Recognition trigger: a system of congruences with coprime moduli, or a problem where a composite modulus factors into coprime pieces you can handle separately.
