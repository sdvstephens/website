---
course: integrated-maths
chapter: 15
section: 15.2
title: Basic Trigonometric Identities
---

The identities on this page come straight from the definitions on the unit circle. The problems use them to rewrite expressions, to solve equations, and to relate the functions at complementary and supplementary angles.

:::theorem Most important trigonometric identities
- $\sin^2\theta + \cos^2\theta = 1$
- $\sin(-\theta) = -\sin\theta$ and $\cos\theta = \cos(-\theta)$
:::

## Pythagorean identities

:::problem
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

:::problem
Prove the identity $\tan^2 x + 1 = \sec^2 x$.

:::solution
$$\frac{\sin^2 x}{\cos^2 x} + 1 = \frac{1}{\cos^2 x} \to \sin^2 x = 1 - \cos^2 x \to \sin^2 x + \cos^2 x = 1,$$
which was our given identity. $\square$
:::
:::

:::problem
Show that $\dfrac{(\csc x)(\sec x)}{1 + \tan^2 x} = \cot x$.

:::solution
By the previous problem we know $1 + \tan^2 x = \sec^2 x$, so
$$\frac{\csc x\sec x}{\sec^2 x} \to \frac{\csc x}{\sec x} = \frac{1/\sin x}{1/\cos x} = \frac{\cos x}{\sin x},$$
which is exactly the definition of $\cot x$.
:::
:::

## Cofunction and reflection identities

:::problem
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

:::problem
Continue.

:::solution
(a) $\cos\left(\frac{\pi}{2} + \theta\right) = -\sin\theta$

(b) $\sin(\pi - \theta) = \sin\theta$

(c) $\tan(\pi + \theta) = \tan\theta$

(d) $\cos\left(\theta - \frac{3\pi}{2}\right) = -\sin\theta$

So $\sin(180^\circ - \theta) = \sin\theta$ and $\cos(180^\circ - \theta) = -\cos\theta$.
:::
:::

:::problem
Find the smallest possible angle such that $\sin 2\theta = \cos 3\theta$.

:::solution
Well,
$$\sin 2\theta = 2\sin\theta\cos\theta = (\sin\theta + \cos\theta)^2 - 1 = \frac{2\tan\theta}{1 + \tan^2\theta}.$$
Also $\cos 3\theta = \sin\left(\frac{\pi}{2} - 3\theta\right)$, so $\sin 2\theta = \sin\left(\frac{\pi}{2} - 3\theta\right)$:
$$2\theta = \frac{\pi}{2} - 3\theta,\qquad 5\theta = \frac{\pi}{2} \to \theta = \frac{\pi}{10} = 18^\circ.$$
:::
:::

## Exercises

:::exercise
Prove $\cot^2\theta + 1 = \csc^2\theta$.

:::solution
$$\frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta} - 1 \to \cos^2\theta + \sin^2\theta = 1.$$
:::
:::

:::exercise
Prove that $\sin(360^\circ - \theta) = -\sin\theta$.

:::solution
Since $360^\circ = 2\pi$ and $2\pi n \cong 0$, we have $\sin(360^\circ - \theta) = \sin(-\theta) = -\sin\theta$.
:::
:::

:::exercise
Use the identity $\tan^2 x + 1 = \sec^2 x$ proved above to solve $\tan x + \sec x = \sqrt3$ (the first problem on this page) without converting into sines and cosines.

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

:::exercise
Find $\cos\left(\frac{3\pi}{2} + \theta\right)$ in terms of $\sin$ or $\cos$.

:::solution
$$\cos\left(\frac{3\pi}{2} + \theta\right) = \cos\frac{3\pi}{2}\cos\theta - \sin\frac{3\pi}{2}\sin\theta \to \sin\theta.$$
:::
:::

:::exercise
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

:::exercise
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
