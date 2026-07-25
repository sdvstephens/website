Two equations now: $x + y = 7$ and $x - y = 1$. Each one *alone* has a whole line of solutions, but
together they seem to allow only a single pair. Which pair is it — and can you extract it by a
reliable move instead of guessing?

## Discovery

1. Start from $x + y = 7$ and write $x$ **by itself** in terms of $y$. Take that expression and put
   it in place of $x$ in the *second* equation $x - y = 1$. You now have one equation in $y$ only —
   solve it for $y$, then use your value to recover $x$. Record the pair.
2. Fresh start from the original two equations. This time, instead of isolating a variable, add the
   equations **left-side to left-side and right-side to right-side**. Which variable vanishes in the
   sum? Solve the resulting single-variable equation for the survivor, then recover the other. Record
   the pair.
3. Compare the pairs from steps 1 and 2. Then justify step 2: if a pair $(x,y)$ makes *both* original
   equations true, why must it also make their *sum* true — and, pushing further, why must it satisfy
   any equation of the form $\alpha(\text{first}) + \beta(\text{second})$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **system** of two linear equations,
$$\begin{aligned} a_1 x + b_1 y &= c_1,\\ a_2 x + b_2 y &= c_2,\end{aligned}$$
can be solved by either of two moves, both of which collapse it to *one equation in one variable*.

- **Substitution.** Solve one equation for one variable (say $x = g(y)$), substitute that expression
  into the *other* equation to get a single equation in $y$, solve it, then back-substitute for $x$.
- **Elimination.** Multiply the equations by well-chosen nonzero constants so that one variable has
  matching or opposite coefficients, then add or subtract to cancel it; solve the resulting
  one-variable equation and back-substitute.

Both rest on one principle: **any pair satisfying both equations satisfies every linear combination**
$\alpha\,E_1 + \beta\,E_2$ of them, and (for $\beta \ne 0$) replacing $E_2$ by $\alpha E_1 + \beta
E_2$ leaves the solution set unchanged. So neither move can create or destroy solutions, and the two
methods return the *same* pair.

### Proof

Write $E_1:\ a_1 x + b_1 y - c_1 = 0$ and $E_2:\ a_2 x + b_2 y - c_2 = 0$.

**Substitution preserves the solution set.** Suppose $E_1$ can be solved for $x$: there is a
function $g$ with $E_1(x,y) = 0 \iff x = g(y)$ (available whenever $x$'s coefficient in $E_1$ is
nonzero; a linear equation makes $g(y)$ itself linear). Then
$$\big(E_1(x,y)=0 \ \text{and}\ E_2(x,y)=0\big)
\iff \big(x = g(y) \ \text{and}\ E_2(g(y),\,y)=0\big).$$
Every link is an equivalence, so no solution is gained or lost. The right-hand condition
$E_2(g(y),y)=0$ is one equation in $y$; each of its solutions $y_0$ determines exactly one
$x_0 = g(y_0)$, giving the system's solutions.

**Elimination preserves the solution set.** First, any solution survives combination: if
$(x_0,y_0)$ satisfies $E_1$ and $E_2$, then for all scalars $\alpha,\beta$,
$$\alpha\,(a_1 x_0 + b_1 y_0 - c_1) + \beta\,(a_2 x_0 + b_2 y_0 - c_2) = \alpha\cdot 0 + \beta\cdot 0
= 0,$$
so $(x_0,y_0)$ satisfies $\alpha E_1 + \beta E_2$. Now fix $\beta \ne 0$ and compare the system
$\{E_1,\ E_2\}$ with $\{E_1,\ \alpha E_1 + \beta E_2\}$. Any solution of the first satisfies both new
equations (just shown). Conversely, from $E_1$ and $\alpha E_1 + \beta E_2$ we recover
$$E_2 = \frac{1}{\beta}\big[(\alpha E_1 + \beta E_2) - \alpha E_1\big],$$
so any solution of the new system satisfies $E_2$ as well. The two systems have identical solution
sets — they are **equivalent**. Choosing $\alpha = a_2,\ \beta = -a_1$ (with $a_1 \ne 0$) makes the
$x$-coefficient of $\alpha E_1 + \beta E_2$ equal to $a_2 a_1 - a_1 a_2 = 0$, eliminating $x$ and
leaving one equation in $y$; solve and back-substitute into $E_1$.

Both methods reduce the system to a single equation in one variable with the *same* solution set, so
they produce the same pair. $\blacksquare$

### Worked Instance

Resolve the Hook, $x + y = 7$ and $x - y = 1$, both ways.

*Substitution.* From the first, $x = 7 - y$. Put this into the second:
$(7 - y) - y = 1 \Rightarrow 7 - 2y = 1 \Rightarrow y = 3$, hence $x = 7 - 3 = 4$.

*Elimination.* Add the equations: $(x + y) + (x - y) = 7 + 1$, i.e. $2x = 8$, so $x = 4$; then
$4 + y = 7$ gives $y = 3$.

Both roads land on $(x,y) = (4,3)$. Check: $4 + 3 = 7$ and $4 - 3 = 1$. The second equation was
exactly the extra constraint needed to cut the line of the first down to one point.

### Pitfalls

- **Substitute into the *other* equation.** After solving $E_1$ for $x$, plugging that expression
  back into $E_1$ collapses to $0 = 0$ — true but useless. The new information lives in $E_2$.
- **Scale *every* term, on *both* sides.** Multiplying an equation by a constant to line up
  coefficients means the whole equation, not just the term you were watching.
- **Mind add-versus-subtract.** Matching coefficients cancel on *subtraction*; opposite coefficients
  cancel on *addition*. Getting this backward doubles a variable instead of removing it.
- **A solution is a *pair*.** Finding one variable is half the job; always back-substitute for the
  other before declaring victory.

:::
:::

## Connections

Turns the "a line, not a point" fact about a single two-variable equation into a procedure:
a second equation supplies a second constraint, and substitution or elimination fuses the two into
one solvable equation. The elimination principle — solutions are preserved under linear combination —
is the elementary seed of Gaussian elimination and row operations in linear algebra, and it sets up
the trichotomy of solution counts in the next node. Recognition trigger: two or more equations
sharing the same unknowns, asked to be true *simultaneously* — a "system" — calls for substitution
or elimination.

## History

Techniques for eliminating one unknown to solve for another are remarkably ancient. The Chinese *Nine Chapters on the Mathematical Art* (compiled by around $200$ BC to $100$ AD) solves systems by an array-and-elimination procedure, *fangcheng*, that is essentially the method later credited to Gauss. Similar substitution ideas appear in Diophantus and in Islamic and Indian algebra. In Europe the systematic elimination of variables was refined by Isaac Newton, Leibniz — who introduced determinants for the purpose around $1693$ — and finally Carl Friedrich Gauss, whose elimination scheme in the early nineteenth century became the standard algorithm. Substitution and elimination mattered because they reduce a hard simultaneous problem to a sequence of single-variable ones, the divide-and-conquer strategy at the heart of linear algebra and of solving systems by hand or by machine.
