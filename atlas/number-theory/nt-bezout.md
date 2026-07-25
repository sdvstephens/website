You can combine $12$ and $18$ with integer coefficients: $12\cdot(-1) + 18\cdot 1 = 6$. You can also
hit $12$, $18$, $24$, $30$ — but never $5$, never $9$, never anything not a multiple of $6$. And
$6 = \gcd(12,18)$. Is it a coincidence that the *smallest positive* number you can build is exactly
the gcd?

## Discovery

1. Fix nonzero integers $a, b$ and look at the set $S = \{\,ax + by : x, y \in \ZZ\,\}$ of all their
   integer combinations. Show $S$ contains a positive element (so it has a *smallest* positive
   element — call it $d$).
2. Let $d = ax_0 + by_0$ be that least positive combination. Divide $a$ by $d$: write $a = qd + r$
   with $0 \le r \lt d$. Express $r = a - qd$ as a combination of $a$ and $b$. What does the range
   $0 \le r \lt d$ plus "$d$ is the *smallest* positive combination" force $r$ to be? Conclude a
   divisibility fact about $d$ and $a$ (and likewise $d$ and $b$).
3. Separately, let $g = \gcd(a,b)$. Since $g \mid a$ and $g \mid b$, what does $g$ divide about *any*
   combination $ax + by$ — in particular about $d$?
4. You now have "$d$ divides both $a$ and $b$" and "$g$ divides $d$." Two divisibilities between
   positive integers pointing opposite ways — what must be true of $d$ and $g$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Bézout's identity.** For integers $a, b$ not both zero, there exist integers $x, y$ with
$$ax + by = \gcd(a,b).$$
Moreover, $\gcd(a,b)$ is precisely the **least positive integer** expressible as $ax + by$, and the
set of all values $ax + by$ (over integers $x,y$) is exactly the set of multiples of $\gcd(a,b)$.
The coefficients $x, y$ (called Bézout coefficients) can be computed by the extended Euclidean
algorithm.

### Proof

Assume WLOG $a \ne 0$. Consider $S = \{ax + by : x,y \in \ZZ\}$. Taking $x = \pm 1, y = 0$ shows $S$
contains $|a| \gt 0$, so $S$ has positive elements; by well-ordering let $d = ax_0 + by_0$ be the
**smallest positive** element of $S$.

**$d$ divides $a$ and $b$.** Divide $a$ by $d$: $a = qd + r$ with $0 \le r \lt d$. Then
$$r = a - qd = a - q(ax_0 + by_0) = a(1 - qx_0) + b(-qy_0) \in S.$$
So $r$ is a nonnegative element of $S$ that is strictly less than $d$. Since $d$ is the smallest
*positive* element of $S$, $r$ cannot be positive; hence $r = 0$ and $d \mid a$. The identical
argument with $b$ in place of $a$ gives $d \mid b$. Thus $d$ is a common divisor of $a$ and $b$, so
$d \le \gcd(a,b)$.

**$\gcd(a,b)$ divides $d$.** Let $g = \gcd(a,b)$. Then $g \mid a$ and $g \mid b$, so $g$ divides
every combination $ax + by$; in particular $g \mid d = ax_0 + by_0$. As $g, d \gt 0$, this gives
$g \le d$.

Combining $d \le g$ and $g \le d$ yields $d = g = \gcd(a,b)$, and $d = ax_0 + by_0$ is the required
identity. Finally, since $d \mid ax + by$ for all $x,y$ (as $d$ divides $a$ and $b$), every value in
$S$ is a multiple of $d$; and conversely $kd = a(kx_0) + b(ky_0) \in S$, so $S$ is exactly the set of
multiples of $\gcd(a,b)$. $\blacksquare$

### Worked Instance

Take $a = 12, b = 18$. Euclid: $18 = 1\cdot 12 + 6$, then $12 = 2\cdot 6 + 0$, so $\gcd = 6$.
Back-substitute the first line: $6 = 18 - 1\cdot 12 = 12\cdot(-1) + 18\cdot 1$. That is a Bézout
identity with $(x,y) = (-1, 1)$. The Hook is now explained: every combination $12x + 18y$ is a
multiple of $6$ (since $6$ divides both), and $6$ itself is attainable, so $6$ is the smallest
positive value — no combination can ever equal $5$ or $9$.

### Pitfalls

- Bézout gives the **gcd**, not any smaller number. $12x + 18y$ can never equal $3$, because $3$ is
  not a multiple of $\gcd(12,18)=6$.
- The coefficients $x, y$ are **not unique**: from one solution you can add multiples of
  $b/\gcd(a,b)$ to $x$ and subtract multiples of $a/\gcd(a,b)$ from $y$. ($(-1,1)$ and $(2,-1)$ both
  work for $12,18$.)
- At least one of $a, b$ must be nonzero. If both are zero, $\gcd$ is undefined and $S = \{0\}$.
- Bézout guarantees *existence* of $x,y$; to *find* them you run the extended Euclidean algorithm,
  not guesswork.

:::
:::

## Connections

Prereqs: the Euclidean algorithm (which computes the gcd and, run backwards, the coefficients) and
modular arithmetic (Bézout mod $m$ is exactly the modular-inverse statement of the previous node).
This identity is the theoretical core behind linear Diophantine equations, the Chinese Remainder
Theorem, and much of ideal theory. Recognition trigger: any question about which values $ax+by$ can
take, or needing to *construct* a combination equal to the gcd.
