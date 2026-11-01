---
course: math-55a
chapter: 1
section: N13
title: Things I forgor: cosets, normal subgroups, quotients
source-pages: live2 5
---

## Left cosets

![A group G drawn as a box containing two disjoint circles, the subgroup K and its left coset aK](/notes/math-55a/figures/n1-cosets.svg)

$$aK=\{ak\mid k\in K\}:$$
all the $ak$ for $k\in K$. These lie in $G$, but not in $K$ (when $a\notin K$): it’s $\check K$, evil $K$.

Yay! Right cosets are the SAME, but opposite.

## Index of subgroups

:::definition
The **index** of $H\le G$ is the number of cosets (right or left, because both have the same number).
:::

## Normal subgroups

:::definition
$H\trianglelefteq G$ ($H$ is **normal**) $\iff$ $H\le G$ and $aH=Ha$ for all $a\in G$, i.e., $aHa^{-1}=H$.
:::

## Kernel

For $\varphi:G\to H$, $\ker(\varphi)\le G$. If $K\trianglelefteq G$:
$$\ker(\varphi)=K\le A\le G,$$
where $K\trianglelefteq G$ and $A$ is a pre-image/inverse image(?). Else, $\ker(\varphi)\le A\le G$.

So we get the theorem:

:::theorem
Given a group $G$ and $K\le G$, the following are equivalent:
$$K=\ker(\varphi)\ \text{for some homomorphism }\varphi\quad\equiv\quad K\trianglelefteq G\quad\equiv\quad G/K\text{ has a group structure given by }(aK)(bK)=abK.$$
:::

## Injections both ways

:::theorem Schröder–Bernstein (finite case)
There are injections $f:H\hookrightarrow G$ and $g:G\hookrightarrow H$ $\iff$ $|G|=|H|$.
:::

:::proof
($\Leftarrow$) $|G|=|H|\iff G\cong H$ as sets (there is a bijection), and a bijection and its inverse give injections $f:H\hookrightarrow G$ and $g:G\hookrightarrow H$.

($\Rightarrow$) For finite $G,H$: $f$ gives $|H|\le|G|$ and $g$ gives $|G|\le|H|$, so $|G|=|H|$.

:::

Scratch: $(2\,3)(3\,2)=(2)(3)=1$.
