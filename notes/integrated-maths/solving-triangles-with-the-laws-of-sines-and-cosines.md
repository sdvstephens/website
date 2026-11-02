---
course: integrated-maths
chapter: 15
section: 15.6
title: Solving Triangles with the Laws of Sines and Cosines
---

The law of cosines and the law of sines find the missing sides and angles of a triangle from the ones we know.

## The law of cosines

:::theorem Law of cosines
$$a^2 = b^2 + c^2 - 2bc\cos\theta,$$
where $\theta$ is the angle between sides $b$ and $c$, opposite side $a$ (for example, sides $12$ and $9$ with $\theta = 87^\circ$ between them).
:::

## Solving right triangles

:::example
(a) In $\triangle ABC$, we have $\angle ABC = 90^\circ$, $AC = 6$, and $\angle BAC = 24^\circ$. Find $BC$ and $AB$.

:::solution
![Right triangle ABC, right angle at B, hypotenuse b = 6, angles 24° at A and 66° at C](/notes/integrated-maths/figures/p2-right-triangle-abc.svg)

$BC = a$ and $AB = c$. Angle, side, angle:
$$\theta = 180^\circ - 90^\circ - 24^\circ = 66^\circ.$$
$$\frac{\sin(90^\circ)}{6} = \frac{\sin(24^\circ)}{a} = \frac{\sin(\theta)}{c} = \frac{\sin(66^\circ)}{c}$$
$\Rightarrow a \approx 2.44$ and $c \approx 5.48$.
:::

(b) In $\triangle PQR$, $PQ = 7$, $QR = 24$, and $\angle PQR = 90^\circ$. Find $\angle QPR$.

:::solution
![Right triangle PQR, right angle at Q, legs 7 and 24, hypotenuse 25, angle alpha at P and beta at R](/notes/integrated-maths/figures/p2-right-triangle-pqr.svg)

$24^2 + 7^2 = 576 + 49 = 625 = 25^2$, so $PR = q = 25$.
$$\frac{\sin(90^\circ)}{25} = \frac{\sin\alpha}{24} \Rightarrow \sin\alpha = \frac{24\sin(90^\circ)}{25} = \frac{24}{25} = 0.96,$$
$$\alpha = \arcsin\left(\frac{24}{25}\right) \approx 73.74^\circ.$$
Then $180^\circ - 73.74^\circ \approx 106^\circ$, and $106^\circ - 90^\circ \approx 16^\circ$ is $\beta$.
:::
:::

## Exercises

### The law of cosines

:::exercise
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

:::exercise
$a^2 = 16^2 + 5^2 - 2(16)(5)\cos\theta$.
:::

### The law of sines

:::exercise
A triangle has angles $45^\circ$, $60^\circ$ and $75^\circ$, with side $900$ opposite the $45^\circ$ angle. Find the side $x$ opposite $75^\circ$.

:::solution
$$\frac{\sin 75^\circ}{x} = \frac{\sin 45^\circ}{900} \implies x = \frac{900\sin 75^\circ}{\sin 45^\circ} = \frac{900\cdot\frac{\sqrt2 + \sqrt6}{4}}{\frac{\sqrt2}{2}} = \frac{900\sqrt2 + 900\sqrt6}{4}\cdot\frac{2\sqrt2}{2} = \frac{900(2)(2) + 900(2)\sqrt{6\cdot 2}}{8},$$
with $\sqrt{6\cdot 2} = 2\sqrt3$.
:::
:::

:::exercise
Find $x$ if $\dfrac{\sin 30^\circ}{48} = \dfrac{\sin x}{95}$.

:::solution
$$\frac{95\left(\frac12\right)}{48} = \frac{95}{96} = \sin x \implies x = \arcsin\left(\frac{95}{96}\right).$$
A sketch of the sine curve meets the height $\frac{95}{96}$ twice: both angles work.
:::
:::

:::exercise
Find $\theta$ if $\dfrac{\sin 90^\circ}{5} = \dfrac{\sin\theta}{3}$.

:::solution

$$\frac{\sin 90^\circ}{5} = \frac{\sin\theta}{3} \implies \frac35 = \sin\theta \implies \theta \approx 36.87^\circ.$$

:::
:::
