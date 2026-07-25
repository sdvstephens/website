Take any square matrix, compute its characteristic polynomial $p(\lambda)$, then *substitute the matrix itself* for $\lambda$. The astonishing claim is that you always get the zero matrix — $p(A)=0$. For $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$, $p(\lambda)=\lambda^2-5\lambda-2$, and indeed $A^2-5A-2I=0$. It looks like you could "prove" it by writing $p(A)=\det(A-A\cdot I)=\det(0)=0$ — and that argument is completely wrong. Why is the theorem true, and why is the one-line "proof" nonsense?

## Discovery

Fix $A\in M_n(\mathbb F)$ and its characteristic polynomial $p(\lambda)=\det(\lambda I - A)$.

1. Recall the **adjugate** (classical adjoint) identity for *any* square matrix $M$: $M\cdot\operatorname{adj}(M) = \det(M)\, I$. Apply this with $M = \lambda I - A$, treating $\lambda$ as a formal variable. Write down what you get on both sides.
2. The right side is $p(\lambda)\, I$. Each entry of $\operatorname{adj}(\lambda I - A)$ is a cofactor — a determinant of an $(n-1)\times(n-1)$ matrix whose entries are linear in $\lambda$. So each entry is a polynomial in $\lambda$ of degree $\le n-1$. Collect powers of $\lambda$: write $\operatorname{adj}(\lambda I - A) = \sum_{k=0}^{n-1}\lambda^k B_k$ where each $B_k$ is a *constant matrix* (independent of $\lambda$).
3. Expand the identity $(\lambda I - A)\sum_k \lambda^k B_k = p(\lambda) I$ and match coefficients of each power $\lambda^k$ on both sides. You get a system of matrix equations relating the $B_k$, $A$, and the coefficients of $p$.
4. Now here is the engine: multiply the equation for the $\lambda^k$ coefficient on the left by $A^k$, and **sum over $k$**. Watch what telescopes. What is the left-hand total? What is the right-hand total?
5. Separately, ask yourself: in the "fake proof" $p(A) = \det(A - A) = 0$, what *type* of object is $\det(\lambda I - A)$ — a scalar polynomial or a matrix? When you set $\lambda = A$, are you even substituting into a legal expression? Pinpoint the category error.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Cayley–Hamilton Theorem.** Every square matrix satisfies its own characteristic polynomial: if $A\in M_n(\mathbb F)$ and $p(\lambda) = \det(\lambda I - A)$, then
$$p(A) = 0 \quad(\text{the } n\times n \text{ zero matrix}).$$
Equivalently, the minimal polynomial $m_A$ divides $p_A$ (so $\deg m_A \le n$), and $A^n$ is expressible as a linear combination of $I, A, \dots, A^{n-1}$. It holds over **any** commutative ring, not just fields.

**Warning (elaborated in Pitfalls):** the "proof" $p(A) = \det(A - A\cdot I) = \det(0) = 0$ is *fallacious*. It confuses a scalar-valued polynomial with a matrix substitution and would "prove" the false statement $p(A) = 0\cdot I$ by an illegal step.

### Proof

We use the **adjugate identity**. For any square matrix $M$ over a commutative ring, $M\cdot\operatorname{adj}(M) = \det(M)\,I$, where $\operatorname{adj}(M)_{ij} = (-1)^{i+j}\det(M_{\hat j\hat i})$ is the transpose of the cofactor matrix. (This is Cramer's rule in matrix form; each entry of $\operatorname{adj}$ is a minor of $M$.)

Apply it to $M = \lambda I - A$, where we treat $\lambda$ as an indeterminate, i.e. we work in the ring $M_n(\mathbb F[\lambda])$ of matrices with polynomial entries — equivalently $M_n(\mathbb F)[\lambda]$, polynomials in $\lambda$ with matrix coefficients. The two rings are the same object, and that identification is the crux. Then
$$(\lambda I - A)\cdot \operatorname{adj}(\lambda I - A) = \det(\lambda I - A)\, I = p(\lambda)\, I. \tag{$\ast$}$$

Each entry of $\operatorname{adj}(\lambda I - A)$ is a cofactor: a determinant of an $(n-1)\times(n-1)$ submatrix of $\lambda I - A$, whose entries are affine in $\lambda$; hence each entry is a polynomial in $\lambda$ of degree $\le n-1$. Collecting by powers of $\lambda$,
$$\operatorname{adj}(\lambda I - A) = B_{n-1}\lambda^{n-1} + B_{n-2}\lambda^{n-2} + \cdots + B_1\lambda + B_0,\qquad B_k\in M_n(\mathbb F).$$
Write $p(\lambda) = \lambda^n + c_{n-1}\lambda^{n-1} + \cdots + c_1\lambda + c_0$ (monic). Substitute both expansions into $(\ast)$ and expand the left side:
$$(\lambda I - A)\sum_{k=0}^{n-1}\lambda^k B_k = \sum_{k=0}^{n-1}\lambda^{k+1} B_k - \sum_{k=0}^{n-1}\lambda^k A B_k.$$
Now **equate coefficients of each power of $\lambda$** in $M_n(\mathbb F)[\lambda]$ (two matrix polynomials are equal iff their matrix coefficients agree at each degree):
$$
\begin{aligned}
\lambda^n:&\quad B_{n-1} = I,\\
\lambda^k\ (1\le k\le n-1):&\quad B_{k-1} - A B_k = c_k I,\\
\lambda^0:&\quad -A B_0 = c_0 I.
\end{aligned}
$$
Here is the telescoping trick. Multiply the $\lambda^k$-equation **on the left by $A^k$** (this is legal: $A^k$ commutes with itself and we multiply constant matrices), then sum all equations for $k=0,\dots,n$:
$$
\underbrace{A^n B_{n-1}}_{k=n} + \sum_{k=1}^{n-1} A^k(B_{k-1}-AB_k) + \underbrace{(-A^0 A B_0)}_{k=0} = A^n(I) + \sum_{k=1}^{n-1} A^k c_k I + c_0 I.
$$
The right-hand side is exactly $A^n + c_{n-1}A^{n-1}+\cdots+c_1 A + c_0 I = p(A)$.

The left-hand side telescopes. Its terms are $A^n B_{n-1}$, and for each $k$ from $1$ to $n-1$ a pair $A^k B_{k-1} - A^{k+1}B_k$, and finally $-A B_0$. Regroup by the index of $B$: the coefficient of $B_j$ (for each $j=0,\dots,n-1$) receives $+A^{j+1}B_j$ (from the $\lambda^{j+1}$-equation, present as the $A^{k}(-AB_k)$ term at $k=j+1$... ) and $-A^{j+1}B_j$ (from the $\lambda^j$-equation's $A^j B_j$ contribution shifted) — concretely, writing the sum out,
$$A^n B_{n-1} + \sum_{k=1}^{n-1}\big(A^k B_{k-1} - A^{k+1}B_k\big) - A B_0 = 0,$$
because every $A^{k+1}B_k$ produced at level $k$ is cancelled by the $A^{k+1}B_k$ appearing (with opposite sign) at level $k+1$; the boundary terms $A^n B_{n-1}$ (top) and $-AB_0$ (bottom) are themselves cancelled by the $k=n-1$ and $k=1$ neighbors respectively. Every term cancels, so the left side is the zero matrix.

Therefore $p(A) = 0$. $\blacksquare$

*(Alternative proof, sketched: diagonalizable matrices satisfy $p(A)=0$ immediately, since $p(A)=P\,p(D)\,P^{-1}$ and $p(D)$ is diagonal with entries $p(\lambda_i)=0$. Over $\mathbb C$ the diagonalizable matrices are dense and $A\mapsto p_A(A)$ is continuous, so $p(A)=0$ for all $A$; a polynomial-identity / Zariski-density argument extends this to any field. The adjugate proof above avoids topology and works over any commutative ring.)*

### Worked Instance

$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$. Characteristic polynomial: $p(\lambda)=\det(\lambda I - A)=(\lambda-1)(\lambda-4)-(-2)(-3)=\lambda^2-5\lambda+4-6=\lambda^2-5\lambda-2$. Cayley–Hamilton predicts $A^2 - 5A - 2I = 0$. Check:
$$A^2 = \begin{pmatrix}1&2\\3&4\end{pmatrix}^2 = \begin{pmatrix}7&10\\15&22\end{pmatrix},\quad 5A = \begin{pmatrix}5&10\\15&20\end{pmatrix},\quad 2I=\begin{pmatrix}2&0\\0&2\end{pmatrix}.$$
Then $A^2 - 5A - 2I = \begin{pmatrix}7-5-2 & 10-10-0 \\ 15-15-0 & 22-20-2\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}.$ Confirmed. This also gives $A^{-1}$ for free: from $A^2-5A-2I=0$, $A(A-5I)=2I$, so $A^{-1}=\tfrac12(A-5I) = \tfrac12\begin{pmatrix}-4&2\\3&-1\end{pmatrix}$, and every high power $A^k$ reduces to a linear combination of $A$ and $I$.

### Pitfalls

- **The fatal fallacy.** "$p(A) = \det(A - A\cdot I) = \det(0) = 0$" is *wrong*. First, $p(\lambda)=\det(\lambda I - A)$ is a **scalar** polynomial; $p(A)$ means substituting the matrix $A$ into that scalar polynomial, producing a **matrix** — it is *not* "$\det$ of something." Second, the manipulation illegally sets the variable $\lambda$ (a scalar slot) equal to the matrix $A$ *before* the determinant is expanded; you cannot substitute a matrix into the $\lambda I$ term as if $\lambda$ and the entries were interchangeable. The step would even "prove" $p(A) = 0\cdot I$ where $0$ is a scalar, category-mismatched with the intended matrix identity. The theorem is true, but *only* honest proofs (adjugate, or density) establish it.
- **$p(\lambda)=\det(\lambda I - A)$ vs $\det(A-\lambda I)$.** Sign conventions differ by $(-1)^n$; the *substituted* identity $p(A)=0$ is unaffected (the zero matrix has no sign), but the coefficients $c_k$ do flip. Be consistent.
- **Cayley–Hamilton does not say $m_A = p_A$.** It says $m_A \mid p_A$. The minimal polynomial can have strictly smaller degree (e.g. $A=I$ has $m_A=t-1$ but $p_A=(t-1)^n$).
- **Order matters in noncommutative rings**, but here all the matrices multiplied ($A^k$ and the constant $B_j$) are powers of $A$ times constants — the proof carefully keeps $A^k$ on the *left*; do not reorder factors carelessly.

:::
:::

## Connections

Prereqs: characteristic and minimal polynomials — Cayley–Hamilton is the theorem that $p_A$ *annihilates* $A$, hence $m_A\mid p_A$. It powers the computation of matrix inverses and high powers as low-degree polynomials in $A$ (crucial for matrix exponentials, linear recurrences, and control theory), and it is a key input to the structure theory (rational/Jordan form). Recognition trigger: whenever you must reduce $A^n$ or $A^{-1}$ to combinations of lower powers, or bound the degree of a polynomial identity a matrix satisfies, invoke Cayley–Hamilton — and never via the fake determinant substitution.
