The Remainder Theorem tells you the *remainder* when $2x^3 - 3x^2 + 4$ is divided by $x - 3$ in one
substitution — but it says nothing about the *quotient*. If you actually need the whole factored
picture, say to peel off a known root and reduce the degree, you need the division itself. Can the
grade-school long-division ritual be transplanted, letters and all, onto polynomials?

## Discovery

1. Imitate integer long division, but organize by degree. To divide $2x^3 - 3x^2 - 11x + 6$ by
   $x + 2$: what single monomial times $x + 2$ reproduces the leading term $2x^3$? Write it as the
   first quotient term, subtract $(\text{that term})(x+2)$ from the dividend, and repeat on the new
   leading term until the running remainder has degree below $1$. Record the quotient and remainder.
2. Notice that when the divisor is $x - c$, only the *coefficients* ever move; the powers of $x$
   are pure bookkeeping. Strip the algorithm down to a coefficient-only shortcut for divisor
   $x - 3$: bring the leading coefficient down, multiply it by $3$, add to the next coefficient,
   multiply that sum by $3$, and so on across the row. Apply it to $2x^3 - 3x^2 + 4$ (mind the
   missing $x^1$ term). Compare the last number produced to $P(3)$.
3. In the identity $P(x) = (x-c)Q(x) + R$ from your division, why is $\deg R$ forced below
   $\deg(x-c) = 1$ — that is, why must $R$ be a constant? What controls $\deg Q$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Polynomial division algorithm.** For polynomials $A(x)$ and $B(x) \ne 0$ over a field, there
exist *unique* polynomials $Q(x)$ (the quotient) and $R(x)$ (the remainder) with
$$A(x) = B(x)\,Q(x) + R(x), \qquad R = 0 \ \text{or}\ \deg R \lt \deg B.$$
**Long division** computes $Q, R$ by repeatedly cancelling the current leading term. When
$\deg A \ge \deg B$, $\deg Q = \deg A - \deg B$. **Synthetic division** is the coefficient-only
transcription of long division for a monic linear divisor $x - c$: the running row produces the
coefficients of $Q$, and the final entry is the remainder $R = P(c)$, matching the Remainder
Theorem.

### Proof

*Existence.* Induct on $\deg A$. If $A = 0$ or $\deg A \lt \deg B$, take $Q = 0$, $R = A$. Otherwise
let $A$ have leading term $a x^m$ and $B$ leading term $b x^n$ with $m \ge n$ and $b \ne 0$ (a field,
so $b$ is invertible). Form
$$A_1(x) = A(x) - \frac{a}{b}\,x^{m-n} B(x).$$
The subtracted term has leading term $a x^m$, cancelling that of $A$, so $\deg A_1 \lt \deg A$ (or
$A_1 = 0$). By the inductive hypothesis $A_1 = B Q_1 + R$ with $R = 0$ or $\deg R \lt \deg B$; then
$$A = \frac{a}{b} x^{m-n} B + A_1 = B\!\left(\tfrac{a}{b} x^{m-n} + Q_1\right) + R,$$
so $Q = \tfrac{a}{b}x^{m-n} + Q_1$ works. Each subtraction lowers the degree by at least one, so the
process is exactly the long-division steps and terminates.

*Uniqueness.* If $A = BQ_1 + R_1 = BQ_2 + R_2$ with both remainders below $\deg B$, then
$B(Q_1 - Q_2) = R_2 - R_1$. If $Q_1 \ne Q_2$, the left side has degree $\ge \deg B$, while the right
side has degree $\lt \deg B$ — impossible. So $Q_1 = Q_2$, whence $R_1 = R_2$.

*Synthetic division.* Take $B = x - c$. Writing $A(x) = \sum_{k=0}^m a_k x^k$ and
$Q(x) = \sum_{k=0}^{m-1} q_k x^k$, expand $A = (x-c)Q + R$ and match coefficients from the top:
$q_{m-1} = a_m$, and $q_{k-1} = a_k + c\,q_k$ for $k = m-1, \dots, 1$, with $R = a_0 + c\,q_0$. That
recurrence — "bring down, multiply by $c$, add" — is precisely the synthetic-division row, and its
last output $R = A(c)$ recovers the Remainder Theorem. $\blacksquare$

### Worked Instance

Long division of $2x^3 - 3x^2 - 11x + 6$ by $x + 2$ (so $c = -2$):
$$2x^3 - 3x^2 - 11x + 6 = (x+2)(2x^2 - 7x + 3) + 0,$$
found term by term ($2x^3 \div x = 2x^2$; subtract to get $-7x^2 - 11x + 6$; $-7x^2 \div x = -7x$;
subtract to get $3x + 6$; $3x \div x = 3$; subtract to get $0$). The zero remainder confirms $x + 2$
is a factor. Now synthetic division of $2x^3 + 0x^2 - 3x + 4$ by $x - 3$ (insert the missing $x^2$
coefficient as $0$):
$$\begin{array}{c|cccc}
3 & 2 & 0 & -3 & 4\\
  &   & 6 & 18 & 45\\ \hline
  & 2 & 6 & 15 & 49
\end{array}$$
so $Q(x) = 2x^2 + 6x + 15$ and $R = 49$. Cross-check with the Remainder Theorem:
$P(3) = 54 - 9 + 4 = 49$. ✓

### Pitfalls

- **Insert placeholder zeros** for every missing power in the dividend, or the columns misalign and
  every later coefficient is wrong.
- **Synthetic division uses the root, not the divisor.** Dividing by $x + 2$ means $c = -2$;
  dividing by $x - 3$ means $c = +3$. The sign flip is the most common error.
- **Synthetic division is for $x - c$ only.** For a divisor like $2x - 3$, either divide out the
  leading coefficient first (root $c = 3/2$, then rescale $Q$) or fall back to long division.
- **The remainder's degree is below the divisor's**, not below the dividend's; stop when the running
  remainder drops below $\deg B$, not when it becomes a single term.

:::
:::

## Connections

This is the computational engine behind several downstream nodes. It supplies the *quotient* that the
Factor Theorem ([alg-remainder-factor]) only implies, so a known root can actually be divided out to
lower the degree — the recurring move in **root-finding and bounds** ([alg-poly-roots-bounds]) and in
building **rational-function** structure ([alg-rational-functions]). The coefficient-matching it
formalizes reappears as the **method of undetermined coefficients** ([alg-undetermined-coefficients]).
Recognition trigger: "one root is known, reduce the degree," "find the quotient," or "simplify a
rational expression whose numerator outweighs its denominator."
