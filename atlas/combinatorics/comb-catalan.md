Count the ways to fully parenthesize a product of $4$ factors: $5$. Count the "mountain ranges"
made of $3$ up-strokes and $3$ down-strokes that never dip below the ground: also $5$. Count the
triangulations of a convex pentagon: again $5$. One sequence — $1, 1, 2, 5, 14, 42, \dots$ —
keeps surfacing, and it has a closed form clean enough to fit on one line.

## Discovery

1. Consider lattice paths from $(0,0)$ to $(n,n)$ using unit steps right $R$ and up $U$, that
   **never go above the diagonal** $y = x$ (i.e. after every prefix, the number of $U$'s so far
   does not exceed the number of $R$'s). Draw all such paths for $n = 2$ and count them.
2. First ignore the diagonal restriction. How many lattice paths from $(0,0)$ to $(n,n)$ are there
   in total, using $n$ $R$'s and $n$ $U$'s in any order?
3. Now count the **bad** paths — those that *do* cross above the diagonal at some point, i.e. that
   touch the line $y = x + 1$. Here is the reflection trick: take a bad path and, at the *first*
   moment it touches $y = x+1$, reflect the remainder of the path across that line (swap $R\leftrightarrow U$
   after that point). Where does the reflected path end? Show this pairs bad paths bijectively with
   *all* paths to that reflected endpoint, and count those.
4. Subtract the bad paths (3) from all paths (2). Simplify to a single closed form for the number
   of good paths.
5. Believe (for now) that parenthesizations of $n+1$ factors, and triangulations of an
   $(n+2)$-gon, are counted by the *same* number. Recompute your formula for $n = 3$ and check it
   equals the $5$ from the Hook.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **$n$-th Catalan number** is
$$C_n = \frac{1}{n+1}\binom{2n}{n} = \binom{2n}{n} - \binom{2n}{n+1},\qquad C_0 = 1,\ C_1 = 1,\ C_2 = 2,\ C_3 = 5,\ C_4 = 14,\dots$$
It counts, among many equivalent families (all in bijection): monotone lattice paths from
$(0,0)$ to $(n,n)$ staying weakly below the diagonal; balanced strings of $n$ pairs of
parentheses; full parenthesizations of a product of $n+1$ factors; triangulations of a convex
$(n+2)$-gon; and rooted binary trees with $n$ internal nodes. Catalan numbers also satisfy the
recurrence $C_{n+1} = \sum_{i=0}^{n} C_i\,C_{n-i}$.

### Proof

We count monotone paths from $(0,0)$ to $(n,n)$ that stay weakly below $y=x$, via the **reflection
principle**.

*Total paths.* A monotone path is a sequence of $n$ $R$-steps and $n$ $U$-steps, determined by
which of the $2n$ positions are $U$: there are $\binom{2n}{n}$ in all.

*Bad paths.* Call a path **bad** if it ever rises above the diagonal, equivalently if it touches
the line $y = x + 1$. Given a bad path, let $P$ be the first lattice point where it touches
$y = x+1$, and reflect the portion of the path *after* $P$ across the line $y = x+1$ (each $R$
becomes $U$ and vice versa). The prefix up to $P$ is unchanged. Reflection sends the original
endpoint $(n,n)$ to its mirror image across $y=x+1$, namely $(n-1,\,n+1)$. This operation is a
bijection from bad paths (to $(n,n)$) onto *all* monotone paths from $(0,0)$ to $(n-1,n+1)$:
it is invertible, since any path to $(n-1,n+1)$ must cross $y=x+1$ (its endpoint is above it), and
reflecting after the first crossing returns a bad path to $(n,n)$. A path to $(n-1,n+1)$ uses
$n-1$ $R$-steps and $n+1$ $U$-steps, so there are $\binom{2n}{n+1}$ of them.

*Good paths.* Subtracting,
$$C_n = \binom{2n}{n} - \binom{2n}{n+1} = \binom{2n}{n} - \frac{n}{n+1}\binom{2n}{n} = \frac{1}{n+1}\binom{2n}{n},$$
using $\binom{2n}{n+1} = \dfrac{n}{n+1}\binom{2n}{n}$. $\blacksquare$

### Worked Instance

For $n = 3$:
$$C_3 = \frac{1}{4}\binom{6}{3} = \frac{1}{4}\cdot 20 = 5.$$
So there are $5$ diagonal-respecting paths on the $3\times 3$ grid, $5$ ways to parenthesize
$4$ factors (e.g. $((ab)c)d$, $(a(bc))d$, $(ab)(cd)$, $a((bc)d)$, $a(b(cd))$), and $5$
triangulations of a convex pentagon — exactly the three counts from the Hook, all equal because
each family is in bijection with the diagonal-respecting paths.

### Pitfalls

- The prefactor is $\dfrac{1}{n+1}$, not $\dfrac1n$ or $\dfrac{1}{2n}$; $C_n=\frac{1}{n+1}\binom{2n}{n}$.
  The alternate form $\binom{2n}{n}-\binom{2n}{n+1}$ is a good cross-check.
- **Indexing offsets** differ by family: $C_n$ counts paths on an $n\times n$ grid, but
  parenthesizations of $n+1$ factors and triangulations of an $(n+2)$-gon. Always confirm which
  index the source uses.
- In the reflection argument, reflect **only after the first crossing** of $y=x+1$, and reflect
  toward the correct line; reflecting the whole path or across the wrong line breaks the
  bijection.
- $C_n$ is always an integer even though $\frac{1}{n+1}\binom{2n}{n}$ has a denominator — because
  $(n+1)\mid\binom{2n}{n}$. Don't be alarmed by the fraction.

:::
:::

## Connections

Prereqs: bijective proofs (`comb-bijective`), since the whole subject is one count seen through
many disguises, and binomial coefficients (`comb-binomial-pascal`) for the closed form. The
recurrence $C_{n+1}=\sum C_i C_{n-i}$ is a natural target for generating functions
(`comb-generating-functions`), whose Catalan series solves a quadratic. The reflection principle
reappears in ballot problems and random walks. Recognition trigger: a count of $1,2,5,14,42$, or
any structure built by nested/balanced/non-crossing pieces (parentheses, paths under a line,
triangulations, binary trees).
