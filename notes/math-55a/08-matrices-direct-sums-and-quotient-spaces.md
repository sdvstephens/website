---
course: math-55a
chapter: 3
section: 8
title: Matrices, Direct Sums and Quotient Spaces
date: 2025-09-19
lecturer: Denis Auroux
source-pages: 1-4
---

## Matrices of linear maps

Last time: given a basis $(v_1,\dots,v_n)$ of $V$, we get an isomorphism
$$\varphi : k^n \xrightarrow{\ \sim\ } V, \qquad (x_1,\dots,x_n) \mapsto \sum x_i v_i .$$
We represent $v = \sum x_i v_i$ by a **column vector** $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$.

Given bases $(v_1,\dots,v_n)$ of $V$ and $(w_1,\dots,w_m)$ of $W$, we can represent a linear map $\varphi \in \Hom(V,W)$ by an $m\times n$ **matrix** $A \in M_{m,n}$. This amounts to:
$$\begin{CD}
V @>{\varphi}>> W \\
@A{\text{basis}}A{\simeq}A @A{\simeq}A{\text{basis}}A \\
k^n @>{A}>> k^m
\end{CD}$$
Write
$$A = (a_{ij})_{\substack{1\le i\le m \text{ rows}\\ 1\le j\le n \text{ columns}}} = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ a_{21} & & \\ \vdots & & \\ a_{m1} & \cdots & a_{mn}\end{pmatrix},$$
with $A : k^n \to k^m$ given by multiplication with column vectors, $\begin{pmatrix} x_1\\ \vdots \\ x_n\end{pmatrix} \mapsto A\begin{pmatrix} x_1\\ \vdots \\ x_n\end{pmatrix}$.

**Notation:** $A = \mathcal{M}(\varphi,(v),(w))$, **the matrix of $\varphi$** in the given bases.

The entries of $A$ are characterized by
$$\varphi(v_j) = \sum_{i=1}^m a_{ij}\, w_i .$$
That is, the *columns* of $A$ give the components of $\varphi(v_1),\dots,\varphi(v_n)$ in the basis $\{w_1,\dots,w_m\}$.

We then have
$$\varphi\Big(\sum_j x_j v_j\Big) = \sum_j x_j\,\varphi(v_j) = \sum_{i,j} x_j a_{ij} w_i = \sum_i \Big(\sum_j a_{ij}x_j\Big) w_i .$$
So if $v\in V$ is represented by the column vector $X = \begin{pmatrix} x_1\\ \vdots\\ x_n\end{pmatrix}$ (i.e. $v = \sum x_j v_j$), then $\varphi(v)\in W$ is represented by
$$Y = AX = \begin{pmatrix} y_1 \\ \vdots \\ y_m\end{pmatrix}, \qquad y_i = \sum_j a_{ij}x_j \qquad \Big(\text{i.e. } \varphi(v) = \sum y_i w_i\Big).$$
Think of this as
$$\varphi\big((v_1,\dots,v_n)X\big) = (w_1,\dots,w_m)AX,$$
where we treat the product symbolically as matrix multiplication: row $\cdot$ column $= \sum x_i v_i$.

## Change of basis

What if we choose a different basis for $V$ and/or $W$?

If we change basis from $(v_1,\dots,v_n)$ to $(v_1',\dots,v_n')$, write
$$v_j' = \sum_{i=1}^n p_{ij}\, v_i$$
and get an $n\times n$ matrix $P$ whose $j$th column gives the components of $v_j'$ in the basis $(v_1,\dots,v_n)$. Symbolically, $(v_1',\dots,v_n') = (v_1,\dots,v_n)P$.

So $(v_1',\dots,v_n')X' = (v_1,\dots,v_n)PX'$, i.e. the element of $V$ described by a column vector $X'$ in the new basis is described by $X = PX'$ in the old basis.

More conceptually: $P = \mathcal{M}(\id_V, (v'), (v))$!

Do the same for $W$, in reverse: let $Q = \mathcal{M}(\id_W,(w),(w'))$, i.e. $(w_1,\dots,w_m) = (w_1',\dots,w_m')Q$. Hence
$$\varphi\big((v_1',\dots,v_n')X'\big) = \varphi\big((v_1,\dots,v_n)PX'\big) = (w_1,\dots,w_m)APX' = (w_1',\dots,w_m')QAPX',$$
i.e.
$$\mathcal{M}(\varphi,(v'),(w')) = QAP.$$

In particular, if $V = W$ and we change basis, then for $\varphi\in\Hom(V,V)$, the matrices $A = \mathcal{M}(\varphi,(v),(v))$ and $A' = \mathcal{M}(\varphi,(v'),(v'))$ are related by
$$A' = P^{-1}AP.$$

$\to$ But... the whole point of linear algebra is to *avoid all this* and work with linear maps in a coordinate-free language as much as possible.

## Direct sums and products of vector spaces

Given vector spaces $V$ and $W$,
$$V\oplus W = V\times W = \{(v,w) \mid v\in V,\ w\in W\}$$
(with componentwise operations). Similarly, given $n$ vector spaces,
$$V_1\oplus\cdots\oplus V_n = V_1\times\cdots\times V_n = \{(v_1,\dots,v_n) \mid v_i\in V_i\}.$$
But for an infinite collection $(V_i)_{i\in I}$, we have two different constructions:
$$\bigoplus_{i\in I} V_i = \{(v_i)_{i\in I} \mid v_i\in V_i,\ \text{only finitely many } v_i\ne 0\} \qquad\text{vs.}\qquad \prod_{i\in I} V_i = \{(v_i)_{i\in I} \mid v_i\in V_i\}.$$

:::example
$$\bigoplus_{n\in\NN} k \simeq k[x] \qquad\text{vs.}\qquad \prod_{n\in\NN} k \simeq k[[x]] \ \text{(formal power series).}$$
:::

## Sums and direct sums of subspaces

Returning to the finite case...

:::definition
Given subspaces $W_1,\dots,W_n\subset V$ of some vector space $V$,

- the **span** of $W_1,\dots,W_n$ is $W_1+\cdots+W_n = \{w_1+\cdots+w_n \mid w_i\in W_i\}\subset V$. Say the $W_i$ span $V$ if $W_1+\cdots+W_n = V$.
:::

:::definition
- The $W_i$ are **independent** if $w_1+\cdots+w_n = 0$ with $w_i\in W_i$ implies $w_i = 0$ for all $i$.
- If the $W_i$ are independent and span $V$, say we have a **direct sum decomposition** $V = W_1\oplus\cdots\oplus W_n$. That is, every element of $V$ can be written uniquely as $w_1+\cdots+w_n$ with $w_i\in W_i$.
:::

**Relation to the previous notions:** for each $i$ we have an inclusion map $W_i\hookrightarrow V$. These assemble into a linear map from the abstract direct sum $\big({=}\prod_i W_i\big)$:
$$\varphi : \bigoplus W_i \longrightarrow V, \qquad (w_1,\dots,w_n)\longmapsto \sum w_i .$$
Then $W_1,\dots,W_n$ span $V$ $\iff$ $\varphi$ is surjective, and they are independent $\iff$ $\varphi$ is injective. If both hold, then $\varphi$ is an isomorphism $\bigoplus W_i\xrightarrow{\sim} V$ and we have a direct sum decomposition.

In this case $\dim(V) = \sum \dim(W_i)$ (we can get a basis of $V$ by taking the union of bases of $W_1,\dots,W_n$).

**Case of two subspaces:**

- $W_1, W_2$ are independent iff $W_1\cap W_2 = \{0\}$ (since $w_1+w_2 = 0$ iff $w_1 = -w_2\in W_1\cap W_2$).
- $\dim(W_1+W_2) = \dim(W_1)+\dim(W_2)-\dim(W_1\cap W_2)$ (we’ll see this soon).
- $V = W_1\oplus W_2$ iff $W_1\cap W_2 = 0$ and $\dim W_1+\dim W_2 = \dim V$.

Also note: given a subspace $W\subset V$, there exists another subspace $W'$ such that $W\oplus W' = V$. ($W'$ is definitely not unique!) To find $W'$: take a basis $\{w_1,\dots,w_r\}$ of $W$, complete it to a basis $\{w_1,\dots,w_r,w_1',\dots,w_s'\}$ of $V$, and let $W' = \operatorname{span}(w_1',\dots,w_s')$.

## Rank and the dimension formula

Given finite-dimensional vector spaces $V$ and $W$ and a linear map $\varphi: V\to W$,

- $\ker(\varphi) = \{v\in V \mid \varphi(v) = 0\}\subset V$ and
- $\Img(\varphi) = \{w\in W \mid \exists v\in V \text{ such that } \varphi(v) = w\}\subset W$

are subspaces of $V$ and $W$ respectively.

- $\dim(\Img\varphi)$ is called the **rank** of $\varphi$.

:::theorem Dimension formula
$$\dim\ker(\varphi) + \dim\Img(\varphi) = \dim V.$$
:::

:::proof
Start by choosing a basis $\{u_1,\dots,u_m\}$ for $\ker\varphi$, and complete it to a basis $\{u_1,\dots,u_m,v_1,\dots,v_r\}$ of $V$. We claim $(\varphi(v_1),\dots,\varphi(v_r))$ is a basis of $\Img(\varphi)$. Indeed:

- If $w = \varphi(v)\in\Img\varphi$, then write $v = \sum a_iu_i + \sum b_jv_j$ and get $\varphi(v) = \sum b_j\varphi(v_j)$, so the $\varphi(v_j)$ span $\Img(\varphi)$.
- If $\sum c_j\varphi(v_j) = 0$, then $\varphi\big(\sum c_jv_j\big) = 0$, so $\sum c_jv_j\in\ker(\varphi)$, i.e. $\sum c_jv_j = \sum a_iu_i$ for some $a_i\in k$. But since $\{u_1,\dots,u_m,v_1,\dots,v_r\}$ are linearly independent, this forces all $c_j = 0$ (and $a_i = 0$). Hence the $\varphi(v_j)$ are linearly independent.

So now, since $\{u_1,\dots,u_m,v_1,\dots,v_r\}$ is a basis of $V$, $m+r = \dim V$, where $m = \dim\ker\varphi$ (the $u_i$ are a basis of $\ker\varphi$) and $r = \dim\Img(\varphi) = \rank\varphi$ (the $\varphi(v_i)$ are a basis of $\Img\varphi$).
:::

:::corollary
Given a linear map $\varphi: V\to W$, there exist bases of $V$ and $W$ in which the matrix of $\varphi$ has the form
$$\left(\begin{array}{c|c} I_r & 0 \\ \hline 0 & 0\end{array}\right), \qquad r = \rank\varphi .$$
:::

:::proof
Take the basis of $V$ which is $\{v_1,\dots,v_r,u_1,\dots,u_m\}$ as above (the $u_i$ being a basis of $\ker\varphi$), and complete $\{\varphi(v_1),\dots,\varphi(v_r)\}$ (a basis of $\Img\varphi$) to a basis of $W$.
:::

:::corollary
For subspaces $W_1,W_2\subset W$,
$$\dim(W_1+W_2) = \dim(W_1)+\dim(W_2)-\dim(W_1\cap W_2).$$
:::

:::proof
Consider the map from $V = W_1\oplus W_2$ to $W$,
$$\varphi(w_1,w_2) = w_1+w_2 .$$
Then $\Img(\varphi) = W_1+W_2$ and $\ker(\varphi) = \{(u,-u)\mid u\in W_1\cap W_2\}\simeq W_1\cap W_2$, so
$$\dim\ker\varphi + \dim\Img\varphi = \dim(W_1\cap W_2)+\dim(W_1+W_2) = \dim(V) = \dim(W_1)+\dim(W_2).$$
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 9](/notes/math-55a/09-dual-spaces-and-linear-operators)
**Quotient spaces**

Let $V$ be a vector space over a field $k$, $U\subset V$ a subspace.

:::definition
The **quotient space** $V/U = \{v+U\}$ is the space of cosets of $U$ in $V$, with addition $(v+U)+(w+U) = (v+w)+U$ and scalar multiplication $a(v+U) = av+U$.
:::

The linear map
$$q : V\to V/U, \qquad v\mapsto v+U$$
is surjective, with kernel $U$. Hence we get an exact sequence
$$0\to U\to V\to V/U\to 0.$$
By the dimension formula ($\dim\ker q+\dim\Img q = \dim V$), we have
$$\dim(V/U) = \dim V-\dim U.$$

:::remark
1. Given a linear map $\varphi: V\to W$, if $U\subset\ker\varphi$ (i.e. $\varphi|_U = 0$), then $\varphi$ factors through $V/U$, i.e. there exists $\bar\varphi: V/U\to W$ such that $\varphi = \bar\varphi\circ q$:

   ![Commutative triangle: phi from V to W factors as q from V to V/U followed by phi-bar from V/U to W](/notes/math-55a/figures/e3-quotient-factorization.svg)

   (Define $\bar\varphi(v+U) = \varphi(v)$; this is independent of the choice of $v$ in the coset.) Conversely, given $\bar\varphi\in\Hom(V/U,W)$, $\varphi = \bar\varphi\circ q: V\to W$ has $U\subset\ker\varphi$. Hence
   $$\{\varphi\in\Hom(V,W)\mid U\subset\ker\varphi\}\cong\Hom(V/U,W).$$
2. There is a bijection
   $$\{\text{subspaces of } V \text{ containing } U\}\longleftrightarrow\{\text{subspaces of } V/U\},$$
   $$W\subset V\ (W\supset U)\longmapsto W/U = \{w+U \mid w\in W\}.$$
   Conversely, $\overline{W}\subset V/U\longmapsto q^{-1}(\overline{W})\subset V$ (and $U = q^{-1}(0)\subset q^{-1}(\overline{W})$ since $0\in\overline{W}$).
:::
:::
