You want to link $n$ towns by roads so that every town can reach every other. What is the fewest roads
that will do it? No matter how the towns are placed, the answer is exactly $n-1$ — and the moment you
add road number $n$, you have created a loop you did not need. Minimal connection has a rigid shape,
and that shape is a tree.

## Discovery

1. A **graph** has vertices and edges; a **walk** follows edges vertex to vertex, a **path** is a walk
   with no repeated vertex, a **cycle** is a path that returns to its start, and a graph is
   **connected** if some path joins every pair of vertices. Draw several *connected, cycle-free* graphs
   (these are **trees**) on $3$, $4$, and $5$ vertices, and tally vertices $V$ against edges $E$ for
   each. What relation between $V$ and $E$ keeps appearing?
2. Take any tree and add a single new edge between two existing vertices. What structure must appear?
   Conversely, delete any one edge of a tree: what happens to connectivity?
3. To pin down the edge count, root a tree at any vertex and pair each *non-root* vertex with the unique
   edge stepping toward the root from it. Is this a bijection between non-root vertices and edges? What
   edge count does it force?
4. For a general connected graph (cycles allowed), argue why $E\ge V-1$, and identify exactly when
   equality holds.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Basic vocabulary: **walk / path / cycle**, **connected**, **connected components** (the maximal
connected pieces), and a **tree** = a connected graph with no cycle. The central fact:

**Tree edge count.** A tree on $n$ vertices has exactly $n-1$ edges. Equivalently, for a graph on $n$
vertices, any two of the following imply the third (and characterize a tree): *connected*,
*acyclic*, *has $n-1$ edges*. A tree also has a **unique path between any two vertices**, and every
tree with $n\ge2$ vertices has at least two **leaves** (degree-$1$ vertices). Consequently any connected
graph satisfies $E\ge n-1$, with equality iff it is a tree.

### Proof

**Every finite tree with $n\ge2$ vertices has a leaf.** Take a longest path $v_0v_1\cdots v_\ell$
(finite since the graph is finite). Its endpoint $v_0$ has no neighbor outside the path — a neighbor
$w\notin\{v_1,\dots\}$ would extend the path, and a neighbor $v_j$ with $j\ge2$ would form a cycle
$v_0v_1\cdots v_j v_0$ — so $v_0$'s only neighbor is $v_1$, making $v_0$ a leaf.

**A tree on $n$ vertices has $n-1$ edges**, by induction on $n$. For $n=1$ there are $0$ edges. For
$n\ge2$, remove a leaf $v$ and its single incident edge. The result is still connected (only $v$'s
pendant edge was cut, and every other pair kept its path, which never needed $v$) and still acyclic (a
subgraph of an acyclic graph), so it is a tree on $n-1$ vertices, with $(n-1)-1=n-2$ edges by the
inductive hypothesis. Adding $v$'s edge back gives $n-1$. $\blacksquare$

**Connected $\Rightarrow E\ge n-1$.** A connected graph contains a spanning tree (repeatedly delete an
edge lying on a cycle; connectivity is preserved and cycles decrease until none remain, leaving a tree
on all $n$ vertices). That tree has $n-1$ edges, so the original has $E\ge n-1$; equality means no edge
could be removed, i.e. the graph was already a tree.

### Worked Instance

The Hook: connecting $n$ towns needs $\ge n-1$ roads (connected $\Rightarrow E\ge n-1$), and $n-1$
suffices — a path $1{-}2{-}3{-}\cdots{-}n$ is a tree linking all towns with exactly $n-1$ roads. Adding
any further road creates a cycle by step $2$: the two endpoints of the new road were already joined by
a path in the tree, and that path plus the new road is a cycle. Concretely, $5$ towns take $4$ roads,
and the $5$th road necessarily closes a loop.

### Pitfalls

- **A tree is connected *and* acyclic.** A forest (acyclic but possibly disconnected) on $n$ vertices
  with $c$ components has $n-c$ edges, not $n-1$; the "$-1$" is one component's worth.
- **"$n-1$ edges" alone is not a tree.** A graph with $n-1$ edges could be disconnected with a cycle;
  you need one more property (connected *or* acyclic) to force a tree.
- **Cycle vs. component count.** Adding an edge inside one component creates a cycle; adding one between
  two components merges them and creates no cycle. Track which case you are in.
- **Leaves need $n\ge2$.** The single-vertex tree has no edge and no leaf; the "two leaves" statement
  starts at $n=2$.

:::
:::

## Connections

Connectivity and trees supply the scaffolding for the rest of graph theory, built on the degree/
handshake bookkeeping (`comb-handshake`). The edge count $n-1$ is the base case that makes Euler's
polyhedral formula run (`comb-planar-euler`), and connectivity plus degree parity decides when
edge- or vertex-traversals exist (`comb-eulerian-hamiltonian`). Spanning trees also underlie network
design and Cayley's count of labeled trees. Recognition trigger: "minimal connection," "no redundant
links," or "unique route between nodes" — you are looking at a tree, so invoke $E=V-1$.
