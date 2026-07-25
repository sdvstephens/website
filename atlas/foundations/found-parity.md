Take the numbers $1$ through $10$. Can you split them into pairs so that the two numbers in each pair differ by an even amount, using all ten? Or place $+$ and $-$ signs on $1, 2, \dots, 10$ to make the total zero? One of these is impossible — and you can prove it without trying a single arrangement.

## Discovery

1. Every integer is even or odd — that is, congruent to $0$ or $1 \pmod 2$. Compute the parity (even/odd) of $a + b$ in each case: both even, both odd, one of each. What is the rule for the parity of a *sum* in terms of the parities of the parts?
2. From step 1, what is the parity of $1 + 2 + 3 + \cdots + 10$? Count how many odd numbers are in the list; each odd number flips the running parity. Is the total even or odd?
3. Now suppose you attach a sign $\pm 1$ to each of $1,\dots,10$ and add them up, getting some value $T$. Compare the parity of $T$ to the parity of the *unsigned* sum $1 + 2 + \cdots + 10$. Flipping a $+k$ to a $-k$ changes the sum by $2k$, an even amount — so does the parity of the total ever change as you flip signs?
4. Conclude: can a signed total $T$ ever be $0$ if the unsigned sum is odd? What is the "quantity that never changes" doing the work here — and why do we call it an invariant?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **parity** of an integer is its residue mod $2$: **even** ($\equiv 0$) or **odd** ($\equiv 1$). Parity obeys the arithmetic
$$\text{even} \pm \text{even} = \text{even}, \quad \text{odd} \pm \text{odd} = \text{even}, \quad \text{even} \pm \text{odd} = \text{odd},$$
i.e. $a \pm b \equiv a + b \pmod 2$, and $ab$ is odd iff both factors are odd. The power of parity is as an **invariant**: an operation that changes a quantity by an even amount cannot change its parity, so if a target has the "wrong" parity it is unreachable. In particular a signed sum $\sum \pm a_i$ has the same parity as $\sum a_i$, so it can equal $0$ (which is even) only if $\sum a_i$ is even.

### Proof

**Parity arithmetic.** Write each integer as $2k$ (even) or $2k+1$ (odd). Then even $+$ even $= 2k + 2\ell = 2(k+\ell)$ is even; odd $+$ odd $= (2k+1)+(2\ell+1) = 2(k+\ell+1)$ is even; even $+$ odd $= 2k + 2\ell + 1 = 2(k+\ell)+1$ is odd. Subtraction is identical since $-b \equiv b \pmod 2$. For products, $(2k+1)(2\ell+1) = 2(2k\ell + k + \ell) + 1$ is odd, while any factor of the form $2k$ makes the product even. Compactly, reduction mod $2$ turns $\pm$ and $\times$ into addition/multiplication of residues in $\{0,1\}$.

**The invariant.** Consider $\sum_{i} \varepsilon_i a_i$ with each $\varepsilon_i \in \{+1, -1\}$. Compared with the all-plus sum $\sum_i a_i$, each factor $\varepsilon_i a_i$ differs from $a_i$ by either $0$ (if $\varepsilon_i = +1$) or $-2a_i$ (if $\varepsilon_i = -1$), an even amount in both cases. Summing these even differences gives an even change, so
$$\sum_i \varepsilon_i a_i \equiv \sum_i a_i \pmod 2.$$
Hence the parity of any signed total equals the parity of the unsigned total. If $\sum a_i$ is odd, then every signed total is odd, so none can equal $0$ (which is even). $\blacksquare$

### Worked Instance

Can $1, 2, \dots, 10$ receive signs $\pm$ summing to $0$? First the unsigned sum: $1 + 2 + \cdots + 10 = 55$, which is odd (there are five odd numbers among $1..10$, and five odds sum to odd). By the invariant, *every* signed total $\sum \pm k$ is congruent to $55 \equiv 1 \pmod 2$, hence odd — never $0$. So no signing works; the task is impossible, proved without checking a single arrangement, exactly as the Hook promised. (By contrast, $1, 2, 3, 4$ has unsigned sum $10$, even, and indeed $+1 -2 -3 +4 = 0$ succeeds — parity permits it, though it does not guarantee it.)

### Pitfalls

- Parity permitting a result does not guarantee it exists; an *even* target passes the parity test but may still be unreachable for other reasons. Parity only rules things *out*.
- $0$ is even. Forgetting this breaks many parity arguments (e.g. "can the signed sum be $0$?").
- The count of odd terms drives the sum's parity: a sum is odd iff it has an odd *number* of odd summands. Don't add the values when you only need to count odds.
- Parity is the $m = 2$ case of congruence; the same "invariant" idea generalizes to mod $3$, colorings, etc., but the even/odd shortcut is special because $-1 \equiv +1 \pmod 2$.

:::
:::

## Connections

Prereqs: basic congruence (parity is congruence mod $2$). Parity is the first and most-used *invariant* — a quantity preserved by the allowed moves, so mismatched parity certifies impossibility. It is the template for the general invariants of `comb-invariants` and `meta-invariants`, and for coloring arguments (`meta-coloring-parity`); it also drives $n(n+1)$ being even in `found-consecutive-integers`. Recognition trigger: "prove this configuration is impossible," or any process where each move flips or preserves an even/odd count.

## History

The distinction between even and odd numbers is among the most ancient in mathematics, central to the Pythagorean school (6th–5th century BC), which invested it with philosophical significance and used it to classify numbers. Euclid's Elements, Book IX, proves theorems about even and odd and uses a parity argument in characterizing the perfect numbers. Parity gives one of the earliest and most powerful proof techniques: showing that two quantities have different parity proves they cannot be equal, as in the classic proof that $\sqrt{2}$ is irrational. The concept requires nothing beyond divisibility by two, yet it recurs throughout combinatorics, number theory, and even topology. ANABASIS treats parity as a basic and widely reusable tool.
