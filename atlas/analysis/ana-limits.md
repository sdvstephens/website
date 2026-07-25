"As $x$ gets close to $2$, $x^2$ gets close to $4$." Everyone nods. But *how* close is close? If
someone demands that $x^2$ land within $0.001$ of $4$, can you name a target zone around $2$ that
guarantees it? If you can always answer that challenge, you have captured what "limit" really means.

## Discovery

Work with $f(x) = x^2$ near $x = 2$.

1. Suppose a skeptic demands $|x^2 - 4| \lt 0.01$. You get to control how near $x$ is to $2$: you
   promise $|x - 2| \lt \delta$ for some $\delta \gt 0$ you choose. Factor $x^2 - 4$. If you also
   agree to keep $|x-2| \lt 1$ (so $x$ stays in $(1,3)$), how large can the factor $|x+2|$ be?
2. Using that bound on $|x+2|$, turn $|x^2 - 4| = |x-2|\,|x+2|$ into something you can force below
   $0.01$ by shrinking $|x-2|$. What value of $\delta$ works?
3. Now replace $0.01$ by an arbitrary demand $\varepsilon \gt 0$. Repeat the reasoning: find a
   $\delta$ (allowed to depend on $\varepsilon$) so that $|x-2| \lt \delta$ forces
   $|x^2 - 4| \lt \varepsilon$. Write $\delta$ as an explicit formula in $\varepsilon$.
4. Reflect on the logical shape. Who moves first — the skeptic naming $\varepsilon$, or you naming
   $\delta$? Phrase "the limit of $x^2$ as $x \to 2$ is $4$" as a sentence about that challenge game,
   quantifying $\varepsilon$ and $\delta$ in the right order.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $f$ be defined on an interval around $a$ (except possibly at $a$ itself). We say
$$\lim_{x \to a} f(x) = L$$
if: **for every** $\varepsilon \gt 0$ **there exists** $\delta \gt 0$ such that
$$0 \lt |x - a| \lt \delta \;\implies\; |f(x) - L| \lt \varepsilon.$$
The order of quantifiers is the whole point: $\delta$ may depend on $\varepsilon$, but once
$\varepsilon$ is named, a single $\delta$ must handle *all* $x$ within it. The clause
$0 \lt |x-a|$ excludes $x = a$, so the value $f(a)$ (if any) is irrelevant to the limit.

### Proof

We prove $\displaystyle\lim_{x\to 2} x^2 = 4$ directly from the definition.

Let $\varepsilon \gt 0$ be given. We must produce $\delta \gt 0$ such that $0 \lt |x-2| \lt \delta$
forces $|x^2 - 4| \lt \varepsilon$. Factor:
$$|x^2 - 4| = |x-2|\,|x+2|.$$
We control $|x-2|$; the trouble is the unbounded factor $|x+2|$. Impose a preliminary cap
$|x-2| \lt 1$. Then $1 \lt x \lt 3$, so $3 \lt x+2 \lt 5$ and hence $|x+2| \lt 5$. Under this cap,
$$|x^2 - 4| = |x-2|\,|x+2| \lt 5\,|x-2|.$$
To force the right side below $\varepsilon$ it suffices that $|x-2| \lt \varepsilon/5$. So set
$$\delta = \min\!\left(1,\ \frac{\varepsilon}{5}\right).$$
Now suppose $0 \lt |x-2| \lt \delta$. Then $|x-2| \lt 1$, so the bound $|x+2| \lt 5$ is valid; and
$|x-2| \lt \varepsilon/5$, so
$$|x^2 - 4| = |x-2|\,|x+2| \lt 5 \cdot \frac{\varepsilon}{5} = \varepsilon.$$
Since $\varepsilon \gt 0$ was arbitrary, the limit is $4$. $\blacksquare$

The $\min$ is the standard move: one part of $\delta$ tames the wild factor, the other part
delivers the final smallness.

### Worked Instance

Resolve the Hook's specific challenge $\varepsilon = 0.001$. Our formula gives
$\delta = \min(1, 0.001/5) = 0.0002$. Check: if $|x-2| \lt 0.0002$ then $x \in (1.9998, 2.0002)$,
so $|x+2| \lt 5$, and $|x^2 - 4| \lt 5(0.0002) = 0.001$ as promised. For instance $x = 2.0001$
gives $x^2 = 4.00040001$, and indeed $|x^2 - 4| = 0.0004 \lt 0.001$. Every skeptic's demand is met
by shrinking $\delta$ this way.

### Pitfalls

- **Quantifier order.** "$\lim = L$" is $\forall\varepsilon\,\exists\delta$, not
  $\exists\delta\,\forall\varepsilon$. The latter would demand one $\delta$ good for all
  $\varepsilon$ — impossible unless $f$ is constant near $a$.
- **$\delta$ depends on $\varepsilon$** (and often on $a$). Writing a numeric $\delta$ without
  reference to $\varepsilon$ is a category error.
- **The point $a$ is excluded** by $0 \lt |x-a|$. A limit can exist where $f(a)$ is undefined or
  has a "wrong" value; continuity is the extra demand that $\lim_{x\to a} f = f(a)$.
- **Don't forget the cap.** If you skip the preliminary $|x-2| \lt 1$, the factor $|x+2|$ is
  unbounded and $\delta = \varepsilon/5$ alone is not justified.

:::
:::

## Connections

Prereqs: none beyond basic algebra and inequalities. This is the bedrock of analysis: continuity,
derivatives (a limit of difference quotients), and Riemann integrals (a limit of sums) are all
built on it. Unlocks derivative rules, Riemann sums, the IVT/EVT existence machinery, and the
convergence tests for series. Recognition trigger: any time "gets close to" must be made airtight,
or a proof asks you to *bound* an error by choosing an input tolerance.
