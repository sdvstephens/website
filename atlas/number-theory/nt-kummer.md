$\binom{10}{3} = 120 = 2^3\cdot 3\cdot 5$, so $2^3 \mid \binom{10}{3}$ but $2^4 \nmid$. Now add
$3 + 7 = 10$ in binary: $011 + 111 = 1010$, and the addition carries in exactly three columns.
Three carries, exponent three. Every single time, that count of carries is the exponent. How can
a carry — a bookkeeping event in grade-school addition — know about prime factorizations?

## Discovery

Fix a prime $p$ and a sum $m + n$. Legendre's formula gives $v_p(k!) = \sum_{j\ge1}\lfloor
k/p^j\rfloor$. Write $m + n = N$.
1. Using Legendre on $\binom{N}{m} = \dfrac{N!}{m!\,n!}$, express $v_p\!\left(\binom{N}{m}\right)$
   as a single sum over $j\ge1$ of terms built from $\lfloor N/p^j\rfloor$, $\lfloor m/p^j\rfloor$,
   $\lfloor n/p^j\rfloor$. What is the $j$-th term?
2. For real $x,y$, compare $\lfloor x+y\rfloor$ with $\lfloor x\rfloor + \lfloor y\rfloor$. The
   difference is always one of two specific values — which two, and what decides between them?
3. Apply step 2 with $x = m/p^j$, $y = n/p^j$. The $j$-th term of your sum is $\lfloor N/p^j\rfloor
   - \lfloor m/p^j\rfloor - \lfloor n/p^j\rfloor$. When is it $1$ versus $0$? Phrase the condition
   in terms of the fractional parts $\{m/p^j\}$ and $\{n/p^j\}$, i.e. the low-order base-$p$
   digits of $m$ and $n$.
4. Do the grade-school addition $m + n$ in base $p$. A carry *out of* column $j-1$ (into column
   $j$) happens exactly when the low $j$ digits of $m$ and $n$ sum to at least $p^j$. Reconcile
   this with the condition from step 3.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Kummer's Theorem.** For a prime $p$ and nonnegative integers $m, n$,
$$v_p\!\left(\binom{m+n}{m}\right) = \#\{\text{carries when adding } m \text{ and } n \text{ in base } p\}.$$
Equivalently, if we write $s_p(k)$ for the sum of the base-$p$ digits of $k$, then
$$v_p\!\left(\binom{m+n}{m}\right) = \frac{s_p(m) + s_p(n) - s_p(m+n)}{p-1}.$$

### Proof

Let $N = m + n$. By Legendre's formula,
$$v_p\!\left(\binom{N}{m}\right) = v_p(N!) - v_p(m!) - v_p(n!) = \sum_{j\ge1}\left(\left\lfloor
\frac{N}{p^j}\right\rfloor - \left\lfloor\frac{m}{p^j}\right\rfloor - \left\lfloor\frac{n}{p^j}
\right\rfloor\right).$$

**A floor lemma.** For all reals $x, y$,
$$\lfloor x + y\rfloor - \lfloor x\rfloor - \lfloor y\rfloor = \lfloor \{x\} + \{y\}\rfloor \in
\{0, 1\},$$
where $\{t\} = t - \lfloor t\rfloor \in [0,1)$. Indeed, writing $x = \lfloor x\rfloor + \{x\}$ and
$y = \lfloor y\rfloor + \{y\}$, additivity of the integer parts gives $\lfloor x+y\rfloor =
\lfloor x\rfloor + \lfloor y\rfloor + \lfloor\{x\}+\{y\}\rfloor$; and $0 \le \{x\}+\{y\} \lt 2$
forces $\lfloor\{x\}+\{y\}\rfloor \in \{0,1\}$, equal to $1$ iff $\{x\}+\{y\} \ge 1$.

**Reading each term as a carry.** Apply the lemma with $x = m/p^j$, $y = n/p^j$. The $j$-th
summand equals $1$ precisely when $\{m/p^j\} + \{n/p^j\} \ge 1$. Now $\{m/p^j\} = r_j(m)/p^j$
where $r_j(m) = m \bmod p^j$ is the number formed by the lowest $j$ base-$p$ digits of $m$
(likewise $r_j(n)$). So the condition is
$$r_j(m) + r_j(n) \ge p^j.$$
This says: adding the low $j$ digits of $m$ and $n$ overflows past $p^j$ — exactly the statement
that a carry propagates *out of* digit position $j-1$ into position $j$ during the base-$p$
addition $m + n$. (Position $j-1$ is the $p^{j-1}$ column; a carry leaves it iff the accumulated
value in columns $0,\dots,j-1$ reaches $p^j$.) Distinct $j$ correspond to distinct column
boundaries, so summing the indicators over $j\ge1$ counts each carry exactly once. Therefore
$$v_p\!\left(\binom{N}{m}\right) = \sum_{j\ge1}\mathbf{1}[r_j(m)+r_j(n)\ge p^j] = \#\{\text{carries}\}.$$

**Digit-sum form.** There is a classical identity $v_p(k!) = \dfrac{k - s_p(k)}{p-1}$: writing
$k = \sum_i d_i p^i$ in base $p$, one computes $\sum_{j\ge1}\lfloor k/p^j\rfloor = \sum_i d_i(1 +
p + \cdots + p^{i-1}) = \sum_i d_i\frac{p^i - 1}{p-1} = \frac{k - s_p(k)}{p-1}$. Subtracting the
three instances,
$$v_p\!\left(\binom{N}{m}\right) = \frac{(N - s_p(N)) - (m - s_p(m)) - (n - s_p(n))}{p-1}
= \frac{s_p(m) + s_p(n) - s_p(N)}{p-1},$$
using $N = m + n$ so the linear terms cancel. Each carry lowers the digit sum by exactly $p-1$
(it replaces a value $\ge p$ in one column by that value minus $p$, and adds $1$ next door: net
change $-(p-1)$), so this count agrees with the carry count. $\blacksquare$

### Worked Instance

Resolve the hook: $v_2\!\left(\binom{10}{3}\right)$ with $m = 3$, $n = 7$, $p = 2$. In binary
$m = 011_2$, $n = 111_2$:
$$\begin{array}{r} 011 \\ +\ 111 \\ \hline 1010 \end{array}$$
Column $0$: $1+1 = 10_2$, carry. Column $1$: $1+1+\text{carry} = 11_2$, carry. Column $2$:
$0+1+\text{carry} = 10_2$, carry. Three carries, so $v_2\!\left(\binom{10}{3}\right) = 3$ — and
indeed $\binom{10}{3} = 120 = 2^3\cdot 15$.

Cross-check by digit sums: $s_2(3) = 2$, $s_2(7) = 3$, $s_2(10) = 2$, so
$\frac{2 + 3 - 2}{2 - 1} = 3$. A bonus consequence: $\binom{N}{m}$ is **odd** iff there are no
binary carries iff the binary digits of $m$ are a subset of those of $N$ (Lucas/Kummer for $p=2$).

### Pitfalls

- Carries are counted in base $p$, not base $10$. For a different prime you must re-do the
  addition in that base.
- It is the number of carries in $m + n$, where the coefficient is $\binom{m+n}{m}$. Feeding the
  wrong pair (e.g. carries in $N - m$ vs $m$) miscounts.
- The digit-sum formula divides by $p - 1$, not $p$. Forgetting this breaks every prime except
  $p = 2$.
- A carry can *cascade*: one overflow can trigger the next column to overflow. Each column that
  ultimately emits a carry counts once; don't double count a single propagation, and don't miss a
  carry that only happens *because* of an incoming one.

:::
:::

## Connections

Prereq: Legendre's formula, which supplies the floor sums this theorem manipulates. Kummer
refines Legendre from "$v_p(n!)$" to "$v_p$ of a binomial," and its $p=2$ special case is exactly
"$\binom{N}{m}$ is odd iff $m$'s bits sit inside $N$'s," the combinatorial heart of Lucas'
theorem and of self-similar patterns like Pascal's triangle mod $2$ (Sierpiński). Recognition
trigger: any question asking for the exact power of a prime dividing a binomial coefficient, or
whether $\binom{N}{m}$ is divisible by $p$ — convert it to counting carries.
