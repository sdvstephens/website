How many genuinely different ways can you color the $6$ faces of a cube with $2$ colors, if
rotating the cube into a matching coloring counts as the same? Naively there are $2^6 = 64$
colorings, but rotations merge many of them; the true count is $10$. Dividing $64$ by "the number
of rotations" gives $64/24$, not an integer — so brute division fails, and something subtler is
needed.

## Discovery

1. Set up the language. A finite group $G$ of symmetries **acts** on a set $X$ of configurations:
   each $g\in G$ permutes $X$. Two configurations are "the same" if some $g$ carries one to the
   other; the equivalence classes are called **orbits**. For the cube, $X$ is the $64$ colorings
   and $G$ is the $24$ rotations. We want the number of orbits.
2. For $g\in G$, let $\mathrm{Fix}(g) = \{x\in X : g\cdot x = x\}$ be the configurations $g$ leaves
   **unchanged**. Consider the set of *incidence pairs* $\{(g,x) : g\cdot x = x\}$. Count it one
   way by summing over $g$: what sum of $|\mathrm{Fix}(g)|$ appears?
3. Count the *same* pairs the other way, grouping by $x$. The set of $g$ fixing a given $x$ is its
   **stabilizer** $\mathrm{Stab}(x)$, a subgroup. Using the orbit–stabilizer theorem
   $|\mathrm{Orbit}(x)|\cdot|\mathrm{Stab}(x)| = |G|$, express $\sum_x |\mathrm{Stab}(x)|$ in
   terms of the orbits. (Sum $|\mathrm{Stab}(x)|$ over the $x$ in one orbit first.)
4. Equate the two counts of the incidence pairs. Solve for the number of orbits. Which quantity —
   averaged over the group — gives it?
5. Apply the resulting formula to the cube: for each *type* of rotation (identity, face turns,
   edge turns, vertex turns), count the colorings it fixes, then average over all $24$. Does the
   fraction now come out to a whole number?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Burnside's lemma (orbit-counting theorem).** If a finite group $G$ acts on a finite set $X$,
the number of orbits equals the *average* number of fixed points of the group elements:
$$\#\text{orbits} = \frac{1}{|G|}\sum_{g\in G} |\mathrm{Fix}(g)|,\qquad \mathrm{Fix}(g)=\{x\in X: g\cdot x = x\}.$$
The name is a historical misattribution (Cauchy and Frobenius knew it earlier — hence the joke
"not-Burnside's lemma"), so it is not a theorem *named* after its discoverer. It counts
configurations "up to symmetry" by replacing the failed idea "divide by $|G|$" with "average the
fixed-point counts."

### Proof

Count the set of incidence pairs $P = \{(g,x)\in G\times X : g\cdot x = x\}$ two ways (double
counting).

*By group elements:* for each $g$, the pairs with first coordinate $g$ are exactly the $x$ fixed
by $g$, so $|P| = \sum_{g\in G} |\mathrm{Fix}(g)|$.

*By configurations:* for each $x$, the pairs with second coordinate $x$ are the $g$ that fix $x$,
i.e. the stabilizer, so $|P| = \sum_{x\in X} |\mathrm{Stab}(x)|$. By the orbit–stabilizer theorem,
$|\mathrm{Stab}(x)| = |G|/|\mathrm{Orbit}(x)|$. Group the sum by orbits: within a single orbit
$O$, every $x\in O$ has $|\mathrm{Orbit}(x)| = |O|$, so
$$\sum_{x\in O} |\mathrm{Stab}(x)| = \sum_{x\in O}\frac{|G|}{|O|} = |O|\cdot\frac{|G|}{|O|} = |G|.$$
Thus each orbit contributes exactly $|G|$ to $\sum_x |\mathrm{Stab}(x)|$, giving
$|P| = |G|\cdot(\#\text{orbits})$. Equating the two counts of $|P|$:
$$\sum_{g\in G}|\mathrm{Fix}(g)| = |G|\cdot(\#\text{orbits}) \;\Longrightarrow\; \#\text{orbits} = \frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}(g)|. \qquad \blacksquare$$

### Worked Instance

Colorings of a cube's $6$ faces with $2$ colors, up to the $24$ rotations (resolving the Hook).
Group the rotations by type and count fixed colorings (a coloring is fixed iff faces in the same
cycle of the rotation share a color, so it contributes $2^{(\#\text{cycles on faces})}$):
- **Identity** ($1$ element): fixes all $2^6 = 64$.
- **Face rotations by $\pm90^\circ$** ($6$ elements): the $4$ side faces form one $4$-cycle, top and
  bottom fixed → $3$ face-cycles → $2^3 = 8$ each.
- **Face rotations by $180^\circ$** ($3$ elements): side faces split into two $2$-cycles, top/bottom
  fixed → $4$ cycles → $2^4 = 16$ each.
- **Vertex rotations by $\pm120^\circ$** ($8$ elements): faces form two $3$-cycles → $2^2 = 4$ each.
- **Edge rotations by $180^\circ$** ($6$ elements): faces form three $2$-cycles → $2^3 = 8$ each.

Average:
$$\frac{1}{24}\big(64 + 6\cdot 8 + 3\cdot 16 + 8\cdot 4 + 6\cdot 8\big) = \frac{64+48+48+32+48}{24} = \frac{240}{24} = 10.$$
So there are exactly $10$ distinct cube colorings — and the average is a clean integer where
$64/24$ was not.

### Pitfalls

- **Average, do not divide.** The count is $\frac1{|G|}\sum_g|\mathrm{Fix}(g)|$, not
  $|X|/|G|$; the latter is wrong precisely because some configurations have nontrivial symmetry.
- **Include the identity**, which fixes *everything* ($|\mathrm{Fix}(e)| = |X|$) and usually
  dominates the sum. Omitting it is a frequent slip.
- $\mathrm{Fix}(g)$ counts configurations unchanged by $g$ — typically $k^{\,c(g)}$ where $c(g)$ is
  the number of cycles $g$ induces on the objects being colored with $k$ colors. Miscounting cycles
  (or mixing up "cycles on faces" vs. "on vertices") is the main computational error.
- Be sure you have the **right group**: rotations only, or rotations *and* reflections
  (the full symmetry group)? The two give different answers.

:::
:::

## Connections

Prereqs: double counting (`comb-double-counting`) — Burnside *is* a double count of fixed-point
incidences, plus the orbit–stabilizer theorem from group theory. It generalizes the
"overcount-by-a-symmetry-then-correct" idea seen with multinomials (`comb-multinomial`), handling
the case where different configurations have *different* amounts of symmetry (so you cannot simply
divide). Its refinement, Pólya enumeration, tracks colors with a generating function. Recognition
trigger: "count arrangements/colorings up to rotation/reflection/relabeling," especially when naive
division by the symmetry count gives a non-integer.
