The quadratic formula meets $x^2 + 1 = 0$ and stalls: the discriminant is $-4$, and no real number
squares to something negative. Yet the parabola $y = x^2 + 1$ misses the axis *cleanly*, symmetric
about it — as if two crossing points went somewhere we cannot see. What if we simply *named* a
square root of $-1$ and followed the arithmetic wherever it led?

## Discovery

1. Run the quadratic formula on $x^2 + 1 = 0$; it asks for $\sqrt{-1}$, which no real number
   supplies. Postulate a brand-new symbol $i$ obeying the single rule $i^2 = -1$, and *nothing
   else changes about arithmetic*. Using only that rule, compute $i^3$, $i^4$, and $i^5$. Describe
   the pattern the powers of $i$ fall into.
2. Admit every expression $a + bi$ with $a, b$ real. Add $(a+bi) + (c+di)$ by collecting like
   terms, and multiply $(a+bi)(c+di)$ by expanding and replacing $i^2$ with $-1$ wherever it
   appears. Write each result back in the shape $(\text{real}) + (\text{real})\,i$.
3. To make sense of division, first multiply $(a+bi)(a-bi)$ out. What kind of number is the
   result — is any $i$ left in it? Use that to rewrite $\dfrac{1}{a+bi}$ (for $a+bi \ne 0$) as a
   single expression of the form $p + qi$.
4. Plot $a+bi$ as the point $(a,b)$ in the plane. Write the distance from that point to the origin.
   Compare its square to the number you obtained in step 3 from $(a+bi)(a-bi)$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Adjoin to the reals a symbol $i$ with $i^2 = -1$. A **complex number** is an expression
$z = a + bi$ with $a, b \in \RR$; $a = \operatorname{Re} z$ is its **real part** and
$b = \operatorname{Im} z$ its **imaginary part**. They add and multiply by the ordinary rules,
using $i^2 = -1$:
$$(a+bi) + (c+di) = (a+c) + (b+d)i, \qquad (a+bi)(c+di) = (ac - bd) + (ad + bc)i.$$
The **conjugate** of $z = a+bi$ is $\bar z = a - bi$, and the **modulus** is
$|z| = \sqrt{a^2 + b^2} \ge 0$, the distance from $z$ to the origin in the **complex plane** (the
point $(a,b)$). The key identity binding them is
$$z\,\bar z = a^2 + b^2 = |z|^2,$$
a *nonnegative real number*, which makes division possible: for $z \ne 0$,
$\dfrac{1}{z} = \dfrac{\bar z}{|z|^2}$. The set $\CC$ of complex numbers is a field, and the powers
of $i$ cycle with period $4$: $i^0=1,\ i^1=i,\ i^2=-1,\ i^3=-i$.

### Proof

The load-bearing claims are that $\CC$ is closed under these operations, that every nonzero $z$ has
a multiplicative inverse, and that $|zw| = |z|\,|w|$.

*Closure and the ring axioms.* Sums and products of $a+bi$ shapes are again of that shape, by the
displayed formulas. Commutativity, associativity, and distributivity are inherited: treat $i$ as a
formal quantity, expand as with real polynomials in $i$, and reduce every $i^2$ to $-1$ — since the
real numbers already satisfy those laws and the reduction $i^2 = -1$ is applied consistently, the
same laws hold for the reduced expressions. The additive identity is $0 = 0 + 0i$ and the
multiplicative identity is $1 = 1 + 0i$.

*The conjugate identity.* By the product formula,
$$z\,\bar z = (a+bi)(a-bi) = \big(a\cdot a - b\cdot(-b)\big) + \big(a\cdot(-b) + b\cdot a\big)i
= (a^2 + b^2) + 0\,i = a^2 + b^2 = |z|^2,$$
which is real and nonnegative, and equals $0$ exactly when $a = b = 0$, i.e. when $z = 0$.

*Inverses.* If $z \ne 0$ then $|z|^2 = a^2 + b^2 \gt 0$, a nonzero real number we may divide by.
Set $w = \dfrac{\bar z}{|z|^2} = \dfrac{a}{a^2+b^2} - \dfrac{b}{a^2+b^2}\,i$. Then
$z\,w = \dfrac{z\,\bar z}{|z|^2} = \dfrac{|z|^2}{|z|^2} = 1$, so $w = z^{-1}$. Thus every nonzero
complex number is invertible and $\CC$ is a field.

*Multiplicativity of the modulus.* Conjugation distributes over products, $\overline{zw} =
\bar z\,\bar w$ (expand both sides on $z = a+bi$, $w = c+di$ and compare). Hence
$$|zw|^2 = (zw)\overline{(zw)} = z w\,\bar z\,\bar w = (z\bar z)(w \bar w) = |z|^2\,|w|^2,$$
and taking nonnegative square roots gives $|zw| = |z|\,|w|$. $\blacksquare$

### Worked Instance

Return to the Hook. Solving $x^2 + 1 = 0$ gives $x^2 = -1$, so $x = \pm i$: the two "missing"
crossings live at $i$ and $-i$ on the imaginary axis. A quadratic with a nonzero real part shows the
general shape: for $x^2 - 2x + 5 = 0$ the quadratic formula gives
$$x = \frac{2 \pm \sqrt{4 - 20}}{2} = \frac{2 \pm \sqrt{-16}}{2} = \frac{2 \pm 4i}{2} = 1 \pm 2i.$$
Check $1 + 2i$: $(1+2i)^2 - 2(1+2i) + 5 = (1 + 4i + 4i^2) - 2 - 4i + 5 = (1 + 4i - 4) - 2 - 4i + 5
= 0$. A division, for good measure:
$$\frac{1}{2 + 3i} = \frac{2 - 3i}{(2+3i)(2-3i)} = \frac{2 - 3i}{4 + 9} = \frac{2}{13} - \frac{3}{13}i,
\qquad |2+3i| = \sqrt{13}.$$

### Pitfalls

- **$\sqrt{a}\,\sqrt{b} = \sqrt{ab}$ fails for negatives.** The rule holds for nonnegative reals
  only. Writing $-1 = i^2 = \sqrt{-1}\sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt{1} = 1$ is the classic
  disaster. Work with $i$ symbolically ($i^2 = -1$); do not apply real radical identities to
  negative radicands.
- **The modulus is a nonnegative real**, never complex: $|a+bi| = \sqrt{a^2+b^2}$, not
  $\sqrt{a^2 + (bi)^2} = \sqrt{a^2 - b^2}$.
- **Conjugate flips only the imaginary part:** $\overline{a+bi} = a - bi$. It distributes over
  $+$ and $\times$, so $\overline{z+w} = \bar z + \bar w$ and $\overline{zw} = \bar z\,\bar w$.
- **$i^2 = -1$, but $\dfrac1i = -i$** (multiply top and bottom by $i$): a common slip is to leave
  $i$ in a denominator.

:::
:::

## Connections

Complex numbers finish the job the **quadratic formula** ([alg-quadratic-formula]) started: once the
discriminant is allowed to go negative, *every* quadratic has two roots. That "always solvable"
promise extends to all degrees in the **Fundamental Theorem of Algebra** ([alg-fta-algebra]), for
which $\CC$ is the natural home. The conjugate and modulus previewed here are the algebraic
skeleton; their geometry (rotation, De Moivre, Euler's formula) is developed in the trig–complex
strand. Recognition trigger: a negative under a square root, a quadratic with no real roots, or any
demand to "solve completely" rather than "solve over $\RR$."
