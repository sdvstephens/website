The number $\det\begin{pmatrix} a & b \\ c & d\end{pmatrix} = ad - bc$ is the *signed area* of the parallelogram spanned by the columns. Scale one column by $3$ and the area triples; add a copy of one column to the other and the area is unchanged; make the two columns equal and the area is $0$. Those three reflexes — and *only* those — pin down the determinant in every dimension.

## Discovery

Think of $\det$ as a function $D$ of the $n$ *columns* $\mathbf{v}_1,\dots,\mathbf{v}_n$ of a matrix, valued in scalars. Demand three things, motivated by "signed volume":

1. **Normalization.** The unit cube should have volume $1$: $D(\mathbf{e}_1,\dots,\mathbf{e}_n) = 1$.
2. **Multilinearity.** Volume scales linearly in each edge separately. Write down what $D(\dots, \alpha\mathbf{u}+\beta\mathbf{w},\dots) $ should equal, holding the other columns fixed.
3. **Alternating.** A "flat" box has no volume: if two columns are equal, $D = 0$.

Now *derive consequences* using only 1–3.
   - (a) Take a matrix with two equal columns and swap them. The matrix is unchanged, but expand $D(\dots,\mathbf{v}_i+\mathbf{v}_j,\dots,\mathbf{v}_i+\mathbf{v}_j,\dots)=0$ by multilinearity. What relation between $D$ and swapping two columns pops out?
   - (b) Using multilinearity and the alternating property, what happens to $D$ when you replace $\mathbf{v}_i$ by $\mathbf{v}_i + c\mathbf{v}_j$?
   - (c) A triangular matrix has columns that are "staircase." Argue from 1–3 that its determinant is the product of its diagonal entries.
   - (d) You now have exactly the tools to compute $D$ by Gaussian elimination on the columns: reduce to triangular, tracking how each operation changes $D$. Sketch the recipe.

Finally, ask: *could two different functions satisfy all of 1–3?* Try to see why the answer forces uniqueness.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

There is a **unique** function $\det\colon M_n(\mathbb{F}) \to \mathbb{F}$ (equivalently, a function of $n$ column vectors) that is

1. **multilinear**: linear in each column separately;
2. **alternating**: $\det = 0$ whenever two columns are equal;
3. **normalized**: $\det I = 1$.

From these three axioms follow *all* the familiar facts, without ever writing the cofactor sum:
- swapping two columns multiplies $\det$ by $-1$;
- adding a multiple of one column to another leaves $\det$ unchanged;
- $\det$ of a triangular matrix is the product of its diagonal;
- $\det(AB) = \det(A)\det(B)$, and $A$ is invertible iff $\det A \neq 0$;
- $\det A^{\mathsf T} = \det A$ (so every column statement also holds for rows).

The explicit **Leibniz formula** $\det A = \sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i}a_{\sigma(i),i}$ and **cofactor expansion** are *consequences*, not the definition. Geometrically, $|\det A|$ is the volume of the parallelepiped spanned by the columns, and its sign records orientation.

### Proof

We prove that axioms 1–3 force the swap and shear rules, hence give a computable and unique value; then that such a function exists.

**Swap rule.** Let $A$ have columns $\dots,\mathbf{v}_i,\dots,\mathbf{v}_j,\dots$. Consider the matrix with both those slots holding $\mathbf{v}_i+\mathbf{v}_j$; by (2) it has determinant $0$. Expand by multilinearity (2 is linearity, so expand both slots):
$$0 = \det(\dots,\mathbf{v}_i+\mathbf{v}_j,\dots,\mathbf{v}_i+\mathbf{v}_j,\dots) = \underbrace{\det(\dots\mathbf{v}_i\dots\mathbf{v}_i\dots)}_{0} + \det(\dots\mathbf{v}_i\dots\mathbf{v}_j\dots) + \det(\dots\mathbf{v}_j\dots\mathbf{v}_i\dots) + \underbrace{\det(\dots\mathbf{v}_j\dots\mathbf{v}_j\dots)}_{0},$$
where the two underbraced terms vanish by (2). Hence $\det(\dots\mathbf{v}_i\dots\mathbf{v}_j\dots) = -\det(\dots\mathbf{v}_j\dots\mathbf{v}_i\dots)$: swapping two columns flips the sign.

**Shear rule.** By multilinearity in the $i$-th slot,
$$\det(\dots,\mathbf{v}_i + c\mathbf{v}_j,\dots,\mathbf{v}_j,\dots) = \det(\dots,\mathbf{v}_i,\dots,\mathbf{v}_j,\dots) + c\,\det(\dots,\mathbf{v}_j,\dots,\mathbf{v}_j,\dots).$$
The second term has two equal columns, so it is $0$ by (2). Thus adding a multiple of one column to another leaves $\det$ unchanged.

**Triangular value and computability.** If a column is zero, multilinearity in that slot (scaling by $0$) gives $\det = 0$. For an upper-triangular matrix, use shear operations (which don't change $\det$) to clear the above-diagonal entries, reaching a diagonal matrix; then by multilinearity pull each diagonal entry $d_i$ out of its column, leaving $\left(\prod_i d_i\right)\det I = \prod_i d_i$ by (3). More generally, **any** matrix can be driven to triangular form by column operations of types (swap, shear, scale), and axioms 1–3 tell us exactly how $\det$ changes at each step (times $-1$, unchanged, times the scalar). This computes $\det A$ and shows it equals $\pm$(product of pivots), or $0$ if a zero pivot column appears. Crucially the *result is forced*: any function satisfying 1–3 must return this same number — **uniqueness**.

**Existence.** Uniqueness alone does not guarantee a function exists. Define
$$\det A := \sum_{\sigma\in S_n} \operatorname{sgn}(\sigma)\prod_{i=1}^n a_{\sigma(i),\,i}.$$
This is manifestly linear in each column (each term contains exactly one entry from each column). It is normalized: for $A=I$ only $\sigma=\mathrm{id}$ contributes, giving $1$. It is alternating: if columns $i$ and $j$ are equal, pair each $\sigma$ with $\sigma\circ(i\,j)$; these have opposite signs but equal products (the equal columns make the two products identical), so the sum cancels in pairs to $0$. Thus the Leibniz sum satisfies 1–3, and by uniqueness it *is* the determinant. Multiplicativity $\det(AB)=\det A\det B$ then follows because $B\mapsto \det(AB)$ satisfies the axioms scaled by $\det A$; and $\det A^{\mathsf T}=\det A$ because $\operatorname{sgn}(\sigma)=\operatorname{sgn}(\sigma^{-1})$ lets us re-index the same sum. $\blacksquare$

### Worked Instance

Compute
$$\det\begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 1 \\ 8 & 7 & 9 \end{pmatrix}$$
by axioms, not cofactors. Row operations are legitimate since $\det A^{\mathsf T}=\det A$. Do $R_2\leftarrow R_2 - 2R_1$ and $R_3\leftarrow R_3 - 4R_1$ (shears, $\det$ unchanged):
$$\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 3 & 5 \end{pmatrix}.$$
Then $R_3\leftarrow R_3 - 3R_2$ (shear):
$$\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 8 \end{pmatrix}.$$
Now triangular: $\det = 2\cdot 1\cdot 8 = 16$. No cofactor sum, no arithmetic of six signed products — just the three properties.

### Pitfalls

- **Alternating $\neq$ "changes sign under any rearrangement in the same way."** The precise axiom is "equal columns $\Rightarrow 0$"; the sign-flip-under-swap is *derived* from it (and over a field of characteristic $2$ the two are genuinely different — there, "alternating" must be taken as the equal-columns-vanish form).
- **Scaling.** Scaling *one* row/column by $c$ multiplies $\det$ by $c$; scaling the *whole* $n\times n$ matrix by $c$ multiplies $\det$ by $c^n$ (a classic trap: $\det(cA) = c^n\det A$).
- **$\det(A+B) \neq \det A + \det B$** in general — multilinearity is *columnwise*, not a linearity in the whole matrix.
- **Sign bookkeeping under swaps.** Every row/column swap during reduction flips the sign; miscounting swaps is the most common determinant error.
- Cofactor expansion is correct but $O(n!)$; for computation use elimination (the axioms justify it) which is $O(n^3)$.

:::
:::

## Connections

Prereqs: Gaussian elimination — the axioms are exactly what makes row/column reduction a *legal* way to compute $\det$. Determinants unlock **eigenvalues** (the characteristic equation $\det(A-\lambda I)=0$), the **Vandermonde** determinant, and Cramer's rule. The multiplicativity $\det(AB)=\det A\det B$ and $\det A\neq 0 \Leftrightarrow A$ invertible are the workhorses. Recognition trigger: any question about invertibility, volume/area scaling under a linear map, orientation, or "when is this system uniquely solvable" is a determinant question.
