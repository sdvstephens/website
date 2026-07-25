Stack the binomial coefficients in rows — $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}$ — and a
triangle of numbers appears, bordered by $1$'s, symmetric left-to-right, and with a startling
property: every inside number is the sum of the two just above it. Why should "choose $k$ from $n$"
arrange itself into such a self-adding array?

## Discovery

1. Write the numbers $\binom{n}{k}$ in a centered triangle: row $n$ (for $n = 0, 1, 2, 3, 4$) holds
   $\binom{n}{0}$ through $\binom{n}{n}$. Compute every entry. What number sits at both ends of each
   row, and why does the formula force that?
2. Pick an interior entry, say $\binom{4}{2}$, and look at the two entries immediately above it in
   row $3$. Add those two. Repeat with another interior entry and its two upper neighbors. What
   relationship do you observe?
3. Justify the pattern from step $2$ by a choosing story: among the $k$-subsets of $\{1,\dots,n\}$,
   split on whether the element $n$ is chosen. How many subsets fall in each part, written as binomial
   coefficients with top $n-1$?
4. Add up an entire row — $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n}$ — for $n = 0,1,2,3,4$.
   What sequence of totals appears? Explain it by asking: how many subsets does an $n$-element set have
   in *total*, counted by letting each element be in or out?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Pascal's triangle.** Arrange the binomial coefficients so that row $n$ (starting at $n=0$) is
$$\binom{n}{0},\ \binom{n}{1},\ \dots,\ \binom{n}{n}.$$
Then:

- **Borders are $1$:** $\binom{n}{0} = \binom{n}{n} = 1$.
- **Each interior entry is the sum of the two above it** (Pascal's rule): for $1 \le k \le n-1$,
  $$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$
- **Rows are symmetric:** $\binom{n}{k} = \binom{n}{n-k}$.
- **Each row sums to a power of two:** $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n.$

The triangle lets you generate all binomial coefficients by *addition alone*, starting from the border
$1$'s — no factorials needed.

### Proof

**Borders.** $\binom{n}{0} = \dfrac{n!}{0!\,n!} = 1$ (one way to choose nothing) and
$\binom{n}{n} = \dfrac{n!}{n!\,0!} = 1$ (one way to choose everything).

**Interior addition rule.** Count the $k$-element subsets of $\{1, 2, \dots, n\}$ by whether they
contain the element $n$. Subsets containing $n$ need $k-1$ more members from the remaining $n-1$
elements: $\binom{n-1}{k-1}$ of them. Subsets omitting $n$ take all $k$ members from those $n-1$
elements: $\binom{n-1}{k}$ of them. The two cases are disjoint and exhaustive, so the addition
principle gives $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$, which is exactly "sum of the two
entries above."

**Row sum.** Count *all* subsets of an $n$-element set two ways. On one hand, build a subset by deciding
independently for each of the $n$ elements whether it is in or out — two choices each, so by the
multiplication principle $2^n$ subsets. On the other hand, group the subsets by their size $k$: there
are $\binom{n}{k}$ of size $k$, and sizes $k = 0, 1, \dots, n$ partition all subsets, so by the
addition principle the total is $\sum_{k=0}^{n}\binom{n}{k}$. Equating the two counts,
$$\sum_{k=0}^{n}\binom{n}{k} = 2^n. \qquad \blacksquare$$

### Worked Instance

Rows $0$ through $4$, each built from the one above by adding neighbors (border $1$'s supplied):
$$
\begin{array}{c}
1\\
1\quad 1\\
1\quad 2\quad 1\\
1\quad 3\quad 3\quad 1\\
1\quad 4\quad 6\quad 4\quad 1
\end{array}
$$
The $6$ in the last row is $3 + 3$ from the row above; the row sums are $1, 2, 4, 8, 16 = 2^0, \dots,
2^4$, matching the Hook and the row-sum identity. To read off a combination, $\binom{4}{2} = 6$ sits in
row $4$, position $2$ (counting from $0$).

### Pitfalls

- **Index rows and positions from $0$.** Row $n$ has $n+1$ entries, positions $0$ through $n$;
  $\binom{n}{k}$ is at row $n$, position $k$. Off-by-one indexing misreads the triangle.
- **The addition rule lowers the top by one.** Each entry equals the sum of $\binom{n-1}{k-1}$ and
  $\binom{n-1}{k}$ — both from the previous row. Don't leave one summand in the current row.
- **Row sum is $2^n$, not $2n$ or $n^2$.** It counts *all subsets*; the doubling comes from each
  element's in/out choice.
- **Borders come from the convention $0! = 1$.** The edge $1$'s rely on $\binom{n}{0}=\binom{n}{n}=1$;
  mishandling the empty choice corrupts the whole triangle.

:::
:::

## Connections

Pascal's triangle is the binomial coefficients (`comb-combinations-elem`) laid out so their addition
rule becomes visible geometry. Summing along its shallow diagonals gives the hockey-stick identity
(`comb-hockey-stick`); reading a row as coefficients gives the binomial theorem
(`comb-binomial-theorem-elem`), and the row-sum $2^n$ is that theorem at $x=y=1$. It also seeds
counting-two-ways arguments used throughout combinatorics. Recognition trigger: any problem needing
many binomial coefficients at once, or a "sum of the two above" pattern — draw the triangle.

## History

The triangular array of binomial coefficients is named for Blaise Pascal, whose *Traité du triangle arithmétique* (written $1654$, published $1665$) studied its properties systematically and applied it to his new theory of probability. But the array was known centuries earlier and in several places: the Indian prosodist Piṅgala's work, tabulated by his commentator Halāyudha ($10$th century) as the "Meru-prastāra"; the Persian mathematicians al-Karajī and Omar Khayyām (around $1000$–$1100$); and in China the tables of Jia Xian ($11$th century) and Yang Hui ($13$th century), after whom it is still called "Yang Hui's triangle." Pascal's contribution was not priority but organization — a unified treatment linking the triangle to combinations, figurate numbers, and probability. The array matters because its single additive rule, $\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}$, encodes at once the binomial theorem, combination counts, and countless identities.
