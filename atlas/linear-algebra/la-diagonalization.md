To compute $A^{100}$ for $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ you could multiply the matrix by itself ninety-nine times — or you could notice that in the *right basis* $A$ is just $\begin{pmatrix}3&0\\0&1\end{pmatrix}$, whose $100$-th power is $\begin{pmatrix}3^{100}&0\\0&1\end{pmatrix}$, read off in one line. When can a matrix be re-coordinatized into a diagonal one, and how do you tell?

## Discovery

Say $A$ is **diagonalizable** if $A = PDP^{-1}$ for some invertible $P$ and diagonal $D$.

1. Suppose $A=PDP^{-1}$ with $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$. Multiply $A P = P D$ and read it **column by column**. What does the $j$-th column equation $A\mathbf{p}_j = \lambda_j\mathbf{p}_j$ say about the columns of $P$?
2. So diagonalizability is equivalent to the existence of a certain kind of *basis*. Which kind? What must be true of the columns of $P$ for it to be invertible?
3. Now suppose $\lambda_1,\dots,\lambda_k$ are **distinct** eigenvalues with eigenvectors $\mathbf{v}_1,\dots,\mathbf{v}_k$. Are these eigenvectors automatically linearly independent? Try to prove it: take a dependence, hit it with $(A-\lambda_k I)$ to kill one term, and induct.
4. Feed this back: if an $n\times n$ matrix has $n$ *distinct* eigenvalues, is it diagonalizable?
5. Now the subtle case: repeated eigenvalues. Compare $\begin{pmatrix}2&0\\0&2\end{pmatrix}$ and $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ — both eigenvalue $2$ twice. Which has a full eigenbasis? Compute the minimal polynomial of each. What feature of $m_A$ seems to decide it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For $A\in M_n(\mathbb F)$ the following are equivalent:
1. $A$ is **diagonalizable**: $A = PDP^{-1}$ with $D$ diagonal;
2. $\mathbb F^n$ has a **basis of eigenvectors** of $A$ (an *eigenbasis*);
3. the sum of the eigenspace dimensions equals $n$: $\sum_\lambda \dim\ker(A-\lambda I) = n$;
4. the **minimal polynomial** $m_A$ **splits into distinct linear factors**: $m_A(t) = \prod_{i}(t-\lambda_i)$ with the $\lambda_i$ distinct (equivalently, $m_A$ has no repeated root and all its roots lie in $\mathbb F$).

**Sufficient (not necessary) condition:** if $A$ has $n$ *distinct* eigenvalues in $\mathbb F$, it is diagonalizable. When $A=PDP^{-1}$, the columns of $P$ are the eigenvectors and the diagonal entries of $D$ are the corresponding eigenvalues, and $A^k = PD^kP^{-1}$ makes powers (and $e^A$, etc.) trivial to compute.

### Proof

**(1) $\Leftrightarrow$ (2).** Write $A=PDP^{-1}$ iff $AP=PD$. Let $\mathbf p_j$ be the $j$-th column of $P$ and $\lambda_j = D_{jj}$. The $j$-th column of $AP$ is $A\mathbf p_j$; of $PD$ is $\lambda_j\mathbf p_j$. So $AP=PD \iff A\mathbf p_j=\lambda_j\mathbf p_j$ for all $j$, i.e. each column of $P$ is an eigenvector. $P$ is invertible iff its columns form a basis; and eigenvectors are nonzero, so $P$ invertible $\iff$ the columns are a basis of eigenvectors. Thus (1) holds iff such a basis exists — (2). (3) restates (2): a basis of eigenvectors is obtained by taking a basis of each eigenspace and concatenating; independence across eigenspaces (below) makes this a basis of $\mathbb F^n$ iff the dimensions sum to $n$.

**Distinct eigenvalues give independence.** *Claim:* eigenvectors $\mathbf v_1,\dots,\mathbf v_k$ for **distinct** eigenvalues $\lambda_1,\dots,\lambda_k$ are linearly independent. Induct on $k$; $k=1$ is clear ($\mathbf v_1\neq\mathbf 0$). Suppose $\sum_{i=1}^k c_i\mathbf v_i = \mathbf 0$. Apply $(A-\lambda_k I)$: since $(A-\lambda_k I)\mathbf v_i = (\lambda_i-\lambda_k)\mathbf v_i$ and the $\mathbf v_k$ term dies,
$$\sum_{i=1}^{k-1} c_i(\lambda_i - \lambda_k)\mathbf v_i = \mathbf 0.$$
By the inductive hypothesis $\mathbf v_1,\dots,\mathbf v_{k-1}$ are independent, so $c_i(\lambda_i-\lambda_k)=0$; as $\lambda_i\neq\lambda_k$, each $c_i=0$ for $i\lt k$. Back-substituting leaves $c_k\mathbf v_k=\mathbf 0$, so $c_k=0$. Hence all $c_i=0$: independent. In particular $n$ distinct eigenvalues give $n$ independent eigenvectors — an eigenbasis — so **distinct eigenvalues $\Rightarrow$ diagonalizable**.

**(4) $\Leftrightarrow$ diagonalizability.** *($\Leftarrow$)* If $A=PDP^{-1}$ with $D$ diagonal having distinct diagonal values $\mu_1,\dots,\mu_r$, then $\prod_j (D-\mu_j I) = 0$ (each diagonal slot is killed by exactly one factor), so $\prod_j(A-\mu_j I) = P\left[\prod_j(D-\mu_j I)\right]P^{-1} = 0$. Thus the squarefree polynomial $\prod_j(t-\mu_j)$ annihilates $A$, so $m_A$ divides it and is itself a product of distinct linear factors. *($\Rightarrow$)* Suppose $m_A(t)=\prod_{i=1}^r (t-\lambda_i)$ with distinct roots. The factors $t-\lambda_i$ are pairwise coprime, so by the Chinese Remainder decomposition of $\mathbb F[t]/(m_A)$ — concretely, partial fractions give polynomials $q_i(t)$ with $\sum_i q_i(t)\prod_{j\neq i}(t-\lambda_j) = 1$ — one shows $\mathbb F^n = \bigoplus_i \ker(A-\lambda_i I)$: for any $\mathbf x$, the vectors $\mathbf x_i := q_i(A)\prod_{j\ne i}(A-\lambda_i\ \text{omitted})\,\mathbf x$ lie in the respective eigenspaces and sum to $\mathbf x$, while $m_A(A)=0$ ensures $(A-\lambda_i I)$ annihilates the $i$-th piece. A basis pooled from the eigenspaces is then an eigenbasis, so $A$ is diagonalizable. $\blacksquare$

### Worked Instance

Diagonalize $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ and compute $A^{100}$. From the eigenvalue node, $\lambda=3$ with eigenvector $\begin{pmatrix}1\\1\end{pmatrix}$ and $\lambda=1$ with eigenvector $\begin{pmatrix}1\\-1\end{pmatrix}$. Two distinct eigenvalues $\Rightarrow$ diagonalizable. Set
$$P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\quad D=\begin{pmatrix}3&0\\0&1\end{pmatrix},\quad P^{-1}=\frac{1}{-2}\begin{pmatrix}-1&-1\\-1&1\end{pmatrix}=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$$
Then $A^{100} = P D^{100} P^{-1} = P\begin{pmatrix}3^{100}&0\\0&1\end{pmatrix}P^{-1} = \frac12\begin{pmatrix}3^{100}+1 & 3^{100}-1 \\ 3^{100}-1 & 3^{100}+1\end{pmatrix}.$ Ninety-nine matrix multiplications avoided.

Contrast $B=\begin{pmatrix}2&1\\0&2\end{pmatrix}$: its minimal polynomial is $(t-2)^2$ — a *repeated* root — so $B$ is **not** diagonalizable. Indeed $\ker(B-2I)$ is only one-dimensional (spanned by $\begin{pmatrix}1\\0\end{pmatrix}$), so no eigenbasis exists.

### Pitfalls

- **Repeated eigenvalues do not automatically block diagonalization.** $2I$ has eigenvalue $2$ twice and is diagonal already. The obstruction is a *deficient eigenspace* — equivalently, a repeated root of the **minimal** polynomial — not a repeated root of the characteristic polynomial.
- **Geometric vs. algebraic multiplicity.** Diagonalizability requires $\dim\ker(A-\lambda I)$ (geometric) to equal the multiplicity of $\lambda$ in $p_A$ (algebraic) for *every* eigenvalue. Geometric $\le$ algebraic always; equality everywhere is the condition.
- **Field matters.** $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ is not diagonalizable over $\mathbb R$ (no real eigenvalues) but *is* over $\mathbb C$. $m_A$ must split *in the field you allow*.
- **Distinct eigenvalues is sufficient, not necessary.** Don't conclude "repeated eigenvalue $\Rightarrow$ not diagonalizable."
- **Order the columns of $P$ and $D$ consistently.** The $j$-th diagonal entry of $D$ must be the eigenvalue of the $j$-th column of $P$; mismatching them gives a wrong (and usually non-commuting) decomposition.

:::
:::

## Connections

Prereqs: characteristic and minimal polynomials — the cleanest diagonalizability test is "$m_A$ has distinct roots, all in $\mathbb F$." Diagonalization is the payoff of the eigenvalue program: it turns matrix powers, exponentials, and linear recurrences into scalar computations, and the symmetric case ($A=A^{\mathsf T}\Rightarrow$ orthogonally diagonalizable) is the spectral theorem. Recognition trigger: any need to compute $A^k$, solve $\dot{\mathbf x}=A\mathbf x$, understand long-run dynamics of a linear map, or decouple a system into independent modes.
