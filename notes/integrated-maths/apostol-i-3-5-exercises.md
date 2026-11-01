---
course: integrated-maths
chapter: 13
section: I 3.5
title: Exercises
source-pages: apostol-11
---

:::exercise 1
Prove Theorem I.22: if $a < b$ and $c < 0$, then $ac > bc$.

:::solution
Apply Theorem I.19 and reverse the $c > 0$ to become $c < 0$, and the $ac < bc$ to become $ac > bc$.
:::
:::

:::remark Correction
Reversing the inequalities is not a step the axioms allow, so this restates the theorem. A proof: $c < 0$ means $-c > 0$, so Theorem I.19 gives $a(-c) < b(-c)$, that is, $-(ac) < -(bc)$ by Theorem I.12. This says $(-(bc)) - (-(ac)) = ac - bc$ is positive, so $ac > bc$.
:::

:::exercise 2
Prove Theorem I.23.

:::solution
Apply Theorem I.22.
:::
:::

:::exercise 3
Prove Theorem I.24.

:::solution
By Axiom 8, we know that $x \in \RR^+$ or $-x \in \RR^+$, but not both. Set $x$ to $ab$; then $x \in \RR^+$ is true. Set $x$ to $(a \neq b)$; then $x \in \RR^+$ is also true.

:::
:::

:::remark Correction
This does not reach the conclusion. A proof: neither $a$ nor $b$ is $0$, since otherwise $ab = 0$ (Theorem I.6) and $0 \notin \RR^+$ (Axiom 9). If $a$ and $b$ had opposite signs, say $b < 0 < a$, then Theorem I.19 (multiplying $b < 0$ by $a > 0$) gives $ba < 0$, contradicting $ab > 0$ by Theorem I.16. So $a$ and $b$ are both positive or both negative.
:::

:::exercise 4
Prove Theorem I.25.

:::solution
Apply Theorem I.18.
:::
:::

:::exercise 5
Prove that $x^2 + 1 = 0$ has no solution $x \in \RR$.

:::solution
$x^2 + 1 = 0 \Rightarrow x^2 = -1 \Rightarrow x = \pm\sqrt{-1}$; there is no such number in $\RR$ that satisfies $x = \sqrt{-1}$.
:::
:::

:::remark Correction
The sentence ‘there is no real number equal to $\sqrt{-1}$’ is what has to be proved, so the argument is circular. A proof: if $x \neq 0$ then $x^2 > 0$ (Theorem I.20), and if $x = 0$ then $x^2 = 0$; either way $x^2 \ge 0$, so $x^2 + 1 \ge 1 > 0$ (Theorems I.18 and I.21), and therefore $x^2 + 1 \neq 0$.
:::

:::exercise 6
Prove that the sum of two negative numbers is negative.

:::solution
$-a + (-b) = -a - b$.
:::
:::

:::remark Correction
Rewriting the sum does not show that it is negative. A proof: if $a < 0$ and $b < 0$, then $-a$ and $-b$ are in $\RR^+$, so $(-a) + (-b)$ is in $\RR^+$ by Axiom 7. Since $(-a) + (-b) = -(a + b)$, this says $a + b < 0$.
:::

:::exercise 7
Given $a > 0$, then $1/a > 0$, and if $a < 0$, then $1/a < 0$.

:::solution
By Theorem I.21 we understand that $1 > 0$, thus: $a > 0$ and $1/a > 0 \Rightarrow (a)^{-1} > 0 \Rightarrow \sqrt[-1]{(a)^{-1}} \geq \sqrt[-1]{(0)} \Rightarrow 1 > 0$, which is true. Then, by Axiom 8, we know that for every real $x \neq 0$, either $x \in \RR^+$ or $-x \in \RR^+$. Then if $x = (1/a)$ and $(1/a) > 0$, then $-(1/a) < 0$, and by the method we see that $1/a$ must exist as a negative number not within $\RR^+$ but in $\RR^-$. By Axiom 3: $-(1/a) < 0 \Rightarrow -1/a < 0 \Rightarrow -1 < 0$, which is true.

:::
:::

:::remark Correction
The argument assumes the conclusion $1/a > 0$ at the start, and the ‘$(-1)$th root’ step is undefined, so nothing is proved. A proof: $1/a \neq 0$, since $a(1/a) = 1 \neq 0$. If $a > 0$ and $1/a < 0$, then Theorem I.22 applied to $0 < a$ and $1/a < 0$ gives $1 = a(1/a) < 0 \cdot (1/a) = 0$, contradicting Theorem I.21; so $1/a > 0$. If $a < 0$, then $-a > 0$, so $1/(-a) = -(1/a) > 0$ by the first case (because $(-a)(-(1/a)) = 1$), and therefore $1/a < 0$.
:::

:::exercise 8
Given $0 < a < b$, then $0 < b^{-1} < a^{-1}$.

:::solution
By Theorem I.8 we know that if $a \in \RR^+$ then $a^{-1} \in \RR^+$. Then by Axiom 9, $0 \notin \RR^+$, so it must be that $0 < a < b$ and $0 < a^{-1}$ and $0 < b^{-1}$. Also by Theorem I.8, $a^{-1}$ and $b^{-1}$ are $(1/a)$ and $(1/b)$, respectively. If $a < b$, then $(1/b) > (1/a)$ as $1/b \to 0$ greater than $1/a \to 0$. (How?)
:::
:::

:::remark Correction
Theorem I.8 says nothing about signs; the positivity of $a^{-1}$ and $b^{-1}$ is Exercise 7 above. The last step also has the inequality backwards: the claim is $1/b < 1/a$. A proof: $a^{-1} > 0$ and $b^{-1} > 0$ by Exercise 7, so $a^{-1}b^{-1} > 0$ by Axiom 7, and multiplying $a < b$ by $a^{-1}b^{-1}$ (Theorem I.19) gives $b^{-1} < a^{-1}$.
:::

:::exercise 9
Given $a \le b$ and $b \le c$, then $a \le c$.

:::solution
By the transitive property, we know that if $a = b$ and $b = c$, then $a = c$. Furthermore, by Theorem I.17, we know that if $a < b$ and $b < c$, then $a < c$. Since $\le$ means $=$ or $<$, these transitive properties apply to $\le$.
:::
:::

:::exercise 10
Given $a \le b$ and $b \le c$, and $a = c$, then $b = c$.

:::solution
Let us assume that $a \le b$ and $b \le c$ and $a = c$, but $b \neq c$. Then $b \le c$ must be $b < c$. This results in $a \le b < c$. But this cannot be: since $a = c$ and $c > b$, $a \le b$ cannot be true. Thus we have a contradiction.
:::
:::
