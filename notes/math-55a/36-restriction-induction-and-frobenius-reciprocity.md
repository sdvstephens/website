---
course: math-55a
chapter: 9
section: 36
title: Restriction, Induction and Frobenius Reciprocity
date: 2025-12-01
lecturer: Denis Auroux
source-pages: A36-1–A36-5
---

## Before break

We determined the character table of $S_5$ using known representations, $\Lambda^2V$, $\operatorname{Sym}^2V$, and orthogonality. The irreducible representations of $S_5$ are:
- $U$ trivial, $U'$ alternating, $V$ standard, $V' = V\otimes U'$ (dimension 4);
- $\Lambda^2V$ (dimension 6);
- $W$ (dimension 5) such that $\operatorname{Sym}^2V = U\oplus V\oplus W$, and $W' = W\otimes U'$.

## Representations of $A_5$

Next, move on to $A_5$. The starting point is to restrict the irreducible representations of $S_5$ to $A_5$ and see which ones remain irreducible or decompose. Of course, different irreducible representations of $S_5$ can become isomorphic after restriction: namely, elements of $A_5$ act by $\id$ on $U'$, so $U'$ becomes trivial; and the restrictions of $V$ and $V' = V\otimes U'$ become isomorphic; similarly for $W$. The character table of $S_5$ gives, after restriction:

| | $e$ | $(123)$ | $(12345)$ | $(12354)$ | $(12)(34)$ |
|---|---|---|---|---|---|
| (class size) | 1 | 20 | 12 | 12 | 15 |
| $U$ | 1 | 1 | 1 | 1 | 1 |
| $V$ | 4 | 1 | $-1$ | $-1$ | 0 |
| $W$ | 5 | $-1$ | 0 | 0 | 1 |
| $\Lambda^2V$ | 6 | 0 | 1 | 1 | $-2$ |

Calculating $H(\chi,\chi)$, we find that $U$, $V$, $W$ are irreducible, while $H(\chi_{\Lambda^2V},\chi_{\Lambda^2V}) = 2$, so $\Lambda^2V$ breaks into the direct sum of 2 distinct irreducibles. Also $\Lambda^2V$ doesn’t contain $U$, $V$ or $W$, so $\Lambda^2V = Y\oplus Z$, the last two irreducible representations of $A_5$.

From $\sum\dim^2 = |A_5| = 60$ we find $\dim Y = \dim Z = 3$. How do we find $\chi_Y$ and $\chi_Z$? Using orthogonality: $\chi_Y + \chi_Z = \chi_{\Lambda^2V}$, so
$$\chi_Y-\chi_Z\in\operatorname{span}(\chi_U,\chi_V,\chi_W,\chi_{\Lambda^2V})^\perp.$$
Hence $\chi_Y-\chi_Z = (0,0,a,-a,0)$, where
$$H(\chi_Y-\chi_Z,\chi_Y-\chi_Z) = 2\;\Rightarrow\; 24|a|^2 = 120,\quad |a| = \sqrt5.$$

Thus:

| | $e$ | $(123)$ | $(12345)$ | $(12354)$ | $(12)(34)$ |
|---|---|---|---|---|---|
| (class size) | 1 | 20 | 12 | 12 | 15 |
| $Y$ | 3 | 0 | $\frac{1+\sqrt5}{2}$ | $\frac{1-\sqrt5}{2}$ | $-1$ |
| $Z$ | 3 | 0 | $\frac{1-\sqrt5}{2}$ | $\frac{1+\sqrt5}{2}$ | $-1$ |

:::remark
In fact, either
- $Y^*\simeq Y$ and $Z^*\simeq Z$ $\Rightarrow$ $\chi_Y,\chi_Z\in\RR$ $\Rightarrow$ $a=\pm\sqrt5$; or
- $Y^*\simeq Z$ and $Z^*\simeq Y$ $\Rightarrow$ $\chi_Y = \overline{\chi_Z}$ $\Rightarrow$ $a\in i\RR$, $a = \pm i\sqrt5$.

The existence of a real 3-dimensional representation (see below) implies it’s $a = \pm\sqrt5$.
:::

What are $Y$ and $Z$?? Recall: $A_5$ is the group of rotational symmetries of an icosahedron in $\RR^3$. So
$$A_5\hookrightarrow SO(3)\subset GL(3,\RR)\subset GL(3,\CC).$$
($Y$ and $Z$ differ by an outer automorphism of $A_5$: conjugation by a transposition inside $S_5$.)

:::remark
The fact that the character takes irrational values implies that there does not exist a regular icosahedron (or dodecahedron) in $\RR^3$ whose vertices all have rational coordinates! Otherwise we’d get that the representation factors through $GL(3,\QQ)$, and $\operatorname{tr}(g)\in\QQ$ for all $g$. This is even true in any coordinate system, not necessarily orthonormal.
:::

## Restriction and induction

A more systematic approach: if $G$ is a finite group and $H\subset G$ a subgroup, then we have a **restriction** operation
$$\operatorname{Res}^G_H : \text{representations of } G\longrightarrow\text{representations of } H.$$
This is actually a **functor** $\operatorname{Rep}(G)\to\operatorname{Rep}(H)$ [objects $=$ representations of $G$, resp. of $H$; morphisms $=$ homomorphisms of representations].

How about the opposite direction?

Suppose $V$ is a representation of $G$, and $W\subset V$ is invariant under $H$ (but not all of $G$). Now for $g\in G$, the subspace $gW\subset V$ depends only on the coset $gH$, and each $gW$ is a representation of $gHg^{-1}$, with
$$\begin{CD}
H @>{\rho}>> GL(W)\\
@V{c_g}V{\simeq}V @VV{\text{conj. by } g}V\\
gHg^{-1} @>>> GL(gW)
\end{CD}$$

The simplest possible scenario is
$$V = \bigoplus_{\sigma\in G/H}\sigma W$$
(which implies $\dim V = |G/H|\cdot\dim W$). [In general there is no reason for this to hold.]

If this happens, then the representation of $G$ is completely determined by that of $H$. Indeed, choose representatives $\sigma_1,\dots,\sigma_k\in G$ of the cosets of $H$ (each coset contains one $\sigma_i$). Given $g\in G$, $g\sigma_i\in\sigma_jH$ for some $j$, so there exists $h\in H$ such that $g = \sigma_jh\sigma_i^{-1}$. Then $g$ acts by mapping $\sigma_iW$ to $\sigma_jW$, with $g(\sigma_iw) = \sigma_j\,h(w)$.

:::definition
A representation $V$ of $G$, with a subspace $W\subset V$ which is invariant under the subgroup $H\subset G$ (i.e. a subrepresentation of $\operatorname{Res}^G_HV$), is said to be **induced** by $W\in\operatorname{Rep}(H)$ if, as a vector space,
$$V = \bigoplus_{\sigma\in G/H}\sigma W.$$
We write $V = \operatorname{Ind}^G_HW$.
:::

That is, fixing one element in each coset, $\sigma_1,\dots,\sigma_k\in G$, we can write each $v\in V$ uniquely as $v = \sigma_1w_1+\dots+\sigma_kw_k$ for $w_1,\dots,w_k\in W$.

:::theorem
Given a representation $W$ of $H$, the induced representation $V = \operatorname{Ind}^G_HW$ exists and is unique up to isomorphism of $G$-representations.
:::

:::proof
- **Uniqueness:** given $V\in\operatorname{Rep}(G)$ and $W\subset V$ invariant under $H$ and such that $V = \bigoplus_{i=1}^k\sigma_iW$, necessarily $g\in G$ acts by mapping $\sigma_iW$ to $\sigma_jW$, where $j$ is such that $g\sigma_i\in\sigma_jH$, i.e. $h = \sigma_j^{-1}g\sigma_i\in H$, and necessarily $g(\sigma_iw) = \sigma_jhw\in\sigma_jW$. This determines the $G$-action uniquely.
- **Existence:** build $V = \bigoplus_{i=1}^k\sigma_iW$, where the $\sigma_i$ are now formal symbols (i.e. the direct sum of $k = |G/H|$ copies of $W$), and make $g\in G$ act as above.
:::

:::example
1. The permutation representation associated to the left action of $G$ on $G/H$ is induced by the trivial representation of $H$. Indeed, $V$ has a basis $\{e_\sigma\}_{\sigma\in G/H}$; the basis element $e_H$ (for the coset $H$) is fixed by $H$, so $W = \operatorname{span}(e_H)$ is invariant under $H$, and $gW = \operatorname{span}(e_{gH})$, with
$$V = \bigoplus_{gH\in G/H}\operatorname{span}(e_{gH}) = \bigoplus_{gH\in G/H}gW.$$
2. The regular representation of $G$ is induced by the regular representation of $H$: here $W = \operatorname{span}\{e_h,\ h\in H\}\subset V = \operatorname{span}\{e_g,\ g\in G\}$.
:::

:::proposition Fact
$\operatorname{Ind}^G_H(W\oplus W') = \operatorname{Ind}^G_H(W)\oplus\operatorname{Ind}^G_H(W')$, but $\operatorname{Ind}(W\otimes W')\neq\operatorname{Ind}(W)\otimes\operatorname{Ind}(W')$.

On the other hand, if $U$ is a representation of $G$ and $W$ a representation of $H$, then
$$\operatorname{Ind}(\operatorname{Res}(U)\otimes W) = U\otimes\operatorname{Ind}(W).$$
:::

(Indeed: $\operatorname{Ind}(W) = \bigoplus_{\sigma\in G/H}\sigma W$, so
$$U\otimes\operatorname{Ind}(W) = \bigoplus_{\sigma\in G/H}(U\otimes\sigma W) = \bigoplus_{G/H}\sigma(U\otimes W),$$
where $U\otimes W\subset U\otimes\operatorname{Ind}(W)$ is invariant under $H$ and $=\operatorname{Res}(U)\otimes W$ as an $H$-representation.)

In particular:
$$\operatorname{Ind}(\operatorname{Res}(U)) = U\otimes\operatorname{Ind}(\text{trivial}) = U\otimes(\text{permutation representation } G/H).$$

## The character of an induced representation

We can actually calculate the character of an induced representation! Choose representatives $\sigma_1,\dots,\sigma_k$ of the cosets of $H$ as usual; $g\in G$ maps $\sigma_iW$ to $\sigma_jW$, where $g\sigma_i\in\sigma_jH$. If $i\neq j$, then this doesn’t contribute to $\operatorname{tr}(g)$. If $i = j$, then $h = \sigma_i^{-1}g\sigma_i\in H$ and $g$ maps $\sigma_iW$ to itself by $g(\sigma_iw) = \sigma_ihw$, so $\operatorname{tr}(g_{|\sigma_iW}) = \operatorname{tr}(h_{|W}) = \chi_W(h)$. Summing over the $\sigma_i$’s:
$$\chi_{\operatorname{Ind}W}(g) = \sum_{\substack{\sigma_i\in G/H\\ \text{s.t. }\sigma_i^{-1}g\sigma_i\in H}}\chi_W(\sigma_i^{-1}g\sigma_i) = \frac{1}{|H|}\sum_{\substack{s\in G\\ \text{s.t. }s^{-1}gs\in H}}\chi_W(s^{-1}gs).$$

## Frobenius reciprocity

A key property for understanding induced representations is **Frobenius reciprocity**.

:::outline Notes not reached in this lecture, covered at the start of [Lecture 37](/notes/math-55a/37-frobenius-reciprocity-real-and-quaternionic-representations)
:::proposition
If $U$ is a representation of $G$, and $W$ a representation of $H$, then every $H$-equivariant map $W\to\operatorname{Res}(U)$ extends uniquely to a $G$-equivariant map $\operatorname{Ind}(W)\to U$:
$$\Hom_H(W,\operatorname{Res}(U))\simeq\Hom_G(\operatorname{Ind}(W),U).$$
:::

:::proof
Choose representatives $\sigma_1,\dots,\sigma_k\in G$ of the cosets of $H$, and let $V = \operatorname{Ind}(W) = \bigoplus\sigma_iW$. Given $\varphi : W\to\operatorname{Res}(U)$ $H$-equivariant, if $\tilde\varphi : V\to U$ is $G$-equivariant and $\tilde\varphi_{|W} = \varphi$, then necessarily we have a commutative diagram
$$\begin{CD}
W @>{\varphi}>> U\\
@V{\sigma_i}VV @VV{\sigma_i}V\\
\sigma_iW @>{\tilde\varphi}>> U
\end{CD}$$
i.e. $\tilde\varphi_{|\sigma_iW}$ is given by $\tilde\varphi(\sigma_iw) = \sigma_i\cdot\varphi(w)$ (the action of $\sigma_i\in G$ on $\varphi(w)\in U$). This determines $\tilde\varphi$ uniquely.

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

(This can also be proved by direct calculation using the above formula for $\chi_{\operatorname{Ind}W}$.)

Thus: if $U$ is an irreducible representation of $G$ and $W$ an irreducible representation of $H$, then the number of times $W$ appears in $\operatorname{Res}(U)$ is equal to the number of times $U$ appears in $\operatorname{Ind}(W)$.

:::example
$G = S_4\supset H = S_3$. The restrictions of the irreducible representations of $S_4$ are:
- trivial: $\operatorname{Res}(U_4) = U_3$;
- alternating: $\operatorname{Res}(U_4') = U_3'$;
- standard: $\operatorname{Res}(V_4) = V_3\oplus U_3$ (since the permutation representation $\CC^4$ restricts to permutation $\oplus$ trivial: $\operatorname{Res}(V_4\oplus U_4) = V_3\oplus U_3\oplus U_3$);
- $V_4' = V_4\otimes U_4'$: $\operatorname{Res}(V_4') = V_3\oplus U_3'$ (using $V_3\otimes U_3'\simeq V_3$);
- $W$ (factors through $S_4/\{e,(ij)(kl)\}\simeq S_3$): $\operatorname{Res}(W) = V_3$.

(Or, instead of arguing explicitly, one can just use character tables!)

So by Frobenius reciprocity,
$$\operatorname{Ind}(V_3) = \bigoplus\text{ of the irreducible reps of } S_4 \text{ whose restrictions contain } V_3 = V_4\oplus V_4'\oplus W$$
(this has dimension $8 = 4\cdot 2$). Similarly, $\operatorname{Ind}(U_3) = U_4\oplus V_4$ and $\operatorname{Ind}(U_3') = U_4'\oplus V_4'$.
:::

**Theorems of Artin and Brauer**

Some of the key motivation for studying induced representations comes from two deep theorems of Artin and Brauer.

:::theorem Artin
Every character of a representation of $G$ is a linear combination with *rational* coefficients of characters of representations induced from *cyclic* subgroups of $G$.
:::

:::theorem Brauer
Every character of a representation of $G$ is a linear combination with *integer* coefficients of characters of representations induced from 1-dimensional representations of *”elementary”* subgroups of $G$,

where **elementary** means isomorphic to a product $C\times H$, with $H$ a $p$-group ($|H| = p^k$) and $C$ cyclic, $C\simeq\ZZ/n$, $p\nmid n$.
:::

(We won’t prove these. See e.g. Serre’s *Linear Representations of Finite Groups*.)
:::
