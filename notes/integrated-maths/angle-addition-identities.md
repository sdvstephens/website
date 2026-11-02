---
course: integrated-maths
chapter: 15
section: 15.3
title: Angle Addition Identities
---

The identity for the sine of a sum is read off a triangle; the identities for the cosine and tangent of a sum, and for differences, follow from it and from the basic identities.

## Deriving the identities

:::problem
Given the following triangle with $AD = 1$, $\angle BCA = \alpha$, and $\angle DAE = \beta$:

![Right triangle ABC with right angle at B and angle alpha at C; D on BC with AD = 1; E the foot of the perpendicular from D to AC; angle DAE = beta](/notes/integrated-maths/figures/p1-angle-addition-triangle.svg)

(a) Why does $AE = \cos\beta$ and $DE = \sin\beta$?

(b) Find $EC$ in terms of $\alpha$ and $\beta$.

(c) Find $\angle ADB$ in terms of $\alpha$ and $\beta$.

(d) Show that $AB = \sin(\alpha + \beta)$ and $\sin\alpha = \frac{AB}{AC}$.

(e) Show that $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \sin\beta\cos\alpha$.

:::solution
(a) Since $\cos\beta = \frac{AE}{1} = AE$ and $\sin\beta = \frac{DE}{1} = DE$.

(b) In right triangle $DEC$,
$$\frac{DE}{DC} = \sin\alpha \implies \frac{\sin\beta}{DC} = \sin\alpha \implies DC = \frac{\sin\beta}{\sin\alpha},$$
and $\cos\alpha = \frac{EC}{DC}$, so
$$EC = \frac{\sin\beta}{\sin\alpha}\cdot\cos\alpha.$$

(c) $\angle ADB = 90^\circ - \angle BAD$. Also $90^\circ - \alpha = \angle BAE$ and $\angle BAE = \angle BAD + \beta$, so
$$\begin{aligned}
90^\circ - \alpha &= \angle BAD + \beta\\
90^\circ - \alpha &= 90^\circ - \angle ADB + \beta\\
\angle ADB &= \alpha + \beta.
\end{aligned}$$

(d) In right triangle $ABD$ (right angle at $B$, hypotenuse $AD = 1$, angle $\alpha + \beta$ at $D$),
$$\sin(\alpha + \beta) = \frac{AB}{1} = AB,$$
and $\sin\alpha = AB/AC$ since sine is opposite over hypotenuse (in triangle $ABC$).

(e) From (d), $\sin(\alpha + \beta) = AB = \sin\alpha\cdot AC$, and $AC - AE = EC$, so $AC = AE + EC$. We have $\cos\alpha\cdot DC = EC$, so $EC = \frac{\sin\beta}{\sin\alpha}\cos\alpha$, and $AE = \cos\beta$. Therefore
$$\sin(\alpha + \beta) = \sin\alpha\left(\frac{\sin\beta}{\sin\alpha}\cos\alpha + \cos\beta\right) \implies \sin(\alpha + \beta) = \sin\beta\cos\alpha + \sin\alpha\cos\beta.$$
:::
:::

:::problem
Use the newly found identity with previous ones to find $\sin(\alpha - \beta)$. Test your identity with $\alpha = 120^\circ$, $\beta = 60^\circ$.

:::solution
Just apply it as $\sin(\alpha + (-\beta))$, and at the end note $\cos(-\beta) = \cos\beta$ but $\sin(-\beta) = -\sin\beta$. So we have
$$\sin(\alpha - \beta) = \sin\alpha\cos\beta - \sin\beta\cos\alpha.$$
Let $\alpha = 120^\circ$, $\beta = 60^\circ$. Then $\sin 60^\circ = \frac{\sqrt3}{2} = \sin\frac{\pi}{3}$, and
$$\begin{aligned}
\sin\left(\tfrac{2\pi}{3}\right)\cos\left(\tfrac{\pi}{3}\right) - \sin\left(\tfrac{\pi}{3}\right)\cos\left(\tfrac{2\pi}{3}\right)
&= \frac{\sqrt3}{2}\left(\frac12\right) - \frac{\sqrt3}{2}\left(-\frac12\right)\\
&= \frac12\left(\frac{\sqrt3}{2} + \frac{\sqrt3}{2}\right) = \frac12\cdot\frac{2\sqrt3}{2} = \frac{\sqrt3}{2}.
\end{aligned}$$
$\therefore$ $\sin 60^\circ = \sin(120^\circ - 60^\circ) = \sin 120^\circ\cos 60^\circ - \sin 60^\circ\cos 120^\circ$.
:::
:::

:::problem
Previously we found $\sin\left(\frac{\pi}{2} - \theta\right) = \cos\theta$.

(a) Use $\sin\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha$ with the identity for $\sin(\alpha + \beta)$ to express $\cos(\alpha - \beta)$.

(b) Test your new identity with $\alpha = 120^\circ$, $\beta = 60^\circ$.

(c) Find an identity for $\cos(\alpha + \beta)$.

:::solution
(a)
$$\begin{aligned}
\cos(\alpha - \beta) &= \sin\left(\tfrac{\pi}{2} - (\alpha - \beta)\right) = \sin\left(\left(\tfrac{\pi}{2} - \alpha\right) + \beta\right)\\
&= \sin\left(\tfrac{\pi}{2} - \alpha\right)\cos\beta + \sin\beta\cos\left(\tfrac{\pi}{2} - \alpha\right)\\
\implies\ &\cos\alpha\cos\beta + \cos\left(\tfrac{\pi}{2} - \beta\right)\cos\left(\tfrac{\pi}{2} - \alpha\right)\\
\implies\ &\cos\alpha\cos\beta + \sin\beta\sin\alpha = \cos(\alpha - \beta).
\end{aligned}$$

(b)
$$\cos\left(\tfrac{2\pi}{3} - \tfrac{\pi}{3}\right) = \cos\left(\tfrac{\pi}{3}\right) = \frac12,$$
and
$$\cos\left(\tfrac{2\pi}{3}\right)\cos\left(\tfrac{\pi}{3}\right) + \sin\left(\tfrac{2\pi}{3}\right)\sin\left(\tfrac{\pi}{3}\right) = \left(-\frac12\right)\left(\frac12\right) + \frac{\sqrt3}{2}\left(\frac{\sqrt3}{2}\right) = -\frac14 + \frac34 = \frac24 = \frac12.$$

(c) We can undergo a similar process as in part (a):
$$\begin{aligned}
\cos(\alpha + \beta) &= \sin\left(\tfrac{\pi}{2} - (\alpha + \beta)\right) = \sin\left(\tfrac{\pi}{2} - \alpha - \beta\right)\\
&= \sin\left(\tfrac{\pi}{2} - \alpha\right)\cos\beta - \sin\beta\cos\left(\tfrac{\pi}{2} - \alpha\right)\\
\implies\ &= \cos\alpha\cos\beta - \sin\beta\sin\alpha = \cos(\alpha + \beta).
\end{aligned}$$
:::
:::

:::problem
Suppose that $\tan\alpha$, $\tan\beta$, $\tan(\alpha + \beta)$ are defined. Find $\tan(\alpha + \beta)$ in terms of $\tan\alpha$ and $\tan\beta$.

:::solution
$$\tan(\alpha + \beta) = \frac{\sin(\alpha + \beta)}{\cos(\alpha + \beta)} = \frac{\sin\alpha\cos\beta + \sin\beta\cos\alpha}{\cos\alpha\cos\beta - \sin\alpha\sin\beta}.$$
Since $\tan\theta = \frac{\sin\theta}{\cos\theta}$, we have $\sin\theta = \tan\theta\cos\theta$ (and $\frac{\sin\theta}{\tan\theta} = \cos\theta$), so this is
$$\frac{\tan\alpha\cos\alpha\cos\beta + \tan\beta\cos\beta\cos\alpha}{\cos\alpha\cos\beta - \tan\alpha\cos\alpha\tan\beta\cos\beta} = \frac{\cos\alpha\cos\beta\,(\tan\alpha + \tan\beta)}{\cos\alpha\cos\beta\,(1 - \tan\alpha\tan\beta)} = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}.$$

\* Requirements: $\tan\alpha\tan\beta \neq 1$; $\cos\alpha, \cos\beta \neq 0$; $\tan\alpha$, $\tan\beta$ defined.
:::
:::

## Using the identities

:::problem
(a) Find $\cos 15^\circ$. (b) Find $\sin\frac{13\pi}{12}$.

:::solution
(a)
$$\begin{aligned}
\cos 15^\circ = \cos\frac{\pi}{12} &= \cos\left(\frac{\pi}{3} - \frac{\pi}{4}\right) = \cos\left(\frac{\pi}{3}\right)\cos\left(\frac{\pi}{4}\right) + \sin\left(\frac{\pi}{3}\right)\sin\left(\frac{\pi}{4}\right)\\
&= \frac{\sqrt2}{4} + \frac{\sqrt2\sqrt3}{4} \to \frac{\sqrt2\left(1 + \sqrt3\right)}{4} = \frac{\sqrt2 + \sqrt6}{4}.
\end{aligned}$$

(b)
$$\sin\frac{13\pi}{12} = \sin\left(\frac{3\pi}{4} + \frac{\pi}{3}\right) = \frac{\sqrt2}{4} - \frac{\sqrt6}{4} = \frac{\sqrt2 - \sqrt6}{4}.$$
:::
:::

:::problem
Find the value of $\cos\left(\arcsin\frac45 + \arctan\frac{5}{12}\right)$.

:::solution
Let $\alpha = \arcsin\left(\frac45\right)$ and $\beta = \arctan\frac{5}{12}$, so we want
$$\cos\alpha\cos\beta - \sin\alpha\sin\beta \to \cos\alpha\cos\beta - \frac45\sin\beta = \cos\alpha\cos\beta - \frac{4\sin\beta}{5}.$$
Now $\sin\beta = \cos\beta\tan\beta = \cos\beta\left(\frac{5}{12}\right)$, so
$$\cos\alpha\cos\beta - \frac{4\cos\beta\left(\frac{5}{12}\right)}{5},\qquad \frac45\left(\frac{5}{12}\right)\cos\beta = \frac{\cos\beta}{3},$$
$$\cos\alpha\cos\beta - \frac{\cos\beta}{3} \to \frac{3\cos\alpha\cos\beta - \cos\beta}{3} \to \frac{\cos\beta\,(3\cos\alpha - 1)}{3}$$
$$\implies \frac{\cos\left(\arctan\frac{5}{12}\right)\left(3\cos\left(\sin^{-1}\frac45\right) - 1\right)}{3}.$$

Trying $\cos\beta = \frac{\sin\beta}{\tan\beta}$:
$$\frac{\sin\beta}{\tan\beta} \to \frac{12\sin\beta}{5} = \frac{12\cos\beta\tan\beta}{5} \to \frac{12(5)}{5(12)}\cos\beta.$$
Oops, back at the same spot.

Instead,
$$\cos\left(\tan^{-1}\tfrac{5}{12}\right) = \frac{1}{\sqrt{1 + \tan^2\beta}} = \frac{1}{\sqrt{1 + \frac{5^2}{12^2}}} = \frac{1}{\sqrt{\frac{12^2 + 5^2}{12^2}}} = \frac{1}{\frac{\sqrt{13^2}}{12}} = \frac{1}{\frac{13}{12}} \to \frac{12}{13}$$
(since $144 + 25 = 169$), taken as $\pm\frac{12}{13}$, giving
$$\frac{\pm\frac{12}{13}\left(3\cos\left(\sin^{-1}\frac45\right) - 1\right)}{3}.$$
And
$$\cos\left(\sin^{-1}\tfrac45\right) = \pm\sqrt{1 - \frac{4^2}{5^2}} \to \pm\sqrt{\frac{5^2}{5^2} - \frac{4^2}{5^2}} \to \pm\sqrt{\frac{9}{25}} \to \pm\frac35.$$
So
$$\frac{\pm\frac{12}{13}\left(3\left(\pm\frac35\right) - 1\right)}{3} \to \pm\frac{\frac{3^3\cdot 2^2}{13\cdot 5} \mp \frac{12}{13}}{3} = \pm\frac{3^3\cdot 2^2 \mp 60}{3\cdot 13\cdot 5} \to \pm\frac{3\left(3^2\cdot 2^2 \mp 20\right)}{3(13\cdot 5)} = \pm\frac{2^2 3^2 \mp 20}{65},$$
that is,
$$\pm\frac{36 + 20}{65} \to \pm\frac{56}{65}\qquad\text{or}\qquad \pm\frac{36 - 20}{65} \to \pm\frac{16}{65}.$$
The answer is $\dfrac{16}{65}$: since $\sin^{-1}\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ is its range and $\arctan$ has range $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, $\cos(\arcsin\theta) \ge 0$ for all $\theta$.
:::
:::

:::problem
Compute $x$ if $\tan^{-1}x + \tan^{-1}(1) = 2\left(\tan^{-1}x - \tan^{-1}\left(\frac13\right)\right)$.

:::solution
$$\tan^{-1}x + \tan^{-1}1 = 2\tan^{-1}x - 2\tan^{-1}\left(\tfrac13\right) \implies \arctan x = \frac{\pi}{4} + 2\arctan\frac13 \implies x = \tan\left(\frac{\pi}{4} + 2\arctan\frac13\right).$$
First,
$$\tan\left(2\arctan\tfrac13\right) = \frac{\tan\left(\arctan\frac13\right) + \tan\left(\arctan\frac13\right)}{1 - \tan\left(\arctan\frac13\right)\tan\left(\arctan\frac13\right)} = \frac{\frac13 + \frac13}{1 - \frac13\left(\frac13\right)} = \frac{\frac23}{\frac89} = \frac{2\cdot 9}{3\cdot 8} = \frac34.$$
Then
$$x = \frac{\tan\frac{\pi}{4} + \tan\left(2\arctan\frac13\right)}{1 - \tan\frac{\pi}{4}\,\tan\left(2\arctan\frac13\right)} = \frac{\frac44 + \frac34}{\frac44 - \frac34} = \frac74\cdot\frac41 = \boxed{7}.$$
:::
:::

## Exercises

:::exercise
(a) $\sin(\pi + \theta)$ (b) $\cos\left(\frac{\pi}{2} + \theta\right)$ (c) $\cos(3\pi - \theta)$ (d) $\tan\left(\theta + \frac{3\pi}{2}\right)$

:::solution
(a) $\sin(\pi + \theta) = -\sin\theta$

(b) $\cos\left(\frac{\pi}{2} + \theta\right) = -\sin\theta$

(c)
$$\cos(3\pi - \theta) = \underbrace{\cos 3\pi}_{-1}\cos\theta + \underbrace{\sin 3\pi}_{0}\sin\theta = -\cos\theta.$$

(d) $\tan\left(\theta + \frac{3\pi}{2}\right) = -\cot\theta$.

:::
:::

:::exercise
Show $\tan(\alpha - \beta) = \dfrac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}$.

:::solution
$$\tan(\alpha + (-\beta)) \to \frac{\tan\alpha + \tan(-\beta)}{1 - \tan\alpha\tan(-\beta)},$$
and since
$$\tan(-\beta) = \frac{\sin(-\beta)}{\cos(-\beta)} \to \frac{-\sin\beta}{\cos\beta} \to -\tan\beta,$$
we have
$$\frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}.$$
:::
:::

:::exercise
Compute $\tan 285^\circ$.

:::solution
$\tan 285^\circ \to \tan\left(\frac{19\pi}{12}\right)$, and with $\tan\pi = 0$,
$$\frac{\tan\pi + \tan\frac{7\pi}{12}}{1 - \tan\pi\,\tan\frac{7\pi}{12}} = \frac{\tan\frac{7\pi}{12}}{1}.$$
Then, with $\frac{3\pi}{12} = \frac{\pi}{4}$ and $\frac{4\pi}{12} = \frac{\pi}{3}$,
$$\tan\frac{7\pi}{12} \to \frac{\tan\frac{\pi}{4} + \tan\frac{\pi}{3}}{1 - \tan\frac{\pi}{4}\tan\frac{\pi}{3}} = \frac{1 + \sqrt3}{1 - \sqrt3} = \frac{\left(1 + \sqrt3\right)\left(1 - \sqrt3\right)}{\left(1 - \sqrt3\right)\left(1 - \sqrt3\right)} \to \frac{1 - 3}{1 - 2\sqrt3 + 3} = \frac{-2}{4 - 2\sqrt3}$$
$$= \frac{-1}{2 - \sqrt3} = \frac{-2 - \sqrt3}{4 - 3} = \boxed{-2 - \sqrt3}.$$
:::
:::

:::exercise
Expand $\sin\frac{19\pi}{12}$ with the angle addition identity.

:::solution

Since $\frac{19\pi}{12} = \frac43\pi + \frac14\pi$:
$$\sin\frac{19\pi}{12} = \sin\left(\frac43\pi\right)\cos\left(\frac{\pi}{4}\right) + \cos\left(\frac43\pi\right)\sin\left(\frac{\pi}{4}\right).$$

:::
:::

:::exercise
Prove that $\sin(\alpha - \beta)\sin(\alpha + \beta) = \sin^2\alpha - \sin^2\beta$.

:::solution
$$\begin{aligned}
&(\sin\alpha\cos\beta - \sin\beta\cos\alpha)(\sin\alpha\cos\beta + \sin\beta\cos\alpha)\\
\implies\ &\sin^2\alpha\cos^2\beta + \sin\alpha\sin\beta\cos\beta\cos\alpha - \sin\alpha\sin\beta\cos\beta\cos\alpha - \sin^2\beta\cos^2\alpha\\
&= \sin^2\alpha\cos^2\beta - \sin^2\beta\cos^2\alpha.
\end{aligned}$$
Since $\sin^2 + \cos^2 = 1$, $\cos^2 = 1 - \sin^2$:
$$\begin{aligned}
&\sin^2\alpha\left(1 - \sin^2\beta\right) - \sin^2\beta\left(1 - \sin^2\alpha\right)\\
&= \sin^2\alpha - \sin^2\alpha\sin^2\beta - \sin^2\beta + \sin^2\beta\sin^2\alpha\\
&= \sin^2\alpha - \sin^2\beta.
\end{aligned}$$
:::
:::

:::exercise
Find all acute angles $x$ such that $\sin 2x\sin 3x = \cos 2x\cos 3x$.

:::solution
$x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.
$$\sin 2x\sin 3x = \sin(x + x)\sin((x + x) + x) = 2\sin x\cos x\left(\sin(x + x)\cos x + \sin x\cos(x + x)\right)$$
$$= 2\sin x\cos x\left(\sin x\cos^2 x + \sin x\cos^2 x + \sin x\left(\cos^2 x - \sin^2 x\right)\right).$$
With $\cos^2 x = 1 - \sin^2 x$, $\cos^2 x - \sin^2 x = 1 - 2\sin^2 x$, so $\sin x\left(\cos^2 x - \sin^2 x\right) = \sin x - 2\sin^3 x$.

This doesn’t seem like the right path.
$$\begin{aligned}
\sin 2x\sin 3x &= \cos 2x\cos 3x\\
0 &= \cos 2x\cos 3x - \sin 2x\sin 3x\\
0 &= \cos(2x + 3x) = \cos(5x).
\end{aligned}$$
Find all $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ such that $\cos 5x = 0$:
$$\frac{\pi}{10},\qquad \frac{\pi}{10} + \frac{2\pi}{10} = \frac{3\pi}{10},\qquad \frac{3\pi}{10} + \frac{2\pi}{10} = \frac{\pi}{2}.$$
So between $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ we have $-\frac{3\pi}{10}, -\frac{\pi}{10}, \frac{\pi}{10}, \frac{3\pi}{10}$ as solutions for $\cos(5x) = 0$.

Wait, acute means $\left(0, \frac{\pi}{2}\right)$, so $\frac{\pi}{10}$ and $\frac{3\pi}{10}$ are the only solutions.
:::
:::

:::exercise
$\angle A$ and $\angle B$ are acute angles such that $\tan A + \tan B + \tan A\tan B = 1$. If $A - B = 41^\circ$, compute the measure of $\angle A$.

:::solution
$B = A - 41^\circ$, so
$$\tan A + \tan(A - 41^\circ) + \tan A\tan(A - 41^\circ) = 1$$
$$1 - \tan A\tan(A - 41^\circ) = \tan A + \tan(A - 41^\circ)$$
$$\cos(A + (A - 41^\circ)) = \sin(A + (A - 41^\circ))$$
$$\cos(2A - 41^\circ) = \sin(2A - 41^\circ)$$
$$1 = \frac{\sin(2A - 41^\circ)}{\cos(2A - 41^\circ)} = \tan(2A - 41^\circ).$$
Then $\arctan\tan(2A - 41^\circ) = \arctan(1)$:
$$2A - 41^\circ = 45^\circ \implies 2A = 86^\circ \implies \boxed{A = 43^\circ}.$$
:::
:::

:::exercise
Suppose that $\sin a + \sin b = \sqrt{5/3}$ and $\cos a + \cos b = 1$. What is $\cos(a - b)$?

:::solution
We want $\cos a\cos b + \sin a\sin b$. Squaring both givens,
$$(\sin a + \sin b)^2 = \frac53,\qquad (\cos a + \cos b)^2 = 1,$$
$$\sin^2 a + \sin^2 b + 2\sin a\sin b = \frac53,\qquad \cos^2 a + \cos^2 b + 2\cos a\cos b = 1.$$
Adding,
$$\sin^2 a + 2\sin a\sin b + \sin^2 b + \cos^2 a + 2\cos a\cos b + \cos^2 b = \frac53 + \frac33 = \frac83,$$
and pairing $\sin^2 a + \cos^2 a = 1$, $\sin^2 b + \cos^2 b = 1$:
$$2 + 2\sin a\sin b + 2\cos a\cos b = \frac83$$
$$2\left(1 + \sin a\sin b + \cos a\cos b\right) = \frac83$$
$$\frac86 = 1 + \cos(a - b)$$
$$\frac86 - \frac66 = \frac26 \to \boxed{\cos(a - b) = \frac26 = \frac13}.$$
:::
:::

:::exercise
(a) Let $\gamma = \frac{\pi}{2} - \alpha$ and $\phi = \frac{\pi}{2} - \beta$. Why must $\gamma$ and $\phi$ be acute?

(b) Write $\sin(\alpha + \beta)$ in terms of $\gamma$, $\phi$, $\pi$.

(c) Express $\sin(\gamma + \phi)$ in terms of $\alpha$, $\beta$. Why is it important here that $\gamma$, $\phi$ are acute?

:::solution
(a) If $\alpha < \frac{\pi}{2}$, the acuteness of $\gamma$ is trivial (and likewise $\beta < \frac{\pi}{2}$ for $\phi$).

(b) $\alpha = \frac{\pi}{2} - \gamma$ and $\beta = \frac{\pi}{2} - \phi$, so we have
$$\sin\left(\left(\tfrac{\pi}{2} - \gamma\right) + \left(\tfrac{\pi}{2} - \phi\right)\right) = \sin\left(\tfrac{\pi}{2} - \gamma\right)\cos\left(\tfrac{\pi}{2} - \phi\right) + \sin\left(\tfrac{\pi}{2} - \phi\right)\cos\left(\tfrac{\pi}{2} - \gamma\right),$$
but $\sin\left(\frac{\pi}{2} - \theta\right) = \cos\theta$ and $\cos\left(\frac{\pi}{2} - \theta\right) = \sin\theta$, so
$$\implies \sin(\alpha + \beta) = \cos\gamma\sin\phi + \cos\phi\sin\gamma.$$

(c)
$$\sin(\gamma + \phi) = \cos\alpha\sin\beta + \cos\beta\sin\alpha.$$
:::
:::
