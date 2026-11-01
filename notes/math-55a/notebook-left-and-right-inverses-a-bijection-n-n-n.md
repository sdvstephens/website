---
course: math-55a
chapter: 1
section: N10
title: Left and Right Inverses; a Bijection ℕ × ℕ → ℕ
status: incomplete
source-pages: 4-6
---

:::exercise Problem 1
Given $f : X \to Y$, consider $g : Y \to X$ such that $f \circ g = \id_Y$ (a right inverse) or $g \circ f = \id_X$ (a left inverse).

(a) Show that $f$ permits a right inverse iff $f$ is surjective. Show that, in general, a right inverse is not unique.

(b) Show that $g \circ f = \id_X \iff f$ is injective.

:::solution
**(a)** Let us prove first the $\Rightarrow$ and then the $\Leftarrow$.

*Proof of $\Rightarrow$.* Let $f \circ g = \id_Y$. Then for every $y$, writing $g(y) = x$, we have $f(g(y)) = f(x) \Rightarrow y = f(x)$, for all $y$.

*Proof of $\Leftarrow$.* For all $y$ there exists $x$ with $f(x) = y$; choose one such $x$ for each $y$ and set $g(y) = x$. Then $f(x) = f(g(y))$, but $f(x) = y$, so $y = f(g(y))$ for all $y$, so $f \circ g = \id_Y$.

In general, the right inverse is not unique: consider $f : X \twoheadrightarrow Y$ with $X = \NN$ and $Y = \{0\}$. Then there exist infinitely many right inverses, since the only $y \in Y$ can be sent to any $x \in X$.

**(b)** *Proof of $\Rightarrow$.* Given $g \circ f = \id_X$, let $f(x_1) = f(x_2)$; we show that whenever $f(x_1) = f(x_2)$, $x_1 = x_2$. So $f(x_1) = f(x_2) \Rightarrow g(f(x_1)) = g(f(x_2))$, but since $g \circ f = \id_X$ we get $x_1 = x_2$.

*Proof of $\Leftarrow$.* Given $f(x_1) = f(x_2) \iff x_1 = x_2$ for all $x_1, x_2 \in X$. For $y_1 = f(x_1)$ set $g(y_1) = x_1$ (well defined by injectivity), and define $g$ arbitrarily on $Y \setminus f(X)$ (this needs $X \neq \varnothing$). So $y_1 = f(x_1) \Rightarrow g(y_1) = g(f(x_1))$, but $g(y_1) = x_1$, so $x_1 = g(f(x_1))$ for all $x \in X$, so $g \circ f = \id_X$.

To show that in general a left inverse is not unique, consider $X = \{0, 1\}$, $Y = \{0, 1, 2\}$ and the inclusion $f : X \hookrightarrow Y$. Any left inverse must send $0 \mapsto 0$ and $1 \mapsto 1$, but it does not matter where it sends $2$, since $2 \notin f(X)$: both $g(2) = 0$ and $g(2) = 1$ work. $\square$

:::
:::

:::exercise Problem 2
Give an explicit bijection $\NN \times \NN \leftrightarrow \NN$.

:::solution
We want $(x, y) \mapsto n$ and $n \mapsto (x, y)$. Idea: $2^{\text{something}}(\text{something else})$.

First tries:
$$(0,0) \mapsto 0, \quad (0,1) \mapsto 1, \quad (1,0) \mapsto 2, \quad (1,1) \mapsto 3; \qquad 2^n(?); \qquad \frac{n(n+1)}{2}.$$
Another try: all $n \mapsto x$, $2n \mapsto y$.

Writing the numbers $1, \dots, 16$ as sums of powers of 2:
$$\begin{aligned} 1 &= 2^0, & 2 &= 2^1, & 3 &= 2^0 + 2^1, & 4 &= 2^2, \\ 5 &= 2^0 + 2^2, & 6 &= 2^1 + 2^2, & 7 &= 2^0 + 2^1 + 2^2, & 8 &= 2^3, \\ 9 &= 2^0 + 2^3, & 10 &= 2^1 + 2^3, & 11 &= 2^0 + 2^1 + 2^3, & 12 &= 2^2 + 2^3, \\ 13 &= 2^0 + 2^2 + 2^3, & 14 &= 2^1 + 2^2 + 2^3, & 15 &= 2^0 + 2^1 + 2^2 + 2^3, & 16 &= 2^4. \end{aligned}$$

Sorting the even numbers $2, 4, \dots, 32$ by powers of 2 with remainders $r$: “For each $2^n$ there is a distance of $2^n$, so $2^n$ # of divisors for any $2^n$.” “Each $2^n$ has $2^{n-1}$ remainders for $2^n$ divisors.”

Every number is a power of 2 times an odd number:

| | | | | | | | |
|---|---|---|---|---|---|---|---|
| $2^0$ | 1 | 3 | 5 | 7 | 9 | 11 | 13 |
| $2^1$ | 2 | 6 | 10 | 14 | 18 | 22 | 26 |
| $2^2$ | 4 | 12 | 20 | 28 | 36 | 44 | 52 |
| $2^3$ | 8 | 24 | 40 | 56 | 72 | 88 | 104 |

Try $2^n(2m - 1)$:

| $n$ | $m$ | $2^n(2m-1)$ |
|---|---|---|
| 0 | 1 | 1 |
| 0 | 2 | 3 |
| 1 | 1 | 2 |
| 1 | 3 | 10 |

But $2^n(2m-1) \not\leftrightarrow (n, m)$: we need $(0,0) \mapsto 0$ and $0 \mapsto (0,0)$, and with $m = 0$, $2^n(-1) \notin \NN$.

$$2^n(2m+1) \text{ works!}$$

Surjective: …

Injective: $2^n(2m+1) = 2^{n'}(2m'+1) \Rightarrow \dots$
:::
:::
