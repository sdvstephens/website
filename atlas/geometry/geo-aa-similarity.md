To match two triangles' *shapes* you would think you must check three angles and three side
ratios — six agreements. Yet a draftsman fixes a triangle's shape with just two angles; the third
angle and all three side ratios come along for free. How can two little angle equalities lock down
every remaining proportion?

## Discovery

Two triangles $\triangle ABC$ and $\triangle A'B'C'$ are given with $\angle A=\angle A'$ and
$\angle B=\angle B'$.

1. The three angles of any triangle add to a straight angle (`geo-triangle-angle-sum`). Using that,
   what can you conclude about the remaining pair $\angle C$ and $\angle C'$?
2. Try to *defeat* the idea that angles fix the shape. Draw a ray from a point $A$, and a second ray
   from $A$ making a fixed angle — say $50^\circ$ — so the two rays' directions are locked. Now you
   want the far vertex $B$ on the first ray, with the triangle's angle at $B$ equal to a fixed
   $60^\circ$; that condition fixes the *direction* of the side $BC$. As you slide $B$ farther out
   along the first ray (keeping both angle conditions), does the triangle merely grow, or does its
   set of side-length *ratios* actually change?
3. From step $2$, form a conjecture: does fixing two angles (hence all three) determine a triangle's
   shape up to scale — that is, force its three side ratios to be a single common value — or can two
   triangles share all three angles yet have genuinely different side-length ratios?
4. To *test* a conjectured common ratio, you will need a way to convert "a line parallel to a side"
   into "cuts the other sides proportionally." Set up the picture: in $\triangle ABC$ a line meets
   $AB$ at $D$ and $AC$ at $E$ with $DE \parallel BC$. Which pairs of angles does the parallel force
   equal, and what does that let you say about how $D$ and $E$ divide the sides? (Just set up the
   equal angles; the proportion is proved next.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**AA Similarity Criterion.** If two angles of one triangle are equal to two angles of another, then
the triangles are similar. Symbolically, if $\angle A=\angle A'$ and $\angle B=\angle B'$, then
$$\triangle ABC \sim \triangle A'B'C',$$
so $\angle C=\angle C'$ as well and the corresponding sides are in a single common ratio
$$\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'A'}{CA}.$$
Two angle equalities are enough: the third angle follows from the angle sum, and *equal angles force
proportional sides*. (Congruence is the extra demand that the common ratio be $1$; AA gives shape,
not size.)

### Proof

Two ingredients: the angle sum, and a proportionality lemma for parallel cuts.

**Third angle.** Since $\angle A+\angle B+\angle C = 180^\circ = \angle A'+\angle B'+\angle C'$
(`geo-triangle-angle-sum`) and the first two pairs are equal, subtraction gives $\angle C=\angle C'$.
All three angles match.

**Parallel-cut lemma (proportionality).** In $\triangle ABC$, let a line meet $AB$ at $D$ and $AC$ at
$E$ with $DE\parallel BC$. Then $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac{DE}{BC}$.
*Proof.* Triangles $BDE$ and $CDE$ share base $\overline{DE}$; their apexes $B,C$ lie on line $BC$,
which is parallel to $DE$, so both have the same height (the constant gap between the parallels) and
hence equal area, $[BDE]=[CDE]$ (from $\text{area}=\tfrac12\,\text{base}\times\text{height}$). Now
$\triangle ADE$ and $\triangle BDE$ share apex $E$ with bases $AD,DB$ on line $AB$; equal-height
triangles have areas in the ratio of their bases, so $\dfrac{[ADE]}{[BDE]}=\dfrac{AD}{DB}$.
Likewise $\dfrac{[ADE]}{[CDE]}=\dfrac{AE}{EC}$. As $[BDE]=[CDE]$, we get $\dfrac{AD}{DB}=\dfrac{AE}{EC}$;
adding $1$ to each side turns this into $\dfrac{AB}{DB}=\dfrac{AC}{EC}$, and inverting the pieces
gives $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. For the third ratio, through $E$ draw the line parallel to
$AB$, meeting $BC$ at $F$; then $DBFE$ has $DE\parallel BF$ and $EF\parallel DB$, so it is a
parallelogram and $DE=BF$. Applying the just-proved proportion to the parallel $EF\parallel AB$ in
$\triangle CBA$ gives $\dfrac{CF}{CB}=\dfrac{CE}{CA}=1-\dfrac{AE}{AC}=1-\dfrac{AD}{AB}$, so
$\dfrac{BF}{CB}=\dfrac{AD}{AB}$, i.e. $\dfrac{DE}{BC}=\dfrac{AD}{AB}$.

**AA via superposition.** Suppose $\angle A=\angle A'$ and $\angle B=\angle B'$. On ray $AB$ mark $D$
with $AD=A'B'$, and on ray $AC$ mark $E$ with $AE=A'C'$. Then $\triangle ADE\cong\triangle A'B'C'$ by
SAS ($AD=A'B'$, $\angle DAE=\angle A=\angle A'$, $AE=A'C'$). Hence $\angle ADE=\angle A'B'C'=\angle
B=\angle ABC$. But $\angle ADE$ and $\angle ABC$ are corresponding angles where transversal $AB$
cuts lines $DE$ and $BC$; their equality forces $DE\parallel BC$ (`geo-parallel-lines-angles`, via
the angle-sum prereq's own foundation). The parallel-cut lemma now gives
$$\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}=:k.$$
Since $\triangle ADE\cong\triangle A'B'C'$ we may replace $AD,AE,DE$ by $A'B',A'C',B'C'$:
$$\frac{A'B'}{AB}=\frac{A'C'}{AC}=\frac{B'C'}{BC}=k.$$
Equal corresponding angles together with corresponding sides in a common ratio $k$ is exactly the
definition of similarity (`geo-similarity-def`), so $\triangle ABC\sim\triangle A'B'C'$.
$\blacksquare$

### Worked Instance

In $\triangle ABC$, points $D$ on $\overline{AB}$ and $E$ on $\overline{AC}$ satisfy $DE\parallel BC$,
with $AD=4$, $DB=6$, and $BC=15$. Find $DE$.

Because $DE\parallel BC$, transversal $AB$ makes $\angle ADE=\angle ABC$, and $\angle A$ is shared;
two equal angles, so by AA $\triangle ADE\sim\triangle ABC$. The scale factor is
$$k=\frac{AD}{AB}=\frac{4}{4+6}=\frac{4}{10}=\frac{2}{5}.$$
Corresponding sides scale by $k$, so
$$DE = k\cdot BC = \tfrac{2}{5}\cdot 15 = 6.$$
Two angle facts — no measuring of $DE$ — pinned the length. This is the Hook resolved: the shape,
and hence the missing ratio, came from angles alone.

### Pitfalls

- **AA gives shape, not size.** Similar is not congruent; the common ratio $k$ can be anything.
  Equal angles fix the proportions but leave the scale free.
- **Two angles is the whole hypothesis — don't hunt for a side.** People sometimes think they also
  need a matching side; that would be for *congruence*, not similarity.
- **Match the angles by correspondence.** $\angle A=\angle A'$ and $\angle B=\angle B'$ pair the
  triangles as $A\!\leftrightarrow\!A'$, etc.; a mismatched pairing sets up the wrong proportion.
- **"Equiangular" is automatic once two agree.** You never need to verify the third angle
  separately — the angle sum delivers it.
- **A parallel cut is the engine.** If a figure has a line parallel to a side, expect similar
  triangles and proportional divisions; missing the parallel is missing the similarity.

:::
:::

## Connections

AA rests on `geo-triangle-angle-sum` (which hands you the third angle) and on the definition of
similarity `geo-similarity-def` (which names the payoff, proportional sides). It is the most-used
similarity test because angles are cheap to spot — parallel lines, shared angles, and cyclic figures
hand them over. From AA the other criteria fall: `geo-sas-sss-similarity` reduces SAS and SSS
similarity back to AA by building a scaled copy. Recognition trigger: two equal angles in a figure,
a line parallel to a side, or any request for an unknown length that a proportion could supply —
reach for AA, name the correspondence, then read off the ratio.

## History

The angle-angle criterion for similar triangles is *Elements* VI.4 (c. 300 BC), where Euclid shows that equal angles force the sides about them to be proportional. Its practical spirit is far older: Thales of Miletus is reputed to have measured the height of the Great Pyramid in the sixth century BC by matching the pyramid's shadow to a staff's, an argument that two triangles with the same angles have proportional sides. Because a triangle's angles sum to $180^\circ$, fixing two angles fixes the third, so AA alone determines shape without any side information — a striking economy that makes it the workhorse of similarity. Euclid's proof rests on his Book V theory of proportion inherited from Eudoxus. The criterion underlies indirect measurement of heights and distances that remained standard for surveyors and navigators for over two thousand years.
