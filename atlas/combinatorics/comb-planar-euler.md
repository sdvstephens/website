Draw any connected network on paper without letting edges cross, and count three things: dots $V$, lines
$E$, and regions $F$ (including the endless outer region). Every single time, $V-E+F=2$. A cube's
skeleton gives $8-12+6=2$; a triangle gives $3-3+2=2$. One equation ties together every crossing-free
drawing, and it quietly forbids certain graphs from ever being drawn flat at all.

## Discovery

1. Draw a few **connected planar** graphs — graphs drawn in the plane with no crossing edges — and for
   each count $V$, $E$, and the number of regions $F$ the drawing carves the plane into (count the
   unbounded outer region too). Compute $V-E+F$ each time. What value recurs?
2. Start instead from a **spanning tree** of your graph (connected, no cycles, reaching every vertex).
   Drawn in the plane, how many regions does a tree create? Using the tree's edge count from
   connectivity, evaluate $V-E+F$ for the tree alone.
3. Now restore the non-tree edges one at a time. Each such edge joins two vertices already connected
   through the tree, so drawing it (without crossings) splits one region into two. What does adding one
   edge do to $E$, to $F$, and therefore to the combination $V-E+F$?
4. Conclude the value of $V-E+F$ for the whole connected planar graph, and explain why it never depends
   on which drawing you chose.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Euler's formula.** For any connected graph drawn in the plane with no edge crossings, with $V$
vertices, $E$ edges, and $F$ faces (regions, including the outer one),
$$V-E+F=2.$$
Two corollaries for a **simple** connected planar graph with $V\ge3$:
$$E\le 3V-6,\qquad\text{and if the graph is triangle-free, }E\le 2V-4.$$
These bounds prove that $K_5$ (five mutually joined vertices) and $K_{3,3}$ (the "three utilities" graph)
are **not planar** — they cannot be drawn without a crossing.

### Proof

Induct on the number of edges of a connected planar graph, starting from a spanning tree.

*Base — a tree.* A tree is connected and acyclic, so its planar drawing bounds no region: there is only
the single outer face, $F=1$. A tree on $V$ vertices has $E=V-1$ edges (connectivity result), so
$V-E+F=V-(V-1)+1=2$.

*Step — add one edge.* Build the graph from a spanning tree by adding the remaining edges one at a time.
An added edge connects two vertices already joined by a path in the current graph; together with that
path it encloses a region, so drawing it (without crossings) divides one existing face into two,
increasing $F$ by $1$. It also increases $E$ by $1$ while $V$ is unchanged. Hence
$V-E+F$ changes by $-1+1=0$: it stays equal to $2$. After all edges are added we still have $V-E+F=2$.
$\blacksquare$

**Edge bound.** In a simple planar graph with $V\ge3$, every face is bounded by at least $3$ edges, and
each edge borders at most $2$ faces, so counting edge–face incidences gives $2E\ge3F$, i.e.
$F\le\tfrac{2}{3}E$. Substituting into $F=2-V+E$ yields $2-V+E\le\tfrac23E$, so
$\tfrac13E\le V-2$, i.e. $E\le3V-6$. (Triangle-free forces every face to have $\ge4$ edges, giving
$2E\ge4F$ and $E\le2V-4$.)

### Worked Instance

**Cube.** $V=8$, $E=12$, $F=6$: $8-12+6=2$. ✓

**$K_5$ is nonplanar.** It has $V=5$ and $E=\binom52=10$. If it were planar, $E\le3V-6=9$ would force
$10\le9$, a contradiction. So $K_5$ cannot be drawn without a crossing.

**$K_{3,3}$ is nonplanar.** Here $V=6$, $E=9$, and it is triangle-free (bipartite), so planarity would
need $E\le2V-4=8$; but $9\gt8$. Contradiction, so $K_{3,3}$ is nonplanar too.

### Pitfalls

- **Count the outer face.** $F$ includes the unbounded region; forgetting it makes $V-E+F=1$ and breaks
  the formula.
- **Connected is required.** For a planar graph with $c$ connected components the formula reads
  $V-E+F=1+c$; Euler's "$=2$" is the single-component case.
- **The bound $E\le3V-6$ needs simple and $V\ge3$.** Multigraphs, loops, or tiny graphs can violate it;
  and the bound is *necessary*, not sufficient — passing it does not guarantee planarity.
- **A face is bounded by $\ge3$ edges only when the graph is simple.** With multiple edges a face can
  have just $2$ boundary edges, invalidating $2E\ge3F$.

:::
:::

## Connections

Euler's formula rests on the tree edge count $E=V-1$ (`comb-graph-connectivity`) as its base case and on
edge–face double counting for its corollaries. It classifies the five Platonic solids, bounds edges in
sparse planar networks, and — via the forbidden minors $K_5,K_{3,3}$ — opens Kuratowski's theorem and
the four-color theorem. Recognition trigger: a problem about regions of a planar drawing, a
"can this be drawn without crossings?" question, or a polyhedron's face/edge/vertex tally — reach for
$V-E+F=2$ and its $E\le3V-6$ consequence.
