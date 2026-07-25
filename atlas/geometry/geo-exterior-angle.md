Take a triangle and extend one side straight past a vertex, like a road running on beyond a junction. In
the wedge between that extension and the next side, a new angle opens up *outside* the triangle. In a
triangle whose two far corners measure $40^\circ$ and $70^\circ$, this outside angle comes out to exactly
$110^\circ$ — and it never seems to care about the near corner it sits right next to. Why does an angle
outside the triangle answer to the two corners farthest from it?

## Discovery

1. Draw triangle $ABC$ and extend side $\overline{BC}$ beyond $C$ to a new point $D$. The exterior angle
   is $\angle ACD$, between the extension $\overline{CD}$ and the side $\overline{CA}$. This exterior angle
   and the interior angle $\angle ACB$ share the vertex $C$ and sit along the straight line $\overline{BD}$.
   Write the relation those two angles satisfy.
2. Write the relation the three interior angles $\angle A$, $\angle B$, $\angle ACB$ of the triangle
   satisfy.
3. You now have two equations, each involving the interior angle $\angle ACB$. Eliminate $\angle ACB$
   between them to express the exterior angle $\angle ACD$ using only $\angle A$ and $\angle B$. Then, since
   $\angle A$ and $\angle B$ are genuine angles of a triangle (so each is more than nothing), compare
   $\angle ACD$ against $\angle A$ alone and against $\angle B$ alone — is the exterior angle bigger or
   smaller than each?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Exterior Angle Theorem.** An exterior angle of a triangle equals the sum of the two **remote** (non-
adjacent) interior angles. With $\overline{BC}$ extended past $C$ to $D$,
$$\angle ACD = \angle A + \angle B.$$
The two "remote" angles are the ones *not* at the vertex where the exterior angle sits.

**Exterior Angle Inequality (corollary).** An exterior angle of a triangle is strictly greater than either
of its remote interior angles:
$$\angle ACD \gt \angle A \qquad\text{and}\qquad \angle ACD \gt \angle B.$$

### Proof

Let $ABC$ be a triangle and extend $\overline{BC}$ beyond $C$ to $D$, forming the exterior angle $\angle
ACD$.

*The equality.* At vertex $C$, the interior angle $\angle ACB$ and the exterior angle $\angle ACD$ are
adjacent, and their outer edges $\overline{CB}$ and $\overline{CD}$ point in opposite directions along the
straight line $\overline{BD}$. They are a linear pair, so
$$\angle ACB + \angle ACD = 180^\circ. \tag{1}$$
By the Triangle Angle Sum Theorem applied to $ABC$,
$$\angle A + \angle B + \angle ACB = 180^\circ. \tag{2}$$
The right-hand sides of (1) and (2) are equal, so
$$\angle ACB + \angle ACD = \angle A + \angle B + \angle ACB.$$
Subtract the common $\angle ACB$ from both sides:
$$\angle ACD = \angle A + \angle B.$$

*The inequality.* Every interior angle of a genuine triangle is positive: $\angle A \gt 0^\circ$ and
$\angle B \gt 0^\circ$. From $\angle ACD = \angle A + \angle B$, adding the positive quantity $\angle B$ to
$\angle A$ gives a result exceeding $\angle A$, so $\angle ACD \gt \angle A$; symmetrically $\angle ACD \gt
\angle B$. $\blacksquare$

### Worked Instance

The extended road from the Hook: the two far corners are $\angle A = 40^\circ$ and $\angle B = 70^\circ$, and
the exterior angle sits at $C$. By the theorem,
$$\angle ACD = \angle A + \angle B = 40^\circ + 70^\circ = 110^\circ,$$
matching the measurement — and notice it never used the near angle $\angle ACB$ directly. As a check via the
linear pair: the interior angle is $\angle ACB = 180^\circ - 40^\circ - 70^\circ = 70^\circ$, and indeed
$\angle ACB + \angle ACD = 70^\circ + 110^\circ = 180^\circ$. The inequality also reads off at once:
$110^\circ \gt 40^\circ$ and $110^\circ \gt 70^\circ$, so this exterior angle dominates both remote corners —
exactly why the outside angle "answers to" the far corners.

### Pitfalls

- **Remote means the two you are *not* next to.** The exterior angle equals the sum of the two interior
  angles at the *other* two vertices, never the adjacent interior angle. The adjacent one is its
  *supplement*, not part of the sum.
- **Don't add all three.** It is remote $+$ remote, only two angles. Throwing in the adjacent interior angle
  double-counts and gives $180^\circ$ every time.
- **Two exterior angles per vertex.** Extending the side the *other* direction gives a second exterior angle,
  vertical to the first, so equal to it — but the wedge on the far side of the side is a different, generally
  unequal, angle. Extend the intended side.
- **The inequality is strict.** Because the remote angles are strictly positive, the exterior angle is
  strictly greater than each remote interior angle; it is never merely "greater than or equal."

:::
:::

## Connections

This node is the first corollary of **geo-triangle-angle-sum**, combining that theorem with the linear-pair
relation from vertical angles — a two-line angle chase. The equality feeds **geo-polygon-angles**, where
walking around a polygon and turning through each exterior angle sums the turns to a full $360^\circ$. The
strict inequality feeds **geo-triangle-inequality** and, classically, the ordering of sides by opposite
angles: it is Euclid's I.16, the lever that lets one angle bound another without measuring. Recognition
trigger: whenever a side of a triangle is extended and an angle opens outside, immediately replace that
exterior angle with the sum of the two far corners.

## History

Euclid proved two distinct statements about exterior angles in the *Elements* (c. 300 BC), and keeping them apart matters. Proposition I.16 shows only that an exterior angle is *greater* than either remote interior angle; this weaker form needs no parallel postulate and belongs to what later geometers call neutral geometry. Proposition I.32 then sharpens it to an *equality* — the exterior angle equals the sum of the two remote interior angles — but only by invoking parallels. Euclid placed I.16 early precisely because he needed a parallel-free inequality to bootstrap later constructions before the postulate entered. The nineteenth-century discovery of non-Euclidean geometry vindicated his caution, since I.16 survives there while I.32 does not.
