---
course: measure-theory
chapter: 0
section: 0.3
title: Cardinality
source-pages: 11-13
---

For $|X|$ and $|Y|$ we use $\operatorname{card}(X)$ and $\operatorname{card}(Y)$.

- $|X|\le|Y|\iff$ there is an injection $f\colon X\hookrightarrow Y$;
- $|X|=|Y|\iff$ there is a bijection $f\colon X\to Y$;
- $|X|\ge|Y|\iff$ there is a surjection $f\colon X\twoheadrightarrow Y$.

$<$ and $>$ are for the strict versions: an injection (resp. surjection) but no bijection.

:::proposition
$|X|\le|Y|\iff|Y|\ge|X|$.
:::

:::proof
Let $f\colon X\hookrightarrow Y$ be injective. Pick $x_0\in X$ and define $g\colon Y\to X$ by $g(y)=f^{-1}(y)$ if $y\in f(X)$, $g(y)=x_0$ otherwise. Then $g$ is surjective. Conversely, if $g\colon Y\to X$ is surjective, the sets $g^{-1}(\{x\})$, $x\in X$, are nonempty and disjoint, so any $f\in\prod_{x\in X}g^{-1}(\{x\})$ is an injection $X\to Y$.
:::

:::proposition
For any $X,Y\neq\varnothing$, either $\operatorname{card}(X)\ge\operatorname{card}(Y)$ or $\operatorname{card}(X)\le\operatorname{card}(Y)$.
:::

:::theorem Schröder–Bernstein
If $|X|\le|Y|$ and $|Y|\le|X|$, then $|X|=|Y|$.
:::

:::proposition
For any $X$, $|X|<|\sP(X)|$.
:::

:::definition
$X$ is **countable** if $\operatorname{card}(X)\le\operatorname{card}(\NN)$.
:::

:::proposition
1. $X$ countably infinite $\implies |X|=|\NN|$.
2. $X, Y$ countable $\implies X\times Y$ countable (and conversely when $X, Y\neq\varnothing$).
3. If $A$ is countable and $X_\alpha$ is countable for every $\alpha\in A$, then $\bigcup_{\alpha\in A}X_\alpha$ is countable.
:::

:::corollary
$\ZZ$ and $\QQ$ are countable.
:::

$X$ is said to have the **cardinality of the continuum** if $\operatorname{card}(X)=\operatorname{card}(\RR)$. We use $\mathfrak{c}$ as our notation for $\operatorname{card}(\RR)$. So $|X|=\mathfrak{c}\iff|X|=|\RR|$.

:::proposition
$\operatorname{card}(\sP(\NN))=\mathfrak{c}$.
:::

:::proof
If $A\subset\NN$, define $f(A)\in\RR$ by

$$
f(A)=\begin{cases}
\displaystyle\sum_{n\in A}2^{-n} & \text{if } \NN\setminus A \text{ is infinite},\\[2ex]
\displaystyle 1+\sum_{n\in A}2^{-n} & \text{if } \NN\setminus A \text{ is finite};
\end{cases}
$$

thus $f$ is injective. Now define $g\colon\sP(\ZZ)\to\RR$ by

$$
g(A)=\begin{cases}
\displaystyle\log\sum_{n\in A}2^{-n} & \text{if } A \text{ is nonempty and bounded below},\\[2ex]
0 & \text{else}.
\end{cases}
$$

Then $g\colon\sP(\ZZ)\to\RR$ is surjective, so $|\sP(\NN)|=\mathfrak{c}$ by Schröder–Bernstein, since $|\sP(\NN)|=|\sP(\ZZ)|$.
:::

:::corollary
If $|X|\ge\mathfrak{c}$ then $X$ is uncountable.
:::

:::proposition
1. If $|X|\le\mathfrak{c}$ and $|Y|\le\mathfrak{c}$, then $|X\times Y|\le\mathfrak{c}$.
2. If $\operatorname{card}(A)\le\mathfrak{c}$ and $\operatorname{card}(X_\alpha)\le\mathfrak{c}$ for all $\alpha\in A$, then $\operatorname{card}\big(\bigcup_{\alpha\in A}X_\alpha\big)\le\mathfrak{c}$.
:::
