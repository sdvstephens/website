Evaluate $S = 1 + \cos\theta + \cos 2\theta + \cdots + \cos n\theta$. Attack it with product-to-sum
identities and you drown in cross terms. Yet the answer is a compact ratio of two sines. Where does that
simplicity hide, and why can't the real trigonometric bookkeeping see it?

## Discovery

1. Each term $\cos k\theta$ is the real part of a single complex quantity raised to the $k$-th power. Which
   complex number $z$ makes $\cos k\theta = \Re(z^k)$? Rewrite every term of $S$ that way.
2. Because $\Re$ adds term by term, $S = \Re\big(1 + z + z^2 + \cdots + z^n\big)$ for that $z$. The inner sum
   is a finite geometric series; assuming $z \ne 1$, write it in closed form.
3. You now hold $S = \Re\!\left(\dfrac{z^{n+1}-1}{z-1}\right)$ with $z = e^{i\theta}$. To pull out the real
   part cleanly, multiply numerator and denominator by $e^{-i\theta/2}$ and use $e^{i\alpha}-e^{-i\alpha} =
   2i\sin\alpha$. What do the numerator and denominator turn into?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Complexification (going complex).** When a *real* problem involves $\cos$/$\sin$ sums, rotations, regular
polygons, or otherwise resists real methods, lift it into $\mathbb{C}$: replace $\cos k\theta$ and
$\sin k\theta$ by the single object $e^{ik\theta} = (\cos\theta + i\sin\theta)^k$, exploit the fact that
complex arithmetic *linearizes rotation* (multiplication is "rotate and scale") so that geometric series,
roots of unity, and the binomial theorem all apply cleanly, solve the easier complex problem, and finally
read off the **real part** (for cosine data) or **imaginary part** (for sine data). The round trip is valid
because $\Re,\Im : \mathbb{C}\to\mathbb{R}$ are $\mathbb{R}$-linear.

The tactic pays whenever the difficulty is that $\cos$ and $\sin$ are two entangled real shadows of one clean
complex exponential. Reuniting them, computing, and re-separating is often the whole solution.

### Proof

Why may we compute in $\mathbb{C}$ and then simply take a real part?

The real-part map $\Re$ is additive, $\Re(w_1+w_2)=\Re w_1+\Re w_2$, and $\mathbb{R}$-homogeneous,
$\Re(\lambda w)=\lambda\,\Re w$ for real $\lambda$. Euler's formula (**tc-euler-formula**) gives
$\Re(e^{ik\theta}) = \cos k\theta$ and $\Im(e^{ik\theta}) = \sin k\theta$. Hence for real coefficients $c_k$,
any complex identity $\sum_k c_k e^{ik\theta} = W$ projects to the real identity
$\sum_k c_k \cos k\theta = \Re W$ (and to $\sum_k c_k \sin k\theta = \Im W$). So a computation done on the
united exponential specializes back to a true statement about the separate trigonometric sums.

It remains to justify the computational step used in the Hook, the geometric sum. For $z\ne 1$,
$(1+z+\cdots+z^n)(z-1) = z^{n+1}-1$, so $\sum_{k=0}^n z^k = \dfrac{z^{n+1}-1}{z-1}$. With $z=e^{i\theta}$ and
the symmetrizing factor $e^{-i\theta/2}$,
$$\frac{z^{n+1}-1}{z-1} = \frac{e^{i(n+1)\theta/2}\big(e^{i(n+1)\theta/2}-e^{-i(n+1)\theta/2}\big)}
{e^{i\theta/2}\big(e^{i\theta/2}-e^{-i\theta/2}\big)}
= e^{in\theta/2}\,\frac{\sin\!\big(\tfrac{(n+1)\theta}{2}\big)}{\sin\!\big(\tfrac{\theta}{2}\big)}.$$
Taking real parts finishes it. $\blacksquare$

### Worked Instance

**Resolving the Hook.** From the Proof, with $z=e^{i\theta}$ (and $\theta$ not a multiple of $2\pi$),
$$S = \Re\!\left(e^{in\theta/2}\,\frac{\sin\!\big(\tfrac{(n+1)\theta}{2}\big)}{\sin\!\big(\tfrac{\theta}{2}\big)}\right)
= \frac{\sin\!\big(\tfrac{(n+1)\theta}{2}\big)}{\sin\!\big(\tfrac{\theta}{2}\big)}\,\cos\!\Big(\tfrac{n\theta}{2}\Big).$$
The compact sine ratio was invisible in real terms because it lived in the modulus of a complex geometric
series. (For $\theta$ a multiple of $2\pi$, every cosine is $1$ and $S=n+1$ directly.)

**A second application.** Evaluate $\binom{n}{0} - \binom{n}{2} + \binom{n}{4} - \cdots$ (alternating even
binomials). This is $\Re\sum_k \binom{n}{k} i^k = \Re\,(1+i)^n$. Since $1+i = \sqrt{2}\,e^{i\pi/4}$,
$(1+i)^n = 2^{n/2}e^{in\pi/4}$, so the sum equals $2^{n/2}\cos\!\big(\tfrac{n\pi}{4}\big)$ — a closed form no
real manipulation offers so quickly.

### Pitfalls

- **Guard the geometric series.** $\sum z^k = \frac{z^{n+1}-1}{z-1}$ needs $z\ne 1$; handle $\theta \equiv 0
  \pmod{2\pi}$ (all terms equal) separately.
- **Combine before projecting.** $\Re(zw)\ne \Re z\,\Re w$ in general. Finish the complex computation, then
  take the real part once at the end.
- **Don't discard the twin.** The imaginary part often answers a companion problem (the sine sum) for free —
  note it rather than throwing it away.
- **Coefficients must be real** for $\sum c_k \cos k\theta = \Re(\sum c_k e^{ik\theta})$; a complex $c_k$
  mixes real and imaginary parts.

:::
:::

## Connections

Prereqs: **tc-euler-formula** (the bridge $e^{ik\theta}=\cos k\theta+i\sin k\theta$) and
**tc-complex-geometry** (multiplication as rotation). Complexification unlocks **tc-roots-of-unity** and the
**alg-roots-of-unity-filter**, powers many trigonometric-sum and generating-function identities, and doubles
as a geometry tool in **geo-complex-numbers**. Recognition trigger: a stubborn real problem full of
$\cos/\sin$, evenly-spaced angles, or regular-polygon symmetry — reunite the pieces as one exponential, work
the easy complex version, then read off a real or imaginary part. A recurring Putnam and olympiad move.

## History

Complex numbers entered mathematics precisely as a *tactic of necessity*: Rafael Bombelli, around 1572,
manipulated square roots of negatives to push Cardano's cubic formula through the *casus irreducibilis*, where
three genuine real roots can only be reached via complex intermediates — the first "go complex to solve a real
problem." Leonhard Euler's 1748 formula $e^{i\theta}=\cos\theta+i\sin\theta$ fused trigonometry with the
exponential and made complexification systematic, and the geometric picture of $\mathbb{C}$ as a plane, due to
Caspar Wessel (1799), Jean-Robert Argand (1806), and Carl Friedrich Gauss, cemented "multiplication is
rotation." What began as an uneasy computational dodge became, in Paul Zeitz's framing of *crossover tactics*,
one of problem-solving's sharpest reflexes: when a real problem stalls, lift it into $\mathbb{C}$.
