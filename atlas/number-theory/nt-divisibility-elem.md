$91 = 7 \cdot 13$, so $7$ slides into $91$ with nothing left over; but $7$ into $90$ leaves a stray
$6$. The first case earns a special symbol, $7 \mid 91$. And here is the surprise: because $7 \mid
91$ and $7 \mid 56$, it turns out $7 \mid 147$ too — divisibility survives addition. Why should a
sum inherit the divisors of its parts?

## Discovery

1. Test $7$ against $91$ and against $56$: in each case, is there an integer $q$ with the number
   equal to $7q$? Find $q$, or show none exists. Rewrite "$7$ divides it" as an equation.
2. You now have $91 = 7q_1$ and $56 = 7q_2$. Look at $91 + 56$, at $91 - 56$, and at $91 \cdot 5$.
   Does $7$ divide each? Check by finding the quotient, then hunt for the reason inside the two
   equations from step 1.
3. Does every integer divide $0$? Does $0$ divide any nonzero number? Try to solve $0 = 0 \cdot q$,
   and then $n = 0 \cdot q$ for $n \ne 0$, and see how many $q$ each allows.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For integers $a, b$ with $a \ne 0$, **$a$ divides $b$**, written $a \mid b$, when $b = aq$ for some
integer $q$; then $a$ is a **divisor** (or **factor**) of $b$, and $b$ is a multiple of $a$. Its
basic properties, for $a \ne 0$:
$$a \mid b \ \text{and}\ a \mid c \ \Longrightarrow\ a \mid (b + c)\ \text{and}\ a \mid (b - c);$$
$$a \mid b \ \Longrightarrow\ a \mid bm\ \text{for every integer } m; \qquad
a \mid b\ \text{and}\ b \mid c \ \Longrightarrow\ a \mid c.$$
Combining the first two: if $a \mid b$ and $a \mid c$ then $a \mid (bx + cy)$ for all integers
$x, y$ — $a$ divides every **integer linear combination** of $b$ and $c$. Also $a \mid 0$ for every
$a \ne 0$.

### Proof

Everything follows by factoring $a$ out of an equation.

*Sums and differences.* Suppose $a \mid b$ and $a \mid c$, so $b = aq$ and $c = ar$. Then
$$b + c = aq + ar = a(q + r), \qquad b - c = a(q - r),$$
and $q \pm r \in \ZZ$, so $a \mid (b+c)$ and $a \mid (b-c)$.

*Multiples.* If $b = aq$ then $bm = a(qm)$ with $qm \in \ZZ$, so $a \mid bm$.

*Linear combinations.* From $a \mid b$ we get $a \mid bx$, from $a \mid c$ we get $a \mid cy$, and
the sum rule gives $a \mid (bx + cy)$.

*Transitivity.* If $a \mid b$ and $b \mid c$, write $b = aq$ and $c = bs$; then $c = (aq)s =
a(qs)$ with $qs \in \ZZ$, so $a \mid c$.

*Zero.* $0 = a \cdot 0$, so $a \mid 0$ for every $a \ne 0$. $\blacksquare$

### Worked Instance

$7 \mid 91$ (with $q = 13$) and $7 \mid 56$ (with $q = 8$). The Hook then follows without dividing
$147$ at all:
$$91 + 56 = 7 \cdot 13 + 7 \cdot 8 = 7(13 + 8) = 7 \cdot 21 = 147,$$
so $7 \mid 147$; likewise $91 - 56 = 7(13 - 8) = 7 \cdot 5 = 35$, and $91 \cdot 5 = 7 \cdot 65 =
455$. The divisor $7$ rides along because it can be pulled out in front of every combination.

### Pitfalls

- **$a \mid b$ is not the fraction $a/b$.** The bar means "$a$ divides $b$"; the *divisor* $a$ is the
  small one, the factor. $7 \mid 91$, not $91 \mid 7$.
- **Divisibility is directional.** $a \mid b$ does not give $b \mid a$; both hold together (for
  positives) only when $a = b$.
- **Everything divides $0$, but $0$ divides nothing.** $a \mid 0$ always; $0 \mid n$ would need
  $n = 0 \cdot q = 0$, so $0$ divides only $0$ — which is why $a \ne 0$ is required of a divisor.
- **A divisor of a sum need not divide the parts.** $7 \mid (4 + 3)$ is false to reverse: $7 \mid
  21$ says nothing about whether $7 \mid 6$ and $7 \mid 15$ (it divides neither). The implication
  runs from parts to whole, not back.

:::
:::

## Connections

Divisibility is the multiples relation (`nt-multiples-elem`) read from the divisor's side, sharpened
by exact division (`ari-division`) demanding a zero remainder. The linear-combination property is
the workhorse behind the Euclidean algorithm and Bézout's identity, and it is the tool that defines
primes (`nt-primes-elem`), common divisors and the gcd (`nt-gcd-elem`), and common multiples and the
lcm (`nt-lcm-elem`). Recognition trigger: any "goes in evenly," "leaves no remainder," or "is a
factor of" is a divisibility statement, and the instant you see two such facts, reach for the sum
rule.

## History

Divisibility was the organizing idea of ancient Greek arithmetic, distilled by Euclid in Book VII of the *Elements* (about $300$ BC), where he defines one number as measuring another and derives the basic laws still taught today. Earlier, the Pythagoreans had classified numbers by their divisors — even and odd, perfect and abundant — making divisibility the first lens through which integers were sorted. Euclid's careful definitions let him prove results like the infinitude of primes and the algorithm for greatest common divisors purely from the relation "$d$ divides $n$." The subject was later carried forward by Nicomachus and Diophantus, and much later given its modern algebraic dress. It mattered because divisibility is the atom of number theory: primes, factorization, congruences, and Diophantine equations all rest on knowing exactly when one integer goes evenly into another.
