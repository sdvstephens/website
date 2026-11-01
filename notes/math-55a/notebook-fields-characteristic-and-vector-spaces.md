---
course: math-55a
chapter: 2
section: N18
title: Fields, Characteristic and Vector Spaces
source-pages: m55a-2–m55a-3
---

## Fields vs. vector spaces

:::definition Field
A **field** is a triple $(K, \times, +)$ with $a(b+c) = ab + ac$ (distributive law), where $(K, +)$ is abelian with identity $0$ and $(K \setminus \{0\}, \times)$ is abelian with identity $1$. A field with $\operatorname{char}(K) = p$, $p \in \PP$, contains $\FF_p = \ZZ/p$.
:::

(Margin, next to “$\operatorname{char} = p$”: *wth does characteristic mean again?* See below.)

:::definition Vector space
A **vector space** $V$ over $K$ comes with
$$
+ : V \times V \to V, \qquad \times : V \times K \to V,
$$
where $(V, +)$ is abelian with identity $0 \in V$, and scalar multiplication has identity $1$.
:::

:::remark Fields vs. vector spaces
Vector spaces can ONLY have multiplication of the form $\lambda v$, $\lambda c$ (with $v, w \in V$ and $\lambda, c \in K$), and NOT $vw$, as this will be $\notin V$ or simply nonsense. However in $K$, $vw$ is valid. Think of these as different structures, but one often being the more “complete” version of the other.
:::

:::definition Characteristic of a field
The **characteristic** of a field $K$ is $\operatorname{char}(K) = n$ such that, given $K$’s multiplicative identity $1$, we add
$$
\underbrace{1 + 1 + \dots + 1}_{n \text{ times}} = 0,
$$
where $0$ is the additive identity of $K$. The $n$ for $\operatorname{char}(K)$ MUST be the smallest $n$ such that $1 + \dots + 1 = 0$ ($n$ times) holds. This is the general case for a ring; however for a field $K$ there exist only 2 cases:
$$
\begin{cases}
\text{C1: } \operatorname{char}(K) = m, & m \neq 0,\\
\text{C2: } \operatorname{char}(K) = 0.
\end{cases}
$$
Note that for C1 we have $m = p \in \PP$, i.e. it must be prime. If instead $\operatorname{char}(K) = 0$ as in case 2, it means that there does not exist an $n$ such that $1 + \dots + 1 = 0$, so $1 + \dots + 1 \neq 0$ in $K$.
:::

:::theorem
The size of any finite vector space is a prime power.
:::

:::proof
Let $V \neq 0$ be a finite vector space over $K$. Then $K$ is finite too ($\lambda \mapsto \lambda v$ is injective for $v \neq 0$), so $\operatorname{char}(K) = p$ is prime and $K \supseteq \ZZ/p\ZZ$. So $V$ is a vector space over the field $\FF_p = \ZZ/p\ZZ$; being finite, it has a finite basis, say of $m$ elements, and therefore $|V| = p^m$. (For $V = 0$, $|V| = 1 = p^0$.)
:::

## Subspaces, span and linear independence

:::definition Subspace
A **subspace** is a subset $W \subseteq V$ containing $0$ such that $W$ is closed under $+$ and $\times$.
:::

:::definition Span
$$
\operatorname{span}(v_1, \dots, v_n) = \Big\{ \sum a_i v_i \;\Big|\; a_i \in K \Big\} \subseteq V.
$$
Let $(v_i)$ be a list of vectors of $V$. We say the $v_i$ **span** $V$ if $\operatorname{span}(v_i) = V$.
:::

:::definition Linear independence
The $v_i$ are **linearly independent** if $a_1 v_1 + \dots + a_n v_n = 0$ only if $a_i = 0$ for all $i$.
:::

(Note: NO non-linear functions.)

:::note
The span is the *set* of all *linear combinations*. Also, $a_i = 0$ for all $i$ gives the zero vector, so the zero vector is in every span.
:::

:::example
In $\RR^3$, let $v_1 = (1,0,0)$, $v_2 = (0,1,0)$, $v_3 = (0,0,1)$. Then $3v_1 + 2v_2 + v_3 = (3,2,1)$.
:::

:::example
In $\RR^2$ consider $v = (1,2)$. Then $\operatorname{span}(v) = \{ a(1,2) \mid a \in \RR \}$, which equals $\{ (a, 2a) \mid a \in \RR \}$, i.e. the line $y = 2x$. And if we take $\operatorname{span}(v_1, v_2)$, then $\operatorname{span} = \RR^2$ if $v_1, v_2$ are linearly independent.
:::

## Exercises on fields

:::exercise Is $\ZZ/6$ a field?
Consider $\ZZ/6$ with $+$ and $\times$. Is this a field? If not, which $\ZZ/n$ are fields? My guess: primes (intuition).

:::solution
For $(\ZZ/6, +, \times)$ to be a field, $(\ZZ/6, +)$ must be abelian with identity $0$, $(\ZZ/6 \setminus \{0\}, \times)$ must be abelian with identity $1$, and $a(b+c) = ab + ac$ must hold.

$(\ZZ/6, +)$ abelian with identity $0$ is obvious. $(\ZZ/6 \setminus \{0\}, \times)$ seems suspicious: $(\{1,2,3,4,5\}, \times)$ is not even a group ($2$ has no inverse), so it cannot be an abelian group. In order for $\ZZ/n$ to be a field, every nonzero $a \in \ZZ/n$ must be coprime with $n$.
:::
:::

:::exercise Zero divisors
Consider a field $K$. If $ab = 0$, then either $a = 0$ or $b = 0$. Why does this fail in $\ZZ/6$?

:::solution
:::lemma
$0a = 0$ for all $a \in K$.
:::

:::proof
$0a = (0 + 0)a = 0a + 0a$, and adding $-(0a)$ to both sides gives $0 = 0a$.
:::

Let $ab = 0$, but $a \neq 0$ and $b \neq 0$. Then
$$
ab = 0 \implies a^{-1}ab = a^{-1}0 \implies b = a^{-1}0 \overset{\text{by lemma}}{\implies} b = 0.
$$
Conversely, using the same method (the lemma) for $a$, $b$ and $ab$: if $a = 0$ then $ab = 0b = 0$; if $b = 0$ then $ab = a0 = 0$; and if $a = b = 0$ then $ab = 0$. No matter which case we have, we contradict our assumption. $\square$

As to why $\ZZ/6$ fails this: there does not exist an inverse under multiplication for $2$ in $\ZZ/6$, which can be seen from $\gcd(2,6) = 2$. $\square$
:::
:::

:::exercise
Suppose $K$ is a field with $\operatorname{char}(K) = 5$. What is $3 + 3$ in this field? $2 \cdot 3$? $6$? Show that in general, for $\operatorname{char}(K) = p \in \PP$, every element $a \in K$ satisfies $ap = 0$.

:::solution
$\FF_p \cong \ZZ/p$, and given $\operatorname{char}(K) = 5$, $5 \equiv 0$. So $3 + 3 = 5 + 1 = 0 + 1 = 1$, $6 = 5 + 1 = 0 + 1 = 1$, and $2 \cdot 3 = 3 + 3 = 5 + 1 = 0 + 1 = 1$.

Now for the general case: $\operatorname{char}(K) = p$ means $\underbrace{1 + \dots + 1}_{p \text{ times}} = 0$, so any multiple of $p$ is $0$ as well, since
$$
a(p) = a(1 + \dots + 1) = a \cdot 0 = 0. \qquad \square
$$
:::
:::

:::exercise
If $K$ is a field, either $\operatorname{char}(K) = p$ or $\operatorname{char}(K) = 0$.

:::solution
Suppose $\operatorname{char}(K) = n = ab$ with $1 < a, b < n$. Then $\underbrace{1 + \dots + 1}_{ab \text{ times}} = 0$, i.e. $(a \cdot 1)(b \cdot 1) = n \cdot 1 = 0$ in $K$. (Note $n \in \ZZ$ is $\notin K$, but $n(1) = 0 \in K$.) A field has no zero divisors (previous exercise), so $a \cdot 1 = 0$ or $b \cdot 1 = 0$. But $1 < a, b < n$ and $n$ is the smallest number with $n \cdot 1 = 0$, so $a \cdot 1 \neq 0$ and $b \cdot 1 \neq 0$: a contradiction. Thus $\operatorname{char}(K)$ must be either $0$ or $p$, and cannot be anything else. $\square$
:::
:::

:::note
For $\operatorname{char}(K) = p$, $K \supseteq \FF_p \cong \ZZ/p$, and for $\operatorname{char}(K) = 0$, $K \supseteq \QQ$. We have $K \cong \ZZ/p$ only if $\FF_p \subseteq K$ and $\FF_p \supseteq K$.
:::

## $K$ as a vector space

:::exercise
Let $K$ be a field. Show that $K$ is a vector space over $K$. What is $\dim(K)$? What about $K^2 = K \times K$ over $K$ as a vector space? What are the operations?

:::solution
We need operations satisfying the following: for $\lambda, a \in K$ there is $b$ with $\lambda a = b$, and for $a, b \in K$ there is $c$ with $a + b = c$, for all $a, b, c, \lambda \in K$, with no product of two vectors $ab$ required. This also needs to satisfy the distributive law. Our main issue is that $vw \in K$, so it seems the structure cannot be simple multiplication. But if $V \subseteq K$ then $v, w \in K$, and we can say that vector multiplication is defined in $K$. Vector spaces don’t require that $\lambda_1 \lambda_2$ not be valid, so we can consider $K$ a vector space over $K$ with the additional inclusion of scalar-by-scalar multiplication. Since scalars and vectors are the same things in $K$ ($\lambda_m \equiv v_m$), $\dim(K) = 1$, which is (maybe) why we can have $vw \in K$. However, in $K^2$ we have $\dim(K^2) = 2$, so we cannot have $\lambda_m \equiv v_m$, since $V$ has $(e_1, e_2)$ for its basis.
:::
:::

:::exercise
$\RR$ cannot be a vector space over $\CC$ (show)!

:::solution
Consider $i \in \CC$, with $i^2 = -1$. Then taking $\lambda = i$, $\lambda v$ for $v \in \RR$ must again be written in a basis of $\RR$. Consider a basis $V_n = (e_1, \dots, e_n)$; then $iV_n = (ie_1, \dots, ie_n)$, but for all $e_i$, $ie_i \notin \RR$, so $iv_n \notin \RR$, and thus scalar multiplication is not defined in $\RR$ over $\CC$. So $\RR$ cannot be a vector space over $\CC$ (with scalar multiplication given by multiplication of complex numbers).
:::
:::
