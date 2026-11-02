---
course: integrated-maths
chapter: 10
section: 10.8
title: Integer Roots
---

For a polynomial with integer coefficients, an integer root has to divide the constant term. This page finds that fact, uses it with synthetic division to factor polynomials, and adds the sign-change test for locating roots.

:::problem
Let $f(x) = x^3 - 5x^2 - 77x + 441$.

**(a)** Consider $f(2) = 2^3 - 5(2)^2 - 77(2) + 441$. How can we determine $f(2) \neq 0$ without evaluating or doing calculations?

:::solution
$441$ is odd; all other terms are multiples of $2$ and therefore even, so they cannot sum to $-441$. Therefore $f(2) \neq 0$.
:::

**(b)** Consider $f(5) = 5^3 - 5(5)^2 - 77(5) + 441$. Which terms are divisible by $5$? Which aren’t? Is $5$ a root?

:::solution
No, $5$ is not a root, because if it were, the $d = 441$ term would be divisible by $5$, i.e. end in $0$ or $5$.
:::

**(c)** Suppose $n \in \ZZ$ with $f(n) = 0$. Show that $n$ is a divisor of $441$.

:::solution
$$f(n) = n^3 - 5n^2 - 77n + 441 = 0 \implies n(m) + 441 = 0, \qquad m = n^2 - 5n - 77,$$
$$\implies -441 = nm \implies -\frac{441}{n} = m,$$
and since $m \in \ZZ$, $n \mid 441$.
:::

**(d)** Find the roots of $f(x)$.

:::solution
$441 = 1 \cdot 3^2 \cdot 7^2 = 1 \cdot 9 \cdot 49$. Let’s check if $3$ is a root ($\Rightarrow r_i \in \ZZ$). (Possible roots, if in $\ZZ$: $1, 3, 7, 9, 21, 49, 63, 147, 441$.)

$$\begin{array}{r|rrrr}
-3 & 1 & -5 & -77 & 441 \\
   &   & -3 & 24 & \\ \hline
   & 1 & -8 & -53 &
\end{array} \qquad (x \pm 3) \nmid f(x).$$

$$\begin{array}{r|rrrr}
\pm 1 & 1 & -5 & -77 & 441 \\ \hline
+1: & 1 & -4 & -81 & \times \\
-1: & 1 & -6 & -71 & \times
\end{array} \qquad \text{Obviously not.}$$

$$\begin{array}{r|rrrr}
\pm 9 & 1 & -5 & -77 & 441 \\
      &   &    &     & -441 \\ \hline
+9: & 1 & 4 & -41 & \times \\
-9: & 1 & -14 & 49 & 0 \ \checkmark
\end{array}$$
So $(x + 9)$ is a factor ($-9$ is a root), and the quotient is $x^2 - 14x + 49 = (x - 7)^2$.

Therefore the roots are $7, 7, -9$, or: $7$ with a multiplicity of $2$, and $-9$; or $f(x) = (x - 7)^2(x + 9)$.
:::
:::

:::note Extra
$f(n) = n^2 + n + 41$ cannot be factored with integer coefficients (as a product of two polynomials). Compute $f(1), f(2), f(3), f(4)$: what is interesting?

$$\left.\begin{aligned}
f(1) &= 43 \to \text{prime} \\
f(2) &= 47 \to \text{prime} \\
f(3) &= 53 \to \text{prime} \\
f(4) &= 61 \to \text{prime} \\
f(5) &= 71 \to \text{prime} \\
f(6) &= 83 \to \text{prime}
\end{aligned}\right\} \quad \text{seems like a prime finder, but that cannot be, so what's going on?}$$

The roots:
$$\frac{-1 \pm \sqrt{1 - 4(41)}}{2} \to \frac{-1 \pm \sqrt{163}\,i}{2}.$$

$f(0) = 41$ and $f(-1) = 41$ are prime; $f(-2) = 43 \to$ prime. What about these?

Also, what if $n = 163$? Then $f(163) = 26773$. Ah! $26773$ is divisible by $41$. Wait, if $f(41) \to 41^2 + 41 + 41 = 41(41 + 1 + 1) \to$ not prime. So this happens earlier. $f(40) = 1600 + 40 + 41 = 1681 \to$ not prime. Let’s try $f(30) = 971 \to$ prime. Hmmm.

$n(n+1) + 41 \to 2\sum_{k=1}^{n} k + 41 \to$ no new info. $\hookrightarrow nm + 41$ (restrict to $\ZZ^+$).

Let’s try $f(31) = 31 \cdot 32 + 41 = 1033 \to$ prime; $f(35) = 1301 \to$ prime; $f(37) = 1447 \to$ prime; $f(40) = 40(41) + 41 = 41(40 + 1) \to$ **not prime**.

So $n^2 + n + 41$ produces primes for $n \in \{1, 2, 3, \dots, 39\}$.

Let’s study $39 \to 39(40) + 41 \to 1601$: always odd. An odd $+$ prime $-\,2$ $\hookrightarrow$ up to the prime $-\,2$.

$$\begin{aligned}
n(n+1) + 2 &\to f(1) = 4 \to \text{not prime} \\
n(n+1) + 3 &\to f(1) = 5\ \checkmark,\ f(2) = 9 \to \text{not prime} \quad (\text{use } p \text{ and up}) \\
n(n+1) + 5 &\to f(1) = 7\ \checkmark,\ f(2) = 11,\ f(3) = 17,\ f(4) \to \text{not prime} \\
n(n+1) + 7 &\to f(1) = 9 \to \text{not prime} \to \text{why?} \\
n(n+1) + 11 &\to f(1) = 13 \\
n(n+1) + 13 &\to f(1) = 15 \to \text{not prime!} \\
n(n+1) + 17 &\to f(1) = 19 \\
n(n+1) + 19 &\to f(1) = 21 \to \text{not prime!}
\end{aligned}$$

What’s going on? I checked and it seems to be that on the $\CC$ roots, $-b \pm \sqrt{\ }$:
$$\sqrt{163}\,i \to i\sqrt{1 - 4(3)} \to \sqrt{11}\,i,\ \sqrt{19}\,i,\ \sqrt{43}\,i,\ \sqrt{67}\,i \hookrightarrow \text{why?}$$
$2(3) + 1 = 7$? For $1$: $n(n+1)$ with $n = 0$, $n = 1$.

**Only** $2, 3, 5, 11, 17, 41$ up to $41$? What about $> 41$?
:::

:::problem
Suppose $k$ is a root of $f(x) = a_nx^n + \dots + a_0$, where $k$ is a nonzero integer, and all the coefficients of $f(x)$ are integers. Why must $k \mid a_0$?

:::solution
Let $x - k \mid f(x)$, with $k, a_i \in \ZZ$, $k \neq 0$. Then
$$f(k) = 0 \implies a_0 = -(a_nk^n + a_{n-1}k^{n-1} + \dots + a_1k).$$
Ah, but that is
$$a_0 = -k(a_nk^{n-1} + a_{n-1}k^{n-2} + \dots + a_1) \implies \frac{a_0}{k} = -(a_nk^{n-1} + \dots + a_1),$$
in which the right side must be an integer, as a finite sum of integers. Thus $\frac{a_0}{k} = m \in \ZZ$, so $k \mid a_0$. $\checkmark$
:::
:::

:::remark
For a polynomial with all $a_i \in \ZZ$: if a root $r_j \nmid a_0$, then $r_j \notin \ZZ$.
:::

:::problem
Let $f(x) = x^3 - 3x^2 - 10x + 24$.

**(a)** Graph $f(x)$.

**(b)** Notice that $f(0) = 24$ and $f(3) = -6$. Show there exists a root of $f(x)$ in $[0, 3]$.

:::solution
($24 = 1 \cdot 2^3 \cdot 3$, and $24 \mid 24$ too (duh).)

Since $f(0) > 0$ and $f(3) < 0$, the $x$-axis was crossed by $f(x)$. Thus there exists a root; let’s check:

$$\begin{array}{r|rrrr}
2 & 1 & -3 & -10 & 24 \\
  &   & 2 & -2 & -24 \\ \hline
  & 1 & -1 & -12 & 0
\end{array} \to x^2 - x - 12 = (x - 4)(x + 3).$$
So the factors are $(x - 2)(x - 4)(x + 3)$.
:::
:::

:::note Trick!
If $f(x)$ is a polynomial and $a, b \in \RR$ such that $\sgn(f(a)) \neq \sgn(f(b))$, then there exists a root $r_i$ of $f(x)$ between $a$ and $b$.
:::

:::problem
Factor $x^4 - 5x^3 - 4x^2 + 44x - 48$ and find its roots.

:::solution
So $\pm(1, 2, 3, 4, 6, 8, 12, 16, 24, 48)$ are possible. Given that we have order $4$, either $1$ or $3$ out of $4$ of the roots are negative (since $r_1r_2r_3r_4 = -48$).

Start with $\pm 1$: $1 - 5 - 4 + 44 - 48 \neq 0$, and $1 + 5 - 4 - 44 - 48 \neq 0$. Rats. Ah! But $f(1) = -12$ and $f(-1) = -90$, so if this trend of upwardness continues we might have a root very soon! $f(2) = 16 - 40 - 16 + 88 - 48 = 0$, a root! So now we can factor quickly and continue.

$$\begin{array}{r|rrrrr}
2 & 1 & -5 & -4 & 44 & -48 \\
  &   & 2 & -6 & -20 & 48 \\ \hline
  & 1 & -3 & -10 & 24 & 0
\end{array} \implies x^3 - 3x^2 - 10x + 24.$$

Now we’ve narrowed down to $\pm(2, 3, 4, 6, 8, 12, 24)$! Let’s try $f(2)$ and then $f(8)$ to see if that tells us anything. $f(2) = 8 - 12 - 20 + 24 = 0$, woah! So the root $2$ has multiplicity $2$!
$$\begin{array}{r|rrrr}
2 & 1 & -3 & -10 & 24 \\
  &   & 2 & -2 & -24 \\ \hline
  & 1 & -1 & -12 & 0
\end{array}$$
So $x^2 - x - 12 \to (x - 4)(x + 3)$.

Thus the roots are $-3, 2, 2, 4$, and the factored form is $(x + 3)(x - 2)^2(x - 4)$.
:::
:::

:::note Trick!
If there is no $a_0$ in our polynomial, then $0$ is a root of said polynomial.
:::

:::problem
Factor and find the roots of $x^6 + 15x^5 + 81x^4 + 193x^3 + 198x^2 + 72x$.

:::solution
At a root,
$$0 \le x^6 + 81x^4 + 198x^2 = -(15x^5 + 193x^3 + 72x).$$
$72 = 6^2 \cdot 2 = 2^3 \cdot 3^2$. We know $0$ is a root, and all other roots must be negative:
$$x(x^5 + 15x^4 + 81x^3 + 193x^2 + 198x + 72) = 0.$$
What’s possible: $-(1, 2, 4, 8, 3, 9, 6, 12, 24, 18, 36, 72)$. Let’s quickly try $-1$:
$$f(-1) = -1 + 15 - 81 + 193 - 198 + 72 = 0,$$
so $-1$ is a root, and so now we have:
$$\begin{array}{r|rrrrrr}
-1 & 1 & 15 & 81 & 193 & 198 & 72 \\
   &   & -1 & -14 & -67 & -126 & -72 \\ \hline
   & 1 & 14 & 67 & 126 & 72 & 0
\end{array} \implies f(x) = x(x + 1)(x^4 + 14x^3 + 67x^2 + 126x + 72).$$

At $-1$: $1 - 14 = -13$, $-13 + 67 = 54$, and $126 - 54 = 72$, so $1 - 14 + 67 - 126 + 72 = 0$. So $-1$ works again!
$$\begin{array}{r|rrrrr}
-1 & 1 & 14 & 67 & 126 & 72 \\
   &   & -1 & -13 & -54 & -72 \\ \hline
   & 1 & 13 & 54 & 72 & 0
\end{array} \implies x^3 + 13x^2 + 54x + 72 \quad (\text{call this } m(x)).$$

So $f(x) = x(x + 1)^2(x^3 + 13x^2 + 54x + 72)$ so far.

Now $-1$ does not work anymore, so what else: $-(2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72)$. But $m(-1) = 30$ and $m(-8) = -40$, so there exists a root between them. $f(-6) = 0$, yay!
$$\begin{array}{r|rrrr}
-6 & 1 & 13 & 54 & 72 \\
   &   & -6 & -42 & -72 \\ \hline
   & 1 & 7 & 12 & 0
\end{array} \implies x^2 + 7x + 12 \to (x + 4)(x + 3).$$

So fully factored: $f(x) = x(x + 1)^2(x + 6)(x + 4)(x + 3)$, and $0, -1, -1, -6, -4, -3$ are the $6$ roots.

:::
:::

## Exercises

:::exercise
Find all roots of the following:

**(a)** $f(x) = x^3 - 4x^2 - 11x + 30$

:::solution
By the RRT: $30 = 1 \cdot 2 \cdot 3 \cdot 5$ (and $30 \mid 30$), so $x \in \pm\{1, 2, 3, 5, 6, 10, 15, 30\}$. Since $f(2) = 0$, $(x - 2)$ divides $f(x)$:

$$\begin{array}{r|rrrr}
2 & 1 & -4 & -11 & 30 \\
  &   & 2 & -4 & -30 \\ \hline
  & 1 & -2 & -15 & 0
\end{array} \implies x^2 - 2x - 15$$
is $q(x)$, so $(x + 3)(x - 5)(x - 2)$ is our factored form. Therefore the roots are $\{-3, 2, 5\}$.
:::

**(b)** $g(t) = t^4 + 5t^3 - 19t^2 - 65t + 150$

:::solution
So $t \in \pm\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\}$, and since
$$16 + 40 - 76 - 130 + 150 = -206 + 206 = 0,$$
$g(2) = 0$, so $(t - 2) \mid g(t)$.

So:
$$\begin{array}{r|rrrrr}
2 & 1 & 5 & -19 & -65 & 150 \\
  &   & 2 & 14 & -10 & -150 \\ \hline
  & 1 & 7 & -5 & -75 & 0
\end{array} \implies t^3 + 7t^2 - 5t - 75,$$
and now notice that this cubic vanishes at $-5$, so:
$$\begin{array}{r|rrrr}
-5 & 1 & 7 & -5 & -75 \\
   &   & -5 & -10 & 75 \\ \hline
   & 1 & 2 & -15 & 0
\end{array} \implies t^2 + 2t - 15 = (t + 5)(t - 3).$$
So the factored form is $g(t) = (t - 2)(t - 3)(t + 5)^2$. Therefore the roots are $\{2, 3, -5, -5\}$.

:::

**(c)** $f(x) = -x^5 - 12x^4 + 6x^3 + 64x^2 - 93x + 36$

:::solution
$x \in \pm\{1, 2, 3, 6, 18, 9, 4, 12, 36\}$, and $f(1) = 0$:
$$\begin{array}{r|rrrrrr}
1 & -1 & -12 & 6 & 64 & -93 & 36 \\
  &    & -1 & -13 & -7 & 57 & -36 \\ \hline
  & -1 & -13 & -7 & 57 & -36 & 0
\end{array} \implies \text{divide by } 1 \text{ again, so}$$
$$\begin{array}{r|rrrrr}
1 & -1 & -13 & -7 & 57 & -36 \\
  &    & -1 & -14 & -21 & 36 \\ \hline
  & -1 & -14 & -21 & 36 & 0
\end{array} \implies -x^3 - 14x^2 - 21x + 36$$
with $(x - 1)^2$ $\to$ divide by $1$ again, so:
$$\begin{array}{r|rrrr}
1 & -1 & -14 & -21 & 36 \\
  &    & -1 & -15 & -36 \\ \hline
  & -1 & -15 & -36 & 0
\end{array} \implies -x^2 - 15x - 36 = (x + 3)(x + 12)(-1).$$

$$f(x) = -1(x - 1)^3(x + 3)(x + 12), \quad \text{so } x \in \{1, 1, 1, -3, -12\}.$$
:::

**(d)** $h(y) = 6y^3 - 5y^2 - 22y + 24$

:::solution
$$\begin{aligned}
h(1) &= 6 - 5 - 22 + 24 &&\to + \\
h(4) &= 64(6) - 5(16) - 22(4) + 24 &&\to + \\
h(-4) &= -64(6) - 5(16) + 22(4) + 24 = -384 - \dots + \dots + 24 &&\to -
\end{aligned}$$
so there exists a root $y \in [-4, 2)$.
$$h(-2) = 6(-8) - 5(4) - 22(-2) + 24 = -48 - 20 + 44 + 24 = -68 + 68 = 0.$$
So $h(-2) = 0 \implies (y + 2) \mid h(y)$:
$$\begin{array}{r|rrrr}
-2 & 6 & -5 & -22 & 24 \\
   &   & -12 & 34 & -24 \\ \hline
   & 6 & -17 & 12 & 0
\end{array} \implies 6y^2 - 17y + 12 \implies y \in +\{1, 2, 3, 4, 6, 12\}.$$
$$\frac{17 \pm \sqrt{289 - 4(6)(12)}}{12} = \frac{17 \pm 1}{12} \to \frac{18}{12} = \frac{3}{2}, \quad \to \frac{16}{12} = \frac{4}{3},$$
so $6y^2 - 17y + 12 = 6\left(y - \frac{3}{2}\right)\left(y - \frac{4}{3}\right)$.

:::
:::

:::exercise
$f(x) = x^4 - 8x^3 + 24x^2 - 32x + 16$. Note $f(2) = 0$. We can then check all the other divisors of $16$ besides $2$ and see that they aren’t roots of $f(x)$. Can we conclude that the other $3$ roots are not integers?

:::solution
$4$ roots: $+$, so $++++$ or $+-+-$. We know $+-$, not $++++$, so $+-+-$ maybe. Wait, no: the root $2 \in \ZZ$ can repeat, so we **cannot** conclude that. In fact $f(x) = (x - 2)^4$, and the other $3$ roots are all $2$.

:::
:::

:::exercise
Suppose $f(x) \in \RR[x]$ with all $a_i \in \ZZ$, $f(2) = 3$ and $f(7) = -5$. Show that $f(x)$ has no integer roots.

:::solution
So there exists $r \in (2, 7)$. Hm. So
$$a_0 = (-1)^n a_n r_1r_2r_3\cdots r_n.$$

$3, 4, 5, 6$.
$$\left.\begin{aligned} 2 &\mapsto \text{odd number} \\ 7 &\mapsto \text{odd number} \end{aligned}\right\} \text{ doesn't matter if even or odd input?}$$
:::
:::

:::exercise
Let $f(x) = x^2 + 4x$. For what $x$ is $f(f(x)) = f(x)$?

:::solution
$$\begin{aligned}
x^2 + 4x &= (x^2 + 4x)^2 + 4(x^2 + 4x)\\
x^2 + 4x &= x^4 + 8x^3 + 16x^2 + 4x^2 + 16x\\
0 &= x^4 + 8x^3 + 19x^2 + 12x \implies r_1 = 0.
\end{aligned}$$
Dividing out the root $0$:
$$\begin{array}{c|ccccc}
0 & 1 & 8 & 19 & 12 & 0\\
 & & 0 & 0 & 0 & 0\\ \hline
 & 1 & 8 & 19 & 12 & 0
\end{array}$$
which leaves $x^3 + 8x^2 + 19x + 12$. If the other roots are integers, $r_i \in -\{1, 2, 3, 4, 6, 12\}$. Plugging in $-1$: $(-1) + 8 - 19 + 12 = 0$, so $r_2 = -1$:
$$\begin{array}{c|cccc}
-1 & 1 & 8 & 19 & 12\\
 & & -1 & -7 & -12\\ \hline
 & 1 & 7 & 12 & 0
\end{array}$$
which leaves $x^2 + 7x + 12 = (x + 3)(x + 4)$. So $f(f(x)) = f(x)$ for $x = 0, -1, -3, -4$.
:::
:::
