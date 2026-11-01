---
course: math-55a
chapter: 2
section: 6
title: Rings, Fields, and Vector Spaces
date: 2025-09-15
lecturer: Denis Auroux
source-pages: A06 1-7
---

## Rings and fields

:::definition Ring
A (**commutative**) **ring** is a set $R$ with two operations $+, \times$ such that

1. $(R, +)$ is an abelian group with identity $0 \in R$;
2. $(R, \times)$ is a (commutative) semigroup with identity $1 \in R$, namely
   - $1a = a1 = a$ for all $a \in R$,
   - $a(bc) = (ab)c$ for all $a, b, c \in R$,
   - ($ab = ba$ for all $a, b \in R$, if commutative);
3. distributive law: $a(b + c) = ab + ac$ for all $a, b, c \in R$.
:::

:::definition Field
A **field** $K$ is a commutative ring such that for all $a \ne 0$ there exists $b = a^{-1}$ such that $ab = 1$, i.e. $(K \setminus \{0\}, \times)$ is an abelian *group* rather than a semigroup.
:::

:::remark
- The ring axioms imply $0a = a0 = 0$ for all $a$. ($a0 = a(0 + 0) = a0 + a0$, plus cancellation.)
- The trivial ring $R = \{0\}$ is the only case where $0 = 1$. By convention this is *not* a field.
- Most rings of interest to us are commutative. (Matrices are the main exception.)
- In a field, $ab = 0 \implies a = 0$ or $b = 0$. This is not necessarily true in a ring.
- Hence, in a field, we have the usual properties of cancellation (simplification) for both addition and multiplication.
:::

:::definition Ring / field homomorphism
A **ring/field homomorphism** is a map $\varphi : R \to S$ that respects both operations:

- $\varphi(a + b) = \varphi(a) + \varphi(b)$ (we’ve seen this implies $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$);
- $\varphi(ab) = \varphi(a)\varphi(b)$;
- $\varphi(1_R) = 1_S$ (this doesn’t follow from $\varphi(ab) = \varphi(a)\varphi(b)$, even for fields: consider $\varphi = 0$!).
:::

:::proposition
If $\varphi : R \to S$ is a field homomorphism, then $\varphi$ is injective.
:::

:::proof
If $a \ne 0$ then there exists $b$ such that $ab = 1_R$, so $\varphi(a)\varphi(b) = \varphi(ab) = 1_S \ne 0_S$, which implies $\varphi(a) \ne 0_S$. So $\ker(\varphi) = \{0\}$ (as an additive group homomorphism), hence $\varphi$ is injective.
:::

:::example
- $\ZZ$, $\ZZ/n$ are rings.
- $\QQ, \RR, \CC$ are fields. So is $\ZZ/p$ for $p$ prime!! This is denoted $\FF_p$ when viewed as a field.

Why $\ZZ/p$ is a field: if $k \ne 0$ in $(\ZZ/p, +)$, then its order is $p$ (it divides $p$ and is $\ne 1$), so $\{0, k, 2k, \dots, (p-1)k\} = \ZZ/p$. Hence there exists $\ell \in \{0, \dots, p-1\}$ such that $\ell k = 1 \bmod p$. This gives the inverse!
:::

### Polynomials and rational functions

:::definition Polynomial ring
Given a field $k$, the **ring of polynomials** in one formal variable $x$ is
$$k[x] := \{a_0 + a_1 x + \dots + a_n x^n \mid a_i \in k,\ n \in \NN\}.$$
:::

:::remark
$x$ is a **formal** variable, i.e. not an element of anything, though we can **evaluate** a polynomial at an element of $k$ or of any field containing $k$.
:::

:::definition Field of rational functions
$k[x]$ isn’t a field, but it can be turned into a field by considering fractions (just like the ring $\ZZ \rightsquigarrow$ the field $\QQ$): the **field of rational functions** is
$$k(x) = \Big\{ \frac{p}{q} \ \Big|\ p, q \in k[x],\ q \ne 0 \Big\} \Big/ \sim, \qquad \frac{p}{q} \sim \frac{p'}{q'} \text{ iff } pq' = qp'.$$
:::

(This generalizes to polynomials and rational functions in any number of variables.)

### Power series and Laurent series

:::definition Formal power series
The ring of **formal power series** in $x$ is
$$k[[x]] = \Big\{ \sum_{i=0}^\infty a_i x^i \ \Big|\ a_i \in k \Big\}.$$
(Add and multiply just like polynomials, term by term. Check that each coefficient in $\left(\sum a_i x^i\right)\left(\sum b_j x^j\right)$ is a finite expression.)
:::

:::lemma
$\sum a_i x^i$ has a multiplicative inverse in $k[[x]]$ iff $a_0 \ne 0$.
:::

:::proof
We want $\sum_{i \ge 0} b_i x^i$ such that $\left(\sum_{i \ge 0} a_i x^i\right)\left(\sum_{i \ge 0} b_i x^i\right) = 1$. This gives
$$\begin{aligned}
a_0 b_0 &= 1 \\
a_0 b_1 + a_1 b_0 &= 0 \\
a_0 b_2 + a_1 b_1 + a_2 b_0 &= 0 \\
&\ \ \vdots
\end{aligned}$$
If $a_0 = 0$, clearly there is no solution; if $a_0 \ne 0$, we can solve inductively: $b_0 = \frac{1}{a_0}$, $b_1 = -\frac{a_1 b_0}{a_0}$, … (each step is $b_i = -(\dots)/a_0$ ✓).
:::

Since every nonzero element of $k[[x]]$ is of the form
$$a_m x^m + a_{m+1} x^{m+1} + \dots = x^m \underbrace{(a_m + a_{m+1} x + \dots)}_{\text{invertible}},$$
where $a_m$ is the first nonzero coefficient, to get a field we just need to allow $x^{-m}$:

:::definition Laurent series
The field of **Laurent series** is
$$k((x)) = \Big\{ \sum_{i=m}^\infty a_i x^i \ \Big|\ m \in \ZZ,\ a_i \in k \Big\}.$$
:::

### Adjoining roots

Given a field $k$ and a polynomial $f \in k[x]$ (of degree $> 0$), we can evaluate $f(r)$, $r \in k$, and look for roots $r \in k$ such that $f(r) = 0$. If there are none in $k$, we can form a field $K \supset k$ in which $f$ has a root.

:::example
$k = \QQ$: $x^2 - 2$ has no roots, but we can form
$$\QQ(\sqrt 2) := \{a + b\sqrt 2 \mid a, b \in \QQ\},$$
which is a field: $\dfrac{1}{a + b\sqrt 2} = \dfrac{a - b\sqrt 2}{a^2 - 2b^2} \in \QQ(\sqrt 2)$.
:::

:::example
$k = \RR$, $x^2 + 1 \rightsquigarrow \RR(\sqrt{-1}) = \CC$, where $\sqrt{-1}$ is usually called $i$.
:::

On the other hand, over an **algebraically closed** field such as $\CC$, every nonconstant polynomial already has a root, and there are no further algebraic extensions.

### Characteristic

Given a field $k$, we always have a ring homomorphism
$$\varphi : \ZZ \to k, \qquad 1 \mapsto 1_k.$$
(This determines $\varphi$, since $1$ generates $\ZZ$ and $\varphi(a+b) = \varphi(a) + \varphi(b)$, $\varphi(ab) = \varphi(a)\varphi(b)$.)

Is this injective? For most fields we’ll consider (e.g. $\QQ, \RR, \CC, \RR(x), \RR((x)), \dots$), it is. If so, say $k$ has **characteristic zero**. Otherwise:

:::proposition
$\ker(\varphi : \ZZ \to k) = \ZZ p$ for some prime $p$.
:::

:::proof
$\ker(\varphi)$ is a subgroup of $\ZZ$, hence of the form $\ZZ n$. If $n$ is not prime, write $n = ab$ for $1 < a, b < n$. Then $\varphi(n) = \varphi(ab) = \varphi(a)\varphi(b) = 0 \in k$, but this implies $\varphi(a) = 0$ or $\varphi(b) = 0$ (if $\varphi(a) \ne 0$, multiply by $\varphi(a)^{-1}$ to get $\varphi(b) = 0$). Since by assumption $n$ is the smallest positive integer such that $\varphi(n) = 0$, this is a contradiction.
:::

:::definition Characteristic $p$
Say $k$ has **characteristic $p$** if $\ker(\varphi) = \ZZ p$. (This means $p \cdot 1_k = \underbrace{1 + \dots + 1}_{p \text{ times}} = 0$!)
:::

So far our only example of such a field is $\ZZ/p$, but there are more.

:::theorem
For all $n \ge 1$ and prime $p$, there exists a unique field with $p^n$ elements (up to isomorphism), and these are all the finite fields.
:::

(There are also infinite fields of characteristic $p$, for example $\ZZ/p((x))$!)

## Vector spaces

:::definition Vector space
Fix a field $k$. A **vector space** over $k$ is a set $V$ with two operations:

1. addition $+ : V \times V \to V$,
2. scalar multiplication $\times : k \times V \to V$,

such that

1. $(V, +)$ is an abelian group (denote by $0$ the identity element);
2. $1v = v$ for all $v \in V$;
3. $(ab)v = a(bv)$ for all $a, b \in k$, $v \in V$;
4. $(a + b)v = av + bv$ for all $a, b \in k$, $v \in V$;
5. $a(v + w) = av + aw$ for all $a \in k$, $v, w \in V$.

(2) and (3) are identity and associativity for $\times$; (4) and (5) are the distributive property.
:::

(Note: $0v = 0$ for all $v \in V$, using the distributive property.)

:::definition Subspace
A **subspace** of a vector space is a nonempty subset $W \subset V$ that is preserved by addition and scalar multiplication: $W + W \subset W$, $k \cdot W \subset W$ (in fact both are $= W$). The second condition, with $W$ nonempty, implies $0 \in W$.
:::

(So $W$ is also a vector space!)

:::example
- $k^n = \{(a_1, \dots, a_n) \mid a_i \in k\}$ with componentwise addition / scalar multiplication.
- $k^\infty = \{(a_i)_{i \in \NN} \mid a_i \in k\}$ (sequences in $k$) $\supset$ {sequences which are eventually zero}.
- $k[[x]] \supset k[x]$ (isomorphic to the previous example!).
- Given any set $S$, $k^S = \{\text{maps } f : S \to k\}$ ($k^\infty \iff$ the case $S = \NN$).
- {maps $\RR \to \RR$} $\supset$ {continuous maps} $\supset$ {differentiable maps $\RR \to \RR$}.
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 7](/notes/math-55a/07-bases-dimension-and-matrices-of-linear-maps)
**Span, linear independence, basis**

Let $V$ be a vector space over $k$.

:::definition Span
Given $v_1, \dots, v_n \in V$, the **span** of $v_1, \dots, v_n$ is the smallest subspace of $V$ which contains $v_1, \dots, v_n$. Concretely,
$$\operatorname{span}(v_1, \dots, v_n) = \{a_1 v_1 + \dots + a_n v_n \mid a_i \in k\}.$$

Say $v_1, \dots, v_n$ **span $V$** if $\operatorname{span}(v_1, \dots, v_n) = V$.
:::

:::definition Linear independence
We say $v_1, \dots, v_n \in V$ are **linearly independent** if
$$a_1 v_1 + \dots + a_n v_n = 0 \implies a_1 = a_2 = \dots = a_n = 0.$$
:::

Equivalently, given $v_1, \dots, v_n \in V$, we have a linear map
$$\phi : k^n \longrightarrow V, \qquad (a_1, \dots, a_n) \longmapsto \sum a_i v_i,$$
and

- $v_1, \dots, v_n$ are linearly independent $\iff$ $\phi$ is injective;
- $v_1, \dots, v_n$ span $V$ $\iff$ $\phi$ is surjective.

:::definition Basis
$(v_1, \dots, v_n)$ are a **basis** of $V$ if they are linearly independent and span $V$.
:::

Then any element of $V$ can be expressed *uniquely* as $\sum a_i v_i$ for some $a_i \in k$.

:::example
$(1,0)$ and $(0,1)$ are a basis of $k^2$. So are $(1,1)$ and $(1,-1)$ for *most* fields $k$. (What if $\operatorname{char}(k) = 2$?)
:::

:::note
We will see soon: if $V$ has a basis with $n$ elements, then every basis of $V$ has $n$ elements. We say the **dimension** of $V$ is $\dim(V) = n$.
:::

One can also consider infinite-dimensional vector spaces:

:::definition Span, independence, basis for arbitrary subsets
For $S \subset V$ any subset:

- $\operatorname{span}(S)$ = the smallest subspace of $V$ containing $S$
$$= \{a_1 v_1 + \dots + a_k v_k \mid k \in \NN,\ a_i \in k,\ v_i \in S\}$$
(all *finite* linear combinations of elements of $S$).
- The elements of $S$ are **linearly independent** if there are no *finite* linear relations:
$$a_1 v_1 + \dots + a_k v_k = 0 \quad (a_i \in k,\ v_i \in S) \implies a_1 = \dots = a_k = 0.$$
- $S$ is a **basis** of $V$ if its elements are linearly independent and span $V$.
:::

:::example
- $\{1, x, x^2, x^3, \dots\}$ is a basis of $k[x]$.
- Does $k[[x]]$ have a basis? What is it?
:::

**Linear maps**

:::definition Linear map
Let $V, W$ be vector spaces over $k$. A **homomorphism** of vector spaces, or **linear map**, $\varphi : V \to W$, is any map that is compatible with the operations:
$$\varphi(u + v) = \varphi(u) + \varphi(v), \qquad \varphi(\lambda v) = \lambda \varphi(v) \qquad \forall \lambda \in k,\ \forall u, v \in V.$$
:::

:::proposition
The set of linear maps $V \to W$ is itself a vector space over $k$, denoted $\Hom(V, W)$.
:::

:::proof
Given $\varphi, \psi \in \Hom(V, W)$ and $\lambda \in k$, define
$$\begin{cases} \varphi + \psi & \text{by } (\varphi + \psi)(v) = \varphi(v) + \psi(v) \quad \forall v \in V, \\ \lambda\varphi & \text{by } (\lambda\varphi)(v) = \lambda \cdot \varphi(v). \end{cases}$$
One can check that

- $\varphi + \psi$ and $\lambda\varphi$ defined in this way are linear maps (so we do have operations $+, \cdot$ on $\Hom(V, W)$);
- these operations on $\Hom(V, W)$ satisfy the axioms of a vector space.

(Rather boring, but worth checking if you’re not sure!)
:::

We’ll soon see: if $\dim(V) = n$ and $\dim(W) = m$, then $\dim(\Hom(V, W)) = mn$. (In bases for $V$ and $W$, linear maps become $m \times n$ matrices!)

**How does the choice of the field $k$ matter?**

Given a subfield $k' \subset k$ (e.g. $\RR \subset \CC$ or $\QQ \subset \RR$), a vector space over $k$ can also be viewed as a vector space over $k'$, by “**restriction of scalars**” (namely, only look at scalar multiplication restricted to the domain $k' \times V \subset k \times V$). In particular, $k$ itself is a vector space over $k'$!

:::example
$\CC$ is a vector space over itself (of dimension 1; $\{1\}$ is a basis). It is also a vector space over $\RR$ (of dimension 2, with basis $\{1, i\}$).
:::

If $V, W$ are $\CC$-vector spaces, hence also $\RR$-vector spaces, any $\CC$-linear map is also $\RR$-linear, but the converse isn’t true: $\Hom_\CC(V, W) \subsetneq \Hom_\RR(V, W)$.

For example, complex conjugation
$$\CC \longrightarrow \CC, \qquad z = a + bi \longmapsto \bar z = a - bi$$
is $\RR$-linear: $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$ and $\overline{az} = a\bar z$ for all $a \in \RR$; but it is *not* $\CC$-linear ($\overline{iz} \ne i\bar z$).

So: the choice of field $k$ matters.
:::
