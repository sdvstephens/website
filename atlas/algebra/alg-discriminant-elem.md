Three quadratics, all cut from the same cloth: $x^2 - 4x + 3$, $x^2 - 4x + 4$, and $x^2 - 4x + 5$.
The first crosses the $x$-axis twice, the second just kisses it once, the third never touches it.
Nudging only the constant term flipped the number of real solutions from two to one to none. Is
there a single number you can compute *before solving* that tells you which of the three worlds a
quadratic lives in?

## Discovery

You already have the quadratic formula: the roots of $ax^2 + bx + c = 0$ ($a \ne 0$) are
$\dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. Interrogate it.

1. The two roots differ *only* through the $\pm$ in front of the square root. For which values of
   the quantity under that root do the "$+$" and "$-$" versions land on two different numbers? For
   which single value do they collapse onto the same number?
2. Call the quantity under the root $\Delta = b^2 - 4ac$. Compute $\Delta$ for each Hook quadratic:
   $x^2 - 4x + 3$, $x^2 - 4x + 4$, $x^2 - 4x + 5$. Line each value up against how many real
   solutions that quadratic actually had.
3. Now push into the third regime: when $\Delta$ is negative, can $\sqrt{\Delta}$ be a real number
   at all? Looking at the completed-square form $\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}$,
   argue what a negative $\Delta$ forces about *real* solutions.
4. Suppose $a, b, c$ are integers and $\Delta \ge 0$. If $\Delta$ is a perfect square, what kind of
   number is $\sqrt{\Delta}$, and therefore what kind of number are the roots? If instead $\Delta$
   is a positive integer that is *not* a perfect square, is $\sqrt{\Delta}$ rational — and are the
   roots? State the condition on $\Delta$ that decides rational-versus-irrational roots.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a real quadratic $ax^2 + bx + c$ ($a \ne 0$), the **discriminant** is
$$\Delta = b^2 - 4ac.$$
Its sign classifies the roots completely:
- $\Delta \gt 0$: two **distinct real** roots.
- $\Delta = 0$: one **repeated (double)** real root, $x = -\dfrac{b}{2a}$.
- $\Delta \lt 0$: **no real** roots — instead a **complex-conjugate pair**
  $\dfrac{-b \pm i\sqrt{-\Delta}}{2a}$.

Moreover, when $a, b, c$ are rational, the roots are **rational iff $\Delta$ is the square of a
rational** (a perfect square, for integer coefficients); a positive non-square $\Delta$ gives a
conjugate pair of irrational roots. The discriminant is thus a single number read off the
coefficients that decides the *nature* of the roots without solving.

### Proof

The roots are $r_{\pm} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ with $\Delta = b^2 - 4ac$ and $a \ne 0$.

*Case $\Delta \gt 0$.* Then $\sqrt{\Delta}$ is a positive real, so $-b + \sqrt{\Delta}$ and
$-b - \sqrt{\Delta}$ differ (they differ by $2\sqrt{\Delta} \ne 0$), and dividing by the nonzero
$2a$ preserves the inequality. Two distinct real roots.

*Case $\Delta = 0$.* Then $\sqrt{\Delta} = 0$, so $r_+ = r_- = -\dfrac{b}{2a}$: a single value.
It is genuinely a *repeated* root because the completed-square form reads
$\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2} = 0$, i.e. $ax^2+bx+c = a\left(x+\frac{b}{2a}\right)^2$,
a squared linear factor — the root has multiplicity two.

*Case $\Delta \lt 0$.* Then $\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}$ has a negative
right side (as $4a^2 \gt 0$), while a real square is $\ge 0$; so no real $x$ works. Over $\CC$ write
$\sqrt{\Delta} = i\sqrt{-\Delta}$ with $-\Delta \gt 0$, giving $r_{\pm} = \dfrac{-b \pm i\sqrt{-\Delta}}{2a}$,
two numbers that are complex conjugates of each other.

*Rationality (rational $a,b,c$).* Suppose $\Delta \ge 0$. If $\Delta = q^2$ for a rational $q$,
then $r_{\pm} = \frac{-b \pm q}{2a}$ is a ratio of rationals, hence rational. Conversely, if a root
$r$ is rational, then from $2ar + b = \pm\sqrt{\Delta}$ we get $\sqrt{\Delta} = |2ar + b|$, a
rational number, so $\Delta = (2ar+b)^2$ is the square of a rational. If $\Delta \lt 0$ the roots
are non-real, hence not rational, and $\Delta$ is not a square of any real. Thus, over the
rationals, rational roots occur exactly when $\Delta$ is a perfect (rational) square. $\blacksquare$

### Worked Instance

The Hook, decided without solving. For $x^2 - 4x + c$ we have $\Delta = 16 - 4c$:
- $x^2 - 4x + 3$: $\Delta = 16 - 12 = 4 \gt 0$ — two distinct real roots (indeed $1$ and $3$; and
  $4$ is a perfect square, so they are rational).
- $x^2 - 4x + 4$: $\Delta = 16 - 16 = 0$ — one double root $x = -\frac{-4}{2} = 2$, matching
  $x^2 - 4x + 4 = (x-2)^2$.
- $x^2 - 4x + 5$: $\Delta = 16 - 20 = -4 \lt 0$ — no real roots; the conjugate pair is
  $\frac{4 \pm \sqrt{-4}}{2} = 2 \pm i$.

Perfect-square test in action: $x^2 - 4x + 1$ has $\Delta = 16 - 4 = 12$, positive but *not* a
perfect square, so its roots $2 \pm \sqrt 3$ are irrational; whereas $x^2 - 5x + 6$ has
$\Delta = 25 - 24 = 1$, a perfect square, so its roots $2$ and $3$ are rational.

### Pitfalls

- **$b^2$ is never negative.** Even when $b \lt 0$, $b^2 \gt 0$; the sign of $\Delta$ comes from the
  contest between $b^2$ and $4ac$.
- **$-4ac$ can flip things automatically.** If $a$ and $c$ have opposite signs then $-4ac \gt 0$, so
  $\Delta \gt 0$ no matter what — a quadratic with $ac \lt 0$ always has two distinct real roots.
- **$\Delta = 0$ means one root, not zero roots.** It is a *repeated* real root (multiplicity two),
  the tangent-to-the-axis case — not "no solution."
- **$\Delta \lt 0$ is "no *real* roots," not "no roots."** Over $\CC$ there are still two roots, a
  conjugate pair.
- **Perfect-square test needs rational coefficients.** "$\Delta$ a perfect square $\Rightarrow$
  rational roots" presumes $a, b, c$ rational; it says nothing for irrational coefficients.
- **Keep the $a$ in $4ac$.** For non-monic quadratics $\Delta = b^2 - 4ac$, not $b^2 - 4c$.

:::
:::

## Connections

The discriminant is the radicand of the quadratic formula ([alg-quadratic-formula]) promoted to a
diagnostic: one number, computed from the coefficients, settling count and nature of the roots
before any solving. It generalizes far beyond the quadratic — to the discriminant of higher-degree
polynomials and to resultants ([alg-discriminant-resultant]), where "$\Delta = 0$" still marks a
repeated root. Recognition trigger: any question of the form "how many real roots?", "for what
parameter value does this have a double / two / no real root(s)?", or "are the roots rational?" —
set $\Delta \gt 0$, $\Delta = 0$, or $\Delta \lt 0$ (and test whether $\Delta$ is a perfect square).

## History

That a single quantity built from the coefficients decides the nature of a quadratic's roots was implicit in every solution of quadratics from Brahmagupta and al-Khwarizmi onward, since they all worried about whether a square root could be taken. Recognizing $b^2 - 4ac$ as an object worth naming came with the symbolic algebra of Viète and Descartes and with the seventeenth-century acceptance of complex numbers, which reframed a "negative discriminant" as signaling complex rather than nonexistent roots. The word "discriminant" itself was coined much later, by James Joseph Sylvester in $1851$, as part of the nineteenth-century theory of invariants developed with Arthur Cayley, which studied such coefficient-expressions for polynomials of every degree. Gauss's work on equations gave the idea further depth. It mattered because the discriminant lets one read off how many real solutions exist without solving at all — the first example of a powerful principle: extracting qualitative information from an equation's structure.
