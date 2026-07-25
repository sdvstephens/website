AA judges triangles by their *angles*. But sometimes you know no angles at all — only that one
triangle's sides are, say, exactly $1.5$ times another's, or that two sides and the corner between
them scale together. Is length data alone enough to certify "same shape," with never an angle
measured? And if two sides scale but the angle between them is left free, is the shape still forced?

## Discovery

You will test whether *side* information alone determines a triangle's shape.

1. At a vertex draw an angle of $40^\circ$. Along one arm mark off a length $3$; along the other arm
   mark off a length $5$; join the two marked points to close the triangle. Is anything about this
   triangle still free to change, or is it completely determined?
2. Redraw the same $40^\circ$ angle, but now mark off lengths $6$ and $10$ (each doubled) along the
   arms and close it. Set this triangle beside the one from step $1$: how do their corresponding
   sides compare as a ratio, and — eyeballing the third side and the angles — does the shape look the
   same? Form a conjecture about "two sides in a fixed ratio and the equal included angle."
3. Now a test with *no* angle given. Triangle one has sides $4,5,6$; triangle two has sides
   $8,10,12$ — each side of the second is the same multiple of the matching side of the first. The
   three side lengths of a triangle already fix it rigidly (you cannot flex a triangle with fixed
   sides). Does multiplying all three sides by one common factor therefore fix the *shape* as well?
   Conjecture.
4. To *prove* such conjectures you will lean on AA. Sketch the plan: given the side data on the big
   triangle, cut a copy of the small triangle out of a corner of the big one (mark the small
   triangle's side lengths along the big triangle's arms from a shared vertex). What would you need
   to show about the cut-off triangle to conclude, via AA, that it is a scaled copy of the big one?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**SAS Similarity.** If two sides of one triangle are proportional to two sides of another and the
included angles are equal, the triangles are similar: if
$$\frac{AB}{DE}=\frac{AC}{DF}\quad\text{and}\quad \angle A=\angle D,\qquad\text{then}\qquad
\triangle ABC\sim\triangle DEF.$$

**SSS Similarity.** If all three pairs of corresponding sides are proportional, the triangles are
similar: if
$$\frac{AB}{DE}=\frac{BC}{EF}=\frac{CA}{FD},\qquad\text{then}\qquad \triangle ABC\sim\triangle DEF.$$

In both, the constant ratio is the scale factor $k$, and (as always) the equal corresponding angles
and the remaining proportional sides come along automatically. Each criterion is proved by
constructing a scaled copy and invoking **AA** (`geo-aa-similarity`).

### Proof

Throughout write $r=\dfrac{AB}{DE}$ for the ratio of the "big" triangle $ABC$ to the "small" triangle
$DEF$ (the roles are symmetric, so assume $r\ge 1$; if $r\lt 1$ swap the triangles). We use two facts
from the AA development (`geo-aa-similarity`): a line parallel to a side of a triangle cuts the other
two sides proportionally, **and conversely**, if a line cuts two sides of a triangle proportionally
then it is parallel to the third side. (The converse: if $P,Q$ on $AB,AC$ satisfy $AP/AB=AQ/AC$, draw
the parallel to $BC$ through $P$; by the forward proportion it meets $AC$ at the point dividing it in
that same ratio, namely $Q$, so $PQ\parallel BC$.)

**SAS Similarity.** Given $\dfrac{AB}{DE}=\dfrac{AC}{DF}=r$ and $\angle A=\angle D$. On ray $AB$ mark
$P$ with $AP=DE$, and on ray $AC$ mark $Q$ with $AQ=DF$. Since $\angle PAQ=\angle A=\angle D$ and the
two enclosing sides match ($AP=DE$, $AQ=DF$), we have $\triangle APQ\cong\triangle DEF$ by SAS
congruence. Now
$$\frac{AP}{AB}=\frac{DE}{AB}=\frac1r=\frac{DF}{AC}=\frac{AQ}{AC},$$
so $P,Q$ divide $AB,AC$ in the same ratio; by the converse above, $PQ\parallel BC$. Hence
$\angle APQ=\angle ABC$ (corresponding angles) and $\angle A$ is shared, so by AA
$\triangle APQ\sim\triangle ABC$. Composing, $\triangle DEF\cong\triangle APQ\sim\triangle ABC$, and a
congruence followed by a similarity is a similarity: $\triangle ABC\sim\triangle DEF$.

**SSS Similarity.** Given $\dfrac{AB}{DE}=\dfrac{BC}{EF}=\dfrac{CA}{FD}=r$. Again on ray $AB$ mark $P$
with $AP=DE$ and on ray $AC$ mark $Q$ with $AQ=DF$. Then
$$\frac{AP}{AB}=\frac{DE}{AB}=\frac1r=\frac{DF}{AC}=\frac{AQ}{AC},$$
so by the converse $PQ\parallel BC$, and by AA (shared $\angle A$, plus $\angle APQ=\angle ABC$)
$\triangle APQ\sim\triangle ABC$ with ratio $\dfrac{AP}{AB}=\dfrac1r$. Therefore
$$PQ=\frac1r\,BC=\frac{BC}{r}.$$
But the hypothesis gives $\dfrac{BC}{EF}=r$, i.e. $EF=\dfrac{BC}{r}$, so $PQ=EF$. Thus
$\triangle APQ$ and $\triangle DEF$ have $AP=DE$, $AQ=DF$, $PQ=EF$ — all three sides equal — so
$\triangle APQ\cong\triangle DEF$ by SSS congruence. Since $\triangle APQ\sim\triangle ABC$, the
congruent triangle $\triangle DEF$ is similar to $\triangle ABC$ as well: $\triangle ABC\sim\triangle
DEF$. $\blacksquare$

### Worked Instance

**SAS.** Triangle $ABC$ has $AB=6$, $AC=9$, $\angle A=40^\circ$; triangle $DEF$ has $DE=4$, $DF=6$,
$\angle D=40^\circ$. Two sides scale together,
$$\frac{AB}{DE}=\frac{6}{4}=\frac32,\qquad \frac{AC}{DF}=\frac{9}{6}=\frac32,$$
and the included angles are equal, so by SAS similarity $\triangle ABC\sim\triangle DEF$ with
$k=\tfrac32$. Without ever measuring $BC$ or $EF$, we know $\dfrac{BC}{EF}=\tfrac32$ and every angle
matches. This settles the Hook's second worry: fixing two side-ratios *and* the included angle does
force the shape.

**SSS.** Triangle with sides $6,8,10$ and triangle with sides $9,12,15$: the ratios are
$\tfrac{6}{9}=\tfrac{8}{12}=\tfrac{10}{15}=\tfrac23$, all equal, so SSS similarity makes them similar.
(Both are right triangles, $6^2+8^2=10^2$ and $9^2+12^2=15^2$ — the shared shape shows in the
angles that the pure length data guaranteed.)

### Pitfalls

- **The angle must be the *included* one for SAS.** The equal angle has to sit *between* the two
  proportional sides. Two proportional sides and a non-included equal angle ("SSA") do **not** force
  similarity — the shape can be ambiguous.
- **Proportional, not equal.** SAS/SSS *similarity* wants matching *ratios*; demanding equal lengths
  is the stronger congruence hypothesis.
- **All three ratios must coincide for SSS.** If only two of the three side-ratios match, you have
  nothing (unless the included angle rescues you via SAS).
- **Keep the correspondence straight.** Pair the sides so that $\tfrac{AB}{DE}=\tfrac{BC}{EF}=
  \tfrac{CA}{FD}$ with vertices matched $A\!\leftrightarrow\!D$, etc.; a scrambled pairing can make
  false ratios look equal.
- **Similar, not congruent.** As with AA, the scale factor need not be $1$.

:::
:::

## Connections

SAS and SSS similarity complete the trio begun by `geo-aa-similarity`, and both are proved by the
same move: build a scaled copy inside the larger triangle and hand off to AA, using SAS/SSS
*congruence* to lock the copy to the given small triangle. They rest on `geo-similarity-def` (for the
meaning of the scale factor) and `geo-aa-similarity` (the engine). They matter when a problem gives
you *lengths* rather than angles — the natural entry to the similar-triangle proof of the
**Pythagorean theorem** (`geo-pythagorean-theorem`), where the altitude to the hypotenuse creates
triangles proportional to the whole. Recognition trigger: side lengths in a constant ratio, "two
sides scale and the angle between them is equal," or three matching side-ratios — and remember that
for SAS the equal angle must sit *between* the proportional sides.

## History

The proportional analogues of the congruence criteria appear as *Elements* VI.5 and VI.6 (c. 300 BC): VI.5 is the side-side-side version, where three pairs of proportional sides force equal angles, and VI.6 is the side-angle-side version, an equal angle flanked by proportional sides. Euclid built both on the Eudoxan theory of ratio from Book V, which had been created in the fourth century BC to cope with incommensurable magnitudes. These theorems complete the parallel between congruence, which fixes both shape and size, and similarity, which fixes shape alone, so that every congruence test has a scaled counterpart. Their proofs proceed by constructing an auxiliary triangle of the right proportions and invoking the AA criterion. Together they let a geometer certify that two triangles are similar from side data alone, without measuring a single angle.
