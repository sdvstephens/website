The roots of $x^2 - 7x + 12$ are $3$ and $4$: their sum is $7$, their product is $12$ — the very
coefficients, up to sign. Is that a lucky quadratic, or does *every* polynomial wear its roots'
symmetric combinations on its sleeve?

## Discovery

1. Suppose a monic quadratic has roots $r_1, r_2$. Then it equals $(x - r_1)(x - r_2)$. Expand
   this. What are the coefficients of $x$ and of the constant term, in terms of $r_1, r_2$?
2. Do the same for a monic cubic $(x - r_1)(x - r_2)(x - r_3)$. Expand fully and read off the
   coefficient of $x^2$, of $x^1$, and the constant. What symmetric combinations of the roots
   appear at each level?
3. Notice the *signs* alternate as you move down in degree. For the cubic, is the constant term
   $+r_1 r_2 r_3$ or $-r_1 r_2 r_3$? Track exactly where each minus sign comes from in the
   expansion.
4. Now let the leading coefficient be $a_n \ne 1$ instead of $1$. How does dividing through by
   $a_n$ change the relation between the *given* coefficients $a_k$ and the symmetric functions of
   the roots?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ with $a_n \ne 0$ have roots
$r_1, \dots, r_n$ (over $\CC$, with multiplicity). Define the **elementary symmetric polynomial**
$$e_k = \sum_{1 \le i_1 \lt i_2 \lt \cdots \lt i_k \le n} r_{i_1} r_{i_2} \cdots r_{i_k}$$
($e_1 = \sum r_i$, $e_n = \prod r_i$). Then for each $k = 1, \dots, n$,
$$e_k = (-1)^k \frac{a_{n-k}}{a_n}.$$
In particular $\sum r_i = -a_{n-1}/a_n$ and $\prod r_i = (-1)^n a_0/a_n$. The sign
$(-1)^k$ is the convention to remember.

### Proof

Since $r_1, \dots, r_n$ are the roots and $a_n$ is the leading coefficient, factor
$$P(x) = a_n \prod_{i=1}^{n} (x - r_i).$$
Expand the product. A term of the expansion is formed by choosing, from each factor $(x - r_i)$,
either $x$ or $-r_i$. To get the power $x^{n-k}$, we must choose $-r_i$ from exactly $k$ of the
factors (and $x$ from the other $n-k$). Summing over all such choices, the coefficient of
$x^{n-k}$ in $\prod (x - r_i)$ is
$$\sum_{i_1 \lt \cdots \lt i_k} (-r_{i_1})(-r_{i_2}) \cdots (-r_{i_k}) = (-1)^k e_k.$$
Multiplying by $a_n$, the coefficient of $x^{n-k}$ in $P(x)$ is $a_n (-1)^k e_k$. But by
definition that coefficient is $a_{n-k}$. Hence $a_{n-k} = a_n (-1)^k e_k$, i.e.
$e_k = (-1)^k a_{n-k}/a_n$. $\blacksquare$

### Worked Instance

Take $2x^3 - 12x^2 + 22x - 12$, with roots $r_1, r_2, r_3$. Here $a_3 = 2$, $a_2 = -12$,
$a_1 = 22$, $a_0 = -12$. Vieta gives
$$e_1 = r_1+r_2+r_3 = -\frac{a_2}{a_3} = -\frac{-12}{2} = 6,$$
$$e_2 = r_1r_2 + r_1r_3 + r_2r_3 = +\frac{a_1}{a_3} = \frac{22}{2} = 11,$$
$$e_3 = r_1r_2r_3 = -\frac{a_0}{a_3} = -\frac{-12}{2} = 6.$$
Indeed the roots are $1, 2, 3$: sum $6$, pairwise-sum $2+3+6 = 11$, product $6$. Now compute
$r_1^2 + r_2^2 + r_3^2$ *without* the roots: $e_1^2 - 2e_2 = 36 - 22 = 14$ — and $1+4+9 = 14$.

### Pitfalls

- The sign is $(-1)^k$: sum of roots picks up **one** minus, product of all $n$ roots picks up
  $(-1)^n$. Do not drop the leading coefficient $a_n$ — divide by it.
- Roots are counted **with multiplicity** and over $\CC$; a double root contributes twice to every
  $e_k$.
- $e_k$ pairs with $a_{n-k}$, not $a_k$. For the constant term $a_0$ (which is $a_{n-n}$), $k = n$.

:::
:::

## Connections

Prereqs: expanding products of linear factors (power factorizations). Vieta is the gateway to
Newton's identities (power sums from the $e_k$), the $x + 1/x$ substitution (which exploits
sum/product of a reciprocal pair), discriminants/resultants, linear recurrences, and Vieta jumping
in number theory. Recognition trigger: a problem that asks for a *symmetric* function of the roots
(sum, product, sum of squares, sum of reciprocals) without asking you to find the roots.
