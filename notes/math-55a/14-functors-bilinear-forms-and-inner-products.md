---
course: math-55a
chapter: 4
section: 14
title: Functors, Bilinear Forms, and Inner Products
date: 2025-10-03
lecturer: Denis Auroux
source-pages: 1-5
---

:::readings Review sessions and handouts
- Lillian MacArthur, [Week 5 review: Jordan normal form, characteristic and minimal polynomials, categories, bilinear forms](/notes/math-55a/readings/review-week-5.pdf)
- Denis Auroux (based on notes by Joe Harris), [Categories and functors](/notes/math-55a/readings/auroux-categories-and-functors.pdf)
:::

## Interlude: the language of categories

(Then we’ll return to (bi)linear algebra.)

:::definition
A **category** is a collection of **objects**, plus for each pair of objects a collection of **morphisms** $\Mor(A,B)$, and an operation called **composition** of morphisms,
$$\Mor(A,B) \times \Mor(B,C) \to \Mor(A,C), \qquad (f, g) \mapsto g \circ f,$$
such that

1. every object $A$ has an **identity** morphism $\id_A \in \Mor(A,A)$ such that for all $f \in \Mor(A,B)$, $f \circ \id_A = \id_B \circ f = f$;
2. composition is **associative**: $(f \circ g) \circ h = f \circ (g \circ h)$.
:::

:::example
1. The category of sets, $\Mor(A,B)$ = all maps $A \to B$.
2. $\mathrm{Vect}_k$: finite-dimensional vector spaces over $k$, linear maps.
3. Groups, group homomorphisms.
4. Topological spaces, continuous maps.
:::

:::definition
$f \in \Mor(A,B)$ is an **isomorphism** if there exists $g \in \Mor(B,A)$ (the inverse isomorphism) such that $g \circ f = \id_A$ and $f \circ g = \id_B$.
:::

**Check:**

- the inverse of $f$, if it exists, is unique;
- $\id_A$ is an isomorphism; $f$ iso $\Rightarrow$ $f^{-1}$ iso; $f, g$ isos $\Rightarrow$ $g \circ f$ iso.

So the **automorphisms** of $A$, $\Aut(A) = \{\text{isomorphisms } A \to A\} \subset \Mor(A,A)$, form a **group**.

- Isomorphic objects have isomorphic automorphism groups: an isomorphism $f \in \Mor(A,B)$ determines an isomorphism of groups $c_f : \Aut(A) \to \Aut(B)$, $g \mapsto f \circ g \circ f^{-1}$.

:::example
1. In Sets, $A$ a finite set with $n$ elements $\Rightarrow$ $\Aut(A) = \{\text{bijections } A \to A\} \cong \mathfrak{S}_n$.
2. $V$ an $n$-dimensional vector space over $k$ $\Rightarrow$ $\Aut(V) \cong GL_n(k)$, the invertible $n \times n$ matrices.
:::

Category theory language can be used to formalize the common features of sums, products, quotients of objects in different categories. E.g. a product object $P = A \times B$ is characterized by: there exist morphisms $\pi_1 : P \to A$ and $\pi_2 : P \to B$ (“projections”) such that for every object $T$, for all $f_1 : T \to A$ and $f_2 : T \to B$, there exists a unique $f : T \to P$ such that $\pi_1 \circ f = f_1$ and $\pi_2 \circ f = f_2$. (In the usual categories, $P = A \times B$ and $f : T \to A \times B$, $t \mapsto (f_1(t), f_2(t))$.)

We won’t study this further.

## Functors

:::definition
Let $\mathcal{C}, \mathcal{D}$ be categories. A (covariant) **functor** $F : \mathcal{C} \to \mathcal{D}$ is an assignment

- to each object $X$ in $\mathcal{C}$, of an object $F(X)$ in $\mathcal{D}$;
- to each morphism $f \in \Mor_{\mathcal{C}}(X,Y)$, of a morphism $F(f) \in \Mor_{\mathcal{D}}(F(X), F(Y))$,

such that

1. $F(\id_X) = \id_{F(X)}$;
2. $F(g \circ f) = F(g) \circ F(f)$.
:::

:::example
1. The **forgetful functor** taking a group, a topological space, … to the underlying set.
2. On vector spaces: given a vector space $V$, $F : W \mapsto \Hom(V,W)$. If $f : W \to W'$ is linear, then the induced map is
$$\Hom(V,W) \xrightarrow{F(f)} \Hom(V,W'), \qquad a \mapsto f \circ a.$$
This gives a functor $\mathrm{Vect}_k \to \mathrm{Vect}_k$ (denoted $\Hom(V,\cdot)$).
3. Complexification, $\mathrm{Vect}_\RR \to \mathrm{Vect}_\CC$: on objects, $V \mapsto V_\CC$; on morphisms, $\varphi \mapsto \varphi_\CC$ (seen last time).
:::

A **contravariant functor** is the same except the direction of morphisms is reversed:
$$f \in \Mor_{\mathcal{C}}(X,Y) \mapsto F(f) \in \Mor_{\mathcal{D}}(F(Y), F(X)); \qquad F(g \circ f) = F(f) \circ F(g).$$

:::example
On $\mathrm{Vect}_k$, $V \mapsto V^*$ (the dual) (see HW 5).
:::

There’s one more layer to this, if you love category theory: given 2 functors $F, G : \mathcal{C} \to \mathcal{D}$, a **natural transformation** $t$ from $F$ to $G$ is the data, for all $X \in \operatorname{ob}\mathcal{C}$, of a morphism $t_X \in \Mor_{\mathcal{D}}(F(X), G(X))$, such that for all $X, Y \in \operatorname{ob}\mathcal{C}$ and all $f \in \Mor_{\mathcal{C}}(X,Y)$,
$$\begin{CD} F(X) @>{t_X}>> G(X) \\ @V{F(f)}VV @VV{G(f)}V \\ F(Y) @>{t_Y}>> G(Y) \end{CD}$$
commutes in $\mathcal{D}$.

:::example
On $\mathrm{Vect}_k$, $V \mapsto V^{**}$ (double dual) is a (covariant) functor. We’ve said there is a “natural” map
$$ev_V : V \to V^{**}, \qquad v \mapsto (\ell \mapsto \ell(v))$$
(an isomorphism if $\dim < \infty$). The precise meaning is: $ev_V$ is part of a natural transformation of functors $\mathrm{Vect}_k \to \mathrm{Vect}_k$, from the identity functor to the double dual functor (see HW 5).
:::

## Bilinear forms

:::definition
A **bilinear form** on a vector space $V$ over a field $k$ is a map $b : V \times V \to k$ that is linear in each variable: for all $u, v, w \in V$ and all $\lambda \in k$,
$$\begin{cases} b(\lambda v, w) = b(v, \lambda w) = \lambda b(v,w) \\ b(u + v, w) = b(u,w) + b(v,w) \\ b(u, v + w) = b(u,v) + b(u,w). \end{cases}$$
:::

This is **not** a linear map $V \times V \to k$ ($b(\lambda(v,w)) = b(\lambda v, \lambda w) = \lambda^2 b(v,w) \neq \lambda b(v,w)$).

:::definition
We say $b$ is **symmetric** if $b(v,w) = b(w,v)$ for all $v, w \in V$, and **skew-symmetric** if $b(v,w) = -b(w,v)$.
:::

:::example
- The usual dot product on $k^n$, $(v,w) \mapsto \sum_{i=1}^n v_i w_i$, is symmetric.
- $b : k^2 \times k^2 \to k$, $b((x_1,x_2),(y_1,y_2)) = x_1 y_2 - x_2 y_1 \left(= \det\begin{pmatrix} x_1 & y_1 \\ x_2 & y_2 \end{pmatrix}\right)$ is skew-symmetric.
:::

Given a bilinear map $b : V \times V \to k$, we get a linear map $\varphi_b : V \to V^*$ by defining $\varphi_b(v) = b(v, \cdot) \in V^*$ (it maps $w \in V$ to $b(v,w) \in k$). Conversely, $\varphi : V \to V^*$ determines the bilinear form $b(v,w) = (\varphi(v))(w)$. This defines a bijection
$$B(V) \xrightarrow{\sim} \Hom(V, V^*).$$

:::definition
The **rank** of $b : V \times V \to k$ is the rank of $\varphi_b : V \to V^*$ ($= \dim \Img \varphi_b$). If $\varphi_b$ is an isomorphism, we say $b$ is **nondegenerate**.
:::

For a given vector space $V$, $B(V) = \{\text{bilinear forms } V \times V \to k\}$ is a vector space over $k$. What is its dimension? If we choose a basis $\{e_1, \dots, e_n\}$ for $V$, it is enough to specify $b(e_i, e_j)$ for all $i,j$ in order to determine $b$: by bilinearity,
$$b\Big(\sum_i x_i e_i, \sum_j y_j e_j\Big) = \sum_{i,j} x_i y_j\, b(e_i, e_j).$$
The values of $b(e_i, e_j)$ can be chosen freely; e.g. a basis of $B(V)$ is given by $(b_{k\ell})_{1 \leq k \leq n,\ 1 \leq \ell \leq n}$,
$$b_{k\ell}(e_i, e_j) = \begin{cases} 1 & \text{if } (i,j) = (k,\ell) \\ 0 & \text{otherwise.} \end{cases}$$
So $\dim B(V) = (\dim V)^2$ (consistent with $B(V) \simeq \Hom(V,V^*)$! The bijection $b \mapsto \varphi_b$ is an isomorphism of vector spaces!).

Given a basis $\{e_1, \dots, e_n\}$ of $V$, $b : V \times V \to k$ is represented by an $n \times n$ **matrix** $a_{ij} = b(e_i, e_j)$:
$$b\Big(\sum_i x_i e_i, \sum_j y_j e_j\Big) = \sum_{i,j} x_i y_j\, b(e_i, e_j) = (x_1 \ \cdots \ x_n)\, A \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix},$$
where $A$ is the matrix of $b$, $a_{ij} = b(e_i, e_j)$. So, in terms of column vectors,
$$b(X, Y) = X^T A Y.$$

:::remark Skip this remark if your head hurts
The isomorphism $B(V) \xrightarrow{\sim} \Hom(V, V^*)$, $b \mapsto \varphi_b$, is natural, in the sense that: we have contravariant functors $V \mapsto B(V)$ and $V \mapsto \Hom(V, V^*)$ (on morphisms, $f : V \to W$ gives
$$B(f) : B(W) \to B(V),\ b(\cdot,\cdot) \mapsto b(f(\cdot), f(\cdot)) \quad\text{and}\quad \Hom(W, W^*) \to \Hom(V, V^*),\ \varphi \mapsto f^t \circ \varphi \circ f),$$
and the isomorphisms $B(V) \xrightarrow{\sim} \Hom(V, V^*)$ define a natural transformation between them.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 15](/notes/math-55a/15-inner-product-spaces-orthogonal-and-self-adjoint-operators)
:::definition
If $S \subset V$ is a subspace of a vector space equipped with a bilinear form $b : V \times V \to k$, we define its **orthogonal complement**
$$S^\perp = \{v \in V \mid b(v,w) = 0 \ \forall w \in S\}.$$
This is a vector subspace.
:::

Warning: this is most intuitive if $b$ is symmetric or skew. Otherwise we have to worry about “left-orthogonal” vs. “right-orthogonal” to $S$.

:::lemma
If $b$ is nondegenerate then $\dim S^\perp = \dim V - \dim S$ (else $\geq$).
:::

:::proof
$$S^\perp = \ker\big(V \to S^*,\ v \mapsto \varphi_b(v)|_S\big),$$
where this map is the composition of $\varphi_b : V \to V^*$ and the restriction $r : V^* \twoheadrightarrow S^*$, $\ell \mapsto \ell|_S$. By the rank theorem, $\dim S^\perp = \dim V - \rank(r \circ \varphi_b)$. If $b$ is nondegenerate then $\varphi_b$ is an isomorphism and $r$ is surjective, so $\rank(r \circ \varphi_b) = \dim S^* = \dim S$; in general $\leq$.
:::

:::example
- $V = \RR^n$ with the standard dot product $b(v,w) = \sum_{i=1}^n v_i w_i$: then $V = S \oplus S^\perp$, the “usual” orthogonal complement, because $S \cap S^\perp = \{0\}$ (see below) and $\dim S + \dim S^\perp = \dim V$.
- But for $b : k^2 \times k^2 \to k$,
$$b((x_1,x_2),(y_1,y_2)) = x_1 y_2 - x_2 y_1 \qquad \text{(skew-symmetric, nondegenerate)},$$
if $S \subset k^2$ is the 1-dimensional subspace spanned by any nonzero vector $v$, then $S^\perp = S$!! (Because $b(v,w) = 0 \iff \det(v,w) = 0 \iff w \in k \cdot v = S$.)
:::

**Inner product spaces**

:::definition
An **inner product space** is a vector space $V$ over $\RR$ together with a **symmetric**, **definite positive** bilinear form $\langle \cdot, \cdot \rangle : V \times V \to \RR$.
:::

**Symmetric:** $\langle u, v \rangle = \langle v, u \rangle$. **Definite positive:** $\langle u, u \rangle \geq 0$ for all $u \in V$, and $\langle u, u \rangle = 0$ iff $u = 0$.

This definition only makes sense over an **ordered** field, so that “$\langle u, u \rangle \geq 0$” makes sense. In practice this means $\RR$. We can’t do this over $\CC$ (we’ll see a workaround: Hermitian forms).

- Let $\varphi : V \to V^*$, $v \mapsto \langle v, \cdot \rangle$, be the linear map corresponding to $\langle \cdot, \cdot \rangle$. Then $\langle \cdot, \cdot \rangle$ definite positive $\Rightarrow$ $\varphi$ is injective (since for all $v \neq 0$, $\varphi(v) \neq 0$! $\varphi(v)(v) > 0$) $\Rightarrow$ (assuming $\dim V < \infty$) $\varphi$ is an **iso** $V \xrightarrow{\sim} V^*$, i.e. $\langle \cdot, \cdot \rangle$ is **nondegenerate**. (The converse is false: $\langle \cdot, \cdot \rangle$ nondegenerate $\not\Rightarrow$ positive.)

:::proposition
$V$ a finite-dimensional inner product space, $S \subset V$ a subspace $\Rightarrow$ $V = S \oplus S^\perp$.
:::

:::proof
- We’ve seen: $\langle \cdot, \cdot \rangle$ is nondegenerate, so $\dim S^\perp = \dim V - \dim S$.
- Since $\langle \cdot, \cdot \rangle$ is positive definite, $v \in S \cap S^\perp \Rightarrow \langle v, v \rangle = 0 \Rightarrow v = 0$. So $S \cap S^\perp = \{0\}$. Since the dimensions add up to $\dim V$, this implies $S \oplus S^\perp = V$.
:::

:::definition
- The **norm** of a vector is $\|v\| = \sqrt{\langle v, v \rangle}$.
- $v, w \in V$ are **orthogonal** if $\langle v, w \rangle = 0$.
:::

**Observe:** $\|v - w\|^2 = \langle v - w, v - w \rangle = \|v\|^2 + \|w\|^2 - 2\langle v, w \rangle$.

- If $v$ and $w$ are orthogonal then $\|v - w\|^2 = \|v\|^2 + \|w\|^2$ (Pythagorean theorem).
- In general, by analogy with the law of triangles, we define the **angle** between 2 vectors,
$$\measuredangle(v,w) = \cos^{-1}\left(\frac{\langle v, w \rangle}{\|v\|\,\|w\|}\right).$$
This only makes sense if $|\langle v, w \rangle| \leq \|v\|\,\|w\|$?

:::theorem Cauchy–Schwarz inequality
For all $u, v \in V$, $|\langle u, v \rangle| \leq \|u\|\,\|v\|$.
:::

:::proof
The inequality is unaffected by scaling, so we can assume $\|u\| = 1$. Decompose $v$ along $V = S \oplus S^\perp$ where $S = \operatorname{span}(u) \subset V$. Explicitly, $v = v_1 + v_2$, with $v_1 = \langle v, u \rangle u \in \operatorname{span}(u)$ and $v_2 = v - \langle v, u \rangle u$ orthogonal to $u$. Then $v_1 \perp v_2$, so
$$\|v\|^2 = \|v_1\|^2 + \|v_2\|^2 \geq \|v_1\|^2 = \langle v, u \rangle^2.$$
This is the desired inequality for $\|u\| = 1$.
:::
:::
