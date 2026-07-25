Every quadratic $y = ax^2 + bx + c$ draws the same iconic cup, and the same shape reflects radio
waves to a receiver and turns a bulb's glow into a headlight beam. A curve with one number to its
name, $a$, somehow encodes a *focusing* geometry. What single geometric condition produces exactly
the graph of a quadratic — and where does the focus hide?

## Discovery

1. Fix a point $F = (0, p)$ (the focus) and a horizontal line $y = -p$ (the directrix), with
   $p \gt 0$. Declare a point $(x, y)$ to be on the curve exactly when its distance to $F$ equals its
   distance to the line. Write the distance to $F$ (use the distance formula) and the distance to the
   line $y = -p$ (a vertical drop), and set the two equal.
2. Square both sides to clear the radical, expand, and cancel the terms common to both sides. Solve
   the surviving equation for $y$. Which familiar family of curves does the equation belong to, and
   what is the coefficient of $x^2$ in terms of $p$?
3. Slide the whole construction so the lowest point sits at $(h, k)$ instead of the origin, keeping a
   vertical axis. Redo the equidistance condition (focus $(h, k+p)$, directrix $y = k - p$) and write
   the resulting equation. How does its leading coefficient relate to the focal length $p$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **parabola** is the locus of points equidistant from a fixed point $F$ (the **focus**) and a fixed
line $\ell$ (the **directrix**). With focus $(0, p)$ and directrix $y = -p$ ($p \ne 0$), the locus is
$$x^2 = 4py, \qquad \text{equivalently} \qquad y = \frac{1}{4p}\,x^2.$$
Its lowest (or highest) point, the **vertex**, is the origin, midway between focus and directrix; the
axis of symmetry is the $y$-axis. Shifting the vertex to $(h, k)$ gives
$$y - k = \frac{1}{4p}\,(x - h)^2,$$
so *every* quadratic $y = ax^2 + bx + c$ is a parabola with focal length $p = \tfrac{1}{4a}$: the
purely algebraic coefficient $a$ is exactly $\tfrac{1}{4p}$, a focusing distance in disguise.

### Proof

*Definition $\Rightarrow$ equation.* Let $(x, y)$ be equidistant from $F = (0, p)$ and the line
$y = -p$. The distance to $F$ is $\sqrt{x^2 + (y - p)^2}$; the distance to the horizontal line is the
vertical gap $|y + p|$. Setting them equal and squaring (both sides nonnegative, so squaring is
reversible),
$$x^2 + (y - p)^2 = (y + p)^2.$$
Expanding, $x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$; the $y^2$ and $p^2$ terms cancel, leaving
$x^2 - 2py = 2py$, i.e.
$$x^2 = 4py.$$
*Equation $\Rightarrow$ definition.* Conversely, any $(x,y)$ with $x^2 = 4py$ satisfies
$x^2 + (y-p)^2 = 4py + (y-p)^2 = y^2 + 2py + p^2 = (y+p)^2$, so $\sqrt{x^2+(y-p)^2} = |y+p|$: it is
equidistant from $F$ and the directrix. Hence the locus and the graph of $x^2 = 4py$ are the *same*
set. The vertex $(0,0)$ is equidistant ($p$ from each), and replacing $x, y$ by $x - h, y - k$
translates the entire argument to vertex $(h,k)$. Finally $y = ax^2 + bx + c$ completes the square to
$y - k = a(x-h)^2$ with $a = \tfrac{1}{4p}$, matching the shifted form. $\blacksquare$

### Worked Instance

Resolve the Hook for $y = x^2$. Here $a = 1$, so $4p = 1$ and $p = \tfrac14$: focus $(0, \tfrac14)$,
directrix $y = -\tfrac14$. Verify the point $(1, 1)$ on the curve:
$$\text{distance to focus} = \sqrt{1^2 + \left(1 - \tfrac14\right)^2} = \sqrt{1 + \tfrac{9}{16}}
= \sqrt{\tfrac{25}{16}} = \tfrac54,$$
$$\text{distance to directrix} = 1 + \tfrac14 = \tfrac54.$$
Equal, as promised. A wider cup, $y = \tfrac{1}{8}x^2$, has $4p = 8$, $p = 2$: focus $(0,2)$,
directrix $y = -2$ — the smaller leading coefficient pushes the focus farther out, a flatter, more
gently focusing dish.

### Pitfalls

- **Focus and directrix straddle the vertex** at equal distance $p$; the directrix is a *line*, not a
  second point, and the vertex sits halfway between.
- **$4p$, not $p$.** The standard form is $x^2 = 4py$; forgetting the $4$ misplaces the focus by a
  factor of four. From $y = ax^2$, read $p = \tfrac{1}{4a}$.
- **Sideways parabolas open along the $x$-axis:** $y^2 = 4px$ has a horizontal axis and is *not* the
  graph of a function of $x$ (it fails the vertical-line test).
- **Sign of $p$ sets the opening.** $p \gt 0$ opens up (focus above); $p \lt 0$ opens down. Likewise
  $a \gt 0$ opens up, $a \lt 0$ down.

:::
:::

## Connections

This node reinterprets the quadratic of **[alg-quadratic-intro]** as a locus in the
**coordinate plane** ([def-coordinate-plane]), the first of the conic sections. The same
distance-equals-distance recipe, with *two* foci and a sum or difference of distances, produces the
**ellipse and hyperbola** ([alg-conics-ellipse-hyperbola]). The reflective property hinted at in the
Hook — every ray parallel to the axis bounces through the focus — is what makes dishes and headlights
parabolic. Recognition trigger: "equidistant from a point and a line," a squared term equal to a
linear one, or any request to find the focus/directrix of a quadratic.
