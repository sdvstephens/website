Find every function $f:\RR\to\RR$ with $f(x+y) = f(x) + f(y)$ for all real $x, y$. There is no
formula to "solve" — instead you interrogate the equation with clever inputs until it confesses
that $f$ must be linear.

## Discovery

1. In $f(x+y) = f(x) + f(y)$, substitute $x = y = 0$. What does the equation force $f(0)$ to be?
2. Substitute $y = x$, then $y = 2x$, and look for a pattern in $f(nx)$ for positive integers $n$.
   Prove your pattern by induction. Then substitute $y = -x$ to reach $f(-x)$, and combine to
   handle all integers $n$.
3. Put $x = \tfrac1n\cdot t$ repeatedly (or use $f(n\cdot \tfrac tn) = n f(\tfrac tn)$) to get
   $f(qx)$ for rational $q$. What is $f(q)$ in terms of $f(1)$ for every rational $q$?
4. So over the rationals $f$ is pinned down. What *single* additional mild assumption (continuity,
   monotonicity, or boundedness on an interval) would let you upgrade this to all reals — and why
   is it genuinely needed? (Reflect on whether the rational conclusion alone determines $f$ on all
   of $\RR$.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The core techniques for functional equations, illustrated on **Cauchy's equation** $f(x+y) =
f(x) + f(y)$:
- **Plug special values** ($x=y=0$ gives $f(0)=0$; $y=-x$ gives $f$ odd).
- **Induct to the integers, then rationals**: additivity forces $f(qx) = q f(x)$ for all
  $q \in \QQ$, so $f(q) = c q$ with $c = f(1)$ on $\QQ$.
- **A regularity hypothesis closes the reals**: if $f$ is continuous (or monotonic, or bounded on
  some interval, or measurable), then $f(x) = cx$ for **all** $x \in \RR$.

Without any regularity, Cauchy's equation admits pathological non-linear solutions (built from a
Hamel basis of $\RR$ over $\QQ$). The general moral: substitute to extract values, exploit symmetry
and injectivity/surjectivity, and reduce to a known equation.

### Proof

Let $f$ satisfy $f(x+y) = f(x) + f(y)$. Set $x=y=0$: $f(0) = 2f(0)$, so $f(0) = 0$. By induction,
$f(nx) = nf(x)$ for $n \in \NN$: the base $n=1$ is trivial, and $f((n+1)x) = f(nx) + f(x) = nf(x)
+ f(x) = (n+1)f(x)$. Setting $y = -x$: $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$, extending
$f(nx) = nf(x)$ to all $n \in \ZZ$. For $q = m/n \in \QQ$ ($n \gt 0$): $n f(qx) = f(nqx) = f(mx) =
m f(x)$, so $f(qx) = \tfrac mn f(x) = q f(x)$. Taking $x = 1$ gives $f(q) = c q$ with $c = f(1)$
for all $q \in \QQ$.

Now assume $f$ continuous. Every real $x$ is a limit of rationals $q_k \to x$; by continuity
$f(x) = \lim_k f(q_k) = \lim_k c\,q_k = c x$. Hence $f(x) = cx$ on $\RR$. (Monotonicity or
boundedness on an interval likewise upgrades the $\QQ$-result: e.g. if $f$ is bounded on $[0,1]$,
the additive/$\QQ$-linear structure forces continuity, then linearity.) One checks $f(x) = cx$
indeed satisfies the equation. $\blacksquare$

### Worked Instance

Solve $f(x+y) = f(x) + f(y) + xy$ over $\RR$, assuming $f$ continuous. Try to reduce it to Cauchy.
Guess that the offending $xy$ comes from a quadratic; set $g(x) = f(x) - \tfrac12 x^2$. Then
$$g(x+y) = f(x+y) - \tfrac12(x+y)^2 = f(x)+f(y)+xy - \tfrac12 x^2 - xy - \tfrac12 y^2 = g(x) + g(y).$$
So $g$ satisfies Cauchy's equation and is continuous, hence $g(x) = cx$. Therefore
$$f(x) = \tfrac12 x^2 + cx, \qquad c = f(1) - \tfrac12 \in \RR,$$
and every such $f$ works. The move — subtract a particular solution to linearize — is the second
staple after "plug special values."

### Pitfalls

- The step from $\QQ$ to $\RR$ is **not free**: without a regularity assumption, non-linear
  (non-measurable) solutions exist. State the hypothesis you use.
- "Plug $x = y = 0$" or "$x = y$" first — but don't assume $f(0) = 0$ or continuity unless you've
  derived or been given it.
- Beware dividing by $f(\text{something})$ or assuming injectivity/surjectivity before proving it;
  these must be established from the equation.

:::
:::

## Connections

Prereqs: comfort with substitution and, loosely, polynomial reasoning (the Factor Theorem mindset
of "test values to pin down a function"). Functional equations are an Olympiad staple (IMO,
Putnam); the substitution/symmetry/regularity toolkit here recurs for multiplicative, Jensen, and
d'Alembert equations. Recognition trigger: "find all functions $f$ satisfying …" — reach for
special values, then reduce to Cauchy or a known template.
