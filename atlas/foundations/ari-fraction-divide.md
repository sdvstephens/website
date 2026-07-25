"How many quarter-cups fit in $2$ cups?" The answer, $8$, comes out if you *flip* the quarter and
multiply: $2\div\tfrac14 = 2\times 4 = 8$. Dividing by a small fraction makes the answer *bigger* —
the opposite of what "divide" usually feels like. Why does turning the divisor upside down give the
right count?

## Discovery

1. Recall that $\div b$ undoes $\times b$: the quotient $q=a\div b$ is the number with $q\cdot b = a$.
   State, in the same words, what $q=\tfrac ab\div\tfrac cd$ must satisfy — write the equation
   $q$ has to solve.
2. The number that multiplies $\tfrac cd$ back to $1$ is its *reciprocal* $\tfrac dc$ (check:
   $\tfrac cd\cdot\tfrac dc = 1$). Multiply *both sides* of your step-$1$ equation by $\tfrac dc$ and
   simplify the side that had $q$. What is $q$ now equal to?
3. Sanity-check with counting: how many $\tfrac14$-cups are in $2$ cups? Get the number by hand
   (picture eight quarter-cups), then see which of "$2\times 4$" and "$2\div 4$" reproduces it.
4. Test the edge: what is $\tfrac cd\div\tfrac cd$, and what is $\tfrac ab\div 1$? Do these match
   whatever rule step $2$ produced?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Division is multiplication by the reciprocal.** For fractions with $b,c,d\ne0$,
$$\frac ab\div\frac cd = \frac ab\cdot\frac dc = \frac{ad}{bc}.$$
To divide by a fraction, **flip it** (swap numerator and denominator — take its reciprocal) and
multiply. The divisor's numerator must be nonzero: dividing by $\tfrac0d=0$ is undefined. This is
why dividing by a proper fraction (less than $1$) *increases* the value: you are asking how many
small pieces fit, and small pieces are many.

### Proof

Let $q = \tfrac ab\div\tfrac cd$. By the meaning of division, $q$ is the number with
$$q\cdot\frac cd = \frac ab.$$
The reciprocal of $\tfrac cd$ is $\tfrac dc$, the number satisfying $\tfrac cd\cdot\tfrac dc = 1$
(indeed $\tfrac cd\cdot\tfrac dc = \tfrac{cd}{dc} = 1$ by the multiplication rule, needing $c\ne0$).
Multiply both sides of the boxed equation on the right by $\tfrac dc$:
$$q\cdot\frac cd\cdot\frac dc = \frac ab\cdot\frac dc \;\Longrightarrow\; q\cdot 1 = \frac ab\cdot\frac dc \;\Longrightarrow\; q = \frac ab\cdot\frac dc = \frac{ad}{bc}.$$
So the unique number that reverses multiplication by $\tfrac cd$ is $\tfrac ab\cdot\tfrac dc$.
Uniqueness is automatic: if $q_1\cdot\tfrac cd = q_2\cdot\tfrac cd$, multiplying by $\tfrac dc$ gives
$q_1=q_2$. Dividing by $0$ (i.e. $c=0$) is excluded because $0$ has no reciprocal. $\blacksquare$

### Worked Instance

The Hook: $2\div\tfrac14 = 2\cdot\tfrac41 = 8$ — flip the $\tfrac14$ to $\tfrac41$ and multiply. It
checks by counting: eight quarter-cups fill $2$ cups. A both-fractions case:
$\tfrac23\div\tfrac45 = \tfrac23\cdot\tfrac54 = \tfrac{10}{12} = \tfrac56$, cancelling the shared $2$
to land in lowest terms. And the edge cases behave: $\tfrac cd\div\tfrac cd = \tfrac cd\cdot\tfrac dc
= 1$, while $\tfrac ab\div 1 = \tfrac ab\cdot\tfrac11 = \tfrac ab$.

### Pitfalls

- **Flip the *divisor*, not the dividend.** In $\tfrac ab\div\tfrac cd$ the second fraction $\tfrac
  cd$ gets inverted; leaving $\tfrac ab$ alone. Flipping the wrong one is the classic slip.
- **You cannot divide by $0$.** $\tfrac0d$ has no reciprocal, so $\tfrac ab\div 0$ is undefined.
- **Dividing can make things bigger.** $6\div\tfrac13 = 18$; only dividing by something $\gt 1$
  shrinks. "Divide" does not always mean "smaller."
- **"Keep–change–flip" is a mnemonic, not a reason.** The reason is that $\tfrac dc$ undoes $\tfrac
  cd$; know the reciprocal argument so you can rebuild the rule if the chant fails you.

:::
:::

## Connections

Division of fractions reduces to multiplication once every nonzero number has a reciprocal — the
payoff of building $\QQ$. It rests on fraction multiplication and the meaning of division as an
inverse, and it appears whenever we ask "how many of these fit in that," convert repeating decimals,
solve proportions, or rearrange rates. Recognition trigger: a division sign in front of a fraction,
or a "how many ___ per ___" count, calls for flip-and-multiply.

## History

Dividing by a fraction via "invert and multiply" is a rule whose logic — division as multiplication by the reciprocal — was understood in India well over a thousand years ago. Bhāskara II's *Līlāvatī* (1150 CE) explicitly instructs the reader to invert the divisor and multiply, and Brahmagupta (628 CE) had already given rules for operating with fractions. The underlying idea traces to the Babylonian practice of dividing by multiplying with a tabulated reciprocal. These techniques flowed westward through Arabic mathematics and Fibonacci's *Liber Abaci* (1202) into European commercial arithmetic. The full conceptual justification — that $b$'s reciprocal $b^{-1}$ exists for every nonzero rational, so $a\div b = a\cdot b^{-1}$ — belongs to the field-theoretic view of $\QQ$ formalized in the nineteenth century. This mattered because it makes division a total operation on nonzero rationals, the hallmark of a field.
