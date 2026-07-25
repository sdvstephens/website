Which perfect squares are also one more than a perfect cube? You might hunt: $0,1,\dots$ and find $8=2^3$ with $9=3^2$. But how do you know the search *ends* — that no gigantic solution hides out at infinity? Sometimes an inequality, not a congruence, slams the door.

## Discovery

Find all positive integers $n$ such that $n^2 \lt n! \lt n^3$ is *false in a controllable way* — but first warm up on the core move.
1. Suppose an integer $y$ satisfies $k^2 \lt y^2 \lt (k+1)^2$ for some integer $k\ge 0$. How many perfect squares lie *strictly* between two consecutive squares $k^2$ and $(k+1)^2$? What does that force about $y^2$?
2. Now the real problem: find all positive integers $x$ with $x^2 + 1$ a perfect square, say $x^2 + 1 = y^2$. Assume $x\ge 1$, so $y \gt x \ge 1$, meaning $y \ge x+1$. Compare $y^2 = x^2 + 1$ against $(x+1)^2$. What inequality between $x^2+1$ and $(x+1)^2$ do you get, and is it ever satisfiable for $x\ge 1$?
3. In step 2 you trapped $y^2$ strictly between $x^2$ and $(x+1)^2$. Combine with step 1. What must be true — and hence what are all solutions?
4. Reflect on the pattern: you took an expression, sandwiched it strictly between two consecutive values of a monotone integer function, and used the fact that *no integer lives strictly between consecutive integers* (or consecutive squares). Where did congruences play any role at all? Where did *size* do the work?
5. Try a divisibility flavour: for positive integers $a,b$, when can $a b$ divide $a^2 + b^2 + 1$ while... — set up how a bound on the quotient $\dfrac{a^2+b^2+1}{ab}$ would force only finitely many small cases to check. (Just describe the bounding step.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

There is no single formula here; the **result is a method**. In number theory, when an unknown integer is trapped strictly between two consecutive values of a monotone integer-valued quantity, it cannot exist (or is pinned to the boundary). Concretely, the two most common templates:

1. **Squeeze between consecutive squares (or powers).** If a candidate square $y^2$ satisfies $k^2 \lt y^2 \lt (k+1)^2$ for an integer $k\ge 0$, then no integer $y$ works, since $(k)^2$ and $(k+1)^2$ are consecutive squares with nothing between. More generally, $A(n) \lt E \lt A(n+1)$ for a strictly increasing integer sequence $A$ forces $E$ to be a non-value.

2. **Finiteness by bounding a quotient/ratio.** If integrality forces a quotient to be a positive integer *and* an inequality bounds that quotient above (and below), only finitely many cases remain, each checkable by hand.

Both convert an inequality into a hard divisibility/existence conclusion — the complement to congruence methods.

### Proof

We justify the load-bearing lemma both templates rest on.

**Lemma (no integer between consecutive squares).** For integers $k\ge 0$, there is no perfect square strictly between $k^2$ and $(k+1)^2$.
*Proof.* Suppose $k^2 \lt y^2 \lt (k+1)^2$ with $y$ a nonnegative integer. From $k^2 \lt y^2$ and monotonicity of $t\mapsto t^2$ on $t\ge 0$ we get $k \lt y$, so $y \ge k+1$. From $y^2 \lt (k+1)^2$ we get $y \lt k+1$, so $y \le k$. Then $k+1 \le y \le k$, i.e. $k+1\le k$, a contradiction. Hence no such $y$ exists. $\blacksquare$

**Application to $x^2+1=y^2$.** Suppose $x\ge 1$ and $x^2 + 1 = y^2$ with $y\ge 0$. Since $y^2 = x^2 + 1 \gt x^2$, we have $y \gt x \ge 1$, so $y \ge x+1$, giving $y^2 \ge (x+1)^2 = x^2 + 2x + 1$. But $y^2 = x^2 + 1$, so $x^2 + 1 \ge x^2 + 2x + 1$, i.e. $0 \ge 2x$, forcing $x \le 0$ — contradicting $x\ge 1$. Equivalently, for $x\ge 1$ we have the strict squeeze $x^2 \lt x^2 + 1 \lt (x+1)^2$, so $x^2+1$ lies strictly between consecutive squares and cannot be one. Hence the only solution in nonnegative integers is $x = 0$ (with $y = 1$). $\blacksquare$

### Worked Instance

**Claim:** the only nonnegative integer solution of $x^2 + 1 = y^2$ is $(x,y)=(0,1)$; consequently the Hook's "square that is one more than another square" essentially cannot happen for $x\ge 1$.
For $x\ge 1$: $x^2 \lt x^2+1$, and $x^2 + 1 \lt x^2 + 2x + 1 = (x+1)^2$ since $2x \gt 0$. So
$$x^2 \;\lt\; x^2+1 \;\lt\; (x+1)^2,$$
placing $x^2+1$ strictly between consecutive squares — impossible for a square. Only $x=0$ survives, giving $y=1$. The bounding did all the work; no modular arithmetic was needed. (The same squeeze shows $n! + 1$ is rarely a square, and frames Catalan-type "consecutive powers" problems.)

### Pitfalls

- The squeeze must be **strict**: $k^2 \lt y^2 \lt (k+1)^2$ rules $y$ out, but $k^2 \le y^2 \le (k+1)^2$ allows the endpoints — always check whether the boundary cases $y=k$ or $y=k+1$ actually occur.
- Choose the *right* consecutive frame: to bound a square, bracket by consecutive squares; to bound a cube, by consecutive cubes; mixing them loses the argument.
- Bounding shows *non-existence beyond a range*; you must still **check the finitely many small cases** it leaves — the method rarely finishes by itself.
- A bound in one direction is not enough for finiteness: you typically need both an upper and a lower bound (or an upper bound plus positivity/integrality) to corner the solutions.
- Congruence and bounding are complementary, not interchangeable: a congruence obstruction rules out residues; a size obstruction rules out magnitudes. Hard problems often need both.

:::
:::

## Connections

Prereqs: modular arithmetic (the complementary technique — this node is deliberately the "size" counterpart to congruence obstructions). Bounding is the gateway to Pell's equation (where solutions are infinite but generated by a minimal bounded one) and to Vieta jumping (which repeatedly produces a *smaller* solution, using a descent that is fundamentally a size argument). Recognition trigger: an equation asking to "find all integers" where you suspect the answer is a short finite list — try trapping an unknown strictly between consecutive squares, cubes, or factorials, or bounding an integer quotient.
