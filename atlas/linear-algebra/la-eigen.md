Apply the matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2\end{pmatrix}$ to the vector $\begin{pmatrix}1\\1\end{pmatrix}$: you get $\begin{pmatrix}3\\3\end{pmatrix}$ — the same direction, stretched by $3$. Apply it to $\begin{pmatrix}1\\-1\end{pmatrix}$: you get $\begin{pmatrix}1\\-1\end{pmatrix}$, untouched. Most vectors get rotated; a special few only get *scaled*. Which vectors, and by how much?

## Discovery

Fix a square matrix $A$. Call a nonzero vector $\mathbf{v}$ **special** if $A\mathbf{v}$ points along $\mathbf{v}$ — that is, $A\mathbf{v} = \lambda\mathbf{v}$ for some scalar $\lambda$.

1. Rewrite $A\mathbf{v} = \lambda\mathbf{v}$ with everything on one side, as a single matrix acting on $\mathbf{v}$ giving $\mathbf{0}$. (You'll need to write $\lambda\mathbf{v}$ as a matrix times $\mathbf{v}$.)
2. You now have $(A - \lambda I)\mathbf{v} = \mathbf{0}$ with $\mathbf{v}\neq\mathbf{0}$. A square matrix $M$ sends some *nonzero* vector to $\mathbf{0}$ exactly when $M$ fails to be invertible. What scalar quantity of $M$ detects non-invertibility?
3. So the values of $\lambda$ that admit a special $\mathbf{v}$ are exactly the roots of a certain equation in $\lambda$. Write that equation for the $2\times 2$ matrix of the Hook. What kind of expression in $\lambda$ is its left side?
4. Solve it: find the two values of $\lambda$. For each, go back to $(A-\lambda I)\mathbf{v}=\mathbf{0}$ and find the special directions.
5. Look at your two $\lambda$'s. Add them — compare to $2+2$ (the diagonal of $A$). Multiply them — compare to $\det A$. Conjecture a pattern.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $A$ be an $n\times n$ matrix over a field $\mathbb{F}$. A scalar $\lambda\in\mathbb{F}$ is an **eigenvalue** of $A$ if there is a nonzero vector $\mathbf{v}$ (an **eigenvector**) with
$$A\mathbf{v} = \lambda\mathbf{v}.$$
Equivalently $(A-\lambda I)\mathbf{v}=\mathbf{0}$ has a nonzero solution, which happens **iff**
$$\det(A - \lambda I) = 0.$$
This is the **characteristic equation**; its left side $p_A(\lambda)=\det(A-\lambda I)$ is the **characteristic polynomial**, a degree-$n$ polynomial in $\lambda$ whose roots are exactly the eigenvalues. For each eigenvalue $\lambda$, the eigenvectors together with $\mathbf{0}$ form the **eigenspace** $\ker(A-\lambda I)$, a subspace. Over an algebraically closed field (e.g. $\mathbb{C}$) an $n\times n$ matrix always has $n$ eigenvalues counted with multiplicity; over $\mathbb{R}$ some may be absent (a rotation has none real).

### Proof

We prove the equivalence "$\lambda$ is an eigenvalue $\iff \det(A-\lambda I)=0$," and that $p_A$ is a degree-$n$ polynomial.

$\lambda$ is an eigenvalue iff there exists $\mathbf{v}\neq\mathbf{0}$ with $A\mathbf{v}=\lambda\mathbf{v}$. Since $\lambda\mathbf{v} = (\lambda I)\mathbf{v}$, this rearranges to $(A-\lambda I)\mathbf{v}=\mathbf{0}$. So $\lambda$ is an eigenvalue iff the matrix $M:=A-\lambda I$ has a nonzero vector in its kernel, i.e. $\ker M \neq \{\mathbf{0}\}$.

Now, a square matrix $M$ is invertible iff $\ker M = \{\mathbf{0}\}$: if $M$ is invertible then $M\mathbf{v}=\mathbf{0}\Rightarrow \mathbf{v}=M^{-1}\mathbf{0}=\mathbf{0}$; conversely if $\ker M=\{\mathbf{0}\}$ then $M$ is injective, and an injective linear map on a finite-dimensional space of equal dimensions is surjective (Gaussian elimination: a full set of pivots), hence invertible. And from the determinant node, $M$ is invertible iff $\det M\neq 0$ (since $\det M\cdot\det M^{-1}=\det I=1$ forces $\det M\neq 0$ when invertible; and $\det M = 0$ means a zero pivot appears in reduction, so a column has no pivot, giving a nonzero kernel vector). Chaining: $\lambda$ is an eigenvalue $\iff \ker(A-\lambda I)\neq\{\mathbf{0}\} \iff A-\lambda I$ not invertible $\iff \det(A-\lambda I)=0$.

**$p_A$ has degree $n$.** By the Leibniz formula, $\det(A-\lambda I)=\sum_{\sigma}\operatorname{sgn}(\sigma)\prod_i (A-\lambda I)_{\sigma(i),i}$. Each factor is a polynomial in $\lambda$ of degree $0$ or $1$ (degree $1$ only on the diagonal, where the entry is $a_{ii}-\lambda$). The identity permutation contributes $\prod_i(a_{ii}-\lambda)$, a degree-$n$ polynomial with leading term $(-\lambda)^n=(-1)^n\lambda^n$; every other permutation misses at least two diagonal entries, contributing degree $\le n-2$. Hence $p_A(\lambda)=(-1)^n\lambda^n + \text{(lower order)}$ is a genuine degree-$n$ polynomial. Its roots in $\mathbb{F}$ are exactly the eigenvalues. $\blacksquare$

### Worked Instance

For the Hook's $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$,
$$p_A(\lambda)=\det\begin{pmatrix}2-\lambda & 1\\ 1 & 2-\lambda\end{pmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3).$$
Eigenvalues $\lambda = 3$ and $\lambda = 1$. For $\lambda=3$: $(A-3I)=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$, whose kernel is spanned by $\begin{pmatrix}1\\1\end{pmatrix}$ — matching "$A\binom{1}{1}=\binom{3}{3}$." For $\lambda=1$: $(A-I)=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, kernel spanned by $\begin{pmatrix}1\\-1\end{pmatrix}$ — the untouched direction. And indeed $3+1 = 4 = 2+2$ (the diagonal sum) while $3\cdot 1 = 3 = \det A$: the conjecture from the Discovery holds.

### Pitfalls

- **Eigenvectors are nonzero by definition.** $\mathbf{0}$ satisfies $A\mathbf{0}=\lambda\mathbf{0}$ for every $\lambda$, so allowing it would make every scalar an "eigenvalue." Exclude it.
- **$\lambda = 0$ is allowed** as an eigenvalue (it means $A$ has nontrivial kernel, i.e. $A$ is singular). Don't confuse "eigenvalue $0$" (fine) with "eigenvector $\mathbf{0}$" (forbidden).
- **Real matrices can lack real eigenvalues.** $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ (a $90°$ rotation) has $p(\lambda)=\lambda^2+1$, no real roots. Eigenvalues live in the field you allow.
- **Sign of the characteristic polynomial.** $\det(A-\lambda I)$ has leading coefficient $(-1)^n$; some authors use $\det(\lambda I - A)$ to make it monic. Fix a convention and stick to it.
- The eigenspace is $\ker(A-\lambda I)$ — a whole subspace, possibly of dimension $\gt 1$; don't assume each eigenvalue gives just one eigenvector direction.

:::
:::

## Connections

Prereqs: determinants (the characteristic equation *is* a determinant condition) and, underneath, Gaussian elimination (to find the eigenspaces $\ker(A-\lambda I)$). Eigenvalues unlock the **characteristic and minimal polynomials**, **diagonalization** (does a basis of eigenvectors exist?), the **trace/det = sum/product of eigenvalues** identities, and the spectral facts about **idempotent and nilpotent** matrices. Recognition trigger: any question about "invariant directions," repeated application of a matrix ($A^k\mathbf{v}$), long-run behavior of a linear recurrence or Markov process, or "when does $A\mathbf{v}$ stay parallel to $\mathbf{v}$" is an eigenvalue question.
