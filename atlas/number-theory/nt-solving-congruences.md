Solving $3x \equiv 2 \pmod 7$ is quick: multiply both sides by the inverse of $3$. But
$4x \equiv 2 \pmod 6$ is stranger — it has solutions, yet more than one, while $4x \equiv 1 \pmod 6$
has none at all. Linear equations modulo $m$ do not behave like equations over the real numbers.
When does $ax \equiv b \pmod m$ have a solution, and how many?

## Discovery

1. Solve $3x \equiv 2 \pmod 7$. Since $3$ is invertible mod $7$ (its inverse is $5$), multiply both
   sides by that inverse and reduce. What residue must $x$ be, and does it check out?
2. Try $4x \equiv 2 \pmod 6$, where $4$ is not invertible ($\gcd(4,6) = 2$). Test $x = 0,1,\dots,5$
   by hand: how many solutions appear mod $6$, and how are they spaced? Then test $4x \equiv 1
   \pmod 6$ — any solution at all?
3. From your experiments: writing $d = \gcd(a, m)$, what must $d$ divide for $ax \equiv b$ to be
   solvable? When it is, dividing the congruence through by $d$ leaves a new congruence — with which
   modulus, and why is its coefficient now invertible?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For $ax \equiv b \pmod m$, let $d = \gcd(a, m)$.
- **Solvable if and only if $d \mid b$.**
- When $d \mid b$, there are **exactly $d$ solutions modulo $m$**. Dividing through gives
  $\frac{a}{d}\,x \equiv \frac{b}{d} \pmod{m/d}$, where $\gcd(a/d,\, m/d) = 1$, so $a/d$ is
  invertible mod $m/d$ and there is a unique solution $x \equiv x_0 \pmod{m/d}$; the $d$ solutions
  mod $m$ are $x_0,\ x_0 + \tfrac{m}{d},\ \dots,\ x_0 + (d-1)\tfrac{m}{d}$.
- **Coprime case ($d = 1$):** a unique solution $x \equiv a^{-1} b \pmod m$.

### Proof

*Coprime case.* If $\gcd(a, m) = 1$, then $a$ has an inverse $a^{-1}$ mod $m$
(`nt-modular-inverse-elem`). Multiplying $ax \equiv b$ by $a^{-1}$ gives $x \equiv a^{-1}b$, and
conversely $x = a^{-1}b$ satisfies $a(a^{-1}b) \equiv b$. So there is exactly one solution class.

*Necessity of $d \mid b$.* If $ax \equiv b \pmod m$, then $m \mid (ax - b)$, so $ax - b = my$, i.e.
$ax - my = b$. Since $d = \gcd(a, m)$ divides both $a$ and $m$, it divides $ax - my = b$. Hence
solvability requires $d \mid b$.

*Sufficiency and the count.* Suppose $d \mid b$. Because $d \mid a$, $d \mid b$, $d \mid m$,
$$m \mid (ax - b) \iff d\cdot\tfrac{m}{d} \,\Big|\, d\big(\tfrac{a}{d}x - \tfrac{b}{d}\big)
\iff \tfrac{m}{d} \,\Big|\, \big(\tfrac{a}{d}x - \tfrac{b}{d}\big)
\iff \tfrac{a}{d}\,x \equiv \tfrac{b}{d} \pmod{m/d}.$$
Now $\gcd(a/d, m/d) = 1$ (dividing out the gcd leaves coprime quotients, `nt-gcd-elem`), so by the
coprime case there is a unique solution $x \equiv x_0 \pmod{m/d}$. Its solutions modulo the larger
modulus $m$ are all integers $\equiv x_0 \pmod{m/d}$, which split into the $d$ distinct classes
$x_0, x_0 + \tfrac{m}{d}, \dots, x_0 + (d-1)\tfrac{m}{d}$ modulo $m$. $\blacksquare$

### Worked Instance

Resolve the Hook. **$3x \equiv 2 \pmod 7$:** $\gcd(3,7) = 1$ and $3^{-1} \equiv 5$, so
$x \equiv 5\cdot 2 = 10 \equiv 3 \pmod 7$; check $3\cdot 3 = 9 \equiv 2$. **$4x \equiv 2 \pmod 6$:**
$d = \gcd(4,6) = 2$ and $2 \mid 2$, so it is solvable; divide through to $2x \equiv 1 \pmod 3$, where
$2^{-1} \equiv 2$, giving $x \equiv 2 \pmod 3$, i.e. $x \equiv 2$ or $5 \pmod 6$ — two solutions, as
found by hand. **$4x \equiv 1 \pmod 6$:** $d = 2 \nmid 1$, so there is no solution.

### Pitfalls

- **Check $d \mid b$ before solving.** If $\gcd(a,m) \nmid b$ there is no solution; $4x \equiv 1
  \pmod 6$ fails this test.
- **Expect $d$ solutions, not one.** When $d = \gcd(a,m) \gt 1$ (and $d \mid b$) the congruence has
  $d$ solution classes mod $m$, evenly spaced by $m/d$.
- **Reduce to the smaller modulus $m/d$.** After dividing by $d$ the modulus shrinks to $m/d$; the
  unique solution there fans out into $d$ classes mod $m$.
- **You cannot always "just divide by $a$."** Cancelling $a$ is only legal when $a$ is invertible,
  i.e. $\gcd(a, m) = 1$; otherwise divide the whole congruence — coefficient, constant, and modulus —
  by $d$.

:::
:::

## Connections

Solving $ax \equiv b \pmod m$ is division mod $m$ made systematic: the coprime case leans directly on
modular inverses (`nt-modular-inverse-elem`), and the general case peels off $\gcd(a,m)$ using the
coprime-quotient fact from the gcd (`nt-gcd-elem`). Rewritten as $ax - my = b$ it is a linear
Diophantine equation (`nt-linear-diophantine`), and it is the single-congruence building block for
systems and the Chinese Remainder Theorem (`nt-systems-congruences-elem`, `nt-crt`). Recognition
trigger: "solve $ax \equiv b \pmod m$" or "find $x$ with a given remainder condition" — compute
$\gcd(a,m)$, test $d \mid b$, then invert.

## History

Solving a linear congruence $ax \equiv b \pmod{m}$ is an old problem that gained a systematic treatment only gradually. Its ingredients were assembled by Fermat and Euler, whose theorems on powers modulo $m$ clarified when solutions exist, and by the Euclidean algorithm with Bézout's identity, which supplies the modular inverse needed to solve them. Gauss brought these strands together in the *Disquisitiones Arithmeticae* ($1801$), where linear congruences are handled completely: he showed exactly when solutions exist — precisely when $\gcd(a,m)$ divides $b$ — and how many residue classes of solutions there are. This was the modular analogue of solving a linear equation, and it became a template for the harder theory of quadratic and higher congruences that Gauss developed alongside it. It mattered as the entry point to Diophantine problems, the Chinese Remainder Theorem, and cryptographic algorithms that hinge on inverting arithmetic modulo $m$.
