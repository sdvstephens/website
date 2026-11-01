---
course: integrated-maths
chapter: 13
section: I 3.3
title: Exercises
source-pages: apostol-08, apostol-09
---

:::exercise 1
Prove Theorem I.5: $a(b - c) = ab - ac$.

:::solution
By Axiom 3 we know that $a(b + c) = ab + ac$, and by Axiom 5 we know that $a(b - c) = a(b + (-c))$. Once again by Axiom 3 we distribute $a$ to $b$ and $a$ to $+(-c)$, resulting in $a(b + (-c)) = ab + (-ac)$, which by Axiom 5 is simply $ab - ac$. ($b - a = b + (-a)$ was previously shown by Theorem I.3.) $\square$
:::
:::

:::remark Correction
The step $a(-c) = -(ac)$ is Theorem I.12, which is proved later, so it is unavailable here. A proof from earlier results: $a(b - c) + ac = a\big((b - c) + c\big) = ab$ by Axiom 3 and Theorem I.2, so $a(b - c)$ is the number $x$ with $ac + x = ab$, and that number is $ab - ac$ by Theorem I.2.
:::

:::exercise 2
Prove Theorem I.6: $0 \cdot a = a \cdot 0 = 0$.

:::solution
By Axiom 4, $x + 0 = x$, thus $x + 0 + 0 + 0 = x$, and via elementary algebraic manipulation, $0 + 0 = 0$. Thus multiples of zero will always result in zero. $\square$
:::
:::

:::remark Correction
The argument shows $0 + 0 = 0$ and does not show $0 \cdot a = 0$. A proof: $0a + 0a = (0 + 0)a = 0a = 0a + 0$ by Axioms 1, 3 and 4, so $0a = 0$ by Theorem I.1; and $a \cdot 0 = 0 \cdot a$ by Axiom 1.
:::

:::exercise 3
Prove Theorem I.7: if $ab = ac$ and $a \neq 0$, then $b = c$.

:::solution
By Axiom 3 we can factor: $ab = ac \Rightarrow ab - ac = 0 \Rightarrow a(b - c) = 0$. By Theorem I.6 we know that $0 \cdot a = 0$. Thus either $a = 0$ or $b - c = 0$ in order to have $a(b - c) = 0$. We know $a \neq 0$, thus $b - c$ must be equal to $0$. By Axiom 5 we know that there is a real number $y$ such that $x + y = 0$, and by Theorem I.3 we know that $a - b = a + (-b)$. Thus $b - c = 0 \Rightarrow b + (-c) = 0 \Rightarrow b = c$. $\square$
:::
:::

:::remark Correction
The step ‘since $a(b - c) = 0$, either $a = 0$ or $b - c = 0$’ is Theorem I.11, the converse of Theorem I.6, and Exercise 7 below proves Theorem I.11 using the present result, so the argument is circular. A direct proof: since $a \neq 0$, Axiom 6 gives $y$ with $ay = 1$, and then $b = 1b = (ya)b = y(ab) = y(ac) = (ya)c = 1c = c$.
:::

:::exercise 4
Prove Theorem I.8.

*This does not seem fully right, double check/review.*

:::solution
Given $a \neq 0$, there is $x = \frac{b}{a}$ such that $ax = b$. By Axiom 6 we know that, given $x \neq 0$, there is a $y \in \RR$ such that $xy = 1$. For any $a$, in accordance with Axiom 6, the only possibility for $a$’s reciprocal such that $ay = 1$ is $y = 1/a$. Now multiplying by the reciprocal we get $b \cdot \frac{1}{a} = \frac{b}{a} = x$. $\square$
:::
:::

:::remark Correction
The argument assumes that the quotient $b/a$ exists, which is part of what has to be proved. A proof: by Axiom 6 there is $y$ with $ay = 1$; put $x = yb$, so that $ax = (ay)b = b$ and a solution exists. If also $ax' = b$, then $ax = ax'$ and $x = x'$ by Theorem I.7, so the solution is unique.
:::

:::exercise 5
Prove Theorem I.9.

:::solution
Proven via the proof of Theorem I.8. $\square$
:::
:::

:::exercise 6
Prove Theorem I.10: if $a \neq 0$, then $(a^{-1})^{-1} = a$.

:::solution
By Theorems I.8–I.9 we know that $yx = 1 \Rightarrow y = 1/x$. Then by Axiom 6 and Theorem I.8, $(a^{-1})^{-1} = \left(\frac{1}{a}\right)^{-1} = \left(\frac{a}{1}\right)$, and $a/1$ is a version of $a \cdot 1$, and by Axiom 4, $1a = a$, thus $a/1 = a$. Thus $(a^{-1})^{-1} = a/1 = a$. $\square$
:::
:::

:::remark Correction
The step $(1/a)^{-1} = a/1$ (flipping the fraction) is neither an axiom nor an earlier theorem. A proof: $a^{-1} \neq 0$, since otherwise $1 = aa^{-1} = a \cdot 0 = 0$ (Theorem I.6), contradicting $1 \neq 0$; and $a^{-1}a = 1$, so $a$ is a solution of $a^{-1}x = 1$. By the uniqueness in Theorem I.8, $(a^{-1})^{-1} = a$.
:::

:::exercise 7
Prove Theorem I.11: if $ab = 0$, then $a = 0$ or $b = 0$.

:::solution
From the proof of Theorem I.7 we learned that $a(b - c) = 0$ and thus either $a = 0$ or $b - c = 0$. Let us now define $x = b - c$; then $ax = 0$, and either $a = 0$ or $x = 0$. Substitute the variable $x$ for $b$: then if $ab = 0$, either $a = 0$ or $b = 0$ (or both). $\square$
:::
:::

:::remark Correction
This is circular: the step ‘either $a = 0$ or $b - c = 0$’ in the proof of Theorem I.7 is the theorem being proved here. A proof: if $a \neq 0$, then $b = 1b = (a^{-1}a)b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$ by Theorem I.6, so $a = 0$ or $b = 0$.
:::

:::exercise 8
Prove Theorem I.12: $(-a)b = -(ab)$ and $(-a)(-b) = ab$.

:::solution
By Axiom 3 we can extend $(-a)b$ to $(-1)(a)(b)$, then to $(-1)ab$, then to $-ab$. Furthermore, by Theorem I.4, $-(-a) = a$, and by Axiom 3, $(-1)(-1)(a) \to (-1 \cdot -1)(a) \to (1)(a)$. Thus
$$
(-a)(-b) = (-1)(a)(-1)(b) = (-1)(-1)(a)(b) = (1)ab,
$$
and by Axiom 4, $(1)ab = ab$. $\square$
:::
:::

:::remark Correction
The identities $-a = (-1)a$ and $(-1)(-1) = 1$ are instances of what is being proved, so they cannot be used. A proof: $(-a)b + ab = ((-a) + a)b = 0 \cdot b = 0$ by Axiom 3 and Theorem I.6, so $(-a)b = -(ab)$ by Theorem I.2. Then $(-a)(-b) = -(a(-b)) = -(-(ab)) = ab$, using this identity twice (with $a(-b) = (-b)a$ by Axiom 1) and Theorem I.4.
:::

:::exercise 9
Prove Theorem I.13: $(a/b) + (c/d) = (ad + bc)/(bd)$ if $b \neq 0$ and $d \neq 0$.

:::solution
By Axiom 4, Axiom 6 and Theorem I.8, we know that $a/a = 1$ and $1 \cdot a = a$. Thus
$$
(a/b)(d/d) + (c/d)(b/b) = (a/b)(1) + (c/d)(1).
$$
Now by Axiom 3, $(a/b)(d/d) = (ad)/(bd)$ and $(c/d)(b/b) = (cb)/(db)$. Since $db = bd$, we can combine $(ad)/(bd)$ and $(cb)/(db)$ to $(ad + cb)/(bd)$. $\square$
:::
:::

:::exercise 10
Prove Theorem I.14: $(a/b)(c/d) = (ac)/(bd)$ if $b \neq 0$ and $d \neq 0$.

:::solution
By Axiom 3 and Theorem I.13 we distribute $(a/b)$ across $(c/d)$, resulting in $(ac)/(bd)$. $\square$
:::
:::

:::remark Correction
There is no sum to distribute over here, and Exercise 9 used this theorem (for $(a/b)(d/d) = (ad)/(bd)$), so citing Theorem I.13 is circular. A proof: by Theorem I.9, $(a/b)(c/d) = (ab^{-1})(cd^{-1}) = (ac)(b^{-1}d^{-1})$, and $b^{-1}d^{-1} = (bd)^{-1}$ because $(bd)(b^{-1}d^{-1}) = (bb^{-1})(dd^{-1}) = 1$. So the product is $(ac)(bd)^{-1} = (ac)/(bd)$.
:::

:::exercise 11
Prove Theorem I.15: $(a/b)/(c/d) = (ad)/(bc)$ if $b$, $c$ and $d \neq 0$.

:::solution
By Axiom 6 we know that there is a $y$ such that $xy = 1$. For $c/d$, $y = d/c$, as this is the reciprocal (Theorems I.8 and I.9). Via Axiom 3 we can distribute, while noting by Axiom 4 that
$$
\frac{(a/b)(d/c)}{(c/d)(d/c)}
$$
does not change the value ($1 \cdot a = a$). Now via distribution,
$$
\frac{(a/b)(d/c)}{(c/d)(d/c)} = \frac{(ad)/(bc)}{(cd)/(dc)}.
$$
The denominator is of the form $xy = 1$, thus it becomes $\big((ad)/(bc)\big)/1$, which, as noted in the proof of Theorem I.10, is simply $(ad)/(bc)$. $\square$
:::
:::

:::exercise 12
Prove that $-0 = 0$.

:::solution
Given Axiom 4 and Theorem I.6, we know that $a \cdot 0 = 0$. Furthermore, via Theorem I.3, we know that $-a = (-1)(a)$. Thus we may rewrite $-0 = 0$ as $(-1)(0) = 0$. Knowing Theorem I.6, we get $0 = 0$, which is true. $\square$
:::
:::

:::remark Correction
The identity $-a = (-1)a$ follows from Theorem I.12 (put $a = 1$ there), and Theorem I.3 says something different, namely $b - a = b + (-a)$. A more direct proof: $0 + 0 = 0$ by Axiom 4, so $0$ is the number $x$ with $0 + x = 0$, and that number is $-0$ by Theorem I.2. Hence $-0 = 0$.
:::

:::exercise 13
Prove that $1^{-1} = 1$.

:::solution
Given Theorem I.8, we know that $1^{-1} = 1/1$. Then, by Axiom 4 and Theorem I.10, $1/1 = 1$. $\square$
:::
:::

:::exercise 14
Prove that $0$ has no reciprocal.

:::solution
By Theorem I.8 we know that $0^{-1} = 1/0$, but this cannot be, since $1/a$ is only defined when $a \neq 0$, by definition. Thus we form a contradiction. $\square$
:::
:::

:::remark Correction
The remark that $1/a$ is only defined when $a \neq 0$ restates the claim. A proof: for every $y$, $0 \cdot y = 0$ (Theorem I.6), and $0 \neq 1$ (Apostol’s Axiom 4 provides two distinct numbers $0$ and $1$), so no $y$ satisfies $0 \cdot y = 1$.
:::

:::exercise 15
Prove that $-(a + b) = -a - b$.

:::solution
By Axiom 3:
$$
-(a + b) = (-1)(a + b) = (-1)(a) + (-1)(b) = -a - b. \qquad \square
$$
:::
:::

:::exercise 16
Prove that $-(a - b) = -a + b$.

:::solution
By Axiom 3, $-(a - b) = -a - (-b)$, and by Theorem I.4 we know that $-(-b) = +b$; thus $-(a - b) = -a + b$. $\square$
:::
:::

:::exercise 17
Prove that $(a - b) + (b - c) = a - c$.

:::solution
By Axiom 2 we rearrange $(a - b) + (b - c)$ to $a + (b - b) - c = a - c$. $\square$
:::
:::

:::exercise 18
Prove that if $a \neq 0$ and $b \neq 0$, then $(ab)^{-1} = a^{-1}b^{-1}$.

:::solution
By Theorem I.8 we know that $(ab)^{-1}$ is $1/(ab)$ and $a^{-1}b^{-1}$ is $(1/a)(1/b)$; then by Axiom 3 and Theorem I.14 we get $1/(ab)$. $\square$
:::
:::

:::exercise 19
Prove that $-(a/b) = (-a)/b = a/(-b)$ if $b \neq 0$.

:::solution
By Axiom 3 and Theorems I.8 and I.14 we find that $-(a/b) = (-1)(a/b) = (-1)(a)(1/b)$, and $(-1)$ can be distributed to $(a)$ *or* $(1/b)$. $\square$
:::
:::

:::exercise 20
Prove that $(a/b) - (c/d) = (ad - bc)/(bd)$ if $b \neq 0$ and $d \neq 0$.

:::solution
By Theorems I.3 and I.13,
$$
(a/b) - (c/d) = (a/b) + (-c/d) = (ad - bc)/(bd).
$$
$b(-c)$ becoming $-cb$ is shown by Axiom 1. $\square$
:::
:::
