Set a three-legged stool on any floor, however bumpy, and it never wobbles — yet a
four-legged chair rocks on the same tiles. Three feet always find a rest; a fourth is
one foot too many. Something about *three* is special, and it is the same "three" that
lets a photographer level a tripod on a hillside.

## Discovery

You may assume only what points and lines already give you: two distinct points lie on
exactly one line.

1. Put $2$ distinct points on a page. How many lines pass through *both*? Now add a third
   point placed *off* that first line and count how many lines you can draw that each pass
   through *two* of your three points. Then place the third point *on* the first line
   instead and recount. What made the two answers differ?
2. A *plane* is a perfectly flat, endless sheet — the tabletop idealised, with no
   thickness and no edge. Ask of a plane the question you asked of a line: how few points
   do you need to pin one exact flat sheet in space? Test your guess by holding a stiff
   card against $1$ point, then $2$ points, then $3$ points of a room, and noting at which
   step the card can no longer tilt or spin.
3. In step 2, try the three points placed *in a row* (all on one line). Can the card still
   spin about that line? What extra condition on the three points kills the last wobble —
   and how does it echo the distinction you found in step 1?
4. A line and a plane sit in space. List every genuinely different way the line can meet
   the plane: it might share no point, exactly one point, or — push further — could it
   share two points without lying flat inside the sheet? Use "two points determine a line"
   to decide the last case.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

We adopt **plane** as the third undefined primitive, alongside point and line: a flat
surface with no thickness, extending without end in every direction within itself. Points,
lines, and planes are related by **incidence** ("lies on" / "passes through"), governed by:

- **Two points determine a line.** Through any two distinct points there is exactly one
  line (inherited from the line primitive).
- **Three noncollinear points determine a plane.** Through any three points not all on one
  line there is exactly one plane. Points on a common line are **collinear**; points on a
  common plane are **coplanar**.
- **A line in a plane.** If two distinct points of a line lie in a plane, the *entire* line
  lies in that plane.

Consequently a line and a plane meet in one of exactly three ways: the line lies **in** the
plane (all points shared), meets it in **exactly one** point, or is **parallel** to it
(no shared point). Two points are always collinear and any three points are always
coplanar; the content of "collinear" and "coplanar" begins at three and four points
respectively.

### Proof

These incidence facts are our axioms; what we *prove* is that they behave consistently and
that the "three ways" list is complete.

**A line meeting a plane in two points lies in the plane.** Suppose a line $\ell$ shares two
distinct points $A,B$ with a plane $\mathcal P$. By "two points determine a line," $\ell$ is
the *only* line through $A$ and $B$. By the line-in-plane axiom, since $A,B$ both lie in
$\mathcal P$, all of $\ell$ lies in $\mathcal P$. So a line cannot cross out of a plane after
touching it twice — sharing two points forces sharing every point. $\blacksquare$

**The three cases are exhaustive.** Let $\ell$ be a line and $\mathcal P$ a plane, and count
their shared points $n$.
- If $n = 0$, the line and plane share nothing: this is the parallel case.
- If $n = 1$, they meet in exactly one point.
- If $n \ge 2$, pick two of the shared points; by the paragraph above, $\ell \subseteq
  \mathcal P$, so in fact *every* point of $\ell$ is shared and the line lies in the plane.

No other value of $n$ is possible, so exactly one of {no point, one point, whole line}
occurs. That "$n\ge 2 \Rightarrow$ all points" collapse is why there is no fourth case
where a line pokes through a plane at two separated points. $\blacksquare$

### Worked Instance

The tripod. Its three feet are three points of the floor; as long as they are not in a
straight line (a real tripod splays them into a triangle), "three noncollinear points
determine a plane" says exactly one flat plane passes through all three feet — so all three
rest on the ground at once, on any surface, with no tilt left to take up. A fourth leg is a
fourth point, and a fourth point need *not* lie on the plane the first three already fixed;
if it misses, that leg hangs or the chair rocks. The stool is stable for the same reason a
photographer trusts a tripod on a hillside: three noncollinear points name one and only one
plane.

Counting sanity check from Discovery step 1: three noncollinear points give $\binom{3}{2}=3$
distinct lines (each pair its own line, all different because no point lies on the others'
line). Three *collinear* points give just $1$ line — every pair names the same line.

### Pitfalls

- **"Determine" means exactly one, not at least one.** Two points determine *a* line means
  one and only one. Existence and uniqueness are both being claimed.
- **Three points are not automatically three lines.** If the three are collinear they lie on
  a single line, not three. The count $\binom{3}{2}=3$ needs *noncollinear*.
- **Any three points are coplanar; the interesting threshold is four.** Just as any two
  points are trivially collinear, "coplanar" only says something once you have four or more
  points. Do not call three points "coplanar" as if it were a special property — it always
  holds.
- **A collinear triple does not determine a plane.** Three points in a row leave a plane
  free to spin about their line; infinitely many planes contain them. Noncollinearity is the
  hypothesis that cannot be dropped.
- **Parallel vs. skew is a line-line notion, not line-plane.** Here "parallel" means a line
  and plane sharing no point. Keep it separate from two lines being parallel.

:::
:::

## Connections

This node stands on the point and line primitives and promotes their lone incidence axiom
("two points determine a line") into a small system by adding the **plane** as a third
undefined term with its own incidence rules. The pattern — *undefined terms plus incidence
axioms* — is exactly the machinery the proof node formalises next, and the habit of chaining
"two points determine a line" into further conclusions is your first taste of deductive
proof. It also seeds **segments and rays**, which carve finite, directed pieces out of the
infinite lines living here. Recognition trigger: whenever a problem hinges on "how many
lines/planes are pinned down" or on "does this line lie in that plane," you are using
incidence, and the words *collinear* and *coplanar* are the flags.

## History

The study of how points, lines, and planes meet reaches back to the beginnings of Greek geometry. Thales of Miletus ($6$th century BCE) is traditionally credited with the first deductive geometric arguments, and Euclid's *Elements* ($c.$ $300$ BCE) opened Book I with definitions of point and line and postulates governing them. Euclid's treatment left incidence partly to intuition, however. The gap was closed only in $1899$, when David Hilbert's *Foundations of Geometry* restated geometry on a fully rigorous axiomatic basis, with incidence ("lies on," "passes through") among the first groups of axioms and point, line, and plane as undefined primitives. This node follows Hilbert's spirit. It matters because incidence is the bedrock layer on which every later geometric fact is built.
