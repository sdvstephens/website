Pick any real number, say $x = 3.7$. Then $\lfloor x\rfloor + \lfloor x + \tfrac12\rfloor
= 3 + 4 = 7$, and $\lfloor 2x\rfloor = \lfloor 7.4\rfloor = 7$. Try $x = 3.2$:
$\lfloor 3.2\rfloor + \lfloor 3.7\rfloor = 3+3 = 6 = \lfloor 6.4\rfloor$. The two always agree.
The floor function looks jagged and lawless, yet it hides clean identities — and a couple of them
let you *count* without listing.

## Discovery

Let $\lfloor t\rfloor$ be the greatest integer $\le t$, and write $\{t\} = t - \lfloor t\rfloor
\in [0,1)$ for the fractional part.

1. **Counting multiples.** Among $1, 2, \dots, n$, how many are divisible by a fixed positive
   integer $d$? Write the count in closed form using a floor. (List the multiples: $d, 2d, \dots$;
   what is the largest multiple $\le n$?)
2. **Two floors of a halved variable.** Fix a real $x$ and split into cases by whether
   $\{x\} \lt \tfrac12$ or $\{x\} \ge \tfrac12$. In each case compute both $\lfloor x\rfloor +
   \lfloor x + \tfrac12\rfloor$ and $\lfloor 2x\rfloor$ separately. What do you observe about their
   relationship in each case?
3. **Generalize the split.** Now consider $\lfloor x\rfloor + \lfloor x + \tfrac1m\rfloor + \dots
   + \lfloor x + \tfrac{m-1}{m}\rfloor$ for an integer $m \ge 1$. Test $m = 3$ on a few values of
   $x$ and compare with $\lfloor mx\rfloor$. Then prove your guess by replacing $x$ with
   $x + \tfrac1m$ and watching how the sum shifts.
4. **Nested floors.** For a positive integer $b$, compare $\big\lfloor \tfrac{\lfloor x\rfloor}{b}
   \big\rfloor$ with $\big\lfloor \tfrac{x}{b}\big\rfloor$. Try to prove they are equal by writing
   $\lfloor x\rfloor = qb + r$ with $0 \le r \lt b$ and pushing the fractional part of $x$ through.
5. Collect what you have: a formula for "how many multiples," an identity summing shifted floors,
   and a rule for collapsing a floor inside a floor. State each precisely.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Three reusable facts about $\lfloor \cdot \rfloor$.

- **Counting multiples.** The number of integers in $\{1, \dots, n\}$ divisible by $d$ is
  $\left\lfloor \dfrac{n}{d}\right\rfloor$.
- **Hermite's identity.** For every real $x$ and integer $m \ge 1$,
  $$\left\lfloor x\right\rfloor + \left\lfloor x + \tfrac1m\right\rfloor +
  \left\lfloor x + \tfrac2m\right\rfloor + \cdots + \left\lfloor x + \tfrac{m-1}{m}\right\rfloor
  = \left\lfloor m x\right\rfloor.$$
  The Hook is the case $m = 2$: $\lfloor x\rfloor + \lfloor x + \tfrac12\rfloor = \lfloor 2x\rfloor$.
- **Nested-floor collapse.** For real $x$ and positive integers $a, b$,
  $$\left\lfloor \frac{\lfloor x\rfloor}{b}\right\rfloor = \left\lfloor \frac{x}{b}\right\rfloor,
  \qquad\text{hence}\qquad
  \left\lfloor \frac{\lfloor x/a\rfloor}{b}\right\rfloor = \left\lfloor \frac{x}{ab}\right\rfloor.$$

### Proof

**Counting multiples.** The multiples of $d$ in $\{1,\dots,n\}$ are $d, 2d, \dots, kd$ where $kd
\le n \lt (k+1)d$, i.e. $k \le n/d \lt k+1$. By definition of floor, $k = \lfloor n/d\rfloor$.

**Hermite's identity.** Let $f(x)$ be the left side minus the right side:
$$f(x) = \sum_{j=0}^{m-1} \left\lfloor x + \tfrac{j}{m}\right\rfloor - \lfloor mx\rfloor.$$
Replace $x$ by $x + \tfrac1m$. Each summand shifts, $\lfloor x + \tfrac{j}{m}\rfloor \mapsto
\lfloor x + \tfrac{j+1}{m}\rfloor$, so the sum becomes $\sum_{j=1}^{m}\lfloor x + \tfrac{j}{m}
\rfloor$. Now $\lfloor x + \tfrac{m}{m}\rfloor = \lfloor x + 1\rfloor = \lfloor x\rfloor + 1$, so
the new sum equals the old sum $+1$ (we dropped the $j=0$ term $\lfloor x\rfloor$ and added
$\lfloor x\rfloor + 1$). Meanwhile $\lfloor m(x + \tfrac1m)\rfloor = \lfloor mx + 1\rfloor =
\lfloor mx\rfloor + 1$. Both sides gained exactly $1$, so
$$f\!\left(x + \tfrac1m\right) = f(x);$$
$f$ is periodic with period $\tfrac1m$. On the half-open interval $[0, \tfrac1m)$ we have $0 \le mx
\lt 1$, so $\lfloor mx\rfloor = 0$ and every $\lfloor x + \tfrac{j}{m}\rfloor$ with $0 \le j \le
m-1$ equals $0$ as well (each argument lies in $[0,1)$); hence $f \equiv 0$ there. By periodicity
$f \equiv 0$ everywhere, which is Hermite's identity.

**Nested-floor collapse.** Write $\lfloor x\rfloor = qb + r$ with $q = \lfloor \lfloor x\rfloor/b
\rfloor$ and $0 \le r \le b-1$. Then $qb \le \lfloor x\rfloor \le x \lt \lfloor x\rfloor + 1 \le
qb + b$, so $q \le x/b \lt q + 1$, giving $\lfloor x/b\rfloor = q = \lfloor \lfloor x\rfloor/b
\rfloor$. Applying this with $x \mapsto x/a$ and using $\lfloor (x/a)/b\rfloor = \lfloor x/(ab)
\rfloor$ (same argument, or directly $\tfrac{1}{a}\cdot\tfrac1b = \tfrac1{ab}$) yields the nested
form. $\blacksquare$

### Worked Instance

**A clean consequence of Hermite.** Set $m = 2$ and $x = \tfrac{n}{2}$ for an integer $n$. Hermite
gives
$$\left\lfloor \tfrac{n}{2}\right\rfloor + \left\lfloor \tfrac{n}{2} + \tfrac12\right\rfloor
= \left\lfloor n\right\rfloor = n,\qquad\text{i.e.}\qquad
\left\lfloor \tfrac{n}{2}\right\rfloor + \left\lfloor \tfrac{n+1}{2}\right\rfloor = n,$$
the familiar "the two halves of $n$ add back to $n$" identity — now a one-line corollary rather
than a case check.

**Counting, then collapsing.** How many integers in $\{1,\dots,1000\}$ are divisible by $6$? By the
counting rule, $\lfloor 1000/6\rfloor = 166$. And to see that "divisible by $2$ then the quotient
by $3$" is the same as "divisible by $6$," the nested-floor collapse gives
$\big\lfloor \tfrac{\lfloor 1000/2\rfloor}{3}\big\rfloor = \big\lfloor \tfrac{500}{3}\big\rfloor =
166 = \lfloor 1000/6\rfloor$, confirming the two counts agree.

### Pitfalls

- **Floor is not additive.** In general $\lfloor x + y\rfloor \ne \lfloor x\rfloor + \lfloor y
  \rfloor$ (e.g. $x = y = 0.6$); the correct statement is $\lfloor x\rfloor + \lfloor y\rfloor \le
  \lfloor x+y\rfloor \le \lfloor x\rfloor + \lfloor y\rfloor + 1$.
- **Hermite needs the exact offsets $\tfrac{j}{m}$.** Dropping a term or using unequal spacing
  breaks the periodicity argument.
- **Negatives.** $\lfloor -2.3\rfloor = -3$, *not* $-2$; floor rounds toward $-\infty$, unlike
  integer truncation. Identities proved for real $x$ still hold, but numeric checks trip people up.
- **Nested collapse needs an integer denominator.** $\lfloor \lfloor x\rfloor / b\rfloor =
  \lfloor x/b\rfloor$ requires $b \in \ZZ_{\gt 0}$; it can fail for non-integer $b$.
- **Off-by-one when counting a range not starting at $1$.** The count of multiples of $d$ in
  $\{a,\dots,n\}$ is $\lfloor n/d\rfloor - \lfloor (a-1)/d\rfloor$, not $\lfloor (n-a)/d\rfloor$.

:::
:::

## Connections

Prereqs: the floor function and its basic identities (`found-floor`) and elementary divisibility
(`nt-divisibility-elem`) for the multiple-counting. The counting rule is the beating heart of
Legendre's formula ($v_p(n!) = \sum_k \lfloor n/p^k\rfloor$), and Hermite's identity generalizes to
the Hermite–Legendre relations used in lattice-point proofs of quadratic reciprocity. Recognition
trigger: any sum or count involving $\lfloor n/k\rfloor$, a jagged expression you suspect telescopes,
or a "how many multiples/lattice points" question. A recurring AIME, Putnam, and olympiad tool.

## History

The bracket notation $[x]$ for the greatest integer is due to Carl Friedrich Gauss, who used
floor-counting decisively in his 1808 lattice-point proof of quadratic reciprocity — counting
integer points under a line is exactly the "number of multiples" rule. The summation identity bears
the name of Charles Hermite (1822–1901), the French analyst best known for proving the
transcendence of $e$ in 1873; the identity surfaces in his work on the arithmetic of the greatest-
integer function. Legendre had earlier (1808) exploited $\sum_k \lfloor n/p^k\rfloor$ for prime
factorizations of factorials, so the counting technique predates its crisp modern statement. The
now-standard $\lfloor x\rfloor$ / $\lceil x\rceil$ notation was introduced by Kenneth Iverson in
1962 in his book *A Programming Language*, cleanly distinguishing floor from ceiling — a
disambiguation the old $[x]$ never offered. These small identities matter because they convert
opaque discrete counts into manipulable closed forms.
