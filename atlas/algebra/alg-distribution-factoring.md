Here are two recipes: $3(x+2)+2(x+2)$ and $5x+10$. Feed each the input $x=4$ and both spit out
$30$; feed each $x=100$ and both spit out $510$. They agree every single time, yet on the page they
look nothing alike — one is a tangle of parentheses, the other a clean two-term line. What lets you
turn the first into the second on purpose, and just as importantly, turn it back?

## Discovery

1. In $3(x+2)+2(x+2)$, notice the block $(x+2)$ appears twice — once taken $3$ times, once taken $2$
   times. Forget it is a sum for a moment and treat $(x+2)$ as a single object, call it a "widget."
   How many widgets do you have in total? Write the count.
2. Now let the widget be $(x+2)$ again. You found some number of copies of $(x+2)$ in step 1. Using
   the distributive law from `ari-distributive-law` — the same $a(b+c)=ab+ac$ you know for numbers,
   now with a letter inside — multiply that many copies of $(x+2)$ out into a sum with no
   parentheses. What two-term expression results?
3. Take the two-term expression from step 2 and reverse the move: find a single number that divides
   *both* terms, write each term as (that number) $\times$ (something), and pull the shared number
   out in front of a parenthesis. Which expression from the Hook did you land on, and does it match
   step 2's expression read backwards?
4. Try the reverse direction on a fresh expression: $6x+9$. Is there a number greater than $1$ that
   divides both $6$ and $9$? Rewrite each term using it and pull it out front. Then check your work
   by distributing back in — do you recover $6x+9$?
5. Consider $4x+3y$. Attempt the same pull-out. Is there a common numerical factor bigger than $1$
   dividing both $4$ and $3$? What does that tell you about whether *every* expression can be
   factored this way?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

With variables in play, the distributive law `ari-distributive-law` works exactly as it does for
numbers, in **both reading directions**:
$$a(b+c) = ab + ac \qquad\text{and}\qquad (a+b)(c+d)=ac+ad+bc+bd.$$
Read **left to right** this is **expanding** (or **distributing**, "multiplying out"): a product of
sums becomes a sum of products, the parentheses dissolved. Read **right to left** it is
**factoring**: a sum with a shared factor becomes a product, the common factor pulled out front —
$ab+ac = a(b+c)$.

A key special case is **collecting like terms**. Terms that share the same variable part are
**like terms**, and distributivity lets their coefficients combine: $ax+bx=(a+b)x$. So $3t+2t=5t$
and, treating a whole block as the shared factor, $3(x+2)+2(x+2)=5(x+2)$.

All of these are *identical equalities* (equal for every value of the variables, per
`alg-variable-expression`): expanding and factoring never change what number an expression produces,
only how it is written. Not every expression factors over the integers — $4x+3y$ has no common
integer factor beyond $1$ — so factoring is a tool that applies when a shared factor exists, whereas
expanding always applies.

### Proof

Everything reduces to the distributive law `ari-distributive-law`, applied to expressions and
justified for every value of the variables by the substitution principle of
`alg-variable-expression`. We establish the three claims: expansion of a double sum, collecting like
terms, and the equivalence of factoring with expansion.

*Expanding $(a+b)(c+d)$.* Treat $(c+d)$ as a single quantity $s$. By the distributive law applied to
the sum in the *first* factor,
$$(a+b)\,s = a s + b s.$$
Restore $s=c+d$ and distribute each product across it:
$$a(c+d)=ac+ad,\qquad b(c+d)=bc+bd.$$
Adding, $(a+b)(c+d)=ac+ad+bc+bd$. Each step is an instance of $a(b+c)=ab+ac$, which holds for all
numerical values of the letters; hence the identity holds for all values of $a,b,c,d$.

*Collecting like terms: $ax+bx=(a+b)x$.* This is the distributive law read right to left with the
shared factor $x$: since $(a+b)x = ax+bx$ for all numbers (distributivity, with $x$ on the right),
the reverse reading gives $ax+bx=(a+b)x$. It holds for every value of $x,a,b$ because
distributivity does. The block case — where the shared factor is itself an expression like
$(x+2)$ — is the identical statement with the number $x$ replaced throughout by the value of that
block: for any value the block $(x+2)$ takes, $3(x+2)+2(x+2)=(3+2)(x+2)=5(x+2)$.

*Factoring is expansion reversed.* Suppose an expression has the form $ab+ac$ with $a$ a common
factor. The distributive law states $a(b+c)=ab+ac$ as an identity — true for all values. An identity
is a two-way equality (by symmetry of equality, `prim-equality`): if $a(b+c)$ and $ab+ac$ evaluate
to the same number for every input, then equally $ab+ac$ evaluates to the same number as $a(b+c)$
for every input. Therefore $ab+ac=a(b+c)$ identically. Factoring makes no new claim; it is the same
identity, read the other way, so a factorization is *correct exactly when* distributing it back
reproduces the original. This furnishes a complete check for any proposed factoring. $\blacksquare$

### Worked Instance

Resolve the Hook. Start from $3(x+2)+2(x+2)$. The block $(x+2)$ is common to both terms; collecting
like terms (shared factor $(x+2)$),
$$3(x+2)+2(x+2)=(3+2)(x+2)=5(x+2).$$
Now expand by distributing the $5$:
$$5(x+2)=5\cdot x+5\cdot 2 = 5x+10,$$
which is exactly the Hook's second recipe — so the two are provably the same expression, agreeing at
*every* input, not just at $x=4$ and $x=100$. To factor $5x+10$ back, spot the common factor $5$ in
both terms ($5x=5\cdot x$, $10=5\cdot 2$) and pull it out: $5x+10=5(x+2)$. Distributing once more
returns $5x+10$, confirming the factorization. The round trip
$$3(x+2)+2(x+2)\;\longrightarrow\;5(x+2)\;\longrightarrow\;5x+10\;\longrightarrow\;5(x+2)$$
is nothing but the single distributive law, read forward and backward.

### Pitfalls

- **Distribute onto every term, and carry the sign.** $a(b+c)=ab+ac$ (not $ab+c$), and
  $a(b-c)=ab-ac$: the most common slip is multiplying into the first term and forgetting the second,
  or dropping the minus. Worst offender: $-(x-3)=-x+3$, not $-x-3$.
- **Only like terms combine.** $3x+2x=5x$, but $3x+2y$ stays as it is, and $3x+2x^2$ does *not*
  become $5x$ or $5x^2$ — different powers of $x$ are unlike terms. Combining unlike terms is the
  classic beginner error.
- **A number and a variable are not like terms.** In $5x+10$ you cannot "add" to get $15x$ or $15$;
  $5x$ and $10$ share no variable part. They combine only through *factoring*, as $5(x+2)$, never by
  addition.
- **Pull out the full common factor, or you have not finished.** $4x+8=2(2x+4)$ is a *true*
  identity but not fully factored — $2x+4$ still shares a factor $2$; the complete factoring is
  $4(x+2)$. Take the greatest common factor.
- **Expanding always works; factoring may not.** $4x+3y$ has no integer common factor beyond $1$, so
  it does not factor over the integers. Do not force a factor that is not there.
- **$(a+b)(c+d)$ has four products, not two.** A frequent error is writing only $ac+bd$. Every term
  of the first factor meets every term of the second: $ac+ad+bc+bd$.

:::
:::

## Connections

This is the distributive law `ari-distributive-law` grown up: the same $a(b+c)=ab+ac$, now wielded
on expressions with variables (`alg-variable-expression`) and read in both directions —
forward as expanding, backward as factoring — with collecting like terms as its everyday special
case. The order of operations (`alg-order-of-operations`) is what lets you see where the terms and
factors are before you rearrange them. It unlocks the special-product identities
`alg-square-of-binomial` (expand $(x+a)^2$), `alg-difference-of-squares` (factor $x^2-a^2$), and
`alg-sum-diff-cubes`, and it is the engine of `alg-quadratic-intro`, where factoring a quadratic
into two binomials is exactly this law run in reverse. Recognition trigger: any "multiply out,"
"expand," "simplify," "combine like terms," or "pull out a common factor" is distribution, read one
way or the other.

## History

The distributive law was first understood geometrically: Euclid's *Elements*, Book II (around $300$ BC), proves that a rectangle cut into pieces has area equal to the sum of the parts, which is exactly $a(b+c) = ab + ac$ dressed as a picture. Islamic algebraists, above all al-Khwarizmi in the ninth century, manipulated such relations verbally in the service of solving equations, and the very word "algebra" comes from the *al-jabr* ("restoration") of his title. With the symbolic notation of Viète and Descartes the law became a purely formal rule for expanding and factoring expressions. Much later, nineteenth-century algebraists abstracted it into one of the defining axioms of a ring. It mattered because distribution and its reverse, factoring, are the two most basic moves in all of algebra — the machinery behind expanding products, simplifying expressions, and solving equations.
