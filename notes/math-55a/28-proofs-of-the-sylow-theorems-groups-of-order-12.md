---
course: math-55a
chapter: 7
section: 28
title: Proofs of the Sylow Theorems; Groups of Order 12
date: 2025-11-07
lecturer: Denis Auroux
source-pages: 1-5
---

## The Sylow theorems

Fix a prime $p$ (which divides $|G|$) and write $|G|=p^e m$, $p\nmid m$.

:::definition
A subgroup $H\subset G$ of order $|H|=p^e$ is called a **Sylow $p$-subgroup** of $G$.
:::

:::theorem Sylow theorems (Sylow, 1872)
1. For every prime $p$, a Sylow $p$-subgroup of $G$ exists.
2. All Sylow $p$-subgroups are conjugates of each other: if $H,H'\subset G$ are Sylow $p$-subgroups, then there exists $g\in G$ such that $H'=gHg^{-1}$. Moreover, any subgroup $K\subset G$ with $|K|$ a power of $p$ is contained in a Sylow $p$-subgroup.
3. Let $s_p$ be the number of Sylow $p$-subgroups of $G$. Then $s_p\equiv1\bmod p$, and $s_p\mid |G|$ (or equivalently, $s_p\mid m=|G|/p^e$).
:::

We saw last time: if $s_p=1$, then the unique Sylow $p$-subgroup is a normal subgroup.

:::example
- $|G|=15$ $\Rightarrow$ $G$ contains exactly one subgroup of order 3 and one of order 5, both are normal, and $G\simeq H\times K\simeq\ZZ/15$.
- $|G|=21$ $\Rightarrow$ there is a unique subgroup of order 7 (normal), and either $G\simeq\ZZ/21$ or $G$ is a semidirect product of $\ZZ/7$ and $\ZZ/3$.
:::

For a $p$-group ($|G|=p^n$), Sylow tells us exactly nothing! Namely, a Sylow $p$-subgroup has $p^n$ elements, and the only such is $G$ itself. Thus, in the Sylow approach to classification, $p$-groups are the hardest to classify. In fact, the number of different $p$-groups grows dramatically with the exponent $n$! E.g. for $p=2$:

| order | number of groups |
|---|---|
| $2^1=2$ | 1 (cyclic) |
| $2^2=4$ | 2 ($\ZZ/4$, $\ZZ/2\times\ZZ/2$) |
| $2^3=8$ | 5 |
| $2^4=16$ | 14 |
| $2^5=32$ | 51 |

… and already 56092 for $2^8=256$.

A corollary of Sylow’s first theorem (existence of Sylow $p$-subgroups):

:::corollary
If $p\mid|G|$ and $p$ is prime, then $G$ contains an element of order $p$.
:::

:::proof
Let $H\subset G$ be a Sylow $p$-subgroup, and let $g\in H$ such that $g\ne e$. Since the order of $g$ divides $|H|=p^e$, it is $p^k$ for some $1\le k\le e$. Now $g^{p^{k-1}}$ has order $p$.
:::

## Proof of the first theorem

The first two theorems are proved by studying the action of $G$ on its subsets by left multiplication. The proof of Sylow’s first theorem uses two lemmas.

:::lemma
Given $n=p^e m$ with $p\nmid m$, we have $p\nmid\dbinom{n}{p^e}$.
:::

:::proof
$$
\binom{n}{p^e}=\frac{n(n-1)\cdots(n-p^e+1)}{p^e(p^e-1)\cdots1}=\prod_{k=0}^{p^e-1}\frac{p^em-k}{p^e-k}.
$$
The highest power of $p$ dividing $p^em-k$ or $p^e-k$ is exactly the highest power of $p$ dividing $k$ (look mod $p^e$!); hence the numerator and denominator have the same powers of $p$ in their prime factorization, and the end result has no powers of $p$.
:::

:::lemma
Let $U\subset G$ be any subset, and consider the action of $G$ on $\mathcal P(G)=\{\text{all subsets of }G\}$ by left multiplication. Then the stabilizer of $[U]\in\mathcal P(G)$,
$$
\operatorname{Stab}([U])=\{g\in G\mid gU=U\},
$$
has $|\operatorname{Stab}(U)|$ dividing $|U|$.
:::

:::proof
Let $H=\operatorname{Stab}(U)$; then $H$ acts on $U$ by left multiplication ($hU=U$ for all $h\in H$), and so $U$ is a union of orbits $\mathcal O_u=\{hu\mid h\in H\}=Hu$ for various $u\in U$. But each orbit is a (right) coset of $H$, and has $|\mathcal O_u|=|H|$. Since $U$ is a union of such orbits, $|H|$ divides $|U|$.
:::

Now we can give the **proof of Sylow’s first theorem** (existence of Sylow subgroups).

:::proof Proof of Sylow’s first theorem
Let $S=\{U\in\mathcal P(G)\mid |U|=p^e\}$: all subsets of $G$ with $p^e$ elements. Consider the action of $G$ on $S$ by left multiplication, $U\mapsto gU$, and partition $S$ into orbits for this action. By Lemma 1, $p\nmid|S|$, so there exists an orbit $\mathcal O_U\subset S$ such that $p\nmid|\mathcal O_U|$. Since $p^e$ divides $|G|=|\mathcal O_U|\,|\operatorname{Stab}(U)|$, we find that $p^e\mid|\operatorname{Stab}(U)|$.

But by Lemma 2, $|\operatorname{Stab}(U)|$ divides $|U|=p^e$. So $|\operatorname{Stab}(U)|=p^e$. We’re done: $\operatorname{Stab}(U)$ is a Sylow $p$-subgroup! (And in fact $U$ was a right coset of $\operatorname{Stab}(U)$.)
:::

## Proof of the second theorem

Next we prove **Sylow’s second theorem**, formulated as:

:::theorem Sylow’s second theorem
If $H\subset G$ is a Sylow $p$-subgroup and $K\subset G$ is any $p$-subgroup, then there exists a conjugate $H'=gHg^{-1}$ with $K\subset H'$.

(For $|K|=p^e$, this says all Sylow $p$-subgroups are conjugate.)
:::

:::proof
Let $C$ be the set of left cosets of $H$; then $G$ acts on $C$ (by left multiplication) transitively (i.e. there is only one orbit); $p\nmid|C|=\frac{|G|}{p^e}=m$; and there exists $c_0\in C$, namely $c_0=[H]$ itself, such that $\operatorname{Stab}(c_0)=H$. (Any $G$-action on a set with these properties would work just as well.)

Now restrict the action of $G$ on $C$ to a $p$-subgroup $K$. The $K$-action on $C$ has orbits of size dividing $|K|$, hence a power of $p$. Since $p\nmid|C|$, there is at least one fixed point (i.e. there exists $c\in C$ with $k\cdot c=c$ for all $k\in K$). Thus $K\subset\operatorname{Stab}(c)=H'$, which is conjugate to $\operatorname{Stab}(c_0)=H$ since $c,c_0$ are in the same orbit of $G$.

(Concretely: assume the coset $gH$ is fixed by $K$, i.e. $kgH=gH$ for all $k\in K$. Then for all $k\in K$, $g^{-1}kgH=g^{-1}gH=H$, so $g^{-1}kg\in H$, hence $k\in gHg^{-1}$. Thus $K\subset gHg^{-1}$.)
:::

## Normalizers and conjugate subgroups

Before we can prove the 3rd theorem, we need to discuss **normalizers and conjugate subgroups**.

:::question
Given a group $G$ and a subgroup $H$, what is the largest subgroup $K\subset G$ such that $H$ is normal inside $K$?
:::

Observe: the issue is whether $gHg^{-1}=H$. This might not hold for all $g\in G$, but needs to hold for all $g\in K$.

:::definition
The **normalizer** of a subgroup $H\subset G$ is
$$
N(H)=\{g\in G\mid gHg^{-1}=H\}.
$$
This is a subgroup of $G$, and for subgroups $H\subset K\subset G$, $H$ is normal in $K$ iff $K\subset N(H)$.
:::

:::example
$G=S_3$:
- $H=\{\id,\sigma=(1\,2\,3),\sigma^2\}=A_3\subset S_3$ $\Rightarrow$ $N(H)=G$ ($H$ is normal in $G$!), even though, for $g=$ a transposition, $g\sigma g^{-1}=\sigma^2\ne\sigma$; still $gHg^{-1}=H$ ✓.
- $H=\{\id,\tau\}\simeq\ZZ/2\subset S_3$ for $\tau$ a transposition $\Rightarrow$ $N(H)=H$. (Note: $gHg^{-1}=H\iff g\tau g^{-1}=\tau\iff g\in\{\id,\tau\}$.)
:::

The normalizer measures how close $H$ is to being normal in $G$: if it is, then $N(H)=G$.

$G$ acts by conjugation on the set of all of its subgroups. The orbit of $H$ is the set of its conjugate subgroups $gHg^{-1}\subset G$. (If $H$ is normal, then $\mathcal O_H=\{H\}$.) The stabilizer of $H$ is $\{g\in G\mid gHg^{-1}=H\}=N(H)$. So by orbit-stabilizer,
$$
|\mathcal O_H|=|G/N(H)|
$$
(and $\{\text{subgroups conjugate to }H\}\leftrightarrow\{\text{cosets of }N(H)\}$).

:::proposition
The number of subgroups conjugate to $H$ in $G$ is $|G/N(H)|$.
:::

## Proof of the third theorem

Now the **proof of Sylow’s third theorem** (the number of Sylow $p$-subgroups $s_p$ satisfies $s_p\mid m$ and $s_p\equiv1\bmod p$).

:::proof Proof of Sylow’s third theorem
Consider the action of $G$ on the set of Sylow $p$-subgroups by conjugation. By the 2nd theorem, this action is transitive (all Sylow $p$-subgroups are conjugate), and if $H\subset G$ is any Sylow $p$-subgroup, the stabilizer is $\{g\in G\mid gHg^{-1}=H\}=N(H)$ (the normalizer), and so
$$
s_p=|\text{orbit}|=\frac{|G|}{|N(H)|}.
$$
Since $H\subset N(H)\subset G$ are subgroups and $|H|=p^e$, $p^e\mid|N(H)|$, and hence
$$
s_p=\frac{|G|}{|N(H)|}\ \Big|\ \frac{|G|}{p^e}=m.
$$
Next, we restrict to $H$ the conjugation action on the set of all Sylow $p$-subgroups, and observe that $H$ itself is fixed ($hHh^{-1}=H$ for all $h\in H$), so this gives an orbit of size 1. We claim it’s the only one.

Indeed, let $H'$ be a Sylow $p$-subgroup of $G$ such that $hH'h^{-1}=H'$ for all $h\in H$ (orbit $=\{H'\}$). This means $H\subset N(H')$. But $|N(H')|$ is
$$
\begin{cases}
\text{a multiple of }|H'|=p^e,\\
\text{a divisor of }|G|=p^em,
\end{cases}
$$
so $H$ and $H'$ are Sylow $p$-subgroups of $N(H')$! By Sylow’s 2nd theorem, they’re conjugate subgroups of $N(H')$. However, $H'$ is normal in $N(H')$ (by definition!). Therefore $H=H'$. This shows the only orbit of size 1 for the action of $H$ by conjugation on the set of Sylow $p$-subgroups of $G$ is $\{H\}$ itself.

Since the size of an orbit of an $H$-action divides $|H|=p^e$, all other orbits have size divisible by $p$. We conclude that
$$
s_p=\#\{\text{Sylow }p\text{-subgroups}\}\equiv1\bmod p.
$$
:::

## Groups of order 12

One more example, to show that things can get more complicated quickly.

:::example Classify groups of order 12
:::solution
If $|G|=12$, then Sylow gives
- a subgroup $H\subset G$, $|H|=4$; the number of these is $s_2\in\{1,3\}$ ($s_2\mid3$, $s_2\equiv1\bmod2$);
- a subgroup $K\subset G$, $|K|=3$; the number is $s_3\in\{1,4\}$ ($s_3\mid4$, $s_3\equiv1\bmod 3$).

**At least one of these is normal.** Indeed, if $s_3=4$, then the nontrivial elements of $K_1,\dots,K_4$ all have order 3, and $K_i\cap K_j=\{e\}$ (its order divides 3 and is $<3$), so we have 8 elements of order 3. So there are at most 4 elements of order in $\{1,2,4\}$, hence $s_2=1$ and $H$ is normal.

**If both $H$ and $K$ are normal**, then $G\simeq H\times K$ (using $|G|=|H|\cdot|K|$, $H\cap K=\{e\}$; see last time), and so $G$ is abelian, one of
$$
\ZZ/4\times\ZZ/3\simeq\ZZ/12,\qquad(\ZZ/2\times\ZZ/2)\times\ZZ/3\simeq\ZZ/2\times\ZZ/6.
$$

**If $H$ is normal but $K$ isn’t**, consider the action of $G$ on $\{K_1,K_2,K_3,K_4\}$ by conjugation. Conjugation by a nontrivial element of $K_1$ maps $K_1$ to itself, but doesn’t fix any of the 3 others: indeed, recall the stabilizer of $K_i$ is $\{g\in G\mid gK_ig^{-1}=K_i\}=N(K_i)$, and by orbit-stabilizer,
$$
|N(K_i)|=\frac{|G|}{s_3}=\frac{12}{4}=3,
$$
so $N(K_i)=K_i$. So a nontrivial element of $K_1$ acts on $\{K_1,K_2,K_3,K_4\}$ by a 3-cycle permuting $\{K_2,K_3,K_4\}$, and similarly for the others. Hence the action of $G$ on $\{K_1,\dots,K_4\}$ gives a homomorphism $\varphi:G\to S_4$, sending the generators $y_i$ of the $K_i$ to 3-cycles. This implies $\Img(\varphi)\supset A_4$, hence $\Img(\varphi)=A_4$, and $G\simeq A_4$ ($\simeq$ the semidirect product $(\ZZ/2\times\ZZ/2)\rtimes\ZZ/3$).

**If $K$ is normal but $H$ isn’t**, then there are 2 subcases: $H\simeq\ZZ/4$ or $\ZZ/2\times\ZZ/2$!

- If $H\simeq\ZZ/4$: let $x\in H$ be a generator, and let $K=\{e,y,y^2\}$. Then $G\simeq K\rtimes H$ is determined by the conjugation action of $H$ on $K$, i.e. we need to know $xyx^{-1}\in K$. We can’t have $xyx^{-1}=e$ ($\Rightarrow y=e$) or $xyx^{-1}=y$ ($\Rightarrow$ $x$ and $y$ commute, $G\simeq H\times K$ abelian). So instead $xyx^{-1}=y^2\ (=y^{-1})$. Then $G$ is generated by $x,y$, with
  $$
  x^4=y^3=e\quad\text{and}\quad xy=y^2x.
  $$
  This group is unfamiliar to us: it is the semidirect product $\ZZ/3\rtimes\ZZ/4$, where $\ZZ/4$ acts on the normal subgroup $\ZZ/3$ by
  $$
  \ZZ/4\to\Aut(\ZZ/3)=\{\pm\id\},\qquad k\mapsto(-1)^k.
  $$
- If $H\simeq\ZZ/2\times\ZZ/2$: look at the conjugation action $H\xrightarrow{\ \varphi\ }\Aut(K)\simeq\ZZ/2$. Necessarily $\ker(\varphi)\simeq\ZZ/2$; denote by $z$ its generator, let $x\in H$ be such that $x,z$ generate $H$, and let $y$ be a generator of $K$. Then $G$ is generated by $x,y,z$ with
  $$
  \begin{cases}
  x^2=z^2=y^3=e,\\
  xz=zx & (\ZZ/2\times\ZZ/2),\\
  zy=yz & (z\in\ker\varphi),\\
  xy=y^2x & (xyx^{-1}=y^2).
  \end{cases}
  $$
  We can check this is actually $G\simeq D_6$. (The subgroup generated by $y$ and $z$ is $\simeq\ZZ/6$ and normal in $G$; take $y=$ rotation by $2\pi/3$, $z=$ rotation by $\pi$, $x=$ any reflection.)

Thus there are 5 isomorphism classes of groups of order 12:
$$
\ZZ/12,\quad \ZZ/2\times\ZZ/6,\quad A_4,\quad \ZZ/3\rtimes\ZZ/4,\quad D_6.
$$
:::
:::
