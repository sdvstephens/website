Here is an inequality that AM–GM and Cauchy–Schwarz often *cannot* reach on their own — it
supplies the extra symmetric term they are missing. For nonnegative $a, b, c$ and any $t \gt 0$,
a certain cyclic sum is always $\ge 0$, and the reason is disarmingly simple once you sort the
variables. What is the sum, and why does sorting crack it?

## Discovery

1. Look at the expression $E = a^t(a-b)(a-c) + b^t(b-a)(b-c) + c^t(c-a)(c-b)$ for nonnegative
   $a, b, c$ and $t \gt 0$. It is symmetric under permuting the variables, so **assume WLOG**
   $a \ge b \ge c \ge 0$. With that ordering, determine the sign of each factor $(a-b)$,
   $(a-c)$, $(b-c)$.
2. Group the first two terms: factor $(a - b)$ out of $a^t(a-b)(a-c) + b^t(b-a)(b-c)$. What is
   left inside the bracket, and — using $a \ge b$ so $a^t \ge b^t$ and $a - c \ge b - c$ — what
   is the sign of that grouped piece?
3. Now the third term $c^t(c-a)(c-b)$: with $c$ the smallest, both $(c-a)$ and $(c-b)$ are
   $\le 0$, so their product is $\ge 0$. What is the sign of the whole term?
4. Add the two nonnegative pieces from steps 2 and 3. What can you conclude about $E$, and for
   which $a, b, c$ is it zero?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Schur's inequality.** For nonnegative reals $a, b, c$ and any real $t \gt 0$,
$$a^t(a-b)(a-c) + b^t(b-a)(b-c) + c^t(c-a)(c-b) \;\ge\; 0,$$
with equality iff $a = b = c$, or two of them are equal and the third is $0$ (e.g.
$a = b, c = 0$). The most-used case $t = 1$ expands to
$$a^3 + b^3 + c^3 + abc \cdot 3 \ge ab(a+b) + bc(b+c) + ca(c+a),$$
equivalently $a^3+b^3+c^3 + 3abc \ge a^2b + a^2c + b^2a + b^2c + c^2a + c^2b$... more cleanly,
$a^3 + b^3 + c^3 + abc \ge ab(a+b) + bc(b+c) + ca(c+a) - 2abc$, i.e.
$$a^3 + b^3 + c^3 + 3abc \;\ge\; ab(a+b) + bc(b+c) + ca(c+a).$$

### Proof

The expression is symmetric, so assume WLOG $a \ge b \ge c \ge 0$. Group the first two terms by
factoring $(a - b)$:
$$a^t(a-b)(a-c) + b^t(b-a)(b-c) = (a - b)\big[a^t(a - c) - b^t(b - c)\big].$$
Since $a \ge b \ge 0$ and $t \gt 0$, we have $a^t \ge b^t \ge 0$; and $a - c \ge b - c \ge 0$.
Thus $a^t(a-c) \ge b^t(b-c)$, so the bracket is $\ge 0$; combined with $a - b \ge 0$, this whole
grouped term is $\ge 0$. The remaining term is
$$c^t(c-a)(c-b) = c^t\big(a - c\big)\big(b - c\big) \ge 0,$$
since $c^t \ge 0$ and both $a - c \ge 0$, $b - c \ge 0$. Adding two nonnegative quantities gives
$E \ge 0$. Equality needs each piece to vanish: either $a = b = c$, or $(a-b) = 0$ together with
$c^t(a-c)(b-c) = 0$, i.e. two equal and the third zero. $\blacksquare$

### Worked Instance

Use Schur ($t = 1$) to prove that for nonnegative $a, b, c$,
$$a^3 + b^3 + c^3 + 3abc \ge ab(a+b) + bc(b+c) + ca(c+a).$$
Expand $E$ at $t=1$: $\sum a(a-b)(a-c) = \sum a\big(a^2 - a(b+c) + bc\big) = \sum a^3 -
\sum a^2(b+c) + 3abc$. Since $E \ge 0$,
$$a^3 + b^3 + c^3 + 3abc \ge \sum a^2(b+c) = ab(a+b) + bc(b+c) + ca(c+a).$$
This is precisely the symmetric term AM–GM alone struggles to produce, with equality at
$a = b = c$ (or the boundary two-equal-one-zero cases).

### Pitfalls

- Schur requires $a, b, c \ge 0$ and $t \gt 0$; it can fail for negative variables.
- The equality case is **not only** $a = b = c$: the boundary "two equal, one zero" (e.g.
  $a = b \gt 0$, $c = 0$) also gives equality. Forgetting this misstates when the bound is tight.
- When applying the $t=1$ form, keep the $+3abc$ term — dropping it turns a true inequality into
  a false one.

:::
:::

## Connections

Prereqs: AM–GM (the natural first tool Schur supplements). Schur supplies the "extra" symmetric
expression $\sum a(a-b)(a-c)$ that closes many three-variable inequalities where AM–GM and
Cauchy–Schwarz stall, and it dovetails with the SOS method (Schur's term has a known SOS
representation). Recognition trigger: a symmetric three-variable polynomial inequality, tight at
$a=b=c$ *and* at a two-equal-one-zero boundary, that resists standard means. Appears on olympiad
shortlists and in the toolkit for the hardest symmetric inequalities.
