Cut two triangles out of paper. If one drops exactly onto the other — no stretching, no
gaps, no overhang — you would call them "the same triangle" even though they sit in
different places on the desk. But "same" is a slippery word: same *area*? same *shape*?
And when you slide one onto the other, which corner lands on which? Pin that down and a
whole bookkeeping system for proofs falls out.

## Discovery

1. Take two paper triangles that stack perfectly. List everything about them that is
   forced to agree once one lies on top of the other. Do their three side lengths have to
   match? Do their three angles? Could two triangles match in all three angles yet *not*
   stack (think of a small triangle and a large one with the same angles)?
2. You slide triangle number one onto triangle number two without bending or stretching
   the paper. Describe the moves you are allowed: slides, turns, flips. What quantity does
   each of these moves leave unchanged — does a slide change a length? does a turn change
   an angle?
3. When one triangle lands on the other, each vertex covers exactly one vertex of the
   other. Write down the pairing of vertices you actually get for a specific stacking.
   Now: if you know only that the triangles "are the same" but nobody tells you which
   corner covers which, can you still say which side equals which? What extra information
   does naming the pairing carry?
4. Suppose the vertices pair up as $A \leftrightarrow D$, $B \leftrightarrow E$,
   $C \leftrightarrow F$. Using only that these vertices land on each other, which side
   must equal $\overline{DE}$? which angle must equal $\angle F$? Write out all six
   equalities the single stacking forces.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Two figures are **congruent** when one can be moved onto the other by a **rigid motion** —
a combination of slides (translations), turns (rotations), and flips (reflections) — with
no stretching, so that they coincide exactly. Rigid motions preserve distance and angle
measure, so congruent figures have the same size and shape.

For segments and angles this specializes cleanly:

- Two **segments are congruent**, $\overline{AB} \cong \overline{CD}$, exactly when they
  have equal length, $AB = CD$.
- Two **angles are congruent**, $\angle ABC \cong \angle DEF$, exactly when they have
  equal measure, $m\angle ABC = m\angle DEF$.

For triangles, the notation carries a **correspondence**. Writing
$$\triangle ABC \cong \triangle DEF$$
asserts the vertex pairing $A \leftrightarrow D$, $B \leftrightarrow E$,
$C \leftrightarrow F$, and this single statement packs **six** equalities — three sides
and three angles:
$$\overline{AB}\cong\overline{DE},\quad \overline{BC}\cong\overline{EF},\quad
\overline{CA}\cong\overline{FD},$$
$$\angle A\cong\angle D,\quad \angle B\cong\angle E,\quad \angle C\cong\angle F.$$
The order of letters is not decoration: it *is* the correspondence. Because the six
equalities are exactly what a rigid motion forces, once two triangles are known to be
congruent, **Corresponding Parts of Congruent Triangles are Congruent (CPCTC)**: any one
of the six equalities may be read off and used.

### Proof

There is no theorem to prove here — congruence is a *definition* — but two claims inside
it need justification: that the segment/angle versions really are special cases, and that
CPCTC is immediate rather than an extra assumption.

*Segments and angles.* A rigid motion preserves distance; so if a motion carries
$\overline{AB}$ onto $\overline{CD}$, then $A,B$ land on $C,D$ (in some order) and the
preserved distance gives $AB = CD$. Conversely two segments of equal length can be carried
onto each other: slide $A$ to $C$, then rotate about $C$ until $B$ falls on the ray toward
$D$; equal length puts $B$ exactly on $D$. So "congruent segment" and "equal length" name
the same relation. The identical argument with angle measure in place of distance gives the
angle case: a rigid motion preserves angle measure, and any two equal-measure angles can be
slid and rotated (and if needed flipped) onto each other.

*CPCTC.* Suppose $\triangle ABC \cong \triangle DEF$, meaning some rigid motion $\Phi$
sends $A\mapsto D$, $B\mapsto E$, $C\mapsto F$. Since $\Phi$ preserves distance,
$AB = DE$, $BC = EF$, $CA = FD$, i.e. the three sides correspond; since $\Phi$ preserves
angle measure, $m\angle A = m\angle D$, and likewise at $B,E$ and $C,F$. Thus all six
equalities hold *the moment* the congruence is asserted — CPCTC is not a further axiom but
a restatement of what the definition already guarantees. The only discipline it demands is
reading correspondence off the letter order: the parts that correspond are the ones in
matching positions. $\blacksquare$

### Worked Instance

Return to the two stacked paper triangles. Label the first $A,B,C$ and suppose the stacking
lands $A$ on $P$, $B$ on $Q$, $C$ on $R$. The correct statement is
$\triangle ABC \cong \triangle PQR$ — written in that order. Read off, say, the side
opposite $B$ in the first triangle: it is $\overline{AC}$, and its corresponding part is
$\overline{PR}$ (opposite $Q$), so $AC = PR$ by CPCTC. Read off the angle at $C$: it
corresponds to the angle at $R$, so $m\angle C = m\angle R$.

Now the trap the Hook hinted at. A tiny triangle and a large triangle can share all three
angle measures yet fail to stack, because a rigid motion cannot resize. Equal angles alone
give only *same shape*; congruence demands same shape **and** same size, which is why the
definition ranges over rigid motions rather than "matching angles." Congruence is the
size-and-shape twin of similarity's shape-only cousin.

### Pitfalls

- **Letter order is the correspondence.** $\triangle ABC \cong \triangle DEF$ and
  $\triangle ABC \cong \triangle EDF$ say different things; only write the order that the
  actual pairing gives, and only read off parts in matching positions.
- **$\cong$ vs. $=$.** Segments and angles are *congruent* ($\cong$); their lengths and
  measures are *equal* ($=$). Write $\overline{AB}\cong\overline{CD}$ but $AB = CD$; a bare
  $\overline{AB} = \overline{CD}$ conflates a figure with a number.
- **Same angles is not congruence.** Equal corresponding angles give *similarity*
  (same shape), not congruence; congruence needs size too.
- **CPCTC runs one way.** It lets you extract equal parts *after* you have proved the
  triangles congruent. Do not invoke it to *establish* the congruence — that is what SSS,
  SAS, ASA/AAS are for.
- **Congruence allows flips.** A triangle and its mirror image are congruent; a rigid
  motion may include a reflection. "Cannot be slid on without lifting" is not a failure of
  congruence.

:::
:::

## Connections

Congruence sits on the two most basic measured notions — segment length
(`geo-segments-rays`) and angle measure (`geo-angle-def`) — and packages them into a
correspondence between whole figures. The definition is deliberately inert: it says what
congruence *means* but gives no shortcut for *proving* it, since checking all six triangle
equalities by hand is the very labor the congruence theorems remove. That is what it
unlocks: SSS (`geo-sss-congruence`), SAS (`geo-sas-congruence`), and ASA/AAS
(`geo-asa-aas-congruence`) each certify all six equalities from just three, after which
CPCTC harvests the rest. It also seeds the perpendicular bisector characterization
(`geo-perpendicular-bisector`) and contrasts with its shape-only sibling similarity
(`geo-similarity-def`). Recognition trigger: whenever a problem hands you "these two
triangles are congruent" or asks you to prove an equal length or angle *buried* inside a
figure, name the correspondence first, then let CPCTC do the extracting.

## History

The Greek notion of congruence rested on *superposition* — imagining one figure lifted and laid onto another until they coincide — encoded in Euclid's Common Notion 4 (c. 300 BC): "things which coincide with one another are equal." Euclid used this motion of application sparingly and somewhat uneasily, aware that sliding figures around is a physical act rather than a logical one. Later critics from Peletier in the sixteenth century onward objected that superposition smuggles in unproven assumptions about rigid motion. David Hilbert resolved the tension in his *Grundlagen der Geometrie* (1899) by making congruence a primitive relation governed by explicit axioms, so that no appeal to physical movement is needed. Modern treatments follow Hilbert, but the intuitive image of one triangle dropped exactly onto another still carries Euclid's original meaning.
