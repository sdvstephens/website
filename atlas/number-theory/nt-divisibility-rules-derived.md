For $2538$, add the digits: $2 + 5 + 3 + 8 = 18$, divisible by $9$ — and sure enough $2538 =
9 \cdot 282$. There is a matching trick for $11$ using an *alternating* sum. These rules are drilled
into every schoolchild, but why should the digits alone, torn from their place values, decide
divisibility by $9$ or $11$?

## Discovery

1. Compute $10^0, 10^1, 10^2, 10^3$ modulo $9$ — that is, find each one's remainder on division by
   $9$. What pattern do the powers of $10$ settle into modulo $9$?
2. Write $2538 = 2\cdot 10^3 + 5\cdot 10^2 + 3\cdot 10 + 8$ using its base-$10$ expansion. Replace
   each power $10^i$ by the remainder you found in step 1. What simple expression in the four digits
   is $2538$ congruent to modulo $9$?
3. Now redo step 1 modulo $11$: compute $10^0, 10^1, 10^2, 10^3$ modulo $11$ (watch what happens to
   $10$). Substitute into the expansion of $2538$ again. Which combination of the digits — and with
   what signs — does $2538$ reduce to modulo $11$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Write $n = \sum_{i=0}^{k} d_i 10^i$ in base $10$. Then
$$n \equiv d_0 + d_1 + \cdots + d_k \pmod 9 \quad(\text{and } \pmod 3),\qquad
n \equiv d_0 - d_1 + d_2 - \cdots \pmod{11}.$$
Consequently $9 \mid n$ iff $9$ divides the **digit sum**; $3 \mid n$ iff $3$ divides the digit sum;
and $11 \mid n$ iff $11$ divides the **alternating digit sum** $\sum (-1)^i d_i$. The rules exist
because $10 \equiv 1 \pmod 9$ (and $\pmod 3$) while $10 \equiv -1 \pmod{11}$.

### Proof

*Powers of ten mod $9$ and $3$.* For each $i \ge 0$, the number $10^i - 1$ is a string of $i$ nines,
$\underbrace{99\cdots9}_{i} = 9\cdot \underbrace{11\cdots1}_{i}$, hence a multiple of $9$ (and of $3$,
since $3 \mid 9$). So $9 \mid (10^i - 1)$, i.e. $10^i \equiv 1 \pmod 9$ (`nt-congruence-intro`).
Then, using the base-$10$ expansion (`nt-base-representation`),
$$n - (d_0 + d_1 + \cdots + d_k) = \sum_{i=0}^{k} d_i\,(10^i - 1),$$
a sum of multiples of $9$, hence a multiple of $9$. Therefore $n \equiv \sum_i d_i \pmod 9$, and the
same computation mod $3$ gives $n \equiv \sum_i d_i \pmod 3$. So $9 \mid n \iff 9 \mid \sum d_i$, and
likewise for $3$.

*Powers of ten mod $11$.* Claim $11 \mid \big(10^i - (-1)^i\big)$ for all $i \ge 0$. Induct: for
$i = 0$, $10^0 - 1 = 0$; assume $11 \mid \big(10^i - (-1)^i\big)$. Then
$$10^{i+1} - (-1)^{i+1} = 10\cdot 10^i + (-1)^i = 10\big(10^i - (-1)^i\big) + 10(-1)^i + (-1)^i
= 10\big(10^i - (-1)^i\big) + 11(-1)^i,$$
and both terms are multiples of $11$, completing the induction. Thus $10^i \equiv (-1)^i \pmod{11}$,
and
$$n - \sum_{i=0}^{k} (-1)^i d_i = \sum_{i=0}^{k} d_i\big(10^i - (-1)^i\big)$$
is a sum of multiples of $11$. Hence $n \equiv \sum_i (-1)^i d_i \pmod{11}$, so $11 \mid n$ iff $11$
divides the alternating digit sum. $\blacksquare$

### Worked Instance

Resolve the Hook with $n = 2538$. Digit sum $2 + 5 + 3 + 8 = 18$, and $9 \mid 18$, so $9 \mid 2538$
— indeed $2538 = 9 \cdot 282$. The alternating sum, starting from the units digit, is
$8 - 3 + 5 - 2 = 8$; since $11 \nmid 8$, we get $11 \nmid 2538$ (and in fact $2538 = 11\cdot 230 + 8$,
so $2538 \equiv 8 \pmod{11}$, exactly the alternating sum). The rules deliver not just yes/no but the
whole remainder.

### Pitfalls

- **The $11$ signs start at the units digit.** The alternating sum is $d_0 - d_1 + d_2 - \cdots$
  (plus on the units place); flipping the starting sign flips the answer's sign — harmless for the
  divisibility test but wrong for the remainder.
- **$3$ and $9$ use the plain sum; $11$ uses the alternating sum.** Mixing them up is the classic
  error.
- **The rule reports the remainder, not just divisibility.** $n \bmod 9$ equals the digit sum mod
  $9$, which is why "casting out nines" checks arithmetic.
- **This is a base-$10$ fact.** In base $b$, the same argument gives a digit-sum rule for $b - 1$ and
  an alternating-sum rule for $b + 1$; the special primes change with the base.

:::
:::

## Connections

These schoolroom rules are congruence (`nt-congruence-intro`) applied to the base-$10$ expansion
(`nt-base-representation`): the whole trick is that $10 \equiv 1 \pmod 9$ and $10 \equiv -1
\pmod{11}$. The digit-sum rule is the mechanism behind casting out nines
(`found-casting-out-nines`) and the elementary digit-sum node (`found-digitsum-3-9`); the same
$10 \equiv \pm 1$ idea generalizes to any base. Recognition trigger: "is $n$ divisible by $3$, $9$,
or $11$?" or "find $n \bmod 9$" — sum the digits (or alternate them).

## History

The classic shortcuts — a number is divisible by $9$ when its digit sum is, by $11$ by an alternating sum — descend from the ancient practice of "casting out nines," a checking method known to Indian mathematicians and transmitted through al-Khwarizmi and the Islamic world into medieval Europe. For centuries these were folklore recipes justified only by example. Blaise Pascal, around $1654$ in a short work often titled *De numeris multiplicibus*, was the first to give a general theory, showing how to build a divisibility test for any divisor from the remainders of the powers of the base. Gauss's congruence notation ($1801$) later made the whole subject transparent: each rule is just the statement that a power of $10$ is congruent to a small number modulo the divisor. The rules mattered as practical hand-computation aids and, more deeply, as everyone's first encounter with deriving results from modular arithmetic rather than memorizing them.
