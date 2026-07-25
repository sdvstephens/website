You have prices $\{1, 2, 3\}$ and quantities $\{10, 20, 30\}$ to pair up. To maximize total
cost $\sum (\text{price})(\text{quantity})$, do you match cheap with few or cheap with many?
Matching $1{:}10,\, 2{:}20,\, 3{:}30$ gives $10+40+90 = 140$; the reverse $1{:}30,\,2{:}20,\,
3{:}10$ gives $30+40+30 = 100$. Same-order wins. Is that always the best pairing?

## Discovery

1. Take two numbers $a_1 \le a_2$ and two numbers $b_1 \le b_2$. Write down the two possible
   pairings' sums: $a_1 b_1 + a_2 b_2$ versus $a_1 b_2 + a_2 b_1$. Subtract one from the other
   and factor. What is the sign of the difference?
2. From step 1, which of the two pairings gives the larger sum — the "sorted the same way" one
   or the "sorted oppositely" one? State the condition for the two to be equal.
3. Now imagine any pairing of longer sequences $a_1 \le \cdots \le a_n$ and a permutation of
   $b$'s. Suppose two of the $b$'s are "out of order" relative to the $a$'s they sit next to.
   Using step 1 on just those two positions, can you always swap them to *not decrease* the
   total? What does repeating this swap drive the arrangement toward?
4. Conclude: among all permutations, which pairing maximizes $\sum a_i b_{\sigma(i)}$ and which
   minimizes it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $a_1 \le a_2 \le \cdots \le a_n$ and $b_1 \le b_2 \le \cdots \le b_n$ be real numbers, and
let $\sigma$ be any permutation of $\{1,\dots,n\}$. Then
$$\sum_{i=1}^n a_i b_{n+1-i} \;\le\; \sum_{i=1}^n a_i b_{\sigma(i)} \;\le\; \sum_{i=1}^n a_i b_i.$$
The **sorted (same-order)** pairing maximizes the sum; the **reversed (opposite-order)** pairing
minimizes it. Equality can occur when one sequence is constant, or more generally when the swap
never strictly helps.

### Proof

The key is a single **exchange (swap) argument** built on the trivial-inequality-style factoring.
Suppose in some pairing there are indices $i \lt j$ with $a_i \le a_j$ but the paired values are
"inverted," $b_{\sigma(i)} \gt b_{\sigma(j)}$. Swapping these two assignments changes the sum by
$$\big(a_i b_{\sigma(j)} + a_j b_{\sigma(i)}\big) - \big(a_i b_{\sigma(i)} + a_j b_{\sigma(j)}\big)
= (a_j - a_i)\big(b_{\sigma(i)} - b_{\sigma(j)}\big) \ge 0,$$
since $a_j - a_i \ge 0$ and $b_{\sigma(i)} - b_{\sigma(j)} \gt 0$. So each such swap does not
decrease the sum. A finite number of swaps sorts $\sigma$ into the identity (like bubble sort),
proving $\sum a_i b_{\sigma(i)} \le \sum a_i b_i$ — the sorted pairing is maximal. Applying the
same argument to $(a_i)$ and $(-b_i)$ (or reversing every inequality) shows the reversed pairing
is minimal. $\blacksquare$

### Worked Instance

Prove that for positive reals, $a^2 + b^2 + c^2 \ge ab + bc + ca$. Both sequences
$(a, b, c)$ and $(a, b, c)$ are "the same," so the same-order pairing $a\cdot a + b\cdot b +
c\cdot c = a^2 + b^2 + c^2$ is the maximum, while any other pairing — such as the cyclic
$a\cdot b + b\cdot c + c\cdot a$ — is no larger:
$$a^2 + b^2 + c^2 \ge ab + bc + ca.$$
Equality holds iff $a = b = c$. (For the Hook: pairing prices with quantities *same-order*
indeed maximizes total cost, as $140 \gt 100$.)

### Pitfalls

- Both sequences must be sorted the **same** direction before you read off "same-order =
  maximum." If you sort $a$ ascending and $b$ descending, the labels flip.
- The inequality is about **sums of products**, not products of sums — do not confuse it with
  AM–GM.
- Equality analysis is subtle: it is *not* simply "all variables equal." Any pairing already in
  sorted order (e.g. when there are ties) can achieve the extremum.

:::
:::

## Connections

Prereqs: the trivial inequality — the swap difference factors just like $(a-b)^2$-style terms.
Rearrangement is the combinatorial heart behind Chebyshev's sum inequality (its direct child)
and gives slick proofs of AM–GM-type and symmetric-sum bounds. Recognition trigger: a sum
$\sum a_i b_{\sigma(i)}$ over a *pairing* or permutation, or a cyclic-vs-symmetric sum
comparison. Shows up on the Putnam and olympiads, and underlies many "sort then compare"
arguments.
