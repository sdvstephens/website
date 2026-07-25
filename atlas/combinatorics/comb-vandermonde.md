A club has $3$ men and $2$ women; you must seat a committee of $2$. There are $\binom52=10$ committees.
But sort them by how many men they contain — $0$, $1$, or $2$ — and the counts $1,6,3$ add back to
$10$. That splitting always works, and it turns a single binomial coefficient into a sum of products.

## Discovery

1. From a group of $m+n$ people — say $m$ men and $n$ women — you choose a committee of $r$. Counting
   directly, how many committees are there?
2. Split the committees by their number of men. If a committee has exactly $k$ men, how many ways are
   there to pick those men from the $m$ available, and how many ways to pick the rest of the committee
   from the women?
3. Let $k$ range over all values it can take and add the products from step $2$. Set that total equal
   to your answer from step $1$. What identity have you produced?
4. Specialize to $m=n=r$. Using $\binom{n}{r-k}=\binom{n}{k}$ when... first rewrite $\binom{n}{n-k}$
   with the symmetry $\binom{n}{j}=\binom{n}{n-j}$, then read off what $\sum_k\binom{n}{k}^2$ equals.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Vandermonde's identity (convolution).** For nonnegative integers $m,n,r$,
$$\sum_{k=0}^{r}\binom{m}{k}\binom{n}{r-k}=\binom{m+n}{r},$$
where $\binom{a}{b}=0$ for $b \gt a$, so the sum is really over the feasible $k$. A famous special case
($m=n=r$, using $\binom{n}{n-k}=\binom{n}{k}$) is
$$\sum_{k=0}^{n}\binom{n}{k}^2=\binom{2n}{n}.$$

### Proof

**By double counting.** Count the $r$-element subsets of a set $M\cup W$ with $|M|=m$, $|W|=n$, and
$M\cap W=\varnothing$. Directly there are $\binom{m+n}{r}$ of them. Alternatively, classify each
$r$-subset $S$ by $k=|S\cap M|$, the number of elements it takes from $M$. Choosing which $k$ elements
of $M$ lie in $S$ can be done in $\binom{m}{k}$ ways, and the remaining $r-k$ elements come from $W$ in
$\binom{n}{r-k}$ ways; these choices are independent and every $r$-subset arises exactly once. The
classes (indexed by $k=0,1,\dots,r$) are disjoint and exhaustive, so by the addition principle
$$\binom{m+n}{r}=\sum_{k=0}^{r}\binom{m}{k}\binom{n}{r-k}.$$
For the square-sum corollary set $m=n=r$; then $\binom{n}{r-k}=\binom{n}{n-k}=\binom{n}{k}$, giving
$\sum_k\binom{n}{k}^2=\binom{2n}{n}$. $\blacksquare$

*(Generating-function proof in one line: $\binom{m+n}{r}$ is the coefficient of $x^r$ in
$(1+x)^{m+n}=(1+x)^m(1+x)^n$, and multiplying the two expansions convolves their coefficients into
$\sum_k\binom{m}{k}\binom{n}{r-k}$.)*

### Worked Instance

The Hook is $m=3,n=2,r=2$:
$$\sum_{k=0}^{2}\binom{3}{k}\binom{2}{2-k}=\binom30\binom22+\binom31\binom21+\binom32\binom20
=1\cdot1+3\cdot2+3\cdot1=10=\binom52.$$
The square-sum case at $n=4$:
$$\sum_{k=0}^{4}\binom4k^2=1+16+36+16+1=70=\binom84.$$

### Pitfalls

- **The lower indices must sum to $r$.** The terms are $\binom{m}{k}\binom{n}{r-k}$; a term like
  $\binom{m}{k}\binom{n}{k}$ is *not* Vandermonde unless you have first applied symmetry.
- **Respect the zero convention.** Terms with $k \gt m$ or $r-k \gt n$ vanish; the written range
  $0\le k\le r$ is fine because those terms are $0$, but do not force impossible choices.
- **The square-sum needs the symmetry step.** $\sum_k\binom nk^2=\binom{2n}n$ follows only after
  rewriting one factor as $\binom{n}{n-k}$; skipping it hides why Vandermonde applies.
- **It is a convolution, not a product.** $\binom{m+n}{r}\ne\binom{m}{r}+\binom{n}{r}$ and
  $\ne\binom mr\binom nr$; the men/women split is a *sum over $k$* of products.

:::
:::

## Connections

Vandermonde is the archetypal binomial identity proved by counting one set two ways
(`comb-double-counting`), building directly on combinations (`comb-combinations-elem`). Its square-sum
corollary counts monotone lattice paths through the midpoint and reappears in Catalan-number arguments;
the convolution viewpoint is the seed of the generating-function method, where multiplying series *is*
Vandermonde. Recognition trigger: a sum of products $\binom{\cdot}{k}\binom{\cdot}{r-k}$ whose lower
indices add to a constant — read it as splitting one choice by how much comes from each part.
