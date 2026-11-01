---
course: math-55a
chapter: 9
section: N35
title: Induced representations and Frobenius reciprocity
status: incomplete
source-pages: live 5
---

Setup: $H\le G$, $V$ a representation of $G$, and $W\subset V$ a subspace invariant under $H$. Let $\{\sigma_i\}$ be elements of each coset of $H$ in $G$ (one representative per coset).

:::definition
$V$ is **induced** from $W$ if
$$V=\bigoplus_i\sigma_iW.$$
:::

So
$$V=\operatorname{Ind}(W)=\bigoplus_i\sigma_iW\coloneqq\Big\{\sum_i\sigma_iw_i \;\Big|\; w_i\in W\Big\}.$$
For every $g\in G$ and every $i$, there is a $j$ and an $h\in H$ such that $g\sigma_i=\sigma_jh$; then $g$ maps $\sigma_iW$ to $\sigma_jW$:
$$g(\sigma_iw)=\sigma_j(hw).$$

## Frobenius reciprocity

:::theorem Frobenius reciprocity
If $U$ is a representation of $G$ and $W$ is a representation of $H$, then every $H$-equivariant map $W\to U$ extends uniquely to a $G$-equivariant map $\operatorname{Ind}(W)\to U$. So
$$\Hom_H\big(W,\operatorname{Res}(U)\big)\cong\Hom_G\big(\operatorname{Ind}(W),U\big),$$
which is a natural map in the category-theory sense.
:::

:::proof
Let $V=\operatorname{Ind}(W)=\bigoplus_i\sigma_iW$, and let $\varphi:W\to U$ be $H$-equivariant. We want $\tilde\varphi:V\to U$ that is $G$-equivariant with $\tilde\varphi|_W=\varphi$. Then $\tilde\varphi(\sigma_iw)$ is determined for all $i$ and all $w\in W$: $\tilde\varphi(\sigma_iw)=\sigma_i\varphi(w)$, so
$$\tilde\varphi\Big(\sum_i\sigma_iw_i\Big)=\sum_i\sigma_i\varphi(w_i).$$

:::
