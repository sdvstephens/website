$\int x e^x\,dx$, $\int 2x\cos(x^2)\,dx$, and $\int \frac{1}{x^2-1}\,dx$ look unrelated. Each yields
to a *different* reversal of a differentiation rule you already know. Learn to see which rule made
the integrand, and you can un-make it.

## Discovery

Each technique is a differentiation rule read backwards. Recall $(fg)'=f'g+fg'$, the chain rule
$(F\circ g)'=F'(g)g'$, and that $\frac{1}{x-a}$ integrates to $\ln|x-a|$.

1. **By parts.** Integrate both sides of the product rule $(uv)' = u'v + uv'$ over $[a,b]$. The left
   side integrates to $uv$ by the Fundamental Theorem. Rearrange to isolate $\int u v'\,dx$. What
   identity relating $\int u\,dv$ and $\int v\,du$ do you get?
2. Use it on $\int x e^x\,dx$: choose $u=x$ (so $du=dx$) and $dv=e^x\,dx$ (so $v=e^x$). Why is this
   choice better than $u=e^x$, $dv=x\,dx$? Carry it out.
3. **Substitution.** In $\int 2x\cos(x^2)\,dx$, spot that $2x$ is the derivative of $x^2$. Let
   $u=x^2$, so $du=2x\,dx$. Rewrite the whole integrand in terms of $u$ and $du$. What elementary
   integral remains?
4. **Partial fractions.** Factor $x^2-1=(x-1)(x+1)$. Seek constants $A,B$ with
   $\frac{1}{(x-1)(x+1)}=\frac{A}{x-1}+\frac{B}{x+1}$. Clear denominators, then find $A,B$ (e.g. by
   substituting $x=1$ and $x=-1$). Integrate the two simple pieces.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Integration by parts:** $\displaystyle \int u\,dv = uv - \int v\,du$, i.e.
$\int_a^b u v'\,dx = \big[uv\big]_a^b - \int_a^b u'v\,dx$. Choose $u$ to get *simpler* under
differentiation (mnemonic **LIATE**: Logs, Inverse-trig, Algebraic, Trig, Exponential — earlier =
better $u$).

**Substitution (reverse chain rule):** $\displaystyle \int f(g(x))\,g'(x)\,dx = \int f(u)\,du$ with
$u=g(x)$; for definite integrals change the limits to $g(a),g(b)$.

**Partial fractions:** a proper rational function $\frac{P(x)}{Q(x)}$ (with $\deg P \lt \deg Q$)
splits over the factorization of $Q$ into a sum of terms $\frac{A}{(x-r)^k}$ and
$\frac{Bx+C}{(x^2+px+q)^k}$, each elementary to integrate.

### Proof

**By parts.** The product rule gives $(uv)'=u'v+uv'$. Both sides are continuous; integrate over
$[a,b]$ and apply the Fundamental Theorem of Calculus to the left:
$$\big[uv\big]_a^b = \int_a^b u'v\,dx + \int_a^b uv'\,dx
\;\implies\; \int_a^b uv'\,dx = \big[uv\big]_a^b - \int_a^b u'v\,dx. \qquad\blacksquare$$

**Substitution.** Let $F$ be an antiderivative of $f$, so $F'=f$. By the chain rule
$\frac{d}{dx}F(g(x)) = f(g(x))\,g'(x)$. Hence $F(g(x))$ is an antiderivative of the left integrand,
and by the Fundamental Theorem
$$\int_a^b f(g(x))g'(x)\,dx = F(g(b))-F(g(a)) = \int_{g(a)}^{g(b)} f(u)\,du. \qquad\blacksquare$$

**Partial fractions (existence).** Over $\RR$, $Q$ factors into linear and irreducible-quadratic
powers. That $\frac{P}{Q}$ (proper) equals a sum of the stated simple fractions is a linear-algebra
fact: clearing denominators equates two polynomials of degree $\lt\deg Q$; matching the $\deg Q$
coefficients gives a square linear system whose matrix is invertible (its determinant is a nonzero
resultant), so the constants $A,B,C,\dots$ exist and are unique. $\blacksquare$

### Worked Instance

Resolve all three Hooks.

$\int x e^x\,dx$: parts with $u=x,\ dv=e^x dx$ gives
$xe^x - \int e^x\,dx = xe^x - e^x + C = (x-1)e^x + C$. (Had we chosen $u=e^x$, the remaining integral
$\int \tfrac{x^2}{2}e^x\,dx$ would be *worse* — LIATE picks the Algebraic $x$ as $u$.)

$\int 2x\cos(x^2)\,dx$: with $u=x^2,\ du=2x\,dx$ it becomes $\int\cos u\,du = \sin u + C
= \sin(x^2)+C$.

$\int \frac{dx}{x^2-1}$: with $\frac{1}{(x-1)(x+1)}=\frac{A}{x-1}+\frac{B}{x+1}$, clearing gives
$1=A(x+1)+B(x-1)$. Set $x=1$: $1=2A\Rightarrow A=\tfrac12$. Set $x=-1$: $1=-2B\Rightarrow B=-\tfrac12$.
So
$$\int\frac{dx}{x^2-1} = \tfrac12\ln|x-1| - \tfrac12\ln|x+1| + C
= \tfrac12\ln\left|\frac{x-1}{x+1}\right| + C.$$

### Pitfalls

- **Definite substitution limits.** After $u=g(x)$, either change the bounds to $g(a),g(b)$ *or*
  back-substitute before evaluating — never mix.
- **Sign in parts.** The formula is $uv - \int v\,du$; dropping the minus sign is the classic error.
- **Proper first.** Partial fractions require $\deg P \lt \deg Q$; if not, do polynomial long
  division first.
- **Repeated / quadratic factors.** A factor $(x-r)^2$ needs *both* $\frac{A}{x-r}$ and
  $\frac{B}{(x-r)^2}$; an irreducible quadratic needs a *linear* numerator $\frac{Bx+C}{x^2+px+q}$.
- **Circular parts.** Some parts problems (e.g. $\int e^x\sin x\,dx$) reproduce the original integral;
  that is a feature — solve the resulting equation for the integral.

:::
:::

## Connections

Prereqs: the derivative rules — each technique reverses one (parts $\leftarrow$ product rule,
substitution $\leftarrow$ chain rule, partial fractions $\leftarrow$ log/arctan derivatives).
Unlocks Feynman's differentiation-under-the-integral, symmetry tricks in definite integrals, and the
Riemann-sum viewpoint. Recognition triggers: a *product* of unlike factors $\to$ parts; an *inner
function whose derivative is present* $\to$ substitution; a *rational function* $\to$ factor and
decompose.
