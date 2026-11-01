---
course: integrated-maths
chapter: 12
section: 2a
title: Practice: Trigonometric Equations and Triangles
source-pages: 5-12
---

## Sinusoids and algebra

For $y = -2\sin\left(3x - \frac{\pi}{4}\right)$:
$$x = 0 \mapsto \sqrt2,\qquad x = \frac{\pi}{2} \mapsto \sqrt2,\qquad x = \frac{\pi}{4} \mapsto -2.$$

:::example
Solve $3x^2 + x - 7 = 2x^2 + 6x - 13$.

:::solution
$$x^2 - 5x + 6 = 0 \implies (x - 3)(x - 2) = 0 \implies x = 3,\ x = 2.$$
Then $3(3)^2 + 3 - 7 = 27 - 7 + 3 = 23$ and $3(2)^2 + 2 - 7 = 7$, giving the points $(3, 23)$ and $(2, 7)$. Check: $2(3)^2 + 6(3) - 13 = 18 + 5 = 23$ and $2(2)^2 + 6(2) - 13 = 8 + 12 - 13 = 7$.
:::
:::

:::example
Solve $\sqrt{x+3} + \dfrac{3}{\sqrt{x+3}} = 4$.

:::solution
$$\frac{\left(\sqrt{x+3}\right)^2}{\sqrt{x+3}} + \frac{3}{\sqrt{x+3}} = \frac{x + 3 + 3}{\sqrt{x+3}} = \frac{x+6}{\sqrt{x+3}}\cdot\frac{\sqrt{x+3}}{\sqrt{x+3}} = \frac{\sqrt{x+3}\,(x+6)}{x+3}.$$
Setting this equal to $4$ and squaring:
$$\left(\sqrt{x+3}\,(x+6)\right)^2 = (4x + 12)^2 \implies (x+3)(x+6)^2 = 16x^2 + 96x + 144 = 4(4x+12)(x+3).$$
Cancelling $x + 3$:
$$x^2 + 12x + 36 = 16x + 48 \implies x^2 - 4x - 12 = 0 \implies (x - 6)(x + 2) = 0,$$
so $x = 6$ or $x = -2$.
:::
:::

## Law of cosines

:::theorem Law of cosines
$$a^2 = b^2 + c^2 - 2bc\cos\theta,$$
where $\theta$ is the angle between sides $b$ and $c$, opposite side $a$ (for example, sides $12$ and $9$ with $\theta = 87^\circ$ between them).
:::

:::example
Find $\theta$ if $20^2 = 50^2 + 60^2 - 2(50)(60)\cos\theta$.

:::solution
$$\begin{aligned}
400 &= 2500 + 3600 - 6000\cos\theta\\
400 &= 6100 - 6000\cos\theta\\
-5700 &= -6000\cos\theta\\
0.95 &= \cos\theta \implies \theta \approx 18.19^\circ.
\end{aligned}$$
:::
:::

Next: $a^2 = 16^2 + 5^2 - 2(16)(5)\cos\theta$.

## Law of sines

:::example
A triangle has angles $45^\circ$, $60^\circ$ and $75^\circ$, with side $900$ opposite the $45^\circ$ angle. Find the side $x$ opposite $75^\circ$.

:::solution
$$\frac{\sin 75^\circ}{x} = \frac{\sin 45^\circ}{900} \implies x = \frac{900\sin 75^\circ}{\sin 45^\circ} = \frac{900\cdot\frac{\sqrt2 + \sqrt6}{4}}{\frac{\sqrt2}{2}} = \frac{900\sqrt2 + 900\sqrt6}{4}\cdot\frac{2\sqrt2}{2} = \frac{900(2)(2) + 900(2)\sqrt{6\cdot 2}}{8},$$
with $\sqrt{6\cdot 2} = 2\sqrt3$.
:::
:::

:::example
Find $x$ if $\dfrac{\sin 30^\circ}{48} = \dfrac{\sin x}{95}$.

:::solution
$$\frac{95\left(\frac12\right)}{48} = \frac{95}{96} = \sin x \implies x = \arcsin\left(\frac{95}{96}\right).$$
A sketch of the sine curve meets the height $\frac{95}{96}$ twice: both angles work.
:::
:::

$$\frac{\sin 90^\circ}{5} = \frac{\sin\theta}{3} \implies \frac35 = \sin\theta \implies \theta \approx 36.87^\circ.$$
Next: $\cos\left(2\arcsin\frac35\right)$.

## Solving trigonometric equations

:::note
Rule of note: when arc… $= \pm1$ (it is at a peak), it will only have one solution (per period).
:::

:::example
Solve $6\sin(20x) + 1 = 1$.

:::solution
$$6\sin 20x = 0 \implies \sin 20x = 0.$$
Since $\sin\theta = \sin(\pi - \theta)$, there are two families:
$$20x = 0 + 2\pi n \qquad\text{and}\qquad 20x = \pi + 2\pi n.$$
:::
:::

:::example
Solve $\sin(3x) = -1$.

:::solution
$$3x = \arcsin(-1) = -\frac{\pi}{2} + 2\pi n = -90^\circ + 360^\circ n \implies x = -\frac{90^\circ}{3} + \frac{360^\circ n}{3} = -30^\circ + 120^\circ n.$$

:::
:::

:::example
Solve $5\cos(6x) + 6 = 9$.

:::solution
$$\cos 6x = \frac35 \implies 6x \approx \pm 53.13^\circ + 360^\circ n \implies x \approx \pm 8.855^\circ + 60^\circ n.$$

:::
:::

:::example
Solve $\cos(5x) = 0$.

:::solution
$$5x = \frac{\pi}{2} \to 5x = \pm\frac{\pi}{2} + 2\pi n \implies x = \frac{\pm\frac{\pi}{2} + 2\pi n}{5} = \pm\frac{\pi}{10} + \frac{2\pi}{5}n.$$
:::
:::

:::example
Solve $P(t) = -5\cos(2\pi t) + 5 = 3.5$ cm.

:::solution
$$\frac{3}{10} = \cos(2\pi t) \implies 2\pi t = \arccos\left(\frac{3}{10}\right) \approx 1.266.$$
:::
:::

## Angle addition and double angles

:::theorem
$$\begin{aligned}
\sin(\alpha \pm \beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta,\\
\sin 2\theta &= 2\sin\theta\cos\theta = (\sin\theta + \cos\theta)^2 - 1,\\
\cos 2\theta &= \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta.
\end{aligned}$$
:::

With the values $\frac{6}{10}$ and $\frac{8}{10}$:
$$2\left(\frac{8}{10}\right)\left(\frac{6}{10}\right) = \frac{48}{50} = \frac{24}{25}, \qquad\text{and also}\qquad \left(\frac45 + \frac35\right)^2 - 1 = \frac{49}{25} - \frac{25}{25} = \frac{24}{25}.$$
$$\sin\theta\cos 60^\circ - \cos\theta\sin 60^\circ = \frac{6}{10}\left(\frac12\right) - \frac{8}{10}\left(\frac{\sqrt3}{2}\right) = \frac{3}{10} - \frac{4\sqrt3}{10} = \frac{3}{10} - \frac25\sqrt3,$$
$$\frac{8}{10}\left(\frac12\right) + \frac{\sqrt3}{2}\left(\frac{6}{10}\right) = \frac{8}{20} + \frac{6\sqrt3}{20} = \frac25 + \frac{3\sqrt3}{10}.$$

Since $\frac{19\pi}{12} = \frac43\pi + \frac14\pi$:
$$\sin\frac{19\pi}{12} = \sin\left(\frac43\pi\right)\cos\left(\frac{\pi}{4}\right) + \cos\left(\frac43\pi\right)\sin\left(\frac{\pi}{4}\right).$$
