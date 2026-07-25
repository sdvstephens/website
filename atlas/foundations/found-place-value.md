The string $205$ can mean two hundred five, or — if you are a computer thinking in base $2$ — the number thirteen, or something else again in base $6$. The same three symbols name different quantities. What exactly is the rule that turns a string of digits into a number?

## Discovery

1. Take the string $3427$ read in the usual base ten. Say out loud what each digit "is worth": the $7$ is worth $7$ ones, the $2$ is worth $2$ tens, the $4$ is worth $4$ hundreds, the $3$ is worth $3$ thousands. Write $3427$ as a sum of four terms using these worths.
2. Look at the worths $1, 10, 100, 1000$. Each is the previous one times $10$. Write each worth as a power of $10$: which power goes with the units digit, which with the tens digit, and so on? (Careful with the units place: what power of $10$ equals $1$?)
3. Now suppose you only had the symbols $0$ and $1$ and you grouped by twos instead of tens. Reading $1101$ this way, the worths from the right are $1, 2, 4, 8$. Write $1101$ (base two) as a sum of four terms, and total it in ordinary base ten.
4. A digit string $d_k d_{k-1}\cdots d_1 d_0$ is read in base $b$. Write down, in a single formula, the number it names. Which digit multiplies $b^0$, and which multiplies $b^k$? What restriction must each digit $d_i$ obey so the writing is unambiguous?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an integer base $b \ge 2$. A finite string of digits $d_k d_{k-1}\cdots d_1 d_0$, where each digit satisfies $0 \le d_i \le b-1$, denotes the integer
$$n = \sum_{i=0}^{k} d_i\, b^i = d_k b^k + d_{k-1} b^{k-1} + \cdots + d_1 b + d_0.$$
The digit $d_i$ sits in the "$b^i$ place." Position carries the meaning: the same digit contributes $d_i b^i$, an amount that grows by a factor of $b$ each step to the left. Every nonnegative integer has exactly one such representation with $d_k \ne 0$ (a fact proved in `found-division-algorithm`).

### Proof

We must show the formula $n = \sum_i d_i b^i$ is the correct reading, i.e. that grouping into powers of $b$ recovers $n$, and that digits are constrained to $0 \le d_i \le b-1$.

That the sum equals $n$ is the *definition* of what the positional string means, so the content to prove is why the digit bound $0 \le d_i \le b-1$ is forced if the representation is to be unique. Suppose some digit were allowed to reach $b$. Then in the $b^i$ place the value $b\cdot b^i = b^{i+1}$ is exactly one unit of the next place up. Concretely, in base ten the string "$(10)3$" meaning $10$ tens and $3$ ones equals $103$, which is *also* written $103$ — two strings, one number. To make the writing a bijection between strings (with nonzero leading digit) and integers, we must forbid a digit from equalling or exceeding $b$; hence $0 \le d_i \le b-1$.

Conversely these bounds suffice to name every value in a block: as $(d_k,\dots,d_0)$ ranges over all tuples with $0\le d_i\le b-1$ and $k$ fixed, the sums $\sum d_i b^i$ range over $0,1,\dots,b^{k+1}-1$ without repetition. Indeed the largest such sum is $\sum_{i=0}^{k}(b-1)b^i = (b-1)\cdot\frac{b^{k+1}-1}{b-1} = b^{k+1}-1$, and the smallest is $0$; counting, there are $b^{k+1}$ tuples and $b^{k+1}$ target values, and the map is onto (any $n$ in range is reached by repeatedly extracting the top place), hence a bijection. So each integer has one representation. $\blacksquare$

### Worked Instance

Read $205$ in three bases.
- Base ten: $2\cdot 10^2 + 0\cdot 10 + 5 = 205$.
- Base six: $2\cdot 6^2 + 0\cdot 6 + 5 = 72 + 0 + 5 = 77$.
- The binary string $1101$: $1\cdot 8 + 1\cdot 4 + 0\cdot 2 + 1\cdot 1 = 13$.

Same symbols, different bases, different numbers — because the *place values* $b^i$ change with $b$. This is why $205$ has no single meaning until the base is named.

### Pitfalls

- The units digit multiplies $b^0 = 1$, not $b^1$. Off-by-one in the exponent is the classic slip.
- Digits must stay in $0 \le d_i \le b-1$: base two uses only $0,1$; a "$2$" in a binary string is meaningless.
- Leading zeros do not change the value but do break uniqueness of the *string*; we require the top digit $d_k \ne 0$ for a canonical form (except for the number $0$ itself).
- "Base $b$" needs $b \ge 2$; there is no base one positional system of this kind.

:::
:::

## Connections

Prereqs: none — this is bedrock. Place value is the lens through which every later divisibility fact is seen: writing $n = \sum d_i b^i$ and then reducing each $b^i$ modulo some $m$ is the single move behind the digit-sum rules (`found-digitsum-3-9`, `found-digitsum-11`), the last-digit tests (`found-div-2-5-10`), and casting out nines. It also sets up the division algorithm, which proves the representation is unique. Recognition trigger: any problem that mentions "digits," "last digit," or a specific base is really a problem about $\sum d_i b^i$.

## History

Place-value notation, in which a digit's position determines its weight, is one of the most consequential inventions in human history. The Babylonians used a base-60 positional system as early as 2000 BC but lacked a true zero, leaving ambiguities. The decimal place-value system with a genuine zero was developed in India; Brahmagupta (628 AD) gave rules for computing with zero and negatives, and the system was transmitted to the Islamic world by al-Khwarizmi (c. 825) and thence to Europe by Leonardo of Pisa (Fibonacci) in his Liber Abaci (1202). This compact notation made arithmetic algorithms vastly easier than Roman numerals or counting boards. Every divisibility rule and digit trick downstream depends on it. ANABASIS treats place value as the foundation of written arithmetic.
