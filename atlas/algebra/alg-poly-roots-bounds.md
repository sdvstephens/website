The Rational Root Theorem hands you a candidate list for $2x^3 - 3x^2 - 11x + 6$ — the eight values
$\pm 1, \pm 2, \pm 3, \pm 6, \pm\tfrac12, \pm\tfrac32$ — and then leaves you to test them one by one.
But surely a root of a cubic with modest coefficients cannot be enormous, and surely a *positive*
divisor test can be stopped early. Can we fence the roots into a small window before testing anything?

## Discovery

1. Recall the Rational Root Theorem: if $\tfrac pq$ (in lowest terms) is a root of
   $a_n x^n + \cdots + a_0$ with integer coefficients, then $p \mid a_0$ and $q \mid a_n$.
   Specialize to a **monic** integer polynomial ($a_n = 1$): what does $q \mid 1$ force, and so what
   must every rational root be?
2. Take $r \gt 0$ and synthetic-divide $P(x)$ (positive leading coefficient) by $x - r$. Suppose
   every entry of the bottom row comes out $\ge 0$. Then $P(x) = (x-r)Q(x) + R$ with $Q$ having all
   coefficients $\ge 0$ and $R \ge 0$. For any $s \gt r$, what are the signs of $s - r$, of $Q(s)$,
   and of $R$? Conclude something about $P(s)$, hence about roots larger than $r$.
3. Bound the *size* of any root. Write $a_n x^n = -(a_{n-1}x^{n-1} + \cdots + a_0)$ at a root. For
   $|x| \gt 1$, bound the right-hand side using $|x|^{n-1} \ge |x|^k$ and the geometric sum. Find a
   number $B$ (built from the coefficients) such that $|x| \ge B$ makes the left side strictly
   larger in magnitude, so $x$ cannot be a root. What is the smallest such $B$ you can extract?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $P(x) = a_n x^n + \cdots + a_0$ have integer coefficients, $a_n \ne 0$.

**Rational Root Theorem (recap).** A rational root in lowest terms $\tfrac pq$ has $p \mid a_0$,
$q \mid a_n$. **Integer Root Corollary.** If $P$ is monic ($a_n = 1$), every rational root is an
integer dividing $a_0$.

**Upper/Lower Bound Theorem.** Assume $a_n \gt 0$. If synthetic division of $P$ by $x - r$
($r \gt 0$) yields a bottom row of all-nonnegative entries, then $P$ has no root exceeding $r$: $r$
is an **upper bound**. If division by $x - r$ ($r \lt 0$) yields a bottom row whose signs
**alternate** (zeros counted as either sign), then $r$ is a **lower bound** — no root is less than
$r$.

**Cauchy's bound.** Every real (indeed complex) root $x$ satisfies
$$|x| \lt 1 + \max_{0 \le k \lt n} \left|\frac{a_k}{a_n}\right|.$$

### Proof

*Integer Root Corollary.* With $a_n = 1$, the Rational Root Theorem gives $q \mid 1$, so $q = \pm 1$
and $\tfrac pq = \pm p$ is an integer; and $p \mid a_0$. 

*Upper bound.* Suppose synthetic division by $x - r$, $r \gt 0$, leaves $Q(x)$ with nonnegative
coefficients and $R \ge 0$, so $P(x) = (x-r)Q(x) + R$. For $s \gt r \gt 0$: $s - r \gt 0$; and
$Q(s) \gt 0$ because $Q$ has nonnegative coefficients, a positive leading one, and $s \gt 0$. Hence
$P(s) = (s-r)Q(s) + R \gt 0$, so $P$ has no root $s \gt r$; and if $R \gt 0$ then $P(r) \gt 0$ too.
*Lower bound.* Apply the upper-bound test to $P(-x)$, whose roots are the negatives of $P$'s. The
substitution $x \mapsto -x$ multiplies the coefficient of $x^k$ by $(-1)^k$, so an all-nonnegative
bottom row for $P(-x)$ corresponds to a sign-alternating one for $P$; a positive upper bound $|r|$
for $P(-x)$ becomes the lower bound $r \lt 0$ for $P$.

*Cauchy's bound.* Let $M = \max_{0 \le k \lt n} |a_k / a_n|$ and suppose $|x| \gt 1 + M$, so in
particular $|x| \gt 1$. If $P(x) = 0$ then $a_n x^n = -\sum_{k=0}^{n-1} a_k x^k$, and by the triangle
inequality
$$|a_n|\,|x|^n \le \sum_{k=0}^{n-1} |a_k|\,|x|^k \le |a_n| M \sum_{k=0}^{n-1} |x|^k
= |a_n| M\,\frac{|x|^n - 1}{|x| - 1} \lt |a_n| M\,\frac{|x|^n}{|x|-1}.$$
Divide by $|a_n|\,|x|^n \gt 0$: $\,1 \lt \dfrac{M}{|x| - 1}$, i.e. $|x| - 1 \lt M$, i.e.
$|x| \lt 1 + M$ — contradicting $|x| \gt 1 + M$. So no root satisfies $|x| \gt 1 + M$; every root
obeys $|x| \lt 1 + M$. $\blacksquare$

### Worked Instance

For $P(x) = 2x^3 - 3x^2 - 11x + 6$ (leading coefficient $\gt 0$): Cauchy's bound is
$1 + \tfrac{\max(3, 11, 6)}{2} = 1 + \tfrac{11}{2} = 6.5$, so every root lies in $(-6.5, 6.5)$ — this
alone deletes $\pm 6$ from the RRT list only barely, so test the bound theorem too. Synthetic
division by $x - 3$ gives bottom row $2,\ 3,\ -2,\ 0$: not all nonnegative, but the remainder is $0$,
so $x = 3$ *is* a root and $P(x) = (x-3)(2x^2 + 3x - 2)$. Factoring the quadratic,
$2x^2 + 3x - 2 = (2x - 1)(x + 2)$, gives the remaining roots $x = \tfrac12$ and $x = -2$. All three
roots $-2, \tfrac12, 3$ indeed satisfy the RRT divisibility and lie inside Cauchy's window.

### Pitfalls

- **Lowest terms is essential** in the Rational Root Theorem: $\tfrac{2}{4}$ would give false
  divisibility claims. Reduce first.
- **The bound theorem needs $a_n \gt 0$** and division by $x - r$ with $r \gt 0$ (upper) or $r \lt 0$
  (lower). If $a_n \lt 0$, first factor out $-1$.
- **Nonnegative row is sufficient, not necessary**: a value can still be an upper bound without the
  clean sign pattern. The test only *certifies* bounds.
- **Cauchy's bound is strict but usually loose** — it rules out large candidates, not close calls.
  Combine it with the sign-pattern test and direct evaluation.
- **Rational Root lists *candidates*, not roots.** Every candidate must still be tested (or divided
  out); most will fail.

:::
:::

## Connections

This node upgrades the **Rational Root Theorem** ([alg-rational-root]) from a candidate generator into
a search you can bound and terminate, using **synthetic division** ([alg-poly-division]) as the sign
probe. Together with complex numbers it sets up the **Fundamental Theorem of Algebra**
([alg-fta-algebra]): once you can locate and divide out real roots, the theorem accounts for the rest
over $\CC$. Recognition trigger: "find all rational roots," "show all roots lie in an interval," or a
factoring problem where you want to shrink the candidate list before testing.
