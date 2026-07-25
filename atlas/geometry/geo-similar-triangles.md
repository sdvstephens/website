Slice a triangle with a line parallel to one of its sides. The little triangle you cut off is a
perfect scale model of the whole — same shape, shrunk. That single observation lets you compute a
length you cannot reach with a ruler: the height of a tree from its shadow, the distance to a ship,
the unknown segment in a figure with no numbers on it. Why does a parallel cut always produce a copy?

## Discovery

Two triangles are **similar** if one is a scaled copy of the other: equal angles, and corresponding
sides in a constant ratio. Take triangle $ABC$ and a line through a point $D$ on side $AB$, parallel
to $BC$, meeting $AC$ at $E$.

1. Because $DE \parallel BC$, compare angle $\angle ADE$ with angle $\angle ABC$, and $\angle AED$
   with $\angle ACB$. Which pairs of angles are equal, and by what property of parallel lines cut by
   a transversal? What about the angle at $A$ — is it shared?
2. From step 1, triangles $ADE$ and $ABC$ have all three angles equal. Argue why that forces their
   three pairs of corresponding sides into a *single common ratio* $k = AD/AB$. (Hint: this is the
   claim to be proven, not assumed — think about what "scaled copy" must mean, and defer the rigorous
   version to the Proof.)
3. Suppose $AD/AB = k$. Express $AE$ and $DE$ in terms of $k$ and the sides of $ABC$. In particular,
   what is $DE$ as a fraction of $BC$?
4. Now the payoff. Set up a figure for the tree-and-shadow problem: a vertical stick of known height
   casts a known shadow at the same moment a tree casts a longer shadow. Draw the two right triangles
   (stick + its shadow, tree + its shadow). Why are they similar, and what proportion recovers the
   tree's height?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Two triangles are **similar** (written $\triangle ABC \sim \triangle DEF$) when their corresponding
angles are equal; equivalently, when their corresponding sides are in a constant ratio. The key
criteria:

- **AA:** if two angles of one triangle equal two angles of another, the triangles are similar (the
  third angles are then forced equal, since angles sum to $180^\circ$).
- **SAS similarity:** if two sides are in proportion and the included angles are equal, the triangles
  are similar.
- **SSS similarity:** if all three side pairs are in the same ratio, the triangles are similar.

Similar triangles give the **proportionality of corresponding sides**: if $\triangle ABC \sim
\triangle DEF$, then
$$\frac{AB}{DE} = \frac{BC}{EF} = \frac{CA}{FD}.$$
A special case is the **Basic Proportionality (Thales) Theorem**: a line parallel to one side of a
triangle divides the other two sides proportionally.

### Proof

We prove the AA criterion together with the Basic Proportionality Theorem, since one yields the other.

**Basic Proportionality Theorem.** In $\triangle ABC$, let a line parallel to $BC$ meet $AB$ at $D$
and $AC$ at $E$. Claim: $\dfrac{AD}{DB} = \dfrac{AE}{EC}$.

Consider triangles $BDE$ and $CDE$: they share the base $DE$, and their apexes $B$ and $C$ lie on the
line through $B, C$, which is parallel to $DE$. Two triangles on the same base with apexes on a line
parallel to that base have equal area (equal base, equal height). So $[BDE] = [CDE]$. Now compare
$[ADE]$ to each. Triangles $ADE$ and $BDE$ share the apex $E$ and have bases $AD$ and $DB$ along the
same line $AB$; triangles with equal heights have areas in the ratio of their bases, so
$\dfrac{[ADE]}{[BDE]} = \dfrac{AD}{DB}$. Likewise, using apex $D$ and bases $AE, EC$ along $AC$,
$\dfrac{[ADE]}{[CDE]} = \dfrac{AE}{EC}$. Since $[BDE] = [CDE]$, the two left sides are equal, hence
$$\frac{AD}{DB} = \frac{AE}{EC}.$$
Adding $1$ to both sides ($\tfrac{AD}{DB}+1 = \tfrac{AB}{DB}$, similarly on the right) gives
$\dfrac{AB}{DB} = \dfrac{AC}{EC}$, and taking reciprocals of the pieces yields $\dfrac{AD}{AB} =
\dfrac{AE}{AC}$.

**AA similarity.** Suppose triangles $ABC$ and $A'B'C'$ have $\angle A = \angle A'$ and $\angle B =
\angle B'$ (so $\angle C = \angle C'$ too). Place $A'B'C'$ so that $A'$ coincides with $A$ and ray
$A'B'$ lies along ray $AB$; since $\angle A' = \angle A$, ray $A'C'$ lies along ray $AC$. Let $B'$ land
at a point $D$ on line $AB$ and $C'$ at $E$ on line $AC$. Because $\angle ADE = \angle ABC$ (both equal
$\angle B$) and these are corresponding angles for lines $DE$ and $BC$ cut by transversal $AB$, we get
$DE \parallel BC$. By the Basic Proportionality Theorem just proved, $\dfrac{AD}{AB} = \dfrac{AE}{AC}$,
and by the same theorem applied with the parallel, $\dfrac{DE}{BC} = \dfrac{AD}{AB}$. Thus all three
ratios $\dfrac{A'B'}{AB} = \dfrac{A'C'}{AC} = \dfrac{B'C'}{BC}$ are equal — the triangles are similar.
$\blacksquare$

### Worked Instance

Resolve the Hook. At a given moment a vertical stick of height $1.5$ m casts a shadow $2$ m long; at
the same moment a tree casts a shadow $18$ m long. The sun's rays hit both at the same angle, so the
stick-plus-shadow right triangle and the tree-plus-shadow right triangle share that angle and both
have a right angle at the ground — two equal angles, so by AA they are similar. Corresponding sides are
proportional:
$$\frac{\text{tree height}}{\text{stick height}} = \frac{\text{tree shadow}}{\text{stick shadow}}
\quad\Longrightarrow\quad \frac{h}{1.5} = \frac{18}{2}.$$
Hence $h = 1.5\cdot 9 = 13.5$ m. A length no ruler could reach, read off from a proportion.

### Pitfalls

- **Match corresponding vertices in order.** $\triangle ABC \sim \triangle DEF$ means $A\leftrightarrow
  D$, $B\leftrightarrow E$, $C\leftrightarrow F$; scrambling the order pairs the wrong sides in the
  proportion.
- Similarity is *equal ratios*, congruence is *equal lengths* (ratio $1$). Similar triangles need not
  be the same size.
- **There is no "SSA" similarity** in general (nor SSA congruence) — two sides and a non-included angle
  can leave the triangle ambiguous.
- Equal *ratios* of sides do not require the sides themselves to be equal; and equal areas do not imply
  similarity (a tall thin triangle and a short wide one can share an area).
- When you set up the proportion, keep the two triangles' quantities on consistent sides of the
  fraction (both numerators from the same triangle), or the cross-multiplication inverts.

:::
:::

## Connections

Prereqs: none beyond basic angle facts and triangle area. Similar triangles are the backbone of
classical (synthetic) geometry: they convert equal angles into equal ratios, powering the Angle
Bisector Theorem, the geometric mean in a right triangle, and — crucially — the power of a point
(`geo-power-of-point`), whose proof is exactly a similar-triangles ratio. They complement the
coordinate and vector methods: where those *compute*, similarity *sees structure*. Recognition
trigger: parallel lines in a figure, shared or equal angles, a request for an unknown length as a
ratio, or "prove these two products of lengths are equal."
