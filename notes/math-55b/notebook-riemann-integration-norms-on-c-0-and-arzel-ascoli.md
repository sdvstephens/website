---
course: math-55b
chapter: 5
section: N24
title: Riemann Integration, Norms on $C^0$ and Arzelà–Ascoli
source-pages: 46-47
---

:::remark
Bounded piecewise $C^0$ functions are also integrable. This is useful for error estimation, $I(S) - I(s)$.
:::

Recall that $f$ is **Riemann integrable** if $I_+(f) = I_-(f)$; continuous functions are Riemann integrable.

:::example
An example of a function that is *not* Riemann integrable:
$$f(x) = \begin{cases} 0 & x \in \QQ \\ 1 & x \notin \QQ \end{cases}$$
because $I_-(f) = 0$ and $I_+(f) = b - a$. The Lebesgue integral overcomes this, and it can integrate unbounded functions. Lebesgue brutally mogs Riemann.
:::

$\mathcal{R}([a,b])$, the set of Riemann integrable functions, is a vector space. If two functions $f, g$ are R-integrable, then so are $f + g$ and $fg$, and also $\log(f)$ (when $f \ge c > 0$) and $f^\alpha$ (when $f \ge 0$, $\alpha > 0$).

:::theorem Fundamental theorem of calculus
If $f$ is continuous on $[a,b]$, then $F(x) = \int_a^x f(t)\,dt$ is differentiable and $F' = f$.
:::

:::proof
$$\frac{1}{h}\big(F(x+h) - F(x)\big) = \frac{1}{h}\int_x^{x+h} f(t)\,dt \xrightarrow[h \to 0]{} f(x),$$
using continuity of $f$ at $x$ to estimate the integral for $h \to 0$.
:::

:::theorem
$I: C^0([a,b]) \to \RR$ is continuous with respect to the uniform topology: if $f_n \to f$ uniformly, then $\int_a^b f_n\,dx \to \int_a^b f\,dx$. In fact,
$$\left|\int f\,dx - \int g\,dx\right| \le \int |f - g|\,dx \le (b - a)\sup|f - g|.$$
:::

> “they would go to infinity, which is even less going to zero”

Other than $\|f\|_\infty = \sup|f|$, we have other norms on the vector space $C^0([a,b], \RR)$, defining coarser topologies (vs. $C^k$, which is finer).

For instance the $L^p$ norms: since $\|f\|_p \le (b - a)^{1/p}\|f\|_\infty$, balls for $\|\cdot\|_p$ contain balls for $\|\cdot\|_\infty$, and the topologies defined by these metrics are coarser.

Look at $(C^0([a,b]), \|\cdot\|_{L^p})$: it isn’t complete. Its completion is the Lebesgue space $L^p([a,b])$.

## Equicontinuity and Arzelà–Ascoli

:::definition
A family of functions $\mathcal{F} \subset C^0(K)$, with $K$ a compact metric space (e.g. $[a,b]$), is **equicontinuous** if for all $\varepsilon > 0$ there is $\delta > 0$ such that for all $f \in \mathcal{F}$ and all $x, y \in K$,
$$d(x,y) < \delta \Rightarrow d(f(x), f(y)) < \varepsilon.$$
:::

:::proposition
If $f_n \to f \in C^0(K)$ uniformly, then $\{f_n\}$ is bounded in $\|\cdot\|_\infty$ (there is $M$ such that $\|f_n\|_\infty \le M$ for all $n$) and equicontinuous.
:::

:::theorem Arzelà–Ascoli (converse)
If a sequence $f_n \in C^0(K)$ is uniformly bounded and equicontinuous, then it has a uniformly convergent subsequence.
:::

Therefore a subset of $(C^0(K), \|\cdot\|_\infty)$ is compact $\iff$ it is closed, bounded, and equicontinuous.
