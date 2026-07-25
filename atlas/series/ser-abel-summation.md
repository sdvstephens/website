Integration by parts trades a hard integral $\int u\,dv$ for an easier $\int v\,du$. Sums have no
$dx$ — yet there is a discrete twin that trades a hard sum $\sum a_k b_k$ for an easier one. The
secret is to treat the *partial sums* of one factor as if they were an antiderivative.

## Discovery

1. Let $A_k = a_1 + a_2 + \cdots + a_k$ be the partial sums of $(a_k)$, with $A_0 = 0$. Express a
   single term $a_k$ using two consecutive partial sums. (This is the discrete analogue of
   "$a_k$ is the derivative of $A$".)
2. Substitute that expression for $a_k$ into $\sum_{k=1}^{n} a_k b_k$. You now have a sum
   involving $A_k - A_{k-1}$ multiplied by $b_k$. Split it into two sums.
3. In one of the two sums, shift the index so both sums run over the same $A_j$. Regroup the
   coefficient of each $A_k$. What single combination of $b_k$ and $b_{k+1}$ appears?
4. Read off the identity. Notice the structure: a boundary term $A_n b_n$ minus a new sum where
   the *differences* $b_{k+1} - b_k$ carry the weight — exactly parts, with $\sum$ for $\int$ and
   $A_k$ for the antiderivative.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $A_k = \sum_{i=1}^{k} a_i$ (with $A_0 = 0$). Then **Abel summation** (summation by parts)
states
$$\sum_{k=1}^{n} a_k b_k = A_n b_n - \sum_{k=1}^{n-1} A_k\,(b_{k+1} - b_k).$$
Equivalently, in the form that mirrors $\int u\,dv = uv - \int v\,du$: the running sum $A_k$ plays
the role of the antiderivative $v$, and $b_{k+1}-b_k$ the role of $du$.

### Proof

Since $a_k = A_k - A_{k-1}$ for $k\ge 1$ (with $A_0 = 0$),
$$\sum_{k=1}^{n} a_k b_k = \sum_{k=1}^{n} (A_k - A_{k-1})b_k
= \sum_{k=1}^{n} A_k b_k - \sum_{k=1}^{n} A_{k-1} b_k.$$
Reindex the second sum with $j = k-1$ (so $k = j+1$, running $j = 0,\dots,n-1$):
$$\sum_{k=1}^{n} A_{k-1}b_k = \sum_{j=0}^{n-1} A_j b_{j+1}
= \sum_{k=0}^{n-1} A_k b_{k+1} = \sum_{k=1}^{n-1} A_k b_{k+1},$$
where the last step drops the $k=0$ term because $A_0 = 0$. Subtracting,
$$\sum_{k=1}^n a_k b_k = \sum_{k=1}^{n} A_k b_k - \sum_{k=1}^{n-1} A_k b_{k+1}
= A_n b_n + \sum_{k=1}^{n-1} A_k b_k - \sum_{k=1}^{n-1} A_k b_{k+1},$$
having peeled the $k=n$ term $A_n b_n$ off the first sum. Combining the two remaining sums over
the common range gives $A_n b_n - \sum_{k=1}^{n-1} A_k(b_{k+1} - b_k)$. $\blacksquare$

### Worked Instance

Evaluate $\sum_{k=1}^{n} k\,2^{k}$ by Abel summation with $a_k = 2^k$, $b_k = k$. The partial sums
are $A_k = \sum_{i=1}^{k} 2^i = 2^{k+1} - 2$, and the differences are $b_{k+1} - b_k = 1$. Then
$$\sum_{k=1}^{n} k\,2^k = A_n\,b_n - \sum_{k=1}^{n-1} A_k = (2^{n+1}-2)n - \sum_{k=1}^{n-1}(2^{k+1}-2).$$
The leftover sum is geometric: $\sum_{k=1}^{n-1}(2^{k+1}-2) = (2^{n+1}-4) - 2(n-1)
= 2^{n+1} - 2n - 2$. Hence $\sum_{k=1}^{n} k\,2^k = n\,2^{n+1} - 2n - 2^{n+1} + 2n + 2
= (n-1)2^{n+1} + 2$. (Check $n=2$: $1\cdot2 + 2\cdot4 = 10$, and $(2-1)2^3 + 2 = 10$.)

### Pitfalls

- The convention $A_0 = 0$ is what kills the stray boundary term; forgetting it corrupts the
  identity.
- The new sum runs only to $n-1$ and weights $A_k$ by the **forward difference**
  $b_{k+1}-b_k$ — a sign or range slip here is the classic error.
- Abel summation is an exact algebraic identity, not an approximation; the analytic payoff
  (bounding tails, `ser-convergence-tests`) comes from *estimating* the resulting pieces.
- Choose which factor is $a_k$ and which is $b_k$ so that partial sums $A_k$ are easy and
  differences $b_{k+1}-b_k$ are simple — the wrong choice makes the "easier" sum harder.

:::
:::

## Connections

Prereqs: `ser-arith-geom`, whose partial sums are the $A_k$ this identity feeds on. Abel summation
is the workhorse behind Dirichlet's and Abel's convergence tests and behind bounding oscillating
sums — it powers `ser-convergence-tests`. Recognition trigger: a sum $\sum a_k b_k$ where one
factor has an easy running total and the other changes slowly (small differences). Appears on the
Putnam whenever a sum resists direct closed form but one factor's partial sums are tractable.
