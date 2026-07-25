Powers of $2$ climbing up read $\dots,8,16,32$; each step *doubles*. Walk the staircase the other
way — $32,16,8,4,2,1$ — and each step *halves*. Nothing stops you at $1$: the next step down is
$\tfrac12$, then $\tfrac14$. If those steps are still powers of $2$, what exponent could possibly
sit below $2^0$?

## Discovery

1. Continue the halving staircase past $2^0=1$: write the next three values going down. Beside each,
   note the exponent you'd expect if the exponents keep decreasing by $1$: $2, 1, 0, ?, ?, ?$.
2. Use a law, not just the pattern. The rule $a^m a^n=a^{m+n}$ should survive negative exponents.
   Take $a^n\cdot a^{-n}$ and add the exponents. What power of $a$ do you get, and (recalling the
   zero exponent) what plain number is that?
3. Step $2$ says $a^n\cdot a^{-n}$ equals a specific number. What is the name for a number whose
   product with $a^n$ gives that value? Write $a^{-n}$ as such an object. What must be assumed about
   $a$ for it to exist?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a **nonzero** number $a$ and a natural number $n$,
$$a^{-n} = \frac{1}{a^n} = \big(a^{n}\big)^{-1}.$$
A negative exponent means "the reciprocal of the corresponding positive power." Like $a^0=1$, this
is **forced**, not chosen: requiring the law $a^m a^n = a^{m+n}$ to hold for negative exponents
leaves no other option. With this, powers are defined for *every* integer exponent, and all three
exponent laws extend unchanged to $m,n\in\ZZ$. The base must be nonzero, since $a^{-n}$ involves
$1/a^n$ and $0$ has no reciprocal.

### Proof

We show $a^{-n}=1/a^n$ is the unique law-preserving value, and that it requires $a\ne0$.

*Forcing the value.* Suppose we want $a^m a^n = a^{m+n}$ to hold for the exponents $n$ and $-n$.
Then
$$a^n\cdot a^{-n} = a^{\,n+(-n)} = a^0 = 1,$$
using the zero-exponent result $a^0=1$ (valid since $a\ne0$). So $a^{-n}$ is a number whose product
with $a^n$ is $1$ — precisely the *reciprocal* of $a^n$. Because $a\ne0$, the power $a^n$ is
nonzero and has a unique reciprocal (reciprocal node), so
$$a^{-n} = \frac{1}{a^n}.$$
Uniqueness of the reciprocal makes this the only possible value; any other choice breaks
$a^n a^{-n}=1$ and hence Law 1.

*Necessity of $a\ne0$.* The value is $1/a^n$; if $a=0$ then $a^n=0$ for $n\ge1$, which has no
reciprocal, so $0^{-n}$ is undefined — the same obstruction that bans division by $0$.

*Laws persist over $\ZZ$.* With $a^{-n}:=1/a^n$, Law 1 now holds for all integer exponents: for any
integers $p,q$ write each power as a positive power or its reciprocal, and $a^p a^q = a^{p+q}$
reduces to the positive-exponent law together with $\tfrac1{a^r}\cdot a^r=1$. The same reduction
verifies $(a^p)^q=a^{pq}$ and $(ab)^p=a^p b^p$ for integer exponents. $\blacksquare$

### Worked Instance

The staircase: below $2^0=1$ come $2^{-1}=\tfrac1{2^1}=\tfrac12$, then $2^{-2}=\tfrac1{2^2}=\tfrac14$,
then $2^{-3}=\tfrac18$ — exactly the halving continued, with exponents $-1,-2,-3$. Forced by the
law: $2^3\cdot 2^{-3}=2^{3+(-3)}=2^0=1$, and the only number times $8$ giving $1$ is $\tfrac18$, so
$2^{-3}=\tfrac18$. And negative exponents make division into subtraction of exponents:
$\dfrac{2^5}{2^2}=2^5\cdot 2^{-2}=2^{5-2}=2^3=8$.

### Pitfalls

- **A negative exponent does not make the value negative.** $2^{-3}=\tfrac18\gt0$; the minus sign
  means *reciprocal*, not *opposite*. Contrast $-2^{3}=-8$.
- **Only the base with the exponent is reciprocated.** $3\cdot2^{-2}=3\cdot\tfrac14=\tfrac34$, not
  $\tfrac1{3\cdot4}$; the $3$ is not under the power.
- **Base must be nonzero.** $0^{-n}$ is undefined because $0^n=0$ has no reciprocal — the
  division-by-zero wall again.
- **$a^{-n}=1/a^n$, and $(1/a)^n = a^{-n}$ too**, but $a^{-n}\ne (-a)^n$ and $a^{-n}\ne -a^n$;
  keep the "reciprocal" meaning separate from any sign on the base.

:::
:::

## Connections

The final extension of exponents, resting on the exponent laws (which force the value) and on the
reciprocal (which supplies it). Together with the zero exponent it makes $a^n$ meaningful for every
integer $n$, unifying multiplication and division of powers into addition and subtraction of
exponents; this is the gateway to scientific notation, rational exponents, and logarithms.
Recognition trigger: any reciprocal of a power, any rate with a power in the denominator, or any
quotient of like bases is a negative exponent in waiting.

## History

Negative exponents, like the zero exponent, were introduced to keep the law $x^m x^n = x^{m+n}$ unbroken, so that $x^{-n}$ must mean $1/x^n$. The remarkably forward-looking Nicolas Chuquet used negative exponents in his *Triparty* (1484), centuries before they were widely accepted. John Wallis, in his *Arithmetica Infinitorum* (1656), gave an influential treatment of negative and fractional indices, and Isaac Newton's work on the binomial series (c. 1665) used negative and fractional exponents freely and fruitfully. Euler's eighteenth-century texts finally made $x^{-n}=1/x^n$ standard and rigorous. The driving motive throughout was the same principle of permanence: extend the meaning of the symbol so the old rules survive. This mattered because negative exponents unified multiplication and division under a single exponential arithmetic and made possible the compact language of scientific notation and Laurent series.
