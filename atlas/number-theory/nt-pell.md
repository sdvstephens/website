The equation $x^2 - 2y^2 = 1$ has the tiny solution $(3, 2)$: $9 - 8 = 1$. The next is
$(17, 12)$: $289 - 288 = 1$. Then $(99, 70)$, then $(577, 408)$. The solutions explode in size,
yet each is manufactured from the one before by the *same* arithmetic rule. One little solution
seeds an entire infinite family. What multiplication is secretly at work?

## Discovery

Fix a positive integer $D$ that is **not** a perfect square, and study $x^2 - D y^2 = 1$.
1. Rewrite $x^2 - Dy^2$ as a product: $(x - y\sqrt D)(x + y\sqrt D)$. If $(x_1,y_1)$ and
   $(x_2,y_2)$ each satisfy the equation, multiply $(x_1 + y_1\sqrt D)(x_2 + y_2\sqrt D)$ and
   collect it as $x_3 + y_3\sqrt D$. Write $x_3, y_3$ in terms of the inputs.
2. Compute $(x_3 - y_3\sqrt D)$ similarly, and multiply your two expressions. What equation do
   $(x_3, y_3)$ satisfy? (This is the key closure property.)
3. Take $D = 2$ and the smallest nontrivial solution $(x_1, y_1) = (3, 2)$. "Square" it using
   step 1 (i.e. multiply $(3 + 2\sqrt2)$ by itself). What solution $(x_2, y_2)$ do you get? Do it
   once more to get $(x_3, y_3)$.
4. Conjecture the recurrence: given the *fundamental* solution $(x_1, y_1)$, express
   $(x_{n+1}, y_{n+1})$ from $(x_n, y_n)$ as a fixed linear map. Verify it reproduces your step-3
   numbers.
5. Why can't there be a solution *between* two consecutive powers — i.e. why does taking powers of
   the smallest solution catch *all* of them? (Think about ordering $x + y\sqrt D$ by size.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $D \gt 0$ be a nonsquare integer. The **Pell equation** $x^2 - D y^2 = 1$ has the trivial
solution $(\pm 1, 0)$ and infinitely many others in positive integers.

**Existence.** There is a **fundamental solution** $(x_1, y_1)$ — the solution in positive
integers with $x_1 + y_1\sqrt D$ smallest — and it exists for every nonsquare $D$. *(We cite
existence; the standard proof uses the pigeonhole/Dirichlet approximation of $\sqrt D$. The
recurrence and completeness below are proved in full.)*

**Generating all solutions.** Every solution in positive integers is $(x_n, y_n)$ where
$$x_n + y_n\sqrt D = (x_1 + y_1\sqrt D)^n, \qquad n = 1, 2, 3, \dots,$$
equivalently the recurrence
$$x_{n+1} = x_1 x_n + D y_1 y_n, \qquad y_{n+1} = x_1 y_n + y_1 x_n.$$
All integer solutions are $(\pm x_n, \pm y_n)$ and $(\pm 1, 0)$.

### Proof

Work in $\ZZ[\sqrt D]$ with the **conjugate** $\overline{x + y\sqrt D} = x - y\sqrt D$ and the
**norm** $N(x + y\sqrt D) = (x+y\sqrt D)(x - y\sqrt D) = x^2 - D y^2$. The norm is multiplicative:
$N(\alpha\beta) = N(\alpha)N(\beta)$, because conjugation is a ring homomorphism
($\overline{\alpha\beta} = \overline\alpha\,\overline\beta$, checked by expanding), so
$$N(\alpha\beta) = \alpha\beta\,\overline{\alpha\beta} = (\alpha\overline\alpha)(\beta\overline
\beta) = N(\alpha)N(\beta).$$
A pair $(x,y)$ solves Pell iff $N(x + y\sqrt D) = 1$.

**Closure (products of solutions are solutions).** If $N(\alpha) = N(\beta) = 1$ then
$N(\alpha\beta) = 1$. Writing $\alpha = x_1 + y_1\sqrt D$, $\beta = x_2 + y_2\sqrt D$,
$$\alpha\beta = (x_1 x_2 + D y_1 y_2) + (x_1 y_2 + x_2 y_1)\sqrt D,$$
so $(x_1 x_2 + D y_1 y_2,\ x_1 y_2 + x_2 y_1)$ is again a solution. In particular, powers
$\alpha^n$ all have norm $1$, which proves each $(x_n,y_n)$ defined by $x_n + y_n\sqrt D =
\alpha^n$ is a solution; taking $\beta = \alpha^n$ above gives exactly the stated recurrence
$$x_{n+1} = x_1 x_n + D y_1 y_n,\qquad y_{n+1} = y_1 x_n + x_1 y_n.$$
Since $x_1, y_1 \ge 1$, these are strictly increasing, so the $(x_n,y_n)$ are infinitely many
distinct positive solutions.

**Completeness (these are *all* the positive solutions).** Let $\alpha = x_1 + y_1\sqrt D \gt 1$
be the fundamental solution (it is $\gt 1$ because $x_1, y_1 \ge 1$). Suppose $(X, Y)$ is *any*
solution in positive integers and set $\gamma = X + Y\sqrt D \gt 1$. The powers $\alpha^n$
increase without bound, so there is a unique integer $n \ge 1$ with
$$\alpha^n \le \gamma \lt \alpha^{n+1}.$$
Divide by $\alpha^n$: let $\delta = \gamma\,\alpha^{-n}$. Now $\alpha^{-1} = \overline\alpha$
because $\alpha\overline\alpha = N(\alpha) = 1$; and $\overline\alpha = x_1 - y_1\sqrt D$ is a
number with $N = 1$, so $\delta = \gamma\,\overline\alpha^{\,n}$ is a product of norm-$1$
elements, hence $N(\delta) = 1$. Write $\delta = u + v\sqrt D$; then $u^2 - D v^2 = 1$ and, by
construction,
$$1 \le \delta \lt \alpha.$$
We claim $\delta = 1$ (i.e. $\gamma = \alpha^n$). Since $N(\delta)=1$, its conjugate is
$\overline\delta = \delta^{-1}$, and $1 \le \delta$ gives $0 \lt \overline\delta = 1/\delta
\le 1$. Then
$$u = \tfrac12(\delta + \overline\delta) \gt 0, \qquad v\sqrt D = \tfrac12(\delta - \overline
\delta) \ge 0,$$
so $u \ge 1$ and $v \ge 0$ are integers with $u + v\sqrt D = \delta \lt \alpha$. If $v \ge 1$
then $(u, v)$ would be a positive solution with $u + v\sqrt D \lt \alpha$, contradicting that
$\alpha$ is the *smallest* solution $\gt 1$. Hence $v = 0$, forcing $u^2 = 1$, $u = 1$, so
$\delta = 1$ and $\gamma = \alpha^n$. Therefore $(X,Y) = (x_n, y_n)$.

Finally, sign changes $x \mapsto \pm x$, $y \mapsto \pm y$ and the trivial $(\pm1, 0)$ account for
all integer solutions. $\blacksquare$

### Worked Instance

Resolve the hook: $x^2 - 2y^2 = 1$, fundamental solution $\alpha = 3 + 2\sqrt2$ (norm
$9 - 8 = 1$). The recurrence with $(x_1,y_1) = (3,2)$, $D = 2$ is
$$x_{n+1} = 3x_n + 4 y_n, \qquad y_{n+1} = 2 x_n + 3 y_n.$$
Iterate:
$$(3,2) \to (3\cdot3 + 4\cdot2,\ 2\cdot3 + 3\cdot2) = (17, 12) \to (3\cdot17 + 4\cdot12,\ 2\cdot17
+ 3\cdot12) = (99, 70) \to (577, 408),$$
exactly the hook's runaway sequence. Check $(17,12)$: $289 - 2\cdot144 = 289 - 288 = 1.$ ✓
Equivalently $(3 + 2\sqrt2)^2 = 17 + 12\sqrt2$ and $(3+2\sqrt2)^3 = 99 + 70\sqrt2$.

### Pitfalls

- $D$ must be a **nonsquare**. If $D = k^2$ then $x^2 - Dy^2 = (x-ky)(x+ky) = 1$ forces
  $y = 0$: no nontrivial solutions.
- The equation is $x^2 - Dy^2 = 1$. The "**negative Pell**" $x^2 - Dy^2 = -1$ is *not* always
  solvable (e.g. $D = 3$ has no solution), and its solvability is subtler — don't assume it.
- Powers of the fundamental solution give *all* solutions; a common error is to guess a wrong
  fundamental solution (not the *smallest*), which then generates only a sub-family and misses
  some solutions.
- The recurrence multiplies by the *fundamental* unit each step; $x_{n+1} = 2x_1 x_n - x_{n-1}$
  is a valid second-order form too, but mixing up $x_1$ with a later $x_n$ in the linear map
  corrupts the sequence.

:::
:::

## Connections

Prereq: bounding/size arguments (the completeness proof is a squeeze on the ordering of
$x + y\sqrt D$). Pell's equation is the first encounter with **units in a ring of algebraic
integers** — the fundamental solution is a fundamental unit of $\ZZ[\sqrt D]$ — and its solutions
are computed in practice from the **continued fraction** of $\sqrt D$. It recurs whenever a
Diophantine problem reduces to "$x^2 - Dy^2 = 1$" (approximating $\sqrt D$ by rationals, triangular
numbers that are squares, etc.). Recognition trigger: a difference $x^2 - Dy^2$ pinned to a
constant, or an infinite family of solutions each built from the last.
