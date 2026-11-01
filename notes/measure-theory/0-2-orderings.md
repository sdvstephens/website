---
course: measure-theory
chapter: 0
section: 0.2
title: Orderings
source-pages: 7-11
---

:::definition Partial ordering
Let $X\neq\varnothing$ and $R$ a relation on $X$. We say $R$ is a **partial ordering** if:

- (i) $xRy$ and $yRz\implies xRz$;
- (ii) $xRy$ and $yRx\implies x=y$;
- (iii) $xRx$ for all $x$.

A set with a partial ordering is also called a “**poset**”. If $R$ also satisfies “(iv) if $x,y\in X$ then either $xRy$ or $yRx$“, then $R$ is called a **total (or linear) ordering**.
:::

:::example
If $E$ is a set, then $\subset$ induces a partial ordering on $\sP(E)$; and $\RR$ is linearly ordered by its usual ordering.
:::

A partial ordering on $X$ gives a partial ordering on all nonempty subsets of $X$. Two partially ordered sets $X, Y$ are said to be **order isomorphic** if there exists a bijection $f\colon X\to Y$ such that $x_1\le x_2\iff f(x_1)\le f(x_2)$.

If $X$ is partially ordered by $\le$, a **maximal** (**minimal**) **element** of $X$ is an $x\in X$ such that the only $y\in X$ satisfying $x\le y$ ($y\le x$) is $x$ itself. Max/min elements needn’t exist, and needn’t be unique unless the ordering is linear.

If $E\subseteq X$, an **upper bound** (**lower bound**) for $E$ is an element $x\in X$ such that $y\le x$ ($x\le y$) for all $y\in E$. $x$ may or may not be in $E$. Unless the ordering is total, a maximal (minimal) element of $E$ needn’t be an upper (lower) bound for $E$.

If $X$ is totally ordered by $\le$ and every nonempty subset of $X$ has a unique minimal element, $X$ is said to be **well ordered** by $\le$, and $\le$ is called a **well ordering** on $X$. For example, $\NN$ is well ordered by its natural ordering.

:::theorem The Hausdorff Maximal Principle
Every partially ordered set has a maximal linearly ordered subset.
:::

That is: if $(X,\le)$ is a poset, then there exists $E\subset X$ such that $(E,\le)$ is linearly ordered and there is no $A\subset X$ with $A\supsetneq E$ that is linearly ordered by $\le$.

:::lemma Zorn’s Lemma
If $X$ is a poset and every linearly ordered subset of $X$ has an upper bound, then $X$ has a maximal element.
:::

:::example Conceptual example
$\big(\{1,2,3,4\},\le\big)$. Its subsets:

| 1 element | 2 elements | 3 elements | 4 or 0 elements |
|---|---|---|---|
| $\{1\}$ | $\{1,2\}$ | $\{1,2,3\}$ | $\{1,2,3,4\}\leftarrow E$ |
| $\{2\}$ | $\{2,3\}$ | $\{1,2,4\}$ | $\varnothing$ |
| $\{3\}$ | $\{3,4\}$ | $\{1,3,4\}$ | |
| $\{4\}$ | $\{1,4\}$ | $\{2,3,4\}$ | |
| | $\{1,3\}$ | | |
| | $\{2,4\}$ | | |

$E=\{1,2,3,4\}$ is marked as the maximal linearly ordered subset.
:::

:::theorem
Every nonempty set $X$ can be well ordered.
:::

:::proof
Let $\sW$ be the collection of well orderings of subsets of $X$, regarded as subsets of $X\times X$. We partially order $\sW$ by declaring $W_1\le W_2$ iff $W_1\subset W_2$ and the domain of $W_1$ is an initial segment of $W_2$. By Zorn there exists a maximal element. This maximal element must be a well ordering of $X$ itself, since if $\le$ is a well ordering on $E\subsetneq X$ and $x_0\in X\setminus E$, then $\le$ can be extended to a well ordering on $E\cup\{x_0\}$ by declaring $x\le x_0$ for all $x\in E$.

:::

:::theorem The Axiom of Choice
If $\{X_\alpha\}_{\alpha\in A}$ is a nonempty collection of nonempty sets, then $\prod_{\alpha\in A}X_\alpha$ is nonempty.
:::

:::proof
Let $X=\bigcup_{\alpha\in A}X_\alpha$, pick a well ordering $\le$ on $X$, and for $\alpha\in A$ let $f(\alpha)$ be the minimal element of $X_\alpha$. Then $f\in\prod_{\alpha\in A}X_\alpha$.
:::

:::corollary
If $\{X_\alpha\}_{\alpha\in A}$ is a disjoint collection of nonempty sets, then there exists a set $Y\subset\bigcup_{\alpha\in A}X_\alpha$ such that $Y\cap X_\alpha$ contains precisely one element for every $\alpha\in A$.
:::

:::proof
$Y=f(A)$ with $f\in\prod_{\alpha\in A}X_\alpha$.
:::
