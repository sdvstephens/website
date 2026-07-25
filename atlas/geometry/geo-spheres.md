Archimedes was proudest not of his war machines but of a picture: a ball nested snugly inside a
can, touching the can's wall all around and its lid and floor top and bottom. He asked for that
sphere-in-cylinder to be carved on his tombstone. He had discovered that the ball, the can, and a
cone hiding inside the can are locked together by their volumes in a ratio so clean it looks
staged. What is the ball's volume, and how does slicing a can pry it loose?

## Discovery

You may use the disk area $\pi r^2$ (`geo-circle-area`), and cylinder and cone volumes
$\pi r^2 h$ and $\tfrac13\pi r^2 h$ (`geo-cylinders-cones`). Work with a **hemisphere** of radius
$r$ (half a ball, flat face down), then double.

1. Set up the comparison solid. Take a cylinder of radius $r$ and height $r$, and hollow out from
   it a cone of radius $r$ and height $r$ whose apex sits at the center of the base and whose rim
   is the cylinder's top. Call what remains the **punctured cylinder**.
2. Cut both the hemisphere and the punctured cylinder by a horizontal plane at height $y$ above
   the shared base ($0 \le y \le r$). For the hemisphere, the slice is a disk; a vertical cross-
   section through the center shows its radius is one leg of a right triangle with hypotenuse $r$
   and other leg $y$ — find that radius, and hence the slice's area. For the punctured cylinder,
   the slice is a ring: the outer circle has radius $r$, and the removed cone (widening linearly
   from apex to rim) leaves an inner circle whose radius at height $y$ is $y$ — find the ring's
   area as (outer disk) minus (inner disk).
3. Compare the two slice areas from step $2$ at the same height $y$. Are they equal? If two solids
   have equal cross-sections at every height, what is true of their volumes? Compute the punctured
   cylinder's volume as (cylinder) minus (cone) using the volumes you already know, and hence get
   the hemisphere's volume — then the whole sphere's.
4. Now the surface. Imagine growing the ball's radius from $r$ to $r + \Delta r$, adding a thin
   spherical shell like one more layer of an onion. That shell's volume is roughly its surface
   area times its tiny thickness $\Delta r$. So how is the surface area related to the *rate* at
   which the volume grows as $r$ increases? Differentiate your volume formula and read off the
   surface area.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a sphere of radius $r$:
$$V = \tfrac43 \pi r^3, \qquad \text{SA} = 4\pi r^2.$$
Equivalently, a hemisphere has volume $\tfrac23 \pi r^3$. The **Archimedes relation** behind the
volume: a hemisphere of radius $r$ has exactly the volume of a cylinder of radius $r$ and height
$r$ with a same-radius, same-height cone removed. The surface area $4\pi r^2$ is the derivative of
the volume with respect to $r$ — four times the area $\pi r^2$ of a great-circle cross-section.

### Proof

**Volume by Cavalieri.** Place a hemisphere of radius $r$ (flat face down) and a "punctured
cylinder" — a cylinder of radius $r$ and height $r$ with a coaxial cone of radius $r$, height $r$,
apex at the base center, removed — side by side on a common base plane. Cut both at height $y$,
$0 \le y \le r$.

The hemisphere's slice is a disk. A central vertical cross-section shows a right triangle: the
sphere's radius $r$ is the hypotenuse from center to the slice's rim, the height $y$ is one leg,
and the slice radius $\rho$ is the other leg, so $\rho^2 = r^2 - y^2$. The slice area is
$$\pi \rho^2 = \pi(r^2 - y^2).$$
The punctured cylinder's slice is an annulus: outer radius $r$ (the cylinder), inner radius equal
to the removed cone's radius at height $y$. The cone widens linearly from radius $0$ at its apex
(base center, $y = 0$) to radius $r$ at $y = r$, so at height $y$ its radius is $y$. The annulus
area is
$$\pi r^2 - \pi y^2 = \pi(r^2 - y^2).$$
The two slice areas are equal at every height $y$. By **Cavalieri's principle**, the hemisphere
and the punctured cylinder have equal volume. Compute the latter from known volumes
(`geo-cylinders-cones`):
$$V_{\text{hemi}} = \underbrace{\pi r^2 \cdot r}_{\text{cylinder}} - \underbrace{\tfrac13 \pi r^2 \cdot r}_{\text{cone}} = \pi r^3 - \tfrac13 \pi r^3 = \tfrac23 \pi r^3.$$
Doubling gives the sphere:
$$V = 2 \cdot \tfrac23 \pi r^3 = \tfrac43 \pi r^3.$$

**Surface area by the onion-peel (shell) relation.** Regard the solid ball of radius $r$ as built
from nested spherical shells. Growing the radius from $r$ to $r + \Delta r$ adds a thin shell
whose volume $\Delta V = V(r+\Delta r) - V(r)$ is trapped between (inner surface area)$\cdot\Delta r$
and (outer surface area)$\cdot\Delta r$; that is, between $S(r)\,\Delta r$ and $S(r+\Delta r)\,\Delta r$,
where $S$ denotes surface area. Dividing by $\Delta r$,
$$S(r) \le \frac{\Delta V}{\Delta r} \le S(r+\Delta r),$$
and letting $\Delta r \to 0$ (with $S$ continuous) squeezes the middle to
$$S(r) = \frac{dV}{dr}.$$
Differentiating $V = \tfrac43 \pi r^3$,
$$\text{SA} = \frac{d}{dr}\!\left(\tfrac43 \pi r^3\right) = \tfrac43 \pi \cdot 3 r^2 = 4\pi r^2.$$
$\blacksquare$

### Worked Instance

Take $r = 3$. The volume is
$$V = \tfrac43 \pi r^3 = \tfrac43 \pi \cdot 27 = 36\pi,$$
and the surface area is
$$\text{SA} = 4\pi r^2 = 4\pi \cdot 9 = 36\pi.$$
The two happen to coincide at $r = 3$ (because $\tfrac43 r^3 = 4 r^2$ exactly when $r = 3$) — a
numerical accident, not a rule; the units differ (cubic versus square). To see the Archimedes
relation directly: the surrounding cylinder of radius $3$, height $3$ has volume $\pi\cdot 9\cdot 3
= 27\pi$; removing the cone of volume $\tfrac13\cdot 27\pi = 9\pi$ leaves $18\pi$, which is the
hemisphere's volume, and $2 \cdot 18\pi = 36\pi$ is the whole ball — matching $\tfrac43\pi\cdot 27$.

### Pitfalls

- **$\tfrac43$ in the volume, plain $4$ in the surface.** $V = \tfrac43\pi r^3$ but
  $\text{SA} = 4\pi r^2$; sliding the $\tfrac13$ into the surface (or dropping it from the volume)
  is the classic error.
- **$r^3$ for volume, $r^2$ for area.** Volume grows as the cube of the radius, surface as the
  square. Watch the exponent, and the units: $r^3$ gives cubic units, $r^2$ square.
- **A great circle is not the whole surface.** The largest cross-sectional disk has area
  $\pi r^2$, but the sphere's surface is $4\pi r^2$ — four great-circle areas, not one.
- **The cone must be removed, not added.** Archimedes' comparison solid is the cylinder *minus*
  the cone; adding it would double-count and wreck the annulus match.

:::
:::

## Connections

Spheres cap the solid-geometry strand, and they lean on `geo-cylinders-cones` twice over: the
volume falls out of a cylinder with a cone removed, matched to a hemisphere slice-for-slice by
**Cavalieri's principle**, the same lever used for prisms, pyramids, and cones. The great-circle
disk area $\pi r^2$ from `geo-circle-area` supplies each cross-section. The surface area emerges
from a first taste of the onion-peel (shell) idea — surface is the derivative of volume — that
recurs throughout calculus. Recognition trigger: any ball, globe, dome, or "how much paint / how
much filling" question about a round solid, and the standing reminder that volume wears $\tfrac43$
and $r^3$ while surface wears $4$ and $r^2$.

## History

The sphere's volume $\tfrac43\pi r^3$ and surface area $4\pi r^2$ are the crowning achievements of Archimedes of Syracuse (c. 250 BCE) in his treatise *On the Sphere and Cylinder*. He proved that a sphere is exactly two-thirds of its circumscribing cylinder in both volume and surface area — a result so dear to him that he requested the figure on his gravestone, by which the Roman orator Cicero later identified the neglected tomb. Archimedes reached these formulas through his method of exhaustion and a private "mechanical method" of balancing thin slices, seeking to conquer the most symmetric of curved solids. The hat-box theorem, that a horizontal slab of the sphere has the same lateral area as the matching slab of the cylinder, is his, and it remains the slickest route to $4\pi r^2$.
