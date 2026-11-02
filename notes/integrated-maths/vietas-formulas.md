---
course: integrated-maths
chapter: 10
section: 10.14
title: Vieta’s Formulas
---

Multiplying out $a_n(x - r_1)(x - r_2)\cdots(x - r_n)$ and comparing coefficients ties the coefficients of a polynomial to sums and products of its roots.

:::problem
Let $f(x) = x^3 - 4x^2 + 15x - 7$, and let $p, q, r$ be the roots of $f(x)$.

(a) Why must $f(x) = (x - p)(x - q)(x - r)$?
:::solution
(a) Since $\deg f = 3$, there are $3$ factors, so each of $(x - p)$, $(x - q)$, $(x - r)$ divides $f(x)$ with no remainder.

Expanding, $(x - p)(x - q)(x - r) = x^3 - (p + q + r)x^2 + (pr + qr + pq)x - rpq$, and $f(x) = x^3 - 4x^2 + 15x - 7$, so
$$p + q + r = 4, \qquad pr + qr + pq = 15, \qquad 7 = rpq.$$
:::
:::

:::problem
:::solution
$f(x) = c(x - p)(x - q)(x - r)$, with roots $p, q, r$:
$$f(x) = cx^3 - c(p + q + r)x^2 + (pr + qr + pq)cx - rpqc.$$
So for $f(x) = a_3x^3 + a_2x^2 + a_1x + a_0$,
$$a_3 = c, \qquad a_2 = -cp - cq - cr, \qquad a_1 = cpr + cpq + cqr, \qquad a_0 = -rpqc.$$
Therefore, since $a_2 = -c(p + q + r)$ and $a_3 = c$, we have $a_2 = -a_3(p + q + r)$, so $-\frac{a_2}{a_3} = p + q + r$. Therefore the sum of the roots for $n = 3$ is $-\frac{a_2}{a_3}$.

We consider $f(x) = a_nx^n + \cdots + a_1x + a_0$ factored as $a_n(x - r_1)(x - r_2)\cdots(x - r_n)$:
$$\frac{a_0}{a_n} = (-1)^n\prod_{i=1}^{n} r_i \implies a_0 = (-1)^n a_n\prod r_i, \qquad \frac{a_{n-1}}{a_n} = -\sum_{i=1}^{n} r_i \implies a_{n-1} = -a_n\sum r_i.$$

Multiplying the cubic by one more factor $(x - s)$:
$$\bigl(cx^3 - (p + q + r)cx^2 + (pr + pq + qr)cx - prqc\bigr)(x - s)$$
$$\begin{aligned}
&= cx^4 - cx^3s\\
&\quad - (p + q + r)cx^3 + (p + q + r)csx^2\\
&\quad + (pr + pq + qr)cx^2 - (pr + pq + qr)csx\\
&\quad - prqcx + prqcs\\
&= cx^4 - c(p + q + r + s)x^3 + c(ps + qs + rs + pr + pq + qr)x^2\\
&\quad - c(prs + pqs + qrs + prq)x + cprqs.
\end{aligned}$$
The numbers of terms in the coefficients are $\binom40 = 1$, $\binom41 = 4$, $\binom42 = \frac{4!}{2!\,(4-2)!} = 6$, $\binom43 = 4$, $\binom44 = 1$.

Now: $a_0 = -cpqr$, so $-\frac{a_0}{a_3} = pqr$. Finally, $a_1 = c(pq + pr + rq)$, so $\frac{a_1}{a_3} = pq + pr + rq$.
:::
:::

:::problem
Let $p, q, r, s$ be the roots of $3x^4 + 2x^3 - 7x^2 + 9x - 10$. Find $pqr + pqs + prs + qrs$.
:::solution
Possible rational roots: $\pm\left\{1, 2, 5, 10, \tfrac13, \tfrac23, \tfrac53, \tfrac{10}{3}\right\}$, and then synthetic division, etc.

$3(pqrs) = -10$ and $-3(pqr + pqs + prs + qrs) = 9$, therefore
$$pqr + pqs + prs + qrs = -3. \;\checkmark$$

:::
:::

:::problem
Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$, and let the roots be $r_1, r_2, \ldots, r_n$.
:::solution
So $f(x) = a_n(x - r_1)\cdots(x - r_n)$, which begins
$$a_nx^n - a_n(r_1 + r_2 + \cdots + r_n)x^{n-1} + \cdots,$$
where $-a_n(r_1 + r_2 + \cdots + r_n) = a_{n-1}$ (a sum of $\binom n1 = n$ terms), and next comes $a_n\sum_{i<j} r_ir_j$.

So, next: $a_n(x^{n-1}r_n) + (r_1 + \cdots + r_{n-1})a_nx^{n-1}$ gives the $a_{n-1}x^{n-1}$ term. So apply the same to $n - 2$:
$$a_n(r_1 + \cdots + r_{n-1})(r_nx^{n-2}) + a_n(r_1r_2 + r_1r_3 + r_1r_4 + \cdots + \text{combinations} + r_1r_{n-1} + \cdots + r_{n-2}r_{n-1})x^{n-2},$$
so it’s $a_n\left(\sum_{i<j}^{\binom n2} r_ir_j\right)$? Then $a_n\sum_{i<j<k}^{\binom n3} r_ir_jr_k$, and so on, up to $\sum^{\binom{n}{n-1}} a_n\prod_{i=1}^{n-1} r_i$.

In general (with $n = \deg f$, and $m = i$ in $\binom nm$):
$$f(x) = \sum_{i=0}^{n}\left((-1)^{n-i}\sum^{\binom{n}{n-i}} a_n\prod_{j=1}^{n-i} r_j\right)x^i,$$
where the inner sum runs over the $\binom{n}{n-i}$ ways of choosing $n - i$ of the roots.

Check: $a_n = a_n$ ✓, and
$$-\frac{a_{n-1}}{a_n} = r_1 + r_2 + \cdots + r_n, \qquad \frac{a_{n-2}}{a_n} = r_1r_2 + r_1r_3 + \cdots + r_2r_3 + r_2r_4 + \cdots + r_{n-1}r_n.$$
:::
:::

:::definition
**Elementary symmetric polynomials**, or **symmetric sums**, are the sums of all products, represented by $s_k$, for a set of variables $\{x_1, \ldots, x_n\}$, where the sum is of all products of the $x_i$ taken $k$ at a time:

- for $n = 2$: $s_1 = x_1 + x_2$, $s_2 = x_1x_2$;
- for $n = 3$: $s_1 = x_1 + x_2 + x_3$, $s_2 = x_1x_2 + x_1x_3 + x_2x_3$, $s_3 = x_1x_2x_3$;

and so on.
:::

:::theorem Vieta’s Formulas
For $p(x) \in \RR[x]$ of degree $n$ with roots $r_i$:
$$\begin{aligned}
s_1 &= r_1 + r_2 + \cdots + r_n = -\frac{a_{n-1}}{a_n}\\
s_2 &= r_1r_2 + r_1r_3 + \cdots + r_{n-1}r_n = \frac{a_{n-2}}{a_n}\\
&\;\;\vdots\\
s_n &= r_1r_2\cdots r_{n-1}r_n = (-1)^n\frac{a_0}{a_n},
\end{aligned}$$
where each $s_k$ is the symmetric sum of the roots of $p(x)$ taken $k$ at a time.
:::

:::proof
For every choice of $k$ of the $r_i$, taking $x$ from the other $n - k$ binomial factors of the polynomial, we form $(-1)^ka_ns_kx^{n-k}$, where $s_k$ is the sum of the roots taken $k$ at a time, which has $\binom{n}{n-k}$ terms. Expanded:
$$f(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$$
$$\implies f(x) = a_n(x - r_1)(x - r_2)\cdots(x - r_n)$$
$$\implies f(x) = a_nx^n - a_ns_1x^{n-1} + a_ns_2x^{n-2} + \cdots + (-1)^ka_ns_kx^{n-k} + \cdots + (-1)^{n-1}a_ns_{n-1}x + (-1)^na_ns_n.$$
(Technically the first term is $a_ns_0x^n$, but $\binom nn = 1$.) Comparing coefficients gives the formulas.
:::

:::remark Why “symmetric”?
Why do we call multivariate symmetric sums symmetric? Well:
$$ab + bc + ac = ac + ab + bc = \cdots = cb + ca + ba,$$
so we can swap their positions. So if $x_{\pi(i)} = y_i$ is any permutation of $y$ (with $\pi$ giving $x$), then
$$f(x_1, x_2, \ldots, x_n) = f(y_1, y_2, \ldots, y_n).$$
The elementary symmetric polynomials $s_1, s_2, \ldots$ build (full) symmetric polynomials!
$$f(x, r_1, r_2, \ldots, r_n) = a_nx^n - a_ns_1x^{n-1} + \cdots$$
:::

:::remark Counting the terms
For each term of a polynomial:
$$\binom nm = \frac{n!}{m!\,(n-m)!}.$$
Compare $n! = (n)(n-1)(n-2)\cdots(2)(1)$ and $\frac{n!}{(n-k)!}$.

Filling $2$ slots from $a, b, c$: $ab$, $ac$, $bc$. Filling $2$ slots from $a, b, c, d$: $ab$, $ac$, $ad$, $bc$, $bd$, $cd$.

Alongside: $\frac{3x}{yz} = 3 \Rightarrow 3x = 3yz \Rightarrow x = yz$, and $\frac{4x}{yz} = 6 \Rightarrow 4x = 6yz \Rightarrow x = \frac32 yz$.
:::

:::example
Let $r, s, t$ be the roots of $3x^3 - 4x^2 + 5x + 7 = 0$.

(a) What is $r + s + t$?

(b) What is $r^2 + s^2 + t^2$?

(c) What is $\frac1r + \frac1s + \frac1t$?
:::solution
(a) $r + s + t = \frac43$.

(b) $(r + s + t)(r + s + t) = r^2 + rs + rt + rs + s^2 + st + rt + st + t^2 = r^2 + s^2 + t^2 + 2(rs + rt + st)$, so
$$r^2 + s^2 + t^2 = \left(\frac43\right)^2 - 2\left(\frac53\right) = \frac{16}{9} - \frac{30}{9} = -\frac{14}{9}.$$

(c)
$$\frac1r + \frac1s + \frac1t = \frac{st + tr + sr}{rst} = \frac{5/3}{-7/3} = -\frac57.$$
:::
:::

:::problem
Evaluate $(2 - r)(2 - s)(2 - t)$ if $r, s, t$ are the roots of $f(x) = 2x^3 - 4x^2 + 3x - 9$.
:::solution
Is that not just $f(2)$?

$rst = \frac92$, $r + s + t = 2$, $rs + rt + st = \frac32$.

$16 - 16 + 6 - 9 = -3 \to -\frac32$.
:::
:::solution Try again!
With $f(x) = 2x^3 - 4x^2 + 3x - 9$:
$$(2 - r)(2 - s)(2 - t) = \bigl(4 - 2(r + s) + rs\bigr)(2 - t) = 8 - 4(r + s + t) + 2(rt + st + rs) - rst,$$
$$8 - 4\left(-\frac{-4}{2}\right) + 2\left(\frac32\right) - \frac92 = 3 - \frac92 = \frac62 - \frac92 = \boxed{-\frac32} \;\checkmark$$
**OR**
$$2(x - r)(x - s)(x - t) = f(x),$$
so $2(2 - r)(2 - s)(2 - t) = f(2) = -3$, so
$$(2 - r)(2 - s)(2 - t) = \boxed{-\frac32} \;\checkmark$$
:::
:::

:::problem
$f(x) = x^4 + 6x^3 + ax^2 - 54x + c$ has roots $r_i \in \RR$ such that $r_1 + r_2 = 0$ and $r_4 - r_3 = 4$. Find $a$ and $c$.
:::solution
$r_1 + r_2 = 0$, $r_4 - r_3 = 4$, $f(x) = x^4 + 6x^3 + ax^2 - 54x + c$.

$r_1 + r_2 + r_3 + r_4 = -6$, $2r_4 = -2$, $r_4 = -1$, $r_3 = -5$, so $r_1 + r_2 - 5 - 1 = -6$.

$r_1 = -r_2$, and $\binom43 = 4$, so
$$r_1r_2r_3 + r_1r_3r_4 + r_3r_2r_4 + r_1r_2r_4 = 54.$$
So
$$(-r_2)(r_2)(-5) + (-r_2)(-5)(-1) + (-5)(r_2)(-1) + (-r_2)(r_2)(-1) = 5r_2^2 - 5r_2 + 5r_2 + r_2^2 = 6r_2^2 = 54,$$
therefore $r_2^2 = 9$, so $r_2 = \pm3$ and $r_1 = \mp3$. Let $r_2 = 3$, so $r_1 = -3$.

Now, with $\binom42$ terms,
$$\begin{aligned}
a &= r_1r_2 + r_1r_3 + r_1r_4 + r_2r_3 + r_2r_4 + r_3r_4\\
&= (-3)(3) + (-3)(-5) + (-3)(-1) + (3)(-5) + (3)(-1) + (-5)(-1)\\
&= -9 + 15 + 3 - 15 - 3 + 5 = \boxed{-4},
\end{aligned}$$
and so $c = r_1r_2r_3r_4 = (-3)(3)(-5)(-1) = -45$.
:::
:::

:::problem
The roots $r_i$ of $x^3 - 2x^2 - 11x + a = 0$ satisfy $r_1 + 2r_2 + 3r_3 = 0$. Find all possible $a$.
:::solution
$$r_1 + r_2 + r_3 = 2, \qquad r_1r_2r_3 = -a, \qquad r_1 + 2r_2 + 3r_3 = 0.$$
So $r_1 = 2 - r_2 - r_3$, and $2 - r_2 - r_3 + 2r_2 + 3r_3 = 0$, so $2 + r_2 + 2r_3 = 0$, so $r_2 = -2(1 + r_3)$. Then
$$\begin{aligned}
(2 - r_2 - r_3)r_2r_3 &= -a\\
2r_2r_3 - r_2^2r_3 - r_2r_3^2 &= -a\\
-4(1 + r_3)r_3 - \bigl(-2(1 + r_3)\bigr)^2r_3 - \bigl(-2(1 + r_3)\bigr)r_3^2 &= -a\\
-4r_3 - 4r_3^2 - (4 + 4r_3^2 + 8r_3)r_3 + 2r_3^2(1 + r_3) &= -a\\
-4r_3 - 4r_3^2 - 4r_3 - 4r_3^3 - 8r_3^2 + 2r_3^2 + 2r_3^3 &= -a\\
-8r_3 - 10r_3^2 - 2r_3^3 &= -a,
\end{aligned}$$
so one option… ✗ no wait.

$$\begin{aligned}
r_1 + 2r_2 + 3r_3 &= 0\\
(r_1 + r_2 + r_3) + r_2 + r_3 &= 0\\
2 + r_2 + r_3 &= 0,
\end{aligned}$$
so $r_2 + r_3 = -2$, $r_2 = -2 - r_3$, and $r_1 = 2 - (-2 - r_3) - r_3 = 4 + r_3 - r_3$, so $r_1 = 4$. Then
$$64 - 32 - 44 + a = 32 - 44 + a = -12 + a,$$
so $a = 12$?

:::
:::solution Second attempt
Since $r_1 + r_2 + r_3 = 2$, $r_1 = 2 - r_2 - r_3$, so
$$r_1 + 2r_2 + 3r_3 = 0 \to 2 - r_2 - r_3 + 2r_2 + 3r_3 = 0 \to 2 + r_2 + 2r_3 = 0 \to r_2 = -2 - 2r_3,$$
and so $r_1 = 2 - (-2 - 2r_3) - r_3 = 4 + r_3$. Next, $r_1r_2 + r_1r_3 + r_2r_3 = -11$:
$$\begin{aligned}
r_1(-2 - 2r_3) + r_1r_3 + (-2 - 2r_3)r_3 &= -11\\
-2r_1 - r_1r_3 - 2r_3 - 2r_3^2 &= -11\\
-2(4 + r_3) - (4 + r_3)r_3 - 2r_3 - 2r_3^2 &= -11\\
-8 - 2r_3 - 4r_3 - r_3^2 - 2r_3 - 2r_3^2 &= -11\\
-8 - 8r_3 - 3r_3^2 &= -11,
\end{aligned}$$
so
$$3r_3^2 + 8r_3 - 3 = 0 \to (r_3 + 3)(3r_3 - 1) = 0,$$
giving $r_3 = \frac13$ or $r_3 = -3$. And $r_1r_2r_3 = -a$, so
$$a = \frac{104}{27} \quad\text{or}\quad a = 12.$$
:::
:::

## Exercises

:::exercise
:::solution
$\boxed{2}$
:::
:::

:::exercise
$p(x) = x^3 - 5x^2 + 12x - 19$. Find $\frac{1}{r_1r_2} + \frac{1}{r_2r_3} + \frac{1}{r_1r_3}$.
:::solution
$$\frac{r_3 + r_1}{r_1r_2r_3} + \frac{1}{r_1r_3} \to \frac{r_3 + r_1 + r_2}{r_1r_2r_3} = \boxed{\frac{5}{19}}$$
:::
:::

:::exercise
Two factors of $x^3 - t_1x + t_2$ are $x + 2$ and $x - 1$. Find all roots.
:::solution
There are many ways to do this:

1. $-t_2 = (-2)(1)r$ and $-t_1 = (-2)(1) + (-2)(r) + (r)(1) = -2 - r$. Now $-8 + 2t_1 + t_2 = 0$ and $1 - t_1 + t_2 = 0$, so $t_2 = t_1 - 1$, so $-8 + 2t_1 + t_1 - 1 = 0$, so $3t_1 = 9$, $t_1 = 3$, and $t_2 = 2$. So $-2r = -2$, $r = 1$, and $-3 = -2 - 1$ ✓. So $(x - 1)$ is a double root. So we have
$$(x - 1)^2(x + 2) = x^3 - 3x + 2.$$
:::
:::

:::exercise
:::solution
$48 - 8 + 8 + 14 + 2 = 64$, so $64 = 3(2 + r)(2 + s)(2 + t)(2 + u)$, so
$$\frac{64}{3} = (2 + r)(2 + s)(2 + t)(2 + u).$$
:::
:::

:::exercise
Find the two values of $k$ for which $p(x) = 2x^3 - 9x^2 + 12x - k$ has a double root.
:::solution
Signs of the coefficients: $+, -, +, -$. With roots $r_1, r_1, r_2$:
$$\frac k2 = r_1^2r_2 \to \frac k2 = r_1^2\left(\frac92 - 2r_1\right) = \frac{9r_1^2}{2} - 2r_1^3 \to 9r_1^2 - 4r_1^3 = k,$$
$$\frac92 = 2r_1 + r_2 \to \frac92 - 2r_1 = r_2 \quad\left(\text{or } \frac92 - r_2 = 2r_1,\ r_1 = \frac94 - \frac{r_2}{2}\right),$$
$$6 = r_1^2 + 2r_1r_2 = r_1(r_1 + 2r_2).$$
So $r_2 = \frac{6}{2r_1} - \frac{r_1}{2} = \frac{6 - r_1^2}{2r_1}$, and
$$\frac k2 = r_1^2\left(\frac{6 - r_1^2}{2r_1}\right) = \frac{r_1^2(6 - r_1^2)}{2r_1},$$
so $r_1(6 - r_1^2) = k$, that is,
$$6r_1 - r_1^3 = k, \qquad \frac{6r_1 - r_1^3}{2} = \frac k2.$$

Also, from $r_1 = \frac{9 - 2r_2}{4}$:
$$\left(\frac{9 - 2r_2}{4}\right)^2 = \frac{81 + 4r_2^2 - 2(9)(2r_2)}{16} = \frac{81 + 4r_2^2 - 36r_2}{16}.$$
:::
:::solution Second attempt
$2x^3 - 9x^2 + 12x - k$. Say there is a double root, i.e. $(x - p)^2(x - q) = (x - r_1)(x - r_2)(x - r_3)$. So
$$\frac k2 = p^2q \qquad\text{and}\qquad \frac92 = 2p + q \qquad\text{and finally}\qquad \frac{12}{2} = 6 = pq + pp + pq = 2pq + p^2.$$
$9 = 4p + 2q \to \frac{9 - 2q}{4} = p \to 6 = 2\left(\frac{9 - 2q}{4}\right)q + \cdots$; or $\frac{9 - 4p}{2} = q \to 6 = 2\left(\frac{9 - 4p}{2}\right)p + p^2$:
$$6 = 9p - 4p^2 + p^2 \to 3p^2 - 9p + 6 = 0 \to p^2 - 3p + 2 = 0 \to (p - 1)(p - 2),$$
so $p = 1, 2$. Then $\frac92 = 2 + q \Rightarrow q = \frac52$, and $\frac92 = 4 + q \Rightarrow q = \frac12$. So $\frac k2 = (1)^2\left(\frac52\right) \Rightarrow k = 5$, and $\frac k2 = 2^2\left(\frac12\right) \Rightarrow k = 4$.

So $k = 4$ or $k = 5$ gives a double root.

Let’s check! (Just one :) ) $2x^3 - 9x^2 + 12x - 5$: $f(1) = 2 - 9 + 12 - 5 = 0$, so
$$\begin{array}{r|rrrr}
1 & 2 & -9 & 12 & -5\\
  &   & 2 & -7 & 5\\ \hline
  & 2 & -7 & 5 & 0
\end{array}$$
giving $g(x) = 2x^2 - 7x + 5 = 0$, and $g(1) = 2 - 7 + 5 = 0$ ✓:
$$\begin{array}{r|rrr}
1 & 2 & -7 & 5\\
  &   & 2 & -5\\ \hline
  & 2 & -5 & 0
\end{array}$$
So $(2x - 5)(x - 1)^2$, that is, $2\left(x - \frac52\right)(x - 1)^2$, yay!
:::
:::

:::exercise
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
