Modulo $7$, multiplying by $3$ can be undone: $3 \cdot 5 = 15 \equiv 1$, so $5$ acts as "$1/3$" — a
multiplicative inverse. But modulo $6$, no multiple of $2$ is ever $\equiv 1$; the number $2$ has no
inverse at all. When does a number possess a multiplicative inverse modulo $m$, and when is it
stuck?

## Discovery

1. Modulo $7$, run through $3\cdot 1, 3\cdot 2, \dots, 3\cdot 6$ and reduce each mod $7$. Do you ever
   hit $1$? If so, which multiplier produced it?
2. Modulo $6$, run through $2\cdot 1, 2\cdot 2, \dots, 2\cdot 5$ and reduce mod $6$. Do you ever hit
   $1$? Look at the residues that $2$ produces and say what they all have in common — could any such
   residue equal $1$?
3. Compare the two experiments. Compute $\gcd(3, 7)$ and $\gcd(2, 6)$. Form a conjecture connecting
   "$a$ has an inverse mod $m$" to $\gcd(a, m)$, and test it on $a = 4, m = 6$ and $a = 5, m = 6$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix $m \ge 1$. A number $a$ has a **multiplicative inverse modulo $m$** — an integer $x$ with
$$a x \equiv 1 \pmod m$$
— **if and only if** $\gcd(a, m) = 1$ (that is, $a$ is coprime to $m$). When an inverse exists it is
**unique modulo $m$**, written $a^{-1}$. Thus you may "divide by $a$" modulo $m$ exactly when $a$ is
coprime to the modulus.

### Proof

*Inverse $\Rightarrow$ coprime.* If $ax \equiv 1 \pmod m$, then $m \mid (ax - 1)$, so $ax - 1 = my$
for some integer $y$, i.e. $ax - my = 1$. Any common divisor of $a$ and $m$ divides the left side,
hence divides $1$; so $\gcd(a, m) = 1$.

*Coprime $\Rightarrow$ inverse.* Suppose $\gcd(a, m) = 1$. Consider the $m$ products
$a\cdot 0, a\cdot 1, \dots, a\cdot(m-1)$ reduced mod $m$. They are pairwise incongruent: if
$ai \equiv aj \pmod m$ with $0 \le i, j \le m-1$, then $m \mid a(i - j)$; since $a$ shares no prime
factor with $m$ (coprimality), every prime power dividing $m$ must divide $i - j$, so $m \mid (i-j)$
— and $|i - j| \lt m$ forces $i = j$. Hence the $m$ products occupy $m$ distinct residue classes,
which must be *all* of $0, 1, \dots, m-1$. In particular some $x$ gives $ax \equiv 1 \pmod m$.

*Uniqueness.* If $ax \equiv 1$ and $ax' \equiv 1 \pmod m$, then multiplying $x' \equiv x'\cdot 1
\equiv x'(ax) \equiv (ax')x \equiv x \pmod m$, using that congruence respects multiplication
(`nt-mod-operations`). So the inverse is unique mod $m$. $\blacksquare$

*(The coprime $\Rightarrow$ inverse direction is Bézout's identity in disguise: the relation
$ax - my = 1$ from the first part is exactly an inverse, developed in full at `nt-bezout`.)*

### Worked Instance

Resolve the Hook. Modulo $7$, testing $3\cdot 5 = 15 \equiv 1$, so $3^{-1} \equiv 5 \pmod 7$, and
indeed $\gcd(3,7) = 1$. Modulo $6$, $2$ has no inverse because $\gcd(2, 6) = 2 \ne 1$: every multiple
of $2$ is even, and no even number is $\equiv 1 \pmod 6$. Meanwhile $5$ is coprime to $6$, and
$5 \cdot 5 = 25 \equiv 1 \pmod 6$, so $5$ is its own inverse mod $6$.

### Pitfalls

- **Inverse exists only for coprime residues.** Modulo a composite $m$, the numbers sharing a factor
  with $m$ (like $2, 3, 4$ mod $6$) have no inverse at all.
- **The inverse is a class, unique mod $m$.** "$3^{-1} \equiv 5 \pmod 7$" names a residue class, not
  a fraction; any member of that class works.
- **Do not read $a^{-1}$ as $1/a$ in $\ZZ$.** It means "the $x$ with $ax \equiv 1$," which may look
  nothing like $1/a$ — e.g. $3^{-1} \equiv 5$, not a small fraction.
- **This is the multiplicative inverse.** It is unrelated to the additive inverse $-a$; both exist,
  but only the multiplicative one needs coprimality.

:::
:::

## Connections

Modular inverses answer "when can I divide mod $m$?" and the answer — coprimality — ties the gcd
(`nt-gcd-elem`) to the arithmetic of congruences (`nt-mod-operations`); the existence proof is a
first, concrete encounter with Bézout's identity (`nt-bezout`, `nt-modular-inverses`). Inverses are
what make linear congruences solvable (`nt-solving-congruences`) and underpin Fermat's little theorem
and the Chinese Remainder Theorem. Recognition trigger: any wish to "cancel $a$," "divide both sides
by $a$," or "solve $a x \equiv \cdots$" modulo $m$ — first check $\gcd(a, m) = 1$.

## History

The modular inverse — a number that "undoes" multiplication modulo $m$ — grew out of two seventeenth- and eighteenth-century developments. Pierre de Fermat's little theorem ($1640$) and its generalization by Leonhard Euler (published $1763$) showed that when $a$ is coprime to $m$, some power of $a$ returns to $1$, which quietly guarantees an inverse. Independently, the ancient Euclidean algorithm, sharpened into the identity later named for Étienne Bézout in the eighteenth century, gave a direct way to construct the inverse by expressing $\gcd(a,m)=1$ as a combination of $a$ and $m$. Gauss's congruence framework ($1801$) unified these into the clean statement that $a$ is invertible modulo $m$ exactly when it is coprime to $m$. It mattered because inverses are what make division possible in modular arithmetic, and they are the computational core of solving congruences and of modern public-key cryptography.
