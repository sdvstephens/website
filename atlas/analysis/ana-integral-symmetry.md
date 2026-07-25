$\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x + \cos x}\,dx$ looks like it needs a messy
antiderivative. It doesn't have one worth finding — and yet the answer is exactly $\pi/4$. The
integral evaluates itself the moment you fold it over its own midpoint.

## Discovery

Recall that substitution changes both integrand and limits.

1. In a definite integral $\int_a^b f(x)\,dx$, substitute $u = a+b-x$ (so $x=a+b-u$, $dx=-du$).
   Track how the limits move as $x$ runs from $a$ to $b$. After flipping the limits to absorb the
   minus sign, what integral in $u$ do you get? State the identity relating $\int_a^b f(x)\,dx$ to
   $\int_a^b f(a+b-x)\,dx$.
2. Now the target $I = \int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx$. Apply the reflection with
   $a=0,b=\pi/2$, using $\sin(\tfrac\pi2 - x)=\cos x$ and $\cos(\tfrac\pi2 - x)=\sin x$. Call the
   result $I$ as well (by step 1 it equals the original). Write it out.
3. You now have two expressions, both equal to $I$: the original and the reflected one. *Add them.*
   What happens to the two fractions when you put them over a common denominator?
4. The sum $2I$ collapses to the integral of a constant. Evaluate it and solve for $I$. Why did
   adding — rather than attacking either integral alone — do all the work?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Reflection identity.** For integrable $f$ on $[a,b]$,
$$\int_a^b f(x)\,dx = \int_a^b f(a+b-x)\,dx.$$
Consequently, adding the two forms,
$$\int_a^b f(x)\,dx = \frac{1}{2}\int_a^b\big[f(x)+f(a+b-x)\big]\,dx,$$
which is powerful precisely when $f(x)+f(a+b-x)$ *simplifies* (often to a constant). Special cases:
if $f$ is **odd** about the midpoint ($f(a+b-x)=-f(x)$) the integral is $0$; over a symmetric
interval $[-c,c]$, $\int_{-c}^c f = 2\int_0^c f$ for even $f$ and $0$ for odd $f$. The competition
nickname is the "king's property."

### Proof

**Reflection identity.** Substitute $u=a+b-x$, so $x=a+b-u$ and $dx=-du$. When $x=a$, $u=b$; when
$x=b$, $u=a$. Then
$$\int_a^b f(x)\,dx = \int_{u=b}^{u=a} f(a+b-u)(-du) = \int_a^b f(a+b-u)\,du.$$
The reversal of limits cancels the $-du$. Renaming the dummy variable $u\to x$ gives
$\int_a^b f(x)\,dx=\int_a^b f(a+b-x)\,dx$. Averaging this with the original integral yields the
half-sum form. $\blacksquare$

### Worked Instance

Resolve the Hook. Let $I=\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx$. Reflect with
$a=0,b=\pi/2$: since $\sin(\tfrac\pi2-x)=\cos x$ and $\cos(\tfrac\pi2-x)=\sin x$,
$$I = \int_0^{\pi/2}\frac{\cos x}{\cos x+\sin x}\,dx.$$
Add the original and reflected forms:
$$2I = \int_0^{\pi/2}\left(\frac{\sin x}{\sin x+\cos x}+\frac{\cos x}{\sin x+\cos x}\right)dx
= \int_0^{\pi/2}\frac{\sin x+\cos x}{\sin x+\cos x}\,dx = \int_0^{\pi/2}1\,dx = \frac{\pi}{2}.$$
Hence $I = \dfrac{\pi}{4}$. No antiderivative of the original fraction was ever needed.

**A second flavor.** $\displaystyle\int_0^\pi x\sin x\,dx$ via $x\mapsto\pi-x$: the identity gives
$\int_0^\pi x\sin x\,dx = \int_0^\pi(\pi-x)\sin x\,dx$. Adding,
$2\int_0^\pi x\sin x\,dx = \pi\int_0^\pi\sin x\,dx = \pi\cdot 2 = 2\pi$, so
$\int_0^\pi x\sin x\,dx = \pi$ — the linear factor $x$ is symmetrized away, reducing the problem to
$\int_0^\pi\sin x\,dx$.

### Pitfalls

- **The reflection is about the midpoint $\tfrac{a+b}{2}$**, mapping $x\mapsto a+b-x$ — not
  $x\mapsto -x$ unless $a=-b$.
- **Add, don't subtract.** The trick works when $f(x)+f(a+b-x)$ simplifies; subtracting the two
  equal integrals just gives $0=0$, which is useless.
- **Odd-about-midpoint gives $0$.** Recognize $f(a+b-x)=-f(x)$ and stop — no computation needed. A
  common miss is grinding out a zero integral.
- **Check the limits actually match.** The identity needs the *same* interval on both sides; it does
  not apply if a substitution changes $[a,b]$ to a different interval.

:::
:::

## Connections

Prereqs: the substitution technique (the whole trick is one clever substitution plus addition).
Symmetry integrals are Putnam and AIME favorites, and the reflection idea recurs in probability
(symmetric distributions) and in Feynman-style parameter integrals. Recognition trigger: a definite
integral whose integrand *swaps into a partner* under $x\mapsto a+b-x$ so that the sum collapses —
especially fractions of the form $\frac{g(x)}{g(x)+g(a+b-x)}$ and integrands with a lone linear
factor over a symmetric interval.
