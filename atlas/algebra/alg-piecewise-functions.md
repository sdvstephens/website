The absolute value $|x|$ looks like one tidy symbol, but its graph is two straight rays meeting in a
sharp corner at the origin — a line of slope $-1$ glued to a line of slope $+1$. A single formula that
secretly follows *different rules on different parts of its domain*: how do we write, evaluate, and
graph such a thing honestly?

## Discovery

1. The absolute value is defined by cases: $|x| = x$ when $x$ is nonnegative and $|x| = -x$ when $x$
   is negative. Check this against a positive input, a negative input, and $0$, confirming each case
   returns the ordinary distance from $0$. Then graph $y = |x|$ by drawing each case only over the
   part of the axis where it applies, and describe what happens where the two pieces meet.
2. Build your own two-rule function: let $f(x) = x^2$ for $x \le 1$ and $f(x) = 2x - 1$ for $x \gt 1$.
   Evaluate $f(0)$, $f(1)$, and $f(2)$, each time deciding *which rule owns that input*. For the graph,
   what must be true about how the domain is split so that every input gets exactly one output — no
   gaps, no conflicts?
3. At the boundary $x = 1$ of your function in step 2, compute the value the left rule assigns and the
   value the right rule approaches. Compare them. Under what condition on the two rules at a boundary
   does the graph join without a jump — that is, what equality would have to hold for the pieces to
   meet?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **piecewise-defined function** specifies its output by different formulas on different parts of its
domain:
$$f(x) = \begin{cases} f_1(x), & x \in D_1,\\ f_2(x), & x \in D_2,\\ \ \vdots \end{cases}$$
where the pieces $D_1, D_2, \dots$ **partition** the domain — every input lies in exactly one piece, so
the definition is unambiguous (no input is left out, none is assigned two conflicting values). To
**evaluate**, locate which piece contains the input and apply that formula. To **graph**, draw each
formula only over its own piece, using a filled dot for an included endpoint and an open dot for an
excluded one. The absolute value is the prototype:
$$|x| = \begin{cases} x, & x \ge 0,\\ -x, & x \lt 0. \end{cases}$$
A piecewise function is **continuous at a boundary point** $x = a$ (shared by two adjacent pieces)
precisely when the two adjacent rules agree there — the value from the piece owning $a$ equals the
value the neighboring rule approaches as $x \to a$. Otherwise the graph has a jump.

### Proof

*The absolute value equals its piecewise form.* By definition $|x|$ is the distance from $x$ to $0$ on
the number line. If $x \ge 0$, that distance is $x$ itself, so $|x| = x$; if $x \lt 0$, the distance is
$-x$ (a positive number, since $x \lt 0$), so $|x| = -x$. The cases $x \ge 0$ and $x \lt 0$ are
mutually exclusive and cover all reals, so the two-line formula reproduces $|x|$ on its entire domain,
and at $x = 0$ both the "distance" definition and the top case give $0$.

*Well-definedness requires a partition.* A function must assign each input exactly one output. If the
pieces $D_i$ overlapped at a point $x_0$ with $f_i(x_0) \ne f_j(x_0)$, that input would receive two
values — not a function. If the $D_i$ failed to cover the domain, some input would receive none. Hence
the pieces must be pairwise disjoint and their union the whole domain — a partition — which is exactly
what makes the piecewise rule a legitimate function.

*Continuity at a boundary.* Let $a$ be a boundary between a left piece with rule $g$ (owning a
left-neighborhood, and continuous there) and a right piece with rule $h$ (owning a right-neighborhood,
continuous there), with $a$ itself owned by one of them, say the left, so $f(a) = g(a)$. The two-sided
limit $\lim_{x \to a} f(x)$ exists iff the left limit $\lim_{x \to a^-} g(x) = g(a)$ and the right
limit $\lim_{x \to a^+} h(x) = h(a)$ coincide, i.e. iff $g(a) = h(a)$ (using continuity of $g, h$
individually). Then $\lim_{x \to a} f(x) = g(a) = f(a)$, so $f$ is continuous at $a$; if $g(a) \ne
h(a)$, the one-sided limits differ and $f$ has a jump. $\blacksquare$

### Worked Instance

Take the Discovery's $f(x) = \begin{cases} x^2, & x \le 1\\ 2x - 1, & x \gt 1\end{cases}$. Evaluate:
$f(0) = 0^2 = 0$ (left rule, since $0 \le 1$); $f(1) = 1^2 = 1$ (left rule owns the boundary, since
$1 \le 1$); $f(2) = 2(2) - 1 = 3$ (right rule, since $2 \gt 1$). At the boundary $x = 1$: the left rule
gives $g(1) = 1^2 = 1$, and the right rule approaches $h(1) = 2(1) - 1 = 1$. Since $g(1) = h(1) = 1$,
the pieces meet and $f$ is continuous at $x = 1$ — the parabola $y = x^2$ hands off smoothly (in value,
though with a corner) to the line $y = 2x - 1$ at the point $(1, 1)$. Graphing: draw $y = x^2$ for
$x \le 1$ up to a filled dot at $(1,1)$, then $y = 2x - 1$ for $x \gt 1$ starting just after that same
point. For contrast, changing the second rule to $2x + 5$ would give $h(1) = 7 \ne 1$: an open dot at
$(1, 7)$, a filled dot at $(1, 1)$, and a visible jump.

### Pitfalls

- **The domain pieces must partition the domain.** Overlapping conditions like "$x \le 1$" and
  "$x \ge 1$" both claim $x = 1$; if the two rules disagree there it is not a function. Make the split
  clean (e.g. $x \le 1$ and $x \gt 1$).
- **Boundary ownership decides the value.** $f(1)$ uses whichever piece's condition includes $1$;
  read the $\le$ vs. $\lt$ carefully — that single symbol determines the answer.
- **Continuity is not automatic.** Two pieces meeting at a boundary need *equal* values there to join;
  otherwise the graph jumps. Do not assume a piecewise function is continuous.
- **Open vs. filled dots.** Graph an excluded endpoint with an open circle and an included one with a
  filled circle; sloppy dots misrepresent the domain split.
- **$|x| = -x$ is not "negative."** On $x \lt 0$ the rule $-x$ produces a *positive* output; the minus
  sign flips a negative input to its positive magnitude.

:::
:::

## Connections

Piecewise functions extend the **function** concept ([alg-function-intro]) from a single formula to a
domain stitched from several, and the **absolute value** ([alg-absolute-value]) is the canonical
example — the reason $|x|$, $\max$, $\min$, floor, and sign functions all live here. The continuity
condition foreshadows the limit-based definition studied in analysis, and piecewise thinking is
essential for splitting absolute-value equations and inequalities into cases. Recognition trigger: a
function described by "different rules for different inputs," an absolute value or floor to unpack, or a
graph with a corner or a jump.

## History

For much of the eighteenth century a "function" meant a single analytic expression, in the sense used
by Leonhard Euler, and a rule that changed formula partway across its domain sat uneasily with that
conception. The tension came to a head in the debate over vibrating strings and Fourier series, where
Joseph Fourier (1822) represented such split-rule shapes by trigonometric sums. The resolution was
Peter Gustav Lejeune Dirichlet's 1837 definition of a function as *any* rule assigning one output to
each input, regardless of whether a single formula describes it — the definition that makes piecewise
functions unproblematic and is standard today. Dirichlet even offered his famous function (one value on
the rationals, another on the irrationals) to show how far the new definition reached. The modern
notation with a large brace and per-piece conditions is a later typographical convenience for exactly
the objects Dirichlet legitimized.
