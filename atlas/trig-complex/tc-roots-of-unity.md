The equation $z^n = 1$ has exactly $n$ complex solutions, and if you plot them they land on the corners of a perfect regular $n$-gon inscribed in the unit circle. Even stranger: add up all $n$ of those solutions and you always get exactly zero. Why should a lopsided-looking set of points sum to nothing?

## Discovery

1. Write a solution of $z^n=1$ in the form $z=re^{i\theta}$. Taking modulus of both sides, what must $r$ be? So all solutions live on which curve?
2. With $r=1$, the equation becomes $e^{in\theta}=1$. For which real $\theta$ is $e^{in\theta}=1$? List the distinct solutions with $0\le\theta\lt 2\pi$. How many are there?
3. Let $\omega = e^{2\pi i/n}$. Show every solution from step 2 is a power of $\omega$. Which powers give distinct roots?
4. Plot $1,\omega,\omega^2,\dots,\omega^{n-1}$ for $n=6$. What polygon do they form, and how are consecutive points related by a rotation?
5. Consider $S = 1+\omega+\omega^2+\cdots+\omega^{n-1}$. Multiply $S$ by $\omega$. What do you notice about $\omega S$ versus $S$? Use that to pin down $S$ (assume $n\ge 2$). Separately, recognize $S$ as a geometric series and evaluate it — do the two answers agree?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **$n$-th roots of unity** are the solutions of $z^n=1$. There are exactly $n$ of them, namely
$$\omega^k = e^{2\pi i k/n} = \cos\frac{2\pi k}{n} + i\sin\frac{2\pi k}{n},\qquad k=0,1,\dots,n-1,\quad \omega=e^{2\pi i/n}.$$
Geometrically they are the vertices of a regular $n$-gon inscribed in the unit circle, one vertex at $1$, consecutive vertices separated by a rotation of $2\pi/n$. Their sum vanishes for $n\ge 2$:
$$\sum_{k=0}^{n-1}\omega^k = 0.$$
More generally $\displaystyle\sum_{k=0}^{n-1}\omega^{jk}=0$ whenever $n\nmid j$, and $=n$ when $n\mid j$ (the basis of the roots-of-unity filter).

### Proof

**Count and form.** If $z^n=1$ then $|z|^n=1$ so $|z|=1$; write $z=e^{i\theta}$. Then $e^{in\theta}=1$ iff $n\theta$ is an integer multiple of $2\pi$, i.e. $\theta=2\pi k/n$ for integer $k$. Values $k=0,1,\dots,n-1$ give distinct angles in $[0,2\pi)$; any other $k$ repeats one of these mod $2\pi$. So there are exactly $n$ roots, $\omega^k$ with $\omega=e^{2\pi i/n}$, and $(\omega^k)^n=e^{2\pi i k}=1$ confirms each solves the equation. That is $n$ distinct roots of a degree-$n$ polynomial, hence all of them.

**Geometry.** Each $\omega^k$ has modulus $1$ and argument $2\pi k/n$, so they are equally spaced on the unit circle at angular gaps $2\pi/n$: the vertices of a regular $n$-gon. Multiplying by $\omega$ rotates by $2\pi/n$, sending each vertex to the next.

**Sum.** Let $S=\sum_{k=0}^{n-1}\omega^k$. For $n\ge 2$, $\omega\ne 1$, so multiply by $\omega$:
$$\omega S = \sum_{k=0}^{n-1}\omega^{k+1} = \sum_{k=1}^{n}\omega^k = S - 1 + \omega^n = S - 1 + 1 = S,$$
since $\omega^n=1$. Thus $(\omega-1)S=0$, and as $\omega\ne 1$ we get $S=0$. (Equivalently, the geometric series gives $S=\frac{\omega^n-1}{\omega-1}=\frac{0}{\omega-1}=0$.)

For the general character sum, if $n\mid j$ then $\omega^j=1$ and each term is $1$, so the sum is $n$. If $n\nmid j$ then $\omega^j\ne 1$ and $\sum_{k=0}^{n-1}(\omega^j)^k=\frac{\omega^{jn}-1}{\omega^j-1}=\frac{1-1}{\omega^j-1}=0$. $\blacksquare$

### Worked Instance

Find all cube roots of unity and verify their sum. Here $n=3$, $\omega=e^{2\pi i/3}=\cos 120^\circ+i\sin 120^\circ = -\tfrac12+\tfrac{\sqrt3}{2}i$. The three roots are
$$1,\quad \omega=-\tfrac12+\tfrac{\sqrt3}{2}i,\quad \omega^2=-\tfrac12-\tfrac{\sqrt3}{2}i.$$
They form an equilateral triangle on the unit circle. Sum: $1 + (-\tfrac12+\tfrac{\sqrt3}{2}i) + (-\tfrac12-\tfrac{\sqrt3}{2}i) = 1-1 = 0$. ✓ (This matches $z^3-1=(z-1)(z^2+z+1)$: the two nontrivial roots satisfy $z^2+z+1=0$, whose root-sum is $-1$, and $1+(-1)=0$.)

### Pitfalls

- There are exactly $n$ roots — a beginner listing "$z=1$ and $z=-1$" for $z^4=1$ forgets $\pm i$.
- The sum-is-zero fact needs $n\ge 2$; for $n=1$ the only root is $1$ and the sum is $1$.
- $\omega=e^{2\pi i/n}$ is *a* primitive root; not every $\omega^k$ is primitive (e.g. $\omega^0=1$ generates nothing). Primitivity requires $\gcd(k,n)=1$.
- Don't confuse "$n$-th roots of unity" (solutions of $z^n=1$) with "$n$-th roots of a number $a$" (solutions of $z^n=a$); the latter are these rotated and scaled.

:::
:::

## Connections

Prereqs: Euler's formula, which supplies the polar form $e^{2\pi ik/n}$. The vanishing sum and its character-sum generalization are the engine of the roots-of-unity filter (unlocks: `alg-roots-of-unity-filter`), used to extract coefficients congruent to a fixed residue. The regular-$n$-gon picture connects to complex geometry. Recognition trigger: any equation $z^n=1$ or $z^n=a$, any regular polygon in the plane, or any sum you want to kill by symmetric cancellation.
