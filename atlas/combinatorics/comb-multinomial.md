The word $\text{MISSISSIPPI}$ has $11$ letters, yet it has far fewer than $11!$ distinct
rearrangements — the four $\text{S}$'s look identical, so swapping two of them changes nothing.
The right count is $34{,}650$. Where do all the missing arrangements go?

## Discovery

1. Pretend for a moment that the letters are all distinguishable — tag them
   $\text{S}_1,\text{S}_2,\dots$ so every one of the $11$ is unique. How many arrangements of
   these tagged letters are there?
2. Take one *real* word, say the true $\text{MISSISSIPPI}$. How many of the tagged arrangements
   from (1) collapse onto this single real word? (Count the independent reshuffles of the
   identical $\text{S}$'s among themselves, the $\text{I}$'s among themselves, and the $\text{P}$'s.)
3. Every real word is hit by the same number of tagged arrangements you found in (2). Convert the
   tagged count into the count of *distinct* real words. Which operation removes the overcount?
4. Now an algebraic mirror. In $(x+y+z)^n$, a term $x^{a}y^{b}z^{c}$ (with $a+b+c=n$) comes from
   choosing, factor by factor, which letter to contribute. How many of the $3^n$ choice-strings
   yield that specific term? Relate this to your arrangement count.
5. Generalize: for objects of $t$ types with multiplicities $k_1,\dots,k_t$ (summing to $n$),
   write the number of distinct arrangements, and the coefficient of $x_1^{k_1}\cdots x_t^{k_t}$
   in $(x_1+\dots+x_t)^n$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For nonnegative integers $k_1,\dots,k_t$ with $k_1+\dots+k_t = n$, the **multinomial coefficient**
$$\binom{n}{k_1,k_2,\dots,k_t} = \frac{n!}{k_1!\,k_2!\cdots k_t!}$$
counts the arrangements of $n$ objects of which $k_1$ are of type $1$, $k_2$ of type $2$, and so
on. The **multinomial theorem** states
$$(x_1 + x_2 + \dots + x_t)^n = \sum_{k_1+\dots+k_t = n} \binom{n}{k_1,\dots,k_t}\, x_1^{k_1}\cdots x_t^{k_t}.$$
When $t=2$ this is exactly the binomial coefficient and the binomial theorem, since
$\binom{n}{k,\,n-k}=\binom{n}{k}$.

### Proof

**Arrangement count.** First tag all $n$ objects as distinct; there are $n!$ arrangements. Now
untag. Two tagged arrangements give the *same* real arrangement precisely when they differ only by
permuting objects within a type. The type-$i$ objects can be permuted among themselves in $k_i!$
ways, and these permutations act independently across types, so by the multiplication principle
each real arrangement corresponds to exactly $k_1!\,k_2!\cdots k_t!$ tagged ones. Hence the number
of distinct real arrangements is $\dfrac{n!}{k_1!\cdots k_t!}$.

**Multinomial theorem.** Expand $(x_1+\dots+x_t)^n=\prod_{i=1}^n(x_1+\dots+x_t)$ by choosing one
$x_j$ from each of the $n$ factors and multiplying. A choice-string yields the monomial
$x_1^{k_1}\cdots x_t^{k_t}$ iff it picks $x_1$ from exactly $k_1$ factors, $x_2$ from $k_2$, etc.
The number of such choice-strings is the number of arrangements of the multiset with
multiplicities $k_1,\dots,k_t$, namely $\binom{n}{k_1,\dots,k_t}$. Summing over all compositions
$k_1+\dots+k_t=n$ gives the stated expansion. $\blacksquare$

### Worked Instance

$\text{MISSISSIPPI}$: $n=11$ with $\text{M}{:}1$, $\text{I}{:}4$, $\text{S}{:}4$, $\text{P}{:}2$.
$$\binom{11}{1,4,4,2} = \frac{11!}{1!\,4!\,4!\,2!} = \frac{39{,}916{,}800}{1\cdot 24\cdot 24\cdot 2}
= \frac{39{,}916{,}800}{1{,}152} = 34{,}650,$$
resolving the Hook: the $11!$ tagged words collapse in groups of $4!\cdot 4!\cdot 2! = 1{,}152$.

### Pitfalls

- The bottom entries must **sum to the top**: $\sum k_i = n$. If they don't, the symbol is
  meaningless.
- Divide by a factorial for **every** repeated type, including ones you might forget (the two
  $\text{P}$'s here). Missing one inflates the answer.
- A single letter appearing once still contributes $1! = 1$ and is harmless, but leaving out a
  whole type breaks the sum-to-$n$ condition.
- The number of *terms* in the expansion of $(x_1+\dots+x_t)^n$ is the number of compositions
  $k_1+\dots+k_t=n$, not the multinomial coefficient itself — a different count (stars and bars).

:::
:::

## Connections

Prereqs: the binomial theorem (`comb-binomial-pascal`), which is the two-type special case — this
node is the direct generalization to $t$ types. The tagging-then-dividing argument (overcount by a
symmetry, then divide it out) is a workhorse that also drives Burnside-style orbit counting
(`comb-burnside`). Recognition trigger: "arrange these letters/beads with repeats" or "coefficient
in a power of a sum of three or more terms."
