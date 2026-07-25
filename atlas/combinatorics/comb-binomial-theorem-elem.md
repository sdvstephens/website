Multiply out $(x+y)^3$ and the coefficients come out $1, 3, 3, 1$ — precisely row $3$ of Pascal's
triangle. Do it for $(x+y)^4$ and you get $1, 4, 6, 4, 1$. The numbers that count *subsets* are the
same numbers that appear when you *expand a power*. That is not a coincidence; expanding a product is
secretly an act of choosing.

## Discovery

1. Expand $(x+y)^2 = (x+y)(x+y)$ fully by distribution, *before* combining like terms, so you can see
   each product of one term from each factor. How many such products are there, and which combine?
2. Do the same for $(x+y)^3 = (x+y)(x+y)(x+y)$: list the products, each formed by taking either $x$ or
   $y$ from each of the three factors. How many products in all, and how many of them equal $x^2 y$?
3. In $(x+y)^n$, a single expanded product is $x^{n-k} y^k$ exactly when you took $y$ from some $k$ of
   the $n$ factors and $x$ from the rest. For a fixed $k$, how many products give $x^{n-k} y^k$ —
   i.e. in how many ways can you choose *which* factors supply the $y$?
4. Assemble the answer: for each power $x^{n-k} y^k$, how many copies appear (from step $3$), and so
   what is its coefficient in the combined expansion?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The binomial theorem.** For any numbers $x, y$ and any nonnegative integer $n$,
$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k}\, x^{n-k} y^k
= \binom{n}{0} x^n + \binom{n}{1} x^{n-1} y + \cdots + \binom{n}{n} y^n.$$
The coefficient of $x^{n-k} y^k$ is the binomial coefficient $\binom{n}{k}$ — which is why row $n$ of
Pascal's triangle lists the coefficients of $(x+y)^n$. These coefficients are the reason
$\binom{n}{k}$ is *called* a binomial coefficient.

### Proof

Write $(x+y)^n$ as the product of $n$ identical factors:
$$(x+y)^n = \underbrace{(x+y)(x+y)\cdots(x+y)}_{n \text{ factors}}.$$
Expanding by the distributive law means forming every product that takes exactly one term — either
$x$ or $y$ — from each factor, then summing all such products. There are $2^n$ of these products (two
choices per factor, multiplication principle), and each is determined by the *set* of factors from
which $y$ was taken.

Group the products by how many factors contributed a $y$. If $y$ is taken from exactly $k$ of the $n$
factors (and $x$ from the other $n-k$), the product equals $x^{n-k} y^k$ regardless of *which* $k$
factors were chosen, since multiplication is commutative. The number of ways to choose that set of $k$
factors is $\binom{n}{k}$. Therefore the term $x^{n-k} y^k$ appears exactly $\binom{n}{k}$ times, and
collecting like terms gives its coefficient as $\binom{n}{k}$. Summing over all $k = 0, 1, \dots, n$
(which exhausts every product, since $2^n = \sum_k \binom{n}{k}$),
$$(x+y)^n = \sum_{k=0}^{n} \binom{n}{k}\, x^{n-k} y^k. \qquad \blacksquare$$

### Worked Instance

The Hook, explained: in $(x+y)^3$ the coefficient of $x^2 y$ is the number of ways to choose which one
of the three factors supplies the $y$, namely $\binom{3}{1} = 3$. Fully,
$$(x+y)^3 = \binom{3}{0}x^3 + \binom{3}{1}x^2 y + \binom{3}{2}x y^2 + \binom{3}{3}y^3
= x^3 + 3x^2 y + 3x y^2 + y^3,$$
coefficients $1, 3, 3, 1$ — Pascal's row $3$.

Setting $x = y = 1$ recovers the row-sum identity: $(1+1)^n = \sum_k \binom{n}{k} = 2^n$. And a single
coefficient is one lookup: the $x^2$ term of $(x + 2)^5$ is
$\binom{5}{2}x^2\cdot 2^{3} = 10 \cdot 8\, x^2 = 80x^2$ (here "$y$" is the constant $2$, so its power
carries the factor $2^3$).

### Pitfalls

- **The two exponents always sum to $n$.** In $\binom{n}{k}x^{n-k}y^k$, the powers $n-k$ and $k$ add to
  $n$. Writing $x^{n} y^k$ or mismatched powers is a frequent slip.
- **Don't forget the coefficients inside a term.** For $(x + 2)^n$ the "$y$" is $2$, so each term
  carries $2^k$; the binomial coefficient is only part of the number in front.
- **Signs for a difference.** $(x - y)^n = \sum_k \binom{n}{k} x^{n-k}(-y)^k$, so the terms alternate
  in sign. Dropping the $(-1)^k$ is a classic error.
- **$\binom{n}{k}$ counts *which factors*, not powers directly.** The coefficient is a choosing count
  (which factors give $y$), which is why it equals a binomial coefficient — keep the story in mind to
  reconstruct it.

:::
:::

## Connections

The binomial theorem fuses the distributive law (`alg-distribution-factoring`) with combinations:
expanding a power *is* repeated choosing, so Pascal's triangle (`comb-pascal-elem`) rows are the
coefficients. It converts algebraic identities into combinatorial ones and back — the row-sum,
alternating-sum, and many binomial identities are just special substitutions. It generalizes to the
multinomial theorem and, with the v1 node `comb-binomial-pascal`, into generating-function methods.
Recognition trigger: a power of a sum to expand, or a coefficient to extract — read it as "choose which
factors contribute each term."

## History

Expanding $(a+b)^n$ has a long lineage. Euclid ($c.$ $300$ BCE) gave the case $n=2$ geometrically, and the coefficients for higher powers were known to the Persian mathematicians al-Karajī and Omar Khayyām around $1000$–$1100$, who connected them to the arithmetic triangle. Pascal's $1654$ treatise organized the coefficients definitively for positive integer exponents. The great generalization came from Isaac Newton in $1665$, who extended the theorem to fractional and negative exponents as an infinite series — a result central to the calculus he was simultaneously developing. The theorem matters because it fuses algebra and combinatorics: the coefficient of each term is exactly a combination count, $\binom{n}{k}$.
