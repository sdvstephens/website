---
course: math-55a
chapter: 5
section: N27
title: Tensor products, trace, and symmetric tensors
source-pages: live 1
---

## $\Hom$ as a tensor product

$$\operatorname{Bil}(V\times W,\,U)\cong \Hom(V\otimes W,\,U), \qquad \Hom(V,W)\cong V^*\otimes W,$$

where the second isomorphism sends $\ell\otimes w\mapsto \ell(\cdot)\,w$.

In bases: take $\{e_i\}$ a basis of $V$, $\{e_i^*\}$ the dual basis of $V^*$, and $\{f_j\}$ a basis of $W$. Then
$$e_i^*\otimes f_j\ \longmapsto\ \varphi_{ij}\in\Hom(V,W),\qquad \varphi_{ij}:\ \begin{cases} e_i\mapsto f_j,\\ e_k\mapsto 0 & (k\neq i).\end{cases}$$

## Trace of a linear operator

The usual definition: the trace of a square matrix $A=(a_{ij})$ is
$$\operatorname{tr}(A)=\sum_i a_{ii},$$
and
$$\operatorname{tr}(AB)=\sum_i\Big(\sum_j a_{ij}b_{ji}\Big)=\operatorname{tr}(BA)$$
(read the lecture notes lol).

If $\mcM(T)$ is upper triangular with diagonal entries $\lambda_i$ (these are the eigenvalues), then
$$\operatorname{tr}(T)=\sum_i n_i\lambda_i,$$
where $n_i$ is the multiplicity of $\lambda_i$.

Basis-free: the trace is the composite
$$\Hom(V,V)\cong V^*\otimes V\longrightarrow k,$$
where the second map comes from the bilinear map
$$V^*\times V\to k,\qquad (\ell,v)\mapsto \ell(v).$$
Given a basis $e_i$ of $V$ and the dual basis $(e_i^*)$ of $V^*$, along $\Hom(V,V)\cong V^*\otimes V\to k$ we get
$$\varphi_{ij}:\ \begin{cases} e_i\mapsto e_j\\ e_k\mapsto 0\ (k\ne i)\end{cases}\ \longmapsto\ e_i^*\otimes e_j\ \longmapsto\ e_i^*(e_j)=\begin{cases}1 & i=j,\\ 0 & i\neq j.\end{cases}$$

## Multilinear maps

:::definition
A map $m: V_1\times\cdots\times V_k\to W$ is **multilinear** if it is linear in each variable separately.
:::

## Symmetric tensors

:::definition
$\eta\in V^{\otimes d}$ is **symmetric** if $\sigma(\eta)=\eta$ for all $\sigma\in S_d$.
:::

Let meow $=\eta$. Just do it:
$$\operatorname{Span}\big(\text{meow}-\sigma(\text{meow}) \;:\; \text{meow}\in V^{\otimes d},\ \sigma\in S_d\big).$$
Finally, this is MUCH BETTER.
