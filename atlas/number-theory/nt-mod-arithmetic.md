On a clock, $10 + 5$ lands on $3$, not $15$. Ask a subtler question: if you *replace* the $10$ by
$22$ (also a "$10$ o'clock" on a 12-hour cycle) and the $5$ by $17$, does $22 + 17$ still land on
the same hour as $10 + 5$? It does. Why is arithmetic allowed to ignore which representative you
picked?

## Discovery

1. Fix a modulus $m \ge 1$. Say $a \equiv b \pmod m$ means $m \mid (a-b)$. Check three things:
   is $a \equiv a$? if $a \equiv b$, is $b \equiv a$? if $a \equiv b$ and $b \equiv c$, is
   $a \equiv c$? (Use only the definition of divides.)
2. A relation with those three properties sorts the integers into disjoint classes. Using the
   division algorithm — every integer is $qm + r$ with $0 \le r \lt m$ — how many classes are
   there, and what's a natural label for each?
3. Now the crux. Suppose $a \equiv a' \pmod m$ and $b \equiv b' \pmod m$. Is it forced that
   $a + b \equiv a' + b' \pmod m$? Write $a' = a + sm$ and $b' = b + tm$ and check the difference
   $(a'+b') - (a+b)$.
4. Do the same for products: with the same substitutions, expand $a'b' - ab$ and decide whether
   $m$ divides it. What does this let you do to the numbers *before* you multiply?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an integer modulus $m \ge 1$. The relation "$a \equiv b \pmod m$" (defined by $m \mid a-b$) is
an **equivalence relation**: reflexive, symmetric, and transitive. It partitions $\ZZ$ into exactly
$m$ **residue classes**, represented by $0, 1, \dots, m-1$. Moreover the relation is **compatible
with addition and multiplication**: if $a \equiv a' \pmod m$ and $b \equiv b' \pmod m$, then
$$a + b \equiv a' + b' \pmod m \qquad\text{and}\qquad ab \equiv a'b' \pmod m.$$
Consequently $+$ and $\times$ are **well-defined on residue classes**: the class of a sum or product
depends only on the classes of the inputs, not on the representatives chosen.

### Proof

**Equivalence relation.** *Reflexive:* $m \mid 0 = a - a$, so $a \equiv a$. *Symmetric:* if
$m \mid a-b$ then $m \mid -(a-b) = b - a$, so $b \equiv a$. *Transitive:* if $m \mid a-b$ and
$m \mid b-c$, then $m$ divides their sum $(a-b)+(b-c) = a-c$, so $a \equiv c$.

**Exactly $m$ classes.** By the division algorithm, each integer $a$ can be written uniquely as
$a = qm + r$ with $0 \le r \lt m$; then $a - r = qm$ is a multiple of $m$, so $a \equiv r$. Thus
every integer is congruent to one of $0, 1, \dots, m-1$. These $m$ values are pairwise
incongruent: if $0 \le r \lt r' \lt m$ then $0 \lt r' - r \lt m$, which is not a multiple of $m$,
so $r \not\equiv r'$. Hence there are exactly $m$ distinct classes.

**Compatibility with $+$ and $\times$.** Suppose $a \equiv a'$ and $b \equiv b'$, so
$a' = a + sm$ and $b' = b + tm$ for integers $s,t$. Then
$$ (a' + b') - (a + b) = (s + t)m,$$
which is divisible by $m$, giving $a+b \equiv a'+b'$. For the product,
$$ a'b' - ab = (a + sm)(b + tm) - ab = (at + bs + stm)\,m,$$
again a multiple of $m$, so $ab \equiv a'b'$. Because the resulting class is unchanged when
representatives are swapped, addition and multiplication of residue classes are well-defined.
$\blacksquare$

### Worked Instance

The Hook, with $m = 12$. We have $22 \equiv 10$ and $17 \equiv 5 \pmod{12}$ (since $12 \mid 12$ and
$12 \mid 12$). Compatibility of addition guarantees $22 + 17 \equiv 10 + 5 \pmod{12}$, and indeed
$22+17 = 39 = 3\cdot 12 + 3 \equiv 3$, while $10 + 5 = 15 \equiv 3$ — same hour. The same principle
lets you shrink numbers before multiplying: to find $22\cdot 17 \bmod 12$, reduce first to
$10\cdot 5 = 50 \equiv 2 \pmod{12}$, avoiding the larger product $374$ entirely.

### Pitfalls

- Congruence is *not* equality; you may replace a number by any representative of its class for
  $+$ and $\times$, but the replaced numbers are genuinely different integers.
- Compatibility covers addition, subtraction, and multiplication — **division is different**. You
  cannot in general cancel a common factor: $6 \equiv 2 \pmod 4$ but "dividing by $2$" gives the
  false $3 \equiv 1 \pmod 4$. (Cancellation needs the factor to be invertible mod $m$ — a later node.)
- The modulus must satisfy $m \ge 1$. Mod $1$, everything is congruent (one class); that's degenerate
  but consistent.
- Exponents live in a *different* world: $a \equiv a' \pmod m$ does **not** let you reduce an exponent
  mod $m$. Reducing the base is fine; reducing the exponent needs Fermat/Euler.

:::
:::

## Connections

Prereqs: the remainder idea (basic congruence) and the division algorithm, which supplies the $m$
canonical representatives. This node is the grammar of number theory: once $+$ and $\times$ respect
classes, you can compute in the finite world $\{0,1,\dots,m-1\}$. It unlocks modular inverses (when
can you divide?), Bézout's identity, and Fermat's little theorem. Recognition trigger: any problem
where you only care about remainders, last digits, or "what day of the week."
