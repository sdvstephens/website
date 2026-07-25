The equation $x^2 - 4x + 1 = 0$ has two honest solutions — the parabola $y = x^2 - 4x + 1$ dips
below the axis and crosses it twice — yet no two integers sum to $4$ and multiply to $1$, so
factoring by inspection fails. You *could* complete the square by hand every time a new quadratic
shows up. But must you re-run the whole ritual for each equation, or can you complete the square
just once, on symbols, and reuse the result forever?

## Discovery

Work with the fully general equation $ax^2 + bx + c = 0$, where $a \ne 0$. Nothing is numeric here;
that is the point — solve it *in the letters* so the answer covers every quadratic at once.

1. You cannot complete the square while $a$ multiplies $x^2$. Remove that obstruction: divide the
   whole equation by $a$ (legal because $a \ne 0$). Write the resulting equation, whose leading
   coefficient is now $1$.
2. Move the constant term to the right-hand side. Then ask: what single constant must be added to
   the left side to turn $x^2 + \tfrac{b}{a}x$ into a perfect square? Add that same constant to
   *both* sides and write the new equation.
3. The left side is now a squared binomial — rewrite it as $(x + \square)^2$ for the appropriate
   $\square$. On the right side you have two fractions; combine them over a common denominator into
   a single fraction. Write the equation in the form $(x + \square)^2 = \dfrac{\text{one fraction}}{}$.
4. Take square roots of both sides. A real number and its negative have the same square, so the
   square-root step splits into two cases at once — carry a $\pm$. Write the equation for
   $x + \square$.
5. Isolate $x$ by subtracting $\square$ from both sides, and combine the two terms into a single
   fraction. What is $x$, in terms of $a$, $b$, $c$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The quadratic formula.** For $a \ne 0$, the solutions of $ax^2 + bx + c = 0$ are
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$
The two signs give the two roots; when they coincide (a single value under the root) the roots
merge into one. Whether the roots are real at all is governed by the sign of the quantity
$b^2 - 4ac$ sitting under the square root — if it is negative there is no real square root and
hence no real solution. That quantity, the *discriminant*, gets its own full treatment in
[alg-discriminant-elem]; here the headline is the derivation itself: one completion of the square,
done on symbols, solves every quadratic.

### Proof

Let $a \ne 0$. Dividing $ax^2 + bx + c = 0$ by $a$ preserves the solution set and gives
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0.$$
Subtract $\frac{c}{a}$ and add $\left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2}$ to both sides — the
constant that completes the square, since $x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}$ is exactly
$\left(x + \frac{b}{2a}\right)^2$:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a}
= \frac{b^2}{4a^2} - \frac{4ac}{4a^2} = \frac{b^2 - 4ac}{4a^2}.$$
The two expressions are equal as an identity in $x$, so a real number $x$ solves the original
equation iff it solves this one.

A real square is nonnegative, and $4a^2 \gt 0$, so a real solution exists iff $b^2 - 4ac \ge 0$.
Assume $b^2 - 4ac \ge 0$. Then $t^2 = k$ (with $k \ge 0$) holds for a real $t$ exactly when
$t = \pm\sqrt{k}$, so
$$x + \frac{b}{2a} = \pm\sqrt{\frac{b^2 - 4ac}{4a^2}}
= \pm\frac{\sqrt{b^2 - 4ac}}{\sqrt{4a^2}} = \pm\frac{\sqrt{b^2 - 4ac}}{2|a|}.$$
Here $\sqrt{4a^2} = 2|a|$ carries an absolute value, but it does not survive into the answer: the
symbol $\pm$ denotes *both* signs, and dividing by $2|a|$ versus $2a$ only flips which sign is which
when $a \lt 0$. Since both signs are taken, the two-element set of values is identical either way,
so we may replace $2|a|$ by $2a$:
$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}.$$
Finally subtract $\frac{b}{2a}$ and combine over the common denominator $2a$:
$$x = -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$
When $b^2 - 4ac \lt 0$ the step $\left(x+\frac{b}{2a}\right)^2 = \frac{b^2-4ac}{4a^2} \lt 0$ is
impossible for real $x$, so there is no real root — consistent with the same formula once
$\sqrt{\,\cdot\,}$ is read over $\CC$. $\blacksquare$

### Worked Instance

Return to the Hook, $x^2 - 4x + 1 = 0$: here $a = 1$, $b = -4$, $c = 1$, so
$$x = \frac{-(-4) \pm \sqrt{(-4)^2 - 4\cdot 1 \cdot 1}}{2\cdot 1}
= \frac{4 \pm \sqrt{16 - 4}}{2} = \frac{4 \pm \sqrt{12}}{2} = \frac{4 \pm 2\sqrt{3}}{2} = 2 \pm \sqrt{3}.$$
The two crossing points are $2 + \sqrt 3 \approx 3.73$ and $2 - \sqrt 3 \approx 0.27$ — irrational,
which is why no integer factorization existed.

A non-monic check, $2x^2 + 3x - 2 = 0$ ($a=2$, $b=3$, $c=-2$):
$$x = \frac{-3 \pm \sqrt{3^2 - 4\cdot 2\cdot(-2)}}{2\cdot 2} = \frac{-3 \pm \sqrt{9 + 16}}{4}
= \frac{-3 \pm 5}{4},$$
giving $x = \tfrac{1}{2}$ or $x = -2$ — matching the factorization $(2x-1)(x+2) = 0$.

### Pitfalls

- **The sign of $-b$.** The numerator opens with $-b$, so a *negative* $b$ becomes positive:
  for $b = -4$ you write $-(-4) = +4$, not $-4$.
- **The whole numerator is over $2a$.** Both $-b$ and $\pm\sqrt{\,\cdot\,}$ sit over $2a$;
  $\frac{-b}{2a} \pm \sqrt{\cdots}$ (dividing only the first term) is wrong.
- **$2a$, not $2$.** For $a \ne 1$ the denominator is $2a$; forgetting the $a$ is the classic
  non-monic slip.
- **$-4ac$ uses all three coefficients.** The radicand is $b^2 - 4ac$, not $b^2 - 4c$; the $a$
  belongs inside.
- **$\pm$ means keep both.** Each sign is a genuine root; taking only $+$ loses half the answer
  (unless the radicand is $0$).
- **Negative radicand.** If $b^2 - 4ac \lt 0$ there is no real square root and no real solution —
  do not "drop the minus" and take $\sqrt{|b^2-4ac|}$.

:::
:::

## Connections

This is completing the square done once and for all: the prereq is the completing-the-square move
and the meaning of $\sqrt{\,\cdot\,}$, and the formula simply records their general output. The
radicand $b^2 - 4ac$ is the seed of the **discriminant** ([alg-discriminant-elem]), which reads off
how many real roots exist without solving, and adding the two roots (the $\pm$ pair) collapses the
radical and yields **Vieta's relations for the quadratic** ([alg-vieta-quadratic]). Recognition
trigger: any quadratic that resists integer factoring, or any time you need the *exact* roots of
$ax^2+bx+c=0$ rather than a decimal.

## History

The quadratic formula is the crystallized end-product of a two-thousand-year effort to solve second-degree equations. Its computational heart, completing the square, was mastered by the Babylonians and codified by al-Khwarizmi around $820$; Brahmagupta had already stated a general rule for the roots in $628$, and Bhaskara II refined it in the twelfth century. What these scholars lacked was symbolic notation, so their "formula" was a verbal recipe applied case by case, with negative numbers treated warily. Only after François Viète and René Descartes established letter-algebra around $1600$ could the completion be carried out once, on the general equation $ax^2 + bx + c = 0$, to yield the single formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ covering every quadratic at once. It mattered as a landmark of the symbolic method — proof that solving an entire infinite family of equations could be reduced to one reusable expression.
