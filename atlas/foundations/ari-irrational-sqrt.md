$\sqrt2 \approx 1.41421356\ldots$ and the decimals never settle into a repeating pattern, no matter
how far you compute. The diagonal of a unit square has this length, yet the Pythagoreans could find
no fraction $\tfrac ab$ equal to it. Is there *some* fraction, however large its numerator and
denominator, whose square is exactly $2$ — or is that impossible?

## Discovery

1. Suppose, for argument's sake, that $\sqrt2$ *were* a fraction, and write it **in lowest terms** as
   $\sqrt2 = \tfrac ab$ with $\gcd(a,b)=1$. Square both sides and clear the denominator. What single
   equation connecting $a^2$ and $b^2$ do you get?
2. Look at your equation from step $1$. Is $a^2$ forced to be even or odd? Then, what does that force
   about $a$ itself? (Ask: what is an *odd* number times itself — even or odd? Use the contrapositive.)
3. Carry your conclusion about $a$ from step $2$ back into the equation from step $1$: substitute it
   in and simplify. Now run the *identical* reasoning on the result to reach a matching conclusion
   about $b$.
4. Line up what you now know about $a$ and about $b$ against the very first assumption that
   $\tfrac ab$ was in **lowest terms**. Is that assumption still tenable? What has to give?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Theorem ($\sqrt2$ is irrational).** There is **no** rational number whose square is $2$: $\sqrt2
\notin \QQ$. Equivalently, $\sqrt2$ cannot be written as $\tfrac ab$ for any integers $a,b$ with
$b\ne 0$. It is the first known **irrational** number — a genuine point on the number line that no
fraction reaches. (Historically this "incommensurability" of a square's side and diagonal was a
foundational shock; the same argument shows $\sqrt n$ is irrational whenever $n$ is not a perfect
square.)

### Proof

By contradiction, using the parity of squares. Recall the lemma we need: *if $a^2$ is even then $a$
is even.* Contrapositive form — if $a$ is **odd**, $a=2k+1$, then $a^2=4k^2+4k+1=2(2k^2+2k)+1$ is
odd; so an even square forces an even root.

Suppose, for contradiction, that $\sqrt2$ is rational. Then it has a lowest-terms representation
$$\sqrt2 = \frac ab, \qquad a,b\in\ZZ,\ b\ne 0,\ \gcd(a,b)=1.$$
Squaring and clearing the denominator,
$$2 = \frac{a^2}{b^2} \;\Longrightarrow\; a^2 = 2b^2. \tag{$\ast$}$$

From $(\ast)$, $a^2$ is twice an integer, hence **even**; by the lemma, $a$ is even, so write
$a = 2c$ for some integer $c$. Substitute into $(\ast)$:
$$(2c)^2 = 2b^2 \;\Longrightarrow\; 4c^2 = 2b^2 \;\Longrightarrow\; b^2 = 2c^2.$$
Now $b^2$ is twice an integer, hence **even**; by the lemma again, $b$ is even.

So $a$ and $b$ are **both even** — they share the common factor $2$. But that contradicts
$\gcd(a,b)=1$, the assumption that $\tfrac ab$ was in lowest terms. The assumption that $\sqrt2$ is
rational is therefore untenable. Hence $\sqrt2$ is irrational. $\blacksquare$

*(Alternative phrasing avoiding "lowest terms": from any positive solution $a^2=2b^2$ the same steps
yield a strictly smaller positive solution $b^2 = 2c^2$ with $b\lt a$; repeating would descend through
the positive integers forever, which is impossible. The lowest-terms version above packages this
infinite descent into a single contradiction.)*

### Worked Instance

Chase the Hook's near-misses. Could $\tfrac{99}{70}$ work? Its square is $\tfrac{9801}{4900}$, and
$2 = \tfrac{9800}{4900}$ — tantalizingly close but off by $\tfrac1{4900}$, never exact. The theorem
explains *why* no such fraction can ever hit the target: if some lowest-terms $\tfrac ab$ satisfied
$a^2=2b^2$, then $a$ would be even, forcing $b$ even, contradicting lowest terms. Since the
approximations $\tfrac{7}{5}, \tfrac{17}{12}, \tfrac{99}{70},\dots$ can be pushed arbitrarily close
yet never land on $\sqrt2$, the diagonal of a unit square is truly incommensurable with its side —
exactly the impossibility the proof guarantees.

### Pitfalls

- **"Lowest terms" is doing real work.** The contradiction is that $a,b$ end up *both even*, which is
  impossible only because we assumed $\gcd(a,b)=1$. Omitting that assumption breaks the proof.
- **The lemma needs justification.** "$a^2$ even $\Rightarrow$ $a$ even" is the contrapositive of
  "$a$ odd $\Rightarrow$ $a^2$ odd"; do not assert it without the odd-squared-is-odd step.
- **Irrational $\ne$ "not yet computed."** $\sqrt2$ has an exact value and an infinite non-repeating
  decimal; irrationality is proven, not a limitation of our arithmetic.
- **Not every root is irrational.** $\sqrt4=2$ is rational; the argument's even-forcing only bites when
  the radicand is not a perfect square.

:::
:::

## Connections

The first irrationality proof, welding proof-by-contradiction and parity onto the definitions of the
square root and of $\QQ$: it exhibits a real number outside the rationals, motivating the real line's
completion beyond $\QQ$. The same even/odd descent generalizes (via unique factorization) to $\sqrt n$
for any non-square $n$. Recognition trigger: "show no fraction equals ___," "prove ___ is irrational,"
or any claim of impossibility about rational representability invites assume-lowest-terms-and-descend.

## History

The discovery that $\sqrt2$ cannot be written as a ratio of whole numbers is one of the most celebrated and disruptive moments in the history of mathematics. It arose within the Pythagorean school around the fifth century BCE, and tradition — probably legendary — attributes it to Hippasus of Metapontum, said to have been drowned at sea for revealing that the diagonal of a unit square is incommensurable with its side. The elegant proof by contradiction, assuming $\sqrt2 = a/b$ in lowest terms and deriving that both $a$ and $b$ must be even, appears in essence in Euclid's *Elements* (c. 300 BCE). This shattered the Pythagorean creed that all is number (meaning whole-number ratio) and provoked the Greek turn toward geometry and Eudoxus' theory of proportion. It mattered because it proved the rationals are incomplete, opening the two-thousand-year road to a rigorous theory of the real numbers.
