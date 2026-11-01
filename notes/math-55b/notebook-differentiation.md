---
course: math-55b
chapter: 5
section: N22
title: Differentiation
source-pages: 48
---

## Lecture 19

:::definition
$f: [a,b] \to \RR$ is **differentiable** at $x$ if
$$\lim_{t \to x} \frac{f(t) - f(x)}{t - x} = f'(x)$$
exists, i.e. for all $\varepsilon > 0$ there is $\delta > 0$ such that
$$0 < |t - x| < \delta \Rightarrow \left|\frac{f(t) - f(x)}{t - x} - f'(x)\right| < \varepsilon.$$
:::

:::proposition
If $f$ is differentiable at $x$, then $f$ is continuous at $x$. (The converse is false.)
:::

:::proof
$$f(t) - f(x) = \underbrace{\frac{f(t) - f(x)}{t - x}}_{\to f'(x) \text{ as } t \to x} \cdot \underbrace{(t - x)}_{\to 0 \text{ as } t \to x},$$
and multiplication is continuous, so $f(t) - f(x) \to f'(x) \cdot 0 = 0$.
:::

The usual rules of calculation ($f + g$, $(f \circ g)'$, etc.) hold.

:::theorem Mean value theorem
If $f: [a,b] \to \RR$ is differentiable, then there is $c \in (a,b)$ such that
$$f(b) - f(a) = f'(c) \cdot (b - a).$$
:::

:::corollary Mean value inequality
If $m \le f'(x) \le M$ for all $x \in (a,b)$, then
$$m(b - a) \le f(b) - f(a) \le M(b - a).$$
:::

Generalization—Taylor’s theorem:

:::theorem Taylor’s theorem
Let $f: [a,b] \to \RR$ be $n$ times differentiable. The degree $n-1$ Taylor polynomial of $f$ at $a$ is
$$P(x) = \sum_{k=0}^{n-1} \frac{f^{(k)}(a)}{k!}(x - a)^k.$$
Then there is $c \in (a,b)$ such that
$$f(b) = P(b) + \frac{f^{(n)}(c)}{n!}(b - a)^n.$$
:::
