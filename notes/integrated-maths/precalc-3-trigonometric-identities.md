---
course: integrated-maths
chapter: 12
section: 3
title: Trigonometric Identities
source-pages: 13-33, 34-59
---

:::theorem Most important trigonometric identities
- $\sin^2\theta + \cos^2\theta = 1$
- $\sin(-\theta) = -\sin\theta$ and $\cos\theta = \cos(-\theta)$
:::

## 3.1 Trigonometric Identities

:::problem{3.1}
(a) Write $\tan x + \sec x = \sqrt3$ in terms of $\sin$ and $\cos$.

(b) Solve for $\sin x$ in terms of $\cos x$.

(c) Use $\sin^2\theta + \cos^2\theta = 1$ to find $\cos x$.

(d) Find all $x$ with $0 \le x \le 2\pi$ that satisfy the equation.

:::solution
(a)
$$\frac{\sin x}{\cos x} + \frac{1}{\cos x} = \sqrt3.$$

(b)
$$\sin x = \left(\sqrt3 - \frac{1}{\cos x}\right)\cos x \implies \sin x = \sqrt3\cos x - 1.$$

(c)
$$\begin{aligned}
\sin x - \sqrt3\cos x = -1 &\implies (\sin x + 1)^2 = 3(1 - \sin^2 x)\\
&\implies \sin^2 x + 2\sin x + 1 = 3 - 3\sin^2 x \to 4\sin^2 x + 2\sin x + 1 = 3\\
&\implies 2(2\sin^2 x + \sin x) = 2 \implies 2\sin^2 x + \sin x = 1\\
&\implies 2\sin^2 x + \sin x - 1 = 0 \implies (\sin x + 1)(2\sin x - 1) = 0.
\end{aligned}$$
So
$$\sin x + 1 = 0 \to \sin x = -1 \to x = \frac{3\pi}{2} + 2\pi n,$$
$$2\sin x - 1 = 0 \to \sin x = \frac12 \to x = \frac{\pi}{6} + 2\pi n \ \text{ or }\ \frac{5\pi}{6} + 2\pi n.$$

(d) So $\frac{3\pi}{2}$, $\frac{\pi}{6}$, $\frac{5\pi}{6}$ are options. But wait! Since $\tan x = \frac{\sin x}{\cos x}$ and $\sec x = \frac{1}{\cos x}$, we need to plug into the original equation.

So for $\frac{3\pi}{2}$, $\cos x = 0$, $\therefore$ $\tan x$ and $\sec x$ are undefined. So we have an extraneous/bogus solution.

Next, $\frac{\pi}{6}$: $\sin\frac{\pi}{6} = \frac12$, $\cos\frac{\pi}{6} = \frac{\sqrt3}{2}$, $\sec x = \frac{2}{\sqrt3}$, so
$$\frac12\cdot\frac{2\sqrt3}{3} + \frac{2\sqrt3}{3} \to \frac{2\sqrt3 + 4\sqrt3}{6} \to \frac{6\sqrt3}{6} = \sqrt3.$$
So $\frac{\pi}{6}$ is a valid solution.

Finally, $\frac{5\pi}{6}$:
$$\frac12\cdot\frac{-2\sqrt3}{3} - \frac{2\sqrt3}{3} \to \frac{-6\sqrt3}{6} = -\sqrt3,$$
which is invalid! So our only solution is $\frac{\pi}{6}$.
:::
:::

:::problem{3.2}
Prove the identity $\tan^2 x + 1 = \sec^2 x$.

:::solution
$$\frac{\sin^2 x}{\cos^2 x} + 1 = \frac{1}{\cos^2 x} \to \sin^2 x = 1 - \cos^2 x \to \sin^2 x + \cos^2 x = 1,$$
which was our given identity. $\square$
:::
:::

:::problem{3.3}
Show that $\dfrac{(\csc x)(\sec x)}{1 + \tan^2 x} = \cot x$.

:::solution
By the previous problem we know $1 + \tan^2 x = \sec^2 x$, so
$$\frac{\csc x\sec x}{\sec^2 x} \to \frac{\csc x}{\sec x} = \frac{1/\sin x}{1/\cos x} = \frac{\cos x}{\sin x},$$
which is exactly the definition of $\cot x$.
:::
:::

:::problem{3.4}
Represent the following in terms of $\sin$, $\cos$, $\tan$ (and $\cot$ too).

(a) $\sin(90^\circ - \theta)$ (b) $\cos(90^\circ - \theta)$ (c) $\tan(90^\circ - \theta)$

:::solution
(a) $\sin(90^\circ - \theta) \to \sin\left(\frac{\pi}{2} - \theta\right)$, and
$$\sin\left(\frac{\pi}{2} - \theta\right) = \underbrace{\sin\frac{\pi}{2}}_{1}\cos\theta - \sin\theta\underbrace{\cos\frac{\pi}{2}}_{0} \to \cos\theta.$$
So $\sin(90^\circ - \theta) = \cos\theta$. For $\tan(90^\circ - \theta)$: undefined?

(b) $\cos(90^\circ - \theta) \to \cos\left(\frac{\pi}{2} - \theta\right) \to \cos\left(\frac{\pi}{2} - \theta\right) = \sin\theta$.

(c)
$$\tan(90^\circ - \theta) = \frac{\sin\left(\frac{\pi}{2} - \theta\right)}{\cos\left(\frac{\pi}{2} - \theta\right)} = \frac{\cos\theta}{\sin\theta} = \cot\theta.$$
So $\tan\left(\frac{\pi}{2} - \theta\right) = \cot\theta$.
:::
:::

:::problem{3.5}
Continue.

:::solution
(a) $\cos\left(\frac{\pi}{2} + \theta\right) = -\sin\theta$

(b) $\sin(\pi - \theta) = \sin\theta$

(c) $\tan(\pi + \theta) = \tan\theta$

(d) $\cos\left(\theta - \frac{3\pi}{2}\right) = -\sin\theta$

So $\sin(180^\circ - \theta) = \sin\theta$ and $\cos(180^\circ - \theta) = -\cos\theta$.
:::
:::

:::problem{3.6}
Find the smallest possible angle such that $\sin 2\theta = \cos 3\theta$.

:::solution
Well,
$$\sin 2\theta = 2\sin\theta\cos\theta = (\sin\theta + \cos\theta)^2 - 1 = \frac{2\tan\theta}{1 + \tan^2\theta}.$$
Also $\cos 3\theta = \sin\left(\frac{\pi}{2} - 3\theta\right)$, so $\sin 2\theta = \sin\left(\frac{\pi}{2} - 3\theta\right)$:
$$2\theta = \frac{\pi}{2} - 3\theta,\qquad 5\theta = \frac{\pi}{2} \to \theta = \frac{\pi}{10} = 18^\circ.$$
:::
:::

### Exercises

:::exercise{3.1.1}
Prove $\cot^2\theta + 1 = \csc^2\theta$.

:::solution
$$\frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta} - 1 \to \cos^2\theta + \sin^2\theta = 1.$$
:::
:::

:::exercise{3.1.2}
Prove that $\sin(360^\circ - \theta) = -\sin\theta$.

:::solution
Since $360^\circ = 2\pi$ and $2\pi n \cong 0$, we have $\sin(360^\circ - \theta) = \sin(-\theta) = -\sin\theta$.
:::
:::

:::exercise{3.1.3}
Use what you proved in Problem 3.2 to solve Problem 3.1 without converting into sines and cosines.

:::solution
So we have $\tan x + \sec x = \sqrt3$ and $\tan^2 x + 1 = \sec^2 x$. Squaring the first,
$$\begin{aligned}
&\tan^2 x + 2\tan x\sec x + \sec^2 x = 3\\
&\tan^2 x + 1 + \tan^2 x + 2\tan x\sec x = 3\\
\implies\ &2\tan^2 x + 2\tan x\sec x = 2\\
&\tan^2 x + \tan x\sec x = 1\\
\implies\ &\tan^2 x + \tan x\sec x - 1 = 0.
\end{aligned}$$
Now $\sec x = \sqrt3 - \tan x$, so
$$\begin{aligned}
\tan^2 x + \tan x\left(\sqrt3 - \tan x\right) - 1 &= 0\\
\tan^2 x - \tan^2 x + \sqrt3\tan x - 1 &= 0\\
\sqrt3\tan x - 1 &= 0,
\end{aligned}$$
so $\tan x = \frac{1}{\sqrt3}$.

*(In red:)* idk where I’m going wrong, I’m tired.
:::
:::

:::exercise{3.1.4}
Find $\cos\left(\frac{3\pi}{2} + \theta\right)$ in terms of $\sin$ or $\cos$.

:::solution
$$\cos\left(\frac{3\pi}{2} + \theta\right) = \cos\frac{3\pi}{2}\cos\theta - \sin\frac{3\pi}{2}\sin\theta \to \sin\theta.$$
:::
:::

:::exercise{3.1.5}
Find the value of the product
$$\tan\left(\frac{\pi}{12}\right)\tan\left(\frac{2\pi}{12}\right)\tan\left(\frac{3\pi}{12}\right)\tan\left(\frac{4\pi}{12}\right)\tan\left(\frac{5\pi}{12}\right).$$

:::solution
The middle three are
$$\tan\frac{2\pi}{12} = \tan\frac{\pi}{6} = \frac{\sqrt3}{3},\qquad \tan\frac{3\pi}{12} = \tan\frac{\pi}{4} = 1,\qquad \tan\frac{4\pi}{12} = \tan\frac{\pi}{3} = \sqrt3,$$
and the outer two, $\tan\left(\frac{\pi}{12}\right)\tan\left(\frac{5\pi}{12}\right)$, cancel out. Maybe a better way than brute force computation:
$$\frac{6\pi}{12} - \frac{\pi}{12} = \frac{5\pi}{12},\quad\text{so}\quad \cot\frac{5\pi}{12}\,\tan\frac{5\pi}{12}.$$
Ah, so they cancel out since
$$\tan\left(\frac{\pi}{12}\right) = \tan\left(\frac{\pi}{2} - \frac{5\pi}{12}\right) = \cot\left(\frac{5\pi}{12}\right)$$
by the $\tan\left(\frac{\pi}{2} - \theta\right) = \cot\theta$ identity. So do $\frac{2\pi}{12}$ and $\frac{4\pi}{12}$, and $\frac{3\pi}{12} \to \frac{\pi}{4}$, which has $\tan$ of $1$. TLDR: the product is $1$.
:::
:::

:::exercise{3.1.6}
Find the range of
$$f(A) = \frac{\sin A\left(3\cos^2 A + \cos^4 A + 3\sin^2 A + \sin^2 A\cos^2 A\right)}{\tan A\left(\sec A - \sin A\tan A\right)},$$
where $A$ is **not** an integer multiple of $\frac{\pi}{2}$.

:::solution
Since $\tan A = \frac{\sin A}{\cos A}$, the $\sin A$ cancels:
$$\frac{\sin A(\cdots)}{\frac{\sin A}{\cos A}(\cdots)} \to \frac{\cos A\left(3\cos^2 A + \cos^4 A + 3\sin^2 A + \sin^2 A\cos^2 A\right)}{\sec A - \sin A\tan A}, \qquad \sec A - \sin A\tan A \neq 0.$$
Multiplying through by $\cos A$:
$$\frac{\cos^2 A(\cdots)}{1 - \sin A\tan A\cos A} = \frac{\cos^2 A(\cdots)}{1 - \sin^2 A}.$$

A detour, writing everything with $\sin\left(\frac{\pi}{2} - A\right) = \cos A$:
$$\sin\left(\tfrac{\pi}{2} - A\right)\left(3\sin^2\left(\tfrac{\pi}{2} - A\right) + \sin^4\left(\tfrac{\pi}{2} - A\right) + 3\sin^2 A + \sin^2 A - \sin^4\left(\tfrac{\pi}{2} - A\right)\right)$$
$$= \sin\left(\tfrac{\pi}{2} - A\right)\left(3\sin^2\left(\tfrac{\pi}{2} - A\right) + 4\sin^2 A\right),$$
which didn’t lead anywhere.

Back to the bracket:
$$\begin{aligned}
&\cos A\left(3\cos^2 A + \cos^4 A + 3\sin^2 A + \sin^2 A\cos^2 A\right)\\
&= \cos A\left(\left(3\cos^2 A + 3\sin^2 A\right) + \cos^4 A + \sin^2 A\cos^2 A\right).
\end{aligned}$$
Here $\cos^4 A + (1 - \cos^2 A)\cos^2 A = \cos^4 A - \cos^4 A + \cos^2 A = \cos^2 A$ and $3(\cos^2 A + \sin^2 A) = 3$, so this is
$$\cos A\left(3 + \cos^2 A\right), \qquad\text{and}\qquad 3 + \cos^2 A \in (3, 4)?$$
Not sure, seems premature to say.

:::
:::

## 3.2 Angle Addition Identities

### Problems

:::problem{3.7}
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

:::problem{3.8}
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

:::problem{3.9}
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

:::problem{3.10}
Suppose that $\tan\alpha$, $\tan\beta$, $\tan(\alpha + \beta)$ are defined. Find $\tan(\alpha + \beta)$ in terms of $\tan\alpha$ and $\tan\beta$.

:::solution
$$\tan(\alpha + \beta) = \frac{\sin(\alpha + \beta)}{\cos(\alpha + \beta)} = \frac{\sin\alpha\cos\beta + \sin\beta\cos\alpha}{\cos\alpha\cos\beta - \sin\alpha\sin\beta}.$$
Since $\tan\theta = \frac{\sin\theta}{\cos\theta}$, we have $\sin\theta = \tan\theta\cos\theta$ (and $\frac{\sin\theta}{\tan\theta} = \cos\theta$), so this is
$$\frac{\tan\alpha\cos\alpha\cos\beta + \tan\beta\cos\beta\cos\alpha}{\cos\alpha\cos\beta - \tan\alpha\cos\alpha\tan\beta\cos\beta} = \frac{\cos\alpha\cos\beta\,(\tan\alpha + \tan\beta)}{\cos\alpha\cos\beta\,(1 - \tan\alpha\tan\beta)} = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}.$$

\* Requirements: $\tan\alpha\tan\beta \neq 1$; $\cos\alpha, \cos\beta \neq 0$; $\tan\alpha$, $\tan\beta$ defined.
:::
:::

:::problem{3.11}
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

:::problem{3.12}
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

:::problem{3.14}
Compute $x$ if $\tan^{-1}x + \tan^{-1}(1) = 2\left(\tan^{-1}x - \tan^{-1}\left(\frac13\right)\right)$.

:::solution
$$\tan^{-1}x + \tan^{-1}1 = 2\tan^{-1}x - 2\tan^{-1}\left(\tfrac13\right) \implies \arctan x = \frac{\pi}{4} + 2\arctan\frac13 \implies x = \tan\left(\frac{\pi}{4} + 2\arctan\frac13\right).$$
First,
$$\tan\left(2\arctan\tfrac13\right) = \frac{\tan\left(\arctan\frac13\right) + \tan\left(\arctan\frac13\right)}{1 - \tan\left(\arctan\frac13\right)\tan\left(\arctan\frac13\right)} = \frac{\frac13 + \frac13}{1 - \frac13\left(\frac13\right)} = \frac{\frac23}{\frac89} = \frac{2\cdot 9}{3\cdot 8} = \frac34.$$
Then
$$x = \frac{\tan\frac{\pi}{4} + \tan\left(2\arctan\frac13\right)}{1 - \tan\frac{\pi}{4}\,\tan\left(2\arctan\frac13\right)} = \frac{\frac44 + \frac34}{\frac44 - \frac34} = \frac74\cdot\frac41 = \boxed{7}.$$
:::
:::

### Exercises

:::exercise{3.2.1}
(a) $\sin(\pi + \theta)$ (b) $\cos\left(\frac{\pi}{2} + \theta\right)$ (c) $\cos(3\pi - \theta)$ (d) $\tan\left(\theta + \frac{3\pi}{2}\right)$

:::solution
(a) $\sin(\pi + \theta) = -\sin\theta$

(b) $\cos\left(\frac{\pi}{2} + \theta\right) = -\sin\theta$

(c)
$$\cos(3\pi - \theta) = \underbrace{\cos 3\pi}_{-1}\cos\theta + \underbrace{\sin 3\pi}_{0}\sin\theta = -\cos\theta.$$

(d) $\tan\left(\theta + \frac{3\pi}{2}\right) = -\cot\theta$.

:::
:::

:::exercise{3.2.2}
Show $\tan(\alpha - \beta) = \dfrac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}$.

:::solution
$$\tan(\alpha + (-\beta)) \to \frac{\tan\alpha + \tan(-\beta)}{1 - \tan\alpha\tan(-\beta)},$$
and since
$$\tan(-\beta) = \frac{\sin(-\beta)}{\cos(-\beta)} \to \frac{-\sin\beta}{\cos\beta} \to -\tan\beta,$$
we have
$$\frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}.$$
:::
:::

:::exercise{3.2.3}
Compute $\tan 285^\circ$.

:::solution
$\tan 285^\circ \to \tan\left(\frac{19\pi}{12}\right)$, and with $\tan\pi = 0$,
$$\frac{\tan\pi + \tan\frac{7\pi}{12}}{1 - \tan\pi\,\tan\frac{7\pi}{12}} = \frac{\tan\frac{7\pi}{12}}{1}.$$
Then, with $\frac{3\pi}{12} = \frac{\pi}{4}$ and $\frac{4\pi}{12} = \frac{\pi}{3}$,
$$\tan\frac{7\pi}{12} \to \frac{\tan\frac{\pi}{4} + \tan\frac{\pi}{3}}{1 - \tan\frac{\pi}{4}\tan\frac{\pi}{3}} = \frac{1 + \sqrt3}{1 - \sqrt3} = \frac{\left(1 + \sqrt3\right)\left(1 - \sqrt3\right)}{\left(1 - \sqrt3\right)\left(1 - \sqrt3\right)} \to \frac{1 - 3}{1 - 2\sqrt3 + 3} = \frac{-2}{4 - 2\sqrt3}$$
$$= \frac{-1}{2 - \sqrt3} = \frac{-2 - \sqrt3}{4 - 3} = \boxed{-2 - \sqrt3}.$$
:::
:::

:::exercise{3.2.4}
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

:::exercise{3.2.5}
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

:::exercise{3.2.6}
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

:::exercise{3.2.7}
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

:::exercise{3.2.8}
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

## Double and Half Angles

:::problem{3.15}
Find $\sin(2x)$ and $\cos(2x)$. Test your identities with $\sin 120^\circ$ and $\cos 120^\circ$.

:::solution
$$\sin 2x = \sin(x+x) = 2\sin x\cos x$$
and
$$\cos 2x = \cos(x+x) = \cos^2 x - \sin^2 x.$$
Testing with $120^\circ = 2(60^\circ)$: $\sin(120^\circ) = \frac{\sqrt3}{2}$ and
$$2\sin(60^\circ)\cos(60^\circ) = 2\cdot\frac{\sqrt3}{2}\left(\frac12\right) = \frac{\sqrt3}{2}.$$
For $\cos$: $\cos(120^\circ) = -\frac12$, and
$$\cos^2(60^\circ) - \sin^2(60^\circ) = \left(\frac12\right)^2 - \left(\frac{\sqrt3}{2}\right)^2 = \frac14 - \frac34 = -\frac24 = -\frac12.$$
:::
:::

:::problem{3.16}
Find $\tan 2x$ in terms of $x$.

:::solution
$$\tan 2x = \tan(x+x) = \frac{\tan x + \tan x}{1 - \tan^2 x} = \frac{2\tan x}{1 - \tan^2 x}.$$
:::
:::

:::problem{3.17}
Use Problem 3.15 with $\cos^2 x + \sin^2 x = 1$ to find $\cos\left(\frac x2\right)$ and $\sin\left(\frac x2\right)$ in terms of $\cos x$. Test with $x = 240^\circ$.

:::solution
From $\sin 2\theta = 2\sin\theta\cos\theta$ we get $\sin x = 2\sin\frac x2\cos\frac x2$. And
$$\cos 2\theta = \cos^2\theta - \sin^2\theta = \cos^2\theta - 1 + \cos^2\theta = 2\cos^2\theta - 1 \implies \cos x = 2\cos^2\left(\frac x2\right) - 1,$$
so
$$\cos^2\frac x2 = \frac{1+\cos x}{2} \implies \cos\frac x2 = \pm\sqrt{\frac{1+\cos x}{2}}.$$
If $\frac x2$ is an angle in quadrant I, it is positive; for cosine we can say it is negative (by “it” I mean our $\pm$) iff $\frac x2$ is in quadrant II or III.
So
$$\cos\frac{240^\circ}{2} = \cos 120^\circ = -\frac12$$
OR
$$\cos\left(\frac{240^\circ}{2}\right) = -\sqrt{\frac{1 + \left(-\frac12\right)}{2}} = -\sqrt{\frac14} = -\frac{1}{\sqrt4} = -\frac12.$$
Using $\sin\frac x2 = \pm\sqrt{\frac{1-\cos x}{2}}$ we get similar ($\sin 120^\circ = \frac{\sqrt3}{2}$).
:::
:::

:::problem{3.18}
$$\cos(15^\circ) = \cos\left(\frac{\pi/6}{2}\right) = \sqrt{\frac{1 + \frac{\sqrt3}{2}}{2}} = \sqrt{\frac{\frac{\sqrt3+2}{2}}{2}} = \sqrt{\frac{\sqrt3+2}{4}}$$
$\to$ it’s weird.
:::

:::problem{3.19}
Show that $\tan\frac x2 = \dfrac{\sin x}{1+\cos x} = \dfrac{1-\cos x}{\sin x}$.

:::solution
Well,
$$\tan\left(\frac x2\right) = \frac{\sin\left(\frac x2\right)}{\cos\left(\frac x2\right)} = \frac{\sqrt{1-\cos x}}{\sqrt{1+\cos x}} = \pm\frac{\sqrt{1-\cos^2 x}}{1+\cos x} = \pm\frac{\sqrt{\sin^2 x}}{1+\cos x} = \pm\frac{\sin x}{1+\cos x}.$$
If instead
$$\frac{\sqrt{1-\cos x}\,\sqrt{1-\cos x}}{\sqrt{1+\cos x}\,\sqrt{1-\cos x}} = \frac{1-\cos x}{\sqrt{1-\cos^2 x}} = \pm\frac{1-\cos x}{\sin x}.$$
$\leftarrow$ idk why we drop $\pm$?
:::
:::

:::example
Prove that $\arctan 1 + \arctan 2 + \arctan 3 = \pi$ by using three well-chosen triangles on the Cartesian plane.

:::solution
![Three right triangles with vertices (0,1), (0,2), (2,2), (3,0) and the origin, whose angles at (0,1) fill a straight angle](/notes/integrated-maths/figures/p2-arctan-triangles.svg)
:::
:::

:::problem{3.20}
Compute the number of degrees in the smallest positive angle $x$ that satisfies the equation $8\sin x\cos^5 x - 8\sin^5 x\cos x = 1$.

:::solution
$x \in (0, 2\pi]$ (I think?).
$$8(\sin x\cos^5 x - \sin^5 x\cos x) = 1$$
Wait, no: pull out $8\sin x\cos x$. So
$$\begin{aligned}
8\sin x\cos x\,(\cos^4 x - \sin^4 x) &= 1\\
(\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x)\,8\sin x\cos x &= 1\\
(\cos^2 x - \sin^2 x)\,8\sin x\cos x &= 1,
\end{aligned}$$
and
$$\cos^2 x - (1 - \cos^2 x) = \cos^2 x - 1 + \cos^2 x = 2\cos^2 x - 1 = \cos(2x).$$
So
$$\cos(2x)\,8\sin x\cos x = 4\cos(2x)\sin(2x) = (\sin 4x)\,2,$$
and $2\sin 4x = 1 \to \sin 4x = \frac12 \to 4x = 30^\circ$, $2x = 15^\circ$, so $\boxed{x = 7.5^\circ}$.
:::
:::

:::problem{3.21}
Find $\cos(20^\circ)\cos(40^\circ)\cos(80^\circ)$.

:::solution
In radians this is $\cos\left(\frac\pi9\right)\cos\left(\frac{2\pi}9\right)\cos\left(\frac{4\pi}9\right)$, with
$$\cos\left(2\cdot\frac\pi9\right) = \cos^2\left(\frac\pi9\right) - \sin^2\left(\frac\pi9\right),$$
and $\frac\pi9 = \frac13\cdot\frac\pi3$.

Using $\cos 40^\circ = 2\cos^2 20^\circ - 1$ and $\cos 80^\circ = 2\cos^2 40^\circ - 1$:
$$\cos 20^\circ\,(2\cos^2 20^\circ - 1)(2\cos^2 40^\circ - 1).$$

Instead: $\cos 20^\circ = \dfrac{\sin 40^\circ}{2\sin 20^\circ}$, so $\cos 20^\circ\cos 40^\circ\cos 80^\circ = \dfrac18$.
:::
:::

### Exercises

:::problem{1}
$$\sin 22.5^\circ = \sin\left(\frac{45^\circ}{2}\right) = \sqrt{\frac{1 - \cos(45^\circ)}{2}} = \sqrt{\frac{1 - \frac{\sqrt2}{2}}{2}} = \sqrt{\frac{2-\sqrt2}{4}} = \boxed{\frac{\sqrt{2-\sqrt2}}{2}}$$

:::

:::problem{2}
If $\sin\theta = \frac14$, then what is $\cos 2\theta$?

:::solution
$$\cos 2\theta = \cos^2\theta - \sin^2\theta = 1 - 2\sin^2\theta = 1 - \frac{2}{16} = 1 - \frac18 = \boxed{\frac78}$$

:::
:::

:::problem{3}
Prove that $\sin 2x = \dfrac{2\tan x}{1+\tan^2 x}$ for all $x$ for which $\tan$ is defined.

:::solution
Multiply top and bottom by $\cos^2 x$:
$$\frac{2\tan x}{1+\tan^2 x} = \frac{2\,\frac{\sin x}{\cos x}}{1 + \frac{\sin^2 x}{\cos^2 x}} = \frac{2\sin x\cos x}{\cos^2 x + \sin^2 x} = \frac{2\sin x\cos x}{1} = \sin 2x. \qquad\square$$
:::
:::

:::problem{4}
Show that $\tan x + \cot x = 2\csc 2x$.

:::solution
$$\begin{aligned}
\frac{\sin x}{\cos x} + \frac{\cos x}{\sin x} &= 2\cdot\frac{1}{\sin(2x)}\\
\frac{\sin^2 x + \cos^2 x}{\cos x\sin x} &= \frac{2}{2\cos x\sin x}\\
\frac{1}{\cos x\sin x} &= \frac{1}{\cos x\sin x}. \qquad\square
\end{aligned}$$
:::
:::

:::problem{5}
If $-\frac\pi2 < A < \frac\pi2$ and $A \ne -\frac\pi4$, then prove that
$$\frac{\sin 2A - \cos 2A + 1}{\sin 2A + \cos 2A + 1} = \tan A.$$

:::solution
$$\begin{aligned}
&\frac{2\sin A\cos A - (\cos^2 A - \sin^2 A) + 1}{2\sin A\cos A + (\cos^2 A - \sin^2 A) + 1}\\
&= \frac{2\sin A\cos A - \cos^2 A + \sin^2 A + \sin^2 A + \cos^2 A}{2\sin A\cos A + \cos^2 A - \sin^2 A + \sin^2 A + \cos^2 A}\\
&= \frac{2\sin A\cos A + 2\sin^2 A}{2\sin A\cos A + 2\cos^2 A}\\
&= \frac{2\sin A\,(\cos A + \sin A)}{2\cos A\,(\sin A + \cos A)} = \tan A. \qquad\square
\end{aligned}$$
:::
:::

:::problem{6}
If $\sin 2\theta = \frac{21}{25}$ and $\cos\theta > \sin\theta$, then compute $\cos\theta - \sin\theta$.

:::solution
$\sin 2\theta = 2\sin\theta\cos\theta$, and
$$\cos^2\theta + \sin^2\theta - 2\sin\theta\cos\theta = 1 - 2\sin\theta\cos\theta = 1 - \frac{21}{25} = \frac{4}{25},$$
so
$$(\cos\theta - \sin\theta)^2 = \frac{4}{25}, \qquad \cos\theta - \sin\theta = \pm\sqrt{\frac{4}{25}}, \qquad \cos\theta - \sin\theta = +\boxed{\frac25}.$$
:::
:::

:::problem{7}
Solve the equation $\cos\theta + \sin\theta = \sqrt{\frac32}$ for $0 \le \theta \le 2\pi$.

:::solution
Squaring:
$$\cos^2\theta + \sin^2\theta + 2\sin\theta\cos\theta = \frac32 \quad\to\quad 1 + 2\cos\theta\sin\theta = \frac32,$$
so $2\cos\theta\sin\theta = \frac32 - \frac22 = \frac12$, that is,
$$\sin(2\theta) = \frac12 \to 2\theta = \frac\pi6 \to \theta = \frac{\pi}{12}.$$
Check:
$$\cos\left(\frac{\pi}{12}\right) + \sin\left(\frac{\pi}{12}\right) = \frac{\sqrt6+\sqrt2}{4} + \frac{\sqrt6-\sqrt2}{4} = \frac{2\sqrt6}{4} = \frac{\sqrt6}{2} = \sqrt{\frac32}.$$
$$\boxed{\theta = \frac{\pi}{12},\ \frac{5\pi}{12}}$$
:::
:::

:::problem{8}
(a) Prove that $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$.

:::solution
$$\begin{aligned}
\cos(\theta + (\theta+\theta)) &= \cos\theta\cos(2\theta) - \sin\theta\sin 2\theta\\
&= \cos\theta(\cos^2\theta - \sin^2\theta) - \sin\theta(2\sin\theta\cos\theta)\\
&= \cos^3\theta - \cos\theta\sin^2\theta - 2\sin^2\theta\cos\theta\\
&= \cos^3\theta - 3\sin^2\theta\cos\theta\\
&= \cos\theta(\cos^2\theta - 3\sin^2\theta)\\
&= \cos\theta\left(\cos^2\theta - 3(1 - \cos^2\theta)\right)\\
&= \cos\theta(4\cos^2\theta - 3) = \boxed{4\cos^3\theta - 3\cos\theta}
\end{aligned}$$
:::

(b) Do the same for $\sin 3\theta$.

:::solution
$$\begin{aligned}
\sin 3\theta &= \sin\theta\cos 2\theta + \sin 2\theta\cos\theta\\
&= \sin\theta(\cos^2\theta - \sin^2\theta) + \cos\theta(2\sin\theta\cos\theta)\\
&= \sin\theta\cos^2\theta - \sin^3\theta + 2\cos^2\theta\sin\theta\\
&= 3\cos^2\theta\sin\theta - \sin^3\theta = \sin\theta(3\cos^2\theta - \sin^2\theta)\\
\Rightarrow\ &\sin\theta\left(3(1 - \sin^2\theta) - \sin^2\theta\right) = \sin\theta(3 - 3\sin^2\theta - \sin^2\theta)\\
&= \boxed{3\sin\theta - 4\sin^3\theta}
\end{aligned}$$
:::

(c) Suppose $\dfrac{\cos 3x}{\cos x} = \dfrac13$ for some angle $x$, with $0 \le x \le \frac\pi2$. Determine $\dfrac{\sin 3x}{\sin x}$.

:::solution
$$4\cos^3\theta - 3\cos\theta = \frac{\cos\theta}{3}$$

$$\frac{4\cos^3\theta - 3\cos\theta}{\cos\theta} = \frac13 \quad\to\quad \frac{\cos\theta\,(4\cos^2\theta - 3)}{\cos\theta} = \frac13,$$
so
$$4\cos^2\theta - 3 = \frac13, \qquad 4\cos^2\theta = \frac13 + \frac93 = \frac{10}{3}, \qquad \cos^2\theta = \frac{10}{12}.$$

Let’s start again:
$$\frac{\cos 3x}{\cos x} = \frac13 \qquad\left(\hookrightarrow\ \frac{\cos^2 3x}{\cos^2 x} = \frac19,\quad \frac{\sin^2 3x}{\sin^2 x}\,?\right)$$
$$\frac{4\cos^3 x - 3\cos x}{\cos x} = \frac{\cos x\,(4\cos^2 x - 3)}{\cos x} = 4\cos^2 x - 3 = \frac13,$$
$$\frac{\sin 3x}{\sin x} = \frac{3\sin x - 4\sin^3 x}{\sin x} = \frac{\sin x\,(3 - 4\sin^2 x)}{\sin x} = 3 - 4\sin^2 x.$$
Using $\sin^2 x + \cos^2 x = 1$: $4\cos^2 x - 3 = 4(1 - \sin^2 x) - 3 = 4 - 4\sin^2 x - 3$ (and the other way round, $3 - 4\sin^2 x = 3 - 4 + 4\cos^2 x = 4\cos^2 x - 1$). So
$$\begin{aligned}
4 - 4\sin^2 x - 3 &= \frac13\\
1 - 4\sin^2 x = \frac13 \ \to\ \frac33 - \frac13 &= 4\sin^2 x\\
\frac23 &= 4\sin^2 x\\
\frac{2}{12} &= \sin^2 x\\
\frac{\sqrt2}{\sqrt{12}} = \frac{\sqrt2}{2\sqrt3} = \frac{2\sqrt6}{4\cdot 3} = \frac{2\sqrt6}{12} = \frac{\sqrt6}{6} &= \sin x,
\end{aligned}$$
so $x = \arcsin\left(\frac{\sqrt6}{6}\right)$, and
$$\frac{\sin 3x}{\sin x} = 3 - 4\sin^2 x = 3 - 4\left(\frac{\sqrt6}{6}\right)^2 = 3 - \frac{6}{36}(4) = 3 - \frac{24}{36} = 3 - \frac23 = -\frac23 + \frac93 = \boxed{\frac73}.$$
:::
:::

## Sum-to-Product and Product-to-Sum

:::problem{3.22}
(a) Express $\cos\alpha\cos\beta$ in terms of $\cos(\alpha+\beta)$ and $\cos(\alpha-\beta)$.

:::solution
$$\cos(\alpha+\beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta, \quad\text{so}\quad \cos\alpha\cos\beta = \cos(\alpha+\beta) + \sin\alpha\sin\beta.$$
$$\cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta, \quad\text{so}\quad \cos(\alpha-\beta) - \cos\alpha\cos\beta = \sin\alpha\sin\beta,$$
and
$$\cos\alpha\cos\beta = \cos(\alpha+\beta) + \cos(\alpha-\beta) - \cos\alpha\cos\beta.$$
That is,
$$\cos(\alpha+\beta) + \cos(\alpha-\beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta + \cos\alpha\cos\beta + \sin\alpha\sin\beta \to 2\cos\alpha\cos\beta,$$
$$\boxed{\cos\alpha\cos\beta = \frac{\cos(\alpha+\beta) + \cos(\alpha-\beta)}{2}}$$
:::

(b) Find a similar identity for $\sin\alpha\sin\beta$.

:::solution
$$\sin(\alpha+\beta) + \sin(\alpha-\beta) = \sin\alpha\cos\beta + \sin\beta\cos\alpha - \sin\beta\cos\alpha + \sin\alpha\cos\beta \to 2\sin\alpha\cos\beta.$$
And
$$-\cos(\alpha+\beta) + \cos(\alpha-\beta) = -\cos\alpha\cos\beta + \sin\alpha\sin\beta + \cos\alpha\cos\beta + \sin\alpha\sin\beta = 2\sin\alpha\sin\beta,$$
$$\boxed{\sin\alpha\sin\beta = \frac{\cos(\alpha-\beta) - \cos(\alpha+\beta)}{2}}$$
:::

(c) Find a $\sin\alpha\cos\beta$ identity, using $\cos(\alpha\pm\beta)$ too.

:::solution
From the computation of $\sin(\alpha+\beta) + \sin(\alpha-\beta)$ in (b):
$$\boxed{\sin\alpha\cos\beta = \frac12\bigl(\sin(\alpha+\beta) + \sin(\alpha-\beta)\bigr)}$$
:::
:::

:::problem{3.23}
Prove $(\cos 20^\circ)(\cos 40^\circ)(\cos 80^\circ) = \frac18$ using our new identities.

:::solution
$$\cos 20^\circ\cos 40^\circ = \frac{\cos(20^\circ + 40^\circ) + \cos(20^\circ - 40^\circ)}{2} = \frac{\cos\frac\pi3 + \cos\frac\pi9}{2}$$

$$\begin{aligned}
\left(\frac{\cos\frac\pi3 + \cos\frac\pi9}{2}\right)\cos\left(\frac{4\pi}{9}\right) &= \frac{\cos\frac\pi3\cos\frac{4\pi}9 + \cos\frac\pi9\cos\frac{4\pi}9}{2}\\
&\Rightarrow \frac{\frac{\cos\left(\frac{3\pi}9 + \frac{4\pi}9\right) + \cos\left(\frac{3\pi}9 - \frac{4\pi}9\right)}{2} + \cdots}{2}\\
&= \frac{\dfrac{\cos\left(\frac{7\pi}9\right) + \cos\left(-\frac\pi9\right)}{2} + \dfrac{\cos\left(\frac{5\pi}9\right) + \cos\left(-\frac{3\pi}9\right)}{2}}{2}
\end{aligned}$$
NO. Let’s try something else:
$$\cos 40^\circ\cos 80^\circ = \frac{\cos(120^\circ)}{2} + \frac{\cos(-40^\circ)}{2} = -\frac14 + \frac{\cos(40^\circ)}{2},$$

so
$$\begin{aligned}
\cos 20^\circ\cos 40^\circ\cos 80^\circ &= \frac12(\cos 20^\circ)\left(\cos 40^\circ - \frac12\right)\\
&= \frac12\left(\cos 20^\circ\cos 40^\circ - \cos 20^\circ\cdot\frac12\right)\\
&= \frac12\left(\frac12(\cos 60^\circ + \cos 20^\circ) - \cos 20^\circ\cdot\frac12\right)\\
&= \frac14\left(\frac12 + \cos 20^\circ\right) - \cos 20^\circ\cdot\frac14\\
&= \frac18 + \cos 20^\circ\cdot\frac14 - \cos 20^\circ\cdot\frac14 = \boxed{\frac18}
\end{aligned}$$
:::
:::

:::problem{3.24}
(a) Use an identity from Problem 3.22 to show that $\cos x + \cos y = 2\cos\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)$.

:::solution
$$2\cos\left(\tfrac{x+y}{2}\right)\cos\left(\tfrac{x-y}{2}\right) = \frac{2\left(\cos\left(\frac{x+y}{2} + \frac{x-y}{2}\right) + \cos\left(\frac{x+y}{2} - \frac{x-y}{2}\right)\right)}{2} = \cos(x) + \cos(y).$$
:::

(b) Find a similar identity for $\cos x - \cos y$.

:::solution
$\cos(\alpha-\beta) - \cos(\alpha+\beta) = 2\sin\alpha\sin\beta$, so
$$\cos x - \cos y = -2\sin\left(\frac{x+y}{2}\right)\sin\left(\frac{x-y}{2}\right).$$
:::

(c) The same for sines:

:::solution
$$\begin{aligned}
\sin x + \sin y &= 2\sin\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)\\
\sin x - \sin y &= 2\sin\left(\frac{x-y}{2}\right)\cos\left(\frac{x+y}{2}\right).
\end{aligned}$$
:::
:::

:::problem{3.25}
Compute $\dfrac{\sin 13^\circ + \sin 47^\circ + \sin 73^\circ + \sin 107^\circ}{\cos 17^\circ}$.

:::solution
$$\frac{2\sin(30^\circ)\cos(17^\circ) + 2\sin(90^\circ)\cos(17^\circ)}{\cos 17^\circ} = 2\left(\frac12\right) + 2(1) = 1 + 2 = \boxed{3}$$
:::
:::

### Exercises

:::problem{1}
Show that $(\cos 4x - \cos 2x)/(2\sin 3x) = -\sin x$ for all $x$ such that $\sin 3x \ne 0$.

:::solution
$$\frac{-2\sin\left(\frac{4x+2x}{2}\right)\sin\left(\frac{4x-2x}{2}\right)}{2\sin 3x} = -\frac{2\sin(3x)\sin(x)}{2\sin 3x} = -\sin x.$$
:::
:::

:::problem{2}
Find the acute angle $\theta$ such that $\cos 27^\circ + \cos 33^\circ = \sqrt3\cos\theta$.

:::solution
$$2\cos\left(\frac{27^\circ+33^\circ}{2}\right)\cos\left(\frac{27^\circ-33^\circ}{2}\right) = 2\left(\frac{\sqrt3}{2}\right)\cos\left(-\frac{6^\circ}{2}\right)$$
$$\Rightarrow \sqrt3\cos(3^\circ) = \sqrt3\cos\theta \Rightarrow \cos 3^\circ = \cos\theta \to \theta = 3^\circ.$$
:::
:::

:::problem{3}
$\sin(\alpha+\beta) - \sin(\alpha-\beta) = 2\sin\beta\cos\alpha$, which is like $2\sin\alpha\cos\beta$. Why? Just different variables?
:::

:::problem{4}
Express the following without using trig functions:
$$\frac{\sin 10^\circ + \sin 20^\circ + \cdots + \sin 80^\circ}{\cos 5^\circ\cos 10^\circ\cos 20^\circ}.$$

:::solution
First rearrange the top:
$$(\sin 80^\circ + \sin 10^\circ) + (\sin 20^\circ + \sin 70^\circ) + \cdots + (\sin 40^\circ + \sin 50^\circ)$$
$$\begin{aligned}
&\Rightarrow 2\sin\left(\frac{80^\circ+10^\circ}{2}\right)\cos\left(\frac{70^\circ}{2}\right) + 2\sin 45^\circ\cos\frac{50^\circ}{2} + \cdots \qquad \left(\sin 45^\circ = \tfrac{\sqrt2}{2}\right)\\
&= 2\sin 45^\circ\left(\cos\frac{70^\circ}{2} + \cos\frac{50^\circ}{2} + \cos\frac{30^\circ}{2} + \cos\frac{10^\circ}{2}\right)\\
&= \sqrt2\,(\cos 35^\circ + \cos 25^\circ + \cos 15^\circ + \cos 5^\circ)\\
&= \sqrt2\,\bigl(2\cos(30^\circ)\cos(5^\circ) + 2\cos(10^\circ)\cos(5^\circ)\bigr) = \sqrt2\,\bigl(\sqrt3\cos 5^\circ + 2\cos 10^\circ\cos 5^\circ\bigr)
\end{aligned}$$

Wait, it is more simple if I do more basic grouping/pairing!
$$\begin{aligned}
&\frac{2\cos 5^\circ\,(\sin 15^\circ + \sin 35^\circ + \sin 55^\circ + \sin 75^\circ)}{\cos 5^\circ\cos 10^\circ\cos 20^\circ} = \frac{2(\sin 15^\circ + \sin 35^\circ + \sin 55^\circ + \sin 75^\circ)}{\cos 10^\circ\cos 20^\circ}\\
&\Rightarrow \frac{4\cos 10^\circ\,(\sin 25^\circ + \sin 65^\circ)}{\cos 10^\circ\cos 20^\circ}\\
&\Rightarrow \frac{8\cos 20^\circ\,(\sin(45^\circ))}{\cos 20^\circ} \Rightarrow 8\cdot\frac{\sqrt2}{2} = \boxed{4\sqrt2}
\end{aligned}$$
:::
:::

:::problem{5}
Prove that $4\sin A\sin B\sin C = -\sin(A+B+C) + \sin(B+C-A) + \sin(C+A-B) + \sin(A+B-C)$.

:::solution
$$\begin{aligned}
-\sin(A+B+C) + \sin(B+C-A) &= \sin(B+C-A) - \sin(A+B+C)\\
&= 2\sin\left(\frac{(B+C-A) - (A+B+C)}{2}\right)\cos\left(\frac{(B+C-A) + (A+B+C)}{2}\right)\\
&= 2\sin(-A)\cos(B+C),
\end{aligned}$$
$$\sin(C+A-B) + \sin(A+B-C) = 2\sin\left(\frac{(C+A-B) + (A+B-C)}{2}\right)\cos\left(\frac{(C+A-B) - (A+B-C)}{2}\right) = 2\sin(A)\cos(C-B).$$

$$\begin{aligned}
2\sin(-A)\cos(B+C) &= -2\sin A\,(\cos B\cos C - \sin B\sin C)\\
&= -(2\sin A\cos B)\cos C + 2\sin A\sin B\sin C
\end{aligned}$$

:::
:::

:::problem{6}
Find the smallest positive integer solution to
$$\tan 19x^\circ = \frac{\cos 96^\circ + \sin 96^\circ}{\cos 96^\circ - \sin 96^\circ}.$$

:::solution
$$(\cos 96^\circ + \sin 96^\circ)^2 = \cos^2 96^\circ + \sin^2 96^\circ + 2\cos 96^\circ\sin 96^\circ = 1 + \sin(2(96^\circ)) = 1 + \sin(192^\circ),$$
and $192^\circ = 180^\circ + 12^\circ$ with $12^\circ = \frac{\pi}{15}$, so this is $1 + \sin\left(-\frac{\pi}{15}\right)$. Likewise
$$(\cos 96^\circ - \sin 96^\circ)^2 = \cos^2 96^\circ + \sin^2 96^\circ - 2\sin 96^\circ\cos 96^\circ = 1 - \sin(192^\circ).$$
So
$$\frac{1 + \sin(192^\circ)}{1 - \sin(192^\circ)} = \frac{\sin^2(19x^\circ)}{\cos^2(19x^\circ)}.$$

:::
:::

## Problem Solving with Identities

:::problem{3.26}
Determine $A+B$ if $A$ and $B$ are acute angles such that $\sin A + \sin B = \sqrt{\frac32}$ and $\cos A - \cos B = \sqrt{\frac12}$.

:::solution
Square both and add:
$$\sin^2 A + \sin^2 B + 2\sin A\sin B + \cos^2 A + \cos^2 B - 2\cos A\cos B = \frac32 + \frac12 = 2,$$
$$\begin{aligned}
2 + 2\sin A\sin B - 2\cos A\cos B &= 2\\
-2(\cos A\cos B - \sin A\sin B) + 2 &= 2\\
-2\cos(A+B) + 2 &= 2\\
\cos(A+B) &= 0 \quad\hookrightarrow\quad \arccos(0) = A+B.
\end{aligned}$$
$A, B \in \left(0, \frac\pi2\right)$, so $\boxed{A + B = \frac\pi2}$, i.e. $90^\circ$.
:::
:::

:::problem{3.27}
Find the sum of the roots of $\tan^2 x - 9\tan x + 1 = 0$ that are between $x = 0$ and $x = 2\pi$ radians.

:::solution
With $u = \tan x$:
$$u = \frac{9 \pm \sqrt{81 - 4(1)(1)}}{2(1)} = \frac{9 \pm \sqrt{77}}{2}, \qquad \tan x = \frac{9 \pm \sqrt{77}}{2}.$$
$r_1 r_2 = 1$, so $\tan\theta$ and $\cot\theta$ are the solutions: $\tan\theta$ and $\tan\left(\frac\pi2 - \theta\right)$ $\Rightarrow$ $\theta$ and $\frac\pi2 - \theta$ are solutions, and
$$\theta + \frac\pi2 - \theta \to \frac\pi2.$$
$\tan(\pi + \theta) = \tan\theta$, which gives $\pi + \theta$ and $\frac{3\pi}{2} - \theta$:
$$\pi + \frac{3\pi}{2} + \frac\pi2 = \frac{6\pi}{2} = \boxed{3\pi}.$$
$\frac{3\pi}{2}$ is largest since $\frac{4\pi}{2} = 2\pi$ and we want $x < 2\pi$.
:::
:::

:::problem{3.28}
Let $a = \pi/2008$. Find the smallest positive integer $n$ such that
$$2\left[\cos a\sin a + \cos 4a\sin 2a + \cos 9a\sin 3a + \cdots + \cos(n^2 a)\sin(na)\right]$$
is an integer.
:::

:::problem{3.29}
Let $a, b, c, d \in \RR^+$ such that $a^2 + b^2 = 1$, $c^2 + d^2 = 1$, and $ac - bd = \frac12$. Find $ad + bc$.

:::solution
$$\sin^2 x + \cos^2 x = 1, \qquad \sin^2 y + \cos^2 y = 1,$$
so take $a = \sin x$, $b = \cos x$, $c = \sin y$, $d = \cos y$:
$$\sin x\sin y - \cos x\cos y = -\cos(x+y),$$
so $\cos(x+y) = -\frac12$ and $x + y = \frac{2\pi}{3}$.

$$\sin x\cos y + \sin y\cos x = \sin(x+y) = \sin\left(\frac{2\pi}{3}\right) = \boxed{\frac{\sqrt3}{2}}$$
:::
:::

:::problem{3.30}
Evaluate
$$\frac{\cos 1^\circ + \cos 2^\circ + \cdots + \cos 43^\circ + \cos 44^\circ}{\sin 1^\circ + \sin 2^\circ + \cdots + \sin 43^\circ + \sin 44^\circ}.$$

:::solution
**Idea 1.** Pair the outside terms: $\cos 44^\circ + \cos 1^\circ = 2\cos\left(\frac{44^\circ + 1^\circ}{2}\right)\cos\left(\frac{44^\circ - 1^\circ}{2}\right)$, which brings in $\frac{45^\circ}{2}$.

**Idea 2** (seems better). Pair neighbours (angles in degrees):
$$\begin{aligned}
\cos 1^\circ + \cos 2^\circ &= 2\cos\tfrac32\cos\left(-\tfrac12\right)\\
\sin 1^\circ + \sin 2^\circ &= 2\sin\tfrac32\cos\left(-\tfrac12\right)\\
&\ \ \vdots\\
\cos 43^\circ + \cos 44^\circ &= 2\cos\tfrac{87}{2}\cos\left(-\tfrac12\right),
\end{aligned}$$
so the $2\cos\left(-\frac12\right)$ cancels from top and bottom and we are left with
$$\frac{\cos\frac32 + \cdots + \cos\frac{87}{2}}{\sin\frac32 + \cdots + \sin\frac{87}{2}}.$$
Pairing again and again (pairs of pairs, and so on) and tracking how far apart the paired angles are gets stuck: $44 = 4\cdot 11$, so after two rounds there are 11 terms and one has to be isolated.

Back to Idea 1:
$$\sin 44^\circ + \sin 1^\circ = 2\sin\frac{45^\circ}{2}\cos\frac{43^\circ}{2},$$
and the next pairs give $\cos\frac{41^\circ}{2}$, $\cos\frac{39^\circ}{2}$, …, always with the same $\frac{45^\circ}{2}$ in front. So
$$\frac{2\cos\frac{45^\circ}{2}\left(\cos\frac{43^\circ}{2} + \cdots\right)}{2\sin\frac{45^\circ}{2}\left(\cos\frac{43^\circ}{2} + \cdots\right)} = \cot\frac{45^\circ}{2},$$
$$\frac{1}{\tan\left(\frac{45^\circ}{2}\right)} = \frac{1 + \cos 45^\circ}{\sin 45^\circ} = \frac{1 + \frac{\sqrt2}{2}}{\frac{\sqrt2}{2}} = \boxed{\sqrt2 + 1}$$
:::
:::

:::problem{3.31}
Given any 7 real numbers, prove that there are two of them, $x$ and $y$, such that
$$0 \le \frac{x-y}{1+xy} \le \frac{1}{\sqrt3}.$$
:::

:::problem{3.32}
Evaluate $(\sin 1^\circ)(\sin 3^\circ)(\sin 5^\circ)\cdots(\sin 179^\circ)$.
:::

## Summary

### Basic identities

$$\begin{aligned}
\sin^2\theta + \cos^2\theta &= 1 &\qquad \sin(-\theta) &= -\sin(\theta)\\
\tan^2\theta + 1 &= \sec^2\theta & \cos(-\theta) &= \cos(\theta)\\
\cot^2\theta + 1 &= \csc^2\theta & \tan(-\theta) &= -\tan(\theta)
\end{aligned}$$

$$\begin{aligned}
\sin\left(\tfrac\pi2 - \theta\right) &= \cos\theta &\qquad \sin(\pi - \theta) &= \sin\theta\\
\cos\left(\tfrac\pi2 - \theta\right) &= \sin\theta & \cos(\pi - \theta) &= -\cos\theta\\
\tan\left(\tfrac\pi2 - \theta\right) &= \cot\theta & \tan(\pi - \theta) &= -\tan\theta
\end{aligned}$$

### Angle sum and difference identities

$$\begin{aligned}
\sin(\alpha+\beta) &= \sin\alpha\cos\beta + \sin\beta\cos\alpha\\
\cos(\alpha+\beta) &= \cos\alpha\cos\beta - \sin\alpha\sin\beta\\
\tan(\alpha+\beta) &= \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}
\end{aligned}$$

$$\begin{aligned}
\sin(\alpha-\beta) &= \sin\alpha\cos\beta - \sin\beta\cos\alpha\\
\cos(\alpha-\beta) &= \cos\alpha\cos\beta + \sin\alpha\sin\beta\\
\tan(\alpha-\beta) &= \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}
\end{aligned}$$

### Double angle and half angle identities

$$\begin{aligned}
\sin 2\theta &= 2\sin\theta\cos\theta\\
\cos 2\theta &= \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta\\
\tan 2\theta &= (2\tan\theta)/(1 - \tan^2\theta)
\end{aligned}$$

$$\begin{aligned}
\cos\frac\theta2 &= \pm\sqrt{\frac{1+\cos\theta}{2}}\\
\sin\frac\theta2 &= \pm\sqrt{\frac{1-\cos\theta}{2}}\\
\tan\frac\theta2 &= \frac{\sin\theta}{1+\cos\theta} = \frac{1-\cos\theta}{\sin\theta}
\end{aligned}$$

### Product-to-sum and sum-to-product identities

$$\begin{aligned}
\cos\alpha\cos\beta &= \frac12\bigl(\cos(\alpha+\beta) + \cos(\alpha-\beta)\bigr)\\
\sin\alpha\sin\beta &= \frac12\bigl(\cos(\alpha-\beta) - \cos(\alpha+\beta)\bigr)\\
\sin\alpha\cos\beta &= \frac12\bigl(\sin(\alpha+\beta) + \sin(\alpha-\beta)\bigr)
\end{aligned}$$

$$\begin{aligned}
\cos x + \cos y &= 2\cos\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)\\
\cos x - \cos y &= -2\sin\left(\frac{x+y}{2}\right)\sin\left(\frac{x-y}{2}\right)\\
\sin x + \sin y &= 2\sin\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)\\
\sin x - \sin y &= 2\sin\left(\frac{x-y}{2}\right)\cos\left(\frac{x+y}{2}\right)
\end{aligned}$$
