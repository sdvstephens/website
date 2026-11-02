---
course: integrated-maths
chapter: 10
section: 10.15
title: Vieta’s Formulas with Nonreal Roots
---

When a polynomial has real coefficients, each nonreal root $a + bi$ comes with its conjugate $a - bi$, and Vieta’s formulas then pin down the remaining roots and coefficients.

:::problem
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
:::solution Try again!
$r + (1 + 2i) + (1 - 2i) = 0 \to r = -2$. So
$$a = (-2)(1 + 2i) + (-2)(1 - 2i) + (1 + 2i)(1 - 2i) = -2 - 4i - 2 + 4i + 1 + 4 = 1 \;\checkmark$$
and
$$b = -(-2)(1 + 2i)(1 - 2i) = 10 \;\checkmark$$
So $x^3 + x + 10 = 0$.
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
:::solution Second attempt
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

## Exercises

:::exercise
$a, b \in \RR$, and $p(x) \in \RR[x]$ is $p(x) = x^3 + ax^2 - 4x + b = 0$, with $r_1 = 1 + i$. Solve for $r_2$, $r_3$.
:::solution
So $r_1 = 1 + i \Rightarrow r_2 = 1 - i \Rightarrow$
$$-4 = (1 + i)(1 - i) + r_3(1 + i) + r_3(1 - i) = 2 + r_3 + r_3i + r_3 - r_3i,$$
so $2 + 2r_3 = -4$, $1 + r_3 = -2$, $r_3 = -3$.
:::
:::
