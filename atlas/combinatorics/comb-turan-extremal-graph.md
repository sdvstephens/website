You have $n$ people and want to draw as many "friendship" edges as possible while making sure **no
three of them are mutually friends** — no triangle anywhere. How many edges can you fit? For
$n = 6$ the answer is $9$, achieved by splitting the six into two groups of three and joining every
cross pair. Push further: forbid any group of *four* mutual friends instead of three, and a clean
formula still governs the maximum.

## Discovery

A graph $G$ has $n$ vertices; $e(G)$ is its number of edges. "Triangle-free" means no three
vertices are pairwise adjacent (no $K_3$); "$K_{r+1}$-free" means no $r+1$ vertices are pairwise
adjacent.

1. **Build a big triangle-free graph.** Split the $n$ vertices into two groups of sizes $p$ and
   $n-p$, and join every vertex in one group to every vertex in the other (no edges inside a
   group). Why is this graph triangle-free? Write its edge count as a function of $p$, and choose
   $p$ to maximize it. What value of $p$, and how many edges?
2. **Show you can't do better.** Suppose $G$ is triangle-free and $uv$ is an edge. What can you say
   about the neighborhoods of $u$ and $v$ — can they share a vertex? Deduce a bound on
   $\deg(u) + \deg(v)$. Now sum a well-chosen quantity over all vertices or all edges and squeeze
   out an upper bound on $e(G)$. Compare it with step 1.
3. **Forbid larger cliques.** Generalize the construction: to avoid $K_{r+1}$, split the $n$
   vertices into $r$ groups and join all pairs in *different* groups (a complete $r$-partite graph).
   Why does this avoid $K_{r+1}$? To maximize edges, how should the group sizes compare to one
   another?
4. **Count the edges of the balanced construction** when $n$ is a multiple of $r$, and express the
   number of *non-edges* to make the count easy. What fraction of all $\binom n2$ possible edges is
   present?
5. Conjecture the exact maximum for $K_{r+1}$-free graphs, and note which graph attains it.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

- **Mantel's theorem (1907).** A triangle-free graph on $n$ vertices has at most
  $\left\lfloor \dfrac{n^2}{4}\right\rfloor$ edges. Equality holds **only** for the balanced
  complete bipartite graph $K_{\lfloor n/2\rfloor,\,\lceil n/2\rceil}$.
- **Turán's theorem (1941).** For $r \ge 1$, a graph on $n$ vertices with no $K_{r+1}$ has at most
  $$e(G) \le \left(1 - \frac1r\right)\frac{n^2}{2}$$
  edges. The unique maximizer is the **Turán graph** $T(n,r)$: the complete $r$-partite graph whose
  part sizes are as equal as possible (each of size $\lfloor n/r\rfloor$ or $\lceil n/r\rceil$).
  When $r \mid n$, each part has $n/r$ vertices and $e(T(n,r)) = \left(1 - \tfrac1r\right)\tfrac{n^2}2$
  exactly. Mantel is the case $r = 2$.

### Proof

**Mantel, via Cauchy–Schwarz.** Let $G$ be triangle-free with edge set $E$ and degrees
$d_1,\dots,d_n$. If $uv \in E$, then $u$ and $v$ have **no** common neighbor (a common neighbor $w$
would make a triangle $uvw$), so $\deg(u) + \deg(v) \le n$: the neighbor sets of $u$ and $v$ are
disjoint subsets of the $n$ vertices. Sum this over every edge:
$$\sum_{uv \in E}\big(\deg u + \deg v\big) \le n\,|E|.$$
The left side counts each vertex $v$ once for every edge incident to it, contributing $\deg(v)$
each time, so it equals $\sum_v \deg(v)^2$. Hence $\sum_v \deg(v)^2 \le n\,|E|$. By Cauchy–Schwarz,
$$\sum_v \deg(v)^2 \ge \frac{\left(\sum_v \deg v\right)^2}{n} = \frac{(2|E|)^2}{n} = \frac{4|E|^2}{n}.$$
Combining, $\dfrac{4|E|^2}{n} \le n|E|$, so $|E| \le \dfrac{n^2}{4}$; since $|E|$ is an integer,
$|E| \le \big\lfloor \tfrac{n^2}4\big\rfloor$.

**Turán, via Zykov symmetrization.** Among all $K_{r+1}$-free graphs on $n$ vertices, let $G$ have
the maximum number of edges. We show $G$ is a complete multipartite graph.

*Claim: non-adjacency is transitive in $G$.* Suppose not: there are vertices $u, v, w$ with $uv
\notin E$ and $vw \notin E$ but $uw \in E$. Consider two surgeries. (i) If $\deg(v) \lt \deg(u)$,
delete $v$ and insert a **twin of $u$** (a new vertex adjacent to exactly $u$'s neighbors). The
result is still $K_{r+1}$-free — any clique using the twin could use $u$ instead — and has more
edges (we replaced $\deg v$ by $\deg u$), contradicting maximality. Symmetrically if $\deg(v) \lt
\deg(w)$. (ii) Otherwise $\deg(v) \ge \deg(u)$ and $\deg(v) \ge \deg(w)$. Delete both $u$ and $w$
and replace each by a twin of $v$. Because $uw$ was an edge but no clique may reuse $v$ against
itself (the two twins of $v$ are non-adjacent), one checks the new graph is $K_{r+1}$-free; its
edge count changes by $2\deg(v) - \big(\deg u + \deg w - 1\big) \ge 1 \gt 0$ (the $-1$ removes the
double-counted edge $uw$), again beating $G$. Either way we contradict maximality, so no such
$u,v,w$ exist and non-adjacency is transitive.

Being reflexive, symmetric, and (just shown) transitive on the vertex set, "non-adjacency" is an
equivalence relation; its classes are independent sets, and every pair of vertices in *different*
classes is adjacent. Thus $G$ is a complete multipartite graph, with some number $s$ of parts.
Since a complete $s$-partite graph contains $K_s$ (one vertex per part), $K_{r+1}$-freeness forces
$s \le r$; and adding a class can only add edges, so the optimum uses exactly $s = r$ parts.

*Optimal part sizes.* With part sizes $n_1, \dots, n_r$ summing to $n$, the number of edges is
$\binom n2 - \sum_i \binom{n_i}2$, so maximizing edges means **minimizing** $\sum_i \binom{n_i}2 =
\tfrac12\sum_i n_i^2 - \tfrac n2$. Minimizing $\sum n_i^2$ under a fixed sum, over integers, is
achieved when the $n_i$ differ by at most $1$ (if two parts differed by $\ge 2$, moving one vertex
from the larger to the smaller strictly decreases $\sum n_i^2$). That is exactly the Turán graph
$T(n,r)$. When $r \mid n$ each $n_i = n/r$ and
$$e(T(n,r)) = \binom n2 - r\binom{n/r}{2} = \frac{n^2 - n}{2} - r\cdot\frac{(n/r)(n/r - 1)}{2}
= \left(1 - \frac1r\right)\frac{n^2}{2}. \qquad \blacksquare$$

### Worked Instance

**Resolve the Hook ($r=2$, $n=6$).** Mantel gives at most $\lfloor 36/4\rfloor = 9$ edges for a
triangle-free graph on $6$ vertices, attained by $K_{3,3}$: two groups of three, all $3\cdot 3 = 9$
cross-edges present, and indeed no triangle (any triangle would need two vertices in one part, but
those are non-adjacent). So $9$ is both the bound and a construction.

**Forbid $K_4$ ($r=3$, $n=6$).** Turán says the max is $(1 - \tfrac13)\tfrac{36}{2} = \tfrac23\cdot
18 = 12$ edges, attained by $T(6,3) = K_{2,2,2}$ — three parts of two, i.e. the octahedron. Check
directly: $e = \binom 62 - 3\binom 22 = 15 - 3 = 12$, and it has no $K_4$ because any four vertices
include two from a common part, which are non-adjacent.

### Pitfalls

- **The floor matters for odd $n$.** $\lfloor n^2/4\rfloor$ equals $n^2/4$ only when $n$ is even;
  for odd $n$ the extremal graph is $K_{(n-1)/2,\,(n+1)/2}$ with $\tfrac{n^2-1}{4}$ edges.
- **$K_{r+1}$-free means $r$ parts, not $r+1$.** Clique number $\le r$ forces at most $r$ classes;
  the "$+1$" counts the forbidden clique's vertices. Off-by-one here is the classic error.
- **Balance, not arbitrary parts.** *Any* complete $r$-partite graph avoids $K_{r+1}$, but only the
  near-equal partition maximizes edges; lopsided parts lose edges.
- **The bound is an upper bound on edges, achieved uniquely.** A graph can have far fewer edges and
  still be $K_{r+1}$-free; Turán only forbids exceeding the count, and pins down equality.
- **"Triangle-free" is not "bipartite."** Extremal triangle-free graphs happen to be bipartite, but
  triangle-free graphs in general (e.g. the $5$-cycle) need not be.

:::
:::

## Connections

Prereqs: basic graph structure and connectivity (`comb-graph-connectivity`) for the vocabulary of
degrees and neighborhoods, and the extremal principle (`comb-extremal`) — "take the maximizer and
show it must be structured" is exactly the Zykov argument. Turán's theorem is the founding result of
extremal graph theory and the launch point for the Erdős–Stone–Simonovits theorem (which pins the
asymptotic edge density for forbidding any fixed subgraph). Recognition trigger: "maximum edges /
connections with no clique (or no triangle) of a given size," or any density-forcing problem.
Appears on the Putnam, olympiad graph-theory rounds, and throughout combinatorics.

## History

The triangle case was posed and solved by the Dutch mathematician Willem Mantel in 1907, as a problem
in the journal *Wiskundige Opgaven*. The general clique bound was proved in 1941 by the Hungarian
Pál (Paul) Turán, who, remarkably, worked it out while confined in a Nazi forced-labor camp during
World War II — he later recalled doing mathematics in his head to stay sane, and this theorem was the
fruit. Turán's paper is now regarded as the birth of extremal graph theory as a systematic
discipline, and his friend Paul Erdős became its tireless champion, generalizing it in countless
directions. The Erdős–Stone theorem (1946), sometimes called the "fundamental theorem of extremal
graph theory," later showed that the Turán density governs the asymptotics for forbidding *any*
non-bipartite subgraph. The subject mattered because it recast graph problems as optimization: among
all graphs avoiding a pattern, which is the densest, and what must it look like?
