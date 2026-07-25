Prove that for all positive reals $a, b, c$,
$$\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \ge \frac{3}{2}.$$
Three free variables, an ugly cyclic sum. But every term is *unchanged* if you scale
$(a,b,c) \mapsto (ta, tb, tc)$. What if you spend that freedom to fix $a + b + c = 3$?

## Discovery

1. Check the scaling claim. Replace $a, b, c$ by $ta, tb, tc$ for $t \gt 0$ in one term
   $\frac{a}{b+c}$. Does the term change? Does the whole inequality change? What does this say
   about whether a bound proved for one triple settles it for the whole scaled family?
2. Because scaling is free, you may impose one convenient equation. Suppose you set
   $a + b + c = 3$. Rewrite each denominator $b+c$, $c+a$, $a+b$ using this constraint. What
   simpler shape does each term take?
3. Under $a+b+c = 3$, the target sum becomes $\sum \frac{a}{3-a}$. You have traded three free
   variables plus a scaling freedom for two free variables on a fixed plane. Is the problem now
   more tractable? (Try, e.g., convexity or a tangent-line estimate on $f(t) = \frac{t}{3-t}$.)
4. Separately, make sure the substitution is *lossless*. Given any positive triple $(a,b,c)$, can
   you always scale it to satisfy $a+b+c = 3$? Is the scaling factor unique? Explain why proving
   the inequality on the slice $a+b+c=3$ therefore proves it everywhere.
5. Reflect: you used up a *symmetry* of the problem (scaling invariance) to *pin a coordinate*.
   State the general trade you made, and what property the inequality had to possess to license it.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Substitution & normalization** is the discovery move: when a problem is *invariant* under some
family of transformations (scaling, translation, a symmetry group) — or when a clever change of
variables simplifies its structure — **spend that freedom to impose a convenient constraint**
("WLOG $a+b+c = 1$", "WLOG the largest is $1$", "set $x = \tan\theta$"). Normalizing removes a
degree of freedom and turns a homogeneous or symmetric problem into a lower-dimensional, concrete
one. It applies to **homogeneous** inequalities (all terms same degree $\Rightarrow$ scale-invariant
$\Rightarrow$ fix the sum, product, or a max), to problems with translation/rotation symmetry
(fix a point at the origin), and to expressions a substitution renders standard. The licence to
say "WLOG": the normalization must be **achievable for every instance** (every case can be
transformed to meet the constraint) and the property being proved must be **invariant** under the
transformation used (so the normalized case implies the general one). Violate either and "WLOG"
is a lie.

### Proof

Why is "WLOG normalize" a valid inference and not a loss of generality?

**The general principle.** Let $P(x)$ be the statement to prove for all $x$ in a set $X$. Suppose
a group (or family) of transformations $G$ acts on $X$ such that: **(i)** $P$ is *invariant* —
$P(x)$ holds iff $P(g\cdot x)$ holds for all $g \in G$; and **(ii)** the normalization is
*attainable* — every orbit $G\cdot x$ contains a representative satisfying the constraint $C$.
Then proving $P$ for all $x$ with $C(x)$ suffices: given arbitrary $x \in X$, pick $g$ with
$C(g\cdot x)$ by (ii); the normalized case gives $P(g\cdot x)$; invariance (i) transports it back
to $P(x)$. So "assume $C$" costs no generality. Both hypotheses are essential — drop invariance
and the normalized truth need not transfer; drop attainability and some instances are never
covered.

**Applied to the Hook.** Take $X = \{(a,b,c) : a,b,c \gt 0\}$, transformations $G = $ positive
scalings $g_t : (a,b,c)\mapsto (ta,tb,tc)$, and the target $P$ = the inequality.
*Invariance:* each term $\frac{a}{b+c}$ has numerator and denominator both degree $1$, so
$\frac{ta}{tb+tc} = \frac{a}{b+c}$; the whole sum, and hence the truth of $P$, is unchanged by
$g_t$. *Attainability:* for any positive $(a,b,c)$ set $t = \frac{3}{a+b+c} \gt 0$; then
$g_t(a,b,c)$ has coordinate sum $3$. So every orbit meets the slice $a+b+c=3$, and by the
principle it suffices to prove the inequality there.

*Finishing on the slice.* With $a+b+c=3$, the sum is $\sum \frac{a}{3-a}$. The function
$f(t) = \frac{t}{3-t} = -1 + \frac{3}{3-t}$ is convex on $(0,3)$ (its second derivative
$\frac{6}{(3-t)^3} \gt 0$). By Jensen's inequality for the convex $f$,
$$\frac{1}{3}\sum f(a) \ge f\!\left(\frac{a+b+c}{3}\right) = f(1) = \frac{1}{2},$$
so $\sum \frac{a}{3-a} \ge \tfrac{3}{2}$, with equality at $a=b=c=1$. Undoing the normalization
(invariance) yields the inequality for all positive $(a,b,c)$. $\blacksquare$

### Worked Instance

Resolving the Hook. The inequality is homogeneous of degree $0$, so it is scale-invariant;
normalize $a+b+c = 3$ (attainable via $t = 3/(a+b+c)$). Each denominator becomes $3 - (\text{that
variable})$, turning the target into $\sum \frac{a}{3-a} \ge \tfrac{3}{2}$. Since
$f(t) = \frac{t}{3-t}$ is convex on $(0,3)$, Jensen gives $\frac13\sum f(a) \ge f(1) = \tfrac12$,
i.e. $\sum \frac{a}{3-a}\ge \tfrac32$, equality at $a=b=c$. Normalization reduced a
three-variable homogeneous mess to a one-variable convexity check. (This is Nesbitt's inequality;
several routes exist, but normalization + Jensen is among the cleanest.)

### Pitfalls

- **Normalizing a non-invariant quantity.** "WLOG $a+b+c=1$" is only legal if the statement is
  scale-invariant (homogeneous of degree $0$, or you rescale *both* sides consistently). Fixing a
  sum in a *non*-homogeneous problem changes it.
- **Unattainable constraints.** "WLOG the product is $1$" fails if some instance has product $0$;
  the normalization must be reachable for *every* case.
- **Two normalizations at once.** You have as many free normalizations as independent invariances.
  Imposing $a+b+c=1$ *and* $abc=1$ (only one scaling freedom available) generally over-constrains.
- **Forgetting to undo it.** The conclusion is proved on the slice; invoke invariance explicitly
  to transport it back to the general instance.

:::
:::

## Connections

Prereqs: **meta-symmetry** — a normalization *spends* an invariance/symmetry to pin a coordinate,
so this is symmetry-exploitation turned into a coordinate choice. It is the meta-layer behind
**ineq-normalization** and **ineq-homogenization**, and the WLOG-scaling used throughout olympiad
inequalities and in geometry (place a vertex at the origin, a side on the $x$-axis). Recognition
trigger: a homogeneous or symmetric expression with "too many" free variables — count the
invariances and *spend* them. Ubiquitous on the Putnam and IMO inequality problems.
