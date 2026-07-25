Every integer $n \ge 2$ can be written as a product of primes. "Obvious" — but *how* do you
prove it for **all** $n$ at once? You can't factor infinitely many numbers by hand. There is a
lever that turns finitely much work into a claim about every integer. What is it, and which
*flavour* of it does prime factorization demand?

## Discovery

1. Recall the ordinary domino picture: to conclude $P(n)$ for all $n \ge 1$, you prove $P(1)$ and
   prove "$P(k) \Rightarrow P(k+1)$." Sketch why these two together give $P$ for, say, $n = 5$ —
   trace the chain of implications explicitly.
2. Now try to prove "every $n \ge 2$ is a product of primes" with *ordinary* induction: assume the
   statement for $k$ and try to deduce it for $k+1$. When you factor $k+1 = a\cdot b$ with
   $1 \lt a, b \lt k+1$, does the assumption about *$k$ alone* give you what you need about $a$ and
   $b$? Where does the ordinary hypothesis fall short?
3. What would you need to assume instead so that both factors $a$ and $b$ are covered? State the
   modified inductive hypothesis (about *all* values below $k+1$, not just the immediate
   predecessor).
4. With that stronger hypothesis, complete the factorization argument: handle the case $k+1$ prime
   and the case $k+1$ composite separately.
5. Reflect: ordinary and strong induction assume different amounts. Articulate *when* you are
   forced to reach past the immediate predecessor — what feature of a problem signals "use strong
   induction"?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Induction** proves a statement $P(n)$ for all integers $n \ge n_0$ by two steps: a **base case**
$P(n_0)$, and an **inductive step**. In **ordinary (weak) induction** the step is
$P(k) \Rightarrow P(k+1)$. In **strong (complete) induction** the step assumes *all* prior cases,
$P(n_0), \dots, P(k) \Rightarrow P(k+1)$ — needed when the argument for $k+1$ relies on values
well below $k$ (recursions splitting into smaller sub-instances, e.g. factoring). **Structural
induction** generalizes this to objects built by rules (trees, formulas, well-founded orders):
prove the claim for the base objects and for each constructor assuming it for the components.

The strategy has three practical decisions: **choose the right induction variable** (the
parameter you decrease), **choose weak vs. strong** (does the step need just the predecessor, or
everything below?), and **make the hypothesis strong enough to carry itself** (sometimes you must
prove a *stronger* statement so the step closes — "load the induction"). All are valid because
they rest on the well-ordering of $\mathbb{N}$. Caution: the step must hold for *every* $k \ge n_0$
including the transition *out of* the base cases; a step that silently needs $k \ge 2$ requires
verifying $P$ up to $2$ by hand.

### Proof

Why does induction prove a claim about *infinitely many* $n$ from *finitely much* work? The
justification is the well-ordering principle: **every nonempty subset of $\mathbb{N}$ has a least
element.**

**Strong induction is valid.** Suppose we have proved the base case(s) and the strong step
"$\bigl(P(n_0)\wedge\dots\wedge P(k)\bigr) \Rightarrow P(k+1)$" for all $k \ge n_0$, yet
(for contradiction) $P(n)$ fails for some $n \ge n_0$. Let $S = \{n \ge n_0 : P(n) \text{ false}\}$;
by assumption $S$ is nonempty, so by well-ordering it has a least element $m$. Since the base case
holds, $m \gt n_0$, so $m = k+1$ for some $k \ge n_0$. By minimality of $m$, *every* value in
$\{n_0, \dots, k\}$ satisfies $P$ (they are below $m$, hence not in $S$). The strong step then
forces $P(k+1) = P(m)$ true — contradicting $m \in S$. So $S$ is empty and $P$ holds for all
$n \ge n_0$. (Ordinary induction is the special case where the step uses only $P(k)$; the same
minimal-counterexample argument applies. Structural induction replaces "$\lt$ on $\mathbb{N}$" with
any well-founded order and is valid for the same reason.)

**The factorization example needs the strong form.** Prove $P(n)$: "$n$ is a product of primes,"
for $n \ge 2$. *Base:* $P(2)$ holds ($2$ is prime). *Strong step:* assume $P(2),\dots,P(k)$; show
$P(k+1)$. If $k+1$ is prime, it is a one-factor product of primes — done. If $k+1$ is composite,
write $k+1 = a\cdot b$ with $2 \le a, b \le k$. By the *strong* hypothesis both $a$ and $b$ are
products of primes; concatenating their prime factorizations expresses $k+1$ as a product of
primes. Either way $P(k+1)$ holds. Ordinary induction fails here precisely because $a, b$ can be
much smaller than $k$, so assuming only $P(k)$ is not enough — the recursion splits into *smaller*
sub-instances, the signature of "reach for strong induction." $\blacksquare$

### Worked Instance

Resolving the Hook. Claim: every integer $n \ge 2$ is a product of primes; use **strong**
induction. Base $n=2$: prime, done. Step: assume the claim for all integers from $2$ to $k$, and
consider $k+1$. If $k+1$ is prime, it is itself the product (of one prime). If $k+1$ is composite,
then $k+1 = ab$ with $2 \le a,b \le k$; the inductive hypothesis makes each of $a,b$ a product of
primes, so their juxtaposition is a prime product for $k+1$. By strong induction the claim holds
for all $n\ge 2$. The move that ordinary induction could not make was covering *both* factors at
once — that is exactly why the hypothesis had to reach all the way down, not just to $k$.

### Pitfalls

- **Missing / wrong base case.** No base, no ladder. If the step secretly needs $k \ge 2$, verify
  $P$ by hand up to $2$, not just $P(1)$.
- **Weak where strong is needed.** If $k+1$ decomposes into pieces far below $k$, ordinary
  induction stalls. Recognize the split and assume all prior cases.
- **A hypothesis too weak to carry itself.** Sometimes $P(n)$ can't be proved directly but a
  *stronger* $Q(n) \Rightarrow P(n)$ inducts cleanly. "Load the induction" by proving more.
- **Inducting on the wrong variable.** A problem with several parameters may only yield to
  induction on a specific one (or on a cleverly chosen combined quantity).

:::
:::

## Connections

Prereqs: **meta-small-cases** — the table hands you the statement $P(n)$ to induct on, and the
base case is just the first small case. Induction is the standard *proof* partner to that
*discovery* move, and it discharges conjectures throughout the atlas (**found-fta**,
sum formulas in **series**, recurrence bounds). Strong induction is the well-ordering twin of
infinite descent / minimal counterexample (**meta-contradiction**) and the extremal principle
(**meta-extremal**). Recognition trigger: a "for all $n$" claim, especially one whose $n+1$ case
reduces to *smaller* cases (use strong / structural). Everywhere on the Putnam and IMO.
