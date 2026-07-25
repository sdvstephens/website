Two extreme kinds of matrix: one that does *nothing new* when repeated ($P^2 = P$), and one that *self-destructs* when repeated ($N^k = 0$). The first is a projection; the second is "eventually zero." Their eigenvalues are forced into astonishingly rigid shapes — a projection can only stretch by $0$ or $1$, and a nilpotent has *no* stretch at all. And for a projection, the trace secretly counts a dimension.

## Discovery

**Idempotent:** $P^2 = P$. **Nilpotent:** $N^k = 0$ for some $k\ge 1$.

1. Let $\lambda$ be an eigenvalue of $P$ with eigenvector $\mathbf v$: $P\mathbf v = \lambda\mathbf v$. Apply $P$ again and use $P^2 = P$. What polynomial equation must $\lambda$ satisfy? What are its only possible values?
2. Do the same for a nilpotent $N$ with $N^k = 0$: from $N\mathbf v = \mu\mathbf v$, apply $N$ repeatedly. What equation does $\mu$ satisfy, and what does that force?
3. For the idempotent, consider $\ker P$ and $\ker(P - I) = \operatorname{im}P$. Show every vector splits as $\mathbf x = P\mathbf x + (\mathbf x - P\mathbf x)$, and identify which piece lies in which subspace. What does this say about the whole space as a direct sum?
4. Trace is the sum of eigenvalues (with multiplicity). For a *diagonalizable* $P$ (which idempotents turn out to be), the eigenvalues are only $0$s and $1$s. So $\operatorname{tr}(P)$ counts what?
5. For nilpotent $N$: from step 2, all eigenvalues are $0$. What must $\operatorname{tr}(N)$, $\det(N)$, and the characteristic polynomial be? Can a nonzero matrix have *all* eigenvalues $0$? (Find a small example.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $A\in M_n(\mathbb F)$.

**Idempotent** ($P^2 = P$):
- Every eigenvalue is $0$ or $1$; $P$ is **diagonalizable** (its minimal polynomial divides $t^2 - t = t(t-1)$, a product of distinct linear factors).
- $\mathbb F^n = \ker P \oplus \operatorname{im}P$, and $P$ is precisely the projection onto $\operatorname{im}P$ along $\ker P$.
- $\operatorname{rank}(P) = \operatorname{tr}(P) = \dim(\operatorname{im}P)$ (the number of eigenvalue-$1$'s); $\det P \in \{0,1\}$, equal to $1$ iff $P = I$.

**Nilpotent** ($N^k = 0$):
- Every eigenvalue is $0$; hence $\operatorname{tr}(N) = 0$, $\det(N) = 0$, and the characteristic polynomial is $p_N(\lambda) = \lambda^n$. By Cayley–Hamilton, $N^n = 0$ (nilpotency index $\le n$).
- $N$ is **not** diagonalizable unless $N = 0$ (its minimal polynomial is $t^m$ with a *repeated* root for $m\ge 2$). A nonzero nilpotent has all eigenvalues $0$ yet is not the zero matrix — the classic example that eigenvalues alone don't determine a matrix.

The only matrix that is *both* idempotent and nilpotent is $0$.

### Proof

**Idempotent eigenvalues.** Let $P\mathbf v = \lambda\mathbf v$, $\mathbf v\neq\mathbf 0$. Then $\lambda\mathbf v = P\mathbf v = P^2\mathbf v = P(\lambda\mathbf v) = \lambda P\mathbf v = \lambda^2\mathbf v$. So $(\lambda^2 - \lambda)\mathbf v = \mathbf 0$, and $\mathbf v\neq\mathbf 0$ forces $\lambda^2 = \lambda$, i.e. $\lambda\in\{0,1\}$.

**Idempotent diagonalizable & direct sum.** The polynomial $t^2 - t = t(t-1)$ annihilates $P$ (it *is* the statement $P^2 = P$), so the minimal polynomial $m_P \mid t(t-1)$, a product of *distinct* linear factors; by the diagonalizability criterion $P$ is diagonalizable. Concretely, for any $\mathbf x$ write $\mathbf x = P\mathbf x + (\mathbf x - P\mathbf x)$. The first piece lies in $\operatorname{im}P$; and $P(\mathbf x - P\mathbf x) = P\mathbf x - P^2\mathbf x = P\mathbf x - P\mathbf x = \mathbf 0$, so the second piece lies in $\ker P$. Thus $\mathbb F^n = \operatorname{im}P + \ker P$. The sum is direct: if $\mathbf y \in \operatorname{im}P\cap\ker P$, then $\mathbf y = P\mathbf z$ for some $\mathbf z$ and $P\mathbf y = \mathbf 0$; but $P\mathbf y = P^2\mathbf z = P\mathbf z = \mathbf y$, so $\mathbf y = \mathbf 0$. Hence $\mathbb F^n = \ker P\oplus\operatorname{im}P$ and $P$ fixes $\operatorname{im}P$ pointwise (for $\mathbf y=P\mathbf z$, $P\mathbf y=\mathbf y$) while killing $\ker P$ — the definition of the projection onto $\operatorname{im}P$ along $\ker P$.

**Rank $=$ trace for idempotents.** Being diagonalizable with eigenvalues in $\{0,1\}$, in an eigenbasis $P$ is $\operatorname{diag}(1,\dots,1,0,\dots,0)$ with exactly $r := \dim(\operatorname{im}P)$ ones. Then $\operatorname{rank}(P)=r$, and $\operatorname{tr}(P) = \sum\lambda_i = r$ (trace is basis-independent), so $\operatorname{rank}(P)=\operatorname{tr}(P)$. Since eigenvalues are $0/1$, $\det P = \prod\lambda_i$ is $1$ iff all are $1$ iff $P=I$, else $0$.

**Nilpotent eigenvalues.** Let $N\mathbf v = \mu\mathbf v$, $\mathbf v\neq\mathbf 0$. Then $N^k\mathbf v = \mu^k\mathbf v$ by induction ($N^{j+1}\mathbf v = N(\mu^j\mathbf v)=\mu^j N\mathbf v = \mu^{j+1}\mathbf v$). Since $N^k = 0$, $\mathbf 0 = N^k\mathbf v = \mu^k\mathbf v$, and $\mathbf v\neq\mathbf 0$ forces $\mu^k = 0$, hence $\mu = 0$. So $0$ is the only eigenvalue; over an algebraic closure the characteristic polynomial (which factors as $\prod(\lambda-\mu_i)$) is $\lambda^n$. Therefore $\operatorname{tr}(N)=\sum\mu_i = 0$ and $\det(N)=\prod\mu_i = 0$. Cayley–Hamilton gives $N^n = p_N(N)=0$, so the nilpotency index is at most $n$.

**Nilpotent not diagonalizable unless $0$.** If $N$ were diagonalizable with all eigenvalues $0$, then $N = P\,\mathbf 0\,P^{-1} = 0$. So any *nonzero* nilpotent fails to diagonalize; its minimal polynomial is $t^m$ ($m\ge 2$), a repeated root. The matrix $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ satisfies $N^2 = 0$, $N\neq 0$, with both eigenvalues $0$ — a nonzero matrix whose entire spectrum is $\{0\}$.

**Both $\Rightarrow$ zero.** If $P^2=P$ and $P^k=0$, then $P = P^2 = \cdots = P^k = 0$ (idempotence lets us raise the exponent freely). $\blacksquare$

### Worked Instance

Let $P = \dfrac{1}{5}\begin{pmatrix}1 & 2 \\ 2 & 4\end{pmatrix}$. Check idempotence: $P^2 = \dfrac{1}{25}\begin{pmatrix}1&2\\2&4\end{pmatrix}\begin{pmatrix}1&2\\2&4\end{pmatrix} = \dfrac{1}{25}\begin{pmatrix}5&10\\10&20\end{pmatrix} = \dfrac15\begin{pmatrix}1&2\\2&4\end{pmatrix} = P$. So $P$ is idempotent — it is the orthogonal projection onto the line spanned by $\begin{pmatrix}1\\2\end{pmatrix}$. Its eigenvalues must be $0$ and $1$; indeed $\operatorname{tr}(P) = \tfrac{1+4}{5} = 1$, which by "rank $=$ trace" says $\operatorname{rank}(P) = 1$ (a projection onto a line). And $\det P = \tfrac{1}{25}(4 - 4) = 0$, consistent with an eigenvalue $0$ present.

Now the nilpotent $N = \begin{pmatrix}0&3\\0&0\end{pmatrix}$: $N^2 = 0$, so $N$ is nilpotent. Its eigenvalues are both $0$: $\operatorname{tr}N = 0$, $\det N = 0$, $p_N(\lambda)=\lambda^2$. Yet $N\neq 0$ — eigenvalues alone would "predict" the zero matrix, and they'd be wrong. $N$ is not diagonalizable (a single Jordan block).

### Pitfalls

- **All eigenvalues $0$ does NOT imply the matrix is $0$.** The whole content of nilpotency is the gap between "spectrum is $\{0\}$" and "matrix is $0$." Only *diagonalizable* + all-zero-eigenvalues forces $0$.
- **"Rank $=$ trace" is special to idempotents.** For a general matrix trace and rank are unrelated; it holds for $P$ only because the eigenvalues are exactly $0$s and $1$s.
- **Idempotent $\neq$ orthogonal projection.** $P^2=P$ gives a projection *along* $\ker P$, which need not be orthogonal to $\operatorname{im}P$ unless additionally $P = P^{\mathsf T}$. "Projection" alone means only idempotent.
- **Nilpotency index vs. size.** $N^k=0$ for *some* $k$; the least such $k$ (the index) can be anywhere from $1$ (only $N=0$) up to $n$. Cayley–Hamilton bounds it by $n$, not necessarily equal to $n$.
- Over a field of characteristic $p$, "$\operatorname{tr}=\operatorname{rank}$" for idempotents must be read mod $p$ (the count of $1$-eigenvalues reduced mod $p$).

:::
:::

## Connections

Prereqs: eigenvalues (the eigenvalue equation is the whole engine). Idempotents are the algebraic face of **direct-sum decompositions** and projections (feeding spectral theory and least-squares); nilpotents are the "non-semisimple" part of the **Jordan decomposition** ($A = D + N$ with $D$ diagonalizable, $N$ nilpotent, commuting). The trace/eigenvalue links here are instances of the general "trace $=$ sum of eigenvalues" identity. Recognition trigger: seeing $A^2 = A$ (reach for "eigenvalues $0/1$, trace $=$ rank, it's a projection"), or $A^k = 0$ (reach for "all eigenvalues $0$, but the matrix isn't zero").
