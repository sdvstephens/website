Feed a triangle into a photocopier set to "$200\%$." Out comes a triangle that is unmistakably the
*same triangle* — same corners, same lean — just bigger. Every length has doubled. But has every
*angle*? And if lengths doubled, what happened to the *area* on the page? The copy looks like a
faithful blow-up; the question is exactly which numbers scaled, and by how much.

## Discovery

Take $\triangle ABC$ and its photocopy enlargement $\triangle DEF$, where the copier multiplied
every length by the same factor — say $DE = 2\,AB$, and likewise for the other two sides.

1. Lay the small triangle on top of the big one, matching corner $A$ to $D$. A blow-up does not bend
   corners or open them wider — it only rescales distances. So compare $\angle A$ with $\angle D$,
   $\angle B$ with $\angle E$, $\angle C$ with $\angle F$. What do you claim about the three pairs?
2. The copier used one setting for the whole page, so *every* length scaled by the same number.
   Write the three ratios $DE/AB$, $EF/BC$, $FD/CA$. How do they compare to each other, and what
   single number are they all equal to? Give that number a name.
3. Now suppose the copier setting had been "$100\%$." What is the number from step $2$ in that case,
   and what is the relationship between the two triangles then — is there an existing word for it?
4. The two triangles have perimeters $P_{ABC}$ and $P_{DEF}$. Using that every side of the big
   triangle is the scale factor times the matching side of the small one, express $P_{DEF}$ in terms
   of $P_{ABC}$ and the scale factor. What is the ratio of perimeters?
5. Cover the small triangle with tiny unit squares to measure its area. In the enlargement each
   length is multiplied by the scale factor, so each little square becomes a bigger square whose side
   is the scale factor times as long. How many small-square areas does *one* enlarged square hold,
   and therefore how does the *area* scale? Compare your answer to how the *lengths* scaled.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Two polygons are **similar** when one is a scaled copy of the other: their corresponding angles are
equal **and** their corresponding sides are in a constant ratio. For triangles we write
$$\triangle ABC \sim \triangle DEF$$
to mean $\angle A=\angle D$, $\angle B=\angle E$, $\angle C=\angle F$ **and**
$$\frac{DE}{AB} = \frac{EF}{BC} = \frac{FD}{CA} = k,$$
where the common value $k$ is the **scale factor** (or **similarity ratio**). Consequences:
- **Congruence is the case $k=1$:** equal angles and equal (ratio $1$) sides means the figures are
  congruent (`geo-congruence-def`).
- **Perimeters scale by $k$:** $P_{DEF} = k\,P_{ABC}$, so the ratio of perimeters equals $k$.
- **Areas scale by $k^2$:** $[\triangle DEF] = k^2\,[\triangle ABC]$, so the ratio of areas equals
  the square of the scale factor.

The vertex order in $\triangle ABC \sim \triangle DEF$ encodes the correspondence $A\!\leftrightarrow\!D$,
$B\!\leftrightarrow\!E$, $C\!\leftrightarrow\!F$; it must be respected.

### Proof

Similarity is a *definition*, so what needs proving are the three consequences, granted the
definition (equal corresponding angles, corresponding sides all in the ratio $k$). The similarity
*criteria* — that a few equalities force the rest — are separate results (`geo-aa-similarity`,
`geo-sas-sss-similarity`); here we assume the full definition holds and read off what it entails.

**$k=1$ gives congruence.** If $k=1$ then $DE=AB$, $EF=BC$, $FD=CA$, so all three pairs of sides are
equal; together with the equal corresponding angles from the definition, the correspondence
$A\!\leftrightarrow\!D$, $B\!\leftrightarrow\!E$, $C\!\leftrightarrow\!F$ is a congruence
(`geo-congruence-def`).

**Perimeter ratio $=k$.** From $DE=k\,AB$, $EF=k\,BC$, $FD=k\,CA$ (rewriting each side-ratio),
$$P_{DEF} = DE+EF+FD = k\,AB + k\,BC + k\,CA = k\,(AB+BC+CA) = k\,P_{ABC},$$
using the distributive law to pull out $k$. Hence $P_{DEF}/P_{ABC} = k$.

**Area ratio $=k^2$.** Use the triangle area formula (`geo-area-basics`, available here as background
fact). Pick a side of $\triangle ABC$ as base $b$ with corresponding height $\ell$; the matching side
of $\triangle DEF$ is the base $kb$. The altitude to that side also scales by $k$: the altitude is a
length internal to the similar figure, and *every* length in a scaled copy is multiplied by $k$
(more carefully, the altitude and the base sit in the same figure whose linear dimensions all scale
by $k$), so the corresponding height is $k\ell$. Therefore
$$[\triangle DEF] = \tfrac12 (kb)(k\ell) = k^2\cdot\tfrac12 b\ell = k^2\,[\triangle ABC].$$
Equivalently, tiling the small triangle by unit squares and enlarging, each unit square of side $1$
becomes a square of side $k$ with area $k^2$; so the total area is multiplied by $k^2$ while lengths
are multiplied by $k$. $\blacksquare$

### Worked Instance

Resolve the Hook. The copier at "$200\%$" produces a triangle similar to the original with scale
factor $k=2$. Then:
- **Angles:** unchanged — $\angle D=\angle A$, and so on. A blow-up preserves shape, hence angles.
- **Lengths:** each doubled, $k=2$.
- **Perimeter:** doubled, ratio $k=2$. A triangle of perimeter $15$ becomes one of perimeter $30$.
- **Area:** *quadrupled*, ratio $k^2=4$. A triangle of area $9$ becomes one of area $36$ — four
  copies of the original would be needed to tile the enlargement.

So not every number scaled the same way: angles held fast, lengths went up by $2$, area by $2^2=4$.
That mismatch — length by $k$, area by $k^2$ — is the whole content of the Hook.

### Pitfalls

- **Area scales by $k^2$, not $k$.** Doubling every side quadruples the area. Confusing the two is
  the single most common similarity error.
- **Both conditions are part of the definition.** Equal angles *and* proportional sides. For general
  polygons neither alone suffices: a square and a non-square rectangle have all angles equal ($90^\circ$)
  yet sides not in a constant ratio, and a square and a rhombus have all sides in a constant ratio yet
  unequal angles — neither pair is similar. You need both conditions. (For *triangles*, happily, either
  one forces the other — that is what the AA/SAS/SSS criteria establish.)
- **Order encodes correspondence.** $\triangle ABC\sim\triangle DEF$ pairs $A$ with $D$, etc.
  Scrambling the letters pairs the wrong sides and wrecks the proportion.
- **Similar is not congruent unless $k=1$.** Similar figures can be any size; congruence is the one
  special scale factor $k=1$.
- **This node is the definition, not a test.** Knowing two figures are similar lets you use the
  ratios; *deciding* similarity from partial data (AA, SAS, SSS) is a separate downstream tool.

:::
:::

## Connections

Similarity builds on two prereqs: **congruence** (`geo-congruence-def`), which it generalizes — the
$k=1$ slice — and **ratio/proportion** (`ari-ratio`), the language of the constant scale factor.
Everything downstream that turns equal angles into equal ratios flows from here: the **AA**,
**SAS**, and **SSS** similarity criteria (`geo-aa-similarity`, `geo-sas-sss-similarity`) that let you
*establish* similarity from partial data, the similar-triangle proof of the **Pythagorean theorem**
(`geo-pythagorean-theorem`), the **Angle Bisector Theorem** (`geo-angle-bisector`), and centroid
ratios (`geo-medians-centroid`). Recognition trigger: a scaled figure, a "same shape different size,"
a photocopy/blueprint/map scale, or a request relating perimeters or areas of look-alike figures —
and always keep straight that lengths carry $k$ while areas carry $k^2$.

## History

The idea of similar figures — same shape, scaled size — reaches back to Thales of Miletus in the sixth century BC, who according to Proclus and Plutarch found the height of a pyramid by comparing its shadow to that of a staff, reasoning with proportional triangles. Giving similarity a rigorous meaning required a theory of ratio that could handle incommensurable lengths, and this was supplied by Eudoxus of Cnidus in the fourth century BC after the Pythagorean discovery that $\sqrt{2}$ is irrational shattered the naive view that all lengths share a common unit. Euclid enshrined Eudoxus's theory in Book V of the *Elements* (c. 300 BC) and applied it to similar figures throughout Book VI. Defining similarity as equal angles together with proportional sides thus resolved one of the deepest crises in early Greek mathematics. Its power lies in converting hard length problems into simple ratio equations.
