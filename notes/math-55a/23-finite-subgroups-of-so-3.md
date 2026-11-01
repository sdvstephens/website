---
course: math-55a
chapter: 7
section: 23
title: Finite Subgroups of SO(3)
date: 2025-10-27
lecturer: Denis Auroux
source-pages: 1-4
---

**Recall:**

- An **action** of $G$ on a set $S$ is a map $G\times S\to S$, $(g,s)\mapsto g\cdot s$, such that $(gh)\cdot s=g\cdot(h\cdot s)$ and $e\cdot s=s$; or equivalently a homomorphism $G\to\operatorname{Perm}(S)$.
- Given $s\in S$, the **orbit** $O_s=\{g\cdot s\mid g\in G\}$ and the **stabilizer** subgroup $\operatorname{Stab}(s)=\{g\in G\mid g\cdot s=s\}$ are related by
$$
G/\operatorname{Stab}(s)\simeq O_s,\qquad [a\operatorname{Stab}]\mapsto a\cdot s
$$
($g\cdot s=g'\cdot s$ iff $g^{-1}g'\in\operatorname{Stab}(s)$).

**Today:** use these ideas to classify the *finite subgroups of $SO(3)=\{\text{rotations of }\RR^3\}$* (and hence classify regular polyhedra, as well).

## Rotations of $\RR^3$

**Recall:** an inner product space $(V,\langle\cdot,\cdot\rangle)$ $\rightsquigarrow$ the orthogonal group
$$
O(V)=\{T\in GL(V)\mid \langle Tu,Tv\rangle=\langle u,v\rangle\ \forall u,v\in V\}.
$$
Elements of $O(V)$ have $\det=\pm1$, and $SO(V)=\{T\in O(V)\mid\det T=1\}$ (transformations that preserve orthonormality *and* orientation).

We’ve seen: $T\in O(V)\Rightarrow\exists$ a decomposition $V=\bigoplus V_i$, $V_i\perp V_j$, $\dim V_i\in\{1,2\}$, $T(V_i)=V_i$ (this uses: there exists an invariant subspace, and if $W$ is invariant then so is $W^\perp$). If $\dim V_i=1$, $T_{|V_i}=\pm1$; if $\dim V_i=2$, $T_{|V_i}$ = a rotation.

- In dimension 3, either
$$
T\sim\begin{pmatrix}\pm1&&\\&\pm1&\\&&\pm1\end{pmatrix}\qquad\text{or}\qquad T\sim\left(\begin{array}{c|c}\pm1&\\\hline&\text{rotation}\end{array}\right).
$$
The condition $\det(T)=1$ narrows it down to
$$
\mathrm{Id},\qquad\begin{pmatrix}1&&\\&-1&\\&&-1\end{pmatrix},\qquad\left(\begin{array}{c|c}1&\\\hline&\text{rotation}\end{array}\right).
$$
$\Rightarrow$ every element of $SO(3)$ is a **rotation**; if $T\neq\mathrm{id}$, it has an axis (the $+1$-eigenspace = a line) and rotates by some angle in the plane $\perp$ the axis.
- Given a subset $\Sigma\subset\RR^3$, we can look at the symmetry group $\{T\in SO(3)\mid T(\Sigma)=\Sigma\}$. It could be infinite (e.g. if $\Sigma$ is a circle in a plane, all rotations with axis $\perp$ the plane will be symmetries), or it could be finite.

:::example
$\Sigma$ = a regular $n$-gon in a plane (centered at the origin):

- $n$ rotations (axis $\perp$ plane, angle $\frac{2\pi k}{n}$);
- $n$ flips = rotations by $\pi$ with axis $\subset$ plane.

$\Rightarrow$ this is isomorphic to $D_n$. (Special cases $n=1$, $n=2$: see the right of the figure.)

![A regular pentagon in a plane with a rotation axis perpendicular to the plane (rotation by 2 pi k over n), the same pentagon with a flip axis lying in the plane through a vertex and the center (rotation by pi), and the degenerate cases n = 1 (a loop with one marked vertex) and n = 2 (a lens with two marked vertices)](/notes/math-55a/figures/e7-ngon-symmetries.svg)
:::

:::example
To only keep $\ZZ/n\subset D_n$ in the above example, consider a cone on a regular $n$-gon in a plane:

![A pyramid on a regular pentagon, with an arrow showing rotation by 2 pi k over n about its axis](/notes/math-55a/figures/e7-cone-ngon.svg)
:::

:::example
Symmetries of regular polyhedra:

![The five regular polyhedra: tetrahedron, cube, octahedron, dodecahedron and icosahedron, with hidden edges dashed](/notes/math-55a/figures/e7-platonic-solids.svg)

- tetrahedron;
- cube and octahedron: these have the same symmetries, by duality: vertices $\leftrightarrow$ centers of faces (or: $P^*=\{v\in\RR^3\mid\langle v,u\rangle\le 1\ \forall u\in P\}$);
- dodecahedron (12 pentagonal faces) and icosahedron (20 triangular faces): duals, have the same symmetries.

These give respectively:

- $A_4$ (seen last time): the action on the vertices or faces of the tetrahedron;
- $S_4$ (HW 2!): the action on the 4 diagonals of the cube;
- $A_5$: the action on what?
:::

:::theorem
This is the complete list of finite subgroups of $SO(3)$:
$$
\ZZ/n,\quad D_n,\quad\text{tetrahedron }(A_4),\quad\text{cube }(S_4),\quad\text{icosahedron }(A_5).
$$
:::

## Poles

The key observation is that every $T\in SO(3)$, $T\neq\mathrm{id}$, is a rotation about some axis, hence fixes exactly two unit vectors $\pm v$, called the **poles** of $T$.

![A sphere with a rotation axis through it; the axis meets the sphere at the two poles v and minus v](/notes/math-55a/figures/e7-poles.svg)

For $G\subset SO(3)$ finite, let $P$ = the set of all poles of elements of $G$:
$$
P=\{v\in\RR^3\mid \|v\|=1\text{ and }\exists\, g\in G,\ g\neq 1\text{ such that }gv=v\}.
$$
Now, if $v$ is a pole of $g\in G$, and given any $h\in G$, $h(v)$ is a pole of $hgh^{-1}\in G$ (since $hgh^{-1}\cdot hv=hgv=hv$). So **$G$ acts on $P$!** This is the key to understanding the group $G$.

:::example
In the case of symmetry groups of regular polyhedra:
$$
P=\{\text{vertices}\}\cup\{\text{centers of faces}\}\cup\{\text{midpoints of edges}\}
$$
(normalized to unit vectors). These form 3 different orbits for the action of $G$ on $P$ (namely, $G$ acts separately on vertices, on faces, and on edges; for a regular polyhedron each of these actions is transitive).
:::

The next observation is that for $p\in P$, $\operatorname{Stab}(p)$ consists of the rotations with axis $\pm p$! These form an abelian, in fact cyclic, subgroup of $G$. So:
$$
\operatorname{Stab}(p)\cong\ZZ/r_p\quad\text{for some integer }r_p>1
$$
(since $p$ is a pole of some element of $G$, $\operatorname{Stab}(p)$ must be nontrivial). (I.e. the angles of rotations through $p$ form a finite subgroup of $\RR/2\pi\ZZ$, so they must be all multiples of $2\pi/r_p$.)

With this understood, the proof of the theorem is a counting argument.

:::proof
Let $G\subset SO(3)$ be a nontrivial finite subgroup, $P$ the set of poles as above. Let
$$
\Sigma=\{(g,p)\in G\times P\mid g\neq e,\ g(p)=p\}\qquad(\text{i.e. }p\text{ is a pole of }g).
$$
For each element of $G\setminus\{e\}$, there are exactly 2 poles. So $|\Sigma|=2|G|-2$. For each element $p\in P$, there are $r_p-1$ rotations in $G\setminus\{e\}$ fixing $p$. So:
$$
|\Sigma|=2|G|-2=\sum_{p\in P}(r_p-1).
$$
Now, the elements $p\in O$ of an orbit of $G$ have conjugate stabilizers ($\operatorname{Stab}g(p)=g\operatorname{Stab}(p)\,g^{-1}$), hence the same $r_p$’s: $r_{gp}=r_p$. Thus:
$$
2|G|-2=\sum_{O_i\text{ orbit}}|O_i|\,(r_i-1),\qquad\text{where }r_i=r_p\text{ for }p\in O_i.
$$
Now remember orbit/stabilizer: $|O_i|=\dfrac{|G|}{|\operatorname{Stab}|}=\dfrac{|G|}{r_i}$, so
$$
2|G|-2=\sum_{O_i\text{ orbit}}\frac{|G|}{r_i}(r_i-1),\qquad\text{i.e.}\qquad 2-\frac{2}{|G|}=\sum_{\text{orbits}}\Big(1-\frac{1}{r_i}\Big).
$$
The rhs gets $\ge 2$ quickly if there are too many orbits!! Each term is $\ge\frac12$ since $r_i\ge 2$, hence $\#\text{orbits}\le 3$.

We now analyze each case based on the number of orbits.

- **1 orbit:** impossible: lhs $\ge 1$ (since $|G|\ge 2$) vs. rhs $<1$.
- **2 orbits:** $2-\frac{2}{|G|}=1-\frac{1}{r_1}+1-\frac{1}{r_2}$, i.e. $\frac{2}{|G|}=\frac{1}{r_1}+\frac{1}{r_2}$.
  Since each $r_i=|\operatorname{Stab}p|$ divides $|G|$, we must have $r_1=r_2=|G|$. Hence $\operatorname{Stab}=G$, i.e. there are 2 poles $\pm p$, each fixed under all of $G$, and $G=\operatorname{Stab}(p)=\ZZ/r$, the cyclic subgroup of $\frac{2\pi k}{r}$ rotations with axis $\pm p$.
- **3 orbits:** $2-\frac{2}{|G|}=3-\frac{1}{r_1}-\frac{1}{r_2}-\frac{1}{r_3}$. Assume $2\le r_1\le r_2\le r_3$.
  Observe:
  $$
  \frac{1}{r_1}+\frac{1}{r_2}+\frac{1}{r_3}=1+\frac{2}{|G|}>1\ \Rightarrow\ \text{necessarily}\ \begin{cases} r_1=2 & \big(\text{else }\sum\frac{1}{r_i}\le\frac13+\frac13+\frac13=1\big),\\[2pt] r_2\le 3 & \big(\text{else }\sum\frac{1}{r_i}\le\frac12+\frac14+\frac14=1\big).\end{cases}
  $$
  (a) If $r_2=2$: then $2-\frac{2}{|G|}=3-\frac12-\frac12-\frac{1}{r_3}\Rightarrow r_3=\frac{|G|}{2}$. Thus $|O_3|=\frac{|G|}{r_3}=2$: two poles form an orbit. These poles are necessarily $\pm p$, and

  - half of $G$ = the rotations by $\frac{2\pi k}{r_3}$ about $\pm p$ (the stabilizer of $\pm p$);
  - the other half of $G$ = rotations by $180^\circ$ (since these poles have $r=2$) swapping $p\leftrightarrow -p$ (since $G$ preserves the orbit $\{\pm p\}$).

  $\Rightarrow G$ = a dihedral group.

  (b) If $r_2=3$: $\sum\frac{1}{r_i}>1\Rightarrow r_3\in\{3,4,5\}$. These 3 cases give the tetrahedron, cube, and icosahedron. $\square$
:::

:::note
For regular polyhedra:

- poles at midpoints of edges have $r=2$;
- poles at vertices: $r$ = the number of faces meeting there;
- poles at centers of faces: $r$ = the number of edges of the face.

| | $(r_1,r_2,r_3)$ |
|---|---|
| tetrahedron | $2,3,3$ |
| cube, octahedron | $2,3,4$ |
| dodecahedron, icosahedron | $2,3,5$ |

$$
\frac{2}{|G|}=\sum\frac{1}{r_i}-1\ \Rightarrow\ |G|=12,\ 24,\ 60.
$$
:::

## The icosahedral group is $A_5$

:::question
What is the 5-element set that the symmetries of the dodecahedron act on?
:::

**Answer:** the 20 vertices of a dodecahedron can be partitioned into 5 sets of 4 forming regular tetrahedra (in 2 different ways, which are mirror images but not related by a rotation). A rotation of the dodecahedron then permutes the 5 tetrahedra.

![A dodecahedron whose 20 vertices are colored in five colors, four vertices of each color; the four blue vertices are joined up to show that they form a regular tetrahedron](/notes/math-55a/figures/e7-dodecahedron-five-tetrahedra.svg)

(The notes show a picture of the five tetrahedra inside the dodecahedron, image by Greg Egan.)

- Rotations about centers of faces $\leftrightarrow$ 5-cycles (24 of them).
- Rotations about vertices $\leftrightarrow$ 3-cycles $(123)$ etc. (20 of them).
- Half-rotations about midpoints of edges $\leftrightarrow$ $(12)(34)$ etc. (15 of them).
