Three familiar averages of $1$ and $2$: the arithmetic mean is $1.5$, the geometric mean is
$\sqrt 2 \approx 1.414$, the root-mean-square is $\sqrt{2.5} \approx 1.581$. They line up in a
fixed order — and there is a single dial, an exponent, that generates all of them and forces
that order. What is the dial?

## Discovery

1. For positive reals $a_1, \dots, a_n$ and a nonzero real $r$, define the **power mean**
   $M_r = \left(\frac{1}{n}\sum a_i^r\right)^{1/r}$. Compute $M_1$, $M_2$, and $M_{-1}$ for the
   data $\{1, 2\}$. Which classic averages are these?
2. Start with the simplest comparison: prove $M_2 \ge M_1$ for two numbers using the trivial
   inequality (relate $\frac{a^2 + b^2}{2}$ to $\left(\frac{a+b}{2}\right)^2$). Is the direction
   what your Hook data suggested?
3. What happens to $M_r$ as $r \to 0$? Compute $M_r$ for $\{1,2\}$ at $r = 0.1$ and $r = -0.1$
   and compare to the geometric mean $\sqrt 2$. Form a conjecture about the limiting value.
4. Assemble a guess: as the exponent $r$ increases over all reals, does $M_r$ increase, decrease,
   or wobble? State the full ordering you expect among $M_{-1}, M_0, M_1, M_2$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For positive reals $a_1, \dots, a_n$ and reals $r \lt s$, the power means satisfy
$$M_r \;\le\; M_s, \qquad M_r := \left(\frac{1}{n}\sum_{i=1}^n a_i^{\,r}\right)^{1/r} \ (r \ne 0),
\quad M_0 := \left(\prod_{i=1}^n a_i\right)^{1/n},$$
with equality if and only if all $a_i$ are equal. The map $r \mapsto M_r$ is nondecreasing;
$M_{-1}, M_0, M_1, M_2$ are the harmonic, geometric, arithmetic, and quadratic means, and
$M_0 = \lim_{r\to 0} M_r$.

### Proof

We first prove $M_r \le M_s$ for $0 \lt r \lt s$. Put $t = s/r \gt 1$ and
$w_i = a_i^{\,r}$. The function $x \mapsto x^t$ is convex on $[0,\infty)$ for $t \gt 1$, so by
the convexity form of the mean inequality (equivalently, weighted power comparison),
$$\left(\frac{1}{n}\sum w_i\right)^{t} \le \frac{1}{n}\sum w_i^{\,t}
\quad\Longleftrightarrow\quad \left(\frac{1}{n}\sum a_i^{\,r}\right)^{s/r} \le \frac{1}{n}\sum a_i^{\,s}.$$
Raising both sides to the power $1/s \gt 0$ preserves the inequality and yields
$M_r \le M_s$.

**Extending across $0$.** For $r \lt 0 \lt s$, note that replacing each $a_i$ by $1/a_i$ swaps
$M_r \leftrightarrow 1/M_{-r}$, so the negative-exponent case reduces to the positive one; and
$M_r \le M_0 \le M_s$ follows because $\ln M_r$ is a continuous, nondecreasing function of $r$
whose limit at $0$ is $\frac1n \sum \ln a_i = \ln M_0$ (l'Hôpital on $\frac{\ln(\frac1n\sum a_i^r)}{r}$).

**AM–GM as a special case.** Taking $r = 0, s = 1$ recovers $M_0 \le M_1$, which is exactly
AM–GM. Equality throughout requires the convexity step to be tight, forcing all $a_i$ equal.
$\blacksquare$

### Worked Instance

For the data $\{1, 2\}$ ($n = 2$): the harmonic mean $M_{-1} = \frac{2}{1 + 1/2} = \frac43
\approx 1.333$, geometric $M_0 = \sqrt 2 \approx 1.414$, arithmetic $M_1 = 1.5$, quadratic
$M_2 = \sqrt{\frac{1 + 4}{2}} = \sqrt{2.5} \approx 1.581$. Indeed
$$M_{-1} \le M_0 \le M_1 \le M_2,$$
matching the Hook exactly, and all inequalities are strict because $1 \ne 2$.

### Pitfalls

- $M_0$ must be *defined* as the geometric mean (the formula $\left(\frac1n\sum a_i^r\right)^{1/r}$
  is a $0/0$ indeterminate at $r=0$); it is the limit, not a plug-in.
- Requires all $a_i \gt 0$ for non-integer exponents to make sense.
- The inequality direction hinges on the sign of the outer exponent $1/s$: when $s \lt 0$,
  raising to $1/s$ *reverses* the inequality, which is exactly why the ordering still comes out
  monotone — track the sign carefully rather than memorizing a single direction.

:::
:::

## Connections

Prereqs: AM–GM, which is the single case $r = 0, s = 1$; the general theorem packages AM–GM,
the arithmetic–harmonic mean bound, and the RMS–AM bound into one monotone family. It leans on
convexity, foreshadowing Jensen's inequality. Recognition trigger: a problem juxtaposing two
different "average" expressions (e.g. $\sum a_i^2$ against $(\sum a_i)^2$, or a harmonic sum
against an arithmetic one). Appears on the Putnam and in olympiad inequality chains.
