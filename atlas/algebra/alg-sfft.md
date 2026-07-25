Find all positive integers with $xy + 5x + 7y = 100$. Trying values feels endless — but the whole
solution set drops out the instant you add one carefully chosen number to both sides.

## Discovery

1. Look at $xy + ax + by$. It is *almost* the expansion of $(x + b)(y + a)$. Expand $(x+b)(y+a)$
   fully — what extra term appears beyond $xy + ax + by$?
2. So $xy + ax + by$ equals $(x+b)(y+a)$ minus something. What must you *add* to $xy + ax + by$ to
   turn it exactly into a product of two binomials?
3. Apply this to $xy + 5x + 7y = 100$. Add the right constant to both sides so the left becomes a
   clean product $(x + \underline{\ \ })(y + \underline{\ \ })$. What equation do you now have?
4. A product of two integers equals a fixed number $N$. How do you list *every* solution from
   here? (Think about the divisors of $N$, and don't forget sign and positivity constraints.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For any numbers,
$$xy + ax + by = (x + b)(y + a) - ab.$$
Equivalently $xy + ax + by + ab = (x+b)(y+a)$. Adding the "correction term" $ab$ completes the
expression into a product, converting an equation $xy + ax + by = N$ into
$(x+b)(y+a) = N + ab$, whose integer solutions are read off from the divisor pairs of $N + ab$.
The competition name **"Simon's Favorite Factoring Trick" (SFFT) is folklore**, not a formal
theorem; in a written solution just show the factorization.

### Proof

Expand the right-hand side directly:
$$(x+b)(y+a) = xy + ax + by + ab.$$
Subtracting $ab$ from both sides gives $xy + ax + by = (x+b)(y+a) - ab$, which is an identity in
$x, y, a, b$ over any commutative ring. $\blacksquare$

### Worked Instance

Solve $xy + 5x + 7y = 100$ in positive integers. Here $a = 5$, $b = 7$, so the correction term is
$ab = 35$. Add $35$ to both sides:
$$xy + 5x + 7y + 35 = 135 \quad\Longrightarrow\quad (x + 7)(y + 5) = 135.$$
Since $x, y \ge 1$, we need $x + 7 \ge 8$ and $y + 5 \ge 6$. Factor $135 = 3^3 \cdot 5$; its
divisors are $1,3,5,9,15,27,45,135$. We need a factor pair $(x+7)(y+5) = 135$ with $x+7 \ge 8$ and
$y + 5 \ge 6$. Checking divisor pairs: $x+7 = 9, y+5 = 15 \Rightarrow (x,y) = (2, 10)$;
$x+7 = 15, y+5 = 9 \Rightarrow (8, 4)$; $x+7 = 27, y+5 = 5$ fails ($y+5 \ge 6$);
$x+7 = 45, y+5 = 3$ fails; $x+7=135,y+5=1$ fails. So the positive solutions are $(x,y) = (2,10)$
and $(8,4)$ — found without any blind search.

### Pitfalls

- The correction term is $ab$ (the product of the two linear coefficients), **not** $a+b$ or $1$.
- Watch which binomial gets which constant: $(x + b)(y + a)$ — the constant paired with $x$ is the
  coefficient $b$ of $y$, and vice versa. Getting them swapped changes the correction term unless
  you also swap consistently.
- When enumerating divisor pairs, always impose the sign/positivity constraints from the original
  variables ($x + b > 0$ etc.); forgetting them admits spurious "solutions."

:::
:::

## Connections

Prereqs: power/product factorizations (the idea of forcing an expression into a product). SFFT is
the workhorse for Diophantine equations of the form "bilinear in $x,y$ = constant," ubiquitous on
the AMC/AIME. It foreshadows Vieta (rewriting a relation among unknowns as a product/sum of roots).
Recognition trigger: an equation with an $xy$ term plus linear terms plus a constant, asking for
integer solutions.
