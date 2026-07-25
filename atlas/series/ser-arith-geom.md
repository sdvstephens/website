Fold a strip of paper in half, then in half again, forever adding
$\tfrac12 + \tfrac14 + \tfrac18 + \cdots$. You never reach the far edge, yet the
total refuses to pass $1$. Why does an unending sum settle on a finite, clean number?

## Discovery

1. Take the arithmetic sum $S = 3 + 7 + 11 + \cdots + 39$ (step $4$). Write it forwards,
   then write it again backwards underneath. Add the two rows term by term: what is
   every column equal to, and how many columns are there?
2. Use that to get $S$ in closed form. Now redo it for a general arithmetic sum with
   first term $a$, common difference $d$, and $n$ terms. What do you get?
3. Switch to a geometric sum $G = 1 + r + r^2 + \cdots + r^{n-1}$. Multiplying a whole
   sum by $r$ just shifts every term one slot over. Compute $rG$ and subtract it from
   $G$: which terms survive?
4. Solve your equation from step 3 for $G$ (assume $r \ne 1$). Now let $n \to \infty$ with
   $\lvert r\rvert \lt 1$: which piece disappears, and what finite value is left?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Arithmetic series.** For $n$ terms with first term $a$ and common difference $d$,
$$\sum_{k=0}^{n-1} (a + kd) = na + d\,\frac{n(n-1)}{2} = \frac{n}{2}\bigl(\text{first} + \text{last}\bigr).$$

**Geometric series.** For $r \ne 1$,
$$\sum_{k=0}^{n-1} r^{k} = \frac{1 - r^{n}}{1 - r},$$
and if $\lvert r\rvert \lt 1$ then $\sum_{k=0}^{\infty} r^{k} = \dfrac{1}{1-r}$.

### Proof

**Arithmetic.** Let $S = \sum_{k=0}^{n-1}(a+kd)$. Writing the same sum with the index
reversed, $S = \sum_{k=0}^{n-1}\bigl(a + (n-1-k)d\bigr)$. Adding the two expressions
termwise, each of the $n$ paired terms equals $2a + (n-1)d = (\text{first}) + (\text{last})$,
so $2S = n\bigl(2a + (n-1)d\bigr)$, giving $S = \tfrac{n}{2}\bigl(2a+(n-1)d\bigr)$. $\blacksquare$

**Geometric.** Let $G = \sum_{k=0}^{n-1} r^{k}$. Then
$rG = \sum_{k=0}^{n-1} r^{k+1} = \sum_{k=1}^{n} r^{k}$, so
$G - rG = r^0 - r^n = 1 - r^n$. Since $r \ne 1$ we may divide by $1-r$:
$G = \dfrac{1-r^n}{1-r}$. If $\lvert r\rvert \lt 1$ then $r^n \to 0$ as $n\to\infty$, and the
limit is $\dfrac{1}{1-r}$. $\blacksquare$

### Worked Instance

The folding strip is $\sum_{k=1}^{\infty} \tfrac{1}{2^k}$. Pull out one factor of $\tfrac12$:
it equals $\tfrac12\sum_{k=0}^{\infty}\bigl(\tfrac12\bigr)^k = \tfrac12\cdot\dfrac{1}{1-\tfrac12}
= \tfrac12\cdot 2 = 1$. So the total is exactly $1$ — the strip's full length — approached but
never exceeded, resolving the Hook.

### Pitfalls

- The geometric formula divides by $1-r$, so it is **invalid at $r=1$** (there the sum is
  just $n$).
- Count terms carefully: $\sum_{k=0}^{n-1}$ has $n$ terms, not $n-1$. Off-by-one here is the
  classic error.
- The infinite geometric sum needs $\lvert r\rvert \lt 1$; for $\lvert r\rvert \ge 1$ it
  diverges.
- $\frac{1-r^n}{1-r}$ and $\frac{r^n-1}{r-1}$ are equal — don't let a stray sign fool you.

:::
:::

## Connections

Prereqs: Gauss pairing, which is exactly the arithmetic argument in miniature. These two
closed forms are the backbone of the whole series domain: perturbation (multiply-and-subtract
generalized to $\sum k r^k$), generating functions (power series are geometric series in
disguise), and Abel summation all lean on them. Recognition trigger: a sum whose terms grow by
a constant *difference* (arithmetic) or a constant *ratio* (geometric). Ubiquitous on the
AMC/AIME and as a subroutine in nearly every olympiad summation.
