---
course: measure-theory
chapter: 0
section: 0.4
title: More about Well Ordering
source-pages: 13-15
---

Let $X$ be well ordered. If $\varnothing\neq A\subset X$, then $A$ has a minimal element, which is its maximal lower bound or **infimum** ($\inf A$); conversely, $A$ bounded above $\implies$ $A$ has a minimal upper bound $\eqqcolon$ **supremum** ($\sup A$).

If $x\in X$ we define the **initial segment** of $x$ to be

$$
I_x=\{y\in X\mid y<x\},
$$

and all $i\in I_x$ are called **predecessors** of $x$.

:::theorem The Principle of Transfinite Induction
Let $X$ be a well ordered set and $A\subset X$ such that $x\in A$ whenever $I_x\subset A$. Then $A=X$.
:::

:::proof
If $X\neq A$, let $x=\inf(X\setminus A)$. Then $I_x\subset A$ but $x\notin A$. (Contrapositive.)
:::

:::proposition
If $X$ is well ordered and $A\subset X$, then $J=\bigcup_{x\in A}I_x$ is either an initial segment or $X$ itself.
:::

:::proof
Let $J\neq X$, and let $b=\inf(X\setminus J)$. If there were $y\in J$ with $y>b$, we would have $y\in I_x$ for some $x\in A$, hence $b\in I_x\subset J$, a contradiction. Therefore $J\subset I_b$ and $I_b\subset J$, so $J=I_b$.
:::

:::proposition
If $X, Y$ are well ordered, then either $X$ is order isomorphic to $Y$, or $X$ is order isomorphic to an initial segment of $Y$, or $Y$ is order isomorphic to an initial segment of $X$.
:::

:::proposition
There is an uncountable well ordered set $\Omega$ such that $I_x$ is countable for each $x\in\Omega$. If $\Omega'$ is another set with these same properties, $\Omega'$ is order isomorphic to $\Omega$.
:::

:::proposition
Every countable subset of $\Omega$ has an upper bound.
:::

There is an order isomorphism $f\colon\NN\to O$, where $O\subset\Omega$, given by $f(1)=\inf\Omega$ and $f(n)=\inf\big(\Omega\setminus\{f(1),\dots,f(n-1)\}\big)$. So $O=I_\omega$ and $f\colon\NN\to I_\omega$ is an order isomorphism, where $\omega$ is the minimal element of $\Omega$ such that $I_\omega$ is infinite.

$\Omega^*\coloneqq\Omega\cup\{\omega_1\}$, the extension of $\Omega$ obtained by declaring $x<\omega_1$ for all $x\in\Omega$. $\omega_1$ is called the **first uncountable ordinal**.
