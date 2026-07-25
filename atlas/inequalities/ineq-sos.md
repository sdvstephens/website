Many symmetric inequalities, after all the algebra, boil down to proving one messy expression is
nonnegative. What if you could always massage it into a sum like
$S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2$ — visibly nonnegative the moment the coefficients
$S_a, S_b, S_c$ are shown to be $\ge 0$? That reshaping is the whole method.

## Discovery

1. Consider the difference $a^2 + b^2 + c^2 - ab - bc - ca$. Try to write it as a combination of
   the squares $(a-b)^2$, $(b-c)^2$, $(c-a)^2$. What coefficients work, and are they nonnegative?
2. A general symmetric expression that vanishes when $a = b = c$ can often be *forced* into the
   shape $\sum_{\text{cyc}} S_a\,(b - c)^2$. Given such a form, if every $S_a, S_b, S_c \ge 0$,
   why is the whole expression automatically $\ge 0$?
3. Now the subtle part: sometimes one coefficient, say $S_a$, is negative. Suppose you have
   ordered $a \ge b \ge c$. Among the three squares, which is largest, and can a *positive*
   coefficient on a large square compensate a *negative* coefficient on a small one? Sketch what
   inequality between the $S$'s you would need.
4. Formulate the method as a checklist: reduce to $\sum S_a(b-c)^2 \ge 0$, then find sufficient
   sign/size conditions on the $S_a$ to guarantee it.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Many symmetric (or cyclic) inequalities in $a, b, c$ reduce, after clearing denominators, to
proving
$$S_a\,(b-c)^2 + S_b\,(c-a)^2 + S_c\,(a-b)^2 \;\ge\; 0,$$
where $S_a, S_b, S_c$ are expressions in $a, b, c$. This is the **SOS method**. Sufficient
criteria include: (i) all $S_a, S_b, S_c \ge 0$; (ii) if $a \ge b \ge c$, then $S_b \ge 0$,
$S_b + S_a \ge 0$, and $S_b + S_c \ge 0$ (and symmetric variants). Equality typically forces
$a = b = c$ or a boundary case.

### Proof

That criterion (i) suffices is immediate: each $(b-c)^2, (c-a)^2, (a-b)^2 \ge 0$ by the trivial
inequality, so a nonnegative combination of them is $\ge 0$.

For criterion (ii), assume WLOG $a \ge b \ge c$, so $(a - c)^2 \ge (a-b)^2$ and
$(a-c)^2 \ge (b-c)^2$. Suppose $S_b \ge 0$, $S_a + S_b \ge 0$, and $S_b + S_c \ge 0$. Using
$(a-c) = (a-b) + (b-c)$ we have $(a-c)^2 = (a-b)^2 + 2(a-b)(b-c) + (b-c)^2 \ge (a-b)^2 + (b-c)^2$
since the cross term is $\ge 0$. Then
$$\sum S_a(b-c)^2 = S_a(b-c)^2 + S_b(a-c)^2 + S_c(a-b)^2 \ge S_a(b-c)^2 + S_b\big[(a-b)^2 + (b-c)^2\big] + S_c(a-b)^2$$
$$= (S_a + S_b)(b-c)^2 + (S_b + S_c)(a-b)^2 \ge 0,$$
because both grouped coefficients are $\ge 0$ and the squares are $\ge 0$. (If instead $S_b \le 0$
one uses the reverse bound; the stated conditions are the standard sufficient set.) $\blacksquare$

### Worked Instance

Prove $a^2 + b^2 + c^2 \ge ab + bc + ca$ by SOS. The difference is
$$a^2 + b^2 + c^2 - ab - bc - ca = \tfrac12(a-b)^2 + \tfrac12(b-c)^2 + \tfrac12(c-a)^2,$$
so here $S_a = S_b = S_c = \tfrac12 \ge 0$. By criterion (i) the sum is $\ge 0$, with equality
iff all three squares vanish, i.e. $a = b = c$. The messy symmetric expression became a
transparent sum of squares.

### Pitfalls

- Getting into SOS form is a genuine algebra step; a sign error in the $S_a$ coefficients wrecks
  the conclusion. Always re-expand to confirm the identity.
- All-$S \ge 0$ is *sufficient but not necessary*: some true inequalities have a negative
  coefficient that is compensated by the ordering (criterion (ii)). Do not declare an inequality
  false just because one $S$ can be negative.
- The method fits **symmetric/cyclic** three-variable inequalities that vanish at $a=b=c$;
  forcing an asymmetric expression into this shape may not be possible.

:::
:::

## Connections

Prereqs: the trivial inequality — SOS is its most systematic exploitation, turning a whole class
of symmetric inequalities into visible sums of squares. It pairs naturally with Schur's
inequality (which supplies a canonical non-obvious SOS term) and complements Jensen/smoothing on
problems those miss. Recognition trigger: a symmetric or cyclic three-variable inequality that is
tight at $a=b=c$ and resists AM–GM/Cauchy — reduce to $\sum S_a(b-c)^2$ and analyze the
coefficients. A workhorse for hard olympiad inequalities.
