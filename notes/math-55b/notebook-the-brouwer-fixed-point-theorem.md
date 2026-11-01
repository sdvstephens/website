---
course: math-55b
chapter: 4
section: N20
title: The Brouwer Fixed Point Theorem
source-pages: 43
---

:::theorem Brouwer fixed point theorem
Every continuous $f: B^2 \to B^2$ has a fixed point.
:::

:::theorem
There is no retraction from $B^2$ to $S^1$.
:::

(A **retraction** $r: B^2 \to S^1$ is a map with $r \circ i = \id_{S^1}$, where $i: S^1 \hookrightarrow B^2$ is the inclusion.)

There is also an algebraic topology proof of the fundamental theorem of algebra over $\CC$ (cool).

A **loop** in $(X, x_0)$ is a map $I \to X$ such that $\{0, 1\} \mapsto x_0$. Since $I/(0 \sim 1)$ is homeomorphic to $S^1$, we can also think of it as a map $F: (S^1, p_0) \to (X, x_0)$. So $\pi_1(X, x_0) \rightsquigarrow$ homotopy classes of maps $S^1 \to X$.

:::lemma
Let $h: S^1 \to X$ be continuous. The following are equivalent:

1. $h$ is nullhomotopic (homotopic to a constant map);
2. $h$ extends to a continuous map $k: B^2 \to X$;
3. $h_*: \pi_1(S^1, b_0) \to \pi_1(X, h(b_0))$ is the trivial homomorphism. (Here $\pi_1(S^1, b_0) \cong \ZZ$.)
:::
