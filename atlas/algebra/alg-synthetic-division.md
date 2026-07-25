Dividing $2x^3 - 3x^2 + 4$ by $x - 3$ the long way fills half a page with $x$'s that you copy,
subtract, and copy again. Yet the powers of $x$ never actually *do* anything — they are pure
bookkeeping. Strip them away and the entire division shrinks to one row of arithmetic: bring a
number down, multiply, add. What makes that shortcut exact?

## Discovery

Suppose you are dividing a polynomial $A(x) = a_m x^m + \cdots + a_1 x + a_0$ by a linear divisor of
the form $x - c$. The division algorithm promises $A(x) = (x - c)\,Q(x) + R$ with $R$ constant and
$\deg Q = m - 1$; write $Q(x) = q_{m-1}x^{m-1} + \cdots + q_1 x + q_0$.

1. Expand $(x - c)Q(x) + R$ and collect it by powers of $x$. Match the coefficient of $x^m$, then of
   $x^{m-1}$, and so on down to $x^0$, against the corresponding coefficient $a_k$ of $A$. You will
   get one equation per power; solve each for the unknown $q$ (or for $R$) that first appears in it.
   The result is a *recurrence* that produces $q_{m-1}, q_{m-2}, \dots, q_0, R$ one at a time.
2. Read your recurrence aloud as a procedure acting only on the coefficient list $a_m, \dots, a_0$
   with the single number $c$. Describe the three operations it repeats, and the order they occur in.
3. Run that procedure on $2x^3 + 0x^2 - 3x + 4$ with $c = 3$ (note the inserted $0$ for the missing
   $x^2$ term). Separately compute $A(3)$ by direct substitution. Compare the final number your
   procedure outputs to $A(3)$, and to the remainder guaranteed by the division algorithm.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Synthetic division (Ruffini's rule)** computes the quotient and remainder of $A(x) \div (x - c)$
using only the coefficient list and the number $c$. Writing $A(x) = \sum_{k=0}^m a_k x^k$ and
$Q(x) = \sum_{k=0}^{m-1} q_k x^k$, the coefficients obey
$$q_{m-1} = a_m, \qquad q_{k-1} = a_k + c\,q_k \ \ (k = m-1, \dots, 1), \qquad R = a_0 + c\,q_0.$$
In words: **bring down** the leading coefficient, then repeatedly **multiply** the last result by
$c$ and **add** it to the next coefficient. The numbers produced (except the last) are the
coefficients of $Q$; the last is the remainder $R = A(c)$, which recovers the Remainder Theorem.
The method is *only* for a monic linear divisor $x - c$: for $ax - b$ divide out $a$ first, using
root $c = b/a$ and rescaling, and for higher-degree divisors fall back to long division.

### Proof

By the division algorithm ([alg-poly-division]) there are unique $Q, R$ with $A = (x-c)Q + R$ and
$R$ constant. Expand the right side, grouping by power of $x$:
$$(x - c)\!\left(\sum_{k=0}^{m-1} q_k x^k\right) + R
= \sum_{k=0}^{m-1} q_k x^{k+1} - \sum_{k=0}^{m-1} c\,q_k x^{k} + R.$$
The coefficient of $x^m$ on the right is $q_{m-1}$; matching $A$ gives $q_{m-1} = a_m$. For
$1 \le k \le m-1$, the coefficient of $x^k$ is $q_{k-1} - c\,q_k$, so matching gives
$q_{k-1} - c\,q_k = a_k$, i.e. $q_{k-1} = a_k + c\,q_k$. The constant term is $-c\,q_0 + R$, so
$R = a_0 + c\,q_0$. These are exactly the stated recurrences, and by uniqueness they compute the true
quotient and remainder.

Finally, this recurrence is nothing but nested (Horner) evaluation of $A$ at $c$: unfolding
$q_{k-1} = a_k + c\,q_k$ from the top gives
$$R = a_0 + c\big(a_1 + c(a_2 + \cdots + c\,a_m)\big) = \sum_{k=0}^m a_k c^k = A(c),$$
so the final entry is $A(c)$, matching the Remainder Theorem. $\blacksquare$

### Worked Instance

Divide $2x^3 - 3x^2 + 4$ by $x - 3$. Insert the missing $x^2$ coefficient as $0$ and use $c = 3$:
$$\begin{array}{c|cccc}
3 & 2 & 0 & -3 & 4\\
  &   & 6 & 18 & 45\\ \hline
  & 2 & 6 & 15 & 49
\end{array}$$
Bring down $2$; $2 \cdot 3 = 6$, $0 + 6 = 6$; $6 \cdot 3 = 18$, $-3 + 18 = 15$; $15 \cdot 3 = 45$,
$4 + 45 = 49$. So $Q(x) = 2x^2 + 6x + 15$ and $R = 49$. Cross-check by the Remainder Theorem, reading
the polynomial as $2x^3 + 0x^2 - 3x + 4$: $A(3) = 2(27) + 0 - 3(3) + 4 = 54 - 9 + 4 = 49$, matching
$R$ exactly. Had the placeholder $0$ for the missing $x^2$ term been omitted, the columns would have
shifted and every entry after the first would have been wrong — the reason that zero is not optional.

### Pitfalls

- **Use the root $c$, not the divisor.** Dividing by $x - 3$ uses $c = +3$; dividing by $x + 2$ uses
  $c = -2$. The sign flip is the single most common slip.
- **Insert placeholder zeros** for every missing power. Skipping the $0$ for an absent $x^2$ term
  shifts every subsequent column and corrupts the whole row.
- **The last entry is the remainder, not a quotient coefficient.** Only the entries before it form
  $Q$; peeling the last number off is essential.
- **Monic linear divisors only.** For $2x - 3$ you cannot run synthetic division with $c = 3$; use
  root $c = 3/2$ and then divide $Q$ by the leading $2$, or just use long division.
- **The quotient has degree one less** than the dividend. A cubic divided by $x - c$ yields a
  quadratic quotient — three quotient coefficients, then the remainder.

:::
:::

## Connections

Synthetic division is long division ([alg-poly-division]) with the powers of $x$ erased, so it
inherits the same guarantees — unique $Q$ and $R$, remainder $R = A(c)$ — at a fraction of the
writing. Because the last entry is $A(c)$, it doubles as the fastest hand method for **evaluating a
polynomial** (Horner's form) and for testing candidate roots when hunting for **rational and integer
roots and bounds** ([alg-poly-roots-bounds]). Recognition trigger: "divide by $x - c$," "test
whether $c$ is a root," or "peel off a known linear factor to lower the degree."

## History

The coefficient-only shortcut is named for Paolo Ruffini, who published it in 1804 (and in expanded
form in 1809) while pursuing his proof that the general quintic is unsolvable by radicals. The
closely related nested-evaluation scheme is called Horner's method after William George Horner's 1819
paper, though both men were rediscovering ideas already known centuries earlier: the Chinese
mathematician Qin Jiushao described essentially the same nested algorithm in 1247, and Sharaf
al-Din al-Tusi used comparable techniques in the twelfth century. The persistent European names are
thus a matter of publication timing rather than first invention — a common pattern in the history of
algorithms. What Ruffini genuinely contributed was recognizing that dividing by $x - c$ needs no
symbols at all, only a disciplined row of "multiply and add."
