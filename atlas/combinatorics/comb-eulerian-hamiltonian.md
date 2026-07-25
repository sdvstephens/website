Königsberg had four riverbanks joined by seven bridges, and the townsfolk wanted a Sunday stroll
crossing every bridge exactly once and returning home. Nobody could do it. Euler proved *nobody ever
could* — and his reason was not about cleverness but about a parity count of how many bridges meet each
bank. That single parity idea decides every "use each edge once" puzzle.

## Discovery

1. Suppose a closed route uses **every edge exactly once** and returns to its start (an *Eulerian
   circuit*). Follow it and watch a single vertex: every time the route arrives it must also leave,
   pairing up the edges at that vertex. What does this force about each vertex's degree — its number of
   incident edges?
2. Now allow the route to *end somewhere else* (an *Eulerian path*, every edge once, start $\ne$ end).
   Treat the start and end vertices separately from the interior ones. What degree parity is forced at
   the two endpoints, and what parity at every other vertex?
3. Königsberg's four banks have $3,3,3,5$ bridges meeting them. Compare this against what your parity
   findings from steps $1$–$2$ permit. Can a bridge-crossing walk (returning or not) exist?
4. A different quest: a **Hamiltonian cycle** visits every *vertex* exactly once and returns. Try to
   find a clean degree-parity test for these the way you did for edges. Attempt it on a small graph —
   what obstruction shows the vertex problem is not governed by the same simple rule?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Euler's theorem (edge traversals).** A connected graph has an **Eulerian circuit** (a closed walk
using every edge exactly once) **iff every vertex has even degree**. It has an **Eulerian path** (every
edge once, not closed) **iff exactly two vertices have odd degree** (the path's two endpoints); zero
odd vertices gives a circuit, and no other count is possible.

**Hamiltonian traversals (vertex traversals).** A **Hamiltonian cycle** visits every vertex exactly
once and returns. There is **no simple degree criterion**; deciding Hamiltonicity is computationally
hard in general. A useful *sufficient* condition is **Dirac's theorem**: a simple graph on $n\ge3$
vertices in which every vertex has degree $\ge n/2$ has a Hamiltonian cycle.

For Königsberg (degrees $3,3,3,5$: four odd vertices) **no** Eulerian path or circuit exists.

### Proof

**Necessity (even degrees).** In an Eulerian circuit, each visit to a vertex $v$ enters along one edge
and exits along another, using edges in pairs; since every edge at $v$ is used exactly once, the edges
at $v$ split perfectly into entry/exit pairs, so $\deg(v)$ is even. For an Eulerian path the interior
vertices pair up the same way (even degree), while the start contributes an unpaired first exit and the
end an unpaired final entry, making exactly those two vertices odd. As total degree is even (handshake),
the number of odd-degree vertices is even, so "exactly two" is the only non-circuit possibility.

**Sufficiency (connected, all even $\Rightarrow$ Eulerian circuit).** Induct on the number of edges.
With all degrees even and at least one edge, start at any vertex and keep walking along unused edges;
you can only get stuck back at the start, because arriving at any other vertex $u$ uses an odd number of
$u$'s edges and leaves an unused one to exit. This yields a closed trail $C$. Remove $C$'s edges: every
remaining vertex still has even degree, and each connected component with edges shares a vertex with $C$
(the original graph is connected). By induction each such component has an Eulerian circuit; splice each
into $C$ at a shared vertex to obtain an Eulerian circuit of the whole graph. An Eulerian *path* with
two odd vertices $s,t$ follows by adding a temporary edge $st$ (making all degrees even), taking the
circuit, and deleting $st$. $\blacksquare$

*(Dirac's theorem is proved by a longest-path rotation argument; we cite it as a sufficient condition
rather than reprove it here.)*

### Worked Instance

**Königsberg.** Model each landmass as a vertex and each bridge as an edge; the degrees are $3,3,3,5$ —
**four** vertices of odd degree. An Eulerian path needs $0$ or $2$ odd vertices and an Eulerian circuit
needs $0$; four odd vertices satisfies neither, so no walk crosses every bridge exactly once. This is
the Hook, resolved by counting parities alone.

**A positive case.** A single triangle $K_3$ has all degrees $2$ (even), so it has an Eulerian circuit:
go around the three edges and return. It is also Hamiltonian (the same cycle visits each vertex once).

### Pitfalls

- **Eulerian = every *edge* once; Hamiltonian = every *vertex* once.** They are different problems; a
  graph can have one, both, or neither. Don't apply the degree test to Hamiltonicity.
- **The degree test needs connectivity.** Even degrees alone are not enough if the edges fall into
  separate components; the graph must be connected (ignoring isolated vertices).
- **"At most two odd vertices" — and never exactly one.** The handshake lemma forces an even number of
  odd-degree vertices, so an Eulerian path has $0$ or $2$ odd vertices, never $1$ or $3$.
- **Dirac is sufficient, not necessary.** A graph can be Hamiltonian with small minimum degree (e.g. a
  long cycle $C_n$ has all degrees $2$); failing Dirac's bound does not rule out a Hamiltonian cycle.

:::
:::

## Connections

Euler's criterion sits on connectivity plus the handshake parity of degrees (`comb-graph-connectivity`)
and historically launched graph theory. Eulerian circuits underlie route-inspection ("Chinese postman")
problems and de Bruijn sequences; the Hamiltonian side connects to the traveling salesman problem and
computational hardness. Recognition trigger: "traverse every road/bridge exactly once" — check degree
parities for an Eulerian trail; "visit every city exactly once" — expect a hard Hamiltonian question
with only sufficient conditions available.
