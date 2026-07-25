Is $3$ a square mod $103$? You could cube-and-square your way through Euler's criterion — or you
could flip the question upside down. Quadratic reciprocity says $\left(\tfrac{3}{103}\right)$ and
$\left(\tfrac{103}{3}\right)$ are almost the same symbol, and the second one is trivial:
$103 \equiv 1 \pmod 3$, a square. One flip collapses a huge computation to a glance. What law lets
you swap the top and bottom of a Legendre symbol?

## Discovery

You may take Euler's criterion and multiplicativity of the Legendre symbol as known.
1. Compute $\left(\tfrac{-1}{p}\right) = (-1)^{(p-1)/2}$ from Euler's criterion. For which residue
   class of $p$ mod $4$ is $-1$ a square? Tabulate $p = 3,5,7,11,13$.
2. Suppose you already trust the two *supplementary laws* — one for $\left(\tfrac{-1}{p}\right)$
   and one for $\left(\tfrac{2}{p}\right)$ — and the *main law* relating $\left(\tfrac pq\right)$
   to $\left(\tfrac qp\right)$. Using them, reduce $\left(\tfrac{3}{103}\right)$ to a Legendre
   symbol with a *smaller* bottom, then keep reducing. What tiny symbols do you bottom out at?
3. Reduce $\left(\tfrac{15}{101}\right)$: split $15 = 3 \cdot 5$ by multiplicativity, flip each
   piece, and reduce the tops mod the new bottoms. Where does the sign come from at each flip?
4. Formulate, in words, exactly when flipping $\left(\tfrac pq\right) \to \left(\tfrac qp\right)$
   introduces a minus sign, based on $p, q \bmod 4$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $p, q$ be **distinct odd primes**.

**Main law (Quadratic Reciprocity).**
$$\left(\frac{p}{q}\right)\!\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.$$
Equivalently, $\left(\tfrac pq\right) = \left(\tfrac qp\right)$ unless $p \equiv q \equiv 3 \pmod
4$, in which case $\left(\tfrac pq\right) = -\left(\tfrac qp\right)$.

**First supplement.** $\displaystyle \left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}} =
\begin{cases} +1 & p \equiv 1 \pmod 4,\\ -1 & p \equiv 3 \pmod 4.\end{cases}$

**Second supplement.** $\displaystyle \left(\frac{2}{p}\right) = (-1)^{\frac{p^2-1}{8}} =
\begin{cases} +1 & p \equiv \pm 1 \pmod 8,\\ -1 & p \equiv \pm 3 \pmod 8.\end{cases}$

A full proof of the main law is nontrivial (Gauss gave eight; we cite it). We prove the two
supplements, then focus on *using* all three to evaluate symbols mechanically.

### Proof

We prove the supplements; the main law is stated as cited (via Gauss's lemma / Eisenstein's
lattice-point count).

**First supplement.** By Euler's criterion, $\left(\tfrac{-1}{p}\right) \equiv (-1)^{(p-1)/2}
\pmod p$. Both sides lie in $\{+1,-1\}$ and $p \ge 3$, so they are equal as integers. If
$p \equiv 1 \pmod 4$ then $\tfrac{p-1}{2}$ is even and the value is $+1$; if $p \equiv 3 \pmod 4$
then $\tfrac{p-1}{2}$ is odd and it is $-1$.

**Second supplement (via Gauss's lemma).** *Gauss's lemma*: for $p \nmid a$, let $\mu$ be the
number of elements of $\{a, 2a, \dots, \tfrac{p-1}{2}a\}$ whose least positive residue mod $p$
exceeds $\tfrac p2$; then $\left(\tfrac ap\right) = (-1)^{\mu}$. (Proof sketch of the lemma: reduce
each $ka$ to the representative in $(-\tfrac p2, \tfrac p2)$; the absolute values are a permutation
of $1,\dots,\tfrac{p-1}{2}$, and multiplying all congruences gives $a^{(p-1)/2}\prod k \equiv
(-1)^\mu \prod k$, so $a^{(p-1)/2}\equiv(-1)^\mu$, then apply Euler.)

Take $a = 2$. We count how many of $2\cdot 1, 2\cdot 2, \dots, 2\cdot \tfrac{p-1}{2}$ — that is,
the even numbers $2, 4, \dots, p-1$ — exceed $\tfrac p2$. An even number $2k$ with
$1 \le k \le \tfrac{p-1}{2}$ satisfies $2k \gt \tfrac p2 \iff k \gt \tfrac p4$. So
$$\mu = \#\{k : \tfrac p4 \lt k \le \tfrac{p-1}{2}\} = \frac{p-1}{2} - \left\lfloor \frac p4
\right\rfloor.$$
Evaluate mod $2$ by the class of $p \bmod 8$:
- $p = 8m+1$: $\mu = 4m - 2m = 2m$, even $\Rightarrow +1$.
- $p = 8m+3$: $\mu = (4m+1) - (2m) = 2m+1$, odd $\Rightarrow -1$.
- $p = 8m+5$: $\mu = (4m+2) - (2m+1) = 2m+1$, odd $\Rightarrow -1$.
- $p = 8m+7$: $\mu = (4m+3) - (2m+1) = 2m+2$, even $\Rightarrow +1$.

Thus $\left(\tfrac 2p\right) = +1$ for $p \equiv \pm 1 \pmod 8$ and $-1$ for $p \equiv \pm 3
\pmod 8$, which is exactly $(-1)^{(p^2-1)/8}$ (check: $\tfrac{p^2-1}{8}$ is even iff
$p \equiv \pm1 \pmod 8$). $\blacksquare$

### Worked Instance

Resolve the hook: is $3$ a square mod $103$? Both $3$ and $103$ are odd primes. Since
$103 \equiv 3 \pmod 4$ and $3 \equiv 3 \pmod 4$, they are *both* $\equiv 3 \pmod 4$, so the flip
carries a minus sign:
$$\left(\frac{3}{103}\right) = -\left(\frac{103}{3}\right).$$
Reduce the top mod the bottom: $103 \equiv 1 \pmod 3$, and $\left(\tfrac 13\right) = +1$. Hence
$\left(\tfrac{3}{103}\right) = -(+1) = -1$: $3$ is a **non**-residue mod $103$.

A two-flip example — $\left(\tfrac{15}{101}\right)$, with $101 \equiv 1 \pmod 4$ prime:
$$\left(\frac{15}{101}\right) = \left(\frac{3}{101}\right)\left(\frac{5}{101}\right).$$
Since $101 \equiv 1 \pmod 4$, both flips are sign-free:
$$\left(\frac{3}{101}\right) = \left(\frac{101}{3}\right) = \left(\frac{2}{3}\right) = -1,\qquad
\left(\frac{5}{101}\right) = \left(\frac{101}{5}\right) = \left(\frac{1}{5}\right) = +1.$$
(For $\left(\tfrac23\right)$: $3 \equiv 3 \pmod 8$ gives $-1$.) So $\left(\tfrac{15}{101}\right)
= (-1)(+1) = -1$: $15$ is a non-residue mod $101$.

### Pitfalls

- The main law needs **both** primes odd and **distinct**. The prime $2$ is handled only by the
  *second supplement*, never by flipping.
- The sign flips **only** when $p \equiv q \equiv 3 \pmod 4$. If either is $\equiv 1 \pmod 4$, the
  symbols are equal — a very common sign error.
- Before flipping, the **top must be reduced mod the bottom** and factored into primes (or use the
  Jacobi symbol, but then a value $+1$ does not certify a residue).
- The second supplement's cases are mod $8$ ($\pm 1$ vs $\pm 3$), not mod $4$. And
  $\left(\tfrac{-1}p\right)$ is mod $4$, not mod $8$ — don't cross the wires.
- The Legendre symbol is multiplicative in the **top**, not the bottom: $\left(\tfrac a{pq}\right)$
  is not a Legendre symbol at all (that would be Jacobi).

:::
:::

## Connections

Prereq: quadratic residues, the Legendre symbol, and Euler's criterion (which powers the
supplements). Quadratic reciprocity turns "is $a$ a square mod $p$" from an exponentiation into a
short flip-and-reduce Euclidean-style descent, and it is the archetype of the vast "reciprocity
law" program (cubic, biquadratic, Artin reciprocity in class field theory). Recognition trigger:
any Legendre symbol with a large bottom, or a Diophantine problem needing "for which primes $p$ is
$d$ a square mod $p$" (e.g. deciding when $x^2 \equiv d$ is solvable to rule out solutions).
