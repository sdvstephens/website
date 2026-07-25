The rule $a_n = a_{n-1} + a_{n-2}$ builds a sequence $1, 1, 2, 3, 5, 8, 13, \dots$ where each term
looks hopelessly entangled with the two before it. Yet there is a single formula that spits out
the $100$th term without computing the first $99$. Where does a *closed* formula hide inside a
*recursive* rule?

## Discovery

1. For $a_n = a_{n-1} + a_{n-2}$, gamble that a pure geometric sequence $a_n = r^n$ solves it.
   Substitute and divide through by the lowest power of $r$. What polynomial equation must $r$
   satisfy?
2. Solve that quadratic for its two roots $r_1, r_2$. (You may leave them in surd form.)
3. Both $r_1^n$ and $r_2^n$ satisfy the recurrence. Check that any combination
   $a_n = C_1 r_1^n + C_2 r_2^n$ does too — why does linearity guarantee this?
4. Fix $C_1, C_2$ from two initial values, say $a_0$ and $a_1$: set up two linear equations and
   solve. You now have a closed form. What role do $r_1 + r_2$ and $r_1 r_2$ (Vieta!) play in
   recognizing the roots?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A homogeneous linear recurrence with constant coefficients,
$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_d a_{n-d},$$
has **characteristic polynomial** $x^d - c_1 x^{d-1} - \cdots - c_d$. If this polynomial has
$d$ **distinct** roots $r_1,\dots,r_d$, then every solution is
$$a_n = C_1 r_1^{n} + C_2 r_2^{n} + \cdots + C_d r_d^{n},$$
with the constants $C_i$ pinned down by $d$ initial values. If a root $r$ has multiplicity $m$,
it contributes the block $\bigl(C_0 + C_1 n + \cdots + C_{m-1} n^{m-1}\bigr)r^n$.

### Proof

*Each root gives a solution.* If $r$ is a root of $x^d - \sum_{j} c_j x^{d-j}$, then substituting
$a_n = r^n$ into the recurrence gives $r^n - \sum_j c_j r^{n-j} = r^{n-d}\bigl(r^d - \sum_j c_j
r^{d-j}\bigr) = 0$, so $r^n$ satisfies it.

*Combinations are solutions.* The map $L(a)_n = a_n - \sum_j c_j a_{n-j}$ is linear in the
sequence, and $L(r_i^{\bullet}) = 0$ for each root, so $L\bigl(\sum_i C_i r_i^{\bullet}\bigr)
= \sum_i C_i L(r_i^{\bullet}) = 0$. Hence any linear combination solves the recurrence.

*These are all of them (distinct-root case).* A sequence obeying an order-$d$ recurrence is
determined by its first $d$ values $a_0,\dots,a_{d-1}$. Matching $\sum_i C_i r_i^n$ to those
values is the linear system whose coefficient matrix is the Vandermonde matrix
$\bigl(r_i^{\,k}\bigr)_{0\le k\le d-1}$; with distinct $r_i$ its determinant
$\prod_{i\lt j}(r_j - r_i)$ is nonzero, so a unique $(C_i)$ exists. Thus every solution has this
form.

*Repeated root.* If $r$ is a double root, then $n r^n$ also satisfies the recurrence: the
characteristic polynomial and its derivative both vanish at $r$, and differentiating the identity
$L(x^{n}) = x^{n-d}P(x)$ in $x$ shows $L(n r^{n}) = 0$. Iterating handles multiplicity $m$, giving
the $n^{j}r^n$ block. $\blacksquare$

### Worked Instance

Solve $a_n = a_{n-1} + a_{n-2}$ with $a_0 = 0,\ a_1 = 1$ (the Fibonacci start). The characteristic
equation is $x^2 = x + 1$, i.e. $x^2 - x - 1 = 0$, with roots $\varphi = \tfrac{1+\sqrt5}{2}$ and
$\psi = \tfrac{1-\sqrt5}{2}$. So $a_n = C_1\varphi^n + C_2\psi^n$. From $a_0 = 0$: $C_1 + C_2 = 0$.
From $a_1 = 1$: $C_1\varphi + C_2\psi = 1$. Hence $C_1 = -C_2 = \tfrac{1}{\varphi - \psi}
= \tfrac{1}{\sqrt5}$, giving Binet's formula
$$a_n = \frac{\varphi^n - \psi^n}{\sqrt5}.$$
By Vieta, $\varphi + \psi = 1$ and $\varphi\psi = -1$, exactly the recurrence's coefficients read
off the characteristic equation.

### Pitfalls

- The characteristic polynomial for $a_n = c_1 a_{n-1} + \cdots$ is $x^d - c_1 x^{d-1} - \cdots$
  — the signs come from moving every term to one side; a sign slip breaks everything.
- A **repeated** root needs the extra factor $n$ (then $n^2$, …); using $C_1 r^n + C_2 r^n$ for a
  double root collapses to one constant and cannot match two initial values.
- Solve for the $C_i$ *after* finding the roots, using the initial conditions — don't guess them.
- Complex roots are fine; they combine into real oscillating solutions $\rho^n\cos(n\theta)$ type
  terms via Euler's formula.

:::
:::

## Connections

Prereqs: `alg-vieta` — the characteristic equation's coefficients *are* the symmetric functions
of its roots, so recognizing roots and reading off recurrence coefficients are two sides of Vieta.
This method turns any linear recurrence into a root-finding problem; it directly unlocks Fibonacci
identities (`ser-fibonacci`) and dovetails with generating functions (`ser-generating-functions`),
which produce the same rational-then-partial-fractions closed form. Recognition trigger: a
sequence each term of which is a fixed linear combination of the previous few. Standard on the
AIME/Putnam and in combinatorics (tilings, Catalan-adjacent counts).
