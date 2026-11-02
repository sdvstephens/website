---
course: integrated-maths
chapter: 15
section: 15.5
title: Product-to-Sum, Sum-to-Product and Problem Solving
---

Adding and subtracting the angle addition identities turns products of sines and cosines into sums, and sums back into products. The second half of the page uses all the identities together on harder problems, and the page ends with a summary of the identities.

## Product-to-sum identities

:::problem
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

:::problem
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

## Sum-to-product identities

:::problem
(a) Use one of the product-to-sum identities above to show that $\cos x + \cos y = 2\cos\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)$.

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

:::problem
Compute $\dfrac{\sin 13^\circ + \sin 47^\circ + \sin 73^\circ + \sin 107^\circ}{\cos 17^\circ}$.

:::solution
$$\frac{2\sin(30^\circ)\cos(17^\circ) + 2\sin(90^\circ)\cos(17^\circ)}{\cos 17^\circ} = 2\left(\frac12\right) + 2(1) = 1 + 2 = \boxed{3}$$
:::
:::

## Exercises: products and sums

:::exercise
Show that $(\cos 4x - \cos 2x)/(2\sin 3x) = -\sin x$ for all $x$ such that $\sin 3x \ne 0$.

:::solution
$$\frac{-2\sin\left(\frac{4x+2x}{2}\right)\sin\left(\frac{4x-2x}{2}\right)}{2\sin 3x} = -\frac{2\sin(3x)\sin(x)}{2\sin 3x} = -\sin x.$$
:::
:::

:::exercise
Find the acute angle $\theta$ such that $\cos 27^\circ + \cos 33^\circ = \sqrt3\cos\theta$.

:::solution
$$2\cos\left(\frac{27^\circ+33^\circ}{2}\right)\cos\left(\frac{27^\circ-33^\circ}{2}\right) = 2\left(\frac{\sqrt3}{2}\right)\cos\left(-\frac{6^\circ}{2}\right)$$
$$\Rightarrow \sqrt3\cos(3^\circ) = \sqrt3\cos\theta \Rightarrow \cos 3^\circ = \cos\theta \to \theta = 3^\circ.$$
:::
:::

:::exercise
$\sin(\alpha+\beta) - \sin(\alpha-\beta) = 2\sin\beta\cos\alpha$, which is like $2\sin\alpha\cos\beta$. Why? Just different variables?
:::

:::exercise
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

:::exercise
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

:::exercise
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

## Problem solving with identities

:::problem
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

:::problem
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

:::problem
Let $a = \pi/2008$. Find the smallest positive integer $n$ such that
$$2\left[\cos a\sin a + \cos 4a\sin 2a + \cos 9a\sin 3a + \cdots + \cos(n^2 a)\sin(na)\right]$$
is an integer.
:::

:::problem
Let $a, b, c, d \in \RR^+$ such that $a^2 + b^2 = 1$, $c^2 + d^2 = 1$, and $ac - bd = \frac12$. Find $ad + bc$.

:::solution
$$\sin^2 x + \cos^2 x = 1, \qquad \sin^2 y + \cos^2 y = 1,$$
so take $a = \sin x$, $b = \cos x$, $c = \sin y$, $d = \cos y$:
$$\sin x\sin y - \cos x\cos y = -\cos(x+y),$$
so $\cos(x+y) = -\frac12$ and $x + y = \frac{2\pi}{3}$.

$$\sin x\cos y + \sin y\cos x = \sin(x+y) = \sin\left(\frac{2\pi}{3}\right) = \boxed{\frac{\sqrt3}{2}}$$
:::
:::

:::problem
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

:::problem
Given any 7 real numbers, prove that there are two of them, $x$ and $y$, such that
$$0 \le \frac{x-y}{1+xy} \le \frac{1}{\sqrt3}.$$
:::

:::problem
Evaluate $(\sin 1^\circ)(\sin 3^\circ)(\sin 5^\circ)\cdots(\sin 179^\circ)$.
:::

## Summary of identities

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
