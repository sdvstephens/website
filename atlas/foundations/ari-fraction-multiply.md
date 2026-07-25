Half of a third of a pie feels like it should be a small sliver — and it is exactly one-sixth.
Somehow "$\tfrac12$ *of* $\tfrac13$" turns two thirds-and-halves into a single sixth. Where does that
$6$ come from, and why does multiplying the tops and multiplying the bottoms always get it right?

## Discovery

1. Draw a unit square. Along the bottom mark off $\tfrac13$ of the width; along the side mark off
   $\tfrac12$ of the height. Shade the rectangle they cut out. That shaded rectangle *is* $\tfrac12$
   of $\tfrac13$ of the square. 
2. Now extend all the tick marks into full grid lines across the square. Into how many equal little
   rectangles is the whole square chopped, and how many does your shaded piece cover? Write the
   shaded area as a fraction of the whole.
3. Redo steps $1$–$2$ with a square, width $\tfrac cd$ and height $\tfrac ab$: the vertical cuts
   make $d$ columns, the horizontal cuts make $b$ rows. Count the total little rectangles and count
   the ones inside the shaded block. Write the shaded fraction in terms of $a,b,c,d$.
4. Check it against plain whole numbers: does your rule from step $3$ still give the right answer
   when $b=d=1$ (so you are just multiplying $a$ by $c$)? What must it reduce to?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The product of two fractions.** For fractions $\tfrac ab$ and $\tfrac cd$ (with $b,d\ne0$),
$$\frac ab\cdot\frac cd = \frac{ac}{bd}:$$
multiply the numerators, multiply the denominators. The word "of" is multiplication — "$\tfrac ab$
of $\tfrac cd$" means $\tfrac ab\cdot\tfrac cd$. Geometrically it is the **area** of a rectangle
$\tfrac ab$ tall and $\tfrac cd$ wide inside a unit square: the two sets of cuts dice the square into
$bd$ congruent cells, and the rectangle covers $ac$ of them. Reducing the answer afterward (by
common factors) is optional but usual; often it is easier to cancel *before* multiplying.

### Proof

Count the cells of a diced unit square two ways.

Slice a unit square with $d-1$ vertical cuts into $d$ equal columns and $b-1$ horizontal cuts into
$b$ equal rows. This makes $bd$ congruent small cells, each of area $\tfrac1{bd}$ (they tile the unit
square, and there are $bd$ of them, so each is one $bd$-th of a unit — by the meaning of the unit
fraction, $bd\cdot\tfrac1{bd}=1$).

The rectangle of width $\tfrac cd$ and height $\tfrac ab$ occupies the first $c$ of the $d$ columns
and the first $a$ of the $b$ rows, so it is an $a\times c$ array of cells: $ac$ cells in all. Its
area is therefore
$$\frac ab\cdot\frac cd = (ac)\cdot\frac1{bd} = \frac{ac}{bd},$$
the first equality because area $=$ (height)(width) and the block is exactly $ac$ unit cells, the
second by the meaning of $\tfrac{ac}{bd}$. When $b=d=1$ this reads $\tfrac a1\cdot\tfrac c1=\tfrac
{ac}1=ac$, so the rule extends whole-number multiplication rather than replacing it. $\blacksquare$

### Worked Instance

The Hook: $\tfrac12\cdot\tfrac13 = \tfrac{1\cdot1}{2\cdot3} = \tfrac16$. The unit square, cut into
$2$ rows and $3$ columns, has $6$ cells; "half of a third" is one of them, $\tfrac16$ — the sliver.
A case where cancelling first pays off: $\tfrac{4}{9}\cdot\tfrac{3}{8}$. Multiplying blindly gives
$\tfrac{12}{72}=\tfrac16$; cancelling the shared $4$ (with $8$) and $3$ (with $9$) *first* —
$\tfrac{4}{9}\cdot\tfrac38 = \tfrac{1}{3}\cdot\tfrac{1}{2} = \tfrac16$ — reaches the same reduced
answer with smaller numbers.

### Pitfalls

- **Do not cross-add or find a common denominator.** Multiplication needs no common denominator; that
  ritual belongs to addition. Just multiply straight across.
- **"Of" means times.** "$\tfrac34$ of $20$" is $\tfrac34\cdot 20 = 15$, not $\tfrac34 + 20$ or
  $20\div\tfrac34$.
- **The product is (usually) *smaller*.** Multiplying by a proper fraction shrinks: $\tfrac12$ of
  $\tfrac13$ is less than $\tfrac13$. Only multiplying by something $\gt 1$ enlarges.
- **Cancel factors, top-against-bottom, before multiplying if you like** — but never cancel a
  numerator against another numerator.

:::
:::

## Connections

The area model made numeric: "of" is a product, and dicing a square explains the multiply-across
rule. It sits on the meaning of a fraction and whole-number multiplication, and it powers division
(multiply by the reciprocal), comparison (cross-multiplication), scaling in ratios and percents, and
simplifying radicals. Recognition trigger: any "$\tfrac ab$ of something," "fraction times fraction,"
or "area with fractional sides" is this rule.

## History

Multiplying fractions — numerator times numerator, denominator times denominator — was carried out in practice by the ancients even as they described it in the language of parts and ratios. The Egyptians combined unit fractions through elaborate tables, and Indian mathematicians gave clean, general rules: Brahmagupta (628 CE) and later Bhāskara II in the *Līlāvatī* (1150 CE) stated fraction multiplication essentially in its modern form. These Indian methods, transmitted through Arabic scholars, entered Europe via Fibonacci's *Liber Abaci* (1202). The "part of a part" area picture that justifies the rule — a fraction of a fraction as a subdivided rectangle — is implicit in Greek proportion theory and became explicit in Renaissance arithmetic texts. This mattered because multiplication of fractions is what makes $\QQ$ closed under products and gives every nonzero rational a reciprocal, completing the field structure of the rationals.
