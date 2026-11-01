---
course: math-55b
chapter: 1
section: N5
title: Recap: Metric Spaces, Continuity and Limits
source-pages: 14
---

Recall a metric space is a set with a distance function such that
$$d(p,q)=d(q,p),\qquad d(p,q)=0\implies q=p,\qquad d(p,r)\le d(p,q)+d(q,r).$$

:::definition Open ball
$$B_r(p)=\{q\in X\mid d(p,q)<r\},\qquad r\in\RR_{>0}.$$
:::

$U\subset X$ is open if it has an open ball around every point:
$$U\subset X\text{ open}\iff\forall p\in U,\ \exists\varepsilon>0\text{ s.t. }B_\varepsilon(p)\subset U.$$

For metric spaces $X$ and $Y$, $f\colon X\to Y$ is **continuous**
$$\begin{aligned}
&\iff\forall p\in X,\ \forall\varepsilon>0,\ \exists\delta>0\text{ s.t. }f(B_\delta(p))\subset B_\varepsilon(f(p))\\
&\iff\forall U\subset Y\text{ open},\ f^{-1}(U)\subset X\text{ is open}.
\end{aligned}$$

:::definition Limit of a sequence
$p_n\to p$ in $(X,d)$ if for all $\varepsilon>0$ there exists $N\in\NN$ such that for all $n\ge N$, $d(p_n,p)<\varepsilon$.

$\iff$ every open subset $U\ni p$ contains $p_n$ for all large enough $n$.
:::
