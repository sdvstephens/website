Partial fractions hands you a telescoping split for free when the term is a simple rational
function. But what about $\sum_{k=1}^{n} \dfrac{k}{(k+1)!}$, or a sum of products of binomial
coefficients? No denominator to decompose — yet the sum still collapses to a couple of terms. The
trick is to *invent* the difference $g(k+1) - g(k)$ yourself. How do you find $g$?

## Discovery

1. Recall the goal of any telescope: write the summand $a_k$ as $g(k+1) - g(k)$ for some $g$, so
   that $\sum_{k=1}^{n} a_k = g(n+1) - g(1)$. The whole game is finding $g$ — the *antidifference*
   of $a_k$.
2. Try $a_k = \dfrac{k}{(k+1)!}$. Guess that $g(k)$ should also involve a factorial in the
   denominator — try $g(k) = -\dfrac{1}{k!}$ as a candidate. Compute $g(k+1) - g(k)$ explicitly.
   Does it equal $a_k$?
3. If your first guess is off by a constant multiple or a shift, adjust it and recompute. What
   $g$ makes $g(k+1) - g(k) = \dfrac{k}{(k+1)!}$ exactly?
4. State the general strategy: to sum $a_k$, propose a form for $g$ (same "shape" as $a_k$ but one
   structural step simpler), compute the forward difference $\Delta g(k) = g(k+1) - g(k)$, and
   solve for the free constants so $\Delta g = a_k$. Then the sum is a boundary evaluation.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Creative telescoping** is the method of summing $\sum_{k} a_k$ by *constructing* a function
$g$ (the **antidifference**) with
$$g(k+1) - g(k) = a_k, \qquad\text{whence}\qquad \sum_{k=m}^{n} a_k = g(n+1) - g(m).$$
Unlike partial-fraction telescoping, $g$ is not read off mechanically — it is guessed from the
shape of $a_k$ and its free constants pinned down by forcing $\Delta g = a_k$. It is the discrete
analogue of *finding an antiderivative*: telescoping is the fundamental theorem of finite calculus.

### Proof

The identity is exact and needs no hypotheses beyond $\Delta g = a_k$. If $a_k = g(k+1) - g(k)$
for $k = m,\dots,n$, then
$$\sum_{k=m}^{n} a_k = \sum_{k=m}^{n}\bigl(g(k+1) - g(k)\bigr).$$
Write the terms out: $\bigl(g(m+1)-g(m)\bigr) + \bigl(g(m+2)-g(m+1)\bigr) + \cdots +
\bigl(g(n+1)-g(n)\bigr)$. Each $+g(j)$ for $m\lt j\le n$ is cancelled by the $-g(j)$ of the
neighbouring term, leaving only $g(n+1) - g(m)$. Hence $\sum_{k=m}^n a_k = g(n+1) - g(m)$.
$\blacksquare$

(The content is not this identity but *producing* $g$; the worked instance shows the construction.)

### Worked Instance

Sum $\displaystyle\sum_{k=1}^{n} \frac{k}{(k+1)!}$. Guess $g(k) = -\dfrac{1}{k!}$ and test:
$$g(k+1) - g(k) = -\frac{1}{(k+1)!} + \frac{1}{k!} = \frac{1}{k!} - \frac{1}{(k+1)!}
= \frac{(k+1) - 1}{(k+1)!} = \frac{k}{(k+1)!} = a_k.$$
The guess is exactly right. Therefore
$$\sum_{k=1}^{n} \frac{k}{(k+1)!} = g(n+1) - g(1) = -\frac{1}{(n+1)!} + \frac{1}{1!}
= 1 - \frac{1}{(n+1)!}.$$
As $n\to\infty$ this tends to $1$. The sum had no denominator to factor — the collapse came from
*inventing* $g(k) = -1/k!$, resolving the Hook.

### Pitfalls

- The guess-and-adjust step is the whole method: propose $g$ of the right shape, then **verify**
  $g(k+1)-g(k) = a_k$ before trusting it. An unverified antidifference is worthless.
- Boundary evaluation is $g(n+1) - g(m)$, matching the *actual* index range — off-by-one at either
  end is the classic error.
- Not every summand has an elementary antidifference (e.g. $\sum 1/k$ does not — its antidifference
  is essentially the harmonic numbers, no closed form). Creative telescoping succeeds only when a
  nice $g$ exists.
- Rescale after guessing: if $\Delta g$ comes out a constant multiple of $a_k$, divide $g$ by that
  constant rather than abandoning the guess.

:::
:::

## Connections

Prereqs: `ser-telescoping-pf`, where the antidifference is handed to you by partial fractions.
Creative telescoping removes the training wheels: you must *supply* $g$. This is finite calculus —
$\Delta g = a$ is the discrete $g' = f$ — and it underlies Gosper's algorithm and the WZ method.
It unlocks telescoping trig sums (`tc-telescoping-trig`), where the antidifference is a shifted
cotangent or sine. Recognition trigger: a sum that "should" collapse but has no rational
denominator to decompose — factorials, binomials, products — reach for a shape-matched guess and
verify $\Delta g = a_k$. A recurring Putnam finisher.
