Measure the three angles of a paper triangle and they total about $180^\circ$; cut out a
thousand more triangles and every one lands near $180^\circ$. But "I checked a thousand" is
not why it is true — a single triangle you never cut could, for all measurement knows, break
the pattern. What would make the claim certain for *all* triangles at once, including the
ones nobody will ever draw?

## Discovery

You have logic (statements, implication, quantifiers) and the incidence axioms of points,
lines, and planes.

1. Rewrite the claim "vertical angles are equal" (or take the smaller claim "two distinct
   lines meet in at most one point") in the exact shape "**if** … **then** …". Circle the
   part you are *allowed to assume* and underline the part you must *make certain*. What are
   these two parts usually called?
2. A skeptic accepts nothing you have not earned. Starting from your assumed part, you may
   cite only three kinds of already-secured fact to move forward: words agreed to mean
   something (definitions), claims granted without proof (axioms/postulates), and claims
   already proven (earlier theorems). Take "two distinct lines meet in at most one point" and
   list, in order, the specific facts of each kind you would invoke to force the conclusion.
   Why must every single step point back to one of those three sources — never to "it looks
   true"?
3. Testing a thousand triangles is *checking examples*. Your chain in step 2 never once
   said "for this particular pair of lines." Explain what a general chain of reasons buys you
   that a thousand checked cases cannot — connect it to the quantifier "for **all**."
4. Swap the "if" and "then" parts of your statement to form its **converse**. Give a claim
   whose converse is false even though the claim is true (a non-geometric one is fine). What
   does this show about the danger of "reasoning backwards" through an implication?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **mathematical proof** of a statement is a finite chain of deductions that establishes it
with certainty, each link justified by a definition, an axiom (postulate), or a
previously-proven theorem — never by measurement or by examples.

Most theorems have the form of an **implication** $H \Rightarrow C$: the **hypothesis** $H$
is what you assume, the **conclusion** $C$ is what you must derive. A **direct proof** assumes
$H$ and, by a chain of justified steps, arrives at $C$. Because the argument never depends on a
specific instance, it certifies the claim for *all* objects satisfying $H$ at once — the force
of the universal quantifier "for all."

The vocabulary of the deductive method:
- **Undefined terms** (point, line, plane): taken without definition.
- **Definitions**: agreed meanings built from prior terms (e.g. "midpoint").
- **Axioms / postulates**: statements granted without proof (e.g. "two points determine a
  line").
- **Theorems**: statements *earned* by proof; **lemmas** are helper theorems, **corollaries**
  quick consequences.

The **converse** of $H\Rightarrow C$ is $C\Rightarrow H$ — a *different* statement whose truth
does not follow from the original. Proofs may be written in **two-column** form (statements
paired with reasons) or as flowing **paragraph** prose; the logic is identical, only the
layout differs.

### Proof

To exhibit the method, we prove a small theorem rigorously — the same lemma that recurs
throughout incidence geometry.

**Theorem.** Two distinct lines meet in at most one point.

*Statement as an implication.* Hypothesis $H$: "$\ell$ and $m$ are distinct lines." Conclusion
$C$: "$\ell$ and $m$ share at most one point," i.e. they do not share two distinct points.

*Direct proof.* Assume $H$: let $\ell$ and $m$ be lines with $\ell \ne m$. We argue by
contradiction to pin down "at most one." Suppose, contrary to $C$, that $\ell$ and $m$ share
**two** distinct points $A$ and $B$.

| Statement | Reason |
| --- | --- |
| $A$ and $B$ are distinct points. | Supposition (they are the two shared points). |
| There is exactly one line through $A$ and $B$. | Axiom: two points determine a line. |
| $\ell$ passes through $A$ and $B$; so does $m$. | $A,B$ are shared points of $\ell$ and $m$. |
| $\ell = m$. | Uniqueness in the axiom: only one line contains $A,B$, so both names denote it. |
| Contradiction. | This contradicts the hypothesis $\ell \ne m$. |

The supposition "two shared points" forced $\ell = m$, impossible under $H$. Hence $\ell$ and
$m$ cannot share two distinct points — they share at most one. Every link cited a supposition,
an axiom, or the hypothesis; none cited a picture or an example, so the conclusion holds for
*every* pair of distinct lines. $\blacksquare$

### Worked Instance

Contrast the two ways of "supporting" the triangle-angle claim. **Checking:** cut $1000$
triangles, measure, average near $180^\circ$ — persuasive, but it certifies only the $1000$
cut, and measurement carries slop. **Proving:** a direct proof will assume "$T$ is a triangle"
($H$) and, drawing a line through one vertex parallel to the opposite side, chain the equal-angle
facts of parallel lines to force "the three angles sum to $180^\circ$" ($C$) — with no triangle
singled out, so *all* triangles are covered at once, exactly and forever. That parallel-line
proof is a later node; what matters here is the *shape*: assume the hypothesis, deduce the
conclusion by cited reasons, and the universal claim is secured. Note too the converse trap:
"three angles sum to $180^\circ$" is true of triangles, but its converse "any three angles
summing to $180^\circ$ come from a triangle" needs its own separate argument.

### Pitfalls

- **Examples are not proof.** Any number of confirming cases cannot certify a "for all"
  statement; one unchecked case could differ. Examples *suggest*; only a general argument
  *proves*.
- **Do not assume the conclusion.** Slipping $C$ in among your reasons ("circular reasoning")
  proves nothing. Each step must rest on a definition, axiom, or prior theorem — or, in a
  proof by contradiction, on the temporary supposition, kept clearly labelled.
- **A statement and its converse are different claims.** $H\Rightarrow C$ true does *not* make
  $C\Rightarrow H$ true. Each direction earns its own proof.
- **"At most one" needs the two-object supposition.** To prove uniqueness ("at most one"),
  assume two and force them equal — a standard move, not a trick.
- **Two-column vs. paragraph is cosmetic.** Neither format is "more rigorous"; a paragraph
  proof still owes a reason for every claim. Layout never excuses a missing justification.

:::
:::

## Connections

This node turns the informal logic of implication, converse, and quantifiers into the working
method of geometry, using the incidence axioms of points, lines, and planes as its first raw
material — the lemma proved here is the very fact those primitives handed us. From here the
atlas stops asserting and starts *proving*: the parallel-lines angle relationships, and the
congruence theorems **SSS** and **SAS**, are all cast as implications and earned by exactly this
"assume the hypothesis, cite reasons, reach the conclusion" chain. Recognition trigger:
whenever a task says "prove," "show that," or "explain why … for all," recast it as
$H\Rightarrow C$, and hunt for the definitions, axioms, and prior theorems that bridge $H$ to
$C$.

## History

Deductive proof is the defining invention of Greek mathematics. Ancient tradition credits Thales of Miletus ($6$th century BCE) with the first proofs — arguing, rather than merely asserting, geometric facts — and Pythagoras and his school extended the practice. Aristotle ($4$th century BCE) then analyzed the logic of deduction itself. The monument of the tradition is Euclid's *Elements* ($c.$ $300$ BCE), which derived hundreds of theorems from a handful of definitions, postulates, and common notions, setting the template for rigorous argument for two millennia. The axiomatic ideal was perfected by David Hilbert in $1899$. Proof matters because it is what distinguishes mathematics from observation: a claim, once proved, is settled by reason alone.
