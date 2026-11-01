---
course: math-55a
chapter: 3
section: N22
title: Review Part 1: Linear Algebra
source-pages: 3-6
---

## Topics

- fields: $(K, +, \times)$
- vector spaces: $(V, +)$ and scalar multiplication $K \times V \to V$
- subspaces $W \subset V$
- span
- basis
- dim
- char

## The matrix of a linear map

:::example
Let $T : \RR^3 \to \RR^2$,
$$T(v) = \begin{bmatrix} v_1 + v_3 \\ 2v_2 - v_3 \end{bmatrix}.$$
Find its matrix and evaluate it on $v = \langle 2, 3, -1 \rangle$ and $w = \langle 5, 1, 2 \rangle$.

:::solution
Apply $T$ to $\begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$:
$$\begin{bmatrix} 0+1 \\ 0-1 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix}, \qquad \begin{bmatrix} 0+0 \\ 2-0 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix}, \qquad \begin{bmatrix} 1+0 \\ 0-0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}.$$
These are the columns (third, second, first) of the matrix:
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & -1 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} v_1 + 0v_2 + v_3 \\ 0v_1 + 2v_2 - v_3 \end{bmatrix} = \begin{bmatrix} v_1 + v_3 \\ 2v_2 - v_3 \end{bmatrix}.$$
Now let $v = \langle 2, 3, -1 \rangle$, $w = \langle 5, 1, 2 \rangle$:
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & -1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ -1 \end{bmatrix} = \begin{bmatrix} 2 + 0 - 1 \\ 2(3) + 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 7 \end{bmatrix}, \qquad T(v) = \langle 1, 7 \rangle,$$
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & -1 \end{bmatrix} \begin{bmatrix} 5 \\ 1 \\ 2 \end{bmatrix}, \qquad T(w) = \langle 7, 0 \rangle.$$
:::
:::

:::question
So if we have some tuple-like structure, say $(x_1, x_2, \dots, x_n)$, of length $n \in \RR, \CC, \QQ, \QQ^c$, etc., what does this imply?
:::
