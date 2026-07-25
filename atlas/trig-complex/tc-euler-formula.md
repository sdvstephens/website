Everyone meets $e^{i\pi} = -1$ and calls it beautiful. But the real workhorse is the formula it comes from: $e^{i\theta} = \cos\theta + i\sin\theta$. Why should the exponential function — all about growth — have anything to do with a circle?

## Discovery

1. Recall from De Moivre that $(\cos\theta+i\sin\theta)(\cos\phi+i\sin\phi) = \cos(\theta+\phi)+i\sin(\theta+\phi)$. So the map $\theta \mapsto \cos\theta+i\sin\theta$ turns *addition of angles* into *multiplication*. What familiar function also turns addition into multiplication, i.e. satisfies $f(a)f(b)=f(a+b)$?
2. Define $f(\theta) = \cos\theta + i\sin\theta$. Compute $f(0)$. Now differentiate $f$ with respect to $\theta$ (treating $i$ as a constant). Can you write $f'(\theta)$ as a constant times $f(\theta)$? What is the constant?
3. A function satisfying $f'(\theta)=kf(\theta)$ with $f(0)=1$ is exactly $f(\theta)=e^{k\theta}$. What does that force $\cos\theta+i\sin\theta$ to equal?
4. Alternatively, write down the Maclaurin series for $e^x$, $\cos\theta$, and $\sin\theta$. Substitute $x=i\theta$ into the $e^x$ series and use $i^2=-1$, $i^3=-i$, $i^4=1$ to sort terms into real and imaginary parts. What two series appear?
5. Set $\theta=\pi$ in your result. What identity linking $e$, $i$, $\pi$, and $-1$ do you get?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Euler's formula.** For every real $\theta$,
$$e^{i\theta} = \cos\theta + i\sin\theta.$$
Consequences: $|e^{i\theta}|=1$ (it traces the unit circle), De Moivre becomes the exponent law $(e^{i\theta})^n = e^{in\theta}$, and
$$\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}{2},\qquad \sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}.$$
The special case $\theta=\pi$ gives **Euler's identity** $e^{i\pi}+1=0$.

### Proof

We take the power series $e^x=\sum_{k\ge 0}\frac{x^k}{k!}$ as the definition of the complex exponential and show it agrees with $\cos\theta+i\sin\theta$. Substitute $x=i\theta$ and split by the powers of $i$ (which cycle $1,i,-1,-i$):
$$e^{i\theta} = \sum_{k\ge 0}\frac{(i\theta)^k}{k!} = \sum_{m\ge 0}\frac{(i\theta)^{2m}}{(2m)!} + \sum_{m\ge 0}\frac{(i\theta)^{2m+1}}{(2m+1)!}.$$
For the even terms $(i\theta)^{2m}=(i^2)^m\theta^{2m}=(-1)^m\theta^{2m}$; for the odd terms $(i\theta)^{2m+1}=i(-1)^m\theta^{2m+1}$. Hence
$$e^{i\theta} = \sum_{m\ge 0}\frac{(-1)^m\theta^{2m}}{(2m)!} + i\sum_{m\ge 0}\frac{(-1)^m\theta^{2m+1}}{(2m+1)!} = \cos\theta + i\sin\theta,$$
recognizing the standard Maclaurin series of cosine and sine. (Rearranging the absolutely convergent series is legitimate.) The inversion formulas follow by adding and subtracting $e^{i\theta}$ and $e^{-i\theta}=\cos\theta-i\sin\theta$. $\blacksquare$

*Alternative:* $f(\theta)=\cos\theta+i\sin\theta$ satisfies $f'(\theta)=-\sin\theta+i\cos\theta = i(\cos\theta+i\sin\theta)=if(\theta)$ with $f(0)=1$, so $f(\theta)=e^{i\theta}$ by uniqueness of solutions to $f'=if$, $f(0)=1$.

### Worked Instance

Prove the double-angle formulas in one line. Since $e^{i\cdot 2\theta}=(e^{i\theta})^2$,
$$\cos 2\theta + i\sin 2\theta = (\cos\theta+i\sin\theta)^2 = (\cos^2\theta-\sin^2\theta) + i(2\sin\theta\cos\theta).$$
Matching real and imaginary parts: $\cos 2\theta=\cos^2\theta-\sin^2\theta$ and $\sin 2\theta=2\sin\theta\cos\theta$. The exponential turns "square the number" into "double the angle."

### Pitfalls

- $\theta$ is in **radians** here; $e^{i\theta}=\cos\theta+i\sin\theta$ only reads cleanly with radian angles (the derivative argument needs $\frac{d}{d\theta}\sin\theta=\cos\theta$, a radian fact).
- $e^{-i\theta}=\cos\theta - i\sin\theta$, not $\cos\theta+i\sin(-\theta)$ written carelessly — track the sign on the imaginary part.
- In $\sin\theta = \dfrac{e^{i\theta}-e^{-i\theta}}{2i}$ the denominator is $2i$, not $2$. Forgetting the $i$ is a standard slip.

:::
:::

## Connections

Prereqs: De Moivre's theorem, which becomes the exponent law $(e^{i\theta})^n=e^{in\theta}$. Euler's formula is the pivot of the whole domain: it makes roots of unity into evenly spaced points $e^{2\pi ik/n}$ (unlocks: `tc-roots-of-unity`) and makes multiplication-by-$e^{i\theta}$ literally a rotation (unlocks: `tc-complex-geometry`). The $\cos=\tfrac12(e^{i\theta}+e^{-i\theta})$ trick converts trig sums into geometric series. Recognition trigger: any product of trig functions, any rotation, or any "sum of $\cos k\theta$" you'd rather handle as powers of a single complex number.
