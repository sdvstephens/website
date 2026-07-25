Cauchy–Schwarz caps $\sum a_i b_i$ by $\sqrt{\sum a_i^2}\,\sqrt{\sum b_i^2}$ — both exponents are $2$, and
notice $\tfrac12 + \tfrac12 = 1$. Suppose you want the two exponents to be $3$ and $\tfrac32$ instead, or you
want to bound a product spread across *three* sequences at once. Is $2$ genuinely special, or just one point
on a whole curve of inequalities?

## Discovery

Work with nonnegative reals throughout.
1. Aim for $\displaystyle\sum a_i b_i \le \Big(\sum a_i^{\,p}\Big)^{1/p}\Big(\sum b_i^{\,q}\Big)^{1/q}$ with
   $p,q \gt 1$. Replace every $a_i$ by $\lambda a_i$ and see how each side scales in $\lambda$. For the
   inequality to be scale-consistent, what single relation between $p$ and $q$ is forced?
2. Prove the one-term seed: for $x,y \ge 0$ and the $p,q$ from step 1, show $xy \le \dfrac{x^{p}}{p} +
   \dfrac{y^{q}}{q}$. (Set $u = x^p$, $v = y^q$ and lean on the concavity of $\ln$.)
3. Normalize so that $\sum a_i^{\,p} = 1$ and $\sum b_i^{\,q} = 1$. Apply the seed to each pair $(a_i,b_i)$ and
   add over $i$. What upper bound on $\sum a_i b_i$ pops out?
4. Undo the normalization by rescaling $a_i$ and $b_i$. What inequality for arbitrary nonnegative sequences do
   you obtain?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Hölder's inequality.** Let $p,q \gt 1$ be *conjugate exponents*, meaning $\dfrac1p + \dfrac1q = 1$. For
nonnegative reals $a_1,\dots,a_n$ and $b_1,\dots,b_n$,
$$\sum_{i=1}^{n} a_i b_i \;\le\; \Big(\sum_{i=1}^{n} a_i^{\,p}\Big)^{1/p}\Big(\sum_{i=1}^{n} b_i^{\,q}\Big)^{1/q},$$
with equality iff the sequences $(a_i^{\,p})$ and $(b_i^{\,q})$ are proportional. Cauchy–Schwarz is the case
$p=q=2$. More generally, for $m$ sequences with exponents $p_1,\dots,p_m \gt 1$ satisfying
$\sum_{j} \tfrac{1}{p_j} = 1$,
$$\sum_{i} \prod_{j=1}^{m} a^{(j)}_i \;\le\; \prod_{j=1}^{m}\Big(\sum_{i} \big(a^{(j)}_i\big)^{p_j}\Big)^{1/p_j}.$$
It is sometimes called the **Rogers–Hölder** inequality, and it is the statement that the $\ell^p$ and
$\ell^q$ norms are dual.

### Proof

The engine is **Young's inequality**, which is the one-term seed. For $u,v \ge 0$ and conjugate $p,q$,
$$u^{1/p}\,v^{1/q} \;\le\; \frac{u}{p} + \frac{v}{q}.$$
If $u=0$ or $v=0$ this is clear. Otherwise, since $\ln$ is concave and $\tfrac1p + \tfrac1q = 1$ are positive
weights, weighted AM–GM (the **ineq-power-mean** / AM–GM circle) gives
$$\ln\!\Big(\frac{u}{p} + \frac{v}{q}\Big) \ge \frac1p \ln u + \frac1q \ln v = \ln\!\big(u^{1/p} v^{1/q}\big),$$
and exponentiating yields Young. Writing $x = u^{1/p}$, $y = v^{1/q}$ gives the seed $xy \le \tfrac{x^p}{p} +
\tfrac{y^q}{q}$; equality holds iff $u = v$, i.e. $x^p = y^q$.

**Main inequality.** If $\sum a_i^{\,p} = 0$ or $\sum b_i^{\,q} = 0$ then one sequence is all zero and both
sides vanish. Otherwise set
$$A = \Big(\sum_i a_i^{\,p}\Big)^{1/p}, \qquad B = \Big(\sum_i b_i^{\,q}\Big)^{1/q},$$
and apply Young to $x = a_i/A$, $y = b_i/B$ for each $i$:
$$\frac{a_i b_i}{AB} \le \frac{1}{p}\cdot\frac{a_i^{\,p}}{A^{p}} + \frac{1}{q}\cdot\frac{b_i^{\,q}}{B^{q}}.$$
Summing over $i$ and using $\sum_i a_i^{\,p} = A^{p}$, $\sum_i b_i^{\,q} = B^{q}$,
$$\frac{1}{AB}\sum_i a_i b_i \le \frac{1}{p}\cdot\frac{A^{p}}{A^{p}} + \frac{1}{q}\cdot\frac{B^{q}}{B^{q}}
= \frac1p + \frac1q = 1,$$
so $\sum_i a_i b_i \le AB$. Equality requires equality in every Young step, i.e. $a_i^{\,p}/A^{p} =
b_i^{\,q}/B^{q}$ for all $i$ — precisely proportionality of $(a_i^{\,p})$ and $(b_i^{\,q})$. The $m$-sequence
form follows by the same normalize-and-sum argument using the weights $1/p_j$. $\blacksquare$

### Worked Instance

**Claim.** For nonnegative reals $a,b,c$, $\ 9\,(a^3 + b^3 + c^3) \ge (a+b+c)^3$.

Apply the three-sequence Hölder with all exponents equal to $3$ (so $\tfrac13+\tfrac13+\tfrac13 = 1$), to the
sequences $(a,b,c)$, $(1,1,1)$, $(1,1,1)$:
$$a\cdot 1\cdot 1 + b\cdot 1\cdot 1 + c\cdot 1\cdot 1 \;\le\;
\big(a^3+b^3+c^3\big)^{1/3}\,(1+1+1)^{1/3}\,(1+1+1)^{1/3}.$$
The right side is $(a^3+b^3+c^3)^{1/3}\cdot 3^{1/3}\cdot 3^{1/3} = 3^{2/3}(a^3+b^3+c^3)^{1/3}$. Cubing both
sides gives $(a+b+c)^3 \le 9\,(a^3+b^3+c^3)$, with equality iff $a=b=c$. This is the power-mean gap between the
cubic mean and the arithmetic mean, delivered in one Hölder stroke.

### Pitfalls

- **Exponents must be conjugate and exceed $1$:** $\tfrac1p + \tfrac1q = 1$ with $p,q \gt 1$. Dropping the
  conjugacy condition breaks the proof.
- **Nonnegativity.** State it for $a_i,b_i \ge 0$ (or bound $\sum a_i b_i$ by $\sum |a_i b_i|$ first); signs
  can violate the raw form.
- **Equality is proportional $p$-th powers**, i.e. $a_i^{\,p} \propto b_i^{\,q}$ — *not* $a_i \propto b_i$
  (that is the $p=q=2$ special case).
- **Don't confuse with Minkowski.** Hölder bounds a sum of *products*; Minkowski is the triangle inequality
  for the $p$-norm.

:::
:::

## Connections

Prereqs: **ineq-cauchy-schwarz** (the $p=q=2$ instance) and **ineq-power-mean** (its weighted AM–GM heart
proves Young). Hölder directly unlocks **ineq-minkowski** (the triangle inequality for $p$-norms is proved by
peeling and applying Hölder) and appears constantly in olympiad inequality work, often in the form
$\big(\sum \tfrac{a_i^3}{x_i}\big)\big(\sum x_i\big)\big(\sum 1\big) \ge \big(\sum a_i\big)^3$. Recognition
trigger: a sum of products, or a need to trade one exponent for a conjugate one; a bound where Cauchy–Schwarz
is "the wrong power." A Putnam and IMO staple.

## History

The inequality was first proved in 1888 by the self-taught English mathematician Leonard James Rogers, in a
paper on the arithmetic-mean–geometric-mean circle of ideas; Otto Hölder rediscovered and extended it the next
year, 1889, while studying convexity and mean values, and his name stuck — so it is properly the *Rogers–Hölder
inequality*. The one-term lemma at its core was isolated later by William Henry Young in 1912, whence "Young's
inequality." The whole complex found its natural home in the early-twentieth-century theory of $L^p$ spaces
built by Frigyes Riesz, where Hölder's inequality expresses the duality of the exponents $p$ and $q$ and
underpins the very definition of the $L^p$ norm. What began as a sharpening of AM–GM thus became structural to
modern analysis.
