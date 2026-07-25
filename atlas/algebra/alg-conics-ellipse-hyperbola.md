Pin two thumbtacks, loop a slack string over both, pull it taut with a pencil, and trace: out comes a
perfect oval. Keep the *sum* of the two distances fixed and you get an ellipse; keep their *difference*
fixed instead and you get a two-branched hyperbola with straight-line guides it hugs but never meets.
Why do these two locus rules produce those two exact equations?

## Discovery

1. Put the foci at $(\pm c, 0)$ and require the distance-sum to equal a constant $2a$ (with
   $a \gt c \gt 0$). Write $\sqrt{(x+c)^2 + y^2} + \sqrt{(x-c)^2 + y^2} = 2a$. Move one radical to the
   other side, square, and simplify until only one radical remains; isolate it and square again.
   Reduce to an equation containing just $x^2$ and $y^2$.
2. Introduce $b^2 = a^2 - c^2$ (positive since $a \gt c$). Rewrite your equation from step 1 in terms
   of $a$ and $b$. Divide through to reach the form $\dfrac{x^2}{\square} + \dfrac{y^2}{\square} = 1$.
3. Repeat with the *difference* of distances fixed at $2a$, now with $c \gt a$: start from
   $\big|\sqrt{(x+c)^2+y^2} - \sqrt{(x-c)^2+y^2}\big| = 2a$, and carry out the same two squarings. Set
   $b^2 = c^2 - a^2$ this time. What sign appears between the two squared terms? For $|x|$ large,
   solve your equation approximately for $y$ — which straight lines does the curve approach?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Both are loci defined by two **foci** at $(\pm c, 0)$.

**Ellipse** — constant distance *sum* $2a$ with $a \gt c$. Setting $b^2 = a^2 - c^2 \gt 0$,
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1,$$
with vertices $(\pm a, 0)$, co-vertices $(0, \pm b)$, major axis along the foci. 

**Hyperbola** — constant distance *difference* $\pm 2a$ with $c \gt a$. Setting $b^2 = c^2 - a^2 \gt 0$,
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1,$$
two branches opening left/right through vertices $(\pm a, 0)$, with **asymptotes** $y = \pm\dfrac{b}{a}x$.

For both, the **eccentricity** is $e = c/a$ (ellipse $0 \le e \lt 1$; hyperbola $e \gt 1$), and the
relation among $a, b, c$ is $c^2 = a^2 - b^2$ (ellipse) or $c^2 = a^2 + b^2$ (hyperbola).

### Proof

*Ellipse.* From $\sqrt{(x+c)^2+y^2} = 2a - \sqrt{(x-c)^2+y^2}$, square:
$$(x+c)^2 + y^2 = 4a^2 - 4a\sqrt{(x-c)^2+y^2} + (x-c)^2 + y^2.$$
Expanding $(x\pm c)^2 = x^2 \pm 2cx + c^2$ and cancelling the common $x^2 + c^2 + y^2$ gives
$4cx = 4a^2 - 4a\sqrt{(x-c)^2+y^2}$, i.e. $a\sqrt{(x-c)^2 + y^2} = a^2 - cx$. Square again:
$$a^2\big((x-c)^2 + y^2\big) = a^4 - 2a^2 cx + c^2 x^2.$$
Expand and gather: $a^2 x^2 - 2a^2 cx + a^2 c^2 + a^2 y^2 = a^4 - 2a^2 cx + c^2 x^2$, so
$(a^2 - c^2)x^2 + a^2 y^2 = a^2(a^2 - c^2)$. With $b^2 = a^2 - c^2$ this is $b^2 x^2 + a^2 y^2 = a^2
b^2$; dividing by $a^2 b^2$ yields $\tfrac{x^2}{a^2} + \tfrac{y^2}{b^2} = 1$. Each squaring is
reversible on the branch where the isolated radical's partner ($2a - \sqrt{\cdots}$ and $a^2 - cx$
respectively) is nonnegative, which holds throughout the bounded locus; so the equation and the locus
coincide.

*Hyperbola.* The identical two-squaring computation from
$\sqrt{(x+c)^2+y^2} - \sqrt{(x-c)^2+y^2} = \pm 2a$ produces $(a^2 - c^2)x^2 + a^2 y^2 = a^2(a^2 - c^2)$
again. Now $c \gt a$, so $a^2 - c^2 \lt 0$; writing $b^2 = c^2 - a^2 \gt 0$ turns it into
$-b^2 x^2 + a^2 y^2 = -a^2 b^2$, i.e. $\tfrac{x^2}{a^2} - \tfrac{y^2}{b^2} = 1$.

*Asymptotes.* Solving the hyperbola equation for $y$ gives $y = \pm\dfrac{b}{a}\sqrt{x^2 - a^2} =
\pm\dfrac{b}{a}\,|x|\sqrt{1 - a^2/x^2}$. As $|x| \to \infty$, $\sqrt{1 - a^2/x^2} \to 1$, and more
precisely
$$\left|\,\tfrac{b}{a}\sqrt{x^2 - a^2} - \tfrac{b}{a}|x|\,\right| = \tfrac{b}{a}\cdot
\frac{a^2}{\sqrt{x^2 - a^2} + |x|} \longrightarrow 0,$$
so the curve approaches the lines $y = \pm\tfrac{b}{a}x$ without meeting them. $\blacksquare$

### Worked Instance

Foci $(\pm 3, 0)$, distance-sum $10$: then $2a = 10$, $a = 5$, $c = 3$, so $b^2 = 25 - 9 = 16$,
$b = 4$. The ellipse is $\dfrac{x^2}{25} + \dfrac{y^2}{16} = 1$. Check a co-vertex $(0, 4)$: distances
to the foci are each $\sqrt{9 + 16} = 5$, summing to $10$. ✓

Foci $(\pm 5, 0)$, distance-difference $6$: then $2a = 6$, $a = 3$, $c = 5$, so $b^2 = 25 - 9 = 16$,
$b = 4$. The hyperbola is $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$, with asymptotes $y = \pm\tfrac43 x$.
Check vertex $(3, 0)$: distances to foci are $|3 - 5| = 2$ and $|3 + 5| = 8$, difference $6$. ✓

### Pitfalls

- **Ellipse needs $a \gt c$, hyperbola needs $c \gt a$.** The string must be longer than the
  focal separation for an oval; a fixed difference smaller than the separation for the hyperbola.
- **The sign between the terms is the whole distinction:** $+$ gives a bounded ellipse, $-$ gives an
  unbounded hyperbola.
- **$b^2$ flips meaning:** $b^2 = a^2 - c^2$ for the ellipse but $b^2 = c^2 - a^2$ for the hyperbola.
  Equivalently $c^2 = a^2 - b^2$ (ellipse) versus $c^2 = a^2 + b^2$ (hyperbola).
- **Larger denominator marks the major axis** for an ellipse; if the bigger number sits under $y^2$,
  the foci are vertical. For a hyperbola, the *positive* term names the opening direction.
- **Asymptotes belong only to the hyperbola** and have slope $\pm b/a$ (not $\pm a/b$).

:::
:::

## Connections

The ellipse and hyperbola complete the conic trio begun with the **parabola**
([alg-conics-parabola]), all three built by imposing distance conditions in the plane and cashed out
with the **distance formula** ([geo-distance-formula]). The two-squaring derivation is the archetype
of "rationalizing away nested radicals." These curves reappear as orbits (Kepler), as level sets of
quadratic forms, and — the hyperbola especially — wherever a difference of squares equals a constant.
Recognition trigger: "sum (or difference) of distances to two fixed points is constant," or an
equation $Ax^2 + Cy^2 = 1$ with $A, C$ the same sign (ellipse) or opposite signs (hyperbola).
