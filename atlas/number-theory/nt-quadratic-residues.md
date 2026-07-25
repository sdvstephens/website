Which numbers are perfect squares mod $7$? Square each residue: $1,2,3,4,5,6$ give
$1,4,2,2,4,1$. Only $\{1,2,4\}$ appear — exactly half of the nonzero residues, and each appears
twice. Is being "half" a coincidence of $7$, and is there a *test*, short of squaring everything,
to decide whether a given number is one of the lucky halves?

## Discovery

Fix an odd prime $p$ and consider the nonzero residues mod $p$.
1. Square the residues $1, 2, \dots, p-1$ mod $p$. Observe that $a$ and $p - a$ produce the same
   square. How many *distinct* nonzero squares can there be, at most?
2. Show that no more collisions occur: if $x^2 \equiv y^2 \pmod p$ then $x \equiv \pm y$. Conclude
   the exact count of nonzero squares (call them **quadratic residues**, QRs).
3. Fermat's little theorem says $a^{p-1} \equiv 1$ for $p \nmid a$, so $a^{(p-1)/2}$ squares to
   $1$, hence $a^{(p-1)/2} \equiv \pm 1 \pmod p$. If $a$ *is* a QR, say $a \equiv t^2$, compute
   $a^{(p-1)/2}$ in terms of $t^{p-1}$. Which sign do you land on?
4. There are $\tfrac{p-1}{2}$ QRs, and each is a root of $X^{(p-1)/2} - 1$. How many roots can a
   degree-$\tfrac{p-1}{2}$ polynomial have mod a prime? Use this to argue the *non*-residues must
   give the *other* sign.
5. Package steps 3–4 as a single formula: a criterion, computable by fast exponentiation, that
   tells a QR from a non-QR.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $p$ be an odd prime and $p \nmid a$. Call $a$ a **quadratic residue** (QR) mod $p$ if
$x^2 \equiv a \pmod p$ has a solution, otherwise a **quadratic non-residue** (QNR). Define the
**Legendre symbol**
$$\left(\frac{a}{p}\right) = \begin{cases} +1 & a \text{ is a QR mod } p,\\ -1 & a \text{ is a
QNR mod } p,\\ 0 & p \mid a.\end{cases}$$

**Basic count.** Exactly $\tfrac{p-1}{2}$ of the nonzero residues are QRs and $\tfrac{p-1}{2}$
are QNRs.

**Euler's Criterion.** For $p \nmid a$,
$$a^{(p-1)/2} \equiv \left(\frac{a}{p}\right) \pmod p.$$

**Multiplicativity.** $\left(\dfrac{ab}{p}\right) = \left(\dfrac{a}{p}\right)\!\left(\dfrac{b}{p}
\right)$; in particular QR·QR and QNR·QNR are QRs, QR·QNR is a QNR.

### Proof

**Counting the residues.** Consider the squaring map $s : a \mapsto a^2$ on the nonzero residues
$(\ZZ/p\ZZ)^\times$. For $x, y \ne 0$, $x^2 \equiv y^2 \iff p \mid (x-y)(x+y) \iff x \equiv \pm y
\pmod p$ (primality of $p$). Since $p$ is odd, $x \not\equiv -x$ for $x \ne 0$, so the fibers of
$s$ have size exactly $2$: $a$ and $-a$ are distinct and share a square, and nothing else maps
there. Hence the image (the set of QRs) has size $\tfrac{p-1}{2}$, and the QNRs number
$(p-1) - \tfrac{p-1}{2} = \tfrac{p-1}{2}$.

**Euler's Criterion.** Let $p \nmid a$. By Fermat's little theorem $a^{p-1} \equiv 1$, so
$\left(a^{(p-1)/2}\right)^2 \equiv 1$, and as $\ZZ/p\ZZ$ is a field the only square roots of $1$
are $\pm 1$; thus $a^{(p-1)/2} \equiv \pm 1 \pmod p$.

*If $a$ is a QR*, write $a \equiv t^2$ with $p \nmid t$. Then $a^{(p-1)/2} \equiv t^{p-1} \equiv 1
\pmod p$, again by Fermat. So every QR satisfies $a^{(p-1)/2} \equiv +1$, i.e. is a root of the
polynomial $f(X) = X^{(p-1)/2} - 1$ over the field $\ZZ/p\ZZ$.

*Counting roots.* A nonzero polynomial of degree $d$ over a field has at most $d$ roots. Here
$\deg f = \tfrac{p-1}{2}$, and we have already exhibited $\tfrac{p-1}{2}$ distinct roots (all the
QRs). So the QRs are *exactly* the roots of $f$, and no QNR can satisfy $a^{(p-1)/2}\equiv 1$.
Since every $a \ne 0$ gives $a^{(p-1)/2} \equiv \pm 1$, each QNR must give $-1$. Combining:
$a^{(p-1)/2} \equiv +1$ iff $a$ is a QR and $\equiv -1$ iff $a$ is a QNR — precisely
$a^{(p-1)/2} \equiv \left(\tfrac{a}{p}\right) \pmod p$.

**Multiplicativity.** Using the criterion,
$$\left(\frac{ab}{p}\right) \equiv (ab)^{(p-1)/2} = a^{(p-1)/2} b^{(p-1)/2} \equiv \left(\frac{a}
{p}\right)\!\left(\frac{b}{p}\right) \pmod p.$$
Both sides are in $\{+1, -1\}$ and are congruent mod $p \ge 3$, so they are equal as integers.
$\blacksquare$

### Worked Instance

Resolve the hook for $p = 7$. The criterion uses the exponent $\tfrac{p-1}{2} = 3$.
- $\left(\tfrac{2}{7}\right)$: $2^3 = 8 \equiv 1 \pmod 7$, so $2$ is a QR (indeed $3^2 = 9 \equiv
  2$).
- $\left(\tfrac{3}{7}\right)$: $3^3 = 27 \equiv 6 \equiv -1 \pmod 7$, so $3$ is a QNR (no square
  hits $3$, matching $\{1,2,4\}$ being the QR set).
- $\left(\tfrac{6}{7}\right)$: by multiplicativity $= \left(\tfrac{2}{7}\right)\left(\tfrac{3}{7}
  \right) = (+1)(-1) = -1$, a QNR — consistent with $6 \notin \{1,2,4\}$.

So the QRs mod $7$ are exactly $\{1, 2, 4\}$, half the nonzero residues, exactly as the hook
observed — and Euler's criterion decided each case with a single cube, no exhaustive squaring.

### Pitfalls

- The Legendre symbol $\left(\tfrac{a}{p}\right)$ is defined only for **odd prime** $p$. For
  composite (or even $2$) moduli one needs the Jacobi symbol or a direct argument; a Jacobi symbol
  can equal $+1$ with $a$ still a non-residue.
- Euler's criterion is a congruence **mod $p$**, and $a^{(p-1)/2}$ can be a huge integer — reduce
  as you exponentiate; the *value* is $\pm 1$ only after reduction.
- "$\left(\tfrac{a}{p}\right) = 1$" means $a$ is a QR, but the criterion by itself does **not**
  hand you the square root $x$; existence is not construction.
- Multiplicativity says QNR·QNR $=$ QR — two non-squares multiply to a square. Do not assume
  non-residues are "closed."

:::
:::

## Connections

Prereq: Euler's totient / Fermat's little theorem, whose $a^{p-1}\equiv1$ is the engine behind the
criterion, plus the field fact "degree $d$ $\Rightarrow$ $\le d$ roots." This node is the gateway
to the two deepest classical results in elementary number theory it unlocks: **quadratic
reciprocity** (how $\left(\tfrac pq\right)$ and $\left(\tfrac qp\right)$ relate) and **Fermat's
two-squares theorem** (which primes are $x^2+y^2$). Recognition trigger: any congruence
$x^2\equiv a\pmod p$, any question "is $a$ a square mod $p$," or a Diophantine obstruction proved
by "$a$ is a non-residue mod some prime."
