The matrices $\begin{pmatrix}2&0\\0&2\end{pmatrix}$ and $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ have the *same* eigenvalue $2$ (twice) and the *same* characteristic polynomial $(\lambda-2)^2$. Yet one is a harmless scalar and the other is not: the first satisfies $A-2I=0$, while the second only satisfies $(A-2I)^2=0$. There is a *second* polynomial, finer than the characteristic one, that tells these apart.

## Discovery

For a square matrix $A$, consider polynomials $q(t)$ with the property that $q(A)=0$ (the zero matrix) — call these **annihilating** $A$.

1. The characteristic polynomial $p_A(\lambda)=\det(A-\lambda I)$ has degree $n$. Grant, for now, that $p_A(A)=0$ (this is a theorem you'll prove later). So *at least one* annihilating polynomial exists. Among all nonzero annihilating polynomials, is there one of *least degree*? Argue there is.
2. Take two monic annihilating polynomials $q_1, q_2$ of least degree. Look at $q_1 - q_2$: what is its degree, and does it annihilate $A$? What does minimality force?
3. So the least-degree monic annihilator is *unique* — call it $m_A(t)$. Now take *any* annihilating $q$. Divide $q$ by $m_A$ with remainder: $q = m_A\cdot s + r$ with $\deg r \lt \deg m_A$. Evaluate at $A$. What must $r$ be?
4. Consequence: $m_A$ **divides** every annihilating polynomial. In particular it divides $p_A$. Where do the *roots* of $m_A$ sit relative to the eigenvalues? (Take an eigenvector and feed it through $m_A(A)$.)
5. Test on the Hook's two matrices: compute $A-2I$ and $(A-2I)^2$ for each. Which polynomial is the *least-degree* annihilator in each case?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $A\in M_n(\mathbb F)$.

- The **characteristic polynomial** is $p_A(\lambda) = \det(\lambda I - A)$ (monic version), of degree $n$. By Vieta, its coefficients encode symmetric functions of the eigenvalues; its roots are exactly the eigenvalues.
- The **minimal polynomial** $m_A(t)$ is the unique **monic** polynomial of least degree with $m_A(A)=0$.

Their relationship:
1. $m_A$ **divides every** polynomial annihilating $A$; in particular $m_A \mid p_A$ (using Cayley–Hamilton, $p_A(A)=0$).
2. $m_A$ and $p_A$ have the **same roots** (the eigenvalues), possibly with smaller multiplicities in $m_A$: if $p_A(\lambda)=\prod_i(\lambda-\lambda_i)^{a_i}$ then $m_A(\lambda)=\prod_i(\lambda-\lambda_i)^{b_i}$ with $1\le b_i\le a_i$.
3. The exponent $b_i$ is the size of the largest Jordan block for $\lambda_i$; $b_i=1$ for *every* $i$ is exactly the diagonalizability condition (next node).

The minimal polynomial is a strictly finer invariant than the characteristic one — it distinguishes matrices with identical eigenvalue data but different internal structure.

### Proof

We establish existence/uniqueness of $m_A$, the divisibility property, and the equality of root sets. (We *assume* here that some nonzero polynomial annihilates $A$; that a specific degree-$n$ one does is Cayley–Hamilton, proved in a later node. A slicker existence argument: the $n^2+1$ powers $I, A, A^2,\dots,A^{n^2}$ live in the $n^2$-dimensional space $M_n(\mathbb F)$, so they are linearly dependent, giving a nonzero polynomial relation of degree $\le n^2$ that annihilates $A$.)

**Existence.** The set of degrees of nonzero annihilating polynomials is a nonempty set of nonnegative integers, so it has a least element $d$. Pick an annihilator of degree $d$ and scale it monic: call it $m_A$.

**Uniqueness.** Suppose $q$ is another monic annihilator of degree $d$. Then $m_A - q$ annihilates $A$ (difference of annihilators) and has degree $\lt d$ (the leading $t^d$ terms cancel since both are monic). By minimality of $d$, the only annihilator of degree $\lt d$ is the zero polynomial, so $m_A - q = 0$, i.e. $q = m_A$.

**Divisibility.** Let $q$ be any annihilator. Divide: $q = m_A\, s + r$ with $r = 0$ or $\deg r \lt \deg m_A$ (polynomial division over a field). Evaluate at $A$: $0 = q(A) = m_A(A)\,s(A) + r(A) = 0 + r(A)$, so $r(A)=0$. If $r\neq 0$ it would be an annihilator of degree $\lt \deg m_A$, contradicting minimality. Hence $r=0$ and $m_A \mid q$. Applying this to $q=p_A$ (which annihilates $A$ by Cayley–Hamilton) gives $m_A\mid p_A$.

**Same roots.** *(⊆)* If $\lambda$ is a root of $m_A$ then $(t-\lambda)\mid m_A \mid p_A$, so $\lambda$ is a root of $p_A$, i.e. an eigenvalue. *(⊇)* Conversely let $\lambda$ be an eigenvalue with eigenvector $\mathbf v\neq\mathbf 0$, so $A\mathbf v=\lambda\mathbf v$. For any polynomial $q$, $q(A)\mathbf v = q(\lambda)\mathbf v$ (since $A^k\mathbf v=\lambda^k\mathbf v$, extend linearly). Apply to $q=m_A$: $\mathbf 0 = m_A(A)\mathbf v = m_A(\lambda)\mathbf v$, and $\mathbf v\neq\mathbf 0$ forces $m_A(\lambda)=0$. So every eigenvalue is a root of $m_A$. The root sets coincide. $\blacksquare$

### Worked Instance

Resolve the Hook. Both matrices have $p_A(\lambda) = (\lambda-2)^2$.

*Diagonal case* $A=\begin{pmatrix}2&0\\0&2\end{pmatrix}=2I$: here $A - 2I = 0$, so the degree-$1$ polynomial $t-2$ already annihilates. Since a degree-$0$ (constant) monic polynomial is $1$, which does not annihilate $A$, the minimal polynomial is $m_A(t)=t-2$.

*Jordan block* $B=\begin{pmatrix}2&1\\0&2\end{pmatrix}$: $B-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\neq 0$, so $t-2$ is *not* an annihilator. But $(B-2I)^2 = \begin{pmatrix}0&1\\0&0\end{pmatrix}^2 = \begin{pmatrix}0&0\\0&0\end{pmatrix}=0$. Hence $m_B(t) = (t-2)^2 = p_B(t)$.

Same characteristic polynomial, different minimal polynomials: the minimal polynomial exposes that $B$ is a genuine Jordan block ($b=2$) while $A$ is scalar ($b=1$). Only $A$ is diagonalizable.

### Pitfalls

- **Different sign/monic conventions.** $p_A$ is variously $\det(\lambda I - A)$ (monic, used here) or $\det(A-\lambda I)$ (leading coefficient $(-1)^n$). The minimal polynomial is *always* taken monic. Be explicit.
- **$m_A \mid p_A$, not the reverse.** The minimal polynomial has *smaller-or-equal* multiplicities. Writing $p_A \mid m_A$ is backwards.
- **Same roots, possibly different multiplicities.** Sharing roots does *not* mean $m_A=p_A$; the multiplicities can differ (that's the whole point of the Hook).
- **Do not confuse the degree of $m_A$ with $n$.** $\deg m_A \le n$, with equality only in special cases (e.g. a single Jordan block, or distinct eigenvalues).
- The claim $p_A(A)=0$ is Cayley–Hamilton — a real theorem, **not** obtained by "plugging $A$ into $\det(A-\lambda I)$" (see the Cayley–Hamilton node's Pitfalls for why that is nonsense).

:::
:::

## Connections

Prereqs: eigenvalues (roots of both polynomials) and Vieta's formulas (reading eigenvalue symmetric functions off $p_A$'s coefficients). The minimal polynomial unlocks the clean **diagonalizability criterion** ($m_A$ splits into *distinct* linear factors) and sits at the heart of **Cayley–Hamilton** ($m_A\mid p_A$ and $p_A(A)=0$). Recognition trigger: whenever two matrices share eigenvalues but you suspect they behave differently, or whenever you need the *smallest* polynomial identity a matrix satisfies (to compute high powers, matrix exponentials, or test diagonalizability), reach for the minimal polynomial.
