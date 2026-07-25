Flip $x^2$ across the $y$-axis and nothing moves; flip $x^3$ through the origin and it lands on
itself; but $2^x$ never doubles back at all — it only climbs. Three structural labels — *even*, *odd*,
*monotonic* — read off a graph's symmetry and its one-way motion, and each one buys real leverage:
halved computations, guaranteed inverses, instant sign information.

## Discovery

1. For $f(x) = x^2$, $x^4$, and $|x|$, compare $f(-x)$ to $f(x)$. For $g(x) = x^3$, $x$, and $1/x$,
   compare $g(-x)$ to $g(x)$. State the two distinct patterns you find, and translate each into a
   geometric statement about how the graph relates to the $y$-axis or to the origin.
2. Test $f(x) = x^2 + x$ against both patterns: is it either? Then ask which functions satisfy *both*
   patterns at once — set $f(-x) = f(x)$ and $f(-x) = -f(x)$ simultaneously and solve for $f(x)$.
3. Call $f$ **strictly increasing** if $x_1 \lt x_2 \Rightarrow f(x_1) \lt f(x_2)$. Prove $x^3$ is
   strictly increasing on all of $\RR$ (factor $a^3 - b^3$ and check the sign of each factor). Then
   argue: if $f$ is strictly increasing (or strictly decreasing), can two different inputs ever share
   an output? What does that make $f$ as a map onto its range?
4. Given a function $f$ on a domain symmetric about $0$, form $E(x) = \tfrac{f(x) + f(-x)}{2}$ and
   $O(x) = \tfrac{f(x) - f(-x)}{2}$. Check the parity of each, and add them. What have you shown about
   *every* such $f$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $f$ have a domain symmetric about $0$.

- **Even:** $f(-x) = f(x)$ for all $x$ — graph symmetric across the $y$-axis (e.g. $x^2$, $\cos$).
- **Odd:** $f(-x) = -f(x)$ for all $x$ — graph symmetric through the origin (e.g. $x^3$, $\sin$). Odd
  functions with $0$ in the domain satisfy $f(0) = 0$.
- The **only** function that is both even and odd is $f \equiv 0$. Most functions are neither.
- **Parity algebra:** even $\times$ even $=$ even, odd $\times$ odd $=$ even, even $\times$ odd $=$ odd;
  and every $f$ decomposes *uniquely* as $f = E + O$ with $E$ even, $O$ odd.

- **Monotonic:** $f$ is **strictly increasing** if $x_1 \lt x_2 \Rightarrow f(x_1) \lt f(x_2)$, and
  **strictly decreasing** if $x_1 \lt x_2 \Rightarrow f(x_1) \gt f(x_2)$. A strictly monotonic
  function is **injective** (one-to-one), hence invertible onto its range.

### Proof

*Both even and odd forces zero.* If $f(-x) = f(x)$ and $f(-x) = -f(x)$ for all $x$, then
$f(x) = -f(x)$, so $2f(x) = 0$, i.e. $f(x) = 0$ everywhere.

*Parity of products* (odd $\times$ odd shown; the rest are identical). If $g, h$ are odd, then
$(gh)(-x) = g(-x)h(-x) = (-g(x))(-h(x)) = g(x)h(x) = (gh)(x)$, so $gh$ is even.

*Unique even/odd decomposition.* Set $E(x) = \tfrac{f(x)+f(-x)}{2}$ and $O(x) =
\tfrac{f(x)-f(-x)}{2}$. Then $E(-x) = \tfrac{f(-x)+f(x)}{2} = E(x)$ (even) and $O(-x) =
\tfrac{f(-x)-f(x)}{2} = -O(x)$ (odd), and $E + O = f$. For uniqueness, if $f = E_1 + O_1 = E_2 + O_2$
with $E_i$ even, $O_i$ odd, then $E_1 - E_2 = O_2 - O_1$ is simultaneously even and odd, hence
identically $0$; so $E_1 = E_2$ and $O_1 = O_2$.

*$x^3$ is strictly increasing.* For $a \lt b$, $b^3 - a^3 = (b - a)(b^2 + ab + a^2)$. The first factor
is positive. The second is $b^2 + ab + a^2 = \big(b + \tfrac a2\big)^2 + \tfrac{3}{4}a^2 \ge 0$, and it
vanishes only when $a = b = 0$, impossible under $a \lt b$; so it is positive. Thus $b^3 - a^3 \gt 0$,
i.e. $a^3 \lt b^3$.

*Strictly monotonic $\Rightarrow$ injective $\Rightarrow$ invertible.* Suppose $f$ is strictly
increasing and $x_1 \ne x_2$; WLOG $x_1 \lt x_2$, so $f(x_1) \lt f(x_2)$, in particular $f(x_1) \ne
f(x_2)$. Hence distinct inputs give distinct outputs — $f$ is injective. An injective $f$ is a
bijection onto its range $f(D)$, so the rule sending each $y = f(x)$ back to its unique $x$ is a
well-defined inverse $f^{-1} : f(D) \to D$. (Decreasing is symmetric.) $\blacksquare$

### Worked Instance

Decompose $f(x) = e^x$. Its even part is $E(x) = \tfrac{e^x + e^{-x}}{2} = \cosh x$ and its odd part
$O(x) = \tfrac{e^x - e^{-x}}{2} = \sinh x$, and indeed $\cosh x + \sinh x = e^x$ — the hyperbolic
functions are exactly the even/odd halves of the exponential.

A cautionary monotonic example: $f(x) = 1/x$ is odd and is decreasing on $(0,\infty)$ and on
$(-\infty,0)$ separately, yet it is **not** monotonic on its whole domain: $f(-1) = -1 \lt 1 = f(1)$
even though $-1 \lt 1$, so "decreasing on each piece" does not make it decreasing across the gap. It is
still injective, so it has an inverse — itself.

### Pitfalls

- **Symmetric domain is required.** "Even/odd" only makes sense when $x$ in the domain forces $-x$ in
  too; a function on $[0, \infty)$ is neither by default.
- **"Neither" is the norm.** $x^2 + x$ is neither even nor odd; do not assume a function must be one.
- **$f(0) = 0$ for odd functions only if $0$ is in the domain** (set $x = 0$ in $f(-x) = -f(x)$).
- **Monotonic on pieces $\ne$ monotonic overall.** $1/x$ decreases on each side of $0$ but not across
  the discontinuity. Check the whole domain before calling a function monotonic.
- **Injective does not imply monotonic** in general (a function can be one-to-one while jumping around);
  monotonic $\Rightarrow$ injective is the safe direction.

:::
:::

## Connections

These labels refine the raw notion of a function from **[alg-function-intro]** into ones you can
exploit. Monotonicity is the clean sufficient condition for the **inverse function**
([alg-inverse-function]): strictly monotonic guarantees one-to-one, so the inverse exists without
fuss. Parity halves work everywhere — even integrands over symmetric intervals, Fourier's
cosine/sine split, the $\cosh/\sinh$ decomposition — and the even/odd decomposition is the algebraic
seed of that idea. Recognition trigger: a symmetric graph, an integrand on $[-a,a]$, a demand to show
a function is one-to-one, or "prove this equation has exactly one solution."
