Two positive numbers with a fixed sum, say $x + y = 10$: their product $xy$ is biggest when
$x = y = 5$ (giving $25$), and shrinks as they spread apart ($1 \cdot 9 = 9$). Their average
never dips below the square root of their product. Is that a coincidence of $10$, or a law?

## Discovery

1. Take positive reals $a, b$. Set $u = \sqrt a$, $v = \sqrt b$, so $a = u^2$, $b = v^2$. Apply
   the trivial inequality to $(u - v)^2$. What relation between $a + b$ and $\sqrt{ab}$ pops out?
2. When is that two-variable relation an equality? Translate the condition back to $a$ and $b$.
3. Now four numbers. Group $a,b,c,d$ as two pairs, apply the two-variable result to each pair,
   then apply it once more to the two resulting means. What inequality relating
   $\frac{a+b+c+d}{4}$ and $(abcd)^{1/4}$ emerges? Why did powers of $2$ make this painless?
4. Suppose you have the result for $n$ numbers but want it for $n - 1$. Introduce an $n$-th
   number equal to the average of the other $n - 1$. Feed this into the $n$-variable statement.
   What happens to the extra term, and what are you left with? (This is the surprising downward
   step.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For nonnegative reals $a_1, \dots, a_n$,
$$\frac{a_1 + a_2 + \cdots + a_n}{n} \;\ge\; \sqrt[n]{a_1 a_2 \cdots a_n},$$
the **arithmetic mean** dominates the **geometric mean**, with equality if and only if
$a_1 = a_2 = \cdots = a_n$.

### Proof

**Base ($n = 2$).** With $a, b \ge 0$, $(\sqrt a - \sqrt b)^2 \ge 0$ gives
$a + b - 2\sqrt{ab} \ge 0$, i.e. $\frac{a+b}{2} \ge \sqrt{ab}$, equality iff $\sqrt a = \sqrt b$,
i.e. $a = b$.

**Forward step to powers of $2$.** If the claim holds for $n$, it holds for $2n$: split
$a_1, \dots, a_{2n}$ into two blocks of $n$, apply the $n$-case to each block to get their
arithmetic means $A_1, A_2$ bounding the geometric means, then apply the $n=2$ case to
$A_1, A_2$. Chaining gives the result for all $n = 2^k$.

**Backward step (Cauchy's descent).** Suppose the claim holds for $n$; we prove it for $n - 1$.
Given $a_1, \dots, a_{n-1} \ge 0$, let $A = \frac{a_1 + \cdots + a_{n-1}}{n-1}$ and set the
$n$-th number to $A$. The $n$-variable inequality reads
$$\frac{a_1 + \cdots + a_{n-1} + A}{n} \ge \left(a_1 \cdots a_{n-1} \cdot A\right)^{1/n}.$$
The left side is $\frac{(n-1)A + A}{n} = A$. So $A \ge (a_1 \cdots a_{n-1} \cdot A)^{1/n}$;
raising to the $n$-th power, $A^n \ge a_1 \cdots a_{n-1} \cdot A$, hence
$A^{n-1} \ge a_1 \cdots a_{n-1}$, i.e. $A \ge (a_1 \cdots a_{n-1})^{1/(n-1)}$.

Since every integer lies below some power of $2$, the forward step reaches it and the backward
step descends to it; so the inequality holds for all $n$. Equality propagates through each step
only when all entries coincide. $\blacksquare$

### Worked Instance

Maximize $xy$ subject to $x + y = 10$, $x, y \gt 0$. By AM–GM,
$$\sqrt{xy} \le \frac{x + y}{2} = 5 \quad\Longrightarrow\quad xy \le 25,$$
with equality iff $x = y$, i.e. $x = y = 5$. So the maximum product is $25$, confirming the
Hook: the balanced split wins, and it is a theorem, not an accident of $10$.

### Pitfalls

- AM–GM needs the $a_i$ to be **nonnegative**; it can fail outright for negative numbers
  (e.g. $a = -1, b = -1$ gives GM $= 1$ but AM $= -1$).
- Equality requires **all** variables equal, not merely two of them. In a chain of AM–GM
  steps, every step must be tight simultaneously.
- The geometric mean uses the $n$-th root of the *product*, not the product of $n$-th roots of
  each — keep the single radical over the whole product.

:::
:::

## Connections

Prereqs: the trivial inequality (the base case is one square). AM–GM is the workhorse of
olympiad inequalities and the parent of the power-mean inequality, Jensen's inequality
(AM–GM is Jensen for $\log$), weighted AM–GM, Schur, and normalization arguments.
Recognition trigger: a symmetric product-vs-sum comparison, or a constraint fixing a sum while
you optimize a product (or vice versa). Ubiquitous on the AMC/AIME, Putnam, and IMO.
