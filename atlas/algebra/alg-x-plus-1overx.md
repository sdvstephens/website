The quartic $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$ has coefficients that read the same forwards and
backwards: $1, -5, 8, -5, 1$. That symmetry is not decoration — it lets you solve a degree-$4$
equation by solving a quadratic.

## Discovery

1. In $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$, note $x = 0$ is not a root. Divide every term by $x^2$.
   Group the terms so that $x^2$ pairs with $1/x^2$ and $x$ pairs with $1/x$. What do you get?
2. Let $y = x + \dfrac{1}{x}$. Square it: what is $y^2$ in terms of $x^2 + 1/x^2$? Solve for
   $x^2 + 1/x^2$.
3. Substitute your expression from step 2 into the grouped equation from step 1. What equation in
   $y$ alone results, and what is its degree?
4. Once you have the $y$-values, each one gives $x + 1/x = y$, i.e. $x^2 - yx + 1 = 0$. By Vieta,
   what is the product of the two $x$-roots coming from a single $y$? What does that tell you about
   how the four roots pair up?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a **palindromic** (self-reciprocal) polynomial equation of even degree $2m$ — one whose
coefficient list is symmetric, $a_k = a_{2m-k}$ — dividing by $x^m$ and substituting
$$y = x + \frac{1}{x}, \qquad x^2 + \frac{1}{x^2} = y^2 - 2, \qquad x^3 + \frac{1}{x^3} = y^3 - 3y,$$
and in general $x^n + x^{-n} = $ a degree-$n$ polynomial in $y$ (the same recursion as power sums
of a reciprocal pair), reduces the equation to a polynomial in $y$ of degree $m$ — **half the
original degree**. Each root $y$ then yields two $x$-roots via $x^2 - yx + 1 = 0$, whose product is
$1$ (so the roots come in reciprocal pairs $x, 1/x$). More generally $x^n + x^{-n}$ satisfies
$s_n = y\, s_{n-1} - s_{n-2}$ with $s_0 = 2, s_1 = y$.

### Proof

Let $s_n = x^n + x^{-n}$. Then $y \cdot s_{n-1} = (x + x^{-1})(x^{n-1} + x^{-(n-1)}) = x^n +
x^{-(n-2)} + x^{n-2} + x^{-n} = s_n + s_{n-2}$, so $s_n = y s_{n-1} - s_{n-2}$ with $s_0 = 2$,
$s_1 = y$. By induction each $s_n$ is a polynomial of degree $n$ in $y$ (base cases clear; the
recurrence raises degree by one). Now take a palindromic equation $\sum_{k=0}^{2m} a_k x^k = 0$
with $a_k = a_{2m-k}$. Since $a_0 = a_{2m} \ne 0$ (else reduce), $x = 0$ is not a root, so we may
divide by $x^m$:
$$\sum_{k=0}^{2m} a_k x^{k-m} = 0 \;\Longrightarrow\; a_m + \sum_{k=0}^{m-1} a_k\big(x^{k-m} + x^{m-k}\big) = 0,$$
where we paired term $k$ with term $2m-k$ using $a_k = a_{2m-k}$ and $x^{(2m-k)-m} = x^{m-k}$. Each
pair is $a_k \, s_{m-k}$, a polynomial in $y$ of degree $m-k \le m$. Thus the whole expression is a
polynomial in $y$ of degree $m$, as claimed. Finally, from $y = x + 1/x$ we get $x^2 - yx + 1 = 0$;
by Vieta the two roots multiply to $1$, i.e. they are reciprocals. $\blacksquare$

### Worked Instance

Solve $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$. Divide by $x^2$:
$$\Big(x^2 + \tfrac{1}{x^2}\Big) - 5\Big(x + \tfrac1x\Big) + 8 = 0.$$
With $y = x + 1/x$ and $x^2 + 1/x^2 = y^2 - 2$:
$$(y^2 - 2) - 5y + 8 = 0 \;\Longrightarrow\; y^2 - 5y + 6 = 0 \;\Longrightarrow\; y = 2 \text{ or } y = 3.$$
For $y = 2$: $x^2 - 2x + 1 = 0 \Rightarrow x = 1$ (double). For $y = 3$: $x^2 - 3x + 1 = 0
\Rightarrow x = \dfrac{3 \pm \sqrt 5}{2}$. So the four roots are $1, 1, \dfrac{3+\sqrt5}{2},
\dfrac{3-\sqrt5}{2}$; note the last two are reciprocals, product $1$.

### Pitfalls

- $x^2 + 1/x^2 = y^2 - 2$, **not** $y^2$. The cross term $2\cdot x\cdot\frac1x = 2$ must be
  subtracted. Likewise $x^3 + 1/x^3 = y^3 - 3y$.
- The trick needs a *genuine* palindromic pattern $a_k = a_{2m-k}$. For **anti-palindromic**
  coefficients ($a_k = -a_{2m-k}$), $x = 1$ is a root; factor it out first, or use $y = x - 1/x$.
- Odd-degree palindromic polynomials have $x = -1$ as a root — divide out $(x+1)$ to get an
  even-degree palindrome, then substitute.

:::
:::

## Connections

Prereqs: Vieta's formulas (product of the reciprocal pair, and the coefficient symmetry). The
$s_n = y s_{n-1} - s_{n-2}$ recursion is exactly a power-sum recursion, foreshadowing Newton's
identities and Chebyshev polynomials (where $x = e^{i\theta}$ makes $x + 1/x = 2\cos\theta$).
Recognition trigger: a polynomial equation with palindromic coefficients, or any expression built
from $x + 1/x$ and its powers.
