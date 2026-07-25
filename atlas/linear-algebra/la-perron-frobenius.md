Take a matrix with *all entries strictly positive*, say $A = \begin{pmatrix} 2 & 1 \\ 1 & 3
\end{pmatrix}$. Its eigenvalues are $\tfrac{5 \pm \sqrt 5}{2} \approx 3.62$ and $1.38$: one is
real, positive, and strictly the largest, and its eigenvector points into the positive quadrant.
Start from any positive vector and keep multiplying by $A$; the direction settles onto that one
eigenvector. This is not luck — every positive matrix behaves this way, and the fact quietly powers
Google's PageRank, Markov chains, and population models.

## Discovery

Let $A$ be an $n \times n$ real matrix with every entry $a_{ij} \gt 0$. Write $x \ge 0$ to mean all
coordinates of $x$ are non-negative, and $x \gt 0$ to mean all are strictly positive.

1. **Iterate and watch the direction.** Pick a positive vector $x$ and compute $Ax, A^2x, A^3x,
   \dots$, rescaling to unit length each time. For the $2 \times 2$ matrix in the Hook, what
   direction do the normalized vectors approach? Does the starting positive vector matter?
2. **Search for the best scaling.** For a candidate vector $x \ge 0$ (not zero), compare $Ax$ with
   $\lambda x$. Define $\lambda(x)$ to be the *largest* number $\lambda$ with $Ax \ge \lambda x$
   (entrywise). Over all $x \ge 0$ on the unit simplex, think about maximizing $\lambda(x)$. Why is
   the maximum attained? Call the maximizing vector $x^\star$ and the value $r$.
3. **Force equality.** Suppose at the maximizer $Ax^\star \ge r x^\star$ but the inequality is
   *strict* in some coordinate. Apply $A$ once more (all entries positive) and examine
   $A(Ax^\star)$ versus $r(Ax^\star)$. Can you now find a vector beating $r$? What does that force
   about $Ax^\star$ and $r x^\star$?
4. **Positivity for free.** Given $Ax^\star = r x^\star$ with $x^\star \ge 0$ nonzero and every
   $a_{ij} \gt 0$, examine a single coordinate $(Ax^\star)_i = \sum_j a_{ij} x^\star_j$. Must
   $x^\star_i$ be strictly positive? And bound $r$ between the smallest and largest row sums of $A$.
5. **Nothing beats it in size.** Let $\mu$ be *any* eigenvalue of $A$ with eigenvector $z$ (possibly
   complex). Compare the entrywise absolute value $|Az|$ with $A|z|$. What inequality between
   $|\mu|$ and $r$ drops out — and when can it be an equality?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Perron's theorem (positive matrices).** Let $A$ be $n \times n$ with all entries $a_{ij} \gt 0$.
Then:

1. $A$ has a real eigenvalue $r \gt 0$, the **Perron root**, equal to the spectral radius
   $\rho(A) = \max_i |\lambda_i|$.
2. Every other eigenvalue $\mu$ satisfies $|\mu| \lt r$ (strict dominance).
3. $r$ has a **strictly positive eigenvector** $x^\star \gt 0$ (the Perron vector), and $r$ is the
   *only* eigenvalue admitting a non-negative eigenvector.
4. $r$ is a **simple** eigenvalue (its eigenspace is one-dimensional).
5. $r$ is squeezed between the extreme row sums:
   $\displaystyle \min_i \sum_j a_{ij} \ \le\ r\ \le\ \max_i \sum_j a_{ij}.$

**Frobenius's extension.** If $A \ge 0$ is merely non-negative but **irreducible** (its directed
graph is strongly connected), then (1), (3) with $x^\star \gt 0$, (4), and (5) still hold, with
$r = \rho(A)$; strict dominance (2) can fail — an irreducible matrix with period $h$ has exactly $h$
eigenvalues of modulus $r$, equally spaced on the circle $|\mu| = r$.

### Proof

We prove the Perron (strictly positive) case; the accessible core is a compactness argument on the
simplex.

**Existence of a non-negative eigenpair.** Let $\Delta = \{x \ge 0 : \sum_i x_i = 1\}$, a compact
set. For $x \in \Delta$ put
$$L(x) = \max\{\lambda \ge 0 : Ax \ge \lambda x\} = \min_{i : x_i \gt 0}\frac{(Ax)_i}{x_i},$$
and let $r = \sup_{x \in \Delta} L(x)$. The set of achievable $\lambda$ is bounded above (by
$\max_i \sum_j a_{ij}$, since $(Ax)_i \le (\max_i \sum_j a_{ij})\, x_i$ cannot hold with a larger
factor for the coordinate where $x_i$ is largest), and a standard compactness argument — replacing
$x$ by $Ax/\|Ax\|_1$, which is continuous and pushes $L$ upward — shows the supremum is attained at
some $x^\star \in \Delta$ with $A x^\star \ge r x^\star$.

**Equality holds.** Suppose $A x^\star \ge r x^\star$ but $A x^\star \ne r x^\star$, so the
difference $w = A x^\star - r x^\star \ge 0$ is nonzero. Multiplying by $A$ (all entries positive)
turns any non-negative nonzero vector into a *strictly positive* one, so $Aw \gt 0$, i.e.
$A(Ax^\star) \gt r (A x^\star)$. Then the vector $y = A x^\star$ (which is $\gt 0$) satisfies
$Ay \gt r y$ strictly in every coordinate, so $L(y/\|y\|_1) \gt r$ — contradicting maximality of
$r$. Hence $A x^\star = r x^\star$.

**Positivity and $r \gt 0$.** From $A x^\star = r x^\star$ with $x^\star \ge 0$ nonzero, each
coordinate is $r\, x^\star_i = \sum_j a_{ij} x^\star_j \gt 0$ (the right side has a positive
coefficient on the nonzero entry of $x^\star$), so $x^\star_i \gt 0$ for all $i$ and $r \gt 0$. Thus
$x^\star \gt 0$ is a strictly positive eigenvector.

**Row-sum bounds.** Let $i$ maximize $x^\star_i$. From $r x^\star_i = \sum_j a_{ij} x^\star_j \le
\big(\sum_j a_{ij}\big) x^\star_i$ we get $r \le \sum_j a_{ij} \le \max_i \sum_j a_{ij}$; taking $i$
to minimize $x^\star_i$ gives $r \ge \min_i \sum_j a_{ij}$.

**Strict dominance.** Let $Az = \mu z$ with $z \ne 0$. Taking entrywise absolute values and using
the triangle inequality with $a_{ij} \gt 0$,
$$|\mu|\,|z| = |\mu z| = |Az| \le A|z|,$$
so $A|z| \ge |\mu|\,|z|$ with $|z| \ge 0$ nonzero; by the definition of $r$ this forces
$|\mu| \le r$. Suppose $|\mu| = r$. Then $A|z| \ge r|z|$, and by the maximality argument above this
inequality must be an *equality*, $A|z| = r|z|$, so $|z|$ is a Perron vector and hence $|z| \gt 0$.
Equality in the triangle inequality $\big|\sum_j a_{ij} z_j\big| = \sum_j a_{ij}|z_j|$ with all
$a_{ij} \gt 0$ and $|z_j| \gt 0$ forces every $z_j$ to share a common complex phase $e^{i\theta}$,
so $z = e^{i\theta}|z|$ and therefore $\mu = r$. Thus no eigenvalue other than $r$ has modulus $r$:
$|\mu| \lt r$ for all $\mu \ne r$.

**Simplicity (geometric).** Suppose $A y = r y$ for a real $y$ not proportional to $x^\star$. Since
$x^\star \gt 0$, choose the largest $t$ with $x^\star - t y \ge 0$; then $x^\star - t y$ is a
non-negative eigenvector for $r$ with at least one zero coordinate. But we proved every non-negative
eigenvector of $r$ is *strictly* positive unless zero, so $x^\star - t y = 0$, i.e. $y$ is a multiple
of $x^\star$ after all. Hence the $r$-eigenspace is one-dimensional. $\blacksquare$

### Worked Instance

**Resolve the Hook.** For $A = \begin{pmatrix} 2 & 1 \\ 1 & 3\end{pmatrix}$ the characteristic
polynomial is $\lambda^2 - 5\lambda + 5$, with roots $r = \tfrac{5+\sqrt5}{2} \approx 3.618$ and
$\tfrac{5-\sqrt5}{2} \approx 1.382$. The Perron root $r$ is real, positive, and strictly larger in
modulus, as promised. Its eigenvector solves $(2 - r)x_1 + x_2 = 0$, i.e. $x_2 = (r-2)x_1 =
\tfrac{\sqrt5 + 1}{2}\,x_1 \gt 0$ — a strictly positive Perron vector. The row sums are $3$ and $4$,
and indeed $3 \le r \approx 3.618 \le 4$. Iterating $A$ on any positive $x$ scales the Perron
component by $r$ and the other by $1.382 \lt r$, so after normalization $A^k x / \|A^k x\|$ tends to
the Perron direction $\big(1, \tfrac{\sqrt5+1}{2}\big)$ regardless of the positive start — exactly
the convergence the Hook described, and the mechanism behind Markov-chain stationary distributions
and PageRank.

### Pitfalls

- **Strict positivity is needed for the full theorem.** Merely $A \ge 0$ can fail strict dominance:
  the permutation matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has eigenvalues $\pm 1$, two of
  modulus $1$. Frobenius's version requires *irreducibility*, and strict dominance needs
  *primitivity* (some power is strictly positive).
- **Only the Perron root gets a positive eigenvector.** Other eigenvectors have mixed or complex
  signs; do not expect positivity from the smaller eigenvalues.
- **Simplicity is about the Perron root, not all eigenvalues.** A positive matrix can certainly have
  repeated *other* eigenvalues; it is $r$ specifically that is simple.
- **The bound uses row sums (or column sums), not entries.** $\min_i \sum_j a_{ij} \le r \le \max_i
  \sum_j a_{ij}$; a single large entry does not bound $r$.
- **Reducible non-negative matrices split.** If $A$ is block-triangular, the spectrum is the union
  of the blocks' spectra and a positive Perron vector may not exist — check irreducibility first.

:::
:::

## Connections

Prereq: eigenvalues and eigenvectors (`la-eigen`) — Perron–Frobenius is a statement about the
*dominant* eigenpair and why iteration selects it. It underlies the convergence of the power method,
the existence and uniqueness of stationary distributions for irreducible aperiodic Markov chains,
the Leslie model in population dynamics, Leontief input–output economics, and Google's PageRank.
Recognition trigger: a non-negative (transition, adjacency, or "growth") matrix where you need a
positive dominant eigenvector or long-run behaviour of $A^k$. A cornerstone of spectral graph theory
and applied linear algebra, and a source of clever olympiad problems about positive matrices.

## History

Oskar Perron established the positive-matrix case in 1907 while studying the convergence of matrix
powers arising in the theory of continued fractions and Jacobi's algorithm. Georg Frobenius, in a
series of papers culminating in 1912, extended the result to non-negative irreducible matrices,
introducing the notions of irreducibility and the cyclic (imprimitive) case that governs when
several eigenvalues share the maximal modulus — hence the joint name. The theorem lay somewhat
dormant until the mid-twentieth century, when it became indispensable: Wassily Leontief's
input–output economics, Andrei Kolmogorov's and others' theory of Markov chains, and Patrick
Leslie's 1945 population matrices all rest on a positive dominant eigenvalue and its positive
eigenvector. Its most famous modern appearance is the 1998 PageRank algorithm of Sergey Brin and
Larry Page, in which the ranking of web pages is precisely the Perron vector of a (perturbed)
stochastic matrix. The result endures because it explains, in one clean statement, why non-negative
iterative processes converge to a unique positive equilibrium.
