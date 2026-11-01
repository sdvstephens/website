---
course: math-55a
chapter: 6
section: 22
title: Group Actions, Burnside’s Lemma and the Class Equation
date: 2025-10-24
lecturer: Denis Auroux
source-pages: 1-5
---

## Group actions

(Artin §6.7–6.9)

:::definition
An **action** of a group $G$ on a set $S$ is a homomorphism $\rho: G\to\operatorname{Perm}(S)$. Equivalently, we have a map
$$
G\times S\to S,\qquad (g,s)\mapsto g\cdot s
$$
such that $e\cdot s=s$ for all $s\in S$, and $(gh)\cdot s=g\cdot(h\cdot s)$.
:::

This generalizes the idea of groups as symmetries of geometric objects. Understanding what sets a group $G$ acts on (and in what way) gives info about $G$!

:::definition
An action is **faithful** if $\rho$ is injective.
:::

(Otherwise, the group that “really” acts on $S$ is $G/\ker\rho$…)

:::definition
The **orbit** of $s\in S$ under $G$ is $O_s=G\cdot s=\{g\cdot s\mid g\in G\}\subset S$.
:::

Observe: $t\in O_s\iff\exists\, g\in G$ such that $g\cdot s=t$, and then $s=g^{-1}\cdot t\in O_t$. So the orbits of the $G$-action form a **partition** of $S=\bigsqcup O_s$.

Equivalently: the relation $s\sim t\iff\exists\, g\in G$ such that $g\cdot s=t$ is an equivalence relation:

- $s\sim s$ since $e\cdot s=s$;
- $s\sim t\Rightarrow\exists\, g$, $g\cdot s=t$; then $s=g^{-1}\cdot t$, so $t\sim s$;
- $s\sim t$ and $t\sim u\Rightarrow\exists\, g$, $g\cdot s=t$ and $\exists\, h$, $h\cdot t=u$; then $(hg)\cdot s=h\cdot(g\cdot s)=u$, hence $s\sim u$.

Orbits are the equivalence classes of this relation.

:::definition
An action is **transitive** if there is only one orbit, i.e. $\forall s,t\in S$, $\exists\, g$ such that $g\cdot s=t$.
:::

:::note
Given any $G$-action on $S$, by restriction we get a $G$-action separately on each orbit. Each of these is transitive (by definition), so we can break up any group action into a disjoint union of transitive actions!
:::

:::definition
- The **stabilizer** of $s\in S$ is $\operatorname{Stab}(s)=\{g\in G\mid g\cdot s=s\}$. This is a subgroup of $G$!
- The **fixed points** of $g\in G$ are the subset $S^g:=\{s\in S\mid g\cdot s=s\}$.
:::

:::proposition
If $s'=g\cdot s$ then $\operatorname{Stab}(s')=g\operatorname{Stab}(s)\,g^{-1}$. So: elements in the same orbit have conjugate stabilizers.
:::

:::proof
$h\cdot s=s\Rightarrow(ghg^{-1})\cdot gs=g(hs)=gs$, so $g\operatorname{Stab}(s)\,g^{-1}\subset\operatorname{Stab}(s')$. Conversely, the same argument for $s=g^{-1}s'$ gives $g^{-1}\operatorname{Stab}(s')\,g\subset\operatorname{Stab}(s)$, hence equality.
:::

:::example
Given a subgroup $H\subset G$, we have a set $G/H=\{\text{cosets } aH\}$. To avoid notation confusion, write $[H],[aH],\dots$ for elements of $G/H$.

$G$ acts on $G/H$ by left multiplication: $g\cdot[aH]=[gaH]$. This action is transitive ($ba^{-1}$ maps $[aH]$ to $[bH]$). $\operatorname{Stab}([H])=H$ itself, and $\operatorname{Stab}([aH])=aHa^{-1}$.
:::

**Claim:** this is what a general group action looks like when restricted to an orbit!

:::proposition
If $G$ acts on a set $S$, given $s\in S$, let $H=\operatorname{Stab}(s)\subset G$. Then
$$
\varepsilon: G/H\to O_s,\qquad [aH]\mapsto a\cdot s
$$
is a **bijection**, and **equivariant**, i.e. it intertwines the $G$-actions:
$$
\varepsilon\big(\underbrace{g\cdot[aH]}_{\text{action on }G/H}\big)=\underbrace{g\cdot\varepsilon([aH])}_{\text{action on }O_s\subset S}.
$$
:::

:::proof
- Well-defined: if $a'=ah\in aH$ then $a'\cdot s=a\cdot h\cdot s=a\cdot s$ ✓.
- Surjective by definition of the orbit $O_s=\{g\cdot s\mid g\in G\}$.
- Injective: $a'\cdot s=a\cdot s\iff a^{-1}(a'\cdot s)=a^{-1}(a\cdot s)=s\iff a^{-1}a'\in\operatorname{Stab}(s)=H\iff a'\in aH$.
:::

I.e. the action of $G$ on the orbit $O_s$ is the *same* as on $G/\operatorname{Stab}(s)$, and the action of $G$ on $S$ is obtained as a disjoint union over orbits.

:::corollary
If $G$ and $S$ are finite,
$$
|O_s|=\frac{|G|}{|\operatorname{Stab}(s)|}\quad\text{(since }O_s\simeq G/\operatorname{Stab}(s)\text{)},\qquad\text{and}\qquad |S|=\sum_{\text{orbits}}|O_s|\quad\text{(since }S=\textstyle\bigsqcup\text{orbits)}.
$$
:::

:::example
Let $G$ = the group of rotational symmetries of a tetrahedron, acting on $S$ = the set of faces ($|S|=4$).

The action is transitive, i.e. there is only one orbit, $|O|=|S|=4$. The stabilizer of an element $s\in S$ = the rotations mapping a face to itself $\Rightarrow|\operatorname{Stab}(s)|=3$, and so we find $|G|=|O_s|\cdot|\operatorname{Stab}(s)|=4\cdot 3=12$.

(In fact $G\simeq A_4\subset S_4$: the identity; 8 elements of order 3, the $120^\circ$ rotations about an axis through a vertex and the center of the opposite face $\leftrightarrow$ 3-cycles; 3 elements of order 2, the $180^\circ$ rotations about an axis through the midpoints of two opposite edges $\leftrightarrow$ $(12)(34)$ etc.)

![A tetrahedron with a 3-fold rotation axis through a vertex and the opposite face, and with a 2-fold rotation axis through the midpoints of two opposite edges](/notes/math-55a/figures/e7-tetrahedron-axes.svg)
:::

## Burnside’s lemma

Burnside’s lemma = a formula to count orbits of a group action.

Let $G$ be a finite group acting on a finite set $S$, and consider
$$
\Sigma=\{(g,s)\in G\times S\mid g\cdot s=s\}.
$$
Two ways of calculating $|\Sigma|$:

- as a sum over $G$: $\displaystyle|\Sigma|=\sum_{g\in G}|S^g|$ (recall: $S^g$ = fixed points of $g$);
- as a sum over $S$: $\displaystyle|\Sigma|=\sum_{s\in S}|\operatorname{Stab}(s)|$.

But, since all elements in an orbit $O$ have conjugate stabilizers, of size $|\operatorname{Stab}(s)|=|G|/|O|$ as seen above ($O_s\simeq G/\operatorname{Stab}(s)$), we can rewrite this by grouping over orbits:
$$
|\Sigma|=\sum_{s\in S}|\operatorname{Stab}(s)|=\sum_{O\text{ orbit}}\big(|O|\cdot|\operatorname{Stab}|\big)=\sum_{O\text{ orbit}}|O|\cdot\frac{|G|}{|O|}=|G|\cdot(\#\text{orbits})!
$$
Hence:

:::theorem Burnside’s lemma
$$
\#\text{orbits}=\frac{1}{|G|}\sum_{g\in G}|S^g|
$$
(the average number of fixed points of elements of $G$).
:::

:::example
How many ways are there to color the faces of a tetrahedron with 3 colors, up to symmetries?

:::solution
$S=\{\text{colorings of the faces}\}=\{\text{colors}\}^{\{\text{faces}\}}$, $|S|=3^4=81$. $G=A_4$, the rotations of the tetrahedron.

- $e$ = identity: $|S^e|=|S|=81$.
- $120^\circ$ rotation $g$ (8 such $g$’s): $S^g$ = colorings where the 3 sides around the axis have the same color $\Rightarrow|S^g|=\underbrace{3}_{\text{sides}}\times\underbrace{3}_{\text{bottom}}=9$.
- $180^\circ$ rotation (3 such $g$’s): $|S^g|=3\times 3=9$ (front/back one color, top/bottom one color).

$$
\Rightarrow n=\frac{1}{|G|}\sum_{g\in G}|S^g|=\frac{1}{12}(81+11\cdot 9)=\frac{180}{12}=15.
$$

(Could get this answer by different means… but e.g. coloring the *edges* of the tetrahedron would get harder without Burnside. Here: $\frac{1}{12}(3^6+8\cdot 9+3\cdot 3^4)=87$.)
:::
:::

## Actions of $G$ on itself

(Artin §7.1–7.2)

**1) $G$ acts on itself by left multiplication,** $g\cdot h=gh$.

This is transitive, with $\operatorname{Stab}(h)=\{e\}$ $\forall h\in G$, and fixed points $=\emptyset$ $\forall g\neq e$. It’s faithful, $G\hookrightarrow\operatorname{Perm}(G)$. So we get:

:::theorem
Every finite group $G$ is isomorphic to a subgroup of $S_n$, $n=|G|$.
:::

This is not very useful for understanding $G$, however. A more useful action:

:::outline Notes not reached in this lecture, covered at the start of [Lecture 24](/notes/math-55a/24-conjugacy-classes-symmetric-and-alternating-groups)
**2) $G$ acts on itself by conjugation:** $g$ acts by $h\mapsto ghg^{-1}$.

We’ve seen that this does define a group homomorphism $G\to\operatorname{Aut}(G)\subset\operatorname{Perm}(G)$, so it is indeed an action. Now we have a more interesting structure: the orbits of this action are the **conjugacy classes** in $G$, and the stabilizer of an element $h\in G$ is
$$
\operatorname{Stab}(h)=\{g\in G\mid gh=hg\}\qquad(ghg^{-1}=h\iff gh=hg),
$$
the subgroup of elements which commute with $h$. This is called the **centralizer** of $h$, $Z(h)\subset G$.

Note $\bigcap_{h\in G}Z(h)=Z(G)$, the center of $G$, is the kernel of the action (i.e. the subgroup of elements which act trivially). So: the action is trivial when $G$ is abelian; it is faithful iff $Z(G)=\{e\}$.

**How does this help?**

- The conjugacy classes form a partition of $G$, so
$$
\boxed{\;|G|=\sum_{\substack{C\subset G\\ \text{conj. class}}}|C|\;}\qquad(*)
$$
- For each conjugacy class, $|C_h|=\dfrac{|G|}{|Z(h)|}$ divides $|G|$.
- Moreover $|C_e|=1$ for the identity element, and $|C_h|=1$ iff $h\in Z(G)$.

$(*)$ is called the **class equation** of the group $G$.

This is extremely useful. For example:

:::theorem
If $|G|=p^2$ for $p$ prime, then $G$ must be abelian.
:::

:::proof
- Conjugacy classes have order $|C|\in\{1,p,p^2\}$, and $\sum|C|=p^2$. Thus the number of conjugacy classes such that $|C|=1$, i.e. of central elements of $G$, must be a multiple of $p$. Hence $p\mid|Z(G)|$.
- $Z(G)$ is a subgroup of $G$, so $|Z(G)|$ divides $p^2$: it’s $p$ or $p^2$. If $|Z(G)|=p^2$ then $G$ is abelian!
- Now assume $|Z(G)|=p$, and let $g\notin Z(G)$. Then $g$ commutes with itself and with $Z(G)$, so $Z(g)\supset Z(G)\cup\{g\}$, hence $|Z(g)|>p$. But $Z(g)$ is a subgroup of $G$, so $|Z(g)|\mid p^2$. This implies $Z(g)=G$, i.e. $g$ commutes with all elements of $G$, i.e. $g\in Z(G)$: contradiction. So $Z(G)=G$, $G$ is abelian. $\square$
:::

(Hence the only groups of order $p^2$ up to isomorphism are $\ZZ/p^2$ and $\ZZ/p\times\ZZ/p$.)

:::proposition
There are exactly 5 groups of order 8 up to isomorphism.
:::

We know the 3 abelian ones: $\ZZ/8$, $\ZZ/2\times\ZZ/4$, $(\ZZ/2)^3$. We know $D_4$ = the symmetries of the square. Finally: the quaternion group $\{\pm1,\pm i,\pm j,\pm k\}$ with
$$
i^2=j^2=k^2=-1,\qquad ij=k,\quad jk=i,\quad ki=j
$$
(multiplication by $-1$ flips signs).

Two ways to show there are only two nonabelian groups of order 8:

- **”By hand”** (see the HW hint): suppose $|G|=8$ and $G$ is not abelian.
  - Step 1: a group where every element has $g^2=1$ must be abelian, so there must be an element $a$ of order 4 (order 8 would make $G\simeq\ZZ/8$).
  - Step 2: the order 4 subgroup generated by $a$ is normal. Work out the possibilities for multiplication by an element $b$ such that $ab\neq ba$.
- **Using conjugacy and the class equation:**
  - Step 1: class equation $8=\sum|C|$, $|C|\in\{1,2,4,8\}$, $|C_e|=1$ $\Rightarrow Z(G)=\{g\mid |C_g|=1\}$ has order 2, 4, or 8. $8\Rightarrow G$ abelian. 4 is impossible by the same argument as for $p^2$ above. So $|Z(G)|=2$.
  - Step 2: if $g\notin Z(G)$ then $Z(g)\subsetneq G$, but $Z(G)\cup\{g\}\subset Z(g)$. So $|Z(g)|=4$, and $|C_g|=2$. Hence the class equation is
  $$
  8=\underbrace{1+1}_{e\text{ and the other central element}}+\underbrace{2+2+2}_{3\text{ other conj. classes}}.
  $$
  Then work out the possibilities!
:::
