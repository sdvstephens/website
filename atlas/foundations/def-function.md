A vending machine: press B4, get the same snack every time. Press B4 and sometimes get chips,
sometimes a contradiction — nobody would call that a machine you can trust. A *function* is
exactly the trustworthy machine: one input, one definite output, always.

## Discovery

1. Here are three "input–output" tables. (i) $\{(1,10),(2,20),(3,30)\}$. (ii)
   $\{(1,10),(1,99),(2,20)\}$. (iii) $\{(1,10),(2,10),(3,10)\}$. Which one could not be a reliable
   machine, and what exactly is wrong with it?
2. State the single rule that (i) and (iii) obey but (ii) breaks. Phrase it as a condition on the
   *first coordinates* of the ordered pairs. (Is it a problem for two pairs to share the same
   *second* coordinate? Check (iii).)
3. A machine also needs a list of allowed buttons (which inputs are legal) and a cabinet the
   outputs are drawn from. Using only sets and ordered pairs, describe an object that packages
   "allowed inputs," "possible outputs," and "the input–output rule" together — without ever using
   the vague word *rule*.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **function** $f$ from a set $A$ (the **domain**) to a set $B$ (the **codomain**), written
$f : A \to B$, is a set $f$ of ordered pairs $(a,b)$ with $a \in A$, $b \in B$, satisfying the
**single-output property**:
$$\text{for every } a \in A \text{ there is } \textbf{exactly one } b \in B \text{ with }
(a,b) \in f.$$
That unique $b$ is written $f(a)$. Equivalently: (existence) every input appears as a first
coordinate, and (uniqueness) if $(a,b) \in f$ and $(a,b') \in f$ then $b = b'$. The set of actual
outputs $\{f(a) : a \in A\}$ is the **range** (a subset of the codomain).

### Proof

Being a definition, the content to establish is that the single-output property is *well-posed* —
that "$f(a)$" names a genuine, unambiguous object — and to record the immediate consequence that
functions are compared by their pairs.

*$f(a)$ is well-defined.* Fix $a \in A$. The existence clause guarantees at least one $b$ with
$(a,b)\in f$; the uniqueness clause guarantees at most one. So there is exactly one such $b$, and
the notation $f(a) := b$ refers to a single, definite element of $B$. Substitution then holds:
if $a = a'$ then $(a,b)\in f \iff (a',b)\in f$, so $f(a) = f(a')$ — equal inputs give equal
outputs, the substitution primitive doing its job.

*Equality of functions.* Since a function *is* its set of pairs, extensionality applies: two
functions $f, g : A \to B$ are equal iff $(a,b)\in f \iff (a,b)\in g$ for all $a,b$, i.e. iff
$f(a) = g(a)$ for every $a \in A$. Thus "same domain and same output at every point" is exactly
function equality — no hidden notion of "same rule" is needed. $\blacksquare$

### Worked Instance

Return to the three tables. (i) $\{(1,10),(2,20),(3,30)\}$ with domain $\{1,2,3\}$: each input
appears once, so it *is* a function; $f(2) = 20$. (iii) $\{(1,10),(2,10),(3,10)\}$: each input
appears once too — repeated *outputs* are fine — so it is the constant function $f(a) = 10$. (ii)
$\{(1,10),(1,99),\dots\}$: the input $1$ carries two different outputs, violating uniqueness, so it
is **not** a function. The vending machine that sometimes returns chips and sometimes not is table
(ii): pressing the same button, two answers — untrustworthy, hence not a function.

### Pitfalls

- **One output per input, but outputs may repeat.** Sharing a *second* coordinate (many inputs to
  one output) is allowed; sharing a *first* coordinate with different seconds is forbidden.
- **Domain is part of the data.** $x \mapsto 1/x$ is not a function on all of $\RR$ (no output at
  $0$); the domain must exclude $0$. Changing the domain changes the function.
- **Codomain vs range.** The codomain is declared; the range is what's actually hit. $x\mapsto x^2$
  as $\RR\to\RR$ has range $[0,\infty)$, a proper subset of the codomain.
- **A formula is not required.** Any single-valued set of pairs is a function, even with no tidy
  formula; conversely a formula with an ambiguous value ($y$ where $y^2 = x$) is *not* a function
  until you pin one output.

:::
:::

## Connections

Assembles the set and ordered-pair leaves into the central object of all of mathematics: a
single-valued assignment. It underlies "$y$ depends on $x$" (variable dependence), the graph of a
function in the coordinate plane, slope as an output-over-input rate, and every later map (linear
maps, limits, derivatives). Recognition trigger: any "for each input, a definite output" — a table,
a graph passing the vertical-line test, a formula $x \mapsto \dots$ — is a function.

## History

The word "function" was introduced by Gottfried Wilhelm Leibniz around 1673 to describe quantities associated with a curve, and the notation $f(x)$ is due to Leonhard Euler (1734). For a long time a function meant a formula or analytic expression, but the study of Fourier series pressed mathematicians toward a broader view. Peter Gustav Lejeune Dirichlet articulated in 1837 the modern idea that a function is any rule assigning to each input exactly one output, regardless of formula. In the twentieth century this was made fully precise by identifying a function with its graph — a set of ordered pairs with the single-valued property — an approach codified by Bourbaki. This evolution freed analysis from dependence on explicit formulas. ANABASIS defines a function set-theoretically as such a set of ordered pairs.
