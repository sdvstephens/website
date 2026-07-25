Everyone agrees that $2$ is less than $6$. Multiply both numbers by $-1$ and you get
$-2$ and $-6$ — but now look at a number line: $-2$ sits to the *right* of $-6$, so
the smaller has become the larger. An operation that never disturbs an *equation*
just quietly reversed a *comparison*. When exactly does that happen, and why?

## Discovery

1. Start from the true statement $2 \lt 6$. Add $5$ to both sides and check whether it
   is still true; then subtract $10$ from both sides of the original and check again.
   Decide whether *adding or subtracting the same number* to both sides can ever
   change which side is larger.
2. Again from $2 \lt 6$, multiply both sides by $3$ and check; then multiply both
   sides of the original by $10$ and check. Decide whether *multiplying by a positive
   number* can change which side is larger.
3. Now multiply both sides of $2 \lt 6$ by $-1$, compute the two results, and mark
   them on a number line — state which is now the larger. Repeat by multiplying the
   original by $-3$. Describe what multiplying by a *negative* number does to the
   direction of the comparison, every time.
4. Explain the pattern of step 3 with the number line itself: multiplying a point by
   $-1$ reflects it across $0$. What must reflecting *two* points across $0$ do to the
   left–right order between them, and hence to a "$\lt$" between them?
5. Put it to work: solve $-2x + 1 \lt 7$ for $x$, using the moves you tested in steps
   1–3 and taking special care at the step where you divide by a negative number.
   Describe the set of solutions as a ray on the number line.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **inequality** relates two expressions by order rather than equality, using
$\lt$ (less than), $\le$ (at most), $\gt$ (greater than), or $\ge$ (at least). A
**linear inequality** in $x$ looks like $ax + b \lt c$ (or with $\le,\gt,\ge$), and
to **solve** it is to describe every $x$ making it true — its solution set. Three
rules govern the legal moves, and they differ from the equation case in exactly one
place:

- **Adding or subtracting** the same number on both sides **preserves** the
  direction: if $a \lt b$ then $a + d \lt b + d$ for every $d$.
- **Multiplying or dividing** both sides by a **positive** number **preserves** the
  direction: if $a \lt b$ and $m \gt 0$ then $ma \lt mb$.
- **Multiplying or dividing** both sides by a **negative** number **reverses** the
  direction: if $a \lt b$ and $m \lt 0$ then $ma \gt mb$.

(The same three hold with $\le$ and $\ge$.) A one-variable linear inequality
therefore has a solution set that is a **ray**: all $x$ on one side of a cutoff, such
as $x \gt 2$ or $x \le -\tfrac13$.

### Proof

Anchor everything in one definition: for numbers $a,b$, write $a \lt b$ to mean that
$b - a$ is **positive**, and recall two facts about the positive numbers (from
[negation](ari-negation) and the ordering of the number line): the positives are
closed under addition and multiplication, and multiplying a positive by a negative
gives a negative, while $m \lt 0$ means $-m$ is positive.

*Addition preserves order.* Suppose $a \lt b$, so $b-a$ is positive. For any $d$,
$$(b+d) - (a+d) = b - a,$$
which is the same positive number, so $a+d \lt b+d$. (Subtracting $d$ is the case of
adding $-d$.)

*Multiplication by a positive preserves order.* Suppose $a \lt b$ and $m \gt 0$, so
both $b-a$ and $m$ are positive. Then
$$mb - ma = m(b-a)$$
is a product of two positives, hence positive, so $ma \lt mb$.

*Multiplication by a negative reverses order.* Suppose $a \lt b$ and $m \lt 0$, so
$b-a$ is positive and $-m$ is positive. Then
$$ma - mb = m(a-b) = (-m)(b-a)$$
is a product of two positives, hence positive; by the definition of $\lt$ this says
$mb \lt ma$, i.e. $ma \gt mb$ — the direction has reversed. Equivalently, dividing by
a negative $m$ is multiplying by $1/m \lt 0$, so it reverses order too.

For the non-strict relations, $a \le b$ means $b - a$ is positive *or zero*; each
computation above sends a positive-or-zero quantity to a positive-or-zero quantity of
the same sign structure, so $\le$ and $\ge$ obey the identical three rules. Since each
allowed move is reversible (add $-d$; multiply by $1/m$, which has the same sign as
$m$), applying them to $ax+b \lt c$ neither gains nor loses solutions, and drives it
to a bare "$x \lt k$" or "$x \gt k$" form describing a ray. $\blacksquare$

### Worked Instance

Solve the Hook-adjacent inequality $-2x + 1 \lt 7$. Subtract $1$ from both sides
(addition rule — direction unchanged):
$$-2x \lt 6.$$
Now divide both sides by $-2$. This is division by a **negative**, so by the third
rule the direction reverses, $\lt$ becoming $\gt$:
$$x \gt \frac{6}{-2} = -3.$$
The solution set is the ray $x \gt -3$: every number to the right of $-3$, and no
others. Spot-check the boundary and a point: at $x=0$ (which is $\gt -3$),
$-2(0)+1 = 1 \lt 7$, true; at $x=-5$ (which is *not* $\gt -3$),
$-2(-5)+1 = 11 \lt 7$ is false — exactly as the ray predicts. And the Hook itself is
the bare reversal: from $2 \lt 6$, multiplying by $-1$ gives $-2 \gt -6$.

### Pitfalls

- **Flip only for a negative *multiplier or divisor*.** The reversal is triggered by
  multiplying or dividing both sides by a negative number — not by adding or
  subtracting a negative. From $x + 5 \lt 2$, subtracting $5$ gives $x \lt -3$ with
  the sign unchanged.
- **Do not flip when multiplying by a positive.** Scaling both sides by $3$ or by
  $\tfrac12$ leaves the direction alone; only a negative factor turns it.
- **Never divide by a variable of unknown sign.** Dividing $ax \lt c$ by $x$ is
  illegal until you know whether $x$ is positive or negative, since the two cases flip
  the sign differently; isolate the number, not the letter.
- **Keep the arrow pointing at the same value.** "$x \gt -3$" and "$-3 \lt x$" say the
  same thing; rewriting a solution should not silently swap which quantity is larger.
- **Mind strict versus non-strict.** $\lt$ excludes the boundary point; $\le$ includes
  it. Solving $2x \le 6$ gives $x \le 3$, and $x=3$ *is* a solution.

:::
:::

## Connections

The mechanics carry straight over from
[solving linear equations](alg-linear-equation-1var) — same peel-off-in-reverse
strategy, same care about doing each move to both sides — with the single, crucial
amendment that order is not symmetric under sign change: negating reflects the number
line, and reflection reverses order, a fact that rests on the arithmetic of
[negatives](ari-negation). Because the answer is a whole ray rather than a lone point,
inequalities are the natural language for constraints and ranges, and they are the
gateway to [absolute value](alg-absolute-value), where "$|x| \lt r$" unfolds into a
*pair* of linear inequalities. Recognition trigger: a single unknown compared by
$\lt,\le,\gt,\ge$ to a value — solve as an equation, but flip the arrow the instant
you multiply or divide by a negative.

## History

While equations are ancient, inequalities as a symbolic subject are surprisingly modern. Comparisons of magnitude appear throughout Greek geometry — Euclid constantly speaks of one quantity being greater or less than another — but always in words. The symbols $\lt$ and $\gt$ were introduced by the English mathematician Thomas Harriot and published posthumously in his *Artis Analyticae Praxis* ($1631$), giving inequality a compact notation at last. Solving linear inequalities then followed the same balancing logic as equations, with the crucial twist, well understood by the eighteenth century, that multiplying or dividing by a negative reverses the direction of the comparison. It mattered because so much of mathematics is about ranges and bounds rather than exact values — from optimization and error estimates to the definitions of limits — and the linear case is where that reasoning begins.
