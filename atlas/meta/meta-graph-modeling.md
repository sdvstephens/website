Six people meet at a dinner. Any two either already know each other or are strangers. Claim: among the six
there are always three who *all* know each other, or three who are *all* mutual strangers — no matter who
knows whom. Six seems too few to force such structure. Why can't the acquaintances be arranged to dodge every
such trio?

## Discovery

1. Draw the six people as six dots. For each of the pairs, draw a segment joining them, colored red if the two
   know each other and blue if they are strangers. What object have you built, and how many segments meet at
   each dot?
2. Fix one dot $v$. It sends out five colored segments. Argue that at least three of them must share a single
   color. Which counting principle forces this?
3. Suppose (by symmetry in the two colors) that $v$ is joined in red to three dots $A,B,C$. Look at the three
   segments *among* $A,B,C$. If none of them is red, what one color are all three, and what trio does that
   hand you? If instead at least one of them, say $AB$, is red, examine the triangle $v,A,B$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Graph modeling.** Re-encode a problem's objects as **vertices** and its key relation as **edges** — plain,
directed, colored, or weighted, as the relation demands. Once translated, the machinery of graphs becomes
available: degrees and the handshake lemma, connectivity and trees, bipartiteness, edge- and vertex-colorings,
Euler and Hamilton traversals, and Ramsey-type "large enough forces structure" theorems. Frequently the
original question, opaque in its native language, becomes a one-line consequence of a standard graph fact.

The craft — and the only hard part — is deciding *what the vertices are and what an edge means*. People and
acquaintance? Cities and roads? States of a puzzle and legal moves? Tasks and conflicts? The right encoding
turns the problem into a graph you already know how to reason about.

### Proof

Why is "redraw it as a graph" a legitimate deductive step and not mere illustration?

A model is a **faithful re-encoding**: a bijection between the problem's configurations and the graphs (with
their coloring/orientation) such that the relation you care about corresponds exactly to adjacency. Under such
a bijection, a statement about the configuration is *true if and only if* the matching statement about the
graph is true. So any theorem proved about the graph transfers back verbatim. The modeling step contributes no
new assumptions; it only renames objects and relations so that graph theorems can be applied.

To see the technique deliver, prove the pigeonhole step the Hook needs. A vertex $v$ has five incident edges,
each colored from a palette of two. If each color appeared at most twice, the total would be at most $4 \lt 5$;
so some color appears at least $\lceil 5/2\rceil = 3$ times. That is the general **pigeonhole** bound: $m$
objects in $k$ boxes force a box with at least $\lceil m/k\rceil$. With $m=5$, $k=2$, three edges share a
color. $\blacksquare$

### Worked Instance

**Resolving the Hook.** Model the six people as the vertices of the complete graph $K_6$ and color each edge
red (acquainted) or blue (strangers). Pick a vertex $v$; by the pigeonhole step above, at least three of its
five edges are the same color — say red, to $A,B,C$. Now inspect the triangle on $A,B,C$:
- if any edge among them, say $AB$, is red, then $v,A,B$ are pairwise red — three mutual acquaintances;
- if none is red, then $A,B,C$ are pairwise blue — three mutual strangers.

Either way a monochromatic triangle exists, proving the claim. (Six is sharp: color the edges of $K_5$ by
making the outer $5$-cycle red and the five "diagonals" blue; neither color contains a triangle, so five
people need not force such a trio.)

### Pitfalls

- **Choose the encoding deliberately.** Sometimes the objects should be vertices and relations edges;
  sometimes the *relations* should be vertices (a conflict graph, a line graph). Wrong encoding, no leverage.
- **Directed or undirected?** A one-way relation (beats, points to, divides) needs a directed graph; forcing
  it undirected loses information.
- **Simple, multi, or loops?** Decide whether repeated edges or self-loops can occur, and whether your graph
  theorem assumes a *simple* graph.
- **Colors and weights are part of the model.** A two-relation problem is an edge-$2$-coloring; don't flatten
  it to a plain graph and lose the distinction.

:::
:::

## Connections

Prereq: **comb-graph-connectivity** (paths, components, trees — the structural facts modeling makes usable).
Graph modeling routes problems into **comb-handshake** (degree arguments), **comb-planar-euler**,
**comb-eulerian-hamiltonian**, and Ramsey theory, and pairs constantly with **comb-pigeonhole** (as here).
Recognition trigger: a problem about pairwise relations — who knows whom, what conflicts with what, which
states reach which — especially one begging for structure among "enough" objects. Turn objects into vertices,
the relation into edges, and invoke what graphs already guarantee. A Putnam, AMC/AIME, and IMO regular.

## History

Graph theory itself was born from an act of modeling: Leonhard Euler's 1736 solution of the Seven Bridges of
Königsberg replaced landmasses and bridges by vertices and edges, extracting the degree condition for an Euler
walk and inventing the discipline in the process. The word *graph* in this sense is James Joseph Sylvester's
(1878), and the first textbook was Dénes König's *Theorie der endlichen und unendlichen Graphen* (1936). The
dinner-party statement is the smallest case of Ramsey's theorem, proved by Frank Ramsey in a 1930 paper on
formal logic and popularized as the "party problem"; it launched Ramsey theory, the study of how large
structures unavoidably contain order. Across all of it the recurring lesson — codified by problem-solving
teachers such as Paul Zeitz — is that recognizing a hidden graph is often the entire solution.
