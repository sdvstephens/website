---
course: math-55a
chapter: 9
section: 37
title: Frobenius Reciprocity; Real and Quaternionic Representations
date: 2025-12-03
lecturer: Denis Auroux
source-pages: A37-1–A37-4
---

## Last time

**Induced representations.** Let $H\subset G$ be a subgroup, and $W$ (invariant under $H$) $\subset V$ (a representation of $G$). Denote the cosets of $H$ by $\sigma_iH$. Then $V\simeq\operatorname{Ind}^G_H(W)$ iff $V = \bigoplus_i\sigma_iW$.

Concretely, each $g\in G$ permutes the summands according to its action on $G/H$: if $g\sigma_iH = \sigma_jH$, then $g$ maps $\sigma_iW$ to $\sigma_jW$ (and $g(\sigma_iw) = \sigma_j(\underbrace{\sigma_j^{-1}g\sigma_i}_{\in H}\cdot w)$).

## Frobenius reciprocity

:::proposition Frobenius reciprocity
If $U$ is a representation of $G$, and $W$ a representation of $H$, then every $H$-equivariant map $W\to\operatorname{Res}(U)$ extends uniquely to a $G$-equivariant map $\operatorname{Ind}(W)\to U$:
$$\Hom_H(W,\operatorname{Res}(U))\simeq\Hom_G(\operatorname{Ind}(W),U).$$
:::

:::proof
Choose representatives $\sigma_1,\dots,\sigma_k\in G$ of the cosets of $H$, and let $V = \operatorname{Ind}(W) = \bigoplus\sigma_iW$. Given $\varphi : W\to\operatorname{Res}(U)$ $H$-equivariant, if $\tilde\varphi : V\to U$ is $G$-equivariant and $\tilde\varphi_{|W} = \varphi$, then necessarily
$$\tilde\varphi(\sigma_iw) = \sigma_i\,\tilde\varphi(w) = \sigma_i\cdot\varphi(w)\quad\text{for all } \sigma_i \text{ and all } w\in W,$$
where $\sigma_i\cdot\varphi(w)$ is the action of $\sigma_i\in G$ on $\varphi(w)\in U$. This determines $\tilde\varphi_{|\sigma_iW}$ for all $\sigma_i$, hence $\tilde\varphi$, uniquely.

To check that $\tilde\varphi$ is $G$-equivariant, recall that $g\in G$ acts on $V$ by mapping $\sigma_iW$ to $\sigma_jW$ such that $g\sigma_i = \sigma_jh\in\sigma_jH$, via $g(\sigma_iw) = \sigma_j\cdot hw$. Given $\sigma_iw\in\sigma_iW$,
$$\tilde\varphi(g(\sigma_iw)) = \tilde\varphi(\sigma_j\cdot hw) = \sigma_j\cdot\varphi(hw) = \sigma_jh\,\varphi(w) = g\sigma_i\,\varphi(w) = g(\tilde\varphi(\sigma_iw)),$$
where in $\sigma_j\cdot\varphi(hw)$, $\sigma_j$ is acting on $U$. So $\tilde\varphi g = g\tilde\varphi$ on $\sigma_iW$ for all $i$, hence on $V$.

So $\varphi$ does have a unique $G$-equivariant extension $\tilde\varphi$.

Conversely, given $\tilde\varphi\in\Hom_G(V,U)$, $\tilde\varphi$ is $H$-equivariant, and hence its restriction to $W\subset V$ is $H$-equivariant.
:::

Comparing dimensions, $\dim\Hom_G(\dots) = \dim\Hom_H(\dots)$, which gives:

:::corollary Frobenius reciprocity
$$\langle\chi_{\operatorname{Ind}W},\chi_U\rangle_G = \langle\chi_W,\chi_{\operatorname{Res}U}\rangle_H.$$
:::

(This can also be proved by direct calculation using the formula for $\chi_{\operatorname{Ind}W}$ from last time.)

Thus: if $U$ is an irreducible representation of $G$ and $W$ an irreducible representation of $H$, then the number of times $W$ appears in $\operatorname{Res}(U)$ is equal to the number of times $U$ appears in $\operatorname{Ind}(W)$.

Some of the key motivation for studying induced representations comes from two deep theorems of Artin and Brauer.

:::theorem Artin
Every character of a representation of $G$ is a linear combination with *rational* coefficients of characters of representations induced from *cyclic* subgroups of $G$.
:::

:::theorem Brauer
Every character of a representation of $G$ is a linear combination with *integer* coefficients of characters of representations induced from 1-dimensional representations of *”elementary”* subgroups of $G$,

where **elementary** means isomorphic to a product $C\times H$, with $H$ a $p$-group ($|H| = p^k$) and $C$ cyclic, $C\simeq\ZZ/n$, $p\nmid n$.
:::

(We won’t prove these. See e.g. Serre’s *Linear Representations of Finite Groups*.)

## Real representations

We’ve studied actions of finite groups on complex vector spaces; now we want to do the same for real ones.

- Existence of an invariant inner product still holds (build $\langle\cdot,\cdot\rangle$ by averaging). So every representation is a $\bigoplus$ of irreducibles (given a subrepresentation, its $\perp$ is also a subrepresentation).
- Schur’s lemma fails: $\ZZ/n$ (for $n\geq 3$) acts on $\RR^2$ by rotations; this is irreducible, and has nontrivial automorphisms, e.g. any rotation of $\RR^2$.

The main tool to study real representations is **complexification**:
$$\begin{aligned}
\{\text{real representations}\}&\longrightarrow\{\text{complex representations}\}\\
V_0&\longmapsto V = V_0\otimes_\RR\CC = V_0\oplus iV_0
\end{aligned}$$
($G$ acts by $g(v+iw) = gv+igw$).

:::definition
A complex representation $V$ of $G$ is called **real** if there exists a representation over $\RR$, $V_0$, such that $V = V_0\otimes_\RR\CC$.
:::

A necessary condition: $\chi_V$ must take real values! (The trace of a matrix with $\RR$ entries is real!) This is alas *not* a sufficient condition.

:::example
The quaternion group $Q = \{\pm1,\pm i,\pm j,\pm k\}$, $i^2 = j^2 = k^2 = ijk = -1$, acts faithfully on $\CC^2$ by
$$\pm1\mapsto\pm\mathrm{Id},\quad \pm i\mapsto\pm\begin{pmatrix} i & 0\\ 0 & -i\end{pmatrix},\quad \pm j\mapsto\pm\begin{pmatrix} 0 & 1\\ -1 & 0\end{pmatrix},\quad \pm k\mapsto\pm\begin{pmatrix} 0 & i\\ i & 0\end{pmatrix}.$$
$\chi(\pm1) = \pm2$, and all the others have $\chi = 0$, so $\chi$ takes real values.

However, this does not come from a 2-dimensional real representation: $Q\not\hookrightarrow GL(2,\RR)$. (This is because a real representation of a finite group has an invariant inner product, by the same averaging trick as in the complex case, so we’d get $Q\hookrightarrow O(2)$ (since the action is faithful), with $-1$ acting by $-\mathrm{Id}$; but only 2 elements of $O(2)$ square to $-\mathrm{Id}$ (the rotations by $\pm90^\circ$), while we need 6 such elements, for $\pm i,\pm j,\pm k$.)
:::

:::proposition
A complex representation $V$ is real iff there exists a $G$-equivariant, complex antilinear map $\tau : V\to V$ (i.e. $\tau(\lambda v) = \bar\lambda\,\tau(v)$) such that $\tau^2 = \id$.
:::

:::proof
- $\Rightarrow$ is clear: if $V = V_0\otimes_\RR\CC$, let $\tau(v+iw) = v-iw$ for $v,w\in V_0$: complex conjugation!
- $\Leftarrow$: given $\tau$, $v\in V$ decomposes into
$$\operatorname{Re}(v) = \frac{v+\tau(v)}{2}\quad\text{and}\quad i\operatorname{Im}(v) = \frac{v-\tau(v)}{2},$$
which belong to the $\pm1$ eigenspaces of $\tau$. Let $V_0 = \ker(\tau-\id)$, which is an $\RR$-subspace of $V$ (not a $\CC$-subspace!), and, as $\RR$-linear maps, $\tau i = -i\tau$, so $iV_0$ is the $-1$ eigenspace, and $V = V_0\oplus iV_0\simeq V_0\otimes_\RR\CC$. The above was just linear algebra, but $G$-equivariance of $\tau$ implies that the eigenspace $V_0 = \ker(\tau-1)$ is preserved by $G$, hence is a subrepresentation over $\RR$ (similarly for $iV_0$).
:::

If a complex representation $V$ is real, then $G$ acts by real matrices, so $\chi_V$ takes values in $\RR$.

Conversely, let $V$ be an *irreducible* complex representation of $G$ such that $\chi_V$ takes values in $\RR$.

:::remark Warning
Even if $V_0$ is irreducible over $\RR$, $V_0\otimes_\RR\CC$ might not be irreducible over $\CC$: see e.g. $\ZZ/n$ acting on $\RR^2$ by rotations.
:::

Then $\chi_V = \overline{\chi_V} = \chi_{V^*}$, so $V\simeq V^*$ as $G$-representations.

Recall: a linear map $\varphi : V\to V^*$ determines a bilinear form $B : V\times V\to\CC$, $B(v,w) = \varphi(v)(w)$. $B$ is $G$-invariant iff $\varphi$ is $G$-equivariant. Thus Schur’s lemma for $V\simeq V^*$ irreducible implies that $V$ admits a $G$-invariant bilinear form $B$, unique up to scaling, and nondegenerate if nonzero.

Now recall $B\in(V\otimes V)^* = \operatorname{Sym}^2V^*\oplus\Lambda^2V^*$, i.e. the symmetric and skew parts of $B$ ($=\frac12(B(v,w)\pm B(w,v))$) are also $G$-invariant bilinear forms on $V$. By uniqueness, one of these is zero and the other is nondegenerate; i.e. $B$ is either symmetric or skew.

The symmetric case corresponds to **real** representations; the skew-symmetric case gives **”quaternionic”** representations.

:::proposition
An irreducible complex representation $V$ of a finite group $G$ is real iff $V$ carries a $G$-invariant nondegenerate symmetric bilinear form $B : V\times V\to\CC$.
:::

:::proof
- Assume $V = V_0\otimes_\RR\CC$ is real. Then $V_0$ has an invariant real inner product $B$; extend it $\CC$-bilinearly:
$$B(v_1+iw_1,\,v_2+iw_2) := B(v_1,v_2) + iB(w_1,v_2) + iB(v_1,w_2) - B(w_1,w_2)$$
defines a nondegenerate symmetric bilinear form on $V$.
- Conversely: $B : V\times V\to\CC$ determines an isomorphism $\varphi : V\to V^*$ ($\CC$-linear, equivariant); choosing an invariant Hermitian inner product $H$ on $V$, we also have a $\CC$-antilinear equivariant bijection $V\to V^*$. Composing one with the inverse of the other gives a $\CC$-antilinear equivariant map $\tau : V\to V$, characterized by
$$H(\tau(v),w) = B(v,w).$$
$\tau^2$ is now an equivariant $\CC$-linear isomorphism $V\to V$, hence $\tau^2 = \lambda\,\mathrm{Id}$ by Schur. A calculation:
$$H(\tau^2(v),v) = B(\tau(v),v) = B(v,\tau(v)) = H(\tau(v),\tau(v))\geq 0$$
shows $\lambda\in\RR_+$; replacing $H$ by $\lambda^{1/2}H$, we can arrange $\tau^2 = \id$. Thus $V$ is real by the previous proposition.
:::

:::remark Quaternionic representations
In the other case, where the invariant bilinear form $B$ is skew-symmetric, the same argument gives a $\CC$-antilinear equivariant bijective map $J : V\to V$ which now satisfies $J^2 = -\id$. This is a **quaternionic structure** on $V$, i.e. it describes a structure of $\mathbb{H}$-module on $V$, where
$$\mathbb{H} = \text{quaternions} = \{a+bi+cj+dk \mid a,b,c,d\in\RR\},\qquad i^2 = j^2 = k^2 = ijk = -1,$$
a “division algebra” (a noncommutative analogue of a field: $\mathbb{H}$ is a noncommutative ring such that every nonzero element has a multiplicative inverse). $\mathbb{H} = \CC1\oplus\CC j$, with $ji = -ij$, $j^2 = -1$, so an $\mathbb{H}$-module is the same thing as a $\CC$-vector space plus an antilinear map $j$ such that $j^2 = -\id$.
:::

:::example
The standard representation $V$ of $S_3$ is real.  This can be seen directly if we notice that $S_3\simeq D_3$ acts on $V_0 = \RR^2$ by rotations and reflections, and $V_0\otimes_\RR\CC\simeq V$… or more abstractly by observing that $V^*\simeq V$, and $\Lambda^2V^*\simeq U'$ has no trivial summand, hence there is no invariant skew-symmetric $B\in\Lambda^2V^*$, but $\operatorname{Sym}^2V^*\simeq U\oplus V$ has a trivial summand, giving an invariant symmetric bilinear form $B\in\operatorname{Sym}^2V^*$, and applying the above.
:::

:::example
The quaternion group $Q = \{\pm1,\pm i,\pm j,\pm k\}$, $i^2 = j^2 = k^2 = ijk = -1$, acts on $\CC^2$ by
$$\pm1\mapsto\pm\mathrm{Id},\quad \pm i\mapsto\pm\begin{pmatrix} i & 0\\ 0 & -i\end{pmatrix},\quad \pm j\mapsto\pm\begin{pmatrix} 0 & -1\\ 1 & 0\end{pmatrix},\quad \pm k\mapsto\mp\begin{pmatrix} 0 & i\\ i & 0\end{pmatrix}.$$
$\chi$ takes real values, but this doesn’t come from a real representation: $Q\not\hookrightarrow O(\RR^2)$.

Rather, this is a quaternionic representation: $\mathbb{H}\simeq\CC\oplus j\CC$, and the above linear maps correspond to left multiplication by elements of $Q$. (E.g. $i(z_1+jz_2) = iz_1 + j(-iz_2)$, $k(z_1+jz_2) = (-iz_2) + j(-iz_1)$.) The $\CC$-antilinear map $J : V\to V$, $J^2 = -1$, is *right* multiplication by $j$ (it commutes with left multiplication ✓).
:::

We’ll end here with the content on representation theory.
