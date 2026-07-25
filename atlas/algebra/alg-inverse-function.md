Square the input and $3$ and $-3$ both land on $9$; handed the $9$, you cannot say which you started
from — the machine has forgotten. Cube the input instead and nothing is ever lost: every output names
its one begetter. What separates the machines you can run backward from the ones you can't?

## Discovery

1. Let $f(x)=3x-1$. From the output $14$, recover the input by solving. Do it again from output $5$,
   and from a general output $y$. Assemble a single new rule that eats any output of $f$ and returns
   the input that produced it; write it as a formula.
2. Let $f(x)=x^2$ on all of $\RR$. From the output $9$, try to recover *the* input. What exactly
   obstructs a single answer? Now restrict the allowed inputs to $x\ge 0$ and try again from $9$, from
   $4$, from $0$. State the property a function's input–output pairing must have for the backward rule
   to return one unambiguous input.
3. For the backward rule to even be handed an input, that input must be something $f$ actually
   outputs. For $f(x)=x^2$ on $x\ge 0$, list the numbers the backward rule is allowed to receive.
   Relate that set to a set already attached to $f$.
4. Plot $f(x)=3x-1$ and the backward rule you built in step 1 on one grid, together with the line
   $y=x$. Describe the geometric relationship between the two graphs. Then, by analogy with the
   vertical-line test, invent a test using *horizontal* lines that decides from $f$'s graph alone
   whether a single-input backward rule can exist.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $f$ be a function. An **inverse** of $f$ is a function $f^{-1}$ that undoes it:
$$f^{-1}\bigl(f(x)\bigr)=x \ \text{ for every } x \text{ in the domain of } f, \qquad
f\bigl(f^{-1}(y)\bigr)=y \ \text{ for every } y \text{ in the range of } f.$$
So $f^{-1}$ maps each output back to the input that made it, and its domain is the **range** of $f$.

An inverse exists **iff $f$ is one-to-one** (injective): distinct inputs give distinct outputs,
$x_1\ne x_2 \Rightarrow f(x_1)\ne f(x_2)$. Viewed as a map onto its own range, a one-to-one function is
a **bijection** onto that range, and *that* is exactly when it can be reversed. When an inverse exists
it is **unique**. Three practical consequences:
- **Finding it:** write $y=f(x)$ and solve for $x$ in terms of $y$; the result is $x=f^{-1}(y)$.
- **Horizontal-line test:** $f$ is one-to-one (hence invertible) iff every horizontal line $y=c$ meets
  the graph of $f$ at most once.
- **Graphs:** the graph of $f^{-1}$ is the mirror image of the graph of $f$ across the line $y=x$,
  since $(a,b)$ lies on $f$ exactly when $(b,a)$ lies on $f^{-1}$.

### Proof

Throughout, take $f$ with domain $A$ and let $R=\{f(x):x\in A\}$ be its range, so we seek an inverse
as a function $g:R\to A$.

*Existence forces one-to-one.* Suppose an inverse $g$ exists, so $g(f(x))=x$ for all $x\in A$. If
$f(x_1)=f(x_2)$, apply $g$ to both sides: $x_1=g(f(x_1))=g(f(x_2))=x_2$. Contrapositively, distinct
inputs give distinct outputs, so $f$ is one-to-one.

*One-to-one forces existence.* Suppose $f$ is one-to-one. Define $g:R\to A$ by: for $y\in R$, let
$g(y)$ be the input $x$ with $f(x)=y$. Such an $x$ exists because $y\in R$ is an actual output, and it
is unique because $f$ is one-to-one (two inputs with the same output would coincide). So $g$ assigns
exactly one value to each $y\in R$ — it is a genuine function (`def-function`). It undoes $f$ on both
sides: for $x\in A$, $g(f(x))$ is by definition the unique input mapping to $f(x)$, which is $x$; for
$y\in R$, writing $y=f(x)$ gives $f(g(y))=f(x)=y$. Hence $g=f^{-1}$ exists.

*Uniqueness.* Suppose $g$ and $h$ both invert $f$, both with domain $R$. Take any $y\in R$ and write
$y=f(x)$ for some $x\in A$. Then $g(y)=g(f(x))=x$ and $h(y)=h(f(x))=x$, so $g(y)=h(y)$. As $y\in R$ was
arbitrary, $g=h$. Thus the inverse, when it exists, is unique — justifying the name $f^{-1}$.

*The reflection.* By construction $g(y)=x \iff f(x)=y$, i.e. $(x,y)$ is on the graph of $f$ exactly
when $(y,x)$ is on the graph of $g$. The map $(x,y)\mapsto(y,x)$ is reflection across $y=x$, so the
two graphs are mirror images in that line. The horizontal-line test is the same statement in
pictures: a horizontal line $y=c$ meets $f$'s graph in the points $(x,c)$ with $f(x)=c$, and "at most
one such $x$ for every $c$" is precisely one-to-one. $\blacksquare$

### Worked Instance

Resolve the Hook. For $f(x)=x^2$ on all of $\RR$: the horizontal line $y=9$ meets the graph twice, at
$(3,9)$ and $(-3,9)$, so $f$ is not one-to-one and has no inverse — the machine genuinely forgot the
sign. Restrict the domain to $x\ge 0$: now each horizontal line $y=c\ge 0$ meets the graph once, $f$ is
one-to-one, and solving $y=x^2$ with $x\ge 0$ gives $x=\sqrt{y}$, so $f^{-1}(y)=\sqrt{y}$ on
$[0,\infty)$. For $f(x)=x^3$ on all of $\RR$: strictly increasing, every horizontal line meets it once,
so it is one-to-one everywhere and $f^{-1}(y)=\sqrt[3]{y}$ — nothing is ever forgotten, matching the
Hook.

Now find the inverse of the Discovery's $f(x)=3x-1$ by the recipe. Set $y=3x-1$ and solve:
$y+1=3x$, so $x=\dfrac{y+1}{3}$, giving $f^{-1}(y)=\dfrac{y+1}{3}$. Check both directions:
$$f^{-1}(f(x))=\frac{(3x-1)+1}{3}=\frac{3x}{3}=x,\qquad f\Bigl(f^{-1}(y)\Bigr)=3\cdot\frac{y+1}{3}-1=(y+1)-1=y.$$
Both collapse to the identity, so the rule is correct; its graph is the line $y=x+1$ over $3$, the
mirror image of $y=3x-1$ across $y=x$.

### Pitfalls

- **$f^{-1}$ is not $1/f$.** The exponent $-1$ here means "inverse function," not reciprocal. For
  $f(x)=3x-1$, $f^{-1}(y)=\frac{y+1}{3}$, whereas $\frac{1}{f(x)}=\frac{1}{3x-1}$ — a different beast.
- **No inverse without one-to-one.** $x^2$, $|x|$, and $\sin x$ on their full natural domains fail the
  horizontal-line test and have no inverse; you must first restrict the domain (e.g. $x\ge 0$) to make
  them one-to-one, and the inverse depends on which restriction you chose.
- **The inverse's domain is $f$'s range.** $f^{-1}$ can only be fed numbers $f$ actually outputs. For
  $f(x)=\sqrt{x}$ (outputs $\ge 0$), $f^{-1}(y)=y^2$ but only for $y\ge 0$; blindly writing $y^2$ on
  all reals invents inputs $f$ never produced.
- **Solve for a *unique* $x$.** The method $y=f(x)\Rightarrow x=\dots$ delivers an inverse only if the
  solving step yields exactly one $x$. If $y=x^2$ forces the $\pm$, that ambiguity *is* the failure of
  one-to-one — resolve it by a domain restriction before declaring an inverse.
- **Horizontal, not vertical.** The vertical-line test asks whether $f$ is a function; the
  horizontal-line test asks whether $f$ is invertible. Do not swap them.

:::
:::

## Connections

An inverse runs `alg-function-composition` backward: $f^{-1}$ is the function for which $f^{-1}\circ f$
and $f\circ f^{-1}$ collapse to the identity, and the uniqueness proof leans on that undoing. The
gatekeeper is one-to-one-ness, seen either as an algebra fact (solving $y=f(x)$ yields a single $x$) or
a picture (the horizontal-line test, mirror of `alg-function-intro`'s vertical-line test), with the
two graphs reflected across $y=x$. This is the machinery behind `alg-exponentials-logs`: the logarithm
is defined outright as the inverse of the exponential, existing precisely because $b^x$ is one-to-one.
Recognition trigger: any "undo," "solve for the input," "recover $x$ from $y$," or "reflect across
$y=x$" — and any time a function must be restricted before it can be reversed — is an inverse question.

## History

The idea of undoing a function — running its rule backward — grew up alongside specific inverse pairs long before a general theory existed. John Napier's logarithms ($1614$) were, in effect, the inverse of exponentials, and the inverse trigonometric functions were tabulated by astronomers of the same era. As the general function concept took shape through Euler in the eighteenth century and Dirichlet in the nineteenth, the notion of an inverse function was abstracted from these examples, along with the recognition that a function must be one-to-one for its inverse to exist. The clean statement that a function and its inverse reflect each other across the line $y = x$ came with the coordinate viewpoint of analytic geometry. Inverse functions mattered because so much of mathematics is about reversal — solving equations, extracting roots and logarithms, decoding transformations — and the inverse is the exact tool that turns a forward rule into a solution.
