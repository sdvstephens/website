You drive from mile-marker $0$ to mile-marker $120$ and it takes two hours. Your speedometer swung
between $0$ and $80$ mph the whole way — yet everyone agrees you "averaged $60$." Where on the trip
does that single number $60$ actually live?

## Discovery

1. A ball's height is $f(t) = t^2$ (in suitable units). Between $t=1$ and $t=3$, how much does the
   height change, and over how much time? Form change-in-height over change-in-time — the same
   rise-over-run you used for a straight line, now on a curve.
2. Draw the curve $y = f(t)$ and mark the two points $(1, f(1))$ and $(3, f(3))$. Draw the straight
   line through them. What does the number from step 1 measure about *that* line? (You already have
   a name for a line's steepness.)
3. The curve's steepness changes from point to point, so "the slope of the curve" between $1$ and
   $3$ isn't a single thing — yet your line gave one number. What, precisely, is that one number an
   *average* of, and over what interval? Say exactly which interval would have to shrink for it to
   become the steepness "right at $t=1$."

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a function $f$ and two inputs $a \ne b$ in its domain, the line through the graph points
$(a, f(a))$ and $(b, f(b))$ is the **secant line**, and its slope is the **average rate of change**
of $f$ over $[a,b]$:
$$m_{\text{sec}} \ =\ \frac{f(b) - f(a)}{b - a}.$$
It is the ordinary rise-over-run slope applied to two points *on a curve*. Written with a step
$h = b - a$, it becomes the **difference quotient**
$$\frac{f(a+h) - f(a)}{h}\qquad (h \ne 0),$$
the average rate over the interval from $a$ to $a+h$.

### Proof

As a concept node, we confirm the idea is well-posed and extract its defining consequences from the
slope definition and the function definition.

*It is a genuine slope, well-defined.* Since $a \ne b$, we have $b - a \ne 0$, so the quotient
$\frac{f(b)-f(a)}{b-a}$ is a legitimate real number. The points $(a,f(a))$ and $(b,f(b))$ are
distinct with different first coordinates (their $x$'s are $a\ne b$), so by the slope definition
they determine one secant line whose slope is exactly this ratio — no ambiguity, and $f(a),f(b)$
are single values because $f$ is a function.

*It is exactly an average.* Interpret $\frac{f(b)-f(a)}{b-a}$ as total change divided by total
input-span. It is the *constant* slope a straight line would need to travel from $(a,f(a))$ to
$(b,f(b))$ over the same run — the "if the rate had been steady" value. In the driving Hook, with
$f$ = position, it is total distance over total time: $\frac{120-0}{2-0} = 60$ mph, the average
speed. It need not equal the rate at any endpoint; it summarises the whole interval by a single
line.

*Its dependence on the interval, and the limiting move.* Fix $a$ and vary $b = a+h$. Then
$m_{\text{sec}}(h) = \frac{f(a+h)-f(a)}{h}$ is itself a function of the step $h\ne0$. For $f(t)=t^2$
and $a=1$:
$$\frac{(1+h)^2 - 1^2}{h} = \frac{2h + h^2}{h} = 2 + h,$$
so the average rate over $[1,\,1+h]$ is $2 + h$. As the interval shrinks ($h \to 0$) this average
approaches $2$ — the steepness "right at $t=1$." Thus the secant slope is the finite, computable
object whose shrinking limit *will* define the instantaneous rate (the derivative). $\blacksquare$

### Worked Instance

Ball height $f(t) = t^2$, interval $[1,3]$: average rate $= \dfrac{f(3)-f(1)}{3-1} =
\dfrac{9-1}{2} = 4$. So the secant from $(1,1)$ to $(3,9)$ has slope $4$: on average the height
rises $4$ units per unit time over $[1,3]$. Shrink the interval to $[1,1+h]$ and the average is
$2+h$, sliding toward $2$ as $h\to0$ — the curve's steepness at the single instant $t=1$. The
Hook's "$60$" lives on the *secant* joining start and finish, not at any one milepost: it is the
slope of the straight-line shortcut across the whole trip.

### Pitfalls

- **Average rate is not the rate at an endpoint.** Slope $4$ over $[1,3]$ is neither the steepness
  at $t=1$ nor at $t=3$; it summarises the interval.
- **Two distinct inputs required: $a \ne b$** (and both in the domain), else the run is $0$ and the
  quotient is undefined — the difference quotient always needs $h \ne 0$.
- **Order-cancellation:** $\dfrac{f(b)-f(a)}{b-a} = \dfrac{f(a)-f(b)}{a-b}$; swap only one of
  numerator/denominator and you flip the sign.
- **The secant is not the tangent.** The tangent is the *limit* of secants as the second point
  slides in; for any actual interval you have a secant, not the instantaneous rate.

:::
:::

## Connections

Takes the rise-over-run of the slope definition off straight lines and onto the graph of a general
function, giving "average rate of change" and the difference quotient. Holding one endpoint fixed
and letting the interval shrink turns this finite ratio into the central limit of calculus: the
tangent slope, i.e. the **derivative**. Recognition trigger: any "average speed / average rate /
change over an interval," or a $\frac{f(a+h)-f(a)}{h}$ poised to have $h\to0$, is a secant slope on
its way to becoming a derivative.

## History

The slope of a secant line — the average rate of change between two points on a curve — is the crucial stepping stone from algebra to calculus. Pierre de Fermat's method of "adequality" in the 1630s computed such ratios and let them shrink to find tangents and extrema, anticipating the derivative. Isaac Newton and Gottfried Wilhelm Leibniz independently developed the full calculus in the 1660s–1680s, treating the tangent as the limiting position of secant lines as the two points merge. For nearly two centuries the "vanishing" of the horizontal difference troubled critics like Bishop Berkeley, until Cauchy and Weierstrass grounded the limit rigorously in the nineteenth century. The secant slope thus embodies the central limiting idea of differential calculus. ANABASIS introduces it as the average rate of change that foreshadows the derivative.
