A car travels $60$ miles per hour — how many feet per second is that? The numbers change from $60$
to $88$, yet the *speed* is identical. Converting units feels like it should distort the quantity,
but done right it never does. What lets you swap "miles" for "feet" and "hours" for "seconds" without
changing the thing you measured?

## Discovery

1. Since $1$ foot $=$ $12$ inches, the ratio $\dfrac{12\text{ in}}{1\text{ ft}}$ compares two
   descriptions of the *same* length. As a pure number (ignoring the labels), what is its value, and
   so what happens to any quantity you multiply by it?
2. Convert $3$ feet to inches by multiplying $3\text{ ft}$ by the ratio from step $1$, written so that
   "ft" sits where it can cancel against the "ft" in $3\text{ ft}$. Which way up must the ratio go for
   the units to cancel, and what number of inches results?
3. Now chain two conversions: turn $2$ hours into seconds using $1\text{ hr}=60\text{ min}$ and
   $1\text{ min}=60\text{ sec}$. Multiply by two ratios in a row, each oriented so the unwanted unit
   cancels. What arrangement leaves only "sec"?
4. Handle a *compound* unit: convert $60\ \tfrac{\text{miles}}{\text{hour}}$ toward
   $\tfrac{\text{feet}}{\text{second}}$ using $1\text{ mi}=5280\text{ ft}$ and $1\text{ hr}=3600
   \text{ sec}$. Which ratio cancels "miles" and which cancels "hours," and where must each go
   (top or bottom) so the leftover reads feet-over-seconds?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Unit conversion by multiplying by one.** A **conversion factor** is a ratio of two equal
quantities in different units, e.g. $\dfrac{12\text{ in}}{1\text{ ft}}$ or $\dfrac{5280\text{ ft}}
{1\text{ mi}}$. Because top and bottom are the *same* length, each such factor **equals $1$**, so
multiplying by it changes the *units* but not the *quantity*. Orient each factor so the unwanted unit
**cancels** (appears once on top and once on bottom) and the wanted unit survives:
$$3\ \text{ft}\cdot\frac{12\ \text{in}}{1\ \text{ft}} = 36\ \text{in}.$$
Chain several factors to cross multiple units at once. Treating units as algebraic symbols that
cancel — **dimensional analysis** — both performs the conversion and *checks* it: if the leftover
units aren't what you wanted, the setup is wrong.

### Proof

The claim is that a conversion factor equals $1$, so multiplying by it preserves the quantity while
cancelling units.

*A conversion factor is $1$.* Two measurements of the same object, say $1\text{ ft}$ and
$12\text{ in}$, name one length, so $1\text{ ft}=12\text{ in}$. Dividing both sides by $1\text{ ft}$,
$$\frac{12\ \text{in}}{1\ \text{ft}} = 1,$$
a genuine ratio equal to $1$ (and its reciprocal $\tfrac{1\text{ ft}}{12\text{ in}}=1$ too). By the
ratio-as-fraction principle, this is scale-invariant and behaves as the number $1$.

*Multiplying preserves the quantity and cancels units.* Since the factor is $1$, $Q\cdot 1 = Q$: the
measured amount is unchanged. Treating the unit labels as symbols multiplied along with the numbers,
$$3\ \text{ft}\cdot\frac{12\ \text{in}}{1\ \text{ft}} = \frac{3\cdot 12}{1}\cdot\frac{\text{ft}\cdot\text{in}}{\text{ft}} = 36\ \text{in},$$
where the "ft" cancels top-against-bottom exactly as a common factor does in a fraction, leaving
"in." Chaining factors multiplies several $1$'s, still $1$, cancelling one unit at each stage; a
compound unit like $\tfrac{\text{mi}}{\text{hr}}$ needs one factor to cancel "mi" (mi on the bottom)
and one to cancel "hr" (hr on the top), and the surviving symbols are the target units — which is why
checking the leftover units validates the whole computation. $\blacksquare$

### Worked Instance

The Hook: convert $60\ \tfrac{\text{mi}}{\text{hr}}$ to $\tfrac{\text{ft}}{\text{sec}}$. Multiply by
$\tfrac{5280\text{ ft}}{1\text{ mi}}$ (cancels "mi") and by $\tfrac{1\text{ hr}}{3600\text{ sec}}$
(cancels "hr", placed so "hr" lands on top):
$$60\ \frac{\text{mi}}{\text{hr}} \cdot \frac{5280\ \text{ft}}{1\ \text{mi}} \cdot \frac{1\ \text{hr}}{3600\ \text{sec}} = \frac{60\cdot 5280}{3600}\ \frac{\text{ft}}{\text{sec}} = \frac{316800}{3600}\ \frac{\text{ft}}{\text{sec}} = 88\ \frac{\text{ft}}{\text{sec}}.$$
The "mi" and "hr" both cancel, leaving feet per second, and $60\ \tfrac{\text{mi}}{\text{hr}} = 88\
\tfrac{\text{ft}}{\text{sec}}$ — the same speed renamed, exactly as the multiply-by-one guarantee
promised.

### Pitfalls

- **Orient each factor so the unwanted unit cancels.** To cancel "ft" in $3\text{ ft}$, put "ft" on
  the *bottom* of the factor; the flipped version $\tfrac{1\text{ ft}}{12\text{ in}}$ would leave
  $\tfrac{\text{ft}^2}{\text{in}}$ nonsense.
- **A conversion factor and its reciprocal are both $1$**, but only one cancels correctly — let the
  units decide which.
- **For compound units, convert each part.** $\tfrac{\text{mi}}{\text{hr}}$ needs both a distance and a
  time factor; converting only one leaves a mixed unit.
- **Check the surviving units.** If the leftover units aren't the target, the arithmetic is beside the
  point — the setup is wrong.

:::
:::

## Connections

Unit conversion is ratios-equal-to-one applied with the cancellation of common factors: every
conversion factor is a fraction worth $1$, and units cancel like numeric factors. It rests on ratios
and multiplication and pairs with proportions for rate problems. Dimensional analysis — tracking unit
symbols — is a universal error check in science and engineering. Recognition trigger: any "convert
___ to ___," "how many ___ in ___," or a rate whose units must change calls for chaining
multiply-by-one factors.

## History

Converting between units is as old as measurement, and for most of history it was a genuine burden: ancient and medieval systems used bewildering local units for length, weight, volume, and money, each with its own conversion factors, and merchants' manuals like Fibonacci's *Liber Abaci* (1202) devoted many pages to such computations via the rule of three. The great simplification came with the metric system, devised in Revolutionary France in the 1790s by a commission including Lavoisier, Laplace, and Legendre, which imposed a single decimal scale so that conversions became mere shifts of the decimal point. The modern technique of treating units as algebraic quantities that cancel — "dimensional analysis" — was developed in the nineteenth century, notably by Joseph Fourier, who introduced the notion of dimensional homogeneity. This mattered because reliable unit conversion is indispensable to science, engineering, and trade, and dimensional analysis became a powerful check on physical equations.
