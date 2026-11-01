---
course: math-55b
chapter: 3
section: N15
title: Compactification
source-pages: 30-33
---

*(Munkres §29)*

Let $X$ be a topological space (Hausdorff). I want a compact topological space $Y$ (which we also want to be Hausdorff) together with an inclusion map $i: X \hookrightarrow Y$ which is an embedding, i.e. $i: X \to i(X) \subset Y$ (with the subspace topology) is a homeomorphism onto its image. So $X \cong i(X) \subset Y$ (subspace), and $\overline{X} = Y$ ($X$ dense): $X$ is open and dense in $Y$.

:::example
We want to compactify $\RR^n \to \RR^n \cup \{\infty\}$; this is homeomorphic to the unit sphere $S^n$ (the sphere in $\RR^{n+1}$). For $n = 1$,
$$\RR \underset{\text{homeo}}{\cong} (0,1) \underset{\text{homeo}}{\cong} (0, 2\pi) \subset S^1 \subset \RR^2,$$
the unit circle minus one point, and adding that point back gives $S^1$. But $(0,1)$ also compactifies to $[0,1]$, which corresponds to $\RR \cup \{\pm\infty\}$. Compactifications are not unique.

Similarly $\RR^2 \cong (0,1) \times (0,1) \cong$ open disc $\rightsquigarrow$ sphere, since $S^2 - \{\text{point}\} \underset{\text{homeo}}{\cong} \RR^2$, with the missing point as $\infty$. To compactify, we find something homeomorphic that is compact (if not already compact). The sketch also shows a closed disc and a closed square.

![Three compactifications: the circle as R plus a point at infinity, [0,1] as R plus ±∞, and the sphere as R² plus a point at infinity](/notes/math-55b/figures/b2-compactifications.svg)
:::

## One-point compactification

If it exists, it is unique up to homeomorphism. Let $Y = X \cup \{\infty\}$, where $\infty$ is a new point. We want: $Y$ compact, and the subspace topology on $X \subset Y$ is $\mathcal{T}_X$, with $X$ open in $Y$. So:

- a subset $U \subset X$ is open in $Y$ iff $U \in \mathcal{T}_X$;
- a subset $V \subset Y$ containing $\infty$ is open in $Y$ iff $Y - V$ is closed, hence compact.

So $V = Y - K$ with $K \subset X$ compact.

:::definition
$$\mathcal{T}_Y := \underbrace{\{U \subset X \text{ open}\}}_{\text{type 1}} \cup \underbrace{\{Y - K \mid K \subset X \text{ compact}\}}_{\text{type 2}}$$
is the topology on a **one-point compactification**.
:::

:::theorem
$\mathcal{T}_Y$ is a topology on $Y$, $Y$ is compact, $X \subset Y$ is open, and the subspace topology on $X$ is $\mathcal{T}_X$.
:::

:::remark
However, $\overline{X} = Y$ ($X$ dense in $Y$, $X$ open) fails if $X$ was already compact: then $\{\infty\} \in \mathcal{T}_Y$, so $\infty$ is an isolated point of $Y$. Also, even if $X$ is Hausdorff, $Y$ might not be.
:::

:::proof
$\emptyset$ is of type 1 and $Y$ is of type 2. Unions: a union of type 1 sets is type 1. For unions of type 2 sets,
$$\bigcup_i (Y - K_i) = Y - \Big(\bigcap_i K_i\Big),$$
so they are still type 2 ($\bigcap_i K_i$ is closed, hence compact?). For mixed unions,
$$U \cup (Y - K) = Y - (K \cap U^c),$$
where $U^c$ is closed and $K \cap U^c$ is compact. It remains to check finite intersections.

$Y$ is compact: let $(A_i)$ be an open cover of $Y$. Some $A_{i_0} \ni \infty$, and $A_{i_0} = Y - K$ for some compact $K \subset X$. Then $(A_i \cap K)$ is an open cover of $K$, so it has a finite subcover: there are $i_1, \dots, i_n$ with $A_{i_1} \cup \dots \cup A_{i_n} \supset K$, and $A_{i_0} \cup A_{i_1} \cup \dots \cup A_{i_n} = Y$. So this is a finite subcover.

![X covered by open sets; the set containing the new point ∞ is Y − K with K compact](/notes/math-55b/figures/b2-one-point-cover.svg)
:::

:::definition
$X$ is **locally compact** if for all $x \in X$ there is a compact $K \subset X$ such that $K$ contains a neighborhood of $x$.
:::

![A compact set K containing an open neighborhood U of x](/notes/math-55b/figures/b2-locally-compact.svg)

$\RR^n$ is locally compact; $\QQ$ isn’t. $\RR^{\NN}$ is not compact.

:::theorem
The one-point compactification $Y$ is Hausdorff iff $X$ is locally compact and Hausdorff.
:::

:::proof
$X$ is Hausdorff $\iff$ we can separate points of $X \subset Y$ by open subsets (in $X$ or in $Y$). And
$$\begin{aligned}
X \text{ locally compact} &\iff \forall x \in X\ \exists \text{ opens } U \ni x,\ Y - K \ni \infty \text{ such that } U \subset K, \text{ i.e. } U \cap (Y - K) = \emptyset \\
&\iff \forall x \in X,\ x \text{ and } \infty \text{ have disjoint neighborhoods in } Y.
\end{aligned}$$
:::

*End of midterm stuff.*
