---
course: integrated-maths
chapter: 10
section: 10.10
title: Bounds on Roots
---

The signs of the coefficients, and the bottom row of a synthetic division, can rule out whole ranges of candidate roots before any are tested.

:::problem
(a) Let $f(x) = x^3 + 13x^2 + 39x + 27$.

(b) Let $f(x) = 3x^3 - 28x^2 + 51x - 14$. Without finding any roots, how can we tell that $\nexists\, r_i \in \QQ_{<0}$?

:::solution
**(a)** At a root we know $a_nr^n + \dots + a_1r = -a_0$, so since all $a_i \in \NN$, $r_i \in \QQ_{<0}$. $\therefore \nexists\, r_i \in \QQ_{>0}$.

**(b)** $r_i \in \QQ_{<0} \implies 3(-)^3 - 28(-)^2 + 51(-)$ must be $+$ (it has to equal $14$), but look!
$$\underbrace{3r^3}_{\ominus}\ \underbrace{-\,28r^2}_{\ominus}\ \underbrace{+\,51r}_{\ominus} = \ominus.$$
$\therefore r_i$ cannot be negative.
:::
:::

:::problem
Let $f(x) = a_nx^n + \dots + a_0$.

:::solution
If $f(x) = 0$ then $\sum_{i=1}^n a_ix^i = -a_0$. Now if all $a_i \in \QQ_{>0}$, then $\sum_{i=1}^n a_ix^i$ must be negative; but for positive $x$ the sum is positive. The same is true if all $a_i \in \QQ_{<0}$: if $r_i \in \QQ_{>0}$, then $\sgn\left(\sum_{i=1}^n a_ix^i\right) = -1$, but since $a_0$ is negative, $\sum a_ix^i = -a_0$ is positive $\implies -1 = +1$, which is a contradiction.

Now if $a_i > 0$ for all $i \in \{2m + 1 \mid m \in \ZZ\}$ and $a_i < 0$ for all $i \in \{2m \mid m \in \ZZ\}$, note that $a_0$ must then be a negative number, since $0$ is even. So assume $n$ is even; $\therefore$ the number of terms is odd.

**(b)** If $a_i > 0$ for all odd $i$, $x < 0$, and $a_i < 0$ for all even $i$, then $\sgn(a_ix^i) = -1$ for odd $i$: each term for odd $i$ must be negative. Similarly, if $a_i < 0$ for all even $i$, then $\sgn(a_ix^i) = -1$, since $x^i$ is positive here and $a_i < 0$.

Thus all roots must be non-negative (to cancel out the $a_0$ term, which is even and thus negative).

**(c)** Let $a_i < 0$ for all odd $i$ and $a_i > 0$ for all even $i$. If $x < 0$, then $\sgn\left(a_{i_\text{odd}}x^{i_\text{odd}}\right) = +1$ and $\sgn\left(a_{i_\text{even}}x^{i_\text{even}}\right) = +1$, $\therefore$ there cannot exist negative roots.

:::
:::

:::note
So if the coefficients are all the same sign, there are no positive roots; if they alternate in sign, there are no negative roots.
:::

:::problem
Let $g(x) = x^4 - 3x^3 - 12x^2 + 52x - 48$.

(a) Use synthetic division to divide $g(x)$ by $x - 6$.

:::solution
**(a)**
$$\begin{array}{r|rrrrr}
6 & 1 & -3 & -12 & 52 & -48 \\
 & & 6 & 18 & 36 & 528 \\ \hline
 & 1 & 3 & 6 & 88 & 480
\end{array}$$
$$\implies q(x) = x^3 + 3x^2 + 6x + 88 \quad\text{and}\quad r(x) = \frac{480}{x - 6}.$$

**(b)** If $x > 6$ then $r(x)$ is positive and nonzero. $q(x)$ is also positive and nonzero. $\therefore g(x)$ for $x > 6$ is nonzero and positive. So $6$ is *an* upper bound for the roots of $g(x)$.
:::
:::

:::problem
Let $f(x) = (x - a)q_1(x) + r_1$.

(a) If $r_1 > 0$ and all coefficients of $q_1(x)$ are greater than zero, why must $f(x)$ have no roots greater than $a$?

(b) Why must $a$ be positive for this statement to hold?

:::solution
**(a)** Let $x > a$. Then $(x - a)$ is positive and each term of $q_1(x)$ is positive, so for all $x > a$, $f(x)$ is positive and nonzero. Thus no $x > a$ can be a zero, so there aren’t any roots $> a$.

**(b)** Take 2: if $a < 0$, write $a = -b$. Then $(x - a) = \big(x - (-b)\big) = (x + b)$, so $\sgn(x - a) = +1$ for all $x > a$; but $x$ can be negative, so $q_1(x)$ can be negative, while $r_1$ will be positive. $\therefore f(x)$ can be negative, positive, or zero (and thus a root). TL;DR: this doesn’t give us much useful info.
:::
:::

## Exercises

:::exercise
(a) $6r^3 + 31r^2 + 34r - 15 = 0$

(b) $4r^4 - 28r^3 + 61r^2 - 42r + 9 = 0$

:::solution
**(a)** $a_n$: $\pm\{1, 2, 3, 6\}$; $a_0$: $\pm\{1, 3, 5, 15\}$. Non-integer candidates: $\frac12, \frac32, \frac52, \frac53, \frac56, \frac{15}2, \dots$

$$\begin{array}{r|rrrr}
1 & 6 & 31 & 34 & -15 \\
 & & 6 & 37 & 71 \\ \hline
 & 6 & 37 & 71 & 56
\end{array}
\quad \therefore \nexists\, r_i > 1,$$
which rules out $\frac32, \frac52, \frac53, \frac{15}2$.

$$\begin{array}{r|rrrr}
\tfrac12 & 6 & 31 & 34 & -15 \\
 & & 3 & 17 & 25.5 \\ \hline
 & 6 & 34 & 51 & 10.5
\end{array}$$
so no root is bigger than $\frac12$ either. Left: $-\frac12$, $-\frac56$, $\pm\frac16$, $\pm\frac13$.

$$\begin{array}{r|rrrr}
-\tfrac12 & 6 & 31 & 34 & -15 \\
 & & -3 & -14 & -10 \\ \hline
 & 6 & 28 & 20 & -25
\end{array}
\qquad
\begin{array}{r|rrrr}
\tfrac16 & 6 & 31 & 34 & -15 \\
 & & 1 & \tfrac{16}3 & \tfrac{118}{18} \\ \hline
 & 6 & 32 & \tfrac{118}3 & -
\end{array}$$

So $\exists\, r_i \in \left(-\frac12, \frac12\right)$, and in fact $\exists\, r_i \in \left(\frac16, \frac12\right)$:
$$\begin{array}{r|rrrr}
\tfrac13 & 6 & 31 & 34 & -15 \\
 & & 2 & 11 & 15 \\ \hline
 & 6 & 33 & 45 & 0
\end{array}$$
$$(6x^2 + 33x + 45)\left(x - \tfrac13\right) = \tfrac33\,(2x^2 + 11x + 15)(3x - 1).$$

For $2x^2 + 11x + 15$ the candidates are $-\{1, 3, 5, 15\}$ over $\{1, 2\}$. Try $-\frac52$: $\frac{25}2 - \frac{55}2 = -\frac{30}2 = -15$, which cancels the $15$:
$$\begin{array}{r|rrr}
-\tfrac52 & 2 & 11 & 15 \\
 & & -5 & -15 \\ \hline
 & 2 & 6 & 0
\end{array}
\ \to\ \left(x + \tfrac52\right)(2x + 6) = 2\left(x + \tfrac52\right)(x + 3).$$

$$\begin{aligned}
6x^3 + 31x^2 + 34x - 15 &= \left(x - \tfrac13\right)(6x^2 + 33x + 45) \\
&= (3x - 1)(2x^2 + 11x + 15) = (3x - 1)\left(x + \tfrac52\right)(2x + 6) \\
&= (3x - 1)(2x + 5)(x + 3).
\end{aligned}$$
Check:
$$\begin{aligned}
(6x^2 + 15x - 2x - 5)(x + 3) &= (6x^2 + 13x - 5)(x + 3) \\
&= 6x^3 + 13x^2 - 5x + 18x^2 + 39x - 15 = 6x^3 + 31x^2 + 34x - 15. \checkmark
\end{aligned}$$

**(b)**
$$4r^4 - 28r^3 + 61r^2 - 42r + 9 = 0 \iff -(-4r^4 + 28r^3 - 61r^2 + 42r - 9) = 0.$$
$\therefore \nexists\, r_i < 0$. Here $p_{r_i} \in \{+1, +3, +9\}$ and $q_{r_i} \in \{1, 2, 4\}$, so the candidates are
$$+\left\{\tfrac12,\ \tfrac14,\ \tfrac32,\ \tfrac34,\ \tfrac92,\ \tfrac94\right\}$$
(not negative: OOPS, there are supposed to be no negative roots!). Since $\sgn\big(f(0)\big) = +1$, if any of them has $\sgn\left(f\left(\frac{p_{r_i}}{q_{r_i}}\right)\right) = -1$, then $\exists\, r_i \in \left(0, \frac{p_{r_i}}{q_{r_i}}\right)$.

Dividing $-4r^4 + 28r^3 - 61r^2 + 42r - 9$:
$$\begin{array}{r|rrrrr}
\tfrac12 & -4 & 28 & -61 & 42 & -9 \\
 & & -2 & 13 & -24 & 9 \\ \hline
 & -4 & 26 & -48 & 18 & 0
\end{array}
\qquad
\begin{array}{r|rrrr}
3 & -4 & 26 & -48 & 18 \\
 & & -12 & 42 & -18 \\ \hline
 & -4 & 14 & -6 & 0
\end{array}
\quad \to \tfrac12,\ 3.$$

$$\begin{aligned}
&\left(x - \tfrac12\right)(x - 3)(-4x^2 + 14x - 6) \\
&= (2x - 1)(x - 3)(-2x^2 + 7x - 3) \\
&= -(2x - 1)^2(x - 3)^2,
\end{aligned}
\qquad
\begin{array}{r|rrr}
\tfrac12 & -2 & 7 & -3 \\
 & & -1 & 3 \\ \hline
 & -2 & 6 & 0
\end{array}$$
:::
:::

:::exercise
:::solution
$a_0 = -3$, $f(1) = 34$, $f(0) = -3$, $f\left(\frac13\right) = 0$. Since $\frac13$ is a root, $a_n = 3m$ with $m \in \ZZ$.

$$\underbrace{\qquad\cdots\qquad}_{\sgn(\text{terms}) = +1} + a_0, \qquad \sgn(a_0) = -1.$$

After synthetic division by $\frac13$, the bottom row starts $3m$, and the next product is $m$.

Consider:

![Sketch of the graph of f rising from f(0) = -3 below the x-axis, through the root at x = 1/3, up to f(1) = 34](/notes/integrated-maths/figures/s5-ex-7-4-2-sketch.svg)

$$\boxed{\text{NO}}$$
:::
:::

:::exercise
:::solution
Suppose all $a_i \ge 0$, but the number of $a_{i_j} = 0$ is less than $n$, up to $a_n$ (i.e., there is at least one $a_i > 0$). Let $x$ be positive. Then each term is either $a_ix^i \in \RR_{>0}$ or $0$, and at least one of them is guaranteed to be positive. $\therefore f(x)$ is always positive for $x > 0$, $\therefore \nexists$ positive roots. Similarly for $a_i \le 0$.
:::
:::

:::exercise
Consider the set of all equations $x^3 + a_2x^2 + a_1x + a_0 = 0$, where $a_i \in \RR$ for all $i$ and $|a_i| \le 2$ for all $i$. Let $r$ be the largest positive number ($r \in \RR_{>0}$) that satisfies at least one of these equations. Which inequality does $r$ satisfy?

(A) $1 \le r < \frac32$ $\quad$ (B) $\frac32 \le r < 2$ $\quad$ (C) $2 \le r < \frac52$ $\quad$ (D) $\frac52 \le r < 3$ $\quad$ (E) $3 \le r < \frac72$

:::solution
So $-2 \le a_i \le 2 \Rightarrow a_0 \in \RR_{<0}$, $a_1 \in \RR_{<0}$, $a_2 \in \RR_{<0}$.

$$x^3 = -(a_2x^2 + a_1x + a_0).$$
Biggest $r^3 \Rightarrow \min(a_i)$:
$$\begin{aligned}
x^3 &= -(-2x^2 - 2x - 2) = \left|-2x^2 - 2x - 2\right| \\
x^3 &= 2x^2 + 2x + 2 \\
r^3 &= 2r^2 + 2r + 2 = 2(r^2 + r + 1).
\end{aligned}$$
So we want the largest root of
$$f(x) = x^3 - 2x^2 - 2x - 2 = 0.$$

$$\begin{aligned}
f(1) &= 1 - 2 - 2 - 2 = -5 \\
f\left(\tfrac32\right) &= \tfrac{27}8 - \tfrac92 - 3 - 2 = \tfrac{27}8 - \tfrac{36}8 - \tfrac{24}8 - \tfrac{16}8 \\
f(3) &= 27 - 18 - 6 - 2 = 1 \\
f\left(\tfrac72\right) &= \tfrac{343}8 - \tfrac{49}2 - 7 - 2
\end{aligned}$$
and $f(2)$, $f\left(\frac52\right)$ in between.

(Side try: $x^2 - x - 1$ gives $\frac{1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{1 \pm \sqrt5}{2} = \varphi$?)

The root is between here: $f\left(\frac52\right) = -\frac{31}8 < 0 < 1 = f(3)$, so
$$\boxed{\tfrac52 \le r < 3}\ \text{(D)}.$$

:::
:::
