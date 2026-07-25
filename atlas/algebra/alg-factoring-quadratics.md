The equation $x^2 - 7x + 12 = 0$ looks like it wants machinery, yet its two answers are just
$3$ and $4$ — the very pair a schoolchild would produce for the puzzle "which two numbers add to
$7$ and multiply to $12$?" Coincidence? Try $x^2 - 8x + 15 = 0$: its answers turn out to be $3$
and $5$, which again add to $8$ and multiply to $15$. An addition-and-multiplication riddle seems
to be quietly solving quadratic equations. Why?

## Discovery

1. Multiply out $(x - r)(x - s)$ using the distributive law and collect like terms into standard
   form $x^2 + (\ldots)x + (\ldots)$. Write the coefficient of $x$ and the constant term, each as
   an expression in $r$ and $s$.
2. Set your expanded form from step $1$ equal, term for term, to $x^2 - 7x + 12$. This gives two
   conditions the numbers $r$ and $s$ must jointly satisfy. Write those two conditions, then find a
   pair $r, s$ meeting both.
3. Suppose you have reached $(x - r)(x - s) = 0$ with actual numbers in place of $r$ and $s$. A
   product of two real numbers equals $0$: what must be true of at least one of the two factors?
   State the principle you are invoking as a general sentence about real numbers, then read off
   every value of $x$ that solves the equation.
4. Test that principle's fine print. Does $uv = 6$ force $u = 6$ or $v = 6$? Does $uv = 0$ force
   $u = 0$ or $v = 0$? Explain what is special about the number $0$ that makes the second work and
   the first fail.
5. Attack a leading coefficient. Find constants making $(2x + p)(x + q)$ expand to
   $2x^2 + 7x + 3$: match the constant term and the coefficient of $x$. Once factored, apply the
   principle from step $3$ to solve $2x^2 + 7x + 3 = 0$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Two tools combine here.

**Zero-product property.** For real numbers (indeed in any field) $u, v$,
$$uv = 0 \iff u = 0 \ \text{or}\ v = 0.$$
This is exactly the statement that the reals have **no zero divisors**: a product cannot be $0$
unless a factor already is.

**Factoring a monic quadratic.** Expanding gives the master identity
$$(x + p)(x + q) = x^2 + (p+q)\,x + pq.$$
Hence $x^2 + bx + c = (x + p)(x + q)$ precisely when $p + q = b$ and $pq = c$: to factor
$x^2 + bx + c$, find two numbers with **sum $b$ and product $c$**. Written through the roots
$r = -p$, $s = -q$, this is $x^2 + bx + c = (x - r)(x - s)$ with $r + s = -b$ and $rs = c$.

**The method.** To solve a quadratic equation: (1) put it in standard form with $0$ on one side;
(2) factor the quadratic; (3) by the zero-product property, set *each* factor to $0$ and solve the
resulting linear equations; the roots obtained are **all** of them. For a leading coefficient
$a \neq 1$, factor as $a(x - r)(x - s)$, or find $(ax + p)(x + q)$ directly by matching sum and
product across the cross terms. The technique applies whenever such factors exist over the numbers
you allow; when they do not, completing the square or the quadratic formula takes over.

### Proof

*Zero-product property.* If $u = 0$ or $v = 0$ then $uv = 0$, since $0$ times anything is $0$.
Conversely suppose $uv = 0$ and $u \neq 0$. In a field $u$ has a multiplicative inverse
$u^{-1}$; multiply both sides on the left by it:
$$u^{-1}(uv) = u^{-1}\cdot 0 = 0, \qquad\text{while}\qquad u^{-1}(uv) = (u^{-1}u)\,v = 1\cdot v = v.$$
Equating, $v = 0$. So $uv = 0$ forces $u = 0$ or $v = 0$; the two directions give the
biconditional. The step that fails for a nonzero target is precisely the multiplication by
$0$: no analogous cancellation turns $uv = 6$ into information about a single factor.

*Factoring identity.* By the distributive law and the square-of-binomial machinery of
`alg-square-of-binomial`,
$$(x + p)(x + q) = x(x+q) + p(x+q) = x^2 + qx + px + pq = x^2 + (p+q)x + pq.$$
Two polynomials in $x$ are equal as expressions exactly when corresponding coefficients agree, so
$(x+p)(x+q) = x^2 + bx + c$ holds identically iff $p + q = b$ and $pq = c$. When such real $p, q$
exist the factorization is valid; substituting $r = -p, s = -q$ recasts it as $(x-r)(x-s)$ with
$r + s = -b$, $rs = c$.

*The method finds every root and no impostor.* Given $x^2 + bx + c = (x - r)(x - s)$, the equation
$x^2 + bx + c = 0$ is equivalent to $(x - r)(x - s) = 0$. By the zero-product property this holds
iff $x - r = 0$ or $x - s = 0$, i.e. iff $x = r$ or $x = s$. Because the property is a
biconditional, the set $\{r, s\}$ is *exactly* the solution set — no root is missed and no
non-root sneaks in. The same argument runs for $a(x-r)(x-s) = 0$: since $a \neq 0$, dividing by
$a$ leaves $(x-r)(x-s) = 0$, so the roots are unchanged. $\blacksquare$

### Worked Instance

Resolve the Hook. For $x^2 - 7x + 12 = 0$ seek two numbers with sum $b = -7$ and product
$c = 12$; the pair $-3, -4$ works ($-3 + -4 = -7$, $(-3)(-4) = 12$), so
$$x^2 - 7x + 12 = (x - 3)(x - 4) = 0.$$
The zero-product property splits this into $x - 3 = 0$ or $x - 4 = 0$, giving $x = 3$ or $x = 4$.
The "add to $7$, multiply to $12$" riddle was never a coincidence: the two roots $3$ and $4$
*are* the numbers whose sum is $-b = 7$ and whose product is $c = 12$. Likewise
$x^2 - 8x + 15 = (x - 3)(x - 5) = 0$ yields $x = 3$ or $x = 5$, summing to $8$ and multiplying to
$15$.

With a leading coefficient: $2x^2 + 7x + 3$. Matching $(2x + p)(x + q) = 2x^2 + (2q + p)x + pq$ to
$2x^2 + 7x + 3$ needs $pq = 3$ and $2q + p = 7$; taking $p = 1, q = 3$ gives
$(2x + 1)(x + 3) = 2x^2 + 7x + 3$ (expand to confirm). Then $(2x+1)(x+3) = 0$ splits into
$2x + 1 = 0$ or $x + 3 = 0$, so $x = -\tfrac{1}{2}$ or $x = -3$.

### Pitfalls

- **The zero-product property needs a $0$, not any number.** From $(x-2)(x-3) = 2$ you may
  *not* write $x - 2 = 2$ or $x - 3 = 2$. First expand and re-standardize:
  $x^2 - 5x + 6 = 2 \Rightarrow x^2 - 5x + 4 = 0 \Rightarrow (x-1)(x-4) = 0$, giving $x = 1, 4$.
- **Roots flip the sign of the factor's constant.** $(x - 3)(x - 4) = 0$ has roots $+3, +4$, not
  $-3, -4$. The number that *kills* the factor $x - 3$ is $x = +3$.
- **Sum is $-b$, product is $c$.** For $x^2 + bx + c$ the *roots* sum to $-b$ (the numbers $p,q$ in
  $(x+p)(x+q)$ sum to $+b$). Mixing these signs is the classic factoring slip; always check by
  re-expanding.
- **Not every quadratic factors over the rationals.** $x^2 - 2$ and $x^2 + x + 1$ have no such
  factorization; factoring is a tool for when nice roots exist. When it stalls, reach for
  completing the square.
- **$uv = k$ tells you nothing about single factors unless $k = 0$.** Do not "solve"
  $(x)(x-5) = 6$ by setting $x = 6$; only zero has the splitting property.

:::
:::

## Connections

This is `alg-distribution-factoring` and `alg-square-of-binomial` run in reverse and aimed at
`alg-quadratic-intro`'s equations: expanding two binomials is the forward map, and factoring is
its inverse, made *useful* by the zero-product property — the hinge that converts a factored
equation into two linear ones. The sum-and-product relations $r + s = -b$, $rs = c$ are the
degree-$2$ case of **Vieta's formulas** (`alg-vieta-quadratic`), which read a polynomial's
coefficients straight off its roots. The zero-product property itself is the defining feature of an
**integral domain**; it is why factoring is a legitimate solving strategy over the reals and would
fail in a ring with zero divisors. Recognition trigger: a quadratic set to $0$ with modest integer
coefficients, or any prompt naming "two numbers with a given sum and product" — that is a
factorable quadratic asking to be split.

## History

Factoring a quadratic into two linear pieces is the algebraic shadow of a deep idea: that a polynomial is determined by its roots. François Viète, at the close of the sixteenth century, was the first to see clearly the relationship between the coefficients of a quadratic and the sum and product of its roots, which is exactly what factoring exploits. Thomas Harriot, in the early seventeenth century, pushed the idea further by writing polynomials directly as products of factors corresponding to their roots. This built on the older completing-the-square methods of al-Khwarizmi and Brahmagupta for actually finding those roots. Factoring mattered because it turns solving $x^2 + bx + c = 0$ into a search for two numbers with a given sum and product, an intuitive method that also illuminates the general connection between roots and coefficients formalized in Vieta's relations.
