For $a,b,c \ge 0$, AM–GM pins the average $\frac{a+b+c}{3}$ above the geometric mean $\sqrt[3]{abc}$. Sitting
between those two extremes is a third natural quantity, $\frac{ab+bc+ca}{3}$. Is it merely *somewhere*
in between, or is there a rigid, orderly ladder linking the arithmetic mean down to the geometric mean — and
if so, is that ladder just the $n=3$ shadow of a general law?

## Discovery

For $n$ numbers let $e_k$ be the $k$-th elementary symmetric function and define the **normalized** symmetric
means $p_k = e_k / \binom{n}{k}$. For $n=3$: $p_1 = \frac{a+b+c}{3}$, $p_2 = \frac{ab+bc+ca}{3}$, $p_3 = abc$.
1. Evaluate $p_1$, $\sqrt{p_2}$, and $\sqrt[3]{p_3}$ on $a=b=c=1$, then on $a=2, b=1, c=1$. From the two
   experiments, conjecture an ordering among these three quantities.
2. On the same two examples, compare $p_2^{2}$ against the product $p_1 p_3$. Conjecture a relation between a
   normalized mean's square and its two neighbors.
3. Now think in general $n$, with $p_k = e_k/\binom{n}{k}$. State two conjectures: one comparing $p_k^{2}$ to
   $p_{k-1}p_{k+1}$, and one giving a descending chain among the roots $p_k^{1/k}$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $a_1,\dots,a_n$ be real numbers and $p_k = e_k/\binom{n}{k}$ the normalized elementary symmetric means
($p_0 = 1$).

**Newton's inequalities.** For every $1 \le k \le n-1$,
$$p_k^{2} \;\ge\; p_{k-1}\,p_{k+1}.$$
That is, the sequence $(p_k)$ is **log-concave**. This holds for *all* real $a_i$.

**Maclaurin's inequality.** If in addition the $a_i$ are **positive**, then
$$p_1 \;\ge\; p_2^{1/2} \;\ge\; p_3^{1/3} \;\ge\; \cdots \;\ge\; p_n^{1/n},$$
with equality anywhere iff all the $a_i$ are equal. The two ends are $p_1 = \frac{1}{n}\sum a_i$ (the
arithmetic mean) and $p_n^{1/n} = \big(\prod a_i\big)^{1/n}$ (the geometric mean), so **Maclaurin refines
AM–GM into a full descending ladder**, and Newton is the log-concavity that makes the ladder monotone.

### Proof

**Newton's inequalities.** Consider $Q(x) = \prod_{i=1}^{n}(x + a_i) = \sum_{k=0}^{n}\binom{n}{k} p_k\,
x^{n-k}$; its roots $-a_i$ are all real. Two operations preserve "all roots real":

- *Differentiation.* $Q'(x) = \sum_{k=0}^{n-1}\binom{n}{k}p_k (n-k)\,x^{n-1-k} = n\sum_{k=0}^{n-1}
  \binom{n-1}{k}p_k\,x^{(n-1)-k}$, using $\binom{n}{k}(n-k) = n\binom{n-1}{k}$. So (up to the constant $n$)
  differentiation produces a degree-$(n-1)$ polynomial whose *normalized* coefficients are still
  $p_0,\dots,p_{n-1}$ — it simply drops the last one, $p_n$. By Rolle's theorem it keeps all roots real.
- *Reversal.* $x^{m}R(1/x)$ reverses the coefficient list, sending normalized coefficients $p_j \mapsto
  p_{m-j}$, and sends each root to its reciprocal (real, for nonzero roots).

Fix $k$ with $1 \le k \le n-1$. Differentiate $Q$ a total of $n-k-1$ times: a real-rooted degree-$(k+1)$
polynomial with normalized coefficients $p_0,\dots,p_{k+1}$. Reverse it (coefficients become
$p_{k+1},p_k,\dots,p_0$), then differentiate $k-1$ more times. The result is a real-rooted quadratic whose
normalized coefficients are $p_{k+1},\,p_k,\,p_{k-1}$, namely
$$\binom{2}{0}p_{k+1}\,x^{2} + \binom{2}{1}p_k\,x + \binom{2}{2}p_{k-1}
= p_{k+1}\,x^{2} + 2p_k\,x + p_{k-1}.$$
A quadratic with real roots has nonnegative discriminant, so $(2p_k)^2 \ge 4\,p_{k+1}\,p_{k-1}$, i.e.
$p_k^{2} \ge p_{k-1}\,p_{k+1}$. (If some $a_i = 0$, perturb $a_i \to a_i + \varepsilon$ to keep all factors
nonzero and let $\varepsilon \to 0$; the inequality is closed.) This proves Newton for all real $a_i$.

**Maclaurin's inequality.** Now let the $a_i$ be positive, so every $e_k \gt 0$ and every $p_k \gt 0$. Define
the ratios $r_k = p_k/p_{k-1}$ for $1 \le k \le n$. Newton's $p_k^{2} \ge p_{k-1}p_{k+1}$ rearranges to
$\frac{p_{k+1}}{p_k} \le \frac{p_k}{p_{k-1}}$, i.e. $r_{k+1} \le r_k$: the ratios are nonincreasing. Since
$p_0 = 1$, telescoping gives $p_k = r_1 r_2 \cdots r_k$, so $p_k^{1/k}$ is the geometric mean of
$r_1 \ge r_2 \ge \cdots \ge r_k$. Because $r_{k+1} \le r_j$ for every $j \le k$, we have $r_{k+1} \le
\min_j r_j \le p_k^{1/k}$; hence
$$\big(p_{k+1}^{1/(k+1)}\big)^{k+1} = p_{k+1} = p_k\, r_{k+1} = \big(p_k^{1/k}\big)^{k} r_{k+1}
\le \big(p_k^{1/k}\big)^{k}\, p_k^{1/k} = \big(p_k^{1/k}\big)^{k+1},$$
so $p_{k+1}^{1/(k+1)} \le p_k^{1/k}$. Chaining over $k$ yields Maclaurin. Equality anywhere forces all $r_k$
equal, hence all $a_i$ equal. $\blacksquare$

### Worked Instance

**Case $n = 3$.** With $p_1 = \frac{a+b+c}{3}$, $p_2 = \frac{ab+bc+ca}{3}$, $p_3 = abc$:

Newton ($k=2$) gives $p_2^{2} \ge p_1 p_3$, i.e. $\left(\frac{ab+bc+ca}{3}\right)^{2} \ge \frac{a+b+c}{3}\cdot
abc$, which cleans up to
$$(ab+bc+ca)^{2} \ge 3\,abc\,(a+b+c).$$

Maclaurin gives the refined chain
$$\frac{a+b+c}{3} \;\ge\; \sqrt{\frac{ab+bc+ca}{3}} \;\ge\; \sqrt[3]{abc},$$
whose outer inequality is exactly AM–GM for three numbers, now with a certified rung in between.

*Sanity check with $a=2, b=c=1$:* $p_1 = \tfrac43 \approx 1.333$, $\sqrt{p_2} = \sqrt{5/3} \approx 1.291$,
$\sqrt[3]{p_3} = \sqrt[3]{2} \approx 1.260$ — decreasing, as claimed. And $(ab+bc+ca)^2 = 5^2 = 25 \ge
3\cdot 2\cdot 4 = 24$. Both hold, with equality only when $a=b=c$.

### Pitfalls

- **Normalize by $\binom{n}{k}$.** The inequalities are about $p_k = e_k/\binom{n}{k}$, *not* the raw $e_k$.
  Forgetting the binomial factor breaks both statements.
- **Newton vs. Maclaurin scope.** Newton's $p_k^2 \ge p_{k-1}p_{k+1}$ holds for all real $a_i$; Maclaurin's
  root-chain needs the $a_i$ **positive** (else the fractional roots $p_k^{1/k}$ misbehave).
- **The chain is on $p_k^{1/k}$, not $p_k$.** The means are the $k$-th roots; the $p_k$ themselves are not
  monotone.
- **Equality only at all-equal.** Any strict inequality among the $a_i$ makes every rung strict.

:::
:::

## Connections

Prereqs: **alg-newton-identities** (the elementary symmetric functions $e_k$ and their normalization) and
**ineq-amgm** (the endpoints of Maclaurin's chain, which this node interpolates). The real-rootedness proof
uses Rolle's theorem from **ana-mvt**, and the log-concavity viewpoint opens onto modern real-stable and
log-concave polynomial theory and onto **la-trace-det-symmetric** (symmetric functions of eigenvalues).
Recognition trigger: a symmetric inequality in several variables that "smells like AM–GM but with the middle
symmetric sums," or any need to compare $e_k$'s of the same list. A Putnam and olympiad favorite.

## History

Isaac Newton recorded these inequalities in his *Arithmetica Universalis* (compiled from Cambridge lectures and
published in 1707), where he used the sign pattern of the symmetric functions to bound the number of real and
imaginary roots of a polynomial — the inequalities were a tool in that root-counting, stated with little proof.
Colin Maclaurin took up the arithmetic-to-geometric-mean chain in a 1729 *Philosophical Transactions* paper,
supplying the mean inequalities that now bear his name. Rigorous general proofs came later; the elegant argument
that differentiation and coefficient-reversal preserve real-rootedness (via Rolle) became standard through the
nineteenth-century theory of equations, to which James Joseph Sylvester and others contributed. In modern terms
Newton's inequalities are the classical seed of log-concavity, a theme that has flowered into the theory of
real-stable polynomials and, via work of June Huh and collaborators, into deep results in combinatorial
geometry.
