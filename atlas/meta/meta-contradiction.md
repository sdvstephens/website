Is $\sqrt{2}$ a fraction? Suppose it were — say $\sqrt 2 = p/q$ in lowest terms. You'll find that
$p$ and $q$ are *both even*, contradicting "lowest terms." Where does the evenness come from, and
why does one contradiction settle the question for *every* possible fraction at once?

## Discovery

1. Assume, for the sake of argument, $\sqrt 2 = p/q$ with $p, q$ positive integers sharing no
   common factor. Square both sides and clear the denominator. What equation relates $p^2$ and
   $q^2$?
2. From $p^2 = 2q^2$: what does this force about the parity of $p^2$, and hence of $p$ itself?
   (Recall: a square is even iff its root is even.)
3. Write $p = 2r$ and substitute back. Solve for $q^2$. What does the resulting equation force
   about the parity of $q$?
4. You assumed $p, q$ share no common factor, yet steps 2–3 show both are even. Name the
   contradiction. What must therefore be false — and what does that establish about $\sqrt 2$?
5. Reflect on the shape of the argument. You never examined a *specific* fraction; you assumed a
   generic one and derived an impossibility. Separately, notice you could have phrased it as: *if*
   a fraction for $\sqrt 2$ existed, a *smaller* one $r/(q/2)$-style would too, forever. What
   principle rules out "smaller forever"?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Proof by contradiction** (reductio ad absurdum): to prove a statement $S$, assume $\lnot S$ and
derive a logical impossibility; since the reasoning is valid, $\lnot S$ is untenable, so $S$
holds. Two powerful specializations for "*no object with property $P$ exists*":

- **Minimal counterexample.** Assume an object with $P$ exists; among all such, pick a *smallest*
  (by some $\mathbb{N}$-valued measure — well-ordering guarantees a least). Derive a contradiction
  from its minimality (often by producing a *smaller* one).
- **Infinite descent** (Fermat). Assume a solution exists; construct from it a *strictly smaller*
  positive-integer solution; iterate to get an infinite strictly-decreasing sequence of positive
  integers — impossible. Hence no solution exists.

These apply to irrationality proofs, non-existence of integer solutions (Diophantine), and any
"it is impossible / there is no such" claim. All three rest on: a valid derivation of a falsehood
refutes its premise, and (for the last two) **there is no infinite strictly-decreasing sequence
of positive integers**. Caution: contradiction proves *non-existence/impossibility* well but is
often *not* the cleanest route to a constructive/existence claim — and you must actually reach a
genuine contradiction, not merely something surprising.

### Proof

Why are these valid, and why does one contradiction dispatch infinitely many cases?

**Reductio is valid.** If from premise $\lnot S$ (together with true axioms) a valid deduction
reaches a statement of the form $Q \wedge \lnot Q$, then $\lnot S$ cannot hold while the axioms
do; hence $S$. The single contradiction settles *all* cases because we assumed a **generic**
counterexample: we never used any specific value, so the impossibility we derived applies to every
candidate uniformly. In the $\sqrt 2$ proof we wrote $p/q$ for an *arbitrary* lowest-terms
fraction; the contradiction "both even" arises no matter which fraction, so *no* fraction works.

**The $\sqrt 2$ argument, in full.** Suppose $\sqrt2 = p/q$ with $\gcd(p,q)=1$, $p,q \gt 0$. Then
$p^2 = 2q^2$, so $p^2$ is even, so $p$ is even (an odd number's square is odd), say $p = 2r$.
Substituting, $4r^2 = 2q^2 \Rightarrow q^2 = 2r^2$, so $q^2$ is even and $q$ is even. But then
$2 \mid \gcd(p,q) = 1$, impossible. So no such fraction exists: $\sqrt 2$ is irrational.

**Infinite descent is valid, and gives the same result.** The "both even" step can be iterated:
from a solution $(p,q)$ of $p^2 = 2q^2$ in positive integers, we produced $(r, q/2) = (p/2, q/2)$,
again a positive-integer solution (both were even) with strictly smaller entries. Iterating yields
$q \gt q/2 \gt q/4 \gt \cdots$, an *infinite strictly decreasing sequence of positive integers*.
No such sequence exists: any nonempty set of positive integers has a least element (well-ordering),
which such a sequence would have to undercut. Contradiction, so no solution exists — $\sqrt2$ is
irrational. **Minimal counterexample** packages the same idea: take the solution with *least* $q$;
descent produces a smaller one, contradicting leastness. The engine in every case is
well-ordering of $\mathbb{N}$. $\blacksquare$

### Worked Instance

Resolving the Hook. Assume $\sqrt2 = p/q$ in lowest terms. Then $p^2 = 2q^2$ makes $p^2$ even,
hence $p = 2r$ even; substituting gives $q^2 = 2r^2$, making $q$ even too. Both even contradicts
$\gcd(p,q) = 1$. So the assumption is impossible and $\sqrt 2$ is irrational. The evenness cascade
came from "$2 \mid p^2 \Rightarrow 2\mid p$," and the argument needed no specific fraction — a
generic one sufficed, which is why *all* fractions are excluded at a stroke. (Descent view: each
solution spawns a strictly smaller one, forbidden by well-ordering.)

### Pitfalls

- **No genuine contradiction.** Deriving something merely *unexpected* is not a proof. You must
  reach an outright impossibility ($Q$ and $\lnot Q$, or a false arithmetic fact).
- **Descent without a positive-integer decrease.** Infinite descent needs a *strictly smaller
  positive integer* each time. A quantity that can stall, or go non-integer/negative, breaks it.
- **Overusing contradiction.** For existence/construction, a direct argument is usually cleaner;
  contradiction shines for *non*-existence and impossibility. Don't wrap a direct proof in a
  needless "suppose not."
- **Assuming the wrong negation.** $\lnot(\forall x\, P)$ is $\exists x\, \lnot P$; negate
  quantifiers carefully or you refute the wrong statement.

:::
:::

## Connections

Prereqs: **meta-small-cases** (a small case can *be* the counterexample you exhibit, or reveal
the descent step). Minimal-counterexample and descent are the well-ordering twins of
**meta-extremal** (grab the least object) and **meta-induction** (same principle, contrapositive
form). Descent is the historical root of many number-theory non-existence proofs and underlies
**nt-vieta-jumping**; the infinitude of primes (**nt-infinitude-primes**) is a classic reductio.
Recognition trigger: "prove there is no…", "prove $x$ is irrational", "show no integer solution" —
assume one exists and squeeze a contradiction, ideally by making something smaller forever.
Constant on the Putnam and IMO.
