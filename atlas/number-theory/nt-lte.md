How many factors of $5$ divide $6^{100} - 1$? The number is astronomically large, yet the answer
is a clean $\,3$. And it comes from a startlingly simple rule: count the $5$s in $6 - 1$, then add
the $5$s in the exponent $100$. That's it — $v_5(6-1) + v_5(100) = 1 + 2 = 3$. Why should the
prime's grip on $a^n - b^n$ split so cleanly into a "base part" and an "exponent part"?

## Discovery

Fix an odd prime $p$. Suppose $p \mid a - b$ but $p \nmid a$ and $p \nmid b$.
1. Factor $a^p - b^p = (a - b)(a^{p-1} + a^{p-2}b + \cdots + b^{p-1})$. Call the second factor $S$.
   Since $a \equiv b \pmod p$, reduce $S$ modulo $p$: each of the $p$ terms is $\equiv b^{p-1}$,
   so $S \equiv ?\pmod p$. What is $v_p(S)$ — can it be $\ge 2$? (You will need a sharper look than
   "$S \equiv 0$": expand $a = b + pt$ and compute $S \bmod p^2$.)
2. From step 1, relate $v_p(a^p - b^p)$ to $v_p(a - b)$. By how much does one factor of $p$ in the
   exponent raise the valuation?
3. Now take a general exponent $n$ and write $n = p^k \cdot q$ with $p \nmid q$. First handle the
   $p \nmid n$ case: show $v_p(a^n - b^n) = v_p(a - b)$ directly (again reduce the cofactor mod
   $p$). Then peel off the $p$-part of $n$ one power at a time using step 2.
4. Combine into a single formula for $v_p(a^n - b^n)$ in terms of $v_p(a-b)$ and $v_p(n)$.
5. Test $p = 2$: does your step-1 computation of $S \bmod p^2$ still force the same jump? Try
   $a = 3, b = 1, n = 2$ and $n = 4$ and watch where the odd-$p$ formula breaks.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Lifting the Exponent (LTE).** Let $p$ be an **odd** prime, and let $a, b$ be integers with
$p \nmid a$, $p \nmid b$, and $p \mid a - b$. Then for every positive integer $n$,
$$v_p(a^n - b^n) = v_p(a - b) + v_p(n).$$
For the difference of $n$-th powers there is a companion "sum" version: if additionally $n$ is
odd and $p \mid a + b$, then $v_p(a^n + b^n) = v_p(a + b) + v_p(n)$.

**The prime $2$ is special.** If $a, b$ are odd:
- for $n$ even, $v_2(a^n - b^n) = v_2(a - b) + v_2(a + b) + v_2(n) - 1$;
- for $n$ odd, $v_2(a^n - b^n) = v_2(a - b)$.

"LTE" is a competition-culture name, **not** a classical theorem title. We prove the core odd-$p$
case where $p \mid a - b$; the sum-version and $p = 2$ cases follow by the same technique with the
noted adjustments.

### Proof

Assume $p$ odd, $p \nmid ab$, $p \mid a - b$.

**Step A: exponent coprime to $p$ doesn't move the valuation.** Suppose $p \nmid n$. Factor
$$a^n - b^n = (a - b)\underbrace{(a^{n-1} + a^{n-2}b + \cdots + b^{n-1})}_{T}.$$
Since $a \equiv b \pmod p$, each of the $n$ terms of $T$ is $\equiv b^{n-1} \pmod p$, so
$T \equiv n\,b^{n-1} \pmod p$. As $p \nmid n$ and $p \nmid b$, we get $p \nmid T$, hence
$v_p(a^n - b^n) = v_p(a - b) + v_p(T) = v_p(a - b)$.

**Step B: one factor of $p$ in the exponent lifts the valuation by exactly $1$.** We show
$v_p(a^p - b^p) = v_p(a - b) + 1$. Write $a = b + m$ where $m = a - b$, so $v_p(m) = v_p(a-b) \ge
1$. Factor $a^p - b^p = (a - b)\,S$ with
$$S = \sum_{i=0}^{p-1} a^{i} b^{p-1-i} = \sum_{i=0}^{p-1} (b + m)^{i} b^{p-1-i}.$$
Expand $(b+m)^i = b^i + i\,b^{i-1}m + \binom{i}{2}b^{i-2}m^2 + \cdots$ and keep terms modulo
$p^2$ (recall $p \mid m$, so $m^2 \equiv 0 \pmod{p^2}$):
$$(b+m)^i b^{p-1-i} \equiv b^{p-1} + i\,b^{p-2}m \pmod{p^2}.$$
Summing over $i = 0,\dots,p-1$,
$$S \equiv p\,b^{p-1} + \left(\sum_{i=0}^{p-1} i\right) b^{p-2} m = p\,b^{p-1} + \frac{p(p-1)}{2}
b^{p-2} m \pmod{p^2}.$$
Because $p$ is odd, $\tfrac{p-1}{2}$ is an integer, so the second term is $p\cdot\big(\tfrac{p-1}{2}
b^{p-2}m\big)$, and since $p \mid m$ that whole term is $\equiv 0 \pmod{p^2}$. Thus
$$S \equiv p\,b^{p-1} \pmod{p^2}.$$
As $p \nmid b$, we have $v_p(S) = 1$ exactly. Therefore $v_p(a^p - b^p) = v_p(a-b) + v_p(S) =
v_p(a-b) + 1$. (Here is the crux where $p = 2$ fails: for $p = 2$ the middle term
$\tfrac{p(p-1)}{2}b^{p-2}m = 1\cdot b^0\cdot m = m$ is *not* divisible by $p^2$ beyond $v_p(m)$,
so the clean "$+1$" is replaced by the $a+b$ correction.)

**Step C: induction on $v_p(n)$.** Write $n = p^k q$ with $p \nmid q$ and $k = v_p(n)$. Set
$A = a^{p^{k}}$-type towers: define $x_0 = a,\ y_0 = b$, and $x_{j} = x_{j-1}^{p}$,
$y_j = y_{j-1}^p$, so $x_j = a^{p^j}$, $y_j = b^{p^j}$. Each pair still satisfies the hypotheses
($p \nmid x_j$ since $p \nmid a$, and $p \mid x_j - y_j$ because $p \mid x_{j-1} - y_{j-1}$ implies
$x_j - y_j = x_{j-1}^p - y_{j-1}^p$ is divisible by $x_{j-1}-y_{j-1}$). Applying Step B repeatedly,
$$v_p\!\left(a^{p^k} - b^{p^k}\right) = v_p(a - b) + k.$$
Finally apply Step A with base $(a^{p^k}, b^{p^k})$ and exponent $q$ (coprime to $p$):
$$v_p(a^n - b^n) = v_p\!\left((a^{p^k})^{q} - (b^{p^k})^{q}\right) = v_p\!\left(a^{p^k} - b^{p^k}
\right) = v_p(a - b) + k = v_p(a - b) + v_p(n).$$
$\blacksquare$

### Worked Instance

Resolve the hook: $v_5(6^{100} - 1)$. Here $a = 6$, $b = 1$, $p = 5$: indeed $5 \nmid 6$,
$5 \nmid 1$, and $5 \mid 6 - 1 = 5$. LTE gives
$$v_5(6^{100} - 1) = v_5(6 - 1) + v_5(100) = 1 + 2 = 3.$$
So $5^3 = 125 \mid 6^{100} - 1$ but $5^4 \nmid$.

A contest-flavored use: find the largest power of $3$ dividing $10^{3^{2026}} - 1$. Take $a = 10$,
$b = 1$, $p = 3$: $3 \mid 10 - 1 = 9$ with $v_3(9) = 2$, and $v_3(3^{2026}) = 2026$. Hence
$v_3(10^{3^{2026}} - 1) = 2 + 2026 = 2028$.

Contrast at $p = 2$: $v_2(3^4 - 1) = v_2(80) = 4$. The odd-$p$ formula would wrongly predict
$v_2(3-1) + v_2(4) = 1 + 2 = 3$. The correct $2$-adic rule gives $v_2(3-1) + v_2(3+1) + v_2(4) -
1 = 1 + 2 + 2 - 1 = 4$. ✓

### Pitfalls

- **All three hypotheses matter**: $p \nmid a$, $p \nmid b$, and $p \mid a - b$. Drop $p \mid a-b$
  and the formula is simply false (LTE assumes the base difference is already divisible by $p$).
- **$p = 2$ is genuinely different** — never apply the odd-$p$ formula at $2$. Use the two
  special cases (note the "$-1$" and the extra $v_2(a+b)$ term for even exponents).
- The **sum version** ($a^n + b^n$) requires $n$ **odd** and $p \mid a + b$; for even $n$,
  $a^n + b^n$ has no such lemma (rewrite as a difference or handle $p=2$ separately).
- LTE controls **one prime at a time**. To find, say, the full factorization's structure you apply
  it prime by prime; it says nothing about primes $p \nmid a - b$.

:::
:::

## Connections

Prereqs: Legendre's formula (the valuation mindset) and order of an element (LTE is really a
statement about how $p$-power structure sits inside multiplicative order). LTE is the workhorse
for Diophantine problems of the form "$a^n \pm b^n$ is a perfect power / divisible by $p^k$," and
it dovetails with Zsygmondy's theorem on primitive prime divisors. Recognition trigger: any
question asking for the exact power of a prime dividing $a^n \pm b^n$, especially when the base
difference $a - b$ (or sum $a + b$) already carries that prime. Reach for the $p = 2$ table the
instant the prime is $2$.
