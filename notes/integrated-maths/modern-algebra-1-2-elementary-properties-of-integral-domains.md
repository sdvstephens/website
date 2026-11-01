---
course: integrated-maths
chapter: 14
section: 1.2
title: Elementary Properties of Integral Domains
status: incomplete
source-pages: msn-2, msn-3, msn-4
---

:::note
- **Reflexive law:** $a = a$.
- **Symmetric law:** if $a = b$, then $b = a$.
- **Transitive law:** if $a = b$ and $b = c$, then $a = c$.
:::

:::proposition Rule 1
$(a + b)c = ac + bc$ for all $a, b, c$ in $D$.
:::

:::proof
For all $a, b, c$ in $D$:

| | Statement | Reason |
|---|---|---|
| 1. | $(a+b)c = c(a+b)$ | commutativity, mult. |
| 2. | $c(a+b) = ca + cb$ | distributivity |
| 3. | $(a+b)c = ca + cb$ | 1, 2, transitivity |
| 4. | $ca = ac$, $cb = bc$ | commutativity, mult. |
| 5. | $ca + cb = ac + bc$ | 4, uniqueness (of addition) |
| 6. | $(a+b)c = ac + bc$ | 3, 5, transitivity |
:::

:::proposition Rule 2
For all $a$ in $D$, $0 + a = a$ and $1a = a$.
:::

:::proof
For all $a$ in $D$:

| | Statement | Reason |
|---|---|---|
| 1. | $0 + a = a + 0$ | commutativity, addn. |
| 2. | $a + 0 = a$ | zero / identity |
| 3. | $0 + a = a$ | 1, 2, transitivity |

and

| | Statement | Reason |
|---|---|---|
| 1. | $1a = a1$ | commutativity, mult. |
| 2. | $a1 = a$ | unity |
| 3. | $1a = a$ | 1, 2, transitivity |
:::

:::proposition Rule 3 (Uniqueness of zero / identity)
If $a + z = a$, then $z = 0$.
:::

:::proof

| | Statement | Reason |
|---|---|---|
| 1. | $a + z = a$ | hypothesis |
| 2. | $a + 0 = a$ | zero |
| 3. | $a + z = a + 0$ | symmetric law (with 1, 2) |
| 4. | $z = 0$ | cancellation for addition (Rule 4) |

:::

:::proposition Rule 4
For all $a, b, c$ in $D$, $a + b = a + c$ implies $b = c$.
:::

:::proof
Let $a'$ be a solution of $a + x = 0$ (additive invertibility).

| | Statement | Reason |
|---|---|---|
| 1. | $a' + a = a + a' = 0$ | comm. addn., trans. law, addn. invert. |
| 2. | $a' + (a + b) = a' + (a + c)$ | hypothesis, uniqueness |
| 3. | $(a' + a) + b = (a' + a) + c$ | assoc. addn. |
| 4. | $0 + b = 0 + c$ | addn. inv. |
| 5. | $b = c$ | zero (Rule 2) |
:::

:::proposition Rule 5
For each $a$, $D$ contains one and only one solution $x$ of the equation $a + x = 0$.
:::

:::proof
Assume, for purposes of contradiction, that there is a second, unique solution $y$ to $a + x = 0$, so that $a + y = 0$. Then since $a + x = 0$ and $a + y = 0$, we have $a + x = a + y$, and by cancellation (Rule 4), $a + x = a + y$ implies $x = y$. We see that $x$ and $y$ are the same, and thus $y$ is not unique. $\Rightarrow\!\Leftarrow$
:::

:::proposition Rule 6
For each $a$ and $b$ in $D$, there exists one and only one $x$ in $D$ such that $a + x = b$.
:::

:::proof
If $a + x = b$, then $x = (-a) + b$. Since $x = (-a) + b$, we have $a + x = a + ((-a) + b) = (a + (-a)) + b = b$. We see that $x$ is unique by application of Rules 4 and 5, which is trivial.
:::

:::proposition Rule 7
For all $a$ in $D$, $a0 = 0 = 0a$.
:::

$\vdots$

We continue our rules and proofs.

## Exercises

:::exercise
Prove that the following hold in any integral domain:

(a) $(a + b)(c + d) = (ac + bc) + (ad + bd)$;

(b) $a + [b + (c + d)] = (a + b) + (c + d) = [(a + b) + c] + d$.

:::solution
(a)
$$
\begin{aligned}
(a + b)(c + d) &= (a + b)c + (a + b)d \\
&= (ac + bc) + (ad + bd),
\end{aligned}
$$
so $(a + b)(c + d) = (ac + bc) + (ad + bd)$.

(b) By associativity, at every step:
$$
\begin{aligned}
a + [b + (c + d)] &= a + [b + c + d] \\
&= a + b + c + d \\
&= (a + b) + (c + d) \\
&= a + b + c + d \\
&= [a + b + c] + d \\
&= [(a + b) + c] + d.
\end{aligned}
$$
:::
:::

:::exercise
If $u$ in $D$ has the property that $au = a$ for all $a$ in $D$, then $u = 1$.

:::solution
Assume, for contradiction, that $u \neq 1$. Then $au = a$ gives $au = a1$, and by the cancellation law, $au = a1$ implies $u = 1$. But we assumed $u \neq 1$, so we have a contradiction.
:::
:::

:::remark Correction
The cancellation law (ix) needs a nonzero factor, and the argument leaves $a$ unspecified. Take $a = 1$, which is nonzero by (vii): the hypothesis gives $1u = 1 = 1\cdot 1$, and cancelling the factor $1$ gives $u = 1$.
:::

:::exercise
$1 \cdot 1 = 1$.

:::solution
Let $a = 1$ and $b = 1$. If $ab = x$, then $a = xb^{-1}$ and $b = xa^{-1}$. We know that the inverse of $1$ is $1$ and that $a = b = 1$, so $a = xb^{-1}$ gives $1 = x1$, and $b = xa^{-1}$ gives $1 = x1$. From here notice our result is $1$, and by uniqueness $1 = x1 \Rightarrow \frac{1}{1} = x \Rightarrow 1 = x$. $\square$
:::
:::

:::remark Correction
An integral domain need not contain multiplicative inverses, so the steps $a = xb^{-1}$ and $b = xa^{-1}$ are unavailable. The result follows directly from postulate (vii): $a1 = a$ holds for every $a$, in particular for $a = 1$, which gives $1\cdot 1 = 1$.
:::

:::exercise
For all $a, b$ in $D$, $(-a)(-b) = ab$.

:::solution
Attempt, writing $(-a)(-b)$ as $(-1)(-1)(a)(b)$ and setting $ab = x$:
$$
\begin{aligned}
(-1)(-1)x &= x \qquad \text{(note: } (-1)^{-1} = \tfrac{-1}{1} = -1\text{)} \\
(-1)x &= x(-1)^{-1} \\
x(-1) &= x(-1) \qquad \text{by cancellation} \\
x1 &= x1 \\
x1 &= ab1 \\
ab &= ab
\end{aligned}
$$
:::
:::

:::remark Correction
The chain starts from $(-1)(-1)x = x$, which is the statement to be proved, ends with the identity $ab = ab$, and uses $(-1)^{-1}$, which an integral domain need not have; nothing is established. A correct proof: $(-a)b + ab = ((-a) + a)b = 0b = 0$ by Rule 1 and Rule 7, so $(-a)b = -(ab)$ by Rule 5. Applying this twice gives $(-a)(-b) = -(a(-b)) = -(-(ab)) = ab$, where $a(-b) = (-b)a = -(ba) = -(ab)$ by commutativity and the same identity, and $-(-y) = y$ by Rule 5 because $(-y) + y = 0$.
:::
