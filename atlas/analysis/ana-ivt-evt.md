At this moment, somewhere on Earth's equator, there are two exactly-antipodal points with the *same*
temperature. No one measured them; the claim is forced by pure continuity. The same principle
guarantees your coffee, cooling from $90^\circ$ to room temperature, passes through *every*
intermediate degree — and that a continuous function on a closed interval always has a hottest and a
coldest point.

## Discovery

Assume $f$ is continuous on $[a,b]$.

1. Suppose $f(a)\lt 0\lt f(b)$. Intuitively the graph must cross the $x$-axis. Consider the set
   $S=\{x\in[a,b]: f(x)\le 0\}$. It is nonempty ($a\in S$) and bounded above (by $b$), so it has a
   least upper bound $c=\sup S$. This $c$ is the candidate crossing point.
2. Rule out $f(c)\gt 0$: if $f(c)\gt0$, continuity keeps $f\gt0$ on a little interval around $c$
   (use the $\varepsilon$–$\delta$ definition with $\varepsilon=f(c)$). Why does that contradict $c$
   being the *least* upper bound of $S$?
3. Rule out $f(c)\lt 0$: if $f(c)\lt0$, continuity keeps $f\lt0$ just to the *right* of $c$ (and
   $c\ne b$ since $f(b)\gt0$). Why does that contradict $c$ being an *upper bound* of $S$?
4. What is the only remaining possibility for $f(c)$? Now generalize: for any target value $N$
   between $f(a)$ and $f(b)$, how do you reduce to the case above?
5. **A fixed point for free.** Let $h:[0,1]\to[0,1]$ be continuous. Consider $\phi(x)=h(x)-x$.
   Evaluate the *signs* of $\phi(0)$ and $\phi(1)$ using that $h$'s outputs lie in $[0,1]$. What does
   step 4 then hand you?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Intermediate Value Theorem (IVT).** If $f$ is continuous on $[a,b]$ and $N$ lies between $f(a)$ and
$f(b)$, then $f(c)=N$ for some $c\in[a,b]$. (Bolzano's case: a sign change forces a root.)

**Extreme Value Theorem (EVT).** If $f$ is continuous on a *closed, bounded* interval $[a,b]$, then
$f$ attains a maximum and a minimum: there exist $p,q\in[a,b]$ with $f(p)\le f(x)\le f(q)$ for all
$x\in[a,b]$.

**Fixed-point corollary.** Any continuous $h:[a,b]\to[a,b]$ has a fixed point $h(c)=c$.

### Proof

**IVT.** Reduce to $N=0$ by replacing $f$ with $f-N$; assume $f(a)\lt0\lt f(b)$ (the other sign order
is symmetric). Let $S=\{x\in[a,b]:f(x)\le 0\}$; it is nonempty ($a\in S$) and bounded above, so
$c=\sup S$ exists in $[a,b]$. We show $f(c)=0$ by excluding the alternatives.

*If $f(c)\gt0$:* apply continuity at $c$ with $\varepsilon=f(c)\gt0$: some $\delta\gt0$ gives
$|f(x)-f(c)|\lt f(c)$, hence $f(x)\gt0$, for all $x\in(c-\delta,c+\delta)\cap[a,b]$. Then no point of
$(c-\delta,c]$ lies in $S$, so $c-\delta$ is a smaller upper bound of $S$ — contradicting
$c=\sup S$. (Also $c\ne a$ since $f(a)\lt0$.)

*If $f(c)\lt0$:* then $c\ne b$ (as $f(b)\gt0$). Continuity with $\varepsilon=-f(c)\gt0$ gives an
interval around $c$ on which $f\lt0$; so some point $x\gt c$ has $f(x)\lt0$, i.e. $x\in S$ with
$x\gt c$ — contradicting that $c$ is an upper bound of $S$.

Both alternatives fail, so $f(c)=0$. $\blacksquare$

**EVT.** First, $f$ is bounded above on $[a,b]$: if not, pick $x_n$ with $f(x_n)\gt n$; by
Bolzano–Weierstrass a subsequence $x_{n_j}\to x^\ast\in[a,b]$, and continuity forces
$f(x_{n_j})\to f(x^\ast)$, finite — contradicting $f(x_{n_j})\gt n_j\to\infty$. So
$M=\sup_{[a,b]} f$ is finite. Choose $y_n$ with $f(y_n)\to M$; a convergent subsequence
$y_{n_j}\to q\in[a,b]$ gives $f(q)=\lim f(y_{n_j})=M$ by continuity, so the sup is attained. The
minimum follows by applying this to $-f$. $\blacksquare$

### Worked Instance

**The Hook (equal antipodal temperatures).** Model equator temperature as continuous $T(\theta)$,
$\theta\in[0,2\pi]$, with $T(0)=T(2\pi)$. Let $g(\theta)=T(\theta)-T(\theta+\pi)$ for
$\theta\in[0,\pi]$. Then $g(0)=T(0)-T(\pi)$ and $g(\pi)=T(\pi)-T(2\pi)=T(\pi)-T(0)=-g(0)$. So $g(0)$
and $g(\pi)$ have opposite signs (or both are $0$). By IVT some $\theta^\ast$ has $g(\theta^\ast)=0$,
i.e. $T(\theta^\ast)=T(\theta^\ast+\pi)$ — two antipodal points at equal temperature. $\blacksquare$

**Fixed point.** For continuous $h:[0,1]\to[0,1]$, set $\phi(x)=h(x)-x$. Then $\phi(0)=h(0)\ge0$ and
$\phi(1)=h(1)-1\le0$. By IVT some $c$ has $\phi(c)=0$, i.e. $h(c)=c$.

**A root count.** $x=\cos x$ has a solution in $[0,1]$: $\phi(x)=\cos x - x$ has $\phi(0)=1\gt0$,
$\phi(1)=\cos1-1\lt0$, so IVT gives a root (the number $0.739\ldots$).

### Pitfalls

- **IVT needs continuity, not differentiability.** A jump can skip values; e.g. $\lfloor x\rfloor$
  never equals $0.5$ despite going from $0$ to $1$.
- **EVT needs a *closed and bounded* interval.** On $(0,1]$, $f(x)=1/x$ is continuous but unbounded
  (no max); on $[0,\infty)$, $\arctan$ has no attained max. Drop either "closed" or "bounded" and the
  conclusion can fail.
- **IVT gives existence, not a value or count.** It says a root *exists*; it does not locate it or say
  how many. Uniqueness needs a separate monotonicity/MVT argument.
- **The target $N$ must lie between the endpoint values.** IVT says nothing about values outside
  $[f(a),f(b)]$.

:::
:::

## Connections

Prereqs: limits/continuity (both proofs run through the $\varepsilon$–$\delta$ definition and the
completeness of $\RR$ via sup / Bolzano–Weierstrass). The IVT is the standard existence tool for
roots and fixed points; the EVT underwrites optimization and the Mean Value Theorem (which needs an
attained interior extremum). Recognition trigger: "show a solution *exists*" (build a function with a
sign change) or "a continuous function on $[a,b]$ attains its bound."
