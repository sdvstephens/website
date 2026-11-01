---
course: math-55a
chapter: 2
section: N16
title: Axler Chapter 1 Exercises
status: incomplete
source-pages: m55a-6–m55a-7
---

## Subspaces (Axler 1C, Exercise 1)

:::exercise
For each of the following subsets of $\FF^3$, determine whether it is a subspace of $\FF^3$:

(a) $\{ (x_1, x_2, x_3) \in \FF^3 : x_1 + 2x_2 + 3x_3 = 0 \}$
:::

## Chapter 1 of Axler: pre-assessment

:::exercise Problem 1
Find $c, d$ with $(a + bi)(c + di) = 1$, i.e.
$$
1 = (ac - bd) + (ad + bc)i.
$$

:::solution
Comparing real and imaginary parts:
$$
\begin{cases}
ad + bc = 0, \\
ac - bd = 1.
\end{cases}
$$
From the first equation $ad = -bc$, so (for $a \neq 0$) $d = -\dfrac{bc}{a}$. Substituting into the second,
$$
ac + \frac{b^2 c}{a} = 1 \implies c\,\frac{a^2 + b^2}{a} = 1 \implies c = \frac{a}{a^2 + b^2}, \qquad d = \frac{-b}{a^2 + b^2}.
$$
(If $a = 0$ then $b \neq 0$, $c = 0$ and $d = -1/b$, which is the same formula.)
:::
:::

:::exercise Problem 2
Show that $\left( \dfrac{-1 + \sqrt{3}\, i}{2} \right)^3 = 1$.

:::solution
$$
\left( \frac{-1 + \sqrt{3}\, i}{2} \right)^3 = \frac{(-1 + \sqrt{3}\, i)^3}{8} = \frac{(-2 - 2\sqrt{3}\, i)(-1 + \sqrt{3}\, i)}{8} = \frac{6 + 2}{8} = 1.
$$
:::
:::

:::exercise Problem 3
Find two distinct square roots of $i$.

:::solution
$$
\sqrt{i} = \pm e^{i\pi/4} \implies \pm\left( \cos\tfrac{\pi}{4} + i \sin\tfrac{\pi}{4} \right) = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \quad\text{and}\quad -\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}.
$$
:::
:::

:::exercise Problem 4
Show that $\alpha + \beta = \beta + \alpha$ for all $\alpha, \beta \in \CC$.

:::solution
Given that this is a field this is not needed, but okay. Let $\alpha$ be $(a + bi)$ and $\beta$ be $(c + di)$. So then, via simple algebra, $(a + c) + (b + d)i$ holds for both if it holds for $\RR$.
:::
:::

:::exercise Problems 5 and 6
5: $(\alpha + \beta) + \lambda = \alpha + (\beta + \lambda)$ for all $\alpha, \beta, \lambda \in \CC$. 6: $\alpha(\beta\lambda) = (\alpha\beta)\lambda$.

:::solution
SAME! Fuck it, I’ll do it anyways.

**#5.** We use:

:::theorem
$(l + m) + n = l + (m + n)$ for all $l, m, n \in \RR$.
:::

Let $\alpha = a + bi$, $\beta = c + di$, $\lambda = j + ki$, for $a, b, c, d, j, k \in \RR$, so $\alpha, \beta, \lambda \in \CC$. Then both sides sum to
$$
(a + c + j) + (b + d + k)i. \qquad \square
$$

**#6.** $\alpha(\beta\lambda) = (\alpha\beta)\lambda$: the same follows from $\RR$.
:::
:::

:::exercise Problem 7
Show that for every $\alpha \in \CC$ there exists a unique $\beta$ with $\alpha + \beta = 0$.

:::solution
Assume that there exists $\lambda \neq \beta$ such that
:::
:::
