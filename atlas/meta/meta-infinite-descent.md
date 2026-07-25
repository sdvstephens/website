Hunt for positive integers $x,y$ with $x^2 = 2y^2$. Try $x=3,y=2$: close, $9$ versus $8$. Patch it and the
error just migrates to smaller numbers. Every candidate you repair seems to spawn a *smaller* candidate.
Could that breeding-of-smaller-solutions be the whole story?

## Discovery

1. Suppose positive integers $x,y$ satisfy $x^2 = 2y^2$. The right side is even, so $x^2$ is even. What does
   that force about $x$ itself — even or odd — and why?
2. Use your conclusion from step 1 to write $x = 2x_1$, and substitute into $x^2 = 2y^2$. Cancel a factor of
   $2$ and read off the resulting equation relating $x_1$ and $y$. What does *that* equation now force about
   $y$?
3. You can now write $x = 2x_1$ and $y = 2y_1$. What equation do $x_1$ and $y_1$ satisfy? How does the pair
   $(x_1,y_1)$ compare in size to the pair $(x,y)$?
4. Now suppose that, among *all* positive-integer solutions, you had picked one with $y$ as small as
   possible. Confront that choice with what step 3 manufactures. What breaks?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Infinite descent.** To prove that an equation (or configuration) has **no** solution in positive integers,
assume a solution exists and, from it, construct a *strictly smaller* positive-integer solution of the same
kind. Iterating would produce an infinite, strictly decreasing sequence of positive integers — which is
impossible. Hence no solution exists.

The identical argument, run once, is the **minimal counterexample** (the "smallest criminal"): take a
solution with some positive-integer measure as small as possible, then produce a smaller one, contradicting
minimality. Descent and minimal-counterexample are two dialects of the same idea; both rest on the fact that
the positive integers cannot decrease forever.

### Proof

Why is descent a valid proof and not a sleight of hand? Because of the **well-ordering of $\mathbb{N}$**:
every nonempty set of positive integers has a least element.

Suppose a property $S$ (say, "is a positive-integer solution, measured by $y$") were satisfiable, so the set
$M=\{\,y\in\mathbb{Z}^{+} : \text{some solution has that } y\,\}$ is nonempty. By well-ordering $M$ has a least
element $y^\ast$. The descent step takes the solution achieving $y^\ast$ and builds a solution with strictly
smaller positive $y$, i.e. an element of $M$ below $y^\ast$ — contradicting that $y^\ast$ is least. Therefore
$M$ is empty: no solution exists.

Equivalently, if solutions existed one could iterate the descent forever, yielding $y_0 \gt y_1 \gt y_2 \gt
\cdots$, an infinite strictly decreasing chain of positive integers; but such a chain would eventually fall
below $1$, which is absurd. Well-ordering is logically equivalent to the principle of induction
(**prim-induction**), so descent is induction viewed from the top down. $\blacksquare$

### Worked Instance

**Claim.** The only integer solution of $a^2 + b^2 = 3c^2$ is $a=b=c=0$.

Suppose a solution with $(a,b,c)$ not all zero exists; among all such, choose one minimizing $a^2+b^2+c^2$
(a positive integer, so a least value exists). Work modulo $3$: a square is $\equiv 0$ or $1 \pmod 3$. Since
$a^2+b^2 = 3c^2 \equiv 0 \pmod 3$, and the only way two values from $\{0,1\}$ sum to $0\pmod 3$ is $0+0$, we
get $a \equiv b \equiv 0 \pmod 3$. Write $a = 3a'$, $b = 3b'$. Then
$$9a'^2 + 9b'^2 = 3c^2 \;\Longrightarrow\; 3(a'^2 + b'^2) = c^2,$$
so $3 \mid c^2$, hence $3 \mid c$; write $c = 3c'$, giving $3(a'^2+b'^2) = 9c'^2$, i.e.
$a'^2 + b'^2 = 3c'^2$. Thus $(a',b',c')$ is another solution, not all zero (else $(a,b,c)$ were all zero),
with $a'^2+b'^2+c'^2 = \tfrac19(a^2+b^2+c^2)$ — strictly smaller. This contradicts minimality. Hence the only
solution is the trivial one. $\blacksquare$

### Pitfalls

- **The smaller object must be legitimately the same kind.** Descent fails if the "smaller solution" is only
  fractional, or drops out of the domain; keep it a genuine positive-integer solution.
- **Strict decrease is essential.** A construction that produces an equal-or-smaller solution proves nothing;
  you need $y_1 \lt y_0$ strictly, in a well-ordered measure.
- **It lives in $\mathbb{N}$, not $\mathbb{R}$.** Positive reals descend forever ($1,\tfrac12,\tfrac14,\dots$),
  so the argument needs an integer (or otherwise well-ordered) quantity to shrink.
- **Name the minimal measure.** In the minimal-counterexample form, state exactly which positive integer you
  are minimizing, or the contradiction has nothing to bite on.

:::
:::

## Connections

Prereqs: **meta-contradiction** (descent is a contradiction schema) and **prim-induction** (well-ordering is
induction turned upside down). It shares its engine with **meta-extremal** and **meta-invariants** — all three
harvest well-ordering. Descent is the historical seed of many number-theory results: it powers
**nt-vieta-jumping**, underlies the classification of Pythagorean-type equations, and is the standard route to
irrationality proofs. Recognition trigger: a Diophantine equation you suspect has *no* nontrivial solution, or
any claim of the form "no smallest counterexample can exist." Reach for descent when a solution can always be
made smaller.

## History

The method is Pierre de Fermat's, developed in the mid-seventeenth century and named by him *la descente
infinie ou indéfinie*; he wielded it to prove, among other things, that the area of a right triangle with
integer sides is never a perfect square, and that $x^4+y^4=z^4$ has no positive solution — his one fully
reconstructable descent argument. Fermat announced dozens of results "by descent" in letters and margins but
published almost no proofs, so much is folklore reconstructed by successors. Leonhard Euler in the eighteenth
century supplied rigorous descent proofs (including for the $n=3$ and $n=4$ cases of the Last Theorem) and
made the technique a standard instrument. Its logical backbone, the well-ordering principle, was clarified in
the nineteenth century and shown equivalent to mathematical induction, placing Fermat's intuition on firm
axiomatic ground.
