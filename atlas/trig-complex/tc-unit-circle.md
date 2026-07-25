$\cos 30^\circ = \tfrac{\sqrt 3}{2}$ and $\sin 30^\circ = \tfrac12$, but $\cos 45^\circ = \sin 45^\circ = \tfrac{\sqrt 2}{2}$. Where do those exact surds come from — and why can you read *both* the cosine and the sine of an angle off a single circle?

## Discovery

1. Draw the circle $x^2 + y^2 = 1$. Start at the point $(1,0)$ and walk counterclockwise by angle $\theta$. Call the point you land on $P_\theta = (x,y)$. Write $x$ and $y$ in terms of $\theta$ using the right triangle dropped from $P_\theta$ to the $x$-axis.
2. Take $\theta = 45^\circ$. By symmetry across the line $y = x$, what relation must hold between the coordinates of $P_{45^\circ}$? Combine that with $x^2 + y^2 = 1$ to solve for $x$ and $y$ exactly.
3. Take $\theta = 30^\circ$. Reflect $P_{30^\circ}$ across the $x$-axis to get $P_{-30^\circ}$; together with $(1,0)$ these three points... what kind of triangle do they form? Use its side lengths to pin down the coordinates of $P_{30^\circ}$.
4. Now find $P_{60^\circ}$ from $P_{30^\circ}$ by swapping the roles of $x$ and $y$ (why is that swap legitimate?). Tabulate $(\cos\theta,\sin\theta)$ for $\theta \in \{0^\circ,30^\circ,45^\circ,60^\circ,90^\circ\}$.
5. What are the coordinates of $P_{\theta + 360^\circ}$ compared to $P_\theta$? What does that force on $\cos$ and $\sin$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Define $\cos\theta$ and $\sin\theta$ as the $x$- and $y$-coordinates of the point reached by rotating $(1,0)$ counterclockwise through angle $\theta$ on the unit circle $x^2+y^2=1$. Then:

- $\cos^2\theta + \sin^2\theta = 1$ for every $\theta$ (the Pythagorean identity, just the circle's equation).
- Both functions are periodic with period $360^\circ = 2\pi$.
- The special values:

$$
\begin{array}{c|ccccc}
\theta & 0 & 30^\circ & 45^\circ & 60^\circ & 90^\circ\\\hline
\cos\theta & 1 & \tfrac{\sqrt3}{2} & \tfrac{\sqrt2}{2} & \tfrac12 & 0\\
\sin\theta & 0 & \tfrac12 & \tfrac{\sqrt2}{2} & \tfrac{\sqrt3}{2} & 1
\end{array}
$$

Reflections generate every other quadrant: $\cos(-\theta)=\cos\theta$, $\sin(-\theta)=-\sin\theta$, and $\cos(180^\circ-\theta)=-\cos\theta$, $\sin(180^\circ-\theta)=\sin\theta$.

### Proof

The definition makes $P_\theta=(\cos\theta,\sin\theta)$ a point of $x^2+y^2=1$, so $\cos^2\theta+\sin^2\theta=1$ automatically. Rotating by a further $360^\circ$ returns to the same point, giving period $360^\circ$.

For $45^\circ$: the ray at $45^\circ$ is the line $y=x$, so $P_{45^\circ}$ has equal coordinates $x=y\gt 0$. Then $x^2+x^2=1$ gives $x=\tfrac{1}{\sqrt2}=\tfrac{\sqrt2}{2}$, so $P_{45^\circ}=\left(\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\right)$.

For $30^\circ$: the three points $(1,0)$, $P_{30^\circ}$, $P_{-30^\circ}$ are each at distance $1$ from the origin, and the arcs between them are equal, so the chords $(1,0)\,P_{30^\circ}$ and $(1,0)\,P_{-30^\circ}$ have equal length while $P_{30^\circ}P_{-30^\circ}$ subtends $60^\circ$. In fact the origin together with $P_{\pm 30^\circ}$ makes an isosceles triangle with apex angle $60^\circ$, hence equilateral, so $P_{30^\circ}P_{-30^\circ}=1$. Since these two points are mirror images across the $x$-axis, their common $y$-coordinate satisfies $2|y|=1$, i.e. $y=\tfrac12$. Then $x=\sqrt{1-\tfrac14}=\tfrac{\sqrt3}{2}\gt 0$, so $P_{30^\circ}=\left(\tfrac{\sqrt3}{2},\tfrac12\right)$.

For $60^\circ$: reflecting across $y=x$ sends $P_\theta$ to $P_{90^\circ-\theta}$ (a reflection across $y=x$ swaps coordinates and maps the angle $\theta$ to $90^\circ-\theta$). Applying it to $P_{30^\circ}$ gives $P_{60^\circ}=\left(\tfrac12,\tfrac{\sqrt3}{2}\right)$.

The reflection identities follow the same way: reflecting $P_\theta$ across the $x$-axis negates $y$ and the angle, giving $\cos(-\theta)=\cos\theta$, $\sin(-\theta)=-\sin\theta$; reflecting across the $y$-axis gives the $180^\circ-\theta$ pair. $\blacksquare$

### Worked Instance

Find $\cos 150^\circ$ and $\sin 150^\circ$. Write $150^\circ = 180^\circ - 30^\circ$. Reflection across the $y$-axis gives $\cos 150^\circ = -\cos 30^\circ = -\tfrac{\sqrt3}{2}$ and $\sin 150^\circ = \sin 30^\circ = \tfrac12$. Check: $\left(-\tfrac{\sqrt3}{2}\right)^2 + \left(\tfrac12\right)^2 = \tfrac34+\tfrac14 = 1$, on the circle as required.

### Pitfalls

- $\cos$ is the $x$-coordinate and $\sin$ the $y$-coordinate — swapping them is the classic slip. Anchor it: at $\theta=0$ you are at $(1,0)$, so $\cos 0 = 1$.
- Signs are set by the quadrant, not by the acute reference angle alone. $\cos 150^\circ$ is negative because you are in the second quadrant.
- Degrees vs radians: $\cos\theta$ with period $360^\circ$ is the *same* function as period $2\pi$; never mix units inside one computation.

:::
:::

## Connections

Prereqs: none — this is a root of the trig/complex domain. The circle definition (rather than "SOH-CAH-TOA") is what lets $\theta$ range over all reals and lets you read cosine and sine off one picture; that viewpoint powers the angle-addition formulas (unlocks: `tc-angle-addition`) and eventually complex exponentials. Recognition trigger: any exact value at a "nice" angle, or any appearance of $\cos^2+\sin^2$, should send you back to a point on this circle.
