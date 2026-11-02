---
course: integrated-maths
chapter: 9
section: 9.1
title: Solving Quadratics by Square Roots and Factoring
---

A quadratic equation can be solved in several ways. This page starts with what a solution means for the graph, then covers the first two methods: taking square roots and factoring.

## Quadratics and their roots

$$f(x) = ax^2 + bx + c$$

is **a quadratic**. Set $f(x) = 0$ to determine where the quadratic crosses the **$x$-axis**:

$$ax^2 + bx + c = 0.$$

![Three parabolas: one touching the x-axis once, one crossing it twice, one missing it](/notes/integrated-maths/figures/r1-quadratic-roots.svg)

- Touching the $x$-axis once: **1** real solution, **1** $x$-intercept.
- Crossing it twice: **2** real solutions, **2** real $x$-intercepts. That’s the max: a quadratic has at most **2** solutions.
- Missing it: **no** real solution (2 complex solutions), **no** $x$-intercept.

## The square root method

Can I find the $x$-intercepts by taking the square root of both sides?

1. Set to $0$: $f(x), g(x), h(x), \ldots = 0$.
2. Solve for $x$.

:::note
**Remember!!!** **Always** add $\pm$ before the square root when solving for $x$.
:::

:::example
Solve $f(x) = x^2 - 18 = 0$.

:::solution
$$
\begin{aligned}
x^2 &= 18\\
\sqrt{x^2} &= \pm\sqrt{18}\\
x &= \pm\sqrt{18} \implies x = \pm 3\sqrt{2},
\end{aligned}
$$
so $x_1 = 3\sqrt{2}$ and $x_2 = -3\sqrt{2}$. **Two real solutions.**
:::
:::

:::example
Solve $g(x) = (x+2)^2 - 1 = 0$.

:::solution
$$
(x+2)^2 = 1 \implies x + 2 = \pm\sqrt{1} \implies x = \pm\sqrt{1} - 2,
$$
so $x_1 = -1$ and $x_2 = -3$. **Two real solutions.**
:::
:::

:::example
Solve $f(x) = 3x^2 - 33 = 0$.

:::solution
$$
\begin{aligned}
3(x^2 - 11) &= 0\\
x^2 - 11 &= 0\\
x^2 &= 11 \implies x = \pm\sqrt{11},
\end{aligned}
$$
so $x_1 = \sqrt{11}$ and $x_2 = -\sqrt{11}$. **Two real solutions.**
:::
:::

:::example
Solve $h(x) = (2x+3)^2 - 32 = 0$.

:::solution
$$
2x + 3 = \pm\sqrt{32} \implies 2x = \pm\sqrt{32} - 3 \implies x = \frac{\pm\sqrt{32} - 3}{2} = \frac{\pm 4\sqrt{2} - 3}{2},
$$
so
$$
x_1 = \frac{4\sqrt{2} - 3}{2}, \qquad x_2 = \frac{-4\sqrt{2} - 3}{2} = -\frac{4\sqrt{2} + 3}{2}.
$$

**Two real solutions.**
:::
:::

:::example
Solve $f(x) = (x-7)^2 = 0$.

:::solution
$x - 7 = 0$, so $x = 7$. **One real solution.**
:::
:::

:::example
Solve $f(x) = (3x-2)^2 + 75 = 0$.

:::solution
$$
3x - 2 = \pm\sqrt{-75} \implies 3x = \pm\sqrt{-75} + 2 \implies x = \frac{\pm\sqrt{-75} + 2}{3}.
$$
**No real solutions.** Over the complex numbers, $\sqrt{-75} = 5i\sqrt{3}$, so
$$
3x - 2 = \pm 5i\sqrt{3} \implies x = \frac{2 \pm 5i\sqrt{3}}{3} \implies x = \frac{2}{3} \pm \frac{5\sqrt{3}}{3}\,i.
$$

:::
:::

## Factoring

Expanding a product of two linear factors,
$$(x+p)(x+q) = x^2 + (p+q)x + pq,$$
so factoring $x^2 + bx + c$ comes down to finding two numbers $p$ and $q$ with $p + q = b$ and $pq = c$.

The “X” in the solutions below is a factoring aid for finding them: the number on top is the sum $b$, the number on the bottom is the product $ac$, and the two numbers on the sides multiply to the bottom and add to the top. When $a \neq 1$, each side number is divided by $a$, and the reduced fraction $\tfrac{p}{q}$ gives the factor $(qx + p)$.

![Two X diagrams: for x^2+7x+6 the sides are 6 and 1; for 3x^2+5x+2 the sides are 3/3 and 2/3, giving the factors (x+1) and (3x+2)](/notes/integrated-maths/figures/r2-x-method.svg)

:::example
Solve $f(x) = x^2 + 7x + 6 = 0$.

:::solution
X: $6 \cdot 1 = 6$ and $6 + 1 = 7$. So
$$
(x+6)(x+1) = 0 \implies x_1 = -6, \quad x_2 = -1.
$$
Checking by grouping:
$$
\begin{aligned}
x^2 + x + 6x + 6 &= 0\\
x(x+1) + 6(x+1) &= 0\\
(x+6)(x+1) &= 0.
\end{aligned}
$$
**2 real solutions.**
:::
:::

:::example
Solve $g(x) = 3x(x-4) - 36 = 0$.

:::solution

$$
3x^2 - 12x - 36 = 3(x^2 - 4x - 12) \longrightarrow x^2 - 4x - 12.
$$
X: top $-4$, bottom $-12$, sides $-6$ and $2$. So
$$
(x-6)(x+2) = 0 \implies x_1 = 6, \quad x_2 = -2.
$$
**2 real solutions.**
:::
:::

:::example
Solve $f(x) = -12x + 9 + 4x^2 = 0$.

:::solution
Rearranged: $4x^2 - 12x + 9 = 0$. X: top $-12$, bottom $36$, sides $-6$ and $-6$; dividing each by $4$ gives $-\tfrac{6}{4} = -\tfrac{3}{2}$. So
$$
(4x - 6)\left(x - \tfrac{3}{2}\right) = 0 \longrightarrow x_1 = \tfrac{3}{2}, \quad x_2 = \tfrac{3}{2} \implies x = \tfrac{3}{2}.
$$
Expanding back: $4x^2 - 6x - 6x + \tfrac{18}{2} = 4x^2 - 12x + 9$, since $\tfrac{18}{2} = 9$.

Check $x = \tfrac32$: $\left(\tfrac32\right)\left(\tfrac32\right) = \tfrac94$, so
$$
4\cdot\tfrac94 - 12\left(\tfrac32\right) + 9 = 9 - \tfrac{36}{2} + 9 = 9 - 18 + 9, \qquad -18 + 18 = 0. \checkmark
$$
**1 real solution.**
:::
:::

:::example
Solve $g(x) = x^2 - 5 = 0$.

:::solution
$$
x^2 - \left(\pm\sqrt{5}\right)^2 = 0, \qquad x^2 = 5, \qquad x = \pm\sqrt{5}\ ?
$$
So $x_1 = \sqrt{5}$ and $x_2 = -\sqrt{5}$.
:::
:::

:::example
Solve $h(x) = -2x^2 - 5x + 12 = 0$.

:::solution
X: top $-5$, bottom $(-2)(12) = -24$, sides $-8$ and $3$; dividing each by $-2$ gives $\tfrac{-8}{-2} = 4$ and $\tfrac{3}{-2}$. So
$$
(x+4)(-2x+3) = 0 \implies x_1 = -4, \quad x_2 = \tfrac{3}{2}.
$$
:::
:::

:::example
Solve $g(x) = 3x^2 + 2 + 5x = 0$.

:::solution
Rearranged: $3x^2 + 5x + 2$. X: top $5$, bottom $6$, sides $3$ and $2$; dividing by $3$ gives $\tfrac33 \to (x+1)$ and $\tfrac23 \to (3x+2)$. Splitting the middle term:
$$
\begin{aligned}
3x^2 + 3x + 2x + 2 &= 0\\
3x(x+1) + 2(x+1) &= 0\\
(3x+2)(x+1) &= 0,
\end{aligned}
$$
so $3x + 2 = 0$ or $x + 1 = 0$: $x_1 = -1$, $x_2 = -\tfrac{2}{3}$. **2 real solutions.**
:::
:::

### Factoring problems

:::problem
The equation $x^2 - 12x - 540 = 0$ has two integer roots.

(a) How can we tell from the coefficients that both roots are divisible by $6$?

(b) Find the roots of $x^2 - 12x - 540$.

:::note Scratch work
Write a polynomial as $a_dx^d + \dots + a_0$ and let $(p_1'x + p_1)\cdots(p_d'x + p_d)$ be its factored form. Then
$$a_d = p_1'\cdots p_d', \qquad a_0 = p_1\cdots p_d,$$
so $p_i' \mid a_d$ and $p_i \mid a_0$. Since $a_d = 1$ for $x^2 - 12x - 540$, every $p_i' = 1$, and $540 = 6\cdot 90$, so some $p_i = 6$.

In $x^2 - 12x - 540 = 0$, the $x^2$ cannot be odd.

If $p + q = b$ and $pq = c$, then
$$p + \frac cp = b \;\Rightarrow\; \frac{p^2}{p} + \frac cp = \frac{p^2 + c}{p} = b \;\Rightarrow\; p^2 + c = bp \;\Rightarrow\; c = bp - p^2 = p(b - p).$$

Factor pairs of $540 = 6\cdot 90 = 6\cdot(3^2\cdot 2\cdot 5)$ with both factors even:
$$6\cdot 90,\qquad 54\cdot 10,\qquad 18\cdot 30,\qquad 270\cdot 2.$$
These are the only possible ones because both factors need to be even, and only $6\cdot 90$ and $18\cdot 30$ have both factors divisible by $6$.

With $b = -12$ and $c = -540$: $-540 = p(-12 - p)$. Let’s work mod $6$: $b \equiv 0 \pmod 6$, so $c \equiv p(-p)$, and $c \equiv 0 \pmod 6$, so
$$0 \equiv -p^2 \pmod 6,$$
so $p^2$ is a multiple of $6$. Since $6 \mid p^2$: $3 \mid p^2 \Rightarrow 3 \mid p$ and $2 \mid p^2 \Rightarrow 2 \mid p$.

Let $k = p_1p_2$. If $k \mid q$ then $p_1 \mid q$ and $p_2 \mid q$; and if $q \mid x^2$ with $q$ a product of distinct primes, then $q \mid x$. So $k \mid x^2 \Rightarrow p_1 \mid x$ and $p_2 \mid x$. Then $p + q = -12$ and $6 \mid p$.

:::

:::solution
**(a)** First we notice that the roots must be even since, if they are odd, the equation will not be zero, since $-12x - 540$ is even.

Next we know that
$$(x+p)(x+q) = x^2 + px + qx + pq = x^2 + (p+q)x + pq.$$
So then $p + q = b$ and $pq = c$, where $b, c$ are such that $x^2 + bx + c = x^2 - 12x - 540$. So we have:
$$p + q = b,\quad pq = c \;\Rightarrow\; p + \frac cp = b \;\Rightarrow\; c = bp - p^2 \;\Rightarrow\; c = p(b - p).$$
Now note that we have to show divisibility by $6$, so let us work mod $6$ (i.e. $6 \equiv 0 \pmod 6$). Since both $c = -540$ and $b = -12$ are divisible by $6$, $c \equiv 0 \pmod 6$ and $b \equiv 0 \pmod 6$. This means that:
$$\begin{aligned}
c &\equiv p(0 - p) \pmod 6\\
\Rightarrow\; 0 &\equiv p(0 - p) \pmod 6\\
\Rightarrow\; 0 &\equiv -p^2 \pmod 6\\
\Rightarrow\; -p^2 &\text{ is divisible by } 6.
\end{aligned}$$
Now since $6$ is the product of $2$ distinct primes, by Euclid’s Lemma we have $6 \mid p$.

Finally, since $6 \mid p$ and $q = -12 - p$, then $6 \mid q$.

**(b)** I know that both integer roots are divisible by $6$. I also know that they must both be even. So $540 = 6\cdot(3^2\cdot 2\cdot 5)$; in order to have both factors be divisible by $6$:
$$540 = 6\cdot(6\cdot 3\cdot 5) \;\Rightarrow\; \text{either } 6\cdot 90 \text{ or } 18\cdot 30,$$
and clearly $18\cdot 30$ is the only combination that satisfies $p + q = -12$. Thus the roots are $-18$ and $+30$.
:::

:::solution Another solution
Given $(x + p)(x + q) = x^2 + (p+q)x + pq$: since $-12x$ and $-540$ are even, $-12x + (-540)$ is even, so $x^2$ must be even for $x^2 + (p+q)x + pq = 0$. So the whole thing is divisible by $2$.

Notice that $x^2 = 12x + 540$, and $3 \mid 12x$ and $3 \mid 540$, so $3 \mid 12x + 540$; since $3 \mid 12x + 540$, then $3 \mid x^2$. So $3 \mid x^2$, $2 \mid x^2$, $6 \mid x^2$ and $6 \mid 12x + 540$, so $6 \mid (x+p)(x+q)$.

Now let $p = 6p'$ and $q = 6q'$, so $6p' + 6q' = -12$ and $6p'\cdot 6q' = -540$. So $p' + q' = -2$ and $p'q' = -15$, so now we solve the system of equations:
$$p' + q' = -2,\quad p'q' = -15 \;\to\; p' = -2 - q' \;\to\; (-2 - q')q' = -2q' - q'^2 = -15,$$
$$q'^2 + 2q' - 15 = (q' - 3)(q' + 5) = 0 \;\Rightarrow\; q' = 3 \text{ or } q' = -5,\qquad p' = -\frac{15}{q'}.$$
Then $6(3) = 18$ and $6(-5) = -30$, so
$$x^2 - 12x - 540 = (x + 18)(x - 30).$$
:::
:::

:::problem
(a) $3t^2 + 11t + 10 = 0$

(b) $2x^2 - 7x - 15 = 0$

(c) $36y^2 - 25 = 0$

(d) $9t^2 - 2t + 5 = 25 - 90t$
:::solution
(a) Roots: $-\frac53$, $-2$.

(b) Roots: $-\frac32$, $+5$.

(c) $36y^2 - 25 = 6^2y^2 - 5^2 = (6y + 5)(6y - 5)$, so the roots are $\pm\frac56$.

(d) $9t^2 - 2t + 5 = 25 - 90t \Rightarrow 9t^2 + 88t - 20 = 0$, roots: $+\frac29$, $-10$.
:::
:::

:::problem
(a) Factor $6x^2 + x - 15$.

(b) Find $\frac xy$ if $6x^2 + xy = 15y^2$.
:::solution
**(a)** The constant splits as $(-3)(5)$ or $(3)(-5)$. By the quadratic formula,
$$\frac{-1 \pm \sqrt{1^2 - 4(6)(-15)}}{2(6)} = \frac{-1 \pm \sqrt{361}}{12} = \frac{-1 \pm 19}{12}.$$

**(b)** We want $\frac xy$ such that $6x^2 + xy - 15y^2 = 0$. Let $r = \frac xy$, so $x = ry$:
$$6(ry)^2 + (ry)y - 15y^2 = 6r^2y^2 + ry^2 - 15y^2 = y^2(6r^2 + r - 15) = 0.$$
$y^2$ cannot be $0$, so $6r^2 + r - 15$ has to be $0$:
$$6r^2 + r - 15 = 0 \;\to\; r = \frac{-1 \pm \sqrt{1^2 - 4(6)(-15)}}{2(6)} = \frac{-1 \pm 19}{12} \;\to\; \frac{18}{12} = \frac32 \quad\text{or}\quad -\frac{20}{12} = -\frac{10}{6} = -\frac53.$$
So $r_1 = \frac32$, $r_2 = -\frac53$.
:::
:::

:::problem
How many integers $x$ satisfy the equation $(x^2 - x - 1)^{x + 2} = 1$?
:::solution
If $a^b = 1$, either $b = 0$, or $a = 1$, or $a = -1$ and $b = 2n$ is even.

**Case 1:** $b = 0$: $x + 2 = 0 \to x = -2$. ✓

**Case 2:** $a = 1$: $x^2 - x - 1 = 1 \to x^2 - x - 2 = 0 \to (x - 2)(x + 1) = 0 \to x = 2,\ x = -1$.

**Case 3:** $a = -1$, $b = 2n$:
$$x^2 - x - 1 = -1 \quad\text{and}\quad x + 2 = 2n \;\to\; x = 2n - 2 = 2(n - 1).$$
$x^2 - x = x(x - 1) = 0$, so $x = 0$ or $x = 1$.

- $x = 0$: $0 = 2(n - 1) = 2n - 2$, so $2 = 2n$ and $n = 1$; here $x + 2 = 2$. ✓
- $x = 1$: $1 = 2n - 2$, so $3 = 2n$ and $n = \frac32$, not an integer. (Directly: $1^2 - 1 - 1 = -1$ and the exponent is $1 + 2 = 3$, so the power is $-1$.) So $x = 1$ is out.

So $x = 0$, $x = -2$, $x = 2$, $x = -1$.
:::
:::

## Exercises

:::exercise
Find $\frac ab$ if $a^2 + 4b^2 = 4ab$.
:::solution
Let $\frac ab = r$. Then $(a)^2 + (2b)^2 = 4ab$ becomes $(rb)^2 + (2b)^2 = 4rb^2$, i.e. $r^2b^2 + 4b^2 = 4rb^2$, so $4b^2 = 4rb^2 - r^2b^2 = b^2(4r - r^2)$. Set aside for now: $r^2 - 4r + 4$.

Restart: $a^2 + 4b^2 = 4ab$ with $r = \frac ab$, so $rb = a$:
$$(rb)^2 + 4b^2 = 4rb^2 \;\Rightarrow\; r^2b^2 + 4b^2 = 4rb^2 \;\Rightarrow\; b^2(r^2 + 4) = 4rb^2,$$
Cancelling $b^2$:
$$r^2 - 4r + 4 = 0 \;\to\; (r - 2)(r - 2) = 0 \;\to\; r = 2.$$
So $r = \frac ab = 2$ for all such $a, b$.
:::
:::

:::exercise
Let $a, b \in \RR$ with $0 < a < b$ and $a^2 + b^2 = 6ab$. Find $\dfrac{a+b}{a-b}$.

:::solution
We have $a^2 - 6ab + b^2 = 0$. In the denominator, $(a-b)^2 = a^2 - 2ab + b^2 = (a^2 + b^2) - 2ab = 4ab$, and in the numerator $(a+b)^2 = (a^2 + b^2) + 2ab = 8ab$. So
$$\left(\frac{a+b}{a-b}\right)^2 = \frac{a^2 + 2ab + b^2}{a^2 - 2ab + b^2} = \frac{6ab + 2ab}{(a^2 + b^2) - 2ab} = \frac{8ab}{4ab} = 2.$$
Since $0 < a < b$, $a + b > 0$ and $a - b < 0$, so
$$\frac{a+b}{a-b} = \boxed{-\sqrt2}.$$

:::
:::

:::exercise
$3x(2x - 3y) = -5y(2x - 3y)$
:::solution
$$3x(2x - 3y) + 5y(2x - 3y) = (3x + 5y)(2x - 3y) = 0.$$
From $2x - 3y = 0$: $\frac xy = \frac32$. From $3x = -5y$: $\frac{3x}{3y} = \frac{-5y}{3y}$, so $\frac xy = -\frac53$.
:::
:::

:::exercise
$x^4 - 11x^3 + 24x^2 = 4x^2 - 44x + 96$
:::solution
Moving everything over: $x^4 - 11x^3 + 24x^2 - 4x^2 + 44x - 96 = 0$, i.e.
$$x^4 - 11x^3 + 20x^2 + 44x - 96 = 0,$$
$$x^2(x^2 - 11x) + (20x^2 + 44x - 96) = 0,\qquad x^2(x^2 - 11x) + 4(5x^2 + 11x - 24).$$
Instead, keep the original sides:
$$x^4 - 11x^3 + 24x^2 = 4x^2 - 44x + 96 \;\Rightarrow\; x^2(x^2 - 11x + 24) = 4(x^2 - 11x + 24),$$
$$(x^2 - 4)(x^2 - 11x + 24) = 0.$$
$x^2 - 4 = 0$ gives $x = \pm 2$, and $x^2 - 11x + 24 = (x - 8)(x - 3) = 0$ gives $x = 8$, $x = 3$. Total: $x = 2, -2, 8, 3$.
:::
:::

:::exercise
What is the domain of $f(x) = \dfrac{x+7}{\frac1x+\frac1{x^2-6}}$?

:::solution
We need $x\neq0,\pm\sqrt6$. Then
$$\frac1x+\frac1{x^2-6} = \frac{(x^2-6)+x}{x(x^2-6)},$$
so
$$f(x) = \frac{x+7}{1}\left(\frac{x(x^2-6)}{(x^2-6)+x}\right) \to \frac{x(x^2-6)(x+7)}{x^2+x-6},$$
where $x^2-6 = (x+\sqrt6)(x-\sqrt6)$ and $x^2+x-6 = (x+3)(x-2)$. So also $x\neq-3,2$:
$$\operatorname{Dom} f = \{x\in\RR \mid x\notin\{0,\pm\sqrt6,-3,2\}\}.$$

:::
:::

:::exercise
Find all $x\in\RR$ such that $(x^2-5x+5)^{x^2-9x+20} = 1$.

:::solution
$x^2-9x+20 = 0 \to (x-5)(x-4) = 0 \to x = 5,\ x = 4$: $x^2-5x+5$ can be anything (nonzero) if $x^2-9x+20 = 0$.

The base can also be $1$: $x^2-5x+5 = 1 \to x^2-5x+4 = (x-1)(x-4) = 0 \to x = 1, 4$. Or the base can be $-1$ with an even exponent: $x^2-5x+5 = -1 \to x^2-5x+6 = (x-2)(x-3) = 0$, and the exponent is $6$ at $x = 2$ and $2$ at $x = 3$, both even. So
$$\boxed{x\in\{1,2,3,4,5\}}.$$

:::
:::
