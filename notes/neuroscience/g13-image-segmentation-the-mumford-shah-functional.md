---
course: neuroscience
chapter: 11
section: G13
title: Image Segmentation: the Mumford–Shah Functional
lecturer: Matilde Marcolli
source-pages: 1-40
---

The reference for this lecture is David Mumford and Jayant Shah, *Optimal approximations by piecewise smooth functions and associated variational problems* (Commun. Pure Applied Math. 1989).

## Images

- A three-dimensional scene is observed by an eye or a camera: at a point $P$, light of intensity $g_1(\rho)$ comes from the direction $\rho$.
- A lens at $P$ focuses the light on a retina $\mathcal R$ (a surface). The intensity $g(x,y)$ of the light signal received by $\mathcal R$ at the point with coordinates $(x,y)$ is obtained from $g_1(\rho)$ through some transformation that depends on the functioning of the optical system.
- The resulting function $g(x,y)$ is “an image”.

The slide’s illustration (from Mumford–Shah) shows two objects, a pyramid $O_1$ with a striped face and a small box $O_2$, whose light passes through a lens at $P$ and forms an inverted image on a screen.

There will be **discontinuities** in the function $g(x,y)$ along boundaries: an object in front of another, objects with a common boundary, discontinuities in illumination, in the object albedo, and so on. Additional complications:

- textured objects, fragmented objects (for example a canopy of leaves);
- shadows, penumbra;
- surface markings;
- partially transparent objects;
- noisy measurements of $g(x,y)$.

## The segmentation problem

The **goal** is to compute a decomposition
$$
\mathcal R=\mathcal R_1\cup\cdots\cup\mathcal R_n
$$
of the domain of $g(x,y)$ such that

1. the function $g(x,y)$ is smooth within each domain $\mathcal R_i$;
2. the function $g(x,y)$ varies discontinuously (and/or very rapidly) across *most* of the boundary between different $\mathcal R_i$.

Equivalently, this is the problem of computing **optimal approximations** of a function $g(x,y)$ by piecewise smooth functions.

### Mathematical approach

What constitutes an **optimal segmentation**? We look for a **functional** measuring the degree of match between a function and a segmentation, to be optimized. Let the $\mathcal R_i$ be connected open subsets of a given planar domain $\mathcal R$, each with piecewise smooth boundary $\partial\mathcal R_i$, and set
$$
\Gamma=\mathcal R\cap\bigcup_i\partial\mathcal R_i,\qquad \mathcal R=\Gamma\sqcup\mathcal R_1\sqcup\cdots\sqcup\mathcal R_n.
$$
We discuss three different action functionals whose minimization gives an optimal image segmentation: a functional $E$ that depends on two parameters $\mu$ and $\nu$, and two limiting cases $E_0$ and $E_\infty$, each depending on a $\nu$ parameter.

## The Mumford–Shah functional

:::definition Mumford–Shah functional
Let $f$ be a differentiable function on $\bigcup_i\mathcal R_i$, possibly discontinuous across $\Gamma$, and let $\Gamma$ consist of piecewise smooth arcs joined at a finite set of singular points, with $|\Gamma|$ the total length of the arcs in $\Gamma$. The action functional is
$$
E(f,\Gamma)=\mu^2\int_{\mathcal R}(f-g)^2\,dx\,dy+\int_{\mathcal R\smallsetminus\Gamma}\|\nabla f\|^2\,dx\,dy+\nu\,|\Gamma|.
$$
:::

- The first term measures how good $f$ is as an approximation of $g$.
- The second term asks that $f$ not vary too much within each $\mathcal R_i$.
- The third term asks that the boundary achieving the decomposition be as short as possible.

:::remark All three terms are needed
All three terms are needed to have a nontrivial minimum:

1. without the first term, $f=0$ and $\Gamma=\emptyset$ give $E=0$;
2. without the second term, $f=g$ and $\Gamma=\emptyset$ give $E=0$;
3. without the third term, taking $f$ equal to the average of $g$ on each square of a grid of $N^2$ squares (with $\Gamma$ the grid) gives values of $E$ tending to $0$ as $N\to\infty$.
:::

**Heuristic interpretation**: a solution $f$ of the minimization of $E$ is a “cartoon” version of the image $g$, in which contours are drawn sharply and the scene is simplified.

:::remark Mumford–Shah conjecture
Is the minimization problem for $E$ well posed? Mumford and Shah conjectured that for every continuous $g$ a minimum of $E$ exists with $f$ differentiable on each $\mathcal R_i$ and $\Gamma$ made of $C^1$-arcs joined at a finite number of singular points.
:::

## The functional $E_0$

Restrict $E$ to piecewise constant functions, $f|_{\mathcal R_i}\equiv a_i$. Then
$$
\mu^{-2}E(f,\Gamma)=\sum_i\int_{\mathcal R_i}(g-a_i)^2\,dx\,dy+\nu_0|\Gamma|,\qquad \nu_0=\nu/\mu^2.
$$
As a function of the $a_i$, this is minimized by the averages
$$
a_i=\operatorname{mean}_{\mathcal R_i}(g)=\frac{1}{A(\mathcal R_i)}\int_{\mathcal R_i}g\,dx\,dy,
$$
where $A(\mathcal R_i)$ is the area of $\mathcal R_i$.

:::definition The functional $E_0$
$$
E_0(\Gamma)=\sum_i\int_{\mathcal R_i}\big(g-\operatorname{mean}_{\mathcal R_i}(g)\big)^2\,dx\,dy+\nu_0\,|\Gamma|.
$$
:::

### Relation to the Ising model

The relation is the one between continuous and discrete segmentation:

![Continuous segmentation into regions with f = a1 and f = a2, and discrete segmentation of a lattice into f = +1 and f = -1](/notes/neuroscience/figures/h11-ising.svg)

- Suppose $f$ is locally constant with only the values $\pm1$.
- Assume $f$ and $g$ are “discretized”, that is, defined on a lattice.
- Let $\Gamma$ be a path made of segments of horizontal and vertical lines between pairs of adjacent lattice sites where $f$ changes sign.
- Then the functional $E_0$, seen as a function of $f$, becomes the **Ising model energy**
$$
E_0(f)=\sum_{i,j}\big(f(i,j)-g(i,j)\big)^2+\nu_0\sum_{(i,j),(i',j')}\big(f(i,j)-f(i',j')\big)^2,
$$
where the first sum is over lattice sites and the second over pairs of neighboring sites. (A neighboring pair separated by $\Gamma$ contributes $(\pm2)^2=4$ and every other pair contributes $0$, so the second sum is $4$ times the length of $\Gamma$ in lattice units; the factor $4$ only rescales $\nu_0$.)

## The functional $E_\infty$

:::definition The functional $E_\infty$
A functional of $\Gamma$ alone:
$$
E_\infty(\Gamma)=\int_\Gamma\left(\nu_\infty-\left(\frac{\partial g}{\partial n}\right)^2\right)ds,
$$
where $\nu_\infty$ is a constant, $ds$ is arc length on $\Gamma$, and $\partial/\partial n$ is the derivative along the unit normal to $\Gamma$.
:::

![Curvilinear coordinates near Gamma: arclength s along the curve and the normal direction r](/notes/neuroscience/figures/h11-curvilinear.svg)

Minimizing $E_\infty$ means finding $\Gamma$ so that

- the length of $\Gamma$ is as short as possible;
- the variation of $g$ in the direction normal to $\Gamma$ is as large as possible.

### Relation of $E_\infty$ to $E$

:::proposition $E_\infty$ as a limit of $E$
On the smooth parts of $\Gamma$ use curvilinear coordinates $(s,r)$, as in the figure. Take $f=g$ outside a tubular neighbourhood of $\Gamma$, set $\mu=1/\epsilon$ and $\nu=2\epsilon\nu_\infty$, and
$$
f(r,s)=g(r,s)+\epsilon\,\operatorname{sign}(r)\,e^{-|r|/\epsilon}\,\frac{\partial g}{\partial r}(0,s).
$$
Then
$$
E(f,\Gamma)-E(g,\emptyset)=2\epsilon\,E_\infty(\Gamma)+O(\epsilon^2).
$$
:::

So one can think of $E_\infty$ as a $\mu\to\infty$ limit of $E$.

## The variational equation for $E$: summary

- For fixed $\Gamma$, $E$ is a positive definite quadratic functional in $f$, with a unique minimum, the solution of the elliptic boundary value problem on each $\mathcal R_i$
$$
\Delta f=\mu^2(f-g),\qquad \frac{\partial f}{\partial n}\Big|_{\partial\mathcal R_i}\equiv0.
$$
- With $f_\Gamma$ the solution of this elliptic problem, $E$ becomes a function of $\Gamma$, $E(f_\Gamma,\Gamma)$, to be minimized over $\Gamma$.
- Consider an infinitesimal variation of $\Gamma$ by a normal vector field $X=a(x,y)\frac{\partial}{\partial n}$, vanishing in a neighbourhood of the singular points of $\Gamma$.

:::proposition First variation in $\Gamma$
$$
\frac{\delta}{\delta X}E(f_\Gamma,\Gamma)=\int_\Gamma a\,\big(e_+-e_-+\nu\operatorname{curv}(\Gamma)\big)\,ds,\qquad e_\pm=\mu^2(f_\Gamma^\pm-g)^2+\left(\frac{df_\Gamma^\pm}{ds}\right)^2,
$$
with $f_\Gamma^\pm$ the boundary values of $f_\Gamma$ on the two sides of $\Gamma$, and $\operatorname{curv}(\Gamma)$ the curvature (a function of the second derivative of the curve $\Gamma$).
:::

(On $\Gamma$ the normal derivative of $f_\Gamma$ vanishes, so $(df_\Gamma^\pm/ds)^2=\|\nabla f_\Gamma^\pm\|^2$ there; compare the energy density below.) Then $E(f_\Gamma,\Gamma)$ is minimized by a $\Gamma$ that satisfies the variational equation
$$
e_+-e_-+\nu\operatorname{curv}(\Gamma)\equiv0.
$$

### Complications due to singular points of $\Gamma$

The minimizing function $f_\Gamma$ is bounded pointwise,
$$
\min_{\mathcal R}g\leq f_\Gamma(x,y)\leq\max_{\mathcal R}g,
$$
but its **gradient** need not be bounded near the singular points of $\Gamma$. If $\Gamma$ is made of $C^2$-arcs joined at endpoints, one can use the theory of **elliptic boundary value problems in domains with corners** to handle this problem.

:::proposition Singular points of a minimizer
If $\Gamma$, made of $C^2$-arcs joined at endpoints, is a minimum, then its only singularities are

1. *triple points*: three $C^2$ arcs meet at $120^\circ$;
2. *crack tips*: a single $C^2$ arc ends;
3. *boundary points*: a $C^2$ arc of $\Gamma$ meets a smooth point of $\partial\mathcal R$ perpendicularly.
:::

A further complication: a minimizer $\Gamma$ may have worse singularities than meetings of $C^2$ arcs; *cusp singularities* at the end of arcs may also occur.

## A more detailed discussion of the variational problem for $E$

### Hölder spaces

:::definition Hölder spaces
For $k\in\ZZ_{\geq0}$ and $0<\alpha\leq1$, the Hölder space $C^{k,\alpha}(\Omega)$ has the norm
$$
\|f\|_{C^{k,\alpha}}=\|f\|_{C^k}+\max_{|\beta|=k}|D^\beta f|_{C^{0,\alpha}},
$$
where
$$
\|f\|_{C^k}=\max_{|\beta|\leq k}\sup_{x\in\Omega}|D^\beta f(x)|,\qquad |f|_{C^{0,\alpha}}=\sup_{x\neq y\in\Omega}\frac{|f(x)-f(y)|}{|x-y|^\alpha}.
$$
:::

Start by assuming that $\Gamma$ is a union of $C^{1,1}$ curves $\gamma_a$ joined at endpoints, and that $f\in C^1$ on $\mathcal R\smallsetminus\Gamma$; initially assume also that the first derivatives are continuous up to the boundary points (this will be weakened later).

### Variation of $f$ for fixed $\Gamma$

Fix $\Gamma$ and consider the variational problem for $f$, with variation $\delta f$:
$$
\begin{aligned}
E(f+t\,\delta f,\Gamma)-E(f,\Gamma)&=t\Big[\mu^2\iint2\,\delta f\cdot(f-g)\,dx\,dy+\iint2\big(\nabla(\delta f)\cdot\nabla f\big)\,dx\,dy\Big]\\
&\quad+t^2\Big[\mu^2\iint(\delta f)^2\,dx\,dy+\iint\|\nabla(\delta f)\|^2\,dx\,dy\Big],
\end{aligned}
$$
$$
\begin{aligned}
\frac{\delta E}{\delta f}(f,\Gamma)&=\lim_{t\to0}\frac{E(f+t\,\delta f,\Gamma)-E(f,\Gamma)}{t}\\
&=2\Big[\mu^2\iint\delta f\cdot(f-g)\,dx\,dy+\iint\big(\nabla(\delta f)\cdot\nabla f\big)\,dx\,dy\Big],
\end{aligned}
$$
$$
\begin{aligned}
\frac12\frac{\delta E}{\delta f}(f,\Gamma)&=\mu^2\iint\delta f\cdot(f-g)\,dx\,dy-\iint\delta f\cdot\nabla^2f\,dx\,dy+\int_B\delta f\,\frac{\partial f}{\partial n}\,ds\\
&=-\iint\delta f\big(\nabla^2f-\mu^2(f-g)\big)\,dx\,dy+\int_B\delta f\,\frac{\partial f}{\partial n}\,ds.
\end{aligned}
$$
The last step uses integration by parts and Green’s theorem, with $B$ the whole boundary of $\mathcal R\smallsetminus\Gamma$, given by $\partial\mathcal R$ and the two sides $\gamma_a^\pm$ of each arc of $\Gamma$.

Imposing the vanishing of the variation for all test functions $\delta f$ gives the **variational equation**
$$
\nabla^2f=\mu^2(f-g)\qquad\text{and}\qquad\frac{\partial f}{\partial n}=0\ \text{ on }\partial\mathcal R\cup\bigcup_a\gamma_a^\pm.
$$

The operator $\mu^2-\nabla^2$ is positive-definite and self-adjoint. It has a Green function $K(x,y;u,v)$ that is $C^\infty$ outside the diagonal $(x,y)=(u,v)$, with singularity
$$
K(x,y;u,v)\sim-\frac{1}{2\pi}\log\Big(\mu\sqrt{(x-u)^2+(y-v)^2}\Big).
$$

The unique solution $f$ on each $\mathcal R_i$ is constructed by convolution with the Green function:
$$
f(x,y)=\mu^2\int_{(u,v)\in\mathcal R_i}K(x,y;u,v)\,g(u,v)\,du\,dv.
$$

:::remark The Green function on the whole plane
In the absence of singularities and boundaries, $K$ would be the Green function on the whole plane $\RR^2$, given by the Fourier transform of
$$
L(\xi,\eta)=\frac{1}{\mu^2+\xi^2+\eta^2}\qquad\text{(the "massive propagator")}
$$
evaluated at $(x-u,y-v)$, namely
$$
K(x,y;u,v)=\frac{1}{2\pi}K_0\Big(\mu\sqrt{(x-u)^2+(y-v)^2}\Big),
$$
with $K_0$ the *modified Bessel function of the second kind*, a solution of
$$
K_0''(r)+\frac1rK_0'(r)-K_0(r)=0,
$$
with asymptotic behavior
$$
K_0(r)\sim\log\Big(\frac1r\Big)\ \text{ for }r\to0,\qquad K_0(r)\sim\sqrt{\frac{\pi}{2r}}\,e^{-r}\ \text{ for }r\to\infty.
$$
:::

### Variation of $\Gamma$

Now vary $E(f_\Gamma,\Gamma)$ with respect to $\Gamma$.

- Move $\Gamma$ near a **simple point** (not a point where several arcs meet). The point lies on one arc $\gamma_a\in C^{1,1}$.
- The $C^{1,1}$ regularity of $\gamma_a$ ensures that it can be written locally as the graph of a function, either $y=h(x)$ or $x=h(y)$ (implicit function theorem). One can then deform the path by deforming the function,
$$
\gamma_a(t)=\{y=h(x)+t\,\delta h(x)\},
$$
with the variation $\delta h(x)\equiv0$ outside a small neighborhood $\mathcal U$ of the point, so that the new curve does not meet the other arcs $\gamma_b$ outside the endpoints.

![The arc y = h(x) near P and its deformation y = h + t delta h supported in U](/notes/neuroscience/figures/h11-curve-variation.svg)

Varying $\Gamma$ forces $f$ to vary too, because $f$ is $C^1$ on $\mathcal R\smallsetminus\Gamma$ and discontinuous across $\Gamma$. Let
$$
\mathcal U^+=\{(x,y):y>h(x)\}\cap\mathcal U,\qquad \mathcal U^-=\{(x,y):y<h(x)\}\cap\mathcal U,
$$
and $f^\pm=f|_{\mathcal U^\pm}$; extend both $f^\pm$ to all of $\mathcal U$ by $C^1$ extensions $\tilde f^\pm$, and set
$$
f^t(x,y)=\begin{cases}f(x,y) & (x,y)\notin\mathcal U,\\ \tilde f^+(x,y) & (x,y)\in\mathcal U,\ \text{above }\gamma_a(t),\\ \tilde f^-(x,y) & (x,y)\in\mathcal U,\ \text{below }\gamma_a(t).\end{cases}
$$
Then compute explicitly the variation $E(f^t,\Gamma(t))-E(f,\Gamma)$, where $\Gamma(t)=\gamma_a(t)\cup\bigcup_{b\neq a}\gamma_b$:
$$
\begin{aligned}
E(f^t,\Gamma(t))-E(f,\Gamma)&=\mu^2\iint_{\mathcal U}\big[(f^t-g)^2-(f-g)^2\big]\,dx\,dy\\
&\quad+\iint_{\mathcal U-\Gamma(t)}\|\nabla f^t\|^2\,dx\,dy-\iint_{\mathcal U-\Gamma}\|\nabla f\|^2\,dx\,dy\\
&\quad+\nu\big[|\gamma_a(t)|-|\gamma_a|\big]\\
&=\mu^2\int\left(\int_{h(x)}^{h(x)+t\,\delta h(x)}\big[(f^--g)^2-(f^+-g)^2\big]\,dy\right)dx\\
&\quad+\int\left(\int_{h(x)}^{h(x)+t\,\delta h(x)}\big[\|\nabla f^-\|^2-\|\nabla f^+\|^2\big]\,dy\right)dx\\
&\quad+\nu\int\Big[\sqrt{1+(h+t\,\delta h)'^2}-\sqrt{1+h'^2}\Big]\,dx.
\end{aligned}
$$
This gives the variational equation for the path variation $\delta\gamma$:
$$
\begin{aligned}
\frac{\delta E}{\delta\gamma}&=\mu^2\int\big[(f^--g)^2-(f^+-g)^2\big]\Big|_{y=h(x)}\delta h\,dx\\
&\quad+\int\big[\|\nabla f^-\|^2-\|\nabla f^+\|^2\big]\Big|_{y=h(x)}\delta h\,dx\\
&\quad+\nu\int\frac{h'}{\sqrt{1+h'^2}}\,(\delta h)'\,dx.
\end{aligned}
$$

Since $\gamma_a\in C^{1,1}$, its **curvature** is well defined almost everywhere:
$$
\operatorname{curv}(\gamma_a)(x,h(x))=\frac{h''(x)}{(1+h'(x)^2)^{3/2}}.
$$
Integrating by parts in the last term of the variational equation,
$$
\frac{\delta E}{\delta\gamma}=\int_{\gamma_a}\Big[\big(\mu^2(f^--g)^2+\|\nabla f^-\|^2\big)-\big(\mu^2(f^+-g)^2+\|\nabla f^+\|^2\big)-\nu\operatorname{curv}(\gamma_a)\Big]\cdot\frac{\delta h}{\sqrt{1+h'^2}}\,ds,
$$
so along each $\gamma_a$
$$
\big(\mu^2(f^+-g)^2+\|\nabla f^+\|^2\big)-\big(\mu^2(f^--g)^2+\|\nabla f^-\|^2\big)+\nu\operatorname{curv}(\gamma_a)=0.
$$

:::definition Energy density
The **energy density** is
$$
e(f;x,y)=\mu^2\big(f(x,y)-g(x,y)\big)^2+\|\nabla f(x,y)\|^2.
$$
:::

In these terms the equation reads
$$
e(f^+)-e(f^-)+\nu\operatorname{curv}(\gamma_a)=0\qquad\text{on }\gamma_a,
$$
which, for fixed $f^\pm$, is a second order ODE for $h(x)$.

### Special points of $\Gamma$

At special points of $\Gamma$ the analysis of the variational problem is more complicated: the stationarity condition for the functional $E$ imposes restrictions at these points. The cases are

1. points where $\Gamma$ meets $\partial\mathcal R$;
2. corners, where two arcs $\gamma_a$ meet;
3. vertices, where three or more arcs $\gamma_a$ meet;
4. crack-tips, where an arc $\gamma_a$ ends without meeting another arc.

### Corners

The problem with corners is that one can have a function with $\nabla^2f=0$ in an open region and $\frac{\partial f}{\partial n}=0$ on the boundary, with a *singularity* at a corner point.

:::example A harmonic function singular at a corner
In the sector $-\alpha/2<\arg z<\alpha/2$, let
$$
f(z)=\Im(w)=r^{\pi/\alpha}\sin\Big(\frac{\pi}{\alpha}\theta\Big)\qquad\text{for } z=re^{i\theta},\ w=z^{\pi/\alpha},
$$
where $w=z^{\pi/\alpha}$ is the conformal map that flattens the corner. Then
$$
\frac{\partial f}{\partial r}=\frac{\pi}{\alpha}\,r^{\frac{\pi}{\alpha}-1}\sin\Big(\frac{\pi}{\alpha}\theta\Big)\to\infty\quad\text{when }r\to0,\qquad\text{if }\alpha>\pi.
$$
:::

![The conformal map w = z^(pi/alpha) flattening the sector of angle alpha onto the half-plane Re(w) > 0](/notes/neuroscience/figures/h11-corner-conformal.svg)

:::theorem Elliptic boundary value problems on domains with corners (Kondratiev)
The previous example is the typical behavior of solutions of elliptic boundary value problems in domains with corners. The solutions $f$ satisfy:

- $f$ is bounded everywhere;
- $f$ is $C^1$ at corners with angle $0<\alpha<\pi$;
- at corners with $\pi<\alpha\leq2\pi$ (the case $2\pi$ is a crack-tip),
$$
f=c\,r^{\pi/\alpha}\sin\Big(\frac{\pi}{\alpha}(\theta-\theta_0)\Big)+\tilde f,\qquad \tilde f\in C^1.
$$
:::

### Minimizers have no kinks, and other local results

One uses this to show that Mumford–Shah minimizers cannot have **kinks** (corners between two arcs with angle $\neq\pi$). Divide a neighborhood of the corner into the sectors with angle larger and smaller than $\pi$, and take a smooth cutoff function $\eta_{\mathcal U}$ on a ball near the corner.

![Two arcs meeting at P with angles alpha-plus and alpha-minus on the two sides](/notes/neuroscience/figures/h11-kink.svg)

Cut the corner at a small distance, shrinking $\mathcal U^+$ and enlarging $\mathcal U^-$:

![Cutting the corner at distance epsilon/2 from P](/notes/neuroscience/figures/h11-cut-corner.svg)

- The new $f$ on the smaller $\mathcal U^+$ is defined by restriction; the new $f$ on the larger $\mathcal U^-$ is extended using the cutoff function, as $f^-(0)+\eta_{\mathcal U}\big(f^--f^-(0)\big)$.
- Measuring the corresponding change in $E(f,\Gamma)$, one finds that if $\alpha\neq\pi$ the functional $E(f,\Gamma)$ decreases when the corner is cut as above, so the original kinked path cannot be a minimizer.
- A similar argument shows that a minimizer $\Gamma$ meets $\partial\mathcal R$ orthogonally.
- A similar argument also shows that triple points must have angles $2\pi/3$: otherwise one can cut a sector and lower the value of $E(f,\Gamma)$.

![Three arcs meeting at a vertex, with the angles between them](/notes/neuroscience/figures/h11-triple-point.svg)

- If $\Gamma$ has points where four or more arcs meet, it is not a minimizer: one can separate such a point into triple points and lower the value of $E(f,\Gamma)$.

![A point where four arcs meet, replaced by two triple points](/notes/neuroscience/figures/h11-four-arcs.svg)

- One can also eliminate cusp corners and lower the value of $E(f,\Gamma)$.

![A cusp where two arcs leave P tangentially, replaced by a single arc that branches near the boundary of the disc](/notes/neuroscience/figures/h11-cusp-corner.svg)

## Summary of further results

- For $f_\Gamma$ minimizing $E(f,\Gamma)$ with $\Gamma$ fixed, one estimates its proximity to the locally constant average of $g$ on each $\mathcal R_i$.
- The relevant quantity is the **isoperimetric constant**, which measures the *smallest necks* in each component $\mathcal R_i$.

:::definition Isoperimetric constant
For a domain $W$,
$$
h(W)=\inf_\gamma\left\{\frac{|\gamma|}{\min(|W_1|,|W_2|)}\ :\ \gamma \text{ a curve dividing } W \text{ into 2 disjoint open sets } W_1 \text{ and } W_2\right\},
$$
with $|\gamma|$ the length and $|W_i|$ the area. Set $\lambda_\Gamma=\min_ih(\mathcal R_i)$.
:::

![A dumbbell-shaped domain W with a neck of width delta separating areas A1 and A2](/notes/neuroscience/figures/h11-dumbbell.svg)

For the dumbbell in the figure, the curve $\gamma$ across the neck has length about $\delta$, so $h(W)$ is at most about $\delta/\min(A_1,A_2)$. The slides also show a domain with isoperimetric constant $h(\mathcal R_i)=0$: a chain of bulges joined by necks, shrinking towards one end.

:::proposition Small $\mu$ limit
$$
\mu^2\left(E_0(\Gamma)-\frac{4\mu^2}{\lambda_\Gamma^2+4\mu^2}\|g\|^2_{0,2,\mathcal R}\right)\leq E(f_\Gamma,\Gamma)\leq\mu^2E_0(\Gamma),
$$
where $\|g\|_{0,2,\mathcal R}$ is the $L^2$ norm of $g$ on $\mathcal R$.
:::

### Existence of $E_0$-minimizers

:::theorem Existence of $E_0$-minimizers
If $\mathcal R$ is a rectangle and $g$ is continuous on $\mathcal R\cup\partial\mathcal R$, then, among paths $\Gamma$ of $C^{1,1}$ arcs meeting at endpoints and locally constant functions $f$ on $\mathcal R\smallsetminus\Gamma$, there is a minimum $(f,\Gamma)$ of
$$
E_0(f,\Gamma)=\int_{\mathcal R}(f-g)^2+\nu_0\operatorname{length}(\Gamma).
$$
:::

**Method of proof**: geometric measure theory. The **main idea** is first to show the existence of a “weak solution” with a “very singular” $\Gamma$, and then to show that the weak solution must in fact be sufficiently regular, as required by the original problem. **Weak solutions** are given by Caccioppoli sets (measurable sets whose characteristic function has bounded variation). The topological boundary of such a set may have infinite 1-dimensional Hausdorff measure, but a “reduced boundary” is 1-rectifiable.

### What is geometric measure theory?

- It is the use of measure theory methods to study geometric objects (curves, surfaces) that are highly non-smooth.
- It was historically developed to study the *Plateau problem*: the geometry of soap bubble films, that is, area-minimizing surfaces with given boundary curves. (The slides show photographs of clusters of soap bubbles.)
- Introductions to geometric measure theory: Frank Morgan, *Geometric measure theory: A beginner’s guide*; Frederick J. Almgren, Jr., *Plateau’s Problem: An Invitation to Varifold Geometry*; Herbert Federer, *Colloquium lectures on geometric measure theory* (see the references).

## The large $\mu$ case

When $\mu\to\infty$, the effect of $\Gamma$ on the energy is localized in a narrow strip around $\Gamma$. First one uses Green’s theorem to reduce $E$ to an integral along $\Gamma$ only, in terms of the solutions $g_\mu$ and $f_\Gamma$ of
$$
\Delta g_\mu=\mu^2(g_\mu-g),\qquad \Delta f_\Gamma=\mu^2(f_\Gamma-g),
$$
$$
\frac{\partial g_\mu}{\partial n}\Big|_{\partial\mathcal R}\equiv0,\qquad \frac{\partial f_\Gamma}{\partial n}\Big|_{\partial\mathcal R\cup\Gamma}\equiv0.
$$

:::proposition $E$ as an integral along $\Gamma$
The functional $E$ satisfies
$$
E(f_\Gamma,\Gamma)=E(g_\mu,\emptyset)+\int_\Gamma\left(\nu-\frac{\partial g_\mu}{\partial n}\big(f_\Gamma^+-f_\Gamma^-\big)\right)ds,
$$
with $f_\Gamma^\pm$ the boundary values of $f_\Gamma$ along the two sides of $\Gamma$, and the normal vector $n$ pointing to the $+$ side of $\Gamma$.
:::

:::proposition Large $\mu$ asymptotics
When $\mu$ is large,
$$
f_\Gamma^+-f_\Gamma^-=\frac{2}{\mu}\frac{\partial g_\mu}{\partial n}+O\Big(\frac{1}{\mu^2}\Big),
$$
and uniformly in $\mathcal R$ one has $f_\Gamma-g=O(\mu^{-1})$. In terms of the functional $E_\infty$ (with $\nu_\infty=\mu\nu/2$) this gives
$$
E(f_\Gamma,\Gamma)=E(g_\mu,\emptyset)+\frac{2}{\mu}E_\infty(\Gamma)+O\Big(\frac{\log\mu}{\mu^2}\Big).
$$
:::

- The first variation of $E(f_\Gamma,\Gamma)$ converges, for large $\mu$, to the first variation of $E_\infty(\Gamma)$.
- One computes explicitly the vanishing of the first variation of $E_\infty(\Gamma)$, which gives a second order differential equation for $\Gamma$.

Let $H_g$ be the matrix of second derivatives of $g$, and $t_\Gamma$, $n_\Gamma$ the unit tangent and normal vectors to $\Gamma$. The variational equation for $E_\infty(\Gamma)$ is
$$
\begin{aligned}
&(n_\Gamma\cdot\nabla g)\cdot\Delta g+(t_\Gamma\cdot\nabla g)\cdot(t_\Gamma\cdot H_g\cdot n_\Gamma)\\
&\qquad+\operatorname{curv}(\Gamma)\cdot\Big[\tfrac12\nu_\infty+\tfrac12(n_\Gamma\cdot\nabla g)^2-(t_\Gamma\cdot\nabla g)^2\Big]=0.
\end{aligned}
$$
This equation can be interpreted as the **geodesic equation in a Lorentzian metric** (an indefinite metric, of signature $(1,1)$): space-like solutions locally minimize $E_\infty$ and time-like solutions locally maximize it; general solutions flip between these two types through cusp singularities at the transitions.

## Further reading

There are many more recent results on Mumford–Shah minimizers and segmentation: this is a rich current area of research, with a large number of papers on the topic. Suggested references are the papers of Younes–Michor–Shah–Mumford, Mumford–Kosslyn–Hillger–Herrnstein, and the survey of Leah Bar et al. listed below.

## References

- David Mumford, Jayant Shah, *Optimal approximations by piecewise smooth functions and associated variational problems*, Commun. Pure Applied Math. Vol. XLII (1989) 577–685.
- Frank Morgan, *Geometric measure theory: A beginner’s guide* (Fourth ed.), Academic Press, 2009.
- Frederick J. Almgren, Jr., *Plateau’s Problem: An Invitation to Varifold Geometry*, Revised Edition, American Mathematical Society, 2001.
- Herbert Federer, *Colloquium lectures on geometric measure theory*, Bull. Amer. Math. Soc. 84 (1978), 291–338.
- Laurent Younes, Peter W. Michor, Jayant Shah, David Mumford, *A metric on shape space with explicit geodesics*, Rend. Lincei Mat. Appl. 19 (2008) 25–57.
- D. Mumford, S. M. Kosslyn, L. A. Hillger, R. J. Herrnstein, *Discriminating figure from ground: the role of edge detection and region growing*, Proc. Nat. Acad. Sci. U.S.A. 84 (1987), no. 20, 7354–7358.
- Leah Bar et al., *Mumford and Shah model and its applications to image segmentation and image restoration*, in “Handbook of Mathematical Methods in Imaging”, Springer 2011, 1095–1157.
