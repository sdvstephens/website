Two moves that feel like cheating but are airtight. **Normalization**: an inequality unchanged by
scaling all variables lets you *impose* a convenient condition like $a + b + c = 1$ for free.
**Homogenization**: an inequality with a constraint like $abc = 1$ can have the constraint
*absorbed* into the expression so every term has the same degree. Together they let you toggle
constraints on and off. Why is that legal?

## Discovery

1. Call an inequality $P(a,b,c) \ge Q(a,b,c)$ **homogeneous of degree $d$** if scaling every
   variable by $\lambda \gt 0$ multiplies both sides by $\lambda^d$: $P(\lambda a, \lambda b,
   \lambda c) = \lambda^d P(a,b,c)$, similarly for $Q$. Check whether $a^2 + b^2 + c^2 \ge
   ab + bc + ca$ is homogeneous, and if so of what degree.
2. Suppose $P \ge Q$ is homogeneous of degree $d$ and you want it for all positive $a,b,c$. Given
   any such triple, scale it by $\lambda = 1/(a+b+c)$. What constraint does the scaled triple now
   satisfy, and why does proving the inequality *only* on that slice suffice for all triples?
3. Reverse direction. Suppose you are given a **constrained** inequality, say prove
   $a + b + c \ge 3$ whenever $abc = 1$, $a,b,c \gt 0$. The two sides have different degrees
   ($1$ vs $0$). Use $abc = 1$ to rewrite the constant $3$ as $3(abc)^{1/3}$ so both sides have
   degree $1$. What does the inequality become, and is it now scale-invariant?
4. Formulate the two moves: when may you *add* a normalization constraint, and when may you
   *remove* a constraint by homogenizing?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Normalization.** If an inequality is homogeneous (both sides of the same degree under scaling),
then it suffices to prove it under any one convenient normalization such as $\sum a_i = 1$,
$\prod a_i = 1$, or $\max a_i = 1$; the general case follows by scaling.

**Homogenization.** A constrained inequality can be made homogeneous by using the constraint to
replace constants (or lower-degree terms) with equal-degree expressions — e.g. replacing $1$ by
$abc$ when $abc = 1$ — after which it is scale-invariant and can be normalized differently or
attacked directly.

These are equivalence-preserving reformulations: proving the normalized/homogenized form proves
the original.

### Proof

Suppose $P, Q$ are homogeneous of the same degree $d$: $P(\lambda \mathbf{a}) = \lambda^d
P(\mathbf{a})$ and likewise for $Q$, for all $\lambda \gt 0$. Fix any positive tuple
$\mathbf{a} = (a_1, \dots, a_n)$ and let $\lambda = 1/\big(\sum a_i\big) \gt 0$, so the scaled
tuple $\lambda\mathbf{a}$ satisfies $\sum \lambda a_i = 1$. If the inequality
$P \ge Q$ is known on the slice $\{\sum x_i = 1\}$, then $P(\lambda\mathbf a) \ge Q(\lambda\mathbf a)$,
i.e. $\lambda^d P(\mathbf a) \ge \lambda^d Q(\mathbf a)$. Since $\lambda^d \gt 0$, dividing gives
$P(\mathbf a) \ge Q(\mathbf a)$. As $\mathbf a$ was arbitrary, the inequality holds everywhere.
Thus normalization loses no generality. Homogenization is the same equivalence read backward: if
a constraint $g(\mathbf a) = 1$ holds, substituting powers of $g$ to equalize degrees changes
neither side's value (each inserted factor equals $1$), producing an equivalent homogeneous
inequality. $\blacksquare$

### Worked Instance

Prove: for $a, b, c \gt 0$ with $abc = 1$, $\ a + b + c \ge 3$. **Homogenize:** since
$abc = 1$, write $3 = 3(abc)^{1/3}$, turning the goal into $a + b + c \ge 3(abc)^{1/3}$ — now
homogeneous of degree $1$, valid for *all* positive $a,b,c$. This is exactly AM–GM:
$\frac{a+b+c}{3} \ge (abc)^{1/3}$. So the original follows, with equality iff $a=b=c$ (which under
$abc=1$ means $a=b=c=1$). Conversely, one could **normalize** a homogeneous AM–GM statement by
imposing $abc = 1$ to simplify — the two moves are inverse.

### Pitfalls

- Normalization is only valid when the inequality is **genuinely homogeneous** (same degree both
  sides). Imposing $\sum a = 1$ on a non-homogeneous inequality is a serious error.
- After normalizing, the equality case must be translated back through the scaling — the tight
  point in the normalized problem corresponds to a scaled family in the original.
- When homogenizing with a constraint like $abc = 1$, insert the constraint to the **correct
  power** so every term reaches the same degree; a wrong power leaves the expression
  inhomogeneous.

:::
:::

## Connections

Prereqs: AM–GM, the archetypal homogeneous inequality and the tool most often unlocked once a
constraint is normalized away. Normalization/homogenization is a meta-technique used *before*
almost every serious inequality: it converts between constrained and free forms so that
Cauchy–Schwarz, Jensen, SOS, or Schur can be applied cleanly. Recognition trigger: a homogeneous
inequality (impose a convenient sum/product = 1) or a constrained one with mismatched degrees
(absorb the constraint to homogenize). Ubiquitous on the Putnam and IMO.
