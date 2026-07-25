If today is Thursday, what day is it in $100$ days? You do not count $100$ days one by one — you notice that days repeat every $7$, and $100$ leaves a remainder of $2$ after dividing by $7$. Two days past Thursday is Saturday. That shortcut *is* modular arithmetic.

## Discovery

1. Divide $17$ by $5$: you get $3$ with something left over. What is the leftover, and how do you write $17$ as "$5$ times something, plus the leftover"?
2. Do the same for $32$ and for $47$, dividing each by $5$. Compare the three leftovers. What do $17$, $32$, and $47$ have in common when you look only at the remainder?
3. Take the difference $32 - 17$. Is it a multiple of $5$? Take $47 - 32$. Is that a multiple of $5$? State the connection between "$a$ and $b$ leave the same remainder mod $5$" and "$5$ divides $a - b$."
4. We write $a \equiv b \pmod m$ to mean $a$ and $b$ leave the same remainder when divided by $m$. Using your answer to step 3, give a second description of $a \equiv b \pmod m$ purely in terms of divisibility of a difference. Which description is easier to *check*, and which is easier to *reason with*?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an integer modulus $m \ge 1$. For integers $a$ and $b$ we say $a$ is **congruent to** $b$ **modulo** $m$, written
$$a \equiv b \pmod m,$$
to mean either equivalently: (i) $a$ and $b$ leave the same remainder on division by $m$; or (ii) $m$ divides the difference $a - b$, i.e. $a - b = mk$ for some integer $k$. Every integer is congruent mod $m$ to exactly one of $0, 1, \dots, m-1$ — its remainder. Congruence lets you replace any number by a small representative and compute with those instead.

### Proof

We prove the two descriptions (i) and (ii) name the same relation. Write, using division with remainder, $a = mq_1 + r_1$ and $b = mq_2 + r_2$ with $0 \le r_1, r_2 \le m-1$ (this quotient–remainder split, and the fact that the remainder lies in $[0,m-1]$, is established fully in `found-division-algorithm`; here we use it).

$(\text{i}) \Rightarrow (\text{ii})$: Suppose $r_1 = r_2$. Then $a - b = m(q_1 - q_2) + (r_1 - r_2) = m(q_1 - q_2)$, which is a multiple of $m$. So $m \mid a-b$.

$(\text{ii}) \Rightarrow (\text{i})$: Suppose $m \mid a - b$. Now $a - b = m(q_1 - q_2) + (r_1 - r_2)$, so $r_1 - r_2 = (a-b) - m(q_1-q_2)$ is a difference of two multiples of $m$, hence itself a multiple of $m$. But $-(m-1) \le r_1 - r_2 \le m-1$, and the only multiple of $m$ in that range is $0$. Therefore $r_1 = r_2$.

The two descriptions coincide. That each integer is congruent to exactly one of $0,\dots,m-1$ is immediate from (i): its remainder is the unique such value. $\blacksquare$

### Worked Instance

What day is $100$ days after Thursday? Days repeat with period $7$, so we work mod $7$. Divide: $100 = 7\cdot 14 + 2$, so $100 \equiv 2 \pmod 7$. Thus $100$ days ahead is the same as $2$ days ahead: Thursday $\to$ Friday $\to$ Saturday. The answer is **Saturday**, obtained by replacing the unwieldy $100$ with its remainder $2$ — exactly the "small representative" idea.

### Pitfalls

- $a \equiv b \pmod m$ is a statement about a *difference* being divisible, not about $a$ or $b$ separately being divisible. $17 \equiv 32 \pmod 5$ even though neither is a multiple of $5$.
- The remainder is taken in $\{0,1,\dots,m-1\}$; do not let it be negative. $-3 \equiv 2 \pmod 5$, not $-3$.
- Congruence needs a modulus. "$a \equiv b$" with no "$\pmod m$" is meaningless.
- $m \mid a-b$ and $m \mid b-a$ say the same thing (multiplying $k$ by $-1$); direction does not matter.

:::
:::

## Connections

Prereqs: place value (numbers as concrete quantities to divide). This node introduces the notation and the pivotal equivalence "same remainder $\iff$ divides the difference," the workhorse of all number theory. It feeds directly into the digit-sum rules (`found-digitsum-3-9`), parity as the case $m=2$ (`found-parity`), and the full theory of modular arithmetic as an equivalence relation (`nt-mod-arithmetic`), where congruences learn to be added and multiplied. Recognition trigger: anything periodic — clocks, calendars, last digits, cycles — is a congruence in disguise.

## History

Modular arithmetic — treating numbers as equal when they leave the same remainder — was used informally for calendar and astronomical calculations in many ancient cultures, but it became a precise theory with Carl Friedrich Gauss. In his Disquisitiones Arithmeticae (1801), written when he was in his early twenties, Gauss introduced the congruence notation $a\equiv b\ (\mathrm{mod}\ n)$ and developed its algebra systematically. This single idea reorganized number theory and remains fundamental to cryptography, coding theory, and computer science. Earlier mathematicians such as Fermat and Euler had proved key results, like Fermat's little theorem, that are naturally expressed in this language. Gauss's congruences turned scattered observations about remainders into a coherent subject. ANABASIS builds the basics of modular arithmetic on this Gaussian foundation.
