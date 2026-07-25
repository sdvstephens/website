$\sqrt{50}$ looks messy, yet it equals the tidy $5\sqrt2$; and $\tfrac1{\sqrt2}$, awkward with a root
downstairs, equals $\tfrac{\sqrt2}{2}$. Radicals can almost always be tidied. What rule lets you pull
a factor out from under a root, and why is moving the root out of a denominator always allowed?

## Discovery

1. Compute $\sqrt4\cdot\sqrt9$ and, separately, $\sqrt{4\cdot 9}=\sqrt{36}$. Then compare
   $\sqrt4\cdot\sqrt{25}$ with $\sqrt{100}$. What relationship between $\sqrt a\cdot\sqrt b$ and
   $\sqrt{ab}$ do these suggest (for $a,b\ge 0$)?
2. Use the relationship from step $1$ to simplify $\sqrt{50}$: find the largest *perfect square* that
   divides $50$, split $\sqrt{50}$ into a product of two roots accordingly, and take the exact root of
   the perfect-square part outside.
3. Turn to sums. Is $\sqrt9+\sqrt{16}$ equal to $\sqrt{25}$? Compute both. Now, treating $\sqrt3$ as a
   single repeated object, combine $2\sqrt3 + 5\sqrt3$ the way you'd add $2x+5x$. When *can* two
   radical terms be combined?
4. Rationalize $\tfrac1{\sqrt2}$: multiply the fraction by a cleverly chosen form of $1$ (something
   over itself) so that the denominator becomes a whole number. What did you multiply by, and why
   does it not change the value?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Radical arithmetic.** For $a,b\ge 0$:
- **Product rule:** $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$, and (for $b\gt 0$) $\dfrac{\sqrt a}{\sqrt b} =
  \sqrt{\dfrac ab}$.
- **Simplify** by pulling out perfect-square factors: $\sqrt{50} = \sqrt{25\cdot 2} = \sqrt{25}\,
  \sqrt2 = 5\sqrt2$. A radical is in *simplest form* when the radicand has no perfect-square factor
  $\gt 1$.
- **Combine like radicals** (same radicand) as like terms: $m\sqrt k + n\sqrt k = (m+n)\sqrt k$;
  *unlike* radicals ($\sqrt2 + \sqrt3$) do **not** combine, and roots do not add over sums
  ($\sqrt{a+b}\ne\sqrt a+\sqrt b$).
- **Rationalize** a denominator by multiplying by $1$ in the form $\tfrac{\sqrt b}{\sqrt b}$:
  $\dfrac1{\sqrt2} = \dfrac1{\sqrt2}\cdot\dfrac{\sqrt2}{\sqrt2} = \dfrac{\sqrt2}{2}$.

### Proof

*Product rule.* Let $a,b\ge 0$. Then $\sqrt a\,\sqrt b\ge 0$ (a product of nonnegatives), and squaring
it,
$$(\sqrt a\,\sqrt b)^2 = (\sqrt a)^2(\sqrt b)^2 = a\,b,$$
using that squaring a product multiplies the squares. So $\sqrt a\,\sqrt b$ is a *nonnegative* number
whose square is $ab$; by the uniqueness of the principal square root, it **is** $\sqrt{ab}$. The
quotient form follows by applying this to $\sqrt{\tfrac ab}\,\sqrt b = \sqrt{\tfrac ab\cdot b} =
\sqrt a$, then dividing by $\sqrt b\gt 0$.

*Simplification.* If $a = s^2\cdot t$ with $s^2$ a perfect square, the product rule gives
$\sqrt a = \sqrt{s^2}\,\sqrt t = s\sqrt t$ (since $\sqrt{s^2}=s$ for $s\ge0$), pulling $s$ outside.
Choosing $s^2$ the *largest* perfect-square factor leaves a $t$ with no square factor $\gt1$ —
simplest form.

*Like radicals.* $m\sqrt k + n\sqrt k = (m+n)\sqrt k$ by the distributive law, treating $\sqrt k$ as a
common factor. Unlike radicals share no such factor, so they stay put; and $\sqrt{a+b}=\sqrt a+\sqrt
b$ is false in general because squaring the right side gives $a+b+2\sqrt{ab}\ne a+b$ unless
$ab=0$.

*Rationalizing.* $\tfrac{\sqrt b}{\sqrt b}=1$ for $b\gt 0$, so multiplying by it preserves value
(fraction multiplication). It turns a denominator $\sqrt b$ into $\sqrt b\,\sqrt b=(\sqrt b)^2=b$, a
whole number:
$$\frac1{\sqrt2} = \frac1{\sqrt2}\cdot\frac{\sqrt2}{\sqrt2} = \frac{\sqrt2}{(\sqrt2)^2} = \frac{\sqrt2}{2}. \qquad \blacksquare$$

### Worked Instance

The Hook's $\sqrt{50}$: the largest perfect square dividing $50$ is $25$, so $\sqrt{50} = \sqrt{25\cdot
2} = \sqrt{25}\,\sqrt2 = 5\sqrt2$. Now combine a sum: $\sqrt{50} + \sqrt{8} = 5\sqrt2 + \sqrt{4\cdot 2}
= 5\sqrt2 + 2\sqrt2 = 7\sqrt2$ — possible only *after* simplifying both to the same radicand $\sqrt2$.
And the awkward $\tfrac1{\sqrt2}$ rationalizes to $\tfrac{\sqrt2}{2}\approx\tfrac{1.414}{2}\approx
0.707$, matching $1\div 1.414$, but now with an integer denominator that is easy to add or estimate.

### Pitfalls

- **Roots do not distribute over $+$ or $-$.** $\sqrt{a+b}\ne\sqrt a+\sqrt b$: $\sqrt{9+16}=5$, not
  $3+4=7$. The product rule is for *products*, not sums.
- **Only like radicals combine.** $2\sqrt3+5\sqrt3=7\sqrt3$, but $\sqrt2+\sqrt3$ stays as is; simplify
  first, since hidden like radicals ($\sqrt{50}$ and $\sqrt8$) may only match after reduction.
- **Pull out the *largest* square, or simplify twice.** $\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$; using
  $\sqrt{50}=\sqrt{5\cdot10}$ gets nowhere.
- **Rationalizing multiplies both top and bottom.** $\tfrac1{\sqrt2}\cdot\tfrac{\sqrt2}{\sqrt2}$, not
  just the bottom; multiplying only the denominator changes the value.

:::
:::

## Connections

Radical arithmetic is the product rule $\sqrt{ab}=\sqrt a\sqrt b$ (from uniqueness of the principal
root) plus the distributive law for like terms and multiply-by-one for rationalizing — fraction
multiplication reused. It is the standard-form machinery for exact answers in geometry (Pythagorean
lengths), the quadratic formula, and trigonometric values. Recognition trigger: a root with a
square factor inside, a sum of radicals, or a root stuck in a denominator all call for this toolkit.

## History

Calculating with radicals — rules like $\sqrt{a}\,\sqrt{b}=\sqrt{ab}$ and the simplification of surds — was developed by medieval Islamic and Renaissance European algebraists as they pushed beyond the rationals. The word "surd" (from Latin *surdus*, "deaf" or "mute," itself translating an Arabic rendering of Euclid's "irrational") reflects the sense that these quantities were somehow inexpressible. Al-Khwārizmī and later Islamic mathematicians manipulated roots systematically, and the Italian algebraists of the sixteenth century — Cardano, Bombelli, and their circle — handled nested and complicated radicals while solving cubic and quartic equations, with Rafael Bombelli's *Algebra* (1572) proving especially bold in computing with roots of negative numbers. The radical sign and modern index notation came from Rudolff, Stevin, and Descartes. This mattered because fluent radical arithmetic was essential to solving polynomial equations and became a template for computing in more general number fields.
