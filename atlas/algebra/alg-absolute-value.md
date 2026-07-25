On Monday the thermometer reads $8$ degrees below zero; on Friday, $8$ degrees above. The numbers
$-8$ and $8$ disagree in sign yet share something: each sits exactly $8$ marks from zero. Ask a
sharper question — *which* numbers sit exactly $5$ marks from $3$? — and something strange happens:
there is always more than one answer, and it never seems to be more than two. Why?

## Discovery

Work on a number line, using only how you already picture negatives sitting to the left of $0$.

1. How many unit steps separate $0$ from $5$? From $-5$? From $0$ itself? Now write a single
   instruction — one machine — that takes *any* number as input and returns how far that number is
   from $0$. Check that your machine returns a value that is never negative, whether you feed it a
   positive input, a negative input, or $0$.
2. Split your machine at $0$ and describe it in two cases. When the input is already $\ge 0$, what
   does the machine hand back, unchanged? When the input is negative — say $-5$ or $-100$ — the raw
   number carries the wrong sign to be a distance. Which single operation from *negation* converts
   $-5$ into its distance $5$? Write the two-case instruction explicitly.
3. Feed your machine two negatives multiplied together: compute the machine's value on $(-3)(4)$,
   then compare it against (the machine on $-3$) times (the machine on $4$). Try one more pair with
   two negative factors. Conjecture how the machine treats a product.
4. Add before measuring: compare the machine's value on $3 + (-5)$ against (machine on $3$) plus
   (machine on $-5$). Then compare the machine on $3 + 5$ against (machine on $3$) plus (machine on
   $5$). In which case did the two quantities come out equal, and in which did the "measure the sum"
   side come out *smaller*? State the inequality you believe always holds between them.
5. Back to the Hook. "Exactly $5$ marks from $3$" means the distance from $x$ to $3$ equals $5$.
   Translate "distance from $x$ to $3$" into an expression built from your machine, set it equal to
   $5$, and — before solving — say how many solutions you expect and why. Then do the same for
   "*within* $5$ marks of $3$": describe that set as a single stretch of the line between two
   endpoints.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **absolute value** of a real number $x$, written $|x|$, is its distance from $0$ on the number
line. As a formula it is the two-case (piecewise) function
$$|x| = \begin{cases} \ \ x & \text{if } x \ge 0,\\[2pt] -x & \text{if } x \lt 0. \end{cases}$$
The map $x \mapsto |x|$ is a genuine function $\RR \to \RR$; its graph is the **V** made of the
line $y=x$ for $x\ge 0$ and its mirror image $y=-x$ for $x\lt 0$, with the corner at the origin.
More generally $|x-a|$ is the distance between $x$ and $a$.

Its core algebra:

- **Nonnegativity.** $|x| \ge 0$, with $|x| = 0$ only when $x = 0$; and $|-x| = |x|$.
- **Multiplicativity.** $|xy| = |x|\,|y|$ for all real $x,y$.
- **Triangle inequality.** $|x+y| \le |x| + |y|$, with equality exactly when $x$ and $y$ have the
  same sign (or one is $0$).

And the two solving templates, for $r \gt 0$:

- **Equation.** $|x-a| = r \iff x = a+r \ \text{ or } \ x = a-r$ — the two points $r$ from $a$.
- **Inequalities.** $|x-a| \lt r \iff a-r \lt x \lt a+r$ (a band around $a$), while
  $|x-a| \gt r \iff x \lt a-r \ \text{ or } \ x \gt a+r$ (everything outside that band).

### Proof

Throughout, work from the definition and the sign facts of *negation*: if $x\lt 0$ then $-x\gt 0$,
and $-(-x)=x$.

**Nonnegativity and $|-x|=|x|$.** If $x\ge 0$ then $|x|=x\ge 0$. If $x\lt 0$ then $|x|=-x$, and
$-x\gt 0$, so $|x|\gt 0$. Thus $|x|\ge 0$ always, and $|x|=0$ forces the first case ($x=0$), since
the second case gives a strictly positive value. For $|-x|=|x|$: if $x\gt 0$ then $-x\lt 0$, so
$|-x|=-(-x)=x=|x|$; if $x\lt 0$ then $-x\gt 0$, so $|-x|=-x=|x|$; and $|-0|=|0|$.

**The bracketing bound $-|x| \le x \le |x|$.** If $x\ge 0$: then $x=|x|$, so $x\le|x|$; and
$-|x|=-x\le 0\le x$. If $x\lt 0$: then $x\lt 0\le |x|$, and $-|x|=-(-x)=x$, so $-|x|\le x$. Either
way $-|x|\le x\le |x|$. We also record the reverse **collapse lemma**: if $c\ge 0$ and
$-c\le t\le c$, then $|t|\le c$. Indeed if $t\ge 0$ then $|t|=t\le c$; if $t\lt 0$ then $|t|=-t$,
and $-c\le t$ gives $-t\le c$. The strict version is identical: $-c\lt t\lt c \iff |t|\lt c$.

**Multiplicativity $|xy|=|x|\,|y|$.** If either factor is $0$, both sides are $0$. Otherwise argue
by the four sign combinations, using that a product of two numbers is $\ge 0$ when the signs agree
and $\le 0$ when they differ.
- $x\ge 0,\ y\ge 0$: then $xy\ge 0$, so $|xy|=xy=|x|\,|y|$.
- $x\ge 0,\ y\lt 0$: then $xy\le 0$, so $|xy|=-(xy)=x\,(-y)=|x|\,|y|$.
- $x\lt 0,\ y\ge 0$: symmetric to the previous case, $|xy|=(-x)\,y=|x|\,|y|$.
- $x\lt 0,\ y\lt 0$: then $xy\gt 0$, so $|xy|=xy=(-x)(-y)=|x|\,|y|$, using $(-x)(-y)=xy$.

**Triangle inequality $|x+y|\le|x|+|y|$.** Apply the bracketing bound to each of $x$ and $y$:
$$-|x|\le x\le |x|, \qquad -|y|\le y\le |y|.$$
Adding these two chains, $-(|x|+|y|) \le x+y \le |x|+|y|$. With $c=|x|+|y|\ge 0$ and $t=x+y$, the
collapse lemma gives $|x+y|\le |x|+|y|$. Equality: it holds iff $x+y$ already sits at an endpoint,
which (tracing the bound) requires $x$ and $y$ to reach their own upper or lower ends *together* —
i.e. both $\ge 0$ or both $\le 0$; a strict sign disagreement makes the middle term strictly
smaller. (Formally, if $x\ge 0,y\ge 0$ then $|x+y|=x+y=|x|+|y|$; if $x\gt 0,y\lt 0$ then
$|x+y|\lt x+(-y)=|x|+|y|$ because adding a negative $y$ decreases $x$.)

**Solving $|x-a|=r$ for $r\gt 0$.** Put $t=x-a$; we solve $|t|=r$. If $t\ge 0$ the equation reads
$t=r$; if $t\lt 0$ it reads $-t=r$, i.e. $t=-r$. Both values indeed satisfy $|t|=r$ (as $r\gt 0$),
and these are the only ones since every real is $\ge 0$ or $\lt 0$. So $t=\pm r$, i.e.
$x=a\pm r$: the two points at distance $r$ from $a$. (If $r=0$ the unique solution is $x=a$; if
$r\lt 0$ there is none, as $|t|\ge 0$.)

**Solving the inequalities for $r\gt 0$.** By the strict collapse lemma and its converse,
$|x-a|\lt r \iff -r\lt x-a\lt r \iff a-r\lt x\lt a+r$. The reverse inequality is the logical
negation over the reals: $|x-a|\gt r$ holds exactly for the $x$ *not* satisfying $|x-a|\le r$, i.e.
$x\lt a-r$ or $x\gt a+r$. $\blacksquare$

### Worked Instance

The Hook asked which numbers sit exactly $5$ from $3$: solve $|x-3|=5$. With $r=5\gt 0$ the template
gives $x-3=5$ or $x-3=-5$, so $x=8$ or $x=-2$ — exactly two answers, the points $5$ to the right and
$5$ to the left of $3$. That is why "exactly $5$ marks from $3$" always resolves to a pair, never
more: a line has precisely two directions.

The thermometer: $|-8| = -(-8) = 8 = |8|$, so both readings register the same $8$-degree gap from
zero. And "within $5$ of $3$," the inequality $|x-3|\lt 5$, unpacks to $-2\lt x\lt 8$ — the open band
of temperatures strictly between the two extreme days. Finally a multiplicativity check from the
Discovery: $|(-3)(4)| = |-12| = 12$ and $|-3|\,|4| = 3\cdot 4 = 12$, matching $|xy|=|x|\,|y|$.

### Pitfalls

- **"$|x| = -x$" is not a contradiction.** For $x\lt 0$ the value $-x$ is *positive*, so
  $|x|=-x\gt 0$ is exactly right. The symbol $-x$ means "the opposite of $x$," not "a negative
  number." Reading $-x$ as automatically negative is the single most common absolute-value error.
- **$\sqrt{x^2}=|x|$, not $x$.** Taking a square root returns the nonnegative root, so it undoes the
  square only up to sign: $\sqrt{(-4)^2}=\sqrt{16}=4=|-4|$.
- **The triangle inequality is $\le$, not $=$.** $|x+y|=|x|+|y|$ can fail: $|3+(-5)|=2$ but
  $|3|+|-5|=8$. Splitting $|x+y|$ into $|x|+|y|$ as if it were a distributive law is wrong.
- **$|x-a|\gt r$ is an *or*, not an *and*.** It describes two separated rays ($x\lt a-r$ or
  $x\gt a+r$); writing it as a single double inequality $a-r\gt x\gt a+r$ describes the empty set.
  Only the $\lt$ case collapses into one band.
- **Check the sign of $r$ before solving.** $|x-a|=r$ or $|x-a|\lt r$ with $r\lt 0$ has *no*
  solution; blindly writing $x=a\pm r$ manufactures phantom answers.

:::
:::

## Connections

Absolute value is the first *distance* in mathematics: $|x-a|$ measures the gap between two points,
and its three laws (nonnegativity, symmetry $|{-x}|=|x|$, triangle inequality) are exactly the axioms
that later define a *metric*, the backbone of limits, continuity, and every $\varepsilon$-bound in
analysis. It rests on *negation* (the $-x$ that repairs a negative into its distance) and on the
*function* concept (the single-valued V-shaped map $x\mapsto|x|$, whose corner and reflection make it
the model non-smooth function). Recognition trigger: whenever you see "distance," a "$\pm$," a "within
/ at least so far from," or an equation that fractures into two cases at a sign change, absolute value
is the tool — and remember that $\lt$ gives a band while $\gt$ gives the two outside rays.

## History

The notion of a number's size regardless of sign is ancient in spirit but modern in notation. Negative numbers were only reluctantly accepted through the seventeenth and eighteenth centuries, and with them came the need to speak of magnitude alone. The now-universal vertical-bar notation $|x|$, together with the term "absolute value," was introduced by Karl Weierstrass in $1841$, in the context of his rigorous work on complex magnitudes. The related idea of the modulus of a complex number had been developed by Jean-Robert Argand and others as the length of the arrow representing it in the plane. Absolute value mattered because it makes "distance" into an algebraic quantity: it measures how far a number sits from zero, underlies the definitions of limits and convergence in analysis, and generalizes into the norms and metrics that pervade modern mathematics.
