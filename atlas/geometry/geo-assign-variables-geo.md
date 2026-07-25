A rectangle is described by only two facts: its perimeter is $26$ and its area is $40$. That's all — no
side length is given, no picture to scale. Yet those two numbers pin the rectangle down completely; there
is essentially one rectangle that fits. Somewhere inside "perimeter $26$, area $40$" the actual dimensions
are hiding. How do you drag them into the open when the figure itself tells you nothing?

## Discovery

You have a rectangle with perimeter $26$ and area $40$, and no lengths marked.

1. The lengths are unknown, so *name* them. Let the two side lengths be $x$ and $y$. Translate the two given
   facts into algebra: write the perimeter of the rectangle as an expression in $x$ and $y$ set equal to
   $26$, and write its area as an expression set equal to $40$. You now have two equations.
2. Two equations, two unknowns. From the perimeter equation, solve for one letter in terms of the other —
   express $y$ using $x$. Substitute that into the area equation so that only $x$ remains. What kind of
   equation in the single variable $x$ do you obtain?
3. Solve the single-variable equation from step 2 (it factors, or yields to the quadratic formula). How many
   values of $x$ does it hand you, and what are they?
4. Each value of $x$ produces a matching $y$ from the perimeter relation. Before celebrating, screen your
   solutions: a side length must be a positive number. Which of your value(s) describe a genuine rectangle,
   and would you keep both, or throw any away? What would a *negative* root have meant?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The technique — assign variables.** When a figure's measurements are unknown but constrained, give the
unknown lengths (or angles) letters, then **translate each geometric constraint into an equation**: a
perimeter or area formula (`geo-area-basics`), a Pythagorean relation, an angle sum, or a similar-triangle
ratio. Solve the resulting system algebraically, and finally **discard any solution that is geometrically
impossible** — a negative length, an angle out of range, a degenerate figure. Geometry supplies the
equations; algebra supplies the numbers; the figure supplies the legality check.

**The problem it solved here.** The rectangle with perimeter $26$ and area $40$ has side lengths
$$x=8,\qquad y=5$$
(an $8$-by-$5$ rectangle), the only positive solution of the system the two facts impose.

### Proof

Let the rectangle have side lengths $x$ and $y$. Its perimeter is $2(x+y)$ and its area is $xy$
(`geo-area-basics`), so the two given facts become the system
$$2(x+y)=26,\qquad xy=40,$$
i.e. $x+y=13$ and $xy=40$. Write $s=x+y=13$ and $P=xy=40$.

**Reduce to one variable.** A number $x$ and its partner $y=s-x$ have sum $s$ and product $x(s-x)=P$, so $x$
satisfies $x(s-x)=P$, that is
$$x^2-sx+P=0.$$
(Equivalently: $x$ and $y$ are the two roots of $t^2-st+P=0$, since a monic quadratic with roots $x,y$ is
$t^2-(x+y)t+xy$.) With $s=13$, $P=40$:
$$t^2-13t+40=0.$$
The discriminant is $s^2-4P=169-160=9\ge 0$, so real roots exist; factoring,
$$t^2-13t+40=(t-5)(t-8)=0\quad\Longrightarrow\quad t=5\ \text{or}\ t=8.$$
The two roots are the two side lengths: $\{x,y\}=\{8,5\}$.

**Legality check.** A side length must be a positive real number. Both roots, $5$ and $8$, are positive, so
both are geometrically legal — indeed they are the length and the width, not rival "answers," and the
rectangle is $8$ by $5$. Had the discriminant been negative, no real rectangle would meet the two
conditions; had a root been negative or zero, it would describe no rectangle and would be discarded, leaving
only the positive root(s). Here nothing is discarded because both roots pass the positivity test.
$\blacksquare$

### Worked Instance

Now a problem where a root *must* be thrown out, and where the Pythagorean relation supplies the equation.
**A right triangle's longer leg is $2$ more than twice its shorter leg, and its area is $30$. Find the
legs.** Nothing is given numerically except the area, so assign a variable: let the shorter leg be $x$. Then
the longer leg is $2x+2$, and the area constraint (`geo-area-basics`, $\tfrac12\cdot\text{leg}\cdot\text{leg}$
for a right triangle) reads
$$\tfrac12\,x\,(2x+2)=30\quad\Longrightarrow\quad x(2x+2)=60\quad\Longrightarrow\quad x^2+x-30=0.$$
Factor: $(x+6)(x-5)=0$, so $x=5$ or $x=-6$. A length cannot be negative, so **discard $x=-6$** — it solves
the algebra but describes no triangle. Keep $x=5$: the shorter leg is $5$ and the longer leg is
$2(5)+2=12$, a $5$-$12$ right triangle of area $\tfrac12\cdot 5\cdot 12=30$, confirming the fit. (As a
check, its hypotenuse is $\sqrt{5^2+12^2}=13$.) The single wrong root is exactly the kind of extraneous
solution the legality screen is for.

### Pitfalls

- **Count your equations against your unknowns.** Two unknown lengths need two independent constraints; one
  equation in two variables leaves a whole family of figures. Introducing a variable you cannot constrain
  only adds work — every letter must be pinned by an equation.
- **Screen every algebraic root against geometry.** A quadratic gladly returns a negative length or an angle
  above $180^\circ$; those are extraneous. A length must be positive, an angle in its allowed range, a figure
  non-degenerate. Solving the algebra is only half the job — validating the roots is the other half.
- **Do not confuse two legal roots with one right answer.** In the rectangle problem *both* roots ($5$ and
  $8$) are real dimensions — the two sides. Reporting only one, or calling the other extraneous, discards
  half the rectangle.
- **Choose variables that exploit symmetry.** Naming the sides "$x$ and $x+d$," or placing a figure so a
  variable measures from a line of symmetry, can halve the algebra. A clumsy choice of unknowns can turn a
  one-line problem into a quartic.

:::
:::

## Connections

This technique marries `alg-variable-expression` (naming an unknown and manipulating expressions) to
`geo-area-basics` (the area and perimeter formulas that become equations), and it draws on any geometric
relation you can write down — Pythagorean, angle-sum, or similar-triangle proportions. It is the workhorse
behind most computational geometry problems on the AMC and in contest algebra-geometry crossovers: whenever a
figure hands you numeric facts but no lengths, this is the move. Recognition trigger: "find the dimensions,"
a shape described only by its area/perimeter/angle data, a folded or inscribed figure with an unknown length,
or any geometry question that resolves to "set up and solve an equation" — always finishing by discarding the
roots the figure forbids.

## History

Naming an unknown length or angle with a symbol and writing equations from a figure is the everyday face of a profound merger. The systematic use of letters for both known and unknown quantities was introduced by François Viète in the late 16th century, and Descartes and Fermat (c. 1637) then wedded that algebra to geometry, so that a diagram's constraints could be written as equations and solved. Before this, geometric problems were attacked by construction and proportion alone; afterward, an unknown could simply be called $x$ and pursued algebraically. This node teaches the entry point to that revolution — the habit of translating a picture into symbols — which underlies all of analytic geometry and, ultimately, the calculus.
