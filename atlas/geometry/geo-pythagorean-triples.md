The $3$-$4$-$5$ triangle is a marvel: three whole-number sides, a perfect right angle, no rounding
anywhere. Ancient rope-stretchers used knots at $3$, $4$, $5$ intervals to lay out square corners.
Are there others? $5$-$12$-$13$ works, and $8$-$15$-$17$. But such clean triangles seem rare among all
the messy $\sqrt{13}$'s and $\sqrt{2}$'s. Is there a pattern — or better, a machine that manufactures
them on demand?

## Discovery

Call a trio of positive integers $(a,b,c)$ a **Pythagorean triple** when $a^2+b^2=c^2$.

1. Hunt by hand. For each $c=5,10,13,15,17,25$, search for legs $a\lt b\lt c$ with $a^2+b^2=c^2$. List
   every triple you find. Which small triples turn up?
2. Take the triple $(3,4,5)$ and multiply all three entries by $2$, then by $3$. Check each result in
   $a^2+b^2=c^2$. Then argue in general: if $(a,b,c)$ works, must $(ka,kb,kc)$ work for every positive
   integer $k$? Prove it algebraically.
3. Step $2$ says triples come in families of multiples. Call a triple **primitive** when its three
   entries share no common factor above $1$. Sort your finds from step $1$ into primitive triples and
   scaled copies of smaller ones. Which of yours are primitive?
4. Here is a candidate machine. Pick integers $m\gt n\gt 0$ and form
   $$a=m^2-n^2,\qquad b=2mn,\qquad c=m^2+n^2 .$$
   Compute the triple for $(m,n)=(2,1)$ and for $(3,2)$. Then test the machine *in general*: expand
   $a^2+b^2$ and $c^2$ as polynomials in $m,n$ and compare. Does it always produce a triple?
5. Look at the parity of the legs in your primitive triples: is it possible for **both** legs to be
   odd? Suppose they were, and examine $a^2+b^2$ and $c^2$ modulo $4$ (recall an odd square leaves
   remainder $1$, an even square remainder $0$). What contradiction appears?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **Pythagorean triple** is a trio of positive integers $(a,b,c)$ with $a^2+b^2=c^2$ — the side lengths
of a right triangle with whole-number sides. Examples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$,
$(20,21,29)$.

- **Scaling.** If $(a,b,c)$ is a triple, so is $(ka,kb,kc)$ for every positive integer $k$. Thus each
  triple spawns an infinite family of enlarged copies.
- **Primitive triples.** A triple is **primitive** when $\gcd(a,b,c)=1$ (no common factor beyond $1$),
  e.g. $(3,4,5)$; every triple is a whole-number multiple of a primitive one.
- **A generating formula.** For any integers $m\gt n\gt 0$,
  $$a=m^2-n^2,\qquad b=2mn,\qquad c=m^2+n^2$$
  is always a Pythagorean triple. (Taking $m,n$ of opposite parity and coprime yields *primitive*
  triples, and in fact every primitive triple arises this way.)
- **A parity fact.** In a primitive triple the two legs have *opposite* parity — exactly one leg is
  even. (More is true: one of $a,b$ is divisible by $3$, one by $4$, and one of $a,b,c$ by $5$.)

### Proof

**Scaling.** Suppose $a^2+b^2=c^2$ and let $k$ be a positive integer. Then
$$(ka)^2+(kb)^2 = k^2a^2 + k^2b^2 = k^2(a^2+b^2) = k^2c^2 = (kc)^2 ,$$
so $(ka,kb,kc)$ satisfies the same equation and is a triple. $\checkmark$

**The generating formula.** Fix integers $m\gt n\gt 0$ and set $a=m^2-n^2$, $b=2mn$, $c=m^2+n^2$. All
three are positive. Compute
$$a^2+b^2 = (m^2-n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 ,$$
$$c^2 = (m^2+n^2)^2 = m^4 + 2m^2n^2 + n^4 .$$
The two expansions are identical, so $a^2+b^2=c^2$: the formula produces a Pythagorean triple for every
admissible $m,n$. $\checkmark$

**The parity fact.** Let $(a,b,c)$ be a *primitive* triple. First, $a$ and $b$ cannot both be even, or
$2$ would divide $a$, $b$, and (since $c^2=a^2+b^2$ would then be divisible by $4$, forcing $c$ even) also
$c$, contradicting $\gcd(a,b,c)=1$. Now suppose $a$ and $b$ were both odd. An odd number is $2t+1$, and
$(2t+1)^2 = 4t^2+4t+1$ leaves remainder $1$ upon division by $4$; so $a^2$ and $b^2$ each leave remainder
$1$, and $a^2+b^2$ leaves remainder $2$ modulo $4$. But $c^2$ is a perfect square: if $c$ is even, $c^2$
leaves remainder $0$; if $c$ is odd, remainder $1$. A perfect square is therefore never $\equiv 2
\pmod 4$. This contradicts $a^2+b^2=c^2$. Hence $a,b$ are not both odd and not both even — exactly one
leg is even. $\blacksquare$

### Worked Instance

Feed $(m,n)=(2,1)$ into the machine: $a=2^2-1^2=3$, $b=2\cdot2\cdot1=4$, $c=2^2+1^2=5$ — the $3$-$4$-$5$
triangle of the Hook. Try $(m,n)=(3,2)$: $a=9-4=5$, $b=2\cdot3\cdot2=12$, $c=9+4=13$, the $5$-$12$-$13$
triangle. And $(m,n)=(4,1)$: $a=16-1=15$, $b=2\cdot4\cdot1=8$, $c=16+1=17$, i.e. $(8,15,17)$.

Scaling in action: $(3,4,5)$ times $4$ is $(12,16,20)$, and indeed $12^2+16^2=144+256=400=20^2$. This
one is *not* primitive — $\gcd(12,16,20)=4$ — it is a blown-up $3$-$4$-$5$. The parity fact checks out on
every primitive example: in $(3,4,5)$ the even leg is $4$; in $(5,12,13)$ it is $12$; in $(8,15,17)$ it
is $8$ — always exactly one.

### Pitfalls

- **The generator can output a non-primitive triple.** $(m,n)=(3,1)$ gives $(8,6,10)=2\cdot(4,3,5)$. To
  guarantee primitivity, take $m,n$ coprime and of opposite parity.
- **Order of the legs.** The formula's $a=m^2-n^2$ is not always the smaller leg; for $(m,n)=(4,1)$ it is
  $15$, larger than $b=8$. A triple is a set of three lengths, not an ordered sequence.
- **"Primitive" means no *common* factor, not "prime."** In $(3,4,5)$ the entry $4$ is composite; what
  matters is $\gcd(3,4,5)=1$.
- **Not every right triangle has integer sides.** Legs $1$ and $1$ give hypotenuse $\sqrt2$; triples are
  the special integer solutions, a measure-zero sprinkling among all right triangles.

:::
:::

## Connections

Pythagorean triples are the whole-number solutions of the `geo-pythagorean-theorem` equation, and the
parity and divisibility observations lean directly on `nt-divisibility-elem` — factors, common divisors,
and remainders modulo $4$. The scaling law is the same "multiply through by $k$" move that pervades number
theory, and the generating formula is a first taste of parametrizing an entire solution set (the modern
descendant is the study of rational points on curves). Recognition trigger: a right-triangle problem that
insists on integer sides, a request to list or build such triangles, or a figure whose given lengths
$(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ you should recognize on sight to spot a hidden right
angle.

## History

Whole-number right triangles were catalogued more than a thousand years before Pythagoras: the Babylonian clay tablet Plimpton 322 (c. 1800 BC) lists numbers that amount to a table of Pythagorean triples, including large and non-obvious ones like $(65, 72, 97)$, showing a sophisticated method rather than trial and error. The Indian *Sulba Sutras* of Baudhayana (c. 800 BC) used such triples to lay out altars with true right angles. Euclid supplied a complete parametric generation in the *Elements* — a lemma near X.28–29 (c. 300 BC) — and Diophantus of Alexandria explored the problem arithmetically in his *Arithmetica* (third century AD). It was a marginal note beside a Pythagorean-triple problem in Diophantus that Pierre de Fermat used in 1637 to state his Last Theorem, that no analogous triples exist for cubes or higher powers. So this elementary topic became the seed of one of mathematics' greatest problems, resolved only by Andrew Wiles in 1994.
