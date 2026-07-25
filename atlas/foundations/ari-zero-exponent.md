"$a^0 = 1$." Most people learn it as a rule to memorize, right next to "and $0^0$ is weird." But
$a^0$ has zero factors of $a$ — multiplying *nothing* — so why should the answer be $1$ rather
than $0$, or undefined? It turns out you don't get to choose: the exponent laws decide for you.

## Discovery

1. Look at the pattern $a^3, a^2, a^1$ for, say, $a=2$: $8, 4, 2$. Each step *down* in the exponent
   does what to the value? State the operation, then apply it once more to predict the value at
   exponent $0$.
2. Now use a law instead of a pattern. The rule $a^m a^n = a^{m+n}$ should hold even when one
   exponent is $0$. Put $m$ arbitrary and $n=0$: write what the law says $a^m\cdot a^0$ must equal,
   as a power of $a$.
3. From step $2$ you have $a^m\cdot a^0 = a^m$ for a nonzero $a$. Treating $a^0$ as the unknown,
   what number must it be for this to hold? (What number leaves $a^m$ unchanged under
   multiplication?) Now ask separately: in step $2$ with $a=0$, is $a^m$ available to "cancel"?
   What goes wrong?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For every **nonzero** number $a$,
$$a^0 = 1.$$
This is not a convention adopted for convenience; it is **forced** by requiring the law
$a^m a^n = a^{m+n}$ to keep holding when an exponent is $0$. The symbol $0^0$ is left **undefined**
(or context-dependent), because the forcing argument divides by $a^m$, which is unavailable when
$a=0$; there the additive-identity role of $0$ and the empty-product role collide.

### Proof

We show $a^0=1$ is the *only* value consistent with the exponent laws, and why $0^0$ escapes the
argument.

*Forcing $a^0=1$ for $a\ne0$.* By Law 1 of exponents, with any exponent $m$ and second exponent
$0$,
$$a^m\cdot a^0 = a^{m+0} = a^m.$$
So $a^0$ is a number that leaves $a^m$ unchanged under multiplication. Since $a\ne0$, the power
$a^m$ is nonzero and has a reciprocal; multiplying both sides of $a^m\cdot a^0 = a^m$ by
$\tfrac1{a^m}$ gives
$$a^0 = a^m\cdot\frac1{a^m} = 1.$$
No other value is possible: any $x\ne1$ would give $a^m x\ne a^m$. This also matches the
"empty product" reading — multiplying zero factors of $a$ returns the multiplicative identity — and
the downward pattern $\dots,a^2,a^1,a^0$ divides by $a$ each step, landing on $a^1/a = 1$.

*Why $0^0$ is excluded.* Repeat the argument with $a=0$: it needs $0^m\cdot 0^0 = 0^m$, but for
$m\ge1$ we have $0^m = 0$, so the equation reads $0\cdot 0^0 = 0$, satisfied by *every* value of
$0^0$ — the law pins nothing down. Meanwhile the empty-product reading suggests $0^0=1$ while
"$0$ to any positive power is $0$" suggests $0^0=0$; the two intuitions disagree and the laws do
not adjudicate. Hence $0^0$ is left undefined here. (The tension is genuine only at the single
point $a=0$; for every nonzero base the value is unambiguously $1$.) $\blacksquare$

### Worked Instance

$7^0 = 1$: forced because $7^3\cdot 7^0 = 7^{3+0} = 7^3 = 343$, and the only number with
$343\cdot 7^0 = 343$ is $7^0 = 1$. The pattern agrees: $7^2=49,\ 7^1=7,\ 7^0 = 7/7 = 1$, each step
dividing by $7$. But $0^0$ resists: $0^2\cdot 0^0 = 0^2$ reads $0\cdot0^0 = 0$, true whatever
$0^0$ is — the machinery that fixed $7^0$ has nothing to grip, so $0^0$ stays undefined.

### Pitfalls

- **$a^0=1$, not $0$.** "No factors" returns the multiplicative identity $1$ (like an empty
  product), not the additive identity $0$.
- **It is derived, not decreed.** The justification is the exponent law $a^m a^n=a^{m+n}$; quoting
  "anything to the zero is one" without the reason misses that $0^0$ is the sole exception.
- **$0^0$ is not $1$ "by the same rule."** The forcing step needs to cancel $a^m$, impossible when
  $a=0$; so $0^0$ is a separate, genuinely undefined (or convention-dependent) case.
- **Don't confuse $a^0$ with $0^a$.** $0^a = 0$ for $a\ge1$, whereas $a^0 = 1$ for $a\ne0$; the
  base and exponent play very different roles.

:::
:::

## Connections

A direct consequence of the exponent laws: extending "$a^m a^n=a^{m+n}$" to a zero exponent leaves
exactly one choice, $a^0=1$, illustrating the recurring principle that good definitions are
*forced* by the laws they must obey. The same reasoning, pushed one step further, fixes negative
exponents. Recognition trigger: any power with exponent $0$ collapses to $1$ (nonzero base); any
$0^0$ demands you flag the ambiguity.

## History

Defining $x^0=1$ was not an observation about the world but a deliberate *choice* made to preserve the exponent laws, and it took mathematicians centuries to embrace it. Nicolas Chuquet's *Triparty* (1484) already used a zero exponent, treating a constant term as "the number to the zeroth degree," well ahead of his contemporaries. The convention became standard as algebraic notation matured through Stevin, Descartes, and especially the eighteenth-century work of Euler, who articulated clearly that $x^0=1$ is forced by the requirement $x^m\div x^m = x^{m-m}=x^0$. The motivation was internal consistency: mathematicians wanted a single set of rules valid for all exponents rather than a patchwork of special cases. This mattered because it exemplifies a recurring and powerful move in mathematics — extending a definition by demanding that established laws keep holding — the same reasoning that later legitimized negative and fractional exponents.
