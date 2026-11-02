---
course: neuroscience
chapter: 11
section: G14
title: Algebraic Geometry of Segmentation and Tracking
lecturer: Matilde Marcolli
source-pages: 1-38
---

This lecture is about the geometry of lines in 3-space and how it is used in segmentation and tracking. It is based on three papers: Pellegrini’s survey of ray shooting and lines in space, Theobald’s enumerative geometry framework for algorithmic line problems in $\RR^3$, and Sottile and Theobald’s survey of line problems in nonlinear computational geometry (full references at the end).

## The computational problem

The general question is a *computational geometry problem*: efficiently find the intersections of a large number of rays (a flow of light) with the objects of a scene. The problem has several aspects:

- *vision*: segmentation and tracking;
- *robotics*: moving objects in 3-space without collisions;
- *computer graphics*: rendering realistic images by simulating the flow of light.

## Coordinates on lines in 3-space

A line in 3-space depends on four parameters, and there are several ways to choose them.

1. **By pairs of planes.** Four parameters $(a,b,c,d)$ describe $\ell$ as the intersection of two planes:
$$\ell = \begin{cases} y = az + b \\ x = cz + d. \end{cases}$$
2. **By pairs of points.** Take the two reference planes $z = 0$ and $z = 1$. A non-horizontal line $\ell$ meets them in points $(x_0, y_0, 0)$ and $(x_1, y_1, 1)$, and these determine $\ell$: four parameters $(x_0, y_0, x_1, y_1)$.

### Plücker coordinates

:::definition Homogeneous coordinates
A point $(x,y,z)$ of 3-space is written in **homogeneous coordinates** $(x_0 : x_1 : x_2 : x_3)$, with
$$x = \frac{x_1}{x_0}, \qquad y = \frac{x_2}{x_0}, \qquad z = \frac{x_3}{x_0},$$
where $(x_0, x_1, x_2, x_3) \sim (\lambda x_0, \lambda x_1, \lambda x_2, \lambda x_3)$ for every scalar $\lambda \neq 0$. These are the *projective coordinates* on $\PP^3$.
:::

The third way of describing a line, by **Plücker coordinates**, uses two of its points in homogeneous coordinates.

:::definition Plücker coordinates
Let $a = (a_0, a_1, a_2, a_3)$ and $b = (b_0, b_1, b_2, b_3)$ be two distinct points of $\ell$, normalized so that $a_0, b_0 > 0$. The line is recorded by the $2 \times 4$ matrix
$$\ell = \begin{pmatrix} a_0 & a_1 & a_2 & a_3 \\ b_0 & b_1 & b_2 & b_3 \end{pmatrix}.$$
The **homogeneous Plücker coordinates** of $\ell$ are the $2\times 2$ minors of this matrix,
$$\xi_{ij} = \det \begin{pmatrix} a_i & a_j \\ b_i & b_j \end{pmatrix},$$
and the **Plücker point** of $\ell$ is
$$P(\ell) = (\xi_{01}, \xi_{02}, \xi_{03}, \xi_{12}, \xi_{31}, \xi_{23}),$$
the homogeneous coordinates of a point in $\PP^5$.
:::

Choosing two other points of $\ell$ multiplies every minor by the same nonzero determinant, so $P(\ell)$ is well defined as a point of $\PP^5$. (The sign normalization $a_0, b_0 > 0$ together with the order of the two rows lets the coordinates also record an orientation of $\ell$, from $a$ to $b$.)

:::proposition Plücker relation
The coordinates $\xi_{ij}$ of a line satisfy the **Plücker relation**
$$\xi_{01}\xi_{23} + \xi_{02}\xi_{31} + \xi_{03}\xi_{12} = 0,$$
and the only homogeneous coordinates in $\PP^5$ that satisfy this relation are those that come from lines $\ell$ in 3-space.
:::

### The Klein quadric

:::definition Klein quadric and Plücker hyperplanes
The **Klein quadric** is the quadric hypersurface
$$\mathcal{K} = \{ P = (x_0 : x_1 : x_2 : x_3 : x_4 : x_5) \in \PP^5 \mid x_0 x_5 + x_1 x_4 + x_2 x_3 = 0 \},$$
so the lines of 3-space are exactly the points of $\mathcal{K}$. To each line $\ell$ is attached the vector
$$v(\ell) = (\xi_{23}, \xi_{31}, \xi_{12}, \xi_{03}, \xi_{02}, \xi_{01})$$
(its Plücker coordinates in reverse order) and the **Plücker hyperplane**
$$h(\ell) = \{ P \in \PP^5 \mid v(\ell)\cdot P = 0 \}.$$
:::

With this choice, $v(\ell)\cdot P(\ell') = \xi_{01}\xi'_{23} + \xi_{02}\xi'_{31} + \xi_{03}\xi'_{12} + \xi_{12}\xi'_{03} + \xi_{31}\xi'_{02} + \xi_{23}\xi'_{01}$, the bilinear form of the Klein quadric, and the points of $\mathcal{K} \cap h(\ell)$ are the lines that meet $\ell$.

## Plücker coordinates and incidence relations

Plücker coordinates are useful for describing certain **incidence relations**:

- intersections of linear loci;
- tangency of quadrics.

### Grassmannians and the Plücker embedding

The same construction works for $k$-dimensional planes in an $n$-dimensional ambient space.

:::definition Plücker coordinates of a $k$-plane
A $k$-plane in $\PP^n$ is spanned by the columns of an $(n+1)\times(k+1)$ matrix. For each subset $I$ of row indices with $|I| = k+1$, let $p_I$ be the $(k+1)\times(k+1)$ minor of the matrix with rows $I$. With
$$N = \binom{n+1}{k+1} - 1,$$
the vector $p = (p_I)_{|I| = k+1} \in \PP^N$ is the vector of **Plücker coordinates** of the $k$-plane.
:::

:::definition Grassmannian and Plücker embedding
The set of all $k$-planes in $\PP^n$ is the **Grassmannian** $G(k,n)$. The **Plücker embedding** identifies it with
$$\Big\{ p = (p_I) \in \PP^N \;\Big|\; \sum_{\ell=1}^{k+2} (-1)^{\ell}\, p_{i_1 \cdots \hat{i}_\ell \cdots i_{k+2}}\, p_{j_1 \cdots j_k i_\ell} = 0 \Big\}$$
for all ordered sets $I = \{i_1, \dots, i_{k+2}\}$ and $J = \{j_1, \dots, j_k\}$ (with $p$ extended to ordered index sets as an alternating function).
:::

For $k = 1$, $n = 3$ this is the Klein quadric: $N = \binom{4}{2} - 1 = 5$, and the relations reduce to the single Plücker relation.

### Dual Plücker coordinates and intersections

:::definition Dual Plücker coordinates
An $(n-k-1)$-plane $V$ in the ambient $\PP^n$ is the intersection of $k+1$ hyperplanes
$$\sum_{i=0}^{n} v^{(0)}_i x_i = 0, \quad \dots, \quad \sum_{i=0}^{n} v^{(k)}_i x_i = 0.$$
The **dual Plücker coordinates** $q = (q_I) \in \PP^N$ of $V$ are the list of $(k+1)\times(k+1)$ minors of the matrix with columns $v^{(0)}, \dots, v^{(k)}$.
:::

:::proposition
A $k$-plane $W$ intersects an $(n-k-1)$-plane $V$ in $\PP^n$ if and only if the dot product of the Plücker coordinates $p = (p_I) \in \PP^N$ of $W$ with the dual Plücker coordinates $q = (q_I) \in \PP^N$ of $V$ vanishes:
$$\sum_I p_I q_I = 0.$$
:::

In particular this gives the intersection condition for two lines in $\PP^3$, which is the vanishing of the bilinear form $v(\ell)\cdot P(\ell')$ above.

### Tangency to quadrics

The next question is to characterize when a $k$-plane in $\PP^n$ is tangent to a quadric in $\PP^n$. Write the quadric as $x^T Q x = 0$, with $Q$ a symmetric $(n+1)\times(n+1)$ matrix.

:::definition Exterior power of a matrix
The **$r$-th exterior power** of a matrix is the map
$$\wedge^r : \CC^{m\times n} \to \CC^{\binom{m}{r}\times\binom{n}{r}}, \qquad (\wedge^r A)_{I,J} = \det(A_{[I,J]}),$$
where $|I| = |J| = r$ and $A_{[I,J]}$ is the minor of $A$ with rows indexed by $I$ and columns indexed by $J$.
:::

If $W$ is a $k$-plane spanned by the columns of an $(n+1)\times(k+1)$ matrix $L$, then $\wedge^{k+1}L$ is an $\binom{n+1}{k+1}\times 1$ matrix, that is, a vector: it is the vector $p_W$ of Plücker coordinates of $W$ in $\PP^N$.

:::proposition Tangency in Plücker coordinates
A $k$-plane $W$ is tangent to a quadric $Q$ if the quadric restricted to $W$ is singular. In Plücker coordinates this means
$$p_W^T\, (\wedge^{k+1} Q)\, p_W = 0.$$
:::

## A side remark: twistor theory

The idea of turning problems about lines in 3-space into problems about points and hyperplanes in $\PP^5$, through the Klein quadric $\mathcal{K}$, also arises in physics: it is Penrose’s twistor approach to general relativity (with one more dimension, time).

- Start from a 4-dimensional vector space $T$, the **twistor space**. Its projectivization is $\PP(T) = G(1,T) \cong \PP^3$, and the Klein quadric $\mathcal{K}$ is the embedding $G(2,T) \hookrightarrow \PP^5$ of the Grassmannian of 2-planes in the 4-space $T$. (Here $G(r,T)$ denotes the $r$-dimensional linear subspaces of $T$.)
- The **Penrose twistor transform** is the diagram
$$\PP^3 = G(1,T) \longleftarrow F(1,2,T) \longrightarrow G(2,T) = \mathcal{K},$$
where $F(1,2,T)$ is the flag variety (a line inside a 2-plane inside $T$) with its two projection maps.

The Klein quadric is ruled by two families of planes, the **$\alpha$-planes** and the **$\beta$-planes**.

![The Klein quadric in P^5 with an alpha-plane, a beta-plane and a point on it, matched with a point, a plane and a line in P^3](/notes/neuroscience/figures/h12-klein-correspondence.svg)

In the figure, a point of $\mathcal{K}$ corresponds to a line of $\PP^3$, an $\alpha$-plane to a point of $\PP^3$, and a $\beta$-plane to a plane of $\PP^3$.

- The $\alpha$-planes are the images under the second projection of the fibers of the first projection in the Penrose transform diagram
$$\PP^3 = G(1;T) \longleftarrow F(1,2;T) \longrightarrow G(2;T):$$
the fiber over a point of $\PP^3$ consists of all lines through that point.
- The $\beta$-planes arise in the same way from the dual Penrose diagram
$$G(3;T) \longleftarrow F(2,3;T) \longrightarrow G(2;T),$$
where $G(3;T) \cong \PP(T^*)$ is the dual projective space, whose points are the planes of $\PP^3$.
- In these planes every line is a light ray. The base of the light cone $C(\infty)$ is a product of two $\PP^1$’s, the same as $\PP(\mathcal{S}_\infty)\times\PP(\tilde{\mathcal{S}}_\infty)$, where $\mathcal{S}_\infty$ is the 2-dimensional spinor space over the vertex $\infty$ of the light cone $C(\infty)$.
- The Grassmannian $G(2,T)$ is *compactified and complexified* Minkowski space, with big cell the complexified spacetime.

This was reviewed only as motivation; twistor theory is not used in what follows.

## Why projective and complex geometry?

**Why use the projective spaces $\PP^3$ and $\PP^5$ instead of the affine spaces $\bbA^4$ and $\bbA^6$?** Projective algebraic geometry works better than affine geometry, because of compactness. Projective space decomposes as
$$\PP^N = \bbA^N \cup \PP^{N-1},$$
the big cell $\bbA^N$ and the (projective) hyperplane $\PP^{N-1}$ at infinity.

**Why use complex geometry $\PP^N(\CC)$ for a real geometry problem?** Complex algebraic geometry works better than real (polynomials always have the correct number of solutions: intersections, etc.). The set of real points $\PP^N(\RR)$ sits inside the complex projective space $\PP^N(\CC)$; similarly $\mathcal{K}(\CC)$ is a complex projective algebraic variety and $\mathcal{K}(\RR)$ is its set of real points.

:::remark General idea
Formulate the problem in projective algebraic geometry; solve it for complex algebraic varieties; restrict to the real points.
:::

## Use of Plücker coordinates

- Problems about lines in 3-space are transformed into problems about hyperplanes and points in $\PP^5$.
- Why is this better? There are a lot of tools for the algebraic geometry of hyperplane arrangements.
- The disadvantage: five parameters instead of four, which can increase the running time of algorithms.

However, it is known that even though the computational complexity of an arrangement of $n$ hyperplanes in $\PP^5$ is $O(n^5)$, its intersection with $\mathcal{K}$ has computational complexity only $O(n^4 \log n)$.

## A scene in 3-space becomes a hyperplane arrangement in $\PP^5$

The geometric setup is as follows.

- Suppose given a configuration of objects in 3-space. Assume they are *polyhedra* (smooth objects can always be approximated by polyhedra, through a mesh).
- Triangulate the polyhedra and extend the edges of the triangulation to infinite lines $\ell$.
- Each such line $\ell$ determines a Plücker hyperplane $h(\ell)$ in $\PP^5$.
- This gives a hyperplane arrangement in $\PP^5$.

### Ray shooting

The ray shooting problem is used for hidden surface removal and for detecting and computing intersections of polyhedra.

:::definition Ray shooting problem
Given a collection of polyhedra $\mathcal{P}$ in 3-space, a point $P$ and a direction $\vec{V}$, identify the *first object of $\mathcal{P}$ intersected* by the ray starting at $P$ and pointing in the direction $\vec{V}$.
:::

Consider a triangle $\tau$ of the triangulation of $\mathcal{P}$, with boundary lines $\ell_1, \ell_2, \ell_3$. A line $\ell$ passes through $\tau$ if and only if its Plücker point $P(\ell)$ in $\PP^5$ lies in the intersection of the (real) half-spaces
$$h^+(\ell_1)\cap h^+(\ell_2)\cap h^+(\ell_3) \qquad\text{or}\qquad h^-(\ell_1)\cap h^-(\ell_2)\cap h^-(\ell_3)$$
determined by the hyperplanes $h(\ell_1)$, $h(\ell_2)$, $h(\ell_3)$. So to solve the ray shooting problem, locate $P(\ell)$ in the hyperplane arrangement and check the list of triangles $\tau$ associated with the corresponding cell of the arrangement.

## Visibility and common tangents

Another problem: which bodies of a given scene cannot be seen from *any* location outside the scene?

- Geometric formulation: *determining the common tangents to four given bodies in $\RR^3$.*
- For polyhedra, common tangents means common transversals to edge lines; for smooth objects, tangents.

:::theorem Model result
Four spheres in $\RR^3$ (with centers not all aligned) have at most 12 common tangent lines, and there are configurations that realize 12.
:::

The slides show such a configuration, a figure from Sottile–Theobald: four spheres with coplanar centers and 12 common tangent lines. Three equal spheres sit around a smaller fourth sphere in the middle, and twelve lines cross the picture, each touching all four spheres. (In Sottile–Theobald’s example, three spheres of radius $4/5$ are centered at the vertices of an equilateral triangle of side $\sqrt{3}$ and a sphere of radius $1/3$ at its center.)

### Partial visibility

Here is how to arrive at the geometric formulation.

:::definition Partial visibility
A **convex body** $C \subset \RR^3$ is a bounded, closed, convex set with inner points. A *scene* is a set $\mathcal{C}$ of convex bodies $C$ in $\RR^3$. A body $C$ is **partially visible** if there exist $P \in C$ and a direction $\vec{V}$ such that the ray from $P$ in the direction $\vec{V}$ does not intersect any other $C' \in \mathcal{C}$: there is an unobstructed view of at least some points of $C$ from some viewpoint outside the scene. Such a ray is a **visibility ray**.
:::

Reduce the collection $\mathcal{C}$ by removing all bodies $C$ that are not partially visible.

If there is a visibility ray for $C$, it can be moved continuously (translated, rotated) until the line is tangent to at least two bodies in $\mathcal{C}$ (one of which can be $C$). At that point it has reached the boundary of the visibility region for $C$.

### The set of common transversals

:::definition
Let $\mathcal{T}(\mathcal{C})$ be the set of lines in $\RR^3$ that intersect all the bodies $C \in \mathcal{C}$.
:::

- Lines in $\RR^3$ have four parameters, and meeting a body with inner points is an open condition, so $\mathcal{T}(\mathcal{C})$ is a 4-dimensional set.
- $\mathcal{T}(\mathcal{C})$ is a **semialgebraic set** (defined by algebraic equalities and inequalities), whose boundary $\partial\mathcal{T}(\mathcal{C})$ consists of lines that are tangent to at least one $C \in \mathcal{C}$.
- The *combinatorial structure* of $\mathcal{T}(\mathcal{C})$: its faces are determined by the sets of lines tangent to a fixed subset of bodies in $\mathcal{C}$.
- Because $\mathcal{T}(\mathcal{C})$ is 4-dimensional, it has faces of dimensions $j \in \{0,1,2,3\}$, given by lines tangent to $4-j$ bodies.

### Lines and spheres

- When the bodies $C$ are polyhedra, this is *linear computational geometry*.
- When the bodies $C$ are smooth (for example spheres), it is *nonlinear computational geometry*.

**Core problem:** find the configurations of lines tangent to $k$ spheres and transversal to $4-k$ lines in $\RR^3$. All these cases are referred to as “common tangents”.

The slides show a figure from Theobald: one sphere and three lines $\ell_1, \ell_2, \ell_3$ with four common tangents, drawn in gray, each of which touches the sphere and meets all three lines.

## Bounds on the number of common tangents

:::theorem Theobald
Consider $k$ spheres and $4-k$ lines in $\RR^3$. If they have only finitely many common tangents, then the maximal number of common tangents is
$$N_k = \begin{cases} 2 & k = 0 \\ 4 & k = 1 \\ 8 & k = 2 \\ 12 & k = 3,\ k = 4. \end{cases}$$
In each case there are configurations realizing the bound.
:::

The upper bounds for small $k$ come from Bézout’s theorem.

:::theorem Bézout
Let $f_1, \dots, f_n$ be homogeneous polynomials in $x_0, \dots, x_n$ of degrees $d_1, \dots, d_n$ with a finite number of common zeros in $\PP^n$. Then the number of common zeros, counted with multiplicity, is at most $d_1 d_2 \cdots d_n$.
:::

Bézout gives $N_0 \le 2$, $N_1 \le 4$, $N_2 \le 8$.

### The bound $N_1 \le 4$

:::proof Proof that $N_1 \le 4$
The common tangents to three lines and one sphere are described by the following equations on $P(\ell) = (\xi_{01}, \xi_{02}, \xi_{03}, \xi_{12}, \xi_{31}, \xi_{23}) \in \PP^5$ (write $\xi_{13} = -\xi_{31}$).

1. Three linear equations, one for each of the three given lines $\ell'$ with $P(\ell') = (\xi'_{01}, \xi'_{02}, \xi'_{03}, \xi'_{12}, \xi'_{31}, \xi'_{23})$:
$$\xi_{01}\xi'_{23} - \xi_{02}\xi'_{13} + \xi_{03}\xi'_{12} + \xi_{12}\xi'_{03} - \xi_{13}\xi'_{02} + \xi_{23}\xi'_{01} = 0,$$
which express the fact that $\ell$ and the fixed line $\ell'$ intersect in $\PP^3$.
2. One quadratic equation
$$P(\ell)^t\, (\wedge^2 Q)\, P(\ell) = 0,$$
which expresses the fact that $\ell$ is tangent to the quadric $Q$ (the sphere).
3. The Plücker relation, which restricts to the Klein quadric $\mathcal{K}$:
$$\xi_{01}\xi_{23} + \xi_{02}\xi_{31} + \xi_{03}\xi_{12} = 0.$$

These are five homogeneous equations in $\PP^5$ of degrees $1,1,1,2,2$, so if they have finitely many common solutions, Bézout gives at most $1\cdot1\cdot1\cdot2\cdot2 = 4$ of them. Hence $N_1 \le 4$.
:::

Here $\wedge^2$ is the case $r = 2$ of the exterior power defined earlier: the linear operator
$$\wedge^2 : M_{m\times n}(\RR) \to M_{\binom{m}{2}\times\binom{n}{2}}(\RR), \qquad (\wedge^2 A)_{I,J} = \det(A_{[I,J]}),$$
where $I \subset \{1, \dots, m\}$ with $\#I = 2$, $J \subset \{1, \dots, n\}$ with $\#J = 2$, and $A_{[I,J]}$ is the $2\times 2$ minor of $A$ with rows $I$ and columns $J$.

:::remark Where the tangency equation comes from
The equation $P^t (\wedge^2 Q) P = 0$ for tangency of a line and a quadric comes from the fact that $\ell$ is tangent to the quadric $Q$ if and only if the $2\times 2$ matrix $L^t Q L$ is singular, where $L$ is the $4\times 2$ matrix representing $\ell$ in Plücker form,
$$L(\ell) = \begin{pmatrix} a_0 & a_1 & a_2 & a_3 \\ b_0 & b_1 & b_2 & b_3 \end{pmatrix}^{T}.$$
The condition that $L^T Q L$ is singular is
$$\det(L^t Q L) = (\wedge^2 L^t)(\wedge^2 Q)(\wedge^2 L) = (\wedge^2 L)^t (\wedge^2 Q)(\wedge^2 L) = 0,$$
since $\wedge^2$ is multiplicative (the Cauchy–Binet formula) and $\wedge^2$ of a $2\times 2$ matrix is its determinant. Here $\wedge^2 L = P(\ell)$, identifying the $6\times 1$ matrix with a vector in $\PP^5$.
:::

:::example Tangency to a sphere
For a sphere in $\RR^3$ of radius $r$ and center $(c_1, c_2, c_3)$ the quadric is
$$(x_1 - c_1 x_0)^2 + (x_2 - c_2 x_0)^2 + (x_3 - c_3 x_0)^2 = r^2 x_0^2$$
in homogeneous coordinates, and the tangency equation is explicitly
$$\begin{pmatrix} p_{01} \\ p_{02} \\ p_{03} \\ p_{12} \\ p_{13} \\ p_{23} \end{pmatrix}^{T}
\begin{pmatrix}
c_2^2 + c_3^2 - r^2 & -c_1 c_2 & -c_1 c_3 & c_2 & c_3 & 0 \\
-c_1 c_2 & c_1^2 + c_3^2 - r^2 & -c_2 c_3 & -c_1 & 0 & c_3 \\
-c_1 c_3 & -c_2 c_3 & c_1^2 + c_2^2 - r^2 & 0 & -c_1 & -c_2 \\
c_2 & -c_1 & 0 & 1 & 0 & 0 \\
c_3 & 0 & -c_1 & 0 & 1 & 0 \\
0 & c_3 & -c_2 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix} p_{01} \\ p_{02} \\ p_{03} \\ p_{12} \\ p_{13} \\ p_{23} \end{pmatrix} = 0.$$
:::

### The bounds are attained for $k \le 2$

- The case $N_1 \le 4$ is as above.
- The case $N_2 \le 8$ is a very similar argument.
- The case $N_0 \le 2$ is also similar. Common transversals to four lines in 3-space are a classical problem of enumerative geometry, and it is known that 2 can be achieved (with real solutions), so $N_0 = 2$.
- $N_1 = 4$: a construction achieving the maximum is the configuration of one sphere and three lines shown earlier.
- $N_2 = 8$: there is an explicit construction of a configuration of two lines and two balls with eight common tangent lines.

![A hyperboloid of one sheet with three lines of one ruling and, through a point p, the line of the second ruling meeting all three](/notes/neuroscience/figures/h12-hyperboloid-rulings.svg)

The figure (after Sottile–Theobald) shows why $N_0 = 2$. Three pairwise skew lines $\ell_1, \ell_2, \ell_3$ lie in one ruling of a hyperboloid, and the lines transversal to all three are the lines of the second ruling: through each point $p$ of the hyperboloid passes exactly one of them, $m_p$. A fourth line $\ell_4$ meets the hyperboloid in either two or zero real points, and the common transversals of $\ell_1, \ell_2, \ell_3, \ell_4$ are the lines $m_p$ through those points. Sottile–Theobald also draw the case where the three lines lie on a hyperbolic paraboloid (a saddle surface), which is ruled in the same way.

The slides then show Theobald’s configuration of two lines and two balls with eight common tangent lines: two overlapping balls, two thick black lines crossing near them, and eight lines in shades of gray, each touching both balls and meeting both black lines.

### The bound $N_3 \le 12$

Now take one line $\ell = \ell_1$ and three spheres, given by quadrics $Q_2, Q_3, Q_4$.

- The hyperplane $H$ in $\PP^5$ characterizing the lines transversal to $\ell_1$ is
$$H = \{ P' \mid \xi_{01}\xi'_{23} - \xi_{02}\xi'_{13} + \xi_{03}\xi'_{12} + \xi_{12}\xi'_{03} - \xi_{13}\xi'_{02} + \xi_{23}\xi'_{01} = 0 \},$$
and the points of $\mathcal{K} \cap H$ correspond to such lines.
- For the quadrics $Q_2, Q_3, Q_4$ and the corresponding $\wedge^2 Q_i$, the equations
$$P(\ell')^t\, (\wedge^2 Q_i)\, P(\ell') = 0, \qquad i = 2, 3, 4,$$
characterize tangency to $Q_i$ for $P(\ell') \in H$.
- Bézout alone would give the count $2\cdot 1\cdot 2\cdot 2\cdot 2 = 16$ (the Klein quadric, one linear equation and three quadratic equations). But these equations are not independent at infinity: there are spurious solutions at infinity, intersections of multiplicity two, and removing them leads to the count of 12.

:::proof Getting the multiplicity count
- The quadric $Q$ of a sphere is $(x_1 - c_1x_0)^2 + (x_2 - c_2x_0)^2 + (x_3 - c_3x_0)^2 = r^2 x_0^2$ in homogeneous coordinates in $\PP^3$. It intersects the plane $\PP^2$ at infinity ($x_0 = 0$) in the conic $x_1^2 + x_2^2 + x_3^2 = 0$, the same conic for every sphere.
- For a point $p = (0, \zeta_1, \zeta_2, \zeta_3)$ on this conic, the tangent line to the conic at $p$ in the plane $\PP^2$ has Plücker coordinates $(p_{01}, p_{02}, p_{03}, p_{12}, p_{13}, p_{23}) = (0, 0, 0, \zeta_3, -\zeta_2, \zeta_1)$.
- The Plücker vector of a tangent to the conic in the $\PP^2$ at infinity therefore also lies on the quadrics defined by $\wedge^2 Q_2$, $\wedge^2 Q_3$, $\wedge^2 Q_4$ (the lower right $3\times 3$ block of each $\wedge^2 Q_i$ is the identity, so the equation becomes $\zeta_1^2 + \zeta_2^2 + \zeta_3^2 = 0$), and on $\mathcal{K}$. Two of these tangent lines, the two tangents to the conic through the point at infinity of $\ell_1$, also lie in $H$, so they are solutions at infinity of the system.
- Use this to conclude that at these points the tangent hyperplanes to the quadrics $\wedge^2 Q_2$, $\wedge^2 Q_3$, $\wedge^2 Q_4$ and $\mathcal{K}$ all contain a common 2-dimensional subspace.
- Conclude that the multiplicity of intersection there is at least 2. The two solutions at infinity account for at least $4$ of the $16$, which gives the correct count of the maximal number of tangents, $N_3 \le 12$.
:::

The slides show Theobald’s configuration of one line and three balls with twelve common tangent lines: a vertical line $\ell_1$ passes between three balls, and twelve lines in black and shades of gray each meet $\ell_1$ and touch all three balls.

### Four spheres, and infinitely many tangents

- A similar argument gives the bound $N_4 \le 12$ (see Theobald and Sottile–Theobald).
- A further step is to characterize the configurations with infinitely many common tangents, such as four spheres with collinear centers and equal radii (or collinear centers and inscribed in the same hyperboloid); see Theobald and Sottile–Theobald.

The slides show Sottile–Theobald’s pictures of configurations of four spheres with infinitely many common tangents. In each, the centers lie on one line $m$, and rotating one common tangent $\ell$ about $m$ gives infinitely many more. The four panels show spheres that all touch one another at a single point (every line through that point in the common tangent plane is tangent to all of them), spheres inscribed in a circular cone, spheres meeting in a common circle, and spheres inscribed in a hyperboloid of revolution.

## Conclusions

The geometric argument on the maximal number of common tangents gives an estimate of the algorithmic complexity of the visibility problem: it comes down to solving polynomial equations of the given degree (for example a degree 12 equation in the case of four spheres).

## References

- Marco Pellegrini, *Ray shooting and lines in space*, in Handbook of Discrete and Computational Geometry, pp. 599–614, CRC Press Ser. Discrete Math. Appl., CRC, 1997.
- Thorsten Theobald, *An enumerative geometry framework for algorithmic line problems in $\RR^3$*, SIAM J. Comput. 31 (2002), no. 4, 1212–1228.
- Frank Sottile and Thorsten Theobald, *Line problems in nonlinear computational geometry*, Contemp. Math. 453 (2008), 411–432.
