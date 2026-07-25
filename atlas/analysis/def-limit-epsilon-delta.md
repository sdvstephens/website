"$f(x)$ gets close to $L$ as $x$ nears $a$" — but *how* close, and *how* near? The slogan is
suggestive and completely imprecise. Cauchy and Weierstrass turned it into a challenge game with
rules so tight that no vagueness survives.

## Discovery

1. Recall the intuitive claim $\lim_{x\to2}(3x-1)=5$. A skeptic demands that $3x-1$ stay within
   $0.3$ of $5$. Solve $|(3x-1)-5|\lt 0.3$ to find how close $x$ must be to $2$ to guarantee it.
2. The skeptic tightens the demand to within $0.03$. Redo the computation. Look at how the required
   closeness of $x$ to $2$ relates to the tolerance you were handed.
3. The skeptic now names an *arbitrary* tolerance $\varepsilon\gt0$ and challenges you to force
   $|(3x-1)-5|\lt\varepsilon$. Produce a rule that outputs a number $\delta\gt0$ (in terms of
   $\varepsilon$) such that $0\lt|x-2|\lt\delta$ guarantees the skeptic's demand.
4. Using "for every $\dots$ there exists $\dots$," state what it should mean in general for $L$ to be
   the limit of $f$ at $a$ — the promise that you can *always* meet the skeptic's challenge, whatever
   tolerance is named.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

$\displaystyle\lim_{x\to a}f(x)=L$ means: **for every $\varepsilon\gt0$ there exists $\delta\gt0$
such that, for all $x$, $\;0\lt|x-a|\lt\delta\;$ implies $\;|f(x)-L|\lt\varepsilon$.** In quantifier
form,
$$\forall\,\varepsilon\gt0\;\;\exists\,\delta\gt0\;\;\forall x\;\big(\,0\lt|x-a|\lt\delta\;\Rightarrow\;|f(x)-L|\lt\varepsilon\,\big).$$
The clause $0\lt|x-a|$ excludes $x=a$ itself (the value $f(a)$ is irrelevant, matching the intuitive
picture). This makes "approaches" mean precisely: every output-tolerance $\varepsilon$ can be met by
some input-tolerance $\delta$.

### Proof

A limit proved from the definition: $\lim_{x\to2}(3x-1)=5$. Let $\varepsilon\gt0$ be arbitrary.
**Choose** $\delta=\dfrac{\varepsilon}{3}\;(\gt0)$. Then whenever $0\lt|x-2|\lt\delta$,
$$|(3x-1)-5|=|3x-6|=3\,|x-2|\lt 3\delta=3\cdot\frac{\varepsilon}{3}=\varepsilon.$$
Since $\varepsilon\gt0$ was arbitrary, the definition is satisfied with witness $\delta=\varepsilon/3$,
so the limit is $5$. $\blacksquare$

### Worked Instance

A nonlinear case: $\lim_{x\to3}x^2=9$. Let $\varepsilon\gt0$. Here $|x^2-9|=|x-3|\,|x+3|$, and the
factor $|x+3|$ must be controlled. First restrict $\delta\le1$: then $|x-3|\lt1$ gives $2\lt x\lt4$,
hence $|x+3|\lt7$. Now **choose** $\delta=\min\!\big(1,\tfrac{\varepsilon}{7}\big)$. For
$0\lt|x-3|\lt\delta$,
$$|x^2-9|=|x-3|\,|x+3|\lt \delta\cdot 7\le \frac{\varepsilon}{7}\cdot 7=\varepsilon.$$
The two-part $\delta$ is what tames the variable factor $|x+3|$.

### Pitfalls

- **Order of quantifiers** is everything: $\delta$ is chosen *after*, and may depend on,
  $\varepsilon$ — never the reverse.
- The condition is $0\lt|x-a|$: the point $x=a$ is excluded, so $f(a)$ (or its absence) never
  matters.
- Any working $\delta$ suffices; it need not be the largest. Shrinking a valid $\delta$ keeps it
  valid.
- For nonlinear $f$, first bound the "extra" factor by pre-restricting $\delta\le1$, then take
  $\delta=\min(1,\dots)$; forgetting the $\min$ leaves the bound uncontrolled.
- It must hold for **all** $\varepsilon\gt0$; verifying one or two tolerances proves nothing.

:::
:::

## Connections

Prereqs: the intuitive limit (the idea being made precise), the real numbers (whose completeness and
absolute-value metric the definition rests on), and quantifiers (the $\forall\varepsilon\,\exists\delta$
structure). This node is the **bridge into real analysis**: it sits far above the intuitive-limit
node deliberately (the validator's "TODO: bridge" warning on that edge marks exactly this leap in
rigor). From here follow the $\varepsilon$–$\delta$ definitions of continuity, the rigorous
derivative, and sequential limits. Genetic roots: Cauchy's and Weierstrass's nineteenth-century
"arithmetization of analysis." Recognition trigger: any demand to *prove* a limit rather than merely
compute it.
