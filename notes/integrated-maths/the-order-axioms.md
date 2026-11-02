---
course: integrated-maths
chapter: 17
section: 17.3
title: The Order Axioms
---

The second group of axioms orders the real numbers.

## Positive numbers and the three axioms

These $3$ axioms allow us to establish “ordering.” This allows us to tell if one real number ($\RR$) is larger or smaller than another. We want a new axiom of “positiveness” and then define “less than” or “more than” in axiomatic-positiveness terms. Let us say that there is a subset $\RR^+$ of $\RR$ ($\RR^+ \subset \RR$) called the set of **positive numbers**.

:::definition Axiom 7
If $x$ and $y$ are in $\RR^+$, so are $x + y$ and $xy$.
:::

:::definition Axiom 8
For every real $x \neq 0$, either $x \in \RR^+$ or $-x \in \RR^+$, but not both.
:::

:::definition Axiom 9
$0 \notin \RR^+$.
:::

## Inequalities

:::definition
**Less than**, **greater than**, **less than or equal to**, **greater than or equal to**, respectively:

| | |
|---|---|
| $x < y$ | $y - x$ is positive |
| $y > x$ | $x < y$ |
| $x \le y$ | either $x < y$ or $x = y$ |
| $y \ge x$ | $x \le y$ |
:::

$x > 0$ if $x$ is positive, and $x < 0$ if $x$ is negative. If $x \ge 0$, $x$ is **nonnegative**, and if $x \le 0$, $x$ is **nonpositive**. “$x < y$ and $y < z$” can be rewritten as $x < y < z$. These axioms and definitions result in more theorems:

:::theorem Theorem I.16 (Trichotomy law)
For arbitrary real numbers $a$ and $b$, exactly one of the three relations $a < b$, $b < a$, $a = b$ holds.
:::

:::theorem Theorem I.17 (Transitive law)
If $a < b$ and $b < c$, then $a < c$.
:::

:::theorem Theorem I.18
If $a < b$, then $a + c < b + c$.
:::

:::theorem Theorem I.19
If $a < b$ and $c > 0$, then $ac < bc$.
:::

:::theorem Theorem I.20
If $a \neq 0$, then $a^2 > 0$.
:::

:::theorem Theorem I.21
$1 > 0$.
:::

:::theorem Theorem I.22
If $a < b$ and $c < 0$, then $ac > bc$.
:::

:::theorem Theorem I.23
If $a < b$, then $-a > -b$. In particular, if $a < 0$, then $-a > 0$.
:::

:::theorem Theorem I.24
If $ab > 0$, then both $a$ and $b$ are positive or both are negative.
:::

:::theorem Theorem I.25
If $a < c$ and $b < d$, then $a + b < c + d$.
:::

(Scratch for Theorem I.25: $a + (b < d) < c + (d > b)$.)

Theorems I.22–I.25 are proved in the exercises at the end of this page, along with some further results.

## Exercises

:::exercise
Prove Theorem I.22: if $a < b$ and $c < 0$, then $ac > bc$.

:::solution
Apply Theorem I.19 and reverse the $c > 0$ to become $c < 0$, and the $ac < bc$ to become $ac > bc$.
:::
:::

:::remark Correction
Reversing the inequalities is not a step the axioms allow, so this restates the theorem. A proof: $c < 0$ means $-c > 0$, so Theorem I.19 gives $a(-c) < b(-c)$, that is, $-(ac) < -(bc)$ by Theorem I.12. This says $(-(bc)) - (-(ac)) = ac - bc$ is positive, so $ac > bc$.
:::

:::exercise
Prove Theorem I.23.

:::solution
Apply Theorem I.22.
:::
:::

:::exercise
Prove Theorem I.24.

:::solution
By Axiom 8, we know that $x \in \RR^+$ or $-x \in \RR^+$, but not both. Set $x$ to $ab$; then $x \in \RR^+$ is true. Set $x$ to $(a \neq b)$; then $x \in \RR^+$ is also true.

:::
:::

:::remark Correction
This does not reach the conclusion. A proof: neither $a$ nor $b$ is $0$, since otherwise $ab = 0$ (Theorem I.6) and $0 \notin \RR^+$ (Axiom 9). If $a$ and $b$ had opposite signs, say $b < 0 < a$, then Theorem I.19 (multiplying $b < 0$ by $a > 0$) gives $ba < 0$, contradicting $ab > 0$ by Theorem I.16. So $a$ and $b$ are both positive or both negative.
:::

:::exercise
Prove Theorem I.25.

:::solution
Apply Theorem I.18.
:::
:::

:::exercise
Prove that $x^2 + 1 = 0$ has no solution $x \in \RR$.

:::solution
$x^2 + 1 = 0 \Rightarrow x^2 = -1 \Rightarrow x = \pm\sqrt{-1}$; there is no such number in $\RR$ that satisfies $x = \sqrt{-1}$.
:::
:::

:::remark Correction
The sentence ‘there is no real number equal to $\sqrt{-1}$’ is what has to be proved, so the argument is circular. A proof: if $x \neq 0$ then $x^2 > 0$ (Theorem I.20), and if $x = 0$ then $x^2 = 0$; either way $x^2 \ge 0$, so $x^2 + 1 \ge 1 > 0$ (Theorems I.18 and I.21), and therefore $x^2 + 1 \neq 0$.
:::

:::exercise
Prove that the sum of two negative numbers is negative.

:::solution
$-a + (-b) = -a - b$.
:::
:::

:::remark Correction
Rewriting the sum does not show that it is negative. A proof: if $a < 0$ and $b < 0$, then $-a$ and $-b$ are in $\RR^+$, so $(-a) + (-b)$ is in $\RR^+$ by Axiom 7. Since $(-a) + (-b) = -(a + b)$, this says $a + b < 0$.
:::

:::exercise
Given $a > 0$, then $1/a > 0$, and if $a < 0$, then $1/a < 0$.

:::solution
By Theorem I.21 we understand that $1 > 0$, thus: $a > 0$ and $1/a > 0 \Rightarrow (a)^{-1} > 0 \Rightarrow \sqrt[-1]{(a)^{-1}} \geq \sqrt[-1]{(0)} \Rightarrow 1 > 0$, which is true. Then, by Axiom 8, we know that for every real $x \neq 0$, either $x \in \RR^+$ or $-x \in \RR^+$. Then if $x = (1/a)$ and $(1/a) > 0$, then $-(1/a) < 0$, and by the method we see that $1/a$ must exist as a negative number not within $\RR^+$ but in $\RR^-$. By Axiom 3: $-(1/a) < 0 \Rightarrow -1/a < 0 \Rightarrow -1 < 0$, which is true.

:::
:::

:::remark Correction
The argument assumes the conclusion $1/a > 0$ at the start, and the ‘$(-1)$th root’ step is undefined, so nothing is proved. A proof: $1/a \neq 0$, since $a(1/a) = 1 \neq 0$. If $a > 0$ and $1/a < 0$, then Theorem I.22 applied to $0 < a$ and $1/a < 0$ gives $1 = a(1/a) < 0 \cdot (1/a) = 0$, contradicting Theorem I.21; so $1/a > 0$. If $a < 0$, then $-a > 0$, so $1/(-a) = -(1/a) > 0$ by the first case (because $(-a)(-(1/a)) = 1$), and therefore $1/a < 0$.
:::

:::exercise
Given $0 < a < b$, then $0 < b^{-1} < a^{-1}$.

:::solution
By Theorem I.8 we know that if $a \in \RR^+$ then $a^{-1} \in \RR^+$. Then by Axiom 9, $0 \notin \RR^+$, so it must be that $0 < a < b$ and $0 < a^{-1}$ and $0 < b^{-1}$. Also by Theorem I.8, $a^{-1}$ and $b^{-1}$ are $(1/a)$ and $(1/b)$, respectively. If $a < b$, then $(1/b) > (1/a)$ as $1/b \to 0$ greater than $1/a \to 0$. (How?)
:::
:::

:::remark Correction
Theorem I.8 says nothing about signs; the positivity of $a^{-1}$ and $b^{-1}$ is the previous exercise. The last step also has the inequality backwards: the claim is $1/b < 1/a$. A proof: $a^{-1} > 0$ and $b^{-1} > 0$ by the previous exercise, so $a^{-1}b^{-1} > 0$ by Axiom 7, and multiplying $a < b$ by $a^{-1}b^{-1}$ (Theorem I.19) gives $b^{-1} < a^{-1}$.
:::

:::exercise
Given $a \le b$ and $b \le c$, then $a \le c$.

:::solution
By the transitive property, we know that if $a = b$ and $b = c$, then $a = c$. Furthermore, by Theorem I.17, we know that if $a < b$ and $b < c$, then $a < c$. Since $\le$ means $=$ or $<$, these transitive properties apply to $\le$.
:::
:::

:::exercise
Given $a \le b$ and $b \le c$, and $a = c$, then $b = c$.

:::solution
Let us assume that $a \le b$ and $b \le c$ and $a = c$, but $b \neq c$. Then $b \le c$ must be $b < c$. This results in $a \le b < c$. But this cannot be: since $a = c$ and $c > b$, $a \le b$ cannot be true. Thus we have a contradiction.
:::
:::
