The cubic $2x^3 - 3x^2 - 11x + 6$ has a rational root. Rather than guessing among infinitely many
fractions, you can write down a *short finite list* that must contain it — built only from the
first and last coefficients.

## Discovery

1. Suppose $P(x) = a_n x^n + \cdots + a_1 x + a_0$ (integer coefficients) has a rational root
   $x = p/q$ in lowest terms ($\gcd(p, q) = 1$). Substitute and multiply through by $q^n$ to clear
   denominators. Write the resulting integer equation.
2. In that equation, isolate the single term containing $a_0 q^n$ on one side. Every other term
   has a visible factor of $p$. What does that force about the divisibility of $a_0 q^n$ by $p$?
   Now use $\gcd(p,q) = 1$.
3. Symmetrically, isolate the term $a_n p^n$ instead. Every remaining term has a factor of $q$.
   What does that force about $a_n$?
4. Combine the two divisibility facts into a rule: which integers can $p$ be, and which can $q$ be?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_0$ have **integer** coefficients with
$a_n \ne 0$ and $a_0 \ne 0$. If $P$ has a rational root $x = \dfrac{p}{q}$ in lowest terms, then
$$p \mid a_0 \qquad\text{and}\qquad q \mid a_n.$$
Thus every rational root is of the form $\dfrac{\text{(divisor of } a_0)}{\text{(divisor of } a_n)}$
(with signs), giving a finite candidate list to test via the Factor Theorem. (If $a_0 = 0$, factor
out $x$ first.)

### Proof

Write $x = p/q$ in lowest terms and substitute into $P(p/q) = 0$; multiply by $q^n$:
$$a_n p^n + a_{n-1} p^{n-1} q + \cdots + a_1 p q^{n-1} + a_0 q^n = 0.$$
**Divisor of $a_0$:** move $a_0 q^n$ to the other side:
$$a_0 q^n = -\big(a_n p^n + a_{n-1} p^{n-1} q + \cdots + a_1 p q^{n-1}\big) = -p\big(a_n p^{n-1} + \cdots + a_1 q^{n-1}\big).$$
The right side is a multiple of $p$, so $p \mid a_0 q^n$. Since $\gcd(p, q) = 1$, also
$\gcd(p, q^n) = 1$, hence $p \mid a_0$. **Divisor of $a_n$:** symmetrically move $a_n p^n$:
$$a_n p^n = -q\big(a_{n-1}p^{n-1} + \cdots + a_0 q^{n-1}\big),$$
so $q \mid a_n p^n$, and $\gcd(q, p^n) = 1$ gives $q \mid a_n$. $\blacksquare$

### Worked Instance

$P(x) = 2x^3 - 3x^2 - 11x + 6$. Here $a_0 = 6$ (divisors $\pm1, \pm2, \pm3, \pm6$) and $a_n = 2$
(divisors $\pm1, \pm2$). Candidate rational roots $p/q$: $\pm1, \pm2, \pm3, \pm6, \pm\tfrac12,
\pm\tfrac32$. Test with the Remainder Theorem: $P(3) = 54 - 27 - 33 + 6 = 0$, so $x = 3$ is a root.
Divide out $(x - 3)$: $P(x) = (x-3)(2x^2 + 3x - 2) = (x-3)(2x - 1)(x + 2)$. The rational roots are
$3, \tfrac12, -2$ — all on the predicted list.

### Pitfalls

- The theorem requires **integer** coefficients. Clear denominators first if the coefficients are
  fractions.
- It only limits **rational** roots; a polynomial may have all irrational or complex roots and the
  candidate list simply produces no hits (that itself is information: no rational roots).
- The fraction $p/q$ must be **in lowest terms** for the argument — and don't forget the negative
  candidates.

:::
:::

## Connections

Prereqs: the Factor/Remainder Theorem (to test each candidate). The Rational Root Theorem is the
standard opening move for factoring integer polynomials by hand and for *proving irrationality*
(e.g. $\sqrt2$ is a root of $x^2 - 2$ with no rational candidate surviving). Recognition trigger:
"factor this polynomial with integer coefficients," or "show this number is irrational," or "find
all rational solutions."
