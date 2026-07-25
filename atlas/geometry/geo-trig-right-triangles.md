Draw a right triangle and set one acute angle to exactly $40^\circ$. Measure the side across from that
angle, divide by the hypotenuse, and note the number. Now draw a wholly different right triangle — twice
as tall, or three times, drawn by a friend across the room — but keep that same $40^\circ$ corner. Take
the same ratio again. It doesn't budge. A single angle, carrying no size of its own, somehow fixes a ratio
of lengths to the last decimal. Why should the angle alone get to decide?

## Discovery

Let $\theta$ be a fixed acute angle. In a right triangle containing $\theta$, call the side across from
$\theta$ the **opposite** leg, the other leg (touching $\theta$ and the right angle) the **adjacent** leg,
and the longest side the **hypotenuse**.

1. Draw two right triangles that both contain the angle $\theta$ but are plainly different sizes. Each
   already has a right angle and the angle $\theta$. Using the fact that a triangle's angles sum to
   $180^\circ$, say what their third angles must be, and then name the similarity criterion that these
   equal angles trigger. What is the relationship between your two triangles?
2. Similar triangles have corresponding sides in a constant ratio. For each of your two triangles write
   the fraction $\dfrac{\text{opposite}}{\text{hypotenuse}}$. Pass from the first triangle to the second by
   the scale factor $k$ that similarity guarantees: multiply top and bottom of the first fraction by $k$.
   What happens to the value of the fraction, and so how do the two triangles' ratios compare?
3. Nothing in step 2 used the size of the triangles — only the angle $\theta$. The same argument works for
   $\dfrac{\text{adjacent}}{\text{hypotenuse}}$ and for $\dfrac{\text{opposite}}{\text{adjacent}}$. So each
   of these three ratios is settled by $\theta$ alone. Invent a notation: three functions, each taking the
   angle $\theta$ and returning one of these ratios. Write down the three definitions you have just been
   forced into.
4. Take your first two functions — opposite-over-hypotenuse and adjacent-over-hypotenuse. Square each and
   add them. Put the sum over the common denominator $\text{hyp}^2$, so the numerator is
   $\text{opp}^2+\text{adj}^2$. Now recall which theorem relates the two legs of a right triangle to its
   hypotenuse, apply it to that numerator, and simplify the fraction. What single number does the sum
   collapse to, no matter what $\theta$ is?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix an acute angle $\theta$ inside a right triangle, with legs labeled *opposite* and *adjacent* relative
to $\theta$ and the *hypotenuse* opposite the right angle. Define
$$\sin\theta=\frac{\text{opp}}{\text{hyp}},\qquad
\cos\theta=\frac{\text{adj}}{\text{hyp}},\qquad
\tan\theta=\frac{\text{opp}}{\text{adj}}.$$
These are the **sine**, **cosine**, and **tangent** of $\theta$. They are **well-defined**: any two right
triangles sharing the acute angle $\theta$ are similar (AA), so each ratio depends only on $\theta$, not on
the size of the triangle you happened to draw. Because $\tan\theta=\dfrac{\text{opp}/\text{hyp}}{\text{adj}/\text{hyp}}$,
we also have $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$.

They obey the **Pythagorean identity**
$$\sin^2\theta+\cos^2\theta=1,$$
valid for every acute $\theta$. And they take clean values at the famous angles:
$$\sin 30^\circ=\tfrac12,\quad \cos 30^\circ=\tfrac{\sqrt3}{2},\qquad
\sin 45^\circ=\cos 45^\circ=\tfrac{\sqrt2}{2},\qquad
\sin 60^\circ=\tfrac{\sqrt3}{2},\quad \cos 60^\circ=\tfrac12.$$

### Proof

**Well-definedness (the ratios depend on $\theta$ only).** Let $\triangle_1$ and $\triangle_2$ be any two
right triangles, each with a right angle and an acute angle equal to $\theta$. In each triangle the three
angles sum to $180^\circ$, so the third angle equals $180^\circ-90^\circ-\theta=90^\circ-\theta$ in both.
The two triangles therefore have all three angles equal; by AA similarity (`geo-similarity-def`),
$\triangle_1\sim\triangle_2$ with some scale factor $k$, meaning every side of $\triangle_2$ is $k$ times
the corresponding side of $\triangle_1$. Writing $\text{opp}_2=k\cdot\text{opp}_1$ and
$\text{hyp}_2=k\cdot\text{hyp}_1$,
$$\frac{\text{opp}_2}{\text{hyp}_2}=\frac{k\cdot\text{opp}_1}{k\cdot\text{hyp}_1}=\frac{\text{opp}_1}{\text{hyp}_1},$$
the factor $k$ cancelling. The identical cancellation holds for adjacent-over-hypotenuse and for
opposite-over-adjacent. Hence all three ratios are the same in every right triangle containing $\theta$, so
$\sin\theta,\cos\theta,\tan\theta$ are functions of $\theta$ alone. $\;$

**The Pythagorean identity.** In one such triangle let the legs be $\text{opp}$ and $\text{adj}$ and the
hypotenuse $\text{hyp}$. Then
$$\sin^2\theta+\cos^2\theta
=\frac{\text{opp}^2}{\text{hyp}^2}+\frac{\text{adj}^2}{\text{hyp}^2}
=\frac{\text{opp}^2+\text{adj}^2}{\text{hyp}^2}.$$
By the Pythagorean theorem (`geo-pythagorean-theorem`), the two legs satisfy
$\text{opp}^2+\text{adj}^2=\text{hyp}^2$, so the numerator equals the denominator and the fraction equals
$1$. Thus $\sin^2\theta+\cos^2\theta=1$ for every acute $\theta$.

**The special values.** A $45^\circ$-$45^\circ$-$90^\circ$ triangle is right and isosceles: its two legs
are equal, say both $1$, so by Pythagoras the hypotenuse is $\sqrt{1^2+1^2}=\sqrt2$. Hence
$\sin 45^\circ=\cos 45^\circ=\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{2}$. For a $30^\circ$-$60^\circ$-$90^\circ$
triangle, reflect it across its longer leg: the two copies form an equilateral triangle, so the side
opposite the $30^\circ$ angle is half the hypotenuse. Taking hypotenuse $2$, the short leg is $1$ and the
long leg is $\sqrt{2^2-1^2}=\sqrt3$. Reading ratios: $\sin 30^\circ=\tfrac12$, $\cos 30^\circ=\tfrac{\sqrt3}{2}$,
and $\sin 60^\circ=\tfrac{\sqrt3}{2}$, $\cos 60^\circ=\tfrac12$. $\blacksquare$

### Worked Instance

Return to the Hook with concrete triangles. A $3$-$4$-$5$ right triangle has legs $3$ and $4$ and hypotenuse
$5$. Let $\theta$ be the angle opposite the leg of length $3$. Then
$$\sin\theta=\tfrac35,\qquad \cos\theta=\tfrac45,\qquad \tan\theta=\tfrac34,$$
and, as a check, $\sin^2\theta+\cos^2\theta=\tfrac{9}{25}+\tfrac{16}{25}=\tfrac{25}{25}=1$. Scale the whole
triangle to $6$-$8$-$10$ and the ratios are $\tfrac{6}{10}=\tfrac35$, $\tfrac{8}{10}=\tfrac45$,
$\tfrac{6}{8}=\tfrac34$ — unchanged, exactly as the Hook promised.

For the exact angles: a $45^\circ$ right isosceles triangle gives $\sin 45^\circ=\tfrac{\sqrt2}{2}\approx0.707$,
and a $30^\circ$-$60^\circ$-$90^\circ$ triangle gives $\sin 30^\circ=\tfrac12$ and $\cos 30^\circ=\tfrac{\sqrt3}{2}$.
These are the values you can quote without ever drawing the triangle again.

### Pitfalls

- **Match each ratio to its name (SOH-CAH-TOA).** $\sin=\tfrac{\text{opp}}{\text{hyp}}$,
  $\cos=\tfrac{\text{adj}}{\text{hyp}}$, $\tan=\tfrac{\text{opp}}{\text{adj}}$. Swapping opposite and
  adjacent is the classic slip; the mnemonic exists precisely to stop it.
- **The hypotenuse is the denominator for sine and cosine only.** Tangent is leg over leg — the hypotenuse
  never appears in it.
- **These are ratios, hence unitless.** $\sin\theta$ is a pure number; it is not a length. Multiplying a
  hypotenuse by $\sin\theta$ recovers a length, but $\sin\theta$ itself carries no units.
- **Acute angles only, for now.** This definition lives inside a right triangle, where $\theta$ must be
  strictly between $0^\circ$ and $90^\circ$. Extending sine and cosine to right, obtuse, or negative angles
  needs a new idea (the unit circle), not this triangle picture.
- **Which angle you fix matters.** In the $3$-$4$-$5$ triangle the angle opposite the $4$ has
  $\sin=\tfrac45$, not $\tfrac35$. Always identify *which* acute angle is $\theta$ before naming the legs.

:::
:::

## Connections

This node fuses its two prereqs: `geo-similarity-def` is what makes the ratios well-defined (AA forces the
size out), and `geo-pythagorean-theorem` is what turns $\sin^2\theta+\cos^2\theta$ into $1$. From these
acute-angle ratios the atlas moves outward: `geo-trig-unit-circle` extends $\sin$ and $\cos$ to every angle
by placing the triangle inside a circle of radius $1$, and `geo-law-sines-cosines-elem` uses these same
ratios to relate the sides and angles of *any* triangle, not just right ones. Recognition trigger: a right
triangle with one known acute angle and one known side, asking for another side — or any "ratio that depends
only on the angle."

## History

Trigonometry began not with the sine but with chords: Hipparchus of Nicaea (c. 150 BCE) is credited with the first trigonometric table, and Claudius Ptolemy's *Almagest* (2nd century CE) tabulated chord lengths for astronomy. The shift to the half-chord ratios we call sine and cosine was made by Indian mathematicians, notably Aryabhata (5th century CE), whose *jya* passed through Arabic into the Latin *sinus*. These ratios were pursued to predict the positions of the stars and planets, where right triangles on the celestial sphere had to be solved numerically. That the ratios depend only on the angle — a consequence of similar triangles — is exactly what makes tabulating them worthwhile.
