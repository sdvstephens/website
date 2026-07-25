There are five ways to write $4$ as an unordered sum of positive integers: $4$, $3{+}1$, $2{+}2$,
$2{+}1{+}1$, $1{+}1{+}1{+}1$. There is no tidy formula for this count $p(n)$ — yet a single infinite
product bottles up *all* of them at once, and squeezing that product reveals a startling coincidence:
partitions into *distinct* parts are always as numerous as partitions into *odd* parts.

## Discovery

1. A partition of $n$ chooses how many $1$'s, how many $2$'s, how many $3$'s, and so on, to use. Build
   a bookkeeping product: for the part size $1$, the choices "use it $0,1,2,\dots$ times" correspond to
   the power series $1+x+x^2+\cdots$; write the analogous factor for part size $2$, and for a general
   part size $k$.
2. Multiply the factors for all part sizes together. Argue what the coefficient of $x^n$ in the product
   counts, by matching a choice of exponents to a partition of $n$.
3. Restrict to partitions into **distinct** parts (each size used at most once). Which factor now
   replaces $1+x^k+x^{2k}+\cdots$, and what is the product over all $k$?
4. Separately, write the product that generates partitions into **odd** parts only. Then take your
   distinct-parts product $\prod_k(1+x^k)$, rewrite each factor using
   $1+x^k=\dfrac{1-x^{2k}}{1-x^k}$, and watch the even-indexed factors cancel down the product. What
   product survives, and what equality between two partition counts does that force?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $p(n)$ count partitions of $n$ (with $p(0)=1$; $p(1{,}2{,}3{,}4{,}5)=1,2,3,5,7$). As formal power
series,
$$\sum_{n=0}^{\infty}p(n)\,x^n=\prod_{k=1}^{\infty}\frac{1}{1-x^k}.$$
Restricted classes have their own products:
$$\sum_n p_{\mathrm{dist}}(n)x^n=\prod_{k=1}^{\infty}(1+x^k),\qquad
\sum_n p_{\mathrm{odd}}(n)x^n=\prod_{j\ \mathrm{odd}}\frac{1}{1-x^{j}}.$$
**Euler's theorem.** For every $n$, the number of partitions into **distinct** parts equals the number
into **odd** parts: $p_{\mathrm{dist}}(n)=p_{\mathrm{odd}}(n)$.

### Proof

**The product counts partitions.** Expand $\prod_{k\ge1}(1-x^k)^{-1}=\prod_{k\ge1}(1+x^k+x^{2k}+\cdots)$.
Choosing the term $x^{m_k\cdot k}$ from the $k$-th factor and multiplying contributes
$x^{\sum_k k\,m_k}$; the choices $(m_1,m_2,\dots)$ of nonnegative integers, almost all zero, correspond
bijectively to partitions of $\sum_k k\,m_k$ that use the part $k$ exactly $m_k$ times. Hence the
coefficient of $x^n$ is the number of partitions of $n$, namely $p(n)$. As formal power series each
coefficient is a finite sum (only $k\le n$ matter), so the infinite product is well defined. The
distinct-parts product $\prod_k(1+x^k)$ arises the same way with each $m_k\in\{0,1\}$, and the odd-parts
product restricts the factors to odd $k$.

**Euler's identity.** In the ring of formal power series, using $1+x^k=\dfrac{1-x^{2k}}{1-x^k}$,
$$\prod_{k=1}^{\infty}(1+x^k)=\prod_{k=1}^{\infty}\frac{1-x^{2k}}{1-x^{k}}
=\frac{\prod_{k\ge1}(1-x^{2k})}{\prod_{k\ge1}(1-x^{k})}.$$
The numerator is the product of $(1-x^m)$ over *even* $m$; the denominator is over *all* $m$. Cancelling
every even-index factor leaves precisely the odd-index factors in the denominator:
$$\prod_{k=1}^{\infty}(1+x^k)=\prod_{j\ \mathrm{odd}}\frac{1}{1-x^{j}}.$$
The left side generates $p_{\mathrm{dist}}$ and the right side generates $p_{\mathrm{odd}}$; equal
series have equal coefficients, so $p_{\mathrm{dist}}(n)=p_{\mathrm{odd}}(n)$ for all $n$.
$\blacksquare$

### Worked Instance

Coefficient check at $n=4$: the product $\prod(1-x^k)^{-1}$ gives $x^4$-coefficient $5$, matching the
five partitions in the Hook. For Euler's identity at $n=6$:
- distinct parts: $6,\ 5{+}1,\ 4{+}2,\ 3{+}2{+}1$ — that is $4$;
- odd parts: $5{+}1,\ 3{+}3,\ 3{+}1{+}1{+}1,\ 1{+}1{+}1{+}1{+}1{+}1$ — also $4$.

Both equal $4$, exactly as the cancelling product predicts.

### Pitfalls

- **These are formal power series, not numerical sums.** Convergence is irrelevant; each coefficient of
  $x^n$ is a finite computation using only parts $\le n$, so the infinite product is legitimate.
- **Distinct is $\prod(1+x^k)$, not $\prod\frac{1}{1-x^k}$.** The factor $1+x^k$ offers the part $k$
  *zero or one* time; the geometric factor allows unlimited repeats.
- **Order does not matter in a partition.** $3{+}1$ and $1{+}3$ are the same partition; the product
  automatically counts unordered multisets, unlike compositions.
- **Euler's identity is a theorem, not obvious.** "Distinct $=$ odd" has no elementary one-liner from
  the definitions; it needs the product manipulation (or an explicit bijection).

:::
:::

## Connections

Partitions are the payoff application of generating functions (`comb-generating-functions`): a product
of series encodes an entire counting problem, and *algebra on the product* (cancellation, substitution)
proves identities that resist direct bijection. Euler's odd/distinct theorem also has a purely
combinatorial bijection, foreshadowing the deeper Rogers–Ramanujan identities and the pentagonal number
theorem. Recognition trigger: "count the ways to write $n$ as an unordered sum with such-and-such parts
allowed" — assign each allowed part a factor and read off the coefficient.
