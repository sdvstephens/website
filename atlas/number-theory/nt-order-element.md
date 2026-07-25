Powers of $2$ mod $7$ go $2,4,1,2,4,1,\dots$ — a cycle of length $3$. Fermat guarantees $2^6\equiv 1 \pmod 7$, yet the *first* return to $1$ happens at exponent $3$. And $3 \mid 6$. Is that divisibility an accident?

## Discovery

Work mod $7$ with $a = 2$.
1. Compute $2^1,2^2,2^3,\dots \pmod 7$ until you hit $1$ again. What is the smallest exponent $d \gt 0$ with $2^d\equiv 1$?
2. Now list which exponents $k$ give $2^k\equiv 1$: check $k=1,2,\dots,7$. Describe the set of winning exponents in one phrase.
3. Suppose $2^k\equiv 1$ for some $k$. Divide $k$ by your $d$ from step 1: $k = qd + r$ with $0\le r \lt d$. Rewrite $2^k$ using $2^d\equiv 1$. What does $2^r$ equal, and what does the *minimality* of $d$ force $r$ to be?
4. Fermat gives $2^6\equiv 1 \pmod 7$. Using step 3, what must be true about $d$ and $6$?
5. Generalize: for $\gcd(a,n)=1$, define $d$ as the least positive exponent with $a^d\equiv 1 \pmod n$. State the relationship between $d$ and any exponent $k$ with $a^k\equiv 1$, and between $d$ and $\varphi(n)$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For $\gcd(a,n)=1$, the **multiplicative order** of $a$ modulo $n$, written $\ord_n(a)$, is the least positive integer $d$ with $a^d\equiv 1 \pmod n$. Then:
1. $a^k\equiv 1 \pmod n \iff \ord_n(a)\mid k$;
2. consequently $\ord_n(a)\mid \varphi(n)$ (and $\ord_p(a)\mid p-1$ for prime $p$);
3. more generally $a^i \equiv a^j \pmod n \iff i\equiv j \pmod{\ord_n(a)}$.

### Proof

First, the order exists: the powers $a^1,a^2,\dots$ take finitely many values mod $n$, so two coincide, say $a^i\equiv a^j$ with $i \lt j$; multiplying by $(a^{-1})^i$ (valid since $\gcd(a,n)=1$) gives $a^{j-i}\equiv 1$, so *some* positive exponent works, and by well-ordering there is a least one, $d = \ord_n(a)$.

**($\Leftarrow$) of (1).** If $d\mid k$, write $k = dm$; then $a^k = (a^d)^m \equiv 1^m = 1$.

**($\Rightarrow$) of (1).** Suppose $a^k\equiv 1$. By the division algorithm, $k = qd + r$ with $0\le r \lt d$. Then
$$1 \equiv a^k = (a^d)^q\, a^r \equiv 1^q\, a^r = a^r \pmod n.$$
So $a^r\equiv 1$ with $0\le r \lt d$. If $r \gt 0$ this contradicts the minimality of $d$; hence $r = 0$, i.e. $d\mid k$.

**(2).** By Fermat/Euler, $a^{\varphi(n)}\equiv 1 \pmod n$. Applying (1) with $k=\varphi(n)$ gives $d\mid \varphi(n)$.

**(3).** For $i\le j$, $a^i\equiv a^j \iff a^{j-i}\equiv 1$ (cancel $a^i$, invertible) $\iff d\mid (j-i)$ by (1) $\iff i\equiv j\pmod d$. $\blacksquare$

### Worked Instance

Mod $7$, $a=2$: $2^1=2,\ 2^2=4,\ 2^3=8\equiv 1$, so $\ord_7(2)=3$. Check (1): the exponents with $2^k\equiv 1$ are exactly the multiples of $3$. Check (2): $3\mid \varphi(7)=6$. Now use this to reduce work — find $2^{2024}\bmod 7$. Since $\ord_7(2)=3$ and $2024 = 3\cdot 674 + 2$,
$$2^{2024}\equiv 2^{2024 \bmod 3} = 2^{2}= 4 \pmod 7.$$
The order lets us reduce the exponent mod $3$ rather than mod $6$.

### Pitfalls

- The order divides $\varphi(n)$ but usually is **not** equal to it. Do not assume $\ord_n(a)=\varphi(n)$ (that special case is $a$ being a *primitive root*).
- To reduce an exponent $k$ in $a^k\bmod n$, reduce $k$ modulo the **order**, not modulo $n$ and not modulo $\varphi(n)$ blindly (though mod $\varphi(n)$ is always safe since $\ord\mid\varphi$).
- The order is defined only when $\gcd(a,n)=1$; otherwise $a^k$ never returns to $1$.
- Finding the order means finding the *least* such $d$; a divisor of $\varphi(n)$ that works is a candidate, but you must rule out its proper divisors.

:::
:::

## Connections

Prereqs: Fermat's Little Theorem (which supplies the exponent $p-1$ that the order must divide). The order is the sharpest tool for "$a^{\text{huge}}\bmod n$" — reduce the exponent mod the order. It unlocks power cycles / last-digit patterns (order mod $10$), primitive roots, and Lifting the Exponent. Recognition trigger: repeating patterns in powers, or a problem asking for the *period* of $a^k \bmod n$, or "smallest $k$ with $a^k\equiv 1$."
