---
course: integrated-maths
chapter: 10
section: 10.3
title: Sketching Polynomials and Finding Them from Their Zeros
---

Putting the degree, the end behavior and the multiplicities together gives a sketch of a polynomial from its factored form. Running the same facts backwards recovers a polynomial from its zeros or from its graph.

## Sketching

To sketch a polynomial: (1) the leading term, which gives the degree, the max number of turning points and the end behavior; (2) the $y$-intercept; (3) the $x$-intercepts with their multiplicities.

:::example
$h(x) = -2(x-7)^1\left(x+\tfrac12\right)^2(x+4)^3(x^2+9)^2$.

:::solution
The zeros are $x = 7$, $x = -\tfrac12$, $x = -4$, and $x = \pm 3i$ (not real numbers). The exponents add up to $1 + 2 + 3 + 4 = 10$ (the $(x^2+9)^2$ contributes $x^4$), so the end behavior is $\approx -2x^{10}$.

1. **Leading term:** $-2x^{10}$.
   - **Degree:** $10$.
   - **Max turning points:** $9$.
   - **End behavior:** like $-2x^{10}$: down on both ends.
2. **$y$-intercept:** $(0, 18144)$. Remember: this is obtained via $h(0) = -2(0-7)\cdots$, that is,
$$
h(0) = -2(-7)\left(\tfrac12\right)^2(4)^3(9)^2 = 18144.
$$
3. **$x$-intercepts:** $(7, 0)$ with multiplicity $1$, so it **crosses**; $\left(-\tfrac12, 0\right)$ with multiplicity $2$, so it **bounces**; $(-4, 0)$ with multiplicity $3$, so it **crosses**.
:::
:::

:::note
Max turning points $= n - 1$, where $a_n x^n$ is the leading term.
:::

:::example
Sketch $f(x) = x^2(x-3)$.

:::solution
1. Leading term $x^3$.
   - **Degree:** $3$.
   - **Max turning points:** $2$.
   - **End behavior:** down on the left, up on the right.
2. **$y$-intercept:** $(0, 0)$.
3. **$x$-intercepts:** $(0, 0)$ with multiplicity $2$, so it **bounces**; $(3, 0)$ with multiplicity $1$, so it **crosses**.

Two more points: $(1, -2)$ and $(2, -4)$.

![Graph of f(x) = x^2(x-3): it rises from the lower left, touches the x-axis at the origin and turns back down, passes through (1,-2) and (2,-4), then crosses the x-axis at 3 and rises](/notes/integrated-maths/figures/r2-sketch-x2xm3.svg)
:::
:::

:::example
Sketch $f(x) = -2(x+2)(x-2)^3$.

:::solution
The leading term is $-2 \cdot x^1 \cdot x^3 = -2x^4$.

1. **Leading term:** $-2x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** down on both ends.
2. **$y$-intercept:** $(0, 32)$.
3. **$x$-intercepts:** $-2$ with multiplicity $1$, so it **crosses**; $2$ with multiplicity $3$, so it **crosses** (flattening as it does).

![Graph of f(x) = -2(x+2)(x-2)^3: it rises from the lower left, crosses the x-axis at -2, peaks near x = -1, passes through (0,32), flattens as it crosses the x-axis at 2, and falls to the lower right](/notes/integrated-maths/figures/r2-sketch-m2xp2xm2cubed.svg)

:::
:::

:::example
Sketch $h(x) = (x+4)^2(1-x)$.

:::solution
Rewrite: $h(x) = -(x+4)^2(x-1)$.

1. **Leading term:** $-x^3$.
   - **Degree:** $3$.
   - **Max turning points:** $2$.
   - **End behavior:** up on the left, down on the right.
2. **$y$-intercept:** $(0, 16)$.
3. **$x$-intercepts:** $(-4, 0)$ and $(1, 0)$. The zero $-4$ has multiplicity $2$, so it **bounces**; $1$ has multiplicity $1$, so it **crosses**.

![Graph of h(x) = -(x+4)^2(x-1): it comes down from the upper left, touches the x-axis at -4 and turns back up, passes through (0,16), then crosses the x-axis at 1 and falls](/notes/integrated-maths/figures/r2-sketch-mxp4sqxm1.svg)
:::
:::

:::example
$f(x) = -5x(x^2 - 4)(x+3)$.

:::solution
Factor: $f(x) = -5x(x-2)(x+2)(x+3)$.

1. Leading term $-5x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** down on both ends.
2. **$y$-intercept:** $(0, 0)$.
3. **$x$-intercepts:** $(2, 0)$, $(-2, 0)$, $(-3, 0)$, $(0, 0)$, each with multiplicity $1$, so the graph **crosses** at all four.

:::
:::

:::example
$g(x) = 2(x-1)^2(x^2 - 16)$.

:::solution
Factor: $g(x) = 2(x-1)^2(x+4)(x-4)$.

1. Leading term $2x^4$.
   - **Degree:** $4$.
   - **Max turning points:** $3$.
   - **End behavior:** up on both ends.
2. **$y$-intercept:** $(0, -32)$, since $2(-1)^2(4)(-4) = 2 \cdot 1 \cdot 4 \cdot (-4) = -32$.
3. **$x$-intercepts:** $(1, 0)$ with multiplicity $2$, so it **bounces**; $(-4, 0)$ and $(4, 0)$ with multiplicity $1$, so it **crosses**.

:::
:::

## Functions from $x$-intercepts

:::example
$f(x) = x^2 + 2x - 8$.

:::solution
$x^2 + 2x - 8 = 0$. X: top $2$, bottom $-8$, sides $4$ and $-2$. So
$$
(x+4)(x-2) = 0 \implies x = 2,\ x = -4.
$$
:::
:::

Going the other way: suppose we know the $x$-intercepts and want the function.

:::example
Suppose the $x$-intercepts are $-3$, $4$, $1$ and $0$.

:::solution
$$
\begin{aligned}
x = -3 &\implies (x+3) = 0\\
x = 4 &\implies (x-4) = 0\\
x = 1 &\implies (x-1) = 0\\
x = 0 &\implies x = 0
\end{aligned}
$$
So $(x+3)(x-4)(x-1)(x) = 0$, and
$$
f(x) = ax(x+3)(x-4)(x-1).
$$
:::
:::

:::example
Zeros: $-1, 0, 4, -9$; degree $4$.

:::solution
$$
x = -1 \to (x+1), \qquad x = 0 \to x, \qquad x = 4 \to (x-4), \qquad x = -9 \to (x+9).
$$
So $x(x+1)(x-4)(x+9) = 0$, and
$$
f(x) = ax(x+1)(x-4)(x+9).
$$
:::
:::

:::example
Zeros: $1$ with multiplicity $1$, $2$ with multiplicity $2$; degree $3$.

:::solution
$x = 1 \to (x-1) = 0$ and $x = 2 \to (x-2) = 0$, used twice: $(x-1)(x-2)^2 = 0$. So
$$
f(x) = a(x-1)(x-2)^2.
$$
:::
:::

:::example
Zeros: $-2$ with multiplicity $2$, $5$ with multiplicity $1$, $0$ with multiplicity $3$, $\tfrac12$ with multiplicity $3$; degree $9$.

:::solution
$$
\begin{aligned}
x = -2 &\to (x+2)^2 = 0, & x = 5 &\to (x-5) = 0,\\
x = 0 &\to x^3 = 0, & x = \tfrac12 &\to \left(x - \tfrac12\right)^3,
\end{aligned}
$$
so
$$
f(x) = ax^3\left(x - \tfrac12\right)^3(x+2)^2(x-5).
$$
The factor $\left(x - \tfrac12\right)^3$ can also be written $(2x-1)^3$: since $(2x-1)^3 = 8\left(x - \tfrac12\right)^3$, the two give the same zero with the same multiplicity, and only the constant $a$ changes.

:::
:::

## Functions from graphs

:::example
An odd-degree graph crosses the $x$-axis at $0$, $1$ and $2$. Find a function for it.

:::solution
![A cubic-shaped graph that rises from the lower left, crosses the x-axis at 0, 1 and 2, and rises to the upper right](/notes/integrated-maths/figures/r2-zeros-graph-a.svg)

$$
x = 0 \to x = 0, \qquad x = 1 \to (x-1) = 0, \qquad x = 2 \to (x-2) = 0,
$$
so
$$
\boxed{f(x) = ax(x-1)(x-2)}
$$
:::
:::

:::example
An even-degree graph crosses the $x$-axis at $-4$, bounces off it at $-1$, crosses at $3$, and passes through $(1, -8)$. Find a function for it.

:::solution
![A graph rising on both ends that crosses the x-axis at -4, touches it and turns back at -1, crosses at 3, and passes through (1,-8)](/notes/integrated-maths/figures/r2-zeros-graph-b.svg)

At $-4$ it crosses, so that zero has **odd** multiplicity; at $-1$ it bounces, so that zero has **even** multiplicity; at $3$ it crosses, so **odd** again. There are $3 = n$ zeros, but the bounce counts twice: $n + 1 = 4$, thus the degree is at least $4$.
$$
\begin{aligned}
x = -4 &\implies (x+4) = 0\\
x = -1 &\implies (x+1) = 0\\
x = 3 &\implies (x-3) = 0
\end{aligned}
$$
With multiplicities $1$, $2$, $1$: $a(x+4)^1(x+1)^2(x-3)^1$. Using the point $(1, -8)$:
$$
\begin{aligned}
a(1+4)(1+1)^2(1-3) &= -8\\
a(5)(4)(-2) &= -8\\
-40a &= -8\\
a &= \tfrac{8}{40} = \tfrac15.
\end{aligned}
$$
So
$$
\boxed{f(x) = \tfrac15 (x+1)^2(x+4)(x-3)}
$$

:::
:::

:::example
An odd-degree graph crosses the $x$-axis at $-1$, $1$ and $2$, and passes through $(0, -1)$. Find a function for it.

:::solution
![A cubic-shaped graph that falls from the upper left, crosses the x-axis at -1, passes through (0,-1), crosses at 1 and 2, and falls to the lower right](/notes/integrated-maths/figures/r2-zeros-graph-c.svg)

The zeros are $x = -1$, $x = 1$, $x = 2$, so
$$
f(x) = a(x+1)(x-1)(x-2).
$$
Let’s say the point is $(0, -1)$, i.e. $f(0) = -1$:
$$
\begin{aligned}
a(0+1)(0-1)(0-2) &= f(0) = -1\\
a(1)(-1)(-2) = 2a &= -1 \implies a = -\tfrac12.
\end{aligned}
$$
So
$$
\boxed{f(x) = -\tfrac12 (x+1)(x-1)(x-2)}
$$
:::
:::

Two problems on what a graph says about its polynomial; only the answers are in the notes.

:::problem
:::solution
It means $P(x)$ is of degree $\ge 2$, not necessarily that $\deg P(x) = 2$.
:::
:::

:::problem
:::solution
**(a)** There are 5 changes in direction.

**(b)** As $x \to -\infty$, $f(x) \to -\infty$, because $x^{2n+1}$ (which grows the fastest; shrinks, I guess?) is such that $\sgn(x) = -1 = \sgn\left(x^{2n+1}\right)$. If even, it is such that…

$$ax^4 + bx^3 + cx^2 + dx + e, \qquad e = 3, \qquad (x + 1)^2(x - 1)(x - 3).$$
At $x = 1$, $a(1)^4 + \dots$:
$$\begin{aligned}
a + b + c + d &= -3 \\
a - b + c - d &= -3
\end{aligned}
\implies 2b + 2d = 0 \implies b = -d.$$

:::
:::

## Exercises

:::exercise
:::solution
$$f(x) = 0.2(x - 3)(x + 2)(x + 3)$$
At $f(1) = 0.2(-2)(3)(4)$ and $f(0) = 0.2(-3)(2)(3)$ (unneeded).

![Graph of f(x) = 0.2(x-3)(x+2)(x+3), crossing the x-axis at -3, -2 and 3, with f(0) = -3.6 and f(1) = -4.8 marked](/notes/integrated-maths/figures/s5-ex-7-5-1-graph.svg)

Yay!
:::
:::
