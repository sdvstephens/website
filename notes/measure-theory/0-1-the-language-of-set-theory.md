---
course: measure-theory
chapter: 0
section: 0.1
title: The Language of Set Theory
source-pages: 1-7
---

## Rules & conventions for Folland

**Family** $\equiv$ **collection**, both of which are greater sets of sets (e.g. $E$ is in the family of sets $\sE$).

$\sP(X)$ is still standard for power sets.

$E\subset X$ includes $E = X$ (that is, $E\subseteq X$ and $E\supseteq X$) as a possibility here.

$\sE$ is a family. The unions and intersections of its member sets are as follows:

$$
\bigcup_{E\in\sE}E=\{x\mid x\in E \text{ for some } E\in\sE\},\qquad
\bigcap_{E\in\sE}E=\{x\mid x\in E \text{ for all } E\in\sE\}.
$$

For this it’s easier/convenient to consider indexed families of sets

$$
\sE=\{E_\alpha\mid\alpha\in A\}=\{E_\alpha\}_{\alpha\in A}
\implies \bigcup_{\alpha\in A}E_\alpha,\quad \bigcap_{\alpha\in A}E_\alpha .
$$

If $E_{\alpha_i}\cap E_{\alpha_j}=\varnothing$ whenever $i\neq j$, then the family is **disjoint**.

When considering families indexed (enumerated) by $\NN$ we write $\{E_n\}_{n=1}^\infty$ or $\{E_n\}_1^\infty$.

The **limit superior** and **limit inferior** are given by

$$
\limsup E_n=\bigcap_{k=1}^\infty\bigcup_{n=k}^\infty E_n
\quad\text{and}\quad
\liminf E_n=\bigcup_{k=1}^\infty\bigcap_{n=k}^\infty E_n .
$$

![Tail unions shrinking to the limsup and tail intersections growing to the liminf, drawn for three sets](/notes/measure-theory/figures/m1-limsup-liminf.svg)

So $\limsup E_n=\{x\mid x\in E_n \text{ for (countably) infinitely many } n\}$ and $\liminf E_n=\{x\mid x\in E_n \text{ for all but finitely many } n\}$.

$E\setminus F$ is the notation for the **difference of sets**: $E\setminus F=\{x\mid x\in E \text{ and } x\notin F\}$, and

$$
E\,\triangle\,F\ (\text{or less often } E\ominus F)=(E\setminus F)\cup(F\setminus E).
$$

$E^c$ for $E\subset X$ is $X\setminus E$.

**de Morgan laws:**

$$
\Big(\bigcup_{\alpha\in A}E_\alpha\Big)^c=\bigcap_{\alpha\in A}E_\alpha^c
\quad\text{and}\quad
\Big(\bigcap_{\alpha\in A}E_\alpha\Big)^c=\bigcup_{\alpha\in A}E_\alpha^c .
$$

For sets $X, Y$, the **cartesian product** $X\times Y$ is the set of all $(x,y)$ with $x\in X$, $y\in Y$.

A **relation** on $X\times Y$ is a subset of $X\times Y$ (if $X=Y$ then we say “a relation on $X$“). Let $R$ be such a subset. We write $xRy$ for $(x,y)\in R$.

The most important relations are the following.

**I. Equivalence relations.** An ER on $X$ is a relation (say $\sim$) such that $x\sim x$ for all $x\in X$; $x\sim y\iff y\sim x$; and if $x\sim y$ and $y\sim z$ then $x\sim z$. These rules are known as the **reflexive**, **symmetric**, and **transitive** properties, respectively.

The **equivalence class** of $x\in X$ is $[x]=\{y\in X\mid x\sim y\}$, and $X$ is the disjoint union of these equivalence classes. ($R\subseteq X\times X$, so $X/R\coloneqq\{[x]\mid x\in X\}$, the set of equivalence classes.)

**II. Orderings.** We will come back to this.

**III. Mappings.** $f\colon X\to Y$ is a relation $R$ from $X$ to $Y$ with the property that for every $x\in X$ there is a unique $y\in Y$ such that $xRy$, and we write $y=f(x)$. Mappings $\equiv$ maps $\equiv$ **functions**. Folland reserves “functions” for maps where $Y\subseteq\CC$.

If $f\colon X\to Y$ and $g\colon Y\to Z$, then $g\circ f\colon X\to Z$, $g\circ f(x)=g(f(x))$, is the **composition**. If $D\subset X$ and $E\subset Y$, we define the **image** of $D$ and the **inverse image** of $E$ under a map $f\colon X\to Y$ by

$$
f(D)=\{f(x)\mid x\in D\}\quad\text{and}\quad f^{-1}(E)=\{x\mid f(x)\in E\}.
$$

$f^{-1}\colon\sP(Y)\to\sP(X)$ commutes with unions, intersections, and complements:

$$
f^{-1}\Big(\bigcap_{\alpha\in A}E_\alpha\Big)=\bigcap_{\alpha\in A}f^{-1}(E_\alpha),\qquad
f^{-1}\Big(\bigcup_{\alpha\in A}E_\alpha\Big)=\bigcup_{\alpha\in A}f^{-1}(E_\alpha),\qquad
f^{-1}(E^c)=\big(f^{-1}(E)\big)^c .
$$

$X$ is the **domain** of $f$, and $f(X)$ is the **range** of $f$. $f$ is **injective** if $f(x_1)=f(x_2)$ only when $x_1=x_2$; **surjective** if $f(X)=Y$ (the range is the codomain, i.e. the image of $X$ is all of $Y$); **bijective** if both. If $f$ is bijective there exists $f^{-1}$ such that $f^{-1}\circ f=\id_X$ and $f\circ f^{-1}=\id_Y$.

If $A\subset X$ we write $f|A$ for the **restriction** of $f$ to $A$: $(f|A)\colon A\to Y$, $(f|A)(x)=f(x)$ for $x\in A$.

A **sequence** of a set $X$ is a mapping of $\NN$ into $X$. For **finite sequences**, $\phi\colon\{0,1,\dots,n\}\to X$ with $n\in\NN$. If $f\colon\NN\to X$ is a sequence and $g\colon\NN\to\NN$ satisfies $g(n)<g(m)$ whenever $n<m$, then $f\circ g$ is called a **subsequence** of $f$.

Sometimes we care little about differentiating sequences and their ranges. For example, if $f(n)=x_n$ we speak of $\{x_n\}_{n=1}^\infty$, and determine from context whether we refer to $\NN\to X$ or to $\NN\to Y$ where $Y\subseteq X$. (Likewise for subsequences.)

Cartesian products of $n$ sets $\equiv$ **$n$-tuples**.

Infinite families of sets: if $\{X_\alpha\}_{\alpha\in A}$ is an indexed family of sets, their cartesian product $\prod_{\alpha\in A}X_\alpha$ is the set of all maps

$$
f\colon A\to\bigcup_{\alpha\in A}X_\alpha \quad\text{such that } f(\alpha)\in X_\alpha \text{ for all } \alpha\in A.
$$

If $X=\prod_{\alpha\in A}X_\alpha$ and $\alpha\in A$, we define the $\alpha$th **projection** or **coordinate map** $\pi_\alpha\colon X\to X_\alpha$ by $\pi_\alpha(f)=f(\alpha)$. We write $x$ and $x_\alpha$ instead of $f$ and $f(\alpha)$, and call $x_\alpha$ the **$\alpha$th coordinate** of $x$. If $X_\alpha=Y$ for all $\alpha$, then $\prod_\alpha X_\alpha$ is the set of all maps $A\to Y$, denoted $Y^A$, and if $A=\{1,\dots,n\}$ then $Y^A=Y^n$.
