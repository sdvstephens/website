---
course: math-55b
chapter: 3
section: N18
title: The Quotient Topology
source-pages: 38-41
---

Given a surjective map $f: X \to A = X/{\sim}$ to the set of classes of an equivalence relation $\sim$, the quotient topology is: $U \subset A$ open $\iff f^{-1}(U) \subset X$ open. For example, $q: [0,1] \to S^1$, identifying $0 \sim 1$ (and $x \sim x$):

![The interval [0,1] mapped onto the circle by gluing 0 to 1; small intervals at both ends become one open arc](/notes/math-55b/figures/b2-interval-to-circle.svg)

## Lecture 12

:::definition
Given a surjective map $q: X \twoheadrightarrow A$ (e.g. $A = X/{\sim}$), the **quotient topology** on $A$ has $U \subset A$ open $\iff q^{-1}(U) \subset X$ open.
:::

:::example
Let $X = [0,1] \times [0,1]$ and set $(0,t) \sim (1,t)$ for all $t \in [0,1]$. The quotient is the cylinder $S^1 \times [0,1]$. If instead $(0,t) \sim (1, 1-t)$, we get the **Möbius band**/strip. (An open set of the quotient that straddles the glued edge comes from two half-discs, one on each of the glued edges of the square.)

Similarly we can produce a torus from a square: $X = [0,1] \times [0,1]$ with
$$(x,0) \sim (x,1), \qquad (0,y) \sim (1,y)$$
gives $T = S^1 \times S^1$. (The four corners glue to one point, and an open set around it comes from four quarter-discs at the corners.) And the Klein bottle:

![Squares with edge gluings giving the cylinder, the Möbius band, the torus and the Klein bottle](/notes/math-55b/figures/b2-square-identifications.svg)
:::

### Continuous maps from a quotient space

Property: what are the continuous maps from a quotient space? (Equivalent to the property in the first isomorphism theorem.) Given $f: X \to Y$, we want $\bar f: X/{\sim} \to Y$ with $\bar f([x]) = f(x)$, and then $f = \bar f \circ q$:

![Commutative triangle: f from X to Y factors as the quotient map q followed by f-bar](/notes/math-55b/figures/b2-quotient-universal.svg)

If $[x] = [x']$ we need $\bar f([x]) = \bar f([x'])$, so we need $x \sim x' \Rightarrow f(x) = f(x')$: “$f$ is compatible with $\sim$”. This is to say there is a bijection
$$\{f: X \to Y \text{ such that } x \sim x' \Rightarrow f(x) = f(x')\} \overset{1:1}{\longleftrightarrow} \{\bar f: X/{\sim} \to Y\}.$$

:::theorem
Let $X, Y$ be topological spaces. Equip $X/{\sim}$ with the quotient topology. Then the above gives a bijection
$$\{f: X \to Y \text{ continuous such that } x \sim x' \Rightarrow f(x) = f(x')\} \overset{1:1}{\longleftrightarrow} \{\bar f: X/{\sim} \to Y \text{ continuous}\}.$$
:::

:::example
Let $X = \RR^{n+1} - \{0\}$ and define the equivalence relation $x \sim y$ iff $x, y$ lie on the same line through the origin, i.e. $x = \alpha y$ for some $\alpha \in \RR$, $\alpha \neq 0$. This is an equivalence relation. The quotient space is **projective $n$-space**, $\mathbb{RP}^n = X/{\sim}$ with the quotient topology (the space of lines through $0$ in $\RR^{n+1}$).

A neighborhood of $[x] \in \mathbb{RP}^n$ corresponds to a cone-like open set in $\RR^{n+1} - \{0\}$ containing this line and all nearby lines through $0$.

![A line through the origin inside a shaded double cone of nearby lines](/notes/math-55b/figures/b2-rpn-cone.svg)
:::
