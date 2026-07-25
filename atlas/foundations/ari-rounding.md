A calculator says a room is $12.4736$ feet wide, but your tape measure only trusts tenths, so you
report $12.5$. You threw away digits and yet gave the *best* one-decimal answer. Which way do you
round, and why does the single digit just past your cutoff decide everything behind it?

## Discovery

1. You must replace $3.7$ by a whole number of units — either $3$ or $4$. On the number line, mark
   $3.7$ between $3$ and $4$. Which endpoint is it closer to, and by how much on each side? State the
   nearer whole number and why "nearer" is the sensible choice.
2. Repeat for $3.2$ and for $3.5$. For $3.5$ the two whole neighbors are *equally* far; note that this
   is the only genuinely ambiguous case, and record which digit — the one just after the cutoff —
   controlled your decision in all three.
3. From step $2$: to round $x$ to a given place, you only need the digit *immediately* to the right
   of that place. State the rule for when to round *up* versus *keep the digit* based on that single
   digit. (Handle the $5$ boundary by a fixed convention: round a lone $5$ up.)
4. Test that only the *next* digit matters, not the ones beyond it: round $3.7499$ and $3.7501$ to
   one decimal place. Do the trailing digits after the tenths-decider change your answer?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Rounding to a place.** To round a number to a chosen decimal place, look at the single digit
**immediately to the right** of that place (the *decider*):
- if the decider is $0,1,2,3,4$, **round down** — keep the target digit and drop the rest;
- if it is $5,6,7,8,9$, **round up** — add $1$ to the target digit (carrying if it was $9$), then drop
  the rest.

This returns the multiple of the chosen place value **nearest** to the original number (with the
convention that an exact halfway case, a lone $5$, rounds up). **Significant figures** count a
number's meaningful digits starting from the first nonzero one; rounding to $n$ significant figures
applies the same decider rule at the $n$-th such digit. Rounding controls *precision*: the reported
digits are trustworthy, the dropped ones were not.

### Proof

We show the decider rule really returns the nearest multiple of the place value $10^{-p}$.

Write $x$ as (a multiple of $10^{-p}$) plus a remainder living entirely in the smaller places:
$x = M\cdot 10^{-p} + t$, where $M$ is an integer and $0\le t \lt 10^{-p}$ is the tail. The two
candidate rounded values are $M\cdot10^{-p}$ (down) and $(M+1)\cdot10^{-p}$ (up); their distances
from $x$ are $t$ and $10^{-p}-t$. So "up" is nearer exactly when $t \gt \tfrac12\cdot10^{-p}$, i.e.
when the tail exceeds half a place.

Now the decider digit $d$ (the next one after the cutoff) satisfies $t = d\cdot 10^{-(p+1)} + (\text{even smaller places})$. If $d\le 4$, then $t \lt 5\cdot10^{-(p+1)} = \tfrac12\cdot10^{-p}$, so
down is nearer. If $d\ge 6$, then $t \ge 6\cdot10^{-(p+1)} \gt \tfrac12\cdot10^{-p}$, so up is
nearer. If $d=5$ with nonzero digits beyond, $t\gt\tfrac12\cdot10^{-p}$, again up. The only tie is
$d=5$ with nothing after ($t=\tfrac12\cdot10^{-p}$, equidistant), resolved *by convention* upward.
Crucially only $d$ (plus whether anything follows) enters, so digits past the decider cannot change a
non-tie decision. $\blacksquare$

### Worked Instance

The Hook: round $12.4736$ to the nearest tenth ($p=1$). The tenths digit is $4$; its decider (the
hundredths digit) is $7\ge 5$, so round up: $12.4 \to 12.5$. The trailing $36$ is irrelevant — as the
proof shows, once the decider is $7$ the answer is fixed. Contrast $3.7499$ to one decimal: the
decider is $4$, so it rounds *down* to $3.7$, even though a naive "round each digit in turn"
($9\to$ carry, $9\to$ carry, $4\to5$) would wrongly inflate it to $3.8$. Only the *first* dropped
digit votes.

### Pitfalls

- **Look only at the *next* digit.** Do not round digit-by-digit from the far right; $3.7499$ to a
  tenth is $3.7$, not $3.8$.
- **Carry when the target digit is $9$.** Rounding $2.98$ to a tenth gives $3.0$ (the $9$ becomes $10$,
  carrying into the units), not $2.10$.
- **Keep placeholder zeros.** Rounding $12.4736$ to a tenth is $12.5$; rounding $2.96$ to a tenth is
  $3.0$ — the trailing zero shows the precision claimed.
- **"Round up" means *toward the larger value*.** For the decider $\ge 5$ the target digit increases;
  it does not mean "always increase the last digit shown."

:::
:::

## Connections

Rounding lives on decimal place value: it selects the nearest multiple of a chosen power of ten, and
significant figures apply the same decider rule from the first meaningful digit. It governs how much
precision to report after any measurement or messy division, and it pairs with estimation to sanity-
check exact work. Recognition trigger: "to the nearest ___," "___ decimal places," or "___ sig figs"
is the decider rule.

## History

Rounding is as old as approximation itself: ancient astronomers and surveyors necessarily truncated their sexagesimal and decimal figures, and Archimedes (c. 250 BCE) knowingly bounded $\pi$ between $3\tfrac{10}{71}$ and $3\tfrac17$, an act of principled rounding. The practice became systematic with Stevin's decimal fractions (1585) and the great seventeenth-century logarithm tables of Napier and Briggs, where deciding the last retained digit demanded consistent rules. The formal study of rounding error, and conventions such as "round half to even" (banker's rounding), grew with numerical computation and were sharpened in the twentieth century by the needs of mechanical calculators and then digital computers — culminating in the IEEE 754 floating-point standard (1985). The motivation throughout was controlling and reporting uncertainty honestly. This mattered because every practical computation with irrational or lengthy numbers depends on principled rounding to stay both usable and trustworthy.
