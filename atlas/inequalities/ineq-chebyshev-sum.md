Averages don't usually distribute over products: the average of $a_ib_i$ need not equal
(average of $a_i$)(average of $b_i$). But when both sequences are sorted the *same way*, one
side always dominates. Take $a = b = (1,2,3)$: $\frac{1+4+9}{3} = \frac{14}{3} \approx 4.67$,
while $\left(\frac{1+2+3}{3}\right)^2 = 4$. The product-average won. Coincidence?

## Discovery

1. Take $a_1 \le a_2 \le \cdots \le a_n$ and $b_1 \le b_2 \le \cdots \le b_n$. Write down the
   $n$ different "cyclically shifted" pairings $\sum_i a_i b_{i+k}$ (indices mod $n$) for
   $k = 0, 1, \dots, n-1$. By the rearrangement inequality, how does each shifted sum compare to
   the aligned sum $\sum a_i b_i$?
2. Add up all $n$ of those shifted-pairing sums. On the left you get $n$ copies of things each
   $\le \sum a_ib_i$. What does the left total simplify to when you group by which $a_i$ appears?
3. From step 2 you have an inequality between $n \sum a_ib_i$ and the product
   $(\sum a_i)(\sum b_i)$. Divide by $n^2$. What comparison between $\frac1n\sum a_ib_i$ and
   $\left(\frac1n\sum a_i\right)\left(\frac1n\sum b_i\right)$ emerges?
4. Redo the argument with $b$ sorted in the *opposite* order to $a$. Which way does the
   inequality flip?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $a_1 \le a_2 \le \cdots \le a_n$ and $b_1 \le b_2 \le \cdots \le b_n$. Then (**similarly
sorted** case)
$$\frac{1}{n}\sum_{i=1}^n a_i b_i \;\ge\; \left(\frac{1}{n}\sum_{i=1}^n a_i\right)\left(\frac{1}{n}\sum_{i=1}^n b_i\right).$$
If instead $b_1 \ge b_2 \ge \cdots \ge b_n$ (**oppositely sorted**), the inequality reverses.
Equality holds iff $a_1 = \cdots = a_n$ or $b_1 = \cdots = b_n$.

### Proof

Assume both sequences increasing. For each cyclic shift $k \in \{0,1,\dots,n-1\}$, the
rearrangement inequality gives
$$\sum_{i=1}^n a_i b_{i+k} \;\le\; \sum_{i=1}^n a_i b_i \qquad (\text{indices mod } n),$$
because the aligned pairing is the maximum. Summing over all $n$ shifts, the left side counts
each product $a_i b_j$ exactly once as $(i,j)$ ranges over all pairs, so it equals
$\left(\sum_i a_i\right)\left(\sum_j b_j\right)$, while the right side is $n \sum_i a_i b_i$.
Hence
$$\left(\sum a_i\right)\left(\sum b_i\right) \;\le\; n \sum a_i b_i.$$
Dividing by $n^2$ gives the claim. For oppositely sorted $b$, rearrangement makes the aligned
pairing the *minimum*, so every shift is $\ge \sum a_ib_i$ and the inequality reverses. Equality
requires each shift to be tight, which forces one sequence to be constant. $\blacksquare$

### Worked Instance

For positive reals $a, b, c$, prove
$\frac{a^2 + b^2 + c^2}{3} \ge \left(\frac{a+b+c}{3}\right)^2$. Take both sequences to be
$(a, b, c)$ (WLOG sorted the same way, since they are identical), similarly sorted. Chebyshev
gives
$$\frac{a\cdot a + b\cdot b + c\cdot c}{3} \ge \left(\frac{a+b+c}{3}\right)\left(\frac{a+b+c}{3}\right),$$
i.e. the mean of squares dominates the square of the mean, with equality iff $a = b = c$. This
is exactly the Hook's $\frac{14}{3} \ge 4$ generalized.

### Pitfalls

- Both sequences must be sorted the **same** direction for the "$\ge$" form. Mixed sorting
  gives the reversed inequality — always check the orderings first.
- It compares an *average of products* to a *product of averages*; do not misread it as AM–GM
  or Cauchy–Schwarz.
- The factor of $n$ is essential: the un-normalized form is $n\sum a_ib_i \ge (\sum a_i)(\sum b_i)$,
  not $\sum a_ib_i \ge (\sum a_i)(\sum b_i)$.

:::
:::

## Connections

Prereqs: the rearrangement inequality — Chebyshev is its immediate corollary, obtained by
averaging over all cyclic shifts. It bridges to the power-mean inequality (the special case of
identical sequences gives mean-of-squares $\ge$ square-of-mean) and is a fast tool for
"similarly ordered" symmetric sums. Recognition trigger: comparing $\frac1n\sum a_ib_i$ against
$(\frac1n\sum a_i)(\frac1n\sum b_i)$ when you can argue the sequences are monotonically aligned.
Appears in olympiad inequality problems.
