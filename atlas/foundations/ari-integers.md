$\NN$ can add and multiply but cannot always subtract: $3-5$ escapes it. Glue on the opposites and
suddenly *every* subtraction lands somewhere. What exactly did we build, and how much of $\NN$'s
good behavior survives the extension — all of it, or only some?

## Discovery

1. List what $\NN$ *guarantees*: any two naturals can be added and multiplied and the result is
   again a natural (you never fall out of the system). Now pick a subtraction that falls out of
   $\NN$, e.g. $2-7$. After adjoining opposites, does $2-7$ land back inside your new collection?
2. Take two of the new points, say $-3$ and $-4$, and add them; then multiply them. Do the results
   stay inside $\{\dots,-2,-1,0,1,2,\dots\}$, or do you need to invent still *more* points to hold
   the answers?
3. Now try to *divide* inside the new collection: is there a point $x$ with $2\cdot x = 1$? Search
   the list $\dots,-2,-1,0,1,2,\dots$. What operation does the new system still refuse to perform,
   and what does that refusal tell you about how far this construction reaches?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **integers** are
$$\ZZ = \NN \cup \{-n : n\in\NN,\ n\ne 0\} = \{\dots,-2,-1,0,1,2,\dots\},$$
$\NN$ together with all additive inverses. With the addition and multiplication extended by the
sign rules, $\ZZ$ is **closed** under $+$, $\times$, and (now) $-$, and satisfies:

- $+$ and $\times$ are commutative and associative;
- $0$ is the additive identity, $1$ the multiplicative identity;
- every element $a$ has an additive inverse $-a$;
- $\times$ distributes over $+$.

A system with exactly these properties is called (informally here) a **commutative ring with
identity**. $\ZZ$ is the first one we meet. It is *not* a field: most elements lack a
multiplicative inverse inside $\ZZ$.

### Proof

We must show the construction is **closed** (operations don't escape $\ZZ$) and that the ring laws
**transfer** from $\NN$.

*Closure.* Any integer is $\pm n$ with $n\in\NN$. A sum or product of two such, once the sign
rules $(-m)+(-n) = -(m+n)$, $(-m)(-n)=mn$, $(-m)(n) = -(mn)$ are applied, reduces to $\pm(\text{a
natural})$, hence lies in $\ZZ$; and $\NN$ is itself closed under $+,\times$. Subtraction is
$a+(-b)$, a sum of integers, so it too stays in $\ZZ$. Thus $+,\times,-$ never leave the system.

*Transfer of the laws.* Commutativity, associativity, and distributivity were proved for naturals
by counting arrays. For integers, write each element as $\pm$ a natural; the sign rules (forced in
the negation node by *demanding* these very laws) reduce any integer identity to a natural-number
identity with a tracked overall sign. For instance distributivity: $(-a)(b+c) = -\big(a(b+c)\big)
= -(ab+ac) = (-a)b + (-a)c$, each step a sign rule plus the natural-number law. Every axiom checks
this way; the additive identity is $0$, the multiplicative identity $1$, and each $a$ has the
inverse $-a$ by construction.

*Not a field.* Suppose $2x=1$ with $x\in\ZZ$. If $x\le 0$ then $2x\le 0\lt 1$; if $x\ge 1$ then
$2x\ge 2\gt 1$; trichotomy leaves no integer $x$, so $2$ has no multiplicative inverse in $\ZZ$.
Hence $\ZZ$ has additive inverses but not (all) multiplicative ones — a ring, not a field.
$\blacksquare$

### Worked Instance

$2-7$, homeless in $\NN$, is $2+(-7)=-5\in\ZZ$. Adding two negatives: $(-3)+(-4)=-(3+4)=-7\in\ZZ$;
multiplying them: $(-3)(-4)=3\cdot4=12\in\ZZ$ — never leaving the list. But dividing fails:
$2\cdot x=1$ has no integer solution (any $x\le0$ gives $2x\le0$, any $x\ge1$ gives $2x\ge2$), which
is exactly why the *next* extension — reciprocals and $\QQ$ — is needed. $\ZZ$ is the complete
home for signed *whole* quantities and nothing finer.

### Pitfalls

- **Closed under $+,-,\times$ but not $\div$.** $\ZZ$ fixes subtraction, not division; expecting
  $\tfrac12\in\ZZ$ is the standard overreach.
- **"Ring" is structure, not a shape.** It names the bundle of axioms (two operations, identities,
  additive inverses, distributivity), not a geometric object.
- **$\NN\subseteq\ZZ$, but $\NN$ is not a ring.** $\NN$ lacks additive inverses ($3$ has no
  opposite in $\NN$); adjoining them is precisely the upgrade.
- **Signs must be tracked, not guessed.** Every integer computation is a natural-number one plus a
  sign determined by the forced rules; skipping the sign bookkeeping is where errors hide.

:::
:::

## Connections

The construction that completes $\NN$ into a system closed under addition, subtraction, and
multiplication — the archetypal commutative ring, built from the naturals by adjoining inverses.
Its one missing feature, multiplicative inverses, motivates reciprocals and the rationals just
above it, and its axioms are the template every later ring ($\QQ,\RR$, polynomials, matrices)
imitates. Recognition trigger: any signed whole count — floors above and below ground, gains and
losses, positions left and right of an origin — lives in $\ZZ$.

## History

The integers as a completed number system — positives, negatives, and zero together — took over two thousand years to assemble. Zero as a number arrived from India via Brahmagupta (628 CE), who also codified the arithmetic of negatives, while the symbol and place-value use of zero spread through the Hindu–Arabic numerals championed in Europe by Fibonacci (1202). Negatives remained controversial in Europe until the seventeenth and eighteenth centuries. The decisive modern step was the *construction* of $\ZZ$ from the naturals as differences $a-b$ (formally, equivalence classes of pairs), an idea developed in the nineteenth century by mathematicians including Hermann Hankel, Richard Dedekind, and later Edmund Landau in his rigorous *Grundlagen der Analysis* (1930). Their motivation was to build all of arithmetic from the naturals with no unexplained "new" objects. This mattered because $\ZZ$ is the first ring and the prototype for the entire theory of rings and modules.
