---
course: math-55b
chapter: 2
section: 4
title: Infinite Products and Connectedness
date: 2026-02-02
lecturer: Denis Auroux
source-pages: 1-4
---

**Recall:** in a general topological space, limits of sequences are not necessarily unique!

There’s a whole hierarchy of properties one can require of a topological space; a useful one is:

- $X$ is **Hausdorff** if $\forall x\ne y\in X$ $\exists$ open sets $U\ni x$, $V\ni y$ such that $U\cap V=\emptyset$.

![Two points x and y with disjoint neighborhoods U and V](/notes/math-55b/figures/a1-hausdorff-nbhds.svg)

- Metric space $\implies$ Hausdorff.
- There exist Hausdorff spaces that are not metrizable (i.e. whose topology doesn’t come from a metric).

:::theorem
If $X$ is Hausdorff then every sequence in $X$ converges to at most one limit.
:::

:::proof
Assume $x_1,x_2,\dots$ converges to $x\in X$, and let $y\ne x$. Choose disjoint neighborhoods $U_x\ni x$, $U_y\ni y$. Since $x_n\to x$, $\exists N$ such that $\forall n\ge N$, $x_n\in U_x$. Hence $x_n\notin U_y$ for $n\ge N$, so the sequence doesn’t converge to $y$.
:::

Metric spaces are nice, but they can still be pretty nasty. (We’ll see conditions such as local connectedness, local compactness etc. come up.) Algebraic topologists like to focus on even nicer spaces. For example:

:::definition
An **$n$-dimensional topological manifold** is a topological space $X$ such that every point $p\in X$ has a neighborhood homeomorphic to $\RR^n$ (or equivalently, to an open ball in $\RR^n$).
:::

:::example
$S^1\subset\RR^2$ is a 1-dimensional topological manifold; the sphere and the torus in $\RR^3$ are 2-dimensional topological manifolds.

![A circle in the plane, and a sphere and a torus in space](/notes/math-55b/figures/a1-manifolds.svg)
:::

:::example
![A Y-shaped graph: three segments meeting at one vertex](/notes/math-55b/figures/a1-tripod.svg)

This Y-shaped graph isn’t a topological manifold (the vertex looks wrong), but it is part of a more general class of spaces called **CW complexes**, built by attaching “cells” (closed balls of dimension $0,1,\dots$) onto each other inductively.
:::

We’ll see more on this later when we get to algebraic topology. In decreasing order of generality:
$$
\{\text{top. spaces}\}\supset\{\text{Hausdorff}\}\supset\{\text{metrizable}\}\supset\{\text{(loc. finite) CW complexes}\}\supset\{\text{manifolds}\}.
$$

## Topologies on infinite products

Given topological spaces $X_i$, $i\in I$ (an index set), what is the natural topology on
$$
X=\prod_{i\in I}X_i=\{(p_i)_{i\in I}\mid p_i\in X_i\ \forall i\in I\}?
$$

First idea:

:::definition
The **box topology** on $\prod_{i\in I}X_i$ has basis $\left\{\prod_{i\in I}U_i\ \middle|\ U_i\subset X_i\text{ open }\forall i\right\}$.
:::

(This is a basis: box $\cap$ box = box, since $\left(\prod U_i\right)\cap\left(\prod V_i\right)=\prod(U_i\cap V_i)$.)

This is actually too fine for most purposes.

:::example
Consider the diagonal map $\Delta:\RR\to\RR^\omega=\RR^\NN$ ($=\RR\times\RR\times\cdots$), $\Delta(x)=(x,x,x,\dots)$. Giving $\RR^\NN$ the box topology, $\Delta$ is not continuous!! (Unlike the case of finite products.)

Indeed, let $U=(-1,1)\times(-\frac12,\frac12)\times(-\frac13,\frac13)\times\cdots$, which is open in the box topology. Then
$$
\Delta^{-1}(U)=\bigcap_{n\ge1}\left(-\tfrac1n,\tfrac1n\right)=\{0\},
$$
which is not open in $\RR$.
:::

Better:

:::definition
The **product topology** on $X=\prod X_i$ has basis
$$
\left\{\prod_{i\in I}U_i\ \middle|\ U_i\subset X_i\text{ open, and }U_i=X_i\text{ for all but finitely many }i\right\}.
$$
:::

(This is the same as the box topology if $I$ is finite; for infinite $I$ it is coarser.) Unless otherwise specified, the product topology is the one we’ll use on $\prod X_i$.

:::theorem
$f:Z\to X=\prod X_i$ (with the product topology), $z\mapsto(f_i(z))_{i\in I}$, is continuous $\iff$ each component $f_i:Z\to X_i$ is continuous.
:::

:::proof
- The projection $p_i:X\to X_i$ to the $i$-th factor is continuous ($\forall U\subset X_i$ open, $p_i^{-1}(U)$ is open in the product topology). Hence, if $f$ is continuous, so is $f_i=p_i\circ f$.
- Conversely, assume all $f_i$ are continuous, and consider a basis element $\prod U_i\subset X$, where $U_i=X_i$ for all but finitely many $i$. Then
$$
f^{-1}\left(\prod U_i\right)=\left\{z\in Z\ \middle|\ (f_i(z))_{i\in I}\in\prod U_i\right\}=\bigcap_{i\in I}f_i^{-1}(U_i).
$$
Each $f_i^{-1}(U_i)\subset Z$ is open, and all but finitely many are $=f_i^{-1}(X_i)=Z$, so they can be omitted from the intersection. So $f^{-1}(\prod U_i)$ is the intersection of finitely many open sets in $Z$, hence open.
:::

:::example
This now implies the diagonal map $\Delta:\RR\to\RR^\NN$ is continuous, since each $\Delta_i$ = identity.
:::

Similarly:

:::exercise
A sequence $x_n=(x_{n,i})_{i\in I}\in\prod X_i$, $n=1,2,3,\dots$ converges to $y=(y_i)_{i\in I}\in\prod X_i$ $\iff$ $\forall i\in I$, the sequence $x_{n,i}\in X_i$ converges to $y_i$.
:::

:::example
Given a set $X$ and a topological space $Y$, let $\mcF=\{\text{functions }X\to Y\}=Y^X$ with the product topology. Then a sequence $f_n\in\mcF$ converges to $f\in\mcF$ iff $\forall x\in X$, $f_n(x)\to f(x)$ in $Y$.

So: the product topology is the topology of **pointwise convergence**.
:::

## The uniform topology

On products of metric spaces, there is another natural topology, finer than the product topology but coarser than the box topology: the **uniform topology**. This works similarly to the construction of $d_\infty(x,y)=\sup(|y_i-x_i|)$ on $\RR^n$, but for an infinite product the sup might be infinite. So:

- First step: we can replace the metric on $(X,d)$ by $\hat d(x,y)=\min(d(x,y),1)$. This is still a metric (check!) and induces the same topology as $d$ (same balls of radius $\le1$!).
- Now, given metric spaces $(X_i,d_i)_{i\in I}$, replace each $d_i$ by the bounded metric $\hat d_i$, and define a metric
$$
d_\infty(x,y)=\sup\{\hat d_i(x_i,y_i)\mid i\in I\}
$$
on $\prod X_i$ ($=\sup\{d_i(x_i,y_i)\}$ if it’s $\le1$, else $1$).

This is called the **uniform metric**, and it induces the **uniform topology**.

:::example
On $\RR^X=\{\text{functions }X\to\RR\}$ (with the usual distance on $\RR$), this is
$$
d_\infty(f,g)=\sup_{x\in X}|f(x)-g(x)|\text{ if this is }\le1,\text{ else }1.
$$
So $f_n\to f\iff d_\infty(f_n,f)\to0\iff\sup_{x\in X}|f_n(x)-f(x)|\to0$: uniform convergence!
:::

:::remark
The ball of radius $r\le1$ around $x=(x_i)_{i\in I}$ is *contained* in $P_r(x)=\prod_{i\in I}B_r(x_i)$, but not equal to it (unless $I$ is finite)!

Indeed, $d(x_i,y_i)<r$ $\forall i\in I$ only implies $d_\infty(x,y)=\sup_{i\in I}\{d(x_i,y_i)\}\le r$! The ball $B_r(x)$ only contains those $y$ for which the sup is $<r$. In fact:
$$
B_r(x)=\bigcup_{0<r'<r}P_{r'}(x)\subset P_r(x),
$$
and $P_r(x)$ is not open for $d_\infty$!
:::

:::theorem
The uniform topology on $\prod(X_i,d_i)$ is finer than the product topology, and coarser than the box topology (strictly if $I$ is infinite).
:::

:::proof
1. Let $x=(x_i)\in\prod X_i$, and $\prod U_i\ni x$ a basis element in the product topology. Then $\forall i$ $\exists\eps_i>0$ such that $B_{\eps_i}(x_i)\subset U_i$. Without loss of generality we can assume $\eps_i\le1$ $\forall i$, and $\eps_i=1$ for all but finitely many $i$ (whenever $U_i=X_i$). So $\eps=\inf(\eps_i)>0$, and
$$
B^{d_\infty}_\eps(x)\subset P_\eps(x)\subset\prod B_{\eps_i}(x_i)\subset\prod U_i.
$$
So $\prod U_i$ is open in the uniform topology: $\mcT_{\text{product}}\subset\mcT_{\text{uniform}}$.
2. $B^{d_\infty}_r(x)=\bigcup_{0<r'<r}P_{r'}(x)$, and each $P_{r'}(x)$ is open in the box topology $\implies$ balls of the uniform topology are open in the box topology, so $\mcT_{\text{uniform}}\subset\mcT_{\text{box}}$.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 5](/notes/math-55b/05-uniform-convergence-and-connectedness)
:::remark
On $\RR^\NN$ the product topology is actually metrizable, using a clever modification of $d_\infty$ (see Munkres Thm. 20.5), while the box topology isn’t metrizable (Munkres, end of §21). On uncountable products, neither box nor product are metrizable (also Munkres, end of §21).
:::

:::example
In $\mcF=\{f:[0,1]\to\RR\}$, $f_n(x)=x^n$ converges pointwise (i.e. in the product topology) to
$$
f(x)=\lim_{n\to\infty}f_n(x)=\begin{cases}0&\text{if }x<1,\\1&\text{if }x=1,\end{cases}
$$
but not uniformly ($\sup_x|f_n(x)-f(x)|=1\not\to0$).

$g_n(x)=\frac1n$ (constant functions) $\to g(x)=0$ uniformly (and pointwise), but not in the box topology: $g_n$ is never in $U=\{f\mid|f(x)|<x\ \forall x>0\}$, a box neighborhood of $g=0$. In fact it’s almost impossible for a nonconstant sequence of functions to converge in the box topology.
:::

The notion of uniform convergence is important in real analysis because it is well behaved with respect to continuity and differentiability. For example:

:::theorem
Given a topological space $X$, a metric space $Y$, and a sequence of functions $f_n:X\to Y$: if $f_n$ is continuous $\forall n$ and $f_n\to f$ uniformly, then $f$ is continuous.
:::

:::proof
Let $V\subset Y$ be open and $p\in f^{-1}(V)$. $\exists\eps>0$ such that $B_\eps(f(p))\subset V$. Let $N$ be such that $\sup_{q\in X}d(f_N(q),f(q))<\frac\eps3$. Let $U\ni p$ be open such that $q\in U\implies d(f_N(p),f_N(q))<\frac\eps3$ (continuity of $f_N$). Then, using the triangle inequality, $\forall q\in U$,
$$
d(f(p),f(q))\le d(f(p),f_N(p))+d(f_N(p),f_N(q))+d(f_N(q),f(q))<\frac\eps3+\frac\eps3+\frac\eps3=\eps.
$$
So $U\subset f^{-1}(B_\eps(f(p)))\subset f^{-1}(V)$.
:::

:::corollary
$\sC(X,Y)=\{\text{continuous }f:X\to Y\}$ is a closed subspace of $\big(\mcF(X,Y)=Y^X,\ \text{uniform topology}\big)$.
:::

**Connected spaces**

(Munkres §23–24.)

:::definition
A topological space $X$ is **connected** if it cannot be written as $X=U\cup V$ where $U,V$ are disjoint nonempty open sets. (Such a decomposition is called a **separation** of $X$.)
:::

![Two disjoint open pieces U and V forming a space that is not connected](/notes/math-55b/figures/a1-separation.svg)

:::proposition
$[0,1]\subset\RR$ (standard topology) is connected.
:::

:::proof
Assume $[0,1]=U\cup V$ is a separation. Without loss of generality, $0\in U$. Let
$$
a=\sup\{x\in[0,1]\text{ such that }[0,x)\subset U\}.
$$
- $0\in U$, $U$ open $\implies[0,\eps)\subset U$ for some $\eps>0$, so $a>0$.
- We can’t have $a\in V$: since $V$ is open this would imply $(a-\eps,a]\subset V$ for some $\eps>0$, hence $[0,x)\not\subset U$ for $x>a-\eps$, hence $\sup\{x\text{ such that}\dots\}\le a-\eps$, contradiction. So $a\in U$.
- But if $a<1$: $U$ open, $U\ni a\implies\exists\eps>0$ such that $(a-\eps,a+\eps)\subset U$, and by definition of $a$, $\exists x>a-\eps$ such that $[0,x)\subset U$. Hence $[0,a+\eps)\subset U$, contradicting the definition of $a$.
- Hence $a=1$, and since $U$ is open, $\exists\eps>0$ such that $(1-\eps,1]\subset U$; and by definition of $a$, $\exists x>1-\eps$ such that $[0,x)\subset U$. Hence $U=[0,1]$, and $V=\emptyset$. Contradiction.
:::

:::example
$[0,1)\cup(1,2]$ is not connected, since $[0,1)$ and $(1,2]$ are open in the subspace topology and provide a separation. More generally, if $x<y<z\in\RR$ with $x,z\in A$ and $y\notin A$, then $A$ is disconnected.
:::

:::theorem
$f:X\to Y$ continuous, $X$ connected $\implies f(X)\subset Y$ is connected.
:::

:::proof
If $U\cup V$ is a separation of $f(X)$, then $f^{-1}(U)\cup f^{-1}(V)$ is a separation of $X$, contradiction! (Subspace topology: $U=f(X)\cap U'\ne\emptyset$ with $U'$ open in $Y$ $\implies f^{-1}(U)=f^{-1}(U')\ne\emptyset$ is open in $X$; and $f^{-1}(U)\cap f^{-1}(V)=f^{-1}(U\cap V)=\emptyset$.)
:::

:::corollary Intermediate value theorem
Let $X$ be a connected topological space and $f:X\to\RR$ continuous. If $a,b\in X$ and $r$ lies between $f(a)$ and $f(b)$, then $\exists c\in X$ such that $f(c)=r$.
:::

:::proof
Since $X$ is connected, so is $f(X)$. If $r\notin f(X)$, then $U=(-\infty,r)\cap f(X)$ and $V=(r,\infty)\cap f(X)$ give a separation of $f(X)$ (one contains $f(a)$ and the other contains $f(b)$): contradiction. So $r\in f(X)$.
:::
:::
