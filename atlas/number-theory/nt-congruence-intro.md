On a $12$-hour clock, $3$ o'clock and $15$ o'clock are the same position — they differ by $12$. We
write $15 \equiv 3 \pmod{12}$. Something similar ties $17$ to $5$, and $29$ to $5$, and even $-7$ to
$5$. When should two different integers count as "the same" for a fixed modulus, and what makes that
sameness behave like equality?

## Discovery

1. Fix $m = 12$. For each of $17, 29, -7, 30$, compute (that number) $- 5$ and check whether $12$
   divides the result. Which numbers pass? Write "$a$ is congruent to $b$ modulo $m$" as a single
   divisibility statement about $a - b$.
2. Separately, divide $17$ by $12$ and divide $5$ by $12$ and compare their remainders; do the same
   for $29$ and $5$. Do the numbers that passed the test in step 1 all share a remainder with $5$?
   Tie your divisibility condition to remainders.
3. Test three would-be "equality" properties of the relation you defined: is $a$ always congruent to
   itself? if $a$ is congruent to $b$, must $b$ be congruent to $a$? if $a$ is congruent to $b$ and
   $b$ to $c$, must $a$ be congruent to $c$? Use only "$m$ divides the difference."

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an integer modulus $m \ge 1$. Integers $a$ and $b$ are **congruent modulo $m$**, written
$$a \equiv b \pmod m,$$
when $m \mid (a - b)$. Equivalently, $a$ and $b$ leave the **same remainder** on division by $m$.
Congruence modulo $m$ is an **equivalence relation**: it is reflexive ($a \equiv a$), symmetric
($a \equiv b \Rightarrow b \equiv a$), and transitive ($a \equiv b$ and $b \equiv c \Rightarrow
a \equiv c$).

### Proof

*Equivalence relation.* **Reflexive:** $a - a = 0 = m\cdot 0$, so $m \mid (a-a)$ and $a \equiv a$.
**Symmetric:** if $m \mid (a-b)$ then $m \mid -(a-b) = b - a$, so $b \equiv a$. **Transitive:** if
$m \mid (a-b)$ and $m \mid (b-c)$, then $m$ divides their sum $(a-b) + (b-c) = a - c$ (the sum rule
for divisibility, `nt-divisibility-elem`), so $a \equiv c$.

*Same-remainder characterization.* By the division algorithm (`ari-division`) write
$a = q_1 m + r_1$ and $b = q_2 m + r_2$ with $0 \le r_1, r_2 \lt m$. Subtracting,
$$a - b = (q_1 - q_2)m + (r_1 - r_2).$$
Since $(q_1 - q_2)m$ is a multiple of $m$, we get $m \mid (a-b)$ if and only if $m \mid (r_1 - r_2)$.
But $|r_1 - r_2| \lt m$, so $m \mid (r_1 - r_2)$ forces $r_1 - r_2 = 0$, i.e. $r_1 = r_2$. Hence
$a \equiv b \pmod m$ exactly when $a$ and $b$ share a remainder. $\blacksquare$

### Worked Instance

Take $m = 12$ and $b = 5$. Then $17 \equiv 5$ since $17 - 5 = 12$ and $12 \mid 12$; likewise
$29 \equiv 5$ ($29 - 5 = 24 = 2\cdot 12$) and $-7 \equiv 5$ ($-7 - 5 = -12$). Each of $17, 29, -7$
leaves remainder $5$ on division by $12$, matching $5$ itself. By contrast $30 \not\equiv 5$: the
difference $30 - 5 = 25$ is not a multiple of $12$ (and $30 = 2\cdot 12 + 6$ has remainder $6$, not
$5$). This is exactly the clock intuition made exact.

### Pitfalls

- **Congruence is not equality.** $17 \equiv 5 \pmod{12}$ does not make $17$ and $5$ equal integers;
  they merely fall in the same class for this modulus.
- **The divides goes the right way.** The condition is $m \mid (a - b)$ — the modulus divides the
  difference — not $(a-b) \mid m$.
- **Same remainder needs the same modulus.** "$17$ and $5$ agree mod $12$" says nothing about how
  they compare mod $7$; the modulus is part of the statement.
- **Negative numbers still have a remainder in $[0,m)$.** $-7 = (-1)\cdot 12 + 5$, so its remainder
  mod $12$ is $5$, not $-7$ and not $-1$.

:::
:::

## Connections

Congruence packages the "same remainder" idea from the division algorithm (`ari-division`) as a
divisibility statement (`nt-divisibility-elem`), and being an equivalence relation is what lets it
sort $\ZZ$ into residue classes (`nt-residues`). Once you know it also respects $+$ and $\times$
(`nt-mod-operations`), it becomes the working language of number theory, matured at the competition
level into modular arithmetic as an equivalence relation (`nt-mod-arithmetic`). Recognition trigger:
any problem about remainders, "last digit," clock/calendar cycles, or "$m$ divides $a - b$" is a
congruence in disguise.

## History

Reasoning about remainders is ancient, but the clean language of congruence is the invention of one man: Carl Friedrich Gauss. In his *Disquisitiones Arithmeticae* of $1801$, written when he was in his early twenties, Gauss introduced the notation $a \equiv b \pmod{m}$ and the very word "congruent" for numbers leaving the same remainder on division by $m$. This deliberately mirrored the "$=$" sign because Gauss recognized that congruence obeys almost the same algebra as equality, letting him replace clumsy talk of divisibility with a fluent calculus. The idea unified scattered earlier results of Fermat and Euler on remainders and powers into a single systematic theory. It mattered because congruence became the fundamental language of number theory, the setting for everything from divisibility rules and the Chinese Remainder Theorem to modern cryptography.
