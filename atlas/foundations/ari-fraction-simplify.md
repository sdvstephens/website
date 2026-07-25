$\tfrac{6}{8}$ and $\tfrac34$ mark the same spot on the ruler, yet one wears bigger numbers. Cut a
bar into $8$ and shade $6$, or cut it into $4$ and shade $3$ — the shaded length is identical. How
can two different pairs of numbers name one amount, and which name is the "simplest"?

## Discovery

1. Take $\tfrac34$ and cut *each* of the $4$ pieces into $2$. How many small pieces are there now,
   and how many are shaded? Write the new fraction. Did the shaded *amount* change? What did you
   actually multiply the top and bottom by?
2. Generalize step $1$: cutting every piece into $k$ equal bits multiplies both the count of shaded
   pieces and the count of total pieces by the same $k$. Write the rule this gives relating $\tfrac
   ab$ and $\tfrac{ka}{kb}$. Which number, in disguise, did you multiply the fraction by?
3. Now run it backwards on $\tfrac{6}{8}$: find a $k$ so that $\tfrac{6}{8}=\tfrac{k\cdot?}{k\cdot?}$
   and strip the $k$ off. What number did $6$ and $8$ share that let you do this?
4. When can you *not* strip anything more off a fraction? State the condition on the numerator and
   denominator that means "no further cut can be undone."

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Equivalent fractions and lowest terms.** Multiplying (or dividing) the numerator and denominator
of a fraction by the same nonzero whole number $k$ does not change its value:
$$\frac ab = \frac{ka}{kb} \qquad (k\ne 0).$$
Two fractions are **equivalent** when one comes from the other this way — they are the same rational
number in different clothes. A fraction is in **lowest terms** (fully reduced) when $\gcd(a,b)=1$:
the numerator and denominator share no common factor greater than $1$, so nothing more can be
cancelled. To reduce $\tfrac ab$, divide top and bottom by $\gcd(a,b)$; the result is the unique
lowest-terms name of that number (up to sign).

### Proof

The engine is that $\tfrac{k}{k}=1$ and multiplying by $1$ changes nothing.

*Scaling preserves value.* By the meaning of a fraction, $\tfrac{ka}{kb}$ is $ka$ copies of the unit
piece $\tfrac1{kb}$. Cutting each of the $b$ original pieces into $k$ equal bits turns one piece
$\tfrac1b$ into $k$ pieces of size $\tfrac1{kb}$, so $\tfrac1b = k\cdot\tfrac1{kb}$. Hence
$$\frac ab = a\cdot\frac1b = a\cdot k\cdot\frac1{kb} = (ka)\cdot\frac1{kb} = \frac{ka}{kb}.$$
Equivalently, $\tfrac{ka}{kb} = \tfrac ab\cdot\tfrac kk = \tfrac ab\cdot 1 = \tfrac ab$. Reading it
right-to-left, dividing top and bottom by a common factor also holds value.

*Lowest terms exists and is unique.* Let $g=\gcd(a,b)$ and write $a=ga'$, $b=gb'$. Dividing by $g$
gives $\tfrac ab=\tfrac{a'}{b'}$ with $\gcd(a',b')=1$ (any common factor of $a',b'$ would multiply
by $g$ to a larger common factor of $a,b$, contradicting that $g$ is the greatest). So a
lowest-terms form is always reachable. For uniqueness, suppose $\tfrac{a'}{b'}=\tfrac{c}{d}$ with
both reduced and $b',d\gt 0$; then $a'd=b'c$. Since $\gcd(a',b')=1$, $b'$ divides $d$, and since
$\gcd(c,d)=1$, $d$ divides $b'$; two positive integers each dividing the other are equal, so
$b'=d$, whence $a'=c$. The reduced name is unique. $\blacksquare$

### Worked Instance

The Hook's $\tfrac68$: $\gcd(6,8)=2$, so divide top and bottom by $2$ to get
$\tfrac{6\div2}{8\div2}=\tfrac34$, already reduced since $\gcd(3,4)=1$. That is why the shaded bars
matched — $\tfrac68 = \tfrac{2\cdot3}{2\cdot4} = \tfrac34\cdot\tfrac22 = \tfrac34$. A messier case:
$\tfrac{18}{24}$ has $\gcd=6$, giving $\tfrac{18\div6}{24\div6}=\tfrac34$ in one step; halving twice
and thirding also gets there, but dividing by the full $\gcd$ finishes immediately.

### Pitfalls

- **Cancel *factors*, never *terms*.** In $\tfrac{2+3}{2+5}$ you may not "cancel the $2$s"; only common
  *multiplicative* factors of the whole top and whole bottom may go.
- **Both floors get the same treatment.** $\tfrac{ka}{kb}$ needs $k$ on top *and* bottom; multiplying
  only one changes the number.
- **Reduced $\ne$ smaller value.** $\tfrac34$ equals $\tfrac68$; reducing changes the *name*, not the
  amount.
- **$\gcd$ finishes in one shot.** Dividing by any smaller common factor leaves more to do; divide by
  $\gcd(a,b)$ to land in lowest terms directly.

:::
:::

## Connections

The "multiply by $\tfrac kk=1$" move, resting on the meaning of a fraction and on $\gcd$. It is the
tool for rewriting fractions to a needed denominator (adding and subtracting), for reading off which
of two fractions is bigger, and for the clean final answers every later computation expects.
Recognition trigger: any time two fractions "should be equal" but don't look it, or an answer needs
tidying, reach for common-factor cancellation.

## History

Reducing a fraction to lowest terms rests on the notion of common divisors, and its engine is one of the oldest algorithms in mathematics: the Euclidean algorithm for the greatest common divisor, given in Book VII of Euclid's *Elements* (c. 300 BCE). Ancient scribes routinely simplified ratios to their smallest whole-number form for clarity, and Greek number theory studied when two numbers are "relatively prime." The systematic understanding that a fraction $a/b$ names the same rational number as $ka/kb$ — that these are *equivalent* representatives — was clarified only with the nineteenth-century construction of $\QQ$ as equivalence classes of integer pairs by Dedekind, Peano, and Landau. Their formalization explained precisely why simplifying changes the numeral without changing the number. This mattered because canonical lowest-terms form gives each rational a unique fingerprint, essential for comparison, computation, and the theory of continued fractions.
