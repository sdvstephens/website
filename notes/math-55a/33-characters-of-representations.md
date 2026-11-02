---
course: math-55a
chapter: 9
section: 33
title: Characters of Representations
date: 2025-11-19
lecturer: Denis Auroux
source-pages: A33-1–A33-4
---

Last time we studied representations of $S_3$ via the eigenvalues of the actions of a transposition and a $3$-cycle. We’ll soon see that, for any group $G$, the eigenvalues of the actions of elements of $G$ go a long way towards classifying representations, but we need some way of organizing the information.

## Digression: symmetric polynomials

(This is all *motivation* for the study of characters.)

- **Observe:** an efficient way to store information about $n$ (complex) numbers, unordered and possibly with repetitions, is to specify the coefficients of the polynomial of which they are the roots, i.e. $\prod_{i=1}^n (x - \lambda_i)$. These coefficients are **symmetric polynomials** in $\lambda_1, \dots, \lambda_n$.
- $S_n$ acts on the space of polynomials $\CC[z_1,\dots,z_n]$ by permuting the variables.

:::definition
A **symmetric polynomial** is an $f \in \CC[z_1,\dots,z_n]$ that is a fixed point of the $S_n$-action: $\sigma(f) = f$ for all $\sigma \in S_n$.
:::

:::remark
Equality of polynomials means, as usual, equality of coefficients, which over a finite field is a stronger condition than having equality as functions on $k^n$. Of course over $\CC$ there is no difference.
:::

:::definition
The **elementary symmetric polynomials** are
$$\sigma_1(z_1,\dots,z_n) = \sum_{i=1}^n z_i, \qquad \sigma_2(z_1,\dots,z_n) = \sum_{1 \le i < j \le n} z_i z_j, \qquad \dots, \qquad \sigma_k = \sum_{1 \le i_1 < \dots < i_k \le n} z_{i_1} \cdots z_{i_k}, \qquad \dots, \qquad \sigma_n = \prod_{i=1}^n z_i.$$
:::

**Check:** the coefficient of $x^{n-k}$ in $\prod_{i=1}^n (x - z_i)$ is, up to the sign $(-1)^k$, $\sigma_k(z_1,\dots,z_n)$.

**Hence:** the fundamental theorem of algebra gives a bijection
$$\begin{aligned}
\{\text{unordered } n\text{-tuples of complex numbers, repetitions allowed}\} &\xrightarrow{\ \sim\ } \CC^n \ \ (\text{ordered tuples}) \\
[z_1,\dots,z_n] &\longmapsto (\sigma_1(z_i), \dots, \sigma_n(z_i)),
\end{aligned}$$
with inverse
$$(\sigma_1,\dots,\sigma_n) \longmapsto [\text{the roots of } x^n - \sigma_1 x^{n-1} + \dots + (-1)^n \sigma_n].$$
In other terms: $[z_1,\dots,z_n] \longleftrightarrow$ the coefficients of the polynomial $\prod (x - z_i)$.

:::theorem
The subring of symmetric polynomials in $\CC[z_1,\dots,z_n]$, i.e. $\CC[z_1,\dots,z_n]^{S_n}$, is isomorphic to the polynomial algebra in $n$ variables $\CC[\sigma_1,\dots,\sigma_n]$. I.e., every symmetric polynomial is uniquely a polynomial expression in the elementary symmetric polynomials.
:::

We won’t prove this, but to see why this works, look at the case $n = 2$. The vector space of symmetric polynomials has basis
$$\begin{aligned}
1 &= 1 & \qquad z_1^3 + z_2^3 &= \sigma_1^3 - 3z_1^2 z_2 - 3 z_1 z_2^2 = \sigma_1^3 - 3\sigma_1\sigma_2 \\
z_1 + z_2 &= \sigma_1 & z_1^2 z_2 + z_1 z_2^2 &= \sigma_1 \sigma_2 \\
z_1^2 + z_2^2 &= (z_1+z_2)^2 - 2z_1 z_2 = \sigma_1^2 - 2\sigma_2 & &\ \ \vdots \\
z_1 z_2 &= \sigma_2 & &
\end{aligned}$$

**Observe:** any symmetric polynomial in $2$ variables can be written as
$$\begin{aligned}
p(z_1,z_2) &= \sum a_k (z_1^k + z_2^k) + z_1 z_2\, q(z_1,z_2) \\
&= \sum a_k (z_1 + z_2)^k + z_1 z_2\, q'(z_1,z_2) \\
&= \sum a_k \sigma_1^k + \sigma_2 \cdot q'
\end{aligned}$$
and we work by induction on degree.

:::remark
The theorem can be understood in terms of the representation theory of $S_n$! Namely, the space of homogeneous degree $1$ polynomials is $W_1 = \operatorname{span}(z_1,\dots,z_n) \simeq \CC^n$, on which $S_n$ acts by the permutation representation $\cong V \oplus U$ (standard $\oplus$ trivial), and the invariant part is $W_1^{S_n} \simeq U$, the trivial summand. Now, the homogeneous degree $d$ polynomials are $W_d = \operatorname{Sym}^d(W_1)$, and the invariant part $W_d^{S_n}$ = the trivial summands in the decomposition of $W_d$ into irreducibles! (Unfortunately we haven’t studied representations of $S_n$ in enough depth to carry through with a proof along these lines.)
:::

Another family of symmetric polynomials are the **power sums**:
$$\tau_k(z_1,\dots,z_n) = \sum_{i=1}^n z_i^k. \qquad \tau_1 = \sigma_1, \quad \tau_2 = \sigma_1^2 - 2\sigma_2, \quad \dots$$
These make sense for all $k$, but in fact $\tau_1, \dots, \tau_n$ suffice:

:::theorem
$$\CC[z_1,\dots,z_n]^{S_n} \cong \CC[\tau_1,\dots,\tau_n].$$
:::

In particular, specifying an unordered tuple $\{z_1,\dots,z_n\}$ is equivalent to specifying $\sum z_i, \sum z_i^2, \dots, \sum z_i^n$.

## Back to representation theory: why we care about this

We’ve seen that, to understand a representation $V$ of $G$, we should look at the eigenvalues of $g: V \to V$ for each $g \in G$; but this is a lot of information. We’ve just said: to specify the eigenvalues $\lambda_i$ of $g: V \to V$, it is enough to specify the power sums $\sum \lambda_i^k$. But in fact $\sum \lambda_i^k = \Tr(g^k)$!

So it’s enough to describe just the sum of the eigenvalues $\sum \lambda_i = \Tr(g)$ for every $g \in G$: since $G$ is a group, the trace of $g^k$ is also part of this.

:::definition
The **character** $\chi_V$ of a representation $V$ is the function $\chi_V : G \to \CC$, $\chi_V(g) = \Tr(g)$.
:::

:::remark
For a $1$-dimensional representation of $G$, i.e. a homomorphism $G \to \CC^*$, the character is just the same thing, hence a (multiplicative) homomorphism. For a higher-dimensional representation, though, $\chi(g_1 g_2) \neq \chi(g_1)\chi(g_2)$.
:::

However, since trace is conjugation invariant, $\Tr(ghg^{-1}) = \Tr(h)$, so $\chi_V(g)$ only depends on the **conjugacy class** of $g$.

:::definition
A **class function** $f: G \to \CC$ is a function invariant under conjugation: $f(ghg^{-1}) = f(h)$.
:::

:::example
Given representations $V$ and $W$:
- $\chi_{V \oplus W}(g) = \chi_V(g) + \chi_W(g)$ (eigenvalues of $\left(\begin{array}{c|c} \varphi & 0 \\ \hline 0 & \psi \end{array}\right)$…).
- $\chi_{V \otimes W}(g) = \chi_V(g)\,\chi_W(g)$ (eigenvalues of $\varphi \otimes \psi: v_i \otimes w_j \mapsto \lambda_i \lambda'_j\, v_i \otimes w_j$, and $\sum_{i,j} \lambda_i \lambda'_j = (\sum \lambda_i)(\sum \lambda'_j)$).
- $\chi_{V^*}(g) = \overline{\chi_V(g)}$, since $g$ acts by ${}^t(g^{-1})$, and the eigenvalues are roots of unity, so $\lambda_i^{-1} = \bar\lambda_i$, hence $\sum \lambda_i^{-1} = \sum \bar\lambda_i$.
- $\chi_{\Lambda^2 V}(g) = \sum_{i<j} \lambda_i \lambda_j = \frac{1}{2}\left( \left(\sum \lambda_i\right)^2 - \sum \lambda_i^2 \right) = \frac12 \left( \chi_V(g)^2 - \chi_V(g^2) \right)$.
:::

:::example
If $G$ acts on a finite set $S$, then there is an associated **permutation representation** $V$ of dimension $|S|$, with basis $(e_s)_{s \in S}$, on which $G$ acts by permutation matrices: $g \cdot e_s = e_{g \cdot s}$. Then
$$\chi_V(g) = \Tr(g) = \#\{s \in S \mid g \cdot s = s\},$$
since the $1$’s on the diagonal of the matrix correspond to fixed points of $g$, and there are $0$’s otherwise.
:::

## Character tables

The **character table** of a group lists, for each irreducible representation of $G$, the values of its character on each conjugacy class of $G$.

:::example $G = S_3$
Columns are the conjugacy classes, rows the irreducible representations:

| | $e$ | $(12)$ | $(123)$ |
|---|:---:|:---:|:---:|
| $U$ | $1$ | $1$ | $1$ |
| $U'$ | $1$ | $-1$ | $1$ |
| $V$ | $2$ | $0$ | $-1$ |

The first column is $\chi_V(e) = \Tr(\id) = \dim V$. The row for $V$ comes *either* from the eigenvalues ($\pm 1$ for $(12)$, $e^{\pm 2\pi i/3}$ for $(123)$), *or* from the fact that $U \oplus V$ = the permutation representation, which takes the values $\#\text{fixed points} = (3, 1, 0)$; then subtract $\chi_U = (1,1,1)$.
:::

Now we have a faster way of decomposing $V \otimes V$ into irreducibles: $\chi_{V \otimes V}(g) = \chi_V(g)^2$, so $\chi_{V \otimes V}$ takes the values $(4, 0, 1)$. Since $\chi_U, \chi_{U'}, \chi_V$ are linearly independent and $\chi_{V \otimes V} = \chi_U + \chi_{U'} + \chi_V$, we get $V \otimes V \simeq U \oplus U' \oplus V$. (This is equivalent to counting eigenvalues as we did last time, but somewhat faster!)

:::outline Notes not reached in this lecture, covered at the start of {{LINK:L34}}
**Some magic with characters**

If $V$ is a representation of $G$, the **invariant part** is $V^G = \{v \in V \mid gv = v \ \forall g \in G\}$.

:::proposition
$\varphi = \dfrac{1}{|G|} \displaystyle\sum_{g \in G} g : V \to V$ is a projection onto $V^G \subset V$: $\im(\varphi) = V^G$ and $\varphi|_{V^G} = \id$.
:::

So:
$$\dim(V^G) = \Tr(\varphi) = \frac{1}{|G|} \sum_{g \in G} \chi_V(g).$$

If $V, W$ are representations of $G$, then
$$\Hom_G(V,W) = \Hom(V,W)^G = (V^* \otimes W)^G$$
(the $G$-action on $\Hom(V,W)$ is $g(\varphi) = g \varphi g^{-1}$), so
$$\dim \Hom_G(V,W) = \frac{1}{|G|} \sum_{g \in G} \chi_{V^* \otimes W}(g) = \frac{1}{|G|} \sum_g \overline{\chi_V(g)}\, \chi_W(g) \ \dots$$
but if $V$ and $W$ are irreducible, then by Schur’s lemma,
$$\dim \Hom_G(V,W) = \begin{cases} 1 & \text{if } V \simeq W, \\ 0 & \text{else.} \end{cases}$$

:::definition
Define a Hermitian inner product on the space of class functions $G \to \CC$ by
$$H(\alpha, \beta) = \frac{1}{|G|} \sum_{g \in G} \overline{\alpha(g)}\, \beta(g).$$
:::

For characters of representations, by the above,
$$\dim \Hom_G(V, W) = H(\chi_V, \chi_W).$$

:::theorem
The characters of irreducible representations of $G$ are orthonormal for $H$.
:::

This implies the characters of irreducible representations are linearly independent class functions!

:::corollary
The number of irreducible representations of $G$ is at most the number of conjugacy classes of $G$. (We’ll see later that they are in fact *equal*.)
:::

:::corollary
Every representation of $G$ is completely determined by its character: denoting the irreducible representations by $V_1, \dots, V_k$, any representation $W \simeq \bigoplus V_i^{\oplus a_i}$, where
$$a_i = \dim \Hom_G(V_i, W) = H(\chi_{V_i}, \chi_W).$$
:::

:::corollary
For any representation $W = \bigoplus V_i^{\oplus a_i}$, $H(\chi_W, \chi_W) = \sum a_i^2$, and $W$ is irreducible iff $H(\chi_W, \chi_W) = 1$.
:::

This is useful because, given a representation $W$, it gives information about the number of irreducible summands making up $W$. E.g.:

| $H(\chi_W,\chi_W)$ | $W$ is |
|:---:|---|
| $1$ | irreducible |
| $2$ | a direct sum of $2$ different irreducibles |
| $3$ | a direct sum of $3$ different irreducibles |
| $4$ | either a sum of $4$ different irreducibles, or twice the same one |
:::
