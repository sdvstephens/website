---
course: measure-theory
chapter: 0
section: 0.5
title: The Extended Real Number System
source-pages: 16-18
---

We now move on to the reals.

The **extended reals**: $\ol{\RR}\coloneqq\RR\cup\{-\infty,\infty\}$, by letting $-\infty<x<\infty$ for all $x\in\RR$. LUB $=\sup$, GLB $=\inf$, and for $A=\{a_1,\dots,a_n\}$, $\max(a_1,\dots,a_n)=\sup A$ and $\min(a_1,\dots,a_n)=\inf A$.

Every sequence $\{x_n\}$ in $\ol{\RR}$ has a limit superior and a limit inferior:

$$
\limsup x_n=\inf_{k\ge1}\Big(\sup_{n\ge k}x_n\Big)
\quad\text{and}\quad
\liminf x_n=\sup_{k\ge1}\Big(\inf_{n\ge k}x_n\Big),
$$

and $\{x_n\}$ converges iff $\limsup x_n=\liminf x_n$.

Let $f\colon\RR\to\ol{\RR}$. Then

$$
\limsup_{x\to a}f(x)=\inf_{\delta>0}\Big(\sup_{0<|x-a|<\delta}f(x)\Big).
$$

**Infinite arithmetic:** $x\pm\infty=\pm\infty$ for all $x\in\RR$, and $\infty+\infty=\infty$, $-\infty-\infty=-\infty$; $x(\pm\infty)=\pm\infty$ for all $x>0$, $x(\pm\infty)=\mp\infty$ for all $x<0$; $0(\pm\infty)=0$; but $-\infty+\infty$ is undefined.

For sums of uncountably many nonnegative numbers: if $X$ is an arbitrary set and $f\colon X\to[0,\infty)$, we define $\sum_{x\in X}f(x)$ to be the supremum of its finite partial sums:

$$
\sum_{x\in X}f(x)=\sup\Big\{\sum_{x\in F}f(x)\ \Big|\ F\subset X,\ F \text{ finite}\Big\}.
$$

:::proposition
Given $f\colon X\to[0,\infty]$, let $A=\{x\mid f(x)>0\}$. If $A$ is uncountable, then $\sum_{x\in X}f(x)=\infty$. If $A$ is countably infinite, then $\sum_{x\in X}f(x)=\sum_1^\infty f(g(n))$, where $g\colon\NN\to A$ is any bijection and the sum on the right is an ordinary infinite series.
:::

:::proof
$A=\bigcup_1^\infty A_n$ with $A_n=\{x\mid f(x)>1/n\}$. $A$ uncountable $\implies$ some $A_n$ must be uncountable $\implies$ there are arbitrarily large partial sums $\sum_{x\in F}f(x)$ with $F\subset A_n$, $F$ finite.

$A$ countably infinite: take a bijection $g\colon\NN\to A$ and set $B_N=g(\{1,\dots,N\})$. Every finite $F\subset A$ is contained in some $B_N$, so

$$
\sum_{x\in F}f(x)\le\sum_1^N f(g(n))\le\sum_{x\in X}f(x).
$$

Take the sup over $N$:

$$
\sum_{x\in F}f(x)\le\sum_1^\infty f(g(n))\le\sum_{x\in X}f(x).
$$

Finally take the sup over $F$.
:::

For functions $f, g$ into $\ol{\RR}$: $f\le g\iff f(x)\le g(x)$ for all $x$, and $\max(f,g)$ is the function whose value at $x$ is $\max(f(x),g(x))$. If $X\subset\ol{\RR}$ and $f\colon X\to\ol{\RR}$, then $f$ is **increasing** if $f(x)\le f(y)$ whenever $x\le y$, and **strictly increasing** if $f(x)<f(y)$ whenever $x<y$; the inverse for **decreasing**/**strictly decreasing**. A function which is either increasing or decreasing is called **monotone**.

For $x\in\CC$ or $\RR$, $|x|$ is the absolute value or **modulus**. For points $x=(x_1,\dots,x_n)\in\CC^n$ or $\RR^n$, $|x|$ is the **Euclidean norm**:

$$
|x|=\Big[\sum_1^n|x_j|^2\Big]^{1/2}.
$$

Recall $U\subset\RR$ is **open** if for every $x\in U$, $U$ includes an interval centered at $x$ (an **open ball** or **neighborhood**).

:::proposition
Every open set in $\RR$ is a countable disjoint union of open intervals.
:::
