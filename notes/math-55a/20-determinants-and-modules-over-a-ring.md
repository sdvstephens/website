---
course: math-55a
chapter: 5
section: 20
title: Determinants, and Modules over a Ring
date: 2025-10-20
lecturer: Denis Auroux
source-pages: 1-5
---

## Recall

- $V^{\otimes d}\ni$ pure tensors $v_1\otimes\cdots\otimes v_d$, and
  $$
  \Hom(V^{\otimes d},W)\cong\{\text{multilinear maps }V\times\cdots\times V\to W\},\qquad \varphi(v_1\otimes\cdots\otimes v_d)=m(v_1,\dots,v_d).
  $$
- $\operatorname{Sym}^dV$, $\Lambda^dV$: the same for **symmetric**, resp. **alternating**, multilinear maps. Skew-symmetrization:
  $$
  v_1\wedge\cdots\wedge v_d:=\sum_{\sigma\in S_d}(-1)^\sigma\,v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(d)}.
  $$
  This is zero whenever $v_i=v_j$ for some $i\neq j$, and so, by multilinearity, whenever $v_1,\dots,v_d$ are linearly dependent. Thus $\Lambda^d(V)=0$ whenever $d>\dim V$!

## Volume and determinant

If $\dim V=n$, then $\dim\Lambda^nV=1$ (if $e_1,\dots,e_n$ is a basis of $V$, it is spanned by $e_1\wedge\cdots\wedge e_n\in\Lambda^nV$).

A *choice* of isomorphism $\Lambda^nV\xrightarrow{\sim}k$ is determined by a **volume form** $\mathrm{vol}\in\Lambda^nV^*$, $\mathrm{vol}\neq0$, i.e. a nondegenerate alternating multilinear map
$$
\begin{aligned}
V\times\cdots\times V&\to k\\
v_1,\dots,v_n&\mapsto\mathrm{vol}(v_1,\dots,v_n).
\end{aligned}
$$
(Think of it as: the signed volume of the parallelepiped with edge vectors $v_1,\dots,v_n$ is naturally $v_1\wedge\cdots\wedge v_n\in\Lambda^nV$, which becomes a scalar given $\Lambda^nV\xrightarrow{\sim}k$.)

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

Recall that the **determinant** of a matrix is
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

## Linear algebra over rings: modules

(Artin §14.1–14.2.)

Let $R$ be a commutative ring (with $1\neq0$), i.e. relax the field axioms to not require multiplicative inverses. Main examples: $R=\ZZ$, $\ZZ/n$, $k[x]$, $k[x_1,\dots,x_n]$.

:::definition Module
A **module** $M$ over a ring $R$ is a set with two operations:

- $+:M\times M\to M$, addition, such that $(M,+)$ is an abelian group;
- $\times:R\times M\to M$, scalar multiplication, such that $(ab)v=a(bv)$, $a(v+w)=av+aw$, $(a+b)v=av+bv$, $0v=0$, $1v=v$.

:::

:::example
- $R^n=\{(x_1,\dots,x_n)\mid x_i\in R\}$ with componentwise operations is the **free module** of rank $n$ over $R$.
- Any abelian group is a $\ZZ$-module ($n\cdot g=\underbrace{g+\cdots+g}_{n\text{ times}}$). Check the details.

:::

:::definition Spanning sets, independence, bases
- $\Gamma\subset M$ **spans** $M$ (or is a **generating set**) if every element of $M$ is a (finite) linear combination $\sum a_iv_i$, $v_i\in\Gamma$, $a_i\in R$. Equivalently: the map $\varphi:R^\Gamma\to M$, $(a_i)\mapsto\sum a_iv_i$, is surjective. $M$ is **finitely generated** if it has a finite spanning set.
- The elements of $\Gamma\subset M$ are **(linearly) independent** if $\varphi:R^\Gamma\to M$ is injective, i.e. $\sum a_iv_i=0$, $v_i\in\Gamma$, $a_i\in R$ implies $a_i=0$ for all $i$.
- The elements of $\Gamma\subset M$ form a **basis** if $\varphi:R^\Gamma\to M$ is an isomorphism. In this case, say $M$ is a **free module**.

:::

General fact about modules: *nothing is true!*

- A basis need not exist!

  Example: $M=\ZZ/n$ as a $\ZZ$-module: $nx=0$ for all $x\in M$, so $\varphi:\ZZ^\Gamma\to M$ can’t be injective!
- Even if $M$ is free (admits a basis):
  - a linearly independent set may not be a subset of a basis.

    Example: $M=\ZZ$ as a $\ZZ$-module: there is no basis containing $2$.
  - a spanning set need not contain a subset which is a basis.

    Example: $M=\ZZ$ as a $\ZZ$-module: $\{4,5\}$ spans $\ZZ$ (since $n=n\cdot5-n\cdot4$), but $4,5$ aren’t independent ($5\cdot4-4\cdot5=0$), and neither subset $\{4\}$ nor $\{5\}$ spans all of $\ZZ$.
- A submodule of a finitely generated module need not be finitely generated.

  Example: $R=k[x_1,x_2,\dots]$, polynomials in infinitely many variables. $M=R$ as an $R$-module is generated by the element $1$. $M'=\{\text{polynomials whose constant term is zero}\}\subset M$ is a submodule, but not finitely generated (any finite subset only involves finitely many $x_i$’s, and can’t span the other $x_k$’s).

  (By contrast, this holds for modules over **Noetherian rings**, including $\ZZ$, $k[x_1,\dots,x_n]$ and many others.)

:::definition Module homomorphisms
For $M,N$ modules over $R$, a **module homomorphism** $\varphi\in\Hom_R(M,N)$ is a map $\varphi:M\to N$ such that $\varphi(v+w)=\varphi(v)+\varphi(w)$ and $\varphi(av)=a\varphi(v)$.
:::

Observe: $\Hom_R(M,N)$ is itself an $R$-module: $(\varphi+\psi)(v)=\varphi(v)+\psi(v)$, $(a\varphi)(v)=a\varphi(v)$.

For free modules, things work as expected: $\Hom_R(R^m,R^n)\cong R^{m\times n}$ ($\varphi$ is determined by the images $\varphi(e_i)\in R^n$ of the basis vectors of $R^m$). But we can have nonzero modules $M,N$ such that $\Hom_R(M,N)=0$!

:::example
$R=k[x]$, $M=k$ with multiplication $(a_0+a_1x+\cdots)\cdot b=a_0b$. Then $\Hom_R(k,k[x])=0$, because $1\in k$ satisfies $x\cdot1=0$, so it must map to $\varphi(1)=p(x)\in k[x]$ such that $xp(x)=0$, which implies $p=0$.
:::

:::remark
- $R$ is a module over itself (the free module of rank 1). A submodule of $R$ is called an **ideal**: this is a subset $N\subset R$ such that
  - $N$ is an abelian subgroup of $(R,+)$;
  - $R\cdot N\subseteq N$: multiplication by *any* element of $R$ takes $N$ to itself.

  Example: the ideals in $\ZZ$ are $n\ZZ$, and the ideals in $k[x]$ are $p(x)k[x]$, i.e. generated by a single element. This is very special. ($\ZZ$ and $k[x]$ are “principal ideal domains”. This has to do with Euclidean division algorithms: $\operatorname{span}(p,q)=\operatorname{span}(\gcd(p,q))$.)
- The quotient of an $R$-module by a submodule is an $R$-module.

  Example: $\ZZ/n\ZZ=\ZZ/n$ as a $\ZZ$-module; $k[x]/xk[x]=k$ as a $k[x]$-module (the example above).

  (The quotient of $R$ itself by a submodule, i.e. an ideal, is in fact not just an $R$-module but also a ring in its own right.)

:::

## Finitely generated abelian groups

The study of modules is a vast subject, which we won’t study further, with one exception: we’re returning to group theory, but we start with a short account of the classification of **finitely generated abelian groups** ($=\ZZ$-modules).

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L21}}
:::theorem
Any finitely generated abelian group is isomorphic to a product of cyclic groups
$$
G\cong(\ZZ/n_1\times\cdots\times\ZZ/n_k)\times\ZZ^\ell.
$$
:::

(And using $\ZZ/mn\cong\ZZ/m\times\ZZ/n$ iff $\gcd(m,n)=1$, we can rearrange the finite factors, e.g. to arrange that all $n_i$ are powers of primes.)

The proof involves the study of “linear algebra over $\ZZ$”! One of the ingredients is:

:::proposition
If $M$ is a finitely generated $\ZZ$-module, then there exist $m,n$ and $T\in\Hom(\ZZ^m,\ZZ^n)$ such that $M\cong\ZZ^n/\operatorname{Im}T$. (Equivalently: there is an exact sequence $\ZZ^m\xrightarrow{\ T\ }\ZZ^n\to M\to0$.)
:::

(The quotient by a $\ZZ$-submodule is the same as the quotient of an abelian group by a subgroup.)

This relies on:

:::lemma
Any submodule ($=$ subgroup) of $\ZZ^n$ is finitely generated (in fact, free of rank $\le n$).
:::

:::proof
By induction on $n$. True for $n=1$: the subgroups of $(\ZZ,+)$ are $0$ and $\ZZ a$, $a\in\ZZ-\{0\}$.

Assume the result holds for $\ZZ^{n-1}$, and consider a submodule $M\subset\ZZ^n$. The map
$$
\begin{aligned}
\ZZ^n&\to\ZZ^{n-1}\\
(a_1,\dots,a_n)&\mapsto(a_2,\dots,a_n)
\end{aligned}
$$
restricts to a homomorphism $\pi:M\to\ZZ^{n-1}$, where

- $\operatorname{Im}\pi$ is a submodule of $\ZZ^{n-1}$, hence finitely generated (free) by induction;
- $\ker\pi=M\cap(\ZZ\times0\times\cdots\times0)$ is a subgroup of $\ZZ$, hence free (of rank 0 or 1).

And if $\ker(\pi)$ and $\operatorname{Im}(\pi)$ are finitely generated (resp. free), then so is $M$! The proof is just as in midterm problem 4: let $e_1,\dots,e_k$ be generators (resp. a basis) of $\ker\pi$, and $g_1=\pi(f_1),\dots,g_m=\pi(f_m)$ generators of $\operatorname{Im}\pi$. Then for all $x\in M$ there exist $a_i\in\ZZ$ such that $\pi(x)=\sum a_ig_i$, so $\pi\big(x-\sum a_if_i\big)=0$, so
$$
x-\sum a_if_i\in\ker\pi=\operatorname{span}(e_1,\dots,e_k),
$$
hence $x\in\operatorname{span}(e_1,\dots,e_k,f_1,\dots,f_m)$: the $(e_i,f_j)$ generate. (Basis: left as an exercise; we won’t need it anyway.)
:::

:::proof Proof of the proposition
If $M$ is finitely generated, with generators $(e_1,\dots,e_n)$, then
$$
\begin{aligned}
\varphi:\ZZ^n&\to M\\
(a_1,\dots,a_n)&\mapsto\sum a_ie_i
\end{aligned}
$$
is surjective, and $\ker(\varphi)=N\subset\ZZ^n$ is a subgroup/submodule of $\ZZ^n$, hence finitely generated by the lemma. Let $f_1,\dots,f_m$ be generators of $\ker\varphi$; then
$$
\ker\varphi=\operatorname{Im}\Big(T:\ZZ^m\to\ZZ^n,\ (b_1,\dots,b_m)\mapsto\sum b_if_i\Big),
$$
and now we have an exact sequence $\ZZ^m\xrightarrow{\ T\ }\ZZ^n\xrightarrow{\ \varphi\ }M\to0$, with $\ker\varphi=\operatorname{Im}T$, inducing an isomorphism $M\cong\ZZ^n/\operatorname{Im}T$.
:::
:::
