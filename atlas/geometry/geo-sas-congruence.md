Open a pair of scissors to a fixed angle and the tips are a fixed distance apart; widen the
angle and the tips spread. Two blades of fixed length, hinged at one end — the gap between
their far tips is decided entirely by how far you open the hinge. Freeze the hinge angle and
the whole triangle formed by the two blades and the imagined line across their tips is
frozen too. Which three facts, exactly, does freezing the hinge lock down?

## Discovery

1. Take two rods of fixed lengths — say $4$ and $6$ — joined at one end by a hinge you can
   open to any angle. Set the hinge to a fixed opening, say $50^\circ$. The far tips of the
   two rods are now at definite places. Is the straight distance between those two tips
   determined, or can it still vary while the two lengths and the $50^\circ$ stay fixed?
2. Two people each build this hinge in separate rooms: rods $4$ and $6$, opening exactly
   $50^\circ$. Compare their triangles (two rods plus the segment joining the tips). Are the
   triangles forced to be the same shape and size, up to sliding, turning, or flipping one
   onto the other? What in step 1 forces your answer?
3. Now change the experiment. Keep the two rod lengths $4$ and $6$, but instead of fixing
   the angle *between* them (at the hinge), fix an angle at the far tip of the length-$6$ rod
   — an angle **not** between the two given sides. Try to swing the length-$4$ rod to close a
   triangle meeting that tip-angle. Can you find *two* genuinely different triangles that all
   share the two lengths and that same non-included angle? (Swing the short rod so its free
   end lands on the far ray in two places.)
4. From steps 2 and 3, which one angle — measured *where* relative to the two sides — is the
   one that locks the triangle? State the location precisely.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**SAS Congruence.** If two sides and the **included angle** (the angle *between* those two
sides) of one triangle are congruent, in correspondence, to two sides and the included angle
of another, then the triangles are congruent:
$$\overline{AB}\cong\overline{DE},\quad \angle A\cong\angle D,\quad
\overline{AC}\cong\overline{FD} \quad\Longrightarrow\quad \triangle ABC\cong\triangle DEF,$$
where $\angle A$ is the angle between sides $\overline{AB}$ and $\overline{AC}$ (and $\angle
D$ between $\overline{DE}$ and $\overline{DF}$). The word **included** is essential: the
angle must sit *between* the two named sides. Two sides and a *non*-included angle (the "SSA"
arrangement) do **not** in general determine a triangle.

We adopt SAS as a **congruence postulate**, grounded in rigidity: two side lengths and the
angle hinged between them fix the far endpoints of both sides, hence fix the third side and
the entire triangle. Alongside SSS it is a cornerstone criterion; from SAS flows the
Isosceles Triangle Theorem and much of elementary geometry.

### Proof

SAS is adopted as an axiom, but as with SSS the axiom encodes a construction with no leftover
freedom. We give the superposition argument that justifies adopting it — the scissors-hinge
rigidity made precise.

Fix the correspondence with $\angle A \cong \angle D$ the included angles, $AB = DE$, and
$AC = DF$. Apply a rigid motion to $\triangle DEF$ carrying $D$ to $A$ and the ray $DE$ onto
the ray $AB$: slide $D$ to $A$, then rotate about $A$ until ray $DE$ lies along ray $AB$.
Because $DE = AB$, the point $E$ lands exactly on $B$.

Consider where $F$ goes. The angle $\angle D$ between rays $DE$ and $DF$ equals the angle
$\angle A$ between rays $AB$ and $AC$. Ray $DE$ now lies along ray $AB$, so the image of ray
$DF$ makes an angle equal to $\angle A$ with ray $AB$ — the same angle ray $AC$ makes. There
are two rays from $A$ making that angle with ray $AB$, one on each side of line $AB$; if the
image of ray $DF$ is the one opposite $AC$, reflect the whole figure across line $AB$ (a
rigid motion preserving all lengths and angles). After this, the image of ray $DF$ coincides
with ray $AC$. Since $DF = AC$, the point $F$ lands exactly on $C$.

Thus the rigid motion (possibly with the reflection) sends $D,E,F$ to $A,B,C$ respectively.
By the definition of congruence, $\triangle ABC \cong \triangle DEF$. The included angle is
what makes this work: fixing the angle *between* the two sides pins the direction of the
second side, and the two fixed lengths then pin both far endpoints — no wiggle remains.
$\blacksquare$

### Worked Instance

Let $M$ be the midpoint of segment $\overline{BC}$, and let $A$ and $D$ be points on
opposite sides of line $BC$ with $MA = MD$ and $\angle AMB \cong \angle DMC$. Prove
$AB = DC$.

We want $\triangle AMB \cong \triangle DMC$. Line up the parts:
$$MB = MC \ (\text{$M$ is the midpoint}),\quad \angle AMB \cong \angle DMC \ (\text{given}),
\quad MA = MD \ (\text{given}).$$
Here $\angle AMB$ is the angle *between* sides $\overline{MB}$ and $\overline{MA}$, and
$\angle DMC$ is between $\overline{MC}$ and $\overline{MD}$ — the angles are *included*
between the two matched sides. So by SAS, $\triangle AMB \cong \triangle DMC$, and by CPCTC
the corresponding sides give $AB = DC$. This is the scissors hinge of the Hook: two fixed
lengths meeting at a fixed hinge angle at $M$ produce a fixed opposite side, so the two
opposite sides must match.

### Pitfalls

- **"Included" is non-negotiable.** The angle must lie *between* the two sides. Two sides and
  an angle at the far end of one of them is SSA, which can yield two different triangles (the
  *ambiguous case*) — SAS does not apply.
- **Check the angle's vertex.** In $\triangle ABC$, the angle included between
  $\overline{AB}$ and $\overline{AC}$ is $\angle A$ (vertex $A$). Using $\angle B$ with sides
  $\overline{AB},\overline{AC}$ is an SSA setup in disguise.
- **Correspondence again.** Match side-angle-side to side-angle-side in the *same* order
  across both triangles; a scrambled order can pair the angle with the wrong two sides.
- **A shared angle or shared side counts.** Reflexive equalities ($\angle A \cong \angle A$,
  $AC = AC$) are legitimate parts; many SAS proofs hinge on spotting a common side or a
  vertical/shared angle as the included piece.
- **SAS $\ne$ ASA.** SAS is side-*angle*-side (angle between two sides); ASA is
  angle-*side*-angle (side between two angles). They are different criteria — do not swap the
  pattern.

:::
:::

## Connections

SAS is the second congruence criterion built directly on the definition
(`geo-congruence-def`), certifying all six corresponding parts from a side, its included
angle, and the next side; the proof-writing habits of `geo-proof-intro` package it as
"cite the two sides and the included angle, invoke SAS, then read off the rest by CPCTC." It
is the workhorse behind the Isosceles Triangle Theorem (`geo-isosceles-triangle`), where a
clever self-correspondence turns SAS into the base-angles result. Its cautionary shadow, the
ambiguous SSA case, foreshadows why AAA gives only similarity and why the Law of Sines has
two solutions sometimes. Recognition trigger: reach for SAS when a figure gives you two sides
with the angle *wedged between them* — most often via a shared side or a shared/vertical angle
supplying one of the three parts.

## History

Side-angle-side is *Elements* I.4 (c. 300 BC), the very first congruence theorem Euclid states, and he proves it by applying one triangle onto the other so that the equal angle and its two enclosing sides fall into place. Almost every later congruence result depends on I.4, which makes its shaky justification — the physical act of superposition — a notorious weak point of the *Elements*. Commentators for two thousand years, culminating in Bertrand Russell's sharp complaint, argued that Euclid had no right to assume figures can be moved without distortion. David Hilbert settled the matter in 1899 by promoting SAS to an outright axiom (his axiom III.5), recognizing that it cannot be derived from more basic principles without some assumption equivalent to it. Thus what looks like an obvious theorem is in fact one of the load-bearing pillars of plane geometry.
