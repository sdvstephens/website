---
course: integrated-maths
chapter: 13
section: I 3.12
title: Exercises
status: incomplete
source-pages: apostol-15, apostol-16
---

(Sobbing and crying violently rn.)

:::exercise 1
If $x$ and $y$ are arbitrary real numbers with $x < y$, prove that there is at least one real $z$ satisfying $x < z < y$.

:::solution
Let $A$ and $B$ be subsets of $\RR$, and let $x \in A$ and $y \in B$, where $x < y$. Assume $A$ has a supremum of $z$ and $B$ has an infimum of $z$. Thus $\sup A = \inf B = z$. Thus $x < z < y$ exists. (Does this work?)

Sketch: $A \subseteq \RR$, $B \subseteq \RR$, with $\sup A = z$ and $\inf B = z$:
$$
A = \{x_1, x_2, \dots, z\}, \qquad B = \{z, y_1, y_2, \dots, y\}.
$$
(???)
:::
:::

:::remark Correction
Assuming sets with $\sup A = \inf B = z$ already assumes that such a $z$ exists, and even then only $x \le z \le y$ follows. A proof: let $z = (x + y)/2$. Adding $x$ and then $y$ to both sides of $x < y$ (Theorem I.18) gives $2x < x + y < 2y$, and multiplying by $\tfrac12 > 0$ (Theorem I.19) gives $x < z < y$.
:::

:::exercise 2
If $x \in \RR$, prove that there are integers $m$ and $n$ such that $m < x < n$.

:::solution
We know there must exist some $n$ such that $x < n$, by Theorem I.29. Assume $\RR$ is bounded below. Theorem I.27 tells us that there exists a greatest lower bound, say $b$. Then $b + 1$, being more than $b$, cannot be a lower bound for $\RR$. Thus there is at least one integer $p$ such that $p < b + 1$. For this $p$ we have $p - 1 < b$; this cannot be, because $b$ is a greatest lower bound. Thus we have a contradiction. Now we state that there exists a $y \in \RR$ such that $q \in \RR$ is $q < y$. We know this must be true because if not, there would be a greatest lower bound for $\RR$, contradicting what we just proved. Thus replace $q$ with $m$ and $y$ with $x$. We now have $m < x < n$.
:::
:::

:::remark Correction
The second half does not produce an integer $m < x$: it argues about real numbers below a real $y$, which is a different matter. A proof: by Theorem I.29 there are positive integers $n > x$ and $k > -x$. Then $m = -k$ is an integer with $m < x$, so $m < x < n$.
:::

:::exercise 3
If $x > 0$, prove that there is a positive integer $n$ such that $1/n < x$.

:::solution
In the previous proof we created a corollary which proved that there exists an $n$ such that $n > x$ when $x$ is some number in $\RR$. $(1/n)$ does not change this.
:::
:::

:::remark Correction
Having an integer $n > x$ does not by itself give $1/n < x$. A proof: Theorem I.29 applied to the real number $1/x$ gives a positive integer $n > 1/x$, and multiplying by $x/n > 0$ gives $x > 1/n$.
:::

:::exercise 4
If $x \in \RR$, prove that there is exactly one integer $n$ such that $n \le x < n + 1$. This $n$ is called the **greatest integer in $x$** and is denoted by $[x]$. For example, $[5] = 5$, $[5/2] = 2$, $[-8/3] = -3$.

(I’m honestly confused with what this is even saying.)
:::

:::exercise 5
If $x \in \RR$, prove that there is exactly one integer $n$ with $x \le n < x + 1$.

:::solution
We know $x < x + 1$; in terms of integers, $x + 1$ is one more than $x$, thus $x = n$. Assume $x < n < x + 1$ for integers. Then $x < n \Rightarrow x + 1 < n + 1$, but $n < x + 1$, thus this cannot be, and we must have one integer, where $x = n$.
:::
:::

:::remark Correction
Taking $n = x$ is wrong for a general real $x$: for $x = 1/2$ the integer is $n = 1$, and $x < n < x + 1$ can happen. A proof: by Exercise 4 there is an integer $k$ with $k \le -x < k + 1$, that is, $-k - 1 < x \le -k$, so $n = -k$ satisfies $x \le n < x + 1$. If $n$ and $n'$ both satisfy this, then $|n - n'| < 1$, and two integers that close are equal.
:::

:::exercise 6
If $x, y \in \RR$ with $x < y$, prove that there exists at least one rational $r$ such that $x < r < y$, and hence infinitely many.

:::solution
By Exercise 2 we know that there exist $m < x < n$, where $m, n \in \RR$. Thus the inverse of $x$ must be true, thus $x < r < y$, where there exist infinitely many $r \in \RR$.
:::
:::

:::remark Correction
The argument given does not prove the claim, and its $r \in \RR$ should be $r \in \QQ$ (for real $r$ the claim is Exercise 1). A proof: by Theorem I.30 choose a positive integer $n$ with $n(y - x) > 1$. Let $m = [nx] + 1$, where $[\,\cdot\,]$ is the greatest integer; then $nx < m \le nx + 1 < ny$, so $r = m/n$ is rational with $x < r < y$. Repeating the construction between $x$ and $r$, and so on, gives infinitely many.
:::

:::exercise 7
If $x$ is rational, $x \neq 0$, and $y$ is irrational, prove that $x + y$, $x - y$, $xy$, $x/y$ and $y/x$ are all irrational.

:::solution
(a) Assume $x + y$, where $y$ is irrational and $x$ is rational, is rational. Then $x + y \in \QQ$. Then by this we know $x \in \QQ$ and $y \in \QQ$, but that cannot be; thus $x + y$ results in an irrational number.

(b) $x - y = x + (-y)$. Follows from (a).
:::
:::

:::remark Correction
The step ‘so $y \in \QQ$’ needs a reason: $y = (x + y) - x$ is a difference of two rationals, hence rational. This contradicts $y$ being irrational.
:::

:::exercise 8
Is the sum of two irrational numbers always rational? Say that we add $a + b$, where $a, b \in \PP$ (irrational).
:::
