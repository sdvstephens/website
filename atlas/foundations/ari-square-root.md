A square patch of lawn has area $9$; its side is $3$, since $3^2 = 9$. But $(-3)^2 = 9$ too, so
"the number whose square is $9$" is ambiguous — is it $3$ or $-3$? The square root has to make a
choice. Which one, and why does a length like $\sqrt{2}$ still deserve a definite value?

## Discovery

1. Squaring sends a number to its square: $3\mapsto 9$, $4\mapsto 16$, $5\mapsto 25$. To *undo* it,
   we ask "what number squared gives $25$?" Find every number whose square is $25$. How many are
   there, and how do they relate?
2. A side length of a square can't be negative. Given that, of the two answers in step $1$, which one
   should "$\sqrt{25}$" name if it is to measure a length? State the rule you'd adopt for choosing.
3. Test the boundary: what is $\sqrt{0}$? And what should $\sqrt{-4}$ be — is there any real number
   whose square is $-4$? (Square a positive, square a negative, square zero; what signs are
   possible?)
4. Not every root is whole. Trap $\sqrt{2}$ between consecutive whole numbers by squaring candidates:
   which two integers have squares straddling $2$? Then narrow to one decimal place by squaring
   $1.4$ and $1.5$. What does this suggest about $\sqrt2$ as a definite number?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The principal square root.** For a real number $x \ge 0$, the **square root** $\sqrt{x}$ is the
**unique nonnegative** number whose square is $x$:
$$\sqrt{x} = y \iff y \ge 0 \text{ and } y^2 = x .$$
It is the *inverse of squaring*, restricted to nonnegative inputs and outputs so that the answer is
single-valued: $\sqrt{25} = 5$ (not $-5$), $\sqrt{0} = 0$, $\sqrt{9}=3$. Every nonnegative real has
exactly one principal root, and $(\sqrt x)^2 = x$ while $\sqrt{x^2} = |x|$. A negative number has
**no real** square root, since any real squared is $\ge 0$. The two solutions of $y^2 = x$ (for
$x\gt 0$) are $\pm\sqrt{x}$; the symbol $\sqrt{\ }$ denotes only the nonnegative one.

### Proof

*Existence and uniqueness of the nonnegative root.* Fix $x\ge 0$. Squaring is strictly increasing on
the nonnegative reals: if $0\le a \lt b$ then $a^2 \lt b^2$ (multiply $a\lt b$ by $a\ge0$ and by
$b\gt0$ and combine). A strictly increasing function takes each value at most once, so *at most one*
nonnegative $y$ has $y^2 = x$ — uniqueness. Existence holds on the reals: the squares of nonnegative
numbers rise continuously from $0$ upward past every bound, so some nonnegative $y$ hits exactly $x$
(the completeness of the reals; for perfect squares $y$ is the obvious integer). Define $\sqrt x$ to
be that $y$.

*Why nonnegative, and no negative inputs.* The equation $y^2=x$ with $x\gt 0$ has *two* real
solutions, $y$ and $-y$, since $(-y)^2=y^2$. To make $\sqrt{\ }$ a genuine function (one output) we
select the nonnegative one — the choice that also measures lengths. For $x\lt 0$ there is no real
solution at all: any real $y$ satisfies $y^2\ge 0$ (positives and negatives square to positives,
zero to zero), so $y^2$ can never equal a negative $x$. Hence $\sqrt x$ is undefined over the reals
for $x\lt 0$. Finally $\sqrt{x^2}=|x|$: the nonnegative number squaring to $x^2$ is $|x|$, which
equals $x$ when $x\ge0$ and $-x$ when $x\lt0$. $\blacksquare$

### Worked Instance

The Hook: the lawn of area $9$ has side $\sqrt 9 = 3$ — the principal root — because a length is
nonnegative, even though $(-3)^2=9$ as well. For the irrational case, $\sqrt2$: since $1^2=1\lt 2$
and $2^2=4\gt 2$, we have $1 \lt \sqrt2 \lt 2$; refining, $1.4^2=1.96\lt 2$ and $1.5^2=2.25\gt 2$, so
$1.4\lt\sqrt2\lt 1.5$, and further squeezing gives $\sqrt2\approx 1.41421\ldots$ — a definite point on
the line even though it lands between the fractions. And $\sqrt{(-3)^2}=\sqrt 9=3=|-3|$, illustrating
$\sqrt{x^2}=|x|$.

### Pitfalls

- **$\sqrt{x}$ is the *nonnegative* root only.** $\sqrt{25}=5$, not $\pm 5$. The two solutions of
  $y^2=25$ are $\pm 5$, but the radical symbol picks $+5$.
- **$\sqrt{x^2}=|x|$, not $x$.** For $x=-3$, $\sqrt{(-3)^2}=3$; dropping the absolute value loses the
  sign correction.
- **No real square root of a negative.** $\sqrt{-4}$ is not a real number; every real square is
  $\ge 0$.
- **Roots don't distribute over $+$.** $\sqrt{9+16}=\sqrt{25}=5$, not $\sqrt9+\sqrt{16}=3+4=7$; the
  radical is not linear.

:::
:::

## Connections

The square root is squaring run backward, made single-valued by restricting to nonnegative inputs and
outputs. It rests on squares and previews irrational numbers (that $\sqrt2$ is no fraction) and
radical arithmetic (simplifying $\sqrt{ab}=\sqrt a\sqrt b$). Recognition trigger: "what side gives
this area," "solve $y^2=c$," or any inverse of a squaring — reach for the principal root, and
remember the hidden $\pm$ when solving equations.

## History

Extracting square roots is one of the oldest computational problems: a Babylonian clay tablet (YBC 7289, c. 1800 BCE) gives $\sqrt2$ in base $60$ to an accuracy of about one part in a million, and the Babylonians used an iterative averaging method essentially identical to what is now called Newton's or Heron's method. Heron of Alexandria (1st century CE) described this algorithm explicitly. Indian mathematicians including Aryabhata and later Bhāskara refined root extraction, and the radical sign $\sqrt{\ }$ was introduced by Christoff Rudolff in his algebra text *Coss* (1525), likely a stylized "r" for *radix*. Descartes and others standardized the notation in the seventeenth century. This mattered because the square root is the inverse of squaring and the key to solving quadratics — and because the innocent-looking $\sqrt2$ would become the first proven irrational number, forcing mathematics to expand beyond the rationals.
