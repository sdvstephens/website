In the plane, $\sqrt{a^2 + b^2}$ is the length of the vector $(a,b)$, and the triangle inequality says
$\|u+v\| \le \|u\| + \|v\|$: a detour is never shorter than the direct path. That is the Euclidean, $p=2$,
way of measuring length. Suppose instead you measure a vector's size by $\big(\sum |x_i|^{p}\big)^{1/p}$ for
some other $p$. Does the triangle inequality still hold, or is it a special privilege of $p=2$?

## Discovery

Fix $p \gt 1$ and write $N_p(x) = \big(\sum_i |x_i|^{p}\big)^{1/p}$. The goal is
$N_p(a+b) \le N_p(a) + N_p(b)$.
1. Start from $\sum_i |a_i + b_i|^{p}$ and peel off one factor: $|a_i+b_i|^{p} = |a_i+b_i|\cdot
   |a_i+b_i|^{p-1}$. Then bound $|a_i+b_i| \le |a_i| + |b_i|$. What two sums does this split the total into?
2. Each of your two sums has the shape $\sum_i (\text{a term}) \cdot |a_i+b_i|^{p-1}$. Apply Hölder to each,
   with exponents $p$ and $q = \dfrac{p}{p-1}$. Using $(p-1)q = p$, what do the two sums become?
3. Assemble the pieces. You should reach $\sum_i |a_i+b_i|^{p} \le \big(N_p(a) + N_p(b)\big)\cdot
   \big(\sum_i |a_i+b_i|^{p}\big)^{1 - 1/p}$. Divide through (handling the all-zero case). What inequality
   survives?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Minkowski's inequality.** For $p \ge 1$ and real (or complex) sequences $a_1,\dots,a_n$ and
$b_1,\dots,b_n$,
$$\Big(\sum_{i=1}^{n} |a_i + b_i|^{p}\Big)^{1/p} \;\le\;
\Big(\sum_{i=1}^{n} |a_i|^{p}\Big)^{1/p} + \Big(\sum_{i=1}^{n} |b_i|^{p}\Big)^{1/p},$$
i.e. $N_p(a+b) \le N_p(a) + N_p(b)$. For $p \gt 1$, equality holds iff $a$ and $b$ are nonnegatively
proportional (one is a nonnegative scalar multiple of the other). This is exactly the **triangle inequality
for the $p$-norm** — equivalently, the statement that the $\ell^p$ unit ball is convex. For $p = 1$ it is the
ordinary triangle inequality applied termwise, and for $0 \lt p \lt 1$ the inequality *reverses*.

### Proof

Assume $p \gt 1$; the case $p = 1$ is just $|a_i + b_i| \le |a_i| + |b_i|$ summed. Let $q = \frac{p}{p-1}$, so
$\frac1p + \frac1q = 1$. If $\sum_i |a_i+b_i|^{p} = 0$ the left side is $0$ and there is nothing to prove, so
assume it is positive.

Start from the triangle inequality on each term and split:
$$\sum_i |a_i+b_i|^{p} = \sum_i |a_i+b_i|\,|a_i+b_i|^{p-1}
\le \sum_i |a_i|\,|a_i+b_i|^{p-1} + \sum_i |b_i|\,|a_i+b_i|^{p-1}.$$
Apply **Hölder** (**ineq-holder**) to each sum with exponents $p$ (on the first factor) and $q$ (on
$|a_i+b_i|^{p-1}$). Since $(p-1)q = p$,
$$\sum_i |a_i|\,|a_i+b_i|^{p-1} \le \Big(\sum_i |a_i|^{p}\Big)^{1/p}\Big(\sum_i |a_i+b_i|^{p}\Big)^{1/q}
= N_p(a)\Big(\sum_i |a_i+b_i|^{p}\Big)^{1/q},$$
and likewise with $b$. Adding the two,
$$\sum_i |a_i+b_i|^{p} \le \big(N_p(a) + N_p(b)\big)\Big(\sum_i |a_i+b_i|^{p}\Big)^{1/q}.$$
Divide both sides by the positive quantity $\big(\sum_i |a_i+b_i|^{p}\big)^{1/q}$. The left side becomes
$\big(\sum_i |a_i+b_i|^{p}\big)^{1 - 1/q} = \big(\sum_i |a_i+b_i|^{p}\big)^{1/p} = N_p(a+b)$, giving
$$N_p(a+b) \le N_p(a) + N_p(b).$$
Equality forces equality in both Hölder applications and in each termwise triangle step, which together pin
down $a$ and $b$ as nonnegatively proportional. $\blacksquare$

### Worked Instance

**The plane triangle inequality ($p = 2$).** Minkowski with $p=2$ and two-component vectors $(a,b)$ and
$(c,d)$ reads
$$\sqrt{(a+c)^2 + (b+d)^2} \;\le\; \sqrt{a^2 + b^2} + \sqrt{c^2 + d^2},$$
the familiar "sum of two side lengths dominates the third," recovered as pure algebra with equality iff
$(a,b)$ and $(c,d)$ point the same way.

**A shortest-path bound.** Minimize $f(x) = \sqrt{x^2 + 9} + \sqrt{(10-x)^2 + 16}$ over real $x$. Read the two
terms as the lengths of $(x,3)$ and $(10-x,4)$. By Minkowski,
$$\sqrt{x^2+9} + \sqrt{(10-x)^2+16} \ge \sqrt{\big(x + (10-x)\big)^2 + (3+4)^2} = \sqrt{10^2 + 7^2} = \sqrt{149},$$
with equality when the two vectors are parallel — i.e. when $\tfrac{3}{x} = \tfrac{4}{10-x}$, giving
$x = \tfrac{30}{7}$. So the minimum is $\sqrt{149}$, obtained with no calculus at all.

### Pitfalls

- **Needs $p \ge 1$.** For $0 \lt p \lt 1$ the inequality reverses, because $N_p$ is no longer a norm (its
  unit "ball" is nonconvex).
- **The Hölder step uses the conjugate $q = \frac{p}{p-1}$,** and the identity $(p-1)q = p$ is what makes the
  exponents line up. Miss it and the peeling fails.
- **Equality is nonnegative proportionality** — same direction, not merely parallel. Antiparallel vectors do
  not give equality for $p \gt 1$.
- **Handle the degenerate sum.** If $\sum_i |a_i+b_i|^{p} = 0$ you cannot divide; treat it as a separate,
  trivial case.

:::
:::

## Connections

Prereq: **ineq-holder**, whose conjugate-exponent bound is the exact tool that peels each term. Minkowski is
the inequality that makes $N_p$ a genuine norm, so it founds **ser-convergence-tests** in $\ell^p$/$L^p$
settings and the geometry of normed spaces; its $p=2$ case is the Euclidean triangle inequality behind
**geo-vectors** and **geo-triangle-inequality**. Recognition trigger: a sum of $p$-th-root (especially
square-root) expressions to be combined or minimized, or any claim that a $p$-norm is subadditive — read the
terms as vector lengths and add the vectors. Appears on the Putnam and in analysis qualifying material.

## History

Hermann Minkowski proved the inequality around the turn of the twentieth century as part of his *Geometrie der
Zahlen* (geometry of numbers, 1896 and after), where convex bodies and lattice points were the central actors;
subadditivity of $\big(\sum|x_i|^p\big)^{1/p}$ is precisely the convexity of the associated unit body. The
result became a cornerstone of functional analysis when Frigyes Riesz and, later, Stefan Banach organized the
$L^p$ and $\ell^p$ spaces (the 1920s–30s): Minkowski's inequality is exactly what certifies that the $p$-norm
satisfies the triangle inequality, so that these spaces are normed vector spaces at all. Thus a theorem born in
number-theoretic geometry turned out to supply the backbone of twentieth-century analysis, and its $p=2$ shadow
is the plainest fact of Euclidean geometry.
