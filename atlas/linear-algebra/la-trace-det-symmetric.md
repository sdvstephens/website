You can read two of a matrix's deepest invariants off its face without solving anything. For $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, add the diagonal: $2+2=4$. Multiply across via $ad-bc$: $4-1=3$. Its eigenvalues turned out to be $3$ and $1$ — and $3+1=4$, $3\cdot 1=3$. The trace and determinant are the eigenvalues in disguise. Always?

## Discovery

Let $A$ be $n\times n$ over an algebraically closed field, with eigenvalues $\lambda_1,\dots,\lambda_n$ (listed with multiplicity), so the characteristic polynomial factors as $p_A(\lambda)=\prod_{i=1}^n(\lambda-\lambda_i)$ (monic convention $\det(\lambda I - A)$).

1. Expand $\prod_{i=1}^n(\lambda-\lambda_i)$ and read off the coefficient of $\lambda^{n-1}$ and the constant term in terms of the $\lambda_i$. (These are elementary symmetric functions — Vieta.)
2. Separately, expand $p_A(\lambda)=\det(\lambda I - A)$ directly. What is the coefficient of $\lambda^{n-1}$ in terms of the *entries* of $A$? (Only one permutation in the Leibniz sum contributes to that power — which one?) What is the constant term $p_A(0)$ in terms of $A$?
3. Match the two expansions coefficient-by-coefficient. What do you learn about $\sum_i\lambda_i$ versus the diagonal of $A$? About $\prod_i\lambda_i$ versus $\det A$?
4. Push further with Newton's identities: the *power sums* $p_k=\sum_i\lambda_i^k$ are polynomials in the elementary symmetric functions. Meanwhile $\sum_i\lambda_i^k$ is the trace of *what* matrix? State the pattern relating $\operatorname{tr}(A^k)$ to the eigenvalues.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $A\in M_n(\mathbb F)$ have eigenvalues $\lambda_1,\dots,\lambda_n$ (with multiplicity, in an algebraic closure). Then
$$\boxed{\operatorname{tr}(A) = \sum_{i=1}^n \lambda_i}\qquad\text{and}\qquad \boxed{\det(A) = \prod_{i=1}^n \lambda_i}.$$
More generally, writing $p_A(\lambda)=\det(\lambda I-A)=\lambda^n - c_1\lambda^{n-1}+c_2\lambda^{n-2}-\cdots+(-1)^n c_n$, the coefficient $c_k = e_k(\lambda_1,\dots,\lambda_n)$ is the $k$-th **elementary symmetric function** of the eigenvalues (Vieta), and it also equals the sum of the $k\times k$ **principal minors** of $A$. The extremes are $c_1 = e_1 = \operatorname{tr}A$ and $c_n = e_n = \det A$. Combining with **Newton's identities**, the power sums $\operatorname{tr}(A^k)=\sum_i\lambda_i^k$ are recovered from the $c_j$ (and vice versa), so trace, determinant, and all $\operatorname{tr}(A^k)$ are symmetric functions of the spectrum.

### Proof

Work over an algebraic closure so $p_A$ splits: $p_A(\lambda)=\prod_{i=1}^n(\lambda-\lambda_i)$.

**Vieta side.** Expanding the product, the coefficient of $\lambda^{n-1}$ is $-\sum_i\lambda_i$ and the constant term ($\lambda=0$) is $\prod_i(-\lambda_i)=(-1)^n\prod_i\lambda_i$. In general the coefficient of $\lambda^{n-k}$ is $(-1)^k e_k(\lambda_1,\dots,\lambda_n)$.

**Matrix side.** Compute $p_A(\lambda)=\det(\lambda I - A)$ by the Leibniz formula. The entry in position $(i,j)$ of $\lambda I - A$ is $\lambda\delta_{ij}-a_{ij}$. A permutation $\sigma$ contributes $\operatorname{sgn}(\sigma)\prod_i(\lambda\delta_{\sigma(i),i}-a_{\sigma(i),i})$; a factor carries a $\lambda$ only when $\sigma(i)=i$. 
- *Coefficient of $\lambda^n$:* only $\sigma=\mathrm{id}$ can supply $n$ diagonal $\lambda$'s, giving $\prod_i\lambda = \lambda^n$. So $p_A$ is monic.
- *Coefficient of $\lambda^{n-1}$:* we need $n-1$ diagonal $\lambda$-factors and one non-$\lambda$ factor; but a permutation fixing $n-1$ points fixes all $n$ (there's no such thing as a single transposition of one element), so again only $\sigma=\mathrm{id}$ contributes. Choosing the non-$\lambda$ factor from the $j$-th diagonal slot gives $-a_{jj}$; summing over $j$, the coefficient of $\lambda^{n-1}$ is $-\sum_j a_{jj} = -\operatorname{tr}(A)$.
- *Constant term:* set $\lambda=0$: $p_A(0)=\det(-A)=(-1)^n\det A$.

**Match.** Equating coefficients of $\lambda^{n-1}$: $-\sum_i\lambda_i = -\operatorname{tr}A$, so $\operatorname{tr}A=\sum_i\lambda_i$. Equating constant terms: $(-1)^n\prod_i\lambda_i = (-1)^n\det A$, so $\det A = \prod_i\lambda_i$. The intermediate coefficients match $(-1)^k e_k$ on both sides; on the matrix side a finer Leibniz bookkeeping identifies $e_k$ with the sum of $k\times k$ principal minors (each choice of $k$ "non-$\lambda$" rows/columns that forms a sub-permutation yields a principal minor).

**Power sums.** Over the closure, put $A$ in upper-triangular form $T=U^{-1}AU$ (Schur / any flag), which has the $\lambda_i$ on its diagonal. Then $A^k = U T^k U^{-1}$ and $T^k$ is upper-triangular with diagonal $\lambda_i^k$; since trace is similarity-invariant ($\operatorname{tr}(U T^k U^{-1})=\operatorname{tr}(T^k U^{-1}U)=\operatorname{tr}(T^k)$ by the cyclic property $\operatorname{tr}(XY)=\operatorname{tr}(YX)$), we get $\operatorname{tr}(A^k)=\sum_i\lambda_i^k$. Newton's identities then convert freely between these power sums and the elementary symmetric functions $c_j$. $\blacksquare$

### Worked Instance

Let $A=\begin{pmatrix}1&2&0\\0&3&0\\2&-4&5\end{pmatrix}$. Read $\operatorname{tr}A = 1+3+5 = 9$. This matrix is block/triangular-ish; its eigenvalues are the diagonal entries $1,3,5$ (it is triangular after noting column $3$: actually expand $\det(\lambda I-A)$ — the third column of $A$ is $(0,0,5)^{\mathsf T}$, so $\lambda=5$ splits off and the top-left $2\times2$ block $\begin{pmatrix}1&2\\0&3\end{pmatrix}$ gives $\lambda=1,3$). Check the identities: $\sum\lambda_i = 1+3+5=9=\operatorname{tr}A$. And $\prod\lambda_i = 1\cdot 3\cdot 5 = 15$; independently $\det A = 5\cdot\det\begin{pmatrix}1&2\\0&3\end{pmatrix}=5\cdot 3 = 15$. Both boxed identities confirmed. As a bonus, $\operatorname{tr}(A^2)$ should be $1^2+3^2+5^2 = 35$; the top-left of $A^2$ is $1$, the middle $9$, the bottom-right $25$, summing to $35$.

### Pitfalls

- **Count eigenvalues with multiplicity.** $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ has trace $4=2+2$ and $\det 4=2\cdot 2$ — the eigenvalue $2$ counts *twice*, even though there's only one eigenvector direction.
- **Work in an algebraic closure.** Over $\mathbb R$ a rotation has trace and determinant that are still sums/products of its *complex* eigenvalues; e.g. $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ has $\operatorname{tr}=0=i+(-i)$ and $\det=1=i\cdot(-i)$. The identities need the (complex) eigenvalues.
- **Sign conventions in $p_A$.** With $\det(\lambda I-A)$ the $\lambda^{n-1}$ coefficient is $-\operatorname{tr}A$; with $\det(A-\lambda I)$ it flips. Track which convention you use.
- **$\operatorname{tr}(AB)\neq\operatorname{tr}(A)\operatorname{tr}(B)$** and $\det(A+B)\neq\det A+\det B$. The good identities are $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ and $\det(AB)=\det A\det B$.
- **Trace and determinant are similarity-invariant**, which is *why* they depend only on eigenvalues — but individual entries are not.

:::
:::

## Connections

Prereqs: eigenvalues (the objects being summed/multiplied) and Newton's identities (the bridge from power sums $\operatorname{tr}(A^k)$ to symmetric functions). This node explains *why* trace and determinant — computable directly from entries — are genuine spectral invariants, and why they are invariant under change of basis. It feeds the study of matrix invariants, characteristic-polynomial coefficients as principal-minor sums, and eigenvalue estimation. Recognition trigger: whenever a problem gives you $\operatorname{tr}A$, $\det A$, or several $\operatorname{tr}(A^k)$ and asks about the eigenvalues (or vice versa), convert between them as symmetric functions.
