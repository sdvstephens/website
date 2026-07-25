You are asked for a closed form for $\sum_{k=1}^{n} k\cdot k!$. You have no formula in your
head. But you can add. What happens if you just compute the sum for $n=1,2,3,4$ and stare at
the answers next to $n!$?

## Discovery

1. Compute $S_n = \sum_{k=1}^{n} k\cdot k!$ for $n=1,2,3,4$. Write each $S_n$ as a plain
   integer.
2. Now write $(n+1)!$ next to each $S_n$: for $n=1$ that's $2! = 2$; for $n=2$ that's
   $3! = 6$; and so on. Line up the two columns.
3. Look at the gap $(n+1)! - S_n$ in each row. What single, unchanging number is it?
4. Turn that observation into a candidate identity for $S_n$ in terms of a factorial. Do not
   yet argue that it holds for all $n$ — just record the guess the table forces on you.
5. Separately: tabulating is only trustworthy if the pattern is real. Suppose instead you were
   studying $f(n) = n^2 + n + 41$ and found it prime for $n=0,1,2,3,4$. What is the danger in
   declaring "$f(n)$ is always prime"? At what $n$ might you first get burned?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Small cases & tabulation** is the discovery move: to attack a problem indexed by an integer
$n$ (a sum, a count, a recurrence, a construction), *compute the first several instances
explicitly, arrange them in a table, and read off a conjecture* — then prove it separately by
another method (induction, telescoping, a bijection, …). Tabulation **finds** the answer; it
does not by itself **prove** it. The technique applies whenever a problem has a natural integer
parameter you can dial down to $1, 2, 3, \dots$, and it is the correct first move on almost any
unfamiliar sequence, sum, or "for all $n$" claim. A finite table can only *suggest* a law; a
pattern holding for $n \le N$ is evidence, never proof (witness $n^2+n+41$, prime for
$0 \le n \le 39$ but composite at $n=40$).

### Proof

Why is tabulation a *valid* discovery step — and why must it be followed by a proof? The
justification has two halves.

**A confirmed conjecture must still be proved.** A statement "$P(n)$ for all $n \ge 1$" asserts
infinitely many facts. Checking $P(1), \dots, P(N)$ verifies $N$ of them; it leaves
$P(N+1), P(N+2), \dots$ untouched. Since no finite $N$ exhausts $\mathbb{N}$, the table alone
cannot certify the universal claim. The polynomial $f(n) = n^2 + n + 41$ makes the gap concrete:
$f(n)$ is prime for every $n$ from $0$ to $39$, yet $f(40) = 40^2 + 40 + 41 = 1681 = 41^2$ is
composite. Forty confirmations, then failure.

**But the conjecture the table produced is exactly the one to prove, and often it proves
itself.** Take the Hook. The table gives the guess $S_n = (n+1)! - 1$. Now prove it by
induction. Base: $S_1 = 1\cdot 1! = 1 = 2! - 1$. Step: assume $S_k = (k+1)! - 1$. Then
$$S_{k+1} = S_k + (k+1)(k+1)! = (k+1)! - 1 + (k+1)(k+1)! = (k+1)!\bigl(1 + (k+1)\bigr) - 1
= (k+2)! - 1.$$
So $S_n = (n+1)! - 1$ for all $n \ge 1$. The role of the table was to hand us the right target;
the induction supplies the certainty the table could not. This is the discipline of the
technique: **tabulate to conjecture, then discharge the conjecture by proof.** $\blacksquare$

### Worked Instance

Resolving the Hook. Tabulate $S_n = \sum_{k=1}^n k\cdot k!$:

| $n$ | $S_n$ | $(n+1)!$ | $(n+1)! - S_n$ |
|-----|-------|----------|----------------|
| $1$ | $1$   | $2$      | $1$            |
| $2$ | $5$   | $6$      | $1$            |
| $3$ | $23$  | $24$     | $1$            |
| $4$ | $119$ | $120$    | $1$            |

The last column is constant at $1$, so the table conjectures $S_n = (n+1)! - 1$. The induction
in the Proof confirms it. (The slick alternative: $k\cdot k! = (k+1)! - k!$ telescopes — but
you would not have *looked* for that telescope without the table pointing at factorials first.)

### Pitfalls

- **Stopping at the table.** A pattern over $n \le N$ is a conjecture, not a theorem. Always
  finish with a real proof.
- **Too few cases.** One or two data points can fit many laws. Compute enough rows that a spurious
  fit becomes implausible — and beware slow-blooming counterexamples like $n^2+n+41$.
- **Bad bookkeeping.** An arithmetic slip in $n=3$ can invent or destroy a pattern. Recompute
  suspicious rows.
- **Wrong starting index.** Whether you begin at $n=0$ or $n=1$ shifts the whole table and can
  disguise a clean formula. Be deliberate about the base case.

:::
:::

## Connections

Prereqs: none — this is the ground-floor discovery move. It feeds directly into
**meta-induction** (the table hands you the statement to induct on), **meta-symmetry** and
**meta-extremal** (small cases reveal which structure to exploit), **meta-wishful-working-backwards**,
and **meta-contradiction** (a small case can *be* your counterexample). Recognition trigger:
any problem with an integer knob — "find a formula for", "for all $n$", "how many", "prove the
sequence …". On the AMC/AIME the answer is often *just* the table; on the Putnam and IMO the
table is step zero before the real argument.
