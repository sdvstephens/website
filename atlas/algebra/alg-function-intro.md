The formula $\dfrac{x^2-9}{x-3}$ returns $8$ at $x=5$ and $3$ at $x=0$, but asked for its value at
$x=3$ it jams — nothing comes out. Cancel the top against the bottom and it "should" just be the
line $x+3$, worth $6$ there. Why does a rule that looks like a clean straight line carry a single
forbidden input?

## Discovery

1. Take the expression $2x+1$, give it the name $f$, and record the pairing as $f(x)=2x+1$. Compute
   the outputs at $x=0$, $x=3$, and $x=-2$ by substituting. Now compute $f(a+1)$ by putting the
   whole quantity $a+1$ wherever $x$ stood. In one sentence, say what the notation $f(\square)$
   instructs you to do to whatever sits in the box.
2. Work over the real numbers. For each formula below, hunt down *every* input that fails to produce
   a legitimate real-number output, and name what breaks at each such input:
   $$\frac{1}{x-2}, \qquad \sqrt{x-4}, \qquad \frac{x+1}{x^2-x}.$$
   For each formula, write the exact set of inputs you are forced to throw away.
3. Recall from `def-function` that a function *is* a set of pairs $(a,b)$ with one output per input.
   Given $f(x)=2x+1$, describe the set of pairs this single formula generates. What is the set of
   legal first coordinates — all of $\RR$, or something you had to trim?
4. On one grid plot several points of $y=2x+1$; on another plot several points of $y^2=x$ (the
   sideways parabola, so at $x=4$ both $y=2$ and $y=-2$ appear). Read each picture as "for an input
   $x$, an output $y$." One of the two cannot be a function. Invent a test using vertical lines that
   decides, from a drawn curve alone, whether it is the graph of a function — and say what a
   *failure* of your test means in the language of pairs.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A function given by an algebraic formula is a function in the exact sense of `def-function`, dressed
for computation. Writing $f(x)=E(x)$ names a function $f$ whose value at an input $a$ is
**$f(a)$**, the number obtained by substituting $a$ for the variable in the expression $E$ and
evaluating. The notation $f(\square)$ means "substitute $\square$ for the variable and simplify"; it
is not multiplication of $f$ by $\square$.

When a formula is handed over with no domain stated, its **natural (implied) domain** is the largest
set of real inputs on which every operation in the formula is defined over the reals — in practice,
throw out every input that would force a **division by zero** or an **even root of a negative**
(and any other undefined operation). The **range** is the set of outputs actually produced,
$\{f(x) : x \in \text{domain}\}$, a subset of the codomain.

The **graph** of $f$ is the set of points $\{(x, f(x)) : x \in \text{domain}\}$ in the plane — the
pairs of `def-function` drawn as dots. A curve in the plane is the graph of a function of $x$ exactly
when it passes the **vertical-line test**: every vertical line $x=a$ meets the curve in at most one
point.

### Proof

Two facts underwrite everything above: a formula really does define a function on its natural domain,
and the vertical-line test really does detect graphs of functions.

*A formula defines a function on its natural domain.* Let $E$ be an algebraic expression in one
variable and let
$$D = \{\, a \in \RR : \text{every operation in } E \text{ is defined over } \RR \text{ when } x=a \,\}.$$
Fix $a \in D$. By the well-definedness of substitution (`alg-variable-expression`), evaluating $E$ at
$x=a$ proceeds through finitely many operations, each of which — being defined at this input by the
choice of $D$ — returns one real number, so the whole expression returns a single real number, call
it $E(a)$. Form the set of pairs
$$f = \{\, (a, E(a)) : a \in D \,\}.$$
Each $a \in D$ appears as a first coordinate exactly once, and its partner $E(a)$ is unique by the
previous sentence; so $f$ satisfies the single-output property of `def-function` and is a function
with domain $D$. Conversely, no input outside $D$ can be admitted: at such an input some operation
(a division with zero denominator, an even root of a negative) yields no real number, so no real pair
$(a,b)$ is available. Hence $D$ is the *largest* real domain, which is what "natural domain" names.

*The vertical-line test.* Let $S \subseteq \RR^2$ be a set of points, and let
$X = \{a : (a,b)\in S \text{ for some } b\}$ be its shadow on the $x$-axis. Claim: $S$ is the graph of
a function with domain $X$ if and only if every vertical line $x=a$ meets $S$ in at most one point.

($\Rightarrow$) If $S$ is the graph of a function $g$, then for $a \in X$ the only point of $S$ on the
line $x=a$ is $(a, g(a))$: any point $(a,b)\in S$ has $b=g(a)$ by single-outputness, so the line meets
$S$ in exactly one point; for $a\notin X$ it meets $S$ in none. Either way, at most one.

($\Leftarrow$) Suppose every vertical line meets $S$ at most once. For each $a\in X$ there is, by
definition of $X$, at least one $b$ with $(a,b)\in S$, and by hypothesis at most one; so exactly one.
That is precisely the single-output property, so $S$ is the graph of the function $a \mapsto b$ on
domain $X$. Two points $(a,b),(a,b')\in S$ with $b\ne b'$ — two crossings of one vertical line — are
exactly what a function forbids. $\blacksquare$

### Worked Instance

Resolve the Hook with $g(x)=\dfrac{x^2-9}{x-3}$. The only operation that can fail over $\RR$ is the
division, which breaks when $x-3=0$, i.e. at $x=3$. So the natural domain is $\RR\setminus\{3\}$,
every real number except $3$.

On that domain the algebra simplifies: for $x\ne 3$,
$$g(x)=\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3,$$
the cancellation being legal precisely because $x-3\ne 0$ there. So $g$ agrees with the line $x+3$ at
every input it accepts — yet $3$ is not one of those inputs, because the *original* formula divides by
zero there. The graph is the line $y=x+3$ with a single point punctured: an open circle at $(3,6)$.
Its range is therefore $\RR\setminus\{6\}$ — every height on the line except the one at the hole. The
curve passes the vertical-line test (each $x\ne 3$ has exactly one point, $x=3$ has none), confirming
$g$ is a genuine function. The "forbidden input" was never a flaw in the arithmetic $x+3$; it is the
domain, which `def-function` insists is part of the function itself, refusing an input the formula
cannot process.

### Pitfalls

- **The domain is part of the function; cancellation does not restore it.** $\dfrac{x^2-9}{x-3}$ and
  $x+3$ are *different functions* — same outputs, different domains — because the first excludes
  $x=3$. Simplifying an expression can enlarge the natural domain, so it need not preserve the
  function; note the removed point (the "hole").
- **$f(x)$ is not $f$ times $x$.** The parentheses signal evaluation, not multiplication. Likewise
  $f(a+b)$ means "substitute $a+b$," and in general $f(a+b)\ne f(a)+f(b)$: for $f(x)=x^2$,
  $f(1+1)=4$ but $f(1)+f(1)=2$.
- **Forbid *both* zero denominators and negative even-roots — and stack the constraints.** For
  $\dfrac{1}{\sqrt{x-4}}$ you need $x-4\gt 0$ (strictly, since the root is also in a denominator), so
  the domain is $x\gt 4$, not $x\ge 4$. Check every operation, then intersect the survivors.
- **Range is not codomain.** The codomain is whatever target set you declared; the range is what the
  formula actually hits. $x\mapsto x^2$ on $\RR$ has range $[0,\infty)$, a proper part of the
  codomain $\RR$.
- **Vertical line, not horizontal.** The vertical-line test decides whether a curve *is* a function
  (one output per input). A horizontal line hitting twice is perfectly allowed — that is just a
  repeated output, which functions permit.

:::
:::

## Connections

This node reforges the abstract "set of pairs" of `def-function` into the working object of algebra:
a named rule $f(x)=E(x)$ built from an expression (`alg-variable-expression`), carrying a domain the
formula itself dictates and a graph you can draw and test. It is the launchpad for chaining rules
(`alg-function-composition`), running them backward (`alg-inverse-function`), and the first genuinely
piecewise formula (`alg-absolute-value`). Recognition trigger: the instant a problem writes $f(x)=$
something, or asks "for which values is this defined," or hands you a curve and asks "is this a
function," you are in this setting — check the natural domain first, and read the graph through the
vertical-line test.

## History

The concept of a function emerged gradually as mathematicians moved from studying curves to studying the dependence of one quantity on another. Gottfried Wilhelm Leibniz introduced the word "function" in $1673$ to describe geometric quantities varying along a curve. Leonhard Euler sharpened the idea and gave us the notation $f(x)$ in $1734$, defining a function first as an analytic expression and later, more broadly, as any correspondence between quantities. The fully modern definition — a function as an arbitrary rule assigning to each input exactly one output, with no requirement of a formula — was pressed forward by Peter Gustav Lejeune Dirichlet in $1837$ and later cast in set-theoretic terms. This evolution mattered because the function became the central object of modern mathematics: the language of calculus, the carrier of physical laws, and the unifying idea behind change, dependence, and mapping.
