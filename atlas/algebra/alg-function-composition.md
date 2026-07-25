A store rings up a coupon that takes $20$ dollars off and a surcharge that adds $10\%$. On a $100$
dollars item, coupon first then surcharge costs you $88$ dollars; surcharge first then coupon costs
$90$ dollars. Same two machines, same item, a two-dollar gap that never closes no matter the price.
Why does merely reordering two rules change the answer — and could two rules ever be reorder-proof?

## Discovery

1. Let $f(x)=x+3$ and $g(x)=x^2$. Take an input, say $x=2$, push it through $f$, then feed *that
   output* into $g$. Write the single number that comes out. Now describe, as one new formula in
   $x$, the machine "do $f$, then do $g$" — the rule that turns any $x$ directly into $g$'s final
   output. Do the same for "do $g$, then do $f$."
2. Compare the two formulas you just built. Are they the same rule? Test them at $x=0$, $x=1$, and
   $x=-3$. Then try to invent a pair of functions $f,g$ (neither the identity $x\mapsto x$) for which
   "do $f$ then $g$" and "do $g$ then $f$" produce the *same* formula.
3. Let $f(x)=x-5$ and $g(x)=\sqrt{x}$ over the reals. Build "do $f$, then $g$," i.e. $\sqrt{x-5}$. For
   which inputs $x$ does the whole chain deliver a real number? An input must clear two hurdles in
   turn — name both, and combine them into the exact set of legal inputs.
4. Let $f(x)=x+1$, $g(x)=2x$, $h(x)=x^2$. Form the chain "do $f$, then $g$, then $h$" two ways: first
   fuse $g$-then-$h$ into one machine and precede it by $f$; then fuse $f$-then-$g$ into one machine
   and follow it by $h$. Write both resulting formulas in $x$ and compare.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Given functions $f$ and $g$, their **composition** $g\circ f$ (read "$g$ after $f$" or "$g$ of $f$")
is the function
$$(g\circ f)(x) = g\bigl(f(x)\bigr):$$
feed $x$ to $f$, then feed $f$'s output to $g$. The **domain** of $g\circ f$ is every $x$ in the
domain of $f$ whose output $f(x)$ lies in the domain of $g$ — an input must survive $f$ *and* land
where $g$ can accept it.

Two features are essential. First, **order matters**: in general $g\circ f \ne f\circ g$, so
$g(f(x))$ and $f(g(x))$ are different rules; the notation $g\circ f$ is read right-to-left, $f$ acting
first. Second, composition is **associative**: for any three functions,
$$(h\circ g)\circ f = h\circ(g\circ f),$$
so an unbroken chain needs no inner parentheses and may be written $h\circ g\circ f$.

### Proof

*Composition is a well-defined function.* Let $D=\{x \in \operatorname{dom} f : f(x)\in
\operatorname{dom} g\}$. Fix $x\in D$. Because $f$ is a function, $f(x)$ is one definite number
(`alg-function-intro`); because $f(x)\in\operatorname{dom} g$ and $g$ is a function, $g(f(x))$ is one
definite number. So the assignment $x\mapsto g(f(x))$ gives exactly one output per input of $D$ and is
a function with domain $D$, satisfying the single-output property of `def-function`. This is the
precise content of "the domain of $g\circ f$ is $D$."

*Associativity.* Write $A=(h\circ g)\circ f$ and $B=h\circ(g\circ f)$. First, equal domains. An input
$x$ lies in $\operatorname{dom} A$ iff $x\in\operatorname{dom} f$, $f(x)\in\operatorname{dom}(h\circ
g)$, the latter meaning $f(x)\in\operatorname{dom} g$ and $g(f(x))\in\operatorname{dom} h$. An input
$x$ lies in $\operatorname{dom} B$ iff $x\in\operatorname{dom}(g\circ f)$ — that is $x\in
\operatorname{dom} f$ and $f(x)\in\operatorname{dom} g$ — and $(g\circ f)(x)=g(f(x))\in\operatorname{dom}
h$. Both conditions unfold to the identical trio
$$x\in\operatorname{dom} f,\quad f(x)\in\operatorname{dom} g,\quad g(f(x))\in\operatorname{dom} h,$$
so $\operatorname{dom} A=\operatorname{dom} B$. Second, equal values on that common domain: for such
an $x$,
$$A(x)=\bigl((h\circ g)\circ f\bigr)(x)=(h\circ g)\bigl(f(x)\bigr)=h\Bigl(g\bigl(f(x)\bigr)\Bigr),$$
$$B(x)=\bigl(h\circ(g\circ f)\bigr)(x)=h\Bigl((g\circ f)(x)\Bigr)=h\Bigl(g\bigl(f(x)\bigr)\Bigr),$$
each step being nothing but the defining substitution $(\,\cdot\,\circ\,\cdot\,)(x)=\cdots$. The two
right-hand sides are literally the same expression $h(g(f(x)))$. Same domain and same value at every
point is function equality (`def-function`), so $A=B$. $\blacksquare$

### Worked Instance

Resolve the Hook. Coupon $c(x)=x-20$, surcharge $s(x)=1.1\,x$. "Coupon first, then surcharge" is
$s\circ c$; "surcharge first, then coupon" is $c\circ s$:
$$(s\circ c)(x)=s(x-20)=1.1(x-20)=1.1x-22,\qquad (c\circ s)(x)=c(1.1x)=1.1x-20.$$
At $x=100$: $(s\circ c)(100)=110-22=88$ and $(c\circ s)(100)=110-20=90$ — the $88$ and $90$ of the
Hook. The gap is $(c\circ s)(x)-(s\circ c)(x)=(1.1x-20)-(1.1x-22)=2$ dollars for *every* price: the
surcharge magnifies the $20$ dollars discount into $22$ dollars whenever the coupon is applied first,
so applying the coupon last always saves the shopper the extra $10\%$ of $20$, exactly $2$ dollars.
Order matters because $s$ scales while $c$ shifts, and scaling a shifted number is not shifting a
scaled one. (Two rules *are* reorder-proof when they cooperate — e.g. $s(x)=1.1x$ with
$d(x)=1.2x$ give $s\circ d=d\circ s=1.32x$, since scalings commute.)

### Pitfalls

- **Read $g\circ f$ right-to-left.** The function nearest the input, $f$, acts first; $g$ acts on its
  result. Writing $(g\circ f)(x)=f(g(x))$ reverses the machines and usually changes the answer.
- **Order is not free.** $g\circ f\ne f\circ g$ in general. Equality at one or two test inputs does
  not make the rules equal — you must match them as formulas for all inputs (`alg-variable-expression`).
- **The composite domain is stricter than $f$'s.** It is not enough for $x$ to be a legal input to
  $f$; the *output* $f(x)$ must be a legal input to $g$. For $\sqrt{x-5}$ you need $x-5\ge 0$, i.e.
  $x\ge 5$, even though $f(x)=x-5$ accepts every real.
- **$g\circ f$ is not $g\cdot f$.** Composition feeds outputs forward; it is not the product
  $g(x)f(x)$. For $f(x)=x{+}1,\,g(x)=x^2$: $(g\circ f)(x)=(x+1)^2$ but $g(x)f(x)=x^2(x+1)$.

:::
:::

## Connections

Composition is how functions combine into pipelines, and it sits directly on `alg-function-intro`:
each stage is a formula with its own domain, and the composite inherits a stricter one. Its
associativity makes long chains unambiguous, and it is the exact operation that `alg-inverse-function`
turns backward — an inverse $f^{-1}$ is defined by $f^{-1}\circ f$ and $f\circ f^{-1}$ collapsing to
the identity. Recognition trigger: any "do this, then that," any $f(g(x))$ or nested formula, any
"substitute one function into another," or any two-step process (encode then transmit, discount then
tax) is a composition — and the first question to ask is whether the order can be swapped.

## History

Chaining functions so that the output of one becomes the input of the next was practiced long before it was named. Astronomers and analysts of the seventeenth and eighteenth centuries routinely built complicated expressions by nesting simpler ones, and Leibniz and Euler manipulated such compositions freely in the developing calculus. The operation gained explicit status as the function concept itself matured under Euler and Dirichlet in the eighteenth and nineteenth centuries. It became truly central with the rise of abstract algebra and the study of transformations: the composition of mappings is the very operation that defines a group, an insight running from Galois's work on permutations in the $1830$s through the group theory of Cayley and others. Composition mattered because it turns functions into things that can be combined and inverted, revealing structure — symmetry, iteration, and the chain rule of calculus all rest on it.
