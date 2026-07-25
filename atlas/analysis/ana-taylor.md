A calculator has no idea what $\sin(0.1)$ "is." Yet it returns $0.0998334\ldots$ instantly. It is
not consulting a table of infinitely many angles — it is adding up a few terms of a polynomial that
mimics $\sin$ near $0$. What polynomial, and why does a *finite* piece of it get so many digits right?

## Discovery

Suppose a function $f$ is very smooth near $0$ and we want the best polynomial
$P(x) = c_0 + c_1 x + c_2 x^2 + \cdots + c_n x^n$ that matches it there.

1. Demand $P(0) = f(0)$. What does that force $c_0$ to be?
2. Demand also $P'(0) = f'(0)$. Differentiate $P$ once, set $x=0$, and read off $c_1$.
3. Differentiate $P$ twice and set $x = 0$. Only one term survives — which, and with what numerical
   coefficient out front? Solve for $c_2$ in terms of $f''(0)$. Do the same for $c_3$: what constant
   multiplies $c_3$ after three differentiations?
4. Spot the pattern: differentiating $x^k$ exactly $k$ times at $0$ leaves the constant $k!$. Write
   $c_k$ in terms of the $k$-th derivative $f^{(k)}(0)$.
5. Apply your formula to $f(x) = e^x$ (all derivatives equal $e^x$, so $f^{(k)}(0) = 1$). Write the
   first several terms. Then do $f(x) = \sin x$ (derivatives cycle $\cos, -\sin, -\cos, \sin$ at $0$
   giving $0,1,0,-1,\dots$) and note which terms vanish and why.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

If $f$ has $n{+}1$ derivatives on an interval around $a$, then for $x$ there,
$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x),$$
the **Taylor polynomial** plus a remainder. With $a=0$ it is the **Maclaurin** form. The
**Lagrange remainder** is
$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$$
for some $\xi$ strictly between $a$ and $x$. Standard Maclaurin expansions (valid on the stated sets):
$$e^x = \sum_{k\ge 0}\frac{x^k}{k!},\qquad
\sin x = \sum_{k\ge 0}\frac{(-1)^k x^{2k+1}}{(2k+1)!},\qquad
\cos x = \sum_{k\ge 0}\frac{(-1)^k x^{2k}}{(2k)!},$$
$$\frac{1}{1-x} = \sum_{k\ge 0} x^k \ (|x|\lt 1),\qquad
\ln(1+x) = \sum_{k\ge 1}\frac{(-1)^{k-1}x^k}{k}\ (-1 \lt x \le 1).$$

### Proof

**The coefficient formula.** Suppose $f(x) = \sum_{k=0}^n c_k(x-a)^k + R_n(x)$ with $R_n$ and its
first $n$ derivatives vanishing at $a$ (the sense in which $P$ "matches" $f$ to order $n$).
Differentiate the polynomial $j$ times ($0 \le j \le n$) and evaluate at $x=a$. The term
$c_k(x-a)^k$ becomes, after $j$ derivatives, $c_k\,k(k-1)\cdots(k-j+1)(x-a)^{k-j}$; at $x=a$ this is
$0$ unless $k=j$, when it equals $c_j\,j!$. Hence $f^{(j)}(a) = c_j\,j!$, i.e.
$c_j = f^{(j)}(a)/j!$. $\blacksquare$

**Lagrange remainder.** Fix $x \ne a$; let $P_n$ be the Taylor polynomial and set the constant $M$
by $f(x) = P_n(x) + M(x-a)^{n+1}$. Define
$$g(t) = f(t) - P_n(t) - M(t-a)^{n+1}.$$
Then $g(x) = 0$ and $g(a) = g'(a) = \cdots = g^{(n)}(a) = 0$ (since $P_n$ matches $f$ to order $n$
at $a$, and each derivative of $(t-a)^{n+1}$ up to order $n$ vanishes at $t=a$). Because
$g(a)=g(x)=0$, Rolle's theorem gives $\xi_1$ between $a$ and $x$ with $g'(\xi_1)=0$. Now
$g'(a)=g'(\xi_1)=0$ gives $\xi_2$ between them with $g''(\xi_2)=0$; iterating $n{+}1$ times yields
$\xi$ between $a$ and $x$ with $g^{(n+1)}(\xi)=0$. But $P_n^{(n+1)}\equiv 0$ and
$\frac{d^{n+1}}{dt^{n+1}}(t-a)^{n+1} = (n+1)!$, so
$$g^{(n+1)}(\xi) = f^{(n+1)}(\xi) - M(n+1)! = 0 \;\implies\; M = \frac{f^{(n+1)}(\xi)}{(n+1)!}.$$
Thus $R_n(x) = M(x-a)^{n+1} = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$. $\blacksquare$

### Worked Instance

Resolve the Hook. For $\sin x$ the Maclaurin series is $x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots$.
Approximate $\sin(0.1)$ by the first two nonzero terms:
$$0.1 - \frac{(0.1)^3}{6} = 0.1 - \frac{0.001}{6} = 0.1 - 0.000166\overline{6} = 0.0998333\ldots$$
The true value is $0.09983341\ldots$ — correct to seven decimals from two terms. The Lagrange
remainder bounds the error: the next derivative $f^{(5)}=\cos$ satisfies $|f^{(5)}|\le 1$, so
$$|R_4(0.1)| \le \frac{1}{5!}(0.1)^5 = \frac{10^{-5}}{120} \approx 8.3\times 10^{-8},$$
consistent with the seven-digit agreement. The calculator's "magic" is exactly this truncated sum.

### Pitfalls

- **The $k!$ is mandatory.** $c_k = f^{(k)}(0)/k!$, not $f^{(k)}(0)$. Dropping the factorial is the
  most frequent error.
- **Remainder uses derivative $n{+}1$**, evaluated at an *unknown* $\xi$ — you bound
  $|f^{(n+1)}|$, you do not evaluate it exactly.
- **Convergence has a radius.** $\frac{1}{1-x}$ and $\ln(1+x)$ series only converge for $|x|\lt 1$
  (with $\ln$ also at $x=1$); $e^x,\sin,\cos$ converge for all $x$. A finite Taylor polynomial is
  fine everywhere, but the infinite series may diverge.
- **Even/odd structure.** $\sin$ has only odd powers, $\cos$ only even; a stray even term in a $\sin$
  expansion signals an arithmetic slip.

:::
:::

## Connections

Prereqs: the derivative rules (repeated differentiation) and Rolle's theorem (used in the remainder,
itself a Mean Value fact). Taylor series feed L'Hôpital-style limit computations (substitute the
series and cancel), power-series and generating-function methods, and every numerical approximation.
Recognition trigger: "approximate near a point," "evaluate a limit where everything cancels," or
"prove an inequality by comparing with a polynomial."
