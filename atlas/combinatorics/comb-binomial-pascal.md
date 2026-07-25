Expand $(x+y)^4$ by hand and the coefficients come out $1,4,6,4,1$ — the exact fifth row of
Pascal's triangle. Why should multiplying out a polynomial reproduce a table built by adding
neighbors? The bridge is that both are secretly counting the same thing.

## Discovery

1. Write $(x+y)^3 = (x+y)(x+y)(x+y)$ *without* combining like terms — as a sum of $2^3 = 8$
   words, each a string of three letters like $xxy$ or $yxy$. List them all.
2. Collect the words by how many $y$'s they contain. How many words have exactly $2$ letters
   equal to $y$? Relate that count to a choice you make among the three factors.
3. So the coefficient of $x^{1}y^{2}$ in $(x+y)^3$ is a count of what selection? Express it as a
   binomial coefficient.
4. Now a recurrence. In $\binom{n}{k}$, single out one specific object $\star$ among the $n$.
   Split the $k$-subsets into those that contain $\star$ and those that don't. Count each pile in
   terms of $\binom{n-1}{\cdot}$. What identity relating $\binom{n}{k}$ to smaller entries drops
   out?
5. Combine (3) and (4): state the full expansion of $(x+y)^n$, and the addition rule its
   coefficients obey.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Binomial theorem.** For any $n \ge 0$,
$$(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{\,n-k} y^{\,k}.$$
**Pascal's rule.** For $1 \le k \le n$,
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k},$$
which is exactly the "add the two entries above" law that generates Pascal's triangle. Setting
$x=y=1$ gives the row-sum identity $\sum_{k=0}^{n}\binom{n}{k} = 2^n$.

### Proof

**Binomial theorem.** Expand $(x+y)^n = \prod_{i=1}^{n}(x+y)$ by choosing, from each of the $n$
factors, either the $x$ or the $y$, and multiplying. Each such choice is a word of $n$ letters and
contributes one term $x^{\,n-k}y^{\,k}$, where $k$ is the number of factors from which we took
$y$. Two words give the *same* monomial $x^{\,n-k}y^{\,k}$ exactly when they pick $y$ from the same
number of factors — but not necessarily the same ones. The number of words that take $y$ from
exactly $k$ of the $n$ factors is the number of $k$-subsets of the factors, namely $\binom{n}{k}$.
Summing over $k$ gives $\sum_{k=0}^{n}\binom{n}{k}x^{\,n-k}y^{\,k}$.

**Pascal's rule.** Count the $k$-element subsets of $\{1,2,\dots,n\}$. Fix the element $n$. A
$k$-subset either contains $n$ or not; these two cases are disjoint. If it contains $n$, the
remaining $k-1$ elements form a $(k-1)$-subset of $\{1,\dots,n-1\}$: there are $\binom{n-1}{k-1}$
of these. If it does not contain $n$, the whole subset is a $k$-subset of $\{1,\dots,n-1\}$:
there are $\binom{n-1}{k}$. By the addition principle,
$\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}$. $\blacksquare$

### Worked Instance

$(x+y)^4$: the coefficients are $\binom{4}{0},\dots,\binom{4}{4} = 1,4,6,4,1$, so
$$(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4,$$
resolving the Hook. Check the middle coefficient two ways: directly $\binom{4}{2}=6$, and by
Pascal from the previous row $1,3,3,1$: the two central entries $3+3=6$. Setting $x=y=1$:
$1+4+6+4+1 = 16 = 2^4$.

### Pitfalls

- The exponent of $y$ (or of the *second* term) equals the lower index $k$; the general term is
  $\binom{n}{k}x^{\,n-k}y^{\,k}$, not $\binom{n}{k}x^{\,k}y^{\,n-k}$. Fix a convention and hold it.
- Signs: $(x-y)^n = \sum \binom{n}{k}x^{\,n-k}(-y)^k$, so the coefficients alternate in sign; the
  $k$-th term carries $(-1)^k$.
- Pascal's rule needs the *same* row width: $\binom{n}{k}$ comes from two entries of row $n-1$,
  not row $n$. Off-by-one in the row index is the classic slip.
- $\binom{n}{k}=0$ for $k \lt 0$ or $k \gt n$, which makes the boundary $1$'s of the triangle come
  out correctly from Pascal's rule.

:::
:::

## Connections

Prereqs: combinations (`comb-perms-combs`) — the coefficients *are* counts of subsets. The
"pick $x$ or $y$ from each factor" idea generalizes to more than two terms in the multinomial
theorem (`comb-multinomial`), and treating $\sum \binom{n}{k}x^k$ as an object in its own right
opens generating functions (`comb-generating-functions`). Pascal's triangle also houses the
Catalan numbers (`comb-catalan`). Recognition trigger: any expansion of a power of a sum, any
"add the two above" pattern, or a sum of binomial coefficients you can read as evaluating
$(x+y)^n$ at a clever point.
