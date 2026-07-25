A single multiplication rotates the entire plane. Multiply every point by $i$ and the whole picture
spins a quarter turn about the origin; multiply by $e^{i\theta}$ and it turns by $\theta$. That one
fact — rotation is just multiplication — turns hard "spin this point about that point" geometry
problems into one-line algebra. Where does the awkward rotation formula from coordinates go?

## Discovery

Identify each point of the plane with a complex number: the point $(x, y)$ becomes $z = x + iy$. Then
$|z|$ is its distance from the origin and $\arg z$ its angle.

1. Compute $i\cdot z$ for $z = x + iy$. Write the result as a new point $(x', y')$. Geometrically,
   where has $z$ moved to? What transformation is "multiply by $i$"?
2. More generally, multiply $z$ by $e^{i\theta} = \cos\theta + i\sin\theta$. Using $|e^{i\theta}| = 1$
   and the argument-addition rule $\arg(wz) = \arg w + \arg z$, describe the effect on $z$'s distance
   from the origin and on its angle. What single geometric operation is "multiply by $e^{i\theta}$"?
3. Rotation about the origin is now clear, but real problems rotate about *other* centers. To rotate
   $z$ by angle $\theta$ about a point $c$: first translate so $c$ goes to the origin, then rotate,
   then translate back. Write this as a formula for the image $z'$ in terms of $z$, $c$, $\theta$.
4. Test it. Take an equilateral triangle: to build one on a segment $AB$, you rotate $B$ about $A$ by
   $60^\circ$ to get the apex $C$. Write $C$ in terms of the complex numbers $a, b$ and
   $\omega = e^{i\pi/3}$. What algebraic relation among $a, b, c$ characterizes an equilateral
   triangle?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Identify the point $(x,y)$ with the complex number $z = x + iy$. Then:

- **Distance:** $|z_1 - z_2|$ is the distance between the points $z_1, z_2$.
- **Rotation about the origin** by angle $\theta$: $z \mapsto e^{i\theta} z$ (and by $90^\circ$:
  $z \mapsto iz$). Multiplication by $e^{i\theta}$ rotates by $\theta$ and scales by $1$; multiplication
  by $r e^{i\theta}$ rotates by $\theta$ and scales by $r$ (a *spiral similarity*).
- **Rotation about a point $c$** by $\theta$: $z \mapsto c + e^{i\theta}(z - c)$.
- **Equilateral triangle criterion:** points $a, b, c$ form an equilateral triangle **iff**
  $a + \omega b + \omega^2 c = 0$ for a primitive cube root of unity $\omega = e^{2\pi i/3}$
  (equivalently $a^2 + b^2 + c^2 = ab + bc + ca$).

This is "complex bashing": encode a configuration in complex numbers and let rotation-as-multiplication
do the geometry.

### Proof

**Multiplication is rotation-and-scaling.** Write $z = r e^{i\alpha}$ in polar form ($r = |z|$,
$\alpha = \arg z$) and $w = \rho e^{i\theta}$. Then $wz = \rho r\, e^{i(\theta + \alpha)}$, so
$|wz| = \rho|z|$ and $\arg(wz) = \theta + \arg z$: multiplying by $w$ scales lengths by $\rho = |w|$
and adds $\theta = \arg w$ to every angle. For $w = e^{i\theta}$ ($\rho = 1$) this is a pure rotation
by $\theta$ about the origin; for $w = i = e^{i\pi/2}$ it is a $90^\circ$ rotation.

**Rotation about $c$.** Translation $z \mapsto z - c$ sends $c$ to $0$; rotation about $0$ by $\theta$
is multiplication by $e^{i\theta}$; translating back is $\,\cdot + c$. Composing:
$z \mapsto c + e^{i\theta}(z - c)$, which fixes $c$ (plug in $z = c$) and rotates the plane about it.

**Equilateral criterion.** Suppose $a, b, c$ are the vertices of an equilateral triangle labeled
counterclockwise. Then $c$ is obtained from $b$ by rotating $60^\circ$ about $a$:
$c - a = e^{i\pi/3}(b - a)$. Let $\zeta = e^{i\pi/3}$; note $\zeta$ satisfies $\zeta^2 - \zeta + 1 = 0$
(since $\zeta = e^{i\pi/3}$ is a primitive sixth root of unity). From $c - a = \zeta(b - a)$,
$$c = a + \zeta b - \zeta a = (1 - \zeta)a + \zeta b.$$
Using $\zeta^2 - \zeta + 1 = 0$, i.e. $\zeta^2 = \zeta - 1$, one computes directly
$$a^2 + b^2 + c^2 - ab - bc - ca.$$
Substituting $c = (1-\zeta)a + \zeta b$ and simplifying with $\zeta^2 = \zeta - 1$ gives $0$ (a routine
expansion: every term cancels using $\zeta^2 - \zeta + 1 = 0$). Hence $a^2 + b^2 + c^2 = ab + bc + ca$.
This factors as
$$a^2 + b^2 + c^2 - ab - bc - ca = (a + \omega b + \omega^2 c)(a + \omega^2 b + \omega c) = 0,$$
where $\omega = e^{2\pi i/3}$; the two factors correspond to the two orientations of the equilateral
triangle. Conversely, if $a^2 + b^2 + c^2 = ab + bc + ca$ with the points distinct, one factor
vanishes, forcing $c - a = e^{\pm i\pi/3}(b - a)$, i.e. an equilateral triangle. $\blacksquare$

### Worked Instance

**Napoleon-style construction / rotation in action.** Let $A$ and $B$ be at $a = 0$ and $b = 1$. Build
the equilateral triangle on $AB$ with apex $C$ above the segment: rotate $b$ about $a$ by $60^\circ$,
$$c = a + e^{i\pi/3}(b - a) = 0 + e^{i\pi/3}\cdot 1 = \cos 60^\circ + i\sin 60^\circ = \tfrac12 +
\tfrac{\sqrt3}{2} i.$$
So $C = \big(\tfrac12, \tfrac{\sqrt3}{2}\big)$ — exactly the apex of the unit equilateral triangle, with
$|CA| = |CB| = 1$. Check the criterion with $\omega = e^{2\pi i/3} = -\tfrac12 + \tfrac{\sqrt3}{2}i$:
$$a + \omega b + \omega^2 c = 0 + \omega\cdot 1 + \omega^2\Big(\tfrac12 + \tfrac{\sqrt3}{2}i\Big).$$
Since $\omega^2 = e^{4\pi i/3} = -\tfrac12 - \tfrac{\sqrt3}{2}i$ and $c = e^{i\pi/3}$, we have
$\omega^2 c = e^{4\pi i/3}e^{i\pi/3} = e^{i5\pi/3} = \tfrac12 - \tfrac{\sqrt3}{2}i = \overline{\omega}$,
and $\omega + \overline{\omega} = 2\operatorname{Re}\omega = -1$... so $a + \omega b + \omega^2 c =
\omega + \tfrac12 - \tfrac{\sqrt3}{2}i = (-\tfrac12 + \tfrac{\sqrt3}{2}i) + (\tfrac12 - \tfrac{\sqrt3}{2}
i) = 0$, confirming the equilateral relation. One multiplication produced the vertex; the criterion
verified it.

### Pitfalls

- **Rotation about a point $c$ is $z \mapsto c + e^{i\theta}(z-c)$, not $e^{i\theta}z + c$.** Forgetting
  to translate to the origin first rotates about the wrong center.
- Multiplying by $e^{i\theta}$ rotates *counterclockwise* by $\theta$; a clockwise rotation uses
  $e^{-i\theta}$. Sign of the angle = direction of the spin.
- The equilateral criterion $a + \omega b + \omega^2 c = 0$ is *orientation-sensitive*: one of the two
  factors of $a^2+b^2+c^2-ab-bc-ca$ vanishes for a counterclockwise triangle, the other for clockwise.
  The symmetric form $a^2+b^2+c^2 = ab+bc+ca$ covers both.
- Only *similarities* (rotations, scalings, translations, and with conjugation, reflections) are simple
  here. Reflection is $z \mapsto \bar z$ and its conjugate-linear nature must be tracked separately.
- $|z_1 - z_2|$ (a modulus) is the distance; $z_1 - z_2$ alone is a vector, not a length.

:::
:::

## Connections

Prereqs: complex numbers as a geometry tool (`tc-complex-geometry`) — Euler's form $e^{i\theta}$ and
the modulus/argument dictionary. This method is the complex counterpart of `geo-coordinate-bashing`
and `geo-vectors`: same "put it in a computational frame" spirit, but rotations and spiral similarities
become *multiplication*, which coordinates handle only clumsily. It shines on problems with rotations,
regular polygons, equilateral triangles, and spiral similarity (e.g. Napoleon's theorem, the Fermat
point). Recognition trigger: a configuration built by rotating points, a regular polygon or equilateral
triangle, or the phrase "spiral similarity" — reach for complex coordinates.
