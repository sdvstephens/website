It is $5$ degrees, then the temperature drops $8$. The thermometer answers without complaint —
three below zero — but $5-8$ has no answer *inside* the counting numbers. Reality kept going past
zero; our number system has to be extended to keep up. What is the smallest, most disciplined way
to add a "below zero" to $\NN$?

## Discovery

1. On a horizontal line, mark $0$ and step right for $1,2,3,\dots$ Adding "$+1$" is one step right.
   To *undo* a step right you step left. Give a name to the point one step left of $0$ — the point
   that, added to $1$, returns you to $0$.
2. For a fixed number $a$, what single requirement must its "opposite" satisfy so that combining
   the two lands you exactly on $0$? Write that requirement as an equation in $a$ and its opposite.
3. Suppose you agreed the familiar laws (commutativity, associativity, distribution) should keep
   holding for these new points. Consider $(-1)\cdot(-1)$. Use $(-1)\cdot\big(1+(-1)\big)=
   (-1)\cdot 0 = 0$ and distribute the left side. What is $(-1)\cdot(-1)$ *forced* to equal, if the
   laws survive?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For each number $a$ we adjoin an **additive inverse** (or **opposite**), written $-a$, defined by
the single requirement
$$a + (-a) = 0 = (-a) + a.$$
Geometrically $-a$ is the mirror image of $a$ across $0$ on the number line. Extending $\NN$ by all
these opposites produces the **integers** $\ZZ=\{\dots,-2,-1,0,1,2,\dots\}$. Demanding that
addition, commutativity, associativity, and distributivity persist *forces* the sign rules:
$$-0 = 0,\quad -(-a)=a,\quad (-a)b = -(ab) = a(-b),\quad (-a)(-b) = ab.$$
These are not conventions chosen for taste; they are the only values consistent with the laws.

### Proof

A construction must show the new object **exists**, is **unique**, and behaves as claimed.

*Existence and uniqueness of $-a$.* We *declare* a point $-a$ with $a+(-a)=0$ (mirror across $0$);
this is the construction. It is unique: if both $x$ and $y$ satisfy $a+x=0$ and $a+y=0$, then
$$x = x + 0 = x + (a + y) = (x + a) + y = 0 + y = y,$$
using $0$ as identity, the defining equation, and associativity. So "the" opposite is well-defined,
and $-(-a)=a$ because $a$ itself satisfies $(-a)+a=0$, the defining equation for the opposite of
$-a$.

*The sign rules are forced.* Assume the ring laws hold on $\ZZ$. First $(-a)b = -(ab)$: add it to
$ab$ and use distribution,
$$ab + (-a)b = \big(a + (-a)\big)b = 0\cdot b = 0,$$
so $(-a)b$ is *the* additive inverse of $ab$, i.e. $(-a)b = -(ab)$; symmetrically $a(-b)=-(ab)$.
Then $0\cdot b=0$ itself is forced: $0\cdot b=(0+0)b=0\cdot b+0\cdot b$, and cancelling one copy
(add its inverse) gives $0\cdot b=0$. Finally $(-a)(-b)=ab$:
$$(-a)(-b) = -\big(a(-b)\big) = -\big(-(ab)\big) = ab,$$
each step a previously forced rule. Thus, granting the laws, no other sign values are possible.
$\blacksquare$

### Worked Instance

The thermometer: $5$ degrees then a drop of $8$. The drop adds $-8$; since $5+(-8)$ must land $3$
steps left of $0$, the reading is $-3$. And the notorious "$negative\times negative=positive$":
with $a=b=1$, the forced rule gives $(-1)(-1)=1\cdot1=1$ — visible in the Discovery, since
$(-1)(1+(-1))=0$ expands to $(-1)(1)+(-1)(-1)= -1 + (-1)(-1)$, which can equal $0$ only if
$(-1)(-1)=1$. Two debts of magnitude do not cancel a *quantity*, but the *product* is pinned by
distributivity, not by a story.

### Pitfalls

- **"$-a$" is not "negative"; it is "the opposite of $a$."** If $a=-3$ then $-a=3$, a positive
  number. The minus means *reflect across $0$*, whichever side $a$ is on.
- **Sign rules are theorems, not decrees.** $(-)(-)=+$ is *forced* by keeping the distributive
  law; "two negatives make a positive" as a slogan hides the actual reason.
- **$0$ is its own opposite** ($-0=0$) and is neither positive nor negative.
- **Do not conflate the sign with subtraction yet.** "$-a$" is a *number* (the inverse); the
  *operation* $b-a$ is built on it in the next node.

:::
:::

## Connections

The construction that breaks $\NN$'s floor at $0$: adjoining additive inverses turns the counting
numbers into $\ZZ$, and packages the number line as a two-sided ruler. It is the prerequisite for
subtraction (adding the opposite) and for the integers as a ring; the forced sign rules echo
forward into negative exponents and everywhere signs must be tracked. Recognition trigger: any
"below zero," "debt," "opposite direction," or "undo an addition" summons the additive inverse.

## History

Negative quantities were long regarded with deep suspicion in the West even as they were used freely in the East. Chinese mathematicians represented negatives with black counting rods in the *Nine Chapters* (c. 200 BCE), and the Indian mathematician Brahmagupta (628 CE) gave the first systematic rules for "debts" (negatives) and "fortunes" (positives), including the sign laws. European mathematicians resisted for a millennium: Diophantus called negative solutions "absurd," and as late as the sixteenth and seventeenth centuries figures like Cardano and even Descartes labeled them "false" or "fictitious" roots. Full acceptance came only in the eighteenth and nineteenth centuries, when John Wallis, Leonhard Euler, and finally Hermann Hankel (1867) — who argued that a number system should be defined by its formal laws — placed negation on firm ground as the additive inverse. This mattered because it turned the natural numbers into the group $\ZZ$, making subtraction always possible and completing arithmetic into a genuine algebraic structure.
