Multiply $(\cos 30^\circ + i\sin 30^\circ)$ by itself: the angle doubles to $60^\circ$. Multiply again: $90^\circ$. It looks like powering a unit complex number just adds angles. If that keeps holding, raising to the $n$-th power should be almost free — and it would hand you $\cos 3\theta$ and $\sin 3\theta$ for nothing.

## Discovery

1. Let $z = \cos\theta + i\sin\theta$ and $w=\cos\phi+i\sin\phi$. Multiply $zw$ out, collecting real and imaginary parts. Use the angle-addition formulas on each part. What single complex number in $\cos/\sin$ form is $zw$?
2. From step 1, what is $z^2$? What is $z^3 = z^2\cdot z$? State the pattern you conjecture for $z^n$ when $n$ is a positive integer.
3. Prove your conjecture for all positive integers $n$ by induction: assume it for $n$, multiply by one more $z$, and reuse step 1.
4. What is $z^{-1}$? (Multiply $\cos\theta+i\sin\theta$ by $\cos\theta-i\sin\theta$ and simplify.) Does the same angle-formula hold for negative exponents?
5. Expand $(\cos\theta+i\sin\theta)^3$ with the binomial theorem, then match real and imaginary parts to your $n=3$ result. What expressions for $\cos 3\theta$ and $\sin 3\theta$ fall out?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**De Moivre's theorem.** For every integer $n$,
$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta.$$
Powering a unit-modulus complex number multiplies its angle by $n$. Matching real/imaginary parts after a binomial expansion turns this into multiple-angle formulas, e.g. $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$ and $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$.

### Proof

Write $c_\theta := \cos\theta+i\sin\theta$. First, the multiplication rule:
$$c_\alpha c_\beta = (\cos\alpha\cos\beta-\sin\alpha\sin\beta) + i(\sin\alpha\cos\beta+\cos\alpha\sin\beta) = \cos(\alpha+\beta)+i\sin(\alpha+\beta) = c_{\alpha+\beta},$$
by the angle-addition formulas.

**Positive integers, by induction on $n$.** Base $n=1$ is trivial. If $c_\theta^{\,n}=c_{n\theta}$, then $c_\theta^{\,n+1}=c_\theta^{\,n}\,c_\theta=c_{n\theta}\,c_\theta=c_{n\theta+\theta}=c_{(n+1)\theta}$. So it holds for all $n\ge 1$.

**$n=0$.** $c_\theta^{\,0}=1=\cos 0+i\sin 0$. ✓

**Negative integers.** Since $c_\theta\,c_{-\theta}=c_0=1$, we have $c_\theta^{-1}=c_{-\theta}=\cos\theta-i\sin\theta$. For $n\lt 0$ write $n=-m$ with $m\gt 0$:
$$c_\theta^{\,n} = \big(c_\theta^{-1}\big)^m = c_{-\theta}^{\,m} = c_{-m\theta} = c_{n\theta},$$
using the positive-integer case on $c_{-\theta}$. Thus the formula holds for every integer $n$. $\blacksquare$

### Worked Instance

Compute $\cos 3\theta$ and $\sin 3\theta$. By De Moivre, $\cos 3\theta + i\sin 3\theta = (\cos\theta+i\sin\theta)^3$. Expanding with the binomial theorem and $i^2=-1$, $i^3=-i$:
$$(\cos\theta+i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta.$$
Real part: $\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = \cos^3\theta - 3\cos\theta(1-\cos^2\theta) = 4\cos^3\theta - 3\cos\theta$.
Imaginary part: $\sin 3\theta = 3\cos^2\theta\sin\theta - \sin^3\theta = 3(1-\sin^2\theta)\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta$.

### Pitfalls

- De Moivre as stated needs modulus $1$. For a general $z = r(\cos\theta+i\sin\theta)$, $z^n = r^n(\cos n\theta+i\sin n\theta)$ — don't forget the $r^n$.
- For *non-integer* $n$ the single formula fails to name a unique value; fractional powers are multivalued (this is exactly what roots of unity address).
- When extracting $\cos n\theta$, remember to convert leftover $\sin^2\theta$ into $1-\cos^2\theta$ (or vice versa) to get a clean polynomial.

:::
:::

## Connections

Prereqs: the angle-addition formulas (De Moivre is those formulas iterated). It is the gateway to Euler's formula (unlocks: `tc-euler-formula`), which reinterprets $\cos\theta+i\sin\theta$ as $e^{i\theta}$, and to Chebyshev polynomials (unlocks: `tc-chebyshev-poly`), which are exactly the "$\cos n\theta$ as a polynomial in $\cos\theta$" pattern seen in the worked instance. Recognition trigger: any request for $\cos n\theta$/$\sin n\theta$, or any power of a complex number written in polar form.
