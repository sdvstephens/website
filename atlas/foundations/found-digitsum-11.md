Is $918{,}082$ divisible by $11$? Add every other digit and subtract the rest — $(9 + 8 + 8) - (1 + 0 + 2) = 22$ — and since $11 \mid 22$, yes. The digit-sum trick for $3$ and $9$ added all digits equally; for $11$ something flips signs. Why?

## Discovery

1. You already know the digit-sum rule for $9$ hinges on $10 \equiv 1 \pmod 9$, so every $10^i \equiv 1$. For $11$, compute $10 \bmod 11$ first. It is close to $11$ — write $10$ as $11$ minus something to see what $10$ is congruent to mod $11$.
2. Now find $10^2 \bmod 11$, then $10^3 \bmod 11$. Use the value of $10 \bmod 11$ from step 1 and multiply. What simple pattern do the powers $10^0, 10^1, 10^2, 10^3, \dots$ follow mod $11$?
3. Write a number $n = \sum_i d_i 10^i$ and replace each $10^i$ by its value mod $11$ from step 2. What combination of the digits are you left with, mod $11$? Notice which digits keep their sign and which flip.
4. State a test for divisibility by $11$ in terms of the digits. Does it matter whether you start the alternating signs from the units digit or the leading digit? (Try both on a small example and see if the *divisibility conclusion* changes.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a base-ten integer $n = \sum_{i=0}^{k} d_i 10^i$ with digits $d_i$,
$$n \equiv \sum_{i=0}^{k} (-1)^i d_i = d_0 - d_1 + d_2 - d_3 + \cdots \pmod{11}.$$
Hence $11 \mid n$ if and only if the **alternating digit sum** — units minus tens plus hundreds minus $\cdots$ — is divisible by $11$. Equivalently, the difference between the sum of digits in odd positions and the sum in even positions is a multiple of $11$.

### Proof

The engine is $10 \equiv -1 \pmod{11}$, which holds because $10 - (-1) = 11$ is divisible by $11$. Raising to powers and using that congruence respects multiplication,
$$10^i \equiv (-1)^i \pmod{11} \quad\text{for all } i \ge 0.$$
Therefore, reducing the place-value expansion term by term,
$$n = \sum_{i=0}^{k} d_i\, 10^i \equiv \sum_{i=0}^{k} d_i (-1)^i = d_0 - d_1 + d_2 - \cdots \pmod{11}.$$
So $n \equiv 0 \pmod{11}$ exactly when the alternating digit sum $\sum_i (-1)^i d_i \equiv 0 \pmod{11}$, i.e. when $11$ divides that alternating sum.

Starting the alternation from the leading digit instead only multiplies the whole alternating sum by $\pm 1$ (an overall sign), and $11 \mid S \iff 11 \mid (-S)$, so the divisibility conclusion is unchanged. $\blacksquare$

### Worked Instance

$918{,}082$. Its digits, from the units up, are $d_0=2, d_1=8, d_2=0, d_3=8, d_4=1, d_5=9$. The alternating sum is
$$d_0 - d_1 + d_2 - d_3 + d_4 - d_5 = 2 - 8 + 0 - 8 + 1 - 9 = -22.$$
Since $11 \mid -22$, we get $11 \mid 918{,}082$ (indeed $918{,}082 = 11\cdot 83{,}462$). Grouping the other way — $(9+8+8) - (1+0+2) = 22$ — differs only in sign, as promised, and gives the same verdict. This resolves the Hook.

### Pitfalls

- The signs *alternate*; you do not simply add all digits (that is the rule for $9$). Confusing the two is the classic error.
- The alternating sum can be negative; that is fine — check divisibility of its absolute value, and remember a result of $0$ also counts ($11 \mid 0$).
- Which end you start from flips the overall sign but never the answer; don't panic if a friend's sum is the negative of yours.
- This is base-ten-specific: it works because $10 \equiv -1 \pmod{11}$, i.e. the base is one less than the modulus.

:::
:::

## Connections

Prereqs: the digit-sum rule for $3$ and $9$, whose central move — "replace the base by its residue" — is reused here with residue $-1$ instead of $1$. This node completes the small-divisor picture: last digit for $2,5,10$ (divisors of the base), all-plus digit sum for $3,9$ (base $\equiv 1$), alternating digit sum for $11$ (base $\equiv -1$). Recognition trigger: divisibility by $11$, or any modulus one more than the base, calls for alternating signs. It generalizes to a base-$b$ rule for $b+1$.

## History

The divisibility test for 11 uses the alternating sum of the digits, because $10\equiv -1\ (\mathrm{mod}\ 11)$, so successive powers of ten alternate between $+1$ and $-1$. Like the tests for 3 and 9, it emerged from the place-value tradition and was known to medieval Islamic and European reckoners; it appears in the arithmetic literature that grew out of Fibonacci's Liber Abaci (1202). The rule became fully transparent once Gauss's congruence notation (1801) made the sign alternation explicit. Such tests were practical tools before mechanical calculation and remain a favorite illustration of modular arithmetic. No individual is credited; the rule is a natural corollary of positional notation. ANABASIS presents it alongside the tests for 3 and 9 as an application of modular arithmetic.
