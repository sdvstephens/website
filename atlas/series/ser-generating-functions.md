Suppose a sequence $a_0, a_1, a_2, \dots$ satisfies $a_0 = 1$ and $a_{n} = 2a_{n-1}$. You already
know $a_n = 2^n$. But what if you *hang the whole sequence on a single hook* — encode all of it
in one function — and let algebra find the formula for you, no guessing?

## Discovery

1. Attach the sequence $a_0, a_1, \dots$ to a formal variable $x$ by forming the power series
   $A(x) = a_0 + a_1 x + a_2 x^2 + \cdots$. For the constant sequence $a_n = 1$, what familiar
   closed form is $A(x)$? (You met it as an infinite geometric sum.)
2. Now take the recurrence $a_n = 2a_{n-1}$ with $a_0 = 1$. Multiply both sides by $x^n$ and sum
   over $n \ge 1$. Express the left side and the right side each in terms of $A(x)$. (Hint:
   $\sum_{n\ge 1} a_{n-1}x^n = x\sum_{n\ge 0} a_n x^n$.)
3. You now have one equation in the single unknown $A(x)$. Solve it for $A(x)$ as a ratio.
4. Expand your $A(x)$ back into a power series (it's geometric). What is the coefficient of $x^n$
   — and does it match the sequence you started with?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **ordinary generating function** (OGF) of a sequence $(a_n)_{n\ge 0}$ is the formal power
series
$$A(x) = \sum_{n=0}^{\infty} a_n x^n.$$
Operations on the sequence become algebra on $A(x)$: shifting the index by one multiplies by $x$,
the coefficient of $x^n$ (written $[x^n]A(x)$) recovers $a_n$, and a linear recurrence for
$(a_n)$ becomes a linear equation for $A(x)$ whose solution is a rational function. Two staple
identities:
$$\frac{1}{1-x} = \sum_{n\ge 0} x^n, \qquad \frac{1}{(1-x)^2} = \sum_{n\ge 0}(n+1)x^n.$$
These are formal identities — questions of numerical convergence are set aside; $x$ is a
bookkeeping marker.

### Proof

We prove the two staple identities and the shift rule, which is all the machinery the method uses.

*Geometric identity.* In the ring of formal power series, $(1-x)\sum_{n\ge 0}x^n$ has $x^0$
coefficient $1$ and, for $n\ge 1$, coefficient $1 - 1 = 0$ (the $x^n$ from the sum minus the
$x\cdot x^{n-1}$). So the product is $1$, i.e. $\sum_{n\ge 0}x^n = \dfrac{1}{1-x}$.

*Squared identity.* Differentiate $\dfrac{1}{1-x} = \sum_{n\ge 0}x^n$ formally term by term:
$\dfrac{1}{(1-x)^2} = \sum_{n\ge 1} n x^{n-1} = \sum_{n\ge 0}(n+1)x^n$. (Formal differentiation of
power series is defined termwise and is legitimate on formal series.)

*Shift rule.* If $A(x) = \sum_{n\ge 0} a_n x^n$, then
$\sum_{n\ge 0} a_{n-1}x^n = \sum_{n\ge 1} a_{n-1}x^n = x\sum_{m\ge 0}a_m x^m = xA(x)$ (reindex
$m = n-1$). Thus an index shift is multiplication by $x$. $\blacksquare$

### Worked Instance

Solve $a_0 = 1$, $a_n = 2a_{n-1}$ ($n\ge 1$) — the Hook. Set $A(x) = \sum_{n\ge 0}a_n x^n$.
Multiply the recurrence by $x^n$ and sum over $n\ge 1$:
$$\sum_{n\ge 1} a_n x^n = 2\sum_{n\ge 1} a_{n-1}x^n \;\Longrightarrow\; A(x) - a_0 = 2x\,A(x).$$
With $a_0 = 1$, $A(x)(1 - 2x) = 1$, so $A(x) = \dfrac{1}{1-2x} = \sum_{n\ge 0}(2x)^n
= \sum_{n\ge 0} 2^n x^n$. Reading off the coefficient, $a_n = 2^n$ — derived, not guessed.

### Pitfalls

- Watch the initial-term bookkeeping: $\sum_{n\ge 1}a_n x^n = A(x) - a_0$, not $A(x)$. Dropping
  the $-a_0$ is the most common error.
- These are **formal** power series: you may manipulate them even where they wouldn't converge
  numerically. Convergence matters only when you finally plug in a number.
- $\dfrac{1}{(1-x)^2} = \sum (n+1)x^n$ has coefficient $n+1$, not $n$. Off-by-one here corrupts
  the extracted formula.
- To read $[x^n]$ from a rational $A(x)$, do partial fractions first — each simple pole gives a
  geometric series.

:::
:::

## Connections

Prereqs: geometric series (`ser-arith-geom`) — its closed form $\frac{1}{1-x}$ is the atom every
OGF is built from. Shifting-as-multiplication makes generating functions the algebraic engine for
linear recurrences (`ser-linear-recurrences`) and for counting (`comb-generating-functions`); the
habit of reaching for them is `meta-generating-function-mindset`. Recognition trigger: a sequence
defined by a recurrence, or a counting problem with a convolution structure ("choose parts that
add to $n$"). A recurring Putnam and olympiad technique.
