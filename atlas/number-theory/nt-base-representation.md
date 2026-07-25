The string $1024$ is shorthand: it means $1\cdot 10^3 + 0\cdot 10^2 + 2\cdot 10 + 4$. A computer
stores the same quantity as $10000000000$ — the very same number, written with powers of $2$
instead of $10$. Pick any base you like and every whole number gets exactly one such spelling.
Why does a base-$b$ expansion always exist, and why is it the *only* one?

## Discovery

1. Fix the base $b = 3$ and take $n = 47$. Write out the powers $3^0, 3^1, 3^2, 3^3$. Now build
   $47$ greedily: grab the largest power of $3$ that fits, use as many copies of it as you can
   without overshooting, subtract, and repeat on what remains. Record how many copies of each
   power you spent.
2. Look at the counts you recorded in step 1. Is any single count as large as $3$? Argue why the
   greedy rule can never leave a count of $3$ or more for a given power $3^i$ — what could you do
   with three copies of $3^i$ if you had them?
3. Suppose two different strings of counts (each count in the range you found in step 2) produced
   the *same* number $n$. Subtract one expansion from the other and look at the lowest power where
   the two strings disagree. Factor that power out. What does the range of a single count force,
   and what contradiction appears?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an integer base $b \ge 2$. Every natural number $n$ has a **base-$b$ representation**
$$n = d_k b^k + d_{k-1} b^{k-1} + \cdots + d_1 b + d_0 = \sum_{i=0}^{k} d_i b^i,$$
where each **digit** $d_i$ satisfies $0 \le d_i \le b-1$ and (for $n \ge 1$) the leading digit
$d_k \ne 0$. This representation is **unique**: no number has two different digit strings. We
write $n = (d_k d_{k-1} \cdots d_0)_b$; ordinary decimal is the case $b = 10$.

### Proof

*Existence, by strong induction on $n$.* For $n = 0$ take the empty string (all digits zero). Fix
$n \ge 1$ and assume every smaller natural number has a base-$b$ representation. The powers
$b^0, b^1, b^2, \dots$ grow without bound, so there is a largest exponent $k$ with $b^k \le n$. Let
$d_k$ be the largest integer with $d_k\, b^k \le n$. Then $d_k \ge 1$, and $d_k \le b-1$: if instead
$d_k \ge b$, then $d_k\, b^k \ge b\cdot b^k = b^{k+1} \gt n$ (as $k$ was largest with $b^k \le n$),
a contradiction. Set $n' = n - d_k b^k$. By maximality of $d_k$ we have $n' \lt b^k$, so $n' \lt n$;
by the induction hypothesis $n'$ has a base-$b$ representation using only powers below $b^k$.
Prepending the digit $d_k$ gives one for $n$.

*Uniqueness.* Suppose $\sum_{i=0}^{k} d_i b^i = \sum_{i=0}^{k} e_i b^i$ with all digits in
$\{0,1,\dots,b-1\}$ (pad the shorter string with leading zeros). If the strings differ, let $j$ be
the **smallest** index with $d_j \ne e_j$. All lower digits agree and cancel, leaving
$$(d_j - e_j)\,b^j = \sum_{i \gt j} (e_i - d_i)\, b^i.$$
Every term on the right carries a factor $b^{i}$ with $i \ge j+1$, so the right side is a multiple
of $b^{j+1} = b\cdot b^j$. Hence $b^{j+1} \mid (d_j - e_j)b^j$, which forces $b \mid (d_j - e_j)$.
But $d_j - e_j$ is a nonzero integer with $|d_j - e_j| \le b-1 \lt b$, so it cannot be a multiple of
$b$ — a contradiction. Therefore the strings are identical. $\blacksquare$

### Worked Instance

Resolve the Hook. In base $3$, greedy on $47$: the largest power $\le 47$ is $27 = 3^3$, and one
copy fits ($2\cdot 27 = 54 \gt 47$), leaving $20$; the largest power $\le 20$ is $9 = 3^2$, and two
copies fit ($2\cdot 9 = 18$), leaving $2$; no $3$s fit into $2$; then two $1$s. So
$$47 = 1\cdot 27 + 2\cdot 9 + 0\cdot 3 + 2\cdot 1 = (1202)_3,$$
and indeed $27 + 18 + 0 + 2 = 47$. In base $2$, $47 = 32 + 8 + 4 + 2 + 1 = (101111)_2$. Uniqueness
says these are the *only* base-$3$ and base-$2$ spellings of $47$.

### Pitfalls

- **Digits stay below the base.** In base $b$ every digit lies in $0,\dots,b-1$; a "digit" of $b$ or
  more means you failed to carry — $b$ copies of $b^i$ are one copy of $b^{i+1}$.
- **Place value $\ne$ digit.** In $(1202)_3$ the leading $1$ is worth $27$, not $1$; each digit is
  weighted by its power of $b$.
- **High bases need new symbols.** In base $16$ a single position can hold ten through fifteen, so
  digits $A,\dots,F$ stand in; "$10$" written in a column would be ambiguous.
- **The leading digit is nonzero.** Padding with leading zeros does not create a new representation;
  uniqueness is about the digit string once leading zeros are dropped.

:::
:::

## Connections

Base-$b$ representation is place value made precise: it rests on powers (`ari-higher-exponents`) as
the column weights, on multiples (`nt-multiples-elem`) to bound and carry digits, and on the
naturals' well-ordering (`prim-natural-numbers`) to guarantee the greedy process both starts and
stops. It is the platform for converting between bases (`nt-base-conversion`), doing arithmetic with
carries (`nt-base-arithmetic`), and reading off a units digit (`nt-units-digits`), and its
uniqueness is the exact analogue, for a single number, of unique prime factorization. Recognition
trigger: any "last digit," "digit sum," "in base $b$," or "how many digits" question is standing on
this expansion.

## History

Writing numbers by position — where a digit's place fixes its value — was one of civilization's great inventions, achieved independently in a few places. The Babylonians used a base-$60$ positional system nearly four thousand years ago, but it lacked a true zero for centuries. The decisive step was the Hindu decimal system with a genuine zero, developed in India and codified by Brahmagupta in the seventh century, then transmitted to the Islamic world where al-Khwarizmi's ninth-century treatise spread it westward. Leonardo of Pisa, "Fibonacci," championed it for European commerce in his *Liber Abaci* ($1202$), and it slowly displaced Roman numerals. Centuries later Leibniz explored base $2$, foreshadowing the binary arithmetic at the heart of every computer. Positional notation mattered because it made large numbers writable and calculation mechanical, an advance without which modern arithmetic and computing are unimaginable.
