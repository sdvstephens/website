Two lines cross the page. One climbs gently, the other plunges steeply — and they meet at a
perfect right angle. Their slopes are $2$ and $-\tfrac12$. Try another perpendicular pair: $3$ and
$-\tfrac13$; or $-\tfrac45$ and $\tfrac54$. Each time, multiply the two slopes together and you get
the same number. What number is it, and why does a right angle force it?

## Discovery

Work on the coordinate plane, where a line's steepness is its slope $m=\frac{\text{rise}}{\text{run}}$.

1. Start with a single direction of travel: from a point, step $a$ units across (run) and $b$ units
   up (rise), with $a\ne 0$. Write the slope $m$ of a line pointing that way, in terms of $a$ and
   $b$.
2. Now spin that direction a quarter turn counterclockwise, so it points at right angles to the
   first. Under such a quarter turn the arrow $(a,b)$ becomes $(-b,a)$ — the old rise becomes the new
   run, the old run becomes the new rise, and exactly one of them picks up a minus sign. Write the
   slope $m'$ of a line pointing in this new direction, in terms of $a$ and $b$.
3. Multiply the two slopes $m$ and $m'$ from steps $1$ and $2$ together. Simplify the product to a
   single number.
4. Separately, ask what it takes for a second line *never* to meet the first — to run alongside it
   forever without crossing. Two lines that share a single direction of travel keep the same
   constant gap. What must the second line's slope equal for that to happen?
5. Test the quarter-turn rule on an awkward pair. Let the first direction be horizontal: run $a=1$,
   rise $b=0$, so a flat line. Apply the swap-and-sign-flip of step $2$ to $(1,0)$ and describe the
   new direction in words. Can you write its slope as an ordinary number, or does something break?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

On the coordinate plane, a **non-vertical line** can be written in three interchangeable forms:
- **Slope-intercept:** $y = mx + b$, where $m$ is the slope and $b$ the $y$-intercept.
- **Point-slope:** $y - y_1 = m\,(x - x_1)$, for a known point $(x_1,y_1)$ on the line.
- **Standard:** $Ax + By = C$, with $A,B,C$ constants (and $A,B$ not both $0$); this form also
  captures **vertical** lines $x = c$, which have **undefined slope**.

Two lines' relationship is read off their slopes:
- **Parallel** lines (never meeting, or identical) have **equal slope**: $m_1 = m_2$.
- **Perpendicular** lines have slopes whose **product is $-1$**: $m_1 m_2 = -1$, equivalently
  $m_2 = -\dfrac{1}{m_1}$.

The perpendicular criterion has one exception by convention: a **vertical** line ($x=c$) and a
**horizontal** line ($y=c$) are perpendicular, though one slope is undefined and the product rule
cannot be applied to them.

### Proof

**The forms.** Slope-intercept and point-slope are established in `alg-graphing-lines`. For standard
form: any non-vertical line $y=mx+b$ rearranges to $-mx + y = b$, which is $Ax+By=C$ with
$A=-m$, $B=1$, $C=b$. A vertical line collects all points with a fixed first coordinate, $x=c$; this
is $Ax+By=C$ with $A=1$, $B=0$, $C=c$, and since any two of its points share their $x$-value the run
$x_2-x_1=0$ makes the slope undefined. So standard form covers every line, vertical or not.

**Parallel means equal slope.** The slope of a non-vertical line is exactly the ratio
rise-to-run of its direction of travel, and by `alg-graphing-lines` this single number determines the
line's direction. If $m_1=m_2$, the two lines travel in the same direction; being straight and equally
inclined, they keep a constant perpendicular separation, so they either never meet or coincide —
parallel. Conversely, if two lines never meet, they cannot differ in direction (two lines of
different slopes through the plane must cross, since their heights $m_1x+b_1$ and $m_2x+b_2$ agree at
the single $x=\frac{b_2-b_1}{m_1-m_2}$ when $m_1\ne m_2$); hence equal slopes. So parallel
$\iff m_1=m_2$.

**Perpendicular means product $-1$.** A non-vertical, non-horizontal line has a direction arrow
$(a,b)$ with $a\ne 0$ and $b\ne 0$, and slope $m_1=\dfrac{b}{a}$. Rotating a direction by $90^\circ$
sends the arrow $(a,b)$ to $(-b,a)$: this is the standard quarter turn, which preserves length and
opens a right angle (it sends the horizontal unit $(1,0)$ to the vertical unit $(0,1)$ and the
vertical unit $(0,1)$ to $(-1,0)$, rotating the whole plane rigidly by a right angle). The rotated
arrow $(-b,a)$ has run $-b$ and rise $a$, so a line along it has slope
$$m_2 = \frac{a}{-b} = -\frac{a}{b}.$$
Their product is
$$m_1 m_2 = \frac{b}{a}\cdot\left(-\frac{a}{b}\right) = -\frac{ab}{ab} = -1,$$
valid since $a,b\ne 0$. Conversely, if $m_1 m_2 = -1$ then $m_2 = -1/m_1$ is exactly the slope
produced by the quarter turn of $m_1$'s direction, so the two lines' directions differ by a right
angle and the lines are perpendicular.

**The vertical/horizontal case.** If one line is vertical ($x=c$) its slope is undefined and the
product rule is inapplicable. Here we argue directly: a vertical line runs straight up the $y$-axis
direction and a horizontal line runs straight along the $x$-axis direction, and these two axes meet
at a right angle by construction of the coordinate plane. So a vertical and a horizontal line are
perpendicular. No other line is perpendicular to a vertical one, since any non-vertical line makes a
non-right angle with the vertical direction. $\blacksquare$

### Worked Instance

Take the line through $(1,2)$ and $(3,8)$. Its slope is
$$m = \frac{8-2}{3-1} = \frac{6}{2} = 3.$$
Point-slope through $(1,2)$ gives $y-2 = 3(x-1)$, i.e. $y = 3x - 1$; in standard form,
$3x - y = 1$. A line **parallel** to it through, say, $(0,4)$ has the same slope $3$: $y = 3x+4$. A
line **perpendicular** to it through $(3,8)$ must have slope $m_2$ with $3\,m_2 = -1$, so
$m_2 = -\tfrac13$; its equation is
$$y - 8 = -\tfrac13\,(x - 3),\qquad\text{i.e.}\qquad y = -\tfrac13 x + 9.$$
Check the Hook: slopes $2$ and $-\tfrac12$ multiply to $2\cdot(-\tfrac12) = -1$, and $3$ and
$-\tfrac13$ to $-1$ — the right angle is exactly the condition "product $= -1$."

### Pitfalls

- **Vertical lines have no slope.** For $x=c$ the run is $0$, so $m$ is undefined; you cannot plug it
  into $m_1 m_2 = -1$. Handle a vertical/horizontal perpendicular pair by hand.
- **The perpendicular product is $-1$, not $+1$.** Two slopes multiplying to $+1$ (like $2$ and
  $\tfrac12$) are *not* perpendicular; you need the negative reciprocal, $m_2 = -1/m_1$.
- **Parallel is equal slope; perpendicular is negative reciprocal.** Do not mix them: equal slopes
  never cross, negative-reciprocal slopes cross at a right angle.
- **Standard form is not unique.** $3x - y = 1$ and $6x - 2y = 2$ are the same line; scale all of
  $A,B,C$ together and nothing changes.

:::
:::

## Connections

This node turns `def-coordinate-plane` and `alg-graphing-lines` into the working algebra of lines:
three equivalent forms plus the two slope criteria. The quarter-turn argument for perpendicularity is
the seed of the vector $(A,B)$ being normal to $Ax+By=C$, which drives `geo-distance-point-line`. The
same coordinate description of lines underlies `geo-analytic-circles` (a circle meeting lines) and
`geo-shoelace-elem` (a polygon's edges as directed segments). Recognition trigger: any problem giving
points or slopes and asking whether lines are parallel, perpendicular, or where they cross — reach for
the slope criteria and standard form.

## History

Describing lines by equations such as $Ax+By=C$ is the hallmark of analytic geometry, founded independently around 1637 by René Descartes, in *La Géométrie*, and Pierre de Fermat. They fused algebra with geometry by attaching coordinates to points, so that geometric conditions became equations to be solved — Descartes seeking a universal method for construction problems, Fermat aiming to reconstruct lost Greek loci. Slope together with the parallel and perpendicular criteria are natural fruits of this marriage, though the modern notation and even the word "slope" settled only later. Their revolution turned the ruler-and-compass geometry of Euclid into something a symbol manipulator could compute, and it paved the way for the calculus.
