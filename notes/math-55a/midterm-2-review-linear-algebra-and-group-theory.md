---
course: math-55a
chapter: 7
section: M2
title: Midterm 2 Review: Linear Algebra and Group Theory
lecturer: Denis Auroux
source-pages: 1-7
---

:::readings Review sessions and handouts
- Christoph von Pezold and Russell Georgi, [Midterm 2 review notes](/notes/math-55a/readings/midterm-2-review-notes.pdf)
- Iz Chen, [Midterm 2 review problems](/notes/math-55a/readings/midterm-2-review-problems.pdf)
:::

## Part 1: Linear algebra

:::note Already on Midterm 1
- A **field** $(k,+,\times)$ is a set with two operations: $(k,+)$ is an abelian group with identity $0$; $(k^*=k-\{0\},\times)$ is an abelian group with identity $1$; distributive law $a(b+c)=ab+ac$.
  - *Examples:* $\QQ$, $\RR$, $\CC$ (characteristic $0$: $\underbrace{1+\dots+1}_{n}=n\cdot 1\neq 0$); $\FF_p=\ZZ/p$, $p$ prime (characteristic $p$).
- (Axler ch. 1) A **vector space** over $k$ is a set $V$ with addition $+:V\times V\to V$ ($(V,+)$ an abelian group, $0\in V$) and scalar multiplication $k\times V\to V$, associative and distributive.
  - *Examples:* $k^n$, $k[x]$, …
  - **Subspace**: $W\subset V$ closed under $+$ and $\times$.
- $\operatorname{span}(v_1,\dots,v_n)=\{\sum a_iv_i\mid a_i\in k\}\subset V$; say $(v_i)$ **span** $V$ if $\operatorname{span}(v_i)=V$.
  - (Axler ch. 2) Say $(v_i)$ are **linearly independent** if $a_1v_1+\dots+a_nv_n=0\Rightarrow a_i=0$ for all $i$.
  - **Basis** = linearly independent vectors which span $V$: then $k^n\to V$, $(a_i)\mapsto\sum a_iv_i$, is an isomorphism.
- All bases of $V$ have the same cardinality $=\dim V$.
  - Any linearly independent set can be completed to a basis.
- $\Hom(V,W)$ = linear maps $\varphi:V\to W$: $\varphi(u+v)=\varphi(u)+\varphi(v)$, $\varphi(\lambda u)=\lambda\varphi(u)$. This is a vector space.
- (Axler ch. 3) Given bases $(v_j)_{j=1..n}$ of $V$ and $(w_i)_{i=1..m}$ of $W$, represent $v=\sum x_jv_j\in V$ by the column $X=\begin{pmatrix}x_1\\ \vdots\\ x_n\end{pmatrix}$, and $\varphi\in\Hom(V,W)$ by the matrix $A=(a_{ij})$ whose columns represent $\varphi(v_j)$ in the basis $(w_i)$: $\varphi(v_j)=\sum_i a_{ij}w_i$.
  - Then $\varphi(v)$ is represented in the basis $(w_i)$ by the column vector $Y=AX$:
    $$\begin{CD} V @>{\varphi}>> W\\ @A{\text{basis}}A{\simeq}A @A{\simeq}A{\text{basis}}A\\ k^n @>{A}>> k^m \end{CD}$$
  - Change of basis: $P=(p_{ij})=\mathcal M(\id,(v_i'),(v_i))$, i.e. $v_j'=\sum_i p_{ij}v_i$; then for $\varphi:V\to V$, $\mathcal M(\varphi,(v_i'))=A'=P^{-1}AP$.
- $V\simeq W_1\oplus\dots\oplus W_n$ is a **direct sum decomposition** if
  $$\begin{cases} \text{the } W_i \text{ span } V: & \forall v\in V\ \exists w_i\in W_i \text{ such that } v=w_1+\dots+w_n,\\ \text{the } W_i \text{ are independent}: & w_1+\dots+w_n=0,\ w_i\in W_i\Rightarrow w_i=0\ \forall i,\end{cases}$$
  i.e. $\varphi:\bigoplus W_i\to V$, $(w_i)\mapsto\sum w_i$, is an isomorphism.
- $V$ finite-dimensional $\Rightarrow$ $V=W_1\oplus W_2$ iff $W_1\cap W_2=\{0\}$ and $\dim W_1+\dim W_2=\dim V$.
- **Dim/rank formula**: $V,W$ finite-dimensional, $\varphi\in\Hom(V,W)$ $\Rightarrow$ $\dim V=\dim\ker\varphi+\underbrace{\dim\operatorname{Im}\varphi}_{=\operatorname{rank}(\varphi)}$.
- There exist bases $(v_i)$ of $V$, $(w_j)$ of $W$ such that
  $$\mathcal M(\varphi)=\left(\begin{array}{c|c} I_{r\times r} & 0\\ \hline 0 & 0\end{array}\right),$$
  where the first $r$ rows correspond to $\operatorname{Im}\varphi$ and the last columns to $\ker\varphi$.
- **Dual**: $V^*=\Hom(V,k)$.
  - $(e_i)$ basis of $V$ (finite-dimensional) $\Rightarrow$ **dual basis** $(e_i^*)$ of $V^*$ such that $e_i^*(e_j)=\delta_{ij}=\begin{cases}1 & i=j\\ 0 & \text{else.}\end{cases}$
  - $V\to V^{**}$, $v\mapsto \mathrm{ev}_v=\big(V^*\to k,\ \ell\mapsto\ell(v)\big)$, is an isomorphism if $\dim V<\infty$ (injective if $\dim V=\infty$).
  - The **annihilator** of $U\subset V$ is $\operatorname{Ann}(U)=\{\ell\in V^*\mid \ell(u)=0\ \forall u\in U\}$; $\dim\operatorname{Ann}(U)=n-\dim U$.
  - The **transpose** of $\varphi\in\Hom(V,W)$ is $\varphi^t:W^*\to V^*$, $\varphi^t(\ell)=\ell\circ\varphi$.
    $\ker\varphi^t=\operatorname{Ann}(\operatorname{Im}\varphi)$, $\operatorname{Im}\varphi^t=\operatorname{Ann}(\ker\varphi)$ if $\dim<\infty$; $\mathcal M(\varphi^t,(f_j^*),(e_i^*))=\mathcal M(\varphi)^T$.
- **Quotient**: $U\subset V$ subspace $\Rightarrow$ $V/U=\{\text{cosets } v+U\}$ is a vector space.
  - $V\xrightarrow{q}V/U$, $v\mapsto v+U$, is surjective with kernel $=U$.
  - $V\xrightarrow{\varphi}W$ factors through $V/U$ (there exists $\bar\varphi:V/U\to W$ with $\varphi=\bar\varphi\circ q$) iff $U\subset\ker\varphi$.

![Commutative triangle: phi from V to W factors as q from V to V/U followed by phi-bar from V/U to W](/notes/math-55a/figures/r55a-quotient-factor.svg)

- (Axler ch. 5) $W\subset V$ is an **invariant subspace** for $\varphi\in\Hom(V,V)$ if $\varphi(W)\subset W$.
  - *Examples:* $\ker(\varphi)$, $\operatorname{Im}(\varphi)$; **eigenspaces** $\ker(\varphi-\lambda I)$.
- If $V=\bigoplus V_i$ with $V_i$ invariant for $\varphi$, then there is a basis where $\mathcal M(\varphi)$ is block diagonal: $\left(\begin{array}{c|c}\varphi_{|V_1} & 0\\ \hline 0 & \varphi_{|V_2}\end{array}\right)$.
  - A basis of **eigenvectors** $v_i\in V$, $v_i\neq 0$, $\varphi(v_i)=\lambda_iv_i$ $\Leftrightarrow$ $\varphi$ **diagonalizable**: $\mathcal M(\varphi,(v_i))=\begin{pmatrix}\lambda_1 & & 0\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$.
- Eigenvectors of $\varphi$ for distinct eigenvalues are linearly independent.
- If $k$ is algebraically closed (e.g. $\CC$) then any linear operator $\varphi\in\Hom(V,V)$ has an eigenvector.
  - Corollary: there exists a basis in which $\mathcal M(\varphi)$ is upper triangular, $\begin{pmatrix}* & & \ast\\ & \ddots & \\ 0 & & *\end{pmatrix}$.
  - $\lambda\in k$ is an eigenvalue of $\varphi$ $\Leftrightarrow$ $(\varphi-\lambda)$ is not invertible $\Leftrightarrow$ $\lambda$ appears on the diagonal in a triangular matrix representing $\varphi$.
:::

- (Axler ch. 8) The **generalized kernel** $\operatorname{gker}(\varphi)=\ker(\varphi^N)$ for all $N$ large (e.g. $N\ge\dim V$).
  - $\varphi$ is **nilpotent** if $\varphi^N=0$; $\ker(\varphi)\subset\ker(\varphi^2)\subset\cdots$. There exists a basis such that $\mathcal M(\varphi)$ is block diagonal with blocks $\begin{pmatrix}0 & 1 & & 0\\ & \ddots & \ddots & \\ & & \ddots & 1\\ 0 & & & 0\end{pmatrix}$.
- The **generalized eigenspaces** $V_\lambda=\operatorname{gker}(\varphi-\lambda)=\ker(\varphi-\lambda)^N$ are linearly independent invariant subspaces.
- If $k$ is algebraically closed then $V$ = the direct sum $\bigoplus V_\lambda$ of the generalized eigenspaces of $\varphi$.
  - This gives the **Jordan normal form**: $\mathcal M(\varphi)$ is block diagonal with blocks $\begin{pmatrix}\lambda & 1 & & 0\\ & \ddots & \ddots & \\ & & \ddots & 1\\ 0 & & & \lambda\end{pmatrix}$ ($\varphi$ diagonalizable $\Leftrightarrow$ all blocks have size $1$).
- **Characteristic polynomial** of $\varphi$: $\chi_\varphi(x)=\det(xI-\varphi)=\prod_{\lambda_i}(x-\lambda_i)^{n_i}$, $n_i=\operatorname{mult}(\lambda_i)=\dim V_{\lambda_i}$.
  - **Minimal polynomial**: $\mu_\varphi(x)=\prod(x-\lambda_i)^{m_i}$, $m_i=\min\{m\mid V_{\lambda_i}=\ker(\varphi-\lambda_i)^m\}$ = size of the largest Jordan block in $V_{\lambda_i}$.
  - $p(\varphi)=0$ iff $\mu_\varphi\mid p(x)$. In particular $\mu_\varphi\mid\chi_\varphi$. $\varphi$ diagonalizable $\Leftrightarrow$ $m_i=1$ for all $i$.
- Over $\RR$, $\varphi:V\to V$ need not have eigenvectors, but by considering $V_\CC=V\times V=\{v+iw\mid v,w\in V\}$ and $\varphi_\CC:V_\CC\to V_\CC$, $\varphi_\CC(v+iw)=\varphi(v)+i\varphi(w)$ $\Rightarrow$ any real operator has an invariant subspace of dimension $1$ (eigenvector!) or $2$.

:::note Not on midterm
- (Handout) **Categories** have objects, and morphisms $\Mor(A,B)$ for all $A,B\in\operatorname{ob}\mathcal C$, with operation = composition.
  - Axioms: for all $A\in\operatorname{ob}\mathcal C$ there exists $\id_A\in\Mor(A,A)$ with $f\circ\id_A=\id_B\circ f=f$; associativity $(f\circ g)\circ h=f\circ(g\circ h)$.
  - *Examples:* sets, groups, vector spaces over $k$.
- A **functor** $F:\mathcal C\to\mathcal D$ assigns
  - to each $X\in\operatorname{ob}\mathcal C$, $F(X)\in\operatorname{ob}\mathcal D$;
  - to each $f\in\Mor_{\mathcal C}(X,Y)$, $F(f)\in\Mor_{\mathcal D}(F(X),F(Y))$,

  such that $F(\id_X)=\id_{F(X)}$ and $F(g\circ f)=F(g)\circ F(f)$. (Contravariant functors = reverse direction of morphisms.)
- A **natural transformation** $t$ between functors $F,G:\mathcal C\to\mathcal D$ = for each $X\in\operatorname{ob}\mathcal C$, $t_X\in\Mor_{\mathcal D}(F(X),G(X))$ such that for all $X\xrightarrow{f}Y$,
  $$\begin{CD} F(X) @>{t_X}>> G(X)\\ @V{F(f)}VV @VV{G(f)}V\\ F(Y) @>{t_Y}>> G(Y)\end{CD}$$
  commutes.
:::

- (Axler ch. 9A) A **bilinear form** on $V$ is $b:V\times V\to k$, linear in each input: $b(u+v,w)=b(u,w)+b(v,w)$, $b(\lambda u,v)=\lambda b(u,v)$, etc.
  - $b$ is **symmetric** if $b(u,v)=b(v,u)$, **skew-symmetric** if $b(u,v)=-b(v,u)$.
- $B(V)=\{\text{bilinear } b:V\times V\to k\}\xrightarrow{\ \sim\ }\Hom(V,V^*)$ (isomorphism of vector spaces), $b\mapsto\varphi_b: v\mapsto\big(b(v,\cdot):V\to k\big)$.
  - $\operatorname{rank}(b)=\operatorname{rank}(\varphi_b)$; $b$ is **nondegenerate** if $\varphi_b:V\xrightarrow{\sim}V^*$ is an isomorphism.
- In a basis $(e_i)$ of $V$, $b$ is represented by a matrix $B=(b_{ij})=(b(e_i,e_j))$.
  - If $u=\sum x_ie_i$, $v=\sum y_ie_i$ are represented by column vectors $X,Y$, then $b(u,v)=X^TBY$.
- The **orthogonal** of $S\subset V$ for $b$ is $S^\perp=\{v\in V\mid b(v,w)=0\ \forall w\in S\}=\ker\big(V\to S^*,\ v\mapsto\varphi_b(v)_{|S}\big)$.
  - If $b$ is nondegenerate then $\dim S^\perp=\dim V-\dim S$.
  - (Axler ch. 6) If $b$ is an inner product then $S\cap S^\perp=\{0\}$ and $V=S\oplus S^\perp$.
- A real **inner product** $\langle\cdot,\cdot\rangle:V\times V\to\RR$ is a *symmetric* *definite positive* bilinear form ($\langle u,u\rangle=\|u\|^2>0$ for all $u\neq 0$).
  - Cauchy–Schwarz inequality: $\langle u,v\rangle\le\|u\|\,\|v\|$.
  - Over $\CC$, we consider **Hermitian inner products** $\langle\cdot,\cdot\rangle:V\times V\to\CC$, not quite bilinear: $\langle\lambda u,v\rangle=\bar\lambda\langle u,v\rangle$; we require Hermitian-symmetric, $\langle v,u\rangle=\overline{\langle u,v\rangle}$, and definite positive, $\langle u,u\rangle=\|u\|^2>0$ for all $u\neq 0$.
    The map $V\to V^*$ induced by such $\langle\cdot,\cdot\rangle$ is $\CC$-antilinear: $\varphi(\lambda u)=\bar\lambda\varphi(u)$.
- Every finite-dimensional inner product space (over $\RR$ or $\CC$) has an **orthonormal basis** $(e_1,\dots,e_n)$ such that $\langle e_i,e_j\rangle=\delta_{ij}$ (build by induction, e.g. using Gram–Schmidt).
- (Axler ch. 7) Let $(V,\langle\cdot,\cdot\rangle)$ be an inner product space (over $\RR$ or $\CC$), $T:V\to V$ a linear operator.
  - The **adjoint** operator $T^*:V\to V$ satisfies $\langle v,Tw\rangle=\langle T^*v,w\rangle$ for all $v,w\in V$. (It corresponds to the transpose of $T$ via $V\xrightarrow[\varphi]{\sim}V^*$; over $\CC$: the complex conjugate of $T^t$.)
  - In an orthonormal basis, $\mathcal M(T^*)=\mathcal M(T)^t$ (real case) or $\overline{\mathcal M(T)}^t$ (complex Hermitian case).
  - $\ker(T^*)=\operatorname{Im}(T)^\perp$ and vice versa.
- $T:V\to V$ is **self-adjoint** if $T^*=T$.
  - $T$ is **orthogonal** (**unitary** over $\CC$) if $T^*=T^{-1}$, i.e. $\langle Tu,Tv\rangle=\langle u,v\rangle$ for all $u,v\in V$ ($\Leftrightarrow$ $T$ maps an orthonormal basis to an orthonormal basis).
- If $S\subset V$ is invariant under a self-adjoint/orthogonal/unitary operator then so is $S^\perp$.
  $\Rightarrow$ **Spectral theorem** (real and complex versions):
  - If $T:V\to V$ is self-adjoint then $T$ is diagonalizable, with real eigenvalues, and can be diagonalized in an orthonormal basis.
  - If $T:V\to V$ is orthogonal for a real inner product, then $V$ is a direct sum of orthogonal invariant subspaces of dimension $1$ or $2$, with $T$ acting by $\pm1$ on the 1-dimensional pieces and by rotations on the 2-dimensional pieces.
  - If $T:V\to V$ is unitary for a Hermitian inner product, then $T$ is diagonalizable in an orthonormal basis, with eigenvalues $|\lambda_i|=1$.
    More generally, if $T:V\to V$ (Hermitian) is **normal**, i.e. $TT^*=T^*T$, then $T$ is diagonalizable in an orthonormal basis.
- Besides inner products, one can also consider arbitrary nondegenerate symmetric bilinear forms (without assuming positivity); e.g. over $\RR$ (resp. $\CC$) there exists an orthogonal basis such that $b(e_i,e_j)=\begin{cases}\pm1 & i=j\\ 0 & i\neq j\end{cases}$ (resp. $b(e_i,e_j)=\delta_{ij}$); or skew-symmetric bilinear forms.
- (Handout) **Tensor product**: $V\otimes W$ is a vector space, with a bilinear map $V\times W\to V\otimes W$, $(v,w)\mapsto v\otimes w$, such that bilinear maps $V\times W\xrightarrow{b}U$ correspond to linear maps $V\otimes W\xrightarrow{\varphi}U$ ($\varphi(v\otimes w)=b(v,w)$).
  - Elements of $V\otimes W$ are finite linear combinations $\sum v_i\otimes w_i$.
  - If $(e_i)$ is a basis of $V$ and $(f_j)$ a basis of $W$, then $(e_i\otimes f_j)$ is a basis of $V\otimes W$.
- $V^*\otimes W\simeq\Hom(V,W)$, by mapping $\ell\otimes w\in V^*\otimes W$ to $(v\mapsto\ell(v)w)\in\Hom(V,W)$.
- The trace $\operatorname{tr}(T:V\to V)=\sum\lambda_i\in k$ can be defined by $\Hom(V,V)\xrightarrow{\sim}V^*\otimes V\to k$, $\ell\otimes v\mapsto\ell(v)$.

:::note Not on midterm
- Multilinear maps $V_1\times\dots\times V_n\to U$ $\Leftrightarrow$ linear maps $V_1\otimes\dots\otimes V_n\to U$.
- $V^{\otimes n}=V\otimes\dots\otimes V$ contains subspaces
  - $\operatorname{Sym}^n(V)$ = symmetric tensors ($\leftrightarrow$ symmetric multilinear maps): $v_{\sigma(1)}\cdots v_{\sigma(n)}=v_1\cdots v_n$;
  - $\Lambda^n(V)$ = exterior powers: alternating tensors, $v_{\sigma(1)}\wedge\dots\wedge v_{\sigma(n)}=(-1)^\sigma v_1\wedge\dots\wedge v_n$.
- If $\dim V=n$ then $\Lambda^nV$ has dimension $1$; for $T:V\to V$, $\Lambda^nT:\Lambda^nV\to\Lambda^nV$ is multiplication by a scalar, the **determinant** $\det(T)\in k$.
- The theory of modules over a ring $(R,+,\times)$ (elements need not have multiplicative inverses) is more complicated than that of vector spaces.
  - Finitely generated modules need not have a basis; those that do are called **free**.
:::

- $\ZZ$-modules $\Leftrightarrow$ abelian groups.
  - (Parts of Artin ch. 14) Every finitely generated $\ZZ$-module $M$ with generators $(e_1,\dots,e_n)$ is a quotient of $\ZZ^n$ ($\varphi:\ZZ^n\twoheadrightarrow M$, $(a_i)\mapsto\sum a_ie_i$), and $\ker(\varphi)\subset\ZZ^n$ is itself a free module, i.e. there exists $T:\ZZ^m\to\ZZ^n$ such that $M\simeq\ZZ^n/\operatorname{Im}T$.
  - $\to$ Via linear algebra over $\ZZ$, one finds: every finitely generated abelian group is $\simeq\ZZ^r\times\ZZ/n_1\times\dots\times\ZZ/n_k$ for some $r,n_1,\dots,n_k$. (Recall $\ZZ/m\times\ZZ/n\simeq\ZZ/mn$ if $\gcd(m,n)=1$.)

## Part 2: Group theory

:::note Already on Midterm 1
- (Artin ch. 2) A **group** $(G,\cdot)$ is a set with an operation $\cdot: G\times G\to G$ such that
  1. there exists $e\in G$, the **identity**, such that $eg=ge=g$ for all $g\in G$;
  2. for all $g\in G$ there exists an **inverse** $g^{-1}\in G$ such that $gg^{-1}=g^{-1}g=e$;
  3. **associativity**: $(ab)c=a(bc)$ for all $a,b,c\in G$.
- A group is **abelian** if $\cdot$ is commutative ($ab=ba$ for all $a,b\in G$).
- *Examples:* $(\ZZ,+)$, $(\ZZ/n,+)$, $(\CC^*,\times)$, the symmetric group $S_n$; $GL_n(\RR)$, etc.; **products** $G\times H$, $\ZZ^n$, …
- Like sets, groups can be finite ($\ZZ/n$, $S_n$, …), countable ($\ZZ$, $\ZZ^n$, $\QQ$, …) or uncountable ($\RR$, …).
- $H\subset G$ is a **subgroup** if $e\in H$; $a\in H\Rightarrow a^{-1}\in H$; $a,b\in H\Rightarrow ab\in H$. $|H|$ divides $|G|$.
  - $H,H'$ subgroups of $G$ $\Rightarrow$ $H\cap H'$ is a subgroup of $G$.
  - All subgroups of $(\ZZ,+)$ are $\ZZ n=\{mn\mid m\in\ZZ\}$ for some $n\ge 0$.
- A **homomorphism** $\varphi:G\to H$ is a map such that $\varphi(ab)=\varphi(a)\varphi(b)$ for all $a,b\in G$ ($\Rightarrow \varphi(a^{-1})=\varphi(a)^{-1}$).
  - **Isomorphism** = bijective homomorphism; **automorphism** = isomorphism $G\xrightarrow{\sim}G$. $(\Aut(G),\circ)$ is a group.
- The **kernel** of $\varphi:G\to H$: $\ker(\varphi)=\{g\in G\mid \varphi(g)=e_H\}$, a subgroup of $G$. $\varphi$ injective $\Leftrightarrow$ $\ker\varphi=\{e\}$.
  - The **image** of $\varphi$: $\operatorname{Im}(\varphi)=\{\varphi(g)\mid g\in G\}\subset H$, a subgroup of $H$. $\varphi$ surjective $\Leftrightarrow$ $\operatorname{Im}\varphi=H$.
- Given $a\in G$, $\varphi:\ZZ\to G$, $k\mapsto a^k$, is a homomorphism with $\operatorname{Im}(\varphi)=\langle a\rangle$, the subgroup generated by $a$.
  - $\ker(\varphi)=\ZZ n$, where $n$ = **order** of $a$ = $\min\{n>0 \text{ such that } a^n=e\}$.
  - Hence the **cyclic** group $\langle a\rangle$ is $\simeq\ZZ/n$ if $a$ has order $n$, and $\simeq\ZZ$ if $a$ has infinite order.
  - ($a_1,\dots,a_k$ **generate** $G$ if every element of $G$ is a product of the $a_i$ and their inverses.)
- A subgroup $H\subset G$ determines an **equivalence relation** (axioms: $a\sim a$; $a\sim b\Leftrightarrow b\sim a$; $a\sim b$ and $b\sim c$ $\Rightarrow a\sim c$): $a\sim b$ iff $a^{-1}b\in H$, whose equivalence classes are the (left) **cosets** $aH=\{ah\mid h\in H\}$.
  - The **quotient set**: $G/H=\{\text{cosets } aH\}$. The **index** of $H$: $(G:H)=|G/H|=\dfrac{|G|}{|H|}$ if finite.
- If $G$ is finite: $H\subset G$ subgroup $\Rightarrow$ $|H|$ divides $|G|$; $a\in G\Rightarrow \operatorname{ord}(a)\mid |G|$; $|G|=p$ prime $\Rightarrow G\simeq\ZZ/p$.
- A subgroup $H\subset G$ is **normal** $\Leftrightarrow$ $aH=Ha$ for all $a\in G$ (left cosets = right cosets) $\Leftrightarrow$ $aHa^{-1}=H$ for all $a\in G$ (conjugate subgroups).
- The operation $(aH)\cdot(bH)=abH$ makes $G/H$ a *group* iff $H$ is a *normal subgroup*.
- For every homomorphism $\varphi:G\to H$, $\ker(\varphi)=K$ is a normal subgroup of $G$, and $\operatorname{Im}(\varphi)\simeq G/K$.
  - If $\varphi$ is surjective, we have an **exact sequence** $\{1\}\to K\xrightarrow{\ i\ }G\xrightarrow{\ \varphi\ }H\to\{1\}$ ($i$ injective, $\varphi$ surjective, $\operatorname{Im}(i)=\ker(\varphi)$).
  - *Examples:* $\{1\}\to H\hookrightarrow G\to G/H\to\{1\}$ ($H$ normal); $0\to\ZZ/m\to\ZZ/mn\to\ZZ/n\to 0$ ($\ZZ/mn\simeq\ZZ/m\times\ZZ/n$ iff $\gcd(m,n)=1$); $\{e\}\to\ZZ/3\to S_3\xrightarrow{\text{sign}}\ZZ/2\to\{e\}$.
  - A homomorphism $G\xrightarrow{\varphi}H$ factors through $G\to G/K\xrightarrow{\bar\varphi}H$ iff $K\subset\ker\varphi$.
- $G$ is **simple** if its only normal subgroups are $\{e\}$ and itself. *Examples:* $\ZZ/p$, $p$ prime; $A_n$, $n\ge 5$.
- *Example:* the **center** $Z(G)=\{z\in G\mid zg=gz\ \forall g\in G\}$ is a normal subgroup (abelian: $zz'=z'z$).
:::

- *Example:* the **commutator subgroup** $[G,G]=\{\prod_{\text{finite}}[a_i,b_i]\}$, where $[a,b]=aba^{-1}b^{-1}$, is normal, and $G/[G,G]=\operatorname{Ab}(G)$ (**abelianization**) is the largest abelian quotient of $G$: every $G\xrightarrow{\varphi}H$ with $H$ abelian factors as $G\to\operatorname{Ab}(G)\xrightarrow{\bar\varphi}H$.
- (Artin 14.7) Every finitely generated abelian group is $\simeq\ZZ^r\times\ZZ/n_1\times\dots\times\ZZ/n_k$ for some $r,n_1,\dots,n_k$. (Recall $\ZZ/m\times\ZZ/n\simeq\ZZ/mn$ if $\gcd(m,n)=1$.)
- (Artin 6.7–6.12) **Group actions**: a $G$-action on a set $S$ is $G\times S\to S$, $(g,s)\mapsto g\cdot s$, such that $e\cdot s=s$ for all $s\in S$ and $(gh)\cdot s=g\cdot(h\cdot s)$ ($\Leftrightarrow$ a homomorphism $\rho:G\to\operatorname{Perm}(S)$).
  - **Faithful** if $\rho$ is injective; **transitive** if for all $s,t\in S$ there exists $g$ such that $gs=t$ (i.e. one orbit).
- The **orbit** of $s\in S$ is $O_s=G\cdot s=\{g\cdot s\mid g\in G\}$. These form a partition $S=\bigsqcup$ orbits.
  - The **stabilizer** of $s$ is $\operatorname{Stab}(s)=\{g\in G\mid g\cdot s=s\}$, a subgroup of $G$.
  - Elements in the same orbit have conjugate stabilizer subgroups: $\operatorname{Stab}(g\cdot s)=g\operatorname{Stab}(s)g^{-1}\subset G$.
  - Orbit-stabilizer: if $H=\operatorname{Stab}(s)$, then $G/H\simeq O_s$, $gH\mapsto g\cdot s$, is a bijection; in particular $|O_s|\cdot|\operatorname{Stab}s|=|G|$.
- **Burnside’s lemma** ($G$, $S$ finite): let $S^g=\{s\in S\mid gs=s\}$ be the fixed points of $g\in G$; then $\#\text{orbits}=\dfrac{1}{|G|}\sum_{g\in G}|S^g|$.
- (Artin ch. 7) $G$ acts on itself by left multiplication. This gives $G\hookrightarrow\operatorname{Perm}(G)$, hence every finite group $G$ is isomorphic to a subgroup of $S_n$, $n=|G|$.
- $G$ acts on itself by **conjugation**: $g$ acts by $h\mapsto ghg^{-1}$.
  - Orbits = conjugacy classes; $\operatorname{Stab}(h)=\{g\in G\mid gh=hg\}=Z(h)$, the **centralizer** of $h$.
  - Hence $|G|=\sum_{C\subset G\text{ conj. classes}}|C|$, where for each conjugacy class $|C_h|=\dfrac{|G|}{|Z(h)|}$ divides $|G|$ (the **class equation** of $G$).
- For $p$-groups ($|G|=p^k$), the class equation $\Rightarrow$ $|Z(G)|\ge p$ (the number of conjugacy classes of size $1$). Hence:
  - $|G|=p^2$, $p$ prime $\Rightarrow$ $G$ is abelian ($\simeq\ZZ/p\times\ZZ/p$ or $\ZZ/p^2$).
  - 5 isomorphism classes of groups of order 8: $\ZZ/8$, $\ZZ/4\times\ZZ/2$, $(\ZZ/2)^3$, $D_4$, the quaternion group.
- $G\subset SO(3)$ finite subgroup $\Rightarrow$ by considering the action of $G$ on its poles (unit vectors along rotation axes), $G\simeq$ one of $\ZZ/n$, $D_n$ (regular $n$-gon), $A_4$ (tetrahedron), $S_4$ (cube), $A_5$ (dodecahedron/icosahedron).
- The **symmetric group** $S_n$ is generated by transpositions $(ij)$, in fact by $s_i=(i\ i{+}1)$.
- For all $\sigma\in S_n$ there is a unique decomposition of $\sigma$ as a product of disjoint cycles $(a_1\dots a_k)$.
  - $\sigma,\tau\in S_n$ are in the same conjugacy class iff they have the same cycle lengths.
- The **alternating group** $A_n=\ker(\text{sign}:S_n\to\ZZ/2)=\{\text{products of an even number of transpositions}\}$.
  - A conjugacy class in $S_n$ which consists of even permutations is either 1 or 2 conjugacy classes in $A_n$; it splits into 2 iff the centralizer $Z(\sigma)\subset A_n$ ($\Leftrightarrow$ the cycle lengths of $\sigma$ are all odd and distinct).
- $A_n$ is simple for $n\ge 5$ ($A_4$ isn’t: $\{\id,(ij)(kl)\}\simeq\ZZ/2\times\ZZ/2$ is normal in $A_4$ and $S_4$).

## Midterm review problems

This is a fairly arbitrary selection of problems from the textbook that may be good for checking your understanding of the concepts. I also recommend going over the homework assignments (not worrying about any problems that were particularly tricky or lengthy).

Problem numbers in Axler refer to the 4th edition.

### Midterm 1

- **Axler chapter 2:** 2A.12; 2B.8; 2C.8, 2C.15, 2C.19
- **Axler chapter 3:** 3B.3, 3B.5, 3B.19, 3B.22, 3B.24, 3B.25, 3B.27; 3C.2, 3C.7; 3D.5, 3D.10, 3D.17; 3E.1, 3E.15; 3F.20, 3F.22, 3F.24, 3F.25
  (Note: Axler uses the notation $\mathbb F$ for the field; “null” for “Ker” and “range” for “Im”; $\mathcal L(V,W)$ for $\Hom(V,W)$; $V'$ for $V^*$, $U^0$ for $\operatorname{Ann}(U)$.)
- **Axler chapter 5:** 5A.7, 5A.13, 5A.24, 5A.33; 5B.20; 5C.10; 5D.3, 5D.4; 5E.3
- **Artin chapter 2:** 4.5, 4.7, 4.9, 4.10; 5.1, 5.2; 6.3, 6.10; 8.6, 8.7, 8.9, 8.10; 10.2; 11.1, 11.4; 12.1, 12.2; M.2, M.9, M.10
  (A couple of these are a bit more involved than what is intended for problems on the midterm.)
- **Artin chapter 3:** 1.9; 3.1; 4.5; 5.3.
- **Artin chapter 4:** 4.2, 4.6.

### Midterm 2

(Problems marked \* are a bit more involved than what is intended for the midterm.)

- **Axler chapter 6:** 6A.2; 6B.6\*, 6B.15, 6B.21\*; 6C.7, 6C.10\*, 6C.12
  (Note for 6C: Axler denotes by $P_U$ the orthogonal projection onto $U\subset V$, see 6.55)
- **Axler chapter 7:** 7A.4, 7A.5, 7A.6, 7A.23, 7A.27 (assume self-adjoint rather than normal); 7B.10, 7B.14, 7B.21, 7B.22, 7B.23\*; 7C.19; 7D.8
- **Axler chapter 8:** 8A.2, 8A.22; 8B.2, 8B.9; 8C.4, 8C.7; 8D.1, 8D.2
- **Artin chapter 4:** 4.2, 4.6; 6.4, 6.8; 7.3, 7.6, 7.7; M.2\*, M.7\*, M.10\*
- **Artin chapter 5:** 2.3\*, M.3, M.7\*
- **Artin chapter 6:** 4.2\*, 4.3; 7.1, 7.6, 7.10, 7.11\*; 8.4; 9.2, 9.4; 10.2, 10.3\*; 11.1, 11.3, 11.5, 11.7\*; M.3, M.4\*
- **Artin chapter 7:** 1.2; 2.2, 2.3\*, 2.7, 2.13\*, 2.17\*; 3.2, 3.3; 4.2, 4.9\*; 5.2, 5.3, 5.7, 5.12; M.6, M.7.
- **Artin chapter 8:** 2.2; 4.2, 4.3, 4.10, 4.12; 5.2, 5.3, 5.4\*; 6.2, 6.19; M.4\*, M.14\*
- **Artin chapter 14:** 7.2, 7.5, 7.9\*
