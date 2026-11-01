---
course: measure-theory
chapter: 0
section: 0.6
title: Metric Spaces
source-pages: 19, 20-24
---

:::definition
A **metric space** is a set $X$ with a distance function $d\colon X\times X\to\RR_{\ge0}$ such that for all $p,q,r\in X$:

- (i) $d(p,q)=0\iff p=q$;
- (ii) $d(p,q)=d(q,p)$;
- (iii) $d(p,q)\le d(p,r)+d(r,q)$.
:::

:::example
- $d(x,y)=|x-y|$ is a metric on $\RR^n$.
- $d(f,g)=\int_0^1|f(x)-g(x)|\,dx$ is a metric on the continuous functions on $[0,1]$.
- If $\rho$ is a metric on $X$ and $A\subset X$, then $\rho|A\times A$ is a metric on $A$.

If $(X_1,d_1)$ and $(X_2,d_2)$ are metric spaces, the **product metric** $\rho\colon(X_1\times X_2)\times(X_1\times X_2)\to\RR_{\ge0}$ is given by

$$
\rho\big((x_1,x_2),(y_1,y_2)\big)=\max\big(d_1(x_1,y_1),\,d_2(x_2,y_2)\big).
$$

Others on $X_1\times X_2$ include

$$
d_1(x_1,y_1)+d_2(x_2,y_2)\quad\text{or}\quad\big[d_1(x_1,y_1)^2+d_2(x_2,y_2)^2\big]^{1/2}.
$$

:::

A set $E\subset X$ is **open** if for every $x\in E$ there exists $r>0$ such that $B_r(x)\subset E$, where

$$B_r(x)=B(r,x)=\{y\in X \mid \rho(x,y)<r\}.$$

$E$ is **closed** $\iff$ $E^c$ is open.

:::remark
From 55b: there are MANY ways to define an open/closed set in a topology. Sequence convergence in terms of opens: a sequence $\{p_n\}$ converges to $p$ if for every open $U$ with $p\in U$ there exists $N$ such that $p_n\in U$ for all $n\ge N$.

:::

---

Recall: $\partial E$ is $\overline{E}\setminus E^\circ$ and $\overline{E}=E\cup\partial E$ (not as definitions).

If $E=\bigcup_{\alpha\in A}E_\alpha$ is the union of all open sets $E_\alpha$ contained in $X$ (here $X$ is any subset of the space), then $E$ is the largest open set in $X$, and $E$ is the **interior** of $X$ (denoted $X^\circ=E$). Now $\partial X=\overline{X}\setminus X^\circ$ and $\overline{X}=X^\circ\cup\partial X$, or $X\cup\partial X$.

If $\overline{E}=X$, then $E$ is said to be **dense** in $X$. (E.g. $\overline{\QQ}=\RR$, so $\QQ$ is dense in $\RR$.) $E$ is **nowhere dense** iff $\overline{E}$ has an empty interior (i.e. $\overline{E}=\partial\overline{E}$).

$X$ is **separable** if $X$ has a countable AND dense subset (e.g. $\QQ^n\subseteq\RR^n$, $\QQ^n$ countable dense).

A sequence $\{x_n\}\in X^{\NN}$ (we may use the technically inaccurate term “$\{x_n\}$ is ‘in’ $X$“) **converges** to $x\in X$ (symbolically: $x_n\to x$ or $\lim x_n=x$) if $\lim_{n\to\infty}d(x_n,x)=0$.

:::proposition
Let $X$ be a metric space, $E\subset X$ and $x\in X$. The following are equivalent:

- **I.** $x\in\overline{E}$.
- **II.** $B_r(x)\cap E\neq\varnothing$ for all $r>0$.
- **III.** There exists a sequence $\{x_n\}$ in $E$ which converges to $x$.
:::

:::proof
If $B(r,x)\cap E=\varnothing$, then $B(r,x)^c$ is a closed set containing $E$ (since $B(r,x)$ is open) but not $x$, so $x\notin\overline{E}$. Too, if $x\notin\overline{E}$, then since $(\overline{E})^c$ is open there exists $r>0$ such that $B(r,x)\subseteq(\overline{E})^c\subseteq E^c$. Thus I $\iff$ II.

Now if II holds, then for every $n\in\NN$ there exists $x_n\in B(\tfrac1n,x)\cap E$, so that $x_n\to x$. Conversely, if $B(r,x)\cap E=\varnothing$, then $d(y,x)\ge r$ for all $y\in E$, so no sequence in $E$ can converge to $x$. Thus II $\iff$ III.

Thus I $\iff$ II $\iff$ III.
:::

Let $X,Y$ be metric spaces, with metrics both denoted by $\rho$. A map $f:X\to Y$ is **continuous at** $x\in X$ if for every $\eps>0$ there exists $\delta>0$ such that $\rho(f(y),f(x))<\eps$ whenever $\rho(x,y)<\delta$; that is to also say,

$$f^{-1}\big(B_\eps(f(x))\big)\supset B_\delta(x).$$

$f$ is **continuous** if it is continuous at each (every) $x\in X$, and is **uniformly continuous** if $\delta$ can be chosen in the definition of continuity independent of $x$.

:::proposition
$f:X\to Y$ is continuous $\iff$ $f^{-1}(U)$ is open for every $U$ open in $Y$.

:::

:::proof
($\Leftarrow$) Let $B_\eps(f(x))$ be an open set that contains $f(x)$. So for every $x$ and every $\eps>0$, $f^{-1}(B_\eps(f(x)))$ is open and contains $x$, and so contains some ball around $x$. Therefore $f$ is continuous at $x$; given this for all $x$, $f$ is continuous.

($\Rightarrow$) Now let $f:X\to Y$ be a continuous map. Let $U\subset Y$ be open, so for every $y\in U$ there exists $\eps_y>0$ such that $B_{\eps_y}(y)\subset U$, and for each $x\in f^{-1}(\{y\})$ there exists $\delta_x>0$ such that

$$B(\delta_x,x)\subset f^{-1}\big(B(\eps_y,y)\big)\subset f^{-1}(U).$$

Thus $f^{-1}(U)=\bigcup_{x\in f^{-1}(U)}B(\delta_x,x)$ is open.
:::

Let $(X,\rho)$ be a metric space. A sequence $\{x_n\}$ is **Cauchy** if $\rho(x_n,x_m)\to0$ as $n,m\to\infty$. A set $E\subset X$ is **complete** if every Cauchy sequence in $E$ converges to a point in $E$. Something like this:

![Sketch of a Cauchy sequence: the terms x_n and x_m oscillate inside an envelope that shrinks, so rho(x_n, x_m) tends to 0 as n, m go to infinity](/notes/measure-theory/figures/m2-cauchy-sequence.svg)

:::proposition
A closed subset of a complete metric space is complete; a complete subset of an arbitrary metric space is closed. (E.g. $\RR$ and $\overline{\RR}$ with $\pm\infty$.)
:::

Distance from a point to a set, and between two sets, in a metric space ($(X,\rho)$, $E,F\subset X$, $x\in X$) is defined by:

$$\rho(x,E)=\inf\{\rho(x,y)\mid y\in E\}$$

(basically the shortest distance to $E$ from $x$), and

$$\rho(E,F)=\inf\{\rho(x,y)\mid x\in E,\ y\in F\}=\inf\{\rho(x,F)\mid x\in E\}.$$

We get $\rho(x,E)=0\iff x\in\overline{E}$. We define the **diameter** of $E\subset X$ to be

$$\diam E=\sup\{\rho(x,y)\mid x,y\in E\}.$$

$E$ is **bounded** if $\diam E<\infty$.

If $E\subset X$ and $\{V_\alpha\}_{\alpha\in A}$ is a family of sets such that $E\subset\bigcup_{\alpha\in A}V_\alpha$, then $\{V_\alpha\}_{\alpha\in A}$ is called a **cover** of $E$, and $E$ is said to be **covered** by the $V_\alpha$‘s.

$E$ is called **totally bounded** if, for every $\eps>0$, $E$ can be covered by finitely many balls of radius $\eps$. Totally bounded necessitates boundedness.

:::theorem
If $E$ is a subset of the metric space $(X,\rho)$, the following are equivalent:

- (a) $E$ is complete and totally bounded.
- (b) (The Bolzano–Weierstrass property) Every sequence in $E$ has a subsequence which converges to a point of $E$.
- (c) (The Heine–Borel property) If $\{V_\alpha\}_{\alpha\in A}$ is a cover of $E$ by open sets, there exists a finite set $F\subset A$ such that $\{V_\alpha\}_{\alpha\in F}$ covers $E$ (every open cover admits a finite **subcover**; $\iff$ **compact**).
:::

A set $E$ with the properties (a)–(c) is called **compact**.
