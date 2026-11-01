---
course: math-55b
chapter: 5
section: N23
title: The Spaces $C^k$ and Power Series
status: incomplete
source-pages: 49
---

## Lecture 20

Let
$$C^k([a,b], \RR) = \{k\text{-times differentiable functions with } f^{(k)} \text{ continuous}\}, \qquad \|f\|_{C^k} = \sum_{j=0}^{k} \|f^{(j)}\|_\infty.$$

:::theorem
If $f_n \in C^1$, $f_n \to f$ pointwise, and $f_n' \to g$ uniformly, then $f \in C^1$ and $f' = g$ (and $f_n \to f$ uniformly).
:::

:::corollary
$C^k([a,b], \RR)$ is a complete metric space.
:::

:::proof
Use completeness of $C^0$ (uniform topology). If $f_n$ is Cauchy in $C^1$, then $f_n$ and $f_n'$ are Cauchy in $C^0$, so there are uniform limits $f, g \in C^0$. By the theorem, $f \in C^1$ and $f' = g$. Now $f_n \to f$ and $f_n' \to f'$ uniformly, so $f_n \to f$ in $C^1$. This proves the case $k = 1$. Repeat the same argument for successive derivatives for $k > 1$.
:::

:::corollary
If $f(x) = \sum a_n x^n$ is a power series with radius of convergence $R$, then $f$ is $C^\infty$ on $(-R, R)$ and $f'(x) = \sum n a_n x^{n-1}$.
:::

### Integration

The definite integral of a continuous function is a *linear operator* $I_a^b: C^0([a,b], \RR) \to \RR$, $f \mapsto I_a^b(f) = \int_a^b f\,dx$, for each $a < b \in \RR$, satisfying …
<!-- The notebook stops here (page 49); page 50 is blank. The integration material continues on notebook pages 46-47 (next section). -->
