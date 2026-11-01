---
course: math-55b
chapter: 4
section: N21
title: Classifying Covering Spaces
status: incomplete
source-pages: 44-45
---

## Lecture 17

Recall: classifying covering spaces.

:::theorem
$p_*: \pi_1(E, e_0) \to \pi_1(B, b_0)$ is an injective homomorphism.
:::

The subgroup $H = \operatorname{Im} p_* \le \pi_1(B, b_0)$ determines the covering ($E$ and $p$). Assuming $B$ is nice enough (“semi-locally simply connected”), for each subgroup of $\pi_1(B, b_0)$ there is a covering $p: E \to B$.

### Lifting lemmas for loops

:::theorem
A loop $f$ in $(B, b_0)$ lifts to a loop in $(E, e_0)$ $\iff$ $[f] \in \operatorname{Im} p_* \le \pi_1(B, b_0)$, i.e. $f \simeq_p p \circ h$ for a loop $h$ at $e_0$.
:::

![A loop f at b0 in B and its lift, a loop at e0 in E, with the covering map p from E down to B](/notes/math-55b/figures/b2-loop-lifting.svg)

### General lifting lemma

:::theorem
Let $p: (E, e_0) \to (B, b_0)$ be a covering map, $Y$ path-connected and locally path-connected, and $f: Y \to B$ a continuous map with $f(y_0) = b_0$. Then $f$ can be lifted to a continuous $\tilde f: Y \to E$ with $y_0 \mapsto e_0$ and $p \circ \tilde f = f$ $\iff$ $f_*(\pi_1(Y, y_0)) \subseteq p_*(\pi_1(E, e_0))$. If the lift exists, it is unique.
:::

![Lifting diagram: f from (Y, y0) to (B, b0), the covering p from (E, e0), and a dashed lift f-tilde from Y to E](/notes/math-55b/figures/b2-general-lifting.svg)

*(Margin note: I should create my own shorthand script specifically for math.)*

:::definition
$Y$ is **locally path-connected** if for all $y \in Y$ and every neighborhood $U \ni y$, there is a neighborhood $V \subseteq U$ of $y$ such that $V$ is path-connected.
:::

:::definition
Let $p: E \to B$ and $p': E' \to B$. Say $p$ and $p'$ are **equivalent** if there is a homeomorphism $h: E \to E'$ such that $p = p' \circ h$ (equivalently $p' = p \circ h^{-1}$).

![Commutative triangle: a homeomorphism h from E to E’ over B, with p = p’ ∘ h](/notes/math-55b/figures/b2-covering-equivalence.svg)
:::

Assume $E, E', B$ are path-connected and $B$ is locally path-connected (then so are $E, E'$).

:::theorem
Let $p: E \to B$ and $p': E' \to B$ be covering maps. …
:::
<!-- The notebook stops in the middle of this theorem statement (page 45). -->
