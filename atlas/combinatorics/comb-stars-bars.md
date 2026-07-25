How many ways can you hand out $7$ identical candies to $3$ children, if a child may get none?
It's not $3^7$ (the candies aren't distinct) and not $\binom{7}{3}$ either. The clean answer is
$36$, and it comes from a single, almost magical picture.

## Discovery

1. Represent a distribution of $7$ candies to children $A,B,C$ as a row of $7$ stars split by
   $2$ dividers, e.g. $\star\star\,|\,\star\star\star\,|\,\star\star$ means $A{=}2,B{=}3,C{=}2$.
   Write the picture for $A{=}0,B{=}7,C{=}0$.
2. Convince yourself the correspondence goes *both* ways: every distribution gives exactly one
   such picture, and every arrangement of $7$ stars and $2$ bars gives exactly one distribution.
   How long (how many symbols total) is each row?
3. So counting distributions is the same as counting these rows. A row is fixed once you decide
   *which positions* among the total hold the bars. How many positions are there, and how many
   bars must you place?
4. Turn that into a binomial coefficient. Then generalize: $n$ identical candies among $k$
   children, each allowed zero — how many stars, how many bars, and what is the count?
5. Now a twist: require every child to get *at least one* candy. Give each child one up front,
   then reapply your formula to what remains. What count do you get, and why does the "at least
   one" condition become an ordinary stars-and-bars problem after the pre-gift?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The number of ways to write a nonnegative integer $n$ as an **ordered** sum of $k$ nonnegative
integers $x_1+x_2+\dots+x_k = n$ (equivalently, to distribute $n$ identical objects into $k$
distinct boxes, empties allowed) is
$$\binom{n+k-1}{k-1} = \binom{n+k-1}{n}.$$
If instead every box must be **nonempty** ($x_i \ge 1$), the count is
$$\binom{n-1}{k-1}.$$

### Proof

**Weak compositions (empties allowed).** Encode a solution of $x_1+\dots+x_k=n$ as a row of $n$
identical stars and $k-1$ identical bars: put $x_1$ stars, a bar, $x_2$ stars, a bar, ..., a bar,
$x_k$ stars. This is a bijection: from a solution you get exactly one row, and from any
arrangement of the $n$ stars and $k-1$ bars you recover a unique solution by reading off the run
lengths between consecutive bars (runs may be empty). The row has $n+(k-1)$ symbols total, and it
is determined by choosing which $k-1$ of those positions are bars — equivalently which $n$ are
stars. Hence the count is $\binom{n+k-1}{k-1}=\binom{n+k-1}{n}$.

**Positive compositions (no empties).** Substitute $y_i = x_i - 1 \ge 0$. Then
$y_1+\dots+y_k = n-k$ with each $y_i \ge 0$, a weak composition, so by the first part its count is
$\binom{(n-k)+k-1}{k-1}=\binom{n-1}{k-1}$. $\blacksquare$

### Worked Instance

$7$ candies to $3$ children, empties allowed: $n=7,k=3$, giving
$$\binom{7+3-1}{3-1} = \binom{9}{2} = 36,$$
resolving the Hook. If instead each child must get at least one:
$\binom{7-1}{3-1}=\binom{6}{2}=15$.

### Pitfalls

- **Objects must be identical and boxes distinct.** If the candies were distinguishable the answer
  would be $k^n=3^7$; if the children were interchangeable it would be a partition count (much
  harder). Stars and bars is specifically identical-into-distinct.
- Off-by-one in the bars: for $k$ boxes you use $k-1$ bars, giving $\binom{n+k-1}{k-1}$. Writing
  $\binom{n+k}{k}$ or $\binom{n+k-1}{k}$ is the classic error — recount the total symbols.
- "At least one each" is *not* a separate formula to memorize: pre-place one per box and reduce to
  the empties-allowed case. Lower bounds larger than $1$, or *upper* bounds, need a further
  substitution (and upper bounds usually need inclusion–exclusion).

:::
:::

## Connections

Prereqs: combinations (`comb-perms-combs`), since the whole method reduces a distribution to
"choose the bar positions." Stars and bars is really a bijective proof (`comb-bijective`) in
disguise — a translation to an object that is easy to count. When boxes carry upper limits, the
excess is stripped off with inclusion–exclusion (`comb-pie`), and the generating-function view
(`comb-generating-functions`) reads $\binom{n+k-1}{n}$ as the coefficient of $x^n$ in
$(1-x)^{-k}$. Recognition trigger: "identical items into labeled groups," or "nonnegative integer
solutions of $x_1+\dots+x_k=n$."
