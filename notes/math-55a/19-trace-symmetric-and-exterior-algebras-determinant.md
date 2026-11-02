---
course: math-55a
chapter: 5
section: 19
title: Trace, Symmetric and Exterior Algebras, Determinant
date: 2025-10-17
lecturer: Denis Auroux
source-pages: 1-5
---

## Recap: tensor products

Last time: the tensor product of two vector spaces. $V\otimes W$ is a vector space together with a bilinear map
$$
\begin{aligned}
V\times W &\to V\otimes W\\
(v,w)&\mapsto v\otimes w
\end{aligned}
$$
The elements $v\otimes w$ are the **pure tensors**; general elements of $V\otimes W$ are linear combinations of these. The defining property is:

> bilinear maps $V\times W\xrightarrow{\;b\;}U$ $\iff$ linear maps $V\otimes W\xrightarrow{\;\varphi\;}U$,
> with $\varphi(v\otimes w)=b(v,w)$ on pure tensors, extended to general elements by linearity.

We saw $V^*\otimes W\cong\Hom(V,W)$: on pure tensors, $\ell\otimes w\mapsto\big(v\mapsto \ell(v)\,w\big)$, a rank 1 linear map. Given a basis $\{e_i\}$ of $V$, the dual basis $\{e_i^*\}$ of $V^*$, and a basis $\{f_j\}$ of $W$,
$$
e_i^*\otimes f_j\ \longmapsto\ \varphi_{ij}:\ \begin{cases} e_i\mapsto f_j\\ e_{k}\mapsto 0 & (k\neq i)\end{cases}
$$
which is represented by the matrix with $1$ in position $(j,i)$ and $0$ in all other entries.

## The trace of a linear operator

We can now properly define the **trace** of a linear operator!

In “ordinary” linear algebra classes, one defines the trace of an $n\times n$ matrix $A=(a_{ij})$ to be $\operatorname{tr}(A)=\sum_{i=1}^n a_{ii}$, the sum of the diagonal entries. Then, noting that
$$
\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\operatorname{tr}(BA),
$$
we have $\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(A)$, and so the trace of $T:V\to V$ is defined to be the trace of $\mathcal M(T)$ in any basis.

We could also try to define the trace via eigenvalues and their multiplicities, over an algebraically closed field: in a basis where $\mathcal M(T)$ is triangular it is manifest that $\operatorname{tr}(T)=\sum n_i\lambda_i$.

We can do better (conceptually) by using $\Hom(V,V)\cong V^*\otimes V$ and the **contraction** linear map $V^*\otimes V\to k$. Namely, there is a natural bilinear pairing
$$
\begin{aligned}
V^*\times V&\to k\\
(\ell,v)&\mapsto \ell(v)
\end{aligned}
$$
and it determines $\operatorname{tr}:V^*\otimes V\to k$: on pure tensors $\ell\otimes v\mapsto \ell(v)$, extended by linearity: $\operatorname{tr}\big(\sum_i \ell_i\otimes v_i\big)=\sum_i\ell_i(v_i)$.

:::definition Trace
The **trace** of a linear operator $T\in\Hom(V,V)$ is its image under
$$
\Hom(V,V)\cong V^*\otimes V\longrightarrow k.
$$
:::

This is indeed equivalent to the usual definition: choosing a basis $(e_i)$ and the dual basis $(e_i^*)$,
$$
\operatorname{tr}(e_i^*\otimes e_j)=e_i^*(e_j)=\delta_{ij},
$$
which matches the trace of the matrix with a single entry $1$ in position $(j,i)$. So by linearity,
$$
\operatorname{tr}\Big(\sum_{i,j}a_{ji}\,e_i^*\otimes e_j\Big)=\sum_i a_{ii}\ \checkmark
$$
where $\sum_{i,j}a_{ji}\,e_i^*\otimes e_j$ corresponds to the matrix $(a_{ji})$.

## Tensor products of several spaces

:::definition Multilinear maps
$m:V_1\times\cdots\times V_k\to W$ is **multilinear** if it is linear in each variable separately.
:::

The tensor product $V_1\otimes\cdots\otimes V_k$ can be defined as above: either using bases of $V_1,\dots,V_k$, or as a quotient of a universal vector space by relations, or via the universal property for multilinear maps:

There is a multilinear map
$$
\begin{aligned}
\mu: V_1\times\cdots\times V_k&\to V_1\otimes\cdots\otimes V_k\\
(v_1,\dots,v_k)&\mapsto v_1\otimes\cdots\otimes v_k
\end{aligned}
$$
such that for every vector space $W$ and every multilinear map $m:V_1\times\cdots\times V_k\to W$, there exists a unique $\varphi\in\Hom(V_1\otimes\cdots\otimes V_k,W)$ such that $m=\varphi\circ\mu$.

![Universal property of the tensor product: the multilinear map m factors uniquely through mu via a linear map phi](/notes/math-55a/figures/e6-tensor-universal.svg)

In fact nothing new is happening, because $(U\otimes V)\otimes W=U\otimes(V\otimes W)=U\otimes V\otimes W$.

We are primarily interested in the special case
$$
V^{\otimes n}=\underbrace{V\otimes\cdots\otimes V}_{n\text{ times}}
$$
(by convention $V^{\otimes 0}=k$, $V^{\otimes 1}=V$). Then we have bilinear maps $V^{\otimes k}\times V^{\otimes \ell}\to V^{\otimes(k+\ell)}$ for all $k,\ell\ge 0$, which taken together define a multiplication on the **tensor algebra**
$$
T(V)=\bigoplus_{n\ge 0}V^{\otimes n},
$$
making it a noncommutative ring.

## Symmetric algebra

Remember: we’ve seen that the space of bilinear forms $\mathcal B(V)\cong V^*\otimes V^*$ decomposes into
$$
\mathcal B(V)=B_{\mathrm{symm}}\oplus B_{\mathrm{skew}}
$$
(symmetric and skew-symmetric bilinear forms). Equivalently: there is an **involution** (an automorphism such that $\varphi^2=\id$) $\varphi:\mathcal B(V)\to\mathcal B(V)$ taking $b(x,y)\mapsto b(y,x)$, or on $V^*\otimes V^*$: $\ell\otimes\ell'\mapsto\ell'\otimes\ell$.

$\varphi$ has eigenvalues $\pm1$ and eigenspaces $\ker(\varphi-I)=B_{\mathrm{symm}}$, $\ker(\varphi+I)=B_{\mathrm{skew}}$.

We can also do the same on higher tensor powers of $V$ or $V^*$ (the latter are multilinear forms). There is an **action** of the symmetric group $S_d$ on $V^{\otimes d}$, i.e. each permutation $\sigma\in S_d$ defines a linear map
$$
\begin{aligned}
V^{\otimes d}&\xrightarrow{\ \sigma\ }V^{\otimes d}\\
v_1\otimes\cdots\otimes v_d&\mapsto v_{\sigma^{-1}(1)}\otimes\cdots\otimes v_{\sigma^{-1}(d)}
\end{aligned}
$$
and this defines a group homomorphism $S_d\to\Aut(V^{\otimes d})$.

:::definition Symmetric tensors
A tensor $\eta\in V^{\otimes d}$ is **symmetric** if $\sigma\cdot\eta=\eta$ for all $\sigma\in S_d$.
$$
\operatorname{Sym}^d(V):=\{\text{symmetric tensors}\}\subset V^{\otimes d}
$$
is a subspace.
:::

For example, $\operatorname{Sym}^d(V^*)=\{\text{symmetric multilinear forms } m:V\times\cdots\times V\to k\}$, i.e. those with $m(v_{\sigma(1)},\dots,v_{\sigma(d)})=m(v_1,\dots,v_d)$.

If $\operatorname{char}(k)=0$, the symmetric part of a tensor can be determined by averaging: there is a linear map $\alpha:V^{\otimes d}\to\operatorname{Sym}^dV$, given on pure tensors by
$$
\alpha(v_1\otimes\cdots\otimes v_d)=\frac1{d!}\sum_{\sigma\in S_d}v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(d)}.
$$

Still assuming $\operatorname{char}(k)=0$, we could instead define $\operatorname{Sym}^d(V)$ as the **quotient** of $V^{\otimes d}$ by the subspace spanned by elements of the form $\eta-\sigma(\eta)$, $\eta\in V^{\otimes d}$, $\sigma\in S_d$. Explicitly (since transpositions generate $S_d$), by
$$
v_1\otimes v_2\otimes v_3\otimes\cdots\otimes v_d-v_2\otimes v_1\otimes v_3\otimes\cdots\otimes v_d
$$
and the same for swapping other factors. This is different from (but isomorphic to) the previous definition.

To settle the question of which definition (as a quotient vs. a subspace of $V^{\otimes d}$) is better: the best definition is again by a universal property.

Recall $V^{\otimes d}$ comes with a multilinear map $\mu:V^d\to V^{\otimes d}$ and is characterized by
$$
\Hom(V^{\otimes d},U)\cong\{\text{multilinear maps }V^d\to U\}\quad\text{using }\varphi\mapsto\varphi\circ\mu.
$$
Now $\operatorname{Sym}^dV$ comes with a *symmetric* multilinear map $V^d\to\operatorname{Sym}^dV$ and is characterized by
$$
\Hom(\operatorname{Sym}^dV,U)\cong\{\text{symmetric multilinear maps }V^d\to U\}.
$$

The product operations $V^{\otimes k}\times V^{\otimes\ell}\to V^{\otimes(k+\ell)}$ induce a product $\operatorname{Sym}^kV\times\operatorname{Sym}^\ell V\to\operatorname{Sym}^{k+\ell}V$ (using $\otimes$ followed by averaging $\alpha$). These combine to a product operation on
$$
\operatorname{Sym}^\bullet(V):=\bigoplus_{d\ge0}\operatorname{Sym}^d(V),
$$
called the **symmetric algebra** of $V$.

$\operatorname{Sym}^\bullet(V)$ is a **commutative ring** (and a vector space over $k$: a **$k$-algebra**). (Check: the product is still associative despite symmetrization by averaging: $\alpha(\alpha(u\otimes v)\otimes w)=\alpha(u\otimes\alpha(v\otimes w))=\alpha(u\otimes v\otimes w)$.)

:::proposition Concretely
If $e_1,\dots,e_n$ is a basis of $V$, then $\operatorname{Sym}^\bullet(V)\cong k[e_1,\dots,e_n]$, polynomial expressions in formal variables $e_1,\dots,e_n$.
:::

(Simply: denote $\alpha(e_{i_1}\otimes\cdots\otimes e_{i_k})$ by $e_{i_1}\cdots e_{i_k}$ and consider finite linear combinations of all these.)

More explicitly: if $e_1,\dots,e_n$ is a basis of $V$, then any linear form on $V$, $\ell\in V^*$, is of the form
$$
v=\sum x_ie_i\ \longmapsto\ \ell(v)=\sum a_ix_i,
$$
a degree 1 polynomial. Symmetric multilinear forms $\eta\in\operatorname{Sym}^dV^*$ are, likewise, polynomials (with only degree $d$ terms):
$$
v=\sum x_ie_i\ \longmapsto\ \eta(v,\dots,v)=\sum_{i_1,\dots,i_d}a_{i_1\dots i_d}\,x_{i_1}\cdots x_{i_d}.
$$
So:
$$
\operatorname{Sym}^\bullet(V^*)\cong k[x_1,\dots,x_n],\quad\text{polynomials in }n\text{ variables}
$$
(where, by a sleight of hand, $x_i$ denotes the $i$th coordinate of a vector in $V$ as a linear (degree 1 polynomial) function on $V$, i.e. really this is another name for $e_i^*\in V^*$).

## Exterior algebra

Do the same thing for skew-symmetric, a.k.a. **alternating**, multilinear forms.

:::definition Alternating tensors
$\eta\in V^{\otimes d}$ is **alternating** if $\sigma(\eta)=(-1)^\sigma\eta$ for all $\sigma\in S_d$. Here $(-1)^\sigma$ is the sign of $\sigma$: $-1$ for transpositions and products of an odd number of them.
$$
\Lambda^d(V)=\{\text{alternating tensors}\}\subset V^{\otimes d}.
$$
:::

In characteristic zero, we can view $\Lambda^d(V)$ as the image of the skew-symmetrization operator $\beta:V^{\otimes d}\to\Lambda^d(V)$,
$$
\beta(v_1\otimes\cdots\otimes v_d)=\frac1{d!}\sum_{\sigma\in S_d}(-1)^\sigma\,v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(d)}=:v_1\wedge\cdots\wedge v_d
$$
(definition/notation). This is zero whenever $v_i=v_j$ for some $i\neq j$, and so, by multilinearity, whenever $v_1,\dots,v_d$ are linearly dependent. Thus $\Lambda^d(V)=0$ whenever $d>\dim V$!

Alternative definitions:

- $\Lambda^d(V)=$ the quotient of $V^{\otimes d}$ by the subspace spanned by $v_1\otimes v_2\otimes v_3\otimes\cdots\otimes v_d+v_2\otimes v_1\otimes v_3\otimes\cdots\otimes v_d$ and similarly for swapping any two factors.
- Or: $\Lambda^d(V)$ is a vector space with an alternating multilinear map
  $$
  \begin{aligned}
  V\times\cdots\times V&\to\Lambda^dV\\
  (v_1,\dots,v_d)&\mapsto v_1\wedge\cdots\wedge v_d
  \end{aligned}
  $$
  ($v_1\wedge v_2=-v_2\wedge v_1$, etc.), universal for alternating multilinear maps on $V\times\cdots\times V$.

If $(e_1,\dots,e_n)$ is a basis of $V$, then $e_{i_1}\wedge\cdots\wedge e_{i_d}$, $i_1<\cdots<i_d$, form a basis of $\Lambda^dV$.

We have a product $\Lambda^kV\times\Lambda^\ell V\to\Lambda^{k+\ell}V$ induced by the tensor algebra plus skew-symmetrization:
$$
(v_1\wedge\cdots\wedge v_k)\wedge(w_1\wedge\cdots\wedge w_\ell)=v_1\wedge\cdots\wedge v_k\wedge w_1\wedge\cdots\wedge w_\ell.
$$
This makes the **exterior algebra**
$$
\Lambda^\bullet V=\bigoplus_{d\ge0}\Lambda^dV
$$
into a (skew-commutative) ring, i.e. if $\eta\in\Lambda^kV$, $\xi\in\Lambda^\ell V$, then $\eta\wedge\xi=(-1)^{k\ell}\,\xi\wedge\eta$. (Check: $\dim\Lambda^\bullet V=2^{\dim V}$.)

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L20}}
**Volume and determinant**

If $\dim V=n$, then $\dim\Lambda^nV=1$ (if $e_1,\dots,e_n$ is a basis of $V$, it is spanned by $e_1\wedge\cdots\wedge e_n\in\Lambda^nV$).

A *choice* of isomorphism $\Lambda^nV\xrightarrow{\sim}k$ is determined by the data of a **volume form** $\mathrm{vol}\in\Lambda^nV^*=(\Lambda^nV)^*$, $\mathrm{vol}\neq0$, i.e. a nondegenerate alternating multilinear map
$$
\begin{aligned}
V\times\cdots\times V&\to k\\
v_1,\dots,v_n&\mapsto\mathrm{vol}(v_1,\dots,v_n).
\end{aligned}
$$
Think of this as: the signed volume of the parallelepiped with edge vectors $v_1,\dots,v_n$ is naturally $v_1\wedge\cdots\wedge v_n\in\Lambda^nV$, which becomes a scalar given $\Lambda^nV\xrightarrow{\sim}k$.

:::example
In a real inner product space with orthonormal basis $(e_1,\dots,e_n)$, the natural volume form is $\mathrm{vol}=e_1^*\wedge\cdots\wedge e_n^*$, so $\mathrm{vol}(e_1,\dots,e_n)=1$ (the volume of the unit cube is $1$). (Warning: reordering the basis gives $\pm1$... orientation!)

Using the basis to identify $V\cong\RR^n$, with $v_j=\begin{pmatrix}v_{1j}\\ \vdots\\ v_{nj}\end{pmatrix}$ for each $j$:
$$
\begin{aligned}
\mathrm{vol}(v_1,\dots,v_n)&=(e_1^*\wedge\cdots\wedge e_n^*)(v_1,\dots,v_n)=\sum_{\sigma\in S_n}(-1)^\sigma\,(e_{\sigma(1)}^*\otimes\cdots\otimes e_{\sigma(n)}^*)(v_1,\dots,v_n)\\
&=\sum_{\sigma\in S_n}(-1)^\sigma\,v_{\sigma(1)1}\cdots v_{\sigma(n)n}=\det(v_1,\dots,v_n),
\end{aligned}
$$
the determinant of an $n\times n$ matrix!

:::

Recall that the determinant of a matrix is
$$
\det(A)=\sum_{\sigma\in S_n}(-1)^\sigma\prod_j a_{\sigma(j)j}.
$$
$\det(A)$ is the only quantity which is

- multilinear in the columns of the matrix,
- alternating (swapping two columns gives $-\det$),
- $\det(\mathrm{Id})=1$.

Even though the notion of determinant/volume of $n=\dim V$ vectors requires a choice of volume form (an isomorphism $\Lambda^nV\xrightarrow{\sim}k$), the notion of **determinant of a linear operator** requires no such choice!

- Usual definition: given $T:V\to V$, define $\det(T)=\det(A)$, $A=\mathcal M(T)$ in any basis, using $\det(AB)=\det A\det B$ (the usual proof is painfully explicit), so under change of basis $\det(P^{-1}AP)=\det A$.
- Better definition: the exterior power is a functor, so $T:V\to V$ induces a linear operator $\Lambda^nT:\Lambda^nV\to\Lambda^nV$ (explicitly, $(\Lambda^nT)(v_1\wedge\cdots\wedge v_n)=T(v_1)\wedge\cdots\wedge T(v_n)$). But $\dim(\Lambda^nV)=1$, and any linear operator on a 1-dimensional vector space is a scalar multiple of $\id$. So define $\det(T)\in k$ such that
  $$
  \Lambda^nT=\det(T)\,\id.
  $$
  (This expresses the fact that $T$ scales the volume of parallelepipeds in $V$ by a factor of $\det(T)$, without having to choose $\Lambda^nV\xrightarrow{\sim}k$ to measure those volumes.)

Using this definition of the determinant via $\Lambda^nT$, independence of the choice of basis is manifest, and so is the fact that $\det(T_1T_2)=\det(T_1)\det(T_2)$!
:::
