$2^3\cdot 2^4$. You could compute $8\cdot16=128$, or you could notice $128 = 2^7$ and that
$7 = 3+4$. The exponents just *added*. Multiplying the powers turned into adding their exponents —
a currency exchange between two operations. Why does this conversion always work, and how far does
it go?

## Discovery

1. Write $a^3$ as an explicit product of $a$'s, and $a^4$ likewise. Now multiply the two strings
   together into one long product and count how many $a$'s appear. Express that count in terms of
   $3$ and $4$.
2. Take $(a^2)^3$: three copies of $a^2$ multiplied. Write it out fully and count the $a$'s. What
   arithmetic on $2$ and $3$ produces that count?
3. Take $(ab)^3$ and write it as three copies of $(ab)$. Using that you may reorder and regroup a
   product freely, gather all the $a$'s together and all the $b$'s together. What two powers do you
   end up multiplying?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Laws of exponents.** For a number $a$ (and $b$) and natural exponents $m,n$:
$$a^m\,a^n = a^{m+n},\qquad (a^m)^n = a^{mn},\qquad (ab)^n = a^n\,b^n.$$
In words: multiplying powers of the same base *adds* exponents; a power of a power *multiplies*
exponents; a power of a product distributes over the factors. Each is a bookkeeping identity about
*how many factors* appear, and each is proved by induction from the recursion $a^{k+1}=a^k\cdot a$.

### Proof

Fix $a$ (and $b$); induct on the *second* exponent, using $a^0=1$ and $a^{k+1}=a^k\cdot a$.

*Law 1: $a^m a^n = a^{m+n}$.* Induct on $n$. Base $n=0$: $a^m a^0 = a^m\cdot1 = a^m = a^{m+0}$.
Step: assume $a^m a^n = a^{m+n}$. Then
$$a^m a^{n+1} = a^m\big(a^n\cdot a\big) = \big(a^m a^n\big)a = a^{m+n}\cdot a = a^{(m+n)+1}
= a^{m+(n+1)},$$
using associativity, the recursion, the hypothesis, the recursion again, and associativity of $+$.
By induction it holds for all $n$.

*Law 2: $(a^m)^n = a^{mn}$.* Induct on $n$. Base $n=0$: $(a^m)^0 = 1 = a^0 = a^{m\cdot0}$. Step:
assume $(a^m)^n = a^{mn}$. Then, applying the recursion to the base $a^m$ and then Law 1,
$$(a^m)^{n+1} = (a^m)^n\cdot a^m = a^{mn}\cdot a^m = a^{mn + m} = a^{m(n+1)},$$
the last step by distributivity $mn+m = m(n+1)$. By induction it holds for all $n$.

*Law 3: $(ab)^n = a^n b^n$.* Induct on $n$. Base $n=0$: $(ab)^0 = 1 = 1\cdot1 = a^0 b^0$. Step:
assume $(ab)^n = a^n b^n$. Then, using commutativity and associativity to regroup,
$$(ab)^{n+1} = (ab)^n\,(ab) = \big(a^n b^n\big)(ab) = \big(a^n a\big)\big(b^n b\big) = a^{n+1}
b^{n+1}.$$
By induction it holds for all $n$. $\blacksquare$

*(Alternative: each law is immediate by "counting factors" — $a^m a^n$ is $m$ then $n$ copies of
$a$, i.e. $m+n$ copies — but induction is what makes "and so on" rigorous, which is why
$\mathrm{prim\text{-}induction}$ is invoked.)*

### Worked Instance

The Hook: $2^3\cdot2^4 = 2^{3+4} = 2^7 = 128$, matching $8\cdot16$. A power of a power:
$(5^2)^3 = 5^{2\cdot3} = 5^6 = 15625$ — six fives, whether you triple the pair or count directly.
A power of a product: $(2\cdot3)^4 = 2^4\cdot3^4 = 16\cdot81 = 1296 = 6^4$. Each law converts a
harder computation into exponent arithmetic — add, multiply, or split — which is why they are the
daily workhorses of algebra.

### Pitfalls

- **Same base to add exponents.** $a^m a^n = a^{m+n}$ needs a *common* base; $2^3\cdot3^4$ does
  *not* simplify to a single power.
- **$(a^m)^n = a^{mn}$, not $a^{m+n}$.** A power of a power multiplies; a product of powers adds.
  Swapping these is the most common exam error. And $(a^m)^n=(a^n)^m$, since $mn=nm$.
- **$(ab)^n = a^n b^n$, but $(a+b)^n \ne a^n + b^n$.** Powers distribute over *products*, never over
  sums; $(2+3)^2 = 25\ne 4+9$.
- **Exponents add/multiply; the base is untouched.** $2^3\cdot2^4$ is $2^7$, not $4^7$ — do not
  also combine the bases.

:::
:::

## Connections

The algebra of powers, resting on the recursive definition of $a^n$ and on induction (the tool
that certifies "for all $n$"). These laws are exactly what *force* the definitions of $a^0=1$ and
$a^{-n}=1/a^n$: extending the laws to those exponents leaves no freedom. They recur in polynomial
arithmetic, scientific notation, logarithms, and every growth model. Recognition trigger: any
product, quotient, or nesting of powers of a common base is an invitation to add, subtract, or
multiply exponents.

## History

The rules $x^m x^n = x^{m+n}$ and $(x^m)^n = x^{mn}$ were noticed as *patterns* long before they were exploited systematically. The fourteenth-century French scholar Nicole Oresme, in his work on ratios, already manipulated what amount to fractional exponents and stated rules for combining powers. The deep insight — that multiplying powers corresponds to *adding* their exponents — became the foundation of logarithms, invented independently by John Napier (1614) and Jost Bürgi (c. 1620) precisely to convert multiplication into addition. Descartes' superscript notation (1637) then made the additive law visually obvious, and Euler in the eighteenth century treated exponents with full generality. This mattered enormously: the exponent laws are what make logarithms, slide rules, exponential growth, and the entire analytic theory of the function $x\mapsto a^x$ possible, and they are the bridge from arithmetic to analysis.
