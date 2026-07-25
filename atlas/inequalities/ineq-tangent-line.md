A convex curve never dips below any of its tangent lines. That is geometrically obvious — and
secretly a licence to replace a stubborn function $f(x)$ by a *linear* lower bound $mx + k$ over
its whole range. Once every term is linear, a hard sum $\sum f(x_i)$ collapses into $\sum x_i$,
which the constraint already controls. When does this shortcut work exactly?

## Discovery

1. Let $f$ be convex and differentiable. Fix the "equality point" $x_0$ (where you expect the
   inequality to be tight, usually the symmetric value). Write the tangent line to $f$ at $x_0$:
   $L(x) = f(x_0) + f'(x_0)(x - x_0)$. For a convex $f$, how does $f(x)$ compare to $L(x)$ for
   all $x$?
2. Suppose you must bound $\sum_{i=1}^n f(x_i)$ from below, given $\sum x_i = S$ fixed, and you
   guess equality at $x_1 = \cdots = x_n = x_0 = S/n$. Replace each $f(x_i)$ by $L(x_i)$. What
   does $\sum L(x_i)$ simplify to, using $\sum x_i = S$?
3. Why did the *linear* part $f'(x_0)(x_i - x_0)$ telescope away to a constant when summed? What
   role did the constraint $\sum x_i = S$ play?
4. State the trick as a recipe: to lower-bound $\sum f(x_i)$ under a linear constraint, what line
   do you compare against, and what must you verify about $f$ versus that line over the *entire*
   domain (not just near $x_0$)?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Tangent-line trick.** Suppose you must prove $\sum_{i=1}^n f(x_i) \ge C$ subject to
$\sum_{i=1}^n x_i = S$, with expected equality at $x_i = x_0 = S/n$. If one can establish the
**pointwise linear bound**
$$f(x) \;\ge\; f(x_0) + f'(x_0)(x - x_0) \qquad \text{for all } x \text{ in the domain},$$
then summing gives $\sum f(x_i) \ge n f(x_0) + f'(x_0)(S - n x_0) = n f(x_0) = C$, with equality
iff every $x_i = x_0$. The pointwise bound holds automatically when $f$ is convex, but it may
also hold for non-convex $f$ on a restricted domain — which must be checked directly.

### Proof

The engine is the tangent-line support property of convex functions. If $f$ is convex and
differentiable at $x_0$, then for every $x$,
$$f(x) \ge f(x_0) + f'(x_0)(x - x_0).$$
(This is the first-order condition for convexity; it follows because the difference quotient
$\frac{f(x) - f(x_0)}{x - x_0}$ is monotone, so it lies on the correct side of $f'(x_0)$.)
Summing this over $i = 1, \dots, n$ with the common tangent point $x_0 = S/n$,
$$\sum_{i=1}^n f(x_i) \ge \sum_{i=1}^n \Big[f(x_0) + f'(x_0)(x_i - x_0)\Big]
= n f(x_0) + f'(x_0)\Big(\underbrace{\textstyle\sum x_i}_{=\,S} - n x_0\Big).$$
Since $x_0 = S/n$, the bracket $S - n x_0 = 0$ vanishes, leaving $\sum f(x_i) \ge n f(x_0)$.
Equality requires each tangent bound to be tight, i.e. $x_i = x_0$ for all $i$. When $f$ is only
locally convex, one instead verifies $f(x) - L(x) \ge 0$ directly (e.g. by factoring out
$(x - x_0)$ or $(x - x_0)^2$) over the allowed range. $\blacksquare$

### Worked Instance

For positive reals with $a + b + c = 1$, prove $\dfrac{a}{1+a^2} \cdots$ — take instead the
clean staple: show $\sum \dfrac{1}{1 + a} \ge \dfrac{9}{4}$ where... let us use a genuinely
tangent-line example. Prove for $a+b+c = 3$, $a,b,c \gt 0$:
$$\frac{1}{a^2 + 1} + \frac{1}{b^2+1} + \frac{1}{c^2+1} \le \frac{3}{2}.$$
Guess equality at $a=b=c=1$, so $x_0 = 1$ and $f(x) = \frac{1}{x^2+1}$ with $f(1) = \frac12$,
$f'(1) = -\frac{2\cdot 1}{(1+1)^2} = -\frac12$. The tangent line is
$L(x) = \frac12 - \frac12(x-1) = 1 - \frac{x}{2}$. One checks
$\frac{1}{x^2+1} \le 1 - \frac{x}{2}$ for $x \gt 0$ (clearing denominators gives
$x(x-1)^2 \ge 0$, true). Summing, $\sum f(a) \le 3 - \frac12(a+b+c) = 3 - \frac32 = \frac32$,
equality at $a=b=c=1$.

### Pitfalls

- The tangent bound must hold on the **entire** feasible domain, not merely near $x_0$. Verify
  $f(x) - L(x)$ has the right sign globally — usually by factoring out $(x - x_0)$ or $(x-x_0)^2$.
- The trick needs a **linear constraint** $\sum x_i = S$ (or reducible to one) so the linear
  term telescopes to a constant. Nonlinear constraints break the cancellation.
- Pick $x_0$ to be the true equality point; a wrong guess makes the pointwise bound fail
  somewhere or gives a non-tight constant.

:::
:::

## Connections

Prereqs: Jensen's inequality — the tangent-line support property is the differential form of
convexity underlying Jensen, and the trick is Jensen "unrolled" into an explicit linear bound. It
shares the equality-at-symmetric-point philosophy with smoothing and complements SOS on sums of a
single function. Recognition trigger: minimize/maximize $\sum f(x_i)$ under a **linear**
constraint, with an obvious symmetric equality point — draw the tangent at that point and bound
each term by it. A go-to for olympiad inequalities of "$\sum$ of a one-variable function" type.
