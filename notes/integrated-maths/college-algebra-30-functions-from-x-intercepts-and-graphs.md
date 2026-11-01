---
course: integrated-maths
chapter: 8
section: 30
title: Functions from x-Intercepts and Graphs
source-pages: 1-3
---

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
