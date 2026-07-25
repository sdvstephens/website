Before solving anything, you can often say how many positive roots a polynomial has just by
reading the signs of its coefficients left to right. For $x^3 - x^2 - x + 1$, the signs go
$+,-,-,+$ — two switches — and indeed it has exactly two positive roots.

## Discovery

1. Count the **sign changes** in the coefficient list (ignoring zero coefficients) of
   $P(x) = x^3 - x^2 - x + 1$ read left to right. How many are there?
2. Factor $P(x) = x^3 - x^2 - x + 1$ completely (try small roots via the Factor Theorem). How many
   *positive* real roots does it actually have? Compare with your count in step 1.
3. Take a polynomial you know has all-positive coefficients, like $x^2 + 3x + 2$. How many sign
   changes? How many positive roots? What does zero sign changes seem to guarantee?
4. To probe **negative** roots, consider $P(-x)$: substitute $-x$ for $x$ and count the sign
   changes of the resulting coefficients. Why does a positive root of $P(-x)$ correspond to a
   negative root of $P(x)$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Descartes' Rule of Signs.** Let $P(x)$ be a polynomial with real coefficients, written in
descending order with nonzero terms, and let $V$ be the number of sign changes in its coefficient
sequence. Then the number of **positive** real roots (counted with multiplicity) equals $V$ or
$V$ minus a positive even integer; in symbols, it is $V - 2m$ for some integer $m \ge 0$, hence
$\le V$ and of the same parity as $V$. Applying the rule to $P(-x)$ bounds the number of
**negative** real roots the same way. (In particular, $V = 0$ forces no positive roots, and
$V = 1$ forces exactly one.)

### Proof

We prove the two structural facts: the count is $\le V$ and has the same parity as $V$. Assume
$P(0) \ne 0$ (else factor out $x^k$; that shifts no positive roots).

**Parity.** Order the positive roots and consider the sign of $P$ at $x = 0^+$ and $x \to +\infty$.
As $x \to +\infty$, $\operatorname{sgn} P(x)$ equals the sign of the leading coefficient; at
$x = 0^+$, it equals the sign of the constant term (the lowest nonzero coefficient). $P$ changes
sign an **odd** number of times on $(0, \infty)$ iff those two end signs differ, and the number of
sign changes of $P$ across $(0,\infty)$ has the same parity as the number of positive roots of odd
multiplicity. One checks the parity of "leading sign vs. constant sign" matches the parity of $V$
(the total sign changes of the coefficient list), because each coefficient sign flip toggles the
running product. Hence (number of positive roots, with multiplicity) $\equiv V \pmod 2$.

**Upper bound $\le V$.** Induct on degree. If $P$ has a positive root $r$, write $P(x) = (x -
r)Q(x)$. Multiplying $Q$ by $(x - r)$ with $r \gt 0$ **strictly increases** the number of sign
changes by an odd amount (at least $1$): a short computation on the coefficient convolution shows
$V(P) \ge V(Q) + 1$. So each positive root accounts for at least one sign change, and by induction
the number of positive roots is $\le V$. Combined with the parity result, the count is $V - 2m$ for
some $m \ge 0$. $\blacksquare$

### Worked Instance

$P(x) = x^3 - x^2 - x + 1$. Coefficient signs: $+, -, -, +$ — the changes are $+\to-$ (once) and
$-\to+$ (once), so $V = 2$. Descartes allows $2$ or $0$ positive roots. Now $P(-x) = -x^3 - x^2 +
x + 1$, signs $-, -, +, +$: one change ($-\to+$), so exactly $1$ negative root. Factoring confirms:
$P(x) = (x-1)^2(x+1)$, with positive roots $1, 1$ (that's $2$) and negative root $-1$ (that's $1$).
The rule pinned the negative count exactly and gave the right parity for the positive count.

### Pitfalls

- The rule gives a **bound and a parity**, not always an exact count: $V$ positive roots or fewer
  by an even number. Only $V \in \{0, 1\}$ forces an exact value.
- Count roots **with multiplicity**, and drop zero coefficients when counting sign changes (a $0$
  is not a sign).
- For negative roots, analyze $P(-x)$, **not** $P(x)$ read backwards. And $x = 0$ roots (a factor
  $x^k$) are separate — pull them out first.

:::
:::

## Connections

Prereqs: the Factor Theorem (each positive root peels off a factor, driving the sign-change
argument). Descartes' rule is a fast pre-screen before root-finding and pairs with the Rational
Root Theorem (limits candidates) and bounds on roots. Recognition trigger: "how many positive/real
roots can this polynomial have?" — count sign changes before computing anything.
