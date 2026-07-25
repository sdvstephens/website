Look at pairs of positive integers $(a, b)$ for which $ab + 1$ divides $a^2 + b^2$. The quotient
$\dfrac{a^2 + b^2}{ab + 1}$ is $1$ for $(1,1)$, and $4$ for $(2, 8)$ and for $(8, 30)$ — always a
*perfect square*. Never $2$, never $3$, never $5$. How could a division problem conspire to hand
back only squares, every single time?

## Discovery

Suppose $a, b$ are positive integers and $\dfrac{a^2 + b^2}{ab + 1} = k$ for some positive
integer $k$.
1. Freeze $k$ and $b$, and treat $a$ as the unknown. Rearrange $a^2 + b^2 = k(ab+1)$ into a monic
   quadratic in $a$: $a^2 - (kb)a + (b^2 - k) = 0$. If $a$ is one root, what does Vieta's
   root–sum and root–product tell you about the *other* root $a'$?
2. Show $a'$ is an integer (from the root-*sum* relation) and compute it two ways: from the sum
   ($a' = kb - a$) and from the product ($a' = (b^2 - k)/a$). Both are needed.
3. Suppose, seeking the smallest counterexample, that $(a, b)$ is a solution with $k$ *not* a
   perfect square, chosen to minimize $a + b$; assume WLOG $a \ge b$. Consider the "jumped"
   solution $(a', b)$. Use the two formulas for $a'$ to argue $a' \ge 0$, then rule out $a' = 0$
   using that $k$ is a nonsquare.
4. Now compare sizes. Show $0 \lt a' \lt a$ (use $a' = (b^2-k)/a$ and $a \ge b$). What does this do
   to your assumption that $(a,b)$ minimized $a + b$? Push to a contradiction.
5. What must $k$ be if the descent is impossible? And at the bottom of the descent (when the jump
   *can't* strictly decrease), what does $a' = 0$ force $k$ to equal?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Vieta Jumping** is a descent technique (a competition-culture name, **not** a formal theorem)
for symmetric Diophantine relations. The template: a symmetric equation $F(a,b) = 0$, quadratic
in each variable when the other is fixed, lets you replace a root $a$ by the *other* root
$a' = (\text{sum}) - a$ of the same quadratic. Since $a'$ is forced to be an integer and often
smaller, one runs an infinite descent / minimal-counterexample argument.

**Flagship problem** (re-phrased from IMO 1988 Problem 6). *If $a, b$ are positive integers such
that $ab + 1$ divides $a^2 + b^2$, then the quotient $\dfrac{a^2 + b^2}{ab + 1}$ is a perfect
square.*

### Proof

Let $k = \dfrac{a^2 + b^2}{ab + 1}$ be a positive integer; we show $k$ is a perfect square.

**Set up the pool of solutions.** Fix this value of $k$ and consider the set
$$\mathcal S = \{(a, b) \in \ZZ_{\ge 0}^2 : a^2 + b^2 = k(ab + 1)\}.$$
$\mathcal S$ is nonempty (it contains the given pair). Among all pairs in $\mathcal S$, choose one,
$(A, B)$, minimizing the sum $A + B$; by symmetry of the equation assume $A \ge B \ge 0$.

**The jump.** Freeze $B$ and $k$, and view the equation as a quadratic in the first variable:
$$x^2 - (kB)\,x + (B^2 - k) = 0.$$
One root is $x = A$. Let $A'$ be the other root. By Vieta's formulas,
$$A + A' = kB \quad(\text{so } A' = kB - A \in \ZZ), \qquad A\,A' = B^2 - k \quad(\text{so } A' =
\tfrac{B^2 - k}{A}).$$
The first relation shows $A'$ is an **integer**; the second lets us bound it. Note $(A', B)$ also
lies in $\mathcal S$ *provided $A' \ge 0$*, since it satisfies the same equation.

**Claim: $A' \ge 0$.** If $B = 0$ the equation gives $A^2 = k$, so $k$ is a perfect square and we
are done; so assume $B \ge 1$. Suppose for contradiction $A' \lt 0$. Then, since $A \ge 1$,
$$A'^2 - kBA' + (B^2 - k) = 0 \ \Rightarrow\ A'^2 + B^2 = k(A'B + 1).$$
With $A' \le -1$ and $B \ge 1$ we get $A'B + 1 \le -B + 1 \le 0$, so the right side $k(A'B+1) \le
0$, while the left side $A'^2 + B^2 \ge 1 \gt 0$ — a contradiction. Hence $A' \ge 0$.

**Case $A' = 0$.** Then $A A' = B^2 - k$ gives $B^2 - k = 0$, i.e. $k = B^2$, a perfect square.
Done.

**Case $A' \ge 1$: descent.** Now $(A', B)$ is a genuine positive-integer solution in $\mathcal S$.
We show it is *smaller*, contradicting minimality. From $A' = \dfrac{B^2 - k}{A}$ and $k \ge 1$,
$$A' = \frac{B^2 - k}{A} \le \frac{B^2 - 1}{A} \lt \frac{B^2}{A} \le \frac{A^2}{A} = A,$$
where $\frac{B^2}{A} \le A$ uses $B \le A$. Thus $0 \lt A' \lt A$, so $A' + B \lt A + B$,
contradicting that $(A,B)$ minimized the sum in $\mathcal S$.

**Conclusion.** The descent case is impossible, so for the minimal pair either $B = 0$ or
$A' = 0$ occurred — and both forced $k$ to be a perfect square. Since every solution shares the
same $k$, the quotient $\dfrac{a^2+b^2}{ab+1}$ is always a perfect square. $\blacksquare$

### Worked Instance

Take $(a, b) = (30, 8)$, which satisfies $ab + 1 = 241 \mid a^2 + b^2 = 900 + 64 = 964 = 4\cdot
241$, so $k = 4 = 2^2$. Watch the jump *downward* from $(30, 8)$ with $B = 8$: the quadratic in
$x$ is $x^2 - (4\cdot 8)x + (64 - 4) = x^2 - 32x + 60 = 0$, with root $A = 30$. The other root:
$$A' = 32 - 30 = 2 \quad\big(\text{check } A' = \tfrac{B^2 - k}{A} = \tfrac{60}{30} = 2\big).$$
So $(2, 8) \in \mathcal S$, smaller. Jump again with $B = 8$? Symmetrize first: reorder to
$(8, 2)$, freeze $B = 2$: $x^2 - (4\cdot2)x + (4 - 4) = x^2 - 8x = 0$, roots $8$ and $0$. The
jump reaches $A' = 0$, and there $k = B^2 = 2^2 = 4$ — the descent bottoms out at a perfect
square, exactly as the proof predicts. This is why the hook only ever saw squares.

### Pitfalls

- **Freeze one variable** and make the equation a quadratic in the *other*; jumping both at once
  is meaningless. The "other root" is of the one-variable quadratic.
- $A'$ is an integer because of the **root-sum** relation ($A + A' = kB$), *not* the product.
  Justify integrality before treating $(A',B)$ as a lattice solution.
- You must **rule out $A' \lt 0$** (so the jumped pair stays in the nonnegative pool) and treat
  $A' = 0$ as the *base case that delivers the conclusion*, not as a failure.
- Choose the extremal object correctly: minimize a quantity (like $A+B$) that the jump strictly
  decreases. Minimizing the wrong quantity gives no contradiction.
- The technique needs genuine **symmetry** (so both orderings and both "which root" choices are
  available). Asymmetric equations may not admit the flip.

:::
:::

## Connections

Prereqs: bounding arguments (the descent is a strict-decrease squeeze) and Vieta's formulas (the
whole trick is reading off the *other* root). Vieta jumping is the number-theoretic cousin of
Fermat's infinite descent, and it lives on the ordering/extremal principle. It is the signature
method for symmetric integer relations of the form "$ab + c \mid a^2 + b^2 + \cdots$," the most
famous being the flagship IMO problem here. Recognition trigger: a symmetric Diophantine equation
that is quadratic in each variable, an integer quotient you must constrain, or the phrase "show
this is always a square / bounded" — set up the minimal solution and jump.
