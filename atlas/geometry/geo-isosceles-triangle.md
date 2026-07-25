Fold a triangular scrap of paper so one corner lands exactly on another and the crease runs
to the third corner. When does this fold work perfectly, edge matching edge? And when it does,
what happens to the two corners you brought together — do their angles have to be equal, or is
that a lucky accident of the particular scrap?

## Discovery

1. Cut a triangle $ABC$ with $AB = AC$ (two sides the same length). Fold it so vertex $B$
   lands on vertex $C$, creasing from the apex $A$. Since $AB = AC$, does side $AB$ lie exactly
   along side $AC$ after the fold? What does the fold do to the angle at $B$ — where does it
   land?
2. Give the fold a name as a *correspondence*: it matches $A$ to $A$, $B$ to $C$, and $C$ to
   $B$. Treat the triangle-read-one-way, $\triangle ABC$, and the same triangle-read-the-other-
   way, $\triangle ACB$, as two triangles to compare. Which sides and which angle at $A$ do
   these two readings share, given $AB = AC$?
3. From step 2 you have two sides and the angle *between* them matching across the two
   readings. Which congruence criterion applies, and what does it let you conclude about the
   angle at $B$ versus the angle at $C$?
4. Now run it backwards. Start instead from a triangle where the angle at $B$ equals the angle
   at $C$ (nothing said about the sides). Drop the bisector of the apex angle $A$ to meet
   $\overline{BC}$, or reuse the two-readings idea. Can you force $AB = AC$? What would that say
   about "equal base angles"?
5. Push to the extreme: a triangle with *all three* sides equal. Apply the result of step 3 to
   each pair of equal sides in turn. What must be true of all three angles?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The Isosceles Triangle Theorem (Base Angles Theorem and its converse).** In a triangle, two
sides are congruent **if and only if** the two angles opposite them are congruent.

- **(Forward)** If $AB = AC$, then $\angle B \cong \angle C$ (the *base angles* — the angles at
  the ends of the unequal *base* $\overline{BC}$ — are equal).
- **(Converse)** If $\angle B \cong \angle C$, then $AB = AC$ (a triangle with two equal angles
  is isosceles, the equal sides being those opposite the equal angles).

**Corollary (equilateral $\Rightarrow$ equiangular).** If all three sides of a triangle are
equal, then all three angles are equal (each $60^\circ$), and conversely. This is the medieval
*pons asinorum*, the "bridge of asses" — the first real test of a geometry student.

### Proof

Both directions come from a single elegant idea: compare the triangle with *itself* under the
vertex-swapping correspondence. Everything rests on SAS.

**Forward direction.** Let $\triangle ABC$ have $AB = AC$. Compare $\triangle ABC$ with
$\triangle ACB$ — the same triangle, but with the correspondence $A\leftrightarrow A$,
$B\leftrightarrow C$, $C\leftrightarrow B$. Check the SAS parts under this correspondence:
$$AB = AC \ (\text{given}),\qquad \angle A \cong \angle A \ (\text{same angle}),\qquad
AC = AB \ (\text{given, the other order}).$$
So two sides and the *included* angle $\angle A$ match, and by SAS,
$\triangle ABC \cong \triangle ACB$. By CPCTC the corresponding angles at $B$ and $C$ are
congruent: $\angle B \cong \angle C$.

**Converse direction.** Let $\triangle ABC$ have $\angle B \cong \angle C$. Compare
$\triangle ABC$ with $\triangle ACB$ again, now checking an angle-side-angle-type match — but to
stay strictly within SAS we argue as follows. Under the correspondence $A\leftrightarrow A$,
$B\leftrightarrow C$, $C\leftrightarrow B$, we have $\angle B \cong \angle C$ (given),
$BC = CB$ (the same segment), and $\angle C \cong \angle B$ (given, other order). This matches
two angles and the *included* side $\overline{BC}$ across the two readings; by ASA (itself a
consequence of SAS) $\triangle ABC \cong \triangle ACB$. By CPCTC, the sides corresponding
under the swap are congruent: $AB \cong AC$. Hence the triangle is isosceles.

*(Alternative for the forward direction, avoiding self-correspondence: drop the bisector of
$\angle A$, meeting $\overline{BC}$ at $D$. Then $AB = AC$, $\angle BAD \cong \angle CAD$, and
$AD = AD$, so $\triangle ABD \cong \triangle ACD$ by SAS, giving $\angle B \cong \angle C$ by
CPCTC — and, as a bonus, $BD = CD$ with $\angle ADB \cong \angle ADC$, so the bisector is also
the median and the altitude.)*

**Corollary.** If $AB = BC = CA$, apply the forward theorem to the pair $AB = AC$ to get
$\angle B \cong \angle C$, and to the pair $BA = BC$ to get $\angle A \cong \angle C$. Then all
three angles are equal; since they sum to $180^\circ$, each is $60^\circ$. The converse (equal
angles force equal sides) follows the same way from the converse direction. $\blacksquare$

### Worked Instance

Resolve the Hook, then compute. The paper fold works *exactly* when $AB = AC$: then the fold is
the self-correspondence $\triangle ABC \cong \triangle ACB$, side $AB$ lands on side $AC$, and
the corner at $B$ lands on the corner at $C$ — so those two base angles must be equal, no luck
involved. That is the forward theorem, physically.

Numerically: an isosceles triangle has apex angle $\angle A = 40^\circ$ and $AB = AC$. The base
angles are equal, say each $x$, and the three angles sum to $180^\circ$:
$$40^\circ + x + x = 180^\circ \ \Longrightarrow\ 2x = 140^\circ \ \Longrightarrow\
x = 70^\circ.$$
So $\angle B = \angle C = 70^\circ$ — recovered from the *single* fact that the two equal sides
force equal base angles. Conversely, had we been told $\angle B = \angle C = 70^\circ$, the
converse would tell us $AB = AC$ before any side was measured.

### Pitfalls

- **"Base angles" are opposite the equal *sides*.** In $AB = AC$, the equal sides meet at the
  apex $A$; the base is $\overline{BC}$ and the base angles are $\angle B, \angle C$. Pair each
  equal angle with the side *across* from it, not next to it.
- **The converse is a separate claim.** "Equal sides $\Rightarrow$ equal angles" and "equal
  angles $\Rightarrow$ equal sides" are two theorems; proving one does not give the other for
  free. The theorem asserts both (an "if and only if").
- **Don't assume the bisector splits the base evenly *before* proving it.** In the alternative
  proof, that the apex bisector is also the median/altitude is a *conclusion* from the
  congruence, not a starting assumption.
- **Equilateral vs. equiangular.** All-sides-equal gives all-angles-equal ($60^\circ$ each) and
  vice versa, but a general triangle has neither; do not import the $60^\circ$ into a merely
  isosceles triangle.
- **Self-correspondence is legitimate.** Comparing $\triangle ABC$ with $\triangle ACB$ feels
  like comparing a thing to itself, but it is a valid correspondence and the cleanest route;
  resist the urge to call it circular.

:::
:::

## Connections

The Isosceles Triangle Theorem is the first substantial payoff of SAS (`geo-sas-congruence`):
its trick — comparing a triangle to its own mirror reading — converts a symmetry you can *see*
into an equality you can *prove*. It draws the tight link between metric symmetry (equal sides)
and angular symmetry (equal angles), and its corollary ties equilateral to equiangular. Downstream
it powers the perpendicular bisector characterization (`geo-perpendicular-bisector`): a point
equidistant from two others sits atop an isosceles triangle, so its foot bisects the base at a
right angle — the alternative proof already exposed that the apex bisector is also median and
altitude. Recognition trigger: whenever a figure shows two equal sides, immediately mark the two
base angles equal (and vice versa) — and reach for the theorem the moment "equidistant,"
"equilateral," or a fold/symmetry appears.

## History

The theorem that a triangle with two equal sides has two equal base angles is *Elements* I.5 (c. 300 BC), famous through the Middle Ages as the *pons asinorum*, the "bridge of asses," both for its bridge-like diagram and as the first real test that separated students who could reason from those who could not. Proclus credits the underlying insight to Thales of Miletus in the sixth century BC, making it among the oldest recorded geometric proofs. Euclid's own argument extends the equal sides and compares two overlapping triangles, a route more elaborate than necessary. Pappus of Alexandria (c. 300 AD) later gave a strikingly economical proof by comparing the triangle with its own mirror image, a method so slick it was rediscovered by automated theorem provers in the twentieth century. The result and its converse underpin nearly every later fact about symmetric figures.
