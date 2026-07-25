Multiply every number from $1$ to $6$: you get $720$. Now reduce mod $7$: $720 = 7\cdot 102 + 6$,
so $720 \equiv 6 \equiv -1 \pmod 7$. Try it mod $11$: $10! = 3{,}628{,}800 \equiv -1 \pmod{11}$.
The product of everything below a prime always lands one short of a multiple of it. Why?

## Discovery

Work mod a fixed prime $p$; take $p = 13$ to have numbers to touch.
1. Each of $1,2,\dots,12$ has a multiplicative inverse mod $13$. Find the inverse of $2$, of $3$,
   of $5$. Is any number its own inverse other than $1$ and $12$? Try to find one, or argue you
   can't.
2. A number $a$ is its own inverse mod $13$ exactly when $a^2 \equiv 1$. Solve $a^2 \equiv 1
   \pmod{13}$ completely. How many solutions, and which residues are they?
3. The residues $2,3,\dots,11$ (everything except $1$ and $12$) — pair each with its inverse.
   Can a residue ever be paired with *itself* here? What does each pair contribute to the product
   $2\cdot 3 \cdots 11$ mod $13$?
4. Now reassemble $12! = 1\cdot(2\cdot 3\cdots 11)\cdot 12$ mod $13$ from the pieces in step 3.
   What do you get?
5. Where in this argument did you use that $13$ is *prime*? Would the pairing survive if the
   modulus were composite, say $12$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Wilson's Theorem.** For a prime $p$,
$$(p-1)! \equiv -1 \pmod p.$$
The converse also holds: if $n \gt 1$ and $(n-1)! \equiv -1 \pmod n$, then $n$ is prime. So the
congruence is a *characterization* of primality (though a computationally useless one).

### Proof

The cases $p = 2$ ($1! = 1 \equiv -1 \pmod 2$) and $p = 3$ ($2! = 2 \equiv -1 \pmod 3$) hold
directly; assume $p \ge 5$.

**Every residue has a unique inverse.** For each $a \in \{1,2,\dots,p-1\}$, since $\gcd(a,p)=1$
there is a unique $a^{-1} \in \{1,\dots,p-1\}$ with $a\,a^{-1} \equiv 1 \pmod p$. Inversion is an
involution on this set: $(a^{-1})^{-1} = a$.

**Which residues are self-paired?** We have $a \equiv a^{-1}$ iff $a^2 \equiv 1 \pmod p$, i.e.
$p \mid (a-1)(a+1)$. Since $p$ is prime, $p \mid a-1$ or $p \mid a+1$, giving $a \equiv 1$ or
$a \equiv -1 \equiv p-1 \pmod p$. So among $1,\dots,p-1$ the *only* self-inverse residues are
$1$ and $p-1$.

**Pair off the middle.** Consider the product $(p-1)! = \prod_{a=1}^{p-1} a$. Strip off the two
self-inverse elements: $(p-1)! = 1 \cdot (p-1) \cdot \!\!\prod_{a=2}^{p-2}\! a$. The remaining
$p-3$ residues $\{2,3,\dots,p-2\}$ contain no self-inverse element, and inversion maps this set
to itself (if $2 \le a \le p-2$ then $a^{-1} \notin \{1,p-1\}$, else $a$ would be $1$ or $p-1$).
Because $p-3$ is even, these residues split into $\tfrac{p-3}{2}$ disjoint pairs $\{a, a^{-1}\}$
with $a \ne a^{-1}$, and each pair multiplies to
$$a\cdot a^{-1} \equiv 1 \pmod p.$$
Hence $\prod_{a=2}^{p-2} a \equiv 1^{(p-3)/2} = 1 \pmod p$, and
$$(p-1)! \equiv 1 \cdot (p-1) \cdot 1 \equiv p-1 \equiv -1 \pmod p.$$

**Converse.** Suppose $n \gt 1$ is composite and write $n = ab$ with $1 \lt a \le b \lt n$. If
$a \lt b$, both $a$ and $b$ appear as distinct factors in $(n-1)! = 1\cdot 2 \cdots (n-1)$, so
$n = ab \mid (n-1)!$, giving $(n-1)! \equiv 0 \not\equiv -1 \pmod n$. If instead $a = b$ (so
$n = a^2$), then for $n \gt 4$ we have $a \lt 2a \lt n$, so both $a$ and $2a$ appear as factors,
whence $2a^2 = 2n \mid (n-1)!$ and again $(n-1)! \equiv 0 \pmod n$; the sole exceptional case
$n = 4$ gives $3! = 6 \equiv 2 \not\equiv -1 \pmod 4$. In every composite case $(n-1)! \not\equiv
-1$, so the congruence forces $n$ prime. $\blacksquare$

### Worked Instance

Resolve the hook for $p = 7$ *without* multiplying out $6!$. Pair the middle residues
$\{2,3,4,5\}$ by inverses mod $7$: $2\cdot 4 = 8 \equiv 1$ and $3\cdot 5 = 15 \equiv 1$. The
self-inverse residues are $1$ and $6$. So
$$6! \equiv \underbrace{1}_{}\cdot \underbrace{(2\cdot4)}_{\equiv 1}\cdot \underbrace{(3\cdot5)}_{\equiv 1}\cdot \underbrace{6}_{} \equiv 6 \equiv -1 \pmod 7,$$
matching the hook's $720 \equiv 6$.

A typical *use*: evaluate $\dfrac{(p-1)!}{2}\bmod p$ shape problems, or reduce a large factorial.
E.g. $16! \bmod 17$: by Wilson, $16! \equiv -1 \equiv 16 \pmod{17}$ immediately.

### Pitfalls

- The modulus must be **prime**. $(n-1)! \equiv 0$, not $-1$, for composite $n \gt 4$ — do not
  apply Wilson to a composite.
- It is $(p-1)!$, not $p!$ (which is $\equiv 0$) and not $(p-1)! \equiv +1$. The answer is $-1$,
  i.e. $p-1$.
- The pairing argument needs the *middle* block $\{2,\dots,p-2\}$ to have even size; that is why
  $1$ and $p-1$ must be pulled out first. Forgetting to isolate the two self-inverse residues is
  the classic slip.
- The converse makes Wilson a primality *test* in principle only: computing $(n-1)! \bmod n$ is
  far slower than trial division.

:::
:::

## Connections

Prereq: modular inverses — Wilson is the cleanest showcase of "pair each element with its
inverse and see what survives." The self-inverse analysis ($a^2\equiv1$) is the same lemma that
drives quadratic-residue counting, and Wilson feeds directly into Fermat's two-squares theorem
(where $\left(\tfrac{p-1}{2}\right)!$ becomes a square root of $-1$ mod $p\equiv1\pmod4$).
Recognition trigger: a factorial $(p-1)!$ or a product of *all* nonzero residues mod a prime, or
any request to simplify a near-full factorial modulo a prime.
