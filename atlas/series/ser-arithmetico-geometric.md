Consider $\dfrac{1}{2} + \dfrac{3}{4} + \dfrac{5}{8} + \dfrac{7}{16} + \cdots$: the numerators march
up arithmetically ($1, 3, 5, 7, \dots$) while the denominators double geometrically. Neither an
arithmetic sum nor a geometric one, this hybrid still adds to something exact. The pure case
$\sum k\,r^k$ already yielded to multiply-and-subtract — does an arbitrary arithmetic weight succumb
to the same move?

## Discovery

1. Write the general term: an arithmetic factor $a + (k-1)d$ times a geometric factor $r^k$. Set
   $S_n = \sum_{k=1}^{n} \big(a + (k-1)d\big)\,r^k$. Following the perturbation recipe, form $r S_n$
   and line it up under $S_n$ by matching powers of $r$.
2. Subtract to get $(1 - r)S_n$. At each interior power $r^k$, the arithmetic coefficient of $S_n$
   meets the shifted coefficient of $rS_n$; compute the difference of those two arithmetic weights.
   What kind of coefficient is left — and so what kind of series does the interior collapse to?
3. Sum that interior series with the geometric formula, reattach the two boundary terms, and solve
   for $S_n$. Then let $n \to \infty$ under $|r| \lt 1$: which terms vanish, and what closed form
   survives?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For the arithmetico-geometric series $S_n = \displaystyle\sum_{k=1}^{n} \big(a + (k-1)d\big) r^k$ with
$r \ne 1$, one multiply-and-subtract gives the closed form
$$S_n = \frac{a r - \big(a + (n-1)d\big) r^{n+1}}{1 - r}
\;+\; \frac{d\,\big(r^2 - r^{n+1}\big)}{(1 - r)^2}.$$
When $|r| \lt 1$, both $r^{n+1} \to 0$ and $n\,r^{n+1} \to 0$, so the infinite sum converges to
$$\boxed{\ \sum_{k=1}^{\infty} \big(a + (k-1)d\big) r^k = \frac{a r}{1 - r} + \frac{d\,r^2}{(1 - r)^2}. \ }$$
The mechanism is **perturbation**: multiplying by the common ratio $r$ and subtracting demotes the
arithmetic weight to a *constant* ($d$) inside a plain geometric sum. Setting $a = d = 1$ recovers
$\sum k\,r^k = \dfrac{r}{(1-r)^2}$.

### Proof

Let $S_n = \sum_{k=1}^{n}\big(a+(k-1)d\big)r^k$. Multiplying by $r$ and reindexing,
$$r S_n = \sum_{k=1}^{n}\big(a+(k-1)d\big)r^{k+1} = \sum_{k=2}^{n+1}\big(a+(k-2)d\big)r^{k}.$$
Subtract, aligning by powers of $r$. The $k=1$ term ($a r$) appears only in $S_n$; the $k=n+1$ term
($\big(a+(n-1)d\big)r^{n+1}$) only in $rS_n$; and for $2 \le k \le n$ the coefficient of $r^k$ is
$$\big(a+(k-1)d\big) - \big(a+(k-2)d\big) = d.$$
Hence
$$(1-r)S_n = a r + d\sum_{k=2}^{n} r^k - \big(a+(n-1)d\big)r^{n+1}.$$
The interior sum is geometric: $\displaystyle\sum_{k=2}^{n} r^k = \frac{r^2 - r^{n+1}}{1-r}$
(valid for $r \ne 1$). Substituting and dividing by $1-r$,
$$S_n = \frac{a r - \big(a+(n-1)d\big)r^{n+1}}{1-r} + \frac{d\,(r^2 - r^{n+1})}{(1-r)^2}.$$
For $|r| \lt 1$, $r^{n+1} \to 0$ and $n r^{n+1} \to 0$ (geometric decay dominates the linear factor),
so the $r^{n+1}$-terms drop out, leaving $S_\infty = \dfrac{a r}{1-r} + \dfrac{d\,r^2}{(1-r)^2}$.
$\blacksquare$

### Worked Instance

Resolve the Hook: numerators $1,3,5,7,\dots$ mean $a = 1$, $d = 2$, and denominators $2,4,8,16,\dots$
mean $r = \tfrac12$. Then
$$\sum_{k=1}^{\infty}(2k-1)\left(\tfrac12\right)^k = \frac{a r}{1-r} + \frac{d\,r^2}{(1-r)^2}
= \frac{\tfrac12}{\tfrac12} + \frac{2\cdot\tfrac14}{\left(\tfrac12\right)^2} = 1 + \frac{1/2}{1/4} = 1 + 2 = 3.$$
Cross-check by splitting: $\sum(2k-1)(\tfrac12)^k = 2\sum k(\tfrac12)^k - \sum(\tfrac12)^k = 2\cdot 2 - 1 = 3$,
using $\sum k(\tfrac12)^k = 2$ and $\sum(\tfrac12)^k = 1$. ✓ A finite example: $\sum_{k=1}^{3} k\,2^k =
1\cdot2 + 2\cdot4 + 3\cdot8 = 34$; the formula with $a=d=1$, $r=2$, $n=3$ gives $\dfrac{2 - 3\cdot16}{-1}
+ \dfrac{4 - 16}{1} = 46 - 12 = 34$. ✓

### Pitfalls

- **The denominator is $(1-r)^2$**, squared — one factor from collapsing the geometric interior, one
  from solving for $S$. A lone $(1-r)$ is the usual slip.
- **Keep both boundary terms.** The head ($ar$) and tail ($\big(a+(n-1)d\big)r^{n+1}$) are exactly
  what separate the answer from a bare geometric sum; dropping them corrupts the finite formula.
- **Align by power of $r$, not by position**, before subtracting; the arithmetic weights only differ
  by the constant $d$ when the same power is compared.
- **Infinite form needs $|r| \lt 1$.** For $|r| \ge 1$ (as in $\sum k\,2^k$) only the *finite* formula
  applies; the series diverges.
- **Mind the indexing of $a$.** Here the first weight is $a$ (at $k=1$); if a problem starts the
  arithmetic part elsewhere, re-anchor $a$ and $d$ before quoting the formula.

:::
:::

## Connections

This is **perturbation** ([ser-perturbation]) pushed one step past $\sum k\,r^k$: an arbitrary
*arithmetic* weight $a + (k-1)d$, not just $k$, still demotes to the constant $d$ under
multiply-and-subtract, so the whole family reduces to a **geometric series** ([ser-arith-geom]).
Higher polynomial weights repeat the trick (or differentiate the geometric series), the doorway to
generating functions. Recognition trigger: a sum whose terms are (linear in $k$) $\times$ (constant$^k$)
— arithmetic numerators over geometric denominators, or expected values of geometric-type distributions.
