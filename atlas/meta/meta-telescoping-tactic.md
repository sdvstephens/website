Add up $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)} = \frac{1}{1\cdot 2} + \frac{1}{2\cdot 3} + \cdots +
\frac{1}{n(n+1)}$. The terms shrink but there is no obvious formula for the total. Compute a few partial sums,
though — $\tfrac12,\ \tfrac23,\ \tfrac34,\dots$ — and a clean pattern jumps out. What makes such a sum
collapse to something so simple?

## Discovery

1. Look at a single term $\dfrac{1}{k(k+1)}$. Using partial fractions, write it as a *difference* of two
   simpler fractions. What are the two pieces?
2. Substitute that difference back and write the sum out longhand for $k = 1,2,3,4$, without simplifying yet.
   Which pieces cancel against neighboring terms?
3. Carry the cancellation through to the sum up to $n$. Exactly which terms are left standing at the two ends,
   and what closed form do they give?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The telescoping tactic.** To evaluate (or bound) a sum $\displaystyle\sum_{k=a}^{b} t_k$, engineer each term
as a difference of consecutive values of some auxiliary function: $t_k = f(k) - f(k+1)$ — a *discrete
antiderivative*. Then the interior cancels and only the endpoints survive:
$$\sum_{k=a}^{b} \big(f(k) - f(k+1)\big) = f(a) - f(b+1).$$
Products telescope multiplicatively: if $t_k = \dfrac{g(k)}{g(k+1)}$ then
$\displaystyle\prod_{k=a}^{b} t_k = \dfrac{g(a)}{g(b+1)}$. The creative labor is manufacturing the $f$ (or
$g$): partial fractions, rationalizing a conjugate, product-to-sum identities, or simply guessing $f$ and
verifying $f(k)-f(k+1) = t_k$.

### Proof

Why does the interior vanish? Prove the core identity by induction on the upper limit $b$ (with $a$ fixed).

*Base* $b = a$: the left side is the single term $f(a) - f(a+1)$, which equals the right side. *Step:* assume
$\sum_{k=a}^{b}\big(f(k)-f(k+1)\big) = f(a) - f(b+1)$. Adding the next term,
$$\sum_{k=a}^{b+1}\big(f(k)-f(k+1)\big) = \big(f(a) - f(b+1)\big) + \big(f(b+1) - f(b+2)\big) = f(a) - f(b+2),$$
the middle $f(b+1)$ terms canceling. This is the claim for $b+1$, completing the induction. The product form
follows identically after taking logarithms (for positive $g$) or by the same cancellation on ratios.
$\blacksquare$

### Worked Instance

**Resolving the Hook.** Partial fractions give $\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$, so with
$f(k) = \tfrac1k$,
$$\sum_{k=1}^{n}\frac{1}{k(k+1)} = f(1) - f(n+1) = 1 - \frac{1}{n+1} = \frac{n}{n+1}.$$
That matches the partial sums $\tfrac12,\tfrac23,\tfrac34,\dots$ spotted in the Hook.

**Engineering a telescope by rationalizing.** Evaluate $\displaystyle\sum_{k=1}^{n}\frac{1}{\sqrt{k}+\sqrt{k+1}}$.
Multiply each term by $\dfrac{\sqrt{k+1}-\sqrt{k}}{\sqrt{k+1}-\sqrt{k}}$; the denominator becomes
$(k+1)-k = 1$, so $\dfrac{1}{\sqrt{k}+\sqrt{k+1}} = \sqrt{k+1} - \sqrt{k}$. With $f(k) = -\sqrt{k}$ this is
$f(k)-f(k+1)$, hence
$$\sum_{k=1}^{n}\frac{1}{\sqrt{k}+\sqrt{k+1}} = \sqrt{n+1} - \sqrt{1} = \sqrt{n+1} - 1.$$

### Pitfalls

- **Off-by-one at the ends.** After cancellation, the survivors are $f(a)$ and $-f(b+1)$ — not $f(a)$ and
  $-f(b)$. Track the index shift carefully.
- **Verify the split exactly.** A sign slip in partial fractions gives $f(k)-f(k-1)$ or a wrong constant;
  confirm $f(k)-f(k+1) = t_k$ identically before summing.
- **Products need nonzero, well-defined terms.** For $\prod g(k)/g(k+1)$, ensure no $g$ value is zero.
- **Bounding telescopes must dominate.** To *bound* a sum, the engineered difference must genuinely
  over/under-estimate each $t_k$ in the right direction — an equality is not always available.

:::
:::

## Connections

Prereq: **alg-telescoping** (the algebra of collapsing sums and products). The tactic is the engine behind
**ser-telescoping-pf** (telescoping via partial fractions) and **tc-telescoping-trig** (product-to-sum
telescopes), and its weighted cousin is **ser-abel-summation** (summation by parts), which telescopes a
*product* of sequences. Recognition trigger: a sum or product whose general term factors, splits, or
rationalizes into a difference/ratio of consecutive values — reach for a discrete antiderivative and watch the
middle disappear. Common on the Putnam, AMC/AIME, and any "find a closed form" problem.

## History

Telescoping is one of the oldest summation ideas: Pietro Mengoli summed reciprocals of triangular numbers by
this collapse in the 1650s, and the young Gottfried Wilhelm Leibniz, around 1672, famously summed
$\sum 1/\binom{k+1}{2} = 2$ the same way while building his "harmonic triangle," an exercise Christiaan Huygens
had set him. Leonhard Euler later made such differencing routine. The evocative name comes from the way a
collapsible spyglass slides shut — the sum "telescopes" to its ends. Its discrete-calculus formalization casts
$f(k)-f(k+1)$ as the analog of a derivative and the endpoint survivors as a fundamental theorem of calculus
for sums; the weighted generalization is Niels Henrik Abel's summation by parts (1826).
