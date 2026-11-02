---
course: neuroscience
chapter: 7
section: G4
title: Neural Codes and Neural Rings: Topology and Algebraic Geometry
lecturer: Matilde Marcolli
source-pages: 1-62
---

This lecture asks what the firing patterns of a population of neurons can tell us about the space of stimuli they respond to. The first half uses topology (simplicial complexes, nerves, homology) and algebraic geometry (the *neural ring* and the *neural ideal* of a code), following Curto–Itskov–Veliz-Cuba–Youngs, Youngs, Curto–Youngs, Gross–Obatake–Youngs and Manin. The second half asks how good neural codes are as error-correcting codes, and describes the Chaudhuri–Fiete mechanism that uses Hopfield networks on expander graphs to pass from poor codes to good ones. The works cited are collected in the References at the end.

## Neural codes

### Codes and supports

Fix a set of neurons $[n]=\{1,\dots,n\}$. A **neural code** is a subset $\mathcal{C}\subset\FF_2^n$, where $\FF_2=\{0,1\}$. Its elements, the **codewords** (or “codes”) $c=(c_1,\dots,c_n)\in\mathcal{C}$, describe activation states of the neurons. The **support** of a codeword is
$$\operatorname{supp}(c)=\{i\in[n]\,:\,c_i=1\},$$
and the code has the collection of supports
$$\operatorname{supp}(\mathcal{C})=\{\operatorname{supp}(c)\,:\,c\in\mathcal{C}\}\subset 2^{[n]},$$
where $2^{[n]}$ is the set of all subsets of $[n]$.

This neglects information about the timing and rate of neural activity: we focus on the *combinatorial* neural code, which records only which neurons are active together.

### The simplicial complex of a code

:::definition Simplicial complex of a code
A subset $\Delta\subset 2^{[n]}$ is a **simplicial complex** if whenever $\sigma\in\Delta$ and $\tau\subset\sigma$, also $\tau\in\Delta$. A neural code $\mathcal{C}$ is **simplicial** if $\operatorname{supp}(\mathcal{C})$ is a simplicial complex. If it is not, the **simplicial complex of the neural code** $\mathcal{C}$ is
$$\Delta(\mathcal{C})=\{\sigma\subset[n]\,:\,\sigma\subseteq\operatorname{supp}(c)\ \text{for some } c\in\mathcal{C}\},$$
the smallest simplicial complex containing $\operatorname{supp}(\mathcal{C})$.
:::

![A simplicial complex built from a tetrahedron, triangles and edges glued along common faces, next to two triangles crossing each other, which do not form a simplicial complex](/notes/neuroscience/figures/h3-simplicial-complex.svg)

In a picture, the simplices of a complex are glued to one another along common faces, as on the left. On the right, two triangles cross in a region that is not a face of either, so the picture is not a simplicial complex.

### Receptive fields

Codewords come from patterns of neuron activity. Let $X$ be the space of stimuli, and for each neuron $i\in[n]$ let $f_i:X\to\RR_+$ be the average firing rate of the $i$-th neuron in response to the stimulus $x\in X$. The open sets
$$U_i=\{x\in X\,:\,f_i(x)>0\}$$
are the **receptive fields**; they are usually assumed *convex*. The **place field** of a neuron $i\in[n]$ is its preferred convex region of the stimulus space, where it has a high firing rate. (For orientation-selective neurons the firing rates are tuning curves, with a preference for a particular angle, and the receptive fields are intervals on a circle.) Codewords arise from the way the receptive fields overlap.

![Panel A: five tuning curves on a line, with the stimuli in a shaded interval activating neurons 1, 2, 3 and giving codeword 11100; panel B: five overlapping discs, with the shaded region inside discs 3 and 5 only giving codeword 00101](/notes/neuroscience/figures/h3-receptive-field-codes.svg)

In panel A the stimulus space is a line and five neurons have bump-shaped tuning curves; a stimulus in the shaded interval lies in the receptive fields of neurons 1, 2 and 3 and no others, so its activity pattern is the codeword $11100$. In panel B the receptive fields are five discs in the plane; a stimulus in the shaded region lies in $U_3$ and $U_5$ only, giving the codeword $00101$.

### The receptive field code

:::definition Receptive field code
Let $X$ be a stimulus space and $[n]=\{1,\dots,n\}$ a set of neurons with receptive fields $f_i:X\to\RR_+$ and convex sets $U_i=\{f_i>0\}$, and let $\mathcal{U}=\{U_1,\dots,U_n\}$ be the collection of (convex) open sets. The **receptive field code** is
$$\mathcal{C}(\mathcal{U})=\Big\{c\in\FF_2^n\,:\,\Big(\bigcap_{i\in\operatorname{supp}(c)}U_i\Big)\smallsetminus\Big(\bigcup_{j\notin\operatorname{supp}(c)}U_j\Big)\neq\emptyset\Big\},$$
the set of all binary codewords corresponding to stimuli in $X$, with the convention that the intersection over $\emptyset$ is $X$ and the union over $\emptyset$ is $\emptyset$.
:::

If $\bigcup_{i\in[n]}U_i\subsetneq X$, there are points of the stimulus space not covered by any receptive field, and the word $c=(0,0,\dots,0)$ is in $\mathcal{C}$. If $\bigcap_{i\in[n]}U_i\neq\emptyset$, the word $c=(1,1,\dots,1)\in\mathcal{C}$ records the points where all the neurons are activated.

## Reconstructing the stimulus space

The main question: if we know the code $\mathcal{C}=\mathcal{C}(\mathcal{U})$ without knowing $X$ and $\mathcal{U}$, what can we learn about the geometry of $X$? To what extent is $X$ reconstructible from $\mathcal{C}(\mathcal{U})$?

### Step one: every code is a receptive field code

:::proposition
Let $\mathcal{C}\subset\FF_2^n$ be a code with $m=\#\mathcal{C}$ codewords. There exist an $X\subseteq\RR^d$ and a collection $\mathcal{U}=\{U_1,\dots,U_n\}$ of (not necessarily convex) open sets $U_i\subset X$ such that $\mathcal{C}=\mathcal{C}(\mathcal{U})$.
:::

:::proof
List the codewords $c_i=(c_{i,1},\dots,c_{i,n})\in\mathcal{C}$, $i=1,\dots,m$. For each codeword $c_i$ choose a point $x_{c_i}\in\RR^d$ and an open neighborhood $\mathcal{N}_i\ni x_{c_i}$ such that $\mathcal{N}_i\cap\mathcal{N}_j=\emptyset$ for $i\neq j$. Take $X=\bigcup_{j=1}^m\mathcal{N}_j$ and $\mathcal{U}=\{U_1,\dots,U_n\}$ with
$$U_j=\bigcup_{c_k\,:\,j\in\operatorname{supp}(c_k)}\mathcal{N}_k .$$
If the zero codeword is in $\mathcal{C}$, its neighborhood $\mathcal{N}_0=X\smallsetminus\bigcup_jU_j$ is the set of outside points not captured by the code. By construction $\mathcal{C}=\mathcal{C}(\mathcal{U})$.
:::

### Caveat: convexity is a real restriction

We can always find $(X,\mathcal{U})$ with $\mathcal{C}=\mathcal{C}(\mathcal{U})$, but not always with the $U_i$ convex.

:::example
The code $\mathcal{C}=\FF_2^3\smallsetminus\{(1,1,1),(0,0,1)\}$ cannot be realized by a collection $\mathcal{U}=\{U_1,U_2,U_3\}$ with the $U_i$ convex.

Suppose it could: $U_i\subset\RR^d$ convex with $\mathcal{C}=\mathcal{C}(\mathcal{U})$. Then we know that

- $U_1\cap U_2\neq\emptyset$, because $(1,1,0)\in\mathcal{C}$;
- $(U_1\cap U_3)\smallsetminus U_2\neq\emptyset$, because $(1,0,1)\in\mathcal{C}$;
- $(U_2\cap U_3)\smallsetminus U_1\neq\emptyset$, because $(0,1,1)\in\mathcal{C}$.

Take points $p_1\in(U_1\cap U_3)\smallsetminus U_2$ and $p_2\in(U_2\cap U_3)\smallsetminus U_1$. Both are in $U_3$, which is convex, so the segment $\ell=\{tp_1+(1-t)p_2\,:\,t\in[0,1]\}$ lies in $U_3$.

- If $\ell$ passes through $U_1\cap U_2$, then $U_1\cap U_2\cap U_3\neq\emptyset$; but $(1,1,1)\notin\mathcal{C}$, a contradiction.
- Otherwise $\ell$ does not meet $U_1\cap U_2$, and then $\ell$ meets the complement of $U_1\cup U_2$ (the segment is connected, runs from $U_1$ to $U_2$, and $U_1$, $U_2$ are open). A point of $\ell$ there lies in $U_3$ alone, which would imply $(0,0,1)\in\mathcal{C}$, again a contradiction.
:::

![The two cases of the argument: on the left the segment from p1 to p2 crosses the overlap of U1 and U2; on the right it passes below their overlap and leaves both sets](/notes/neuroscience/figures/h3-convex-obstruction.svg)

## Topological constraints on the stimulus space

Codes $\mathcal{C}$ that can be realized as $\mathcal{C}=\mathcal{C}(\mathcal{U})$ with the $U_i$ convex put strong constraints on the geometry of the stimulus space $X$. There are two types of constraints:

1. constraints from the simplicial complex $\Delta(\mathcal{C})$;
2. other constraints from $\mathcal{C}$ that are not captured by $\Delta(\mathcal{C})$.

### The nerve of an open covering

:::definition Simplicial nerve
Let $\mathcal{U}=\{U_1,\dots,U_n\}$ be convex open sets in $\RR^d$ with $d<n$. The **nerve** $\mathcal{N}(\mathcal{U})$ is the simplicial complex in which $\sigma=\{i_1,\dots,i_k\}\in2^{[n]}$ is a simplex if and only if $U_{i_1}\cap\cdots\cap U_{i_k}\neq\emptyset$.
:::

The nerve is the simplicial complex of the receptive field code:
$$\mathcal{N}(\mathcal{U})=\Delta(\mathcal{C}(\mathcal{U})).$$

![Seven dashed discs with their nerve drawn on the disc centres: a solid tetrahedron, a triangle attached to it, and a path of two edges](/notes/neuroscience/figures/h3-nerve-of-discs.svg)

In this example of convex open sets $U_i$ and their nerve $\mathcal{N}(\mathcal{U})$, the four discs on the left have a common point and give a solid tetrahedron; two of them meet a fifth disc in a common region, giving a triangle; and two more overlapping pairs give two edges. A second example on the slides shows about fifteen dashed circles, with a nerve made of a ring of edges and triangles on the left, a path, and a group of four mutually overlapping circles on the right.

The complex $\mathcal{N}(\mathcal{U})$ is also known as the **Čech complex** of the collection $\mathcal{U}=\{U_1,\dots,U_n\}$ of convex open sets.

### Helly’s theorem

:::theorem Helly’s theorem
Let $U_1,\dots,U_k\subset\RR^d$ be convex, with $d<k$. If the intersection of every $d+1$ of the $U_i$ is nonempty, then also $\bigcap_{i=1}^kU_i\neq\emptyset$.
:::

The **$d$-skeleton** of a simplicial complex is the subcomplex of its simplices of dimension at most $d$ (subsets with at most $d+1$ elements).

:::corollary
For convex open sets $U_i\subset\RR^d$, the nerve $\mathcal{N}(\mathcal{U})$ is completely determined by its $d$-skeleton: it is the largest simplicial complex on $[n]$ with that given $d$-skeleton.
:::

![A simplicial complex on nine vertices with a solid tetrahedron and a filled triangle, next to its 1-skeleton, the graph of its vertices and edges](/notes/neuroscience/figures/h3-complex-and-1-skeleton.svg)

### The nerve theorem

:::theorem Nerve theorem
(Hatcher, *Algebraic Topology*, Corollary 4G.3.) For a collection $\mathcal{U}=\{U_1,\dots,U_n\}$ of convex open sets, the homotopy type of $X(\mathcal{U})=\bigcup_{i=1}^nU_i$ is the same as the homotopy type of the nerve $\mathcal{N}(\mathcal{U})$.
:::

As a consequence, $X(\mathcal{U})$ and $\mathcal{N}(\mathcal{U})$ have the same homology and homotopy groups (but not necessarily the same dimension).

:::note
The space $X(\mathcal{U})$ may not capture all of the stimulus space $X$ if the $U_i$ are not an open covering of $X$, that is, if $X\smallsetminus X(\mathcal{U})\neq\emptyset$.
:::

### Homology groups

Homology groups are very useful topological invariants, and they are computationally tractable.

:::definition Homology groups
Let $\mathcal{N}\subset2^{[n]}$ be a simplicial complex. The group of **$k$-chains** $C_k=C_k(\mathcal{N})$ is the abelian group spanned by the $k$-dimensional simplices of $\mathcal{N}$. The **boundary maps** $\partial_k:C_k\to C_{k-1}$ satisfy
$$\partial_{k-1}\circ\partial_k=0,$$
usually stated as $\partial^2=0$. The **cycles** are $Z_k=\operatorname{Ker}(\partial_k)\subset C_k$ and the **boundaries** are $B_{k+1}=\operatorname{Range}(\partial_{k+1})\subset C_k$; because $\partial^2=0$ there is an inclusion $B_{k+1}\subset Z_k$. The **homology groups** are the quotient groups
$$H_k(\mathcal{N},\ZZ)=\frac{\operatorname{Ker}(\partial_k)}{\operatorname{Range}(\partial_{k+1})}=Z_k/B_{k+1}.$$
:::

On an oriented edge, triangle and tetrahedron the boundary maps are
$$
\begin{aligned}
\partial_1[v_0,v_1]&=[v_1]-[v_0],\\
\partial_2[v_0,v_1,v_2]&=[v_1,v_2]-[v_0,v_2]+[v_0,v_1],\\
\partial_3[v_0,v_1,v_2,v_3]&=[v_1,v_2,v_3]-[v_0,v_2,v_3]+[v_0,v_1,v_3]-[v_0,v_1,v_2].
\end{aligned}
$$

![Boundary maps on an oriented edge, triangle and tetrahedron, each drawn next to its oriented boundary](/notes/neuroscience/figures/h3-boundary-maps.svg)

The chain complex and its homology can be pictured as below. Inside each $C_p$ sit the cycles $Z_p$, and inside those the boundaries; $\partial_{p+1}$ maps all of $C_{p+1}$ onto the boundaries in $C_p$ and maps the cycles $Z_{p+1}$ to $0$. (In the picture the image of $\partial_{p+1}$ in $C_p$ is labeled $B_p$, the more common indexing; above it was called $B_{p+1}$.)

![Nested ovals C, Z, B for three consecutive degrees p+1, p, p-1, all touching at 0, with the boundary maps sending each C onto the next B and each Z to 0](/notes/neuroscience/figures/h3-chain-complex.svg)

$$H_p(X,\ZZ)=\operatorname{Ker}(\partial_p:C_p\to C_{p-1})/\operatorname{Im}(\partial_{p+1}:C_{p+1}\to C_p).$$

## What else does the code tell us about the stimulus space?

The simplicial complex does not see everything. The following figure, from Curto–Itskov–Veliz-Cuba–Youngs (their Figure 3), shows four arrangements of three convex receptive fields $\mathcal{U}=\{U_1,U_2,U_3\}$, each having $\Delta(\mathcal{C}(\mathcal{U}))=2^{[3]}$. Square boxes denote the stimulus space $X$ in the cases where $U_1\cup U_2\cup U_3\subsetneq X$.

![Four arrangements A to D of three convex receptive fields: three discs in general position in a box; two discs inside an oval that is all of X; three nested discs in a box; two discs with a thin oval across their overlap](/notes/neuroscience/figures/h3-three-receptive-fields.svg)

- **(A)** $\mathcal{C}(\mathcal{U})=2^{[3]}$, including the all-zeros codeword $000$.
- **(B)** $\mathcal{C}(\mathcal{U})=\{111,101,011,001\}$, with $X=U_3$.
- **(C)** $\mathcal{C}(\mathcal{U})=\{111,011,001,000\}$.
- **(D)** $\mathcal{C}(\mathcal{U})=\{111,101,011,110,100,010\}$, and $X=U_1\cup U_2$.

The minimal embedding dimension (defined below) for the codes in panels A and D is $d=2$, while for panels B and C it is $d=1$. All four have the same $\Delta(\mathcal{C})=2^{[3]}$, because $(1,1,1)$ is a codeword in every case.

### Embedding dimension

:::definition Embedding dimension
The **minimal embedding dimension** of a code $\mathcal{C}$ is the minimal dimension $d$ for which $\mathcal{C}$ can be realized as $\mathcal{C}(\mathcal{U})$ with convex open sets $U_i\subset\RR^d$.

The **topological dimension** of a space is the minimum $d$ such that any open covering has a refinement (an open covering each of whose sets lies in some set of the original covering) in which no point is in more than $d+1$ open sets of the covering.
:::

![A square covered by six discs, with arrows marking a point in three of the discs and a point in two](/notes/neuroscience/figures/h3-covering-dimension.svg)

In this covering of a square by discs, some points lie in three of the discs (and none in more), others in two.

In the previous examples $\Delta(\mathcal{C})=2^{[3]}$ is the same, but the *embedding dimension* differs.

### Nontrivial inclusions

The main information carried by the code $\mathcal{C}=\mathcal{C}(\mathcal{U})$ lies in nontrivial inclusions.

- Some inclusion relations between intersections and unions are always trivially satisfied: for example $U_1\cap U_2\subset U_2\cup U_3$, because $U_1\cap U_2\subset U_2$.
- Other inclusion relations are *specific* to the structure of the collection $\mathcal{U}$ of open sets, and are not automatically satisfied: this is the *information* encoded in $\mathcal{C}(\mathcal{U})$.

It consists of all relations of the form
$$\bigcap_{i\in\sigma}U_i\subseteq\bigcup_{j\in\tau}U_j\qquad\text{for }\sigma\cap\tau=\emptyset,$$
including all the empty intersection relations
$$\bigcap_{i\in\sigma}U_i=\emptyset.$$

## Algebraic geometry of neural codes

Problem: how can we extract this information from $\mathcal{C}$ algorithmically, without having to construct $\mathcal{U}$? The key method is algebraic geometry: ideals and varieties.

### Rings and ideals

:::definition Ideals
Let $R$ be a commutative ring with unit. An **ideal** $I\subset R$ is an additive subgroup such that for $a\in I$ and for all $b\in R$ the product $ab\in I$. A set $S$ **generates** $I=\langle S\rangle$ if
$$I=\{r_1a_1+\cdots+r_na_n\,:\,r_i\in R,\ a_i\in S,\ n\in\NN\}.$$

- A **prime ideal** is an ideal $\wp\subsetneq R$ such that if $ab\in\wp$ then $a\in\wp$ or $b\in\wp$.
- A **maximal ideal** is an ideal $\mathfrak{m}\subsetneq R$ such that if $I$ is an ideal with $\mathfrak{m}\subset I\subset R$, then either $\mathfrak{m}=I$ or $I=R$. (Geometrically, maximal ideals correspond to points.)
- A **radical ideal** is an ideal $I$ such that $r^n\in I$ implies $r\in I$, for all $n$.
:::

A radical ideal $I$ (in the polynomial rings used here) has a **prime decomposition** $I=\wp_1\cap\cdots\cap\wp_n$ with the $\wp_i$ prime ideals.

### Affine algebraic varieties

:::definition Varieties and spectrum
Let $R=K[x_1,\dots,x_n]$ be the polynomial ring over a field $K$. An ideal $I\subset R$ determines the **variety**
$$V(I)=\{v\in K^n\,:\,f(v)=0,\ \forall f\in I\}.$$
The **spectrum** of a ring $R$ is its set of prime ideals,
$$\operatorname{Spec}(R)=\{\wp\subset R\,:\,\wp\text{ prime ideal}\}.$$
:::

Ideals $I\subseteq J$ give varieties $V(J)\subseteq V(I)$.

To model $n$ neurons with binary on/off states we take $K=\FF_2=\{0,1\}$; then $v=(v_1,\dots,v_n)\in\FF_2^n$ is a possible state of the set of neurons.

### The neural ring

:::definition Neural ring
Given a binary code $\mathcal{C}\subset\FF_2^n$ (a neural code), let $I=I_\mathcal{C}\subset\FF_2[x_1,\dots,x_n]$ be the **ideal** of polynomials vanishing on the codewords,
$$I_\mathcal{C}=\{f\in\FF_2[x_1,\dots,x_n]\,:\,f(c)=0,\ \forall c\in\mathcal{C}\}.$$
The quotient ring
$$R_\mathcal{C}=\FF_2[x_1,\dots,x_n]/I_\mathcal{C}$$
is the **neural ring** of $\mathcal{C}$.
:::

:::note
We are working over $\FF_2$, so $2\equiv0$, and $I_\mathcal{C}$ contains the relations $x_i(1-x_i)$. So in $R_\mathcal{C}$ all elements are idempotent, $y^2=y$ (the cross terms vanish): $R_\mathcal{C}$ is a Boolean ring, isomorphic to $\FF_2^{\#\mathcal{C}}$. It is still useful to keep the explicit coordinate functions $x_i$, which measure the activity of the $i$-th neuron.
:::

### The spectrum of the neural ring

The points $v\in\FF_2^n$ give maximal ideals of the polynomial ring $\FF_2[x_1,\dots,x_n]$,
$$\mathfrak{m}_v=\langle x_1-v_1,\dots,x_n-v_n\rangle,$$
and these are exactly the maximal ideals that contain the relations $x_i(1-x_i)$.  In a Boolean ring the prime ideal spectrum and the maximal ideal spectrum coincide.

:::proposition
For the neural ring $R_\mathcal{C}$, the spectrum is
$$\operatorname{Spec}(R_\mathcal{C})=\{\bar{\mathfrak{m}}_v\,:\,v\in\mathcal{C}\subset\FF_2^n\},$$
where $\bar{\mathfrak{m}}_v$ is the image in the quotient ring of the maximal ideal $\mathfrak{m}_v$ of $\FF_2[x_1,\dots,x_n]$.
:::

So the spectrum of the neural ring recovers the codewords of $\mathcal{C}$.

### The neural ideal

In general it is difficult to give explicit generators for the ideal $I_\mathcal{C}$, which is a problem for practical computational purposes. A closely related and more tractable ideal is the neural ideal $J_\mathcal{C}$.

:::definition Neural ideal
Given $v\in\FF_2^n$ (a possible state of a system of $n$ neurons), take the function
$$\rho_v=\prod_{i=1}^n(1-v_i-x_i)=\prod_{i\in\operatorname{supp}(v)}x_i\prod_{j\notin\operatorname{supp}(v)}(1-x_j),\qquad\rho_v\in\FF_2[x_1,\dots,x_n]$$
(as a function on $\FF_2^n$ it equals $1$ at $v$ and $0$ elsewhere). A binary code $\mathcal{C}\subset\FF_2^n$ determines the **neural ideal**
$$J_\mathcal{C}=\langle\rho_v\,:\,v\notin\mathcal{C}\rangle.$$
When $\mathcal{C}=\FF_2^n$ we have $J_\mathcal{C}=0$, the trivial ideal.
:::

The **ideal of Boolean relations** is
$$\mathcal{B}=\mathcal{B}_n=\langle x_i(1-x_i)\,:\,i\in[n]\rangle.$$

:::proposition
The ideals $I_\mathcal{C}$ and $J_\mathcal{C}$ are related by
$$I_\mathcal{C}=J_\mathcal{C}+\mathcal{B}=\langle\rho_v,\ x_i(1-x_i)\,:\,v\notin\mathcal{C},\ i\in[n]\rangle.$$
:::

### Neural ring relations

Notation: given open sets $\mathcal{U}=\{U_1,\dots,U_n\}$ and $\sigma,\tau\subset[n]$, set
$$U_\sigma:=\bigcap_{i\in\sigma}U_i,\qquad x_\sigma:=\prod_{i\in\sigma}x_i,\qquad(1-x_\tau):=\prod_{j\in\tau}(1-x_j).$$
Interpret the coordinates $x_i$ as functions on $X$:
$$x_i(p)=\begin{cases}1 & p\in U_i\\ 0 & p\notin U_i.\end{cases}$$

Inclusions give relations. If $U_\sigma\subset U_i\cup U_j$, then $x_\sigma=1$ implies either $x_i=1$ or $x_j=1$, so we get the relation
$$x_\sigma(1-x_i)(1-x_j)$$
(this polynomial vanishes at every point of $X$). In the same way, every inclusion $U_\sigma\subseteq\bigcup_{i\in\tau}U_i$ corresponds to a relation $x_\sigma\prod_{i\in\tau}(1-x_i)$, and the ideal $I_{\mathcal{C}(\mathcal{U})}$ is generated by them (these are the relations defining $R_\mathcal{C}$):
$$I_{\mathcal{C}(\mathcal{U})}=\Big\langle x_\sigma\prod_{i\in\tau}(1-x_i)\,:\,U_\sigma\subseteq\bigcup_{i\in\tau}U_i\Big\rangle.$$

### Pseudomonomials and canonical form

Consider such a relation $x_\sigma(1-x_\tau)$, with subsets $\sigma,\tau\subset[n]$ and $U_\sigma\subseteq\bigcup_{i\in\tau}U_i$. If $\sigma\cap\tau\neq\emptyset$ then $x_\sigma(1-x_\tau)\in\mathcal{B}$; if $\sigma\cap\tau=\emptyset$ then $x_\sigma(1-x_\tau)\in J_\mathcal{C}$.

:::definition Pseudomonomials and canonical form
A function of the form $f(x)=x_\sigma(1-x_\tau)$ with $\sigma\cap\tau=\emptyset$ is a **pseudomonomial**, and an ideal $J$ generated by pseudomonomials is a **pseudomonomial ideal**. A pseudomonomial $f\in J$ is **minimal** if there is no other pseudomonomial $g\in J$ with $\deg(g)<\deg(f)$ and $f=gh$ for some $h\in\FF_2[x_1,\dots,x_n]$. The **canonical form** of a pseudomonomial ideal is $J=\langle f_1,\dots,f_\ell\rangle$, with the $f_k$ all the minimal pseudomonomials in $J$.
:::

The neural ideal $J_\mathcal{C}=\langle\rho_v\,:\,v\notin\mathcal{C}\rangle$ is a pseudomonomial ideal. The ideal $I_\mathcal{C}$ is not, because of the Boolean relations.

### The canonical form of the neural ideal

A subset $\sigma\subseteq[n]$ is **minimal** for a property $P$ if $P$ is satisfied by $\sigma$ and not satisfied by any $\tau\subsetneq\sigma$.

:::theorem Canonical form of the neural ideal
Let $\mathcal{C}\subset\FF_2^n$ be a binary code, realized as $\mathcal{C}=\mathcal{C}(\mathcal{U})$ with $\mathcal{U}=\{U_1,\dots,U_n\}$ in $X$ (not necessarily convex). The canonical form $CF(J_\mathcal{C})$ of $J_\mathcal{C}$ consists of three types of relations:

1. $x_\sigma$, with $\sigma$ minimal for $U_\sigma=\emptyset$;
2. $x_\sigma(1-x_\tau)$, with $\sigma\cap\tau=\emptyset$, $U_\sigma\neq\emptyset$, $\bigcup_{i\in\tau}U_i\neq X$, and $\sigma,\tau$ minimal for $U_\sigma\subseteq\bigcup_{i\in\tau}U_i$;
3. $(1-x_\tau)$, with $\tau$ minimal for $X\subseteq\bigcup_{i\in\tau}U_i$.
:::

The Type 1 relations bound the minimal embedding dimension:
$$d\geq\max_{\sigma\,:\,x_\sigma\in CF(J_\mathcal{C})}\#\sigma-1.$$
(By Helly’s theorem, a minimal empty intersection of convex sets in $\RR^d$ involves at most $d+1$ of them.)

There are efficient algorithms to compute $CF(J_\mathcal{C})$ from $\mathcal{C}$, without passing through $\mathcal{U}$.

:::example Canonical forms for the four arrangements
For the four arrangements of three receptive fields shown earlier (Curto–Itskov–Veliz-Cuba–Youngs, Figure 3):

![Four arrangements A to D of three convex receptive fields, as before](/notes/neuroscience/figures/h3-three-receptive-fields.svg)

**A.** $CF(J_\mathcal{C})=\{0\}$. There are no relations here because $\mathcal{C}=2^{[3]}$.

**B.** $CF(J_\mathcal{C})=\{1-x_3\}$. This Type 3 relation reflects the fact that $X=U_3$.

**C.** $CF(J_\mathcal{C})=\{x_1(1-x_2),\ x_2(1-x_3),\ x_1(1-x_3)\}$. These Type 2 relations correspond to $U_1\subset U_2$, $U_2\subset U_3$ and $U_1\subset U_3$. The first two of these receptive field relationships imply the third; correspondingly, the third canonical form relation satisfies
$$x_1(1-x_3)=(1-x_3)\cdot[x_1(1-x_2)]+x_1\cdot[x_2(1-x_3)].$$

**D.** $CF(J_\mathcal{C})=\{(1-x_1)(1-x_2)\}$. This Type 3 relation reflects $X=U_1\cup U_2$, and implies $U_3\subset U_1\cup U_2$.
:::

## How good are neural codes as codes?

The rest of the lecture looks at neural codes from the point of view of coding theory:

- how one evaluates the properties of codes in coding theory;
- codes and code parameters, bounds;
- neural codes as error-correcting codes;
- neural mechanisms passing from bad to good codes (Chaudhuri–Fiete);
- expander graphs and codes;
- Hopfield equations and hyperplane arrangements;
- Hopfield networks;
- expander codes and Hopfield networks.

### When is a code a good code?

Error-correcting codes can be viewed as an optimization problem:

- optimize encoding: more choice of code words makes for better encoding;
- optimize decoding: sparse code words make for better decoding (better error correction: only one true code word near a corrupted one).

Take the alphabet $A=\FF_2$ (for binary codes) and a code $C\subset\FF_2^n$ (code words of length $n$), with code words $x=(x_1,\dots,x_n)\in C$. Codes are *unstructured*: we don’t necessarily require that the code be linear ($C\subset\FF_2^n$ is not necessarily an $\FF_2$-vector space).

:::definition Code parameters
Let $k=k(C):=\log_2\#C$, and let $[k]=[k(C)]$ be the integer part of $k(C)$, so that
$$2^{[k]}\leq\#C=2^k<2^{[k]+1}.$$
The **Hamming distance** between $x=(a_i)$ and $y=(b_i)$ in $C$ is
$$d((a_i),(b_i)):=\#\{i\in\{1,\dots,n\}\,:\,a_i\neq b_i\},$$
and the **minimal distance** $d=d(C)$ of the code is
$$d(C):=\min\{d(a,b)\,:\,a,b\in C,\ a\neq b\}.$$
The **code parameters** are

- $R=k/n$, the **transmission rate** of the code;
- $\delta=d/n$, the **relative minimum distance** of the code.
:::

Small $R$: fewer code words, easier decoding, but a longer encoding signal. Small $\delta$: too many code words close to the received one, more difficult decoding. The optimization problem is to increase both $R$ and $\delta$… how good can codes be?

### Bounds in the space of code parameters

Each code gives a **code point** $(R(C),\delta(C))$ in the square $[0,1]^2$. There is a tension between optimizing $R$ and optimizing $\delta$, which can be seen in several bounds.

- **Singleton bound:** $R+\delta\leq1$. (For a code of length $n$ the exact inequality is $k\leq n-d+1$, that is $R+\delta\leq1+1/n$, which becomes $R+\delta\leq1$ as $n\to\infty$.)
- Typical **random codes** (the Shannon Random Code Ensemble, SRCE: code words and letters generated uniformly and randomly as i.i.d. random variables) tend to *accumulate in the region below the Gilbert–Varshamov curve*.

The **Gilbert–Varshamov curve** is $R=\frac12(1-H_2(\delta))$, where $H_q$ is the $q$-ary entropy
$$H_q(\delta)=\delta\log_q(q-1)-\delta\log_q\delta-(1-\delta)\log_q(1-\delta).$$

The curve comes from the asymptotic behavior of volumes of balls in the Hamming distance as the code length $n\to\infty$, which is governed by the function $H_q(\delta)$. Writing $\mathrm{Vol}_q(n,d)$ for the number of words within Hamming distance $d$ of a given word of length $n$ over an alphabet of $q$ letters, the volume estimate is
$$q^{(H_q(\delta)-o(1))n}\leq\mathrm{Vol}_q(n,d=n\delta)=\sum_{j=0}^d\binom{n}{j}(q-1)^j\leq q^{H_q(\delta)n}.$$
This shows that the parameter $\delta$ of a code from the SRCE meets the GV bound with probability exponentially (in $n$) near $1$. The expected number of pairs of distinct code words within Hamming distance $d$ of each other, for a random code with $q^k$ words, is
$$E\sim\binom{q^k}{2}\mathrm{Vol}_q(n,d)\,q^{-n}\sim q^{n(H_q(\delta)-1+2R)+o(n)},$$
which is exponentially small when $2R<1-H_q(\delta)$.

### The asymptotic bound

There is another curve in the space of code parameters: the **asymptotic bound** $R=\alpha_q(\delta)$. Its existence was proved by Manin using spoiling operations on codes (operations, such as adding or deleting a coordinate, that turn a code into codes with worse parameters), in “What is the maximum number of points on a curve over $\FF_2$?” (1981).

There is no explicit expression for the asymptotic bound $R=\alpha_q(\delta)$. In fact the computability of this function is in question, because of its relation to Kolmogorov complexity (the length of the shortest program that produces a given object): see Manin, “A computability challenge: asymptotic bounds and isolated error-correcting codes”, and Manin–Marcolli, “Kolmogorov complexity and the asymptotic bound for error-correcting codes”.

:::proposition Known estimates on the asymptotic bound
**Plotkin bound:**
$$\alpha_q(\delta)=0\qquad\text{for }\delta\geq\frac{q-1}{q}.$$
**Singleton bound:** $R=\alpha_q(\delta)$ lies below $R+\delta=1$.

**Hamming bound:**
$$\alpha_q(\delta)\leq1-H_q\Big(\frac{\delta}{2}\Big).$$
**Gilbert–Varshamov bound:**
$$\alpha_q(\delta)\geq1-H_q(\delta).$$
:::

Unlike the Gilbert–Varshamov bound and random codes, the asymptotic bound has no statistical description.

**Characterization of the asymptotic bound.** The curve $R=\alpha_q(\delta)$ separates the region below it, where code points are dense and have infinite multiplicity, from the region above it, where code points are isolated and have finite multiplicity (Manin–Marcolli, “Error-correcting codes and phase transitions”).

:::definition Good codes
**Good codes** are codes near or above the asymptotic bound.
:::

The main source of good codes is algebro-geometric codes, built from algebraic curves over finite fields (Tsfasman–Vladut–Zink, “Modular curves, Shimura curves, and Goppa codes, better than Varshamov–Gilbert bound”). Another, unexpected, source of codes above the asymptotic bound is linguistics (Shu–Marcolli, “Syntactic structures and code parameters”; Marcolli, “Syntactic parameters and a coding theory perspective on entropy and complexity of language families”).

### Neural codes as error-correcting codes

Curto, Itskov, Morrison, Roth and Walker (“Combinatorial neural codes from a mathematical coding theory perspective”) compare the error-correcting properties of neural codes with those of random codes of the same length and size.

The probability of a neuron failing to fire in response to a stimulus is greater than the probability of a neuron firing in the absence of a stimulus. So the channel is modeled as a **binary asymmetric channel** (BAC), with false-positive probability $0<p<1/2$ of a $0$ flipping to $1$ and false-negative probability $0<q<1/2$ of the opposite flip, with $p\leq q$. (Here $q$ is a probability, not the size of an alphabet.) One also assumes that the error probability $p\leq s$ is smaller than the **sparsity** $s$ of the neural code,
$$s=s(C):=\frac{1}{\#C}\sum_{c\in C}\frac{w(c)}{n},$$
where $w(c)=\#\{i\,:\,c_i=1\}$ is the weight of $c$.

The overall probability of an error in transmission is $p(1-s)+qs$ (for words transmitted with equal probabilities). The **maximum likelihood decoder** uses $\mathbb{P}(r|c)$, the probability that $r$ is received if $c$ was transmitted:
$$c_{ML}=\operatorname*{argmax}_{c\in C}\mathbb{P}(r|c).$$
For symmetric errors $p=q$, this decoding is equivalent to the usual minimization of Hamming distance:
$$c_{ML}^{p=q}=\operatorname*{argmin}_{c\in C}d_H(c,r).$$

The observed performance of two-dimensional receptive field neural codes compared with random codes is shown on the slides in a plot from Curto et al., “ML decoding for 2D RF codes”. It plots the probability of correct decoding against the false-positive probability $p$, from $0.01$ to $0.06$. For the 2D receptive field codes it falls from about $0.74$ to about $0.59$; for shuffled codes and random codes of the same size it stays high, between about $0.97$ and $0.86$.

- Neural codes have *high redundancy*: low values of the transmission rate parameter $R(C)=n^{-1}\log_2\#C$.
- They also have low values of the relative minimum distance $\delta(C)$. Consider a pair $U_i\cap U_j\neq\emptyset$ of overlapping receptive field open sets: there are code words $c,c'$ with $c_i=1$ and $c'_j=1$, and a code word $\hat{c}$ with both $\hat{c}_i=\hat{c}_j=1$; such code words, which differ in few places, achieve the minimum of the Hamming distance.
- So neural codes lie below the Gilbert–Varshamov line (where the typical behavior of random codes is located).
- If an error-tolerance threshold is introduced between the original code word and the decoded one, then error correction becomes more similar to the case of random codes.

### Most neural codes are not good codes, but “rely on” good codes

In “Error-correcting codes and neural networks”, Manin considers models of the encoding of the stimulus space via error-correcting codes.

- Computing the code parameters of typical neural codes corresponding to visual stimuli gives codes with a very low position in the space of code parameters (not good codes): the combinatorics of the covering can make the minimal Hamming distance between code words small.
- Auxiliary codes are involved in the formation of “place maps” in the brain, and experiments show that these codes have signatures of “criticality” (Nonnenmacher–Behrens–Berens–Bethge–Macke, “Signatures of criticality arise in simple neural models with correlations”; Tkačik–Mora–Marre–Amodei–Palmer–Berry–Bialek, “Thermodynamics and signatures of criticality in a network of neurons”).

In this paper Manin proposes that the “criticality” behavior of the neural codes involved in place field maps is related to their position as “good codes” near the asymptotic bound. The idea is based on a characterization of the asymptotic bound for error-correcting codes via Kolmogorov complexity, and on another characterization as a phase transition, obtained in Manin–Marcolli, “Kolmogorov complexity and the asymptotic bound for error-correcting codes”, and Manin–Marcolli, “Error-correcting codes and phase transitions”. In turn, criticality can be characterized as the behavior of a system near a phase transition, and codes weighted by a probability distribution based on Kolmogorov complexity have a phase transition at the asymptotic bound.

## From bad to good neural codes via expander graphs

Rishidev Chaudhuri and Ila Fiete (“Bipartite expander Hopfield networks as self-decoding high-capacity error correcting codes”, NeurIPS 2019) describe a neural mechanism that passes from the “bad codes” of open coverings of place fields to “good codes”, via expander graphs.

- Hopfield networks are used as models for neural memory (error correction through dynamics).
- Hopfield networks with exponentially many robust stable states are constructed via expander codes.

Their schematic shows a large population of neurons with “sparse transient activation” (a few active cells scattered among many), connected by sparse bipartite wiring to a smaller row of neurons labeled “dense stable coding core”, about half of which are active.

### First step: binary Hopfield networks

:::definition Binary Hopfield network
A **binary Hopfield network** is a model of memory storage and retrieval in neuronal networks, by analogy with spin glass models in statistical physics (systems of many interacting $\pm1$ “spins”). A population of $N$ neurons $S_i$ each has two possible states $S_i=\pm1$, firing or not firing (in a fixed time interval $\Delta t$). The discrete dynamics, with weight matrix $W_{ij}$ assumed symmetric ($W_{ij}=W_{ji}$), is
$$S_i(n+1)=\operatorname{sign}\Big(\sum_jW_{ij}S_j(n)\Big),$$
with the update rule implemented on a single $S_i$ at a time: either maintaining its value or flipping.
:::

The **energy functional** of the network is
$$\mathcal{E}=-\sum_{ij}W_{ij}S_iS_j.$$

:::proposition
$\mathcal{E}$ is a Lyapunov function of the dynamics (a quantity that never increases along the dynamics): it decreases under the flipping of a single $S_i$ under the update rule.
:::

:::proof
Suppose $S_i(n+1)=-S_i(n)$ and $S_j(n+1)=S_j(n)=S_j$ for $j\neq i$. Then
$$
\begin{aligned}
\mathcal{E}(n+1)-\mathcal{E}(n)&=-2\sum_jW_{ji}S_j\big(S_i(n+1)-S_i(n)\big)\\
&=-4\sum_jW_{ji}S_jS_i(n+1)=-4\Big(\sum_jW_{ji}S_j\Big)\operatorname{sign}\Big(\sum_jW_{ji}S_j\Big)<0,
\end{aligned}
$$
using the update rule and the symmetry of $W$.
:::

So binary Hopfield dynamics flows toward energy minima.

### Memory storage and retrieval

The idea is that the weight matrix $W_{ij}$ is determined by a given set of patterns one wants to store in the network: a set of $M$ **patterns**, binary strings $\{\pi_i^a\}_{a=1,\dots,M,\ i=1,\dots,N}$ satisfying $\sum_i\pi_i^a=0$.

:::definition Hebbian learning rule
Take weights of the form
$$W_{ij}=\frac1N\sum_{a=1}^M\pi_i^a\pi_j^a.$$
:::

Compare a state $S_i$ with one of the patterns $\pi_i^a$ by measuring the **overlap**
$$\mu^a=\frac1N\sum_i\pi_i^aS_i.$$
It has maximum value $+1$ when $S_i$ and $\pi_i^a$ match completely, minimum value $-1$ for the opposite pattern, and values $\sim0$ for low correlation.

The update rule of the binary Hopfield network becomes
$$\sum_jW_{ij}S_j=\frac1N\sum_{j,a}\pi_i^a\pi_j^aS_j=\sum_a\pi_i^a\mu^a,$$
and the energy
$$\mathcal{E}=-N\sum_a(\mu^a)^2$$
has minima at the $M$ patterns (where the overlap is maximal) and at their opposites. Initializing the dynamics close to one of the stored patterns causes the dynamics to reconstruct the pattern, by flowing to the corresponding energy minimum.

In the case of a single pattern $\pi_i$, the pattern is a fixed point of the dynamics:
$$\operatorname{sign}\Big(\sum_jW_{ij}\pi_j\Big)=\operatorname{sign}\Big(\frac1N\sum_j\pi_i\pi_j\pi_j\Big)=\operatorname{sign}(\pi_i)=\pi_i.$$
This is not always so for multiple patterns:
$$
\begin{aligned}
\operatorname{sign}\Big(\sum_jW_{ij}\pi_j^a\Big)&=\operatorname{sign}\Big(\frac1N\sum_{j,b}\pi_i^b\pi_j^b\pi_j^a\Big)\\
&=\pi_i^a\,\operatorname{sign}\Big(1+\frac1N\sum_{j,\,b\neq a}\pi_i^b\pi_i^a\pi_j^b\pi_j^a\Big),
\end{aligned}
$$
since $\sum_j\pi_j^a\pi_j^a=N$ and $\pi_i^a\pi_i^a=1$.

Hopfield networks with continuous parameters will be discussed later.

### Second step: expander graphs

**Expander graphs** are sparse graphs (few edges) with strong connectivity properties (many paths between nodes, and short ones). Being both highly connected and sparse, they exhibit pseudo-random behavior: a random walk through the graph gets lost quickly, which is good for stochastic and diffusion processes. Their geometric property is that every subset of vertices that is not “too large” has a “large” boundary (hence “expander”).

![An expander-like graph on ten vertices with three edges at each vertex, next to a poorly connected graph made of two clusters joined by one edge](/notes/neuroscience/figures/h3-expander-vs-not.svg)

:::definition Expansion constant
For two sets of vertices $S,T$ of a graph $G$, let $E(S,T)$ be the set of edges of $G$ with one end-vertex in $S$ and the other in $T$, and let $\partial S=E(S,G\smallsetminus S)$ be the “boundary” of the region with vertex set $S$. The **expansion constant** of $G$, with vertex set $V$ of size $n$, is
$$h(G):=\min\Big\{\frac{\#\partial S}{\#S}\,:\,S\subset V,\ \#S\leq n/2\Big\}.$$
:::

This is the graph-theoretic analog of the Cheeger constant of an $n$-dimensional Riemannian manifold $M$,
$$h(M):=\inf_X\frac{V_{n-1}(X)}{\min\{V_n(M_1),V_n(M_2)\}},$$
the infimum over all $(n-1)$-dimensional submanifolds $X\subset M$ that decompose $M=M_1\cup_XM_2$. The constant $h(M)$ measures whether the manifold $M$ has bottlenecks, and so does $h(G)$. It is related to the spectrum of the graph Laplacian.

:::definition Expander property
Let $N=\#V(G)$, $\alpha>1$ and $0<\gamma<1$. The graph $G$ is a **$(\gamma,\alpha)$-expander** if for $S\subset V(G)$
$$\#S\leq\gamma N\implies\#\partial S\geq\alpha\,\#S.$$
:::

This is often taken with $\gamma=1/2$, as in $h(G)$ above. A good expander graph has a large expansion constant and low vertex degrees.

:::definition Bipartite expander graphs
Let $G$ be a bipartite graph whose input vertices all have the same valence $\deg(v)=z$. Then $G$ is a **$(\gamma,1-\epsilon)$-expander** if all subsets $S$ of input vertices with $\#S\leq\gamma N$ have
$$\#N(S)=\#\partial S>(1-\epsilon)\,z\,\#S,$$
where $N(S)$ is the set of neighbors of $S$. A particular case is that of the $(z,k)$-biregular graphs, where $z$ is the valence of the input set and $k$ the valence of the output set.
:::

![A bipartite graph: three input vertices S, each with three edges, reach seven of the eight output vertices, the neighborhood N(S)](/notes/neuroscience/figures/h3-bipartite-expander.svg)

### Bipartite graphs and linear codes

:::definition Linear codes and parity checks
A binary $[n,k,d]_2$-code $C\subset\FF_2^n$ (length $n$, minimum distance $d$) is **linear** if $C$ is a linear subspace of the $\FF_2$-vector space $\FF_2^n$; then $k=\dim_{\FF_2}(C)$. A **parity-check matrix** $H$ of $C$ is an $(n-k)\times n$ matrix of rank $n-k$ over $\FF_2$ with
$$C=\{x\in\FF_2^n\,:\,Hx=0\}.$$
:::

The matrix $H$ describes the linear code in terms of a bipartite graph, with one vertex for each digit $x_j$, one vertex for each row of $H$, and an edge when $H_{ij}=1$.

:::example
The parity-check matrix
$$H=\begin{pmatrix}1&0&1&1&0&0&1\\1&1&0&1&0&1&0\\1&1&1&0&1&0&0\end{pmatrix}$$
imposes the code constraints
$$x_1+x_3+x_4+x_7=0,\qquad x_1+x_2+x_4+x_6=0,\qquad x_1+x_2+x_3+x_5=0,$$
and gives the bipartite graph

![Bipartite graph with seven variable nodes x1 to x7 joined to three check nodes, one for each of the constraints x1+x3+x4+x7=0, x1+x2+x4+x6=0, x1+x2+x3+x5=0](/notes/neuroscience/figures/h3-tanner-graph.svg)
:::

### Tanner codes

:::definition Tanner code
Start with a linear binary code $C_0\subset\FF_2^d$ with code parameters $(R_0,\delta_0)$ (not necessarily a good code). Let $G$ be a bipartite graph with $n$ inputs and $m$ outputs that is right-$d$-regular (all output vertices have the same valence $d$). The **Tanner code** $T(G,C_0)\subset\FF_2^n$ is
$$T(G,C_0)=\{x=(x_v)_{v\in V_{in}(G)}\,:\,x|_{N(v')}\in C_0,\ \forall v'\in V_{out}(G)\},$$
where $x|_{N(v')}$ is the restriction of $x$ to the $d$ neighbors of $v'$.
:::

:::proposition
The code parameters of the Tanner code satisfy
$$R\geq1-\frac{md}{n}(1-R_0)\qquad\text{and}\qquad\delta\geq\gamma,$$
where the $\delta$-estimate holds if $G$ is $(c,d)$-biregular with $c\geq3$ and a $(\gamma,c(1-\epsilon))$-expander, and $\epsilon<1-1/d_0$ for $\delta_0=d_0/d$.
:::

(But regularity assumptions on expander graphs are not so realistic for applications to neural codes.)

### Usual Hopfield networks

:::definition Hopfield network
Take $N$ neurons $x_i$ with binary values, detecting whether the neurons are active or inactive in the $n$-th time interval. The network has discrete dynamics
$$x_i(n+1)=\begin{cases}1 & \text{if }\sum_jW_{ij}x_j(n)+\theta_i>0\\ 0 & \text{if }\sum_jW_{ij}x_j(n)+\theta_i\leq0,\end{cases}$$
with activation thresholds $-\theta_i$ and weight matrix $W_{ij}$, and energy functional
$$E(x)=-\frac12\sum_{i,j}W_{ij}x_ix_j-\sum_i\theta_ix_i.$$
The discrete update rule of the dynamics changes the state of a neuron and accepts the change if it decreases the energy.
:::

### Higher Hopfield networks from linear codes

Let $C$ be a linear code with constraints specified by the parity check matrix $H$, represented as a bipartite graph $G$: the set of (input) nodes is the $n$ digits of the code words (code length $n$), and the set of (output) nodes is the linear constraints imposed by the parity check matrix (codimension $n-k$),
$$\sum_{v\in N(v')}x_v=0\qquad\text{for }v'\in V_{out}(G).$$
Write the parity check constraints multiplicatively, with spins $s_j=e^{\pi\mathrm{i}x_j}\in\{\pm1\}$:
$$\sum_{j\,:\,H_{ij}=1}x_j=0\implies\prod_{j\,:\,H_{ij}=1}s_j=1.$$
Then the energy functional
$$E(s)=-\sum_i\prod_{j\,:\,H_{ij}=1}s_j$$
is minimized at the $x_j$ satisfying the $H$-constraints.

The interactions $\prod_{j:H_{ij}=1}s_j$ of this *higher* Hopfield network couple a whole simplex of neurons (all the $j$ with $H_{ij}=1$) instead of a pair of graph vertices. The construction below reduces them to usual Hopfield networks.

- $N'=\#V_{out}(G)$ is the number of parity-check constraints.
- Assume the $v'\in V_{out}(G)$ have valence $\deg(v')=z_C$.
- The graph $G$ has the $(\gamma,(1-\epsilon))$-expander property if for $S\subset V_{in}(G)$ with $\#S\leq\gamma N$ the boundary $\partial S=N(S)\subset V_{out}(G)$ has $\#N(S)\geq c(1-\epsilon)\#S$, with $c$ the valence of the input vertices.
- Since $V_{out}(G)$ is the set of linear constraints of $C$ and $V_{in}(G)$ the set of variables, the expander property means that a sufficiently small subset $S$ of variables participates in a significant part of the linear constraints.
- The $z_C=\#N(v')$ input neurons in $V_{in}(G)$ connected to $v'$ can take $2^{z_C}$ possible states $\sigma=(x_v)_{v\in N(v')}$.
- Fix a set $\Sigma=\{\sigma_1,\dots,\sigma_{N'}\}=\{\sigma_{v'}\}_{v'\in V_{out}(G)}$ of such states $\sigma_{v'}=(x_{v,v'})_{v\in N(v')}$, with the property that any two $\sigma_i,\sigma_j$, $i\neq j$, in $\Sigma$ differ in at least two digits.

### The “glomerulus” structure

This gives a “constraint node network” $G_{v'}$ with at most $2^{z_C-1}$ nodes (a set of words of length $z_C$, any two of which differ in at least two digits, has at most $2^{z_C-1}$ elements), all with shared inputs from the vertices of $N(v')$: a **glomerulus** (node Hopfield network).

![Two glomeruli, each a node Hopfield network of 2^(z_C-1) = 8 units around a central node, each reading z_C = 4 input neurons from the row below](/notes/neuroscience/figures/h3-glomerulus.svg)

:::definition Energy functional
The network has energy functional
$$E(x,y)=-\Big(x^tUy+\theta^ty+\frac12y^tWy\Big),$$
where $x=(x_v)_{v\in V_{in}(G)}$ and $y=(y_{v'})_{v'\in V_{out}(G)}$, and $U=(U_{v,v'})$, with $v\in V_{in}(G)$ and $v'\in V_{out}(G)$, is
$$U_{v,v'}=\begin{cases}1 & x_{v,v'}=1\\ -1 & x_{v,v'}=0.\end{cases}$$
The vector $\theta=(\theta_{v'})_{v'\in V_{out}(G)}$ is given by
$$\theta_{v'}=\deg(v')-\sum_{v\in N(v')}x_{v,v'},$$
with $\deg(v')=z_C$, and $W$ is the $(N'\times N')$-matrix with zeros on the diagonal and all other entries equal to $-(z_C-1)$: inhibitory connections between constraint neurons.
:::

The **energy minima** are given by $x=\sigma_{v'}$ and $y_u=\delta_{v',u}$.

- If a neuron within the node Hopfield network $G_{v'}$ receives input matching the configuration $\sigma_{v'}$ (its “preferred state”), it becomes active: this is the energetically preferred configuration, because of the $U$-term in the energy.
- It suppresses the other neurons in $G_{v'}$, because of the inhibition $W$-term.
- If the input does not match any $\sigma_{v'}$, the configuration has higher energy.
- Minimum energy states occur when the input neuron configuration satisfies all the linear constraints (and the corresponding constraint node Hopfield networks are active).
- The total number of minimum energy states grows exponentially with the size of the network.
- For sufficiently large $N,N'$ the network (with all the nodes of the constraint node Hopfield networks $G_{v'}$ and all the input nodes of $G$) is sparse and has good expander properties.
- Energy-based decoding: flips violate parity check constraints and increase the energy, so the number of errors can be read off from the energy value.

### As a brain model

Chaudhuri–Fiete propose this as a model of the brain.

- The bipartite graph has neurons as the input nodes, and output nodes representing small networks of neurons interacting competitively with each other through inhibition.
- The size of these small networks at the output nodes is bounded ($2^{z_C-1}$), independently of the sizes $N,N'$ of the vertex sets of the bipartite graph.
- Input patterns in a very high-dimensional space (possibly the neocortex) are mapped to the exponentially many stable states of a bipartite expander Hopfield network (possibly the hippocampus).
- These stable states provide memory labels for patterns that the network can retrieve.
- The expander codes associated to these networks have good code properties: a possible mechanism for passing from the bad error-correcting properties of neural codes to good codes.

## References

**References for the lecture**

- C. Curto, V. Itskov, A. Veliz-Cuba, N. Youngs, *The neural ring: an algebraic tool for analyzing the intrinsic structure of neural codes*, Bull. Math. Biol. 75 (2013), no. 9, 1571–1611.
- N. Youngs, *The Neural Ring: using Algebraic Geometry to analyze Neural Codes*, arXiv:1409.2544.
- Yu. I. Manin, *Neural codes and homotopy types: mathematical models of place field recognition*, Mosc. Math. J. 15 (2015), no. 4, 741–748.
- C. Curto, N. Youngs, *Neural ring homomorphisms and maps between neural codes*, arXiv:1511.00255.
- E. Gross, N. K. Obatake, N. Youngs, *Neural ideals and stimulus space visualization*, arXiv:1607.00697.
- Yu. I. Manin, *Error-correcting codes and neural networks*, Selecta Math. (N.S.) 24 (2018), no. 1, 521–530.

**Also cited**

- A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002 (Corollary 4G.3).
- Yu. I. Manin, *What is the maximum number of points on a curve over $\FF_2$?*, J. Fac. Sci. Tokyo, IA, Vol. 28 (1981), 715–720.
- Yu. I. Manin, *A computability challenge: asymptotic bounds and isolated error-correcting codes*, arXiv:1107.4246.
- Yu. I. Manin, M. Marcolli, *Kolmogorov complexity and the asymptotic bound for error-correcting codes*, J. Differential Geom. 97 (2014), no. 1, 91–108.
- Yu. I. Manin, M. Marcolli, *Error-correcting codes and phase transitions*, Mathematics in Computer Science 5 (2011), 133–170.
- M. A. Tsfasman, S. G. Vladut, Th. Zink, *Modular curves, Shimura curves, and Goppa codes, better than Varshamov–Gilbert bound*, Math. Nachr. 109 (1982), 21–28.
- K. Shu, M. Marcolli, *Syntactic structures and code parameters*, Math. Comput. Sci. 11 (2017), no. 1, 79–90.
- M. Marcolli, *Syntactic parameters and a coding theory perspective on entropy and complexity of language families*, Entropy 18 (2016), no. 4, paper 110.
- C. Curto, V. Itskov, K. Morrison, Z. Roth, J. L. Walker, *Combinatorial neural codes from a mathematical coding theory perspective*, Neural Comput. 25 (2013), no. 7, 1891–1925.
- M. Nonnenmacher, Ch. Behrens, Ph. Berens, M. Bethge, J. Macke, *Signatures of criticality arise in simple neural models with correlations*, arXiv:1603.00097.
- G. Tkačik, T. Mora, O. Marre, D. Amodei, S. Palmer, M. Berry, W. Bialek, *Thermodynamics and signatures of criticality in a network of neurons*, Proc. Natl. Acad. Sci. USA 112 (2015), no. 37, 11508–11513.
- R. Chaudhuri, I. Fiete, *Bipartite expander Hopfield networks as self-decoding high-capacity error correcting codes*, 33rd Conference on Neural Information Processing Systems (NeurIPS 2019), Vancouver, Canada.
