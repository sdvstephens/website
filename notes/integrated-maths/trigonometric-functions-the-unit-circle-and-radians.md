---
course: integrated-maths
chapter: 15
section: 15.1
title: Trigonometric Functions, the Unit Circle and Radians
---

This page defines the six trigonometric functions from the unit circle, works out their values at the standard angles, converts between degrees and radians, and begins graphing them. The exercises at the end evaluate a sinusoid and solve some equations.

## Defining the trigonometric functions

:::definition
The **cosine** ($\cos$) of an angle $\theta$ is the $x$-coordinate of the terminal point of $\theta$. The **sine** ($\sin$) is the $y$-coordinate of that same terminal point. The **tangent** ($\tan$) is the ratio of the $y$-coordinate to the $x$-coordinate (i.e. $\sin\theta : \cos\theta$).
:::

:::definition
The **secant** is $\sec\theta = \dfrac{1}{\cos\theta}$, the **cosecant** is $\csc\theta = \dfrac{1}{\sin\theta}$, and the **cotangent** is $\cot\theta = \dfrac{1}{\tan\theta} = \dfrac{\cos\theta}{\sin\theta}$.
:::

:::problem
The side lengths of a $45$-$45$-$90$ triangle and a $30$-$60$-$90$ triangle, each with hypotenuse $1$.

![A 45-45-90 triangle ABC and a 30-60-90 triangle A’B’C’, each with hypotenuse 1](/notes/integrated-maths/figures/p1-special-triangles.svg)

:::solution
$$BC = 1,\qquad AB = \frac{\sqrt2}{2},\qquad AC = \frac{\sqrt2}{2};$$
$$B'C' = 1,\qquad A'B' = \frac12,\qquad A'C' = \frac{\sqrt3}{2}.$$
:::
:::

:::problem
Cosine, sine and tangent of $0^\circ$, $90^\circ$, $45^\circ$, $30^\circ$, $60^\circ$ and $270^\circ$.

:::solution
| | $0^\circ$ | $90^\circ$ | $45^\circ$ | $30^\circ$ | $60^\circ$ | $270^\circ$ |
|---|---|---|---|---|---|---|
| $\cos$ | $1$ | $0$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $\frac12$ | $0$ |
| $\sin$ | $0$ | $1$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $\frac{\sqrt3}{2}$ | $-1$ |
| $\tan$ | $0$ | undefined | $1$ | $\frac{1}{\sqrt3} = \frac{\sqrt3}{3}$ | $\sqrt3$ | undefined |
:::
:::

:::problem
Let $\triangle XYZ$ be a right triangle such that $\angle XYZ = 90^\circ$. Now let $(x, y)$ be coordinates on the unit circle such that $\cos\theta = x$ and $\sin\theta = y$, so the point is $(\cos\theta, \sin\theta)$.

:::solution
So then $\cos\theta = \dfrac{YX}{XZ}$:

![Unit circle with a right triangle whose hypotenuse is 1, horizontal leg cos theta and vertical leg sin theta](/notes/integrated-maths/figures/p1-unit-circle-triangle.svg)

The $y$-coordinate is $\sin\theta$ and the $x$-coordinate is $\cos\theta$. The same follows for all other angles and ratios.
:::
:::

:::problem
Where sine and tangent are positive.

:::solution
(a) Sine is positive in quadrants I and II.

(b) Tangent is positive in quadrants I and III.
:::
:::

:::problem
Values at angles outside the first quadrant.

:::solution
(a) $\cos 120^\circ = -\frac12$

(b) $\sin 135^\circ = \frac{\sqrt2}{2}$

(c) $\sec 210^\circ = -\frac{2\sqrt3}{3}$

(d) $\cot 315^\circ = -1$

(e) $\csc 240^\circ = -\frac{2}{\sqrt3} = -\frac{2\sqrt3}{3}$

(f) $\tan 330^\circ = -\frac{\sqrt3}{3}$
:::
:::

:::problem
Values at angles beyond $360^\circ$ and negative angles.

:::solution
(a) $\cos 1080^\circ = \cos 0^\circ = 1$

(b) $\sin 3720^\circ = \sin 120^\circ = \frac{\sqrt3}{2}$

(c) $\cot(-45^\circ) = \cot 315^\circ = -1$

(d) $\sec(-480^\circ) = \sec(-120^\circ) = \sec 240^\circ = -2$
:::
:::

:::problem
Given $(\sin\theta)^2 = \sin^2\theta$ and $(\cos\theta)^2 = \cos^2\theta$, show $\sin^2\theta + \cos^2\theta = 1$.

:::solution
Note by the Pythagorean theorem we have $a^2 + b^2 = c^2$. Also note that since $x = \cos\theta$ and $y = \sin\theta$, and $x$ is equal to the distance from the origin in the $x$-direction and the same for $y$ with the $y$-direction, then $\sin\theta = b$ and $\cos\theta = a$ for the right triangle in the unit circle. And since the hypotenuse is $c = 1$, by the Pythagorean theorem we have
$$a = \cos\theta,\ b = \sin\theta,\ c = 1 \implies \cos^2\theta + \sin^2\theta = 1^2 \implies \cos^2\theta + \sin^2\theta = 1. \qquad\square$$
:::
:::

:::problem
Ranges of sine, tangent and secant.

:::solution
(a) $\operatorname{ran}(f)$ where $f(t) = \sin t$ is $[-1, 1]$.

(b) $\operatorname{ran}(g)$ with $g(t) = \tan t$ is $(-\infty, \infty)$.

(c) $\operatorname{ran}(h)$ with $h(t) = \sec t$ is $(-\infty, -1] \cup [1, \infty)$.
:::
:::

## Radians

![Upper half of the unit circle with rays at pi/6, pi/4, pi/3 and pi/2; the arc AB has length pi and the diameter AB has length 2](/notes/integrated-maths/figures/p1-radian-circle.svg)

:::note
An angle $\angle$ in degrees is $r$ radians, where
$$\frac{\angle}{360^\circ}\,(2\pi) = r \iff \frac{\angle}{180^\circ}\,\pi = r, \qquad \frac{2\pi}{360^\circ} = 1.$$
:::

:::problem
$60^\circ$, $288^\circ$, $-315^\circ$ and $1400^\circ$ in radians.

:::solution
$$60^\circ = \frac{\pi}{3},\qquad 288^\circ = \frac{8\pi}{5},\qquad -315^\circ = -\frac{7\pi}{4},\qquad 1400^\circ = \frac{70\pi}{9}.$$
:::
:::

:::problem
$\frac{2\pi}{5}$, $-\frac{7\pi}{3}$, $\frac{4\pi}{3}$ and $1$ radian in degrees.

:::solution
$$\frac{2\pi}{5} = 72^\circ,\qquad -\frac{7\pi}{3} = -420^\circ,\qquad \frac{4\pi}{3} = 240^\circ,\qquad 1 = \frac{180^\circ}{\pi}.$$
:::
:::

:::problem
Trigonometric functions of angles in radians.

:::solution
$$\begin{aligned}
\cos\frac{2\pi}{3} &= \cos 120^\circ = -\frac12,\\
\sin\frac{7\pi}{3} &= \frac{\sqrt3}{2},\\
\tan(-11\pi) &= 0,\\
\sec\frac{3\pi}{4} &= -\sec 45^\circ = -\frac{2\sqrt2}{2} = -\sqrt2.
\end{aligned}$$
:::
:::

:::problem
:::solution
Negative.
:::
:::

:::problem
The domain of $f(x) = 3\tan\left(2x - \frac{\pi}{3}\right)$.

:::solution
$$x \in \RR \setminus \left\{\frac{5\pi}{12} + \frac{\pi n}{2} : n \in \ZZ\right\}.$$

:::
:::

## Graphing trigonometric functions

:::problem
$y = \sin x$ for $0 \le x \le 2\pi$.

:::solution
![Graph of y = sin x on [0, 2pi] with maximum 1 at pi/2 and minimum -1 at 3pi/2](/notes/integrated-maths/figures/p1-sine-graph.svg)
:::
:::

We show that $g(x) = \sin x$ is periodic.

:::definition
A function $f$ is **periodic** if there exists $c \neq 0$ such that $f(x) = f(x + c)$ for all $x$ such that $f(x)$ and $f(x + c)$ are defined.
:::

:::proof
Let $c = 2\pi$. Note that $\sin(x + 2\pi) = \sin(x + 360^\circ)$, and since $360^\circ = 0^\circ$ (as angles), $\sin(x + 360^\circ) = \sin(x + 0^\circ) = \sin x$ for all $x$. The same follows for all trigonometric functions: period of $2\pi$.

:::

Graph of $\sin\left(x - \frac{\pi}{2}\right)$, with $\sin x$ dotted:

![Graph of y = sin(x - pi/2), which has minimum -1 at x = 0, over a dashed graph of y = sin x](/notes/integrated-maths/figures/p1-sine-shift.svg)

## Exercises

### Sinusoids

:::exercise
Evaluate $y = -2\sin\left(3x - \frac{\pi}{4}\right)$ at $x = 0$, $x = \frac{\pi}{2}$ and $x = \frac{\pi}{4}$.

:::solution
$$x = 0 \mapsto \sqrt2,\qquad x = \frac{\pi}{2} \mapsto \sqrt2,\qquad x = \frac{\pi}{4} \mapsto -2.$$
:::
:::

### Trigonometric equations

:::note
Rule of note: when arc… $= \pm1$ (it is at a peak), it will only have one solution (per period).
:::

:::exercise
Solve $6\sin(20x) + 1 = 1$.

:::solution
$$6\sin 20x = 0 \implies \sin 20x = 0.$$
Since $\sin\theta = \sin(\pi - \theta)$, there are two families:
$$20x = 0 + 2\pi n \qquad\text{and}\qquad 20x = \pi + 2\pi n.$$
:::
:::

:::exercise
Solve $\sin(3x) = -1$.

:::solution
$$3x = \arcsin(-1) = -\frac{\pi}{2} + 2\pi n = -90^\circ + 360^\circ n \implies x = -\frac{90^\circ}{3} + \frac{360^\circ n}{3} = -30^\circ + 120^\circ n.$$

:::
:::

:::exercise
Solve $5\cos(6x) + 6 = 9$.

:::solution
$$\cos 6x = \frac35 \implies 6x \approx \pm 53.13^\circ + 360^\circ n \implies x \approx \pm 8.855^\circ + 60^\circ n.$$

:::
:::

:::exercise
Solve $\cos(5x) = 0$.

:::solution
$$5x = \frac{\pi}{2} \to 5x = \pm\frac{\pi}{2} + 2\pi n \implies x = \frac{\pm\frac{\pi}{2} + 2\pi n}{5} = \pm\frac{\pi}{10} + \frac{2\pi}{5}n.$$
:::
:::

:::exercise
Solve $P(t) = -5\cos(2\pi t) + 5 = 3.5$ cm.

:::solution
$$\frac{3}{10} = \cos(2\pi t) \implies 2\pi t = \arccos\left(\frac{3}{10}\right) \approx 1.266.$$
:::
:::
