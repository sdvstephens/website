---
course: integrated-maths
chapter: 9
section: 7
title: Polynomial Roots Part I
source-pages: 94-112, 115-119, 121-142, 147-149, 151-172, 180, 181-184
---

:::problem{7.1}
Let $f(x) = 6x^3 - tx^2 + 7x - 12$, where $t$ is a constant such that $f(x)$ is divisible by $x - 2$. Find $t$.

:::solution
$$f(2) = 6(2)^3 - t(2)^2 + 7(2) - 12 = 48 - 4t + 14 - 12 = 50 - 4t.$$
If $x - 2 \mid f(x)$, then $2$ is a root of $f(x)$, therefore $f(2) = 0$. So
$$0 = 50 - 4t \implies t = 12.5 = \tfrac{25}{2}.$$
:::
:::

:::problem{7.2}
Let $p(x) \in \RR[x]$. Show that $x - a \mid p(x) \implies p(a) = 0$. Then show that $p(a) = 0 \implies x - a \mid p(x)$.

:::solution
Obvious. Obvious.
:::
:::

:::problem{7.3}
$f(x) = x^4 + ax^3 + bx^2 + cx + d$ has roots $1, 3, 5, 7$. Find $a, b, c, d$.

:::solution
$$\begin{aligned}
f(x) &= (x-1)(x-3)(x-5)(x-7) \\
&= (x^2 - 4x + 3)(x^2 - 12x + 35) \qquad (\text{so } d = 3 \cdot 35 = 105) \\
&= x^4 - 16x^3 + 86x^2 - 176x + 105,
\end{aligned}$$
so $a = -16$, $b = 86$, $c = -176$, $d = 105$.

Unneeded, but the other way: $f(1) = f(3) = f(5) = f(7) = 0$, so
$$\begin{aligned}
f(1) &= 1 + a + b + c + d = 0 &&\leadsto a + b + c + d = -1, \\
f(3) &= 81 + 27a + 9b + 3c + d = 0 &&\leadsto 27a + 9b + 3c + d = -81 \quad (81 = 9^2), \\
f(5) &= 625 + 125a + 25b + 5c + d = 0 &&\leadsto 125a + 25b + 5c + d = -625 \quad (625 = 25^2), \\
f(7) &= 7^4 + 343a + 49b + 7c + d = 0 &&\leadsto 343a + 49b + 7c + d = -7^4 \quad (7^4 = 49^2).
\end{aligned}$$
Using $d = -1 - a - b - c$:
$$-81 = 27a + 9b + 3c + (-1 - a - b - c) \implies -80 = 26a + 8b + 2c \implies -40 = 13a + 4b + c.$$
So $c = -40 - 13a - 4b$, and then $d = -1 - a - b - c = 39 + 12a + 3b$, so
$$-625 = 125a + 25b - 200 - 65a - 20b + 39 + 12a + 3b \implies -464 = 72a + 8b \implies -58 = 9a + b,$$
and with $a = -16$: $-58 = 9(-16) + b$, so $b = 86$.

:::
:::

:::problem{7.4}
Let $g(x), f(x) \in \RR[x]$ with $\deg f, \deg g > 0$.

**(a)** If $g(x)$ is a factor of $f(x)$, then must every root of $g(x)$ also be a root of $f(x)$?

:::solution
Let $1 < \deg g < \deg f$ such that $g \mid f$. Now for the roots $r_i \in \CC$ of $g$ we have
$$g(x) = a_nx^n + \dots + a_0 = m(x - r_1)(x - r_2)\cdots(x - r_n).$$

So we substitute the factored form for $g(x)$:
$$\frac{f(x)}{g(x)} = q(x) + \frac{r(x)}{g(x)} \implies f(x) = q(x)\,m(x - r_1)\cdots(x - r_n) + r(x),$$
and by the remainder theorem we know that $f(a) = r(a)$ at a root $a$ of $g$. Note that if $\alpha_i$ is the $x$ for any $x - r_i = 0$, then
$$f(\alpha_i) = q(\alpha_i)\,m(\alpha_i - r_1)\cdots(0)\cdots(\alpha_i - r_n) + r(\alpha_i) = r(\alpha_i).$$
Ah! But for $g$ to divide $f$, $r(\alpha_i)$ must be $0$, thus $f(\alpha_i) = 0$ for all root solutions $\alpha_i$ to $g$. Thus every $\alpha_i$ is, by definition, a root of $f$.
:::

**(b)** If every root of $g(x)$ is a root of $f(x)$, then must $g \mid f$ evenly?

:::solution
Let $g(x) = (x-1)^2$ and $f(x) = x(x-1)$. Then every root of $g$ is a root of $f$, but
$$\frac{f(x)}{g(x)} = \frac{x}{x-1}$$
is not evenly divided.
:::
:::

:::problem{7.2}
Let $p(x)$ be a polynomial.

**(a)** Show that if $x - a$ is a factor of $p(x)$, then $p(a) = 0$.

:::solution
If $x - a$ is a factor of $p(x)$, then $x - a \mid p(x)$ such that $r(x) = 0$. By the remainder theorem, note
$$p(x)/(x-a) = q(x) + 0 \implies p(x) = q(x)(x - a) \implies p(a) = q(a)(a - a) = 0.$$
Thus $p(a) = 0$.
:::

**(b)** Show that if $p(a) = 0$, then $x - a$ is a factor of $p(x)$.

:::solution
Divide $p(x)$ by $g(x) = x - a$: $p(x) = q(x)g(x) + r(x)$, and since $g$ is linear, $r$ is of order $0$, i.e. a constant. If $p(a) = 0$, then by the remainder theorem
$$0 = p(a) = q(a)(a - a) + r = r,$$
so $r = 0$. Thus $x - a$ is a factor of $p(x)$.

:::
:::

:::problem{7.4}
Let $g(x), f(x) \in \RR[x]$ be of degree $> 0$.

**(a)** If $g(x)$ is a factor of $f(x)$, then must every root of $g(x)$ also be a root of $f(x)$?

:::solution
If $g \mid f$, then $r(x) = 0$, which by our previous proof means either $\deg g = 1$ or $\deg g > 1$. If $\deg g = 1$, then trivial. If $\deg g > 1$, then $q(a)g(a)$, where $a$ is any root of $g(x)$, always is $0$. Now if $(x - a) \mid g$ for any $a$, then $f(a) = 0$ for all such $a$:
$$f(a) = q(a)g(a) + r(a) = q(a) \cdot 0 + 0 = 0,$$
since by the remainder theorem $g \mid f \implies r = 0$.

:::
:::

:::theorem Factor Theorem
$$x - a \mid p(x) \iff p(a) = 0.$$
:::

:::proof
If $x - a \mid p(x)$, then $p(x) = (x - a)q(x)$, so $p(a) = 0$. If $a$ is a root of $p(x)$, then $p(a) = 0$; since by the remainder theorem the remainder of $p(x)/(x - a)$ is $p(a)$, but $p(a) = 0$, the remainder is $0$. Thus $x - a$ is a factor of $p(x)$.
:::

:::theorem
For all $p(x) \in \RR[x]$, $p(x) = a_nx^n + \dots + a_0$ with roots $r_i$, $i \in \{1, \dots, n\}$, we have
$$p(x) = a_n(x - r_1)\cdots(x - r_n).$$
:::

$(x-1)^3$ has roots $1$, $1$, and $1$ $\iff$ $1$ is a triple root of $(x-1)^3$ $\iff$ the root $1$ of $(x-1)^3$ has **multiplicity** $3$.

Back to Problem 7.4(a): if $g(x) \mid f(x)$, then $f(x) = g(x)q(x)$. Therefore if $r$ is a root of $g$, $f(r) = 0 \cdot q(r)$, so $f(r) = 0$, which by the factor theorem means $x - r \mid f(x)$. Thus all roots of $g(x)$ divide $f$.

:::remark
If $g(x)$ is a factor of $f(x)$, then for every root $r$ of $g(x)$, $x - r$ **must** divide $f(x)$. **But** if $x - r$ divides $f(x)$ for every root $r$ of $g(x)$, $g(x)$ does **not** necessarily divide $f(x)$.
:::

Observe: $g(x) = (x-1)^2$, $f(x) = x(x-1)$:
$$\frac{x(x-1)}{(x-1)^2} = \frac{x}{x-1}, \qquad \text{but} \qquad \frac{x(x-1)}{x-1} = x \quad \text{and} \quad \frac{x(x-1)}{x-1} = x.$$

:::problem{7.5}
Let $p(x) = 3x^4 + 5x^3 - 49x^2 + 11x + 30$ and note that $p(-2/3) = p(3) = 0$.

**(a)** Find two linear factors of $p(x)$. Divide $p(x)$ by one of these factors. Why are the roots of the quotient also roots of $p(x)$?

:::solution
Since $p(-2/3) = p(3) = 0$, $\left(x + \frac{2}{3}\right)$ and $(x - 3)$ are factors of $p(x)$. The roots of the quotient are the remaining roots of $p(x)$, since $\left(x + \frac{2}{3}\right)(x - 3)q(x) = p(x)$, and like we showed, if $q(x) \mid p(x)$, the roots of $q(x)$ divide $p(x)$. So!

NOTE: $\left(x + \frac{2}{3}\right) \cong (3x + 2)$.

Dividing by $(x - 3)$:
$$\begin{array}{r|rrrrr}
3 & 3 & 5 & -49 & 11 & 30 \\
  &   & 9 & 42 & -21 & -30 \\ \hline
  & 3 & 14 & -7 & -10 & 0
\end{array} \implies 3x^3 + 14x^2 - 7x - 10.$$

Dividing by $\left(x + \frac{2}{3}\right)$:
$$\begin{array}{r|rrrrr}
-\frac{2}{3} & 3 & 5 & -49 & 11 & 30 \\
  &   & -2 & -2 & 34 & -30 \\ \hline
  & 3 & 3 & -51 & 45 & 0
\end{array} \implies 3x^3 + 3x^2 - 51x + 45.$$

Then dividing that by $(x - 3)$:
$$\begin{array}{r|rrrr}
3 & 3 & 3 & -51 & 45 \\
  &   & 9 & 36 & -45 \\ \hline
  & 3 & 12 & -15 & 0
\end{array} \implies 3x^2 + 12x - 15,$$
and $3(x^2 + 4x - 5) = 0 \iff (x + 5)(x - 1) = 0$.

So
$$p(x) = 3(x - 3)\left(x + \tfrac{2}{3}\right)(x + 5)(x - 1).$$

Now to verify:
$$\boxed{(x + 5)(x - 1)(x - 3)(3x + 2)}$$
(the $3$ in $3x + 2$ comes from the $3$ in $3(x^2 + 4x - 5)$). The constant term: $(5)(-1) = -5$, $-5(-3) = 15$, $15(2) = 30$. And
$$(x^2 + 4x - 5)(3x^2 - 7x - 6) = 3x^4 + 5x^3 - 49x^2 + 11x + 30 \ \checkmark$$
since the $x^3$ coefficient is $-7 + 12 = 5$ and the $x^2$ coefficient is $-28 - 6 - 15 = -49$.
:::
:::

**Exercises**

:::exercise{7.1.1}
For what values of $a$ is $x + 2$ a factor of $x^4 - 2x^3 + ax^2 - ax + 7$?

:::solution
$$p(-2) = 16 + 16 + 4a + 2a + 7 \implies 6a = -39 \implies a = -\frac{39}{6} = -\frac{13}{2}.$$
$$\boxed{a = -\tfrac{13}{2}}$$
:::
:::

:::exercise{7.1.2}
How can we quickly tell that $x - 1$ is a factor of $x^5 + 6x^4 - 7x^3 + 2x - 2$ without using long $\RR[x]$ division?

:::solution
Plug in $1$: $1 + 6 - 7 + 2 - 2 = 0$. Since the result is $0$, $x - 1$ is a factor of $p(x)$ by the factor theorem.
:::
:::

:::exercise{7.1.3}
Let $f(x) = 6x^4 + 19x^3 - 36x^2 - 49x + 60$. One root is $-\frac{5}{3}$. Find all roots.

:::solution
$$\begin{array}{r|rrrrr}
-\frac{5}{3} & 6 & 19 & -36 & -49 & 60 \\
  &   & -10 & -15 & 85 & -60 \\ \hline
  & 6 & 9 & -51 & 36 & 0
\end{array} \implies f(x) = \left(x + \tfrac{5}{3}\right)(6x^3 + 9x^2 - 51x + 36)$$
$$\implies f(x) = 3\left(x + \tfrac{5}{3}\right)(2x^3 + 3x^2 - 17x + 12).$$

Try $x = \frac{3}{2}$ in the cubic:
$$2 \cdot \frac{27}{8} + 3 \cdot \frac{18}{8} - 17 \cdot \frac{12}{8} + 12 = \frac{2 \cdot 27 + 3 \cdot 18 - 17(12)}{8} + 12 = 0.$$
(On the side: $\frac{x}{2}(y)z = 12 \Rightarrow xyz = 24$.)

$$\begin{array}{r|rrrr}
\frac{3}{2} & 2 & 3 & -17 & 12 \\
  &   & 3 & 9 & -12 \\ \hline
  & 2 & 6 & -8 & 0
\end{array} \implies 2x^2 + 6x - 8 = 2(x^2 + 3x - 4) \to 2(x + 4)(x - 1).$$

So
$$f(x) = 6\left(x + \tfrac{5}{3}\right)(x + 4)\left(x - \tfrac{3}{2}\right)(x - 1),$$
and the roots are $-\frac{5}{3}, -4, \frac{3}{2}, 1$.

Check: $\left(x + \frac{5}{3}\right)(x + 4) = x^2 + \frac{5}{3}x + \frac{12}{3}x + \frac{20}{3}$, and times $6$ this is $6x^2 + 10x + 24x + 40 = 6x^2 + 34x + 40$. Also $(x - 1)\left(x - \frac{3}{2}\right) = x^2 - \frac{3}{2}x - \frac{2}{2}x + \frac{3}{2} = x^2 - \frac{5}{2}x + \frac{3}{2}$. Then
$$(6x^2 + 34x + 40)\left(x^2 - \tfrac{5}{2}x + \tfrac{3}{2}\right) = \left\{\begin{aligned}
&6x^4 - 15x^3 + 9x^2 \\
&\quad + 34x^3 - 85x^2 + 51x \\
&\quad + 40x^2 - 100x + 60
\end{aligned}\right\} = 6x^4 + 19x^3 - 36x^2 - 49x + 60 \ \checkmark$$
:::
:::

:::exercise{7.1.4}
Suppose $f(x)$ and $q(x)$ are polynomials such that $f(x) = (x - a)q(x)$. Must it be true that $f(x) = 0 \implies q(x) = 0$?

:::solution
If $f(x) = 0$, then
$$\begin{cases} q(x) = 0, \text{ done;} \\ \quad \text{or} \\ (x - a) = 0. \end{cases}$$
:::
:::

:::exercise{7.1.5}
$p(x) = 3x^3 - 20x^2 + kx + 12$ is divisible by $x - 3$ for some constant $k$. Factor $p(x)$.

:::solution
So $p(3) = 81 - 180 + 3k + 12 = 0 \implies 3k = 87 \implies k = 29$.
$$\begin{array}{r|rrrr}
3 & 3 & -20 & 29 & 12 \\
  &   & 9 & -33 & -12 \\ \hline
  & 3 & -11 & -4 & 0
\end{array} \implies 3x^2 - 11x - 4,$$
whose roots are
$$\frac{11 \pm \sqrt{121 + 16(3)}}{6} = \frac{11 \pm 13}{6} = 4, \ -\frac{1}{3}.$$
$$\boxed{\text{So: } (3x + 1)(x - 4)(x - 3)}: \quad x = -\tfrac{1}{3}, 4, 3.$$
:::
:::

:::problem{7.6}
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

:::problem{7.7}
Suppose $k$ is a root of $f(x) = a_nx^n + \dots + a_0$, where $k$ is a nonzero integer, and all the coefficients of $f(x)$ are integers. Why must $k \mid a_0$?

:::solution
Let $x - k \mid f(x)$, with $k, a_i \in \ZZ$, $k \neq 0$. Then
$$f(k) = 0 \implies a_0 = -(a_nk^n + a_{n-1}k^{n-1} + \dots + a_1k).$$
Ah, but that is
$$a_0 = -k(a_nk^{n-1} + a_{n-1}k^{n-2} + \dots + a_1) \implies \frac{a_0}{k} = -(a_nk^{n-1} + \dots + a_1),$$
in which the right side must be an integer, as a finite sum of integers. Thus $\frac{a_0}{k} = m \in \ZZ$, so $k \mid a_0$. $\checkmark$
:::
:::

:::problem{7.8}
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

So if $p(x) \in \RR[x]$ and $\sgn(p(a)) \neq \sgn(p(b))$, then there exists a root of $p(x)$ between $a$ and $b$.

:::problem{7.9}
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

:::problem{7.10}
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

:::problem{7.11}
Solve $x^3 + 5x^2 - 16x - 80 \le 0$.

:::solution
$80 = 2^4 \cdot 5 \implies \pm(1, 2, 4, 8, 16, 5, 10, 20, 40, 80)$ are the possible rational roots.

$(x^3 + 5x^2 - 16x) \le 80$. Given $-80 < 0$, and $xyz = 80$ for the roots $x, y, z$, either $2$ roots are negative and $1$ positive, or **all** roots are positive.

Let’s try $f(5) = 2(125) - 160 = 90$, and $-5$: $f(-5) = -125 + 125 + 80 - 80 = 0$. YAY!
$$\begin{array}{r|rrrr}
-5 & 1 & 5 & -16 & -80 \\
   &   & -5 & 0 & 80 \\ \hline
   & 1 & 0 & -16 & 0
\end{array} \qquad x^2 - 16 = (x + 4)(x - 4).$$
So $x^3 + 5x^2 - 16x - 80 = (x + 4)(x - 4)(x + 5)$.

| $x \in$ | $x - 4$ | $x + 4$ | $x + 5$ | $f(x)$ | |
|---|---|---|---|---|---|
| $> 4$ | $+$ | $+$ | $+$ | $+$ | |
| $(-4, 4)$ | $-$ | $+$ | $+$ | $-$ | $\to -4 < x < 4$ |
| $(-5, -4)$ | $-$ | $-$ | $+$ | $+$ | |
| $< -5$ | $-$ | $-$ | $-$ | $-$ | $\to x < -5$ |

$$x \in (-\infty, -5] \cup [-4, 4]. \ \checkmark$$
:::
:::

:::exercise{7.2.1}
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

:::exercise{7.2.2}
**(a)** $t^3 + 10t^2 + 17t > 28$

:::solution
$$\begin{array}{r|rrrr}
1 & 1 & 10 & 17 & -28 \\
  &   & 1 & 11 & 28 \\ \hline
  & 1 & 11 & 28 & 0
\end{array} \to t^2 + 11t + 28,$$
so the inequality is $(t - 1)(t + 7)(t + 4) > 0$.

| $t$ | $t - 1$ | $t + 7$ | $t + 4$ | $f(t)$ | |
|---|---|---|---|---|---|
| $> 1$ | $+$ | $+$ | $+$ | $+$ | $\checkmark$ |
| $-4 < t < 1$ | $-$ | $+$ | $+$ | $-$ | $\times$ |
| $-7 < t < -4$ | $-$ | $+$ | $-$ | $+$ | $\checkmark$ |
| $< -7$ | $-$ | $-$ | $-$ | $-$ | $\times$ |

$$t \in (-7, -4) \cup (1, \infty). \ \checkmark$$
:::

**(b)** $r^2(6r + 12 - r^2) \le 5(14r + 15)$

:::solution
$$\frac{r^2(6r + 12 - r^2)}{14r + 15} \le 5 \quad \hookrightarrow \quad \frac{6r^3 + 12r^2 - r^4}{14\left(r + \frac{15}{14}\right)} \le 5 \quad \to \quad 6r^3 + 12r^2 - r^4 - 5(14r + 15) \le 0,$$

where $-5(14r + 15) = -70r - 75$:
$$-r^4 + 6r^3 + 12r^2 - 70r - 75, \quad \text{so } r \in \pm\{1, 3, 5, 15, 25, 75\}.$$

$f(5) = 0$, so
$$\begin{array}{r|rrrrr}
5 & -1 & 6 & 12 & -70 & -75 \\
  &    & -5 & 5 & 85 & 75 \\ \hline
  & -1 & 1 & 17 & 15 & 0
\end{array} \implies -r^3 + r^2 + 17r + 15.$$
$f(-1) = 0$, so
$$\begin{array}{r|rrrr}
-1 & -1 & 1 & 17 & 15 \\
   &    & 1 & -2 & -15 \\ \hline
   & -1 & 2 & 15 & 0
\end{array} \implies -r^2 + 2r + 15 = -(r^2 - 2r - 15) \hookrightarrow -(r - 5)(r + 3).$$

$$f(r) = -(r - 5)^2(r + 1)(r + 3), \qquad \text{roots: } 5, 5, -1, -3.$$
Testing signs: between $-3$ and $-1$, $+$; below $-3$, $-$; at $6$, $-$. So
$$r \in (-\infty, -3] \cup [-1, \infty).$$
:::

**(c)** $r^4 + r^3 + 5r^2 - 13r - 18 \le 0$

:::solution
Possible roots: $\pm\{1, 2, 3, 6, 9, 18\}$. $f(2) = 0$, so
$$\begin{array}{r|rrrrr}
2 & 1 & 1 & 5 & -13 & -18 \\
  &   & 2 & 6 & 22 & 18 \\ \hline
  & 1 & 3 & 11 & 9 & 0
\end{array} \implies
\begin{array}{r|rrrr}
-1 & 1 & 3 & 11 & 9 \\
   &   & -1 & -2 & -9 \\ \hline
   & 1 & 2 & 9 & 0
\end{array}$$
and $r^2 + 2r + 9$ has roots
$$\frac{-2 \pm \sqrt{4 - 4(9)}}{2} \to \frac{-2 \pm 4\sqrt{2}\,i}{2} = -1 \pm 2\sqrt{2}\,i,$$
so
$$f(r) = (r - 2)(r + 1)\big(r - (-1 + 2\sqrt{2}\,i)\big)\big(r - (-1 - 2\sqrt{2}\,i)\big) \hookrightarrow r \in [-1, 2].$$

:::
:::

:::exercise{7.2.3}
$f(x) = x^4 - 8x^3 + 24x^2 - 32x + 16$. Note $f(2) = 0$. We can then check all the other divisors of $16$ besides $2$ and see that they aren’t roots of $f(x)$. Can we conclude that the other $3$ roots are not integers?

:::solution
$4$ roots: $+$, so $++++$ or $+-+-$. We know $+-$, not $++++$, so $+-+-$ maybe. Wait, no: the root $2 \in \ZZ$ can repeat, so we **cannot** conclude that. In fact $f(x) = (x - 2)^4$, and the other $3$ roots are all $2$.

:::
:::

:::remark
For a polynomial with all $a_i \in \ZZ$: if a root $r_j \nmid a_0$, then $r_j \notin \ZZ$.
:::

:::exercise{7.2.4}
Suppose $f(x) \in \RR[x]$ with all $a_i \in \ZZ$, $f(2) = 3$ and $f(7) = -5$. Show that $f(x)$ has no integer roots.

:::solution
So there exists $r \in (2, 7)$. Hm. So
$$a_0 = (-1)^n a_n r_1r_2r_3\cdots r_n.$$

$3, 4, 5, 6$.
$$\left.\begin{aligned} 2 &\mapsto \text{odd number} \\ 7 &\mapsto \text{odd number} \end{aligned}\right\} \text{ doesn't matter if even or odd input?}$$
:::
:::

:::problem{7.6}
$f(x) = x^3 - 5x^2 - 77x + 441$

:::solution
Suppose $n \in \ZZ$ such that $f(n) = 0$.
:::
:::

## 7.3 Rational Roots

:::problem{7.12}
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
So for $P(x) = a_nx^n + \dots + a_0$ (integer coefficients), if $r_i \in \QQ \setminus \ZZ$, then $r_i$ is of the form $\frac pq$ with $p, q \in \ZZ$ relatively prime, and $p \mid a_0$ and $q \mid a_n$.
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

:::solution Problem 7.12, continued
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

:::problem{7.14}
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

:::problem{7.15}
Find all $r$ such that $12r^4 - 16r^3 > 41r^2 - 69r + 18$.

:::solution
$$f(r) = 12r^4 - 16r^3 - 41r^2 + 69r - 18 > 0.$$
Let’s first find the roots ($f = 0$), trying integers first.

$a_0$: $\pm\{1, 2, 3, 6, 9, 18\}$; $a_n$: $\pm\{1, 2, 3, 4, 6, 12\}$.

$f(1)$: $12 + 69 = 81$ and $-(16 + 41 + 18) = -75$, so $f(1) \ne 0$. So $f(1) = +$ and $f(0) = -$, so $\exists\, r_i \in (0, 1)$.

Try $\frac12, \frac13, \frac14, \frac16$:
$$\begin{array}{r|rrrrr}
\tfrac13 & 12 & -16 & -41 & 69 & -18 \\
 & & 4 & -4 & -15 & 18 \\ \hline
 & 12 & -12 & -45 & 54 & 0
\end{array}$$
$$\left(x - \tfrac13\right)(12x^3 - 12x^2 - 45x + 54) = 3\left(x - \tfrac13\right)(4x^3 - 4x^2 - 15x + 18).$$

Candidates: $\pm\{1, 2, 4\}$ under $\pm\{1, 2, 3, 6, 9, 18\}$, i.e. $\frac14, \frac34, \frac32, \frac94, \frac92$:
$$\begin{array}{r|rrrr}
\tfrac32 & 4 & -4 & -15 & 18 \\
 & & 6 & 3 & -18 \\ \hline
 & 4 & 2 & -12 & 0
\end{array}$$
$$4x^2 + 2x - 12 \to 2(2x^2 + x - 6), \qquad x = \frac{-1 \pm 7}{4} \to \begin{cases} -\frac84 = -2, \\[2pt] \frac64 = \frac32. \end{cases}$$

So we need
$$12\left(x - \tfrac13\right)\left(x - \tfrac32\right)^2(x + 2) > 0.$$

Roots $\frac13$, $\frac32$, $-2$:

| interval | sign | |
|---|---|---|
| $-\infty < x < -2$ | $+$ | ✓ |
| $-2 < x < \frac13$ | $-$ | |
| $\frac13 < x < \frac32$ | $+$ | ✓ |
| $\frac32 < x < \infty$ | $+$ | ✓ |

$$x \in (-\infty, -2) \cup \left(\tfrac13, \tfrac32\right) \cup \left(\tfrac32, \infty\right).$$
:::
:::

## 7.4 Bounds

:::problem{7.16}
(a) Let $f(x) = x^3 + 13x^2 + 39x + 27$.

(b) Let $f(x) = 3x^3 - 28x^2 + 51x - 14$. Without finding any roots, how can we tell that $\nexists\, r_i \in \QQ_{<0}$?

:::solution
**(a)** At a root we know $a_nr^n + \dots + a_1r = -a_0$, so since all $a_i \in \NN$, $r_i \in \QQ_{<0}$. $\therefore \nexists\, r_i \in \QQ_{>0}$.

**(b)** $r_i \in \QQ_{<0} \implies 3(-)^3 - 28(-)^2 + 51(-)$ must be $+$ (it has to equal $14$), but look!
$$\underbrace{3r^3}_{\ominus}\ \underbrace{-\,28r^2}_{\ominus}\ \underbrace{+\,51r}_{\ominus} = \ominus.$$
$\therefore r_i$ cannot be negative.
:::
:::

:::problem{7.17}
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

:::problem{7.18}
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

:::problem{7.19}
Let $f(x) = (x - a)q_1(x) + r_1$.

(a) If $r_1 > 0$ and all coefficients of $q_1(x)$ are greater than zero, why must $f(x)$ have no roots greater than $a$?

(b) Why must $a$ be positive for this statement to hold?

:::solution
**(a)** Let $x > a$. Then $(x - a)$ is positive and each term of $q_1(x)$ is positive, so for all $x > a$, $f(x)$ is positive and nonzero. Thus no $x > a$ can be a zero, so there aren’t any roots $> a$.

**(b)** Take 2: if $a < 0$, write $a = -b$. Then $(x - a) = \big(x - (-b)\big) = (x + b)$, so $\sgn(x - a) = +1$ for all $x > a$; but $x$ can be negative, so $q_1(x)$ can be negative, while $r_1$ will be positive. $\therefore f(x)$ can be negative, positive, or zero (and thus a root). TL;DR: this doesn’t give us much useful info.
:::
:::

:::exercise{7.4.1}
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

:::exercise{7.4.2}
:::solution
$a_0 = -3$, $f(1) = 34$, $f(0) = -3$, $f\left(\frac13\right) = 0$. Since $\frac13$ is a root, $a_n = 3m$ with $m \in \ZZ$.

$$\underbrace{\qquad\cdots\qquad}_{\sgn(\text{terms}) = +1} + a_0, \qquad \sgn(a_0) = -1.$$

After synthetic division by $\frac13$, the bottom row starts $3m$, and the next product is $m$.

Consider:

![Sketch of the graph of f rising from f(0) = -3 below the x-axis, through the root at x = 1/3, up to f(1) = 34](/notes/integrated-maths/figures/s5-ex-7-4-2-sketch.svg)

$$\boxed{\text{NO}}$$
:::
:::

:::exercise{7.4.3}
:::solution
Suppose all $a_i \ge 0$, but the number of $a_{i_j} = 0$ is less than $n$, up to $a_n$ (i.e., there is at least one $a_i > 0$). Let $x$ be positive. Then each term is either $a_ix^i \in \RR_{>0}$ or $0$, and at least one of them is guaranteed to be positive. $\therefore f(x)$ is always positive for $x > 0$, $\therefore \nexists$ positive roots. Similarly for $a_i \le 0$.
:::
:::

:::exercise{7.4.4}
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

## 7.5 Graphing and the Fundamental Theorem of Algebra

:::problem{7.20}
Let $f(x)$ be a polynomial of degree $n > 0$. Show that the graphs of $y = c$ and $y = f(x)$ cannot intersect at more than $n$ points.

:::solution
Given that the polynomial is of degree $n$, we can factor it into $(x - r_1)\cdots(x - r_n) \Rightarrow \exists\ n$ total zeros.

For $y = c$, either $f(m) > c$, $f(m) < c$, or $f(m) = c$.

If $f(m_1) > c$, then for $f(m_2)$ to become less than $c$ at some point, it must cross $c$. $\therefore \exists$ a point such that $f(x) = c$. So $f(x) - c = 0$, and since $c$ is constant, $\therefore \deg\big(f(x) - c\big) = \deg\big(f(x)\big) = n$.
:::
:::

:::problem{7.21}
:::solution
It means $P(x)$ is of degree $\ge 2$, not necessarily that $\deg P(x) = 2$.
:::
:::

:::problem{7.22}
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

:::exercise{7.5.1}
:::solution
$$f(x) = 0.2(x - 3)(x + 2)(x + 3)$$
At $f(1) = 0.2(-2)(3)(4)$ and $f(0) = 0.2(-3)(2)(3)$ (unneeded).

![Graph of f(x) = 0.2(x-3)(x+2)(x+3), crossing the x-axis at -3, -2 and 3, with f(0) = -3.6 and f(1) = -4.8 marked](/notes/integrated-maths/figures/s5-ex-7-5-1-graph.svg)

Yay!
:::
:::

:::exercise{7.5.2}
(a) $x^4 - 8x^2 + 16 = 0$

:::solution
**(a)** Clearly a root is $2$, and another is $-2$, since $2^4 - 2^5 = 2^4(1 - 2) = 16(-1) = -16$. So
$$\begin{array}{r|rrrrr}
2 & 1 & 0 & -8 & 0 & 16 \\
 & & 2 & 4 & -8 & -16 \\ \hline
 & 1 & 2 & -4 & -8 & 0
\end{array}
\qquad
\begin{array}{r|rrrr}
-2 & 1 & 2 & -4 & -8 \\
 & & -2 & 0 & 8 \\ \hline
 & 1 & 0 & -4 & 0
\end{array}$$
$$\implies (x + 2)(x - 2)(x^2 - 4) \implies (x + 2)^2(x - 2)^2.$$

Only factors are $\{1, 2, 16\}$.

:::
:::

## 7.6 Algebraic Applications of the Fundamental Theorem

:::problem{7.24}
Suppose $f(x)$ is a polynomial such that $f(x) = a_nx^n + \cdots + a_0$ and there are at least $n+1$ different values of $x$ for which $f(x) = 0$.

**(a)** If $a_n \neq 0$, then what does the Fundamental Theorem of Algebra (FTA) tell us about the number of different values of $x$ for which $f(x) = 0$?

:::solution
**(a)** FTA tells us there exists a max of $n$ roots for a polynomial of degree $n$, but this contradicts our premise. Thus our premise cannot be.

**(b)** If there are $n+1$ different values for which $f(x) = 0$, then $f(x)$ sends all $x$ to zero, so the function is $f(x) = 0$.
:::
:::

:::problem{7.25}
Let $f(x)$ be of degree $2$ with $f(2) = 4$, $f(3) = 9$ and $f(4) = 16$.

**(a)** Let $g(x) = f(x) - x^2$. What is the max degree of $g$?

:::solution
**(a)** The max is $2$, if $f(x)$ has $a_n \neq 1$.

**(b)** We have
$$g(2) = 4 - 2^2 = 4 - 4 = 0,\qquad g(3) = 9 - 9 = 0,\qquad g(4) = 16 - 16 = 0.$$
So we have $3$ values of $x$ for which $g(x) = 0$, but $g(x)$ has max degree $2$, so $g(x)$ must be the zero function. Thus $0 = f(x) - x^2$, so $x^2 = f(x)$.
:::
:::

:::problem{7.26}
Let $p_1(x)$ and $p_2(x)$ be in $\RR[x]$ with degree at most $n$. Show that if $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then $p_1(x) = p_2(x)$ for all $x$.

:::solution
Consider $P(x) = p_1(x) - p_2(x)$. Each $p_i(x)$ has degree at most $n$, so $P(x)$ is of degree at most $n$. So $P(x)$ has a max of $n$ roots. So if $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then for $n+1$ distinct values of $x$ we have $p_1(x) - p_2(x) = 0$. But $p_1(x) - p_2(x) = P(x)$, which can be $0$ at most $n$ times, which is a contradiction. So $P(x)$ must be the zero function. If $P(x)$ is the zero function then $P(x) = 0$ for all $x$, so for all $x$,
$$0 = p_1(x) - p_2(x) \implies p_1(x) = p_2(x). \qquad\blacksquare$$
:::
:::

:::problem{7.27}
**(a)** Consider the system of equations:
$$\begin{aligned}
&\text{(EQ1)} & a_1 + 8a_2 + 27a_3 + 64a_4 &= 1\\
&\text{(EQ2)} & 8a_1 + 27a_2 + 64a_3 + 125a_4 &= 27\\
&\text{(EQ3)} & 27a_1 + 64a_2 + 125a_3 + 216a_4 &= 125\\
&\text{(EQ4)} & 64a_1 + 125a_2 + 216a_3 + 343a_4 &= 343.
\end{aligned}$$
These equations determine $a_1, a_2, a_3, a_4$. Show that
$$a_1m^3 + a_2(m+1)^3 + a_3(m+2)^3 + a_4(m+3)^3 = (2m-1)^3 \quad \text{for all } m.$$
Additionally, prove that $a_1 + a_2 + a_3 + a_4 = 8$ and $64a_1 + 27a_2 + 8a_3 + a_4 = 729$.

:::solution
Let $A(m) = \alpha_1(m) - \alpha_2(m)$, where
$$\alpha_1(m) = a_1m^3 + a_2(m+1)^3 + \cdots + a_4(m+3)^3 \quad\text{and}\quad \alpha_2(m) = (2m-1)^3.$$
We show $A(m)$ is the zero function. See that $(2m-1)^3 = 1, 27, 125, 343$ for the values $m = 1, 2, 3, 4$, respectively.

Note that $A(m)$ is at most degree $3$, since $\deg(\alpha_2(m)) = 3 = \deg(\alpha_1(m))$. Then there are at most $3$ values for which $\alpha_2(m) = \alpha_1(m)$. Ah! But consider $m = 1, 2, 3, 4$. (EQ1), (EQ2), (EQ3), (EQ4) give these values for $\alpha_1(m)$, but we just saw that $\alpha_2(m)$ also equals $1, 27, 125, 343$ for $m = 1, 2, 3, 4$. Thus the only explanation is that $A(m)$ is the zero function, since $A(1) = 0$, $A(2) = 0$, $A(3) = 0$ and $A(4) = 0$. Thus $0 = \alpha_1(m) - \alpha_2(m)$ for all $m$, so
$$\alpha_1(m) = \alpha_2(m) \quad \text{for all } m.$$

For the second part, we let $(2m-1)^3 = 8$, so $2m - 1 = 2$, so $2m = 3$, so $m = \frac32$. Then
$$\begin{aligned}
\alpha_1\!\left(\tfrac32\right) &= a_1\left(\tfrac32\right)^3 + a_2\left(\tfrac32 + \tfrac22\right)^3 + a_3\left(\tfrac32 + \tfrac42\right)^3 + a_4\left(\tfrac32 + \tfrac62\right)^3\\
&= a_1\frac{27}{8} + a_2\frac{125}{8} + a_3\frac{343}{8} + a_4\frac{729}{8}\\
&= \frac18\left(27a_1 + 125a_2 + 343a_3 + 729a_4\right).
\end{aligned}$$

Scratch: other values of $m$ give other relations. With $(m-1)^3 = m^3 - 3m^2 + 3m - 1$:
$$\begin{aligned}
m = 0:&\quad a_2 + 8a_3 + 27a_4 = -1,\\
m = -1:&\quad -a_1 + a_3 + 8a_4 = -27,
\end{aligned}$$
and $8 \cdot \text{(EQ1)}$ reads $8a_1 + 8(8)a_2 + (8)(27)a_3 + (8)(64)a_4 = 8$.

**Take 2.**

**WTS:** $a_1 + a_2 + a_3 + a_4 = 8$ AND $64a_1 + 27a_2 + 8a_3 + a_4 = 729$.

**What we know:**
$$a_1m^3 + a_2(m+1)^3 + a_3(m+2)^3 + a_4(m+3)^3 = (2m-1)^3 = 8m^3 - 12m^2 + 6m - 1.$$

Expanding the left side,
$$a_1m^3 + a_2(m^3 + 3m^2 + 3m + 1) + a_3(m^3 + 6m^2 + 12m + 8) + a_4(m^3 + 9m^2 + 27m + 27)$$

$$= (a_1 + a_2 + a_3 + a_4)m^3 + (3a_2 + 6a_3 + 9a_4)m^2 + (3a_2 + 12a_3 + 27a_4)m + (a_2 + 8a_3 + 27a_4).$$

Comparing the $m^3$ terms, $(a_1 + a_2 + a_3 + a_4)m^3 = 8m^3$, so $a_1 + \cdots + a_4 = 8$.

For the second identity: $m = -4$.

:::
:::

:::problem{7.28}
There exists a unique $P(x) \in \RR[x]$ with $P(x) = 7x^7 + c_1x^6 + c_2x^5 + \cdots + c_7$, where $c_i \in \RR$, such that $P(1) = 1$, $P(2) = 2$, $\ldots$, $P(7) = 7$. What is $P(0)$?

:::solution
Consider the function that results from the difference between $P(x)$ and $x$. The roots of such a function are clearly $1$ through $7$. So for $P(x) - x = \mcP(x)$ we have
$$a(x-1)(x-2)\cdots(x-7) = P(x) - x,$$
where $a \in \RR$. Given that $a(x^7 \pm \cdots) = 7x^7 + \cdots + c_7 - x$, we see that $a$ must be $7$. So our polynomial is
$$P(x) = 7(x-1)\cdots(x-7) + x.$$
For $P(0)$ it is immediately clear that $c_7$ will be the only surviving term, so
$$P(0) = 7(-1)(-2)(-3)\cdots(-7) = -7(7!) = -35280.$$
:::
:::

:::problem{7.29}
Let $g(x), f(x) \in \RR[x]$. In 7.4 we showed that $g(x)$ is not necessarily a factor of $f(x)$ if every root of $g(x)$ is a root of $f(x)$ (we did this by counterexample: $g(x) = (x-1)^2$ but $f(x) = x(x-1)$). What if $g(x)$ was restricted to not have any multiple roots? Must $g(x)$ then be a factor of $f(x)$?

:::solution
*First attempt.* We can represent this with a function (we essentially ask if the image of $g$ is necessarily in $f$ for some function $h$). Let $h(x) := f(x) - g(x)$. If $f = g$, it’s trivial. If $f \neq g$, then $f(r_i) = g(r_i) \iff 0 = 0$, since every root $r_i$ of $g$ is a root of $f$. So, given that $g$ has no multiple roots, we have
$$h(x) = g(x)\left(\frac{f(x)}{g(x)} - 1\right).$$
Given that $h(x)$ is a polynomial, it’s obviously bijective.

![Two mapping diagrams. Top: g has distinct linear factors (x minus r1) through (x minus rn), each sent by f to a matching factor of f, and h is labelled bijective. Bottom: g has a repeated factor (x minus r1) squared, and both copies are sent to the single factor (x minus r1) of f](/notes/integrated-maths/figures/s6-root-correspondence.svg)

Scratch: $f - g = g\left(\frac{f}{g} - 1\right)$. Trying examples:
$$\begin{aligned}
(x-1)(x-2) - (x-1) &= (x-1)\big((x-2) - 1\big) = (x-1)(x-3),\\
(x-1)(x-2) - (x-1)^2 &= (x-1)\big((x-2) - (x-1)\big) = (x-1)(x - x - 2 + 1) = (x-1)(-1) = -(x-1) = 1 - x,\\
x(x-1) - (x-1)^2 &= (x-1)\big(x - (x-1)\big) = (x-1)(1).
\end{aligned}$$

*Second attempt.* If, in $\frac{f}{g}$, $g$ has no multiple roots, then there exists a one-to-one correspondence between each root of $g$ and a root of $f$, so $g$ evenly divides $f$, so $g$ is a factor of $f$.

*Third attempt.* Write $f = qg + r$ with $r = 0$ or $\deg r < \deg g$.

Let $\deg g = n$, so that it has $n$ roots. Let those roots be given by $s_i$. Since $g(s_i) = 0$ for each $i$ with $1 \le i \le n$, we have
$$f(s_i) = q(s_i)g(s_i) + r(s_i) = q(s_i)(0) + r(s_i) = r(s_i) \quad\text{for } 1 \le i \le n.$$
But $f(s_i) = 0$, so $r(s_i) = 0$. So $r(s_i) = 0$ for all $1 \le i \le n$, which means $r(x)$ has at least $n$ roots, since each $s_i$ is distinct. Ah! But $\deg r < \deg g$ if $r \neq 0$, so $r(x)$ must be zero for all $x$, so
$$g(x) \mid f(x).$$
:::
:::

:::exercise{7.6.1}
**(a)** Show that if $f \in \RR[x]$ is of degree $4$ with $f(0) = f(1) = f(2) = f(3) = 1$ and $f(4) = 0$, then $f(5)$ must be $-4$.

:::solution
$f(0) = 1 \iff a_0 = 1$; $f(4) = 0 \iff f(x) = a(x-4)(x-r_2)(x-r_3)(x-r_4)$.

:::
:::

:::exercise{7.6.5}
Let $P(x) \in \RR[x]$ with $\deg(P(x)) = 1996$. If $P(n) = \frac1n$ for $n = 1, 2, \ldots, 1997$, compute $P(1998)$.
:::

## Review Page: Polynomials I

:::theorem The Factor Theorem
For $p(x) \in \RR[x]$, $x - a \mid p(x)$ iff $p(a) = 0$.
:::

:::theorem Fundamental Theorem of Algebra
Every one-variable polynomial of degree $n$ has at most $n$ roots in $\RR$ and *exactly* $n$ roots in $\CC$, counted with multiplicity.
:::

:::theorem Rational Root Theorem
Given $f(x) = a_nx^n + \cdots + a_0 \in \ZZ[x]$, if $p$ and $q$ are relatively prime integers and $f\!\left(\frac pq\right) = 0$, then $p \mid a_0$ and $q \mid a_n$.
:::

:::note Trick!
If $f(x)$ is a polynomial and $a, b \in \RR$ such that $\sgn(f(a)) \neq \sgn(f(b))$, then there exists a root $r_i$ of $f(x)$ between $a$ and $b$.
:::

:::note Trick!
If there is no $a_0$ in our polynomial, then $0$ is a root of said polynomial.
:::

:::theorem The Identity Theorem
If $p_1(x)$ and $p_2(x)$ are polynomials of at most degree $n$ and $p_1(x) = p_2(x)$ for $n+1$ distinct values of $x$, then $p_1(x) = p_2(x)$ for all $x$.
:::

:::note Trick!!
If $f(x)$ is a polynomial of degree at most $n$ and there are $n+1$ different values for which $f(x) = 0$, then $f(x)$ is the zero polynomial, i.e.
$$f(x) = 0 \ \ \forall x \iff a_n = a_{n-1} = \cdots = a_0 = 0.$$
:::

:::note Trick!!
If $f(x)$ is an unknown polynomial of degree $n$ and you know $n$ values that can be modeled as a function $g(x)$ (e.g. $\frac1n, 1, 5, n^2, n^2 + 2n + 1, \ldots$), then you can construct a new function $h(x) := f(x) - g(x)$, where $h(x)$ can be manipulated to produce a polynomial that can give you $f(x)$.
:::

**Tips:**

1. Factor, factor, factor!
2. Start your rational root hunt with $-1, 0, 1$.
3. Try the same strats in different ways.
4. Example $\to$ general for proofs.

## Review Problems

:::example
Let $p(x) = x^3 + 2kx^2 + k^2x + k - 4$. For which $k$ is $2$ a root?

:::solution
Synthetic division by $2$:
$$\begin{array}{c|cccc}
2 & 1 & 2k & k^2 & k-4\\
 & & 2 & 2(2+2k) & 8(1+k) + 2k^2\\ \hline
 & 1 & 2+2k & 4(1+k) + k^2 & 0
\end{array}$$
For the remainder to be $0$ we need $(k - 4) + 2k^2 + 8(1+k) = 0$, so $2k^2 + 8k + 8 = -(k - 4)$, so
$$2k^2 + 9k + 4 = 0 \implies k = \frac{-9 \pm \sqrt{9^2 - 4(2)(4)}}{4} = \frac{-9 \pm 7}{4} = -\frac12 \text{ or } -4.$$

Directly, $p(2) = 8 + 2(4)k + k^2(2) + k - 4 = 4 + 9k + 2k^2 = (2k + 1)(k + 4)$, so
$$k = -\frac12,\ -4.$$
:::
:::

:::example
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

:::example
Let $p(x) = 2x^3 - x^2 - 5x + 3$.
:::solution
Note $p(0) = 3$ and $p(1) = -1$, so there is a root between $0$ and $1$. But $p\left(\tfrac12\right) = \tfrac12$, thus the root is irrational.
:::
:::

:::example
Let $f(x)$ be a quadratic polynomial with integer coefficients and integer roots.

(a) If $a_0 = 6$, can $3$ be a root of $f(x)$?

(b) If $a_0 = 6$, can $3$ be a double root of $f(x)$?
:::solution
(a) Yes, since $3 \mid 6$.

(b) No. By Vieta’s (for monic $f$), $a_0 = r_1r_2$, and if $r_1 = r_2 = 3$ then $a_0 = 9$, so this cannot be.

Furthermore, the roots are unique and there exist at most TWO roots in $\RR$ by the FTA, and we know both are in $\ZZ \subset \RR$; so since $6 = 3r_2$, we get $r_2 = 2$, which pins down the polynomial.

If $a_n \in \QQ$, however, $a_n = \tfrac23$ would give a double root of $3$. But here $a_i \in \ZZ$.
:::
:::

:::problem{7.35}
:::solution
Because $a_i \in \RR\setminus\ZZ$ for all $i$ with $i \neq 0, n$, there exists $r_i \in \QQ$ such that $p, q$ in $p/q$ ($q \neq 0$) are relatively prime.
:::
:::

:::problem{7.37}
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

:::example
$r = \sqrt2 + \sqrt3$ is a root of $x^4 - 10x^2 + 1 = 0$.
:::solution
So try $1$: $f(1) = 1 - 10 + 1 = -8$ ✗. Also $f(-1) = 1 - 10 + 1 = -8$ and $f(0) = 1$. So there is a root $r_i \in (0, 1)$ and another between $-1$ and $0$.

For $\sqrt2 + \sqrt3$: let $z = x^2$, so $z^2 - 10z + 1 = 0$, which gives
$$z = \frac{10 \pm \sqrt{100 - 4}}{2} = \frac{10 \pm \sqrt{2^5\cdot 3}}{2} = 5 \pm 2\sqrt6.$$
So those are the two roots for $z = x^2$:
$$\bigl(x^2 - (5 + 2\sqrt6)\bigr)\bigl(x^2 - (5 - 2\sqrt6)\bigr),$$
and the first factor gives
$$x = \pm\frac{\sqrt{20 + 8\sqrt6}}{2} = \pm\frac{2\sqrt{5 + 2\sqrt6}}{2} = \pm\sqrt{5 + 2\sqrt6}.$$
(Side scratch: the quadratic formula $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$; $b^2 = 20$, $\sqrt{20} = 2\sqrt5$.)
:::
:::
