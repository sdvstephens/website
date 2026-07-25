Add the digits of $12{,}345$: you get $15$. Add the digits of $918$: you get $18$. Both
original numbers are divisible by $3$; both digit sums are too. Coincidence? Try to break it.

## Discovery

1. Write $3{,}472$ in expanded form: $3\cdot 1000 + 4\cdot 100 + 7\cdot 10 + 2$.
2. What is $10 \bmod 3$? What is $100 \bmod 3$? $1000 \bmod 3$? Notice anything?
3. Replace each power of $10$ by its remainder mod $3$ in the expanded form. What expression
   are you left with, mod $3$?
4. State a rule for when $3$ divides a number. Does the same argument work for $9$? For $2$?
   (Why does it fail for $2$?)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A base-$10$ integer is divisible by $3$ (resp. $9$) if and only if the sum of its digits is
divisible by $3$ (resp. $9$). More precisely, $n \equiv (\text{sum of digits of } n) \pmod 9$,
and hence also $\pmod 3$.

### Proof

Write $n = \sum_i d_i\cdot 10^i$. Since $10 \equiv 1 \pmod 9$, we have $10^i \equiv 1^i = 1
\pmod 9$ for all $i$. Therefore $n = \sum_i d_i\cdot 10^i \equiv \sum_i d_i\cdot 1 = \sum_i d_i
\pmod 9$. Reducing further mod $3$ gives the same for $3$, since $3 \mid 9$. The rule fails for
$2$ because $10 \equiv 0 \pmod 2$, not $1$ — so only the last digit survives, which is exactly
the even-ness rule.

### Worked Instance

$12{,}345$: digit sum $1+2+3+4+5 = 15$. Since $3 \mid 15$, $3 \mid 12{,}345$ (indeed
$12{,}345 = 3\cdot 4{,}115$). Since $9 \nmid 15$, $9 \nmid 12{,}345$.

### Pitfalls

- The rule is base-dependent: it works because $10 \equiv 1 \pmod 9$. In base $b$ it becomes a
  rule about $b-1$.
- $3$ and $9$ work; $6$ does NOT get a clean digit-sum rule ($6 = 2\cdot 3$ mixes a last-digit
  rule and a digit-sum rule — you need both).

:::
:::

## Connections

Prereqs: place value, basic congruence. This is the first instance of the deep move
"replace a base by its residue mod $m$," which recurs constantly in number theory
(unlocks: casting out nines, the alternating-sum rule for $11$, and general modular
arithmetic). Recognition trigger: any "sum of digits" condition is secretly a statement
mod $9$.

## History

The rule that a number is divisible by 3 or by 9 exactly when its digit sum is follows from the fact that $10\equiv 1\ (\mathrm{mod}\ 9)$, so every power of ten leaves remainder 1. This was known to Indian mathematicians and was expounded in the Islamic world, and it underlies the ancient checking method of "casting out nines." Fibonacci described these ideas in the Liber Abaci (1202), and they were standard in medieval European reckoning. The rule is a clean early example of modular reasoning, later formalized by Gauss's congruences in 1801. Its usefulness for verifying hand calculations kept it in every arithmetic textbook for centuries. ANABASIS derives it from the behavior of powers of ten modulo 9.
