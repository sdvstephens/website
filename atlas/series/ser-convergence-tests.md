The harmonic sum $1 + \tfrac12 + \tfrac13 + \tfrac14 + \cdots$ grows without bound — slowly, but
forever. Nudge the exponent up a hair to $1 + \tfrac1{2^{1.01}} + \tfrac1{3^{1.01}} + \cdots$ and
suddenly the total is finite. How can you decide, *without summing*, whether infinitely many
positive terms add up to something finite?

## Discovery

1. Compare two positive series termwise: if $0 \le a_k \le b_k$ for all $k$ and $\sum b_k$ is
   finite, what can you say about $\sum a_k$? What about the contrapositive (if $\sum a_k$ is
   infinite)? This is the **comparison** idea.
2. A geometric series $\sum r^k$ converges exactly when $\lvert r\rvert \lt 1$. For a general
   positive series, look at the ratio $a_{k+1}/a_k$ for large $k$. If this ratio settles toward a
   limit $L$, when should the series behave like a convergent geometric one, and when like a
   divergent one?
3. Repeat the geometric comparison but through $\sqrt[k]{a_k}$ instead of the ratio. What limit
   condition on $\sqrt[k]{a_k}$ predicts convergence?
4. For terms $a_k = f(k)$ with $f$ positive and decreasing, sketch the rectangles of area $a_k$
   against the curve $y = f(x)$. Why does $\sum_{k} a_k$ converge exactly when $\int^{\infty} f$
   converges? Use this to settle the harmonic case ($f(x) = 1/x$) and the $p = 1.01$ case.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a series $\sum_{k\ge 1} a_k$ of **positive** terms:

- **Comparison test.** If $0 \le a_k \le b_k$ and $\sum b_k$ converges, then $\sum a_k$ converges;
  if $a_k \ge b_k \ge 0$ and $\sum b_k$ diverges, then $\sum a_k$ diverges.
- **Ratio test.** If $\lim_{k\to\infty} \dfrac{a_{k+1}}{a_k} = L$, then $\sum a_k$ converges for
  $L \lt 1$ and diverges for $L \gt 1$; $L = 1$ is inconclusive.
- **Root test.** If $\lim_{k\to\infty} \sqrt[k]{a_k} = L$, then $\sum a_k$ converges for
  $L \lt 1$ and diverges for $L \gt 1$; $L = 1$ is inconclusive.
- **Integral test.** If $f$ is positive, continuous, and decreasing with $f(k) = a_k$, then
  $\sum a_k$ and $\int_1^{\infty} f(x)\,dx$ converge or diverge together.

A consequence: the $p$-series $\sum k^{-p}$ converges iff $p \gt 1$.

### Proof

**Comparison.** Partial sums $S_n = \sum_{k=1}^n a_k$ are nondecreasing (positive terms). If
$a_k \le b_k$ then $S_n \le \sum_{k=1}^n b_k \le \sum_{k=1}^\infty b_k =: B \lt \infty$, so
$(S_n)$ is bounded above and monotone, hence converges. The divergent contrapositive is immediate.

**Ratio test ($L \lt 1$).** Choose $\rho$ with $L \lt \rho \lt 1$. By the limit, there is $N$ with
$a_{k+1}/a_k \lt \rho$ for all $k \ge N$, so $a_{N+j} \lt \rho^{j} a_N$. Then
$\sum_{j\ge 0} a_{N+j} \lt a_N \sum_{j\ge 0}\rho^j = \dfrac{a_N}{1-\rho} \lt \infty$, and comparison
finishes it. If $L \gt 1$, eventually $a_{k+1} \gt a_k \gt 0$, so $a_k \not\to 0$ and the series
diverges (a convergent series must have $a_k \to 0$).

**Root test ($L \lt 1$).** Choose $\rho \in (L,1)$. Eventually $\sqrt[k]{a_k} \lt \rho$, i.e.
$a_k \lt \rho^k$; comparison with the convergent geometric series $\sum \rho^k$ gives convergence.
If $L \gt 1$ then $a_k \gt 1$ infinitely often, so $a_k \not\to 0$ and it diverges.

**Integral test.** Since $f$ decreases, on $[k, k+1]$ we have $f(k+1) \le f(x) \le f(k)$, so
integrating, $a_{k+1} = f(k+1) \le \int_k^{k+1} f \le f(k) = a_k$. Summing over $k = 1,\dots,n-1$,
$$\sum_{k=2}^{n} a_k \le \int_1^{n} f(x)\,dx \le \sum_{k=1}^{n-1} a_k.$$
Thus the partial sums and the integral are each squeezed by the other; one is bounded iff the
other is, so they converge together. Applying this to $f(x) = x^{-p}$: $\int_1^\infty x^{-p}\,dx$
is finite iff $p \gt 1$, giving the $p$-series criterion (and the harmonic case $p=1$ diverges,
while $p = 1.01 \gt 1$ converges). $\blacksquare$

### Worked Instance

The Hook: harmonic series $\sum 1/k$ has $f(x) = 1/x$, and $\int_1^n \tfrac{dx}{x} = \ln n
\to \infty$, so it **diverges** by the integral test. The nudged series $\sum k^{-1.01}$ has
$\int_1^\infty x^{-1.01}\,dx = \dfrac{1}{0.01} \lt \infty$, so it **converges** — a hair above
$p = 1$ is all it takes. Meanwhile $\sum \dfrac{2^k}{k!}$ yields ratio
$\dfrac{a_{k+1}}{a_k} = \dfrac{2^{k+1}/(k+1)!}{2^k/k!} = \dfrac{2}{k+1} \to 0 \lt 1$, so it
converges by the ratio test.

### Pitfalls

- These tests as stated assume **positive** terms. For signed series you need absolute
  convergence or a dedicated tool (e.g. the alternating series test / Abel summation).
- $L = 1$ is genuinely **inconclusive** for both ratio and root tests — the harmonic ($p=1$,
  diverges) and $\sum 1/k^2$ ($p=2$, converges) both give $L = 1$.
- The integral test needs $f$ **decreasing** (eventually); it fails for oscillating $f$.
- $a_k \to 0$ is **necessary but not sufficient** — the harmonic series has $a_k\to 0$ yet
  diverges. Never conclude convergence from $a_k\to 0$ alone.

:::
:::

## Connections

Prereqs: `ana-limits` — every test is a statement about a limit ($a_{k+1}/a_k$, $\sqrt[k]{a_k}$,
or an improper integral). Comparison is the parent idea; ratio and root are geometric comparisons
in disguise, and the integral test bridges sums to `ana-riemann-sums`. Convergence is the
gatekeeper for Taylor series (`ana-taylor`), where the ratio test computes radii of convergence.
Recognition trigger: an infinite sum where you must decide *whether* it has a value before finding
it — factorials/exponentials suggest the ratio test, $k$-th powers the root test, and a clean
decreasing $f(k)$ the integral test.
