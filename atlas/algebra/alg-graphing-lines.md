You are told a line has slope $4$ and passes through $(2, 3)$. That is *all* — two facts. Yet they
are enough to draw the whole line and to write the single equation every one of its infinitely many
points obeys. How do two facts nail down an entire set of points?

## Discovery

1. A line has constant slope $m$ and meets the $y$-axis at the point $(0, b)$. Take a *general* point
   $(x, y)$ on it (with $x \ne 0$). Write the rise-over-run from $(0, b)$ to $(x, y)$, set it equal
   to $m$, and then isolate $y$. Record the equation you reach.
2. Now the known point is *off* the axis: the line has slope $m$ and passes through a given point
   $(x_1, y_1)$. Repeat the rise-over-run argument from $(x_1, y_1)$ to a general $(x, y)$ — but this
   time, instead of isolating $y$, **clear the denominator** by multiplying across. Record the
   equation you reach.
3. Take a specific line, slope $2$ and $y$-intercept $-1$. Give a two-step recipe to draw it fast,
   using only the intercept and the slope read as "rise over run" steps. Then push on the edges: what
   does your recipe (and the equation) become if $m = 0$? And can a perfectly *vertical* line be
   captured in the form $y = mx + b$ at all?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A non-vertical line can be written in two standard forms.

- **Slope-intercept form.** The line with slope $m$ and $y$-intercept $b$ is exactly
  $$y = m x + b,$$
  where $b$ is the $y$-value at $x = 0$.
- **Point-slope form.** The line with slope $m$ through a point $(x_1, y_1)$ is exactly
  $$y - y_1 = m\,(x - x_1),$$
  which rearranges to slope-intercept form with $b = y_1 - m x_1$.

**Graphing recipe.** Plot a known point (the intercept $(0,b)$, or any $(x_1,y_1)$); from it step
"run" units horizontally and "rise" units vertically according to $m = \frac{\text{rise}}{\text{run}}$
(downward when $m \lt 0$) to land a second point; draw the line through the two.

**Edge cases.** If $m = 0$ the line is **horizontal**, $y = b$. A **vertical** line has undefined
slope and is written $x = a$; it *cannot* be put in the form $y = mx + b$.

### Proof

**Slope-intercept.** By *slope of a line*, a non-vertical line of slope $m$ through $(0,b)$ satisfies,
for every point $(x,y)$ on it with $x \ne 0$,
$$\frac{y - b}{x - 0} = m \iff y - b = m x \iff y = m x + b,$$
and the point $(0,b)$ itself also satisfies $y = mx + b$. So the line is exactly the graph of
$x \mapsto mx + b$.

**Point-slope.** Let the line have slope $m$ and pass through $(x_1, y_1)$. For any other point
$(x,y)$ on it, $x \ne x_1$, the slope from $(x_1,y_1)$ to $(x,y)$ equals $m$:
$$\frac{y - y_1}{x - x_1} = m \iff y - y_1 = m\,(x - x_1),$$
the multiplication by $x - x_1$ being reversible since $x \ne x_1$. The multiplied-out equation
$y - y_1 = m(x - x_1)$ *also* holds at $(x_1, y_1)$ (both sides are $0$), so it removes the exception:
the points satisfying $y - y_1 = m(x - x_1)$ are precisely those of the line. Expanding,
$$y - y_1 = m x - m x_1 \iff y = m x + (y_1 - m x_1),$$
which is slope-intercept form with $b = y_1 - m x_1$ — so the two forms describe the same line.

**Graphing recipe.** Two distinct points determine a unique line (in the coordinate plane, distinct
non-identical points lie on exactly one line). The plotted anchor and the stepped point are distinct
(the step moves a nonzero run, or for a vertical step a nonzero rise), and by construction the slope
between them is $m$ and the anchor lies on the intended line; hence the line drawn through them is the
intended one.

**Vertical case.** A vertical line consists of points sharing one $x$-value $a$; any two of them have
run $x_2 - x_1 = 0$, so their slope is undefined. No value of $m$ can serve, so the line is not the
graph of any $y = mx + b$; it requires the separate form $x = a$. When $m = 0$, slope-intercept
degenerates to the constant $y = b$, a horizontal line. $\blacksquare$

### Worked Instance

The Hook: slope $4$ through $(2,3)$. Point-slope form is immediate:
$$y - 3 = 4\,(x - 2).$$
Expand to slope-intercept: $y = 4x - 8 + 3 = 4x - 5$, so the $y$-intercept is $-5$. To graph, plot
$(2,3)$; since $m = 4 = \frac{4}{1}$, step $1$ right and $4$ up to $(3,7)$, then draw the line. And
the value at $x = 10$ needs no plotting: $y = 4(10) - 5 = 35$, i.e. the point $(10, 35)$. Two facts —
a slope and a point — reconstructed the whole line and every point on it.

### Pitfalls

- **Watch the signs in point-slope.** It is $y - y_1 = m(x - x_1)$. Through $(-2, 5)$ this reads
  $y - 5 = m\,(x - (-2)) = m\,(x + 2)$ — a negative coordinate flips the inner sign.
- **$b$ is the $y$-intercept, not the $x$-intercept.** It is the height at $x = 0$, where the line
  crosses the vertical axis; the $x$-intercept is a different point (where $y = 0$).
- **Vertical lines are $x = a$, slope *undefined*, not $0$.** Slope $0$ is a *horizontal* line
  $y = b$. Do not force a vertical line into $y = mx + b$.
- **Do not swap $m$ and $b$.** In $y = mx + b$ the coefficient of $x$ is the slope; the lone constant
  is the intercept.
- **Negative slope steps downward.** Reading $m = \frac{\text{rise}}{\text{run}}$, a negative $m$
  means as you move right the line falls; the "rise" is negative.

:::
:::

## Connections

Turns the abstract "slope is constant" characterization of a line into working tools: from a slope
and a point you write the equation instantly (point-slope) and read off where it crosses the axis
(slope-intercept). Slope-intercept form is the concrete face of a two-variable linear equation solved
for $y$; point-slope is the natural starting form and the template that, with a *variable* second
point, becomes the secant line and ultimately the tangent. Recognition trigger: given "a slope and a
point," reach for point-slope; given "slope and $y$-intercept" or asked to graph fast, reach for
$y = mx + b$.

## History

Drawing equations as pictures rests on the coordinate idea, whose seeds appear in Nicole Oresme's fourteenth-century diagrams plotting one varying quantity against another. The method was made general and powerful by Pierre de Fermat and René Descartes in the $1630$s, whose analytic geometry — announced in Descartes's *La Géométrie* ($1637$) — assigned each point a pair of numbers so that a linear equation becomes a straight line. The now-ubiquitous $x$-$y$ axes and the term "Cartesian" honor Descartes, though the crossing perpendicular axes were popularized later. The description of a line by its slope and intercept was refined through the eighteenth and nineteenth centuries into the forms taught today. Graphing lines mattered because it fused two branches of mathematics: geometry could now be computed, and algebra could now be seen, a synthesis that made calculus and modern data visualization possible.
