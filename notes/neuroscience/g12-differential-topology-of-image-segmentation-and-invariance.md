---
course: neuroscience
chapter: 11
section: G12
title: Differential Topology of Image Segmentation and Invariance
lecturer: Matilde Marcolli
source-pages: 1-49
---

This part of the course is based on the paper of Thomas J. Tsao and Doris Y. Tsao, *A topological solution to object segmentation and tracking* (Proc. Natl. Acad. Sci. U.S.A. 2022).

## Segmentation and invariance

Vision has to solve two basic problems:

- the **segmentation problem**: how the visual pixels of a single image are grouped into distinct objects;
- the **invariance problem**: how objects can be identified across images despite their changing appearance.

The slides illustrate both with photographs (from Tsao–Tsao): (A) a close-up of overlapping variegated leaves with three circled points, where one has to decide which of the points lie on the same leaf; (B) three photographs of the same horse, seen from the side, from behind and from the front. The main problem of invariance is that the appearance of the same object can change drastically with a change in perspective.

One could hand-pick multiple views of the same object and train classifiers to perform view-invariant detection. This delegates the problem to the hand-picker responsible for the training, which is the same biological visual system one wants to understand. The main idea of the mathematical approach is instead:

- **segmentation** of an image into separate surfaces through the detection of *occluding contours* (the spatial separation of visible surfaces);
- **tracking** of invariant surfaces through the detection of *stereo diffeomorphisms* (the overlap relations between surfaces visible from different views).

There are two aspects of the problem:

1. how surfaces in space are projected into ray spaces, and how diffeomorphisms in ray spaces encode surfaces;
2. how to compute these diffeomorphisms from images.

The first is an “encoding” problem, mathematically well posed; the second is a “detection” problem, subject to noise and ambiguity. The basic object is the **perspective projection**, a map from a 2D surface to a 2D ray space. Differential topology lets one view perspective projections as 2D-to-2D diffeomorphisms on regular domains separated by critical points.

A figure from Tsao–Tsao summarizes the framework in four panels, each pairing a photograph of a variegated leaf with a schematic drawing: (A) points project to ray space (a point $P$ seen from $O$ is recorded by two spherical angles); (B) surface contiguity is faithfully encoded (a surface patch carrying a letter “A” projects to domains $S_1$, $S_2$ in the ray spaces of two observation points $O_1$, $O_2$, related by a map $(g,S_1,S_2)$); (C) at an occluding contour local diffeomorphisms break down, with an “owner side” of the contour and an accretion region on the other side; (D) surface persistence (a surface carrying “A B C” is followed through a chain of observation points by maps $(g,S_1,S_2)$, $(g,S_3,S_4)$, $(g,S_5,S_6)$).

The main properties of the approach:

- 3D space is mapped homeomorphically, through biprojection, onto a 3D submanifold of the product of a pair of 2D ray spaces;
- a scene in 3D space is a collection of 2D surfaces, and these are also mapped continuously into the product of two ray spaces;
- the topology of the surfaces is coded by perspective transformations between pairs of ray spaces;
- a mapping from a domain in one ray space to another ray space fully specifies a surface in the 3D environment;
- there are conditions under which partial samples can be associated with a single surface;
- transition vectors model movements of the eye and perspective transitions: perspective mappings and occluding contours are derived from changes of images.

## Ray spaces and perspective projection

:::definition Scenes, rays and visual space
- **Setting**: a scene in Euclidean 3D space, consisting of compact objects (and planes) whose boundary is a collection of smooth, compact, orientable 2D surfaces (rough surfaces are approximated by smooth ones).
- A **ray** is a half-line in Euclidean 3D space.
- The **ray space** $\mathcal S(P)$ is the set of all rays starting at a point $P\in\RR^3$. It is identified with the sphere, $\mathcal S(P)\cong S^2$. (Rays are half-lines, not lines, so the parameterizing space is $S^2$ and not $\PP^2(\RR)$.) On ray space we use spherical coordinates $(\theta,\phi)$ with $\theta\in[0,2\pi)$ and $\phi\in[0,\pi]$.
- An **observation domain** is an open connected region $\Omega\subset\RR^3$.
- The **visual space** is the sphere bundle $\mathcal S(\Omega)$ with fiber $\mathcal S(P)\cong S^2$ over each $P\in\Omega$ and projection map $\pi:\mathcal S(\Omega)\to\Omega$.
:::

:::definition Ray projection
Given an observation point $O\in\RR^3$, a point $P\neq O$ of $\RR^3$ **projects** to the ray $r=(\theta,\phi)$ in the ray space $\mathcal S(O)$, the ray from $O$ through $P$.
:::

![Ray projection: the ray r from O through P, with spherical angles theta and phi](/notes/neuroscience/figures/h11-ray-projection.svg)

:::definition Visibility and perspective projection
- A point $P$ is **visible** from $O$ if the interior of the ray segment from $P$ to $O$ does not intersect any surface $\Sigma$ in the given scene.
- The **visible scene** for an observation point $O$ is the set of points $P$ on the surfaces $\Sigma$ in the scene that are visible from $O$.
- The **perspective projection** from a 2D surface $\Sigma$ in $\RR^3$ to a ray space $\mathcal S(O)$, with $O\notin\Sigma$, is the ray projection of each *visible* point $P\in\Sigma$.
- The **ambient perspective projection** is the perspective projection to $\mathcal S(O)$ of all points of the visible 3D environment.
- The **ambient perspective projection to a visual space** $\mathcal S(\Omega)$ is the collection of the ambient perspective projections to each $\mathcal S(O)$ with $O\in\Omega$.
:::

## The groupoid of movement in observation space

Not all rigid motions of the ambient $\RR^3$ are available as shifts of perspective of the observer: the observer’s motion is restricted by the scene. One considers the set of arrows corresponding to the allowed motions, with a composition rule (the source of the next arrow equals the target of the previous one). This is a groupoid.

:::definition Groupoid
A **groupoid** $\mathcal G$ is a small category in which all morphisms (arrows) are invertible. It consists of

- a set of objects $\mathcal G^{(0)}$;
- a set of morphisms (arrows) $\mathcal G^{(1)}$;
- source and target maps $s,t:\mathcal G^{(1)}\to\mathcal G^{(0)}$;
- an associative composition
$$
\begin{aligned}
&(x_2=s(\gamma_2),\gamma_2,x_3=t(\gamma_2))\circ(x_1=s(\gamma_1),\gamma_1,x_2=t(\gamma_1))\\
&\qquad=(x_1=s(\gamma_2\circ\gamma_1),\gamma_2\circ\gamma_1,x_3=t(\gamma_2\circ\gamma_1)).
\end{aligned}
$$
:::

The **perspective transition groupoid** has as arrows the triples $(P,\gamma,Q)$ with $P,Q\in\Omega$ and $\gamma$ a rigid motion of $\RR^3$ that maps $s(\gamma)=P$ to $t(\gamma)=Q$. (A refined version, in which the arrows also act on rays, is given in the second half of these notes.)

## Stereo projection

:::definition Stereo projection and stereo set
Let $(O,\gamma,O')$ be a perspective transition, with ray spaces $\mathcal S(O)$ and $\mathcal S(O')$. A source point $P$ in the visual scene, visible from both $O$ and $O'$, determines rays $r_O(P)\in\mathcal S(O)$ and $r_{O'}(P)\in\mathcal S(O')$. These are related by $r_{O'}(P)=\gamma_*\,r_O(P)$, where $\gamma_*:\mathcal S(O)\to\mathcal S(O')$ is the induced transformation (a diffeomorphism between domains of $S^2$). This is the **stereo projection**. The map $\gamma_*$ depends on the surface on which $P$ lies as well as on $\gamma$: the rigid motion by itself sends the ray from $O$ through $P$ to the ray from $O'$ through $\gamma(P)$, drawn as $\gamma(r)$ in the figure below.

The **stereo set** of the perspective transition $(O,\gamma,O')$ is
$$
\mathcal S_\Sigma(O,O')=\{(r_O(P),r_{O'}(P))\in\mathcal S(O)\times\mathcal S(O')\mid P\in\Sigma_O\cap\Sigma_{O'}\},
$$
where $\Sigma_O,\Sigma_{O'}\subset\Sigma$ are the parts of the scene $\Sigma$ (a union of 2D surfaces) visible from $O$ and from $O'$.
:::

The product $\mathcal S(O)\times\mathcal S(O')\cong S^2\times S^2$ is a 4D space, and a stereo set $\mathcal S_\Sigma(O,O')$ is a 2D surface in this 4D space.

![The geometry of a perspective transition and the stereo projection (biprojection) of a point P](/notes/neuroscience/figures/h11-stereo-geometry.svg)

The figure shows the geometry of a perspective transition and the stereo projection (biprojection) of a point $P$ of the visual scene: $P$ projects to $r\in\mathcal S(O)$ and to $r'\in\mathcal S(O')$; $e$ and $e'$ are the points where the baseline $OO'$ meets the two spheres, and $\alpha$, $\alpha'$ are the angles between the baseline and the two rays.

:::proposition 3D embedding
Let $\ell_{OO'}$ be the line through $O$ and $O'$ and $\mathcal M=\RR^3\smallsetminus\ell_{OO'}$. The biprojection $\mathcal M\to\mathcal S(O)\times\mathcal S(O')$, $P\mapsto(r_O(P),r_{O'}(P))$, is a diffeomorphic embedding.
:::

:::proof
This can be checked directly in local coordinates. Put $O$ at $(0,0,0)$ and $O'$ at $(0,0,\ell)$. The map is $(x,y,z)\mapsto(\theta,\phi,\theta',\phi')$ with
$$
\begin{aligned}
\theta&=\arccos\Big(\frac{x}{(x^2+y^2)^{1/2}}\Big), &\qquad \phi&=\arccos\Big(\frac{z}{(x^2+y^2+z^2)^{1/2}}\Big),\\
\theta'&=\arccos\Big(\frac{x}{(x^2+y^2)^{1/2}}\Big), &\qquad \phi'&=\arccos\Big(\frac{z-\ell}{(x^2+y^2+(z-\ell)^2)^{1/2}}\Big),
\end{aligned}
$$
with $\theta$ taken in $[0,2\pi)$ according to the sign of $y$. Since $O'$ lies on the $z$-axis, $\theta'=\theta$, so the image lies in the 3-dimensional submanifold $\{\theta=\theta'\}$ (the “3D submanifold” of the main properties above); a point is recovered from $(\theta,\phi,\phi')$ as the intersection of the two rays from $O$ and $O'$ in the half-plane of angle $\theta$.
:::

Now take a domain $S_1\subset\mathcal S(O)$ and a diffeomorphism $g:S^2\to S^2$, applied as $g:\mathcal S(O)\to\mathcal S(O')$, which maps $S_1$ to a diffeomorphic image $S_2=g(S_1)$ in $\mathcal S(O')$. Its graph
$$
\Gamma(g,S_1,S_2)=\{(P,Q)\in S_1\times S_2\mid Q=g(P)\}
$$
is a 2D submanifold embedded in the 4D space $\mathcal S(O)\times\mathcal S(O')$. Thus in a perspective transition the stereo projection encodes a surface, without loss of information, as a 2D submanifold of $\mathcal S(O)\times\mathcal S(O')$.

The slides illustrate this with a picture from Tsao–Tsao: a curved surface carrying a letter “A”, seen from two observation points. The patch projects to domains $S_1$ and $S_2$ on the two ray-space spheres, where the letter appears distorted in two different ways, and the two domains are related by the stereo diffeomorphism $(g,S_1,S_2)$.

## Occluding contours

Almost all points of a ray space are regular with respect to a perspective projection: they are regular values, since by Sard’s theorem the critical values of a differentiable map form a set of measure zero.

:::definition Fold cone and occluding contours
The **fold cone** of an object, seen from an observation point, is the cone of rays grazing the object. The surface of the fold cone is transverse to the surfaces $\Sigma$ of the scene except at the **occluding contours**, where transversality fails.
:::

The slide’s cartoon shows the ray-space sphere of an observer and a cone of rays grazing a small round object; the cone continues past it and meets a background object (a cloud) along a ring.

![Point B is on an occluding contour for O but a regular point for O’](/notes/neuroscience/figures/h11-occluding-contour.svg)

In the figure, the point $B$ is on an occluding contour for $O$ but is a regular point for $O'$: the ray from $O$ through $B$ is tangent to the object, while the ray from $O'$ crosses the object’s boundary transversally at $B$ (the occluding contour for $O'$ is at $B'$).

### Singularities: folds and cusps

The relevant theory of singularities is in H. Whitney, *On singularities of mappings of Euclidean spaces. I. Mappings of the plane into the plane* (Annals of Mathematics 1955), and in V. I. Arnold, *Catastrophe Theory* (Springer 1984).

:::theorem Whitney
Generically there are only two kinds of singularities: all other singularities reduce to these, or cancel under small changes in the direction of projection, while these two types are stable and persist after small deformations of the map. The stable singularities of smooth mappings between 2D surfaces are

- **folds**,
- **cusps**.
:::

The slides use Arnold’s pictures. First, the fold of the projection of a sphere onto the plane:

![The fold of the projection of a sphere onto the plane](/notes/neuroscience/figures/h11-fold-sphere.svg)

Second, the cusp of the projection of a surface onto the plane. Arnold’s picture shows a pleated surface over the plane, its fold curve, and the image of the fold curve in the plane, which has a cusp. Here it is drawn for the normal form $y_1=x_1^3+x_1x_2$, $y_2=x_2$ given further below: the critical points form the parabola $x_2=-3x_1^2$, whose image $(y_1,y_2)=(-2t^3,-3t^2)$ is a semicubical cusp.

![The cusp of a projection of a surface onto the plane: critical curve and its image](/notes/neuroscience/figures/h11-cusp.svg)

Both singularities appear as occlusion contours. For a torus, the apparent contour consists of an outer fold curve and inner fold curves that end in cusps:

![The apparent contour of a torus, with fold curves and four cusps](/notes/neuroscience/figures/h11-torus-contour.svg)

- Every point in a border of accretion is a critical value of the perspective projection.
- The singularities of a projection from a surface to the ray space are either fold points or cusp points (at the end of a fold contour).

### Ownership of occluding contours

Figure–background perception problems show that a contour in a 2D image may be ambiguous as to which side it belongs to. The slide shows the classical black vase on a white background, whose outline can also be seen as two faces in profile. This **ownership** problem arises with 2D images, but it is usually resolved when one is allowed to change perspective (mapping 3D space with biprojections to $S^2\times S^2$).

### Accretion

![Accretion: the observation point moves from A to B and the occluding contour point moves from C to D](/notes/neuroscience/figures/h11-accretion.svg)

The observation point moves from $A$ to $B$, the occlusion contour point moves from $C$ to $D$, and the accretion area is spanned by the angle $\alpha$ in $\mathcal S(B)$. The figure also marks the angle $\beta$ in $\mathcal S(B)$ spanned by the piece $FE$ of the background that becomes visible from $B$.

### Illusory contours versus occluding contours

In a segmentation of a 2D image some contours are “illusory”: they do not separate different objects in 3D space. The slides show an example from Tsao–Tsao: two frames of a cluttered scene, their edge maps, and two kinds of contour segments compared between the frames. For a texture segment, the image regions on both sides of the contour map diffeomorphically from one frame to the other. For an occluding segment, the region on one side (the owner side) maps diffeomorphically, and the region on the other side does not.

:::definition Surface with boundary
A **surface with boundary** has local charts $\phi_i:U_i\to H^2:=\RR\times\RR_+$, homeomorphisms of $U_i$ with open sets of $\RR\times\RR_+$ in the topology induced from $\RR^2$, with smooth coordinate changes
$$
\phi_j\circ\phi_i^{-1}:\phi_i(U_i\cap U_j)\to\phi_j(U_i\cap U_j).
$$
A map is smooth near a point of $\RR\times\RR_+$ if it extends to a smooth map on a neighborhood of the point in $\RR^2$.
:::

The regions of a 2D image on the two sides of a contour can be seen as surfaces with boundary. A change of perspective maps them to two other regions, each the image under a diffeomorphism of surfaces with boundary. These two diffeomorphisms may or may not be restrictions of a single diffeomorphism of a 2D surface *without* boundary:

- if they glue, the contour is an **illusory contour**;
- if they do not glue to a single diffeomorphism, the contour is an **obstruction (occluding) contour**, with an intervening accretion region.

The slides illustrate the gluing with a standard picture: two manifolds with boundary $X_1$, $X_2$, with half-disc neighbourhoods $U$, $V$ of boundary points glued by a diffeomorphism $h$ of the boundaries ($x\mapsto h(x)$); charts $\varphi:U\to H^n$ and $\psi:V\to H^n$ to half-spaces; maps $g$, $\tilde g$ between the two half-spaces; and the resulting chart $\phi(W)$ in $\RR^n$ of the glued manifold.

- In a perspective transition, accretion and deletion happen only on the *background* side. This disambiguates the image–background ownership problem.
- Given a set of frame images of the same scene from varying observation points, there is a set of associated perspective transitions $(O,\gamma_k,O'_k)$. Surfaces $\Sigma_i$ in the 3D scene have projection images $S_i\subset\mathcal S(O)$ and $S'_{i,k}\subset\mathcal S(O'_k)$, related by the maps $g_k:S_i\to S'_{i,k}$, where $g_k=\gamma_{k,*}$ is the map $\mathcal S(O)\to\mathcal S(O'_k)$ induced by the transition $\gamma_k$ as above.
- The contours on $S_i$ and the accretion zones on $\mathcal S(O'_k)$ determine the occlusion contours and border ownership.

## Computational aspect: receptive fields

The question is how receptive fields solve the correspondence problem between images taken from different perspectives. The slide shows vertically oriented Gabor filters (Gaussian envelopes times sinusoidal gratings), even and odd, as grayscale images: a pair $G^0$, $G^1$, and four further pairs $G^0_{ij}$, $G^1_{ij}$ with $i,j\in\{1,2\}$, each a pattern of a few vertical light and dark stripes.

:::definition Receptive fields as Gabor frames
- The components of an image function $F$ on the Gabor filters $G_i$ are $\langle G_i,F\rangle$.
- Under a transformation $g$ of the image,
$$
\langle G_i,F\circ g\rangle=\langle G_i,L(g)F\rangle=\langle L(g)^*G_i,F\rangle,
$$
where $L(g)F=F\circ g$ and $L(g)^*$ is its adjoint.
- A diffeomorphism $g:S_1\to S_2$ is locally linearized by an affine transformation $J_g$, and $\langle J_g^*G_i,F\rangle$ are the components on the affine-transformed Gabor filters $J_g^*G_i$.
:::

In a perspective transition, the measured response (to first-order approximation of the deformation) is a shift of the Gabor frame of a simple cell’s receptive field, apparently following an energy minimization process. The slides show measured changes of the receptive field of one Gabor simple cell: a stereo pair of aerial photographs of terrain, with a bar marking the receptive field, and below them a row of five receptive-field profiles $f_1,\dots,f_5$.

## Further mathematical considerations on the Tsao–Tsao model

Recall the two main geometric aspects of the problem:

1. how surfaces in space are projected into ray spaces, and how diffeomorphisms in ray spaces encode surfaces;
2. how to compute these diffeomorphisms from images.

The first is an “encoding” problem, mathematically well posed; the second is a “detection” problem, subject to noise and ambiguity.

- *Perspective projection*: a mapping from a 2D surface to a 2D ray space; differential topology gives 2D-to-2D diffeomorphisms on regular domains separated by critical points.
- *Stereovision*: two independent 2D ray spaces, and a mapping of 3D space to a submanifold of the 4-dimensional product of two ray spaces; the topology of surfaces is encoded through “perspective transformations” between ray spaces.

### Geometries

- A *ray* is a half-line in Euclidean 3D space; the ray space is the 2D sphere $\mathcal S(P)\cong S^2$ (half-lines, so not $\PP^2(\RR)$).
- The *visual space* is the sphere bundle with projection $\pi:\mathcal S(\Omega)\to\Omega$ and fiber $\mathcal S(P)\simeq S^2$ over $P\in\Omega$: the points of $\Omega\subset\RR^3$ (open and connected) together with the set of all possible observation directions (rays).
- The *rigid motions* form the special Euclidean group $\mathrm{SE}(3)=\RR^3\rtimes\mathrm{SO}(3)$, with
$$
1\to\RR^3\to\mathrm{SE}(3)\xrightarrow{\ \pi\ }\mathrm{SO}(3)\to1.
$$
- A *change of perspective*: observation points $O,O'\in\Omega$ are related by a rigid motion $\gamma$ of the ambient $\RR^3$ that moves $O$ to $O'=\gamma(O)$. It also acts on the visual space sphere bundle $\mathcal S(\Omega)$, mapping rays $r\in\mathcal S(O)$ to rays $\gamma(r)\in\mathcal S(\gamma(O))$.

### The perspective transition groupoid

From here on $\Omega\subset\RR^3$ denotes the region of the visual scene, and observation points lie in its complement.

:::definition Perspective transition groupoid
For a visual scene $\Omega\subset\RR^3$:

- **objects**: $\mathcal G^{(0)}(\Omega)$ is the total space of the visual space sphere bundle $\mathcal S(\RR^3\smallsetminus\Omega)$;
- **morphisms** (arrows): $\mathcal G^{(1)}(\Omega)$ is the set of triples $((O,r),\gamma,(O',r'))$ with $\gamma\in\mathrm{SE}(3)$ and $(O,r),(O',r')\in\mathcal S(\RR^3\smallsetminus\Omega)$, that is $O,O'\in\RR^3\smallsetminus\Omega$, $r\in\mathcal S(O)$ and $r'\in\mathcal S(O')$, with $\gamma(O)=O'$ and $\gamma(r)=r'$;
- **source and target maps** $s,t:\mathcal G^{(1)}(\Omega)\to\mathcal G^{(0)}(\Omega)$,
$$
s((O,r),\gamma,(O',r'))=(O,r)\quad\text{and}\quad t((O,r),\gamma,(O',r'))=(O',r');
$$
- morphisms are **invertible**,
$$
((O,r),\gamma,(O',r'))^{-1}=((O',r'),\gamma^{-1},(O,r));
$$
- **composition** of morphisms,
$$
((O',r'),\gamma',(O'',r''))\circ((O,r),\gamma,(O',r'))=((O,r),\gamma'\gamma,(O'',r'')).
$$
:::

### Ray projections

- For an observation point $O\in\RR^3$ and any point $P\neq O$ in $\RR^3$, the *ray projection* $r_{OP}$ is the ray in $\mathcal S(O)$ pointing in the direction of $P$.
- For a region $\Omega\subset\RR^3$ and different observation points $O,O'\in\RR^3\smallsetminus\Omega$, the **stereo-projection** (biprojection) map is
$$
\rho:\Omega\to\mathcal S(O)\times\mathcal S(O'),\qquad \rho:P\mapsto(r_{OP},r_{O'P}).
$$
- Let $\ell_{OO'}$ be the straight line in $\RR^3$ that contains $O$ and $O'$. The map $\rho:\Omega\to\mathcal S(O)\times\mathcal S(O')$ fails to be injective along $\Omega\cap\ell_{OO'}$, and gives an **embedding**
$$
\rho:\RR^3\smallsetminus\ell_{OO'}\hookrightarrow\mathcal S(O)\times\mathcal S(O').
$$
- A 2D surface $\Sigma\subset\RR^3\smallsetminus\ell_{OO'}$ has image $\rho(\Sigma)\subset\mathcal S(O)\times\mathcal S(O')$, embedded in the 4D space $S^2\times S^2$.
- The restrictions to $\rho(\Sigma)$ of the projections $\pi_1,\pi_2$ of $\mathcal S(O)\times\mathcal S(O')$ to the two factors give smooth projections $\pi_i:\rho(\Sigma)\to S^2$ between 2D spaces.
- We generally assume that the visual scene is limited in 3D, so that it does not simultaneously meet all ray directions from the observer:
$$
r_O(\Omega)\subset\mathcal S(O)\smallsetminus\{x_\Omega\}\simeq S^2\smallsetminus\{x_\Omega\}
$$
for some direction $x_\Omega$.

### Correspondences

:::definition Correspondence
A **correspondence** between $X$ and $Y$ is a subspace $\Gamma\subset X\times Y$ of the product with $\operatorname{codim}(\Gamma)=\dim(Y)$. The **projection maps** $\pi_X$, $\pi_Y$ of $X\times Y$ restrict to $\Gamma$:
$$
X\xleftarrow{\ \pi_X\ }\Gamma\xrightarrow{\ \pi_Y\ }Y.
$$
:::

A function $f:X\to Y$ is a correspondence, given by its graph $\Gamma(f)=\{(x,y)\in X\times Y\mid y=f(x)\}$. So correspondences can be viewed as more general “multivalued” functions.

Functions $f:X\to Y$ and $g:Y\to W$ have a composition $g\circ f:X\to W$, and the graphs $\Gamma(f)\subset X\times Y$ and $\Gamma(g)\subset Y\times W$ compose as
$$
\pi_{X\times W}\big(\pi^{-1}_{X\times Y}(\Gamma(f))\cap\pi^{-1}_{Y\times W}(\Gamma(g))\big)=\{(x,w)\in X\times W\mid w=g(f(x))\}=\Gamma(g\circ f),
$$
where the $\pi$ are the projections of $X\times Y\times W$ onto the pairwise products. This suggests the general definition.

:::definition Composition of correspondences
For correspondences $Z\in\mathcal Z(X,Y)$ and $Z'\in\mathcal Z(Y,W)$, the composition (intersection product) is
$$
Z\bullet Z':=\pi_{X\times W}\big(\pi^{-1}_{X\times Y}(Z)\cap\pi^{-1}_{Y\times W}(Z')\big).
$$
:::

When working with smooth manifolds this requires the intersection $\pi^{-1}_{X\times Y}(Z)\cap\pi^{-1}_{Y\times W}(Z')$ to be a smooth manifold. This is not always true, but transversality in differential topology ensures that it is “generally true”.

### Transversality

:::definition Transversality
Smooth $n$-dimensional submanifolds $Z,Z'$ of the same smooth $2n$-dimensional manifold $X$ are **transversal** if at each $x\in Z\cap Z'$
$$
T_xZ+T_xZ'=T_xX.
$$
Smooth functions $f:Z\to X$ and $g:Z'\to X$ are **transversal** if $df(T_zZ)+dg(T_{z'}Z')=T_xX$ whenever $f(z)=g(z')=x$.
:::

If $Z$ and $Z'$ intersect transversely in $X$, then their intersection $Z\cap Z'$ is a smooth manifold.

:::theorem Sard’s theorem: transversality is generic
Let $f:Z\to X$ and $g:Z'\to X$ be smooth maps, and let $F:Z\times S\to X$ be a function with $F(z,s_0)=f(z)$, such that $F$ and $g$ are transversal. Then $f_s=F(\cdot,s):Z\to X$ and $g:Z'\to X$ are transversal for all $s$ in the complement of a set of measure zero in $S$.
:::

Transversality of $F$ and $g$ can be achieved by taking $\dim S>\dim X$ with $F(z,\cdot):S\to X$ submersions. General transversality then implies that, up to small deformations of the embeddings, the pullbacks $\pi^{-1}_{X\times Y}(Z)$ and $\pi^{-1}_{Y\times W}(Z')$ intersect transversely in the triple product $X\times Y\times W$.

### Whitney’s theorems

By transversality, $\pi^{-1}_{X\times Y}(Z)\cap\pi^{-1}_{Y\times W}(Z')$ is a smooth manifold, and we then have the map
$$
\pi_{X\times W}:\pi^{-1}_{X\times Y}(Z)\cap\pi^{-1}_{Y\times W}(Z')\to X\times W.
$$
Assume for simplicity $\dim X=\dim Y=\dim W=n$ and $\dim Z=\dim Z'=n$ (the more general case is similar). Then the restriction of the projection $\pi_{X\times W}$ is a map of an $n$-dimensional manifold to a $2n$-dimensional manifold.

:::theorem Whitney’s immersion theorem
A smooth map $f:X\to Y$ between smooth manifolds with $\dim X=n>1$ and $\dim Y=m$ can be approximated by an immersion with only transversal self-intersections when $m>2n-1$.
:::

:::theorem Whitney’s embedding theorem
A manifold $X$ of dimension $n$ can be embedded in the Euclidean space $\RR^{2n}$.
:::

First deform $\pi_{X\times W}$ slightly to an immersion with double points (with a sign, from the orientations). Then the **Whitney trick**: pairs of double points with opposite signs can be cancelled by deforming the immersion (and a small deformation can create a pair of opposite double points). This works when $n\geq3$ and the ambient manifold is simply connected; for $n=2$, surfaces in a 4-manifold such as $S^2\times S^2$, the Whitney trick can fail.

The slide illustrates the trick with plane curves: a figure-eight curve has one double point; a small deformation adds a kink, creating a second double point; the region between the two double points (shaded) is then pushed across and shrunk until both double points disappear, leaving an embedded closed curve.

So, possibly after a smooth deformation, $\pi_{X\times W}\big(\pi^{-1}_{X\times Y}(Z)\cap\pi^{-1}_{Y\times W}(Z')\big)$ is an embedding of an $n$-dimensional submanifold in $X\times W$.

- **Equivalence classes** of correspondences $\mathcal Z(X,Y)/\sim$: correspondences are taken up to the equivalence that allows such deformations to achieve transversality and embeddings.
- **Semigroupoid**: in general correspondences are not invertible, so composition gives a semigroupoid (arrows with an associative composition, as in a groupoid, without inverses); the invertible correspondences are (equivalent to) graphs of diffeomorphisms.

### Correspondences and visibility

- Correspondences are given by surfaces $\Gamma=\rho(\Sigma)$ inside the product $\mathcal S(O)\times\mathcal S(O')$.
- The sub-correspondence $\mathcal S_\Sigma(O,O')\subset\rho(\Sigma)$ accounts for the *visibility* condition for $\Sigma$ with respect to the observation points $O,O'$.
- Let $\Sigma\subset\RR^3$ be a non-transparent part of a visual scene. A *visible point* $P\in\Sigma$ is one such that the ray from $O$ to $P$ contains no other point of $\Sigma$; these form the *visible scene*.
- For $\Sigma\subset\RR^3\smallsetminus\ell_{OO'}$ there are two visible surfaces, $\Sigma_O$ and $\Sigma_{O'}$.

:::definition Stereo set correspondence
$$
\mathcal S_\Sigma(O,O'):=\rho(\Sigma_O\cap\Sigma_{O'})=\{(r_{OP},r_{O'P})\in\mathcal S(O)\times\mathcal S(O')\mid P\in\Sigma_O\cap\Sigma_{O'}\},
$$
a correspondence
$$
\mathcal S(O)\xleftarrow{\ r_O\ }\mathcal S_\Sigma(O,O')\xrightarrow{\ r_{O'}\ }\mathcal S(O').
$$
:::

Assume the surfaces $\Sigma_O$, $\Sigma_{O'}$ and $\Sigma_O\cap\Sigma_{O'}$ are compact and smooth (possibly with boundary). Then the correspondences $\mathcal S_\Sigma(O,O')$ are also smooth surfaces in $\mathcal S(O)\times\mathcal S(O')$, and the ray projections are smooth maps between smooth 2D manifolds (possibly with boundary).

### Critical sets and stable types

:::definition Critical points and critical values
Let $X,Y$ be smooth manifolds without boundary, both of dimension $n$, and $f:X\to Y$ a smooth map. The set $C_f$ of **critical points** of $f$ consists of the points $x\in X$ where the differential $df|_x:T_xX\to T_{f(x)}Y$ has rank smaller than $n=\dim Y$ as a linear map between the tangent spaces. The set of **critical values** of $f$ is the image $f(C_f)\subset Y$.
:::

:::theorem Sard’s theorem
The set of critical values $f(C_f)$ has measure zero in $Y$.
:::

:::theorem Whitney
Singularities of smooth maps from a 2D surface to the plane reduce (up to small deformations) to the **stable types**, *folds* and *cusps*, with normal forms
$$
\begin{cases}y_1=x_1^2\\ y_2=x_2\end{cases}\qquad\text{or}\qquad\begin{cases}y_1=x_1^3+x_1x_2\\ y_2=x_2\end{cases}
$$
(up to diffeomorphic change of coordinates).
:::

These are the fold and the cusp pictured earlier. The local quadratic or cubic equation near folds and cusps means that the fiber of the projection consists in general of two points near a fold curve, or three points near a cusp: only one of these points is in the visible surface $\Sigma_O$. The fold curves (with their cusp endpoints) are the **occluding contours** of the visual scene.

The presence of folds and cusps for the two projections $r_O:\rho(\Sigma)\to\mathcal S(O)$ and $r_{O'}:\rho(\Sigma)\to\mathcal S(O')$ detects how far the correspondence $\rho(\Sigma)$ is from being the graph of an invertible function. When occluding contours are present, the correspondence describing the change of perspective fails to be the graph of a diffeomorphism.

### Surfaces with boundary and accretion

- One uses the visible-surfaces correspondence $\mathcal S_\Sigma(O,O')$ instead of the whole $\rho(\Sigma)$.
- The surfaces $\Sigma_O$ and $\Sigma_{O'}$ have boundary, and the boundary partly overlaps with the occluding contours of the projections $r_O$ and $r_{O'}$ of $\rho(\Sigma)$.
- These are surfaces with boundary in the sense defined above: local charts $\phi_i:U_i\to H^2:=\RR\times\RR_+$, homeomorphisms of $U_i$ with open sets of $H^2$ (topology induced from $\RR^2$), with smooth coordinate changes $\phi_j\circ\phi_i^{-1}:\phi_i(U_i\cap U_j)\to\phi_j(U_i\cap U_j)$, where smooth near a point of $\RR\times\RR_+$ means extending to a smooth map on a neighborhood in $\RR^2$.

The regions of a 2D image on the two sides of a contour are surfaces with boundary, mapped by the change of perspective to two other regions (each the image under a diffeomorphism of surfaces with boundary). As in the gluing picture above:

- if the two maps are restrictions of a single diffeomorphism of a 2D surface *without boundary*, the contour is an **illusory contour**;
- if they are not restrictions of a single diffeomorphism (they do not glue to a surface without boundary), the contour is an actual **obstruction contour**.

So the accretion region disambiguates image/background ownership and illusory/real contours.

### The thin semigroupoid of ray projections

:::definition Thin category
A **thin category** is a category with at most one morphism between any pair of objects. (Example: partially ordered sets.)
:::

Consider the correspondences from the ray projections of a surface $\Sigma$ in visual space,
$$
\rho_{OO'}(\Sigma)\in\mathcal Z(\mathcal S(O),\mathcal S(O'))\quad\text{and}\quad\rho_{O'O''}(\Sigma)\in\mathcal Z(\mathcal S(O'),\mathcal S(O'')).
$$
Their composition satisfies
$$
\begin{aligned}
&\pi_{\mathcal S(O)\times\mathcal S(O'')}\Big(\pi^{-1}_{\mathcal S(O)\times\mathcal S(O')}(\rho_{OO'}(\Sigma))\cap\pi^{-1}_{\mathcal S(O')\times\mathcal S(O'')}(\rho_{O'O''}(\Sigma))\Big)\\
&\qquad=\rho_{OO''}(\Sigma)=\rho_{OO'}(\Sigma)\bullet\rho_{O'O''}(\Sigma),
\end{aligned}
$$
provided each ray from the intermediate point $O'$ meets $\Sigma$ at most once. In general the left-hand side also contains the pairs $(r_{OP},r_{O''Q})$ with $P\neq Q$ two points of $\Sigma$ on the same ray from $O'$, and only the inclusion $\rho_{OO''}(\Sigma)\subset\rho_{OO'}(\Sigma)\bullet\rho_{O'O''}(\Sigma)$ holds.

:::definition Thin semigroupoid of ray projections
The **thin semigroupoid** $\mathcal S_\Sigma$ has as objects the observation points,
$$
\mathcal S_\Sigma^{(0)}=\operatorname{Obj}(\mathcal S_\Sigma)=\RR^3\smallsetminus\Omega,
$$
and a single morphism
$$
\rho_{OO'}(\Sigma)\in\operatorname{Mor}_{\mathcal S_\Sigma}(O,O').
$$
:::

It just keeps track of the changes of stereo-perspective on a fixed surface $\Sigma$ in the visual scene.

### The semigroupoid of visibility under ray projections

Now consider the correspondences with the visibility condition,
$$
\mathcal S_\Sigma(O,O')=\rho_{OO'}(\Sigma_O\cap\Sigma_{O'}).
$$
The visibility condition creates a problem with composition: one only has (instead of $=$)
$$
\mathcal S_\Sigma(O,O')\bullet\mathcal S_\Sigma(O',O'')\subset\mathcal S_\Sigma(O,O''),
$$
since a point visible from $O$ and $O''$ need not be visible from the intermediate point $O'$. To have composability (a semigroupoid structure) one needs to add the correspondences
$$
\mathcal S_\Sigma(O,O_1,\dots,O_n,O')=\rho_{OO'}(\Sigma_O\cap\Sigma_{O_1}\cap\cdots\cap\Sigma_{O_n}\cap\Sigma_{O'}),
$$
describing the part of the surface $\Sigma$ that remains visible from all the given intermediate viewpoints. This is a richer structure than the thin semigroupoid of the $\rho_{OO'}(\Sigma)$.

## References

- Thomas J. Tsao, Doris Y. Tsao, *A topological solution to object segmentation and tracking*, Proc. Natl. Acad. Sci. U.S.A. 119 (41) (2022) e2204248119.
- H. Whitney, *On singularities of mappings of Euclidean spaces. I. Mappings of the plane into the plane*, Annals of Mathematics 62 (1955) no. 3, 374–410.
- V. I. Arnold, *Catastrophe Theory*, Springer, 1984.
