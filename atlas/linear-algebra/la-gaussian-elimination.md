Three planes in space usually meet in a single point. But three specific planes might share a whole line, or nothing at all — and staring at the equations
$$x+y+z=6,\quad 2x-y+z=3,\quad x+2y-2z=-3$$
tells you nothing until you start *combining* them. There is a mechanical procedure that always sorts out which of the three cases you are in, and finds the solution when one exists.

## Discovery

Take the system above and label the equations $R_1, R_2, R_3$.

1. You are allowed to replace an equation by (itself) minus a multiple of another equation, without changing the solution set. Convince yourself this is reversible: if you did $R_2 \leftarrow R_2 - 2R_1$, how do you get $R_2$ back?
2. Use $R_1$ to knock the $x$ out of $R_2$ and $R_3$. Write down the two new equations. Now only $R_1$ mentions $x$.
3. Use your new $R_2$ to knock the $y$ out of the new $R_3$. What single equation in $z$ alone do you get?
4. Solve that last equation for $z$, substitute back up into the $y$-equation, then into the $x$-equation. This "back-substitution" recovers all three unknowns.
5. Now imagine that at step 3 the $z$ had *also* cancelled, leaving something like "$0 = 5$" or "$0 = 0$." What would each of those two outcomes tell you about the planes?

Notice you only ever did three kinds of thing to the rows. List them. Which one is genuinely needed to solve the system, and which two are just for convenience?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Every one of the three **elementary row operations** —
$$\text{(i) swap two rows},\quad \text{(ii) scale a row by a nonzero } c,\quad \text{(iii) add a multiple of one row to another}$$
— is an **invertible** transformation of the augmented matrix that **preserves the solution set** of the system. Applying them systematically (pivot down each column in turn) reduces any matrix to **row echelon form**, from which the solution set is read off by back-substitution.

Concretely: a system $A\mathbf{x} = \mathbf{b}$ is transformed to $U\mathbf{x} = \mathbf{c}$ where $U$ is upper-triangular (echelon), and the two systems have identical solution sets. Each row operation is realized by left-multiplying by an **elementary matrix** $E$ (an invertible matrix obtained by applying that operation to $I$), so the whole reduction is $\mathbf{x} \mapsto (E_k\cdots E_1) A\,\mathbf{x} = (E_k\cdots E_1)\mathbf{b}$. The three terminal outcomes are: a pivot in every column of the coefficient part (unique solution), a pivot row reading $0=c$ with $c\neq 0$ (no solution — inconsistent), or a column with no pivot (a free variable — infinitely many solutions).

### Proof

We prove the load-bearing claim: **each elementary row operation preserves the solution set, and is invertible.**

A solution of $A\mathbf{x}=\mathbf{b}$ is a vector $\mathbf{x}$ satisfying every scalar equation (row) simultaneously. Write the rows as $\mathbf{r}_i\cdot\mathbf{x}=b_i$.

*Operation (iii): $R_i \leftarrow R_i + cR_j$ (with $i\neq j$).* Suppose $\mathbf{x}$ solves the old system, so $\mathbf{r}_i\cdot\mathbf{x}=b_i$ and $\mathbf{r}_j\cdot\mathbf{x}=b_j$. Then $(\mathbf{r}_i+c\mathbf{r}_j)\cdot\mathbf{x} = b_i + cb_j$, so $\mathbf{x}$ solves the new system. Conversely the operation $R_i \leftarrow R_i - cR_j$ undoes it and is of the same type, so it too preserves solutions; hence the two solution sets are equal and the operation is its own kind of inverse.

*Operation (ii): $R_i \leftarrow cR_i$ with $c\neq 0$.* If $\mathbf{r}_i\cdot\mathbf{x}=b_i$ then $c\,\mathbf{r}_i\cdot\mathbf{x}=cb_i$, and since $c\neq 0$ we may divide back, so the solution sets agree; the inverse is scaling by $1/c$.

*Operation (i): swapping $R_i$ and $R_j$.* This merely reorders the equations; the set of simultaneous solutions is unchanged, and swapping again inverts it.

**Matrix realization.** Let $E$ be the matrix obtained by performing the operation on $I_m$. For any matrix $M$, the product $EM$ is exactly $M$ with that same row operation applied — this is the definition of matrix multiplication read row-wise. Since each operation is invertible as shown, $E$ is invertible (its inverse is the elementary matrix of the inverse operation). Left-multiplying the augmented system by $E$ therefore gives an equivalent system.

**Termination in echelon form.** Process columns left to right. In the current column, if some row at or below the current pivot position has a nonzero entry, swap it up (op i) and use op (iii) to zero out all entries below it, then advance both the pivot row and column; if the whole column is zero below, advance only the column. Each step either advances the column or advances both, and there are finitely many columns, so the process halts. When it halts, every nonzero row starts strictly further right than the one above — the definition of row echelon form. Reading the final system: a row $0=c$ with $c\neq 0$ is unsatisfiable (no solutions); otherwise every non-pivot ("free") column can take any value and each pivot variable is then determined by back-substitution. $\blacksquare$

### Worked Instance

Return to the Hook. The augmented matrix is
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6\\ 2 & -1 & 1 & 3\\ 1 & 2 & -2 & -3\end{array}\right].$$
$R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 - R_1$:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6\\ 0 & -3 & -1 & -9\\ 0 & 1 & -3 & -9\end{array}\right].$$
$R_3 \leftarrow R_3 + \tfrac13 R_2$:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6\\ 0 & -3 & -1 & -9\\ 0 & 0 & -\tfrac{10}{3} & -12\end{array}\right].$$
The last row gives $-\tfrac{10}{3}z = -12$, so $z = \tfrac{18}{5}$. Back-substitute into $-3y - z = -9$: $-3y = -9 + \tfrac{18}{5} = -\tfrac{27}{5}$, so $y = \tfrac{9}{5}$. Then $x = 6 - y - z = 6 - \tfrac{9}{5} - \tfrac{18}{5} = \tfrac{3}{5}$. A pivot in every column: the three planes meet in the single point $\left(\tfrac35, \tfrac95, \tfrac{18}{5}\right)$.

### Pitfalls

- **Scaling by zero is forbidden.** Op (ii) requires $c\neq 0$; scaling a row by $0$ destroys information and is *not* invertible.
- **$0=0$ versus $0=c$.** A vanished row that reads $0=0$ is harmless (it signals a free variable / redundant equation); a row reading $0=c$ with $c\neq 0$ means *no solution*. Do not confuse "infinitely many" with "none."
- **Row operations act on the left; column operations are different.** $EM$ does rows to $M$; $ME$ would do *columns*. Solving systems uses row operations only.
- **Order of a swap and the sign of the determinant.** For solving systems, swaps are free — but remember (for the determinant node) that each swap flips a sign.
- Don't forget to carry the augmented column $\mathbf{b}$ through every operation; a common slip is reducing $A$ but forgetting to update $\mathbf{b}$.

:::
:::

## Connections

Prereqs: none beyond comfort with matrices and linear equations. Gaussian elimination is the computational engine under nearly every concrete result in this domain: it computes **determinants** (track the sign flips from swaps and the product of pivots), it reveals **rank** (count the pivots — feeding directly into rank–nullity), and it inverts matrices (row-reduce $[A\mid I]$ to $[I\mid A^{-1}]$). Recognition trigger: any time you must *solve*, *invert*, or *find the rank of* a concrete matrix, reach for row reduction and read the answer off the pivots.
