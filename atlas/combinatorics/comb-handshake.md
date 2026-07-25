At a party, prove that the number of people who have shaken an *odd* number of hands is even —
always, regardless of who shook whose hand. It sounds like it should depend on the details. It
doesn't, and the proof is a single equation counted two ways.

## Discovery

1. Model the party as a **graph**: a vertex for each person, an edge for each handshake between
   two people. The **degree** $\deg(v)$ of a vertex is the number of edges meeting it — that
   person's handshake count. Draw a small example with $4$ people and $3$ handshakes and list
   each degree.
2. Now form the sum $\sum_v \deg(v)$ over all people. Pick one specific handshake (edge) and ask:
   how many times does it get counted as you add up all the degrees? Which two degrees does it
   land in?
3. Using (2), relate the total $\sum_v \deg(v)$ to the number of edges $|E|$. Since every edge is
   counted the same fixed number of times, what clean equation results?
4. From that equation, what can you say about the *parity* of $\sum_v \deg(v)$? (Is it forced to
   be even or odd?)
5. Split the vertices into those of even degree and those of odd degree. The even-degree ones
   contribute an even amount to the total. Using the parity of the total from (4), deduce a
   parity fact about the *number* of odd-degree vertices.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For any finite graph $G$ with vertex set $V$ and edge set $E$ (each edge joining two distinct
vertices, no repeated edges needed for the statement),
$$\sum_{v\in V} \deg(v) = 2\,|E|.$$
This is the **handshake lemma** / degree-sum formula. Two immediate corollaries: the sum of all
degrees is even, and **the number of vertices of odd degree is even**.

### Proof

Count incidences — pairs $(v, e)$ where vertex $v$ is an endpoint of edge $e$ — in two ways
(double counting).

*By vertices:* each vertex $v$ is an endpoint of exactly $\deg(v)$ edges, so the number of
incidences is $\sum_{v} \deg(v)$.

*By edges:* each edge has exactly two endpoints, so it appears in exactly two incidences, giving
$2|E|$ incidences.

The two counts enumerate the same set of incidences, so $\sum_v \deg(v) = 2|E|$.

For the corollary, split $V = V_{\text{even}} \cup V_{\text{odd}}$ by degree parity. Then
$$\sum_{v\in V_{\text{odd}}} \deg(v) = 2|E| - \sum_{v\in V_{\text{even}}}\deg(v),$$
and the right-hand side is even ($2|E|$ is even and a sum of even degrees is even). A sum of odd
numbers is even iff there is an even count of them, so $|V_{\text{odd}}|$ is even. $\blacksquare$

### Worked Instance

The party claim (resolving the Hook): the "odd handshakers" are exactly the odd-degree vertices,
and the lemma's corollary says their number is even. Concretely, take $5$ people with handshake
counts $3,3,2,1,1$: the sum is $10 = 2|E|$, so there are $|E| = 5$ handshakes, and the odd
counts are $3,3,1,1$ — four people, an even number, as forced. No configuration of handshakes can
produce an odd number of odd-handshakers.

### Pitfalls

- The formula is $\sum \deg = 2|E|$, **not** $|E|$: every edge contributes to **two** degrees.
  Forgetting the factor $2$ is the standard error.
- The odd-degree corollary bounds the **count of odd-degree vertices**, not their identities or
  degrees — it only says that count is even (possibly zero).
- With **loops** (an edge from a vertex to itself) the convention is that a loop adds $2$ to that
  vertex's degree, preserving $\sum\deg = 2|E|$; with **multi-edges** each parallel edge counts
  separately. State your graph conventions before invoking the lemma.
- "Everyone shook a different number of hands" is *impossible* in a party of $n\ge 2$ (a separate
  pigeonhole fact); don't conflate it with the handshake lemma.

:::
:::

## Connections

Prereqs: double counting (`comb-double-counting`) — the lemma is its cleanest first application,
counting vertex–edge incidences two ways. It launches all of graph theory (paths, trees, Euler
circuits — an Euler circuit needs *all* degrees even, which the lemma constrains) and supplies a
ready-made parity invariant, linking to parity arguments (`found-parity`) and invariants
(`comb-invariants`). Recognition trigger: any problem about a network of pairwise relations
(handshakes, roads, matches) where you can sum "how many connections each node has."
