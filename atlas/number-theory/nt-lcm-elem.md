Walk out the multiples of $4$ and of $6$ and watch for the first collision: $4, 8, 12$ against
$6, 12$ — they meet at $12$, the **least common multiple**. Now notice something: $4 \cdot 6 = 24 =
12 \cdot 2$, and that $2$ is exactly $\gcd(4, 6)$. Is $\gcd \cdot \operatorname{lcm} = $ product a
one-off, or a law?

## Discovery

1. List the first several *positive* multiples of $4$ and of $6$. What is the smallest number that
   shows up on both lists?
2. For each pair $(4, 6)$, $(6, 9)$, $(10, 15)$, compute the greatest common divisor, the least
   common multiple, and the plain product $ab$. Put $\gcd \cdot \operatorname{lcm}$ beside $ab$ in a
   table. What relation leaps out of the two columns?
3. Take a common multiple of $4$ and $6$ that is *not* the smallest — say $24$, or $36$ — and divide
   it by the least common multiple $12$. Is the quotient a whole number every time? What does that
   hint about how *all* the common multiples are arranged?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **least common multiple** $\lcm(a, b)$ of positive integers $a, b$ is the smallest positive
integer that is a multiple of both. Every common multiple of $a$ and $b$ is itself a multiple of
$\lcm(a, b)$. And the two "common" quantities multiply to the product:
$$\gcd(a, b) \cdot \lcm(a, b) = ab.$$
Equivalently $\lcm(a, b) = \dfrac{ab}{\gcd(a, b)}$.

### Proof

Write $d = \gcd(a, b)$ and $\ell = \lcm(a, b)$. The positive common multiples of $a, b$ form a
nonempty set (it contains $ab$), so a least one $\ell$ exists.

*Step 1: $\ell$ divides every common multiple.* Let $M$ be any common multiple of $a$ and $b$.
Divide $M$ by $\ell$ with remainder: $M = q\ell + r$ with $0 \le r \lt \ell$. Since $a \mid M$ and
$a \mid \ell$, the linear-combination rule gives $a \mid (M - q\ell) = r$; likewise $b \mid r$. So
$r$ is a common multiple of $a$ and $b$ with $0 \le r \lt \ell$. If $r \gt 0$ it would be a positive
common multiple smaller than $\ell$, contradicting leastness. Hence $r = 0$ and $\ell \mid M$.

*Step 2: identify the constant $k = ab/\ell$.* Both $ab$ and $ab/d$ are common multiples:
$ab = a \cdot b = b \cdot a$, and $ab/d = a(b/d) = b(a/d)$ with $a/d, b/d$ integers (as $d \mid a$,
$d \mid b$). By Step 1, $\ell \mid ab$; write $ab = \ell k$. Also by Step 1, $\ell \mid (ab/d)$, so
the quotient $(ab/d)/\ell = k/d$ is an integer, giving $d \mid k$, hence $k \ge d$.

*Step 3: $k$ is a common divisor of $a$ and $b$.* Since $a \mid \ell$, write $\ell = a u$; then
$ab = \ell k = auk$, so $b = uk$ and $k \mid b$. Symmetrically $\ell = b v$ gives $a = vk$, so
$k \mid a$. Thus $k$ is a common divisor of $a$ and $b$, whence $k \le d$.

Combining Steps 2 and 3, $d \le k$ and $k \le d$, so $k = d$. Therefore $ab = \ell k = \ell d$, that
is $\gcd(a, b) \cdot \lcm(a, b) = ab$. $\blacksquare$

### Worked Instance

For $4$ and $6$: $\gcd(4, 6) = 2$, and the multiples first meet at $\lcm(4, 6) = 12$. Check the law:
$\gcd \cdot \lcm = 2 \cdot 12 = 24 = 4 \cdot 6$. The relation also *computes* the lcm without listing
multiples: for $10$ and $15$, $\gcd = 5$, so
$$\lcm(10, 15) = \frac{10 \cdot 15}{\gcd(10, 15)} = \frac{150}{5} = 30,$$
and indeed $10, 20, 30$ meets $15, 30$ first at $30$.

### Pitfalls

- **Least, and positive.** $\lcm(a, b)$ is the *smallest positive* common multiple; $0$ is a common
  multiple of everything but is never the lcm.
- **The product law is for positive integers.** $\gcd \cdot \lcm = ab$ as stated assumes $a, b \gt
  0$; with signs, use $|ab|$.
- **Do not swap gcd and lcm.** The lcm is at least as big as each number; the gcd is at most as big
  as each. $\lcm(a, b) \ge \max(a, b) \ge \min(a, b) \ge \gcd(a, b)$.
- **$\lcm(a,b) = ab$ only when coprime.** If $\gcd(a, b) = 1$ the product law collapses to
  $\lcm = ab$; otherwise the shared factor makes the lcm strictly smaller than $ab$.

:::
:::

## Connections

The least common multiple gathers the common multiples of `nt-multiples-elem` and picks the smallest,
using the divisibility rules of `nt-divisibility-elem` to prove it divides all the others. It is the
mirror of the greatest common divisor (`nt-gcd-elem`), bound to it by $\gcd \cdot \lcm = ab$, and it
is the number under a sum of fractions (the least common denominator). Recognition trigger: any
"when do the cycles line up again?", "smallest number divisible by both," or "least common
denominator" is an lcm question.

## History

The least common multiple grew out of two very practical needs of antiquity: adding fractions with unlike denominators and predicting when repeating cycles — festivals, planetary periods, calendar counts — would coincide again. Euclid treated common multiples in Book VII of the *Elements* (around $300$ BC) alongside common divisors, and the relationship binding the two, that the product of the gcd and lcm equals the product of the numbers, follows from his framework. Chinese and Indian astronomers, including Brahmagupta in the seventh century, used least common multiples to synchronize astronomical cycles. The idea is elementary but indispensable, and it reappears wherever periods must be reconciled. It mattered because it is the natural partner of the gcd and the key to combining rhythms, from arithmetic with fractions to the Chinese Remainder Theorem's simultaneous congruences.
