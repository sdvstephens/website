A four-bar frame — four rods pinned at the corners — sags and racks: push a corner and the
whole rectangle flops into a parallelogram. A three-rod frame does not. Pin three rods at
their ends and the shape is locked; you can carry it, spin it, flip it, but you cannot
squash it into a different triangle. Why does adding one rod turn a floppy frame rigid?

## Discovery

1. Take three rods of fixed lengths — say $5$, $6$, and $7$ — and try to build a triangle
   with them. Lay the rod of length $7$ flat on the table as a base. The other two rods are
   still free to swing about the base's two endpoints. Describe what path the free tip of
   the length-$5$ rod can trace as it swings about its endpoint.
2. Do the same for the length-$6$ rod swinging about the *other* endpoint of the base. To
   close the triangle, the two free tips must meet at one point. Geometrically, you are
   asking where the two swing-paths from step 1 cross. How many crossing points can two
   such circular arcs have on one side of the base line?
3. Once the tips meet and you glue that joint, is there any wiggle left? Push on the joint:
   can the triangle deform while all three rod lengths stay $5,6,7$? Contrast this with the
   four-rod frame from the Hook — what did the fourth rod's frame have that this one lacks?
4. Suppose two people, in two different rooms, each build a triangle from rods of lengths
   $5,6,7$. Could their triangles differ in *shape* — could one have a bigger angle
   somewhere? Using steps 2 and 3, argue whether the three lengths leave any freedom at all
   in the angles, up to sliding, turning, or flipping one triangle onto the other.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**SSS Congruence.** If the three sides of one triangle are congruent, in correspondence, to
the three sides of another, then the triangles are congruent:
$$\overline{AB}\cong\overline{DE},\ \ \overline{BC}\cong\overline{EF},\ \
\overline{CA}\cong\overline{FD} \quad\Longrightarrow\quad \triangle ABC \cong \triangle DEF.$$
In words: three side lengths pin a triangle's shape completely. Once the three sides match,
all three angles are *forced* to match too, so by CPCTC every pair of corresponding angles
is congruent.

We adopt SSS as a **congruence postulate**, grounded in the *rigidity of the triangle*: a
triangle built from three fixed side lengths admits exactly one shape (up to rigid motion),
because its vertices are pinned as the intersections of circles of fixed radii. This is the
foundational congruence criterion; SAS and ASA/AAS join it, and from it the whole edifice
of triangle proofs is built.

### Proof

SSS is taken as an axiom of Euclidean geometry, but the axiom is not arbitrary — it records
a construction that leaves no freedom. We give the construction argument that motivates
adopting it, exactly the rigidity the Discovery uncovered.

Fix the correspondence and set $a = BC = EF$, $b = CA = FD$, $c = AB = DE$. Place one
triangle so that side $\overline{DE}$ coincides with $\overline{AB}$: since $DE = AB = c$,
a rigid motion carries $D$ to $A$ and $E$ to $B$ (slide $D$ onto $A$, rotate about $A$ until
$E$ falls on ray $AB$; equal length lands $E$ exactly on $B$). If, after this, $F$ lies on
the opposite side of line $AB$ from $C$, reflect across line $AB$; a reflection is a rigid
motion and does not change any length, so we may assume $F$ lies on the same side as $C$.

Now $C$ and $F$ are both points on the chosen side of line $AB$ satisfying
$$\text{distance to } A = b \quad\text{and}\quad \text{distance to } B = a.$$
The locus of points at distance $b$ from $A$ is a circle centered at $A$ of radius $b$; the
locus at distance $a$ from $B$ is a circle centered at $B$ of radius $a$. Two distinct
circles meet in at most two points, and those two points are mirror images across the line
of centers $AB$ — one on each side. Restricting to a single side of line $AB$, the two
circles meet in **at most one** point. Both $C$ and $F$ satisfy both distance conditions and
lie on the same side, so $C = F$.

Hence the rigid motion (possibly including the reflection) carries $D,E,F$ onto $A,B,C$
respectively, which is exactly the statement $\triangle ABC \cong \triangle DEF$ by the
definition of congruence. The heart of it is that two circles pin their intersection: three
side lengths determine the third vertex with no freedom left, so the triangle is rigid.
$\blacksquare$

### Worked Instance

A kite $ABCD$ has $AB = AD$ and $CB = CD$ (two pairs of adjacent equal sides). Prove the
diagonal $\overline{AC}$ bisects $\angle BAD$.

Compare $\triangle ABC$ and $\triangle ADC$. Their sides:
$$AB = AD \ (\text{given}),\quad CB = CD \ (\text{given}),\quad AC = AC \ (\text{shared}).$$
Three pairs of sides correspond and are equal, so by SSS,
$\triangle ABC \cong \triangle ADC$. By CPCTC the corresponding angles at $A$ are equal:
$\angle BAC \cong \angle DAC$. Those two angles together make $\angle BAD$, so $AC$ splits
it into two equal halves — the diagonal bisects $\angle BAD$. Notice the pattern that
resolves the Hook: we never measured a single angle, yet three matched lengths locked the
shape tightly enough to *deduce* an angle equality.

### Pitfalls

- **SSS needs the correspondence.** Three sides of one triangle equal to three sides of
  another *as sets* is fine only if they match up side-to-side; write which side equals
  which and keep the letter order consistent.
- **There is no "SSSS" freedom to worry about, but there is a four-gon warning.** SSS is a
  *triangle* fact. Four given side lengths do **not** determine a quadrilateral (the Hook's
  flopping frame) — rigidity is special to the triangle.
- **Do not confuse SSS congruence with SSS similarity.** Equal *lengths* give congruence;
  equal *ratios* of the three sides give only similarity (same shape, maybe different size).
- **A shared side counts.** The reflexive equality $AC = AC$ is a legitimate third pair;
  overlooking the common side is the most common reason an SSS proof stalls.
- **Two circles, one side.** The rigidity rests on picking a side of the base line; without
  fixing the side the two circles give two mirror-image triangles — congruent to each other
  (via a flip), so the conclusion survives, but the bookkeeping needs the reflection step.

:::
:::

## Connections

SSS is the first cash value of the congruence definition (`geo-congruence-def`): it certifies
all six corresponding-part equalities from just the three sides, so CPCTC can then harvest the
angles. It draws on the proof-writing discipline of `geo-proof-intro` — state the given side
equalities, cite SSS, then invoke CPCTC. Its engine, the rigidity of the triangle, is why
triangles brace bridges and bicycle frames. Scaling the same idea from equal lengths to equal
*ratios* yields SSS similarity (`geo-sas-sss-similarity`). Recognition trigger: reach for SSS
when a figure hands you three pairs of equal sides — especially watch for a *shared* side that
silently supplies the third pair — and you want to conclude an angle equality you cannot
measure directly.

## History

Side-side-side congruence is Euclid's *Elements* I.8 (c. 300 BC), and he proved it by the method of superposition, sliding one triangle onto the other and arguing that the three matching sides force the figures to coincide. The proof depends on the earlier I.7, which establishes that two given lengths can meet a base in only one point on a given side, so that the third vertex is pinned down uniquely. This uniqueness is why a triangle is rigid: fix its three side lengths and its shape cannot flex, a fact ancient and medieval builders exploited in trusses long before it was named. Euclid's reliance on motion here drew the same later criticism as his other superposition arguments, and Hilbert's 1899 axioms recast SSS as a theorem flowing from a congruence axiom rather than from physical sliding.
