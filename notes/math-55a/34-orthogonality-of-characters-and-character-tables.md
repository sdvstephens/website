---
course: math-55a
chapter: 9
section: 34
title: Orthogonality of Characters and Character Tables
date: 2025-11-21
lecturer: Denis Auroux
source-pages: A34-1–A34-5
---

:::readings Review sessions and handouts
- Iz Chen, [Representation theory of finite groups](/notes/math-55a/readings/representation-theory-handout.pdf)
- Iz Chen, [Characters](/notes/math-55a/readings/representation-theory-characters.pdf)
- Iz Chen, [Representation theory recap](/notes/math-55a/readings/representation-theory-recap.pdf)
:::

## Recall

:::definition
The **character** $\chi_V$ of a representation $V$ is the function $\chi_V : G \to \CC$, $\chi_V(g) = \Tr(g)$.
:::

$\chi_V$ is a **class function** on $G$, i.e. $\chi_V(g)$ only depends on the **conjugacy class** of $g$.

:::example
- $\chi_{V \oplus W}(g) = \chi_V(g) + \chi_W(g)$
- $\chi_{V \otimes W}(g) = \chi_V(g)\,\chi_W(g)$
- $\chi_{V^*}(g) = \overline{\chi_V(g)}$
- hence $\chi_{\Hom(V,W)}(g) = \overline{\chi_V(g)}\,\chi_W(g)$.
- For a permutation representation associated to $G$ acting on $S$, $\chi(g) = \#\operatorname{Fix}(g)$.
:::

## Orthogonality of characters

Recall:

If $V$ is a representation of $G$, the **invariant part** is $V^G = \{v \in V \mid gv = v \ \forall g \in G\}$.

:::proposition
$\varphi = \dfrac{1}{|G|} \displaystyle\sum_{g \in G} g : V \to V$ is a projection onto $V^G \subset V$: $\im(\varphi) = V^G$ and $\varphi|_{V^G} = \id$.
:::

So:
$$\dim(V^G) = \Tr(\varphi) = \frac{1}{|G|} \sum_{g \in G} \chi_V(g).$$

If $V, W$ are representations of $G$, then $\Hom_G(V,W) = \Hom(V,W)^G = (V^* \otimes W)^G$, so
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
The characters of irreducible representations of $G$ are orthonormal for $H$:
$$H(\chi_{V_i}, \chi_{V_i}) = 1, \qquad H(\chi_{V_i}, \chi_{V_j}) = 0 \ \text{ for } i \neq j.$$
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

## The regular representation

We now apply this to the **regular representation**: $R$ = the vector space with basis $\{e_g\}_{g \in G}$, on which $G$ acts by permuting the basis vectors by left multiplication: $g \cdot e_h = e_{gh}$.

Now let $V_1, \dots, V_k$ be the irreducible representations of $G$, and write $R = \bigoplus V_i^{\oplus a_i}$. What are the $a_i$?

Since $G$ acts by permutation matrices, $\chi_R(g) = \Tr(g) = \#\{h \in G \mid g \cdot e_h = e_h\}$; but unless $g = e$ there are no fixed points, so
$$\chi_R(g) = \begin{cases} |G| & \text{if } g = e, \\ 0 & \text{if } g \neq e. \end{cases}$$
So
$$H(\chi_R, \chi_{V_i}) = \frac{1}{|G|} \sum_g \overline{\chi_R(g)}\, \chi_{V_i}(g) = \chi_{V_i}(e) = \Tr(\id_{V_i}) = \dim V_i.$$
Hence each $V_i$ appears $a_i = \dim V_i$ times in the regular representation $R$.

And now the third corollary above (the one saying $H(\chi_W, \chi_W) = \sum a_i^2$) implies
$$H(\chi_R, \chi_R) = |G| = \sum a_i^2 = \sum (\dim V_i)^2,$$
where $H(\chi_R,\chi_R) = |G|$ by direct calculation: $\frac{1}{|G|} \sum_g |\chi_R(g)|^2 = \frac{1}{|G|} |\chi_R(e)|^2 = |G|$.

:::corollary
The irreducible representations $V_1, \dots, V_k$ of $G$ satisfy $\sum (\dim V_i)^2 = |G|$.
:::

At this point we actually have a lot of information about the irreducible representations of $G$ and their characters.

## The character table of $S_4$

:::example $G = S_4$
The conjugacy classes are: $\{e\}$, of size $1$; transpositions, size $6$; $3$-cycles ($8$); $4$-cycles ($6$); pairs of transpositions ($3$).

We know $3$ irreducible representations: $U$ = trivial, $U'$ = alternating, $V$ = standard. Character table:

| | $e$ | $(12)$ | $(123)$ | $(1234)$ | $(12)(34)$ |
|---|:---:|:---:|:---:|:---:|:---:|
| *class size* | $1$ | $6$ | $8$ | $6$ | $3$ |
| $U$ | $1$ | $1$ | $1$ | $1$ | $1$ |
| $U'$ | $1$ | $-1$ | $1$ | $-1$ | $1$ |
| $V$ | $3$ | $1$ | $0$ | $-1$ | $-1$ |

- Row $U$: $g$ acts by $\id$, so $\Tr = 1$.
- Row $U'$: $\Tr\,(-1)^\sigma = (-1)^\sigma$.
- Row $V$: to find this one, $U \oplus V$ = the permutation representation $\CC^4$, and $\chi_{U \oplus V}(\sigma) = \Tr(\sigma) = \#\text{fixed points} = \#\{i \mid \sigma(i) = i\}$, so $\chi_V(\sigma) = \#\text{fixed points} - 1$.

**Quick check:** these are indeed orthonormal!

**However:** $\sum \dim^2 = 1^2 + 1^2 + 3^2 = 11 < 24$, so there are other irreducible representations! In fact:
- The first corollary above (the bound by the number of conjugacy classes) says we’re missing at most two ($\#$ irreducible representations $\le$ $\#$ conjugacy classes $= 5$);
- since we’re missing $13$, which is not a square, we’re missing exactly two, of dimensions $2$ and $3$ (so that $\sum \dim^2 = 24$).

How do we build the missing entries? Start by looking at tensor products of known representations.

For a start, the tensor product of an irreducible representation with a $1$-dimensional representation is still irreducible ($\otimes$ a $1$-dimensional representation has the “same” invariant subspaces), so we can look at $V' = V \otimes U'$ (twist the standard representation by $(-1)^\sigma$), which has
$$\chi_{V'} = \chi_V \cdot \chi_{U'} = (3, -1, 0, 1, -1).$$
This is indeed irreducible ($H(\chi_{V'}, \chi_{V'}) = 1$) and different from $V$!

We have one *last* $2$-dimensional irreducible representation $W$ to find!

Since $W \otimes U'$ is also a $2$-dimensional irreducible representation, necessarily $W \otimes U' \simeq W$. This implies $\chi_W = \chi_W \chi_{U'}$, i.e. $\chi_W = 0$ on the odd conjugacy classes ($(12)$ and $(1234)$).

The orthogonality relations allow us to find the rest of $\chi_W$ without having constructed it!

| | $e$ | $(12)$ | $(123)$ | $(1234)$ | $(12)(34)$ |
|---|:---:|:---:|:---:|:---:|:---:|
| *class size* | $1$ | $6$ | $8$ | $6$ | $3$ |
| $U$ | $1$ | $1$ | $1$ | $1$ | $1$ |
| $U'$ | $1$ | $-1$ | $1$ | $-1$ | $1$ |
| $V$ | $3$ | $1$ | $0$ | $-1$ | $-1$ |
| $V'$ | $3$ | $-1$ | $0$ | $1$ | $-1$ |
| $W$ | $2$ | $0$ | $a = -1$ | $0$ | $b = 2$ |

$$H(\chi_U, \chi_W) = \tfrac{1}{24}(2 + 8a + 3b) = 0, \qquad H(\chi_V, \chi_W) = \tfrac{1}{24}(6 - 3b) = 0 \quad\Longrightarrow\quad b = 2,\ a = -1.$$

Note that $\chi_W((12)(34)) = 2$ means the eigenvalues are $1$ and $1$! (They are roots of unity summing to $2$.)

This gives a big clue about $W$: the normal subgroup $H = \{\id\} \cup \{(ij)(kl)\} \simeq \ZZ/2 \times \ZZ/2$ is in the kernel of $S_4 \xrightarrow{\rho} GL(W)$, i.e. $\rho$ factors through the quotient $S_4/H \simeq S_3$. (Recall: $S_4$ acts on the set of splittings of $\{1,2,3,4\}$ into $2$ pairs; there are $3$ of those.)

Under this quotient, transpositions and $4$-cycles $\mapsto$ transpositions, $3$-cycles $\mapsto$ $3$-cycles, and the character $\chi_W$ becomes
$$\begin{cases} \id \mapsto 2 \\ \text{transposition} \mapsto 0 \\ 3\text{-cycle} \mapsto -1 \end{cases}$$
This is the standard representation of $S_3$, “pulled back” to $S_4$ by $S_4 \twoheadrightarrow S_3$!

The other option to construct $W$ is to look at $V \otimes V$: $\chi_{V \otimes V} = \chi_V^2 = (9, 1, 0, 1, 1)$. We have
$$\begin{aligned}
H(\chi_U, \chi_{V \otimes V}) &= 1, \qquad H(\chi_{U'}, \chi_{V \otimes V}) = 0, \\
H(\chi_V, \chi_{V \otimes V}) &= \tfrac{1}{24}(27 + 6 - 6 - 3) = 1, \\
H(\chi_{V'}, \chi_{V \otimes V}) &= \tfrac{1}{24}(27 - 6 + 6 - 3) = 1,
\end{aligned}$$
so $V \otimes V$ contains $U \oplus V \oplus V'$ (of dimension $7$), and this leaves us one copy of the missing irreducible $W$. So
$$V \otimes V = U \oplus V \oplus V' \oplus W$$
(and we can find $\chi_W$ by subtracting the others from $\chi_{V \otimes V}$).
:::

## The character table of $A_4$

:::example $A_4$, the alternating subgroup of $S_4$
This has $4$ conjugacy classes:

| class | $\{e\}$ | $(123)$ | $(132)$ | $(12)(34)$ |
|---|:---:|:---:|:---:|:---:|
| size | $1$ | $4$ | $4$ | $3$ |

(The $3$-cycles are one conjugacy class in $S_4$ but split in $A_4$; see Lecture 23.)

- We can start by restricting to $A_4$ the irreducible representations of $S_4$. Some become isomorphic (e.g. the alternating representation $U'$ has elements of $A_4$ acting by $(-1)^\sigma = 1$, so it becomes $\simeq$ trivial); others might become reducible. This is feasible but tricky (largely $W$’s fault).
- Or we can go at it directly! We know there are at most $4$ irreducible representations, with $\sum \dim^2 = 12$, including the trivial representation of dimension $1$, so the only option is $12 = 3^2 + 1^2 + 1^2 + 1^2$.

The three $1$-dimensional representations correspond to $\Hom(A_4, \CC^*)$, which contains the trivial homomorphism (the trivial representation) and two other elements… Observe that $H = \{\id\} \cup \{(ij)(kl)\}$ is a normal subgroup, with $A_4/H \simeq \ZZ/3$, so this gives the answer:
$$\Hom(A_4, \CC^*) \simeq \widehat{\ZZ/3} = \{ m \mapsto e^{2\pi i mk/3} \}.$$
Concretely, let $\lambda = e^{2\pi i/3}$; then the rank $1$ representations are $U, U', U''$ below (the $(ij)(kl) \in H$ act by $\id$), and the last one, by orthogonality, is $V$:

| | $e$ | $(123)$ | $(132)$ | $(12)(34)$ |
|---|:---:|:---:|:---:|:---:|
| $U$ | $1$ | $1$ | $1$ | $1$ |
| $U'$ | $1$ | $\lambda$ | $\lambda^2$ | $1$ |
| $U''$ | $1$ | $\lambda^2$ | $\lambda$ | $1$ |
| $V$ | $3$ | $0$ | $0$ | $-1$ |

This $V$ is the restriction to $A_4$ of the standard representation of $S_4$!

(Note: $W|_{A_4} \simeq U' \oplus U''$.)
:::

:::outline Notes not reached in this lecture, covered at the start of [Lecture 35](/notes/math-55a/35-irreducible-characters-form-a-basis-characters-of-s5-and-a5)
**Characters form a basis of the class functions**

Next, we want to prove: the characters of irreducible representations are actually an *orthonormal basis* (for $H$) of the space of class functions $G \to \CC$.

The proof uses a more general averaging/projection formula. Last time we saw that
$$\varphi_V = \frac{1}{|G|} \sum_{g \in G} g : V \to V$$
is the projection onto the invariant subspace $V^G$ ($=$ the trivial summands in $V$).

:::proposition
Given any class function $\alpha: G \to \CC$ and any representation $V$ of $G$, let
$$\varphi_{\alpha,V} = \frac{1}{|G|} \sum_{g \in G} \alpha(g)\, g : V \to V.$$
Then $\varphi_{\alpha,V}: V \to V$ is $G$-linear (equivariant).
:::

:::proof
$$\begin{aligned}
\varphi_{\alpha,V}(hv) &= \frac{1}{|G|} \sum_{g \in G} \alpha(g)\, g h v \\
&= \frac{1}{|G|} \sum_{g' \in G} \alpha(hg'h^{-1})\, (hg'h^{-1}) h v \qquad (\text{relabel the sum: } g = hg'h^{-1}) \\
&= \frac{1}{|G|} \sum_{g' \in G} \alpha(g')\, h g' v \\
&= h \Big( \frac{1}{|G|} \sum_{g' \in G} \alpha(g')\, g' v \Big) = h \cdot \varphi_{\alpha,V}(v).
\end{aligned}$$
:::

:::theorem
The characters of the irreducible representations of $G$ form an orthonormal basis (for $H$) of the space of class functions $G \to \CC$, and $\#$ irreducible representations $= \#$ conjugacy classes.
:::

:::proof
To show the characters $\chi_1, \dots, \chi_m$ of the irreducible representations span all class functions, it suffices to show:
$$H(\bar\alpha, \chi_i) = 0 \ \ \forall i \implies \alpha = 0.$$
Given any class function $\alpha$ and an irreducible representation $V$, consider $\varphi_{\alpha,V}: V \to V$ as above. Then by Schur’s lemma, $\varphi_{\alpha,V} = \lambda \cdot \id_V$, where $\lambda = \frac{1}{n} \Tr(\varphi_{\alpha,V})$, $n = \dim V$. So
$$\lambda = \frac{1}{n} \Tr(\varphi_{\alpha,V}) = \frac{1}{n} \frac{1}{|G|} \sum_{g \in G} \alpha(g) \Tr(g) = \frac{1}{n} \frac{1}{|G|} \sum \alpha(g)\, \chi_V(g) = \frac{1}{n} H(\bar\alpha, \chi_V).$$
So if $H(\bar\alpha, \chi_{V_i}) = 0$ for all irreducible $V_i$, then $\varphi_{\alpha,V_i} = 0$ for all $V_i$; hence, by considering direct sums, $\varphi_{\alpha,V} = 0$ for all representations of $G$, in particular for the regular representation $R$ of $G$ (the permutation representation for left multiplication on $G$).

So, for the regular representation (with $1 \in G$ the identity element),
$$\varphi_{\alpha,R}(e_1) = \frac{1}{|G|} \sum_{g \in G} \alpha(g)\, e_g = 0.$$
Since the $e_g$ are linearly independent, this implies $\alpha(g) = 0$ for all $g \in G$, i.e. $\alpha = 0$.
:::

Along the way, we found: for $V_i, V_j$ irreducible, look at $\varphi_{\alpha,V_j} : V_j \to V_j$ for $\alpha = \overline{\chi_{V_i}}$. Then $\varphi_{\alpha,V_j} = \lambda \cdot \id_{V_j}$, where
$$\lambda = \frac{1}{\dim V_j} \Tr(\varphi_{\alpha,V_j}) = \frac{1}{\dim V_j} H(\chi_{V_i}, \chi_{V_j}) = \begin{cases} \dfrac{1}{\dim V_j} & i = j, \\ 0 & i \neq j. \end{cases}$$

:::proposition
If $V$ is any representation of $G$ and $V = \bigoplus V_i^{\oplus a_i}$ is its decomposition into irreducibles, then
$$\varphi_{V_i} = \frac{\dim V_i}{|G|} \sum_{g \in G} \overline{\chi_{V_i}(g)}\, g : V \to V$$
is the projection onto the summand $V_i^{\oplus a_i}$ (i.e. the identity on that summand, $0$ on the others).
:::

(The case of the trivial representation is our previous projection formula for $V^G$.)
:::
