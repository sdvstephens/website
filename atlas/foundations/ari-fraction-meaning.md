Cut a pizza into $8$ equal slices and take $3$ of them. You could describe your share as "$3$
slices," or as "$3$ out of $8$," or as "$3$ pizzas shared among $8$ people." Somehow all three are
the *same* amount, $\tfrac38$. Why do "a piece of one thing" and "one thing split among many" land
on exactly the same number?

## Discovery

1. Draw a bar and cut it into $b$ equal pieces; shade one piece. That one shaded piece is a
   *unit fraction* $\tfrac1b$. In words, what makes $\tfrac1b$ the amount it is — what must be true
   of the $b$ pieces, and what happens if you lay $b$ of them side by side?
2. Now shade $a$ of those pieces (take $a=3$, $b=8$). Explain $\tfrac ab$ using only the unit piece
   from step $1$: how many copies of $\tfrac1b$ is it?
3. Separately, forget pieces and *share*: cut $3$ identical bars among $8$ people so everyone gets
   the same, and describe one person's total share as a single amount. Set your description beside
   your answer to step $2$. Are they the same amount, and why must they be?
4. Push on the denominator. What amount is $\tfrac b b$ (shade all the pieces)? What is $\tfrac 0 b$
   (shade none)? What is $\tfrac a1$? Read each straight off the picture.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The two meanings of a fraction, and why they agree.** For a whole number $a$ and a nonzero whole
number $b$, the fraction $\dfrac ab$ has two readings that name the *same* number:

- **Part of a whole:** split one unit into $b$ equal parts — each is the *unit fraction* $\tfrac1b$
  — and take $a$ of them. So $\dfrac ab = a\cdot\dfrac1b$, "$a$ copies of one $b$-th."
- **Division / equal sharing:** $\dfrac ab = a\div b$, the amount each person receives when $a$
  units are shared equally among $b$ people.

These agree: $\dfrac ab = a\div b = a\cdot\dfrac1b$. Special values fall straight out:
$\dfrac bb = 1$, $\dfrac 0b = 0$, $\dfrac a1 = a$, and $\dfrac 1b$ is the unit fraction itself.
The denominator $b$ names the *size* of the piece (how many make a whole); the numerator $a$ names
*how many* pieces you have.

### Proof

We show the part-of-a-whole reading and the sharing reading are the same number, i.e.
$a\cdot\tfrac1b = a\div b$, then read off the special values.

*The unit fraction, pinned down.* By construction $\tfrac1b$ is the amount with $b\cdot\tfrac1b = 1$
(laying $b$ equal pieces side by side rebuilds one whole). That single equation *defines* it: it is
the share one person gets from one unit split $b$ ways, so $\tfrac1b = 1\div b$.

*Stacking $a$ of them equals sharing $a$.* Give each of the $b$ people, from *each* of the $a$ units,
one $b$-th of that unit. Each person collects $a$ pieces of size $\tfrac1b$, a total of
$a\cdot\tfrac1b$. But the whole procedure shared all $a$ units equally among the $b$ people, so each
person's total is also $a\div b$. Same procedure, two tallies of one share:
$$a\cdot\tfrac1b = a\div b = \tfrac ab.$$

*Special values.* Taking all $b$ pieces gives $b\cdot\tfrac1b = 1$, so $\tfrac bb=1$; taking none
gives $\tfrac0b = 0\cdot\tfrac1b = 0$; and $\tfrac a1$ splits the unit into one piece (the whole),
$a$ of which is $a$. $\blacksquare$

### Worked Instance

The Hook's pizza: cut into $b=8$ equal slices, each slice is $\tfrac18$ of a pizza, and $a=3$ slices
is $3\cdot\tfrac18 = \tfrac38$ — the part-of-a-whole reading. Now share $3$ whole pizzas among $8$
people: hand everyone one-eighth of *each* pizza, so each person gets $3$ eighth-slices, again
$\tfrac38$ of a pizza — the sharing reading. "$3$ out of $8$ slices" and "$3$ pizzas split $8$ ways"
are the same number because they are the same handing-out of pieces, counted two ways.

### Pitfalls

- **The denominator is a piece-*size*, not a count of your pieces.** A bigger denominator makes each
  piece *smaller*: $\tfrac17 \lt \tfrac13$, even though $7 \gt 3$.
- **"$3$ out of $8$" needs equal pieces.** $\tfrac38$ only means what it says if the $8$ parts are the
  same size; unequal slices are not a fraction of the whole.
- **$\tfrac ab$ is already a single number.** It is not "a $3$ and an $8$" but one amount on the line;
  $a\div b$ has an answer even when $b\nmid a$.
- **$\tfrac bb = 1$, not $0$.** All the pieces together rebuild exactly one whole.

:::
:::

## Connections

The bedrock reading of every fraction: numerator counts, denominator sizes, and "$\tfrac ab = a\div
b$" is the bridge from splitting a whole to dividing integers. It underlies simplifying (renaming
the same amount), multiplying and adding fractions, decimals (denominators that are powers of ten),
ratios, and percents (denominator $100$). Recognition trigger: any "part of," "out of," "per," or
"shared equally" is a fraction waiting to be read both ways.

## History

The meaning of a fraction as "so many equal parts of a whole" is one of humanity's oldest quantitative ideas, arising wherever land, grain, or time had to be shared. Egyptian scribes worked almost exclusively with unit fractions, using a special notation (a mouth glyph over a numeral) for $1/n$, while the Babylonians handled parts in base $60$ — a legacy still visible in our minutes and seconds. The Greeks, wary of calling a part a "number," treated it as a *ratio* between whole magnitudes, a subtlety carefully developed by Eudoxus and recorded in Euclid. The horizontal fraction bar we use came from Arabic mathematicians such as al-Ḥaṣṣār (12th century) and reached Europe through Fibonacci. This everyday meaning mattered because it is the intuitive seed from which the entire formal theory of rational numbers, ratios, and proportion grows.
