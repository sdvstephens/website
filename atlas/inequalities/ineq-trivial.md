Pick any real number, square it, and you never get anything negative: $(-3)^2 = 9$,
$0^2 = 0$, $(1.7)^2 = 2.89$. That one fact — a square is never negative — is the seed from
which almost every olympiad inequality grows. Watch how far a single square can carry you.

## Discovery

1. Let $t$ be any real number. Can $t^2$ ever be strictly negative? For exactly which $t$ is
   $t^2 = 0$?
2. Now take two reals $a, b$ and consider $(a - b)^2$. Expand it. Rearrange your expansion to
   compare $a^2 + b^2$ against $2ab$. Which is larger, and when are they equal?
3. Suppose you are handed the expression $x^2 - 6x + 11$ and asked to prove it is always
   positive. Try to rewrite it as (a perfect square) plus a constant. What constant do you get,
   and what does it tell you about the smallest possible value?
4. Generalize step 3: given $x^2 + px + q$, what single completed-square form reveals its
   minimum in one glance?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For every real number $t$,
$$t^2 \ge 0,$$
with equality if and only if $t = 0$. Consequently, for any reals $a, b$,
$$a^2 + b^2 \ge 2ab,$$
with equality iff $a = b$. This is the **trivial inequality** — "trivial" only in that it is
elementary, not in how much it does.

### Proof

The real numbers are an ordered field. For any real $t$, either $t \ge 0$ or $t \lt 0$. If
$t \ge 0$, then $t \cdot t \ge 0$ because a product of nonnegative numbers is nonnegative. If
$t \lt 0$, then $-t \gt 0$, and $t^2 = (-t)^2 = (-t)(-t) \ge 0$ by the same rule. In both cases
$t^2 \ge 0$. Equality $t^2 = 0$ forces $t = 0$, since in a field a product is zero only when a
factor is zero. For the second form, set $t = a - b$: then $0 \le (a-b)^2 = a^2 - 2ab + b^2$,
so $a^2 + b^2 \ge 2ab$, with equality exactly when $a - b = 0$. $\blacksquare$

### Worked Instance

Show $x^2 - 6x + 11 \gt 0$ for all real $x$. Complete the square:
$$x^2 - 6x + 11 = (x^2 - 6x + 9) + 2 = (x-3)^2 + 2.$$
By the trivial inequality $(x-3)^2 \ge 0$, so the whole expression is at least $2 \gt 0$. The
minimum value $2$ is attained exactly at $x = 3$. No calculus needed — one square did it.

### Pitfalls

- The inequality $t^2 \ge 0$ holds only for **real** $t$; over the complex numbers a "square"
  can be negative (e.g. $i^2 = -1$).
- Equality is a genuine part of the statement: $t^2 \ge 0$ is strict *except* at $t = 0$.
  Forgetting the equality case loses you the "when is it tight?" analysis that most problems
  hinge on.
- $a^2 + b^2 \ge 2ab$ is *not* the same as $a^2 + b^2 \ge 2|ab|$ — the latter is stronger and
  also true (it comes from $(a \mp b)^2 \ge 0$), but do not conflate the two.

:::
:::

## Connections

Prereqs: none — this is bedrock. Nearly every later inequality reduces to "find the right
square that must be nonnegative." It unlocks AM–GM (from $(\sqrt a - \sqrt b)^2 \ge 0$),
Cauchy–Schwarz (from a squared norm), the rearrangement inequality, and the whole SOS
(sum-of-squares) method. Recognition trigger: whenever you must show something is
nonnegative, ask "can I write it as a sum of squares?"
