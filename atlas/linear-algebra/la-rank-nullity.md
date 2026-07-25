A $3\times 5$ matrix maps $\mathbb{R}^5$ into $\mathbb{R}^3$. The image can be at most $3$-dimensional — so at least $5-3 = 2$ dimensions' worth of input must be crushed to zero. You can *guarantee* a nontrivial kernel before computing a single entry. Why must exactly the "lost" dimensions reappear as directions the map annihilates?

## Discovery

Let $T\colon V \to W$ be linear, $V$ finite-dimensional. Two subspaces attach to $T$: the **kernel** $\ker T = \{\mathbf{v}: T\mathbf{v}=\mathbf 0\}$ (inputs killed) and the **image** $\operatorname{im}T = \{T\mathbf{v}\}$ (outputs achieved).

1. Take a basis $\mathbf{u}_1,\dots,\mathbf{u}_k$ of $\ker T$. These are lost inside $V$. Can you extend them to a basis of all of $V$ by adjoining some vectors $\mathbf{w}_1,\dots,\mathbf{w}_m$? What is $k + m$?
2. Apply $T$ to each of the $\mathbf{w}_j$. Ask: do the images $T\mathbf{w}_1,\dots,T\mathbf{w}_m$ **span** $\operatorname{im}T$? (Take a general $T\mathbf{v}$, write $\mathbf{v}$ in the full basis, and push $T$ through.)
3. Ask next: are $T\mathbf{w}_1,\dots,T\mathbf{w}_m$ **linearly independent**? Suppose a combination of them is $\mathbf 0$; pull the combination back inside $T$ and use that its preimage lands in $\ker T$.
4. If both hold, what is $\dim(\operatorname{im}T)$ in terms of $m$? Combine with step 1.
5. Reinterpret for a matrix via Gaussian elimination: after row-reducing $A$, the **pivot columns** and the **free columns** partition the columns. Which count is the rank, and which is the nullity?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a linear map $T\colon V\to W$ with $\dim V \lt \infty$,
$$\dim(\ker T) + \dim(\operatorname{im} T) = \dim V,$$
i.e. **nullity $+$ rank $=$ dimension of the domain**. For an $m\times n$ matrix $A$ (viewed as $T\colon \mathbb{F}^n\to\mathbb{F}^m$), the **rank** $= \dim(\operatorname{im}A) = $ number of pivot columns, the **nullity** $= \dim(\ker A) = $ number of free columns, and
$$\operatorname{rank}(A) + \operatorname{nullity}(A) = n \quad(\text{the number of columns}).$$
Immediate corollaries: a map $\mathbb F^n\to\mathbb F^m$ with $n\gt m$ has nonzero kernel (nullity $\ge n-m\gt 0$); an injective linear map preserves dimension into its image; and a square matrix is invertible iff its nullity is $0$ iff its rank is full.

### Proof

Let $k = \dim(\ker T)$ and choose a basis $\mathbf{u}_1,\dots,\mathbf{u}_k$ of $\ker T$. Extend it to a basis
$$\mathbf{u}_1,\dots,\mathbf{u}_k,\ \mathbf{w}_1,\dots,\mathbf{w}_m$$
of $V$ (possible in finite dimension), so $\dim V = k + m$. We claim $\{T\mathbf{w}_1,\dots,T\mathbf{w}_m\}$ is a basis of $\operatorname{im}T$; then $\dim(\operatorname{im}T)=m$ and the theorem reads $k + m = \dim V$.

**Spanning.** Any element of $\operatorname{im}T$ is $T\mathbf{v}$ for some $\mathbf{v}\in V$. Write $\mathbf{v}=\sum_i a_i\mathbf{u}_i + \sum_j b_j\mathbf{w}_j$ in the basis. Apply $T$: since $T\mathbf{u}_i=\mathbf 0$,
$$T\mathbf{v} = \sum_i a_i\, T\mathbf{u}_i + \sum_j b_j\, T\mathbf{w}_j = \sum_j b_j\, T\mathbf{w}_j.$$
So every image vector is a combination of the $T\mathbf{w}_j$; they span $\operatorname{im}T$.

**Independence.** Suppose $\sum_j c_j\, T\mathbf{w}_j = \mathbf 0$. By linearity $T\!\left(\sum_j c_j\mathbf{w}_j\right)=\mathbf 0$, so $\sum_j c_j\mathbf{w}_j \in \ker T$. Hence it is a combination of the kernel basis: $\sum_j c_j\mathbf{w}_j = \sum_i d_i\mathbf{u}_i$ for some $d_i$. Rearranging,
$$\sum_j c_j\mathbf{w}_j - \sum_i d_i\mathbf{u}_i = \mathbf 0.$$
But $\{\mathbf{u}_i\}\cup\{\mathbf{w}_j\}$ is a basis of $V$, hence linearly independent, forcing every coefficient to vanish — in particular all $c_j = 0$. So the $T\mathbf{w}_j$ are independent.

Being a spanning, independent set, $\{T\mathbf{w}_1,\dots,T\mathbf{w}_m\}$ is a basis of $\operatorname{im}T$, giving $\dim(\operatorname{im}T)=m$. Therefore
$$\dim(\ker T) + \dim(\operatorname{im}T) = k + m = \dim V. \qquad \blacksquare$$

*(Matrix viewpoint.* Row-reducing $A$ to echelon form, each pivot column's original column is independent and these span the column space, so rank $=$ #pivots; each free column corresponds to a free variable parametrizing $\ker A$, so nullity $=$ #free columns; pivots $+$ free $= n$.)

### Worked Instance

Let $A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 1 & 2 & 1 & 2 \end{pmatrix}$, a map $\mathbb{R}^4\to\mathbb{R}^3$. Row-reduce: $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$:
$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}, \quad R_3\leftarrow R_3-R_2:\quad \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$
Pivots in columns $1$ and $3$: **rank $= 2$**. Free columns $2$ and $4$: **nullity $= 2$**. Check: $2 + 2 = 4 = n$. The theorem is confirmed, and it *predicted* the $2$-dimensional kernel: with $4$ inputs and image of dimension only $2$, exactly $2$ dimensions collapse. A kernel basis: setting free variables $(x_2,x_4)=(1,0)$ then $(0,1)$ gives $(-2,1,0,0)^{\mathsf T}$ and $(-1,0,-1,1)^{\mathsf T}$.

### Pitfalls

- **Rank is not the number of nonzero rows you started with** — it's the number of *pivots after reduction*. Rows can be redundant.
- **Row rank $=$ column rank.** The rank counted from pivot columns equals the rank counted from independent rows; both equal $\operatorname{rank}(A)=\operatorname{rank}(A^{\mathsf T})$. Don't treat them as separate numbers.
- **The "$n$" is the number of columns (the domain dimension), not the number of rows.** For $A\colon\mathbb F^n\to\mathbb F^m$, rank $+$ nullity $= n$, not $m$. The image lives in $\mathbb F^m$; the kernel and this identity live over the *domain*.
- **Requires finite dimension.** In infinite dimensions the naive statement fails (e.g. the shift operator).
- Don't conflate $\dim(\operatorname{im}A) \le m$ with the equality; rank can be strictly less than both $m$ and $n$.

:::
:::

## Connections

Prereqs: Gaussian elimination (rank and nullity are literally the pivot/free-column counts). Rank–nullity is the structural backbone linking a map's "how much it forgets" to "how much it achieves." It unlocks the **secretly-linear-algebra** technique (dimension-counting over $\mathbb F_p$ to bound the size of combinatorial configurations) and underlies invertibility criteria, solvability of systems, and the first isomorphism theorem in the linear setting. Recognition trigger: any argument of the form "there are more unknowns than constraints, so a nonzero solution exists," or "count the dimensions and something must collapse."
