$\tfrac12 + \tfrac13$ is not $\tfrac25$ — a half plus a third is more than either, and the honest
answer is $\tfrac56$. Yet $\tfrac15 + \tfrac25$ *does* just add the tops to $\tfrac35$. Why do
fractions add straight across sometimes but not others, and what fixes the rest?

## Discovery

1. Shade $\tfrac15$ of a bar, then shade $\tfrac25$ more of the same bar. All the pieces are the
   same size. How many fifths are shaded in total, and what did you do to the numerators? Did the
   denominator change?
2. Now try $\tfrac12 + \tfrac13$. The halves and thirds are *different-sized* pieces, so you can't
   just count them together. Using equivalent fractions, re-cut both so that every piece is the same
   size. What single denominator lets you rename *both* $\tfrac12$ and $\tfrac13$? Rewrite each.
3. With both fractions now over the common denominator from step $2$, add them the way step $1$
   worked, and reduce if possible. 
4. Do the same with subtraction on $\tfrac34 - \tfrac16$: find a common denominator, rename, then
   take the difference of the new numerators. State the general recipe your three steps suggest.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Adding and subtracting fractions.** Only *like* pieces combine, so first give the fractions a
**common denominator**, then add or subtract numerators:
$$\frac ab \pm \frac cd = \frac{ad}{bd} \pm \frac{cb}{bd} = \frac{ad \pm cb}{bd}.$$
Any common denominator works; $bd$ always does, and the *least* common denominator
$\operatorname{lcm}(b,d)$ keeps the numbers smallest. When $b=d$ this collapses to the easy case
$\tfrac ab \pm \tfrac cb = \tfrac{a\pm c}{b}$. Reduce the result to lowest terms at the end. The point
throughout: numerators count pieces, and you may only add counts of the *same* piece.

### Proof

Adding counts is only meaningful for equal-sized parts, so we make the parts equal, then add.

*Like denominators.* If both fractions are over $b$, then $\tfrac ab = a\cdot\tfrac1b$ and
$\tfrac cb = c\cdot\tfrac1b$ are $a$ and $c$ copies of the *same* unit piece $\tfrac1b$. By the
meaning of addition (pooling), together they are $a+c$ copies:
$$\frac ab + \frac cb = (a+c)\cdot\frac1b = \frac{a+c}{b},$$
and subtraction removes copies, $\tfrac ab - \tfrac cb = \tfrac{a-c}{b}$.

*Unlike denominators.* Rename each fraction over the common denominator $bd$ using equivalent
fractions (multiply top and bottom by $1$ in disguise): $\tfrac ab = \tfrac{ad}{bd}$ and
$\tfrac cd = \tfrac{cb}{bd}$, both legitimate since scaling by $\tfrac dd$ or $\tfrac bb$ preserves
value. Now they share the denominator $bd$, so the like-denominator case applies:
$$\frac ab \pm \frac cd = \frac{ad}{bd} \pm \frac{cb}{bd} = \frac{ad\pm cb}{bd}.$$
Choosing $\operatorname{lcm}(b,d)$ instead of $bd$ gives an equal result in smaller numbers, because
any common denominator names the same amount and reduces to the same lowest-terms fraction.
$\blacksquare$

### Worked Instance

The Hook: $\tfrac12 + \tfrac13$. The least common denominator is $6$; rename $\tfrac12 = \tfrac36$
and $\tfrac13 = \tfrac26$, then add numerators: $\tfrac36 + \tfrac26 = \tfrac56$. Six sixths make a
whole, and five of them is $\tfrac56$ — comfortably more than a half, as the picture demanded. And
the "straight across" case is just the special case $b=d$: $\tfrac15+\tfrac25 = \tfrac35$ needs no
renaming because the pieces already match. A subtraction: $\tfrac34-\tfrac16 = \tfrac{9}{12} -
\tfrac{2}{12} = \tfrac{7}{12}$.

### Pitfalls

- **Never add denominators.** $\tfrac12 + \tfrac13 \ne \tfrac{1+1}{2+3}=\tfrac25$. The denominator
  names piece-size and must be made *common*, not summed.
- **Rename both fractions, not one.** Both must reach the shared denominator before you touch the
  numerators.
- **Keep the common denominator on the answer.** Adding numerators over $bd$ gives $\tfrac{\cdots}{bd}$,
  not $\tfrac{\cdots}{2bd}$; the denominator does not add too.
- **Reduce at the end.** $\tfrac{2}{12}+\tfrac{2}{12}=\tfrac{4}{12}=\tfrac13$; leaving it unreduced is
  not wrong, but lowest terms is the expected form.

:::
:::

## Connections

Addition of fractions insists on equal pieces, so it leans on equivalent fractions (renaming to a
common denominator) and on the pooling meaning of addition. It underlies mixed numbers, decimal
addition (a common denominator that is a power of ten), and every later sum of rational quantities.
Recognition trigger: a "$+$" or "$-$" between fractions with different denominators demands a common
denominator first.

## History

Adding and subtracting fractions forced mathematicians to confront the common denominator, and different cultures met the challenge differently. The Egyptians' unit-fraction system made addition surprisingly laborious, requiring tables to express sums like $\tfrac23$ as combinations of distinct unit parts. Indian mathematicians — Brahmagupta (628 CE) and Bhāskara II (1150 CE) — gave the general rule of bringing fractions to a common denominator before combining numerators, essentially the method taught today. Transmitted through al-Khwārizmī and Fibonacci's *Liber Abaci* (1202), these rules became standard European practice. The modern justification, that $a/b$ and $c/d$ must be re-expressed over a shared denominator because only like parts can be pooled, is the fraction-level echo of addition-as-pooling. This mattered because closure under addition and subtraction, together with multiplication, is exactly what makes the rationals a ring and then a field.
