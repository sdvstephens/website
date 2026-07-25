The integral $\displaystyle\int_0^1 \frac{x^a - 1}{\ln x}\,dx$ has no elementary antiderivative — its
integrand is a genuine tangle of a power and a logarithm. Yet its value, as a function of $a$, turns
out to be exactly $\ln(a+1)$. The route there is not to attack the integral, but to *differentiate*
it with respect to a parameter it doesn't obviously have.

## Discovery

Let $I(a) = \displaystyle\int_0^1 \frac{x^a - 1}{\ln x}\,dx$ for $a \ge 0$.

1. What is $I(0)$? Read it straight off the integrand — no work needed. This is your anchor value.
2. Assume you may move $\frac{d}{da}$ inside the integral (differentiate under the sign). Compute
   $\frac{\partial}{\partial a}\left(\frac{x^a-1}{\ln x}\right)$. Recall $\frac{\partial}{\partial a}x^a
   = x^a\ln x$ (since $x^a = e^{a\ln x}$). Watch the $\ln x$ cancel.
3. You are now left with $I'(a) = \int_0^1 x^a\,dx$, an *elementary* integral. Evaluate it as a
   function of $a$.
4. You have $I'(a)$ and the anchor $I(0)$ from step 1. Recover $I(a)$ by integrating $I'(a)$ in $a$
   and fixing the constant with $I(0)$. What closed form emerges?
5. Reflect: the original integral had no parameter to differentiate — but it *contained* $x^a$. The
   move was to treat the exponent as an adjustable knob. Where else could you *insert* a parameter
   that isn't there, to make an ugly integral tractable?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Leibniz's rule (Feynman's trick).** If $I(t) = \displaystyle\int_a^b f(x,t)\,dx$ with $f$ and
$\partial_t f$ continuous on $[a,b]\times[t_0,t_1]$ (fixed limits $a,b$), then $I$ is differentiable
and
$$I'(t) = \int_a^b \frac{\partial f}{\partial t}(x,t)\,dx.$$
**Strategy.** To evaluate a hard definite integral: (1) introduce a parameter $t$ (either one already
present, or one you *insert* so that $t = t^\ast$ recovers the target); (2) differentiate under the
sign to get an $I'(t)$ that *is* elementary; (3) integrate $I'(t)$ in $t$; (4) fix the constant using
an easy value $I(t_0)$; (5) set $t = t^\ast$. (For moving limits, add boundary terms
$f(b,t)b'(t) - f(a,t)a'(t)$.)

### Proof

We prove the fixed-limit rule. Fix $t$ and let $h\ne 0$ be small. Then
$$\frac{I(t+h)-I(t)}{h} = \int_a^b \frac{f(x,t+h)-f(x,t)}{h}\,dx.$$
By the Mean Value Theorem applied to $s\mapsto f(x,s)$, for each $x$ there is $\theta(x,h)$ between
$t$ and $t+h$ with $\frac{f(x,t+h)-f(x,t)}{h} = \partial_t f(x,\theta)$. So
$$\frac{I(t+h)-I(t)}{h} - \int_a^b \partial_t f(x,t)\,dx
= \int_a^b\big[\partial_t f(x,\theta(x,h)) - \partial_t f(x,t)\big]\,dx.$$
Since $\partial_t f$ is continuous on the compact rectangle $[a,b]\times[t_0,t_1]$, it is *uniformly*
continuous there. Given $\varepsilon\gt 0$, choose $\delta$ so that $|s-t|\lt\delta$ forces
$|\partial_t f(x,s)-\partial_t f(x,t)|\lt \frac{\varepsilon}{b-a}$ for all $x$. Once $|h|\lt\delta$,
$\theta(x,h)$ lies within $\delta$ of $t$, so the bracket is $\lt \frac{\varepsilon}{b-a}$ in
absolute value, and the integral is $\lt\varepsilon$. Hence the difference quotient converges to
$\int_a^b \partial_t f\,dx$, proving $I'(t)=\int_a^b\partial_t f\,dx$. $\blacksquare$

### Worked Instance

Resolve the Hook. With $I(a)=\int_0^1\frac{x^a-1}{\ln x}\,dx$:

Anchor: $I(0)=\int_0^1\frac{x^0-1}{\ln x}\,dx=\int_0^1\frac{0}{\ln x}\,dx = 0$.

Differentiate under the sign:
$$I'(a) = \int_0^1 \frac{\partial}{\partial a}\frac{x^a-1}{\ln x}\,dx
= \int_0^1 \frac{x^a\ln x}{\ln x}\,dx = \int_0^1 x^a\,dx = \frac{1}{a+1}.$$
Integrate in $a$: $I(a) = \ln(a+1) + C$. The anchor $I(0)=0$ gives $\ln 1 + C = 0$, so $C=0$. Hence
$$\boxed{\int_0^1 \frac{x^a-1}{\ln x}\,dx = \ln(a+1).}$$
For instance $a=1$ gives $\int_0^1\frac{x-1}{\ln x}\,dx = \ln 2 \approx 0.693$ — a value no
antiderivative would have handed you.

**Bonus (the Dirichlet integral).** For $\int_0^\infty\frac{\sin x}{x}\,dx$, insert a decaying
parameter: $I(t)=\int_0^\infty e^{-tx}\frac{\sin x}{x}\,dx$ for $t\ge 0$. Then
$I'(t)=-\int_0^\infty e^{-tx}\sin x\,dx = -\frac{1}{1+t^2}$, so $I(t) = -\arctan t + C$. Since
$I(\infty)=0$ we get $C=\pi/2$, and $I(0)=\int_0^\infty\frac{\sin x}{x}\,dx = \pi/2$.

### Pitfalls

- **Justify the interchange.** Moving $\frac{d}{dt}$ inside needs continuity of $\partial_t f$ (or, on
  infinite intervals, uniform/dominated convergence). Skipping this can give wrong answers.
- **Fix the constant with a real anchor.** After integrating $I'(t)$, you must pin $C$ using a value
  $I(t_0)$ you can compute independently — forgetting the constant is the standard error.
- **Insert the parameter so $t^\ast$ recovers the target.** A badly chosen insertion leaves you with
  a different integral.
- **Moving limits add boundary terms.** The full Leibniz rule has $f(b,t)b'(t)-f(a,t)a'(t)$; omit
  these only when the limits are constant.

:::
:::

## Connections

Prereqs: the integration techniques (you must still evaluate the *simplified* $I'(t)$, often by
substitution or parts). This is the heavy artillery for definite integrals that resist
antidifferentiation, a Putnam and physics staple. Recognition trigger: a definite integral with a
"stuck" integrand that either already carries a parameter or would become elementary if you
differentiated with respect to a cleverly inserted one.
