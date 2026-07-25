To find $47 \cdot 53 \bmod 10$ you could compute $2491$ and read the last digit — or you could
notice $47 \equiv 7$ and $53 \equiv 3$, multiply the small ones, $7 \cdot 3 = 21 \equiv 1$, and stop.
Replacing numbers by congruent ones *before* adding or multiplying never changes the answer modulo
$m$. Why is that substitution always safe?

## Discovery

1. Work modulo $10$, where $47 \equiv 7$ and $53 \equiv 3$. Compute $47 + 53 \bmod 10$ and
   $7 + 3 \bmod 10$ — do they match? Compute $47 \cdot 53 \bmod 10$ and $7 \cdot 3 \bmod 10$ — do
   those match? Propose a general rule for swapping congruent numbers.
2. Prove the addition half. Suppose $a \equiv a'$ and $b \equiv b' \pmod m$, so $m \mid (a - a')$ and
   $m \mid (b - b')$. Form the difference $(a + b) - (a' + b')$ and rewrite it using those two known
   multiples of $m$. Does $m$ divide it?
3. Prove the product half. Writing $a' = a + sm$ and $b' = b + tm$ for integers $s, t$, expand the
   difference $a'b' - ab$ and factor a single $m$ out of the whole thing. Which integer is left
   multiplying $m$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix $m \ge 1$. If $a \equiv a'$ and $b \equiv b' \pmod m$, then
$$a + b \equiv a' + b',\qquad a - b \equiv a' - b',\qquad ab \equiv a'b' \pmod m,$$
and, iterating the product rule, $a^k \equiv a'^{\,k} \pmod m$ for every integer $k \ge 1$. So
addition, subtraction, multiplication, and raising to a fixed power are all **well-defined on
residue classes**: you may replace any operand by a congruent one before computing. In particular
you may reduce numbers mod $m$ at any stage of a $+,-,\times$ computation.

### Proof

Suppose $a \equiv a'$ and $b \equiv b' \pmod m$, so $a - a' = sm$ and $b - b' = tm$ for integers
$s, t$.

*Addition and subtraction.* $(a + b) - (a' + b') = (a - a') + (b - b') = (s + t)m$, a multiple of
$m$, so $a + b \equiv a' + b'$. Likewise $(a - b) - (a' - b') = (s - t)m$, giving $a - b \equiv
a' - b'$ (`ari-addition` supplies the regrouping).

*Multiplication.* Write $a' = a - sm$ and $b' = b - tm$. Then, expanding with the distributive law
(`ari-multiplication`),
$$ab - a'b' = ab - (a - sm)(b - tm) = ab - \big(ab - a t m - b s m + s t m^2\big)
= (a t + b s - s t m)\,m,$$
a multiple of $m$. Hence $ab \equiv a'b' \pmod m$.

*Powers.* Induct on $k$. Base $k = 1$ is $a \equiv a'$. If $a^k \equiv a'^{\,k}$, apply the product
rule to the two congruences $a^k \equiv a'^{\,k}$ and $a \equiv a'$ to get
$a^{k+1} = a^k\cdot a \equiv a'^{\,k}\cdot a' = a'^{\,k+1}$. By induction $a^k \equiv a'^{\,k}$ for
all $k \ge 1$.

Because each result class is unchanged when an operand is swapped for a congruent one, the
operations descend to well-defined operations on residue classes. $\blacksquare$

### Worked Instance

Resolve the Hook: $47 \equiv 7$ and $53 \equiv 3 \pmod{10}$, so
$$47 \cdot 53 \equiv 7 \cdot 3 = 21 \equiv 1 \pmod{10},$$
no need for $2491$. The power rule tames large exponents too: to get $7^{100} \bmod 10$, note
$7^2 = 49 \equiv -1 \pmod{10}$, hence
$$7^{100} = (7^2)^{50} \equiv (-1)^{50} = 1 \pmod{10},$$
recovering the last digit of $7^{100}$ in one line.

### Pitfalls

- **Division is not on the list.** You may add, subtract, multiply, and take powers, but you cannot
  in general cancel a common factor: $6 \equiv 2 \pmod 4$ yet dividing by $2$ gives the false
  $3 \equiv 1 \pmod 4$. Cancellation needs an invertible factor (a later node).
- **Reduce the base, never the exponent.** $a \equiv a' \pmod m$ lets you shrink the base of a power,
  but the exponent lives in a different world — $2^{10}$ and $2^{0}$ are not forced equal mod $10$
  just because $10 \equiv 0$.
- **Keep one modulus throughout.** Every congruence in a chain must be to the same $m$.
- **Well-defined means representative-independent.** The point is that the *answer's class* does not
  depend on which representatives you picked, which is exactly what the proof establishes.

:::
:::

## Connections

This theorem is the engine of modular arithmetic: it upgrades congruence
(`nt-congruence-intro`) from a static relation into a calculus, letting you reduce as you go using
addition (`ari-addition`) and multiplication (`ari-multiplication`). It is what makes divisibility
rules fall out of $10 \equiv 1$ or $-1$ (`nt-divisibility-rules-derived`), what powers last-digit
cycles, and the launching point for asking when division is possible
(`nt-modular-inverse-elem`, `nt-solving-congruences`); at the competition level it is packaged as
modular arithmetic (`nt-mod-arithmetic`) feeding Fermat's little theorem (`nt-fermat-little`).
Recognition trigger: any "find $\dots \bmod m$" with big numbers — reduce first, then compute.

## History

That you can add, subtract, and multiply remainders directly — without returning to the original numbers — is the practical heart of Gauss's congruence calculus from the *Disquisitiones Arithmeticae* ($1801$). Gauss proved that congruence is preserved under these operations, which is exactly why he chose a notation echoing the equals sign: modular arithmetic behaves like ordinary arithmetic on the finite set of residue classes. Fermat and Euler had exploited special cases in the seventeenth and eighteenth centuries, but Gauss made the operations systematic and general. His rules revealed the residue classes as a genuine algebraic system, later recognized as the ring $\mathbb{Z}/m\mathbb{Z}$. The result mattered because it lets enormous computations collapse to arithmetic on a handful of small numbers, a fact indispensable to divisibility tests, cryptography, and computer science.
