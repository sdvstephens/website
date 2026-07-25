$5 = 1^2 + 2^2$. $13 = 2^2 + 3^2$. $17 = 1^2 + 4^2$. $29 = 2^2 + 5^2$. But $3, 7, 11, 19$ are
never a sum of two squares, no matter how hard you try. Every prime in the first list is
$1$ more than a multiple of $4$; every prime in the second is $3$ more. Does a prime's remainder
on division by $4$ really decide whether it can be built from two squares?

## Discovery

Let $p$ be an odd prime.
1. Suppose $p = x^2 + y^2$. Reduce mod $4$: what are the possible values of $x^2 \bmod 4$ and
   $y^2 \bmod 4$? Which residues mod $4$ can $x^2 + y^2$ take, and which can it *never* take?
   Conclude an obstruction ruling out one class of primes immediately.
2. Now the hard direction: assume $p \equiv 1 \pmod 4$ and try to *build* the representation. First
   show $-1$ is a quadratic residue mod $p$ — i.e. there is an integer $u$ with $u^2 \equiv -1
   \pmod p$. (Euler's criterion, with the exponent $\tfrac{p-1}{2}$ even, does this in one line.)
3. You now have $p \mid u^2 + 1$. You want to turn "$p$ divides a sum of two squares" into "$p$
   *is* a sum of two squares." Consider the lattice of pairs $(a, b)$ with $a \equiv u\,b \pmod p$.
   Among the $\sim p$ values of the pair $(a,b)$ ranging in a box of side just over $\sqrt p$, why
   must two coincide mod $p$ — and what small nonzero $(a,b)$ does that hand you?
4. For that small pair, bound $a^2 + b^2$ from above (each of $|a|,|b|$ is below $\sqrt p$) and show
   $p \mid a^2 + b^2$ from $a \equiv ub$. What is the only multiple of $p$ in the allowed range?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Fermat's Two-Squares Theorem.** An odd prime $p$ is expressible as a sum of two integer squares,
$p = x^2 + y^2$, **if and only if** $p \equiv 1 \pmod 4$. (Also $2 = 1^2 + 1^2$.) When it exists,
the representation is **unique** up to order and signs.

More generally (stated, not proved here): a positive integer $n$ is a sum of two squares iff every
prime $\equiv 3 \pmod 4$ occurs to an **even** power in its factorization.

### Proof

**Necessity ($p = x^2+y^2 \Rightarrow p \equiv 1$).** Every square is $\equiv 0$ or $1 \pmod 4$
(even$^2 \equiv 0$, odd$^2 \equiv 1$). So $x^2 + y^2 \bmod 4 \in \{0, 1, 2\}$; it can never be
$3$. An odd prime $p$ is $\equiv 1$ or $3 \pmod 4$; the value $3$ is impossible, so $p \equiv 1
\pmod 4$. (This also kills $3,7,11,19,\dots$ in the hook.)

**Sufficiency ($p \equiv 1 \Rightarrow p = x^2+y^2$).**

*Step 1: $-1$ is a QR.* Since $p \equiv 1 \pmod 4$, $\tfrac{p-1}{2}$ is even, so by Euler's
criterion $\left(\tfrac{-1}{p}\right) = (-1)^{(p-1)/2} = +1$. Hence there exists $u$ with
$u^2 \equiv -1 \pmod p$, i.e. $p \mid u^2 + 1$.

*Step 2: Thue's pigeonhole.* Let $r = \lfloor \sqrt p\rfloor$, so $r \lt \sqrt p \lt r+1$ (as $p$
is not a perfect square). Consider the $(r+1)^2$ pairs $(s, t)$ with $s, t \in \{0, 1, \dots, r\}$
and form the values $u s - t \pmod p$. Since $(r+1)^2 \gt p$, by pigeonhole two distinct pairs
$(s_1,t_1) \ne (s_2,t_2)$ give the same residue: $u s_1 - t_1 \equiv u s_2 - t_2 \pmod p$. Set
$b = s_1 - s_2$ and $a = t_1 - t_2$. Then
$$u b \equiv a \pmod p, \qquad (a,b) \ne (0,0), \qquad |a| \le r \lt \sqrt p,\ \ |b| \le r \lt
\sqrt p.$$
Note $(a,b) = (0,0)$ is impossible: if $b = 0$ then $a \equiv 0$ with $|a| \lt \sqrt p \le p$
forces $a = 0$, contradicting distinctness; symmetrically for $a=0$.

*Step 3: the divisibility.* From $a \equiv u b \pmod p$,
$$a^2 + b^2 \equiv (ub)^2 + b^2 = b^2(u^2 + 1) \equiv 0 \pmod p,$$
using $u^2 \equiv -1$. So $p \mid a^2 + b^2$.

*Step 4: the squeeze.* We have $0 \lt a^2 + b^2 \lt (\sqrt p)^2 + (\sqrt p)^2 = 2p$ (strict lower
bound since $(a,b)\ne(0,0)$; strict upper since $|a|,|b| \lt \sqrt p$). The only positive multiple
of $p$ strictly below $2p$ is $p$ itself. Therefore
$$a^2 + b^2 = p.$$

**Uniqueness.** Suppose $p = a^2 + b^2 = c^2 + d^2$. The Brahmagupta–Fibonacci identity gives
$$(a^2+b^2)(c^2+d^2) = (ac+bd)^2 + (ad - bc)^2 = (ac - bd)^2 + (ad + bc)^2,$$
so $p^2 = (ac+bd)^2 + (ad-bc)^2$. Reducing mod $p$: from $a^2 \equiv -b^2$ and $c^2 \equiv -d^2$
one finds $p \mid (ac+bd)(ad-bc)$-type products, forcing one of $ad-bc$ or $ac-bd$ to be $\equiv
0 \pmod p$; combined with the size bounds $|ad-bc|, |ac-bd| \lt p$ this makes that term $0$. If
$ad = bc$ then, since $\gcd$-considerations on $a^2+b^2 = p$ prime force $\{a,b\}$ coprime,
$a \mid c$ and comparison of sizes gives $\{|a|,|b|\} = \{|c|,|d|\}$. Hence the representation is
unique up to swapping $x \leftrightarrow y$ and changing signs. $\blacksquare$

### Worked Instance

Resolve the hook constructively for $p = 13 \equiv 1 \pmod 4$. First a square root of $-1$:
test $u = 5$, since $5^2 = 25 \equiv -1 \pmod{13}$. Now $r = \lfloor\sqrt{13}\rfloor = 3$. We seek
small $(a,b)$ with $a \equiv 5b \pmod{13}$, $|a|,|b| \le 3$. Take $b = 2$: $5\cdot 2 = 10 \equiv
-3 \pmod{13}$, so $a = -3$ works ($|a| = 3 \le 3$). Then
$$a^2 + b^2 = (-3)^2 + 2^2 = 9 + 4 = 13 = p. \checkmark$$
And indeed $13 = 3^2 + 2^2$, matching the hook. Contrast $p = 7 \equiv 3 \pmod 4$: by the
necessity direction no representation can exist, since $x^2 + y^2 \not\equiv 3 \pmod 4$.

### Pitfalls

- The clean "iff" is for **primes**. For general $n$, being a sum of two squares depends on the
  *parity of the exponent* of each prime $\equiv 3 \pmod 4$ (e.g. $9 = 3^2$ is a sum of squares:
  $9 = 0^2 + 3^2$, because $3$ appears to an even power).
- $p = 2$ is the exception to "$\equiv 1 \pmod 4$": $2 = 1^2 + 1^2$ works even though
  $2 \equiv 2$. State the theorem for *odd* primes and mention $2$ separately.
- Thue's box must have side $r+1$ with $(r+1)^2 \gt p$ — using side $r$ (giving $\le p$ pairs)
  breaks the pigeonhole. The strict inequality $|a|,|b| \lt \sqrt p$ is what forces $a^2+b^2 \lt
  2p$ and pins the multiple to $p$, not $2p$ or larger.
- Necessity and sufficiency are *different* arguments: the mod-$4$ obstruction only rules primes
  *out*; building the representation needs $-1$ being a QR plus the pigeonhole squeeze.

:::
:::

## Connections

Prereq: quadratic residues and Euler's criterion, which supply the crucial "$-1$ is a square mod
$p\equiv1\pmod4$." The theorem is the number-field face of the **Gaussian integers** $\ZZ[i]$: a
rational prime $p$ splits in $\ZZ[i]$ (as $p = (x+yi)(x-yi)$) exactly when $p\equiv1\pmod4$, and
Thue's lemma is elementary pigeonhole standing in for that factorization. It generalizes to sums
of *three* and *four* squares (Lagrange) and to which $n$ are represented by other quadratic forms.
Recognition trigger: "which primes/integers are $x^2+y^2$," or a Diophantine equation whose mod-$4$
reduction lands a square-sum on the wrong side.
