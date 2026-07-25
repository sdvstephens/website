Mod $7$, the number $3$ has a "reciprocal": $3\cdot 5 = 15 \equiv 1 \pmod 7$, so $5$ acts like
$1/3$. But mod $6$, hunt as you like — no multiple of $3$ is ever $\equiv 1$. Some numbers can be
inverted mod $m$ and some cannot. What decides which?

## Discovery

1. To invert $a$ mod $m$ means to find $x$ with $ax \equiv 1 \pmod m$. Unwind the congruence: what
   does $ax \equiv 1 \pmod m$ say about $ax - 1$, and hence about integers $x$ and $y$ in the
   equation $ax - 1 = -ym$?
2. Rearrange that into the form $ax + my = 1$. If such integers $x, y$ exist, what does the
   left-hand side force about any common divisor of $a$ and $m$? (Think about what divides
   $ax + my$.)
3. Test the two Hook cases through this lens: $\gcd(3,7)$ and $\gcd(3,6)$. Which one is $1$? Line
   that up with which number was invertible.
4. Conversely, when $\gcd(a,m) = 1$, the Euclidean algorithm run *backwards* expresses the gcd as a
   combination $ax + my$. What congruence do you read off by reducing that identity mod $m$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $m \ge 1$ and let $a$ be an integer. Then $a$ has a **multiplicative inverse modulo $m$** — an
integer $x$ with $ax \equiv 1 \pmod m$ — **if and only if $\gcd(a,m) = 1$**. When it exists, the
inverse is unique modulo $m$, is written $a^{-1}$, and can be computed by the **extended Euclidean
algorithm**: find $x, y$ with $ax + my = 1$, and then $x \bmod m$ is the inverse.

### Proof

**($\Rightarrow$) An inverse forces $\gcd(a,m)=1$.** Suppose $ax \equiv 1 \pmod m$. Then
$m \mid ax - 1$, so $ax - 1 = -my$ for some integer $y$, i.e. $ax + my = 1$. Let $d = \gcd(a,m)$.
Since $d \mid a$ and $d \mid m$, $d$ divides the combination $ax + my = 1$; the only positive
divisor of $1$ is $1$, so $d = 1$.

**($\Leftarrow$) $\gcd(a,m)=1$ forces an inverse.** Run the Euclidean algorithm on $a$ and $m$ and
back-substitute; this produces integers $x, y$ with $ax + my = 1$ (this is Bézout's identity,
constructive form). Reducing modulo $m$, the term $my$ vanishes and $ax \equiv 1 \pmod m$, so $x$ is
an inverse of $a$.

**Uniqueness modulo $m$.** If $ax \equiv 1$ and $ax' \equiv 1 \pmod m$, then multiplying the first
by $x'$ gives $x' \equiv x'(ax) = (ax')x \equiv x \pmod m$ (using compatibility of multiplication with
congruence). So any two inverses are congruent mod $m$. $\blacksquare$

### Worked Instance

Invert $3$ modulo $7$. Euclid: $7 = 2\cdot 3 + 1$, so $1 = 7 - 2\cdot 3$. Reading mod $7$:
$-2\cdot 3 \equiv 1$, i.e. $3^{-1} \equiv -2 \equiv 5 \pmod 7$. Check: $3\cdot 5 = 15 \equiv 1$.
Now the failure: mod $6$, $\gcd(3,6) = 3 \ne 1$, so by the theorem no inverse exists — matching the
Hook's fruitless search. Concretely, every multiple of $3$ is $\equiv 0$ or $3 \pmod 6$, never $1$.

### Pitfalls

- The condition is $\gcd(a,m) = 1$ (coprimality), **not** "$a$ is prime" and **not** "$m$ is prime."
  $4$ is invertible mod $9$ because $\gcd(4,9)=1$, even though neither is prime.
- When $m$ is prime, *every* nonzero residue is invertible (all are coprime to $m$) — that's why
  $\ZZ/p\ZZ$ is a field. For composite $m$, only the coprime residues have inverses.
- The inverse is unique **modulo $m$**, not as an integer: $3^{-1} \bmod 7$ is $5$, or $12$, or
  $-2$, etc. Report it in the range $0,\dots,m-1$.
- Don't confuse "inverse of $a$" with "$1/a$" as a rational — it's an integer that acts like a
  reciprocal only under mod-$m$ arithmetic.

:::
:::

## Connections

Prereqs: modular arithmetic (the arena where "$\equiv 1$" lives) and the Euclidean algorithm (the
machine that produces the inverse). The equation $ax + my = 1$ that appears here *is* Bézout's
identity, which the next node isolates and generalizes; inverses also power the Chinese Remainder
Theorem and Wilson's theorem. Recognition trigger: needing to "divide" in a congruence, cancel a
coprime factor, or solve $ax \equiv b \pmod m$.
