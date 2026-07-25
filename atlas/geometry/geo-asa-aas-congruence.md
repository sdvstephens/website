You are told a triangle has a side exactly $10$ cm long, and at the two ends of that side the
walls rise at $40^\circ$ and $70^\circ$. Before you draw a thing, ask: is the triangle already
decided? The two rising walls are aimed; they will cross somewhere above the base. Could they
cross in two different places and give two different triangles, or is the meeting point forced?

## Discovery

1. Draw a base segment of length $10$. At its left end, draw a ray rising at $40^\circ$; at
   its right end, a ray rising at $70^\circ$, both on the same side of the base. Each ray is a
   full straight ray. In how many points can these two rays cross? Is the crossing point free
   to move, or is it forced once the base length and the two angles are fixed?
2. Two people each do step 1 independently — base $10$, angles $40^\circ$ and $70^\circ$ at
   the matching ends. Must their finished triangles coincide up to sliding, turning, or
   flipping? What forces the third vertex to the same place for both?
3. Now a variation: you are given a side of length $10$, an angle of $40^\circ$ at *one* end
   of it, and a *third* angle of $70^\circ$ that sits at the far vertex — **not** at either
   end of the given side. You know a triangle's three angles always sum to $180^\circ$. Use
   that to find the angle at the *other* end of the given side. Having found it, are you back
   in the situation of step 1?
4. Finally, suppose you are told only the three *angles* of a triangle — say $40^\circ$,
   $70^\circ$, $70^\circ$ — and no side length at all. Sketch a small such triangle and a
   large one. Are they forced to be the same *size*? What single piece of information present
   in steps 1–3 is missing here?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**ASA Congruence.** If two angles and the **included side** (the side *between* those two
angles) of one triangle are congruent, in correspondence, to two angles and the included side
of another, then the triangles are congruent.

**AAS Congruence.** If two angles and a **non-included side** of one triangle are congruent,
in correspondence, to the matching parts of another, then the triangles are congruent.

Symbolically, with the shared side between the two angles for ASA:
$$\angle B\cong\angle E,\ \ \overline{BC}\cong\overline{EF},\ \ \angle C\cong\angle F
\ \ \Longrightarrow\ \ \triangle ABC\cong\triangle DEF \quad(\text{ASA}),$$
and for AAS the given side is opposite one of the two angles rather than between them.

AAS is not a separate axiom: because the three angles of a triangle sum to $180^\circ$, two
known angles determine the third, so any AAS configuration converts to an ASA one. We take
ASA as a **congruence criterion** (equivalently derivable from SAS), and derive AAS from it
via the angle sum. Crucially, **AAA is *not* a congruence criterion** — equal angles give only
*similarity* (same shape, any size) — and **SSA fails** as the ambiguous case.

### Proof

We establish ASA, then reduce AAS to it using the triangle angle sum.

**ASA.** Suppose $\angle B \cong \angle E$, $BC = EF$, and $\angle C \cong \angle F$, with
$\overline{BC}$ the side included between angles $B$ and $C$ (and $\overline{EF}$ between $E$
and $F$). Apply a rigid motion to $\triangle DEF$ carrying $E$ to $B$ and ray $EF$ along ray
$BC$; since $EF = BC$, the point $F$ lands on $C$. Now the image of $\triangle DEF$ shares the
whole side $\overline{BC}$ with $\triangle ABC$. The vertex $A$ lies where ray $BA$ (making
angle $\angle B$ with $\overline{BC}$) meets ray $CA$ (making angle $\angle C$ with
$\overline{CB}$). The image of $D$ lies where the image of ray $ED$ (making angle
$\angle E = \angle B$ with $\overline{BC}$) meets the image of ray $FD$ (making angle
$\angle F = \angle C$ with $\overline{CB}$). If the images fall on the opposite side of line
$BC$ from $A$, reflect across line $BC$ (a rigid motion). Then the image of ray $ED$ makes the
same angle at $B$ on the same side as ray $BA$, so the two rays coincide; likewise the image of
ray $FD$ coincides with ray $CA$. Two distinct lines meet in at most one point, so the images
of these rays meet exactly where $A$ is: the image of $D$ is $A$. Hence the rigid motion sends
$D,E,F$ to $A,B,C$, giving $\triangle ABC \cong \triangle DEF$.

**AAS.** Suppose two angles and a non-included side match: say $\angle A \cong \angle D$,
$\angle B \cong \angle E$, and $\overline{BC} \cong \overline{EF}$ (the side opposite the
matched angle $A$, resp. $D$). By the triangle angle sum, in $\triangle ABC$,
$m\angle C = 180^\circ - m\angle A - m\angle B$, and in $\triangle DEF$,
$m\angle F = 180^\circ - m\angle D - m\angle E$. Since $\angle A\cong\angle D$ and
$\angle B\cong\angle E$, the two right-hand sides are equal, so $\angle C \cong \angle F$. Now
$\overline{BC}$ is included between the angles $B$ and $C$, and $\overline{EF}$ between $E$ and
$F$; with $\angle B\cong\angle E$, $BC = EF$, $\angle C\cong\angle F$, ASA applies and gives
$\triangle ABC \cong \triangle DEF$. $\blacksquare$

### Worked Instance

Resolve the Hook and then a proof. Base $\overline{BC}$ has $BC = 10$, with $\angle B =
40^\circ$ and $\angle C = 70^\circ$. The two rising rays from $B$ and $C$ are distinct lines
(different directions), so they meet in exactly one point $A$ — the triangle is fully decided;
no second triangle is possible. That is ASA in action.

For a proof, let ray $\overrightarrow{BD}$ bisect $\angle ABC$ and meet $\overline{AC}$ at
$D$, and suppose also that $\angle ADB \cong \angle CDB$. Show $\triangle ABD \cong \triangle
CBD$. The bisector gives $\angle ABD \cong \angle CBD$; the hypothesis gives $\angle ADB \cong
\angle CDB$; and $\overline{BD}$ is the side *included* between these two pairs of angles, shared
by both triangles ($BD = BD$). So by ASA, $\triangle ABD \cong \triangle CBD$, and by CPCTC
$AB = CB$ — the triangle is isosceles. Two angles and the side wedged between them locked
everything, exactly as the aimed walls of the Hook forced a single meeting point.

### Pitfalls

- **AAA is only similarity.** Three equal angles fix *shape*, not *size*; a small and a large
  triangle can share all three angles. AAA never proves congruence — you must have at least one
  side.
- **SSA is the ambiguous case — it fails.** Two sides and a non-included angle can produce two
  different triangles (the shorter side swings to meet the far ray in two spots). Do not mistake
  AAS (two *angles* and a side, which works) for SSA (two *sides* and a non-included angle,
  which does not).
- **ASA vs. AAS: locate the side.** In ASA the side is *between* the two angles; in AAS it is
  *opposite* one of them. Both prove congruence, but name the one you actually have.
- **AAS leans on the angle sum.** It is valid only because the third angle is forced by
  $180^\circ$; in geometries without that angle sum it would fail. Cite the angle sum when you
  reduce AAS to ASA.
- **Correspondence discipline.** Match angle-side-angle to angle-side-angle in the same order;
  a shared side (like a bisector or altitude segment) is often the included side — spot it.

:::
:::

## Connections

ASA and AAS complete the trio of primary congruence criteria alongside SSS and SAS, all resting
on the congruence definition (`geo-congruence-def`). AAS is where the triangle angle sum
(`geo-triangle-angle-sum`) earns its keep, converting two-angles-and-a-far-side into the ASA
mold. Together these criteria let you prove sides and angles equal inside quadrilaterals
(`geo-quadrilaterals`) — the diagonals of a parallelogram, the legs of a trapezoid — by
splitting a four-gon into triangles. The failures logged here (AAA gives only similarity, SSA is
ambiguous) draw the exact boundary between congruence and its shape-only sibling and foreshadow
the two-solution subtlety of the Law of Sines. Recognition trigger: reach for ASA/AAS when a
figure hands you *two pairs of equal angles* plus one matching side — very often the shared side
is an altitude, median, or bisector segment doing double duty.

## History

Angle-side-angle appears as *Elements* I.26 (c. 300 BC), where Euclid also covers the closely related angle-angle-side case in the same proposition. Tradition, reported by Proclus in the fifth century AD, traces the idea much earlier to Thales of Miletus (sixth century BC), who is said to have measured the distance of a ship from shore using two triangles sharing an angle and the intervening baseline — an application of exactly this criterion. Euclid derives ASA by a reductio argument, assuming the third sides differ and deriving a contradiction, which lets him avoid a fresh appeal to superposition. Because the angle sum forces the third angle once two are fixed, AAS reduces to ASA, so the two travel together. The criterion's surveying pedigree explains why it remained a staple of practical geometry from antiquity through the age of navigation.
