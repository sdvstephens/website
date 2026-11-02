---
course: integrated-maths
chapter: 10
section: 10.9
title: The Rational Root Theorem
---

The same idea extends to rational roots: a root $\frac pq$ in lowest terms has $p$ dividing the constant term and $q$ dividing the leading coefficient.

:::problem
$g(x) = 12x^3 + 16x^2 - 31x + 10$

:::solution
Is there $n \in \ZZ$ with $g(n) = 0$? Possible: $\pm\{1, 2, 5, 10\}$.

The negative candidates don’t work: $g(-1) = 45$, $g(-2) = 40$, $g(-5) = -935$, $g(-10) = -10080$.

So that leaves $1, 2, 5, 10$: $g(1) \ne 0$, $g(2) \ne 0$; for $g(5)$ the first 3 terms sum to something that ends in 5, so no; $g(10) \ne 0$.

Now suppose $g\left(\frac pq\right) = 0$:
$$12\left(\frac pq\right)^3 + 16\left(\frac pq\right)^2 - 31\left(\frac pq\right) + 10 = 0$$
$$\frac{12p^3}{q^3} + \frac{16p^2}{q^2} - \frac{31p}{q} + 10 = 0$$
$$\implies \underbrace{12p^3 + 16p^2q - 31pq^2}_{M\ (\text{every term has a } p)} + \underbrace{10q^3}_{q \text{ only}} = 0.$$

So $M = \sum ap$, and
$$M + 10q^3 = 0 \implies M = -10q^3 \implies -\frac{M}{q^3} = 10 \implies -\frac{M}{10} = q^3.$$
Since $q \in \ZZ$, $10 \mid M$. And $p \mid M = -10q^3$ with $\gcd(p, q) = 1$, so $p \mid 10$.

Similar logic for $12$, using $16p^2q - 31pq^2 + 10q^3$, whose terms all have a $q$.
:::
:::

:::theorem Rational Root Theorem
Given $f(x) = a_nx^n + \cdots + a_0 \in \ZZ[x]$, if $p$ and $q$ are relatively prime integers and $f\!\left(\frac pq\right) = 0$, then $p \mid a_0$ and $q \mid a_n$.
:::

:::proof
Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_0$ be a polynomial with $a_n, a_0 \ne 0$ and $a_i \in \ZZ$. Let $p, q \in \ZZ$ such that $p, q$ are relatively prime and $f\left(\frac pq\right) = 0$. Then
$$f\left(\tfrac pq\right) = 0 \implies q^nf\left(\tfrac pq\right) = a_np^n + a_{n-1}p^{n-1}q + \dots + a_1pq^{n-1} + a_0q^n = 0$$

$$\begin{aligned}
&\implies a_np^n + a_{n-1}p^{n-1}q + \dots + a_1pq^{n-1} = -a_0q^n \\
&\implies p\underbrace{\left(a_np^{n-1} + a_{n-1}p^{n-2}q + \dots + a_1q^{n-1}\right)}_{M} = -a_0q^n.
\end{aligned}$$
Since $pM = -a_0q^n$ and $\gcd(p, q) = 1$, $p \mid a_0$. Similarly for $a_n$:
$$-a_np^n = qN \implies q \mid a_n.$$
:::

:::solution Back to $g(x) = 12x^3 + 16x^2 - 31x + 10$
Divisors: $12$: $1, 2, 3, 4, 6, 12$ and $10$: $1, 2, 5, 10$, so
$$\tfrac12,\ \tfrac13,\ \tfrac14,\ \tfrac16,\ \tfrac1{12},\ \tfrac23,\ \tfrac52,\ \tfrac53,\ \tfrac54,\ \tfrac56,\ \tfrac5{12},\ \tfrac{10}3$$
are the possibilities (numerator and denominator must be relatively prime).

$$\begin{array}{r|rrrr}
\tfrac12 & 12 & 16 & -31 & 10 \\
 & & 6 & 11 & -10 \\ \hline
 & 12 & 22 & -20 & 0
\end{array}$$

$$\begin{aligned}
g(x) &= \left(x - \tfrac12\right)\left(12x^2 + 22x - 20\right) \\
&= \left(x - \tfrac12\right) \cdot 2\left(6x^2 + 11x - 20\right) \\
&= \left(x - \tfrac12\right) \cdot 2(3x - 2)(2x + 5) \\
&= 12\left(x - \tfrac12\right)\left(x - \tfrac23\right)\left(x + \tfrac52\right).
\end{aligned}$$

$\therefore$ the roots are $\frac12$, $\frac23$, $-\frac52$.
:::

:::problem
Find the roots:

(a) $f(x) = 12x^3 - 107x^2 - 15x + 54$

(b) $g(x) = 30x^4 - 133x^3 - 121x^2 + 189x - 45$

:::solution
**(a)** $54 \to 1, 2, 3, 6, 9, 18, 27$ and $12 \to 1, 2, 3, 4, 6, 12$, so the non-integer candidates are
$$\pm\left\{\tfrac12,\ \tfrac13,\ \tfrac14,\ \tfrac16,\ \tfrac1{12},\ \tfrac23,\ \tfrac32,\ \tfrac34,\ \tfrac92,\ \tfrac94,\ \tfrac{27}2,\ \tfrac{27}4\right\}.$$

Signs of the four terms:

| | $12x^3$ | $-107x^2$ | $-15x$ | $+54$ |
|---|---|---|---|---|
| $f(-)$ | $-$ | $-$ | $+$ | $+$ |
| $f(+)$ | $+$ | $-$ | $-$ | $+$ |

NOT $\left\{\tfrac12, -\tfrac12, \tfrac13, -\tfrac13, \tfrac16, \tfrac1{12}\right\}$.

There is a root between $\frac12$ and $1$, since the sign changes.

$$\begin{array}{r|rrrr}
\tfrac23 & 12 & -107 & -15 & 54 \\
 & & 8 & -66 & -27\cdot 2 \\ \hline
 & 12 & -99 & -81 & 0
\end{array}$$

So $\frac23$ is a root:
$$f(x) = (12x^2 - 99x - 81)\left(x - \tfrac23\right) = 3(4x^2 - 33x - 27)\left(x - \tfrac23\right).$$

Try $\frac92$ on $4x^2 - 33x - 27$: $4$, then $-33 + 18 = -15$; even? ($-15 \cdot \frac92$ isn’t an integer, so it can’t cancel the $-27$.)

Candidates $\pm\left\{\tfrac32, \tfrac92, \tfrac{27}2\right\}$ $\to$ let’s work backwards:

$$\begin{array}{r|rrr}
-\tfrac34 & 4 & -33 & -27 \\
 & & -3 & 27 \\ \hline
 & 4 & -36 & 0
\end{array}
\qquad -\frac{36}{4}\cdot(-3) \to 9 \cdot 3 \to 27$$

$$4x - 36 \to \left(x + \tfrac34\right)(4x - 36) \to 4(x - 9) \quad \leftarrow \text{integer???}$$

So:
$$f(x) = 12x^3 - 107x^2 - 15x + 54 = 12(x - 9)\left(x + \tfrac34\right)\left(x - \tfrac23\right).$$

**(b)** $45 = 3^2 \cdot 5 \Rightarrow \pm\{1, 3, 5, 9, 15, 45\}$, over denominators giving $\frac12, \frac13, \dots$

$g(1)$: $30 + 189 = 219$ and $-133 - 121 - 45 = -299$, so $g(1) = -80 \ne 0$. $g(-1) = 30 + 133 - 121 - 189 - 45 \ne 0$.

$30 = 2 \cdot 3 \cdot 5 \Rightarrow \pm\{1, 2, 3, 5, 6, 10, 15, 30\}$.

$$\pm\left\{45,\ \tfrac{45}2,\ 15,\ 9,\ \tfrac{15}2,\ \tfrac92,\ 3,\ \tfrac32\right\}$$

$g(5) = 0$ (by calculator) $\Rightarrow$
$$\begin{array}{r|rrrrr}
5 & 30 & -133 & -121 & 189 & -45 \\
 & & 150 & 85 & -180 & 45 \\ \hline
 & 30 & 17 & -36 & 9 & 0
\end{array}$$
$$g(x) = (x - 5)(30x^3 + 17x^2 - 36x + 9).$$

Candidates now: $\pm\{1, 3, 9\}$ over $\pm\{1, 2, 3, 5, 6, 10, 15, 30\}$.

$g\left(\frac12\right) = +$ and $g(1) = -80$, $\therefore \exists\, r_i \in \left(\frac12, 1\right)$.

$\pm\left\{\tfrac13, \tfrac15, \tfrac16, \tfrac1{10}, \tfrac1{15}, \tfrac1{30}\right\}$ are candidates, and $g\left(\frac13\right) = 0$. Yay!

$$\begin{array}{r|rrrr}
\tfrac13 & 30 & 17 & -36 & 9 \\
 & & 10 & 9 & -9 \\ \hline
 & 30 & 27 & -27 & 0
\end{array}
\implies g(x) = (x - 5)\left(x - \tfrac13\right)(30x^2 + 27x - 27)$$

$$\implies g(x) = 3(x - 5)\left(x - \tfrac13\right)(10x^2 + 9x - 9), \qquad x = \frac{-9 \pm \sqrt{81 - 4(10)(-9)}}{2(10)}.$$

With $\sqrt{441} = \sqrt{3^2 \cdot 7^2} = 21$:
$$\frac{-9 \pm 21}{20} \to \begin{cases} -\frac{30}{20} = -\frac32, \\[2pt] \frac{12}{20} = \frac35. \end{cases}$$

$$\begin{aligned}
g(x) &= 3(x - 5)\left(x - \tfrac13\right)(5x - 3)(2x + 3) \\
&= 30(x - 5)\left(x - \tfrac13\right)\left(x - \tfrac35\right)\left(x + \tfrac32\right).
\end{aligned}$$

Check the constant term: $30(-5)\left(-\frac13\right)\left(-\frac35\right)\left(\frac32\right) = -45$. ✓

Roots: $5$, $\frac13$, $\frac35$, $-\frac32$.
:::
:::

**Tips:**

1. Factor, factor, factor!
2. Start your rational root hunt with $-1, 0, 1$.
3. Try the same strats in different ways.
4. Example $\to$ general for proofs.

## Exercises

:::exercise
:::solution
Because $a_i \in \RR\setminus\ZZ$ for all $i$ with $i \neq 0, n$, there exists $r_i \in \QQ$ such that $p, q$ in $p/q$ ($q \neq 0$) are relatively prime.
:::
:::

:::exercise
Find consecutive integers $n, n+1, n+2, n+3$ such that the cubes of the first three add up to the cube of the last: $\sum_{i=1}^{3} a_i^3 = (n+3)^3$ for $a_i \in \{n, n+1, n+2\}$.
:::solution
$$n^3 + (n+1)^3 + (n+2)^3 = (n+3)^3.$$
Expanding,
$$\begin{aligned}
n^3 &= n^3\\
(n+1)^3 &= n^3 + 3n^2 + 3n + 1\\
(n+2)^3 &= n^3 + 6n^2 + 12n + 8,
\end{aligned}$$
which add up to $3n^3 + 9n^2 + 15n + 9$, while $(n+3)^3 = n^3 + 9n^2 + 27n + 27$. So
$$2n^3 - 12n - 18 = 0 \implies n^3 - 6n - 9 = 0.$$
Candidates for rational roots: $\pm\{1, 3, 9\}$.

$f(3) = 0$ ✓. Synthetic division by $3$:
$$\begin{array}{r|rrrr}
3 & 1 & 0 & -6 & -9\\
  &   & 3 & 9 & 9\\ \hline
  & 1 & 3 & 3 & 0
\end{array}$$
so the quotient is $x^2 + 3x + 3$, whose roots are
$$\frac{-3 \pm \sqrt{9 - 4(3)}}{2} = \frac{-3 \pm \sqrt3\, i}{2}.$$
So $n = 3$, and indeed $3^3 + 4^3 + 5^3 = 6^3$:
$$27 + 64 + 125 = 216, \qquad 27 + 189 = 216, \qquad 216 = 216 \;\checkmark$$
:::
:::

:::remark Scratch work
With no problem statement on the page:
$$\begin{aligned}
&x^3 + 2x^2 + 4\\
-&x^3 + 2x^2 - 4\\
-&x^3 + 2x^2 - 4x + 4
\end{aligned}$$
$$2x^2 + 4 = x^3 + 4x,$$
beside a rough sketch of two crossing curves.
:::
