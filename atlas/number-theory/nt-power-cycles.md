The units digit of $7^n$ marches $7, 9, 3, 1, 7, 9, 3, 1, \dots$ — a loop of length $4$ that never breaks. So what is the last digit of $7^{2026}$? You can answer without touching the other $1000$-plus digits.

## Discovery

1. Compute the units digit of $7^1, 7^2, 7^3, 7^4, 7^5$. When does the pattern first repeat, and what is the length of the repeating block?
2. The units digit of a number $N$ is exactly $N \bmod 10$. Rephrase step 1: you are computing $7^n \bmod 10$. What is the smallest $d\gt 0$ with $7^d\equiv 1 \pmod{10}$?
3. You want the units digit of $7^{2026}$, i.e. $7^{2026}\bmod 10$. Using the block length $d$ from step 2, which residue of the exponent $2026$ controls the answer? Compute $2026 \bmod d$.
4. Careful with a boundary: your cycle lists exponents $1,2,3,4$ before repeating. If $2026 \bmod d = 0$, which position in the printed cycle does that correspond to — the $d$-th, or a "$0$-th"? Resolve it by checking against a known value like $7^4$.
5. Try a base sharing a factor with $10$: the units digit of $6^n$ and of $2^n$. Does $2^n \bmod 10$ ever return to the value at $n=0$? Why does the "$\ord_{10}$" story need adjusting here?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The units digit of $a^n$ is $a^n \bmod 10$, and it is **eventually periodic** in $n$. When $\gcd(a,10)=1$ (i.e. $a$ ends in $1,3,7,9$) the sequence is purely periodic with period $\ord_{10}(a)$, a divisor of $\varphi(10)=4$; so every such cycle has length $1$, $2$, or $4$. To read off $a^n \bmod 10$, reduce the exponent modulo the cycle length $d$, using the convention that a remainder of $0$ selects the $d$-th (last) entry of the cycle $a^1,\dots,a^d$. When $\gcd(a,10)\gt 1$ the sequence still cycles but only *after* the first term (it never returns to $a^0=1$).

### Proof

Write $u_n = a^n \bmod 10$. If $\gcd(a,10)=1$, let $d=\ord_{10}(a)$; by the order criterion $a^{n+d}=a^n a^d\equiv a^n\pmod{10}$, so $u_{n+d}=u_n$ for all $n\ge 1$: the sequence is periodic with period $d$, and $d\mid\varphi(10)=4$, so $d\in\{1,2,4\}$. To evaluate $u_N$ for $N\ge 1$, note $a^i\equiv a^j\pmod{10}\iff i\equiv j\pmod d$; thus $u_N=u_r$ where $r$ is the representative of $N$ modulo $d$ taken in the range $\{1,\dots,d\}$ (rather than $\{0,\dots,d-1\}$). This "$0\mapsto d$" convention is exactly what matches the printed cycle $a^1,a^2,\dots,a^d$: when $N\equiv 0\pmod d$ we have $a^N\equiv a^d$, which is the $d$-th (last) listed entry, so position $d$ is the correct one.

If $\gcd(a,10)\gt1$, the residues $a,a^2,\dots$ again take finitely many values, so some $a^i\equiv a^j$ with $i\lt j$; the least such gives eventual periodicity from that point on. Since $a^n$ is never coprime to $10$ for $n\ge1$ while $a^0=1$ is, the value $1$ never recurs, so the cycle excludes $a^0$. $\blacksquare$

### Worked Instance

For $a=7$: $7^1\equiv7,\ 7^2\equiv9,\ 7^3\equiv3,\ 7^4\equiv1\pmod{10}$, so $\ord_{10}(7)=4$ and the cycle is $(7,9,3,1)$. For $7^{2026}$: $2026 = 4\cdot 506 + 2$, so $2026\equiv 2\pmod 4$, selecting the $2$nd entry. The units digit of $7^{2026}$ is $\boxed{9}$. (Boundary check: $7^{2024}$ has $2024\equiv 0\pmod4$, so by the convention it takes the $4$th entry $1$ — matching $7^4$.)

### Pitfalls

- Off-by-one at the wraparound: exponent $\equiv 0 \pmod d$ means the *last* entry of the cycle $a^1,\dots,a^d$ (not a nonexistent zeroth entry). Always sanity-check against $a^d$.
- Cycle length is the **order** $\ord_{10}(a)$, which divides $4$ but may be $1$ or $2$ (e.g. $a=1$ gives length $1$; $a=9$ gives $9,1,9,1$, length $2$). Do not assume every cycle is length $4$.
- For $a$ ending in $0,2,4,5,6,8$ the base shares a factor with $10$: the sequence still cycles but the value at $n=0$ never returns, so reducing the exponent mod the cycle length needs care about the pre-period.
- This is a statement mod $10$ only; for the last *two* digits work mod $100$ (order divides $\varphi(100)=40$).

:::
:::

## Connections

Prereqs: the multiplicative order (this is the special case $n=10$, plus the last-digit interpretation of $\bmod 10$). It is the workhorse behind AMC/AIME "units digit of $\ldots$" problems, and the same machinery (order mod $100$, mod $1000$) gives the last two or three digits. Recognition trigger: "last digit of $a^n$" or any repeating tail in a power sequence. This is where abstract order theory becomes a one-line contest computation.
