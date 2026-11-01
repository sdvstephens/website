---
course: integrated-maths
chapter: 9
section: 8
title: Polynomial Roots Part II
source-pages: 173-178, 185-210, 216-218
---

## 8.1 Irrational Roots

:::problem{8.1}
Prove that $\sqrt2$ is irrational.

:::solution
Let $p, q \in \ZZ_{>0}$ be coprime such that $\sqrt2 = \frac pq$, that is to say, $\sqrt2$ can be represented rationally. Thus
$$2 = \frac{p^2}{q^2} \implies 2q^2 = p^2,$$
so $p$ is even by definition. But if $p = 2r$, $r \in \ZZ_{>0}$, then
$$\sqrt2 = \frac{2r}{q} \implies 2 = \frac{(2r)^2}{q^2} \implies 2q^2 = 4r^2 \implies q^2 = 2r^2,$$
ah! This cannot be, since we assumed $p, q$ were coprime! Thus we have a contradiction, and there is no rational representation of $\sqrt2$.
:::
:::

:::problem{8.2}
Prove that if $p, q \in \QQ$, then $\frac pq \in \QQ$ (given that $q \neq 0$).

:::solution
Let $p = \frac{p_1}{p_2}$ and $q = \frac{q_1}{q_2}$, with $p_i, q_i \in \ZZ$ and $p_i, q_i \neq 0$. Then
$$\frac pq = \frac{p_1}{p_2}\left(\frac{q_2}{q_1}\right) = \frac{p_1q_2}{p_2q_1},$$
and since $p_i, q_i \in \ZZ$, their products are in $\ZZ$, so $\frac pq \in \QQ$.
:::
:::

:::remark
Similar to complex conjugate notation ($\overline{a+bi} = a - bi$), we have radical conjugate notation: $\underline{a + b\sqrt c} = a - b\sqrt c$. (This is non-standard, however.)
:::

:::problem{8.4}
Let $f(x) = x^3 - x - 2$. Show that there are no rational roots and that there exists at least one irrational root.

:::solution
By the Rational Root Theorem, if rational roots exist then $r_i \in \pm\{1, 2\}$.

$$f(-1) = -2,\qquad f(1) = -2,\qquad f(-2) = -8,\qquad f(2) = 4.$$
$f(0) = -2$ and $f(2) = 4$, so there exists a real root there. But as we just showed, this root cannot be rational.
:::
:::

:::problem{8.5}
Find a polynomial with rational coefficients that has $2 - \sqrt3$ and $3 + 2\sqrt5$ as roots.

:::solution
Clearly such a polynomial must be of degree at least $4$:
$$\big(x - (2-\sqrt3)\big)\big(x - (2+\sqrt3)\big)\big(x - (3+2\sqrt5)\big)\big(x - (3-2\sqrt5)\big).$$
The first pair gives
$$x^2 - \big[(2-\sqrt3) + (2+\sqrt3)\big]x + (2-\sqrt3)(2+\sqrt3) = x^2 - 4x + 1,$$
and the second pair gives $x^2 - 6x - 11$. So
$$(x^2 - 4x + 1)(x^2 - 6x - 11) = x^4 - 10x^3 + 14x^2 + 38x - 11,$$
so $P(x) = x^4 - 10x^3 + 14x^2 + 38x - 11$.

:::
:::

:::problem{8.6}
Prove there exists $p(x) = a_nx^n + \cdots + a_0$ such that $a_i \in \QQ$ for all $i$ and there is a root $r_i \in \QQ^c$ with $r_i = \sqrt{3 + \sqrt7}$.

:::solution
First try, with the quadratic formula:
$$\sqrt{3 + \sqrt7} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$
There is a factor of $2a$ to divide out, which leaves something of the form $\sqrt{\frac{b^2}{4} - ac}$. Matching, $4(3) = b^2 \Rightarrow b = \pm\sqrt{12}$, and $-ac = \sqrt7$ (that is, $-4ac = \sqrt{28}$). This cannot be, since we need $a_i \in \QQ$ for all $i$.

Instead, multiply out conjugates:
$$\begin{aligned}
\left(x - \sqrt{3+\sqrt7}\right)\left(x + \sqrt{3+\sqrt7}\right) &= x^2 - (3 + \sqrt7),\\
\big(x^2 - (3+\sqrt7)\big)\big(x^2 - (3-\sqrt7)\big) &= (x^2 - 3 - \sqrt7)(x^2 - 3 + \sqrt7)\\
&= (x^2 - 3)^2 - (\sqrt7)^2,
\end{aligned}$$
so
$$p(x) = x^4 - 6x^2 + 2.$$
Its factors are $\left(x - \sqrt{3+\sqrt7}\right)\left(x + \sqrt{3+\sqrt7}\right)\left(x \pm \sqrt{3-\sqrt7}\right)$, so $\left(x \pm \sqrt{3 \pm \sqrt7}\right)$.
:::
:::

:::problem{8.7}
Let $g(x) = 4x^4 - 16x^2 + 15$. Find all roots and factor.

:::solution
By the Rational Root Theorem,
$$r_i \in \pm\left\{1, 3, 5, 15, \tfrac14, \tfrac34, \tfrac54, \tfrac{15}{4}, \tfrac12, \tfrac32, \tfrac52, \tfrac{15}{2}\right\}.$$
Since $x^2(4x^2 - 16) = -15$, we need $4x^2 < 16$, so $x < 2$. So the root cannot be in $+\left\{3, 5, 15, \tfrac{15}{4}, \tfrac52, \tfrac{15}{2}\right\}$, and we now have
$$1, -1, -3, -5, -15, \tfrac14, -\tfrac14, \tfrac34, -\tfrac34, \tfrac54, -\tfrac54, -\tfrac{15}{4}, \pm\tfrac12, \pm\tfrac32, -\tfrac52, -\tfrac{15}{2}.$$

$g(0) = 15$. An educated guess, since $2^4 = 16$, is $-\frac32$:
$$g\left(-\tfrac32\right) = 4\cdot\frac{81}{16} - 16\cdot\frac94 + 15 = \frac{81}{4} - \frac{144}{4} + \frac{60}{4} = -\frac34,$$
so there exists a root between $0$ and $-\frac32$. Next, $g(-1) = 4 - 16 + 15 = 3$, so $\exists\, r_i \in \left(-\frac32, -1\right)$. $-\frac54$ seems possible:
$$g\left(-\tfrac54\right) = 4\cdot\frac{5^4}{4^4} - 16\left(\frac{25}{16}\right) + 15 = \frac{625}{64} - \frac{1600}{64} + \frac{960}{64} = \frac{1585}{64} - \frac{1600}{64} = -\frac{15}{64},$$
so $\exists\, r_i \in \left(-\frac54, -1\right)$, but it must be irrational.

Let’s try $-\frac{15}{2}$, tracking signs in synthetic division:
$$\begin{array}{r|rrrrr}
-\tfrac{15}{2} & 4 & 0 & -16 & 0 & 15\\
 & & -30 & 225 & - & +\\ \hline
 & 4 & -30 & 209 & - & +
\end{array}$$
So $\exists\, r_i \in \left(-\frac{15}{2}, -\frac32\right)$.

Now let $x' = x^2$. Then
$$4x'^2 - 16x' + 15 = (2x' - 3)(2x' - 5).$$
(By the quadratic formula, $x' = \frac{16 \pm \sqrt{16^2 - 4(4)(15)}}{8}$, with $256 - 240 = 16$.)

So
$$g(x) = (2x^2 - 3)(2x^2 - 5) = 4\left(x^2 - \tfrac32\right)\left(x^2 - \tfrac52\right).$$
From $x^2 - \frac32 = 0$, $x = \pm\frac{\sqrt6}{2}$; from $x^2 - \frac52 = 0$, $x = \pm\frac{\sqrt{10}}{2}$.
:::
:::

## Vieta’s Formulas

:::problem{8.16}
Let $f(x) = x^3 - 4x^2 + 15x - 7$, and let $p, q, r$ be the roots of $f(x)$.

(a) Why must $f(x) = (x - p)(x - q)(x - r)$?
:::solution
(a) Since $\deg f = 3$, there are $3$ factors, so each of $(x - p)$, $(x - q)$, $(x - r)$ divides $f(x)$ with no remainder.

Expanding, $(x - p)(x - q)(x - r) = x^3 - (p + q + r)x^2 + (pr + qr + pq)x - rpq$, and $f(x) = x^3 - 4x^2 + 15x - 7$, so
$$p + q + r = 4, \qquad pr + qr + pq = 15, \qquad 7 = rpq.$$
:::
:::

:::problem{8.17}
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

:::problem{8.18}
Let $p, q, r, s$ be the roots of $3x^4 + 2x^3 - 7x^2 + 9x - 10$. Find $pqr + pqs + prs + qrs$.
:::solution
Possible rational roots: $\pm\left\{1, 2, 5, 10, \tfrac13, \tfrac23, \tfrac53, \tfrac{10}{3}\right\}$, and then synthetic division, etc.

$3(pqrs) = -10$ and $-3(pqr + pqs + prs + qrs) = 9$, therefore
$$pqr + pqs + prs + qrs = -3. \;\checkmark$$

:::
:::

:::problem{8.19}
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

:::remark Counting the terms
For each term of a polynomial:
$$\binom nm = \frac{n!}{m!\,(n-m)!}.$$
Compare $n! = (n)(n-1)(n-2)\cdots(2)(1)$ and $\frac{n!}{(n-k)!}$.

Filling $2$ slots from $a, b, c$: $ab$, $ac$, $bc$. Filling $2$ slots from $a, b, c, d$: $ab$, $ac$, $ad$, $bc$, $bd$, $cd$.

Alongside: $\frac{3x}{yz} = 3 \Rightarrow 3x = 3yz \Rightarrow x = yz$, and $\frac{4x}{yz} = 6 \Rightarrow 4x = 6yz \Rightarrow x = \frac32 yz$.
:::

:::problem{8.21}
$x^3 + ax + b = 0$ is a polynomial with root $r_1 = 1 + 2i$, and $a, b \in \RR$.
:::solution
The other root must be $1 - 2i$, since it must follow the $\pm$ property of polynomials. Then for the sum of the roots, since $a_3 = 1$, $a_2 = 0$, $a_1 = a$, $a_0 = b$:
$$a_2 = 0 = r_1 + r_2 + r_3 = 2 + r_3 = 0, \qquad r_3 = -2.$$
Now
$$\bigl(x - (1 + 2i)\bigr)\bigl(x - (1 - 2i)\bigr) = (x - 1 - 2i)(x - 1 + 2i) = x^2 - (1 + 2i + 1 - 2i)x + 5.$$
We know $r_1r_2r_3 = -b$, so $5r_3 = -b$, and $r_1r_2 + r_1r_3 + r_2r_3 = a$.

$$(x^2 - 2x + 5)(x - r_3) = x^3 + ax + b$$
$$x^3 - r_3x^2 - 2x^2 - 2r_3x + 5x - 5r_3$$
$$x^3 - (r_3 + 2)x^2 - (2r_3 - 5)x - 5r_3$$
So $x^3 - (-2 + 2)x^2 - \bigl(2(-2) - 5\bigr)x - 5(-2)$, so $x^3 + 9x + 10$, so $a = 9$, $b = 10$.

*(Margin note: should be 1, not 9!)*

:::
:::

:::problem{8.22}
Evaluate $(2 - r)(2 - s)(2 - t)$ if $r, s, t$ are the roots of $f(x) = 2x^3 - 4x^2 + 3x - 9$.
:::solution
Is that not just $f(2)$?

$rst = \frac92$, $r + s + t = 2$, $rs + rt + st = \frac32$.

$16 - 16 + 6 - 9 = -3 \to -\frac32$.
:::
:::

:::problem{8.23}
$f(x) = x^4 + 6x^3 + ax^2 - 54x + c$ has roots $r_i \in \RR$ such that $r_1 + r_2 = 0$ and $r_4 - r_3 = 4$. Find $a$ and $c$.
:::solution
(The first attempt here is crossed out in the notes; the second attempt is below.)
:::
:::

:::problem{8.24}
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

:::problem{8.21} Try again!
:::solution
$r + (1 + 2i) + (1 - 2i) = 0 \to r = -2$. So
$$a = (-2)(1 + 2i) + (-2)(1 - 2i) + (1 + 2i)(1 - 2i) = -2 - 4i - 2 + 4i + 1 + 4 = 1 \;\checkmark$$
and
$$b = -(-2)(1 + 2i)(1 - 2i) = 10 \;\checkmark$$
So $x^3 + x + 10 = 0$.
:::
:::

:::problem{8.22} Try again!
:::solution
With $f(x) = 2x^3 - 4x^2 + 3x - 9$:
$$(2 - r)(2 - s)(2 - t) = \bigl(4 - 2(r + s) + rs\bigr)(2 - t) = 8 - 4(r + s + t) + 2(rt + st + rs) - rst,$$
$$8 - 4\left(-\frac{-4}{2}\right) + 2\left(\frac32\right) - \frac92 = 3 - \frac92 = \frac62 - \frac92 = \boxed{-\frac32} \;\checkmark$$
**OR**
$$2(x - r)(x - s)(x - t) = f(x),$$
so $2(2 - r)(2 - s)(2 - t) = f(2) = -3$, so
$$(2 - r)(2 - s)(2 - t) = \boxed{-\frac32} \;\checkmark$$
:::
:::

:::problem{8.23} Second attempt
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

:::problem{8.24} Second attempt
:::solution
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

:::exercise{8.3.1}
:::solution
$\boxed{2}$
:::
:::

:::exercise{8.3.2}
$p(x) = x^3 - 5x^2 + 12x - 19$. Find $\frac{1}{r_1r_2} + \frac{1}{r_2r_3} + \frac{1}{r_1r_3}$.
:::solution
$$\frac{r_3 + r_1}{r_1r_2r_3} + \frac{1}{r_1r_3} \to \frac{r_3 + r_1 + r_2}{r_1r_2r_3} = \boxed{\frac{5}{19}}$$
:::
:::

:::exercise{8.3.3}
Two factors of $x^3 - t_1x + t_2$ are $x + 2$ and $x - 1$. Find all roots.
:::solution
There are many ways to do this:

1. $-t_2 = (-2)(1)r$ and $-t_1 = (-2)(1) + (-2)(r) + (r)(1) = -2 - r$. Now $-8 + 2t_1 + t_2 = 0$ and $1 - t_1 + t_2 = 0$, so $t_2 = t_1 - 1$, so $-8 + 2t_1 + t_1 - 1 = 0$, so $3t_1 = 9$, $t_1 = 3$, and $t_2 = 2$. So $-2r = -2$, $r = 1$, and $-3 = -2 - 1$ ✓. So $(x - 1)$ is a double root. So we have
$$(x - 1)^2(x + 2) = x^3 - 3x + 2.$$
:::
:::

:::exercise{8.3.4}
$a, b \in \RR$, and $p(x) \in \RR[x]$ is $p(x) = x^3 + ax^2 - 4x + b = 0$, with $r_1 = 1 + i$. Solve for $r_2$, $r_3$.
:::solution
So $r_1 = 1 + i \Rightarrow r_2 = 1 - i \Rightarrow$
$$-4 = (1 + i)(1 - i) + r_3(1 + i) + r_3(1 - i) = 2 + r_3 + r_3i + r_3 - r_3i,$$
so $2 + 2r_3 = -4$, $1 + r_3 = -2$, $r_3 = -3$.
:::
:::

:::exercise{8.3.5}
:::solution
$48 - 8 + 8 + 14 + 2 = 64$, so $64 = 3(2 + r)(2 + s)(2 + t)(2 + u)$, so
$$\frac{64}{3} = (2 + r)(2 + s)(2 + t)(2 + u).$$
:::
:::

:::exercise{8.3.6}
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
:::

:::example Quartic with nonreal roots
$p(x) = x^4 + ax^3 + bx^2 + cx + d = 0$, with $a, b, c, d \in \RR$ and $r_i \in \CC\setminus\RR$ for all $i$. Also $r_1r_2 = 13 + i$ and $r_3 + r_4 = 3 + 4i$. What is $b$?
:::solution
$$\begin{aligned}
-a &= r_1 + r_2 + r_3 + r_4\\
b &= r_1r_2 + r_1r_3 + r_1r_4 + r_2r_3 + r_2r_4 + r_3r_4\\
-c &= r_1r_2r_3 + r_1r_2r_4 + r_1r_3r_4 + r_2r_3r_4\\
d &= r_1r_2r_3r_4
\end{aligned}$$
Grouping $-c$:
$$r_1r_2(r_3 + r_4) = r_1r_2r_3 + r_1r_2r_4, \qquad r_3r_4(r_1 + r_2) = r_1r_3r_4 + r_2r_3r_4,$$
which together make $-c$; the first is $(13 + i)(3 + 4i) = 39 + 52i + 3i - 4 = 35 + 55i$.

$r_3 = 3 + 4i - r_4$, so
$$d = (13 + i)(3 + 4i - r_4)(r_4) = r_4(39 + 52i - 13r_4 + 3i - 4 - r_4i) = (35 + 55i - 13r_4 - r_4i)r_4,$$
$$(35 + 55i)r_4 - (13 + i)r_4^2 = d.$$
That is,
$$d = -r_4^2(r_1r_2) + \bigl((r_3 + r_4)(r_1r_2)\bigr)r_4 = -r_4^2r_1r_2 + (r_1r_2r_3 + r_1r_2r_4)r_4.$$
Naming roots $\alpha, \beta$ and their conjugates: $-c = 35 + 55i + \bar\alpha\bar\beta(\alpha + \beta)$.

:::
:::

:::exercise{8.3.6} Second attempt
:::solution
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

## Using Roots to Make Equations

:::problem{8.25}
Let $r$ be a root of $x^2 - x + 7$. Find $r^3 + 6r + \pi$.
:::solution
Let $r_1 = r$. $r^3 = r^2 - 7r$. Also $r_1 + r_2 = 1$ and $r_1r_2 = 7$, from $(x - r_1)(x - r_2)$:
$$r_2 = 1 - r_1 \Rightarrow r_1(1 - r_1) = 7 \Rightarrow r_1 - r_1^2 = 7 \Rightarrow r_1^2 - r_1 + 7 = 0,$$
oops lol.
$$r^3 = r^2 - 7r \to r^2 = r - 7 \to r^2 - r + 7 = 0 \;\checkmark$$
So
$$\begin{aligned}
r^3 + 6r + \pi &\to r^2 - 7r + 6(r^2 + 7) + \pi\\
&\to (r - 7) - 7r + 6(r - 7) + 42 + \pi\\
&= r - 7 - 7r + 6r - 42 + 42 + \pi = \boxed{-7 + \pi}.
\end{aligned}$$
:::
:::

:::problem{8.26}
Find the sum of the 20th powers of the roots of $z^{20} - 19z + 2$.
:::solution
Let $r_1$ be a root. So
$$r_1^{20} - 19r_1 + 2 = 0 \to r_1^{20} = 19r_1 - 2.$$
$$r_1^{20} - r_1^{20} + 19z - 2$$

$$r_1^{21} - 19r_1^2 + 2r_1$$

Then (on a later page):
$$r_1^{20} - 19r_1 + 2 = 0, \qquad r_1^{20} = 19r_1 - 2,$$
$$19r_1 - 2 + 19r_2 - 2 + \cdots + 19r_{20} - 2 = 19(r_1 + r_2 + \cdots + r_{20}) - 2(20),$$
and $r_1 + r_2 + \cdots + r_{20} = 0$ because $a_{n-1} = 0$, so the sum is
$$19(0) - 40 = \boxed{-40}.$$
:::
:::

:::example Quartic with nonreal roots, second attempt
:::solution
$$x^4 + ax^3 + bx^2 + cx + d = 0, \qquad \alpha\beta = 13 + i, \qquad \partial + \theta = 3 + 4i.$$
$$\begin{aligned}
-a &= \alpha + \beta + \partial + \theta\\
b &= \alpha\beta + \alpha\partial + \alpha\theta + \beta\partial + \beta\theta + \partial\theta\\
-c &= \alpha\beta\partial + \alpha\beta\theta + \alpha\partial\theta + \beta\partial\theta\\
d &= \alpha\beta\partial\theta
\end{aligned}$$
and $\alpha\beta\partial + \alpha\beta\theta = \alpha\beta(\partial + \theta) = (13 + i)(3 + 4i)$.

Now since $a, b, c, d \in \RR$ and $r_i \in \CC\setminus\RR$, for each $r_i$ there is $\bar r_i$. So since $\alpha\beta = 13 + i$ is complex, $\bar\alpha \neq \beta$, and since $\partial + \theta = 3 + 4i$, $\bar\partial \neq \theta$. So let $\bar\alpha = \partial$ and $\bar\beta = \theta$, equivalently $\bar\partial = \alpha$, $\bar\theta = \beta$. So $-a = (\alpha + \partial) + (\beta + \theta)$ and
$$b = \alpha\beta + \alpha\bar\alpha + \alpha\bar\beta + \beta\bar\alpha + \beta\bar\beta + \bar\alpha\bar\beta.$$
If $b \in \RR$, as the problem posits, then $(\alpha\beta + \alpha\bar\beta + \beta\bar\alpha + \bar\alpha\bar\beta)$ must be such that their imaginary parts are equal. $\alpha(\beta + \bar\beta) + \bar\alpha(\beta + \bar\beta)$ shows this clearly. Using $\bar\alpha\bar\beta = \overline{\alpha\beta}$:
$$13 + i + 13 - i + \alpha\bar\beta + \beta\bar\alpha \to 26 + \alpha\bar\beta + \beta\bar\alpha + \alpha\bar\alpha + \beta\bar\beta,$$
where $\alpha\bar\beta + \beta\bar\alpha$ is real. Then, since $\bar\alpha + \bar\beta = \partial + \theta = 3 + 4i$,
$$\begin{aligned}
&26 + \alpha\bar\beta + \beta\bar\alpha + \alpha\bar\alpha + \beta\bar\beta\\
&= 26 + \beta(\bar\alpha + \bar\beta) + \alpha(\bar\beta + \bar\alpha)\\
&= 26 + \beta(3 + 4i) + \alpha(3 + 4i) \to 26 + (\alpha + \beta)(3 + 4i)\\
&= 26 + (3 - 4i)(3 + 4i) = 26 + 9 + 16 = 51,
\end{aligned}$$
(the middle terms being $3\beta + 4\beta i + 3\alpha + 4\alpha i$), so
$$\boxed{b = 51}.$$

Other routes tried: let $\beta = p + qi$, so
$$\beta(3 + 4i) = (p + qi)(3 + 4i) = 3p + 3qi + 4pi + 4qi^2 = (3p - 4q) + (3q + 4p)i,$$
and likewise, with $\alpha = f + gi$, $\alpha(3 + 4i) = (3f - 4g) + (4f + 3g)i$.

Or $\beta = \frac{13 + i}{\alpha}$, giving
$$26 + \frac{35 + 55i}{\alpha} + 3\alpha + 4\alpha i, \qquad \frac{26\alpha + 35 + 55i + 3\alpha^2 + 4\alpha^2i}{\alpha} = b.$$
Side work: $|\alpha|^2\beta + |\beta|^2\alpha = 35 + 55i$;

$\alpha = 3 - 4i - \beta$?;

$\bar\alpha = 3 + 4i - \bar\beta$, $\bar\beta = 3 + 4i - \bar\alpha$, $\alpha = \frac{13 + i}{\beta}$, $\beta = \frac{13 + i}{\alpha}$; then
$$(3 + 4i - \bar\beta)\beta = \bar\alpha\beta, \qquad 3\beta + 4\beta i - \beta\bar\beta = \bar\alpha\beta, \qquad 3\alpha + 4\alpha i - \alpha\bar\alpha = \alpha\bar\beta.$$

Also:
$$d = \alpha\beta\bar\alpha\bar\beta = \alpha\bar\alpha\beta\bar\beta = (13 + i)\overline{\alpha\beta} = (13 + i)(13 - i) = 169 + 1 = 170,$$
so $d = 170$. And $\alpha + \beta = \overline{\partial + \theta}$, so $3 - 4i = \alpha + \beta$, and $-a = (3 - 4i) + (3 + 4i) = 6$, so $a = -6$.

:::
:::

:::problem{8.27}
Let $a, b, c$ be the roots of $x^3 + 3x^2 - 24x + 1 = 0$ (they are real). Prove that $\sqrt[3]a + \sqrt[3]b + \sqrt[3]c = 0$.
:::solution
$\sqrt[3]a = f(a)$? We have $(x - a)(x - b)(x - c) = x^3 + 3x^2 - 24x + 1$, so
$$a^3 + 3a^2 - 24a + 1 = 0, \qquad a^3 = -3a^2 + 24a - 1, \qquad \sqrt[3]a = \bigl(-(3a^2 - 24a + 1)\bigr)^{1/9}.$$

Or:
$$a = \frac{a^3 + 3a^2 + 1}{24} \to \sqrt[3]a = \frac{\sqrt[3]{a^3 + 3a^2 + 1}}{\sqrt[3]{24}} = \frac{\sqrt[3]{a^3 + 3a^2 + 1}}{2\sqrt[3]3}.$$

Instead:
$$(x + 1)^3 - 27x = 0 \iff f(x) = 0 \Rightarrow x = \frac{-(x + 1)^3}{-27} = \left(\frac{x + 1}{3}\right)^3.$$
So since $a, b, c$ are roots, $a = \left(\frac{a + 1}{3}\right)^3$, so $\sqrt[3]a = \frac{a + 1}{3}$. Then
$$\sqrt[3]a + \sqrt[3]b + \sqrt[3]c = \frac{a + 1}{3} + \frac{b + 1}{3} + \frac{c + 1}{3} = \frac{a + b + c + 3}{3}.$$
$a + b + c = -\frac{a_{n-1}}{a_n}$, so $-3 = a + b + c$, therefore $\frac{a + b + c + 3}{3} = 0$. $\square$
:::
:::

:::exercise{8.4.1}
Let $t$ be a root of $f(x) = x^3 - x + 2$. Evaluate $t^6 - t^2 + 4t$.
:::solution
$f(t) = t^3 - t + 2 = 0 \Rightarrow t^3 = t - 2$, so
$$(t - 2)(t - 2) - t^2 + 4t \to t^2 - 4t + 4 - t^2 + 4t = \boxed{4}.$$
:::
:::

:::exercise{8.4.2}
Let $r$ be a root of $x^2 + 7x + 17 = 0$.
:::solution
$r^2 + 7r + 17 = 0$, so $r = \frac{-r^2 - 17}{7} = -\frac{r^2 + 17}{7}$.

(a) $(r + 3)(r + 4) = r^2 + 7r + 12$, so
$$r^2 + 7r + 17 = (r + 3)(r + 4) + 5 = 0.$$
So $(r + 3)(r + 4) = (r^2 + 7r + 17) - 5 = 0 - 5 = \boxed{-5}$.

(b) $(r - 2)(r + 9) = r^2 + 7r - 18$, so $f(r) = (r - 2)(r + 9) + 35$. So $(r - 2)(r + 9) = 0 - 35$, so $\boxed{-35}$.

(c)
$$\begin{aligned}
(r - 1)(r + 2)(r + 8)(r + 5) &= \bigl[(r + 2)(r + 5)\bigr]\bigl[(r - 1)(r + 8)\bigr]\\
&= (r^2 + 7r + 10)(r^2 + 7r - 8) = \bigl(f(r) - 7\bigr)\bigl(f(r) - 25\bigr)\\
&= (-7)(-25) = \boxed{175}.
\end{aligned}$$
:::
:::

:::exercise{8.4.3}
Find the sum of the 20th powers of the roots of $z^{20} - 19z^2 + 2 = 0$.
:::solution
$$r_i^{20} - 19r_i^2 + 2 = 0, \qquad r_i^{20} = 19r_i^2 - 2,$$
$$19r_1^2 + 19r_2^2 + \cdots + 19r_{20}^2 - 2(20) = 19\left(\sum_{i=1}^{20} r_i^2\right) - 2(20).$$
$-19z^2 = -2 - z^{20} \to z^2 = \frac{z^{20} + 2}{19}$, so
$$\sum_{i=1}^{20} r_i^2 = \frac{(r_1^{20} + \cdots + r_{20}^{20}) + 2(20)}{19}.$$
:::
:::

:::example
$x^2 - 3cx - 8d = 0$ has roots $a, b$, and $x^2 - 3ax - 8b = 0$ has roots $c, d$. Find $a + b + c + d$.
:::solution
$$3c = a + b, \qquad 3a = c + d, \qquad -8d = ab, \qquad -8b = cd.$$
$a^2 - 3ca - 8d = 0$:

- $a^2 - (a + b)a - 8d = 0 \Rightarrow a^2 - a^2 - ba - 8d = 0$ ✗
- $a^2 - 3ca + ab = 0 \to a(a - 3c + b) = 0$ ✗
- $(3c - b)^2 - 3c(3c - b) + (3c - b)b$: $\;9c^2 - 6bc + b^2 - 9c^2 + 3cb + 3cb - b^2 = 0$ ✗

:::
:::

:::example
$\frac{2003}{2004}x + 1 + \frac1x = 0$.
:::solution
$$\frac{2003}{2004}x^2 + x + 1 = 0,$$
so $r_1 + r_2 = -\frac{2004}{2003}$ and $r_1r_2 = \frac{2004}{2003}$, and
$$\frac1{r_1} + \frac1{r_2} = \frac{r_2 + r_1}{r_1r_2} = \boxed{-1}.$$

:::
:::

:::example
Let $x^3 + 4x - 8 = 0$. What is $x^7 + 64x^2$?
:::solution
$a^3 + 4a - 8 = 0$, and $x^7 + 64x^2 = x(x^6 + 2^6x)$.
$$(x^3 + 4x - 8)(x^3 + 4x - 8) = x^6 + 8x^4 - 16x^3 + 16x^2 - 64x + 64$$
$$= (x^6 - 64x) + 8x^4 - 16x^3 + 16x^2 + 64$$

:::
:::

:::example
If $a \pm bi$ are complex roots of the equation $x^3 + qx + r = 0$, where $a, b, q, r \in \RR$ and $b \neq 0$, find $q$ in terms of $a$ and $b$.

:::solution
The roots are $a + bi$, $a - bi$ and $r_3$, and
$$q = r_1r_2 + r_1r_3 + r_2r_3 = (a^2 + b^2) + (a + bi)r_3 + (a - bi)r_3.$$
Expanding,
$$a^2 + b^2 + ar_3 + br_3i + ar_3 - br_3i = a^2 + b^2 + 2ar_3 = q.$$
Also
$$(a + bi) + (a - bi) + r_3 = 0 \implies r_3 = -2a.$$
So
$$q = a^2 + b^2 + 2a(-2a) = b^2 - 3a^2.$$
:::
:::

:::example
A cubic $p(x) \in \RR[x]$ has leading coefficient $1$, all its coefficients are real, and $p(3 - 2i) = 0$. If $p(0) = -52$, find $p(x)$.

:::solution
Write $p(x) = x^3 + ax^2 + bx - 52$, with roots $3 - 2i$, $3 + 2i$ and $r$. By Vieta,
$$\begin{aligned}
-a &= 6 + r &&\to a = -10,\\
b &= 13 + 6r &&\to b = 37,\\
52 &= 13r &&\to r = 4.
\end{aligned}$$
Therefore
$$p(x) = x^3 - 10x^2 + 37x - 52.$$
Test, dividing by $x - 4$:
$$\begin{array}{r|rrrr} 4 & 1 & -10 & 37 & -52\\ & & 4 & -24 & 52\\ \hline & 1 & -6 & 13 & 0 \end{array}$$
leaves $x^2 - 6x + 13$, whose roots are
$$\frac{6 \pm \sqrt{36 - 52}}{2} = \frac{6 \pm 4i}{2} = 3 \pm 2i. \checkmark$$
:::
:::

:::example Diagonal of a box
$x^3 - 4x^2 + 5x - 19 = 0$ has roots $r, s, t$. Find the length of the interior diagonal of a box with sides $r, s, t$.

:::solution
By Vieta,
$$r + s + t = 4, \qquad rst = 19, \qquad rs + rt + st = 5.$$
So the volume is $V = 19$, and $2(rs + rt + st) = 10$ is the surface area.

Expanding $(r + s + t)(r + s + t)$ gives $r^2 + s^2 + t^2$ plus $rs + rt$, $sr + st$, $tr + ts$, that is, plus $2(rs + rt + st)$. So
$$r^2 + s^2 + t^2 + 2(rs + rt + st) = 16 \implies r^2 + s^2 + t^2 = 6.$$

![Box with edges r, s, t, face diagonal b and space diagonal d](/notes/integrated-maths/figures/s8-box-diagonal.svg)

Let $t \geq r \geq s$. The diagonal $b$ of the $s \times t$ face has $s^2 + t^2 = b^2$, and then the interior diagonal $d$ has $b^2 + r^2 = d^2$. So
$$s^2 + t^2 + r^2 = b^2 + r^2 = d^2, \qquad 6 = b^2 + r^2 = d^2,$$
$$\boxed{d = \sqrt6}.$$
:::
:::

:::example
Let $x \in \RR$ with $x^3 + 4x = 8$. What is the value of $x^7 + 64x^2$?

:::solution
$x^3 + 4x - 8 = 0$, so $rst = 8$. Trying $x = 2$: $8 + 4(2) - 8$. Candidates: $1, 2, 4, 8$.
$$x^6 + 64x - 64 + \cdots$$
*(unfinished)*
:::
:::

:::problem{8.56}
Consider all lines that meet the graph of $y = 2x^4 + 7x^3 + 3x - 5$ in four distinct points $(x_i, y_i)$, $i \in \{1, \dots, 4\}$. Show that
$$\frac{x_1 + x_2 + x_3 + x_4}{4}$$
is independent of the line and find its value.

:::solution
![A W-shaped curve crossed by two lines, each meeting it in four points](/notes/integrated-maths/figures/s8-quartic-lines.svg)

Let’s look at the line that intersects at $y = 0$. For that line, the $x_i$ are the roots of $2x^4 + 7x^3 + 3x - 5 = 0$, so
$$\frac{x_1 + x_2 + x_3 + x_4}{4} = \frac{-7/2}{4} = -\frac78.$$
And at height $-\frac78$:
$$-\frac78 = 2x^4 + 7x^3 + 3x - 5 \implies 0 = 2x^4 + 7x^3 + 3x - \frac{33}{8}.$$

:::
:::
