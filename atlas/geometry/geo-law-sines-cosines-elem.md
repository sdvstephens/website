The Pythagorean theorem is a marvel, but it only speaks to right triangles. Hand it a triangle with sides
$5$ and $7$ meeting at a $60^\circ$ angle and it falls silent — there is no right angle to anchor it, yet the
third side is completely determined. Two sides and the angle between them fix the whole triangle, so *some*
rule must compute that third side. What replaces $a^2+b^2=c^2$ when the corner is not square?

## Discovery

Let $\triangle ABC$ have sides $a=BC$, $b=CA$, $c=AB$, with angles $A,B,C$ at the matching vertices. Nothing
is assumed right-angled. The one tool that turns a general triangle into right triangles is an **altitude**.

1. Drop the altitude from $C$ straight down to side $AB$, meeting it at $F$; call its length $h=CF$. This
   splits $\triangle ABC$ into two right triangles, $\triangle AFC$ and $\triangle BFC$. In $\triangle AFC$
   the angle at $A$ sees $h$ as its opposite leg and $b$ as its hypotenuse; write $h$ using $\sin A$. In
   $\triangle BFC$ do the same with the angle at $B$, writing $h$ using $\sin B$.
2. Both expressions in step 1 are the length of the *same* segment $h$. Set them equal, then rearrange into
   a statement comparing $\dfrac{a}{\sin A}$ with $\dfrac{b}{\sin B}$. What equality survives? (Repeating the
   construction with the altitude from a different vertex would bring in the third ratio.)
3. Now a different altitude, for a different goal: drop the perpendicular from $A$ to side $BC$, foot $H$,
   length $h'=AH$. The angle at $C$ lives in right triangle $AHC$ with hypotenuse $b$. Write the length
   $CH$ using $\cos C$, and write $h'$ using $\sin C$.
4. The foot $H$ splits $BC$ (length $a$) so that $BH=a-CH$. In right triangle $AHB$, the hypotenuse is
   $c=AB$; apply the Pythagorean theorem to get $c^2=h'^2+BH^2$. Substitute your step-3 expressions for
   $h'$ and $CH$, expand $BH^2=(a-CH)^2$, and use $\sin^2 C+\cos^2 C=1$ to collapse two terms. What single
   relation among $a$, $b$, $c$, and $\cos C$ remains?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

In any triangle $\triangle ABC$ with sides $a,b,c$ opposite angles $A,B,C$:

**Law of Sines.**
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.$$
Each side is proportional to the sine of the angle opposite it.

**Law of Cosines.**
$$c^2=a^2+b^2-2ab\cos C,$$
and, cyclically, $a^2=b^2+c^2-2bc\cos A$ and $b^2=c^2+a^2-2ca\cos B$. The squared side equals the sum of the
squares of the other two, corrected by $-2ab\cos C$ where $C$ is the angle *between* those two sides. When
$C=90^\circ$, $\cos C=0$ and the correction vanishes, recovering the Pythagorean theorem exactly — the Law
of Cosines is its generalization to any angle.

### Proof

Set up $\triangle ABC$ with sides $a=BC$, $b=CA$, $c=AB$ and angles $A,B,C$ at $A,B,C$.

**Law of Sines.** Drop the altitude from $C$ to line $AB$, with foot $F$ and length $h=CF$. This creates two
right triangles sharing the leg $h$. In right triangle $\triangle AFC$, the angle at $A$ has opposite leg
$h$ and hypotenuse $CA=b$, so $\sin A=\dfrac{h}{b}$, i.e. $h=b\sin A$. In right triangle $\triangle BFC$, the
angle at $B$ has opposite leg $h$ and hypotenuse $CB=a$, so $h=a\sin B$. Equating the two expressions for
the one segment $h$,
$$b\sin A=a\sin B\quad\Longrightarrow\quad \frac{a}{\sin A}=\frac{b}{\sin B}.$$
Repeating the construction with the altitude from $A$ (onto $BC$) gives, by the identical argument,
$\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$. Chaining the two equalities yields
$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$.

**Law of Cosines (acute case).** Drop the altitude from $A$ to line $BC$, foot $H$, length $h'=AH$. In right
triangle $\triangle AHC$, the angle at $C$ has adjacent leg $CH$ and hypotenuse $CA=b$, so $CH=b\cos C$; its
opposite leg is $h'$, so $h'=b\sin C$. When $C$ is acute the foot $H$ lies on segment $BC$ between $B$ and
$C$, so $BH=a-CH=a-b\cos C$. Apply the Pythagorean theorem to right triangle $\triangle AHB$, whose
hypotenuse is $AB=c$:
$$c^2=h'^2+BH^2=(b\sin C)^2+(a-b\cos C)^2.$$
Expand:
$$c^2=b^2\sin^2 C+a^2-2ab\cos C+b^2\cos^2 C=a^2+b^2(\sin^2 C+\cos^2 C)-2ab\cos C.$$
Since $\sin^2 C+\cos^2 C=1$,
$$c^2=a^2+b^2-2ab\cos C.$$

**Law of Cosines (obtuse case).** If $C$ is obtuse, the foot $H$ falls on the extension of $BC$ beyond $C$,
so the angle $\angle ACH$ is the supplement $180^\circ-C$. Using the unit-circle values
$\cos(180^\circ-C)=-\cos C$ and $\sin(180^\circ-C)=\sin C$, the right triangle $\triangle AHC$ gives
$CH=b\cos(180^\circ-C)=-b\cos C$ (a positive length, since $\cos C\lt 0$) and $h'=b\sin(180^\circ-C)=b\sin C$.
Now $H$ lies outside segment $BC$ beyond $C$, so $BH=BC+CH=a+(-b\cos C)=a-b\cos C$ — the *same* expression as
before. The Pythagorean theorem on $\triangle AHB$ again gives $c^2=(b\sin C)^2+(a-b\cos C)^2$, and the
identical algebra yields $c^2=a^2+b^2-2ab\cos C$. (The right-angle case $C=90^\circ$ has $\cos C=0$ and $H=C$,
so $c^2=a^2+b^2$, the plain Pythagorean theorem.) All three positions of the foot give one formula; the cyclic
versions follow by relabeling. $\blacksquare$

### Worked Instance

A triangle has $a=5$, $b=7$, and the included angle $C=60^\circ$ between them. The side opposite $C$ is $c$,
so the Law of Cosines gives
$$c^2=a^2+b^2-2ab\cos C=25+49-2\cdot 5\cdot 7\cdot\cos 60^\circ=74-70\cdot\tfrac12=74-35=39,$$
hence $c=\sqrt{39}\approx 6.24$ — the third side the Hook insisted must exist, now computed. Had $C$ been
$90^\circ$, the term $-2ab\cos C$ would vanish and we would get $c^2=25+49=74$, the ordinary Pythagorean
answer.

To find another angle, use the Law of Sines: $\dfrac{a}{\sin A}=\dfrac{c}{\sin C}$ gives
$\sin A=\dfrac{a\sin C}{c}=\dfrac{5\cdot(\sqrt3/2)}{\sqrt{39}}$, from which $A$ (acute here) is determined.

### Pitfalls

- **The cosine term is subtracted, and its angle is the included one.** In $c^2=a^2+b^2-2ab\cos C$, the angle
  $C$ is the one *between* sides $a$ and $b$ — equivalently, opposite the side $c$ you are computing. Using
  the wrong angle, or writing $+2ab\cos C$, is the standard error.
- **Law of Sines has an ambiguous case (SSA).** Given two sides and a non-included angle, $\sin A$ may
  correspond to two angles ($A$ and $180^\circ-A$), so two different triangles can fit the data. Always check
  whether the second option is geometrically possible.
- **Match each side to the angle opposite it.** In $\dfrac{a}{\sin A}$ the side $a$ and angle $A$ must be
  opposite one another; pairing a side with an adjacent angle wrecks the proportion.
- **Prefer Law of Cosines for SSS and SAS, Law of Sines for ASA/AAS.** With three sides, or two sides and
  the included angle, reach for cosines; with a side and its opposite angle known, reach for sines.

:::
:::

## Connections

These laws grow out of `geo-trig-right-triangles` (the altitude turns a general triangle into right ones
carrying $\sin$ and $\cos$) and `geo-pythagorean-theorem` (which the cosine algebra invokes, and which the
Law of Cosines generalizes). They unlock the fuller `geo-law-sines-cosines` treatment — including the
circumradius form $\tfrac{a}{\sin A}=2R$ and the area formula $\tfrac12 ab\sin C$ — and `geo-heron-elem`,
which extracts a triangle's area from its three sides by way of the Law of Cosines. Recognition trigger: a
non-right triangle with mixed side/angle data — two sides and the included angle, all three sides, or a side
with its opposite angle — where the plain Pythagorean theorem does not apply.

## History

The Law of Cosines is a trigonometric restatement of two propositions in Euclid's *Elements* Book II (c. 300 BCE), which handled obtuse and acute triangles geometrically before trigonometry as such existed. The Law of Sines was developed by medieval Islamic and Central Asian mathematicians — Nasir al-Din al-Tusi (13th century) presented it as a general theorem for solving triangles, and the Persian astronomer Jamshid al-Kashi (15th century) is honored in the French name for the Law of Cosines. These scholars were driven by astronomy and by the demands of spherical trigonometry for the Islamic calendar and the direction of prayer. Together the two laws solve any triangle from sufficient side-and-angle data, generalizing the Pythagorean theorem to triangles that are not right-angled.
