---
course: math-55b
chapter: 1
section: N1
title: Metric Spaces and Open Sets
source-pages: 2-3
---

:::note
If $X$ is compact and $f\colon X\to Y$ is continuous, then $f(X)\subset Y$ is compact. To show later.
:::

## Metric spaces

:::definition Metric space
A **metric space** is a set $X$ with a function $d\colon X\times X\to\RR_{\ge 0}$, called the **distance function**, such that

1. $d(p,q)=0$ if and only if $p=q$;
2. $d(p,q)=d(q,p)$;
3. the triangle inequality holds.
:::

:::exercise
Prove that these are metrics:
$$d_\infty(x,y)=\max_i|y_i-x_i|,\qquad d_1(x,y)=\sum_{i=1}^{n}|y_i-x_i|.$$
:::

If $Y\subset X$ and $(X,d)$ is a metric space, then $(Y,d|_Y)$ is a metric space (the **induced metric**). Here $d|_Y$ means $d$ restricted to $Y$, i.e. $d|_{Y\times Y}$.

:::definition Balls
Let $(X,d)$ be a metric space, $p\in X$, $r>0$. The **open ball** (neighborhood) of radius $r$ around $p$ is
$$B_r(p)=\{q\in X\mid d(p,q)<r\}.$$
:::

A ball contains all the points that are “close enough” to $p$.

If $d(p,q)=\delta<r$, let $0<\varepsilon<r-\delta$; then $B_\varepsilon(q)\subset B_r(p)$.

![A small ball around q sitting inside the ball B_r(p)](/notes/math-55b/figures/b1-ball-in-ball.svg)

:::definition Open
$U\subset X$ is **open** if for all $p\in U$ there exists $\varepsilon>0$ such that $B_\varepsilon(p)\subset U$.
:::

- Open balls are open.
- Unions of open balls are open.
- Finite intersections of open balls are open.

Every open set is a union of open balls. For each $p\in S$, $S$ open, there is a ball $B_{\varepsilon(p)}(p)\subset S$, and
$$\bigcup_{p\in S}B_{\varepsilon(p)}(p)=S.$$
So the open balls are a **basis** generating all open sets in $(X,d)$.
