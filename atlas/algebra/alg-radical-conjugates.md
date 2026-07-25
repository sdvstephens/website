The fraction $\dfrac{1}{2 + \sqrt 3}$ looks stubbornly irrational, yet one clever multiplication turns
it into the tidy $2 - \sqrt 3$ — the radical simply evaporates from the denominator. The same trick
shows that $(2+\sqrt3)^{10} + (2-\sqrt3)^{10}$, despite the surds, is a whole number. What makes a
radical vanish on cue?

## Discovery

1. Multiply $(a + \sqrt b)(a - \sqrt b)$ using the difference-of-squares pattern. Is any radical left
   in the product? State what kind of number results when $a$ and $b$ are rational.
2. Use that to rationalize $\dfrac{1}{3 + \sqrt 5}$: multiply top and bottom by the same well-chosen
   factor so the denominator loses its radical, then simplify.
3. Now handle two radicals: rationalize $\dfrac{1}{\sqrt 7 - \sqrt 3}$, and separately compute
   $(\sqrt 7 - \sqrt 3)(\sqrt 7 + \sqrt 3)$. Which factor did you multiply by, and why does it clear
   both roots?
4. Let $x = 2 + \sqrt 3$. Compute $x - 2$, then square it, to produce a *rational* equation satisfied
   by $x$. Identify the monic quadratic with integer coefficients having $x$ as a root — and read off
   its other root.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **conjugate** of $a + \sqrt b$ is $a - \sqrt b$ (and of $\sqrt a + \sqrt b$ is $\sqrt a - \sqrt b$).
Multiplying a surd by its conjugate kills the radical via difference of squares:
$$(a + \sqrt b)(a - \sqrt b) = a^2 - b, \qquad (\sqrt a + \sqrt b)(\sqrt a - \sqrt b) = a - b,$$
a *rational* number when $a, b$ are rational. This **rationalizes denominators**:
$\dfrac{1}{a + \sqrt b} = \dfrac{a - \sqrt b}{a^2 - b}$. Moreover, the pair $a \pm \sqrt b$ are exactly
the two roots of the rational quadratic
$$x^2 - 2ax + (a^2 - b) = 0,$$
and the symmetric combinations $s_n = (a+\sqrt b)^n + (a-\sqrt b)^n$ are always **rational** (integers,
when $a, b \in \ZZ$), because the odd powers of $\sqrt b$ cancel.

### Proof

*The product is rational.* By difference of squares, $(a+\sqrt b)(a-\sqrt b) = a^2 - (\sqrt b)^2 =
a^2 - b$, with no radical, and rational if $a, b$ are. Hence for $a^2 \ne b$,
$$\frac{1}{a+\sqrt b} = \frac{a - \sqrt b}{(a+\sqrt b)(a-\sqrt b)} = \frac{a - \sqrt b}{a^2 - b}.$$

*Conjugates are the quadratic's roots.* Let $x = a + \sqrt b$. Then $x - a = \sqrt b$, so
$(x - a)^2 = b$, i.e. $x^2 - 2ax + a^2 = b$, giving $x^2 - 2ax + (a^2 - b) = 0$. The same computation
with $x = a - \sqrt b$ gives the identical equation. By Vieta (or the factorization $x^2 - 2ax +
(a^2 - b) = (x - (a+\sqrt b))(x - (a-\sqrt b))$), these are its two roots; their sum is $2a$ and
product $a^2 - b$, both rational.

*Symmetric sums are rational.* Let $u = a + \sqrt b$, $v = a - \sqrt b$, so $u + v = 2a$ and $uv =
a^2 - b$ are rational. Define $s_n = u^n + v^n$. Then $s_0 = 2$, $s_1 = 2a$, and since $u, v$ are the
roots of $t^2 - (u+v)t + uv = 0$, each satisfies $t^2 = (u+v)t - uv$; multiplying by $t^{n-2}$ and
adding the two instances gives the recurrence
$$s_n = (u+v)\,s_{n-1} - (uv)\,s_{n-2} = 2a\,s_{n-1} - (a^2 - b)\,s_{n-2}.$$
Every coefficient is rational (integer if $a, b \in \ZZ$), so by induction all $s_n$ are rational
(integers). The individual irrational parts $\pm(\sqrt b)(\cdots)$ cancel in the sum. $\blacksquare$

### Worked Instance

Resolve the Hook. $(2 + \sqrt 3)(2 - \sqrt 3) = 4 - 3 = 1$, so
$$\frac{1}{2 + \sqrt 3} = \frac{2 - \sqrt 3}{1} = 2 - \sqrt 3.$$
For the integer claim, use the recurrence with $2a = 4$ and $a^2 - b = 1$, so $s_n = 4s_{n-1} -
s_{n-2}$, starting $s_0 = 2$, $s_1 = 4$: then $s_2 = 14$, $s_3 = 52$, $s_4 = 194, \dots$ — all
integers, confirming $(2+\sqrt3)^n + (2-\sqrt3)^n \in \ZZ$. A two-radical rationalization:
$$\frac{1}{\sqrt 7 - \sqrt 3} = \frac{\sqrt 7 + \sqrt 3}{(\sqrt7)^2 - (\sqrt3)^2} =
\frac{\sqrt 7 + \sqrt 3}{4}.$$

### Pitfalls

- **The conjugate flips only the radical's sign:** the conjugate of $a + \sqrt b$ is $a - \sqrt b$,
  not $-a - \sqrt b$ or $-a + \sqrt b$.
- **For two radicals, conjugate the whole expression:** $\sqrt a - \sqrt b$ pairs with
  $\sqrt a + \sqrt b$; multiplying by just "$+\sqrt a$" clears nothing.
- **The product is rational only if the radicands are rational.** $(a + \sqrt b)(a - \sqrt b) = a^2 -
  b$ is rational when $b$ is; a stray $\sqrt{}$ inside $a$ or $b$ can survive.
- **Nested radicals need iteration.** $\dfrac{1}{1 + \sqrt{2 + \sqrt 3}}$ may need conjugating more
  than once; clear the outermost radical first.
- **Don't lose the sign of the cross term** when squaring $a \pm \sqrt b$: the middle term is
  $\pm 2a\sqrt b$, and it is exactly what cancels in the symmetric sum.

:::
:::

## Connections

This technique is the difference-of-squares pattern ([alg-difference-of-squares]) aimed at surds
([ari-radical-arithmetic]): the conjugate is engineered so the cross terms cancel. The observation
that $a \pm \sqrt b$ satisfy one rational quadratic is a special case of the **Conjugate Root Theorem**
([alg-conjugate-root]) — irrational roots of rational polynomials come in conjugate pairs — and the
integer-valued symmetric sums foreshadow Newton's identities and linear recurrences. Recognition
trigger: a radical in a denominator, an expression $(a+\sqrt b)^n$ whose irrational part you suspect
cancels, or a surd you want to pin down as the root of a polynomial with rational coefficients.
