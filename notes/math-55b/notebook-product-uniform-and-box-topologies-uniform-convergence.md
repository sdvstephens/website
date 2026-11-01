---
course: math-55b
chapter: 2
section: N9
title: Product, Uniform and Box Topologies; Uniform Convergence
source-pages: 18-20
---

*Lecture 5.*

Recall the product space topologies on $\prod_{i\in I}X_i$, e.g. $X^I=\{I\to X\}$ (tuples $(\dots,\dots)$):
$$\mcT_{\text{prod}}\subset\mcT_{\text{uniform}}\subset\mcT_{\text{box}},$$
defined by bases:

- $\mcT_{\text{prod}}$: the sets $\prod U_i$, where each $U_i\subset X_i$ is open and $U_i=X_i$ for all but finitely many $i$;
- $\mcT_{\text{uniform}}$: comes from $d_\infty\big((x_i),(y_i)\big)=\sup_{i\in I}d(x_i,y_i)$ if this is $\le1$, else $1$.

For spaces of functions $X^Y=\{f\colon Y\to X\}$:

- $f_n\to f$ in the product topology $\iff f_n(y)\to f(y)$ for all $y\in Y$ (pointwise convergence);
- $f_n\to f$ in the uniform topology $\iff\sup_{y\in Y}d(f_n(y),f(y))\to0$, i.e. for all $\varepsilon>0$ there exists $N$ such that for all $y\in Y$, $n\ge N\implies d(f_n(y),f(y))<\varepsilon$.

The difference: $N$ depends on $\varepsilon$ but not on $y$.

:::remark
For $\RR^\NN$, the product topology is metrizable using a clever modification of $d_\infty$ (Munkres Thm 20.5), while the box topology isn’t metrizable (Munkres §21):
$$\begin{aligned}
d_{\text{prod}}\big((x_n),(y_n)\big)&=\sup_n\Big(\min\big(d(x_n,y_n),\tfrac1n\big)\Big),\\
d_{\text{uniform}}\big((x_n),(y_n)\big)&=\sup_n\Big(\min\big(d(x_n,y_n),1\big)\Big).
\end{aligned}$$
:::

:::example
In $\mcF=\{f\colon[0,1]\to\RR\}$, let $f_n(x)=x^n$. Does it converge?
:::solution
Yes (pointwise), to
$$f(x)=\begin{cases}0&x<1\\1&x=1,\end{cases}$$
but not uniformly, because
$$\sup_{x\in[0,1]}|f_n(x)-f(x)|\quad\text{is equal to}\quad\sup_{x\in[0,1)}|f_n(x)-0|=1\not\to0.$$
![Graphs of x^n on [0,1] bending towards the axis, with the discontinuous pointwise limit](/notes/math-55b/figures/b1-xn-convergence.svg)
:::
:::

Uniform convergence, unlike pointwise, is well behaved with respect to continuity (and differentiability).

:::theorem
Given a topological space $X$, a metric space $Y$, and a sequence of functions $f_n\colon X\to Y$: if all the $f_n$ are continuous and $f_n\to f$ uniformly, then $f$ is continuous.
:::

:::proof
Let $V\subset Y$ be open and let $p\in f^{-1}(V)$. By definition there exists $\varepsilon>0$ such that $B_\varepsilon(f(p))\subset V$. We want to show there is a neighborhood of $p$ in $X$ which maps under $f$ into $B_\varepsilon(f(p))$.

Let $n\in\NN$ be such that
$$\sup_{q\in X}d\big(f_n(q),f(q)\big)<\frac{\varepsilon}{3}.$$
Let $U\ni p$ be open such that $q\in U\implies d(f_n(p),f_n(q))<\frac{\varepsilon}{3}$: namely $U=f_n^{-1}\big(B_{\varepsilon/3}(f_n(p))\big)$, which is open since $f_n$ is continuous.

![The graph of f_n stays within epsilon/3 of the graph of f; points p and q in the open set U](/notes/math-55b/figures/b1-uniform-limit.svg)

So observe that for all $q\in U$, the triangle inequality gives
$$\begin{aligned}
d(f(p),f(q))&\le d(f(p),f_n(p))+d(f_n(p),f_n(q))+d(f_n(q),f(q))\\
&<\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon.
\end{aligned}$$
So $f(q)\in B_\varepsilon(f(p))\subset V$. So $U\subset f^{-1}(V)$ is open and contains $p$. So $f^{-1}(V)$ is open.
:::

:::corollary
$\mcC(X,Y)=\{\text{continuous functions }X\to Y\}$ is a closed subspace of $\big(\mcF(X,Y)=Y^X,\ \text{uniform}\big)$.
:::
