---
course: math-55b
chapter: 3
section: M1
title: Midterm 1 Review
source-pages: 1-2
---

What you need to know for the midterm.

## 1. Topological spaces

*(Munkres ch. 2, §12–21)*

- **Topological space:** $(X,\mathcal T)$, $\mathcal T=\{U\subset X\mid U\text{ open}\}$. Example: metric spaces.
- **Axioms:** $\emptyset$, $X$, arbitrary unions, and finite intersections of open subsets are open. $F\subset X$ is **closed** $\iff F^c$ is open.
- **Basis** for a topology:
  - open sets $=$ unions of elements of $\mathcal B$. $U$ is open $\iff$ for all $x\in U$ there exists $B\in\mathcal B$ such that $x\in B\subset U$.
  - axioms for a basis: $\bigcup\mathcal B=X$; $x\in B_1\cap B_2\implies$ there exists $B'\in\mathcal B$ such that $x\in B'\subset B_1\cap B_2$.
  - Example: the open balls $B_r(x)$ in a metric space $(X,d)$ are a basis for the metric topology.
- If $\mathcal T\subset\mathcal T'$, say $\mathcal T'$ is **finer** and $\mathcal T$ is **coarser**.
- $f:X\to Y$ is **continuous** if for all open $U\subset Y$, $f^{-1}(U)\subset X$ is open. (For metric spaces, this is $\iff$ for all $p\in X$ and all $\eps>0$ there exists $\delta>0$ such that $d_X(p,x)<\delta\implies d_Y(f(p),f(x))<\eps$.)
- **Closure:** $\bar A=\bigcap$ all closed subsets $\supset A$. **Interior:** $\operatorname{int}(A)=\bigcup$ all open subsets $\subset A$. $\bar A=A\cup\{\text{limit points of }A\}$, and $x\in\bar A\iff$ every neighborhood of $x$ intersects $A$.
- **Limit points** of subsets ($x$ is a limit point of $A\iff$ for every neighborhood $U\ni x$, $(U-\{x\})\cap A\neq\emptyset$) are not the same as **limits of sequences** ($x_n\to x\iff$ for every neighborhood $U\ni x$, all but finitely many $x_n\in U$). (But they are related in metric spaces: $A$ is closed $\iff$ whenever $x_n\to x$ with $x_n\in A$, then $x\in A$.)
- **Subspace topology** on $A\subset X$: $\{U\cap A\mid U\in\mathcal T_X\}$.
- **Product topology:** basis $\left\{\prod_{i\in I}U_i \;\middle|\; U_i\subset X_i\text{ open},\ U_i=X_i\text{ for all but finitely many }i\right\}$.
  - For products of metric spaces, the **uniform topology** ($d_\infty(\vec x,\vec y)=\sup_i d_i(x_i,y_i)$, up to truncation) is finer.
  - $f=(f_i):Z\to X=\prod X_i$ is continuous in the product topology iff each $f_i=\pi_i\circ f:Z\to X_i$ is continuous.
  - For $X^Y=\{\text{functions }Y\to X\}$: $f_n\to f$ in the product topology $\iff$ pointwise convergence, $f_n(y)\to f(y)$ for all $y\in Y$; $f_n\to f$ in the uniform topology $\iff$ uniform convergence, $\sup_{y\in Y}d(f_n(y),f(y))\to 0$.
  - $f_n\to f$ uniformly, $f_n$ continuous $\implies f$ continuous.
- $X$ is **Hausdorff** if for all $x\neq y$ there exist open $U\ni x$, $V\ni y$ such that $U\cap V=\emptyset$. ($\implies$ uniqueness of limits of sequences.) Metric spaces are Hausdorff.

## 2. Connectedness and compactness

*(Munkres ch. 3, §23–24, 26–29)*

- $X$ is **connected** if $X=U\cup V$ with $U,V$ open and disjoint implies one is $X$ and the other is $\emptyset$.
- $f:X\to Y$ continuous, $X$ connected $\implies f(X)$ connected. ($\implies$ the intermediate value theorem, since the connected subsets of $\RR$ are the intervals.)
- **Path-connected**: any two points of $X$ can be joined by a (continuous) path $f:I\to X$. Path-connected $\implies$ connected ($\not\Leftarrow$ in general).
- $X$ is **compact** if for every open cover $X=\bigcup_{i\in I}U_i$ there exists a finite subcover $X=U_{i_1}\cup\dots\cup U_{i_n}$.
- $f:X\to Y$ continuous, $X$ compact $\implies f(X)$ compact ($\implies$ the extreme value theorem).
- $X$ compact, $F\subset X$ closed $\implies F$ compact. $K\subset X$ Hausdorff, $K$ compact $\implies K$ closed. In $\RR^n$, compact $\iff$ closed and bounded.
- (Finite) products of connected spaces are connected; (finite) products of compact spaces are compact.
- If $(X,d)$ is a compact metric space, then:
  - every open cover $X=\bigcup U_i$ has a **Lebesgue number** $\delta>0$: $\diam(A)<\delta\implies$ there exists $i$ such that $A\subset U_i$;
  - every continuous function $f:(X,d)\to(Y,d_Y)$ is uniformly continuous.
- For metric spaces: **compact** (open covers have finite subcovers) $\iff$ **limit point compact** (every infinite subset has a limit point) $\iff$ **sequentially compact** (every sequence has a convergent subsequence).
- Compact metric spaces are **complete** (Cauchy sequences converge). $\RR^n$ and $\{f:Y\to\RR\}$ with the uniform topology are complete.
- A **one-point compactification** of $X$ is a compact space $Y$ such that $Y-\{\infty\}\cong X$ (homeomorphic).
  - Build: $Y=X\cup\{\infty\}$, $\mathcal T_Y=$ opens of $X$ $+$ complements of compact subsets of $X$.
  - If $X$ is **locally compact** (for all $x\in X$ there exist a neighborhood $U\ni x$ and a compact $C\supset U\ni x$) and Hausdorff, then $Y$ is Hausdorff and unique up to homeomorphism.
