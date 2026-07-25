Plain AM–GM treats every number equally. But suppose you value one term three times as much as
another — you want $\frac{3a + b}{4}$ versus some skewed "geometric" counterpart. Which product
of powers pairs with a lopsided average? And does the same "average beats product" law survive
when the weights are uneven?

## Discovery

1. Recall Jensen for the convex function $f(x) = -\ln x$ on $(0,\infty)$: for weights
   $w_1, \dots, w_n \ge 0$ with $\sum w_i = 1$, what inequality relates
   $-\ln\!\left(\sum w_i x_i\right)$ and $\sum w_i(-\ln x_i)$?
2. Strip the logarithms: exponentiate both sides of the step-1 inequality. Write the right-hand
   side $\sum w_i \ln x_i$ as the logarithm of a single product of powers. What product appears?
3. State the resulting comparison between the weighted arithmetic mean $\sum w_i x_i$ and the
   weighted geometric mean. What condition on the $x_i$ makes it an equality (read off from
   Jensen's equality case)?
4. Check consistency: set every $w_i = 1/n$. Do you recover ordinary AM–GM exactly?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For positive reals $x_1, \dots, x_n$ and weights $w_1, \dots, w_n \ge 0$ with
$\sum_{i=1}^n w_i = 1$,
$$\sum_{i=1}^n w_i x_i \;\ge\; \prod_{i=1}^n x_i^{\,w_i},$$
the **weighted AM–GM inequality**, with equality if and only if all $x_i$ with $w_i \gt 0$ are
equal. (Equivalently, for nonnegative weights $q_i$ with sum $Q$: $\frac{\sum q_i x_i}{Q} \ge
\left(\prod x_i^{q_i}\right)^{1/Q}$.)

### Proof

The function $f(x) = -\ln x$ is convex on $(0, \infty)$ since $f''(x) = 1/x^2 \gt 0$. Jensen's
inequality with weights $w_i$ (nonnegative, summing to $1$) gives
$$-\ln\!\left(\sum_{i=1}^n w_i x_i\right) \le \sum_{i=1}^n w_i\big(-\ln x_i\big).$$
Multiply by $-1$ (reversing the inequality):
$$\ln\!\left(\sum_{i=1}^n w_i x_i\right) \ge \sum_{i=1}^n w_i \ln x_i = \ln\!\left(\prod_{i=1}^n x_i^{\,w_i}\right).$$
Since $\ln$ is strictly increasing, exponentiating preserves the direction:
$$\sum_{i=1}^n w_i x_i \ge \prod_{i=1}^n x_i^{\,w_i}.$$
Equality holds exactly when Jensen is tight, i.e. all $x_i$ carrying positive weight are equal.
$\blacksquare$

### Worked Instance

Prove that for $x, y \gt 0$, $\ x^{3/4} y^{1/4} \le \frac{3x + y}{4}$. Take weights
$w_1 = \frac34,\ w_2 = \frac14$ (they sum to $1$) on the values $x_1 = x,\ x_2 = y$. Weighted
AM–GM gives
$$\frac34 x + \frac14 y \;\ge\; x^{3/4} y^{1/4},$$
with equality iff $x = y$. So the skewed geometric mean $x^{3/4}y^{1/4}$ is bounded by the
matching skewed arithmetic mean $\frac{3x+y}{4}$ — the Hook's lopsided version, now a theorem.

### Pitfalls

- The weights must be **nonnegative and sum to $1$** (or you divide by their total). Feeding in
  weights that don't normalize breaks the geometric side's exponents.
- The exponent on each $x_i$ in the product is its **own weight** $w_i$, not $1/n$. A common
  slip is to keep the uniform root.
- Requires $x_i \gt 0$ for the fractional powers and the logarithm to be defined.

:::
:::

## Connections

Prereqs: Jensen's inequality (weighted AM–GM is Jensen for $-\ln$ with general weights) — and it
contains ordinary AM–GM as the uniform-weight case. It is the engine behind Young's inequality
and Hölder's inequality, and it lets you tune AM–GM to match nonsymmetric target expressions.
Recognition trigger: a bound where a product of *unequal powers* $\prod x_i^{w_i}$ faces a
*weighted sum* $\sum w_i x_i$, especially when you need to "split" a term into unequal pieces to
force a tight bound.
