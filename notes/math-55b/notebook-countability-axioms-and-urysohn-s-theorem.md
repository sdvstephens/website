---
course: math-55b
chapter: 3
section: N17
title: Countability Axioms and Urysohn’s Theorem
source-pages: 35-37
---

## Lecture 10

**Urysohn’s theorem:** a criterion for a topological space to be metrizable.

### Countability axioms

Metrizability requires first-countability.

:::definition
$X$ is **first-countable** if for all $x \in X$ there is a countable basis of neighborhoods, i.e. there are open sets $U_1, U_2, \dots \ni x$ such that every neighborhood of $x$ contains one of the $U_n$.
:::

Counterexample: $\RR^{\RR}$. Metric spaces are first-countable: $B_1(x) \supset B_{1/2}(x) \supset \dots \supset B_{1/n}(x) \supset \dots$

In a first-countable space, $x \in \overline{A} \iff$ there is a sequence $x_n \in A$ with $x_n \to x$.

A second, stricter condition: second-countable.

:::definition
$X$ is **second-countable** if its topology has a countable basis.
:::

:::example
- $\RR^n$ has the countable basis $\{B_r(x) \mid r \in \QQ_{>0},\ x \in \QQ^n\}$.
- $\RR^\omega = \RR^{\NN}$ with the product topology has a countable basis: products of finitely many $(a_i, b_i)$ with $a_i, b_i \in \QQ$, times copies of $\RR$.
- $\RR^\omega$ under the uniform topology doesn’t have a countable basis. (A countable basis gives a countable dense subset: e.g. take one point in each basis open set.) But the balls $B_{1/2}((x_n))$ with all $x_n \in \{0,1\}$ are uncountably many disjoint open sets (their centers are all at distance $1$ from each other).
:::

If $X$ has a countable dense subset and is metrizable, then there exists a countable basis. This is false in general: $\QQ$ is a countable dense subset of $\RR_\ell$, which has no countable basis.

### Normal spaces

Recall:

- $X$ **Hausdorff** ($T_2$): any two points have disjoint open neighborhoods.
- $T_3$: $X$ **regular**: for all $x \notin B$ with $B$ closed, there are disjoint open $U \ni x$, $V \supset B$.
- $T_4$: $X$ **normal**.

$$\text{metrizable} \Rightarrow \text{normal} \Rightarrow \text{regular} \Rightarrow \text{Hausdorff},$$
where regular $\Rightarrow$ Hausdorff uses $T_1$ (points are closed). The converses fail: $\RR_\ell^2$ is regular but not normal, and $\RR_\ell$ is normal but not metrizable.

:::theorem
Hausdorff and compact $\Rightarrow$ normal. (HW 2)
:::

:::theorem
Metric spaces are normal.
:::

:::proof
Let $A, B$ be disjoint closed sets in $(X,d)$. For each $a \in A$ choose $\varepsilon_a > 0$ with $B_{\varepsilon_a}(a) \cap B = \emptyset$, and for each $b \in B$ choose $\varepsilon_b > 0$ with $B_{\varepsilon_b}(b) \cap A = \emptyset$ (possible since $A$ and $B$ are closed). Now
$$U = \bigcup_{a \in A} B_{\varepsilon_a/2}(a), \qquad V = \bigcup_{b \in B} B_{\varepsilon_b/2}(b)$$
are open, contain $A$ resp. $B$, and are disjoint: $B_{\varepsilon_a/2}(a) \cap B_{\varepsilon_b/2}(b) = \emptyset$, because if $z$ were in both, then
$$d(a,b) \le d(a,z) + d(z,b) < \frac{\varepsilon_a}{2} + \frac{\varepsilon_b}{2} \le \max(\varepsilon_a, \varepsilon_b),$$
so $a \in B_{\varepsilon_b}(b)$ or $b \in B_{\varepsilon_a}(a)$. Contradiction.

![Disjoint closed sets A and B with disjoint half-radius balls around a ∈ A and b ∈ B](/notes/math-55b/figures/b2-metric-normal.svg)
:::

Metrizable $\Rightarrow$ (first-)countable + normal. *(I forgor: necessary & sufficient.)*

:::theorem Urysohn
If $X$ has a countable basis and is normal, then $X$ is metrizable.
:::

:::lemma Urysohn’s lemma
Let $X$ be normal and $A, B$ disjoint closed subsets. Then there is a continuous $f: X \to [0,1]$ such that $f(x) = 0$ for all $x \in A$ and $f(x) = 1$ for all $x \in B$.
:::

> “building $f$ by specifying more and more…”

:::proposition Reformulation of normality
$X$ is normal $\iff$ for every closed $A$ and open $U$ with $A \subset U$, there is an open $V$ such that $A \subset V \subset \overline{V} \subset U$.
:::

:::proof
($\Rightarrow$) $B = X - U$ is closed and disjoint from $A$. Since $A, B$ are closed and disjoint, there are disjoint open sets $V \supset A$ and $V' \supset B$, $V \cap V' = \emptyset$. Then
$$A \subset V \subset X - V' \subset X - B = U,$$
with $V$ open and $X - V'$ closed, so $\overline{V} \subset X - V' \subset U$.
:::

![A closed set A (f = 0) inside an open V whose closure lies in an open U; f = 1 outside U](/notes/math-55b/figures/b2-normality-reformulation.svg)

:::proof Proof of Urysohn’s lemma
Given disjoint closed $A, B$, let $U_1 = X - B$, which is open and contains $A$. Pick $U_0$ open with $A \subset U_0 \subset \overline{U_0} \subset U_1$. Then pick an open $U_{1/2}$ with $\overline{U_0} \subset U_{1/2} \subset \overline{U_{1/2}} \subset U_1$, and so on, inductively for all of $[0,1] \cap \QQ$. This builds open sets $U_q$ for all $q \in [0,1] \cap \QQ$ such that
$$p < q \Rightarrow \overline{U_p} \subset U_q.$$
Define $U_q = \emptyset$ if $q < 0$ and $U_q = X$ if $q > 1$. Define
$$f(x) = \inf(\QQ_x), \qquad \text{with } \QQ_x = \{q \in \QQ \mid x \in U_q\}.$$
Then $\QQ \cap (1, \infty) \subset \QQ_x \subset \QQ \cap [0, \infty)$. Claim: $f(x) \in [0,1]$.
:::

$X$ normal + countable basis $\Rightarrow$ construct an embedding $F: X \hookrightarrow [0,1]^{\NN}$ (product topology): $F$ is injective, and $X \cong F(X)$ (homeomorphism, with the subspace topology on $F(X)$). The product topology on $[0,1]^{\NN}$ is given by the metric
$$d\big((x_n), (y_n)\big) = \sup_n \left\{\tfrac{1}{n}|y_n - x_n|\right\}, \qquad B_\varepsilon\big((x_n)\big) \approx \prod_n (x_n - n\varepsilon,\ x_n + n\varepsilon).$$
