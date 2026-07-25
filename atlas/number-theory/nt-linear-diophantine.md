You have unlimited $6$-cent and $10$-cent stamps. Can you make exactly $38$ cents? Exactly $37$?
One of these is possible and one is flatly impossible — and the reason isn't luck, it's a single
divisibility test you can apply at a glance.

## Discovery

1. "Make $c$ cents from $a$-cent and $b$-cent stamps" is the equation $ax + by = c$ in integers.
   Recall from Bézout that the values $ax + by$ range over exactly one familiar set as $x,y$ vary
   over $\ZZ$. Which set? What condition on $c$ is therefore necessary for a solution to exist?
2. Suppose that condition holds, say $c = g\cdot t$ where $g = \gcd(a,b)$. Bézout hands you integers
   $u, v$ with $au + bv = g$. Scale that identity by $t$. What particular solution $(x_0, y_0)$ of
   $ax + by = c$ do you obtain?
3. Now suppose $(x_0, y_0)$ and $(x, y)$ are *both* solutions. Subtract the two equations. You get
   $a(x - x_0) + b(y - y_0) = 0$. Divide through by $g$ and let $a' = a/g,\ b' = b/g$ (so
   $\gcd(a',b') = 1$). What does $a'(x-x_0) = -b'(y-y_0)$ force, using coprimality, about $x - x_0$?
4. Assemble step 3 into a formula for *all* solutions in terms of one parameter. Test the Hook:
   is $37$ or $38$ reachable with $a=6, b=10$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The linear Diophantine equation $ax + by = c$ (with $a, b$ not both zero) has an integer solution
**if and only if $\gcd(a,b) \mid c$**. When it is solvable, if $(x_0, y_0)$ is any one solution, then
the complete set of integer solutions is
$$x = x_0 + \frac{b}{g}\,t, \qquad y = y_0 - \frac{a}{g}\,t, \qquad t \in \ZZ,$$
where $g = \gcd(a,b)$. Thus solvable equations have infinitely many solutions, forming a single
arithmetic family parametrized by $t$.

### Proof

**Solvability criterion.** By Bézout, the set of values $\{ax + by : x,y \in \ZZ\}$ is exactly the
set of multiples of $g = \gcd(a,b)$. Hence $ax + by = c$ has a solution iff $c$ is a multiple of
$g$, i.e. iff $g \mid c$.

**A particular solution.** Suppose $g \mid c$, say $c = gt$. Bézout gives $u,v$ with $au + bv = g$;
multiplying by $t$, $\ a(ut) + b(vt) = gt = c$. So $(x_0, y_0) = (ut, vt)$ solves the equation.

**All solutions.** Let $(x, y)$ be any solution. Subtracting $ax_0 + by_0 = c$ from $ax + by = c$,
$$a(x - x_0) + b(y - y_0) = 0.$$
Divide by $g$ and set $a' = a/g,\ b' = b/g$, so $\gcd(a', b') = 1$:
$$a'(x - x_0) = -\,b'(y - y_0).$$
Thus $b' \mid a'(x - x_0)$; since $\gcd(a', b') = 1$, Euclid's lemma gives $b' \mid (x - x_0)$. Write
$x - x_0 = b' t = (b/g)t$ for some integer $t$. Substituting back,
$a'(b't) = -b'(y - y_0)$, so $y - y_0 = -a't = -(a/g)t$. Hence every solution has the stated form.
Conversely, for any integer $t$,
$$a\!\left(x_0 + \tfrac{b}{g}t\right) + b\!\left(y_0 - \tfrac{a}{g}t\right) = ax_0 + by_0 + \tfrac{ab}{g}t - \tfrac{ab}{g}t = c,$$
so every such pair is indeed a solution. The solution set is exactly the described family.
$\blacksquare$

### Worked Instance

Stamps: $a = 6,\ b = 10$, so $g = \gcd(6,10) = 2$. For $c = 37$: $2 \nmid 37$, so **no** integer
solution — $37$ cents is impossible, exactly as the Hook hinted. For $c = 38$: $2 \mid 38$, so it is
solvable. Find one solution: $\gcd(6,10)=2$ with $6\cdot 2 + 10\cdot(-1) = 2$, scale by $19$ to get
$6\cdot 38 + 10\cdot(-19) = 38$, i.e. $(x_0,y_0) = (38,-19)$. All solutions:
$$x = 38 + 5t, \quad y = -19 - 3t \quad (t \in \ZZ),$$
using $b/g = 5$ and $a/g = 3$. Choosing $t = -7$ gives the non-negative, realizable $(x,y) = (3,2)$:
three $6$-cent and two $10$-cent stamps make $18 + 20 = 38$.

### Pitfalls

- The test is $\gcd(a,b) \mid c$, **not** "$c$ is even" or any ad hoc parity guess — compute the gcd.
- In the general-solution formula the coefficients are $b/g$ and $a/g$ (**divided by the gcd**), and
  they attach to *opposite* variables with *opposite* signs. Dropping the $/g$ overcounts /
  undercounts solutions.
- "Solvable in integers" is not "solvable in non-negative integers." Many word problems (stamps,
  coins) need $x, y \ge 0$; you then restrict the parameter $t$ to the range keeping both non-negative,
  which may leave finitely many or zero valid solutions (the Chicken McNugget / Frobenius question).
- If $\gcd(a,b) \nmid c$, there are **no** solutions at all — don't hunt for one.

:::
:::

## Connections

Prereqs: Bézout's identity, which supplies both the solvability test (gcd divides $c$) and a starting
particular solution. Coprimality plus Euclid's lemma is what pins down the step size $b/g$ in the
solution family. This node feeds directly into the Chinese Remainder Theorem (a system of such
congruences) and into Frobenius / coin-problem questions once non-negativity is imposed. Recognition
trigger: an equation linear in two unknowns that must be solved over the integers, or a
"make exact change / reach an exact total" puzzle.
