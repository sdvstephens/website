---
course: math-55b
chapter: 2
section: N13
title: The Lebesgue Number Lemma
source-pages: 17
---

:::lemma Lebesgue number lemma (Lemma 2)
If $X$ is a sequentially compact metric space, then every open cover $(U_i)$ of $X$ has a $\delta>0$ such that
$$\diam(A)<\delta\implies\exists i\text{ such that }A\subset U_i.$$
Such a $\delta$ is called a **Lebesgue number**.
:::

:::proof
Suppose there exists an open cover $(U_i)$ without a Lebesgue number. Then for all $n\ge1$ there exists $C_n\subset X$ with $\diam(C_n)\le\frac1n$ such that no $U_i$ contains $C_n$. Pick points $x_n\in C_n$.

![Shrinking sets C_n containing points x_n that accumulate at a point a](/notes/math-55b/figures/b1-lebesgue.svg)

$X$ is sequentially compact, so there exists a convergent subsequence $(x_{n_k})\to a\in X$.

There exists $i_0$ such that $a\in U_{i_0}$, which is open, so there exists $\varepsilon>0$ such that $B_\varepsilon(a)\subset U_{i_0}$. For large enough $k$,
$$d(x_{n_k},a)<\frac{\varepsilon}{2},\qquad \diam(C_{n_k})\le\frac{1}{n_k}<\frac{\varepsilon}{2}.$$
So $C_{n_k}\subset B_\varepsilon(a)\subset U_{i_0}$, a contradiction!
:::
