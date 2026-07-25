The expression $x^3 - 3x^2 + 2x - 6$ has four terms and no factor common to all of them, so pulling
out a single monomial does nothing. Yet it factors cleanly into $(x - 3)(x^2 + 2)$. Where does that
hidden factorization come from when there is no common factor to grab?

## Discovery

1. Look at $ax + ay + bx + by$. No single letter divides all four terms — but split the four into two
   pairs, $(ax + ay)$ and $(bx + by)$, and factor the greatest common factor out of each pair
   separately. Write what remains, and describe the new common structure that has appeared across the
   two groups.
2. Finish factoring the expression from step 1 by treating the shared bracket as one object and
   pulling it out. Now try the same two-move idea — group into pairs, factor each pair, then extract
   the common bracket — on $x^3 - 3x^2 + 2x - 6$. What factorization drops out?
3. In step 2 the grouping worked because the two brackets came out *identical*. Take a case where a
   naive grouping fails, say $x^3 + 2x^2 + 3x + 6$ grouped as $(x^3 + 2x^2)$ and $(3x + 6)$ — does it
   work here? Then rearrange or regroup the same four terms and see whether a working pairing exists.
   What has to be true about the two brackets for the method to close?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Factoring by grouping.** To factor a polynomial whose terms share no overall common factor, partition
its terms into groups, factor the greatest common factor out of each group, and — if the groups then
share a common polynomial factor — extract that shared factor. The archetype with four terms is
$$ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).$$
The method **succeeds exactly when a grouping produces the same leftover bracket in every group**; it
may require reordering the terms first, and not every polynomial can be grouped (grouping factors, it
does not create factors that are not there). A key application is the **$ac$-method** for a quadratic
$ax^2 + bx + c$: split the middle term $bx$ into two terms whose coefficients multiply to $ac$ and add
to $b$, then group.

### Proof

The method is a single, honest application of the distributive law read in both directions. Suppose a
polynomial is written as $G_1 + G_2 + \cdots + G_t$, where each group $G_i$ factors as
$G_i = c_i \cdot F$ with a **common** second factor $F$ (a polynomial) after each group's own GCF
$c_i$ is removed. Then the distributive law gives
$$G_1 + \cdots + G_t = c_1 F + c_2 F + \cdots + c_t F = (c_1 + c_2 + \cdots + c_t)\,F,$$
which is the claimed factorization; expanding the right side by distribution returns the original sum,
so the identity is exact. For the four-term archetype, grouping $(ax + ay) + (bx + by)$ and factoring
each pair yields $a(x + y) + b(x + y)$, with common factor $F = x + y$ and $c_1 = a$, $c_2 = b$,
giving $(a + b)(x + y)$.

For the $ac$-method: choose integers $p, q$ with $p + q = b$ and $pq = ac$, and split the middle term,
$$ax^2 + bx + c = ax^2 + px + qx + c.$$
Group and factor each pair, taking GCF $x$ from the first and GCF $\tfrac{q}{?}$ handled concretely:
$$ax^2 + px = x(ax + p), \qquad qx + c = \tfrac{q}{a}\big(ax + \tfrac{ac}{q}\big) = \tfrac{q}{a}(ax + p),$$
where the last step uses $\tfrac{ac}{q} = p$, which is exactly the condition $pq = ac$. So both groups
carry the identical bracket $(ax + p)$, and
$$ax^2 + bx + c = \Big(x + \tfrac{q}{a}\Big)(ax + p).$$
Thus $pq = ac$ is precisely what forces the grouped brackets to match; such integer $p, q$ exist iff
the discriminant $b^2 - 4ac$ is a perfect square. (In practice one clears the fraction $\tfrac{q}{a}$
into a genuine integer factor; the worked instance shows the clean integer version.) $\blacksquare$

### Worked Instance

Resolve the Hook, $x^3 - 3x^2 + 2x - 6$. Group into pairs:
$$(x^3 - 3x^2) + (2x - 6) = x^2(x - 3) + 2(x - 3) = (x^2 + 2)(x - 3).$$
Both groups produced the identical bracket $(x - 3)$, which factors out — giving
$(x - 3)(x^2 + 2)$, matching the claim (and $x^2 + 2$ has no real roots, so this is the full real
factorization).

Now the $ac$-method on $6x^2 + 11x + 3$: here $ac = 6 \cdot 3 = 18$ and $b = 11$; the pair
$9, 2$ satisfies $9 + 2 = 11$ and $9 \cdot 2 = 18$. Split and group:
$$6x^2 + 9x + 2x + 3 = 3x(2x + 3) + 1(2x + 3) = (3x + 1)(2x + 3).$$
Expanding confirms $6x^2 + 11x + 3$. ✓

### Pitfalls

- **Grouping is not guaranteed** — it only works when a rearrangement makes every group's leftover
  bracket match. A wrong pairing (like $x^3 + 2x^2$ with $3x + 6$ producing $x^2(x+2)$ and
  $3(x + 2)$, which *does* work — but try $x^3 + 3x + 2x^2 + 6$ carelessly) can obscure a valid one;
  reorder before concluding it fails.
- **Watch signs when factoring a group.** From $2x - 6$ factor $+2$ to get $2(x - 3)$; if the second
  group were $-2x + 6$ you must factor $-2$ to expose the same $(x - 3)$.
- **Factor the GCF, not just a piece.** In $x^3 - 3x^2$ pull out $x^2$, not merely $x$, or the
  brackets will not align.
- **The two brackets must be identical, not merely similar.** $(x - 3)$ and $(3 - x)$ differ by a sign;
  handle that by factoring a $-1$ so both read $(x - 3)$.
- **$ac$-method needs $pq = ac$, not $pq = c$.** Forgetting the leading coefficient $a$ inside the
  product is the standard error for non-monic quadratics.

:::
:::

## Connections

Grouping is the distributive law ([alg-distribution-factoring]) applied twice — once to strip each
group's common factor, once to pull out the shared bracket — and the $ac$-method it powers is the
standard route to **factoring quadratics** ([alg-factoring-quadratics]) when the leading coefficient
is not $1$. It is often the move that exposes a factor the Rational Root Theorem predicts, or that
reduces a quartic to a product of quadratics. Recognition trigger: a polynomial with four (or an even
number of) terms, no overall common factor, but a suggestive pairing — or a stubborn non-monic
quadratic.

## History

Factoring by grouping has no single inventor: it is a direct consequence of the distributive law,
which was understood implicitly in the symbolic algebra that Viète and Descartes shaped in the late
sixteenth and early seventeenth centuries and made fully explicit as an axiom of rings in the abstract
algebra of the late nineteenth and twentieth centuries. As a named schoolbook technique — "group,
factor each group, pull out the common binomial" — it belongs to the modern pedagogy of elementary
algebra rather than to any research milestone. The $ac$-method for splitting the middle term of a
quadratic is likewise a teaching device, a systematic replacement for trial-and-error factoring that
became standard in twentieth-century textbooks. Its value is entirely practical: it turns a search
into a procedure by converting "find two binomials" into "find two numbers with a given sum and
product."
