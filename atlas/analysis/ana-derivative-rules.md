What is the slope of $y = x^x$? You cannot use the power rule ($x^n \to nx^{n-1}$) — the exponent
is not constant. You cannot use the exponential rule ($a^x \to a^x \ln a$) — the base is not
constant. It is *both* at once. One trick dissolves the paradox.

## Discovery

Recall the derivative is $f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$, and that
$(e^x)' = e^x$, $(\ln x)' = 1/x$.

1. Let $f,g$ be differentiable and $P(x) = f(x)g(x)$. Expand
   $P(x+h) - P(x) = f(x+h)g(x+h) - f(x)g(x)$. Add and subtract $f(x+h)g(x)$ in the middle. Regroup
   into two differences, each isolating a change in only one factor.
2. Divide by $h$ and take $h \to 0$, using that $f(x+h) \to f(x)$ (differentiable $\Rightarrow$
   continuous). What rule for $(fg)'$ drops out?
3. Now a genuinely hard target: $y = x^x$ with $x \gt 0$. Take $\ln$ of both sides. Use the log law
   $\ln(x^x) = x\ln x$. Differentiate *both sides* with respect to $x$, remembering the left side is
   $\ln y$ where $y$ is a function of $x$ — so its derivative is $\frac{1}{y}\cdot y'$ (chain rule).
4. Solve your equation for $y'$ and substitute $y = x^x$ back in. You now have the slope with no
   paradox. What role did the logarithm play — why did it convert the impossible into the routine?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The core rules for differentiable $f,g$:
$$(f+g)' = f' + g', \qquad (fg)' = f'g + fg', \qquad \left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}\ (g\ne 0),$$
$$(f\circ g)'(x) = f'(g(x))\,g'(x) \quad(\text{chain rule}).$$
**Logarithmic differentiation:** to differentiate a positive $y = f(x)$ that is a product, quotient,
or variable power, take $\ln$, simplify with log laws, then differentiate implicitly using
$\frac{d}{dx}\ln y = \frac{y'}{y}$. Solving gives $y' = y\cdot\frac{d}{dx}\big[\ln f(x)\big]$.
In particular $\boxed{(x^x)' = x^x(\ln x + 1)}$.

### Proof

**Product rule.** With $P = fg$,
$$P(x+h)-P(x) = f(x+h)g(x+h) - f(x)g(x).$$
Insert $-f(x+h)g(x) + f(x+h)g(x)$:
$$= f(x+h)\big[g(x+h)-g(x)\big] + g(x)\big[f(x+h)-f(x)\big].$$
Divide by $h$:
$$\frac{P(x+h)-P(x)}{h} = f(x+h)\cdot\frac{g(x+h)-g(x)}{h} + g(x)\cdot\frac{f(x+h)-f(x)}{h}.$$
As $h\to 0$: $f(x+h)\to f(x)$ (differentiability forces continuity), the two quotients tend to
$g'(x)$ and $f'(x)$, and the limit of a sum/product of convergent pieces is the sum/product of
limits. Hence $P'(x) = f(x)g'(x) + g(x)f'(x)$. $\blacksquare$

**Logarithmic differentiation of $x^x$.** Let $y = x^x$ for $x \gt 0$, so $y \gt 0$ and $\ln y$ is
defined. Then $\ln y = x\ln x$. Differentiate both sides in $x$. Left side, by the chain rule:
$\frac{d}{dx}\ln y = \frac{1}{y}\,y'$. Right side, by the product rule:
$\frac{d}{dx}(x\ln x) = 1\cdot\ln x + x\cdot\frac{1}{x} = \ln x + 1$. Equate:
$$\frac{y'}{y} = \ln x + 1 \;\implies\; y' = y(\ln x + 1) = x^x(\ln x + 1). \qquad\blacksquare$$

### Worked Instance

The Hook, resolved. At $x = 1$: $y' = 1^1(\ln 1 + 1) = 1\cdot(0+1) = 1$, so $y = x^x$ has slope $1$
at $x=1$. At $x = e$: $y' = e^e(\ln e + 1) = 2e^e \approx 30.3$. And the slope is *zero* exactly
when $\ln x + 1 = 0$, i.e. $x = e^{-1}$ — the minimum of $x^x$, at
$x = 1/e$, where $y = (1/e)^{1/e}\approx 0.6922$. Logarithmic differentiation turned an
"impossible" derivative into a one-line answer that even locates the minimum.

**Many factors.** For $y = \dfrac{(x-1)(x-2)}{(x-3)(x-4)}$, taking $\ln$ turns the product/quotient
into a *sum*: $\ln y = \ln(x-1)+\ln(x-2)-\ln(x-3)-\ln(x-4)$, so
$\frac{y'}{y} = \frac{1}{x-1}+\frac{1}{x-2}-\frac{1}{x-3}-\frac{1}{x-4}$, and multiply back by $y$.
Far cleaner than the quotient rule applied to a four-factor product.

### Pitfalls

- **$(fg)' \ne f'g'$.** The cross terms are essential; the product of derivatives is a classic
  wrong answer.
- **Chain rule tail.** $(f\circ g)'$ has the factor $g'(x)$; forgetting it (e.g. writing
  $(\sin(x^2))' = \cos(x^2)$ instead of $2x\cos(x^2)$) is the most common slip.
- **$x^x$ is neither power nor exponential.** Neither $x\cdot x^{x-1}$ nor $x^x\ln x$ alone is
  correct; the right answer $x^x(\ln x + 1)$ contains *both* pieces.
- **Domain for $\ln$.** Logarithmic differentiation needs $y \gt 0$. For possibly-negative $y$,
  differentiate $\ln|y|$ (valid where $y \ne 0$), which gives the same $y'/y$ relation.

:::
:::

## Connections

Prereqs: the limit definition (every rule is a limit of difference quotients). These rules power
Taylor series (repeated differentiation), L'Hôpital (differentiating numerator and denominator),
the Mean Value Theorem's applications, and every integration technique (which reverse them).
Recognition trigger for logarithmic differentiation: a *variable base raised to a variable power*,
or a product/quotient of many factors where taking $\ln$ turns multiplication into addition.
