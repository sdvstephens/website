---
course: math-55b
chapter: 1
section: N3
title: Sequences and Limits
source-pages: 4-6
---

:::definition Limit
$p_n$ (as $n\to\infty$) **converges** to a limit $p\in X$ (written $p_n\to p$, or $\lim p_n=p$) iff for all $\varepsilon>0$ there exists $N\in\NN$ such that for all $n\ge N$, $d(p,p_n)<\varepsilon$.
:::

:::definition Cauchy sequence
A sequence in a metric space is a **Cauchy sequence** if for all $\varepsilon>0$ there exists $N\in\NN$ such that for all $n,m\ge N$, $d(p_n,p_m)<\varepsilon$.
:::

:::question
If a sequence converges then it is Cauchy, but not necessarily vice versa. Why?
:::

:::definition Complete
$(X,d)$ is **complete** if every Cauchy sequence converges.
:::

:::example
$\RR$ is complete; $\QQ$ with the usual distance is not complete.
:::

:::example
$e\defeq\displaystyle\sum_{k=0}^{\infty}\frac{1}{k!}$: show that the partial sums
$$p_n=\sum_{k=0}^{n}\frac{1}{k!}$$
are Cauchy.
:::

$\RR$ is the completion of $\QQ$ (all the limits of sequences that are Cauchy).

:::proposition
$p_n\to p$ in a metric space iff for every open $S\ni p$ there is $N$ such that for all $n\ge N$, $p_n\in S$.
:::

## Closed sets

:::definition Closed
$Z\subset X$ is **closed** if $X-Z$ is open.
:::

:::note
Most subsets are neither closed nor open. Closed $\neq$ not open.
:::

:::proposition
If a set $Z$ is closed, then given any sequence $(p_n)_{n\ge1}$ in $Z$ which converges to $p\in X$, we have $p\in Z$. (?)
:::
