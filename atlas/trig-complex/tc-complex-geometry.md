Rotating the point $(3,4)$ by $90^\circ$ about the origin usually means a rotation matrix or a careful sketch. But if you call the point $3+4i$ and just multiply by $i$, you get $-4+3i$ — the rotated point, instantly. Multiplication by a complex number *is* a rotation-and-scaling. That one fact turns hard plane-geometry problems into algebra.

## Discovery

1. Identify the point $(x,y)$ with the complex number $z=x+iy$. Take $z=3+4i$ and compute $iz$. Plot both $z$ and $iz$. By what angle, about the origin, did the point move?
2. Write $z = re^{i\theta}$ (modulus $r$, argument $\theta$). Multiply by $w=se^{i\phi}$. What are the modulus and argument of $zw$? State in words what multiplying by $w$ does to the point $z$.
3. So how do you rotate a point $z$ counterclockwise by angle $\alpha$ about the **origin**, using multiplication? Which complex number do you multiply by?
4. To rotate $z$ about a different center $c$ (not the origin), first translate so $c$ goes to $0$, rotate, then translate back. Write the resulting map $z \mapsto ?$ as a single formula in $z$, $c$, and $e^{i\alpha}$.
5. Given two points $a,b$, what does the complex number $b-a$ encode about the segment from $a$ to $b$ (think modulus and argument)? How would you test whether three points $a,b,c$ are collinear using a ratio of such differences?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Identify the plane with $\CC$ via $(x,y)\leftrightarrow x+iy$. Then:

- **Multiplication is rotation-and-scaling.** For $w=se^{i\phi}$, the map $z\mapsto wz$ scales by $s$ and rotates by $\phi$ about the origin.
- **Rotation by $\alpha$ about the origin:** $z\mapsto e^{i\alpha}z$.
- **Rotation by $\alpha$ about center $c$:** $z\mapsto c + e^{i\alpha}(z-c)$.
- **Displacement vector:** $b-a$ has modulus $=$ distance $|ab|$ and argument $=$ direction of the ray from $a$ to $b$.
- **Angle / collinearity test:** the argument of $\dfrac{c-a}{b-a}$ is the directed angle $\angle bac$; it is real iff $a,b,c$ are collinear, and purely imaginary iff $ac\perp ab$.

### Proof

In polar form $z=re^{i\theta}$, $w=se^{i\phi}$, the exponent law from Euler's formula gives $wz = (sr)e^{i(\phi+\theta)}$. So $|wz|=s|z|$ and $\arg(wz)=\arg z+\phi$: multiplication by $w$ scales lengths by $s$ and adds $\phi$ to every argument, i.e. rotates about the origin by $\phi$. Taking $s=1$, $w=e^{i\alpha}$ gives a pure rotation about the origin.

For a rotation about $c$: translate by $-c$ (sending $c\mapsto 0$), rotate about the origin by $e^{i\alpha}$, translate back by $+c$. Composing, $z\mapsto (z-c)\mapsto e^{i\alpha}(z-c)\mapsto c+e^{i\alpha}(z-c)$, and this map fixes $c$ (plug in $z=c$) and rotates every displacement $z-c$ by $\alpha$, so it is the rotation about $c$ by $\alpha$.

The vector $b-a=(b_x-a_x)+i(b_y-a_y)$ has modulus $\sqrt{(b_x-a_x)^2+(b_y-a_y)^2}=|ab|$ and argument equal to the direction of the ray $a\to b$. Then
$$\frac{c-a}{b-a} = \frac{|c-a|}{|b-a|}\,e^{i(\arg(c-a)-\arg(b-a))},$$
whose argument is the directed angle from ray $ab$ to ray $ac$, i.e. $\angle bac$. This ratio is real (argument $0$ or $\pi$) exactly when $ac$ and $ab$ point along the same line, i.e. $a,b,c$ collinear; it is purely imaginary (argument $\pm\tfrac{\pi}{2}$) exactly when the rays are perpendicular. $\blacksquare$

### Worked Instance

Let $A=1$, $B=1+i$ be two vertices of a square $ABCD$ labeled counterclockwise. Find $C$ and $D$. Going around counterclockwise, each edge is the previous one rotated $90^\circ$ about the shared vertex. The vector $A\to B$ is $B-A=i$. Rotating it $90^\circ$ counterclockwise means multiplying by $e^{i\pi/2}=i$: the vector $B\to C$ is $i\cdot(B-A)=i\cdot i=-1$. So $C = B + (-1) = i$. Similarly $C\to D$ is $i\cdot(C-B)=i\cdot(-1)=-i$, giving $D=C+(-i)=i-i=0$. Check: the four vertices $1,\,1+i,\,i,\,0$ are the unit square, traversed counterclockwise. ✓

### Pitfalls

- **Center matters.** $z\mapsto e^{i\alpha}z$ rotates about the *origin*; to rotate about $c$ use $c+e^{i\alpha}(z-c)$. Forgetting to recenter is the classic bug.
- Counterclockwise is the $+\alpha$ direction; a clockwise rotation uses $e^{-i\alpha}$.
- $\dfrac{c-a}{b-a}$ being real means collinear — a *real* value, not merely "no $i$ visible before simplifying." Simplify first.
- Multiplying by $w$ with $|w|\ne 1$ also *scales*; use $|w|=1$ for a pure rotation.

:::
:::

## Connections

Prereqs: Euler's formula, which turns "multiply complex numbers" into "add angles, multiply lengths." This is the algebraic backbone of complex-number geometry (unlocks: `geo-complex-numbers`), where rotations, spiral similarities, and perpendicularity all become one-line computations. It also connects to roots of unity (regular polygons) and to vectors. Recognition trigger: a plane-geometry problem heavy on rotations, equilateral/square constructions, perpendicularity, or "prove these points are collinear/concyclic."
