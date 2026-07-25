Multiply term-by-term and add: $(1\cdot 3 + 2\cdot 4)^2 = 121$, while
$(1^2 + 2^2)(3^2 + 4^2) = 5 \cdot 25 = 125$. The product of sums of squares beat the square of
the sum — just barely. Try other numbers: the product always wins, or ties. Why can the "square
of a dot product" never overshoot?

## Discovery

1. Fix real numbers $a_1, \dots, a_n$ and $b_1, \dots, b_n$. For a real variable $t$, expand
   the sum $\sum_{i=1}^n (a_i t - b_i)^2$ into a quadratic in $t$: write it as $At^2 - 2Bt + C$
   and identify $A, B, C$ in terms of the $a_i$ and $b_i$.
2. By the trivial inequality, that sum of squares is $\ge 0$ for **every** real $t$. What does a
   quadratic $At^2 - 2Bt + C$ (with $A \gt 0$) being nonnegative for all $t$ force upon its
   discriminant?
3. Write out the discriminant condition from step 2 explicitly in terms of $A, B, C$. What
   inequality between $B^2$ and $AC$ do you get?
4. Translate that back to the $a_i, b_i$. When is the quadratic ever *equal* to zero for some
   $t$ — and what does that say about the vectors $(a_i)$ and $(b_i)$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For all real numbers $a_1, \dots, a_n$ and $b_1, \dots, b_n$,
$$\left(\sum_{i=1}^n a_i b_i\right)^2 \;\le\; \left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right),$$
the **Cauchy–Schwarz inequality**, with equality if and only if the sequences $(a_i)$ and
$(b_i)$ are proportional (one is a scalar multiple of the other, allowing the zero vector).

### Proof

If every $a_i = 0$ the inequality reads $0 \le 0$; assume $A := \sum a_i^2 \gt 0$. For all real
$t$, the trivial inequality gives
$$0 \le \sum_{i=1}^n (a_i t - b_i)^2 = \left(\sum a_i^2\right)t^2 - 2\left(\sum a_i b_i\right)t + \left(\sum b_i^2\right) = A t^2 - 2B t + C,$$
where $B = \sum a_i b_i$ and $C = \sum b_i^2$. A quadratic with positive leading coefficient
that is nonnegative for every real $t$ cannot have two distinct real roots, so its discriminant
is $\le 0$:
$$(2B)^2 - 4AC \le 0 \quad\Longrightarrow\quad B^2 \le AC,$$
which is exactly $\left(\sum a_i b_i\right)^2 \le \left(\sum a_i^2\right)\left(\sum b_i^2\right)$.
Equality means the discriminant is $0$, so the quadratic has a real root $t_0$ with
$\sum (a_i t_0 - b_i)^2 = 0$; every squared term must vanish, giving $b_i = t_0 a_i$ for all
$i$ — the sequences are proportional. $\blacksquare$

### Worked Instance

For positive reals with $a + b + c = 1$, show $\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \ge 9$.
Apply Cauchy–Schwarz to the vectors $(\sqrt a, \sqrt b, \sqrt c)$ and
$\left(\tfrac{1}{\sqrt a}, \tfrac{1}{\sqrt b}, \tfrac{1}{\sqrt c}\right)$:
$$\left(\sqrt a \cdot \tfrac{1}{\sqrt a} + \sqrt b \cdot \tfrac{1}{\sqrt b} + \sqrt c \cdot \tfrac{1}{\sqrt c}\right)^2 \le (a + b + c)\left(\tfrac1a + \tfrac1b + \tfrac1c\right).$$
The left side is $3^2 = 9$ and $a + b + c = 1$, so $9 \le \tfrac1a + \tfrac1b + \tfrac1c$.
Equality needs $(\sqrt a, \dots)$ proportional to $(1/\sqrt a, \dots)$, i.e. $a = b = c = 1/3$.

### Pitfalls

- Keep the shape straight: it is $(\sum a_ib_i)^2 \le (\sum a_i^2)(\sum b_i^2)$ — the product
  of sums-of-squares is the **larger** side.
- Equality is *proportionality*, not equality of the sequences. $(1,2)$ and $(3,6)$ give
  equality even though the entries differ.
- The discriminant argument needs $A \gt 0$; handle the all-zero case separately (it holds
  trivially).

:::
:::

## Connections

Prereqs: the trivial inequality — the whole proof rides on one sum of squares being
nonnegative. Cauchy–Schwarz is, with AM–GM, one of the two pillars of olympiad inequalities;
it unlocks the Engel/Titu form (Cauchy–Schwarz for fractions) and underlies the geometry of
inner products. Recognition trigger: a product of two sums of squares confronting the square of
a "mixed" sum $\sum a_i b_i$, or any need to bound a dot product. Constant on the Putnam and IMO.
