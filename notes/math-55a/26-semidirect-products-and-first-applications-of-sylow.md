---
course: math-55a
chapter: 7
section: 26
title: Semidirect Products and First Applications of Sylow
date: 2025-11-03
lecturer: Denis Auroux
source-pages: 1-4
---

:::readings Review sessions and handouts
- Christoph von Pezold, [Semidirect products](/notes/math-55a/readings/semidirect-products.pdf)
:::

## The Sylow theorems

If $|G|=n$ and $k\mid n$, then in general there is no reason for $G$ to contain an element of order $k$, or even a subgroup of order $k$: the “converse to Lagrange’s theorem” fails.

:::example
$A_4$ (resp. $A_5$) has no subgroup of order 6 (resp. 30): such a subgroup would be normal.
:::

Fix a prime $p$ (which divides $|G|$) and write $|G|=p^e m$, $p\nmid m$.

:::definition
A subgroup $H\subset G$ of order $|H|=p^e$ is called a **Sylow $p$-subgroup** of $G$.
:::

:::theorem Sylow theorems (Sylow, 1872)
1. For every prime $p$, a Sylow $p$-subgroup of $G$ exists.
2. All Sylow $p$-subgroups are conjugates of each other: if $H,H'\subset G$ are Sylow $p$-subgroups, then there exists $g\in G$ such that $H'=gHg^{-1}$. Moreover, any subgroup $K\subset G$ with $|K|$ a power of $p$ is contained in a Sylow $p$-subgroup.
3. Let $s_p$ be the number of Sylow $p$-subgroups of $G$. Then $s_p\equiv1\bmod p$, and $s_p\mid |G|$ (or equivalently, $s_p\mid m=|G|/p^e$).
:::

:::example Classify groups of order 15
:::solution
If $|G|=15$, then there exist Sylow subgroups $H,K\subset G$ with $|H|=3$, $|K|=5$. The numbers of such Sylow subgroups:
$$
\begin{cases}
s_3\mid 5\ \text{and}\ s_3\equiv 1\bmod 3 &\Rightarrow\ s_3=1,\\
s_5\mid 3\ \text{and}\ s_5\equiv 1\bmod 5 &\Rightarrow\ s_5=1.
\end{cases}
$$
This implies $H$ and $K$ are normal! (Since their conjugates $gHg^{-1}$, $gKg^{-1}$ are also Sylow subgroups, but $H$ and $K$ are the unique such.) Using a criterion for direct products coming up next, this implies
$$
G\simeq H\times K\simeq \ZZ/3\times\ZZ/5\simeq\ZZ/15.
$$
Every group of order 15 is cyclic!
:::
:::

## Digression: normal subgroups, semidirect products and direct products

Let’s say $N\subset G$ is a normal subgroup; then we have an exact sequence
$$
1\to N\to G\xrightarrow{\ q\ }H\to 1,\qquad\text{where } H\simeq G/N.
$$
This does *not* imply that $G\simeq H\times N$, or in fact even that $G$ contains a subgroup isomorphic to $H$!

:::example
$\ZZ p\subset\ZZ$ is a subgroup, $0\to\ZZ p\to\ZZ\to\ZZ/p\to0$, but $\ZZ$ has no subgroup $\simeq\ZZ/p$.
:::

On the other hand, *assume* we can identify $H$ with a subgroup of $G$ which contains one element of each coset of $N$, so that the inclusion $i:H\hookrightarrow G$ satisfies $q\circ i=\id_H$. This means: $N$ and $H$ are subgroups of $G$, $N$ is normal, and every coset of $N$ (left = right cosets since $N$ is normal) contains a unique element of $H$:
$$
G=\bigsqcup_{h\in H}Nh.
$$
Thus, every element of $G$ can be *uniquely* expressed as $g=nh$, $n\in N$, $h\in H$. So we have a bijection of sets
$$
N\times H\to G,\qquad (n,h)\mapsto nh.
$$
This need not be a group isomorphism! (In particular because $H$ need not be a normal subgroup of $G$.) However, since $N$ is normal, we do know that $(n_1h_1)(n_2h_2)\in(Nh_1)(Nh_2)=Nh_1h_2$; in fact
$$
(n_1h_1)(n_2h_2)=\underbrace{(n_1\,h_1n_2h_1^{-1})}_{\in N\ (\text{using: }N\text{ normal})}\,\underbrace{(h_1h_2)}_{\in H}.
$$
This can be interpreted as a **semidirect product** of $N$ and $H$:

:::definition
Given groups $N$ and $H$, and an action of $H$ on $N$ by automorphisms, i.e. a homomorphism $\varphi:H\to\Aut(N)$, we define the **semidirect product** $N\rtimes_\varphi H$:
- as a set: $N\times H$;
- group law: $(n_1,h_1)\cdot(n_2,h_2)=\big(n_1\,\varphi(h_1)(n_2),\ h_1h_2\big)$.

(Check: this satisfies the group axioms; in particular it’s associative.)
:::

In the above setting, $H\subset G$ acts on the normal subgroup $N\subset G$ by conjugation: $\varphi(h)(n)=hnh^{-1}$, and then we find that $G\simeq N\rtimes_\varphi H$. To summarize:

:::proposition
If $N$ and $H$ are subgroups of $G$, $N$ normal, such that every coset of $N$ contains a unique element of $H$ ($\iff$ every element of $G$ is uniquely $g=nh$), then $G$ is isomorphic to a semidirect product $N\rtimes_\varphi H$.
:::

:::example
$1\to A_3\to S_3\xrightarrow{\ \sgn\ }\ZZ/2\to1$, where $A_3=\{1,\sigma,\sigma^2\}\simeq\ZZ/3$ ($\sigma$ a 3-cycle) is the alternating subgroup (normal). We can realize $\ZZ/2$ as the subgroup $\{\id,\tau\}\subset S_3$, $\tau$ a transposition (not normal). So $S_3\simeq\ZZ/3\rtimes\ZZ/2$, where $\ZZ/2$ acts on $A_3$ by conjugation: $\tau\sigma\tau^{-1}=\sigma^{-1}$.

Similarly, $1\to\ZZ/n\to D_n\to\ZZ/2\to1$, with $\ZZ/n$ the rotations and $\ZZ/2\simeq\{\id,\text{reflection}\}\subset D_n$, so $D_n\simeq\ZZ/n\rtimes\ZZ/2$.

These are not $\simeq$ direct products.
:::

:::remark
If $G$ is finite, $|G|=|H|\cdot|N|$, and $H\cap N=\{e\}$, then every coset of $N$ contains a unique element of $H$; so, assuming $N$ normal, we have a semidirect product, by the proposition.

Indeed: the homomorphism $H\to G/N$, $h\mapsto hN$ (the composition $H\hookrightarrow G\twoheadrightarrow G/N$) has $\ker=H\cap N=\{e\}$, so it is injective, and $|H|=|G/N|$, so it is bijective.

Alternatively: if $n_1h_1=n_2h_2$, then $n_2^{-1}n_1=h_2h_1^{-1}\in H\cap N=\{e\}$, so $n_1=n_2$ and $h_1=h_2$. Thus the products $nh$, $n\in N$, $h\in H$, are all distinct; every element of $G$ has at most one such expression, so exactly one since $|G|=|N||H|$.
:::

Finally:

:::proposition
If *both* $N$ and $H$ are normal subgroups of $G$, and every element of $G$ can be uniquely expressed as $g=nh$, $n\in N$, $h\in H$ ($\iff$ every coset of one subgroup contains a unique element of the other subgroup), then $G\simeq N\times H$ (i.e. the semidirect product is actually a **direct product**).
:::

:::proof
This is because cosets intersect in a single element: $nH\cap Nh=\{nh\}$ (because $H\cap Nh=\{h\}$, and left multiplication by $n$ gives this). And, since $H$ and $N$ are normal,
$$
(n_1h_1)(n_2h_2)\in Nh_1\cdot Nh_2=Nh_1h_2\quad\text{and}\quad(n_1h_1)(n_2h_2)\in n_1H\cdot n_2H=n_1n_2H,
$$
so $(n_1h_1)(n_2h_2)\in n_1n_2H\cap Nh_1h_2$, hence $(n_1h_1)(n_2h_2)=(n_1n_2)(h_1h_2)$, showing that $N\times H\to G$, $(n,h)\mapsto nh$, is now a group isomorphism.
:::

:::corollary
If $G$ is finite, $N,H\subset G$ are normal subgroups, $N\cap H=\{e\}$ and $|G|=|H|\cdot|N|$, then $G\simeq N\times H$.
:::

:::remark
The condition $N\cap H=\{e\}$ is e.g. automatic if $\gcd(|N|,|H|)=1$ (since $N\cap H$ is a subgroup of $N$ and $H$, so its order divides $|N|$ and $|H|$).
:::

## Groups of order 15 and 21

So, returning to a group $G$ of order 15: the Sylow theorems imply $G$ has unique subgroups $H$ and $K$ of orders 3 and 5, which are normal (uniqueness $\Rightarrow$ $gHg^{-1}=H$, $gKg^{-1}=K$). Since $3\cdot5=15$ and $\gcd(3,5)=1$, the criterion holds and so
$$
G\simeq H\times K\simeq\ZZ/3\times\ZZ/5\simeq\ZZ/15.
$$

:::example Groups of order 21
:::solution
Sylow gives the existence of subgroups $H$ of order 3 and $K$ of order 7. Also, the number of conjugate subgroups of each of these: $s_7\equiv1\bmod 7$ and $s_7\mid3$, so $s_7=1$; $s_3\equiv1\bmod3$ and $s_3\mid7$, so $s_3$ could be either 1 or 7.

If $s_3=s_7=1$, then $H$ and $K$ are normal (since they are equal to their conjugates), and the above criterion implies that
$$
G\simeq H\times K\simeq\ZZ/3\times\ZZ/7\simeq\ZZ/21.
$$
Otherwise, if $s_3=7$, then $K$ is normal but $H$ isn’t: we have a semidirect product $K\rtimes H$. Let $x$ be a generator of $K\simeq\ZZ/7$ and $y$ a generator of $H\simeq\ZZ/3$: then $x^7=y^3=e$, and every element of $G$ is uniquely expressible as $x^ay^b$, $0\le a\le 6$, $0\le b\le 2$. What we need to know, to determine the group structure, is the expression of $y\cdot x$. Since $K$ is normal, $yx\in yK=Ky$, so $yx=x^\alpha y$ for some $0\le\alpha\le6$, i.e. $yxy^{-1}=x^\alpha$. This determines the group law.

Further investigation shows that in fact there exists a *unique* nonabelian group of order 21 up to isomorphism. The best way to prove existence is to construct it explicitly, e.g. as a subgroup of $S_7$ or of something else. This is on the homework!
:::
:::

## Two comments on the Sylow theorems

Next time, we’ll look at the proof of the Sylow theorems. For now, a couple of comments.

1) Recall: for all $g\in G$, the order of $g$ divides $|G|$; but the converse does not hold: in general, $k\mid|G|\not\Rightarrow$ there exists $g\in G$ of order $k$. A corollary of Sylow’s first theorem (existence of Sylow $p$-subgroups) is that the converse *does* hold for primes.

:::corollary
If $p\mid|G|$ and $p$ is prime, then $G$ contains an element of order $p$.
:::

:::proof
Let $H\subset G$ be a Sylow $p$-subgroup, and let $g\in H$ such that $g\ne e$. Since the order of $g$ divides $|H|=p^e$, it is $p^k$ for some $1\le k\le e$. Now $g^{p^{k-1}}$ has order $p$.
:::

2) For a $p$-group ($|G|=p^n$), Sylow tells us exactly nothing! Namely, a Sylow $p$-subgroup has $p^n$ elements, and the only such is $G$ itself. Thus, in the Sylow approach to classification, $p$-groups are the hardest to classify. In fact, the number of different $p$-groups grows dramatically with the exponent $n$! E.g. for $p=2$:

| order | number of groups |
|---|---|
| $2^1=2$ | 1 (cyclic) |
| $2^2=4$ | 2 ($\ZZ/4$, $\ZZ/2\times\ZZ/2$) |
| $2^3=8$ | 5 |
| $2^4=16$ | 14 |
| $2^5=32$ | 51 |

… and already 56092 for $2^8=256$.
