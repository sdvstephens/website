Three positive numbers, each divided by the sum of the other two, then added up. Try
$a = b = c$: you get $\frac12 + \frac12 + \frac12 = \frac32$. Try $a = 2, b = c = 1$:
$\frac{2}{2} + \frac{1}{3} + \frac{1}{3} = 1.667 \gt \frac32$. The balanced case seems to be the
floor. Can this sum ever drop below $\frac32$?

## Discovery

1. Write $S = \dfrac{a}{b+c} + \dfrac{b}{c+a} + \dfrac{c}{a+b}$. Add $1$ to each of the three
   fractions in the form $\frac{a}{b+c} + 1 = \frac{a+b+c}{b+c}$. What does $S + 3$ become?
2. Let $s = a + b + c$. From step 1, $S + 3 = s\left(\frac{1}{b+c} + \frac{1}{c+a} +
   \frac{1}{a+b}\right)$. You now need a lower bound for
   $\left(\frac{1}{b+c} + \frac{1}{c+a} + \frac{1}{a+b}\right)$ times $s$. Notice the three
   denominators sum to $2s$. What tool bounds (sum of reciprocals)$\times$(sum) from below?
3. Apply that tool (Cauchy–Schwarz / AM–HM, or the Engel form) to
   $(b+c) + (c+a) + (a+b)$ and their reciprocals. What lower bound do you get for
   $s\left(\frac{1}{b+c} + \cdots\right)$?
4. Subtract the $3$ you added in step 1. What lower bound for $S$ falls out, and for which
   $a, b, c$ is every step tight?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For positive reals $a, b, c$,
$$\frac{a}{b+c} + \frac{b}{c+a} + \frac{c}{a+b} \;\ge\; \frac{3}{2},$$
**Nesbitt's inequality**, with equality if and only if $a = b = c$.

### Proof

**Via the Engel (Titu) form.** Multiply each numerator to make squares:
$\frac{a}{b+c} = \frac{a^2}{a(b+c)}$. Then by Cauchy–Schwarz in Engel form,
$$\sum \frac{a^2}{a(b+c)} \;\ge\; \frac{(a+b+c)^2}{a(b+c) + b(c+a) + c(a+b)} = \frac{(a+b+c)^2}{2(ab+bc+ca)}.$$
It remains to show $(a+b+c)^2 \ge 3(ab+bc+ca)$, i.e. $a^2+b^2+c^2 \ge ab+bc+ca$, which follows
from the trivial inequality since
$$a^2+b^2+c^2 - ab - bc - ca = \tfrac12\big[(a-b)^2 + (b-c)^2 + (c-a)^2\big] \ge 0.$$
Therefore $\displaystyle\sum \frac{a}{b+c} \ge \frac{3(ab+bc+ca)}{2(ab+bc+ca)} = \frac32$.
Equality needs both $(a-b)^2 = (b-c)^2 = (c-a)^2 = 0$ and the Engel step tight, i.e.
$a = b = c$.

**Alternative (AM–HM).** With $s = a+b+c$, adding $1$ to each fraction gives
$S + 3 = s\left(\frac{1}{b+c}+\frac{1}{c+a}+\frac{1}{a+b}\right)$. Since the three denominators
sum to $2s$, the AM–HM inequality gives
$\frac{1}{b+c}+\frac{1}{c+a}+\frac{1}{a+b} \ge \frac{9}{2s}$, so $S + 3 \ge \frac{9}{2}$, hence
$S \ge \frac32$. $\blacksquare$

### Worked Instance

Check the bound is sharp and confirm the Hook. At $a = b = c$ (say all $= 1$):
$$\frac{1}{1+1} + \frac{1}{1+1} + \frac{1}{1+1} = \frac12 + \frac12 + \frac12 = \frac32,$$
so equality is attained — the floor $\frac32$ is genuinely reached, and by the proof it is never
undercut. The lopsided test $a=2,b=c=1$ gave $\frac53 \gt \frac32$, consistent with the theorem.

### Pitfalls

- Nesbitt requires **positive** $a, b, c$; with a zero or negative denominator the statement can
  fail or be undefined.
- The bound $\frac32$ is a *minimum*, attained only at $a=b=c$ — there is no finite upper bound
  (let one variable dominate and $S \to \infty$).
- When using the Engel form, remember to rewrite $\frac{a}{b+c}$ as $\frac{a^2}{a(b+c)}$ first;
  applying Engel to the bare fractions is not valid.

:::
:::

## Connections

Prereqs: the Engel/Titu form of Cauchy–Schwarz and AM–GM (with AM–HM as its corollary) — Nesbitt
is the canonical *first* application of Engel form and a rite of passage in cyclic-fraction
inequalities. It generalizes to $n$ variables (sum of $\frac{a_i}{s - a_i} \ge \frac{n}{n-1}$).
Recognition trigger: a cyclic sum of fractions $\sum \frac{a}{b+c}$ or similar, symmetric in the
variables. A classic on olympiad shortlists.
