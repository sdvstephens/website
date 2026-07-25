Give a ship two numbers — latitude and longitude — and you have pinned it to one spot on Earth.
Descartes' idea was to do the same for the whole flat plane: turn every point into a pair of
numbers, so that *geometry becomes arithmetic*.

## Discovery

1. On the number line, one real number names one point. But a tabletop is two-dimensional: one
   number is not enough to say *where* on it. How many numbers do you need to single out a point,
   and how would you set them up?
2. Lay down two number lines crossing at right angles at their zeros. For a point $P$, read off
   "how far across" and "how far up." In what order will you always report these two readings, and
   why does the order have to be fixed? (Recall the object that remembers order.)
3. Ask the converse: hand someone the pair $(3, 5)$ of readings — can they recover *exactly one*
   point? And does every point produce *exactly one* pair? Decide whether the correspondence
   between points and pairs is perfectly two-way.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **coordinate plane** (Cartesian plane) is the set
$$\RR^2 \ =\ \{\,(x,y) : x \in \RR,\ y \in \RR\,\},$$
the set of all **ordered pairs** of real numbers. Fixing two perpendicular real number lines (the
**$x$-axis** and **$y$-axis**) meeting at the **origin** $(0,0)$, each point of the plane
corresponds to exactly one pair $(x,y)$: $x$ (the **abscissa**) is the signed distance along the
$x$-axis, $y$ (the **ordinate**) the signed distance along the $y$-axis. **Plotting** is this
correspondence point $\leftrightarrow$ pair, and it is a bijection: points and pairs are two names
for the same thing.

### Proof

The definitional content is that the labelling is *unambiguous and complete* — one pair per point,
one point per pair — resting on the ordered-pair property and the completeness of $\RR$.

*One pair per point.* Given a point $P$, drop perpendiculars to the two axes; each foot lands on a
number line, which (being a copy of $\RR$) assigns it a unique real — $x$ from the horizontal axis,
$y$ from the vertical. Because the reals are gapless (the primitive $\RR$), *every* location along
an axis has a real label, so both readings exist and are unique. Ordering them as $(x, y)$ uses the
ordered pair, whose defining property guarantees $(x,y)$ records "horizontal first, vertical second"
without ambiguity.

*One point per pair.* Given $(x, y) \in \RR^2$, mark $x$ on the $x$-axis and $y$ on the $y$-axis;
the perpendiculars to the axes at these marks meet in exactly one point (two distinct
non-parallel lines meet once). So the pair determines a unique point.

*The correspondence is a bijection.* The two constructions are mutual inverses: plotting a point
then reading its pair returns the pair, and vice versa. Moreover $(x_1,y_1) = (x_2,y_2)$ iff
$x_1=x_2$ and $y_1=y_2$ (ordered-pair property), so distinct pairs name distinct points. Hence
point $\leftrightarrow$ pair is a perfect one-to-one, onto correspondence. $\blacksquare$

### Worked Instance

Plot $(3, 5)$: from the origin go $3$ units right along the $x$-axis, then $5$ units up — one
definite point. Plot $(5, 3)$: $5$ right, $3$ up — a *different* point, because the ordered pairs
differ ($(3,5)\ne(5,3)$). The ship analogy lands: swapping latitude and longitude relocates you, and
the ordered-pair machinery is exactly what forbids the plane from confusing the two corners.
Conversely, any point you dot on the page has a unique address $(x,y)$ read off the axes — geometry
turned into a pair of numbers.

### Pitfalls

- **Order of coordinates is fixed: $(x, y)$, horizontal then vertical.** $(3,5)\ne(5,3)$; this is
  inherited straight from the ordered pair.
- **Signs are directions.** Negative $x$ is left of the origin, negative $y$ below; the axes split
  the plane into four quadrants.
- **Axes need not be drawn to the same scale**, but the *standard* Cartesian plane uses equal
  units on both — distances and slopes assume this.
- **$\RR^2$ is a set of pairs, not the physical paper.** The paper is a picture of it, complete
  with the gapless real structure that no drawing can literally show.

:::
:::

## Connections

Fuses the ordered-pair construction with the real-number primitive to turn Descartes' insight into
a definition: the plane *is* $\RR^2$. This is the stage on which functions become **graphs**
$\{(x,f(x))\}$, on which lines acquire slope, and on which every later curve, conic, and vector
lives. Recognition trigger: the instant a problem says "plot," "coordinates," "the $xy$-plane," or
turns a geometric locus into an equation in $x$ and $y$, it is standing in the coordinate plane.

## History

The coordinate plane is the great bridge between algebra and geometry, and it was built almost simultaneously by two Frenchmen. René Descartes presented it in La Géométrie, an appendix to his Discourse on Method (1637), showing how geometric curves correspond to algebraic equations; the adjective "Cartesian" honors him. Pierre de Fermat had developed equivalent ideas slightly earlier, though his work circulated only in manuscript. Their insight — that a pair of numbers locates a point once axes are chosen — turned questions about shapes into questions about equations and vice versa. This fusion made possible analytic geometry, calculus, and ultimately the graphs that pervade all of quantitative science. ANABASIS builds the coordinate plane from ordered pairs of real numbers.
