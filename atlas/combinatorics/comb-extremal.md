$17$ people are at a party; some pairs are friends. Prove that you can seat everyone around one or
more round tables so that each person sits between two of their friends — provided everyone has at
least two friends. You will not build the seating by hand. Instead you will grab the *longest*
chain of mutual friends already present and squeeze a contradiction out of its endpoints.

## Discovery

1. Among a finite collection of objects, an extreme one always exists: a finite nonempty set of
   integers has a maximum, a finite family of paths has a longest. Why does finiteness guarantee
   this, and why can it fail for infinite collections?
2. Take a warm-up. In a finite set $S$ of people where everyone has at least one friend *inside
   $S$*, consider a **longest** chain $v_1 - v_2 - \dots - v_k$ of successive friends (no repeats).
   Focus on the endpoint $v_1$. Its friends must all lie somewhere specific relative to the chain —
   where, and why can none of them lie *outside* it?
3. Suppose now everyone has at least **two** friends inside $S$. Endpoint $v_1$ then has two
   friends, both (by (2)) among the chain vertices. At least one of them is some $v_j$ with
   $j \ge 3$. What structure does the edge $v_1 - v_j$ create together with the chain segment
   $v_1 - v_2 - \dots - v_j$?
4. That structure is a cycle. Argue that its existence lets you seat those people around a table.
   For the remaining people (if any), what smaller problem are you left with, and why does the
   *same* argument apply again?
5. State the general move you kept using: to prove some configuration must exist, don't construct
   it — assume a finite scenario, pick an **extreme** object in it, and show a contradiction or a
   forced structure at its boundary.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The extremal principle.** In any *finite* (nonempty) collection of objects with a numerical
attribute — size, length, weight, position — there is one that is largest and one that is smallest.
Choosing such an **extremal** object and examining the constraints at its boundary frequently
forces the conclusion, because "nothing bigger exists" (or "nothing smaller") is a powerful piece
of information. As a concrete instance, in a finite graph where every vertex has degree at least
$2$, taking a longest path shows a cycle must exist. The principle proves *existence* results
without explicit construction; its content is the choice of the right quantity to extremize.

### Proof

We prove the instance used above, then note the general schema. *Claim: a finite graph in which
every vertex has degree $\ge 2$ contains a cycle.* Since the graph is finite, there are finitely
many paths (no repeated vertices), so a **longest** path exists; call it
$v_1 - v_2 - \dots - v_k$. Consider its endpoint $v_1$, which has degree $\ge 2$, so it has at
least two neighbors. Every neighbor of $v_1$ must lie on the path: if $v_1$ had a neighbor $w$ off
the path, then $w - v_1 - v_2 - \dots - v_k$ would be a strictly longer path, contradicting
maximality. So $v_1$'s (at least two) neighbors are all among $v_2,\dots,v_k$. One neighbor is
$v_2$; a second is some $v_j$ with $j \ge 3$. Then $v_1 - v_2 - \dots - v_j - v_1$ is a cycle.
$\blacksquare$

The schema is general: for an existence claim, assume a finite instance, select an object
maximizing (or minimizing) a well-chosen quantity, and derive that the extremal choice cannot sit
at the boundary without producing the desired structure or a contradiction.

### Worked Instance

The party (resolving the Hook): model people as vertices, friendships as edges; everyone has
degree $\ge 2$. By the result, a cycle exists — seat those people around a table in cycle order,
each flanked by two friends. Remove them; every remaining person lost only table-mates who are now
gone, but the problem statement's degree condition is applied to the *whole* graph, so on the
remainder we instead observe: the induced graph may lose the degree-$\ge 2$ property, so restrict
attention to a maximal set where it holds, or simply repeat the longest-path extraction on each
component with minimum degree $\ge 2$. Each application peels off at least one cycle (table);
since the party is finite, the process terminates, seating everyone whose component satisfies the
degree condition. The engine throughout is: pick the longest path and read off its endpoint.

### Pitfalls

- **Finiteness is essential.** An infinite set of objects need not have a maximum (the positive
  integers have no largest), so the extremal object may not exist; always confirm the collection
  is finite (or bounded and discrete).
- **Extremize the right quantity.** The method lives or dies by the choice — longest path, minimal
  counterexample, heaviest vertex. A poorly chosen attribute yields no leverage at the boundary.
- The principle gives **existence, not construction**: it proves the seating/cycle *is possible*,
  typically without an efficient way to produce it.
- Watch that the extremal object's boundary condition truly forces something. "Take the largest"
  is only useful if being largest *conflicts* with the configuration's rules.

:::
:::

## Connections

Prereqs: the addition principle and basic counting (`comb-add-mult`) to frame the finite structures
involved. This is the counting/graph-flavored treatment; the general heuristic — *and its
minimal-counterexample and infinite-descent cousins* — lives in `meta-extremal`, which you should
consult for the broader strategy. It pairs naturally with the pigeonhole principle
(`comb-pigeonhole`) and invariants (`comb-invariants`) as the trio of "forcing" arguments.
Recognition trigger: an existence or "there must be some configuration" claim with no obvious
construction — reach for "consider the longest / largest / minimal counterexample."
