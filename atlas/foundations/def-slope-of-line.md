A wheelchair ramp that rises $1$ foot over $12$ feet feels gentle; one that rises $1$ foot over
$2$ feels like a wall. Both "go up," yet a single number captures how *steep* each is — and it is
the same number no matter which stretch of the ramp you measure.

## Discovery

1. On graph paper draw the straight line through $(0,1)$ and $(2,5)$. Pick the two points; as you
   move from the first to the second, how many units does $y$ climb, and how many does $x$ advance?
   Form the ratio *climb $\div$ advance*.
2. Now pick a *different* pair of points on the **same** line — say $(1,3)$ and $(3,7)$ — and form
   the same ratio. Compare it to step 1's. Then try the ratio on a curve (say $(0,0)$ and $(2,4)$
   on $y=x^2$, then $(1,1)$ and $(2,4)$): does the ratio stay put there?
3. From steps 1–2, what distinguishes a *straight* line from a bent one, phrased entirely in terms
   of that ratio? And if a line crosses the $y$-axis at height $b$ and has ratio $m$, guess a single
   equation every point $(x,y)$ on it must satisfy.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For two distinct points $(x_1,y_1),\ (x_2,y_2)$ with $x_1 \ne x_2$, the **slope** of the line
through them is the ratio of **rise** to **run**:
$$m \ =\ \frac{y_2 - y_1}{x_2 - x_1}.$$
A (non-vertical) line is exactly a set of points along which this ratio is **constant** — that
constancy *characterises* straightness. Consequently every non-vertical line is the graph of a
function
$$y \ =\ m x + b,$$
where $m$ is the slope and $b = f(0)$ is the **$y$-intercept**. (A vertical line $x = c$ has no
slope: its run is $0$.)

### Proof

The definitional obligations are (a) that slope is **well-defined** — independent of *which* two
points on the line you pick — and (b) that constant slope yields the equation $y = mx + b$.

*Well-definedness.* Suppose a non-vertical line is given as the graph of $y = mx + b$ (we take
this as the working description of "line with slope $m$"). Pick any two of its points
$(x_1, mx_1+b)$ and $(x_2, mx_2+b)$ with $x_1 \ne x_2$. Their rise-over-run is
$$\frac{(mx_2+b)-(mx_1+b)}{x_2-x_1} = \frac{m(x_2-x_1)}{x_2-x_1} = m,$$
the $b$'s cancelling and the factor $x_2-x_1 \ne 0$ dividing out. So *every* pair of points on the
line returns the same number $m$ — the slope does not depend on the sample points, and the
"ratio is constant" property holds identically.

*Constant slope gives $y = mx + b$.* Conversely, suppose every point $(x,y)$ of a set lies at
constant slope $m$ from a fixed point $(0, b)$ on it. Then for $x \ne 0$,
$$\frac{y - b}{x - 0} = m \ \Longrightarrow\ y - b = mx \ \Longrightarrow\ y = mx + b,$$
and the point $(0,b)$ itself satisfies $y = mx+b$ too. Thus the locus is exactly the graph of the
function $f(x) = mx + b$ — a single-valued rule (one $y$ per $x$), so it is a bona fide function on
$\RR$, and $m$ is unambiguous by the previous paragraph. $\blacksquare$

### Worked Instance

Line through $(0,1)$ and $(2,5)$: slope $m = \dfrac{5-1}{2-0} = \dfrac{4}{2} = 2$. Check with the
other pair $(1,3),(3,7)$: $\dfrac{7-3}{3-1} = \dfrac{4}{2} = 2$ — same, as constancy demands. The
$y$-intercept is $b = 1$ (the height at $x=0$), so the line is $y = 2x + 1$; indeed $(2,5)$ gives
$2\cdot2+1 = 5$. The two ramps of the Hook: rise $1$/run $12$ has slope $\tfrac{1}{12}\approx0.083$
(gentle), rise $1$/run $2$ has slope $\tfrac12$ (steep) — one number ranks their steepness.

### Pitfalls

- **Rise over run, not run over rise.** $\dfrac{\Delta y}{\Delta x}$, with $y$ on top; flipping it
  inverts steepness.
- **Keep the subtraction order consistent** in numerator and denominator:
  $\dfrac{y_2-y_1}{x_2-x_1} = \dfrac{y_1-y_2}{x_1-x_2}$, but mixing them flips the sign.
- **Vertical lines have undefined (not zero) slope**; zero slope is a *horizontal* line
  ($m=0$, $y=b$). Do not conflate the two.
- **Constant slope is special to lines.** On a curve the ratio changes with the chosen points —
  that failure is exactly what the *next* node (secant slope) exploits.

:::
:::

## Connections

Combines the coordinate plane (points as pairs) with the function concept (a line as the graph of
$x\mapsto mx+b$) to attach one number — steepness — to a line, and shows constancy of that number
is what "straight" *means*. This is the static prototype of a *rate of change*; the next node keeps
the rise-over-run formula but applies it to two points on a *curve*, producing the secant slope and,
ultimately, the derivative. Recognition trigger: any "steepness," "rate," "per-unit change," or
"$y = mx+b$" is slope at work.

## History

Slope measures the steepness of a line as the ratio of vertical change to horizontal change, an idea implicit in ancient surveying and in the Roman and medieval notions of gradient for roads and aqueducts. Once René Descartes and Pierre de Fermat put geometry into coordinates in the 1630s, the steepness of a line could be read off directly from its equation. The concept became central to the seventeenth-century calculus, where the slope of a line is the constant rate of change that a curve's tangent generalizes. The English word "slope" in this technical sense and the ubiquitous letter $m$ for it are relatively modern schoolbook conventions whose precise origins are uncertain. Slope is the linear prototype of the derivative. ANABASIS defines it as the ratio $\frac{\Delta y}{\Delta x}$ between two points on a line.
