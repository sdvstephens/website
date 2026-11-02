---
course: neuroscience
chapter: 10
section: G11
title: Contact Geometry of the Visual Cortex
lecturer: Matilde Marcolli
source-pages: 1-75
---

## Columnar structure and fiber bundles

The primary visual cortex V1 carries another kind of geometric structure besides the ones met so far. Hubel and Wiesel found a **columnar structure** in V1: neurons sensitive to orientation record a pair of data $(z,\ell)$, where

- $z$ is a position on the retina, and
- $\ell$ is a line in the plane (an orientation).

So the data have a local product structure: writing $\mathcal{R}$ for the retinal surface and $\mathbb{P}^1$ for the set of lines through a point of the plane, there is a projection
$$
\pi : \mathcal{R}\times\mathbb{P}^1 \twoheadrightarrow \mathcal{R}.
$$
The slide illustrates this with the classical block picture of a piece of cortex: thin slabs (orientation columns) cut by alternating ocular dominance columns labeled L and R.

### Fiber bundles

:::definition Fiber bundle
A **fiber bundle** is a topological space (or smooth manifold) $E$ with a **base** $B$ and **fiber** $F$, together with

- a surjection $\pi : E\twoheadrightarrow B$;
- fibers $E_x=\pi^{-1}(x)\simeq F$ for all $x\in B$;
- an open covering $\mathcal{U}=\{U_\alpha\}$ of $B$ such that $\pi^{-1}(U_\alpha)\simeq U_\alpha\times F$, with $\pi$ restricted to $\pi^{-1}(U_\alpha)$ corresponding to the projection $(x,s)\mapsto x$ on $U_\alpha\times F$.
:::

:::definition Sections
A **section** of $\pi:E\to B$ is a map $s:B\to E$ with $\pi\circ s=\id$. Locally, on $U_\alpha$,
$$
s|_{U_\alpha}(x)=(x,s_\alpha(x)),\qquad\text{with } s_\alpha:U_\alpha\to F.
$$
:::

:::example Trivial and nontrivial $\RR$-bundles over $S^1$
The cylinder $S^1\times\RR$ is the trivial line bundle over the circle. The Möbius band is a nontrivial one: each fiber is still a line through a point of the core circle, but going once around the circle turns the fibers over, so there is no global identification with $S^1\times\RR$.

![A cylinder and a Möbius band drawn as line bundles over a circle, with some fiber lines](/notes/neuroscience/figures/h10-bundles-s1.svg)
:::

:::example Tangent bundle
For a smooth manifold $M$ the tangent bundle $TM$ has base $M$ and fiber $T_xM$ over $x$. The slide shows the tangent bundle of the 2-sphere: at several points of the sphere, the tangent plane is drawn with a spray of tangent vectors in it.
:::

### V1 as a circle bundle

The **model of V1** is a bundle $\mathcal{E}$ with base $\mathcal{R}$, the retinal surface, and fiber $\mathbb{P}^1$, the set of lines in the plane. Topologically $\mathbb{P}^1(\RR)=S^1$ is a circle, so locally V1 is a product $\RR^2\times S^1$: a circle bundle over a 2-dimensional surface. The slide shows circle bundles over a torus and over a sphere, drawn as small circles attached at points of the surface.

We will see that this leads to geometric models of V1 based on contact geometry.

## Contact geometry on 3-manifolds

### Plane fields and contact structures

:::definition Plane field
A **plane field** $\xi$ on a 3-manifold $M$ is a subbundle of the tangent bundle $TM$ such that $\xi_x=T_xM\cap\xi$ is a 2-dimensional subspace for all $x\in M$.
:::

:::example
Let $M=\Sigma\times S^1$ be the product of a 2-dimensional surface $\Sigma$ and a circle $S^1$. Then $\xi_{(x,\theta)}=T_x\Sigma\subset T_{(x,\theta)}M$ is a plane field.
:::

A real 1-form $\alpha$ on $M$ determines at each point $x\in M$ a linear map
$$
\alpha_x : T_xM\to\RR .
$$
Its kernel $\ker(\alpha_x)$ is either a plane or all of $T_xM$. If $\ker(\alpha_x)\neq T_xM$ for all $x\in M$, then $\xi=\ker(\alpha)$ is a plane field. All plane fields are locally of the form $\xi=\ker(\alpha)$ for some 1-form $\alpha$.

:::example
For $M=\Sigma\times S^1$ as above, $\xi=\ker(\alpha)$ with $\alpha=d\theta$.
:::

:::definition Reeb vector field
A contact 1-form $\alpha$ (defined just below) also determines a **Reeb vector field** $R=R_\alpha$, transverse to $\xi$ and preserving $\alpha$:
$$
\alpha(R_\alpha)=1\qquad\text{and}\qquad d\alpha(R_\alpha,\cdot)=0 .
$$
:::

:::definition Contact structure
A plane field $\xi=\ker(\alpha)$ on a 3-manifold $M$ is a **contact structure** if and only if
$$
\alpha\wedge d\alpha\neq 0 .
$$
An equivalent condition is $d\alpha|_\xi\neq 0$. Such an $\alpha$ is a **contact form**, and $(M,\xi)$ is a **contact 3-manifold**.
:::

:::example Standard contact structure on $\RR^3$
On $M=\RR^3$ take
$$
\alpha = dz + x\,dy ,
$$
so $d\alpha=dx\wedge dy$ and $\alpha\wedge d\alpha=dz\wedge dx\wedge dy\neq 0$. At a point $(x,y,z)$ the contact plane $\xi_{(x,y,z)}$ is spanned by the basis
$$
\Big\{\frac{\partial}{\partial x},\; x\frac{\partial}{\partial z}-\frac{\partial}{\partial y}\Big\}.
$$
The geometry of the plane field $\xi$: when $x=0$ (the $yz$-plane) the contact plane is horizontal; at $(1,0,0)$ it is spanned by $\frac{\partial}{\partial x}$ and $\frac{\partial}{\partial z}-\frac{\partial}{\partial y}$, so it is tangent to the $x$-axis but tilted $45^\circ$ clockwise; and so on. Starting at the origin and moving along the $x$-axis, the plane keeps twisting clockwise.

![The standard contact structure on R^3: small contact planes at grid points of the xy-plane, twisting as x varies](/notes/neuroscience/figures/h10-std-contact.svg)
:::

### Darboux’s theorem

Locally, all contact structures look like the standard one.

:::definition Contactomorphism
If $(M,\xi)$ and $(N,\eta)$ are contact 3-manifolds, a **contactomorphism** is a diffeomorphism $f:M\to N$ such that $f_*(\xi)=\eta$. In terms of 1-forms: $f^*(\alpha_\eta)=h\,\alpha_\xi$ for some nowhere-vanishing function $h:M\to\RR$.
:::

:::theorem Darboux’s theorem
Let $(M,\xi)$ be a contact 3-manifold and $x\in M$. There are neighborhoods $\mathcal{N}$ of $x$ and $\mathcal{U}$ of $(0,0,0)$ in $\RR^3$ and a contactomorphism
$$
f:(\mathcal{N},\xi|_{\mathcal{N}})\to(\mathcal{U},\xi_0|_{\mathcal{U}}),
$$
where $\xi_0$ is the standard contact structure on $\RR^3$.
:::

### Example: the contact structure on $S^3$

:::example Contact structure on the sphere $S^3$
Let $f(x_1,y_1,x_2,y_2)=x_1^2+y_1^2+x_2^2+y_2^2$, so that $S^3=f^{-1}(1)\subset\RR^4$. The tangent spaces are
$$
T_{(x_1,y_1,x_2,y_2)}S^3=\ker df_{(x_1,y_1,x_2,y_2)}=\ker(2x_1\,dx_1+2y_1\,dy_1+2x_2\,dx_2+2y_2\,dy_2).
$$
Identify $\RR^4=\CC^2$ with the complex structure $Jx_i=y_i$ and $Jy_i=-x_i$, that is
$$
J\frac{\partial}{\partial x_i}=\frac{\partial}{\partial y_i},\qquad J\frac{\partial}{\partial y_i}=-\frac{\partial}{\partial x_i}.
$$
The contact structure on $S^3$ is given by
$$
\alpha=(x_1\,dy_1-y_1\,dx_1+x_2\,dy_2-y_2\,dx_2)|_{S^3},\qquad \alpha\wedge d\alpha\neq 0,
$$
with contact planes $\xi=\ker(\alpha)$.

- The contact planes $\xi=\ker(\alpha)$ on $S^3$ are the set of **complex tangencies**:
$$
\xi=T_{(x_1,y_1,x_2,y_2)}S^3\cap J\big(T_{(x_1,y_1,x_2,y_2)}S^3\big).
$$
- The 1-form $\alpha$ comes from the complex structure: up to a constant factor, $\alpha=(df\circ J)|_{S^3}$; with the conventions above, $df\circ J=-2\alpha$.

- The plane field $\xi=\ker(\alpha)$ is orthogonal to the **Hopf vector field**
$$
\dot x_1=-y_1,\qquad \dot y_1=x_1,\qquad \dot x_2=-y_2,\qquad \dot y_2=x_2 .
$$
:::

The slide shows two computer pictures: the orbits of the Hopf vector field, which are linked great circles, and the Hopf fibration of $S^3$ seen after stereographic projection to $\RR^3$, as nested tori filled by linked circles.

### Contact structures and complex manifolds

Let $X$ be a complex manifold with $\dim_\CC(X)=2$, with boundary $\partial X$ of real dimension $\dim_\RR\partial X=3$, and with complex structure $J$ on $TX$. Take a function $\phi$ near the boundary with $\partial X=\phi^{-1}(0)$ (on a collar neighborhood of the boundary). The **complex tangencies** of $\partial X$ form the plane field
$$
\ker(d\phi\circ J)
$$
(on $T\partial X$), and this is a contact structure if and only if $d(d\phi\circ J)$ is a non-degenerate 2-form on the planes $\xi$.

:::definition Fillable
A contact structure is **fillable** if it is obtained in this way.
:::

:::theorem Lutz–Martinet theorem
All 3-manifolds admit a contact structure (not always fillable).
:::

### Contact geometry and symplectic geometry

:::definition Symplectic structure
Let $X$ be a real 4-dimensional manifold (or, more generally, an even-dimensional one). A **symplectic structure** on $X$ is a closed 2-form $\omega$ such that $\omega\wedge\omega\neq 0$ (in dimension $2n$: $\wedge^n\omega\neq 0$).
:::

**Darboux’s theorem for symplectic forms:** locally $\omega=dp\wedge dq$, that is $\omega=\sum_i dp_i\wedge dq_i$ in suitable coordinates (like a cotangent bundle).

:::definition Symplectic filling
$(X,\omega)$ is a **symplectic filling** of the contact 3-manifold $(M,\xi)$ if $\partial X=M$ and $\omega|_\xi\neq 0$ is an area form on the contact planes.
:::

- Fillability by a complex manifold is a special case: $\omega=d(d\phi\circ J)$ is symplectic.
- Not all contact structures are fillable by symplectic structures: if a contact structure is symplectically fillable, then it is tight (defined below).
- Note: one can always extend to a symplectic form on the cylinder $X=M\times\RR$, namely $\omega=d(e^t\alpha)=e^t(d\alpha+dt\wedge\alpha)$, but then $M$ is not $\partial X$.

### Tight and overtwisted contact structures

:::definition Characteristic foliation
Let $\Sigma$ be an embedded oriented surface in a contact 3-manifold $(M,\xi)$. At each point $x\in\Sigma$ take the line $\ell_x=\xi_x\cap T_x\Sigma$, except at the **singular points**, where the intersection is all of $T_x\Sigma$. These lines integrate to a foliation $\mathcal{F}_{\xi,\Sigma}$ of $\Sigma$ with singular points, the **characteristic foliation**.
:::

:::definition Overtwisted and tight
A contact structure is **overtwisted** if there exists an embedded disk $D$ whose characteristic foliation $\mathcal{F}_{\xi,D}$ is homeomorphic to one of the two foliations below: on the left, straight leaves running from a singular point at the center out to the boundary circle, which consists of singular points; on the right, a boundary circle that is itself a closed leaf, with leaves spiraling out from the center towards it. Such a $D$ is an **overtwisted disk**.

![Two model characteristic foliations of an overtwisted disk: radial leaves from the center, and leaves spiraling from the center to a boundary circle that is a closed leaf](/notes/neuroscience/figures/h10-ot-foliations.svg)

A contact structure is **tight** if it contains no overtwisted disk.
:::

:::example Tight and overtwisted structures on $\RR^3$
- Tight: in standard polar coordinates $(r,\theta,z)$, the contact structure $\xi=\ker(dz+r^2\,d\theta)$.
- Overtwisted: $\xi=\ker(\cos(r)\,dz+r\sin(r)\,d\theta)$. The overtwisted property sees the fact that the contact planes, of slope $dz/d\theta=-r\tan(r)$, become vertical (at $r=\pi/2$) and twist over periodically.
- An overtwisted disk is $\{z=0,\ 0\le r\le\pi\}$: its characteristic foliation is radial, singular at the center and along the whole boundary circle $r=\pi$, where the contact planes are horizontal again.

In the figure, small disks show the contact planes along rays leaving the $z$-axis. For the tight structure the planes tilt towards the vertical as $r$ grows, without ever reaching it; for the overtwisted one they turn through an angle $r$, so they are vertical at $r=\pi/2$ and horizontal again at $r=\pi$.

![Contact planes along radial rays for the tight structure ker(dz + r^2 dθ) and the overtwisted structure ker(cos r dz + r sin r dθ)](/notes/neuroscience/figures/h10-tight-ot.svg)
:::

The generic singularities of a characteristic foliation are of the two kinds shown below: an *elliptic* point, out of which all nearby leaves emanate (here curving as they leave), and a *hyperbolic* point, a saddle where two leaves come in, two go out, and the others pass by like hyperbolas.

![Generic singular points of a characteristic foliation: leaves curving out of a point, and a saddle with hyperbola-shaped leaves](/notes/neuroscience/figures/h10-char-singularities.svg)

**Some facts about contact structures and 3-manifolds** (Eliashberg, Gromov, Etnyre, Honda, Bennequin, and others):

- All 3-manifolds admit contact structures.
- Some 3-manifolds do not admit any tight contact structure (though most of them do).
- If a contact structure is symplectically fillable, then it is tight.
- A contact plane field $\xi$ has an Euler class $e(\xi)\in H^2(M,\ZZ)$, and for tight structures it satisfies a genus bound.

:::theorem Genus bound
If $\xi$ is tight and $\Sigma\subset M$ is an embedded surface, then
$$
|e(\xi)[\Sigma]|\le-\chi(\Sigma)\quad\text{if }\Sigma\neq S^2,
$$
and $e(\xi)[\Sigma]=0$ if $\Sigma=S^2$.
:::

:::proof
Key idea: express $e(\xi)[\Sigma]$ in terms of the singular points of the characteristic foliation of $\Sigma$, via Poincaré–Hopf.
:::

### Legendrian and transverse knots

:::definition Legendrian knot
A **Legendrian knot** is a knot $S^1\hookrightarrow M$ in a contact 3-manifold $(M,\xi)$ such that the curve is always tangent to the contact planes $\xi$.
:::

Every knot in a contact manifold can be continuously approximated by a Legendrian knot. In the standard contact structure on $\RR^3$ with $\xi=\ker(dz+x\,dy)$, a Legendrian knot is recorded by its **front projection** to the $yz$-plane: along the knot $x=-dz/dy$, so the missing coordinate is the slope of the front, and fronts have cusps where an ordinary knot diagram would have vertical tangencies. Fronts look like these (a Legendrian unknot with two crossings, and a Legendrian trefoil):

![Front projections of a Legendrian unknot and a Legendrian trefoil, with cusps and crossings](/notes/neuroscience/figures/h10-legendrian-fronts.svg)

Invariants of Legendrian knots are used to study contact manifolds (see the Bennequin invariants, and others).

:::definition Transverse knot
A **transverse knot** is a knot $S^1\hookrightarrow M$ in a contact 3-manifold $(M,\xi)$ such that the curve is always *transverse* to the contact planes $\xi$.
:::

For the standard contact structure, written here (after the change of coordinates $(x,y)\mapsto(y,-x)$) as $\xi=\ker(dz-y\,dx)$, the projections of transverse knots to the $xz$-plane cannot have segments like these:

![Three segments that cannot occur in the xz-projection of a positively transverse knot: two vertical tangencies traversed downwards, and a crossing of two downward strands](/notes/neuroscience/figures/h10-transverse-forbidden.svg)

The reason is that $z'(t)-y(t)x'(t)>0$ along a transverse knot. A vertical tangency would have $x'=0$ and $z'<0$, which violates this; in the second case (the crossing) $y(t)$ is bounded by the slope $z'(t)/x'(t)$ in the $xz$-plane, which decides which strand passes in front.

Any transverse knot in the standard contact structure is transversely isotopic to a closed braid.

:::definition Braid group
The **braid group** on $n$ strands is
$$
B_n=\langle\sigma_1,\dots,\sigma_{n-1}\mid \sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1},\ \sigma_i\sigma_j=\sigma_j\sigma_i \text{ for } |i-j|\ge 2\rangle ,
$$
where the generator $\sigma_i$ crosses the $i$-th strand over the $(i+1)$-st:

![The braid generator sigma_i: strands i and i+1 cross, the other strands run straight](/notes/neuroscience/figures/h10-braid-generator.svg)

The first relation is the braid relation, pictured on three strands:

![The braid relation sigma_1 sigma_2 sigma_1 = sigma_2 sigma_1 sigma_2 drawn as two equivalent three-strand braids](/notes/neuroscience/figures/h10-braid-relation.svg)
:::

## The visual cortex as a contact bundle

### Hoffman’s model

W.C. Hoffman, *The visual cortex is a contact bundle* (1989):

- Hubel–Wiesel microcolumns in the columnar structure of the V1 cortex exhibit both directional and areal response. Hoffman models these directional-areal response fields as contact plane directions.
- “Orientation response” refers to the directionally sensitive response field of a single cortical neuron.
- Microelectrode penetration measurements (Hubel, Wiesel) of the directional and areal response of neurons in the cat visual cortex show contact planes.

The first figure reproduced from Hoffman is Hubel and Wiesel’s drawing of electrode penetrations: a cross-section of the cat cortex (areas 17, 18, 19), several electrode tracks (numbered I–VI), and along each track the receptive fields of the cells recorded at successive sites, drawn as small rectangles marking their position and preferred orientation. The second (Hoffman’s Fig. 8) is *a typical orientation response field (ORF) in the visual cortex: the neuronal firing rate response to shining a rectangular $1^\circ\times 8^\circ$ slit of light on the receptive field of a neuron whose “orientation” (i.e., directional) response is maximal in the vertical direction.* The slit is shown at a sequence of orientations next to the recorded spike trains, which are densest for the vertical slit.

### Relation to the shape of Gabor filters

The following pictures are from Sarti, Citti and Petitot, *Functional geometry of the horizontal connectivity in the primary visual cortex* (2009). Their Fig. 2 shows an in vivo registered odd receptive field (from De Angelis et al., 1995) next to a schematic representation of it as a Gabor filter: one dark lobe and one bright lobe side by side, with faint side lobes. Across the lobes, an odd Gabor filter is a sine wave under a Gaussian envelope:

![Profile of an odd Gabor filter: a sine wave under a dashed Gaussian envelope](/notes/neuroscience/figures/h10-gabor-odd.svg)

Their Fig. 3 shows the odd part of Gabor filters with different orientations, and schemata of odd simple cells arranged in a hypercolumn of orientations: a vertical stack of disks, each split into a dark and a light half along a line whose angle increases up the stack. The orientation-tuned cells over one retinal point thus fill out the fiber $\mathbb{P}^1$ of the bundle. (The slides then show the picture of the standard contact structure on $\RR^3$ again.)

### Visual pathways and connections on fiber bundles

The next slide shows the visual pathways from the retina to the visual cortex: from the left and right eyes through the optic chiasma and the lateral geniculate nucleus to the visual cortex, with the corpus callosum connecting the two hemispheres.

- *Paths* (visual contours) are *lifted* along the visual pathways from the retina to the visual cortex.
- Patterns of “constancies” are detected (shape, size, motion, color, etc.), then higher forms (areas 18 and 19 of the human visual cortex).
- The *path lifting property* (from retina to cortex) is, geometrically, path lifting from the base $\mathcal{R}$ to the total space of the fibration $\mathcal{F}$ with fiber $\mathbb{P}^1(\RR)$:
$$
\mathbb{P}^1(\RR)\hookrightarrow\mathcal{F}\overset{\pi}{\twoheadrightarrow}\mathcal{R}.
$$
- To lift a path along the projection of a fibration, one needs to choose a horizontal direction at each point in the total space of the fibration (there is always a well-defined vertical direction). A **connection** determines the choice of a horizontal direction.

![Horizontal and vertical subspaces at a point u of the total space P over a point p of the base](/notes/neuroscience/figures/h10-horizontal-vertical.svg)

In the figure (after Nakahara), $V_uP$ is the vertical subspace at a point $u$ of the total space $P$, tangent to the fiber, and $H_uP$ is a horizontal subspace, a complement to it; $\pi$ projects $u$ to the point $p$ of the base. The next figure, from Nakahara, *Geometry, Topology, and Physics*, shows the trivialization defined by a local section: a section $\sigma_i$ over $U_i$ gives an identification $\phi_i$ of $\pi^{-1}(U_i)$ with $U_i\times G$ under which $\sigma_i(p)$ corresponds to $(p,e)$, and a tangent vector $X$ at $p$ is carried to $\sigma_{i*}X$.

![Trivialization of a bundle over U_i defined by a local section sigma_i, after Nakahara](/notes/neuroscience/figures/h10-local-trivialization.svg)

Hoffman’s picture of path lifting to the visual cortex shows a visual contour $\gamma$ drawn on the retinal surface, the cortical microcolumns standing over points of $\gamma$ as fibers, and small rectangles along the fibers for the orientation response fields; the projection $\pi$ takes each fiber down to its point of $\gamma$.

### Connection 1-form and contact planes

View a connection as a splitting of the exact sequence
$$
T\mathbb{P}^1\to T\mathcal{F}\xrightarrow{\ \pi_*\ }T\mathcal{R}
$$
of tangent spaces of the fibration: a choice of horizontal direction at each point. It is achieved by a 1-form $\alpha$ (scalar valued because the fiber of the circle bundle is $\mathbb{P}^1(\RR)\simeq S^1$), while the vertical direction is $V=\ker(\pi_*)$.

**Geometric model:** the orientation response fields (ORFs) are the contact planes $\xi=\ker(\alpha)$ determined by the connection 1-form $\alpha$ that performs the path lifting from the retina to the visual cortex.

:::question
- When lifting a path from the retina to the visual cortex, one gets a path everywhere transversal to the contact planes.
- The lift of a closed path is in general not a closed path: the endpoints lie on the same fiber of the fibration, but not necessarily at the same point.
- If one obtains a closed path, it can be knotted in the contact 3-manifold (a transverse knot).
- When does this happen? What is the significance of knottedness? What is the role of transverse and Legendrian knots in the visual cortex contact bundle?

:::

### Horizontal connectivity in the primary visual cortex

The model of Sarti, Citti and Petitot works on the product $\mathcal{F}=\mathcal{R}\times\mathbb{P}^1(\RR)$, where $\mathcal{R}\simeq\RR^2$ has coordinates $(x,y)$ and $\mathbb{P}^1(\RR)\simeq S^1$ has coordinate $\theta$.

:::proposition
The 1-form
$$
\alpha=-\sin(\theta)\,dx+\cos(\theta)\,dy
$$
is a contact form on $\mathcal{F}$, and its contact planes are spanned by $(\cos(\theta),\sin(\theta),0)$ and $(0,0,1)$.
:::

:::proof
$$
d\alpha=(\cos(\theta)\,dx+\sin(\theta)\,dy)\wedge d\theta,\qquad \alpha\wedge d\alpha=-dx\wedge dy\wedge d\theta\neq 0 .
$$
Both vectors are killed by $\alpha$, and they are linearly independent.
:::

![Contact planes over one retinal point, stacked along the orientation axis theta from 0 to pi, each containing the theta-direction and the direction (cos theta, sin theta), with the orthogonal vector X_3 in red](/notes/neuroscience/figures/h10-fiber-planes.svg)

The figure shows the contact planes at the points of one fiber, together with the orthogonal vector $X_3=(-\sin\theta,\cos\theta,0)$: as $\theta$ goes from $0$ to $\pi$ the plane turns around the fiber.

The 1-form $\alpha$ relates local tangent vectors (in the lift of the retinal image) and forms integral curves, either along the contact planes (Legendrian) or transverse to them. This is the mechanism responsible for creating regular and illusory contours. (The slide shows integral curves running along the contact planes, drawn over a fan of contact planes.)

### The scale variable

Add a scale variable $\sigma\in\RR_+$: think of the visual-field information recorded in the lift to the visual cortex as a smeared distribution with Gaussian parameter $\sigma$ (Gabor frames), instead of a delta function. When $\sigma\to 0$ one recovers the geometric picture described above, with integral curves.

The geometric space is now $\mathcal{X}=\RR^2\times S^1\times\RR_+$, with coordinates $(x,y,\theta,\sigma)$. For a 2-form on $\mathcal{X}$, scale $\alpha\mapsto\sigma^{-1}\alpha$ and set
$$
\omega=d(\sigma^{-1}\alpha)=\sigma^{-1}d\alpha+\sigma^{-2}\alpha\wedge d\sigma .
$$
This is symplectic:
$$
\omega\wedge\omega=2\sigma^{-3}\,d\alpha\wedge\alpha\wedge d\sigma=-2\sigma^{-3}\,dx\wedge dy\wedge d\theta\wedge d\sigma\neq 0 .
$$

It is not a symplectic filling: $\omega$ blows up as $\sigma\to 0$, so there is no $\omega|_\xi$ at the boundary. The form $d\alpha+\alpha\wedge d\sigma$, by contrast, does restrict to $d\alpha|_\xi\neq 0$ on the contact planes at $\sigma=0$ (though it is not closed: $d(d\alpha+\alpha\wedge d\sigma)=d\alpha\wedge d\sigma$).

In terms of a frame,
$$
\omega=\sigma^{-1}\,\omega_1\wedge\omega_2+\sigma^{-2}\,\omega_3\wedge\omega_4 ,
$$
where $\omega_i$ is the 1-form dual to the vector field $X_i$, and the corresponding vector fields are
$$
\begin{aligned}
X_1&=\cos(\theta)\,\partial_x+\sin(\theta)\,\partial_y, & X_2&=\partial_\theta,\\
X_3&=-\sin(\theta)\,\partial_x+\cos(\theta)\,\partial_y, & X_4&=\partial_\sigma .
\end{aligned}
$$
(So $\omega_1\wedge\omega_2=d\alpha$ and $\omega_3\wedge\omega_4=\alpha\wedge d\sigma$.) For small $\sigma$ the $X_1X_2$ contact planes are predominant; for large $\sigma$, the $X_3X_4$-planes. The slide shows the integral curves in the $X_1X_2$-planes (a fan of curves leaving a small plane in all the directions of that plane) and in the $X_3X_4$-planes.

**Geometry of Gabor filters.** Sarti–Citti–Petitot’s Fig. 7 shows an in vivo registered even receptive field (from Niell and Stryker, 2008) and a schematic representation of it as a Gabor filter, with positive sign in white and negative in black: a bright central lobe between two dark flanks. Across the lobes, an even Gabor filter is a cosine wave under a Gaussian envelope:

![Profile of an even Gabor filter: a cosine wave under a dashed Gaussian envelope](/notes/neuroscience/figures/h10-gabor-even.svg)

With both rotation and dilation, their Fig. 8 shows *the two-dimensional fiber of even simple cells, obtained via rotation and dilation of the mother filter*: a $3\times 3$ grid of even filters, rotated across each row and shrinking down each column.

**Projection in the retinal plane.** Their Fig. 12: *the projection of the integral curves of the symplectic structure on the retinal plane (left) reveals the pattern of co-axial and trans-axial connections found by neurophysiological experiments (right, from Yen and Finkel (1998)).* The projected curves form a bow-tie fan of arcs through a point, tangent to one direction, crossed by a straight segment in the orthogonal direction; the experimental pattern of connections shows the same arrangement.

## Pinwheel structure in the visual cortex

The next pictures are from Petitot. The first shows the V1 cortex of the tree shrew *Tupaia*: optical imaging of the responses to stimuli at four orientations, and the resulting orientation map with different orientations coded by colors, with zooms on a regular point (the colors vary smoothly) and on a singular point (all colors meet: a **pinwheel**). The second draws the iso-orientation (isochromatic) lines of the V1 cortex: curves along which the preferred orientation is constant, which run into the pinwheel points.

Given a section $\sigma:\mathcal{R}\to\mathcal{F}$ of the fibration
$$
\mathbb{P}^1(\RR)\hookrightarrow\mathcal{F}\overset{\pi}{\twoheadrightarrow}\mathcal{R},
$$
(an orientation map, choosing an orientation at each retinal point) one gets a surface $\Sigma=\sigma(\mathcal{R})\subset\mathcal{F}$. The idea is to read the iso-orientation curves through the characteristic (canonical) foliation $\ell_x=\xi_x\cap T_x\Sigma$ of this surface, and the pinwheels in $\Sigma$ as overtwisted disks for this foliation: near a pinwheel the iso-orientation lines all run into one singular point, like the radial model foliation of an overtwisted disk.

Petitot’s picture of *networks of pinwheels* marks the pinwheel points on the orientation map and joins neighboring ones into a network.

- Projected down to $\mathcal{R}$ by $\pi:\mathcal{F}\to\mathcal{R}$, one has a network of pinwheels on $\mathcal{R}$, via the identification of $\Sigma$ and $\mathcal{R}$ given by $\pi\circ\sigma=1$.
- The fiber over each pinwheel point is $\mathbb{P}^1(\RR)$.
- One can view these fibers as the (real) *blowup* of $\mathcal{R}$ at the pinwheel points.

![The fiber over a point p of the retinal plane, drawn as a stack of lines through p in all directions: the real blowup of the plane at p](/notes/neuroscience/figures/h10-blowup-fiber.svg)

:::definition Real blowup of the plane at a point
$$
\operatorname{Bl}_p\mathbb{A}^2=\{((x,y),[z:w])\mid xz+yw=0\}\subset\mathbb{A}^2\times\mathbb{P}^1 ,
$$
(here with $p$ the origin), or equivalently
$$
\operatorname{Bl}_p\mathbb{A}^2=\{(q,\ell)\mid p,q\in\ell\}.
$$
For $p\neq q$ the projection $\pi_1:\operatorname{Bl}_p\mathbb{A}^2\to\mathbb{A}^2$, $(q,\ell)\mapsto q$, is an isomorphism, because there is a unique line $\ell$ through $p$ and $q$; but over $p=q$ the fiber is $\mathbb{P}^1$, the set of all lines $\ell$ through $p$.
:::

An image by Charles Staats shows the real blowup of $\RR^2$ at a point as a twisted, helicoid-like sheet over the plane, with the exceptional fiber standing over the blown-up point. Petitot’s picture of *pinwheels in the base $\mathcal{R}$ and fibers* shows a square grid of pinwheels in the base and, in perspective, the stack of lines (the fiber) over each pinwheel point.

**Observed relation between pinwheel structure and ocular dominance domains.** In Petitot’s picture, the boundaries of the ocular dominance domains are drawn over the iso-orientation lines: the pinwheels’ iso-orientation lines cut the boundaries of the ocular dominance domains transversely and nearly orthogonally.

## Contact invariants and knots in the visual cortex

There are interesting invariants of contact manifolds, such as **contact homology**, a Morse or Morse–Bott theory for the functional
$$
\mathcal{A}(\gamma)=\int_\gamma\alpha
$$
on loops $\gamma$ in $(M,\xi)$ with $\xi=\ker(\alpha)$.

- In the neuroscience setting we are especially interested in transverse and Legendrian knots that occur via the path lifting property from the retinal surface to the contact bundle $\mathcal{R}\times\mathbb{P}^1(\RR)$.
- We want some nice invariants of contact geometry built from transverse and Legendrian knots.

### Heegaard Floer invariants of Legendrian and transverse knots

These come from Lisca, Ozsváth, Stipsicz and Szabó, *Heegaard Floer invariants of Legendrian knots in contact three-manifolds* (2009).

- **Datum:** null-homologous Legendrian and transverse knots in a closed contact 3-manifold $(M,\xi)$.
- **Note:** the null-homologous condition is meaningful in the context of neuroscience applications, since one wants closed curves to be (lifted) contours of two-dimensional surfaces.

A very sketchy overview:

- Given a null-homologous knot $K$ in a 3-manifold $M$, there is an associated homology theory (Heegaard Floer theory) $HFK(M,K,\mathfrak{s})$ (in different versions), where $\mathfrak{s}$ is a $\mathrm{spin}^c$-structure, such that isotopic knots $K_1,K_2$ have the same Floer homology.
- Given a **null-homologous Legendrian knot** $L$, there is a construction of a class $\alpha(L)\in HFK(M,L,\mathfrak{s})$ (with $\mathfrak{s}$ determined by $\xi$), and the invariant is
$$
\mathcal{L}(L)=[HFK(M,L,\mathfrak{s}),\alpha(L)],
$$
the equivalence class under the $\ZZ/2\ZZ[t]$-module structure of $HFK(M,L,\mathfrak{s})$: the isomorphism class of the pair under $\ZZ/2\ZZ[t]$-module isomorphisms.
- There is a **global invariant** $c(M,\xi)$ of contact manifolds (also a class in a Floer homology $HFK(M,\mathfrak{s})$, up to a flip of orientation), the **Ozsváth–Szabó invariant**: if $c(M,\xi)\neq 0$ then all $\mathcal{L}(L)\neq 0$; if $c(M,\xi)=0$ then $t^d\cdot\mathcal{L}(L)=0$ for some large $d$.

:::definition Strong fillability
$(M,\xi)$ is **symplectically fillable** if $M=\partial X$ for a symplectic manifold $(X,\omega)$ with $\omega|_\xi>0$; it is **strongly symplectically fillable** if $M=\partial X$ for a symplectic $(X,\omega)$ with $\omega|_M=d\alpha$.
:::

- If $(M,\xi)$ is strongly symplectically fillable, then $\mathcal{L}(L)\neq 0$ for all null-homologous Legendrian knots $L$.
- If $(M,\xi)$ is **overtwisted**, then for any null-homologous Legendrian knot $L$ there is a $d\ge 0$ with $t^d\cdot\mathcal{L}(L)=0$.
- For a **transverse knot** $K$ in a contact 3-manifold $(M,\xi)$ there is an “approximation by a Legendrian knot” $L_K$, and one sets $\mathcal{L}(K):=\mathcal{L}(L_K)$.

These provide invariants to study null-homologous transverse and Legendrian knots in contact manifolds. An example of the properties of such knots that they detect: $L$ is *loose* if its complement contains an overtwisted disk, and *non-loose* if $(M,\xi)$ is overtwisted but the complement of $L$ is tight (this is about the position of the overtwisted disks with respect to the knot). If $L$ is loose then $\mathcal{L}(L)=0$.

:::question General problem
Is there a use for invariants of contact manifolds, and of Legendrian and transverse knots in contact manifolds, to understand the geometry of path lifting from the retina to V1 and its relation to the ocular dominance regions in V1?
:::

## Gabor frames from contact geometry

This part follows Liontou and Marcolli, *Gabor frames from contact geometry in models of the primary visual cortex* (2023).

- There is an interesting interplay in the V1 cortex between the **geometry** describing the connectivity in terms of a contact structure and the **signal analysis** carried out by Gabor filters associated to the orientation-sensitive receptor fields.
- What is the mathematical structure that gives rise to **signal analysis from contact geometry**?
- The two seem to live in different places: Gabor analysis is a linear structure, contact geometry a nonlinear manifold structure.

### Circle bundles of contact elements

:::definition Legendrian circle bundle
A contact 3-manifold $(M,\alpha)$ is a **Legendrian circle bundle** over a surface $S$,
$$
S^1\hookrightarrow M\to S,
$$
if the fiber directions $TS^1$ inside the tangent bundle $TM$ are contained in the contact plane distribution $\xi=\ker(\alpha)\subset TM$.
:::

- Classification (R. Lutz) of Legendrian circle bundles: either the **unit cosphere bundle** $M=\mathbb{S}(T^*S)$, or a $d$-fold cyclic cover of it for $d\mid(2g-2)$, with $g=g(S)$ the genus.
- For the V1 model, $S=S^2=\mathbb{P}^1(\CC)$ has genus zero and $M=\mathbb{S}(T^*S)$.
- The contact form $\alpha$ on $M=\mathbb{S}(T^*S)$ is determined by the **tautological Liouville form** $\lambda$ on $T^*S$.

### The tautological Liouville form

:::definition Tautological Liouville form
On any manifold $Y$ the cotangent bundle $T^*Y$ has a canonical 1-form
$$
\lambda_{(x,p)}(v)=p(d\pi(v))
$$
for $v\in T_{(x,p)}(T^*Y)$, with $\pi:T^*Y\to Y$ the bundle projection. In local coordinates $(x,p)$ with $x=(x_i)\in Y$ and $p=(p_i)\in T^*_xY$, the Liouville 1-form is
$$
\lambda=\sum_i p_i\,dx^i .
$$
:::

This 1-form determines the canonical symplectic form $\omega=d\lambda$ of the cotangent bundle $T^*Y$. The restriction of the Liouville 1-form $\lambda$ to the unit spheres in $T^*_xY$ induces a contact 1-form $\alpha$ on the cosphere bundle $\mathbb{S}(T^*Y)$.

:::example Local coordinates
Let $(x,y)$ be local coordinates on the surface $S$ and $(u,v)$ local coordinates on the cotangent fiber $T^*_{(x,y)}S$.

- The tautological Liouville 1-form is $\lambda=u\,dx+v\,dy$.
- The symplectic form is $\omega=du\wedge dx+dv\wedge dy$.
- With polar coordinates $(w,\theta)$ in the cotangent planes, the contact 1-form induced on the cosphere bundle $M_w=\mathbb{S}_w(T^*S)$ of radius $w$ is
$$
\alpha=w\cos(\theta)\,dx+w\sin(\theta)\,dy .
$$
- The contact plane distribution is generated by the two vector fields $\partial_\theta$ and $-\sin(\theta)\,\partial_x+\cos(\theta)\,\partial_y$.
- The Reeb vector field (transversal) is
$$
R_\alpha=w^{-1}\cos(\theta)\,\partial_x+w^{-1}\sin(\theta)\,\partial_y .
$$
:::

### Complex structure and the twisted tautological form

The surface $S=\mathbb{P}^1(\CC)$, the Riemann sphere, has a complex structure (also responsible for the conformal retinotopic mapping). With complex coordinate $z=x+iy$ on $S$, the induced complex structure on $T^*_{(x,y)}S$ is $J:(u,v)\mapsto(-v,u)$.

:::definition Twisted tautological form
The **twisted tautological form** with respect to $J$ is
$$
\lambda_J=-v\,dx+u\,dy ,
$$
with associated symplectic form $\omega_J=-dv\wedge dx+du\wedge dy$.
:::

So there are **two contact structures** $\alpha$ and $\alpha_J$ on $M=\mathbb{S}(T^*S)$, where $\alpha_J=-w\sin(\theta)\,dx+w\cos(\theta)\,dy$ is the restriction of $\lambda_J$, with Reeb field $R_{\alpha_J}=w^{-1}(-\sin(\theta)\,\partial_x+\cos(\theta)\,\partial_y)$.

- The contact planes of these two contact structures intersect along the fiber direction, spanned by $\partial_\theta$, so *the fibers are Legendrian circles with respect to both*.
- The Reeb field $R_\alpha$ of $\alpha$ is Legendrian for $\alpha_J$, and the Reeb field $R_{\alpha_J}$ is Legendrian for $\alpha$.
- The complex structure $J$ fixes $\partial_\theta$ and exchanges $R_{\alpha_J}$ and $R_\alpha$.

### The bundle of signal planes

Let $\mathcal{E}$ be the real 2-plane bundle $\RR^2\hookrightarrow\mathcal{E}\to M$ over the contact 3-manifold $M=\mathbb{S}(T^*S)$ given by
$$
\mathcal{E}=\pi^*TS,
$$
the pullback of the tangent bundle $TS$ of the surface $S$ to $M$ along the projection $\pi:\mathbb{S}(T^*S)\to S$ of the unit cosphere bundle.

- At a point $(x,y,\theta)\in M$, with $z=x+iy$ on $S$ and $\theta$ on the circle fiber over $z$, the fiber $\mathcal{E}_{(x,y,\theta)}$ is the same as the fiber $T_zS$.
- Meaning: $S$ is a curved surface, $TS$ is the collection of its local linear approximations $T_zS$, and the bundle $\mathcal{E}$ places such linear approximations at each location $(x,y,\theta)$ in $M$.
- Think of this as a retinotopy designed to transfer linear signal-analysis filters in the linear spaces $T_zS$ (for signals on $S$) to the 3-dimensional columnar structure (with its information on orientation sensitivity $\theta$) of the V1 cortex.
- A signal on the retina $S$ is lifted to signals on the linear spaces $T_zS$, and then to a signal $\mathcal{I}\in L^2(\mathcal{E},\RR)$ on $\mathcal{E}$.

### The exponential map and the injectivity radius

On a Riemannian manifold $(Y,g)$ one can *locally* map the flat linear tangent space $T_xY$ to a curved coordinate neighborhood of the point $x\in Y$ through the *exponential map*. (The slide’s picture shows a curved surface $M$ with its tangent plane $T_yM$ at a point $y$: a vector $z=\log_y(x)$ in the tangent plane is sent to the point $x=\exp_y(z)$ of the surface.)

:::definition Exponential map
Using the (locally) unique geodesic $\gamma_{x,v}(t)$ with $\gamma_{x,v}(0)=x$ and $\gamma'_{x,v}(0)=v$, the **exponential map** is
$$
\exp_x:\mathcal{U}\to Y\qquad\text{with}\qquad \exp_x(v)=\gamma_{x,v}(1),
$$
for $\mathcal{U}$ a neighborhood of $0$ in $T_xY$. The manifold is **geodesically complete** if the exponential map is defined globally, $\exp_x:T_xY\to Y$ (for example, compact manifolds).
:::

In general $\exp_x$ is not a diffeomorphism: geodesics on $Y$ can close up, and injectivity fails. This is measured by the **injectivity radius**.

![The exponential map on the sphere: a tangent vector xi at x is sent along the geodesic gamma(t) to the point y = exp_x(xi)](/notes/neuroscience/figures/h10-exp-map.svg)

:::definition Injectivity radius
At a point $x\in Y$, let $R_{inj}(x)>0$ be the supremum of all radii $R>0$ such that the exponential map $\exp_x:T_xY\to Y$ is a diffeomorphism on the ball $B(0,R)$ of radius $R$ in $T_xY$. On a compact manifold this gives a continuous **injectivity radius function**
$$
R_{inj}:Y\to\RR^*_+,\qquad x\mapsto R_{inj}(x).
$$
:::

### The pathway of signals: faithfulness

- A signal is a real-valued function $\mathcal{J}:S\to\RR$ on the retinal surface $S$.
- It is lifted to a collection of functions $\mathcal{J}_z:T_zS\to\RR$ on the linear tangent spaces $T_zS$ by pulling back through the exponential map, $\mathcal{J}_z=\mathcal{J}\circ\exp_z$.
- This gives a single function $\tilde{\mathcal{I}}:TS\to\RR$ with $\tilde{\mathcal{I}}(z,v)=\mathcal{J}_z(v)$, hence by pullback a function $\mathcal{I}:\mathcal{E}\to\RR$ with $\mathcal{I}((z,\theta),v)=\tilde{\mathcal{I}}(z,v)$.
- The **injectivity radius** function $R_{inj}:S\to\RR^*_+$ of the exponential map $\exp_z:T_zS\to S$ describes a region where the signal $\mathcal{I}$ on the bundle $\mathcal{E}$ faithfully represents the retinal signal $\mathcal{J}$.

### Lattices and Gabor frames

Consider the dual vector bundle (the bundle of linear functionals on $\mathcal{E}$)
$$
\mathcal{E}^\vee=\Hom(\mathcal{E},\RR).
$$
The symmetry of the Reeb fields under the complex structure twist gives dual local bases $\{\alpha,\alpha_J\}$ and $\{R_\alpha,R_{\alpha_J}\}$ on a dense open $U\subset S$.

:::definition Bundles of framed lattices
A **framed lattice** is a lattice with an assigned basis. Over a local chart in $M$ there are bundles of framed lattices
$$
\Lambda_{\alpha,J}:=\ZZ\,R_\alpha+\ZZ\,R_{\alpha_J}\qquad\text{and}\qquad \Lambda^\vee_{\alpha,J}:=\ZZ\,\alpha+\ZZ\,\alpha_J ,
$$
giving a bundle of framed lattices $\Lambda_{\alpha,J}\oplus\Lambda^\vee_{\alpha,J}$ in $\mathcal{E}\oplus\mathcal{E}^\vee$; equivalently,
$$
\Lambda=\ZZ\,R_\alpha\oplus\ZZ\,\alpha,\qquad \Lambda_J=\ZZ\,R_{\alpha_J}\oplus\ZZ\,\alpha_J .
$$
:::

:::definition Window function
On $TS\oplus T^*S$ the **window function** is
$$
\Phi_{0,(x,y)}(V,\eta):=\exp\big(-V^tA_{(x,y)}V-i\langle\eta,V\rangle_{(x,y)}\big),
$$
where $A$ is a smooth section of $T^*S\otimes T^*S$ which is a symmetric and positive definite quadratic form on the fibers of $TS$. At all points $(x,y)$ in the local chart $U$ in $S$ the matrix $A_{(x,y)}$ has eigenvalues uniformly bounded away from zero: $\operatorname{Spec}(A_{(x,y)})\subset[\lambda,\infty)$ for some $\lambda>0$.

The restriction of $\Phi_0$ to $TS\oplus\mathbb{S}_w(T^*S)$ gives a function on $\mathcal{E}$,
$$
\Psi_{0,(x,y,\theta)}(V):=\exp\big(-V^tA_{(x,y)}V-i\langle\eta_\theta,V\rangle_{(x,y)}\big),\qquad \eta_\theta=(w\cos(\theta),w\sin(\theta)).
$$
So the window function lives on $\mathcal{E}\oplus\mathcal{E}^\vee$.
:::

(Its real and imaginary parts, $e^{-V^tAV}\cos\langle\eta_\theta,V\rangle$ and $-e^{-V^tAV}\sin\langle\eta_\theta,V\rangle$, are the even and odd Gabor profiles pictured earlier.)

:::definition Gabor system
The Gabor system
$$
\mathcal{G}(\Psi_0,\Lambda_{\alpha,J}\oplus\Lambda^\vee_{\alpha,J})
$$
is the collection, at each point $(x,y,\theta)\in M$, of the Gabor systems
$$
\mathcal{G}(\Psi_{0,(x,y,\theta)},\Lambda_{\alpha,J,(x,y,\theta)}\oplus\Lambda^\vee_{\alpha,J,(x,y,\theta)})
$$
consisting of the functions $\rho(\lambda)\Psi_0=\rho(\xi)\rho(W)\Psi_0$, for $\lambda=(W,\xi)\in\Lambda+\Lambda_J$ (here $\xi$ is a covector, not the contact structure),
$$
\rho(\lambda)\Psi_0(V):=e^{2\pi i\langle\xi,V\rangle}\,\Psi_0(V-W),
$$
in the function spaces $L^2(\mathcal{E}_{(x,y,\theta)})$.
:::

### The injectivity radius and the scaling function

- **Empirical cutoff scale:** a finite (though large) number of receptor profiles is involved in signal analysis in V1, hence only filters $\rho(\lambda)\Psi_0$ with $\lambda$ contained in some ball of radius $R_{\max}$.
- **Geometric cutoff scale:** the injectivity radius, where moving signals between the curved $S$ and the linear $T_zS$ stops being faithful.
- The **scaling factor** compares these two cutoffs:
$$
b_M(x,y,\theta):=\frac{R_{inj}(x,y)}{R_{\max}}<1 .
$$
It is the intrinsic scale of the Gabor system construction for signal analysis in V1.

:::definition Rescaled Gabor system
To ensure that the empirically available filters cover the desired signal region, use the rescaled Gabor system
$$
\mathcal{G}(\Psi_0,\Lambda_{b,\alpha,J}\oplus\Lambda^\vee_{b,\alpha,J})
$$
with
$$
\Lambda_{b,\alpha,J}:=b_M\,\Lambda_{\alpha,J}=\ZZ\,b_MR_\alpha+\ZZ\,b_MR_{\alpha_J},\qquad
\begin{cases}
\Lambda_b=\ZZ\,b_MR_\alpha\oplus\ZZ\,\alpha,\\
\Lambda_{b,J}=\ZZ\,b_MR_{\alpha_J}\oplus\ZZ\,\alpha_J .
\end{cases}
$$
:::

:::proposition Frame condition
The condition
$$
b_M(x,y,\theta)<1\qquad\text{for all }(x,y,\theta)\in M
$$
ensures that the rescaled Gabor system satisfies the **frame condition** (pointwise):
$$
C_{(x,y,\theta)}\,\|f\|^2_{L^2(\mathcal{E}_{(x,y,\theta)})}\le\sum_{\lambda_{(x,y,\theta)}}\big|\langle f,\rho(\lambda_{(x,y,\theta)})\Psi_0\rangle\big|^2\le C'_{(x,y,\theta)}\,\|f\|^2_{L^2(\mathcal{E}_{(x,y,\theta)})}
$$
for $\lambda_{(x,y,\theta)}\in(\Lambda_{b,\alpha,J}\oplus\Lambda^\vee_{b,\alpha,J})_{(x,y,\theta)}$, so it performs **good signal analysis**.
:::

## Symplectization and contactization

There are two constructions going back and forth between contact and symplectic manifolds:

1. a contact manifold $(M,\alpha)$ gives a symplectic manifold $(M\times\RR,\omega)$ (**symplectization**);
2. a symplectic manifold $(Y,\omega)$ gives a contact manifold $(Y\times S^1,\alpha)$ (**contactization**).

:::definition Symplectization
The symplectization (always possible) of $(M,\alpha)$ is $(M\times\RR,\omega)$ with $\omega=d(e^s\cdot\alpha)$, where $s\in\RR$ is the cylinder coordinate. Equivalently, with $w=e^s\in\RR^*_+$, the symplectic form is
$$
\omega=dw\wedge\alpha+w\,d\alpha .
$$
:::

:::example
For the contact manifold $M=\mathbb{S}(T^*S)$ (with $\alpha=\cos\theta\,dx+\sin\theta\,dy$ and $\alpha_J=-\sin\theta\,dx+\cos\theta\,dy$ the contact forms on the unit cosphere bundle, $w=1$), the symplectization is the complement of the zero section, $T^*S_0:=T^*S\smallsetminus\{0\}$, with the symplectic form
$$
\omega=dw\wedge\alpha+w\,d\alpha=du\wedge dx+dv\wedge dy
$$
and the $J$-twisted symplectic form
$$
\omega_J=dw\wedge\alpha_J+w\,d\alpha_J=-dv\wedge dx+du\wedge dy ,
$$
with $(u,v)=(w\cos\theta,w\sin\theta)$.
:::

The variables $\theta\in S^1$ and $w=e^s\in\RR^*_+$ in the symplectic form $\omega=d(e^s\cdot\alpha)$ account for the orientation dependence (through $\alpha$) and for *scale*. The slide illustrates this with Gabor filters of several orientations and sizes, drawn as light and dark elongated ellipses.

:::definition Contactization
Contactization is more constrained. For a symplectic manifold $(Y,\omega)$: if the symplectic form is **exact**, $\omega=d\lambda$, then the contactization is $(Y\times S^1,\alpha)$ with $\alpha=\lambda-d\phi$, where $\phi$ is the angle coordinate on $S^1$.
:::

- The symplectization of a contact manifold is an exact symplectic manifold, $\omega=d(e^s\cdot\alpha)=d(\lambda)$, so there is always a contactization of the symplectization.
- When $\omega$ is not exact this is sometimes still possible, via “prequantization bundles”.

:::example
The contactization of the symplectization of the contact 3-manifold $M=\mathbb{S}(T^*S)$ is the 5-manifold $T^*S_0\times S^1$ with contact form
$$
\tilde\alpha=\lambda-d\phi=w\,\alpha-d\phi ,
$$
and $J$-twist $\tilde\alpha_J=w\,\alpha_J-d\phi$. It has an additional angle coordinate $\phi\in S^1$, besides the orientation variable $\theta\in S^1$ and the scale $w=e^s\in\RR^*_+$.
:::

The 5-dimensional contact manifold $\mathcal{CS}(M):=T^*S_0\times S^1$ corresponds to a model in which an additional pair of dual variables is introduced, describing the **phase and velocity of spatial wave propagation**: orientation dependence in the 3-manifold $(M=\mathbb{S}(T^*S),\alpha)$, and additional direction/phase sensitivity in the 5-manifold $(\mathcal{CS}(M),\tilde\alpha)$. This model was proposed by Baspinar, Sarti and Citti, *A sub-Riemannian model of the visual cortex with frequency and phase* (2020).

## References

- Jean Petitot, *Neurogéométrie de la Vision*, Les Éditions de l’École Polytechnique, 2008.
- John B. Etnyre, *Introductory Lectures on Contact Geometry*, arXiv:math/0111118.
- W.C. Hoffman, *The visual cortex is a contact bundle*, Applied Mathematics and Computation 32 (1989) 137–167.
- O. Ben-Shahar, S. Zucker, *Geometrical Computations Explain Projection Patterns of Long-Range Horizontal Connections in Visual Cortex*, Neural Computation 16, 3 (2004) 445–476.
- Alessandro Sarti, Giovanna Citti, Jean Petitot, *Functional geometry of the horizontal connectivity in the primary visual cortex*, Journal of Physiology - Paris 103 (2009) 3–45.
- V. Liontou, M. Marcolli, *Gabor frames from contact geometry in models of the primary visual cortex*, Math. Neuro. and Appl. 3 (2023), article no. 2, 1–28.
- M. Nakahara, *Geometry, Topology, and Physics*, CRC Press, 2003.
- S.C. Yen, L.H. Finkel, *Extraction of perceptually salient contours by striate cortical networks*, Vision Res. 38 (1998) no. 5, 719–741.
- Paolo Lisca, Peter Ozsváth, András I. Stipsicz, Zoltán Szabó, *Heegaard Floer invariants of Legendrian knots in contact three-manifolds*, J. Eur. Math. Soc. 11 (2009) 1307–1363.
- E. Baspinar, A. Sarti, G. Citti, *A sub-Riemannian model of the visual cortex with frequency and phase*, The Journal of Mathematical Neuroscience 10 (2020) Article 11, 31 pp.
- De Angelis et al. (1995) and Niell and Stryker (2008), cited in figure captions from Sarti–Citti–Petitot for the in vivo receptive fields.
