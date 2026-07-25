Which is larger, $\tfrac47$ or $\tfrac58$? The numerators disagree with the denominators about who
should win, and you can't eyeball it. Yet a single pair of products — $4\cdot 8$ against $5\cdot 7$
— settles it instantly. Why does cross-multiplying rank two fractions?

## Discovery

1. Comparing $\tfrac35$ and $\tfrac45$ is easy: same-size pieces, so more pieces wins. State which
   is bigger and why. What made this case effortless?
2. Now $\tfrac47$ versus $\tfrac58$ have different pieces. Reuse the step-$1$ trick by first
   re-cutting both to a *common denominator* (any common one will do). Rewrite each fraction over the
   shared bottom.
3. With both over the same denominator, whichever has the bigger *numerator* is bigger. Write down
   those two new numerators. Notice what each one is — a product of one fraction's top with the other's
   bottom. Which two products are you actually comparing?
4. From step $3$, state a test using only $a,b,c,d$ (all denominators positive) for deciding whether
   $\tfrac ab \lt \tfrac cd$, without ever finishing the division.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Cross-multiplication test.** For fractions $\tfrac ab$ and $\tfrac cd$ with **positive**
denominators $b,d\gt 0$,
$$\frac ab \lt \frac cd \iff ad \lt bc, \qquad \frac ab = \frac cd \iff ad = bc, \qquad \frac ab \gt \frac cd \iff ad \gt bc.$$
Compare $ad$ (numerator of the first times denominator of the second) with $bc$ (the other pairing):
the larger product marks the larger fraction. The trick is just "put both over $bd$ and compare
numerators," with the common denominator never written down. If a denominator is negative, make it
positive first (move the sign to the numerator), or the inequality can flip.

### Proof

Give both fractions the common denominator $bd$, which is positive since $b,d\gt 0$. By equivalent
fractions,
$$\frac ab = \frac{ad}{bd}, \qquad \frac cd = \frac{cb}{bd}.$$
These are $ad$ and $cb$ copies of the *same* unit piece $\tfrac1{bd}$. Copies of one fixed positive
piece preserve order: more copies is a larger amount, so
$$\frac ab \lt \frac cd \iff \frac{ad}{bd} \lt \frac{cb}{bd} \iff ad \lt cb,$$
and identically for $=$ and $\gt$. (Note $cb=bc$.) The requirement $b,d\gt 0$ is essential: it keeps
the shared denominator $bd$ positive, so that "more copies" really does mean "bigger." With a
negative denominator the piece $\tfrac1{bd}$ would be a *removal*, reversing the comparison — hence
normalize signs onto the numerators first. $\blacksquare$

### Worked Instance

The Hook: compare $\tfrac47$ and $\tfrac58$. Cross-multiply: $4\cdot 8 = 32$ and $7\cdot 5 = 35$.
Since $32 \lt 35$, we get $\tfrac47 \lt \tfrac58$. Behind the scenes both were $\tfrac{32}{56}$ and
$\tfrac{35}{56}$, and $32$ sixths-of-an-eighth is less than $35$ of them. A tie:
$\tfrac{6}{10}$ versus $\tfrac35$ gives $6\cdot5=30$ and $10\cdot3=30$, equal products, so the
fractions are equal — the same test that detects equality also detects order.

### Pitfalls

- **Denominators must be positive first.** With a negative denominator the direction can flip; move
  any sign up to the numerator before cross-multiplying.
- **Match each numerator with the *other* denominator.** Compare $ad$ with $bc$, not $ac$ with $bd$;
  crossing the wrong way scrambles the test.
- **Bigger denominator does not mean bigger fraction.** $\tfrac{1}{100}\lt\tfrac{1}{2}$; more pieces
  can mean tinier pieces. Never compare tops alone or bottoms alone.
- **Equal cross-products means equal fractions**, not "close" — it is the exact equality test $ad=bc$.

:::
:::

## Connections

Comparison is "common denominator, compare numerators" with the denominator kept implicit; it rests
on equivalent fractions and multiplication. It is the engine of solving proportions (equal ratios
detected by $ad=bc$), of ordering rates and prices, and of checking a computed fraction against a
target. Recognition trigger: any "which is bigger/smaller," "is this ratio equal to that," or
"order these fractions" invites cross-multiplication.

## History

Comparing fractions — deciding which of two parts is larger — was central to ancient commerce, music, and astronomy, and the Greeks turned it into deep theory. Eudoxus' theory of proportion in Book V of Euclid's *Elements* (c. 300 BCE) gave a rigorous criterion for when one ratio exceeds another, cross-multiplying magnitudes in a way that anticipates the modern "compare $ad$ with $bc$" test. Indian and Arabic mathematicians handled fraction comparison computationally through common denominators, methods that reached Europe with Fibonacci. The cross-multiplication rule and the ordering of $\QQ$ were placed on fully rigorous footing in the nineteenth-century construction of the rationals as an ordered field by Dedekind and others. This mattered because a clear, total ordering of the rationals is precisely what exposes the "gaps" between them — gaps that Dedekind's cuts would later fill to build the real numbers.
