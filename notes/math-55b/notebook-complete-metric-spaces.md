---
course: math-55b
chapter: 3
section: N14
title: Complete Metric Spaces
source-pages: 29-30
---

:::theorem
If $(X,d)$ is compact ($\iff$ sequentially compact, for metric spaces), then it is **complete**, i.e. all Cauchy sequences converge.
:::

:::proof
Let $\{x_n\}$ be a Cauchy sequence. Then there is a convergent subsequence $x_{n_k} \to x \in X$; we want to show $x_n \to x$. Let $\varepsilon > 0$. Cauchy implies there is $N$ such that for all $m, n \ge N$, $d(x_m, x_n) < \varepsilon/2$. Since the subsequence converges, $x_{n_k} \to x$, so there is $n_k \ge N$ such that $d(x_{n_k}, x) < \varepsilon/2$. Then for all $n \ge N$,
$$d(x_n, x) \le d(x_n, x_{n_k}) + d(x_{n_k}, x) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
:::

:::corollary
$(\RR^n, d)$ with the usual distance metric is a complete metric space.
:::

:::proof
Every Cauchy sequence in $\RR^n$ is bounded, so it is contained in a cube $[-M, M]^n$ for $M$ large, which is compact. Hence it converges.
:::

:::theorem
$\RR^X = \{\text{functions } X \to \RR\}$ (real-valued functions) with the uniform metric is also complete.
:::

:::proof
Given a Cauchy sequence $\{f_n\}$, $f_n: X \to \RR$: for all $\varepsilon > 0$ there is $N$ such that $m, n \ge N \Rightarrow \sup_x |f_n(x) - f_m(x)| < \varepsilon$. So for each $x \in X$, $\{f_n(x)\}$ is a Cauchy sequence in $\RR$, which has a limit $f(x) \in \RR$, and $f_n \to f$ pointwise.

Claim: $f_n \to f$ *uniformly*. Given $\varepsilon > 0$, let $N$ be such that $m, n \ge N \Rightarrow \sup_x |f_n(x) - f_m(x)| < \varepsilon$. Then for all $x \in X$ and all $n \ge N$,
$$|f_n(x) - f(x)| = \lim_{m \to \infty} |f_n(x) - f_m(x)| \le \varepsilon,$$
since $f_m(x) \to f(x)$. So for all $n \ge N$, $\sup_{x \in X} |f_n(x) - f(x)| \le \varepsilon$.
:::

If $(X,d)$ is complete and $A \subset X$ is closed, then $(A, d|_A)$ is complete: a Cauchy sequence in $A$ converges in $X$, and the limit is in $A$. The continuous functions $X \to \RR$ form a closed subset of $\RR^X$:
$$\underbrace{(\mathcal{C}(X,\RR), \text{uniform})}_{\text{continuous functions}} \ \underset{\text{closed}}{\subset}\ \underbrace{(\mathcal{F}(X,\RR), \text{uniform})}_{\text{complete}}.$$
