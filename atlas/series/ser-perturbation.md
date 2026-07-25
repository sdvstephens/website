The pure geometric sum $\sum x^k$ has a one-line closed form. But weight each term by its index —
$1x + 2x^2 + 3x^3 + \cdots$ — and the tidy pattern seems to vanish. Does attaching a linear
weight really destroy the closed form, or just hide it?

## Discovery

1. Recall the geometric trick: for $G = \sum_{k=0}^{n} x^k$, multiplying by $x$ and subtracting
   killed almost every term. Set $S = \sum_{k=1}^{n} k x^k$ and try the same move: write out $xS$.
2. Line up $S$ and $xS$ so that equal *powers* of $x$ sit above each other, and subtract
   $S - xS$. When you subtract $k x^k$ (from $S$) and $(k-1)x^k$ (from $xS$) at the same power,
   what coefficient is left on $x^k$?
3. So $S - xS$ turns the *weighted* sum into an *unweighted* one (plus a couple of boundary
   terms). Identify that leftover unweighted sum — you already have its closed form.
4. Solve the resulting equation for $S$. What is $\sum_{k=1}^{n} k x^k$ in closed form (for
   $x \ne 1$)? Then let $n\to\infty$ with $\lvert x\rvert \lt 1$ and read off the infinite value.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For $x \ne 1$,
$$\sum_{k=1}^{n} k\,x^{k} = \frac{x\,\bigl(1 - (n+1)x^{n} + n\,x^{n+1}\bigr)}{(1-x)^{2}},$$
and for $\lvert x\rvert \lt 1$,
$$\sum_{k=1}^{\infty} k\,x^{k} = \frac{x}{(1-x)^{2}}.$$
The method — multiply the whole sum by the common ratio and subtract to demote the weight —
is **perturbation**, and it handles any *arithmetico-geometric* series (arithmetic weight times
geometric term).

### Proof

Let $S = \sum_{k=1}^{n} k x^k$. Then $xS = \sum_{k=1}^{n} k x^{k+1} = \sum_{k=2}^{n+1} (k-1)x^{k}$.
Subtracting, and matching powers of $x^k$ for $k = 2,\dots,n$ where the coefficient is
$k - (k-1) = 1$,
$$(1-x)S = \underbrace{1\cdot x}_{k=1} + \sum_{k=2}^{n} \bigl(k-(k-1)\bigr)x^{k} - \underbrace{n\,x^{n+1}}_{k=n+1}
= \sum_{k=1}^{n} x^{k} - n\,x^{n+1}.$$
The remaining sum is geometric: $\sum_{k=1}^{n} x^k = \dfrac{x(1-x^n)}{1-x}$. Hence
$$(1-x)S = \frac{x(1-x^n)}{1-x} - n x^{n+1}
= \frac{x - x^{n+1} - n x^{n+1}(1-x)}{1-x} = \frac{x\bigl(1 - (n+1)x^n + n x^{n+1}\bigr)}{1-x}.$$
Dividing by $1-x$ gives the finite formula. For $\lvert x\rvert \lt 1$, both $n x^n \to 0$ and
$x^{n} \to 0$, so $S \to \dfrac{x}{(1-x)^2}$. $\blacksquare$

### Worked Instance

Take $x = \tfrac12$ (an infinite arithmetico-geometric sum, the expected value of a geometric
random variable): $\sum_{k=1}^{\infty} k\bigl(\tfrac12\bigr)^k = \dfrac{1/2}{(1-1/2)^2}
= \dfrac{1/2}{1/4} = 2$. So $\tfrac12 + \tfrac24 + \tfrac38 + \tfrac{4}{16} + \cdots = 2$: the
linear weight did not break the closed form — perturbation demoted it straight back to a
geometric sum.

### Pitfalls

- Align by **powers of $x$**, not by index position, before subtracting — otherwise the boundary
  terms come out wrong.
- Don't drop the two boundary terms (the $k=1$ head and the $k=n+1$ tail); they are the whole
  reason the answer isn't just the geometric sum.
- The denominator is $(1-x)^2$, squared — one factor from the geometric collapse, one from
  solving for $S$. A single power is a common slip.
- For the infinite sum you still need $\lvert x\rvert \lt 1$; here $n x^n\to 0$ requires it.

:::
:::

## Connections

Prereqs: arithmetic & geometric series (`ser-arith-geom`) — perturbation is that same
multiply-and-subtract move, applied once more to peel off a linear weight. It generalizes to any
polynomial weight (repeat the trick, or differentiate the geometric series), which is exactly the
door into generating functions (`ser-generating-functions`), where $\frac{x}{(1-x)^2}$ is the
generating function of $1,2,3,\dots$. Recognition trigger: a sum of (polynomial in $k$) times
(something$^k$).
