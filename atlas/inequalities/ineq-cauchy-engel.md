For positive reals, is $\dfrac{a^2}{x} + \dfrac{b^2}{y}$ ever smaller than
$\dfrac{(a+b)^2}{x+y}$? Test a few numbers. It never is — and the clean reason powers a whole
class of Olympiad inequalities.

## Discovery

1. Start with the two-term claim $\dfrac{a^2}{x} + \dfrac{b^2}{y} \ge \dfrac{(a+b)^2}{x+y}$ for
   $x,y > 0$. Move everything to one side over the common denominator $x\,y\,(x+y)$. What is the
   numerator?
2. That numerator is a single perfect square. Factor it. For which $a,b,x,y$ is it zero — i.e.
   when does equality hold?
3. Suppose the two-term bound is now trusted. Apply it to $\dfrac{a_1^2}{x_1}+\dfrac{a_2^2}{x_2}$;
   then feed that result together with $\dfrac{a_3^2}{x_3}$ back into the same two-term bound, and
   keep going. What single inequality for $n$ terms falls out?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For reals $a_i$ and positive reals $x_i$,
$$\sum_{i=1}^{n} \frac{a_i^2}{x_i} \;\ge\; \frac{\left(\sum_{i=1}^{n} a_i\right)^2}{\sum_{i=1}^{n} x_i},$$
with equality iff all the ratios $a_i/x_i$ are equal. This is Cauchy–Schwarz written for
fractions; the competition-culture name is "Titu's Lemma" (a folklore nickname, **not** a formal
theorem name).

### Proof

**Two-term case.** Consider $\dfrac{a^2}{x} + \dfrac{b^2}{y} - \dfrac{(a+b)^2}{x+y}$. Over the
common denominator $x\,y\,(x+y) > 0$, the numerator is
$$a^2 y(x+y) + b^2 x(x+y) - (a+b)^2 xy = a^2 y^2 - 2ab\,xy + b^2 x^2 = (ay - bx)^2 \ge 0.$$
So the two-term inequality holds, with equality iff $ay = bx$, i.e. $a/x = b/y$.

**Induction.** Assume the $k$-term bound. Applying the two-term case to the aggregate fraction
$\dfrac{\left(\sum_{i\le k} a_i\right)^2}{\sum_{i\le k} x_i}$ and $\dfrac{a_{k+1}^2}{x_{k+1}}$,
$$\sum_{i=1}^{k+1} \frac{a_i^2}{x_i} \;\ge\; \frac{\left(\sum_{i\le k} a_i\right)^2}{\sum_{i\le k} x_i} + \frac{a_{k+1}^2}{x_{k+1}} \;\ge\; \frac{\left(\sum_{i\le k+1} a_i\right)^2}{\sum_{i\le k+1} x_i}.$$
Equality forces every step to be tight, i.e. all $a_i/x_i$ equal. (Equivalently, this is
Cauchy–Schwarz applied to the vectors $\left(a_i/\sqrt{x_i}\right)$ and $\left(\sqrt{x_i}\right)$.)
$\blacksquare$

### Worked Instance

IMO 1995: for $a,b,c > 0$ with $abc = 1$, show $\displaystyle\sum \frac{1}{a^3(b+c)} \ge \frac{3}{2}$.
Substitute $x = 1/a,\ y = 1/b,\ z = 1/c$ (so $xyz = 1$); the sum becomes
$\displaystyle\sum \frac{x^2}{y+z}$. By Engel form,
$$\sum \frac{x^2}{y+z} \;\ge\; \frac{(x+y+z)^2}{2(x+y+z)} = \frac{x+y+z}{2} \;\ge\; \frac{3\,(xyz)^{1/3}}{2} = \frac{3}{2},$$
the last step by AM–GM. $\blacksquare$

### Pitfalls

- Denominators must be positive; the inequality can fail for negative $x_i$.
- The numerators are *squared* ($a_i^2$); the denominators are not.
- "Titu's Lemma" is a nickname — in a written solution, cite it as a case of Cauchy–Schwarz.

:::
:::

## Connections

Prereqs: the trivial inequality (squares $\ge 0$) and Cauchy–Schwarz. This is the go-to tool
whenever you see a sum of fractions with squares — or things you can force into squares — on top.
Unlocks Nesbitt's inequality and a large fraction of Olympiad inequality problems. Recognition
trigger: "a sum of $x^2/(\text{something positive})$."
