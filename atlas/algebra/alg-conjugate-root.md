A quadratic with **real** coefficients can never have exactly one non-real root — if $2 + 3i$ is a
root, then $2 - 3i$ must be too. The same rigidity forces $1 - \sqrt2$ to tag along whenever
$1 + \sqrt2$ is a root of a polynomial with **rational** coefficients. One symmetry, two theorems.

## Discovery

1. Recall two facts about complex conjugation: $\overline{z + w} = \bar z + \bar w$ and
   $\overline{zw} = \bar z\,\bar w$. If $a$ is a **real** number, what is $\bar a$?
2. Let $P(x) = a_n x^n + \cdots + a_0$ have real coefficients, and suppose $P(z) = 0$ for some
   complex $z$. Apply conjugation to the whole equation $P(z) = 0$. Using step 1 on each
   coefficient and $z^k$, what equation about $\bar z$ do you obtain?
3. Conclude something about whether $\bar z$ is also a root. Where exactly did you use that the
   coefficients are real?
4. Now imagine the coefficients are merely **rational**, and $z = a + b\sqrt d$ with $a, b, d$
   rational and $\sqrt d$ irrational. What plays the role of "conjugation" here, and does the same
   argument go through?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Complex Conjugate Root Theorem.** If $P$ has **real** coefficients and $z = a + bi$ is a root,
then its conjugate $\bar z = a - bi$ is also a root (with the same multiplicity). Hence non-real
roots of real polynomials come in conjugate pairs, and every odd-degree real polynomial has at
least one real root.

**Surd Conjugate Root Theorem.** If $P$ has **rational** coefficients and $a + b\sqrt d$ is a root
($a,b \in \QQ$, $d$ not a perfect square), then $a - b\sqrt d$ is also a root.

### Proof

**Complex case.** Let $P(x) = \sum_k a_k x^k$ with each $a_k \in \RR$, and $P(z) = 0$. Take
conjugates:
$$0 = \overline{0} = \overline{P(z)} = \overline{\sum_k a_k z^k} = \sum_k \overline{a_k}\,\overline{z}^{\,k} = \sum_k a_k \bar z^{\,k} = P(\bar z),$$
where $\overline{a_k} = a_k$ because $a_k$ is real, and conjugation distributes over sums and
products. So $P(\bar z) = 0$: $\bar z$ is a root. For multiplicity, note $(x - z)(x - \bar z) =
x^2 - 2\operatorname{Re}(z)x + |z|^2$ has real coefficients, so it divides $P$ over $\RR$; iterating
on the real quotient preserves the pairing.

**Surd case.** The map $\sigma(a + b\sqrt d) = a - b\sqrt d$ satisfies $\sigma(u+v) = \sigma(u) +
\sigma(v)$ and $\sigma(uv) = \sigma(u)\sigma(v)$ for $u, v \in \QQ(\sqrt d)$, and fixes rationals.
Applying $\sigma$ to $P(a + b\sqrt d) = 0$ (rational coefficients fixed) gives $P(a - b\sqrt d) =
0$ by the identical computation. $\blacksquare$

### Worked Instance

Find a monic polynomial of least degree with **rational** coefficients having $1 + \sqrt2$ and $3i$
as roots. By the surd theorem, $1 - \sqrt2$ is forced; by the complex theorem, $-3i$ is forced. So
the four roots are $1 \pm \sqrt2$ and $\pm 3i$. Build the real/rational quadratic factors:
$$\big(x - (1+\sqrt2)\big)\big(x - (1-\sqrt2)\big) = x^2 - 2x - 1,$$
$$\big(x - 3i\big)\big(x + 3i\big) = x^2 + 9.$$
The minimal polynomial is $(x^2 - 2x - 1)(x^2 + 9) = x^4 - 2x^3 + 8x^2 - 18x - 9$, degree $4$ with
rational coefficients — the smallest possible.

### Pitfalls

- The pairing needs **real** coefficients for the complex theorem and **rational** coefficients for
  the surd theorem. A polynomial like $x - (2 + 3i)$ has non-real coefficients, so $2 - 3i$ is
  *not* forced.
- The surd theorem is about a single quadratic irrational $\sqrt d$; a root like $\sqrt2 + \sqrt3$
  has *more* conjugates ($\pm\sqrt2 \pm\sqrt3$), so the minimal polynomial can jump to degree $4$.
- Multiplicities match: a double non-real root forces its conjugate to be double too.

:::
:::

## Connections

Prereqs: the Factor Theorem (to build the polynomial from paired roots). This theorem explains why
real polynomials factor into real linear and quadratic pieces, underlies minimal-polynomial
constructions, and connects to field automorphisms (a first glimpse of Galois conjugation).
Recognition trigger: "a polynomial with real/rational coefficients has root $z$ — find another
root or the minimal polynomial."
