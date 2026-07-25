Adding $5$ can be undone by adding its opposite. Can *multiplying* by $5$ be undone the same way —
by multiplying by some partner that snaps you back to where you started? For $5$ there is such a
partner. For one number, and one number only, no partner can possibly exist. Which number is the
outcast, and why is its failure unavoidable?

## Discovery

1. Multiplying by $a$ scales the number line by $a$. To *undo* that scaling you multiply by a
   partner that lands the product back on the identity $1$. For $a=5$: what number times $5$
   gives $1$? Give it as a fraction and check the product.
2. Write the one requirement the partner of a general $a$ must satisfy. State it as an equation in
   $a$ and its partner.
3. Now put $a=0$ into that requirement: you need a number $x$ with $0\cdot x = 1$. Recall what
   $0\cdot x$ always equals (the absorbing role of $0$). Can the requirement ever be met? What does
   that force about $0$'s partner?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **reciprocal** (or **multiplicative inverse**) of a nonzero number $a$ is the number, written
$\tfrac1a$ or $a^{-1}$, satisfying
$$a\cdot \frac1a = 1 = \frac1a\cdot a.$$
It is the partner that undoes "multiply by $a$." Every number *except $0$* has exactly one
reciprocal. **Zero has none**: because $0\cdot x = 0$ for every $x$, the equation $0\cdot x = 1$ is
impossible (it would force $0=1$). This single fact is the reason division by $0$ is undefined.

### Proof

As a concept, we establish **uniqueness**, the **impossibility for $0$**, and one structural
consequence.

*Uniqueness.* Suppose $a\ne 0$ has two reciprocals $x,y$, so $ax=1$ and $ay=1$. Then
$$x = x\cdot 1 = x(ay) = (xa)y = 1\cdot y = y,$$
using the identity $1$, associativity, and commutativity ($xa=ax=1$). So a reciprocal, when it
exists, is unique — justifying the notation "$\tfrac1a$."

*Zero is excluded, necessarily.* For every $x$, $0\cdot x = 0$ (the absorbing property:
$0\cdot x=(0+0)x=0\cdot x+0\cdot x$, and cancelling gives $0\cdot x=0$). If $0$ had a reciprocal $x$
we would need $0\cdot x = 1$, hence $0 = 1$. But $0\ne 1$ (the additive and multiplicative
identities are distinct). Contradiction; so no such $x$ exists.

*Reciprocal of a product.* When $a,b\ne0$, the number $\tfrac1a\cdot\tfrac1b$ is the reciprocal of
$ab$, since $(ab)\big(\tfrac1a\tfrac1b\big) = \big(a\tfrac1a\big)\big(b\tfrac1b\big) = 1\cdot1 = 1$
by commutativity and associativity. Hence $\tfrac1{ab}=\tfrac1a\cdot\tfrac1b$, and $ab\ne0$
whenever $a,b\ne0$. $\blacksquare$

### Worked Instance

The partner of $5$ is $\tfrac15$: indeed $5\cdot\tfrac15 = 1$, so multiplying by $5$ and then by
$\tfrac15$ returns any number unchanged. The reciprocal of $\tfrac23$ is $\tfrac32$ (flip it):
$\tfrac23\cdot\tfrac32 = \tfrac{6}{6}=1$. And the outcast: no number times $0$ can be $1$, because
$0$ times *anything* is $0$ — so $0$ alone has no reciprocal, which is exactly why "$\tfrac10$" is
forbidden.

### Pitfalls

- **Only $0$ is excluded — for a reason, not by fiat.** The ban follows from $0\cdot x=0$; it is
  not an arbitrary rule to memorize.
- **Reciprocal (multiplicative) vs. opposite (additive).** The opposite of $a$ is $-a$ (partner
  under $+$, target $0$); the reciprocal is $\tfrac1a$ (partner under $\times$, target $1$). Do not
  swap them.
- **Reciprocals of integers are usually not integers.** $\tfrac15\notin\ZZ$; that reciprocals live
  *outside* $\ZZ$ is what forces the rationals.
- **"Flip the fraction" is the shortcut, not the definition.** $\tfrac1{a/b}=\tfrac ba$ is *derived*
  from $a\cdot\tfrac1a=1$; the defining property is the product equalling $1$.

:::
:::

## Connections

The multiplicative mirror of the additive inverse, built on multiplication and its identity $1$.
It is the engine of division (dividing is multiplying by the reciprocal) and the precise reason
$0$ cannot be a divisor; adjoining reciprocals of nonzero integers is what creates the rationals
$\QQ$ and upgrades a ring to a field. It also names the negative-exponent notation $a^{-1}$.
Recognition trigger: any "undo a scaling," "per unit," "flip the fraction," or "solve $ax=b$" calls
for a reciprocal.

## History

The idea of a reciprocal — the number that multiplies with a given one to give $1$ — is ancient, born from the Egyptian obsession with unit fractions such as $\tfrac13$ and $\tfrac15$, recorded in the Rhind papyrus (c. 1650 BCE). The Babylonians (c. 1800 BCE) built extensive tables of reciprocals to convert division into multiplication in their base-$60$ system, the first systematic use of $1/n$ as a computational tool. Greek mathematicians treated reciprocals within the theory of ratios and proportions in Euclid's *Elements*. The abstract recognition that every nonzero number has a multiplicative inverse — the defining property of a field — came with nineteenth-century algebra, through the work of figures like Dedekind and Weber in their theory of fields. This mattered because the reciprocal is exactly what upgrades a ring to a field, turning division into a total operation on the nonzero numbers.
