---
course: integrated-maths
chapter: 16
section: 16.2
title: Polar Coordinates, Rotations and Ellipses
---

Polar coordinates locate a point by its distance from the origin and its angle from the positive $x$-axis. Converting between polar and rectangular form also gives a formula for rotating a point about the origin, which the last problem uses on a tilted ellipse.

## Polar coordinates

:::definition
In **polar coordinates** a point is written $(r, \theta)$, where $r$, the **radial coordinate**, is the distance from the origin, and $\theta$, the **angular coordinate**, is the angle the segment from the origin makes with the positive $x$-axis.
:::

![A point (r, θ) at distance r from the origin and angle θ](/notes/integrated-maths/figures/p3-polar-coords.svg)

:::problem
Convert to polar:

(a) $(0,-3)$ (b) $(5,5)$ (c) $(-2\sqrt3, -6)$

:::solution
(a) $(0,-3) = (3, 270^\circ)$.

(b) $(5,5) = (5\sqrt2, 45^\circ)$.

(c) $(-2\sqrt3, -6) = (4\sqrt3, 240^\circ)$. The legs of the triangle are $2\sqrt3$ and $6$ and the hypotenuse is $4\sqrt3$. Since $2(2\sqrt3) = 4\sqrt3$, it is a $60^\circ$–$90^\circ$–$30^\circ$ triangle with the $60^\circ$ angle at the origin, and the point is in the third quadrant: $180^\circ + 60^\circ = 240^\circ$.
:::
:::

:::problem
Convert to rectangular:

(a) $(8, 60^\circ)$ (b) $\left(12, -\frac{2\pi}{3}\right)$ (c) $(4\sqrt2, 315^\circ)$

:::solution
(a) Drop a perpendicular: a right triangle with hypotenuse $8$, angles $60^\circ$, $30^\circ$, $90^\circ$, leg $c$ along the $x$-axis and leg $b$ opposite the $60^\circ$ angle. By the law of sines,
$$\frac{\sin 90^\circ}{8} = \frac{\sin 60^\circ}{b} = \frac{\sin 30^\circ}{c} \implies \frac18 = \frac{\sqrt3}{2b} = \frac{1}{2c},$$
so $b = \frac{8\sqrt3}{2} = 4\sqrt3$ and $c = \frac82 = 4$. Thus $(8, 60^\circ) = (4, 4\sqrt3)$.

(b) $-\frac{2\pi}{3}$ points the same way as $240^\circ$. With $\frac{1}{12} = \frac{\sqrt3}{2b}$ we get $b = 6\sqrt3$, $c = 6$, so $\left(12, -\frac{2\pi}{3}\right) = (-6, -6\sqrt3)$.

(c) $\frac{4\sqrt2\cdot\sqrt2}{2} = 4$, and since the triangle is $45$–$45$–$90$, it’s the same for both legs, so
$$(4\sqrt2, 315^\circ) = (4, -4).$$
:::
:::

:::problem
(a) What are the rectangular coordinates of the point with polar coordinates $(1, \theta)$?

(b) What about $(r, \theta)$, assuming $r > 0$?

(c) Suppose point $P$ is $(x,y)$ in rectangular coordinates and $(r,\theta)$ in polar coordinates, $r > 0$. Find $r$ in terms of $x$ and $y$. How must we modify our answer if we remove the restriction $r > 0$? How is $\tan\theta$ related to $x$ and $y$?

:::solution
(a) $(1,\theta) = (\cos\theta, \sin\theta)$.

(b) The point is $r$ times as far out along the same ray, so
$$(r, \theta) = (r\cos\theta,\ r\sin\theta).$$
Since $\cos^2\theta + \sin^2\theta = 1$, we have $r\cos^2\theta + r\sin^2\theta = r$. Check with $(4\sqrt2, 315^\circ)$ from part (c) of the previous problem: $4\sqrt2\cos 315^\circ = 4\sqrt2\cdot\frac{\sqrt2}{2} = 4$ and $4\sqrt2\sin 315^\circ = 4\sqrt2\left(-\frac{\sqrt2}{2}\right) = -4$, giving $(4,-4)$.

(c) If we have $x = r\cos\theta$ and $y = r\sin\theta$, then $x^2 + y^2 = r^2(\cos^2\theta + \sin^2\theta) = r^2$, so we can calculate:
$$\underbrace{\sqrt{x^2 + y^2} = r}_{\text{if } r > 0} \implies \underbrace{r^2 = x^2 + y^2}_{\text{if } r \in \RR}.$$
As for how $\tan\theta$ is related to $x, y$? Well,
$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac yx.$$
:::
:::

:::problem
What is the graph of $r = 5$? Of $\theta = 20^\circ$? (In polar.)

:::solution
$r = 5$ is the circle of radius $5$ about the origin, and $\theta = 20^\circ$ is the line through the origin at angle $20^\circ$.

![The circle r = 5 and the line θ = 20°](/notes/integrated-maths/figures/p3-polar-5-11.svg)
:::
:::

:::problem
(a) Graph $r = 6\sin\theta$ in polar and use the graph to guess the rectangular form of this equation.

:::solution
(a)

| $\theta$ | $(r, \theta)$ |
|---|---|
| $0^\circ$ | $(0, 0)$ |
| $30^\circ$ | $(3, 30^\circ)$ |
| $60^\circ$ | $(3\sqrt3, 60^\circ)$ |
| $90^\circ$ | $(6, 90^\circ)$ |
| $120^\circ$ | $(3\sqrt3, 120^\circ)$ |
| $150^\circ$ | $(3, 150^\circ)$ |

![The circle r = 6 sin θ with the plotted points](/notes/integrated-maths/figures/p3-polar-5-12.svg)

A circle with radius $3$, so $x^2 + (y-3)^2 = 9$.

(b) So $x^2 + (y-3)^2 = 9$ and $r = 6\sin\theta$ is what we have. Recall $r^2 = x^2 + y^2$, $x = r\cos\theta$, $y = r\sin\theta$, $\tan\theta = \frac yx$. So
$$\begin{aligned}
(r\cos\theta)^2 + (r\sin\theta - 3)^2 = 9 &\implies r^2\cos^2\theta + r^2\sin^2\theta + 9 - 6r\sin\theta = 9 \\
&\implies r^2(\cos^2\theta + \sin^2\theta) - 6r\sin\theta = 0 \\
&\implies \frac{r^2}{r} = \frac{6r\sin\theta}{r} \implies r = 6\sin\theta.
\end{aligned}$$
:::
:::

:::problem
In rectangular form, the general form of an equation whose graph is the circle with center $(h,k)$ and radius $t$ is $(x-h)^2 + (y-k)^2 = t^2$. Find the polar form of this equation. That is, find the general form of the equation whose graph is the circle with center $(r_0, \alpha)$ (in polar) and radius $t$.

:::solution
First try: $(x-h)^2 + (y-k)^2 = t^2 \implies (r\cos\theta - r_0)^2 + (r\sin\theta - \alpha)^2 = t^2$, which expands to
$$r^2 + r_0^2 + \alpha^2 - 2rr_0\cos\theta - 2r\alpha\sin\theta, \quad\text{i.e.}\quad r(-2r_0\cos\theta - 2\alpha\sin\theta + r) + r_0^2 + \alpha^2 \ldots$$
wait, no: $k = r_0\sin\alpha$ (and $h = r_0\cos\alpha$). So
$$\begin{aligned}
(r\cos\theta - r_0\cos\alpha)^2 + (r\sin\theta - r_0\sin\alpha)^2 &= t^2 \\
r^2\cos^2\theta - 2rr_0\cos\theta\cos\alpha + r_0^2\cos^2\alpha + r^2\sin^2\theta - 2rr_0\sin\theta\sin\alpha + r_0^2\sin^2\alpha &= t^2 \\
r^2 + r_0^2 - 2rr_0\cos\theta\cos\alpha - 2rr_0\sin\theta\sin\alpha &= t^2 \\
r^2 + r_0^2 - 2rr_0\cos(\theta - \alpha) &= t^2.
\end{aligned}$$
So as an equation we have: given $(x-h)^2 + (y-k)^2 = t^2$ centered at $(h,k)$, the polar equation centered at $(r_0, \alpha)$ that corresponds to our rectangular form is
$$\boxed{\,r^2 + r_0^2 - 2rr_0\cos(\theta - \alpha) = t^2\,}$$
:::
:::

## Rotating points about the origin

:::problem
(a) What are the rectangular coordinates of the point that results when $(5\sqrt2, 5\sqrt6)$ is rotated $\frac{2\pi}{3}$ counterclockwise about the origin?

(b) Show that if the point $(x,y)$ is rotated $\theta$ counterclockwise about the origin, the result has rectangular coordinates $(x\cos\theta - y\sin\theta,\ y\cos\theta + x\sin\theta)$.

:::solution
(a) $r^2 = 25(2) + 25(6) = 50 + 150 = 200$, so $r = \sqrt{200} = \sqrt{10^2\cdot 2} = 10\sqrt2$. The triangle with legs $5\sqrt2$ and $5\sqrt6$ has a $60^\circ$ angle at the origin: indeed $10\sqrt2\cos 60^\circ = 5\sqrt2$ and $10\sqrt2\sin 60^\circ = 5\sqrt6$. Rotating adds the angles, $\frac{\pi}{3} + \frac{2\pi}{3} = \pi$, so
$$10\sqrt2\cos 180^\circ = -10\sqrt2 = x_{\text{new}}, \qquad 10\sqrt2\sin 180^\circ = 0 = y_{\text{new}}.$$
So $(5\sqrt2, 5\sqrt6)$ rotated $\frac{2\pi}{3}$ counterclockwise is $(-10\sqrt2, 0)$.

(b) We know that $x = r\cos\theta$ and $y = r\sin\theta$, so rotation (let’s call it $\phi$ to avoid confusion) by $\phi$ about the origin can be given by $(r\cos(\theta + \phi),\ r\sin(\theta+\phi))$. It is, however, known that
$$\cos(\theta + \phi) = \cos\theta\cos\phi - \sin\theta\sin\phi \quad\text{and}\quad \sin(\theta+\phi) = \sin\theta\cos\phi + \sin\phi\cos\theta,$$
so we have new coordinates of
$$(r\cos\theta\cos\phi - r\sin\theta\sin\phi,\ r\sin\theta\cos\phi + r\sin\phi\cos\theta).$$
But wait! We know $x = r\cos\theta$, and likewise for $y$, so substituting in we have
$$(x\cos\phi - y\sin\phi,\ y\cos\phi + x\sin\phi),$$
as desired.
:::
:::

:::remark Scratch work for the rotation problem
Let $(r, \alpha)$ be polar coordinates for $(x,y)$; then the rotation result is $(r, \alpha + \theta)$, i.e. $(r\cos(\alpha+\theta), r\sin(\alpha+\theta))$. OHH.

Checking the formula against (a), with $\cos 120^\circ = -\frac12$ and $\sin 120^\circ = \frac{\sqrt3}{2}$:
$$5\sqrt2\cos 120^\circ - 5\sqrt6\sin 120^\circ = -\frac{5\sqrt2}{2} - \frac{15\sqrt2}{2} = -\frac{20\sqrt2}{2} = -10\sqrt2.$$
:::

## Ellipses

The **standard form** of an ellipse centered at the origin is
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1,$$
where $a$ is the $x$-radius and $b$ is the $y$-radius. With $a > b$ (as drawn), $a$ is the **major radius** or **semi-major axis** and $b$ is the **minor radius** or **semi-minor axis**.

![An ellipse with (±a, 0), (0, ±b), and the semi-axes marked](/notes/integrated-maths/figures/p3-ellipse-axes.svg)

- **Minor axis:** the short side.
- **Major axis:** the long side.

The semi-minor axis is $b$ since the minor axis is $2b$ (the whole axis in the ellipse).

:::example
$$\frac{x^2}{9} + \frac{y^2}{25} = 1 \iff \frac{x^2}{3^2} + \frac{y^2}{5^2} = 1.$$

:::solution
So the major axis is $10$, with radius $5$, and is vertical; the minor axis is $6$, with radius $3$, for the horizontal.

![The ellipse x²/9 + y²/25 = 1](/notes/integrated-maths/figures/p3-ellipse-vertical.svg)
:::
:::

A circle fits the same pattern: $x^2 + y^2 = r^2 \iff \frac{x^2}{r^2} + \frac{y^2}{r^2} = 1$. Shifting: $(x-5)^2$ moves the graph right $5$, and $(y+2)^2$ moves it down $2$.

**Foci.** Say $a > b$ for $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, so the major axis is horizontal. For any point on the ellipse, the sum of its distances to the two foci $f_1, f_2$ is $2a$: in the picture, $d_1 + d_2 = 2a$, $d_3 + d_4 = 2a$, and so on for every point.

![An ellipse with foci, focal distances d₁ and d₂, and the right triangle with sides b, q, a](/notes/integrated-maths/figures/p3-ellipse-foci.svg)

The gaps $m$ (from the left end to $f_2$) and $n$ (from $f_1$ to the right end) are equal, since the ellipse is symmetric about its center. Taking the point at the right end of the major axis: its distance to $f_1$ is $n$, and its distance to $f_2$ is the stretch $c$ from the left end to $f_1$ (since $m = n$), so $c + n = 2a$, which is the whole major axis.

Now take the point at the top, $(0, b)$. There $d_1 = d_2$, so $d_1 = d_2 \implies d_1 = a = d_2$. With $q$ the distance from the center to each focus, the right triangle with legs $b$ and $q$ and hypotenuse $a$ gives
$$b^2 + q^2 = a^2 \implies q = \sqrt{a^2 - b^2}.$$

:::example
$\frac{x^2}{25} + \frac{y^2}{16} = 1 \implies a = 5$, $b = 4$, $q = \sqrt{25 - 16} = \sqrt9$, so $q = 3 \implies f_1 = (3,0)$ and $f_2 = (-3, 0)$.

Say you have $(1,-2)$ as center and $q = \sqrt5$; then $f_1 = (1 + \sqrt5, -2)$, $f_2 = (1 - \sqrt5, -2)$.
:::

Now a tilted ellipse.

:::problem
Let $h, k$ be constants and $a, b$ positive constants with $a > b$. The graph of an equation of the form
$$\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$$
is an ellipse whose major axis has length $2a$, and every ellipse in the Cartesian plane with a horizontal major axis is of this form. Find the length of the major axis of the following ellipse:
$$7x^2 - 6\sqrt3\,xy + 13y^2 = 64.$$

:::solution
Try to factor it like a square: $(\sqrt7 x \ \cdots\ \sqrt{13}y)(\sqrt7 x\ \cdots\ \sqrt{13}y)$, with $7x^2 - 6\sqrt3\,xy$ and $-6\sqrt3 = 2(-3\sqrt3)$… yikes.

The $xy$ term means the ellipse is tilted, so rotate it to make the major axis horizontal. Dividing by $64$:
$$\frac{7x^2}{64} - \frac{6\sqrt3\,xy}{64} + \frac{13y^2}{64} = 1.$$

$$7x^2 - 6\sqrt3\,xy + 13y^2 = 64, \qquad r^2 = x^2 + y^2.$$
In polar:
$$\begin{aligned}
&7(r\cos\theta)^2 - 6\sqrt3\,r\cos\theta\, r\sin\theta + 13(r\sin\theta)^2 \\
&= 7r^2\cos^2\theta - 3\sqrt3\,r^2\sin 2\theta + 13r^2\sin^2\theta \\
&= 7r^2(1 - \sin^2\theta) + 13r^2\sin^2\theta - 3\sqrt3\,r^2\sin 2\theta \\
&= 7r^2 - 7r^2\sin^2\theta + 13r^2\sin^2\theta - 3\sqrt3\,r^2\sin 2\theta,
\end{aligned}$$
so
$$7r^2 + 6r^2\sin^2\theta - 3\sqrt3\,r^2\sin 2\theta = 64.$$
✗ (Dead end.)

Rotate instead:
$$x = x'\cos\theta - y'\sin\theta, \qquad y = x'\sin\theta + y'\cos\theta.$$
Then $a = 4 \implies 2a = 8$: the major axis has length $8$.

:::
:::
