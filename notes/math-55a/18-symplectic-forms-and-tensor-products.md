---
course: math-55a
chapter: 5
section: 18
title: Symplectic Forms and Tensor Products
date: 2025-10-15
lecturer: Denis Auroux
source-pages: A18-1, A18-2, A18-3, A18-4, A18-5
---

:::readings Review sessions and handouts
- Joe Harris, with minor editing by Denis Auroux, [Tensor products and multilinear algebra](/notes/math-55a/readings/harris-auroux-tensor-products.pdf)
:::

**Last time:** to classify nondegenerate symmetric bilinear forms on vector spaces over $k=\CC$ or $\RR$: find $v$ such that $b(v,v)\neq0$, scale it to get $e_1$ such that $b(e_1,e_1)=1$ ($\CC$), resp. $\pm1$ ($\RR$), then continue with $\operatorname{span}(e_1)^\perp$. This gives a basis $(e_1,\dots,e_n)$ with
$$b(e_i,e_j)=\begin{cases}0&i\neq j\\\pm1&i=j\end{cases}\qquad(\text{can assume }+1\text{ if }k=\CC),$$
so
$$b\Big(\sum x_ie_i,\sum y_ie_i\Big)=\sum_{i=1}^kx_iy_i-\sum_{i=k+1}^nx_iy_i.$$

## The skew-symmetric case

What about the **skew-symmetric** case? (Suppose $\operatorname{char}(k)\neq2$.)

We can still find a “**standard basis**” for $V$ a finite-dimensional vector space with $B:V\times V\to k$ a nondegenerate skew-symmetric bilinear form (a.k.a. a **symplectic form**), but the process is slightly different since $B(v,v)=0$ for all $v\in V$.

Instead: pick any nonzero $e_1\in V$; since $B$ is nondegenerate, $B(e_1,\cdot):V\to k$ is nonzero, so there exists $f_1\in V$ such that $B(e_1,f_1)\neq0$, and we can make it $=1$ by scaling $f_1$.
Now we find $\operatorname{span}(e_1,f_1)\cap\operatorname{span}(e_1,f_1)^\perp=\{0\}$ (if $v=ae_1+bf_1$ has $B(v,e_1)=B(v,f_1)=0$ then $a=b=0$), so
$$V=\operatorname{span}(e_1,f_1)\oplus\operatorname{span}(e_1,f_1)^\perp,$$
and we study the restriction of $B$ to the latter subspace (induction on dimension).

:::proposition
Let $V$ be finite-dimensional over $k$, $\operatorname{char}(k)\neq2$, and $B$ a nondegenerate skew-symmetric bilinear form $V\times V\to k$. Then $\dim V$ is even, and $V$ has a basis $(e_1,f_1,\dots,e_n,f_n)$ such that
$$B(e_i,e_j)=B(f_i,f_j)=0,\qquad B(e_i,f_j)=\delta_{ij}=-B(f_j,e_i),$$
i.e. the matrix of $B$ is block diagonal:
$$\begin{pmatrix}
\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}&&\\
&\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}&\\
&&\ddots
\end{pmatrix}.$$
:::

The group of linear transformations preserving $B$ is called the **symplectic group** $Sp(V,B)\simeq Sp(2n,k)$.

## Tensor products

**Next: tensor products & multilinear algebra.**

**Goal:** think of bilinear maps $V_1\times V_2\to W$ as linear maps from a new vector space $V_1\otimes V_2$.

For $V,W$ finite-dimensional vector spaces over $k$, the **tensor product** is a vector space $V\otimes W$ together with a bilinear map
$$V\times W\to V\otimes W,\qquad (v,w)\mapsto v\otimes w.$$

Three definitions (from concrete to abstract; all are equivalent, i.e. give the same output up to natural isomorphism):

:::definition Definition 1
Choose bases $e_1,\dots,e_m$ of $V$ and $f_1,\dots,f_n$ of $W$. Then $V\otimes W$ is the vector space with basis $\{e_i\otimes f_j,\ 1\leq i\leq m,\ 1\leq j\leq n\}$. The bilinear map is $(e_i,f_j)\mapsto e_i\otimes f_j$, extended by linearity.
:::

:::definition
Elements of the form
$$v\otimes w=\Big(\sum a_ie_i\Big)\otimes\Big(\sum b_jf_j\Big)=\sum a_ib_j\,(e_i\otimes f_j)$$
are called **pure tensors**; not every element of $V\otimes W$ is of this form!
The **rank** of an element of $V\otimes W$ is the minimal number of terms needed to express it as a linear combination of pure tensors.
:::

This is concrete and makes it clear that $\dim(V\otimes W)=mn$, but the independence of the choice of basis isn’t obvious. To de-emphasize the basis:

:::definition Definition 2
Start with a vector space $U$ with basis $\{v\otimes w\mid v\in V,\ w\in W\}$ (this is insanely large: usually this basis is uncountable!), and quotient it by a subspace $R$ of relations among these elements: $R\subset U$ is the span of
$$\left\{\begin{matrix}(\lambda v)\otimes w-\lambda(v\otimes w)\\ v\otimes(\lambda w)-\lambda(v\otimes w)\end{matrix}\ \ \forall\lambda,v,w\right\}
\quad\text{and}\quad
\left\{\begin{matrix}(u+v)\otimes w-u\otimes w-v\otimes w\\ u\otimes(v+w)-u\otimes v-u\otimes w\end{matrix}\ \ \forall u,v,w\right\}.$$
Defining $V\otimes W=U/R$ sets all these to zero, enforcing bilinearity of the map $(v,w)\mapsto v\otimes w$.
:::

This shows independence of the basis, but involves an unpleasantly large construction. (At the end, if we have bases $\{e_i\}$ of $V$ and $\{f_j\}$ of $W$, the relations in $R$ do show all elements of $V\otimes W$ are linear combinations of the $e_i\otimes f_j$, but before one checks this, it’s not even obvious that $\dim(V\otimes W)<\infty$.)

The least concrete, yet most mathematically satisfactory definition characterizes what $V\otimes W$ *does* without spelling out how it’s actually constructed: namely, that linear maps from $V\otimes W$ to another space, when evaluated on pure tensors $v\otimes w$, give maps from $V\times W$ that are bilinear in $v$ and $w$. (E.g. in Definition 2: $U$ is too big, and the quotient by $R$ enforces bilinearity.)

:::definition Definition 3
The tensor product $V\otimes W$ is the universal vector space through which all bilinear maps from $V\times W$ factor, i.e. it is a vector space $V\otimes W$ together with a bilinear map $\beta:V\times W\to V\otimes W$ such that, given any vector space $U$ over $k$ and any bilinear map $b:V\times W\to U$, there exists a unique linear map $\varphi:V\otimes W\to U$ such that $b=\varphi\circ\beta$.
:::

![Commutative triangle: b from V×W to U factors as β into V⊗W followed by a unique linear φ](/notes/math-55a/figures/e5-tensor-universal-property.svg)

This tells us the key property of $V\otimes W$ and implies uniqueness up to isomorphism (the universal property gives isomorphisms between any two candidate constructions of $V\otimes W$), but existence ultimately comes from one of the previous constructions!

**Check:** Definition 1 satisfies the property: given bases $\{e_i\}$ and $\{f_j\}$ of $V$ and $W$,
$$\{\text{bilinear maps } b:V\times W\to U\}\ \longleftrightarrow\ \{\text{linear maps }\varphi:V\otimes W\to U\}$$
by defining $b(e_i,f_j)=\varphi(e_i\otimes f_j)$, and vice versa.

## Basic properties

- $\otimes:\mathrm{Vect}_k\times\mathrm{Vect}_k\to\mathrm{Vect}_k$ is a **functor**. This means: given linear maps $f:V\to V'$ and $g:W\to W'$, we get a linear map $f\otimes g:V\otimes W\to V'\otimes W'$, given on pure elements by $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$, and this respects composition.
- $V\otimes W\cong W\otimes V$ (natural isomorphism $v\otimes w\mapsto w\otimes v$).
- $(U\oplus V)\otimes W\cong(U\otimes W)\oplus(V\otimes W)$.

More surprising but extremely useful:
$$\boxed{\Hom(V,W)\simeq V^*\otimes W}$$

:::proof
The map
$$V^*\times W\to\Hom(V,W),\qquad (\ell,w)\mapsto\big(v\mapsto\ell(v)w\big)$$
is bilinear, so by the universal property we get a linear map $V^*\otimes W\to\Hom(V,W)$, which takes $\ell\otimes w\mapsto(v\mapsto\ell(v)w)$.

Pick bases $(e_1,\dots,e_n)$ of $V$ and $(f_1,\dots,f_m)$ of $W$, and let $(e_1^*,\dots,e_n^*)$ be the dual basis of $V^*$. Then $(e_i^*\otimes f_j)$ is a basis of $V^*\otimes W$.
The above construction takes $e_i^*\otimes f_j$ to
$$\varphi_{ij}:V\to W,\qquad v\mapsto e_i^*(v)f_j,$$
whose action on basis vectors is: $e_i$ maps to $f_j$, all others to $0$.
Thus $\mathcal M(\varphi_{ij})$ is the $m\times n$ matrix with a single nonzero entry, a $1$ in row $j$, column $i$. These form a basis of $\Hom(V,W)$.
Since it maps a basis to a basis, $V^*\otimes W\to\Hom(V,W)$ is an isomorphism.
:::

:::example
If $V$ has basis $(e_1,e_2)$, $V^*$ has basis $(e_1^*,e_2^*)$, and $W$ has basis $f_1,f_2$, then the linear map with matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is
$$e_1^*\otimes(af_1+cf_2)+e_2^*\otimes(bf_1+df_2).$$
This is in general a rank 2 tensor, except if $ad-bc=0$: then we can write it as a pure tensor $\ell\otimes w$.
:::

:::proposition Fact
Tensor rank in $V^*\otimes W$ is the same as rank in $\Hom(V,W)$! (Hence the name.)
:::

(Rank 1 case: $\ell\otimes w$ corresponds to $(v\mapsto\ell(v)w)$, whose image is $\operatorname{span}(w)$!)

This is easiest to see if we take a basis of $V$ in which $e_{r+1},\dots,e_n$ is a basis of $\ker\varphi$, and a basis of $W$ in which $f_1,\dots,f_r$ is a basis of $\im\varphi$, with $f_i=\varphi(e_i)$ for all $1\leq i\leq r$. Then $\varphi$ corresponds to $\sum_{i=1}^re_i^*\otimes f_i$
$$\Big(\iff\mathcal M(\varphi)=\left(\begin{array}{c|c}I_r&0\\\hline0&0\end{array}\right),\quad r=\rank\varphi\Big).$$

The isomorphism $\Hom(V,W)\simeq V^*\otimes W$ also implies:

- $(V\otimes W)^*\simeq V^*\otimes W^*$. We can view this as:
  $$\begin{aligned}
  (V\otimes W)^*=\Hom(V\otimes W,k)&=\{\text{bilinear maps }V\times W\to k\}\\
  &\simeq\Hom(V,W^*)\qquad\big(\text{via } b\mapsto\varphi_b: \underbrace{v}_{\in V}\mapsto\underbrace{b(v,\cdot)}_{\in W^*}\big)\\
  &\simeq V^*\otimes W^*.
  \end{aligned}$$
- $\Hom(V,W)\simeq V^*\otimes W\simeq(W^*)^*\otimes V^*\simeq\Hom(W^*,V^*)$.
  This is actually the **transpose** construction $\varphi\in\Hom(V,W)\mapsto\varphi^t:W^*\to V^*$. (Easiest to check on rank 1: $\varphi(v)=\ell(v)w\ \leadsto\ \varphi^t(\alpha)=\alpha\circ\varphi=\alpha(w)\,\ell=\mathrm{ev}_w(\alpha)\,\ell$, i.e. $\ell\otimes w\leadsto\mathrm{ev}_w\otimes\ell$.)

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L19}}
**The trace, properly defined**

We can now properly define the **trace of a linear operator**!

In “ordinary” linear algebra classes, one defines the trace of an $n\times n$ matrix $A=(a_{ij})$ to be $\operatorname{tr}(A)=\sum_{i=1}^na_{ii}$, the sum of the diagonal entries; then, noting that
$$\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\operatorname{tr}(BA),$$
we have $\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(A)$, and so the trace of $T:V\to V$ is defined to be the trace of $\mathcal M(T)$ in any basis.

We could also try to define the trace via eigenvalues and their multiplicities, over an algebraically closed field: in a basis where $\mathcal M(T)$ is triangular it is manifest that $\operatorname{tr}(T)=\sum n_i\lambda_i$.

We can do better (conceptually), by using $\Hom(V,V)\simeq V^*\otimes V$ and the **contraction** linear map $V^*\otimes V\to k$. Namely, there’s a natural bilinear pairing
$$\mathrm{ev}:V^*\times V\to k,\qquad(\ell,v)\mapsto\ell(v),$$
and it determines $\operatorname{tr}:V^*\otimes V\to k$, given on pure tensors by $\ell\otimes v\mapsto\ell(v)$.

This is indeed equivalent to the usual definition: choosing a basis $(e_i)$ and the dual basis $(e_i^*)$, $\operatorname{tr}(e_i^*\otimes e_j)=e_i^*(e_j)=\delta_{ij}$ $\leftrightarrow$ the trace of the matrix with single entry 1 in position $(j,i)$.

**Multilinear maps and the tensor algebra**

:::definition
A map $m:V_1\times\dots\times V_k\to W$ is **multilinear** if it is linear in each variable separately.
:::

The tensor product $V_1\otimes\dots\otimes V_k$ can be defined as above, either using bases of $V_1,\dots,V_k$, or as a quotient of a universal vector space by relations, or via the universal property for multilinear maps: there is a multilinear map
$$\mu:V_1\times\dots\times V_k\to V_1\otimes\dots\otimes V_k,\qquad(v_1,\dots,v_k)\mapsto v_1\otimes\dots\otimes v_k,$$
such that for every vector space $W$ and every multilinear $m:V_1\times\dots\times V_k\to W$, there exists a unique $\varphi\in\Hom(V_1\otimes\dots\otimes V_k,W)$ such that $m=\varphi\circ\mu$.

![Commutative triangle: m from V_1×⋯×V_k to W factors as μ into V_1⊗⋯⊗V_k followed by a unique linear φ](/notes/math-55a/figures/e5-multilinear-universal-property.svg)

In fact nothing new is happening, because $(U\otimes V)\otimes W=U\otimes(V\otimes W)=U\otimes V\otimes W$.

In the special case of
$$\underbrace{V\otimes\dots\otimes V}_{n\text{ times}}=V^{\otimes n}\qquad(\text{by convention } V^{\otimes0}=k,\ V^{\otimes1}=V),$$
we have bilinear maps $V^{\otimes k}\times V^{\otimes l}\to V^{\otimes(k+l)}$ for all $k,l\geq0$, which taken together define a multiplication on the **tensor algebra**
$$T(V)=\bigoplus_{n=0}^\infty V^{\otimes n},$$
making it a noncommutative ring.

More multilinear algebra next time.
:::
