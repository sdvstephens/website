Share $12$ cookies equally among $3$ friends: $4$ each. Now share them among $0$ friends — and the
question curdles. Every child senses "you can't divide by zero," but usually as a taboo. What is
division *actually*, such that dividing by $0$ isn't forbidden so much as *impossible*?

## Discovery

1. "Share $12$ among $3$" asks: how many go to each so that $3$ groups of that amount rebuild the
   $12$? Write the equation the unknown share $x$ must satisfy, using multiplication.
2. Solve that equation by undoing the "$\times 3$": multiply both sides by the reciprocal of $3$.
   What do you get for $x$, and how does it compare to "$12$ times $\tfrac13$"?
3. Replace $3$ by $0$: the share $x$ would need $0\cdot x = 12$. Recall what $0\cdot x$ always is.
   Is there *any* $x$? Now try $0\cdot x = 0$ instead — how many solutions now? What has gone wrong
   with "the answer" in each case?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a **nonzero** divisor $b$, the **quotient** $a\div b$ (also $\tfrac ab$) is defined as $a$
times the reciprocal of $b$:
$$a \div b := a\cdot\frac1b, \qquad b\ne 0.$$
Equivalently, $a\div b$ is *the* number $x$ with $bx = a$. **Division by $0$ is undefined**: with
$b=0$ the equation $0\cdot x = a$ has *no* solution when $a\ne0$ (nothing times $0$ is nonzero) and
*infinitely many* solutions when $a=0$ (every $x$ works). Either way no single quotient exists, so
$\tfrac a0$ names nothing.

### Proof

As a concept, we show the definition **solves the intended equation uniquely** for $b\ne0$ and
**cannot** for $b=0$.

*Nonzero divisor: existence and uniqueness.* Let $b\ne0$, so $\tfrac1b$ exists (reciprocal node).
Set $x = a\cdot\tfrac1b$. Then
$$bx = b\Big(a\cdot\tfrac1b\Big) = a\Big(b\cdot\tfrac1b\Big) = a\cdot 1 = a,$$
using commutativity and associativity, so $x$ solves $bx=a$. It is the only solution: if
$bx=a=by$, multiply both sides by $\tfrac1b$ to get $x=y$. Hence $a\div b$ is a single, definite
number.

*Zero divisor: no valid quotient.* Suppose $b=0$. Any candidate $x$ must satisfy $0\cdot x=a$. But
$0\cdot x=0$ for every $x$ (absorption). If $a\ne0$ this demands $0=a$, impossible — *no* $x$
works. If $a=0$ it demands $0=0$, true for *every* $x$ — so no *unique* $x$ is singled out. A
quotient must be one specific number; neither case yields one, so $\tfrac a0$ is undefined. (The
failure is exactly that $0$ has no reciprocal, so "$a\cdot\tfrac10$" has no meaning to begin with.)
$\blacksquare$

### Worked Instance

The Hook: $12\div 3 = 12\cdot\tfrac13 = 4$, and indeed $3\cdot4=12$ rebuilds the pile — four
cookies each. Now $12\div0$: we need $0\cdot x = 12$, but $0\cdot x=0\ne12$ for every $x$, so there
is no share at all. And $0\div0$: we need $0\cdot x=0$, which *every* $x$ satisfies — $x=1$? $x=7$?
$x=-3$? — so no answer is preferred over another. "You can't divide by zero" is not a rule imposed
from outside; it is that the defining equation has zero solutions or too many.

### Pitfalls

- **Two different failures at $0$.** $\tfrac{a}{0}$ with $a\ne0$ has *no* solution; $\tfrac00$ has
  *infinitely many*. Both are undefined, for opposite reasons — neither is "$0$" or "$\infty$."
- **Division is not commutative or associative.** $12\div3\ne3\div12$; it is disguised
  multiplication by a *reciprocal*, which sits on one operand only — exactly like subtraction and
  the opposite.
- **Dividing by $b$ = multiplying by $\tfrac1b$, not by $b$.** The reciprocal, not the number
  itself, is the tool; "$a\div b = a\cdot b$" is a classic slip.
- **Remainders are a different story.** $13\div 4$ as an *integer-with-remainder* ($3$ r $1$) is a
  separate notion from the exact quotient $13\cdot\tfrac14$; keep the two apart.

:::
:::

## Connections

The fourth arithmetic operation, and like subtraction it is not primitive: division is
multiplication by the reciprocal, so it rests on multiplication and the multiplicative inverse.
Its refusal at $0$ traces straight back to $0$ having no reciprocal. Allowing all such quotients of
integers builds the rationals $\QQ$. Recognition trigger: any "share equally," "how many per,"
"rate," or "solve $bx=a$" is division — and any $0$ in the divisor is a red flag.

## History

Division is the oldest of the four operations to cause real difficulty, and its history is largely the history of algorithms for taming it. The Egyptians divided by reversing their doubling method, the Babylonians divided by multiplying by tabulated reciprocals, and Greek geometry treated division as finding a fourth proportional. The messy long-division layout familiar today evolved from the "galley" or "scratch" methods of medieval Islamic and Italian arithmetic and was refined during the Renaissance spread of Hindu–Arabic numerals. Euclid's *Elements* (c. 300 BCE) also gave the crucial *division with remainder*, the basis of the Euclidean algorithm for greatest common divisors. Conceptually, the modern view that $a\div b$ means $a\times b^{-1}$ — division as multiplication by the reciprocal — belongs to the nineteenth-century field-theoretic understanding of number. This mattered because clarifying when division is possible (never by zero) exposed the exact boundary between rings and fields.
