Find a number that is $2$ more than a multiple of $3$ and $3$ more than a multiple of $5$. Scanning,
$8$ works: $8 \equiv 2 \pmod 3$ and $8 \equiv 3 \pmod 5$. Is $8$ the only such number, and does a
solution always exist when the two moduli are coprime? And when they are not, can the two demands
quietly contradict each other?

## Discovery

1. List the numbers with $x \equiv 2 \pmod 3$ ($2, 5, 8, 11, \dots$) and those with $x \equiv 3
   \pmod 5$ ($3, 8, 13, \dots$). Find the smallest value appearing on both lists.
2. Take the common solution from step 1 and add $15$ to it, then again, then again. Do the results
   still satisfy *both* congruences? What is $15$ to the two moduli $3$ and $5$, and what does that
   suggest the full solution set looks like?
3. Now try moduli that are not coprime: hunt for $x$ with $x \equiv 1 \pmod 4$ and $x \equiv 2
   \pmod 6$. What goes wrong? Identify the condition the two required remainders must satisfy when
   $\gcd$ of the moduli exceeds $1$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Consider the system $x \equiv a \pmod m$ and $x \equiv b \pmod n$, and let $d = \gcd(m, n)$.
- **Solvable if and only if $d \mid (a - b)$.**
- When solvable, the solution is **unique modulo $\operatorname{lcm}(m, n)$**.
- **Coprime case ($d = 1$):** a solution always exists and is unique modulo $mn$ (this is the
  **Chinese Remainder Theorem** for two moduli).

### Proof

Every solution of the first congruence has the form $x = a + mt$ for some integer $t$. Substituting
into the second,
$$a + mt \equiv b \pmod n \iff mt \equiv b - a \pmod n,$$
a *linear congruence* in the unknown $t$ (`nt-solving-congruences`). Its solvability condition is
$\gcd(m, n) \mid (b - a)$, i.e. $d \mid (a - b)$ — proving the criterion. When it holds, that node
gives at least one $t$, hence at least one $x$.

*Uniqueness modulo $\operatorname{lcm}(m,n)$.* Suppose $x$ and $x'$ both solve the system. Then
$x \equiv x' \pmod m$ and $x \equiv x' \pmod n$, so $m \mid (x - x')$ and $n \mid (x - x')$; a common
multiple of $m$ and $n$ is a multiple of their least common multiple (`nt-lcm-elem`), so
$\operatorname{lcm}(m,n) \mid (x - x')$. Hence all solutions form a single class mod
$\operatorname{lcm}(m,n)$.

*Coprime case.* If $\gcd(m, n) = 1$ then $d \mid (a - b)$ automatically, so a solution exists; and
$\operatorname{lcm}(m, n) = mn$, so it is unique mod $mn$. $\blacksquare$

### Worked Instance

Resolve the Hook: $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$. Write $x = 2 + 3t$; then
$2 + 3t \equiv 3 \pmod 5$, i.e. $3t \equiv 1 \pmod 5$. Since $3^{-1} \equiv 2 \pmod 5$, $t \equiv
2\cdot 1 = 2 \pmod 5$, so $t = 2$ gives $x = 8$, unique modulo $\operatorname{lcm}(3,5) = 15$ — the
common values are $8, 23, 38, \dots$, spaced by $15$. Contrast $x \equiv 1 \pmod 4$, $x \equiv 2
\pmod 6$: here $d = \gcd(4, 6) = 2$ but $a - b = 1 - 2 = -1$ is not divisible by $2$, so there is no
solution — the first forces $x$ odd, the second forces $x$ even.

### Pitfalls

- **Coprime moduli always combine.** If $\gcd(m,n) = 1$ a solution is guaranteed; the compatibility
  worry only arises when the moduli share a factor.
- **Non-coprime needs a compatibility check.** The residues must agree modulo $\gcd(m,n)$, i.e.
  $\gcd(m,n) \mid (a - b)$; otherwise the system is contradictory.
- **The period is $\operatorname{lcm}(m, n)$, not $mn$.** Only when the moduli are coprime does the
  lcm equal the product; in general solutions repeat every $\operatorname{lcm}(m,n)$.
- **Uniqueness is modulo the lcm, not a single integer.** There are infinitely many solutions — one
  residue class, spaced by $\operatorname{lcm}(m,n)$.

:::
:::

## Connections

Combining congruences reduces, one modulus at a time, to solving a single linear congruence
(`nt-solving-congruences`), while the least common multiple (`nt-lcm-elem`) sets the period of the
answer. The coprime case is the elementary Chinese Remainder Theorem, matured with explicit inverse
constructions and more moduli at the competition level (`nt-crt`), where it factors arithmetic mod
$mn$ into arithmetic mod $m$ and mod $n$. Recognition trigger: "find $x$ leaving remainder $a$ mod
$m$ and $b$ mod $n$," calendar/gear-meshing puzzles, or "solve two congruences at once" — substitute
one into the other.

## History

Systems of simultaneous congruences carry one of the most romantic names in mathematics, the Chinese Remainder Theorem, and the name is earned: the earliest known instance appears in the *Sunzi Suanjing*, a Chinese arithmetic manual from roughly the third to fifth century AD, which poses finding a number leaving remainders $2$, $3$, and $2$ on division by $3$, $5$, and $7$. The method was greatly extended by Qin Jiushao in his *Mathematical Treatise in Nine Sections* ($1247$), who gave a general algorithm for coprime and even non-coprime moduli. Indian astronomers such as Aryabhata used related techniques for calendar and planetary calculations. The modern general statement and proof came with Gauss in the *Disquisitiones Arithmeticae* ($1801$), who set it firmly within his congruence theory. It mattered because it lets a hard problem modulo a large number be broken into easy independent pieces — a divide-and-conquer principle central to number theory, calendrics, and fast modern computation.
