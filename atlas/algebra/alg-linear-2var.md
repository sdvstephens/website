One equation, two unknowns: $2x + 3y = 12$. The pair $x=0,\,y=4$ satisfies it; so does $x=6,\,y=0$;
so does $x=3,\,y=2$. A single equation flatly refuses to name one answer — it hands you a whole
crowd of them. How many are in the crowd, and if you dotted every member on graph paper, what shape
would they make?

## Discovery

1. Keep working with $2x + 3y = 12$. Pick four values for $x$ — say $x = 0,\ 3,\ 6,\ -3$ — and for
   each one substitute it in and solve the resulting *one-variable* equation for $y$. Write down the
   four pairs $(x, y)$ you get.
2. Now solve the original equation $2x + 3y = 12$ once and for all for $y$, getting $y$ alone on the
   left as an expression in $x$. Record the expression exactly.
3. Plot your four pairs in the coordinate plane. Using the expression from step 2 together with what
   *slope of a line* says the graph of an equation of the shape $y = mx + b$ looks like, state what
   the **entire** set of solutions looks like. Then argue both directions: is every solution a point
   of that shape, and is every point of that shape a solution? Finally: how many solutions are there
   in total?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **two-variable linear equation** is one that can be written in **standard form**
$$a x + b y = c,$$
with real constants $a, b, c$ where $a$ and $b$ are **not both zero**. Its **solution set** is the
collection of all pairs $(x,y)$ making it true. That solution set, plotted, is a **line**:

- If $b \ne 0$, solving for $y$ gives the **slope-intercept form**
  $$y = -\frac{a}{b}\,x + \frac{c}{b},$$
  a non-vertical line of slope $m = -\dfrac{a}{b}$ and $y$-intercept $\dfrac{c}{b}$; each real $x$
  yields exactly one $y$, so there are **infinitely many** solutions.
- If $b = 0$ (so $a \ne 0$), the equation is $x = \dfrac{c}{a}$, a **vertical line**: every pair
  $\left(\frac{c}{a},\, y\right)$ with $y$ free.

A single such equation therefore never pins down one pair; it constrains $(x,y)$ to a line.

### Proof

Let $S = \{(x,y) \in \RR^2 : ax + by = c\}$ with $(a,b) \ne (0,0)$. We show $S$ is a line.

**Case $b \ne 0$.** Divide the defining equation through by $b$ and isolate $y$. Each step is an
*equivalence* because $b \ne 0$ makes division reversible:
$$ax + by = c \iff by = c - ax \iff y = -\frac{a}{b}\,x + \frac{c}{b}.$$
Hence $(x,y) \in S$ if and only if $y = mx + k$ with $m = -\frac{a}{b}$ and $k = \frac{c}{b}$. That
is, $S$ is exactly the graph of the function $x \mapsto mx + k$, which by *slope of a line* is a
non-vertical line of slope $m$ and $y$-intercept $k$. As $x$ ranges over all of $\RR$, the map
$x \mapsto (x,\, mx+k)$ is a bijection onto $S$, so $S$ is infinite: one point per real $x$.

**Case $b = 0$.** Then $a \ne 0$, and $ax = c \iff x = \frac{c}{a}$ (dividing by $a \ne 0$,
reversible). So $S = \left\{\left(\tfrac{c}{a},\, y\right) : y \in \RR\right\}$, the vertical line
through $x = \frac{c}{a}$ — again infinitely many solutions, now one per real $y$.

In both admissible cases $S$ is a line. (The excluded case $a = b = 0$ reduces to $0 = c$, whose
solution set is all of $\RR^2$ when $c = 0$ and empty when $c \ne 0$ — neither is a line, which is
exactly why the definition requires $a, b$ not both zero.) $\blacksquare$

### Worked Instance

The Hook, $2x + 3y = 12$: here $b = 3 \ne 0$, so
$$3y = 12 - 2x \iff y = -\frac{2}{3}\,x + 4,$$
a line of slope $-\frac23$ and $y$-intercept $4$. The four Discovery pairs come out as $(0,4)$,
$(3,2)$, $(6,0)$, $(-3,6)$. They are collinear: the slope between $(0,4)$ and $(3,2)$ is
$\frac{2-4}{3-0} = -\frac23$, and between $(3,2)$ and $(6,0)$ it is $\frac{0-2}{6-3} = -\frac23$ —
the same $m$ the algebra predicted. Check a pair directly: $(3,2)$ gives $2\cdot3 + 3\cdot2 = 6 + 6 =
12$. The crowd from the Hook is this single line, and it is infinite — for instance $x = 1.5$ forces
$y = 3$, and $(1.5, 3)$ sits right on it.

### Pitfalls

- **A single two-variable equation cannot be "solved" for one answer.** With two unknowns and one
  constraint you get a whole line of pairs; you can only solve *for one variable in terms of the
  other*.
- **The slope is $-\dfrac{a}{b}$, not $\dfrac{a}{b}$.** The minus sign comes from moving $ax$ across.
  Forgetting it flips the line's tilt.
- **$b = 0$ is a vertical line with undefined slope**, not slope $0$. It is the one case that
  *cannot* be written $y = mx + b$.
- **Both coefficients zero is not a line.** $0x + 0y = c$ is either always true ($c=0$, the whole
  plane) or never true ($c \ne 0$), so it is excluded from "linear equation."

:::
:::

## Connections

Sits between one-variable linear equations (where a single equation *does* pin down the answer) and
full linear systems: adding a *second* equation is what will finally cut the line down to a point.
It rests on the coordinate plane (pairs as points) and feeds directly into solving systems by
substitution and elimination, and into graphing lines from slope-intercept form. Recognition
trigger: any equation with $x$ and $y$ both to the first power and no products $xy$ — "$ax+by=c$",
"find all $(x,y)$ with…", "the line $2x+3y=12$" — is a two-variable linear equation, and its answer
is a line, not a number.

## History

The realization that an equation in two unknowns describes not a single answer but a whole line of solutions came with the marriage of algebra and geometry. Nicole Oresme, in the fourteenth century, had already plotted quantities against one another using "latitudes" and "longitudes," anticipating coordinates. The full idea crystallized with Pierre de Fermat and René Descartes, who independently in the $1630$s showed that an equation relating two variables corresponds to a curve in the plane, with linear equations giving straight lines — the founding insight of analytic geometry, published in Descartes's *La Géométrie* ($1637$). This let geometric questions be answered by algebra and vice versa. It mattered because representing relationships as lines opened the door to graphing, to systems of equations, and ultimately to the whole calculus of curves and functions.
