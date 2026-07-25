Add $\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \dfrac{1}{3\cdot 4} + \cdots + \dfrac{1}{99\cdot 100}$.
There are $99$ fractions with no obvious pattern in their decimals — yet the total is a single
tidy fraction just shy of $1$. What makes ninety-nine terms collapse to one?

## Discovery

1. Look at one term $\dfrac{1}{k(k+1)}$. Try to write it as $\dfrac{A}{k} + \dfrac{B}{k+1}$.
   Clear denominators and match coefficients: what are $A$ and $B$?
2. Rewrite the whole sum $\sum_{k=1}^{n} \dfrac{1}{k(k+1)}$ using that split. Write the first
   three and last two terms out in full. Which terms cancel against their neighbours?
3. After all the interior cancellation, only a couple of terms survive. Which ones, and what is
   the closed form for the sum?
4. Now try a term that skips: $\dfrac{1}{k(k+2)}$. Split it the same way. This time a term
   cancels its neighbour *two* steps along, so more than one term survives at each end. How many
   survive, and what is the closed form?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

If a term can be written as a difference $t_k = f(k) - f(k+1)$ (or $f(k) - f(k+m)$ for a fixed
skip $m$), the sum telescopes:
$$\sum_{k=1}^{n} \bigl(f(k) - f(k+1)\bigr) = f(1) - f(n+1).$$
Partial fractions is the engine that *produces* such a difference. The two staple cases:
$$\sum_{k=1}^{n} \frac{1}{k(k+1)} = 1 - \frac{1}{n+1}, \qquad
\sum_{k=1}^{n} \frac{1}{k(k+2)} = \frac{3}{4} - \frac{1}{2}\!\left(\frac{1}{n+1} + \frac{1}{n+2}\right).$$

### Proof

Decompose $\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$ (clearing denominators gives
$1 = A(k+1) + Bk$; setting $k=0$ yields $A=1$, $k=-1$ yields $B=-1$). Then
$$\sum_{k=1}^{n}\frac{1}{k(k+1)} = \sum_{k=1}^n\left(\frac1k - \frac{1}{k+1}\right)
= \left(\frac11-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1n-\frac1{n+1}\right).$$
Every $-\tfrac{1}{k+1}$ cancels the $+\tfrac{1}{k+1}$ of the next term, leaving
$1 - \dfrac{1}{n+1}$.

For the skip case, $\dfrac{1}{k(k+2)} = \dfrac12\left(\dfrac1k - \dfrac1{k+2}\right)$ (same method,
$A=\tfrac12$, $B=-\tfrac12$). Now the cancellation jumps two steps, so
$$\sum_{k=1}^n \frac{1}{k(k+2)} = \frac12\sum_{k=1}^n\left(\frac1k-\frac1{k+2}\right)
= \frac12\left(\frac11+\frac12-\frac1{n+1}-\frac1{n+2}\right)
= \frac34 - \frac12\!\left(\frac1{n+1}+\frac1{n+2}\right).$$
With a skip of $m$, exactly the first $m$ and last $m$ terms of $f$ survive. $\blacksquare$

### Worked Instance

The Hook is $\sum_{k=1}^{99} \dfrac{1}{k(k+1)} = 1 - \dfrac{1}{100} = \dfrac{99}{100}$.
Ninety-nine fractions collapse because each splits into $\tfrac1k - \tfrac1{k+1}$, and every
interior piece is annihilated by its neighbour — only the outermost $\tfrac11$ and $-\tfrac1{100}$
are left standing.

### Pitfalls

- Get the sign of the split right: $\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac1{k+1}$, **not** the
  reverse. A flipped sign gives a telescoping sum with the wrong surviving endpoints.
- For a skip of $m$, **$m$ terms survive at each end**, not one. Do not blindly write
  $f(1) - f(n+1)$ for $\tfrac{1}{k(k+2)}$.
- Don't forget the constant factor from the decomposition (the $\tfrac12$ in the skip case).
- The infinite sum exists only if $f(n+1) \to$ a limit; here $\tfrac1{n+1}\to 0$, so
  $\sum_{k=1}^\infty \tfrac{1}{k(k+1)} = 1$.

:::
:::

## Connections

Prereqs: `alg-telescoping` (the collapse identity itself). Partial fractions is *how you spot* a
telescoping structure hiding in a rational term — the recognition trigger is a summand that is a
rational function of $k$ with a factored denominator. This unlocks creative telescoping
(`ser-creative-telescoping`), where you must invent the $f$ yourself rather than read it off.
Constant on the AMC/AIME and a first move on many Putnam summation problems.
