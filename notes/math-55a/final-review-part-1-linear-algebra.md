---
course: math-55a
chapter: 10
section: R1
title: Final Review, Part 1: Linear Algebra
lecturer: Denis Auroux
source-pages: 1-4
---

- A **field** $(k,+,\times)$ is a set with two operations: $(k,+)$ is an abelian group with identity $0$; $(k^*=k-\{0\},\times)$ is an abelian group with identity $1$; distributive law $a(b+c)=ab+ac$.
  - (Lec. 6) *Examples:* $\QQ$, $\RR$, $\CC$ (characteristic $0$: $\underbrace{1+\dots+1}_{n}=n\cdot 1\neq 0$); $\FF_p=\ZZ/p$, $p$ prime (characteristic $p$).
- (Axler ch. 1) A **vector space** over $k$ is a set $V$ with addition $+:V\times V\to V$ ($(V,+)$ an abelian group, $0\in V$) and scalar multiplication $k\times V\to V$, associative and distributive.
  - *Examples:* $k^n$, $k[x]$, …
  - **Subspace**: $W\subset V$ closed under $+$ and $\times$.
- $\operatorname{span}(v_1,\dots,v_n)=\{\sum a_iv_i\mid a_i\in k\}\subset V$; say $(v_i)$ **span** $V$ if $\operatorname{span}(v_i)=V$.
  - (Axler ch. 2) Say $(v_i)$ are **linearly independent** if $a_1v_1+\dots+a_nv_n=0\Rightarrow a_i=0$ for all $i$.
  - (Lec. 7) **Basis** = linearly independent vectors which span $V$: then $k^n\to V$, $(a_i)\mapsto\sum a_iv_i$, is an isomorphism.
- All bases of $V$ have the same cardinality $=\dim V$.
  - Any linearly independent set can be completed to a basis.
- $\Hom(V,W)$ = linear maps $\varphi:V\to W$: $\varphi(u+v)=\varphi(u)+\varphi(v)$, $\varphi(\lambda u)=\lambda\varphi(u)$. This is a vector space.
- (Axler ch. 3) Given bases $(v_j)_{j=1..n}$ of $V$ and $(w_i)_{i=1..m}$ of $W$, represent $v=\sum x_jv_j\in V$ by the column $X=\begin{pmatrix}x_1\\ \vdots\\ x_n\end{pmatrix}$, and $\varphi\in\Hom(V,W)$ by the matrix $A=(a_{ij})$ whose columns represent $\varphi(v_j)$ in the basis $(w_i)$: $\varphi(v_j)=\sum_i a_{ij}w_i$.
  - (Lec. 8) Then $\varphi(v)$ is represented in the basis $(w_i)$ by the column vector $Y=AX$:
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
- (Lec. 9) **Dual**: $V^*=\Hom(V,k)$.
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
- (Lec. 10) If $V=\bigoplus V_i$ with $V_i$ invariant for $\varphi$, then there is a basis where $\mathcal M(\varphi)$ is block diagonal: $\left(\begin{array}{c|c}\varphi_{|V_1} & 0\\ \hline 0 & \varphi_{|V_2}\end{array}\right)$.
  - A basis of **eigenvectors** $v_i\in V$, $v_i\neq 0$, $\varphi(v_i)=\lambda_iv_i$ $\Leftrightarrow$ $\varphi$ **diagonalizable**: $\mathcal M(\varphi,(v_i))=\begin{pmatrix}\lambda_1 & & 0\\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$.
- Eigenvectors of $\varphi$ for distinct eigenvalues are linearly independent.
- (Lec. 11) If $k$ is algebraically closed (e.g. $\CC$) then any linear operator $\varphi\in\Hom(V,V)$ has an eigenvector.
  - Corollary: there exists a basis in which $\mathcal M(\varphi)$ is upper triangular, $\begin{pmatrix}* & & \ast\\ & \ddots & \\ 0 & & *\end{pmatrix}$.
  - $\lambda\in k$ is an eigenvalue of $\varphi$ $\Leftrightarrow$ $(\varphi-\lambda)$ is not invertible $\Leftrightarrow$ $\lambda$ appears on the diagonal in a triangular matrix representing $\varphi$.
- (Axler ch. 8) The **generalized kernel** $\operatorname{gker}(\varphi)=\ker(\varphi^N)$ for all $N$ large (e.g. $N\ge\dim V$).
  - $\varphi$ is **nilpotent** if $\varphi^N=0$; $\ker(\varphi)\subset\ker(\varphi^2)\subset\cdots$. There exists a basis such that $\mathcal M(\varphi)$ is block diagonal with blocks $\begin{pmatrix}0 & 1 & & 0\\ & \ddots & \ddots & \\ & & \ddots & 1\\ 0 & & & 0\end{pmatrix}$.
- The **generalized eigenspaces** $V_\lambda=\operatorname{gker}(\varphi-\lambda)=\ker(\varphi-\lambda)^N$ are linearly independent invariant subspaces.
- If $k$ is algebraically closed then $V$ = the direct sum $\bigoplus V_\lambda$ of the generalized eigenspaces of $\varphi$.
  - (Lec. 12) This gives the **Jordan normal form**: $\mathcal M(\varphi)$ is block diagonal with blocks $\begin{pmatrix}\lambda & 1 & & 0\\ & \ddots & \ddots & \\ & & \ddots & 1\\ 0 & & & \lambda\end{pmatrix}$ ($\varphi$ diagonalizable $\Leftrightarrow$ all blocks have size $1$).
- **Characteristic polynomial** of $\varphi$: $\chi_\varphi(x)=\det(xI-\varphi)=\prod_{\lambda_i}(x-\lambda_i)^{n_i}$, $n_i=\operatorname{mult}(\lambda_i)=\dim V_{\lambda_i}$.
  - **Minimal polynomial**: $\mu_\varphi(x)=\prod(x-\lambda_i)^{m_i}$, $m_i=\min\{m\mid V_{\lambda_i}=\ker(\varphi-\lambda_i)^m\}$ = size of the largest Jordan block in $V_{\lambda_i}$.
  - $p(\varphi)=0$ iff $\mu_\varphi\mid p(x)$. In particular $\mu_\varphi\mid\chi_\varphi$. $\varphi$ diagonalizable $\Leftrightarrow$ $m_i=1$ for all $i$.
- Over $\RR$, $\varphi:V\to V$ need not have eigenvectors, but by considering $V_\CC=V\times V=\{v+iw\mid v,w\in V\}$ and $\varphi_\CC:V_\CC\to V_\CC$, $\varphi_\CC(v+iw)=\varphi(v)+i\varphi(w)$ $\Rightarrow$ any real operator has an invariant subspace of dimension $1$ (eigenvector!) or $2$.
- (Handout) **Categories** have objects, and morphisms $\Mor(A,B)$ for all $A,B\in\operatorname{ob}\mathcal C$, with operation = composition.
  - Axioms: for all $A\in\operatorname{ob}\mathcal C$ there exists $\id_A\in\Mor(A,A)$ with $f\circ\id_A=\id_B\circ f=f$; associativity $(f\circ g)\circ h=f\circ(g\circ h)$.
  - *Examples:* sets, groups, vector spaces over $k$.
- (Lec. 14) A **functor** $F:\mathcal C\to\mathcal D$ assigns
  - to each $X\in\operatorname{ob}\mathcal C$, $F(X)\in\operatorname{ob}\mathcal D$;
  - to each $f\in\Mor_{\mathcal C}(X,Y)$, $F(f)\in\Mor_{\mathcal D}(F(X),F(Y))$,

  such that $F(\id_X)=\id_{F(X)}$ and $F(g\circ f)=F(g)\circ F(f)$. (Contravariant functors = reverse direction of morphisms.)
- A **natural transformation** $t$ between functors $F,G:\mathcal C\to\mathcal D$ = for each $X\in\operatorname{ob}\mathcal C$, $t_X\in\Mor_{\mathcal D}(F(X),G(X))$ such that for all $X\xrightarrow{f}Y$,
  $$\begin{CD} F(X) @>{t_X}>> G(X)\\ @V{F(f)}VV @VV{G(f)}V\\ F(Y) @>{t_Y}>> G(Y)\end{CD}$$
  commutes.
- (Axler ch. 9A; Lec. 14) A **bilinear form** on $V$ is $b:V\times V\to k$, linear in each input: $b(u+v,w)=b(u,w)+b(v,w)$, $b(\lambda u,v)=\lambda b(u,v)$, etc.
  - $b$ is **symmetric** if $b(u,v)=b(v,u)$, **skew-symmetric** if $b(u,v)=-b(v,u)$.
- $B(V)=\{\text{bilinear } b:V\times V\to k\}\xrightarrow{\ \sim\ }\Hom(V,V^*)$ (isomorphism of vector spaces), $b\mapsto\varphi_b: v\mapsto\big(b(v,\cdot):V\to k\big)$.
  - $\operatorname{rank}(b)=\operatorname{rank}(\varphi_b)$; $b$ is **nondegenerate** if $\varphi_b:V\xrightarrow{\sim}V^*$ is an isomorphism.
- In a basis $(e_i)$ of $V$, $b$ is represented by a matrix $B=(b_{ij})=(b(e_i,e_j))$.
  - If $u=\sum x_ie_i$, $v=\sum y_ie_i$ are represented by column vectors $X,Y$, then $b(u,v)=X^TBY$.
- (Lec. 15) The **orthogonal** of $S\subset V$ for $b$ is $S^\perp=\{v\in V\mid b(v,w)=0\ \forall w\in S\}=\ker\big(V\to S^*,\ v\mapsto\varphi_b(v)_{|S}\big)$.
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
- (Lec. 16) $T:V\to V$ is **self-adjoint** if $T^*=T$.
  - (Lec. 17) $T$ is **orthogonal** (**unitary** over $\CC$) if $T^*=T^{-1}$, i.e. $\langle Tu,Tv\rangle=\langle u,v\rangle$ for all $u,v\in V$ ($\Leftrightarrow$ $T$ maps an orthonormal basis to an orthonormal basis).
- If $S\subset V$ is invariant under a self-adjoint/orthogonal/unitary operator then so is $S^\perp$.
  $\Rightarrow$ **Spectral theorem** (real and complex versions):
  - If $T:V\to V$ is self-adjoint then $T$ is diagonalizable, with real eigenvalues, and can be diagonalized in an orthonormal basis.
  - If $T:V\to V$ is orthogonal for a real inner product, then $V$ is a direct sum of orthogonal invariant subspaces of dimension $1$ or $2$, with $T$ acting by $\pm1$ on the 1-dimensional pieces and by rotations on the 2-dimensional pieces.
  - If $T:V\to V$ is unitary for a Hermitian inner product, then $T$ is diagonalizable in an orthonormal basis, with eigenvalues $|\lambda_i|=1$.
    More generally, if $T:V\to V$ (Hermitian) is **normal**, i.e. $TT^*=T^*T$, then $T$ is diagonalizable in an orthonormal basis.
- Besides inner products, one can also consider arbitrary nondegenerate symmetric bilinear forms (without assuming positivity); e.g. over $\RR$ (resp. $\CC$) there exists an orthogonal basis such that $b(e_i,e_j)=\begin{cases}\pm1 & i=j\\ 0 & i\neq j\end{cases}$ (resp. $b(e_i,e_j)=\delta_{ij}$); or skew-symmetric bilinear forms.
- (Handout; Lec. 18) **Tensor product**: $V\otimes W$ is a vector space, with a bilinear map $V\times W\to V\otimes W$, $(v,w)\mapsto v\otimes w$, such that bilinear maps $V\times W\xrightarrow{b}U$ correspond to linear maps $V\otimes W\xrightarrow{\varphi}U$ ($\varphi(v\otimes w)=b(v,w)$).
  - Elements of $V\otimes W$ are finite linear combinations $\sum v_i\otimes w_i$.
  - If $(e_i)$ is a basis of $V$ and $(f_j)$ a basis of $W$, then $(e_i\otimes f_j)$ is a basis of $V\otimes W$.
- $V^*\otimes W\simeq\Hom(V,W)$, by mapping $\ell\otimes w\in V^*\otimes W$ to $(v\mapsto\ell(v)w)\in\Hom(V,W)$.
- The trace $\operatorname{tr}(T:V\to V)=\sum\lambda_i\in k$ can be defined by $\Hom(V,V)\xrightarrow{\sim}V^*\otimes V\to k$, $\ell\otimes v\mapsto\ell(v)$.
- (Lec. 19) Multilinear maps $V_1\times\dots\times V_n\to U$ $\Leftrightarrow$ linear maps $V_1\otimes\dots\otimes V_n\to U$.
- $V^{\otimes n}=V\otimes\dots\otimes V$ contains subspaces
  - $\operatorname{Sym}^n(V)$ = symmetric tensors ($\leftrightarrow$ symmetric multilinear maps): $v_{\sigma(1)}\cdots v_{\sigma(n)}=v_1\cdots v_n$;
  - $\Lambda^n(V)$ = exterior powers: alternating tensors, $v_{\sigma(1)}\wedge\dots\wedge v_{\sigma(n)}=(-1)^\sigma v_1\wedge\dots\wedge v_n$.
- (Lec. 20) If $\dim V=n$ then $\Lambda^nV$ has dimension $1$; for $T:V\to V$, $\Lambda^nT:\Lambda^nV\to\Lambda^nV$ is multiplication by a scalar, the **determinant** $\det(T)\in k$.
- The theory of modules over a ring $(R,+,\times)$ (elements need not have multiplicative inverses) is more complicated than that of vector spaces.
  - Finitely generated modules need not have a basis; those that do are called **free**.
- $\ZZ$-modules $\Leftrightarrow$ abelian groups.
  - (Lec. 21; parts of Artin ch. 14) Every finitely generated $\ZZ$-module $M$ with generators $(e_1,\dots,e_n)$ is a quotient of $\ZZ^n$ ($\varphi:\ZZ^n\twoheadrightarrow M$, $(a_i)\mapsto\sum a_ie_i$), and $\ker(\varphi)\subset\ZZ^n$ is itself a free module, i.e. there exists $T:\ZZ^m\to\ZZ^n$ such that $M\simeq\ZZ^n/\operatorname{Im}T$.
  - $\to$ Via linear algebra over $\ZZ$, one finds: every finitely generated abelian group is $\simeq\ZZ^r\times\ZZ/n_1\times\dots\times\ZZ/n_k$ for some $r,n_1,\dots,n_k$.
