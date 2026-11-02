---
course: integrated-maths
chapter: 11
section: 11.4
title: Mathematical Induction
---

The formulas on the previous pages, for the $n$th term and for the sum of the first $n$ terms, are claims about every positive integer $n$. Mathematical induction is a method for proving claims of that kind.

We know there is no largest integer, because when we add $1$ to an integer $k$ we get $k + 1$.

Here is a family of assertions $A(n)$, one for each positive integer $n$, with the first three written out:

$$
\begin{aligned}
A(1)&: \ 0 < \tfrac{1^3}{3} \\
A(2)&: \ 1^2 < \tfrac{2^3}{3} \\
A(3)&: \ 1^2 + 2^2 < \tfrac{3^3}{3}
\end{aligned}
\qquad\qquad
A(n): \ 1^2 + 2^2 + \dots + (n-1)^2 < \frac{n^3}{3}
$$

## The principle of mathematical induction

**Induction:**

1. Prove $A(n)$ for $n = 1$.
2. Show that if it is true for any $n$, then it is true for $n + 1$.
3. Thus it is true for all positive integers.

:::theorem Principle of mathematical induction
Let $A(n)$ be an assertion involving an integer $n$. We conclude that $A(n)$ is true for every $n \ge n_1$ if we can:

(a) prove $A(n_1)$ is true;

(b) let $k$ be an arbitrary but fixed integer $\ge n_1$, assume that $A(k)$ is true, and prove that $A(k + 1)$ is true.
:::

$n_1$ is usually $1$.
